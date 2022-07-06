/** Built with 2DKit, http://2dkit.com */
'use strict';
(function(Wh) {
    function m(a, b) {
        function c() {} c.prototype = a; var d = new c,
            e; for (e in b) d[e] = b[e];
        b.toString !== Object.prototype.toString && (d.toString = b.toString); return d }

    function pg(a) { return a instanceof Array ? function() { return E.iter(a) } : "function" == typeof a.iterator ? Ra(a, a.iterator) : a.iterator }

    function Ra(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = bi++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var h = {},
        l = function() { return aa.__string_rec(this, "") },
        wb = function() {};
    h.DateTools = wb;
    wb.__name__ = ["DateTools"];
    wb.__format_get = function(a, b) {
        switch (b) {
            case "%":
                return "%";
            case "C":
                return K.lpad(p.string(p["int"](a.getFullYear() / 100)), "0", 2);
            case "d":
                return K.lpad(p.string(a.getDate()), "0", 2);
            case "D":
                return wb.__format(a, "%m/%d/%y");
            case "e":
                return p.string(a.getDate());
            case "F":
                return wb.__format(a, "%Y-%m-%d");
            case "H":
            case "k":
                return K.lpad(p.string(a.getHours()),
                    "H" == b ? "0" : " ", 2);
            case "I":
            case "l":
                var c = a.getHours() % 12;
                return K.lpad(p.string(0 == c ? 12 : c), "I" == b ? "0" : " ", 2);
            case "m":
                return K.lpad(p.string(a.getMonth() + 1), "0", 2);
            case "M":
                return K.lpad(p.string(a.getMinutes()), "0", 2);
            case "n":
                return "\n";
            case "p":
                return 11 < a.getHours() ? "PM" : "AM";
            case "r":
                return wb.__format(a, "%I:%M:%S %p");
            case "R":
                return wb.__format(a, "%H:%M");
            case "s":
                return p.string(p["int"](a.getTime() / 1E3));
            case "S":
                return K.lpad(p.string(a.getSeconds()), "0", 2);
            case "t":
                return "\t";
            case "T":
                return wb.__format(a,
                    "%H:%M:%S");
            case "u":
                return c = a.getDay(), 0 == c ? "7" : null == c ? "null" : "" + c;
            case "w":
                return p.string(a.getDay());
            case "y":
                return K.lpad(p.string(a.getFullYear() % 100), "0", 2);
            case "Y":
                return p.string(a.getFullYear());
            default:
                throw new s("Date.format %" + b + "- not implemented yet.");
        }
    };
    wb.__format = function(a, b) { for (var c = new Xa, d = 0;;) { var e = b.indexOf("%", d); if (0 > e) break;
            c.addSub(b, d, e - d);
            c.add(wb.__format_get(a, E.substr(b, e + 1, 1)));
            d = e + 2 } c.addSub(b, d, b.length - d); return c.b };
    wb.format = function(a, b) {
        return wb.__format(a,
            b)
    };
    var Ja = function(a, b) { b = b.split("u").join("");
        this.r = RegExp(a, b) };
    h.EReg = Ja;
    Ja.__name__ = ["EReg"];
    Ja.prototype = {
        match: function(a) { this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a; return null != this.r.m },
        matched: function(a) { if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a]; throw new s("EReg::matched"); },
        matchedPos: function() { if (null == this.r.m) throw new s("No string matched"); return { pos: this.r.m.index, len: this.r.m[0].length } },
        matchSub: function(a, b, c) {
            null == c && (c = -1);
            if (this.r.global) { this.r.lastIndex = b;
                this.r.m = this.r.exec(0 > c ? a : E.substr(a, 0, b + c)); if (b = null != this.r.m) this.r.s = a; return b }
            if (c = this.match(0 > c ? E.substr(a, b, null) : E.substr(a, b, c))) this.r.s = a, this.r.m.index += b;
            return c
        },
        replace: function(a, b) { return a.replace(this.r, b) },
        map: function(a, b) {
            var c = 0,
                d = new Xa;
            do {
                if (c >= a.length) break;
                else if (!this.matchSub(a, c)) { d.add(E.substr(a, c, null)); break }
                var e = this.matchedPos();
                d.add(E.substr(a, c, e.pos - c));
                d.add(b(this));
                0 == e.len ? (d.add(E.substr(a, e.pos, 1)), c = e.pos +
                    1) : c = e.pos + e.len
            } while (this.r.global);
            !this.r.global && 0 < c && c < a.length && d.add(E.substr(a, c, null));
            return d.b
        },
        __class__: Ja
    };
    var E = function() {};
    h.HxOverrides = E;
    E.__name__ = ["HxOverrides"];
    E.strDate = function(a) {
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
    E.cca = function(a, b) { var c = a.charCodeAt(b); return c != c ? void 0 : c };
    E.substr = function(a, b, c) { if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b); return a.substr(b, c) };
    E.remove = function(a, b) { var c = a.indexOf(b); if (-1 == c) return !1;
        a.splice(c, 1); return !0 };
    E.iter = function(a) { return { cur: 0, arr: a, hasNext: function() { return this.cur < this.arr.length }, next: function() { return this.arr[this.cur++] } } };
    var Tb = function() {};
    h.Lambda = Tb;
    Tb.__name__ = ["Lambda"];
    Tb.array = function(a) { var b = []; for (a = pg(a)(); a.hasNext();) { var c = a.next();
            b.push(c) } return b };
    Tb.exists = function(a, b) { for (var c = pg(a)(); c.hasNext();) { var d = c.next(); if (b(d)) return !0 } return !1 };
    Tb.filter = function(a, b) { for (var c = new Ba, d = pg(a)(); d.hasNext();) { var e = d.next();
            b(e) && c.add(e) } return c };
    Tb.count = function(a, b) { var c = 0; if (null == b)
            for (var d = pg(a)(); d.hasNext();) d.next(), c++;
        else
            for (d = pg(a)(); d.hasNext();) { var e = d.next();
                b(e) && c++ }
        return c };
    var Ba = function() { this.length = 0 };
    h.List = Ba;
    Ba.__name__ = ["List"];
    Ba.prototype = {
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
        iterator: function() { return new qg(this.h) },
        __class__: Ba
    };
    var qg = function(a) { this.head = a;
        this.val = null };
    h["_List.ListIterator"] = qg;
    qg.__name__ = ["_List", "ListIterator"];
    qg.prototype = { hasNext: function() { return null != this.head }, next: function() { this.val = this.head[0];
            this.head = this.head[1]; return this.val }, __class__: qg };
    var lb = function() {};
    h["kit.util.Disposable"] = lb;
    lb.__name__ = ["kit", "util", "Disposable"];
    lb.prototype = { __class__: lb };
    var C = function() { this.$C = null;
        this.$B = 0;
        this.owner = this.next = null };
    h["kit.Component"] =
        C;
    C.__name__ = ["kit", "Component"];
    C.__interfaces__ = [lb];
    C.prototype = {
        onAdded: function() {},
        onRemoved: function() { null != this.$C && this.$C.$DH() },
        onStart: function() {},
        onStop: function() {},
        onUpdate: function(a) {},
        onMessage: function(a, b) { if (null != this.$C) { var c = this.$C.$BH; if (null != c && (c = null != Ca[a] ? c.getReserved(a) : c.h[a], null != c && null != c.$$H)) return c.emit(b), !0 } return !1 },
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
        registerDisposable: function(a) { null == this.$C && (this.$C = new rg);
            null == this.$C.$CH && (this.$C.$CH = []);
            this.$C.$CH.push(a) },
        dispose: function() { null != this.owner ? this.owner.remove(this) : null != this.$C && this.$C.$DH() },
        get_entitySlot: function() { return -1 },
        $A: function() {},
        __class__: C,
        __properties__: { get_entitySlot: "get_entitySlot" }
    };
    var Rd = function() { C.call(this) };
    h.Main = Rd;
    Rd.__name__ = ["Main"];
    Rd.__super__ = C;
    Rd.prototype = m(C.prototype, {
        get_entitySlot: function() { return 23 },
        onSuccess: function() { this.owner.add(new Ub);
            this.owner.$KH[10].set("isMobile", z.get_mobile());
            this.owner.add(new Sd("preloader")); var a = Vb.get_base(),
                b = new Hc;
            this.owner.add(b);
            null != a && "" != a && (-1 < a.toLowerCase().indexOf("http:") || -1 < a.toLowerCase().indexOf("https:") ? (a.charAt(a.length - 1), b.remoteBase = a + "assets") : b.localBase = a + "/assets");
            this.checkSavedData() },
        checkSavedData: function() {
            t.$EI.getLocalStorage().get("isFirstPlaythrough").then(function(a) {
                a ||
                    !a && !1 != a ? t.$EI.getLocalStorage().set("isFirstPlaythrough", !0) : t.$EI.getLocalStorage().set("isFirstPlaythrough", !1)
            });
            var a = this.owner.$KH[10];
            t.$EI.getLocalStorage().get("highscore").then(function(b) { null == b ? (t.$EI.getLocalStorage().set("highscore", 9999999), a.set("highscore", 9999999), null) : a.set("highscore", b) })
        },
        onStart: function() { t.root.add(new Td);
            xb.init(new Ud("28588953831537162381414683914334"), Ra(this, this.onSuccess)) },
        __class__: Rd
    });
    Math.__name__ = ["Math"];
    var P = function() {};
    h.Reflect = P;
    P.__name__ = ["Reflect"];
    P.hasField = function(a, b) { return Object.prototype.hasOwnProperty.call(a, b) };
    P.field = function(a, b) { try { return a[b] } catch (c) { return c instanceof s && (c = c.val), null } };
    P.setField = function(a, b, c) { a[b] = c };
    P.getProperty = function(a, b) { var c; return null == a ? null : a.__properties__ && (c = a.__properties__["get_" + b]) ? a[c]() : a[b] };
    P.setProperty = function(a, b, c) { var d; if (a.__properties__ && (d = a.__properties__["set_" + b])) a[d](c);
        else a[b] = c };
    P.callMethod = function(a, b, c) { return b.apply(a, c) };
    P.fields = function(a) {
        var b = [];
        if (null != a) { var c = Object.prototype.hasOwnProperty,
                d; for (d in a) "__id__" != d && "hx__closures__" != d && c.call(a, d) && b.push(d) }
        return b
    };
    P.isFunction = function(a) { return "function" == typeof a && !(a.__name__ || a.__ename__) };
    P.compare = function(a, b) { return a == b ? 0 : a > b ? 1 : -1 };
    P.deleteField = function(a, b) { if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b]; return !0 };
    var p = function() {};
    h.Std = p;
    p.__name__ = ["Std"];
    p.is = function(a, b) { return aa.__instanceof(a, b) };
    p.instance = function(a, b) {
        return a instanceof
        b ? a : null
    };
    p.string = function(a) { return aa.__string_rec(a, "") };
    p["int"] = function(a) { return a | 0 };
    p.parseInt = function(a) { var b = parseInt(a, 10);
        0 != b || 120 != E.cca(a, 1) && 88 != E.cca(a, 1) || (b = parseInt(a)); return isNaN(b) ? null : b };
    p.parseFloat = function(a) { return parseFloat(a) };
    var Xa = function() { this.b = "" };
    h.StringBuf = Xa;
    Xa.__name__ = ["StringBuf"];
    Xa.prototype = { add: function(a) { this.b += p.string(a) }, addSub: function(a, b, c) { this.b = null == c ? this.b + E.substr(a, b, null) : this.b + E.substr(a, b, c) }, __class__: Xa };
    var K = function() {};
    h.StringTools = K;
    K.__name__ = ["StringTools"];
    K.htmlEscape = function(a, b) { a = a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"); return b ? a.split('"').join("&quot;").split("'").join("&#039;") : a };
    K.startsWith = function(a, b) { return a.length >= b.length && E.substr(a, 0, b.length) == b };
    K.isSpace = function(a, b) { var c = E.cca(a, b); return 8 < c && 14 > c || 32 == c };
    K.ltrim = function(a) { for (var b = a.length, c = 0; c < b && K.isSpace(a, c);) c++; return 0 < c ? E.substr(a, c, b - c) : a };
    K.rtrim = function(a) {
        for (var b = a.length, c =
                0; c < b && K.isSpace(a, b - c - 1);) c++;
        return 0 < c ? E.substr(a, 0, b - c) : a
    };
    K.trim = function(a) { return K.ltrim(K.rtrim(a)) };
    K.lpad = function(a, b, c) { if (0 >= b.length) return a; for (; a.length < c;) a = b + a; return a };
    K.replace = function(a, b, c) { return a.split(b).join(c) };
    K.fastCodeAt = function(a, b) { return a.charCodeAt(b) };
    var X = h.ValueType = { __ename__: ["ValueType"], __constructs__: "TNull TInt TFloat TBool TObject TFunction TClass TEnum TUnknown".split(" ") };
    X.TNull = ["TNull", 0];
    X.TNull.toString = l;
    X.TNull.__enum__ = X;
    X.TInt = ["TInt",
        1
    ];
    X.TInt.toString = l;
    X.TInt.__enum__ = X;
    X.TFloat = ["TFloat", 2];
    X.TFloat.toString = l;
    X.TFloat.__enum__ = X;
    X.TBool = ["TBool", 3];
    X.TBool.toString = l;
    X.TBool.__enum__ = X;
    X.TObject = ["TObject", 4];
    X.TObject.toString = l;
    X.TObject.__enum__ = X;
    X.TFunction = ["TFunction", 5];
    X.TFunction.toString = l;
    X.TFunction.__enum__ = X;
    X.TClass = function(a) { a = ["TClass", 6, a];
        a.__enum__ = X;
        a.toString = l; return a };
    X.TEnum = function(a) { a = ["TEnum", 7, a];
        a.__enum__ = X;
        a.toString = l; return a };
    X.TUnknown = ["TUnknown", 8];
    X.TUnknown.toString = l;
    X.TUnknown.__enum__ =
        X;
    var ca = function() {};
    h.Type = ca;
    ca.__name__ = ["Type"];
    ca.getClassName = function(a) { a = a.__name__; return null == a ? null : a.join(".") };
    ca.getEnumName = function(a) { return a.__ename__.join(".") };
    ca.resolveClass = function(a) { a = h[a]; return null != a && a.__name__ ? a : null };
    ca.resolveEnum = function(a) { a = h[a]; return null != a && a.__ename__ ? a : null };
    ca.createInstance = function(a, b) {
        switch (b.length) {
            case 0:
                return new a;
            case 1:
                return new a(b[0]);
            case 2:
                return new a(b[0], b[1]);
            case 3:
                return new a(b[0], b[1], b[2]);
            case 4:
                return new a(b[0],
                    b[1], b[2], b[3]);
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
    ca.createEmptyInstance = function(a) {
        function b() {} b.prototype = a.prototype; return new b };
    ca.createEnum = function(a, b, c) {
        var d = P.field(a, b);
        if (null == d) throw new s("No such constructor " + b);
        if (P.isFunction(d)) {
            if (null == c) throw new s("Constructor " +
                b + " need parameters");
            return P.callMethod(a, d, c)
        }
        if (null != c && 0 != c.length) throw new s("Constructor " + b + " does not need parameters");
        return d
    };
    ca.getEnumConstructs = function(a) { return a.__constructs__.slice() };
    ca["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return X.TBool;
            case "string":
                return X.TClass(String);
            case "number":
                return Math.ceil(a) == a % 2147483648 ? X.TInt : X.TFloat;
            case "object":
                if (null == a) return X.TNull;
                var b = a.__enum__;
                if (null != b) return X.TEnum(b);
                a = aa.getClass(a);
                return null != a ? X.TClass(a) :
                    X.TObject;
            case "function":
                return a.__name__ || a.__ename__ ? X.TObject : X.TFunction;
            case "undefined":
                return X.TNull;
            default:
                return X.TUnknown
        }
    };
    var r = function(a) { this.nodeType = a;
        this.children = [];
        this.attributeMap = new T };
    h.Xml = r;
    r.__name__ = ["Xml"];
    r.parse = function(a) { return bc.parse(a) };
    r.createElement = function(a) { var b = new r(r.Element); if (b.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + b.nodeType);
        b.nodeName = a; return b };
    r.createPCData = function(a) {
        var b = new r(r.PCData);
        if (b.nodeType ==
            r.Document || b.nodeType == r.Element) throw new s("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    r.createCData = function(a) { var b = new r(r.CData); if (b.nodeType == r.Document || b.nodeType == r.Element) throw new s("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a; return b };
    r.createComment = function(a) { var b = new r(r.Comment); if (b.nodeType == r.Document || b.nodeType == r.Element) throw new s("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a; return b };
    r.createDocType = function(a) {
        var b = new r(r.DocType);
        if (b.nodeType == r.Document || b.nodeType == r.Element) throw new s("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    r.createProcessingInstruction = function(a) { var b = new r(r.ProcessingInstruction); if (b.nodeType == r.Document || b.nodeType == r.Element) throw new s("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a; return b };
    r.createDocument = function() { return new r(r.Document) };
    r.prototype = {
        get_nodeName: function() {
            if (this.nodeType != r.Element) throw new s("Bad node type, expected Element but found " +
                this.nodeType);
            return this.nodeName
        },
        get_nodeValue: function() { if (this.nodeType == r.Document || this.nodeType == r.Element) throw new s("Bad node type, unexpected " + this.nodeType); return this.nodeValue },
        get: function(a) { if (this.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + this.nodeType); return this.attributeMap.get(a) },
        set: function(a, b) { if (this.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + this.nodeType);
            this.attributeMap.set(a, b) },
        exists: function(a) {
            if (this.nodeType !=
                r.Element) throw new s("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.exists(a)
        },
        attributes: function() { if (this.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + this.nodeType); return this.attributeMap.keys() },
        iterator: function() { if (this.nodeType != r.Document && this.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType); return E.iter(this.children) },
        elements: function() {
            if (this.nodeType != r.Document &&
                this.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var a = [], b = 0, c = this.children; b < c.length;) { var d = c[b];++b;
                d.nodeType == r.Element && a.push(d) }
            return E.iter(a)
        },
        elementsNamed: function(a) {
            if (this.nodeType != r.Document && this.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var b = [], c = 0, d = this.children; c < d.length;) {
                var e = d[c];
                ++c;
                var f;
                if (f = e.nodeType == r.Element) {
                    f = void 0;
                    if (e.nodeType !=
                        r.Element) throw new s("Bad node type, expected Element but found " + e.nodeType);
                    f = e.nodeName;
                    f = f == a
                }
                f && b.push(e)
            }
            return E.iter(b)
        },
        firstChild: function() { if (this.nodeType != r.Document && this.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType); return this.children[0] },
        firstElement: function() {
            if (this.nodeType != r.Document && this.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var a = 0, b = this.children; a <
                b.length;) { var c = b[a];++a; if (c.nodeType == r.Element) return c }
            return null
        },
        addChild: function(a) { if (this.nodeType != r.Document && this.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType);
            null != a.parent && a.parent.removeChild(a);
            this.children.push(a);
            a.parent = this },
        removeChild: function(a) {
            if (this.nodeType != r.Document && this.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + this.nodeType);
            return E.remove(this.children,
                a) ? (a.parent = null, !0) : !1
        },
        toString: function() { return Ic.print(this) },
        __class__: r,
        __properties__: { get_nodeValue: "get_nodeValue", get_nodeName: "get_nodeName" }
    };
    var Wb = function() { this.lowerBound = new w;
        this.upperBound = new w };
    h["box2d.collision.AABB"] = Wb;
    Wb.__name__ = ["box2d", "collision", "AABB"];
    Wb.prototype = {
        getCenter: function() { return new w((this.lowerBound.x + this.upperBound.x) / 2, (this.lowerBound.y + this.upperBound.y) / 2) },
        contains: function(a) {
            var b;
            return b = (b = (b = (b = this.lowerBound.x <= a.lowerBound.x) &&
                this.lowerBound.y <= a.lowerBound.y) && a.upperBound.x <= this.upperBound.x) && a.upperBound.y <= this.upperBound.y
        },
        testOverlap: function(a) { var b = a.lowerBound.y - this.upperBound.y,
                c = this.lowerBound.y - a.upperBound.y; return 0 < a.lowerBound.x - this.upperBound.x || 0 < b || 0 < this.lowerBound.x - a.upperBound.x || 0 < c ? !1 : !0 },
        combine: function(a, b) {
            this.lowerBound.x = Math.min(a.lowerBound.x, b.lowerBound.x);
            this.lowerBound.y = Math.min(a.lowerBound.y, b.lowerBound.y);
            this.upperBound.x = Math.max(a.upperBound.x, b.upperBound.x);
            this.upperBound.y =
                Math.max(a.upperBound.y, b.upperBound.y)
        },
        __class__: Wb
    };
    var Wd = function() { this.v = new w;
        this.id = new Vd };
    h["box2d.collision.ClipVertex"] = Wd;
    Wd.__name__ = ["box2d", "collision", "ClipVertex"];
    Wd.prototype = { set: function(a) { this.v.setV(a.v);
            this.id.set(a.id) }, __class__: Wd };
    var w = function(a, b) { null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b };
    h["box2d.common.math.Vec2"] = w;
    w.__name__ = ["box2d", "common", "math", "Vec2"];
    w.make = function(a, b) { return new w(a, b) };
    w.prototype = {
        setZero: function() { this.y = this.x = 0 },
        set: function(a,
            b) { null == b && (b = 0);
            null == a && (a = 0);
            this.x = a;
            this.y = b },
        setV: function(a) { this.x = a.x;
            this.y = a.y },
        getNegative: function() { return new w(-this.x, -this.y) },
        negativeSelf: function() { this.x = -this.x;
            this.y = -this.y },
        copy: function() { return new w(this.x, this.y) },
        subtract: function(a) { this.x -= a.x;
            this.y -= a.y },
        multiply: function(a) { this.x *= a;
            this.y *= a },
        length: function() { return Math.sqrt(this.x * this.x + this.y * this.y) },
        lengthSquared: function() { return this.x * this.x + this.y * this.y },
        normalize: function() {
            var a = Math.sqrt(this.x *
                this.x + this.y * this.y);
            if (2.2250738585072014E-308 > a) return 0;
            var b = 1 / a;
            this.x *= b;
            this.y *= b;
            return a
        },
        __class__: w
    };
    var Vd = function() { this.features = new sg;
        this.features.$K = this };
    h["box2d.collision.ContactID"] = Vd;
    Vd.__name__ = ["box2d", "collision", "ContactID"];
    Vd.prototype = {
        set: function(a) { this.set_key(a.$F) },
        set_key: function(a) { this.$F = a;
            this.features.$G = this.$F & 255;
            this.features.$H = (this.$F & 65280) >> 8 & 255;
            this.features.$I = (this.$F & 16711680) >> 16 & 255;
            this.features.$J = (this.$F & -16777216) >> 24 & 255; return this.$F },
        __class__: Vd,
        __properties__: { set_key: "set_key" }
    };
    var sg = function() {};
    h["box2d.collision.Features"] = sg;
    sg.__name__ = ["box2d", "collision", "Features"];
    sg.prototype = {
        set_referenceEdge: function(a) { this.$G = a;
            this.$K.$F = this.$K.$F & -256 | this.$G & 255; return a },
        set_incidentEdge: function(a) { this.$H = a;
            this.$K.$F = this.$K.$F & -65281 | this.$H << 8 & 65280; return a },
        set_incidentVertex: function(a) { this.$I = a;
            this.$K.$F = this.$K.$F & -16711681 | this.$I << 16 & 16711680; return a },
        set_flip: function(a) {
            this.$J = a;
            this.$K.$F = this.$K.$F &
                16777215 | this.$J << 24 & -16777216;
            return a
        },
        __class__: sg,
        __properties__: { set_flip: "set_flip", set_incidentVertex: "set_incidentVertex", set_incidentEdge: "set_incidentEdge", set_referenceEdge: "set_referenceEdge" }
    };
    var N = function() {};
    h["box2d.collision.Collision"] = N;
    N.__name__ = ["box2d", "collision", "Collision"];
    N.clipSegmentToLine = function(a, b, c, d) {
        var e, f = 0;
        e = b[0];
        var k = e.v;
        e = b[1];
        var n = e.v,
            q = c.x * k.x + c.y * k.y - d;
        e = c.x * n.x + c.y * n.y - d;
        0 >= q && a[f++].set(b[0]);
        0 >= e && a[f++].set(b[1]);
        0 > q * e && (c = q / (q - e), e = a[f], e = e.v,
            e.x = k.x + c * (n.x - k.x), e.y = k.y + c * (n.y - k.y), e = a[f], e.id = (0 < q ? b[0] : b[1]).id, ++f);
        return f
    };
    N.edgeSeparation = function(a, b, c, d, e) {
        var f = a.$d;
        a = a.$qB;
        var k = d.$rB,
            n = d.$d,
            q, g;
        q = b.R;
        g = a[c];
        a = q.col1.x * g.x + q.col2.x * g.y;
        d = q.col1.y * g.x + q.col2.y * g.y;
        q = e.R;
        var h = q.col1.x * a + q.col1.y * d;
        q = q.col2.x * a + q.col2.y * d;
        for (var l = 0, x = 1.7976931348623157E308, m = 0; m < k;) { var na = m++;
            g = n[na];
            g = g.x * h + g.y * q;
            g < x && (x = g, l = na) } g = f[c];
        q = b.R;
        c = b.position.x + (q.col1.x * g.x + q.col2.x * g.y);
        b = b.position.y + (q.col1.y * g.x + q.col2.y * g.y);
        g = n[l];
        q = e.R;
        f =
            e.position.x + (q.col1.x * g.x + q.col2.x * g.y);
        e = e.position.y + (q.col1.y * g.x + q.col2.y * g.y);
        return (f - c) * a + (e - b) * d
    };
    N.findMaxSeparation = function(a, b, c, d, e) {
        var f = b.$rB,
            k = b.$qB,
            n, q;
        q = e.R;
        n = d.$pB;
        var g = e.position.x + (q.col1.x * n.x + q.col2.x * n.y),
            h = e.position.y + (q.col1.y * n.x + q.col2.y * n.y);
        q = c.R;
        n = b.$pB;
        g -= c.position.x + (q.col1.x * n.x + q.col2.x * n.y);
        h -= c.position.y + (q.col1.y * n.x + q.col2.y * n.y);
        q = g * c.R.col1.x + h * c.R.col1.y;
        for (var h = g * c.R.col2.x + h * c.R.col2.y, g = 0, l = -1.7976931348623157E308, x = 0; x < f;) {
            var m = x++;
            n = k[m];
            n = n.x *
                q + n.y * h;
            n > l && (l = n, g = m)
        }
        k = N.edgeSeparation(b, c, g, d, e);
        l = 0 <= g - 1 ? g - 1 : f - 1;
        q = N.edgeSeparation(b, c, l, d, e);
        x = g + 1 < f ? g + 1 : 0;
        h = N.edgeSeparation(b, c, x, d, e);
        if (q > k && q > h) n = -1;
        else if (h > k) n = 1, l = x, q = h;
        else return a[0] = g, k;
        for (;;)
            if (g = -1 == n ? 0 <= l - 1 ? l - 1 : f - 1 : l + 1 < f ? l + 1 : 0, k = N.edgeSeparation(b, c, g, d, e), k > q) l = g, q = k;
            else break;
        a[0] = l;
        return q
    };
    N.findIncidentEdge = function(a, b, c, d, e, f) {
        var k = b.$qB,
            n = e.$rB;
        b = e.$d;
        e = e.$qB;
        var q;
        q = c.R;
        c = k[d];
        var k = q.col1.x * c.x + q.col2.x * c.y,
            g = q.col1.y * c.x + q.col2.y * c.y;
        q = f.R;
        c = q.col1.x * k + q.col1.y *
            g;
        g = q.col2.x * k + q.col2.y * g;
        k = c;
        q = 0;
        for (var h = 1.7976931348623157E308, l = 0; l < n;) { var x = l++;
            c = e[x];
            c = k * c.x + g * c.y;
            c < h && (h = c, q = x) } e = q;
        k = e + 1 < n ? e + 1 : 0;
        n = a[0];
        c = b[e];
        q = f.R;
        n.v.x = f.position.x + (q.col1.x * c.x + q.col2.x * c.y);
        n.v.y = f.position.y + (q.col1.y * c.x + q.col2.y * c.y);
        n.id.features.set_referenceEdge(d);
        n.id.features.set_incidentEdge(e);
        n.id.features.set_incidentVertex(0);
        n = a[1];
        c = b[k];
        q = f.R;
        n.v.x = f.position.x + (q.col1.x * c.x + q.col2.x * c.y);
        n.v.y = f.position.y + (q.col1.y * c.x + q.col2.y * c.y);
        n.id.features.set_referenceEdge(d);
        n.id.features.set_incidentEdge(k);
        n.id.features.set_incidentVertex(1)
    };
    N.$L = function() { var a = [];
        a[0] = new Wd;
        a[1] = new Wd; return a };
    N.collidePolygons = function(a, b, c, d, e) {
        var f;
        a.$GB = 0;
        var k = b.$l + d.$l,
            n;
        N.$P[0] = 0;
        var q = N.findMaxSeparation(N.$P, b, c, d, e);
        n = N.$P[0];
        if (!(q > k)) {
            var g;
            N.$Q[0] = 0;
            var h = N.findMaxSeparation(N.$Q, d, e, b, c);
            g = N.$Q[0];
            if (!(h > k)) {
                h > 0.98 * q + 0.001 ? (q = d, d = b, b = e, a.$FB = 2, n = 1) : (q = b, b = c, c = e, g = n, a.$FB = 1, n = 0);
                e = N.$M;
                N.findIncidentEdge(e, q, b, g, d, c);
                h = q.$d;
                d = h[g];
                var l;
                l = g + 1 < q.$rB ? h[g + 1] : h[0];
                q = N.$R;
                q.set(l.x - d.x, l.y - d.y);
                q.normalize();
                h = N.$S;
                h.x = q.y;
                h.y = -q.x;
                f = N.$T;
                f.set(0.5 * (d.x + l.x), 0.5 * (d.y + l.y));
                var x = N.$V;
                g = b.R;
                x.x = g.col1.x * q.x + g.col2.x * q.y;
                x.y = g.col1.y * q.x + g.col2.y * q.y;
                var m = N.$W;
                m.x = -x.x;
                m.y = -x.y;
                q = N.$U;
                q.x = x.y;
                q.y = -x.x;
                var na = N.$X,
                    p = N.$Y;
                na.x = b.position.x + (g.col1.x * d.x + g.col2.x * d.y);
                na.y = b.position.y + (g.col1.y * d.x + g.col2.y * d.y);
                p.x = b.position.x + (g.col1.x * l.x + g.col2.x * l.y);
                p.y = b.position.y + (g.col1.y * l.x + g.col2.y * l.y);
                b = q.x * na.x + q.y * na.y;
                g = x.x * p.x + x.y * p.y + k;
                l = N.$N;
                d = N.$O;
                e = N.clipSegmentToLine(l,
                    e, m, -x.x * na.x - x.y * na.y + k);
                if (!(2 > e || (e = N.clipSegmentToLine(d, l, x, g), 2 > e))) { a.$DB.setV(h);
                    a.$EB.setV(f); for (h = e = 0; 2 > h;) g = h++, f = d[g], q.x * f.v.x + q.y * f.v.y - b <= k && (x = a.$CB[e], g = c.R, m = f.v.x - c.position.x, na = f.v.y - c.position.y, x.$EB.x = m * g.col1.x + na * g.col1.y, x.$EB.y = m * g.col2.x + na * g.col2.y, x.$JB.set(f.id), x.$JB.features.set_flip(n), ++e);
                    a.$GB = e }
            }
        }
    };
    N.collideCircles = function(a, b, c, d, e) {
        a.$GB = 0;
        var f, k;
        f = c.R;
        k = b.$ZB;
        var n = c.position.x + (f.col1.x * k.x + f.col2.x * k.y);
        c = c.position.y + (f.col1.y * k.x + f.col2.y * k.y);
        f = e.R;
        k = d.$ZB;
        n = e.position.x + (f.col1.x * k.x + f.col2.x * k.y) - n;
        e = e.position.y + (f.col1.y * k.x + f.col2.y * k.y) - c;
        f = b.$l + d.$l;
        n * n + e * e > f * f || (a.$FB = 0, a.$EB.setV(b.$ZB), a.$DB.setZero(), a.$GB = 1, a.$CB[0].$EB.setV(d.$ZB), a.$CB[0].$JB.set_key(0))
    };
    N.collidePolygonAndCircle = function(a, b, c, d, e) {
        a.$GB = 0;
        var f, k, n, q;
        q = e.R;
        n = d.$ZB;
        var g = e.position.y + (q.col1.y * n.x + q.col2.y * n.y);
        f = e.position.x + (q.col1.x * n.x + q.col2.x * n.y) - c.position.x;
        k = g - c.position.y;
        q = c.R;
        c = f * q.col1.x + k * q.col1.y;
        q = f * q.col2.x + k * q.col2.y;
        var h = 0;
        e = -1.7976931348623157E308;
        var g = b.$l + d.$l,
            l = b.$rB,
            x = b.$d;
        b = b.$qB;
        for (var m = 0; m < l;) { var na = m++;
            n = x[na];
            f = c - n.x;
            k = q - n.y;
            n = b[na];
            n = n.x * f + n.y * k; if (n > g) return;
            n > e && (e = n, h = na) } n = h;
        f = x[n];
        l = x[n + 1 < l ? n + 1 : 0];
        2.2250738585072014E-308 > e ? (a.$GB = 1, a.$FB = 1, a.$DB.setV(b[h]), a.$EB.x = 0.5 * (f.x + l.x), a.$EB.y = 0.5 * (f.y + l.y), a.$CB[0].$EB.setV(d.$ZB), a.$CB[0].$JB.set_key(0)) : (e = (c - l.x) * (f.x - l.x) + (q - l.y) * (f.y - l.y), 0 >= (c - f.x) * (l.x - f.x) + (q - f.y) * (l.y - f.y) ? (c - f.x) * (c - f.x) + (q - f.y) * (q - f.y) > g * g || (a.$GB = 1, a.$FB = 1, a.$DB.x = c - f.x, a.$DB.y = q - f.y, a.$DB.normalize(),
            a.$EB.setV(f), a.$CB[0].$EB.setV(d.$ZB), a.$CB[0].$JB.set_key(0)) : 0 >= e ? (c - l.x) * (c - l.x) + (q - l.y) * (q - l.y) > g * g || (a.$GB = 1, a.$FB = 1, a.$DB.x = c - l.x, a.$DB.y = q - l.y, a.$DB.normalize(), a.$EB.setV(l), a.$CB[0].$EB.setV(d.$ZB), a.$CB[0].$JB.set_key(0)) : (h = 0.5 * (f.x + l.x), f = 0.5 * (f.y + l.y), e = (c - h) * b[n].x + (q - f) * b[n].y, e > g || (a.$GB = 1, a.$FB = 1, a.$DB.x = b[n].x, a.$DB.y = b[n].y, a.$DB.normalize(), a.$EB.set(h, f), a.$CB[0].$EB.setV(d.$ZB), a.$CB[0].$JB.set_key(0))))
    };
    var tg = function() {
        this.$a = new ed;
        this.$b = new ed;
        this.$c = new ed;
        this.$d = [];
        this.$d[0] = this.$a;
        this.$d[1] = this.$b;
        this.$d[2] = this.$c
    };
    h["box2d.collision.Simplex"] = tg;
    tg.__name__ = ["box2d", "collision", "Simplex"];
    tg.prototype = {
        readCache: function(a, b, c, d, e) {
            var f, k;
            this.$e = a.count;
            for (var n = this.$d, q, g = 0, h = this.$e; g < h;) f = g++, q = n[f], q.indexA = a.indexA[f], q.indexB = a.indexB[f], f = b.$d[q.indexA], k = d.$d[q.indexB], q.wA = A.mulX(c, f), q.wB = A.mulX(e, k), q.w = A.subtractVV(q.wB, q.wA), q.a = 0;
            1 < this.$e && (a = a.metric, q = this.getMetric(), q < 0.5 * a || 2 * a < q || 2.2250738585072014E-308 > q) && (this.$e = 0);
            0 ==
                this.$e && (q = n[0], q.indexA = 0, q.indexB = 0, f = b.$d[0], k = d.$d[0], q.wA = A.mulX(c, f), q.wB = A.mulX(e, k), q.w = A.subtractVV(q.wB, q.wA), this.$e = 1)
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
                    var a = A.subtractVV(this.$b.w, this.$a.w);
                    return 0 < A.crossVV(a, this.$a.w.getNegative()) ? A.crossFV(1, a) : A.crossVF(a, 1);
                default:
                    return new w
            }
        },
        getClosestPoint: function() { switch (this.$e) {
                case 0:
                    return new w;
                case 1:
                    return this.$a.w;
                case 2:
                    return new w(this.$a.a * this.$a.w.x + this.$b.a * this.$b.w.x, this.$a.a * this.$a.w.y + this.$b.a * this.$b.w.y);
                default:
                    return new w } },
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
                    a.x = this.$a.a * this.$a.wA.x + this.$b.a * this.$b.wA.x;
                    a.y = this.$a.a * this.$a.wA.y + this.$b.a * this.$b.wA.y;
                    b.x = this.$a.a * this.$a.wB.x + this.$b.a *
                        this.$b.wB.x;
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
        getMetric: function() { switch (this.$e) {
                case 0:
                    return 0;
                case 1:
                    return 0;
                case 2:
                    return A.subtractVV(this.$a.w, this.$b.w).length();
                case 3:
                    return A.crossVV(A.subtractVV(this.$b.w, this.$a.w), A.subtractVV(this.$c.w, this.$a.w));
                default:
                    return 0 } },
        solve2: function() {
            var a =
                this.$a.w,
                b = this.$b.w,
                c = A.subtractVV(b, a),
                a = -(a.x * c.x + a.y * c.y);
            0 >= a ? this.$e = this.$a.a = 1 : (b = b.x * c.x + b.y * c.y, 0 >= b ? (this.$e = this.$b.a = 1, this.$a.set(this.$b)) : (c = 1 / (b + a), this.$a.a = b * c, this.$b.a = a * c, this.$e = 2))
        },
        solve3: function() {
            var a = this.$a.w,
                b = this.$b.w,
                c = this.$c.w,
                d = A.subtractVV(b, a),
                e = A.dot(a, d),
                f = A.dot(b, d),
                e = -e,
                k = A.subtractVV(c, a),
                n = A.dot(a, k),
                q = A.dot(c, k),
                n = -n,
                g = A.subtractVV(c, b),
                h = A.dot(b, g),
                g = A.dot(c, g),
                h = -h,
                k = A.crossVV(d, k),
                d = k * A.crossVV(b, c),
                c = k * A.crossVV(c, a),
                a = k * A.crossVV(a, b);
            0 >= e && 0 >=
                n ? this.$e = this.$a.a = 1 : 0 < f && 0 < e && 0 >= a ? (q = 1 / (f + e), this.$a.a = f * q, this.$b.a = e * q, this.$e = 2) : 0 < q && 0 < n && 0 >= c ? (f = 1 / (q + n), this.$a.a = q * f, this.$c.a = n * f, this.$e = 2, this.$b.set(this.$c)) : 0 >= f && 0 >= h ? (this.$e = this.$b.a = 1, this.$a.set(this.$b)) : 0 >= q && 0 >= g ? (this.$e = this.$c.a = 1, this.$a.set(this.$c)) : 0 < g && 0 < h && 0 >= d ? (f = 1 / (g + h), this.$b.a = g * f, this.$c.a = h * f, this.$e = 2, this.$a.set(this.$c)) : (f = 1 / (d + c + a), this.$a.a = d * f, this.$b.a = c * f, this.$c.a = a * f, this.$e = 3)
        },
        __class__: tg
    };
    var ed = function() {};
    h["box2d.collision.SimplexVertex"] =
        ed;
    ed.__name__ = ["box2d", "collision", "SimplexVertex"];
    ed.prototype = { set: function(a) { this.wA.setV(a.wA);
            this.wB.setV(a.wB);
            this.w.setV(a.w);
            this.a = a.a;
            this.indexA = a.indexA;
            this.indexB = a.indexB }, __class__: ed };
    var bb = function() {};
    h["box2d.collision.Distance"] = bb;
    bb.__name__ = ["box2d", "collision", "Distance"];
    bb.distance = function(a, b, c) {
        ++bb.$f;
        var d = c.proxyA,
            e = c.proxyB,
            f = c.transformA,
            k = c.transformB,
            n = bb.$i;
        n.readCache(b, d, f, e, k);
        var q = n.$d,
            g = bb.$j,
            h = bb.$k,
            l = 0;
        n.getClosestPoint().lengthSquared();
        for (var x,
                m = 0; 20 > m;) {
            l = n.$e;
            for (x = 0; x < l;) { var na = x++;
                g[na] = q[na].indexA;
                h[na] = q[na].indexB }
            switch (n.$e) {
                case 1:
                    break;
                case 2:
                    n.solve2(); break;
                case 3:
                    n.solve3(); break;
                default:
                    null }
            if (3 == n.$e) break;
            x = n.getClosestPoint();
            x.lengthSquared();
            na = n.getSearchDirection();
            if (0 > na.lengthSquared()) break;
            x = q[n.$e];
            x.indexA = d.getSupport(A.mulTMV(f.R, na.getNegative()));
            x.wA = A.mulX(f, d.$d[x.indexA]);
            x.indexB = e.getSupport(A.mulTMV(k.R, na));
            x.wB = A.mulX(k, e.$d[x.indexB]);
            x.w = A.subtractVV(x.wB, x.wA);
            ++m;
            ++bb.$g;
            for (var na = !1, p =
                    0; p < l;) { var r = p++; if (x.indexA == g[r] && x.indexB == h[r]) { na = !0; break } }
            if (na) break;
            ++n.$e
        }
        bb.$h = A.max(bb.$h, m);
        n.getWitnessPoints(a.pointA, a.pointB);
        a.distance = A.subtractVV(a.pointA, a.pointB).length();
        a.iterations = m;
        n.writeCache(b);
        c.useRadii && (b = d.$l, e = e.$l, a.distance > b + e && 2.2250738585072014E-308 < a.distance ? (a.distance -= b + e, c = A.subtractVV(a.pointB, a.pointA), c.normalize(), a.pointA.x += b * c.x, a.pointA.y += b * c.y, a.pointB.x -= e * c.x, a.pointB.y -= e * c.y) : (x = new w, x.x = 0.5 * (a.pointA.x + a.pointB.x), x.y = 0.5 * (a.pointA.y +
            a.pointB.y), a.pointA.x = a.pointB.x = x.x, a.pointA.y = a.pointB.y = x.y, a.distance = 0))
    };
    var Xd = function() {};
    h["box2d.collision.DistanceInput"] = Xd;
    Xd.__name__ = ["box2d", "collision", "DistanceInput"];
    Xd.prototype = { __class__: Xd };
    var Yd = function() { this.pointA = new w;
        this.pointB = new w };
    h["box2d.collision.DistanceOutput"] = Yd;
    Yd.__name__ = ["box2d", "collision", "DistanceOutput"];
    Yd.prototype = { __class__: Yd };
    var Jc = function() { this.$d = [] };
    h["box2d.collision.DistanceProxy"] = Jc;
    Jc.__name__ = ["box2d", "collision", "DistanceProxy"];
    Jc.prototype = {
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
        getSupportVertex: function(a) { for (var b = 0, c = this.$d[0].x * a.x + this.$d[0].y * a.y, d = 1, e = this.$e; d < e;) { var f = d++,
                    k = this.$d[f].x * a.x + this.$d[f].y * a.y;
                k > c && (b = f, c = k) } return this.$d[b] },
        __class__: Jc
    };
    var ug = function() { this.$r = this.$q = null;
        this.$t = this.$s = 0 };
    h["box2d.collision.DynamicTree"] = ug;
    ug.__name__ = ["box2d", "collision", "DynamicTree"];
    ug.prototype = {
        createProxy: function(a, b) { var c = this.$m();
            c.aabb.lowerBound.x = a.lowerBound.x - 0.1;
            c.aabb.lowerBound.y = a.lowerBound.y - 0.1;
            c.aabb.upperBound.x = a.upperBound.x + 0.1;
            c.aabb.upperBound.y = a.upperBound.y + 0.1;
            c.userData = b;
            this.$o(c); return c },
        destroyProxy: function(a) { this.$p(a);
            this.$n(a) },
        moveProxy: function(a, b, c) {
            if (a.aabb.contains(b)) return !1;
            this.$p(a);
            var d;
            d = 0.1 + 2 * (0 < c.x ? c.x : -c.x);
            c = 0.1 + 2 * (0 < c.y ? c.y : -c.y);
            a.aabb.lowerBound.x = b.lowerBound.x - d;
            a.aabb.lowerBound.y = b.lowerBound.y - c;
            a.aabb.upperBound.x = b.upperBound.x + d;
            a.aabb.upperBound.y = b.upperBound.y + c;
            this.$o(a);
            return !0
        },
        getFatAABB: function(a) { return a.aabb },
        getUserData: function(a) { return a.userData },
        query: function(a, b) { if (null != this.$q) { var c = [],
                    d = 0; for (c[d++] = this.$q; 0 < d;) { var e = c[--d]; if (e.aabb.testOverlap(b))
                        if (null == e.child1) { if (!a(e)) break } else c[d++] = e.child1, c[d++] = e.child2 } } },
        $m: function() { if (null != this.$r) { var a = this.$r;
                this.$r = a.parent;
                a.parent = null;
                a.child1 = null;
                a.child2 = null; return a } return new fd },
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
                        f = Math.abs((c.aabb.lowerBound.x + c.aabb.upperBound.x) /
                            2 - b.x) + Math.abs((c.aabb.lowerBound.y + c.aabb.upperBound.y) / 2 - b.y),
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
            if (a == this.$q) this.$q = null;
            else {
                var b = a.parent,
                    c = b.parent;
                a = b.child1 == a ? b.child2 : b.child1;
                if (null != c)
                    for (c.child1 == b ? c.child1 = a : c.child2 = a, a.parent = c, this.$n(b); null != c;) { b = c.aabb;
                        c.aabb = new Wb;
                        c.aabb.combine(c.child1.aabb, c.child2.aabb); if (b.contains(c.aabb)) break;
                        c = c.parent } else this.$q = a, a.parent = null, this.$n(b)
            }
        },
        __class__: ug
    };
    var vg = function() {};
    h["box2d.collision.IBroadPhase"] = vg;
    vg.__name__ = ["box2d", "collision", "IBroadPhase"];
    vg.prototype = { __class__: vg };
    var Zd = function() { this.$x = new ug;
        this.$z = [];
        this.$$ = [];
        this.$_ = 0 };
    h["box2d.collision.DynamicTreeBroadPhase"] =
        Zd;
    Zd.__name__ = ["box2d", "collision", "DynamicTreeBroadPhase"];
    Zd.__interfaces__ = [vg];
    Zd.prototype = {
        createProxy: function(a, b) { var c = this.$x.createProxy(a, b);++this.$y;
            this.$u(c); return c },
        destroyProxy: function(a) { this.$v(a);--this.$y;
            this.$x.destroyProxy(a) },
        moveProxy: function(a, b, c) { this.$x.moveProxy(a, b, c) && this.$u(a) },
        testOverlap: function(a, b) { var c = this.$x.getFatAABB(a),
                d = this.$x.getFatAABB(b); return c.testOverlap(d) },
        updatePairs: function(a) {
            for (var b = this, c = this.$_ = 0, d = this.$z; c < d.length;) {
                var e = [d[c]];
                ++c;
                var f = function(a) { return function(c) { if (c == a[0]) return !0;
                            b.$_ == b.$$.length && (b.$$[b.$_] = new wg); var d = b.$$[b.$_];
                            c.$AB < a[0].$AB ? (d.proxyA = c, d.proxyB = a[0]) : (d.proxyA = a[0], d.proxyB = c);++b.$_; return !0 } }(e),
                    e = this.$x.getFatAABB(e[0]);
                this.$x.query(f, e)
            }
            this.$z = [];
            c = !0;
            for (d = 0; c;)
                if (d >= this.$_) c = !1;
                else { var f = this.$$[d],
                        e = this.$x.getUserData(f.proxyA),
                        k = this.$x.getUserData(f.proxyB);
                    a(e, k); for (++d; d < this.$_;) { e = this.$$[d]; if (e.proxyA != f.proxyA || e.proxyB != f.proxyB) break;++d } }
        },
        $u: function(a) {
            this.$z[this.$z.length] =
                a
        },
        $v: function(a) { E.remove(this.$z, a) },
        __class__: Zd
    };
    var fd = function() { this.aabb = new Wb;
        this.$AB = fd.$BB++ };
    h["box2d.collision.DynamicTreeNode"] = fd;
    fd.__name__ = ["box2d", "collision", "DynamicTreeNode"];
    fd.prototype = { __class__: fd };
    var wg = function() {};
    h["box2d.collision.DynamicTreePair"] = wg;
    wg.__name__ = ["box2d", "collision", "DynamicTreePair"];
    wg.prototype = { __class__: wg };
    var $d = function() { this.$GB = 0;
        this.$CB = []; for (var a = 0; 2 > a;) { var b = a++;
            this.$CB[b] = new xg } this.$DB = new w;
        this.$EB = new w };
    h["box2d.collision.Manifold"] =
        $d;
    $d.__name__ = ["box2d", "collision", "Manifold"];
    $d.prototype = { __class__: $d };
    var xg = function() { this.$EB = new w;
        this.$JB = new Vd;
        this.reset() };
    h["box2d.collision.ManifoldPoint"] = xg;
    xg.__name__ = ["box2d", "collision", "ManifoldPoint"];
    xg.prototype = { reset: function() { this.$EB.setZero();
            this.$IB = this.$HB = 0;
            this.$JB.set_key(0) }, __class__: xg };
    var yg = function() { this.$EB = new w;
        this.$MB = new w };
    h["box2d.collision.SeparationFunction"] = yg;
    yg.__name__ = ["box2d", "collision", "SeparationFunction"];
    yg.prototype = {
        initialize: function(a,
            b, c, d, e) {
            this.$KB = b;
            this.$LB = d;
            b = a.count;
            var f = new w,
                k = new w,
                n, q;
            if (1 == b) this.$FB = 0, f = this.$KB.$d[a.indexA[0]], k = this.$LB.$d[a.indexB[0]], q = f, n = c.R, f = c.position.x + (n.col1.x * q.x + n.col2.x * q.y), c = c.position.y + (n.col1.y * q.x + n.col2.y * q.y), q = k, n = e.R, k = e.position.x + (n.col1.x * q.x + n.col2.x * q.y), e = e.position.y + (n.col1.y * q.x + n.col2.y * q.y), this.$MB.x = k - f, this.$MB.y = e - c, this.$MB.normalize();
            else {
                if (a.indexB[0] == a.indexB[1]) this.$FB = 1, b = this.$KB.$d[a.indexA[0]], d = this.$KB.$d[a.indexA[1]], k = this.$LB.$d[a.indexB[0]],
                    this.$EB.x = 0.5 * (b.x + d.x), this.$EB.y = 0.5 * (b.y + d.y), this.$MB = A.crossVF(A.subtractVV(d, b), 1), this.$MB.normalize(), q = this.$MB, n = c.R, b = n.col1.x * q.x + n.col2.x * q.y, d = n.col1.y * q.x + n.col2.y * q.y, q = this.$EB, n = c.R, f = c.position.x + (n.col1.x * q.x + n.col2.x * q.y), c = c.position.y + (n.col1.y * q.x + n.col2.y * q.y), q = k, n = e.R, k = e.position.x + (n.col1.x * q.x + n.col2.x * q.y), e = e.position.y + (n.col1.y * q.x + n.col2.y * q.y), a = (k - f) * b + (e - c) * d;
                else if (a.indexA[0] == a.indexA[0]) this.$FB = 2, n = this.$LB.$d[a.indexB[0]], q = this.$LB.$d[a.indexB[1]], f =
                    this.$KB.$d[a.indexA[0]], this.$EB.x = 0.5 * (n.x + q.x), this.$EB.y = 0.5 * (n.y + q.y), this.$MB = A.crossVF(A.subtractVV(q, n), 1), this.$MB.normalize(), q = this.$MB, n = e.R, b = n.col1.x * q.x + n.col2.x * q.y, d = n.col1.y * q.x + n.col2.y * q.y, q = this.$EB, n = e.R, k = e.position.x + (n.col1.x * q.x + n.col2.x * q.y), e = e.position.y + (n.col1.y * q.x + n.col2.y * q.y), q = f, n = c.R, f = c.position.x + (n.col1.x * q.x + n.col2.x * q.y), c = c.position.y + (n.col1.y * q.x + n.col2.y * q.y), a = (f - k) * b + (c - e) * d;
                else {
                    b = this.$KB.$d[a.indexA[0]];
                    d = this.$KB.$d[a.indexA[1]];
                    n = this.$LB.$d[a.indexB[0]];
                    q = this.$LB.$d[a.indexB[1]];
                    A.mulX(c, f);
                    f = A.mulMV(c.R, A.subtractVV(d, b));
                    A.mulX(e, k);
                    a = A.mulMV(e.R, A.subtractVV(q, n));
                    e = f.x * f.x + f.y * f.y;
                    c = a.x * a.x + a.y * a.y;
                    var g = A.subtractVV(a, f),
                        k = f.x * g.x + f.y * g.y,
                        g = a.x * g.x + a.y * g.y,
                        f = f.x * a.x + f.y * a.y,
                        h = e * c - f * f;
                    a = 0;
                    0 != h && (a = A.clamp((f * g - k * c) / h, 0, 1));
                    0 > (f * a + g) / c && (a = A.clamp((f - k) / e, 0, 1));
                    f = new w;
                    f.x = b.x + a * (d.x - b.x);
                    f.y = b.y + a * (d.y - b.y);
                    k = new w;
                    k.x = n.x + a * (q.x - n.x);
                    k.y = n.y + a * (q.y - n.y);
                    0 == a || 1 == a ? (this.$FB = 2, this.$MB = A.crossVF(A.subtractVV(q, n), 1), this.$MB.normalize(), this.$EB =
                        k) : (this.$FB = 1, this.$MB = A.crossVF(A.subtractVV(d, b), 1), this.$EB = f)
                }
                0 > a && this.$MB.negativeSelf()
            }
        },
        evaluate: function(a, b) {
            var c, d, e;
            switch (this.$FB) {
                case 0:
                    return c = A.mulTMV(a.R, this.$MB), d = A.mulTMV(b.R, this.$MB.getNegative()), c = this.$KB.getSupportVertex(c), d = this.$LB.getSupportVertex(d), c = A.mulX(a, c), d = A.mulX(b, d), e = (d.x - c.x) * this.$MB.x + (d.y - c.y) * this.$MB.y;
                case 1:
                    return e = A.mulMV(a.R, this.$MB), c = A.mulX(a, this.$EB), d = A.mulTMV(b.R, e.getNegative()), d = this.$LB.getSupportVertex(d), d = A.mulX(b, d), e = (d.x -
                        c.x) * e.x + (d.y - c.y) * e.y;
                case 2:
                    return e = A.mulMV(b.R, this.$MB), d = A.mulX(b, this.$EB), c = A.mulTMV(a.R, e.getNegative()), c = this.$KB.getSupportVertex(c), c = A.mulX(a, c), e = (c.x - d.x) * e.x + (c.y - d.y) * e.y
            }
        },
        __class__: yg
    };
    var ae = function() { this.indexA = [];
        this.indexB = [] };
    h["box2d.collision.SimplexCache"] = ae;
    ae.__name__ = ["box2d", "collision", "SimplexCache"];
    ae.prototype = { __class__: ae };
    var zg = function() { this.proxyA = new Jc;
        this.proxyB = new Jc;
        this.sweepA = new pc;
        this.sweepB = new pc };
    h["box2d.collision.TOIInput"] = zg;
    zg.__name__ = ["box2d", "collision", "TOIInput"];
    zg.prototype = { __class__: zg };
    var qc = function(a, b) { this.position = new w;
        this.R = new gd;
        null != a && (this.position.setV(a), this.R.setM(b)) };
    h["box2d.common.math.Transform"] = qc;
    qc.__name__ = ["box2d", "common", "math", "Transform"];
    qc.prototype = { __class__: qc };
    var gd = function() { this.col1 = new w(1, 0);
        this.col2 = new w(0, 1) };
    h["box2d.common.math.Mat22"] = gd;
    gd.__name__ = ["box2d", "common", "math", "Mat22"];
    gd.prototype = {
        set: function(a) {
            var b = Math.cos(a);
            a = Math.sin(a);
            this.col1.x = b;
            this.col2.x = -a;
            this.col1.y = a;
            this.col2.y = b
        },
        setM: function(a) { this.col1.setV(a.col1);
            this.col2.setV(a.col2) },
        getInverse: function(a) { var b = this.col1.x,
                c = this.col2.x,
                d = this.col1.y,
                e = this.col2.y,
                f = b * e - c * d;
            0 != f && (f = 1 / f);
            a.col1.x = f * e;
            a.col2.x = -f * c;
            a.col1.y = -f * d;
            a.col2.y = f * b; return a },
        __class__: gd
    };
    var Q = function() {};
    h["box2d.collision.TimeOfImpact"] = Q;
    Q.__name__ = ["box2d", "collision", "TimeOfImpact"];
    Q.timeOfImpact = function(a) {
        ++Q.$NB;
        var b = a.proxyA,
            c = a.proxyB,
            d = a.sweepA,
            e = a.sweepB,
            f = b.$l + c.$l;
        a = a.tolerance;
        var k = 0,
            n = 0,
            q = 0;
        Q.$SB.count = 0;
        for (Q.$TB.useRadii = !1;;) {
            d.getTransform(Q.$UB, k);
            e.getTransform(Q.$VB, k);
            Q.$TB.proxyA = b;
            Q.$TB.proxyB = c;
            Q.$TB.transformA = Q.$UB;
            Q.$TB.transformB = Q.$VB;
            bb.distance(Q.$XB, Q.$SB, Q.$TB);
            if (0 >= Q.$XB.distance) { k = 1; break } Q.$WB.initialize(Q.$SB, b, Q.$UB, c, Q.$VB);
            var g = Q.$WB.evaluate(Q.$UB, Q.$VB);
            if (0 >= g) { k = 1; break } 0 == n && (q = g > f ? A.max(f - a, 0.75 * f) : A.max(g - a, 0.02 * f));
            if (g - q < 0.5 * a) { if (0 == n) { k = 1; break } break }
            var h = k,
                l = k,
                x = 1;
            d.getTransform(Q.$UB, x);
            e.getTransform(Q.$VB, x);
            var m = Q.$WB.evaluate(Q.$UB,
                Q.$VB);
            if (m >= q) { k = 1; break }
            for (var p = 0;;) { var r;
                r = 0 != (p & 1) ? l + (q - g) * (x - l) / (m - g) : 0.5 * (l + x);
                d.getTransform(Q.$UB, r);
                e.getTransform(Q.$VB, r); var cb = Q.$WB.evaluate(Q.$UB, Q.$VB); if (A.abs(cb - q) < 0.025 * a) { h = r; break } cb > q ? (l = r, g = cb) : (x = r, m = cb);++p;++Q.$QB; if (50 == p) break } Q.$RB = A.max(Q.$RB, p);
            if (h < k) break;
            k = h;
            n++;
            ++Q.$OB;
            if (1E3 == n) break
        }
        Q.$PB = A.max(Q.$PB, n);
        return k
    };
    var Kc = function() { this.$YB = new w;
        this.$CB = []; for (var a = 0; 2 > a;) { var b = a++;
            this.$CB[b] = new w } };
    h["box2d.collision.WorldManifold"] = Kc;
    Kc.__name__ = ["box2d",
        "collision", "WorldManifold"
    ];
    Kc.prototype = {
        initialize: function(a, b, c, d, e) {
            if (0 != a.$GB) {
                var f, k, n, q, g, h, l;
                switch (a.$FB) {
                    case 0:
                        k = b.R;
                        f = a.$EB;
                        n = b.position.x + k.col1.x * f.x + k.col2.x * f.y;
                        q = b.position.y + k.col1.y * f.x + k.col2.y * f.y;
                        k = d.R;
                        f = a.$CB[0].$EB;
                        a = d.position.x + k.col1.x * f.x + k.col2.x * f.y;
                        f = d.position.y + k.col1.y * f.x + k.col2.y * f.y;
                        k = a - n;
                        d = f - q;
                        g = k * k + d * d;
                        0 < g ? (g = Math.sqrt(g), this.$YB.x = k / g, this.$YB.y = d / g) : (this.$YB.x = 1, this.$YB.y = 0);
                        k = q + c * this.$YB.y;
                        f -= e * this.$YB.y;
                        this.$CB[0].x = 0.5 * (n + c * this.$YB.x + (a - e * this.$YB.x));
                        this.$CB[0].y = 0.5 * (k + f);
                        break;
                    case 1:
                        k = b.R;
                        f = a.$DB;
                        n = k.col1.x * f.x + k.col2.x * f.y;
                        q = k.col1.y * f.x + k.col2.y * f.y;
                        k = b.R;
                        f = a.$EB;
                        g = b.position.x + k.col1.x * f.x + k.col2.x * f.y;
                        h = b.position.y + k.col1.y * f.x + k.col2.y * f.y;
                        this.$YB.x = n;
                        this.$YB.y = q;
                        b = 0;
                        for (var x = a.$GB; b < x;) { var m = b++;
                            k = d.R;
                            f = a.$CB[m].$EB;
                            l = d.position.x + k.col1.x * f.x + k.col2.x * f.y;
                            f = d.position.y + k.col1.y * f.x + k.col2.y * f.y;
                            this.$CB[m].x = l + 0.5 * (c - (l - g) * n - (f - h) * q - e) * n;
                            this.$CB[m].y = f + 0.5 * (c - (l - g) * n - (f - h) * q - e) * q }
                        break;
                    case 2:
                        for (k = d.R, f = a.$DB, n = k.col1.x * f.x +
                            k.col2.x * f.y, q = k.col1.y * f.x + k.col2.y * f.y, k = d.R, f = a.$EB, g = d.position.x + k.col1.x * f.x + k.col2.x * f.y, h = d.position.y + k.col1.y * f.x + k.col2.y * f.y, this.$YB.x = -n, this.$YB.y = -q, d = 0, x = a.$GB; d < x;) m = d++, k = b.R, f = a.$CB[m].$EB, l = b.position.x + k.col1.x * f.x + k.col2.x * f.y, f = b.position.y + k.col1.y * f.x + k.col2.y * f.y, this.$CB[m].x = l + 0.5 * (e - (l - g) * n - (f - h) * q - c) * n, this.$CB[m].y = f + 0.5 * (e - (l - g) * n - (f - h) * q - c) * q
                }
            }
        },
        __class__: Kc
    };
    var Ya = function() { this.$FB = -1;
        this.$l = 0.005 };
    h["box2d.collision.shapes.Shape"] = Ya;
    Ya.__name__ = ["box2d", "collision",
        "shapes", "Shape"
    ];
    Ya.testOverlap = function(a, b, c, d) { var e = new Xd;
        e.proxyA = new Jc;
        e.proxyA.set(a);
        e.proxyB = new Jc;
        e.proxyB.set(c);
        e.transformA = b;
        e.transformB = d;
        e.useRadii = !0;
        a = new ae;
        a.count = 0;
        b = new Yd;
        bb.distance(b, a, e); return 2.2250738585072014E-307 > b.distance };
    Ya.prototype = { copy: function() { return null }, set: function(a) { this.$l = a.$l }, computeAABB: function(a, b) {}, computeMass: function(a, b) {}, __class__: Ya };
    var Lc = function(a) { null == a && (a = 0);
        Ya.call(this);
        this.$ZB = new w;
        this.$FB = 0;
        this.$l = a };
    h["box2d.collision.shapes.CircleShape"] =
        Lc;
    Lc.__name__ = ["box2d", "collision", "shapes", "CircleShape"];
    Lc.__super__ = Ya;
    Lc.prototype = m(Ya.prototype, {
        copy: function() { var a = new Lc;
            a.set(this); return a },
        set: function(a) { Ya.prototype.set.call(this, a);
            0 == a.$FB && this.$ZB.setV(a.$ZB) },
        computeAABB: function(a, b) { var c = b.R,
                d = b.position.x + (c.col1.x * this.$ZB.x + c.col2.x * this.$ZB.y),
                c = b.position.y + (c.col1.y * this.$ZB.x + c.col2.y * this.$ZB.y);
            a.lowerBound.set(d - this.$l, c - this.$l);
            a.upperBound.set(d + this.$l, c + this.$l) },
        computeMass: function(a, b) {
            a.mass = 3.141592653589793 *
                b * this.$l * this.$l;
            a.center.setV(this.$ZB);
            a.I = a.mass * (0.5 * this.$l * this.$l + (this.$ZB.x * this.$ZB.x + this.$ZB.y * this.$ZB.y))
        },
        setLocalPosition: function(a) { this.$ZB.setV(a) },
        __class__: Lc
    });
    var Ag = function() {};
    h["box2d.collision.shapes.EdgeShape"] = Ag;
    Ag.__name__ = ["box2d", "collision", "shapes", "EdgeShape"];
    Ag.__super__ = Ya;
    Ag.prototype = m(Ya.prototype, {
        computeAABB: function(a, b) {
            var c = b.R,
                d = b.position.x + (c.col1.x * this.$a.x + c.col2.x * this.$a.y),
                e = b.position.y + (c.col1.y * this.$a.x + c.col2.y * this.$a.y),
                f = b.position.x +
                (c.col1.x * this.$b.x + c.col2.x * this.$b.y),
                c = b.position.y + (c.col1.y * this.$b.x + c.col2.y * this.$b.y);
            d < f ? (a.lowerBound.x = d, a.upperBound.x = f) : (a.lowerBound.x = f, a.upperBound.x = d);
            e < c ? (a.lowerBound.y = e, a.upperBound.y = c) : (a.lowerBound.y = c, a.upperBound.y = e)
        },
        computeMass: function(a, b) { a.mass = 0;
            a.center.setV(this.$a);
            a.I = 0 },
        __class__: Ag
    });
    var Bg = function() { this.mass = 0;
        this.center = new w(0, 0);
        this.I = 0 };
    h["box2d.collision.shapes.MassData"] = Bg;
    Bg.__name__ = ["box2d", "collision", "shapes", "MassData"];
    Bg.prototype = { __class__: Bg };
    var Fa = function() { Ya.call(this);
        this.$FB = 1;
        this.$pB = new w;
        this.$d = [];
        this.$qB = [] };
    h["box2d.collision.shapes.PolygonShape"] = Fa;
    Fa.__name__ = ["box2d", "collision", "shapes", "PolygonShape"];
    Fa.asArray = function(a, b) { null == b && (b = 0); var c = new Fa;
        c.setAsArray(a, b); return c };
    Fa.asOrientedBox = function(a, b, c, d) { null == d && (d = 0); var e = new Fa;
        e.setAsOrientedBox(a, b, c, d); return e };
    Fa.asEdge = function(a, b) { var c = new Fa;
        c.setAsEdge(a, b); return c };
    Fa.computeCentroid = function(a, b) {
        for (var c = new w, d = 0, e = 0; e < b;) {
            var f = e++,
                k = a[f],
                f = f + 1 < b ? a[f + 1] : a[0],
                n = 0.5 * ((k.x - 0) * (f.y - 0) - (k.y - 0) * (f.x - 0)),
                d = d + n;
            c.x += 0.3333333333333333 * n * (0 + k.x + f.x);
            c.y += 0.3333333333333333 * n * (0 + k.y + f.y)
        }
        c.x *= 1 / d;
        c.y *= 1 / d;
        return c
    };
    Fa.__super__ = Ya;
    Fa.prototype = m(Ya.prototype, {
        copy: function() { var a = new Fa;
            a.set(this); return a },
        set: function(a) { Ya.prototype.set.call(this, a); if (1 == a.$FB) { this.$pB.setV(a.$pB);
                this.$rB = a.$rB;
                this.$oB(this.$rB); for (var b = 0, c = this.$rB; b < c;) { var d = b++;
                    this.$d[d].setV(a.$d[d]);
                    this.$qB[d].setV(a.$qB[d]) } } },
        setAsArray: function(a,
            b) { null == b && (b = 0);
            0 == b && (b = a.length);
            this.$rB = b;
            this.$oB(b); for (var c = 0, d = this.$rB; c < d;) { var e = c++;
                this.$d[e].setV(a[e]) } c = 0; for (d = this.$rB; c < d;) { var e = c++,
                    f = A.subtractVV(this.$d[e + 1 < this.$rB ? e + 1 : 0], this.$d[e]);
                Jh.that(2.2250738585072014E-308 < f.lengthSquared(), null, null);
                this.$qB[e].setV(A.crossVF(f, 1));
                this.$qB[e].normalize() } this.$pB = Fa.computeCentroid(this.$d, this.$rB) },
        setAsOrientedBox: function(a, b, c, d) {
            null == d && (d = 0);
            this.$rB = 4;
            this.$oB(4);
            this.$d[0].set(-a, -b);
            this.$d[1].set(a, -b);
            this.$d[2].set(a,
                b);
            this.$d[3].set(-a, b);
            this.$qB[0].set(0, -1);
            this.$qB[1].set(1, 0);
            this.$qB[2].set(0, 1);
            this.$qB[3].set(-1, 0);
            this.$pB = c;
            a = new qc;
            a.position = c;
            a.R.set(d);
            c = 0;
            for (d = this.$rB; c < d;) b = c++, this.$d[b] = A.mulX(a, this.$d[b]), this.$qB[b] = A.mulMV(a.R, this.$qB[b])
        },
        setAsEdge: function(a, b) { this.$rB = 2;
            this.$oB(2);
            this.$d[0].setV(a);
            this.$d[1].setV(b);
            this.$pB.x = 0.5 * (a.x + b.x);
            this.$pB.y = 0.5 * (a.y + b.y);
            this.$qB[0] = A.crossVF(A.subtractVV(b, a), 1);
            this.$qB[0].normalize();
            this.$qB[1].x = -this.$qB[0].x;
            this.$qB[1].y = -this.$qB[0].y },
        computeAABB: function(a, b) { for (var c = b.R, d = this.$d[0], e = b.position.x + (c.col1.x * d.x + c.col2.x * d.y), f = b.position.y + (c.col1.y * d.x + c.col2.y * d.y), k = e, n = f, q = 1, g = this.$rB; q < g;) { var h = q++,
                    d = this.$d[h],
                    h = b.position.x + (c.col1.x * d.x + c.col2.x * d.y),
                    d = b.position.y + (c.col1.y * d.x + c.col2.y * d.y);
                e < h || (e = h);
                f < d || (f = d);
                k > h || (k = h);
                n > d || (n = d) } a.lowerBound.x = e - this.$l;
            a.lowerBound.y = f - this.$l;
            a.upperBound.x = k + this.$l;
            a.upperBound.y = n + this.$l },
        computeMass: function(a, b) {
            if (2 == this.$rB) a.center.x = 0.5 * (this.$d[0].x + this.$d[1].x),
                a.center.y = 0.5 * (this.$d[0].y + this.$d[1].y), a.mass = 0, a.I = 0;
            else { for (var c = 0, d = 0, e = 0, f = 0, k = 0, n = this.$rB; k < n;) { var q = k++,
                        g = this.$d[q],
                        h;
                    h = q + 1 < this.$rB ? this.$d[q + 1] : this.$d[0]; var l = g.x - 0,
                        x = g.y - 0,
                        m = h.x - 0,
                        p = h.y - 0,
                        q = l * p - x * m,
                        r = 0.5 * q,
                        e = e + r,
                        c = c + 0.3333333333333333 * r * (0 + g.x + h.x),
                        d = d + 0.3333333333333333 * r * (0 + g.y + h.y),
                        g = l,
                        f = f + q * (0.3333333333333333 * (0.25 * (g * g + m * g + m * m) + (0 * g + 0 * m)) + 0 + (0.3333333333333333 * (0.25 * (x * x + p * x + p * p) + (0 * x + 0 * p)) + 0)) } a.mass = b * e;
                a.center.set(1 / e * c, 1 / e * d);
                a.I = b * f }
        },
        $oB: function(a) {
            for (var b = this.$d.length; b <
                a;) { var c = b++;
                this.$d[c] = new w;
                this.$qB[c] = new w }
        },
        __class__: Fa
    });
    var be = function() {};
    h["box2d.common.Settings"] = be;
    be.__name__ = ["box2d", "common", "Settings"];
    be.mixFriction = function(a, b) { return Math.sqrt(a * b) };
    be.mixRestitution = function(a, b) { return a > b ? a : b };
    var A = function() {};
    h["box2d.common.math.B2Math"] = A;
    A.__name__ = ["box2d", "common", "math", "B2Math"];
    A.dot = function(a, b) { return a.x * b.x + a.y * b.y };
    A.crossVV = function(a, b) { return a.x * b.y - a.y * b.x };
    A.crossVF = function(a, b) { return new w(b * a.y, -b * a.x) };
    A.crossFV =
        function(a, b) { return new w(-a * b.y, a * b.x) };
    A.mulMV = function(a, b) { return new w(a.col1.x * b.x + a.col2.x * b.y, a.col1.y * b.x + a.col2.y * b.y) };
    A.mulTMV = function(a, b) { return new w(A.dot(b, a.col1), A.dot(b, a.col2)) };
    A.mulX = function(a, b) { var c = A.mulMV(a.R, b);
        c.x += a.position.x;
        c.y += a.position.y; return c };
    A.mulXT = function(a, b) { var c = A.subtractVV(b, a.position),
            d = c.x * a.R.col1.x + c.y * a.R.col1.y;
        c.y = c.x * a.R.col2.x + c.y * a.R.col2.y;
        c.x = d; return c };
    A.subtractVV = function(a, b) { return new w(a.x - b.x, a.y - b.y) };
    A.abs = function(a) {
        return 0 <
            a ? a : -a
    };
    A.min = function(a, b) { return a < b ? a : b };
    A.max = function(a, b) { return a > b ? a : b };
    A.clamp = function(a, b, c) { return a < b ? b : a > c ? c : a };
    var pc = function() { this.localCenter = new w;
        this.c0 = new w;
        this.c = new w };
    h["box2d.common.math.Sweep"] = pc;
    pc.__name__ = ["box2d", "common", "math", "Sweep"];
    pc.prototype = {
        set: function(a) { this.localCenter.setV(a.localCenter);
            this.c0.setV(a.c0);
            this.c.setV(a.c);
            this.a0 = a.a0;
            this.a = a.a;
            this.t0 = a.t0 },
        getTransform: function(a, b) {
            a.position.x = (1 - b) * this.c0.x + b * this.c.x;
            a.position.y = (1 - b) * this.c0.y +
                b * this.c.y;
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
        __class__: pc
    };
    var hd = function(a, b) {
        this.$wB = new qc;
        this.$xB = new pc;
        this.$yB = new w;
        this.$$B =
            new w;
        this.$uB = 0;
        a.bullet && (this.$uB |= 8);
        a.fixedRotation && (this.$uB |= 16);
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
        this.$CC = this.$BC = null;
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
    h["box2d.dynamics.Body"] = hd;
    hd.__name__ = ["box2d", "dynamics", "Body"];
    hd.prototype = {
        createFixture: function(a) {
            if (0 !=
                (this.$AC.$uB & 2) == !0) return null;
            var b = new Cg;
            b.create(this, this.$wB, a);
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
                this.$xB.c.y +=
                    this.$wB.position.y;
                this.$xB.c0.setV(this.$xB.c);
                this.$xB.a0 = this.$xB.a = b;
                d = this.$AC.$ED.$aC;
                for (c = this.$DC; null != c;) c.synchronize(d, this.$wB, this.$wB), c = c.$CC;
                this.$AC.$ED.findNewContacts()
            }
        },
        setLinearVelocity: function(a) { 0 != this.$FB && this.$yB.setV(a) },
        applyImpulse: function(a, b) { 2 == this.$FB && (0 != (this.$uB & 2) == !1 && this.setAwake(!0), this.$yB.x += this.$KC * a.x, this.$yB.y += this.$KC * a.y, this.$zB += this.$MC * ((b.x - this.$xB.c.x) * a.y - (b.y - this.$xB.c.y) * a.x)) },
        resetMassData: function() {
            this.$MC = this.$LC = this.$KC =
                this.$JC = 0;
            this.$xB.localCenter.setZero();
            if (0 != this.$FB && 1 != this.$FB) {
                for (var a = w.make(0, 0), b = this.$DC; null != b;) { if (0 != b.$jC) { var c = b.getMassData();
                        this.$JC += c.mass;
                        a.x += c.center.x * c.mass;
                        a.y += c.center.y * c.mass;
                        this.$LC += c.I } b = b.$CC } 0 < this.$JC ? (this.$KC = 1 / this.$JC, a.x *= this.$KC, a.y *= this.$KC) : this.$KC = this.$JC = 1;
                0 < this.$LC && 0 == (this.$uB & 16) ? (this.$LC -= this.$JC * (a.x * a.x + a.y * a.y), this.$LC *= this.$NC, this.$MC = 1 / this.$LC) : this.$MC = this.$LC = 0;
                b = this.$xB.c.copy();
                this.$xB.localCenter.setV(a);
                this.$xB.c0.setV(A.mulX(this.$wB,
                    this.$xB.localCenter));
                this.$xB.c.setV(this.$xB.c0);
                this.$yB.x += this.$zB * -(this.$xB.c.y - b.y);
                this.$yB.y += this.$zB * (this.$xB.c.x - b.x)
            }
        },
        getLocalPoint: function(a) { return A.mulXT(this.$wB, a) },
        getLocalVector: function(a) { return A.mulTMV(this.$wB.R, a) },
        getLinearVelocityFromWorldPoint: function(a) { return new w(this.$yB.x - this.$zB * (a.y - this.$xB.c.y), this.$yB.y + this.$zB * (a.x - this.$xB.c.x)) },
        setType: function(a) {
            if (this.$FB != a)
                for (this.$FB = a, this.resetMassData(), 0 == this.$FB && (this.$yB.setZero(), this.$zB = 0), this.setAwake(!0),
                    this.$$B.setZero(), this.$_B = 0, a = this.$IC; null != a;) a.contact.flagForFiltering(), a = a.next
        },
        setSleepingAllowed: function(a) { a ? this.$uB |= 4 : (this.$uB &= -5, this.setAwake(!0)) },
        setAwake: function(a) { a ? (this.$uB |= 2, this.$RC = 0) : (this.$uB &= -3, this.$RC = 0, this.$yB.setZero(), this.$zB = 0, this.$$B.setZero(), this.$_B = 0) },
        setFixedRotation: function(a) { this.$uB = a ? this.$uB | 16 : this.$uB & -17;
            this.resetMassData() },
        setActive: function(a) {
            if (a != (0 != (this.$uB & 32))) {
                var b;
                if (a)
                    for (this.$uB |= 32, a = this.$AC.$ED.$aC, b = this.$DC; null !=
                        b;) b.createProxy(a, this.$wB), b = b.$CC;
                else { this.$uB &= -33;
                    a = this.$AC.$ED.$aC; for (b = this.$DC; null != b;) b.destroyProxy(a), b = b.$CC; for (a = this.$IC; null != a;) b = a, a = a.next, this.$AC.$ED.destroy(b.contact);
                    this.$IC = null }
            }
        },
        synchronizeFixtures: function() { var a = hd.$TC;
            a.R.set(this.$xB.a0); var b = a.R,
                c = this.$xB.localCenter;
            a.position.x = this.$xB.c0.x - (b.col1.x * c.x + b.col2.x * c.y);
            a.position.y = this.$xB.c0.y - (b.col1.y * c.x + b.col2.y * c.y);
            c = this.$AC.$ED.$aC; for (b = this.$DC; null != b;) b.synchronize(c, a, this.$wB), b = b.$CC },
        synchronizeTransform: function() {
            this.$wB.R.set(this.$xB.a);
            var a = this.$wB.R,
                b = this.$xB.localCenter;
            this.$wB.position.x = this.$xB.c.x - (a.col1.x * b.x + a.col2.x * b.y);
            this.$wB.position.y = this.$xB.c.y - (a.col1.y * b.x + a.col2.y * b.y)
        },
        shouldCollide: function(a) { if (2 != this.$FB && 2 != a.$FB) return !1; for (var b = this.$HC; null != b;) { if (b.other == a && !1 == b.joint.$AE) return !1;
                b = b.next } return !0 },
        advance: function(a) { this.$xB.advance(a);
            this.$xB.c.setV(this.$xB.c0);
            this.$xB.a = this.$xB.a0;
            this.synchronizeTransform() },
        __class__: hd
    };
    var id = function() {
        this.position = new w;
        this.linearVelocity =
            new w;
        this.userData = null;
        this.angularDamping = this.linearDamping = this.angularVelocity = this.angle = 0;
        this.awake = this.allowSleep = !0;
        this.bullet = this.fixedRotation = !1;
        this.type = 0;
        this.active = !0;
        this.gravityScale = this.inertiaScale = 1
    };
    h["box2d.dynamics.BodyDef"] = id;
    id.__name__ = ["box2d", "dynamics", "BodyDef"];
    id.prototype = { __class__: id };
    var jd = function() {};
    h["box2d.dynamics.ContactFilter"] = jd;
    jd.__name__ = ["box2d", "dynamics", "ContactFilter"];
    jd.prototype = {
        shouldCollide: function(a, b) {
            var c = a.$pC,
                d = b.$pC;
            return c.groupIndex ==
                d.groupIndex && 0 != c.groupIndex ? 0 < c.groupIndex : 0 != (c.maskBits & d.categoryBits) && 0 != (c.categoryBits & d.maskBits)
        },
        __class__: jd
    };
    var Dg = function() { this.normalImpulses = [];
        this.tangentImpulses = [] };
    h["box2d.dynamics.ContactImpulse"] = Dg;
    Dg.__name__ = ["box2d", "dynamics", "ContactImpulse"];
    Dg.prototype = { __class__: Dg };
    var cc = function() {};
    h["box2d.dynamics.ContactListener"] = cc;
    cc.__name__ = ["box2d", "dynamics", "ContactListener"];
    cc.prototype = {
        beginContact: function(a) {},
        endContact: function(a) {},
        preSolve: function(a,
            b) {},
        postSolve: function(a, b) {},
        __class__: cc
    };
    var Fg = function() { this.$AC = null;
        this.$bC = 0;
        this.$cC = jd.defaultFilter;
        this.$dC = cc.defaultListener;
        this.$eC = new Eg(this.$fC);
        this.$aC = new Zd };
    h["box2d.dynamics.ContactManager"] = Fg;
    Fg.__name__ = ["box2d", "dynamics", "ContactManager"];
    Fg.prototype = {
        addPair: function(a, b) {
            var c = a,
                d = b,
                e = c.$kC,
                f = d.$kC;
            if (e != f) {
                for (var k = f.$IC; null != k;) { if (k.other == e) { var n = k.contact.$ZD,
                            q = k.contact.$aD; if (n == c && q == d || n == d && q == c) return } k = k.next }!1 != f.shouldCollide(e) && !1 != this.$cC.shouldCollide(c,
                    d) && (k = this.$eC.create(c, d), c = k.$ZD, d = k.$aD, e = c.$kC, f = d.$kC, k.$BC = null, k.$CC = this.$AC.$IC, null != this.$AC.$IC && (this.$AC.$IC.$BC = k), this.$AC.$IC = k, k.$XD.contact = k, k.$XD.other = f, k.$XD.prev = null, k.$XD.next = e.$IC, null != e.$IC && (e.$IC.prev = k.$XD), e.$IC = k.$XD, k.$YD.contact = k, k.$YD.other = e, k.$YD.prev = null, k.$YD.next = f.$IC, null != f.$IC && (f.$IC.prev = k.$YD), f.$IC = k.$YD, ++this.$AC.$bC)
            }
        },
        findNewContacts: function() { this.$aC.updatePairs(Ra(this, this.addPair)) },
        destroy: function(a) {
            var b = a.$ZD.$kC,
                c = a.$aD.$kC;
            0 !=
                (a.$uB & 16) && this.$dC.endContact(a);
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
        collide: function() {
            for (var a = this.$AC.$IC; null != a;) {
                var b = a.$ZD,
                    c = a.$aD,
                    d = b.$kC,
                    e = c.$kC;
                if (0 != (d.$uB & 2) == !1 && 0 != (e.$uB & 2) == !1) a = a.$CC;
                else { if (0 != (a.$uB & 64)) { if (!1 == e.shouldCollide(d)) { b = a;
                            a = b.$CC;
                            this.destroy(b); continue } if (!1 == this.$cC.shouldCollide(b, c)) { b = a;
                            a = b.$CC;
                            this.destroy(b); continue } a.$uB &= -65 }!1 == this.$aC.testOverlap(b.$oC, c.$oC) ? (b = a, a = b.$CC, this.destroy(b)) : (a.update(this.$dC), a = a.$CC) }
            }
        },
        __class__: Fg
    };
    var Kh = function() {};
    h["box2d.dynamics.DestructionListener"] = Kh;
    Kh.__name__ = ["box2d", "dynamics", "DestructionListener"];
    Kh.prototype = {
        sayGoodbyeJoint: function(a) {},
        sayGoodbyeFixture: function(a) {},
        __class__: Kh
    };
    var kd = function() { this.categoryBits = 1;
        this.maskBits = 65535;
        this.groupIndex = 0 };
    h["box2d.dynamics.FilterData"] = kd;
    kd.__name__ = ["box2d", "dynamics", "FilterData"];
    kd.prototype = { copy: function() { var a = new kd;
            a.categoryBits = this.categoryBits;
            a.maskBits = this.maskBits;
            a.groupIndex = this.groupIndex; return a }, __class__: kd };
    var Cg = function() { this.$pC = new kd;
        this.$iC = new Wb;
        this.$lC = this.$CC = this.$kC = this.$SC = null;
        this.$nC = this.$mC = this.$jC = 0 };
    h["box2d.dynamics.Fixture"] =
        Cg;
    Cg.__name__ = ["box2d", "dynamics", "Fixture"];
    Cg.prototype = {
        setSensor: function(a) { if (this.$qC != a && (this.$qC = a, null != this.$kC))
                for (a = this.$kC.$IC; null != a;) { var b = a.contact,
                        c = b.$ZD,
                        d = b.$aD;
                    c != this && d != this || b.setSensor(c.$qC || d.$qC);
                    a = a.next } },
        setFilterData: function(a) { this.$pC = a.copy(); if (null == this.$kC)
                for (a = this.$kC.$IC; null != a;) { var b = a.contact,
                        c = b.$aD;
                    b.$ZD != this && c != this || b.flagForFiltering();
                    a = a.next } },
        setUserData: function(a) { this.$SC = a },
        getMassData: function(a) {
            null == a && (a = new Bg);
            this.$lC.computeMass(a,
                this.$jC);
            return a
        },
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
        destroyProxy: function(a) { null != this.$oC && (a.destroyProxy(this.$oC), this.$oC = null) },
        synchronize: function(a, b, c) {
            if (null != this.$oC) {
                var d = new Wb,
                    e = new Wb;
                this.$lC.computeAABB(d, b);
                this.$lC.computeAABB(e, c);
                this.$iC.combine(d, e);
                b = A.subtractVV(c.position, b.position);
                a.moveProxy(this.$oC, this.$iC, b)
            }
        },
        __class__: Cg
    };
    var Ib = function() { this.filter = new kd;
        this.userData = this.shape = null;
        this.friction = 0.2;
        this.density = this.restitution = 0;
        this.filter.categoryBits = 1;
        this.filter.maskBits = 65535;
        this.filter.groupIndex = 0;
        this.isSensor = !1 };
    h["box2d.dynamics.FixtureDef"] = Ib;
    Ib.__name__ = ["box2d", "dynamics", "FixtureDef"];
    Ib.prototype = { __class__: Ib };
    var rc = function() {
        this.$tC = [];
        this.$uC = [];
        this.$vC = []
    };
    h["box2d.dynamics.Island"] = rc;
    rc.__name__ = ["box2d", "dynamics", "Island"];
    rc.prototype = {
        initialize: function(a, b, c, d, e, f) { this.$yC = a;
            this.$zC = b;
            this.$$C = c;
            this.$xC = this.$bC = this.$wC = 0;
            this.$fC = d;
            this.$rC = e;
            this.$sC = f; for (d = this.$tC.length; d < a;) e = d++, this.$tC[e] = null; for (a = this.$uC.length; a < b;) d = a++, this.$uC[d] = null; for (b = this.$vC.length; b < c;) a = b++, this.$vC[a] = null },
        clear: function() { this.$xC = this.$bC = this.$wC = 0 },
        solve: function(a, b, c) {
            for (var d, e = 0, f = this.$wC; e < f;) d = e++, d = this.$tC[d],
                2 == d.$FB && (d.$yB.x += a.dt * (d.$OC * b.x + d.$KC * d.$$B.x), d.$yB.y += a.dt * (d.$OC * b.y + d.$KC * d.$$B.y), d.$zB += a.dt * d.$MC * d.$_B, d.$yB.multiply(A.clamp(1 - a.dt * d.$PC, 0, 1)), d.$zB *= A.clamp(1 - a.dt * d.$QC, 0, 1));
            this.$sC.initialize(a, this.$uC, this.$bC, this.$fC);
            b = this.$sC;
            b.initVelocityConstraints(a);
            e = 0;
            for (f = this.$xC; e < f;) d = e++, d = this.$vC[d], d.initVelocityConstraints(a);
            e = 0;
            for (f = a.velocityIterations; e < f;) { e++; for (var k = 0, n = this.$xC; k < n;) d = k++, d = this.$vC[d], d.solveVelocityConstraints(a);
                b.solveVelocityConstraints() } e =
                0;
            for (f = this.$xC; e < f;) d = e++, d = this.$vC[d], d.finalizeVelocityConstraints();
            b.finalizeVelocityConstraints();
            e = 0;
            for (f = this.$wC; e < f;) d = e++, d = this.$tC[d], 0 != d.$FB && (k = a.dt * d.$yB.x, n = a.dt * d.$yB.y, 4 < k * k + n * n && (d.$yB.normalize(), d.$yB.x = 2 * d.$yB.x * a.inv_dt, d.$yB.y = 2 * d.$yB.y * a.inv_dt), k = a.dt * d.$zB, 2.4674011002723395 < k * k && (d.$zB = 0 > d.$zB ? -1.5707963267948966 * a.inv_dt : 1.5707963267948966 * a.inv_dt), d.$xB.c0.setV(d.$xB.c), d.$xB.a0 = d.$xB.a, d.$xB.c.x += a.dt * d.$yB.x, d.$xB.c.y += a.dt * d.$yB.y, d.$xB.a += a.dt * d.$zB, d.synchronizeTransform());
            e = 0;
            for (f = a.positionIterations; e < f;) { e++; for (var k = b.solvePositionConstraints(0.2), n = !0, q = 0, g = this.$xC; q < g;) d = q++, d = this.$vC[d], d = d.solvePositionConstraints(0.2), n = n && d; if (k && n) break } this.report(b.$rD);
            if (c) { c = 1.7976931348623157E308;
                b = 0; for (e = this.$wC; b < e;) d = b++, d = this.$tC[d], 0 != d.$FB && (0 == (d.$uB & 4) && (c = d.$RC = 0), 0 == (d.$uB & 4) || 0.0012184696791468343 < d.$zB * d.$zB || 1E-4 < A.dot(d.$yB, d.$yB) ? c = d.$RC = 0 : (d.$RC += a.dt, c = A.min(c, d.$RC))); if (0.5 <= c)
                    for (a = 0, c = this.$wC; a < c;) b = a++, d = this.$tC[b], d.setAwake(!1) }
        },
        solveTOI: function(a) {
            this.$sC.initialize(a,
                this.$uC, this.$bC, this.$fC);
            for (var b = this.$sC, c = 0, d = this.$xC; c < d;) { var e = c++;
                this.$vC[e].initVelocityConstraints(a) } c = 0;
            for (d = a.velocityIterations; c < d;) { c++;
                b.solveVelocityConstraints(); for (var e = 0, f = this.$xC; e < f;) { var k = e++;
                    this.$vC[k].solveVelocityConstraints(a) } } c = 0;
            for (d = this.$wC; c < d;) e = c++, e = this.$tC[e], 0 != e.$FB && (f = a.dt * e.$yB.x, k = a.dt * e.$yB.y, 4 < f * f + k * k && (e.$yB.normalize(), e.$yB.x = 2 * e.$yB.x * a.inv_dt, e.$yB.y = 2 * e.$yB.y * a.inv_dt), f = a.dt * e.$zB, 2.4674011002723395 < f * f && (e.$zB = 0 > e.$zB ? -1.5707963267948966 *
                a.inv_dt : 1.5707963267948966 * a.inv_dt), e.$xB.c0.setV(e.$xB.c), e.$xB.a0 = e.$xB.a, e.$xB.c.x += a.dt * e.$yB.x, e.$xB.c.y += a.dt * e.$yB.y, e.$xB.a += a.dt * e.$zB, e.synchronizeTransform());
            c = 0;
            for (a = a.positionIterations; c < a;) { c++;
                d = b.solvePositionConstraints(0.75);
                e = !0;
                f = 0; for (k = this.$xC; f < k;) var n = f++,
                    n = this.$vC[n].solvePositionConstraints(0.2),
                    e = e && n; if (d && e) break } this.report(b.$rD)
        },
        report: function(a) {
            if (null != this.$rC)
                for (var b = 0, c = this.$bC; b < c;) {
                    for (var d = b++, e = this.$uC[d], d = a[d], f = 0, k = d.pointCount; f < k;) {
                        var n =
                            f++;
                        rc.$_C.normalImpulses[n] = d.points[n].normalImpulse;
                        rc.$_C.tangentImpulses[n] = d.points[n].tangentImpulse
                    }
                    this.$rC.postSolve(e, rc.$_C)
                }
        },
        addBody: function(a) { a.$vB = this.$wC;
            this.$tC[this.$wC++] = a },
        addContact: function(a) { this.$uC[this.$bC++] = a },
        addJoint: function(a) { this.$vC[this.$xC++] = a },
        __class__: rc
    };
    var ld = function() {};
    h["box2d.dynamics.TimeStep"] = ld;
    ld.__name__ = ["box2d", "dynamics", "TimeStep"];
    ld.prototype = {
        set: function(a) {
            this.dt = a.dt;
            this.inv_dt = a.inv_dt;
            this.positionIterations = a.positionIterations;
            this.velocityIterations = a.velocityIterations;
            this.warmStarting = a.warmStarting
        },
        __class__: ld
    };
    var Da = function(a, b) { this.$AD = [];
        this.$ED = new Fg;
        this.$sC = new Na;
        this.$FD = new rc;
        this.$FC = this.$HC = this.$IC = this.$GD = this.$KD = null;
        this.$GC = this.$xC = this.$bC = this.$wC = 0;
        Da.$SD = !0;
        Da.$TD = !0;
        this.$ID = b;
        this.$HD = a;
        this.$LD = 0;
        this.$ED.$AC = this; var c = new id;
        this.$JD = this.createBody(c) };
    h["box2d.dynamics.World"] = Da;
    Da.__name__ = ["box2d", "dynamics", "World"];
    Da.prototype = {
        setContactListener: function(a) {
            this.$ED.$dC =
                a
        },
        createBody: function(a) { if (0 != (this.$uB & 2) == !0) return null;
            a = new hd(a, this);
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
                for (b = a.$FC; null != b;) c = b, b = b.nextController, c.controller.removeBody(a);
                for (b = a.$IC; null != b;) c = b, b = b.next, this.$ED.destroy(c.contact);
                a.$IC = null;
                for (b = a.$DC; null != b;) c =
                    b, b = b.$CC, null != this.$KD && this.$KD.sayGoodbyeFixture(c), c.destroyProxy(this.$ED.$aC), c.destroy();
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
            a.$xD ==
                c.$HC && (c.$HC = a.$xD.next);
            a.$xD.prev = null;
            a.$xD.next = null;
            null != a.$yD.prev && (a.$yD.prev.next = a.$yD.next);
            null != a.$yD.next && (a.$yD.next.prev = a.$yD.prev);
            a.$yD == d.$HC && (d.$HC = a.$yD.next);
            a.$yD.prev = null;
            a.$yD.next = null;
            ce.destroy(a, null);
            --this.$xC;
            if (!1 == b)
                for (a = d.$IC; null != a;) a.other == c && a.contact.flagForFiltering(), a = a.next
        },
        step: function(a, b, c) {
            0 != (this.$uB & 1) && (this.$ED.findNewContacts(), this.$uB &= -2);
            this.$uB |= 2;
            var d = Da.$MD;
            d.dt = a;
            d.velocityIterations = b;
            d.positionIterations = c;
            d.inv_dt = 0 < a ? 1 /
                a : 0;
            d.dtRatio = this.$LD * a;
            d.warmStarting = Da.$SD;
            this.$ED.collide();
            0 < d.dt && this.solve(d);
            Da.$TD && 0 < d.dt && this.solveTOI(d);
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
            for (c = this.$HC; null !=
                c;) c.$_D = !1, c = c.$CC;
            for (var c = this.$AD, e = this.$GD; null != e;) {
                if (0 == (e.$uB & 1) && 0 != (e.$uB & 2) != !1 && 0 != (e.$uB & 32) != !1 && 0 != e.$FB) {
                    d.clear();
                    var f = 0;
                    c[f++] = e;
                    for (e.$uB |= 1; 0 < f;)
                        if (b = c[--f], d.addBody(b), 0 != (b.$uB & 2) == !1 && b.setAwake(!0), 0 != b.$FB) {
                            for (var k, n = b.$IC; null != n;) 0 == (n.contact.$uB & 4) && 0 != (n.contact.$uB & 1) != !0 && 0 != (n.contact.$uB & 32) != !1 && 0 != (n.contact.$uB & 16) != !1 && (d.addContact(n.contact), n.contact.$uB |= 4, k = n.other, 0 == (k.$uB & 1) && (c[f++] = k, k.$uB |= 1)), n = n.next;
                            for (b = b.$HC; null != b;) !0 != b.joint.$_D && (k =
                                b.other, 0 != (k.$uB & 32) != !1 && (d.addJoint(b.joint), b.joint.$_D = !0, 0 == (k.$uB & 1) && (c[f++] = k, k.$uB |= 1))), b = b.next
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
            var b, c, d, e, f = this.$FD;
            f.initialize(this.$wC, 32, 32, null, this.$ED.$dC, this.$sC);
            var k =
                Da.$RD;
            for (b = this.$GD; null != b;) b.$uB &= -2, b.$xB.t0 = 0, b = b.$CC;
            for (b = this.$IC; null != b;) b.$uB &= -13, b = b.$CC;
            for (e = this.$HC; null != e;) e.$_D = !1, e = e.$CC;
            for (;;) {
                e = null;
                var n = 1;
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
                            var q = c.$xB.t0;
                            c.$xB.t0 < d.$xB.t0 ? (q = d.$xB.t0, c.$xB.advance(q)) : d.$xB.t0 < c.$xB.t0 && (q = c.$xB.t0, d.$xB.advance(q));
                            c = b.computeTOI(c.$xB, d.$xB);
                            0 < c && 1 > c && (c = (1 - c) * q + c, 1 < c && (c = 1));
                            b.$dD = c;
                            b.$uB |= 8
                        }
                        2.2250738585072014E-308 < c && c < n && (e = b, n = c)
                    }
                    b = b.$CC
                }
                if (null == e || 1 < n) break;
                c = e.$ZD;
                d = e.$aD;
                c = c.$kC;
                d = d.$kC;
                Da.$OD.set(c.$xB);
                Da.$PD.set(d.$xB);
                c.advance(n);
                d.advance(n);
                e.update(this.$ED.$dC);
                e.$uB &= -9;
                if (0 != (e.$uB & 1) == !0 || 0 != (e.$uB & 32) == !1) c.$xB.set(Da.$OD), d.$xB.set(Da.$PD), c.synchronizeTransform(), d.synchronizeTransform();
                else if (0 != (e.$uB & 16) != !1) {
                    b = c;
                    2 != b.$FB && (b = d);
                    f.clear();
                    d = c = 0;
                    k[c + d++] = b;
                    for (b.$uB |= 1; 0 < d;)
                        if (b =
                            k[c++], --d, f.addBody(b), 0 != (b.$uB & 2) == !1 && b.setAwake(!0), 2 == b.$FB) {
                            for (e = b.$IC; null != e && f.$bC != f.$zC;) 0 == (e.contact.$uB & 4) && 0 != (e.contact.$uB & 1) != !0 && 0 != (e.contact.$uB & 32) != !1 && 0 != (e.contact.$uB & 16) != !1 && (f.addContact(e.contact), e.contact.$uB |= 4, q = e.other, 0 == (q.$uB & 1) && (0 != q.$FB && (q.advance(n), q.setAwake(!0)), k[c + d] = q, ++d, q.$uB |= 1)), e = e.next;
                            for (b = b.$HC; null != b;) f.$xC != f.$$C && !0 != b.joint.$_D && (q = b.other, 0 != (q.$uB & 32) != !1 && (f.addJoint(b.joint), b.joint.$_D = !0, 0 == (q.$uB & 1) && (0 != q.$FB && (q.advance(n),
                                q.setAwake(!0)), k[c + d] = q, ++d, q.$uB |= 1))), b = b.next
                        } b = Da.$QD;
                    b.warmStarting = !1;
                    b.dt = (1 - n) * a.dt;
                    b.inv_dt = 1 / b.dt;
                    b.dtRatio = 0;
                    b.velocityIterations = a.velocityIterations;
                    b.positionIterations = a.positionIterations;
                    f.solveTOI(b);
                    n = 0;
                    for (c = f.$wC; n < c;)
                        if (b = n++, b = f.$tC[b], b.$uB &= -2, 0 != (b.$uB & 2) != !1 && 2 == b.$FB)
                            for (b.synchronizeFixtures(), e = b.$IC; null != e;) e.contact.$uB &= -9, e = e.next;
                    n = 0;
                    for (e = f.$bC; n < e;) b = n++, b = f.$uC[b], b.$uB &= -13;
                    n = 0;
                    for (b = f.$xC; n < b;) e = n++, e = f.$vC[e], e.$_D = !1;
                    this.$ED.findNewContacts()
                }
            }
        },
        __class__: Da
    };
    var ha = function() { this.$XD = new de;
        this.$YD = new de;
        this.$bD = new $d;
        this.$cD = new $d };
    h["box2d.dynamics.contacts.Contact"] = ha;
    ha.__name__ = ["box2d", "dynamics", "contacts", "Contact"];
    ha.prototype = {
        getWorldManifold: function(a) { null == a && (a = new Kc);
            a.initialize(this.$bD, this.$ZD.$kC.$wB, this.$ZD.$lC.$l, this.$aD.$kC.$wB, this.$aD.$lC.$l); return a },
        setSensor: function(a) { this.$uB = a ? this.$uB | 1 : this.$uB & -2 },
        setEnabled: function(a) { this.$uB = a ? this.$uB | 32 : this.$uB & -33 },
        flagForFiltering: function() { this.$uB |= 64 },
        $WD: function(a,
            b) { this.$uB = 32; if (null == a || null == b) this.$aD = this.$ZD = null;
            else { if (a.$qC || b.$qC) this.$uB |= 1; var c = a.$kC,
                    d = b.$kC; if (2 != c.$FB || 0 != (c.$uB & 8) || 2 != d.$FB || 0 != (d.$uB & 8)) this.$uB |= 2;
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
                this.$YD.other = null } },
        update: function(a) {
            var b = this.$cD;
            this.$cD = this.$bD;
            this.$bD = b;
            this.$uB |= 32;
            var b = !1,
                c = 0 != (this.$uB & 16),
                d =
                this.$ZD.$kC,
                e = this.$aD.$kC,
                f = this.$ZD.$iC.testOverlap(this.$aD.$iC);
            if (0 != (this.$uB & 1)) f && (b = Ya.testOverlap(this.$ZD.$lC, d.$wB, this.$aD.$lC, e.$wB)), this.$bD.$GB = 0;
            else {
                this.$uB = 2 != d.$FB || 0 != (d.$uB & 8) || 2 != e.$FB || 0 != (e.$uB & 8) ? this.$uB | 2 : this.$uB & -3;
                if (f) { this.evaluate(); for (var b = 0 < this.$bD.$GB, f = 0, k = this.$bD.$GB; f < k;) { var n = f++,
                            n = this.$bD.$CB[n];
                        n.$HB = 0;
                        n.$IB = 0; for (var q = n.$JB, g = 0, h = this.$cD.$GB; g < h;) { var l = g++,
                                l = this.$cD.$CB[l]; if (l.$JB.$F == q.$F) { n.$HB = l.$HB;
                                n.$IB = l.$IB; break } } } } else this.$bD.$GB =
                    0;
                b != c && (d.setAwake(!0), e.setAwake(!0))
            }
            this.$uB = b ? this.$uB | 16 : this.$uB & -17;
            !1 == c && !0 == b && a.beginContact(this);
            !0 == c && !1 == b && a.endContact(this);
            0 == (this.$uB & 1) && a.preSolve(this, this.$cD)
        },
        evaluate: function() {},
        computeTOI: function(a, b) { ha.$kD.proxyA.set(this.$ZD.$lC);
            ha.$kD.proxyB.set(this.$aD.$lC);
            ha.$kD.sweepA = a;
            ha.$kD.sweepB = b;
            ha.$kD.tolerance = 0.005; return Q.timeOfImpact(ha.$kD) },
        __class__: ha
    };
    var dc = function() { ha.call(this) };
    h["box2d.dynamics.contacts.CircleContact"] = dc;
    dc.__name__ = ["box2d", "dynamics",
        "contacts", "CircleContact"
    ];
    dc.create = function(a) { return new dc };
    dc.destroy = function(a, b) {};
    dc.__super__ = ha;
    dc.prototype = m(ha.prototype, { reset: function(a, b) { ha.prototype.$WD.call(this, a, b) }, evaluate: function() { N.collideCircles(this.$bD, this.$ZD.$lC, this.$ZD.$kC.$wB, this.$aD.$lC, this.$aD.$kC.$wB) }, __class__: dc });
    var Hg = function() { this.localPlaneNormal = new w;
        this.localPoint = new w;
        this.normal = new w;
        this.normalMass = new gd;
        this.K = new gd;
        this.points = []; for (var a = 0; 2 > a;) { var b = a++;
            this.points[b] = new Gg } };
    h["box2d.dynamics.contacts.ContactConstraint"] = Hg;
    Hg.__name__ = ["box2d", "dynamics", "contacts", "ContactConstraint"];
    Hg.prototype = { __class__: Hg };
    var Gg = function() { this.localPoint = new w;
        this.rA = new w;
        this.rB = new w };
    h["box2d.dynamics.contacts.ContactConstraintPoint"] = Gg;
    Gg.__name__ = ["box2d", "dynamics", "contacts", "ContactConstraintPoint"];
    Gg.prototype = { __class__: Gg };
    var de = function() {};
    h["box2d.dynamics.contacts.ContactEdge"] = de;
    de.__name__ = ["box2d", "dynamics", "contacts", "ContactEdge"];
    de.prototype = { __class__: de };
    var Eg = function(a) { this.$fC = a;
        this.initializeRegisters() };
    h["box2d.dynamics.contacts.ContactFactory"] = Eg;
    Eg.__name__ = ["box2d", "dynamics", "contacts", "ContactFactory"];
    Eg.prototype = {
        addType: function(a, b, c, d) { this.$lD[c][d].createFcn = a;
            this.$lD[c][d].destroyFcn = b;
            this.$lD[c][d].primary = !0;
            c != d && (this.$lD[d][c].createFcn = a, this.$lD[d][c].destroyFcn = b, this.$lD[d][c].primary = !1) },
        initializeRegisters: function() {
            this.$lD = [];
            for (var a = 0; 3 > a;) {
                var b = a++;
                this.$lD[b] = [];
                for (var c = 0; 3 > c;) {
                    var d = c++;
                    this.$lD[b][d] =
                        new Ig
                }
            }
            this.addType(dc.create, dc.destroy, 0, 0);
            this.addType(ec.create, ec.destroy, 1, 0);
            this.addType(fc.create, fc.destroy, 1, 1);
            this.addType(gc.create, gc.destroy, 2, 0);
            this.addType(hc.create, hc.destroy, 1, 2)
        },
        create: function(a, b) { var c = this.$lD[a.$lC.$FB][b.$lC.$FB],
                d; if (null != c.pool) return d = c.pool, c.pool = d.$CC, d.$WD(a, b), d;
            d = c.createFcn; return null != d ? (c.primary ? (d = d(this.$fC), d.$WD(a, b)) : (d = d(this.$fC), d.$WD(b, a)), d) : null },
        destroy: function(a) {
            0 < a.$bD.$GB && (a.$ZD.$kC.setAwake(!0), a.$aD.$kC.setAwake(!0));
            var b = this.$lD[a.$ZD.$lC.$FB][a.$aD.$lC.$FB];
            a.$CC = b.pool;
            b.pool = a;
            b = b.destroyFcn;
            b(a, this.$fC)
        },
        __class__: Eg
    };
    var Ig = function() {};
    h["box2d.dynamics.contacts.ContactRegister"] = Ig;
    Ig.__name__ = ["box2d", "dynamics", "contacts", "ContactRegister"];
    Ig.prototype = { __class__: Ig };
    var Jg = function() { this.$YB = new w;
        this.$nD = [];
        this.$CB = []; for (var a = 0; 2 > a;) { var b = a++;
            this.$CB[b] = new w } };
    h["box2d.dynamics.contacts.PositionSolverManifold"] = Jg;
    Jg.__name__ = ["box2d", "dynamics", "contacts", "PositionSolverManifold"];
    Jg.prototype = {
        initialize: function(a) {
            var b, c, d, e, f;
            switch (a.type) {
                case 0:
                    d = a.bodyA.$wB.R;
                    c = a.localPoint;
                    b = a.bodyA.$wB.position.x + (d.col1.x * c.x + d.col2.x * c.y);
                    e = a.bodyA.$wB.position.y + (d.col1.y * c.x + d.col2.y * c.y);
                    d = a.bodyB.$wB.R;
                    c = a.points[0].localPoint;
                    f = a.bodyB.$wB.position.x + (d.col1.x * c.x + d.col2.x * c.y);
                    d = a.bodyB.$wB.position.y + (d.col1.y * c.x + d.col2.y * c.y);
                    c = f - b;
                    var k = d - e,
                        n = c * c + k * k;
                    0 < n ? (n = Math.sqrt(n), this.$YB.x = c / n, this.$YB.y = k / n) : (this.$YB.x = 1, this.$YB.y = 0);
                    this.$CB[0].x = 0.5 * (b + f);
                    this.$CB[0].y = 0.5 * (e + d);
                    this.$nD[0] =
                        c * this.$YB.x + k * this.$YB.y - a.radius;
                    break;
                case 1:
                    d = a.bodyA.$wB.R;
                    c = a.localPlaneNormal;
                    this.$YB.x = d.col1.x * c.x + d.col2.x * c.y;
                    this.$YB.y = d.col1.y * c.x + d.col2.y * c.y;
                    d = a.bodyA.$wB.R;
                    c = a.localPoint;
                    e = a.bodyA.$wB.position.x + (d.col1.x * c.x + d.col2.x * c.y);
                    f = a.bodyA.$wB.position.y + (d.col1.y * c.x + d.col2.y * c.y);
                    d = a.bodyB.$wB.R;
                    k = 0;
                    for (n = a.pointCount; k < n;) {
                        var q = k++;
                        c = a.points[q].localPoint;
                        b = a.bodyB.$wB.position.x + (d.col1.x * c.x + d.col2.x * c.y);
                        c = a.bodyB.$wB.position.y + (d.col1.y * c.x + d.col2.y * c.y);
                        this.$nD[q] = (b - e) * this.$YB.x +
                            (c - f) * this.$YB.y - a.radius;
                        this.$CB[q].x = b;
                        this.$CB[q].y = c
                    }
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
                    for (n = a.pointCount; k < n;) q = k++, c = a.points[q].localPoint, b = a.bodyA.$wB.position.x + (d.col1.x * c.x + d.col2.x * c.y), c = a.bodyA.$wB.position.y + (d.col1.y * c.x + d.col2.y * c.y), this.$nD[q] =
                        (b - e) * this.$YB.x + (c - f) * this.$YB.y - a.radius, this.$CB[q].set(b, c);
                    this.$YB.x *= -1;
                    this.$YB.y *= -1
            }
        },
        __class__: Jg
    };
    var Na = function() { this.$qD = new ld;
        this.$rD = [] };
    h["box2d.dynamics.contacts.ContactSolver"] = Na;
    Na.__name__ = ["box2d", "dynamics", "contacts", "ContactSolver"];
    Na.prototype = {
        initialize: function(a, b, c, d) {
            var e;
            this.$qD.set(a);
            this.$fC = d;
            for (this.$sD = c; this.$rD.length < this.$sD;) this.$rD[this.$rD.length] = new Hg;
            for (a = 0; a < c;) {
                d = a++;
                e = b[d];
                var f = e.$ZD,
                    k = e.$aD,
                    n = f.$lC.$l,
                    q = k.$lC.$l,
                    g = f.$kC,
                    h = k.$kC;
                e = e.$bD;
                var l = be.mixFriction(f.$mC, k.$mC),
                    x = be.mixRestitution(f.$nC, k.$nC),
                    m = g.$yB.x,
                    p = g.$yB.y,
                    r = h.$yB.x,
                    cb = h.$yB.y,
                    s = g.$zB,
                    u = h.$zB;
                Na.$tD.initialize(e, g.$wB, n, h.$wB, q);
                f = Na.$tD.$YB.x;
                k = Na.$tD.$YB.y;
                d = this.$rD[d];
                d.bodyA = g;
                d.bodyB = h;
                d.manifold = e;
                d.normal.x = f;
                d.normal.y = k;
                d.pointCount = e.$GB;
                d.friction = l;
                d.restitution = x;
                d.localPlaneNormal.x = e.$DB.x;
                d.localPlaneNormal.y = e.$DB.y;
                d.localPoint.x = e.$EB.x;
                d.localPoint.y = e.$EB.y;
                d.radius = n + q;
                d.type = e.$FB;
                n = 0;
                for (q = d.pointCount; n < q;) {
                    var t = n++,
                        x = e.$CB[t],
                        l = d.points[t];
                    l.normalImpulse = x.$HB;
                    l.tangentImpulse = x.$IB;
                    l.localPoint.setV(x.$EB);
                    var x = l.rA.x = Na.$tD.$CB[t].x - g.$xB.c.x,
                        v = l.rA.y = Na.$tD.$CB[t].y - g.$xB.c.y,
                        z = l.rB.x = Na.$tD.$CB[t].x - h.$xB.c.x,
                        t = l.rB.y = Na.$tD.$CB[t].y - h.$xB.c.y,
                        A = x * k - v * f,
                        y = z * k - t * f,
                        A = A * A,
                        y = y * y;
                    l.normalMass = 1 / (g.$KC + h.$KC + g.$MC * A + h.$MC * y);
                    var w = g.$JC * g.$KC + h.$JC * h.$KC,
                        w = w + (g.$JC * g.$MC * A + h.$JC * h.$MC * y);
                    l.equalizedMass = 1 / w;
                    y = k;
                    w = -f;
                    A = x * w - v * y;
                    y = z * w - t * y;
                    A *= A;
                    y *= y;
                    l.tangentMass = 1 / (g.$KC + h.$KC + g.$MC * A + h.$MC * y);
                    l.velocityBias = 0;
                    x = d.normal.x * (r + -u * t - m - -s *
                        v) + d.normal.y * (cb + u * z - p - s * x); - 1 > x && (l.velocityBias += -d.restitution * x)
                }
                2 == d.pointCount && (cb = d.points[0], r = d.points[1], e = g.$KC, g = g.$MC, m = h.$KC, h = h.$MC, p = cb.rA.x * k - cb.rA.y * f, cb = cb.rB.x * k - cb.rB.y * f, s = r.rA.x * k - r.rA.y * f, r = r.rB.x * k - r.rB.y * f, f = e + m + g * p * p + h * cb * cb, k = e + m + g * s * s + h * r * r, h = e + m + g * p * s + h * cb * r, f * f < 100 * (f * k - h * h) ? (d.K.col1.set(f, h), d.K.col2.set(h, k), d.K.getInverse(d.normalMass)) : d.pointCount = 1)
            }
        },
        initVelocityConstraints: function(a) {
            for (var b = 0, c = this.$sD; b < c;) {
                var d = b++,
                    d = this.$rD[d],
                    e = d.bodyA,
                    f = d.bodyB,
                    k = e.$KC,
                    n = e.$MC,
                    g = f.$KC,
                    h = f.$MC,
                    l = d.normal.x,
                    yb = d.normal.y,
                    x = yb,
                    m = -l,
                    p;
                if (a.warmStarting) { p = d.pointCount; for (var r = 0; r < p;) { var s = r++,
                            s = d.points[s];
                        s.normalImpulse *= a.dtRatio;
                        s.tangentImpulse *= a.dtRatio; var t = s.normalImpulse * l + s.tangentImpulse * x,
                            u = s.normalImpulse * yb + s.tangentImpulse * m;
                        e.$zB -= n * (s.rA.x * u - s.rA.y * t);
                        e.$yB.x -= k * t;
                        e.$yB.y -= k * u;
                        f.$zB += h * (s.rB.x * u - s.rB.y * t);
                        f.$yB.x += g * t;
                        f.$yB.y += g * u } } else
                    for (p = d.pointCount, e = 0; e < p;) f = e++, f = d.points[f], f.normalImpulse = 0, f.tangentImpulse = 0
            }
        },
        solveVelocityConstraints: function() {
            for (var a,
                    b, c, d, e, f, k, n, g, h, l = 0, yb = this.$sD; l < yb;) {
                var x = l++;
                d = this.$rD[x];
                var x = d.bodyA,
                    m = d.bodyB,
                    p = x.$zB,
                    r = m.$zB,
                    s = x.$yB,
                    t = m.$yB,
                    u = x.$KC,
                    y = x.$MC,
                    v = m.$KC,
                    z = m.$MC;
                n = d.normal.x;
                var w = g = d.normal.y,
                    B = -n;
                h = d.friction;
                k = 0;
                for (f = d.pointCount; k < f;) a = k++, a = d.points[a], b = t.x - r * a.rB.y - s.x + p * a.rA.y, c = t.y + r * a.rB.x - s.y - p * a.rA.x, b = b * w + c * B, b = a.tangentMass * -b, c = h * a.normalImpulse, c = A.clamp(a.tangentImpulse + b, -c, c), b = c - a.tangentImpulse, e = b * w, b *= B, s.x -= u * e, s.y -= u * b, p -= y * (a.rA.x * b - a.rA.y * e), t.x += v * e, t.y += v * b, r += z * (a.rB.x * b - a.rB.y *
                    e), a.tangentImpulse = c;
                if (1 == d.pointCount) a = d.points[0], b = t.x + -r * a.rB.y - s.x - -p * a.rA.y, c = t.y + r * a.rB.x - s.y - p * a.rA.x, d = b * n + c * g, b = -a.normalMass * (d - a.velocityBias), c = a.normalImpulse + b, 0 < c || (c = 0), b = c - a.normalImpulse, e = b * n, b *= g, s.x -= u * e, s.y -= u * b, p -= y * (a.rA.x * b - a.rA.y * e), t.x += v * e, t.y += v * b, r += z * (a.rB.x * b - a.rB.y * e), a.normalImpulse = c;
                else {
                    a = d.points[0];
                    w = d.points[1];
                    f = a.normalImpulse;
                    k = w.normalImpulse;
                    e = (t.x - r * a.rB.y - s.x + p * a.rA.y) * n + (t.y + r * a.rB.x - s.y - p * a.rA.x) * g;
                    var C = (t.x - r * w.rB.y - s.x + p * w.rA.y) * n + (t.y + r * w.rB.x -
                        s.y - p * w.rA.x) * g;
                    b = e - a.velocityBias;
                    c = C - w.velocityBias;
                    h = d.K;
                    b -= h.col1.x * f + h.col2.x * k;
                    for (c -= h.col1.y * f + h.col2.y * k;;) {
                        h = d.normalMass;
                        B = -(h.col1.x * b + h.col2.x * c);
                        h = -(h.col1.y * b + h.col2.y * c);
                        if (0 <= B && 0 <= h) { f = B - f;
                            k = h - k;
                            d = f * n;
                            f *= g;
                            n *= k;
                            g *= k;
                            s.x -= u * (d + n);
                            s.y -= u * (f + g);
                            p -= y * (a.rA.x * f - a.rA.y * d + w.rA.x * g - w.rA.y * n);
                            t.x += v * (d + n);
                            t.y += v * (f + g);
                            r += z * (a.rB.x * f - a.rB.y * d + w.rB.x * g - w.rB.y * n);
                            a.normalImpulse = B;
                            w.normalImpulse = h; break } B = -a.normalMass * b;
                        h = 0;
                        C = d.K.col1.y * B + c;
                        if (0 <= B && 0 <= C) {
                            f = B - f;
                            k = h - k;
                            d = f * n;
                            f *= g;
                            n *= k;
                            g *= k;
                            s.x -= u * (d + n);
                            s.y -= u * (f + g);
                            p -= y * (a.rA.x * f - a.rA.y * d + w.rA.x * g - w.rA.y * n);
                            t.x += v * (d + n);
                            t.y += v * (f + g);
                            r += z * (a.rB.x * f - a.rB.y * d + w.rB.x * g - w.rB.y * n);
                            a.normalImpulse = B;
                            w.normalImpulse = h;
                            break
                        }
                        B = 0;
                        h = -w.normalMass * c;
                        e = d.K.col2.x * h + b;
                        if (0 <= h && 0 <= e) { f = B - f;
                            k = h - k;
                            d = f * n;
                            f *= g;
                            n *= k;
                            g *= k;
                            s.x -= u * (d + n);
                            s.y -= u * (f + g);
                            p -= y * (a.rA.x * f - a.rA.y * d + w.rA.x * g - w.rA.y * n);
                            t.x += v * (d + n);
                            t.y += v * (f + g);
                            r += z * (a.rB.x * f - a.rB.y * d + w.rB.x * g - w.rB.y * n);
                            a.normalImpulse = B;
                            w.normalImpulse = h; break } h = B = 0;
                        e = b;
                        C = c;
                        if (0 <= e && 0 <= C) {
                            f = B - f;
                            k = h - k;
                            d = f * n;
                            f *= g;
                            n *=
                                k;
                            g *= k;
                            s.x -= u * (d + n);
                            s.y -= u * (f + g);
                            p -= y * (a.rA.x * f - a.rA.y * d + w.rA.x * g - w.rA.y * n);
                            t.x += v * (d + n);
                            t.y += v * (f + g);
                            r += z * (a.rB.x * f - a.rB.y * d + w.rB.x * g - w.rB.y * n);
                            a.normalImpulse = B;
                            w.normalImpulse = h;
                            break
                        }
                        break
                    }
                }
                x.$zB = p;
                m.$zB = r
            }
        },
        finalizeVelocityConstraints: function() { for (var a = 0, b = this.$sD; a < b;)
                for (var c = a++, c = this.$rD[c], d = c.manifold, e = 0, f = c.pointCount; e < f;) { var k = e++,
                        n = d.$CB[k],
                        k = c.points[k];
                    n.$HB = k.normalImpulse;
                    n.$IB = k.tangentImpulse } },
        solvePositionConstraints: function(a) {
            for (var b = 0, c = 0, d = this.$sD; c < d;) {
                var e =
                    c++,
                    e = this.$rD[e],
                    f = e.bodyA,
                    k = e.bodyB,
                    n = f.$JC * f.$KC,
                    g = f.$JC * f.$MC,
                    h = k.$JC * k.$KC,
                    l = k.$JC * k.$MC;
                Na.$uD.initialize(e);
                for (var yb = Na.$uD.$YB, x = 0, m = e.pointCount; x < m;) { var p = x++,
                        r = e.points[p],
                        s = Na.$uD.$CB[p],
                        t = Na.$uD.$nD[p],
                        p = s.x - f.$xB.c.x,
                        u = s.y - f.$xB.c.y,
                        w = s.x - k.$xB.c.x,
                        s = s.y - k.$xB.c.y;
                    b < t || (b = t);
                    t = A.clamp(a * (t + 0.005), -0.2, 0);
                    t *= -r.equalizedMass;
                    r = t * yb.x;
                    t *= yb.y;
                    f.$xB.c.x -= n * r;
                    f.$xB.c.y -= n * t;
                    f.$xB.a -= g * (p * t - u * r);
                    f.synchronizeTransform();
                    k.$xB.c.x += h * r;
                    k.$xB.c.y += h * t;
                    k.$xB.a += l * (w * t - s * r);
                    k.synchronizeTransform() }
            }
            return -0.0075 <
                b
        },
        __class__: Na
    };
    var gc = function() { ha.call(this) };
    h["box2d.dynamics.contacts.EdgeAndCircleContact"] = gc;
    gc.__name__ = ["box2d", "dynamics", "contacts", "EdgeAndCircleContact"];
    gc.create = function(a) { return new gc };
    gc.destroy = function(a, b) {};
    gc.__super__ = ha;
    gc.prototype = m(ha.prototype, { reset: function(a, b) { ha.prototype.$WD.call(this, a, b) }, evaluate: function() { this.$vD(this.$bD, this.$ZD.$lC, this.$ZD.$kC.$wB, this.$aD.$lC, this.$aD.$kC.$wB) }, $vD: function(a, b, c, d, e) {}, __class__: gc });
    var ec = function() { ha.call(this) };
    h["box2d.dynamics.contacts.PolyAndCircleContact"] = ec;
    ec.__name__ = ["box2d", "dynamics", "contacts", "PolyAndCircleContact"];
    ec.create = function(a) { return new ec };
    ec.destroy = function(a, b) {};
    ec.__super__ = ha;
    ec.prototype = m(ha.prototype, { reset: function(a, b) { ha.prototype.$WD.call(this, a, b);
            null }, evaluate: function() { N.collidePolygonAndCircle(this.$bD, this.$ZD.$lC, this.$ZD.$kC.$wB, this.$aD.$lC, this.$aD.$kC.$wB) }, __class__: ec });
    var hc = function() { ha.call(this) };
    h["box2d.dynamics.contacts.PolyAndEdgeContact"] = hc;
    hc.__name__ = ["box2d", "dynamics", "contacts", "PolyAndEdgeContact"];
    hc.create = function(a) { return new hc };
    hc.destroy = function(a, b) {};
    hc.__super__ = ha;
    hc.prototype = m(ha.prototype, { reset: function(a, b) { ha.prototype.$WD.call(this, a, b);
            null }, evaluate: function() { this.$wD(this.$bD, this.$ZD.$lC, this.$ZD.$kC.$wB, this.$aD.$lC, this.$aD.$kC.$wB) }, $wD: function(a, b, c, d, e) {}, __class__: hc });
    var fc = function() { ha.call(this) };
    h["box2d.dynamics.contacts.PolygonContact"] = fc;
    fc.__name__ = ["box2d", "dynamics", "contacts", "PolygonContact"];
    fc.create = function(a) { return new fc };
    fc.destroy = function(a, b) {};
    fc.__super__ = ha;
    fc.prototype = m(ha.prototype, { reset: function(a, b) { ha.prototype.$WD.call(this, a, b) }, evaluate: function() { N.collidePolygons(this.$bD, this.$ZD.$lC, this.$ZD.$kC.$wB, this.$aD.$lC, this.$aD.$kC.$wB) }, __class__: fc });
    var Lh = function() {};
    h["box2d.dynamics.controllers.Controller"] = Lh;
    Lh.__name__ = ["box2d", "dynamics", "controllers", "Controller"];
    Lh.prototype = {
        step: function(a) {},
        removeBody: function(a) {
            for (var b = a.$FC; null != b && b.controller !=
                this;) b = b.nextController;
            null != b.prevBody && (b.prevBody.nextBody = b.nextBody);
            null != b.nextBody && (b.nextBody.prevBody = b.prevBody);
            null != b.nextController && (b.nextController.prevController = b.prevController);
            null != b.prevController && (b.prevController.nextController = b.nextController);
            this.$GD == b && (this.$GD = b.nextBody);
            a.$FC == b && (a.$FC = b.nextController);
            a.$GC--;
            this.$wC--
        },
        __class__: Lh
    };
    var Mh = function() {};
    h["box2d.dynamics.controllers.ControllerEdge"] = Mh;
    Mh.__name__ = ["box2d", "dynamics", "controllers", "ControllerEdge"];
    Mh.prototype = { __class__: Mh };
    var ce = function() {};
    h["box2d.dynamics.joints.Joint"] = ce;
    ce.__name__ = ["box2d", "dynamics", "joints", "Joint"];
    ce.destroy = function(a, b) {};
    ce.prototype = { initVelocityConstraints: function(a) {}, solveVelocityConstraints: function(a) {}, finalizeVelocityConstraints: function() {}, solvePositionConstraints: function(a) { return !1 }, __class__: ce };
    var Nh = function() {};
    h["box2d.dynamics.joints.JointEdge"] = Nh;
    Nh.__name__ = ["box2d", "dynamics", "joints", "JointEdge"];
    Nh.prototype = { __class__: Nh };
    var M =
        function() { this.onStarted = this.onUpdated = this.onStopped = null;
            this.spawned = !0;
            C.call(this) };
    h["kit.creator.CreatorObject"] = M;
    M.__name__ = ["kit", "creator", "CreatorObject"];
    M.__super__ = C;
    M.prototype = m(C.prototype, {
        get_entitySlot: function() { return 1 },
        onStart: function() { this.$B |= 2 },
        onUpdate: function(a) {
            0 != (this.$B & 2) && (this.$B &= -3, null != this.onStarted && (this.owner.yieldForStart(), this.owner.emitMessageToParents(this.onStarted, this.owner)));
            null != this.onUpdated && this.owner.emitMessageToParents(this.onUpdated,
                this.owner)
        },
        onStop: function() { this.$B &= -3;
            null != this.onStopped && this.owner.emitMessageToParents(this.onStopped, this.owner) },
        __class__: M
    });
    var sa = function() { this.physicsType = zb.Dynamic;
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
        M.call(this) };
    h["ez.Actor"] = sa;
    sa.__name__ = ["ez", "Actor"];
    sa.__super__ = M;
    sa.prototype = m(M.prototype, {
        onStart: function() {
            var a = this;
            M.prototype.onStart.call(this);
            if (this.physicsEnabled) {
                var b;
                b = this.owner._internal_getFromParents(7);
                var c = b.owner.$KH[0];
                null == c && b.owner.add(c = new md);
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
                for (b = d.body.$DC; null != b;) { b.$jC = this.density;
                    b.$mC = this.friction;
                    b.$nC = this.restitution;
                    b.setSensor(this.sensor); var e = b.$pC;
                    e.categoryBits = c.toBits(this.collisionGroup);
                    null != this.collidesWith && (e.maskBits = c.toBits(this.collidesWith));
                    b.setFilterData(e);
                    b = b.$CC } d.body.resetMassData();
                null != this.onBeginContact && d.get_beginContact().connect(function(b) { d.box2d.defer(function() { a.$cF(a.onBeginContact) }) });
                null != this.onEndContact && d.get_endContact().connect(function(b) { d.box2d.defer(function() { a.$cF(a.onEndContact) }) })
            }
            c =
                this.owner.$KH[3];
            null != c && (c.set_pointerEnabled(this.pointerEnabled), null != this.onPointerDown && c.get_pointerDown().connect(function(b) { a.$cF(a.onPointerDown) }), null != this.onPointerIn && c.get_pointerIn().connect(function(b) { a.$cF(a.onPointerIn) }), null != this.onPointerOut && c.get_pointerOut().connect(function(b) { a.$cF(a.onPointerOut) }), null != this.onPointerUp && c.get_pointerUp().connect(function(b) { a.$cF(a.onPointerUp) }))
        },
        $cF: function(a) { null != this.owner && this.owner.emitMessageToParents(a, this.owner) },
        __class__: sa
    });
    var md = function() { this.$dF = [];
        C.call(this) };
    h["ez.FilterGroups"] = md;
    md.__name__ = ["ez", "FilterGroups"];
    md.__super__ = C;
    md.prototype = m(C.prototype, { get_entitySlot: function() { return 0 }, toBits: function(a) { if (null == a) return 1; var b = 0; if (null != a)
                for (var c = 0; c < a.length;) { var d = a[c];++c; var e = this.$dF.indexOf(d);
                    0 > e && (e = this.$dF.push(d) - 1);
                    b |= 1 << e + 1 }
            return b }, __class__: md });
    var zb = h["ez.PhysicsType"] = { __ename__: ["ez", "PhysicsType"], __constructs__: ["Dynamic", "Static", "Kinematic"] };
    zb.Dynamic = ["Dynamic", 0];
    zb.Dynamic.toString = l;
    zb.Dynamic.__enum__ = zb;
    zb.Static = ["Static", 1];
    zb.Static.toString = l;
    zb.Static.__enum__ = zb;
    zb.Kinematic = ["Kinematic", 2];
    zb.Kinematic.toString = l;
    zb.Kinematic.__enum__ = zb;
    var F = function() { this.target = this.script = null };
    h["kit.creator.CreatorAction"] = F;
    F.__name__ = ["kit", "creator", "CreatorAction"];
    F.runSequence = function(a, b) {
        if (0 >= a.length) return (new fa).$uV(null);
        for (var c = null, d = 0; d < a.length;) {
            var e = [a[d]];
            ++d;
            c = null != c ? c.then(function(a) { return function(c) { return a[0].$gF(b) } }(e)) :
                e[0].$gF(b)
        }
        return c
    };
    F.runParallel = function(a, b) { if (0 >= a.length) return (new fa).$uV(null); for (var c = [], d = 0; d < a.length;) { var e = a[d];++d;
            c.push(e.$gF(b)) } return fa.all(c) };
    F.prototype = {
        $eF: function(a) {},
        $fF: function(a) { return null },
        $gF: function(a) {
            if (null == this.script || null == this.script.owner) return (new fa).failure();
            if (null != this.target) {
                var b = this.script.owner._internal_getFromParents(3, ja);
                a = null;
                for (var c = b.objects.keys(); c.hasNext();) {
                    var d = c.next();
                    if (this.target.name == d.name) {
                        a = b.objects.h[d.__id__];
                        break
                    }
                }
                if (null == a) return (new fa).failure()
            }
            this.$eF(a);
            a = this.$fF(a);
            null == a && (a = (new fa).$uV(null));
            return a
        },
        __class__: F
    };
    var ee = function() { this.duration = 1;
        F.call(this) };
    h["ez.Delay"] = ee;
    ee.__name__ = ["ez", "Delay"];
    ee.__super__ = F;
    ee.prototype = m(F.prototype, { $fF: function(a) { var b = new fa;
            a.addChild((new R).add(new fe(this.duration, b))); return b }, __class__: ee });
    var fe = function(a, b) { C.call(this);
        this.$jF = a;
        this.$kF = b };
    h.$CG = fe;
    fe.__name__ = ["$CG"];
    fe.__super__ = C;
    fe.prototype = m(C.prototype, {
        get_entitySlot: function() { return 11 },
        onUpdate: function(a) { this.$jF -= a;
            0 >= this.$jF && (this.owner.dispose(), this.$kF.success(null)) },
        __class__: fe
    });
    var ge = function() { F.call(this) };
    h["ez.Dispose"] = ge;
    ge.__name__ = ["ez", "Dispose"];
    ge.__super__ = F;
    ge.prototype = m(F.prototype, { $eF: function(a) { a.dispose() }, __class__: ge });
    var Sd = function(a, b) { this.loaded = new mb;
        C.call(this);
        null == b && (b = a);
        this.$lF = b };
    h["ez.EzApp"] = Sd;
    Sd.__name__ = ["ez", "EzApp"];
    Sd.__super__ = C;
    Sd.prototype = m(C.prototype, {
        get_entitySlot: function() { return 18 },
        onStart: function() {
            var a =
                this,
                b = this.owner.$KH[8];
            null == b && this.owner.add(b = new he);
            var c = this.owner.$KH[2];
            null == c && this.owner.add(c = new Hc);
            var d = this.owner.$KH[10];
            null == d && this.owner.add(d = new Ub);
            d = ta.getRequiredAssetPacks(this.$lF).map(function(a) { return c.load(a) });
            fa.all(d).then(function(c) { b.unwindToScene(new db(a.$lF));
                a.loaded.emit() })
        },
        __class__: Sd
    });
    var Xb = function(a) { null == a && (a = !0);
        C.call(this);
        this.opaque = a;
        this.shown = new mb;
        this.hidden = new mb };
    h["kit.scene.Scene"] = Xb;
    Xb.__name__ = ["kit", "scene", "Scene"];
    Xb.__super__ =
        C;
    Xb.prototype = m(C.prototype, { get_entitySlot: function() { return 9 }, __class__: Xb });
    var db = function(a, b) { null == b && (b = !0);
        this.onStarted = this.onStopped = this.onUpdated = this.onPropertyChanged = this.onKeyDown = this.onKeyUp = this.onPointerDown = this.onPointerUp = this.$nF = null;
        Xb.call(this, b);
        this.$mF = a };
    h["ez.EzScene"] = db;
    db.__name__ = ["ez", "EzScene"];
    db.__super__ = Xb;
    db.prototype = m(Xb.prototype, {
        onStart: function() {
            var a = this;
            Xb.prototype.onStart.call(this);
            var b = this.owner._internal_getFromParents(2).getScene(this.$mF),
                c = [];
            this.registerDisposable(b.reloadCount.watch(function(d, e) {
                a.onStarted = b.properties.get("onStarted");
                a.onStopped = b.properties.get("onStopped");
                a.onUpdated = b.properties.get("onUpdated");
                a.onPropertyChanged = b.properties.get("onPropertyChanged");
                a.onKeyDown = b.properties.get("onKeyDown");
                a.onKeyUp = b.properties.get("onKeyUp");
                a.onPointerDown = b.properties.get("onPointerDown");
                a.onPointerUp = b.properties.get("onPointerUp");
                for (var f = 0; f < c.length;) { var k = c[f];++f;
                    k.dispose() } c = [];
                null != a.onKeyDown && c.push(a.connect1(t.$EI.getKeyboard().down,
                    function(b) { a.$cF(a.onKeyDown) }));
                null != a.onKeyUp && c.push(a.connect1(t.$EI.getKeyboard().up, function(b) { a.$cF(a.onKeyUp) }));
                null != a.onPointerDown && c.push(a.connect1(t.$EI.$TH.down, function(b) { a.$cF(a.onPointerDown) }));
                null != a.onPointerUp && c.push(a.connect1(t.$EI.$TH.up, function(b) { a.$cF(a.onPointerUp) }))
            }));
            var d = b.createSprite();
            d.setCamera(0, 0, oa.$aN("width"), oa.$aN("height"));
            d.drawBackgroundColor = this.opaque;
            this.$nF = (new R).add(d);
            this.owner.addChild(this.$nF);
            var e = new ie;
            this.owner.add(e);
            var f = b.properties.get("gravityX"),
                k = b.properties.get("gravityY"),
                e = e.world.$HD;
            null != f && (e.x = parseFloat(f));
            null != k && (e.y = parseFloat(k));
            f = new Ub;
            this.owner.add(f);
            if (null != this.onPropertyChanged) { k = [f]; for (e = this.owner.parent; null != e;) { var n = e.$KH[10];
                    null != n && k.push(n);
                    e = e.parent } for (e = 0; e < k.length;) n = k[e], ++e, this.connect2(n.changed, function(b, c) { a.$cF(a.onPropertyChanged) }) }
            for (k = b.properties.keys(); k.hasNext();) e = k.next(), n = p.parseFloat(b.properties.get(e)), isNaN(n) || f.set(e, n);
            1 != oa.$aN("scaleMode") &&
                (f = function() { var a = Math.min(t.$EI.$VH.get_width() / d.cameraWidth.$nH, t.$EI.$VH.get_height() / d.cameraHeight.$nH);
                    d.setXY(t.$EI.$VH.get_width() / 2 - a * d.cameraWidth.$nH / 2, t.$EI.$VH.get_height() / 2 - a * d.cameraHeight.$nH / 2);
                    d.setScale(a) }, f(), this.connect0(t.$EI.$VH.resize, f));
            f = b.createScript();
            this.$nF.add(f);
            this.owner.yieldForStart();
            null != this.onStarted && this.$cF(this.onStarted)
        },
        onUpdate: function(a) { Xb.prototype.onUpdate.call(this, a);
            null != this.onUpdated && this.$cF(this.onUpdated) },
        onStop: function() {
            Xb.prototype.onStop.call(this);
            null != this.onStopped && this.$cF(this.onStopped)
        },
        $cF: function(a) { this.$nF.emitMessageToParents(a, this.owner) },
        __class__: db
    });
    var ua = function() { this.subActions = [];
        F.call(this) };
    h["kit.creator.GroupAction"] = ua;
    ua.__name__ = ["kit", "creator", "GroupAction"];
    ua.__super__ = F;
    ua.prototype = m(F.prototype, { $fF: function(a) { return F.runSequence(this.subActions, a) }, __class__: ua });
    var je = function() { ua.call(this) };
    h["ez.Parallel"] = je;
    je.__name__ = ["ez", "Parallel"];
    je.__super__ = ua;
    je.prototype = m(ua.prototype, {
        $fF: function(a) {
            return F.runParallel(this.subActions,
                a)
        },
        __class__: je
    });
    var ke = function() { this.count = -1;
        ua.call(this) };
    h["ez.Repeat"] = ke;
    ke.__name__ = ["ez", "Repeat"];
    ke.__super__ = ua;
    ke.prototype = m(ua.prototype, { $fF: function(a) { return 0 > this.count ? this.$pF(a) : this.$qF(a, this.count) }, $pF: function(a) { var b = this; return F.runSequence(this.subActions, a).then(function(c) { return b.$pF(a) }) }, $qF: function(a, b) { var c = this; return 0 >= b ? null : F.runSequence(this.subActions, a).then(function(d) { return c.$qF(a, b - 1) }) }, __class__: ke });
    var le = function() { this.name = null;
        F.call(this) };
    h["ez.RunAction"] = le;
    le.__name__ = ["ez", "RunAction"];
    le.__super__ = F;
    le.prototype = m(F.prototype, { $fF: function(a) { return this.script.run(this.name, a) }, __class__: le });
    var me = function() { ua.call(this) };
    h["ez.Sequence"] = me;
    me.__name__ = ["ez", "Sequence"];
    me.__super__ = ua;
    me.prototype = m(ua.prototype, { __class__: me });
    var ne = function() { ua.call(this) };
    h["ez.Spawn"] = ne;
    ne.__name__ = ["ez", "Spawn"];
    ne.__super__ = ua;
    ne.prototype = m(ua.prototype, {
        $fF: function(a) {
            if (null == a) return null;
            var b = this.script.owner._internal_getFromParents(3,
                ja);
            a = a.$KH[1];
            a = null != a ? a.info : this.target;
            var c = b.createObject(a);
            b.getLayer(a.layer.name).addChild(c);
            c.yieldForStart();
            return F.runSequence(this.subActions, c)
        },
        __class__: ne
    });
    var ic = function() { F.call(this) };
    h["ez.TweenAction"] = ic;
    ic.__name__ = ["ez", "TweenAction"];
    ic.__super__ = F;
    ic.prototype = m(F.prototype, {
        $rF: function(a, b, c, d, e) { if (0 >= d) return b.set__(c), null;
            b.animateTo(c, d, this.$tF(e)); return sc.on(a, b) },
        $sF: function(a, b, c, d, e, f, k) {
            if (0 >= f) return b.set__(c), d.set__(e), null;
            k = this.$tF(k);
            b.animateTo(c,
                f, k);
            d.animateTo(e, f, k);
            return sc.on(a, b)
        },
        $tF: function(a) {
            switch (a[1]) {
                case 0:
                    return G.linear;
                case 1:
                    return G.quadIn;
                case 2:
                    return G.quadOut;
                case 3:
                    return G.quadInOut;
                case 4:
                    return G.cubeIn;
                case 5:
                    return G.cubeOut;
                case 6:
                    return G.cubeInOut;
                case 7:
                    return G.quartIn;
                case 8:
                    return G.quartOut;
                case 9:
                    return G.quartInOut;
                case 10:
                    return G.quintIn;
                case 11:
                    return G.quintOut;
                case 12:
                    return G.quintInOut;
                case 13:
                    return G.sineIn;
                case 14:
                    return G.sineOut;
                case 15:
                    return G.sineInOut;
                case 16:
                    return G.bounceIn;
                case 17:
                    return G.bounceOut;
                case 18:
                    return G.bounceInOut;
                case 19:
                    return G.circIn;
                case 20:
                    return G.circOut;
                case 21:
                    return G.circInOut;
                case 22:
                    return G.expoIn;
                case 23:
                    return G.expoOut;
                case 24:
                    return G.expoInOut;
                case 25:
                    return G.backIn;
                case 26:
                    return G.backOut;
                case 27:
                    return G.backInOut;
                case 28:
                    return G.elasticIn;
                case 29:
                    return G.elasticOut;
                case 30:
                    return G.elasticInOut
            }
        },
        __class__: ic
    });
    var sc = function(a, b) { C.call(this);
        this.$vF = a;
        this.$wF = a.$wF;
        this.$kF = b };
    h.$CH = sc;
    sc.__name__ = ["$CH"];
    sc.on = function(a, b) {
        var c = new fa;
        a.addChild((new R).add(new sc(b,
            c)));
        return c
    };
    sc.__super__ = C;
    sc.prototype = m(C.prototype, { get_entitySlot: function() { return 20 }, onUpdate: function(a) { this.$vF.$wF != this.$wF && (this.owner.dispose(), this.$kF.success(null)) }, __class__: sc });
    var u = h["ez.TweenEase"] = { __ename__: ["ez", "TweenEase"], __constructs__: "Linear QuadIn QuadOut QuadInOut CubeIn CubeOut CubeInOut QuartIn QuartOut QuartInOut QuintIn QuintOut QuintInOut SineIn SineOut SineInOut BounceIn BounceOut BounceInOut CircIn CircOut CircInOut ExpoIn ExpoOut ExpoInOut BackIn BackOut BackInOut ElasticIn ElasticOut ElasticInOut".split(" ") };
    u.Linear = ["Linear", 0];
    u.Linear.toString = l;
    u.Linear.__enum__ = u;
    u.QuadIn = ["QuadIn", 1];
    u.QuadIn.toString = l;
    u.QuadIn.__enum__ = u;
    u.QuadOut = ["QuadOut", 2];
    u.QuadOut.toString = l;
    u.QuadOut.__enum__ = u;
    u.QuadInOut = ["QuadInOut", 3];
    u.QuadInOut.toString = l;
    u.QuadInOut.__enum__ = u;
    u.CubeIn = ["CubeIn", 4];
    u.CubeIn.toString = l;
    u.CubeIn.__enum__ = u;
    u.CubeOut = ["CubeOut", 5];
    u.CubeOut.toString = l;
    u.CubeOut.__enum__ = u;
    u.CubeInOut = ["CubeInOut", 6];
    u.CubeInOut.toString = l;
    u.CubeInOut.__enum__ = u;
    u.QuartIn = ["QuartIn", 7];
    u.QuartIn.toString =
        l;
    u.QuartIn.__enum__ = u;
    u.QuartOut = ["QuartOut", 8];
    u.QuartOut.toString = l;
    u.QuartOut.__enum__ = u;
    u.QuartInOut = ["QuartInOut", 9];
    u.QuartInOut.toString = l;
    u.QuartInOut.__enum__ = u;
    u.QuintIn = ["QuintIn", 10];
    u.QuintIn.toString = l;
    u.QuintIn.__enum__ = u;
    u.QuintOut = ["QuintOut", 11];
    u.QuintOut.toString = l;
    u.QuintOut.__enum__ = u;
    u.QuintInOut = ["QuintInOut", 12];
    u.QuintInOut.toString = l;
    u.QuintInOut.__enum__ = u;
    u.SineIn = ["SineIn", 13];
    u.SineIn.toString = l;
    u.SineIn.__enum__ = u;
    u.SineOut = ["SineOut", 14];
    u.SineOut.toString = l;
    u.SineOut.__enum__ =
        u;
    u.SineInOut = ["SineInOut", 15];
    u.SineInOut.toString = l;
    u.SineInOut.__enum__ = u;
    u.BounceIn = ["BounceIn", 16];
    u.BounceIn.toString = l;
    u.BounceIn.__enum__ = u;
    u.BounceOut = ["BounceOut", 17];
    u.BounceOut.toString = l;
    u.BounceOut.__enum__ = u;
    u.BounceInOut = ["BounceInOut", 18];
    u.BounceInOut.toString = l;
    u.BounceInOut.__enum__ = u;
    u.CircIn = ["CircIn", 19];
    u.CircIn.toString = l;
    u.CircIn.__enum__ = u;
    u.CircOut = ["CircOut", 20];
    u.CircOut.toString = l;
    u.CircOut.__enum__ = u;
    u.CircInOut = ["CircInOut", 21];
    u.CircInOut.toString = l;
    u.CircInOut.__enum__ =
        u;
    u.ExpoIn = ["ExpoIn", 22];
    u.ExpoIn.toString = l;
    u.ExpoIn.__enum__ = u;
    u.ExpoOut = ["ExpoOut", 23];
    u.ExpoOut.toString = l;
    u.ExpoOut.__enum__ = u;
    u.ExpoInOut = ["ExpoInOut", 24];
    u.ExpoInOut.toString = l;
    u.ExpoInOut.__enum__ = u;
    u.BackIn = ["BackIn", 25];
    u.BackIn.toString = l;
    u.BackIn.__enum__ = u;
    u.BackOut = ["BackOut", 26];
    u.BackOut.toString = l;
    u.BackOut.__enum__ = u;
    u.BackInOut = ["BackInOut", 27];
    u.BackInOut.toString = l;
    u.BackInOut.__enum__ = u;
    u.ElasticIn = ["ElasticIn", 28];
    u.ElasticIn.toString = l;
    u.ElasticIn.__enum__ = u;
    u.ElasticOut = ["ElasticOut",
        29
    ];
    u.ElasticOut.toString = l;
    u.ElasticOut.__enum__ = u;
    u.ElasticInOut = ["ElasticInOut", 30];
    u.ElasticInOut.toString = l;
    u.ElasticInOut.__enum__ = u;
    var nd = function() { this.strokeWidth = 5;
        this.strokeColor = 10066329;
        this.fillColor = 12632256;
        sa.call(this) };
    h["ez.VectorGraphics"] = nd;
    nd.__name__ = ["ez", "VectorGraphics"];
    nd.__super__ = sa;
    nd.prototype = m(sa.prototype, {
        onStart: function() {
            var a = this.owner.$KH[3];
            null == a && (a = new oe(this.info), this.info.transformSprite(a), this.owner.add(a));
            sa.prototype.onStart.call(this);
            a = a.get_graphics();
            switch (this.info.shape[1]) {
                case 2:
                    a.fillPolygon(this.fillColor, this.$xF(!1));
                    0 < this.strokeWidth && a.strokeLines(this.strokeColor, this.$xF(!0), this.strokeWidth);
                    break;
                case 3:
                    a.strokeLines(this.strokeColor, this.$xF(!1), this.strokeWidth);
                    break;
                case 0:
                    a.fillRect(this.fillColor, 0, 0, this.info.width, this.info.height);
                    0 < this.strokeWidth && a.strokeLines(this.strokeColor, [0, 0, this.info.width, 0, this.info.width, this.info.height, 0, this.info.height, 0, 0], this.strokeWidth);
                    break;
                case 1:
                    var b = this.info.width /
                        2,
                        c = this.info.height / 2;
                    a.fillEllipse(this.fillColor, b, c, b, c);
                    0 < this.strokeWidth && a.strokeEllipse(this.strokeColor, b, c, b, c, this.strokeWidth)
            }
        },
        $xF: function(a) { for (var b = [], c = 0, d = this.info.points; c < d.length;) { var e = d[c];++c;
                b.push(e.x);
                b.push(e.y) } a && 0 < b.length && (b.push(b[0]), b.push(b[1])); return b },
        __class__: nd
    });
    var nb = function(a, b) { null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b };
    h["kit.math.Point"] = nb;
    nb.__name__ = ["kit", "math", "Point"];
    nb.prototype = {
        add: function(a, b) { this.x += a;
            this.y += b },
        normalize: function() {
            var a =
                this.magnitude();
            this.x /= a;
            this.y /= a
        },
        dot: function(a, b) { return this.x * a + this.y * b },
        multiply: function(a) { this.x *= a;
            this.y *= a },
        magnitude: function() { return Math.sqrt(this.x * this.x + this.y * this.y) },
        distanceToSquared: function(a, b) { var c = this.x - a,
                d = this.y - b; return c * c + d * d },
        __class__: nb
    };
    var B = function() {
        this.$NG = null;
        var a = this;
        C.call(this);
        this.$B |= 182;
        this.$DG = new Ab;
        var b = function(b, d) { a.$B |= 24 };
        this.x = new D(0, b);
        this.y = new D(0, b);
        this.rotation = new D(0, b);
        this.scaleX = new D(1, b);
        this.scaleY = new D(1, b);
        this.anchorX = new D(0, b);
        this.anchorY = new D(0, b);
        this.alpha = new D(1)
    };
    h["kit.display.Sprite"] = B;
    B.__name__ = ["kit", "display", "Sprite"];
    B.hitTest = function(a, b, c) { var d = a.$KH[3]; if (null != d) { if (6 != (d.$B & 6) || null != d.$NG && null != d.$NG.$UK || !d.getLocalMatrix().inverseTransform(b, c, B.$SG)) return null;
            b = B.$SG.x;
            c = B.$SG.y; var e = d.get_scissor(); if (null != e && !e.contains(b, c)) return null } a = B.$PG(a.firstChild, b, c); return null != a ? a : null != d && d.containsLocal(b, c) ? d : null };
    B.render = function(a, b) { B.$OG(a, b, !0) };
    B.$OG = function(a,
        b, c) {
        if (a.active) {
            var d = a.$KH[3];
            if (null != d) {
                var e = d.alpha.$nH;
                if (0 == (d.$B & 2) || 0 >= e) return;
                var f = d.$NG;
                if (c && null != f && null != f.$UK) return;
                b.save();
                null != f && null != f.$TK && 0 != (d.$B & 128) && (c = f.$TK.owner, null != c && (b.beginMask(), B.$OG(c, b, !1), b.endMask()));
                1 > e && b.multiplyAlpha(e);
                e = d.getLocalMatrix();
                c = e.m02;
                var k = e.m12;
                0 != (d.$B & 32) && (c = Math.round(c), k = Math.round(k));
                b.transform(e.m00, e.m10, e.m01, e.m11, c, k);
                null != f && (1 == f.$PK.$nH && 1 == f.$QK.$nH && 1 == f.$RK.$nH || b.tint(f.$PK.$nH, f.$QK.$nH, f.$RK.$nH), null != f.$NK &&
                    b.setBlendMode(f.$NK), e = f.$OK, null != e && b.applyScissor(e.x, e.y, e.width, e.height));
                d.draw(b);
                null != f && null != f.$SK && f.$SK.render(b)
            }
            f = a.$KH[8];
            if (null != f)
                for (f = f.occludedScenes, e = 0; e < f.length;) c = f[e], ++e, B.render(c, b);
            for (a = a.firstChild; null != a;) f = a.next, B.render(a, b), a = f;
            null != d && b.restore()
        }
    };
    B.$PG = function(a, b, c) { if (null != a) { var d = B.$PG(a.next, b, c); return null != d ? d : B.hitTest(a, b, c) } return null };
    B.$RG = function(a, b, c, d) {
        a = a.transform(b, c, B.$SG);
        b = a.x;
        c = a.y;
        b < d.x && (d.x = b);
        c < d.y && (d.y = c);
        b > d.width && (d.width =
            b);
        c > d.height && (d.height = c)
    };
    B.__super__ = C;
    B.prototype = m(C.prototype, {
        get_entitySlot: function() { return 3 },
        getNaturalWidth: function() { return 0 },
        getNaturalHeight: function() { return 0 },
        containsLocal: function(a, b) { return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight() },
        getLocalMatrix: function() {
            0 != (this.$B & 8) && (this.$B &= -9, this.$DG.compose(this.x.$nH, this.y.$nH, this.scaleX.$nH, this.scaleY.$nH, 3.141592653589793 * this.rotation.$nH / 180), this.$DG.translate(-this.anchorX.$nH, -this.anchorY.$nH));
            return this.$DG
        },
        setAnchor: function(a, b) { this.anchorX.set__(a);
            this.anchorY.set__(b); return this },
        centerAnchor: function() { this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() / 2); return this },
        setXY: function(a, b) { this.x.set__(a);
            this.y.set__(b); return this },
        setTint: function(a) { if (null != this.$NG || 16777215 != a) this.get_tintR().set__((a & 16711680) / 16711680), this.get_tintG().set__((a & 65280) / 65280), this.get_tintB().set__((a & 255) / 255); return this },
        setRotation: function(a) {
            this.rotation.set__(a);
            return this
        },
        setScale: function(a) { this.scaleX.set__(a);
            this.scaleY.set__(a); return this },
        setScaleXY: function(a, b) { this.scaleX.set__(a);
            this.scaleY.set__(b); return this },
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
            null != b && (b.$PK.update(a), b.$QK.update(a), b.$RK.update(a))
        },
        draw: function(a) {},
        $zF: function() { if (null == this.owner) return null; for (var a = this.owner.parent; null != a;) { var b = a.$KH[3]; if (null != b) return b;
                a = a.parent } return null },
        get_pointerDown: function() { null == this.$HG && (this.$HG = new ka); return this.$HG },
        get_pointerUp: function() { null == this.$JG && (this.$JG = new ka); return this.$JG },
        get_pointerIn: function() { null == this.$KG && (this.$KG = new ka); return this.$KG },
        get_pointerOut: function() { null == this.$LG && (this.$LG = new ka); return this.$LG },
        $$F: function() { var a = this;
            null == this.$MG && t.$EI.$NH.$HQ(function() { a.$MG = t.$EI.$TH.move.connect(function(b) { for (var c = b.hit; null != c;) { if (c == a) return;
                        c = c.$zF() } null != a.$LG && 0 != (a.$B & 64) && a.$LG.emit(b);
                    a.$B &= -65;
                    null != a.$MG && (a.$MG.dispose(), a.$MG = null) }) }) },
        get_blendMode: function() { return null != this.$NG ? this.$NG.$NK : null },
        set_blendMode: function(a) {
            if (null == this.$NG) { if (null == a) return null;
                this.$NG = new Jb }
            return this.$NG.$NK =
                a
        },
        get_scissor: function() { return null != this.$NG ? this.$NG.$OK : null },
        set_scissor: function(a) { if (null == this.$NG) { if (null == a) return null;
                this.$NG = new Jb } return this.$NG.$OK = a },
        get_tintR: function() { null == this.$NG && (this.$NG = new Jb); return this.$NG.$PK },
        get_tintG: function() { null == this.$NG && (this.$NG = new Jb); return this.$NG.$QK },
        get_tintB: function() { null == this.$NG && (this.$NG = new Jb); return this.$NG.$RK },
        get_graphics: function() {
            null == this.$NG && (this.$NG = new Jb);
            var a = this.$NG.$SK;
            null == a && (a = this.$NG.$SK =
                new pe);
            return a
        },
        set_mask: function(a) { if (null == this.$NG) { if (null == a) return null;
                this.$NG = new Jb } var b = this.$NG.$TK; if (null != b && (b = b.$NG, null != b && null != b.$UK)) { var c = b.$UK;
                b.$UK = null;
                c.set_mask(null) } null != a && (b = a.$NG, null == b && (b = a.$NG = new Jb), null != b.$UK && b.$UK.set_mask(null), b.$UK = this); return this.$NG.$TK = a },
        set_maskEnabled: function(a) { this.$B = Mc.set(this.$B, 128, a); return a },
        set_visible: function(a) { this.$B = Mc.set(this.$B, 2, a); return a },
        set_pointerEnabled: function(a) {
            this.$B = Mc.set(this.$B, 4, a);
            return a
        },
        set_pixelSnapping: function(a) { this.$B = Mc.set(this.$B, 32, a); return a },
        $_F: function(a) { this.$BG(a);
            null != this.$HG && this.$HG.emit(a) },
        $AG: function(a) { this.$BG(a);
            null != this.$IG && this.$IG.emit(a) },
        $BG: function(a) { 0 == (this.$B & 64) && (this.$B |= 64, null != this.$KG || null != this.$LG) && (null != this.$KG && this.$KG.emit(a), this.$$F()) },
        $CG: function(a) {
            switch (a.source[1]) {
                case 1:
                    null != this.$LG && 0 != (this.$B & 64) && this.$LG.emit(a), this.$B &= -65, null != this.$MG && (this.$MG.dispose(), this.$MG = null) } null != this.$JG &&
                this.$JG.emit(a)
        },
        __class__: B,
        __properties__: m(C.prototype.__properties__, {
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
    var oe = function(a) { B.call(this); switch (a.shape[1]) {
            case 2:
            case 3:
                var b = this.$dG = this.$cG = this.$bG = this.$aG = 0; for (a = a.points; b < a.length;) { var c = a[b];++b;
                    c.x < this.$aG ? this.$aG = c.x : c.x > this.$cG && (this.$cG = c.x);
                    c.y < this.$bG ? this.$bG = c.y : c.y > this.$dG && (this.$dG = c.y) } break;
            default:
                this.$bG = this.$aG = 0, this.$cG = a.width, this.$dG = a.height } };
    h.$CI = oe;
    oe.__name__ = ["$CI"];
    oe.__super__ = B;
    oe.prototype = m(B.prototype, {
        containsLocal: function(a, b) {
            return a >=
                this.$aG && a <= this.$cG && b >= this.$bG && b <= this.$dG
        },
        __class__: oe
    });
    var qe = function() { this.ease = u.Linear;
        this.to = this.duration = 0;
        F.call(this) };
    h["ez.display.AlphaTo"] = qe;
    qe.__name__ = ["ez", "display", "AlphaTo"];
    qe.__super__ = ic;
    qe.prototype = m(ic.prototype, { $fF: function(a) { return this.$rF(a, a.$KH[3].alpha, this.to, this.duration, this.ease) }, __class__: qe });
    var re = function() { this.ease = u.Linear;
        this.duration = 0;
        this.x = this.y = null;
        F.call(this) };
    h["ez.display.ScaleTo"] = re;
    re.__name__ = ["ez", "display", "ScaleTo"];
    re.__super__ =
        ic;
    re.prototype = m(ic.prototype, { $fF: function(a) { var b = a.$KH[3]; return this.$sF(a, b.scaleX, null != this.x ? this.x : b.scaleX.$nH, b.scaleY, null != this.y ? this.y : b.scaleY.$nH, this.duration, this.ease) }, __class__: re });
    var se = function() { this["with"] = [];
        ua.call(this) };
    h["ez.physics.IfCollision"] = se;
    se.__name__ = ["ez", "physics", "IfCollision"];
    se.__super__ = ua;
    se.prototype = m(ua.prototype, {
        $fF: function(a) {
            var b = a.$KH[6];
            if (null == b) return null;
            var c = b.box2d,
                d = c.owner.$KH[0];
            null == d && c.owner.add(d = new md);
            c = d.toBits(this["with"]);
            for (b = b.body.$IC; null != b;) { if (0 != (b.contact.$uB & 16) && 0 != (b.other.$DC.$pC.categoryBits & c)) return F.runSequence(this.subActions, a);
                b = b.next }
            return null
        },
        __class__: se
    });
    var te = function() { this._value = null;
        this.value = "";
        this.type = ob.Number;
        this.operator = va.Equals;
        ua.call(this) };
    h["ez.property.IfProperty"] = te;
    te.__name__ = ["ez", "property", "IfProperty"];
    te.__super__ = ua;
    te.prototype = m(ua.prototype, {
        $fF: function(a) {
            var b = this.$eG(a);
            null == b && (b = 0);
            null == this._value && (this._value = Kb.$hG(this.type, this.value));
            var c;
            switch (this.operator[1]) {
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
                    c = b >= this._value }
            return c ? F.runSequence(this.subActions, a) : null
        },
        $eG: function(a) { if (null == a) return null;
            a = a._internal_getFromParents(10); if (null == a) return null; var b = a.get(this.property); return null != b ? b : this.$eG(a.owner.parent) },
        __class__: te
    });
    var va = h["ez.property.IfOperator"] = {
        __ename__: ["ez", "property", "IfOperator"],
        __constructs__: "Equals NotEquals LessThan LessThanOrEquals GreaterThan GreaterThanOrEquals".split(" ")
    };
    va.Equals = ["Equals", 0];
    va.Equals.toString = l;
    va.Equals.__enum__ = va;
    va.NotEquals = ["NotEquals", 1];
    va.NotEquals.toString = l;
    va.NotEquals.__enum__ = va;
    va.LessThan = ["LessThan", 2];
    va.LessThan.toString = l;
    va.LessThan.__enum__ = va;
    va.LessThanOrEquals = ["LessThanOrEquals", 3];
    va.LessThanOrEquals.toString = l;
    va.LessThanOrEquals.__enum__ = va;
    va.GreaterThan = ["GreaterThan", 4];
    va.GreaterThan.toString = l;
    va.GreaterThan.__enum__ =
        va;
    va.GreaterThanOrEquals = ["GreaterThanOrEquals", 5];
    va.GreaterThanOrEquals.toString = l;
    va.GreaterThanOrEquals.__enum__ = va;
    var Kb = function() { this.location = Bb.Scene;
        this.property = null;
        F.call(this) };
    h["ez.property.PropertyAction"] = Kb;
    Kb.__name__ = ["ez", "property", "PropertyAction"];
    Kb.$hG = function(a, b) { switch (a[1]) {
            case 0:
                var c = parseFloat(b); return isNaN(c) ? 0 : c;
            case 1:
                return "" != b && "0" != b && "false" != b;
            case 2:
                return b } };
    Kb.__super__ = F;
    Kb.prototype = m(F.prototype, {
        $eF: function(a) {
            if (null != this.property) {
                var b =
                    this.$fG(a),
                    c = b.$KH[10];
                null == c && b.add(c = new Ub);
                b = c.get(this.property);
                a = this.$gG(a, b);
                c.set(this.property, a)
            }
        },
        $fG: function(a) { switch (this.location[1]) {
                case 0:
                    return this.script.owner._internal_getFromParents(18).owner;
                case 1:
                    return this.script.owner._internal_getFromParents(9, db).owner;
                case 2:
                    return a } },
        $gG: function(a, b) { return null },
        __class__: Kb
    });
    var Bb = h["ez.property.PropertyLocation"] = { __ename__: ["ez", "property", "PropertyLocation"], __constructs__: ["Global", "Scene", "Target"] };
    Bb.Global = ["Global",
        0
    ];
    Bb.Global.toString = l;
    Bb.Global.__enum__ = Bb;
    Bb.Scene = ["Scene", 1];
    Bb.Scene.toString = l;
    Bb.Scene.__enum__ = Bb;
    Bb.Target = ["Target", 2];
    Bb.Target.toString = l;
    Bb.Target.__enum__ = Bb;
    var ob = h["ez.property.PropertyType"] = { __ename__: ["ez", "property", "PropertyType"], __constructs__: ["Number", "Boolean", "String"] };
    ob.Number = ["Number", 0];
    ob.Number.toString = l;
    ob.Number.__enum__ = ob;
    ob.Boolean = ["Boolean", 1];
    ob.Boolean.toString = l;
    ob.Boolean.__enum__ = ob;
    ob.String = ["String", 2];
    ob.String.toString = l;
    ob.String.__enum__ = ob;
    var ue = function() { this._value = null;
        this.value = "";
        this.type = ob.Number;
        Kb.call(this) };
    h["ez.property.SetProperty"] = ue;
    ue.__name__ = ["ez", "property", "SetProperty"];
    ue.__super__ = Kb;
    ue.prototype = m(Kb.prototype, { $gG: function(a, b) { null == this._value && (this._value = Kb.$hG(this.type, this.value)); return this._value }, __class__: ue });
    var Ka = function() { this.duration = 0.5;
        this.transition = Cb.None;
        F.call(this) };
    h["ez.scene.SceneAction"] = Ka;
    Ka.__name__ = ["ez", "scene", "SceneAction"];
    Ka.$mG = function(a, b) {
        for (var c = [], d = 0; d <
            a.length;) { var e = a[d];++d;
            0 > b.indexOf(e) && c.push(e) }
        return c
    };
    Ka.__super__ = F;
    Ka.prototype = m(F.prototype, {
        $iG: function(a, b) { null == b && (b = !0); return new db(a, b) },
        $jG: function(a, b, c, d) {
            var e = this,
                f;
            f = this.script.owner._internal_getFromParents(2);
            var k = this.$lG(),
                n = new od(f, a);
            a = null != b ? new od(f, b) : null;
            f = [];
            if (c)
                for (var g = 0, h = k.scenes; g < h.length;) { var l = h[g];++g;
                    l = p.instance(l.$KH[9], db);
                    null != l && (f = f.concat(ta.getRequiredAssetPacks(l.$mF))) } g = k.get_topScene().firstComponent;
            if (0 < n.$pG.length && null !=
                a) return null != g && g.registerDisposable(a), c && (a.$qG = Ka.$mG(f, n.$oG.concat(a.$oG)), n.$qG = Ka.$mG(a.$oG, n.$oG)), a.$rG().then(function(a) { a = e.$iG(b);
                a.registerDisposable(n);
                d ? k.pushScene(a) : k.unwindToScene(a);
                a.owner.yieldForStart(); var c = a.owner.$KH[10];
                null == c && a.owner.add(c = new Ub);
                c.set("progress", 0); return n.$rG().progress(function(a) { c.set("progress", 100 * a | 0) }) });
            null != g && g.registerDisposable(n);
            c && (n.$qG = Ka.$mG(f, n.$oG));
            var yb;
            k.get_topScene();
            yb = k.get_topScene().getComponentBySlot(10);
            null ==
                yb && k.get_topScene().add(yb = new Ub);
            yb.set("progress", 0);
            return n.$rG().progress(function(a) { yb.set("progress", 100 * a | 0) })
        },
        $kG: function() { switch (this.transition[1]) {
                case 0:
                    return null;
                case 1:
                    return new ve(this.duration);
                case 2:
                    return new we(this.duration) } },
        $lG: function() { return this.script.owner._internal_getFromParents(8) },
        __class__: Ka
    });
    var xe = function() { this.disposeUnusedAssets = !0;
        this.onLoadError = this.loadingScene = null;
        Ka.call(this) };
    h["ez.scene.ChangeScene"] = xe;
    xe.__name__ = ["ez", "scene", "ChangeScene"];
    xe.__super__ = Ka;
    xe.prototype = m(Ka.prototype, { $fF: function(a) { var b = this; if (null == this.scene) return null; var c = this.$lG(); return this.$jG(this.scene, this.loadingScene, this.disposeUnusedAssets, !1).then(function(a) { c.unwindToScene(b.$iG(b.scene), b.$kG()) }).catchError(function(c) { null != b.onLoadError && null != b.script.owner && b.script.owner.emitMessageToParents(b.onLoadError, a); return (new fa).failure(c) }) }, __class__: xe });
    var ye = function() { this.disposeUnusedAssets = !0;
        Ka.call(this) };
    h["ez.scene.PopScene"] =
        ye;
    ye.__name__ = ["ez", "scene", "PopScene"];
    ye.__super__ = Ka;
    ye.prototype = m(Ka.prototype, { $eF: function(a) { this.$lG().popScene(this.$kG()) }, __class__: ye });
    var ze = function() { this.onLoadError = this.loadingScene = null;
        this.opaque = !1;
        Ka.call(this) };
    h["ez.scene.PushScene"] = ze;
    ze.__name__ = ["ez", "scene", "PushScene"];
    ze.__super__ = Ka;
    ze.prototype = m(Ka.prototype, {
        $fF: function(a) {
            var b = this;
            if (null == this.scene) return null;
            var c = this.$lG(),
                d = c.get_topScene();
            return this.$jG(this.scene, this.loadingScene, !1, !0).then(function(a) {
                c.$QV(d);
                c.pushScene(b.$iG(b.scene, b.opaque), b.$kG())
            }).catchError(function(c) { null != b.onLoadError && null != b.script.owner && b.script.owner.emitMessageToParents(b.onLoadError, a); return (new fa).failure(c) })
        },
        __class__: ze
    });
    var od = function(a, b) { this.$qG = [];
        this.$sG = a;
        this.$mF = b;
        this.$oG = ta.getRequiredAssetPacks(b);
        this.$pG = this.$oG.filter(function(b) { return !a.isLoaded(b) }) };
    h.$CJ = od;
    od.__name__ = ["$CJ"];
    od.__interfaces__ = [lb];
    od.prototype = {
        $rG: function() {
            var a = this,
                b = this.$pG.map(function(b) { return a.$sG.load(b) });
            return fa.all(b)
        },
        dispose: function() { for (var a = 0, b = this.$qG; a < b.length;) { var c = b[a];++a;
                this.$sG.removePackByName(c) } },
        __class__: od
    };
    var Cb = h["ez.scene.SceneTransition"] = { __ename__: ["ez", "scene", "SceneTransition"], __constructs__: ["None", "Slide", "Fade"] };
    Cb.None = ["None", 0];
    Cb.None.toString = l;
    Cb.None.__enum__ = Cb;
    Cb.Slide = ["Slide", 1];
    Cb.Slide.toString = l;
    Cb.Slide.__enum__ = Cb;
    Cb.Fade = ["Fade", 2];
    Cb.Fade.toString = l;
    Cb.Fade.__enum__ = Cb;
    var tc = function() {
        this.soundChannel = null;
        this.loop = this.waitForComplete =
            this.stopWhenTargetDisposed = !1;
        this.volume = 1;
        this.sound = null;
        F.call(this)
    };
    h["ez.sound.PlaySound"] = tc;
    tc.__name__ = ["ez", "sound", "PlaySound"];
    tc.__super__ = F;
    tc.prototype = m(F.prototype, {
        $fF: function(a) {
            if (null == this.sound) return null;
            var b;
            b = this.script.owner._internal_getFromParents(2);
            if (null == b) return null;
            b = b.getSound(this.sound);
            b = this.loop ? b.loop(this.volume) : b.play(this.volume);
            if (null != this.soundChannel) {
                var c = tc.channels.get(this.soundChannel);
                null != c && c.dispose();
                tc.channels.set(this.soundChannel,
                    b)
            }
            this.stopWhenTargetDisposed && (c = a.$KH[19], null == c && a.add(c = new Ae), c.registerDisposable(b));
            if (this.waitForComplete) { var d = new fa;
                b.get_complete().watch(function(a, b) { a && d.success(null) }); return d }
            return null
        },
        __class__: tc
    });
    var Ae = function() { C.call(this) };
    h.$CK = Ae;
    Ae.__name__ = ["$CK"];
    Ae.__super__ = C;
    Ae.prototype = m(C.prototype, { get_entitySlot: function() { return 19 }, __class__: Ae });
    var pd = function() {};
    h["haxe.IMap"] = pd;
    pd.__name__ = ["haxe", "IMap"];
    pd.prototype = { __class__: pd };
    var Kg = function(a) {
        this.url =
            a;
        this.headers = new Ba;
        this.params = new Ba;
        this.async = !0
    };
    h["haxe.Http"] = Kg;
    Kg.__name__ = ["haxe", "Http"];
    Kg.prototype = {
        setHeader: function(a, b) { this.headers = Tb.filter(this.headers, function(b) { return b.header != a });
            this.headers.push({ header: a, value: b }); return this },
        setPostData: function(a) { this.postData = a; return this },
        request: function(a) {
            var b = this;
            b.responseData = null;
            var c = this.req = Be.createXMLHttpRequest(),
                d = function(a) {
                    if (4 == c.readyState) {
                        var d;
                        try { d = c.status } catch (e) { e instanceof s && (e = e.val), d = null } null !=
                            d && (a = window.location.protocol.toLowerCase(), (new Ja("^(?:about|app|app-storage|.+-extension|file|res|widget):$", "")).match(a) && (d = null != c.responseText ? 200 : 404));
                        void 0 == d && (d = null);
                        if (null != d) b.onStatus(d);
                        if (null != d && 200 <= d && 400 > d) b.req = null, b.onData(b.responseData = c.responseText);
                        else if (null == d) b.req = null, b.onError("Failed to connect or resolve host");
                        else switch (d) {
                            case 12029:
                                b.req = null;
                                b.onError("Failed to connect to host");
                                break;
                            case 12007:
                                b.req = null;
                                b.onError("Unknown host");
                                break;
                            default:
                                b.req =
                                    null, b.responseData = c.responseText, b.onError("Http Error #" + c.status)
                        }
                    }
                };
            this.async && (c.onreadystatechange = d);
            var e = this.postData;
            if (null != e) a = !0;
            else
                for (var f = this.params.h, k = null; null != f;) k = f[0], f = f[1], e = null == e ? "" : e + "&", e += encodeURIComponent(k.param) + "=" + encodeURIComponent(k.value);
            try { if (a) c.open("POST", this.url, this.async);
                else if (null != e) { var n = 1 >= this.url.split("?").length;
                    c.open("GET", this.url + (n ? "?" : "&") + e, this.async);
                    e = null } else c.open("GET", this.url, this.async) } catch (g) {
                g instanceof s &&
                    (g = g.val);
                b.req = null;
                this.onError(g.toString());
                return
            }!Tb.exists(this.headers, function(a) { return "Content-Type" == a.header }) && a && null == this.postData && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            a = this.headers.h;
            for (f = null; null != a;) f = a[0], a = a[1], c.setRequestHeader(f.header, f.value);
            c.send(e);
            this.async || d(null)
        },
        onData: function(a) {},
        onError: function(a) {},
        onStatus: function(a) {},
        __class__: Kg
    };
    var Lg = function(a, b) { this.high = a;
        this.low = b };
    h["haxe._Int64.___Int64"] = Lg;
    Lg.__name__ = ["haxe", "_Int64", "___Int64"];
    Lg.prototype = { __class__: Lg };
    var Yb = function() { this.buf = new Xa;
        this.cache = [];
        this.useCache = Yb.USE_CACHE;
        this.useEnumIndex = Yb.USE_ENUM_INDEX;
        this.shash = new T;
        this.scount = 0 };
    h["haxe.Serializer"] = Yb;
    Yb.__name__ = ["haxe", "Serializer"];
    Yb.prototype = {
        toString: function() { return this.buf.b },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b += "R", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)) : (this.shash.set(a, this.scount++), this.buf.b += "y", a = encodeURIComponent(a),
                this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length), this.buf.b += ":", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a))
        },
        serializeRef: function(a) { for (var b = typeof a, c = 0, d = this.cache.length; c < d;) { var e = c++,
                    f = this.cache[e]; if (typeof f == b && f == a) return this.buf.b += "r", this.buf.b = null == e ? this.buf.b + "null" : this.buf.b + ("" + e), !0 } this.cache.push(a); return !1 },
        serializeFields: function(a) {
            for (var b = 0, c = P.fields(a); b < c.length;) {
                var d = c[b];
                ++b;
                this.serializeString(d);
                this.serialize(P.field(a,
                    d))
            }
            this.buf.b += "g"
        },
        serialize: function(a) {
            var b = ca["typeof"](a);
            switch (b[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == a) { this.buf.b += "z"; break } this.buf.b += "i";
                    this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                    break;
                case 2:
                    isNaN(a) ? this.buf.b += "k" : isFinite(a) ? (this.buf.b += "d", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a)) : this.buf.b = 0 > a ? this.buf.b + "m" : this.buf.b + "p";
                    break;
                case 3:
                    this.buf.b = a ? this.buf.b + "t" : this.buf.b + "f";
                    break;
                case 6:
                    b = b[2];
                    if (b == String) { this.serializeString(a); break }
                    if (this.useCache &&
                        this.serializeRef(a)) break;
                    switch (b) {
                        case Array:
                            b = 0;
                            this.buf.b += "a";
                            for (var c = a.length, d = 0; d < c;) { var e = d++;
                                null == a[e] ? b++ : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)), b = 0), this.serialize(a[e])) } 0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)));
                            this.buf.b += "h";
                            break;
                        case Ba:
                            this.buf.b += "l";
                            a = a.h;
                            for (b = null; null != a;) b = a[0], a = a[1], this.serialize(b);
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.add(a.getTime());
                            break;
                        case T:
                            this.buf.b += "b";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(null != Ca[c] ? a.getReserved(c) : a.h[c]);
                            this.buf.b += "h";
                            break;
                        case eb:
                            this.buf.b += "q";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c), this.serialize(a.h[c]);
                            this.buf.b += "h";
                            break;
                        case Lb:
                            this.buf.b += "M";
                            for (b = a.keys(); b.hasNext();) c = b.next(), d = P.field(c, "__id__"), P.deleteField(c, "__id__"), this.serialize(c), c.__id__ =
                                d, this.serialize(a.h[c.__id__]);
                            this.buf.b += "h";
                            break;
                        case Db:
                            d = 0;
                            e = a.length - 2;
                            b = new Xa;
                            for (c = Yb.BASE64; d < e;) { var f = a.get(d++),
                                    k = a.get(d++),
                                    n = a.get(d++);
                                b.add(c.charAt(f >> 2));
                                b.add(c.charAt((f << 4 | k >> 4) & 63));
                                b.add(c.charAt((k << 2 | n >> 6) & 63));
                                b.add(c.charAt(n & 63)) } d == e ? (e = a.get(d++), a = a.get(d++), b.add(c.charAt(e >> 2)), b.add(c.charAt((e << 4 | a >> 4) & 63)), b.add(c.charAt(a << 2 & 63))) : d == e + 1 && (a = a.get(d++), b.add(c.charAt(a >> 2)), b.add(c.charAt(a << 4 & 63)));
                            a = b.b;
                            this.buf.b += "s";
                            this.buf.b = null == a.length ? this.buf.b +
                                "null" : this.buf.b + ("" + a.length);
                            this.buf.b += ":";
                            this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(ca.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(ca.getClassName(b)), this.useCache && this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 4:
                    if (aa.__instanceof(a, Yh)) a = ca.getClassName(a), this.buf.b += "A", this.serializeString(a);
                    else if (aa.__instanceof(a, Zh)) this.buf.b += "B", this.serializeString(ca.getEnumName(a));
                    else { if (this.useCache && this.serializeRef(a)) break;
                        this.buf.b += "o";
                        this.serializeFields(a) }
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache) { if (this.serializeRef(a)) break;
                        this.cache.pop() } this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                    this.serializeString(ca.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += ":", this.buf.b += p.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += ":";
                    b = a.length;
                    this.buf.b += p.string(b - 2);
                    for (c = 2; c < b;) d = c++, this.serialize(a[d]);
                    this.useCache && this.cache.push(a);
                    break;
                case 5:
                    throw new s("Cannot serialize function");
                default:
                    throw new s("Cannot serialize " + p.string(a));
            }
        },
        __class__: Yb
    };
    var Sa = function(a) { this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = Sa.DEFAULT_RESOLVER;
        null == a && (a = ca, Sa.DEFAULT_RESOLVER = a);
        this.setResolver(a) };
    h["haxe.Unserializer"] = Sa;
    Sa.__name__ = ["haxe", "Unserializer"];
    Sa.initCodes = function() {
        for (var a = [], b = 0, c = Sa.BASE64.length; b < c;) {
            var d =
                b++;
            a[Sa.BASE64.charCodeAt(d)] = d
        }
        return a
    };
    Sa.run = function(a) { return (new Sa(a)).unserialize() };
    Sa.prototype = {
        setResolver: function(a) { this.resolver = null == a ? { resolveClass: function(a) { return null }, resolveEnum: function(a) { return null } } : a },
        get: function(a) { return this.buf.charCodeAt(a) },
        readDigits: function() { for (var a = 0, b = !1, c = this.pos;;) { var d = this.buf.charCodeAt(this.pos); if (d != d) break; if (45 == d) { if (this.pos != c) break;
                    b = !0 } else { if (48 > d || 57 < d) break;
                    a = 10 * a + (d - 48) } this.pos++ } b && (a *= -1); return a },
        readFloat: function() {
            for (var a =
                    this.pos;;) { var b = this.buf.charCodeAt(this.pos); if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                else break }
            return p.parseFloat(E.substr(this.buf, a, this.pos - a))
        },
        unserializeObject: function(a) { for (;;) { if (this.pos >= this.length) throw new s("Invalid object"); if (103 == this.buf.charCodeAt(this.pos)) break; var b = this.unserialize(); if ("string" != typeof b) throw new s("Invalid object key"); var c = this.unserialize();
                a[b] = c } this.pos++ },
        unserializeEnum: function(a, b) {
            if (58 != this.get(this.pos++)) throw new s("Invalid enum format");
            var c = this.readDigits();
            if (0 == c) return ca.createEnum(a, b);
            for (var d = []; 0 < c--;) d.push(this.unserialize());
            return ca.createEnum(a, b, d)
        },
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
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw new s("Invalid string length");
                    var b = E.substr(this.buf, this.pos, a);
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
                    return a = {}, this.cache.push(a), this.unserializeObject(a), a;
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
                    a = ca.createEmptyInstance(b);
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
                    a =
                        this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new s("Enum not found " + a);
                    this.pos++;
                    var c = this.readDigits(),
                        d = ca.getEnumConstructs(b)[c];
                    if (null == d) throw new s("Unknown enum index " + a + "@" + c);
                    a = this.unserializeEnum(b, d);
                    this.cache.push(a);
                    return a;
                case 108:
                    a = new Ba;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                    this.pos++;
                    return a;
                case 98:
                    a = new T;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 113:
                    a = new eb;
                    this.cache.push(a);
                    for (b = this.get(this.pos++); 58 == b;) b = this.readDigits(), a.set(b, this.unserialize()), b = this.get(this.pos++);
                    if (104 != b) throw new s("Invalid IntMap format");
                    return a;
                case 77:
                    a = new Lb;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 118:
                    return 48 <= this.buf.charCodeAt(this.pos) && 57 >= this.buf.charCodeAt(this.pos) && 48 <= this.buf.charCodeAt(this.pos + 1) && 57 >= this.buf.charCodeAt(this.pos +
                        1) && 48 <= this.buf.charCodeAt(this.pos + 2) && 57 >= this.buf.charCodeAt(this.pos + 2) && 48 <= this.buf.charCodeAt(this.pos + 3) && 57 >= this.buf.charCodeAt(this.pos + 3) && 45 == this.buf.charCodeAt(this.pos + 4) ? (a = E.substr(this.buf, this.pos, 19), a = E.strDate(a), this.pos += 19) : (a = this.readFloat(), b = new Date, b.setTime(a), a = b), this.cache.push(a), a;
                case 115:
                    a = this.readDigits();
                    d = this.buf;
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw new s("Invalid bytes length");
                    var e = Sa.CODES;
                    null == e && (e = Sa.initCodes(), Sa.CODES = e);
                    for (var f = this.pos, k = a & 3, n = f + (a - k), b = Db.alloc(3 * (a >> 2) + (2 <= k ? k - 1 : 0)), c = 0; f < n;) { var g = e[K.fastCodeAt(d, f++)],
                            h = e[K.fastCodeAt(d, f++)];
                        b.set(c++, g << 2 | h >> 4);
                        g = e[K.fastCodeAt(d, f++)];
                        b.set(c++, h << 4 | g >> 2);
                        h = e[K.fastCodeAt(d, f++)];
                        b.set(c++, g << 6 | h) } 2 <= k && (h = e[K.fastCodeAt(d, f++)], n = e[K.fastCodeAt(d, f++)], b.set(c++, h << 2 | n >> 4), 3 == k && (d = e[K.fastCodeAt(d, f++)], b.set(c++, n << 4 | d >> 2)));
                    this.pos += a;
                    this.cache.push(b);
                    return b;
                case 67:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new s("Class not found " +
                        a);
                    a = ca.createEmptyInstance(b);
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
                    if (null == b) throw new s("Enum not found " + a);
                    return b
            }
            this.pos--;
            throw new s("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
        },
        __class__: Sa
    };
    var Db = function(a) {
        this.length =
            a.byteLength;
        this.b = new Oh(a);
        this.b.bufferValue = a;
        a.hxBytes = this;
        a.bytes = this.b
    };
    h["haxe.io.Bytes"] = Db;
    Db.__name__ = ["haxe", "io", "Bytes"];
    Db.alloc = function(a) { return new Db(new Ph(a)) };
    Db.ofString = function(a) { for (var b = [], c = 0; c < a.length;) { var d = K.fastCodeAt(a, c++);
            55296 <= d && 56319 >= d && (d = d - 55232 << 10 | K.fastCodeAt(a, c++) & 1023);
            127 >= d ? b.push(d) : (2047 >= d ? b.push(192 | d >> 6) : (65535 >= d ? b.push(224 | d >> 12) : (b.push(240 | d >> 18), b.push(128 | d >> 12 & 63)), b.push(128 | d >> 6 & 63)), b.push(128 | d & 63)) } return new Db((new Oh(b)).buffer) };
    Db.prototype = {
        get: function(a) { return this.b[a] },
        set: function(a, b) { this.b[a] = b & 255 },
        getString: function(a, b) { if (0 > a || 0 > b || a + b > this.length) throw new s(Za.OutsideBounds); for (var c = "", d = this.b, e = String.fromCharCode, f = a, k = a + b; f < k;) { var n = d[f++]; if (128 > n) { if (0 == n) break;
                    c += e(n) } else if (224 > n) c += e((n & 63) << 6 | d[f++] & 127);
                else if (240 > n) var g = d[f++],
                    c = c + e((n & 31) << 12 | (g & 127) << 6 | d[f++] & 127);
                else var g = d[f++],
                    h = d[f++],
                    n = (n & 15) << 18 | (g & 127) << 12 | (h & 127) << 6 | d[f++] & 127,
                    c = c + e((n >> 10) + 55232),
                    c = c + e(n & 1023 | 56320) } return c },
        __class__: Db
    };
    var Nc = function() {};
    h["haxe.crypto.Base64"] = Nc;
    Nc.__name__ = ["haxe", "crypto", "Base64"];
    Nc.decode = function(a, b) { null == b && (b = !0); if (b)
            for (; 61 == E.cca(a, a.length - 1);) a = E.substr(a, 0, -1); return (new Mg(Nc.BYTES)).decodeBytes(Db.ofString(a)) };
    var Mg = function(a) { for (var b = a.length, c = 1; b > 1 << c;) c++; if (8 < c || b != 1 << c) throw new s("BaseCode : base length must be a power of two.");
        this.base = a;
        this.nbits = c };
    h["haxe.crypto.BaseCode"] = Mg;
    Mg.__name__ = ["haxe", "crypto", "BaseCode"];
    Mg.prototype = {
        initTable: function() {
            for (var a = [], b = 0; 256 > b;) { var c = b++;
                a[c] = -1 } b = 0;
            for (c = this.base.length; b < c;) { var d = b++;
                a[this.base.b[d]] = d } this.tbl = a
        },
        decodeBytes: function(a) { var b = this.nbits;
            null == this.tbl && this.initTable(); for (var c = this.tbl, d = a.length * b >> 3, e = Db.alloc(d), f = 0, k = 0, n = 0, g = 0; g < d;) { for (; 8 > k;) { var k = k + b,
                        f = f << b,
                        h = c[a.get(n++)]; if (-1 == h) throw new s("BaseCode : invalid encoded char");
                    f |= h } k -= 8;
                e.set(g++, f >> k & 255) } return e },
        __class__: Mg
    };
    var eb = function() { this.h = {} };
    h["haxe.ds.IntMap"] = eb;
    eb.__name__ = ["haxe", "ds", "IntMap"];
    eb.__interfaces__ = [pd];
    eb.prototype = { set: function(a, b) { this.h[a] = b }, get: function(a) { return this.h[a] }, remove: function(a) { if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a]; return !0 }, keys: function() { var a = [],
                b; for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0); return E.iter(a) }, __class__: eb };
    var Lb = function() { this.h = {};
        this.h.__keys__ = {} };
    h["haxe.ds.ObjectMap"] = Lb;
    Lb.__name__ = ["haxe", "ds", "ObjectMap"];
    Lb.__interfaces__ = [pd];
    Lb.prototype = {
        set: function(a, b) {
            var c = a.__id__ || (a.__id__ = ++Lb.count);
            this.h[c] = b;
            this.h.__keys__[c] =
                a
        },
        get: function(a) { return this.h[a.__id__] },
        remove: function(a) { a = a.__id__; if (null == this.h.__keys__[a]) return !1;
            delete this.h[a];
            delete this.h.__keys__[a]; return !0 },
        keys: function() { var a = [],
                b; for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]); return E.iter(a) },
        iterator: function() { return { ref: this.h, it: this.keys(), hasNext: function() { return this.it.hasNext() }, next: function() { var a = this.it.next(); return this.ref[a.__id__] } } },
        __class__: Lb
    };
    var Ce = function(a, b) {
        this.map = a;
        this.keys =
            b;
        this.index = 0;
        this.count = b.length
    };
    h["haxe.ds._StringMap.StringMapIterator"] = Ce;
    Ce.__name__ = ["haxe", "ds", "_StringMap", "StringMapIterator"];
    Ce.prototype = { hasNext: function() { return this.index < this.count }, next: function() { return this.map.get(this.keys[this.index++]) }, __class__: Ce };
    var T = function() { this.h = {} };
    h["haxe.ds.StringMap"] = T;
    T.__name__ = ["haxe", "ds", "StringMap"];
    T.__interfaces__ = [pd];
    T.prototype = {
        set: function(a, b) { null != Ca[a] ? this.setReserved(a, b) : this.h[a] = b },
        get: function(a) {
            return null != Ca[a] ?
                this.getReserved(a) : this.h[a]
        },
        exists: function(a) { return null != Ca[a] ? this.existsReserved(a) : this.h.hasOwnProperty(a) },
        setReserved: function(a, b) { null == this.rh && (this.rh = {});
            this.rh["$" + a] = b },
        getReserved: function(a) { return null == this.rh ? null : this.rh["$" + a] },
        existsReserved: function(a) { return null == this.rh ? !1 : this.rh.hasOwnProperty("$" + a) },
        remove: function(a) { if (null != Ca[a]) { a = "$" + a; if (null == this.rh || !this.rh.hasOwnProperty(a)) return !1;
                delete this.rh[a] } else { if (!this.h.hasOwnProperty(a)) return !1;
                delete this.h[a] } return !0 },
        keys: function() { var a = this.arrayKeys(); return E.iter(a) },
        arrayKeys: function() { var a = [],
                b; for (b in this.h) this.h.hasOwnProperty(b) && a.push(b); if (null != this.rh)
                for (b in this.rh) 36 == b.charCodeAt(0) && a.push(b.substr(1)); return a },
        iterator: function() { return new Ce(this, this.arrayKeys()) },
        __class__: T
    };
    var Za = h["haxe.io.Error"] = { __ename__: ["haxe", "io", "Error"], __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"] };
    Za.Blocked = ["Blocked", 0];
    Za.Blocked.toString = l;
    Za.Blocked.__enum__ = Za;
    Za.Overflow = ["Overflow", 1];
    Za.Overflow.toString = l;
    Za.Overflow.__enum__ = Za;
    Za.OutsideBounds = ["OutsideBounds", 2];
    Za.OutsideBounds.toString = l;
    Za.OutsideBounds.__enum__ = Za;
    Za.Custom = function(a) { a = ["Custom", 3, a];
        a.__enum__ = Za;
        a.toString = l; return a };
    var Mb = function() {};
    h["haxe.io.FPHelper"] = Mb;
    Mb.__name__ = ["haxe", "io", "FPHelper"];
    Mb.i32ToFloat = function(a) { var b = a >>> 23 & 255,
            c = a & 8388607; return 0 == c && 0 == b ? 0 : (1 - (a >>> 31 << 1)) * (1 + Math.pow(2, -23) * c) * Math.pow(2, b - 127) };
    Mb.floatToI32 = function(a) {
        if (0 == a) return 0;
        var b;
        b = 0 > a ?
            -a : a;
        var c = Math.floor(Math.log(b) / 0.6931471805599453); - 127 > c ? c = -127 : 128 < c && (c = 128);
        b = Math.round(8388608 * (b / Math.pow(2, c) - 1)) & 8388607;
        return (0 > a ? -2147483648 : 0) | c + 127 << 23 | b
    };
    Mb.i64ToDouble = function(a, b) { var c = (b >> 20 & 2047) - 1023,
            d = 4294967296 * (b & 1048575) + 2147483648 * (a >>> 31) + (a & 2147483647); return 0 == d && -1023 == c ? 0 : (1 - (b >>> 31 << 1)) * (1 + Math.pow(2, -52) * d) * Math.pow(2, c) };
    Mb.doubleToI64 = function(a) {
        var b = Mb.i64tmp;
        if (0 == a) b.low = 0, b.high = 0;
        else {
            var c;
            c = 0 > a ? -a : a;
            var d = Math.floor(Math.log(c) / 0.6931471805599453);
            c = 4503599627370496 * (c / Math.pow(2, d) - 1);
            c = Math.round(c);
            b.low = c | 0;
            b.high = (0 > a ? -2147483648 : 0) | d + 1023 << 20 | c / 4294967296 | 0
        }
        return b
    };
    var ra = h["haxe.rtti.CType"] = { __ename__: ["haxe", "rtti", "CType"], __constructs__: "CUnknown CEnum CClass CTypedef CFunction CAnonymous CDynamic CAbstract".split(" ") };
    ra.CUnknown = ["CUnknown", 0];
    ra.CUnknown.toString = l;
    ra.CUnknown.__enum__ = ra;
    ra.CEnum = function(a, b) { var c = ["CEnum", 1, a, b];
        c.__enum__ = ra;
        c.toString = l; return c };
    ra.CClass = function(a, b) {
        var c = ["CClass", 2, a, b];
        c.__enum__ =
            ra;
        c.toString = l;
        return c
    };
    ra.CTypedef = function(a, b) { var c = ["CTypedef", 3, a, b];
        c.__enum__ = ra;
        c.toString = l; return c };
    ra.CFunction = function(a, b) { var c = ["CFunction", 4, a, b];
        c.__enum__ = ra;
        c.toString = l; return c };
    ra.CAnonymous = function(a) { a = ["CAnonymous", 5, a];
        a.__enum__ = ra;
        a.toString = l; return a };
    ra.CDynamic = function(a) { a = ["CDynamic", 6, a];
        a.__enum__ = ra;
        a.toString = l; return a };
    ra.CAbstract = function(a, b) { var c = ["CAbstract", 7, a, b];
        c.__enum__ = ra;
        c.toString = l; return c };
    var ma = h["haxe.rtti.Rights"] = {
        __ename__: ["haxe",
            "rtti", "Rights"
        ],
        __constructs__: "RNormal RNo RCall RMethod RDynamic RInline".split(" ")
    };
    ma.RNormal = ["RNormal", 0];
    ma.RNormal.toString = l;
    ma.RNormal.__enum__ = ma;
    ma.RNo = ["RNo", 1];
    ma.RNo.toString = l;
    ma.RNo.__enum__ = ma;
    ma.RCall = function(a) { a = ["RCall", 2, a];
        a.__enum__ = ma;
        a.toString = l; return a };
    ma.RMethod = ["RMethod", 3];
    ma.RMethod.toString = l;
    ma.RMethod.__enum__ = ma;
    ma.RDynamic = ["RDynamic", 4];
    ma.RDynamic.toString = l;
    ma.RDynamic.__enum__ = ma;
    ma.RInline = ["RInline", 5];
    ma.RInline.toString = l;
    ma.RInline.__enum__ = ma;
    var pb = h["haxe.rtti.TypeTree"] = { __ename__: ["haxe", "rtti", "TypeTree"], __constructs__: ["TPackage", "TClassdecl", "TEnumdecl", "TTypedecl", "TAbstractdecl"] };
    pb.TPackage = function(a, b, c) { a = ["TPackage", 0, a, b, c];
        a.__enum__ = pb;
        a.toString = l; return a };
    pb.TClassdecl = function(a) { a = ["TClassdecl", 1, a];
        a.__enum__ = pb;
        a.toString = l; return a };
    pb.TEnumdecl = function(a) { a = ["TEnumdecl", 2, a];
        a.__enum__ = pb;
        a.toString = l; return a };
    pb.TTypedecl = function(a) { a = ["TTypedecl", 3, a];
        a.__enum__ = pb;
        a.toString = l; return a };
    pb.TAbstractdecl =
        function(a) { a = ["TAbstractdecl", 4, a];
            a.__enum__ = pb;
            a.toString = l; return a };
    var De = function() {};
    h["haxe.rtti.Meta"] = De;
    De.__name__ = ["haxe", "rtti", "Meta"];
    De.getType = function(a) { a = De.getMeta(a); return null == a || null == a.obj ? {} : a.obj };
    De.getMeta = function(a) { return a.__meta__ };
    var Ng = function() { this.root = [] };
    h["haxe.rtti.XmlParser"] = Ng;
    Ng.__name__ = ["haxe", "rtti", "XmlParser"];
    Ng.prototype = {
        mkPath: function(a) { return a },
        mkTypeParams: function(a) { a = a.split(":"); return "" == a[0] ? [] : a },
        mkRights: function(a) {
            switch (a) {
                case "null":
                    return ma.RNo;
                case "method":
                    return ma.RMethod;
                case "dynamic":
                    return ma.RDynamic;
                case "inline":
                    return ma.RInline;
                default:
                    return ma.RCall(a)
            }
        },
        xerror: function(a) { throw new s("Invalid " + a.get_name()); },
        processElement: function(a) { a = new qb(a); switch (a.get_name()) {
                case "class":
                    return pb.TClassdecl(this.xclass(a));
                case "enum":
                    return pb.TEnumdecl(this.xenum(a));
                case "typedef":
                    return pb.TTypedecl(this.xtypedef(a));
                case "abstract":
                    return pb.TAbstractdecl(this.xabstract(a));
                default:
                    return this.xerror(a) } },
        xmeta: function(a) {
            var b = [];
            for (a = a.nodes.resolve("m").iterator(); null != a.head;) { var c;
                a.val = a.head[0];
                a.head = a.head[1];
                c = a.val; for (var d = [], e = c.nodes.resolve("e").iterator(); null != e.head;) e.val = e.head[0], e.head = e.head[1], d.push(e.val.get_innerHTML());
                b.push({ name: c.att.resolve("n"), params: d }) }
            return b
        },
        xoverloads: function(a) { var b = new Ba; for (a = a.get_elements(); a.hasNext();) { var c = a.next();
                b.add(this.xclassfield(c)) } return b },
        xpath: function(a) {
            var b = this.mkPath(a.att.resolve("path")),
                c = new Ba;
            for (a = a.get_elements(); a.hasNext();) {
                var d =
                    a.next();
                c.add(this.xtype(d))
            }
            return { path: b, params: c }
        },
        xclass: function(a) {
            for (var b = null, c = null, d = null, e = new Ba, f = new Ba, k = new Ba, n = [], g = a.get_elements(); g.hasNext();) { var h = g.next(); switch (h.get_name()) {
                    case "haxe_doc":
                        c = h.get_innerData(); break;
                    case "extends":
                        b = this.xpath(h); break;
                    case "implements":
                        e.add(this.xpath(h)); break;
                    case "haxe_dynamic":
                        d = this.xtype(new qb(h.x.firstElement())); break;
                    case "meta":
                        n = this.xmeta(h); break;
                    default:
                        h.x.exists("static") ? k.add(this.xclassfield(h)) : f.add(this.xclassfield(h)) } }
            return {
                file: a.has.resolve("file") ?
                    a.att.resolve("file") : null,
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
                meta: n
            }
        },
        xclassfield: function(a, b) {
            null == b && (b = !1);
            for (var c = a.get_elements(), d = this.xtype(c.next()), e = null, f = [], k = null; c.hasNext();) {
                var n =
                    c.next();
                switch (n.get_name()) {
                    case "haxe_doc":
                        e = n.get_innerData(); break;
                    case "meta":
                        f = this.xmeta(n); break;
                    case "overloads":
                        k = this.xoverloads(n); break;
                    default:
                        this.xerror(n) }
            }
            return {
                name: a.get_name(),
                type: d,
                isPublic: a.x.exists("public") || b,
                isOverride: a.x.exists("override"),
                line: a.has.resolve("line") ? p.parseInt(a.att.resolve("line")) : null,
                doc: e,
                get: a.has.resolve("get") ? this.mkRights(a.att.resolve("get")) : ma.RNormal,
                set: a.has.resolve("set") ? this.mkRights(a.att.resolve("set")) : ma.RNormal,
                params: a.has.resolve("params") ?
                    this.mkTypeParams(a.att.resolve("params")) : [],
                platforms: this.defplat(),
                meta: f,
                overloads: k,
                expr: a.has.resolve("expr") ? a.att.resolve("expr") : null
            }
        },
        xenum: function(a) {
            for (var b = new Ba, c = null, d = [], e = a.get_elements(); e.hasNext();) { var f = e.next(); "haxe_doc" == f.get_name() ? c = f.get_innerData() : "meta" == f.get_name() ? d = this.xmeta(f) : b.add(this.xenumfield(f)) }
            return {
                file: a.has.resolve("file") ? a.att.resolve("file") : null,
                path: this.mkPath(a.att.resolve("path")),
                module: a.has.resolve("module") ? this.mkPath(a.att.resolve("module")) : null,
                doc: c,
                isPrivate: a.x.exists("private"),
                isExtern: a.x.exists("extern"),
                params: this.mkTypeParams(a.att.resolve("params")),
                constructors: b,
                platforms: this.defplat(),
                meta: d
            }
        },
        xenumfield: function(a) {
            var b = null,
                c = a.x.elementsNamed("haxe_doc").next(),
                d;
            d = a.hasNode.resolve("meta") ? this.xmeta(a.node.resolve("meta")) : [];
            if (a.has.resolve("a"))
                for (var e = a.att.resolve("a").split(":"), f = a.get_elements(), b = new Ba, k = 0; k < e.length;) {
                    var n = e[k];
                    ++k;
                    var g = !1;
                    "?" == n.charAt(0) && (g = !0, n = E.substr(n, 1, null));
                    b.add({
                        name: n,
                        opt: g,
                        t: this.xtype(f.next())
                    })
                }
            return { name: a.get_name(), args: b, doc: null == c ? null : (new qb(c)).get_innerData(), meta: d, platforms: this.defplat() }
        },
        xabstract: function(a) {
            for (var b = null, c = null, d = null, e = [], f = [], k = [], n = a.get_elements(); n.hasNext();) {
                var g = n.next();
                switch (g.get_name()) {
                    case "haxe_doc":
                        b = g.get_innerData();
                        break;
                    case "meta":
                        e = this.xmeta(g);
                        break;
                    case "to":
                        for (g = g.get_elements(); g.hasNext();) {
                            var h = g.next();
                            f.push({
                                t: this.xtype(new qb(h.x.firstElement())),
                                field: h.has.resolve("field") ? h.att.resolve("field") : null
                            })
                        }
                        break;
                    case "from":
                        for (g = g.get_elements(); g.hasNext();) h = g.next(), k.push({ t: this.xtype(new qb(h.x.firstElement())), field: h.has.resolve("field") ? h.att.resolve("field") : null });
                        break;
                    case "impl":
                        c = this.xclass(g.node.resolve("class"));
                        break;
                    case "this":
                        d = this.xtype(new qb(g.x.firstElement()));
                        break;
                    default:
                        this.xerror(g)
                }
            }
            return {
                file: a.has.resolve("file") ? a.att.resolve("file") : null,
                path: this.mkPath(a.att.resolve("path")),
                module: a.has.resolve("module") ? this.mkPath(a.att.resolve("module")) : null,
                doc: b,
                isPrivate: a.x.exists("private"),
                params: this.mkTypeParams(a.att.resolve("params")),
                platforms: this.defplat(),
                meta: e,
                athis: d,
                to: f,
                from: k,
                impl: c
            }
        },
        xtypedef: function(a) {
            for (var b = null, c = null, d = [], e = a.get_elements(); e.hasNext();) { var f = e.next(); "haxe_doc" == f.get_name() ? b = f.get_innerData() : "meta" == f.get_name() ? d = this.xmeta(f) : c = this.xtype(f) } e = new T;
            null != this.curplatform && e.set(this.curplatform, c);
            return {
                file: a.has.resolve("file") ? a.att.resolve("file") : null,
                path: this.mkPath(a.att.resolve("path")),
                module: a.has.resolve("module") ?
                    this.mkPath(a.att.resolve("module")) : null,
                doc: b,
                isPrivate: a.x.exists("private"),
                params: this.mkTypeParams(a.att.resolve("params")),
                type: c,
                types: e,
                platforms: this.defplat(),
                meta: d
            }
        },
        xtype: function(a) {
            switch (a.get_name()) {
                case "unknown":
                    return ra.CUnknown;
                case "e":
                    return ra.CEnum(this.mkPath(a.att.resolve("path")), this.xtypeparams(a));
                case "c":
                    return ra.CClass(this.mkPath(a.att.resolve("path")), this.xtypeparams(a));
                case "t":
                    return ra.CTypedef(this.mkPath(a.att.resolve("path")), this.xtypeparams(a));
                case "x":
                    return ra.CAbstract(this.mkPath(a.att.resolve("path")),
                        this.xtypeparams(a));
                case "f":
                    var b = new Ba,
                        c = a.att.resolve("a").split(":"),
                        c = E.iter(c),
                        d;
                    a.has.resolve("v") ? (d = a.att.resolve("v").split(":"), d = E.iter(d)) : d = null;
                    for (a = a.get_elements(); a.hasNext();) { var e = a.next(),
                            f = !1,
                            k = c.next();
                        null == k && (k = ""); "?" == k.charAt(0) && (f = !0, k = E.substr(k, 1, null)); var n;
                        n = null == d ? null : d.next();
                        b.add({ name: k, opt: f, t: this.xtype(e), value: "" == n ? null : n }) } c = b.last();
                    b.remove(c);
                    return ra.CFunction(b, c.t);
                case "a":
                    b = new Ba;
                    for (c = a.get_elements(); c.hasNext();) d = c.next(), d = this.xclassfield(d,
                        !0), d.platforms = new Ba, b.add(d);
                    return ra.CAnonymous(b);
                case "d":
                    return b = null, c = a.x.firstElement(), null != c && (b = this.xtype(new qb(c))), ra.CDynamic(b);
                default:
                    return this.xerror(a)
            }
        },
        xtypeparams: function(a) { var b = new Ba; for (a = a.get_elements(); a.hasNext();) { var c = a.next();
                b.add(this.xtype(c)) } return b },
        defplat: function() { var a = new Ba;
            null != this.curplatform && a.add(this.curplatform); return a },
        __class__: Ng
    };
    var Og = function(a) { this.__x = a };
    h["haxe.xml._Fast.NodeAccess"] = Og;
    Og.__name__ = ["haxe", "xml", "_Fast",
        "NodeAccess"
    ];
    Og.prototype = { resolve: function(a) { var b = this.__x.elementsNamed(a).next(); if (null == b) throw b = this.__x.nodeType == r.Document ? "Document" : this.__x.get_nodeName(), new s(b + " is missing element " + a); return new qb(b) }, __class__: Og };
    var Pg = function(a) { this.__x = a };
    h["haxe.xml._Fast.AttribAccess"] = Pg;
    Pg.__name__ = ["haxe", "xml", "_Fast", "AttribAccess"];
    Pg.prototype = {
        resolve: function(a) {
            if (this.__x.nodeType == r.Document) throw new s("Cannot access document attribute " + a);
            var b = this.__x.get(a);
            if (null ==
                b) throw new s(this.__x.get_nodeName() + " is missing attribute " + a);
            return b
        },
        __class__: Pg
    };
    var Qg = function(a) { this.__x = a };
    h["haxe.xml._Fast.HasAttribAccess"] = Qg;
    Qg.__name__ = ["haxe", "xml", "_Fast", "HasAttribAccess"];
    Qg.prototype = { resolve: function(a) { if (this.__x.nodeType == r.Document) throw new s("Cannot access document attribute " + a); return this.__x.exists(a) }, __class__: Qg };
    var Rg = function(a) { this.__x = a };
    h["haxe.xml._Fast.HasNodeAccess"] = Rg;
    Rg.__name__ = ["haxe", "xml", "_Fast", "HasNodeAccess"];
    Rg.prototype = { resolve: function(a) { return this.__x.elementsNamed(a).hasNext() }, __class__: Rg };
    var Sg = function(a) { this.__x = a };
    h["haxe.xml._Fast.NodeListAccess"] = Sg;
    Sg.__name__ = ["haxe", "xml", "_Fast", "NodeListAccess"];
    Sg.prototype = { resolve: function(a) { var b = new Ba; for (a = this.__x.elementsNamed(a); a.hasNext();) { var c = a.next();
                b.add(new qb(c)) } return b }, __class__: Sg };
    var qb = function(a) {
        if (a.nodeType != r.Document && a.nodeType != r.Element) throw new s("Invalid nodeType " + a.nodeType);
        this.x = a;
        this.node = new Og(a);
        this.nodes =
            new Sg(a);
        this.att = new Pg(a);
        this.has = new Qg(a);
        this.hasNode = new Rg(a)
    };
    h["haxe.xml.Fast"] = qb;
    qb.__name__ = ["haxe", "xml", "Fast"];
    qb.prototype = {
        get_name: function() { return this.x.nodeType == r.Document ? "Document" : this.x.get_nodeName() },
        get_innerData: function() {
            var a = this.x.iterator();
            if (!a.hasNext()) throw new s(this.get_name() + " does not have data");
            var b = a.next(),
                c = a.next();
            if (null != c) {
                if (b.nodeType == r.PCData && c.nodeType == r.CData && "" == K.trim(function(a) {
                        if (b.nodeType == r.Document || b.nodeType == r.Element) throw new s("Bad node type, unexpected " +
                            b.nodeType);
                        return b.nodeValue
                    }(this))) { var d = a.next(); if (null == d || d.nodeType == r.PCData && "" == K.trim(function(a) { if (d.nodeType == r.Document || d.nodeType == r.Element) throw new s("Bad node type, unexpected " + d.nodeType); return d.nodeValue }(this)) && null == a.next()) { if (c.nodeType == r.Document || c.nodeType == r.Element) throw new s("Bad node type, unexpected " + c.nodeType); return c.nodeValue } }
                throw new s(this.get_name() + " does not only have data");
            }
            if (b.nodeType != r.PCData && b.nodeType != r.CData) throw new s(this.get_name() +
                " does not have data");
            if (b.nodeType == r.Document || b.nodeType == r.Element) throw new s("Bad node type, unexpected " + b.nodeType);
            return b.nodeValue
        },
        get_innerHTML: function() { for (var a = new Xa, b = this.x.iterator(); b.hasNext();) { var c = b.next();
                a.add(Ic.print(c)) } return a.b },
        get_elements: function() { var a = this.x.elements(); return { hasNext: Ra(a, a.hasNext), next: function() { var b = a.next(); return null == b ? null : new qb(b) } } },
        __class__: qb,
        __properties__: {
            get_elements: "get_elements",
            get_innerHTML: "get_innerHTML",
            get_innerData: "get_innerData",
            get_name: "get_name"
        }
    };
    var bc = function() {};
    h["haxe.xml.Parser"] = bc;
    bc.__name__ = ["haxe", "xml", "Parser"];
    bc.parse = function(a, b) { null == b && (b = !1); var c = r.createDocument();
        bc.doParse(a, b, 0, c); return c };
    bc.doParse = function(a, b, c, d) {
        null == c && (c = 0);
        for (var e = null, f = 1, k = 1, n = null, g = 0, h = 0, l = 0, m = a.charCodeAt(c), x = new Xa, t = 1, u = -1; m == m;) {
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
                            g = c;
                            f = 13; continue }
                    break;
                case 13:
                    60 == m ?
                        (x.addSub(a, g, c - g), k = r.createPCData(x.b), x = new Xa, d.addChild(k), h++, f = 0, k = 2) : 38 == m && (x.addSub(a, g, c - g), f = 18, t = 13, g = c + 1);
                    break;
                case 17:
                    93 == m && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (m = r.createCData(E.substr(a, g, c - g)), d.addChild(m), h++, c += 2, f = 1);
                    break;
                case 2:
                    switch (m) {
                        case 33:
                            if (91 == a.charCodeAt(c + 1)) { c += 2; if ("CDATA[" != E.substr(a, c, 6).toUpperCase()) throw new s("Expected <![CDATA[");
                                c += 5;
                                f = 17 } else if (68 == a.charCodeAt(c + 1) || 100 == a.charCodeAt(c + 1)) {
                                if ("OCTYPE" != E.substr(a, c + 2, 6).toUpperCase()) throw new s("Expected <!DOCTYPE");
                                c += 8;
                                f = 16
                            } else { if (45 != a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2)) throw new s("Expected \x3c!--");
                                c += 2;
                                f = 15 } g = c + 1;
                            break;
                        case 63:
                            f = 14;
                            g = c;
                            break;
                        case 47:
                            if (null == d) throw new s("Expected node name");
                            g = c + 1;
                            f = 0;
                            k = 10;
                            break;
                        default:
                            f = 3;
                            g = c;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) { if (c == g) throw new s("Expected node name");
                        e = r.createElement(E.substr(a, g, c - g));
                        d.addChild(e);
                        h++;
                        f = 0;
                        k = 4; continue }
                    break;
                case 4:
                    switch (m) {
                        case 47:
                            f = 11;
                            break;
                        case 62:
                            f = 9;
                            break;
                        default:
                            f = 5;
                            g = c;
                            continue
                    }
                    break;
                case 5:
                    if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) { if (g == c) throw new s("Expected attribute name");
                        n = E.substr(a, g, c - g); if (e.exists(n)) throw new s("Duplicate attribute");
                        f = 0;
                        k = 6; continue }
                    break;
                case 6:
                    switch (m) {
                        case 61:
                            f = 0;
                            k = 7; break;
                        default:
                            throw new s("Expected ="); }
                    break;
                case 7:
                    switch (m) {
                        case 34:
                        case 39:
                            x = new Xa;
                            f = 8;
                            g = c + 1;
                            u = m; break;
                        default:
                            throw new s('Expected "'); }
                    break;
                case 8:
                    switch (m) {
                        case 38:
                            x.addSub(a, g, c - g);
                            f = 18;
                            t = 8;
                            g = c + 1;
                            break;
                        case 62:
                            if (b) throw new s("Invalid unescaped " + String.fromCharCode(m) + " in attribute value");
                            m == u && (x.addSub(a, g, c - g), k = x.b, x = new Xa, e.set(n, k), f = 0, k = 4);
                            break;
                        case 60:
                            if (b) throw new s("Invalid unescaped " + String.fromCharCode(m) + " in attribute value");
                            m == u && (x.addSub(a, g, c - g), k = x.b, x = new Xa, e.set(n, k), f = 0, k = 4);
                            break;
                        default:
                            m == u && (x.addSub(a, g, c - g), k = x.b, x = new Xa, e.set(n, k), f = 0, k = 4)
                    }
                    break;
                case 9:
                    g = c = bc.doParse(a, b, c, e);
                    f = 1;
                    break;
                case 11:
                    switch (m) {
                        case 62:
                            f = 1;
                            break;
                        default:
                            throw new s("Expected >");
                    }
                    break;
                case 12:
                    switch (m) {
                        case 62:
                            return 0 == h && d.addChild(r.createPCData("")), c;
                        default:
                            throw new s("Expected >"); }
                case 10:
                    if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) {
                        if (g == c) throw new s("Expected node name");
                        k = E.substr(a, g, c - g);
                        if (d.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + d.nodeType);
                        if (k != d.nodeName) throw new s("Expected </" + function(a) { if (d.nodeType != r.Element) throw "Bad node type, expected Element but found " + d.nodeType; return d.nodeName }(this) +
                            ">");
                        f = 0;
                        k = 12;
                        continue
                    }
                    break;
                case 15:
                    45 == m && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (m = r.createComment(E.substr(a, g, c - g)), d.addChild(m), h++, c += 2, f = 1);
                    break;
                case 16:
                    91 == m ? l++ : 93 == m ? l-- : 62 == m && 0 == l && (m = r.createDocType(E.substr(a, g, c - g)), d.addChild(m), h++, f = 1);
                    break;
                case 14:
                    63 == m && 62 == a.charCodeAt(c + 1) && (c++, m = E.substr(a, g + 1, c - g - 2), m = r.createProcessingInstruction(m), d.addChild(m), h++, f = 1);
                    break;
                case 18:
                    if (59 == m) {
                        g = E.substr(a, g, c - g);
                        if (35 == g.charCodeAt(0)) g = 120 == g.charCodeAt(1) ? p.parseInt("0" + E.substr(g,
                            1, g.length - 1)) : p.parseInt(E.substr(g, 1, g.length - 1)), x.b += String.fromCharCode(g);
                        else if (bc.escapes.exists(g)) x.add(bc.escapes.get(g));
                        else { if (b) throw new s("Undefined entity: " + g);
                            x.b += p.string("&" + g + ";") } g = c + 1;
                        f = t
                    } else if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m) && 35 != m) { if (b) throw new s("Invalid character in entity: " + String.fromCharCode(m));
                        x.b += "&";
                        x.addSub(a, g, c - g);
                        c--;
                        g = c + 1;
                        f = t }
            }
            m = K.fastCodeAt(a, ++c)
        }
        1 == f && (g = c, f = 13);
        if (13 == f) {
            if (c != g || 0 == h) x.addSub(a, g, c - g), a =
                r.createPCData(x.b), d.addChild(a), h++;
            return c
        }
        if (!b && 18 == f && 13 == t) return x.b += "&", x.addSub(a, g, c - g), a = r.createPCData(x.b), d.addChild(a), h++, c;
        throw new s("Unexpected end");
    };
    var Ic = function(a) { this.output = new Xa;
        this.pretty = a };
    h["haxe.xml.Printer"] = Ic;
    Ic.__name__ = ["haxe", "xml", "Printer"];
    Ic.print = function(a, b) { null == b && (b = !1); var c = new Ic(b);
        c.writeNode(a, ""); return c.output.b };
    Ic.prototype = {
        writeNode: function(a, b) {
            switch (a.nodeType) {
                case 2:
                    this.output.b += p.string(b + "<![CDATA[");
                    this.write(K.trim(function(b) {
                        if (a.nodeType ==
                            r.Document || a.nodeType == r.Element) throw new s("Bad node type, unexpected " + a.nodeType);
                        return a.nodeValue
                    }(this)));
                    this.output.b += "]]\x3e";
                    this.pretty && (this.output.b += "");
                    break;
                case 3:
                    var c;
                    if (a.nodeType == r.Document || a.nodeType == r.Element) throw new s("Bad node type, unexpected " + a.nodeType);
                    c = a.nodeValue;
                    c = (new Ja("[\n\r\t]+", "g")).replace(c, "");
                    this.output.b = null == b ? this.output.b + "null" : this.output.b + ("" + b);
                    this.write(K.trim("\x3c!--" + c + "--\x3e"));
                    this.pretty && (this.output.b += "");
                    break;
                case 6:
                    if (a.nodeType !=
                        r.Document && a.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + a.nodeType);
                    for (c = E.iter(a.children); c.hasNext();) { var d = c.next();
                        this.writeNode(d, b) }
                    break;
                case 0:
                    this.output.b += p.string(b + "<");
                    this.write(function(b) { if (a.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + a.nodeType); return a.nodeName }(this));
                    for (c = a.attributes(); c.hasNext();) d = c.next(), this.output.b += p.string(" " + d + '="'), this.write(K.htmlEscape(a.get(d), !0)), this.output.b +=
                        '"';
                    if (this.hasChildren(a)) { this.output.b += ">";
                        this.pretty && (this.output.b += ""); if (a.nodeType != r.Document && a.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + a.nodeType); for (c = E.iter(a.children); c.hasNext();) d = c.next(), this.writeNode(d, this.pretty ? b + "\t" : b);
                        this.output.b += p.string(b + "</");
                        this.write(function(b) { if (a.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + a.nodeType); return a.nodeName }(this));
                        this.output.b += ">" } else this.output.b +=
                        "/>";
                    this.pretty && (this.output.b += "");
                    break;
                case 1:
                    if (a.nodeType == r.Document || a.nodeType == r.Element) throw new s("Bad node type, unexpected " + a.nodeType);
                    c = a.nodeValue;
                    0 != c.length && (this.write(b + K.htmlEscape(c)), this.pretty && (this.output.b += ""));
                    break;
                case 5:
                    this.write("<?" + function(b) { if (a.nodeType == r.Document || a.nodeType == r.Element) throw new s("Bad node type, unexpected " + a.nodeType); return a.nodeValue }(this) + "?>");
                    break;
                case 4:
                    this.write("<!DOCTYPE " + function(b) {
                        if (a.nodeType == r.Document || a.nodeType ==
                            r.Element) throw new s("Bad node type, unexpected " + a.nodeType);
                        return a.nodeValue
                    }(this) + ">")
            }
        },
        write: function(a) { this.output.b = null == a ? this.output.b + "null" : this.output.b + ("" + a) },
        hasChildren: function(a) {
            if (a.nodeType != r.Document && a.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + a.nodeType);
            for (a = E.iter(a.children); a.hasNext();) {
                var b = a.next();
                switch (b.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (0 != K.ltrim(function(a) {
                                if (b.nodeType == r.Document || b.nodeType ==
                                    r.Element) throw new s("Bad node type, unexpected " + b.nodeType);
                                return b.nodeValue
                            }(this)).length) return !0
                }
            }
            return !1
        },
        __class__: Ic
    };
    var s = function(a) { Error.call(this);
        this.val = a;
        this.message = String(a);
        Error.captureStackTrace && Error.captureStackTrace(this, s) };
    h["js._Boot.HaxeError"] = s;
    s.__name__ = ["js", "_Boot", "HaxeError"];
    s.__super__ = Error;
    s.prototype = m(Error.prototype, { __class__: s });
    var aa = function() {};
    h["js.Boot"] = aa;
    aa.__name__ = ["js", "Boot"];
    aa.getClass = function(a) {
        if (a instanceof Array && null == a.__enum__) return Array;
        var b = a.__class__;
        if (null != b) return b;
        a = aa.__nativeClassName(a);
        return null != a ? aa.__resolveNativeClass(a) : null
    };
    aa.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        "function" == c && (a.__name__ || a.__ename__) && (c = "object");
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) { if (2 == a.length) return a[0];
                        c = a[0] + "(";
                        b += "\t"; for (var d = 2, e = a.length; d < e;) var f = d++,
                            c = 2 != f ? c + ("," + aa.__string_rec(a[f], b)) : c + aa.__string_rec(a[f], b); return c + ")" } c = a.length;
                    d =
                        "[";
                    b += "\t";
                    for (e = 0; e < c;) f = e++, d += (0 < f ? "," : "") + aa.__string_rec(a[f], b);
                    return d + "]"
                }
                try { d = a.toString } catch (k) { return k instanceof s && (k = k.val), "???" }
                if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                for (c in a) e && !a.hasOwnProperty(c) || "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + aa.__string_rec(a[c], b));
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
    aa.__interfLoop = function(a, b) { if (null == a) return !1; if (a == b) return !0; var c = a.__interfaces__; if (null != c)
            for (var d = 0, e = c.length; d < e;) { var f = d++,
                    f = c[f]; if (f == b || aa.__interfLoop(f, b)) return !0 }
        return aa.__interfLoop(a.__super__, b) };
    aa.__instanceof = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case ci:
                return (a | 0) === a;
            case $h:
                return "number" == typeof a;
            case ai:
                return "boolean" == typeof a;
            case String:
                return "string" ==
                    typeof a;
            case Array:
                return a instanceof Array && null == a.__enum__;
            case di:
                return !0;
            default:
                if (null != a)
                    if ("function" == typeof b) { if (a instanceof b || aa.__interfLoop(aa.getClass(a), b)) return !0 } else { if ("object" == typeof b && aa.__isNativeObj(b) && a instanceof b) return !0 }
                else return !1;
                return b == Yh && null != a.__name__ || b == Zh && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    aa.__nativeClassName = function(a) { a = aa.__toStr.call(a).slice(8, -1); return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a };
    aa.__isNativeObj = function(a) {
        return null !=
            aa.__nativeClassName(a)
    };
    aa.__resolveNativeClass = function(a) { return Wh[a] };
    var Be = function() {};
    h["js.Browser"] = Be;
    Be.__name__ = ["js", "Browser"];
    Be.getLocalStorage = function() { try { var a = window.localStorage;
            a.getItem(""); return a } catch (b) { return b instanceof s && (b = b.val), null } };
    Be.createXMLHttpRequest = function() {
        if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
        if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        throw new s("Unable to create XMLHttpRequest object.");
    };
    var Qh = function() {};
    h["js.html._CanvasElement.CanvasUtil"] = Qh;
    Qh.__name__ = ["js", "html", "_CanvasElement", "CanvasUtil"];
    Qh.getContextWebGL = function(a, b) { for (var c = 0, d = ["webgl", "experimental-webgl"]; c < d.length;) { var e = d[c];++c;
            e = a.getContext(e, b); if (null != e) return e } return null };
    var Nb = function(a) { if (a instanceof Array && null == a.__enum__) this.a = a, this.byteLength = a.length;
        else { this.a = []; for (var b = 0; b < a;) { var c = b++;
                this.a[c] = 0 } this.byteLength = a } };
    h["js.html.compat.ArrayBuffer"] = Nb;
    Nb.__name__ = ["js", "html",
        "compat", "ArrayBuffer"
    ];
    Nb.sliceImpl = function(a, b) { var c = new Oh(this, a, null == b ? null : b - a),
            d = new Ph(c.byteLength);
        (new Oh(d)).set(c); return d };
    Nb.prototype = { slice: function(a, b) { return new Nb(this.a.slice(a, b)) }, __class__: Nb };
    var Rh = function(a, b, c) { this.buf = a;
        this.offset = null == b ? 0 : b;
        this.length = null == c ? a.byteLength - this.offset : c; if (0 > this.offset || 0 > this.length || this.offset + this.length > a.byteLength) throw new s(Za.OutsideBounds); };
    h["js.html.compat.DataView"] = Rh;
    Rh.__name__ = ["js", "html", "compat", "DataView"];
    Rh.prototype = {
        getInt8: function(a) { a = this.buf.a[this.offset + a]; return 128 <= a ? a - 256 : a },
        getUint8: function(a) { return this.buf.a[this.offset + a] },
        getInt16: function(a, b) { var c = this.getUint16(a, b); return 32768 <= c ? c - 65536 : c },
        getUint16: function(a, b) { return b ? this.buf.a[this.offset + a] | this.buf.a[this.offset + a + 1] << 8 : this.buf.a[this.offset + a] << 8 | this.buf.a[this.offset + a + 1] },
        getInt32: function(a, b) {
            var c = this.offset + a,
                d = this.buf.a[c++],
                e = this.buf.a[c++],
                f = this.buf.a[c++],
                c = this.buf.a[c++];
            return b ? d | e << 8 | f << 16 |
                c << 24 : c | f << 8 | e << 16 | d << 24
        },
        getUint32: function(a, b) { var c = this.getInt32(a, b); return 0 > c ? c + 4294967296 : c },
        getFloat32: function(a, b) { return Mb.i32ToFloat(this.getInt32(a, b)) },
        getFloat64: function(a, b) { var c = this.getInt32(a, b),
                d = this.getInt32(a + 4, b); return Mb.i64ToDouble(b ? c : d, b ? d : c) },
        setInt8: function(a, b) { this.buf.a[a + this.offset] = 0 > b ? b + 128 & 255 : b & 255 },
        setUint8: function(a, b) { this.buf.a[a + this.offset] = b & 255 },
        setInt16: function(a, b, c) { this.setUint16(a, 0 > b ? b + 65536 : b, c) },
        setUint16: function(a, b, c) {
            a += this.offset;
            c ? (this.buf.a[a] = b & 255, this.buf.a[a++] = b >> 8 & 255) : (this.buf.a[a++] = b >> 8 & 255, this.buf.a[a] = b & 255)
        },
        setInt32: function(a, b, c) { this.setUint32(a, b, c) },
        setUint32: function(a, b, c) { a += this.offset;
            c ? (this.buf.a[a++] = b & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >>> 24) : (this.buf.a[a++] = b >>> 24, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b & 255) },
        setFloat32: function(a, b, c) { this.setUint32(a, Mb.floatToI32(b), c) },
        setFloat64: function(a, b, c) {
            b = Mb.doubleToI64(b);
            c ? (this.setUint32(a,
                b.low), this.setUint32(a, b.high)) : (this.setUint32(a, b.high), this.setUint32(a, b.low))
        },
        __class__: Rh
    };
    var jc = function() {};
    h["js.html.compat.Uint8Array"] = jc;
    jc.__name__ = ["js", "html", "compat", "Uint8Array"];
    jc._new = function(a, b, c) {
        if ("number" == typeof a) { c = []; for (b = 0; b < a;) { var d = b++;
                c[d] = 0 } c.byteLength = c.length;
            c.byteOffset = 0;
            c.buffer = new Nb(c) } else if (aa.__instanceof(a, Nb)) null == b && (b = 0), null == c && (c = a.byteLength - b), c = 0 == b ? a.a : a.a.slice(b, b + c), c.byteLength = c.length, c.byteOffset = b, c.buffer = a;
        else if (a instanceof Array && null == a.__enum__) c = a.slice(), c.byteLength = c.length, c.byteOffset = 0, c.buffer = new Nb(c);
        else throw new s("TODO " + p.string(a));
        c.subarray = jc._subarray;
        c.set = jc._set;
        return c
    };
    jc._set = function(a, b) {
        if (aa.__instanceof(a.buffer, Nb)) { if (a.byteLength + b > this.byteLength) throw new s("set() outside of range"); for (var c = 0, d = a.byteLength; c < d;) { var e = c++;
                this[e + b] = a[e] } } else if (a instanceof Array && null == a.__enum__) {
            if (a.length + b > this.byteLength) throw new s("set() outside of range");
            c = 0;
            for (d = a.length; c < d;) e =
                c++, this[e + b] = a[e]
        } else throw new s("TODO");
    };
    jc._subarray = function(a, b) { var c = jc._new(this.slice(a, b));
        c.byteOffset = a; return c };
    var qd = function() {};
    h["kit.asset.AssetPack"] = qd;
    qd.__name__ = ["kit", "asset", "AssetPack"];
    qd.__interfaces__ = [lb];
    qd.prototype = { __class__: qd, __properties__: { get_manifest: "get_manifest" } };
    var Hc = function() { this.$vG = new T;
        this.$uG = [];
        this.remoteBase = null;
        this.localBase = "assets";
        C.call(this) };
    h["kit.Assets"] = Hc;
    Hc.__name__ = ["kit", "Assets"];
    Hc.__interfaces__ = [qd];
    Hc.__super__ =
        C;
    Hc.prototype = m(C.prototype, {
        get_entitySlot: function() { return 2 },
        load: function(a) { var b = Ta.fromAssets(a);
            b.$ZI = this.localBase;
            b.$aI = this.remoteBase; return this.loadManifest(b, a) },
        loadManifest: function(a, b) { var c = this; if (null != b) { var d = this.$vG.get(b); if (null == d) { var e = d = new Tg;
                    this.$vG.set(b, e);
                    d.$AH = t.$EI.loadAssetPack(a).then(function(a) { c.$vG.get(b) == d && c.$uG.push(new Ee(a)); return d.$wG = a }) } return d.$AH } return t.$EI.loadAssetPack(a).then(function(a) { c.addPack(a); return a }) },
        addPack: function(a) {
            this.$uG.push(new Ee(a));
            return this
        },
        removePackByName: function(a) { var b = this.$vG.get(a); if (null != b && (this.$vG.remove(a), null != b.$wG)) { a = 0; for (var c = this.$uG.length; a < c;) { var d = a++; if (this.$uG[d].$wG == b.$wG) { this.$uG.splice(d, 1); break } } b.$wG.dispose() } },
        isLoaded: function(a) { a = this.$vG.get(a); return null != a && null != a.$wG },
        getTexture: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$uG; c < d.length;) { var e = d[c];++c;
                e = e.$wG.getTexture(a, !1); if (null != e) return e } c = this.$tG(); return null != c ? c.getTexture(a, b) : null },
        getSound: function(a,
            b) { null == b && (b = !0); for (var c = 0, d = this.$uG; c < d.length;) { var e = d[c];++c;
                e = e.$wG.getSound(a, !1); if (null != e) return e } c = this.$tG(); return null != c ? c.getSound(a, b) : null },
        getFile: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$uG; c < d.length;) { var e = d[c];++c;
                e = e.$wG.getFile(a, !1); if (null != e) return e } c = this.$tG(); return null != c ? c.getFile(a, b) : null },
        getVectorFont: function(a, b) {
            null == b && (b = !0);
            for (var c = 0, d = this.$uG; c < d.length;) { var e = d[c];++c;
                e = e.$wG.getVectorFont(a, !1); if (null != e) return e } c = this.$tG();
            return null !=
                c ? c.getVectorFont(a, b) : null
        },
        getFont: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$uG; c < d.length;) { var e = d[c];++c; var f = e.$xG.get(a); if (null != f) return f; if (null != e.$wG.getFile(a + ".fnt", !1)) return c = new uc(this, a), e.$xG.set(a, c), c.disposeFiles() } e = this.$tG(); return null != e ? e.getFont(a, b) : null },
        getLibrary: function(a, b) {
            null == b && (b = !0);
            for (var c = 0, d = this.$uG; c < d.length;) {
                var e = d[c];
                ++c;
                var f = e.$zG.get(a);
                if (null != f) return f;
                if (null != e.$wG.getFile(a + "/library.json", !1)) return c = new Oc(this, a), e.$zG.set(a,
                    c), c.disposeFiles()
            }
            e = this.$tG();
            return null != e ? e.getLibrary(a, b) : null
        },
        getScene: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$uG; c < d.length;) { var e = d[c];++c; var f = e.$$G.get(a); if (null != f) return f; if (null != e.$wG.getFile(a + ".scene", !1) || null != e.$wG.getFile(a + ".json", !1)) return c = new ta(this, a), e.$$G.set(a, c), c.disposeFiles() } e = this.$tG(); return null != e ? e.getScene(a, b) : null },
        getTexturePacker: function(a, b) {
            null == b && (b = !0);
            for (var c = 0, d = this.$uG; c < d.length;) {
                var e = d[c];
                ++c;
                var f = e.$_G.get(a);
                if (null !=
                    f) return f;
                if (null != e.$wG.getFile(a + ".json", !1)) return c = new Ug(this, a), e.$_G.set(a, c), c.disposeFiles()
            }
            e = this.$tG();
            return null != e ? e.getTexturePacker(a, b) : null
        },
        $tG: function() { return null == this.owner || null == this.owner.parent ? null : this.owner.parent._internal_getFromParents(2) },
        dispose: function() { C.prototype.dispose.call(this); var a = this.$uG;
            this.$uG = [];
            this.$vG = new T; for (var b = 0; b < a.length;) { var c = a[b];++b;
                c.$wG.dispose() } },
        get_manifest: function() { return null },
        __class__: Hc,
        __properties__: m(C.prototype.__properties__, { get_manifest: "get_manifest" })
    });
    var Ee = function(a) { this.$_G = new T;
        this.$$G = new T;
        this.$zG = new T;
        this.$xG = new T;
        this.$wG = a };
    h.$CL = Ee;
    Ee.__name__ = ["$CL"];
    Ee.prototype = { __class__: Ee };
    var Tg = function() {};
    h.$CM = Tg;
    Tg.__name__ = ["$CM"];
    Tg.prototype = { __class__: Tg };
    var rg = function() { this.$BH = this.$CH = null };
    h.$CO = rg;
    rg.__name__ = ["$CO"];
    rg.prototype = { $DH: function() { var a = this.$CH; if (null != a) { this.$CH = null; for (var b = 0; b < a.length;) { var c = a[b];++b;
                    c.dispose() } } this.$BH = null }, __class__: rg };
    var Vg = function() {};
    h["kit.MessageResult"] = Vg;
    Vg.__name__ = ["kit", "MessageResult"];
    Vg.prototype = { __class__: Vg };
    var R = function() { this.active = !0;
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this.$KH = {} };
    h["kit.Entity"] = R;
    R.__name__ = ["kit", "Entity"];
    R.__interfaces__ = [lb];
    R.$LH = function(a) { for (var b = null; null != a;) b = a, a = a.next; return b };
    R.prototype = {
        add: function(a) {
            null != a.owner && a.owner.remove(a);
            var b = a.get_entitySlot(),
                c = this.$KH[b];
            null != c && this.remove(c);
            this.$KH[b] = a;
            b = null;
            for (c = this.firstComponent; null !=
                c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded();
            return this
        },
        remove: function(a) { for (var b = null, c = this.firstComponent; null != c;) { var d = c.next; if (c == a) return null == b ? this.firstComponent = d : (b.owner = this, b.next = d), a = c.get_entitySlot(), delete this.$KH[a], 0 != (c.$B & 1) && (c.onStop(), c.$B &= -2), c.onRemoved(), c.owner = null, c.next = null, !0;
                b = c;
                c = d } return !1 },
        getComponentBySlot: function(a) { return this.$KH[a] },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            b ? this.$HH(R.$LH(this.firstChild), a) : this.$IH(a);
            return this
        },
        removeChild: function(a) { for (var b = null, c = this.firstChild; null != c;) { if (c == a) { this.$GH(b);
                    c.parent = null;
                    c.next = null; break } b = c;
                c = c.next } },
        emitMessage: function(a, b) { for (var c = !1, d = this.firstComponent; null != d;) { var e = d.next;
                d.onMessage(a, b) && (c = !0);
                d = e } R.$MH.handled = c; return R.$MH },
        emitMessageToParents: function(a, b) { var c = !1,
                d = this;
            do { var e = d.parent;
                d.emitMessage(a, b).handled && (c = !0);
                d = e } while (null != d);
            R.$MH.handled = c; return R.$MH },
        disposeChildren: function() { for (; null != this.firstChild;) this.firstChild.dispose() },
        dispose: function() { for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren() },
        yieldForStart: function() { for (var a = this.firstComponent; null != a;) { var b = a.next;
                0 == (a.$B & 1) && (a.$B |= 1, a.$A(), a.onStart());
                a = b } for (a = this.firstChild; null != a;) b = a.next, a.yieldForStart(), a = b },
        _internal_getFromParents: function(a, b) {
            var c = this;
            do {
                var d = c.$KH[a];
                null != b && (d =
                    d instanceof b ? d : null);
                if (null != d) return d;
                c = c.parent
            } while (null != c);
            return null
        },
        _internal_getFromChildren: function(a, b) { var c = this.$KH[a];
            null != b && (c = c instanceof b ? c : null); if (null != c) return c; for (c = this.firstChild; null != c;) { var d = c._internal_getFromChildren(a, b); if (null != d) return d;
                c = c.next } return null },
        getAssetsFromParents: function() { return this._internal_getFromParents(2) },
        $GH: function(a) { null != a ? a.next = a.next.next : this.$JH() },
        $HH: function(a, b) { null != a ? (b.next = a.next, a.next = b) : this.$IH(b) },
        $IH: function(a) {
            a.next =
                this.firstChild;
            this.firstChild = a
        },
        $JH: function() { this.firstChild = this.firstChild.next },
        __class__: R
    };
    var Wg = function() {};
    h.$CP = Wg;
    Wg.__name__ = ["$CP"];
    Wg.prototype = { __class__: Wg };
    var Ob = function() { this.$jH = !0 };
    h.$CQ = Ob;
    Ob.__name__ = ["$CQ"];
    Ob.__interfaces__ = [Wg];
    Ob.$mH = function(a) { var b = Be.getLocalStorage(); return null != b ? new Fe(b, a) : new Ge };
    Ob.prototype = {
        init: function() {
            var a = this;
            J.$bS();
            J.$cS();
            var b = null;
            try { b = window.flambe.canvas } catch (c) { c instanceof s && (c = c.val) } b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            J.$TS(b, "tap-highlight-color", "transparent");
            b.setAttribute("moz-opaque", "");
            this.$VH = new Pc(b);
            this.$TH = new Oa;
            this.$SH = new He(this.$TH, b);
            this.$UH = this.$RH(b);
            this.$NH = new vc;
            this.$fH = b;
            this.$gH = b.parentElement;
            this.$gH.style.overflow = "hidden";
            this.$gH.style.position = "relative";
            J.$TS(this.$gH, "touch-action", "none");
            var d = 0,
                e = function(c) {
                    if (!(1E3 > c.timeStamp - d)) {
                        var e = b.getBoundingClientRect(),
                            f = a.$PH(c, e),
                            e = a.$QH(c, e);
                        switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(),
                                    a.$SH.$GN(f, e, c.button), b.focus());
                                break;
                            case "mousemove":
                                a.$SH.$KN(f, e);
                                break;
                            case "mouseup":
                                a.$SH.$HN(f, e, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a.$SH.$LN(f, e, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", e, !1);
            window.addEventListener("mousemove", e, !1);
            window.addEventListener("mouseup", e, !1);
            b.addEventListener("mousewheel", e, !1);
            b.addEventListener("DOMMouseScroll", e, !1);
            b.addEventListener("contextmenu", function(a) { a.preventDefault() },
                !1);
            var f = "undefined" != typeof window.ontouchstart,
                e = p["int"](J.$QS("maxTouchPoints", window.navigator).value);
            if (f || 1 < e) {
                var k = new Ie(this.$TH, f ? 4 : e);
                this.$WH = k;
                e = function(b) {
                    var c;
                    c = f ? b.changedTouches : [b];
                    var e = b.target.getBoundingClientRect();
                    d = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            b.preventDefault();
                            for (b = 0; b < c.length;) { var g = c[b];++b; var n = a.$PH(g, e),
                                    h = a.$QH(g, e);
                                k.$GN((f ? g.identifier : g.pointerId) | 0, n, h) }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) g = c[b], ++b, n = a.$PH(g, e), h = a.$QH(g, e), k.$KN((f ? g.identifier : g.pointerId) | 0, n, h);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (b = 0; b < c.length;) g = c[b], ++b, n = a.$PH(g, e), h = a.$QH(g, e), k.$HN((f ? g.identifier : g.pointerId) | 0, n, h)
                    }
                };
                f ? (b.addEventListener("touchstart", e, !1), b.addEventListener("touchmove", e, !1), b.addEventListener("touchend", e, !1), b.addEventListener("touchcancel", e, !1)) : (b.addEventListener("MSPointerDown", e, !1), b.addEventListener("MSPointerMove",
                    e, !1), b.addEventListener("MSPointerUp", e, !1))
            } else this.$WH = new Je;
            var g = window.onerror;
            window.onerror = function(a, b, c) { t.uncaughtError.emit(a); return null != g ? g(a, b, c) : !1 };
            var h = J.$QS("hidden", window.document);
            null != h.value ? (e = function(a) { t.hidden.set__(P.field(window.document, h.field)) }, e(null), window.document.addEventListener(h.prefix + "visibilitychange", e, !1)) : (e = function(a) { t.hidden.set__("pagehide" == a.type) }, window.addEventListener("pageshow", e, !1), window.addEventListener("pagehide", e, !1));
            t.hidden.get_changed().connect(function(b,
                c) { b || (a.$iH = !0) });
            this.$iH = !1;
            this.$hH = Date.now();
            var l = J.$QS("requestAnimationFrame").value;
            if (null != l) { var m = window.performance,
                    r = null != m && J.$SS("now", m);
                r ? this.$hH = m.now() : null; var x = null,
                    x = function(c) { l(x, b);
                        a.$OH(r ? m.now() : c) };
                l(x, b) } else window.setInterval(function() { a.$OH(Date.now()) }, 16);
            oa.$aN("fullscreen") && this.$WH.get_supported() && this.$VH.get_fullscreenSupported() && this.$WH.down.connect(function(b) { a.$VH.fullscreen.$nH || a.$VH.requestFullscreen() });
            var u = oa.$bN();
            null != u && (this.$VH.fullscreen.get_changed().connect(function(b,
                c) { b && a.$VH.lockOrientation(u) }), this.$VH.lockOrientation(u));
            this.$NH.$EQ.add(new Ke);
            this.$NH.$iK();
            return (new fa).$uV(null)
        },
        loadAssetPack: function(a) { return (new ba(this, a)).$AH },
        getLocalStorage: function() { if (null == this.$cH) { var a = "2DKit.local." + p.string(oa.$aN("id"));
                this.$cH = Ob.$mH(a) } return this.$cH },
        $OH: function(a) { var b = (a - this.$hH) / 1E3;
            this.$hH = a;
            t.hidden.$nH || (this.$iH ? this.$iH = !1 : (this.$jH && (this.$jH = !1, this.$VH.$CS(null)), this.$NH.$OH(b), this.$NH.$LJ(this.$UH))) },
        getKeyboard: function() {
            var a =
                this;
            if (null == this.$bH) {
                this.$bH = new Eb;
                var b = function(b) { switch (b.type) {
                        case "keydown":
                            a.$bH.$GN(b.keyCode) && b.preventDefault(); break;
                        case "keyup":
                            a.$bH.$HN(b.keyCode) } };
                this.$fH.addEventListener("keydown", b, !1);
                this.$fH.addEventListener("keyup", b, !1);
                if (null != window.history && null != (Xh = window.history, Ra(Xh, Xh.pushState))) {
                    var c = !1,
                        d = function() { window.history.pushState("2DKitBack", null);
                            c = !0 };
                    window.addEventListener("popstate", function(b) {
                        c && (null != a.$bH.backButton.$$H ? (d(), a.$bH.backButton.emit()) :
                            window.history.back())
                    });
                    if (J.$LS) this.$TH.down.connect(function(a) { d() }).once();
                    else d()
                }
            }
            return this.$bH
        },
        getExternal: function() { null == this.$ZH && (this.$ZH = new Le); return this.$ZH },
        getRenderer: function() { return this.$UH },
        $PH: function(a, b) { return (a.clientX - b.left) * this.$VH.get_width() / b.width },
        $QH: function(a, b) { return (a.clientY - b.top) * this.$VH.get_height() / b.height },
        $RH: function(a) {
            if (0 <= window.navigator.userAgent.indexOf("Windows Phone")) return new rd(a);
            try {
                var b = Qh.getContextWebGL(a, {
                    alpha: !1,
                    depth: !1,
                    stencil: !0,
                    failIfMajorPerformanceCaveat: !0
                });
                if (null != b) { var c = new Me(this.$VH, b); if (c.$dU) return c }
            } catch (d) { d instanceof s && (d = d.val), null }
            return new rd(a)
        },
        __class__: Ob
    };
    var wa = function(a, b) { this.$nH = a;
        this.$oH = null != b ? new Zb(b) : null };
    h["kit.util.Value"] = wa;
    wa.__name__ = ["kit", "util", "Value"];
    wa.prototype = {
        watch: function(a) { a(this.$nH, this.$nH); return this.get_changed().connect(a) },
        get__: function() { return this.$nH },
        set__: function(a) {
            var b = this.$nH;
            a != b && (this.$nH = a, null != this.$oH && this.$oH.emit(a,
                b));
            return a
        },
        get_changed: function() { null == this.$oH && (this.$oH = new Zb); return this.$oH },
        __class__: wa,
        __properties__: { get_changed: "get_changed", set__: "set__", get__: "get__" }
    };
    var Qc = function(a, b) { this.$pH = null;
        this.$rH = a;
        this.$qH = b;
        this.stayInList = !0 };
    h["kit.util.SignalConnection"] = Qc;
    Qc.__name__ = ["kit", "util", "SignalConnection"];
    Qc.__interfaces__ = [lb];
    Qc.prototype = { once: function() { this.stayInList = !1; return this }, dispose: function() { null != this.$rH && (this.$rH.$tH(this), this.$rH = null) }, __class__: Qc };
    var Ga =
        function(a) { this.$$H = null != a ? new Qc(this, a) : null;
            this.$_H = null };
    h["kit.util.SignalBase"] = Ga;
    Ga.__name__ = ["kit", "util", "SignalBase"];
    Ga.prototype = {
        $sH: function(a, b) { var c = this,
                d = new Qc(this, a);
            this.$$H == Ga.$AI ? this.$uH(function() { c.$xH(d, b) }) : this.$xH(d, b); return d },
        $tH: function(a) { var b = this;
            this.$$H == Ga.$AI ? this.$uH(function() { b.$yH(a) }) : this.$yH(a) },
        $uH: function(a) { for (var b = null, c = this.$_H; null != c;) b = c, c = c.next;
            a = new Xg(a);
            null != b ? b.next = a : this.$_H = a },
        $vH: function() {
            var a = this.$$H;
            this.$$H = Ga.$AI;
            return a
        },
        $wH: function(a) { this.$$H = a;
            a = this.$_H; for (this.$_H = null; null != a;) a.$CW(), a = a.next },
        $xH: function(a, b) { if (b) a.$pH = this.$$H, this.$$H = a;
            else { for (var c = null, d = this.$$H; null != d;) c = d, d = d.$pH;
                null != c ? c.$pH = a : this.$$H = a } },
        $yH: function(a) { for (var b = null, c = this.$$H; null != c;) { if (c == a) { a = c.$pH;
                    null == b ? this.$$H = a : b.$pH = a; break } b = c;
                c = c.$pH } },
        __class__: Ga
    };
    var Zb = function(a) { Ga.call(this, a) };
    h["kit.util.Signal2"] = Zb;
    Zb.__name__ = ["kit", "util", "Signal2"];
    Zb.__super__ = Ga;
    Zb.prototype = m(Ga.prototype, {
        connect: function(a,
            b) { null == b && (b = !1); return this.$sH(a, b) },
        emit: function(a, b) { var c = this;
            this.$$H == Ga.$AI ? this.$uH(function() { c.$BI(a, b) }) : this.$BI(a, b) },
        $BI: function(a, b) { for (var c = this.$vH(), d = c; null != d;) d.$qH(a, b), d.stayInList || d.dispose(), d = d.$pH;
            this.$wH(c) },
        __class__: Zb
    });
    var mb = function(a) { Ga.call(this, a) };
    h["kit.util.Signal0"] = mb;
    mb.__name__ = ["kit", "util", "Signal0"];
    mb.__super__ = Ga;
    mb.prototype = m(Ga.prototype, {
        connect: function(a, b) { null == b && (b = !1); return this.$sH(a, b) },
        emit: function() {
            var a = this;
            this.$$H ==
                Ga.$AI ? this.$uH(function() { a.$BI() }) : this.$BI()
        },
        $BI: function() { for (var a = this.$vH(), b = a; null != b;) b.$qH(), b.stayInList || b.dispose(), b = b.$pH;
            this.$wH(a) },
        __class__: mb
    });
    var ka = function(a) { Ga.call(this, a) };
    h["kit.util.Signal1"] = ka;
    ka.__name__ = ["kit", "util", "Signal1"];
    ka.__super__ = Ga;
    ka.prototype = m(Ga.prototype, {
        connect: function(a, b) { null == b && (b = !1); return this.$sH(a, b) },
        emit: function(a) { var b = this;
            this.$$H == Ga.$AI ? this.$uH(function() { b.$BI(a) }) : this.$BI(a) },
        $BI: function(a) {
            for (var b = this.$vH(), c = b; null !=
                c;) c.$qH(a), c.stayInList || c.dispose(), c = c.$pH;
            this.$wH(b)
        },
        __class__: ka
    });
    var D = function(a, b) { this.$wF = null;
        wa.call(this, a, b) };
    h["kit.animation.AnimatedFloat"] = D;
    D.__name__ = ["kit", "animation", "AnimatedFloat"];
    D.__super__ = wa;
    D.prototype = m(wa.prototype, {
        set__: function(a) { this.$wF = null; return wa.prototype.set__.call(this, a) },
        update: function(a) { null != this.$wF && (wa.prototype.set__.call(this, this.$wF.update(a)), this.$wF.isComplete() && (this.$wF = null)) },
        animate: function(a, b, c, d) {
            this.set__(a);
            this.animateTo(b,
                c, d)
        },
        animateTo: function(a, b, c) { this.set_behavior(new sd(this.$nH, a, b, c)) },
        set_behavior: function(a) { this.$wF = a;
            this.update(0); return a },
        __class__: D,
        __properties__: m(wa.prototype.__properties__, { set_behavior: "set_behavior" })
    });
    var t = function() {};
    h["kit.System"] = t;
    t.__name__ = ["kit", "System"];
    t.$CI = function() { null == t.$FI && (t.$FI = t.$EI.init()); return t.$FI };
    t.loadAssetPack = function(a) { return t.$EI.loadAssetPack(a) };
    t.nextFrame = function(a) { t.$EI.$NH.$HQ(a) };
    var td = function(a) {
        null == a && (a = 1);
        this.$II = 0;
        C.call(this);
        this.scale = new D(a)
    };
    h["kit.SpeedAdjuster"] = td;
    td.__name__ = ["kit", "SpeedAdjuster"];
    td.__super__ = C;
    td.prototype = m(C.prototype, { get_entitySlot: function() { return 21 }, onUpdate: function(a) { 0 < this.$II && (a = this.$II, this.$II = 0);
            this.scale.update(a) }, __class__: td });
    var Yg = function() {};
    h["kit.animation.Behavior"] = Yg;
    Yg.__name__ = ["kit", "animation", "Behavior"];
    Yg.prototype = { __class__: Yg };
    var G = function() {};
    h["kit.animation.Ease"] = G;
    G.__name__ = ["kit", "animation", "Ease"];
    G.linear = function(a) { return a };
    G.quadIn = function(a) { return a * a };
    G.quadOut = function(a) { return a * (2 - a) };
    G.quadInOut = function(a) { return 0.5 >= a ? a * a * 2 : 1 - --a * a * 2 };
    G.cubeIn = function(a) { return a * a * a };
    G.cubeOut = function(a) { return 1 + --a * a * a };
    G.cubeInOut = function(a) { return 0.5 >= a ? a * a * a * 4 : 1 + --a * a * a * 4 };
    G.quartIn = function(a) { return a * a * a * a };
    G.quartOut = function(a) { return 1 - --a * a * a * a };
    G.quartInOut = function(a) { return 0.5 >= a ? a * a * a * a * 8 : (1 - (a = 2 * a - 2) * a * a * a) / 2 + 0.5 };
    G.quintIn = function(a) { return a * a * a * a * a };
    G.quintOut = function(a) {
        return (a -= 1) * a * a * a *
            a + 1
    };
    G.quintInOut = function(a) { return 1 > (a *= 2) ? a * a * a * a * a / 2 : ((a -= 2) * a * a * a * a + 2) / 2 };
    G.sineIn = function(a) { return 1 - Math.cos(1.5707963267948966 * a) };
    G.sineOut = function(a) { return Math.sin(1.5707963267948966 * a) };
    G.sineInOut = function(a) { return 0.5 - Math.cos(3.141592653589793 * a) / 2 };
    G.bounceIn = function(a) {
        a = 1 - a;
        return 0.36363636363636365 > a ? 1 - 7.5625 * a * a : 0.7272727272727273 > a ? 1 - (7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75) : 0.9090909090909091 > a ? 1 - (7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) +
            0.9375) : 1 - (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375)
    };
    G.bounceOut = function(a) { return 0.36363636363636365 > a ? 7.5625 * a * a : 0.7272727272727273 > a ? 7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75 : 0.9090909090909091 > a ? 7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375 : 7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375 };
    G.bounceInOut = function(a) {
        if (0.5 > a) return a = 1 - 2 * a, 0.36363636363636365 > a ? (1 - 7.5625 * a * a) / 2 : 0.7272727272727273 > a ? (1 - (7.5625 * (a - 0.5454545454545454) *
            (a - 0.5454545454545454) + 0.75)) / 2 : 0.9090909090909091 > a ? (1 - (7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375)) / 2 : (1 - (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375)) / 2;
        a = 2 * a - 1;
        return 0.36363636363636365 > a ? 7.5625 * a * a / 2 + 0.5 : 0.7272727272727273 > a ? (7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75) / 2 + 0.5 : 0.9090909090909091 > a ? (7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375) / 2 + 0.5 : (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375) / 2 + 0.5
    };
    G.circIn =
        function(a) { return 1 - Math.sqrt(1 - a * a) };
    G.circOut = function(a) {--a; return Math.sqrt(1 - a * a) };
    G.circInOut = function(a) { return 0.5 >= a ? (Math.sqrt(1 - a * a * 4) - 1) / -2 : (Math.sqrt(1 - (2 * a - 2) * (2 * a - 2)) + 1) / 2 };
    G.expoIn = function(a) { return Math.pow(2, 10 * (a - 1)) };
    G.expoOut = function(a) { return -Math.pow(2, -10 * a) + 1 };
    G.expoInOut = function(a) { return 0.5 > a ? Math.pow(2, 10 * (2 * a - 1)) / 2 : (-Math.pow(2, -10 * (2 * a - 1)) + 2) / 2 };
    G.backIn = function(a) { return a * a * (2.70158 * a - 1.70158) };
    G.backOut = function(a) { return 1 - --a * a * (-2.70158 * a - 1.70158) };
    G.backInOut =
        function(a) { a *= 2; if (1 > a) return a * a * (2.70158 * a - 1.70158) / 2;
            a -= 2; return (1 - a * a * (-2.70158 * a - 1.70158)) / 2 + 0.5 };
    G.elasticIn = function(a) { return -(Math.pow(2, 10 * (a -= 1)) * Math.sin(1.5707963267948966 * (a - 0.25464790894703254 * Math.asin(1)) / 0.4)) };
    G.elasticOut = function(a) { return Math.pow(2, -10 * a) * Math.sin(1.5707963267948966 * (a - 0.25464790894703254 * Math.asin(1)) / 0.4) + 1 };
    G.elasticInOut = function(a) {
        return 0.5 > a ? -0.5 * Math.pow(2, 10 * (a -= 0.5)) * Math.sin(1.5707963267948966 * (a - 0.1) / 0.4) : Math.pow(2, -10 * (a -= 0.5)) * Math.sin(1.5707963267948966 *
            (a - 0.1) / 0.4) * 0.5 + 1
    };
    var sd = function(a, b, c, d) { this.$VI = a;
        this.$WI = b;
        this.$XI = c;
        this.elapsed = 0;
        this.$YI = null != d ? d : G.linear };
    h["kit.animation.Tween"] = sd;
    sd.__name__ = ["kit", "animation", "Tween"];
    sd.__interfaces__ = [Yg];
    sd.prototype = { update: function(a) { this.elapsed += a; return this.elapsed >= this.$XI ? this.$WI : this.$VI + (this.$WI - this.$VI) * this.$YI(this.elapsed / this.$XI) }, isComplete: function() { return this.elapsed >= this.$XI }, __class__: sd };
    var kc = function() {};
    h["kit.asset.Asset"] = kc;
    kc.__name__ = ["kit", "asset",
        "Asset"
    ];
    kc.__interfaces__ = [lb];
    kc.prototype = { __class__: kc };
    var y = h["kit.asset.AssetFormat"] = { __ename__: ["kit", "asset", "AssetFormat"], __constructs__: "WEBP JXR PNG JPG GIF _2DKD _2DKP _2DKE MP3 M4A OPUS OGG WAV WOFF TTF SWF Data".split(" ") };
    y.WEBP = ["WEBP", 0];
    y.WEBP.toString = l;
    y.WEBP.__enum__ = y;
    y.JXR = ["JXR", 1];
    y.JXR.toString = l;
    y.JXR.__enum__ = y;
    y.PNG = ["PNG", 2];
    y.PNG.toString = l;
    y.PNG.__enum__ = y;
    y.JPG = ["JPG", 3];
    y.JPG.toString = l;
    y.JPG.__enum__ = y;
    y.GIF = ["GIF", 4];
    y.GIF.toString = l;
    y.GIF.__enum__ = y;
    y._2DKD = ["_2DKD", 5];
    y._2DKD.toString = l;
    y._2DKD.__enum__ = y;
    y._2DKP = ["_2DKP", 6];
    y._2DKP.toString = l;
    y._2DKP.__enum__ = y;
    y._2DKE = ["_2DKE", 7];
    y._2DKE.toString = l;
    y._2DKE.__enum__ = y;
    y.MP3 = ["MP3", 8];
    y.MP3.toString = l;
    y.MP3.__enum__ = y;
    y.M4A = ["M4A", 9];
    y.M4A.toString = l;
    y.M4A.__enum__ = y;
    y.OPUS = ["OPUS", 10];
    y.OPUS.toString = l;
    y.OPUS.__enum__ = y;
    y.OGG = ["OGG", 11];
    y.OGG.toString = l;
    y.OGG.__enum__ = y;
    y.WAV = ["WAV", 12];
    y.WAV.toString = l;
    y.WAV.__enum__ = y;
    y.WOFF = ["WOFF", 13];
    y.WOFF.toString = l;
    y.WOFF.__enum__ = y;
    y.TTF = ["TTF", 14];
    y.TTF.toString =
        l;
    y.TTF.__enum__ = y;
    y.SWF = ["SWF", 15];
    y.SWF.toString = l;
    y.SWF.__enum__ = y;
    y.Data = ["Data", 16];
    y.Data.toString = l;
    y.Data.__enum__ = y;
    var Zg = function(a, b, c, d) { this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = d };
    h["kit.asset.AssetEntry"] = Zg;
    Zg.__name__ = ["kit", "asset", "AssetEntry"];
    Zg.prototype = { __class__: Zg };
    var Ne = function() {};
    h["kit.asset.File"] = Ne;
    Ne.__name__ = ["kit", "asset", "File"];
    Ne.__interfaces__ = [kc];
    Ne.prototype = { __class__: Ne };
    var Ta = function() { this.$ZI = this.$aI = null;
        this.$uG = [] };
    h["kit.asset.Manifest"] =
        Ta;
    Ta.__name__ = ["kit", "asset", "Manifest"];
    Ta.fromAssets = function(a, b) { var c = P.field(oa.$aN("assets"), a); if (null == c) return null; var d = new Ta;
        d.$ZI = "assets"; for (var e = 0; e < c.length;) { var f = c[e];++e; for (var k = f.name, g = encodeURIComponent(a), h = 0, l = k.split("/"); h < l.length;) { var m = l[h];++h;
                g += "/" + encodeURIComponent(m) } g += "?v=" + p.string(f.md5);
            h = Ta.$bI(k);
            h != y.Data && (k = Ha.removeFileExtension(k));
            d.add(k, g, f.bytes, h) } return d };
    Ta.$bI = function(a) {
        a = Ha.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "gif":
                return y.GIF;
            case "jpg":
            case "jpeg":
                return y.JPG;
            case "jxr":
            case "wdp":
                return y.JXR;
            case "png":
                return y.PNG;
            case "webp":
                return y.WEBP;
            case "2dkd":
                return y._2DKD;
            case "2dkp":
                return y._2DKP;
            case "2dke":
                return y._2DKE;
            case "m4a":
                return y.M4A;
            case "mp3":
                return y.MP3;
            case "ogg":
                return y.OGG;
            case "opus":
                return y.OPUS;
            case "wav":
                return y.WAV;
            case "woff":
                return y.WOFF;
            case "ttf":
                return y.TTF;
            case "swf":
                return y.SWF
        } else null;
        return y.Data
    };
    Ta.prototype = {
        add: function(a, b, c, d) {
            null == c && (c = 0);
            null == d && (d = Ta.$bI(b));
            a = new Zg(a,
                b, d, c);
            this.$uG.push(a);
            return a
        },
        iterator: function() { return E.iter(this.$uG) },
        getFullURL: function(a) { var b;
            b = null != this.$aI && Ta.$cI ? this.$aI : this.$ZI; return null != b ? Ha.joinPath(b, a.url) : a.url },
        __class__: Ta
    };
    var Oe = function() { this.offsetX = this.offsetY = 0;
        this.active = !0;
        this.following = null };
    h["kit.creator.Camera"] = Oe;
    Oe.__name__ = ["kit", "creator", "Camera"];
    Oe.__super__ = M;
    Oe.prototype = m(M.prototype, {
        onStart: function() {
            M.prototype.onStart.call(this);
            var a = this.owner.$KH[3];
            null == a && (this.owner.add(a = new B),
                this.info.transformSprite(a), a.set_visible(!1));
            null != this.following && (a = this.following.$KH[3], null != a && a.set_pixelSnapping(!1));
            this.active && (this.owner._internal_getFromParents(3, ja).camera = this)
        },
        onUpdate: function(a) { M.prototype.onUpdate.call(this, a);
            this.zoom.update(a) },
        $dI: function(a) {
            var b = this.owner.$KH[3];
            if (null != this.following) { var c = this.following.$KH[3];
                null != c && b.setXY(c.x.$nH + this.offsetX, c.y.$nH + this.offsetY) }
            for (var c = this.zoom.$nH, d = b.y.$nH - 0.5 * a.cameraHeight.$nH / c, b = -xa.clamp(b.x.$nH -
                    0.5 * a.cameraWidth.$nH / c, 0, a.info.width * a.info.tileWidth - a.cameraWidth.$nH / c), d = -xa.clamp(d, 0, a.info.height * a.info.tileHeight - a.cameraHeight.$nH / c), e = 0, f = a.info.layers; e < f.length;) { var k = f[e];++e; var g = a.layers.get(k.name).$KH[3],
                    h = xa.max(k.parallaxX, k.parallaxY) * (c - 1) + 1;
                g.setScale(h);
                g.x.set__(k.parallaxX * b * h);
                g.y.set__(k.parallaxY * d * h) }
        },
        __class__: Oe
    });
    var Pe = function(a) { this.$jI = null;
        this.$iI = new T;
        C.call(this);
        this.scene = a;
        this.$eI() };
    h["kit.creator.CreatorScript"] = Pe;
    Pe.__name__ = ["kit", "creator",
        "CreatorScript"
    ];
    Pe.__super__ = C;
    Pe.prototype = m(C.prototype, {
        get_entitySlot: function() { return 4 },
        run: function(a, b, c) { a = this.$iI.get(a); return null != a ? F.runSequence(a.actions, b) : null },
        onMessage: function(a, b) { var c = !1,
                d = this.$iI.get(a); if (null != d) { var e = p.instance(b, R); if (null != e)
                    for (var f = this.owner; null != f;) f == t.root && (F.runSequence(d.actions, e), c = !0), f = f.parent } return C.prototype.onMessage.call(this, a, b) || c },
        $eI: function() {
            this.groups = [];
            for (var a = 0, b = this.scene.script.groups; a < b.length;) {
                var c = b[a];
                ++a;
                var d = c.actions.map(Ra(this, this.$fI)).filter(function(a) { return null != a }),
                    d = new $g(c, d);
                this.groups.push(d);
                this.$iI.set(c.name, d)
            }
            this.$jI = null
        },
        $fI: function(a) {
            var b = ca.resolveClass(a.type);
            if (null == b || null == b.__rtti) return null;
            var c = ca.createInstance(b, []);
            c.script = this;
            null == this.$jI && (this.$jI = new T);
            var d = this.$jI.get(a.type);
            null == d && (b = d = wc.$$N(b, new T), this.$jI.set(a.type, b));
            for (b = a.properties.keys(); b.hasNext();) {
                var e = b.next(),
                    f;
                f = null != Ca[e] ? d.getReserved(e) : d.h[e];
                if (null != f) {
                    var k =
                        a.properties.get(e);
                    f = this.$gI(f.type, k, a.type + "." + e);
                    null != f && P.setProperty(c, e, f)
                } else null
            }
            d = c instanceof ua ? c : null;
            null != d && (d.subActions = a.subActions.map(Ra(this, this.$fI)).filter(function(a) { return null != a }));
            return c
        },
        $gI: function(a, b, c) {
            var d = wc.$gI(a, b);
            if (null != d) return d;
            switch (a[1]) {
                case 3:
                    switch (a[2]) {
                        case "Null":
                            return this.$gI(a[3].first(), b, c);
                        default:
                            return null }
                case 2:
                    switch (a[2]) {
                        case "Array":
                            a = a[3].first();
                            var d = [],
                                e = 0;
                            for (b = b.split(","); e < b.length;) {
                                var f = b[e];
                                ++e;
                                d.push(this.$gI(a,
                                    K.trim(f), c))
                            }
                            return d;
                        case "kit.creator.ObjectInfo":
                            return this.scene.getObject(b, !1);
                        default:
                            return null
                    }
                default:
                    return null
            }
        },
        __class__: Pe
    });
    var $g = function(a, b) { this.info = a;
        this.actions = b };
    h["kit.creator.Group"] = $g;
    $g.__name__ = ["kit", "creator", "Group"];
    $g.prototype = { __class__: $g };
    var S = function(a) { this.$nI = new R;
        this.state = new wa(null);
        B.call(this);
        this.$mI = a };
    h["kit.creator.ObjectSprite"] = S;
    S.__name__ = ["kit", "creator", "ObjectSprite"];
    S.__super__ = B;
    S.prototype = m(B.prototype, {
        play: function(a, b) {
            null ==
                b && (b = !0);
            var c = this;
            if (!b && this.state.$nH == a) return this;
            var d = this.$nI.$KH[3],
                e = this.state.$nH,
                f = this.$kI(a),
                f = f instanceof Fb ? f : null;
            null != f && f.get_looped().connect(function() { c.$lI(d, e) });
            return this
        },
        loop: function(a, b) { null == b && (b = !0); if (!b && this.state.$nH == a) return this;
            this.$kI(a); return this },
        $kI: function(a) {
            if (null == this.owner) return null;
            var b = this.$mI.states.get(a);
            if (null == b) return null;
            var c;
            c = this.owner._internal_getFromParents(2);
            if (null == c) return null;
            var d = b.lastIndexOf("/");
            if (0 >
                d) return null;
            var e = E.substr(b, 0, d),
                d = E.substr(b, d + 1, null),
                f = c.getLibrary(e, !1);
            if (null != f) return b = f.createSprite(d), this.$lI(b, a), b;
            e = c.getTexturePacker(e, !1);
            if (null != e) return b = e.createSprite(d, !1), null == b && (b = e.toLibrary().createSprite(d)), this.$lI(b, a), b;
            b = c.getTexture(b, !1);
            return null != b ? (b = new za(b), this.$lI(b, a), b) : null
        },
        $lI: function(a, b) {
            var c = this.$mI.tile;
            null == c.texture && (a.x.set__(-p.parseFloat(c.properties.get("boundsX"))), a.y.set__(-p.parseFloat(c.properties.get("boundsY"))));
            this.$nI.add(a);
            this.state.set__(b)
        },
        onStart: function() {
            B.prototype.onStart.call(this);
            if (null != this.owner && (this.owner.addChild(this.$nI), null == this.state.$nH)) {
                var a;
                a = this.$mI.tile;
                if (null != a.texture) a = new za(a.texture);
                else {
                    var b;
                    b = this.owner._internal_getFromParents(2);
                    var c = a.tileset.properties.get("library"),
                        d = a.properties.get("symbol");
                    null != c ? a = b.getLibrary(c).createSprite(d) : (c = a.tileset.properties.get("texturepacker"), b = b.getTexturePacker(c), a = null != a.properties.get("animated") ? b.toLibrary().createSprite(d) :
                        b.createSprite(d))
                }
                this.$lI(a, null)
            }
        },
        __class__: S
    });
    var Ub = function() { this.$pI = new T;
        this.changed = new Zb;
        C.call(this) };
    h["kit.creator.PropertyBag"] = Ub;
    Ub.__name__ = ["kit", "creator", "PropertyBag"];
    Ub.__super__ = C;
    Ub.prototype = m(C.prototype, {
        get_entitySlot: function() { return 10 },
        get: function(a) { var b = this.$oI(a); if (null != b) return b.$nH;
            a = this.$pI.get(a); return null != a ? a : null },
        set: function(a, b) {
            var c = this.$oI(a);
            null != c ? c.$nH != b && (c.set__(b), this.changed.emit(a, b)) : this.$pI.get(a) != b && (this.$pI.set(a, b),
                this.changed.emit(a, b));
            return this
        },
        $oI: function(a) { switch (a) {
                case "x":
                case "y":
                case "rotation":
                case "scaleX":
                case "scaleY":
                case "anchorX":
                case "anchorY":
                case "alpha":
                    var b = this.owner.$KH[3]; if (null != b) return p.instance(P.field(b, a), D) } return null },
        __class__: Ub
    });
    var ta = function(a, b) { this.$sI = a;
        this.$hI = a.getFile(b + ".json", !1);
        null != this.$hI ? null : this.$hI = a.getFile(b + ".scene"); var c = b.lastIndexOf("/");
        this.$tI = 0 <= c ? E.substr(b, 0, c + 1) : "";
        this.$eI();
        this.reloadCount = new wa(0) };
    h["kit.creator.SceneInfo"] =
        ta;
    ta.__name__ = ["kit", "creator", "SceneInfo"];
    ta.getRequiredAssetPacks = function(a) { var b = oa.$aN("scenes");
        a = P.field(b, a); return null != a ? a : [] };
    ta.$wI = function(a) { var b = new T; if (null != a)
            for (var c = 0, d = P.fields(a); c < d.length;) { var e = d[c];++c; if (!K.startsWith(e, "//")) { var f = ta.$xI(P.field(a, e));
                    null != f && (null != Ca[e] ? b.setReserved(e, f) : b.h[e] = f) } }
        return b };
    ta.$xI = function(a) { null != a && (a = K.trim(a), 0 == a.length && (a = null)); return a };
    ta.$yI = function(a, b) { return null != a ? a : b };
    ta.prototype = {
        disposeFiles: function() {
            this.$hI.dispose();
            for (var a = 0, b = this.$uI; a < b.length;) { var c = b[a];++a;
                c.dispose() }
            return this
        },
        createSprite: function() { return new ja(this) },
        createScript: function() { return new Pe(this) },
        getObject: function(a, b) { return this.$vI.get(a) },
        $qI: function(a) { return this.$sI.getTexture(this.$tI + Ha.removeFileExtension(a), !1) },
        $rI: function(a) { return this.$sI.getTexture(a) },
        $eI: function() {
            var a = this,
                b = this.$hI.toJson();
            this.width = b.width;
            this.height = b.height;
            this.tileWidth = b.tilewidth;
            this.tileHeight = b.tileheight;
            this.tilesets = b.tilesets.map(function(b) {
                return new ah(a,
                    b)
            });
            this.backgroundColor = null != b.backgroundcolor ? p.parseInt(K.replace(b.backgroundcolor, "#", "0x")) : 8421504;
            this.tiles = new eb;
            for (var c = 0, d = this.tilesets; c < d.length;) { var e = d[c];++c; for (var f = 0, e = e.tiles; f < e.length;) { var k = e[f];++f;
                    this.tiles.h[k.id] = k } } this.layers = b.layers.map(function(b) { return new Qe(a, b) });
            this.properties = ta.$wI(b.properties);
            this.script = new bh(b.script);
            this.$uI = [];
            c = this.properties.get("resources");
            if (null != c)
                for (b = 0, c = c.split(","); b < c.length;)
                    if (d = c[b], ++b, d = K.trim(d), "" !=
                        d)
                        for (f = this.$sI.getFile(this.$tI + Ha.removeFileExtension(d) + ".json"), this.$uI.push(f), d = 0, f = f.toJson().layers; d < f.length;) e = f[d], ++d, "objectgroup" == e.type && this.layers.push(new Qe(this, e, !0));
            this.$vI = new T;
            b = 0;
            for (c = this.layers; b < c.length;)
                if (f = c[b], ++b, null != f.objects)
                    for (d = 0, f = f.objects; d < f.length;) e = f[d], ++d, null != e.name && this.$vI.set(e.name, e)
        },
        __class__: ta
    };
    var lc = h["kit.creator.LayerType"] = { __ename__: ["kit", "creator", "LayerType"], __constructs__: ["Tile", "Object"] };
    lc.Tile = ["Tile", 0];
    lc.Tile.toString =
        l;
    lc.Tile.__enum__ = lc;
    lc.Object = ["Object", 1];
    lc.Object.toString = l;
    lc.Object.__enum__ = lc;
    var Qe = function(a, b, c) {
        null == c && (c = !1);
        this.parallaxX = this.parallaxY = 1;
        this.tiles = this.objects = null;
        var d = this;
        this.scene = a;
        this.name = ta.$xI(b.name);
        switch (b.type) {
            case "tilelayer":
                this.type = lc.Tile; break;
            case "objectgroup":
                this.type = lc.Object; break;
            default:
                this.type = null } this.width = b.width;
        this.height = b.height;
        this.opacity = b.opacity;
        this.visible = b.visible && !c;
        null != b.data && (this.tiles = b.data.map(function(b) {
            return 0 !=
                b ? a.tiles.h[b] : null
        }));
        null != b.objects && (this.objects = b.objects.map(function(a) { return new Re(d, a, c) }), "index" != b.draworder && this.objects.sort(function(a, b) { return P.compare(a.y + a.height, b.y + b.height) }));
        null != b.parallaxX && (this.parallaxX = b.parallaxX, this.parallaxY = b.parallaxY);
        this.tileCollisions = b.collisions;
        this.properties = ta.$wI(b.properties)
    };
    h["kit.creator.LayerInfo"] = Qe;
    Qe.__name__ = ["kit", "creator", "LayerInfo"];
    Qe.prototype = { __class__: Qe };
    var pa = h["kit.creator.ObjectShape"] = {
        __ename__: ["kit",
            "creator", "ObjectShape"
        ],
        __constructs__: ["Rectangle", "Ellipse", "Polygon", "Polyline", "Tile"]
    };
    pa.Rectangle = ["Rectangle", 0];
    pa.Rectangle.toString = l;
    pa.Rectangle.__enum__ = pa;
    pa.Ellipse = ["Ellipse", 1];
    pa.Ellipse.toString = l;
    pa.Ellipse.__enum__ = pa;
    pa.Polygon = ["Polygon", 2];
    pa.Polygon.toString = l;
    pa.Polygon.__enum__ = pa;
    pa.Polyline = ["Polyline", 3];
    pa.Polyline.toString = l;
    pa.Polyline.__enum__ = pa;
    pa.Tile = ["Tile", 4];
    pa.Tile.toString = l;
    pa.Tile.__enum__ = pa;
    var Re = function(a, b, c) {
        this.states = new T;
        this.properties = new T;
        this.tile = this.points = null;
        this.layer = a;
        this.name = ta.$xI(b.name);
        this.type = ta.$xI(b.type);
        this.x = b.x;
        this.y = b.y;
        this.anchorX = ta.$yI(b.anchorX, 0);
        this.anchorY = ta.$yI(b.anchorY, 0);
        this.rotation = b.rotation;
        this.width = b.width;
        this.height = b.height;
        this.visible = b.visible;
        this.tint = null != b.tintcolor ? p.parseInt(K.replace(b.tintcolor, "#", "0x")) : 16777215;
        b.ellipse ? this.shape = pa.Ellipse : null != b.polygon ? (this.shape = pa.Polygon, this.points = b.polygon.map(function(a) { return new nb(a.x, a.y) })) : null != b.polyline ? (this.shape =
            pa.Polyline, this.points = b.polyline.map(function(a) { return new nb(a.x, a.y) })) : null == b.gid || c ? this.shape = pa.Rectangle : (this.shape = pa.Tile, this.tile = a.scene.tiles.h[b.gid]);
        a = null != this.tile ? -this.height : 0;
        0 == this.rotation ? (this.x += this.anchorX, this.y += this.anchorY + a) : (c = new Ab, c.compose(this.x, this.y, 1, 1, 3.141592653589793 * this.rotation / 180), c.translate(this.anchorX, this.anchorY + a), this.x = c.m02, this.y = c.m12);
        null != this.tile && (this.anchorX *= this.tile.get_width() / this.width, this.anchorY *= this.tile.get_height() /
            this.height);
        b = ta.$wI(b.properties);
        for (a = b.keys(); a.hasNext();) { var d = a.next();
            c = null != Ca[d] ? b.getReserved(d) : b.h[d];
            K.startsWith(d, "@State:") ? (d = E.substr(d, 7, null), this.states.set(d, c)) : this.properties.set(d, c) }
    };
    h["kit.creator.ObjectInfo"] = Re;
    Re.__name__ = ["kit", "creator", "ObjectInfo"];
    Re.prototype = {
        createSprite: function() { var a;
            null != this.tile ? (a = this.tile.texture, a = null != a && 2 > Tb.count(this.states) ? new za(a) : new S(this)) : a = new B;
            this.transformSprite(a); return a },
        transformSprite: function(a) {
            null !=
                this.tile ? (a.setXY(this.x + this.tile.tileset.offsetX, this.y + this.tile.tileset.offsetY), a.setScaleXY(this.width / this.tile.get_width(), this.height / this.tile.get_height())) : a.setXY(this.x, this.y);
            a.setAnchor(this.anchorX, this.anchorY);
            a.rotation.set__(this.rotation);
            a.set_visible(this.visible);
            a.setTint(this.tint)
        },
        __class__: Re
    };
    var ah = function(a, b, c) {
        this.offsetX = this.offsetY = 0;
        this.atlas = null;
        this.scene = a;
        this.name = ta.$xI(b.name);
        this.spacing = b.spacing;
        this.margin = b.margin;
        c = b.tileoffset;
        null != c && (this.offsetX =
            c.x, this.offsetY = c.y);
        this.tileWidth = b.tilewidth;
        this.tileHeight = b.tileheight;
        if (null != b.image) {
            this.atlas = a.$qI(b.image);
            null == this.atlas && (this.atlas = a.$rI(this.name));
            c = this.atlas.get_width() - 2 * this.margin;
            var d = this.atlas.get_height() - 2 * this.margin;
            c = (c + this.spacing) / (this.tileWidth + this.spacing) | 0;
            d = (d + this.spacing) / (this.tileHeight + this.spacing) | 0;
            this.tiles = Array(c * d);
            for (var e = 0, f = 0; f < d;)
                for (var k = f++, g = 0; g < c;) {
                    var h = g++,
                        l = new Se(this, b, e);
                    l.texture = this.atlas.subTexture(h * (this.tileWidth +
                        this.spacing) + this.margin, k * (this.tileHeight + this.spacing) + this.margin, this.tileWidth, this.tileHeight);
                    this.tiles[e] = l;
                    ++e
                }
        } else this.tiles = [];
        if (null != b.tiles)
            for (c = 0, d = P.fields(b.tiles); c < d.length;)
                if (e = d[c], ++c, f = P.field(b.tiles, e), k = p.parseInt(e), e = this.tiles[k], null == e && (e = this.tiles[k] = new Se(this, b, k)), null != f.image && "true" != e.properties.get("previewImage") && (e.texture = a.$qI(f.image), null == e.texture && (e.texture = a.$rI(this.name))), null != f.objectgroup)
                    for (k = 0, f = f.objectgroup.objects; k < f.length;) g =
                        f[k], ++k, e.collision.push(new Re(null, g, !0));
        this.properties = ta.$wI(b.properties)
    };
    h["kit.creator.TilesetInfo"] = ah;
    ah.__name__ = ["kit", "creator", "TilesetInfo"];
    ah.prototype = { __class__: ah };
    var Se = function(a, b, c) { this.collision = [];
        this.texture = null;
        this.id = b.firstgid + c;
        this.tileset = a;
        this.properties = ta.$wI(null != b.tileproperties ? P.field(b.tileproperties, "" + c) : null) };
    h["kit.creator.TileInfo"] = Se;
    Se.__name__ = ["kit", "creator", "TileInfo"];
    Se.prototype = {
        get_width: function() {
            return null != this.texture ? this.texture.get_width() :
                p.parseInt(this.properties.get("boundsWidth"))
        },
        get_height: function() { return null != this.texture ? this.texture.get_height() : p.parseInt(this.properties.get("boundsHeight")) },
        __class__: Se,
        __properties__: { get_height: "get_height", get_width: "get_width" }
    };
    var bh = function(a) { this.groups = null != a ? a.groups.map(function(a) { return new ch(a) }) : [] };
    h["kit.creator.ScriptInfo"] = bh;
    bh.__name__ = ["kit", "creator", "ScriptInfo"];
    bh.prototype = { __class__: bh };
    var ch = function(a) {
        this.actions = [];
        this.name = a.name;
        this.actions =
            a.actions.map(function(a) { return new Te(a) })
    };
    h["kit.creator.GroupInfo"] = ch;
    ch.__name__ = ["kit", "creator", "GroupInfo"];
    ch.prototype = { __class__: ch };
    var Te = function(a) { this.type = a.type;
        this.subActions = null != a.subActions ? a.subActions.map(function(a) { return new Te(a) }) : [];
        this.properties = ta.$wI(a.properties) };
    h["kit.creator.ActionInfo"] = Te;
    Te.__name__ = ["kit", "creator", "ActionInfo"];
    Te.prototype = { __class__: Te };
    var Ua = function(a, b, c, d) {
        null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a,
            b, c, d)
    };
    h["kit.math.Rectangle"] = Ua;
    Ua.__name__ = ["kit", "math", "Rectangle"];
    Ua.prototype = {
        set: function(a, b, c, d) { this.x = a;
            this.y = b;
            this.width = c;
            this.height = d },
        contains: function(a, b) { a -= this.x; if (0 <= this.width) { if (0 > a || a > this.width) return !1 } else if (0 < a || a < this.width) return !1;
            b -= this.y; if (0 <= this.height) { if (0 > b || b > this.height) return !1 } else if (0 < b || b < this.height) return !1; return !0 },
        clone: function(a) { null == a && (a = new Ua);
            a.set(this.x, this.y, this.width, this.height); return a },
        equals: function(a) {
            return this.x ==
                a.x && this.y == a.y && this.width == a.width && this.height == a.height
        },
        __class__: Ua
    };
    var ja = function(a) { this.$jI = null;
        this.drawBackgroundColor = !1;
        this.objects = new Lb;
        this.layers = new T;
        this.camera = null;
        B.call(this);
        this.info = a; var b = new B;
        this.cameraX = new D(0, function(a, d) { b.x.set__(-a) });
        this.cameraY = new D(0, function(a, d) { b.y.set__(-a) });
        this.cameraWidth = new D(a.tileWidth * a.width);
        this.cameraHeight = new D(a.tileHeight * a.height);
        this.content = (new R).add(b) };
    h["kit.creator.SceneSprite"] = ja;
    ja.__name__ = ["kit",
        "creator", "SceneSprite"
    ];
    ja.$BJ = function(a) { null == a && (a = new Ua); var b = oa.$aN("width"),
            c = oa.$aN("height"),
            d = Math.min(t.$EI.$VH.get_width() / b, t.$EI.$VH.get_height() / c); if (1 == oa.$aN("scaleMode")) { var e = Math.max(b, p["int"](oa.$aN("maxWidth"))),
                f = Math.max(c, p["int"](oa.$aN("maxHeight")));
            a.width = Math.min(t.$EI.$VH.get_width() / d, e);
            a.height = Math.min(t.$EI.$VH.get_height() / d, f) } else a.width = t.$EI.$VH.get_width() / d, a.height = t.$EI.$VH.get_height() / d;
        a.x = -(a.width / 2 - b / 2);
        a.y = -(a.height / 2 - c / 2); return a };
    ja.__super__ =
        B;
    ja.prototype = m(B.prototype, {
        onStart: function() { B.prototype.onStart.call(this); for (var a = 0, b = this.info.layers; a < b.length;) { var c = b[a];++a; var d = new R;
                this.$$I(c, d);
                this.content.addChild(d) } this.$jI = null },
        setCamera: function(a, b, c, d) { this.cameraX.set__(a);
            this.cameraY.set__(b);
            this.cameraWidth.set__(c);
            this.cameraHeight.set__(d); return this },
        onAdded: function() { B.prototype.onAdded.call(this);
            this.owner.addChild(this.content) },
        draw: function(a) {
            null != this.camera && this.camera.$dI(this);
            if (this.drawBackgroundColor) {
                var b =
                    ja.$BJ(ja.$CJ);
                a.fillRect(this.info.backgroundColor, b.x, b.y, b.width, b.height)
            }
        },
        onUpdate: function(a) { B.prototype.onUpdate.call(this, a);
            this.cameraX.update(a);
            this.cameraY.update(a);
            this.cameraWidth.update(a);
            this.cameraHeight.update(a) },
        $$I: function(a, b) {
            var c;
            switch (a.type[1]) {
                case 0:
                    c = new Ue(this, this.info, a); break;
                case 1:
                    c = new B } c.alpha.set__(a.opacity);
            c.set_visible(a.visible);
            b.add(c);
            switch (a.type[1]) {
                case 1:
                    c = 0;
                    for (var d = a.objects; c < d.length;) {
                        var e = d[c];
                        ++c;
                        var f = this.$_I(e, !0);
                        if (null == f ||
                            f.spawned) { var k = this.objects.h[e.__id__]; if (e.shape == pa.Tile) { if (null == k) { var g = k = new R;
                                    this.objects.set(e, g) } k.add(e.createSprite());
                                null != f && k.add(f) } null != k && b.addChild(k) }
                    }
                    break;
                case 0:
                    a.tileCollisions && (c = b.$KH[6], null != c && c.dispose(), c = this.owner._internal_getFromParents(7).$PM(a), b.add(c))
            }
            this.layers.set(a.name, b)
        },
        createObject: function(a) { var b = new R,
                c = this.$_I(a, !1);
            a.shape == pa.Tile && b.add(a.createSprite());
            null != c && b.add(c); return b },
        getNaturalWidth: function() { return this.cameraWidth.$nH },
        getNaturalHeight: function() { return this.cameraHeight.$nH },
        getLayer: function(a, b) { return this.layers.get(a) },
        $_I: function(a, b) { if (null == a.type) return null; if (b) { var c = this.objects.h[a.__id__]; if (null != c && (c = c.$KH[1], null != c)) return c } c = ca.resolveClass(a.type); if (null == c || null == c.__rtti) return null; var d = ca.createInstance(c, []); if (b) { var e = (new R).add(d);
                this.objects.set(a, e) } this.$AJ(a, d, c); return d },
        $AJ: function(a, b, c) {
            null == this.$jI && (this.$jI = new T);
            var d = this.$jI.get(a.type);
            null == d && (c = d = wc.$$N(c,
                new T), this.$jI.set(a.type, c));
            for (c = a.properties.keys(); c.hasNext();) { var e = c.next(),
                    f = a.properties.get(e),
                    k;
                k = null != Ca[e] ? d.getReserved(e) : d.h[e];
                null != k ? (f = this.$gI(k.type, f, a.type + "." + e), null != f && P.setProperty(b, e, f)) : null } b.info = a
        },
        $gI: function(a, b, c) {
            var d = wc.$gI(a, b);
            if (null != d) return d;
            switch (a[1]) {
                case 3:
                    switch (a[2]) {
                        case "Null":
                            return this.$gI(a[3].first(), b, c);
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
                            for (b = b.split(","); e < b.length;) {
                                var f = b[e];
                                ++e;
                                d.push(this.$gI(a, K.trim(f), c))
                            }
                            return d;
                        case "kit.creator.ObjectInfo":
                            return this.info.getObject(b, !1);
                        case "kit.Entity":
                            c = this.info.getObject(b, !1);
                            if (null == c) return null;
                            c = this.$_I(c, !0);
                            return null != c ? c.owner : null;
                        default:
                            c = ca.resolveClass(d);
                            b = this.info.getObject(b, !1);
                            if (null == b) return null;
                            b = this.$_I(b, !0);
                            if (null != b) { if (aa.__instanceof(b, c)) return b;
                                null }
                    }
                    break;
                default:
                    null
            }
            return null
        },
        __class__: ja
    });
    var Ue = function(a, b, c) { B.call(this);
        this.$DJ = a;
        this.$EJ = b;
        this.$FJ = c };
    h.$CR = Ue;
    Ue.__name__ = ["$CR"];
    Ue.__super__ = B;
    Ue.prototype = m(B.prototype, {
        getNaturalWidth: function() { return this.$EJ.tileWidth * this.$FJ.width },
        getNaturalHeight: function() { return this.$EJ.tileHeight * this.$FJ.height },
        containsLocal: function(a, b) { var c = a / this.$EJ.tileWidth | 0; if (0 > c || c >= this.$FJ.width) return !1; var d = b / this.$EJ.tileHeight | 0; return 0 > d || d >= this.$FJ.height ? !1 : null != this.$FJ.tiles[d * this.$FJ.width + c] },
        draw: function(a) {
            var b = this.$EJ.tileWidth,
                c = this.$EJ.tileHeight,
                d = this.$FJ.width,
                e = this.$FJ.height,
                f = ja.$BJ(ja.$CJ);
            f.x = (f.x - this.x.$nH) / this.scaleX.$nH;
            f.y = (f.y - this.y.$nH) / this.scaleY.$nH;
            f.width /= this.scaleX.$nH;
            f.height /= this.scaleY.$nH;
            for (var k = xa.clamp(f.x / b | 0, 0, d), g = xa.clamp(f.y / c | 0, 0, e), h = xa.clamp(k + Math.ceil(f.width / b) + 1, 0, d), e = xa.clamp(g + Math.ceil(f.height / c) + 1, 0, e); g < e;)
                for (var f = g++, l = k; l < h;) { var m = l++,
                        p = this.$FJ.tiles[f * d + m]; if (null != p) { var x = p.tileset;
                        a.drawTexture(p.texture, m * b + x.offsetX, f * c + x.offsetY - x.tileHeight + c) } }
        },
        __class__: Ue
    });
    var ga = function() {
        this.cameraEnabled = fb.Yes;
        this.dockY = rb.None;
        this.dockX = sb.None;
        this.onPointerDown = this.onPointerIn = this.onPointerOut = this.onPointerUp = this.onClick = null;
        this.pointerEnabled = !0;
        M.call(this)
    };
    h["kit.creator.ui.Widget"] = ga;
    ga.__name__ = ["kit", "creator", "ui", "Widget"];
    ga.__super__ = M;
    ga.prototype = m(M.prototype, {
        onStart: function() {
            var a = this;
            M.prototype.onStart.call(this);
            var b = this.owner.$KH[3];
            if (null != b) {
                b.set_pointerEnabled(this.pointerEnabled);
                null != this.onPointerDown && this.$GJ(b.get_pointerDown(), this.onPointerDown);
                null != this.onPointerIn && this.$GJ(b.get_pointerIn(),
                    this.onPointerIn);
                null != this.onPointerOut && this.$GJ(b.get_pointerOut(), this.onPointerOut);
                null != this.onPointerUp && this.$GJ(b.get_pointerUp(), this.onPointerUp);
                null != this.onClick && b.get_pointerDown().connect(function(b) { t.$EI.$TH.up.connect(function(b) { a.owner.emitMessageToParents(a.onClick, a.owner) }).once() });
                var c = this.owner._internal_getFromParents(3, ja),
                    d = function() {
                        var c = oa.$aN("width"),
                            d = oa.$aN("height"),
                            k = ja.$BJ(ga.$CJ);
                        switch (a.dockX[1]) {
                            case 1:
                                b.x.set__(a.info.x + k.x);
                                break;
                            case 2:
                                b.x.set__(a.info.x +
                                    k.width - c + k.x)
                        }
                        switch (a.dockY[1]) {
                            case 1:
                                b.y.set__(a.info.y + k.y); break;
                            case 2:
                                b.y.set__(a.info.y + k.height - d + k.y) }
                    };
                if (this.dockX != sb.None || this.dockY != rb.None) d(), this.connect0(t.$EI.$VH.resize, d);
                this.cameraEnabled != fb.Yes && c.owner.addChild(this.owner, this.cameraEnabled == fb.Foreground)
            }
        },
        $GJ: function(a, b) { var c = this;
            a.connect(function(a) { null != c.owner && c.owner.emitMessageToParents(b, c.owner) }) },
        __class__: ga
    });
    var mc = function() {
        this.textScale = 1;
        this.text = "Your text";
        this.letterSpacing = this.lineSpacing =
            0;
        this.textAlign = Ia.Left;
        ga.call(this)
    };
    h["kit.creator.ui.BitmapText"] = mc;
    mc.__name__ = ["kit", "creator", "ui", "BitmapText"];
    mc.__super__ = ga;
    mc.prototype = m(ga.prototype, {
        onStart: function() {
            var a = this.owner._internal_getFromParents(2),
                a = new Gb(a.getFont(this.font));
            a.set_align(this.textAlign);
            a.letterSpacing.set__(this.letterSpacing);
            a.lineSpacing.set__(this.lineSpacing);
            a.wrapWidth.set__(this.info.width / this.textScale);
            this.owner.add(a);
            this.info.transformSprite(a);
            var b = a.scaleX;
            b.set__(b.$nH * this.textScale);
            a = a.scaleY;
            a.set__(a.$nH * this.textScale);
            this.$IJ(!0);
            ga.prototype.onStart.call(this)
        },
        $HJ: function() { return p.instance(this.owner.$KH[3], Gb) },
        $IJ: function(a) {
            var b = this,
                c = p.instance(this.owner.$KH[3], Gb);
            if (null != this.owner._internal_getFromParents(4)) {
                var d = K.replace(this.text, "\\n", "\n"),
                    e = null;
                c.set_text((new Ja("{(.+?)}", "g")).map(d, function(c) {
                    var d = c.matched(1);
                    if (null == e)
                        for (e = [], c = b.owner; null != c;) { var g = c.$KH[10];
                            null != g && e.push(g);
                            c = c.parent }
                    if (a)
                        for (c = 0; c < e.length;) g = e[c], ++c, b.connect2(g.changed,
                            function(a, c) { a == d && b.$IJ(!1) });
                    for (c = 0; c < e.length;)
                        if (g = e[c], ++c, g = g.get(d), null != g) return "" + g;
                    return "0"
                }))
            }
        },
        __class__: mc
    });
    var Pb = function() { this.pressDistance = 10;
        ga.call(this) };
    h["kit.creator.ui.Button"] = Pb;
    Pb.__name__ = ["kit", "creator", "ui", "Button"];
    Pb.__super__ = ga;
    Pb.prototype = m(ga.prototype, {
        onStart: function() {
            var a = this,
                b = this.owner.$KH[3],
                c;
            c = b instanceof S ? b : null;
            var d = !1,
                e = !1;
            b.get_pointerIn().connect(function(a) { e = !0;
                null != c && c.loop(d ? "down" : "hover", !1) });
            b.get_pointerOut().connect(function(a) {
                e = !1;
                null != c && c.loop("up")
            });
            b.get_pointerDown().connect(function(f) { d = !0;
                f = b.y;
                f.set__(f.$nH + a.pressDistance);
                null != c && c.loop("down");
                t.$EI.$TH.up.connect(function(f) { d = !1;
                    f = b.y;
                    f.set__(f.$nH - a.pressDistance);
                    null != c && c.loop(e ? "hover" : "up") }).once() });
            ga.prototype.onStart.call(this)
        },
        __class__: Pb
    });
    var $b = function() { ga.call(this) };
    h["kit.creator.ui.Image"] = $b;
    $b.__name__ = ["kit", "creator", "ui", "Image"];
    $b.__super__ = ga;
    $b.prototype = m(ga.prototype, { __class__: $b });
    var ud = function() {
        this.fillColor = 0;
        this.progressDirection =
            Va.Right;
        this.progressMax = 100;
        this.progressProperty = "progress";
        ga.call(this)
    };
    h["kit.creator.ui.ProgressBar"] = ud;
    ud.__name__ = ["kit", "creator", "ui", "ProgressBar"];
    ud.__super__ = ga;
    ud.prototype = m(ga.prototype, {
        onStart: function() {
            var a = this;
            if (null == this.info.tile) { var b = new vd(this.fillColor, this.info.width, this.info.height);
                this.info.transformSprite(b);
                this.owner.add(b) } ga.prototype.onStart.call(this);
            b = this.owner._internal_getFromParents(10);
            if (null != b) {
                var c = b.get(this.progressProperty);
                this.connect2(b.changed,
                    function(b, c) { b == a.progressProperty && a.$OH(c) });
                this.$OH(c)
            }
        },
        $OH: function(a) { var b = this.owner.$KH[3]; if (null != b) { var c = b.get_scissor();
                null == c && (c = b.set_scissor(new Ua(0, 0, this.info.width, this.info.height)));
                a /= this.progressMax; switch (this.progressDirection[1]) {
                    case 0:
                        c.width = a * this.info.width;
                        c.x = this.info.width - c.width; break;
                    case 1:
                        c.width = a * this.info.width; break;
                    case 2:
                        c.height = a * this.info.height;
                        c.y = this.info.height - c.height; break;
                    case 3:
                        c.height = a * this.info.height } } },
        __class__: ud
    });
    var Va = h["kit.creator.ui.ProgressDirection"] = { __ename__: ["kit", "creator", "ui", "ProgressDirection"], __constructs__: ["Left", "Right", "Up", "Down"] };
    Va.Left = ["Left", 0];
    Va.Left.toString = l;
    Va.Left.__enum__ = Va;
    Va.Right = ["Right", 1];
    Va.Right.toString = l;
    Va.Right.__enum__ = Va;
    Va.Up = ["Up", 2];
    Va.Up.toString = l;
    Va.Up.__enum__ = Va;
    Va.Down = ["Down", 3];
    Va.Down.toString = l;
    Va.Down.__enum__ = Va;
    var wd = function() { this.scaleX = this.scaleY = 1;
        ga.call(this) };
    h["kit.creator.ui.RepeatingImage"] = wd;
    wd.__name__ = ["kit", "creator", "ui", "RepeatingImage"];
    wd.__super__ = ga;
    wd.prototype =
        m(ga.prototype, { onStart: function() { if (null != this.info.tile && null != this.info.tile.texture) { var a = new Ve(this.info.tile.texture, this.info.width / this.scaleX, this.info.height / this.scaleY);
                    this.info.transformSprite(a);
                    a.setAnchor(a.scaleX.$nH * this.info.anchorX / this.scaleX, a.scaleY.$nH * this.info.anchorY / this.scaleY);
                    a.setScaleXY(this.scaleX, this.scaleY);
                    this.owner.add(a) } ga.prototype.onStart.call(this) }, __class__: wd });
    var Rc = function() {
        this.textAlign = Ia.Left;
        this.strokeWidth = this.lineSpacing = 0;
        this.strokeColor =
            16777215;
        this.color = 0;
        this.bold = this.italic = !1;
        this.fontSize = 24;
        this.text = "Your text";
        this.font = this.systemFont = null;
        ga.call(this)
    };
    h["kit.creator.ui.Text"] = Rc;
    Rc.__name__ = ["kit", "creator", "ui", "Text"];
    Rc.__super__ = ga;
    Rc.prototype = m(ga.prototype, {
        onStart: function() {
            var a;
            a = null != this.font ? this.owner._internal_getFromParents(2).getVectorFont(this.font) : t.$EI.$UH.createSystemFont(null != this.systemFont ? this.systemFont : "sans");
            a = new Sc(a, K.replace(this.text, "\\n", "\n"));
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
            this.$IJ(!0);
            ga.prototype.onStart.call(this)
        },
        $IJ: function(a) {
            var b = this,
                c = p.instance(this.owner.$KH[3], Sc);
            if (null != this.owner._internal_getFromParents(4)) {
                var d = K.replace(this.text, "\\n", "\n"),
                    e = null;
                c.set_text((new Ja("{(.+?)}",
                    "g")).map(d, function(c) { var d = c.matched(1); if (null == e)
                        for (e = [], c = b.owner; null != c;) { var g = c.$KH[10];
                            null != g && e.push(g);
                            c = c.parent }
                    if (a)
                        for (c = 0; c < e.length;) g = e[c], ++c, b.connect2(g.changed, function(a, c) { a == d && b.$IJ(!1) }); for (c = 0; c < e.length;)
                        if (g = e[c], ++c, g = g.get(d), null != g) return "" + g; return "0" }))
            }
        },
        __class__: Rc
    });
    var fb = h["kit.creator.ui.CameraSetting"] = { __ename__: ["kit", "creator", "ui", "CameraSetting"], __constructs__: ["Yes", "Background", "Foreground"] };
    fb.Yes = ["Yes", 0];
    fb.Yes.toString = l;
    fb.Yes.__enum__ =
        fb;
    fb.Background = ["Background", 1];
    fb.Background.toString = l;
    fb.Background.__enum__ = fb;
    fb.Foreground = ["Foreground", 2];
    fb.Foreground.toString = l;
    fb.Foreground.__enum__ = fb;
    var sb = h["kit.creator.ui.DockX"] = { __ename__: ["kit", "creator", "ui", "DockX"], __constructs__: ["None", "Left", "Right"] };
    sb.None = ["None", 0];
    sb.None.toString = l;
    sb.None.__enum__ = sb;
    sb.Left = ["Left", 1];
    sb.Left.toString = l;
    sb.Left.__enum__ = sb;
    sb.Right = ["Right", 2];
    sb.Right.toString = l;
    sb.Right.__enum__ = sb;
    var rb = h["kit.creator.ui.DockY"] = {
        __ename__: ["kit",
            "creator", "ui", "DockY"
        ],
        __constructs__: ["None", "Top", "Bottom"]
    };
    rb.None = ["None", 0];
    rb.None.toString = l;
    rb.None.__enum__ = rb;
    rb.Top = ["Top", 1];
    rb.Top.toString = l;
    rb.Top.__enum__ = rb;
    rb.Bottom = ["Bottom", 2];
    rb.Bottom.toString = l;
    rb.Bottom.__enum__ = rb;
    var da = h["kit.display.BlendMode"] = { __ename__: ["kit", "display", "BlendMode"], __constructs__: "Normal Add Multiply Screen Mask Copy".split(" ") };
    da.Normal = ["Normal", 0];
    da.Normal.toString = l;
    da.Normal.__enum__ = da;
    da.Add = ["Add", 1];
    da.Add.toString = l;
    da.Add.__enum__ = da;
    da.Multiply = ["Multiply", 2];
    da.Multiply.toString = l;
    da.Multiply.__enum__ = da;
    da.Screen = ["Screen", 3];
    da.Screen.toString = l;
    da.Screen.__enum__ = da;
    da.Mask = ["Mask", 4];
    da.Mask.toString = l;
    da.Mask.__enum__ = da;
    da.Copy = ["Copy", 5];
    da.Copy.toString = l;
    da.Copy.__enum__ = da;
    var We = function() {};
    h["kit.display.Graphics"] = We;
    We.__name__ = ["kit", "display", "Graphics"];
    We.prototype = { __class__: We };
    var pe = function() { this.$KJ = [] };
    h["kit.display.BufferedGraphics"] = pe;
    pe.__name__ = ["kit", "display", "BufferedGraphics"];
    pe.__interfaces__ = [We];
    pe.prototype = {
        save: function() { this.$JJ(new Xe) },
        translate: function(a, b) { this.$JJ(new Ye(a, b)) },
        scale: function(a, b) { this.$JJ(new Ze(a, b)) },
        rotate: function(a) { this.$JJ(new $e(a)) },
        transform: function(a, b, c, d, e, f) { this.$JJ(new af(a, b, c, d, e, f)) },
        multiplyAlpha: function(a) { this.$JJ(new bf(a)) },
        setAlpha: function(a) { this.$JJ(new cf(a)) },
        tint: function(a, b, c) { this.$JJ(new df(a, b, c)) },
        setBlendMode: function(a) { this.$JJ(new ef(a)) },
        beginMask: function() { this.$JJ(new ff) },
        endMask: function() { this.$JJ(new gf) },
        applyScissor: function(a, b, c, d) { this.$JJ(new hf(a, b, c, d)) },
        restore: function() { this.$JJ(new jf) },
        drawTexture: function(a, b, c) { this.$JJ(new kf(a, b, c)) },
        drawSubTexture: function(a, b, c, d, e, f, k) { this.$JJ(new lf(a, b, c, d, e, f, k)) },
        drawPattern: function(a, b, c, d, e) { this.$JJ(new mf(a, b, c, d, e)) },
        fillRect: function(a, b, c, d, e) { this.$JJ(new nf(a, b, c, d, e)) },
        fillTriangles: function(a, b, c) { this.$JJ(new of (a, b.slice(), c.slice())) },
        drawTriangles: function(a, b, c) { this.$JJ(new pf(a, b.slice(), c.slice())) },
        fillPolygon: function(a,
            b) { this.$JJ(new qf(a, b.slice())) },
        drawPolygon: function(a, b) { this.$JJ(new rf(a, b.slice())) },
        drawCircle: function(a, b, c, d, e) { null == e && (e = 50);
            this.$JJ(new sf(a, b, c, d, e)) },
        fillCircle: function(a, b, c, d, e) { null == e && (e = 50);
            this.$JJ(new tf(a, b, c, d, e)) },
        strokeCircle: function(a, b, c, d, e, f) { null == f && (f = 50);
            this.$JJ(new uf(a, b, c, d, e, f)) },
        drawEllipse: function(a, b, c, d, e, f) { null == f && (f = 50);
            this.$JJ(new vf(a, b, c, d, e, f)) },
        fillEllipse: function(a, b, c, d, e, f) { null == f && (f = 50);
            this.$JJ(new wf(a, b, c, d, e, f)) },
        strokeEllipse: function(a,
            b, c, d, e, f, k) { null == k && (k = 50);
            this.$JJ(new xf(a, b, c, d, e, f, k)) },
        fillArc: function(a, b, c, d, e, f, k) { null == k && (k = 50);
            this.$JJ(new yf(a, b, c, d, e, f, k)) },
        strokeArc: function(a, b, c, d, e, f, k, g) { null == g && (g = 50);
            this.$JJ(new zf(a, b, c, d, e, f, k, g)) },
        strokeLines: function(a, b, c) { this.$JJ(new Af(a, b.slice(), c)) },
        drawLines: function(a, b, c) { this.$JJ(new Bf(a, b.slice(), c)) },
        render: function(a) { for (var b = this.$KJ.length, c = 0; c < b;) { var d = c++;
                this.$KJ[d].$LJ(a) } },
        $JJ: function(a) { this.$KJ.push(a) },
        __class__: pe
    };
    var H = function() {};
    h.$CS = H;
    H.__name__ = ["$CS"];
    H.prototype = { $LJ: function(a) {}, __class__: H };
    var Xe = function() {};
    h.$CT = Xe;
    Xe.__name__ = ["$CT"];
    Xe.__super__ = H;
    Xe.prototype = m(H.prototype, { $LJ: function(a) { a.save() }, __class__: Xe });
    var Ye = function(a, b) { this.$MJ = a;
        this.$NJ = b };
    h.$CU = Ye;
    Ye.__name__ = ["$CU"];
    Ye.__super__ = H;
    Ye.prototype = m(H.prototype, { $LJ: function(a) { a.translate(this.$MJ, this.$NJ) }, __class__: Ye });
    var Ze = function(a, b) { this.$MJ = a;
        this.$NJ = b };
    h.$CV = Ze;
    Ze.__name__ = ["$CV"];
    Ze.__super__ = H;
    Ze.prototype = m(H.prototype, {
        $LJ: function(a) {
            a.scale(this.$MJ,
                this.$NJ)
        },
        __class__: Ze
    });
    var $e = function(a) { this.$OJ = a };
    h.$CW = $e;
    $e.__name__ = ["$CW"];
    $e.__super__ = H;
    $e.prototype = m(H.prototype, { $LJ: function(a) { a.rotate(this.$OJ) }, __class__: $e });
    var af = function(a, b, c, d, e, f) { this.$PJ = a;
        this.$QJ = b;
        this.$RJ = c;
        this.$SJ = d;
        this.$TJ = e;
        this.$UJ = f };
    h.$CX = af;
    af.__name__ = ["$CX"];
    af.__super__ = H;
    af.prototype = m(H.prototype, { $LJ: function(a) { a.transform(this.$PJ, this.$QJ, this.$RJ, this.$SJ, this.$TJ, this.$UJ) }, __class__: af });
    var bf = function(a) { this.$VJ = a };
    h.$CY = bf;
    bf.__name__ = ["$CY"];
    bf.__super__ = H;
    bf.prototype = m(H.prototype, { $LJ: function(a) { a.multiplyAlpha(this.$VJ) }, __class__: bf });
    var cf = function(a) { this.$WJ = a };
    h.$CZ = cf;
    cf.__name__ = ["$CZ"];
    cf.__super__ = H;
    cf.prototype = m(H.prototype, { $LJ: function(a) { a.setAlpha(this.$WJ) }, __class__: cf });
    var df = function(a, b, c) { this.$XJ = a;
        this.$YJ = b;
        this.$ZJ = c };
    h.$Ca = df;
    df.__name__ = ["$Ca"];
    df.__super__ = H;
    df.prototype = m(H.prototype, { $LJ: function(a) { a.tint(this.$XJ, this.$YJ, this.$ZJ) }, __class__: df });
    var ef = function(a) { this.$aJ = a };
    h.$Cb = ef;
    ef.__name__ = ["$Cb"];
    ef.__super__ = H;
    ef.prototype = m(H.prototype, { $LJ: function(a) { a.setBlendMode(this.$aJ) }, __class__: ef });
    var hf = function(a, b, c, d) { this.$MJ = a;
        this.$NJ = b;
        this.$bJ = c;
        this.$cJ = d };
    h.$Cc = hf;
    hf.__name__ = ["$Cc"];
    hf.__super__ = H;
    hf.prototype = m(H.prototype, { $LJ: function(a) { a.applyScissor(this.$MJ, this.$NJ, this.$bJ, this.$cJ) }, __class__: hf });
    var ff = function() {};
    h.$Cd = ff;
    ff.__name__ = ["$Cd"];
    ff.__super__ = H;
    ff.prototype = m(H.prototype, { $LJ: function(a) { a.beginMask() }, __class__: ff });
    var gf = function() {};
    h.$Ce = gf;
    gf.__name__ = ["$Ce"];
    gf.__super__ = H;
    gf.prototype = m(H.prototype, { $LJ: function(a) { a.endMask() }, __class__: gf });
    var jf = function() {};
    h.$Cf = jf;
    jf.__name__ = ["$Cf"];
    jf.__super__ = H;
    jf.prototype = m(H.prototype, { $LJ: function(a) { a.restore() }, __class__: jf });
    var kf = function(a, b, c) { this.$dJ = a;
        this.$eJ = b;
        this.$fJ = c };
    h.$Cg = kf;
    kf.__name__ = ["$Cg"];
    kf.__super__ = H;
    kf.prototype = m(H.prototype, { $LJ: function(a) { a.drawTexture(this.$dJ, this.$eJ, this.$fJ) }, __class__: kf });
    var lf = function(a, b, c, d, e, f, k) {
        this.$dJ = a;
        this.$eJ = b;
        this.$fJ =
            c;
        this.$gJ = d;
        this.$hJ = e;
        this.$iJ = f;
        this.$jJ = k
    };
    h.$Ch = lf;
    lf.__name__ = ["$Ch"];
    lf.__super__ = H;
    lf.prototype = m(H.prototype, { $LJ: function(a) { a.drawSubTexture(this.$dJ, this.$eJ, this.$fJ, this.$gJ, this.$hJ, this.$iJ, this.$jJ) }, __class__: lf });
    var mf = function(a, b, c, d, e) { this.$dJ = a;
        this.$eJ = b;
        this.$fJ = c;
        this.$bJ = d;
        this.$cJ = e };
    h.$Ci = mf;
    mf.__name__ = ["$Ci"];
    mf.__super__ = H;
    mf.prototype = m(H.prototype, { $LJ: function(a) { a.drawPattern(this.$dJ, this.$eJ, this.$fJ, this.$bJ, this.$cJ) }, __class__: mf });
    var of = function(a, b, c) {
        this.$kJ =
            a;
        this.$lJ = b;
        this.$mJ = c
    };
    h.$Cj = of ; of .__name__ = ["$Cj"]; of .__super__ = H; of .prototype = m(H.prototype, { $LJ: function(a) { a.fillTriangles(this.$kJ, this.$lJ, this.$mJ) }, __class__: of });
    var pf = function(a, b, c) { this.$dJ = a;
        this.$lJ = b;
        this.$mJ = c };
    h.$Ck = pf;
    pf.__name__ = ["$Ck"];
    pf.__super__ = H;
    pf.prototype = m(H.prototype, { $LJ: function(a) { a.drawTriangles(this.$dJ, this.$lJ, this.$mJ) }, __class__: pf });
    var qf = function(a, b) { this.$kJ = a;
        this.$lJ = b };
    h.$Cl = qf;
    qf.__name__ = ["$Cl"];
    qf.__super__ = H;
    qf.prototype = m(H.prototype, {
        $LJ: function(a) {
            a.fillPolygon(this.$kJ,
                this.$lJ)
        },
        __class__: qf
    });
    var rf = function(a, b) { this.$dJ = a;
        this.$lJ = b };
    h.$Cm = rf;
    rf.__name__ = ["$Cm"];
    rf.__super__ = H;
    rf.prototype = m(H.prototype, { $LJ: function(a) { a.drawPolygon(this.$dJ, this.$lJ) }, __class__: rf });
    var sf = function(a, b, c, d, e) { this.$dJ = a;
        this.$nJ = b;
        this.$oJ = c;
        this.$pJ = d;
        this.$qJ = e };
    h.$Cn = sf;
    sf.__name__ = ["$Cn"];
    sf.__super__ = H;
    sf.prototype = m(H.prototype, { $LJ: function(a) { a.drawCircle(this.$dJ, this.$nJ, this.$oJ, this.$pJ, this.$qJ) }, __class__: sf });
    var tf = function(a, b, c, d, e) {
        this.$kJ = a;
        this.$nJ = b;
        this.$oJ = c;
        this.$pJ = d;
        this.$qJ = e
    };
    h.$Co = tf;
    tf.__name__ = ["$Co"];
    tf.__super__ = H;
    tf.prototype = m(H.prototype, { $LJ: function(a) { a.fillCircle(this.$kJ, this.$nJ, this.$oJ, this.$pJ, this.$qJ) }, __class__: tf });
    var uf = function(a, b, c, d, e, f) { this.$kJ = a;
        this.$nJ = b;
        this.$oJ = c;
        this.$pJ = d;
        this.$rJ = e;
        this.$qJ = f };
    h.$Cp = uf;
    uf.__name__ = ["$Cp"];
    uf.__super__ = H;
    uf.prototype = m(H.prototype, { $LJ: function(a) { a.strokeCircle(this.$kJ, this.$nJ, this.$oJ, this.$pJ, this.$rJ, this.$qJ) }, __class__: uf });
    var wf = function(a, b, c, d, e, f) {
        this.$kJ =
            a;
        this.$nJ = b;
        this.$oJ = c;
        this.$sJ = d;
        this.$tJ = e;
        this.$qJ = f
    };
    h.$Cq = wf;
    wf.__name__ = ["$Cq"];
    wf.__super__ = H;
    wf.prototype = m(H.prototype, { $LJ: function(a) { a.fillEllipse(this.$kJ, this.$nJ, this.$oJ, this.$sJ, this.$tJ, this.$qJ) }, __class__: wf });
    var vf = function(a, b, c, d, e, f) { this.$dJ = a;
        this.$nJ = b;
        this.$oJ = c;
        this.$sJ = d;
        this.$tJ = e;
        this.$qJ = f };
    h.$Cr = vf;
    vf.__name__ = ["$Cr"];
    vf.__super__ = H;
    vf.prototype = m(H.prototype, { $LJ: function(a) { a.drawEllipse(this.$dJ, this.$nJ, this.$oJ, this.$sJ, this.$tJ, this.$qJ) }, __class__: vf });
    var xf =
        function(a, b, c, d, e, f, k) { this.$kJ = a;
            this.$nJ = b;
            this.$oJ = c;
            this.$sJ = d;
            this.$tJ = e;
            this.$rJ = f;
            this.$qJ = k };
    h.$Cs = xf;
    xf.__name__ = ["$Cs"];
    xf.__super__ = H;
    xf.prototype = m(H.prototype, { $LJ: function(a) { a.strokeEllipse(this.$kJ, this.$nJ, this.$oJ, this.$sJ, this.$tJ, this.$rJ, this.$qJ) }, __class__: xf });
    var yf = function(a, b, c, d, e, f, k) { this.$kJ = a;
        this.$nJ = b;
        this.$oJ = c;
        this.$pJ = d;
        this.$uJ = e;
        this.$vJ = f;
        this.$qJ = k };
    h.$Ct = yf;
    yf.__name__ = ["$Ct"];
    yf.__super__ = H;
    yf.prototype = m(H.prototype, {
        $LJ: function(a) {
            a.fillArc(this.$kJ,
                this.$nJ, this.$oJ, this.$pJ, this.$uJ, this.$vJ, this.$qJ)
        },
        __class__: yf
    });
    var zf = function(a, b, c, d, e, f, k, g) { this.$kJ = a;
        this.$nJ = b;
        this.$oJ = c;
        this.$pJ = d;
        this.$uJ = e;
        this.$vJ = f;
        this.$rJ = k;
        this.$qJ = g };
    h.$Cu = zf;
    zf.__name__ = ["$Cu"];
    zf.__super__ = H;
    zf.prototype = m(H.prototype, { $LJ: function(a) { a.strokeArc(this.$kJ, this.$nJ, this.$oJ, this.$pJ, this.$uJ, this.$vJ, this.$rJ, this.$qJ) }, __class__: zf });
    var Af = function(a, b, c) { this.$kJ = a;
        this.$lJ = b;
        this.$wJ = c };
    h.$Cv = Af;
    Af.__name__ = ["$Cv"];
    Af.__super__ = H;
    Af.prototype = m(H.prototype, { $LJ: function(a) { a.strokeLines(this.$kJ, this.$lJ, this.$wJ) }, __class__: Af });
    var Bf = function(a, b, c) { this.$dJ = a;
        this.$lJ = b;
        this.$wJ = c };
    h.$Cw = Bf;
    Bf.__name__ = ["$Cw"];
    Bf.__super__ = H;
    Bf.prototype = m(H.prototype, { $LJ: function(a) { a.drawLines(this.$dJ, this.$lJ, this.$wJ) }, __class__: Bf });
    var nf = function(a, b, c, d, e) { this.$kJ = a;
        this.$MJ = b;
        this.$NJ = c;
        this.$bJ = d;
        this.$cJ = e };
    h.$Cx = nf;
    nf.__name__ = ["$Cx"];
    nf.__super__ = H;
    nf.prototype = m(H.prototype, {
        $LJ: function(a) { a.fillRect(this.$kJ, this.$MJ, this.$NJ, this.$bJ, this.$cJ) },
        __class__: nf
    });
    var vd = function(a, b, c) { B.call(this);
        this.color = a;
        this.width = new D(b);
        this.height = new D(c) };
    h["kit.display.FillSprite"] = vd;
    vd.__name__ = ["kit", "display", "FillSprite"];
    vd.__super__ = B;
    vd.prototype = m(B.prototype, {
        draw: function(a) { a.fillRect(this.color, 0, 0, this.width.$nH, this.height.$nH) },
        getNaturalWidth: function() { return this.width.$nH },
        getNaturalHeight: function() { return this.height.$nH },
        setSize: function(a, b) { this.width.set__(a);
            this.height.set__(b); return this },
        onUpdate: function(a) {
            B.prototype.onUpdate.call(this,
                a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: vd
    });
    var Cf = function(a) { this.$yJ = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a };
    h["kit.display.Glyph"] = Cf;
    Cf.__name__ = ["kit", "display", "Glyph"];
    Cf.prototype = {
        draw: function(a, b, c) { 0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height) },
        getKerning: function(a) { return null != this.$yJ ? p["int"](this.$yJ.h[a]) : 0 },
        $xJ: function(a,
            b) { null == this.$yJ && (this.$yJ = new eb);
            this.$yJ.h[a] = b },
        __class__: Cf
    };
    var uc = function(a, b) { this.name = b;
        this.$sI = a;
        this.$hI = a.getFile(b + ".fnt");
        this.$eI() };
    h["kit.display.Font"] = uc;
    uc.__name__ = ["kit", "display", "Font"];
    uc.prototype = {
        disposeFiles: function() { this.$hI.dispose(); return this },
        layoutText: function(a, b, c, d, e) { null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = Ia.Left); return new xc(this, a, b, c, d, e) },
        $eI: function() {
            this.$zJ = new eb;
            this.$zJ.h[uc.$$J.charCode] = uc.$$J;
            for (var a = new Tc(this.$hI.toString()),
                    b = new eb, c = this.name.lastIndexOf("/"), c = 0 <= c ? E.substr(this.name, 0, c + 1) : "", d = a.$DK(); d.hasNext();) switch (d.next()) {
                case "info":
                    for (var e = a.$EK(); e.hasNext();) { var f = e.next(); switch (f.$KK) {
                            case "size":
                                this.size = f.$LK(); break;
                            case "face":
                                this.typeface = f.$MK() } }
                    break;
                case "common":
                    for (e = a.$EK(); e.hasNext();) switch (f = e.next(), f.$KK) {
                        case "lineHeight":
                            this.lineHeight = f.$LK() }
                    break;
                case "page":
                    for (var e = 0, f = null, k = a.$EK(); k.hasNext();) {
                        var g = k.next();
                        switch (g.$KK) {
                            case "id":
                                e = g.$LK();
                                break;
                            case "file":
                                f =
                                    g.$MK()
                        }
                    }
                    f = this.$sI.getTexture(c + Ha.removeFileExtension(f));
                    b.h[e] = f;
                    break;
                case "char":
                    e = null;
                    for (f = a.$EK(); f.hasNext();) switch (k = f.next(), k.$KK) {
                        case "id":
                            e = new Cf(k.$LK()); break;
                        case "x":
                            e.x = k.$LK(); break;
                        case "y":
                            e.y = k.$LK(); break;
                        case "width":
                            e.width = k.$LK(); break;
                        case "height":
                            e.height = k.$LK(); break;
                        case "page":
                            k = k.$LK();
                            e.page = b.h[k]; break;
                        case "xoffset":
                            e.xOffset = k.$LK(); break;
                        case "yoffset":
                            e.yOffset = k.$LK(); break;
                        case "xadvance":
                            e.xAdvance = k.$LK() } this.$zJ.h[e.charCode] = e;
                    break;
                case "kerning":
                    g =
                        null;
                    f = e = 0;
                    for (k = a.$EK(); k.hasNext();) { var h = k.next(); switch (h.$KK) {
                            case "first":
                                g = h.$LK();
                                g = this.$zJ.h[g]; break;
                            case "second":
                                e = h.$LK(); break;
                            case "amount":
                                f = h.$LK() } } null != g && 0 != f && g.$xJ(e, f)
            }
        },
        __class__: uc
    };
    var Ia = h["kit.display.TextAlign"] = { __ename__: ["kit", "display", "TextAlign"], __constructs__: ["Left", "Center", "Right"] };
    Ia.Left = ["Left", 0];
    Ia.Left.toString = l;
    Ia.Left.__enum__ = Ia;
    Ia.Center = ["Center", 1];
    Ia.Center.toString = l;
    Ia.Center.__enum__ = Ia;
    Ia.Right = ["Right", 2];
    Ia.Right.toString = l;
    Ia.Right.__enum__ =
        Ia;
    var xc = function(a, b, c, d, e, f) {
        this.lines = 0;
        var k = this;
        this.$_J = a;
        this.$zJ = [];
        this.$AK = [];
        this.$BK = Math.round(a.lineHeight + f);
        this.bounds = new Ua;
        var g = [];
        f = b.length;
        for (var h = 0; h < f;) { var l = h++,
                l = b.charCodeAt(l),
                l = a.$zJ.h[l];
            null != l ? this.$zJ.push(l) : null } b = -1;
        var m = 0,
            p = 0;
        a = a.$zJ.h[10];
        f = function() { k.bounds.width = xa.max(k.bounds.width, m);
            k.bounds.height += p;
            g[k.lines] = m;
            p = m = 0;++k.lines };
        for (h = 0; h < this.$zJ.length;) {
            l = this.$zJ[h];
            this.$AK[h] = Math.round(m);
            var x = 0 < d && m + l.width > d;
            x || l == a ? (x && (0 <= b ? (this.$zJ[b] =
                a, m = this.$AK[b], h = b) : this.$zJ.splice(h, 0, a)), b = -1, p = this.$BK, f()) : (32 == l.charCode && (b = h), m += l.xAdvance + e, p = xa.max(p, l.height + l.yOffset), h + 1 < this.$zJ.length && (m += l.getKerning(this.$zJ[h + 1].charCode)));
            ++h
        }
        f();
        e = 0;
        a = xc.$CK(c, g[0], d);
        b = 1.79769313486231E308;
        f = -1.79769313486231E308;
        l = h = 0;
        for (x = this.$zJ.length; l < x;) { var r = this.$zJ[l];
            10 == r.charCode && (e += this.$BK, ++h, a = xc.$CK(c, g[h], d));
            this.$AK[l] += a; var s = e + r.yOffset;
            b = b < s ? b : s;
            f = xa.max(f, s + r.height);++l } this.bounds.x = xc.$CK(c, this.bounds.width, d);
        this.bounds.y =
            b;
        this.bounds.height = f - b
    };
    h["kit.display.TextLayout"] = xc;
    xc.__name__ = ["kit", "display", "TextLayout"];
    xc.$CK = function(a, b, c) { switch (a[1]) {
            case 0:
                return 0;
            case 2:
                return c - b;
            case 1:
                return Math.round((c - b) / 2) } };
    xc.prototype = { draw: function(a) { for (var b = 0, c = 0, d = this.$zJ.length; c < d;) { var e = this.$zJ[c];
                10 == e.charCode ? b += this.$BK : e.draw(a, this.$AK[c], b);++c } }, __class__: xc };
    var Tc = function(a) { this.$FK = a;
        this.$HK = new Ja("([A-Za-z]+)(.*)", "");
        this.$IK = new Ja('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "") };
    h.$Cy = Tc;
    Tc.__name__ = ["$Cy"];
    Tc.$JK = function(a, b) { var c = b.matchedPos(); return E.substr(a, c.pos + c.len, a.length) };
    Tc.prototype = { $DK: function() { var a = this,
                b = this.$FK; return { next: function() { b = Tc.$JK(b, a.$HK);
                    a.$GK = a.$HK.matched(2); return a.$HK.matched(1) }, hasNext: function() { return a.$HK.match(b) } } }, $EK: function() { var a = this,
                b = this.$GK; return { next: function() { b = Tc.$JK(b, a.$IK); return new dh(a.$IK.matched(1), a.$IK.matched(2)) }, hasNext: function() { return a.$IK.match(b) } } }, __class__: Tc };
    var dh = function(a, b) {
        this.$KK = a;
        this.$nH =
            b
    };
    h.$Cz = dh;
    dh.__name__ = ["$Cz"];
    dh.prototype = { $LK: function() { return p.parseInt(this.$nH) }, $MK: function() { return 34 != this.$nH.charCodeAt(0) ? null : E.substr(this.$nH, 1, this.$nH.length - 2) }, __class__: dh };
    var za = function(a) { B.call(this);
        this.texture = a };
    h["kit.display.ImageSprite"] = za;
    za.__name__ = ["kit", "display", "ImageSprite"];
    za.__super__ = B;
    za.prototype = m(B.prototype, {
        draw: function(a) { null != this.texture && a.drawTexture(this.texture, 0, 0) },
        getNaturalWidth: function() {
            return null != this.texture ? this.texture.get_width() :
                0
        },
        getNaturalHeight: function() { return null != this.texture ? this.texture.get_height() : 0 },
        __class__: za
    });
    var Qb = h["kit.display.Orientation"] = { __ename__: ["kit", "display", "Orientation"], __constructs__: ["Portrait", "Landscape"] };
    Qb.Portrait = ["Portrait", 0];
    Qb.Portrait.toString = l;
    Qb.Portrait.__enum__ = Qb;
    Qb.Landscape = ["Landscape", 1];
    Qb.Landscape.toString = l;
    Qb.Landscape.__enum__ = Qb;
    var Ve = function(a, b, c) {
        null == c && (c = -1);
        null == b && (b = -1);
        B.call(this);
        this.texture = a;
        0 > b && (b = null != a ? a.get_width() : 0);
        this.width = new D(b);
        0 > c && (c = null != a ? a.get_height() : 0);
        this.height = new D(c)
    };
    h["kit.display.PatternSprite"] = Ve;
    Ve.__name__ = ["kit", "display", "PatternSprite"];
    Ve.__super__ = B;
    Ve.prototype = m(B.prototype, { draw: function(a) { null != this.texture && a.drawPattern(this.texture, 0, 0, this.width.$nH, this.height.$nH) }, getNaturalWidth: function() { return this.width.$nH }, getNaturalHeight: function() { return this.height.$nH }, onUpdate: function(a) { B.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a) }, __class__: Ve });
    var Jb =
        function() { this.$SK = this.$TK = this.$UK = null;
            this.$RK = new D(1);
            this.$QK = new D(1);
            this.$PK = new D(1);
            this.$NK = this.$OK = null };
    h.$C$ = Jb;
    Jb.__name__ = ["$C$"];
    Jb.prototype = { __class__: Jb };
    var Df = function() {};
    h["kit.display.Texture"] = Df;
    Df.__name__ = ["kit", "display", "Texture"];
    Df.__interfaces__ = [kc];
    Df.prototype = { __class__: Df, __properties__: { get_graphics: "get_graphics", get_height: "get_height", get_width: "get_width" } };
    var Sh = function() {};
    h["kit.display.SubTexture"] = Sh;
    Sh.__name__ = ["kit", "display", "SubTexture"];
    Sh.__interfaces__ = [Df];
    var Gb = function(a, b) { null == b && (b = "");
        this.$aK = null; var c = this;
        B.call(this);
        this.$_J = a;
        this.$YK = b;
        this.$ZK = Ia.Left;
        this.$B |= 256; var d = function(a, b) { c.$B |= 256 };
        this.wrapWidth = new D(0, d);
        this.letterSpacing = new D(0, d);
        this.lineSpacing = new D(0, d) };
    h["kit.display.TextSprite"] = Gb;
    Gb.__name__ = ["kit", "display", "TextSprite"];
    Gb.__super__ = B;
    Gb.prototype = m(B.prototype, {
        draw: function(a) { this.$XK();
            this.$aK.draw(a) },
        getNaturalWidth: function() {
            this.$XK();
            return 0 < this.wrapWidth.$nH ? this.wrapWidth.$nH :
                this.$aK.bounds.width
        },
        getNaturalHeight: function() { this.$XK(); var a = this.$aK.lines * (this.$_J.lineHeight + this.lineSpacing.$nH),
                b = this.$aK.bounds.height; return a > b ? a : b },
        containsLocal: function(a, b) { this.$XK(); return this.$aK.bounds.contains(a, b) },
        setAlign: function(a) { this.set_align(a); return this },
        set_text: function(a) { a != this.$YK && (this.$YK = a, this.$B |= 256); return a },
        set_align: function(a) { a != this.$ZK && (this.$ZK = a, this.$B |= 256); return a },
        $XK: function() {
            0 != (this.$B & 256) && (this.$B &= -257, this.$aK = this.$_J.layoutText(this.$YK,
                this.$ZK, this.wrapWidth.$nH, this.letterSpacing.$nH, this.lineSpacing.$nH))
        },
        onUpdate: function(a) { B.prototype.onUpdate.call(this, a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a) },
        __class__: Gb,
        __properties__: m(B.prototype.__properties__, { set_align: "set_align", set_text: "set_text" })
    });
    var Aa = h["kit.display.TextureFormat"] = { __ename__: ["kit", "display", "TextureFormat"], __constructs__: ["RGBA", "RGBA_4444", "RGB", "RGB_565", "COMPRESSED"] };
    Aa.RGBA = ["RGBA", 0];
    Aa.RGBA.toString =
        l;
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
    var Ug = function(a, b) {
        this.$cK = null;
        this.items = new T;
        var c = b.lastIndexOf("/"),
            c = E.substr(b, 0, c + 1);
        this.$hI = a.getFile(b + ".json");
        for (var d = 0, e = this.$hI.toJson().atlases; d < e.length;) {
            var f = e[d];
            ++d;
            for (var k = Ha.removeFileExtension(f.image), k = a.getTexture(c + k), g = 0, f = f.items; g < f.length;) { var h = f[g];++g;
                h = new eh(this, k, h);
                this.items.set(h.name, h) }
        }
    };
    h["kit.display.TexturePacker"] = Ug;
    Ug.__name__ = ["kit", "display", "TexturePacker"];
    Ug.prototype = {
        getItem: function(a, b) { return this.items.get(a) },
        createSprite: function(a, b) { null == b && (b = !0); var c = this.getItem(a, b); return null != c ? c.createSprite() : null },
        disposeFiles: function() { this.$hI.dispose(); return this },
        toLibrary: function() {
            var a = this;
            if (null == this.$cK) {
                for (var b =
                        new T, c = this.items.iterator(); c.hasNext();) { var d = c.next(),
                        e = new Ja("^(.*?)(\\W*\\d+)$", ""); if (e.match(d.name)) { var d = e.matched(1),
                            e = e.matched(2),
                            f;
                        f = null != Ca[d] ? b.getReserved(d) : b.h[d]; if (null == f) { var k = f = [];
                            null != Ca[d] ? b.setReserved(d, k) : b.h[d] = k } f.push(e) } }
                for (var g = new Ja("\\D", "g"), c = [], d = b.keys(); d.hasNext();) {
                    e = [d.next()];
                    f = null != Ca[e[0]] ? b.getReserved(e[0]) : b.h[e[0]];
                    f.sort(function() { return function(a, b) { var c = p.parseInt(g.replace(a, "")),
                                d = p.parseInt(g.replace(b, "")); return c - d } }());
                    for (var k =
                            f.map(function(b) { return function(c) { return a.items.get(b[0] + c).texture } }(e)), k = new fh(e[0], k), h = 0, l = f.length; h < l;) { var m = h++,
                            r = k.frames[m],
                            m = this.items.get(e[0] + f[m]);
                        r.anchorX = m.anchorX;
                        r.anchorY = m.anchorY } c.push(k)
                }
                this.$cK = Oc.fromFlipbooks(c)
            }
            return this.$cK
        },
        __class__: Ug
    };
    var eh = function(a, b, c) { this.name = null;
        this.packer = a;
        this.name = c.name;
        a = c.frame;
        this.texture = b.subTexture(a[0], a[1], a[2], a[3]);
        this.anchorX = c.pivot[0];
        this.anchorY = c.pivot[1] };
    h["kit.display.TexturePackerItem"] = eh;
    eh.__name__ = ["kit", "display", "TexturePackerItem"];
    eh.prototype = { createSprite: function() { return (new za(this.texture)).setAnchor(this.anchorX, this.anchorY) }, __class__: eh };
    var Ef = function() {};
    h["kit.display.VectorFont"] = Ef;
    Ef.__name__ = ["kit", "display", "VectorFont"];
    Ef.__interfaces__ = [kc];
    Ef.prototype = { __class__: Ef };
    var gh = function() { this.align = Ia.Left;
        this.strokeWidth = this.lineSpacing = this.wrapWidth = 0;
        this.strokeColor = 16777215;
        this.color = 0;
        this.bold = this.italic = !1;
        this.fontSize = 18 };
    h["kit.display.TextStyle"] = gh;
    gh.__name__ = ["kit", "display", "TextStyle"];
    gh.prototype = { __class__: gh };
    var Sc = function(a, b) { null == b && (b = "");
        this.$dJ = null;
        this.$ZK = Ia.Left;
        this.$hK = 16777215;
        this.$kJ = 0;
        this.$fK = this.$gK = !1; var c = this;
        B.call(this);
        this.$_J = a;
        this.$YK = b;
        this.$B |= 256; var d = function(a, b) { c.$B |= 256 };
        this.fontSize = new D(18, d);
        this.strokeWidth = new D(0, d);
        this.wrapWidth = new D(0, d);
        this.lineSpacing = new D(0, d) };
    h["kit.display.VectorTextSprite"] = Sc;
    Sc.__name__ = ["kit", "display", "VectorTextSprite"];
    Sc.__super__ = B;
    Sc.prototype =
        m(B.prototype, {
            getNaturalWidth: function() { this.$eK(); return null != this.$dJ ? this.$dJ.get_width() : 0 },
            getNaturalHeight: function() { this.$eK(); return null != this.$dJ ? this.$dJ.get_height() : 0 },
            containsLocal: function(a, b) { this.$eK(); if (null == this.$dJ) return !1; var c = this.$dK(); return a >= c && a <= c + this.$dJ.get_width() && 0 <= b && b <= this.$dJ.get_height() },
            draw: function(a) { this.$eK();
                null != this.$dJ && a.drawTexture(this.$dJ, this.$dK(), 0) },
            onUpdate: function(a) {
                B.prototype.onUpdate.call(this, a);
                this.fontSize.update(a);
                this.strokeWidth.update(a)
            },
            dispose: function() { B.prototype.dispose.call(this);
                null != this.$dJ && (this.$dJ.dispose(), this.$dJ = null);
                this.$B |= 256 },
            $dK: function() { if (0 < this.wrapWidth.$nH) return 0; switch (this.$ZK[1]) {
                    case 0:
                        return 0;
                    case 1:
                        return -this.$dJ.get_width() / 2;
                    case 2:
                        return -this.$dJ.get_width() } },
            $eK: function() {
                if (0 != (this.$B & 256) && (this.$B &= -257, null != this.$dJ && (this.$dJ.dispose(), this.$dJ = null), 0 < this.$YK.length)) {
                    var a = new gh;
                    a.fontSize = this.fontSize.$nH;
                    a.bold = this.$fK;
                    a.italic = this.$gK;
                    a.color =
                        this.$kJ;
                    a.strokeColor = this.$hK;
                    a.strokeWidth = this.strokeWidth.$nH;
                    a.lineSpacing = this.lineSpacing.$nH;
                    a.wrapWidth = this.wrapWidth.$nH;
                    a.align = this.$ZK;
                    this.$dJ = this.$_J.createTexture(this.$YK, a)
                }
            },
            set_text: function(a) { a != this.$YK && (this.$YK = a, this.$B |= 256); return a },
            set_bold: function(a) { a != this.$fK && (this.$fK = a, this.$B |= 256); return a },
            set_italic: function(a) { a != this.$gK && (this.$gK = a, this.$B |= 256); return a },
            set_color: function(a) { a != this.$kJ && (this.$kJ = a, this.$B |= 256); return a },
            set_strokeColor: function(a) {
                a !=
                    this.$hK && (this.$hK = a, this.$B |= 256);
                return a
            },
            set_align: function(a) { a != this.$ZK && (this.$ZK = a, this.$B |= 256); return a },
            __class__: Sc,
            __properties__: m(B.prototype.__properties__, { set_align: "set_align", set_strokeColor: "set_strokeColor", set_color: "set_color", set_italic: "set_italic", set_bold: "set_bold", set_text: "set_text" })
        });
    var g = h["kit.input.Key"] = { __ename__: ["kit", "input", "Key"], __constructs__: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Number0 Number1 Number2 Number3 Number4 Number5 Number6 Number7 Number8 Number9 Numpad0 Numpad1 Numpad2 Numpad3 Numpad4 Numpad5 Numpad6 Numpad7 Numpad8 Numpad9 NumpadAdd NumpadDecimal NumpadDivide NumpadEnter NumpadMultiply NumpadSubtract F1 F2 F3 F4 F5 F6 F7 F8 F9 F10 F11 F12 F13 F14 F15 Left Up Right Down Alt Backquote Backslash Backspace CapsLock Comma Command Control Delete End Enter Equals Escape Home Insert LeftBracket Minus PageDown PageUp Period Quote RightBracket Semicolon Shift Slash Space Tab Menu Search Unknown".split(" ") };
    g.A = ["A", 0];
    g.A.toString = l;
    g.A.__enum__ = g;
    g.B = ["B", 1];
    g.B.toString = l;
    g.B.__enum__ = g;
    g.C = ["C", 2];
    g.C.toString = l;
    g.C.__enum__ = g;
    g.D = ["D", 3];
    g.D.toString = l;
    g.D.__enum__ = g;
    g.E = ["E", 4];
    g.E.toString = l;
    g.E.__enum__ = g;
    g.F = ["F", 5];
    g.F.toString = l;
    g.F.__enum__ = g;
    g.G = ["G", 6];
    g.G.toString = l;
    g.G.__enum__ = g;
    g.H = ["H", 7];
    g.H.toString = l;
    g.H.__enum__ = g;
    g.I = ["I", 8];
    g.I.toString = l;
    g.I.__enum__ = g;
    g.J = ["J", 9];
    g.J.toString = l;
    g.J.__enum__ = g;
    g.K = ["K", 10];
    g.K.toString = l;
    g.K.__enum__ = g;
    g.L = ["L", 11];
    g.L.toString = l;
    g.L.__enum__ =
        g;
    g.M = ["M", 12];
    g.M.toString = l;
    g.M.__enum__ = g;
    g.N = ["N", 13];
    g.N.toString = l;
    g.N.__enum__ = g;
    g.O = ["O", 14];
    g.O.toString = l;
    g.O.__enum__ = g;
    g.P = ["P", 15];
    g.P.toString = l;
    g.P.__enum__ = g;
    g.Q = ["Q", 16];
    g.Q.toString = l;
    g.Q.__enum__ = g;
    g.R = ["R", 17];
    g.R.toString = l;
    g.R.__enum__ = g;
    g.S = ["S", 18];
    g.S.toString = l;
    g.S.__enum__ = g;
    g.T = ["T", 19];
    g.T.toString = l;
    g.T.__enum__ = g;
    g.U = ["U", 20];
    g.U.toString = l;
    g.U.__enum__ = g;
    g.V = ["V", 21];
    g.V.toString = l;
    g.V.__enum__ = g;
    g.W = ["W", 22];
    g.W.toString = l;
    g.W.__enum__ = g;
    g.X = ["X", 23];
    g.X.toString =
        l;
    g.X.__enum__ = g;
    g.Y = ["Y", 24];
    g.Y.toString = l;
    g.Y.__enum__ = g;
    g.Z = ["Z", 25];
    g.Z.toString = l;
    g.Z.__enum__ = g;
    g.Number0 = ["Number0", 26];
    g.Number0.toString = l;
    g.Number0.__enum__ = g;
    g.Number1 = ["Number1", 27];
    g.Number1.toString = l;
    g.Number1.__enum__ = g;
    g.Number2 = ["Number2", 28];
    g.Number2.toString = l;
    g.Number2.__enum__ = g;
    g.Number3 = ["Number3", 29];
    g.Number3.toString = l;
    g.Number3.__enum__ = g;
    g.Number4 = ["Number4", 30];
    g.Number4.toString = l;
    g.Number4.__enum__ = g;
    g.Number5 = ["Number5", 31];
    g.Number5.toString = l;
    g.Number5.__enum__ =
        g;
    g.Number6 = ["Number6", 32];
    g.Number6.toString = l;
    g.Number6.__enum__ = g;
    g.Number7 = ["Number7", 33];
    g.Number7.toString = l;
    g.Number7.__enum__ = g;
    g.Number8 = ["Number8", 34];
    g.Number8.toString = l;
    g.Number8.__enum__ = g;
    g.Number9 = ["Number9", 35];
    g.Number9.toString = l;
    g.Number9.__enum__ = g;
    g.Numpad0 = ["Numpad0", 36];
    g.Numpad0.toString = l;
    g.Numpad0.__enum__ = g;
    g.Numpad1 = ["Numpad1", 37];
    g.Numpad1.toString = l;
    g.Numpad1.__enum__ = g;
    g.Numpad2 = ["Numpad2", 38];
    g.Numpad2.toString = l;
    g.Numpad2.__enum__ = g;
    g.Numpad3 = ["Numpad3", 39];
    g.Numpad3.toString =
        l;
    g.Numpad3.__enum__ = g;
    g.Numpad4 = ["Numpad4", 40];
    g.Numpad4.toString = l;
    g.Numpad4.__enum__ = g;
    g.Numpad5 = ["Numpad5", 41];
    g.Numpad5.toString = l;
    g.Numpad5.__enum__ = g;
    g.Numpad6 = ["Numpad6", 42];
    g.Numpad6.toString = l;
    g.Numpad6.__enum__ = g;
    g.Numpad7 = ["Numpad7", 43];
    g.Numpad7.toString = l;
    g.Numpad7.__enum__ = g;
    g.Numpad8 = ["Numpad8", 44];
    g.Numpad8.toString = l;
    g.Numpad8.__enum__ = g;
    g.Numpad9 = ["Numpad9", 45];
    g.Numpad9.toString = l;
    g.Numpad9.__enum__ = g;
    g.NumpadAdd = ["NumpadAdd", 46];
    g.NumpadAdd.toString = l;
    g.NumpadAdd.__enum__ = g;
    g.NumpadDecimal = ["NumpadDecimal", 47];
    g.NumpadDecimal.toString = l;
    g.NumpadDecimal.__enum__ = g;
    g.NumpadDivide = ["NumpadDivide", 48];
    g.NumpadDivide.toString = l;
    g.NumpadDivide.__enum__ = g;
    g.NumpadEnter = ["NumpadEnter", 49];
    g.NumpadEnter.toString = l;
    g.NumpadEnter.__enum__ = g;
    g.NumpadMultiply = ["NumpadMultiply", 50];
    g.NumpadMultiply.toString = l;
    g.NumpadMultiply.__enum__ = g;
    g.NumpadSubtract = ["NumpadSubtract", 51];
    g.NumpadSubtract.toString = l;
    g.NumpadSubtract.__enum__ = g;
    g.F1 = ["F1", 52];
    g.F1.toString = l;
    g.F1.__enum__ = g;
    g.F2 = ["F2", 53];
    g.F2.toString =
        l;
    g.F2.__enum__ = g;
    g.F3 = ["F3", 54];
    g.F3.toString = l;
    g.F3.__enum__ = g;
    g.F4 = ["F4", 55];
    g.F4.toString = l;
    g.F4.__enum__ = g;
    g.F5 = ["F5", 56];
    g.F5.toString = l;
    g.F5.__enum__ = g;
    g.F6 = ["F6", 57];
    g.F6.toString = l;
    g.F6.__enum__ = g;
    g.F7 = ["F7", 58];
    g.F7.toString = l;
    g.F7.__enum__ = g;
    g.F8 = ["F8", 59];
    g.F8.toString = l;
    g.F8.__enum__ = g;
    g.F9 = ["F9", 60];
    g.F9.toString = l;
    g.F9.__enum__ = g;
    g.F10 = ["F10", 61];
    g.F10.toString = l;
    g.F10.__enum__ = g;
    g.F11 = ["F11", 62];
    g.F11.toString = l;
    g.F11.__enum__ = g;
    g.F12 = ["F12", 63];
    g.F12.toString = l;
    g.F12.__enum__ = g;
    g.F13 = ["F13", 64];
    g.F13.toString = l;
    g.F13.__enum__ = g;
    g.F14 = ["F14", 65];
    g.F14.toString = l;
    g.F14.__enum__ = g;
    g.F15 = ["F15", 66];
    g.F15.toString = l;
    g.F15.__enum__ = g;
    g.Left = ["Left", 67];
    g.Left.toString = l;
    g.Left.__enum__ = g;
    g.Up = ["Up", 68];
    g.Up.toString = l;
    g.Up.__enum__ = g;
    g.Right = ["Right", 69];
    g.Right.toString = l;
    g.Right.__enum__ = g;
    g.Down = ["Down", 70];
    g.Down.toString = l;
    g.Down.__enum__ = g;
    g.Alt = ["Alt", 71];
    g.Alt.toString = l;
    g.Alt.__enum__ = g;
    g.Backquote = ["Backquote", 72];
    g.Backquote.toString = l;
    g.Backquote.__enum__ = g;
    g.Backslash = ["Backslash", 73];
    g.Backslash.toString = l;
    g.Backslash.__enum__ = g;
    g.Backspace = ["Backspace", 74];
    g.Backspace.toString = l;
    g.Backspace.__enum__ = g;
    g.CapsLock = ["CapsLock", 75];
    g.CapsLock.toString = l;
    g.CapsLock.__enum__ = g;
    g.Comma = ["Comma", 76];
    g.Comma.toString = l;
    g.Comma.__enum__ = g;
    g.Command = ["Command", 77];
    g.Command.toString = l;
    g.Command.__enum__ = g;
    g.Control = ["Control", 78];
    g.Control.toString = l;
    g.Control.__enum__ = g;
    g.Delete = ["Delete", 79];
    g.Delete.toString = l;
    g.Delete.__enum__ = g;
    g.End = ["End", 80];
    g.End.toString = l;
    g.End.__enum__ =
        g;
    g.Enter = ["Enter", 81];
    g.Enter.toString = l;
    g.Enter.__enum__ = g;
    g.Equals = ["Equals", 82];
    g.Equals.toString = l;
    g.Equals.__enum__ = g;
    g.Escape = ["Escape", 83];
    g.Escape.toString = l;
    g.Escape.__enum__ = g;
    g.Home = ["Home", 84];
    g.Home.toString = l;
    g.Home.__enum__ = g;
    g.Insert = ["Insert", 85];
    g.Insert.toString = l;
    g.Insert.__enum__ = g;
    g.LeftBracket = ["LeftBracket", 86];
    g.LeftBracket.toString = l;
    g.LeftBracket.__enum__ = g;
    g.Minus = ["Minus", 87];
    g.Minus.toString = l;
    g.Minus.__enum__ = g;
    g.PageDown = ["PageDown", 88];
    g.PageDown.toString = l;
    g.PageDown.__enum__ =
        g;
    g.PageUp = ["PageUp", 89];
    g.PageUp.toString = l;
    g.PageUp.__enum__ = g;
    g.Period = ["Period", 90];
    g.Period.toString = l;
    g.Period.__enum__ = g;
    g.Quote = ["Quote", 91];
    g.Quote.toString = l;
    g.Quote.__enum__ = g;
    g.RightBracket = ["RightBracket", 92];
    g.RightBracket.toString = l;
    g.RightBracket.__enum__ = g;
    g.Semicolon = ["Semicolon", 93];
    g.Semicolon.toString = l;
    g.Semicolon.__enum__ = g;
    g.Shift = ["Shift", 94];
    g.Shift.toString = l;
    g.Shift.__enum__ = g;
    g.Slash = ["Slash", 95];
    g.Slash.toString = l;
    g.Slash.__enum__ = g;
    g.Space = ["Space", 96];
    g.Space.toString =
        l;
    g.Space.__enum__ = g;
    g.Tab = ["Tab", 97];
    g.Tab.toString = l;
    g.Tab.__enum__ = g;
    g.Menu = ["Menu", 98];
    g.Menu.toString = l;
    g.Menu.__enum__ = g;
    g.Search = ["Search", 99];
    g.Search.toString = l;
    g.Search.__enum__ = g;
    g.Unknown = function(a) { a = ["Unknown", 100, a];
        a.__enum__ = g;
        a.toString = l; return a };
    var hh = function() { this.$iK(0, null) };
    h["kit.input.KeyboardEvent"] = hh;
    hh.__name__ = ["kit", "input", "KeyboardEvent"];
    hh.prototype = { $iK: function(a, b) { this.id = a;
            this.key = b }, __class__: hh };
    var Pa = h["kit.input.MouseButton"] = {
        __ename__: ["kit", "input",
            "MouseButton"
        ],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    Pa.Left = ["Left", 0];
    Pa.Left.toString = l;
    Pa.Left.__enum__ = Pa;
    Pa.Middle = ["Middle", 1];
    Pa.Middle.toString = l;
    Pa.Middle.__enum__ = Pa;
    Pa.Right = ["Right", 2];
    Pa.Right.toString = l;
    Pa.Right.__enum__ = Pa;
    Pa.Unknown = function(a) { a = ["Unknown", 3, a];
        a.__enum__ = Pa;
        a.toString = l; return a };
    var La = h["kit.input.MouseCursor"] = { __ename__: ["kit", "input", "MouseCursor"], __constructs__: ["Default", "Button", "None"] };
    La.Default = ["Default", 0];
    La.Default.toString = l;
    La.Default.__enum__ =
        La;
    La.Button = ["Button", 1];
    La.Button.toString = l;
    La.Button.__enum__ = La;
    La.None = ["None", 2];
    La.None.toString = l;
    La.None.__enum__ = La;
    var ih = function() { this.$iK(0, 0, 0, null) };
    h["kit.input.MouseEvent"] = ih;
    ih.__name__ = ["kit", "input", "MouseEvent"];
    ih.prototype = { $iK: function(a, b, c, d) { this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = d }, __class__: ih };
    var Ff = h["kit.input.EventSource"] = { __ename__: ["kit", "input", "EventSource"], __constructs__: ["Mouse", "Touch"] };
    Ff.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = Ff;
        a.toString =
            l;
        return a
    };
    Ff.Touch = function(a) { a = ["Touch", 1, a];
        a.__enum__ = Ff;
        a.toString = l; return a };
    var jh = function() { this.$iK(0, 0, 0, null, null) };
    h["kit.input.PointerEvent"] = jh;
    jh.__name__ = ["kit", "input", "PointerEvent"];
    jh.prototype = { $iK: function(a, b, c, d, e) { this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = d;
            this.source = e;
            this.$jK = !1 }, __class__: jh };
    var kh = function(a) { this.id = a;
        this.$kK = Ff.Touch(this) };
    h["kit.input.TouchPoint"] = kh;
    kh.__name__ = ["kit", "input", "TouchPoint"];
    kh.prototype = {
        $iK: function(a, b) {
            this.viewX = a;
            this.viewY =
                b
        },
        __class__: kh
    };
    var xa = function() {};
    h["kit.math.FMath"] = xa;
    xa.__name__ = ["kit", "math", "FMath"];
    xa.toRadians = function(a) { return 3.141592653589793 * a / 180 };
    xa.max = function(a, b) { return a > b ? a : b };
    xa.min = function(a, b) { return a < b ? a : b };
    xa.clamp = function(a, b, c) { return a < b ? b : a > c ? c : a };
    var Ab = function() { this.identity() };
    h["kit.math.Matrix"] = Ab;
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
        e = a.m10 * b.m01 + a.m11 * b.m11;
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
            this.set(this.m11 / a, -this.m01 / a, -this.m10 / a, this.m00 / a, (this.m01 * this.m12 - this.m11 * this.m02) / a, (this.m10 * this.m02 - this.m00 * this.m12) / a);
            return !0
        },
        transform: function(a, b, c) { null == c && (c = new nb);
            c.x = a * this.m00 + b * this.m01 + this.m02;
            c.y = a * this.m10 + b * this.m11 + this.m12; return c },
        transformArray: function(a, b, c) { for (var d = 0; d < b;) { var e = a[d],
                    f = a[d + 1];
                c[d++] = e * this.m00 + f * this.m01 + this.m02;
                c[d++] = e * this.m10 + f * this.m11 + this.m12 } },
        determinant: function() { return this.m00 * this.m11 - this.m01 * this.m10 },
        inverseTransform: function(a, b, c) { var d = this.determinant(); if (0 == d) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / d;
            c.y = (b * this.m00 - a * this.m10) / d; return !0 },
        clone: function(a) { null == a && (a = new Ab);
            a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12); return a },
        __class__: Ab
    };
    var xd = function() {};
    h["kit.movie.Symbol"] = xd;
    xd.__name__ = ["kit", "movie", "Symbol"];
    xd.prototype = { __class__: xd };
    var yd = function(a, b) {
        this.$mF = a.symbol;
        var c = a.rect;
        this.texture = b.subTexture(c[0], c[1], c[2], c[3]);
        c = a.origin;
        null != c ? (this.anchorX = c[0], this.anchorY = c[1]) : this.anchorY = this.anchorX = 0;
        c = a.scale;
        null != c ? (this.scaleX = c[0], this.scaleY = c[1]) : this.scaleY = this.scaleX = 1
    };
    h["kit.movie.BitmapSymbol"] = yd;
    yd.__name__ = ["kit", "movie", "BitmapSymbol"];
    yd.__interfaces__ = [xd];
    yd.prototype = { createSprite: function() { var a = new za(this.texture);
            a.setAnchor(this.anchorX, this.anchorY);
            a.setScaleXY(this.scaleX, this.scaleY); return a }, __class__: yd };
    var fh = function(a, b) {
        this.name = a;
        var c = 1 / b.length;
        this.frames = [];
        for (var d =
                0; d < b.length;) { var e = b[d];++d;
            this.frames.push(new lh(e, c)) }
    };
    h["kit.movie.Flipbook"] = fh;
    fh.__name__ = ["kit", "movie", "Flipbook"];
    fh.prototype = { __class__: fh };
    var lh = function(a, b) { this.label = null;
        this.anchorX = this.anchorY = 0;
        this.texture = a;
        this.duration = b };
    h["kit.movie.FlipbookFrame"] = lh;
    lh.__name__ = ["kit", "movie", "FlipbookFrame"];
    lh.prototype = { $lK: function() { return new Gf(this) }, __class__: lh };
    var Gf = function(a) { this.$dJ = a.texture;
        this.$mK = a.anchorX;
        this.$nK = a.anchorY };
    h.$CAB = Gf;
    Gf.__name__ = ["$CAB"];
    Gf.__interfaces__ = [xd];
    Gf.prototype = { createSprite: function() { var a = new za(this.$dJ);
            a.setAnchor(this.$mK, this.$nK); return a }, __class__: Gf };
    var Oc = function(a, b) {
        this.sounds = new T;
        this.scenes = [];
        var c = this;
        this.$hI = a.getFile(b + "/library.json");
        var d = this.$hI.toJson();
        this.$oK = new T;
        this.frameRate = d.frameRate;
        this.backgroundColor = null != d.backgroundColor ? d.backgroundColor : 0;
        this.backgroundAlpha = null != d.backgroundAlpha ? d.backgroundAlpha : 1;
        this.width = null != d.width ? d.width : 0;
        this.height = null != d.height ? d.height :
            0;
        this.pixelSnapping = null != d.pixelSnapping ? d.pixelSnapping : !0;
        if (null != d.sounds)
            for (var e = 0, f = d.sounds; e < f.length;) { var k = f[e];++e; var g = a.getSound(b + "/" + Ha.removeFileExtension(k.file), !1),
                    k = k.id,
                    g = new mh(k, g);
                this.sounds.set(k, g) } e = [];
        f = 0;
        for (g = d.movies; f < g.length;) k = g[f], ++f, k = new Uc(this, k), e.push(k), this.$oK.set(k.$mF, k);
        if (null != d.scenes)
            for (f = 0, g = d.scenes; f < g.length;) k = g[f], ++f, k = new Uc(this, k), e.push(k), this.scenes.push(k);
        d = d.textureGroups[0].atlases;
        for (f = 0; f < d.length;) {
            k = d[f];
            ++f;
            g = b + "/" +
                Ha.removeFileExtension(k.file);
            g = a.getTexture(g);
            if (null != k.mask) { var h = a.getTexture(b + "/" + Ha.removeFileExtension(k.mask)),
                    l = t.$EI.$UH.createTexture(g.get_width(), g.get_height()),
                    m = l.get_graphics();
                m.save();
                m.setBlendMode(da.Copy);
                m.drawTexture(g, 0, 0);
                m.setBlendMode(da.Mask);
                m.drawTexture(h, 0, 0);
                m.restore();
                g.dispose();
                h.dispose();
                g = l } h = 0;
            for (k = k.textures; h < k.length;) l = k[h], ++h, l = new yd(l, g), this.$oK.set(l.$mF, l)
        }
        for (var p = null, d = p = function(a) {
                for (var b = a.keyframes, d = b.length, e = 0; e < d;) {
                    var f = e++,
                        k = b[f];
                    if (null != k.$hL) { var g = c.$oK.get(k.$hL);
                        k.symbol = g } k.tweened && 1 == k.duration && f + 1 < d && (f = b[f + 1], f.visible && null != f.$hL || (k.visible = !1))
                }
                b = 0;
                for (a = a.childLayers; b < a.length;) d = a[b], ++b, p(d)
            }, f = 0; f < e.length;)
            for (k = e[f], ++f, g = 0, k = k.layers; g < k.length;) h = k[g], ++g, d(h)
    };
    h["kit.movie.Library"] = Oc;
    Oc.__name__ = ["kit", "movie", "Library"];
    Oc.fromFlipbooks = function(a) {
        var b = ca.createEmptyInstance(Oc);
        b.$oK = new T;
        b.frameRate = 60;
        b.$hI = null;
        for (var c = 0; c < a.length;) {
            var d = a[c];
            ++c;
            for (var e = [], f = 0, k = d.frames; f <
                k.length;) { var g = k[f];++f;
                e.push({ duration: g.duration * b.frameRate, label: g.label, pivot: [g.anchorX, g.anchorY], ref: "" }) } e = new Uc(b, { id: d.name, layers: [{ name: "flipbook", flipbook: !0, keyframes: e }] });
            b.$oK.set(d.name, e);
            e = e.layers[0].keyframes;
            f = 0;
            for (k = d.frames.length; f < k;) g = f++, e[g].$jL(d.frames[g].$lK())
        }
        return b
    };
    Oc.prototype = { disposeFiles: function() { null != this.$hI && this.$hI.dispose(); return this }, createSprite: function(a, b) { var c = this.$oK.get(a); return null == c ? null : c.createSprite() }, __class__: Oc };
    var yc =
        function(a) { this.$tK = this.$uK = null;
            C.call(this);
            this.$cK = a;
            this.$sK = new R;
            this.movie = new wa(null);
            this.setCache(!0) };
    h["kit.movie.MoviePlayer"] = yc;
    yc.__name__ = ["kit", "movie", "MoviePlayer"];
    yc.__super__ = C;
    yc.prototype = m(C.prototype, {
        get_entitySlot: function() { return 5 },
        setCache: function(a) { this.$wK = a ? new T : null; return this },
        setDecorator: function(a) { this.$vK = a; return this },
        play: function(a, b) { null == b && (b = !0); if (b || null == this.$tK || this.$tK.symbol.$mF != a) this.$tK = this.$pK(a); return this },
        loop: function(a,
            b) { null == b && (b = !0); if (b || null == this.$uK || this.$uK.symbol.$mF != a) this.$tK = null, this.$uK = this.$pK(a); return this },
        onAdded: function() { this.owner.addChild(this.$sK) },
        onRemoved: function() { this.$sK.dispose();
            this.$tK = this.$uK = null;
            this.movie.set__(null) },
        onUpdate: function(a) { null != this.$tK && this.$tK.$AL + a > this.$tK.symbol.duration && (this.$tK = null, this.$rK(this.$uK)) },
        $pK: function(a) { var b;
            null != this.$wK ? (b = this.$wK.get(a), null != b ? b.set_position(0) : (b = this.$qK(a), this.$wK.set(a, b))) : b = this.$qK(a); return this.$rK(b) },
        $qK: function(a) { a = this.$cK.createSprite(a, !0);
            null != this.$vK && this.$vK(a); return a },
        $rK: function(a) { this.$sK.add(a); return this.movie.set__(a) },
        __class__: yc
    });
    var Fb = function(a) {
        this.$DL = this.$EL = this.$FL = null;
        this.$CL = 0;
        var b = this;
        B.call(this);
        this.symbol = a;
        this.speed = new D(1);
        this.$_K = Array(a.layers.length);
        for (var c = 0, d = this.$_K.length; c < d;) { var e = c++;
            this.$_K[e] = new Vc(a.layers[e]) } this.$AL = 0;
        this.$BL = -1;
        this.$yK(0);
        if (a.button) {
            var f = 0 / a.frameRate,
                k = 1 / a.frameRate,
                g = 2 / a.frameRate,
                h = !1,
                l = !1,
                c =
                new Ua(1.79769313486231E308, 1.79769313486231E308, -1.79769313486231E308, -1.79769313486231E308),
                d = 0;
            for (a = a.layers; d < a.length;) e = a[d], ++d, Fb.$GL(e, c);
            c.x < c.width && c.y < c.height && (this.$FL = c);
            this.$B |= 4096;
            this.get_pointerDown().connect(function(a) { h = !0;
                b.set_position(g);
                t.$EI.$TH.up.connect(function(a) { h = !1;
                    b.set_position(l ? k : f) }).once() });
            var m = null;
            this.get_pointerIn().connect(function(a) {
                l = !0;
                b.set_position(h ? g : k);
                t.$EI.$SH.get_cursor() == La.Default && t.$EI.$SH.set_cursor(La.Button);
                null != m && m.dispose();
                m = t.$EI.$TH.move.connect(function(a) { null == b.owner && (m.dispose(), t.$EI.$SH.get_cursor() == La.Button && t.$EI.$SH.set_cursor(La.Default)) })
            });
            this.get_pointerOut().connect(function(a) { l = !1;
                b.set_position(f);
                t.$EI.$SH.get_cursor() == La.Button && t.$EI.$SH.set_cursor(La.Default) })
        }
    };
    h["kit.movie.MovieSprite"] = Fb;
    Fb.__name__ = ["kit", "movie", "MovieSprite"];
    Fb.$GL = function(a, b) {
        for (var c = 0, d = a.keyframes; c < d.length;) {
            var e = d[c];
            ++c;
            if (3 == e.index && null != e.symbol) {
                var f = e.symbol.createSprite(),
                    k = f.getNaturalWidth(),
                    g = f.getNaturalHeight();
                if (0 < k && 0 < g) { var h = f.scaleX.$nH * e.scaleX,
                        l = f.scaleY.$nH * e.scaleY,
                        f = f.getLocalMatrix(),
                        m = Math.sin(e.skewX),
                        p = Math.cos(e.skewX),
                        r = Math.sin(e.skewY),
                        s = Math.cos(e.skewY);
                    f.set(s * h, r * h, -m * l, p * l, e.x, e.y);
                    f.translate(-e.pivotX, -e.pivotY);
                    B.$RG(f, 0, 0, b);
                    B.$RG(f, k, 0, b);
                    B.$RG(f, k, g, b);
                    B.$RG(f, 0, g, b) }
            }
        }
        c = 0;
        for (d = a.childLayers; c < d.length;) e = d[c], ++c, Fb.$GL(e, b)
    };
    Fb.__super__ = B;
    Fb.prototype = m(B.prototype, {
        once: function() {
            var a = this;
            this.get_looped().connect(function() { a.owner.dispose() });
            return this
        },
        containsLocal: function(a, b) { return null != this.$FL && a >= this.$FL.x && a < this.$FL.width && b >= this.$FL.y && b < this.$FL.height },
        onAdded: function() { B.prototype.onAdded.call(this); for (var a = 0, b = this.$_K; a < b.length;) { var c = b[a];++a;
                this.owner.addChild(c.$ML) } },
        onRemoved: function() { B.prototype.onRemoved.call(this); for (var a = 0, b = this.$_K; a < b.length;) { var c = b[a];++a;
                this.owner.removeChild(c.$ML) } },
        onUpdate: function(a) {
            B.prototype.onUpdate.call(this, a);
            this.speed.update(a);
            switch (this.$B & 6912) {
                case 0:
                    0 <=
                        this.speed.$nH && (this.$AL += this.speed.$nH * a, this.$AL > this.symbol.duration && (0 != (this.$B & 1024) ? (this.$AL = this.symbol.duration, this.$B |= 2048) : (this.$AL %= this.symbol.duration, null != this.$DL && this.$DL.emit())));
                    break;
                case 512:
                    this.$B &= -513
            }
            this.$yK(this.$AL * this.symbol.frameRate)
        },
        $yK: function(a) {
            if (this.$BL != a) {
                if (a < this.$BL)
                    for (var b = 0, c = this.$_K; b < c.length;) { var d = c[b];++b; if (d.$WL(this.$EL)) return } b = 0;
                for (c = this.$_K; b < c.length;)
                    if (d = c[b], ++b, d.$YL(a, this.$EL, this.$CL)) return;
                switch (this.$CL) {
                    case 0:
                        this.$CL =
                            1;
                        break;
                    case 1:
                    case 2:
                        this.$CL = 3
                }
                this.$BL = a
            }
        },
        set_position: function(a) { this.setPosition(a, !0); return a },
        setPosition: function(a, b) { var c = xa.clamp(a, 0, this.symbol.duration);
            this.$AL = c;
            this.$CL = 3; var d = c * this.symbol.frameRate,
                e;
            e = b ? 2 : 0; for (var f = 0, k = this.$_K; f < k.length;) { var g = k[f];++f; if (g.$XL(d, this.$EL, e)) return c } this.$BL = d; return c },
        set_paused: function(a) { this.$B = Mc.set(this.$B, 256, a); return a },
        get_looped: function() { null == this.$DL && (this.$DL = new mb); return this.$DL },
        set_pixelSnapping: function(a) {
            for (var b =
                    0, c = this.$_K; b < c.length;) { var d = c[b];++b;
                d.$ZL(a) }
            return B.prototype.set_pixelSnapping.call(this, a)
        },
        $zK: function(a) { this.$AL = a.firstFrame / this.symbol.frameRate;
            this.set_paused(a.playMode == Ma.SingleFrame);
            this.$B = (this.$B | 512) & -2049;
            a = 0; for (var b = this.$_K; a < b.length;) { var c = b[a];++a;
                c.$zK() } },
        __class__: Fb,
        __properties__: m(B.prototype.__properties__, { get_looped: "get_looped", set_paused: "set_paused", set_position: "set_position" })
    });
    var Vc = function(a) {
        this.$eL = [];
        this.$SL = null;
        this.$RL = !0;
        this.$PL = -1;
        this.$OL = 0;
        this.$NL = !1;
        this.$QL = a;
        this.$ML = new R;
        if (a.empty) this.$dL = null;
        else { this.$dL = Array(a.keyframes.length); for (var b = null, c = null, d = 0, e = this.$dL.length; d < e;) { var f = d++,
                    k = a.keyframes[f]; if (null != b && Vc.$fL(b, k)) this.$dL[f] = c;
                else if (null != k.symbol) { c = k.symbol.createSprite();
                    this.$dL[f] = c; if (0 < k.firstFrame || k.playMode != Ma.Loop)
                        if (b = c instanceof Fb ? c : null, null != b) { switch (k.playMode[1]) {
                                case 1:
                                    b.$B |= 1024; break;
                                case 2:
                                    b.set_paused(!0) } b.$AL = k.firstFrame / b.symbol.frameRate } b = k } else this.$dL[f] = new B } this.$ML.add(this.$dL[0]) } this.$cL =
            this.$ML;
        if (0 < a.childLayers.length)
            for (e = new B, k = (new R).add(e), k.addChild(this.$ML), this.$ML = b = new R, d = new R, a.mask && (this.$SL = new B, this.$SL.set_mask(e), d.add(this.$SL)), b.addChild(d), b.addChild(k), e = 0, a = a.childLayers; e < a.length;) k = a[e], ++e, k = new Vc(k), this.$eL.push(k), d.addChild(k.$ML)
    };
    h.$CBB = Vc;
    Vc.__name__ = ["$CBB"];
    Vc.$fL = function(a, b) {
        if (a.symbol != b.symbol || a.playMode != b.playMode) return !1;
        switch (a.playMode[1]) {
            case 2:
                return a.firstFrame == b.firstFrame;
            default:
                return a.firstFrame == b.firstFrame ||
                    a.firstFrame + a.duration == b.firstFrame
        }
    };
    Vc.prototype = {
        $VL: function(a, b) { null != a.sound && null != a.sound.sound && (this.$ML.emitMessageToParents("MovieSprite.FRAME_SOUND", new Hf(this.$ML, a)).handled || a.sound.sound.play()); if (null != b) { var c = a.label;
                null != c && b.emit(c) } null != a.actions && this.$ML.emitMessageToParents("MovieSprite.FRAME_ACTION", new Hf(this.$ML, a)) },
        $WL: function(a) {
            for (var b = 0, c = this.$eL; b < c.length;) { var d = c[b];++b; if (d.$WL(a)) return !0 }
            if (0 <= this.$PL) {
                for (var b = this.$QL.keyframes, c = this.$OL, d =
                        this.$PL + 1, e = b.length; d < e;) { var f = d++;
                    this.$VL(b[f], a); if (c != this.$OL) return !0 } this.$PL = -1
            }
            this.$NL = !0;
            return !1
        },
        $XL: function(a, b, c) { for (var d = 0, e = this.$eL; d < e.length;) { var f = e[d];++d; if (f.$XL(a, b, c)) return !0 }++this.$OL;
            d = this.$QL.keyframes;
            e = d.length - 1;
            f = this.$PL; for (this.$PL = -1; this.$PL < e && d[this.$PL + 1].index <= a;) ++this.$PL;
            this.$PL != f && (this.$NL = !0); return this.$YL(a, b, c) },
        $YL: function(a, b, c) {
            for (var d = 0, e = this.$eL; d < e.length;) { var f = e[d];++d; if (f.$YL(a, b, c)) return !0 }
            var d = this.$QL.keyframes,
                k =
                d.length - 1,
                e = this.$PL;
            if (a > this.$QL.frames) this.$PL = k, this.$NL = !0;
            else
                for (; this.$PL < k && d[this.$PL + 1].index <= a;) ++this.$PL, this.$NL = !0;
            if (null != this.$dL) {
                var f = d[this.$PL],
                    g;
                if (this.$NL) { if (this.$NL = !1, g = this.$dL[this.$PL], g != this.$cL.$KH[3]) { var h;
                        h = g instanceof Fb ? g : null;
                        null != h && h.$zK(f);
                        this.$cL.add(g) } } else g = this.$cL.$KH[3];
                if (this.$RL && (h = f.visible && null != f.symbol && a <= this.$QL.frames, g.set_visible(h), null != this.$SL && this.$SL.set_maskEnabled(h), h)) {
                    h = f.x;
                    var l = f.y,
                        m = f.scaleX,
                        r = f.scaleY,
                        s = f.skewX,
                        t = f.skewY,
                        u = f.alpha,
                        w = f.tint;
                    if (f.tweened && this.$PL < k) { var k = (a - f.index) / f.duration,
                            v = f.ease; if (0 != v) { var y;
                            0 > v ? (y = 1 - k, y = 1 - y * y, v = -v) : y = k * k;
                            k = v * y + (1 - v) * k } v = d[this.$PL + 1];
                        h += (v.x - h) * k;
                        l += (v.y - l) * k;
                        m += (v.scaleX - m) * k;
                        r += (v.scaleY - r) * k;
                        s += (v.skewX - s) * k;
                        t += (v.skewY - t) * k;
                        u += (v.alpha - u) * k;
                        v = v.tint; if (16777215 != v || 16777215 != w) { y = (w & 16711680) >> 16; var z = (w & 65280) >> 8,
                                w = w & 255,
                                z = z + ((((v & 65280) >> 8) - z) * k | 0),
                                w = w + (((v & 255) - w) * k | 0),
                                w = y + ((((v & 16711680) >> 16) - y) * k | 0) << 16 | z << 8 | w } } k = p.instance(f.symbol, yd);
                    null != k && (m *=
                        k.scaleX, r *= k.scaleY);
                    k = g.getLocalMatrix();
                    v = Math.sin(s);
                    s = Math.cos(s);
                    y = Math.sin(t);
                    t = Math.cos(t);
                    k.set(t * m, y * m, -v * r, s * r, h, l);
                    k.translate(-f.pivotX, -f.pivotY);
                    g.alpha.set__(u);
                    g.setTint(w);
                    null == f.blendMode && null == g.get_blendMode() || g.set_blendMode(f.blendMode)
                }
            }
            if (0 != c)
                for (1 == c ? e = -1 : 2 == c && 0 <= this.$PL && d[this.$PL].index == a && (e = this.$PL - 1), a = this.$OL, c = e, e = this.$PL; c < e;)
                    if (f = c++, this.$VL(d[f + 1], b), this.$OL != a) return !0;
            return !1
        },
        $ZL: function(a) {
            for (var b = 0, c = this.$eL; b < c.length;) { var d = c[b];++b;
                d.$ZL(a) }
            if (null !=
                this.$dL)
                for (b = 0, c = this.$dL; b < c.length;) d = c[b], ++b, d.set_pixelSnapping(a)
        },
        $zK: function() { for (var a = 0, b = this.$eL; a < b.length;) { var c = b[a];++a;
                c.$zK() } this.$NL = !0;
            this.$PL = -1; if (null != this.$dL)
                for (a = 0, b = this.$dL.length; a < b;) { var c = a++,
                        d = p.instance(this.$dL[c], Fb);
                    null != d && d.$zK(this.$QL.keyframes[c]) } },
        __class__: Vc
    };
    var Hf = function(a, b) { this.layer = a;
        this.keyframe = b };
    h["kit.movie.FrameEvent"] = Hf;
    Hf.__name__ = ["kit", "movie", "FrameEvent"];
    Hf.prototype = { __class__: Hf };
    var Uc = function(a, b) {
        this.$mF = b.id;
        this.frameRate =
            a.frameRate;
        this.frames = 0;
        this.layers = Array(b.layers.length);
        for (var c = 0, d = this.layers.length; c < d;) { var e = c++,
                f = new If(a, b.layers[e]);
            this.frames = Math.max(f.frames, this.frames);
            this.layers[e] = f } this.duration = this.frames / this.frameRate;
        this.button = !0 == b.button
    };
    h["kit.movie.MovieSymbol"] = Uc;
    Uc.__name__ = ["kit", "movie", "MovieSymbol"];
    Uc.__interfaces__ = [xd];
    Uc.prototype = { createSprite: function() { return new Fb(this) }, __class__: Uc };
    var If = function(a, b) {
        this.mask = !1;
        this.childLayers = [];
        this.empty = !0;
        this.name =
            b.name;
        var c = null;
        this.keyframes = Array(b.keyframes.length);
        for (var d = 0, e = this.keyframes.length; d < e;) { var f = d++,
                c = new nh(a, b.keyframes[f], c);
            this.keyframes[f] = c;
            this.empty = this.empty && null == c.$hL } this.frames = null != c ? c.index + c.duration : 0;
        null != b.mask && (this.mask = b.mask);
        if (null != b.childLayers)
            for (c = 0, d = b.childLayers; c < d.length;) e = d[c], ++c, e = new If(a, e), e.frames > this.frames && (this.frames = e.frames), this.childLayers.push(e)
    };
    h["kit.movie.MovieLayer"] = If;
    If.__name__ = ["kit", "movie", "MovieLayer"];
    If.prototype = { __class__: If };
    var Ma = h["kit.movie.PlayMode"] = { __ename__: ["kit", "movie", "PlayMode"], __constructs__: ["Loop", "PlayOnce", "SingleFrame"] };
    Ma.Loop = ["Loop", 0];
    Ma.Loop.toString = l;
    Ma.Loop.__enum__ = Ma;
    Ma.PlayOnce = ["PlayOnce", 1];
    Ma.PlayOnce.toString = l;
    Ma.PlayOnce.__enum__ = Ma;
    Ma.SingleFrame = ["SingleFrame", 2];
    Ma.SingleFrame.toString = l;
    Ma.SingleFrame.__enum__ = Ma;
    var nh = function(a, b, c) {
        this.actions = this.sound = null;
        this.firstFrame = 0;
        this.playMode = Ma.Loop;
        this.blendMode = null;
        this.ease = 0;
        this.visible = this.tweened = !0;
        this.tint = 16777215;
        this.alpha = 1;
        this.skewX = this.skewY = this.pivotX = this.pivotY = 0;
        this.scaleX = this.scaleY = 1;
        this.x = this.y = 0;
        this.symbol = this.instanceName = null;
        this.index = null != c ? c.index + c.duration : 0;
        this.duration = b.duration;
        this.label = b.label;
        this.$hL = b.ref;
        c = b.loc;
        null != c && (this.x = c[0], this.y = c[1]);
        c = b.scale;
        null != c && (this.scaleX = c[0], this.scaleY = c[1]);
        c = b.skew;
        null != c && (this.skewX = c[0], this.skewY = c[1]);
        c = b.pivot;
        null != c && (this.pivotX = c[0], this.pivotY = c[1]);
        null != b.alpha && (this.alpha = b.alpha);
        null !=
            b.tint && (this.tint = b.tint);
        null != b.visible && (this.visible = b.visible);
        null != b.tweened && (this.tweened = b.tweened);
        null != b.ease && (this.ease = b.ease);
        if (null != b.blendMode)
            if (c = b.blendMode, null != c) switch (c) {
                case "add":
                    this.blendMode = da.Add; break;
                case "multiply":
                    this.blendMode = da.Multiply; break;
                case "screen":
                    this.blendMode = da.Screen; break;
                case "layer":
                    this.blendMode = da.Mask; break;
                default:
                    this.blendMode = null } else this.blendMode = null;
        null != b.firstFrame && (this.firstFrame = b.firstFrame);
        if (null != b.playMode)
            if (c =
                b.playMode, null != c) switch (c) {
                case "stop":
                    this.playMode = Ma.SingleFrame; break;
                case "once":
                    this.playMode = Ma.PlayOnce; break;
                default:
                    this.playMode = Ma.Loop } else this.playMode = Ma.Loop;
        null != b.actions && (this.actions = b.actions);
        null != b.sound && (this.sound = a.sounds.get(b.sound));
        null != b.refName && (this.instanceName = b.refName)
    };
    h["kit.movie.MovieKeyframe"] = nh;
    nh.__name__ = ["kit", "movie", "MovieKeyframe"];
    nh.prototype = { $jL: function(a) { this.symbol = a }, __class__: nh };
    var mh = function(a, b) { this.name = a;
        this.sound = b };
    h["kit.movie.SoundSymbol"] =
        mh;
    mh.__name__ = ["kit", "movie", "SoundSymbol"];
    mh.prototype = { __class__: mh };
    var ea = function(a) {
        this.$mL = this.$nL = 0;
        this.enabled = !0;
        this.numParticles = 0;
        B.call(this);
        this.texture = a.texture;
        this.set_blendMode(a.blendMode);
        this.type = a.type;
        this.alphaEnd = new D(a.alphaEnd);
        this.alphaEndVariance = new D(a.alphaEndVariance);
        this.alphaStart = new D(a.alphaStart);
        this.alphaStartVariance = new D(a.alphaStartVariance);
        this.angle = new D(a.angle);
        this.angleVariance = new D(a.angleVariance);
        this.complete = new mb;
        this.duration =
            a.duration;
        this.emitXVariance = new D(a.emitXVariance);
        this.emitYVariance = new D(a.emitYVariance);
        this.gravityX = new D(a.gravityX);
        this.gravityY = new D(a.gravityY);
        this.maxRadius = new D(a.maxRadius);
        this.maxRadiusVariance = new D(a.maxRadiusVariance);
        this.minRadius = new D(a.minRadius);
        this.lifespan = new D(a.lifespan);
        this.lifespanVariance = new D(a.lifespanVariance);
        this.radialAccel = new D(a.radialAccel);
        this.radialAccelVariance = new D(a.radialAccelVariance);
        this.rotatePerSecond = new D(a.rotatePerSecond);
        this.rotatePerSecondVariance =
            new D(a.rotatePerSecondVariance);
        this.rotationEnd = new D(a.rotationEnd);
        this.rotationEndVariance = new D(a.rotationEndVariance);
        this.rotationStart = new D(a.rotationStart);
        this.rotationStartVariance = new D(a.rotationStartVariance);
        this.sizeEnd = new D(a.sizeEnd);
        this.sizeEndVariance = new D(a.sizeEndVariance);
        this.sizeStart = new D(a.sizeStart);
        this.sizeStartVariance = new D(a.sizeStartVariance);
        this.speed = new D(a.speed);
        this.speedVariance = new D(a.speedVariance);
        this.tangentialAccel = new D(a.tangentialAccel);
        this.tangentialAccelVariance =
            new D(a.tangentialAccelVariance);
        this.redStart = new D(a.redStart);
        this.redStartVariance = new D(a.redStartVariance);
        this.redEnd = new D(a.redEnd);
        this.redEndVariance = new D(a.redEndVariance);
        this.greenStart = new D(a.greenStart);
        this.greenStartVariance = new D(a.greenStartVariance);
        this.greenEnd = new D(a.greenEnd);
        this.greenEndVariance = new D(a.greenEndVariance);
        this.blueStart = new D(a.blueStart);
        this.blueStartVariance = new D(a.blueStartVariance);
        this.blueEnd = new D(a.blueEnd);
        this.blueEndVariance = new D(a.blueEndVariance);
        this.emitX = new D(0);
        this.emitY = new D(0);
        this.$lL = Array(a.maxParticles);
        a = 0;
        for (var b = this.$lL.length; a < b;) this.$lL[a] = new oh, ++a
    };
    h["kit.particle.EmitterSprite"] = ea;
    ea.__name__ = ["kit", "particle", "EmitterSprite"];
    ea.$oL = function(a, b) { 0 != b && (a += b * (2 * Math.random() - 1)); return a };
    ea.__super__ = B;
    ea.prototype = m(B.prototype, {
        restart: function() { this.enabled = !0;
            this.$nL = 0 },
        onUpdate: function(a) {
            B.prototype.onUpdate.call(this, a);
            this.alphaEnd.update(a);
            this.alphaEndVariance.update(a);
            this.alphaStart.update(a);
            this.alphaStartVariance.update(a);
            this.angle.update(a);
            this.angleVariance.update(a);
            this.emitX.update(a);
            this.emitXVariance.update(a);
            this.emitY.update(a);
            this.emitYVariance.update(a);
            this.gravityX.update(a);
            this.gravityY.update(a);
            this.lifespan.update(a);
            this.lifespanVariance.update(a);
            this.maxRadius.update(a);
            this.maxRadiusVariance.update(a);
            this.minRadius.update(a);
            this.radialAccel.update(a);
            this.radialAccelVariance.update(a);
            this.rotatePerSecond.update(a);
            this.rotatePerSecondVariance.update(a);
            this.rotationEnd.update(a);
            this.rotationEndVariance.update(a);
            this.rotationStart.update(a);
            this.rotationStartVariance.update(a);
            this.sizeEnd.update(a);
            this.sizeEndVariance.update(a);
            this.sizeStart.update(a);
            this.sizeStartVariance.update(a);
            this.speed.update(a);
            this.speedVariance.update(a);
            this.tangentialAccel.update(a);
            this.tangentialAccelVariance.update(a);
            this.redStart.update(a);
            this.redStartVariance.update(a);
            this.redEnd.update(a);
            this.redEndVariance.update(a);
            this.greenStart.update(a);
            this.greenStartVariance.update(a);
            this.greenEnd.update(a);
            this.greenEndVariance.update(a);
            this.blueStart.update(a);
            this.blueStartVariance.update(a);
            this.blueEnd.update(a);
            this.blueEndVariance.update(a);
            for (var b = this.type == Rb.Gravity, c = 0; c < this.numParticles;) {
                var d = this.$lL[c];
                if (d.$LM > a) {
                    if (b) { d.$rL += d.$sL * a;
                        d.$tL += d.$uL * a; var e = this.gravityX.$nH,
                            f = -this.gravityY.$nH; if (0 != d.$zL || 0 != d.$$L) var k = d.$rL - d.$pL,
                            g = d.$tL - d.$qL,
                            h = Math.sqrt(k * k + g * g),
                            k = k / h,
                            g = g / h,
                            e = e + k * d.$zL,
                            f = f + g * d.$zL,
                            h = k,
                            e = e + -g * d.$$L,
                            f = f + h * d.$$L;
                        d.$sL += e * a;
                        d.$uL += f * a } else d.$xL +=
                        d.$yL * a, d.$vL += d.$wL * a, e = d.$vL, d.$rL = this.emitX.$nH - Math.cos(d.$xL) * e, d.$tL = this.emitY.$nH - Math.sin(d.$xL) * e, e < this.minRadius.$nH && (d.$LM = 0);
                    d.$_L += d.$AM * a;
                    d.$BM += d.$CM * a;
                    d.$DM += d.$EM * a;
                    d.$FM += d.$GM * a;
                    d.$HM += d.$IM * a;
                    d.$JM += d.$KM * a;
                    d.$LM -= a;
                    ++c
                } else --this.numParticles, c != this.numParticles && (this.$lL[c] = this.$lL[this.numParticles], this.$lL[this.numParticles] = d), this.enabled || 0 != this.numParticles || this.complete.emit()
            }
            if (this.enabled) {
                if (0 < this.duration && (this.$nL += a, this.$nL >= this.duration)) {
                    this.enabled = !1;
                    return
                }
                b = this.lifespan.$nH / this.$lL.length;
                for (this.$mL += a; this.$mL >= b;) this.numParticles < this.$lL.length && this.$kL(this.$lL[this.numParticles]) && ++this.numParticles, this.$mL -= b
            }
        },
        draw: function(a) {
            for (var b = -this.texture.get_width() / 2, c = 0, d = this.numParticles; c < d;) {
                var e = this.$lL[c];
                a.save();
                a.translate(e.$rL, e.$tL);
                1 > e.$DM && a.multiplyAlpha(e.$DM);
                1 == e.$FM && 1 == e.$HM && 1 == e.$JM || a.tint(e.$FM, e.$HM, e.$JM);
                0 != e.$BM && a.rotate(e.$BM);
                1 != e.$_L && a.scale(e.$_L, e.$_L);
                a.drawTexture(this.texture, b, b);
                a.restore();
                ++c
            }
        },
        $kL: function(a) {
            a.$LM = ea.$oL(this.lifespan.$nH, this.lifespanVariance.$nH);
            if (0 >= a.$LM) return !1;
            a.$pL = this.emitX.$nH;
            a.$qL = this.emitY.$nH;
            var b = -xa.toRadians(ea.$oL(this.angle.$nH, this.angleVariance.$nH)),
                c = ea.$oL(this.speed.$nH, this.speedVariance.$nH);
            a.$sL = c * Math.cos(b);
            a.$uL = c * Math.sin(b);
            a.$zL = ea.$oL(this.radialAccel.$nH, this.radialAccelVariance.$nH);
            a.$$L = ea.$oL(this.tangentialAccel.$nH, this.tangentialAccelVariance.$nH);
            a.$vL = ea.$oL(this.maxRadius.$nH, this.maxRadiusVariance.$nH);
            a.$wL = -a.$vL /
                a.$LM;
            a.$xL = b;
            a.$yL = xa.toRadians(ea.$oL(this.rotatePerSecond.$nH, this.rotatePerSecondVariance.$nH));
            this.type == Rb.Gravity ? (a.$rL = ea.$oL(this.emitX.$nH, this.emitXVariance.$nH), a.$tL = ea.$oL(this.emitY.$nH, this.emitYVariance.$nH)) : (b = a.$vL, a.$rL = this.emitX.$nH - Math.cos(a.$xL) * b, a.$tL = this.emitY.$nH - Math.sin(a.$xL) * b);
            c = this.texture.get_width();
            b = ea.$oL(this.sizeStart.$nH, this.sizeStartVariance.$nH) / c;
            c = ea.$oL(this.sizeEnd.$nH, this.sizeEndVariance.$nH) / c;
            a.$_L = b;
            a.$AM = (c - b) / a.$LM;
            b = ea.$oL(this.rotationStart.$nH,
                this.rotationStartVariance.$nH);
            c = ea.$oL(this.rotationEnd.$nH, this.rotationEndVariance.$nH);
            a.$BM = b;
            a.$CM = (c - b) / a.$LM;
            b = ea.$oL(this.alphaStart.$nH, this.alphaStartVariance.$nH);
            c = ea.$oL(this.alphaEnd.$nH, this.alphaEndVariance.$nH);
            a.$DM = b;
            a.$EM = (c - b) / a.$LM;
            b = ea.$oL(this.redStart.$nH, this.redStartVariance.$nH);
            c = ea.$oL(this.redEnd.$nH, this.redEndVariance.$nH);
            a.$FM = b;
            a.$GM = (c - b) / a.$LM;
            b = ea.$oL(this.greenStart.$nH, this.greenStartVariance.$nH);
            c = ea.$oL(this.greenEnd.$nH, this.greenEndVariance.$nH);
            a.$HM =
                b;
            a.$IM = (c - b) / a.$LM;
            b = ea.$oL(this.blueStart.$nH, this.blueStartVariance.$nH);
            c = ea.$oL(this.blueEnd.$nH, this.blueEndVariance.$nH);
            a.$JM = b;
            a.$KM = (c - b) / a.$LM;
            return !0
        },
        __class__: ea
    });
    var oh = function() { this.$pL = this.$qL = this.$rL = this.$sL = this.$tL = this.$uL = this.$vL = this.$wL = this.$xL = this.$yL = this.$zL = this.$$L = this.$_L = this.$AM = this.$BM = this.$CM = this.$DM = this.$EM = this.$FM = this.$GM = this.$HM = this.$IM = this.$JM = this.$KM = this.$LM = 0 };
    h.$CDB = oh;
    oh.__name__ = ["$CDB"];
    oh.prototype = { __class__: oh };
    var Rb = h["kit.particle.EmitterType"] = { __ename__: ["kit", "particle", "EmitterType"], __constructs__: ["Gravity", "Radial"] };
    Rb.Gravity = ["Gravity", 0];
    Rb.Gravity.toString = l;
    Rb.Gravity.__enum__ = Rb;
    Rb.Radial = ["Radial", 1];
    Rb.Radial.toString = l;
    Rb.Radial.__enum__ = Rb;
    var O = function(a, b) {
        this.$hI = a.getFile(b + ".pex");
        for (var c = this.$hI.toXml(), d = 0, e = 0, f = b.lastIndexOf("/"), f = 0 <= f ? E.substr(b, 0, f + 1) : "", c = c.firstElement().elements(); c.hasNext();) {
            var k = c.next(),
                g = void 0;
            if (k.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + k.nodeType);
            g = k.nodeName;
            switch (g.toLowerCase()) {
                case "texture":
                    this.texture = a.getTexture(f + Ha.removeFileExtension(k.get("name")));
                    break;
                case "angle":
                    this.angle = O.$MM(k, "value");
                    break;
                case "anglevariance":
                    this.angleVariance = O.$MM(k, "value");
                    break;
                case "blendfuncdestination":
                    e = p["int"](O.$MM(k, "value"));
                    break;
                case "blendfuncsource":
                    d = p["int"](O.$MM(k, "value"));
                    break;
                case "duration":
                    this.duration = O.$MM(k, "value");
                    break;
                case "emittertype":
                    0 == p["int"](O.$MM(k, "value")) ? this.type = Rb.Gravity : this.type = Rb.Radial;
                    break;
                case "finishcolor":
                    this.alphaEnd = O.$MM(k, "alpha");
                    this.redEnd = O.$MM(k, "red");
                    this.greenEnd = O.$MM(k, "green");
                    this.blueEnd = O.$MM(k, "blue");
                    break;
                case "finishcolorvariance":
                    this.alphaEndVariance = O.$MM(k, "alpha");
                    this.redEndVariance = O.$MM(k, "red");
                    this.greenEndVariance = O.$MM(k, "green");
                    this.blueEndVariance = O.$MM(k, "blue");
                    break;
                case "finishparticlesize":
                    this.sizeEnd = O.$MM(k, "value");
                    break;
                case "finishparticlesizevariance":
                    this.sizeEndVariance = O.$MM(k, "value");
                    break;
                case "gravity":
                    this.gravityX = O.$MM(k,
                        "x");
                    this.gravityY = O.$MM(k, "y");
                    break;
                case "maxparticles":
                    this.maxParticles = p["int"](O.$MM(k, "value"));
                    break;
                case "maxradius":
                    this.maxRadius = O.$MM(k, "value");
                    break;
                case "maxradiusvariance":
                    this.maxRadiusVariance = O.$MM(k, "value");
                    break;
                case "minradius":
                    this.minRadius = O.$MM(k, "value");
                    break;
                case "particlelifespan":
                    this.lifespan = O.$MM(k, "value");
                    break;
                case "particlelifespanvariance":
                    this.lifespanVariance = O.$MM(k, "value");
                    break;
                case "radialaccelvariance":
                    this.radialAccelVariance = O.$MM(k, "value");
                    break;
                case "radialacceleration":
                    this.radialAccel = O.$MM(k, "value");
                    break;
                case "rotatepersecond":
                    this.rotatePerSecond = O.$MM(k, "value");
                    break;
                case "rotatepersecondvariance":
                    this.rotatePerSecondVariance = O.$MM(k, "value");
                    break;
                case "rotationend":
                    this.rotationEnd = O.$MM(k, "value");
                    break;
                case "rotationendvariance":
                    this.rotationEndVariance = O.$MM(k, "value");
                    break;
                case "rotationstart":
                    this.rotationStart = O.$MM(k, "value");
                    break;
                case "rotationstartvariance":
                    this.rotationStartVariance = O.$MM(k, "value");
                    break;
                case "sourcepositionvariance":
                    this.emitXVariance =
                        O.$MM(k, "x");
                    this.emitYVariance = O.$MM(k, "y");
                    break;
                case "speed":
                    this.speed = O.$MM(k, "value");
                    break;
                case "speedvariance":
                    this.speedVariance = O.$MM(k, "value");
                    break;
                case "startcolor":
                    this.alphaStart = O.$MM(k, "alpha");
                    this.redStart = O.$MM(k, "red");
                    this.greenStart = O.$MM(k, "green");
                    this.blueStart = O.$MM(k, "blue");
                    break;
                case "startcolorvariance":
                    this.alphaStartVariance = O.$MM(k, "alpha");
                    this.redStartVariance = O.$MM(k, "red");
                    this.greenStartVariance = O.$MM(k, "green");
                    this.blueStartVariance = O.$MM(k, "blue");
                    break;
                case "startparticlesize":
                    this.sizeStart = O.$MM(k, "value");
                    break;
                case "startparticlesizevariance":
                    this.sizeStartVariance = O.$MM(k, "value");
                    break;
                case "tangentialaccelvariance":
                    this.tangentialAccelVariance = O.$MM(k, "value");
                    break;
                case "tangentialacceleration":
                    this.tangentialAccel = O.$MM(k, "value")
            }
        }
        0 >= this.lifespan && (this.lifespan = this.duration);
        1 == d && 1 == e ? this.blendMode = da.Add : 1 == d && 771 == e ? this.blendMode = null : 0 == d && 0 == e || null
    };
    h["kit.particle.ParticleSystem"] = O;
    O.__name__ = ["kit", "particle", "ParticleSystem"];
    O.$MM = function(a, b) { return p.parseFloat(a.get(b)) };
    O.prototype = { createEmitter: function() { return new ea(this) }, __class__: O };
    var ie = function(a) { this.$SM = null;
        this.$QM = this.$RM = 0;
        this.postSolve = new Zb;
        this.preSolve = new Zb;
        this.endContact = new ka;
        this.beginContact = new ka;
        this.velocityIterations = 8;
        this.positionIterations = 3;
        this.scale = 50;
        C.call(this);
        null == a && (a = new Da(new w(0, 10), !0));
        this.world = a };
    h["kit.physics.Box2D"] = ie;
    ie.__name__ = ["kit", "physics", "Box2D"];
    ie.__super__ = C;
    ie.prototype = m(C.prototype, {
        get_entitySlot: function() { return 7 },
        onStart: function() { this.world.setContactListener(new Jf(this)) },
        onStop: function() { this.world.$ED.$dC = cc.defaultListener },
        toMeters: function(a) { return a / this.scale },
        createPhysics: function(a) { null == a && (a = new id, a.type = 2);
            a = new gb(this, this.world.createBody(a)); return a.body.$SC = a },
        createObject: function(a) { var b = this.createPhysics();
            b.body.setPositionAndAngle(new w(a.x / this.scale, a.y / this.scale), 3.141592653589793 * a.rotation / 180);
            this.$OM(b.body, a, a); return b },
        $OM: function(a,
            b, c) {
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
                    f = new w(f + d, k + e);
                    k = new Ib;
                    k.shape = Fa.asOrientedBox(d, e, f);
                    a.createFixture(k);
                    break;
                case 1:
                    d = this.toMeters(Math.max(d * b.width, e * b.height) / 2);
                    e = new Lc(d);
                    e.$ZB.set(f + d, k + d);
                    f = new Ib;
                    f.shape = e;
                    a.createFixture(f);
                    break;
                case 2:
                    c = [];
                    var g = 0;
                    for (b = b.points; g < b.length;) { var h = b[g];++g;
                        c.push(new w(f + h.x / this.scale * d, k + h.y / this.scale * e)) } f = new Ib;
                    f.shape = Fa.asArray(c);
                    a.createFixture(f);
                    break;
                case 3:
                    c = 0;
                    for (g = b.points.length - 1; c < g;) { var l = c++,
                            h = b.points[l],
                            l = b.points[l + 1],
                            h = new w(f + h.x / this.scale * d, k + h.y / this.scale * e),
                            l = new w(f + l.x / this.scale * d, k + l.y / this.scale * e),
                            m = new Ib;
                        m.shape = Fa.asEdge(h, l);
                        a.createFixture(m) }
                    break;
                case 4:
                    if (b = b.tile, 0 < b.collision.length)
                        for (f = 0, k = b.collision; f < k.length;) e = k[f], ++f, this.$OM(a,
                            e, c);
                    else d *= this.toMeters(b.get_width() / 2), e *= this.toMeters(b.get_height() / 2), f = new w(f + d, k + e), k = new Ib, k.shape = Fa.asOrientedBox(Math.abs(d), Math.abs(e), f), a.createFixture(k)
            }
        },
        $PM: function(a) {
            var b = this,
                c = new id;
            c.awake = !1;
            for (var d = this.createPhysics(c), e = new w, f = new Ib, k = a.scene.tileWidth, g = a.scene.tileHeight, c = a.width, h = a.height, l = 0; l < h;) {
                for (var m = [l++], p = [!1], r = [0], s = function(a, c, h) {
                        return function(l) {
                            if (c[0]) {
                                c[0] = !1;
                                l = 0.5 * (l - a[0]) * k / b.scale;
                                var q = 0.5 * g / b.scale;
                                e.set(a[0] * k / b.scale + l, h[0] *
                                    g / b.scale + q);
                                f.shape = Fa.asOrientedBox(l, q, e);
                                d.body.createFixture(f)
                            }
                        }
                    }(r, p, m), t = 0; t < c;) { var u = t++;
                    null != a.tiles[m[0] * c + u] ? p[0] || (p[0] = !0, r[0] = u) : s(u) } s(c)
            }
            return d
        },
        onUpdate: function(a) {
            for (this.$QM = xa.min(this.$QM + a, 0.06666666666666667); 0.03333333333333333 <= this.$QM;) { this.$QM -= 0.03333333333333333; if (0.03333333333333333 > this.$QM)
                    for (a = this.world.$GD; null != a;) { var b = p.instance(a.$SC, gb);
                        null != b && b.$VM();
                        a = a.$CC } this.world.step(0.03333333333333333, this.positionIterations, this.velocityIterations) } this.$RM =
                this.$QM / 0.03333333333333333;
            this.world.clearForces();
            if (null != this.$SM) { a = 0; for (b = this.$SM; a < b.length;) { var c = b[a];++a;
                    c() } this.$SM = null }
        },
        defer: function(a) { if (0 == (this.world.$uB & 2)) return a(), !1;
            null == this.$SM ? this.$SM = [a] : this.$SM.push(a); return !0 },
        __class__: ie
    });
    var Jf = function(a) { this.$UM = a };
    h.$CEB = Jf;
    Jf.__name__ = ["$CEB"];
    Jf.__super__ = cc;
    Jf.prototype = m(cc.prototype, {
        beginContact: function(a) {
            var b = p.instance(a.$ZD.$kC.$SC, gb);
            null != b && null != b.$WM && b.$WM.emit(a);
            b = p.instance(a.$aD.$kC.$SC, gb);
            null != b && null != b.$WM && b.$WM.emit(a);
            this.$UM.beginContact.emit(a)
        },
        endContact: function(a) { var b = p.instance(a.$ZD.$kC.$SC, gb);
            null != b && null != b.$XM && b.$XM.emit(a);
            b = p.instance(a.$aD.$kC.$SC, gb);
            null != b && null != b.$XM && b.$XM.emit(a);
            this.$UM.endContact.emit(a) },
        preSolve: function(a, b) { var c = p.instance(a.$ZD.$kC.$SC, gb);
            null != c && null != c.$YM && c.$YM.emit(a, b);
            c = p.instance(a.$aD.$kC.$SC, gb);
            null != c && null != c.$YM && c.$YM.emit(a, b);
            this.$UM.preSolve.emit(a, b) },
        postSolve: function(a, b) {
            var c = p.instance(a.$ZD.$kC.$SC,
                gb);
            null != c && null != c.$ZM && c.$ZM.emit(a, b);
            c = p.instance(a.$aD.$kC.$SC, gb);
            null != c && null != c.$ZM && c.$ZM.emit(a, b);
            this.$UM.postSolve.emit(a, b)
        },
        __class__: Jf
    });
    var gb = function(a, b) { this.$aM = this.$bM = this.$cM = 0;
        this.$WM = this.$XM = this.$YM = this.$ZM = null;
        C.call(this);
        this.box2d = a;
        this.body = b };
    h["kit.physics.PhysicsBody"] = gb;
    gb.__name__ = ["kit", "physics", "PhysicsBody"];
    gb.__super__ = C;
    gb.prototype = m(C.prototype, {
        get_entitySlot: function() { return 6 },
        onUpdate: function(a) {
            if (34 == (this.body.$uB & 34) && (a = this.owner.$KH[3],
                    null != a)) { var b = this.box2d.scale,
                    c = this.body.$wB.position,
                    d = c.x,
                    c = c.y,
                    e = this.body.$xB.a; if (0 != this.body.$FB) var f = this.box2d.$RM,
                    k = 1 - f,
                    d = d * f + this.$aM * k,
                    c = c * f + this.$bM * k,
                    e = e * f + this.$cM * k;
                a.x.set__(b * d);
                a.y.set__(b * c);
                a.rotation.set__(180 * e / 3.141592653589793) }
        },
        onAdded: function() { var a = this.owner.$KH[3]; if (null != a) { var b = this.body.$wB.position;
                b.x = a.x.$nH / this.box2d.scale;
                b.y = a.y.$nH / this.box2d.scale;
                this.body.setPositionAndAngle(b, 3.141592653589793 * a.rotation.$nH / 180) } this.$VM() },
        dispose: function() {
            var a =
                this;
            C.prototype.dispose.call(this);
            this.body.$SC = null;
            var b = this.body;
            this.body = null;
            this.box2d.defer(function() { a.box2d.world.destroyBody(b) })
        },
        $VM: function() { if (0 != this.body.$FB) { var a = this.body.$wB.position;
                this.$aM = a.x;
                this.$bM = a.y;
                this.$cM = this.body.$xB.a } },
        get_beginContact: function() { null == this.$WM && (this.$WM = new ka); return this.$WM },
        get_endContact: function() { null == this.$XM && (this.$XM = new ka); return this.$XM },
        get_preSolve: function() { null == this.$YM && (this.$YM = new Zb); return this.$YM },
        __class__: gb,
        __properties__: m(C.prototype.__properties__, { get_preSolve: "get_preSolve", get_endContact: "get_endContact", get_beginContact: "get_beginContact" })
    });
    var Ea = function() { this.$iM = !1 };
    h.$CFB = Ea;
    Ea.__name__ = ["$CFB"];
    Ea.__interfaces__ = [kc];
    Ea.prototype = { dispose: function() { this.$iM || (this.$iM = !0, this.$gM()) }, $gM: function() { null }, __class__: Ea };
    var zc = function(a, b) {
        this.$vM = 0;
        var c = this;
        this.$kM = b;
        this.$EI = a;
        this.$AH = new fa;
        this.$sI = new Kf(b, this);
        this.$uM = new T;
        var d = Tb.array(b);
        if (0 == d.length) this.$qM();
        else {
            for (var e =
                    new T, f = 0; f < d.length;) { var k = d[f];++f; var g = e.get(k.name);
                null == g && (g = [], e.set(k.name, g));
                g.push(k) } this.$tM = Tb.count(e);
            for (d = new Ce(e, e.arrayKeys()); d.hasNext();) e = [d.next()], this.$lM(e[0], function(a) { return function(d) { if (null != d) { var e = new Lf(0, d.bytes);
                        c.$uM.set(d.name, e);
                        e = b.getFullURL(d); try { c.$mM(e, d) } catch (f) { f instanceof s && (f = f.val), c.$rM(d, "Unexpected error: " + p.string(f)) } } else d = a[0][0], e = new Lf(0, 0), c.$uM.set(d.name, e), zc.$xM(d.format) ? c.$oM(d, hb.$AO()) : c.$rM(d, "Could not find a supported format to load") } }(e))
        }
    };
    h.$CGB = zc;
    zc.__name__ = ["$CGB"];
    zc.$xM = function(a) { switch (a[1]) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return !0;
            default:
                return !1 } };
    zc.prototype = {
        $lM: function(a, b) { this.$nM(function(c) { for (var d = 0; d < c.length;) { var e = c[d];++d; for (var f = 0; f < a.length;) { var k = a[f];++f; if (k.format == e) { b(k); return } } } b(null) }) },
        $mM: function(a, b) { null },
        $nM: function(a) { null },
        $oM: function(a, b) {
            if (this.$sI.$AN) b.dispose();
            else {
                var c = this.$uM.get(a.name);
                c.$DN = c.$EN;
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
                        d =
                            this.$sI.$yM;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        d = this.$sI.$zM;
                        break;
                    case 13:
                    case 14:
                    case 15:
                        d = this.$sI.$_M;
                        break;
                    case 16:
                        d = this.$sI.$$M
                }
                d.set(a.name, b);
                this.$tM -= 1;
                0 == this.$tM && this.$qM()
            }
        },
        $pM: function(a, b, c) { a = this.$uM.get(a.name);
            0 < c && (a.$EN = c);
            a.$DN = xa.min(b, a.$EN);
            c = b = 0; for (a = this.$uM.iterator(); a.hasNext();) { var d = a.next();
                b += d.$DN;
                c += d.$EN } b = 0 < c ? b / c : 0;
            b != this.$vM && (this.$vM = b, this.$AH.emitProgress(b)) },
        $qM: function() { this.$AH.success(this.$sI) },
        $rM: function(a, b) {
            this.$sI.dispose();
            this.$AH.failure(Ha.withFields(b, ["url", a.url]))
        },
        $sM: function(a) { this.$rM(a, "Failed to create texture. Is the GPU context unavailable?") },
        __class__: zc
    };
    var Kf = function(a, b) { this.$AN = !1;
        this.$_M = new T;
        this.$$M = new T;
        this.$zM = new T;
        this.$yM = new T;
        this.$BN = a };
    h.$CHB = Kf;
    Kf.__name__ = ["$CHB"];
    Kf.__interfaces__ = [qd];
    Kf.prototype = {
        getTexture: function(a, b) { return this.$yM.get(a) },
        getSound: function(a, b) { return this.$zM.get(a) },
        getFile: function(a, b) { return this.$$M.get(a) },
        getVectorFont: function(a, b) { return this.$_M.get(a) },
        dispose: function() { if (!this.$AN) { this.$AN = !0; for (var a = this.$yM.iterator(); a.hasNext();) a.next().dispose();
                this.$yM = null; for (a = this.$zM.iterator(); a.hasNext();) a.next().dispose();
                this.$zM = null; for (a = this.$$M.iterator(); a.hasNext();) a.next().dispose();
                this.$$M = null; for (a = this.$_M.iterator(); a.hasNext();) a.next().dispose();
                this.$_M = null } },
        get_manifest: function() { return this.$BN },
        __class__: Kf,
        __properties__: { get_manifest: "get_manifest" }
    };
    var Lf = function(a, b) { this.$DN = a;
        this.$EN = b };
    h.$CIB = Lf;
    Lf.__name__ = ["$CIB"];
    Lf.prototype = { __class__: Lf };
    var zd = function(a) { this.$iM = !1;
        this.$nI = a };
    h.$CJB = zd;
    zd.__name__ = ["$CJB"];
    zd.__interfaces__ = [Ne];
    zd.__super__ = Ea;
    zd.prototype = m(Ea.prototype, { toString: function() { return this.$nI }, toJson: function() { return JSON.parse(this.toString()) }, toXml: function() { return r.parse(this.toString()) }, $gM: function() { this.$nI = null }, __class__: zd });
    var ph = function() {};
    h["kit.subsystem.KeyboardSystem"] = ph;
    ph.__name__ = ["kit", "subsystem", "KeyboardSystem"];
    ph.prototype = { __class__: ph };
    var Eb =
        function() { this.down = new ka;
            this.up = new ka;
            this.backButton = new mb;
            this.$IN = new eb };
    h.$CKB = Eb;
    Eb.__name__ = ["$CKB"];
    Eb.__interfaces__ = [ph];
    Eb.prototype = { $GN: function(a) { if (16777238 == a) return null != this.backButton.$$H ? (this.backButton.emit(), !0) : !1;
            this.$IN.h.hasOwnProperty(a) || (this.$IN.h[a] = !0, Eb.$JN.$iK(Eb.$JN.id + 1, qh.$CQ(a)), this.down.emit(Eb.$JN)); return !0 }, $HN: function(a) { this.$IN.h.hasOwnProperty(a) && (this.$IN.remove(a), Eb.$JN.$iK(Eb.$JN.id + 1, qh.$CQ(a)), this.up.emit(Eb.$JN)) }, __class__: Eb };
    var rh =
        function() {};
    h["kit.subsystem.MouseSystem"] = rh;
    rh.__name__ = ["kit", "subsystem", "MouseSystem"];
    rh.prototype = { __class__: rh, __properties__: { set_cursor: "set_cursor", get_cursor: "get_cursor" } };
    var $a = function(a) { this.$TH = a;
        this.$kK = Ff.Mouse($a.$JN);
        this.down = new ka;
        this.move = new ka;
        this.up = new ka;
        this.scroll = new ka;
        this.$NJ = this.$MJ = 0;
        this.$MN = La.Default;
        this.$NN = new eb };
    h.$CLB = $a;
    $a.__name__ = ["$CLB"];
    $a.__interfaces__ = [rh];
    $a.prototype = {
        get_cursor: function() { return this.$MN },
        set_cursor: function(a) {
            return this.$MN =
                a
        },
        $GN: function(a, b, c) { this.$NN.h.hasOwnProperty(c) || (this.$NN.h[c] = !0, this.$VK(a, b, sh.$VQ(c)), this.$TH.$GN(a, b, this.$kK), this.down.emit($a.$JN)) },
        $KN: function(a, b) { this.$VK(a, b, null);
            this.$TH.$KN(a, b, this.$kK);
            this.move.emit($a.$JN) },
        $HN: function(a, b, c) { this.$NN.h.hasOwnProperty(c) && (this.$NN.remove(c), this.$VK(a, b, sh.$VQ(c)), this.$TH.$HN(a, b, this.$kK), this.up.emit($a.$JN)) },
        $LN: function(a, b, c) { this.$MJ = a;
            this.$NJ = b; if (null == this.scroll.$$H) return !1;
            this.scroll.emit(c); return !0 },
        $VK: function(a, b,
            c) { this.$MJ = a;
            this.$NJ = b;
            $a.$JN.$iK($a.$JN.id + 1, a, b, c) },
        __class__: $a,
        __properties__: { set_cursor: "set_cursor", get_cursor: "get_cursor" }
    };
    var th = function() {};
    h["kit.subsystem.PointerSystem"] = th;
    th.__name__ = ["kit", "subsystem", "PointerSystem"];
    th.prototype = { __class__: th };
    var Oa = function(a, b, c) { null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new ka;
        this.move = new ka;
        this.up = new ka;
        this.$MJ = a;
        this.$NJ = b;
        this.$ON = c };
    h.$CMB = Oa;
    Oa.__name__ = ["$CMB"];
    Oa.__interfaces__ = [th];
    Oa.prototype = {
        $GN: function(a,
            b, c) { if (!this.$ON) { this.$KN(a, b, c);
                this.$ON = !0; var d = [],
                    e = B.hitTest(t.root, a, b); if (null != e) { var f = e.owner;
                    do { var k = f.$KH[3];
                        null != k && d.push(k);
                        f = f.parent } while (null != f) } this.$VK(a, b, e, c); for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.$_F(Oa.$JN), Oa.$JN.$jK) return;
                this.down.emit(Oa.$JN) } },
        $KN: function(a, b, c) {
            if (a != this.$MJ || b != this.$NJ) {
                var d = [],
                    e = B.hitTest(t.root, a, b);
                if (null != e) { var f = e.owner;
                    do { var k = f.$KH[3];
                        null != k && d.push(k);
                        f = f.parent } while (null != f) } this.$VK(a, b, e, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a,
                        b.$AG(Oa.$JN), Oa.$JN.$jK) return;
                this.move.emit(Oa.$JN)
            }
        },
        $HN: function(a, b, c) { if (this.$ON) { this.$KN(a, b, c);
                this.$ON = !1; var d = [],
                    e = B.hitTest(t.root, a, b); if (null != e) { var f = e.owner;
                    do { var k = f.$KH[3];
                        null != k && d.push(k);
                        f = f.parent } while (null != f) } this.$VK(a, b, e, c); for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.$CG(Oa.$JN), Oa.$JN.$jK) return;
                this.up.emit(Oa.$JN) } },
        $VK: function(a, b, c, d) { this.$MJ = a;
            this.$NJ = b;
            Oa.$JN.$iK(Oa.$JN.id + 1, a, b, c, d) },
        __class__: Oa
    };
    var Th = function() {};
    h.$CNB = Th;
    Th.__name__ = ["$CNB"];
    Th.__interfaces__ = [Sh];
    var Sb = function(a, b, c) { this.$MJ = this.$NJ = 0;
        this.$SN = null;
        this.$QN = this.$RN = 0;
        this.$iM = !1;
        this.$PN = a;
        this.$bJ = b;
        this.$cJ = c };
    h.$COB = Sb;
    Sb.__name__ = ["$COB"];
    Sb.__interfaces__ = [Th];
    Sb.__super__ = Ea;
    Sb.prototype = m(Ea.prototype, {
        subTexture: function(a, b, c, d) { c = this.$PN.createTexture(c, d);
            c.$SN = this;
            c.$MJ = a;
            c.$NJ = b;
            c.$QN = this.$QN + a;
            c.$RN = this.$RN + b; return c },
        get_graphics: function() { return this.$PN.getGraphics() },
        $gM: function() { null == this.$SN && this.$PN.dispose() },
        get_width: function() { return this.$bJ },
        get_height: function() { return this.$cJ },
        __class__: Sb,
        __properties__: { get_height: "get_height", get_width: "get_width", get_graphics: "get_graphics" }
    });
    var Mf = function() {};
    h["kit.subsystem.TouchSystem"] = Mf;
    Mf.__name__ = ["kit", "subsystem", "TouchSystem"];
    Mf.prototype = { __class__: Mf, __properties__: { get_supported: "get_supported" } };
    var Ie = function(a, b) { null == b && (b = 4);
        this.$TH = a;
        this.$UN = b;
        this.$VN = new eb;
        this.$lJ = [];
        this.down = new ka;
        this.move = new ka;
        this.up = new ka };
    h.$CPB = Ie;
    Ie.__name__ = ["$CPB"];
    Ie.__interfaces__ = [Mf];
    Ie.prototype = {
        get_supported: function() { return !0 },
        $GN: function(a, b, c) { if (!this.$VN.h.hasOwnProperty(a)) { var d = new kh(a);
                d.$iK(b, c);
                this.$VN.h[a] = d;
                this.$lJ.push(d);
                null == this.$TN && (this.$TN = d, this.$TH.$GN(b, c, d.$kK));
                this.down.emit(d) } },
        $KN: function(a, b, c) { a = this.$VN.h[a];
            null != a && (a.$iK(b, c), this.$TN == a && this.$TH.$KN(b, c, a.$kK), this.move.emit(a)) },
        $HN: function(a, b, c) {
            var d = this.$VN.h[a];
            null != d && (d.$iK(b, c), this.$VN.remove(a), E.remove(this.$lJ, d), this.$TN == d && (this.$TN = null, this.$TH.$HN(b, c,
                d.$kK)), this.up.emit(d))
        },
        __class__: Ie,
        __properties__: { get_supported: "get_supported" }
    };
    var Uh = function() {};
    h.$CQB = Uh;
    Uh.__name__ = ["$CQB"];
    Uh.$WN = function() { t.$CI().then(function(a) { try { t.$EI.getExternal().call("console.info", ["Built with 2DKit, http://2dkit.com"]) } catch (b) { b instanceof s && (b = b.val) } a = new Rd;
            t.root.add(a) }) };
    var oa = function() {};
    h.$CRB = oa;
    oa.__name__ = ["$CRB"];
    oa.$aN = function(a) { var b = De.getType(oa).injected[0]; return P.field(b, a) };
    oa.$bN = function() {
        switch (oa.$aN("orientation")) {
            case "landscape":
                return Qb.Landscape;
            case "portrait":
                return Qb.Portrait
        }
        return null
    };
    var Nf = function() { this.$tN = new Lb;
        this.$sN = 0;
        this.$qN = this.$rN = null;
        this.$pN = Infinity;
        this.$oN = 0 };
    h.$CSB = Nf;
    Nf.__name__ = ["$CSB"];
    Nf.__interfaces__ = [lb];
    Nf.prototype = {
        $eN: function(a) { this.$pN = a;
            this.$nN(!0); return this },
        $fN: function(a) { this.$qN = a; return this },
        $gN: function(a) { this.$rN = a; return this },
        $hN: function(a, b, c) {
            null == c && (c = !0);
            this.$lN(a);
            var d;
            d = null != this.$rN ? this.$rN(a, b) : 1;
            this.$oN += d;
            this.$nN(c);
            b = new uh(a, b);
            b.$vN = ++this.$sN;
            b.$cN = d;
            this.$tN.set(a,
                b)
        },
        $aN: function(a) { a = this.$tN.h[a.__id__]; if (null == a) return null;
            a.$vN = ++this.$sN; return a.$uN },
        $iN: function() { var a = this.$kN(!0); return null != a ? a.$KK : null },
        $kN: function(a) { for (var b = null, c = this.$tN.iterator(); c.hasNext();) { var d = c.next(); if (null == b || d.$vN < b.$vN == a) b = d } return b },
        $lN: function(a, b) { null == b && (b = !0); var c = this.$tN.h[a.__id__]; if (null == c) return null;
            null != this.$qN && b && this.$qN(a, c.$uN);
            this.$tN.remove(a);
            this.$oN -= c.$cN; return c.$uN },
        $mN: function(a) {
            null == a && (a = !0);
            var b = this.$tN;
            this.$tN =
                new Lb;
            this.$oN = 0;
            if (null != this.$qN && a)
                for (a = b.iterator(); a.hasNext();) b = a.next(), this.$qN(b.$KK, b.$uN)
        },
        dispose: function() { this.$mN() },
        $nN: function(a) { for (; this.$oN > this.$pN;) { var b = this.$kN(a); if (null != b) null != this.$qN && this.$qN(b.$KK, b.$uN), this.$tN.remove(b.$KK), this.$oN -= b.$cN;
                else break } },
        __class__: Nf
    };
    var uh = function(a, b) { this.$cN = 1;
        this.$vN = 0;
        this.$KK = a;
        this.$uN = b };
    h.$CTB = uh;
    uh.__name__ = ["$CTB"];
    uh.prototype = { __class__: uh };
    var wc = function() {};
    h.$CVB = wc;
    wc.__name__ = ["$CVB"];
    wc.$$N = function(a,
        b) { var c = a.__rtti; if (null == c) return null;
        c = r.parse(c).firstElement();
        c = (new Ng).processElement(c); switch (c[1]) {
            case 1:
                c = c[2]; if (null != c.superClass) { var d = ca.resolveClass(c.superClass.path);
                    null != d && wc.$$N(d, b) } c = c.fields.h; for (d = null; null != c;) d = void 0, d = c[0], c = c[1], b.set(d.name, d) } return b };
    wc.$gI = function(a, b) {
        switch (a[1]) {
            case 2:
                switch (a[2]) {
                    case "String":
                        return b;
                    case "kit.animation.AnimatedFloat":
                        var c = parseFloat(b);
                        return new D(isNaN(c) ? 0 : c);
                    case "Date":
                        var c = parseFloat(b),
                            d = new Date;
                        d.setTime(c);
                        return d;
                    case "kit.math.Point":
                        return c = new nb, d = b.split(","), 2 <= d.length && (c.x = parseFloat(d[0]), c.y = parseFloat(d[1])), c;
                    case "kit.math.Rectangle":
                        return c = new Ua, d = b.split(","), 4 <= d.length && (c.x = parseFloat(d[0]), c.y = parseFloat(d[1]), c.width = parseFloat(d[2]), c.height = parseFloat(d[3])), c
                }
                break;
            case 7:
                switch (a[2]) {
                    case "Int":
                        return 35 == E.cca(b, 0) && (b = "0x" + E.substr(b, 1, null)), c = p.parseInt(b), null != c ? c : 0;
                    case "Float":
                        return c = parseFloat(b), isNaN(c) ? 0 : c;
                    case "Bool":
                        return "0" != b && "false" != b }
                break;
            case 1:
                if (c =
                    ca.resolveEnum(a[2]), null != c) try { return ca.createEnum(c, b) } catch (e) { e instanceof s && (e = e.val) }
        }
        return null
    };
    var Wc = function() {};
    h["kit.sound.Sound"] = Wc;
    Wc.__name__ = ["kit", "sound", "Sound"];
    Wc.__interfaces__ = [kc];
    Wc.prototype = { __class__: Wc };
    var hb = function() { this.$iM = !1;
        this.$_N = new Of(this) };
    h.$CYB = hb;
    hb.__name__ = ["$CYB"];
    hb.__interfaces__ = [Wc];
    hb.$AO = function() { null == hb.$BO && (hb.$BO = new hb); return hb.$BO };
    hb.__super__ = Ea;
    hb.prototype = m(Ea.prototype, {
        play: function(a) { return this.$_N },
        loop: function(a) { return this.$_N },
        $gM: function() {},
        __class__: hb
    });
    var Xc = function() {};
    h["kit.sound.Playback"] = Xc;
    Xc.__name__ = ["kit", "sound", "Playback"];
    Xc.__interfaces__ = [lb];
    Xc.prototype = { __class__: Xc, __properties__: { get_sound: "get_sound", get_complete: "get_complete" } };
    var Of = function(a) { this.$CO = a;
        this.volume = new D(0);
        this.$DO = new wa(!0) };
    h.$CZB = Of;
    Of.__name__ = ["$CZB"];
    Of.__interfaces__ = [Xc];
    Of.prototype = {
        get_sound: function() { return this.$CO },
        get_complete: function() { return this.$DO },
        dispose: function() {},
        __class__: Of,
        __properties__: {
            get_complete: "get_complete",
            get_sound: "get_sound"
        }
    };
    var Pf = function() {};
    h["kit.subsystem.StorageSystem"] = Pf;
    Pf.__name__ = ["kit", "subsystem", "StorageSystem"];
    Pf.prototype = { __class__: Pf };
    var Ge = function() { this.$EJ = new T };
    h.$CaB = Ge;
    Ge.__name__ = ["$CaB"];
    Ge.__interfaces__ = [Pf];
    Ge.prototype = { set: function(a, b) { this.$EJ.set(a, b); return (new fa).$uV(null) }, get: function(a, b) { return (new fa).$uV(this.$EJ.exists(a) ? this.$EJ.get(a) : b) }, __class__: Ge };
    var Je = function() { this.down = new ka;
        this.move = new ka;
        this.up = new ka };
    h.$CbB = Je;
    Je.__name__ = ["$CbB"];
    Je.__interfaces__ = [Mf];
    Je.prototype = { get_supported: function() { return !1 }, __class__: Je, __properties__: { get_supported: "get_supported" } };
    var Ad = function() { this.$uG = [] };
    h.$CdB = Ad;
    Ad.__name__ = ["$CdB"];
    Ad.__interfaces__ = [lb];
    Ad.prototype = {
        $GJ: function(a, b, c) { a.addEventListener(b, c, !1);
            this.$uG.push(new vh(a, b, c)) },
        $EO: function(a, b, c) { var d = this;
            this.$GJ(a, b, function(a) { d.dispose();
                c(a) }) },
        dispose: function() {
            for (var a = 0, b = this.$uG; a < b.length;) { var c = b[a];++a;
                c.$FO.removeEventListener(c.$GO, c.$HO, !1) } this.$uG = []
        },
        __class__: Ad
    };
    var vh = function(a, b, c) { this.$FO = a;
        this.$GO = b;
        this.$HO = c };
    h.$CeB = vh;
    vh.__name__ = ["$CeB"];
    vh.prototype = { __class__: vh };
    var Bd = function() {};
    h.$ChB = Bd;
    Bd.__name__ = ["$ChB"];
    Bd.__interfaces__ = [We];
    Bd.prototype = { __class__: Bd };
    var wh = function() {};
    h["kit.subsystem.RendererSystem"] = wh;
    wh.__name__ = ["kit", "subsystem", "RendererSystem"];
    wh.prototype = { __class__: wh };
    var Cd = function() {};
    h.$CiB = Cd;
    Cd.__name__ = ["$CiB"];
    Cd.__interfaces__ = [wh];
    Cd.prototype = { __class__: Cd };
    var qh = function() {};
    h.$CjB = qh;
    qh.__name__ = ["$CjB"];
    qh.$CQ = function(a) {
        switch (a) {
            case 65:
                return g.A;
            case 66:
                return g.B;
            case 67:
                return g.C;
            case 68:
                return g.D;
            case 69:
                return g.E;
            case 70:
                return g.F;
            case 71:
                return g.G;
            case 72:
                return g.H;
            case 73:
                return g.I;
            case 74:
                return g.J;
            case 75:
                return g.K;
            case 76:
                return g.L;
            case 77:
                return g.M;
            case 78:
                return g.N;
            case 79:
                return g.O;
            case 80:
                return g.P;
            case 81:
                return g.Q;
            case 82:
                return g.R;
            case 83:
                return g.S;
            case 84:
                return g.T;
            case 85:
                return g.U;
            case 86:
                return g.V;
            case 87:
                return g.W;
            case 88:
                return g.X;
            case 89:
                return g.Y;
            case 90:
                return g.Z;
            case 48:
                return g.Number0;
            case 49:
                return g.Number1;
            case 50:
                return g.Number2;
            case 51:
                return g.Number3;
            case 52:
                return g.Number4;
            case 53:
                return g.Number5;
            case 54:
                return g.Number6;
            case 55:
                return g.Number7;
            case 56:
                return g.Number8;
            case 57:
                return g.Number9;
            case 96:
                return g.Numpad0;
            case 97:
                return g.Numpad1;
            case 98:
                return g.Numpad2;
            case 99:
                return g.Numpad3;
            case 100:
                return g.Numpad4;
            case 101:
                return g.Numpad5;
            case 102:
                return g.Numpad6;
            case 103:
                return g.Numpad7;
            case 104:
                return g.Numpad8;
            case 105:
                return g.Numpad9;
            case 107:
                return g.NumpadAdd;
            case 110:
                return g.NumpadDecimal;
            case 111:
                return g.NumpadDivide;
            case 108:
                return g.NumpadEnter;
            case 106:
                return g.NumpadMultiply;
            case 109:
                return g.NumpadSubtract;
            case 112:
                return g.F1;
            case 113:
                return g.F2;
            case 114:
                return g.F3;
            case 115:
                return g.F4;
            case 116:
                return g.F5;
            case 117:
                return g.F6;
            case 118:
                return g.F7;
            case 119:
                return g.F8;
            case 120:
                return g.F9;
            case 121:
                return g.F10;
            case 122:
                return g.F11;
            case 123:
                return g.F12;
            case 37:
                return g.Left;
            case 38:
                return g.Up;
            case 39:
                return g.Right;
            case 40:
                return g.Down;
            case 18:
                return g.Alt;
            case 192:
                return g.Backquote;
            case 220:
                return g.Backslash;
            case 8:
                return g.Backspace;
            case 20:
                return g.CapsLock;
            case 188:
                return g.Comma;
            case 15:
                return g.Command;
            case 17:
                return g.Control;
            case 46:
                return g.Delete;
            case 35:
                return g.End;
            case 13:
                return g.Enter;
            case 187:
                return g.Equals;
            case 27:
                return g.Escape;
            case 36:
                return g.Home;
            case 45:
                return g.Insert;
            case 219:
                return g.LeftBracket;
            case 189:
                return g.Minus;
            case 34:
                return g.PageDown;
            case 33:
                return g.PageUp;
            case 190:
                return g.Period;
            case 222:
                return g.Quote;
            case 221:
                return g.RightBracket;
            case 186:
                return g.Semicolon;
            case 16:
                return g.Shift;
            case 191:
                return g.Slash;
            case 32:
                return g.Space;
            case 9:
                return g.Tab;
            case 16777234:
                return g.Menu;
            case 16777247:
                return g.Search
        }
        return g.Unknown(a)
    };
    var vc = function() { this.$KQ = 0;
        this.$IQ = null;
        this.$EQ = new R;
        this.$JQ = [] };
    h.$CkB = vc;
    vc.__name__ = ["$CkB"];
    vc.$LQ = function(a, b) {
        if (a.active) {
            var c = a.$KH[21];
            if (null != c && (c.$II = b, b *= c.scale.$nH, 0 >= b)) { c.onUpdate(b); return }
            for (c = a.firstComponent; null !=
                c;) { var d = c.next;
                0 == (c.$B & 1) && (c.$B |= 1, c.$A(), c.onStart());
                c.onUpdate(b);
                c = d }
            for (c = a.firstChild; null != c;) d = c.next, vc.$LQ(c, b), c = d
        }
    };
    vc.prototype = {
        $iK: function() {
            if (1 == oa.$aN("scaleMode")) {
                var a = new B;
                t.root.add(a);
                var b = oa.$aN("width"),
                    c = oa.$aN("height"),
                    d = oa.$aN("maxWidth"),
                    e = oa.$aN("maxHeight"),
                    f = function() {
                        var f = Math.min(t.$EI.$VH.get_width() / b, t.$EI.$VH.get_height() / c);
                        a.setXY(t.$EI.$VH.get_width() / 2 - f * b / 2, t.$EI.$VH.get_height() / 2 - f * c / 2);
                        a.setScale(f);
                        d * f < t.$EI.$VH.get_width() || e * f < t.$EI.$VH.get_height() ?
                            (null == a.get_scissor() && a.set_scissor(new Ua), a.get_scissor().set(b / 2 - d / 2, c / 2 - e / 2, d, e)) : a.set_scissor(null)
                    };
                f();
                t.$EI.$VH.resize.connect(f)
            }
        },
        $OH: function(a) { if (!(0 >= a)) { 0.5 < a ? 3 >= this.$KQ && (++this.$KQ, a = 0.016666666666666666) : this.$KQ = 0; if (null != this.$IQ) { var b = this.$IQ;
                    this.$IQ = null; for (var c = 0; c < b.length;) { var d = b[c];++c;
                        d() } } for (b = 0; b < this.$JQ.length;) c = this.$JQ[b], null == c || c.update(a) ? this.$JQ.splice(b, 1) : ++b;
                t.volume.update(a);
                vc.$LQ(t.root, a);
                vc.$LQ(this.$EQ, a) } },
        $LJ: function(a) {
            var b = a.graphics;
            null != b && (a.willRender(), B.$OG(t.root, b, !0), B.$OG(this.$EQ, b, !0), a.didRender())
        },
        $FQ: function(a) { this.$JQ.push(a) },
        $HQ: function(a) { null == this.$IQ ? this.$IQ = [a] : this.$IQ.push(a) },
        __class__: vc
    };
    var ya = function() {};
    h.$ClB = ya;
    ya.__name__ = ["$ClB"];
    ya.$NQ = function(a, b, c, d, e, f, k) { if (3 > k) return !1; for (var g = 0, h = 2 * Math.PI / k, l = 0; l < k;) { var m = l++,
                p = Math.cos(g),
                r = Math.sin(g),
                g = g + h;
            a.push(e * p + c);
            a.push(f * r + d);
            m < k - 1 && (b.push(0), b.push(m), b.push(m + 1)) } return !0 };
    ya.$OQ = function(a, b, c, d, e, f, k, g) {
        if (3 > g) return !1;
        a.push(c);
        a.push(d);
        k /= g;
        var h = 0;
        for (g += 1; h < g;) { var l = h++,
                m = Math.cos(f),
                p = Math.sin(f);
            f += k;
            a.push(e * m + c);
            a.push(e * p + d);
            b.push(0);
            b.push(l);
            b.push(l + 1) }
        return !0
    };
    ya.$PQ = function(a, b, c, d, e, f, k, g, h) { k /= h; var l = [],
            m = 0; for (h += 1; m < h;) { m++; var p = Math.cos(f),
                r = Math.sin(f);
            f += k;
            l.push(e * p + c);
            l.push(e * r + d) } return ya.$RQ(a, b, l, g) };
    ya.$QQ = function(a, b, c, d, e, f, k, g) { for (var h = 0, l = 2 * Math.PI / g, m = [], p = 0; p < g;) { p++; var r = Math.cos(h),
                s = Math.sin(h),
                h = h + l;
            m.push(e * r + c);
            m.push(f * s + d) } m.push(e + c);
        m.push(d); return ya.$RQ(a, b, m, k) };
    ya.$RQ = function(a, b, c, d) {
        var e = c.length;
        if (4 > e) return !1;
        d /= 2;
        var f = c[0],
            k = c[1],
            g = c[e - 2],
            h = c[e - 1],
            l = new nb(-(c[3] - k), c[2] - f);
        l.normalize();
        var m = l.x,
            l = l.y;
        a.push(f - d * m);
        a.push(k - d * l);
        a.push(f + d * m);
        a.push(k + d * l);
        f = e / 2 | 0;
        for (k = 2; k < e - 2;) {
            var p = c[k++],
                r = c[k++],
                s = c[k],
                t = c[k + 1],
                u = new nb(-(t - r), s - p);
            u.normalize();
            var v = new nb(u.x, u.y);
            v.add(m, l);
            v.normalize();
            var w = u.dot(v.x, v.y);
            v.multiply(d / w);
            if (0.15 > w) {
                var w = c[k - 4],
                    y = c[k - 3];
                0 > (p - w) * (t - y) - (r - y) * (s - w) ? (a.push(p - v.x), a.push(r - v.y), a.push(p + m * d), a.push(r +
                    l * d), a.push(p - v.x), a.push(r - v.y), a.push(p + u.x * d), a.push(r + u.y * d)) : (a.push(p - m * d), a.push(r - l * d), a.push(p + v.x), a.push(r + v.y), a.push(p - u.x * d), a.push(r - u.y * d), a.push(p + v.x), a.push(r + v.y));
                ++f
            } else a.push(p - v.x), a.push(r - v.y), a.push(p + v.x), a.push(r + v.y);
            m = u.x;
            l = u.y
        }
        a.push(g - d * m);
        a.push(h - d * l);
        a.push(g + d * m);
        a.push(h + d * l);
        a = 0;
        for (c = f - 1; a < c;) e = 2 * a++, b.push(e), b.push(e + 1), b.push(e + 2), b.push(e + 2), b.push(e + 3), b.push(e + 1);
        return !0
    };
    ya.$SQ = function(a) { if (6 > a.length) return null;
        null == ya.$TQ && (ya.$TQ = new xh); return ya.$TQ.triangulate(a) };
    var sh = function() {};
    h.$CmB = sh;
    sh.__name__ = ["$CmB"];
    sh.$VQ = function(a) { switch (a) {
            case 0:
                return Pa.Left;
            case 1:
                return Pa.Middle;
            case 2:
                return Pa.Right } return Pa.Unknown(a) };
    var Ke = function() { this.$nI = null;
        C.call(this) };
    h.$CnB = Ke;
    Ke.__name__ = ["$CnB"];
    Ke.__super__ = C;
    Ke.prototype = m(C.prototype, {
        get_entitySlot: function() { return 22 },
        onStart: function() { var a = this,
                b = oa.$bN();
            null != b && t.$EI.$VH.orientation.watch(function(c, d) { null == c || c == b ? a.$YQ() : a.$XQ(c != d) }) },
        $XQ: function(a) {
            var b = this;
            if (null == this.$nI) {
                this.owner.addChild(this.$nI =
                    new R);
                var c = this.$nI;
                t.loadAssetPack(Ta.fromAssets("_2DKitOrientation")).then(function(d) { b.registerDisposable(d); var e = new vd(0, 0, 0);
                    a && e.alpha.animate(0, 1, 0.3);
                    c.add(e); var f = (new za(d.getTexture("RotateDevice"))).centerAnchor();
                    c.addChild((new R).add(f));
                    d = function() { e.setSize(t.$EI.$VH.get_width(), t.$EI.$VH.get_height());
                        f.setXY(t.$EI.$VH.get_width() / 2, t.$EI.$VH.get_height() / 2) };
                    d();
                    b.connect0(t.$EI.$VH.resize, d) })
            }
        },
        $YQ: function() { null != this.$nI && (this.$nI.dispose(), this.$nI = null) },
        __class__: Ke
    });
    var Ac = function() {};
    h.$CoB = Ac;
    Ac.__name__ = ["$CoB"];
    Ac.$aQ = function(a) { var b = new Yb;
        b.useCache = !0;
        b.useEnumIndex = !1;
        b.serialize(a); return Ac.$cQ(b.toString(), !1) };
    Ac.$bQ = function(a) { return Sa.run(Ac.$cQ(a, !0)) };
    Ac.$cQ = function(a, b) { for (var c = "", d = new yh(a.length), e = 0, f = a.length; e < f;) { var k = e++,
                g = d.nextInt() % 30;
            b && (g = -g);
            k = a.charCodeAt(k) + g;
            c += String.fromCharCode(k) } return c };
    var Qf = function() {};
    h.$CpB = Qf;
    Qf.__name__ = ["$CpB"];
    Qf.prototype = { __class__: Qf };
    var Rf = function() {};
    h.$CqB = Rf;
    Rf.__name__ = ["$CqB"];
    Rf.prototype = { __class__: Rf };
    var qa = function(a, b) { this.$rQ = new Sf;
        this.$qQ = !1;
        this.$pQ = a.getContext("2d", { alpha: b }) };
    h.$CrB = qa;
    qa.__name__ = ["$CrB"];
    qa.__interfaces__ = [Bd];
    qa.prototype = {
        save: function() { var a = this.$rQ,
                b = this.$rQ.next;
            null == b && (b = new Sf, b.$vQ = a, a.next = b);
            b.$FM = a.$FM;
            b.$HM = a.$HM;
            b.$JM = a.$JM;
            b.$tQ = a.$tQ;
            b.$uQ = a.$uQ;
            this.$rQ = b;
            this.$pQ.save() },
        translate: function(a, b) { this.$pQ.translate(a | 0, b | 0) },
        scale: function(a, b) { this.$pQ.scale(a, b) },
        rotate: function(a) {
            this.$pQ.rotate(3.141592653589793 *
                a / 180)
        },
        transform: function(a, b, c, d, e, f) { this.$pQ.transform(a, b, c, d, e, f) },
        restore: function() { this.$rQ = this.$rQ.$vQ;
            this.$pQ.restore() },
        $dQ: function(a, b, c, d, e) {
            var f = this.$rQ,
                f = (255 * f.$FM & 255) << 16 | (255 * f.$HM & 255) << 8 | 255 * f.$JM & 255;
            null == qa.$sQ && (qa.$sQ = J.$YS(d, e));
            qa.$sQ.width = d;
            qa.$sQ.height = e;
            var k = qa.$sQ.getContext("2d", null);
            k.globalCompositeOperation = "copy";
            k.fillStyle = J.$eS(f);
            k.fillRect(0, 0, d, e);
            k.globalCompositeOperation = "multiply";
            k.drawImage(a, b, c, d, e, 0, 0, d, e);
            k.globalCompositeOperation = "destination-atop";
            k.drawImage(a, b, c, d, e, 0, 0, d, e);
            return qa.$sQ
        },
        drawTexture: function(a, b, c) { this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height()) },
        drawSubTexture: function(a, b, c, d, e, f, k) { if (this.$qQ) this.$qQ = !1, this.$pQ.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, d, e, f, k), this.$pQ.globalCompositeOperation = "source-over";
            else { var g = a.$PN;
                d = a.$QN + d | 0;
                a = a.$RN + e | 0;
                f |= 0;
                k |= 0;
                b |= 0;
                c |= 0;
                this.$rQ.$tQ ? (g = this.$dQ(g.$AR, d, a, f, k), this.$pQ.drawImage(g, b, c, f, k)) : this.$pQ.drawImage(g.$AR, d, a, f, k, b, c, f, k) } },
        drawPattern: function(a,
            b, c, d, e) { this.$qQ ? (this.$qQ = !1, this.$pQ.globalCompositeOperation = "copy", this.drawPattern(a, b, c, d, e), this.$pQ.globalCompositeOperation = "source-over") : (b |= 0, c |= 0, d |= 0, e |= 0, this.$rQ.$uQ ? this.$pQ.rect(b, c, d, e) : (this.$pQ.fillStyle = this.$lQ(a), this.$pQ.fillRect(b, c, d, e))) },
        fillRect: function(a, b, c, d, e) {
            this.$qQ ? (this.$qQ = !1, this.$pQ.globalCompositeOperation = "copy", this.fillRect(a, b, c, d, e), this.$pQ.globalCompositeOperation = "source-over") : (b |= 0, c |= 0, d |= 0, e |= 0, this.$rQ.$uQ ? this.$pQ.rect(b, c, d, e) : (this.$pQ.fillStyle =
                this.$kQ(a), this.$pQ.fillRect(b, c, d, e)))
        },
        fillTriangles: function(a, b, c) { this.$qQ = !1;
            this.$eQ(b, c);
            this.$mQ(a) },
        drawTriangles: function(a, b, c) { this.$qQ = !1;
            this.$eQ(b, c);
            this.$nQ(a) },
        $eQ: function(a, b) { this.$pQ.beginPath(); for (var c = 0, d = b.length; c < d;) { var e = 2 * b[c],
                    f = 2 * b[c + 1],
                    g = 2 * b[c + 2],
                    c = c + 3;
                this.$pQ.moveTo(a[e], a[e + 1]);
                this.$pQ.lineTo(a[f], a[f + 1]);
                this.$pQ.lineTo(a[g], a[g + 1]) } this.$pQ.closePath() },
        fillPolygon: function(a, b) { this.$qQ = !1;
            this.$fQ(b);
            this.$mQ(a) },
        drawPolygon: function(a, b) {
            this.$qQ = !1;
            this.$fQ(b);
            this.$nQ(a)
        },
        $fQ: function(a) { this.$pQ.beginPath(); for (var b = 0, c = a.length; b < c;) { var d = a[b++],
                    e = a[b++];
                this.$pQ.lineTo(d, e) } this.$pQ.closePath() },
        drawCircle: function(a, b, c, d, e) { this.$qQ = !1;
            this.$gQ(b, c, d);
            this.$nQ(a) },
        fillCircle: function(a, b, c, d, e) { this.$qQ = !1;
            this.$gQ(b, c, d);
            this.$mQ(a) },
        strokeCircle: function(a, b, c, d, e, f) { this.$qQ = !1;
            this.$gQ(b, c, d);
            this.$oQ(a, e) },
        $gQ: function(a, b, c) { this.$pQ.beginPath();
            this.$pQ.arc(a, b, c, 0, 6.283185307179586);
            this.$pQ.closePath() },
        drawEllipse: function(a, b, c, d, e, f) {
            this.$qQ = !1;
            this.$hQ(b, c, d, e);
            this.$nQ(a)
        },
        fillEllipse: function(a, b, c, d, e, f) { this.$qQ = !1;
            this.$hQ(b, c, d, e);
            this.$mQ(a) },
        strokeEllipse: function(a, b, c, d, e, f, g) { this.$qQ = !1;
            this.$hQ(b, c, d, e);
            this.$oQ(a, f) },
        $hQ: function(a, b, c, d) { var e = 0.5522848 * c,
                f = 0.5522848 * d,
                g = a - c,
                h = b - d;
            c = a + c;
            d = b + d;
            this.$pQ.beginPath();
            this.$pQ.moveTo(g, b);
            this.$pQ.bezierCurveTo(g, b - f, a - e, h, a, h);
            this.$pQ.bezierCurveTo(a + e, h, c, b - f, c, b);
            this.$pQ.bezierCurveTo(c, b + f, a + e, d, a, d);
            this.$pQ.bezierCurveTo(a - e, d, g, b + f, g, b);
            this.$pQ.closePath() },
        fillArc: function(a,
            b, c, d, e, f, g) { this.$qQ = !1;
            f = e + f;
            this.$pQ.beginPath();
            this.$pQ.moveTo(b, c);
            this.$pQ.arc(0, 0, d, 3.141592653589793 * e / 180, 3.141592653589793 * f / 180);
            this.$mQ(a) },
        strokeArc: function(a, b, c, d, e, f, g, h) { this.$qQ = !1;
            c = e + f;
            this.$pQ.beginPath();
            this.$pQ.arc(b, b, d, 3.141592653589793 * e / 180, 3.141592653589793 * c / 180);
            this.$oQ(a, g) },
        strokeLines: function(a, b, c) { this.$qQ = !1;
            this.$iQ(b);
            this.$pQ.lineWidth = c;
            this.$pQ.strokeStyle = this.$kQ(a);
            this.$pQ.stroke() },
        drawLines: function(a, b, c) {
            this.$qQ = !1;
            this.$iQ(b);
            this.$pQ.lineWidth =
                c;
            this.$pQ.strokeStyle = this.$lQ(a);
            this.$pQ.stroke()
        },
        $iQ: function(a) { this.$pQ.beginPath(); if (2 <= a.length) { this.$pQ.moveTo(a[0], a[1]); for (var b = 2, c = a.length; b < c;) { var d = a[b++],
                        e = a[b++];
                    this.$pQ.lineTo(d, e) } } },
        multiplyAlpha: function(a) { this.$pQ.globalAlpha *= a },
        setAlpha: function(a) { this.$pQ.globalAlpha = a },
        tint: function(a, b, c) { var d = this.$rQ;
            d.$FM *= a;
            d.$HM *= b;
            d.$JM *= c;
            d.$tQ = !0 },
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "source-over";
                    break;
                case 1:
                    b = "lighter";
                    break;
                case 2:
                    b = "multiply";
                    break;
                case 3:
                    b = "screen";
                    break;
                case 4:
                    b = "destination-in";
                    break;
                case 5:
                    b = "copy"
            }
            this.$pQ.globalCompositeOperation = b
        },
        beginMask: function() { var a = this.$rQ;
            a.$uQ && this.endMask();
            a.$uQ = !0;
            this.$pQ.beginPath() },
        endMask: function() { var a = this.$rQ;
            a.$uQ && (a.$uQ = !1, this.$pQ.clip()) },
        applyScissor: function(a, b, c, d) { this.$pQ.beginPath();
            this.$pQ.rect(a | 0, b | 0, c | 0, d | 0);
            this.$pQ.clip() },
        willRender: function() { this.$qQ = !0 },
        didRender: function() {},
        onResize: function(a, b) {},
        $kQ: function(a) {
            var b = this.$rQ;
            b.$tQ && (a = (b.$FM * (a &
                16711680) / 16711680 * 255 & 255) << 16 | (b.$HM * (a & 65280) / 65280 * 255 & 255) << 8 | b.$JM * (a & 255) / 255 * 255 & 255);
            return J.$eS(a)
        },
        $lQ: function(a) { return this.$rQ.$tQ ? (a = this.$dQ(a.$PN.$AR, a.$QN, a.$RN, a.$bJ, a.$cJ), this.$pQ.createPattern(a, "repeat")) : a.$zQ() },
        $mQ: function(a) { this.$rQ.$uQ || (this.$pQ.fillStyle = this.$kQ(a), this.$pQ.fill()) },
        $nQ: function(a) { this.$rQ.$uQ || (this.$pQ.fillStyle = this.$lQ(a), this.$pQ.fill()) },
        $oQ: function(a, b) { this.$rQ.$uQ || (this.$pQ.strokeStyle = this.$kQ(a), this.$pQ.lineWidth = b, this.$pQ.stroke()) },
        __class__: qa
    };
    var Sf = function() { this.$vQ = this.next = null;
        this.$tQ = this.$uQ = !1;
        this.$FM = this.$HM = this.$JM = 1 };
    h.$CsB = Sf;
    Sf.__name__ = ["$CsB"];
    Sf.prototype = { __class__: Sf };
    var rd = function(a) { this.graphics = new qa(a, !1);
        this.$yQ = new wa(!0) };
    h.$CtB = rd;
    rd.__name__ = ["$CtB"];
    rd.__interfaces__ = [Cd];
    rd.prototype = {
        createTextureFromImage: function(a, b) { var c = new Yc(J.$LS ? J.$ZS(a) : a); return c.createTexture(c.width, c.height) },
        createTexture: function(a, b, c) { return (new Yc(J.$YS(a, b))).createTexture(a, b) },
        createSystemFont: function(a) { return new tb(a) },
        getTextureAssetFormats: function() { return [] },
        willRender: function() { this.graphics.willRender() },
        didRender: function() { this.graphics.didRender() },
        __class__: rd
    };
    var Tf = function(a, b, c) { this.$_Q = 0;
        this.$$Q = null;
        Sb.call(this, a, b, c) };
    h.$CuB = Tf;
    Tf.__name__ = ["$CuB"];
    Tf.__super__ = Sb;
    Tf.prototype = m(Sb.prototype, { $zQ: function() { if (this.$_Q != this.$PN.$BR || null == this.$$Q) this.$_Q = this.$PN.$BR, this.$$Q = this.$PN.$DR(this.$QN, this.$RN, this.$bJ, this.$cJ); return this.$$Q }, __class__: Tf });
    var Yc = function(a) {
        this.$GR = null;
        this.$BR = 0;
        this.$iM = !1;
        this.$AR = a;
        this.width = a.width;
        this.height = a.height
    };
    h.$CvB = Yc;
    Yc.__name__ = ["$CvB"];
    Yc.__interfaces__ = [Qf];
    Yc.__super__ = Ea;
    Yc.prototype = m(Ea.prototype, {
        createTexture: function(a, b) { return new Tf(this, a, b) },
        getGraphics: function() { null == this.$GR && (this.$FR(), this.$GR = new Uf(this)); return this.$GR },
        $DR: function(a, b, c, d) {
            var e = this.$FR(),
                f = this.$AR;
            if (0 != a || 0 != b || c != this.width || d != this.height) f = J.$YS(c, d), c = f.getContext("2d", null), c.globalCompositeOperation = "copy", c.drawImage(this.$AR,
                -a, -b);
            return e.createPattern(f, "repeat")
        },
        $FR: function() { aa.__instanceof(this.$AR, HTMLCanvasElement) || (this.$AR = J.$ZS(this.$AR)); return this.$AR.getContext("2d", null) },
        $gM: function() { this.$GR = this.$AR = null },
        __class__: Yc
    });
    var Uf = function(a) { qa.call(this, a.$AR, !0);
        this.$HR = a };
    h.$CwB = Uf;
    Uf.__name__ = ["$CwB"];
    Uf.__super__ = qa;
    Uf.prototype = m(qa.prototype, {
        drawTexture: function(a, b, c) { qa.prototype.drawTexture.call(this, a, b, c);++this.$HR.$BR },
        drawSubTexture: function(a, b, c, d, e, f, g) {
            qa.prototype.drawSubTexture.call(this,
                a, b, c, d, e, f, g);
            ++this.$HR.$BR
        },
        drawPattern: function(a, b, c, d, e) { qa.prototype.drawPattern.call(this, a, b, c, d, e);++this.$HR.$BR },
        fillRect: function(a, b, c, d, e) { qa.prototype.fillRect.call(this, a, b, c, d, e);++this.$HR.$BR },
        fillTriangles: function(a, b, c) { qa.prototype.fillTriangles.call(this, a, b, c);++this.$HR.$BR },
        drawTriangles: function(a, b, c) { qa.prototype.drawTriangles.call(this, a, b, c);++this.$HR.$BR },
        drawCircle: function(a, b, c, d, e) { null == e && (e = 50);
            qa.prototype.drawCircle.call(this, a, b, c, d, e);++this.$HR.$BR },
        fillCircle: function(a, b, c, d, e) { null == e && (e = 50);
            qa.prototype.fillCircle.call(this, a, b, c, d, e);++this.$HR.$BR },
        drawEllipse: function(a, b, c, d, e, f) { null == f && (f = 50);
            qa.prototype.drawEllipse.call(this, a, b, c, d, e, f);++this.$HR.$BR },
        fillEllipse: function(a, b, c, d, e, f) { null == f && (f = 50);
            qa.prototype.fillEllipse.call(this, a, b, c, d, e, f);++this.$HR.$BR },
        strokeLines: function(a, b, c) { qa.prototype.strokeLines.call(this, a, b, c);++this.$HR.$BR },
        drawLines: function(a, b, c) { qa.prototype.drawLines.call(this, a, b, c);++this.$HR.$BR },
        __class__: Uf
    });
    var ba = function(a, b) { zc.call(this, a, b) };
    h.$CyB = ba;
    ba.__name__ = ["$CyB"];
    ba.$MR = function(a) { var b = [y.PNG, y.JPG, y.GIF],
            c = 2,
            d;
        d = window.document.createElement("img");
        d.onload = d.onerror = function(e) { 1 == d.width && b.unshift(y.WEBP);--c;
            0 == c && a(b) };
        d.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="; var e;
        e = window.document.createElement("img");
        e.onload = e.onerror = function(d) { 1 == e.width && b.unshift(y.JXR);--c;
            0 == c && a(b) };
        e.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA==" };
    ba.$NR = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == Ra(a, a.canPlayType)) return [];
        var b = new Ja("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b", ""),
            c = window.navigator.userAgent;
        if (!U.get_supported() && b.match(c)) return [];
        b = [];
        b.push({ format: y.MP3, mimeType: "audio/mpeg" });
        for (var c = [{ format: y.OPUS, mimeType: "audio/ogg; codecs=opus" }, { format: y.OGG, mimeType: "audio/ogg; codecs=vorbis" }, { format: y.WAV, mimeType: "audio/wav" }], b = 0 <= window.navigator.userAgent.indexOf("2DKSim") ? c :
                b.concat(c), c = [], d = 0; d < b.length;) { var e = b[d];++d; var f = ""; try { f = a.canPlayType(e.mimeType) } catch (g) { g instanceof s && (g = g.val) } "" != f && c.push(e.format) }
        return c
    };
    ba.$OR = function() { if (ba.$XR) { ba.$XR = !1; if ((new Ja("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1; var a = new XMLHttpRequest;
            a.open("GET", ".", !0); if ("" != a.responseType) return !1;
            a.responseType = "blob"; if ("blob" != a.responseType) return !1;
            ba.$YR = J.$QS("URL").value } return null != ba.$YR && null != ba.$YR.createObjectURL };
    ba.__super__ =
        zc;
    ba.prototype = m(zc.prototype, {
        $mM: function(a, b) {
            var c = this;
            switch (b.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var d;
                    d = window.document.createElement("img");
                    var e = new Ad;
                    e.$EO(d, "load", function(a) { ba.$OR() && ba.$YR.revokeObjectURL(d.src);
                        a = c.$EI.getRenderer().createTextureFromImage(d);
                        null != a ? c.$oM(b, a) : c.$sM(b) });
                    e.$EO(d, "error", function(a) { c.$rM(b, "Failed to load image") });
                    e = "data:" == E.substr(a, 0, 5);
                    !e && ba.$OR() ? this.$LR(a, b, "blob", function(a) { d.src = ba.$YR.createObjectURL(a) }) : (e || (d.crossOrigin =
                        ""), d.src = a);
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    if (U.get_supported()) this.$LR(a, b, "arraybuffer", function(a) { U.$tS.decodeAudioData(a, function(a) { c.$oM(b, new U(a)) }, function() { c.$oM(b, hb.$AO()) }) });
                    else {
                        var f;
                        f = window.document.createElement("audio");
                        f.preload = "auto";
                        var g = ++ba.$VR;
                        null == ba.$UR && (ba.$UR = new eb);
                        ba.$UR.h[g] = f;
                        e = new Ad;
                        e.$EO(f, "canplaythrough", function(a) { ba.$UR.remove(g);
                            c.$oM(b, new Dd(f)) });
                        e.$EO(f, "error", function(a) {
                            ba.$UR.remove(g);
                            a = f.error.code;
                            3 == a || 4 == a ? c.$oM(b, hb.$AO()) :
                                c.$rM(b, "Failed to load audio: " + f.error.code)
                        });
                        e.$GJ(f, "progress", function(a) { 0 < f.buffered.length && 0 < f.duration && (a = f.buffered.end(0) / f.duration, c.$pM(b, a * b.bytes | 0, b.bytes)) });
                        f.src = a;
                        f.load()
                    }
                    break;
                case 13:
                case 14:
                    (function(a, d) {
                        var e = "_kit_font_" + ba.$WR;
                        ++ba.$WR;
                        if ("undefined" != typeof FontFace)(new FontFace(e, "url(" + a + ")")).load().then(function(a) { c.$oM(b, new tb(e, a));
                            window.document.fonts.add(a) });
                        else {
                            var f;
                            f = window.document.createElement("style");
                            f.innerHTML = "@font-face{font-family:" + e + ";src:url(" +
                                a + ");}";
                            window.document.head.appendChild(f);
                            var g = window.document.createElement("canvas").getContext("2d", null);
                            g.font = "300px sans";
                            var k = g.measureText("BESbswy").width;
                            g.font = '300px "' + e + '"';
                            var h = Date.now() / 1E3;
                            t.nextFrame(function(a) { var d = null; return d = function() { var a = Date.now() / 1E3 - h,
                                        n = g.measureText("BESbswy").width;
                                    5 <= a || k != n ? c.$oM(b, new tb(e, null, f)) : t.$EI.$NH.$HQ(d) } }(this))
                        }
                    })(a, !1);
                    break;
                case 16:
                    this.$LR(a, b, "text", function(a) { c.$oM(b, new zd(a)) })
            }
        },
        $nM: function(a) {
            var b = this;
            null == ba.$TR &&
                (ba.$TR = new fa, ba.$MR(function(a) { var d;
                    d = window.navigator.isCocoonJS ? [y.TTF, y.WOFF] : [y.WOFF, y.TTF];
                    a = b.$EI.getRenderer().getTextureAssetFormats().concat(a).concat(ba.$NR()).concat(d).concat([y.Data]);
                    ba.$TR.success(a) }));
            ba.$TR.then(a)
        },
        $LR: function(a, b, c, d) {
            var e = this,
                f = null,
                g = null,
                h = 0,
                l = !1,
                m = function() { l && (l = !1, window.clearInterval(h)) },
                p = 3,
                r = function() {--p; return 0 <= p ? (g(), !0) : !1 },
                g = function() {
                    m();
                    null != f && f.abort();
                    f = new XMLHttpRequest;
                    f.open("GET", a, !0);
                    f.responseType = c;
                    var g = 0;
                    f.onprogress =
                        function(a) { l || (l = !0, h = window.setInterval(function() { 4 != f.readyState && 5E3 < Date.now() - g && !r() && (m(), e.$rM(b, "Download stalled")) }, 1E3));
                            g = Date.now();
                            e.$pM(b, a.loaded, a.total) };
                    f.onerror = function(a) { 0 == f.status && r() || (m(), e.$rM(b, "HTTP error " + f.status)) };
                    f.onload = function(a) { a = f.response;
                        null == a && (a = f.responseText);
                        m();
                        d(a) };
                    f.send()
                };
            g()
        },
        __class__: ba
    });
    var zh = function() {};
    h["kit.subsystem.ExternalSystem"] = zh;
    zh.__name__ = ["kit", "subsystem", "ExternalSystem"];
    zh.prototype = { __class__: zh, __properties__: { get_supported: "get_supported" } };
    var Le = function() {};
    h.$C$B = Le;
    Le.__name__ = ["$C$B"];
    Le.__interfaces__ = [zh];
    Le.prototype = { get_supported: function() { return !0 }, call: function(a, b) { null == b && (b = []); for (var c = window, d = c, e = 0, f = a.split("."); e < f.length;) { var g = f[e];++e;
                c = d;
                d = P.field(c, g) } return d.apply(c, b) }, __class__: Le, __properties__: { get_supported: "get_supported" } };
    var He = function(a, b) { $a.call(this, a);
        this.$fH = b };
    h.$CCC = He;
    He.__name__ = ["$CCC"];
    He.__super__ = $a;
    He.prototype = m($a.prototype, {
        set_cursor: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b =
                        "";
                    break;
                case 1:
                    b = "pointer";
                    break;
                case 2:
                    b = "none"
            }
            this.$fH.style.cursor = b;
            return $a.prototype.set_cursor.call(this, a)
        },
        __class__: He
    });
    var Dd = function(a) { this.$iM = !1;
        this.$wR = a };
    h.$CDC = Dd;
    Dd.__name__ = ["$CDC"];
    Dd.__interfaces__ = [Wc];
    Dd.__super__ = Ea;
    Dd.prototype = m(Ea.prototype, { play: function(a) { null == a && (a = 1); return new Ed(this, a, !1) }, loop: function(a) { null == a && (a = 1); return new Ed(this, a, !0) }, $gM: function() { this.$wR = null }, __class__: Dd });
    var Ed = function(a, b, c) {
        this.$BS = !1;
        var d = this;
        this.$CO = a;
        this.$oR = !1;
        this.$zR = window.document.createElement("audio");
        this.$zR.loop = c;
        this.$zR.src = a.$wR.src;
        this.volume = new D(b, function(a, b) { d.$yR() });
        this.$yR();
        this.$DO = new wa(!1);
        this.$xR();
        t.hidden.$nH && this.set_paused(!0)
    };
    h.$CEC = Ed;
    Ed.__name__ = ["$CEC"];
    Ed.__interfaces__ = [Rf, Xc];
    Ed.prototype = {
        get_sound: function() { return this.$CO },
        set_paused: function(a) { a != this.$BS && ((this.$BS = a) ? this.$zR.pause() : this.$xR()); return a },
        get_complete: function() { return this.$DO },
        update: function(a) {
            this.volume.update(a);
            this.$DO.set__(this.$zR.ended);
            return this.$DO.$nH || this.$BS ? (this.$oR = !1, this.$$R.dispose(), this.$_R.dispose(), !0) : !1
        },
        dispose: function() { this.set_paused(!0);
            this.$DO.set__(!0) },
        $xR: function() { var a = this;
            this.$zR.play();
            this.$oR || (Ob.$lH.$NH.$FQ(this), this.$oR = !0, this.$$R = t.volume.get_changed().connect(function(b, c) { a.$yR() }), this.$_R = t.hidden.get_changed().connect(function(b, c) { b ? (a.$AS = a.$BS, a.set_paused(!0)) : a.set_paused(a.$AS) })) },
        $yR: function() { this.$zR.volume = t.volume.$nH * this.volume.$nH },
        __class__: Ed,
        __properties__: {
            get_complete: "get_complete",
            get_sound: "get_sound",
            set_paused: "set_paused"
        }
    };
    var Ah = function() {};
    h["kit.subsystem.StageSystem"] = Ah;
    Ah.__name__ = ["kit", "subsystem", "StageSystem"];
    Ah.prototype = { __class__: Ah, __properties__: { get_height: "get_height", get_width: "get_width" } };
    var Pc = function(a) {
        this.$GS = 1;
        this.orientation = new wa(null);
        var b = this;
        this.$fH = a;
        this.resize = new mb;
        this.$GS = Pc.$HS();
        J.$fS() || (J.$TS(this.$fH, "transform-origin", "top left"), J.$TS(this.$fH, "transform", "scale(" + 1 / this.$GS + ")"));
        window.addEventListener("resize", Ra(this,
            this.$CS), !1);
        this.$CS(null);
        this.fullscreen = new wa(!1);
        J.$US(window.document, "fullscreenchange", function(a) { b.$FS() }, !1);
        this.$FS()
    };
    h.$CFC = Pc;
    Pc.__name__ = ["$CFC"];
    Pc.__interfaces__ = [Ah];
    Pc.$HS = function() { var a = window.devicePixelRatio;
        null == a && (a = 1); var b = window.document.createElement("canvas").getContext("2d", null),
            b = J.$QS("backingStorePixelRatio", b).value;
        null == b && (b = 1); return a / b };
    Pc.prototype = {
        get_width: function() { return this.$fH.width },
        get_height: function() { return this.$fH.height },
        get_fullscreenSupported: function() {
            return !0 ==
                J.$RS(["fullscreenEnabled", "fullScreenEnabled"], window.document).value
        },
        lockOrientation: function(a) { var b = J.$QS("lockOrientation", window.screen).value; if (null != b) { var c; switch (a[1]) {
                    case 0:
                        c = "portrait"; break;
                    case 1:
                        c = "landscape" } P.callMethod(window.screen, b, [c]) || null } },
        requestFullscreen: function(a) {
            null == a && (a = !0);
            if (a) { a = window.document.documentElement; var b = J.$RS(["requestFullscreen", "requestFullScreen"], a).value;
                null != b && b.apply(a, []) } else a = J.$RS(["exitFullscreen", "cancelFullscreen", "cancelFullScreen"],
                window.document).value, null != a && P.callMethod(window.document, a, [])
        },
        $CS: function(a) { var b = this.$fH.parentElement.getBoundingClientRect();!J.$LS || 90 != window.orientation && -90 != window.orientation ? this.$DS(b.width, b.height) : (a = Math.min(window.innerWidth, b.width), b = Math.min(window.innerHeight, b.height), this.$DS(a, b) && window.scrollTo(window.scrollX, window.scrollY));
            this.$ES() },
        $DS: function(a, b) {
            var c = this.$GS * a,
                d = this.$GS * b;
            if (this.$fH.width == c && this.$fH.height == d) return !1;
            1 != this.$GS && J.$fS() && (this.$fH.style.width =
                a + "px", this.$fH.style.height = b + "px");
            this.$fH.width = c | 0;
            this.$fH.height = d | 0;
            this.resize.emit();
            return !0
        },
        $ES: function() { null == window.orientation ? this.orientation.set__(null) : this.orientation.set__(window.innerWidth > window.innerHeight ? Qb.Landscape : Qb.Portrait) },
        $FS: function() { var a = J.$RS(["fullscreen", "fullScreen", "isFullScreen"], window.document).value;
            this.fullscreen.set__(!0 == a) },
        __class__: Pc,
        __properties__: { get_fullscreenSupported: "get_fullscreenSupported", get_height: "get_height", get_width: "get_width" }
    };
    var Fe = function(a, b) { this.$IS = a;
        this.$JS = b + ":" };
    h.$CGC = Fe;
    Fe.__name__ = ["$CGC"];
    Fe.__interfaces__ = [Pf];
    Fe.prototype = { set: function(a, b) { var c = Ac.$aQ(b); try { this.$IS.setItem(this.$JS + a, c) } catch (d) { return d instanceof s && (d = d.val), (new fa).failure(d.message) } return (new fa).$uV(null) }, get: function(a, b) { var c = null; try { c = this.$IS.getItem(this.$JS + a) } catch (d) { d instanceof s && (d = d.val), null } var e = b; if (null != c) try { e = Ac.$bQ(c) } catch (f) { f instanceof s && (f = f.val), null }
            return (new fa).$uV(e) }, __class__: Fe };
    var J =
        function() {};
    h.$CHC = J;
    J.__name__ = ["$CHC"];
    J.$PS = function(a, b) { null == b && (b = 0);
        window.setTimeout(a, b) };
    J.$QS = function(a, b) { null == b && (b = window); var c = P.field(b, a); if (null != c) return { prefix: "", field: a, value: c }; for (var c = a.charAt(0).toUpperCase() + E.substr(a, 1, null), d = 0, e = J.$KS; d < e.length;) { var f = e[d];++d; var g = f + c,
                h = P.field(b, g); if (null != h) return { prefix: f, field: g, value: h } } return { prefix: null, field: null, value: null } };
    J.$RS = function(a, b) {
        for (var c = 0; c < a.length;) { var d = a[c];++c;
            d = J.$QS(d, b); if (null != d.field) return d }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    J.$SS = function(a, b) { null == b && (b = window); var c = J.$QS(a, b).value; if (null == c) return !1;
        b[a] = c; return !0 };
    J.$TS = function(a, b, c) { a = a.style; for (var d = 0, e = J.$KS; d < e.length;) { var f = e[d];++d;
            a.setProperty("-" + f + "-" + b, c) } a.setProperty(b, c) };
    J.$US = function(a, b, c, d) { for (var e = 0, f = J.$KS; e < f.length;) { var g = f[e];++e;
            a.addEventListener(g + b, c, d) } a.addEventListener(b, c, d) };
    J.$YS = function(a, b) { var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height = b; return c };
    J.$ZS = function(a) {
        var b =
            J.$YS(a.width, a.height),
            c = b.getContext("2d", null);
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    };
    J.$bS = function() { if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) { var a = Math.sin,
                b = Math.cos;
            Math.sin = function(b) { return 0 == b ? 0 : a(b) };
            Math.cos = function(a) { return 0 == a ? 1 : b(a) } } };
    J.$cS = function() {
        0 <= window.navigator.userAgent.indexOf("iPhone OS 7_1") && (window.addEventListener("scroll", function(a) {
            window.document.activeElement == window.document.body && 0 < window.scrollY &&
                (window.document.body.scrollTop = 0)
        }, !0), window.document.body.scrollTop = 0)
    };
    J.$dS = function(a, b, c) { var d = a.getContext("2d", null);
        d.drawImage(a, b - 1, 0, 1, c, b, 0, 1, c);
        d.drawImage(a, 0, c - 1, b, 1, 0, c, b, 1) };
    J.$eS = function(a) { for (a = (16777215 & a).toString(16); 6 > a.length;) a = "0" + p.string(a); return "#" + p.string(a) };
    J.$fS = function() { try { return window.self != window.parent } catch (a) { return a instanceof s && (a = a.val), !0 } };
    J.$gS = function(a) { return 157286400 };
    var tb = function(a, b, c) {
        this.$iM = !1;
        this.$mF = a;
        this.$jS = b;
        this.$kS =
            c
    };
    h.$CIC = tb;
    tb.__name__ = ["$CIC"];
    tb.__interfaces__ = [Ef];
    tb.__super__ = Ea;
    tb.prototype = m(Ea.prototype, {
        createTexture: function(a, b) {
            var c = b.fontSize + 'px "' + this.$mF + '"';
            b.bold && (c = "bold " + c);
            b.italic && (c = "italic " + c);
            var d = this.$iS(c),
                e;
            e = window.document.createElement("canvas");
            var f = e.getContext("2d", null);
            f.font = c;
            0 < b.wrapWidth && (a = this.$hS(f, a, b.wrapWidth));
            var g = a.split("\n"),
                h;
            if (0 < b.wrapWidth && b.align != Ia.Left) h = b.wrapWidth;
            else
                for (var l = h = 0; l < g.length;) { var m = g[l];++l;
                    h = Math.max(h, f.measureText(m).width) } h +=
                b.strokeWidth;
            var l = d.$mS + d.$nS + b.strokeWidth,
                m = h + 4,
                p = l + (l + b.lineSpacing) * (g.length - 1) + 4;
            b.italic && (m += 0.25 * b.fontSize);
            e.width = Math.ceil(m);
            e.height = Math.ceil(p);
            f.font = c;
            f.textBaseline = "alphabetic";
            0 < b.strokeWidth && (f.strokeStyle = J.$eS(b.strokeColor), f.lineWidth = b.strokeWidth);
            f.fillStyle = J.$eS(b.color);
            var r;
            switch (b.align[1]) {
                case 0:
                    r = 0.5 * b.strokeWidth;
                    f.textAlign = "left"; break;
                case 1:
                    r = h / 2;
                    f.textAlign = "center"; break;
                case 2:
                    r = h - 0.5 * b.strokeWidth, f.textAlign = "right" } c = d.$mS + 0.5 * b.strokeWidth;
            for (d =
                0; d < g.length;) h = g[d], ++d, 0 < b.strokeWidth && f.strokeText(h, r | 0, c | 0), f.fillText(h, r | 0, c | 0), c += l + b.lineSpacing;
            return t.$EI.$UH.createTextureFromImage(e, Aa.RGBA_4444)
        },
        $hS: function(a, b, c) { var d = "";
            b = b.split("\n"); for (var e = 0, f = b.length; e < f;) { for (var g = e++, h = c, l = b[g].split(" "), m = 0, p = l.length; m < p;) { var r = m++,
                        s = a.measureText(l[r]).width,
                        t = s + a.measureText(" ").width;
                    0 == r || t > h ? (0 < r && (d += "\n"), d += l[r], h = c - s) : (h -= t, d += " " + l[r]) } g < b.length - 1 && (d += "\n") } return d },
        $iS: function(a) {
            null == tb.$lS && (tb.$lS = new T);
            var b = tb.$lS.get(a);
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
            d.fillRect(0, 0, e, f);
            d.font = a;
            d.textBaseline = "alphabetic";
            d.fillStyle = "#000";
            d.fillText("|M\u00c9q", 0, b);
            c = d.getImageData(0, 0, e, f).data;
            for (var d = c.length, e = 4 * e, g = 0, h = 0, l = !1; g < b;) {
                for (var m = 0; m < e;) { if (255 != c[h + m]) { l = !0; break } m += 4 }
                if (l) break;
                else h += e;
                ++g
            }
            m = b - g;
            h = d - e;
            l = !1;
            for (g = f; g > b;) { for (f = 0; f < e;) { if (255 != c[h + f]) { l = !0; break } f += 4 } if (l) break;
                else h -= e;--g } b = new Bh(m, g - b);
            tb.$lS.set(a, b);
            return b
        },
        $gM: function() { null != this.$jS && (window.document.fonts["delete"](this.$jS), this.$jS = null);
            null != this.$kS && (null != this.$kS.parentNode && this.$kS.parentNode.removeChild(this.$kS), this.$kS = null) },
        __class__: tb
    });
    var Bh = function(a, b) { this.$mS = a;
        this.$nS = b };
    h.$CJC = Bh;
    Bh.__name__ = ["$CJC"];
    Bh.prototype = { __class__: Bh };
    var U = function(a) {
        this.$iM = !1;
        this.$rS =
            a
    };
    h.$CMC = U;
    U.__name__ = ["$CMC"];
    U.__interfaces__ = [Wc];
    U.__properties__ = { get_supported: "get_supported" };
    U.get_supported = function() {
        if (U.$zS) {
            U.$zS = !1;
            var a = J.$QS("AudioContext").value;
            if (null != a && (U.$tS = new a, U.$uS = U.$vS(), U.$uS.connect(U.$tS.destination), t.volume.watch(function(a, b) { U.$uS.gain.value = a }), t.$EI.$WH.down.connect(function(a) {
                    (new U(U.$yS())).play() }).once(), t.$EI.$WH.up.connect(function(a) { "suspended" == U.$tS.state && U.$tS.resume() }), J.$LS)) var b = null,
                b = t.$EI.$WH.up.connect(function(a) {
                    var d =
                        (new U(U.$yS())).play();
                    J.$PS(function() { var a = d.$CT();
                        (null == a || 2 <= a) && b.dispose() })
                })
        }
        return null != U.$tS
    };
    U.$vS = function() { return null != U.$tS.createGain ? U.$tS.createGain() : U.$tS.createGainNode() };
    U.$wS = function(a, b) { null != a.start ? a.start(0, b) : a.noteOn(0, b) };
    U.$xS = function(a) { null != a.stop ? a.stop(0) : a.noteOff(0) };
    U.$yS = function() { null == U.$$S && (U.$$S = U.$tS.createBuffer(1, 1, 22050)); return U.$$S };
    U.__super__ = Ea;
    U.prototype = m(Ea.prototype, {
        play: function(a) { null == a && (a = 1); return new Fd(this, a, !1) },
        loop: function(a) {
            null ==
                a && (a = 1);
            return new Fd(this, a, !0)
        },
        get_duration: function() { return this.$rS.duration },
        $gM: function() { this.$rS = null },
        __class__: U,
        __properties__: { get_duration: "get_duration" }
    });
    var Fd = function(a, b, c) { this.$IT = 0;
        this.$DT = -1; var d = this;
        this.$CO = a;
        this.$$H = U.$uS;
        this.$DO = new wa(!1);
        this.$HT = c;
        this.$XI = a.get_duration();
        this.volume = new D(b, function(a, b) { null != d.$FT && d.$AT(a) });
        this.$xR(0);
        t.hidden.$nH && this.set_paused(!0) };
    h.$CNC = Fd;
    Fd.__name__ = ["$CNC"];
    Fd.__interfaces__ = [Rf, Xc];
    Fd.prototype = {
        get_sound: function() { return this.$CO },
        set_paused: function(a) { a != 0 <= this.$DT && (a ? (this.$_S(), this.$DT = this.get_position()) : (this.$DO.$nH || this.$xR(this.$DT), this.$DT = -1)); return a },
        get_complete: function() { return this.$DO },
        get_position: function() { return this.$DO.$nH ? this.$XI : 0 <= this.$DT ? this.$DT : (U.$tS.currentTime - this.$ET + this.$IT) % this.$XI },
        update: function(a) { this.volume.update(a);
            null != this.$FT && 3 == this.$FT.playbackState && this.$DO.set__(!0); return this.$DO.$nH || 0 <= this.$DT ? (this.$oR = !1, this.$_R.dispose(), this.$_S(), !0) : !1 },
        $_S: function() {
            if (null !=
                this.$FT) { U.$xS(this.$FT);
                this.$FT.disconnect();
                this.$FT.onended = null; if (J.$LS) { var a = U.$yS(); try { this.$FT.buffer = a } catch (b) { b instanceof s && (b = b.val) } } this.$FT = null }
        },
        dispose: function() { this.set_paused(!0);
            this.$DO.set__(!0) },
        $AT: function(a) { null == this.$GT && (this.$GT = U.$vS(), this.$BT(this.$GT));
            this.$GT.gain.value = a },
        $BT: function(a) { 0 <= this.$DT || (this.$FT.disconnect(), this.$FT.connect(a));
            a.connect(this.$$H);
            this.$$H = a },
        $xR: function(a) {
            var b = this;
            this.$FT = U.$tS.createBufferSource();
            this.$FT.buffer =
                this.$CO.$rS;
            this.$FT.loop = this.$HT;
            this.$FT.onended = function() { b.$DO.set__(!0) };
            U.$wS(this.$FT, a);
            this.$FT.connect(this.$$H);
            this.$IT = 0 <= this.$DT ? this.$DT : 0;
            this.$ET = U.$tS.currentTime;
            1 == this.volume.$nH && null == this.$GT || this.$AT(this.volume.$nH);
            this.$oR || (Ob.$lH.$NH.$FQ(this), this.$oR = !0, this.$_R = t.hidden.get_changed().connect(function(a, d) { a ? (b.$AS = 0 <= b.$DT, b.set_paused(!0)) : b.set_paused(b.$AS) }))
        },
        $CT: function() { return null != this.$FT ? this.$FT.playbackState : 3 },
        __class__: Fd,
        __properties__: {
            get_position: "get_position",
            get_complete: "get_complete",
            get_sound: "get_sound",
            set_paused: "set_paused"
        }
    };
    var Ch = function(a) {
        this.$PU = (new Nf).$eN(157286400).$gN(function(a, b) { return a.$mU() });
        this.$JU = this.$KU = this.$LU = this.$MU = this.$NU = this.$OU = 0;
        this.$BU = [];
        this.$$T = !0;
        this.$yT = !1;
        this.$wT = this.$xT = null;
        this.$vT = !1;
        this.$uT = null;
        this.$tT = 0;
        this.$pT = this.$qT = this.$WK = this.$rT = this.$sT = null;
        this.$oT = !1;
        this.$nT = null;
        this.$mT = new Ua;
        this.$lT = 0;
        this.$jT = this.$kT = null;
        this.$KT = [];
        this.$JT = null;
        var b = this;
        this.$iT = a;
        this.$PU.$fN(function(a,
            d) { b.$UT(a, d) });
        this.$PU.$eN(J.$gS(a));
        t.lowMemoryWarning.connect(function() { b.$PU.dispose() });
        a.clearColor(0, 0, 0, 0);
        a.enable(3042);
        a.pixelStorei(37441, 1);
        a.pixelStorei(3317, 1);
        this.$zT = a.createBuffer();
        a.bindBuffer(34962, this.$zT);
        this.$_T = a.createBuffer();
        this.$AU = a.createBuffer();
        this.$kT = this.$_T;
        this.$CU = new Zc(a, 0);
        this.$DU = new Zc(a, 1);
        this.$EU = new Zc(a, 2);
        this.$FU = new $c(a, 0);
        this.$GU = new $c(a, 1);
        this.$HU = new $c(a, 2);
        this.$IU = new Vf(a);
        this.$hT(16)
    };
    h.$COC = Ch;
    Ch.__name__ = ["$COC"];
    Ch.prototype = {
        $LT: function(a, b) { this.$iT.viewport(0, 0, a, b);
            this.$MU = a;
            this.$NU = b },
        $MT: function() { this.$OU = this.$OU + 1 | 0 },
        $NT: function() { this.$gT();
            this.$iT.flush() },
        $PT: function(a) { a == this.$WK && (this.$gT(), this.$WK = null);
            this.$WT(a);
            null != a.$lU ? this.$UT(a, a.$lU) : this.$PU.$lN(a) },
        $QT: function(a) { if (a.$kU) { a.$kU = !1; var b = this.$PU.$lN(a, !1);
                null != b ? a.$lU = b : this.$ST(a);
                a.$gU = null;
                a.$hU = null } },
        $RT: function() {
            var a = this.$iT.createTexture();
            this.$TT(a);
            this.$iT.texParameteri(3553, 10242, 33071);
            this.$iT.texParameteri(3553,
                10243, 33071);
            this.$iT.texParameteri(3553, 10240, 9729);
            this.$iT.texParameteri(3553, 10241, 9729);
            return a
        },
        $ST: function(a) {
            var b;
            b = a.$kU ? this.$PU.$aN(a) : a.$lU;
            if (null == b) {
                b = this.$RT();
                b = new Dh(b);
                if (a.$kU) { var c = !0; if (this.$PU.$oN + a.$mU() > this.$PU.$pN) { var d = this.$PU.$iN();
                        2 > this.$OU - d.$jU && (c = !1) } this.$PU.$hN(a, b, c) } else a.$lU = b;
                switch (a.$nU[1]) {
                    case 2:
                    case 3:
                        c = 6407; break;
                    default:
                        c = 6408 }
                switch (a.$nU[1]) {
                    case 3:
                        d = 33635; break;
                    case 1:
                        d = 32819; break;
                    default:
                        d = 5121 }
                var e = a.$gU;
                if (null != e) {
                    if (a.width != e.width ||
                        a.height != e.height) { var f = J.$YS(a.width, a.height);
                        f.getContext("2d", null).drawImage(e, 0, 0);
                        J.$dS(f, e.width, e.height);
                        e = f } this.$iT.texImage2D(3553, 0, c, c, d, e)
                } else this.$iT.texImage2D(3553, 0, c, a.width, a.height, 0, c, d, null)
            }
            a.$jU = this.$OU;
            return b
        },
        $TT: function(a) { this.$xT != a && (this.$xT = a, this.$iT.bindTexture(3553, a)) },
        $UT: function(a, b) { a == this.$WK && (this.$gT(), this.$WK = null);
            this.$iT.deleteTexture(b.$fU);
            null != b.$DM && this.$iT.deleteTexture(b.$DM) },
        $VT: function(a) {
            if (this.$uT != a)
                if (this.$uT = a, null != a) {
                    var b =
                        null;
                    null == a.$iU && (a.$iU = this.$iT.createFramebuffer(), this.$QT(a), b = a.$lU.$fU);
                    this.$iT.bindFramebuffer(36160, a.$iU);
                    this.$iT.viewport(0, 0, a.width, a.height);
                    null != b && this.$iT.framebufferTexture2D(36160, 36064, 3553, b, 0)
                } else this.$iT.bindFramebuffer(36160, null), this.$iT.viewport(0, 0, this.$MU, this.$NU)
        },
        $WT: function(a) { a == this.$nT && (this.$gT(), this.$nT = null);
            null != a.$iU && (this.$iT.deleteFramebuffer(a.$iU), a.$iU = null) },
        $XT: function(a, b, c, d, e, f) {
            f.$PN != this.$WK && (this.$gT(), this.$WK = f.$PN);
            return this.$fT(a,
                b, c, d, e, this.$YT(f.$PN, e))
        },
        $YT: function(a, b) { return b ? this.$DU : null != a.$hU && a.$hU.separateAlpha ? this.$EU : this.$CU },
        $ZT: function(a, b, c, d, e, f) { f.$PN != this.$WK && (this.$gT(), this.$WK = f.$PN); if (f.$QN != this.$mT.x || f.$RN != this.$mT.y || f.$bJ != this.$mT.width || f.$cJ != this.$mT.height) this.$gT(), this.$mT.set(f.$QN, f.$RN, f.$bJ, f.$cJ); return this.$fT(a, b, c, d, e, this.$aT(f.$PN, e)) },
        $aT: function(a, b) { return b ? this.$GU : null != a.$hU && a.$hU.separateAlpha ? this.$HU : this.$FU },
        $bT: function(a, b, c, d, e) {
            return this.$fT(a, b,
                c, d, e, this.$IU)
        },
        $cT: function(a, b, c, d, e, f) { return this.$eT(a, b, c, d, e, this.$IU, f) },
        $dT: function(a, b, c, d, e, f, g) { f.$PN != this.$WK && (this.$gT(), this.$WK = f.$PN); if (f.$QN != this.$mT.x || f.$RN != this.$mT.y || f.$bJ != this.$mT.width || f.$cJ != this.$mT.height) this.$gT(), this.$mT.set(f.$QN, f.$RN, f.$bJ, f.$cJ); return this.$eT(a, b, c, d, e, this.$aT(f.$PN, e), g) },
        $VK: function(a, b, c, d, e, f, g) {
            a != this.$nT && (this.$gT(), this.$nT = a);
            b != this.$jT && (this.$gT(), this.$jT = b);
            d != this.$lT && (this.$gT(), this.$lT = d);
            e != this.$oT && (this.$gT(),
                this.$oT = e);
            f != this.$qT && (this.$gT(), f.$VK(), this.$qT = f);
            g != this.$kT && (this.$gT(), this.$kT = g);
            if (null != c || null != this.$pT) null != c && null != this.$pT && this.$pT.equals(c) || (this.$gT(), this.$pT = null != c ? c.clone(this.$pT) : null, this.$yT = !0)
        },
        $eT: function(a, b, c, d, e, f, g) { this.$VK(a, b, c, d, e, f, this.$AU);
            a = this.$KT.length;
            f = a / f.$sU | 0; for (b = 0; b < g.length;) c = g[b], ++b, this.$BU.push(c + f); return a },
        $fT: function(a, b, c, d, e, f) {
            this.$VK(a, b, c, d, e, f, this.$_T);
            this.$JU >= this.$KU && this.$hT(2 * this.$KU);
            ++this.$JU;
            a = this.$LU;
            this.$LU += 4 * f.$sU;
            return a
        },
        $gT: function() {
            if (this.$kT == this.$_T) { if (1 > this.$JU) return } else if (1 > this.$BU.length) return;
            this.$VT(this.$nT);
            if (this.$jT != this.$rT) { switch (this.$jT[1]) {
                    case 0:
                        this.$iT.blendFunc(1, 771); break;
                    case 1:
                        this.$iT.blendFunc(1, 1); break;
                    case 2:
                        this.$iT.blendFunc(774, 771); break;
                    case 3:
                        this.$iT.blendFunc(1, 769); break;
                    case 4:
                        this.$iT.blendFunc(0, 770); break;
                    case 5:
                        this.$iT.blendFunc(1, 0) } this.$rT = this.$jT }
            if (this.$lT != this.$tT) {
                if (0 < this.$lT)
                    if (0 == this.$tT && this.$iT.enable(2960),
                        this.$oT) { var a = 1 << this.$lT - 1;
                        this.$iT.stencilMask(a);
                        this.$tT < this.$lT && this.$iT.clear(1024);
                        this.$iT.stencilFunc(514, a - 1, 255) } else a = (1 << this.$lT) - 1, this.$iT.stencilFunc(514, a, a);
                else this.$iT.disable(2960);
                this.$tT = this.$lT
            }
            this.$oT != this.$vT && (this.$oT ? (this.$iT.stencilMask(1 << this.$lT - 1), this.$iT.clear(1024), this.$iT.colorMask(!1, !1, !1, !1), this.$iT.stencilFunc(514, (1 << this.$lT - 1) - 1, 255), this.$iT.stencilOp(7680, 7680, 7682)) : (this.$iT.colorMask(!0, !0, !0, !0), a = (1 << this.$lT) - 1, this.$iT.stencilFunc(514,
                a, a), this.$iT.stencilOp(7680, 7680, 7680)), this.$vT = this.$oT);
            this.$yT && (null != this.$pT ? (this.$iT.enable(3089), this.$iT.scissor(this.$pT.x | 0, this.$pT.y | 0, this.$pT.width | 0, this.$pT.height | 0)) : this.$iT.disable(3089), this.$yT = !1);
            null != this.$WK && (a = this.$ST(this.$WK), null != a.$DM ? (this.$iT.activeTexture(33985), this.$TT(a.$fU), this.$iT.activeTexture(33984), this.$TT(a.$DM)) : this.$TT(a.$fU));
            this.$qT != this.$wT && (this.$qT.$uU(this.$wT), this.$wT = this.$qT);
            this.$qT != this.$FU && this.$qT != this.$GU && this.$qT != this.$HU ||
                this.$qT.$CV(this.$mT.x / this.$WK.width, this.$mT.y / this.$WK.height, this.$mT.width / this.$WK.width, this.$mT.height / this.$WK.height);
            this.$kT != this.$sT && (this.$iT.bindBuffer(34963, this.$kT), this.$sT = this.$kT);
            if (this.$sT == this.$_T) {
                if (this.$$T) { this.$$T = !1; for (var a = new Uint16Array(6 * this.$KU), b = 0, c = this.$KU; b < c;) { var d = b++,
                            e = 6 * d,
                            d = 4 * d;
                        a[e] = d;
                        a[e + 1] = d + 1;
                        a[e + 2] = d + 2;
                        a[e + 3] = d + 2;
                        a[e + 4] = d + 3;
                        a[e + 5] = d } this.$iT.bufferData(34963, a, 35044) } this.$iT.bufferData(34962, this.$JT.subarray(0, this.$LU), 35048);
                this.$iT.drawElements(4,
                    6 * this.$JU, 5123, 0);
                this.$LU = this.$JU = 0
            } else a = new Uint16Array(this.$BU), this.$iT.bufferData(34963, a, 35048), this.$BU.length = 0, this.$iT.bufferData(34962, new Float32Array(this.$KT), 35048), this.$KT.length = 0, this.$iT.drawElements(4, a.length, 5123, 0)
        },
        $hT: function(a) { 1024 < a ? this.$gT() : (this.$KU = a, a = new Float32Array(32 * a), null != this.$JT && a.set(this.$JT, 0), this.$JT = a, this.$$T = !0) },
        __class__: Ch
    };
    var ub = function(a, b) { this.$UU = this.$rQ = null;
        null == ub.$WU && (ub.$WU = new Float32Array(8));
        this.$TU = a;
        this.$HR = b };
    h.$CPC =
        ub;
    ub.__name__ = ["$CPC"];
    ub.__interfaces__ = [Bd];
    ub.prototype = {
        save: function() { var a = this.$rQ,
                b = this.$rQ.next;
            null == b && (b = new Wf, b.$vQ = a, a.next = b);
            a.$XU.clone(b.$XU);
            b.$FM = a.$FM;
            b.$HM = a.$HM;
            b.$JM = a.$JM;
            b.$DM = a.$DM;
            b.$NK = a.$NK;
            b.$OK = null != a.$OK ? a.$OK.clone(b.$OK) : null;
            b.$YU = a.$YU;
            b.$ZU = a.$ZU;
            this.$rQ = b },
        translate: function(a, b) { var c = this.$rQ.$XU;
            c.m02 += c.m00 * a + c.m01 * b;
            c.m12 += c.m10 * a + c.m11 * b },
        scale: function(a, b) { var c = this.$rQ.$XU;
            c.m00 *= a;
            c.m10 *= a;
            c.m01 *= b;
            c.m11 *= b },
        rotate: function(a) {
            var b = this.$rQ.$XU;
            a = 3.141592653589793 * a / 180;
            var c = Math.sin(a);
            a = Math.cos(a);
            var d = b.m00,
                e = b.m10,
                f = b.m01,
                g = b.m11;
            b.m00 = d * a + f * c;
            b.m10 = e * a + g * c;
            b.m01 = f * a - d * c;
            b.m11 = g * a - e * c
        },
        transform: function(a, b, c, d, e, f) { var g = this.$rQ;
            ub.$VU.set(a, b, c, d, e, f);
            Ab.multiply(g.$XU, ub.$VU, g.$XU) },
        restore: function() { this.$rQ = this.$rQ.$vQ },
        drawTexture: function(a, b, c) { this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height()) },
        drawSubTexture: function(a, b, c, d, e, f, g) {
            var h = this.$rQ,
                l = a.$PN;
            b = this.$SU(b, c, f, g);
            c = l.width;
            l = l.height;
            d = (a.$QN + d) /
                c;
            e = (a.$RN + e) / l;
            f = d + f / c;
            g = e + g / l;
            c = h.$FM;
            var l = h.$HM,
                m = h.$JM,
                p = h.$DM;
            a = this.$TU.$XT(this.$HR, h.$NK, h.$OK, h.$YU, h.$ZU, a);
            h = this.$TU.$JT;
            h[a] = b[0];
            h[++a] = b[1];
            h[++a] = d;
            h[++a] = e;
            h[++a] = c;
            h[++a] = l;
            h[++a] = m;
            h[++a] = p;
            h[++a] = b[2];
            h[++a] = b[3];
            h[++a] = f;
            h[++a] = e;
            h[++a] = c;
            h[++a] = l;
            h[++a] = m;
            h[++a] = p;
            h[++a] = b[4];
            h[++a] = b[5];
            h[++a] = f;
            h[++a] = g;
            h[++a] = c;
            h[++a] = l;
            h[++a] = m;
            h[++a] = p;
            h[++a] = b[6];
            h[++a] = b[7];
            h[++a] = d;
            h[++a] = g;
            h[++a] = c;
            h[++a] = l;
            h[++a] = m;
            h[++a] = p
        },
        drawPattern: function(a, b, c, d, e) {
            var f = this.$rQ,
                g = a.$PN;
            b =
                this.$SU(b, c, d, e);
            d /= g.width;
            e /= g.height;
            g = f.$FM;
            c = f.$HM;
            var h = f.$JM,
                l = f.$DM;
            a = this.$TU.$ZT(this.$HR, f.$NK, f.$OK, f.$YU, f.$ZU, a);
            f = this.$TU.$JT;
            f[a] = b[0];
            f[++a] = b[1];
            f[++a] = 0;
            f[++a] = 0;
            f[++a] = g;
            f[++a] = c;
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
            var f = this.$rQ;
            b = this.$SU(b,
                c, d, e);
            c = f.$FM * (a & 16711680) / 16711680;
            d = f.$HM * (a & 65280) / 65280;
            a = f.$JM * (a & 255) / 255;
            e = f.$DM;
            var f = this.$TU.$bT(this.$HR, f.$NK, f.$OK, f.$YU, f.$ZU),
                g = this.$TU.$JT;
            g[f] = b[0];
            g[++f] = b[1];
            g[++f] = c;
            g[++f] = d;
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
            var d = this.$rQ,
                e = d.$XU,
                f = e.m00,
                g = e.m01,
                h = e.m02,
                l = e.m10,
                m = e.m11,
                e = e.m12,
                p = d.$FM *
                (a & 16711680) / 16711680,
                r = d.$HM * (a & 65280) / 65280;
            a = d.$JM * (a & 255) / 255;
            var s = d.$DM;
            c = this.$TU.$cT(this.$HR, d.$NK, d.$OK, d.$YU, d.$ZU, c);
            for (var d = this.$TU.$KT, t = 0, u = b.length; t < u;) { var v = b[t++],
                    w = b[t++];
                d[c++] = v * f + w * g + h;
                d[c++] = v * l + w * m + e;
                d[c++] = p;
                d[c++] = r;
                d[c++] = a;
                d[c++] = s }
        },
        drawTriangles: function(a, b, c) {
            var d = this.$rQ,
                e = a.$PN,
                f = d.$XU,
                g = f.m00,
                h = f.m01,
                l = f.m02,
                m = f.m10,
                p = f.m11,
                f = f.m12,
                r = d.$FM,
                s = d.$HM,
                t = d.$JM,
                u = d.$DM;
            a = this.$TU.$dT(this.$HR, d.$NK, d.$OK, d.$YU, d.$ZU, a, c);
            c = this.$TU.$KT;
            for (var d = 0, v = b.length; d <
                v;) { var w = b[d++],
                    y = b[d++];
                c[a++] = w * g + y * h + l;
                c[a++] = w * m + y * p + f;
                c[a++] = w / e.width;
                c[a++] = y / e.height;
                c[a++] = r;
                c[a++] = s;
                c[a++] = t;
                c[a++] = u }
        },
        fillPolygon: function(a, b) { var c = ya.$SQ(b);
            null != c && this.fillTriangles(a, b, c) },
        drawPolygon: function(a, b) { var c = ya.$SQ(b);
            null != c && this.drawTriangles(a, b, c) },
        drawCircle: function(a, b, c, d, e) { null == e && (e = 50); var f = [],
                g = [];
            ya.$NQ(f, g, b, c, d, d, e) && this.drawTriangles(a, f, g) },
        fillCircle: function(a, b, c, d, e) {
            null == e && (e = 50);
            var f = [],
                g = [];
            ya.$NQ(f, g, b, c, d, d, e) && this.fillTriangles(a,
                f, g)
        },
        strokeCircle: function(a, b, c, d, e, f) { null == f && (f = 50); var g = [],
                h = [];
            ya.$QQ(g, h, b, c, d, d, e, f) && this.fillTriangles(a, g, h) },
        drawEllipse: function(a, b, c, d, e, f) { null == f && (f = 50); var g = [],
                h = [];
            ya.$NQ(g, h, b, c, d, e, f) && this.drawTriangles(a, g, h) },
        fillEllipse: function(a, b, c, d, e, f) { null == f && (f = 50); var g = [],
                h = [];
            ya.$NQ(g, h, b, c, d, e, f) && this.fillTriangles(a, g, h) },
        strokeEllipse: function(a, b, c, d, e, f, g) { null == g && (g = 50); var h = [],
                l = [];
            ya.$QQ(h, l, b, c, d, e, f, g) && this.fillTriangles(a, h, l) },
        fillArc: function(a, b, c, d, e, f, g) {
            null ==
                g && (g = 50);
            var h = [],
                l = [];
            ya.$OQ(h, l, b, c, d, 3.141592653589793 * e / 180, 3.141592653589793 * f / 180, g) && this.fillTriangles(a, h, l)
        },
        strokeArc: function(a, b, c, d, e, f, g, h) { null == h && (h = 50); var l = [],
                m = [];
            ya.$PQ(l, m, b, c, d, 3.141592653589793 * e / 180, 3.141592653589793 * f / 180, g, h) && this.fillTriangles(a, l, m) },
        strokeLines: function(a, b, c) { var d = [],
                e = [];
            ya.$RQ(d, e, b, c) && this.fillTriangles(a, d, e) },
        drawLines: function(a, b, c) { var d = [],
                e = [];
            ya.$RQ(d, e, b, c) && this.drawTriangles(a, d, e) },
        multiplyAlpha: function(a) { this.$rQ.$DM *= a },
        setAlpha: function(a) {
            this.$rQ.$DM =
                a
        },
        tint: function(a, b, c) { var d = this.$rQ;
            d.$FM *= a;
            d.$HM *= b;
            d.$JM *= c },
        setBlendMode: function(a) { this.$rQ.$NK = a },
        beginMask: function() { var a = this.$rQ;++a.$YU;
            a.$ZU = !0 },
        endMask: function() { this.$rQ.$ZU = !1 },
        applyScissor: function(a, b, c, d) { var e = this.$rQ,
                f = ub.$WU;
            f[0] = a;
            f[1] = b;
            f[2] = a + c;
            f[3] = b + d;
            e.$XU.transformArray(f, 4, f);
            this.$UU.transformArray(f, 4, f);
            a = f[0];
            b = f[1];
            c = f[2] - a;
            d = f[3] - b;
            0 > c && (a += c, c = -c);
            0 > d && (b += d, d = -d);
            e.$aU(a, b, c, d) },
        willRender: function() { this.$TU.$MT() },
        didRender: function() { this.$TU.$NT() },
        onResize: function(a, b) { this.$rQ = new Wf; var c;
            c = null != this.$HR ? -1 : 1;
            this.$rQ.$XU.set(2 / a, 0, 0, -2 * c / b, -1, c);
            this.$UU = new Ab;
            this.$UU.set(2 / a, 0, 0, 2 / b, -1, -1);
            this.$UU.invert() },
        $SU: function(a, b, c, d) { c = a + c;
            d = b + d; var e = ub.$WU;
            e[0] = a;
            e[1] = b;
            e[2] = c;
            e[3] = b;
            e[4] = c;
            e[5] = d;
            e[6] = a;
            e[7] = d;
            this.$rQ.$XU.transformArray(e, 8, e); return e },
        __class__: ub
    };
    var Wf = function() { this.$vQ = this.next = null;
        this.$ZU = !1;
        this.$YU = 0;
        this.$FM = this.$HM = this.$JM = this.$DM = 1;
        this.$OK = null;
        this.$NK = da.Normal;
        this.$XU = new Ab };
    h.$CQC = Wf;
    Wf.__name__ = ["$CQC"];
    Wf.prototype = { $aU: function(a, b, c, d) { if (null != this.$OK) { var e = xa.max(this.$OK.x, a),
                    f = xa.max(this.$OK.y, b);
                c = xa.min(this.$OK.x + this.$OK.width, a + c);
                d = xa.min(this.$OK.y + this.$OK.height, b + d);
                a = e;
                b = f;
                c -= e;
                d -= f } else this.$OK = new Ua;
            this.$OK.set(Math.round(a), Math.round(b), Math.round(c), Math.round(d)) }, __class__: Wf };
    var Me = function(a, b) {
        this.$dU = !1;
        var c = this;
        this.$yQ = new wa(!0);
        this.$bU = b;
        this.$iK();
        if (0 == b.getError()) {
            this.$dU = !0;
            var d = b.canvas;
            d.addEventListener("webglcontextlost", function(a) {
                a.preventDefault();
                c.graphics = null;
                c.$yQ.set__(!1)
            }, !1);
            d.addEventListener("webglcontextrestored", function(a) { c.$iK();
                c.$yQ.set__(!0) }, !1);
            a.resize.connect(Ra(this, this.$eU))
        } else null
    };
    h.$CRC = Me;
    Me.__name__ = ["$CRC"];
    Me.__interfaces__ = [Cd];
    Me.prototype = {
        createTextureFromImage: function(a, b) { var c = new ad(this, a.width, a.height);
            null != b && b != Aa.COMPRESSED && (c.$nU = b);
            c.$gU = a; if (this.$bU.isContextLost()) return null;
            this.$cU.$QT(c); return c.createTexture(a.width, a.height) },
        createTexture: function(a, b, c) {
            var d = new ad(this, a,
                b);
            null != c && c != Aa.COMPRESSED && (d.$nU = c);
            return d.createTexture(a, b)
        },
        createSystemFont: function(a) { return new tb(a) },
        getTextureAssetFormats: function() { return [] },
        willRender: function() { this.graphics.willRender() },
        didRender: function() { this.graphics.didRender() },
        $eU: function() { if (null != this.graphics) { var a = this.$bU.canvas,
                    b = a.width,
                    a = a.height;
                this.$cU.$LT(b, a);
                this.graphics.onResize(b, a) } },
        $iK: function() { this.$cU = new Ch(this.$bU);
            this.graphics = new ub(this.$cU, null);
            this.$eU() },
        __class__: Me
    };
    var Dh = function(a) {
        this.$DM =
            null;
        this.$fU = a
    };
    h.$CSC = Dh;
    Dh.__name__ = ["$CSC"];
    Dh.prototype = { __class__: Dh };
    var Xf = function(a, b, c) { Sb.call(this, a, b, c) };
    h.$CTC = Xf;
    Xf.__name__ = ["$CTC"];
    Xf.__super__ = Sb;
    Xf.prototype = m(Sb.prototype, { __class__: Xf });
    var ad = function(a, b, c) { this.$GR = null;
        this.$nU = Aa.RGBA;
        this.$lU = null;
        this.$kU = !0;
        this.$jU = -1;
        this.$gU = this.$hU = this.$iU = null;
        this.$iM = !1;
        this.$UH = a;
        this.width = 2 > b ? 2 : b;
        this.height = 2 > c ? 2 : c };
    h.$CUC = ad;
    ad.__name__ = ["$CUC"];
    ad.__interfaces__ = [Qf];
    ad.__super__ = Ea;
    ad.prototype = m(Ea.prototype, {
        createTexture: function(a,
            b) { return new Xf(this, a, b) },
        getGraphics: function() { null == this.$GR && (this.$GR = new ub(this.$UH.$cU, this), this.$GR.onResize(this.width, this.height)); return this.$GR },
        $mU: function() { var a; switch (this.$nU[1]) {
                case 3:
                    a = 2; break;
                case 1:
                    a = 2; break;
                case 2:
                    a = 3; break;
                default:
                    a = 4 } return a * this.width * this.height },
        $gM: function() { this.$UH.$cU.$PT(this);
            this.$GR = this.$lU = this.$iU = this.$hU = this.$gU = null },
        __class__: ad
    });
    var ab = function(a) { this.$AV = -1;
        this.$_U = [];
        this.$yU = this.$zU = this.$$U = null;
        this.$sU = 0;
        this.$iT = a };
    h.$CYC = ab;
    ab.__name__ = ["$CYC"];
    ab.$BV = function(a, b, c) { b = a.createShader(b);
        a.shaderSource(b, c);
        a.compileShader(b); return b };
    ab.prototype = {
        $tU: function() { null },
        $VK: function() { null == this.$yU && (this.$yU = this.$iT.createProgram(), this.$tU(), this.$iT.detachShader(this.$yU, this.$zU), this.$iT.deleteShader(this.$zU), this.$zU = null, this.$iT.detachShader(this.$yU, this.$$U), this.$iT.deleteShader(this.$$U), this.$$U = null) },
        $uU: function(a) {
            this.$iT.useProgram(this.$yU);
            if (0 > this.$AV) {
                for (var b = this.$AV = 0, c = this.$_U; b <
                    c.length;) { var d = c[b];++b; var e = d.$OV();
                    d.$NV = this.$AV;
                    this.$AV += e } this.$_U.sort(function(a, b) { return a.$MV - b.$MV })
            }
            if (null != a) { b = a.$_U.length; for (c = this.$_U.length; b < c;) d = b++, this.$iT.enableVertexAttribArray(d);
                b = this.$_U.length; for (c = a.$_U.length; b < c;) d = b++, this.$iT.disableVertexAttribArray(d) } else
                for (b = 0, c = this.$_U.length; b < c;) d = b++, this.$iT.enableVertexAttribArray(d);
            b = 0;
            for (c = this.$_U.length; b < c;) {
                var d = b++,
                    e = this.$_U[d],
                    f;
                f = null != a ? a.$_U[d] : null;
                null != f && f.$cN == e.$cN && f.$GO == e.$GO && a.$AV ==
                    this.$AV && f.$NV == e.$NV || this.$iT.vertexAttribPointer(d, e.$cN, e.$GO, !1, this.$AV, e.$NV)
            }
        },
        $vU: function(a, b) { b = "#ifdef GL_ES\nprecision mediump float;\n#endif\n" + b;
            this.$zU = ab.$BV(this.$iT, 35633, a);
            this.$$U = ab.$BV(this.$iT, 35632, b);
            this.$iT.attachShader(this.$yU, this.$zU);
            this.$iT.attachShader(this.$yU, this.$$U);
            this.$iT.linkProgram(this.$yU);
            this.$iT.useProgram(this.$yU) },
        $wU: function(a, b, c) { a = this.$iT.getAttribLocation(this.$yU, a);
            this.$_U.push(new Eh(a, b, c));
            this.$sU += b },
        $xU: function(a) {
            return this.$iT.getUniformLocation(this.$yU,
                a)
        },
        __class__: ab
    };
    var $c = function(a, b) { this.$DV = this.$EV = this.$FV = this.$GV = -1;
        ab.call(this, a);
        this.$KV = b };
    h.$CZC = $c;
    $c.__name__ = ["$CZC"];
    $c.__super__ = ab;
    $c.prototype = m(ab.prototype, {
        $tU: function() {
            var a;
            switch (this.$KV) {
                case 0:
                case 1:
                    a = "texture2D(u_texture, pos);"; break;
                case 2:
                    a = "vec4(texture2D(u_textureRGB, pos).rgb, texture2D(u_texture, pos).r);" } a = ["varying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nuniform lowp sampler2D u_texture;\nuniform mediump vec4 u_region;", 2 == this.$KV ? "uniform lowp sampler2D u_textureRGB;" :
                "", "void main (void) {\nmediump vec2 pos = u_region.xy + mod(v_uv, u_region.zw);", "lowp vec4 color = " + a, 1 == this.$KV ? "if (color.a == 0.0) discard;" : "", "gl_FragColor = color * v_color;\n}"
            ].join("\n");
            this.$vU("attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp vec4 a_color;\nvarying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_uv = a_uv;\nv_color = vec4(a_color.rgb * a_color.a, a_color.a);\ngl_Position = vec4(a_pos, 0, 1);\n}", a);
            this.$wU("a_pos", 2,
                5126);
            this.$wU("a_uv", 2, 5126);
            this.$wU("a_color", 4, 5126);
            this.$HV = this.$xU("u_texture");
            this.$JV = this.$xU("u_region");
            this.$iT.uniform1i(this.$HV, 0);
            2 == this.$KV && (this.$IV = this.$xU("u_textureRGB"), this.$iT.uniform1i(this.$IV, 1))
        },
        $CV: function(a, b, c, d) { if (a != this.$DV || b != this.$EV || c != this.$FV || d != this.$GV) this.$DV = a, this.$EV = b, this.$FV = c, this.$GV = d, this.$iT.uniform4f(this.$JV, a, b, c, d) },
        __class__: $c
    });
    var Zc = function(a, b) { ab.call(this, a);
        this.$KV = b };
    h.$CaC = Zc;
    Zc.__name__ = ["$CaC"];
    Zc.__super__ = ab;
    Zc.prototype =
        m(ab.prototype, {
            $tU: function() {
                var a;
                switch (this.$KV) {
                    case 0:
                    case 1:
                        a = "texture2D(u_texture, v_uv);"; break;
                    case 2:
                        a = "vec4(texture2D(u_textureRGB, v_uv).rgb, texture2D(u_texture, v_uv).r);" } a = ["varying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nuniform lowp sampler2D u_texture;", 2 == this.$KV ? "uniform lowp sampler2D u_textureRGB;" : "", "void main (void) {", "lowp vec4 color = " + a, 1 == this.$KV ? "if (color.a == 0.0) discard;" : "", "gl_FragColor = color * v_color;\n}"].join("\n");
                this.$vU("attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp vec4 a_color;\nvarying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_uv = a_uv;\nv_color = vec4(a_color.rgb * a_color.a, a_color.a);\ngl_Position = vec4(a_pos, 0, 1);\n}",
                    a);
                this.$wU("a_pos", 2, 5126);
                this.$wU("a_uv", 2, 5126);
                this.$wU("a_color", 4, 5126);
                this.$HV = this.$xU("u_texture");
                this.$LV(0);
                2 == this.$KV && (this.$IV = this.$xU("u_textureRGB"), this.$iT.uniform1i(this.$IV, 1))
            },
            $LV: function(a) { this.$iT.uniform1i(this.$HV, a) },
            __class__: Zc
        });
    var Vf = function(a) { ab.call(this, a) };
    h.$CbC = Vf;
    Vf.__name__ = ["$CbC"];
    Vf.__super__ = ab;
    Vf.prototype = m(ab.prototype, {
        $tU: function() {
            this.$vU("attribute highp vec2 a_pos;\nattribute lowp vec3 a_rgb;\nattribute lowp float a_alpha;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_color = vec4(a_rgb*a_alpha, a_alpha);\ngl_Position = vec4(a_pos, 0, 1);\n}",
                "varying lowp vec4 v_color;\nvoid main (void) {\ngl_FragColor = v_color;\n}");
            this.$wU("a_pos", 2, 5126);
            this.$wU("a_rgb", 3, 5126);
            this.$wU("a_alpha", 1, 5126)
        },
        __class__: Vf
    });
    var Eh = function(a, b, c) { this.$NV = 0;
        this.$MV = a;
        this.$cN = b;
        this.$GO = c };
    h.$CcC = Eh;
    Eh.__name__ = ["$CcC"];
    Eh.prototype = { $OV: function() { var a; switch (this.$GO) {
                case 5126:
                    a = 4; break;
                default:
                    a = 1 } return this.$cN * a }, __class__: Eh };
    var he = function() { this.$bJ = this.$cJ = -1;
        this.$VV = null;
        C.call(this);
        this.scenes = [];
        this.occludedScenes = [];
        this.$sK = new R };
    h["kit.scene.Director"] = he;
    he.__name__ = ["kit", "scene", "Director"];
    he.__super__ = C;
    he.prototype = m(C.prototype, {
        get_entitySlot: function() { return 8 },
        pushScene: function(a, b) { var c;
            c = null != a.owner ? a.owner : (new R).add(a);
            this.$PV(c, b) },
        $PV: function(a, b) { var c = this;
            this.$TV(); var d = this.get_topScene();
            null != d ? this.$UV(d, a, b, function() { c.$YQ(d) }) : (this.$JJ(a), this.$SV()) },
        popScene: function(a) {
            var b = this;
            this.$TV();
            var c = this.get_topScene();
            if (null != c) {
                this.scenes.pop();
                var d = this.get_topScene();
                null != d ? this.$UV(c,
                    d, a,
                    function() { b.$RV(c) }) : (this.$RV(c), this.$SV())
            }
        },
        unwindToScene: function(a, b) { var c;
            c = null != a.owner ? a.owner : (new R).add(a);
            this.$QV(c, b) },
        $QV: function(a, b) { var c = this;
            this.$TV(); var d = this.get_topScene(); if (null != d) { if (d != a) { for (this.scenes.pop(); 0 < this.scenes.length && this.scenes[this.scenes.length - 1] != a;) this.scenes.pop().dispose();
                    this.$UV(d, a, b, function() { c.$RV(d) }) } } else this.$PV(a, b) },
        onAdded: function() { this.owner.addChild(this.$sK) },
        onRemoved: function() {
            this.$TV();
            for (var a = 0, b = this.scenes; a <
                b.length;) { var c = b[a];++a;
                c.dispose() } this.scenes = [];
            this.occludedScenes = [];
            this.$sK.dispose()
        },
        onUpdate: function(a) { null != this.$VV && this.$VV.$OH(a) && this.$TV() },
        get_topScene: function() { var a = this.scenes.length; return 0 < a ? this.scenes[a - 1] : null },
        $JJ: function(a) { var b = this.get_topScene();
            null != b && this.$sK.removeChild(b);
            E.remove(this.scenes, a);
            this.scenes.push(a);
            this.$sK.addChild(a) },
        $YQ: function(a) { a = a.$KH[9];
            null != a && a.hidden.emit() },
        $RV: function(a) { this.$YQ(a);
            a.dispose() },
        $XQ: function(a) {
            a = a.$KH[9];
            null != a && a.shown.emit()
        },
        $SV: function() { for (var a = this.scenes.length; 0 < a;) { var b = this.scenes[--a].$KH[9]; if (null == b || b.opaque) break } this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.$XQ(a) },
        $TV: function() { null != this.$VV && (this.$VV.$WV(), this.$VV = null, this.$SV()) },
        $UV: function(a, b, c, d) { this.$TV();
            this.$JJ(b);
            null != c ? (this.occludedScenes.push(a), this.$VV = new Fh(a, b, c, d), this.$VV.$iK(this)) : (d(), this.$SV()) },
        get_width: function() {
            return 0 >
                this.$bJ ? t.$EI.$VH.get_width() : this.$bJ
        },
        get_height: function() { return 0 > this.$cJ ? t.$EI.$VH.get_height() : this.$cJ },
        __class__: he,
        __properties__: m(C.prototype.__properties__, { get_height: "get_height", get_width: "get_width", get_topScene: "get_topScene" })
    });
    var Fh = function(a, b, c, d) { this.$VI = a;
        this.$WI = b;
        this.$XV = c;
        this.$YV = d };
    h.$CdC = Fh;
    Fh.__name__ = ["$CdC"];
    Fh.prototype = {
        $iK: function(a) { this.$XV.init(a, this.$VI, this.$WI) },
        $OH: function(a) { return this.$XV.update(a) },
        $WV: function() { this.$XV.complete();
            this.$YV() },
        __class__: Fh
    };
    var Gd = function() {};
    h["kit.scene.Transition"] = Gd;
    Gd.__name__ = ["kit", "scene", "Transition"];
    Gd.prototype = { init: function(a, b, c) { this.$ZV = a;
            this.$VI = b;
            this.$WI = c }, update: function(a) { return !0 }, complete: function() {}, __class__: Gd };
    var ib = function(a, b) { this.$XI = a;
        this.$bV = null != b ? b : G.linear };
    h["kit.scene.TweenTransition"] = ib;
    ib.__name__ = ["kit", "scene", "TweenTransition"];
    ib.__super__ = Gd;
    ib.prototype = m(Gd.prototype, {
        init: function(a, b, c) { Gd.prototype.init.call(this, a, b, c);
            this.$cV = 0 },
        update: function(a) {
            this.$cV +=
                a;
            return this.$cV >= this.$XI
        },
        $aV: function(a, b) { return a + (b - a) * this.$bV(this.$cV / this.$XI) },
        __class__: ib
    });
    var we = function(a, b) { ib.call(this, a, b) };
    h["kit.scene.FadeTransition"] = we;
    we.__name__ = ["kit", "scene", "FadeTransition"];
    we.__super__ = ib;
    we.prototype = m(ib.prototype, {
        init: function(a, b, c) { ib.prototype.init.call(this, a, b, c);
            a = this.$WI.$KH[3];
            null == a && this.$WI.add(a = new B);
            a.alpha.set__(0) },
        update: function(a) { a = ib.prototype.update.call(this, a);
            this.$WI.$KH[3].alpha.set__(this.$aV(0, 1)); return a },
        complete: function() { this.$WI.$KH[3].alpha.set__(1) },
        __class__: we
    });
    var ve = function(a, b) { this.$dV = 2;
        ib.call(this, a, b) };
    h["kit.scene.SlideTransition"] = ve;
    ve.__name__ = ["kit", "scene", "SlideTransition"];
    ve.__super__ = ib;
    ve.prototype = m(ib.prototype, {
        init: function(a, b, c) {
            ib.prototype.init.call(this, a, b, c);
            switch (this.$dV) {
                case 0:
                    this.$MJ = 0;
                    this.$NJ = -this.$ZV.get_height(); break;
                case 1:
                    this.$MJ = 0;
                    this.$NJ = this.$ZV.get_height(); break;
                case 2:
                    this.$MJ = -this.$ZV.get_width();
                    this.$NJ = 0; break;
                case 3:
                    this.$MJ = this.$ZV.get_width(), this.$NJ = 0 } a = this.$VI.$KH[3];
            null ==
                a && this.$VI.add(a = new B);
            a.setXY(0, 0);
            a = this.$WI.$KH[3];
            null == a && this.$WI.add(a = new B);
            a.setXY(-this.$MJ, -this.$NJ)
        },
        update: function(a) { a = ib.prototype.update.call(this, a);
            this.$VI.$KH[3].setXY(this.$aV(0, this.$MJ), this.$aV(0, this.$NJ));
            this.$WI.$KH[3].setXY(this.$aV(-this.$MJ, 0), this.$aV(-this.$NJ, 0)); return a },
        complete: function() { this.$VI.$KH[3].setXY(0, 0);
            this.$WI.$KH[3].setXY(0, 0) },
        __class__: ve
    });
    var Bc = function() {};
    h["kit.script.Action"] = Bc;
    Bc.__name__ = ["kit", "script", "Action"];
    Bc.prototype = { __class__: Bc };
    var bd = function(a, b, c, d) { this.$nH = a;
        this.$WI = b;
        this.$fV = c;
        this.$YI = d };
    h["kit.script.AnimateTo"] = bd;
    bd.__name__ = ["kit", "script", "AnimateTo"];
    bd.__interfaces__ = [Bc];
    bd.prototype = { update: function(a, b) { null == this.$eV && (this.$eV = new sd(this.$nH.$nH, this.$WI, this.$fV, this.$YI), this.$nH.set_behavior(this.$eV), this.$nH.update(a)); if (this.$nH.$wF != this.$eV) { var c = this.$eV.elapsed - this.$fV;
                this.$eV = null; return 0 < c ? a - c : 0 } return -1 }, __class__: bd };
    var Qa = function(a) { this.$KI = a };
    h["kit.script.CallFunction"] = Qa;
    Qa.__name__ = ["kit", "script", "CallFunction"];
    Qa.__interfaces__ = [Bc];
    Qa.prototype = { update: function(a, b) { this.$KI(); return 0 }, __class__: Qa };
    var Wa = function(a) { this.$XI = a;
        this.$cV = 0 };
    h["kit.script.Delay"] = Wa;
    Wa.__name__ = ["kit", "script", "Delay"];
    Wa.__interfaces__ = [Bc];
    Wa.prototype = { update: function(a, b) { this.$cV += a; if (this.$cV >= this.$XI) { var c = this.$cV - this.$XI;
                this.$cV = 0; return a - c } return -1 }, __class__: Wa };
    var Yf = function(a, b) { null == b && (b = -1);
        this.$mV = a;
        this.$jF = this.$nV = b };
    h["kit.script.Repeat"] = Yf;
    Yf.__name__ = ["kit", "script", "Repeat"];
    Yf.__interfaces__ = [Bc];
    Yf.prototype = { update: function(a, b) { if (0 == this.$nV) return 0; var c = this.$mV.update(a, b); return 0 < this.$nV && 0 <= c && 0 == --this.$jF ? (this.$jF = this.$nV, c) : -1 }, __class__: Yf };
    var Hb = function() { C.call(this);
        this.stopAll() };
    h["kit.script.Script"] = Hb;
    Hb.__name__ = ["kit", "script", "Script"];
    Hb.__super__ = C;
    Hb.prototype = m(C.prototype, {
        get_entitySlot: function() { return 17 },
        run: function(a) { a = new Zf(a);
            this.$oV.push(a); return a },
        stopAll: function() { this.$oV = [] },
        onUpdate: function(a) {
            for (var b =
                    0; b < this.$oV.length;) { var c = this.$oV[b];
                c.$pV || 0 <= c.$qV.update(a, this.owner) ? this.$oV.splice(b, 1) : ++b }
        },
        __class__: Hb
    });
    var Zf = function(a) { this.$pV = !1;
        this.$qV = a };
    h.$CeC = Zf;
    Zf.__name__ = ["$CeC"];
    Zf.__interfaces__ = [lb];
    Zf.prototype = { dispose: function() { this.$pV = !0;
            this.$qV = null }, __class__: Zf };
    var jb = function(a) { this.$rV = 0;
        this.$kV = null != a ? a.slice() : [] };
    h["kit.script.Sequence"] = jb;
    jb.__name__ = ["kit", "script", "Sequence"];
    jb.__interfaces__ = [Bc];
    jb.prototype = {
        update: function(a, b) {
            for (var c = 0;;) {
                var d = this.$kV[this.$rV];
                if (null != d)
                    if (d = d.update(a - c, b), 0 <= d) c += d;
                    else return -1;
                ++this.$rV;
                if (this.$rV >= this.$kV.length) { this.$rV = 0; break } else if (c > a) return -1
            }
            return c
        },
        __class__: jb
    };
    var Jh = function() {};
    h["kit.util.Assert"] = Jh;
    Jh.__name__ = ["kit", "util", "Assert"];
    Jh.that = function(a, b, c) {};
    var Mc = function() {};
    h["kit.util.BitSets"] = Mc;
    Mc.__name__ = ["kit", "util", "BitSets"];
    Mc.set = function(a, b, c) { return c ? a | b : a & ~b };
    var fa = function() { this.$zV = this.$$V = null;
        this.$yV = 0;
        this.$xV = null };
    h["kit.util.Promise"] = fa;
    fa.__name__ = ["kit", "util",
        "Promise"
    ];
    fa.all = function(a) { if (1 > a.length) return (new fa).$uV([]); for (var b = a.length, c = new fa, d = function(a) { c.failure(a) }, e = Array(b), f = function() { for (var a = 0, d = 0; d < e.length;) { var f = e[d];++d;
                    a += f } c.emitProgress(a / b) }, g = Array(b), h = 0, l = 0; l < b;) { var m = [l++];
            e[m[0]] = 0;
            a[m[0]].then(function(a) { return function(d) {++h;
                    g[a[0]] = d;
                    1 > e[a[0]] && (e[a[0]] = 1, f());
                    h == b && c.success(g) } }(m)).progress(function(a) { return function(b) { e[a[0]] = b;
                    f() } }(m)).catchError(d) } return c };
    fa.prototype = {
        then: function(a) {
            var b = this;
            if (2 ==
                this.$yV) return this;
            var c = new fa;
            this.$uH(c, function() { 1 == b.$yV ? c.$vV(a(b.$xV)) : c.failure(b.$xV) });
            return c
        },
        catchError: function(a) { var b = this; if (1 == this.$yV) return this; var c = new fa;
            this.$uH(c, function() { 2 == b.$yV ? c.$vV(a(b.$xV)) : c.$uV(b.$xV) }); return c },
        failure: function(a) { return this.$wV(2, a) },
        success: function(a) { return this.$wV(1, a) },
        $uV: function(a) { return this.success(a) },
        progress: function(a) { 0 == this.$yV && (null == this.$$V && (this.$$V = new ka), this.$$V.connect(a)); return this },
        emitProgress: function(a) {
            0 ==
                this.$yV && null != this.$$V && this.$$V.emit(a)
        },
        $uH: function(a, b) { 0 == this.$yV ? null == this.$zV ? this.$zV = [b] : this.$zV.push(b) : t.$EI.$NH.$HQ(b);
            this.progress(function(b) { a.emitProgress(b) }) },
        $vV: function(a) { var b = this;
            aa.__instanceof(a, fa) ? a.then(function(a) { b.success(a) }).catchError(function(a) { b.failure(a) }) : this.$uV(a) },
        $wV: function(a, b) { if (0 == this.$yV && (this.$xV = b, this.$yV = a, null != this.$zV)) { for (var c = 0, d = this.$zV; c < d.length;) { var e = d[c];++c;
                    e() } this.$zV = null } return this },
        __class__: fa
    };
    var yh = function(a) {
        this.$yV =
            null != a ? a : Math.floor(2147483647 * Math.random())
    };
    h["kit.util.Random"] = yh;
    yh.__name__ = ["kit", "util", "Random"];
    yh.prototype = { nextInt: function() { return this.$yV = (1103515245 * this.$yV + 12345) % 2147483647 }, __class__: yh };
    var Xg = function(a) { this.next = null;
        this.$CW = a };
    h.$CfC = Xg;
    Xg.__name__ = ["$CfC"];
    Xg.prototype = { __class__: Xg };
    var Ha = function() {};
    h["kit.util.Strings"] = Ha;
    Ha.__name__ = ["kit", "util", "Strings"];
    Ha.getFileExtension = function(a) { var b = a.lastIndexOf("."); return 0 < b ? E.substr(a, b + 1, null) : null };
    Ha.removeFileExtension =
        function(a) { var b = a.lastIndexOf("."); return 0 < b ? E.substr(a, 0, b) : a };
    Ha.getUrlExtension = function(a) { var b = a.lastIndexOf("?");
        0 <= b && (a = E.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = E.substr(a, b + 1, null)); return Ha.getFileExtension(a) };
    Ha.joinPath = function(a, b) { 0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/"); return a + b };
    Ha.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            a = 0 < a.length ? a + " [" : a + "[";
            for (var d = 0; d < c;) {
                0 < d && (a += ", ");
                var e = b[d],
                    f = b[d + 1];
                if (p.is(f, Error)) { var g = f.stack;
                    null != g && (f = g) } a +=
                    e + "=" + p.string(f);
                d += 2
            }
            a += "]"
        }
        return a
    };
    var Gh = function() {};
    h.$CgC = Gh;
    Gh.__name__ = ["$CgC"];
    Gh.prototype = { __class__: Gh };
    var xh = function() {};
    h["kit.util.Triangulator"] = xh;
    xh.__name__ = ["kit", "util", "Triangulator"];
    xh.prototype = {
        triangulate: function(a) {
            var b = a.length;
            if (6 > b) return [];
            for (var c = this.$WW(-1, 0, 0, null), d = c, e = 0, f = 0, g = b - 2; f < b;) e += (a[g] - a[f]) * (a[f + 1] + a[g + 1]), g = f, f += 2;
            if (0 < e)
                for (e = f = 0; f < b;) var g = a[f],
                    h = a[f + 1],
                    c = this.$WW(e++, g, h, c),
                    f = f + 2;
            else
                for (f = b - 2, e = f / 2 | 0; 0 <= f;) g = a[f], h = a[f + 1], c = this.$WW(e--,
                    g, h, c), f -= 2;
            c.next = d.next;
            c.next.$vQ = c;
            return this.$PW(c, 160 < b)
        },
        $PW: function(a, b) {
            this.$JW = [];
            a = this.$UW(a);
            if (b && null != a) { var c, d;
                this.$MW = c = a.$rL;
                this.$NW = d = a.$tL; for (var e = a.next; e != a;) { var f = e.$rL,
                        g = e.$tL;
                    f < this.$MW && (this.$MW = f);
                    g < this.$NW && (this.$NW = g);
                    f > c && (c = f);
                    g > d && (d = g);
                    e = e.next } this.$cN = Math.max(c - this.$MW, d - this.$NW);
                this.$OW = !0 } else this.$OW = !1;
            this.$XW(a);
            c = this.$JW;
            this.$JW = null;
            d = this.$LW;
            if (null != this.$KW) { for (; d != this.$KW;) d = d.$FW;
                d = d.$FW }
            for (; null != d;) d.next = this.$KW, this.$KW =
                d, d = d.$FW;
            return c
        },
        $QW: function(a, b) { return a.$rL == b.$rL && a.$tL == b.$tL },
        $RW: function(a, b, c) { return (b.$tL - a.$tL) * (c.$rL - b.$rL) - (b.$rL - a.$rL) * (c.$tL - b.$tL) },
        $SW: function(a, b, c, d) { return 0 < (b.$tL - a.$tL) * (c.$rL - b.$rL) - (b.$rL - a.$rL) * (c.$tL - b.$tL) != 0 < (b.$tL - a.$tL) * (d.$rL - b.$rL) - (b.$rL - a.$rL) * (d.$tL - b.$tL) && 0 < (d.$tL - c.$tL) * (a.$rL - d.$rL) - (d.$rL - c.$rL) * (a.$tL - d.$tL) != 0 < (d.$tL - c.$tL) * (b.$rL - d.$rL) - (d.$rL - c.$rL) * (b.$tL - d.$tL) },
        $UW: function(a, b) {
            if (null == a) return a;
            null == b && (b = a);
            var c = a,
                d;
            do
                if (d = !1, c.$IW ||
                    !this.$QW(c, c.next) && 0 != this.$RW(c.$vQ, c, c.next)) c = c.next;
                else { c.next.$vQ = c.$vQ;
                    c.$vQ.next = c.next;
                    null != c.$EW && (c.$EW.$DW = c.$DW);
                    null != c.$DW && (c.$DW.$EW = c.$EW);
                    c = b = c.$vQ; if (c == c.next) return null;
                    d = !0 } while (d || c != b);
            return b
        },
        $VW: function(a) { a.next.$vQ = a.$vQ;
            a.$vQ.next = a.next;
            null != a.$EW && (a.$EW.$DW = a.$DW);
            null != a.$DW && (a.$DW.$EW = a.$EW) },
        $WW: function(a, b, c, d) {
            var e = this.$KW;
            null == e ? (e = new Gh, e.$FW = this.$LW, this.$LW = e) : this.$KW = e.next;
            e.$GW = a;
            e.$HW = -1;
            e.$rL = b;
            e.$tL = c;
            e.next = null;
            e.$vQ = d;
            e.$IW = !1;
            e.$EW =
                null;
            e.$DW = null;
            null != d && (d.next = e);
            return e
        },
        $XW: function(a, b) { null == b && (b = 0); if (null != a) { 0 == b && this.$OW && this.$iW(a); for (var c = a, d, e; a.$vQ != a.next;)
                    if (d = a.$vQ, e = a.next, this.$OW ? this.$ZW(a) : this.$YW(a)) this.$JW.push(d.$GW), this.$JW.push(a.$GW), this.$JW.push(e.$GW), a.next.$vQ = a.$vQ, a.$vQ.next = a.next, null != a.$EW && (a.$EW.$DW = a.$DW), null != a.$DW && (a.$DW.$EW = a.$EW), c = a = e.next;
                    else if (a = e, a == c) { switch (b) {
                        case 0:
                            this.$XW(this.$UW(a), 1); break;
                        case 1:
                            a = this.$aW(a);
                            this.$XW(a, 2); break;
                        case 2:
                            this.$bW(a) } break } } },
        $YW: function(a) { var b = a.$vQ,
                c = a.next; if (0 <= (a.$tL - b.$tL) * (c.$rL - a.$rL) - (a.$rL - b.$rL) * (c.$tL - a.$tL)) return !1; for (var d = a.next.next; d != a.$vQ;) { if (this.$dW(b.$rL, b.$tL, a.$rL, a.$tL, c.$rL, c.$tL, d.$rL, d.$tL) && 0 <= this.$RW(d.$vQ, d, d.next)) return !1;
                d = d.next } return !0 },
        $ZW: function(a) {
            var b = a.$vQ,
                c = a.next;
            if (0 <= (a.$tL - b.$tL) * (c.$rL - a.$rL) - (a.$rL - b.$rL) * (c.$tL - a.$tL)) return !1;
            var d;
            d = b.$rL < a.$rL ? b.$rL < c.$rL ? b.$rL : c.$rL : a.$rL < c.$rL ? a.$rL : c.$rL;
            var e;
            e = b.$tL < a.$tL ? b.$tL < c.$tL ? b.$tL : c.$tL : a.$tL < c.$tL ? a.$tL : c.$tL;
            var f;
            f = b.$rL > a.$rL ? b.$rL > c.$rL ? b.$rL : c.$rL : a.$rL > c.$rL ? a.$rL : c.$rL;
            var g;
            g = b.$tL > a.$tL ? b.$tL > c.$tL ? b.$tL : c.$tL : a.$tL > c.$tL ? a.$tL : c.$tL;
            d = this.$hW(d, e);
            f = this.$hW(f, g);
            for (g = a.$DW; null != g && g.$HW <= f;) { if (g != a.$vQ && g != a.next && this.$dW(b.$rL, b.$tL, a.$rL, a.$tL, c.$rL, c.$tL, g.$rL, g.$tL) && 0 <= this.$RW(g.$vQ, g, g.next)) return !1;
                g = g.$DW }
            for (g = a.$EW; null != g && g.$HW >= d;) { if (g != a.$vQ && g != a.next && this.$dW(b.$rL, b.$tL, a.$rL, a.$tL, c.$rL, c.$tL, g.$rL, g.$tL) && 0 <= this.$RW(g.$vQ, g, g.next)) return !1;
                g = g.$EW }
            return !0
        },
        $aW: function(a) {
            var b =
                a;
            do { var c = b.$vQ,
                    d = b.next.next;
                this.$SW(c, b, b.next, d) && (0 > this.$RW(c.$vQ, c, c.next) ? 0 <= this.$RW(c, d, c.next) && 0 <= this.$RW(c, c.$vQ, d) : 0 > this.$RW(c, d, c.$vQ) || 0 > this.$RW(c, c.next, d)) && (0 > this.$RW(d.$vQ, d, d.next) ? 0 <= this.$RW(d, c, d.next) && 0 <= this.$RW(d, d.$vQ, c) : 0 > this.$RW(d, c, d.$vQ) || 0 > this.$RW(d, d.next, c)) && (this.$JW.push(c.$GW), this.$JW.push(b.$GW), this.$JW.push(d.$GW), b.next.$vQ = b.$vQ, b.$vQ.next = b.next, null != b.$EW && (b.$EW.$DW = b.$DW), null != b.$DW && (b.$DW.$EW = b.$EW), this.$VW(b.next), b = a = d);
                b = b.next } while (b !=
                a);
            return b
        },
        $bW: function(a) { var b = a;
            do { for (var c = b.next.next; c != b.$vQ;) { if (b.$GW != c.$GW && this.$eW(b, c)) { a = this.$cW(b, c);
                        b = this.$UW(b, b.next);
                        a = this.$UW(a, a.next);
                        this.$XW(b);
                        this.$XW(a); return } c = c.next } b = b.next } while (b != a) },
        $cW: function(a, b) { var c = this.$WW(a.$GW, a.$rL, a.$tL, null),
                d = this.$WW(b.$GW, b.$rL, b.$tL, null),
                e = a.next,
                f = b.$vQ;
            a.next = b;
            b.$vQ = a;
            c.next = e;
            e.$vQ = c;
            d.next = c;
            c.$vQ = d;
            f.next = d;
            d.$vQ = f; return d },
        $dW: function(a, b, c, d, e, f, g, h) {
            return 0 <= (e - g) * (b - h) - (a - g) * (f - h) && 0 <= (a - g) * (d - h) - (c - g) * (b -
                h) && 0 <= (c - g) * (f - h) - (e - g) * (d - h)
        },
        $eW: function(a, b) { return a.$rL == b.$rL && a.$tL == b.$tL || a.next.$GW != b.$GW && a.$vQ.$GW != b.$GW && !this.$gW(a, b) && (0 > this.$RW(a.$vQ, a, a.next) ? 0 <= this.$RW(a, b, a.next) && 0 <= this.$RW(a, a.$vQ, b) : 0 > this.$RW(a, b, a.$vQ) || 0 > this.$RW(a, a.next, b)) && (0 > this.$RW(b.$vQ, b, b.next) ? 0 <= this.$RW(b, a, b.next) && 0 <= this.$RW(b, b.$vQ, a) : 0 > this.$RW(b, a, b.$vQ) || 0 > this.$RW(b, b.next, a)) && this.$fW(a, b) },
        $fW: function(a, b) {
            var c = a,
                d = !1,
                e = (a.$rL + b.$rL) / 2,
                f = (a.$tL + b.$tL) / 2;
            do c.$tL > f != c.next.$tL > f && e < (c.next.$rL -
                c.$rL) * (f - c.$tL) / (c.next.$tL - c.$tL) + c.$rL && (d = !d), c = c.next; while (c != a);
            return d
        },
        $gW: function(a, b) { var c = a;
            do { if (c.$GW != a.$GW && c.next.$GW != a.$GW && c.$GW != b.$GW && c.next.$GW != b.$GW && this.$SW(c, c.next, a, b)) return !0;
                c = c.next } while (c != a); return !1 },
        $hW: function(a, b) {
            var c = 32767 * (a - this.$MW) / this.$cN | 0,
                d = 32767 * (b - this.$NW) / this.$cN | 0,
                c = (c | c << 8) & 16711935,
                c = (c | c << 4) & 252645135,
                c = (c | c << 2) & 858993459,
                d = (d | d << 8) & 16711935,
                d = (d | d << 4) & 252645135,
                d = (d | d << 2) & 858993459;
            return (c | c << 1) & 1431655765 | ((d | d << 1) & 1431655765) <<
                1
        },
        $iW: function(a) { var b = a;
            do 0 > b.$HW && (b.$HW = this.$hW(b.$rL, b.$tL)), b.$EW = b.$vQ, b = b.$DW = b.next; while (b != a);
            b.$EW.$DW = null;
            b.$EW = null;
            this.$jW(b) },
        $jW: function(a) { var b, c, d, e, f, g, h, l = 1;
            do { b = a;
                e = a = null; for (f = 0; null != b;) { f++;
                    c = b; for (d = g = 0; d < l && (d++, g++, c = c.$DW, null != c);); for (h = l; 0 < g || 0 < h && null != c;) 0 == g ? (d = c, c = c.$DW, h--) : 0 == h || null == c ? (d = b, b = b.$DW, g--) : b.$HW <= c.$HW ? (d = b, b = b.$DW, g--) : (d = c, c = c.$DW, h--), null != e ? e.$DW = d : a = d, d.$EW = e, e = d;
                    b = c } e.$DW = null;
                l *= 2 } while (1 < f); return a },
        __class__: xh
    };
    var nc = function() { nc.eval("nick_sdk_client.SDK.initialize") };
    h["nicksdk.SDK"] = nc;
    nc.__name__ = ["nicksdk", "SDK"];
    nc.eval = function(a, b) { null == b && (b = []); for (var c = null, d = null, e = 0, f = a.split("."); e < f.length;) { var g = f[e];++e;
            c = d;
            d = null == c ? P.field(window, g) : P.field(c, g) } e = null;
        null != d ? e = d.apply(c, b) : null; return e };
    nc.bind = function(a, b) { for (var c = null, d = null, e = "", f = 0, g = a.split("."); f < g.length;) { var h = g[f];++f;
            c = d;
            e = h;
            d = null == c ? P.field(window, h) : P.field(c, h) } null == c ? null : c[e] = b };
    nc.prototype = { __class__: nc };
    var oc = function() {};
    h["nicksdk.event.GameEventEmitter"] = oc;
    oc.__name__ = ["nicksdk", "event", "GameEventEmitter"];
    oc.sendGameEvent = function(a, b) { oc.callExternal(a, b) };
    oc.callExternal = function(a, b, c) { nc.eval("nick_sdk_client.GameEventEmitter.sendGameEvent", [a, b]) };
    var $f = function() {};
    h["nicksdk.event.GameEventListener"] = $f;
    $f.__name__ = ["nicksdk", "event", "GameEventListener"];
    $f.__properties__ = { set_onSuspendToggle: "set_onSuspendToggle" };
    $f.set_onSuspendToggle = function(a) { $f.onSuspendToggle = a;
        nc.bind("nick_sdk_client.GameEventListener.onSuspendToggle", a); return a };
    var Vb = function() {};
    h["nicksdk.jsembed.JSEmbedProxy"] = Vb;
    Vb.__name__ = ["nicksdk", "jsembed", "JSEmbedProxy"];
    Vb.__properties__ = { get_base: "get_base" };
    Vb.get_base = function() { return Vb.callJSEmbedMethod("baseUrl()") };
    Vb.callJSEmbedMethod = function(a) { try { var b = Vb.eval("eval", ["jsembed." + a]); if (null != b) return b } catch (c) { c instanceof s && (c = c.val) } return "" };
    Vb.eval = function(a, b) { null == b && (b = []); for (var c = null, d = 0, e = a.split("."); d < e.length;) c = e[d], ++d, c = P.field(window, c); return c.apply(null, b) };
    var ac = function() { M.call(this) };
    h["onebuttonbob.actors.Character"] = ac;
    ac.__name__ = ["onebuttonbob", "actors", "Character"];
    ac.__super__ = M;
    ac.prototype = m(M.prototype, {
        onStart: function() {
            M.prototype.onStart.call(this);
            var a;
            a = this.owner._internal_getFromParents(7);
            var b = this.owner.$KH[3];
            b.anchorX.set__(this.info.width / 2 / b.scaleX.$nH);
            b.anchorY.set__(0);
            var c = b.x;
            c.set__(c.$nH + b.anchorX.$nH);
            b = a.createPhysics();
            this.owner.add(b);
            var b = b.body,
                d = this.info.width / a.scale,
                e = 37.5 / a.scale,
                c = Math.max(this.info.height / a.scale - e, e),
                f = new Ib;
            f.shape =
                Fa.asOrientedBox(d / 2, c / 2, new w(0, c / 2));
            f.density = 1 / (d * c);
            d = new Lc(e);
            d.setLocalPosition(new w(15 / a.scale, c));
            a = new Ib;
            a.shape = d;
            this._feetFixture = b.createFixture(a);
            b.setFixedRotation(!0);
            b.setSleepingAllowed(!1)
        },
        isGrounded: function() {
            for (var a = this._feetFixture.$kC, b = this._feetFixture.$lC, c = a.$AC.$IC; null != c;) {
                if (0 != (c.$uB & 16) && 0 == (c.$uB & 1) && (c.$ZD == this._feetFixture || c.$aD == this._feetFixture))
                    for (var d = a.$wB.position.y + b.$ZB.y + b.$l / 2, e = c.getWorldManifold().$CB, f = 0, g = c.$bD.$GB; f < g;) {
                        var h = f++;
                        if (e[h].y >
                            d) return !0
                    }
                c = c.$CC
            }
            return !1
        },
        __class__: ac
    });
    var cd = function() { this.isPressed = !1;
        ga.call(this) };
    h["onebuttonbob.actors.ClickArea"] = cd;
    cd.__name__ = ["onebuttonbob", "actors", "ClickArea"];
    cd.__super__ = $b;
    cd.prototype = m($b.prototype, {
        onStart: function() { $b.prototype.onStart.call(this);
            this.owner._internal_getFromParents(9, db);
            this._sceneProperties = this.owner._internal_getFromParents(9, db).owner.getComponentBySlot(10);
            this._sceneProperties.set("pressDown", !1) },
        onUpdate: function(a) {
            $b.prototype.onUpdate.call(this,
                a);
            this.isPressed = this._sceneProperties.get("pressDown")
        },
        __class__: cd
    });
    var Cc = function() { this._isBreaking = this._isBroken = !1;
        this.crumbleRate = this.crumbleValue = 1;
        this._inContact = !1;
        sa.call(this) };
    h["onebuttonbob.actors.CrumblingPlatform"] = Cc;
    Cc.__name__ = ["onebuttonbob", "actors", "CrumblingPlatform"];
    Cc.__super__ = sa;
    Cc.prototype = m(sa.prototype, {
        onStart: function() {
            var a = this;
            this._assets = this.owner.getAssetsFromParents();
            null == this.referencedInfo && (this.referencedInfo = this.info);
            for (var b = this.owner._internal_getFromParents(3,
                    ja).getLayer("Main Layer").firstChild; null != b;) { if (b.$KH[1].info == this.referencedInfo) { this.referencedObject = b.$KH[1];
                    null != p.instance(this.referencedObject.owner.$KH[3], S) && p.instance(this.referencedObject.owner.$KH[3], S).setXY(this.referencedInfo.x, this.referencedInfo.y); break } if (null == b.next) break;
                b = b.next } this.physicsEnabled = !0;
            sa.prototype.onStart.call(this);
            this._hero = this.owner._internal_getFromParents(3, ja).getLayer("Main Layer")._internal_getFromChildren(1, vb);
            b = this.owner.$KH[6];
            b.body.$DC.setUserData({ type: "platform" });
            var c = b.get_preSolve().connect(function(b, c) { var f = b.$ZD,
                    g = b.$aD,
                    h = null,
                    l = null;
                null != f.$SC ? (h = f, l = g) : null != g.$SC && (h = g, l = f); if (null != h) { f = b.$bD.$GB;
                    g = b.getWorldManifold();
                    a.platformBody = h.$kC;
                    h = l.$kC;
                    l = g.$CB; for (g = 0; g < f;) { var m = g++,
                            p = a.platformBody.getLinearVelocityFromWorldPoint(l[m]),
                            r = h.getLinearVelocityFromWorldPoint(l[m]);
                        r.subtract(p);
                        p = a.platformBody.getLocalVector(r); if (-1 < p.y) { if (0.05 > a.platformBody.getLocalPoint(l[m]).y) { a._inContact = !0; return } } else if (1 < p.y && 0.45 < a.platformBody.getLocalPoint(l[m]).y) return } b.setEnabled(!1) } });
            this.registerDisposable(c);
            this.connect1(b.get_endContact(), function(a) { a.setEnabled(!0) })
        },
        onUpdate: function(a) {
            var b = this;
            sa.prototype.onUpdate.call(this, a);
            if (this._inContact) { if (!this._isBreaking) { null != p.instance(this.referencedObject.owner.$KH[3], S) && p.instance(this.referencedObject.owner.$KH[3], S).play("break", !0);
                    this._isBreaking = !0; var c = this._assets.getSound("sfx/sbpobb_tilecrackingv1").play(0.4);
                    this.registerDisposable(c) } this.crumbleValue -= this.crumbleRate * a } null != this.platformBody && 0 !=
                (this.platformBody.$uB & 32) && 0 >= this.crumbleValue && (null == p.instance(this.referencedObject.owner.$KH[3], S) || this._isBroken || (this._isBroken = !0, a = this._assets.getSound("sfx/sbpobb_tilecrackingv2").play(0.8), this.registerDisposable(a), p.instance(this.referencedObject.owner.$KH[3], S).play("fall", !0), null == this.owner.$KH[17] && this.owner.add(new Hb), this.owner.$KH[17].run(new jb([new Wa(0.4), new Qa(function() { p.instance(b.referencedObject.owner.$KH[3], S).set_visible(!1) })]))), this.setBodyEnabled(!1))
        },
        setBodyEnabled: function(a) { null != this.platformBody && this.platformBody.setActive(a) },
        __class__: Cc
    });
    var Dc = function() { this._colxOffset = this._colyOffset = this._colWidth = this._colHeight = 0;
        this._spinOut = this._collided = !1;
        this._isStatic = !0;
        this._defeated = !1;
        this._timeElapsed = this._startX = this._startY = this._collisionSize = 0;
        this.waveFrequency = this.collisionScale = 1;
        this.xSpeed = this.ySpeed = this.waveX = this.waveY = 0;
        this.enemyType = kb.Default;
        M.call(this) };
    h["onebuttonbob.actors.Enemy"] = Dc;
    Dc.__name__ = ["onebuttonbob",
        "actors", "Enemy"
    ];
    Dc.__super__ = M;
    Dc.prototype = m(M.prototype, {
        onStart: function() {
            M.prototype.onStart.call(this);
            this._assets = this.owner.getAssetsFromParents();
            this._hero = this.owner._internal_getFromParents(3, ja).getLayer("Main Layer")._internal_getFromChildren(1, vb);
            null == p.instance(this.owner.$KH[3], S) ? (this.owner.add((new S(this.info)).setXY(this.info.x, this.info.y)), this._startX = p.instance(this.owner.$KH[3], S).x.get__() - this.info.anchorX, this._startY = p.instance(this.owner.$KH[3], S).y.get__() - this.info.anchorY) :
                (this._isStatic = !1, this._startX = p.instance(this.owner.$KH[3], S).x.get__(), this._startY = p.instance(this.owner.$KH[3], S).y.get__());
            this._collisionSize = this.collisionScale * this.info.height / 2;
            this.enemyType != kb.Default && this.enemyType == kb.SeaBear && (this._colxOffset = 100, this._colyOffset = 20, this._colWidth = 45, this._colHeight = 115)
        },
        onUpdate: function(a) {
            M.prototype.onUpdate.call(this, a);
            var b = p.instance(this.owner.$KH[3], S);
            this._spinOut && b.setRotation(b.rotation.$nH + 360 * a);
            this._defeated || (this._timeElapsed +=
                a, b.setXY(this._startX + Math.cos(this._timeElapsed * this.waveFrequency) * this.waveX, this._startY + Math.sin(this._timeElapsed * this.waveFrequency) * this.waveY), this._startX += this.xSpeed * a, this._startY += this.ySpeed * a, this.enemyType == kb.Default ? !this._collided && this.inRange(p.instance(this._hero.owner.$KH[3], za), this._hero.owner.$KH[3].getNaturalWidth() / 2) && (this._collided = !0, this._hero.collideWithEnemy()) : this.enemyType == kb.SeaBear && !this._collided && this._hero.owner.$KH[3].x.$nH + this._hero.owner.$KH[3].getNaturalWidth() >=
                p.instance(this.owner.$KH[3], S).x.get__() - this.info.anchorX + this._colxOffset && this._hero.owner.$KH[3].x.$nH < p.instance(this.owner.$KH[3], S).x.get__() + this._colWidth - this.info.anchorX + this._colxOffset && this._hero.owner.$KH[3].y.$nH + this._hero.owner.$KH[3].getNaturalHeight() >= p.instance(this.owner.$KH[3], S).y.get__() - this.info.anchorY + this._colyOffset && this._hero.owner.$KH[3].y.$nH < p.instance(this.owner.$KH[3], S).y.get__() + this._colHeight - this.info.anchorY + this._colyOffset && (this._collided = !0, this._hero.collideWithEnemy()))
        },
        defeated: function() {
            var a = this;
            this._defeated = !0;
            p.instance(this.owner.$KH[3], S).loop("hit", !0);
            null == this.owner.$KH[17] && this.owner.add(new Hb);
            var b = this.owner.$KH[17];
            if (this.enemyType == kb.Default) { var c = this._assets.getSound("sfx/sbpobb_destroy_objectv5").play();
                this.registerDisposable(c);
                b.run(new jb([new Wa(0.2), new Qa(function() { a.owner.dispose() })])) } else this.enemyType == kb.SeaBear && (c = this._assets.getSound("sfx/sbpobb_destroy_objectv4").play(), this.registerDisposable(c), c = Math.random() * Math.PI +
                3 * Math.PI / 2, Math.cos(c), Math.sin(c), b.run(new jb([new Wa(1), new Qa(function() { a.owner.dispose() })])))
        },
        inRange: function(a, b) {
            null == b && (b = -1);
            if (this._defeated) return !1;
            var c = this._collisionSize,
                d = new w(p.instance(this.owner.$KH[3], S).x.get__() - (this._isStatic ? 0 : this.info.anchorX) + this.info.width / 2, p.instance(this.owner.$KH[3], S).y.get__() - (this._isStatic ? 0 : this.info.anchorY) + this.info.height / 2);
            if (null == b || 0 > b) b = Math.max(a.getNaturalWidth() / 2, a.getNaturalHeight() / 2);
            var e = new w(a.x.$nH + a.getNaturalWidth() /
                    2 - a.anchorX.$nH, a.y.$nH + a.getNaturalHeight() / 2 - a.anchorY.$nH),
                f = d.x - e.x,
                d = d.y - e.y;
            return Math.sqrt(f * f + d * d) < c + b ? !0 : !1
        },
        __class__: Dc
    });
    var Hd = function() { this.triggerRange = 50;
        this.timeToReachGround = 2;
        this._triggered = this._collided = !1;
        M.call(this) };
    h["onebuttonbob.actors.FallingHazard"] = Hd;
    Hd.__name__ = ["onebuttonbob", "actors", "FallingHazard"];
    Hd.__super__ = M;
    Hd.prototype = m(M.prototype, {
        onStart: function() {
            M.prototype.onStart.call(this);
            this._assets = this.owner.getAssetsFromParents();
            this._mapSprite = this.owner._internal_getFromParents(3,
                ja);
            this._hero = this._mapSprite.getLayer("Main Layer")._internal_getFromChildren(1, vb);
            this._startY = this.owner.$KH[3].y.$nH
        },
        onUpdate: function(a) {
            M.prototype.onUpdate.call(this, a);
            !this._triggered && this.inRange() && (this._triggered = !0, this.activate());
            !this._collided && this._triggered && this._hero.owner.$KH[3].x.$nH + this._hero.owner.$KH[3].getNaturalWidth() >= this.owner.$KH[3].x.$nH && this._hero.owner.$KH[3].x.$nH - this._hero.owner.$KH[3].anchorX.$nH < this.owner.$KH[3].x.$nH + this.owner.$KH[3].getNaturalWidth() &&
                this._hero.owner.$KH[3].y.$nH + this._hero.owner.$KH[3].getNaturalHeight() >= this.owner.$KH[3].y.$nH && this._hero.owner.$KH[3].y.$nH < this.owner.$KH[3].y.$nH + this.owner.$KH[3].getNaturalHeight() && (a = this._assets.getSound("sfx/sbpobb_anchorhitv1").play(0.55), this.registerDisposable(a), this._collided = !0, this._hero.collideWithEnemy())
        },
        activate: function() {
            var a = this,
                b = this._assets.getSound("sfx/sbpobb_anchorfallsv1").play(1);
            this.registerDisposable(b);
            null == this.owner.$KH[17] && this.owner.add(new Hb);
            this.owner.$KH[17].run(new jb([new bd(this.owner.$KH[3].y,
                this._mapSprite.y.$nH + this._mapSprite.getNaturalHeight() + this.owner.$KH[3].getNaturalHeight(), this.timeToReachGround, G.quadIn), new Qa(function() { a.owner.dispose() })]))
        },
        inRange: function() {
            return this._hero.owner.$KH[3].x.$nH + this._hero.owner.$KH[3].getNaturalWidth() >= this.owner.$KH[3].x.$nH - this.triggerRange && this._hero.owner.$KH[3].x.$nH < this.owner.$KH[3].x.$nH + this.owner.$KH[3].getNaturalWidth() + this.triggerRange && this._hero.owner.$KH[3].y.$nH > this.owner.$KH[3].y.$nH + this.owner.$KH[3].getNaturalHeight() ?
                !0 : !1
        },
        __class__: Hd
    });
    var vb = function() {
        this._timeQuickPressed = 0;
        this._quickPressed = !1;
        this._timeContactMovingPlatform = 0;
        this._contactMovingPlatform = !1;
        this._animState = "idle";
        this._timeElapsed = 0;
        this._timeActive = 0.3;
        this._buttonRelease = this._releaseReady = !1;
        this._tapReady = !0;
        this._buttonTap = !1;
        this._jumpDistance = this._jumpHeight = 0;
        this.controlScheme = W.AutoWalk;
        this.projectileFrequency = 5;
        this.projectileSpeed = 15;
        this.runningJumpDistance = 0;
        this.minJumpDistance = 2;
        this.maxJumpDistance = 10;
        this.jumpChargeRate =
            0.3333;
        this.isActive = !1;
        this.dashStrength = 5;
        this.jumpStrength = 18;
        this.maxVelocity = 250;
        M.call(this)
    };
    h["onebuttonbob.actors.Hero"] = vb;
    vb.__name__ = ["onebuttonbob", "actors", "Hero"];
    vb.__super__ = ac;
    vb.prototype = m(ac.prototype, {
        onStart: function() {
            var a = this;
            this._assets = this.owner.getAssetsFromParents();
            var b = this.owner.$KH[3],
                c = new za(this._assets.getTexture("character/empty"));
            c.setXY(b.x.$nH, b.y.$nH);
            this.owner.add(c);
            this.owner._internal_getFromParents(9, db);
            this._sceneProperties = this.owner._internal_getFromParents(9,
                db).owner.getComponentBySlot(10);
            this.owner._internal_getFromParents(18);
            this._appProperties = this.owner._internal_getFromParents(18).owner.getComponentBySlot(10);
            b = this.owner._internal_getFromParents(3, ja);
            c = b.getLayer("Click Layer");
            this._uiClicks = b.getLayer("UI Layer")._internal_getFromChildren(1, mc);
            this._clickArea = c._internal_getFromChildren(1, cd);
            this._sceneProperties.set("VentToggle", !1);
            this._sceneProperties.set("LevelComplete", !1);
            this._sceneProperties.set("FallInPit", !1);
            this._sceneProperties.set("Paused",
                !1);
            this._sceneProperties.set("clicks", this._appProperties.get("clicks"));
            this.connect2(this._sceneProperties.changed, Ra(this, this.onPropertiesChanged));
            var d = function() { if (a._grounded.$nH) { var b = p.instance(a.owner.$KH[3], S);
                    null != b && b.loop(a._walking.$nH ? "walking" : "idle", !1) } };
            if (this.controlScheme == W.Jumper || this.controlScheme == W.RunningJump) this._jumpUI = (new R).add(new ag(this.owner.$KH[3].getNaturalWidth() / 2, -36)), this.owner.addChild(this._jumpUI);
            this._walking = new wa(!1, function(a, b) { d() });
            this._grounded =
                new wa(!1, function(a, b) { d() });
            this._library = this._assets.getLibrary("spongebob", !1);
            this._animation = new yc(this._library);
            this._animation.setDecorator(function(a) { a.disablePixelSnapping() });
            this._animation.loop("SB_idle", !0);
            this.owner.addChild((new R).add(this._animation));
            this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() / 2);
            this._transitionLibrary = this._assets.getLibrary("game_transition", !1);
            this._transition = new yc(this._transitionLibrary);
            this._transition.loop("game_transition", !0);
            this._transition.movie.$nH.once();
            this.owner.parent.parent.addChild((new R).add(this._transition));
            this._transition.movie.$nH.centerAnchor();
            this._transition.movie.$nH.setXY(658, 384);
            this._transition.movie.$nH.speed.set__(1);
            this._transition.movie.$nH.set_position(17 / this._transition.movie.$nH.symbol.frameRate * this._transition.movie.$nH.speed.$nH);
            this.registerDisposable(this._transition.movie.$nH);
            this.registerDisposable(this._animation.movie.$nH);
            0 < this._appProperties.get("lossesInARow") &&
                this.PlayHUDHint();
            ac.prototype.onStart.call(this)
        },
        onUpdate: function(a) {
            if (!this._sceneProperties.get("globalPause"))
                if (this._timeElapsed += a, this.isActive) {
                    this._contactMovingPlatform && (this._timeContactMovingPlatform += a, 0.25 < this._timeContactMovingPlatform && (this._contactMovingPlatform = !1));
                    this._quickPressed && (this._timeQuickPressed += a, 0.25 < this._timeQuickPressed && (this._quickPressed = !1));
                    var b = this.owner.$KH[6],
                        c = b.body,
                        d = c.$yB,
                        e = this.maxVelocity / b.box2d.scale;
                    this._grounded.set__(ac.prototype.isGrounded.call(this));
                    var f = this._clickArea.isPressed;
                    f ? this._releaseReady = !0 : this._tapReady = !0;
                    this._tapReady && f && (this._tapReady = !1, this._buttonTap = !0);
                    this._releaseReady && !f && (this._releaseReady = !1, this._buttonRelease = !0);
                    this._buttonTap && (this._sceneProperties.set("VentToggle", !this._sceneProperties.get("VentToggle")), this._appProperties.set("clicks", this._appProperties.get("clicks") + 1), this._sceneProperties.set("clicks", this._appProperties.get("clicks")), this.pulseClick());
                    if (this.controlScheme == W.Jumper || this.controlScheme ==
                        W.RunningJump) this._appProperties.set("ControlScheme", "Jumping"), f ? (this._jumpDistance += a * this.jumpStrength / this.jumpChargeRate, this._jumpDistance >= this.maxJumpDistance ? this._jumpDistance = this.maxJumpDistance : this._jumpDistance < this.minJumpDistance && (this._jumpDistance = this.minJumpDistance), this._jumpHeight += a * this.jumpStrength / this.jumpChargeRate, this._jumpHeight >= this.jumpStrength && (this._jumpHeight = this.jumpStrength), this._jumpUI.$KH[14].SetFill(this._jumpHeight / this.jumpStrength), this._jumpUI.$KH[14].SetVisible(!0)) :
                        (this._jumpUI.$KH[14].SetFill(0), this._jumpUI.$KH[14].SetVisible(!1));
                    if (this.controlScheme == W.AutoWalk) this._appProperties.set("ControlScheme", "AutoWalk"), d.x < e && c.setLinearVelocity(new w(e + 1, d.y));
                    else if (this.controlScheme == W.Attacker) this._appProperties.set("ControlScheme", "Attacker"), c.setLinearVelocity(new w(e + 1, d.y)), d = c.$yB, !this._buttonTap || null != this._projectile && null != this._projectile.owner || (c = this.owner.$KH[3].x.$nH, a = this.owner.$KH[3].y.$nH + this.owner.$KH[3].getNaturalHeight() / 2, this._projectile =
                        new bg(c + 15, a, this, this.projectileSpeed, this.projectileFrequency), this.owner.parent.addChild((new R).add(this._projectile)), this.playAnimation("attack", !1));
                    else if (this.controlScheme == W.QuickTap) { this._appProperties.set("ControlScheme", "QuickTap"); for (b = c.$DC; null != b;) b.$mC = 2, b = b.$CC;
                        this._buttonTap && (this._quickPressed = !0, this._timeQuickPressed = 0, c.setLinearVelocity(new w(2E3 * this.dashStrength * a, 0)));
                        d.x > 2.5 * e && c.setLinearVelocity(new w(2.5 * e, 0)) } else if (this.controlScheme == W.Jumper) {
                        for (a = c.$DC; null !=
                            a;) a.$mC = 25, a = a.$CC;
                        a = c.$yB;
                        this._buttonRelease && this._grounded.$nH && (this.playAnimation("jump", !1), a.y = 0, c.applyImpulse(new w(this._jumpDistance, -this._jumpHeight), c.$wB.position), this._jumpHeight = this._jumpDistance = 0)
                    } else this.controlScheme == W.RunningJump && (a = c.$yB, b = this.maxVelocity / b.box2d.scale, a.x < b && !1 == this._contactMovingPlatform && c.setLinearVelocity(new w(b + 1, a.y)), this._buttonRelease && this._grounded.$nH && (this.playAnimation("jump", !1), a.y = 0, c.applyImpulse(new w(this.runningJumpDistance,
                        -this._jumpHeight), c.$wB.position), this._jumpHeight = this._jumpDistance = 0));
                    if (0.01 < Math.abs(d.x) && this.controlScheme != W.Jumper) { if (!1 == this._contactMovingPlatform || !0 == this._quickPressed || this.controlScheme != W.QuickTap && this.controlScheme != W.RunningJump) this.playAnimation("walk", !1, 30 * Math.abs(d.x) / this.maxVelocity), this._walking.set__(!0) } else this._walking.set__(!1), this.playAnimation("idle", !1), null != this._walkingSFX && this._walkingSFX.volume.set__(0); - 1 <= d.y && "jump" == this._animState && this._grounded.$nH ?
                        this.playAnimation("land", !1) : -1 <= d.y && "vent" == this._animState && this._grounded.$nH && this.playAnimation("vent_land", !1);
                    this._buttonRelease = this._buttonTap = !1
                } else null != this._jumpUI && this._jumpUI.$KH[14].SetVisible(!1), this._timeElapsed > this._timeActive && (this.isActive = !0, this._timeActive = Infinity)
        },
        contactMovingPlatform: function() {
            this._contactMovingPlatform = !0;
            this._timeContactMovingPlatform = 0;
            "jump" == this._animState || "vent" == this._animState ? this.playAnimation("land") : "walk" == this._animState && this.controlScheme ==
                W.QuickTap && !1 == this._quickPressed && (this.playAnimation("idle"), this._walkingSFX.volume.set__(0))
        },
        playAnimation: function(a, b, c) {
            null == c && (c = 0);
            null == b && (b = !1);
            var d = this;
            if (this.isActive)
                if ("hit" == a) this._animation.loop("SB_Hit", !0), this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() / 2), this._animState = a, this.registerDisposable(this._animation.movie.$nH.get_looped().connect(function() {
                    d._sceneProperties.set("hasCollidedEnemy", !0);
                    d._animation.movie.$nH.set_visible(!1);
                    d.isActive = !1
                }, !1).once());
                else if ("attack" == a) b = this._assets.getSound("sfx/sbpobb_throw_spatulav1").play(), this.registerDisposable(b), this._animation.loop("SB_Attack", !0), this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() / 2), this._animState = a, this.registerDisposable(this._animation.movie.$nH.get_looped().connect(function() { d._animState = "idle";
                d.playAnimation("idle") }, !1).once());
            else if ("jump" == a) b = this._assets.getSound("sfx/sbpobb_jumpv1").play(),
                this.registerDisposable(b), null != this._walkingSFX && this._walkingSFX.volume.set__(0), this._animation.loop("SB_Jump_Idle", !0), this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() / 2), this._animation.play("SB_Jump_Start", !0), this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() / 2), this._animState = a;
            else if ("land" == a) b = this._assets.getSound("sfx/sbpobb_landingv2").play(), this.registerDisposable(b),
                this._animation.loop("SB_Jump_Out", !0), this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() / 2), this._animState = a, this.registerDisposable(this._animation.movie.$nH.get_looped().connect(function() { d._animState = "idle";
                    d.playAnimation("idle") }, !1).once());
            else if ("vent" == a) b = this._assets.getSound("sfx/sbpobb_goingupv2").play(), this.registerDisposable(b), null != this._walkingSFX && this._walkingSFX.volume.set__(0), this._animation.loop("SB_Vent_Idle",
                !0), this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() / 2), this._animation.play("SB_Vent_Start", !0), this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() / 2), this._animState = a;
            else if ("vent_land" == a) b = this._assets.getSound("sfx/sbpobb_landingv2").play(), this.registerDisposable(b), this._animation.loop("SB_Vent_Out", !0), this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() /
                2, 40 + this.owner.$KH[3].getNaturalWidth() / 2), this._animState = a, this.registerDisposable(this._animation.movie.$nH.get_looped().connect(function() { d._animState = "idle";
                d.playAnimation("idle") }, !1).once());
            else if ("walk" != a || "idle" != this._animState && "walk" != this._animState) "idle" != a || "idle" != this._animState && "walk" != this._animState || (this._animation.loop("SB_idle", b), this._animation.movie.$nH.speed.set__(1), this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() /
                2), this._animState = a);
            else {
                if ("walk" != this._animState)
                    if (null == this._walkingSFX) { this._walkingSFX = this._assets.getSound("sfx/SB-footsteps5_mainloop").loop();
                        this._walkingSFX.volume.set__(0);
                        this.owner.add(new Hb); var e = this.owner.$KH[17];
                        this._uiClicks.$HJ().setAnchor(0, 0);
                        this.owner.$KH[17].run(new Yf(new jb([new Wa(0.25), new Qa(function() { "walk" == d._animState && d._appProperties.get("playedLevel1") && (d._walkingSFX.volume.set__(0.65), e.stopAll()) })]), -1));
                        this.registerDisposable(this._walkingSFX) } else this._appProperties.get("playedLevel1") &&
                        this._walkingSFX.volume.set__(0.65);
                this.controlScheme == W.QuickTap ? this._animation.loop("SB_Run", b) : this._animation.loop("SB_walk", b);
                this._animation.movie.$nH.speed.set__(c);
                this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() / 2);
                this._animState = a
            }
        },
        pulseClick: function() {},
        isGrounded: function() { return ac.prototype.isGrounded.call(this) },
        applyVentForce: function(a, b, c) {
            b = this.owner.$KH[6].body;
            b.setLinearVelocity(new w(b.$yB.x, 10 * -a));
            this.owner._internal_getFromParents(3,
                ja).getLayer("Main Layer");
            "vent" != this._animState && this.playAnimation("vent", !1)
        },
        PlayHUDHint: function() { var a = new Id(!1);
            this.owner.parent.parent.addChild((new R).add(a)) },
        collideWithEnemy: function() {
            if (this.isActive) {
                null != this._walkingSFX && this._walkingSFX.volume.set__(0);
                var a = this._assets.getSound("sfx/sbobbp_loser_stingerv1").play(0.6);
                this._appProperties.set("lossesInARow", this._appProperties.get("lossesInARow") + 1);
                this.registerDisposable(a);
                this._timeElapsed = -Infinity;
                this.playAnimation("hit",
                    !1);
                this.isActive = !1;
                this.owner.emitMessageToParents("LevelLost", this.owner)
            }
        },
        onPropertiesChanged: function(a, b) {
            if ("VentToggle" == a && this.controlScheme == W.AutoWalk) { var c = this._assets.getSound("sfx/sbpobb_bubblespoutv1").play();
                this.registerDisposable(c) } else "LevelCompleteFinal" == a ? (null != this._walkingSFX && this._walkingSFX.dispose(), this._animation.loop("SB_idle", !0), this._animation.movie.$nH.speed.set__(1), this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() /
                2), this._animState = "idle", this.isActive = !1, c = this._assets.getSound("sfx/sbobbp_winner_stingerv1").play(0.6), this.registerDisposable(c)) : "LevelComplete" == a ? (null != this._walkingSFX && this._walkingSFX.dispose(), this._animation.loop("SB_idle", !0), this._animation.movie.$nH.speed.set__(1), this._animation.movie.$nH.setXY(this.owner.$KH[3].getNaturalHeight() / 2, 40 + this.owner.$KH[3].getNaturalWidth() / 2), this._animState = "idle", this._animation.movie.$nH.set_visible(!1), this.isActive = !1, this._appProperties.set("lossesInARow",
                0), c = this._assets.getSound("sfx/sbobbp_winner_stingerv1").play(0.6), this.registerDisposable(c)) : "FallInPit" == a ? (null != this._walkingSFX && this._walkingSFX.dispose(), this._animation.loop("SB_idle", !1), this._animation.movie.$nH.speed.set__(1), this.isActive = !1, c = this._assets.getSound("sfx/sbpobb_fallingdownv2").play(0.6), this._appProperties.set("lossesInARow", this._appProperties.get("lossesInARow") + 1), this.registerDisposable(c)) : "Paused" == a && null != this._walkingSFX && "walk" == this._animState && (!0 == b ? this._walkingSFX.volume.set__(0) :
                this._walkingSFX.volume.set__(0.65))
        },
        __class__: vb
    });
    var Jd = function() { this._movingToB = !0;
        this.destination = null;
        this.speed = 200;
        sa.call(this) };
    h["onebuttonbob.actors.MovingPlatform"] = Jd;
    Jd.__name__ = ["onebuttonbob", "actors", "MovingPlatform"];
    Jd.__super__ = sa;
    Jd.prototype = m(sa.prototype, {
        onStart: function() {
            var a = this;
            this._dt = 0.016666666666666666;
            null == this.referencedInfo ? this.referencedInfo = this.info : (this.owner.add(new B), this.owner.$KH[3].setXY(this.info.x, this.info.y));
            var b = this.owner._internal_getFromParents(3,
                ja).getLayer("Main Layer");
            this._hero = b._internal_getFromChildren(1, vb);
            for (b = b.firstChild; null != b;) { if (b.$KH[1].info == this.referencedInfo) { this.referencedObject = b.$KH[1];
                    null != p.instance(this.referencedObject.owner.$KH[3], S) && p.instance(this.referencedObject.owner.$KH[3], S).setXY(this.referencedInfo.x, this.referencedInfo.y); break } if (null == b.next) break;
                b = b.next } sa.prototype.onStart.call(this);
            var b = this.owner._internal_getFromParents(7),
                c;
            if (null != this.owner.$KH[6]) {
                c = this.owner.$KH[6];
                c.body.$DC.setUserData({ type: "platform" });
                var d = c.get_preSolve().connect(function(b, c) {
                    var d = b.$ZD,
                        g = b.$aD,
                        h = null,
                        l = null;
                    null != d.$SC ? (h = d, l = g) : null != g.$SC && (h = g, l = d);
                    if (null != h) {
                        d = b.$bD.$GB;
                        g = b.getWorldManifold();
                        a.platformBody = h.$kC;
                        h = l.$kC;
                        l = g.$CB;
                        for (g = 0; g < d;) {
                            var m = g++,
                                p = a.platformBody.getLinearVelocityFromWorldPoint(l[m]),
                                r = h.getLinearVelocityFromWorldPoint(l[m]);
                            r.subtract(p);
                            p = a.platformBody.getLocalVector(r);
                            if (-1.5 < p.y) { a._hero.contactMovingPlatform(); return }
                            if (1 < p.y && 0.45 < a.platformBody.getLocalPoint(l[m]).y) {
                                a._hero.contactMovingPlatform();
                                return
                            }
                        }
                        b.setEnabled(!1)
                    }
                });
                this.registerDisposable(d);
                this.registerDisposable(c.get_endContact().connect(function(a) { a.setEnabled(!0) }))
            } else c = b.createObject(this.info), this.owner.add(c);
            d = c.body;
            d.setType(null != this.destination ? 1 : 0);
            null != this.destination && (this._posA = new nb(this.info.x / b.scale, this.info.y / b.scale), this._posB = new nb(this.destination.x / b.scale, this.destination.y / b.scale), this._distanceSq = this._posA.distanceToSquared(this._posB.x, this._posB.y), c = Math.sqrt(this._distanceSq), d = d.$yB,
                d.x = (this._posB.x - this._posA.x) / c, d.y = (this._posB.y - this._posA.y) / c, d.multiply(this.speed * this._dt * 60 / b.scale))
        },
        onUpdate: function(a) {
            sa.prototype.onUpdate.call(this, a);
            this._dt = a;
            if (null != this.destination) {
                null != p.instance(this.referencedObject.owner.$KH[3], S) && p.instance(this.referencedObject.owner.$KH[3], S).setXY(this.owner.$KH[3].x.$nH, this.owner.$KH[3].y.$nH);
                a = this.owner.$KH[6].body;
                var b = a.$wB.position;
                (this._movingToB ? this._posA : this._posB).distanceToSquared(b.x, b.y) > this._distanceSq && (this._movingToB = !this._movingToB, a.$yB.negativeSelf())
            }
        },
        __class__: Jd
    });
    var Ec = function() { sa.call(this) };
    h["onebuttonbob.actors.OneWayPlatform"] = Ec;
    Ec.__name__ = ["onebuttonbob", "actors", "OneWayPlatform"];
    Ec.__super__ = sa;
    Ec.prototype = m(sa.prototype, {
        onStart: function() {
            var a = this;
            this.physicsEnabled = !0;
            sa.prototype.onStart.call(this);
            var b = this.owner.$KH[6];
            b.body.$DC.setUserData({ type: "platform" });
            var c = b.get_preSolve().connect(function(b, c) {
                var f = b.$ZD,
                    g = b.$aD,
                    h = null,
                    l = null;
                null != f.$SC ? (h = f, l = g) : null != g.$SC && (h = g,
                    l = f);
                if (null != h) { f = b.$bD.$GB;
                    g = b.getWorldManifold();
                    a.platformBody = h.$kC;
                    h = l.$kC;
                    l = g.$CB; for (g = 0; g < f;) { var m = g++,
                            p = a.platformBody.getLinearVelocityFromWorldPoint(l[m]),
                            r = h.getLinearVelocityFromWorldPoint(l[m]);
                        r.subtract(p);
                        p = a.platformBody.getLocalVector(r); if (-1.5 < p.y || 1 < p.y && 0.45 < a.platformBody.getLocalPoint(l[m]).y) return } b.setEnabled(!1) }
            });
            this.registerDisposable(c);
            this.connect1(b.get_endContact(), function(a) { a.setEnabled(!0) })
        },
        setBodyEnabled: function(a) { null != this.platformBody && this.platformBody.setActive(a) },
        __class__: Ec
    });
    var Kd = function() { this._triggered = this._defeated = this._collidable = !1;
        this._timeElapsed = this.initialDelay = 0;
        this.duration = this.timeToTrigger = 1;
        this.showPct = 0.25;
        this.triggerOnProximity = !0;
        this._popup = this._collided = !1;
        M.call(this) };
    h["onebuttonbob.actors.PopupHazard"] = Kd;
    Kd.__name__ = ["onebuttonbob", "actors", "PopupHazard"];
    Kd.__super__ = M;
    Kd.prototype = m(M.prototype, {
        onStart: function() {
            M.prototype.onStart.call(this);
            this._assets = this.owner.getAssetsFromParents();
            this._hero = this.owner._internal_getFromParents(3,
                ja).getLayer("Main Layer")._internal_getFromChildren(1, vb);
            this._startY = this.owner.$KH[3].y.$nH;
            this._timeElapsed -= this.initialDelay;
            null != p.instance(this.owner.$KH[3], S) && p.instance(this.owner.$KH[3], S).loop("hide_idle", !0)
        },
        onUpdate: function(a) {
            M.prototype.onUpdate.call(this, a);
            this._defeated || (this.triggerOnProximity && !this._popup && this.inRange() ? this.popup() : this.triggerOnProximity || this._popup || (this._timeElapsed += a, this._timeElapsed >= this.timeToTrigger && (this.popup(), this._timeElapsed = 0)), !this._collided &&
                this._collidable && this._hero.owner.$KH[3].x.$nH + this._hero.owner.$KH[3].getNaturalWidth() >= this.info.x && this._hero.owner.$KH[3].x.$nH < this.info.x + this.info.width - 20 && this._hero.owner.$KH[3].y.$nH + this._hero.owner.$KH[3].getNaturalHeight() >= this.info.y && this._hero.owner.$KH[3].y.$nH < this.info.y + this.info.height - 100 && (this._collided = !0, this._hero.collideWithEnemy()))
        },
        popup: function() {
            var a = this;
            if (null != p.instance(this.owner.$KH[3], S)) {
                if (this.triggerOnProximity) {
                    if (this._triggered) return;
                    this._triggered = !0
                }
                this._popup = !0;
                null == this.owner.$KH[17] && this.owner.add(new Hb);
                this.owner.$KH[17].run(new jb([new Qa(function() { var b = a._assets.getSound("sfx/sbpobb_fingerspopupv1").play(0.55);
                    a.registerDisposable(b);
                    p.instance(a.owner.$KH[3], S).play("show", !0) }), new Wa(0.25), new Qa(function() { a._collidable = !0;
                    p.instance(a.owner.$KH[3], S).loop("show_idle", !0) }), new Wa(this.duration), new Qa(function() { a.triggerOnProximity || (a._collidable = !1, p.instance(a.owner.$KH[3], S).play("hide", !0)) }), new Wa(0.3), new Qa(function() {
                    a.triggerOnProximity ||
                        (a._popup = !1, p.instance(a.owner.$KH[3], S).loop("hide_idle", !0))
                })]))
            }
        },
        defeated: function() { var a = this;
            null != p.instance(this.owner.$KH[3], S) && (this._defeated = !0, p.instance(this.owner.$KH[3], S).play("hide", !0), null == this.owner.$KH[17] && this.owner.add(new Hb), this.owner.$KH[17].run(new jb([new Wa(0.3), new Qa(function() { p.instance(a.owner.$KH[3], S).loop("hide_idle", !0) })]))) },
        inRange: function() {
            if (this._defeated) return !1;
            var a = new w(p.instance(this._hero.owner.$KH[3], za).x.get__() + p.instance(this._hero.owner.$KH[3],
                    za).getNaturalWidth() / 2, p.instance(this._hero.owner.$KH[3], za).y.get__() + p.instance(this._hero.owner.$KH[3], za).getNaturalHeight()),
                b = new w(this.owner.$KH[3].x.$nH + this.owner.$KH[3].getNaturalWidth() / 2, this.owner.$KH[3].y.$nH);
            return 300 > Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)) ? !0 : !1
        },
        inProjectileRange: function(a, b) {
            if (this._defeated || !this._popup || "show_idle" != p.instance(this.owner.$KH[3], S).state.get__()) return !1;
            var c = new w(a.x.$nH + a.getNaturalWidth() / 2 - a.anchorX.$nH, a.y.$nH + a.getNaturalHeight() /
                    2 - a.anchorY.$nH),
                d = new w(this.owner.$KH[3].x.$nH + this.owner.$KH[3].getNaturalWidth() / 2, this.owner.$KH[3].y.$nH);
            return 150 > Math.sqrt(Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2)) ? !0 : !1
        },
        __class__: Kd
    });
    var Ld = function() { M.call(this) };
    h["onebuttonbob.actors.PreloadProgressPctDisplay"] = Ld;
    Ld.__name__ = ["onebuttonbob", "actors", "PreloadProgressPctDisplay"];
    Ld.__super__ = M;
    Ld.prototype = m(M.prototype, {
        onStart: function() {
            M.prototype.onStart.call(this);
            this._pctDisplay = (new R).add(new Gb(this.owner.getAssetsFromParents().getFont("fonts/SpongeBoy/sponge_boy_white40"),
                "0%"));
            this.owner.addChild(this._pctDisplay);
            p.instance(this._pctDisplay.$KH[3], Gb).setAlign(Ia.Center);
            this._pctDisplay.$KH[3].setXY(this.info.x, this.info.y);
            this._handle = this.owner._internal_getFromParents(10).changed.connect(Ra(this, this.onLoadingProgress));
            this.registerDisposable(this._handle);
            this.owner._internal_getFromParents(3, ja).owner.add(new td(0))
        },
        onLoadingProgress: function(a, b) {
            null != this._pctDisplay && p.instance(this._pctDisplay.$KH[3], Gb).set_text(b + "%");
            100 <= b && null != this._handle &&
                this._handle.dispose()
        },
        __class__: Ld
    });
    var Md = function() { this._mobile = !0;
        M.call(this) };
    h["onebuttonbob.actors.TutorialController"] = Md;
    Md.__name__ = ["onebuttonbob", "actors", "TutorialController"];
    Md.__super__ = M;
    Md.prototype = m(M.prototype, {
        onStart: function() {
            M.prototype.onStart.call(this);
            this.owner._internal_getFromParents(18);
            (this._mobile = this.owner._internal_getFromParents(18).owner.getComponentBySlot(10).get("isMobile")) ? p.instance(this.owner.$KH[3], S).loop("Mobile"): p.instance(this.owner.$KH[3],
                S).loop("Desktop")
        },
        onUpdate: function(a) { M.prototype.onUpdate.call(this, a) },
        __class__: Md
    });
    var Nd = function() { this.timeActive = this._timeElapsed = 0;
        this.ventForce = 2;
        this.isEnabled = this.alwaysOn = this.pushDown = !1;
        this.ventRadius = 60;
        this.dampenVelocity = 0;
        M.call(this) };
    h["onebuttonbob.actors.Vent"] = Nd;
    Nd.__name__ = ["onebuttonbob", "actors", "Vent"];
    Nd.__super__ = M;
    Nd.prototype = m(M.prototype, {
        onStart: function() {
            M.prototype.onStart.call(this); - 1 >= this.dampenVelocity && (this.dampenVelocity = 0);
            this._assets = this.owner.getAssetsFromParents();
            this.owner._internal_getFromParents(9, db);
            this._sceneProperties = this.owner._internal_getFromParents(9, db).owner.getComponentBySlot(10);
            this.registerDisposable(this._sceneProperties.changed.connect(Ra(this, this.onPropertiesChanged)));
            this._hero = this.owner._internal_getFromParents(3, ja).getLayer("Main Layer")._internal_getFromChildren(1, vb);
            var a = new O(this._assets, "character/VentBubbles"),
                b = new O(this._assets, "character/VentBubblesBurst");
            this._emitter = (new R).add(a.createEmitter());
            this.owner.addChild(this._emitter);
            p.instance(this._emitter.$KH[3], ea).setXY(this.info.width / 2, 0);
            this._emitterBurst = (new R).add(b.createEmitter());
            this.owner.addChild(this._emitterBurst);
            p.instance(this._emitterBurst.$KH[3], ea).setXY(this.info.width / 2, 0);
            this.setEnabled(this.alwaysOn ? !0 : this.isEnabled)
        },
        onUpdate: function(a) {
            M.prototype.onUpdate.call(this, a);
            this._timeElapsed += a;
            this.inRange(p.instance(this._hero.owner.$KH[3], za), this._hero.owner.$KH[3].getNaturalWidth() / 2) && this.isEnabled && this._hero.applyVentForce(this.pushDown ?
                -this.ventForce : this.ventForce, this.dampenVelocity, a);
            0 < this.timeActive && this._timeElapsed >= this.timeActive && this.setEnabled(!1)
        },
        inRange: function(a, b) {
            null == b && (b = -1);
            var c = this.ventRadius,
                d = new w(p.instance(this.owner.$KH[3], S).x.get__() - this.info.anchorX + this.info.width / 2, p.instance(this.owner.$KH[3], S).y.get__() - this.info.anchorY + this.info.height / 2 - this.ventRadius);
            if (null == b || 0 > b) b = Math.max(a.getNaturalWidth() / 2, a.getNaturalHeight() / 2);
            var e = new w(a.x.$nH + a.getNaturalWidth() / 2 - a.anchorX.$nH,
                    a.y.$nH + a.getNaturalHeight() / 2 - a.anchorY.$nH),
                f = d.x - e.x,
                d = d.y - e.y;
            return Math.sqrt(f * f + d * d) < c + b ? !0 : !1
        },
        setEnabled: function(a) {
            (this.isEnabled = a) ? p.instance(this.owner.$KH[3], S).loop("idle"): p.instance(this.owner.$KH[3], S).loop("off");
            p.instance(this._emitter.$KH[3], ea).enabled = this.isEnabled;
            p.instance(this._emitterBurst.$KH[3], ea).enabled = this.isEnabled;
            a && (p.instance(this._emitterBurst.$KH[3], ea).restart(), this._timeElapsed = 0) },
        onPropertiesChanged: function(a, b) { "VentToggle" != a || this.alwaysOn || this.setEnabled(!this.isEnabled) },
        __class__: Nd
    });
    var Id = function(a) { this.hintStr = "";
        this._startHidden = !0;
        this._yHide = 800;
        this._yShow = 695;
        C.call(this);
        this._startHidden = a };
    h["onebuttonbob.components.HUDHint"] = Id;
    Id.__name__ = ["onebuttonbob", "components", "HUDHint"];
    Id.__super__ = C;
    Id.prototype = m(C.prototype, {
        get_entitySlot: function() { return 13 },
        onStart: function() {
            this._assets = this.owner.getAssetsFromParents();
            var a = this.owner._internal_getFromParents(3, ja);
            this._hero = a.getLayer("Main Layer")._internal_getFromChildren(1, vb);
            this._sprite =
                new za(this._assets.getTexture("lowerHintBox"));
            var b = z.get_mobile();
            this.hintStr = this._hero.controlScheme == W.Jumper || this._hero.controlScheme == W.RunningJump ? b ? L.getFormat("instructions.jumping.body_mobile").text : L.getFormat("instructions.jumping.body_desktop").text : this._hero.controlScheme == W.Attacker ? b ? L.getFormat("instructions.attacker.body_mobile").text : L.getFormat("instructions.attacker.body_desktop").text : this._hero.controlScheme == W.AutoWalk ? b ? L.getFormat("instructions.autowalk.body_mobile").text :
                L.getFormat("instructions.autowalk.body_desktop").text : this._hero.controlScheme == W.QuickTap ? b ? L.getFormat("instructions.quicktap.body_mobile").text : L.getFormat("instructions.quicktap.body_desktop").text : b ? L.getFormat("instructions.body_mobile").text : L.getFormat("instructions.body_desktop").text;
            b = new Gb(this._assets.getFont("tkachenkoSketch_orange/tkachenkoSketch_45"), this.hintStr);
            b.centerAnchor();
            b.setScale(0.8);
            this.owner.addChild((new R).add(this._sprite.setXY(0, this._startHidden ? this._yHide :
                this._yShow)));
            this._sprite.owner.addChild((new R).add(b.setXY(a.getNaturalWidth() / 2, 50)));
            this.HintPopup()
        },
        HintPopup: function() { null == this.owner.$KH[17] && this.owner.add(new Hb); var a = this.owner.$KH[17];
            this._startHidden ? a.run(new jb([new Wa(0.5), new bd(this._sprite.y, this._yShow, 1, G.quadIn)])) : a.run(new jb([new Wa(5), new bd(this._sprite.y, this._yHide, 1, G.quadIn)])) },
        onUpdate: function(a) {},
        onRemoved: function() { this.owner.dispose() },
        __class__: Id
    });
    var cg = function(a, b) {
        this._timeElapsed = 0;
        C.call(this);
        this._x = a;
        this._y = b
    };
    h["onebuttonbob.components.HitEffect"] = cg;
    cg.__name__ = ["onebuttonbob", "components", "HitEffect"];
    cg.__super__ = C;
    cg.prototype = m(C.prototype, {
        get_entitySlot: function() { return 16 },
        onStart: function() { this._assets = this.owner.getAssetsFromParents();
            this._library = this._assets.getLibrary("worldObjects", !1);
            this._animation = new yc(this._library);
            this.owner.add(this._animation);
            this._animation.loop("fx_hit", !0);
            this._animation.movie.$nH.setXY(this._x, this._y) },
        onUpdate: function(a) {
            this._timeElapsed +=
                a;
            0.125 < this._timeElapsed && this.dispose()
        },
        onRemoved: function() { this.owner.dispose() },
        __class__: cg
    });
    var bg = function(a, b, c, d, e) { this._isBack = this._hasDefeated = !1;
        this._distance = 5;
        this._spdX = 15;
        this._timeElapsed = 0;
        C.call(this);
        this._x = a;
        this._y = b;
        this._hero = c;
        this._spdX = d;
        this._distance = e };
    h["onebuttonbob.components.Projectile"] = bg;
    bg.__name__ = ["onebuttonbob", "components", "Projectile"];
    bg.__super__ = C;
    bg.prototype = m(C.prototype, {
        get_entitySlot: function() { return 15 },
        onStart: function() {
            this._assets = this.owner.getAssetsFromParents();
            this._sprite = new za(this._assets.getTexture("character/spatula"));
            this._sprite.centerAnchor();
            this._sprite.set_visible(!1);
            this._sprite.rotation.set__(180);
            this.owner.addChild((new R).add(this._sprite.setXY(this._x + 110, this._y)));
            var a = this.owner._internal_getFromParents(3, ja).getLayer("Main Layer"),
                b = a.firstChild;
            for (this._aEnemies = new Ba; null != b;) { var c = b.next;
                null != a.next && null != p.instance(b.$KH[1], Dc) && this._aEnemies.add(p.instance(b.$KH[1], Dc));
                b = c }
        },
        onUpdate: function(a) {
            var b = 0;
            this._timeElapsed +=
                a;
            this._sprite.setXY(this._sprite.x.$nH + this._spdX * a * 60 * Math.sin(this._timeElapsed * this._distance), this._sprite.y.$nH);
            var c = this._sprite.rotation;
            c.set__(c.$nH + 720 * a);
            if (this._hasDefeated) 0.25 < this._timeElapsed && 0 <= this._spdX && (this._timeElapsed = 0, this._spdX = -15);
            else
                for (a = this._aEnemies.h, c = null, null != a ? (c = a[0], a = a[1]) : c = null; null != c;) {
                    b++;
                    if (c.inRange(this._sprite, 30)) {
                        this.owner.parent.addChild((new R).add(new cg((this._sprite.x.$nH + c.owner.$KH[3].x.$nH) / 2, (this._sprite.y.$nH + c.owner.$KH[3].y.$nH) /
                            2)));
                        c.defeated();
                        this._spdX = this._timeElapsed = 0;
                        this._hasDefeated = !0;
                        break
                    }
                    null != a ? (c = a[0], a = a[1]) : c = null
                }
            0.085 < this._timeElapsed && this._sprite.set_visible(!0);
            0 > Math.sin(this._timeElapsed * this._distance) && (this._isBack = !0);
            0.1 < this._timeElapsed && this._sprite.x.$nH < this._hero.owner.$KH[3].x.$nH + 110 && (this._spdX = -1E-4);
            (this._isBack && 0 < Math.sin(this._timeElapsed * this._distance) || 0.2 < this._timeElapsed && this._sprite.x.$nH < this._hero.owner.$KH[3].x.$nH + 110) && this.dispose()
        },
        onRemoved: function() { this.owner.dispose() },
        __class__: bg
    });
    var ag = function(a, b) { C.call(this);
        this._x = a;
        this._y = b };
    h["onebuttonbob.components.UIJumpCharge"] = ag;
    ag.__name__ = ["onebuttonbob", "components", "UIJumpCharge"];
    ag.__super__ = C;
    ag.prototype = m(C.prototype, {
        get_entitySlot: function() { return 14 },
        onStart: function() {
            this._assets = this.owner.getAssetsFromParents();
            this._spriteFront = new za(this._assets.getTexture("ui/chargeFront"));
            this._spriteFill = new za(this._assets.getTexture("ui/chargeFill"));
            this._spriteBack = new za(this._assets.getTexture("ui/chargeBack"));
            this.owner.addChild((new R).add(this._spriteBack.setXY(this._x - this._spriteBack.getNaturalWidth() / 2 + 4, this._y + 15)));
            this.owner.addChild((new R).add(this._spriteFill.setXY(this._x - this._spriteFill.getNaturalWidth() / 2 + 4, this._y + 15)));
            this.owner.addChild((new R).add(this._spriteFront.setXY(this._x - this._spriteFill.getNaturalWidth() / 2, this._y)));
            this._spriteFill.set_scissor(new Ua(0, 0, 0, this._spriteFill.getNaturalHeight()));
            this.SetVisible(!1)
        },
        SetFill: function(a) {
            this._spriteFill.set_scissor(new Ua(0,
                0, a * this._spriteFill.getNaturalWidth(), this._spriteFill.getNaturalHeight()))
        },
        SetVisible: function(a) { this._spriteFront.set_visible(a);
            this._spriteBack.set_visible(a);
            this._spriteFill.set_visible(a) },
        onUpdate: function(a) {},
        onRemoved: function() { this.dispose() },
        __class__: ag
    });
    var dg = function() { F.call(this) };
    h["onebuttonbob.scene.BubbleTransition"] = dg;
    dg.__name__ = ["onebuttonbob", "scene", "BubbleTransition"];
    dg.__super__ = F;
    dg.prototype = m(F.prototype, {
        $fF: function(a) {
            var b = this,
                c;
            c = this.script.owner._internal_getFromParents(2);
            this.script.owner._internal_getFromParents(18);
            a = this.script.owner._internal_getFromParents(18).owner.getComponentBySlot(10);
            if (null == c) return null;
            I.get_muted().set__(!0);
            this._library = c.getLibrary("game_transition", !1);
            this._animation = new yc(this._library);
            null == this.script.owner.$KH[17] && this.script.owner.add(new Hb);
            c = this.script.owner.$KH[17];
            var d = new fa;
            this._animation.loop("game_transition", !0);
            c.owner.addChild((new R).add(this._animation));
            this._animation.movie.$nH.speed.set__(0);
            0 < a.get("lossesInARow") &&
                (a = new Id(!0), c.owner.addChild((new R).add(a)));
            c.run(new jb([new Wa(0.85), new Qa(function() { b._animation.movie.$nH.centerAnchor();
                b._animation.movie.$nH.setXY(658, 384);
                b._animation.movie.$nH.speed.set__(0.5) }), new Wa(1.2666666666666666), new Qa(function() { b._animation.movie.$nH.set_paused(!0);
                b._animation.movie.$nH.speed.set__(0) }), new Qa(function() { I.get_muted().set__(!1);
                d.success(null); return d })]));
            return d
        },
        __class__: dg
    });
    var eg = function() { F.call(this) };
    h["onebuttonbob.scene.HideIfNotDebug"] =
        eg;
    eg.__name__ = ["onebuttonbob", "scene", "HideIfNotDebug"];
    eg.__super__ = F;
    eg.prototype = m(F.prototype, { $eF: function(a) { a.$KH[3].set_visible(!1) }, __class__: eg });
    var Od = function() { this.isToggleOn = !0;
        Pb.call(this) };
    h["onebuttonbob.scene.MuteButton"] = Od;
    Od.__name__ = ["onebuttonbob", "scene", "MuteButton"];
    Od.__super__ = Pb;
    Od.prototype = m(Pb.prototype, {
        onStart: function() {
            Pb.prototype.onStart.call(this);
            0 == t.volume.$nH ? this.owner.$KH[3].set_visible(this.isToggleOn ? !1 : !0) : this.owner.$KH[3].set_visible(this.isToggleOn ?
                !0 : !1);
            null
        },
        onUpdate: function(a) { Pb.prototype.onUpdate.call(this, a);
            0 == t.volume.$nH ? this.owner.$KH[3].set_visible(this.isToggleOn ? !1 : !0) : this.owner.$KH[3].set_visible(this.isToggleOn ? !0 : !1) },
        __class__: Od
    });
    var fg = function() { F.call(this) };
    h["onebuttonbob.scene.MuteButtonPressed"] = fg;
    fg.__name__ = ["onebuttonbob", "scene", "MuteButtonPressed"];
    fg.__super__ = F;
    fg.prototype = m(F.prototype, { $fF: function(a) { t.volume.set__(0 == t.volume.$nH ? 1 : 0); return null }, __class__: fg });
    var gg = function() { F.call(this) };
    h["onebuttonbob.scene.ResultsScene"] =
        gg;
    gg.__name__ = ["onebuttonbob", "scene", "ResultsScene"];
    gg.__super__ = F;
    gg.prototype = m(F.prototype, {
        $eF: function(a) {
            var b;
            this.script.owner._internal_getFromParents(18);
            b = this.script.owner._internal_getFromParents(18).owner.getComponentBySlot(10);
            a = b.get("highscore");
            var c = b.get("clicks");
            c < a && (t.$EI.getLocalStorage().set("highscore", c), a = c, b.set("highscore", c));
            var d = this.script.owner._internal_getFromParents(3, ja);
            b = d.getLayer("Click Layer");
            d = d.getLayer("Highscore Layer");
            this._uiClick = b._internal_getFromChildren(1,
                mc);
            this._uiHighscore = d._internal_getFromChildren(1, mc);
            this._uiClick.$HJ().set_text(c + "");
            this._uiHighscore.$HJ().set_text(a + "")
        },
        __class__: gg
    });
    var hg = function() { this.blendMode = da.Normal;
        F.call(this) };
    h["onebuttonbob.scene.SetToPopOnShown"] = hg;
    hg.__name__ = ["onebuttonbob", "scene", "SetToPopOnShown"];
    hg.__super__ = F;
    hg.prototype = m(F.prototype, {
        $eF: function(a) { a = this.script.owner._internal_getFromParents(9);
            a.registerDisposable(a.shown.connect(Ra(this, this.handleShown))) },
        handleShown: function() { this.script.owner._internal_getFromParents(8).popScene() },
        __class__: hg
    });
    var W = h["onebuttonbob.states.ControlScheme"] = { __ename__: ["onebuttonbob", "states", "ControlScheme"], __constructs__: "AutoWalk Attacker QuickTap Jumper RunningJump None".split(" ") };
    W.AutoWalk = ["AutoWalk", 0];
    W.AutoWalk.toString = l;
    W.AutoWalk.__enum__ = W;
    W.Attacker = ["Attacker", 1];
    W.Attacker.toString = l;
    W.Attacker.__enum__ = W;
    W.QuickTap = ["QuickTap", 2];
    W.QuickTap.toString = l;
    W.QuickTap.__enum__ = W;
    W.Jumper = ["Jumper", 3];
    W.Jumper.toString = l;
    W.Jumper.__enum__ = W;
    W.RunningJump = ["RunningJump", 4];
    W.RunningJump.toString =
        l;
    W.RunningJump.__enum__ = W;
    W.None = ["None", 5];
    W.None.toString = l;
    W.None.__enum__ = W;
    var kb = h["onebuttonbob.states.EnemyType"] = { __ename__: ["onebuttonbob", "states", "EnemyType"], __constructs__: ["Default", "SeaBear"] };
    kb.Default = ["Default", 0];
    kb.Default.toString = l;
    kb.Default.__enum__ = kb;
    kb.SeaBear = ["SeaBear", 1];
    kb.SeaBear.toString = l;
    kb.SeaBear.__enum__ = kb;
    var Hh = function() {};
    h["s2.client.ClientBootstrap"] = Hh;
    Hh.__name__ = ["s2", "client", "ClientBootstrap"];
    Hh.prototype = { __class__: Hh };
    var dd = function() {
        this.complete =
            new mb;
        this._options = new T;
        z.get_lowMemory()
    };
    h["s2.client.CommonBootstrap"] = dd;
    dd.__name__ = ["s2", "client", "CommonBootstrap"];
    dd.__interfaces__ = [Hh];
    dd.prototype = { start: function() { null }, getOptions: function() { return this._options }, __class__: dd };
    var xb = function() {};
    h["s2.client.Config"] = xb;
    xb.__name__ = ["s2", "client", "Config"];
    xb.__properties__ = { get_options: "get_options" };
    xb.init = function(a, b) {
        null == xb.initialized && (xb.initialized = new wa(!1));
        xb.initialized.$nH || (a.complete.connect(function() {
            xb.initialized.set__(!0);
            null != b && b()
        }).once(), xb._bootstrap = a, a.start())
    };
    xb.get_options = function() { return xb._bootstrap.getOptions() };
    var Fc = function() { this._gameName = this._gameProperty = "";
        dd.call(this);
        this.setupBasePaths() };
    h["s2.client.NickBootstrap"] = Fc;
    Fc.__name__ = ["s2", "client", "NickBootstrap"];
    Fc.__super__ = dd;
    Fc.prototype = m(dd.prototype, {
        start: function() { var a = new Ta,
                b = Vb.get_base() + "xml/config.xml";
            a.add("xml/config.xml", b);
            t.$EI.loadAssetPack(a).then(Ra(this, this.onConfigLoaded)) },
        onConfigLoaded: function(a) {
            a =
                a.getFile("xml/config.xml");
            this._config = r.parse(a.toString());
            null != this._parser && (this._parser(this._config), this._parser = null);
            a.dispose();
            a = this._config.elementsNamed("config").next().elementsNamed("tracking").next();
            var b = null != a && "true" == a.get("enabled").toString().toLowerCase();
            this._gameName = a.elementsNamed("gameName").next().firstChild().toString();
            null != a.elementsNamed("gameProperty").next() ? this._gameProperty = a.elementsNamed("gameProperty").next().firstChild().toString() : this._gameProperty =
                "";
            this.setupTracking(b);
            a = a.elementsNamed("locale").next();
            if (null != a) { if (a.nodeType != r.Document && a.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + a.nodeType);
                this._localizationRegion = a.children[0].toString() } else this._localizationRegion = null;
            a = null == this._localizationRegion || "" == this._localizationRegion ? "" : "_" + this._localizationRegion;
            L.init(Ra(this, this.onLocalizationLoaded), new ig, "strings/strings" + a + ".xml")
        },
        setupTracking: function(a) {
            var b = !1;
            a && t.$EI.getExternal().get_supported() &&
                (b = null != window.trackFlashEvent);
            this._externalSupported = b
        },
        getOptions: function() {
            if (this._optionsSet) return this._options;
            for (var a = this._config.elementsNamed("config").next().elementsNamed("options").next().elements(); a.hasNext();) {
                var b = a.next();
                if (b.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + b.nodeType);
                if (b.elements().hasNext()) {
                    var c = this.buildNested(b, {});
                    if (b.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + b.nodeType);
                    this._options.set(b.nodeName,
                        c)
                } else { if (b.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + b.nodeType); var c = b.nodeName,
                        d = this.guessType(function(a) { if (b.nodeType != r.Document && b.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + b.nodeType); return b.children[0] }(this).get_nodeValue());
                    this._options.set(c, d) }
            }
            this._optionsSet = !0;
            return this._options
        },
        buildNested: function(a, b) {
            for (var c = {}, d = a.elements(); d.hasNext();) {
                var e = d.next();
                P.hasField(c, function(a) {
                    if (e.nodeType !=
                        r.Element) throw new s("Bad node type, expected Element but found " + e.nodeType);
                    return e.nodeName
                }(this)) ? P.setField(c, function(a) { if (e.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + e.nodeType); return e.nodeName }(this), P.getProperty(c, function(a) { if (e.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + e.nodeType); return e.nodeName }(this)) + 1) : P.setField(c, function(a) {
                    if (e.nodeType != r.Element) throw new s("Bad node type, expected Element but found " +
                        e.nodeType);
                    return e.nodeName
                }(this), 1)
            }
            for (var d = P.fields(c), f = 0, g = d.length; f < g;) {
                var h = f++,
                    l = P.getProperty(c, d[h]),
                    m = a.elementsNamed(d[h]);
                if (1 < l)
                    for (l = [], b[d[h]] = l; m.hasNext();) { var p = m.next();
                        p.elements().hasNext() ? l.push(this.buildNested(p, {})) : l.push(this.guessType(function(a) { if (p.nodeType != r.Document && p.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + p.nodeType); return p.children[0] }(this).get_nodeValue())) } else
                        for (; m.hasNext();) {
                            var t = m.next();
                            t.elements().hasNext() ?
                                (h = this.buildNested(t, {}), P.setField(b, function(a) { if (t.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + t.nodeType); return t.nodeName }(this), h)) : P.setField(b, function(a) { if (t.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + t.nodeType); return t.nodeName }(this), this.guessType(function(a) { if (t.nodeType != r.Document && t.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + t.nodeType); return t.children[0] }(this).get_nodeValue()))
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
            a = t.$EI.getExternal().get_supported() ? Vb.get_base() : null;
            var b = new Ja("^http(s)?://", "i");
            null != a && 0 < a.length && (b.match(a) ? (b = window.location.href, b = b.split("/"), (null == b[b.length - 1] || -1 < b[b.length - 1].indexOf(".")) && b.pop(), b = b.join("/"), b = Gc.absoluteToRelative(b, a), null != b ? L.relativeBase =
                b : L.externalBase = a) : L.relativeBase = a)
        },
        __class__: Fc
    });
    var v = h["s2.client.DeviceName"] = { __ename__: ["s2", "client", "DeviceName"], __constructs__: "NICKWEB_DESKTOP NICKWEB_MOBILE NICKWEB_TABLET IOS IOS_MOBILEAPP IOS_MOBILE IOS_TABLET ANDROID ANDROID_MOBILEAPP ANDROID_MOBILE ANDROID_TABLET ANDROID_CONSOLE WINDOWS_MOBILE WINDOWS_TABLET BLACKBERRY_MOBILE BLACKBERRY_TABLET FACEBOOK WEB PC_CLIENT MAC_CLIENT PS3 PS4 PSVITA XBOX360 XBOXONE PIRACY_UNKNOWN UNKNOWN".split(" ") };
    v.NICKWEB_DESKTOP = ["NICKWEB_DESKTOP",
        0
    ];
    v.NICKWEB_DESKTOP.toString = l;
    v.NICKWEB_DESKTOP.__enum__ = v;
    v.NICKWEB_MOBILE = ["NICKWEB_MOBILE", 1];
    v.NICKWEB_MOBILE.toString = l;
    v.NICKWEB_MOBILE.__enum__ = v;
    v.NICKWEB_TABLET = ["NICKWEB_TABLET", 2];
    v.NICKWEB_TABLET.toString = l;
    v.NICKWEB_TABLET.__enum__ = v;
    v.IOS = ["IOS", 3];
    v.IOS.toString = l;
    v.IOS.__enum__ = v;
    v.IOS_MOBILEAPP = ["IOS_MOBILEAPP", 4];
    v.IOS_MOBILEAPP.toString = l;
    v.IOS_MOBILEAPP.__enum__ = v;
    v.IOS_MOBILE = ["IOS_MOBILE", 5];
    v.IOS_MOBILE.toString = l;
    v.IOS_MOBILE.__enum__ = v;
    v.IOS_TABLET = ["IOS_TABLET", 6];
    v.IOS_TABLET.toString =
        l;
    v.IOS_TABLET.__enum__ = v;
    v.ANDROID = ["ANDROID", 7];
    v.ANDROID.toString = l;
    v.ANDROID.__enum__ = v;
    v.ANDROID_MOBILEAPP = ["ANDROID_MOBILEAPP", 8];
    v.ANDROID_MOBILEAPP.toString = l;
    v.ANDROID_MOBILEAPP.__enum__ = v;
    v.ANDROID_MOBILE = ["ANDROID_MOBILE", 9];
    v.ANDROID_MOBILE.toString = l;
    v.ANDROID_MOBILE.__enum__ = v;
    v.ANDROID_TABLET = ["ANDROID_TABLET", 10];
    v.ANDROID_TABLET.toString = l;
    v.ANDROID_TABLET.__enum__ = v;
    v.ANDROID_CONSOLE = ["ANDROID_CONSOLE", 11];
    v.ANDROID_CONSOLE.toString = l;
    v.ANDROID_CONSOLE.__enum__ = v;
    v.WINDOWS_MOBILE = ["WINDOWS_MOBILE", 12];
    v.WINDOWS_MOBILE.toString = l;
    v.WINDOWS_MOBILE.__enum__ = v;
    v.WINDOWS_TABLET = ["WINDOWS_TABLET", 13];
    v.WINDOWS_TABLET.toString = l;
    v.WINDOWS_TABLET.__enum__ = v;
    v.BLACKBERRY_MOBILE = ["BLACKBERRY_MOBILE", 14];
    v.BLACKBERRY_MOBILE.toString = l;
    v.BLACKBERRY_MOBILE.__enum__ = v;
    v.BLACKBERRY_TABLET = ["BLACKBERRY_TABLET", 15];
    v.BLACKBERRY_TABLET.toString = l;
    v.BLACKBERRY_TABLET.__enum__ = v;
    v.FACEBOOK = ["FACEBOOK", 16];
    v.FACEBOOK.toString = l;
    v.FACEBOOK.__enum__ = v;
    v.WEB = ["WEB", 17];
    v.WEB.toString = l;
    v.WEB.__enum__ =
        v;
    v.PC_CLIENT = ["PC_CLIENT", 18];
    v.PC_CLIENT.toString = l;
    v.PC_CLIENT.__enum__ = v;
    v.MAC_CLIENT = ["MAC_CLIENT", 19];
    v.MAC_CLIENT.toString = l;
    v.MAC_CLIENT.__enum__ = v;
    v.PS3 = ["PS3", 20];
    v.PS3.toString = l;
    v.PS3.__enum__ = v;
    v.PS4 = ["PS4", 21];
    v.PS4.toString = l;
    v.PS4.__enum__ = v;
    v.PSVITA = ["PSVITA", 22];
    v.PSVITA.toString = l;
    v.PSVITA.__enum__ = v;
    v.XBOX360 = ["XBOX360", 23];
    v.XBOX360.toString = l;
    v.XBOX360.__enum__ = v;
    v.XBOXONE = ["XBOXONE", 24];
    v.XBOXONE.toString = l;
    v.XBOXONE.__enum__ = v;
    v.PIRACY_UNKNOWN = ["PIRACY_UNKNOWN", 25];
    v.PIRACY_UNKNOWN.toString =
        l;
    v.PIRACY_UNKNOWN.__enum__ = v;
    v.UNKNOWN = ["UNKNOWN", 26];
    v.UNKNOWN.toString = l;
    v.UNKNOWN.__enum__ = v;
    var ia = h["s2.client.Platform"] = { __ename__: ["s2", "client", "Platform"], __constructs__: "NICKWEB_DESKTOP NICKWEB_MOBILE NICKWEB_TABLET IOS_APP ANDROID_APP UNKNOWN".split(" ") };
    ia.NICKWEB_DESKTOP = ["NICKWEB_DESKTOP", 0];
    ia.NICKWEB_DESKTOP.toString = l;
    ia.NICKWEB_DESKTOP.__enum__ = ia;
    ia.NICKWEB_MOBILE = ["NICKWEB_MOBILE", 1];
    ia.NICKWEB_MOBILE.toString = l;
    ia.NICKWEB_MOBILE.__enum__ = ia;
    ia.NICKWEB_TABLET = ["NICKWEB_TABLET",
        2
    ];
    ia.NICKWEB_TABLET.toString = l;
    ia.NICKWEB_TABLET.__enum__ = ia;
    ia.IOS_APP = ["IOS_APP", 3];
    ia.IOS_APP.toString = l;
    ia.IOS_APP.__enum__ = ia;
    ia.ANDROID_APP = ["ANDROID_APP", 4];
    ia.ANDROID_APP.toString = l;
    ia.ANDROID_APP.__enum__ = ia;
    ia.UNKNOWN = ["UNKNOWN", 5];
    ia.UNKNOWN.toString = l;
    ia.UNKNOWN.__enum__ = ia;
    var $ = h["s2.client.DeviceType"] = { __ename__: ["s2", "client", "DeviceType"], __constructs__: "MOBILE_PHONE TABLET PC CONSOLE TV HANDHELD UNKNOWN".split(" ") };
    $.MOBILE_PHONE = ["MOBILE_PHONE", 0];
    $.MOBILE_PHONE.toString = l;
    $.MOBILE_PHONE.__enum__ =
        $;
    $.TABLET = ["TABLET", 1];
    $.TABLET.toString = l;
    $.TABLET.__enum__ = $;
    $.PC = ["PC", 2];
    $.PC.toString = l;
    $.PC.__enum__ = $;
    $.CONSOLE = ["CONSOLE", 3];
    $.CONSOLE.toString = l;
    $.CONSOLE.__enum__ = $;
    $.TV = ["TV", 4];
    $.TV.toString = l;
    $.TV.__enum__ = $;
    $.HANDHELD = ["HANDHELD", 5];
    $.HANDHELD.toString = l;
    $.HANDHELD.__enum__ = $;
    $.UNKNOWN = ["UNKNOWN", 6];
    $.UNKNOWN.toString = l;
    $.UNKNOWN.__enum__ = $;
    var V = h["s2.client.OperatingSystem"] = { __ename__: ["s2", "client", "OperatingSystem"], __constructs__: "WINDOWS OSX LINUX IOS ANDROID FIREOS BLACKBERRY UNKNOWN".split(" ") };
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
    var Z =
        h["s2.client.BrowserName"] = { __ename__: ["s2", "client", "BrowserName"], __constructs__: "IOS_MOBILEAPP ANDROID_MOBILEAPP SAFARI CHROME SILK FIREFOX INTERNET_EXPLORER UNKNOWN".split(" ") };
    Z.IOS_MOBILEAPP = ["IOS_MOBILEAPP", 0];
    Z.IOS_MOBILEAPP.toString = l;
    Z.IOS_MOBILEAPP.__enum__ = Z;
    Z.ANDROID_MOBILEAPP = ["ANDROID_MOBILEAPP", 1];
    Z.ANDROID_MOBILEAPP.toString = l;
    Z.ANDROID_MOBILEAPP.__enum__ = Z;
    Z.SAFARI = ["SAFARI", 2];
    Z.SAFARI.toString = l;
    Z.SAFARI.__enum__ = Z;
    Z.CHROME = ["CHROME", 3];
    Z.CHROME.toString = l;
    Z.CHROME.__enum__ = Z;
    Z.SILK = ["SILK", 4];
    Z.SILK.toString = l;
    Z.SILK.__enum__ = Z;
    Z.FIREFOX = ["FIREFOX", 5];
    Z.FIREFOX.toString = l;
    Z.FIREFOX.__enum__ = Z;
    Z.INTERNET_EXPLORER = ["INTERNET_EXPLORER", 6];
    Z.INTERNET_EXPLORER.toString = l;
    Z.INTERNET_EXPLORER.__enum__ = Z;
    Z.UNKNOWN = ["UNKNOWN", 7];
    Z.UNKNOWN.toString = l;
    Z.UNKNOWN.__enum__ = Z;
    var Ud = function(a) {
        this._validHostingURLs = [];
        var b = this;
        Fc.call(this);
        this._url = la.fromBrowser().url;
        this._domain = window.location.host;
        this._environmentKey = a;
        this._sessionID = jg.createGUID();
        this._deviceType = this.getDeviceType();
        this._os = this.getOS();
        this._browserName = this.getBrowserName();
        this._deviceName = this.getDeviceName();
        t.$EI.getLocalStorage().get("delta_uid", null).then(function(a) { b._userID = a })
    };
    h["s2.client.NickDeltaBootstrap"] = Ud;
    Ud.__name__ = ["s2", "client", "NickDeltaBootstrap"];
    Ud.__super__ = Fc;
    Ud.prototype = m(Fc.prototype, {
        onConfigLoaded: function(a) {
            var b = this;
            Fc.prototype.onConfigLoaded.call(this, a);
            for (a = 0; 2 > a;) { var c = a++;
                this._validHostingURLs.push(xb.get_options().get("hostingURL" + (c + 1))) } this._platform = this.getPlatform();
            null == this._userID ? (this._userID = jg.createGUID(), this.trackClientDevice(), t.$EI.getLocalStorage().set("delta_uid", jg.createGUID()).then(function(a) { b.track(["newPlayer"]);
                b.track(["gameStarted"]) })) : (this.trackClientDevice(), this.track(["gameStarted"]))
        },
        getDeviceType: function() { return z.get_tablet() ? $.TABLET : z.get_mobile() ? $.MOBILE_PHONE : z.get_desktop() ? $.PC : this.test("HANDHELD", !0) ? $.HANDHELD : this.test("CONSOLE", !0) ? $.CONSOLE : this.test("TV", !0) ? $.TV : $.UNKNOWN },
        getOS: function() {
            return this.test("Silk") ||
                this.test("Android", !1) && this.test(" KF") ? V.FIREOS : this.test("Android", !1) ? V.ANDROID : this.test("Windows") ? V.WINDOWS : this.test("iPad") || this.test("iPod") || this.test("iPhone") ? V.IOS : this.test("Macintosh") ? V.OSX : this.test("Linux") ? V.LINUX : this.test("BlackBerry") ? V.BLACKBERRY : V.UNKNOWN
        },
        getBrowserName: function() {
            return this._deviceName == p.string(v.IOS_MOBILEAPP) ? Z.IOS_MOBILEAPP : this._deviceName == p.string(v.ANDROID_MOBILEAPP) ? Z.ANDROID_MOBILEAPP : this.test("Silk", !1) ? Z.SILK : this.test("Chrome", !1) || z.get_iOSChrome() ?
                Z.CHROME : this.test("Safari", !1) ? Z.SAFARI : this.test("Firefox", !1) ? Z.FIREFOX : this.test("Trident", !1) ? Z.INTERNET_EXPLORER : Z.UNKNOWN
        },
        getPlatform: function() {
            var a = [];
            a.push(Pd.decrypt("LipzZXZlbjIuY29t"));
            a.push(Pd.decrypt("LipzZXZlbjIubmV0"));
            a.push(Pd.decrypt("bG9jYWxob3N0Kg=="));
            a.push(Pd.decrypt("MTkyLjE2OC4q"));
            if (z.get_nickApp()) return z.get_android() ? ia.ANDROID_APP : z.get_iOS() ? ia.IOS_APP : ia.UNKNOWN;
            switch (this._deviceType[1]) {
                case 1:
                    return ia.NICKWEB_TABLET;
                case 0:
                    return ia.NICKWEB_MOBILE;
                case 2:
                    return ia.NICKWEB_DESKTOP;
                default:
                    return ia.UNKNOWN
            }
        },
        getDeviceName: function() { var a = this,
                b = function() { var b = "_"; if (z.get_nickApp()) b += "MOBILEAPP";
                    else switch (a._deviceType[1]) {
                        case 1:
                            b += p.string($.TABLET); break;
                        case 0:
                            b += "MOBILE"; break;
                        case 3:
                            b += p.string($.CONSOLE) }
                    return b }; return this._os == V.IOS || this._os == V.ANDROID || this._os == V.BLACKBERRY || this._os == V.WINDOWS && this._deviceType != $.PC ? p.string(this._os) + b() : this._os == V.FIREOS ? "ANDROID" + b() : this._os == V.WINDOWS ? "PC_CLIENT" : this._os == V.OSX ? "MAC_CLIENT" : "WEB" },
        track: function(a) {
            var b =
                this.getJson(),
                c = P.getProperty(b, "eventParams");
            P.setField(b, "eventName", a.shift());
            for (var d = 0; d < a.length;) P.setField(c, a[d], a[d + 1]), d += 2;
            this.sendRequest(b)
        },
        getJson: function() { return { userID: this._userID, sessionID: this._sessionID, eventTimestamp: wb.format(new Date, "%Y-%m-%d %H:%M:%S"), eventParams: { platform: p.string(this._platform) + "", sdkVersion: "S2_2Dkit_DeltaDNA_SDK_v2.1", clientVersion: "Build Date: " + Vh.buildDate } } },
        test: function(a, b) { null == b && (b = !0); return z.test(a, b) },
        trackClientDevice: function() {
            this.track(["clientDevice",
                "browserName", p.string(this._browserName), "operatingSystem", p.string(this._os), "deviceType", p.string(this._deviceType), "deviceName", this._deviceName, "operatingSystemVersion", z.get_userAgent()
            ])
        },
        sendRequest: function(a) {
            if (null == this._config) throw new s("Config must be loaded first.");
            if (this._trackingEnabled) {
                var b = new Kg("http://collect10101nckpt.deltadna.net/collect/api/" + this._environmentKey);
                a = JSON.stringify(a, null, " ");
                b.setHeader("Content-type", "application/json");
                b.setPostData(a);
                b.onData =
                    function(a) {};
                b.onStatus = function(a) {};
                b.onError = function(a) {};
                b.request(!0)
            }
        },
        setupTracking: function(a) { this._trackingEnabled = a;
            this._externalSupported = !0 },
        __class__: Ud
    });
    var Td = function() { C.call(this);
        this.sdk = new nc;
        $f.set_onSuspendToggle(function(a) { t.root.add(new td(a ? 0 : 1)) }) };
    h["s2.client.NickSDKComponent"] = Td;
    Td.__name__ = ["s2", "client", "NickSDKComponent"];
    Td.__super__ = C;
    Td.prototype = m(C.prototype, { get_entitySlot: function() { return 24 }, __class__: Td });
    var Qd = function() { M.call(this) };
    h["s2.client.PreloaderNickEventObject"] =
        Qd;
    Qd.__name__ = ["s2", "client", "PreloaderNickEventObject"];
    Qd.__super__ = M;
    Qd.prototype = m(M.prototype, {
        onStart: function() { M.prototype.onStart.call(this);
            oc.sendGameEvent("onLoadingStart");
            this._handle = this.owner._internal_getFromParents(10).changed.connect(Ra(this, this.onLoadingProgress));
            this.registerDisposable(this._handle) },
        onLoadingProgress: function(a, b) { "progress" == a && (0 < b && 100 > b ? oc.sendGameEvent("getLoadingProgress", b / 100) : 100 == b && (oc.sendGameEvent("onLoadingEnd"), null != this._handle && this._handle.dispose())) },
        __class__: Qd
    });
    var kg = function() { this.triggerOnDestroy = !1;
        this.event = Y.ON_LOADING_START;
        F.call(this) };
    h["s2.client.SendNickelodeonEvent"] = kg;
    kg.__name__ = ["s2", "client", "SendNickelodeonEvent"];
    kg.__super__ = F;
    kg.prototype = m(F.prototype, {
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
            this.triggerOnDestroy ? a.add(new lg(b)) : oc.sendGameEvent(b)
        },
        __class__: kg
    });
    var lg = function(a) { C.call(this);
        this._event = a };
    h["s2.client.TriggerEventOnDestroy"] = lg;
    lg.__name__ = ["s2", "client", "TriggerEventOnDestroy"];
    lg.__super__ = C;
    lg.prototype = m(C.prototype, { get_entitySlot: function() { return 12 }, dispose: function() { oc.sendGameEvent(this._event);
            C.prototype.dispose.call(this) }, __class__: lg });
    var Y = h["s2.client.NickEventName"] = { __ename__: ["s2", "client", "NickEventName"], __constructs__: "ON_LOADING_START ON_LOADING_END ON_TITLE_SCREEN_START ON_TITLE_SCREEN_END ON_RESUME ON_PAUSE ON_LEVEL_START ON_LEVEL_COMPLETE ON_GAME_OVER PLAY_MIDROLL_AD".split(" ") };
    Y.ON_LOADING_START = ["ON_LOADING_START", 0];
    Y.ON_LOADING_START.toString = l;
    Y.ON_LOADING_START.__enum__ = Y;
    Y.ON_LOADING_END = ["ON_LOADING_END", 1];
    Y.ON_LOADING_END.toString = l;
    Y.ON_LOADING_END.__enum__ = Y;
    Y.ON_TITLE_SCREEN_START = ["ON_TITLE_SCREEN_START", 2];
    Y.ON_TITLE_SCREEN_START.toString =
        l;
    Y.ON_TITLE_SCREEN_START.__enum__ = Y;
    Y.ON_TITLE_SCREEN_END = ["ON_TITLE_SCREEN_END", 3];
    Y.ON_TITLE_SCREEN_END.toString = l;
    Y.ON_TITLE_SCREEN_END.__enum__ = Y;
    Y.ON_RESUME = ["ON_RESUME", 4];
    Y.ON_RESUME.toString = l;
    Y.ON_RESUME.__enum__ = Y;
    Y.ON_PAUSE = ["ON_PAUSE", 5];
    Y.ON_PAUSE.toString = l;
    Y.ON_PAUSE.__enum__ = Y;
    Y.ON_LEVEL_START = ["ON_LEVEL_START", 6];
    Y.ON_LEVEL_START.toString = l;
    Y.ON_LEVEL_START.__enum__ = Y;
    Y.ON_LEVEL_COMPLETE = ["ON_LEVEL_COMPLETE", 7];
    Y.ON_LEVEL_COMPLETE.toString = l;
    Y.ON_LEVEL_COMPLETE.__enum__ = Y;
    Y.ON_GAME_OVER = ["ON_GAME_OVER", 8];
    Y.ON_GAME_OVER.toString = l;
    Y.ON_GAME_OVER.__enum__ = Y;
    Y.PLAY_MIDROLL_AD = ["PLAY_MIDROLL_AD", 9];
    Y.PLAY_MIDROLL_AD.toString = l;
    Y.PLAY_MIDROLL_AD.__enum__ = Y;
    var mg = function() { this.volume = 1;
        F.call(this) };
    h["s2.creator.actions.PlayMusicTrack"] = mg;
    mg.__name__ = ["s2", "creator", "actions", "PlayMusicTrack"];
    mg.__super__ = F;
    mg.prototype = m(F.prototype, { $eF: function(a) { I.loop(a.getAssetsFromParents(), this.musicPath, this.volume) }, __class__: mg });
    var ng = function() { this.enabled = !1;
        F.call(this) };
    h["s2.creator.actions.SetPointerEnabled"] =
        ng;
    ng.__name__ = ["s2", "creator", "actions", "SetPointerEnabled"];
    ng.__super__ = F;
    ng.prototype = m(F.prototype, { $eF: function(a) { a.$KH[3].set_pointerEnabled(this.enabled) }, __class__: ng });
    var Ih = function() {};
    h["s2.localization.LocaleParser"] = Ih;
    Ih.__name__ = ["s2", "localization", "LocaleParser"];
    Ih.prototype = { __class__: Ih };
    var ig = function() {};
    h["s2.localization.DParser"] = ig;
    ig.__name__ = ["s2", "localization", "DParser"];
    ig.__interfaces__ = [Ih];
    ig.prototype = {
        parseFonts: function(a) {
            var b = new Ta,
                c = [];
            if (aa.__instanceof(a,
                    r))
                for (a = a.firstElement().elements(); a.hasNext();)
                    for (var d = a.next().elements(); d.hasNext();) { var e = d.next().get("font");
                        null != e && "" != e && -1 == c.indexOf(e) && (b.add(e + ".fnt", e + ".fnt"), c.push(e)) }
            return b
        },
        parseDefinitions: function(a) { for (var b = new Ta, c = a.get_manifest().iterator(); c.hasNext();) { var d = c.next();
                b.add(d.url, d.name); var e = a.getFile(d.name).toString(),
                    f = 0;
                do { var g = e.indexOf('file="', f),
                        f = -1; - 1 < g && (g += 6, f = e.indexOf('"', g), g = e.substring(g, f), b.add(g.split(".")[0], g)) } while (-1 < f);
                a.getFile(d.name).dispose() } return b },
        parseStrings: function(a, b) {
            var c = new T,
                d = new T;
            if (aa.__instanceof(a, r))
                for (var e = a.firstElement().elements(); e.hasNext();) {
                    var f = e.next(),
                        g = f.elements();
                    if (f.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + f.nodeType);
                    for (f = f.nodeName; g.hasNext();) {
                        var h = g.next(),
                            l = h.get("font"),
                            m = null;
                        null != l && "" != l && (m = (null != Ca[l] ? d.existsReserved(l) : d.h.hasOwnProperty(l)) ? null != Ca[l] ? d.getReserved(l) : d.h[l] : (new uc(b, l)).disposeFiles());
                        var t = 1;
                        null != h.get("fontScale") && (t = p.parseFloat(h.get("fontScale")));
                        var u = f + ".";
                        if (h.nodeType != r.Element) throw new s("Bad node type, expected Element but found " + h.nodeType);
                        var u = u + h.nodeName,
                            v = m,
                            w = p.parseFloat(h.get("lineHeight"));
                        if (h.nodeType != r.Document && h.nodeType != r.Element) throw new s("Bad node type, expected Element or Document but found " + h.nodeType);
                        h = { id: u, font: v, lineHeight: w, scale: t, text: h.children[0].get_nodeValue() };
                        null != Ca[l] ? d.setReserved(l, m) : d.h[l] = m;
                        c.set(h.id, h)
                    }
                }
            return c
        },
        __class__: ig
    };
    var L = function() {};
    h["s2.localization.Locale"] = L;
    L.__name__ = ["s2", "localization", "Locale"];
    L.init = function(a, b, c, d) { null == d && (d = "assets/fonts");
        null == c && (c = "xml/translation.xml");
        L._formats = new T;
        L._xmlPath = c;
        L._fontDirectory = d;
        L._onReady = a;
        L._parser = b;
        a = new Ta;
        b = c;
        null != L.externalBase ? b = L.externalBase + L._xmlPath : null != L.relativeBase && (b = L.relativeBase + L._xmlPath);
        a.add(c, b);
        t.$EI.loadAssetPack(a).then(L.onXmlSuccess) };
    L.getFormat = function(a) { if (L._formats.exists(a)) return L._formats.get(a); throw new s("No string id : '" + a + "' exists."); };
    L.onXmlSuccess = function(a) {
        a =
            a.getFile(L._xmlPath);
        L._x = r.parse(a.toString());
        a.dispose();
        a = L.prepManifest(L._parser.parseFonts(L._x));
        t.$EI.loadAssetPack(a).then(L.onDefinitionLoadSuccess)
    };
    L.onDefinitionLoadSuccess = function(a) { a = L.prepManifest(L._parser.parseDefinitions(a));
        t.$EI.loadAssetPack(a).then(L.onAtlasLoadSuccess) };
    L.prepManifest = function(a) { null != L.externalBase ? a.$aI = L.externalBase + L._fontDirectory : a.$ZI = null != L.relativeBase ? L.relativeBase + L._fontDirectory : L._fontDirectory; return a };
    L.onAtlasLoadSuccess = function(a) {
        L._formats =
            L._parser.parseStrings(L._x, a);
        for (a = L._formats.iterator(); a.hasNext();) { var b = a.next(),
                c = K.replace(b.text, "<br>", "\n");
            c != b.text && (b.text = c) } L.loading = !1;
        null != L._onReady && L._onReady.apply(null, []);
        L._onReady = null
    };
    var og = function() { F.call(this) };
    h["s2.localization.LocalizeText"] = og;
    og.__name__ = ["s2", "localization", "LocalizeText"];
    og.__super__ = F;
    og.prototype = m(F.prototype, {
        $eF: function(a) {
            var b = this.localizationID;
            z.get_mobile() && null != this.mobileAlternateID && "" != this.mobileAlternateID && (b = this.mobileAlternateID);
            var c = L.getFormat(b),
                d = function(a) { null },
                e = p.instance(a.$KH[3], Gb);
            if (null != e) d = function(a) { e.set_text(a);
                e.setScale(c.scale * e.scaleX.$nH) };
            else { var f = p.instance(a.$KH[3], Sc); if (null != f) d = function(a) { f.set_text(a) };
                else return } b = new Ja("\\{\\{.*}\\}", "g");
            if (b.match(c.text)) {
                var g = new Ja("[\\}\\{].", "g"),
                    h = b.matched(0),
                    l = g.replace(h, ""),
                    b = a._internal_getFromParents(10);
                a = p.instance(a.$KH[1], Rc);
                d(K.replace(c.text, h, b.get(l)));
                a.connect2(b.changed, function(a, b) {
                    if (a == l) {
                        var e = K.replace(c.text, h, b);
                        d(e)
                    }
                })
            } else d(c.text)
        },
        __class__: og
    });
    var I = function() {};
    h["s2.sound.MusicManager"] = I;
    I.__name__ = ["s2", "sound", "MusicManager"];
    I.__properties__ = { get_muted: "get_muted" };
    I.loop = function(a, b, c) { null == c && (c = 1); var d = a.getSound(b);
        I.init(d);
        I.loopSound(a, b, c) };
    I.loopSoundStandard = function(a, b, c) {
        I._volume = c;
        null == I._bgLoop || I._bgLoop.get_sound() != a.getSound(b) ? (null != I._bgLoop && I._bgLoop.dispose(), I._bgLoop = a.getSound(b).loop(I.get_muted().get__() ? 0 : I._volume)) : null != I._bgLoop && I._bgLoop.volume.animateTo(I.get_muted().get__() ?
            0 : I._volume, 0.2)
    };
    I.get_muted = function() { null == I._muted && (I._muted = new wa(!1, I.onMuteChange)); return I._muted };
    I.onMuteChange = function(a, b) { null != I._audioTag ? (I._audioTag.muted = a, I._audioTag.volume = a ? 0 : I._volume * t.volume.$nH) : null != I._bgLoop && I._bgLoop.volume.set__(a ? 0 : I._volume) };
    I.init = function(a) {
        I._init || (I.loopSound = I.loopSoundStandard, aa.__instanceof(a, hb) && (I.loopSound = I.loopSoundHack, a = window.document, I._audioTag = a.createElement("audio"), I._audioTag.id = "flambe_audioTag_hack", t.hidden.get_changed().connect(function(a,
            c) { I._audioTag.muted = a;
            I._audioTag.volume = a ? 0 : I._volume * t.volume.$nH }), t.volume.get_changed().connect(function(a, c) { I._audioTag.volume = I._volume * a }), a.body.appendChild(I._audioTag)), I._init = !0)
    };
    I.loopSoundHack = function(a, b, c) { I._volume = c;
        I.get_muted().get__() ? I._audioTag.volume = 0 : I._audioTag.volume = c * t.volume.$nH;
        I._audioTag.autoplay = !0;
        I._audioTag.loop = !0;
        I._audioTag.preload = "auto";
        I._audioTag.src = I.findFullSoundURL(a, b);
        I._audioTag.muted = I.get_muted().get__() };
    I.findFullSoundURL = function(a, b) {
        for (var c =
                a.get_manifest().iterator(); c.hasNext();) { var d = c.next(); if (d.name == b) return a.get_manifest().getFullURL(d) }
        return null
    };
    var Vh = function() {};
    h["s2.util.BuildInfo"] = Vh;
    Vh.__name__ = ["s2", "util", "BuildInfo"];
    var Gc = function() {};
    h["s2.util.PathUtil"] = Gc;
    Gc.__name__ = ["s2", "util", "PathUtil"];
    Gc.absoluteToRelative = function(a, b) {
        console.log("Start Path: " + a + " - end path: " + b);
        if (Gc.sameDomain(a, b)) {
            var c = K.replace(K.replace(a, "http://", ""), "https://", "").split("/"),
                d = K.replace(K.replace(b, "http://", ""), "https://",
                    "").split("/");
            c.shift();
            d.shift();
            "" == c[c.length - 1] && c.pop();
            for (var e = 0, f = Math.floor(Math.min(c.length, d.length)); e++ < f;) c[0] == d[0] ? (c.splice(0, 1), d.splice(0, 1)) : e = f + 1;
            f = "";
            for (e = c.length; 0 < e--;) f += "../";
            console.log("Relative path: " + f + d.join("/"));
            return f + d.join("/")
        }
        return null
    };
    Gc.sameDomain = function(a, b) { var c = Gc.getHost(a),
            d = Gc.getHost(b); return null != c && null != d && c == d ? !0 : !1 };
    Gc.getHost = function(a) {
        return K.startsWith(a, "http://") || K.startsWith(a, "https://") ? K.replace(K.replace(a, "http://",
            ""), "https://", "").split("/")[0] : null
    };
    var z = function() {};
    h["s2.util.Sniffer"] = z;
    z.__name__ = ["s2", "util", "Sniffer"];
    z.__properties__ = { get_android: "get_android", get_tablet: "get_tablet", get_lowMemory: "get_lowMemory", get_iOSChrome: "get_iOSChrome", get_iOS: "get_iOS", get_mobile: "get_mobile", get_userAgent: "get_userAgent", get_desktop: "get_desktop", get_nickApp: "get_nickApp" };
    z.init = function() {
        z._userAgent = window.navigator.userAgent;
        z._devicePixelRatio = window.devicePixelRatio;
        z._uaLower = z._userAgent.toLowerCase();
        var a = la.fromBrowser().query;
        z._nickApp = null != Ca.apiKey ? a.existsReserved("apiKey") : a.h.hasOwnProperty("apiKey");
        z._iOSTablet = z.test("iPad");
        z._iOSPocket = z.test("iPod") || z.test("iPhone");
        z._iOS = z._iOSPocket || z._iOSTablet;
        z._iOSChrome = z.test("CriOS");
        z._iOSSafari = z._iOS && z.test("Safari") && !z._iOSChrome;
        z._silk = z.test("Silk");
        z._kindle = z.test("Silk") || "amazon" == (null != Ca.partner ? a.getReserved("partner") : a.h.partner);
        for (var a = ["Mini", "Mobile", "Phone", "Tablet"], a = a.concat(["Android", "iOS", "Silk"]), b =
                0; b < a.length;) { var c = a[b];++b; if (z.test(c.toLowerCase(), !1)) { z._mobile = !0; break } } a = ["ARM", "BlackBerry", "Palm", "webOS"];
        for (b = 0; b < a.length;)
            if (c = a[b], ++b, z.test(c)) { z._mobile = !0; break } z._android = z.test("Android", !1);
        z._androidTablet = z._android && !z.test("Mobile", !1);
        z._androidPocket = z._android && z.test("Mobile", !1);
        z._tablet = z._androidTablet || z._iOSTablet || z._kindle || z.test("ARM");
        a = t.$EI.$VH.get_width() * t.$EI.$VH.get_height();
        z._lowMemory = (706560 >= a || (z._iOSTablet || z._iOSPocket) && 2 > z._devicePixelRatio) &&
            z._mobile;
        z._desktop = z.test("Macintosh") || z.test("Linux") || z.test("Windows") && !z._mobile;
        z._inited = !0
    };
    z.get_nickApp = function() { z.assureInited(); return z._nickApp };
    z.get_desktop = function() { z.assureInited(); return z._desktop };
    z.get_userAgent = function() { z.assureInited(); return z._userAgent };
    z.get_mobile = function() { z.assureInited(); return z._mobile };
    z.get_iOS = function() { z.assureInited(); return z._iOS };
    z.get_iOSChrome = function() { z.assureInited(); return z._iOSChrome };
    z.get_lowMemory = function() {
        z.assureInited();
        return z._lowMemory
    };
    z.get_tablet = function() { z.assureInited(); return z._tablet };
    z.get_android = function() { z.assureInited(); return z._android };
    z.assureInited = function() { z._inited || z.init() };
    z.test = function(a, b) { null == b && (b = !0); return b ? 0 <= z._userAgent.indexOf(a) : 0 <= z._uaLower.indexOf(a.toLowerCase()) };
    var Pd = function() {};
    h["s2.util.StringUtil"] = Pd;
    Pd.__name__ = ["s2", "util", "StringUtil"];
    Pd.decrypt = function(a) { a = Nc.decode(a); return a.getString(0, a.length) };
    var la = function(a) {
        null == la._parts && (la._parts =
            "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "));
        la._parts;
        this.url = a;
        this.query = new T;
        var b = new Ja("^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?://)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\\d*))?)(((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[?#]|$)))*/?)?([^?#/]*))(?:\\?([^#]*))?(?:#(.*))?)", "");
        b.match(a);
        a = 0;
        for (var c = la._parts.length; a < c;) {
            var d = a++,
                e = b.matched(d);
            if (null != e)
                if ("query" != la._parts[d]) this[la._parts[d]] = e;
                else
                    for (var d =
                            e.split("&"), e = 0, f = d.length; e < f;) { var g = e++,
                            g = d[g].split("=");
                        this.query.set(g[0], g[1]) }
        }
    };
    h["s2.util.URLParser"] = la;
    la.__name__ = ["s2", "util", "URLParser"];
    la.init = function() { null == la._parts && (la._parts = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" ")); return la._parts };
    la.parse = function(a) {
        null == la._parts && (la._parts = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "));
        la._parts;
        return new la(a)
    };
    la.fromBrowser = function() { return la.parse(p.string(window.location)) };
    la.prototype = { toString: function() { null == la._parts && (la._parts = "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "));
            la._parts; for (var a = "For Url -> " + this.url + "\n", b = 0, c = la._parts.length; b < c;) var d = b++,
                a = a + (la._parts[d] + ": " + p.string(P.field(this, la._parts[d])) + (d == la._parts.length - 1 ? "" : "\n")); return a }, __class__: la };
    var jg = function() {};
    h["s2.util.Utils"] =
        jg;
    jg.__name__ = ["s2", "util", "Utils"];
    jg.createGUID = function() { for (var a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), b = [], c = 0, d, e = 0; 36 > e;) { var f = e++;
            8 == f || 13 == f || 18 == f || 23 == f ? b[f] = "-" : 14 == f ? b[f] = "4" : (2 >= c && (c = 33554432 + p.parseInt(p.string(Math.random() * parseFloat("16777216"))) | 0), d = c & 15, c >>= 4, b[f] = a[19 == f ? d & 3 | 8 : d]) } return b.join("") };
    var Xh, bi = 0;
    h.Math = Math;
    String.prototype.__class__ = h.String = String;
    String.__name__ = ["String"];
    h.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ =
        h.Date = Date;
    Date.__name__ = ["Date"];
    var ci = h.Int = { __name__: ["Int"] },
        di = h.Dynamic = { __name__: ["Dynamic"] },
        $h = h.Float = Number;
    $h.__name__ = ["Float"];
    var ai = h.Bool = Boolean;
    ai.__ename__ = ["Bool"];
    var Yh = h.Class = { __name__: ["Class"] },
        Zh = {},
        Ca = {},
        Ph = Wh.ArrayBuffer || Nb;
    null == Ph.prototype.slice && (Ph.prototype.slice = Nb.sliceImpl);
    var Oh = Wh.Uint8Array || jc._new;
    r.Element = 0;
    r.PCData = 1;
    r.CData = 2;
    r.Comment = 3;
    r.DocType = 4;
    r.ProcessingInstruction = 5;
    r.Document = 6;
    N.$M = N.$L();
    N.$N = N.$L();
    N.$O = N.$L();
    N.$P = [];
    N.$Q = [];
    N.$R = new w;
    N.$S = new w;
    N.$T = new w;
    N.$U = new w;
    N.$V = new w;
    N.$W = new w;
    N.$X = new w;
    N.$Y = new w;
    bb.$i = new tg;
    bb.$j = [];
    bb.$k = [];
    fd.$BB = 0;
    Q.$NB = 0;
    Q.$OB = 0;
    Q.$PB = 0;
    Q.$QB = 0;
    Q.$RB = 0;
    Q.$SB = new ae;
    Q.$TB = new Xd;
    Q.$UB = new qc;
    Q.$VB = new qc;
    Q.$WB = new yg;
    Q.$XB = new Yd;
    hd.$TC = new qc;
    jd.defaultFilter = new jd;
    cc.defaultListener = new cc;
    rc.$_C = new Dg;
    Da.$MD = new ld;
    Da.$OD = new pc;
    Da.$PD = new pc;
    Da.$QD = new ld;
    Da.$RD = [];
    ha.$kD = new zg;
    Na.$tD = new Kc;
    Na.$uD = new Jg;
    M.__rtti = '<class path="kit.creator.CreatorObject" params="">\n\t<extends path="kit.Component"/>\n\t<get_entitySlot set="method" line="71" override="1"><f a=""><x path="Int"/></f></get_entitySlot>\n\t<info public="1" set="null">\n\t\t<c path="kit.creator.ObjectInfo"/>\n\t\t<meta>\n\t\t\t<m n=":Creator"><e>visible=false</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t</meta>\n\t</info>\n\t<spawned public="1" set="null" expr="true" line="75">\n\t\t<x path="Bool"/>\n\t\t<meta>\n\t\t\t<m n=":value"><e>true</e></m>\n\t\t\t<m n=":Creator"><e>initial=true</e></m>\n\t\t</meta>\n\t</spawned>\n\t<onStarted public="1" set="null" expr="null" line="80">\n\t\t<c path="String"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</onStarted>\n\t<onUpdated public="1" set="null" expr="null" line="85">\n\t\t<c path="String"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</onUpdated>\n\t<onStopped public="1" set="null" expr="null" line="90">\n\t\t<c path="String"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</onStopped>\n\t<onStart public="1" set="method" line="92" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="100" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<onStop public="1" set="method" line="116" override="1"><f a=""><x path="Void"/></f></onStop>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":rtti"/>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    sa.__rtti = '<class path="ez.Actor" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<pointerEnabled public="1" line="41">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</pointerEnabled>\n\t<onPointerDown public="1" line="43"><c path="String"/></onPointerDown>\n\t<onPointerIn public="1" line="44"><c path="String"/></onPointerIn>\n\t<onPointerOut public="1" line="45"><c path="String"/></onPointerOut>\n\t<onPointerUp public="1" line="46"><c path="String"/></onPointerUp>\n\t<physicsEnabled public="1" line="48"><x path="Bool"/></physicsEnabled>\n\t<density public="1" line="51">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</density>\n\t<fixedRotation public="1" line="53"><x path="Bool"/></fixedRotation>\n\t<gravityScale public="1" line="56">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</gravityScale>\n\t<friction public="1" line="59">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0.2</e></m></meta>\n\t</friction>\n\t<restitution public="1" line="61"><x path="Float"/></restitution>\n\t<sensor public="1" line="62"><x path="Bool"/></sensor>\n\t<collisionGroup public="1" line="63"><c path="Array"><c path="String"/></c></collisionGroup>\n\t<collidesWith public="1" line="64"><c path="Array"><c path="String"/></c></collidesWith>\n\t<onBeginContact public="1" line="65"><c path="String"/></onBeginContact>\n\t<onEndContact public="1" line="66"><c path="String"/></onEndContact>\n\t<physicsType public="1" line="68"><e path="ez.PhysicsType"/></physicsType>\n\t<onStart public="1" set="method" line="72" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<emitMessage set="method" line="158">\n\t\t<f a="message">\n\t\t\t<c path="String"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$cF"</e></m></meta>\n\t</emitMessage>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    sa.ENTITY_SLOT = 1;
    F.__rtti = '<class path="kit.creator.CreatorAction" params="">\n\t<runSequence public="1" set="method" line="129" static="1"><f a="actions:target">\n\t<c path="Array"><c path="kit.creator.CreatorAction"/></c>\n\t<c path="kit.Entity"/>\n\t<t path="kit.util.Promise0"/>\n</f></runSequence>\n\t<runParallel public="1" set="method" line="150" static="1"><f a="actions:target">\n\t<c path="Array"><c path="kit.creator.CreatorAction"/></c>\n\t<c path="kit.Entity"/>\n\t<t path="kit.util.Promise0"/>\n</f></runParallel>\n\t<target public="1" set="null" expr="null" line="37">\n\t\t<c path="kit.creator.ObjectInfo"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</target>\n\t<script public="1" set="null" expr="null" line="44">\n\t\t<c path="kit.creator.CreatorScript"/>\n\t\t<meta>\n\t\t\t<m n=":value"><e>null</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t\t<m n=":Creator"><e>visible=false</e></m>\n\t\t</meta>\n\t\x3c/script>\n\t<onRun public="1" set="method" line="61">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<onRunAsync public="1" set="method" line="71">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<run public="1" set="method" line="86">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$gF"</e></m></meta>\n\t</run>\n\t<new set="method" line="52"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":rtti"/>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    ee.__rtti = '<class path="ez.Delay" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<duration public="1" line="38">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</duration>\n\t<onRunAsync public="1" set="method" line="40" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<c path="kit.util.Promise"><unknown/></c>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="34"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ge.__rtti = '<class path="ez.Dispose" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="34" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="32"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ua.__rtti = '<class path="kit.creator.GroupAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<subActions public="1" set="null" line="34">\n\t\t<c path="Array"><c path="kit.creator.CreatorAction"/></c>\n\t\t<meta>\n\t\t\t<m n=":Creator"><e>visible=false</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t</meta>\n\t</subActions>\n\t<onRunAsync public="1" set="method" line="36" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="30"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    je.__rtti = '<class path="ez.Parallel" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<onRunAsync public="1" set="method" line="35" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ke.__rtti = '<class path="ez.Repeat" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<count public="1" line="37">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator"><e>initial=-1</e></m></meta>\n\t</count>\n\t<onRunAsync public="1" set="method" line="39" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<runForever set="method" line="44">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$pF"</e></m></meta>\n\t</runForever>\n\t<runCount set="method" line="51">\n\t\t<f a="target:count">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Int"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$qF"</e></m></meta>\n\t</runCount>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    le.__rtti = '<class path="ez.RunAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<name public="1" line="36"><c path="String"/></name>\n\t<onRunAsync public="1" set="method" line="38" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    me.__rtti = '<class path="ez.Sequence" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<new set="method" line="32"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ne.__rtti = '<class path="ez.Spawn" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<onRunAsync public="1" set="method" line="37" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="35"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ic.__rtti = '<class path="ez.TweenAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<tween set="method" line="42">\n\t\t<f a="entity:float:to:duration:ease">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t\t<x path="Float"/>\n\t\t\t<x path="Float"/>\n\t\t\t<e path="ez.TweenEase"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$rF"</e></m></meta>\n\t</tween>\n\t<tweenXY set="method" line="56">\n\t\t<f a="entity:xValue:toX:yValue:toY:duration:ease">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t\t<x path="Float"/>\n\t\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t\t<x path="Float"/>\n\t\t\t<x path="Float"/>\n\t\t\t<e path="ez.TweenEase"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$sF"</e></m></meta>\n\t</tweenXY>\n\t<toEaseFunction set="method" line="74">\n\t\t<f a="ease">\n\t\t\t<e path="ez.TweenEase"/>\n\t\t\t<t path="kit.animation.EaseFunction"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$tF"</e></m></meta>\n\t</toEaseFunction>\n\t<new set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    nd.__rtti = '<class path="ez.VectorGraphics" params="">\n\t<extends path="ez.Actor"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<fillColor public="1" line="38">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator">\n\t<e>format=color</e>\n\t<e>initial="#C0C0C0"</e>\n</m></meta>\n\t</fillColor>\n\t<strokeColor public="1" line="41">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator">\n\t<e>format=color</e>\n\t<e>initial="#999999"</e>\n</m></meta>\n\t</strokeColor>\n\t<strokeWidth public="1" line="44">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator"><e>initial=5</e></m></meta>\n\t</strokeWidth>\n\t<onStart public="1" set="method" line="46" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<toPoints set="method" line="95">\n\t\t<f a="closeLoop">\n\t\t\t<x path="Bool"/>\n\t\t\t<c path="Array"><x path="Float"/></c>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$xF"</e></m></meta>\n\t</toPoints>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    nd.ENTITY_SLOT = 1;
    B.$SG = new nb;
    qe.__rtti = '<class path="ez.display.AlphaTo" params="">\n\t<extends path="ez.TweenAction"/>\n\t<to public="1" line="35"><x path="Float"/></to>\n\t<duration public="1" line="37"><x path="Float"/></duration>\n\t<ease public="1" line="38"><e path="ez.TweenEase"/></ease>\n\t<onRunAsync public="1" set="method" line="40" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    re.__rtti = '<class path="ez.display.ScaleTo" params="">\n\t<extends path="ez.TweenAction"/>\n\t<x public="1" line="35"><t path="Null"><x path="Float"/></t></x>\n\t<y public="1" line="36"><t path="Null"><x path="Float"/></t></y>\n\t<duration public="1" line="38"><x path="Float"/></duration>\n\t<ease public="1" line="39"><e path="ez.TweenEase"/></ease>\n\t<onRunAsync public="1" set="method" line="41" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    se.__rtti = '<class path="ez.physics.IfCollision" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<with public="1" line="39"><c path="Array"><c path="String"/></c></with>\n\t<onRunAsync public="1" set="method" line="41" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    te.__rtti = '<class path="ez.property.IfProperty" params="">\n\t<extends path="kit.creator.GroupAction"/>\n\t<property public="1"><c path="String"/></property>\n\t<operator public="1" line="41"><e path="ez.property.IfOperator"/></operator>\n\t<type public="1" line="44"><e path="ez.property.PropertyType"/></type>\n\t<value public="1" line="47"><c path="String"/></value>\n\t<onRunAsync public="1" set="method" line="49" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<find set="method" line="71">\n\t\t<f a="entity">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<d/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eG"</e></m></meta>\n\t</find>\n\t<_value line="91"><d/></_value>\n\t<new set="method" line="35"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Kb.__rtti = '<class path="ez.property.PropertyAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<convert set="method" line="74" static="1">\n\t\t<f a="type:value">\n\t\t\t<e path="ez.property.PropertyType"/>\n\t\t\t<c path="String"/>\n\t\t\t<d/>\n\t\t</f>\n\t\t<meta>\n\t\t\t<m n=":native"><e>"$hG"</e></m>\n\t\t\t<m n=":allow"><e>ez</e></m>\n\t\t</meta>\n\t</convert>\n\t<property public="1" line="37"><c path="String"/></property>\n\t<location public="1" line="41">\n\t\t<e path="ez.property.PropertyLocation"/>\n\t\t<meta><m n=":Creator"><e>initial=Scene</e></m></meta>\n\t</location>\n\t<onRun public="1" set="method" line="43" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<getScope set="method" line="60">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<c path="kit.Entity"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fG"</e></m></meta>\n\t</getScope>\n\t<getValue set="method" line="69">\n\t\t<f a="target:currentValue">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<d/>\n\t\t\t<d/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$gG"</e></m></meta>\n\t</getValue>\n\t<new set="method" line="34"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    ue.__rtti = '<class path="ez.property.SetProperty" params="">\n\t<extends path="ez.property.PropertyAction"/>\n\t<type public="1" line="34"><e path="ez.property.PropertyType"/></type>\n\t<value public="1" line="37"><c path="String"/></value>\n\t<getValue set="method" line="39" override="1">\n\t\t<f a="target:currentValue">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<d/>\n\t\t\t<d/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$gG"</e></m></meta>\n\t</getValue>\n\t<_value line="48"><d/></_value>\n\t<new set="method" line="31"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Ka.__rtti = '<class path="ez.scene.SceneAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<complement params="A" set="method" line="146" static="1">\n\t\t<f a="set1:set2">\n\t\t\t<c path="Array"><c path="complement.A"/></c>\n\t\t\t<c path="Array"><c path="complement.A"/></c>\n\t\t\t<c path="Array"><c path="complement.A"/></c>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$mG"</e></m></meta>\n\t</complement>\n\t<transition public="1" line="44"><e path="ez.scene.SceneTransition"/></transition>\n\t<duration public="1" line="48">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0.5</e></m></meta>\n\t</duration>\n\t<createScene set="method" line="50">\n\t\t<f a="name:?opaque">\n\t\t\t<c path="String"/>\n\t\t\t<x path="Bool"/>\n\t\t\t<c path="kit.scene.Scene"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$iG"</e></m></meta>\n\t</createScene>\n\t<loadScene set="method" line="55">\n\t\t<f a="name:loadingScene:disposeUnused:push">\n\t\t\t<c path="String"/>\n\t\t\t<c path="String"/>\n\t\t\t<x path="Bool"/>\n\t\t\t<x path="Bool"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$jG"</e></m></meta>\n\t</loadScene>\n\t<createTransition set="method" line="130">\n\t\t<f a=""><c path="kit.scene.Transition"/></f>\n\t\t<meta><m n=":native"><e>"$kG"</e></m></meta>\n\t</createTransition>\n\t<getDirector set="method" line="139">\n\t\t<f a=""><c path="kit.scene.Director"/></f>\n\t\t<meta><m n=":native"><e>"$lG"</e></m></meta>\n\t</getDirector>\n\t<new set="method" line="42"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    xe.__rtti = '<class path="ez.scene.ChangeScene" params="">\n\t<extends path="ez.scene.SceneAction"/>\n\t<scene public="1"><c path="String"/></scene>\n\t<onLoadError public="1" line="38"><c path="String"/></onLoadError>\n\t<loadingScene public="1" line="41"><c path="String"/></loadingScene>\n\t<disposeUnusedAssets public="1" line="45">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</disposeUnusedAssets>\n\t<onRunAsync public="1" set="method" line="47" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="32"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ye.__rtti = '<class path="ez.scene.PopScene" params="">\n\t<extends path="ez.scene.SceneAction"/>\n\t<disposeUnusedAssets public="1" line="35">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</disposeUnusedAssets>\n\t<onRun public="1" set="method" line="37" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="31"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ze.__rtti = '<class path="ez.scene.PushScene" params="">\n\t<extends path="ez.scene.SceneAction"/>\n\t<scene public="1"><c path="String"/></scene>\n\t<opaque public="1" line="37"><x path="Bool"/></opaque>\n\t<onLoadError public="1" line="40"><c path="String"/></onLoadError>\n\t<loadingScene public="1" line="43"><c path="String"/></loadingScene>\n\t<onRunAsync public="1" set="method" line="45" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="32"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    tc.__rtti = '<class path="ez.sound.PlaySound" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<channels public="1" set="null" line="58" static="1"><x path="Map">\n\t<c path="String"/>\n\t<c path="kit.sound.Playback"/>\n</x></channels>\n\t<sound public="1" line="39"><c path="String"/></sound>\n\t<volume public="1" line="43">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</volume>\n\t<loop public="1" line="46"><x path="Bool"/></loop>\n\t<waitForComplete public="1" line="49"><x path="Bool"/></waitForComplete>\n\t<stopWhenTargetDisposed public="1" line="52"><x path="Bool"/></stopWhenTargetDisposed>\n\t<soundChannel public="1" line="55"><c path="String"/></soundChannel>\n\t<onRunAsync public="1" set="method" line="60" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="36"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    tc.channels = new T;
    Yb.USE_CACHE = !1;
    Yb.USE_ENUM_INDEX = !1;
    Yb.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Sa.DEFAULT_RESOLVER = ca;
    Sa.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Nc.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    Nc.BYTES = Db.ofString(Nc.CHARS);
    Lb.count = 0;
    Mb.i64tmp = new Lg(0, 0);
    bc.escapes = function(a) {
        a = new T;
        null != Ca.lt ? a.setReserved("lt", "<") : a.h.lt = "<";
        null != Ca.gt ? a.setReserved("gt", ">") : a.h.gt = ">";
        null !=
            Ca.amp ? a.setReserved("amp", "&") : a.h.amp = "&";
        null != Ca.quot ? a.setReserved("quot", '"') : a.h.quot = '"';
        null != Ca.apos ? a.setReserved("apos", "'") : a.h.apos = "'";
        return a
    }(this);
    aa.__toStr = {}.toString;
    jc.BYTES_PER_ELEMENT = 1;
    R.$MH = new Vg;
    Ob.$lH = new Ob;
    Ga.$AI = new Qc(null, null);
    t.root = new R;
    t.uncaughtError = new ka;
    t.lowMemoryWarning = new mb;
    t.hidden = new wa(!1);
    t.volume = new D(1);
    t.$EI = Ob.$lH;
    Ta.$cI = function() { var a = null != (new XMLHttpRequest).withCredentials;
        a || null; return a }();
    Oe.__rtti = '<class path="kit.creator.Camera" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<following public="1" line="36"><c path="kit.Entity"/></following>\n\t<zoom public="1">\n\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</zoom>\n\t<active public="1" line="42">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</active>\n\t<offsetX public="1" line="44"><x path="Float"/></offsetX>\n\t<offsetY public="1" line="45"><x path="Float"/></offsetY>\n\t<onStart public="1" set="method" line="49" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="73" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<updateLayers set="method" line="78">\n\t\t<f a="sceneSprite">\n\t\t\t<c path="kit.creator.SceneSprite"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta>\n\t\t\t<m n=":native"><e>"$dI"</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t</meta>\n\t</updateLayers>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t</meta>\n</class>';
    ja.$CJ = new Ua;
    ga.__rtti = '<class path="kit.creator.ui.Widget" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<_scratchRect line="131" static="1">\n\t\t<c path="kit.math.Rectangle"/>\n\t\t<meta><m n=":native"><e>"$CJ"</e></m></meta>\n\t</_scratchRect>\n\t<pointerEnabled public="1" line="40">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</pointerEnabled>\n\t<onPointerDown public="1" line="42"><c path="String"/></onPointerDown>\n\t<onPointerIn public="1" line="43"><c path="String"/></onPointerIn>\n\t<onPointerOut public="1" line="44"><c path="String"/></onPointerOut>\n\t<onPointerUp public="1" line="45"><c path="String"/></onPointerUp>\n\t<onClick public="1" line="47"><c path="String"/></onClick>\n\t<dockX public="1" line="50"><e path="kit.creator.ui.DockX"/></dockX>\n\t<dockY public="1" line="51"><e path="kit.creator.ui.DockY"/></dockY>\n\t<cameraEnabled line="54">\n\t\t<e path="kit.creator.ui.CameraSetting"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</cameraEnabled>\n\t<onStart public="1" set="method" line="56" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<addListener params="A" set="method" line="122">\n\t\t<f a="signal:message">\n\t\t\t<c path="kit.util.Signal1"><c path="addListener.A"/></c>\n\t\t\t<c path="String"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$GJ"</e></m></meta>\n\t</addListener>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    ga.$CJ = new Ua;
    mc.__rtti = '<class path="kit.creator.ui.BitmapText" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<textAlign public="1" line="36"><e path="kit.display.TextAlign"/></textAlign>\n\t<font public="1"><c path="String"/></font>\n\t<letterSpacing public="1" line="38"><x path="Float"/></letterSpacing>\n\t<lineSpacing public="1" line="39"><x path="Float"/></lineSpacing>\n\t<text public="1" line="42">\n\t\t<c path="String"/>\n\t\t<meta><m n=":Creator"><e>initial="Your text"</e></m></meta>\n\t</text>\n\t<textScale public="1" line="45">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</textScale>\n\t<onStart public="1" set="method" line="47" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<getTextSprite public="1" set="method" line="70">\n\t\t<f a=""><c path="kit.display.TextSprite"/></f>\n\t\t<meta><m n=":native"><e>"$HJ"</e></m></meta>\n\t</getTextSprite>\n\t<updateTextSprite set="method" line="75">\n\t\t<f a="addListeners">\n\t\t\t<x path="Bool"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$IJ"</e></m></meta>\n\t</updateTextSprite>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    mc.ENTITY_SLOT = 1;
    Pb.__rtti = '<class path="kit.creator.ui.Button" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<pressDistance public="1" line="33">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=10</e></m></meta>\n\t</pressDistance>\n\t<onStart public="1" set="method" line="35" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Pb.ENTITY_SLOT = 1;
    $b.__rtti = '<class path="kit.creator.ui.Image" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    $b.ENTITY_SLOT = 1;
    ud.__rtti = '<class path="kit.creator.ui.ProgressBar" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<progressProperty public="1" line="35">\n\t\t<c path="String"/>\n\t\t<meta><m n=":Creator"><e>initial="progress"</e></m></meta>\n\t</progressProperty>\n\t<progressMax public="1" line="39">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=100</e></m></meta>\n\t</progressMax>\n\t<progressDirection public="1" line="43">\n\t\t<e path="kit.creator.ui.ProgressDirection"/>\n\t\t<meta><m n=":Creator"><e>initial=Right</e></m></meta>\n\t</progressDirection>\n\t<fillColor public="1" line="47">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator"><e>format=color</e></m></meta>\n\t</fillColor>\n\t<onStart public="1" set="method" line="49" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<update set="method" line="73">\n\t\t<f a="progress">\n\t\t\t<x path="Float"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$OH"</e></m></meta>\n\t</update>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ud.ENTITY_SLOT = 1;
    wd.__rtti = '<class path="kit.creator.ui.RepeatingImage" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<scaleX public="1" line="32">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</scaleX>\n\t<scaleY public="1" line="35">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</scaleY>\n\t<onStart public="1" set="method" line="37" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    wd.ENTITY_SLOT = 1;
    Rc.__rtti = '<class path="kit.creator.ui.Text" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<font public="1" line="36"><c path="String"/></font>\n\t<systemFont public="1" line="37"><c path="String"/></systemFont>\n\t<text public="1" line="40">\n\t\t<c path="String"/>\n\t\t<meta><m n=":Creator"><e>initial="Your text"</e></m></meta>\n\t</text>\n\t<fontSize public="1" line="43">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=24</e></m></meta>\n\t</fontSize>\n\t<bold public="1" line="45"><x path="Bool"/></bold>\n\t<italic public="1" line="46"><x path="Bool"/></italic>\n\t<color public="1" line="49">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator">\n\t<e>initial="#000000"</e>\n\t<e>format=color</e>\n</m></meta>\n\t</color>\n\t<strokeColor public="1" line="52">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator">\n\t<e>initial="#ffffff"</e>\n\t<e>format=color</e>\n</m></meta>\n\t</strokeColor>\n\t<strokeWidth public="1" line="54"><x path="Float"/></strokeWidth>\n\t<lineSpacing public="1" line="56"><x path="Float"/></lineSpacing>\n\t<textAlign public="1" line="58"><e path="kit.display.TextAlign"/></textAlign>\n\t<onStart public="1" set="method" line="60" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<updateTextSprite set="method" line="91">\n\t\t<f a="addListeners">\n\t\t\t<x path="Bool"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$IJ"</e></m></meta>\n\t</updateTextSprite>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Rc.ENTITY_SLOT = 1;
    uc.$$J = new Cf(10);
    Eb.$JN = new hh;
    $a.$JN = new ih;
    Oa.$JN = new jh;
    oa.__meta__ = {
        obj: {
            injected: [{
                scenes: {
                    testing: ["game", "pause", "instructions", "bootstrap"],
                    pause: ["pause", "ui"],
                    cutscene_intro: ["cutscene", "bootstrap", "ui"],
                    level9: "game pause instructions bootstrap bgKelp ui HUD".split(" "),
                    level8: "game pause instructions bootstrap bgMall ui HUD".split(" "),
                    level7: "game pause instructions bootstrap bgMall ui HUD".split(" "),
                    level6: "game pause instructions bootstrap bgMall ui HUD".split(" "),
                    level5: "game pause instructions bootstrap bgMall ui HUD".split(" "),
                    level4: "game pause instructions bootstrap bgDump ui HUD".split(" "),
                    level3: "game pause instructions bootstrap bgDump ui HUD".split(" "),
                    level2: "game pause instructions bootstrap bgDump ui HUD".split(" "),
                    level1: "game pause instructions bootstrap bgDump ui HUD".split(" "),
                    level5a: "game pause instructions bootstrap bgMall ui".split(" "),
                    level20: "game pause instructions bootstrap bgKrusty ui".split(" "),
                    level19: "game pause instructions bootstrap bgKrusty ui".split(" "),
                    level18: "game pause instructions bootstrap bgMall ui".split(" "),
                    level17: "game pause instructions bootstrap bgDump ui".split(" "),
                    level15: "game pause instructions bootstrap bgKrusty ui HUD".split(" "),
                    level14: "game pause instructions bootstrap bgKrusty ui HUD".split(" "),
                    level13: "game pause instructions bootstrap bgKrusty ui HUD".split(" "),
                    level12: "game pause instructions bootstrap bgKelp ui HUD".split(" "),
                    level11: "game pause instructions bootstrap bgKelp ui HUD".split(" "),
                    level10: "game pause instructions bootstrap bgKelp ui HUD".split(" "),
                    intro_forest: ["instructions", "bootstrap", "ui"],
                    cutscene_outro: ["cutscene", "bootstrap", "ui"],
                    easteregg3: ["game"],
                    easteregg2: ["game"],
                    easteregg1: ["game"],
                    title: ["title", "bootstrap", "ui"],
                    preloader: ["bootstrap"],
                    HUD: "HUD pause instructions bootstrap game bgDump ui".split(" "),
                    instructions: ["instructions", "bootstrap", "ui"],
                    results: ["results", "bootstrap", "ui"],
                    confirmquit: ["pause", "ui"],
                    intro_mall: ["instructions", "bootstrap", "ui"],
                    intro_dump: ["instructions", "bootstrap", "ui"],
                    intro_krustykrab: ["instructions",
                        "bootstrap", "ui"
                    ],
                    info: ["info", "bootstrap", "ui"]
                },
                maxHeight: 768,
                scaleMode: 1,
                height: 768,
                id: "com.nick.onebuttonbob",
                orientation: "any",
                fullscreen: !0,
                maxWidth: 1316,
                assets: {
                    pause: [{ bytes: 12598, md5: "2cp5A5e05j9MsDtXOz19Tg", name: "confirmquit.scene" }, { bytes: 25685, md5: "9As3uMqEx_ykvPlqfU5rkg", name: "pause.scene" }],
                    bgMall: [{ bytes: 55989, md5: "vNSyzkQPV6gaU3SyMbJO8A", name: "mall_foreground01.png" }, { bytes: 37403, md5: "GlMZajeev0betCOh6wSZyg", name: "mall_foreground02.png" }, {
                        bytes: 117415,
                        md5: "u2e0YfB1yaIeNhxQ7dqtVQ",
                        name: "mall_foreground03.png"
                    }, { bytes: 756741, md5: "itC3BHorp6awKHRPAY6nYg", name: "bg_mall_fullscreen.png" }],
                    bgKelp: [{ bytes: 36111, md5: "N1_j1RpWEU1zikci8ohYPA", name: "kelp_foreground03.png" }, { bytes: 33054, md5: "V9I9HL2dnSNgrI3e8dxHXg", name: "kelp_foreground02.png" }, { bytes: 204768, md5: "NKSrDlVR7Loc5EqFyXAIFw", name: "kelp_foreground01.png" }, { bytes: 786486, md5: "Ok9GB2Xkd9ufXKge4H9gXA", name: "bg_kelp_fullscreen.png" }],
                    bgDump: [{ bytes: 50019, md5: "ZMVm7RPkoAKLOchmK42nWg", name: "dump_foreground01.png" }, {
                        bytes: 36827,
                        md5: "tEqjcEW4bdPlrvytFYdkxA",
                        name: "dump_foreground03.png"
                    }, { bytes: 48790, md5: "9jVED6kygW4CoZzTUilyPw", name: "dump_foreground02.png" }, { bytes: 690798, md5: "g_rcWqnzsvkI-C84kxltKA", name: "bg_dump_fullscreen.png" }],
                    title: [{ bytes: 7760, md5: "oHQEMW4jDLkDO3B2e7ZcPg", name: "title.scene" }, { bytes: 1185978, md5: "2WXQpWOTID198AXDEHfcDg", name: "spongebob_title.png" }],
                    bgKrusty: [{ bytes: 46150, md5: "Z-rF1nD3SLne6yhpry9-Dw", name: "kk_foreground02.png" }, { bytes: 55609, md5: "iwk4HRyBcc2qFlzX9gSkTA", name: "kk_foreground03.png" }, {
                        bytes: 69279,
                        md5: "zaesZkqE90fiYiCIAvlLxQ",
                        name: "kk_foreground01.png"
                    }, { bytes: 862637, md5: "4eg7ansRGNNk2DdjGQaeoQ", name: "bg_krustykrab_fullscreen.png" }],
                    HUD: [{ bytes: 21666, md5: "FSyLEFV_vHGxX_7l0n68IQ", name: "HUD.scene" }, { bytes: 61027, md5: "-OzcR0NKTSu1spNwqecNbA", name: "TapCounter.png" }, { bytes: 28009, md5: "HqmSSLMOy0YjN45fWeq7_A", name: "pauseBtn.png" }, { bytes: 68404, md5: "aqJpkTnudsACCJ1vF_Z8XA", name: "lowerHintBox.png" }],
                    ui: [{ bytes: 20051, md5: "cxzSTfsMaSYbn_hJsZrHoQ", name: "button_next.png" }, { bytes: 15163, md5: "6SBnHkUM0id8S1erftzKWg", name: "bg_darken.png" },
                        { bytes: 19914, md5: "o4ymXuRX00A1s-5FD_334A", name: "button_no.png" }, { bytes: 20679, md5: "DuJWD-s3xwcM6C4YBtGYAA", name: "button_soundOff.png" }, { bytes: 19874, md5: "9hlts_o3vjeLSzR_3vmeCw", name: "button_soundOn.png" }, { bytes: 24257, md5: "CGv4TfL2nghE221VSRn2Vw", name: "button_yes.png" }, { bytes: 1619, md5: "uiVDKTjMaQd9qmtD5krcTQ", name: "SpongeBoy/SpongeBoy_95.fnt" }, { bytes: 42872, md5: "QDG-OlqKk2J4d3e6uDXrGg", name: "SpongeBoy/SpongeBoy_95.png" }, { bytes: 1626, md5: "yZWUfyGlwWRGbdumUkQLQw", name: "SpongeBoy/SpongeBoy_counter_50.fnt" },
                        { bytes: 21353, md5: "qgtTuflELXgkCdI3yPOA-A", name: "SpongeBoy/SpongeBoy_counter_50.png" }, { bytes: 175837, md5: "Ka780UGOyy4EGSyUrYEyHA", name: "paperScrap.png" }, { bytes: 30935, md5: "O4VcIo8kW2tGPlP8rKBZ7Q", name: "SpongeBoy/spongeBoy_white40.fnt" }, { bytes: 40645, md5: "8ps8rvQKirnQ8KqNOA5ceg", name: "tkachenkoSketch/tkachenkoSketch_45.fnt" }, { bytes: 40645, md5: "8ps8rvQKirnQ8KqNOA5ceg", name: "tkachenkoSketch_black/tkachenkoSketch_45.fnt" }, { bytes: 40645, md5: "8ps8rvQKirnQ8KqNOA5ceg", name: "tkachenkoSketch_orange/tkachenkoSketch_45.fnt" },
                        { bytes: 40645, md5: "8ps8rvQKirnQ8KqNOA5ceg", name: "tkachenkoSketch_purple/tkachenkoSketch_45.fnt" }, { bytes: 85185, md5: "JpgqWJmD1tJTNKw68RiBDQ", name: "tkachenkoSketch_black/tkachenkoSketch_45.png" }, { bytes: 100619, md5: "T96BJtjudT0qTMFhZa33Jw", name: "tkachenkoSketch_orange/tkachenkoSketch_45.png" }, { bytes: 100568, md5: "AVU4LRlloHb_AN5CBNfgoA", name: "tkachenkoSketch_purple/tkachenkoSketch_45.png" }, { bytes: 153577, md5: "SAW98Qp5LJnSZqhsMqfuEA", name: "tkachenkoSketch/tkachenkoSketch_45.png" }, {
                            bytes: 219485,
                            md5: "z_pdSMcU6agTYXD-KgT-yg",
                            name: "SpongeBoy/spongeBoy_white40.png"
                        }
                    ],
                    bootstrap: [{ bytes: 40625, md5: "NRSAguE2HWhdiCxuOH3U-Q", name: "LoaderBar.png" }, { bytes: 7974, md5: "F9eprfEetoqwbl1G8dLMtQ", name: "loading-bg.jpg" }, { bytes: 9309, md5: "cxJAqvjgkFrhCTiiN-PpKw", name: "preloader.scene" }, { bytes: 10445, md5: "lPvdqk6uwTsAqi8bNmTepA", name: "fonts/Arial-hd.fnt" }, { bytes: 49007, md5: "EGtsjsmab6K3jrktpQe5IA", name: "fonts/Arial-hd.png" }, { bytes: 249944, md5: "X2i0qhClOREDsjVEDrjExw", name: "music/sbobbp_gameplay_music_level1.mp3" }, {
                            bytes: 249944,
                            md5: "W4dk77ntWXZllo3fr2Vp1w",
                            name: "music/sbobbp_gameplay_music_level2.mp3"
                        }, { bytes: 59306, md5: "Qgp-2pRCLpB7d0NydBX7hQ", name: "music/sbobbp_storyscreen_musicv1.m4a" }, { bytes: 294733, md5: "irMh8a44mTd2YJYToJ89Ew", name: "music/sbobbp_gameplay_music_level1.m4a" }, { bytes: 249944, md5: "mJgPyLV5GEVHyXSJjopbZw", name: "music/sbobbp_gameplay_music_level3.mp3" }, { bytes: 315286, md5: "Vl73I3KGVMorgg3y4Dh3uQ", name: "music/sbobbp_gameplay_music_level1.ogg" }, { bytes: 294541, md5: "eDr5cm2VO3MKNEHsiHL7Ag", name: "music/sbobbp_gameplay_music_level2.m4a" }, {
                            bytes: 314612,
                            md5: "knblldyVDwtCX2_KIP9Q-A",
                            name: "music/sbobbp_gameplay_music_level2.ogg"
                        }, { bytes: 294523, md5: "eD21bUT35Ifh8KWsqClfvA", name: "music/sbobbp_gameplay_music_level3.m4a" }, { bytes: 67208, md5: "3nrHYCWnaRTND7YBMg0p9w", name: "music/sbobbp_storyscreen_musicv1.mp3" }, { bytes: 188775, md5: "ZK1zasp2zNVi_GhJKtNh3g", name: "music/sbobbp_menu_selection_musicv1.m4a" }, { bytes: 314712, md5: "E7NRYxqQp6eDW9Bj_4E2FA", name: "music/sbobbp_gameplay_music_level3.ogg" }, { bytes: 143024, md5: "z_lbONOqC_pNhQe7Mer4lg", name: "music/sbobbp_menu_selection_musicv1.mp3" },
                        { bytes: 185453, md5: "Q5-EuiJYwzxIAvwy4bW-Dg", name: "music/sbobbp_menu_selection_musicv1.ogg" }, { bytes: 177287, md5: "--NVTrJpqiUgOlVcXfWpBw", name: "music/sbobbp_storyscreen_musicv1.ogg" }, { bytes: 59285, md5: "H-nS8gLBRUb0av-VaIusYQ", name: "music/sbobbp_storyscreen_musicv1alt.m4a" }, { bytes: 236, md5: "CvUvr8bBKI41p7LdotqMcg", name: "progress/Background.png" }, { bytes: 67208, md5: "xVVctd0m0LyCcGP-OPeA4w", name: "music/sbobbp_storyscreen_musicv1alt.mp3" }, { bytes: 233, md5: "d_dKyaJT5LoSdV71iwxY5g", name: "progress/Fill.png" }, {
                            bytes: 1802,
                            md5: "4ll7xpwrYJJWetZE_wI4Ew",
                            name: "progress/Left.png"
                        }, { bytes: 1812, md5: "702qaCGn0hcbuzxEuRnJfQ", name: "progress/Right.png" }, { bytes: 53846, md5: "zBT2wB_BcZrH1bRYUITCpw", name: "sfx/SB-footsteps1.wav" }, { bytes: 78393, md5: "KjXAheP2CA-9S0jeu-AI9g", name: "music/sbobbp_titlescreen_musicv1.m4a" }, { bytes: 107600, md5: "UJG9thVcb5Cprjwg63lXNg", name: "music/sbobbp_titlescreen_musicv1.mp3" }, { bytes: 63854, md5: "rXsc6HjjP_1sRhFDXjPVjQ", name: "sfx/SB-footsteps3.wav" }, { bytes: 46760, md5: "lje5iSDoKZSNkKCcFN1fXQ", name: "sfx/SB-footsteps2.wav" },
                        { bytes: 181496, md5: "5w_rkB0DOhqhSvc8q2m5ow", name: "music/sbobbp_storyscreen_musicv1alt.ogg" }, { bytes: 35108, md5: "MozEMFqP14R7tfXhPtBg0g", name: "sfx/SB-footsteps6.wav" }, { bytes: 91824, md5: "nNVA6_YAZ38CJg0-R3QqeA", name: "sfx/SB-footsteps4.wav" }, { bytes: 53624, md5: "yWMB4hq2_a76yuxEmMR0xQ", name: "sfx/sbpobb_anchorfallsv1.wav" }, { bytes: 285548, md5: "Exg-wWmZcDNSA3rJyATKlA", name: "music/sbobbp_titlescreen_musicv1.ogg" }, { bytes: 9648, md5: "ldJqb79ZsJiUrhcBc0oycw", name: "sfx/sbpobb_button_selectv2.wav" }, {
                            bytes: 33822,
                            md5: "mJRl0M3jnhvsfr_fnu5Hig",
                            name: "sfx/sbpobb_button_selectv4.wav"
                        }, { bytes: 222784, md5: "Jyxx-yCPU8fHYYbA6grQFQ", name: "sfx/SB-footsteps5_mainloop.wav" }, { bytes: 18696, md5: "PFTwv4Le4ZhxwcgtBya-IQ", name: "sfx/sbpobb_button_selectv3.wav" }, { bytes: 37612, md5: "4NpC7g69XfNiD47i5DuZsQ", name: "sfx/sbpobb_destroy_objectv4.wav" }, { bytes: 40032, md5: "nb-B5J6gPYGW9aw0GxCawA", name: "sfx/sbpobb_destroy_objectv5.wav" }, { bytes: 56946, md5: "pTi_Q_jiEmqS2rJ9x9PUYQ", name: "sfx/sbpobb_fallingdownv1.wav" }, { bytes: 68822, md5: "yf-yBPbMWKvqcbxyXrHbOg", name: "sfx/sbpobb_anchorhitv1.wav" },
                        { bytes: 72574, md5: "rPpZPKmNE5-CLGMzz61nQQ", name: "sfx/sbpobb_bubblespoutv1.wav" }, { bytes: 184634, md5: "1hQ5MQZ8ebKXjUhPcxMZbw", name: "sfx/sbobbp_winner_stingerv1.wav" }, { bytes: 25422, md5: "qqsKrOxGtLWFPXnlTPXZVQ", name: "sfx/sbpobb_fingerspopupv1.wav" }, { bytes: 51164, md5: "2YqexV2otluxqUJEK_-zyQ", name: "sfx/sbpobb_goingupv1.wav" }, { bytes: 928779, md5: "iCzd4iaKmQ3MttkxRWwnPA", name: "bgLoader.png" }, { bytes: 37988, md5: "2CxgrOQkQewaMCCs7HJzug", name: "sfx/sbpobb_goingupv2.wav" }, { bytes: 29038, md5: "3j_Mfw-GOSV4UjbBakJerw", name: "sfx/sbpobb_jumpv1.wav" },
                        { bytes: 237266, md5: "-hDTNg48S6aULHW4HpBg6w", name: "sfx/sbobbp_loser_stingerv1.wav" }, { bytes: 26416, md5: "pDHnmLZX9U-zLILslPx2LA", name: "sfx/sbpobb_landingv2.wav" }, { bytes: 150314, md5: "T94MfaxTaGi9z65J5qnSPA", name: "sfx/sbpobb_fallingdownv2.wav" }, { bytes: 47866, md5: "bieOSQvhk0ensFtmrNnRcw", name: "sfx/sbpobb_throw_spatulav1.wav" }, { bytes: 740, md5: "esAvBICF2_sU_SWmW8bt3g", name: "fonts/ArialRoundedMtBold/arial_rounded_mt_bold.bmfc" }, { bytes: 34340, md5: "QFrUTnEHWLUEARpujsA_cg", name: "fonts/ArialRoundedMtBold/arial_rounded_mt_bold.fnt" },
                        { bytes: 83812, md5: "FYTDybCCJvoB4sfqfXpZkw", name: "sfx/sbpobb_squeekyshow_walking_loopv1.wav" }, { bytes: 17979, md5: "moboFuVFED3743cmCAuc1g", name: "fonts/ArialRoundedMtBold/arial_rounded_mt_bold_0.png" }, { bytes: 31052, md5: "1U5z9ZGWFjJKE9cqz1DNkg", name: "fonts/SpongeBoy/sponge_boy_white40.fnt" }, { bytes: 98554, md5: "h3lHM3N7hQKUufg04lL30w", name: "sfx/sbpobb_tilecrackingv1.wav" }, { bytes: 740, md5: "esAvBICF2_sU_SWmW8bt3g", name: "fonts/ArialRoundedMtBold/black24pt/black24pt/arial_rounded_mt_bold.bmfc" }, {
                            bytes: 34340,
                            md5: "QFrUTnEHWLUEARpujsA_cg",
                            name: "fonts/ArialRoundedMtBold/black24pt/black24pt/arial_rounded_mt_bold.fnt"
                        }, { bytes: 17979, md5: "moboFuVFED3743cmCAuc1g", name: "fonts/ArialRoundedMtBold/black24pt/black24pt/arial_rounded_mt_bold_0.png" }, { bytes: 740, md5: "esAvBICF2_sU_SWmW8bt3g", name: "fonts/ArialRoundedMtBold/white64pt/white64pt/arial_rounded_mt_bold.bmfc" }, { bytes: 40430, md5: "CI6qcilUm1G_FVNqJrOiSA", name: "fonts/ArialRoundedMtBold/white64pt/white64pt/arial_rounded_mt_bold.fnt" }, { bytes: 97410, md5: "0H9jIhWzlJpZsCWBOLFC0w", name: "sfx/sbpobb_tilecrackingv2.wav" },
                        { bytes: 55872, md5: "lNlNYdZNW_rkXNnsot4yAg", name: "fonts/ArialRoundedMtBold/white64pt/white64pt/arial_rounded_mt_bold_0.png" }, { bytes: 92503, md5: "sOJbKyV6YZGssPwN6b30cA", name: "fonts/SpongeBoy/sponge_boy_white40.png" }
                    ],
                    cutscene: [{ bytes: 12778, md5: "3sbAnFnfbP-aMfHG770jSg", name: "cutscene_intro.scene" }, { bytes: 9887, md5: "EbSPtqXURnuz_mW8Py_03w", name: "cutscene_outro.scene" }, { bytes: 3633, md5: "Xh58kvl04S9M_ssSXBf71Q", name: "end_haha.png" }, { bytes: 460071, md5: "v6hlWuCpoq1YRElTm-LQLA", name: "end_details.png" }, {
                        bytes: 401305,
                        md5: "CMI9Vq8c2HCnJ_tTGh6H8w",
                        name: "intro_details.png"
                    }, { bytes: 1317849, md5: "gqPXQWr7kJ5H-A9fhiZT7w", name: "bg_cutscene.png" }],
                    instructions: [{ bytes: 15389, md5: "QvYIcrbL76ZjDICjX_Wblg", name: "instructions.scene" }, { bytes: 13593, md5: "zs4sZkg8IS8J0p50aSTILg", name: "intro_dump.scene" }, { bytes: 11231, md5: "yyBVLJsuUYWukKJeblKKTA", name: "intro_forest.scene" }, { bytes: 11290, md5: "vs8Uu0cJCMp-cKgXUJ7Mkg", name: "intro_krustykrab.scene" }, { bytes: 11259, md5: "3-RqxT2JH2Y5-NOO_InzZg", name: "intro_mall.scene" }, {
                        bytes: 4570,
                        md5: "BMYDC9DVHvoMK8wNX0UyQw",
                        name: "game_tutorial/library.json"
                    }, { bytes: 67711, md5: "eIsnr1Lfn0Y2gZhsWv6OqQ", name: "game_tutorial/atlas0.png" }],
                    results: [{ bytes: 20450, md5: "Y2ebwtUf-Oe3-_iLmxGKyQ", name: "results.scene" }, { bytes: 1865, md5: "GY5g6RQ-COV0Rik-iP0p4g", name: "results/library.json" }, { bytes: 342448, md5: "0rnka4xBVw0ZqYZimSc5hg", name: "results/atlas0.png" }, { bytes: 1256256, md5: "eewXRsMeRnYhcZGmAtG7-Q", name: "bg_results.png" }],
                    info: [{ bytes: 9109, md5: "AQp-RWibYmiFEb7yi9F8gA", name: "info.scene" }],
                    game: [{
                            bytes: 3719,
                            md5: "S_74XWLmjV1unwBn6e5zTw",
                            name: "easteregg1.scene"
                        }, { bytes: 3829, md5: "VCHJ79JF-0juHt8uM72wVw", name: "easteregg2.scene" }, { bytes: 3828, md5: "7ArDlAh7Q53z9wsJdrCxnA", name: "easteregg3.scene" }, { bytes: 79470, md5: "Ww8vbbkmsmqqoEF7x_4rQw", name: "level1.scene" }, { bytes: 86679, md5: "a8Sl7hMqhKTaq8pTG2KhZQ", name: "level10.scene" }, { bytes: 90716, md5: "-jX4R2kn3rylMxE74wNT_Q", name: "level11.scene" }, { bytes: 78503, md5: "Y9dp-x5JNqUzNW9Jwl3gHQ", name: "level12.scene" }, { bytes: 92354, md5: "ic5s6gtj0RPHkCGaZCDo7g", name: "level14.scene" }, {
                            bytes: 114054,
                            md5: "50GGa5GwntHr5yUWZHQJNQ",
                            name: "level13.scene"
                        }, { bytes: 104539, md5: "yG5-9pvDFuFxYkKhe6M_WA", name: "level15.scene" }, { bytes: 77952, md5: "7rmHu63ZWQSmWkHOEw6xbQ", name: "level17.scene" }, { bytes: 75409, md5: "hIsKiEVYbbT-5ZxN5lk5fw", name: "level18.scene" }, { bytes: 92583, md5: "sEDerG-oLiyzsyss20M0fw", name: "level19.scene" }, { bytes: 85213, md5: "my5D6Hdx7qDcuYxuutR11A", name: "level2.scene" }, { bytes: 90364, md5: "y9RzIzUMidVpErM_Bc66jQ", name: "level20.scene" }, { bytes: 78619, md5: "UagI1wSiJ1BQg-jvlrRGbQ", name: "level3.scene" }, {
                            bytes: 90775,
                            md5: "V9ar3X52bdyB6b9ud9nsvw",
                            name: "level4.scene"
                        }, { bytes: 74329, md5: "RfVqq6ebes9rOZz7ovxVVg", name: "level5.scene" }, { bytes: 73369, md5: "bRU0Zfx1gUFtjE5ybH36PQ", name: "level5a.scene" }, { bytes: 75859, md5: "5j3lLlYpe9FQERK9l1RKEw", name: "level6.scene" }, { bytes: 34320, md5: "4s_ZG1cKmq4KttlCADpD7A", name: "testing.scene" }, { bytes: 10733, md5: "oPW3iUeV8XBxWsrEy-dbVg", name: "character/VentBubbles.pex" }, { bytes: 10730, md5: "OJG9AlrIIL6uzfLyL2Ec6Q", name: "character/VentBubblesBurst.pex" }, { bytes: 10731, md5: "hW4LNzyt9pzrO3teRSqCOQ", name: "character/VentBubblesInactive.pex" },
                        { bytes: 48172, md5: "nW5OJbFYMtr52ysp-vpZQQ", name: "character/anchor.png" }, { bytes: 20766, md5: "DoBqbya_zysH9dCmAwwOgQ", name: "character/bubble.png" }, { bytes: 15541, md5: "WlVHu60l7ZW7i6KEftlZQA", name: "character/empty.png" }, { bytes: 84310, md5: "ruHgHyubr0zBWMjybPJTfg", name: "level7.scene" }, { bytes: 77644, md5: "S_ePOoCDDEE3H_KHqAKABQ", name: "level8.scene" }, { bytes: 34283, md5: "HWvG98G_kxO3_OhAf727Zg", name: "character/flying_snail.png" }, { bytes: 27603, md5: "G0KJ5wRN2EL8rgRcyg-Wmw", name: "character/jellyfish.png" }, {
                            bytes: 72296,
                            md5: "vnFkB2oKTo3VNRbMOvgWcQ",
                            name: "level9.scene"
                        }, { bytes: 75981, md5: "9BZ4wKg_VP2WmpxSPfoA0A", name: "character/dirty_bubble.png" }, { bytes: 23825, md5: "WX0byuPYV8yL9PCi_HaH0w", name: "character/guy.png" }, { bytes: 50135, md5: "r2z3O_2hlKUFvOTAQcWN9A", name: "character/sea_urchin.png" }, { bytes: 3976, md5: "-y3dYUvBQQuLSwAZ2HHWtg", name: "character/spatula.png" }, { bytes: 31753, md5: "KSKmzp6-6eajngA0YiX9Tw", name: "character/tentacle.png" }, { bytes: 33499, md5: "I8xd9A-lgUZLw-woqQbsKw", name: "character/vent.png" }, {
                            bytes: 9944,
                            md5: "nVNwYVs8AOW2Zw2C8e1kcA",
                            name: "details/detail_02.png"
                        }, { bytes: 9848, md5: "1tAacDvO23tZg9p0DpnEDw", name: "details/detail_01.png" }, { bytes: 15265, md5: "bcM1VO9cSGW-SvxzDtGuTw", name: "details/detail_03.png" }, { bytes: 15058, md5: "CW9rFEhN4oKzhJMCYlMr0A", name: "details/detail_04.png" }, { bytes: 12100, md5: "aDPilKHd56kk4HPYkJltTg", name: "details/detail_05.png" }, { bytes: 20967, md5: "hAOsGi8Da5ViqdRPDEzYUw", name: "details/detail_06.png" }, { bytes: 6824, md5: "PjEHOmlK1yW9q0wQDcbnmg", name: "details/detail_07.png" }, {
                            bytes: 14011,
                            md5: "NS1_SCG8uQU6cgl2VfqhVQ",
                            name: "details/detail_08.png"
                        }, { bytes: 25399, md5: "5s2IRfLaLW4_bDv2ZN-wAg", name: "details/detail_09.png" }, { bytes: 29980, md5: "lYrEK9eNQ6YcyBabfuWuSw", name: "details/detail_10.png" }, { bytes: 47988, md5: "gtxrU2Ec1URP3J7KrvZR7g", name: "details/detail_11.png" }, { bytes: 36219, md5: "bGlEID4VRjEBZwtMkpC1XQ", name: "details/detail_12.png" }, { bytes: 38845, md5: "gK8zmWDYKJo6jdiPh6lppw", name: "details/rock_01a.png" }, { bytes: 23443, md5: "AgWVJQCLpkS6aGYQCc65gw", name: "details/gradient.png" }, {
                            bytes: 68851,
                            md5: "LTF9CphYBq_gsq9QWbECVw",
                            name: "details/rock_01b.png"
                        }, { bytes: 39739, md5: "V48jUGoWCb7kTaWzJmTRow", name: "details/rock_02a.png" }, { bytes: 52498, md5: "5N2aPgLnICJbWxSUPRpnUQ", name: "details/rock_02b.png" }, { bytes: 21291, md5: "JkV6vc6qN7eyVrnKIHuf-A", name: "details/sand_01.png" }, { bytes: 42583, md5: "taVGSlY10lsHagAnCrSgTA", name: "easterEggs/library.json" }, { bytes: 87119, md5: "G-ewWdWcADTFLKOVNXEl_A", name: "details/rock_01c.png" }, { bytes: 3401, md5: "48wM6tnvSRkDkxVmS4guJg", name: "environment/cloud.png" }, { bytes: 68288, md5: "-lE0LrX9EFQ1cczoAs_RDg", name: "details/rock_02c.png" },
                        { bytes: 1398, md5: "s-QUdF8Tty8ro6uwmdfTSQ", name: "environment/platform-ground.jpg" }, { bytes: 4086, md5: "zEd4_QIyPck_bUhye5eWeg", name: "environment/platform-large.png" }, { bytes: 2859, md5: "LOOMkRURLGYyCz3sSfz9-w", name: "environment/platform-medium.png" }, { bytes: 17073, md5: "Fb2zqQBjqQFbhK-HERG9aw", name: "environment/platform.png" }, { bytes: 2203, md5: "SczkkbI6Zpaq5mV99sj-Xw", name: "environment/platform-small.png" }, { bytes: 104091, md5: "1Jn0D0rp0VzikoeRVlXn6Q", name: "details/sand_02.png" }, {
                            bytes: 119471,
                            md5: "8NIBboh4bfkvtJ7D6EsdYA",
                            name: "details/sand_02_left.png"
                        }, { bytes: 99885, md5: "lv2_nSjMxzgF7f0SsDhJqA", name: "environment/bg.jpg" }, { bytes: 25912, md5: "puYp-dYCKqhjny6CKfIhOw", name: "environment/tile_left.png" }, { bytes: 55557, md5: "ZtN7Q_yUlY08RjjqsJx1xQ", name: "environment/tile_long.png" }, { bytes: 211063, md5: "iefMFh7pKVEkry4nVVVWRA", name: "details/tile_fill.png" }, { bytes: 25025, md5: "PD_rzW4gv73CTUqU4xOY_Q", name: "environment/tile_right.png" }, { bytes: 36278, md5: "w1yD6WIri3UMeV2Ee_uoyg", name: "environment/tile_short.png" }, {
                            bytes: 48727,
                            md5: "ibxNu0tgTqvXKco8tGAHKg",
                            name: "game_transition/atlas0.png"
                        }, { bytes: 15346, md5: "q2t6CJeuJj9IOtjnSbfvmQ", name: "game_transition/library.json" }, { bytes: 52675, md5: "3UKmLo_Zig3lP1UrYOL19g", name: "spongebob/library.json" }, { bytes: 18288, md5: "sEJ6o02d_u9roR-2w5EY2g", name: "ui/chargeBack.png" }, { bytes: 1399, md5: "pRQ9QmDrJhgYB3fz0KWaOw", name: "ui/chargeFill.png" }, { bytes: 7321, md5: "LKWgKxxKmYo60inZJ-aarg", name: "ui/chargeFront.png" }, { bytes: 113830, md5: "FxS8vhzfL8_uBhn3yxV_Bw", name: "spongebob/atlas0.png" }, {
                            bytes: 67080,
                            md5: "MAnlW8GXItPoIzcXSs5qCg",
                            name: "worldObjects/library.json"
                        }, { bytes: 580476, md5: "6jdMCzjVmJ49LYQgq8KWFQ", name: "easterEggs/atlas0.png" }, { bytes: 515709, md5: "C0SZp_oItJ6svHr94vIKoA", name: "worldObjects/atlas0.png" }
                    ]
                },
                width: 1316
            }]
        }
    };
    ba.$VR = 0;
    ba.$WR = 0;
    ba.$XR = !0;
    J.$KS = ["webkit", "moz", "ms"];
    J.$LS = (new Ja("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    U.$zS = !0;
    ub.$VU = new Ab;
    ac.__rtti = '<class path="onebuttonbob.actors.Character" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<_feetFixture><c path="box2d.dynamics.Fixture"/></_feetFixture>\n\t<onStart public="1" set="method" line="25" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<isGrounded set="method" line="64"><f a=""><x path="Bool"/></f></isGrounded>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    cd.__rtti = '<class path="onebuttonbob.actors.ClickArea" params="">\n\t<extends path="kit.creator.ui.Image"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<isPressed public="1" line="22">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</isPressed>\n\t<_sceneProperties><c path="kit.creator.PropertyBag"/></_sceneProperties>\n\t<onStart public="1" set="method" line="25" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="30" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t\t<m n=":Creator"><e>visible=true</e></m>\n\t</meta>\n</class>';
    cd.ENTITY_SLOT = 1;
    Cc.__rtti = '<class path="onebuttonbob.actors.CrumblingPlatform" params="">\n\t<extends path="ez.Actor"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<_scratchAABB line="239" static="1">\n\t\t<c path="box2d.collision.AABB"/>\n\t\t<meta><m n=":native"><e>"$kW"</e></m></meta>\n\t</_scratchAABB>\n\t<_scratchManifold line="240" static="1">\n\t\t<c path="box2d.collision.WorldManifold"/>\n\t\t<meta><m n=":native"><e>"$lW"</e></m></meta>\n\t</_scratchManifold>\n\t<platformBody public="1">\n\t\t<c path="box2d.dynamics.Body"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</platformBody>\n\t<_hero><c path="onebuttonbob.actors.Hero"/></_hero>\n\t<_inContact line="64"><x path="Bool"/></_inContact>\n\t<crumbleRate public="1" line="67">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1.0</e></m></meta>\n\t</crumbleRate>\n\t<referencedInfo public="1"><c path="kit.creator.ObjectInfo"/></referencedInfo>\n\t<referencedObject><c path="kit.creator.CreatorObject"/></referencedObject>\n\t<crumbleValue line="73"><x path="Float"/></crumbleValue>\n\t<_isBreaking line="75"><x path="Bool"/></_isBreaking>\n\t<_isBroken line="77"><x path="Bool"/></_isBroken>\n\t<_assets><c path="kit.Assets"/></_assets>\n\t<onStart public="1" set="method" line="81" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="191" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<setBodyEnabled public="1" set="method" line="233"><f a="isEnabled">\n\t<x path="Bool"/>\n\t<x path="Void"/>\n</f></setBodyEnabled>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Cc.ENTITY_SLOT = 1;
    Cc.$kW = new Wb;
    Cc.$lW = new Kc;
    Dc.__rtti = '<class path="onebuttonbob.actors.Enemy" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<enemyType public="1" line="47">\n\t\t<e path="onebuttonbob.states.EnemyType"/>\n\t\t<meta><m n=":Creator"><e>visible=true</e></m></meta>\n\t</enemyType>\n\t<xSpeed public="1" line="50">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</xSpeed>\n\t<ySpeed public="1" line="53">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</ySpeed>\n\t<waveX public="1" line="56">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</waveX>\n\t<waveY public="1" line="59">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</waveY>\n\t<waveFrequency public="1" line="62">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</waveFrequency>\n\t<collisionScale public="1" line="65">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</collisionScale>\n\t<_timeElapsed line="67"><x path="Float"/></_timeElapsed>\n\t<_hero><c path="onebuttonbob.actors.Hero"/></_hero>\n\t<_startX line="69"><x path="Float"/></_startX>\n\t<_startY line="70"><x path="Float"/></_startY>\n\t<_collisionSize line="71"><x path="Float"/></_collisionSize>\n\t<_defeated line="73"><x path="Bool"/></_defeated>\n\t<_isStatic line="75"><x path="Bool"/></_isStatic>\n\t<_spinOut line="77"><x path="Bool"/></_spinOut>\n\t<_collided line="78"><x path="Bool"/></_collided>\n\t<_colxOffset line="81"><x path="Float"/></_colxOffset>\n\t<_colyOffset line="82"><x path="Float"/></_colyOffset>\n\t<_colWidth line="84"><x path="Float"/></_colWidth>\n\t<_colHeight line="85"><x path="Float"/></_colHeight>\n\t<_assets><c path="kit.Assets"/></_assets>\n\t<onStart public="1" set="method" line="89" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="126" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<defeated public="1" set="method" line="162"><f a=""><x path="Void"/></f></defeated>\n\t<inRange public="1" set="method" line="206"><f a="relObj:?relRadius">\n\t<c path="kit.display.Sprite"/>\n\t<x path="Float"/>\n\t<x path="Bool"/>\n</f></inRange>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t\t<m n=":Creator"><e>visible=true</e></m>\n\t</meta>\n</class>';
    Dc.ENTITY_SLOT = 1;
    Hd.__rtti = '<class path="onebuttonbob.actors.FallingHazard" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<_hero><c path="onebuttonbob.actors.Hero"/></_hero>\n\t<_triggered line="47"><x path="Bool"/></_triggered>\n\t<_collided line="49"><x path="Bool"/></_collided>\n\t<timeToReachGround public="1" line="52">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1.25</e></m></meta>\n\t</timeToReachGround>\n\t<triggerRange public="1" line="55">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=50</e></m></meta>\n\t</triggerRange>\n\t<_startY><x path="Float"/></_startY>\n\t<_mapSprite><c path="kit.creator.SceneSprite"/></_mapSprite>\n\t<_assets><c path="kit.Assets"/></_assets>\n\t<onStart public="1" set="method" line="63" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="74" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<activate set="method" line="94"><f a=""><x path="Void"/></f></activate>\n\t<inRange set="method" line="111"><f a=""><x path="Bool"/></f></inRange>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t\t<m n=":Creator"><e>visible=true</e></m>\n\t</meta>\n</class>';
    Hd.ENTITY_SLOT = 1;
    vb.__rtti = '<class path="onebuttonbob.actors.Hero" params="">\n\t<extends path="onebuttonbob.actors.Character"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<maxVelocity public="1" line="52">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=250</e></m></meta>\n\t</maxVelocity>\n\t<jumpStrength public="1" line="54">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator">\n\t<e>visible=true</e>\n\t<e>initial=18</e>\n</m></meta>\n\t</jumpStrength>\n\t<dashStrength public="1" line="56">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</dashStrength>\n\t<isActive public="1" line="58">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</isActive>\n\t<jumpChargeRate public="1" line="60">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator">\n\t<e>visible=true</e>\n\t<e>initial=.3333</e>\n</m></meta>\n\t</jumpChargeRate>\n\t<maxJumpDistance public="1" line="62">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator">\n\t<e>visible=true</e>\n\t<e>initial=10</e>\n</m></meta>\n\t</maxJumpDistance>\n\t<minJumpDistance public="1" line="64">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator">\n\t<e>visible=true</e>\n\t<e>initial=2</e>\n</m></meta>\n\t</minJumpDistance>\n\t<runningJumpDistance public="1" line="66">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator">\n\t<e>visible=true</e>\n\t<e>initial=0</e>\n</m></meta>\n\t</runningJumpDistance>\n\t<projectileSpeed line="68">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator">\n\t<e>visible=true</e>\n\t<e>initial=15</e>\n</m></meta>\n\t</projectileSpeed>\n\t<projectileFrequency line="70">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator">\n\t<e>visible=true</e>\n\t<e>initial=5</e>\n</m></meta>\n\t</projectileFrequency>\n\t<controlScheme public="1" line="74">\n\t\t<e path="onebuttonbob.states.ControlScheme"/>\n\t\t<meta><m n=":Creator"><e>visible=true</e></m></meta>\n\t</controlScheme>\n\t<_jumpDistance line="77"><x path="Float"/></_jumpDistance>\n\t<_jumpHeight line="79"><x path="Float"/></_jumpHeight>\n\t<_buttonTap line="83"><x path="Bool"/></_buttonTap>\n\t<_tapReady line="84"><x path="Bool"/></_tapReady>\n\t<_buttonRelease line="85"><x path="Bool"/></_buttonRelease>\n\t<_releaseReady line="86"><x path="Bool"/></_releaseReady>\n\t<_walking><c path="kit.util.Value"><x path="Bool"/></c></_walking>\n\t<_grounded><c path="kit.util.Value"><x path="Bool"/></c></_grounded>\n\t<_timeActive line="93"><x path="Float"/></_timeActive>\n\t<_timeElapsed line="94"><x path="Float"/></_timeElapsed>\n\t<_sceneProperties><c path="kit.creator.PropertyBag"/></_sceneProperties>\n\t<_appProperties><c path="kit.creator.PropertyBag"/></_appProperties>\n\t<_jumpUI><c path="kit.Entity"/></_jumpUI>\n\t<_projectile><c path="onebuttonbob.components.Projectile"/></_projectile>\n\t<_assets><c path="kit.Assets"/></_assets>\n\t<_library><c path="kit.movie.Library"/></_library>\n\t<_transitionLibrary><c path="kit.movie.Library"/></_transitionLibrary>\n\t<_animation><c path="kit.movie.MoviePlayer"/></_animation>\n\t<_transition><c path="kit.movie.MoviePlayer"/></_transition>\n\t<_clickArea><c path="onebuttonbob.actors.ClickArea"/></_clickArea>\n\t<_animState line="113"><c path="String"/></_animState>\n\t<_walkingSFX><c path="kit.sound.Playback"/></_walkingSFX>\n\t<_uiClicks><c path="kit.creator.ui.BitmapText"/></_uiClicks>\n\t<_contactMovingPlatform line="119"><x path="Bool"/></_contactMovingPlatform>\n\t<_timeContactMovingPlatform line="121"><x path="Float"/></_timeContactMovingPlatform>\n\t<_quickPressed line="123"><x path="Bool"/></_quickPressed>\n\t<_timeQuickPressed line="125"><x path="Float"/></_timeQuickPressed>\n\t<onStart public="1" set="method" line="127" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="205" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<contactMovingPlatform public="1" set="method" line="429"><f a=""><x path="Void"/></f></contactMovingPlatform>\n\t<playAnimation set="method" line="443"><f a="name:?restart:?speed">\n\t<c path="String"/>\n\t<x path="Bool"/>\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></playAnimation>\n\t<pulseClick public="1" set="method" line="603"><f a=""><x path="Void"/></f></pulseClick>\n\t<isGrounded public="1" set="method" line="647" override="1"><f a=""><x path="Bool"/></f></isGrounded>\n\t<applyVentForce public="1" set="method" line="652"><f a="force:dampen:dt">\n\t<x path="Float"/>\n\t<x path="Float"/>\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></applyVentForce>\n\t<PlayHUDHint public="1" set="method" line="666"><f a=""><x path="Void"/></f></PlayHUDHint>\n\t<collideWithEnemy public="1" set="method" line="673"><f a=""><x path="Void"/></f></collideWithEnemy>\n\t<onPropertiesChanged set="method" line="691"><f a="s:d">\n\t<c path="String"/>\n\t<d/>\n\t<x path="Void"/>\n</f></onPropertiesChanged>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    vb.ENTITY_SLOT = 1;
    Jd.__rtti = '<class path="onebuttonbob.actors.MovingPlatform" params="">\n\t<extends path="ez.Actor"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<speed public="1" line="26">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=200</e></m></meta>\n\t</speed>\n\t<destination public="1" line="28"><c path="kit.creator.ObjectInfo"/></destination>\n\t<referencedInfo public="1"><c path="kit.creator.ObjectInfo"/></referencedInfo>\n\t<referencedObject><c path="kit.creator.CreatorObject"/></referencedObject>\n\t<platformBody public="1"><c path="box2d.dynamics.Body"/></platformBody>\n\t<_hero><c path="onebuttonbob.actors.Hero"/></_hero>\n\t<_dt><x path="Float"/></_dt>\n\t<onStart public="1" set="method" line="40" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="176" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<_posA><c path="kit.math.Point"/></_posA>\n\t<_posB><c path="kit.math.Point"/></_posB>\n\t<_movingToB line="208"><x path="Bool"/></_movingToB>\n\t<_distanceSq><x path="Float"/></_distanceSq>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Jd.ENTITY_SLOT = 1;
    Ec.__rtti = '<class path="onebuttonbob.actors.OneWayPlatform" params="">\n\t<extends path="ez.Actor"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<_scratchAABB line="126" static="1">\n\t\t<c path="box2d.collision.AABB"/>\n\t\t<meta><m n=":native"><e>"$kW"</e></m></meta>\n\t</_scratchAABB>\n\t<_scratchManifold line="127" static="1">\n\t\t<c path="box2d.collision.WorldManifold"/>\n\t\t<meta><m n=":native"><e>"$lW"</e></m></meta>\n\t</_scratchManifold>\n\t<platformBody public="1"><c path="box2d.dynamics.Body"/></platformBody>\n\t<onStart public="1" set="method" line="43" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<setBodyEnabled public="1" set="method" line="119"><f a="isEnabled">\n\t<x path="Bool"/>\n\t<x path="Void"/>\n</f></setBodyEnabled>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Ec.ENTITY_SLOT = 1;
    Ec.$kW = new Wb;
    Ec.$lW = new Kc;
    Kd.__rtti = '<class path="onebuttonbob.actors.PopupHazard" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<_hero><c path="onebuttonbob.actors.Hero"/></_hero>\n\t<_popup line="47"><x path="Bool"/></_popup>\n\t<_collided line="49"><x path="Bool"/></_collided>\n\t<triggerOnProximity public="1" line="52">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</triggerOnProximity>\n\t<showPct public="1" line="55">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=.25</e></m></meta>\n\t</showPct>\n\t<duration public="1" line="58">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</duration>\n\t<timeToTrigger public="1" line="61">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</timeToTrigger>\n\t<_startY><x path="Float"/></_startY>\n\t<_timeElapsed line="65"><x path="Float"/></_timeElapsed>\n\t<initialDelay public="1" line="68">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</initialDelay>\n\t<_triggered line="70"><x path="Bool"/></_triggered>\n\t<_defeated line="72"><x path="Bool"/></_defeated>\n\t<_collidable line="74"><x path="Bool"/></_collidable>\n\t<_assets><c path="kit.Assets"/></_assets>\n\t<onStart public="1" set="method" line="78" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="100" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<popup set="method" line="126"><f a=""><x path="Void"/></f></popup>\n\t<defeated public="1" set="method" line="174"><f a=""><x path="Void"/></f></defeated>\n\t<inRange set="method" line="196"><f a=""><x path="Bool"/></f></inRange>\n\t<inProjectileRange public="1" set="method" line="215"><f a="relObj:?relRadius">\n\t<c path="kit.display.Sprite"/>\n\t<x path="Float"/>\n\t<x path="Bool"/>\n</f></inProjectileRange>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t\t<m n=":Creator"><e>visible=true</e></m>\n\t</meta>\n</class>';
    Kd.ENTITY_SLOT = 1;
    Ld.__rtti = '<class path="onebuttonbob.actors.PreloadProgressPctDisplay" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<_handle><c path="kit.util.Disposable"/></_handle>\n\t<_pctDisplay><c path="kit.Entity"/></_pctDisplay>\n\t<onStart public="1" set="method" line="17" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onLoadingProgress set="method" line="32"><f a="property:progress">\n\t<c path="String"/>\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onLoadingProgress>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t\t<m n=":Creator"><e>visible=true</e></m>\n\t</meta>\n</class>';
    Ld.ENTITY_SLOT = 1;
    Md.__rtti = '<class path="onebuttonbob.actors.TutorialController" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<_mobile line="19"><x path="Bool"/></_mobile>\n\t<onStart public="1" set="method" line="21" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="32" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t\t<m n=":Creator"><e>visible=true</e></m>\n\t</meta>\n</class>';
    Md.ENTITY_SLOT = 1;
    Nd.__rtti = '<class path="onebuttonbob.actors.Vent" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<dampenVelocity public="1" line="35">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</dampenVelocity>\n\t<ventRadius public="1" line="38">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=60</e></m></meta>\n\t</ventRadius>\n\t<isEnabled public="1" line="40"><x path="Bool"/></isEnabled>\n\t<alwaysOn public="1" line="42"><x path="Bool"/></alwaysOn>\n\t<pushDown public="1" line="44"><x path="Bool"/></pushDown>\n\t<_emitter><c path="kit.Entity"/></_emitter>\n\t<_emitterBurst><c path="kit.Entity"/></_emitterBurst>\n\t<_sceneProperties><c path="kit.creator.PropertyBag"/></_sceneProperties>\n\t<_propertySignal><c path="kit.util.Signal0"/></_propertySignal>\n\t<_hero><c path="onebuttonbob.actors.Hero"/></_hero>\n\t<ventForce public="1" line="57">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=2</e></m></meta>\n\t</ventForce>\n\t<timeActive public="1" line="60">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0</e></m></meta>\n\t</timeActive>\n\t<_timeElapsed line="62"><x path="Float"/></_timeElapsed>\n\t<_assets><c path="kit.Assets"/></_assets>\n\t<onStart public="1" set="method" line="66" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="103" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<inRange set="method" line="114"><f a="relObj:?relRadius">\n\t<c path="kit.display.Sprite"/>\n\t<x path="Float"/>\n\t<x path="Bool"/>\n</f></inRange>\n\t<setEnabled set="method" line="135"><f a="enabled">\n\t<x path="Bool"/>\n\t<x path="Void"/>\n</f></setEnabled>\n\t<onPropertiesChanged set="method" line="152"><f a="s:d">\n\t<c path="String"/>\n\t<d/>\n\t<x path="Void"/>\n</f></onPropertiesChanged>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t\t<m n=":Creator"><e>visible=true</e></m>\n\t</meta>\n</class>';
    Nd.ENTITY_SLOT = 1;
    dg.__rtti = '<class path="onebuttonbob.scene.BubbleTransition" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<_library><c path="kit.movie.Library"/></_library>\n\t<_animation><c path="kit.movie.MoviePlayer"/></_animation>\n\t<onRunAsync public="1" set="method" line="60" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="55"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    eg.__rtti = '<class path="onebuttonbob.scene.HideIfNotDebug" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="9" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t\t<m n=":Creator"><e>visible=true</e></m>\n\t</meta>\n</class>';
    Od.__rtti = '<class path="onebuttonbob.scene.MuteButton" params="">\n\t<extends path="kit.creator.ui.Button"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<isToggleOn public="1" line="37">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</isToggleOn>\n\t<onStart public="1" set="method" line="39" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="50" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Od.ENTITY_SLOT = 1;
    fg.__rtti = '<class path="onebuttonbob.scene.MuteButtonPressed" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRunAsync public="1" set="method" line="49" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$fF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="46"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    gg.__rtti = '<class path="onebuttonbob.scene.ResultsScene" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<_uiClick><c path="kit.creator.ui.BitmapText"/></_uiClick>\n\t<_uiHighscore><c path="kit.creator.ui.BitmapText"/></_uiHighscore>\n\t<onRun public="1" set="method" line="62" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="57"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    hg.__rtti = '<class path="onebuttonbob.scene.SetToPopOnShown" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<blendMode public="1" line="15"><e path="kit.display.BlendMode"/></blendMode>\n\t<onRun public="1" set="method" line="17" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<handleShown set="method" line="24"><f a=""><x path="Void"/></f></handleShown>\n\t<new set="method" line="12"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Qd.__rtti = '<class path="s2.client.PreloaderNickEventObject" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<_handle><c path="kit.util.Disposable"/></_handle>\n\t<onStart public="1" set="method" line="13" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onLoadingProgress set="method" line="21"><f a="property:progress">\n\t<c path="String"/>\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onLoadingProgress>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Qd.ENTITY_SLOT = 1;
    kg.__rtti = '<class path="s2.client.SendNickelodeonEvent" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<event public="1" line="14">\n\t\t<e path="s2.client.NickEventName"/>\n\t\t<meta><m n=":Creator"><e>initial=NickEventName.ON_LOADING_START</e></m></meta>\n\t</event>\n\t<triggerOnDestroy public="1" line="18">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=false</e></m></meta>\n\t</triggerOnDestroy>\n\t<onRun public="1" set="method" line="20" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="10"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    mg.__rtti = '<class path="s2.creator.actions.PlayMusicTrack" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<musicPath public="1"><c path="String"/></musicPath>\n\t<volume public="1" line="14">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</volume>\n\t<onRun public="1" set="method" line="16" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    ng.__rtti = '<class path="s2.creator.actions.SetPointerEnabled" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<enabled public="1" line="11">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>intial=false</e></m></meta>\n\t</enabled>\n\t<onRun public="1" set="method" line="13" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    L.loading = !0;
    og.__rtti = '<class path="s2.localization.LocalizeText" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<localizationID public="1"><c path="String"/></localizationID>\n\t<mobileAlternateID public="1"><c path="String"/></mobileAlternateID>\n\t<onRun public="1" set="method" line="24" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="16"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    I._volume = 0;
    I._init = !1;
    Vh.buildDate = "2017-02-23 20:15:49";
    z._mobile = !1;
    z._devicePixelRatio = 1;
    z._inited = !1;
    Uh.$WN()
})("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);