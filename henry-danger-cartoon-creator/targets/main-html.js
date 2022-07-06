 /** Cooked with Flambe, https://getflambe.com */
'use strict';
(function() {
    function A(a, b) {
        function c() {} c.prototype = a; var e = new c,
            m; for (m in b) e[m] = b[m];
        b.toString !== Object.prototype.toString && (e.toString = b.toString); return e }

    function Ge(a) { return a instanceof Array ? function() { return M.iter(a) } : "function" == typeof a.iterator ? o(a, a.iterator) : a.iterator }

    function o(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = Bg++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var j = {},
        g = function() { return C.__string_rec(this, "") },
        v = function(a, b) { b = b.split("u").join("");
            this.r = RegExp(a, b) };
    j.EReg = v;
    v.__name__ = ["EReg"];
    v.prototype = {
        match: function(a) { this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a; return null != this.r.m },
        matched: function(a) { if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a]; throw "EReg::matched"; },
        matchedPos: function() {
            if (null == this.r.m) throw "No string matched";
            return { pos: this.r.m.index, len: this.r.m[0].length }
        },
        split: function(a) { return a.replace(this.r, "#__delim__#").split("#__delim__#") },
        replace: function(a, b) { return a.replace(this.r, b) },
        __class__: v
    };
    var M = function() {};
    j.HxOverrides = M;
    M.__name__ = ["HxOverrides"];
    M.dateStr = function(a) { var b = a.getMonth() + 1,
            c = a.getDate(),
            e = a.getHours(),
            m = a.getMinutes(),
            d = a.getSeconds(); return a.getFullYear() + "-" + (10 > b ? "0" + b : "" + b) + "-" + (10 > c ? "0" + c : "" + c) + " " + (10 > e ? "0" + e : "" + e) + ":" + (10 > m ? "0" + m : "" + m) + ":" + (10 > d ? "0" + d : "" + d) };
    M.strDate =
        function(a) { switch (a.length) {
                case 8:
                    var a = a.split(":"),
                        b = new Date;
                    b.setTime(0);
                    b.setUTCHours(a[0]);
                    b.setUTCMinutes(a[1]);
                    b.setUTCSeconds(a[2]); return b;
                case 10:
                    return a = a.split("-"), new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
                case 19:
                    return b = a.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2]);
                default:
                    throw "Invalid date format : " + a; } };
    M.cca = function(a, b) { var c = a.charCodeAt(b); return c != c ? void 0 : c };
    M.substr = function(a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c) return "";
        null ==
            c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b, c)
    };
    M.remove = function(a, b) { var c = a.indexOf(b); if (-1 == c) return !1;
        a.splice(c, 1); return !0 };
    M.iter = function(a) { return { cur: 0, arr: a, hasNext: function() { return this.cur < this.arr.length }, next: function() { return this.arr[this.cur++] } } };
    var Jb = function() {};
    j.Lambda = Jb;
    Jb.__name__ = ["Lambda"];
    Jb.array = function(a) { for (var b = [], a = Ge(a)(); a.hasNext();) { var c = a.next();
            b.push(c) } return b };
    Jb.exists = function(a, b) {
        for (var c = Ge(a)(); c.hasNext();) {
            var e =
                c.next();
            if (b(e)) return !0
        }
        return !1
    };
    Jb.filter = function(a, b) { for (var c = new Nb, e = Ge(a)(); e.hasNext();) { var m = e.next();
            b(m) && c.add(m) } return c };
    Jb.count = function(a, b) { var c = 0; if (null == b)
            for (var e = Ge(a)(); e.hasNext();) e.next(), c++;
        else
            for (e = Ge(a)(); e.hasNext();) { var m = e.next();
                b(m) && c++ }
        return c };
    var Nb = function() { this.length = 0 };
    j.List = Nb;
    Nb.__name__ = ["List"];
    Nb.prototype = {
        add: function(a) { a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++ },
        push: function(a) {
            this.h = a = [a, this.h];
            null == this.q &&
                (this.q = a);
            this.length++
        },
        iterator: function() { return { h: this.h, hasNext: function() { return null != this.h }, next: function() { if (null == this.h) return null; var a = this.h[0];
                    this.h = this.h[1]; return a } } },
        __class__: Nb
    };
    var sc = function() {};
    j.IMap = sc;
    sc.__name__ = ["IMap"];
    sc.prototype = { __class__: sc };
    Math.__name__ = ["Math"];
    var t = function() {};
    j.Reflect = t;
    t.__name__ = ["Reflect"];
    t.hasField = function(a, b) { return Object.prototype.hasOwnProperty.call(a, b) };
    t.field = function(a, b) { try { return a[b] } catch (c) { return null } };
    t.setField =
        function(a, b, c) { a[b] = c };
    t.getProperty = function(a, b) { var c; return null == a ? null : a.__properties__ && (c = a.__properties__["get_" + b]) ? a[c]() : a[b] };
    t.setProperty = function(a, b, c) { var e; if (a.__properties__ && (e = a.__properties__["set_" + b])) a[e](c);
        else a[b] = c };
    t.callMethod = function(a, b, c) { return b.apply(a, c) };
    t.fields = function(a) { var b = []; if (null != a) { var c = Object.prototype.hasOwnProperty,
                e; for (e in a) "__id__" != e && "hx__closures__" != e && c.call(a, e) && b.push(e) } return b };
    t.isFunction = function(a) {
        return "function" ==
            typeof a && !(a.__name__ || a.__ename__)
    };
    t.compare = function(a, b) { return a == b ? 0 : a > b ? 1 : -1 };
    t.compareMethods = function(a, b) { return a == b ? !0 : !t.isFunction(a) || !t.isFunction(b) ? !1 : a.scope == b.scope && a.method == b.method && null != a.method };
    t.isEnumValue = function(a) { return null != a && null != a.__enum__ };
    t.deleteField = function(a, b) { if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b]; return !0 };
    var B = function() {};
    j.Std = B;
    B.__name__ = ["Std"];
    B.is = function(a, b) { return C.__instanceof(a, b) };
    B.string = function(a) {
        return C.__string_rec(a,
            "")
    };
    B["int"] = function(a) { return a | 0 };
    B.parseInt = function(a) { var b = parseInt(a, 10); if (0 == b && (120 == M.cca(a, 1) || 88 == M.cca(a, 1))) b = parseInt(a); return isNaN(b) ? null : b };
    B.parseFloat = function(a) { return parseFloat(a) };
    var tc = function() { this.b = "" };
    j.StringBuf = tc;
    tc.__name__ = ["StringBuf"];
    tc.prototype = { add: function(a) { this.b += B.string(a) }, addSub: function(a, b, c) { this.b = null == c ? this.b + M.substr(a, b, null) : this.b + M.substr(a, b, c) }, __class__: tc };
    var $ = function() {};
    j.StringTools = $;
    $.__name__ = ["StringTools"];
    $.startsWith =
        function(a, b) { return a.length >= b.length && M.substr(a, 0, b.length) == b };
    $.isSpace = function(a, b) { var c = M.cca(a, b); return 8 < c && 14 > c || 32 == c };
    $.ltrim = function(a) { for (var b = a.length, c = 0; c < b && $.isSpace(a, c);) c++; return 0 < c ? M.substr(a, c, b - c) : a };
    $.rtrim = function(a) { for (var b = a.length, c = 0; c < b && $.isSpace(a, b - c - 1);) c++; return 0 < c ? M.substr(a, 0, b - c) : a };
    $.trim = function(a) { return $.ltrim($.rtrim(a)) };
    $.lpad = function(a, b, c) { if (0 >= b.length) return a; for (; a.length < c;) a = b + a; return a };
    $.replace = function(a, b, c) { return a.split(b).join(c) };
    $.fastCodeAt = function(a, b) { return a.charCodeAt(b) };
    var S = j.ValueType = { __ename__: ["ValueType"], __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",") };
    S.TNull = ["TNull", 0];
    S.TNull.toString = g;
    S.TNull.__enum__ = S;
    S.TInt = ["TInt", 1];
    S.TInt.toString = g;
    S.TInt.__enum__ = S;
    S.TFloat = ["TFloat", 2];
    S.TFloat.toString = g;
    S.TFloat.__enum__ = S;
    S.TBool = ["TBool", 3];
    S.TBool.toString = g;
    S.TBool.__enum__ = S;
    S.TObject = ["TObject", 4];
    S.TObject.toString = g;
    S.TObject.__enum__ = S;
    S.TFunction = ["TFunction",
        5
    ];
    S.TFunction.toString = g;
    S.TFunction.__enum__ = S;
    S.TClass = function(a) { a = ["TClass", 6, a];
        a.__enum__ = S;
        a.toString = g; return a };
    S.TEnum = function(a) { a = ["TEnum", 7, a];
        a.__enum__ = S;
        a.toString = g; return a };
    S.TUnknown = ["TUnknown", 8];
    S.TUnknown.toString = g;
    S.TUnknown.__enum__ = S;
    S.__empty_constructs__ = [S.TNull, S.TInt, S.TFloat, S.TBool, S.TObject, S.TFunction, S.TUnknown];
    var Y = function() {};
    j.Type = Y;
    Y.__name__ = ["Type"];
    Y.getClass = function(a) { return null == a ? null : a instanceof Array && null == a.__enum__ ? Array : a.__class__ };
    Y.getClassName = function(a) { return a.__name__.join(".") };
    Y.getEnumName = function(a) { return a.__ename__.join(".") };
    Y.resolveClass = function(a) { a = j[a]; return null == a || !a.__name__ ? null : a };
    Y.resolveEnum = function(a) { a = j[a]; return null == a || !a.__ename__ ? null : a };
    Y.createInstance = function(a, b) {
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
                return new a(b[0], b[1], b[2], b[3]);
            case 5:
                return new a(b[0], b[1], b[2], b[3], b[4]);
            case 6:
                return new a(b[0],
                    b[1], b[2], b[3], b[4], b[5]);
            case 7:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6]);
            case 8:
                return new a(b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]);
            default:
                throw "Too many arguments";
        }
    };
    Y.createEmptyInstance = function(a) {
        function b() {} b.prototype = a.prototype; return new b };
    Y.createEnum = function(a, b, c) {
        var e = t.field(a, b);
        if (null == e) throw "No such constructor " + b;
        if (t.isFunction(e)) { if (null == c) throw "Constructor " + b + " need parameters"; return e.apply(a, c) }
        if (null != c && 0 != c.length) throw "Constructor " + b + " does not need parameters";
        return e
    };
    Y.createEnumIndex = function(a, b, c) { var e = a.__constructs__[b]; if (null == e) throw b + " is not a valid enum constructor index"; return Y.createEnum(a, e, c) };
    Y.getEnumConstructs = function(a) { return a.__constructs__.slice() };
    Y["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return S.TBool;
            case "string":
                return S.TClass(String);
            case "number":
                return Math.ceil(a) == a % 2147483648 ? S.TInt : S.TFloat;
            case "object":
                if (null == a) return S.TNull;
                var b = a.__enum__;
                if (null != b) return S.TEnum(b);
                a = a instanceof Array &&
                    null == a.__enum__ ? Array : a.__class__;
                return null != a ? S.TClass(a) : S.TObject;
            case "function":
                return a.__name__ || a.__ename__ ? S.TObject : S.TFunction;
            case "undefined":
                return S.TNull;
            default:
                return S.TUnknown
        }
    };
    Y.allEnums = function(a) { return a.__empty_constructs__ };
    (j.XmlType = { __ename__: ["XmlType"], __constructs__: [] }).__empty_constructs__ = [];
    var O = function() {};
    j.Xml = O;
    O.__name__ = ["Xml"];
    O.parse = function(a) { return Ob.parse(a) };
    O.createElement = function(a) {
        var b = new O;
        b.nodeType = O.Element;
        b._children = [];
        b._attributes =
            new G;
        b.set_nodeName(a);
        return b
    };
    O.createPCData = function(a) { var b = new O;
        b.nodeType = O.PCData;
        b.set_nodeValue(a); return b };
    O.createCData = function(a) { var b = new O;
        b.nodeType = O.CData;
        b.set_nodeValue(a); return b };
    O.createComment = function(a) { var b = new O;
        b.nodeType = O.Comment;
        b.set_nodeValue(a); return b };
    O.createDocType = function(a) { var b = new O;
        b.nodeType = O.DocType;
        b.set_nodeValue(a); return b };
    O.createProcessingInstruction = function(a) { var b = new O;
        b.nodeType = O.ProcessingInstruction;
        b.set_nodeValue(a); return b };
    O.createDocument = function() { var a = new O;
        a.nodeType = O.Document;
        a._children = []; return a };
    O.prototype = {
        get_nodeName: function() { if (this.nodeType != O.Element) throw "bad nodeType"; return this._nodeName },
        set_nodeName: function(a) { if (this.nodeType != O.Element) throw "bad nodeType"; return this._nodeName = a },
        get_nodeValue: function() { if (this.nodeType == O.Element || this.nodeType == O.Document) throw "bad nodeType"; return this._nodeValue },
        set_nodeValue: function(a) {
            if (this.nodeType == O.Element || this.nodeType == O.Document) throw "bad nodeType";
            return this._nodeValue = a
        },
        get: function(a) { if (this.nodeType != O.Element) throw "bad nodeType"; return this._attributes.get(a) },
        set: function(a, b) { if (this.nodeType != O.Element) throw "bad nodeType";
            this._attributes.set(a, b) },
        exists: function(a) { if (this.nodeType != O.Element) throw "bad nodeType"; return this._attributes.exists(a) },
        iterator: function() { if (null == this._children) throw "bad nodetype"; return { cur: 0, x: this._children, hasNext: function() { return this.cur < this.x.length }, next: function() { return this.x[this.cur++] } } },
        elementsNamed: function(a) { if (null == this._children) throw "bad nodetype"; return { cur: 0, x: this._children, hasNext: function() { for (var b = this.cur, c = this.x.length; b < c;) { var e = this.x[b]; if (e.nodeType == O.Element && e._nodeName == a) break;
                        b++ } this.cur = b; return b < c }, next: function() { for (var b = this.cur, c = this.x.length; b < c;) { var e = this.x[b];
                        b++; if (e.nodeType == O.Element && e._nodeName == a) return this.cur = b, e } return null } } },
        firstElement: function() {
            if (null == this._children) throw "bad nodetype";
            for (var a = 0, b = this._children.length; a <
                b;) { var c = this._children[a]; if (c.nodeType == O.Element) return c;
                a++ }
            return null
        },
        addChild: function(a) { if (null == this._children) throw "bad nodetype";
            null != a._parent && M.remove(a._parent._children, a);
            a._parent = this;
            this._children.push(a) },
        __class__: O,
        __properties__: { set_nodeValue: "set_nodeValue", get_nodeValue: "get_nodeValue", set_nodeName: "set_nodeName", get_nodeName: "get_nodeName" }
    };
    var za = function() {
        var a = this;
        this._root = I.root;
        this._timeline = new ea;
        this._root.addChild(this._timeline);
        I.uncaughtError.connect(o(this,
            this.errorHandler));
        i.get_instance().get_input().prime();
        this._scaleSprite = new J;
        this._timeline.add(this._scaleSprite);
        this._layerWorld = new ea;
        this._layerUI = new ea;
        this._timeline.addChild(this._layerWorld);
        this._timeline.addChild(this._layerUI);
        this._fillRight = new La(0, 8, 8);
        this._fillLeft = new La(0, 8, 8);
        this._fillLeft.anchorX.set__(8);
        this._layerFill = this._timeline.addChild(new ea);
        this._layerFill.addChild((new ea).add(this._fillRight));
        this._layerFill.addChild((new ea).add(this._fillLeft));
        this._dt =
            this._lastStageY = this._lastStageX = 0;
        this._timerRefreshScale = 0.001;
        this._isUIActive = this._isWorldActive = !1;
        this._flagFirstPlay = !0;
        this._flagInitialLoadComplete = this._flagWebAudioUnlocked = !1;
        this._flagGameplayPaused = !0;
        this._debugEnabled = this._flagJSEmbedExists = this._flagJSEmbedPauseState = !1;
        ub.set_onPlaybackToggle(function(b) { b ? a._unpauseGameplay() : a._pauseGameplay() });
        this._calculateScaleFactor();
        this._flagJSEmbedExists = null != jsembed && jsembed.exists();
        !1 == this._flagJSEmbedExists && this._scaleSprite.scaleX.set__(this._scaleSprite.scaleY.set__(r.scaleFactor));
        this._calcScale();
        this._changeActions = [];
        this._flowstack = [];
        this._addEventListeners();
        this._beginEngine()
    };
    j["com.nick.spongebob.comic_creator.Main"] = za;
    za.__name__ = ["com", "nick", "spongebob", "comic_creator", "Main"];
    za.main = function() {
        I.init();
        I.root.add(new nd);
        ub.set_onAudioToggle(function(a) { I.volume.set__(a ? 1 : 0) });
        Kb.setupBaseURL();
        var a = new ea;
        za._fillSprite = new La(0, 8, 8);
        za._fillSprite.setScaleXY(I._platform.getStage().get_width() / 8, I._platform.getStage().get_height() / 8);
        a.add(za._fillSprite);
        I.root.addChild(a);
        null != jsembed && jsembed.exists() ? jsembed.isBaseCrossdomain() ? i.get_instance().get_assets().setCrossdomainBaseUrl(za.appendAssetsToUrl(jsembed.baseUrl())) : i.get_instance().get_assets().set_baseUrl(za.trimUrl(jsembed.baseUrl())) : i.get_instance().get_assets().set_baseUrl("");
        Pb.sendGameEvent("onLoadingStart");
        i.get_instance().get_assets().load(za._onBootstrapLoad, null, ["bootstrap"])
    };
    za._onBootstrapLoad = function() {
        Pb.sendGameEvent("getLoadingProgress", 0.3333333333333333);
        za._initServices();
        za._main = new za
    };
    za._initServices = function() {
        for (var a = 0, b = i.get_instance().get_assets().allConfig(); a < b.length;) {
            var c = b[a];
            ++a;
            if (!1 != c.hasNode.resolve("services"))
                for (c = c.node.resolve("services").nodes.resolve("service").iterator(); c.hasNext();) {
                    var e = c.next();
                    switch (e.att.resolve("type").toString()) {
                        case "canadaTracking":
                            "true" == e.att.resolve("enabled").toString() && vb.enableCanadaTracking(e.att.resolve("showGameTitle").toString());
                            break;
                        case "deltaDNA":
                            "true" == e.att.resolve("enabled").toString() &&
                                H.init("79774111025205085797043726214714")
                    }
                }
        }
    };
    za.trimUrl = function(a) { if ("" == a) return ""; if (0 > a.indexOf("http")) return "/" == a.charAt(0) && (a = M.substr(a, 1, a.length - 1)), a; var b = a.indexOf("http://");
        0 > b ? (b = a.indexOf("https://"), b = 0 > b ? 0 : b + 8) : b += 7;
        b = a.indexOf("/", b);
        a = M.substr(a, b, a.length - b); return a = za.appendAssetsToUrl(a) };
    za.appendAssetsToUrl = function(a) { if (0 == a.length) return "/assets/"; "/" != a.charAt(a.length - 1) && (a += "/");
        a.indexOf("/assets") < a.length - 9 && (a += "assets/"); return a };
    za.prototype = {
        _calculateScaleFactor: function() {
            if (!1 !=
                B.is(I._platform.getStage(), $b)) {
                var a = window.devicePixelRatio;
                null == a && (a = 1);
                var b = window.document.createElement("canvas").getContext("2d"),
                    c = Z.loadExtension("backingStorePixelRatio", b).value;
                null == c && (c = 1);
                b = window.navigator.userAgent.toLowerCase();
                a /= c; - 1 != b.indexOf("ipad") && (a = 1);
                b = I._platform.getStage();
                a != b.scaleFactor && (b.scaleFactor = a, Z.setVendorStyle(t.field(b, "_canvas"), "transform-origin", "top left"), Z.setVendorStyle(t.field(b, "_canvas"), "transform", "scale(" + 1 / b.scaleFactor + ")"), b.requestResize(b.get_width(),
                    b.get_height()));
                r.scaleFactor = b.scaleFactor
            }
        },
        errorHandler: function() { null },
        _parseConfigXML: function() {
            for (var a = !1, b = 0, c = "000000", e = !1, m = !1, d = "en", g = !1, f = 0, h = i.get_instance().get_assets().allConfig(!0); f < h.length;) {
                var j = h[f];
                ++f;
                if (j.hasNode.resolve("chunks"))
                    for (var k = j.node.resolve("chunks").nodes.resolve("chunk").iterator(); k.hasNext();) { var l = k.next();
                        i.get_instance().get_assets().addChunk(l.att.resolve("id").toString(), l) } j.hasNode.resolve("quality") && (I._platform.getTouch().get_supported() &&
                        (a = "false" == j.node.resolve("quality").att.resolve("forceLowQualityMobile") ? !1 : !0), b = B.parseInt(j.node.resolve("quality").att.resolve("index")));
                j.hasNode.resolve("unlockCode") && (c = j.node.resolve("unlockCode").get_innerData());
                j.hasNode.resolve("unlockEnabled") && (e = "true" == j.node.resolve("unlockEnabled").get_innerData());
                j.hasNode.resolve("achievements") && "true" == j.node.resolve("achievements").att.resolve("enabled").toString() && (m = !0);
                j.hasNode.resolve("localization") && (d = B.string(j.node.resolve("localization").node.resolve("region").get_innerData()));
                j.hasNode.resolve("submitToNickEnabled") && (g = "true" == j.node.resolve("submitToNickEnabled").get_innerData())
            }
            i.get_instance().get_assets().finishProcessingChunks();
            i.get_instance().setBool(n.BOOL_LOW_QUALITY_MOBILE, a);
            i.get_instance().setInt(n.INT_QUALITY, b);
            i.get_instance().setString(n.STRING_UNLOCK_CODE, c);
            i.get_instance().setBool(n.BOOL_ALLOW_UNLOCK, e);
            i.get_instance().setBool(n.BOOL_ALLOW_SUBMIT, g);
            m && i.get_instance().get_achievements().init();
            i.get_instance().setString(n.STRING_REGION_ID, d);
            null
        },
        _eventInitialLoadComplete: function() { this._enableSplash();
            this._flagInitialLoadComplete = !0 },
        _beginEngine: function() { r.setFlowDelegate(o(this, this._addFlowEvent));
            this._timeline.add(new od(o(this, this._onEventUpdate)));
            za.ui = this._ui = new He(this._layerUI);
            i.get_instance().get_input().setDelegateUnlockWebAudio(o(this, this._handleWebAudioUnlock));
            this._setDefaults();
            this._parseConfigXML();
            ra.get_instance().load();
            this._generateUI();
            this._registerInput();
            this._openSplash() },
        _openSplash: function() {
            this._timerAnalytics =
                0;
            var a = window.document.getElementById("loadingOverlay");
            null != a ? a.parentNode.removeChild(a) : null;
            this._includeScripts();
            this._ui.changeScreenTo(s.SPLASH, !1)
        },
        _includeScripts: function() {
            var a = i.get_instance().get_assets().baseUrl,
                a = $.replace(a, "assets/", "");
            Cb.addScript("Clipboard", a + "assets/scripts/clip_nick.js");
            Cb.addScript("Blob", a + "assets/scripts/Blob.js");
            Cb.addScript("CanvasToBlob", a + "assets/scripts/canvas-toBlob.js");
            Cb.addScript("FileSaver", a + "assets/scripts/FileSaver.js");
            Cb.addScript("Screenshot",
                a + "assets/scripts/wm_screenshot.js");
            Cb.addScript("SubmitForm", a + "assets/scripts/nickshareoverlay.js");
            Cb.addScript("Share", a + "assets/scripts/wm_share.js");
            Cb.addScript("Cocoon", a + "assets/scripts/cocoon.js");
            Cb.addScript("ManualOverlay", a + "assets/scripts/shareoverlay.js")
        },
        _setDefaults: function() {
            i.get_instance().setBool(n.BOOL_PAUSED, !1);
            i.get_instance().setBool(n.BOOL_GAME_WIN, !1);
            i.get_instance().setBool(n.BOOL_GAME_LOSE, !1);
            i.get_instance().setBool(n.BOOL_LEVEL_WIN, !1);
            i.get_instance().setBool(n.BOOL_LEVEL_LOSE,
                !1);
            i.get_instance().setBool(n.BOOL_CODE_SCREEN_OPEN, !1);
            i.get_instance().setBool(n.BOOL_CODE_UNLOCK, !1);
            i.get_instance().setBool(n.BOOL_TOUCH_DEVICE, I._platform.getTouch().get_supported());
            i.get_instance().setBool(n.BOOL_DO_TUTORIAL, !0);
            i.get_instance().setBool(n.BOOL_LOAD_AVATAR, !1);
            i.get_instance().setBool(n.BOOL_APP, "ANDROID_APP" == Db.detectPlatform() || "IOS_APP" == Db.detectPlatform());
            i.get_instance().setBool(n.BOOL_ANDROID_APP, "ANDROID_APP" == Db.detectPlatform());
            i.get_instance().setBool(n.BOOL_IOS_APP,
                "IOS_APP" == Db.detectPlatform());
            i.get_instance().setInt(n.INT_HEALTH, 3);
            i.get_instance().setInt(n.INT_LIVES, 3);
            i.get_instance().setInt(n.INT_SCORE, 0);
            i.get_instance().setInt(n.INT_CURRENCY, 200);
            i.get_instance().setInt(n.FLOAT_LOADING_PROGRESS, 0);
            i.get_instance().setInt(n.INT_LOADING_SCORE, 0);
            i.get_instance().setInt(n.INT_ACHIEVEMENT_SCORE, 0);
            i.get_instance().setInt(n.INT_QUALITY, 0);
            i.get_instance().setInt(n.INT_PANEL_INDEX, 0);
            i.get_instance().setInt(n.INT_PANEL_NUM, 0);
            i.get_instance().setInt(n.INT_PANEL_ELEM_COUNT,
                0);
            i.get_instance().setInt(n.INT_MAX_PANEL_ELEMS, 11);
            i.get_instance().setInt(n.INT_CURRENT_AVATAR, 0);
            i.get_instance().setInt(n.INT_PANEL_NUM, 0);
            i.get_instance().setString(n.STRING_LEVEL_ID, "level1");
            i.get_instance().get_sound().set_muteAll(!1)
        },
        _registerInput: function() {
            i.get_instance().get_input().registerInput(F.MOVE_LEFT, [f.Left, f.A]);
            i.get_instance().get_input().registerInput(F.MOVE_RIGHT, [f.Right, f.D]);
            i.get_instance().get_input().registerInput(F.MOVE_UP, [f.Up, f.W]);
            i.get_instance().get_input().registerInput(F.MOVE_DOWN,
                [f.Down, f.S]);
            i.get_instance().get_input().registerInput(F.ATTACK, [f.Z], [wb.ATTACK]);
            i.get_instance().get_input().registerInput(F.JUMP, [f.Space], [wb.JUMP]);
            i.get_instance().get_input().registerInput(F.UI_OK, [f.Space]);
            i.get_instance().get_input().registerInput(F.D0, [f.Shift]);
            i.get_instance().get_input().registerInput(F.D1, [f.Control]);
            i.get_instance().get_input().registerInput(F.D2, [f.F]);
            i.get_instance().get_input().registerInput(F.D3, [f.Y]);
            i.get_instance().get_input().registerInput(F.D4, [f.V]);
            i.get_instance().get_input().registerInput(F.D5, [f.Y])
        },
        _generateUI: function() {
            this._isUIActive = !0;
            this._ui.addScreen(s.SPLASH, pd);
            this._ui.addScreen(s.MAIN_MENU, qd);
            this._ui.addScreen(s.AVATAR_TRAY, Wa);
            this._ui.addScreen(s.AVATAR_BUILDER, rd);
            this._ui.addScreen(s.COMIC_PANEL_SELECT, sd);
            this._ui.addScreen(s.COMIC_HUD, uc);
            this._ui.addScreen(s.COMIC_MENU, td);
            this._ui.addScreen(s.HELP, ud);
            this._ui.addScreen(s.QUIT_CONFIRM, vd);
            this._ui.addScreen(s.ACHIEVEMENT_POPUP, wd);
            this._ui.addScreen(s.ACHIEVEMENTS,
                xd);
            this._ui.addScreen(s.DIALOGUE_POPUP, Sc);
            this._ui.addScreen(s.DEBUG, yd);
            this._ui.addScreen(s.POPUP_SUBMIT, zd);
            this._ui.addScreen(s.POPUP_SHARE, Ad);
            this._ui.addScreen(s.DELETE_AVATAR, Bd);
            this._ui.addScreen(s.PRINT_CLOSE, Cd);
            this._ui.addScreen(s.SUBMIT_CONFIRM, Dd);
            this._ui.addScreen(s.NICK_TERMS, Ed);
            this._ui.addScreen(s.NICK_AGREEMENT, Fd);
            this._ui.set_interfaceDelegate(o(this, this._onInterfaceChange));
            null
        },
        _gotoComicCreator: function() {
            var a;
            a = i.get_instance().getInt(n.INT_QUALITY);
            if (0 == a) a = "comic_creator_sd";
            else if (1 == a) a = "comic_creator_hd";
            else throw "[Main](_gotoComicCreator) Error: Not expecting quality flag " + a + ". Nothing loaded.";
            var b;
            b = r.allAudioSupported() ? "comic_creator_audio_optional" : "comic_creator_audio_required";
            var c;
            c = i.get_instance().getInt(n.INT_QUALITY);
            if (0 == c) c = "avatar_builder_sd";
            else if (1 == c) c = "avatar_builder_hd";
            else throw "[Main](_gotoAvatarBuilder) Error: Not expecting quality flag " + c + ". Nothing loaded.";
            var e;
            e = r.allAudioSupported() ? "avatar_builder_audio_optional" : "avatar_builder_audio_required";
            i.get_instance().get_assets().load(o(this, this._eventLoadCompleteComic), [a, b, c, e, "avatar_spine"], null, null, 1.2)
        },
        _eventLoadCompleteComic: function() { this._isWorldActive ? null : (this._ui.changeScreenTo(s.COMIC_HUD, !0), this._unpauseGameplay()) },
        _onWorldGenerationComplete: function() { i.get_instance().get_timer().start(o(this, this._onWorldGenerationCompleteDelay), 0.3);
            this._ui.changeScreenTo(s.COMIC_HUD, !0) },
        _onWorldGenerationCompleteDelay: function() {
            this._world.start();
            this._unpauseGameplay();
            this._timerAnalytics =
                0
        },
        _gotoEndComic: function() { this._newOnChangeAction(s.MAIN_MENU, oa.OPEN_COMPLETE, o(this, this._endComicCloseComplete));
            this._ui.changeScreenTo(s.MAIN_MENU, !1);
            this._playSelectionMusic() },
        _endComicCloseComplete: function() { var a = this;
            i.get_instance().get_timer().start(function() { a._disposeWorld(); var b = i.get_instance().getInt(n.INT_QUALITY); if (0 != b && 1 != b) throw "[Main](_gotoComicCreator) Error: Not expecting quality flag " + b + ". Nothing loaded.";
                r.allAudioSupported() }, 0.1) },
        _gotoAvatarBuilder: function(a,
            b) {
            null == b && (b = !1);
            null == a && (a = !1);
            var c = this,
                e;
            e = i.get_instance().getInt(n.INT_QUALITY);
            if (0 == e) e = "comic_creator_sd";
            else if (1 == e) e = "comic_creator_hd";
            else throw "[Main](_gotoComicCreator) Error: Not expecting quality flag " + e + ". Nothing loaded.";
            var m;
            m = r.allAudioSupported() ? "comic_creator_audio_optional" : "comic_creator_audio_required";
            var d;
            d = i.get_instance().getInt(n.INT_QUALITY);
            if (0 == d) d = "avatar_builder_sd";
            else if (1 == d) d = "avatar_builder_hd";
            else throw "[Main](_gotoAvatarBuilder) Error: Not expecting quality flag " +
                d + ". Nothing loaded.";
            var g;
            g = r.allAudioSupported() ? "avatar_builder_audio_optional" : "avatar_builder_audio_required";
            var f = "avatar_spine";
            i.get_instance().get_assets().load(function() { c._eventLoadCompleteAvatar(a, b) }, [e, m, d, g, f], null, null, 1.2);
            f = g = d = null
        },
        _eventLoadCompleteAvatar: function(a, b) { a ? b ? (this._ui.openScreen(s.AVATAR_TRAY), this._ui.openScreen(s.AVATAR_BUILDER)) : this._ui.changeScreenTo(s.AVATAR_BUILDER, !1) : this._ui.changeScreenTo(s.AVATAR_TRAY, !1) },
        _gotoEndAvatar: function() {
            this._newOnChangeAction(s.MAIN_MENU,
                oa.OPEN_COMPLETE, o(this, this._avatarCloseComplete));
            this._ui.changeScreenTo(s.MAIN_MENU, !0);
            this._playSelectionMusic()
        },
        _avatarCloseComplete: function() { i.get_instance().get_timer().start(function() { var a = i.get_instance().getInt(n.INT_QUALITY); if (0 != a && 1 != a) throw "[Main](_gotoAvatarBuilder) Error: Not expecting quality flag " + a + ". Nothing loaded.";
                r.allAudioSupported() }, 0.1) },
        _enableSplash: function() {
            i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) || this._playSelectionMusic();
            this._ui.getScreen(s.SPLASH).open(!1);
            this._enableInput()
        },
        _onGameNew: function() { this._resetFlagsResults() },
        _resetFlagsResults: function() { i.get_instance().resetValue(n.BOOL_GAME_WIN);
            i.get_instance().resetValue(n.BOOL_GAME_LOSE);
            i.get_instance().resetValue(n.BOOL_LEVEL_WIN);
            i.get_instance().resetValue(n.BOOL_LEVEL_LOSE) },
        _resetGameResults: function() { i.get_instance().resetValue(n.INT_SCORE);
            i.get_instance().resetValue(n.STRING_LEVEL_ID) },
        _onEventUpdate: function(a) {
            a = Math.round(1E3 * a) / 1E3;
            0.06666666666666667 < a && (a = 0.06666666666666667);
            this._timerAnalytics += a;
            this._timerRefreshScale -= a;
            0 >= this._timerRefreshScale && (this._timerRefreshScale = 0.4, this._calcScale());
            this._flagJSEmbedExists && jsembed.isPaused() != this._flagJSEmbedPauseState && ((this._flagJSEmbedPauseState = jsembed.isPaused()) ? this._pauseGameplay(!1) : this._flagGameplayPaused || this._unpauseGameplay());
            i.get_instance().update(a);
            this._isUIActive && (this._checkDebug(), this._ui.update(a));
            this._isWorldActive && this._world.update(a);
            this._runFlowStack()
        },
        _calcScale: function() {
            if (!(I._platform.getStage().get_width() ==
                    this._lastStageX && I._platform.getStage().get_height() == this._lastStageY)) {
                this._lastStageX = I._platform.getStage().get_width();
                this._lastStageY = I._platform.getStage().get_height();
                this._scaleSprite.x.set__(0.5 * this._lastStageX);
                this._scaleSprite.y.set__(0.5 * this._lastStageY);
                var a = this._lastStageY / 560,
                    b = this._lastStageX / a;
                this._scaleSprite.rotation.set__(0);
                r.STAGE_WIDTH = Math.min(Math.ceil(b), 1024);
                r.STAGE_CENTER_X = Math.floor(0.5 * r.STAGE_WIDTH);
                this._scaleSprite.scaleX.set__(this._scaleSprite.scaleY.set__(a));
                b = Math.ceil(0.5 * (b - r.STAGE_WIDTH));
                0 < b ? (this._fillLeft.set_visible(this._fillRight.set_visible(!0)), this._fillLeft.x.set__(-r.STAGE_CENTER_X), this._fillRight.x.set__(r.STAGE_CENTER_X), this._fillLeft.y.set__(this._fillRight.y.set__(-280)), this._fillLeft.scaleY.set__(this._fillRight.scaleY.set__(70)), this._fillLeft.scaleX.set__(this._fillRight.scaleX.set__(b / 8))) : this._fillLeft.set_visible(this._fillRight.set_visible(!1));
                za._fillSprite.scaleX.set__(this._lastStageX / 8);
                za._fillSprite.scaleY.set__(this._lastStageY /
                    8);
                i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.RESIZE_CANVAS, function() { var b = new G;
                    b.set("scale", a); return b }(this)))
            }
        },
        _checkDebug: function() {
            this._ui.isScreenOpen(s.DEBUG) || (!1 == this._debugEnabled && i.get_instance().get_input().getInputDown(F.D1) && i.get_instance().get_input().getInputDown(F.D2) && i.get_instance().get_input().getInputDown(F.D3) && (this._debugEnabled = !0), !0 == this._debugEnabled && i.get_instance().get_input().getInputDown(F.D0) && i.get_instance().get_input().getInputDown(F.D4) &&
                i.get_instance().get_input().getInputDown(F.D5) && this._ui.openScreen(s.DEBUG))
        },
        _addFlowEvent: function(a) { this._flowstack.push(a) },
        _runFlowStack: function() { if (!(1 > this._flowstack.length))
                for (; 0 < this._flowstack.length;) this._executeFlowStack(this._flowstack[0]), this._flowstack.shift() },
        _executeFlowStack: function(a) {
            i.get_instance().get_sound().playSound(h.sound.sbcc_sfx_screenchange);
            switch (a[1]) {
                case 0:
                    vb.sendCanadaTrackingCall("play");
                    this._gotoComicCreator();
                    this._timerAnalytics = 0;
                    break;
                case 5:
                    vb.sendCanadaTrackingCall("play");
                    this._timerAnalytics = 0;
                    this._urlContainsQuery() ? (i.get_instance().setBool(n.BOOL_LOAD_AVATAR, !0), this._gotoAvatarBuilder(!0, !0)) : this._ui.changeScreenTo(s.MAIN_MENU, !1);
                    this._playSelectionMusic();
                    break;
                case 6:
                    i.get_instance().setBool(n.BOOL_FLOW_AVATAR_FROM_COMIC, !1);
                    this._gotoAvatarBuilder();
                    this._playSelectionMusic();
                    break;
                case 7:
                    this._gotoEndAvatar();
                    this._playSelectionMusic();
                    break;
                case 8:
                    this._ui.closeScreen(s.AVATAR_TRAY, !1);
                    this._ui.update(1);
                    this._ui.openScreen(s.AVATAR_TRAY);
                    break;
                case 9:
                    this._ui.openScreen(s.AVATAR_BUILDER);
                    this._playGameMusic();
                    break;
                case 10:
                    this._ui.closeScreen(s.AVATAR_BUILDER, !1);
                    i.get_instance().getBool(n.BOOL_FLOW_AVATAR_FROM_COMIC) ? this._playGameMusic() : this._playSelectionMusic();
                    break;
                case 11:
                    this._ui.changeScreenTo(s.COMIC_PANEL_SELECT, !1);
                    this._playSelectionMusic();
                    break;
                case 12:
                    this._ui.changeScreenTo(s.MAIN_MENU, !1);
                    break;
                case 13:
                    this._gotoComicCreator();
                    this._playGameMusic();
                    break;
                case 14:
                    this._gotoEndComic();
                    this._playSelectionMusic();
                    break;
                case 21:
                    this._ui.openScreen(s.HELP);
                    break;
                case 48:
                    i.get_instance().setBool(n.BOOL_FLOW_AVATAR_FROM_COMIC,
                        !0);
                    this._gotoAvatarBuilder(!0);
                    break;
                case 49:
                    i.get_instance().setBool(n.BOOL_AVATAR_TO_COMIC, !0);
                    this._ui.changeScreenTo(s.COMIC_PANEL_SELECT, !1);
                    this._playSelectionMusic();
                    break;
                case 54:
                    this._ui.openScreen(s.DELETE_AVATAR);
                    break;
                case 55:
                    this._ui.closeScreen(s.DELETE_AVATAR);
                    break;
                case 17:
                    this._ui.openScreen(s.SHOP);
                    break;
                case 57:
                    this._ui.closeScreen(s.PRINT_CLOSE);
                    break;
                case 56:
                    this._ui.openScreen(s.PRINT_CLOSE);
                    break;
                case 18:
                    this._ui.closeScreen(s.SHOP);
                    break;
                case 16:
                    this._ui.closeScreen(s.HELP);
                    break;
                case 19:
                    this._pauseGameplay();
                    this._ui.openScreen(s.COMIC_MENU);
                    break;
                case 59:
                    this._ui.closeScreen(s.SUBMIT_CONFIRM);
                    break;
                case 58:
                    this._ui.openScreen(s.SUBMIT_CONFIRM);
                    break;
                case 20:
                    this._unpauseGameplay();
                    this._ui.closeScreen(s.COMIC_MENU);
                    break;
                case 22:
                    this._ui.openScreen(s.QUIT_CONFIRM);
                    break;
                case 23:
                    this._resetFlagsResults();
                    this._gotoEndComic();
                    this._resetGameResults();
                    break;
                case 38:
                    this._ui.openScreen(s.ENTER_CODE);
                    break;
                case 37:
                    this._ui.closeScreen(s.ENTER_CODE);
                    break;
                case 24:
                    this._ui.closeScreen(s.QUIT_CONFIRM);
                    break;
                case 29:
                    this._disposeWorld();
                    vb.sendCanadaTrackingCall("replay");
                    this._onGameNew();
                    this._gotoComicCreator();
                    i.get_instance().setBool(n.BOOL_PAUSED, !1);
                    break;
                case 39:
                    this._playGameMusic();
                    this._gotoComicCreator();
                    break;
                case 41:
                    this._ui.openScreen(s.ACHIEVEMENT_POPUP);
                    break;
                case 42:
                    this._ui.closeScreen(s.ACHIEVEMENT_POPUP);
                    break;
                case 43:
                    this._ui.openScreen(s.ACHIEVEMENTS);
                    break;
                case 44:
                    this._ui.closeScreen(s.ACHIEVEMENTS);
                    break;
                case 45:
                    this._ui.openScreen(s.DIALOGUE_POPUP);
                    break;
                case 46:
                    this._ui.closeScreen(s.DIALOGUE_POPUP);
                    break;
                case 47:
                    this._ui.closeScreen(s.DEBUG, !0);
                    break;
                case 52:
                    this._ui.openScreen(s.POPUP_SHARE);
                    break;
                case 53:
                    this._ui.closeScreen(s.POPUP_SHARE);
                    break;
                case 50:
                    this._ui.openScreen(s.POPUP_SUBMIT);
                    break;
                case 51:
                    this._ui.closeScreen(s.POPUP_SUBMIT);
                    break;
                case 60:
                    this._ui.openScreen(s.NICK_TERMS);
                    break;
                case 61:
                    this._ui.closeScreen(s.NICK_TERMS);
                    break;
                case 62:
                    this._ui.openScreen(s.NICK_AGREEMENT);
                    break;
                case 63:
                    this._ui.closeScreen(s.NICK_AGREEMENT)
            }
        },
        _pauseGameplay: function(a) {
            null == a && (a = !0);
            a && (this._flagGameplayPaused = !0);
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.PAUSE))
        },
        _unpauseGameplay: function(a) { null == a && (a = !0);
            a && (this._flagGameplayPaused = !1);
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.UNPAUSE)) },
        _newOnChangeAction: function(a, b, c) { this._changeActions.push(new Ie(a, b, c)) },
        _executeInterfaceChange: function(a, b) {
            for (var c = this._changeActions.length, e; 0 < c--;) this._changeActions[c].get_screenId() == b && this._changeActions[c].get_changeEvent() == a && (e = this._changeActions[c], this._changeActions.splice(c,
                1), e.get_action()())
        },
        _addEventListeners: function() { i.get_instance().get_dispatcher().addEventListener(k.MUTE_TOGGLE, o(this, this._onMuteToggle));
            i.get_instance().get_dispatcher().addEventListener(k.WORLD_GENERATION_COMPLETE, o(this, this._onWorldGenerationComplete));
            i.get_instance().get_dispatcher().addEventListener(k.INITIAL_LOAD_COMPLETE, o(this, this._eventInitialLoadComplete)) },
        _enableInput: function() { i.get_instance().get_input().setEnabled(!0) },
        _onMuteToggle: function() { i.get_instance().get_sound().set_muteAll(!i.get_instance().get_sound().get_muteAll()) },
        _handleWebAudioUnlock: function() { this._flagWebAudioUnlocked || (this._flagWebAudioUnlocked = !0, i.get_instance().get_sound().playSound(h.sound.silent)) },
        _onInterfaceChange: function(a, b) { this._executeInterfaceChange(a, b) },
        _urlContainsQuery: function() { return 1 < window.location.href.split("?").length && "lhavtr" == window.location.href.split("?")[1].split("&")[1] },
        _disposeWorld: function() { this._isWorldActive && (this._isWorldActive = !1, this._world.dispose(), this._world = null) },
        _playGameMusic: function() {
            i.get_instance().get_sound().playMusic(h.sound.hdcc_gameplaymusicv3,
                0.3)
        },
        _playSelectionMusic: function() { i.get_instance().get_sound().playMusic(h.sound.hdcc_splashscreenmusicv3, 0.3) },
        __class__: za
    };
    var ra = function() { this.avatars = new cb; for (var a = r.MAX_AVATARS + 1; 1 <= --a;) { var b = new ac;
            this.avatars.set(a, b) } };
    j["com.nick.spongebob.comic_creator.data.SaveData"] = ra;
    ra.__name__ = "com,nick,spongebob,comic_creator,data,SaveData".split(",");
    ra.__properties__ = { get_instance: "get_instance" };
    ra.get_instance = function() { null == ra.__instance && (ra.__instance = new ra); return ra.__instance };
    ra.prototype = {
        load: function() { var a = i.get_instance().sharedObjectGetData(r.SHARED_OBJECT_DATA_ID);
            this.avatars = a.avatars;
            null != a.BOOL_DO_TUTORIAL && i.get_instance().setBool(n.BOOL_DO_TUTORIAL, a.BOOL_DO_TUTORIAL); "0.1" != a.version && this.deleteSave() },
        save: function() { var a = { version: "0.1" };
            a.avatars = this.avatars;
            a.BOOL_DO_TUTORIAL = i.get_instance().getBool(n.BOOL_DO_TUTORIAL);
            i.get_instance().sharedObjectSetData(r.SHARED_OBJECT_DATA_ID, a) },
        deleteSave: function() {
            this.avatars = new cb;
            for (var a = r.MAX_AVATARS +
                    1; 1 <= --a;) { var b = new ac;
                this.avatars.set(a, b) } a = { version: "0.1", avatars: this.avatars };
            i.get_instance().sharedObjectSetData(r.SHARED_OBJECT_DATA_ID, a)
        },
        deleteAvatar: function(a) { var b = new ac;
            this.avatars.set(a, b);
            this.save() },
        __class__: ra
    };
    var la = j["com.nick.spongebob.comic_creator.data.achievement.ACHIEVEMENT"] = { __ename__: "com,nick,spongebob,comic_creator,data,achievement,ACHIEVEMENT".split(","), __constructs__: "FIRSTPLAY,LEVEL2,SCORE100,LEVEL5,SCORE1000,CODEUNLOCKED".split(",") };
    la.FIRSTPLAY = ["FIRSTPLAY",
        0
    ];
    la.FIRSTPLAY.toString = g;
    la.FIRSTPLAY.__enum__ = la;
    la.LEVEL2 = ["LEVEL2", 1];
    la.LEVEL2.toString = g;
    la.LEVEL2.__enum__ = la;
    la.SCORE100 = ["SCORE100", 2];
    la.SCORE100.toString = g;
    la.SCORE100.__enum__ = la;
    la.LEVEL5 = ["LEVEL5", 3];
    la.LEVEL5.toString = g;
    la.LEVEL5.__enum__ = la;
    la.SCORE1000 = ["SCORE1000", 4];
    la.SCORE1000.toString = g;
    la.SCORE1000.__enum__ = la;
    la.CODEUNLOCKED = ["CODEUNLOCKED", 5];
    la.CODEUNLOCKED.toString = g;
    la.CODEUNLOCKED.__enum__ = la;
    la.__empty_constructs__ = [la.FIRSTPLAY, la.LEVEL2, la.SCORE100, la.LEVEL5, la.SCORE1000,
        la.CODEUNLOCKED
    ];
    var Qb = function(a, b, c, e) { this._id = a;
        this._valueId = b;
        this._value = c;
        this._points = e;
        this._achieved = !1 };
    j["com.nick.spongebob.comic_creator.data.achievement.AchievementData"] = Qb;
    Qb.__name__ = "com,nick,spongebob,comic_creator,data,achievement,AchievementData".split(",");
    Qb.prototype = {
        get_id: function() { return this._id },
        get_valueId: function() { return this._valueId },
        get_value: function() { return this._value },
        get_points: function() { return this._points },
        get_achieved: function() { return this._achieved },
        set_achieved: function(a) { return this._achieved = a },
        __class__: Qb,
        __properties__: { set_achieved: "set_achieved", get_achieved: "get_achieved", get_points: "get_points", get_value: "get_value", get_valueId: "get_valueId", get_id: "get_id" }
    };
    var kg = function() {};
    j["com.nick.spongebob.comic_creator.data.achievement.ConstantsAchievement"] = kg;
    kg.__name__ = "com,nick,spongebob,comic_creator,data,achievement,ConstantsAchievement".split(",");
    kg.buildAchievementData = function(a) {
        switch (a[1]) {
            case 0:
                return new Qb("firstplay",
                    n.BOOL_GAME_LOSE, 1, 1);
            case 1:
                return new Qb("level2", n.INT_LEVEL, 2, 1);
            case 3:
                return new Qb("level5", n.INT_LEVEL, 5, 3);
            case 2:
                return new Qb("score100", n.INT_SCORE, 100, 1);
            case 4:
                return new Qb("score1000", n.INT_SCORE, 1E3, 5);
            case 5:
                return new Qb("codeunlocked", n.BOOL_CODE_UNLOCK, 1, 10)
        }
    };
    var ac = function() {
        this._created = !1;
        this._name = "";
        this._customizations = new db;
        this._customizations.set(p.SKIN, null);
        null;
        this._customizations.set(p.EYE, null);
        null;
        this._customizations.set(p.NOSE, null);
        null;
        this._customizations.set(p.MOUTH,
            null);
        null;
        this._customizations.set(p.HAIR, null);
        null;
        this._customizations.set(p.FACE, null);
        null;
        this._customizations.set(p.TOP, null);
        null;
        this._customizations.set(p.BOTTOM, null);
        null;
        this._customizations.set(p.BOOTS, null);
        null;
        this._customizations.set(p.MASK, null);
        null;
        this._customizations.set(p.POWER_LEFT, null);
        null;
        this._customizations.set(p.POWER_RIGHT, null);
        null
    };
    j["com.nick.spongebob.comic_creator.data.avatar.AvatarData"] = ac;
    ac.__name__ = "com,nick,spongebob,comic_creator,data,avatar,AvatarData".split(",");
    ac.prototype = {
        refresh: function(a, b, c) { this._created = !0;
            this._name = a;
            this.library = c; for (a = b.keys(); a.hasNext();) { var c = a.next(),
                    e = b.get(c);
                this._customizations.set(c, e);
                e } },
        get_created: function() { return this._created },
        set_created: function(a) { return this._created = a },
        get_name: function() { return this._name },
        set_name: function(a) { return this._name = a },
        get_customizations: function() { return this._customizations },
        getQueryString: function() {
            var a = "?&lhavtr";
            null != this._customizations.get(p.SKIN) && (a += "&s=" + this._customizations.get(p.SKIN)[1]);
            null != this._customizations.get(p.EYE) && (a += "&e=" + this._customizations.get(p.EYE)[1]);
            null != this._customizations.get(p.MOUTH) && (a += "&m=" + this._customizations.get(p.MOUTH)[1]);
            null != this._customizations.get(p.NOSE) && (a += "&n=" + this._customizations.get(p.NOSE)[1]);
            null != this._customizations.get(p.HAIR) && (a += "&h=" + this._customizations.get(p.HAIR)[1]);
            null != this._customizations.get(p.FACE) && (a += "&f=" + this._customizations.get(p.FACE)[1]);
            null != this._customizations.get(p.TOP) && (a += "&t=" + this._customizations.get(p.TOP)[1]);
            null != this._customizations.get(p.BOTTOM) && (a += "&b=" + this._customizations.get(p.BOTTOM)[1]);
            null != this._customizations.get(p.BOOTS) && (a += "&bo=" + this._customizations.get(p.BOOTS)[1]);
            null != this._customizations.get(p.MASK) && (a += "&ma=" + this._customizations.get(p.MASK)[1]);
            null != this._customizations.get(p.POWER_LEFT) && (a += "&pl=" + this._customizations.get(p.POWER_LEFT)[1]);
            null != this._customizations.get(p.POWER_RIGHT) && (a += "&pr=" + this._customizations.get(p.POWER_RIGHT)[1]);
            a += "&bt=" + this.library;
            return a +=
                "&na=" + $.replace(this._name, " ", "_")
        },
        loadQueryString: function() {
            if (!(1 >= window.location.href.split("?").length))
                for (var a = window.location.href.split("?")[1].split("&"), b = null, c = 0, e = 0; e < a.length;)
                    if (b = a[e], ++e, b = b.split("="), !(1 >= b.length)) switch (c = B.parseInt(b[1]), b[0]) {
                        case "s":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.SKIN, b);
                            b;
                            break;
                        case "e":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.EYE, b);
                            b;
                            break;
                        case "m":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.MOUTH,
                                b);
                            b;
                            break;
                        case "n":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.NOSE, b);
                            b;
                            break;
                        case "h":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.HAIR, b);
                            b;
                            break;
                        case "f":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.FACE, b);
                            b;
                            break;
                        case "t":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.TOP, b);
                            b;
                            break;
                        case "b":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.BOTTOM, b);
                            b;
                            break;
                        case "bo":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.BOOTS, b);
                            b;
                            break;
                        case "ma":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.MASK, b);
                            b;
                            break;
                        case "pl":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.POWER_LEFT, b);
                            b;
                            break;
                        case "pr":
                            b = Y.createEnumIndex(d, c, null);
                            this._customizations.set(p.POWER_RIGHT, b);
                            b;
                            break;
                        case "na":
                            this._name = $.replace(b[1], "_", " ");
                            break;
                        case "bt":
                            this.library = b[1]
                    }
        },
        __class__: ac,
        __properties__: { get_customizations: "get_customizations", set_name: "set_name", get_name: "get_name", set_created: "set_created", get_created: "get_created" }
    };
    var u = function(a, b) { this.bone = a;
        this.name = b };
    j["com.nick.spongebob.comic_creator.data.avatar.BoneAssignment"] = u;
    u.__name__ = "com,nick,spongebob,comic_creator,data,avatar,BoneAssignment".split(",");
    u.prototype = { __class__: u };
    var p = j["com.nick.spongebob.comic_creator.data.avatar.ITEM_SLOT"] = { __ename__: "com,nick,spongebob,comic_creator,data,avatar,ITEM_SLOT".split(","), __constructs__: "EYE,NOSE,MOUTH,HAIR,FACE,TOP,BOTTOM,BOOTS,MASK,POWER_LEFT,POWER_RIGHT,SKIN,EYELASH".split(",") };
    p.EYE = ["EYE", 0];
    p.EYE.toString =
        g;
    p.EYE.__enum__ = p;
    p.NOSE = ["NOSE", 1];
    p.NOSE.toString = g;
    p.NOSE.__enum__ = p;
    p.MOUTH = ["MOUTH", 2];
    p.MOUTH.toString = g;
    p.MOUTH.__enum__ = p;
    p.HAIR = ["HAIR", 3];
    p.HAIR.toString = g;
    p.HAIR.__enum__ = p;
    p.FACE = ["FACE", 4];
    p.FACE.toString = g;
    p.FACE.__enum__ = p;
    p.TOP = ["TOP", 5];
    p.TOP.toString = g;
    p.TOP.__enum__ = p;
    p.BOTTOM = ["BOTTOM", 6];
    p.BOTTOM.toString = g;
    p.BOTTOM.__enum__ = p;
    p.BOOTS = ["BOOTS", 7];
    p.BOOTS.toString = g;
    p.BOOTS.__enum__ = p;
    p.MASK = ["MASK", 8];
    p.MASK.toString = g;
    p.MASK.__enum__ = p;
    p.POWER_LEFT = ["POWER_LEFT", 9];
    p.POWER_LEFT.toString =
        g;
    p.POWER_LEFT.__enum__ = p;
    p.POWER_RIGHT = ["POWER_RIGHT", 10];
    p.POWER_RIGHT.toString = g;
    p.POWER_RIGHT.__enum__ = p;
    p.SKIN = ["SKIN", 11];
    p.SKIN.toString = g;
    p.SKIN.__enum__ = p;
    p.EYELASH = ["EYELASH", 12];
    p.EYELASH.toString = g;
    p.EYELASH.__enum__ = p;
    p.__empty_constructs__ = [p.EYE, p.NOSE, p.MOUTH, p.HAIR, p.FACE, p.TOP, p.BOTTOM, p.BOOTS, p.MASK, p.POWER_LEFT, p.POWER_RIGHT, p.SKIN, p.EYELASH];
    var Eb = function() {};
    j["com.nick.spongebob.comic_creator.data.avatar.ConstantsAvatar"] = Eb;
    Eb.__name__ = "com,nick,spongebob,comic_creator,data,avatar,ConstantsAvatar".split(",");
    Eb.getRandomItemForSlot = function(a) { a = xa.get_instance().getItemsForSlot(a); return a[i.get_instance().get_random().getRandomInt(0, a.length - 1)] };
    Eb.getEmptyItemForSlot = function(a) { switch (a[1]) {
            case 8:
                return d.MASK_NONE;
            case 9:
                return d.POWER_LEFT_NONE;
            case 10:
                return d.POWER_RIGHT_NONE;
            default:
                return null } };
    var d = j["com.nick.spongebob.comic_creator.data.avatar.ITEM"] = { __ename__: "com,nick,spongebob,comic_creator,data,avatar,ITEM".split(","), __constructs__: "EYE_1_1,EYE_1_2,EYE_1_3,EYE_1_4,EYE_2_1,EYE_2_2,EYE_2_3,EYE_2_4,EYE_3_1,EYE_3_2,EYE_3_3,EYE_3_4,EYE_4_1,EYE_4_2,EYE_4_3,EYE_4_4,EYE_5_1,EYE_5_2,EYE_5_3,EYE_5_4,EYE_6_1,EYE_6_2,EYE_6_3,EYE_6_4,EYE_7_1,EYE_7_2,EYE_7_3,EYE_7_4,EYE_8_1,EYE_8_2,EYE_8_3,EYE_8_4,MOUTH_1,MOUTH_2,MOUTH_3,MOUTH_4,MOUTH_5,MOUTH_6,MOUTH_7,MOUTH_8,MOUTH_1_LIPS,MOUTH_2_LIPS,MOUTH_3_LIPS,MOUTH_4_LIPS,MOUTH_5_LIPS,MOUTH_6_LIPS,MOUTH_7_LIPS,MOUTH_8_LIPS,NOSE_1,NOSE_2,NOSE_3,NOSE_4,NOSE_5,NOSE_6,NOSE_7,NOSE_8,HAIR_1_DARK,HAIR_1_LIGHT,HAIR_2_DARK,HAIR_2_LIGHT,HAIR_3_DARK,HAIR_3_LIGHT,HAIR_4_DARK,HAIR_4_LIGHT,HAIR_5_DARK,HAIR_5_LIGHT,HAIR_6_DARK,HAIR_6_LIGHT,HAIR_7_DARK,HAIR_7_LIGHT,FACE_ROUND,FACE_SQUARE,FACE_TRIANGLE,FACE_HEART,FACE_WIDE,TOP_1,TOP_2,TOP_3,TOP_4,TOP_5,TOP_6,TOP_7,TOP_8,TOP_9,TOP_10,BOTTOM_1,BOTTOM_2,BOTTOM_3,BOTTOM_4,BOTTOM_5,BOTTOM_6,BOTTOM_7,BOTTOM_8,BOTTOM_9,BOTTOM_10,BOOTS_1,BOOTS_2,BOOTS_3,BOOTS_4,BOOTS_5,BOOTS_6,BOOTS_7,BOOTS_8,BOOTS_9,BOOTS_10,POWER_LEFT_NONE,POWER_RIGHT_NONE,POWER_LEFT_1,POWER_RIGHT_1,POWER_LEFT_2,POWER_RIGHT_2,POWER_LEFT_3,POWER_RIGHT_3,POWER_LEFT_4,POWER_RIGHT_4,POWER_LEFT_5,POWER_RIGHT_5,POWER_LEFT_6,POWER_RIGHT_6,POWER_LEFT_7,POWER_RIGHT_7,POWER_LEFT_8,POWER_RIGHT_8,MASK_NONE,MASK_1_1,MASK_1_2,MASK_1_3,MASK_1_4,MASK_2_1,MASK_2_2,MASK_2_3,MASK_2_4,MASK_3_1,MASK_3_2,MASK_3_3,MASK_3_4,MASK_4_1,MASK_4_2,MASK_4_3,MASK_4_4,SKIN_1,SKIN_2,SKIN_3,SKIN_4,SKIN_5,SKIN_6".split(",") };
    d.EYE_1_1 = ["EYE_1_1", 0];
    d.EYE_1_1.toString = g;
    d.EYE_1_1.__enum__ = d;
    d.EYE_1_2 = ["EYE_1_2", 1];
    d.EYE_1_2.toString = g;
    d.EYE_1_2.__enum__ = d;
    d.EYE_1_3 = ["EYE_1_3", 2];
    d.EYE_1_3.toString = g;
    d.EYE_1_3.__enum__ = d;
    d.EYE_1_4 = ["EYE_1_4", 3];
    d.EYE_1_4.toString = g;
    d.EYE_1_4.__enum__ = d;
    d.EYE_2_1 = ["EYE_2_1", 4];
    d.EYE_2_1.toString = g;
    d.EYE_2_1.__enum__ = d;
    d.EYE_2_2 = ["EYE_2_2", 5];
    d.EYE_2_2.toString = g;
    d.EYE_2_2.__enum__ = d;
    d.EYE_2_3 = ["EYE_2_3", 6];
    d.EYE_2_3.toString = g;
    d.EYE_2_3.__enum__ = d;
    d.EYE_2_4 = ["EYE_2_4", 7];
    d.EYE_2_4.toString =
        g;
    d.EYE_2_4.__enum__ = d;
    d.EYE_3_1 = ["EYE_3_1", 8];
    d.EYE_3_1.toString = g;
    d.EYE_3_1.__enum__ = d;
    d.EYE_3_2 = ["EYE_3_2", 9];
    d.EYE_3_2.toString = g;
    d.EYE_3_2.__enum__ = d;
    d.EYE_3_3 = ["EYE_3_3", 10];
    d.EYE_3_3.toString = g;
    d.EYE_3_3.__enum__ = d;
    d.EYE_3_4 = ["EYE_3_4", 11];
    d.EYE_3_4.toString = g;
    d.EYE_3_4.__enum__ = d;
    d.EYE_4_1 = ["EYE_4_1", 12];
    d.EYE_4_1.toString = g;
    d.EYE_4_1.__enum__ = d;
    d.EYE_4_2 = ["EYE_4_2", 13];
    d.EYE_4_2.toString = g;
    d.EYE_4_2.__enum__ = d;
    d.EYE_4_3 = ["EYE_4_3", 14];
    d.EYE_4_3.toString = g;
    d.EYE_4_3.__enum__ = d;
    d.EYE_4_4 = ["EYE_4_4",
        15
    ];
    d.EYE_4_4.toString = g;
    d.EYE_4_4.__enum__ = d;
    d.EYE_5_1 = ["EYE_5_1", 16];
    d.EYE_5_1.toString = g;
    d.EYE_5_1.__enum__ = d;
    d.EYE_5_2 = ["EYE_5_2", 17];
    d.EYE_5_2.toString = g;
    d.EYE_5_2.__enum__ = d;
    d.EYE_5_3 = ["EYE_5_3", 18];
    d.EYE_5_3.toString = g;
    d.EYE_5_3.__enum__ = d;
    d.EYE_5_4 = ["EYE_5_4", 19];
    d.EYE_5_4.toString = g;
    d.EYE_5_4.__enum__ = d;
    d.EYE_6_1 = ["EYE_6_1", 20];
    d.EYE_6_1.toString = g;
    d.EYE_6_1.__enum__ = d;
    d.EYE_6_2 = ["EYE_6_2", 21];
    d.EYE_6_2.toString = g;
    d.EYE_6_2.__enum__ = d;
    d.EYE_6_3 = ["EYE_6_3", 22];
    d.EYE_6_3.toString = g;
    d.EYE_6_3.__enum__ =
        d;
    d.EYE_6_4 = ["EYE_6_4", 23];
    d.EYE_6_4.toString = g;
    d.EYE_6_4.__enum__ = d;
    d.EYE_7_1 = ["EYE_7_1", 24];
    d.EYE_7_1.toString = g;
    d.EYE_7_1.__enum__ = d;
    d.EYE_7_2 = ["EYE_7_2", 25];
    d.EYE_7_2.toString = g;
    d.EYE_7_2.__enum__ = d;
    d.EYE_7_3 = ["EYE_7_3", 26];
    d.EYE_7_3.toString = g;
    d.EYE_7_3.__enum__ = d;
    d.EYE_7_4 = ["EYE_7_4", 27];
    d.EYE_7_4.toString = g;
    d.EYE_7_4.__enum__ = d;
    d.EYE_8_1 = ["EYE_8_1", 28];
    d.EYE_8_1.toString = g;
    d.EYE_8_1.__enum__ = d;
    d.EYE_8_2 = ["EYE_8_2", 29];
    d.EYE_8_2.toString = g;
    d.EYE_8_2.__enum__ = d;
    d.EYE_8_3 = ["EYE_8_3", 30];
    d.EYE_8_3.toString =
        g;
    d.EYE_8_3.__enum__ = d;
    d.EYE_8_4 = ["EYE_8_4", 31];
    d.EYE_8_4.toString = g;
    d.EYE_8_4.__enum__ = d;
    d.MOUTH_1 = ["MOUTH_1", 32];
    d.MOUTH_1.toString = g;
    d.MOUTH_1.__enum__ = d;
    d.MOUTH_2 = ["MOUTH_2", 33];
    d.MOUTH_2.toString = g;
    d.MOUTH_2.__enum__ = d;
    d.MOUTH_3 = ["MOUTH_3", 34];
    d.MOUTH_3.toString = g;
    d.MOUTH_3.__enum__ = d;
    d.MOUTH_4 = ["MOUTH_4", 35];
    d.MOUTH_4.toString = g;
    d.MOUTH_4.__enum__ = d;
    d.MOUTH_5 = ["MOUTH_5", 36];
    d.MOUTH_5.toString = g;
    d.MOUTH_5.__enum__ = d;
    d.MOUTH_6 = ["MOUTH_6", 37];
    d.MOUTH_6.toString = g;
    d.MOUTH_6.__enum__ = d;
    d.MOUTH_7 = ["MOUTH_7", 38];
    d.MOUTH_7.toString = g;
    d.MOUTH_7.__enum__ = d;
    d.MOUTH_8 = ["MOUTH_8", 39];
    d.MOUTH_8.toString = g;
    d.MOUTH_8.__enum__ = d;
    d.MOUTH_1_LIPS = ["MOUTH_1_LIPS", 40];
    d.MOUTH_1_LIPS.toString = g;
    d.MOUTH_1_LIPS.__enum__ = d;
    d.MOUTH_2_LIPS = ["MOUTH_2_LIPS", 41];
    d.MOUTH_2_LIPS.toString = g;
    d.MOUTH_2_LIPS.__enum__ = d;
    d.MOUTH_3_LIPS = ["MOUTH_3_LIPS", 42];
    d.MOUTH_3_LIPS.toString = g;
    d.MOUTH_3_LIPS.__enum__ = d;
    d.MOUTH_4_LIPS = ["MOUTH_4_LIPS", 43];
    d.MOUTH_4_LIPS.toString = g;
    d.MOUTH_4_LIPS.__enum__ = d;
    d.MOUTH_5_LIPS = ["MOUTH_5_LIPS",
        44
    ];
    d.MOUTH_5_LIPS.toString = g;
    d.MOUTH_5_LIPS.__enum__ = d;
    d.MOUTH_6_LIPS = ["MOUTH_6_LIPS", 45];
    d.MOUTH_6_LIPS.toString = g;
    d.MOUTH_6_LIPS.__enum__ = d;
    d.MOUTH_7_LIPS = ["MOUTH_7_LIPS", 46];
    d.MOUTH_7_LIPS.toString = g;
    d.MOUTH_7_LIPS.__enum__ = d;
    d.MOUTH_8_LIPS = ["MOUTH_8_LIPS", 47];
    d.MOUTH_8_LIPS.toString = g;
    d.MOUTH_8_LIPS.__enum__ = d;
    d.NOSE_1 = ["NOSE_1", 48];
    d.NOSE_1.toString = g;
    d.NOSE_1.__enum__ = d;
    d.NOSE_2 = ["NOSE_2", 49];
    d.NOSE_2.toString = g;
    d.NOSE_2.__enum__ = d;
    d.NOSE_3 = ["NOSE_3", 50];
    d.NOSE_3.toString = g;
    d.NOSE_3.__enum__ =
        d;
    d.NOSE_4 = ["NOSE_4", 51];
    d.NOSE_4.toString = g;
    d.NOSE_4.__enum__ = d;
    d.NOSE_5 = ["NOSE_5", 52];
    d.NOSE_5.toString = g;
    d.NOSE_5.__enum__ = d;
    d.NOSE_6 = ["NOSE_6", 53];
    d.NOSE_6.toString = g;
    d.NOSE_6.__enum__ = d;
    d.NOSE_7 = ["NOSE_7", 54];
    d.NOSE_7.toString = g;
    d.NOSE_7.__enum__ = d;
    d.NOSE_8 = ["NOSE_8", 55];
    d.NOSE_8.toString = g;
    d.NOSE_8.__enum__ = d;
    d.HAIR_1_DARK = ["HAIR_1_DARK", 56];
    d.HAIR_1_DARK.toString = g;
    d.HAIR_1_DARK.__enum__ = d;
    d.HAIR_1_LIGHT = ["HAIR_1_LIGHT", 57];
    d.HAIR_1_LIGHT.toString = g;
    d.HAIR_1_LIGHT.__enum__ = d;
    d.HAIR_2_DARK = ["HAIR_2_DARK", 58];
    d.HAIR_2_DARK.toString = g;
    d.HAIR_2_DARK.__enum__ = d;
    d.HAIR_2_LIGHT = ["HAIR_2_LIGHT", 59];
    d.HAIR_2_LIGHT.toString = g;
    d.HAIR_2_LIGHT.__enum__ = d;
    d.HAIR_3_DARK = ["HAIR_3_DARK", 60];
    d.HAIR_3_DARK.toString = g;
    d.HAIR_3_DARK.__enum__ = d;
    d.HAIR_3_LIGHT = ["HAIR_3_LIGHT", 61];
    d.HAIR_3_LIGHT.toString = g;
    d.HAIR_3_LIGHT.__enum__ = d;
    d.HAIR_4_DARK = ["HAIR_4_DARK", 62];
    d.HAIR_4_DARK.toString = g;
    d.HAIR_4_DARK.__enum__ = d;
    d.HAIR_4_LIGHT = ["HAIR_4_LIGHT", 63];
    d.HAIR_4_LIGHT.toString = g;
    d.HAIR_4_LIGHT.__enum__ = d;
    d.HAIR_5_DARK = ["HAIR_5_DARK", 64];
    d.HAIR_5_DARK.toString = g;
    d.HAIR_5_DARK.__enum__ = d;
    d.HAIR_5_LIGHT = ["HAIR_5_LIGHT", 65];
    d.HAIR_5_LIGHT.toString = g;
    d.HAIR_5_LIGHT.__enum__ = d;
    d.HAIR_6_DARK = ["HAIR_6_DARK", 66];
    d.HAIR_6_DARK.toString = g;
    d.HAIR_6_DARK.__enum__ = d;
    d.HAIR_6_LIGHT = ["HAIR_6_LIGHT", 67];
    d.HAIR_6_LIGHT.toString = g;
    d.HAIR_6_LIGHT.__enum__ = d;
    d.HAIR_7_DARK = ["HAIR_7_DARK", 68];
    d.HAIR_7_DARK.toString = g;
    d.HAIR_7_DARK.__enum__ = d;
    d.HAIR_7_LIGHT = ["HAIR_7_LIGHT", 69];
    d.HAIR_7_LIGHT.toString = g;
    d.HAIR_7_LIGHT.__enum__ = d;
    d.FACE_ROUND = ["FACE_ROUND", 70];
    d.FACE_ROUND.toString = g;
    d.FACE_ROUND.__enum__ = d;
    d.FACE_SQUARE = ["FACE_SQUARE", 71];
    d.FACE_SQUARE.toString = g;
    d.FACE_SQUARE.__enum__ = d;
    d.FACE_TRIANGLE = ["FACE_TRIANGLE", 72];
    d.FACE_TRIANGLE.toString = g;
    d.FACE_TRIANGLE.__enum__ = d;
    d.FACE_HEART = ["FACE_HEART", 73];
    d.FACE_HEART.toString = g;
    d.FACE_HEART.__enum__ = d;
    d.FACE_WIDE = ["FACE_WIDE", 74];
    d.FACE_WIDE.toString = g;
    d.FACE_WIDE.__enum__ = d;
    d.TOP_1 = ["TOP_1", 75];
    d.TOP_1.toString = g;
    d.TOP_1.__enum__ = d;
    d.TOP_2 = ["TOP_2", 76];
    d.TOP_2.toString = g;
    d.TOP_2.__enum__ =
        d;
    d.TOP_3 = ["TOP_3", 77];
    d.TOP_3.toString = g;
    d.TOP_3.__enum__ = d;
    d.TOP_4 = ["TOP_4", 78];
    d.TOP_4.toString = g;
    d.TOP_4.__enum__ = d;
    d.TOP_5 = ["TOP_5", 79];
    d.TOP_5.toString = g;
    d.TOP_5.__enum__ = d;
    d.TOP_6 = ["TOP_6", 80];
    d.TOP_6.toString = g;
    d.TOP_6.__enum__ = d;
    d.TOP_7 = ["TOP_7", 81];
    d.TOP_7.toString = g;
    d.TOP_7.__enum__ = d;
    d.TOP_8 = ["TOP_8", 82];
    d.TOP_8.toString = g;
    d.TOP_8.__enum__ = d;
    d.TOP_9 = ["TOP_9", 83];
    d.TOP_9.toString = g;
    d.TOP_9.__enum__ = d;
    d.TOP_10 = ["TOP_10", 84];
    d.TOP_10.toString = g;
    d.TOP_10.__enum__ = d;
    d.BOTTOM_1 = ["BOTTOM_1",
        85
    ];
    d.BOTTOM_1.toString = g;
    d.BOTTOM_1.__enum__ = d;
    d.BOTTOM_2 = ["BOTTOM_2", 86];
    d.BOTTOM_2.toString = g;
    d.BOTTOM_2.__enum__ = d;
    d.BOTTOM_3 = ["BOTTOM_3", 87];
    d.BOTTOM_3.toString = g;
    d.BOTTOM_3.__enum__ = d;
    d.BOTTOM_4 = ["BOTTOM_4", 88];
    d.BOTTOM_4.toString = g;
    d.BOTTOM_4.__enum__ = d;
    d.BOTTOM_5 = ["BOTTOM_5", 89];
    d.BOTTOM_5.toString = g;
    d.BOTTOM_5.__enum__ = d;
    d.BOTTOM_6 = ["BOTTOM_6", 90];
    d.BOTTOM_6.toString = g;
    d.BOTTOM_6.__enum__ = d;
    d.BOTTOM_7 = ["BOTTOM_7", 91];
    d.BOTTOM_7.toString = g;
    d.BOTTOM_7.__enum__ = d;
    d.BOTTOM_8 = ["BOTTOM_8", 92];
    d.BOTTOM_8.toString = g;
    d.BOTTOM_8.__enum__ = d;
    d.BOTTOM_9 = ["BOTTOM_9", 93];
    d.BOTTOM_9.toString = g;
    d.BOTTOM_9.__enum__ = d;
    d.BOTTOM_10 = ["BOTTOM_10", 94];
    d.BOTTOM_10.toString = g;
    d.BOTTOM_10.__enum__ = d;
    d.BOOTS_1 = ["BOOTS_1", 95];
    d.BOOTS_1.toString = g;
    d.BOOTS_1.__enum__ = d;
    d.BOOTS_2 = ["BOOTS_2", 96];
    d.BOOTS_2.toString = g;
    d.BOOTS_2.__enum__ = d;
    d.BOOTS_3 = ["BOOTS_3", 97];
    d.BOOTS_3.toString = g;
    d.BOOTS_3.__enum__ = d;
    d.BOOTS_4 = ["BOOTS_4", 98];
    d.BOOTS_4.toString = g;
    d.BOOTS_4.__enum__ = d;
    d.BOOTS_5 = ["BOOTS_5", 99];
    d.BOOTS_5.toString =
        g;
    d.BOOTS_5.__enum__ = d;
    d.BOOTS_6 = ["BOOTS_6", 100];
    d.BOOTS_6.toString = g;
    d.BOOTS_6.__enum__ = d;
    d.BOOTS_7 = ["BOOTS_7", 101];
    d.BOOTS_7.toString = g;
    d.BOOTS_7.__enum__ = d;
    d.BOOTS_8 = ["BOOTS_8", 102];
    d.BOOTS_8.toString = g;
    d.BOOTS_8.__enum__ = d;
    d.BOOTS_9 = ["BOOTS_9", 103];
    d.BOOTS_9.toString = g;
    d.BOOTS_9.__enum__ = d;
    d.BOOTS_10 = ["BOOTS_10", 104];
    d.BOOTS_10.toString = g;
    d.BOOTS_10.__enum__ = d;
    d.POWER_LEFT_NONE = ["POWER_LEFT_NONE", 105];
    d.POWER_LEFT_NONE.toString = g;
    d.POWER_LEFT_NONE.__enum__ = d;
    d.POWER_RIGHT_NONE = ["POWER_RIGHT_NONE",
        106
    ];
    d.POWER_RIGHT_NONE.toString = g;
    d.POWER_RIGHT_NONE.__enum__ = d;
    d.POWER_LEFT_1 = ["POWER_LEFT_1", 107];
    d.POWER_LEFT_1.toString = g;
    d.POWER_LEFT_1.__enum__ = d;
    d.POWER_RIGHT_1 = ["POWER_RIGHT_1", 108];
    d.POWER_RIGHT_1.toString = g;
    d.POWER_RIGHT_1.__enum__ = d;
    d.POWER_LEFT_2 = ["POWER_LEFT_2", 109];
    d.POWER_LEFT_2.toString = g;
    d.POWER_LEFT_2.__enum__ = d;
    d.POWER_RIGHT_2 = ["POWER_RIGHT_2", 110];
    d.POWER_RIGHT_2.toString = g;
    d.POWER_RIGHT_2.__enum__ = d;
    d.POWER_LEFT_3 = ["POWER_LEFT_3", 111];
    d.POWER_LEFT_3.toString = g;
    d.POWER_LEFT_3.__enum__ =
        d;
    d.POWER_RIGHT_3 = ["POWER_RIGHT_3", 112];
    d.POWER_RIGHT_3.toString = g;
    d.POWER_RIGHT_3.__enum__ = d;
    d.POWER_LEFT_4 = ["POWER_LEFT_4", 113];
    d.POWER_LEFT_4.toString = g;
    d.POWER_LEFT_4.__enum__ = d;
    d.POWER_RIGHT_4 = ["POWER_RIGHT_4", 114];
    d.POWER_RIGHT_4.toString = g;
    d.POWER_RIGHT_4.__enum__ = d;
    d.POWER_LEFT_5 = ["POWER_LEFT_5", 115];
    d.POWER_LEFT_5.toString = g;
    d.POWER_LEFT_5.__enum__ = d;
    d.POWER_RIGHT_5 = ["POWER_RIGHT_5", 116];
    d.POWER_RIGHT_5.toString = g;
    d.POWER_RIGHT_5.__enum__ = d;
    d.POWER_LEFT_6 = ["POWER_LEFT_6", 117];
    d.POWER_LEFT_6.toString =
        g;
    d.POWER_LEFT_6.__enum__ = d;
    d.POWER_RIGHT_6 = ["POWER_RIGHT_6", 118];
    d.POWER_RIGHT_6.toString = g;
    d.POWER_RIGHT_6.__enum__ = d;
    d.POWER_LEFT_7 = ["POWER_LEFT_7", 119];
    d.POWER_LEFT_7.toString = g;
    d.POWER_LEFT_7.__enum__ = d;
    d.POWER_RIGHT_7 = ["POWER_RIGHT_7", 120];
    d.POWER_RIGHT_7.toString = g;
    d.POWER_RIGHT_7.__enum__ = d;
    d.POWER_LEFT_8 = ["POWER_LEFT_8", 121];
    d.POWER_LEFT_8.toString = g;
    d.POWER_LEFT_8.__enum__ = d;
    d.POWER_RIGHT_8 = ["POWER_RIGHT_8", 122];
    d.POWER_RIGHT_8.toString = g;
    d.POWER_RIGHT_8.__enum__ = d;
    d.MASK_NONE = ["MASK_NONE",
        123
    ];
    d.MASK_NONE.toString = g;
    d.MASK_NONE.__enum__ = d;
    d.MASK_1_1 = ["MASK_1_1", 124];
    d.MASK_1_1.toString = g;
    d.MASK_1_1.__enum__ = d;
    d.MASK_1_2 = ["MASK_1_2", 125];
    d.MASK_1_2.toString = g;
    d.MASK_1_2.__enum__ = d;
    d.MASK_1_3 = ["MASK_1_3", 126];
    d.MASK_1_3.toString = g;
    d.MASK_1_3.__enum__ = d;
    d.MASK_1_4 = ["MASK_1_4", 127];
    d.MASK_1_4.toString = g;
    d.MASK_1_4.__enum__ = d;
    d.MASK_2_1 = ["MASK_2_1", 128];
    d.MASK_2_1.toString = g;
    d.MASK_2_1.__enum__ = d;
    d.MASK_2_2 = ["MASK_2_2", 129];
    d.MASK_2_2.toString = g;
    d.MASK_2_2.__enum__ = d;
    d.MASK_2_3 = ["MASK_2_3",
        130
    ];
    d.MASK_2_3.toString = g;
    d.MASK_2_3.__enum__ = d;
    d.MASK_2_4 = ["MASK_2_4", 131];
    d.MASK_2_4.toString = g;
    d.MASK_2_4.__enum__ = d;
    d.MASK_3_1 = ["MASK_3_1", 132];
    d.MASK_3_1.toString = g;
    d.MASK_3_1.__enum__ = d;
    d.MASK_3_2 = ["MASK_3_2", 133];
    d.MASK_3_2.toString = g;
    d.MASK_3_2.__enum__ = d;
    d.MASK_3_3 = ["MASK_3_3", 134];
    d.MASK_3_3.toString = g;
    d.MASK_3_3.__enum__ = d;
    d.MASK_3_4 = ["MASK_3_4", 135];
    d.MASK_3_4.toString = g;
    d.MASK_3_4.__enum__ = d;
    d.MASK_4_1 = ["MASK_4_1", 136];
    d.MASK_4_1.toString = g;
    d.MASK_4_1.__enum__ = d;
    d.MASK_4_2 = ["MASK_4_2",
        137
    ];
    d.MASK_4_2.toString = g;
    d.MASK_4_2.__enum__ = d;
    d.MASK_4_3 = ["MASK_4_3", 138];
    d.MASK_4_3.toString = g;
    d.MASK_4_3.__enum__ = d;
    d.MASK_4_4 = ["MASK_4_4", 139];
    d.MASK_4_4.toString = g;
    d.MASK_4_4.__enum__ = d;
    d.SKIN_1 = ["SKIN_1", 140];
    d.SKIN_1.toString = g;
    d.SKIN_1.__enum__ = d;
    d.SKIN_2 = ["SKIN_2", 141];
    d.SKIN_2.toString = g;
    d.SKIN_2.__enum__ = d;
    d.SKIN_3 = ["SKIN_3", 142];
    d.SKIN_3.toString = g;
    d.SKIN_3.__enum__ = d;
    d.SKIN_4 = ["SKIN_4", 143];
    d.SKIN_4.toString = g;
    d.SKIN_4.__enum__ = d;
    d.SKIN_5 = ["SKIN_5", 144];
    d.SKIN_5.toString = g;
    d.SKIN_5.__enum__ =
        d;
    d.SKIN_6 = ["SKIN_6", 145];
    d.SKIN_6.toString = g;
    d.SKIN_6.__enum__ = d;
    d.__empty_constructs__ = [d.EYE_1_1, d.EYE_1_2, d.EYE_1_3, d.EYE_1_4, d.EYE_2_1, d.EYE_2_2, d.EYE_2_3, d.EYE_2_4, d.EYE_3_1, d.EYE_3_2, d.EYE_3_3, d.EYE_3_4, d.EYE_4_1, d.EYE_4_2, d.EYE_4_3, d.EYE_4_4, d.EYE_5_1, d.EYE_5_2, d.EYE_5_3, d.EYE_5_4, d.EYE_6_1, d.EYE_6_2, d.EYE_6_3, d.EYE_6_4, d.EYE_7_1, d.EYE_7_2, d.EYE_7_3, d.EYE_7_4, d.EYE_8_1, d.EYE_8_2, d.EYE_8_3, d.EYE_8_4, d.MOUTH_1, d.MOUTH_2, d.MOUTH_3, d.MOUTH_4, d.MOUTH_5, d.MOUTH_6, d.MOUTH_7, d.MOUTH_8, d.MOUTH_1_LIPS,
        d.MOUTH_2_LIPS, d.MOUTH_3_LIPS, d.MOUTH_4_LIPS, d.MOUTH_5_LIPS, d.MOUTH_6_LIPS, d.MOUTH_7_LIPS, d.MOUTH_8_LIPS, d.NOSE_1, d.NOSE_2, d.NOSE_3, d.NOSE_4, d.NOSE_5, d.NOSE_6, d.NOSE_7, d.NOSE_8, d.HAIR_1_DARK, d.HAIR_1_LIGHT, d.HAIR_2_DARK, d.HAIR_2_LIGHT, d.HAIR_3_DARK, d.HAIR_3_LIGHT, d.HAIR_4_DARK, d.HAIR_4_LIGHT, d.HAIR_5_DARK, d.HAIR_5_LIGHT, d.HAIR_6_DARK, d.HAIR_6_LIGHT, d.HAIR_7_DARK, d.HAIR_7_LIGHT, d.FACE_ROUND, d.FACE_SQUARE, d.FACE_TRIANGLE, d.FACE_HEART, d.FACE_WIDE, d.TOP_1, d.TOP_2, d.TOP_3, d.TOP_4, d.TOP_5, d.TOP_6, d.TOP_7,
        d.TOP_8, d.TOP_9, d.TOP_10, d.BOTTOM_1, d.BOTTOM_2, d.BOTTOM_3, d.BOTTOM_4, d.BOTTOM_5, d.BOTTOM_6, d.BOTTOM_7, d.BOTTOM_8, d.BOTTOM_9, d.BOTTOM_10, d.BOOTS_1, d.BOOTS_2, d.BOOTS_3, d.BOOTS_4, d.BOOTS_5, d.BOOTS_6, d.BOOTS_7, d.BOOTS_8, d.BOOTS_9, d.BOOTS_10, d.POWER_LEFT_NONE, d.POWER_RIGHT_NONE, d.POWER_LEFT_1, d.POWER_RIGHT_1, d.POWER_LEFT_2, d.POWER_RIGHT_2, d.POWER_LEFT_3, d.POWER_RIGHT_3, d.POWER_LEFT_4, d.POWER_RIGHT_4, d.POWER_LEFT_5, d.POWER_RIGHT_5, d.POWER_LEFT_6, d.POWER_RIGHT_6, d.POWER_LEFT_7, d.POWER_RIGHT_7, d.POWER_LEFT_8,
        d.POWER_RIGHT_8, d.MASK_NONE, d.MASK_1_1, d.MASK_1_2, d.MASK_1_3, d.MASK_1_4, d.MASK_2_1, d.MASK_2_2, d.MASK_2_3, d.MASK_2_4, d.MASK_3_1, d.MASK_3_2, d.MASK_3_3, d.MASK_3_4, d.MASK_4_1, d.MASK_4_2, d.MASK_4_3, d.MASK_4_4, d.SKIN_1, d.SKIN_2, d.SKIN_3, d.SKIN_4, d.SKIN_5, d.SKIN_6
    ];
    var w = function(a, b, c) { this._slot = a;
        this._thumbnail = b;
        this._boneAssignments = c };
    j["com.nick.spongebob.comic_creator.data.avatar.ItemDef"] = w;
    w.__name__ = "com,nick,spongebob,comic_creator,data,avatar,ItemDef".split(",");
    w.prototype = {
        setID: function(a) {
            this._id =
                a
        },
        get_id: function() { return this._id },
        get_slot: function() { return this._slot },
        get_thumbnail: function() { return this._thumbnail },
        get_boneAssignments: function() { return this._boneAssignments },
        __class__: w,
        __properties__: { get_boneAssignments: "get_boneAssignments", get_thumbnail: "get_thumbnail", get_slot: "get_slot", get_id: "get_id" }
    };
    var xa = function() { this._populateItems() };
    j["com.nick.spongebob.comic_creator.data.avatar.Outfitter"] = xa;
    xa.__name__ = "com,nick,spongebob,comic_creator,data,avatar,Outfitter".split(",");
    xa.__properties__ = { get_instance: "get_instance" };
    xa.get_instance = function() { null == xa.__instance && (xa.__instance = new xa); return xa.__instance };
    xa.prototype = {
        _populateItems: function() {
            this._items = new db;
            this._addItem(d.EYE_1_1, new w(p.EYE, h.texture.eyes1_color1, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes1_color1")]));
            this._addItem(d.EYE_1_2, new w(p.EYE, h.texture.eyes1_color2, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes1_color2")]));
            this._addItem(d.EYE_1_3, new w(p.EYE, h.texture.eyes1_color3, [new u(h.spine.HDCC_avatar_boy.slots.eyes,
                "eyes1_color3")]));
            this._addItem(d.EYE_1_4, new w(p.EYE, h.texture.eyes1_color4, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes1_color4")]));
            this._addItem(d.EYE_2_1, new w(p.EYE, h.texture.eyes2_color1, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes2_color1")]));
            this._addItem(d.EYE_2_2, new w(p.EYE, h.texture.eyes2_color2, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes2_color2")]));
            this._addItem(d.EYE_2_3, new w(p.EYE, h.texture.eyes2_color3, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes2_color3")]));
            this._addItem(d.EYE_2_4,
                new w(p.EYE, h.texture.eyes2_color4, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes2_color4")]));
            this._addItem(d.EYE_3_1, new w(p.EYE, h.texture.eyes3_color1, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes3_color1")]));
            this._addItem(d.EYE_3_2, new w(p.EYE, h.texture.eyes3_color2, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes3_color2")]));
            this._addItem(d.EYE_3_3, new w(p.EYE, h.texture.eyes3_color3, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes3_color3")]));
            this._addItem(d.EYE_3_4, new w(p.EYE, h.texture.eyes3_color4,
                [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes3_color4")]));
            this._addItem(d.EYE_4_1, new w(p.EYE, h.texture.eyes4_color1, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes4_color1")]));
            this._addItem(d.EYE_4_2, new w(p.EYE, h.texture.eyes4_color2, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes4_color2")]));
            this._addItem(d.EYE_4_3, new w(p.EYE, h.texture.eyes4_color3, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes4_color3")]));
            this._addItem(d.EYE_4_4, new w(p.EYE, h.texture.eyes4_color4, [new u(h.spine.HDCC_avatar_boy.slots.eyes,
                "eyes4_color4")]));
            this._addItem(d.EYE_5_1, new w(p.EYE, h.texture.eyes5_color1, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes5_color1")]));
            this._addItem(d.EYE_5_2, new w(p.EYE, h.texture.eyes5_color2, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes5_color2")]));
            this._addItem(d.EYE_5_3, new w(p.EYE, h.texture.eyes5_color3, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes5_color3")]));
            this._addItem(d.EYE_5_4, new w(p.EYE, h.texture.eyes5_color4, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes5_color4")]));
            this._addItem(d.EYE_6_1,
                new w(p.EYE, h.texture.eyes6_color1, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes6_color1")]));
            this._addItem(d.EYE_6_2, new w(p.EYE, h.texture.eyes6_color2, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes6_color2")]));
            this._addItem(d.EYE_6_3, new w(p.EYE, h.texture.eyes6_color3, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes6_color3")]));
            this._addItem(d.EYE_6_4, new w(p.EYE, h.texture.eyes6_color4, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes6_color4")]));
            this._addItem(d.EYE_7_1, new w(p.EYE, h.texture.eyes7_color1,
                [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes7_color1")]));
            this._addItem(d.EYE_7_2, new w(p.EYE, h.texture.eyes7_color2, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes7_color2")]));
            this._addItem(d.EYE_7_3, new w(p.EYE, h.texture.eyes7_color3, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes7_color3")]));
            this._addItem(d.EYE_7_4, new w(p.EYE, h.texture.eyes7_color4, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes7_color4")]));
            this._addItem(d.EYE_8_1, new w(p.EYE, h.texture.eyes8_color1, [new u(h.spine.HDCC_avatar_boy.slots.eyes,
                "eyes8_color1")]));
            this._addItem(d.EYE_8_2, new w(p.EYE, h.texture.eyes8_color2, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes8_color2")]));
            this._addItem(d.EYE_8_3, new w(p.EYE, h.texture.eyes8_color3, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes8_color3")]));
            this._addItem(d.EYE_8_4, new w(p.EYE, h.texture.eyes8_color4, [new u(h.spine.HDCC_avatar_boy.slots.eyes, "eyes8_color4")]));
            this._addItem(d.MOUTH_1, new w(p.MOUTH, h.texture.mouth1, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth1")]));
            this._addItem(d.MOUTH_2,
                new w(p.MOUTH, h.texture.mouth2, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth2")]));
            this._addItem(d.MOUTH_3, new w(p.MOUTH, h.texture.mouth3, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth3")]));
            this._addItem(d.MOUTH_4, new w(p.MOUTH, h.texture.mouth4, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth4")]));
            this._addItem(d.MOUTH_5, new w(p.MOUTH, h.texture.mouth5, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth5")]));
            this._addItem(d.MOUTH_6, new w(p.MOUTH, h.texture.mouth6, [new u(h.spine.HDCC_avatar_boy.slots.mouths,
                "mouth6")]));
            this._addItem(d.MOUTH_7, new w(p.MOUTH, h.texture.mouth7, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth7")]));
            this._addItem(d.MOUTH_8, new w(p.MOUTH, h.texture.mouth8, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth8")]));
            this._addItem(d.MOUTH_1_LIPS, new w(p.MOUTH, h.texture.mouth1_lips, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth1_lips")]));
            this._addItem(d.MOUTH_2_LIPS, new w(p.MOUTH, h.texture.mouth2_lips, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth2_lips")]));
            this._addItem(d.MOUTH_3_LIPS,
                new w(p.MOUTH, h.texture.mouth3_lips, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth3_lips")]));
            this._addItem(d.MOUTH_4_LIPS, new w(p.MOUTH, h.texture.mouth4_lips, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth4_lips")]));
            this._addItem(d.MOUTH_5_LIPS, new w(p.MOUTH, h.texture.mouth5_lips, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth5_lips")]));
            this._addItem(d.MOUTH_6_LIPS, new w(p.MOUTH, h.texture.mouth6_lips, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth6_lips")]));
            this._addItem(d.MOUTH_7_LIPS,
                new w(p.MOUTH, h.texture.mouth7_lips, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth7_lips")]));
            this._addItem(d.MOUTH_8_LIPS, new w(p.MOUTH, h.texture.mouth8_lips, [new u(h.spine.HDCC_avatar_boy.slots.mouths, "mouth8_lips")]));
            this._addItem(d.NOSE_1, new w(p.NOSE, h.texture.nose1, [new u(h.spine.HDCC_avatar_boy.slots.nose, "nose1")]));
            this._addItem(d.NOSE_2, new w(p.NOSE, h.texture.nose2, [new u(h.spine.HDCC_avatar_boy.slots.nose, "nose2")]));
            this._addItem(d.NOSE_3, new w(p.NOSE, h.texture.nose3, [new u(h.spine.HDCC_avatar_boy.slots.nose,
                "nose3")]));
            this._addItem(d.NOSE_4, new w(p.NOSE, h.texture.nose4, [new u(h.spine.HDCC_avatar_boy.slots.nose, "nose4")]));
            this._addItem(d.NOSE_5, new w(p.NOSE, h.texture.nose5, [new u(h.spine.HDCC_avatar_boy.slots.nose, "nose5")]));
            this._addItem(d.NOSE_6, new w(p.NOSE, h.texture.nose6, [new u(h.spine.HDCC_avatar_boy.slots.nose, "nose6")]));
            this._addItem(d.NOSE_7, new w(p.NOSE, h.texture.nose7, [new u(h.spine.HDCC_avatar_boy.slots.nose, "nose7")]));
            this._addItem(d.NOSE_8, new w(p.NOSE, h.texture.nose8, [new u(h.spine.HDCC_avatar_boy.slots.nose,
                "nose8")]));
            this._addItem(d.FACE_ROUND, new w(p.FACE, h.texture.head_round_skin1, [new u(h.spine.HDCC_avatar_boy.slots.head_round, "head_round"), new u(h.spine.HDCC_avatar_boy.slots.head_square, null), new u(h.spine.HDCC_avatar_boy.slots.head_triangle, null), new u(h.spine.HDCC_avatar_boy.slots.head_heart, null), new u(h.spine.HDCC_avatar_boy.slots.head_wide, null)]));
            this._addItem(d.FACE_SQUARE, new w(p.FACE, h.texture.head_square_skin1, [new u(h.spine.HDCC_avatar_boy.slots.head_round, null), new u(h.spine.HDCC_avatar_boy.slots.head_square,
                "head_square"), new u(h.spine.HDCC_avatar_boy.slots.head_triangle, null), new u(h.spine.HDCC_avatar_boy.slots.head_heart, null), new u(h.spine.HDCC_avatar_boy.slots.head_wide, null)]));
            this._addItem(d.FACE_TRIANGLE, new w(p.FACE, h.texture.head_triangle_skin1, [new u(h.spine.HDCC_avatar_boy.slots.head_round, null), new u(h.spine.HDCC_avatar_boy.slots.head_square, null), new u(h.spine.HDCC_avatar_boy.slots.head_triangle, "head_triangle"), new u(h.spine.HDCC_avatar_boy.slots.head_heart, null), new u(h.spine.HDCC_avatar_boy.slots.head_wide,
                null)]));
            this._addItem(d.FACE_HEART, new w(p.FACE, h.texture.head_heart_skin1, [new u(h.spine.HDCC_avatar_boy.slots.head_round, null), new u(h.spine.HDCC_avatar_boy.slots.head_square, null), new u(h.spine.HDCC_avatar_boy.slots.head_triangle, null), new u(h.spine.HDCC_avatar_boy.slots.head_heart, "head_heart"), new u(h.spine.HDCC_avatar_boy.slots.head_wide, null)]));
            this._addItem(d.FACE_WIDE, new w(p.FACE, h.texture.head_wide_skin1, [new u(h.spine.HDCC_avatar_boy.slots.head_round, null), new u(h.spine.HDCC_avatar_boy.slots.head_square,
                null), new u(h.spine.HDCC_avatar_boy.slots.head_triangle, null), new u(h.spine.HDCC_avatar_boy.slots.head_heart, null), new u(h.spine.HDCC_avatar_boy.slots.head_wide, "head_wide")]));
            this._addItem(d.HAIR_1_DARK, new w(p.HAIR, h.texture.thumbnail_hair1_dark, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair1_dark"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs1_dark")]));
            this._addItem(d.HAIR_1_LIGHT, new w(p.HAIR, h.texture.thumbnail_hair1_light, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair1_light"), new u(h.spine.HDCC_avatar_boy.slots.bangs,
                "bangs1_light")]));
            this._addItem(d.HAIR_2_DARK, new w(p.HAIR, h.texture.thumbnail_hair2_dark, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair2_dark"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs2_dark")]));
            this._addItem(d.HAIR_2_LIGHT, new w(p.HAIR, h.texture.thumbnail_hair2_light, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair2_light"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs2_light")]));
            this._addItem(d.HAIR_3_DARK, new w(p.HAIR, h.texture.thumbnail_hair3_dark, [new u(h.spine.HDCC_avatar_boy.slots.hair,
                "hair3_dark"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs3_dark")]));
            this._addItem(d.HAIR_3_LIGHT, new w(p.HAIR, h.texture.thumbnail_hair3_light, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair3_light"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs3_light")]));
            this._addItem(d.HAIR_4_DARK, new w(p.HAIR, h.texture.thumbnail_hair4_dark, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair4_dark"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs4_dark")]));
            this._addItem(d.HAIR_4_LIGHT, new w(p.HAIR, h.texture.thumbnail_hair4_light,
                [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair4_light"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs4_light")]));
            this._addItem(d.HAIR_5_DARK, new w(p.HAIR, h.texture.thumbnail_hair5_dark, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair5_dark"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs5_dark")]));
            this._addItem(d.HAIR_5_LIGHT, new w(p.HAIR, h.texture.thumbnail_hair5_light, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair5_light"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs5_light")]));
            this._addItem(d.HAIR_6_DARK,
                new w(p.HAIR, h.texture.thumbnail_hair6_dark, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair6_dark"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs6_dark")]));
            this._addItem(d.HAIR_6_LIGHT, new w(p.HAIR, h.texture.thumbnail_hair6_light, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair6_light"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs6_light")]));
            this._addItem(d.HAIR_7_DARK, new w(p.HAIR, h.texture.thumbnail_hair7_dark, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair7_dark"), new u(h.spine.HDCC_avatar_boy.slots.bangs,
                "bangs7_dark")]));
            this._addItem(d.HAIR_7_LIGHT, new w(p.HAIR, h.texture.thumbnail_hair7_light, [new u(h.spine.HDCC_avatar_boy.slots.hair, "hair7_light"), new u(h.spine.HDCC_avatar_boy.slots.bangs, "bangs7_light")]));
            this._addItem(d.TOP_1, new w(p.TOP, h.texture.top1, [new u(h.spine.HDCC_avatar_boy.slots.tops, "top1")]));
            this._addItem(d.TOP_2, new w(p.TOP, h.texture.top2, [new u(h.spine.HDCC_avatar_boy.slots.tops, "top2")]));
            this._addItem(d.TOP_3, new w(p.TOP, h.texture.top3, [new u(h.spine.HDCC_avatar_boy.slots.tops,
                "top3")]));
            this._addItem(d.TOP_4, new w(p.TOP, h.texture.top4, [new u(h.spine.HDCC_avatar_boy.slots.tops, "top4")]));
            this._addItem(d.TOP_5, new w(p.TOP, h.texture.top5, [new u(h.spine.HDCC_avatar_boy.slots.tops, "top5")]));
            this._addItem(d.TOP_6, new w(p.TOP, h.texture.top6, [new u(h.spine.HDCC_avatar_boy.slots.tops, "top6")]));
            this._addItem(d.TOP_7, new w(p.TOP, h.texture.top7, [new u(h.spine.HDCC_avatar_boy.slots.tops, "top7")]));
            this._addItem(d.TOP_8, new w(p.TOP, h.texture.top8, [new u(h.spine.HDCC_avatar_boy.slots.tops,
                "top8")]));
            this._addItem(d.TOP_9, new w(p.TOP, h.texture.top9, [new u(h.spine.HDCC_avatar_boy.slots.tops, "top9")]));
            this._addItem(d.TOP_10, new w(p.TOP, h.texture.top10, [new u(h.spine.HDCC_avatar_boy.slots.tops, "top10")]));
            this._addItem(d.BOTTOM_1, new w(p.BOTTOM, h.texture.pants1, [new u(h.spine.HDCC_avatar_boy.slots.pants, "pants1")]));
            this._addItem(d.BOTTOM_2, new w(p.BOTTOM, h.texture.pants2, [new u(h.spine.HDCC_avatar_boy.slots.pants, "pants2")]));
            this._addItem(d.BOTTOM_3, new w(p.BOTTOM, h.texture.pants3,
                [new u(h.spine.HDCC_avatar_boy.slots.pants, "pants3")]));
            this._addItem(d.BOTTOM_4, new w(p.BOTTOM, h.texture.pants4, [new u(h.spine.HDCC_avatar_boy.slots.pants, "pants4")]));
            this._addItem(d.BOTTOM_5, new w(p.BOTTOM, h.texture.pants5, [new u(h.spine.HDCC_avatar_boy.slots.pants, "pants5")]));
            this._addItem(d.BOTTOM_6, new w(p.BOTTOM, h.texture.pants6, [new u(h.spine.HDCC_avatar_boy.slots.pants, "pants6")]));
            this._addItem(d.BOTTOM_7, new w(p.BOTTOM, h.texture.pants7, [new u(h.spine.HDCC_avatar_boy.slots.pants, "pants7")]));
            this._addItem(d.BOTTOM_8, new w(p.BOTTOM, h.texture.pants8, [new u(h.spine.HDCC_avatar_boy.slots.pants, "pants8")]));
            this._addItem(d.BOTTOM_9, new w(p.BOTTOM, h.texture.pants9, [new u(h.spine.HDCC_avatar_boy.slots.pants, "pants9")]));
            this._addItem(d.BOTTOM_10, new w(p.BOTTOM, h.texture.pants10, [new u(h.spine.HDCC_avatar_boy.slots.pants, "pants10")]));
            this._addItem(d.BOOTS_1, new w(p.BOOTS, h.texture.boots1, [new u(h.spine.HDCC_avatar_boy.slots.boots, "boots1")]));
            this._addItem(d.BOOTS_2, new w(p.BOOTS, h.texture.boots2,
                [new u(h.spine.HDCC_avatar_boy.slots.boots, "boots2")]));
            this._addItem(d.BOOTS_3, new w(p.BOOTS, h.texture.boots3, [new u(h.spine.HDCC_avatar_boy.slots.boots, "boots3")]));
            this._addItem(d.BOOTS_4, new w(p.BOOTS, h.texture.boots4, [new u(h.spine.HDCC_avatar_boy.slots.boots, "boots4")]));
            this._addItem(d.BOOTS_5, new w(p.BOOTS, h.texture.boots5, [new u(h.spine.HDCC_avatar_boy.slots.boots, "boots5")]));
            this._addItem(d.BOOTS_6, new w(p.BOOTS, h.texture.boots6, [new u(h.spine.HDCC_avatar_boy.slots.boots, "boots6")]));
            this._addItem(d.BOOTS_7,
                new w(p.BOOTS, h.texture.boots7, [new u(h.spine.HDCC_avatar_boy.slots.boots, "boots7")]));
            this._addItem(d.BOOTS_8, new w(p.BOOTS, h.texture.boots8, [new u(h.spine.HDCC_avatar_boy.slots.boots, "boots8")]));
            this._addItem(d.BOOTS_9, new w(p.BOOTS, h.texture.boots9, [new u(h.spine.HDCC_avatar_boy.slots.boots, "boots9")]));
            this._addItem(d.BOOTS_10, new w(p.BOOTS, h.texture.boots10, [new u(h.spine.HDCC_avatar_boy.slots.boots, "boots10")]));
            this._addItem(d.MASK_NONE, new w(p.MASK, h.texture.thumbnail_mask_off, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes,
                null), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, null)]));
            this._addItem(d.MASK_1_1, new w(p.MASK, h.texture.mask1_color1, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, "mask1_color1"), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, null)]));
            this._addItem(d.MASK_1_2, new w(p.MASK, h.texture.mask1_color2, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, "mask1_color2"), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, null)]));
            this._addItem(d.MASK_1_3, new w(p.MASK, h.texture.mask1_color3,
                [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, "mask1_color3"), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, null)]));
            this._addItem(d.MASK_1_4, new w(p.MASK, h.texture.mask1_color4, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, "mask1_color4"), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, null)]));
            this._addItem(d.MASK_2_1, new w(p.MASK, h.texture.mask2_color1, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, "mask2_color1"), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes,
                null)]));
            this._addItem(d.MASK_2_2, new w(p.MASK, h.texture.mask2_color2, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, "mask2_color2"), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, null)]));
            this._addItem(d.MASK_2_3, new w(p.MASK, h.texture.mask2_color3, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, "mask2_color3"), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, null)]));
            this._addItem(d.MASK_2_4, new w(p.MASK, h.texture.mask2_color4, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes,
                "mask2_color4"), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, null)]));
            this._addItem(d.MASK_3_1, new w(p.MASK, h.texture.mask3_color1, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, null), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, "mask3_color1")]));
            this._addItem(d.MASK_3_2, new w(p.MASK, h.texture.mask3_color2, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, null), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, "mask3_color2")]));
            this._addItem(d.MASK_3_3, new w(p.MASK, h.texture.mask3_color3,
                [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, null), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, "mask3_color3")]));
            this._addItem(d.MASK_3_4, new w(p.MASK, h.texture.mask3_color4, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, null), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, "mask3_color4")]));
            this._addItem(d.MASK_4_1, new w(p.MASK, h.texture.mask4_color1, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, null), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, "mask4_color1")]));
            this._addItem(d.MASK_4_2, new w(p.MASK, h.texture.mask4_color2, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, null), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, "mask4_color2")]));
            this._addItem(d.MASK_4_3, new w(p.MASK, h.texture.mask4_color3, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, null), new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, "mask4_color3")]));
            this._addItem(d.MASK_4_4, new w(p.MASK, h.texture.mask4_color4, [new u(h.spine.HDCC_avatar_boy.slots.masks_behind_eyes, null),
                new u(h.spine.HDCC_avatar_boy.slots.mask_over_eyes, "mask4_color4")
            ]));
            this._addItem(d.POWER_LEFT_NONE, new w(p.POWER_LEFT, h.texture.thumbnail_powers_off, [new u(h.spine.HDCC_avatar_boy.slots.powers_left, null)]));
            this._addItem(d.POWER_LEFT_1, new w(p.POWER_LEFT, h.texture.power1_left, [new u(h.spine.HDCC_avatar_boy.slots.powers_left, "power1_left")]));
            this._addItem(d.POWER_LEFT_2, new w(p.POWER_LEFT, h.texture.power2_left, [new u(h.spine.HDCC_avatar_boy.slots.powers_left, "power2_left")]));
            this._addItem(d.POWER_LEFT_3,
                new w(p.POWER_LEFT, h.texture.power3_left, [new u(h.spine.HDCC_avatar_boy.slots.powers_left, "power3_left")]));
            this._addItem(d.POWER_LEFT_4, new w(p.POWER_LEFT, h.texture.power4_left, [new u(h.spine.HDCC_avatar_boy.slots.powers_left, "power4_left")]));
            this._addItem(d.POWER_LEFT_5, new w(p.POWER_LEFT, h.texture.power5_left, [new u(h.spine.HDCC_avatar_boy.slots.powers_left, "power5_left")]));
            this._addItem(d.POWER_LEFT_6, new w(p.POWER_LEFT, h.texture.power6_left, [new u(h.spine.HDCC_avatar_boy.slots.powers_left,
                "power6_left")]));
            this._addItem(d.POWER_LEFT_7, new w(p.POWER_LEFT, h.texture.power7_left, [new u(h.spine.HDCC_avatar_boy.slots.powers_left, "power7_left")]));
            this._addItem(d.POWER_LEFT_8, new w(p.POWER_LEFT, h.texture.power8_left, [new u(h.spine.HDCC_avatar_boy.slots.powers_left, "power8_left")]));
            this._addItem(d.POWER_RIGHT_NONE, new w(p.POWER_RIGHT, h.texture.thumbnail_powers_off, [new u(h.spine.HDCC_avatar_boy.slots.powers_right, null)]));
            this._addItem(d.POWER_RIGHT_1, new w(p.POWER_RIGHT, h.texture.power1_right,
                [new u(h.spine.HDCC_avatar_boy.slots.powers_right, "power1_right")]));
            this._addItem(d.POWER_RIGHT_2, new w(p.POWER_RIGHT, h.texture.power2_right, [new u(h.spine.HDCC_avatar_boy.slots.powers_right, "power2_right")]));
            this._addItem(d.POWER_RIGHT_3, new w(p.POWER_RIGHT, h.texture.power3_right, [new u(h.spine.HDCC_avatar_boy.slots.powers_right, "power3_right")]));
            this._addItem(d.POWER_RIGHT_4, new w(p.POWER_RIGHT, h.texture.power4_right, [new u(h.spine.HDCC_avatar_boy.slots.powers_right, "power4_right")]));
            this._addItem(d.POWER_RIGHT_5,
                new w(p.POWER_RIGHT, h.texture.power5_right, [new u(h.spine.HDCC_avatar_boy.slots.powers_right, "power5_right")]));
            this._addItem(d.POWER_RIGHT_6, new w(p.POWER_RIGHT, h.texture.power6_right, [new u(h.spine.HDCC_avatar_boy.slots.powers_right, "power6_right")]));
            this._addItem(d.POWER_RIGHT_7, new w(p.POWER_RIGHT, h.texture.power7_right, [new u(h.spine.HDCC_avatar_boy.slots.powers_right, "power7_right")]));
            this._addItem(d.POWER_RIGHT_8, new w(p.POWER_RIGHT, h.texture.power8_right, [new u(h.spine.HDCC_avatar_boy.slots.powers_right,
                "power8_right")]));
            this._addItem(d.SKIN_1, new w(p.SKIN, h.texture.thumbnail_skintone1, [new u("", "skintone1")]));
            this._addItem(d.SKIN_2, new w(p.SKIN, h.texture.thumbnail_skintone2, [new u("", "skintone2")]));
            this._addItem(d.SKIN_3, new w(p.SKIN, h.texture.thumbnail_skintone3, [new u("", "skintone3")]));
            this._addItem(d.SKIN_4, new w(p.SKIN, h.texture.thumbnail_skintone4, [new u("", "skintone4")]));
            this._addItem(d.SKIN_5, new w(p.SKIN, h.texture.thumbnail_skintone5, [new u("", "skintone5")]));
            this._addItem(d.SKIN_6,
                new w(p.SKIN, h.texture.thumbnail_skintone6, [new u("", "skintone6")]))
        },
        _addItem: function(a, b) { null == this._items.get(a) && (b.setID(a), this._items.set(a, b), b) },
        getItem: function(a) { return this._items.exists(a) ? this._items.get(a) : null },
        getItemsForSlot: function(a) { for (var b = [], c = this._items.iterator(); c.hasNext();) { var e = c.next();
                e.get_slot() == a && b.push(e.get_id()) } return b },
        getPowerItems: function() {
            for (var a = [], b = this.getItemsForSlot(p.POWER_LEFT), c = this.getItemsForSlot(p.POWER_RIGHT), e = 0, m = b.length; e <
                m;) { var d = e++;
                a.push(b[d]);
                a.push(c[d]) }
            return a
        },
        __class__: xa
    };
    var va = j["com.nick.spongebob.comic_creator.data.dialogue.DIALOGUE_POINTER"] = { __ename__: "com,nick,spongebob,comic_creator,data,dialogue,DIALOGUE_POINTER".split(","), __constructs__: ["TAP", "POINT", "SWIPE", "NONE"] };
    va.TAP = ["TAP", 0];
    va.TAP.toString = g;
    va.TAP.__enum__ = va;
    va.POINT = ["POINT", 1];
    va.POINT.toString = g;
    va.POINT.__enum__ = va;
    va.SWIPE = ["SWIPE", 2];
    va.SWIPE.toString = g;
    va.SWIPE.__enum__ = va;
    va.NONE = ["NONE", 3];
    va.NONE.toString = g;
    va.NONE.__enum__ =
        va;
    va.__empty_constructs__ = [va.TAP, va.POINT, va.SWIPE, va.NONE];
    var eb = j["com.nick.spongebob.comic_creator.data.dialogue.DIALOGUE_POSITION"] = { __ename__: "com,nick,spongebob,comic_creator,data,dialogue,DIALOGUE_POSITION".split(","), __constructs__: ["TOP", "CENTER", "BOTTOM"] };
    eb.TOP = ["TOP", 0];
    eb.TOP.toString = g;
    eb.TOP.__enum__ = eb;
    eb.CENTER = ["CENTER", 1];
    eb.CENTER.toString = g;
    eb.CENTER.__enum__ = eb;
    eb.BOTTOM = ["BOTTOM", 2];
    eb.BOTTOM.toString = g;
    eb.BOTTOM.__enum__ = eb;
    eb.__empty_constructs__ = [eb.TOP, eb.CENTER, eb.BOTTOM];
    var lg = function() {};
    j["com.nick.spongebob.comic_creator.data.dialogue.DialogueData"] = lg;
    lg.__name__ = "com,nick,spongebob,comic_creator,data,dialogue,DialogueData".split(",");
    lg.prototype = {
        dispose: function() { this._text = this._position = this._id = null;
            null != this._pointerLocation && (this._pointerLocation.dispose(), this._pointerLocation = null);
            this._endEvent = this._triggerEvent = this._portrait = this._pointerType = null },
        get_position: function() { return this._position },
        get_text: function() { return this._text },
        get_mobileToggle: function() { return this._mobileToggle },
        get_pointerLocation: function() { return this._pointerLocation },
        get_pointerType: function() { return this._pointerType },
        get_triggerEvent: function() { return this._triggerEvent },
        get_endEvent: function() { return this._endEvent },
        __class__: lg,
        __properties__: { get_endEvent: "get_endEvent", get_triggerEvent: "get_triggerEvent", get_pointerType: "get_pointerType", get_pointerLocation: "get_pointerLocation", get_mobileToggle: "get_mobileToggle", get_text: "get_text", get_position: "get_position" }
    };
    var x = function(a) {
        this.root = new ea;
        this._rootSprite = new J;
        this.root.add(this._rootSprite);
        this._imageEntity = new ea;
        this.root.addChild(this._imageEntity);
        this._imageSprite = new J;
        this._imageEntity.add(this._imageSprite);
        this._format = ha.EMPTY;
        this._children = [];
        this._imageSprite.set_pixelSnapping(!1);
        this._rootSprite.set_pixelSnapping(!1);
        this.pos = W.request(null == a.x ? 0 : a.x, null == a.y ? 0 : a.y, null == a.z ? 0 : a.z);
        this.velocity = W.request();
        this.uniqueId = r.getUniqueId();
        this.useCamera = !0;
        this.doDelete = !1;
        this.visible = !0;
        this.rotation = this.offsetX =
            this.offsetY = 0;
        this.scaleX = this.scaleY = this.alpha = 1;
        this.originX = this.originY = 0.5;
        this.width = this.height = -1;
        this.setAsset(a.asset);
        null != a.origin && (this.originX = this.originY = a.origin);
        null != a.originX && (this.originX = a.originX);
        null != a.originY && (this.originY = a.originY);
        null != a.scale && (this.scaleX = this.scaleY = a.scale);
        null != a.scaleX && (this.scaleX = a.scaleX);
        null != a.scaleY && (this.scaleY = a.scaleY);
        null != a.rotation && (this.rotation = a.rotation);
        null != a.alpha && (this.alpha = a.alpha);
        null != a.offset && (this.offsetX =
            this.offsetY = a.offset);
        null != a.offsetX && (this.offsetX = a.offsetX);
        null != a.offsetY && (this.offsetY = a.offsetY);
        null != a.useCamera && (this.useCamera = a.useCamera);
        this._addEventListeners()
    };
    j["com.workinman.display.Element"] = x;
    x.__name__ = ["com", "workinman", "display", "Element"];
    x.prototype = {
        setAsset: function(a) { null == a && (a = ""); if ("" == a || null == a) return this;
            this.height = this.width = -1; switch (this._format[1]) {
                case 1:
                    this._textureSprite.setTexture(a); break;
                default:
                    this.setImageSprite(new Tc(a)) } return this },
        dispose: function() {
            this._format =
                null;
            this._removeEventListeners();
            this.root.dispose();
            this.root = null;
            this._rootSprite.dispose();
            this._rootSprite = null;
            this._imageEntity.dispose();
            this._imageEntity = null;
            this._imageSprite.dispose();
            this._textureSprite = this._imageSprite = null;
            this.pos.dispose();
            this.pos = null;
            this.velocity.dispose();
            this.velocity = null;
            for (var a = 0, b = this._children; a < b.length;) { var c = b[a];++a;
                c.dispose() } this._children = null
        },
        disablePointerInput: function() { this._rootSprite.disablePointer(); return this },
        enablePointerInput: function() {
            this._rootSprite.set_pointerEnabled(!0);
            return this
        },
        get_x: function() { return this.pos.x },
        set_x: function(a) { this.pos.x = a; return this.pos.x },
        get_y: function() { return this.pos.y },
        set_y: function(a) { this.pos.y = a; return this.pos.y },
        get_z: function() { return this.pos.z },
        set_z: function(a) { this.pos.z = a; return this.pos.z },
        get_scale: function() { return this.scaleX },
        set_scale: function(a) { this.scaleX = a * (0 > this.scaleX ? -1 : 1);
            this.scaleY = a * (0 > this.scaleY ? -1 : 1); return this.scaleX },
        get_depth: function() { return -this.pos.z },
        get_pointerEnabled: function() {
            return 0 !=
                (this._imageSprite._flags & 4)
        },
        set_pointerEnabled: function(a) { this._imageSprite.set_pointerEnabled(a); return this.get_pointerEnabled() },
        _determineFormat: function(a) { C.__instanceof(a, Tc) ? this._setFormat(ha.TEXTURE) : this._setFormat(ha.EMPTY) },
        _cleanOldFormat: function() { switch (this._format[1]) {
                case 0:
                    break;
                case 1:
                    this._textureSprite = null; break;
                default:
                    null } },
        _setFormat: function(a) { this._format != a && (this._cleanOldFormat(a), this._format = a) },
        setImageSprite: function(a) {
            this._determineFormat(a);
            this._imageEntity.remove(this._imageSprite);
            this._imageSprite.dispose();
            this._imageSprite = a;
            this._imageEntity.add(this._imageSprite);
            this._format == ha.TEXTURE && (this._textureSprite = this._imageSprite)
        },
        update: function(a) { for (var b = this._children.length; 0 < b--;) this._children[b].update(a), this._children[b].doDelete && (this._children[b].dispose(), this._children.splice(b, 1)) },
        updatePositionFromVelocity: function(a) { this.pos.x += this.velocity.x * a;
            this.pos.y += this.velocity.y * a },
        addElement: function(a) {
            this.root.addChild(a.root);
            this._children.push(a);
            a.parent = this;
            return a
        },
        removeElement: function(a) { this.root.removeChild(a.root); for (var b = this._children.length; 0 < b--;) this._children[b] == a && this._children.splice(b, 1);
            a.parent = null; return a },
        render: function() {
            -1 == this.width && (this.width = this._imageSprite.getNaturalWidth()); - 1 == this.height && (this.height = this._imageSprite.getNaturalHeight());
            this._imageSprite.x.set__(-(this.originX * this.width));
            this._imageSprite.y.set__(-(this.originY * this.height));
            if (!1 == this.visible) this._rootSprite.set_visible(!1);
            else {
                var a, b = a = 0,
                    c = 1;
                if (null == this.camera || !1 == this.useCamera) a = this.pos.x + this.offsetX, b = this.pos.y + this.offsetY, c = 1;
                else {
                    a = this.pos.z - this.camera.pos.z;
                    if (a < -this.camera.focalLength || !1 == this.visible) { this._rootSprite.set_visible(!1); return } c = 0 >= this.camera.focalLength ? 1 : this.camera.focalLength / (this.camera.focalLength + a);
                    a = this.camera.worldCenterX + (this.pos.x - this.camera.pos.x + this.offsetX - this.camera.worldCenterX) * c;
                    b = this.camera.worldCenterY + (this.pos.y - this.camera.pos.y + this.offsetY - this.camera.worldCenterY) *
                        c
                }
                this._rootSprite.x.set__(a);
                this._rootSprite.y.set__(b);
                this._rootSprite.scaleX.set__(this.scaleX * c);
                this._rootSprite.scaleY.set__(this.scaleY * c);
                this._rootSprite.rotation.set__(this.rotation);
                this._rootSprite.alpha.set__(this.alpha);
                this._rootSprite.set_visible(!0);
                a = 0;
                for (b = this._children; a < b.length;) c = b[a], ++a, c.render()
            }
        },
        _addEventListeners: function() {},
        _removeEventListeners: function() {},
        disableSnapping: function() { this._rootSprite.set_pixelSnapping(!1); return this },
        getNaturalWidth: function() { return this._imageSprite.getNaturalWidth() },
        getNaturalHeight: function() { return this._imageSprite.getNaturalHeight() },
        getScaledWidth: function() { return this.getNaturalWidth() * this.scaleX },
        getScaledHeight: function() { return this.getNaturalHeight() * this.scaleY },
        getHalfWidth: function(a) { null == a && (a = !1); return this.getNaturalWidth() * (a ? this.scaleX : 1) },
        getHalfHeight: function(a) { null == a && (a = !1); return this.getNaturalHeight() * (a ? this.scaleY : 1) },
        getViewMatrix: function() { return this._rootSprite.getViewMatrix() },
        __class__: x,
        __properties__: {
            set_pointerEnabled: "set_pointerEnabled",
            get_pointerEnabled: "get_pointerEnabled",
            get_depth: "get_depth",
            set_scale: "set_scale",
            get_scale: "get_scale",
            set_z: "set_z",
            get_z: "get_z",
            set_y: "set_y",
            get_y: "get_y",
            set_x: "set_x",
            get_x: "get_x"
        }
    };
    var sa = function(a, b) { null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b };
    j["flambe.math.Point"] = sa;
    sa.__name__ = ["flambe", "math", "Point"];
    sa.prototype = { __class__: sa };
    var y = function(a) {
        this.clickSound = "sbcc_sfx_select";
        null == y._scratchPoint && (y._scratchPoint = new sa);
        x.call(this, a);
        this.dispatcher = Rb.request();
        this._tween =
            a.tween;
        this._containsInput = !1;
        this._returnData = null;
        this._clearFunction = a.clear;
        this._assetUp = a.assetUp;
        null == this._assetUp && (this._assetUp = a.asset);
        this._assetOver = a.assetOver;
        this._assetDown = a.assetDown;
        this._assetDisabled = a.assetDisabled;
        this._state = ba._STATE_UP;
        this._flagDragged = !1;
        this.enable();
        this.render();
        this.setCustomHitBox(this.width, this.height);
        i.get_instance().get_input().addDelegateListener(o(this, this._onInput));
        this._buttonScaleBase = W.request(this.scaleX, this.scaleY)
    };
    j["com.workinman.display.ui.ButtonBase"] =
        y;
    y.__name__ = ["com", "workinman", "display", "ui", "ButtonBase"];
    y.__super__ = x;
    y.prototype = A(x.prototype, {
        dispose: function() { i.get_instance().get_input().removeDelegateListener(o(this, this._onInput));
            this._flagEnabled = !1;
            this._assetDisabled = this._assetDown = this._assetOver = this._assetUp = null;
            this._hitBox.dispose();
            this._tween = this._hitBox = null;
            this.dispatcher.dispose();
            this._returnData = this.dispatcher = null;
            this._buttonScaleBase.dispose();
            this._clearFunction = this._state = this._buttonScaleBase = null;
            x.prototype.dispose.call(this) },
        setDispatchData: function(a) { this._returnData = a },
        enable: function() { this._flagEnabled = !0;
            this._renderUp() },
        disable: function() { this._flagEnabled = !1;
            this._renderDisabled() },
        setCustomHitBox: function(a, b, c, e) { null == e && (e = 0);
            null == c && (c = 0); if (null == this._hitBox) { this._hitBox = new La(16711680, 8, 8); var m = new ea;
                m.add(this._hitBox);
                this._imageEntity.addChild(m);
                this._hitBox.alpha.set__(0) } this._hitBox.scaleX.set__(a / 8);
            this._hitBox.scaleY.set__(b / 8);
            this._hitBox.x.set__(c);
            this._hitBox.y.set__(e); return this },
        hitRectContains: function(a, b) { this._hitBox.getViewMatrix().inverseTransform(a, b, y._scratchPoint); return 0 <= y._scratchPoint.x && 8 >= y._scratchPoint.x && 0 <= y._scratchPoint.y && 8 >= y._scratchPoint.y },
        _onInput: function(a, b, c, e) {
            this._lastX = c;
            this._lastY = e;
            switch (b[1]) {
                case 0:
                    switch (this._containsInput = this.hitRectContains(c, e), a[1]) {
                        case 0:
                            switch (this._state[1]) {
                                case 0:
                                case 2:
                                case 3:
                                    this._containsInput && this._depthTest(c, e) && (this._state = ba._STATE_DOWN, this._onDown(c, e)) }
                            break;
                        case 2:
                            switch (this._state[1]) {
                                case 0:
                                    this._containsInput &&
                                        this._depthTest(c, e) && (this._state = ba._STATE_OVER, this._onOver());
                                    break;
                                case 2:
                                    !1 == this._containsInput && (this._state = ba._STATE_UP, this._onOut())
                            }
                            break;
                        case 1:
                            switch (this._state[1]) {
                                case 1:
                                    this._state = ba._STATE_CLICK, this._onUp(c, e) }
                    }
            }
        },
        _depthTest: function(a, b) { if (!1 == this._flagEnabled || !1 == this.visible) return !1; var c = i.get_instance().get_input().doButtonDepthTest(a, b); return null != this._hitBox && c == this._hitBox ? !0 : !1 },
        get__CUSTOM_HIT_BOX: function() { return new sa(0, 0) },
        get__DISABLE_FRAME: function() { return 1 },
        _dispatch: function(a) {!1 != this._clearFunction() && (null == this._returnData && (this._returnData = new G), this._returnData.set("button", this), this, this.dispatcher.dispatchEvent(Q.request(a, this._returnData))) },
        _click: function() {
            this._tween.tween(this, 0.1, { scaleX: 1.1 * this._buttonScaleBase.x, scaleY: 1.1 * this._buttonScaleBase.y }, !0).ease(q.QUAD_IN);
            this._tween.tween(this, 0.4, { scaleX: this._buttonScaleBase.x, scaleY: this._buttonScaleBase.y }, !1).ease(q.ELASTIC_OUT).onComplete(o(this, this._onClickComplete));
            this._playSoundClick();
            this._doClick()
        },
        _onClickComplete: function() { this._containsInput ? (this._state = ba._STATE_OVER, this._renderOver()) : this._state = ba._STATE_UP },
        _onClickTransitionComplete: function() {},
        _doClick: function() { H.sendUIInteraction(B.string(za.ui.currentScreen) + "", this._assetUp, za.ui.screenDur);
            this._dispatch(k.BUTTON_CLICK) },
        _onDown: function() { this._flagEnabled && !1 != this.visible && (this._renderDown(), this._dispatch(k.BUTTON_DOWN)) },
        _onUp: function() {
            this._flagEnabled && !1 != this.visible && (this._renderReturnUp(),
                this._flagDragged ? this._onDrop() : this._click(), this._dispatch(k.BUTTON_UP))
        },
        _onOver: function() { this._renderOver();
            this._dispatch(k.BUTTON_OVER) },
        _onOut: function() { this._flagEnabled && !1 != this.visible && (this._renderOut(), this._dispatch(k.BUTTON_OUT)) },
        _onDrag: function() { this._flagDragged = !0;
            this._dispatch(k.BUTTON_DRAG) },
        _onCancelDrag: function() { this._flagDragged = !1;
            this._dispatch(k.BUTTON_CANCEL_DRAG) },
        _onDrop: function() { this._flagDragged = !1;
            this._dispatch(k.BUTTON_DROP) },
        update: function(a) {
            x.prototype.update.call(this,
                a)
        },
        _playSoundClick: function() { i.get_instance().get_sound().playSound(this.clickSound) },
        _playSoundOver: function() {},
        setScale: function(a, b) { this._buttonScaleBase.x = a;
            this._buttonScaleBase.y = b;
            this.scaleX = this._buttonScaleBase.x;
            this.scaleY = this._buttonScaleBase.y; return this },
        _renderUp: function() {!1 != this._flagEnabled && this.setAsset(this._assetUp) },
        _renderOver: function() {!1 != this._flagEnabled && this._tween.tween(this, 0.15, { scaleX: 1.1 * this._buttonScaleBase.x, scaleY: 1.1 * this._buttonScaleBase.y }, !0).ease(q.QUAD_IN) },
        _renderOut: function() {!1 != this._flagEnabled && this._tween.tween(this, 0.5, { scaleX: this._buttonScaleBase.x, scaleY: this._buttonScaleBase.y }, !0).ease(q.ELASTIC_OUT) },
        _renderDown: function() { this._tween.tween(this, 0.15, { scaleX: 0.9 * this._buttonScaleBase.x, scaleY: 0.9 * this._buttonScaleBase.y }, !0).ease(q.QUAD_OUT);
            this.setAsset(this._assetDown) },
        _renderReturnUp: function() {
            !1 != this._flagEnabled && (this._tween.tween(this, 0.15, { scaleX: this._buttonScaleBase.x, scaleY: this._buttonScaleBase.y }, !0).ease(q.QUAD_OUT),
                this._renderUp())
        },
        _renderDisabled: function() { this.setAsset(this._assetDisabled) },
        setButtonAsset: function(a) { this._assetUp = this._assetDown = this._assetOver = this._assetDisabled = a;
            this.setAsset(this._assetUp) },
        __class__: y,
        __properties__: A(x.prototype.__properties__, { get__DISABLE_FRAME: "get__DISABLE_FRAME", get__CUSTOM_HIT_BOX: "get__CUSTOM_HIT_BOX" })
    });
    var Gd = function(a) { y.call(this, a);
        this._detail = null };
    j["com.nick.spongebob.comic_creator.ui.buttons.AvatarSelectionButton"] = Gd;
    Gd.__name__ = "com,nick,spongebob,comic_creator,ui,buttons,AvatarSelectionButton".split(",");
    Gd.__super__ = y;
    Gd.prototype = A(y.prototype, {
        dispose: function() { null != this._itemImage && (this._itemImage.doDelete = !0, this._itemImage = null);
            null != this._detail && (this._detail.doDelete = !0, this._detail = null);
            y.prototype.dispose.call(this) },
        _playSoundClick: function() { 0 != this.alpha && y.prototype._playSoundClick.call(this) },
        addItemImage: function(a) {
            null != this._detail && (this._detail.doDelete = !0, this._detail = null);
            null == this._itemImage ? (this._itemImage = this.addElement(new x({ asset: a, x: 0, y: 0, scale: 1 })), this._itemImage.disablePointerInput()) :
                (this._itemImage.alpha = 1, this._itemImage.setAsset(a));
            this._itemImage.set_scale(1);
            80 < this._itemImage.getNaturalWidth() && this._itemImage.set_scale(80 / this._itemImage.getNaturalWidth());
            80 < this._itemImage.getScaledHeight() && this._itemImage.set_scale(80 / this._itemImage.getNaturalHeight())
        },
        removeItemImage: function() { null != this._itemImage && (this._itemImage.alpha = 0) },
        tweenOutItemImage: function(a) { null != this._itemImage && a.tween(this._itemImage, 0.2, { scale: 0.65, alpha: 0 }, !1, q.QUAD_OUT, 0, "itemSelectImage") },
        tweenInItemImage: function(a) { null != this._itemImage && a.tween(this._itemImage, 0.2, { scale: 0.85, alpha: 1 }, !1, q.QUAD_IN, 0, "itemSelectImage") },
        addDetail: function(a, b, c) { this._detail = this.addElement(new x({ asset: a, x: b, y: c })) },
        __class__: Gd
    });
    var Hd = function(a) {
        y.call(this, a);
        this._assetUpOn = a.assetUp;
        this._assetOverOn = a.assetOver;
        this._assetDownOn = a.assetDown;
        this._assetDisabledOn = a.assetDisabled;
        this._assetUpOff = a.assetUpOff;
        this._assetOverOff = a.assetOverOff;
        this._assetDownOff = a.assetDownOff;
        this._assetDisabledOff =
            a.assetDisabledOff;
        this._checked = !1;
        this._refreshCheckState();
        this._renderUp()
    };
    j["com.nick.spongebob.comic_creator.ui.buttons.ButtonCheck"] = Hd;
    Hd.__name__ = "com,nick,spongebob,comic_creator,ui,buttons,ButtonCheck".split(",");
    Hd.__super__ = y;
    Hd.prototype = A(y.prototype, {
        get_checked: function() { return this._checked },
        dispose: function() { this._assetDisabledOff = this._assetDownOff = this._assetOverOff = this._assetUpOff = this._assetDisabledOn = this._assetDownOn = this._assetOverOn = this._assetUpOn = null;
            y.prototype.dispose.call(this) },
        _doClick: function() { this._flagEnabled && (this._checked = !this._checked, this._refreshCheckState(), this._renderUp()) },
        _refreshCheckState: function() { this._checked ? (this._assetUp = this._assetUpOn, this._assetOver = this._assetOverOn, this._assetDown = this._assetDownOn, this._assetDisabled = this._assetDisabledOn) : (this._assetUp = this._assetUpOff, this._assetOver = this._assetOverOff, this._assetDown = this._assetDownOff, this._assetDisabled = this._assetDisabledOff) },
        __class__: Hd,
        __properties__: A(y.prototype.__properties__, { get_checked: "get_checked" })
    });
    var Uc = function(a, b) { y.call(this, { assetUp: h.texture.universal_nav_arrow, tween: a, clear: b, y: -140 });
        this.set_x(-r.STAGE_CENTER_X + this.getScaledWidth() / 2 + 5);
        this.set_y(280 - this.getScaledHeight() / 2 - 30);
        this.addElement(new L({ text: "pause_btn", x: 0, y: 40 }));
        this._renderUp() };
    j["com.nick.spongebob.comic_creator.ui.buttons.ButtonComicExit"] = Uc;
    Uc.__name__ = "com,nick,spongebob,comic_creator,ui,buttons,ButtonComicExit".split(",");
    Uc.__super__ = y;
    Uc.prototype = A(y.prototype, {
        dispose: function() { y.prototype.dispose.call(this) },
        hide: function() { this._tween.tween(this, 0.4, { x: -r.STAGE_CENTER_X - this.getScaledWidth() }, !0, q.IN, 0, "") },
        show: function() { this._tween.tween(this, 0.4, { x: -r.STAGE_CENTER_X + this.getScaledWidth() / 2 + 5 }, !0, q.BOUNCE_OUT, 0.5, "") },
        __class__: Uc
    });
    var Id = function(a) { y.call(this, a);
        this._btnText = this.addElement(new L({ text: "copy", y: 0 }));
        this._renderUp() };
    j["com.nick.spongebob.comic_creator.ui.buttons.ButtonCopy"] = Id;
    Id.__name__ = "com,nick,spongebob,comic_creator,ui,buttons,ButtonCopy".split(",");
    Id.__super__ = y;
    Id.prototype =
        A(y.prototype, { dispose: function() { y.prototype.dispose.call(this) }, _doClick: function() { this._flagEnabled && (mg.eval("clip('" + i.get_instance().getString(n.STRING_SHARE_URL) + "'," + B.string(i.get_instance().getBool(n.BOOL_ANDROID_APP)) + "," + B.string(i.get_instance().getBool(n.BOOL_IOS_APP)) + ")"), this._btnText.swapTextToDisplay("copied"), this._renderUp()) }, __class__: Id });
    var Vc = function(a, b, c) {
        this._flipMult = c ? -1 : 1;
        y.call(this, {
            assetUp: h.texture.universal_select_arrow,
            scaleX: -this._flipMult,
            tween: a,
            clear: b,
            y: -70
        });
        this.set_x(this.get_x() + (r.STAGE_CENTER_X * this._flipMult + this.getNaturalWidth() * this._flipMult))
    };
    j["com.nick.spongebob.comic_creator.ui.buttons.ButtonPanelNav"] = Vc;
    Vc.__name__ = "com,nick,spongebob,comic_creator,ui,buttons,ButtonPanelNav".split(",");
    Vc.__super__ = y;
    Vc.prototype = A(y.prototype, {
        dispose: function() { y.prototype.dispose.call(this) },
        hide: function() {
            this._tween.tween(this, 0.3, { x: r.STAGE_CENTER_X * this._flipMult + this.getNaturalWidth() * this._flipMult }, !0, q.BUMP_IN, 0, "");
            this.disable();
            this.alpha = 0.5
        },
        show: function() { this._tween.tween(this, 0.3, { x: r.STAGE_CENTER_X * this._flipMult - this.getNaturalWidth() * this._flipMult }, !0, q.BUMP_OUT, 0.5, "");
            this.enable();
            this.alpha = 1 },
        __class__: Vc
    });
    var Lb = function(a) {
        a.asset = a.assetUp = h.texture.universal_sound_on;
        y.call(this, a);
        this._assetUpOn = this._assetOverOn = this._assetDownOn = this._assetDisabledOn = h.texture.universal_sound_on;
        this._assetUpOff = this._assetOverOff = this._assetDownOff = this._assetDisabledOff = h.texture.universal_sound_off;
        this._refreshMuteState();
        this._renderUp()
    };
    j["com.nick.spongebob.comic_creator.ui.buttons.ButtonSoundToggle"] = Lb;
    Lb.__name__ = "com,nick,spongebob,comic_creator,ui,buttons,ButtonSoundToggle".split(",");
    Lb.__super__ = y;
    Lb.prototype = A(y.prototype, {
        dispose: function() { this._assetDisabledOff = this._assetDownOff = this._assetOverOff = this._assetUpOff = this._assetDisabledOn = this._assetDownOn = this._assetOverOn = this._assetUpOn = null;
            y.prototype.dispose.call(this) },
        _doClick: function() {
            this._flagEnabled && (i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.MUTE_TOGGLE)),
                this._refreshMuteState(), this._renderUp())
        },
        _refreshMuteState: function() { i.get_instance().get_sound().get_muteAll() ? (this._assetUp = this._assetUpOff, this._assetOver = this._assetOverOff, this._assetDown = this._assetDownOff, this._assetDisabled = this._assetDisabledOff) : (this._assetUp = this._assetUpOn, this._assetOver = this._assetOverOn, this._assetDown = this._assetDownOn, this._assetDisabled = this._assetDisabledOn) },
        __class__: Lb
    });
    var vc = function(a) {
        a.asset = h.texture.universal_close;
        y.call(this, a);
        this._baseScale =
            1;
        this._flagDown = !1
    };
    j["com.nick.spongebob.comic_creator.ui.buttons.DeleteHandle"] = vc;
    vc.__name__ = "com,nick,spongebob,comic_creator,ui,buttons,DeleteHandle".split(",");
    vc.__super__ = y;
    vc.prototype = A(y.prototype, {
        dispose: function() { this._state = this._tween = null;
            y.prototype.dispose.call(this) },
        setBaseScale: function(a) { this._baseScale = a },
        update: function(a) {
            y.prototype.update.call(this, a);
            this.scaleX = 0.5 / (this.parent.scaleX * this._baseScale);
            this.scaleY = 0.5 / (this.parent.scaleY * this._baseScale);
            this._updatedDragPos = !1
        },
        containsInput: function(a, b) { return this._hitBox.contains(a, b) },
        _onInput: function(a, b, c, e, m) { y.prototype._onInput.call(this, a, b, c, e, m) },
        _onDrag: function() { this._flagDragged = !0 },
        _onDrop: function() { this._flagDragged = !1 },
        _renderOver: function() {},
        _renderOut: function() {},
        _renderDown: function() { this.setAsset(this._assetDown) },
        _renderReturnUp: function() { this._flagDragged = !1 },
        _click: function() {
            this._onClickComplete();
            this._playSoundClick();
            this._doClick();
            this.parent.doDelete = !0;
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM,
                function(a) { var b = new G;
                    b.set("elem", a.parent); return b }(this)))
        },
        __class__: vc
    });
    var wc = function(a) { a.asset = h.texture.rotate;
        y.call(this, a);
        this._baseScale = 1;
        this._scratchPoint = W.request() };
    j["com.nick.spongebob.comic_creator.ui.buttons.RotHandle"] = wc;
    wc.__name__ = "com,nick,spongebob,comic_creator,ui,buttons,RotHandle".split(",");
    wc.__super__ = y;
    wc.prototype = A(y.prototype, {
        dispose: function() {
            this._state = this._tween = null;
            null != this._scratchPoint && this._scratchPoint.destroy();
            this._scratchPoint = null;
            y.prototype.dispose.call(this)
        },
        setBaseScale: function(a) { this._baseScale = a },
        update: function(a) { y.prototype.update.call(this, a);
            this.scaleX = 0.25 / (this.parent.scaleX * this._baseScale);
            this.scaleY = 0.25 / (this.parent.scaleY * this._baseScale);
            this.scaleX = 0 < this.parent.scaleX ? -1 * this.scaleX : Math.abs(this.scaleX);
            this._updatedDragPos = !1 },
        containsInput: function(a, b) { return this._hitBox.contains(a, b) },
        _onInput: function(a, b, c, e, m) {
            y.prototype._onInput.call(this, a, b, c, e, m);
            switch (b[1]) {
                case 0:
                    switch (a[1]) {
                        case 2:
                            if ((this._state ==
                                    ba._STATE_DOWN || this._flagDragged) && !1 == this._updatedDragPos) this._updatedDragPos = this._flagDragged = !0, a = new sa, this.parent.render(), this.parent.update(0), this.parent.parent.getViewMatrix().inverseTransform(c, e, a), this.parent.rotation = lb.toDegrees(Math.atan2(this.parent.get_y() - a.y, this.parent.get_x() - a.x)), 0 > this.parent.scaleX && (this.parent.rotation += 180)
                    }
            }
        },
        _onDrag: function() { this._flagDragged = !0 },
        _onDrop: function() { this._flagDragged = !1 },
        _renderOver: function() {},
        _renderOut: function() {},
        _renderDown: function() { this.setAsset(this._assetDown) },
        _renderReturnUp: function() { this._flagDragged = !1 },
        _click: function() { this._onClickComplete();
            this._playSoundClick();
            this._doClick() },
        __class__: wc
    });
    var xc = function(a) { a.asset = h.texture.scale;
        y.call(this, a);
        this._baseScale = 1;
        this._scratchPoint = W.request() };
    j["com.nick.spongebob.comic_creator.ui.buttons.ScaleHandle"] = xc;
    xc.__name__ = "com,nick,spongebob,comic_creator,ui,buttons,ScaleHandle".split(",");
    xc.__super__ = y;
    xc.prototype = A(y.prototype, {
        dispose: function() {
            this._state = this._tween = null;
            null != this._scratchPoint &&
                this._scratchPoint.destroy();
            this._scratchPoint = null;
            y.prototype.dispose.call(this)
        },
        setBaseScale: function(a) { this._baseScale = a },
        update: function(a) { y.prototype.update.call(this, a);
            this.scaleX = 0.25 / (this.parent.scaleX * this._baseScale);
            this.scaleY = 0.25 / (this.parent.scaleY * this._baseScale);
            this._updatedDragPos = !1 },
        containsInput: function(a, b) { return this._hitBox.contains(a, b) },
        _onInput: function(a, b, c, e, m) {
            y.prototype._onInput.call(this, a, b, c, e, m);
            switch (b[1]) {
                case 0:
                    switch (a[1]) {
                        case 2:
                            if ((this._state ==
                                    ba._STATE_DOWN || this._flagDragged) && !1 == this._updatedDragPos) this._updatedDragPos = this._flagDragged = !0, this.parent.OnScaleElem(c, e)
                    }
            }
        },
        _onDrag: function() { this._flagDragged = !0 },
        _onDrop: function() { this._flagDragged = !1 },
        _renderOver: function() {},
        _renderOut: function() {},
        _renderDown: function() { this.setAsset(this._assetDown) },
        _renderReturnUp: function() { this._flagDragged = !1 },
        _click: function() { this._onClickComplete();
            this._playSoundClick();
            this._doClick() },
        __class__: xc
    });
    var hb = function(a) {
        this._flagLocked = !1;
        this._tween = a.tween;
        x.call(this, a)
    };
    j["com.workinman.display.ui.Display"] = hb;
    hb.__name__ = ["com", "workinman", "display", "ui", "Display"];
    hb.__super__ = x;
    hb.prototype = A(x.prototype, {
        _addEventListeners: function() { x.prototype._addEventListeners.call(this);
            i.get_instance().get_dispatcher().addEventListener(k.UPDATE_DISPLAY, o(this, this._onUpdateDisplay)) },
        _removeEventListeners: function() {
            x.prototype._removeEventListeners.call(this);
            i.get_instance().get_dispatcher().removeEventListener(k.UPDATE_DISPLAY,
                o(this, this._onUpdateDisplay))
        },
        _onUpdateDisplay: function(a) { this._flagLocked || a.get_data().get("val") == this._updateValue() && this._refresh() },
        _refresh: function() {},
        _updateValue: function() { return null },
        dispose: function() { this._tween = null;
            x.prototype.dispose.call(this) },
        lock: function() { this._flagLocked = !0 },
        unlock: function() { this._flagLocked = !1 },
        __class__: hb
    });
    var yc = function(a) {
        this._BAR_COLOR = 5592405;
        this._BAR_HEIGHT = 40;
        this._BAR_WIDTH = 190;
        this._ROT = 250;
        this._DELAY = 0.5;
        hb.call(this, a);
        this._active = !1;
        this._scale = 1;
        a = new La(0, this._BAR_WIDTH * this._scale, this._BAR_HEIGHT * this._scale);
        a.x.set__(-this._BAR_WIDTH * this._scale / 2 + 5);
        a.y.set__(-this._BAR_HEIGHT * this._scale / 2 + 2);
        a.alpha.set__(0.5);
        this._loadMin = -1;
        this.root.addChild((new ea).add(a));
        this.addElement(new x({ asset: h.texture.loader_bg, scale: this._scale }));
        a = this._bar = this.addElement(new x({ asset: h.texture.loader_fill, scale: this._scale, originX: 0, x: 5, y: 2 }));
        a.set_x(a.get_x() - this._BAR_WIDTH / 2);
        this._bar.scaleY = this._BAR_HEIGHT / 45;
        this.addElement(new L({ text: h.localization.loading }));
        a = i.get_instance().get_localize().getLocalizeData(h.localization.loading);
        this._text = this.addElement(new pa({ text: "this test text", font: a.get_fontName(), scale: a.get_scale(), y: 30 }));
        this.alpha = 0;
        i.get_instance().setFloat(n.FLOAT_LOADING_PROGRESS, 0);
        this._refresh()
    };
    j["com.nick.spongebob.comic_creator.ui.display.DisplayLoadingProgress"] = yc;
    yc.__name__ = "com,nick,spongebob,comic_creator,ui,display,DisplayLoadingProgress".split(",");
    yc.__super__ = hb;
    yc.prototype = A(hb.prototype, {
        dispose: function() {
            this._text =
                this._bar = this._spinner = null;
            hb.prototype.dispose.call(this)
        },
        get_active: function() { return this._active },
        update: function(a) { hb.prototype.update.call(this, a) },
        tweenIn: function(a) { this._active || (a && (this._loadMin = 0), i.get_instance().setFloat(n.FLOAT_LOADING_PROGRESS, 0), K.easeBounceIn(this, this._tween), this._active = !0) },
        tweenOut: function() {!1 != this._active && (K.easeBounceOut(this, this._tween), i.get_instance().setFloat(n.FLOAT_LOADING_PROGRESS, 0), this._active = !1) },
        _refresh: function() {
            this._loadMin = lb.clamp(lb.max(this._loadMin,
                i.get_instance().getFloat(this._updateValue())), 0, 1);
            this._bar.scaleX = this._loadMin * this._BAR_WIDTH / 45;
            this._text.set_text(Math.floor(100 * this._loadMin) + "%")
        },
        _updateValue: function() { return n.FLOAT_LOADING_PROGRESS },
        __class__: yc,
        __properties__: A(hb.prototype.__properties__, { get_active: "get_active" })
    });
    var Jd = function(a) {
        hb.call(this, a);
        this._score = i.get_instance().getInt(this._updateValue());
        a = i.get_instance().get_localize().getLocalizeData(h.localization.score);
        this._textNum = this.addElement(new pa({
            text: B.string(this._score),
            scale: a.get_scale(),
            font: a.get_fontName()
        }));
        this._refresh()
    };
    j["com.nick.spongebob.comic_creator.ui.display.DisplayPanelNum"] = Jd;
    Jd.__name__ = "com,nick,spongebob,comic_creator,ui,display,DisplayPanelNum".split(",");
    Jd.__super__ = hb;
    Jd.prototype = A(hb.prototype, {
        dispose: function() { this._text = this._textNum = null;
            hb.prototype.dispose.call(this) },
        _refresh: function() {
            var a = i.get_instance().get_localize().getLocalizeData(h.localization.score);
            this._score = i.get_instance().getInt(this._updateValue());
            this._textNum.set_text(a.get_string() +
                ": " + B.string(this._score + 1) + "/" + B.string(i.get_instance().getInt(n.INT_PANEL_NUM)));
            i.get_instance().setInt(n.INT_HEALTH, 10);
            K.easeBounceIn(this, this._tween, !1)
        },
        _updateValue: function() { return n.INT_PANEL_INDEX },
        __class__: Jd
    });
    var Sb = function(a, b, c) { x.call(this, c);
        this._tween = a;
        this._type = b;
        this._items = [];
        this._totalPages = this._currPage = 1 };
    j["com.nick.spongebob.comic_creator.ui.elements.AvatarTab"] = Sb;
    Sb.__name__ = "com,nick,spongebob,comic_creator,ui,elements,AvatarTab".split(",");
    Sb.__super__ = x;
    Sb.prototype = A(x.prototype, {
        dispose: function() { this._items = this._btnOverlay = this._type = this._tween = null;
            x.prototype.dispose.call(this) },
        update: function(a) { x.prototype.update.call(this, a) },
        addBtnOverlay: function(a, b, c) { null == this._btnOverlay && (this._btnOverlay = this.addElement(new x({ asset: a, x: b, y: c })), this._btnOverlay.set_pointerEnabled(!1)) },
        addItemsToTab: function(a) { for (var b = 0; b < a.length;) this._items.push(a[b]), b++;
            this._totalPages = Math.ceil(this._items.length / 6); return this },
        clearItems: function() {
            this._items = [];
            this._currPage = this._totalPages = 1
        },
        showTab: function() { this.alpha = 1 },
        hideTab: function() { this.alpha = 0 },
        backPage: function() { if (1 >= this._currPage) return !1;
            this._currPage--; return !0 },
        nextPage: function() { if (this._currPage >= this._totalPages) return !1;
            this._currPage++; return !0 },
        get_type: function() { return this._type },
        get_items: function() { return this._items },
        get_currPage: function() { return this._currPage },
        get_totalPages: function() { return this._totalPages },
        __class__: Sb,
        __properties__: A(x.prototype.__properties__, { get_totalPages: "get_totalPages", get_currPage: "get_currPage", get_items: "get_items", get_type: "get_type" })
    });
    var D = function(a, b) {
        this.id = a;
        this.root = new ea;
        b.addChild(this.root);
        this._flowDelegate = null;
        this._elementManager = new Kd(this.root, r.STAGE_CENTER_X, 280, !0, Aa.z__MAINUI);
        this.isOnTop = !1;
        this._useClickWall() && (this._clickWall = new ea, this._clickFill = new La(16711680, 8, 8), this._clickFill.scaleX.set__((r.STAGE_WIDTH + 10) / 8), this._clickFill.scaleY.set__(71.25), this._clickFill.alpha.set__(0), this._clickFill.anchorX.set__(4),
            this._clickFill.anchorY.set__(4), this._clickWall.add(this._clickFill), this._elementManager.get_root().addChild(this._clickWall));
        this._elementManager.addLayer(Aa.z__MAINUI, !1);
        this._tween = Xa.request();
        this._buildScreen();
        this._flagStateAnimationComplete = this._flagStateCompleteTemp = this.flagDispose = !1;
        this._states = [];
        this._generateStates();
        this._stateIndex = this._states.length + 2;
        this._setFirstState();
        this._addEventListeners()
    };
    j["com.workinman.display.ui.ScreenBase"] = D;
    D.__name__ = ["com", "workinman",
        "display", "ui", "ScreenBase"
    ];
    D.prototype = {
        dispose: function() { this._useClickWall() && (this._clickWall.dispose(), this._clickWall = null, this._clickFill.dispose(), this._clickFill = null);
            this._removeEventListeners();
            this._elementManager.dispose();
            this._elementManager = null;
            this.root.parent.removeChild(this.root);
            this.id = this._states = this.root = null;
            this._tween.dispose();
            this._flowDelegate = this._tween = null },
        set_flowDelegate: function(a) { return this._flowDelegate = a },
        setFlagDispose: function() {
            this.flagDispose = !0
        },
        _useClickWall: function() { return !0 },
        _setFirstState: function() { this._setState(T.IN) },
        _setInState: function() { this._finishOpenState() },
        _setCloseState: function() { this.setFlagDispose() },
        _setOpenedState: function() { this._setState(T.OPENED) },
        _generateStates: function() { this._addState(T.IN, "in", ib.ACTION_OPENED);
            this._addState(T.OUT, "out", ib.ACTION_CLOSED);
            this._addState(T.OPENED, "open");
            this._addState(T.SUSPENDED, "suspend") },
        _buildScreen: function() {},
        update: function(a) {
            this._tween.update(a);
            this._elementManager.updateElements(a);
            this._flagStateCompleteTemp && this._onStateComplete()
        },
        _handleInput: function(a, b, c, e, m) {!1 != this._clearInput() && this._onInput(a, b, c, e, m) },
        _onInput: function() {},
        reset: function() { this._setFirstState() },
        open: function(a) { null == a && (a = !0);
            a ? (this.get_state() != T.IN && this._setState(T.IN), this._setInState()) : this._finishOpenState() },
        _finishOpenState: function() { this._setOpenedState();
            this._flowDelegate(Ya.OPENED, this.id) },
        suspend: function() { this._setState(T.SUSPENDED) },
        close: function(a) {
            null == a && (a = !0);
            this.get_state() !=
                T.OUT && (this._setState(T.OUT), a ? this._setCloseState() : (this.setFlagDispose(), this._flowDelegate(Ya.CLOSED, this.id)))
        },
        enable: function() {},
        disable: function() {},
        isOpening: function() { return this.get_state() == T.IN },
        isClosing: function() { return this.get_state() == T.OUT },
        _addState: function(a, b, c, e, m, d) { null == c && (c = 0);
            this._states.push(new ib(a, b, c, e, m, d)) },
        _setState: function(a, b) {
            null == b && (b = !1);
            var c = this._findStateIndex(a);
            0 > c || !b && c == this._stateIndex || (this._flagStateAnimationComplete = this._flagStateCompleteTemp = !1, this._stateIndex = c, null != this._states[this._stateIndex].inFunc && this._states[this._stateIndex].inFunc())
        },
        get_state: function() { return this._states[this._stateIndex].id },
        _findStateIndex: function(a) { for (var b = this._states.length - 1; 0 <= b;) { if (this._states[b].id == a) return b;
                b-- } return -1 },
        _handleResizeCanvas: function() { this._clickFill.scaleX.set__((r.STAGE_WIDTH + 10) / 8);
            this._clickFill.scaleY.set__(71.25);
            this._onEventResizeCanvas() },
        _onEventResizeCanvas: function() {},
        _addEventListeners: function() {
            i.get_instance().get_dispatcher().addEventListener(k.RESIZE_CANVAS,
                o(this, this._handleResizeCanvas));
            i.get_instance().get_input().addDelegateListener(o(this, this._handleInput))
        },
        _removeEventListeners: function() { i.get_instance().get_dispatcher().removeEventListener(k.RESIZE_CANVAS, o(this, this._handleResizeCanvas));
            i.get_instance().get_input().removeDelegateListener(o(this, this._handleInput)) },
        _onStateComplete: function() {
            this._flagStateCompleteTemp = !1;
            null != this._states[this._stateIndex].outFunc && this._states[this._stateIndex].outFunc();
            this._states[this._stateIndex].actionOnComplete !=
                ib.ACTION_STOP && (this._states[this._stateIndex].actionOnComplete == ib.ACTION_OPENED ? (this._setOpenedState(), this._flowDelegate(Ya.OPENED, this.id)) : this._states[this._stateIndex].actionOnComplete == ib.ACTION_CLOSED ? (this.setFlagDispose(), this._flowDelegate(Ya.CLOSED, this.id)) : this._states[this._stateIndex].actionOnComplete == ib.ACTION_FLOW && r.dispatchFlowEvent(this._states[this._stateIndex].actionData))
        },
        _clearInput: function() { return this.get_state() != T.OPENED ? !1 : !0 },
        _clearButtonInput: function() {
            return this.get_state() !=
                T.OPENED ? !1 : !0
        },
        __class__: D,
        __properties__: { get_state: "get_state", set_flowDelegate: "set_flowDelegate" }
    };
    var wd = function(a, b) {
        this._LIFETIME = 3;
        D.call(this, a, b);
        this._tray = this._elementManager.addElement(new x({ asset: h.texture.white, x: r.STAGE_CENTER_X - 220, y: 200 }));
        var c = i.get_instance().get_achievements().get_lastAchievedId();
        this._tray.addElement(new x({ asset: "achievement_icon_" + c, x: -150 }));
        this._tray.addElement(new L({ text: h.localization.achievement_unlocked, x: -100, y: -15 }));
        this._tray.addElement(new L({
            text: "achievement_name_" +
                c,
            x: -100,
            y: 15
        }));
        this._tray.alpha = 0;
        this._timer = this._LIFETIME
    };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenAchievementPopup"] = wd;
    wd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenAchievementPopup".split(",");
    wd.__super__ = D;
    wd.prototype = A(D.prototype, {
        _useClickWall: function() { return !1 },
        dispose: function() { this._tray = null;
            D.prototype.dispose.call(this) },
        update: function(a) { D.prototype.update.call(this, a); switch (this.get_state()[1]) {
                case 2:
                    this._timer -= a, 0 >= this._timer && r.dispatchFlowEvent(l.ACHIEVEMENT_POPUP_CLOSE) } },
        _setInState: function() { var a = this;
            K.easeSlideInFromDir(this._tray, this._tween, R.BOTTOM).onComplete(function() { a._finishOpenState() }) },
        _setCloseState: function() { var a = this;
            K.easeSlideOutToDir(this._tray, this._tween, R.BOTTOM).onComplete(function() { a.setFlagDispose() }) },
        __class__: wd
    });
    var xd = function(a, b) {
        D.call(this, a, b);
        this._tray = this._elementManager.addElement(new x({ asset: h.texture.blank }));
        this._rectVisible = Ra.request(-r.STAGE_CENTER_X + 100, -140, 700, 350);
        this._scrollDy = 80;
        this._list = [];
        for (var c =
                i.get_instance().get_achievements().getAchievements(), e = 0, m = c.length; e < m;) {
            var d = e++;
            this._list.push(this._tray.addElement(new x({ asset: h.texture.white, x: 0, y: this._rectVisible.get_y() + d * this._scrollDy })));
            this._list[this._list.length - 1].addElement(new L({ text: i.get_instance().get_achievements().getLocalizationNameID(c[d]), y: -15 }));
            this._list[this._list.length - 1].addElement(new L({ text: i.get_instance().get_achievements().getLocalizationDescID(c[d]), y: 15 }));
            i.get_instance().get_achievements().getAchieved(c[d]) ?
                this._list[this._list.length - 1].addElement(new x({ asset: i.get_instance().get_achievements().getIcon(c[d]), x: -220 })) : this._list[this._list.length - 1].addElement(new x({ asset: h.texture.white, x: -220 }));
            this._list[this._list.length - 1].addElement(new x({ asset: h.texture.white, x: 220 }));
            this._list[this._list.length - 1].addElement(new pa({ text: B.string(i.get_instance().get_achievements().getPoints(c[d])), x: 220, scale: 0.5 }))
        }
        c = 0;
        for (e = this._list; c < e.length;) m = e[c], ++c, m.alpha = m.pos.y + m.height < this._rectVisible.get_y() ?
            0 : m.pos.y > this._rectVisible.get_y() + this._rectVisible.get_height() ? 0 : 1;
        this._tray.alpha = 0;
        this._tray.addElement(this._buttonUp = new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.white, x: -r.STAGE_CENTER_X + 70, y: -140 })).dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventUpClick));
        this._tray.addElement(this._buttonDown = new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.white, x: -r.STAGE_CENTER_X + 70, y: 180 })).dispatcher.addEventListener(k.BUTTON_CLICK,
            o(this, this._onEventDownClick));
        this._tray.addElement(this._buttonExit = new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.white, x: r.STAGE_CENTER_X - 40, y: -240 })).dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventExitClick));
        this._buttonUp.setScale(0.5, 0.5);
        this._buttonDown.setScale(0.5, 0.5);
        this._buttonExit.setScale(0.5, 0.5);
        this._buttonUp.rotation = -90;
        this._buttonDown.rotation = 90;
        this._checkButtons()
    };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenAchievements"] =
        xd;
    xd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenAchievements".split(",");
    xd.__super__ = D;
    xd.prototype = A(D.prototype, {
        dispose: function() { this._list = this._buttonExit = this._buttonDown = this._buttonUp = this._tray = null;
            this._rectVisible.dispose();
            this._rectVisible = null;
            D.prototype.dispose.call(this) },
        _onEventResizeCanvas: function() { this._buttonUp.pos.x = -r.STAGE_CENTER_X + 70;
            this._buttonDown.pos.x = -r.STAGE_CENTER_X + 70;
            this._buttonExit.pos.x = r.STAGE_CENTER_X - 40 },
        _setInState: function() {
            K.easeSlideInFromDir(this._tray,
                this._tween, R.TOP).onComplete(o(this, this._finishOpenState))
        },
        _setCloseState: function() { K.easeSlideOutToDir(this._tray, this._tween, R.BOTTOM).onComplete(o(this, this.setFlagDispose)) },
        _checkButtons: function() { 2 > Math.abs(this._list[0].pos.y - this._rectVisible.get_y()) ? this._buttonUp.disable() : this._buttonUp.enable();
            this._list[this._list.length - 1].pos.y < this._rectVisible.get_y() + this._rectVisible.get_height() ? this._buttonDown.disable() : this._buttonDown.enable() },
        _onEventUpClick: function() {
            var a = this;
            if (this._list[0].pos.y != this._rectVisible.get_y()) {
                this._buttonUp.disable();
                this._buttonDown.disable();
                for (var b = 0, c = this._list.length; b < c;) {
                    var e = b++;
                    if (e == this._list.length - 1) this._tween.tween(this._list[e].pos, 0.5, { y: this._list[e].pos.y + this._scrollDy }, !1, q.OUT).onComplete(function() { a._checkButtons() });
                    else this._tween.tween(this._list[e].pos, 0.5, { y: this._list[e].pos.y + this._scrollDy }, !1, q.OUT);
                    this._list[e].pos.y + this._list[e].getNaturalHeight() >= this._rectVisible.get_y() + this._rectVisible.get_height() ?
                        this._tween.tween(this._list[e], 0.25, { alpha: 0 }, !1, q.OUT) : this._list[e].pos.y + this._scrollDy >= this._rectVisible.get_y() && this._tween.tween(this._list[e], 0.25, { alpha: 1 }, !1, q.OUT)
                }
            }
        },
        _onEventDownClick: function() {
            var a = this;
            if (!(this._list[this._list.length - 1].pos.y < this._rectVisible.get_y() + this._rectVisible.get_height())) {
                this._buttonUp.disable();
                this._buttonDown.disable();
                for (var b = 0, c = this._list.length; b < c;) {
                    var e = b++;
                    if (e == this._list.length - 1) this._tween.tween(this._list[e].pos, 0.5, {
                        y: this._list[e].pos.y -
                            this._scrollDy
                    }, !1, q.OUT).onComplete(function() { a._checkButtons() });
                    else this._tween.tween(this._list[e].pos, 0.5, { y: this._list[e].pos.y - this._scrollDy }, !1, q.OUT);
                    this._list[e].pos.y <= this._rectVisible.get_y() ? this._tween.tween(this._list[e], 0.25, { alpha: 0 }, !1, q.OUT) : this._list[e].pos.y - this._scrollDy <= this._rectVisible.get_y() + this._rectVisible.get_height() && this._tween.tween(this._list[e], 0.25, { alpha: 1 }, !1, q.OUT)
                }
            }
        },
        _onEventExitClick: function() { r.dispatchFlowEvent(l.ACHIEVEMENT_CLOSE) },
        __class__: xd
    });
    var ca = j["com.nick.spongebob.comic_creator.ui.screens.SELECT_TAB"] = { __ename__: "com,nick,spongebob,comic_creator,ui,screens,SELECT_TAB".split(","), __constructs__: ["BODY_TAB", "FACE_TAB", "HAIR_TAB", "CLOTHES_TAB", "ACCESSORIES_TAB"] };
    ca.BODY_TAB = ["BODY_TAB", 0];
    ca.BODY_TAB.toString = g;
    ca.BODY_TAB.__enum__ = ca;
    ca.FACE_TAB = ["FACE_TAB", 1];
    ca.FACE_TAB.toString = g;
    ca.FACE_TAB.__enum__ = ca;
    ca.HAIR_TAB = ["HAIR_TAB", 2];
    ca.HAIR_TAB.toString = g;
    ca.HAIR_TAB.__enum__ = ca;
    ca.CLOTHES_TAB = ["CLOTHES_TAB", 3];
    ca.CLOTHES_TAB.toString =
        g;
    ca.CLOTHES_TAB.__enum__ = ca;
    ca.ACCESSORIES_TAB = ["ACCESSORIES_TAB", 4];
    ca.ACCESSORIES_TAB.toString = g;
    ca.ACCESSORIES_TAB.__enum__ = ca;
    ca.__empty_constructs__ = [ca.BODY_TAB, ca.FACE_TAB, ca.HAIR_TAB, ca.CLOTHES_TAB, ca.ACCESSORIES_TAB];
    var rd = function(a, b) { this._GRID_OFFSET_Y = 110;
        this._GRID_OFFSET_X = 145;
        this._GRID_START_Y = -120;
        this._GRID_START_X = -75;
        D.call(this, a, b) };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenAvatarBuilder"] = rd;
    rd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenAvatarBuilder".split(",");
    rd.__super__ = D;
    rd.prototype = A(D.prototype, {
        _buildScreen: function() {
            this._bg = this._elementManager.addElement(new x({ asset: h.texture.avatar_creator_bg }));
            this._bg.set_scale(1 / this._bg.getNaturalWidth() * r.STAGE_WIDTH);
            560 * (1 / this._bg.getNaturalHeight()) > this._bg.get_scale() && this._bg.set_scale(560 * (1 / this._bg.getNaturalHeight()));
            this._tray = this._elementManager.addElement(new x({ alpha: 1 }));
            var a;
            a = i.get_instance().getInt(n.INT_CURRENT_AVATAR);
            a = ra.get_instance().avatars.get(a);
            this._traySelection = this._tray.addElement(new x({
                x: -150,
                y: 0,
                alpha: 0
            }));
            this._trayAvatar = this._tray.addElement(new x({ x: 175, y: 0, alpha: 0 }));
            this._btnComic = this._tray.addElement(new y({ assetUp: h.texture.universal_nav_arrow, x: r.STAGE_CENTER_X - 60, y: 210, scaleY: 0.75, scaleX: -0.75, alpha: 0, tween: this._tween, clear: o(this, this._clearButtonInput) }));
            this._btnComic.setScale(-0.75, 0.75);
            var b = this._btnComic.addElement(new L({ text: "temp_comic", x: -2, y: 40 }));
            b.scaleX *= -1;
            this._btnComic.disable();
            this._btnComic.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventComicClicked));
            i.get_instance().getBool(n.BOOL_FLOW_AVATAR_FROM_COMIC) || (this._btnClose = this._tray.addElement(new y({ assetUp: h.texture.universal_nav_arrow, x: -r.STAGE_CENTER_X + 60, y: 210, scale: 0.75, alpha: 0, tween: this._tween, clear: o(this, this._clearButtonInput) })), this._btnClose.setScale(0.75, 0.75), this._btnClose.addElement(new L({ text: "temp_save", x: -2, y: 40 })), this._btnClose.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventCloseClicked)), this._btnClose.disable());
            this._traySelection.addElement(new x({
                asset: h.texture.avatar_creator_panel2,
                x: 0,
                y: -25
            }));
            this._backingSelection = this._traySelection.addElement(new x({ x: 0, y: -210 }));
            this._selectionName = this._backingSelection.addElement(new L({ text: "selection_body", x: 0, y: -2 }));
            this._btnTabBody = this._traySelection.addElement(new y({ assetUp: h.texture.btn_avatar_body, x: -170, y: -200, tween: this._tween, clear: o(this, this._clearButtonInput) }));
            this._btnTabBody.setDispatchData(function() { var a = new G;
                a.set("tab", ca.BODY_TAB); return a }(this));
            this._btnTabBody.dispatcher.addEventListener(k.BUTTON_CLICK,
                o(this, this._onEventTabClicked));
            this._btnTabFace = this._traySelection.addElement(new y({ asset: h.texture.btn_avatar_face, x: -190, y: -110, tween: this._tween, clear: o(this, this._clearButtonInput) }));
            this._btnTabFace.setDispatchData(function() { var a = new G;
                a.set("tab", ca.FACE_TAB); return a }(this));
            this._btnTabFace.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventTabClicked));
            this._btnTabHair = this._traySelection.addElement(new y({
                asset: h.texture.btn_avatar_hair,
                x: -190,
                y: -30,
                tween: this._tween,
                clear: o(this, this._clearButtonInput)
            }));
            this._btnTabHair.setDispatchData(function() { var a = new G;
                a.set("tab", ca.HAIR_TAB); return a }(this));
            this._btnTabHair.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventTabClicked));
            this._btnTabClothes = this._traySelection.addElement(new y({ asset: h.texture.btn_avatar_shirt, x: -190, y: 55, tween: this._tween, clear: o(this, this._clearButtonInput) }));
            this._btnTabClothes.setDispatchData(function() { var a = new G;
                a.set("tab", ca.CLOTHES_TAB); return a }(this));
            this._btnTabClothes.dispatcher.addEventListener(k.BUTTON_CLICK,
                o(this, this._onEventTabClicked));
            this._btnTabAccessories = this._traySelection.addElement(new y({ asset: h.texture.btn_avatar_mask, x: -190, y: 140, tween: this._tween, clear: o(this, this._clearButtonInput) }));
            this._btnTabAccessories.setDispatchData(function() { var a = new G;
                a.set("tab", ca.ACCESSORIES_TAB); return a }(this));
            this._btnTabAccessories.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventTabClicked));
            this._tabs = [];
            b = this._traySelection.addElement(new Sb(this._tween, ca.BODY_TAB, { x: 0, y: 0 }));
            b.addItemsToTab(xa.get_instance().getItemsForSlot(p.SKIN));
            this._tabs.push(b);
            b = this._traySelection.addElement(new Sb(this._tween, ca.FACE_TAB, { x: 0, y: 0 }));
            b.addItemsToTab(xa.get_instance().getItemsForSlot(p.FACE)).addItemsToTab(xa.get_instance().getItemsForSlot(p.EYE)).addItemsToTab(xa.get_instance().getItemsForSlot(p.NOSE)).addItemsToTab(xa.get_instance().getItemsForSlot(p.MOUTH));
            this._tabs.push(b);
            b = this._traySelection.addElement(new Sb(this._tween, ca.HAIR_TAB, { x: 0, y: 0 }));
            b.addItemsToTab(xa.get_instance().getItemsForSlot(p.HAIR));
            this._tabs.push(b);
            b = this._traySelection.addElement(new Sb(this._tween,
                ca.CLOTHES_TAB, { x: 0, y: 0 }));
            b.addItemsToTab(xa.get_instance().getItemsForSlot(p.TOP)).addItemsToTab(xa.get_instance().getItemsForSlot(p.BOTTOM)).addItemsToTab(xa.get_instance().getItemsForSlot(p.BOOTS));
            this._tabs.push(b);
            b = this._traySelection.addElement(new Sb(this._tween, ca.ACCESSORIES_TAB, { x: 0, y: 0 }));
            b.addItemsToTab(xa.get_instance().getPowerItems()).addItemsToTab(xa.get_instance().getItemsForSlot(p.MASK));
            this._tabs.push(b);
            b = null;
            this._itemBoxes = [];
            for (var c = 1, b = this._GRID_START_X, e = this._GRID_START_Y; 6 >=
                c;) { var m = this._traySelection.addElement(new Gd({ assetUp: h.texture.avatar_creator_selection, x: b, y: e, tween: this._tween, clear: o(this, this._clearButtonInput) }));
                m.setDispatchData(function() { var a = new G;
                    a.set("buttonIndex", c - 1); return a }(this));
                m.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventItemButtonClick));
                this._itemBoxes.push(m);
                b += this._GRID_OFFSET_X;
                0 == c % 2 && (b = this._GRID_START_X, e += this._GRID_OFFSET_Y);
                c++ } this._trayAvatar.addElement(new x({
                asset: h.texture.avatar_creator_panel1,
                x: 0,
                y: -10
            }));
            this._btnName = this._trayAvatar.addElement(new y({ assetUp: h.texture.blank, x: 0, y: -220, tween: this._tween, clear: o(this, this._clearButtonInput) }));
            this._btnName.setCustomHitBox(280, 45, -140, -22);
            b = this._btnName.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), asset: h.texture.universal_select_arrow, x: -70, y: 5, scale: 0.5 }));
            b.setDispatchData(function() { var a = new G;
                a.set("index", -1); return a }(this));
            b.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventNameClicked));
            b = this._btnName.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), asset: h.texture.universal_select_arrow, x: 70, y: 5, scaleX: -0.5, scaleY: 0.5 }));
            b.setDispatchData(function() { var a = new G;
                a.set("index", 1); return a }(this));
            b.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventNameClicked));
            this._name = this._btnName.addElement(new pa({ text: "", x: 0, y: 5, scale: 0.4, font: "font_white" }));
            this._btnRandomize = this._trayAvatar.addElement(new y({
                assetUp: h.texture.btn_random,
                x: 145,
                y: -110,
                alpha: 0,
                tween: this._tween,
                clear: o(this, this._clearButtonInput),
                scale: 0.75
            }));
            this._btnRandomize.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onRandomizeClicked));
            i.get_instance().getBool(n.BOOL_APP) || (this._btnShare = this._trayAvatar.addElement(new y({ assetUp: h.texture.btn_share, x: 145, y: -30, alpha: 0, tween: this._tween, clear: o(this, this._clearButtonInput), scale: 0.75 })), this._btnShare.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onShareClicked)));
            i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) ||
                (this._btnDownload = this._trayAvatar.addElement(new y({ assetUp: h.texture.btn_download, x: 145, y: 50, alpha: 0, tween: this._tween, clear: o(this, this._clearButtonInput), scale: 0.75 })), this._btnDownload.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onDownloadClicked)));
            i.get_instance().getBool(n.BOOL_ALLOW_SUBMIT) && (this._btnSubmit = this._trayAvatar.addElement(new y({ assetUp: h.texture.btn_avatar_submit, x: 5, y: 210, alpha: 0, tween: this._tween, clear: o(this, this._clearButtonInput) })), this._btnSubmit.addElement(new L({
                text: "submit_to_nick",
                x: 0,
                y: 0,
                scale: 1
            })), this._btnSubmit.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onSubmitClicked)));
            i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) || (this._btnPrint = this._trayAvatar.addElement(new y({ assetUp: h.texture.btn_print, x: 145, y: 130, alpha: 0, tween: this._tween, clear: o(this, this._clearButtonInput), scale: 0.75 })), this._btnPrint.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onPrintClicked)));
            this._avatar = this._trayAvatar.addElement(new bc({ y: 170, scale: 0.45 }));
            this._avatar.disablePointerInput();
            if (!0 == i.get_instance().getBool(n.BOOL_LOAD_AVATAR)) { i.get_instance().setBool(n.BOOL_LOAD_AVATAR, !1); for (a = 0; 8 > a;) { b = a++; if (!1 == ra.get_instance().avatars.exists(b)) { i.get_instance().setInt(n.INT_CURRENT_AVATAR, b); break } 7 == b && i.get_instance().setInt(n.INT_CURRENT_AVATAR, 9) } this._avatar.loadQueryString();
                this._name.set_text(this._avatar.getAvatarData().get_name()) } else null == a || !1 == a.get_created() ? (this._avatar.randomizeAvatar(), this._save(), this._onEventNameClicked(null)) : (this._avatar.loadAvatarInfo(a),
                this._name.set_text(a.get_name()), this._setupNames(), this._nameIndex = this._names.indexOf(a.get_name()));
            this._currPageText = this._traySelection.addElement(new pa({ text: "1", x: -20, y: 185, scale: 0.4 }));
            this._traySelection.addElement(new pa({ text: "/", x: 0, y: 185, scale: 0.4 }));
            this._totalPagesText = this._traySelection.addElement(new pa({ text: "3", x: 20, y: 185, scale: 0.4 }));
            this._btnBack = this._traySelection.addElement(new y({
                assetUp: h.texture.universal_select_arrow,
                x: -117,
                y: 185,
                tween: this._tween,
                clear: o(this, this._clearButtonInput),
                scale: 0.75
            }));
            this._btnBack.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventBackPage));
            this._btnNext = this._traySelection.addElement(new y({ assetUp: h.texture.universal_select_arrow, x: 124, y: 185, tween: this._tween, clear: o(this, this._clearButtonInput) }));
            this._btnNext.setScale(-0.75, 0.75);
            this._btnNext.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventNextPage));
            this._btnGirl = this._trayAvatar.addElement(new y({
                assetUp: h.texture.btn_body2,
                tween: this._tween,
                clear: o(this, this._clearButtonInput),
                x: -120,
                y: -100
            }));
            this._btnGirl.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventGenderClicked));
            this._btnBoy = this._trayAvatar.addElement(new y({ assetUp: h.texture.btn_body1_selected, tween: this._tween, clear: o(this, this._clearButtonInput), x: -120, y: 100 }));
            this._btnBoy.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventGenderClicked));
            this._btnBoy.disable();
            this._avatar.getAvatarData().library == h.spine.HDCC_avatar_girl.name && (this._btnBoy.enable(), this._btnBoy.setAsset(h.texture.btn_body1),
                this._btnGirl.disable(), this._btnGirl.setAsset(h.texture.btn_body2_selected));
            a = this._tray.addElement(new Lb({ tween: this._tween, clear: o(this, this._clearInput), x: r.STAGE_CENTER_X - 20, y: -230 }));
            a.set_x(a.get_x() - a.getNaturalWidth() / 2);
            this._tray.render();
            this._switchTab(ca.BODY_TAB);
            this._refreshUI();
            this._setupNames()
        },
        dispose: function() { this._avatar = this._btnComic = this._btnClose = this._tray = this._bg = null;
            D.prototype.dispose.call(this) },
        _setupNames: function() {
            if (null == this._names) {
                this._nameIndex = 0;
                this._names = [];
                for (var a = 0, b = Eb.SINGLE_NAMES; a < b;) { var c = a++;
                    this._names.push(i.get_instance().get_localize().getLocalizeData("avatar_single_name_" + (c + 1)).get_string()) } this._names.sort(function(a, b) { a = a.toLowerCase();
                    b = b.toLowerCase(); return a < b ? -1 : a > b ? 1 : 0 })
            }
        },
        _addEventListeners: function() { i.get_instance().get_dispatcher().addEventListener(k.PRINT_CLOSE, o(this, this._printClose)) },
        _removeEventListeners: function() { i.get_instance().get_dispatcher().removeEventListener(k.PRINT_CLOSE, o(this, this._printClose)) },
        _setInState: function() {
            this._finishOpenState();
            if (null != this._btnClose) this._tween.tween(this._btnClose, 0.2, { alpha: 1 }, !1, q.QUAD_IN).onComplete((ia = this._btnClose, o(ia, ia.enable)));
            this._tween.tween(this._btnRandomize, 0.2, { alpha: 1 }, !1, q.QUAD_IN).onComplete((ia = this._btnRandomize, o(ia, ia.enable)));
            if (null != this._btnShare) this._tween.tween(this._btnShare, 0.2, { alpha: 1 }, !1, q.QUAD_IN).onComplete((ia = this._btnShare, o(ia, ia.enable)));
            if (null != this._btnDownload) this._tween.tween(this._btnDownload, 0.2, { alpha: 1 },
                !1, q.QUAD_IN).onComplete((ia = this._btnDownload, o(ia, ia.enable)));
            if (null != this._btnSubmit) this._tween.tween(this._btnSubmit, 0.2, { alpha: 1 }, !1, q.QUAD_IN).onComplete((ia = this._btnSubmit, o(ia, ia.enable)));
            if (!i.get_instance().getBool(n.BOOL_TOUCH_DEVICE)) this._tween.tween(this._btnPrint, 0.2, { alpha: 1 }, !1, q.QUAD_IN).onComplete((ia = this._btnPrint, o(ia, ia.enable)));
            this._tween.tween(this._btnComic, 0.2, { alpha: 1 }, !1, q.QUAD_IN).onComplete((ia = this._btnComic, o(ia, ia.enable)));
            K.easeSlideInFromDir(this._traySelection,
                this._tween, R.LEFT, 0.1);
            K.easeSlideInFromDir(this._trayAvatar, this._tween, R.RIGHT, 0.1)
        },
        _setCloseState: function() { K.easeBounceOut(this._tray, this._tween).onComplete(o(this, this.setFlagDispose)) },
        _onEventResizeCanvas: function() {},
        _updateAvatar: function() { this._avatar.loadAvatarInfo(this._avatar.getAvatarData()) },
        _updateItemButtons: function(a) {
            null == a && (a = !1);
            1 >= this._tabs[this._tabIndex].get_currPage() ? (this._btnBack.disable(), this._btnBack.visible = !1) : (this._btnBack.enable(), this._btnBack.visible = !0);
            this._tabs[this._tabIndex].get_currPage() >= this._tabs[this._tabIndex].get_totalPages() ? (this._btnNext.disable(), this._btnNext.visible = !1) : (this._btnNext.enable(), this._btnNext.visible = !0);
            for (var b = 6 * (this._tabs[this._tabIndex].get_currPage() - 1), c = b + 6, e = [], m = 0, d = this._tabs[this._tabIndex].get_items(); m < d.length;) { var g = d[m];++m;
                e.push(xa.get_instance().getItem(g)) }
            if (null != this._itemBoxes)
                if (e.length > b) {
                    for (; b < e.length && b < c;) this._itemBoxes[b % 6].buttonInfo = e[b], !1 == a && (this._itemBoxes[b % 6].addItemImage(e[b].get_thumbnail()),
                        -1 != e[b].get_thumbnail().indexOf("power") && (0 == b % 2 ? this._itemBoxes[b % 6].addDetail(h.texture.icon_hand_left, -35, -22) : this._itemBoxes[b % 6].addDetail(h.texture.icon_hand_right, 35, -20))), b++;
                    if (b < c)
                        for (; b < c;) this._itemBoxes[b % 6].buttonInfo = null, !1 == a && this._itemBoxes[b % 6].removeItemImage(), b++
                } else
                    for (; b < c;) this._itemBoxes[b % 6].buttonInfo = null, !1 == a && this._itemBoxes[b % 6].removeItemImage(), b++
        },
        _onEventItemButtonClick: function(a) {
            this._tweening || (a = a.get_data().get("buttonIndex"), this._save(), null != this._itemBoxes[a].buttonInfo &&
                this._avatar.setAvatarItem(this._itemBoxes[a].buttonInfo.get_slot(), this._itemBoxes[a].buttonInfo.get_id()), this._currTab == ca.BODY_TAB && this._refreshUI())
        },
        _refreshUI: function() { this._updateItemButtons() },
        _onEventTabClicked: function(a) { this._tweening || (this._currTab = a.get_data().get("tab"), this._switchTab(this._currTab)) },
        _switchTab: function(a) {
            var b = this;
            this._currTab = a;
            for (var c = this._tabs.length; 0 <= --c;) this._tabs[c].get_type() == a ? (this._tabs[c].showTab(), this._tabIndex = c) : this._tabs[c].hideTab();
            this._btnTabBody.visible = !0;
            this._btnTabFace.visible = !0;
            this._btnTabClothes.visible = !0;
            this._btnTabHair.visible = !0;
            this._btnTabAccessories.visible = !0;
            this._btnTabBody.enable();
            this._btnTabFace.enable();
            this._btnTabClothes.enable();
            this._btnTabHair.enable();
            this._btnTabAccessories.enable();
            this._btnTabBody.pos.x = -200;
            this._btnTabFace.pos.x = -200;
            this._btnTabClothes.pos.x = -200;
            this._btnTabHair.pos.x = -200;
            this._btnTabAccessories.pos.x = -200;
            var e = "";
            switch (a[1]) {
                case 0:
                    e = "selection_body";
                    this._btnTabBody.pos.x = -220;
                    this._btnTabBody.disable();
                    break;
                case 1:
                    e = "selection_face";
                    this._btnTabFace.pos.x = -220;
                    this._btnTabFace.disable();
                    break;
                case 2:
                    e = "selection_hair";
                    this._btnTabHair.pos.x = -220;
                    this._btnTabHair.disable();
                    break;
                case 3:
                    e = "selection_clothes";
                    this._btnTabClothes.pos.x = -220;
                    this._btnTabClothes.disable();
                    break;
                case 4:
                    e = "selection_accessories", this._btnTabAccessories.pos.x = -220, this._btnTabAccessories.disable()
            }
            this._currPageText.set_text("" + this._tabs[this._tabIndex].get_currPage());
            this._totalPagesText.set_text("" +
                this._tabs[this._tabIndex].get_totalPages());
            this._tweening = !0;
            this._tween.tween(this._backingSelection, 0.15, { scale: 0.25, alpha: 0 }, !0, q.QUAD_OUT).onComplete(function() { b._selectionName.set_text(e);
                b._tween.tween(b._backingSelection, 0.1, { scale: 1, alpha: 1 }, !1, q.QUAD_IN) });
            for (var a = 0, c = 0.125, m = 0; 6 > m;) {
                var d = [m];
                this._itemBoxes[m].disable();
                this._updateItemButtons(!0);
                this._tween.tween(this._itemBoxes[m], 0.075, { scale: 0.75, alpha: 0 }, !0, q.QUAD_OUT, a).onComplete(function(a) { return function() { 5 == a[0] && b._updateItemButtons() } }(d));
                null == this._itemBoxes[m].buttonInfo ? this._tween.tween(this._itemBoxes[m], 0.075, { scale: 1, alpha: 0 }, !1, q.QUAD_IN, c + 0.075) : this._tween.tween(this._itemBoxes[m], 0.075, { scale: 1, alpha: 1 }, !1, q.QUAD_IN, c + 0.075);
                a += 0.025;
                c += 0.025;
                m++
            }
            i.get_instance().get_timer().start(function() { for (var a = 0; 6 > a;) b._itemBoxes[a].enable(), a++;
                b._tweening = !1 }, 0.6)
        },
        _onEventBackPage: function() {
            var a = this;
            if (!this._tweening && this._tabs[this._tabIndex].backPage()) {
                this._currPageText.set_text("" + this._tabs[this._tabIndex].get_currPage());
                this._btnBack.disable();
                this._tweening = !0;
                for (var b = 0.05, c = this._GRID_START_X, e = 0; 6 > e;) {
                    var m = [e];
                    this._itemBoxes[e].disable();
                    this._updateItemButtons(!0);
                    this._tween.tween(this._itemBoxes[e], 0.1, { x: c + 100, alpha: 0 }, !0, q.QUAD_OUT, b).onComplete(function(b) { return function() { 5 == b[0] && a._updateItemButtons() } }(m));
                    this._tween.tween(this._itemBoxes[e], 1.0E-4, { x: c - 100, alpha: 0 }, !1, q.QUAD_OUT, b + 0.05);
                    null == this._itemBoxes[e].buttonInfo ? this._tween.tween(this._itemBoxes[e], 0.1, { x: c, alpha: 0 }, !1, q.QUAD_IN, b + 0.05) :
                        this._tween.tween(this._itemBoxes[e], 0.1, { x: c, alpha: 1 }, !1, q.QUAD_IN, b + 0.05);
                    b += 0.05;
                    c += this._GRID_OFFSET_X;
                    0 != e % 2 ? c = this._GRID_START_X : b = 0;
                    e++
                }
                i.get_instance().get_timer().start(function() { for (var b = 0; 6 > b;) 0 != a._itemBoxes[b].alpha && a._itemBoxes[b].enable(), b++;
                    a._tweening = !1 }, 0.6)
            }
        },
        _onEventNextPage: function() {
            var a = this;
            if (!this._tweening && this._tabs[this._tabIndex].nextPage()) {
                this._currPageText.set_text("" + this._tabs[this._tabIndex].get_currPage());
                this._btnNext.disable();
                this._tweening = !0;
                for (var b =
                        0, c = this._GRID_START_X, e = 0; 6 > e;) {
                    var m = [e];
                    this._itemBoxes[e].disable();
                    this._updateItemButtons(!0);
                    this._tween.tween(this._itemBoxes[e], 0.1, { x: c - 100, alpha: 0 }, !0, q.QUAD_OUT, b).onComplete(function(b) { return function() { 5 == b[0] && a._updateItemButtons() } }(m));
                    this._tween.tween(this._itemBoxes[e], 1.0E-4, { x: c + 100, alpha: 0 }, !1, q.QUAD_OUT, b + 0.05);
                    null == this._itemBoxes[e].buttonInfo ? this._tween.tween(this._itemBoxes[e], 0.1, { x: c, alpha: 0 }, !1, q.QUAD_IN, b + 0.05) : this._tween.tween(this._itemBoxes[e], 0.1, { x: c, alpha: 1 },
                        !1, q.QUAD_IN, b + 0.05);
                    b += 0.05;
                    c += this._GRID_OFFSET_X;
                    0 != e % 2 && (b = 0, c = this._GRID_START_X);
                    e++
                }
                i.get_instance().get_timer().start(function() { for (var b = 0; 6 > b;) 0 != a._itemBoxes[b].alpha && a._itemBoxes[b].enable(), b++;
                    a._tweening = !1 }, 0.6)
            }
        },
        _onEventNameClicked: function(a) {
            this._setupNames();
            null != a && (this._nameIndex += a.get_data().get("index"));
            this._nameIndex > Eb.SINGLE_NAMES - 1 ? this._nameIndex = 0 : 0 > this._nameIndex && (this._nameIndex = Eb.SINGLE_NAMES - 1);
            a = this._names[this._nameIndex];
            this._avatar.getAvatarData().set_name(a);
            null != this._name && this._name.set_text(this._avatar.getAvatarData().get_name())
        },
        _onEventGenderClicked: function() {
            this._tweening || (this._avatar.changeGender(), this._switchTab(this._currTab), this._onEventNameClicked(null), this._refreshUI(), this._avatar.getAvatarData().library == h.spine.HDCC_avatar_boy.name ? (this._btnBoy.disable(), this._btnBoy.setAsset(h.texture.btn_body1_selected), this._btnGirl.enable(), this._btnGirl.setAsset(h.texture.btn_body2)) : (this._btnBoy.enable(), this._btnBoy.setAsset(h.texture.btn_body1),
                this._btnGirl.disable(), this._btnGirl.setAsset(h.texture.btn_body2_selected)))
        },
        _onEventCloseClicked: function() { this._save();
            this._sendTracking();
            r.dispatchFlowEvent(l.AVATAR_BUILDER_EXIT);
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.REFRESH_COMIC_AVATARS)) },
        _onEventComicClicked: function() {
            this._save();
            this._sendTracking();
            i.get_instance().getBool(n.BOOL_FLOW_AVATAR_FROM_COMIC) ? (r.dispatchFlowEvent(l.AVATAR_BUILDER_EXIT), i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.REFRESH_COMIC_AVATARS))) :
                r.dispatchFlowEvent(l.AVATAR_TO_COMIC)
        },
        _sendTracking: function() {
            H.sendEvent({
                event: "characterCreated",
                params: {
                    characterName: this._avatar.getAvatarData().get_name(),
                    characterSkin: this._avatar.getAvatarData().get_customizations().get(p.SKIN)[0],
                    characterEyes: this._avatar.getAvatarData().get_customizations().get(p.EYE)[0],
                    characterMouth: this._avatar.getAvatarData().get_customizations().get(p.MOUTH)[0],
                    characterNose: this._avatar.getAvatarData().get_customizations().get(p.NOSE)[0],
                    characterFace: this._avatar.getAvatarData().get_customizations().get(p.FACE)[0],
                    characterHair: this._avatar.getAvatarData().get_customizations().get(p.HAIR)[0],
                    characterTop: this._avatar.getAvatarData().get_customizations().get(p.TOP)[0],
                    characterBottom: this._avatar.getAvatarData().get_customizations().get(p.BOTTOM)[0],
                    characterBoots: this._avatar.getAvatarData().get_customizations().get(p.BOOTS)[0],
                    characterMask: this._avatar.getAvatarData().get_customizations().get(p.MASK)[0],
                    characterPowerLeft: this._avatar.getAvatarData().get_customizations().get(p.POWER_LEFT)[0],
                    characterPowerRight: this._avatar.getAvatarData().get_customizations().get(p.POWER_RIGHT)[0],
                    characterNumber: i.get_instance().getInt(n.INT_CURRENT_AVATAR),
                    gameMode: "avatar_builder"
                }
            })
        },
        _getQueryUrl: function() { var a = window.location.href;
            1 < a.split("?").length && (a = a.split("?")[0]); return a + this._avatar.getQueryString() },
        _onShareClicked: function() { i.get_instance().setString(n.STRING_SHARE_URL, this._getQueryUrl());
            r.dispatchFlowEvent(l.OPEN_POPUP_SHARE) },
        _onDownloadClicked: function() {
            var a = this;
            this._isolatedElems = this._isolateAvatar();
            this._tween.tween(this, 0.1, {}).onComplete(function() {
                try {
                    I._platform.getExternal().call("eval",
                        ["downloadScreenshot();"]), a._deisolateAvatar()
                } catch (b) { a._deisolateAvatar() }
            })
        },
        _onPrintClicked: function() { var a = this;
            this._isolatedElems = this._isolateAvatar();
            this._tween.tween(this, 0.1, {}).onComplete(function() { try { I._platform.getExternal().call("eval", ["takeScreenshot();"]) } catch (b) {} a._tween.tween(a, 0.1, {}).onComplete(function() { null != a._isolatedElems && i.get_instance().get_timer().start(function() { r.dispatchFlowEvent(l.OPEN_PRINT_CLOSE) }, 1) }) }) },
        _onRandomizeClicked: function() { this._avatar.randomizeAvatar() },
        _printClose: function() { this._deisolateAvatar() },
        _isolateAvatar: function() { this._tray.alpha = 0; var a = this._elementManager.addElement(new x({ asset: h.texture.white, x: -r.STAGE_CENTER_X, y: -280, scale: 1024 })),
                b = this._elementManager.addElement(new bc({ scale: 0.7, y: 240 }));
            b.loadAvatarInfo(this._avatar.getAvatarData()); return [a, b] },
        _deisolateAvatar: function() { this._tray.alpha = 1; for (var a = 0, b = this._isolatedElems; a < b.length;) { var c = b[a];++a;
                c.doDelete = !0 } this._isolatedElems = null },
        _onSubmitClicked: function() {
            i.get_instance().setString(n.STRING_SHARE_URL,
                this._getQueryUrl());
            r.dispatchFlowEvent(l.OPEN_POPUP_SUBMIT)
        },
        _onShareAvatar: function() {},
        _funnel: function() { var a = new zc("http://funnel.mtvnservices.com/api/v2/nick.com/collections/spongebob-squarepants-cartoon-creator-submissions/entries.json");
            a.onError = o(this, this._funnelError);
            a.onStatus = o(this, this._funnelStatus);
            a.onData = o(this, this._funnelSuccess);
            a.setParameter("message", "none");
            a.setParameter("GameUrl", this._getQueryUrl());
            a.setParameter("state", "NY");
            a.setParameter("age", "9");
            a.request(!0) },
        _funnelStatus: function() { null },
        _funnelSuccess: function() { null },
        _funnelError: function() { null },
        _funnelResult: function() { null },
        _save: function() {
            if (! function() { var a = i.get_instance().getInt(n.INT_CURRENT_AVATAR); return ra.get_instance().avatars.exists(a) }(this) || null == function() { var a = i.get_instance().getInt(n.INT_CURRENT_AVATAR); return ra.get_instance().avatars.exists(a) }(this)) { var a = i.get_instance().getInt(n.INT_CURRENT_AVATAR),
                    b = new ac;
                ra.get_instance().avatars.set(a, b) } else(function() {
                var a = i.get_instance().getInt(n.INT_CURRENT_AVATAR);
                return ra.get_instance().avatars.get(a)
            })(this).refresh(this._avatar.getAvatarData().get_name(), this._avatar.getAvatarData().get_customizations(), this._avatar.getAvatarData().library), ra.get_instance().save()
        },
        _usingBodyTypeButtons: function() { return 0 == this._tabIndex && 1 < this._tabs[this._tabIndex].get_currPage() },
        __class__: rd
    });
    var r = function() {};
    j["com.workinman.cloud.ConstantsApp"] = r;
    r.__name__ = ["com", "workinman", "cloud", "ConstantsApp"];
    r.__properties__ = { get_isCocoon: "get_isCocoon" };
    r.dispatchFlowEvent =
        function(a) { r._flowDelegate(a) };
    r.setFlowDelegate = function(a) { r._flowDelegate = a };
    r.getUniqueId = function() { return r._uniqueId++ };
    r.get_isCocoon = function() { 0 > r._isCocoon && (r._isCocoon = window.CocoonJS ? 1 : 0); return 1 == r._isCocoon };
    r.allAudioSupported = function() { return !0 };
    var Wa = function(a, b) { D.call(this, a, b) };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenAvatarTray"] = Wa;
    Wa.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenAvatarTray".split(",");
    Wa.__super__ = D;
    Wa.prototype = A(D.prototype, {
        _buildScreen: function() { var a = this._elementManager.addElement(new x({ asset: h.texture.avatar_picker_bg }));
            a.set_scale(1 / a.getNaturalWidth() * r.STAGE_WIDTH);
            560 * (1 / a.getNaturalHeight()) > a.get_scale() && a.set_scale(560 * (1 / a.getNaturalHeight()));
            this._buildAvatarTray() },
        _buildAvatarTray: function() {
            this._tray = this._elementManager.addElement(new x({ asset: "", x: 0, y: 0, alpha: 1 }));
            var a = this._tray.addElement(new Lb({ tween: this._tween, clear: o(this, this._clearInput), x: r.STAGE_CENTER_X - 20, y: -230 }));
            a.set_x(a.get_x() -
                a.getNaturalWidth() / 2);
            this._avatarTray = this._tray.addElement(new x({ x: 0, y: -30, alpha: 0 }));
            this._titleTray = this._avatarTray.addElement(new x({ x: 0, y: -170, alpha: 1 }));
            this._titleTray.addElement(new L({ text: "choose_avatar" }));
            this._avatars = [];
            for (var b = 0, c = Wa._GRID_START_X, e = Wa._GRID_START_Y, m, d = new y({ asset: h.texture.avatar_placeholder, tween: this._tween, clear: o(this, this._clearButtonInput) }); b < r.MAX_AVATARS;) {
                if (ra.get_instance().avatars.exists(b) && !0 == ra.get_instance().avatars.get(b).get_created()) {
                    var a =
                        this._avatarTray.addElement(new y({ x: c, y: e - d.getNaturalHeight() / 2, alpha: 0, tween: this._tween, clear: o(this, this._clearButtonInput) })),
                        g = a.addElement(new pa({ text: ra.get_instance().avatars.get(b).get_name(), x: d.getNaturalWidth() / 2, y: d.getNaturalHeight() / 2 + 90, scale: 0.3, font: "lh_comic_black" }));
                    g.set_scale(0.2);
                    m = a.addElement(new bc({ x: 0, y: 70, scale: 0.2 }));
                    m.loadAvatarInfo(ra.get_instance().avatars.get(b));
                    var f = m;
                    f.set_y(f.get_y() + d.getNaturalHeight() / 2);
                    m.disablePointerInput();
                    m = g;
                    m.set_x(m.get_x() - d.getNaturalWidth() /
                        2);
                    a.setCustomHitBox(d.getNaturalWidth(), d.getNaturalHeight(), -d.getNaturalWidth() / 2);
                    a.setScale(0.9, 0.9);
                    g = null;
                    m = a.addElement(new y({ assetUp: h.texture.avatar_picker_remove, scale: 0.7, x: 45, y: 35, tween: this._tween, clear: o(this, this._clearButtonInput) }));
                    m.setDispatchData(function() { var a = new G;
                        a.set("index", b); return a }(this));
                    m.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onDeleteClick))
                } else a = this._avatarTray.addElement(new y({
                    assetUp: h.texture.avatar_placeholder,
                    x: c,
                    y: e,
                    alpha: 0,
                    tween: this._tween,
                    clear: o(this, this._clearButtonInput)
                })), a.addElement(new x({ asset: h.texture.avatar_picker_add, x: 45, y: -35, scale: 0.7 })).disablePointerInput(), a.setScale(0.9, 0.9), a.setCustomHitBox(a.getNaturalWidth() + 40, a.getNaturalHeight(), -a.getNaturalWidth() / 2 + 20);
                a.setDispatchData(function() { var a = new G;
                    a.set("index", b); return a }(this));
                a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventAvatarClicked));
                a.disable();
                a.clickSound = h.sound.sbcc_sfx_play;
                this._avatars.push(a);
                b++;
                c += Wa._GRID_OFFSET_X;
                b ==
                    r.MAX_AVATARS / 2 && (c = Wa._GRID_START_X, e += Wa._GRID_OFFSET_Y)
            }
            m = null;
            d.doDelete = !0;
            a = d = null;
            this._btnClose = this._avatarTray.addElement(new y({ assetUp: h.texture.universal_close, x: 320, y: -170, scale: 1, alpha: 0, tween: this._tween, clear: o(this, this._clearButtonInput) }));
            this._btnClose.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventCloseClicked));
            this._btnClose.disable();
            this._avatarTray.render();
            this._btnClose.render()
        },
        dispose: function() {
            this._avatars = this._btnClose = this._titleTray = this._avatarTray =
                this._tray = null;
            D.prototype.dispose.call(this)
        },
        _addEventListeners: function() { D.prototype._addEventListeners.call(this);
            i.get_instance().get_dispatcher().addEventListener(k.DELETE_AVATAR, o(this, this._deleteAvatar));
            i.get_instance().get_dispatcher().addEventListener(k.REFRESH_COMIC_AVATARS, o(this, this._refreshAvatars)) },
        _removeEventListeners: function() {
            D.prototype._removeEventListeners.call(this);
            i.get_instance().get_dispatcher().removeEventListener(k.DELETE_AVATAR, o(this, this._deleteAvatar));
            i.get_instance().get_dispatcher().removeEventListener(k.REFRESH_COMIC_AVATARS,
                o(this, this._refreshAvatars))
        },
        _setInState: function() { var a = this;
            this._finishOpenState();
            K.easeBounceIn(this._btnClose, this._tween, !0, 0).onComplete(function() { a._btnClose.enable() });
            K.easeBounceIn(this._avatarTray, this._tween, !0, 0).onComplete(function() { for (var b = 0.25, c = 0; c < a._avatars.length;) { a._avatars[c].disable(); var e = [c];
                    K.easeBounceInScale(a._avatars[c], a._tween, 0.9, !0, b).onComplete(function(b) { return function() { a._avatars[b[0]].enable() } }(e));
                    b += 0.05;
                    c++ } }) },
        _setCloseState: function() {
            K.easeBounceOut(this._tray,
                this._tween).onComplete(o(this, this.setFlagDispose))
        },
        _onEventResizeCanvas: function() {},
        _leaveTray: function() { K.easeBounceOut(this._avatarTray, this._tween);
            K.easeBounceOut(this._btnClose, this._tween) },
        _onEventCloseClicked: function() { this._leaveTray();
            r.dispatchFlowEvent(l.AVATAR_TRAY_EXIT) },
        _onEventAvatarClicked: function(a) { i.get_instance().setInt(n.INT_CURRENT_AVATAR, a.get_data().get("index"));
            r.dispatchFlowEvent(l.AVATAR_BUILDER_OPEN) },
        _onDeleteClick: function(a) {
            this._currentIndex = a.get_data().get("index");
            r.dispatchFlowEvent(l.OPEN_DELETE_AVATAR)
        },
        _deleteAvatar: function() { ra.get_instance().deleteAvatar(this._currentIndex);
            this._refreshAvatars() },
        _refreshAvatars: function() { r.dispatchFlowEvent(l.AVATAR_TRAY_REFRESH) },
        __class__: Wa
    });
    var U = j["com.nick.spongebob.comic_creator.ui.screens.COMIC_STATE"] = { __ename__: "com,nick,spongebob,comic_creator,ui,screens,COMIC_STATE".split(","), __constructs__: ["PANEL_SELECT", "TWEENING", "FINISH", "PANEL_EDIT", "PANEL_VIEW"] };
    U.PANEL_SELECT = ["PANEL_SELECT", 0];
    U.PANEL_SELECT.toString =
        g;
    U.PANEL_SELECT.__enum__ = U;
    U.TWEENING = ["TWEENING", 1];
    U.TWEENING.toString = g;
    U.TWEENING.__enum__ = U;
    U.FINISH = ["FINISH", 2];
    U.FINISH.toString = g;
    U.FINISH.__enum__ = U;
    U.PANEL_EDIT = ["PANEL_EDIT", 3];
    U.PANEL_EDIT.toString = g;
    U.PANEL_EDIT.__enum__ = U;
    U.PANEL_VIEW = ["PANEL_VIEW", 4];
    U.PANEL_VIEW.toString = g;
    U.PANEL_VIEW.__enum__ = U;
    U.__empty_constructs__ = [U.PANEL_SELECT, U.TWEENING, U.FINISH, U.PANEL_EDIT, U.PANEL_VIEW];
    var uc = function(a, b) { this._panels = [];
        D.call(this, a, b) };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenComicHud"] =
        uc;
    uc.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenComicHud".split(",");
    uc.__super__ = D;
    uc.prototype = A(D.prototype, {
        _buildScreen: function() {
            this._tray = this._elementManager.addElement(new x({ origin: 0, x: -r.STAGE_CENTER_X, y: -280, alpha: 0 }));
            var a = this._elementManager.addElement(new x({ asset: h.texture.main_bg }));
            a.set_scale(1 / a.getNaturalWidth() * r.STAGE_WIDTH);
            560 * (1 / a.getNaturalHeight()) > a.get_scale() && a.set_scale(560 * (1 / a.getNaturalHeight()));
            a = this._btnMute = this._elementManager.addElement(new Lb({
                tween: this._tween,
                clear: o(this, this._clearInput),
                x: r.STAGE_CENTER_X - 20,
                y: -230
            }));
            a.set_x(a.get_x() - this._btnMute.getNaturalWidth() / 2);
            this._initPanels();
            a = this._finishButton = this._elementManager.addElement(new y({ assetUp: h.texture.panel_picker_view, tween: this._tween, clear: o(this, this._clearInput), x: r.STAGE_CENTER_X - 20, y: -150 }));
            a.set_x(a.get_x() - this._finishButton.getScaledWidth() / 2);
            this._finishButton.addElement(new L({ text: "finish_btn", y: 0 }));
            this._finishButton.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onFinishClick));
            this._overviewButton = this._elementManager.addElement(new y({ assetUp: h.texture.panel_picker_view, tween: this._tween, clear: o(this, this._clearInput), y: -240 }));
            this._overviewButton.set_x(r.STAGE_CENTER_X + this._finishButton.getScaledWidth());
            this._overviewButton.addElement(new L({ text: "overview_btn", y: 0 }));
            this._overviewButton.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onOverviewClick));
            this._exitButton = this._elementManager.addElement(new Uc(this._tween, o(this, this._clearInput)));
            this._exitButton.dispatcher.addEventListener(k.BUTTON_CLICK,
                o(this, this._onPauseClick));
            this._leftButton = this._elementManager.addElement(new Vc(this._tween, o(this, this._clearInput), !0));
            this._leftButton.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onLeftClick));
            this._rightButton = this._elementManager.addElement(new Vc(this._tween, o(this, this._clearInput), !1));
            this._rightButton.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onRightClick));
            this._tapToEdit = this._elementManager.addElement(new x({ asset: h.texture.btn_avatar_submit, y: -200, scale: 1.4 }));
            i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) ? this._tapToEdit.addElement(new L({ text: "tap_to_edit", y: 3, x: -3 })) : this._tapToEdit.addElement(new L({ text: "click_to_edit", y: 3, x: -3 }));
            this._panelNumTray = this._elementManager.addElement(new x({ asset: h.texture.main_titlepiece, scale: 1, y: -326 }));
            this._panelNumTray.addElement(new Jd({ tween: this._tween, y: -10 })).disablePointerInput();
            this._panelNumTray.disablePointerInput();
            i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) || (this._btnPrint = this._elementManager.addElement(new y({
                    assetUp: h.texture.btn_print,
                    y: 2 * this._finishButton.getNaturalHeight() + -130,
                    alpha: 1,
                    tween: this._tween,
                    clear: o(this, this._clearButtonInput),
                    scale: 0.75
                })), this._btnPrint.set_x(-this._btnPrint.getNaturalWidth() / 2 + r.STAGE_CENTER_X - 20), this._btnPrint.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onPrintClick)), this._btnDownload = this._elementManager.addElement(new y({ assetUp: h.texture.btn_download, y: -200 + this._finishButton.getNaturalHeight() + 70, alpha: 1, tween: this._tween, clear: o(this, this._clearButtonInput), scale: 0.75 })),
                this._btnDownload.set_x(-this._btnDownload.getNaturalWidth() / 2 + r.STAGE_CENTER_X - 20), this._btnDownload.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onDownloadClicked)));
            this._bottomTray = this._elementManager.addElement(new Ac({ tween: this._tween, clear: o(this, this._clearInput) }));
            this._tray.render();
            this._setComicState(U.PANEL_SELECT);
            this._tweening = !1
        },
        dispose: function() { this._comicElem = this._tray = null;
            D.prototype.dispose.call(this) },
        _addEventListeners: function() {
            D.prototype._addEventListeners.call(this);
            i.get_instance().get_dispatcher().addEventListener(k.CREATE_HUD_COMIC_ELEM, o(this, this._createHudComicElem))
        },
        _removeEventListeners: function() { D.prototype._removeEventListeners.call(this);
            i.get_instance().get_dispatcher().removeEventListener(k.CREATE_HUD_COMIC_ELEM, o(this, this._createHudComicElem)) },
        _onInput: function() {},
        _setInState: function() { this._finishOpenState();
            K.easeBounceIn(this._tray, this._tween).onComplete(o(this, this._finishOpenState)) },
        _onEventResizeCanvas: function() {
            this._tray.pos.to(-r.STAGE_CENTER_X,
                -280)
        },
        _initPanels: function() {
            this._panelTray = this._elementManager.addElement(new x({ scale: 1 / 718 * 0.7 * r.STAGE_WIDTH, y: 50 }));
            switch (i.get_instance().getInt(n.INT_PANEL_NUM)) {
                case 1:
                    this._panels.push(this._panelTray.addElement(new Bc({ assetUp: "", tween: this._tween, clear: o(this, this._clearInput), index: 1 }, h.texture.hd_comic_panel_frame_large, i.get_instance().getBool(n.BOOL_DO_TUTORIAL), wa.LARGE)));
                    this._panels[0].setDispatchData(function() { var a = new G;
                        a.set("index", 0); return a }(this));
                    this._panels[0].dispatcher.addEventListener(k.BUTTON_CLICK,
                        o(this, this._onPanelClick));
                    break;
                case 4:
                    for (var a = 0; 4 > a;) {
                        var b = a++,
                            c;
                        c = 0 == b || 3 == b ? h.texture.hd_comic_panel_frame_medium : h.texture.hd_comic_panel_frame_small;
                        var e = 0,
                            m = 0;
                        switch (b) {
                            case 0:
                                e = -144;
                                m = -82; break;
                            case 1:
                                e = 213;
                                m = -82; break;
                            case 2:
                                e = -213;
                                m = 82; break;
                            case 3:
                                e = 144, m = 82 } this._panels.push(this._panelTray.addElement(new Bc({ assetUp: "", tween: this._tween, clear: o(this, this._clearInput), x: e, y: m, index: b }, c, i.get_instance().getBool(n.BOOL_DO_TUTORIAL) && 0 == b, c == h.texture.hd_comic_panel_frame_medium ? wa.MED :
                            wa.SMALL)));
                        this._panels[b].setDispatchData(function() { var a = new G;
                            a.set("index", b); return a }(this));
                        this._panels[b].dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onPanelClick))
                    }
                    break;
                case 8:
                    for (a = 0; 8 > a;) {
                        var d = a++;
                        c = this._panelTray.addElement(new Bc({ assetUp: "", tween: this._tween, clear: o(this, this._clearInput), index: d }, h.texture.hd_comic_panel_frame_mini, i.get_instance().getBool(n.BOOL_DO_TUTORIAL) && 0 == d, wa.TINY));
                        e = c.getScaledWidth() + 4;
                        m = c.getScaledHeight() + 4;
                        this._panels.push(c);
                        c.pos.to((d %
                            4 - 2) * e + e / 2, m / 2 - (4 > d ? 1 : 0) * m);
                        c.initX = c.get_x();
                        c.initY = c.get_y();
                        c.setDispatchData(function() { var a = new G;
                            a.set("index", d); return a }(this));
                        c.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onPanelClick))
                    }
            }
        },
        _sendTracking: function() {
            H.sendEvent({
                event: "comicCreated",
                params: {
                    numberOfPanels: i.get_instance().getInt(n.INT_PANEL_NUM),
                    panelONE: this._panels[0].edited ? "EDITED" : "UNEDITED",
                    panelTWO: 1 >= this._panels.length ? "NA" : this._panels[1].edited ? "EDITED" : "UNEDITED",
                    panelTHREE: 2 >= this._panels.length ?
                        "NA" : this._panels[2].edited ? "EDITED" : "UNEDITED",
                    panelFOUR: 3 >= this._panels.length ? "NA" : this._panels[3].edited ? "EDITED" : "UNEDITED",
                    panelFIVE: 4 >= this._panels.length ? "NA" : this._panels[4].edited ? "EDITED" : "UNEDITED",
                    panelSIX: 5 >= this._panels.length ? "NA" : this._panels[5].edited ? "EDITED" : "UNEDITED",
                    panelSEVEN: 6 >= this._panels.length ? "NA" : this._panels[6].edited ? "EDITED" : "UNEDITED",
                    panelEIGHT: 7 >= this._panels.length ? "NA" : this._panels[7].edited ? "EDITED" : "UNEDITED"
                }
            });
            for (var a = 0, b = this._panels; a < b.length;) {
                var c =
                    b[a];
                ++a;
                c.edited = !1
            }
        },
        _onEventPauseClick: function() { r.dispatchFlowEvent(l.COMIC_MENU) },
        _onPauseClick: function() { this._sendTracking();
            r.dispatchFlowEvent(l.COMIC_MENU_QUIT) },
        _onLeftClick: function() { this._comicState != U.PANEL_EDIT && this._comicState != U.FINISH || this._onArrowClick(!0) },
        _onRightClick: function() { this._comicState != U.PANEL_EDIT && this._comicState != U.FINISH || this._onArrowClick(!1) },
        _onArrowClick: function(a) {
            var b = this,
                c = this._comicState;
            this._panels[a ? this._panelIndex-- : this._panelIndex++].hidePanel(this._panelIndex <
                this._panels.length);
            a = this._panels[this._panelIndex].showPanel(this._comicState == U.FINISH);
            this._setComicState(U.TWEENING);
            this._tween.tween(this, a, {}).onComplete(function() { b._setComicState(c) });
            i.get_instance().setValue(n.VALUE_CURRENT_PANEL, this._panels[this._panelIndex]);
            i.get_instance().setInt(n.INT_PANEL_INDEX, this._panelIndex);
            this._bottomTray.refreshButtons();
            this._updateArrows()
        },
        _onPrintClick: function() {
            var a = this;
            this._tweening || (this._tweening = !0, this._sendTracking(), this._tween.tween(this._finishButton,
                    0.4, { x: r.STAGE_CENTER_X + this._finishButton.getScaledWidth() }, !0, q.IN, 0, ""), this._exitButton.hide(), this._tween.tween(this._panelTray, 0.5, { scale: 1 / 718 * 0.7 * r.STAGE_WIDTH }, !0, q.BUMP, 0, ""), this._tween.tween(this._btnPrint, 0.4, { x: this._btnPrint.getNaturalWidth() + r.STAGE_CENTER_X }, !0, q.IN, 0, ""), this._tween.tween(this._btnDownload, 0.4, { x: this._btnPrint.getNaturalWidth() + r.STAGE_CENTER_X }, !0, q.IN, 0, ""), this._tween.tween(this._btnMute, 0.4, { x: this._btnMute.getNaturalWidth() + r.STAGE_CENTER_X }, !0, q.IN, 0, ""),
                this._tween.tween(this._panelTray, 0.4, { y: 0 }, !0, q.IN, 0, "y"), this._tween.tween(this._tapToEdit, 0.5, { y: -this._tapToEdit.getScaledHeight() - 280 - 50 }, !0, q.BUMP, 0, "").onComplete(function() {
                    try { I._platform.getExternal().call("eval", ["takeScreenshot();"]) } catch (b) {} a._tween.tween(a._finishButton, 0.5, { x: r.STAGE_CENTER_X - 20 - a._finishButton.getScaledWidth() / 2 }, !0, q.BOUNCE_OUT, 0.5, "");
                    a._tween.tween(a._tapToEdit, 0.5, { y: -200 }, !0, q.BUMP, 0, "");
                    a._tween.tween(a, 0.01, {}, !0).onComplete(function() { a._exitButton.show() });
                    a._tween.tween(a._panelTray, 0.4, { y: 50 }, !0, q.IN, 0, "y");
                    a._tween.tween(a._btnMute, 0.4, { x: r.STAGE_CENTER_X - a._btnMute.getNaturalWidth() / 2 }, !0, q.IN, 0, "");
                    a._tween.tween(a._btnPrint, 0.4, { x: -a._btnPrint.getNaturalWidth() / 2 + r.STAGE_CENTER_X - 20 }, !0, q.IN, 0, "");
                    a._tween.tween(a._btnDownload, 0.4, { x: -a._btnPrint.getNaturalWidth() / 2 + r.STAGE_CENTER_X - 20 }, !0, q.IN, 0, "");
                    a._tween.tween(a._panelTray, 0.5, { scale: 1 / 718 * 0.7 * r.STAGE_WIDTH }, !0, q.BUMP, 0, "").onComplete(function() { a._tweening = !1 })
                }))
        },
        _onFinishClick: function() {
            var a =
                this;
            if (this._comicState == U.PANEL_SELECT) {
                this._setComicState(U.TWEENING);
                this._panelIndex = 0;
                var b = this._panels[this._panelIndex];
                i.get_instance().setValue(n.VALUE_CURRENT_PANEL, b);
                for (var c = 0, e = this._panels.length; c < e;) { var m = c++;
                    this._panels[m] == b ? i.get_instance().setInt(n.INT_PANEL_INDEX, m) : this._panels[m].hidePanel(m < this._panels.length / 2) } this._tween.tween(this, b.showPanel(!0, !1), {}, !0).onComplete(function() { a._setComicState(U.FINISH) });
                this._tween.tween(this._finishButton, 0.4, {
                    x: r.STAGE_CENTER_X +
                        this._finishButton.getScaledWidth()
                }, !0, q.IN, 0, "");
                this._tween.tween(this._tapToEdit, 0.5, { y: -this._tapToEdit.getScaledHeight() - 280 - 50 }, !0, q.BUMP, 0, "");
                this._exitButton.hide();
                this._tween.tween(this._overviewButton, 0.5, { x: r.STAGE_CENTER_X - 120 - this._overviewButton.getScaledWidth() / 2 }, !0, q.BOUNCE_OUT, 0.5, "").onComplete(function() {});
                null != this._btnPrint && this._tween.tween(this._btnPrint, 0.4, { x: r.STAGE_CENTER_X + this._btnPrint.getScaledWidth() }, !0, q.IN, 0, "");
                null != this._btnPrint && this._tween.tween(this._btnDownload,
                    0.4, { x: r.STAGE_CENTER_X + this._btnPrint.getScaledWidth() }, !0, q.IN, 0, "");
                i.get_instance().get_sound().stopMusic(0);
                i.get_instance().get_sound().playSound(h.sound.hdcc_splashscreenmusic_endstingerv3, 0.3);
                this._sendTracking();
                this._leftButton.pos.y = 0;
                this._rightButton.pos.y = 0;
                this._updateArrows()
            }
        },
        _onFinishCancel: function() {
            var a = this;
            this._comicState == U.FINISH && (this._setComicState(U.TWEENING), i.get_instance().get_sound().playMusic(h.sound.hdcc_splashscreenmusicv3, 0.25), this._tween.tween(this._finishButton,
                0.5, { x: r.STAGE_CENTER_X - 20 - this._finishButton.getScaledWidth() / 2 }, !0, q.BOUNCE_OUT, 0.5, ""), this._tween.tween(this._tapToEdit, 0.5, { y: -200 }, !0, q.BUMP, 0, ""), this._exitButton.show(), this._tween.tween(this._panelTray, 1, { scale: 1 / 718 * 0.7 * r.STAGE_WIDTH }, !0, q.BUMP, 0, "").onComplete(function() { a._tween.tween(a, 2, {}).onComplete(function() { a._setComicState(U.PANEL_SELECT);
                    i.get_instance().get_sound().playMusic(h.sound.hdcc_gameplaymusicv3, 0.3) }) }))
        },
        _setComicState: function(a) { this._comicState = a },
        _onPanelClick: function(a) {
            var b =
                this;
            if (this._comicState == U.PANEL_SELECT) {
                if (!a.get_data().exists("index") || 8 <= a.get_data().get("index") || 0 > a.get_data().get("index") || null == a) throw "";
                this._setComicState(U.TWEENING);
                this._panelIndex = a.get_data().get("index");
                a = this._panels[this._panelIndex];
                i.get_instance().setValue(n.VALUE_CURRENT_PANEL, a);
                for (var c = 0, e = this._panels.length; c < e;) { var m = c++;
                    this._panels[m] == a ? i.get_instance().setInt(n.INT_PANEL_INDEX, m) : this._panels[m].hidePanel(m < this._panels.length / 2) } a.showPanel();
                this._tween.tween(this._finishButton,
                    0.4, { x: r.STAGE_CENTER_X + this._finishButton.getScaledWidth() }, !0, q.IN, 0, "");
                this._tween.tween(this._overviewButton, 0.5, { x: r.STAGE_CENTER_X - 120 - this._overviewButton.getScaledWidth() / 2 }, !0, q.BOUNCE_OUT, 0.5, "").onComplete(function() { b._setComicState(U.PANEL_EDIT) });
                this._tween.tween(this._tapToEdit, 0.5, { y: -this._tapToEdit.getScaledHeight() - 280 - 50 }, !0, q.BUMP, 0, "");
                this._tween.tween(this._panelNumTray, 0.5, { y: -252 }, !0, q.BUMP, 0, "");
                this._exitButton.hide();
                null != this._btnPrint && this._tween.tween(this._btnPrint,
                    0.4, { x: this._btnPrint.getNaturalWidth() + r.STAGE_CENTER_X }, !0, q.IN, 0, "");
                null != this._btnPrint && this._tween.tween(this._btnDownload, 0.4, { x: this._btnPrint.getNaturalWidth() + r.STAGE_CENTER_X }, !0, q.IN, 0, "");
                this._updateArrows();
                i.get_instance().get_sound().playSound(h.sound.sbcc_whoosh, 0.4);
                i.get_instance().get_timer().start(function() { i.get_instance().get_sound().playSound(h.sound.sbcc_sfx_screenchange, 0.4) }, 0.4);
                i.get_instance().get_timer().start(function() {
                    i.get_instance().get_sound().playSound(h.sound.sbcc_sfx_screenchange,
                        0.4)
                }, 0.6);
                this._bottomTray.show()
            }
        },
        _updateArrows: function() { 0 >= this._panelIndex ? this._leftButton.hide() : this._leftButton.show();
            this._panelIndex >= this._panels.length - 1 ? this._rightButton.hide() : this._rightButton.show() },
        _onOverviewClick: function() {
            var a = this;
            if (!(this._comicState != U.PANEL_EDIT && this._comicState != U.FINISH || this._tweening)) {
                this._tweening = !0;
                this._setComicState(U.TWEENING);
                for (var b = 0, c = this._panels.length; b < c;) this._panels[b++].restorePanel();
                this._leftButton.pos.y = -70;
                this._rightButton.pos.y = -70;
                this._tween.tween(this._overviewButton, 0.4, { x: r.STAGE_CENTER_X + this._overviewButton.getScaledWidth() }, !0, q.IN, 0, "");
                this._tween.tween(this._finishButton, 0.5, { x: r.STAGE_CENTER_X - 20 - this._finishButton.getScaledWidth() / 2 }, !0, q.BOUNCE_OUT, 0.5, "").onComplete(function() { a._setComicState(U.PANEL_SELECT);
                    a._tweening = !1 });
                this._tween.tween(this._tapToEdit, 0.5, { y: -200 }, !0, q.BUMP, 0, "");
                this._tween.tween(this._panelNumTray, 0.5, { y: -324 }, !0, q.BUMP, 0, "");
                this._exitButton.show();
                null != this._btnPrint && this._tween.tween(this._btnPrint,
                    0.4, { x: -this._btnPrint.getNaturalWidth() / 2 + r.STAGE_CENTER_X - 20 }, !0, q.IN, 0, "");
                null != this._btnPrint && this._tween.tween(this._btnDownload, 0.4, { x: -this._btnPrint.getNaturalWidth() / 2 + r.STAGE_CENTER_X - 20 }, !0, q.IN, 0, "");
                i.get_instance().get_sound().playSound(h.sound.sbcc_whoosh, 0.4);
                this._bottomTray.hide();
                this._leftButton.hide();
                this._rightButton.hide()
            }
        },
        _createHudComicElem: function(a) {
            var b;
            b = a.get_data().get("btn");
            a = a.get_data().exists("click") && a.get_data().get("click");
            b.get_type() == V.BG ? this._panels[this._panelIndex].setButtonAsset(b.get_asset()) :
                b.get_type() == V.AVATAR ? i.get_instance().getInt(n.INT_PANEL_ELEM_COUNT) >= i.get_instance().getInt(n.INT_MAX_PANEL_ELEMS) ? (i.get_instance().get_sound().stopSound(h.sound.sbcc_sfx_drop), i.get_instance().get_sound().playSound(h.sound.sbcc_sfx_locked_alt_2)) : this._panels[this._panelIndex].addComicElem(new Ld({ asset: b.get_asset(), tween: this._tween, clear: o(this, this._clearInput), x: b.get_x(), y: b.get_y(), scale: 1, trayScale: this._panelTray.get_scale(), type: b.get_type(), image: b.get_asset(), panel: this._panels[this._panelIndex] },
                    C.__cast(b, Za).index), a) : b.get_type() == V.CHARACTER ? i.get_instance().getInt(n.INT_PANEL_ELEM_COUNT) >= i.get_instance().getInt(n.INT_MAX_PANEL_ELEMS) ? (i.get_instance().get_sound().stopSound(h.sound.sbcc_sfx_drop), i.get_instance().get_sound().playSound(h.sound.sbcc_sfx_locked_alt_2)) : this._panels[this._panelIndex].addComicElem(new Md({
                    asset: b.get_asset(),
                    tween: this._tween,
                    clear: o(this, this._clearInput),
                    x: b.get_x(),
                    y: b.get_y(),
                    text: null == b.text ? null : b.text.get_text(),
                    trayScale: this._panelTray.get_scale(),
                    scale: b.get_scale(),
                    type: b.get_type(),
                    image: b.get_asset(),
                    panel: this._panels[this._panelIndex]
                }), a) : this._panels[this._panelIndex].addComicElem(new Nd({ asset: b.get_asset(), tween: this._tween, clear: o(this, this._clearInput), x: b.get_x(), y: b.get_y(), text: null == b.text ? null : b.text.get_text(), trayScale: this._panelTray.get_scale(), scale: b.get_scale(), type: b.get_type(), image: b.get_asset(), panel: this._panels[this._panelIndex] }), a)
        },
        _onDownloadClicked: function() {
            var a = this;
            this._tweening || (this._tweening = !0,
                this._sendTracking(), this._tween.tween(this._finishButton, 0.4, { x: r.STAGE_CENTER_X + this._finishButton.getScaledWidth() }, !0, q.IN, 0, ""), this._exitButton.hide(), this._tween.tween(this._panelTray, 0.5, { scale: 1 / 718 * 0.7 * r.STAGE_WIDTH }, !0, q.BUMP, 0, ""), this._tween.tween(this._btnPrint, 0.4, { x: this._btnPrint.getNaturalWidth() + r.STAGE_CENTER_X }, !0, q.IN, 0, ""), this._tween.tween(this._btnDownload, 0.4, { x: this._btnPrint.getNaturalWidth() + r.STAGE_CENTER_X }, !0, q.IN, 0, ""), this._tween.tween(this._btnMute, 0.4, {
                    x: this._btnMute.getNaturalWidth() +
                        r.STAGE_CENTER_X
                }, !0, q.IN, 0, ""), this._tween.tween(this._panelTray, 0.4, { y: 0 }, !0, q.IN, 0, "y"), this._tween.tween(this._tapToEdit, 0.5, { y: -this._tapToEdit.getScaledHeight() - 280 - 30 }, !0, q.BUMP, 0, "").onComplete(function() {
                    I._platform.getExternal().call("eval", ["downloadScreenshot();"]);
                    a._tween.tween(a._finishButton, 0.5, { x: r.STAGE_CENTER_X - 20 - a._finishButton.getScaledWidth() / 2 }, !0, q.BOUNCE_OUT, 0.5, "");
                    a._tween.tween(a._tapToEdit, 0.5, { y: -200 }, !0, q.BUMP, 0, "");
                    a._tween.tween(a, 0.01, {}, !0).onComplete(function() { a._exitButton.show() });
                    a._tween.tween(a._panelTray, 0.4, { y: 50 }, !0, q.IN, 0, "y");
                    a._tween.tween(a._btnMute, 0.4, { x: r.STAGE_CENTER_X - a._btnMute.getNaturalWidth() / 2 }, !0, q.IN, 0, "");
                    a._tween.tween(a._btnPrint, 0.4, { x: -a._btnPrint.getNaturalWidth() / 2 + r.STAGE_CENTER_X - 20 }, !0, q.IN, 0, "");
                    a._tween.tween(a._btnDownload, 0.4, { x: -a._btnPrint.getNaturalWidth() / 2 + r.STAGE_CENTER_X - 20 }, !0, q.IN, 0, "");
                    a._tween.tween(a._panelTray, 0.5, { scale: 1 / 718 * 0.7 * r.STAGE_WIDTH }, !0, q.BUMP, 0, "").onComplete(function() { a._tweening = !1 })
                }))
        },
        getQueryString: function() {
            for (var a =
                    "?&lhavtr", b = 0, c = this._panels.length; b < c;) var e = b++,
                a = a + this._panels[e].getQueryString();
            return a
        },
        loadQueryString: function() { if (!(1 >= window.location.href.split("?").length))
                for (var a = window.location.href.split("?")[1].split("&"), b = null, c = 0; c < a.length;) b = a[c], ++c, b = b.split("="), 1 >= b.length || B.parseInt(b[1]) },
        __class__: uc
    });
    var td = function(a, b) { D.call(this, a, b);
        this._closing = !1 };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenComicMenu"] = td;
    td.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenComicMenu".split(",");
    td.__super__ = D;
    td.prototype = A(D.prototype, {
        _buildScreen: function() {
            this._tray = this._elementManager.addElement(new x({ asset: h.texture.white, alpha: 0 }));
            this._tray.addElement(new L({ text: "menu", y: -170 }));
            var a;
            a = this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.white, x: -78, y: -60 }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventResumeClick));
            a = this._tray.addElement(new y({
                tween: this._tween,
                clear: o(this, this._clearButtonInput),
                assetUp: h.texture.white,
                x: 75,
                y: -60
            }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventHelpClick));
            a = this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.white, x: 75, y: 90 }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventQuitClick));
            this._tray.addElement(new Lb({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.white, assetUpOff: h.texture.white, x: -78, y: 90 }))
        },
        dispose: function() { this._tray = null;
            D.prototype.dispose.call(this) },
        _setInState: function() { this._closing = !1;
            K.easeBounceIn(this._tray, this._tween).onComplete(o(this, this._finishOpenState)) },
        _setCloseState: function() { this._closing || (this._closing = !0, K.easeBounceOut(this._tray, this._tween).onComplete(o(this, this.setFlagDispose))) },
        _onEventHelpClick: function() { r.dispatchFlowEvent(l.COMIC_MENU_HELP) },
        _onEventResumeClick: function() { r.dispatchFlowEvent(l.COMIC_MENU_CLOSE) },
        _onEventQuitClick: function() { r.dispatchFlowEvent(l.COMIC_MENU_QUIT) },
        __class__: td
    });
    var sd = function(a,
        b) { D.call(this, a, b) };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenComicPanelSelect"] = sd;
    sd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenComicPanelSelect".split(",");
    sd.__super__ = D;
    sd.prototype = A(D.prototype, {
        _buildScreen: function() {
            var a = this._elementManager.addElement(new x({ asset: h.texture.layout_picker_bg }));
            a.set_scale(1 / a.getNaturalWidth() * r.STAGE_WIDTH);
            560 * (1 / a.getNaturalHeight()) > a.get_scale() && a.set_scale(560 * (1 / a.getNaturalHeight()));
            this._tray = this._elementManager.addElement(new x({
                asset: "",
                x: 0,
                y: 0,
                alpha: 1
            }));
            a = this._tray.addElement(new Lb({ tween: this._tween, clear: o(this, this._clearInput), x: r.STAGE_CENTER_X - 20, y: -230 }));
            a.set_x(a.get_x() - a.getNaturalWidth() / 2);
            this._contentHolder = this._tray.addElement(new x({ alpha: 0 }));
            this._contentHolder.addElement(new x({ asset: h.texture.layout_picker_box, x: 0, y: 0 }));
            this._contentHolder.addElement(new L({ text: "select_panel", y: -200 }));
            this._btnBack = this._contentHolder.addElement(new y({
                assetUp: h.texture.universal_close,
                x: 320,
                y: -180,
                alpha: 0,
                tween: this._tween,
                clear: o(this, this._clearInput)
            }));
            this._btnBack.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventBackClicked));
            this._btnBack.disable();
            this._btnPanels1 = this._contentHolder.addElement(new y({ assetUp: h.texture.layout_picker_1panel, x: -160, y: -50, alpha: 0, tween: this._tween, clear: o(this, this._clearInput) }));
            this._btnPanels1.addElement(new L({ text: "btn_panels_1", y: 0, rotation: -4 }));
            this._btnPanels1.setDispatchData(function() { var a = new G;
                a.set("panels", 1); return a }(this));
            this._btnPanels1.dispatcher.addEventListener(k.BUTTON_CLICK,
                o(this, this._onEventPanelNumClicked));
            this._btnPanels1.disable();
            this._btnPanels1.clickSound = h.sound.sbcc_sfx_play;
            this._btnPanels4 = this._contentHolder.addElement(new y({ assetUp: h.texture.layout_picker_4panel, x: 160, y: -20, alpha: 0, tween: this._tween, clear: o(this, this._clearInput), rotation: 5 }));
            this._btnPanels4.addElement(new L({ text: "btn_panels_4", y: 0 }));
            this._btnPanels4.setDispatchData(function() { var a = new G;
                a.set("panels", 4); return a }(this));
            this._btnPanels4.dispatcher.addEventListener(k.BUTTON_CLICK,
                o(this, this._onEventPanelNumClicked));
            this._btnPanels4.disable();
            this._btnPanels4.clickSound = h.sound.sbcc_sfx_play;
            this._btnPanels8 = this._contentHolder.addElement(new y({ assetUp: h.texture.layout_picker_8panel, x: 0, y: 110, alpha: 0, tween: this._tween, clear: o(this, this._clearInput) }));
            this._btnPanels8.addElement(new L({ text: "btn_panels_8", y: 0 }));
            this._btnPanels8.setDispatchData(function() { var a = new G;
                a.set("panels", 8); return a }(this));
            this._btnPanels8.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventPanelNumClicked));
            this._btnPanels8.disable();
            this._btnPanels8.clickSound = h.sound.sbcc_sfx_play;
            i.get_instance().getBool(n.BOOL_AVATAR_TO_COMIC) && this._elementManager.addElement(new Uc(this._tween, o(this, this._clearButtonInput))).dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventBackToAvatar));
            i.get_instance().setBool(n.BOOL_AVATAR_TO_COMIC, !1);
            this._tray.render()
        },
        dispose: function() { this._btnPanels8 = this._btnPanels4 = this._btnPanels1 = this._btnBack = this._contentHolder = this._tray = null;
            D.prototype.dispose.call(this) },
        _setInState: function() { var a = this;
            K.easeBounceIn(this._contentHolder, this._tween).onComplete(function() { a._finishOpenState();
                a._tween.tween(a._btnBack, 0.2, { scale: 1, alpha: 1 }, !1, q.QUAD_IN).onComplete((ia = a._btnBack, o(ia, ia.enable)));
                K.easeBounceIn(a._btnPanels1, a._tween).onComplete((ia = a._btnPanels1, o(ia, ia.enable)));
                K.easeBounceIn(a._btnPanels4, a._tween).onComplete((ia = a._btnPanels4, o(ia, ia.enable)));
                K.easeBounceIn(a._btnPanels8, a._tween).onComplete((ia = a._btnPanels8, o(ia, ia.enable))) }) },
        _onEventResizeCanvas: function() {
            this._tray.pos.to(0,
                0)
        },
        _addLoader: function() { null == this._loadWidget && (this._loadWidget = this._tray.addElement(new yc({ tween: this._tween, y: 195 })));!1 == this._loadWidget.get_active() && this._loadWidget.tweenIn(!0) },
        _onEventBackClicked: function() { r.dispatchFlowEvent(l.COMIC_PANEL_SELECT_EXIT) },
        _onEventBackToAvatar: function() { r.dispatchFlowEvent(l.AVATAR_BUILDER_OPEN) },
        _onEventPanelNumClicked: function(a) { this._chosen = !0;
            this._addLoader();
            i.get_instance().setInt(n.INT_PANEL_NUM, a.get_data().get("panels"));
            r.dispatchFlowEvent(l.COMIC_CREATOR_OPEN) },
        _clearInput: function() { return !this._chosen },
        __class__: sd
    });
    var yd = function(a, b) { D.call(this, a, b) };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenDebug"] = yd;
    yd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenDebug".split(",");
    yd.__super__ = D;
    yd.prototype = A(D.prototype, {
        _buildScreen: function() {
            this._tray = this._elementManager.addElement(new x({ x: r.STAGE_CENTER_X, y: 280 }));
            this._fill = new La(0, 8, 8);
            this._fill.scaleX.set__(r.STAGE_WIDTH / 8);
            this._fill.scaleY.set__(70);
            this._fill.alpha.set__(0.5);
            this._fill.setAnchor(4, 4);
            this._tray.root.addChild((new ea).add(this._fill));
            this._tray.alpha = 0;
            this._font = i.get_instance().get_localize().getLocalizeData("title").get_fontName();
            this._tray.addElement(new pa({ text: "Debug Menu", font: this._font, y: -260 }));
            this._tray.addElement(new pa({ text: "Game Version: 0.1", font: this._font, y: -300 }));
            this._buildButtons()
        },
        dispose: function() { D.prototype.dispose.call(this);
            this._font = this._tray = null;
            this._fill.dispose();
            this._fill = null },
        _addButton: function(a, b, c, e) {
            b =
                this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.blank, x: b - r.STAGE_CENTER_X, y: c - 280 }));
            b.dispatcher.addEventListener(k.BUTTON_CLICK, e);
            b.addElement(new pa({ text: a, font: this._font }))
        },
        _setInState: function() { K.easeSlideInFromDir(this._tray, this._tween, R.TOP).onComplete(o(this, this._finishOpenState)) },
        _setCloseState: function() { K.easeSlideOutToDir(this._tray, this._tween, R.BOTTOM).onComplete(o(this, this.setFlagDispose)) },
        _buildButtons: function() {
            this._addButton("X",
                50, 50, o(this, this._onCloseClick))
        },
        _onCloseClick: function() { r.dispatchFlowEvent(l.DEBUG_CLOSE) },
        __class__: yd
    });
    var Bd = function(a, b) { this._TRAY_IN_TIME_2 = 0.2;
        this._TRAY_IN_TIME = 0.35;
        D.call(this, a, b);
        this._closing = !1 };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenDeleteAvatar"] = Bd;
    Bd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenDeleteAvatar".split(",");
    Bd.__super__ = D;
    Bd.prototype = A(D.prototype, {
        _buildScreen: function() {
            this._elementManager.addElement(new x({
                asset: h.texture.black,
                x: -r.STAGE_CENTER_X,
                y: -280,
                scaleX: r.STAGE_WIDTH,
                scaleY: 560,
                alpha: 0.7
            }));
            this._tray = this._elementManager.addElement(new x({ asset: h.texture.popup_quit_bg, alpha: 0 }));
            this._tray.addElement(new L({ text: "delete_avatar", y: -60 }));
            this._tray.alpha = 0;
            this._tray.addElement(new L({ text: "delete_avatar_header", y: -190 }));
            var a = this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.popup_quit_btn, x: -120, y: 60 }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onYesClick));
            a.addElement(new L({ text: "yes", y: 0 }));
            a = this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.popup_quit_btn, x: 120, y: 60 }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onNoClick));
            a.addElement(new L({ text: "no", y: 0 }))
        },
        dispose: function() { D.prototype.dispose.call(this);
            this._tray = null },
        _setInState: function() { this._closing = !1;
            K.easeBounceIn(this._tray, this._tween).onComplete(o(this, this._finishOpenState)) },
        _setCloseState: function() {
            this._closing ||
                (this._closing = !0, K.easeBounceOut(this._tray, this._tween).onComplete(o(this, this.setFlagDispose)))
        },
        _onYesClick: function() { r.dispatchFlowEvent(l.CLOSE_DELETE_AVATAR);
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_AVATAR)) },
        _onNoClick: function() { r.dispatchFlowEvent(l.CLOSE_DELETE_AVATAR) },
        __class__: Bd
    });
    var Sc = function(a, b) {
        D.call(this, a, b);
        this._dialogueDef = i.get_instance().get_dialogue().grabData();
        this._dialogueTray = this._elementManager.addElement(new x({
            asset: h.texture.white,
            y: this._getPosY(this._dialogueDef.get_position())
        }));
        this._dialogueDef.get_mobileToggle() ? this._dialogueTray.addElement(new L({ text: i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) ? this._dialogueDef.get_text() + "_mobile" : this._dialogueDef.get_text(), x: 0, y: 0 })) : this._dialogueTray.addElement(new L({ text: this._dialogueDef.get_text(), x: 0, y: 0 }));
        this._clickThrough = !0;
        null != this._dialogueDef.get_triggerEvent() && (this._clickThrough = !1, i.get_instance().get_dispatcher().addEventListener(this._dialogueDef.get_triggerEvent(),
            o(this, this._onTrigger)));
        this._pointer = null != this._dialogueDef.get_pointerType() && this._dialogueDef.get_pointerType() != va.NONE ? null == this._dialogueDef.get_pointerLocation() ? this._elementManager.addElement(new x({ asset: h.texture.white, x: this._dialogueTray.get_x() + 0.5 * this._dialogueTray.getNaturalWidth(), y: this._dialogueTray.get_y() + 0.5 * this._dialogueTray.getNaturalHeight(), alpha: 0 })) : this._elementManager.addElement(new x({
            asset: h.texture.white,
            x: this._dialogueDef.get_pointerLocation().x,
            y: this._dialogueDef.get_pointerLocation().y,
            alpha: 0
        })) : null;
        this._timerPointer = 1.5;
        this._closing = !1
    };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenDialogue"] = Sc;
    Sc.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenDialogue".split(",");
    Sc.__super__ = D;
    Sc.prototype = A(D.prototype, {
        _getPosY: function(a) { switch (a[1]) {
                case 0:
                    return -180;
                case 2:
                    return 180 } return 0 },
        _useClickWall: function() { return !1 },
        dispose: function() {
            this._pointer = this._dialogueTray = null;
            null != this._dialogueDef.get_triggerEvent() && i.get_instance().get_dispatcher().removeEventListener(this._dialogueDef.get_triggerEvent(),
                o(this, this._onTrigger));
            this._dialogueDef.dispose();
            this._dialogueDef = null;
            D.prototype.dispose.call(this)
        },
        update: function(a) { D.prototype.update.call(this, a);!i.get_instance().getBool(n.BOOL_PAUSED) && this.get_state() == T.OPENED && (this._timerPointer -= a, 0 >= this._timerPointer && this._pointerBehavior()) },
        _pointerBehavior: function() {
            switch (this._dialogueDef.get_pointerType()[1]) {
                case 0:
                    this._timerPointer = 1.5;
                    this._tween.tween(this._pointer, 0.25, {
                        scale: 0.9,
                        x: this._pointer.get_x() - 5,
                        y: this._pointer.get_y() +
                            5
                    }, !0);
                    this._tween.tween(this._pointer, 0.25, { scale: 1, x: this._pointer.get_x(), y: this._pointer.get_y() }, !1);
                    break;
                case 2:
                    this._timerPointer = 2.5;
                    this._tween.tween(this._pointer, 0.15, { x: this._pointer.get_x() - 100 }, !0);
                    this._tween.tween(this._pointer, 0.25, { scale: 0.9, x: this._pointer.get_x() - 105, y: this._pointer.get_y() + 5 }, !1);
                    this._tween.tween(this._pointer, 0.5, { x: this._pointer.get_x() - 5, y: this._pointer.get_y() + 5 }, !1, q.IN, 0.25);
                    this._tween.tween(this._pointer, 0.25, { scale: 1, x: this._pointer.get_x(), y: this._pointer.get_y() },
                        !1, q.EASE_IN_OUT, 0.25);
                    break;
                case 1:
                    this._timerPointer = 1.5, this._tween.tween(this._pointer, 0.7, { x: this._pointer.get_x(), y: this._pointer.get_y() + 20 }, !0, q.IN), this._tween.tween(this._pointer, 0.7, { x: this._pointer.get_x(), y: this._pointer.get_y() }, !1, q.OUT)
            }
        },
        _onTrigger: function(a) { a.get_eventId() == this._dialogueDef.get_triggerEvent() && r.dispatchFlowEvent(l.DIALOGUE_CLOSE) },
        _setInState: function() {
            var a = this;
            K.easeSlideInFromDir(this._dialogueTray, this._tween, R.BOTTOM).onComplete(function() {
                null != a._pointer &&
                    K.easeBounceIn(a._pointer, a._tween);
                a._finishOpenState()
            })
        },
        _setCloseState: function() { var a = this;
            null != this._pointer && K.easeBounceOut(this._pointer, this._tween);
            K.easeSlideOutToDir(this._dialogueTray, this._tween, R.BOTTOM).onComplete(function() { i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DIALOGUE_LINE_COMPLETE));
                null != a._dialogueDef.get_endEvent() && i.get_instance().get_dispatcher().dispatchEvent(Q.request(a._dialogueDef.get_endEvent()));
                a.setFlagDispose() }) },
        _clearInput: function() {
            return i.get_instance().getBool(n.BOOL_PAUSED) ||
                !this._clickThrough ? !1 : D.prototype._clearInput.call(this)
        },
        _onInput: function(a, b, c, e) { switch (b[1]) {
                case 0:
                case 1:
                    switch (a[1]) {
                        case 0:
                            this.get_state() == T.OPENED && !1 == this._closing && c < r.STAGE_CENTER_X - 100 && 100 < e && (this._closing = !0, r.dispatchFlowEvent(l.DIALOGUE_CLOSE)) } } },
        __class__: Sc
    });
    var ud = function(a, b) { D.call(this, a, b);
        this._closing = !1 };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenHelp"] = ud;
    ud.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenHelp".split(",");
    ud.__super__ = D;
    ud.prototype =
        A(D.prototype, {
            _buildScreen: function() { this._tray = this._elementManager.addElement(new x({ asset: h.texture.white, alpha: 0 }));
                this._tray.addElement(new L({ text: "help", y: -170 }));
                this._button = this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.white, x: 150 }));
                this._button.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventPlayClick));
                this._tray.visible = !1 },
            dispose: function() { this._button = this._tray = null;
                D.prototype.dispose.call(this) },
            _setInState: function() {
                this._closing = !1;
                K.easeBounceIn(this._tray, this._tween).onComplete(o(this, this._finishOpenState))
            },
            _setCloseState: function() { this._closing || (this._closing = !0, K.easeBounceOut(this._tray, this._tween).onComplete(o(this, this.setFlagDispose))) },
            _onEventPlayClick: function() { r.dispatchFlowEvent(l.HELP_CLOSE) },
            __class__: ud
        });
    var qd = function(a, b) { D.call(this, a, b) };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenMainMenu"] = qd;
    qd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenMainMenu".split(",");
    qd.__super__ =
        D;
    qd.prototype = A(D.prototype, {
        _buildScreen: function() {
            var a = this._elementManager.addElement(new x({ asset: h.texture.menu_bg }));
            a.set_scale(1 / a.getNaturalWidth() * r.STAGE_WIDTH);
            560 * (1 / a.getNaturalHeight()) > a.get_scale() && a.set_scale(560 * (1 / a.getNaturalHeight()));
            this._tray = this._elementManager.addElement(new x({ asset: "", x: 0, y: 0, alpha: 1 }));
            a = this._btnMute = this._tray.addElement(new Lb({ tween: this._tween, clear: o(this, this._clearInput), x: r.STAGE_CENTER_X - 20, y: -230 }));
            a.set_x(a.get_x() - this._btnMute.getNaturalWidth() /
                2);
            this._buttonTray = this._tray.addElement(new x({ x: 0, y: 0, alpha: 0 }));
            this._btnComic = this._buttonTray.addElement(new y({ assetUp: h.texture.comic_creator_btn, x: -r.STAGE_WIDTH / 2, y: 100, alpha: 0, tween: this._tween, clear: o(this, this._clearButtonInput) }));
            this._btnComic.addElement(new L({ text: "btn_comic", y: 0, x: 75, lineSpacing: -10 }));
            this._btnComic.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventComicClicked));
            this._btnComic.disable();
            this._btnAvatar = this._buttonTray.addElement(new y({
                assetUp: h.texture.avatar_creator_btn,
                x: r.STAGE_WIDTH / 2,
                y: -100,
                alpha: 0,
                tween: this._tween,
                clear: o(this, this._clearButtonInput)
            }));
            this._btnAvatar.addElement(new L({ text: "btn_avatar", y: 0, x: -60, lineSpacing: -10 }));
            this._btnAvatar.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventAvatarClicked));
            this._btnAvatar.disable();
            this._tweeningOut = !1;
            this._tray.render()
        },
        dispose: function() { this._loadWidget = this._btnComic = this._buttonTray = this._btnAvatar = this._tray = null;
            D.prototype.dispose.call(this) },
        _setInState: function() {
            var a = this;
            K.easeBounceIn(this._buttonTray, this._tween).onComplete(function() { a._finishOpenState();
                a._enterButtons() })
        },
        _enterButtons: function() { var a = this,
                b = 0;
            this._tween.tween(this._btnAvatar, 0.2, { x: -30, alpha: 1 }, !0, q.QUAD_OUT, b);
            this._tween.tween(this._btnAvatar, 0.1, { x: 0 }, !1, q.BOUNCE_OUT, 0);
            this._tween.tween(this._btnComic, 0.2, { x: 30, alpha: 1 }, !0, q.QUAD_OUT, b + 0.2);
            this._tween.tween(this._btnComic, 0.1, { x: -10 }, !1, q.BOUNCE_OUT, 0).onComplete(function() { a._btnAvatar.enable();
                a._btnComic.enable() }) },
        _onEventResizeCanvas: function() {
            this._tray.pos.to(0,
                0)
        },
        _addLoader: function() { null == this._loadWidget && (this._loadWidget = this._tray.addElement(new yc({ tween: this._tween, y: 195 })));!1 == this._loadWidget.get_active() && this._loadWidget.tweenIn(!0) },
        _goToLoader: function() { K.easeBounceOut(this._buttonTray, this._tween, !1, 0).onComplete(o(this, this._addLoader)) },
        _onEventAvatarClicked: function() { this._tweeningOut || (this._goToLoader(), this._tweeningOut = !0, r.dispatchFlowEvent(l.AVATAR_TRAY_OPEN)) },
        _onEventComicClicked: function() {
            this._tweeningOut || (this._goToLoader(),
                this._tweeningOut = !0, r.dispatchFlowEvent(l.COMIC_PANEL_SELECT_OPEN))
        },
        __class__: qd
    });
    var Ad = function(a, b) { this._TRAY_IN_TIME_2 = 0.2;
        this._TRAY_IN_TIME = 0.35;
        D.call(this, a, b);
        this._closing = !1 };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenPopupShare"] = Ad;
    Ad.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenPopupShare".split(",");
    Ad.__super__ = D;
    Ad.prototype = A(D.prototype, {
        _buildScreen: function() {
            this._elementManager.addElement(new x({
                asset: h.texture.black,
                alpha: 0.75,
                scale: 2E3,
                x: -r.STAGE_CENTER_X,
                y: -280
            }));
            this._tray = this._elementManager.addElement(new x({ asset: h.texture.share_box, scaleY: 1.1 }));
            var a = i.get_instance().get_localize().getLocalizeData("submit");
            this._tray.addElement(new pa({ x: 0, y: 15, text: i.get_instance().getString(n.STRING_SHARE_URL).substring(0, 35), font: a.get_fontName(), scale: 0.3, align: ta.Center }));
            this._tray.addElement(new Id({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.panel_picker_view, x: 0, y: 0.5 * this._tray.height - 25 }));
            if (i.get_instance().getBool(n.BOOL_TOUCH_DEVICE)) try { this._shareOverlay.hideButton() } catch (b) {} this._tray.addElement(new L({
                text: "share_title",
                align: ta.Center,
                y: -40
            }));
            this._tray.addElement(new y({ tween: this._tween, assetUp: h.texture.universal_close, clear: o(this, this._clearInput), x: 0.5 * this._tray.width - 25, y: 0.5 * -this._tray.height + 25 })).dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onCloseClicked))
        },
        dispose: function() { D.prototype.dispose.call(this);
            this._tray = this._wall = null },
        update: function(a) {
            D.prototype.update.call(this, a);
            null != this._submitButton && (0 < this._shareOverlay.getBlankFields().length ? (this._submitButton.disable(), this._submitButton.alpha =
                0.5) : (this._submitButton.enable(), this._submitButton.alpha = 1))
        },
        _addEventListeners: function() { D.prototype._addEventListeners.call(this) },
        _removeEventListeners: function() { D.prototype._removeEventListeners.call(this) },
        _setInState: function() { this._closing = !1;
            this._finishOpenState() },
        _setCloseState: function() { this._closing || (this._closing = !0, this.setFlagDispose()) },
        _onSubmitClicked: function() { this.get_state() == T.OPENED && r.dispatchFlowEvent(l.CLOSE_POPUP_SHARE) },
        _onSubmitSuccess: function() {},
        _onCloseClicked: function() {
            this.get_state() ==
                T.OPENED && r.dispatchFlowEvent(l.CLOSE_POPUP_SHARE)
        },
        _onEventResizeCanvas: function() { D.prototype._onEventResizeCanvas.call(this);
            this._setInState() },
        __class__: Ad
    });
    var zd = function(a, b) { this._TRAY_IN_TIME_2 = 0.2;
        this._TRAY_IN_TIME = 0.35;
        D.call(this, a, b);
        this._closing = !1 };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenPopupSubmit"] = zd;
    zd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenPopupSubmit".split(",");
    zd.__super__ = D;
    zd.prototype = A(D.prototype, {
        _buildScreen: function() {
            this._elementManager.addElement(new x({
                asset: h.texture.black,
                x: -r.STAGE_CENTER_X,
                y: -280,
                scaleX: r.STAGE_WIDTH,
                scaleY: 560,
                alpha: 0.7
            }));
            this._flagSuccess = !1;
            this._tray = this._elementManager.addElement(new x({ asset: h.texture.share_panel, x: 0, y: 0 }));
            this._tray.addElement(new L({ text: "submit_title", y: -170 }));
            if (i.get_instance().getBool(n.BOOL_ANDROID_APP)) {
                this._textFields = [];
                var a;
                a = i.get_instance().get_localize().getLocalizeData("submit_field_first_name");
                this._textFields.push(this._tray.addElement(new Fb({
                    allowSymbols: !1,
                    allowNumbers: !1,
                    characterLimit: 10,
                    defaultText: a.get_string(),
                    x: -110,
                    y: -122
                })));
                a = i.get_instance().get_localize().getLocalizeData("submit_field_last_name");
                this._textFields.push(this._tray.addElement(new Fb({ allowSymbols: !1, allowNumbers: !1, characterLimit: 1, defaultText: a.get_string(), x: 65, y: -122 })));
                this._textFields[1].set_fieldWidth(0.7 * this._textFields[1].get_fieldWidth());
                a = i.get_instance().get_localize().getLocalizeData("submit_field_age");
                this._textFields.push(this._tray.addElement(new Fb({
                    allowSymbols: !1,
                    allowLetters: !1,
                    characterLimit: 2,
                    defaultText: a.get_string(),
                    x: -110,
                    y: -22
                })));
                this._tray.addElement(new x({ asset: h.texture.text_field, x: -130, y: 30, scale: 0.3 }));
                this._termsCheck = this._tray.addElement(new Hd({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.checkmark_btn, assetUpOff: h.texture.text_field, x: -130, y: 30 }));
                this._termsCheck.setScale(0.2, 0.2);
                this._stateList = this._tray.addElement(new Od({ x: -110, y: -72, originX: 0, originY: 0 }))
            } else this._shareOverlay = eval("NickShareOverlay");
            this._asterisks = [];
            this._tray.addElement(new L({
                text: "submit_name",
                align: ta.Right,
                x: -125,
                y: -120
            }));
            this._tray.addElement(new L({ text: "submit_location", align: ta.Right, x: -125, y: -70 }));
            this._tray.addElement(new L({ text: "submit_age", align: ta.Right, x: -125, y: -20 }));
            a = this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.popup_quit_btn, x: 0, y: 140 }));
            a.addElement(new L({ text: "submit" }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onSubmitClicked));
            a = this._tray.addElement(new y({
                tween: this._tween,
                clear: o(this, this._clearButtonInput),
                assetUp: h.texture.universal_close,
                x: 0.5 * this._tray.width - 25,
                y: 0.5 * -this._tray.height + 25
            }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onCloseClicked));
            this._agreementTray = this._tray.addElement(new x({ x: 0, y: 25 }));
            this._agreementTray.addElement(new L({ text: "agreement_intro", y: 0 }));
            a = this._agreementTray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: null, x: 0, y: 15 }));
            var b = a.addElement(new L({ text: "terms_clickable" }));
            a.setCustomHitBox(b.get_textDisplay().getNaturalWidth() *
                b.get_scale(), b.get_textDisplay().getNaturalHeight() * b.get_scale(), -b.get_textDisplay().getNaturalWidth() * b.get_scale() / 2, -b.get_textDisplay().getNaturalHeight() * b.get_scale() / 2);
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onTermsClicked));
            this._agreementTray.addElement(new L({ text: "and", x: 0, y: 30 }));
            a = this._agreementTray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: null, x: 0, y: 45 }));
            b = a.addElement(new L({ text: "content_clickable" }));
            a.setCustomHitBox(b.get_textDisplay().getNaturalWidth() *
                b.get_scale(), b.get_textDisplay().getNaturalHeight() * b.get_scale(), -b.get_textDisplay().getNaturalWidth() * b.get_scale() / 2, -b.get_textDisplay().getNaturalHeight() * b.get_scale() / 2);
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onContentClicked));
            this._popupTray = this._elementManager.addElement(new x({ asset: h.texture.share_panel, x: 0, y: 0, alpha: 0 })).disablePointerInput();
            this._popupHeader = this._popupTray.addElement(new L({ text: "submit_success_header", y: -60 }));
            this._popupBody = this._popupTray.addElement(new L({
                text: "submit_success_body",
                y: 15
            }));
            this._popupTray.alpha = 0;
            a = this._popupTray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.popup_quit_btn, x: 0, y: 0.5 * this._popupTray.height - 100 }));
            a.addElement(new L({ text: "ok" }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onPopupDoneClicked));
            this._flagCocoonKeyboard = !1
        },
        dispose: function() { D.prototype.dispose.call(this);
            this._agreementTray = this._popupBody = this._popupHeader = this._popupTray = this._tray = this._wall = null },
        _showCocoonKeyboard: function() {
            i.get_instance().getBool(n.BOOL_ANDROID_APP) &&
                !this._flagCocoonKeyboard && (this._flagCocoonKeyboard = !0, window.Cocoon.Dialog.showKeyboard({}, { insertText: o(this, this._onCocoonInsertText), deleteBackward: o(this, this._onCocoonDeleteBackward), done: o(this, this._onCocoonDone), cancel: o(this, this._onCocoonCancel) }))
        },
        _hideCocoonKeyboard: function() { i.get_instance().getBool(n.BOOL_ANDROID_APP) && this._flagCocoonKeyboard && (this._flagCocoonKeyboard = !1, window.Cocoon.Dialog.dismissKeyboard()) },
        _onCocoonInsertText: function(a) {
            this._handleInputArbitraryKeyKeyboard(Q.request(k.INPUT_ARBITRARY_KEY_KEYBOARD,
                function() { var b = new G;
                    b.set("key", a);
                    b.set("phase", ma.DOWN); return b }(this)))
        },
        _onCocoonDeleteBackward: function() { this._handleInputArbitraryKeyKeyboard(Q.request(k.INPUT_ARBITRARY_KEY_KEYBOARD, function() { var a = new G;
                a.set("key", f.Backspace);
                a.set("phase", ma.DOWN); return a }(this))) },
        _onCocoonDone: function() { this._flagCocoonKeyboard = !1 },
        _onCocoonCancel: function() { this._flagCocoonKeyboard = !1 },
        _addEventListeners: function() {
            D.prototype._addEventListeners.call(this);
            i.get_instance().get_dispatcher().addEventListener(k.TEXT_FIELD_ACTIVATE,
                o(this, this._onTextFieldSelect));
            i.get_instance().get_dispatcher().addEventListener(k.INPUT_ARBITRARY_KEY_KEYBOARD, o(this, this._handleInputArbitraryKeyKeyboard));
            i.get_instance().get_dispatcher().addEventListener(k.DROP_DOWN_ACTIVATE, o(this, this._onDropDownActivate));
            i.get_instance().get_dispatcher().addEventListener(k.DROP_DOWN_DEACTIVATE, o(this, this._onDropDownDeactivate));
            i.get_instance().get_dispatcher().addEventListener(k.SUBMIT_POPUP_CLOSED, o(this, this._onPopupClosed))
        },
        _removeEventListeners: function() {
            D.prototype._removeEventListeners.call(this);
            i.get_instance().get_dispatcher().removeEventListener(k.TEXT_FIELD_ACTIVATE, o(this, this._onTextFieldSelect));
            i.get_instance().get_dispatcher().removeEventListener(k.INPUT_ARBITRARY_KEY_KEYBOARD, o(this, this._handleInputArbitraryKeyKeyboard));
            i.get_instance().get_dispatcher().removeEventListener(k.DROP_DOWN_ACTIVATE, o(this, this._onDropDownActivate));
            i.get_instance().get_dispatcher().removeEventListener(k.DROP_DOWN_DEACTIVATE, o(this, this._onDropDownDeactivate));
            i.get_instance().get_dispatcher().removeEventListener(k.SUBMIT_POPUP_CLOSED,
                o(this, this._onPopupClosed))
        },
        _onTextFieldSelect: function() { i.get_instance().get_timer().start(o(this, this._showCocoonKeyboard), 0.2) },
        _onDropDownActivate: function() { for (var a = 0, b = this._textFields; a < b.length;) { var c = b[a];++a;
                c.disable() } },
        _onDropDownDeactivate: function() { for (var a = 0, b = this._textFields; a < b.length;) { var c = b[a];++a;
                c.enable() } this._hideCocoonKeyboard() },
        _onPopupOpened: function() {
            if (null != this._textFields)
                for (var a = 0, b = this._textFields; a < b.length;) { var c = b[a];++a;
                    c.disable() } null != this._stateList &&
                this._stateList.disable()
        },
        _onPopupClosed: function() { if (null != this._textFields)
                for (var a = 0, b = this._textFields; a < b.length;) { var c = b[a];++a;
                    c.enable() } null != this._stateList && this._stateList.enable();
            this._hideCocoonKeyboard() },
        _setInState: function() { this._closing = !1;
            this._positionOverlay();
            null != this._shareOverlay && this._shareOverlay.show();
            this._finishOpenState() },
        _positionOverlay: function() {
            var a = 1,
                a = 0.95;
            i.get_instance().getBool(n.BOOL_ANDROID_APP) || (this._shareOverlay.setWidth(r.STAGE_WIDTH - 36),
                this._shareOverlay.setFirstNameX(r.STAGE_CENTER_X - 130 * a), this._shareOverlay.setFirstNameY(140), this._shareOverlay.setInitialX(r.STAGE_CENTER_X + 110 * a), this._shareOverlay.setInitialY(140), this._shareOverlay.setInitialWidth(100), this._shareOverlay.setStateX(r.STAGE_CENTER_X - 130 * a), this._shareOverlay.setStateY(192), this._shareOverlay.setAgeX(r.STAGE_CENTER_X - 130 * a), this._shareOverlay.setAgeY(240), this._shareOverlay.setAgeWidth(40), this._shareOverlay.setAgreeX(r.STAGE_CENTER_X - 160 * a), this._shareOverlay.setAgreeY(295),
                i.get_instance().getBool(n.BOOL_IOS_APP) && (this._shareOverlay.setAgreeX(r.STAGE_CENTER_X - 200 * a), this._shareOverlay.setAgreeY(300)))
        },
        _setCloseState: function() { this._closing || (this._closing = !0, this.setFlagDispose(), null != this._shareOverlay && this._shareOverlay.hide()) },
        _onSubmitClicked: function() {
            if (this.get_state() == T.OPENED) {
                var a = [];
                if (i.get_instance().getBool(n.BOOL_ANDROID_APP)) {
                    if ("" == this._textFields[0].get_textField().get_text() && a.push("firstName"), "" == this._textFields[1].get_textField().get_text() &&
                        a.push("lastInitial"), "" == this._stateList.get_stateCode() && a.push("state"), "" == this._textFields[2].get_textField().get_text() && a.push("age"), this._termsCheck.get_checked() || a.push("terms"), 0 == a.length) {
                        var b = new zc("http://funnel.mtvnservices.com/api/v2/nick.com/collections/spongebob-squarepants-cartoon-creator-submissions/entries.json");
                        b.onData = o(this, this._onHttpSuccess);
                        b.setParameter("name", this._textFields[0].get_textField().get_text() + " " + this._textFields[1].get_textField().get_text());
                        b.setParameter("age",
                            this._textFields[2].get_textField().get_text());
                        b.setParameter("state", this._stateList.get_stateCode());
                        b.setParameter("GameUrl", i.get_instance().getString(n.STRING_SHARE_URL));
                        b.request(!0)
                    }
                } else a = this._shareOverlay.submit(i.get_instance().getString(n.STRING_SHARE_URL), o(this, this._onSubmitSuccess)), null;
                if (0 < a.length) {
                    for (b = this._asterisks.length; 0 < b;) b--, this._asterisks[b].doDelete = !0, this._asterisks.splice(b, 1);
                    for (var b = 0, c = a.length; b < c;) { var e = b++;
                        this._addAsterisk(a[e]) } this._hideTray();
                    this._popupHeader.swapTextToDisplay("submit_empty_header");
                    this._popupBody.swapTextToDisplay("submit_empty_body");
                    this._popupTray.enablePointerInput();
                    K.easeBounceIn(this._popupTray, this._tween)
                }
            }
        },
        _onTermsClicked: function() { this.get_state() == T.OPENED && (this._onPopupOpened(), r.dispatchFlowEvent(l.TERMS_OPEN)) },
        _onContentClicked: function() { this.get_state() == T.OPENED && (this._onPopupOpened(), r.dispatchFlowEvent(l.AGREEMENT_OPEN)) },
        _addAsterisk: function(a) {
            switch (a) {
                case "firstName":
                case "lastInitial":
                    this._asterisks.push(new x({
                        asset: h.texture.asterisk,
                        x: -115,
                        y: -100
                    }));
                    this._tray.addElement(this._asterisks[this._asterisks.length - 1]);
                    break;
                case "state":
                    this._asterisks.push(new x({ asset: h.texture.asterisk, x: -115, y: -50 }));
                    this._tray.addElement(this._asterisks[this._asterisks.length - 1]);
                    break;
                case "age":
                    this._asterisks.push(new x({ asset: h.texture.asterisk, x: -115, y: 0 }));
                    this._tray.addElement(this._asterisks[this._asterisks.length - 1]);
                    break;
                case "terms":
                    this._asterisks.push(new x({ asset: h.texture.asterisk, x: -160, y: 70 })), this._tray.addElement(this._asterisks[this._asterisks.length -
                        1])
            }
        },
        _onHttpSuccess: function() { this._onSubmitSuccess() },
        _onSubmitSuccess: function() { this._hideTray();
            this._flagSuccess = !0;
            this._popupHeader.swapTextToDisplay("submit_success_header");
            this._popupBody.swapTextToDisplay("submit_success_body");
            this._popupTray.enablePointerInput();
            K.easeBounceIn(this._popupTray, this._tween) },
        _hideTray: function() { this._tray.alpha = 0;
            null != this._shareOverlay && this._shareOverlay.hide() },
        _showTray: function() { this._tray.alpha = 1;
            null != this._shareOverlay && this._shareOverlay.show() },
        _onPopupDoneClicked: function() { this._flagSuccess ? r.dispatchFlowEvent(l.CLOSE_POPUP_SUBMIT) : (this._popupTray.disablePointerInput(), this._popupTray.alpha = 0, this._showTray()) },
        _onCloseClicked: function() { this.get_state() == T.OPENED && r.dispatchFlowEvent(l.CLOSE_POPUP_SUBMIT) },
        _onEventResizeCanvas: function() { D.prototype._onEventResizeCanvas.call(this);
            this._positionOverlay() },
        _handleInputArbitraryKeyKeyboard: function(a) {
            var b = B.string(a.get_data().get("key"));
            if (1 < b.length && ("Number" == M.substr(b, 0, 6) || "Numpad" ==
                    M.substr(b, 0, 6))) b = M.substr(b, b.length - 1, null);
            switch (a.get_data().get("phase")[1]) {
                case 0:
                    switch (b) {
                        case "Backspace":
                        case "Delete":
                            for (var b = null, a = 0, c = this._textFields; a < c.length;) { var e = c[a];++a; if (e.get_active()) { b = e; break } } null != b && b.removeCharFromInputBuffer();
                            break;
                        case "1":
                        case "2":
                        case "3":
                        case "4":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                        case "9":
                        case "0":
                        case "Q":
                        case "W":
                        case "E":
                        case "R":
                        case "T":
                        case "Y":
                        case "U":
                        case "I":
                        case "O":
                        case "P":
                        case "A":
                        case "S":
                        case "D":
                        case "F":
                        case "G":
                        case "H":
                        case "J":
                        case "K":
                        case "L":
                        case "Z":
                        case "X":
                        case "C":
                        case "V":
                        case "B":
                        case "N":
                        case "M":
                        case "q":
                        case "w":
                        case "e":
                        case "r":
                        case "t":
                        case "y":
                        case "u":
                        case "i":
                        case "o":
                        case "p":
                        case "a":
                        case "s":
                        case "d":
                        case "f":
                        case "g":
                        case "h":
                        case "j":
                        case "k":
                        case "l":
                        case "z":
                        case "x":
                        case "c":
                        case "v":
                        case "b":
                        case "n":
                        case "m":
                            a =
                                null;
                            c = 0;
                            for (e = this._textFields; c < e.length;) { var m = e[c];++c; if (m.get_active()) { a = m; break } } null != a && a.addCharToInputBuffer(b);
                            break;
                        case "Minus":
                            b = null;
                            a = 0;
                            for (c = this._textFields; a < c.length;)
                                if (e = c[a], ++a, e.get_active()) { b = e; break } null != b && b.addCharToInputBuffer("_")
                    }
            }
        },
        __class__: zd
    });
    var Cd = function(a, b) { this._TRAY_IN_TIME_2 = 0.2;
        this._TRAY_IN_TIME = 0.35;
        D.call(this, a, b);
        this._closing = !1 };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenPrintClose"] = Cd;
    Cd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenPrintClose".split(",");
    Cd.__super__ = D;
    Cd.prototype = A(D.prototype, {
        _buildScreen: function() { this._tray = this._elementManager.addElement(new x({ asset: h.texture.popup_quit_bg, alpha: 0 }));
            this._tray.addElement(new L({ text: "print_close", y: -195 }));
            this._tray.alpha = 0; var a = this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.popup_quit_btn, x: 0, y: 40 }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onYesClick));
            a.addElement(new L({ text: "ok", y: -5 })) },
        dispose: function() {
            D.prototype.dispose.call(this);
            this._tray = null
        },
        _setInState: function() { this._closing = !1;
            K.easeBounceIn(this._tray, this._tween).onComplete(o(this, this._finishOpenState)) },
        _setCloseState: function() { this._closing || (this._closing = !0, K.easeBounceOut(this._tray, this._tween).onComplete(o(this, this.setFlagDispose))) },
        _onYesClick: function() { i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.PRINT_CLOSE));
            r.dispatchFlowEvent(l.CLOSE_PRINT_CLOSE) },
        __class__: Cd
    });
    var vd = function(a, b) {
        this._TRAY_IN_TIME_2 = 0.2;
        this._TRAY_IN_TIME = 0.35;
        D.call(this, a, b);
        this._closing = !1
    };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenQuitConfirm"] = vd;
    vd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenQuitConfirm".split(",");
    vd.__super__ = D;
    vd.prototype = A(D.prototype, {
        _buildScreen: function() {
            this._elementManager.addElement(new x({ asset: h.texture.black, x: -r.STAGE_CENTER_X, y: -280, scaleX: r.STAGE_WIDTH, scaleY: 560, alpha: 0.7 }));
            this._tray = this._elementManager.addElement(new x({ asset: h.texture.popup_quit_bg, alpha: 0 }));
            this._tray.addElement(new L({
                text: "quit_confirm_header",
                y: -60
            }));
            this._tray.addElement(new L({ text: "quit", y: -190 }));
            this._tray.alpha = 0;
            var a = this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.popup_quit_btn, x: -120, y: 60 }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onYesClick));
            a.addElement(new L({ text: "yes", y: 0 }));
            a = this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.popup_quit_btn, x: 120, y: 60 }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK,
                o(this, this._onNoClick));
            a.addElement(new L({ text: "no", y: 0 }))
        },
        dispose: function() { D.prototype.dispose.call(this);
            this._tray = null },
        _setInState: function() { this._closing = !1;
            K.easeBounceIn(this._tray, this._tween).onComplete(o(this, this._finishOpenState)) },
        _setCloseState: function() { this._closing || (this._closing = !0, K.easeBounceOut(this._tray, this._tween).onComplete(o(this, this.setFlagDispose))) },
        _onYesClick: function() { r.dispatchFlowEvent(l.COMIC_QUIT_YES) },
        _onNoClick: function() { r.dispatchFlowEvent(l.COMIC_QUIT_NO) },
        __class__: vd
    });
    var pd = function(a, b) { this._BLINK_TIME = 1;
        D.call(this, a, b);
        this._blinkAllowed = !0;
        this._closing = !1;
        this._blinkTimer = this._BLINK_TIME;
        this._beginPreload() };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenSplash"] = pd;
    pd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenSplash".split(",");
    pd.__super__ = D;
    pd.prototype = A(D.prototype, {
        dispose: function() {
            Pb.sendGameEvent("onTitleScreenEnd");
            this._clickTray = this._loadWidget = this._buttonSound = this._textClickToPlay = this._tray = null;
            D.prototype.dispose.call(this)
        },
        _buildScreen: function() { this._tray = this._elementManager.addElement(new x({ asset: h.texture.splash, x: 0, y: 0 }));
            this._tray.set_scale(1 / this._tray.getNaturalWidth() * r.STAGE_WIDTH);
            560 * (1 / this._tray.getNaturalHeight()) > this._tray.get_scale() && this._tray.set_scale(560 * (1 / this._tray.getNaturalHeight())) },
        _addEventListeners: function() { D.prototype._addEventListeners.call(this);
            i.get_instance().get_dispatcher().addEventListener(k.SPLASH_OUTRO_COMPLETE, o(this, this._onEventSplashOutroComplete)) },
        _removeEventListeners: function() { i.get_instance().get_dispatcher().removeEventListener(k.SPLASH_OUTRO_COMPLETE, o(this, this._onEventSplashOutroComplete));
            D.prototype._removeEventListeners.call(this) },
        _beginPreload: function() { var a = ["fonts_" + i.get_instance().getString(n.STRING_REGION_ID)];
            i.get_instance().get_assets().load(o(this, this._onPreloadFinished), ["preload"], a, null, 0) },
        _onPreloadFinished: function() { i.get_instance().get_localize().parseLocalization();
            this._addPreload();
            this._beginInitialLoad(i.get_instance().getInt(n.INT_QUALITY)) },
        _beginInitialLoad: function(a) { if (0 == a) a = "initial_sd";
            else if (1 == a) a = "initial_hd";
            else throw "[Main](_beginInitialLoad) Error: Not expecting quality flag " + a + ". Nothing loaded."; var b;
            b = r.allAudioSupported() ? "initial_audio_optional" : "initial_audio_required";
            i.get_instance().get_assets().load(o(this, this._eventLoadCompleteInitial), [a, b], null, null, 1.2) },
        _eventLoadCompleteInitial: function() {
            Pb.sendGameEvent("onLoadingEnd");
            this._removeLoader();
            this._addClickTray();
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.INITIAL_LOAD_COMPLETE));
            Pb.sendGameEvent("onTitleScreenStart")
        },
        _addPreload: function() { this._addLoader() },
        _addLoader: function() { null == this._loadWidget && (this._loadWidget = this._tray.addElement(new yc({ tween: this._tween, y: 195 })));!1 == this._loadWidget.get_active() && this._loadWidget.tweenIn(!0) },
        _removeLoader: function() { null == this._loadWidget || !1 == this._loadWidget.get_active() || this._loadWidget.tweenOut() },
        _addClickTray: function() {
            H.sendGameStarted();
            var a;
            a = i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) ? "tap_anywhere" : "click_anywhere";
            this._clickTray = this._tray.addElement(new x({ y: 270, originY: 1, scale: 1 }));
            this._textClickToPlay = this._clickTray.addElement(new L({ text: a, y: 0, originY: 1 }))
        },
        update: function(a) {
            D.prototype.update.call(this, a);
            this._blinkAllowed && null != this._clickTray ? (this._blinkTimer -= a, 0 >= this._blinkTimer && (0 == this._textClickToPlay.alpha ? (this._blinkTimer = this._BLINK_TIME, this._textClickToPlay.alpha = 1) : (this._blinkTimer = this._BLINK_TIME / 2, this._textClickToPlay.alpha = 0))) : null != this._textClickToPlay && (this._textClickToPlay.alpha =
                0)
        },
        _onEventSplashOutroComplete: function() { r.dispatchFlowEvent(l.MAIN_MENU) },
        _doOutro: function() {},
        _onEventCodeClick: function() { this.get_state() == T.OPENED && (i.get_instance().setBool(n.BOOL_CODE_SCREEN_OPEN, !0), r.dispatchFlowEvent(l.ENTER_CODE_OPEN)) },
        _tweenOutClickTray: function() { null != this._clickTray && (this._tween.tween(this._clickTray, 0.15, { scaleX: 1.1, scaleY: 1.1 }, !0, q.QUAD_OUT), this._tween.tween(this._clickTray, 0.15, { scaleX: 0.1, scaleY: 0.1, alpha: 0 }, !1, q.QUAD_IN)) },
        _setCloseState: function() { this.setFlagDispose() },
        _onInput: function(a, b) { switch (b[1]) {
                case 0:
                case 1:
                    switch (a[1]) {
                        case 1:
                            !1 == this._closing && !1 == i.get_instance().getBool(n.BOOL_CODE_SCREEN_OPEN) && (this._closing = !0, this._tweenOutClickTray(), r.dispatchFlowEvent(l.MAIN_MENU)) } } },
        __class__: pd
    });
    var Dd = function(a, b) { this._TRAY_IN_TIME_2 = 0.2;
        this._TRAY_IN_TIME = 0.35;
        D.call(this, a, b);
        this._closing = !1 };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenSubmitConfirm"] = Dd;
    Dd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenSubmitConfirm".split(",");
    Dd.__super__ = D;
    Dd.prototype = A(D.prototype, {
        _buildScreen: function() { this._tray = this._elementManager.addElement(new x({ asset: h.texture.share_panel, alpha: 0 }));
            this._tray.addElement(new L({ text: "submit_popup", y: -100 }));
            this._tray.alpha = 0; var a = this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.popup_quit_btn, x: 0, y: 40 }));
            a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onNoClick));
            a.addElement(new L({ text: "ok", y: -5 })) },
        dispose: function() {
            D.prototype.dispose.call(this);
            this._tray = null
        },
        _setInState: function() { this._closing = !1;
            K.easeBounceIn(this._tray, this._tween).onComplete(o(this, this._finishOpenState)) },
        _setCloseState: function() { this._closing || (this._closing = !0, K.easeBounceOut(this._tray, this._tween).onComplete(o(this, this.setFlagDispose))) },
        _onNoClick: function() { r.dispatchFlowEvent(l.CLOSE_SUBMIT_CONFIRM) },
        __class__: Dd
    });
    var Ed = function(a, b) { D.call(this, a, b);
        this._closing = !1 };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenTermsOfUse"] = Ed;
    Ed.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenTermsOfUse".split(",");
    Ed.__super__ = D;
    Ed.prototype = A(D.prototype, {
        _buildScreen: function() {
            this._tray = this._elementManager.addElement(new x({ asset: h.texture.share_panel, x: 0, y: 0 }));
            i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) ? this._tray.addElement(new Wc("full_terms", { x: 0, y: -90 })) : this._shareOverlay = eval("ShareOverlay");
            i.get_instance().getBool(n.BOOL_ANDROID_APP) || (this._shareOverlayNick = eval("NickShareOverlay"));
            this._tray.addElement(new L({ text: "terms_title", x: 0, y: -160 }));
            this._tray.addElement(new y({
                tween: this._tween,
                clear: o(this, this._clearButtonInput),
                assetUp: h.texture.universal_close,
                x: 0.5 * this._tray.width - 25,
                y: 0.5 * -this._tray.height + 25
            })).dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onCloseClicked))
        },
        dispose: function() { D.prototype.dispose.call(this);
            this._shareOverlay = this._shareOverlayNick = this._tray = null },
        _setInState: function() {
            this._closing = !1;
            this._positionOverlay();
            i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) || this._shareOverlay.show();
            null != this._shareOverlayNick && this._shareOverlayNick.hide();
            this._finishOpenState()
        },
        _positionOverlay: function() { if (!i.get_instance().getBool(n.BOOL_TOUCH_DEVICE)) { var a = i.get_instance().get_localize().getLocalizeData("full_terms"),
                    b;
                b = 1 - 0.65 * (r.STAGE_WIDTH / 560 - 1.714);
                this._shareOverlay.setText(a.get_string());
                this._shareOverlay.setWidth(550 * b);
                this._shareOverlay.setHeight(290 * b);
                this._shareOverlay.setPosition(280 - 120 / b) } },
        _setCloseState: function() {
            this._closing || (this._closing = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.SUBMIT_POPUP_CLOSED)),
                i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) || this._shareOverlay.hide(), null != this._shareOverlayNick && this._shareOverlayNick.show(), this.setFlagDispose())
        },
        _onCloseClicked: function() { this.get_state() == T.OPENED && r.dispatchFlowEvent(l.TERMS_CLOSE) },
        _onEventResizeCanvas: function() { D.prototype._onEventResizeCanvas.call(this);
            this._positionOverlay() },
        __class__: Ed
    });
    var Fd = function(a, b) { D.call(this, a, b);
        this._closing = !1 };
    j["com.nick.spongebob.comic_creator.ui.screens.ScreenUserContentSubmissionAgreement"] =
        Fd;
    Fd.__name__ = "com,nick,spongebob,comic_creator,ui,screens,ScreenUserContentSubmissionAgreement".split(",");
    Fd.__super__ = D;
    Fd.prototype = A(D.prototype, {
        _buildScreen: function() {
            this._tray = this._elementManager.addElement(new x({ asset: h.texture.share_panel, x: 0, y: 0 }));
            i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) ? this._tray.addElement(new Wc("full_content", { x: 0, y: -90 })) : this._shareOverlay = eval("ShareOverlay");
            i.get_instance().getBool(n.BOOL_ANDROID_APP) || (this._shareOverlayNick = eval("NickShareOverlay"));
            this._tray.addElement(new L({ text: "content_title", x: 0, y: -160 }));
            this._tray.addElement(new y({ tween: this._tween, clear: o(this, this._clearButtonInput), assetUp: h.texture.universal_close, x: 0.5 * this._tray.width - 25, y: 0.5 * -this._tray.height + 25 })).dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onCloseClicked))
        },
        dispose: function() { D.prototype.dispose.call(this);
            this._shareOverlay = this._shareOverlayNick = this._tray = null },
        _setInState: function() {
            this._closing = !1;
            this._positionOverlay();
            i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) ||
                this._shareOverlay.show();
            null != this._shareOverlayNick && this._shareOverlayNick.hide();
            this._finishOpenState()
        },
        _positionOverlay: function() { if (!i.get_instance().getBool(n.BOOL_TOUCH_DEVICE)) { var a = i.get_instance().get_localize().getLocalizeData("full_content"),
                    b;
                b = 1 - 0.65 * (r.STAGE_WIDTH / 560 - 1.714);
                this._shareOverlay.setText(a.get_string());
                this._shareOverlay.setWidth(550 * b);
                this._shareOverlay.setHeight(290 * b);
                this._shareOverlay.setPosition(280 - 120 / b) } },
        _setCloseState: function() {
            this._closing || (this._closing = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.SUBMIT_POPUP_CLOSED)), i.get_instance().getBool(n.BOOL_TOUCH_DEVICE) || this._shareOverlay.hide(), null != this._shareOverlayNick && this._shareOverlayNick.show(), this.setFlagDispose())
        },
        _onCloseClicked: function() { this.get_state() == T.OPENED && r.dispatchFlowEvent(l.AGREEMENT_CLOSE) },
        _onEventResizeCanvas: function() { D.prototype._onEventResizeCanvas.call(this);
            this._positionOverlay() },
        __class__: Fd
    });
    var Od = function(a) {
        this._numShown = 4;
        this._selected =
            0;
        this._highlightThickness = 4;
        this._padding = 5;
        this._scratchPoint = new sa;
        x.call(this, a);
        this._flagEnabled = !0;
        this._flagMouseDown = this._flagActive = !1;
        this._text = [];
        this._startPos = [];
        this._field = this.addElement(new x({ asset: h.texture.text_field, originX: 0, originY: 0 }));
        this._field.render();
        this._states = [{ code: "AL", state: "Alabama" }, { code: "AK", state: "Alaska" }, { code: "AZ", state: "Arizona" }, { code: "AR", state: "Arkansas" }, { code: "CA", state: "California" }, { code: "CO", state: "Colorado" }, { code: "CT", state: "Connecticut" },
            { code: "DE", state: "Delaware" }, { code: "DC", state: "District Of Columbia" }, { code: "FL", state: "Florida" }, { code: "GA", state: "Georgia" }, { code: "HI", state: "Hawaii" }, { code: "ID", state: "Idaho" }, { code: "IL", state: "Illinois" }, { code: "IN", state: "Indiana" }, { code: "IA", state: "Iowa" }, { code: "KS", state: "Kansas" }, { code: "KY", state: "Kentucky" }, { code: "LA", state: "Louisiana" }, { code: "ME", state: "Maine" }, { code: "MD", state: "Maryland" }, { code: "MA", state: "Massachusetts" }, { code: "MI", state: "Michigan" }, { code: "MN", state: "Minnesota" }, {
                code: "MS",
                state: "Mississippi"
            }, { code: "MO", state: "Missouri" }, { code: "MT", state: "Montana" }, { code: "NE", state: "Nebraska" }, { code: "NV", state: "Nevada" }, { code: "NH", state: "New Hampshire" }, { code: "NJ", state: "New Jersey" }, { code: "NM", state: "New Mexico" }, { code: "NY", state: "New York" }, { code: "NC", state: "North Carolina" }, { code: "ND", state: "North Dakota" }, { code: "OH", state: "Ohio" }, { code: "OK", state: "Oklahoma" }, { code: "OR", state: "Oregon" }, { code: "PA", state: "Pennsylvania" }, { code: "RI", state: "Rhode Island" }, { code: "SC", state: "South Carolina" },
            { code: "SD", state: "South Dakota" }, { code: "TN", state: "Tennessee" }, { code: "TX", state: "Texas" }, { code: "UT", state: "Utah" }, { code: "VT", state: "Vermont" }, { code: "VA", state: "Virginia" }, { code: "WA", state: "Washington" }, { code: "WV", state: "West Virginia" }, { code: "WI", state: "Wisconsin" }, { code: "WY", state: "Wyoming" }
        ];
        for (var b = 0, c = a = 0, e = c = 0, m = this._states.length; e < m;) {
            var d = e++;
            this._text.push(this.addElement(new L({ text: "submit_text", align: ta.Left, x: this._padding, originX: 0 })));
            this._text[d].set_doLocalize(!1);
            this._text[d].set_text(this._states[d].state);
            c = this._text[d].get_textDisplay().getNaturalWidth() * this._text[d].get_scale();
            c > b && (b = c);
            c = this._text[d].get_textDisplay().getNaturalHeight() * this._text[d].get_scale();
            c > a && (a = c)
        }
        this._textHeight = a;
        this._textWidth = b;
        e = 0;
        for (m = this._text.length; e < m;) c = e++, this._text[c].pos.y = c * a;
        this._field.scaleX = (b + 2 * this._padding) / this._field.width;
        this._field.scaleY = (a * this._numShown + 4 * this._padding) / this._field.height;
        b = a / this._field.height;
        this._activeHighlight = new La(43775, this._field.width * this._field.scaleX +
            4, this._field.height * b + 4);
        this._activeHighlight.x.set__(-0.5 * this._highlightThickness);
        this._activeHighlight.alpha.set__(0.5);
        this._imageEntity.addChild((new ea).add(this._activeHighlight));
        this._field.pos.y = -a / 2 - 2 * this._padding;
        this._hitRect = Ra.request(-(this._field.width * this._field.scaleX) * this._field.originX, -(this._field.height * b) * this._field.originY, this._field.width * this._field.scaleX, this._field.height * b);
        this._rootSprite.scissor = new Sa;
        this._setInactive()
    };
    j["com.nick.spongebob.comic_creator.ui.text.DropDownList"] =
        Od;
    Od.__name__ = "com,nick,spongebob,comic_creator,ui,text,DropDownList".split(",");
    Od.__super__ = x;
    Od.prototype = A(x.prototype, {
        dispose: function() { x.prototype.dispose.call(this);
            this._startPos = this._states = this._scratchPoint = this._hitRect = this._activeHighlight = this._text = this._field = null },
        get_stateCode: function() { return this._states[this._selected].code },
        update: function(a) {
            x.prototype.update.call(this, a);
            this._activeHighlight.y.set__(-0.5 * this._highlightThickness + this._text[this._selected].pos.y - this._textHeight /
                2)
        },
        _setActive: function() { this._flagActive = !0;
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DROP_DOWN_ACTIVATE));
            this._rootSprite.scissor.set(2 * -this._padding, -this._textHeight / 2, this._textWidth + 6 * this._padding, this._textHeight * this._numShown);
            this._activeHighlight.set_visible(!0) },
        _setInactive: function() {
            this._flagActive = !1;
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DROP_DOWN_DEACTIVATE));
            this._rootSprite.scissor.set(2 * -this._padding, -this._textHeight / 2, this._textWidth +
                6 * this._padding, this._textHeight);
            this._activeHighlight.set_visible(!1)
        },
        _addEventListeners: function() { x.prototype._addEventListeners.call(this);
            i.get_instance().get_input().addDelegateListener(o(this, this._onInput)) },
        _removeEventListeners: function() { x.prototype._removeEventListeners.call(this);
            i.get_instance().get_input().removeDelegateListener(o(this, this._onInput)) },
        _onInput: function(a, b, c, e) {
            if (this._flagEnabled) switch (b[1]) {
                case 0:
                    switch (this._imageSprite.getViewMatrix().inverseTransform(c, e,
                        this._scratchPoint), b = this._hitRect.contains(this._scratchPoint.x, this._scratchPoint.y), a[1]) {
                        case 0:
                            !this._flagActive && b && this._setActive();
                            this._scratchPoint.x > this._hitRect.get_left() && this._scratchPoint.x < this._hitRect.get_right() && (this._flagMouseDown = !0, this._onDown(this._scratchPoint.y)); break;
                        case 2:
                            this._onMove(c, e); break;
                        case 1:
                            this._flagMouseDown = !1, (this._scratchPoint.x < this._hitRect.get_left() || this._scratchPoint.x > this._hitRect.get_right()) && this._onUp() }
            }
        },
        _onDown: function(a) {
            if (this._flagActive)
                for (var b =
                        0, c = this._text.length; b < c;) { var e = b++;
                    this._startPos[e] = this._text[e].pos.y;
                    Math.abs(this._text[e].pos.y - a) < this._textHeight / 2 && (this._selected = e) }
        },
        _onMove: function() {
            if (this._flagActive && this._flagMouseDown) {
                var a = i.get_instance().get_input().pointer.get_currentPos().y - i.get_instance().get_input().pointer.get_originPos().y;
                0 < this._startPos[0] + a && (a = -this._startPos[0]);
                this._startPos[this._text.length - 1] + a < this._textHeight * (this._numShown - 1) && (a = -this._startPos[this._text.length - 1]);
                for (var b = 0,
                        c = this._text.length; b < c;) { var e = b++;
                    this._text[e].pos.y = this._startPos[e] + a }
            }
        },
        _onUp: function() { if (this._flagActive) { for (var a = -this._startPos[this._selected], b = 0, c = this._text.length; b < c;) { var e = b++;
                    this._text[e].pos.y = this._startPos[e] + a } this._setInactive() } },
        enable: function() { this._flagEnabled = !0 },
        disable: function() { this._flagEnabled = !1;
            this._setInactive() },
        __class__: Od,
        __properties__: A(x.prototype.__properties__, { get_stateCode: "get_stateCode" })
    });
    var Wc = function(a, b) {
        this._fieldHeight = 200;
        this._fieldWidth =
            400;
        this._padding = 5;
        this._scratchPoint = new sa;
        x.call(this, b);
        this.pos.x = -this._fieldWidth / 2;
        this._field = this.addElement(new x({ asset: h.texture.text_field, originX: 0, originY: 0, x: -this._padding }));
        var c = i.get_instance().get_localize().getLocalizeData("textarea_terms_agreement");
        this._text = this.addElement(new L({ text: "textarea_terms_agreement", align: ta.Left, x: 0, originX: 0, originY: 0, width: this._fieldWidth / c.get_scale() }));
        this._text.set_doLocalize(!1);
        this._text.set_text(i.get_instance().get_localize().getString(a));
        this._text.get_textDisplay().getNaturalWidth();
        c = this._text.get_textDisplay().getNaturalHeight();
        this._field.scaleX = (this._fieldWidth + 2 * this._padding) / this._field.width;
        this._field.scaleY = (this._fieldHeight + 2 * this._padding) / this._field.height;
        this._scrollBar = new La(43775, 5, 5);
        this._scrollBar.x.set__(this._fieldWidth);
        this._imageEntity.addChild((new ea).add(this._scrollBar));
        this._hitRect = Ra.request(-(this._field.width * this._field.scaleX) * this._field.originX, -(this._field.height * this._field.scaleY) *
            this._field.originY, this._field.width * this._field.scaleX, this._field.height * this._field.scaleY);
        this._rootSprite.scissor = new Sa(-this._padding, 0, this._fieldWidth + 3 * this._padding, this._fieldHeight + 2 * this._padding);
        this._flagMouseDown = !1;
        this._textHeight = c * this._text.get_scale()
    };
    j["com.nick.spongebob.comic_creator.ui.text.TextArea"] = Wc;
    Wc.__name__ = "com,nick,spongebob,comic_creator,ui,text,TextArea".split(",");
    Wc.__super__ = x;
    Wc.prototype = A(x.prototype, {
        dispose: function() {
            x.prototype.dispose.call(this);
            this._scrollBar = this._scratchPoint = this._hitRect = this._text = this._field = null
        },
        update: function(a) { x.prototype.update.call(this, a) },
        _addEventListeners: function() { x.prototype._addEventListeners.call(this);
            i.get_instance().get_input().addDelegateListener(o(this, this._onInput)) },
        _removeEventListeners: function() { x.prototype._removeEventListeners.call(this);
            i.get_instance().get_input().removeDelegateListener(o(this, this._onInput)) },
        _onInput: function(a, b, c, e) {
            switch (b[1]) {
                case 0:
                    switch (this._imageSprite.getViewMatrix().inverseTransform(c,
                        e, this._scratchPoint), b = this._hitRect.contains(this._scratchPoint.x, this._scratchPoint.y), a[1]) {
                        case 0:
                            b && this._onDown(); break;
                        case 2:
                            this._onMove(); break;
                        case 1:
                            this._onUp() }
            }
        },
        _onDown: function() { this._flagMouseDown = !0;
            this._startPos = this._text.pos.y },
        _onMove: function() {
            if (this._flagMouseDown) {
                var a = i.get_instance().get_input().pointer.get_currentPos().y - i.get_instance().get_input().pointer.get_originPos().y,
                    b = -this._textHeight + this._fieldHeight;
                0 < this._startPos + a && (a = -this._startPos);
                this._startPos +
                    a < b && (a = b - this._startPos);
                this._text.pos.y = this._startPos + a;
                this._scrollBar.y.set__(0 + (this._fieldHeight + this._scrollBar.height._value - 0) * ((this._text.pos.y - 0) / (b - 0)))
            }
        },
        _onUp: function() { this._flagMouseDown = !1 },
        __class__: Wc
    });
    var Fb = function(a) {
        this._padding = 5;
        this._highlightThickness = 4;
        x.call(this, a);
        this._flagEnabled = !0;
        this._allowSymbols = null == a.allowSymbols ? !0 : a.allowSymbols;
        this._allowNumbers = null == a.allowNumbers ? !0 : a.allowNumbers;
        this._allowLetters = null == a.allowLetters ? !0 : a.allowLetters;
        this._characterLimit =
            null == a.characterLimit ? 5 : a.characterLimit;
        this._inputBuffer = null == a.defaultText ? "" : a.defaultText;
        var b;
        b = 0 == this._inputBuffer.length ? this._characterLimit : this._inputBuffer.length;
        var c = i.get_instance().get_localize().getLocalizeData("submit_text");
        this._font = i.get_instance().get_assets().getFont(c.get_fontName(), !0);
        this._glyphWidth = this._font.getGlyph(M.cca("M", 0)).width * c.get_scale();
        this._glyphHeight = this._font.getGlyph(M.cca("M", 0)).height * c.get_scale();
        this._field = this.addElement(new x({
            asset: h.texture.text_field,
            originX: 0
        }));
        this._field.render();
        this._field.scaleX = (b * this._glyphWidth + 2 * this._padding) / this._field.width;
        this._field.scaleY = (this._glyphHeight + 2 * this._padding) / this._field.height;
        this._activeHighlight = new La(43775, this._field.width * this._field.scaleX + 4, this._field.height * this._field.scaleY + 4);
        this._activeHighlight.x.set__(-0.5 * this._highlightThickness);
        this._activeHighlight.y.set__(-0.5 * this._highlightThickness - this._field.height * this._field.scaleY * this._field.originY);
        this._imageEntity.addChild((new ea).add(this._activeHighlight),
            !1);
        this._inputTextField = this.addElement(new L({ text: "submit_text", align: ta.Left, x: this._padding, originX: 0 }));
        this._inputTextField.set_doLocalize(!1);
        this._inputTextField.set_text("");
        this._defaultText = this.addElement(new L({ text: "submit_text", align: ta.Left, x: this._padding, originX: 0 }));
        this._defaultText.set_doLocalize(!1);
        this._defaultText.set_text(a.defaultText);
        this._defaultText.visible = "" == this._inputTextField.get_text();
        this._inputBuffer = "";
        this._hitRect = Ra.request(-(this._field.width * this._field.scaleX) *
            this._field.originX, -(this._field.height * this._field.scaleY) * this._field.originY, this._field.width * this._field.scaleX, this._field.height * this._field.scaleY);
        this._renderInactive()
    };
    j["com.nick.spongebob.comic_creator.ui.text.TextFieldBase"] = Fb;
    Fb.__name__ = "com,nick,spongebob,comic_creator,ui,text,TextFieldBase".split(",");
    Fb.__super__ = x;
    Fb.prototype = A(x.prototype, {
        get_active: function() { return this._active },
        get_fieldWidth: function() { return this._field.width * this._field.scaleX },
        set_fieldWidth: function(a) {
            this._field.scaleX =
                a / this._field.width;
            this._activeHighlight.setSize(this._field.width * this._field.scaleX + 4, this._field.height * this._field.scaleY + 4);
            return this.get_fieldWidth()
        },
        get_fieldHeight: function() { return this._field.height * this._field.scaleY },
        get_textField: function() { return this._inputTextField },
        _addEventListeners: function() {
            x.prototype._addEventListeners.call(this);
            i.get_instance().get_dispatcher().addEventListener(k.TEXT_FIELD_ACTIVATE, o(this, this._onTextFieldSelect));
            i.get_instance().get_input().addDelegateListener(o(this,
                this._onInput))
        },
        _removeEventListeners: function() { x.prototype._removeEventListeners.call(this);
            i.get_instance().get_dispatcher().removeEventListener(k.TEXT_FIELD_ACTIVATE, o(this, this._onTextFieldSelect));
            i.get_instance().get_input().removeDelegateListener(o(this, this._onInput)) },
        _onTextFieldSelect: function() { this._renderInactive() },
        addCharToInputBuffer: function(a) {
            var b = null != B.parseInt(a),
                c = !1,
                e = M.cca(a, 0);
            if (65 <= e && 90 >= e || 97 <= e && 122 >= e) c = !0;
            !this._allowSymbols && !c && !b || !this._allowNumbers && b || !this._allowLetters &&
                c || this._inputBuffer.length >= this._characterLimit || (this._inputBuffer += a, this._inputTextField.set_doLocalize(!1), this._inputTextField.set_text(this._inputBuffer), this._defaultText.visible = "" == this._inputTextField.get_text())
        },
        removeCharFromInputBuffer: function() { 0 < this._inputBuffer.length && (this._inputBuffer = this._inputBuffer.substring(0, this._inputBuffer.length - 1), this._inputTextField.set_doLocalize(!1), this._inputTextField.set_text(this._inputBuffer));
            this._defaultText.visible = "" == this._inputTextField.get_text() },
        _onInput: function(a, b, c, e) { if (this._flagEnabled) switch (b[1]) {
                case 0:
                    switch (this._imageSprite.getViewMatrix().inverseTransform(c, e, Fb._scratchPoint), b = this._hitRect.contains(Fb._scratchPoint.x, Fb._scratchPoint.y), a[1]) {
                        case 0:
                            b && this._onDown() } } },
        _onDown: function() { this._active || (this._dispatch(k.TEXT_FIELD_ACTIVATE), this._renderActive()) },
        _renderActive: function() { this._active = !0;
            this._activeHighlight.alpha.set__(1) },
        _renderInactive: function() { this._active = !1;
            this._activeHighlight.alpha.set__(0) },
        _dispatch: function(a) { i.get_instance().get_dispatcher().dispatchEvent(Q.request(a)) },
        enable: function() { this._flagEnabled = !0 },
        disable: function() { this._flagEnabled = !1;
            this._renderInactive() },
        __class__: Fb,
        __properties__: A(x.prototype.__properties__, { get_textField: "get_textField", get_fieldHeight: "get_fieldHeight", set_fieldWidth: "set_fieldWidth", get_fieldWidth: "get_fieldWidth", get_active: "get_active" })
    });
    var Ma = j["com.nick.spongebob.comic_creator.world._World.WORLD_STATE"] = {
        __ename__: "com,nick,spongebob,comic_creator,world,_World,WORLD_STATE".split(","),
        __constructs__: ["_STATE_ALLOCATE", "_STATE_INITIALIZING", "_STATE_GAMEPLAY"]
    };
    Ma._STATE_ALLOCATE = ["_STATE_ALLOCATE", 0];
    Ma._STATE_ALLOCATE.toString = g;
    Ma._STATE_ALLOCATE.__enum__ = Ma;
    Ma._STATE_INITIALIZING = ["_STATE_INITIALIZING", 1];
    Ma._STATE_INITIALIZING.toString = g;
    Ma._STATE_INITIALIZING.__enum__ = Ma;
    Ma._STATE_GAMEPLAY = ["_STATE_GAMEPLAY", 2];
    Ma._STATE_GAMEPLAY.toString = g;
    Ma._STATE_GAMEPLAY.__enum__ = Ma;
    Ma.__empty_constructs__ = [Ma._STATE_ALLOCATE, Ma._STATE_INITIALIZING, Ma._STATE_GAMEPLAY];
    var xb = j["com.nick.spongebob.comic_creator.world._World.VIEW_STATE"] = { __ename__: "com,nick,spongebob,comic_creator,world,_World,VIEW_STATE".split(","), __constructs__: ["OVERVIEW", "EDIT_PANEL"] };
    xb.OVERVIEW = ["OVERVIEW", 0];
    xb.OVERVIEW.toString = g;
    xb.OVERVIEW.__enum__ = xb;
    xb.EDIT_PANEL = ["EDIT_PANEL", 1];
    xb.EDIT_PANEL.toString = g;
    xb.EDIT_PANEL.__enum__ = xb;
    xb.__empty_constructs__ = [xb.OVERVIEW, xb.EDIT_PANEL];
    var ng = function(a) {
        this._inputPos = W.request();
        this._timeline = a;
        this._tween = Xa.request();
        i.get_instance().get_pool().tracePoolReport();
        this._cacheManager = new Je;
        this._elementManager =
            new Kd(this._timeline, 0, 0);
        this._elementManager.addLayer(Aa.BG, !0);
        this._elementManager.addLayer(Aa.WORLD, !0);
        this._addEventListeners();
        this._setState(Ma._STATE_ALLOCATE)
    };
    j["com.nick.spongebob.comic_creator.world.World"] = ng;
    ng.__name__ = "com,nick,spongebob,comic_creator,world,World".split(",");
    ng.prototype = {
        start: function() { this._setState(Ma._STATE_GAMEPLAY) },
        dispose: function() {
            this._timeline = null;
            this._elementManager.dispose();
            this._elementManager = null;
            this._cacheManager.dispose();
            this._cacheManager =
                null;
            this._tween.dispose();
            this._tween = null;
            this._inputPos.dispose();
            this._inputPos = null;
            this._removeEventListeners();
            this._activePanel = this._panels = this._viewState = this._state = null
        },
        _setState: function(a) { this._state = a; switch (a[1]) {
                case 0:
                    this._initPools(); break;
                case 1:
                    this._initWorld(), this._onGenerationComplete() } },
        _setViewState: function(a) { this._viewState = a },
        update: function(a) {
            if (!i.get_instance().getBool(n.BOOL_PAUSED)) switch (this._state[1]) {
                case 0:
                    this._cacheManager.processFill(10) && this._setState(Ma._STATE_INITIALIZING);
                    break;
                case 2:
                    this._tween.update(a), this._elementManager.updateElements(a)
            }
        },
        _addEventListeners: function() { i.get_instance().get_input().addDelegateListener(o(this, this._onInput));
            i.get_instance().get_dispatcher().addEventListener(k.PAUSE, o(this, this._onPause));
            i.get_instance().get_dispatcher().addEventListener(k.UNPAUSE, o(this, this._onUnpause)) },
        _removeEventListeners: function() {
            i.get_instance().get_input().removeDelegateListener(o(this, this._onInput));
            i.get_instance().get_dispatcher().removeEventListener(k.PAUSE,
                o(this, this._onPause));
            i.get_instance().get_dispatcher().removeEventListener(k.UNPAUSE, o(this, this._onUnpause))
        },
        _onPause: function() { i.get_instance().setBool(n.BOOL_PAUSED, !0) },
        _onUnpause: function() { i.get_instance().setBool(n.BOOL_PAUSED, !1) },
        _createWorldComicElem: function(a) { this._viewState == xb.OVERVIEW && null != this._activePanel || (a.get_data().get("type"), a.get_data().get("image"), a.get_data().get("x"), a.get_data().get("y")) },
        _onInput: function(a, b, c, e) {
            i.get_instance().getBool(n.BOOL_PAUSED) || this._state ==
                Ma._STATE_INITIALIZING || this._elementManager.get_camera().getWorldPositionOfScreenPoint(c, e, 0, this._inputPos)
        },
        _initPools: function() { i.get_instance().setInt(n.FLOAT_LOADING_PROGRESS, 100) },
        _initWorld: function() { this._panels = [];
            this._elementManager.updateZSort(Aa.WORLD);
            this._setViewState(xb.OVERVIEW) },
        _onGenerationComplete: function() { i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.WORLD_GENERATION_COMPLETE)) },
        __class__: ng
    };
    var bc = function(a) {
        x.call(this, a);
        this._data = new ac;
        this._body =
            this.addElement(new yb({ library: h.spine.HDCC_avatar_boy.name, x: 0, y: 0, trace: !1 }));
        this._body.setSkin(h.spine.HDCC_avatar_boy.skins.skintone1);
        this._body.animate(h.spine.HDCC_avatar_boy.animations.default_pose);
        this._curLibrary = this._data.library = h.spine.HDCC_avatar_boy.name;
        this.randomizeAvatar()
    };
    j["com.nick.spongebob.comic_creator.world.elements.Avatar"] = bc;
    bc.__name__ = "com,nick,spongebob,comic_creator,world,elements,Avatar".split(",");
    bc.__super__ = x;
    bc.prototype = A(x.prototype, {
        dispose: function() {
            this._body.doDelete = !0;
            this._data = this._body = null;
            x.prototype.dispose.call(this)
        },
        _updateAppearance: function(a) {
            null == a && (a = !1);
            this._curLibrary != this._data.library && this.changeGender(!1);
            for (var b, c = this._data.get_customizations().keys(); c.hasNext();) {
                var e = c.next();
                if (e == p.SKIN) this._body.setSkin(xa.get_instance().getItem(this._data.get_customizations().get(e)).get_boneAssignments()[0].name);
                else if (b = xa.get_instance().getItem(this._data.get_customizations().get(e)), null != b) {
                    var m = 0;
                    for (b = b.get_boneAssignments(); m <
                        b.length;) { var d = b[m];++m;
                        a && null;
                        (e == p.BOTTOM || e == p.TOP) && this._data.library == h.spine.HDCC_avatar_girl.name ? this._body.setAttachment(d.bone, d.name + "_g") : this._body.setAttachment(d.bone, d.name) }
                }
            }
        },
        loadAvatarInfo: function(a) { this._data.refresh(a.get_name(), a.get_customizations(), a.library);
            this._updateAppearance() },
        getAvatarItem: function(a) { return this._body.getAttachment(a) },
        setAvatarItem: function(a, b) {
            if (this._data.get_customizations().get(a) == b && -1 < Eb.OPTIONAL_SLOTS.indexOf(a)) {
                var c = this._data.get_customizations(),
                    e = Eb.getEmptyItemForSlot(a);
                c.set(a, e);
                e
            } else this._data.get_customizations().set(a, b), b;
            this._updateConflicts(a, b);
            this._updateAppearance()
        },
        getAvatarData: function() { return this._data },
        randomizeAvatar: function() { for (var a = this._data.get_customizations().keys(); a.hasNext();) { var b = a.next(),
                    c = this._data.get_customizations(),
                    e = Eb.getRandomItemForSlot(b);
                c.set(b, e);
                e;
                this._updateConflicts(b, this._data.get_customizations().get(b)) } this._data.set_created(!0);
            this._updateAppearance() },
        _updateConflicts: function() {},
        getQueryString: function() { return this._data.getQueryString() },
        loadQueryString: function() { this._data.loadQueryString();
            this._data.library == h.spine.HDCC_avatar_girl.name && this.changeGender();
            this.loadAvatarInfo(this._data) },
        changeGender: function(a) {
            null == a && (a = !0);
            this._curLibrary == h.spine.HDCC_avatar_boy.name ? (this._body.doDelete = !0, this._body = this.addElement(new yb({ library: h.spine.HDCC_avatar_girl.name, x: 0, y: 0, trace: !1 })), this._body.animate(h.spine.HDCC_avatar_girl.animations.default_pose), this._body.setSkin(h.spine.HDCC_avatar_boy.skins.skintone1),
                this._curLibrary = this._data.library = h.spine.HDCC_avatar_girl.name) : (this._body.doDelete = !0, this._body = this.addElement(new yb({ library: h.spine.HDCC_avatar_boy.name, x: 0, y: 0, trace: !1 })), this._body.animate(h.spine.HDCC_avatar_boy.animations.default_pose), this._body.setSkin(h.spine.HDCC_avatar_boy.skins.skintone1), this._curLibrary = this._data.library = h.spine.HDCC_avatar_boy.name);
            a && this._updateAppearance()
        },
        __class__: bc
    });
    var ua = j["com.nick.spongebob.comic_creator.world.elements.COMIC_ELEM_STATE"] = {
        __ename__: "com,nick,spongebob,comic_creator,world,elements,COMIC_ELEM_STATE".split(","),
        __constructs__: ["IN", "IDLE", "DRAGGING", "ANIMATING", "OUT"]
    };
    ua.IN = ["IN", 0];
    ua.IN.toString = g;
    ua.IN.__enum__ = ua;
    ua.IDLE = ["IDLE", 1];
    ua.IDLE.toString = g;
    ua.IDLE.__enum__ = ua;
    ua.DRAGGING = ["DRAGGING", 2];
    ua.DRAGGING.toString = g;
    ua.DRAGGING.__enum__ = ua;
    ua.ANIMATING = ["ANIMATING", 3];
    ua.ANIMATING.toString = g;
    ua.ANIMATING.__enum__ = ua;
    ua.OUT = ["OUT", 4];
    ua.OUT.toString = g;
    ua.OUT.__enum__ = ua;
    ua.__empty_constructs__ = [ua.IN, ua.IDLE, ua.DRAGGING, ua.ANIMATING, ua.OUT];
    var V = j["com.nick.spongebob.comic_creator.world.elements.COMIC_ELEM_TYPE"] = { __ename__: "com,nick,spongebob,comic_creator,world,elements,COMIC_ELEM_TYPE".split(","), __constructs__: ["AVATAR", "BG", "CHARACTER", "BUBBLE", "TEXT"] };
    V.AVATAR = ["AVATAR", 0];
    V.AVATAR.toString = g;
    V.AVATAR.__enum__ = V;
    V.BG = ["BG", 1];
    V.BG.toString = g;
    V.BG.__enum__ = V;
    V.CHARACTER = ["CHARACTER", 2];
    V.CHARACTER.toString = g;
    V.CHARACTER.__enum__ = V;
    V.BUBBLE = ["BUBBLE", 3];
    V.BUBBLE.toString = g;
    V.BUBBLE.__enum__ = V;
    V.TEXT = ["TEXT", 4];
    V.TEXT.toString = g;
    V.TEXT.__enum__ = V;
    V.__empty_constructs__ = [V.AVATAR, V.BG, V.CHARACTER, V.BUBBLE,
        V.TEXT
    ];
    var Ta = j["com.nick.spongebob.comic_creator.world.elements.BOTTOM_PANEL_STATE"] = { __ename__: "com,nick,spongebob,comic_creator,world,elements,BOTTOM_PANEL_STATE".split(","), __constructs__: ["HIDDEN", "SHOWN", "TWEENING"] };
    Ta.HIDDEN = ["HIDDEN", 0];
    Ta.HIDDEN.toString = g;
    Ta.HIDDEN.__enum__ = Ta;
    Ta.SHOWN = ["SHOWN", 1];
    Ta.SHOWN.toString = g;
    Ta.SHOWN.__enum__ = Ta;
    Ta.TWEENING = ["TWEENING", 2];
    Ta.TWEENING.toString = g;
    Ta.TWEENING.__enum__ = Ta;
    Ta.__empty_constructs__ = [Ta.HIDDEN, Ta.SHOWN, Ta.TWEENING];
    var Ac = function(a) {
        this.tLastChar =
            "";
        this._pageIndex = this.tCharIndex = 0;
        this._bottomPanelElems = [];
        this._tabs = [];
        a.y = 280;
        x.call(this, a);
        this._tween = a.tween;
        this._init()
    };
    j["com.nick.spongebob.comic_creator.world.elements.ComicBottomTray"] = Ac;
    Ac.__name__ = "com,nick,spongebob,comic_creator,world,elements,ComicBottomTray".split(",");
    Ac.__super__ = x;
    Ac.prototype = A(x.prototype, {
        dispose: function() { x.prototype.dispose.call(this) },
        update: function(a) { x.prototype.update.call(this, a) },
        show: function() {
            var a = this;
            this._populate();
            this._tween.tween(this,
                0.7, { y: 0 }, !0, q.BOUNCE_OUT, 0.3, "").onComplete(function() { a._shown = !0 })
        },
        hide: function() { this._tween.tween(this, 0.5, { y: 280 }, !0, q.IN, 0, "");
            this._shown = !1 },
        refreshButtons: function() { this._depopulate();
            this._populate() },
        _addEventListeners: function() { x.prototype._addEventListeners.call(this);
            i.get_instance().get_dispatcher().addEventListener(k.REFRESH_COMIC_AVATARS, o(this, this._refreshAvatars)) },
        _removeEventListeners: function() {
            x.prototype._removeEventListeners.call(this);
            i.get_instance().get_dispatcher().removeEventListener(k.REFRESH_COMIC_AVATARS,
                o(this, this._refreshAvatars))
        },
        _init: function() {
            this._trash = this.addElement(new x({ x: 0.08823529411764706 * r.STAGE_WIDTH - r.STAGE_CENTER_X, y: 40 }));
            this._bottomTrayBack = this.addElement(new x({ asset: h.texture.main_box_select, originY: 0.5 })).disablePointerInput();
            this._bottomTrayBack.set_y(200);
            for (var a = 0; 5 > a;) {
                var b = a++,
                    c = 30,
                    e = h.texture.main_btn_select_characters;
                switch (b) {
                    case 1:
                        c = -275;
                        e = h.texture.main_btn_select_backgrounds_selected;
                        break;
                    case 0:
                        c = -120;
                        e = h.texture.main_btn_select_avatars;
                        break;
                    case 3:
                        c =
                            180;
                        e = h.texture.main_btn_select_bubbles;
                        break;
                    case 4:
                        c = 300, e = h.texture.main_btn_select_text
                }
                c = this.addElement(new y({ asset: e, tween: this._tween, clear: o(this, this._clear), x: c, y: 120 }));
                c.setDispatchData(function() { var a = new G;
                    a.set("index", b); return a }(this));
                c.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onTabClick));
                c.addElement(new L({ text: "comic_tab_" + (b + 1), y: 0 }));
                this._tabs.push(c)
            }
            this._arrowLeft = this.addElement(new y({
                asset: h.texture.universal_select_arrow,
                x: -310,
                y: this._bottomTrayBack.get_y(),
                tween: this._tween,
                clear: o(this, this._clear)
            }));
            this._arrowLeft.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onLeftArrow));
            this._arrowLeft.disable();
            this._arrowLeft.alpha = 0.5;
            this._arrowRight = this.addElement(new y({ asset: h.texture.universal_select_arrow, x: 310, y: this._bottomTrayBack.get_y(), scaleX: -1, tween: this._tween, clear: o(this, this._clear) }));
            this._arrowRight.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onRightArrow));
            this._shown = !1;
            this._selectedTab = V.BG;
            this._bottomState =
                Ta.SHOWN
        },
        _setBottomState: function(a) { this._bottomState = a },
        _onRightArrow: function() { this._arrowClick(!1) },
        _onLeftArrow: function() { this._arrowClick(!0) },
        _refreshArrows: function() {
            0 == this._pageIndex ? (this._arrowLeft.disable(), this._arrowLeft.alpha = 0.5) : (this._arrowLeft.enable(), this._arrowLeft.alpha = 1);
            this._selectedTab != V.AVATAR && (this._pageIndex + 1) * this._getNumItems() >= this._getAssetArray().length || this._selectedTab == V.AVATAR && 1 == this._pageIndex ? (this._arrowRight.disable(), this._arrowRight.alpha =
                0.5) : (this._arrowRight.enable(), this._arrowRight.alpha = 1)
        },
        _arrowClick: function(a) { a ? this._pageIndex-- : this._pageIndex++;
            this._depopulate();
            this._populate();
            this._refreshArrows() },
        _getNumItems: function() { var a = 5;
            this._selectedTab == V.BG && (a = 3); return a },
        _getAssetArray: function() {
            var a = [];
            switch (this._selectedTab[1]) {
                case 1:
                    for (var a = [], b = 1; 25 > b;) { var c = b++;
                        a.push("comic_background_" + c + "_") }
                    break;
                case 2:
                    a = "kd1,kd2,kd3,kd4,captainman1,captainman2,captainman3,captainman4,hd1,hd2,hd3,hd4,charlotte1,charlotte2,charlotte3,charlotte4,jasper1,jasper2,jasper3,jasper4,pizzaguy1,pizzaguy2,pizzaguy3,pizzaguy4,jeffrey1,jeffrey2,jeffrey3,jeffrey4,drillfinger1,drillfinger2,drillfinger3,drillfinger4,alien1,alien2,alien3,alien4,evilbaby1,evilbaby2,evilbaby3,evilbaby4,bird1,bird2,bird3,bird4,gator1,gator2,gator3,gator4".split(",");
                    break;
                case 3:
                    a = [h.texture.d1, h.texture.d2, h.texture.d3, h.texture.d4, h.texture.t1, h.texture.t2, h.texture.y1, h.texture.y2, h.texture.arrgh, h.texture.bam, h.texture.biff, h.texture.kapow, h.texture.pow, h.texture.wham, h.texture.zoom];
                    break;
                case 4:
                    for (b = 0; 93 > b;) c = b++, a.push("comic_text_" + (c + 1))
            }
            return a
        },
        _depopulate: function() { for (var a = this._bottomPanelElems.length; 0 <= --a;) this._bottomPanelElems[a].doDelete = !0, this._bottomPanelElems.splice(a, 1) },
        _populate: function() {
            this._depopulate();
            var a = this._getAssetArray(),
                b = this._getNumItems();
            if (this._selectedTab == V.AVATAR) this._populateAvatars();
            else {
                for (; this._pageIndex * b > a.length;) this._pageIndex--;
                for (var c = this._pageIndex * b, e = this._pageIndex * b + b; c < e;) {
                    var m = c++,
                        d = null;
                    if (a.length == m) break;
                    if (this._selectedTab == V.BG) {
                        d = "mini";
                        switch (i.get_instance().getInt(n.INT_PANEL_NUM)) {
                            case 1:
                                d = "large"; break;
                            case 4:
                                d = 0 == i.get_instance().getInt(n.INT_PANEL_INDEX) || 3 == i.get_instance().getInt(n.INT_PANEL_INDEX) ? "medium" : "small" } d = this.addElement(new da({
                            tween: this._tween,
                            clear: o(this,
                                this._clear),
                            x: 180 * (m % b - 1),
                            y: this._bottomTrayBack.get_y(),
                            type: this._selectedTab,
                            image: a[m] + d,
                            asset: a[m] + d
                        }));
                        d.SetToMaxSize(160, 100)
                    } else this._selectedTab == V.TEXT ? d = this.addElement(new da({ text: a[m], tween: this._tween, clear: o(this, this._clear), x: 110 * (m % b - 2), y: this._bottomTrayBack.get_y(), type: this._selectedTab, image: a[m] })) : this._selectedTab == V.CHARACTER ? (this.tLastChar == a[m] ? this.tCharIndex++ : (this.tLastChar = a[m], this.tCharIndex = 0), d = this.addElement(new mb({
                        asset: a[m],
                        tween: this._tween,
                        clear: o(this,
                            this._clear),
                        x: 110 * (m % b - 2),
                        y: this._bottomTrayBack.get_y(),
                        type: this._selectedTab
                    }))) : d = this.addElement(new da({ tween: this._tween, clear: o(this, this._clear), x: 110 * (m % b - 2), y: this._bottomTrayBack.get_y(), type: this._selectedTab, image: a[m], asset: a[m] })), d.SetToMaxSize(100, 100);
                    this._selectedTab != V.CHARACTER && this._selectedTab != V.BG && (d.rotation = 12 * Math.random() - 6);
                    this._bottomPanelElems.push(d)
                }
            }
        },
        _populateAvatars: function() {
            for (var a, b = new y({
                    asset: h.texture.avatar_placeholder,
                    tween: this._tween,
                    clear: o(this,
                        this._clear)
                }), c = 5 * this._pageIndex, e = 5 * this._pageIndex + 5; c < e;) {
                var m = c++;
                ra.get_instance().avatars.exists(m) && !0 == ra.get_instance().avatars.get(m).get_created() ? (a = this.addElement(new Za({ x: 110 * (m % this._getNumItems() - 2), y: this._bottomTrayBack.get_y(), tween: this._tween, clear: o(this, this._clear), type: this._selectedTab, image: h.texture.blank }, m)), a.addElement(new pa({ text: ra.get_instance().avatars.get(m).get_name(), font: "lh_comic_black", scale: 0.25, y: 90 })).set_scale(0.25), a.setCustomHitBox(b.getNaturalWidth(),
                    b.getNaturalHeight(), -b.getNaturalWidth() / 2, -b.getNaturalHeight() / 2), a.setScale(0.6, 0.6)) : (a = this.addElement(new y({ assetUp: h.texture.avatar_placeholder, x: 110 * (m % this._getNumItems() - 2), y: this._bottomTrayBack.get_y(), tween: this._tween, clear: o(this, this._clear) })), a.addElement(new x({ asset: h.texture.avatar_picker_add, x: 45, y: -35, scale: 0.7 })).disablePointerInput(), a.setCustomHitBox(a.getNaturalWidth() + 50, a.getNaturalHeight()), a.setScale(0.75, 0.75), a.setDispatchData(function() {
                    var b = new G;
                    b.set("btn",
                        a);
                    b.set("index", m);
                    return b
                }(this)), a.dispatcher.addEventListener(k.BUTTON_CLICK, o(this, this._onEventAvatarClicked)));
                this._bottomPanelElems.push(a)
            }
            b.doDelete = !0;
            b = null
        },
        _refreshAvatars: function() { this._depopulate();
            this._populateAvatars() },
        _onEventAvatarClicked: function(a) { i.get_instance().setInt(n.INT_CURRENT_AVATAR, a.get_data().get("index"));
            i.get_instance().setBool(n.BOOL_FLOW_AVATAR_FROM_COMIC, !0);
            r.dispatchFlowEvent(l.AVATAR_BUILDER_OPEN) },
        _onTabClick: function(a) {
            if (!1 != this._shown) {
                if (!a.get_data().exists("index") ||
                    5 <= a.get_data().get("index") || 0 > a.get_data().get("index")) throw "[WM - MB] Invalid tab index: " + B.string(a.get_data().exists("index") ? a.get_data().get("index") : "NULL");
                a = a.get_data().get("index");
                this._selectedTab = Y.createEnumIndex(V, a, null);
                for (var b = h.texture.main_btn_select_characters, c = 0; 5 > c;) {
                    var e = c++;
                    switch (e) {
                        case 1:
                            b = h.texture.main_btn_select_backgrounds;
                            break;
                        case 0:
                            b = h.texture.main_btn_select_avatars;
                            break;
                        case 3:
                            b = h.texture.main_btn_select_bubbles;
                            break;
                        case 4:
                            b = h.texture.main_btn_select_text;
                            break;
                        case 2:
                            b = h.texture.main_btn_select_characters
                    }
                    this._tabs[e].setAsset(b)
                }
                switch (a) {
                    case 0:
                        b = h.texture.main_btn_select_avatars_selected; break;
                    case 1:
                        b = h.texture.main_btn_select_backgrounds_selected; break;
                    case 2:
                        b = h.texture.main_btn_select_characters_selected; break;
                    case 3:
                        b = h.texture.main_btn_select_bubbles_selected; break;
                    case 4:
                        b = h.texture.main_btn_select_text_selected } this._tabs[a].setAsset(b);
                this._pageIndex = 0;
                this._populate();
                this._refreshArrows()
            }
        },
        _clear: function() {
            return this._bottomState !=
                Ta.SHOWN ? !1 : !0
        },
        __class__: Ac
    });
    var da = function(a) {
        this._clickTimer = 0;
        null == a.asset && (a.asset = h.texture.blank);
        y.call(this, a);
        this._id = da._idAssign;
        da._idAssign++;
        this._tween = a.tween;
        this._initDownPos = W.request();
        this._clickOffset = W.request();
        this._type = a.type;
        this._comicState = ua.IN;
        this._asset = this.comicAsset = a.image;
        null == this.comicAsset && (this.comicAsset = a.library);
        null == this.comicAsset && (this.comicAsset = a.asset);
        null == this.comicAsset && (this.comicAsset = a.assetUp);
        null == this.comicAsset && (this.comicAsset =
            a.text);
        this._asset = this.comicAsset;
        null != a.text && (this.text = this.addElement(new L({ text: a.text, width: 550 })), this.text.disablePointerInput(), this.setCustomHitBox(this.text.get_textDisplay().getNaturalWidth() * this.text.get_scale(), this.text.get_textDisplay().getNaturalHeight() * this.text.get_scale(), -this.text.get_textDisplay().getNaturalWidth() * this.text.get_scale() / 2, -this.text.get_textDisplay().getNaturalHeight() * this.text.get_scale() / 2), this._asset = a.text);
        this.setInitPos();
        this._scratchPoint = W.request()
    };
    j["com.nick.spongebob.comic_creator.world.elements.ComicElem"] = da;
    da.__name__ = "com,nick,spongebob,comic_creator,world,elements,ComicElem".split(",");
    da.__super__ = y;
    da.prototype = A(y.prototype, {
        dispose: function() { this._asset = this._state = this._type = this._tween = null;
            this._scratchPoint.dispose();
            this._scratchPoint = null;
            this._initDownPos.dispose();
            this._initDownPos = null;
            this._clickOffset.dispose();
            this._clickOffset = null;
            y.prototype.dispose.call(this) },
        setInitPos: function() {
            this._initX = this.get_x();
            this._initY =
                this.get_y()
        },
        update: function(a) { y.prototype.update.call(this, a);
            0 < this._clickTimer && (this._clickTimer -= a);
            this._updatedDragPos = !1 },
        _onInput: function(a, b, c, e, m) {
            y.prototype._onInput.call(this, a, b, c, e, m);
            if ((this._state == ba._STATE_DOWN || this._flagDragged) && !1 == this._updatedDragPos && this._state != ba._STATE_OVER && this._type != V.BG && !(10 > Math.abs(this._initDownPos.x - c) + Math.abs(this._initDownPos.y - e))) this._updatedDragPos = this._flagDragged = !0, a = new sa(0, 0), this.parent.getViewMatrix().inverseTransform(c,
                e, a), this.pos.to(a.x - this._clickOffset.x, a.y - this._clickOffset.y)
        },
        _click: function() { 0 < this._clickTimer || (this._clickTimer = 1, this._playSoundClick(), this._doClick(), this._onClickComplete(), i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.BUTTON_DROP, function(a) { var b = new G;
                b.set("btn", a);
                b.set("click", !0); return b }(this))), this.SnapToTray()) },
        _onDrag: function() {
            this._tween.stop(this);
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.BUTTON_DRAG, function(a) {
                var b = new G;
                b.set("btn",
                    a);
                return b
            }(this)));
            this._flagDragged = !0
        },
        _onDrop: function() { this._flagDragged = !1;
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.BUTTON_DROP, function(a) { var b = new G;
                b.set("btn", a); return b }(this)));
            this._renderUp();
            this.SnapToTray() },
        SnapToTray: function() { this._flagDragged = !1;
            this.pos.to(this._initX, this._initY) },
        SetToMaxSize: function(a, b) {
            var c = this;
            null != this.text && (c = this.text);
            c.set_scale(1 / c.getNaturalWidth() * a);
            1 / c.getNaturalHeight() * b < c.get_scale() && c.set_scale(1 / c.getNaturalHeight() *
                b);
            1 < c.get_scale() && c.set_scale(1);
            null != this.text && (this.setCustomHitBox(this.text.getScaledWidth(), this.text.getScaledHeight()), this._hitBox.setXY(-this.text.getScaledWidth() / 2, -this.text.getScaledHeight() / 2))
        },
        getQueryString: function() { var a;
            a = "" + ("&ce&x=" + this.get_x() + "&y=" + this.get_y() + "&t=" + this._type[1] + "&r=" + this.rotation); return a += "&a=" + this.get_asset() },
        _renderOver: function() {},
        _renderOut: function() {},
        _renderDown: function() { this.setAsset(this._assetDown) },
        _onDown: function(a, b) {
            var c = new sa(0,
                0);
            this.parent.getViewMatrix().inverseTransform(a, b, c);
            this._clickOffset.to(c.x - this.pos.x, c.y - this.pos.y);
            y.prototype._onDown.call(this, a, b);
            this._initDownPos.to(a, b)
        },
        _renderReturnUp: function() { this._renderUp() },
        get_type: function() { return this._type },
        get_state: function() { return this._comicState },
        get_asset: function() { return this._asset },
        __class__: da,
        __properties__: A(y.prototype.__properties__, { get_asset: "get_asset", get_state: "get_state", get_type: "get_type" })
    });
    var Za = function(a, b) {
        da.call(this, a);
        this.index = b;
        this._avatar = new bc({ y: 70, scale: 0.2 });
        this.addElement(this._avatar);
        this._avatar.loadAvatarInfo(ra.get_instance().avatars.get(b));
        this._avatar.disablePointerInput();
        this.setCustomHitBox(this._avatar.getNaturalWidth() / 2, this._avatar.getNaturalHeight() / 2)
    };
    j["com.nick.spongebob.comic_creator.world.elements.ComicElemAvatar"] = Za;
    Za.__name__ = "com,nick,spongebob,comic_creator,world,elements,ComicElemAvatar".split(",");
    Za.__super__ = da;
    Za.prototype = A(da.prototype, {
        dispose: function() {
            this._avatar =
                this._tween = null;
            da.prototype.dispose.call(this)
        },
        update: function(a) { da.prototype.update.call(this, a) },
        _onInput: function(a, b, c, e, m) { da.prototype._onInput.call(this, a, b, c, e, m) },
        SetToMaxSize: function(a, b) {
            var c = this._avatar;
            c.set_scale(1 / c.getNaturalWidth() * a);
            1 / c.getNaturalHeight() * b < c.get_scale() && c.set_scale(1 / c.getNaturalHeight() * b);
            null != this.text && (this.setCustomHitBox(this._avatar.getScaledWidth(), this._avatar.getScaledHeight()), this._hitBox.setXY(-this._avatar.getScaledWidth() / 2, -this._avatar.getScaledHeight() /
                2))
        },
        getNaturalWidth: function() { return 100 },
        getNaturalHeight: function() { return 175 },
        __class__: Za
    });
    var mb = function(a) { da.call(this, a) };
    j["com.nick.spongebob.comic_creator.world.elements.ComicElemChar"] = mb;
    mb.__name__ = "com,nick,spongebob,comic_creator,world,elements,ComicElemChar".split(",");
    mb.__super__ = da;
    mb.prototype = A(da.prototype, {
        dispose: function() { this._tween = null;
            da.prototype.dispose.call(this) },
        update: function(a) { da.prototype.update.call(this, a) },
        _onInput: function(a, b, c, e, m) {
            da.prototype._onInput.call(this,
                a, b, c, e, m)
        },
        SetToMaxSize: function(a, b) { this.set_scale(1 / this.getNaturalWidth() * a);
            1 / this.getNaturalHeight() * b < this.get_scale() && this.set_scale(1 / this.getNaturalHeight() * b);
            1 < this.get_scale() && this.set_scale(1) },
        __class__: mb
    });
    var Nd = function(a) {
        this._panel = a.panel;
        a.scale /= this._panel.get_scale() * a.trayScale;
        da.call(this, a);
        this._scalingRoot = this;
        this._dotted = this.addElement(new x({ asset: h.texture.comic_rotation_dotted, originX: 1 }));
        this._dotted.scaleX = 0.5 * this._scalingRoot.getNaturalWidth() / this._dotted.getNaturalWidth();
        this._dotted.scaleY = 2;
        this._rotTool = this.addElement(new wc({ x: -this._dotted.getScaledWidth(), tween: this._tween, clear: a.clear, scale: 1 }));
        this._scaleTool = this.addElement(new xc({ x: this._scalingRoot.getNaturalWidth() / 2, y: this._scalingRoot.getNaturalHeight() / 2, tween: this._tween, clear: a.clear, scale: 1 }));
        this._deleteTool = this.addElement(new vc({ x: this._scalingRoot.getNaturalWidth() / 2, y: -this._scalingRoot.getNaturalHeight() / 2, tween: this._tween, clear: a.clear, scale: 1 }));
        null != this.text && (this.set_scale(0.5 *
            this.get_scale()), this._text = this.text.get_text(), this._sendTracking());
        this._rotTool.setBaseScale(this._panel.get_scale());
        this._scaleTool.setBaseScale(this._panel.get_scale());
        this._deleteTool.setBaseScale(this._panel.get_scale())
    };
    j["com.nick.spongebob.comic_creator.world.elements.ComicPanelElem"] = Nd;
    Nd.__name__ = "com,nick,spongebob,comic_creator,world,elements,ComicPanelElem".split(",");
    Nd.__super__ = da;
    Nd.prototype = A(da.prototype, {
        dispose: function() { da.prototype.dispose.call(this) },
        _addEventListeners: function() { da.prototype._addEventListeners.call(this) },
        _removeEventListeners: function() { da.prototype._removeEventListeners.call(this) },
        update: function(a) { da.prototype.update.call(this, a) },
        _onInput: function(a, b, c, e, m) {
            da.prototype._onInput.call(this, a, b, c, e, m);
            switch (b[1]) {
                case 0:
                    switch (a[1]) {
                        case 0:
                            if (!this._containsInput || !this._depthTest(c, e)) { if (1 == this._rotTool.alpha && (this._rotTool.containsInput(c, e) || this._scaleTool.containsInput(c, e) || this._deleteTool.containsInput(c, e))) break;
                                this.hideTools() }
                            break;
                        case 2:
                            if (this._state == ba._STATE_DOWN || this._flagDragged) this._updatedDragPos =
                                this._flagDragged = !0, a = new sa(0, 0), this.parent.getViewMatrix().inverseTransform(c, e, a), this.pos.to(a.x - this._clickOffset.x, a.y - this._clickOffset.y)
                    }
            }
        },
        _sendTracking: function() { H.sendEvent({ event: "textInPanel", params: { textSelected: i.get_instance().get_localize().getLocalizeData(this._text).get_string() } }) },
        _onDrop: function() {
            this._flagDragged = !1;
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.BUTTON_DROP, function(a) { var b = new G;
                b.set("btn", a);
                b.set("panel", !0); return b }(this)));
            this._renderUp();
            this.SnapToPanel()
        },
        _click: function() {},
        _onDown: function(a, b) { da.prototype._onDown.call(this, a, b);
            this.showTools();
            this._moveToFront() },
        _onUp: function(a, b) {
            this._flagEnabled && (this._renderReturnUp(), this._click(), this._flagDragged && (this._onDrop(), a / I._platform.getStage().get_width() * r.STAGE_WIDTH < r.STAGE_CENTER_X - 0.8 * r.STAGE_CENTER_X ? (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM, function(a) { var b = new G;
                    b.set("elem", a); return b }(this)))) : a / I._platform.getStage().get_width() *
                r.STAGE_WIDTH > r.STAGE_CENTER_X + 0.8 * r.STAGE_CENTER_X && (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM, function(a) { var b = new G;
                    b.set("elem", a); return b }(this)))), 500 < 560 * (b / I._platform.getStage().get_height()) ? (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM, function(a) { var b = new G;
                    b.set("elem", a); return b }(this)))) : 70 > 560 * (b / I._platform.getStage().get_height()) && (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM,
                    function(a) { var b = new G;
                        b.set("elem", a); return b }(this))))), this._dispatch(k.BUTTON_UP))
        },
        _onDrag: function() { this._flagDragged = !0;
            this._dispatch(k.BUTTON_DRAG) },
        _onCancelDrag: function() { this._flagDragged = !1;
            this._dispatch(k.BUTTON_CANCEL_DRAG) },
        _moveToFront: function() { var a = this.parent;
            this.parent.removeElement(this);
            a.addElement(this) },
        hideTools: function() {
            this._rotTool.disable();
            this._rotTool.alpha = 0;
            this._scaleTool.disable();
            this._scaleTool.alpha = 0;
            this._deleteTool.disable();
            this._deleteTool.alpha =
                0;
            this._dotted.alpha = 0
        },
        showTools: function() { this._rotTool.enable();
            this._rotTool.alpha = 1;
            this._scaleTool.enable();
            this._scaleTool.alpha = 1;
            this._deleteTool.enable();
            this._deleteTool.alpha = 1;
            this._dotted.alpha = 1 },
        SnapToPanel: function() {
            this._flagDragged = !1;
            this.get_x() < -this._panel.getNaturalWidth() / 2 + Math.abs(this._scalingRoot.getScaledWidth() / 4) ? this.set_x(-this._panel.getNaturalWidth() / 2 + Math.abs(this._scalingRoot.getScaledWidth() / 4)) : this.get_x() > this._panel.getNaturalWidth() / 2 - Math.abs(this._scalingRoot.getScaledWidth() /
                4) && this.set_x(this._panel.getNaturalWidth() / 2 - Math.abs(this._scalingRoot.getScaledWidth() / 4));
            this.get_y() < -this._panel.getNaturalHeight() / 2 + Math.abs(this._scalingRoot.getScaledHeight() / 4) ? this.set_y(-this._panel.getNaturalHeight() / 2 + Math.abs(this._scalingRoot.getScaledHeight() / 4)) : this.get_y() > this._panel.getNaturalHeight() / 2 - Math.abs(this._scalingRoot.getScaledHeight() / 4) && this.set_y(this._panel.getNaturalHeight() / 2 - Math.abs(this._scalingRoot.getScaledHeight() / 4))
        },
        OnScaleElem: function(a, b) {
            var c =
                new sa;
            this.scaleY = this.scaleX = 1;
            this.render();
            this.update(0);
            this._scalingRoot.getViewMatrix().inverseTransform(a, b, c);
            this.scaleX = 2 * 1 / this._scalingRoot.getNaturalWidth() * c.x;
            this.scaleY = 2 * 1 / this._scalingRoot.getNaturalHeight() * c.y;
            Math.abs(this.scaleY) >= 1.25 / this._panel.get_scale() && (this.scaleY = 1.25 * (this.scaleY / Math.abs(this.scaleY)) / this._panel.get_scale());
            Math.abs(this.scaleX) >= 1.25 / this._panel.get_scale() && (this.scaleX = 1.25 * (this.scaleX / Math.abs(this.scaleX)) / this._panel.get_scale());
            0 == this.scaleX &&
                (this.scaleX = 0.5 / this._panel.get_scale());
            0 == this.scaleY && (this.scaleY = 0.5 / this._panel.get_scale());
            Math.abs(this.scaleY) <= 0.5 / this._panel.get_scale() && (this.scaleY = 0.5 * (this.scaleY / Math.abs(this.scaleY)) / this._panel.get_scale());
            Math.abs(this.scaleX) <= 0.5 / this._panel.get_scale() && (this.scaleX = 0.5 * (this.scaleX / Math.abs(this.scaleX)) / this._panel.get_scale());
            Math.abs(this.scaleX) > Math.abs(this.scaleY) ? this.scaleX = Math.abs(this.scaleY) * (this.scaleX / Math.abs(this.scaleX)) : Math.abs(this.scaleY) > Math.abs(this.scaleX) &&
                (this.scaleY = Math.abs(this.scaleX) * (this.scaleY / Math.abs(this.scaleY)));
            this.SnapToPanel()
        },
        getScaleRoot: function() { return this._scalingRoot },
        getNaturalWidth: function() { return null != this.text ? this.text.get_textDisplay().getNaturalWidth() * this.text.get_scale() : da.prototype.getNaturalWidth.call(this) },
        getNaturalHeight: function() { return null != this.text ? this.text.get_textDisplay().getNaturalHeight() * this.text.get_scale() : da.prototype.getNaturalHeight.call(this) },
        __class__: Nd
    });
    var Ld = function(a, b) {
        this._panel =
            a.panel;
        a.scale *= 1 / this._panel.get_scale();
        Za.call(this, a, b);
        this._scalingRoot = this;
        this.setCustomHitBox(this.getNaturalWidth(), this.getNaturalHeight(), -this.getNaturalWidth() / 2, -this.getNaturalHeight() / 2);
        this._dotted = this.addElement(new x({ asset: h.texture.comic_rotation_dotted }));
        this._dotted.scaleX = -1 / this._dotted.getNaturalWidth() * this._scalingRoot.getScaledWidth();
        this._dotted.scaleY = 2;
        this._dotted.set_x(this._dotted.getScaledWidth() / 2);
        this._rotTool = this.addElement(new wc({
            x: this._dotted.getScaledWidth(),
            tween: this._tween,
            clear: a.clear,
            scale: 1
        }));
        this._scaleTool = this.addElement(new xc({ x: this._scalingRoot.getNaturalWidth() / 2, y: this._scalingRoot.getNaturalHeight() / 2, tween: this._tween, clear: a.clear, scale: 1 }));
        this._deleteTool = this.addElement(new vc({ x: this._scalingRoot.getNaturalWidth() / 2, y: -this._scalingRoot.getNaturalHeight() / 2, tween: this._tween, clear: a.clear, scale: 1 }));
        this._rotTool.setBaseScale(this._panel.get_scale());
        this._scaleTool.setBaseScale(this._panel.get_scale());
        this._deleteTool.setBaseScale(this._panel.get_scale());
        this._sendTracking();
        i.get_instance().modifyInt(n.INT_PANEL_ELEM_COUNT, 1)
    };
    j["com.nick.spongebob.comic_creator.world.elements.ComicPanelElemAvatar"] = Ld;
    Ld.__name__ = "com,nick,spongebob,comic_creator,world,elements,ComicPanelElemAvatar".split(",");
    Ld.__super__ = Za;
    Ld.prototype = A(Za.prototype, {
        dispose: function() { Za.prototype.dispose.call(this);
            i.get_instance().modifyInt(n.INT_PANEL_ELEM_COUNT, -1) },
        _addEventListeners: function() { Za.prototype._addEventListeners.call(this) },
        _removeEventListeners: function() { Za.prototype._removeEventListeners.call(this) },
        update: function(a) { Za.prototype.update.call(this, a) },
        _sendTracking: function() { H.sendEvent({ event: "characterSelected", params: { characterName: "avatar " + this.index } }) },
        _onInput: function(a, b, c, e, m) {
            Za.prototype._onInput.call(this, a, b, c, e, m);
            switch (b[1]) {
                case 0:
                    switch (a[1]) {
                        case 0:
                            if (!this._containsInput || !this._depthTest(c, e)) { if (1 == this._rotTool.alpha && (this._rotTool.containsInput(c, e) || this._scaleTool.containsInput(c, e) || this._deleteTool.containsInput(c, e))) break;
                                this.hideTools() }
                            break;
                        case 2:
                            if (this._state ==
                                ba._STATE_DOWN || this._flagDragged) this._updatedDragPos = this._flagDragged = !0, a = new sa(0, 0), this.parent.getViewMatrix().inverseTransform(c, e, a), this.pos.to(a.x - this._clickOffset.x, a.y - this._clickOffset.y)
                    }
            }
        },
        _onDrop: function() { this._flagDragged = !1;
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.BUTTON_DROP, function(a) { var b = new G;
                b.set("btn", a);
                b.set("panel", !0); return b }(this)));
            this._renderUp();
            this.SnapToPanel() },
        _click: function() {},
        _onDown: function(a, b) {
            Za.prototype._onDown.call(this,
                a, b);
            this.showTools();
            this._moveToFront()
        },
        _onUp: function(a, b) {
            this._flagEnabled && (this._renderReturnUp(), this._click(), this._flagDragged && (this._onDrop(), a / I._platform.getStage().get_width() * r.STAGE_WIDTH < r.STAGE_CENTER_X - 0.8 * r.STAGE_CENTER_X ? (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM, function(a) { var b = new G;
                b.set("elem", a); return b }(this)))) : a / I._platform.getStage().get_width() * r.STAGE_WIDTH > r.STAGE_CENTER_X + 0.8 * r.STAGE_CENTER_X && (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM, function(a) { var b = new G;
                b.set("elem", a); return b }(this)))), 500 < 560 * (b / I._platform.getStage().get_height()) ? (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM, function(a) { var b = new G;
                b.set("elem", a); return b }(this)))) : 70 > 560 * (b / I._platform.getStage().get_height()) && (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM, function(a) {
                var b =
                    new G;
                b.set("elem", a);
                return b
            }(this))))), this._dispatch(k.BUTTON_UP))
        },
        _onDrag: function() { this._flagDragged = !0;
            this._dispatch(k.BUTTON_DRAG) },
        _onCancelDrag: function() { this._flagDragged = !1;
            this._dispatch(k.BUTTON_CANCEL_DRAG) },
        _moveToFront: function() { var a = this.parent;
            this.parent.removeElement(this);
            a.addElement(this) },
        hideTools: function() {
            this._rotTool.disable();
            this._rotTool.alpha = 0;
            this._scaleTool.disable();
            this._scaleTool.alpha = 0;
            this._deleteTool.disable();
            this._deleteTool.alpha = 0;
            this._dotted.alpha =
                0
        },
        showTools: function() { this._rotTool.enable();
            this._rotTool.alpha = 1;
            this._scaleTool.enable();
            this._scaleTool.alpha = 1;
            this._deleteTool.enable();
            this._deleteTool.alpha = 1;
            this._dotted.alpha = 1 },
        SnapToPanel: function() {
            this._flagDragged = !1;
            this.get_x() < -this._panel.getNaturalWidth() / 2 + Math.abs(this._scalingRoot.getScaledWidth() / 4) ? this.set_x(-this._panel.getNaturalWidth() / 2 + Math.abs(this._scalingRoot.getScaledWidth() / 4)) : this.get_x() > this._panel.getNaturalWidth() / 2 - Math.abs(this._scalingRoot.getScaledWidth() /
                4) && this.set_x(this._panel.getNaturalWidth() / 2 - Math.abs(this._scalingRoot.getScaledWidth() / 4));
            this.get_y() < -this._panel.getNaturalHeight() / 2 + Math.abs(this._scalingRoot.getScaledHeight() / 4) ? this.set_y(-this._panel.getNaturalHeight() / 2 + Math.abs(this._scalingRoot.getScaledHeight() / 4)) : this.get_y() > this._panel.getNaturalHeight() / 2 - Math.abs(this._scalingRoot.getScaledHeight() / 4) && this.set_y(this._panel.getNaturalHeight() / 2 - Math.abs(this._scalingRoot.getScaledHeight() / 4))
        },
        OnScaleElem: function(a, b) {
            var c =
                new sa;
            this.scaleY = this.scaleX = 1;
            this.render();
            this.update(0);
            this._scalingRoot.getViewMatrix().inverseTransform(a, b, c);
            this.scaleX = 2 * 1 / this._scalingRoot.getNaturalWidth() * c.x;
            this.scaleY = 2 * 1 / this._scalingRoot.getNaturalHeight() * c.y;
            Math.abs(this.getScaledWidth()) > this._panel.getNaturalWidth() && (this.scaleX = 1 / this._scalingRoot.getNaturalWidth() * this._panel.getNaturalWidth() * (0 > this.scaleX ? -1 : 1));
            Math.abs(this.getScaledHeight()) > this._panel.getNaturalHeight() && (this.scaleY = 1 / this._scalingRoot.getNaturalHeight() *
                this._panel.getNaturalHeight() * (0 > this.scaleY ? -1 : 1));
            0 == this.scaleX && (this.scaleX = 100 * (1 / Math.abs(this.getNaturalWidth())) / this._panel.get_scale());
            0 == this.scaleY && (this.scaleY = 100 * (1 / Math.abs(this.getNaturalHeight())) / this._panel.get_scale());
            Math.abs(this.getScaledHeight()) <= 100 / this._panel.get_scale() && (this.scaleY = 100 * (1 / Math.abs(this.getNaturalHeight())) / this._panel.get_scale() * (this.scaleY / Math.abs(this.scaleY)));
            Math.abs(this.getScaledWidth()) <= 100 / this._panel.get_scale() && (this.scaleX = 100 *
                (1 / Math.abs(this.getNaturalWidth())) / this._panel.get_scale() * (this.scaleX / Math.abs(this.scaleX)));
            Math.abs(this.scaleX) > Math.abs(this.scaleY) ? this.scaleX = Math.abs(this.scaleY) * (this.scaleX / Math.abs(this.scaleX)) : Math.abs(this.scaleY) > Math.abs(this.scaleX) && (this.scaleY = Math.abs(this.scaleX) * (this.scaleY / Math.abs(this.scaleY)));
            this.SnapToPanel()
        },
        getScaleRoot: function() { return this._scalingRoot },
        __class__: Ld
    });
    var Md = function(a) {
        this._panel = a.panel;
        a.scale = 1 / this._panel.get_scale();
        da.call(this, a);
        this._scalingRoot = this;
        this._dotted = this.addElement(new x({ asset: h.texture.comic_rotation_dotted, originX: 1 }));
        this._dotted.scaleX = 0.5 * this._scalingRoot.getNaturalWidth() / this._dotted.getNaturalWidth();
        this._dotted.scaleY = 2;
        this._rotTool = this.addElement(new wc({ x: -this._dotted.getScaledWidth(), tween: this._tween, clear: a.clear, scale: 1 }));
        this._scaleTool = this.addElement(new xc({ x: this._scalingRoot.getNaturalWidth() / 2, y: this._scalingRoot.getNaturalHeight() / 2, tween: this._tween, clear: a.clear, scale: 1 }));
        this._deleteTool = this.addElement(new vc({ x: this._scalingRoot.getNaturalWidth() / 2, y: -this._scalingRoot.getNaturalHeight() / 2, tween: this._tween, clear: a.clear, scale: 1 }));
        this._rotTool.setBaseScale(this._panel.get_scale());
        this._scaleTool.setBaseScale(this._panel.get_scale());
        this._deleteTool.setBaseScale(this._panel.get_scale());
        this._sendTracking()
    };
    j["com.nick.spongebob.comic_creator.world.elements.ComicPanelElemChar"] = Md;
    Md.__name__ = "com,nick,spongebob,comic_creator,world,elements,ComicPanelElemChar".split(",");
    Md.__super__ = mb;
    Md.prototype = A(mb.prototype, {
        dispose: function() { mb.prototype.dispose.call(this) },
        _addEventListeners: function() { mb.prototype._addEventListeners.call(this) },
        _removeEventListeners: function() { mb.prototype._removeEventListeners.call(this) },
        update: function(a) { mb.prototype.update.call(this, a) },
        _onInput: function(a, b, c, e, m) {
            mb.prototype._onInput.call(this, a, b, c, e, m);
            switch (b[1]) {
                case 0:
                    switch (a[1]) {
                        case 0:
                            if (!this._containsInput || !this._depthTest(c, e)) {
                                if (1 == this._rotTool.alpha && (this._rotTool.containsInput(c,
                                        e) || this._scaleTool.containsInput(c, e) || this._deleteTool.containsInput(c, e))) break;
                                this.hideTools()
                            }
                            break;
                        case 2:
                            if (this._state == ba._STATE_DOWN || this._flagDragged) this._updatedDragPos = this._flagDragged = !0, a = new sa(0, 0), this.parent.getViewMatrix().inverseTransform(c, e, a), this.pos.to(a.x - this._clickOffset.x, a.y - this._clickOffset.y)
                    }
            }
        },
        _sendTracking: function() { H.sendEvent({ event: "characterSelected", params: { characterName: this.comicAsset } }) },
        _onDrop: function() {
            this._flagDragged = !1;
            i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.BUTTON_DROP,
                function(a) { var b = new G;
                    b.set("btn", a);
                    b.set("panel", !0); return b }(this)));
            this._renderUp();
            this.SnapToPanel()
        },
        _click: function() {},
        _onDown: function(a, b) { mb.prototype._onDown.call(this, a, b);
            this.showTools();
            this._moveToFront() },
        _onUp: function(a, b) {
            this._flagEnabled && (this._renderReturnUp(), this._click(), this._flagDragged && (this._onDrop(), a / I._platform.getStage().get_width() * r.STAGE_WIDTH < r.STAGE_CENTER_X - 0.8 * r.STAGE_CENTER_X ? (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM,
                    function(a) { var b = new G;
                        b.set("elem", a); return b }(this)))) : a / I._platform.getStage().get_width() * r.STAGE_WIDTH > r.STAGE_CENTER_X + 0.8 * r.STAGE_CENTER_X && (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM, function(a) { var b = new G;
                    b.set("elem", a); return b }(this)))), 500 < 560 * (b / I._platform.getStage().get_height()) ? (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM, function(a) { var b = new G;
                    b.set("elem", a); return b }(this)))) :
                70 > 560 * (b / I._platform.getStage().get_height()) && (this.doDelete = !0, i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DELETE_PANEL_ELEM, function(a) { var b = new G;
                    b.set("elem", a); return b }(this))))), this._dispatch(k.BUTTON_UP))
        },
        _onDrag: function() { this._flagDragged = !0;
            this._dispatch(k.BUTTON_DRAG) },
        _onCancelDrag: function() { this._flagDragged = !1;
            this._dispatch(k.BUTTON_CANCEL_DRAG) },
        _moveToFront: function() { var a = this.parent;
            this.parent.removeElement(this);
            a.addElement(this) },
        hideTools: function() {
            this._rotTool.disable();
            this._rotTool.alpha = 0;
            this._scaleTool.disable();
            this._scaleTool.alpha = 0;
            this._deleteTool.disable();
            this._deleteTool.alpha = 0;
            this._dotted.alpha = 0
        },
        showTools: function() { this._rotTool.enable();
            this._rotTool.alpha = 1;
            this._scaleTool.enable();
            this._scaleTool.alpha = 1;
            this._deleteTool.enable();
            this._deleteTool.alpha = 1;
            this._dotted.alpha = 1 },
        SnapToPanel: function() {
            this._flagDragged = !1;
            this.get_x() < -this._panel.getNaturalWidth() / 2 + Math.abs(this._scalingRoot.getScaledWidth() / 4) ? this.set_x(-this._panel.getNaturalWidth() /
                2 + Math.abs(this._scalingRoot.getScaledWidth() / 4)) : this.get_x() > this._panel.getNaturalWidth() / 2 - Math.abs(this._scalingRoot.getScaledWidth() / 4) && this.set_x(this._panel.getNaturalWidth() / 2 - Math.abs(this._scalingRoot.getScaledWidth() / 4));
            this.get_y() < -this._panel.getNaturalHeight() / 2 + Math.abs(this._scalingRoot.getScaledHeight() / 4) ? this.set_y(-this._panel.getNaturalHeight() / 2 + Math.abs(this._scalingRoot.getScaledHeight() / 4)) : this.get_y() > this._panel.getNaturalHeight() / 2 - Math.abs(this._scalingRoot.getScaledHeight() /
                4) && this.set_y(this._panel.getNaturalHeight() / 2 - Math.abs(this._scalingRoot.getScaledHeight() / 4))
        },
        OnScaleElem: function(a, b) {
            var c = new sa;
            this.scaleY = this.scaleX = 1;
            this.render();
            this.update(0);
            this._scalingRoot.getViewMatrix().inverseTransform(a, b, c);
            this.scaleX = 2 * 1 / this._scalingRoot.getNaturalWidth() * c.x;
            this.scaleY = 2 * 1 / this._scalingRoot.getNaturalHeight() * c.y;
            Math.abs(this.scaleY) >= 1.25 / this._panel.get_scale() && (this.scaleY = 1.25 * (this.scaleY / Math.abs(this.scaleY)) / this._panel.get_scale());
            Math.abs(this.scaleX) >=
                1.25 / this._panel.get_scale() && (this.scaleX = 1.25 * (this.scaleX / Math.abs(this.scaleX)) / this._panel.get_scale());
            0 == this.scaleX && (this.scaleX = 0.5 / this._panel.get_scale());
            0 == this.scaleY && (this.scaleY = 0.5 / this._panel.get_scale());
            Math.abs(this.scaleY) <= 0.5 / this._panel.get_scale() && (this.scaleY = 0.5 * (this.scaleY / Math.abs(this.scaleY)) / this._panel.get_scale());
            Math.abs(this.scaleX) <= 0.5 / this._panel.get_scale() && (this.scaleX = 0.5 * (this.scaleX / Math.abs(this.scaleX)) / this._panel.get_scale());
            Math.abs(this.scaleX) >
                Math.abs(this.scaleY) ? this.scaleX = Math.abs(this.scaleY) * (this.scaleX / Math.abs(this.scaleX)) : Math.abs(this.scaleY) > Math.abs(this.scaleX) && (this.scaleY = Math.abs(this.scaleX) * (this.scaleY / Math.abs(this.scaleY)));
            this.SnapToPanel()
        },
        getScaleRoot: function() { return this._scalingRoot },
        __class__: Md
    });
    var wa = j["com.nick.spongebob.comic_creator.world.elements.PANEL_SIZE"] = { __ename__: "com,nick,spongebob,comic_creator,world,elements,PANEL_SIZE".split(","), __constructs__: ["LARGE", "MED", "SMALL", "TINY"] };
    wa.LARGE = ["LARGE", 0];
    wa.LARGE.toString = g;
    wa.LARGE.__enum__ = wa;
    wa.MED = ["MED", 1];
    wa.MED.toString = g;
    wa.MED.__enum__ = wa;
    wa.SMALL = ["SMALL", 2];
    wa.SMALL.toString = g;
    wa.SMALL.__enum__ = wa;
    wa.TINY = ["TINY", 3];
    wa.TINY.toString = g;
    wa.TINY.__enum__ = wa;
    wa.__empty_constructs__ = [wa.LARGE, wa.MED, wa.SMALL, wa.TINY];
    var Bc = function(a, b, c, e) {
        this._numTextMax = 10;
        this._numText = 0;
        this._comicElems = [];
        var m = a.assetUp;
        a.assetUp = null;
        y.call(this, a);
        this._size = e;
        this.bgAsset = m;
        e = this.addElement(new x({ asset: this._getSizeString() + "_blank" })).disablePointerInput();
        this._bg = this.addElement(new x({ asset: m, scale: 1 })).disablePointerInput();
        this._charTray = this.addElement(new x({}));
        this._bubbleTray = this.addElement(new x({}));
        this._textTray = this.addElement(new x({}));
        this._setScissor();
        this._frame = this.addElement(new x({ asset: b, scale: 1 })).disablePointerInput();
        e.scaleX = 1 / e.getNaturalWidth() * this._frame.getScaledWidth();
        e.scaleY = 1 / e.getNaturalHeight() * this._frame.getScaledHeight();
        c && (b = "comic_panel_back_" + this._getSizeString() + "_glow", this._tutorialFlash = this.addElement(new x({
            asset: b,
            alpha: 0
        })).disablePointerInput(), this._tutorialFinger = this.addElement(new x({ asset: h.texture.panel_picker_cursor, alpha: 0 })).disablePointerInput(), this._tweenTutorial());
        this.initX = this.get_x();
        this.initY = this.get_y();
        this._index = a.index;
        this.setCustomHitBox(this.getNaturalWidth(), this.getNaturalHeight(), -this.getNaturalWidth() / 2, -this.getNaturalHeight() / 2);
        this._lastMouseUp = W.request();
        this._scratchPoint = new sa
    };
    j["com.nick.spongebob.comic_creator.world.elements.Panel"] = Bc;
    Bc.__name__ = "com,nick,spongebob,comic_creator,world,elements,Panel".split(",");
    Bc.__super__ = y;
    Bc.prototype = A(y.prototype, {
        dispose: function() { this._comicElems = this._bg = null;
            this._lastMouseUp.dispose();
            this._scratchPoint = this._lastMouseUp = null;
            y.prototype.dispose.call(this) },
        containsLocal: function(a, b) { return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight() },
        addComicElem: function(a, b) {
            null == b && (b = !1);
            switch (a.get_type()[1]) {
                case 4:
                    this._textTray.addElement(a);
                    break;
                case 0:
                    this._charTray.addElement(a);
                    break;
                case 2:
                    this._charTray.addElement(a);
                    break;
                case 3:
                    this._bubbleTray.addElement(a);
                    break;
                default:
                    throw " ";
            }
            this._comicElems.push(a);
            this.getViewMatrix().inverseTransform(a.get_x(), a.get_y(), this._scratchPoint);
            a.pos.to(this._scratchPoint.x, this._scratchPoint.y);
            a.SnapToPanel();
            b && a.pos.to(0, 0);
            this.edited = !0
        },
        hidePanel: function(a) { a ? this._tween.tween(this, 0.6, { y: -280 - 2 * this.getScaledHeight(), scale: 1 }, !0, q.BUMP, 0.2 * Math.random(), "") : this._tween.tween(this, 0.6, { y: 280 + 2 * this.getScaledHeight(), scale: 1 }, !0, q.BUMP, 0.2 * Math.random(), "") },
        showPanel: function(a, b) {
            null == b && (b = !0);
            null == a &&
                (a = !1);
            var c = this,
                e;
            e = a ? 560 : 300;
            e = 560 * (1 / this.getNaturalHeight()) * (e / 560);
            e > 1 / this.getNaturalWidth() * r.STAGE_WIDTH && (e = 1 / this.getNaturalWidth() * r.STAGE_WIDTH);
            2 < e && (e = 2);
            null != this._tutorialFlash && (this._tween.stop(this._tutorialFlash), this._tween.stop(this._tutorialFinger), this._tutorialFlash.alpha = 0, this._tutorialFinger.alpha = 0, i.get_instance().setBool(n.BOOL_DO_TUTORIAL, !1), ra.get_instance().save());
            var m = -120;
            a && (m = -50);
            this._tween.tween(this, 0.7, { scale: e, y: m, x: 0 }, !0, q.BUMP_OUT, 0.3).onComplete(function() {
                for (var a =
                        0, e = c._comicElems; a < e.length;) { var m = e[a];++a;
                    m.set_pointerEnabled(b) }
            });
            !1 == a && (this._shown = !0);
            return 1
        },
        restorePanel: function() { for (var a = 0, b = this._comicElems; a < b.length;) { var c = b[a];++a;
                c.set_pointerEnabled(!1) }!0 == this._shown && this._sendTracking();
            this._shown = !1;
            this._tween.tween(this, 0.6, { y: this.initY, x: this.initX, scale: 1 }, !0, q.BUMP, 0.2 * Math.random(), "") },
        update: function(a) { y.prototype.update.call(this, a) },
        _addEventListeners: function() {
            y.prototype._addEventListeners.call(this);
            i.get_instance().get_dispatcher().addEventListener(k.BUTTON_DROP,
                o(this, this._onButtonDrop));
            i.get_instance().get_dispatcher().addEventListener(k.DELETE_PANEL_ELEM, o(this, this._onDeleteElem))
        },
        _removeEventListeners: function() { y.prototype._removeEventListeners.call(this);
            i.get_instance().get_dispatcher().removeEventListener(k.BUTTON_DROP, o(this, this._onButtonDrop));
            i.get_instance().get_dispatcher().removeEventListener(k.DELETE_PANEL_ELEM, o(this, this._onDeleteElem)) },
        _getSizeString: function() {
            switch (this._size[1]) {
                case 3:
                    return "mini";
                case 2:
                    return "small";
                case 1:
                    return "medium";
                case 0:
                    return "large"
            }
        },
        _setScissor: function() {
            switch (this._size[1]) {
                case 3:
                    C.__cast(this._charTray.root.firstComponent, J).scissor = new Sa(-83.5, -74, 167, 148);
                    C.__cast(this._bubbleTray.root.firstComponent, J).scissor = new Sa(-83.5, -74, 167, 148);
                    C.__cast(this._textTray.root.firstComponent, J).scissor = new Sa(-83.5, -74, 167, 148);
                    break;
                case 2:
                    C.__cast(this._charTray.root.firstComponent, J).scissor = new Sa(-135.5, -74, 271, 148);
                    C.__cast(this._bubbleTray.root.firstComponent, J).scissor = new Sa(-135.5, -74, 271, 148);
                    C.__cast(this._textTray.root.firstComponent,
                        J).scissor = new Sa(-135.5, -74, 271, 148);
                    break;
                case 1:
                    C.__cast(this._charTray.root.firstComponent, J).scissor = new Sa(-204, -74.5, 408, 149);
                    C.__cast(this._bubbleTray.root.firstComponent, J).scissor = new Sa(-204, -74.5, 408, 149);
                    C.__cast(this._textTray.root.firstComponent, J).scissor = new Sa(-204, -74.5, 408, 149);
                    break;
                case 0:
                    C.__cast(this._charTray.root.firstComponent, J).scissor = new Sa(-352, -156, 704, 312), C.__cast(this._bubbleTray.root.firstComponent, J).scissor = new Sa(-352, -156, 704, 312), C.__cast(this._textTray.root.firstComponent,
                        J).scissor = new Sa(-352, -156, 704, 312)
            }
        },
        _onDeleteElem: function(a) { a.get_data().get("elem").get_type() == V.TEXT && this._numText--;
            a = a.get_data().get("elem");
            M.remove(this._comicElems, a);
            this.edited = !0 },
        _tweenTutorial: function() {
            this._tween.tween(this._tutorialFlash, 0.5, { alpha: 0 }, !0);
            this._tween.tween(this._tutorialFlash, 0.5, { alpha: 1 }, !1).onComplete(o(this, this._tweenTutorial));
            this._tutorialFinger.set_scale(2);
            this._tutorialFinger.alpha = 0;
            this._tween.tween(this._tutorialFinger, 1, { alpha: 1, scale: 0.7 }, !0,
                q.BOUNCE_OUT)
        },
        _onInput: function(a, b, c, e, m) { y.prototype._onInput.call(this, a, b, c, e, m); switch (b[1]) {
                case 0:
                    switch (a[1]) {
                        case 1:
                            this._lastMouseUp.to(c, e) } } },
        _onButtonDrop: function(a) {
            if (!(null == a.get_data().get("btn") || !0 == a.get_data().get("panel"))) {
                i.get_instance().get_sound().playSound(h.sound.sbcc_sfx_drop, 0.4);
                var b;
                b = a.get_data().get("btn");
                if (i.get_instance().getValue(n.VALUE_CURRENT_PANEL) == this && (a.get_data().exists("click") || this.hitRectContains(this._lastMouseUp.x, this._lastMouseUp.y))) {
                    if (b.get_type() ==
                        V.TEXT) { if (this._numText >= this._numTextMax) return;
                        this._numText++ } this.edited = !0;
                    a.get_data().get("btn").pos.toPoint(this._lastMouseUp);
                    i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.CREATE_HUD_COMIC_ELEM, function() { var b = new G;
                        b.set("btn", a.get_data().get("btn"));
                        b.set("click", a.get_data().exists("click")); return b }(this)))
                }
            }
        },
        _click: function() { this._onClickComplete();
            this._doClick() },
        _renderOver: function() {},
        _renderOut: function() {},
        _renderDown: function() { this.setAsset(this._assetDown) },
        _renderReturnUp: function() { this._renderUp() },
        getNaturalWidth: function() { return this._frame.getScaledWidth() },
        getNaturalHeight: function() { return this._frame.getScaledHeight() },
        setButtonAsset: function(a) { this._bg.setAsset(a);
            this.bgAsset = a;
            this._size != wa.LARGE && this._bg.set_scale(0.5) },
        getQueryString: function() { for (var a = "&pan=" + this._index, b = this._comicElems.length; 0 > b;) var c = b++,
                a = a + this._comicElems[c].getQueryString(); return a },
        loadQueryString: function() {
            if (!(1 >= window.location.href.split("?").length))
                for (var a =
                        window.location.href.split("?")[1].split("&"), b = null, c = 0; c < a.length;) b = a[c], ++c, b = b.split("="), 1 >= b.length || B.parseInt(b[1])
        },
        getPanelString: function() { for (var a = "", b = 0, c = this._comicElems; b < c.length;) { var e = c[b];++b;
                a += "&type=" + B.string(e.get_type()) + "&pos=" + B.string(e.pos) + "&scale=" + B["int"](100 * e.get_scale()) / 100 + "&texture=" + e.comicAsset + "?" } return a += "&bg=" + this.bgAsset },
        _sendTracking: function() {
            var a = this.bgAsset;
            if ("" == a || null == a) a = "NONE";
            H.sendEvent({
                event: "panelCreated",
                params: {
                    bgName: a,
                    numberOfAvatars: this._getNumElems(V.AVATAR),
                    numberOfBubbles: this._getNumElems(V.BUBBLE),
                    numberOfCharacters: this._getNumElems(V.CHARACTER),
                    numberOfTexts: this._getNumElems(V.TEXT),
                    panelNumber: this._index
                }
            })
        },
        _getNumElems: function(a) { for (var b = 0, c = 0, e = this._comicElems; c < e.length;) { var m = e[c];++c;
                m.get_type() == a && b++ } return b },
        _doClick: function() { this._dispatch(k.BUTTON_CLICK) },
        __class__: Bc
    });
    var n = j["com.workinman.cloud.CLOUD"] = { __ename__: ["com", "workinman", "cloud", "CLOUD"], __constructs__: "BOOL_GAME_LOSE,BOOL_GAME_WIN,BOOL_LEVEL_LOSE,BOOL_LEVEL_WIN,BOOL_PAUSED,BOOL_TOUCH_DEVICE,BOOL_CODE_SCREEN_OPEN,BOOL_CODE_UNLOCK,BOOL_ALLOW_UNLOCK,BOOL_LOW_QUALITY_MOBILE,BOOL_FLOW_AVATAR_FROM_COMIC,BOOL_DO_TUTORIAL,BOOL_LOAD_AVATAR,BOOL_APP,BOOL_ALLOW_SUBMIT,BOOL_ANDROID_APP,BOOL_IOS_APP,BOOL_AVATAR_TO_COMIC,INT_HEALTH,INT_LIVES,INT_SCORE,INT_LOADING_SCORE,INT_ACHIEVEMENT_SCORE,INT_CURRENCY,INT_LEVEL,INT_UNIQUE_INC,INT_QUALITY,INT_CURRENT_AVATAR,INT_PANEL_NUM,INT_PANEL_INDEX,INT_PANEL_ELEM_COUNT,INT_MAX_PANEL_ELEMS,STRING_UNLOCK_CODE,STRING_LEVEL_ID,STRING_REGION_ID,STRING_SHARE_URL,FLOAT_LOADING_PROGRESS,VALUE_CURRENT_PANEL".split(",") };
    n.BOOL_GAME_LOSE = ["BOOL_GAME_LOSE", 0];
    n.BOOL_GAME_LOSE.toString = g;
    n.BOOL_GAME_LOSE.__enum__ = n;
    n.BOOL_GAME_WIN = ["BOOL_GAME_WIN", 1];
    n.BOOL_GAME_WIN.toString = g;
    n.BOOL_GAME_WIN.__enum__ = n;
    n.BOOL_LEVEL_LOSE = ["BOOL_LEVEL_LOSE", 2];
    n.BOOL_LEVEL_LOSE.toString = g;
    n.BOOL_LEVEL_LOSE.__enum__ = n;
    n.BOOL_LEVEL_WIN = ["BOOL_LEVEL_WIN", 3];
    n.BOOL_LEVEL_WIN.toString = g;
    n.BOOL_LEVEL_WIN.__enum__ = n;
    n.BOOL_PAUSED = ["BOOL_PAUSED", 4];
    n.BOOL_PAUSED.toString = g;
    n.BOOL_PAUSED.__enum__ = n;
    n.BOOL_TOUCH_DEVICE = ["BOOL_TOUCH_DEVICE", 5];
    n.BOOL_TOUCH_DEVICE.toString = g;
    n.BOOL_TOUCH_DEVICE.__enum__ = n;
    n.BOOL_CODE_SCREEN_OPEN = ["BOOL_CODE_SCREEN_OPEN", 6];
    n.BOOL_CODE_SCREEN_OPEN.toString = g;
    n.BOOL_CODE_SCREEN_OPEN.__enum__ = n;
    n.BOOL_CODE_UNLOCK = ["BOOL_CODE_UNLOCK", 7];
    n.BOOL_CODE_UNLOCK.toString = g;
    n.BOOL_CODE_UNLOCK.__enum__ = n;
    n.BOOL_ALLOW_UNLOCK = ["BOOL_ALLOW_UNLOCK", 8];
    n.BOOL_ALLOW_UNLOCK.toString = g;
    n.BOOL_ALLOW_UNLOCK.__enum__ = n;
    n.BOOL_LOW_QUALITY_MOBILE = ["BOOL_LOW_QUALITY_MOBILE", 9];
    n.BOOL_LOW_QUALITY_MOBILE.toString = g;
    n.BOOL_LOW_QUALITY_MOBILE.__enum__ =
        n;
    n.BOOL_FLOW_AVATAR_FROM_COMIC = ["BOOL_FLOW_AVATAR_FROM_COMIC", 10];
    n.BOOL_FLOW_AVATAR_FROM_COMIC.toString = g;
    n.BOOL_FLOW_AVATAR_FROM_COMIC.__enum__ = n;
    n.BOOL_DO_TUTORIAL = ["BOOL_DO_TUTORIAL", 11];
    n.BOOL_DO_TUTORIAL.toString = g;
    n.BOOL_DO_TUTORIAL.__enum__ = n;
    n.BOOL_LOAD_AVATAR = ["BOOL_LOAD_AVATAR", 12];
    n.BOOL_LOAD_AVATAR.toString = g;
    n.BOOL_LOAD_AVATAR.__enum__ = n;
    n.BOOL_APP = ["BOOL_APP", 13];
    n.BOOL_APP.toString = g;
    n.BOOL_APP.__enum__ = n;
    n.BOOL_ALLOW_SUBMIT = ["BOOL_ALLOW_SUBMIT", 14];
    n.BOOL_ALLOW_SUBMIT.toString = g;
    n.BOOL_ALLOW_SUBMIT.__enum__ = n;
    n.BOOL_ANDROID_APP = ["BOOL_ANDROID_APP", 15];
    n.BOOL_ANDROID_APP.toString = g;
    n.BOOL_ANDROID_APP.__enum__ = n;
    n.BOOL_IOS_APP = ["BOOL_IOS_APP", 16];
    n.BOOL_IOS_APP.toString = g;
    n.BOOL_IOS_APP.__enum__ = n;
    n.BOOL_AVATAR_TO_COMIC = ["BOOL_AVATAR_TO_COMIC", 17];
    n.BOOL_AVATAR_TO_COMIC.toString = g;
    n.BOOL_AVATAR_TO_COMIC.__enum__ = n;
    n.INT_HEALTH = ["INT_HEALTH", 18];
    n.INT_HEALTH.toString = g;
    n.INT_HEALTH.__enum__ = n;
    n.INT_LIVES = ["INT_LIVES", 19];
    n.INT_LIVES.toString = g;
    n.INT_LIVES.__enum__ = n;
    n.INT_SCORE = ["INT_SCORE", 20];
    n.INT_SCORE.toString = g;
    n.INT_SCORE.__enum__ = n;
    n.INT_LOADING_SCORE = ["INT_LOADING_SCORE", 21];
    n.INT_LOADING_SCORE.toString = g;
    n.INT_LOADING_SCORE.__enum__ = n;
    n.INT_ACHIEVEMENT_SCORE = ["INT_ACHIEVEMENT_SCORE", 22];
    n.INT_ACHIEVEMENT_SCORE.toString = g;
    n.INT_ACHIEVEMENT_SCORE.__enum__ = n;
    n.INT_CURRENCY = ["INT_CURRENCY", 23];
    n.INT_CURRENCY.toString = g;
    n.INT_CURRENCY.__enum__ = n;
    n.INT_LEVEL = ["INT_LEVEL", 24];
    n.INT_LEVEL.toString = g;
    n.INT_LEVEL.__enum__ = n;
    n.INT_UNIQUE_INC = ["INT_UNIQUE_INC", 25];
    n.INT_UNIQUE_INC.toString =
        g;
    n.INT_UNIQUE_INC.__enum__ = n;
    n.INT_QUALITY = ["INT_QUALITY", 26];
    n.INT_QUALITY.toString = g;
    n.INT_QUALITY.__enum__ = n;
    n.INT_CURRENT_AVATAR = ["INT_CURRENT_AVATAR", 27];
    n.INT_CURRENT_AVATAR.toString = g;
    n.INT_CURRENT_AVATAR.__enum__ = n;
    n.INT_PANEL_NUM = ["INT_PANEL_NUM", 28];
    n.INT_PANEL_NUM.toString = g;
    n.INT_PANEL_NUM.__enum__ = n;
    n.INT_PANEL_INDEX = ["INT_PANEL_INDEX", 29];
    n.INT_PANEL_INDEX.toString = g;
    n.INT_PANEL_INDEX.__enum__ = n;
    n.INT_PANEL_ELEM_COUNT = ["INT_PANEL_ELEM_COUNT", 30];
    n.INT_PANEL_ELEM_COUNT.toString = g;
    n.INT_PANEL_ELEM_COUNT.__enum__ =
        n;
    n.INT_MAX_PANEL_ELEMS = ["INT_MAX_PANEL_ELEMS", 31];
    n.INT_MAX_PANEL_ELEMS.toString = g;
    n.INT_MAX_PANEL_ELEMS.__enum__ = n;
    n.STRING_UNLOCK_CODE = ["STRING_UNLOCK_CODE", 32];
    n.STRING_UNLOCK_CODE.toString = g;
    n.STRING_UNLOCK_CODE.__enum__ = n;
    n.STRING_LEVEL_ID = ["STRING_LEVEL_ID", 33];
    n.STRING_LEVEL_ID.toString = g;
    n.STRING_LEVEL_ID.__enum__ = n;
    n.STRING_REGION_ID = ["STRING_REGION_ID", 34];
    n.STRING_REGION_ID.toString = g;
    n.STRING_REGION_ID.__enum__ = n;
    n.STRING_SHARE_URL = ["STRING_SHARE_URL", 35];
    n.STRING_SHARE_URL.toString =
        g;
    n.STRING_SHARE_URL.__enum__ = n;
    n.FLOAT_LOADING_PROGRESS = ["FLOAT_LOADING_PROGRESS", 36];
    n.FLOAT_LOADING_PROGRESS.toString = g;
    n.FLOAT_LOADING_PROGRESS.__enum__ = n;
    n.VALUE_CURRENT_PANEL = ["VALUE_CURRENT_PANEL", 37];
    n.VALUE_CURRENT_PANEL.toString = g;
    n.VALUE_CURRENT_PANEL.__enum__ = n;
    n.__empty_constructs__ = [n.BOOL_GAME_LOSE, n.BOOL_GAME_WIN, n.BOOL_LEVEL_LOSE, n.BOOL_LEVEL_WIN, n.BOOL_PAUSED, n.BOOL_TOUCH_DEVICE, n.BOOL_CODE_SCREEN_OPEN, n.BOOL_CODE_UNLOCK, n.BOOL_ALLOW_UNLOCK, n.BOOL_LOW_QUALITY_MOBILE, n.BOOL_FLOW_AVATAR_FROM_COMIC,
        n.BOOL_DO_TUTORIAL, n.BOOL_LOAD_AVATAR, n.BOOL_APP, n.BOOL_ALLOW_SUBMIT, n.BOOL_ANDROID_APP, n.BOOL_IOS_APP, n.BOOL_AVATAR_TO_COMIC, n.INT_HEALTH, n.INT_LIVES, n.INT_SCORE, n.INT_LOADING_SCORE, n.INT_ACHIEVEMENT_SCORE, n.INT_CURRENCY, n.INT_LEVEL, n.INT_UNIQUE_INC, n.INT_QUALITY, n.INT_CURRENT_AVATAR, n.INT_PANEL_NUM, n.INT_PANEL_INDEX, n.INT_PANEL_ELEM_COUNT, n.INT_MAX_PANEL_ELEMS, n.STRING_UNLOCK_CODE, n.STRING_LEVEL_ID, n.STRING_REGION_ID, n.STRING_SHARE_URL, n.FLOAT_LOADING_PROGRESS, n.VALUE_CURRENT_PANEL
    ];
    var k = j["com.workinman.cloud.EVENT"] = { __ename__: ["com", "workinman", "cloud", "EVENT"], __constructs__: "GAME_OVER,PAUSE,UNPAUSE,MUTE_TOGGLE,RESIZE_CANVAS,UPDATE_DISPLAY,TWEENS_ALL_COMPLETE,TWEEN_CURRENT_COMPLETE,INITIAL_LOAD_COMPLETE,WORLD_GENERATION_COMPLETE,FILES_ERROR,FILE_RESULT,ALL_POOLS_FULL,VO_PAUSED,VO_ENDED,VO_STARTED,INPUT_ARBITRARY_KEY_KEYBOARD,INPUT_FIELD_ENTER,ITEM_SELECT,BUTTON_CLICK,BUTTON_OVER,BUTTON_OUT,BUTTON_UP,BUTTON_DOWN,BUTTON_DRAG,BUTTON_DROP,BUTTON_CANCEL_DRAG,DIALOGUE_LINE_COMPLETE,DIALOGUE_QUEUE_COMPLETE,TUTORIAL_SWIPE,TUTORIAL_CLICK_LOCATION,AVATAR_TAB_SWITCH,CREATE_HUD_COMIC_ELEM,CREATE_WORLD_COMIC_ELEM,DELETE_PANEL_ELEM,REFRESH_COMIC_AVATARS,SPLASH_OUTRO_COMPLETE,SHARE_AVATAR,DELETE_AVATAR,PRINT_CLOSE,SUBMIT_POPUP_CLOSED,TEXT_FIELD_ACTIVATE,DROP_DOWN_ACTIVATE,DROP_DOWN_DEACTIVATE".split(",") };
    k.GAME_OVER = ["GAME_OVER", 0];
    k.GAME_OVER.toString = g;
    k.GAME_OVER.__enum__ = k;
    k.PAUSE = ["PAUSE", 1];
    k.PAUSE.toString = g;
    k.PAUSE.__enum__ = k;
    k.UNPAUSE = ["UNPAUSE", 2];
    k.UNPAUSE.toString = g;
    k.UNPAUSE.__enum__ = k;
    k.MUTE_TOGGLE = ["MUTE_TOGGLE", 3];
    k.MUTE_TOGGLE.toString = g;
    k.MUTE_TOGGLE.__enum__ = k;
    k.RESIZE_CANVAS = ["RESIZE_CANVAS", 4];
    k.RESIZE_CANVAS.toString = g;
    k.RESIZE_CANVAS.__enum__ = k;
    k.UPDATE_DISPLAY = ["UPDATE_DISPLAY", 5];
    k.UPDATE_DISPLAY.toString = g;
    k.UPDATE_DISPLAY.__enum__ = k;
    k.TWEENS_ALL_COMPLETE = ["TWEENS_ALL_COMPLETE",
        6
    ];
    k.TWEENS_ALL_COMPLETE.toString = g;
    k.TWEENS_ALL_COMPLETE.__enum__ = k;
    k.TWEEN_CURRENT_COMPLETE = ["TWEEN_CURRENT_COMPLETE", 7];
    k.TWEEN_CURRENT_COMPLETE.toString = g;
    k.TWEEN_CURRENT_COMPLETE.__enum__ = k;
    k.INITIAL_LOAD_COMPLETE = ["INITIAL_LOAD_COMPLETE", 8];
    k.INITIAL_LOAD_COMPLETE.toString = g;
    k.INITIAL_LOAD_COMPLETE.__enum__ = k;
    k.WORLD_GENERATION_COMPLETE = ["WORLD_GENERATION_COMPLETE", 9];
    k.WORLD_GENERATION_COMPLETE.toString = g;
    k.WORLD_GENERATION_COMPLETE.__enum__ = k;
    k.FILES_ERROR = ["FILES_ERROR", 10];
    k.FILES_ERROR.toString =
        g;
    k.FILES_ERROR.__enum__ = k;
    k.FILE_RESULT = ["FILE_RESULT", 11];
    k.FILE_RESULT.toString = g;
    k.FILE_RESULT.__enum__ = k;
    k.ALL_POOLS_FULL = ["ALL_POOLS_FULL", 12];
    k.ALL_POOLS_FULL.toString = g;
    k.ALL_POOLS_FULL.__enum__ = k;
    k.VO_PAUSED = ["VO_PAUSED", 13];
    k.VO_PAUSED.toString = g;
    k.VO_PAUSED.__enum__ = k;
    k.VO_ENDED = ["VO_ENDED", 14];
    k.VO_ENDED.toString = g;
    k.VO_ENDED.__enum__ = k;
    k.VO_STARTED = ["VO_STARTED", 15];
    k.VO_STARTED.toString = g;
    k.VO_STARTED.__enum__ = k;
    k.INPUT_ARBITRARY_KEY_KEYBOARD = ["INPUT_ARBITRARY_KEY_KEYBOARD", 16];
    k.INPUT_ARBITRARY_KEY_KEYBOARD.toString =
        g;
    k.INPUT_ARBITRARY_KEY_KEYBOARD.__enum__ = k;
    k.INPUT_FIELD_ENTER = ["INPUT_FIELD_ENTER", 17];
    k.INPUT_FIELD_ENTER.toString = g;
    k.INPUT_FIELD_ENTER.__enum__ = k;
    k.ITEM_SELECT = ["ITEM_SELECT", 18];
    k.ITEM_SELECT.toString = g;
    k.ITEM_SELECT.__enum__ = k;
    k.BUTTON_CLICK = ["BUTTON_CLICK", 19];
    k.BUTTON_CLICK.toString = g;
    k.BUTTON_CLICK.__enum__ = k;
    k.BUTTON_OVER = ["BUTTON_OVER", 20];
    k.BUTTON_OVER.toString = g;
    k.BUTTON_OVER.__enum__ = k;
    k.BUTTON_OUT = ["BUTTON_OUT", 21];
    k.BUTTON_OUT.toString = g;
    k.BUTTON_OUT.__enum__ = k;
    k.BUTTON_UP = ["BUTTON_UP",
        22
    ];
    k.BUTTON_UP.toString = g;
    k.BUTTON_UP.__enum__ = k;
    k.BUTTON_DOWN = ["BUTTON_DOWN", 23];
    k.BUTTON_DOWN.toString = g;
    k.BUTTON_DOWN.__enum__ = k;
    k.BUTTON_DRAG = ["BUTTON_DRAG", 24];
    k.BUTTON_DRAG.toString = g;
    k.BUTTON_DRAG.__enum__ = k;
    k.BUTTON_DROP = ["BUTTON_DROP", 25];
    k.BUTTON_DROP.toString = g;
    k.BUTTON_DROP.__enum__ = k;
    k.BUTTON_CANCEL_DRAG = ["BUTTON_CANCEL_DRAG", 26];
    k.BUTTON_CANCEL_DRAG.toString = g;
    k.BUTTON_CANCEL_DRAG.__enum__ = k;
    k.DIALOGUE_LINE_COMPLETE = ["DIALOGUE_LINE_COMPLETE", 27];
    k.DIALOGUE_LINE_COMPLETE.toString = g;
    k.DIALOGUE_LINE_COMPLETE.__enum__ = k;
    k.DIALOGUE_QUEUE_COMPLETE = ["DIALOGUE_QUEUE_COMPLETE", 28];
    k.DIALOGUE_QUEUE_COMPLETE.toString = g;
    k.DIALOGUE_QUEUE_COMPLETE.__enum__ = k;
    k.TUTORIAL_SWIPE = ["TUTORIAL_SWIPE", 29];
    k.TUTORIAL_SWIPE.toString = g;
    k.TUTORIAL_SWIPE.__enum__ = k;
    k.TUTORIAL_CLICK_LOCATION = ["TUTORIAL_CLICK_LOCATION", 30];
    k.TUTORIAL_CLICK_LOCATION.toString = g;
    k.TUTORIAL_CLICK_LOCATION.__enum__ = k;
    k.AVATAR_TAB_SWITCH = ["AVATAR_TAB_SWITCH", 31];
    k.AVATAR_TAB_SWITCH.toString = g;
    k.AVATAR_TAB_SWITCH.__enum__ = k;
    k.CREATE_HUD_COMIC_ELEM = ["CREATE_HUD_COMIC_ELEM", 32];
    k.CREATE_HUD_COMIC_ELEM.toString = g;
    k.CREATE_HUD_COMIC_ELEM.__enum__ = k;
    k.CREATE_WORLD_COMIC_ELEM = ["CREATE_WORLD_COMIC_ELEM", 33];
    k.CREATE_WORLD_COMIC_ELEM.toString = g;
    k.CREATE_WORLD_COMIC_ELEM.__enum__ = k;
    k.DELETE_PANEL_ELEM = ["DELETE_PANEL_ELEM", 34];
    k.DELETE_PANEL_ELEM.toString = g;
    k.DELETE_PANEL_ELEM.__enum__ = k;
    k.REFRESH_COMIC_AVATARS = ["REFRESH_COMIC_AVATARS", 35];
    k.REFRESH_COMIC_AVATARS.toString = g;
    k.REFRESH_COMIC_AVATARS.__enum__ = k;
    k.SPLASH_OUTRO_COMPLETE = ["SPLASH_OUTRO_COMPLETE",
        36
    ];
    k.SPLASH_OUTRO_COMPLETE.toString = g;
    k.SPLASH_OUTRO_COMPLETE.__enum__ = k;
    k.SHARE_AVATAR = ["SHARE_AVATAR", 37];
    k.SHARE_AVATAR.toString = g;
    k.SHARE_AVATAR.__enum__ = k;
    k.DELETE_AVATAR = ["DELETE_AVATAR", 38];
    k.DELETE_AVATAR.toString = g;
    k.DELETE_AVATAR.__enum__ = k;
    k.PRINT_CLOSE = ["PRINT_CLOSE", 39];
    k.PRINT_CLOSE.toString = g;
    k.PRINT_CLOSE.__enum__ = k;
    k.SUBMIT_POPUP_CLOSED = ["SUBMIT_POPUP_CLOSED", 40];
    k.SUBMIT_POPUP_CLOSED.toString = g;
    k.SUBMIT_POPUP_CLOSED.__enum__ = k;
    k.TEXT_FIELD_ACTIVATE = ["TEXT_FIELD_ACTIVATE", 41];
    k.TEXT_FIELD_ACTIVATE.toString =
        g;
    k.TEXT_FIELD_ACTIVATE.__enum__ = k;
    k.DROP_DOWN_ACTIVATE = ["DROP_DOWN_ACTIVATE", 42];
    k.DROP_DOWN_ACTIVATE.toString = g;
    k.DROP_DOWN_ACTIVATE.__enum__ = k;
    k.DROP_DOWN_DEACTIVATE = ["DROP_DOWN_DEACTIVATE", 43];
    k.DROP_DOWN_DEACTIVATE.toString = g;
    k.DROP_DOWN_DEACTIVATE.__enum__ = k;
    k.__empty_constructs__ = [k.GAME_OVER, k.PAUSE, k.UNPAUSE, k.MUTE_TOGGLE, k.RESIZE_CANVAS, k.UPDATE_DISPLAY, k.TWEENS_ALL_COMPLETE, k.TWEEN_CURRENT_COMPLETE, k.INITIAL_LOAD_COMPLETE, k.WORLD_GENERATION_COMPLETE, k.FILES_ERROR, k.FILE_RESULT, k.ALL_POOLS_FULL,
        k.VO_PAUSED, k.VO_ENDED, k.VO_STARTED, k.INPUT_ARBITRARY_KEY_KEYBOARD, k.INPUT_FIELD_ENTER, k.ITEM_SELECT, k.BUTTON_CLICK, k.BUTTON_OVER, k.BUTTON_OUT, k.BUTTON_UP, k.BUTTON_DOWN, k.BUTTON_DRAG, k.BUTTON_DROP, k.BUTTON_CANCEL_DRAG, k.DIALOGUE_LINE_COMPLETE, k.DIALOGUE_QUEUE_COMPLETE, k.TUTORIAL_SWIPE, k.TUTORIAL_CLICK_LOCATION, k.AVATAR_TAB_SWITCH, k.CREATE_HUD_COMIC_ELEM, k.CREATE_WORLD_COMIC_ELEM, k.DELETE_PANEL_ELEM, k.REFRESH_COMIC_AVATARS, k.SPLASH_OUTRO_COMPLETE, k.SHARE_AVATAR, k.DELETE_AVATAR, k.PRINT_CLOSE, k.SUBMIT_POPUP_CLOSED,
        k.TEXT_FIELD_ACTIVATE, k.DROP_DOWN_ACTIVATE, k.DROP_DOWN_DEACTIVATE
    ];
    var Aa = j["com.workinman.cloud.LAYER"] = { __ename__: ["com", "workinman", "cloud", "LAYER"], __constructs__: ["z__MAINUI", "BG", "WORLD"] };
    Aa.z__MAINUI = ["z__MAINUI", 0];
    Aa.z__MAINUI.toString = g;
    Aa.z__MAINUI.__enum__ = Aa;
    Aa.BG = ["BG", 1];
    Aa.BG.toString = g;
    Aa.BG.__enum__ = Aa;
    Aa.WORLD = ["WORLD", 2];
    Aa.WORLD.toString = g;
    Aa.WORLD.__enum__ = Aa;
    Aa.__empty_constructs__ = [Aa.z__MAINUI, Aa.BG, Aa.WORLD];
    var i = function() {
        this._poolStore = new Ke;
        this._values = new db;
        this._defaults =
            new db
    };
    j["com.workinman.cloud.WMCloud"] = i;
    i.__name__ = ["com", "workinman", "cloud", "WMCloud"];
    i.__properties__ = { get_instance: "get_instance" };
    i.get_instance = function() { null == i.__instance && (i.__instance = new i, i.__instance.init()); return i.__instance };
    i.prototype = {
        init: function() {
            this._dispatcher = Rb.request();
            this._input = new Le;
            this._assets = new Me;
            this._sound = new Ne;
            this._random = new Oe;
            this._localize = new Pe;
            this._achievements = new Qe;
            this._dialogue = new Re;
            this._timer = new Se;
            this.setString(n.STRING_REGION_ID,
                "en")
        },
        get_dispatcher: function() { return this._dispatcher },
        get_input: function() { return this._input },
        get_assets: function() { return this._assets },
        get_sound: function() { return this._sound },
        get_random: function() { return this._random },
        get_localize: function() { return this._localize },
        get_pool: function() { return this._poolStore },
        get_achievements: function() { return this._achievements },
        get_dialogue: function() { return this._dialogue },
        get_timer: function() { return this._timer },
        setBool: function(a, b) { this.setValue(a, b) },
        getBool: function(a) { return this._values.get(a) },
        setFloat: function(a, b) { this.setValue(a, b) },
        getFloat: function(a) { return this._values.get(a) },
        setInt: function(a, b) { this.setValue(a, b) },
        modifyInt: function(a, b) { return Math.floor(this.modifyValue(a, b)) },
        getInt: function(a) { return this._values.get(a) },
        setString: function(a, b) { this.setValue(a, b) },
        getString: function(a) { return this._values.get(a) },
        setDefault: function(a, b) { this._defaults.set(a, b);
            this.resetValue(a) },
        getValue: function(a) { return this._values.get(a) },
        setValue: function(a, b) { this._values.set(a, b);!1 == this._defaults.exists(a) && this.setDefault(a, b);
            this._updateDisplays(a) },
        modifyValue: function(a, b) { null == b && (b = 1); var c = this.getFloat(a) + b;
            this._values.set(a, c);
            this._updateDisplays(a); return this.getFloat(a) },
        resetValue: function(a) { var b = this._defaults.get(a);
            this._values.set(a, b);
            this._updateDisplays(a) },
        sharedObjectGetData: function(a) { var a = Cc.getLocal(a),
                b = a.data;
            a.dispose(); return b },
        sharedObjectSetData: function(a, b) {
            var c = Cc.getLocal(a);
            c.data =
                b;
            c.flush();
            c.dispose()
        },
        _updateDisplays: function(a) { this._dispatcher.dispatchEvent(Q.request(k.UPDATE_DISPLAY, function() { var b = new G;
                b.set("val", a); return b }(this))) },
        update: function(a) { this._input.update(a);
            this._dialogue.update(a);
            this._timer.update(a);
            this._sound.update(a) },
        __class__: i,
        __properties__: {
            get_timer: "get_timer",
            get_dialogue: "get_dialogue",
            get_achievements: "get_achievements",
            get_pool: "get_pool",
            get_localize: "get_localize",
            get_random: "get_random",
            get_sound: "get_sound",
            get_assets: "get_assets",
            get_input: "get_input",
            get_dispatcher: "get_dispatcher"
        }
    };
    var Te = function() { this.achievement_unlocked = "achievement_unlocked";
        this.score = "score";
        this.loading = "loading" };
    j["com.workinman.cloud._WMManifest.TLocal"] = Te;
    Te.__name__ = ["com", "workinman", "cloud", "_WMManifest", "TLocal"];
    Te.prototype = { __class__: Te };
    var Ue = function() {
        this.sbcc_whoosh = "sbcc_whoosh";
        this.sbcc_sfx_screenchange = "sbcc_sfx_screenchange";
        this.sbcc_sfx_play = "sbcc_sfx_play";
        this.sbcc_sfx_locked_alt_2 = "sbcc_sfx_locked_alt_2";
        this.sbcc_sfx_drop =
            "sbcc_sfx_drop";
        this.hdcc_splashscreenmusicv3 = "hdcc_splashscreenmusicv3";
        this.hdcc_splashscreenmusic_endstingerv3 = "hdcc_splashscreenmusic_endstingerv3";
        this.hdcc_gameplaymusicv3 = "hdcc_gameplaymusicv3";
        this.silent = "silent"
    };
    j["com.workinman.cloud._WMManifest.TSound"] = Ue;
    Ue.__name__ = ["com", "workinman", "cloud", "_WMManifest", "TSound"];
    Ue.prototype = { __class__: Ue };
    var Xe = function() { this.HDCC_avatar_girl = new Ve;
        this.HDCC_avatar_boy = new We };
    j["com.workinman.cloud._WMManifest.TSpine"] = Xe;
    Xe.__name__ = ["com",
        "workinman", "cloud", "_WMManifest", "TSpine"
    ];
    Xe.prototype = { __class__: Xe };
    var Ye = function() {
        this.loader_fill = "loader_fill";
        this.loader_bg = "loader_bg";
        this.universal_sound_on = "universal_sound_on";
        this.comic_creator_btn = "comic_creator_btn";
        this.main_btn_select_text_selected = "main_btn_select_text_selected";
        this.main_btn_select_text = "main_btn_select_text";
        this.main_btn_select_characters_selected = "main_btn_select_characters_selected";
        this.main_btn_select_characters = "main_btn_select_characters";
        this.main_btn_select_bubbles_selected =
            "main_btn_select_bubbles_selected";
        this.main_btn_select_bubbles = "main_btn_select_bubbles";
        this.scale = "scale";
        this.rotate = "rotate";
        this.pow = "pow";
        this.biff = "biff";
        this.arrgh = "arrgh";
        this.checkmark_btn = "checkmark_btn";
        this.btn_share = "btn_share";
        this.share_panel = "share_panel";
        this.main_btn_select_avatars_selected = "main_btn_select_avatars_selected";
        this.panel_picker_view = "panel_picker_view";
        this.bam = "bam";
        this.btn_avatar_submit = "btn_avatar_submit";
        this.btn_print = "btn_print";
        this.btn_download = "btn_download";
        this.popup_quit_btn = "popup_quit_btn";
        this.main_titlepiece = "main_titlepiece";
        this.layout_picker_box = "layout_picker_box";
        this.layout_picker_8panel = "layout_picker_8panel";
        this.main_btn_select_avatars = "main_btn_select_avatars";
        this.universal_select_arrow = "universal_select_arrow";
        this.main_box_select = "main_box_select";
        this.zoom = "zoom";
        this.t1 = "t1";
        this.d4 = "d4";
        this.d3 = "d3";
        this.d2 = "d2";
        this.d1 = "d1";
        this.universal_sound_off = "universal_sound_off";
        this.universal_close = "universal_close";
        this.popup_quit_bg =
            "popup_quit_bg";
        this.avatar_creator_btn = "avatar_creator_btn";
        this.wham = "wham";
        this.layout_picker_bg = "layout_picker_bg";
        this.layout_picker_1panel = "layout_picker_1panel";
        this.y2 = "y2";
        this.y1 = "y1";
        this.t2 = "t2";
        this.panel_picker_cursor = "panel_picker_cursor";
        this.layout_picker_4panel = "layout_picker_4panel";
        this.main_btn_select_backgrounds_selected = "main_btn_select_backgrounds_selected";
        this.main_btn_select_backgrounds = "main_btn_select_backgrounds";
        this.comic_rotation_dotted = "comic_rotation_dotted";
        this.kapow =
            "kapow";
        this.blank = "blank";
        this.asterisk = "asterisk";
        this.mask2_color4 = "mask2_color4";
        this.mask1_color4 = "mask1_color4";
        this.mask1_color3 = "mask1_color3";
        this.mask1_color2 = "mask1_color2";
        this.head_wide_skin1 = "head_wide_skin1";
        this.head_triangle_skin1 = "head_triangle_skin1";
        this.head_round_skin1 = "head_round_skin1";
        this.eyes8_color4 = "eyes8_color4";
        this.eyes8_color3 = "eyes8_color3";
        this.eyes8_color2 = "eyes8_color2";
        this.eyes8_color1 = "eyes8_color1";
        this.eyes7_color4 = "eyes7_color4";
        this.eyes7_color3 = "eyes7_color3";
        this.eyes7_color2 = "eyes7_color2";
        this.eyes7_color1 = "eyes7_color1";
        this.eyes6_color4 = "eyes6_color4";
        this.eyes6_color3 = "eyes6_color3";
        this.eyes5_color4 = "eyes5_color4";
        this.eyes5_color3 = "eyes5_color3";
        this.eyes5_color2 = "eyes5_color2";
        this.eyes5_color1 = "eyes5_color1";
        this.eyes4_color4 = "eyes4_color4";
        this.eyes3_color4 = "eyes3_color4";
        this.eyes3_color3 = "eyes3_color3";
        this.eyes3_color2 = "eyes3_color2";
        this.eyes3_color1 = "eyes3_color1";
        this.eyes2_color4 = "eyes2_color4";
        this.eyes2_color3 = "eyes2_color3";
        this.eyes2_color2 =
            "eyes2_color2";
        this.eyes2_color1 = "eyes2_color1";
        this.eyes1_color4 = "eyes1_color4";
        this.eyes1_color3 = "eyes1_color3";
        this.eyes1_color2 = "eyes1_color2";
        this.power8_right = "power8_right";
        this.power8_left = "power8_left";
        this.power7_right = "power7_right";
        this.power7_left = "power7_left";
        this.power6_right = "power6_right";
        this.power6_left = "power6_left";
        this.power5_right = "power5_right";
        this.power5_left = "power5_left";
        this.power4_right = "power4_right";
        this.power4_left = "power4_left";
        this.power3_right = "power3_right";
        this.power3_left =
            "power3_left";
        this.power2_right = "power2_right";
        this.power2_left = "power2_left";
        this.power1_right = "power1_right";
        this.power1_left = "power1_left";
        this.nose8 = "nose8";
        this.nose7 = "nose7";
        this.nose6 = "nose6";
        this.nose5 = "nose5";
        this.nose4 = "nose4";
        this.nose3 = "nose3";
        this.nose2 = "nose2";
        this.nose1 = "nose1";
        this.mouth8_lips = "mouth8_lips";
        this.mouth8 = "mouth8";
        this.mouth7_lips = "mouth7_lips";
        this.mouth7 = "mouth7";
        this.mouth6_lips = "mouth6_lips";
        this.mouth6 = "mouth6";
        this.mouth5_lips = "mouth5_lips";
        this.mouth5 = "mouth5";
        this.mouth4_lips = "mouth4_lips";
        this.mouth4 = "mouth4";
        this.mouth3_lips = "mouth3_lips";
        this.mouth3 = "mouth3";
        this.mouth2_lips = "mouth2_lips";
        this.mouth2 = "mouth2";
        this.mouth1_lips = "mouth1_lips";
        this.mouth1 = "mouth1";
        this.mask4_color4 = "mask4_color4";
        this.mask4_color3 = "mask4_color3";
        this.mask4_color2 = "mask4_color2";
        this.mask4_color1 = "mask4_color1";
        this.mask3_color4 = "mask3_color4";
        this.mask3_color3 = "mask3_color3";
        this.mask3_color2 = "mask3_color2";
        this.mask3_color1 = "mask3_color1";
        this.mask2_color3 = "mask2_color3";
        this.mask2_color2 = "mask2_color2";
        this.mask2_color1 = "mask2_color1";
        this.mask1_color1 = "mask1_color1";
        this.head_square_skin1 = "head_square_skin1";
        this.head_heart_skin1 = "head_heart_skin1";
        this.eyes6_color2 = "eyes6_color2";
        this.eyes6_color1 = "eyes6_color1";
        this.eyes4_color3 = "eyes4_color3";
        this.eyes4_color2 = "eyes4_color2";
        this.eyes4_color1 = "eyes4_color1";
        this.eyes1_color1 = "eyes1_color1";
        this.boots9 = "boots9";
        this.boots8 = "boots8";
        this.boots7 = "boots7";
        this.boots6 = "boots6";
        this.boots5 = "boots5";
        this.boots4 = "boots4";
        this.boots3 = "boots3";
        this.boots2 = "boots2";
        this.boots10 = "boots10";
        this.boots1 = "boots1";
        this.top9 = "top9";
        this.top8 = "top8";
        this.top7 = "top7";
        this.top6 = "top6";
        this.top5 = "top5";
        this.top4 = "top4";
        this.top3 = "top3";
        this.top2 = "top2";
        this.top10 = "top10";
        this.top1 = "top1";
        this.pants9 = "pants9";
        this.pants8 = "pants8";
        this.pants7 = "pants7";
        this.pants6 = "pants6";
        this.pants5 = "pants5";
        this.pants4 = "pants4";
        this.pants3 = "pants3";
        this.pants2 = "pants2";
        this.pants10 = "pants10";
        this.pants1 = "pants1";
        this.avatar_creator_panel2 = "avatar_creator_panel2";
        this.avatar_creator_panel1 = "avatar_creator_panel1";
        this.avatar_picker_bg = "avatar_picker_bg";
        this.thumbnail_skintone6 = "thumbnail_skintone6";
        this.thumbnail_skintone5 = "thumbnail_skintone5";
        this.thumbnail_skintone4 = "thumbnail_skintone4";
        this.thumbnail_skintone3 = "thumbnail_skintone3";
        this.thumbnail_skintone2 = "thumbnail_skintone2";
        this.thumbnail_skintone1 = "thumbnail_skintone1";
        this.thumbnail_powers_off = "thumbnail_powers_off";
        this.thumbnail_mask_off = "thumbnail_mask_off";
        this.thumbnail_hair7_light = "thumbnail_hair7_light";
        this.thumbnail_hair7_dark = "thumbnail_hair7_dark";
        this.thumbnail_hair6_light = "thumbnail_hair6_light";
        this.thumbnail_hair6_dark = "thumbnail_hair6_dark";
        this.thumbnail_hair5_light = "thumbnail_hair5_light";
        this.thumbnail_hair5_dark = "thumbnail_hair5_dark";
        this.thumbnail_hair4_light = "thumbnail_hair4_light";
        this.thumbnail_hair4_dark = "thumbnail_hair4_dark";
        this.thumbnail_hair3_light = "thumbnail_hair3_light";
        this.thumbnail_hair3_dark = "thumbnail_hair3_dark";
        this.thumbnail_hair2_light = "thumbnail_hair2_light";
        this.thumbnail_hair2_dark =
            "thumbnail_hair2_dark";
        this.thumbnail_hair1_light = "thumbnail_hair1_light";
        this.thumbnail_hair1_dark = "thumbnail_hair1_dark";
        this.icon_hand_right = "icon_hand_right";
        this.icon_hand_left = "icon_hand_left";
        this.avatar_creator_selection = "avatar_creator_selection";
        this.btn_avatar_shirt = "btn_avatar_shirt";
        this.btn_avatar_mask = "btn_avatar_mask";
        this.btn_avatar_hair = "btn_avatar_hair";
        this.btn_avatar_face = "btn_avatar_face";
        this.btn_avatar_body = "btn_avatar_body";
        this.avatar_placeholder = "avatar_placeholder";
        this.avatar_picker_remove =
            "avatar_picker_remove";
        this.avatar_picker_add = "avatar_picker_add";
        this.universal_nav_arrow = "universal_nav_arrow";
        this.share_box = "share_box";
        this.btn_random = "btn_random";
        this.btn_body2_selected = "btn_body2_selected";
        this.btn_body2 = "btn_body2";
        this.btn_body1_selected = "btn_body1_selected";
        this.btn_body1 = "btn_body1";
        this.avatar_creator_bg = "avatar_creator_bg";
        this.white = "white";
        this.text_field = "text_field";
        this.menu_bg = "menu_bg";
        this.main_bg = "main_bg";
        this.black = "black";
        this.hd_comic_panel_frame_small =
            "hd_comic_panel_frame_small";
        this.hd_comic_panel_frame_mini = "hd_comic_panel_frame_mini";
        this.hd_comic_panel_frame_medium = "hd_comic_panel_frame_medium";
        this.hd_comic_panel_frame_large = "hd_comic_panel_frame_large";
        this.splash = "splash"
    };
    j["com.workinman.cloud._WMManifest.TTexture"] = Ye;
    Ye.__name__ = ["com", "workinman", "cloud", "_WMManifest", "TTexture"];
    Ye.prototype = { __class__: Ye };
    var Ze = function() { this.translation = "translation" };
    j["com.workinman.cloud._WMManifest.TXml"] = Ze;
    Ze.__name__ = ["com", "workinman",
        "cloud", "_WMManifest", "TXml"
    ];
    Ze.prototype = { __class__: Ze };
    var h = function() {};
    j["com.workinman.cloud.WMManifest"] = h;
    h.__name__ = ["com", "workinman", "cloud", "WMManifest"];
    var We = function() { this.animations = new $e;
        this.slots = new af;
        this.skins = new bf;
        this.name = "HDCC_avatar_boy" };
    j["com.workinman.cloud._WMManifest.SHDCC_avatar_boy"] = We;
    We.__name__ = ["com", "workinman", "cloud", "_WMManifest", "SHDCC_avatar_boy"];
    We.prototype = { __class__: We };
    var bf = function() { this.skintone1 = "skintone1" };
    j["com.workinman.cloud._WMManifest.SHDCC_avatar_boy_Skins"] =
        bf;
    bf.__name__ = ["com", "workinman", "cloud", "_WMManifest", "SHDCC_avatar_boy_Skins"];
    bf.prototype = { __class__: bf };
    var af = function() {
        this.powers_right = "powers_right";
        this.powers_left = "powers_left";
        this.boots = "boots";
        this.mouths = "mouths";
        this.mask_over_eyes = "mask_over_eyes";
        this.eyes = "eyes";
        this.masks_behind_eyes = "masks_behind_eyes";
        this.bangs = "bangs";
        this.nose = "nose";
        this.head_wide = "head_wide";
        this.head_heart = "head_heart";
        this.head_triangle = "head_triangle";
        this.head_square = "head_square";
        this.head_round =
            "head_round";
        this.tops = "tops";
        this.pants = "pants";
        this.hair = "hair"
    };
    j["com.workinman.cloud._WMManifest.SHDCC_avatar_boy_Slots"] = af;
    af.__name__ = ["com", "workinman", "cloud", "_WMManifest", "SHDCC_avatar_boy_Slots"];
    af.prototype = { __class__: af };
    var $e = function() { this.default_pose = "default pose" };
    j["com.workinman.cloud._WMManifest.SHDCC_avatar_boy_Anims"] = $e;
    $e.__name__ = ["com", "workinman", "cloud", "_WMManifest", "SHDCC_avatar_boy_Anims"];
    $e.prototype = { __class__: $e };
    var Ve = function() {
        this.animations = new cf;
        this.name =
            "HDCC_avatar_girl"
    };
    j["com.workinman.cloud._WMManifest.SHDCC_avatar_girl"] = Ve;
    Ve.__name__ = ["com", "workinman", "cloud", "_WMManifest", "SHDCC_avatar_girl"];
    Ve.prototype = { __class__: Ve };
    var cf = function() { this.default_pose = "default pose" };
    j["com.workinman.cloud._WMManifest.SHDCC_avatar_girl_Anims"] = cf;
    cf.__name__ = ["com", "workinman", "cloud", "_WMManifest", "SHDCC_avatar_girl_Anims"];
    cf.prototype = { __class__: cf };
    var ma = j["com.workinman.cloud.input.INPUT_PHASE"] = {
        __ename__: ["com", "workinman", "cloud", "input", "INPUT_PHASE"],
        __constructs__: ["DOWN", "UP", "MOVE"]
    };
    ma.DOWN = ["DOWN", 0];
    ma.DOWN.toString = g;
    ma.DOWN.__enum__ = ma;
    ma.UP = ["UP", 1];
    ma.UP.toString = g;
    ma.UP.__enum__ = ma;
    ma.MOVE = ["MOVE", 2];
    ma.MOVE.toString = g;
    ma.MOVE.__enum__ = ma;
    ma.__empty_constructs__ = [ma.DOWN, ma.UP, ma.MOVE];
    var fa = j["com.workinman.cloud.input.INPUT_SWIPE"] = { __ename__: ["com", "workinman", "cloud", "input", "INPUT_SWIPE"], __constructs__: ["NONE", "LEFT", "RIGHT", "UP", "DOWN"] };
    fa.NONE = ["NONE", 0];
    fa.NONE.toString = g;
    fa.NONE.__enum__ = fa;
    fa.LEFT = ["LEFT", 1];
    fa.LEFT.toString =
        g;
    fa.LEFT.__enum__ = fa;
    fa.RIGHT = ["RIGHT", 2];
    fa.RIGHT.toString = g;
    fa.RIGHT.__enum__ = fa;
    fa.UP = ["UP", 3];
    fa.UP.toString = g;
    fa.UP.__enum__ = fa;
    fa.DOWN = ["DOWN", 4];
    fa.DOWN.toString = g;
    fa.DOWN.__enum__ = fa;
    fa.__empty_constructs__ = [fa.NONE, fa.LEFT, fa.RIGHT, fa.UP, fa.DOWN];
    var F = j["com.workinman.cloud.input.INPUT_TYPE"] = { __ename__: ["com", "workinman", "cloud", "input", "INPUT_TYPE"], __constructs__: "CLICK,UI_OK,D0,D1,D2,D3,D4,D5,MOVE_UP,MOVE_DOWN,MOVE_LEFT,MOVE_RIGHT,JUMP,ATTACK".split(",") };
    F.CLICK = ["CLICK", 0];
    F.CLICK.toString =
        g;
    F.CLICK.__enum__ = F;
    F.UI_OK = ["UI_OK", 1];
    F.UI_OK.toString = g;
    F.UI_OK.__enum__ = F;
    F.D0 = ["D0", 2];
    F.D0.toString = g;
    F.D0.__enum__ = F;
    F.D1 = ["D1", 3];
    F.D1.toString = g;
    F.D1.__enum__ = F;
    F.D2 = ["D2", 4];
    F.D2.toString = g;
    F.D2.__enum__ = F;
    F.D3 = ["D3", 5];
    F.D3.toString = g;
    F.D3.__enum__ = F;
    F.D4 = ["D4", 6];
    F.D4.toString = g;
    F.D4.__enum__ = F;
    F.D5 = ["D5", 7];
    F.D5.toString = g;
    F.D5.__enum__ = F;
    F.MOVE_UP = ["MOVE_UP", 8];
    F.MOVE_UP.toString = g;
    F.MOVE_UP.__enum__ = F;
    F.MOVE_DOWN = ["MOVE_DOWN", 9];
    F.MOVE_DOWN.toString = g;
    F.MOVE_DOWN.__enum__ = F;
    F.MOVE_LEFT = ["MOVE_LEFT", 10];
    F.MOVE_LEFT.toString = g;
    F.MOVE_LEFT.__enum__ = F;
    F.MOVE_RIGHT = ["MOVE_RIGHT", 11];
    F.MOVE_RIGHT.toString = g;
    F.MOVE_RIGHT.__enum__ = F;
    F.JUMP = ["JUMP", 12];
    F.JUMP.toString = g;
    F.JUMP.__enum__ = F;
    F.ATTACK = ["ATTACK", 13];
    F.ATTACK.toString = g;
    F.ATTACK.__enum__ = F;
    F.__empty_constructs__ = [F.CLICK, F.UI_OK, F.D0, F.D1, F.D2, F.D3, F.D4, F.D5, F.MOVE_UP, F.MOVE_DOWN, F.MOVE_LEFT, F.MOVE_RIGHT, F.JUMP, F.ATTACK];
    var wb = j["com.workinman.cloud.input.INPUT_VIRTUAL"] = {
        __ename__: ["com", "workinman", "cloud", "input", "INPUT_VIRTUAL"],
        __constructs__: ["JUMP", "ATTACK"]
    };
    wb.JUMP = ["JUMP", 0];
    wb.JUMP.toString = g;
    wb.JUMP.__enum__ = wb;
    wb.ATTACK = ["ATTACK", 1];
    wb.ATTACK.toString = g;
    wb.ATTACK.__enum__ = wb;
    wb.__empty_constructs__ = [wb.JUMP, wb.ATTACK];
    var oa = j["com.workinman.cloud.screen.CHANGE_TYPE"] = { __ename__: ["com", "workinman", "cloud", "screen", "CHANGE_TYPE"], __constructs__: ["OPEN_BEGIN", "OPEN_COMPLETE", "CLOSE_BEGIN", "CLOSE_COMPLETE"] };
    oa.OPEN_BEGIN = ["OPEN_BEGIN", 0];
    oa.OPEN_BEGIN.toString = g;
    oa.OPEN_BEGIN.__enum__ = oa;
    oa.OPEN_COMPLETE = ["OPEN_COMPLETE",
        1
    ];
    oa.OPEN_COMPLETE.toString = g;
    oa.OPEN_COMPLETE.__enum__ = oa;
    oa.CLOSE_BEGIN = ["CLOSE_BEGIN", 2];
    oa.CLOSE_BEGIN.toString = g;
    oa.CLOSE_BEGIN.__enum__ = oa;
    oa.CLOSE_COMPLETE = ["CLOSE_COMPLETE", 3];
    oa.CLOSE_COMPLETE.toString = g;
    oa.CLOSE_COMPLETE.__enum__ = oa;
    oa.__empty_constructs__ = [oa.OPEN_BEGIN, oa.OPEN_COMPLETE, oa.CLOSE_BEGIN, oa.CLOSE_COMPLETE];
    var l = j["com.workinman.cloud.screen.FLOW"] = { __ename__: ["com", "workinman", "cloud", "screen", "FLOW"], __constructs__: "SPLASH_PLAY,SPLASH_CLICKTRAY,SPLASH_HELP,SPLASH_VIEW_SCORES,SPLASH_PRINTABLE,MAIN_MENU,AVATAR_TRAY_OPEN,AVATAR_TRAY_EXIT,AVATAR_TRAY_REFRESH,AVATAR_BUILDER_OPEN,AVATAR_BUILDER_EXIT,COMIC_PANEL_SELECT_OPEN,COMIC_PANEL_SELECT_EXIT,COMIC_CREATOR_OPEN,COMIC_CREATOR_EXIT,SELECT_SAVE,HELP_CLOSE,SHOP,SHOP_CLOSE,COMIC_MENU,COMIC_MENU_CLOSE,COMIC_MENU_HELP,COMIC_MENU_QUIT,COMIC_QUIT_YES,COMIC_QUIT_NO,END_LEVEL,END_LEVEL_NEXT,END_LEVEL_QUIT,END_SUMMARY_CONTINUE,END_COMIC_PLAY_AGAIN,END_COMIC_PRINTABLE,END_COMIC_VIEW_SCORES,END_COMIC_SUBMIT_SCORE,BRANCH_COMIC_WIN,BRANCH_COMIC_LOSE,BRANCH_LEVEL_WIN,BRANCH_LEVEL_LOSE,ENTER_CODE_CLOSE,ENTER_CODE_OPEN,LOAD_CLOSE,LOADING_DONE,ACHIEVEMENT_POPUP,ACHIEVEMENT_POPUP_CLOSE,ACHIEVEMENT,ACHIEVEMENT_CLOSE,DIALOGUE_POPUP,DIALOGUE_CLOSE,DEBUG_CLOSE,COMIC_TO_AVATAR,AVATAR_TO_COMIC,OPEN_POPUP_SUBMIT,CLOSE_POPUP_SUBMIT,OPEN_POPUP_SHARE,CLOSE_POPUP_SHARE,OPEN_DELETE_AVATAR,CLOSE_DELETE_AVATAR,OPEN_PRINT_CLOSE,CLOSE_PRINT_CLOSE,OPEN_SUBMIT_CONFIRM,CLOSE_SUBMIT_CONFIRM,TERMS_OPEN,TERMS_CLOSE,AGREEMENT_OPEN,AGREEMENT_CLOSE".split(",") };
    l.SPLASH_PLAY = ["SPLASH_PLAY", 0];
    l.SPLASH_PLAY.toString = g;
    l.SPLASH_PLAY.__enum__ = l;
    l.SPLASH_CLICKTRAY = ["SPLASH_CLICKTRAY", 1];
    l.SPLASH_CLICKTRAY.toString = g;
    l.SPLASH_CLICKTRAY.__enum__ = l;
    l.SPLASH_HELP = ["SPLASH_HELP", 2];
    l.SPLASH_HELP.toString = g;
    l.SPLASH_HELP.__enum__ = l;
    l.SPLASH_VIEW_SCORES = ["SPLASH_VIEW_SCORES", 3];
    l.SPLASH_VIEW_SCORES.toString = g;
    l.SPLASH_VIEW_SCORES.__enum__ = l;
    l.SPLASH_PRINTABLE = ["SPLASH_PRINTABLE", 4];
    l.SPLASH_PRINTABLE.toString = g;
    l.SPLASH_PRINTABLE.__enum__ = l;
    l.MAIN_MENU = ["MAIN_MENU",
        5
    ];
    l.MAIN_MENU.toString = g;
    l.MAIN_MENU.__enum__ = l;
    l.AVATAR_TRAY_OPEN = ["AVATAR_TRAY_OPEN", 6];
    l.AVATAR_TRAY_OPEN.toString = g;
    l.AVATAR_TRAY_OPEN.__enum__ = l;
    l.AVATAR_TRAY_EXIT = ["AVATAR_TRAY_EXIT", 7];
    l.AVATAR_TRAY_EXIT.toString = g;
    l.AVATAR_TRAY_EXIT.__enum__ = l;
    l.AVATAR_TRAY_REFRESH = ["AVATAR_TRAY_REFRESH", 8];
    l.AVATAR_TRAY_REFRESH.toString = g;
    l.AVATAR_TRAY_REFRESH.__enum__ = l;
    l.AVATAR_BUILDER_OPEN = ["AVATAR_BUILDER_OPEN", 9];
    l.AVATAR_BUILDER_OPEN.toString = g;
    l.AVATAR_BUILDER_OPEN.__enum__ = l;
    l.AVATAR_BUILDER_EXIT = ["AVATAR_BUILDER_EXIT", 10];
    l.AVATAR_BUILDER_EXIT.toString = g;
    l.AVATAR_BUILDER_EXIT.__enum__ = l;
    l.COMIC_PANEL_SELECT_OPEN = ["COMIC_PANEL_SELECT_OPEN", 11];
    l.COMIC_PANEL_SELECT_OPEN.toString = g;
    l.COMIC_PANEL_SELECT_OPEN.__enum__ = l;
    l.COMIC_PANEL_SELECT_EXIT = ["COMIC_PANEL_SELECT_EXIT", 12];
    l.COMIC_PANEL_SELECT_EXIT.toString = g;
    l.COMIC_PANEL_SELECT_EXIT.__enum__ = l;
    l.COMIC_CREATOR_OPEN = ["COMIC_CREATOR_OPEN", 13];
    l.COMIC_CREATOR_OPEN.toString = g;
    l.COMIC_CREATOR_OPEN.__enum__ = l;
    l.COMIC_CREATOR_EXIT = ["COMIC_CREATOR_EXIT",
        14
    ];
    l.COMIC_CREATOR_EXIT.toString = g;
    l.COMIC_CREATOR_EXIT.__enum__ = l;
    l.SELECT_SAVE = ["SELECT_SAVE", 15];
    l.SELECT_SAVE.toString = g;
    l.SELECT_SAVE.__enum__ = l;
    l.HELP_CLOSE = ["HELP_CLOSE", 16];
    l.HELP_CLOSE.toString = g;
    l.HELP_CLOSE.__enum__ = l;
    l.SHOP = ["SHOP", 17];
    l.SHOP.toString = g;
    l.SHOP.__enum__ = l;
    l.SHOP_CLOSE = ["SHOP_CLOSE", 18];
    l.SHOP_CLOSE.toString = g;
    l.SHOP_CLOSE.__enum__ = l;
    l.COMIC_MENU = ["COMIC_MENU", 19];
    l.COMIC_MENU.toString = g;
    l.COMIC_MENU.__enum__ = l;
    l.COMIC_MENU_CLOSE = ["COMIC_MENU_CLOSE", 20];
    l.COMIC_MENU_CLOSE.toString =
        g;
    l.COMIC_MENU_CLOSE.__enum__ = l;
    l.COMIC_MENU_HELP = ["COMIC_MENU_HELP", 21];
    l.COMIC_MENU_HELP.toString = g;
    l.COMIC_MENU_HELP.__enum__ = l;
    l.COMIC_MENU_QUIT = ["COMIC_MENU_QUIT", 22];
    l.COMIC_MENU_QUIT.toString = g;
    l.COMIC_MENU_QUIT.__enum__ = l;
    l.COMIC_QUIT_YES = ["COMIC_QUIT_YES", 23];
    l.COMIC_QUIT_YES.toString = g;
    l.COMIC_QUIT_YES.__enum__ = l;
    l.COMIC_QUIT_NO = ["COMIC_QUIT_NO", 24];
    l.COMIC_QUIT_NO.toString = g;
    l.COMIC_QUIT_NO.__enum__ = l;
    l.END_LEVEL = ["END_LEVEL", 25];
    l.END_LEVEL.toString = g;
    l.END_LEVEL.__enum__ = l;
    l.END_LEVEL_NEXT = ["END_LEVEL_NEXT", 26];
    l.END_LEVEL_NEXT.toString = g;
    l.END_LEVEL_NEXT.__enum__ = l;
    l.END_LEVEL_QUIT = ["END_LEVEL_QUIT", 27];
    l.END_LEVEL_QUIT.toString = g;
    l.END_LEVEL_QUIT.__enum__ = l;
    l.END_SUMMARY_CONTINUE = ["END_SUMMARY_CONTINUE", 28];
    l.END_SUMMARY_CONTINUE.toString = g;
    l.END_SUMMARY_CONTINUE.__enum__ = l;
    l.END_COMIC_PLAY_AGAIN = ["END_COMIC_PLAY_AGAIN", 29];
    l.END_COMIC_PLAY_AGAIN.toString = g;
    l.END_COMIC_PLAY_AGAIN.__enum__ = l;
    l.END_COMIC_PRINTABLE = ["END_COMIC_PRINTABLE", 30];
    l.END_COMIC_PRINTABLE.toString = g;
    l.END_COMIC_PRINTABLE.__enum__ =
        l;
    l.END_COMIC_VIEW_SCORES = ["END_COMIC_VIEW_SCORES", 31];
    l.END_COMIC_VIEW_SCORES.toString = g;
    l.END_COMIC_VIEW_SCORES.__enum__ = l;
    l.END_COMIC_SUBMIT_SCORE = ["END_COMIC_SUBMIT_SCORE", 32];
    l.END_COMIC_SUBMIT_SCORE.toString = g;
    l.END_COMIC_SUBMIT_SCORE.__enum__ = l;
    l.BRANCH_COMIC_WIN = ["BRANCH_COMIC_WIN", 33];
    l.BRANCH_COMIC_WIN.toString = g;
    l.BRANCH_COMIC_WIN.__enum__ = l;
    l.BRANCH_COMIC_LOSE = ["BRANCH_COMIC_LOSE", 34];
    l.BRANCH_COMIC_LOSE.toString = g;
    l.BRANCH_COMIC_LOSE.__enum__ = l;
    l.BRANCH_LEVEL_WIN = ["BRANCH_LEVEL_WIN",
        35
    ];
    l.BRANCH_LEVEL_WIN.toString = g;
    l.BRANCH_LEVEL_WIN.__enum__ = l;
    l.BRANCH_LEVEL_LOSE = ["BRANCH_LEVEL_LOSE", 36];
    l.BRANCH_LEVEL_LOSE.toString = g;
    l.BRANCH_LEVEL_LOSE.__enum__ = l;
    l.ENTER_CODE_CLOSE = ["ENTER_CODE_CLOSE", 37];
    l.ENTER_CODE_CLOSE.toString = g;
    l.ENTER_CODE_CLOSE.__enum__ = l;
    l.ENTER_CODE_OPEN = ["ENTER_CODE_OPEN", 38];
    l.ENTER_CODE_OPEN.toString = g;
    l.ENTER_CODE_OPEN.__enum__ = l;
    l.LOAD_CLOSE = ["LOAD_CLOSE", 39];
    l.LOAD_CLOSE.toString = g;
    l.LOAD_CLOSE.__enum__ = l;
    l.LOADING_DONE = ["LOADING_DONE", 40];
    l.LOADING_DONE.toString =
        g;
    l.LOADING_DONE.__enum__ = l;
    l.ACHIEVEMENT_POPUP = ["ACHIEVEMENT_POPUP", 41];
    l.ACHIEVEMENT_POPUP.toString = g;
    l.ACHIEVEMENT_POPUP.__enum__ = l;
    l.ACHIEVEMENT_POPUP_CLOSE = ["ACHIEVEMENT_POPUP_CLOSE", 42];
    l.ACHIEVEMENT_POPUP_CLOSE.toString = g;
    l.ACHIEVEMENT_POPUP_CLOSE.__enum__ = l;
    l.ACHIEVEMENT = ["ACHIEVEMENT", 43];
    l.ACHIEVEMENT.toString = g;
    l.ACHIEVEMENT.__enum__ = l;
    l.ACHIEVEMENT_CLOSE = ["ACHIEVEMENT_CLOSE", 44];
    l.ACHIEVEMENT_CLOSE.toString = g;
    l.ACHIEVEMENT_CLOSE.__enum__ = l;
    l.DIALOGUE_POPUP = ["DIALOGUE_POPUP", 45];
    l.DIALOGUE_POPUP.toString =
        g;
    l.DIALOGUE_POPUP.__enum__ = l;
    l.DIALOGUE_CLOSE = ["DIALOGUE_CLOSE", 46];
    l.DIALOGUE_CLOSE.toString = g;
    l.DIALOGUE_CLOSE.__enum__ = l;
    l.DEBUG_CLOSE = ["DEBUG_CLOSE", 47];
    l.DEBUG_CLOSE.toString = g;
    l.DEBUG_CLOSE.__enum__ = l;
    l.COMIC_TO_AVATAR = ["COMIC_TO_AVATAR", 48];
    l.COMIC_TO_AVATAR.toString = g;
    l.COMIC_TO_AVATAR.__enum__ = l;
    l.AVATAR_TO_COMIC = ["AVATAR_TO_COMIC", 49];
    l.AVATAR_TO_COMIC.toString = g;
    l.AVATAR_TO_COMIC.__enum__ = l;
    l.OPEN_POPUP_SUBMIT = ["OPEN_POPUP_SUBMIT", 50];
    l.OPEN_POPUP_SUBMIT.toString = g;
    l.OPEN_POPUP_SUBMIT.__enum__ =
        l;
    l.CLOSE_POPUP_SUBMIT = ["CLOSE_POPUP_SUBMIT", 51];
    l.CLOSE_POPUP_SUBMIT.toString = g;
    l.CLOSE_POPUP_SUBMIT.__enum__ = l;
    l.OPEN_POPUP_SHARE = ["OPEN_POPUP_SHARE", 52];
    l.OPEN_POPUP_SHARE.toString = g;
    l.OPEN_POPUP_SHARE.__enum__ = l;
    l.CLOSE_POPUP_SHARE = ["CLOSE_POPUP_SHARE", 53];
    l.CLOSE_POPUP_SHARE.toString = g;
    l.CLOSE_POPUP_SHARE.__enum__ = l;
    l.OPEN_DELETE_AVATAR = ["OPEN_DELETE_AVATAR", 54];
    l.OPEN_DELETE_AVATAR.toString = g;
    l.OPEN_DELETE_AVATAR.__enum__ = l;
    l.CLOSE_DELETE_AVATAR = ["CLOSE_DELETE_AVATAR", 55];
    l.CLOSE_DELETE_AVATAR.toString =
        g;
    l.CLOSE_DELETE_AVATAR.__enum__ = l;
    l.OPEN_PRINT_CLOSE = ["OPEN_PRINT_CLOSE", 56];
    l.OPEN_PRINT_CLOSE.toString = g;
    l.OPEN_PRINT_CLOSE.__enum__ = l;
    l.CLOSE_PRINT_CLOSE = ["CLOSE_PRINT_CLOSE", 57];
    l.CLOSE_PRINT_CLOSE.toString = g;
    l.CLOSE_PRINT_CLOSE.__enum__ = l;
    l.OPEN_SUBMIT_CONFIRM = ["OPEN_SUBMIT_CONFIRM", 58];
    l.OPEN_SUBMIT_CONFIRM.toString = g;
    l.OPEN_SUBMIT_CONFIRM.__enum__ = l;
    l.CLOSE_SUBMIT_CONFIRM = ["CLOSE_SUBMIT_CONFIRM", 59];
    l.CLOSE_SUBMIT_CONFIRM.toString = g;
    l.CLOSE_SUBMIT_CONFIRM.__enum__ = l;
    l.TERMS_OPEN = ["TERMS_OPEN",
        60
    ];
    l.TERMS_OPEN.toString = g;
    l.TERMS_OPEN.__enum__ = l;
    l.TERMS_CLOSE = ["TERMS_CLOSE", 61];
    l.TERMS_CLOSE.toString = g;
    l.TERMS_CLOSE.__enum__ = l;
    l.AGREEMENT_OPEN = ["AGREEMENT_OPEN", 62];
    l.AGREEMENT_OPEN.toString = g;
    l.AGREEMENT_OPEN.__enum__ = l;
    l.AGREEMENT_CLOSE = ["AGREEMENT_CLOSE", 63];
    l.AGREEMENT_CLOSE.toString = g;
    l.AGREEMENT_CLOSE.__enum__ = l;
    l.__empty_constructs__ = [l.SPLASH_PLAY, l.SPLASH_CLICKTRAY, l.SPLASH_HELP, l.SPLASH_VIEW_SCORES, l.SPLASH_PRINTABLE, l.MAIN_MENU, l.AVATAR_TRAY_OPEN, l.AVATAR_TRAY_EXIT, l.AVATAR_TRAY_REFRESH,
        l.AVATAR_BUILDER_OPEN, l.AVATAR_BUILDER_EXIT, l.COMIC_PANEL_SELECT_OPEN, l.COMIC_PANEL_SELECT_EXIT, l.COMIC_CREATOR_OPEN, l.COMIC_CREATOR_EXIT, l.SELECT_SAVE, l.HELP_CLOSE, l.SHOP, l.SHOP_CLOSE, l.COMIC_MENU, l.COMIC_MENU_CLOSE, l.COMIC_MENU_HELP, l.COMIC_MENU_QUIT, l.COMIC_QUIT_YES, l.COMIC_QUIT_NO, l.END_LEVEL, l.END_LEVEL_NEXT, l.END_LEVEL_QUIT, l.END_SUMMARY_CONTINUE, l.END_COMIC_PLAY_AGAIN, l.END_COMIC_PRINTABLE, l.END_COMIC_VIEW_SCORES, l.END_COMIC_SUBMIT_SCORE, l.BRANCH_COMIC_WIN, l.BRANCH_COMIC_LOSE, l.BRANCH_LEVEL_WIN,
        l.BRANCH_LEVEL_LOSE, l.ENTER_CODE_CLOSE, l.ENTER_CODE_OPEN, l.LOAD_CLOSE, l.LOADING_DONE, l.ACHIEVEMENT_POPUP, l.ACHIEVEMENT_POPUP_CLOSE, l.ACHIEVEMENT, l.ACHIEVEMENT_CLOSE, l.DIALOGUE_POPUP, l.DIALOGUE_CLOSE, l.DEBUG_CLOSE, l.COMIC_TO_AVATAR, l.AVATAR_TO_COMIC, l.OPEN_POPUP_SUBMIT, l.CLOSE_POPUP_SUBMIT, l.OPEN_POPUP_SHARE, l.CLOSE_POPUP_SHARE, l.OPEN_DELETE_AVATAR, l.CLOSE_DELETE_AVATAR, l.OPEN_PRINT_CLOSE, l.CLOSE_PRINT_CLOSE, l.OPEN_SUBMIT_CONFIRM, l.CLOSE_SUBMIT_CONFIRM, l.TERMS_OPEN, l.TERMS_CLOSE, l.AGREEMENT_OPEN, l.AGREEMENT_CLOSE
    ];
    var Ya = j["com.workinman.cloud.screen.SCREEN_OUTPUT"] = { __ename__: ["com", "workinman", "cloud", "screen", "SCREEN_OUTPUT"], __constructs__: ["OPENED", "CLOSED"] };
    Ya.OPENED = ["OPENED", 0];
    Ya.OPENED.toString = g;
    Ya.OPENED.__enum__ = Ya;
    Ya.CLOSED = ["CLOSED", 1];
    Ya.CLOSED.toString = g;
    Ya.CLOSED.__enum__ = Ya;
    Ya.__empty_constructs__ = [Ya.OPENED, Ya.CLOSED];
    var s = j["com.workinman.cloud.screen.SCREEN_TYPE"] = { __ename__: ["com", "workinman", "cloud", "screen", "SCREEN_TYPE"], __constructs__: "SPLASH,MAIN_MENU,AVATAR_TRAY,AVATAR_BUILDER,COMIC_PANEL_SELECT,COMIC_HUD,COMIC_MENU,HELP,SHOP,LOAD_LEVEL,SELECT_SAVE,QUIT_CONFIRM,END_COMIC,END_LEVEL,END_SUMMARY,CUTSCENE_BORDERS,UNLOCK,ENTER_CODE,ACHIEVEMENTS,ACHIEVEMENT_POPUP,DIALOGUE_POPUP,DEBUG,POPUP_SHARE,POPUP_SUBMIT,POPUP_SUBMIT_CONFIRM,DELETE_AVATAR,PRINT_CLOSE,SUBMIT_CONFIRM,NICK_TERMS,NICK_AGREEMENT".split(",") };
    s.SPLASH = ["SPLASH", 0];
    s.SPLASH.toString = g;
    s.SPLASH.__enum__ = s;
    s.MAIN_MENU = ["MAIN_MENU", 1];
    s.MAIN_MENU.toString = g;
    s.MAIN_MENU.__enum__ = s;
    s.AVATAR_TRAY = ["AVATAR_TRAY", 2];
    s.AVATAR_TRAY.toString = g;
    s.AVATAR_TRAY.__enum__ = s;
    s.AVATAR_BUILDER = ["AVATAR_BUILDER", 3];
    s.AVATAR_BUILDER.toString = g;
    s.AVATAR_BUILDER.__enum__ = s;
    s.COMIC_PANEL_SELECT = ["COMIC_PANEL_SELECT", 4];
    s.COMIC_PANEL_SELECT.toString = g;
    s.COMIC_PANEL_SELECT.__enum__ = s;
    s.COMIC_HUD = ["COMIC_HUD", 5];
    s.COMIC_HUD.toString = g;
    s.COMIC_HUD.__enum__ = s;
    s.COMIC_MENU = ["COMIC_MENU", 6];
    s.COMIC_MENU.toString = g;
    s.COMIC_MENU.__enum__ = s;
    s.HELP = ["HELP", 7];
    s.HELP.toString = g;
    s.HELP.__enum__ = s;
    s.SHOP = ["SHOP", 8];
    s.SHOP.toString = g;
    s.SHOP.__enum__ = s;
    s.LOAD_LEVEL = ["LOAD_LEVEL", 9];
    s.LOAD_LEVEL.toString = g;
    s.LOAD_LEVEL.__enum__ = s;
    s.SELECT_SAVE = ["SELECT_SAVE", 10];
    s.SELECT_SAVE.toString = g;
    s.SELECT_SAVE.__enum__ = s;
    s.QUIT_CONFIRM = ["QUIT_CONFIRM", 11];
    s.QUIT_CONFIRM.toString = g;
    s.QUIT_CONFIRM.__enum__ = s;
    s.END_COMIC = ["END_COMIC", 12];
    s.END_COMIC.toString = g;
    s.END_COMIC.__enum__ = s;
    s.END_LEVEL = ["END_LEVEL", 13];
    s.END_LEVEL.toString = g;
    s.END_LEVEL.__enum__ = s;
    s.END_SUMMARY = ["END_SUMMARY", 14];
    s.END_SUMMARY.toString = g;
    s.END_SUMMARY.__enum__ = s;
    s.CUTSCENE_BORDERS = ["CUTSCENE_BORDERS", 15];
    s.CUTSCENE_BORDERS.toString = g;
    s.CUTSCENE_BORDERS.__enum__ = s;
    s.UNLOCK = ["UNLOCK", 16];
    s.UNLOCK.toString = g;
    s.UNLOCK.__enum__ = s;
    s.ENTER_CODE = ["ENTER_CODE", 17];
    s.ENTER_CODE.toString = g;
    s.ENTER_CODE.__enum__ = s;
    s.ACHIEVEMENTS = ["ACHIEVEMENTS", 18];
    s.ACHIEVEMENTS.toString = g;
    s.ACHIEVEMENTS.__enum__ = s;
    s.ACHIEVEMENT_POPUP = ["ACHIEVEMENT_POPUP",
        19
    ];
    s.ACHIEVEMENT_POPUP.toString = g;
    s.ACHIEVEMENT_POPUP.__enum__ = s;
    s.DIALOGUE_POPUP = ["DIALOGUE_POPUP", 20];
    s.DIALOGUE_POPUP.toString = g;
    s.DIALOGUE_POPUP.__enum__ = s;
    s.DEBUG = ["DEBUG", 21];
    s.DEBUG.toString = g;
    s.DEBUG.__enum__ = s;
    s.POPUP_SHARE = ["POPUP_SHARE", 22];
    s.POPUP_SHARE.toString = g;
    s.POPUP_SHARE.__enum__ = s;
    s.POPUP_SUBMIT = ["POPUP_SUBMIT", 23];
    s.POPUP_SUBMIT.toString = g;
    s.POPUP_SUBMIT.__enum__ = s;
    s.POPUP_SUBMIT_CONFIRM = ["POPUP_SUBMIT_CONFIRM", 24];
    s.POPUP_SUBMIT_CONFIRM.toString = g;
    s.POPUP_SUBMIT_CONFIRM.__enum__ =
        s;
    s.DELETE_AVATAR = ["DELETE_AVATAR", 25];
    s.DELETE_AVATAR.toString = g;
    s.DELETE_AVATAR.__enum__ = s;
    s.PRINT_CLOSE = ["PRINT_CLOSE", 26];
    s.PRINT_CLOSE.toString = g;
    s.PRINT_CLOSE.__enum__ = s;
    s.SUBMIT_CONFIRM = ["SUBMIT_CONFIRM", 27];
    s.SUBMIT_CONFIRM.toString = g;
    s.SUBMIT_CONFIRM.__enum__ = s;
    s.NICK_TERMS = ["NICK_TERMS", 28];
    s.NICK_TERMS.toString = g;
    s.NICK_TERMS.__enum__ = s;
    s.NICK_AGREEMENT = ["NICK_AGREEMENT", 29];
    s.NICK_AGREEMENT.toString = g;
    s.NICK_AGREEMENT.__enum__ = s;
    s.__empty_constructs__ = [s.SPLASH, s.MAIN_MENU, s.AVATAR_TRAY,
        s.AVATAR_BUILDER, s.COMIC_PANEL_SELECT, s.COMIC_HUD, s.COMIC_MENU, s.HELP, s.SHOP, s.LOAD_LEVEL, s.SELECT_SAVE, s.QUIT_CONFIRM, s.END_COMIC, s.END_LEVEL, s.END_SUMMARY, s.CUTSCENE_BORDERS, s.UNLOCK, s.ENTER_CODE, s.ACHIEVEMENTS, s.ACHIEVEMENT_POPUP, s.DIALOGUE_POPUP, s.DEBUG, s.POPUP_SHARE, s.POPUP_SUBMIT, s.POPUP_SUBMIT_CONFIRM, s.DELETE_AVATAR, s.PRINT_CLOSE, s.SUBMIT_CONFIRM, s.NICK_TERMS, s.NICK_AGREEMENT
    ];
    var Qe = function() { this._achievements = new G;
        this._flagHasBeenInit = !1 };
    j["com.workinman.cloudutils.WMAchievementManager"] =
        Qe;
    Qe.__name__ = ["com", "workinman", "cloudutils", "WMAchievementManager"];
    Qe.prototype = {
        init: function() { if (!("X" == r.ACHIEVEMENTS_ID || this._flagHasBeenInit)) { this._flagHasBeenInit = !0; for (var a = 0, b = Y.allEnums(la); a < b.length;) { var c = b[a];++a;
                    this._addAchievement(kg.buildAchievementData(c)) } a = i.get_instance().sharedObjectGetData(r.ACHIEVEMENTS_ID); if (null != a.achievements) { a = a.achievements; for (b = 0; b < a.length;) c = a[b], ++b, this._achievements.get(c).set_achieved(!0) } this._calcScore();
                this._addEventListeners() } },
        _addAchievement: function(a) { this._achievements.set(a.get_id(), a);
            a },
        getAchievements: function() { for (var a = [], b = this._achievements.keys(); b.hasNext();) { var c = b.next();
                a.push(c) } return a },
        getLocalizationNameID: function(a) { return "achievement_name_" + a },
        getLocalizationDescID: function(a) { return "achievement_desc_" + a },
        getIcon: function(a) { return "achievement_icon_" + a },
        getPoints: function(a) { return this._achievements.get(a).get_points() },
        getAchieved: function(a) { return this._achievements.get(a).get_achieved() },
        get_lastAchievedId: function() { return this._lastAchievedId },
        _calcScore: function() { this._points = 0; for (var a = this._achievements.iterator(); a.hasNext();) { var b = a.next();
                b.get_achieved() && (this._points += b.get_points()) } },
        _sharedObjectSetData: function() { for (var a = [], b = this._achievements.iterator(); b.hasNext();) { var c = b.next();
                c.get_achieved() && a.push(c.get_id()) } a = { achievements: a };
            i.get_instance().sharedObjectSetData(r.ACHIEVEMENTS_ID, a) },
        _addEventListeners: function() {
            i.get_instance().get_dispatcher().addEventListener(k.UPDATE_DISPLAY,
                o(this, this._onCheckAchievements))
        },
        _onCheckAchievements: function(a) { for (var b = this._achievements.iterator(); b.hasNext();) { var c = b.next(),
                    e = c.get_valueId(),
                    m;
                m = a.get_data().get("val");
                e == m && !c.get_achieved() && i.get_instance().getValue(c.get_valueId()) >= c.get_value() && (c.set_achieved(!0), this._sharedObjectSetData(), this._calcScore(), this._lastAchievedId = c.get_id(), r.dispatchFlowEvent(l.ACHIEVEMENT_POPUP)) } },
        __class__: Qe,
        __properties__: { get_lastAchievedId: "get_lastAchievedId" }
    };
    var nb = j["com.workinman.cloudutils._WMDialogueManager.DIALOGUE_STATE"] = { __ename__: ["com", "workinman", "cloudutils", "_WMDialogueManager", "DIALOGUE_STATE"], __constructs__: ["ACTIVE", "READY"] };
    nb.ACTIVE = ["ACTIVE", 0];
    nb.ACTIVE.toString = g;
    nb.ACTIVE.__enum__ = nb;
    nb.READY = ["READY", 1];
    nb.READY.toString = g;
    nb.READY.__enum__ = nb;
    nb.__empty_constructs__ = [nb.ACTIVE, nb.READY];
    var Re = function() { this._queue = [];
        this._dialogueTracker = [];
        this._currentDialogue = "";
        this._addEventListeners();
        this._setState(nb.READY) };
    j["com.workinman.cloudutils.WMDialogueManager"] = Re;
    Re.__name__ = ["com", "workinman",
        "cloudutils", "WMDialogueManager"
    ];
    Re.prototype = {
        _addEventListeners: function() { i.get_instance().get_dispatcher().addEventListener(k.DIALOGUE_LINE_COMPLETE, o(this, this._onDialogueComplete)) },
        _onDialogueComplete: function() { this._setState(nb.READY) },
        _setState: function(a) { this._state = a; switch (this._state[1]) {
                case 1:
                    i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.DIALOGUE_QUEUE_COMPLETE)), "" != this._currentDialogue && (this._dialogueTracker.push(this._currentDialogue), this._currentDialogue = "") } },
        update: function(a) { switch (this._state[1]) {
                case 1:
                    if (0 < this._queue.length) { if (0 < this._delay) { this._delay -= a; break } this._setState(nb.ACTIVE);
                        r.dispatchFlowEvent(l.DIALOGUE_POPUP) } } },
        grabData: function() { return this._queue.shift() },
        __class__: Re
    };
    var Le = function() { this._delegateListenerArray = [];
        this._delegateUnlockWebAudio = null;
        this._inputTrackers = [];
        this._virtualDown = [];
        this.multiTouch = [];
        this._enabled = !1;
        this.pointer = new Pd(-1) };
    j["com.workinman.cloudutils.WMInput"] = Le;
    Le.__name__ = ["com", "workinman",
        "cloudutils", "WMInput"
    ];
    Le.prototype = {
        setDelegateUnlockWebAudio: function(a) { this._delegateUnlockWebAudio = a },
        addDelegateListener: function(a) { for (var b = 0, c = this._delegateListenerArray; b < c.length;) { var e = c[b];++b; if (e == a) return } this._delegateListenerArray.push(a) },
        removeDelegateListener: function(a) { for (var b = this._delegateListenerArray.length; 0 < b--;)
                if (this._delegateListenerArray[b] == a) { this._delegateListenerArray.splice(b, 1); break } },
        setEnabled: function(a) { this._enabled = a },
        _delegateDispatch: function(a,
            b, c, e, m) { null != this._delegateUnlockWebAudio && a == ma.UP && (this._delegateUnlockWebAudio(), this._delegateUnlockWebAudio = null); if (!1 != this._enabled)
                for (var d = 0, g = this._delegateListenerArray; d < g.length;) { var f = g[d];++d;
                    f(a, b, c, e, m) } },
        update: function() { if (!1 != this._enabled) { for (var a = 0, b = this._inputTrackers; a < b.length;) { var c = b[a];++a;
                    c.updateStatus() } this.pointer.fresh = !1; for (a = this.multiTouch.length; 0 < a--;) b = this.multiTouch[a], b.fresh = !1, b.phase == ma.UP && (b.dispose(), this.multiTouch.splice(a, 1)) } },
        prime: function() {
            I._platform.getKeyboard().down.connect(o(this,
                this._onKeyDown));
            I._platform.getKeyboard().up.connect(o(this, this._onKeyUp));
            I._platform.getTouch().get_supported() && (I._platform.getTouch().down.connect(o(this, this._onTouchDown)), I._platform.getTouch().move.connect(o(this, this._onTouchMove)), I._platform.getTouch().up.connect(o(this, this._onTouchUp)));
            I._platform.getPointer().down.connect(o(this, this._onPointerDown));
            I._platform.getPointer().move.connect(o(this, this._onPointerMove));
            I._platform.getPointer().up.connect(o(this, this._onPointerUp))
        },
        doButtonDepthTest: function(a, b) { return J.hitTest(I.root, a, b) },
        registerInput: function(a, b, c) { this._createOrGetInputTracker(a).setKeys(b, c) },
        _createOrGetInputTracker: function(a) { for (var b = 0, c = this._inputTrackers; b < c.length;) { var e = c[b];++b; if (e.get_type() == a) return e } a = new df(a, o(this, this._fireKeyEvent), o(this, this._isVirtualDown));
            this._inputTrackers.push(a); return a },
        _fireKeyEvent: function(a, b) { this._delegateDispatch(b, a, 0, 0, fa.NONE) },
        getInputDown: function(a) {
            if (a == F.CLICK) return this.pointer.down;
            for (var b = 0, c = this._inputTrackers; b < c.length;) { var e = c[b];++b; if (e.get_type() == a) return e.get_down() }
            return !1
        },
        _onKeyDown: function(a) { i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.INPUT_ARBITRARY_KEY_KEYBOARD, function() { var b = new G;
                b.set("key", a.key);
                b.set("phase", ma.DOWN); return b }(this))) },
        _onKeyUp: function(a) { i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.INPUT_ARBITRARY_KEY_KEYBOARD, function() { var b = new G;
                b.set("key", a.key);
                b.set("phase", ma.UP); return b }(this))) },
        onVirtualDown: function(a) {
            for (var b =
                    0, c = this._virtualDown; b < c.length;) { var e = c[b];++b; if (e == a) return } this._virtualDown.push(a)
        },
        onVirtualUp: function(a) { for (var b = this._virtualDown.length; 0 < b--;)
                if (this._virtualDown[b] == a) { this._virtualDown.splice(b, 1); break } },
        _isVirtualDown: function(a) { for (var b = 0, c = this._virtualDown; b < c.length;) { var e = c[b];++b; if (e == a) return !0 } return !1 },
        _onTouchDown: function(a) { this._doTouchDown(a.id, a.viewX, a.viewY) },
        _onTouchMove: function(a) { this._doTouchMove(a.id, a.viewX, a.viewY) },
        _onTouchUp: function(a) {
            this._doTouchUp(a.id,
                a.viewX, a.viewY)
        },
        _doTouchDown: function(a, b, c) { var e = this._findTouch(a);
            null == e && (e = new Pd(a), this.multiTouch.push(e));
            e.begin(b, c) },
        _doTouchMove: function(a, b, c) { a = this._findTouch(a);
            null != a && a.move(b, c) },
        _doTouchUp: function(a, b, c) { a = this._findTouch(a);
            null != a && a.end(b, c) },
        _findTouch: function(a) { for (var b = 0, c = this.multiTouch; b < c.length;) { var e = c[b];++b; if (e.id == a) return e } return null },
        _onPointerDown: function(a) {
            this.pointer.begin(a.viewX, a.viewY);
            !1 == I._platform.getTouch().get_supported() && this._doTouchDown(0,
                a.viewX, a.viewY);
            this._delegateDispatch(ma.DOWN, F.CLICK, this.pointer.get_currentPos().x, this.pointer.get_currentPos().y, this.pointer.swipe)
        },
        _onPointerMove: function(a) { this.pointer.move(a.viewX, a.viewY);!1 == I._platform.getTouch().get_supported() && this._doTouchMove(0, a.viewX, a.viewY);
            this._delegateDispatch(ma.MOVE, F.CLICK, this.pointer.get_currentPos().x, this.pointer.get_currentPos().y, this.pointer.swipe) },
        _onPointerUp: function(a) {
            this.pointer.end(a.viewX, a.viewY);
            !1 == I._platform.getTouch().get_supported() &&
                this._doTouchUp(0, a.viewX, a.viewY);
            this._delegateDispatch(ma.UP, F.CLICK, this.pointer.get_currentPos().x, this.pointer.get_currentPos().y, this.pointer.swipe)
        },
        __class__: Le
    };
    var df = function(a, b, c) { this._type = a;
        this._keys = [];
        this._virtual = [];
        this._fireDelegate = b;
        this._virtualTestDelegate = c;
        this._pointer = null };
    j["com.workinman.cloudutils.WMInputTracker"] = df;
    df.__name__ = ["com", "workinman", "cloudutils", "WMInputTracker"];
    df.prototype = {
        get_type: function() { return this._type },
        get_down: function() { return this._down },
        setKeys: function(a, b) { if (null != a)
                for (var c = 0; c < a.length;) { var e = a[c];++c;
                    this._keys.push(e) }
            if (null != b)
                for (c = 0; c < b.length;) e = b[c], ++c, this._virtual.push(e) },
        updateStatus: function() { this._fresh = !1;
            this._down ? !1 == this._isDown() && (this._down = !1, this._fireDelegate(this._type, ma.UP)) : this._isDown() && (this._fresh = this._down = !0, this._fireDelegate(this._type, ma.DOWN)) },
        _isDown: function() {
            for (var a = 0, b = this._keys; a < b.length;) { var c = b[a];++a; if (I._platform.getKeyboard().isDown(c)) return !0 } a = 0;
            for (b = this._virtual; a <
                b.length;)
                if (c = b[a], ++a, this._virtualTestDelegate(c)) return !0;
            return null != this._pointer && this._pointer.down ? !0 : !1
        },
        __class__: df,
        __properties__: { get_down: "get_down", get_type: "get_type" }
    };
    var Pe = function() { this._localizedData = new G;
        this._emptyLocalization = new Qd("", "", "", 1, 0, 0) };
    j["com.workinman.cloudutils.WMLocalize"] = Pe;
    Pe.__name__ = ["com", "workinman", "cloudutils", "WMLocalize"];
    Pe.prototype = {
        parseLocalization: function(a) {
            if (null == a || "" == a) a = h.xml.translation;
            var b = i.get_instance().get_assets().getXML(a);
            this._defaultFont = b.att.resolve("defaultFont");
            a = "";
            for (b = b.nodes.resolve("string").iterator(); b.hasNext();) { var c = b.next(),
                    a = c.att.resolve("id");
                this._localizedData.exists(a) || (c = new Qd(c.att.resolve("id"), c.get_innerData(), c.att.resolve("fontName"), B.parseFloat(c.att.resolve("fontScale")), B.parseFloat(c.att.resolve("offsetX")), B.parseFloat(c.att.resolve("offsetY"))), this._localizedData.set(a, c), c) }
        },
        get_defaultFont: function() { return this._defaultFont },
        getLocalizeData: function(a) {
            return !1 == this._localizedData.exists(a) ?
                this._emptyLocalization : this._localizedData.get(a)
        },
        getString: function(a) { return this.getLocalizeData(a).get_string() },
        __class__: Pe,
        __properties__: { get_defaultFont: "get_defaultFont" }
    };
    var Qd = function(a, b, c, e, m, d) { this._id = a;
        this._string = b;
        this._cleanString();
        this._fontName = c;
        this._scale = e;
        this._offsetX = m;
        this._offsetY = d };
    j["com.workinman.cloudutils.WMLocalizedData"] = Qd;
    Qd.__name__ = ["com", "workinman", "cloudutils", "WMLocalizedData"];
    Qd.prototype = {
        _cleanString: function() {
            this._string = $.replace(this._string,
                "<br>", "\n")
        },
        get_string: function() { return this._string },
        get_fontName: function() { return this._fontName },
        get_scale: function() { return this._scale },
        get_offsetX: function() { return this._offsetX },
        get_offsetY: function() { return this._offsetY },
        __class__: Qd,
        __properties__: { get_offsetY: "get_offsetY", get_offsetX: "get_offsetX", get_scale: "get_scale", get_fontName: "get_fontName", get_string: "get_string" }
    };
    var Pd = function(a) {
        this.lastPos = W.request();
        this.line = ob.request();
        this.phase = ma.UP;
        this.swipe = fa.NONE;
        this.down = !1;
        this.fresh = !0;
        this.id = a;
        this.disposed = this.consumed = !1
    };
    j["com.workinman.cloudutils.WMPointer"] = Pd;
    Pd.__name__ = ["com", "workinman", "cloudutils", "WMPointer"];
    Pd.prototype = {
        dispose: function() { this.disposed = !0;
            this.lastPos.dispose();
            this.lastPos = null;
            this.line.dispose();
            this.phase = this.swipe = this.line = null },
        get_originPos: function() { return this.line.get_p0() },
        get_currentPos: function() { return this.line.get_p1() },
        begin: function(a, b) {
            this.line.toFloats(a, b, a, b);
            this.lastPos.to(a, b);
            this.fresh = this.down = !0;
            this.consumed = !1;
            this.phase = ma.DOWN;
            this.swipe = fa.NONE
        },
        move: function(a, b) { this._updateInfo(a, b);
            this.phase = ma.MOVE },
        end: function(a, b) { this._updateInfo(a, b);
            this.phase = ma.UP;
            this.down = !1 },
        _updateInfo: function(a, b) { this.lastPos.toPoint(this.line.get_p1());
            this.line.endTo(a, b, 0); var c = this.line.get_p0().x - this.line.get_p1().x,
                e = this.line.get_p0().y - this.line.get_p1().y;
            this.swipe = 30 <= Math.abs(c) && 30 > Math.abs(e) ? 0 < c ? fa.LEFT : fa.RIGHT : 30 <= Math.abs(e) && 30 > Math.abs(c) ? 0 < e ? fa.UP : fa.DOWN : fa.NONE },
        __class__: Pd,
        __properties__: { get_currentPos: "get_currentPos", get_originPos: "get_originPos" }
    };
    var Se = function() { this._timers = [];
        this._uniqueInc = 0;
        this._paused = !1 };
    j["com.workinman.cloudutils.WMTimer"] = Se;
    Se.__name__ = ["com", "workinman", "cloudutils", "WMTimer"];
    Se.prototype = {
        update: function(a) { if (!this._paused)
                for (var b = this._timers.length; 0 < b--;) this._timers[b].update(a), this._timers[b].doDelete && (this._timers[b].dispose(), this._timers.splice(b, 1)) },
        start: function(a, b, c) {
            null == c && (c = "");
            null != a && this._timers.push(cc.request(a,
                b, "" == c ? "def" + this._uniqueInc++ : c))
        },
        __class__: Se
    };
    var Ga = function() {};
    j["com.workinman.pooling.IStrictPoolable"] = Ga;
    Ga.__name__ = ["com", "workinman", "pooling", "IStrictPoolable"];
    Ga.prototype = { __class__: Ga };
    var N = function() {};
    j["com.workinman.pooling.PoolStrictBase"] = N;
    N.__name__ = ["com", "workinman", "pooling", "PoolStrictBase"];
    N.__interfaces__ = [Ga];
    N.prototype = {
        instance: function(a, b) { this._returnFunction = b;
            this._key = a;
            this.poolActivate();
            this.create(); return this },
        get_poolKey: function() { return this._key },
        create: function() {},
        poolActivate: function() { this._disposed = !1 },
        dispose: function() { this._disposed || (this._disposed = !0, this._returnFunction(this)) },
        destroy: function() { this._returnFunction = null },
        __class__: N,
        __properties__: { get_poolKey: "get_poolKey" }
    };
    var cc = function() {};
    j["com.workinman.cloudutils.WMTimerData"] = cc;
    cc.__name__ = ["com", "workinman", "cloudutils", "WMTimerData"];
    cc.__interfaces__ = [Ga];
    cc.request = function(a, b, c) { return i.get_instance().get_pool().requestObject("WMTimerData", cc).init(a, b, c) };
    cc.__super__ = N;
    cc.prototype = A(N.prototype, {
        init: function(a, b, c) { this._id = c;
            this._callback = a;
            this._timer = b;
            this._paused = this.doDelete = !1; return this },
        get_id: function() { return this._id },
        dispose: function() { this._callback = this._id = null;
            N.prototype.dispose.call(this) },
        pause: function() { this._paused = !0 },
        unPause: function() { this._paused = !1 },
        update: function(a) { this._paused || (this._timer -= a, 0 > this._timer && (this.fireCallback(), this.doDelete = !0)) },
        fireCallback: function() {
            null != this._callback && (this._callback(),
                this._callback = null)
        },
        __class__: cc,
        __properties__: A(N.prototype.__properties__, { get_id: "get_id" })
    });
    var ef = function(a, b, c, e) {
        this.path = a;
        if (-1 < a.indexOf("/")) { var m = a.split("/");
            this.format = m[m.length - 1] } else this.format = a;
        this.id = 0 < this.format.indexOf(".") ? this.format.split(".")[0] : this.format;
        if (null != b && 0 > this.format.indexOf(".")) switch (b[1]) {
            case 2:
                this.format += ".png"; break;
            case 3:
                this.format += ".jpg"; break;
            case 11:
                this.format += ".ogg"; break;
            case 8:
                this.format += ".mp3" } this._assetMap = c;
        this.pack =
            e;
        this.pack.addAsset(this);
        this.texture = this.pack.pack.getTexture(Na.removeExtension(a), !1);
        this.sound = this.pack.pack.getSound(Na.removeExtension(a), !1);
        this.file = this.pack.pack.getFile(a, !1);
        this._testRemoveId(this.id);
        this._testRemoveId(this.format);
        this._assetMap.set(this.id, this);
        this;
        this._assetMap.set(this.format, this);
        this;
        this.disposed = !1
    };
    j["com.workinman.cloudutils.assets.WMAssetDef"] = ef;
    ef.__name__ = ["com", "workinman", "cloudutils", "assets", "WMAssetDef"];
    ef.prototype = {
        dispose: function() {
            this.disposed ||
                (this.disposed = !0, null != this.texture && (this.texture.dispose(), this.texture = null), null != this.sound && (this.sound.dispose(), this.sound = null), null != this.file && (this.file.dispose(), this.file = null), this._assetMap.exists(this.id) && this._assetMap.remove(this.id), this._assetMap.exists(this.format) && this._assetMap.remove(this.format), this.id = this.format = this._assetMap = null)
        },
        _testRemoveId: function(a) { if (!1 != this._assetMap.exists(a)) { var b = this._assetMap.get(a);
                this._assetMap.remove(a);
                b.testDispose() } },
        testDispose: function() {
            !1 ==
                this._assetMap.exists(this.id) && !1 == this._assetMap.exists(this.format) && this.dispose()
        },
        __class__: ef
    };
    var Me = function() { this.set_baseUrl("");
        this._assets = new G;
        this._flump = new G;
        this._packs = new G;
        this._chunks = new G;
        this._customManifests = new G;
        this._packedSprites = new G;
        this._packedSounds = new G;
        this._flagBaseIsCrossdomain = !1;
        this._loadingProgress = this._loadingTotal = this._manifestsLoaded = this._manifestsMax = 0;
        this._loadingCallback = null;
        this._fontCache = new G;
        this._requests = [] };
    j["com.workinman.cloudutils.assets.WMAssetManager"] =
        Me;
    Me.__name__ = ["com", "workinman", "cloudutils", "assets", "WMAssetManager"];
    Me.prototype = {
        get_isLoading: function() { return this._manifestsLoaded < this._manifestsMax },
        set_baseUrl: function(a) { return this.baseUrl = a },
        setCrossdomainBaseUrl: function(a) { this._flagBaseIsCrossdomain = !0;
            this.set_baseUrl(a) },
        addChunk: function(a, b) { var c = this._parseChunk(a, b);
            this._chunks.set(a, c);
            c },
        _parseChunk: function(a, b) {
            for (var c = [], e = [], m = b.nodes.resolve("chunk").iterator(); m.hasNext();) { var d = m.next();
                c.push(d.get_innerData().toString()) }
            for (m =
                b.nodes.resolve("pack").iterator(); m.hasNext();) d = m.next(), e.push(d.get_innerData().toString());
            return new ff(a, e, c)
        },
        finishProcessingChunks: function() { for (var a = [], b = this._chunks.iterator(); b.hasNext();) { for (var c = b.next(); 0 < a.length;) a.pop();
                this._addNestedChunkArray(c, a); for (var e = 0; e < a.length;) { var m = a[e];++e; for (var d = 0, m = this._chunks.get(m).packIds; d < m.length;) { var g = m[d];++d;
                        Na.addStringToArrayWithoutDuplicates(g, c.packIds) } } } },
        _addNestedChunkArray: function(a, b) {
            for (var c = 0, e = a.chunkIds; c <
                e.length;) { var m = e[c];++c;!1 == this._arrayContainsChunk(b, m) && (b.push(m), this._addNestedChunkArray(this._chunks.get(m), b)) }
        },
        _arrayContainsChunk: function(a, b) { for (var c = 0; c < a.length;) { var e = a[c];++c; if (e == b) return !0 } return !1 },
        load: function(a, b, c, e, m) {
            null == m && (m = 0);
            var d = this;
            if (0 < m) i.get_instance().get_timer().start(function() { d.load(a, b, c, e, 0) }, m);
            else {
                if (this.get_isLoading()) throw "[WMAssetManager](load) Multiple loads happening at once. Combine these loads.";
                if (null == a) throw "[WMAssetManager](load) Callback is null!";
                null == b && (b = []);
                null == c && (c = []);
                null == e && (e = []);
                for (var m = [], g = 0; g < c.length;) { var f = c[g];++g;!1 == this._isPackLoaded(f) && Na.addStringToArrayWithoutDuplicates(f, m) }
                for (var c = null, h, g = 0; g < b.length;) { f = b[g];++g;
                    h = this._chunks.get(f);
                    f = 0; for (h = h.packIds; f < h.length;) { var j = h[f];++f;!1 == this._isPackLoaded(j) && Na.addStringToArrayWithoutDuplicates(j, m) } } b = h = null;
                g = [];
                for (f = 0; f < e.length;) h = e[f], ++f, !1 == this._customManifests.exists(h) ? null : !1 == this._isPackLoaded(h) && Na.addStringToArrayWithoutDuplicates(h, g);
                e = null;
                if (1 > m.length && 1 > g.length) m = g = null, a();
                else { i.get_instance().setFloat(n.FLOAT_LOADING_PROGRESS, 0);
                    this._loadingProgress = 0;
                    this._loadingCallback = a;
                    this._manifestsMax += m.length + g.length; for (f = 0; f < m.length;) h = m[f], ++f, this._loadPack(h); for (m = 0; m < g.length;) f = g[m], ++m, this._loadManifest(this._customManifests.get(f), f);
                    g = m = null }
            }
        },
        _isPackLoaded: function(a) { return this._packs.exists(a) },
        _loadPack: function(a) {
            var b = pb.fromAssets(a);
            "" != this.baseUrl && (this._flagBaseIsCrossdomain ? b.set_remoteBase(this.baseUrl) :
                b.set_localBase(this.baseUrl));
            this._loadManifest(b, a)
        },
        _loadManifest: function(a, b) {
            var c = this,
                e = I._platform.loadAssetPack(a);
            this._loadingTotal += e._total;
            var m = 0;
            e.error.connect(o(this, this._loadingError));
            e.progressChanged.connect(function() { var a = e._progress - m;
                m = e._progress;
                c._loadingProgress += a;
                i.get_instance().setFloat(n.FLOAT_LOADING_PROGRESS, lb.clamp(c._loadingProgress / c._loadingTotal, 0, 1)) });
            this._requests.push(e.get(function(a) {
                c._addPack(b, new gf(a, o(c, c._disposePackedSprite), o(c, c._disposePackedSound),
                    o(c, c._disposeFlump)));
                ++c._manifestsLoaded >= c._manifestsMax && c._onAllLoadComplete()
            }))
        },
        _loadingError: function() { i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.FILES_ERROR)) },
        _onAllLoadComplete: function() { if (null != this._loadingCallback) { var a = this._loadingCallback;
                this._loadingCallback = null;
                a() } for (; 0 < this._requests.length;) this._requests.pop() },
        _addPack: function(a, b) {
            this._packs.set(a, b);
            b;
            for (var c = "", e = b.pack.get_manifest().iterator(); e.hasNext();) {
                var m = e.next();
                if (-1 < m.name.indexOf("library.json")) c =
                    m.name.split("/"), c = c[c.length - 2], m = new hf(b.pack, c), this._flump.set(c, m), m;
                else { c = Na.getExtension(m.name); switch (c) {
                        case "xml":
                            if (this._parseSoundXML(m.name, b.pack.getFile(m.name).toString(), b)) continue; break;
                        case "atlas":
                            this._parseSpriteAtlas(b.pack.getFile(m.name).toString(), b) } new ef(m.name, m.format, this._assets, b) }
            }
        },
        _parseSpriteAtlas: function(a, b) {
            for (var c = a.split("\n"); 1 < c.length;) {
                for (; 0 == c[0].length;) c.shift();
                for (var e = $.rtrim(c.shift()); !(-1 < c.shift().indexOf("repeat:")););
                for (; 1 < c.length &&
                    0 < c[0].length;) this._parsePackedSpriteAndMovePlayhead(e, c, b)
            }
        },
        _parsePackedSpriteAndMovePlayhead: function(a, b, c) { for (var e = [], m; !(m = b.shift(), e.push($.rtrim(m)), -1 < m.indexOf("index:")););
            0 > e[0].indexOf("/") ? b = e[0] : (b = e[0].split("/"), b = b[b.length - 1]);
            this._addPackedSprite(b, a, new jf(e), c) },
        _addPackedSprite: function(a, b, c, e) { this._packedSprites.exists(a) && this._packedSprites.get(a).dispose();
            b = new kf(b, c);
            this._packedSprites.set(a, b);
            e.addSpriteSheet(a) },
        _parseSoundXML: function(a, b, c) {
            a = O.parse(b);
            b = new Dc(a.firstElement());
            if (!1 == b.hasNode.resolve("sound")) return !1;
            a = b.node.resolve("sound").att.resolve("file").toString();
            for (b = b.nodes.resolve("sound").iterator(); b.hasNext();) { var e = b.next(),
                    m = e.att.resolve("name").toString(),
                    e = new lf(m, a, B.parseFloat(e.att.resolve("start").toString()) / 1E3, B.parseFloat(e.att.resolve("length").toString()) / 1E3);
                this._packedSounds.set(m, e);
                c.addSoundSheet(m) }
            return !0
        },
        _disposePackedSound: function(a) {
            !1 != this._packedSounds.exists(a) && (this._packedSounds.get(a).dispose(),
                this._packedSounds.remove(a))
        },
        _disposePackedSprite: function(a) {!1 != this._packedSprites.exists(a) && (this._packedSprites.get(a).dispose(), this._packedSprites.remove(a)) },
        _disposeFlump: function(a) {!1 != this._flump.exists(a) && (this._flump.set(a, null), null, this._flump.remove(a)) },
        hasTexture: function(a) { null == a && (a = ""); return null == a || "" == a ? !1 : this._hasAsset(a) },
        hasSound: function(a) { null == a && (a = ""); return null == a || "" == a ? !1 : this._hasAsset(a) },
        hasXML: function(a) { null == a && (a = ""); return null == a || "" == a ? !1 : this._hasAsset(a) },
        _hasAsset: function(a) { return this._packedSprites.exists(a) || this._packedSounds.exists(a) ? !0 : this._assets.exists(a) },
        getAsset: function(a) { return !1 == this._hasAsset(a) ? null : this._assets.get(a) },
        getTexture: function(a) { null == a && (a = ""); return !1 == this.hasTexture(a) ? null : this._packedSprites.exists(a) ? !1 == this._assets.exists(this._packedSprites.get(a).atlas) ? null : this._assets.get(this._packedSprites.get(a).atlas).texture : !1 == this._assets.exists(a) ? null : this._assets.get(a).texture },
        getSpriteRect: function(a) {
            null ==
                a && (a = "");
            return null == a || "" == a || !1 == this._packedSprites.exists(a) ? null : this._packedSprites.get(a).rect
        },
        getSound: function(a) { null == a && (a = ""); if (!1 == this.hasSound(a)) return null; var b = this._packedSounds.get(a); return null != b ? new Rd(this._assets.get(b.fileName).sound, b) : new Rd(this._assets.get(a).sound, null) },
        getFile: function(a) { return !1 == this._hasAsset(a) ? null : this._assets.get(a).file },
        getXML: function(a) { null == a && (a = ""); if (!1 == this.hasXML(a)) return null;
            a = O.parse(this.getFile(a).toString()); return new Dc(a.firstElement()) },
        allConfig: function(a) { null == a && (a = !1); for (var b = [], c = 0, e = h.xmlconfig; c < e.length;) { var m = e[c];++c;
                a && null;
                b.push(this.getXML(m)) } return b },
        getFont: function(a, b) { null == b && (b = !0); if (!1 == this._assets.exists(a)) return null; if (!1 == b) return new dc(this._assets.get(a).pack.pack, a); if (!1 == this._fontCache.exists(a)) { var c = new dc(this._assets.get(a).pack.pack, a);
                this._fontCache.set(a, c);
                c } return this._fontCache.get(a) },
        getLibrary: function(a) { return !1 == this._flump.exists(a) ? null : this._flump.get(a) },
        __class__: Me,
        __properties__: { set_baseUrl: "set_baseUrl", get_isLoading: "get_isLoading" }
    };
    var gf = function(a, b, c, e) { this.pack = a;
        this._assets = [];
        this._spriteSheets = [];
        this._soundSheets = [];
        this._flumps = [];
        this._disposePackedSpriteDelegate = b;
        this._disposePackedSoundDelegate = c;
        this._disposeFlumpDelegate = e };
    j["com.workinman.cloudutils.assets.WMAssetPack"] = gf;
    gf.__name__ = ["com", "workinman", "cloudutils", "assets", "WMAssetPack"];
    gf.prototype = {
        addSpriteSheet: function(a) { this._spriteSheets.push(a) },
        addSoundSheet: function(a) { this._soundSheets.push(a) },
        addAsset: function(a) { this._assets.push(a) },
        __class__: gf
    };
    var ff = function(a, b, c) { this.id = a;
        this.packIds = b;
        this.chunkIds = c };
    j["com.workinman.cloudutils.assets.WMChunkDef"] = ff;
    ff.__name__ = ["com", "workinman", "cloudutils", "assets", "WMChunkDef"];
    ff.prototype = { __class__: ff };
    var Rd = function(a, b) { this.sound = a;
        this.data = b };
    j["com.workinman.cloudutils.assets.WMSoundData"] = Rd;
    Rd.__name__ = ["com", "workinman", "cloudutils", "assets", "WMSoundData"];
    Rd.prototype = { __class__: Rd };
    var lf = function(a, b, c, e) {
        this.id = a;
        this.fileName =
            b;
        this.start = c;
        this.length = e
    };
    j["com.workinman.cloudutils.assets.WMSoundSheetData"] = lf;
    lf.__name__ = ["com", "workinman", "cloudutils", "assets", "WMSoundSheetData"];
    lf.prototype = { dispose: function() { this.fileName = this.id = null }, __class__: lf };
    var kf = function(a, b) { this.rect = b;
        this.atlas = a };
    j["com.workinman.cloudutils.assets.WMSpriteSheetDef"] = kf;
    kf.__name__ = ["com", "workinman", "cloudutils", "assets", "WMSpriteSheetDef"];
    kf.prototype = { dispose: function() { this.atlas = this.rect = null }, __class__: kf };
    var Ba = j["com.workinman.cloudutils.sound.AUDIO_PRIORITY"] = { __ename__: ["com", "workinman", "cloudutils", "sound", "AUDIO_PRIORITY"], __constructs__: ["MUSIC", "VO", "SFX"] };
    Ba.MUSIC = ["MUSIC", 0];
    Ba.MUSIC.toString = g;
    Ba.MUSIC.__enum__ = Ba;
    Ba.VO = ["VO", 1];
    Ba.VO.toString = g;
    Ba.VO.__enum__ = Ba;
    Ba.SFX = ["SFX", 2];
    Ba.SFX.toString = g;
    Ba.SFX.__enum__ = Ba;
    Ba.__empty_constructs__ = [Ba.MUSIC, Ba.VO, Ba.SFX];
    var Ec = function() {};
    j["com.workinman.cloudutils.sound.SoundDef"] = Ec;
    Ec.__name__ = ["com", "workinman", "cloudutils", "sound", "SoundDef"];
    Ec.request = function(a, b, c, e) {
        return i.get_instance().get_pool().requestObject("SoundDef",
            Ec).init(a, b, c, e)
    };
    Ec.__super__ = N;
    Ec.prototype = A(N.prototype, {
        init: function(a, b, c, e) { this._complete = null;
            this.doDelete = !1;
            this.id = a;
            this._loop = c;
            this._maxVol = this.volume = 1;
            this.sound = b;
            this._length = this._start = -1;
            null != e.data && (this._start = e.data.start, this._length = e.data.length);
            this._htmlAudio = null; return this },
        dispose: function() {
            null != this.playback && (this.playback.dispose(), this.playback = null);
            null != this.sound && (this.sound.dispose(), this.sound = null);
            null != this._complete && this._complete();
            this._htmlAudio =
                this.id = this._complete = null;
            N.prototype.dispose.call(this)
        },
        update: function() { this.playback.volume.set__(this._maxVol * this.volume); if (this.playback.get_paused() || this.playback.get_complete().get__()) this.doDelete = !0; if (-1 < this._length && -1 < this._start) { var a = this.playback.get_position() > this._start + this._length;
                null == this._htmlAudio && (a = this.playback.get_position() > this._length);!1 != a && (this._loop ? null != this._htmlAudio && (this._htmlAudio.currentTime = this._start) : this.doDelete = !0) } },
        playSound: function(a,
            b) {
            null == a && (a = 1);
            if (null == this.sound) return null != b && b(), null;
            this._maxVol = a;
            this.volume = 1;
            this._loop ? this.playback = this.sound.loop(a) : (null != b && (this._complete = b), this.playback = this.sound.play(a));
            if (-1 == this._start && -1 == this._length) return this;
            this._loop && null;
            if (ga.get_supported()) {
                var c = t.getProperty(this.playback, "_sourceNode"),
                    e = c.buffer;
                c.disconnect();
                c = ga.ctx.createBufferSource();
                t.setProperty(this.playback, "_sourceNode", c);
                c.buffer = e;
                c.loop = this._loop;
                c.loopStart = this._start;
                c.loopEnd =
                    Math.min(this._start + this._length, this.sound.get_duration());
                c.start(0, this._start);
                t.callMethod(this.playback, t.field(this.playback, "playAudio"), [])
            } else this._htmlAudio = t.getProperty(this.playback, "_clonedElement"), this._htmlAudio.currentTime = this._start;
            return this
        },
        __class__: Ec
    });
    var Xc = function() {};
    j["com.workinman.cloudutils.sound.VOQueue"] = Xc;
    Xc.__name__ = ["com", "workinman", "cloudutils", "sound", "VOQueue"];
    Xc.request = function(a, b, c, e) {
        return i.get_instance().get_pool().requestObject("VOQueue",
            Xc).init(a, b, c, e)
    };
    Xc.__super__ = N;
    Xc.prototype = A(N.prototype, { init: function(a, b, c, e) { this.id = a;
            this.call = c;
            this.delay = e;
            this.gain = b; return this }, __class__: Xc });
    var Ne = function() { this._audioPriority = Ba.MUSIC;
        this._musicId = null;
        this._musicGain = 1;
        this._muteVo = this._muteSfx = this._muteMusic = this._muteSystem = this._muteAll = !1;
        this._mixer = new Sd;
        this._tween = Xa.request();
        this._voQueue = [];
        this._music = null;
        this._sound = new G;
        this._vo = null;
        this._soundRemoval = [] };
    j["com.workinman.cloudutils.sound.WMSound"] = Ne;
    Ne.__name__ = ["com", "workinman", "cloudutils", "sound", "WMSound"];
    Ne.prototype = {
        get_muteAll: function() { return this._muteAll },
        set_muteAll: function(a) { this._muteAll = a;
            this._toggleMute(); return this._muteAll },
        _toggleMute: function() { this._getMutePriority(Ba.MUSIC) ? this.stopMusic() : this.playMusic(this._musicId, this._musicGain);
            this._getMutePriority(Ba.SFX) && this.stopAllSound();
            this._getMutePriority(Ba.VO) && this.stopVO() },
        _getMutePriority: function(a) {
            if (this._muteAll || this._muteSystem) return !0;
            switch (a[1]) {
                case 0:
                    return this._muteMusic;
                case 2:
                    return this._muteSfx;
                case 1:
                    return this._muteVo
            }
            return !1
        },
        playMusic: function(a, b, c) { null == c && (c = -1);
            null == b && (b = 1); if (!(this._musicId == a && null != this._music)) { this._musicId = a;
                this._musicGain = b; if (0 < c && null != this._music) this._tween.tween(this._music, c, { volume: 0 }, !0, q.LINEAR).onComplete(o(this, this._onPlayMusicFadeOutComplete));
                else null != this._music && (this._music.doDelete = !0, this._music.dispose(), this._music = null);
                this._music = this._playAudio(a, b, null, !0, Ba.MUSIC) } },
        _onPlayMusicFadeOutComplete: function() {
            this.playMusic(this._musicId,
                this._musicGain)
        },
        stopMusic: function(a) { null == a && (a = -1); if (0 < a) { if (null != this._music) this._tween.tween(this._music, a, { volume: 0 }, !0, q.LINEAR).onComplete(o(this, this._onStopMusicFadeOutComplete)) } else null != this._music && (this._music.doDelete = !0) },
        _onStopMusicFadeOutComplete: function() { null != this._music && (this._music.doDelete = !0) },
        playSound: function(a, b, c, e) {
            null == e && (e = !1);
            null == b && (b = 1);
            if (this._sound.exists(a)) return this._sound.get(a).playSound(b, c);
            b = this._playAudio(a, b, c, e, Ba.SFX);
            if (null == b) return null;
            this._sound.set(a, b);
            return this._sound.get(a)
        },
        stopAllSound: function() { for (var a = this._sound.iterator(); a.hasNext();) a.next().doDelete = !0 },
        stopSound: function(a) { return this._sound.exists(a) ? this._sound.get(a).doDelete = !0 : !1 },
        stopVO: function() { for (; 0 < this._voQueue.length;) this._voQueue.pop().dispose();
            null != this._vo && (this._vo.doDelete = !0) },
        _playAudio: function(a, b, c, e, m) {
            if (null == a || this._getMutePriority(m) || !1 == r.allAudioSupported() && m != this._audioPriority) return null != c && c(), null;
            m = i.get_instance().get_assets().getSound(a);
            return null == m ? (null != c && c(), null) : Ec.request(a, this._mixer.createSound(m.sound, 4), e, m).playSound(b, c)
        },
        update: function(a) {
            this._tween.update(a);
            for (var b = this._sound.iterator(); b.hasNext();) { var c = b.next();
                c.doDelete ? (this._soundRemoval.push(c.id), c.dispose()) : c.update(a) }
            for (; 0 < this._soundRemoval.length;) this._sound.remove(this._soundRemoval.pop());
            null != this._music && (this._music.doDelete ? (this._music.dispose(), this._music = null) : this._music.update(a));
            null == this._vo && 0 < this._voQueue.length ? (this._voQueue[0].delay -=
                a, 0 > this._voQueue[0].delay && (a = this._voQueue.shift(), i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.VO_STARTED)), this._vo = this._playAudio(a.id, 1, a.call, !1, Ba.VO), a.dispose())) : null != this._vo && (this._vo.doDelete ? (this._vo.dispose(), this._vo = null, 1 > this._voQueue.length ? (i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.VO_ENDED)), null != this._music && this._tween.tween(this._music, 0.2, { volume: 1 }, !0, q.EASE_IN_OUT)) : 0 < this._voQueue[0].delay && i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.VO_PAUSED))) :
                this._vo.update(a))
        },
        __class__: Ne,
        __properties__: { set_muteAll: "set_muteAll", get_muteAll: "get_muteAll" }
    };
    var Gb = function() {};
    j["flambe.util.Disposable"] = Gb;
    Gb.__name__ = ["flambe", "util", "Disposable"];
    Gb.prototype = { __class__: Gb };
    var ja = function() { this._flags = 0;
        this.owner = this.next = null };
    j["flambe.Component"] = ja;
    ja.__name__ = ["flambe", "Component"];
    ja.__interfaces__ = [Gb];
    ja.prototype = {
        onAdded: function() {},
        onRemoved: function() {},
        onStart: function() {},
        onStop: function() {},
        onUpdate: function() {},
        dispose: function() {
            null !=
                this.owner && this.owner.remove(this)
        },
        get_name: function() { return null },
        __class__: ja,
        __properties__: { get_name: "get_name" }
    };
    var od = function(a) { ja.call(this);
        this._callback = a;
        this._paused = !1 };
    j["com.workinman.components.ComponentUpdater"] = od;
    od.__name__ = ["com", "workinman", "components", "ComponentUpdater"];
    od.__super__ = ja;
    od.prototype = A(ja.prototype, { get_name: function() { return "ComponentUpdater_0" }, onUpdate: function(a) { this._paused || this._callback(a) }, __class__: od });
    var Tb = function(a) {
        this._animations = new G;
        this._queuedAnimations = [];
        this._currentAnimDef = null;
        this._lastFrame = -1;
        this._currentFrame = 0;
        this.currentAnimation = "";
        this.fps = 24;
        this._animationStopped = !0;
        this._library = "";
        this._loopComplete = !1;
        this._symbol = "";
        this._realFrame = 0;
        x.call(this, a);
        null != a.library && this.setLibraryAndSymbol(a.library, a.symbol, null != a.trace ? a.trace : !1)
    };
    j["com.workinman.display.AnimatedElement"] = Tb;
    Tb.__name__ = ["com", "workinman", "display", "AnimatedElement"];
    Tb.__super__ = x;
    Tb.prototype = A(x.prototype, {
        dispose: function() {
            this._movieSprite =
                null;
            for (var a = this._animations.iterator(); a.hasNext();) a.next().dispose();
            this._currentAnimDef = this._animations = null;
            this.clearQueue();
            this.currentAnimation = this.animationCompleteDelegate = this._queuedAnimations = null;
            x.prototype.dispose.call(this)
        },
        setFps: function(a) { this.fps = a; return this },
        _determineFormat: function(a) { C.__instanceof(a, Fc) ? this._setFormat(ha.MOVIE) : x.prototype._determineFormat.call(this, a) },
        _cleanOldFormat: function(a) {
            switch (a[1]) {
                case 2:
                    this._movieSprite = null;
                    break;
                default:
                    x.prototype._cleanOldFormat.call(this,
                        a)
            }
        },
        get_animationRatio: function() { return (this._currentFrame - this._currentAnimDef.get_start()) / (this._currentAnimDef.get_end() - this._currentAnimDef.get_end()) },
        set_animationRatio: function(a) { this._newFrame = Math.floor(a * (this._currentAnimDef.get_end() - this._currentAnimDef.get_start()) + this._currentAnimDef.get_start());
            this._newFrame != this._currentFrame && this.set_animationFrame(this._newFrame); return this.get_animationRatio() },
        get_animationFrame: function() { return this._currentFrame | 0 },
        set_animationFrame: function(a) {
            this._currentFrame =
                this._realFrame = a;
            this._setFrame(this._realFrame);
            this.stopAnimation();
            return this._currentFrame | 0
        },
        get_isPlaying: function() { return "" != this.currentAnimation && !0 == this._doLoop() && !1 == this._animationStopped },
        get_animationFrameRelative: function() { return B["int"](this._currentFrame - this._currentAnimDef.get_start()) },
        set_animationFrameRelative: function(a) { this._currentFrame = this._currentAnimDef.get_start() + a; return this.get_animationFrameRelative() },
        setSymbol: function(a) {
            return this.setLibraryAndSymbol(this._library,
                a, !1)
        },
        get_frames: function() { return "" == this._symbol ? 0 : Math.floor(this._frames) },
        setLibraryAndSymbol: function(a, b, c) {
            null == b && (b = "");
            if ("" == b)
                for (var e = i.get_instance().get_assets().getLibrary(a).iterator(); e.hasNext();) { var m = e.next();
                    C.__instanceof(m, Gc) && 0 < C.__cast(m, Gc).frames && (b = m.get_name(), c && null) }
            if (a == this._library && b == this._symbol) return this;
            this._library = a;
            this._symbol = b;
            a = i.get_instance().get_assets().getLibrary(this._library).getSymbol(this._symbol);
            this._buildAnimationsFromLayers(a,
                c);
            this._duration = a.duration;
            this._frames = a.frames;
            this.setImageSprite(a.createSprite());
            this._movieSprite = this._imageSprite;
            this._movieSprite.set_paused(!0);
            return this
        },
        _buildAnimationsFromLayers: function(a, b) {
            for (var c = this._animations.iterator(); c.hasNext();) c.next().dispose();
            Na.emptyMap(this._animations);
            for (var c = null, e = 0, m = a.layers; e < m.length;) { var d = m[e];++e; if (null != c) break; for (var g = 0, f = d.keyframes; g < f.length;) { var h = f[g];++g; if (null != h.label) { c = d; break } } } b && null;
            if (null != c) {
                e = 0;
                for (c =
                    c.keyframes; e < c.length;) m = c[e], ++e, this.addAnimationFlump(m.label, Math.floor(m.index + 1), Math.floor(m.index + m.duration)), b && null
            } else null
        },
        addAnimationFlump: function(a, b, c) { this._animations.exists(a) && this._animations.get(a).dispose();
            b = Ub.request(a, b - 1, c - 1);
            this._animations.set(a, b); return this },
        addAnimationFrames: function(a, b) { this._animations.exists(a) && this._animations.get(a).dispose(); var c = Ub.request(a, -1, -1, b);
            this._animations.set(a, c); return this },
        animate: function(a, b, c) {
            null == c && (c = !1);
            null ==
                b && (b = 0);
            this.clearQueue();
            this._doAnimate(a, b, c);
            return this
        },
        _doAnimate: function(a, b, c) {
            null == c && (c = !1);
            null == b && (b = 0);
            this.currentAnimation == a && !1 == c || (null != this._animations && this._animations.exists(a) ? (this._currentAnimDef = null, this._currentAnimDef = this._animations.get(a), this._currentAnimDef.get_reverse() ? (this.reverse = !0, this._currentFrame = this._currentAnimDef.get_end()) : (this.reverse = !1, this._currentFrame = this._currentAnimDef.get_start()), this.currentAnimation = a, this.setLoop(b), this._animationStopped = !1, this._setFrame(this._currentFrame)) : null)
        },
        setLoop: function(a) { this._currentLoop = a;
            this._flagLoop = 0 == a; return this },
        stopAnimation: function() { this._animationStopped = !0 },
        startAnimation: function() { this._animationStopped = !1 },
        hasAnimation: function(a) { return this._animations.exists(a) },
        queueAnimation: function(a, b, c) { null == c && (c = !1);
            null == b && (b = 0);
            this._queuedAnimations.push(ec.request(a, b, c)); return this },
        clearQueue: function() { for (; 0 < this._queuedAnimations.length;) this._queuedAnimations.pop().dispose() },
        update: function(a) { x.prototype.update.call(this, a);
            this._runAnimation(a) },
        _doLoop: function() { return 0 < this._currentLoop || this._flagLoop },
        _runAnimation: function(a) {
            this.get_isPlaying() && (this._currentFrame += this.fps * a, Math.floor(this._currentFrame) > this._currentAnimDef.get_end() && (this._currentFrame = this._currentAnimDef.get_start() + (this._currentFrame - Math.floor(this._currentFrame)), this._loopComplete = !0), !0 == this._loopComplete && (this._loopComplete = !1, this._currentLoop--, !1 == this._doLoop() && (this._animationStopped = !0, this._currentFrame = this._currentAnimDef.get_end(), 0 < this._queuedAnimations.length ? (this._doAnimate(this._queuedAnimations[0].get_name(), this._queuedAnimations[0].get_loops(), this._queuedAnimations[0].get_force()), this._queuedAnimations[0].dispose(), this._queuedAnimations.splice(0, 1)) : (this._onAnimationComplete(), null != this.animationCompleteDelegate && this.animationCompleteDelegate()))), this._realFrame = this.reverse ? this._currentAnimDef.get_end() - (this._currentFrame - this._currentAnimDef.get_start()) +
                1 : this._currentFrame, (this._format != ha.MOVIE || null != this._movieSprite) && this._realFrame != this._lastFrame && this._setFrame(this._realFrame))
        },
        _setFrame: function(a) { switch (this._format[1]) {
                case 2:
                    this._movieSprite.set_position(a / this._frames * this._duration); break;
                default:
                    this.setAsset(this._currentAnimDef.get_frameIds()[Math.floor(a - 1)]) } },
        _onAnimationComplete: function() {},
        __class__: Tb,
        __properties__: A(x.prototype.__properties__, {
            get_frames: "get_frames",
            set_animationFrameRelative: "set_animationFrameRelative",
            get_animationFrameRelative: "get_animationFrameRelative",
            get_isPlaying: "get_isPlaying",
            set_animationFrame: "set_animationFrame",
            get_animationFrame: "get_animationFrame",
            set_animationRatio: "set_animationRatio",
            get_animationRatio: "get_animationRatio"
        })
    });
    var ec = function() {};
    j["com.workinman.display.QueuedAnimation"] = ec;
    ec.__name__ = ["com", "workinman", "display", "QueuedAnimation"];
    ec.__interfaces__ = [Ga];
    ec.request = function(a, b, c) {
        return i.get_instance().get_pool().requestObject("QueuedAnimation", ec).init(a,
            b, c)
    };
    ec.__super__ = N;
    ec.prototype = A(N.prototype, { init: function(a, b, c) { this._name = a;
            this._loops = b;
            this._force = c; return this }, get_name: function() { return this._name }, get_loops: function() { return this._loops }, get_force: function() { return this._force }, __class__: ec, __properties__: A(N.prototype.__properties__, { get_force: "get_force", get_loops: "get_loops", get_name: "get_name" }) });
    var Ub = function() {};
    j["com.workinman.display.AnimationDef"] = Ub;
    Ub.__name__ = ["com", "workinman", "display", "AnimationDef"];
    Ub.__interfaces__ = [Ga];
    Ub.request = function(a, b, c, e) { null == c && (c = -1);
        null == b && (b = -1); return i.get_instance().get_pool().requestObject("AnimationDef", Ub).init(a, b, c, e) };
    Ub.__super__ = N;
    Ub.prototype = A(N.prototype, {
        create: function() { this._frameIds = [] },
        init: function(a, b, c, e) {
            null == c && (c = -1);
            null == b && (b = -1);
            this._id = a;
            this._playReverse = !1;
            if (null != e) { for (a = 0; a < e.length;) b = e[a], ++a, this._frameIds.push(b);
                this._startFrame = 1;
                this._endFrame = this._frameIds.length } else this._startFrame = b, this._endFrame = c, b > c && (this._playReverse = !0, this._startFrame = c, this._endFrame = b);
            return this
        },
        dispose: function() { for (; 0 < this._frameIds.length;) this._frameIds.pop();
            N.prototype.dispose.call(this) },
        destroy: function() { this._frameIds = null;
            N.prototype.destroy.call(this) },
        get_start: function() { return this._startFrame },
        get_end: function() { return this._endFrame },
        get_reverse: function() { return this._playReverse },
        get_id: function() { return this._id },
        get_frameIds: function() { return this._frameIds },
        __class__: Ub,
        __properties__: A(N.prototype.__properties__, { get_frameIds: "get_frameIds", get_id: "get_id", get_reverse: "get_reverse", get_end: "get_end", get_start: "get_start" })
    });
    var ha = j["com.workinman.display.ELEMENT_FORMAT"] = { __ename__: ["com", "workinman", "display", "ELEMENT_FORMAT"], __constructs__: ["EMPTY", "TEXTURE", "MOVIE", "TEXT", "FILL"] };
    ha.EMPTY = ["EMPTY", 0];
    ha.EMPTY.toString = g;
    ha.EMPTY.__enum__ = ha;
    ha.TEXTURE = ["TEXTURE", 1];
    ha.TEXTURE.toString = g;
    ha.TEXTURE.__enum__ = ha;
    ha.MOVIE = ["MOVIE", 2];
    ha.MOVIE.toString = g;
    ha.MOVIE.__enum__ = ha;
    ha.TEXT = ["TEXT", 3];
    ha.TEXT.toString =
        g;
    ha.TEXT.__enum__ = ha;
    ha.FILL = ["FILL", 4];
    ha.FILL.toString = g;
    ha.FILL.__enum__ = ha;
    ha.__empty_constructs__ = [ha.EMPTY, ha.TEXTURE, ha.MOVIE, ha.TEXT, ha.FILL];
    var Kd = function(a, b, c, e, m) { null == e && (e = !1);
        this._timeline = a;
        this._rootSprite = new J;
        this._timeline.add(this._rootSprite);
        null == m && (m = Aa.z__MAINUI);
        this._defaultLayer = m;
        this._layers = new db;
        this._elements = [];
        this._camera = new mf(this._rootSprite, b, c);
        this._enablePointer = e;
        this._zSortLayers = new db };
    j["com.workinman.display.ElementManager"] = Kd;
    Kd.__name__ = ["com", "workinman", "display", "ElementManager"];
    Kd.prototype = {
        dispose: function() { for (; 0 < this._elements.length;) this._elements.pop().dispose();
            this._timeline = this._elements = null; for (var a = this._layers.iterator(); a.hasNext();) a.next().dispose();
            this._zSortLayers = this._layers = null;
            this._camera.dispose();
            this._camera = null;
            this._rootSprite.dispose();
            this._defaultLayer = this._rootSprite = null },
        get_root: function() { return this._timeline },
        get_camera: function() { return this._camera },
        addLayer: function(a, b) {
            null ==
                b && (b = !1);
            if (this._layers.exists(a)) this._timeline.removeChild(this._layers.get(a)), this._timeline.addChild(this._layers.get(a));
            else { var c = new ea;
                this._timeline.addChild(c);
                this._layers.set(a, c);
                b && this._zSortLayers.set(a, []) }
        },
        addElement: function(a, b) {
            !1 == this._enablePointer && a.disablePointerInput();
            if (null == a.root.parent) { null == b && null != this._defaultLayer && (b = this._defaultLayer); if (!1 == this._layers.exists(b)) return a;
                this._zSortLayers.exists(b) && this._addZSort(a, b);
                this._layers.get(b).addChild(a.root) } else a.root.parent.addChild(a.root);
            this._addUpdate(a);
            a.camera = this._camera;
            a.render();
            return a
        },
        _addUpdate: function(a) { for (var b = this._elements.length; 0 < b--;)
                if (this._elements[b] == a) return;
            this._elements.push(a) },
        _addZSort: function(a, b) { for (var c = this._zSortLayers.get(b), e = c.length; 0 < e--;)
                if (c[e] == a) return;
            c.push(a) },
        updateElements: function(a) { for (var b = this._elements.length; 0 < b--;) this._elements[b].update(a), this._elements[b].doDelete ? (this._elements[b].dispose(), this._elements.splice(b, 1)) : this._elements[b].render() },
        updateZSort: function(a) {
            if (this._zSortLayers.exists(a)) {
                for (var a =
                        this._zSortLayers.get(a), b = a.length; 0 < b--;) a[b].doDelete && a.splice(b, 1);
                Ca.sort(a, function(a, b) { return a.get_depth() > b.get_depth() ? -1 : a.get_depth() < b.get_depth() ? 1 : 0 });
                for (b = a.length; 0 < b--;) a[b].root.parent.addChild(a[b].root);
                a = null
            }
        },
        __class__: Kd,
        __properties__: { get_camera: "get_camera", get_root: "get_root" }
    };
    var J = function() {
        this._viewMatrixUpdateCount = this._parentViewMatrixUpdateCount = 0;
        this.blendMode = this.scissor = this._viewMatrix = null;
        var a = this;
        ja.call(this);
        this._flags |= 54;
        this._localMatrix =
            new fc;
        var b = function() { a._flags |= 24 };
        this.x = new qa(0, b);
        this.y = new qa(0, b);
        this.rotation = new qa(0, b);
        this.scaleX = new qa(1, b);
        this.scaleY = new qa(1, b);
        this.anchorX = new qa(0, b);
        this.anchorY = new qa(0, b);
        this.alpha = new qa(1)
    };
    j["flambe.display.Sprite"] = J;
    J.__name__ = ["flambe", "display", "Sprite"];
    J.hitTest = function(a, b, c) {
        var e = a._compMap.Sprite_3;
        if (null != e) {
            if (6 != (e._flags & 6)) return null;
            e.getLocalMatrix().inverseTransform(b, c, J._scratchPoint) && (b = J._scratchPoint.x, c = J._scratchPoint.y);
            var m = e.scissor;
            if (null != m && !m.contains(b, c)) return null
        }
        a = J.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != e && e.containsLocal(b, c) ? e : null
    };
    J.render = function(a, b) {
        var c = a._compMap.Sprite_3;
        if (null != c) {
            var e = c.alpha._value;
            if (0 == (c._flags & 2) || 0 >= e) return;
            b.save();
            1 > e && b.multiplyAlpha(e);
            null != c.blendMode && b.setBlendMode(c.blendMode);
            var e = c.getLocalMatrix(),
                m = e.m02,
                d = e.m12;
            0 != (c._flags & 32) && (m = Math.round(m), d = Math.round(d));
            b.transform(e.m00, e.m10, e.m01, e.m11, m, d);
            e = c.scissor;
            null != e && b.applyScissor(e.x,
                e.y, e.width, e.height);
            c.draw(b)
        }
        e = a._compMap.Director_5;
        if (null != e) { e = e.occludedScenes; for (m = 0; m < e.length;) d = e[m], ++m, J.render(d, b) }
        for (e = a.firstChild; null != e;) m = e.next, J.render(e, b), e = m;
        null != c && b.restore()
    };
    J.hitTestBackwards = function(a, b, c) { if (null != a) { var e = J.hitTestBackwards(a.next, b, c); return null != e ? e : J.hitTest(a, b, c) } return null };
    J.__super__ = ja;
    J.prototype = A(ja.prototype, {
        get_name: function() { return "Sprite_3" },
        getNaturalWidth: function() { return 0 },
        getNaturalHeight: function() { return 0 },
        contains: function(a,
            b) { return this.getViewMatrix().inverseTransform(a, b, J._scratchPoint) && this.containsLocal(J._scratchPoint.x, J._scratchPoint.y) },
        containsLocal: function(a, b) { return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight() },
        getLocalMatrix: function() { 0 != (this._flags & 8) && (this._flags &= -9, this._localMatrix.compose(this.x._value, this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180), this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value)); return this._localMatrix },
        getViewMatrix: function() { if (this.isViewMatrixDirty()) { var a = this.getParentSprite();
                this._viewMatrix = null != a ? fc.multiply(a.getViewMatrix(), this.getLocalMatrix(), this._viewMatrix) : this.getLocalMatrix().clone(this._viewMatrix);
                this._flags &= -17;
                null != a && (this._parentViewMatrixUpdateCount = a._viewMatrixUpdateCount);++this._viewMatrixUpdateCount } return this._viewMatrix },
        setAnchor: function(a, b) { this.anchorX.set__(a);
            this.anchorY.set__(b); return this },
        setXY: function(a, b) { this.x.set__(a);
            this.y.set__(b); return this },
        setScaleXY: function(a, b) { this.scaleX.set__(a);
            this.scaleY.set__(b); return this },
        disablePointer: function() { this.set_pointerEnabled(!1); return this },
        onAdded: function() { 0 != (this._flags & 64) && this.connectHover() },
        onRemoved: function() { null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null) },
        onUpdate: function(a) { this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a) },
        draw: function() {},
        isViewMatrixDirty: function() { if (0 != (this._flags & 16)) return !0; var a = this.getParentSprite(); return null == a ? !1 : this._parentViewMatrixUpdateCount != a._viewMatrixUpdateCount || a.isViewMatrixDirty() },
        getParentSprite: function() { if (null == this.owner) return null; for (var a = this.owner.parent; null != a;) { var b = a._compMap.Sprite_3; if (null != b) return b;
                a = a.parent } return null },
        connectHover: function() {
            var a = this;
            null == this._hoverConnection && (this._hoverConnection = I._platform.getPointer().move.connect(function(b) {
                for (var c =
                        b.hit; null != c;) { if (c == a) return;
                    c = c.getParentSprite() } null != a._pointerOut && 0 != (a._flags & 64) && a._pointerOut.emit(b);
                a._flags &= -65;
                a._hoverConnection.dispose();
                a._hoverConnection = null
            }))
        },
        get_visible: function() { return 0 != (this._flags & 2) },
        set_visible: function(a) { this._flags = Yc.set(this._flags, 2, a); return a },
        set_pointerEnabled: function(a) { this._flags = Yc.set(this._flags, 4, a); return a },
        set_pixelSnapping: function(a) { this._flags = Yc.set(this._flags, 32, a); return a },
        onPointerDown: function(a) {
            this.onHover(a);
            null != this._pointerDown && this._pointerDown.emit(a)
        },
        onPointerMove: function(a) { this.onHover(a);
            null != this._pointerMove && this._pointerMove.emit(a) },
        onHover: function(a) { if (0 == (this._flags & 64) && (this._flags |= 64, null != this._pointerIn || null != this._pointerOut)) null != this._pointerIn && this._pointerIn.emit(a), this.connectHover() },
        onPointerUp: function(a) {
            switch (a.source[1]) {
                case 1:
                    null != this._pointerOut && 0 != (this._flags & 64) && this._pointerOut.emit(a), this._flags &= -65, null != this._hoverConnection && (this._hoverConnection.dispose(),
                        this._hoverConnection = null)
            }
            null != this._pointerUp && this._pointerUp.emit(a)
        },
        __class__: J,
        __properties__: A(ja.prototype.__properties__, { set_pixelSnapping: "set_pixelSnapping", set_pointerEnabled: "set_pointerEnabled", set_visible: "set_visible", get_visible: "get_visible" })
    });
    var Vb = function(a) { J.call(this);
        this.texture = a };
    j["flambe.display.ImageSprite"] = Vb;
    Vb.__name__ = ["flambe", "display", "ImageSprite"];
    Vb.__super__ = J;
    Vb.prototype = A(J.prototype, {
        draw: function(a) {
            null != this.texture && a.drawTexture(this.texture,
                0, 0)
        },
        getNaturalWidth: function() { return null != this.texture ? this.texture.get_width() : 0 },
        getNaturalHeight: function() { return null != this.texture ? this.texture.get_height() : 0 },
        __class__: Vb
    });
    var Tc = function(a) { null == a && (a = ""); var b = null,
            b = i.get_instance().get_assets().getTexture(a);
        this._rect = i.get_instance().get_assets().getSpriteRect(a);
        Vb.call(this, b) };
    j["com.workinman.display.SubImageSprite"] = Tc;
    Tc.__name__ = ["com", "workinman", "display", "SubImageSprite"];
    Tc.__super__ = Vb;
    Tc.prototype = A(Vb.prototype, {
        dispose: function() {
            this._rect =
                null;
            Vb.prototype.dispose.call(this)
        },
        draw: function(a) {
            null != this.texture && (null == this._rect ? a.drawTexture(this.texture, 0, 0) : (this._rect.rotate ? (a.save(), a.rotate(90), a.drawSubTexture(this.texture, this._rect.origY - this._rect.sizeY - this._rect.offsetY, -this._rect.offsetX - this._rect.sizeX, this._rect.x, this._rect.y, this._rect.sizeY, this._rect.sizeX)) : (a.save(), a.drawSubTexture(this.texture, this._rect.offsetX, this._rect.origY - this._rect.sizeY - this._rect.offsetY, this._rect.x, this._rect.y, this._rect.sizeX,
                this._rect.sizeY)), a.restore()))
        },
        setTexture: function(a) { null == a && (a = "");
            this.texture = i.get_instance().get_assets().getTexture(a);
            this._rect = i.get_instance().get_assets().getSpriteRect(a) },
        getNaturalWidth: function() { return null == this.texture ? 0 : null == this._rect ? this.texture.get_width() : this._rect.origX },
        getNaturalHeight: function() { return null == this.texture ? 0 : null == this._rect ? this.texture.get_height() : this._rect.origY },
        __class__: Tc
    });
    var jf = function(a) {
        this._parseRes = { x: 0, y: 0 };
        this.rotate = -1 < a[1].indexOf("true");
        this._setXY(this._getLineData(a[2]));
        this._setSizeXY(this._getLineData(a[3]));
        this._setOrig(this._getLineData(a[4]));
        this._setOffset(this._getLineData(a[5]));
        this._parseRes = null
    };
    j["com.workinman.display.WMSpriteRect"] = jf;
    jf.__name__ = ["com", "workinman", "display", "WMSpriteRect"];
    jf.prototype = {
        _getLineData: function(a) { a = a.split(": ");
            a = a[1].split(", ");
            this._parseRes.x = B.parseInt(a[0]);
            this._parseRes.y = B.parseInt(a[1]); return this._parseRes },
        _setXY: function(a) { this.x = a.x;
            this.y = a.y },
        _setSizeXY: function(a) {
            this.sizeX =
                a.x;
            this.sizeY = a.y
        },
        _setOrig: function(a) { this.origX = a.x;
            this.origY = a.y },
        _setOffset: function(a) { this.offsetX = a.x;
            this.offsetY = a.y },
        __class__: jf
    };
    var Ha = function() {};
    j["com.workinman.display.spine.ArrayUtils"] = Ha;
    Ha.__name__ = ["com", "workinman", "display", "spine", "ArrayUtils"];
    Ha.allocIntArray = function(a) { for (var b = [], c = 0; c < a;) { var e = c++;
            b[e] = [] } return b };
    Ha.allocFloatArray = function(a) { for (var b = [], c = 0; c < a;) { var e = c++;
            b[e] = [] } return b };
    Ha.allocFloat = function(a) { for (var b = [], c = 0; c < a;) { var e = c++;
            b[e] = 0 } return b };
    Ha.allocString = function(a) { for (var b = [], c = 0; c < a;) { var e = c++;
            b[e] = "" } return b };
    var Zc = function() {};
    j["com.workinman.display.spine.Updatable"] = Zc;
    Zc.__name__ = ["com", "workinman", "display", "spine", "Updatable"];
    Zc.prototype = { __class__: Zc };
    var gc = function(a, b, c) {
        this.x = this.y = this.rotation = this.scaleX = this.scaleY = this.appliedRotation = this.appliedScaleX = this.appliedScaleY = this.shearX = this.shearY = this._a = this._b = this._c = this._d = this._worldX = this._worldY = this._worldSignX = this._worldSignY = this._worldRotationX =
            0;
        if (null == a) throw new P("data cannot be null.");
        if (null == b) throw new P("skeleton cannot be null.");
        this._data = a;
        this._skeleton = b;
        this._parent = c;
        this.setToSetupPose()
    };
    j["com.workinman.display.spine.Bone"] = gc;
    gc.__name__ = ["com", "workinman", "display", "spine", "Bone"];
    gc.__interfaces__ = [Zc];
    gc.prototype = {
        dispose: function() { this._parent = null;
            this._data.dispose();
            this._skeleton = this._data = null },
        updateWorldTransform: function() {
            this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY,
                this.shearX, this.shearY)
        },
        update: function() { this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY) },
        updateWorldTransformWith: function(a, b, c, e, m, d, g) {
            this.appliedRotation = c;
            this.appliedScaleX = e;
            this.appliedScaleY = m;
            var f = 0,
                h = 0,
                h = 0,
                f = (c + d) * qb.degRad,
                h = (c + 90 + g) * qb.degRad,
                c = Math.cos(f) * e,
                g = Math.cos(h) * m,
                d = Math.sin(f) * e,
                j = Math.sin(h) * m,
                i = this._parent;
            if (null == i) f = this._skeleton, f.flipX && (a = -a, c = -c, g = -g), f.flipY != gc.yDown && (b = -b, d = -d, j = -j), this._a = c, this._b =
                g, this._c = d, this._d = j, this._worldX = a, this._worldY = b, this._worldSignX = 0 > e ? -1 : 1, this._worldSignY = 0 > m ? -1 : 1;
            else {
                var k = i.get_a(),
                    l = i.get_b(),
                    n = i.get_c(),
                    o = i.get_d();
                this._worldX = k * a + l * b + i.get_worldX();
                this._worldY = n * a + o * b + i.get_worldY();
                this._worldSignX = i.get_worldSignX() * (0 > e ? -1 : 1);
                this._worldSignY = i.get_worldSignY() * (0 > m ? -1 : 1);
                if (this.get_data().inheritRotation && this.get_data().inheritScale) this._a = k * c + l * d, this._b = k * g + l * j, this._c = n * c + o * d, this._d = n * g + o * j;
                else {
                    if (this.get_data().inheritRotation) {
                        k = 1;
                        n = l = 0;
                        o = 1;
                        do { h = i.appliedRotation * qb.degRad;
                            f = Math.cos(h);
                            h = Math.sin(h);
                            a = k * f + l * h;
                            l = l * f - k * h;
                            k = a;
                            a = n * f + o * h;
                            o = o * f - n * h;
                            n = a; if (!i.get_data().inheritRotation) break;
                            i = i.get_parent() } while (null != i);
                        this._a = k * c + l * d;
                        this._b = k * g + l * j;
                        this._c = n * c + o * d;
                        this._d = n * g + o * j
                    } else if (this.get_data().inheritScale) {
                        k = 1;
                        n = l = 0;
                        o = 1;
                        do {
                            var h = i.appliedRotation * qb.degRad,
                                f = Math.cos(h),
                                h = Math.sin(h),
                                a = i.appliedScaleX,
                                p = i.appliedScaleY,
                                b = f * a,
                                e = h * p,
                                m = h * a,
                                p = f * p,
                                q = k * b + l * m,
                                l = l * p - k * e,
                                k = q,
                                q = n * b + o * m,
                                o = o * p - n * e,
                                n = q;
                            0 > a && (h = -h);
                            q = k * f + l * h;
                            l = l * f - k * h;
                            k = q;
                            q = n * f + o * h;
                            o = o * f - n * h;
                            n = q;
                            if (!i.get_data().inheritScale) break;
                            i = i.get_parent()
                        } while (null != i);
                        this._a = k * c + l * d;
                        this._b = k * g + l * j;
                        this._c = n * c + o * d;
                        this._d = n * g + o * j
                    } else this._a = c, this._b = g, this._c = d, this._d = j;
                    this._skeleton.flipX && (this._a = -this._a, this._b = -this._b);
                    this._skeleton.flipY != gc.yDown && (this._c = -this._c, this._d = -this._d)
                }
            }
            this._worldRotationX = Math.atan2(this._c, this._a) * qb.radDeg
        },
        setToSetupPose: function() {
            this.x = this._data.x;
            this.y = this._data.y;
            this.rotation = this._data.rotation;
            this.scaleX = this._data.scaleX;
            this.scaleY = this._data.scaleY;
            this.shearX = this._data.shearX;
            this.shearY = this._data.shearY
        },
        get_data: function() { return this._data },
        get_parent: function() { return this._parent },
        get_skeleton: function() { return this._skeleton },
        get_a: function() { return this._a },
        set_a: function(a) { return this._a = a },
        get_b: function() { return this._b },
        set_b: function(a) { return this._b = a },
        get_c: function() { return this._c },
        set_c: function(a) { return this._c = a },
        get_d: function() { return this._d },
        set_d: function(a) {
            return this._d =
                a
        },
        get_worldX: function() { return this._worldX },
        set_worldX: function(a) { return this._worldX = a },
        get_worldY: function() { return this._worldY },
        set_worldY: function(a) { return this._worldY = a },
        get_worldSignX: function() { return this._worldSignX },
        get_worldSignY: function() { return this._worldSignY },
        get_worldRotationX: function() { return this._worldRotationX },
        get_worldScaleX: function() { return Math.sqrt(this._a * this._a + this._b * this._b) * this._worldSignX },
        localToWorld: function(a) {
            var b = a[0],
                c = a[1];
            a[0] = b * this._a + c * this._b +
                this._worldX;
            a[1] = b * this._c + c * this._d + this._worldY
        },
        __class__: gc,
        __properties__: { get_worldScaleX: "get_worldScaleX", get_worldRotationX: "get_worldRotationX", get_worldSignY: "get_worldSignY", get_worldSignX: "get_worldSignX", set_worldY: "set_worldY", get_worldY: "get_worldY", set_worldX: "set_worldX", get_worldX: "get_worldX", set_d: "set_d", get_d: "get_d", set_c: "set_c", get_c: "get_c", set_b: "set_b", get_b: "get_b", set_a: "set_a", get_a: "get_a", get_skeleton: "get_skeleton", get_parent: "get_parent", get_data: "get_data" }
    };
    var nf = function(a, b) { this.inheritScale = this.inheritRotation = !0;
        this.scaleX = this.scaleY = 1; if (null == a) throw new P("name cannot be null.");
        this._name = a;
        this._parent = b };
    j["com.workinman.display.spine.BoneData"] = nf;
    nf.__name__ = ["com", "workinman", "display", "spine", "BoneData"];
    nf.prototype = { dispose: function() { this._parent = null }, get_name: function() { return this._name }, get_parent: function() { return this._parent }, __class__: nf, __properties__: { get_parent: "get_parent", get_name: "get_name" } };
    var of = function(a, b) {
        if (null ==
            b) throw new P("data cannot be null.");
        this.time = a;
        this._data = b
    };
    j["com.workinman.display.spine.Event"] = of ; of .__name__ = ["com", "workinman", "display", "spine", "Event"]; of .prototype = { dispose: function() { this._data.dispose();
            this._data = null }, get_data: function() { return this._data }, __class__: of , __properties__: { get_data: "get_data" } };
    var pf = function(a) { if (null == a) throw new P("name cannot be null.");
        this._name = a };
    j["com.workinman.display.spine.EventData"] = pf;
    pf.__name__ = ["com", "workinman", "display", "spine", "EventData"];
    pf.prototype = { dispose: function() {}, get_name: function() { return this._name }, __class__: pf, __properties__: { get_name: "get_name" } };
    var P = function(a) { this.msg = a };
    j["com.workinman.display.spine.Exception"] = P;
    P.__name__ = ["com", "workinman", "display", "spine", "Exception"];
    P.prototype = { __class__: P };
    var Wb = function(a, b) {
        if (null == a) throw new P("data cannot be null.");
        if (null == b) throw new P("skeleton cannot be null.");
        this._data = a;
        this.mix = a.mix;
        this.bendDirection = a.bendDirection;
        this.bones = [];
        for (var c = 0, e = a.bones; c <
            e.length;) { var m = e[c];++c;
            this.bones[this.bones.length] = b.findBone(m.get_name()) } this.target = b.findBone(a.target.get_name())
    };
    j["com.workinman.display.spine.IkConstraint"] = Wb;
    Wb.__name__ = ["com", "workinman", "display", "spine", "IkConstraint"];
    Wb.__interfaces__ = [Zc];
    Wb.apply1 = function(a, b, c, e) {
        var m = a.get_parent(),
            d = 1 / (m.get_a() * m.get_d() - m.get_b() * m.get_c()),
            b = b - m.get_worldX(),
            g = c - m.get_worldY(),
            c = (b * m.get_d() - g * m.get_b()) * d - a.x,
            m = (g * m.get_a() - b * m.get_c()) * d - a.y,
            m = Math.atan2(m, c) * qb.radDeg - a.shearX -
            a.rotation;
        0 > a.scaleX && (m += 180);
        180 < m ? m -= 360 : -180 > m && (m += 360);
        a.updateWorldTransformWith(a.x, a.y, a.rotation + m * e, a.scaleX, a.scaleY, a.shearX, a.shearY)
    };
    Wb.apply2 = function(a, b, c, e, m, d) {
        if (0 == d) b.updateWorldTransform();
        else {
            var g = a.x,
                f = a.y,
                h = a.scaleX,
                i = a.scaleY,
                j = b.scaleX,
                k, l, n;
            0 > h ? (h = -h, k = 180, n = -1) : (k = 0, n = 1);
            0 > i && (i = -i, n = -n);
            0 > j ? (j = -j, l = 180) : l = 0;
            var o = b.x,
                q, p, s, r = a.get_a(),
                t = a.get_b(),
                u = a.get_c(),
                v = a.get_d(),
                x = 1.0E-4 >= Math.abs(h - i);
            x ? (q = b.y, p = r * o + t * q + a.get_worldX(), s = u * o + v * q + a.get_worldY()) : (q = 0, p = r *
                o + a.get_worldX(), s = u * o + a.get_worldY());
            var w = a.get_parent(),
                r = w.get_a(),
                t = w.get_b(),
                u = w.get_c(),
                v = w.get_d(),
                z = 1 / (r * v - t * u),
                c = c - w.get_worldX(),
                e = e - w.get_worldY(),
                A = (c * v - e * t) * z - g,
                y = (e * r - c * u) * z - f,
                c = p - w.get_worldX(),
                e = s - w.get_worldY(),
                t = (c * v - e * t) * z - g,
                r = (e * r - c * u) * z - f,
                z = Math.sqrt(t * t + r * r),
                t = b.get_data().length * j,
                e = c = 0;
            s = !1;
            if (x) t *= h, r = (A * A + y * y - z * z - t * t) / (2 * z * t), -1 > r ? r = -1 : 1 < r && (r = 1), e = Math.acos(r) * m, r = z + t * r, t *= Math.sin(e), c = Math.atan2(y * r - A * t, A * r + y * t);
            else if (r = h * t, t *= i, j = r * r, p = t * t, x = A * A + y * y, A = Math.atan2(y,
                    A), u = p * z * z + j * x - j * p, y = -2 * p * z, w = p - j, v = y * y - 4 * w * u, 0 <= v && (v = Math.sqrt(v), 0 > y && (v = -v), v = -(y + v) / 2, y = v / w, v = u / v, v = Math.abs(y) < Math.abs(v) ? y : v, v * v <= x && (e = Math.sqrt(x - v * v) * m, c = A - Math.atan2(e, v), e = Math.atan2(e / i, (v - z) / h), s = !0)), !s) {
                var h = 0,
                    u = Math.POSITIVE_INFINITY,
                    B = w = i = s = y = 0,
                    C = 0,
                    c = z + r,
                    v = c * c;
                v > w && (i = 0, w = v, B = c);
                c = z - r;
                v = c * c;
                v < u && (h = Math.PI, u = v, y = c);
                j = Math.acos(-r * z / (j - p));
                c = r * Math.cos(j) + z;
                e = t * Math.sin(j);
                v = c * c + e * e;
                v < u && (h = j, u = v, y = c, s = e);
                v > w && (i = j, w = v, B = c, C = e);
                x <= (u + w) / 2 ? (c = A - Math.atan2(s * m, y), e = h * m) : (c = A - Math.atan2(C *
                    m, B), e = i * m)
            }
            m = Math.atan2(q, o) * n;
            r = a.rotation;
            c = (c - m) * qb.radDeg + k - r;
            180 < c ? c -= 360 : -180 > c && (c += 360);
            a.updateWorldTransformWith(g, f, r + c * d, a.scaleX, a.scaleY, 0, 0);
            r = b.rotation;
            e = ((e + m) * qb.radDeg - b.shearX) * n + l - r;
            180 < e ? e -= 360 : -180 > e && (e += 360);
            b.updateWorldTransformWith(o, q, r + e * d, b.scaleX, b.scaleY, b.shearX, b.shearY)
        }
    };
    Wb.prototype = {
        dispose: function() { this._data.dispose();
            this.target = this.bones = this._data = null },
        update: function() {
            switch (this.bones.length) {
                case 1:
                    Wb.apply1(this.bones[0], this.target.get_worldX(),
                        this.target.get_worldY(), this.mix);
                    break;
                case 2:
                    Wb.apply2(this.bones[0], this.bones[1], this.target.get_worldX(), this.target.get_worldY(), this.bendDirection, this.mix)
            }
        },
        get_data: function() { return this._data },
        __class__: Wb,
        __properties__: { get_data: "get_data" }
    };
    var qf = function(a) { this.bendDirection = this.mix = 1;
        this.bones = []; if (null == a) throw new P("name cannot be null.");
        this._name = a };
    j["com.workinman.display.spine.IkConstraintData"] = qf;
    qf.__name__ = ["com", "workinman", "display", "spine", "IkConstraintData"];
    qf.prototype = { dispose: function() { this.target = this.bones = null }, get_name: function() { return this._name }, __class__: qf, __properties__: { get_name: "get_name" } };
    var qb = function() {};
    j["com.workinman.display.spine.MathUtils"] = qb;
    qb.__name__ = ["com", "workinman", "display", "spine", "MathUtils"];
    var Hc = function() { this.vertices = [] };
    j["com.workinman.display.spine.Polygon"] = Hc;
    Hc.__name__ = ["com", "workinman", "display", "spine", "Polygon"];
    Hc.prototype = {
        dispose: function() { this.vertices = null },
        containsPoint: function(a, b) {
            for (var c =
                    this.vertices.length, e = c - 2, m = !1, d = 0; d < c;) { var g = this.vertices[d + 1],
                    f = this.vertices[e + 1]; if (g < b && f >= b || f < b && g >= b) { var h = this.vertices[d];
                    h + (b - g) / (f - g) * (this.vertices[e] - h) < a && (m = !m) } e = d;
                d += 2 }
            return m
        },
        __class__: Hc
    };
    var sf = function(a) {
        this.x = this.y = 0;
        this.flipX = this.flipY = !1;
        this.time = 0;
        this.r = this.g = this.b = this.a = 1;
        this._updateCache = [];
        if (null == a) throw new P("data cannot be null.");
        this._data = a;
        this.bones = [];
        for (var b = 0, c = a.bones; b < c.length;) {
            var e = c[b];
            ++b;
            var m;
            m = null == e.get_parent() ? null : this.bones[a.bones.indexOf(e.get_parent())];
            this.bones[this.bones.length] = new gc(e, this, m)
        }
        this.slots = [];
        this.drawOrder = [];
        b = 0;
        for (c = a.slots; b < c.length;) e = c[b], ++b, m = this.bones[a.bones.indexOf(e.get_boneData())], e = new rf(e, m), this.slots[this.slots.length] = e, this.drawOrder[this.drawOrder.length] = e;
        this.ikConstraints = [];
        b = 0;
        for (c = a.ikConstraints; b < c.length;) e = c[b], ++b, this.ikConstraints[this.ikConstraints.length] = new Wb(e, this);
        this.transformConstraints = [];
        b = 0;
        for (a = a.transformConstraints; b < a.length;) c = a[b], ++b, this.transformConstraints[this.transformConstraints.length] =
            new Td(c, this);
        this.updateCache()
    };
    j["com.workinman.display.spine.Skeleton"] = sf;
    sf.__name__ = ["com", "workinman", "display", "spine", "Skeleton"];
    sf.prototype = {
        dispose: function() {
            this._data.dispose();
            this._data = null;
            for (var a = 0, b = this.bones; a < b.length;) { var c = b[a];++a;
                c.dispose() } this.bones = null;
            a = 0;
            for (b = this.slots; a < b.length;) c = b[a], ++a, c.dispose();
            this.drawOrder = this.slots = null;
            a = 0;
            for (b = this.ikConstraints; a < b.length;) c = b[a], ++a, c.dispose();
            this.ikConstraints = null;
            a = 0;
            for (b = this.transformConstraints; a <
                b.length;) c = b[a], ++a, c.dispose();
            this._updateCache = this.transformConstraints = null;
            null != this.get_skin() && this.get_skin().dispose();
            this.set_skin(null)
        },
        updateCache: function() {
            for (var a = this._updateCache, b = this.ikConstraints, c = this.transformConstraints, e = 0, m = this.bones.length + b.length, d = 0; d < m;) d++, a.push(null);
            m = 0;
            for (d = this.bones; m < d.length;) { var g = d[m];++m;
                a[e++] = g; for (var f = 0; f < b.length;) { var h = b[f];++f; if (g == h.bones[h.bones.length - 1]) { a[e++] = h; break } } }
            for (b = 0; b < c.length;) {
                e = c[b];
                ++b;
                for (m = a.length -
                    1; 0 <= m;) { d = a[m]; if (d == e.bone || d == e.target) { a.splice(m + 1, 0, e); break } m-- }
            }
        },
        updateWorldTransform: function() { for (var a = 0, b = this._updateCache; a < b.length;) { var c = b[a];++a;
                c.update() } },
        setToSetupPose: function() { this.setBonesToSetupPose();
            this.setSlotsToSetupPose() },
        setBonesToSetupPose: function() {
            for (var a = 0, b = this.bones; a < b.length;) { var c = b[a];++a;
                c.setToSetupPose() } a = 0;
            for (b = this.ikConstraints; a < b.length;) c = b[a], ++a, c.bendDirection = c.get_data().bendDirection, c.mix = c.get_data().mix;
            a = 0;
            for (b = this.transformConstraints; a <
                b.length;) c = b[a], ++a, c.translateMix = c.get_data().translateMix, c.rotateMix = c.get_data().rotateMix, c.scaleMix = c.get_data().scaleMix, c.shearMix = c.get_data().shearMix
        },
        setSlotsToSetupPose: function() { for (var a = 0, b = 0, c = this.slots; b < c.length;) { var e = c[b];++b;
                this.drawOrder[a++] = e;
                e.setToSetupPose() } },
        get_data: function() { return this._data },
        findBone: function(a) { if (null == a) throw new P("boneName cannot be null."); for (var b = 0, c = this.bones; b < c.length;) { var e = c[b];++b; if (e.get_data().get_name() == a) return e } return null },
        findSlot: function(a) { if (null == a) throw new P("slotName cannot be null."); for (var b = 0, c = this.slots; b < c.length;) { var e = c[b];++b; if (e.get_data().get_name() == a) return e } return null },
        get_skin: function() { return this._skin },
        set_skinName: function(a) { var b = this.get_data().findSkin(a); if (null == b) throw new P("Skin not found: " + a); if (null != this._skin && a == this._skin.get_name()) return this._skin.get_name();
            this.set_skin(b); return null == this._skin ? null : this._skin.get_name() },
        set_skin: function(a) {
            if (null != a)
                if (null !=
                    this.get_skin()) a.attachAll(this, this.get_skin());
                else
                    for (var b = 0, c = 0, e = this.slots; c < e.length;) { var m = e[c];++c; var d = m.get_data().attachmentName; "" != d && (d = a.getAttachment(b, d), null != d && m.set_attachment(d));
                        b++ }
            return this._skin = a
        },
        getAttachmentForSlotIndex: function(a, b) {
            if (null == b) throw new P("attachmentName cannot be null.");
            if (null != this.get_skin()) { var c = this.get_skin().getAttachment(a, b); if (null != c) return c }
            return null != this.get_data().defaultSkin ? this.get_data().defaultSkin.getAttachment(a,
                b) : null
        },
        setAttachment: function(a, b) { if (null == a) throw new P("slotName cannot be null."); for (var c = 0, e = 0, m = this.slots; e < m.length;) { var d = m[e];++e; if (d.get_data().get_name() == a) { e = null; if (null != b && (e = this.getAttachmentForSlotIndex(c, b), null == e)) throw new P("Attachment not found: " + b + ", for slot: " + a);
                    d.set_attachment(e); return } c++ } throw new P("Slot not found: " + a); },
        __class__: sf,
        __properties__: { set_skin: "set_skin", set_skinName: "set_skinName", get_skin: "get_skin", get_data: "get_data" }
    };
    var tf = function() {
        this.polygonPool = [];
        this.boundingBoxes = [];
        this.polygons = []
    };
    j["com.workinman.display.spine.SkeletonBounds"] = tf;
    tf.__name__ = ["com", "workinman", "display", "spine", "SkeletonBounds"];
    tf.prototype = {
        dispose: function() { for (var a = 0, b = this.boundingBoxes; a < b.length;) { var c = b[a];++a;
                null != c && c.dispose() } this.boundingBoxes = null;
            a = 0; for (b = this.polygons; a < b.length;) c = b[a], ++a, null != c && c.dispose();
            this.polygons = null;
            a = 0; for (b = this.polygonPool; a < b.length;) c = b[a], ++a, null != c && c.dispose();
            this.polygonPool = null },
        update: function(a, b) {
            var c =
                a.slots,
                e = c.length,
                m = a.x,
                d = a.y;
            this.boundingBoxes = [];
            for (var g = 0, f = this.polygons; g < f.length;) { var h = f[g];++g;
                this.polygonPool[this.polygonPool.length] = h } this.polygons = [];
            for (g = 0; g < e;) {
                var f = g++,
                    h = c[f],
                    j = null;
                B.is(h.get_attachment(), hc) && (j = C.__cast(h.get_attachment(), hc));
                if (null != j) {
                    this.boundingBoxes[this.boundingBoxes.length] = j;
                    var i = this.polygonPool.length;
                    0 < i ? (f = this.polygonPool[i - 1], this.polygonPool.splice(i - 1, 1)) : f = new Hc;
                    this.polygons[this.polygons.length] = f;
                    j.computeWorldVertices(m, d, h.get_bone(),
                        f.vertices)
                }
            }
            b && this.aabbCompute()
        },
        aabbCompute: function() { for (var a = 2147483647, b = 2147483647, c = -2147483648, e = -2147483648, m = 0, d = this.polygons.length; m < d;)
                for (var g = this.polygons[m++].vertices, f = 0, h = g.length; f < h;) var j = g[f],
                    i = g[f + 1],
                    a = Math.min(a, j),
                    b = Math.min(b, i),
                    c = Math.max(c, j),
                    e = Math.max(e, i),
                    f = f + 2;
            this.minX = a;
            this.minY = b;
            this.maxX = c;
            this.maxY = e },
        aabbContainsPoint: function(a, b) { return a >= this.minX && a <= this.maxX && b >= this.minY && b <= this.maxY },
        containsPoint: function(a, b) {
            for (var c = 0, e = this.polygons.length; c <
                e;) { var m = c++; if (this.polygons[m].containsPoint(a, b)) return this.boundingBoxes[m] }
            return null
        },
        __class__: tf
    };
    var Ud = function() { this.transformConstraints = [];
        this.ikConstraints = [];
        this.animations = [];
        this.events = [];
        this.skins = [];
        this.slots = [];
        this.bones = [] };
    j["com.workinman.display.spine.SkeletonData"] = Ud;
    Ud.__name__ = ["com", "workinman", "display", "spine", "SkeletonData"];
    Ud.prototype = {
        dispose: function() { this.ikConstraints = this.animations = this.events = this.defaultSkin = this.skins = this.slots = this.bones = null },
        findBone: function(a) { if (null == a) throw new P("boneName cannot be null."); for (var b = 0, c = this.bones.length; b < c;) { var e = this.bones[b++]; if (e.get_name() == a) return e } return null },
        findBoneIndex: function(a) { if (null == a) throw new P("boneName cannot be null."); for (var b = 0, c = this.bones.length; b < c;) { var e = b++; if (this.bones[e].get_name() == a) return e } return -1 },
        findSlotIndex: function(a) {
            if (null == a) throw new P("slotName cannot be null.");
            for (var b = 0, c = this.slots.length; b < c;) {
                var e = b++;
                if (this.slots[e].get_name() ==
                    a) return e
            }
            return -1
        },
        findSkin: function(a) { if (null == a) throw new P("skinName cannot be null."); for (var b = 0, c = this.skins; b < c.length;) { var e = c[b];++b; if (e.get_name() == a) return e } return null },
        findEvent: function(a) { if (null == a) throw new P("eventName cannot be null."); for (var b = 0, c = this.events; b < c.length;) { var e = c[b];++b; if (e.get_name() == a) return e } return null },
        findAnimation: function(a) {
            if (null == a) throw new P("animationName cannot be null.");
            for (var b = 0, c = this.animations; b < c.length;) {
                var e = c[b];
                ++b;
                if (e.get_name() ==
                    a) return e
            }
            return null
        },
        findIkConstraint: function(a) { if (null == a) throw new P("constraintName cannot be null."); for (var b = 0, c = this.ikConstraints; b < c.length;) { var e = c[b];++b; if (e.get_name() == a) return e } return null },
        __class__: Ud
    };
    var aa = function(a) { this.scale = 1;
        this.attachmentLoader = a };
    j["com.workinman.display.spine.SkeletonJson"] = aa;
    aa.__name__ = ["com", "workinman", "display", "spine", "SkeletonJson"];
    aa.readCurve = function(a, b, c) {
        c = t.field(c, "curve");
        null != c && ("stepped" == c ? a.setStepped(b) : c instanceof Array &&
            null == c.__enum__ && a.setCurve(b, c[0], c[1], c[2], c[3]))
    };
    aa.toColor = function(a, b) { if (8 != a.length) throw new P("Color hexidecimal length must be 8, recieved: " + a); return B.parseInt("0x" + a.substring(2 * b, 2 * b + 2)) / 255 };
    aa.getFloatArray = function(a, b, c) { var a = t.field(a, b),
            b = [],
            e = a.length; if (1 == c)
            for (c = 0; c < e;) { var m = c++;
                b[m] = a[m] } else
                for (m = 0; m < e;) { var d = m++;
                    b[d] = a[d] * c }
        return b };
    aa.getIntArray = function(a, b) { for (var c = t.field(a, b), e = [], m = 0, d = c.length; m < d;) { var g = m++;
            e[g] = c[g] } return e };
    aa.getUIntArray = function(a,
        b) { for (var c = t.field(a, b), e = [], m = 0, d = c.length; m < d;) { var g = m++;
            e[g] = c[g] } return e };
    aa.prototype = {
        readSkeletonData: function(a, b) {
            if (null == a) throw new P("object cannot be null.");
            var c;
            c = JSON.parse(a);
            var e = new Ud;
            e.name = b;
            if (Object.prototype.hasOwnProperty.call(c, "skeleton")) {
                var m;
                m = t.field(c, "skeleton");
                var d = t.field(m, "hash");
                e.hash = null == d ? null : B.string(d);
                d = t.field(m, "spine");
                e.version = null == d ? null : B.string(d);
                d = t.field(m, "width");
                e.width = null == d ? 0 : C.__cast(d, X);
                m = t.field(m, "height");
                e.height =
                    null == m ? 0 : C.__cast(m, X)
            }
            m = 0;
            for (d = t.field(c, "bones"); m < d.length;) {
                var g = d[m];
                ++m;
                var f = null,
                    h;
                h = t.field(g, "parent");
                h = null == h ? null : B.string(h);
                if (null != h && (f = e.findBone(h), null == f)) throw "Parent bone not found: " + h;
                f = new nf(function() { var a = t.field(g, "name"); return null == a ? null : B.string(a) }(this), f);
                f.length = function() { var a = t.field(g, "length"); return null == a ? 0 : C.__cast(a, X) }(this) * this.scale;
                f.x = function() { var a = t.field(g, "x"); return null == a ? 0 : C.__cast(a, X) }(this) * this.scale;
                f.y = function() {
                    var a =
                        t.field(g, "y");
                    return null == a ? 0 : C.__cast(a, X)
                }(this) * this.scale;
                h = t.field(g, "rotation");
                f.rotation = null == h ? 0 : C.__cast(h, X);
                h = t.field(g, "scaleX");
                f.scaleX = null == h ? 1 : C.__cast(h, X);
                h = t.field(g, "scaleY");
                f.scaleY = null == h ? 1 : C.__cast(h, X);
                h = t.field(g, "shearX");
                f.shearX = null == h ? 0 : C.__cast(h, X);
                h = t.field(g, "shearY");
                f.shearY = null == h ? 0 : C.__cast(h, X);
                h = t.field(g, "inheritScale");
                f.inheritScale = null == h ? !0 : C.__cast(h, Vd);
                h = t.field(g, "inheritRotation");
                f.inheritRotation = null == h ? !0 : C.__cast(h, Vd);
                e.bones.push(f)
            }
            if (Object.prototype.hasOwnProperty.call(c,
                    "ik")) {
                m = 0;
                for (d = t.field(c, "ik"); m < d.length;) {
                    var j = d[m];
                    ++m;
                    f = new qf(function() { var a = t.field(j, "name"); return null == a ? null : B.string(a) }(this));
                    h = 0;
                    for (var i = t.field(j, "bones"); h < i.length;) { var k = i[h];++h; var l = e.findBone(k); if (null == l) throw "IK bone not found: " + k;
                        f.bones.push(l) } f.target = e.findBone(function() { var a = t.field(j, "target"); return null == a ? null : B.string(a) }(this));
                    if (null == f.target) throw "Target bone not found: " + function() { var a = t.field(j, "target"); return null == a ? null : B.string(a) }(this);
                    f.bendDirection = function() { var a = t.field(j, "bendPositive"); return null == a ? !0 : C.__cast(a, Vd) }(this) ? 1 : -1;
                    h = t.field(j, "mix");
                    f.mix = null == h ? 1 : C.__cast(h, X);
                    e.ikConstraints.push(f)
                }
            }
            m = t.field(c, "transform");
            if (null != m) {
                m = 0;
                for (d = t.field(c, "transform"); m < d.length;) {
                    var n = d[m];
                    ++m;
                    f = new uf(function() { var a = t.field(n, "name"); return null == a ? null : B.string(a) }(this));
                    h = t.field(n, "bone");
                    h = null == h ? null : B.string(h);
                    f.bone = e.findBone(h);
                    if (null == f.bone) throw new P("Bone not found: " + h);
                    h = t.field(n, "target");
                    h =
                        null == h ? null : B.string(h);
                    f.target = e.findBone(h);
                    if (null == f.target) throw new P("Target bone not found: " + h);
                    h = t.field(n, "rotation");
                    f.offsetRotation = null == h ? 0 : C.__cast(h, X);
                    f.offsetX = function() { var a = t.field(n, "x"); return null == a ? 0 : C.__cast(a, X) }(this) * this.scale;
                    f.offsetY = function() { var a = t.field(n, "y"); return null == a ? 0 : C.__cast(a, X) }(this) * this.scale;
                    f.offsetScaleX = function() { var a = t.field(n, "scaleX"); return null == a ? 0 : C.__cast(a, X) }(this) * this.scale;
                    f.offsetScaleY = function() {
                        var a = t.field(n, "scaleY");
                        return null == a ? 0 : C.__cast(a, X)
                    }(this) * this.scale;
                    f.offsetShearY = function() { var a = t.field(n, "shearY"); return null == a ? 0 : C.__cast(a, X) }(this) * this.scale;
                    h = t.field(n, "rotateMix");
                    f.rotateMix = null == h ? 1 : C.__cast(h, X);
                    h = t.field(n, "translateMix");
                    f.translateMix = null == h ? 1 : C.__cast(h, X);
                    h = t.field(n, "scaleMix");
                    f.scaleMix = null == h ? 1 : C.__cast(h, X);
                    h = t.field(n, "shearMix");
                    f.shearMix = null == h ? 1 : C.__cast(h, X);
                    e.transformConstraints.push(f)
                }
            }
            m = null;
            m = 0;
            for (d = t.field(c, "slots"); m < d.length;) {
                var o = d[m];
                ++m;
                f = t.field(o,
                    "bone");
                f = null == f ? null : B.string(f);
                h = e.findBone(f);
                if (null == h) throw "Slot bone not found: " + f;
                f = new vf(function() { var a = t.field(o, "name"); return null == a ? null : B.string(a) }(this), h);
                h = t.field(o, "color");
                h = null == h ? null : B.string(h);
                null != h && (f.r = aa.toColor(h, 0), f.g = aa.toColor(h, 1), f.b = aa.toColor(h, 2), f.a = aa.toColor(h, 3));
                h = t.field(o, "attachment");
                f.attachmentName = null == h ? null : B.string(h);
                h = t.field(o, "blend");
                f.blendMode = null == h ? "normal" : B.string(h);
                e.slots.push(f)
            }
            m = t.field(c, "skins");
            d = 0;
            for (f = t.fields(m); d <
                f.length;) { i = f[d];++d;
                h = t.field(m, i);
                i = new wf(i);
                k = 0; for (l = t.fields(h); k < l.length;) { var p = l[k];++k; for (var q = e.findSlotIndex(p), p = t.field(h, p), r = 0, s = t.fields(p); r < s.length;) { var u = s[r];++r; var v = this.readAttachment(i, u, t.field(p, u));
                        null != v && i.addAttachment(q, u, v) } } e.skins.push(i); "default" == i.get_name() && (e.defaultSkin = i) } m = t.field(c, "events");
            if (null != m) {
                d = 0;
                for (f = t.fields(m); d < f.length;) i = f[d], ++d, h = t.field(m, i), i = new pf(i), k = t.field(h, "int"), i.intValue = null == k ? 0 : C.__cast(k, $c), k = t.field(h, "float"),
                    i.floatValue = null == k ? 0 : C.__cast(k, X), h = t.field(h, "string"), i.stringValue = null == h ? null : B.string(h), e.events.push(i)
            }
            c = t.field(c, "animations");
            m = 0;
            for (d = t.fields(c); m < d.length;) f = d[m], ++m, this.readAnimation(f, t.field(c, f), e);
            return e
        },
        readAttachment: function(a, b, c) {
            var e = t.field(c, "name");
            null != e && (b = B.string(e));
            var m, e = t.field(c, "type");
            m = null == e ? "region" : B.string(e);
            "skinnedmesh" == m && (m = "weightedmesh");
            new xf(0, m);
            var d, e = t.field(c, "path");
            d = null == e ? b : B.string(e);
            e = this.scale;
            switch (m) {
                case "region":
                    a =
                        this.attachmentLoader.newRegionAttachment(a, b, d);
                    if (null == a) break;
                    a.path = d;
                    a.x = function() { var a = t.field(c, "x"); return null == a ? 0 : C.__cast(a, X) }(this) * e;
                    a.y = function() { var a = t.field(c, "y"); return null == a ? 0 : C.__cast(a, X) }(this) * e;
                    b = t.field(c, "scaleX");
                    a.scaleX = null == b ? 1 : C.__cast(b, X);
                    b = t.field(c, "scaleY");
                    a.scaleY = null == b ? 1 : C.__cast(b, X);
                    b = t.field(c, "rotation");
                    a.rotation = null == b ? 0 : C.__cast(b, X);
                    a.width = function() { var a = t.field(c, "width"); return null == a ? 0 : C.__cast(a, X) }(this) * e;
                    a.height = function() {
                        var a =
                            t.field(c, "height");
                        return null == a ? 0 : C.__cast(a, X)
                    }(this) * e;
                    e = t.field(c, "color");
                    d = null == e ? null : B.string(e);
                    null != d && "" != d && (a.r = aa.toColor(d, 0), a.g = aa.toColor(d, 1), a.b = aa.toColor(d, 2), a.a = aa.toColor(d, 3));
                    a.updateOffset();
                    return a;
                case "mesh":
                    a = this.attachmentLoader.newMeshAttachment(a, b, d);
                    if (null == a) break;
                    a.path = d;
                    a.vertices = aa.getFloatArray(c, "vertices", e);
                    a.triangles = aa.getUIntArray(c, "triangles");
                    a.regionUVs = aa.getFloatArray(c, "uvs", 1);
                    a.updateUVs();
                    b = t.field(c, "color");
                    d = null == b ? null : B.string(b);
                    null != d && "" != d && (a.r = aa.toColor(d, 0), a.g = aa.toColor(d, 1), a.b = aa.toColor(d, 2), a.a = aa.toColor(d, 3));
                    a.hullLength = 2 * function() { var a = t.field(c, "hull"); return null == a ? 0 : C.__cast(a, $c) }(this);
                    Object.prototype.hasOwnProperty.call(c, "edges") && (a.edges = aa.getIntArray(c, "edges"));
                    a.width = function() { var a = t.field(c, "width"); return null == a ? 0 : C.__cast(a, X) }(this) * e;
                    a.height = function() { var a = t.field(c, "height"); return null == a ? 0 : C.__cast(a, X) }(this) * e;
                    return a;
                case "weightedmesh":
                    b = this.attachmentLoader.newWeightedMeshAttachment(a,
                        b, d);
                    if (null == b) break;
                    b.path = d;
                    d = aa.getFloatArray(c, "uvs", 1);
                    a = aa.getFloatArray(c, "vertices", 1);
                    m = [];
                    for (var f = [], g = 0, h = a.length; g < h;) { var i = Math.floor(a[g++]);
                        f[f.length] = i; for (i = g + 4 * i; g < i;) f[f.length] = Math.floor(a[g]), m[m.length] = a[g + 1] * e, m[m.length] = a[g + 2] * e, m[m.length] = a[g + 3], g += 4 } b.bones = f;
                    b.weights = m;
                    b.triangles = aa.getUIntArray(c, "triangles");
                    b.regionUVs = d;
                    b.updateUVs();
                    a = t.field(c, "color");
                    d = null == a ? null : B.string(a);
                    null != d && "" != d && (b.r = aa.toColor(d, 0), b.g = aa.toColor(d, 1), b.b = aa.toColor(d,
                        2), b.a = aa.toColor(d, 3));
                    b.hullLength = 2 * function() { var a = t.field(c, "hull"); return null == a ? 0 : C.__cast(a, $c) }(this);
                    Object.prototype.hasOwnProperty.call(c, "edges") && (b.edges = aa.getIntArray(c, "edges"));
                    b.width = function() { var a = t.field(c, "width"); return null == a ? 0 : C.__cast(a, X) }(this) * e;
                    b.height = function() { var a = t.field(c, "height"); return null == a ? 0 : C.__cast(a, X) }(this) * e;
                    return b;
                case "boundingbox":
                    b = this.attachmentLoader.newBoundingBoxAttachment(a, b);
                    a = b.vertices;
                    d = 0;
                    for (m = t.field(c, "vertices"); d < m.length;) f =
                        m[d], ++d, a[a.length] = f * e;
                    return b
            }
            return null
        },
        readAnimation: function(a, b, c) {
            var e = [],
                m = 0,
                d, f, g, h, i;
            i = t.field(b, "slots");
            for (var j = 0, k = t.fields(i); j < k.length;) {
                var l = k[j];
                ++j;
                d = t.field(i, l);
                f = c.findSlotIndex(l);
                for (var n = 0, o = t.fields(d); n < o.length;) {
                    var p = o[n];
                    ++n;
                    g = t.field(d, p);
                    if ("color" == p) {
                        var q = new Wd(g.length);
                        q.slotIndex = f;
                        for (var r = h = 0; r < g.length;) {
                            var s = g[r];
                            ++r;
                            var u, v = t.field(s, "color");
                            u = null == v ? null : B.string(v);
                            var w = aa.toColor(u, 0),
                                x = aa.toColor(u, 1),
                                y = aa.toColor(u, 2),
                                z = aa.toColor(u,
                                    3);
                            q.setFrame(h, function() { var a = t.field(s, "time"); return null == a ? 0 : C.__cast(a, X) }(this), w, x, y, z);
                            aa.readCurve(q, h, s);
                            h++
                        }
                        e[e.length] = q;
                        m = Math.max(m, q.frames[5 * q.get_frameCount() - 5])
                    } else if ("attachment" == p) {
                        var A = new Xd(g.length);
                        A.slotIndex = f;
                        for (var D = h = 0; D < g.length;) { var E = g[D];++D;
                            A.setFrame(h++, function() { var a = t.field(E, "time"); return null == a ? 0 : C.__cast(a, X) }(this), function() { var a = t.field(E, "name"); return null == a ? null : B.string(a) }(this)) } e[e.length] = A;
                        m = Math.max(m, A.frames[A.get_frameCount() -
                            1])
                    } else throw new P("Invalid timeline type for a slot: " + p + " (" + l + ")");
                }
            }
            var F;
            F = t.field(b, "bones");
            for (var G = 0, H = t.fields(F); G < H.length;) {
                var I = H[G];
                ++G;
                var J = c.findBoneIndex(I);
                if (-1 == J) throw new P("Bone not found: " + I);
                var K;
                K = t.field(F, I);
                for (var M = 0, O = t.fields(K); M < O.length;) {
                    var L = O[M];
                    ++M;
                    g = t.field(K, L);
                    if ("rotate" == L) {
                        var N = new Yd(g.length);
                        N.boneIndex = J;
                        for (var Q = h = 0; Q < g.length;) {
                            var S = g[Q];
                            ++Q;
                            N.setFrame(h, function() { var a = t.field(S, "time"); return null == a ? 0 : C.__cast(a, X) }(this), function() {
                                var a =
                                    t.field(S, "angle");
                                return null == a ? 0 : C.__cast(a, X)
                            }(this));
                            aa.readCurve(N, h, S);
                            h++
                        }
                        e[e.length] = N;
                        m = Math.max(m, N.frames[2 * N.get_frameCount() - 2])
                    } else if ("translate" == L || "scale" == L || "shear" == L) {
                        var R, T = 1;
                        "scale" == L ? R = new Zd(g.length) : "shear" == L ? R = new $d(g.length) : (R = new Hb(g.length), T = this.scale);
                        R.boneIndex = J;
                        for (var V = h = 0; V < g.length;) {
                            var U = g[V];
                            ++V;
                            var Y;
                            Y = function() { var a = t.field(U, "x"); return null == a ? 0 : C.__cast(a, X) }(this) * T;
                            var Z;
                            Z = function() { var a = t.field(U, "y"); return null == a ? 0 : C.__cast(a, X) }(this) *
                                T;
                            R.setFrame(h, function() { var a = t.field(U, "time"); return null == a ? 0 : C.__cast(a, X) }(this), Y, Z);
                            aa.readCurve(R, h, U);
                            h++
                        }
                        e[e.length] = R;
                        m = Math.max(m, R.frames[3 * R.get_frameCount() - 3])
                    } else throw new P("Invalid timeline type for a bone: " + L + " (" + I + ")");
                }
            }
            var W;
            W = t.field(b, "ik");
            for (var $ = 0, ca = t.fields(W); $ < ca.length;) {
                var da = ca[$];
                ++$;
                var ea = c.findIkConstraint(da);
                g = t.field(W, da);
                var ba = new ae(g.length);
                ba.ikConstraintIndex = c.ikConstraints.indexOf(ea);
                for (var ga = h = 0; ga < g.length;) {
                    var fa = g[ga];
                    ++ga;
                    var ha,
                        ia = t.field(fa, "mix");
                    ha = null == ia ? 1 : C.__cast(ia, X);
                    var la;
                    la = function() { var a = t.field(fa, "bendPositive"); return null == a ? !0 : C.__cast(a, Vd) }(this) ? 1 : -1;
                    ba.setFrame(h, function() { var a = t.field(fa, "time"); return null == a ? 0 : C.__cast(a, X) }(this), ha, la);
                    aa.readCurve(ba, h, fa);
                    h++
                }
                e[e.length] = ba;
                m = Math.max(m, ba.frames[3 * ba.get_frameCount() - 3])
            }
            var ja;
            ja = t.field(b, "ffd");
            for (var ka = 0, ma = t.fields(ja); ka < ma.length;) {
                var na = ma[ka];
                ++ka;
                var qa = c.findSkin(na);
                d = t.field(ja, na);
                for (var oa = 0, ra = t.fields(d); oa < ra.length;) {
                    var ta =
                        ra[oa];
                    ++oa;
                    f = c.findSlotIndex(ta);
                    var ua;
                    ua = t.field(d, ta);
                    for (var wa = 0, za = t.fields(ua); wa < za.length;) {
                        var xa = za[wa];
                        ++wa;
                        g = t.field(ua, xa);
                        var sa = new be(g.length),
                            pa = qa.getAttachment(f, xa);
                        if (null == pa) throw new P("FFD attachment not found: " + xa);
                        sa.slotIndex = f;
                        sa.attachment = pa;
                        var Ba;
                        Ba = C.__instanceof(pa, rb) ? C.__cast(pa, rb).vertices.length : Math.floor(2 * (C.__cast(pa, ic).weights.length / 3));
                        for (var Ca = h = 0; Ca < g.length;) {
                            var ya = g[Ca];
                            ++Ca;
                            var va;
                            if (Object.prototype.hasOwnProperty.call(ya, "vertices")) {
                                var Aa;
                                Aa = t.field(ya, "vertices");
                                va = Ha.allocFloat(Ba);
                                var Ea, Fa = t.field(ya, "offset");
                                Ea = null == Fa ? 0 : C.__cast(Fa, $c);
                                var Ia = Aa.length;
                                if (1 == this.scale)
                                    for (var Ja = 0; Ja < Ia;) { var Ma = Ja++;
                                        va[Ma + Ea] = Aa[Ma] } else
                                        for (var Oa = 0; Oa < Ia;) { var Pa = Oa++;
                                            va[Pa + Ea] = Aa[Pa] * this.scale }
                                if (C.__instanceof(pa, rb))
                                    for (var Va = C.__cast(pa, rb).vertices, Sa = 0; Sa < Ba;) { var Na = Sa++;
                                        va[Na] += Va[Na] }
                            } else va = C.__instanceof(pa, rb) ? C.__cast(pa, rb).vertices : [];
                            sa.setFrame(h, function() { var a = t.field(ya, "time"); return null == a ? 0 : C.__cast(a, X) }(this),
                                va);
                            aa.readCurve(sa, h, ya);
                            h++
                        }
                        e[e.length] = sa;
                        m = Math.max(m, sa.frames[sa.get_frameCount() - 1])
                    }
                }
            }
            var Da = t.field(b, "drawOrder");
            null == Da && (Da = t.field(b, "draworder"));
            if (null != Da && 0 < Da.length) {
                for (var La = new ce(Da.length), Ta = c.slots.length, Ua = h = 0; Ua < Da.length;) {
                    var Ya = Da[Ua];
                    ++Ua;
                    var Ga = null;
                    if (Object.prototype.hasOwnProperty.call(Ya, "offsets")) {
                        for (var Ga = [], $a = Ta - 1; 0 <= $a;) Ga[$a] = -1, $a--;
                        for (var gb = t.field(Ya, "offsets"), ab = [], Ka = 0, bb = 0, cb = 0; cb < gb.length;) {
                            var eb = gb[cb];
                            ++cb;
                            f = c.findSlotIndex(function() {
                                var a =
                                    t.field(eb, "slot");
                                return null == a ? null : B.string(a)
                            }(this));
                            if (-1 == f) throw new P("Slot not found: " + function() { var a = t.field(eb, "slot"); return null == a ? null : B.string(a) }(this));
                            for (; Ka != f;) ab[bb++] = Ka++;
                            Ga[Ka + function() { var a = t.field(eb, "offset"); return null == a ? 0 : C.__cast(a, $c) }(this)] = Ka++
                        }
                        for (; Ka < Ta;) ab[bb++] = Ka++;
                        for (var Xa = Ta - 1; 0 <= Xa;) - 1 == Ga[Xa] && (Ga[Xa] = ab[--bb]), Xa--
                    }
                    La.setFrame(h++, function() { var a = t.field(Ya, "time"); return null == a ? 0 : C.__cast(a, X) }(this), Ga)
                }
                e[e.length] = La;
                m = Math.max(m, La.frames[La.get_frameCount() -
                    1])
            }
            var Ra = t.field(b, "events");
            if (null != Ra && 0 < Ra.length) {
                for (var Za = new de(Ra.length), fb = h = 0; fb < Ra.length;) {
                    var Qa = Ra[fb];
                    ++fb;
                    var Wa = c.findEvent(function() { var a = t.field(Qa, "name"); return null == a ? null : B.string(a) }(this));
                    if (null == Wa) throw new P("Event not found: " + function() { var a = t.field(Qa, "name"); return null == a ? null : B.string(a) }(this));
                    var db = new of (function() { var a = t.field(Qa, "time"); return null == a ? 0 : C.__cast(a, X) }(this), Wa),
                        hb = t.field(Qa, "Int");
                    db.intValue = null == hb ? Wa.intValue : C.__cast(hb, $c);
                    var ib = t.field(Qa, "float");
                    db.floatValue = null == ib ? Wa.floatValue : C.__cast(ib, X);
                    var jb = t.field(Qa, "string");
                    db.stringValue = null == jb ? Wa.stringValue : B.string(jb);
                    Za.setFrame(h++, db)
                }
                e[e.length] = Za;
                m = Math.max(m, Za.frames[Math.floor(Za.get_frameCount() - 1)])
            }
            c.animations[c.animations.length] = new kb(a, e, m)
        },
        __class__: aa
    };
    var wf = function(a) { this._attachments = []; if (null == a) throw new P("name cannot be null.");
        this._name = a };
    j["com.workinman.display.spine.Skin"] = wf;
    wf.__name__ = ["com", "workinman", "display", "spine",
        "Skin"
    ];
    wf.prototype = {
        dispose: function() { this._attachments = null },
        addAttachment: function(a, b, c) { if (null == c) throw new P("attachment cannot be null.");
            null == this.get_attachments()[a] && (this.get_attachments()[a] = new G);
            this.get_attachments()[a].set(b, c);
            c },
        getAttachment: function(a, b) { if (a >= this.get_attachments().length) return null; var c = this.get_attachments()[a]; return null != c ? c.get(b) : null },
        get_attachments: function() { return this._attachments },
        get_name: function() { return this._name },
        attachAll: function(a,
            b) { for (var c = 0, e = 0, m = a.slots; e < m.length;) { var d = m[e];++e; var f = d.get_attachment(); if (null != f && c < b.get_attachments().length) { var g = b.get_attachments()[c]; if (null != g)
                        for (var h = g.keys(); h.hasNext();) { var i = h.next(),
                                j = g.get(i); if (f == j) { f = this.getAttachment(c, i);
                                null != f && d.set_attachment(f); break } } } c++ } },
        __class__: wf,
        __properties__: { get_name: "get_name", get_attachments: "get_attachments" }
    };
    var rf = function(a, b) {
        this.attachmentVertices = [];
        if (null == a) throw new P("data cannot be null.");
        if (null == b) throw new P("bone cannot be null.");
        this._data = a;
        this._bone = b;
        this.setToSetupPose()
    };
    j["com.workinman.display.spine.Slot"] = rf;
    rf.__name__ = ["com", "workinman", "display", "spine", "Slot"];
    rf.prototype = {
        dispose: function() { this._data.dispose();
            this.attachmentVertices = this._attachment = this._bone = this._data = null },
        get_data: function() { return this._data },
        get_bone: function() { return this._bone },
        get_skeleton: function() { return this._bone.get_skeleton() },
        get_attachment: function() { return this._attachment },
        set_attachment: function(a) {
            if (this._attachment ==
                a) return this._attachment;
            this._attachment = a;
            this._attachmentTime = this._bone.get_skeleton().time;
            this.attachmentVertices = [];
            return this._attachment
        },
        setToSetupPose: function() { var a = this._bone.get_skeleton().get_data().slots.indexOf(this.get_data());
            this.r = this._data.r;
            this.g = this._data.g;
            this.b = this._data.b;
            this.a = this._data.a;
            null == this._data.attachmentName ? this.set_attachment(null) : (this._attachment = null, this.set_attachment(this._bone.get_skeleton().getAttachmentForSlotIndex(a, this.get_data().attachmentName))) },
        __class__: rf,
        __properties__: { set_attachment: "set_attachment", get_attachment: "get_attachment", get_skeleton: "get_skeleton", get_bone: "get_bone", get_data: "get_data" }
    };
    var vf = function(a, b) { this.r = this.g = this.b = this.a = 1; if (null == a) throw new P("name cannot be null."); if (null == b) throw new P("boneData cannot be null.");
        this._name = a;
        this._boneData = b };
    j["com.workinman.display.spine.SlotData"] = vf;
    vf.__name__ = ["com", "workinman", "display", "spine", "SlotData"];
    vf.prototype = {
        dispose: function() { this._boneData = null },
        get_name: function() { return this._name },
        get_boneData: function() { return this._boneData },
        __class__: vf,
        __properties__: { get_boneData: "get_boneData", get_name: "get_name" }
    };
    var yb = function(a) {
        null != i.get_instance().get_assets().getFile(a.asset + ".atlas") && (a.library = a.asset, a.asset = null);
        x.call(this, a);
        var b = new Ud;
        if (null != a.library) var c = a.library,
            b = i.get_instance().get_assets().getAsset(c).path,
            b = b.substring(0, b.lastIndexOf("/") + 1),
            b = new yf(i.get_instance().get_assets().getFile(c + ".atlas").toString(), new ee(b,
                i.get_instance().get_assets().getAsset(c).pack.pack)),
            b = (new aa(new Mb(b))).readSkeletonData(i.get_instance().get_assets().getFile(c + ".json").toString(), c);
        c = new zf(b);
        this._state = new Af(c);
        this._renderer = new fe(b, a.debug);
        this._skeleton = this._renderer.skeleton;
        this._skeleton.updateWorldTransform();
        this._animations = new G;
        c = 0;
        for (b = b.animations; c < b.length;) { var e = b[c];++c;
            a.trace && null;
            this._animations.set(e.get_name(), e) } this._state.onStart.add(o(this, this._onAnimationStart));
        this._state.onComplete.add(o(this,
            this._onAnimationComplete));
        this._state.onEvent.add(o(this, this._onAnimationEvent));
        this._imageEntity.addChild((new ea).add(this._renderer));
        this._bounds = new tf;
        this._boundsRegion = new Bf(this._renderer)
    };
    j["com.workinman.display.spine.SpineElement"] = yb;
    yb.__name__ = ["com", "workinman", "display", "spine", "SpineElement"];
    yb.__super__ = x;
    yb.prototype = A(x.prototype, {
        dispose: function() {
            this._state.onStart.remove(o(this, this._onAnimationStart));
            this._state.onComplete.remove(o(this, this._onAnimationComplete));
            this._state.onEvent.remove(o(this, this._onAnimationEvent));
            this._bounds.dispose();
            this._bounds = null;
            this._boundsRegion.dispose();
            this._boundsRegion = null;
            this._state.dispose();
            this._renderer = this._animations = this._skeleton = this._state = null;
            x.prototype.dispose.call(this)
        },
        get_animations: function() { return this._animations },
        get_hitName: function() { return this._hitName },
        get_skeleton: function() { return this._skeleton },
        update: function(a) {
            x.prototype.update.call(this, a);
            this._state.update(a);
            this._state.apply(this._skeleton);
            this._skeleton.updateWorldTransform()
        },
        getFrames: function(a) { null == a && (a = 0);
            a = this._state.getCurrent(a); return null != a ? Math.floor(a.animation.duration * yb.FPS) : 0 },
        getFrame: function(a) { null == a && (a = 0);
            a = this._state.getCurrent(a); return null != a ? Math.floor(a.animation.currentTime * yb.FPS) : 0 },
        setFrame: function(a, b) { null == b && (b = 0); var c = this._state.getCurrent(b);
            null != c && (c.timeScale = 0, c.time = Cf.clamp(a / yb.FPS, 0, c.animation.duration)) },
        setTimeScale: function(a, b) {
            null == b && (b = 0);
            var c = this._state.getCurrent(b);
            null != c && (c.timeScale = a)
        },
        startAnimation: function(a) { null == a && (a = 0);
            a = this._state.getCurrent(a);
            null != a && (a.timeScale = 1) },
        stopAnimation: function(a) { null == a && (a = 0);
            a = this._state.getCurrent(a);
            null != a && (a.timeScale = 0) },
        mixAnimation: function(a, b, c) { this._state.get_data().setMixByName(a, b, c) },
        hasAnimation: function(a) { return this._animations.exists(a) },
        animate: function(a, b, c, e, m) { null == m && (m = !1);
            null == e && (e = 0);
            null == c && (c = 1);
            null == b && (b = 0);
            this._doAnimate(a, b, !1, 0, c, e, m); return this },
        queueAnimation: function(a,
            b, c, e, m, d) { null == d && (d = 0);
            null == m && (m = !1);
            null == e && (e = 0);
            null == c && (c = 1);
            null == b && (b = 0);
            this._doAnimate(a, b, !0, d, c, e, m); return this },
        _doAnimate: function(a, b, c, e, m, d, f) { null == f && (f = !1);
            null == d && (d = 0);
            null == m && (m = 1);
            f && this._skeleton.setToSetupPose(); if (this.hasAnimation(a)) { if (c = c ? this._state.addAnimationByName(d, a, 0 == b, e) : this._state.setAnimationByName(d, a, 0 == b), c.timeScale = m, 0 < b)
                    for (e = 1; e < b;) e++, c = this._state.addAnimationByName(d, a, !1, 0), c.timeScale = m } else null },
        clearQueue: function() { this._state.clearTracks() },
        setSkin: function(a, b) { null == b && (b = !1);
            this._skeleton.set_skinName(a);
            b && this._skeleton.setSlotsToSetupPose() },
        setAttachment: function(a, b) { this._skeleton.setAttachment(a, b) },
        getAttachment: function(a) { a = this._skeleton.findSlot(a); return null == a || null == a.get_attachment() ? "" : a.get_attachment().get_name() },
        hit: function(a, b, c) {
            null == c && (c = "");
            this._hitName = "";
            this._bounds.update(this._skeleton, !0);
            return this._bounds.aabbContainsPoint(a, b) && (a = this._bounds.containsPoint(a, b), null != a && ("" == c || c == a.get_name())) ?
                (this._hitName = a.get_name(), !0) : !1
        },
        hitRegion: function(a, b, c) { null == c && (c = "");
            this._hitName = "";
            this._boundsRegion.update(this._skeleton, !0, this.scaleX, this.scaleY); return this._boundsRegion.aabbContainsPoint(a, b) && (a = this._boundsRegion.containsPoint(a, b), null != a && ("" == c || c == a.get_name())) ? (this._hitName = a.get_name(), !0) : !1 },
        addElementToSlot: function(a, b) {
            null == this._skeleton.findSlot(a) || null == function(b) { var e = b._renderer.get_entities(),
                        b = b._skeleton.findSlot(a).get_attachment(); return e.get(b) }(this) ||
                function(b) { var e = b._renderer.get_entities(),
                        b = b._skeleton.findSlot(a).get_attachment(); return e.get(b) }(this).addChild(b.root)
        },
        _onAnimationStart: function(a) { this._currentAnimation = this._state.getCurrent(a).animation.get_name() },
        _onAnimationComplete: function() {},
        _onAnimationEvent: function(a, b) { b.get_data().get_name() },
        __class__: yb,
        __properties__: A(x.prototype.__properties__, { get_skeleton: "get_skeleton", get_hitName: "get_hitName", get_animations: "get_animations" })
    });
    var Td = function(a, b) {
        if (null == a) throw new P("data cannot be null.");
        if (null == b) throw new P("skeleton cannot be null.");
        this._data = a;
        this.translateMix = a.translateMix;
        this.rotateMix = a.rotateMix;
        this.scaleMix = a.scaleMix;
        this.shearMix = a.shearMix;
        this.offsetRotation = a.offsetRotation;
        this.offsetX = a.offsetX;
        this.offsetY = a.offsetY;
        this.offsetScaleX = a.offsetScaleX;
        this.offsetScaleY = a.offsetScaleY;
        this.offsetShearY = a.offsetShearY;
        this.bone = b.findBone(a.bone.get_name());
        this.target = b.findBone(a.target.get_name())
    };
    j["com.workinman.display.spine.TransformConstraint"] = Td;
    Td.__name__ = ["com", "workinman", "display", "spine", "TransformConstraint"];
    Td.__interfaces__ = [Zc];
    Td.prototype = {
        dispose: function() { this._data.dispose();
            this.target = this.bone = this._data = null },
        update: function() {
            if (0 < this.rotateMix) {
                var a = this.bone.get_a(),
                    b = this.bone.get_b(),
                    c = this.bone.get_c(),
                    e = this.bone.get_d(),
                    m = Math.atan2(this.target.get_c(), this.target.get_a()) - Math.atan2(c, a) + this.offsetRotation * qb.degRad;
                m > Math.PI ? m -= 2 * Math.PI : m < -Math.PI && (m += 2 * Math.PI);
                var m = m * this.rotateMix,
                    d = Math.cos(m),
                    m = Math.sin(m);
                this.bone.set_a(d *
                    a - m * c);
                this.bone.set_b(d * b - m * e);
                this.bone.set_c(m * a + d * c);
                this.bone.set_d(m * b + d * e)
            }
            0 < this.scaleMix && (a = Math.sqrt(this.bone.get_a() * this.bone.get_a() + this.bone.get_c() * this.bone.get_c()), b = Math.sqrt(this.target.get_a() * this.target.get_a() + this.target.get_c() * this.target.get_c()), a = 0 < a ? (a + (b - a + this.offsetScaleX) * this.scaleMix) / a : 0, b = this.bone, b.set_a(b.get_a() * a), b = this.bone, b.set_c(b.get_c() * a), a = Math.sqrt(this.bone.get_b() * this.bone.get_b() + this.bone.get_d() * this.bone.get_d()), b = Math.sqrt(this.target.get_b() *
                this.target.get_b() + this.target.get_d() * this.target.get_d()), a = 0 < a ? (a + (b - a + this.offsetScaleY) * this.scaleMix) / a : 0, b = this.bone, b.set_b(b.get_b() * a), b = this.bone, b.set_d(b.get_d() * a));
            0 < this.shearMix && (b = this.bone.get_b(), c = this.bone.get_d(), e = Math.atan2(c, b), a = Math.atan2(this.target.get_d(), this.target.get_b()) - Math.atan2(this.target.get_c(), this.target.get_a()) - (e - Math.atan2(this.bone.get_c(), this.bone.get_a())), a > Math.PI ? a -= 2 * Math.PI : a < -Math.PI && (a += 2 * Math.PI), a = e + (a + this.offsetShearY * qb.degRad) * this.shearMix,
                b = Math.sqrt(b * b + c * c), this.bone.set_b(Math.cos(a) * b), this.bone.set_d(Math.sin(a) * b));
            a = this.translateMix;
            0 < a && (b = Ha.allocFloat(2), b[0] = this.offsetX, b[1] = this.offsetY, this.target.localToWorld(b), c = this.bone, c.set_worldX(c.get_worldX() + (b[0] - this.bone.get_worldX()) * a), c = this.bone, c.set_worldY(c.get_worldY() + (b[1] - this.bone.get_worldY()) * a))
        },
        get_data: function() { return this._data },
        __class__: Td,
        __properties__: { get_data: "get_data" }
    };
    var uf = function(a) {
        if (null == a) throw new P("name cannot be null.");
        this._name =
            a
    };
    j["com.workinman.display.spine.TransformConstraintData"] = uf;
    uf.__name__ = ["com", "workinman", "display", "spine", "TransformConstraintData"];
    uf.prototype = { dispose: function() { this.target = this.bone = null }, __class__: uf };
    var kb = function(a, b, c) { if (null == a) throw new P("name cannot be null."); if (null == b) throw new P("timelines cannot be null.");
        this._name = a;
        this._timelines = b;
        this.duration = c };
    j["com.workinman.display.spine.animation.Animation"] = kb;
    kb.__name__ = "com,workinman,display,spine,animation,Animation".split(",");
    kb.binarySearch = function(a, b, c) { var e = 0,
            m = Math.floor(a.length / c - 2); if (0 == m) return c; for (var d = m >>> 1;;) { a[(d + 1) * c] <= b ? e = d + 1 : m = d; if (e == m) return (e + 1) * c;
            d = e + m >>> 1 } return 0 };
    kb.binarySearch1 = function(a, b) { var c = 0,
            e = a.length - 2; if (0 == e) return 1; for (var m = e >>> 1;;) { a[m + 1] <= b ? c = m + 1 : e = m; if (c == e) return c + 1;
            m = c + e >>> 1 } return 0 };
    kb.prototype = {
        get_timelines: function() { return this._timelines },
        apply: function(a, b, c, e, m) {
            if (null == a) throw new P("skeleton cannot be null.");
            e && 0 != this.duration && (c %= this.duration, 0 < b && (b %=
                this.duration));
            for (var e = 0, d = this.get_timelines().length; e < d;) { var f = e++;
                this.get_timelines()[f].apply(a, b, c, m, 1) } this.currentTime = c
        },
        mix: function(a, b, c, e, m, d) { if (null == a) throw new P("skeleton cannot be null.");
            e && 0 != this.duration && (c %= this.duration, 0 < b && (b %= this.duration)); for (var e = 0, f = this.get_timelines().length; e < f;) { var g = e++;
                this.get_timelines()[g].apply(a, b, c, m, d) } },
        get_name: function() { return this._name },
        __class__: kb,
        __properties__: { get_name: "get_name", get_timelines: "get_timelines" }
    };
    var Af =
        function(a) { this.timeScale = 1; if (null == a) throw new P("data cannot be null.");
            this._data = a;
            this._tracks = [];
            this._events = [];
            this.onStart = new Ic;
            this.onEnd = new Ic;
            this.onComplete = new Ic;
            this.onEvent = new Ic };
    j["com.workinman.display.spine.animation.AnimationState"] = Af;
    Af.__name__ = "com,workinman,display,spine,animation,AnimationState".split(",");
    Af.prototype = {
        dispose: function() {
            this._data.dispose();
            this._data = null;
            for (var a = 0, b = this._tracks; a < b.length;) { var c = b[a];++a;
                c.dispose() } this._tracks = null;
            a = 0;
            for (b = this._events; a < b.length;) c = b[a], ++a, c.dispose();
            this._events = null;
            this.onStart.dispose();
            this.onStart = null;
            this.onEnd.dispose();
            this.onEnd = null;
            this.onComplete.dispose();
            this.onComplete = null;
            this.onEvent.dispose();
            this.onEvent = null
        },
        get_data: function() { return this._data },
        update: function(a) {
            for (var a = a * this.timeScale, b = 0, c = this._tracks.length; b < c;) {
                var e = b++,
                    m = this._tracks[e];
                if (null != m) {
                    m.time += a * m.timeScale;
                    if (null != m.previous) { var d = a * m.previous.timeScale;
                        m.previous.time += d;
                        m.mixTime += d }
                    var d =
                        m.next,
                        f = m.lastTime;
                    0 > m.timeScale && (f = Math.abs(f));
                    null != d ? (d.time = f - d.delay, 0 <= d.time && this.setCurrent(e, d)) : !m.loop && f >= m.endTime && this.clearTrack(e)
                }
            }
        },
        apply: function(a) {
            for (var b = 0, c = this._tracks.length; b < c;) {
                var e = b++,
                    d = this._tracks[e];
                if (null != d) {
                    this._events = [];
                    var f = d.time,
                        g = d.lastTime,
                        h = d.endTime,
                        i = d.loop;
                    !i && f > h && (f = h);
                    if (0 > d.timeScale) { for (; 0 > f;) f += d.animation.duration; for (; 0 > g;) g += d.animation.duration }
                    var j = d.previous;
                    if (null == j) 1 == d.mix ? d.animation.apply(a, d.lastTime, f, i, this._events) :
                        d.animation.mix(a, d.lastTime, f, i, this._events, d.mix);
                    else { var k = j.time;!j.loop && k > j.endTime && (k = j.endTime);
                        j.animation.apply(a, k, k, j.loop, null);
                        j = d.mixTime / d.mixDuration * d.mix;
                        1 <= j && (j = 1, d.previous = null);
                        d.animation.mix(a, d.lastTime, f, i, this._events, j) } j = 0;
                    for (k = this._events; j < k.length;) { var l = k[j];++j; if (null != d.onEvent) d.onEvent(e, l);
                        this.onEvent.invoke(e, l) }
                    if (i ? g % h > f % h : g < h && f >= h) { f = Math.floor(f / h); if (null != d.onComplete) d.onComplete(e, f);
                        this.onComplete.invoke(e, f) } d.lastTime = d.time
                }
            }
        },
        clearTracks: function() {
            for (var a =
                    0, b = this._tracks.length; a < b;) this.clearTrack(a++);
            this._tracks = []
        },
        clearTrack: function(a) { if (!(a >= this._tracks.length)) { var b = this._tracks[a]; if (null != b) { if (null != b.onEnd) b.onEnd(a);
                    this.onEnd.invoke(a);
                    this._tracks[a] = null } } },
        expandToIndex: function(a) { if (a < this._tracks.length) return this._tracks[a]; for (; a >= this._tracks.length;) this._tracks[this._tracks.length] = null; return null },
        setCurrent: function(a, b) {
            var c = this.expandToIndex(a);
            if (null != c) {
                var e = c.previous;
                c.previous = null;
                if (null != c.onEnd) c.onEnd(a);
                this.onEnd.invoke(a);
                b.mixDuration = this._data.getMix(c.animation, b.animation);
                0 < b.mixDuration && (b.mixTime = 0, b.previous = null != e && 0.5 > c.mixTime / c.mixDuration ? e : c)
            }
            this._tracks[a] = b;
            if (null != b.onStart) b.onStart(a);
            this.onStart.invoke(a)
        },
        setAnimationByName: function(a, b, c) { var e = this._data.get_skeletonData().findAnimation(b); if (null == e) throw new P("Animation not found: " + b); return this.setAnimation(a, e, c) },
        setAnimation: function(a, b, c) {
            var e = new ge;
            e.animation = b;
            e.loop = c;
            e.endTime = b.duration;
            this.setCurrent(a,
                e);
            return e
        },
        addAnimationByName: function(a, b, c, e) { var d = this._data.get_skeletonData().findAnimation(b); if (null == d) throw new P("Animation not found: " + b); return this.addAnimation(a, d, c, e) },
        addAnimation: function(a, b, c, e) { var d = new ge;
            d.animation = b;
            d.loop = c;
            d.endTime = b.duration;
            c = this.expandToIndex(a); if (null != c) { for (; null != c.next;) c = c.next;
                c.next = d } else this._tracks[a] = d;
            0 >= e && (e = null != c ? e + (c.endTime - this._data.getMix(c.animation, b)) : 0);
            d.delay = e; return d },
        getCurrent: function(a) {
            return a >= this._tracks.length ?
                null : this._tracks[a]
        },
        __class__: Af,
        __properties__: { get_data: "get_data" }
    };
    var zf = function(a) { this.defaultMix = 0;
        this._skeletonData = a;
        this.animationToMixTime = new G };
    j["com.workinman.display.spine.animation.AnimationStateData"] = zf;
    zf.__name__ = "com,workinman,display,spine,animation,AnimationStateData".split(",");
    zf.prototype = {
        dispose: function() { this._skeletonData = this.animationToMixTime = null },
        get_skeletonData: function() { return this._skeletonData },
        setMixByName: function(a, b, c) {
            var e = this._skeletonData.findAnimation(a);
            if (null == e) throw new P("Animation not found: " + a);
            a = this._skeletonData.findAnimation(b);
            if (null == a) throw new P("Animation not found: " + b);
            this.setMix(e, a, c)
        },
        setMix: function(a, b, c) { if (null == a) throw new P("from cannot be null."); if (null == b) throw new P("to cannot be null.");
            this.animationToMixTime.set(a.get_name() + ":" + b.get_name(), c);
            c },
        getMix: function(a, b) { var c;
            c = this.animationToMixTime.get(a.get_name() + ":" + b.get_name()); return null == c ? this.defaultMix : c },
        __class__: zf,
        __properties__: { get_skeletonData: "get_skeletonData" }
    };
    var Jc = function() {};
    j["com.workinman.display.spine.animation.Timeline"] = Jc;
    Jc.__name__ = "com,workinman,display,spine,animation,Timeline".split(",");
    Jc.prototype = { __class__: Jc };
    var Xd = function(a) { this.frames = Ha.allocFloat(a);
        this.attachmentNames = Ha.allocString(a) };
    j["com.workinman.display.spine.animation.AttachmentTimeline"] = Xd;
    Xd.__name__ = "com,workinman,display,spine,animation,AttachmentTimeline".split(",");
    Xd.__interfaces__ = [Jc];
    Xd.prototype = {
        get_frameCount: function() { return this.frames.length },
        setFrame: function(a,
            b, c) { this.frames[a] = b;
            this.attachmentNames[a] = c },
        apply: function(a, b, c) { var e = this.frames;
            c < e[0] ? b > c && this.apply(a, b, Math.POSITIVE_INFINITY, null, 0) : (b > c && (b = -1), c = c >= e[e.length - 1] ? e.length - 1 : kb.binarySearch1(e, c) - 1, e[c] < b || (b = this.attachmentNames[c], a.slots[this.slotIndex].set_attachment(null == b ? null : a.getAttachmentForSlotIndex(this.slotIndex, b)))) },
        __class__: Xd,
        __properties__: { get_frameCount: "get_frameCount" }
    };
    var Oa = function(a) { this.curves = Ha.allocFloat(19 * (a - 1)) };
    j["com.workinman.display.spine.animation.CurveTimeline"] =
        Oa;
    Oa.__name__ = "com,workinman,display,spine,animation,CurveTimeline".split(",");
    Oa.__interfaces__ = [Jc];
    Oa.prototype = {
        apply: function() {},
        get_frameCount: function() { return Math.floor(this.curves.length / 19 + 1) },
        setStepped: function(a) { this.curves[Math.floor(19 * a)] = 1 },
        setCurve: function(a, b, c, e, d) {
            var f = 0.1 * 0.1,
                g = 0.1 * f,
                h = 3 * 0.1,
                i = 3 * f,
                j = 6 * f,
                f = 6 * g,
                k = 2 * -b + e,
                l = 2 * -c + d,
                e = 3 * (b - e) + 1,
                d = 3 * (c - d) + 1,
                b = b * h + k * i + e * g,
                c = c * h + l * i + d * g,
                g = k * j + e * f,
                j = l * j + d * f,
                l = e * f,
                f = d * f,
                a = 19 * a,
                e = this.curves;
            e[a++] = 2;
            d = b;
            h = c;
            for (i = a + 19 - 1; a < i;) e[a] =
                d, e[a + 1] = h, b += g, c += j, g += l, j += f, d += b, h += c, a += 2
        },
        getCurvePercent: function(a, b) { var c = this.curves,
                e = 19 * a,
                d = c[e]; if (0 == d) return b; if (1 == d) return 0;
            e++; for (var d = 0, f = e, g = e + 19 - 1; e < g;) { d = c[e]; if (d >= b) return e == f ? g = f = 0 : (f = c[e - 2], g = c[e - 1]), g + (c[e + 1] - g) * (b - f) / (d - f);
                e += 2 } c = c[e - 1]; return c + (1 - c) * (b - d) / (1 - d) },
        __class__: Oa,
        __properties__: { get_frameCount: "get_frameCount" }
    };
    var Wd = function(a) { Oa.call(this, a);
        this.frames = Ha.allocFloat(a) };
    j["com.workinman.display.spine.animation.ColorTimeline"] = Wd;
    Wd.__name__ = "com,workinman,display,spine,animation,ColorTimeline".split(",");
    Wd.__super__ = Oa;
    Wd.prototype = A(Oa.prototype, {
        setFrame: function(a, b, c, e, d, f) { a *= 5;
            this.frames[a] = b;
            this.frames[a + 1] = c;
            this.frames[a + 2] = e;
            this.frames[a + 3] = d;
            this.frames[a + 4] = f },
        apply: function(a, b, c, e, d) {
            if (!(c < this.frames[0])) {
                var f, g;
                if (c >= this.frames[this.frames.length - 5]) b = this.frames.length - 1, c = this.frames[b - 3], f = this.frames[b - 2], g = this.frames[b - 1], b = this.frames[b];
                else {
                    var b = kb.binarySearch(this.frames, c, 5),
                        h = this.frames[b - 4];
                    f = this.frames[b - 3];
                    g = this.frames[b - 2];
                    var e = this.frames[b - 1],
                        i = this.frames[b],
                        i = 1 - (c - i) / (this.frames[b + -5] - i),
                        i = this.getCurvePercent(Math.floor(b / 5 - 1), 0 > i ? 0 : 1 < i ? 1 : i),
                        c = h + (this.frames[b + 1] - h) * i;
                    f += (this.frames[b + 2] - f) * i;
                    g += (this.frames[b + 3] - g) * i;
                    b = e + (this.frames[b + 4] - e) * i
                }
                a = a.slots[this.slotIndex];
                1 > d ? (a.r += (c - a.r) * d, a.g += (f - a.g) * d, a.b += (g - a.b) * d, a.a += (b - a.a) * d) : (a.r = c, a.g = f, a.b = g, a.a = b)
            }
        },
        __class__: Wd
    });
    var ce = function(a) { this.frames = Ha.allocFloat(a);
        this.drawOrders = Ha.allocIntArray(a) };
    j["com.workinman.display.spine.animation.DrawOrderTimeline"] = ce;
    ce.__name__ = "com,workinman,display,spine,animation,DrawOrderTimeline".split(",");
    ce.__interfaces__ = [Jc];
    ce.prototype = { get_frameCount: function() { return this.frames.length }, setFrame: function(a, b, c) { this.frames[a] = b;
            this.drawOrders[a] = c }, apply: function(a, b, c) { if (!(c < this.frames[0])) { var c = c >= this.frames[this.frames.length - 1] ? this.frames.length - 1 : kb.binarySearch1(this.frames, c) - 1,
                    b = a.drawOrder,
                    a = a.slots,
                    e = this.drawOrders[c],
                    c = 0; if (null == e)
                    for (e = 0; e < a.length;) { var d = a[e];++e;
                        b[c++] = d } else
                        for (d = 0; d < e.length;) { var f = e[d];++d;
                            b[c++] = a[f] } } }, __class__: ce, __properties__: { get_frameCount: "get_frameCount" } };
    var de = function(a) { this.frames = Ha.allocFloat(a);
        this.events = []; for (var b = 0; b < a;) b++, this.events.push(null) };
    j["com.workinman.display.spine.animation.EventTimeline"] = de;
    de.__name__ = "com,workinman,display,spine,animation,EventTimeline".split(",");
    de.__interfaces__ = [Jc];
    de.prototype = {
        get_frameCount: function() { return this.frames.length },
        setFrame: function(a, b) { this.frames[a] = b.time;
            this.events[a] = b },
        apply: function(a, b, c, e, d) {
            if (null != e) {
                if (b > c) this.apply(a, b, Math.POSITIVE_INFINITY, e, d), b = -1;
                else if (b >=
                    this.frames[this.get_frameCount() - 1]) return;
                if (!(c < this.frames[0])) { if (b < this.frames[0]) a = 0;
                    else { a = kb.binarySearch1(this.frames, b); for (b = this.frames[a]; 0 < a && !(this.frames[a - 1] != b);) a-- } for (; a < this.get_frameCount() && c >= this.frames[a];) e[e.length] = this.events[a], a++ }
            }
        },
        __class__: de,
        __properties__: { get_frameCount: "get_frameCount" }
    };
    var be = function(a) { Oa.call(this, a);
        this.frames = Ha.allocFloat(a);
        this.frameVertices = Ha.allocFloatArray(a) };
    j["com.workinman.display.spine.animation.FfdTimeline"] = be;
    be.__name__ =
        "com,workinman,display,spine,animation,FfdTimeline".split(",");
    be.__super__ = Oa;
    be.prototype = A(Oa.prototype, {
        setFrame: function(a, b, c) { this.frames[a] = b;
            this.frameVertices[a] = c },
        apply: function(a, b, c, e, d) {
            b = a.slots[this.slotIndex];
            if (b.get_attachment() == this.attachment && (e = this.frames, !(c < e[0]))) {
                var f = this.frameVertices,
                    a = f[0].length,
                    b = b.attachmentVertices;
                b.length != a && (d = 1);
                if (c >= e[e.length - 1])
                    if (c = f[e.length - 1], 1 > d)
                        for (e = 0; e < a;) f = e++, b[f] += (c[f] - b[f]) * d;
                    else
                        for (d = 0; d < a;) e = d++, b[e] = c[e];
                else {
                    var g =
                        kb.binarySearch1(e, c),
                        h = e[g],
                        c = 1 - (c - h) / (e[g - 1] - h),
                        c = this.getCurvePercent(g - 1, 0 > c ? 0 : 1 < c ? 1 : c),
                        e = f[g - 1],
                        f = f[g];
                    if (1 > d)
                        for (h = 0; h < a;) { var i = h++,
                                g = e[i];
                            b[i] += (g + (f[i] - g) * c - b[i]) * d } else
                            for (d = 0; d < a;) h = d++, g = e[h], b[h] = g + (f[h] - g) * c
                }
            }
        },
        __class__: be
    });
    var ae = function(a) { Oa.call(this, a);
        this.frames = Ha.allocFloat(a) };
    j["com.workinman.display.spine.animation.IkConstraintTimeline"] = ae;
    ae.__name__ = "com,workinman,display,spine,animation,IkConstraintTimeline".split(",");
    ae.__super__ = Oa;
    ae.prototype = A(Oa.prototype, {
        setFrame: function(a, b, c, e) { a *= 3;
            this.frames[a] = b;
            this.frames[a + 1] = c;
            this.frames[a + 2] = e },
        apply: function(a, b, c, e, d) {
            if (!(c < this.frames[0]))
                if (a = a.ikConstraints[this.ikConstraintIndex], c >= this.frames[this.frames.length - 3]) a.mix += (this.frames[this.frames.length - 2] - a.mix) * d, a.bendDirection = Math.floor(this.frames[this.frames.length - 1]);
                else {
                    var b = kb.binarySearch(this.frames, c, 3),
                        e = this.frames[b + -2],
                        f = this.frames[b],
                        c = 1 - (c - f) / (this.frames[b + -3] - f),
                        c = this.getCurvePercent(Math.floor(b / 3 - 1), 0 > c ? 0 : 1 < c ? 1 : c);
                    a.mix += (e + (this.frames[b + 1] - e) * c - a.mix) * d;
                    a.bendDirection = Math.floor(this.frames[b + -1])
                }
        },
        __class__: ae
    });
    var Ic = function() { this._listeners = [];
        this._listeners = [] };
    j["com.workinman.display.spine.animation.Listeners"] = Ic;
    Ic.__name__ = "com,workinman,display,spine,animation,Listeners".split(",");
    Ic.prototype = {
        get_listeners: function() { return this._listeners },
        dispose: function() { this._listeners = null },
        add: function(a) {
            if (null == a) throw new P("listener cannot be null.");
            this._listeners[this._listeners.length] =
                a
        },
        remove: function(a) { if (null == a) throw new P("listener cannot be null.");
            this._listeners.splice(this._listeners.indexOf(a), 1) },
        invoke: function(a, b) { for (var c = 0, e = this.get_listeners(); c < e.length;) { var d = e[c];++c;
                d(a, b) } },
        __class__: Ic,
        __properties__: { get_listeners: "get_listeners" }
    };
    var Yd = function(a) { Oa.call(this, a);
        this.frames = Ha.allocFloat(2 * a) };
    j["com.workinman.display.spine.animation.RotateTimeline"] = Yd;
    Yd.__name__ = "com,workinman,display,spine,animation,RotateTimeline".split(",");
    Yd.__super__ = Oa;
    Yd.prototype = A(Oa.prototype, {
        setFrame: function(a, b, c) { a *= 2;
            this.frames[a] = b;
            this.frames[a + 1] = c },
        apply: function(a, b, c, e, d) {
            if (!(c < this.frames[0])) {
                a = a.bones[this.boneIndex];
                if (c >= this.frames[this.frames.length - 2]) e = a.get_data().rotation + this.frames[this.frames.length - 1] - a.rotation;
                else {
                    for (var e = kb.binarySearch(this.frames, c, 2), b = this.frames[e - 1], f = this.frames[e], c = 1 - (c - f) / (this.frames[e + -2] - f), c = this.getCurvePercent(Math.floor(e / 2 - 1), 0 > c ? 0 : 1 < c ? 1 : c), e = this.frames[e + 1] - b; 180 < e;) e -= 360;
                    for (; - 180 > e;) e +=
                        360;
                    e = a.get_data().rotation + (b + e * c) - a.rotation
                }
                for (; 180 < e;) e -= 360;
                for (; - 180 > e;) e += 360;
                a.rotation += e * d
            }
        },
        __class__: Yd
    });
    var Hb = function(a) { this.FRAME_Y = 2;
        this.FRAME_X = 1;
        this.PREV_FRAME_TIME = -3;
        Oa.call(this, a);
        this.frames = Ha.allocFloat(a) };
    j["com.workinman.display.spine.animation.TranslateTimeline"] = Hb;
    Hb.__name__ = "com,workinman,display,spine,animation,TranslateTimeline".split(",");
    Hb.__super__ = Oa;
    Hb.prototype = A(Oa.prototype, {
        setFrame: function(a, b, c, e) {
            a *= 3;
            this.frames[a] = b;
            this.frames[a + 1] = c;
            this.frames[a +
                2] = e
        },
        apply: function(a, b, c, e, d) {
            if (!(c < this.frames[0]))
                if (a = a.bones[this.boneIndex], c >= this.frames[this.frames.length - 3]) a.x += (a.get_data().x + this.frames[this.frames.length - 2] - a.x) * d, a.y += (a.get_data().y + this.frames[this.frames.length - 1] - a.y) * d;
                else {
                    var b = kb.binarySearch(this.frames, c, 3),
                        e = this.frames[b - 2],
                        f = this.frames[b - 1],
                        g = this.frames[b],
                        c = 1 - (c - g) / (this.frames[b + this.PREV_FRAME_TIME] - g),
                        c = this.getCurvePercent(Math.floor(b / 3 - 1), 0 > c ? 0 : 1 < c ? 1 : c);
                    a.x += (a.get_data().x + e + (this.frames[b + this.FRAME_X] -
                        e) * c - a.x) * d;
                    a.y += (a.get_data().y + f + (this.frames[b + this.FRAME_Y] - f) * c - a.y) * d
                }
        },
        __class__: Hb
    });
    var Zd = function(a) { Hb.call(this, a) };
    j["com.workinman.display.spine.animation.ScaleTimeline"] = Zd;
    Zd.__name__ = "com,workinman,display,spine,animation,ScaleTimeline".split(",");
    Zd.__super__ = Hb;
    Zd.prototype = A(Hb.prototype, {
        apply: function(a, b, c, e, d) {
            if (!(c < this.frames[0]))
                if (a = a.bones[this.boneIndex], c >= this.frames[this.frames.length - 3]) a.scaleX += (a.get_data().scaleX * this.frames[this.frames.length - 2] - a.scaleX) *
                    d, a.scaleY += (a.get_data().scaleY * this.frames[this.frames.length - 1] - a.scaleY) * d;
                else { var b = kb.binarySearch(this.frames, c, 3),
                        e = this.frames[b - 2],
                        f = this.frames[b - 1],
                        g = this.frames[b],
                        c = 1 - (c - g) / (this.frames[b + this.PREV_FRAME_TIME] - g),
                        c = this.getCurvePercent(Math.floor(b / 3 - 1), 0 > c ? 0 : 1 < c ? 1 : c);
                    a.scaleX += (a.get_data().scaleX * (e + (this.frames[b + this.FRAME_X] - e) * c) - a.scaleX) * d;
                    a.scaleY += (a.get_data().scaleY * (f + (this.frames[b + this.FRAME_Y] - f) * c) - a.scaleY) * d }
        },
        __class__: Zd
    });
    var $d = function(a) { Hb.call(this, a) };
    j["com.workinman.display.spine.animation.ShearTimeline"] =
        $d;
    $d.__name__ = "com,workinman,display,spine,animation,ShearTimeline".split(",");
    $d.__super__ = Hb;
    $d.prototype = A(Hb.prototype, {
        apply: function(a, b, c, e, d) {
            if (!(c < this.frames[0]))
                if (a = a.bones[this.boneIndex], c >= this.frames[this.frames.length - 3]) a.shearX += (a.get_data().shearX + this.frames[this.frames.length - 2] - a.shearX) * d, a.shearY += (a.get_data().shearY + this.frames[this.frames.length - 1] - a.shearY) * d;
                else {
                    var b = kb.binarySearch(this.frames, c, 3),
                        e = this.frames[b - 2],
                        f = this.frames[b - 1],
                        g = this.frames[b],
                        c = Cf.clamp(1 -
                            (c - g) / (this.frames[b + this.PREV_FRAME_TIME] - g), 0, 1),
                        c = this.getCurvePercent(Math.floor(b / 3 - 1), c);
                    a.shearX += (a.get_data().shearX + (e + (this.frames[b + this.FRAME_X] - e) * c) - a.shearX) * d;
                    a.shearY += (a.get_data().shearY + (f + (this.frames[b + this.FRAME_Y] - f) * c) - a.shearY) * d
                }
        },
        __class__: $d
    });
    var ge = function() { this.timeScale = this.mix = 1;
        this.lastTime = -1;
        this.time = 0 };
    j["com.workinman.display.spine.animation.TrackEntry"] = ge;
    ge.__name__ = "com,workinman,display,spine,animation,TrackEntry".split(",");
    ge.prototype = {
        dispose: function() {
            this.onEvent =
                this.onComplete = this.onEnd = this.onStart = this.animation = this.previous = this.next = null
        },
        __class__: ge
    };
    var yf = function(a, b) { this.regions = [];
        this.pages = []; "" != a && this.load(a, b) };
    j["com.workinman.display.spine.atlas.Atlas"] = yf;
    yf.__name__ = "com,workinman,display,spine,atlas,Atlas".split(",");
    yf.prototype = {
        load: function(a, b) {
            if (null == b) throw new P("textureLoader cannot be null.");
            this.textureLoader = b;
            for (var c = new Df(a), e = Ha.allocString(4), d = null;;) {
                var f = c.readLine();
                if (null == f) break;
                f = c.trim(f);
                if (0 == f.length) d =
                    null;
                else if (null == d) { d = new Ef;
                    d.name = f;
                    2 == c.readTuple(e) && (d.width = B.parseInt(e[0]), d.height = B.parseInt(e[1]), c.readTuple(e));
                    d.format = e[0];
                    c.readTuple(e);
                    d.minFilter = e[0];
                    d.magFilter = e[1]; var g = c.readValue();
                    d.uWrap = "clampToEdge";
                    d.vWrap = "clampToEdge"; "x" == g ? d.uWrap = "repeat" : "y" == g ? d.vWrap = "repeat" : "xy" == g && (d.uWrap = d.vWrap = "repeat");
                    b.loadPage(d, f);
                    this.pages.push(d) } else {
                    g = new ad;
                    g.name = f;
                    g.page = d;
                    g.rotate = "true" == c.readValue();
                    c.readTuple(e);
                    var f = B.parseInt(e[0]),
                        h = B.parseInt(e[1]);
                    c.readTuple(e);
                    var i = B.parseInt(e[0]),
                        j = B.parseInt(e[1]);
                    g.u = f / d.width;
                    g.v = h / d.height;
                    g.rotate ? (g.u2 = (f + j) / d.width, g.v2 = (h + i) / d.height) : (g.u2 = (f + i) / d.width, g.v2 = (h + j) / d.height);
                    g.x = f;
                    g.y = h;
                    g.width = Math.floor(Math.abs(i));
                    g.height = Math.floor(Math.abs(j));
                    4 == c.readTuple(e) && (g.splits = [B.parseInt(e[0]), B.parseInt(e[1]), B.parseInt(e[2]), B.parseInt(e[3])], 4 == c.readTuple(e) && (g.pads = [B.parseInt(e[0]), B.parseInt(e[1]), B.parseInt(e[2]), B.parseInt(e[3])], c.readTuple(e)));
                    g.originalWidth = B.parseInt(e[0]);
                    g.originalHeight =
                        B.parseInt(e[1]);
                    c.readTuple(e);
                    g.offsetX = B.parseInt(e[0]);
                    g.offsetY = B.parseInt(e[1]);
                    g.index = B.parseInt(c.readValue());
                    b.loadRegion(g);
                    this.regions.push(g)
                }
            }
        },
        findRegion: function(a) { for (var b = 0, c = this.regions.length; b < c;) { var e = b++; if (this.regions[e].name == a) return this.regions[e] } return null },
        __class__: yf
    };
    var Df = function(a) { this.index = 0;
        this.lines = (new v("[ \t]*((\r\n)|\r|\n)[ \t]*", "g")).split(a) };
    j["com.workinman.display.spine.atlas.Reader"] = Df;
    Df.__name__ = "com,workinman,display,spine,atlas,Reader".split(",");
    Df.prototype = {
        trim: function(a) { return $.trim(a) },
        readLine: function() { return this.index >= this.lines.length ? null : this.lines[this.index++] },
        readValue: function() { var a = this.readLine(),
                b = a.indexOf(":"); if (-1 == b) throw new P("Invalid line: " + a); return this.trim(a.substring(b + 1)) },
        readTuple: function(a) {
            var b = this.readLine(),
                c = b.indexOf(":");
            if (-1 == c) throw new P("Invalid line: " + b);
            for (var e = 0, c = c + 1; 3 > e;) { var d = b.indexOf(",", c); if (-1 == d) break;
                a[e] = this.trim(M.substr(b, c, d - c));
                c = d + 1;
                e++ } a[e] = this.trim(b.substring(c));
            return e + 1
        },
        __class__: Df
    };
    var Ef = function() {};
    j["com.workinman.display.spine.atlas.AtlasPage"] = Ef;
    Ef.__name__ = "com,workinman,display,spine,atlas,AtlasPage".split(",");
    Ef.prototype = { __class__: Ef };
    var ad = function() {};
    j["com.workinman.display.spine.atlas.AtlasRegion"] = ad;
    ad.__name__ = "com,workinman,display,spine,atlas,AtlasRegion".split(",");
    ad.prototype = { __class__: ad };
    var Ff = function() {};
    j["com.workinman.display.spine.atlas.TextureLoader"] = Ff;
    Ff.__name__ = "com,workinman,display,spine,atlas,TextureLoader".split(",");
    Ff.prototype = { __class__: Ff };
    var Gf = function() {};
    j["com.workinman.display.spine.attachments.AttachmentLoader"] = Gf;
    Gf.__name__ = "com,workinman,display,spine,attachments,AttachmentLoader".split(",");
    Gf.prototype = { __class__: Gf };
    var Mb = function(a) { if (null == a) throw new P("atlas cannot be null.");
        this.atlas = a };
    j["com.workinman.display.spine.attachments.AtlasAttachmentLoader"] = Mb;
    Mb.__name__ = "com,workinman,display,spine,attachments,AtlasAttachmentLoader".split(",");
    Mb.__interfaces__ = [Gf];
    Mb.nextPOT = function(a) {
        a--;
        a |= a >> 1;
        a |= a >> 2;
        a |= a >> 4;
        a |= a >> 8;
        return (a | a >> 16) + 1
    };
    Mb.prototype = {
        newRegionAttachment: function(a, b, c) {
            a = this.atlas.findRegion(c);
            if (null == a) throw new P("Region not found in atlas: " + c + " (region attachment: " + b + ")");
            b = new Xb(b);
            b.rendererObject = a;
            var c = a.page.width / Mb.nextPOT(a.page.width),
                e = a.page.height / Mb.nextPOT(a.page.height);
            b.setUVs(a.u * c, a.v * e, a.u2 * c, a.v2 * e, a.rotate);
            b.regionOffsetX = a.offsetX;
            b.regionOffsetY = a.offsetY;
            b.regionWidth = a.width;
            b.regionHeight = a.height;
            b.regionOriginalWidth = a.originalWidth;
            b.regionOriginalHeight = a.originalHeight;
            return b
        },
        newMeshAttachment: function(a, b, c) { a = this.atlas.findRegion(c); if (null == a) throw new P("Region not found in atlas: " + c + " (mesh attachment: " + b + ")");
            b = new rb(b);
            b.rendererObject = a; return b },
        newWeightedMeshAttachment: function(a, b, c) {
            a = this.atlas.findRegion(c);
            if (null == a) throw new P("Region not found in atlas: " + c + " (weighted mesh attachment: " + b + ")");
            b = new ic(b);
            b.rendererObject = a;
            var c = a.page.width / Mb.nextPOT(a.page.width),
                e = a.page.height / Mb.nextPOT(a.page.height);
            b.regionU = a.u * c;
            b.regionV = a.v * e;
            b.regionU2 = a.u2 * c;
            b.regionV2 = a.v2 * e;
            b.regionRotate = a.rotate;
            b.regionOffsetX = a.offsetX;
            b.regionOffsetY = a.offsetY;
            b.regionWidth = a.width;
            b.regionHeight = a.height;
            b.regionOriginalWidth = a.originalWidth;
            b.regionOriginalHeight = a.originalHeight;
            return b
        },
        newBoundingBoxAttachment: function(a, b) { return new hc(b) },
        __class__: Mb
    };
    var Pa = function(a) { if (null == a) throw new P("name cannot be null.");
        this._name = a };
    j["com.workinman.display.spine.attachments.Attachment"] = Pa;
    Pa.__name__ = "com,workinman,display,spine,attachments,Attachment".split(",");
    Pa.prototype = { dispose: function() {}, get_name: function() { return this._name }, __class__: Pa, __properties__: { get_name: "get_name" } };
    var xf = function(a, b) { this.ordinal = a;
        this.name = b };
    j["com.workinman.display.spine.attachments.AttachmentType"] = xf;
    xf.__name__ = "com,workinman,display,spine,attachments,AttachmentType".split(",");
    xf.prototype = { __class__: xf };
    var hc = function(a) { Pa.call(this, a);
        this.vertices = [] };
    j["com.workinman.display.spine.attachments.BoundingBoxAttachment"] = hc;
    hc.__name__ = "com,workinman,display,spine,attachments,BoundingBoxAttachment".split(",");
    hc.__super__ = Pa;
    hc.prototype = A(Pa.prototype, { dispose: function() { Pa.prototype.dispose.call(this);
            this.vertices = null }, computeWorldVertices: function(a, b, c, e) { for (var a = a + c.get_worldX(), b = b + c.get_worldY(), d = c.get_a(), f = c.get_b(), g = c.get_c(), c = c.get_d(), h = this.vertices, i = 0, j = h.length; i < j;) { var k = i + 1,
                    l = h[i],
                    n = h[k];
                e[i] = l * d + n * f + a;
                e[k] = l * g + n * c + b;
                i += 2 } }, __class__: hc });
    var rb = function(a) { this.r = this.g = this.b = this.a = 1;
        Pa.call(this, a) };
    j["com.workinman.display.spine.attachments.MeshAttachment"] = rb;
    rb.__name__ =
        "com,workinman,display,spine,attachments,MeshAttachment".split(",");
    rb.__super__ = Pa;
    rb.prototype = A(Pa.prototype, {
        dispose: function() { Pa.prototype.dispose.call(this);
            this.region = this.worldVertices = this.rendererObject = this.triangles = this.regionUVs = this.uvs = this.vertices = null },
        updateUVs: function() {
            null == this.region && (this.region = this.rendererObject);
            var a, b = this.regionUVs.length;
            if (null == this.uvs || this.uvs.length != b) this.uvs = [];
            var c, e, d, f;
            null == this.region ? (c = e = 0, d = f = 1) : (c = this.region.u, e = this.region.v,
                d = this.region.u2 - c, f = this.region.v2 - e);
            var g = this.regionUVs;
            if (C.__instanceof(this.region, ad) && C.__cast(this.region, ad).rotate)
                for (a = 0; a < b;) this.uvs[a] = c + g[a + 1] * d, this.uvs[a + 1] = e + f - g[a] * f, a += 2;
            else
                for (a = 0; a < b;) this.uvs[a] = c + g[a] * d, this.uvs[a + 1] = e + g[a + 1] * f, a += 2
        },
        updateWorldVertices: function(a) {
            var b = a.get_skeleton(),
                c = a.get_bone(),
                e = b.x + c.get_worldX(),
                b = b.y + c.get_worldY(),
                d = c.get_a(),
                f = c.get_b(),
                g = c.get_c(),
                c = c.get_d(),
                h = this.vertices,
                i = h.length;
            a.attachmentVertices.length == i && (h = a.attachmentVertices);
            for (var a = [], j = 0, k = 0; k < i;) { var l = h[j],
                    n = h[j + 1];
                a[k] = l * d + n * f + e;
                a[k + 1] = l * g + n * c + b;
                j += 2;
                k += 2 }
            return a
        },
        __class__: rb
    });
    var Xb = function(a) { this.uvs = [];
        this.offset = [];
        this.scaleX = this.scaleY = this.r = this.g = this.b = this.a = 1;
        Pa.call(this, a);
        this.offset = Ha.allocFloat(8);
        this.uvs = Ha.allocFloat(8) };
    j["com.workinman.display.spine.attachments.RegionAttachment"] = Xb;
    Xb.__name__ = "com,workinman,display,spine,attachments,RegionAttachment".split(",");
    Xb.__super__ = Pa;
    Xb.prototype = A(Pa.prototype, {
        dispose: function() {
            Pa.prototype.dispose.call(this);
            this.rendererObject = null
        },
        setUVs: function(a, b, c, e, d) { d ? (this.uvs[2] = a, this.uvs[3] = e, this.uvs[4] = a, this.uvs[5] = b, this.uvs[6] = c, this.uvs[7] = b, this.uvs[0] = c, this.uvs[1] = e) : (this.uvs[0] = a, this.uvs[1] = e, this.uvs[2] = a, this.uvs[3] = b, this.uvs[4] = c, this.uvs[5] = b, this.uvs[6] = c, this.uvs[7] = e) },
        updateOffset: function() {
            var a = this.width / this.regionOriginalWidth * this.scaleX,
                b = this.height / this.regionOriginalHeight * this.scaleY,
                c = -this.width / 2 * this.scaleX + this.regionOffsetX * a,
                e = -this.height / 2 * this.scaleY + this.regionOffsetY *
                b,
                d = c + this.regionWidth * a,
                b = e + this.regionHeight * b,
                a = this.rotation * Math.PI / 180,
                f = Math.cos(a),
                g = Math.sin(a),
                a = c * f + this.x,
                c = c * g,
                h = e * f + this.y,
                e = e * g,
                i = d * f + this.x,
                d = d * g,
                f = b * f + this.y,
                b = b * g;
            this.offset[0] = a - e;
            this.offset[1] = h + c;
            this.offset[2] = a - b;
            this.offset[3] = f + c;
            this.offset[4] = i - b;
            this.offset[5] = f + d;
            this.offset[6] = i - e;
            this.offset[7] = h + d
        },
        computeWorldVertices: function(a, b, c, e) {
            var a = a + c.get_worldX(),
                b = b + c.get_worldY(),
                d = c.get_a(),
                f = c.get_b(),
                g = c.get_c(),
                c = c.get_d(),
                h = this.offset[0],
                i = this.offset[1],
                j = this.offset[2],
                k = this.offset[3],
                l = this.offset[4],
                n = this.offset[5],
                o = this.offset[6],
                p = this.offset[7];
            e[0] = h * d + i * f + a;
            e[1] = h * g + i * c + b;
            e[2] = j * d + k * f + a;
            e[3] = j * g + k * c + b;
            e[4] = l * d + n * f + a;
            e[5] = l * g + n * c + b;
            e[6] = o * d + p * f + a;
            e[7] = o * g + p * c + b
        },
        __class__: Xb
    });
    var ic = function(a) { this.r = this.g = this.b = this.a = 1;
        Pa.call(this, a) };
    j["com.workinman.display.spine.attachments.WeightedMeshAttachment"] = ic;
    ic.__name__ = "com,workinman,display,spine,attachments,WeightedMeshAttachment".split(",");
    ic.__super__ = Pa;
    ic.prototype = A(Pa.prototype, {
        dispose: function() {
            Pa.prototype.dispose.call(this);
            this.rendererObject = this.triangles = this.regionUVs = this.uvs = this.weights = this.bones = null
        },
        updateUVs: function() { var a = this.regionU2 - this.regionU,
                b = this.regionV2 - this.regionV,
                c, e = this.regionUVs.length; if (null == this.uvs || this.uvs.length != e) this.uvs = []; if (this.regionRotate)
                for (c = 0; c < e;) this.uvs[c] = this.regionU + this.regionUVs[c + 1] * a, this.uvs[c + 1] = this.regionV + b - this.regionUVs[c] * b, c += 2;
            else
                for (c = 0; c < e;) this.uvs[c] = this.regionU + this.regionUVs[c] * a, this.uvs[c + 1] = this.regionV + this.regionUVs[c + 1] * b, c += 2 },
        computeWorldVertices: function(a, b, c, e) {
            var d = c.get_skeleton().bones,
                f = this.weights,
                g = this.bones,
                h = 0,
                i = 0,
                j = 0,
                k = 0,
                l = g.length,
                n, o, p, q, r, s;
            if (0 == c.attachmentVertices.length)
                for (; i < l;) { o = n = 0; for (c = g[i++] + i; i < c;) p = d[g[i]], q = f[j], r = f[j + 1], s = f[j + 2], n += (q * p.get_a() + r * p.get_b() + p.get_worldX()) * s, o += (q * p.get_c() + r * p.get_d() + p.get_worldY()) * s, i++, j += 3;
                    e[h] = n + a;
                    e[h + 1] = o + b;
                    h += 2 } else
                    for (var t = c.attachmentVertices; i < l;) {
                        o = n = 0;
                        for (c = g[i++] + i; i < c;) p = d[g[i]], q = f[j] + t[k], r = f[j + 1] + t[k + 1], s = f[j + 2], n += (q * p.get_a() + r * p.get_b() +
                            p.get_worldX()) * s, o += (q * p.get_c() + r * p.get_d() + p.get_worldY()) * s, i++, j += 3, k += 2;
                        e[h] = n + a;
                        e[h + 1] = o + b;
                        h += 2
                    }
        },
        __class__: ic
    });
    var ee = function(a, b) { this.prefix = a;
        this.pack = b };
    j["com.workinman.display.spine.platform.flambe.FlambeTextureLoader"] = ee;
    ee.__name__ = "com,workinman,display,spine,platform,flambe,FlambeTextureLoader".split(",");
    ee.__interfaces__ = [Ff];
    ee.prototype = {
        loadPage: function(a, b) {
            var c = this.pack.getTexture(this.prefix + Da.removeFileExtension(b));
            a.rendererObject = c;
            a.width = c.get_width();
            a.height =
                c.get_height()
        },
        loadRegion: function() {},
        __class__: ee
    };
    var he = function(a, b, c) { this._w = this._h = 0;
        J.call(this);
        this.meshAttachment = a;
        this.region = a.rendererObject;
        this.atlas = this.region.page.rendererObject;
        this.slot = b;
        this._flagRenderBoxes = c;
        a = this.region.rotate ? this.region.height : this.region.width;
        b = this.region.rotate ? this.region.width : this.region.height;
        this._w = a;
        this._h = b };
    j["com.workinman.display.spine.platform.flambe.MeshSprite"] = he;
    he.__name__ = "com,workinman,display,spine,platform,flambe,MeshSprite".split(",");
    he.__super__ = J;
    he.prototype = A(J.prototype, {
        dispose: function() { J.prototype.dispose.call(this);
            this.slot = this.atlas = this.region = this.meshAttachment = null },
        draw: function(a) {
            var b = this.meshAttachment.uvs,
                c = this.meshAttachment.triangles,
                e = this.worldVertices;
            if (C.__instanceof(a, Yb)) {
                var d;
                d = C.__cast(a, Yb);
                d = t.field(d, "_canvasCtx");
                for (var f = 0; f < c.length;) {
                    var g = 2 * c[f],
                        h = e[g],
                        i = e[g + 1],
                        j = b[g] * this.region.page.width,
                        k = b[g + 1] * this.region.page.height,
                        g = 2 * c[f + 1],
                        l = e[g],
                        n = e[g + 1],
                        o = b[g] * this.region.page.width,
                        p =
                        b[g + 1] * this.region.page.height,
                        g = 2 * c[f + 2],
                        q = e[g],
                        r = e[g + 1],
                        s = b[g] * this.region.page.width,
                        g = b[g + 1] * this.region.page.height;
                    a.save();
                    d.beginPath();
                    d.moveTo(h, i);
                    d.lineTo(l, n);
                    d.lineTo(q, r);
                    d.closePath();
                    this._flagRenderBoxes && (d.strokeStyle = "#00FF00", d.stroke());
                    d.clip();
                    var u = j * p + k * s + o * g - p * s - k * o - j * g;
                    d.transform((h * p + k * q + l * g - p * q - k * l - h * g) / u, (i * p + k * r + n * g - p * r - k * n - i * g) / u, (j * l + h * s + o * q - l * s - h * o - j * q) / u, (j * n + i * s + o * r - n * s - i * o - j * r) / u, (j * p * q + k * l * s + h * o * g - h * p * s - k * o * q - j * l * g) / u, (j * p * r + k * n * s + i * o * g - i * p * s - k * o * r - j * n * g) /
                        u);
                    d.drawImage(this.atlas.root.image, 0, 0);
                    a.restore();
                    f += 3
                }
            }
        },
        getNaturalWidth: function() { return this.region.width },
        getNaturalHeight: function() { return this.region.height },
        __class__: he
    });
    var ie = function(a, b) {
        this._w = this._h = 0;
        J.call(this);
        this.regionAttachment = a;
        this.region = a.rendererObject;
        this.atlas = this.region.page.rendererObject;
        this.slot = b;
        var c;
        c = this.region.rotate ? this.region.height : this.region.width;
        var e;
        e = this.region.rotate ? this.region.width : this.region.height;
        this._w = c;
        this._h = e;
        this.rotation.set__(-a.rotation);
        this.scaleX.set__(a.scaleX * (a.width / this.region.originalWidth));
        this.scaleY.set__(a.scaleY * (a.height / this.region.originalHeight));
        this.region.rotate && (this.scaleY.set__(a.scaleX * (a.width / this.region.originalWidth)), this.scaleX.set__(a.scaleY * (a.height / this.region.originalHeight)));
        var d = -a.rotation * Math.PI / 180,
            f = Math.cos(d),
            d = Math.sin(d),
            g = -a.width / 2 * Math.abs(a.scaleX),
            h = -a.height / 2 * Math.abs(a.scaleY),
            i = this.region.offsetX * this.scaleX._value,
            j = (this.region.originalHeight - this.region.height - this.region.offsetY) *
            this.scaleY._value;
        0 > a.scaleX && (g = this.region.rotate ? g - e * (a.width / this.region.originalWidth) : a.width / 2 * Math.abs(a.scaleX));
        0 > a.scaleY && (h = this.region.rotate ? h + c * (a.height / this.region.originalHeight) : a.height / 2 * Math.abs(a.scaleY));
        this.region.rotate && (c = this.rotation, c.set__(c._value + 90), g += e * (a.width * Math.abs(a.scaleX) / this.region.originalWidth));
        this.x.set__(a.x + g * f - h * d + i * f - j * d);
        this.y.set__(-a.y + g * d + h * f + i * d + j * f)
    };
    j["com.workinman.display.spine.platform.flambe.RegionSprite"] = ie;
    ie.__name__ = "com,workinman,display,spine,platform,flambe,RegionSprite".split(",");
    ie.__super__ = J;
    ie.prototype = A(J.prototype, { dispose: function() { J.prototype.dispose.call(this);
            this.slot = this.atlas = this.region = this.regionAttachment = null }, draw: function(a) { a.drawSubTexture(this.atlas, 0, 0, this.region.x, this.region.y, this._w, this._h) }, getNaturalWidth: function() { return this.region.originalWidth }, getNaturalHeight: function() { return this.region.originalHeight }, __class__: ie });
    var jc = function(a, b) {
        null == b && (b = !1);
        this.colorRegionBox = 65280;
        this.colorBoundingBox = 16711680;
        ja.call(this);
        this._holder =
            new ea;
        gc.yDown = !0;
        this.skeleton = new sf(a);
        this.skeleton.updateWorldTransform();
        this._entities = new sb;
        this._sprites = new sb;
        this._regions = new sb;
        this._meshes = new sb;
        this._weightedMeshes = new sb;
        this._flagRenderBoxes = b;
        this.drawSprites(!0)
    };
    j["com.workinman.display.spine.platform.flambe.SkeletonSprite"] = jc;
    jc.__name__ = "com,workinman,display,spine,platform,flambe,SkeletonSprite".split(",");
    jc.__super__ = ja;
    jc.prototype = A(ja.prototype, {
        get_name: function() { return "SkeletonSprite_7" },
        onAdded: function() { this.owner.addChild(this._holder) },
        dispose: function() {
            null != this.owner && this.owner.removeChild(this._holder);
            ja.prototype.dispose.call(this);
            null != this.skeleton && this.skeleton.dispose();
            this.skeleton = null;
            null != this._holder && this._holder.dispose();
            this._holder = null;
            if (null != this._sprites)
                for (var a = this._sprites.iterator(); a.hasNext();) a.next().dispose();
            this._sprites = null;
            if (null != this._regions)
                for (a = this._regions.iterator(); a.hasNext();) a.next().dispose();
            this._regions = null;
            if (null != this._entities)
                for (a = this._entities.iterator(); a.hasNext();) a.next().dispose();
            this._entities = null;
            if (null != this._meshes)
                for (a = this._meshes.iterator(); a.hasNext();) a.next().dispose();
            this._meshes = null;
            if (null != this._weightedMeshes)
                for (a = this._weightedMeshes.iterator(); a.hasNext();) a.next().dispose();
            this._weightedMeshes = null
        },
        get_regions: function() { return this._regions },
        get_sprites: function() { return this._sprites },
        get_entities: function() { return this._entities },
        onUpdate: function(a) { ja.prototype.onUpdate.call(this, a);
            this.draw() },
        draw: function() { this.drawSprites(!1) },
        drawSprites: function(a) {
            for (var b =
                    this._sprites.iterator(); b.hasNext();) b.next().set_visible(!1);
            b = this.skeleton.drawOrder;
            a && (b = this.skeleton.slots);
            for (var a = 0, c = b.length; a < c;) {
                var e = a++,
                    e = b[e];
                if (null != e.get_attachment())
                    if (B.is(e.get_attachment(), Xb)) {
                        var d;
                        d = C.__cast(e.get_attachment(), Xb);
                        if (null != d) {
                            var f = this._sprites.h[d.__id__];
                            if (null == f) {
                                var g = new ie(d, e);
                                g.set_pixelSnapping(!1);
                                f = new Kc;
                                f.set_pixelSnapping(!1);
                                var h = (new ea).add(f);
                                h.addChild((new ea).add(g));
                                this._flagRenderBoxes && this._renderBoxes(e, d, h);
                                this._sprites.set(d,
                                    f);
                                this._regions.set(d, g);
                                this._entities.set(d, h);
                                this._holder.addChild(h)
                            }
                            this._holder.addChild(this._entities.h[d.__id__]);
                            g = e.get_bone();
                            f.set_visible(!0);
                            f.a.set__(g.get_a());
                            f.b.set__(g.get_b());
                            f.c.set__(g.get_c());
                            f.d.set__(g.get_d());
                            f.e.set__(g.get_worldX());
                            f.f.set__(g.get_worldY());
                            f.alpha.set__(this.skeleton.a * e.a * d.a);
                            f = this.skeleton.g * e.g * d.g;
                            g = this.skeleton.b * e.b * d.b;
                            e = "0x" + this.toHexColor(Math.floor(255 * this.skeleton.r * e.r * d.r)) + this.toHexColor(Math.floor(255 * f)) + this.toHexColor(Math.floor(255 *
                                g));
                            this._regions.h[d.__id__].color = B.parseInt(e)
                        }
                    } else B.is(e.get_attachment(), rb) ? (d = C.__cast(e.get_attachment(), rb), null != d && (f = this._sprites.h[d.__id__], null == f && (g = new he(d, e, this._flagRenderBoxes), g.set_pixelSnapping(!1), f = new Kc, f.set_pixelSnapping(!1), h = (new ea).add(f), h.addChild((new ea).add(g)), this._sprites.set(d, f), this._entities.set(d, h), this._meshes.set(d, g), this._holder.addChild(h)), this._holder.addChild(this._entities.h[d.__id__]), g = d.updateWorldVertices(e, !0), this._meshes.h[d.__id__].worldVertices =
                        g, f.set_visible(!0), f.alpha.set__(this.skeleton.a * e.a * d.a))) : B.is(e.get_attachment(), ic) && (d = C.__cast(e.get_attachment(), ic), null != d && (f = this._sprites.h[d.__id__], null == f && (g = new je(d, e), g.set_pixelSnapping(!1), f = new Kc, f.set_pixelSnapping(!1), h = (new ea).add(f), h.addChild((new ea).add(g)), this._sprites.set(d, f), this._weightedMeshes.set(d, g), this._entities.set(d, h), this._holder.addChild(h)), g = Ha.allocFloat(d.uvs.length), d.computeWorldVertices(this.skeleton.x, this.skeleton.y, e, g), this._weightedMeshes.h[d.__id__].worldVertices =
                        g, this._holder.addChild(this._entities.h[d.__id__]), f.set_visible(!0), f.alpha.set__(this.skeleton.a * e.a * d.a)))
            }
        },
        _renderBoxes: function(a, b, c) {
            var e, d = new Hc,
                f;
            f = this.skeleton.flipX ? -1 : 1;
            var g;
            g = this.skeleton.flipY ? -1 : 1;
            f = a.get_bone().get_worldRotationX() * f * g;
            f = f * -Math.PI / 180;
            g = 0;
            for (var h = this.skeleton.slots.length; g < h;) {
                var i = g++,
                    j = this.skeleton.slots[i];
                if (null != this.skeleton.get_data().defaultSkin.get_attachments()[i])
                    for (i = this.skeleton.get_data().defaultSkin.get_attachments()[i].iterator(); i.hasNext();) {
                        var k =
                            i.next(),
                            l;
                        try { l = C.__cast(k, hc) } catch (n) { l = null }
                        if (null != l && l.get_name() == b.get_name()) {
                            var k = 0,
                                o = l.vertices.length;
                            d.vertices.splice(l.vertices.length, d.vertices.length - l.vertices.length);
                            for (l.computeWorldVertices(this.skeleton.x, this.skeleton.y, j.get_bone(), d.vertices); k < o;) {
                                var p = k;
                                e = k + 2;
                                k == o - 2 && (e = 0);
                                var q = d.vertices[p] - j.get_bone().get_worldX(),
                                    p = d.vertices[p + 1] - j.get_bone().get_worldY(),
                                    r = d.vertices[e] - j.get_bone().get_worldX();
                                e = d.vertices[e + 1] - j.get_bone().get_worldY();
                                var s = q,
                                    t = p,
                                    q = Math.cos(f) *
                                    s - Math.sin(f) * t,
                                    p = Math.sin(f) * s + Math.cos(f) * t,
                                    s = r,
                                    t = e,
                                    r = Math.cos(f) * s - Math.sin(f) * t;
                                e = Math.sin(f) * s + Math.cos(f) * t;
                                s = Math.abs(Math.sqrt((q - r) * (q - r) + (p - e) * (p - e)));
                                r = 180 * Math.atan2(e - p, r - q) / Math.PI - 90;
                                e = new La(this.colorBoundingBox, 5, s);
                                e.x.set__(q);
                                e.y.set__(p);
                                e.rotation.set__(r);
                                c.addChild((new ea).add(e));
                                k += 2
                            }
                        }
                    }
            }
            d = new Hc;
            b.computeWorldVertices(this.skeleton.x, this.skeleton.y, a.get_bone(), d.vertices);
            b = 0;
            for (l = d.vertices.length; b < l;) h = b, i = b + 2, b == l - 2 && (i = 0), g = d.vertices[h] - a.get_bone().get_worldX(),
                h = d.vertices[h + 1] - a.get_bone().get_worldY(), j = d.vertices[i] - a.get_bone().get_worldX(), i = d.vertices[i + 1] - a.get_bone().get_worldY(), k = g, o = h, g = Math.cos(f) * k - Math.sin(f) * o, h = Math.sin(f) * k + Math.cos(f) * o, k = j, o = i, j = Math.cos(f) * k - Math.sin(f) * o, i = Math.sin(f) * k + Math.cos(f) * o, 0 > a.get_bone().get_worldScaleX() && (h *= -1, i *= -1), k = Math.abs(Math.sqrt((g - j) * (g - j) + (h - i) * (h - i))), j = 180 * Math.atan2(i - h, j - g) / Math.PI - 90, i = new La(this.colorRegionBox, 2, k), i.x.set__(g), i.y.set__(h), i.rotation.set__(j), c.addChild((new ea).add(i)),
                b += 2
        },
        toHexColor: function(a) { a = Math.max(0, Math.min(a, 255)); return "0123456789ABCDEF".charAt(Math.floor((a - a % 16) / 16)) + "0123456789ABCDEF".charAt(Math.floor(a % 16)) },
        __class__: jc,
        __properties__: A(ja.prototype.__properties__, { get_entities: "get_entities", get_sprites: "get_sprites", get_regions: "get_regions" })
    });
    var fe = function(a, b) { null == b && (b = !1);
        jc.call(this, a, b) };
    j["com.workinman.display.spine.platform.flambe.SkeletonAnimation"] = fe;
    fe.__name__ = "com,workinman,display,spine,platform,flambe,SkeletonAnimation".split(",");
    fe.__super__ = jc;
    fe.prototype = A(jc.prototype, { dispose: function() { jc.prototype.dispose.call(this) }, __class__: fe });
    var Bf = function(a) { this.regions = [];
        this.polygonPool = [];
        this.polygons = [];
        this._renderer = a };
    j["com.workinman.display.spine.platform.flambe.SkeletonRegions"] = Bf;
    Bf.__name__ = "com,workinman,display,spine,platform,flambe,SkeletonRegions".split(",");
    Bf.prototype = {
        dispose: function() {
            this._renderer = this.regions = null;
            for (var a = 0, b = this.polygons; a < b.length;) { var c = b[a];++a;
                null != c && c.dispose() } this.polygons =
                null;
            a = 0;
            for (b = this.polygonPool; a < b.length;) c = b[a], ++a, null != c && c.dispose();
            this.polygonPool = null
        },
        update: function(a, b, c, e) {
            for (var d = a.x, f = a.y, g = 0, h = this.polygons; g < h.length;) { var i = h[g];++g;
                this.polygonPool.push(i) } this.polygons = [];
            this.regions = [];
            a = a.drawOrder;
            g = 0;
            for (h = a.length; g < h;)
                if (i = g++, i = a[i], null != i.get_attachment() && B.is(i.get_attachment(), Xb)) {
                    var j;
                    j = C.__cast(i.get_attachment(), Xb);
                    j = this._renderer.get_regions().get(j);
                    if (!1 != this._renderer.get_sprites().get(j.regionAttachment).get_visible() &&
                        i.get_attachment() == j.regionAttachment) { this.regions.push(j.regionAttachment);
                        i = 0 < this.polygonPool.length ? this.polygonPool.pop() : new Hc;
                        this.polygons.push(i);
                        j.regionAttachment.computeWorldVertices(d, f, j.slot.get_bone(), i.vertices);
                        j = 0; for (var k = i.vertices.length; j < k;) i.vertices[j] *= c, j += 2;
                        j = 1; for (k = i.vertices.length; j < k;) i.vertices[j] *= e, j += 2 }
                } this.regions.reverse();
            this.polygons.reverse();
            b && this.aabbCompute()
        },
        aabbCompute: function() {
            for (var a = 2147483647, b = 2147483647, c = -2147483648, e = -2147483648,
                    d = 0, f = this.polygons.length; d < f;) { for (var g = this.polygons[d].vertices, h = 0, i = g.length; h < i;) var j = g[h],
                    k = g[h + 1],
                    a = Math.min(a, j),
                    b = Math.min(b, k),
                    c = Math.max(c, j),
                    e = Math.max(e, k),
                    h = h + 2;
                d++ } this.minX = a;
            this.minY = b;
            this.maxX = c;
            this.maxY = e
        },
        aabbContainsPoint: function(a, b) { return a >= this.minX && a <= this.maxX && b >= this.minY && b <= this.maxY },
        containsPoint: function(a, b) { for (var c = 0, e = this.polygons.length; c < e;) { if (this.polygons[c].containsPoint(a, b)) return this.regions[c];
                c++ } return null },
        __class__: Bf
    };
    var je = function(a,
        b) { this._w = this._h = 0;
        J.call(this);
        this.meshAttachment = a;
        this.region = a.rendererObject;
        this.atlas = this.region.page.rendererObject;
        this.slot = b; var c;
        c = this.region.rotate ? this.region.height : this.region.width; var e;
        e = this.region.rotate ? this.region.width : this.region.height;
        this._w = c;
        this._h = e };
    j["com.workinman.display.spine.platform.flambe.WeightedMeshSprite"] = je;
    je.__name__ = "com,workinman,display,spine,platform,flambe,WeightedMeshSprite".split(",");
    je.__super__ = J;
    je.prototype = A(J.prototype, {
        dispose: function() {
            J.prototype.dispose.call(this);
            this.slot = this.atlas = this.region = this.meshAttachment = null
        },
        draw: function(a) {
            var b = this.meshAttachment.uvs,
                c = this.meshAttachment.triangles,
                e = this.worldVertices;
            if (C.__instanceof(a, Yb)) {
                var d;
                d = C.__cast(a, Yb);
                d = t.field(d, "_canvasCtx");
                for (var f = 0; f < c.length;) {
                    var g = 2 * c[f],
                        h = e[g],
                        i = e[g + 1],
                        j = b[g] * this.region.page.width,
                        k = b[g + 1] * this.region.page.height,
                        g = 2 * c[f + 1],
                        l = e[g],
                        n = e[g + 1],
                        o = b[g] * this.region.page.width,
                        p = b[g + 1] * this.region.page.height,
                        g = 2 * c[f + 2],
                        q = e[g],
                        r = e[g + 1],
                        s = b[g] * this.region.page.width,
                        g = b[g +
                            1] * this.region.page.height;
                    a.save();
                    d.beginPath();
                    d.moveTo(h, i);
                    d.lineTo(l, n);
                    d.lineTo(q, r);
                    d.closePath();
                    d.stroke();
                    d.clip();
                    var u = j * p + k * s + o * g - p * s - k * o - j * g;
                    d.transform((h * p + k * q + l * g - p * q - k * l - h * g) / u, (i * p + k * r + n * g - p * r - k * n - i * g) / u, (j * l + h * s + o * q - l * s - h * o - j * q) / u, (j * n + i * s + o * r - n * s - i * o - j * r) / u, (j * p * q + k * l * s + h * o * g - h * p * s - k * o * q - j * l * g) / u, (j * p * r + k * n * s + i * o * g - i * p * s - k * o * r - j * n * g) / u);
                    d.drawImage(this.atlas.root.image, 0, 0);
                    a.restore();
                    f += 3
                }
            }
        },
        getNaturalWidth: function() { return this.region.width },
        getNaturalHeight: function() { return this.region.height },
        __class__: je
    });
    var Kc = function() { this._flagDirtyMatrix = !1;
        J.call(this);
        this.a = new qa(1, o(this, this._dirtyWrapperMatrix));
        this.b = new qa(0, o(this, this._dirtyWrapperMatrix));
        this.c = new qa(0, o(this, this._dirtyWrapperMatrix));
        this.d = new qa(-1, o(this, this._dirtyWrapperMatrix));
        this.e = new qa(0, o(this, this._dirtyWrapperMatrix));
        this.f = new qa(0, o(this, this._dirtyWrapperMatrix)) };
    j["com.workinman.display.spine.platform.flambe.WrapperSprite"] = Kc;
    Kc.__name__ = "com,workinman,display,spine,platform,flambe,WrapperSprite".split(",");
    Kc.__super__ = J;
    Kc.prototype = A(J.prototype, { getLocalMatrix: function() { this._flagDirtyMatrix && (this._flagDirtyMatrix = !1, this._localMatrix.set(this.a._value, this.c._value, -this.b._value, -this.d._value, this.e._value, this.f._value)); return this._localMatrix }, _dirtyWrapperMatrix: function() { this._flagDirtyMatrix = !0 }, __class__: Kc });
    var pa = function(a) {
        x.call(this, a);
        this._textString = "";
        this._textDisplay = new bd(i.get_instance().get_assets().getFont(null == a.font ? i.get_instance().get_localize().get_defaultFont() :
            a.font), "");
        this.setImageSprite(this._textDisplay);
        this._textDisplay.set_pointerEnabled(!1);
        this._textDisplay.set_align(null == a.align ? ta.Center : a.align);
        null != a.width && this._textDisplay.wrapWidth.set__(a.width);
        null != a.lineSpacing && this._textDisplay.lineSpacing.set__(a.lineSpacing);
        null != a.letterSpacing && this._textDisplay.letterSpacing.set__(a.letterSpacing);
        this.render();
        this.set_text(a.text)
    };
    j["com.workinman.display.text.TextBase"] = pa;
    pa.__name__ = ["com", "workinman", "display", "text", "TextBase"];
    pa.__super__ = x;
    pa.prototype = A(x.prototype, {
        dispose: function() { null != this._textDisplay && (this._textDisplay.dispose(), this._textDisplay = null);
            this._textString = null;
            x.prototype.dispose.call(this) },
        _determineFormat: function(a) { C.__instanceof(a, bd) ? this._setFormat(ha.TEXT) : x.prototype._determineFormat.call(this, a) },
        _cleanOldFormat: function(a) { switch (a[1]) {
                case 3:
                    break;
                default:
                    x.prototype._cleanOldFormat.call(this, a) } },
        get_textDisplay: function() { return this._textDisplay },
        get_text: function() { return this._textString },
        set_text: function(a) { a != this._textString && (this._textString = a, this._renderTextToDisplay()); return this._textString },
        _renderTextToDisplay: function() { this._textDisplay.set_text(this._textString) },
        __class__: pa,
        __properties__: A(x.prototype.__properties__, { set_text: "set_text", get_text: "get_text", get_textDisplay: "get_textDisplay" })
    });
    var L = function(a) { this._flagLocalize = null == a.localize ? !0 : a.localize;
        pa.call(this, a) };
    j["com.workinman.display.text.TextLocalized"] = L;
    L.__name__ = ["com", "workinman", "display",
        "text", "TextLocalized"
    ];
    L.__super__ = pa;
    L.prototype = A(pa.prototype, {
        swapTextToDisplay: function(a) { this._textString = a;
            this._renderTextToDisplay() },
        get_doLocalize: function() { return this._flagLocalize },
        set_doLocalize: function(a) { a != this._flagLocalize && (this._flagLocalize = a, this._renderTextToDisplay()); return this.get_doLocalize() },
        _renderTextToDisplay: function() {
            if (this._flagLocalize) {
                var a = i.get_instance().get_localize().getLocalizeData(this._textString);
                this.offsetX = a.get_offsetX();
                this.offsetY = a.get_offsetY();
                this.set_scale(a.get_scale());
                a.get_fontName() != this._textDisplay._font.name && this._textDisplay.set_font(i.get_instance().get_assets().getFont(a.get_fontName(), !0));
                this._textDisplay.set_text(a.get_string());
                this.height = this._textDisplay.getNaturalHeight();
                this.render()
            } else pa.prototype._renderTextToDisplay.call(this)
        },
        __class__: L,
        __properties__: A(pa.prototype.__properties__, { set_doLocalize: "set_doLocalize", get_doLocalize: "get_doLocalize" })
    });
    var ba = j["com.workinman.display.ui._ButtonBase.ButtonState"] = { __ename__: "com,workinman,display,ui,_ButtonBase,ButtonState".split(","), __constructs__: ["_STATE_UP", "_STATE_DOWN", "_STATE_OVER", "_STATE_CLICK"] };
    ba._STATE_UP = ["_STATE_UP", 0];
    ba._STATE_UP.toString = g;
    ba._STATE_UP.__enum__ = ba;
    ba._STATE_DOWN = ["_STATE_DOWN", 1];
    ba._STATE_DOWN.toString = g;
    ba._STATE_DOWN.__enum__ = ba;
    ba._STATE_OVER = ["_STATE_OVER", 2];
    ba._STATE_OVER.toString = g;
    ba._STATE_OVER.__enum__ = ba;
    ba._STATE_CLICK = ["_STATE_CLICK", 3];
    ba._STATE_CLICK.toString = g;
    ba._STATE_CLICK.__enum__ = ba;
    ba.__empty_constructs__ = [ba._STATE_UP, ba._STATE_DOWN, ba._STATE_OVER, ba._STATE_CLICK];
    var Ie = function(a, b, c) { this._screenId = a;
        this._changeEvent = b;
        this._action = c };
    j["com.workinman.display.ui.ChangeActionData"] = Ie;
    Ie.__name__ = ["com", "workinman", "display", "ui", "ChangeActionData"];
    Ie.prototype = { get_screenId: function() { return this._screenId }, get_changeEvent: function() { return this._changeEvent }, get_action: function() { return this._action }, __class__: Ie, __properties__: { get_action: "get_action", get_changeEvent: "get_changeEvent", get_screenId: "get_screenId" } };
    var T = j["com.workinman.display.ui.SCREEN_STATE"] = { __ename__: ["com", "workinman", "display", "ui", "SCREEN_STATE"], __constructs__: ["IN", "OUT", "OPENED", "SUSPENDED"] };
    T.IN = ["IN", 0];
    T.IN.toString = g;
    T.IN.__enum__ = T;
    T.OUT = ["OUT", 1];
    T.OUT.toString = g;
    T.OUT.__enum__ = T;
    T.OPENED = ["OPENED", 2];
    T.OPENED.toString = g;
    T.OPENED.__enum__ = T;
    T.SUSPENDED = ["SUSPENDED", 3];
    T.SUSPENDED.toString = g;
    T.SUSPENDED.__enum__ = T;
    T.__empty_constructs__ = [T.IN, T.OUT, T.OPENED, T.SUSPENDED];
    var He = function(a) {
        this.screenDur = 0;
        this._layer = new ea;
        a.addChild(this._layer);
        this._isPaused = !1;
        this._screenData = new db;
        this._screenOpen = new db;
        this._screenRemoval = []
    };
    j["com.workinman.display.ui.ScreenManager"] = He;
    He.__name__ = ["com", "workinman", "display", "ui", "ScreenManager"];
    He.prototype = {
        set_interfaceDelegate: function(a) { return this._interfaceDelegate = a },
        addScreen: function(a, b) { this._screenData.set(a, b);
            b },
        closeScreen: function(a, b) {
            null == b && (b = !0);
            if (!1 != this._screenOpen.exists(a)) {
                this._screenOpen.get(a).close(b);
                for (var c = this._screenOpen.iterator(); c.hasNext();) {
                    var e =
                        c.next();
                    e.id != a && (this.currentScreen = e.id)
                }
                this.screenDur = 0;
                this._dispatchEventChange(oa.CLOSE_BEGIN, a)
            }
        },
        openScreen: function(a) {
            if (this._hasScreenData(a))
                if (this.isScreenOpen(a)) { var b = this._screenOpen.get(a);
                    b.root.parent.addChild(b.root);
                    this._dispatchEventChange(oa.OPEN_BEGIN, a);
                    this._dispatchEventChange(oa.OPEN_COMPLETE, a) } else b = Y.createInstance(this._screenData.get(a), [a, this._layer]), null != b && (b.set_flowDelegate(o(this, this._onEventScreenOutput)), b.open(!0), this._screenOpen.set(a, b), b, this.screenDur =
                    0, this.currentScreen = b.id, this._dispatchEventChange(oa.OPEN_BEGIN, a))
        },
        changeScreenTo: function(a, b) { null == b && (b = !1); for (var c = this._screenOpen.keys(); c.hasNext();) { var e = c.next();
                e != a && this._screenOpen.get(e).close(b) } this.openScreen(a) },
        getScreen: function(a) { return !1 == this._screenOpen.exists(a) ? null : this._screenOpen.get(a) },
        update: function(a) {
            if (!this._isPaused) {
                this.screenDur += a;
                for (var b = this._screenOpen.iterator(); b.hasNext();) {
                    var c = b.next();
                    c.update(a);
                    c.flagDispose && (this._screenRemoval.push(c.id),
                        c.dispose())
                }
                for (; 0 < this._screenRemoval.length;) this._screenOpen.remove(this._screenRemoval.pop())
            }
        },
        isScreenOpen: function(a) { return this._screenOpen.exists(a) },
        _onEventScreenOutput: function(a, b) { a == Ya.OPENED ? this._dispatchEventChange(oa.OPEN_COMPLETE, b) : a == Ya.CLOSED && this._dispatchEventChange(oa.CLOSE_COMPLETE, b) },
        _hasScreenData: function(a) { return this._screenData.exists(a) },
        _dispatchEventChange: function(a, b) { null != this._interfaceDelegate && this._interfaceDelegate(a, b);
            this.screenDur = 0 },
        __class__: He,
        __properties__: { set_interfaceDelegate: "set_interfaceDelegate" }
    };
    var ib = function(a, b, c, e, d, f) { this.id = a;
        this.actionOnComplete = c;
        this.actionData = e;
        this.inFunc = d;
        this.outFunc = f };
    j["com.workinman.display.ui.ScreenStateData"] = ib;
    ib.__name__ = ["com", "workinman", "display", "ui", "ScreenStateData"];
    ib.prototype = { __class__: ib };
    var ke = function(a) {
        Tb.call(this, a);
        this._tween = a.tween;
        this._id = a.id;
        this._hasTouch = this._active = !1;
        this._scratchPoint = new sa;
        this.setHitboxSize(this._imageSprite.getNaturalWidth(), this._imageSprite.getNaturalHeight());
        this._defaultInit()
    };
    j["com.workinman.display.ui.VirtualInput"] = ke;
    ke.__name__ = ["com", "workinman", "display", "ui", "VirtualInput"];
    ke.__super__ = Tb;
    ke.prototype = A(Tb.prototype, {
        dispose: function() { this._id = this._tween = null;
            this._hitBox.dispose();
            this._hitBox = null;
            Tb.prototype.dispose.call(this) },
        setHitboxSize: function(a, b) {
            if (null == this._hitBox) { this._hitBox = new La(16711680, 8, 8); var c = new ea;
                c.add(this._hitBox);
                this._imageEntity.addChild(c);
                this._hitBox.alpha.set__(0) } this._hitBox.scaleX.set__(a / 8);
            this._hitBox.scaleY.set__(b /
                8);
            return this
        },
        hitRectContains: function(a, b) { this._hitBox.getViewMatrix().inverseTransform(a, b, this._scratchPoint); return 0 <= this._scratchPoint.x && 8 >= this._scratchPoint.x && 0 <= this._scratchPoint.y && 8 >= this._scratchPoint.y },
        update: function(a) {
            Tb.prototype.update.call(this, a);
            this._hasTouch = !1;
            for (var b = 0, c = i.get_instance().get_input().multiTouch; b < c.length;) { var e = c[b];++b; if (e.down && this.hitRectContains(e.get_currentPos().x, e.get_currentPos().y)) { this._hasTouch = !0; break } }
            if (this._hasTouch && !1 == this._active) i.get_instance().get_input().onVirtualDown(this._id);
            else if (!1 == this._hasTouch && this._active) i.get_instance().get_input().onVirtualUp(this._id);
            this._defaultBehavior(a);
            this._active = this._hasTouch
        },
        _defaultInit: function() { this.alpha = 0.5 },
        _defaultBehavior: function() { this._hasTouch && !1 == this._active ? this._tween.tween(this, 0.1, { alpha: 0.9 }, !0, null, 0, "ralpha") : !1 == this._hasTouch && this._active && this._tween.tween(this, 0.1, { alpha: 0.5 }, !0, null, 0, "ralpha") },
        __class__: ke
    });
    var Q = function() {};
    j["com.workinman.events.WMEvent"] = Q;
    Q.__name__ = ["com", "workinman", "events",
        "WMEvent"
    ];
    Q.__interfaces__ = [Ga];
    Q.request = function(a, b) { return i.get_instance().get_pool().requestObject("WMEvent", Q).init(a, b) };
    Q.__super__ = N;
    Q.prototype = A(N.prototype, {
        init: function(a, b) { this._eventId = a;
            this._data = b; return this },
        dispose: function() { this._data = null;
            N.prototype.dispose.call(this) },
        destroy: function() { this._data = null;
            N.prototype.destroy.call(this) },
        get_eventId: function() { return this._eventId },
        get_data: function() { return this._data },
        __class__: Q,
        __properties__: A(N.prototype.__properties__, { get_data: "get_data", get_eventId: "get_eventId" })
    });
    var Rb = function() {};
    j["com.workinman.events.WMEventDispatcher"] = Rb;
    Rb.__name__ = ["com", "workinman", "events", "WMEventDispatcher"];
    Rb.__interfaces__ = [Ga];
    Rb.request = function() { return i.get_instance().get_pool().requestObject("WMEventDispatcher", Rb) };
    Rb.__super__ = N;
    Rb.prototype = A(N.prototype, {
        create: function() { this._eventTrackers = new db },
        dispose: function() {
            for (var a = this._eventTrackers.iterator(); a.hasNext();) a.next().dispose();
            Na.emptyMap(this._eventTrackers);
            N.prototype.dispose.call(this)
        },
        destroy: function() { this._eventTrackers = null;
            N.prototype.destroy.call(this) },
        addEventListener: function(a, b) { if (!this._eventTrackers.exists(a)) { var c = kc.request();
                this._eventTrackers.set(a, c) } this._eventTrackers.get(a).addEventListener(b) },
        removeEventListener: function(a, b) { this._eventTrackers.exists(a) && (this._eventTrackers.get(a).removeEventListener(b), this._eventTrackers.get(a).isEmtpy() && (this._eventTrackers.get(a).dispose(), this._eventTrackers.remove(a))) },
        dispatchEvent: function(a) {
            (function(b) {
                var c =
                    a.get_eventId();
                return b._eventTrackers.exists(c)
            })(this) && function(b) { var c = a.get_eventId(); return b._eventTrackers.get(c) }(this).dispatchEvent(a);
            a.dispose()
        },
        __class__: Rb
    });
    var kc = function() {};
    j["com.workinman.events._WMEventDispatcher.WMEventTracker"] = kc;
    kc.__name__ = ["com", "workinman", "events", "_WMEventDispatcher", "WMEventTracker"];
    kc.__interfaces__ = [Ga];
    kc.request = function() { return i.get_instance().get_pool().requestObject("WMEventTracker", kc) };
    kc.__super__ = N;
    kc.prototype = A(N.prototype, {
        create: function() {
            this._listeners = []
        },
        dispose: function() { for (; 0 < this._listeners.length;) this._listeners.pop();
            N.prototype.dispose.call(this) },
        destroy: function() { this._listeners = null;
            N.prototype.destroy.call(this) },
        addEventListener: function(a) { for (var b = 0, c = this._listeners; b < c.length;) { var e = c[b];++b; if (t.compareMethods(e, a)) return } this._listeners.push(a) },
        removeEventListener: function(a) { for (var b = this._listeners.length; 0 < b--;) t.compareMethods(this._listeners[b], a) && this._listeners.splice(b, 1) },
        dispatchEvent: function(a) {
            for (var b =
                    0, c = this._listeners; b < c.length;) { var e = c[b];++b;
                e(a) }
        },
        isEmtpy: function() { return 1 > this._listeners.length },
        __class__: kc
    });
    var le = function(a, b) { this._success = a;
        this._result = W.request();
        this._line1 = ob.request();
        this._line2 = ob.request();
        null != b && this._result.toPoint(b) };
    j["com.workinman.math.InterceptResult"] = le;
    le.__name__ = ["com", "workinman", "math", "InterceptResult"];
    le.prototype = {
        set_success: function(a) { return this._success = a },
        set_result: function(a) {
            null == a ? this._result.to(0, 0) : this._result.toPoint(a);
            return this._result
        },
        __class__: le,
        __properties__: { set_result: "set_result", set_success: "set_success" }
    };
    var mf = function(a, b, c) { this._worldRoot = a;
        this.worldCenterX = b;
        this.worldCenterY = c;
        this.focalLength = 300;
        this.set_rotation(0);
        this.pos = W.request();
        this._scratchPoint = new sa };
    j["com.workinman.math.WMCamera"] = mf;
    mf.__name__ = ["com", "workinman", "math", "WMCamera"];
    mf.prototype = {
        dispose: function() { this.pos.dispose();
            this._scratchPoint = this.pos = null },
        set_rotation: function(a) {
            this.rotation = a;
            this._worldRoot.rotation.set__(a);
            return this.rotation
        },
        getWorldPositionOfScreenPoint: function(a, b, c, e) { this._worldRoot.getViewMatrix().inverseTransform(a, b, this._scratchPoint);
            a = 1 / (this.focalLength / (this.focalLength - (this.pos.z - c)));
            e.x = this.pos.x + (this.worldCenterX + (this._scratchPoint.x - this.worldCenterX) * a);
            e.y = this.pos.y + (this.worldCenterY + (this._scratchPoint.y - this.worldCenterY) * a); return e },
        __class__: mf,
        __properties__: { set_rotation: "set_rotation" }
    };
    var ob = function() {};
    j["com.workinman.math.WMLine"] = ob;
    ob.__name__ = ["com", "workinman",
        "math", "WMLine"
    ];
    ob.__interfaces__ = [Ga];
    ob.request = function(a, b, c, e) { null == e && (e = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0); return i.get_instance().get_pool().requestObject("WMLine", ob).init(a, b, c, e) };
    ob.__super__ = N;
    ob.prototype = A(N.prototype, {
        init: function(a, b, c, e) { this._p0 = W.request();
            this._p1 = W.request();
            this._normal = W.request();
            this._vector = W.request();
            this._parametricDenom = W.request();
            this.toFloats(a, b, c, e);
            this._calcProperties(); return this },
        dispose: function() {
            this._p0.dispose();
            this._p0 =
                null;
            this._p1.dispose();
            this._p1 = null;
            this._normal.dispose();
            this._normal = null;
            this._vector.dispose();
            this._vector = null;
            this._parametricDenom.dispose();
            this._parametricDenom = null;
            N.prototype.dispose.call(this)
        },
        get_p0: function() { return this._p0 },
        get_p1: function() { return this._p1 },
        get_slope: function() { return this._slope },
        get_yIntercept: function() { return this._yIntercept },
        get_normal: function() { return this._normal },
        get_vector: function() { return this._vector },
        get_center: function() {
            return W.request(this._p0.x +
                this._vector.x / 2, this._p0.y + this._vector.y / 2)
        },
        get_centerX: function() { return this._p0.x + this._vector.x / 2 },
        get_centerY: function() { return this._p0.y + this._vector.y / 2 },
        get_parametricDenom: function() { return this._parametricDenom },
        get_length: function() { return this._length },
        set_length: function(a) { if (0 == this.get_length()) return this._length;
            this._p1.to(this._p0.x + this._vector.x * (a / this.get_length()), this._p0.y + this._vector.y * (a / this.get_length()));
            this._calcProperties(); return this._length },
        recalculate: function() { this._calcProperties() },
        getNewPoint: function(a, b) { null == b && (b = W.request());
            b.to(this.get_p0().x + this._vector.x * a, this.get_p0().y + this._vector.y * a); return b },
        equals: function(a) { return a.get_p0().equals(this.get_p0()) && a.get_p1().equals(this.get_p1()) },
        flip: function() { var a = this._p0.copy();
            this._p0.toPoint(this._p1);
            this._p1.toPoint(a);
            a.dispose();
            this._calcProperties() },
        clean: function() { this._p0.clean();
            this._p1.clean();
            this._calcProperties() },
        copy: function() { return ob.request().to(this._p0, this._p1) },
        to: function(a, b) {
            this._p0.toPoint(a);
            this._p1.toPoint(b);
            this._calcProperties();
            return this
        },
        toLine: function(a) { this._p0.toPoint(a.get_p0());
            this._p1.toPoint(a.get_p1());
            this._calcProperties(); return this },
        toFloats: function(a, b, c, e) { this._p0.to(a, b);
            this._p1.to(c, e);
            this._calcProperties(); return this },
        originTo: function(a, b, c) { null == c && (c = 0);
            this._p0.to(a, b, c);
            this._calcProperties(); return this },
        originToPoint: function(a) { this._p0.toPoint(a);
            this._calcProperties() },
        endTo: function(a, b, c) { null == c && (c = 0);
            this._p1.to(a, b, c);
            this._calcProperties() },
        endToPoint: function(a) { this._p1.toPoint(a);
            this._calcProperties() },
        rotate: function(a) { this._vector.rotateTo(a);
            this._p1.to(this._p0.x + this._vector.x, this._p0.y + this._vector.y);
            this._calcProperties();
            this._calcProperties() },
        rotateTo: function(a) { this._vector.rotateTo(a);
            this._p1.to(this._p0.x + this._vector.x, this._p0.y + this._vector.y);
            this._calcProperties() },
        shiftOrigin: function(a) { var b = this._vector.reverseCopy();
            b.set_length(a);
            this._p0.addPoint(b);
            b.dispose();
            this._calcProperties() },
        shiftEnd: function(a) {
            this.set_length(this.get_length() +
                a)
        },
        _calcProperties: function() {
            this._length = Math.round(1E3 * Math.sqrt((this._p0.x - this._p1.x) * (this._p0.x - this._p1.x) + (this._p0.y - this._p1.y) * (this._p0.y - this._p1.y))) / 1E3;
            this._vector.to(this.get_p1().x - this.get_p0().x, this.get_p1().y - this.get_p0().y);
            this._slope = this._vector.y / this._vector.x;
            0 == this.get_vector().x && (this._slope = 1E5);
            this._yIntercept = this.get_p0().y - this._slope * this.get_p0().x;
            this._parametricDenom.to(this.get_p1().x - this.get_p0().x, this.get_p1().y - this.get_p0().y);
            this._vector.pseudoCross(this._normal);
            this._normal.normalize()
        },
        testLineDot: function(a) { return this._vector.dot(a.get_normal()) },
        projectOntoLine: function(a) { var b = a.get_vector().dot(this.get_vector().normalizeCopy()); return ob.request().to(a.get_p0(), a.get_p1().addPointCopy(this._normal.copyAndResize(Math.sqrt(a.get_length() * a.get_length() - b * b)))) },
        testLineIntercept: function(a, b) {
            null == b && (b = new le(!1));
            this._inverseDeterminate = 1 / (-1 * this._slope - -1 * a.get_slope());
            b.set_success(!0);
            var c = W.request((-1 * a.get_yIntercept() - -1 * this._yIntercept) *
                this._inverseDeterminate, (a.get_slope() * this._yIntercept - this.get_slope() * a.get_yIntercept()) * this._inverseDeterminate, 0);
            b.set_result(c);
            c.dispose();
            return b
        },
        testLineSegmentIntercept: function(a, b, c) {
            var e = -a.get_vector().x * this._vector.y + this._vector.x * a.get_vector().y,
                d = this.get_p0().x - a.get_p0().x,
                f = this.get_p0().y - a.get_p0().y,
                b = (-this._vector.y * d + this._vector.x * f) / e,
                a = (a.get_vector().x * f - a.get_vector().y * d) / e;
            null == c && (c = new le(!1));
            c.set_success(!1);
            0 <= b && 1 >= b && 0 <= a && 1 >= a && (c.set_success(!0),
                a = W.request(this.get_p0().x + a * this._vector.x, this.get_p0().y + a * this._vector.y), c.set_result(a), a.dispose());
            return c
        },
        testPointSegmentIntercept: function(a, b) { null == b && (b = !1);
            this._xSegmentResult = 0 == this._parametricDenom.x ? 0 : (a.x - this.get_p0().x) / this._parametricDenom.x;
            this._ySegmentResult = 0 == this._parametricDenom.y ? 0 : (a.y - this.get_p0().y) / this._parametricDenom.y;
            b && null; return 0 <= this._xSegmentResult && 1 >= this._xSegmentResult && 0 <= this._ySegmentResult && 1 >= this._ySegmentResult ? !0 : !1 },
        toString: function() {
            return "[WMLine] (" +
                this._p0.x + ", " + this._p0.y + ", " + this._p0.z + ") ~> (" + this._p1.x + ", " + this._p1.y + ", " + this._p1.z + ") / Len: " + this._length
        },
        __class__: ob,
        __properties__: A(N.prototype.__properties__, { set_length: "set_length", get_length: "get_length", get_parametricDenom: "get_parametricDenom", get_centerY: "get_centerY", get_centerX: "get_centerX", get_center: "get_center", get_vector: "get_vector", get_normal: "get_normal", get_yIntercept: "get_yIntercept", get_slope: "get_slope", get_p1: "get_p1", get_p0: "get_p0" })
    });
    var Cf = function() {};
    j["com.workinman.math.WMMath"] = Cf;
    Cf.__name__ = ["com", "workinman", "math", "WMMath"];
    Cf.clamp = function(a, b, c, e) { null == e && (e = !1);
        e ? a > c ? a = b : a < b && (a = c) : a > c ? a = c : a < b && (a = b); return a };
    var W = function() {};
    j["com.workinman.math.WMPoint"] = W;
    W.__name__ = ["com", "workinman", "math", "WMPoint"];
    W.request = function(a, b, c) { null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0); return i.get_instance().get_pool().requestObject("WMPoint", W).init(a, b, c) };
    W.__super__ = N;
    W.prototype = A(N.prototype, {
        init: function(a, b, c) {
            return this.to(a,
                b, c)
        },
        get_angle: function() { return 180 * Math.atan2(this.y, this.x) / Math.PI },
        clean: function() { this.x = Math.round(1E3 * this.x) / 1E3;
            this.y = Math.round(1E3 * this.y) / 1E3;
            this.z = Math.round(1E3 * this.z) / 1E3; return this },
        to: function(a, b, c) { null == c && (c = 0);
            this.x = a;
            this.y = b;
            this.z = c;
            this.calculateLength(); return this },
        toPoint: function(a) { this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.calculateLength(); return this },
        add: function(a, b, c) { null == c && (c = 0);
            this.x += a;
            this.y += b;
            this.z += c;
            this.calculateLength(); return this },
        addPoint: function(a) {
            this.x +=
                a.x;
            this.y += a.y;
            this.z += a.z;
            this.calculateLength();
            return this
        },
        addCopy: function(a, b, c) { null == c && (c = 0); return W.request(this.x + a, this.y + b, this.z + c) },
        addPointCopy: function(a) { return W.request(this.x + a.x, this.y + a.y, this.z + a.z) },
        subtract: function(a, b, c) { null == c && (c = 0);
            this.x -= a;
            this.y -= b;
            this.z -= c;
            this.calculateLength(); return this },
        subtractPoint: function(a) { this.x -= a.x;
            this.y -= a.y;
            this.z -= a.z;
            this.calculateLength(); return this },
        subtractCopy: function(a, b, c) {
            null == c && (c = 0);
            return W.request(this.x - a, this.y -
                b, this.z - c)
        },
        subtractPointCopy: function(a) { return W.request(this.x - a.x, this.y - a.y, this.z - a.z) },
        multiply: function(a) { this.x *= a;
            this.y *= a;
            this.z *= a;
            this.clean();
            this.calculateLength(); return this },
        multiplyCopy: function(a) { return W.request(this.x * a, this.y * a, this.z * a) },
        divide: function(a) { this.x /= a;
            this.y /= a;
            this.z /= a;
            this.clean();
            this.calculateLength(); return this },
        divideCopy: function(a) { return W.request(this.x / a, this.y / a, this.z / a) },
        reverse: function() { this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z; return this },
        copy: function() { return W.request(this.x, this.y, this.z) },
        copyAndResize: function(a) { return 0 == a ? W.request(0, 0) : this.multiplyCopy(a / this._length) },
        equals: function(a) { return this.x == a.x && this.y == a.y && this.z == a.z },
        get_length: function() { return this._length },
        set_length: function(a) { if (0 == this._length || 0 >= a) return this.to(0, 0), this._length;
            this.multiply(a / this._length); return this._length },
        reverseCopy: function() { return W.request(-1 * this.x, -1 * this.y, -1 * this.z) },
        normalize: function() {
            if (0 == this._length) return this;
            this.x /= this._length;
            this.y /= this._length;
            this.z /= this._length;
            this.calculateLength();
            return this
        },
        normalizeTo: function(a) { this.set_length(a); return this },
        normalizeCopy: function() { return 0 == this._length ? W.request(0, 0, 0) : W.request(this.x / this._length, this.y / this._length, this.z / this._length) },
        normalizeCopyTo: function(a) { if (0 == this._length) return W.request(0, 0, 0);
            this._workFloat = a / this._length; return W.request(this.x * this._workFloat, this.y * this._workFloat, this.z * this._workFloat) },
        pseudoCross: function(a) {
            a.to(this.y,
                -this.x, this.z);
            return this
        },
        calculateLength: function() { this._length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); return this },
        rotate: function(a) { a *= Math.PI / 180;
            this._workFloat = this.x * Math.cos(a) - this.y * Math.sin(a);
            this.y = this.y * Math.cos(a) + this.x * Math.sin(a);
            this.x = this._workFloat; return this },
        rotateTo: function(a) { this.rotate(a - this.get_angle()); return this },
        getAngleBetween: function(a) {
            return 0 == a.get_length() || 0 == this.get_length() ? 0 : 180 / Math.PI * Math.acos((a.x * this.x + a.y * this.y) / (a.get_length() *
                this.get_length()))
        },
        rotateCopy: function(a) { var b = Math.cos(a * Math.PI / 180),
                a = Math.sin(a * Math.PI / 180); return W.request(this.x * b - this.y * a, this.x * a - this.y * b) },
        get_normalizedMagnitude: function() { var a = this.normalizeCopy(),
                b = Math.sqrt(a.x * a.x + a.y * a.y);
            a.dispose(); return b },
        toString: function() { return "{x:" + (this.x | 0) + ",y:" + (this.y | 0) + "}" },
        dot: function(a) { return this.x * a.x + this.y * a.y },
        __class__: W,
        __properties__: A(N.prototype.__properties__, {
            get_normalizedMagnitude: "get_normalizedMagnitude",
            set_length: "set_length",
            get_length: "get_length",
            get_angle: "get_angle"
        })
    });
    var Ia = j["com.workinman.math.Side"] = { __ename__: ["com", "workinman", "math", "Side"], __constructs__: ["TOP", "RIGHT", "BOTTOM", "LEFT"] };
    Ia.TOP = ["TOP", 0];
    Ia.TOP.toString = g;
    Ia.TOP.__enum__ = Ia;
    Ia.RIGHT = ["RIGHT", 1];
    Ia.RIGHT.toString = g;
    Ia.RIGHT.__enum__ = Ia;
    Ia.BOTTOM = ["BOTTOM", 2];
    Ia.BOTTOM.toString = g;
    Ia.BOTTOM.__enum__ = Ia;
    Ia.LEFT = ["LEFT", 3];
    Ia.LEFT.toString = g;
    Ia.LEFT.__enum__ = Ia;
    Ia.__empty_constructs__ = [Ia.TOP, Ia.RIGHT, Ia.BOTTOM, Ia.LEFT];
    var Ra = function() {};
    j["com.workinman.math.WMRectangle"] =
        Ra;
    Ra.__name__ = ["com", "workinman", "math", "WMRectangle"];
    Ra.__interfaces__ = [Ga];
    Ra.request = function(a, b, c, e) { null == e && (e = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0); return i.get_instance().get_pool().requestObject("WMRectangle", Ra).init(a, b, c, e) };
    Ra.fromRectangle = function(a) { return Ra.request(a.x, a.y, a.width, a.height) };
    Ra.__super__ = N;
    Ra.prototype = A(N.prototype, {
        create: function() { this._workLine = null },
        init: function(a, b, c, e) { this._x = a;
            this._y = b;
            this._width = c;
            this._height = e; return this },
        dispose: function() {
            null !=
                this._workLine && this._workLine.dispose();
            this._workLine = null;
            N.prototype.dispose.call(this)
        },
        _getWorkLine: function() { null == this._workLine && (this._workLine = ob.request()); return this._workLine },
        get_x: function() { return this._x },
        set_x: function(a) { return this._x = a },
        get_y: function() { return this._y },
        set_y: function(a) { return this._y = a },
        get_top: function() { return this._y },
        set_top: function(a) { return this._y = a },
        get_left: function() { return this._x },
        set_left: function(a) { return this._x = a },
        get_width: function() { return this._width },
        set_width: function(a) { return this._width = a },
        get_height: function() { return this._height },
        set_height: function(a) { return this._height = a },
        get_bottom: function() { return this._y + this._height },
        set_bottom: function(a) { this._y = a - this._height; return this.get_bottom() },
        get_right: function() { return this._x + this._width },
        set_right: function(a) { this._x = a - this._width; return this.get_right() },
        get_centerX: function() { return this._x + this._width / 2 },
        set_centerX: function(a) { this._x = a - this._width / 2; return this.get_centerX() },
        get_centerY: function() { return this._y + this._height / 2 },
        set_centerY: function(a) { this._y = a - this._height / 2; return this.get_centerY() },
        copy: function() { return Ra.request(this._x, this._y, this._width, this._height) },
        contains: function(a, b) { return a < this.get_left() || a > this.get_right() || b > this.get_bottom() || b < this.get_top() ? !1 : !0 },
        toXY: function(a, b) { this.set_x(a);
            this.set_y(b) },
        toWH: function(a, b) { this.set_width(a);
            this.set_height(b) },
        toXYWH: function(a, b, c, e) { this.toXY(a, b);
            this.toWH(c, e) },
        containsPoint: function(a) {
            return this.contains(a.x,
                a.y)
        },
        intersects: function(a) { return this.get_left() < a.get_right() && this.get_right() > a.get_left() && this.get_top() < a.get_bottom() && this.get_bottom() > a.get_top() },
        intersection: function(a) {
            var b = Ra.request();
            if (this.intersects(a)) {
                b.set_x(this.get_left() > a.get_left() ? this.get_left() : a.get_left());
                b.set_y(this.get_top() > a.get_top() ? this.get_top() : a.get_top());
                var c;
                c = this.get_right() < a.get_right() ? this.get_right() : a.get_right();
                a = this.get_bottom() < a.get_bottom() ? this.get_bottom() : a.get_bottom();
                b.set_width(c -
                    b.get_x());
                b.set_height(a - b.get_y())
            }
            return b
        },
        _setSideLine: function(a) { this._getWorkLine(); switch (a[1]) {
                case 0:
                    this._workLine.toFloats(this.get_left(), this.get_top(), this.get_right(), this.get_top()); break;
                case 1:
                    this._workLine.toFloats(this.get_right(), this.get_top(), this.get_right(), this.get_bottom()); break;
                case 2:
                    this._workLine.toFloats(this.get_left(), this.get_bottom(), this.get_right(), this.get_bottom()); break;
                case 3:
                    this._workLine.toFloats(this.get_left(), this.get_top(), this.get_left(), this.get_bottom()) } },
        sideLineIntercept: function(a, b, c) { null == this._workLine ? (this._setSideLine(b), null) : this._setSideLine(b); return this._workLine.testLineSegmentIntercept(a, !1, c) },
        toString: function() { return "{ WMRectangle x: " + this._x + " y: " + this._y + " width: " + this._width + " height: " + this._height + " }" },
        __class__: Ra,
        __properties__: A(N.prototype.__properties__, {
            set_centerY: "set_centerY",
            get_centerY: "get_centerY",
            set_centerX: "set_centerX",
            get_centerX: "get_centerX",
            set_right: "set_right",
            get_right: "get_right",
            set_bottom: "set_bottom",
            get_bottom: "get_bottom",
            set_height: "set_height",
            get_height: "get_height",
            set_width: "set_width",
            get_width: "get_width",
            set_left: "set_left",
            get_left: "get_left",
            set_top: "set_top",
            get_top: "get_top",
            set_y: "set_y",
            get_y: "get_y",
            set_x: "set_x",
            get_x: "get_x"
        })
    });
    var Oe = function() { this._sessions = new G;
        this._randomSeeds = new G };
    j["com.workinman.math.random.WMRandom"] = Oe;
    Oe.__name__ = ["com", "workinman", "math", "random", "WMRandom"];
    Oe.prototype = {
        random: function(a) {
            null == a && (a = "");
            return "" == a || null == this._randomSeeds.get(a) ?
                Math.random() : this._randomSeeds.get(a).random()
        },
        getRandomFloat: function(a, b, c) { null == c && (c = ""); return a + this.random(c) * (b - a) },
        getRandomInt: function(a, b, c) { null == c && (c = ""); return Math.floor(this.getRandomFloat(a, b + 1, c)) },
        __class__: Oe
    };
    var Ag = function() {};
    j["com.workinman.math.random.WeightTracker"] = Ag;
    Ag.__name__ = ["com", "workinman", "math", "random", "WeightTracker"];
    var og = function() {};
    j["com.workinman.math.random.WMSeededRandom"] = og;
    og.__name__ = ["com", "workinman", "math", "random", "WMSeededRandom"];
    og.prototype = { get_seed: function() { return this._seed }, set_seed: function(a) { this._seed = a; return this.get_seed() }, _randomInt: function() { return this.set_seed(16807 * this.get_seed() % 2147483647) & 1073741823 }, random: function() { return this._randomInt() / 1073741823 }, __class__: og, __properties__: { set_seed: "set_seed", get_seed: "get_seed" } };
    var q = j["com.workinman.math.tween.EASE"] = { __ename__: ["com", "workinman", "math", "tween", "EASE"], __constructs__: "IN,QUAD_IN,OUT,QUAD_OUT,EASE_IN_OUT,QUAD,LINEAR,EXPO,EXPO_IN,EXPO_OUT,ELASTIC,ELASTIC_IN,ELASTIC_OUT,BUMP,BUMP_IN,BUMP_OUT,BOUNCE,BOUNCE_IN,BOUNCE_OUT,CUBIC,CUBIC_IN,CUBIC_OUT,SPACE,SPACE_IN,SPACE_OUT,BLAST,BLAST_IN,BLAST_OUT,WAVE,WAVE_IN,WAVE_OUT,CIRCLE,CIRCLE_IN,CIRCLE_OUT".split(",") };
    q.IN = ["IN", 0];
    q.IN.toString = g;
    q.IN.__enum__ = q;
    q.QUAD_IN = ["QUAD_IN", 1];
    q.QUAD_IN.toString = g;
    q.QUAD_IN.__enum__ = q;
    q.OUT = ["OUT", 2];
    q.OUT.toString = g;
    q.OUT.__enum__ = q;
    q.QUAD_OUT = ["QUAD_OUT", 3];
    q.QUAD_OUT.toString = g;
    q.QUAD_OUT.__enum__ = q;
    q.EASE_IN_OUT = ["EASE_IN_OUT", 4];
    q.EASE_IN_OUT.toString = g;
    q.EASE_IN_OUT.__enum__ = q;
    q.QUAD = ["QUAD", 5];
    q.QUAD.toString = g;
    q.QUAD.__enum__ = q;
    q.LINEAR = ["LINEAR", 6];
    q.LINEAR.toString = g;
    q.LINEAR.__enum__ = q;
    q.EXPO = ["EXPO", 7];
    q.EXPO.toString = g;
    q.EXPO.__enum__ = q;
    q.EXPO_IN = ["EXPO_IN",
        8
    ];
    q.EXPO_IN.toString = g;
    q.EXPO_IN.__enum__ = q;
    q.EXPO_OUT = ["EXPO_OUT", 9];
    q.EXPO_OUT.toString = g;
    q.EXPO_OUT.__enum__ = q;
    q.ELASTIC = ["ELASTIC", 10];
    q.ELASTIC.toString = g;
    q.ELASTIC.__enum__ = q;
    q.ELASTIC_IN = ["ELASTIC_IN", 11];
    q.ELASTIC_IN.toString = g;
    q.ELASTIC_IN.__enum__ = q;
    q.ELASTIC_OUT = ["ELASTIC_OUT", 12];
    q.ELASTIC_OUT.toString = g;
    q.ELASTIC_OUT.__enum__ = q;
    q.BUMP = ["BUMP", 13];
    q.BUMP.toString = g;
    q.BUMP.__enum__ = q;
    q.BUMP_IN = ["BUMP_IN", 14];
    q.BUMP_IN.toString = g;
    q.BUMP_IN.__enum__ = q;
    q.BUMP_OUT = ["BUMP_OUT", 15];
    q.BUMP_OUT.toString =
        g;
    q.BUMP_OUT.__enum__ = q;
    q.BOUNCE = ["BOUNCE", 16];
    q.BOUNCE.toString = g;
    q.BOUNCE.__enum__ = q;
    q.BOUNCE_IN = ["BOUNCE_IN", 17];
    q.BOUNCE_IN.toString = g;
    q.BOUNCE_IN.__enum__ = q;
    q.BOUNCE_OUT = ["BOUNCE_OUT", 18];
    q.BOUNCE_OUT.toString = g;
    q.BOUNCE_OUT.__enum__ = q;
    q.CUBIC = ["CUBIC", 19];
    q.CUBIC.toString = g;
    q.CUBIC.__enum__ = q;
    q.CUBIC_IN = ["CUBIC_IN", 20];
    q.CUBIC_IN.toString = g;
    q.CUBIC_IN.__enum__ = q;
    q.CUBIC_OUT = ["CUBIC_OUT", 21];
    q.CUBIC_OUT.toString = g;
    q.CUBIC_OUT.__enum__ = q;
    q.SPACE = ["SPACE", 22];
    q.SPACE.toString = g;
    q.SPACE.__enum__ =
        q;
    q.SPACE_IN = ["SPACE_IN", 23];
    q.SPACE_IN.toString = g;
    q.SPACE_IN.__enum__ = q;
    q.SPACE_OUT = ["SPACE_OUT", 24];
    q.SPACE_OUT.toString = g;
    q.SPACE_OUT.__enum__ = q;
    q.BLAST = ["BLAST", 25];
    q.BLAST.toString = g;
    q.BLAST.__enum__ = q;
    q.BLAST_IN = ["BLAST_IN", 26];
    q.BLAST_IN.toString = g;
    q.BLAST_IN.__enum__ = q;
    q.BLAST_OUT = ["BLAST_OUT", 27];
    q.BLAST_OUT.toString = g;
    q.BLAST_OUT.__enum__ = q;
    q.WAVE = ["WAVE", 28];
    q.WAVE.toString = g;
    q.WAVE.__enum__ = q;
    q.WAVE_IN = ["WAVE_IN", 29];
    q.WAVE_IN.toString = g;
    q.WAVE_IN.__enum__ = q;
    q.WAVE_OUT = ["WAVE_OUT", 30];
    q.WAVE_OUT.toString = g;
    q.WAVE_OUT.__enum__ = q;
    q.CIRCLE = ["CIRCLE", 31];
    q.CIRCLE.toString = g;
    q.CIRCLE.__enum__ = q;
    q.CIRCLE_IN = ["CIRCLE_IN", 32];
    q.CIRCLE_IN.toString = g;
    q.CIRCLE_IN.__enum__ = q;
    q.CIRCLE_OUT = ["CIRCLE_OUT", 33];
    q.CIRCLE_OUT.toString = g;
    q.CIRCLE_OUT.__enum__ = q;
    q.__empty_constructs__ = [q.IN, q.QUAD_IN, q.OUT, q.QUAD_OUT, q.EASE_IN_OUT, q.QUAD, q.LINEAR, q.EXPO, q.EXPO_IN, q.EXPO_OUT, q.ELASTIC, q.ELASTIC_IN, q.ELASTIC_OUT, q.BUMP, q.BUMP_IN, q.BUMP_OUT, q.BOUNCE, q.BOUNCE_IN, q.BOUNCE_OUT, q.CUBIC, q.CUBIC_IN, q.CUBIC_OUT,
        q.SPACE, q.SPACE_IN, q.SPACE_OUT, q.BLAST, q.BLAST_IN, q.BLAST_OUT, q.WAVE, q.WAVE_IN, q.WAVE_OUT, q.CIRCLE, q.CIRCLE_IN, q.CIRCLE_OUT
    ];
    var z = function() {};
    j["com.workinman.math.tween.PennerManager"] = z;
    z.__name__ = ["com", "workinman", "math", "tween", "PennerManager"];
    z.getEaseFunction = function(a) {
        switch (a[1]) {
            case 0:
            case 1:
                return z._tweenEaseIn;
            case 2:
            case 3:
                return z._tweenEaseOut;
            case 4:
            case 5:
                return z._tweenEaseBoth;
            case 7:
                return z._tweenExpoBoth;
            case 8:
                return z._tweenExpoIn;
            case 9:
                return z._tweenExpoOut;
            case 10:
                return z._tweenElasticBoth;
            case 11:
                return z._tweenElasticIn;
            case 12:
                return z._tweenElasticOut;
            case 13:
                return z._tweenBumpBoth;
            case 14:
                return z._tweenBumpIn;
            case 15:
                return z._tweenBumpBoth;
            case 16:
                return z._tweenBounceBoth;
            case 17:
                return z._tweenBounceIn;
            case 18:
                return z._tweenBounceOut;
            case 19:
                return z._tweenCubicBoth;
            case 20:
                return z._tweenCubicIn;
            case 21:
                return z._tweenCubicOut;
            case 22:
                return z._tweenSpaceBoth;
            case 23:
                return z._tweenSpaceIn;
            case 24:
                return z._tweenSpaceOut;
            case 25:
                return z._tweenBlastBoth;
            case 26:
                return z._tweenBlastIn;
            case 27:
                return z._tweenBlastOut;
            case 28:
                return z._tweenWaveBoth;
            case 29:
                return z._tweenWaveIn;
            case 30:
                return z._tweenWaveOut;
            case 31:
                return z._tweenCircleBoth;
            case 32:
                return z._tweenCircleIn;
            case 33:
                return z._tweenCircleOut;
            case 6:
                return z._tweenLinear
        }
    };
    z._tweenLinear = function(a, b, c, e) { return a + c / e * b };
    z._tweenEaseBoth = function(a, b, c, e) { return z._easeInOutQuad(c, a, b, e) };
    z._tweenEaseIn = function(a, b, c, e) { return z._easeInQuad(c, a, b, e) };
    z._tweenEaseOut = function(a, b, c, e) { return z._easeOutQuad(c, a, b, e) };
    z._tweenExpoBoth = function(a, b, c, e) { return z._easeInOutExpo(c, a, b, e) };
    z._tweenExpoIn = function(a, b, c, e) { return z._easeInExpo(c, a, b, e) };
    z._tweenExpoOut = function(a, b, c, e) { return z._easeOutExpo(c, a, b, e) };
    z._tweenElasticBoth = function(a, b, c, e) { return z._easeInOutElastic(c, a, b, e) };
    z._tweenElasticIn = function(a, b, c, e) { return z._easeInElastic(c, a, b, e) };
    z._tweenElasticOut = function(a, b, c, e) { return z._easeOutElastic(c, a, b, e) };
    z._tweenBumpBoth = function(a, b, c, e) { return z._easeInOutBack(c, a, b, e) };
    z._tweenBumpIn = function(a,
        b, c, e) { return z._easeInBack(c, a, b, e) };
    z._tweenBounceBoth = function(a, b, c, e) { return z._easeInOutBounce(c, a, b, e) };
    z._tweenBounceIn = function(a, b, c, e) { return z._easeInBounce(c, a, b, e) };
    z._tweenBounceOut = function(a, b, c, e) { return z._easeOutBounce(c, a, b, e) };
    z._tweenCubicBoth = function(a, b, c, e) { return z._easeInOutCubic(c, a, b, e) };
    z._tweenCubicIn = function(a, b, c, e) { return z._easeInCubic(c, a, b, e) };
    z._tweenCubicOut = function(a, b, c, e) { return z._easeOutCubic(c, a, b, e) };
    z._tweenSpaceBoth = function(a, b, c, e) {
        return z._easeInOutQuart(c,
            a, b, e)
    };
    z._tweenSpaceIn = function(a, b, c, e) { return z._easeInQuart(c, a, b, e) };
    z._tweenSpaceOut = function(a, b, c, e) { return z._easeOutQuart(c, a, b, e) };
    z._tweenBlastBoth = function(a, b, c, e) { return z._easeInOutQuint(c, a, b, e) };
    z._tweenBlastIn = function(a, b, c, e) { return z._easeInQuint(c, a, b, e) };
    z._tweenBlastOut = function(a, b, c, e) { return z._easeOutQuint(c, a, b, e) };
    z._tweenWaveBoth = function(a, b, c, e) { return z._easeInOutSine(c, a, b, e) };
    z._tweenWaveIn = function(a, b, c, e) { return z._easeInSine(c, a, b, e) };
    z._tweenWaveOut = function(a,
        b, c, e) { return z._easeOutSine(c, a, b, e) };
    z._tweenCircleBoth = function(a, b, c, e) { return z._easeInOutCirc(c, a, b, e) };
    z._tweenCircleIn = function(a, b, c, e) { return z._easeInCirc(c, a, b, e) };
    z._tweenCircleOut = function(a, b, c, e) { return z._easeOutCirc(c, a, b, e) };
    z._easeInQuad = function(a, b, c, e) { return c * (a /= e) * a + b };
    z._easeOutQuad = function(a, b, c, e) { return -c * (a /= e) * (a - 2) + b };
    z._easeInOutQuad = function(a, b, c, e) { return 1 > (a /= e / 2) ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b };
    z._easeInExpo = function(a, b, c, e) {
        return 0 == a ? b : c * Math.pow(2, 10 *
            (a / e - 1)) + b
    };
    z._easeOutExpo = function(a, b, c, e) { return a == e ? b + c : c * (-Math.pow(2, -10 * a / e) + 1) + b };
    z._easeInOutExpo = function(a, b, c, e) { return 0 == a ? b : a == e ? b + c : 1 > (a /= e / 2) ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : c / 2 * (-Math.pow(2, -10 * --a) + 2) + b };
    z._easeInElastic = function(a, b, c, e) { return z._easeInElasticL(a, b, c, e) };
    z._easeInElasticL = function(a, b, c, e, d, f) {
        null == f && (f = -0.123456);
        null == d && (d = -0.123456);
        if (0 == a) return b;
        if (1 == (a /= e)) return b + c; - 0.123456 == f && (f = 0.3 * e); - 0.123456 == d || d < Math.abs(c) ? (d = c, c = f / 4) : c = f / (2 * Math.PI) * Math.asin(c /
            d);
        return -(d * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * e - c) * 2 * Math.PI / f)) + b
    };
    z._easeOutElastic = function(a, b, c, e) { return z._easeOutElasticL(a, b, c, e) };
    z._easeOutElasticL = function(a, b, c, e, d, f) { null == f && (f = -0.123456);
        null == d && (d = -0.123456); var g; if (0 == a) return b; if (1 == (a /= e)) return b + c; - 0.123456 == f && (f = 0.3 * e); - 0.123456 == d || d < Math.abs(c) ? (d = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / d); return d * Math.pow(2, -10 * a) * Math.sin((a * e - g) * 2 * Math.PI / f) + c + b };
    z._easeInOutElastic = function(a, b, c, e) {
        return z._easeInOutElasticL(a, b,
            c, e)
    };
    z._easeInOutElasticL = function(a, b, c, e, d, f) { null == f && (f = -0.123456);
        null == d && (d = -0.123456); var g; if (0 == a) return b; if (2 == (a /= e / 2)) return b + c; - 0.123456 == f && (f = 0.44999999999999996 * e); - 0.123456 == d || d < Math.abs(c) ? (d = c, g = f / 4) : g = f / (2 * Math.PI) * Math.asin(c / d); return 1 > a ? -0.5 * d * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * e - g) * 2 * Math.PI / f) + b : 0.5 * d * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * e - g) * 2 * Math.PI / f) + c + b };
    z._easeInBack = function(a, b, c, e) { return z._easeInBackL(a, b, c, e) };
    z._easeInBackL = function(a, b, c, e, d) {
        null == d && (d = -0.123456); - 0.123456 == d && (d = 1.70158);
        return c * (a /= e) * a * ((d + 1) * a - d) + b
    };
    z._easeInOutBack = function(a, b, c, e) { return z._easeInOutBackL(a, b, c, e) };
    z._easeInOutBackL = function(a, b, c, e, d) { null == d && (d = -0.123456); - 0.123456 == d && (d = 1.70158); return 1 > (a /= e / 2) ? c / 2 * a * a * (((d *= 1.525) + 1) * a - d) + b : c / 2 * ((a -= 2) * a * (((d *= 1.525) + 1) * a + d) + 2) + b };
    z._easeOutBounce = function(a, b, c, e) {
        return 0.36363636363636365 > (a /= e) ? c * 7.5625 * a * a + b : 0.7272727272727273 > a ? c * (7.5625 * (a -= 0.5454545454545454) * a + 0.75) + b : 0.9090909090909091 > a ? c * (7.5625 * (a -=
            0.8181818181818182) * a + 0.9375) + b : c * (7.5625 * (a -= 0.9545454545454546) * a + 0.984375) + b
    };
    z._easeInBounce = function(a, b, c, e) { return c - z._easeOutBounce(e - a, 0, c, e) + b };
    z._easeInOutBounce = function(a, b, c, e) { return a < e / 2 ? 0.5 * z._easeInBounce(2 * a, 0, c, e) + b : 0.5 * z._easeOutBounce(2 * a - e, 0, c, e) + 0.5 * c + b };
    z._easeInCubic = function(a, b, c, e) { return c * (a /= e) * a * a + b };
    z._easeOutCubic = function(a, b, c, e) { return c * ((a = a / e - 1) * a * a + 1) + b };
    z._easeInOutCubic = function(a, b, c, e) { return 1 > (a /= e / 2) ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b };
    z._easeInQuart =
        function(a, b, c, e) { return c * (a /= e) * a * a * a + b };
    z._easeOutQuart = function(a, b, c, e) { return -c * ((a = a / e - 1) * a * a * a - 1) + b };
    z._easeInOutQuart = function(a, b, c, e) { return 1 > (a /= e / 2) ? c / 2 * a * a * a * a + b : -c / 2 * ((a -= 2) * a * a * a - 2) + b };
    z._easeInQuint = function(a, b, c, e) { return c * (a /= e) * a * a * a * a + b };
    z._easeOutQuint = function(a, b, c, e) { return c * ((a = a / e - 1) * a * a * a * a + 1) + b };
    z._easeInOutQuint = function(a, b, c, e) { return 1 > (a /= e / 2) ? c / 2 * a * a * a * a * a + b : c / 2 * ((a -= 2) * a * a * a * a + 2) + b };
    z._easeInSine = function(a, b, c, e) { return -c * Math.cos(a / e * (Math.PI / 2)) + c + b };
    z._easeOutSine =
        function(a, b, c, e) { return c * Math.sin(a / e * (Math.PI / 2)) + b };
    z._easeInOutSine = function(a, b, c, e) { return -c / 2 * (Math.cos(Math.PI * a / e) - 1) + b };
    z._easeInCirc = function(a, b, c, e) { return -c * (Math.sqrt(1 - (a /= e) * a) - 1) + b };
    z._easeOutCirc = function(a, b, c, e) { return c * Math.sqrt(1 - (a = a / e - 1) * a) + b };
    z._easeInOutCirc = function(a, b, c, e) { return 1 > (a /= e / 2) ? -c / 2 * (Math.sqrt(1 - a * a) - 1) + b : c / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b };
    var R = j["com.workinman.math.tween.TWEEN_DIR"] = { __ename__: ["com", "workinman", "math", "tween", "TWEEN_DIR"], __constructs__: "TOP,TOP_RIGHT,RIGHT,BOTTOM_RIGHT,BOTTOM,BOTTOM_LEFT,LEFT,TOP_LEFT".split(",") };
    R.TOP = ["TOP", 0];
    R.TOP.toString = g;
    R.TOP.__enum__ = R;
    R.TOP_RIGHT = ["TOP_RIGHT", 1];
    R.TOP_RIGHT.toString = g;
    R.TOP_RIGHT.__enum__ = R;
    R.RIGHT = ["RIGHT", 2];
    R.RIGHT.toString = g;
    R.RIGHT.__enum__ = R;
    R.BOTTOM_RIGHT = ["BOTTOM_RIGHT", 3];
    R.BOTTOM_RIGHT.toString = g;
    R.BOTTOM_RIGHT.__enum__ = R;
    R.BOTTOM = ["BOTTOM", 4];
    R.BOTTOM.toString = g;
    R.BOTTOM.__enum__ = R;
    R.BOTTOM_LEFT = ["BOTTOM_LEFT", 5];
    R.BOTTOM_LEFT.toString = g;
    R.BOTTOM_LEFT.__enum__ = R;
    R.LEFT = ["LEFT", 6];
    R.LEFT.toString = g;
    R.LEFT.__enum__ = R;
    R.TOP_LEFT = ["TOP_LEFT", 7];
    R.TOP_LEFT.toString =
        g;
    R.TOP_LEFT.__enum__ = R;
    R.__empty_constructs__ = [R.TOP, R.TOP_RIGHT, R.RIGHT, R.BOTTOM_RIGHT, R.BOTTOM, R.BOTTOM_LEFT, R.LEFT, R.TOP_LEFT];
    var lc = function() {};
    j["com.workinman.math.tween.WMTweenDef"] = lc;
    lc.__name__ = ["com", "workinman", "math", "tween", "WMTweenDef"];
    lc.__interfaces__ = [Ga];
    lc.request = function(a, b, c, e, d) { return i.get_instance().get_pool().requestObject("WMTweenDef", lc).init(a, b, c, e, d) };
    lc.__super__ = N;
    lc.prototype = A(N.prototype, {
        create: function() { this._fields = [] },
        init: function(a, b, c, e, d) {
            this._target =
                a;
            this._duration = b;
            this._delay = d;
            a = 0;
            for (b = t.fields(c); a < b.length;) d = b[a], ++a, this._fields.push(mc.request(d, t.field(c, d)));
            this._easeFunction = z.getEaseFunction(null == e ? q.LINEAR : e);
            this._isComplete = !1;
            this._completionHandler = null;
            this._progress = 0;
            this._started = !1;
            return this
        },
        dispose: function() { for (; 0 < this._fields.length;) this._fields.pop().dispose();
            this._completionHandler = this._easeFunction = this._target = null;
            N.prototype.dispose.call(this) },
        destroy: function() { this._fields = null;
            N.prototype.destroy.call(this) },
        _start: function() { this._isComplete = !1;
            this._started = !0; for (var a = 0, b = this._fields; a < b.length;) { var c = b[a];++a;
                t.hasField(this._target, c.get_name()) ? c.set_origin(t.field(this._target, c.get_name())) : null != t.getProperty(this._target, c.get_name()) && c.set_origin(t.getProperty(this._target, c.get_name())) } },
        update: function(a) {
            if (0 < this._delay && (this._delay -= a, 0 < this._delay)) return;
            if (null == this._target) this._isComplete = !0;
            else if (!1 == this._started && this._start(), this._progress += a, this._progress > this._duration &&
                (this._progress = this._duration), this._ratio = Math.floor(1E3 * (this._progress / this._duration)) / 1E3, this._progress >= this._duration) { for (var a = 0, b = this._fields; a < b.length;) { var c = b[a];++a;
                    t.setProperty(this._target, c.get_name(), c.get_dest()) } null != this._completionHandler && this._completionHandler();
                this._isComplete = !0 } else {
                a = 0;
                for (b = this._fields; a < b.length;) c = b[a], ++a, this._diff = c.get_dest() - c.get_origin(), t.setProperty(this._target, c.get_name(), this._easeFunction(c.get_origin(), this._diff, this._progress,
                    this._duration))
            }
        },
        get_isComplete: function() { return this._isComplete },
        set_isComplete: function(a) { this._isComplete = a; return this.get_isComplete() },
        get_ratio: function() { return this._ratio },
        delay: function(a) { this._delay = a; return this },
        ease: function(a) { this._easeFunction = z.getEaseFunction(a); return this },
        onComplete: function(a) { this._completionHandler = a; return this },
        __class__: lc,
        __properties__: A(N.prototype.__properties__, { get_ratio: "get_ratio", set_isComplete: "set_isComplete", get_isComplete: "get_isComplete" })
    });
    var mc = function() {};
    j["com.workinman.math.tween.FieldStorage"] = mc;
    mc.__name__ = ["com", "workinman", "math", "tween", "FieldStorage"];
    mc.__interfaces__ = [Ga];
    mc.request = function(a, b) { return i.get_instance().get_pool().requestObject("FieldStorage", mc).init(a, b) };
    mc.__super__ = N;
    mc.prototype = A(N.prototype, {
        init: function(a, b) { this._name = a;
            this._origin = 0;
            this._dest = b; return this },
        dispose: function() { this._name = null;
            N.prototype.dispose.call(this) },
        get_name: function() { return this._name },
        get_origin: function() { return this._origin },
        set_origin: function(a) { return this._origin = a },
        get_dest: function() { return this._dest },
        __class__: mc,
        __properties__: A(N.prototype.__properties__, { get_dest: "get_dest", set_origin: "set_origin", get_origin: "get_origin", get_name: "get_name" })
    });
    var K = function() {};
    j["com.workinman.math.tween.WMTweenUtils"] = K;
    K.__name__ = ["com", "workinman", "math", "tween", "WMTweenUtils"];
    K.__properties__ = { get__workPoint: "get__workPoint" };
    K.easeBounceIn = function(a, b, c, e) {
        null == e && (e = 0);
        null == c && (c = !0);
        c && (a.visible = !0, a.set_scale(0.1),
            a.alpha = 0);
        b.tween(a, 0.15, { scale: 1.1, alpha: 1 }, !0, q.OUT, e);
        return b.tween(a, 0.15, { scale: 1 }, !1, q.IN)
    };
    K.easeBounceInScale = function(a, b, c, e, d) { null == d && (d = 0);
        null == e && (e = !0);
        e && (a.visible = !0, a.set_scale(0.1), a.alpha = 0);
        b.tween(a, 0.15, { scale: c + 0.1, alpha: 1 }, !0, q.OUT, d); return b.tween(a, 0.15, { scale: c }, !1, q.IN) };
    K.easeBounceOut = function(a, b, c, e) { null == e && (e = 0);
        null == c && (c = !1);
        c && (a.visible = !0, a.set_scale(1), a.alpha = 1);
        b.tween(a, 0.15, { scale: 1.1 }, !0, q.OUT, e); return b.tween(a, 0.15, { scale: 0.1, alpha: 0 }, !1, q.IN) };
    K.easeSlideInFromDir = function(a, b, c, e) { null == e && (e = 0);
        K.get__workPoint().toPoint(a.pos);
        K._modifyWorkPointByDir(c); return K.easeSlideIn(a, b, K.get__workPoint().x, K.get__workPoint().y, e) };
    K.easeSlideIn = function(a, b, c, e, d) { null == d && (d = 0);
        K.get__workPoint().toPoint(a.pos);
        a.pos.x = c;
        a.pos.y = e;
        a.visible = !0;
        a.alpha = 1; return b.tween(a.pos, 0.5, { x: K.get__workPoint().x, y: K.get__workPoint().y }, !0, q.OUT, d) };
    K.easeSlideOutToDir = function(a, b, c, e) {
        null == e && (e = 0);
        K.get__workPoint().toPoint(a.pos);
        K._modifyWorkPointByDir(c);
        return K.easeSlideOut(a, b, K.get__workPoint().x, K.get__workPoint().y, e)
    };
    K.easeSlideOut = function(a, b, c, e, d) { null == d && (d = 0);
        a.visible = !0;
        a.alpha = 1; return b.tween(a.pos, 0.5, { x: c, y: e }, !0, q.IN, d) };
    K.get__workPoint = function() { null == K.__workPoint && (K.__workPoint = W.request()); return K.__workPoint };
    K._modifyWorkPointByDir = function(a) {
        switch (a[1]) {
            case 3:
            case 2:
            case 1:
                K.get__workPoint().x += r.STAGE_WIDTH; break;
            case 5:
            case 6:
            case 7:
                K.get__workPoint().x -= r.STAGE_WIDTH }
        switch (a[1]) {
            case 7:
            case 0:
            case 1:
                K.get__workPoint().y -=
                    560;
                break;
            case 5:
            case 4:
            case 3:
                K.get__workPoint().y += 560
        }
    };
    var Xa = function() {};
    j["com.workinman.math.tween.WMTweener"] = Xa;
    Xa.__name__ = ["com", "workinman", "math", "tween", "WMTweener"];
    Xa.__interfaces__ = [Ga];
    Xa.__properties__ = { get__nullTarget: "get__nullTarget" };
    Xa.request = function() { return i.get_instance().get_pool().requestObject("WMTweener", Xa) };
    Xa.get__nullTarget = function() { null == Xa.__nullTarget && (Xa.__nullTarget = {}); return Xa.__nullTarget };
    Xa.__super__ = N;
    Xa.prototype = A(N.prototype, {
        create: function() {
            this._targets = []
        },
        dispose: function() { for (; 0 < this._targets.length;) this._targets.pop().dispose();
            N.prototype.dispose.call(this) },
        destroy: function() { this._targets = null;
            N.prototype.destroy.call(this) },
        update: function(a) { for (var b = this._targets.length; 0 < b--;) this._targets[b].update(a), this._targets[b].get_isComplete() && (this._targets[b].dispose(), this._targets.splice(b, 1)) },
        hasTween: function(a) { for (var b = 0, c = this._targets; b < c.length;) { var e = c[b];++b; if (e.get_target() == a) return !0 } return !1 },
        tween: function(a, b, c, e, d,
            f, g) { null == g && (g = "def");
            null == f && (f = 0);
            null == e && (e = !1);
            b = lc.request(a, b, c, d, f);
            c = 0; for (d = this._targets; c < d.length;)
                if (f = d[c], ++c, f.get_target() == a) return e && f.clearTweens(g), f.addTween(b, g), b;
            a = Ja.request(a);
            this._targets.push(a);
            a.addTween(b, g); return b },
        stop: function(a) { for (var b = this._targets.length; 0 < b--;)
                if (this._targets[b].get_target() == a) { this._targets[b].dispose();
                    this._targets.splice(b, 1); break } },
        stopThread: function(a, b) {
            for (var c = this._targets.length; 0 < c--;)
                if (this._targets[c].get_target() ==
                    a) { this._targets[c].clearTweens(b); break }
        },
        stopAllTweens: function() { for (; 0 < this._targets.length;) this._targets.pop().dispose() },
        __class__: Xa
    });
    var Ja = function() {};
    j["com.workinman.math.tween.WMTweenTracker"] = Ja;
    Ja.__name__ = ["com", "workinman", "math", "tween", "WMTweenTracker"];
    Ja.__interfaces__ = [Ga];
    Ja.request = function(a) { return i.get_instance().get_pool().requestObject("WMTweenTracker", Ja).init(a) };
    Ja.__super__ = N;
    Ja.prototype = A(N.prototype, {
        create: function() { this._tweens = new G },
        init: function(a) {
            this._target =
                a;
            this._isComplete = !1;
            this._threadCount = 0;
            return this
        },
        dispose: function() { this.clearAllTweens();
            this._target = null;
            N.prototype.dispose.call(this) },
        destroy: function() { this._tweens = null;
            N.prototype.destroy.call(this) },
        update: function(a) { for (var b = this._tweens.keys(); b.hasNext();) { var c = b.next();
                Ja._tweenUpdate.push(c) } for (; 0 < Ja._tweenUpdate.length;) this._updateThread(a, Ja._tweenUpdate.pop());
            this._runRemoval();
            1 > this._threadCount && (this._isComplete = !0, this._dispatchTweensAllComplete(this._target)) },
        _updateThread: function(a, b) { 1 > this._tweens.get(b).length ? Ja._tweenRemoval.push(b) : (this._tweens.get(b)[0].update(a), this._tweens.get(b)[0].get_isComplete() && (this._tweens.get(b)[0].dispose(), this._tweens.get(b).splice(0, 1), this._updateThread(a, b))) },
        _dispatchTweensAllComplete: function(a) { i.get_instance().get_dispatcher().dispatchEvent(Q.request(k.TWEENS_ALL_COMPLETE, function() { var b = new G;
                b.set("target", a); return b }(this))) },
        get_target: function() { return this._target },
        get_isComplete: function() { return this._isComplete },
        set_isComplete: function(a) { return this._isComplete = a },
        clearAllTweens: function() { for (var a = this._tweens.keys(); a.hasNext();) { var b = a.next();
                Ja._tweenUpdate.push(b) } for (; 0 < Ja._tweenUpdate.length;) this.clearTweens(Ja._tweenUpdate.pop()) },
        clearTweens: function(a) { if (null != this._tweens.get(a)) { for (; 0 < this._tweens.get(a).length;) this._tweens.get(a).pop().dispose();
                Ja._tweenRemoval.push(a);
                this._runRemoval() } },
        _runRemoval: function() {
            for (; 0 < Ja._tweenRemoval.length;) this._tweens.remove(Ja._tweenRemoval.pop()),
                this._threadCount--
        },
        addTween: function(a, b) { if (null == this._tweens.get(b)) { this._threadCount++; var c = [];
                this._tweens.set(b, c);
                c } this._tweens.get(b).push(a) },
        __class__: Ja,
        __properties__: A(N.prototype.__properties__, { set_isComplete: "set_isComplete", get_isComplete: "get_isComplete", get_target: "get_target" })
    });
    var Je = function() { this._caches = new G;
        this._emptyParams = [] };
    j["com.workinman.pooling.CacheManager"] = Je;
    Je.__name__ = ["com", "workinman", "pooling", "CacheManager"];
    Je.prototype = {
        dispose: function() {
            for (var a =
                    this._caches.iterator(); a.hasNext();) a.next().dispose();
            this._emptyParams = this._caches = null
        },
        processFill: function(a) { for (var b = this._caches.iterator(); b.hasNext();)
                if (!1 == b.next().fillCache(a)) return !1; return !0 },
        __class__: Je
    };
    var pg = function() {};
    j["com.workinman.pooling.ElementCache"] = pg;
    pg.__name__ = ["com", "workinman", "pooling", "ElementCache"];
    pg.prototype = {
        dispose: function() { for (; 0 < this._cache.length;) this._cache.pop().destroy();
            this._emptyParams = this._type = this._cache = null },
        fillCache: function(a) {
            for (var b; this._cache.length <
                this._initFill;)
                if (this._totalFill++, b = Y.createInstance(this._type, this._emptyParams), b.setReturnFunction(o(this, this.returnFunction)), b.dispose(), 0 < a && 0 >= a--) return !1;
            return !0
        },
        returnFunction: function(a) { this._cache.push(a) },
        __class__: pg
    };
    var qg = function() {};
    j["com.workinman.pooling.ICacheableElement"] = qg;
    qg.__name__ = ["com", "workinman", "pooling", "ICacheableElement"];
    qg.prototype = { __class__: qg };
    var Ea = j["com.workinman.pooling.LOG_LEVEL"] = {
        __ename__: ["com", "workinman", "pooling", "LOG_LEVEL"],
        __constructs__: ["NONE",
            "NO_STACK", "NEW_STACK", "ALL_STACK"
        ]
    };
    Ea.NONE = ["NONE", 0];
    Ea.NONE.toString = g;
    Ea.NONE.__enum__ = Ea;
    Ea.NO_STACK = ["NO_STACK", 1];
    Ea.NO_STACK.toString = g;
    Ea.NO_STACK.__enum__ = Ea;
    Ea.NEW_STACK = ["NEW_STACK", 2];
    Ea.NEW_STACK.toString = g;
    Ea.NEW_STACK.__enum__ = Ea;
    Ea.ALL_STACK = ["ALL_STACK", 3];
    Ea.ALL_STACK.toString = g;
    Ea.ALL_STACK.__enum__ = Ea;
    Ea.__empty_constructs__ = [Ea.NONE, Ea.NO_STACK, Ea.NEW_STACK, Ea.ALL_STACK];
    var Ke = function() { this._pools = new G };
    j["com.workinman.pooling.PoolStore"] = Ke;
    Ke.__name__ = ["com", "workinman",
        "pooling", "PoolStore"
    ];
    Ke.prototype = {
        _initPool: function(a, b, c, e) { null == e && (e = -1);!0 != this._pools.exists(a) && (null == c && (c = Ea.NONE), b = new Hf(b, c, e), this._pools.set(a, b)) },
        requestObject: function(a, b, c, e) {
            null == e && (e = -1);
            this._testPool(a, b, c, e);
            c = this._pools.get(a);
            this._logCreate(a, c);
            if (0 < c.get_numPooled()) a = c.givePool(), a.poolActivate();
            else {
                c.incrementCreated();
                if (0 < c.get_cap() && c.get_created() > c.get_cap()) throw "Too many instances of " + B.string(b) + " allocated - currently at " + c.get_created();
                a = Y.createEmptyInstance(b).instance(a,
                    o(this, this._returnObject))
            }
            return a
        },
        _logCreate: function(a, b) { switch (b.get_log()[1]) {
                case 1:
                    null; break;
                case 2:
                    1 > b.get_numPooled() && null; break;
                case 3:
                    null } },
        _returnObject: function(a) { if (!1 != this._pools.exists(a.get_poolKey())) { var b;
                b = this._pools.get(a.get_poolKey());
                b.poolObject(a);
                this._logReturn(a.get_poolKey(), b) } },
        _logReturn: function(a, b) { switch (b.get_log()[1]) {
                case 0:
                case 2:
                    break;
                case 3:
                    null; break;
                default:
                    null } },
        _testPool: function(a, b, c, e) {
            null == e && (e = -1);
            !1 == this._pools.exists(a) && this._initPool(a,
                b, c, e)
        },
        tracePoolReport: function() { for (var a = "\nPool Report:\n\n", b = 0, c = this._pools.keys(); c.hasNext();) { var e = c.next(),
                    a = a + ("\t" + e + "\n"),
                    b = this._pools.get(e).get_created() - this._pools.get(e).get_numPooled(),
                    a = a + ("\t\tTotal Created: " + this._pools.get(e).get_created() + " \t\tPool: " + this._pools.get(e).get_numPooled() + " \t\t\tLoose: " + b + " \t\t\tChange: " + (b - this._pools.get(e).get_loose()));
                this._pools.get(e).set_loose(b);
                a += "\n" } null },
        __class__: Ke
    };
    var Hf = function(a, b, c) {
        this._pool = [];
        this._class = a;
        this._log = b;
        this._created = this._max = 0;
        this._cap = c;
        this._loose = 0
    };
    j["com.workinman.pooling.PoolTracker"] = Hf;
    Hf.__name__ = ["com", "workinman", "pooling", "PoolTracker"];
    Hf.prototype = {
        get_log: function() { return this._log },
        get_numPooled: function() { return this._pool.length },
        get_created: function() { return this._created },
        get_cap: function() { return this._cap },
        get_loose: function() { return this._loose },
        set_loose: function(a) { this._loose = a; return this.get_loose() },
        incrementCreated: function() { this._created++ },
        poolObject: function(a) {
            this._pool.push(a);
            this._max = lb.max(this._max, this._pool.length)
        },
        givePool: function() { return this._pool.pop() },
        __class__: Hf,
        __properties__: { set_loose: "set_loose", get_loose: "get_loose", get_cap: "get_cap", get_created: "get_created", get_numPooled: "get_numPooled", get_log: "get_log" }
    };
    var Cc = function(a) { this.data = { version: "-1" };
        this.id = a };
    j["com.workinman.saving.WMSharedObject"] = Cc;
    Cc.__name__ = ["com", "workinman", "saving", "WMSharedObject"];
    Cc.getLocal = function(a) {
        var b = new Cc(a);
        try {
            var c = window.localStorage.getItem(a);
            null !=
                c && "" != c && (b.data = $a.run(c))
        } catch (e) { null }
        return b
    };
    Cc.prototype = { dispose: function() { this.id = this.data = null }, flush: function() { window.localStorage.setItem(this.id, zb.run(this.data)) }, __class__: Cc };
    var vb = function() {};
    j["com.workinman.services.ServiceAnalytics"] = vb;
    vb.__name__ = ["com", "workinman", "services", "ServiceAnalytics"];
    vb.enableCanadaTracking = function(a) { vb._flagCanadaTrackingEnabled = !0;
        vb._canadaShowGameTitle = a };
    vb.sendCanadaTrackingCall = function(a) {
        if (vb._flagCanadaTrackingEnabled) try {
            eval("trackFlashEvent('" +
                vb._canadaShowGameTitle + "', '" + a + "', 'true');")
        } catch (b) {}
    };
    var H = function() {};
    j["com.workinman.services.ServiceDeltaDNA"] = H;
    H.__name__ = ["com", "workinman", "services", "ServiceDeltaDNA"];
    H.init = function(a) {
        "x" == a.toLowerCase() && (H.OPTION_ENABLE_TRACKING = !1);
        !1 == H.OPTION_ENABLE_TRACKING || H._flagInitted || (H._flagInitted = !0, H._url = "http://collect9660ldhsc.deltadna.net/collect/api/" + a, H._platform = Db.detectPlatform(), a = t.field(t.field(ub, "sdk"), "gameObj"), H._nickSDKVersion = B.string(a.majorversion) + "." + B.string(a.minorversion),
            H._sharedObjectId = H._DEFAULT_SHARED_OBJECT_ID, H._sharedObjectData = i.get_instance().sharedObjectGetData(H._sharedObjectId), H._generateOfflineIDs(!0), null == H._sharedObjectData || 0 == t.fields(H._sharedObjectData).length || !Object.prototype.hasOwnProperty.call(H._sharedObjectData, "a") || !Object.prototype.hasOwnProperty.call(H._sharedObjectData, "ppb") ? H._generateOfflineIDs() : (H._offlineUserId = H._sharedObjectData.a + H._sharedObjectData.ppb, H._offlineTrackingId = H._sharedObjectData.b + H._sharedObjectData.ppa, null))
    };
    H.sendEvent = function(a) { H._flagInitted && (a.params.clientVersion = "0.1", H._sendJsonHttp(H._url, H._setupEventData(a))) };
    H.sendBulkEvents = function(a) { if (H._flagInitted)
            if (1 == a.length) a[0].params.clientVersion = "0.1", H._sendJsonHttp(H._url, H._setupEventData(a[0]));
            else { for (var b = { eventList: [] }, c = 0; c < a.length;) { var e = a[c];++c;
                    e.params.clientVersion = "0.1";
                    b.eventList.push(H._setupEventData(e)) }(new zc(H._url + "/bulk")).setHeader("Content-Type", "application/json").setPostData(JSON.stringify(b)).request(!0) } };
    H._setupEventData = function(a) { var b = { eventName: a.event, userID: H._offlineUserId, sessionID: H._sessionId, eventTimestamp: H._generateTimeStamp(new Date), eventParams: { platform: H._platform, sdkVersion: H._nickSDKVersion } }; if (null != a.params)
            for (var c = 0, e = t.fields(a.params); c < e.length;) { var d = e[c];++c;
                t.setField(b.eventParams, d, t.field(a.params, d)) }
        return b };
    H._sendJsonHttp = function(a, b) {
        (new zc(a)).setHeader("Content-Type", "application/json").setPostData(JSON.stringify(b)).request(!0) };
    H.sendGameStarted = function() {
        H.sendBulkEvents([{
            event: "gameStarted",
            params: { clientVersion: "0.1" }
        }, { event: "clientDevice", params: Db.detectDeviceInfo() }])
    };
    H.sendUIInteraction = function(a, b, c) { H.sendEvent({ event: "uiInteraction", params: { UILocation: a, UIName: b, timeSpentOnScreen: c, UIType: "Button", UIAction: "Click", clientVersion: "0.1" } }) };
    H._generateOfflineIDs = function(a) {
        null == a && (a = !1);
        for (var b = "", c = 16; - 1 < c;) {
            if (0.66 > Math.random()) b += B.string(Math.floor(10 * Math.random()));
            else switch (Math.floor(10 * Math.random())) {
                case 0:
                    b += "a";
                    break;
                case 1:
                    b += "b";
                    break;
                case 2:
                    b += "c";
                    break;
                case 3:
                    b += "d";
                    break;
                case 4:
                    b += "e";
                    break;
                case 5:
                    b += "f";
                    break;
                case 6:
                    b += "g";
                    break;
                case 7:
                    b += "h";
                    break;
                case 8:
                    b += "i";
                    break;
                case 9:
                    b += "j"
            }
            c--
        }
        if (a) H._sessionId = b;
        else {
            H._offlineUserId = b;
            H._offlineTrackingId = "";
            for (c = 8; - 1 < c;) H._offlineTrackingId += B.string(Math.floor(10 * Math.random())), c--;
            8 < H._offlineTrackingId.length && (H._offlineTrackingId = H._offlineTrackingId.substring(0, 8));
            a = {
                a: M.substr(H._offlineUserId, 0, 8),
                b: M.substr(H._offlineTrackingId, 0, 8),
                ppa: M.substr(H._offlineTrackingId, 8, H._offlineTrackingId.length),
                ppb: M.substr(H._offlineUserId, 8, H._offlineUserId.length)
            };
            i.get_instance().sharedObjectSetData(H._sharedObjectId, a);
            H.sendEvent({ event: "newPlayer", params: {} })
        }
        null
    };
    H._generateTimeStamp = function(a) { return B.string(a.getFullYear()) + "-" + $.lpad(B.string(a.getMonth() + 1), "0", 2) + "-" + $.lpad(B.string(a.getDate()), "0", 2) + " " + $.lpad(B.string(a.getHours()), "0", 2) + ":" + $.lpad(B.string(a.getMinutes()), "0", 2) + ":" + $.lpad(B.string(a.getSeconds()), "0", 2) };
    var Db = function() {};
    j["com.workinman.services.BrowserData"] =
        Db;
    Db.__name__ = ["com", "workinman", "services", "BrowserData"];
    Db.detectPlatform = function() {
        var a = "PIRACY_UNKNOWN",
            b = window.location.href.toLowerCase(),
            c = window.navigator.userAgent.toLowerCase(),
            e = window.document.referrer.toLowerCase(); - 1 != b.indexOf("t.nick") || -1 != c.indexOf("ipad") || -1 != c.indexOf("tablet") || -1 != c.indexOf("android") && -1 == c.indexOf("mobi") ? a = "NICKWEB_TABLET" : -1 != b.indexOf("m.nick") || -1 != c.indexOf("mobi") ? a = "NICKWEB_MOBILE" : -1 != b.indexOf("www.nick") && (a = "NICKWEB_DESKTOP");
        if (-1 != c.indexOf("android") &&
            -1 != e.indexOf("http://www.ludei.com")) a = "ANDROID_APP";
        else if ((-1 != c.indexOf("ipod") || -1 != c.indexOf("iphone") || -1 != c.indexOf("ipad")) && -1 == c.indexOf("safari")) a = "IOS_APP"; - 1 == b.indexOf(".nick") && (a = "PIRACY_UNKNOWN"); - 1 != b.indexOf("nick.com/games/data/") && (a = "PIRACY_UNKNOWN");
        return a
    };
    Db.detectDeviceInfo = function() {
        var a = { browserName: "UNKNOWN", deviceType: "UNKNOWN", operatingSystem: "UNKNOWN", operatingSystemVersion: "UNKNOWN", hardwareVersion: "UNKNOWN", manufacturer: "" };
        try {
            var b = (new If).getResult(),
                c =
                b.ua.toUpperCase(),
                e = window.navigator.platform.toUpperCase();
            a.browserName = b.browser.name;
            a.deviceType = (new v("TV", "i")).match(e) ? "TV" : (new v("IPAD", "i")).match(c) || (new v("ANDROID", "i")).match(c) && -1 == c.indexOf("MOBI") ? "TABLET" : -1 != c.indexOf("MOBI") ? "MOBILE_PHONE" : "PC";
            var d = b.os.name;
            (new v("WINDOWS", "i")).match(d) ? a.operatingSystem = "WINDOWS" : (new v("MAC", "i")).match(d) ? a.operatingSystem = "OSX" : (new v("ANDROID", "i")).match(d) ? a.operatingSystem = "ANDROID" : (new v("IOS", "i")).match(d) || (new v("IPHONE",
                "i")).match(c) || (new v("IPAD", "i")).match(c) || (new v("IPOD", "i")).match(c) ? a.operatingSystem = "IOS" : (new v("BLACKBERRY", "i")).match(c) ? a.operatingSystem = "BLACKBERRY" : -1 != c.indexOf("LINUX") ? a.operatingSystem = "LINUX" : (new v("\\bSILK\\b", "")).match(b.ua) && (a.operatingSystem = "FIREOS");
            a.operatingSystemVersion = b.os.version;
            "PC" == a.deviceType && "OSX" == a.operatingSystem ? a.hardwareVersion = "MAC" : "PC" == a.deviceType ? a.hardwareVersion = "PC" : (a.hardwareVersion = b.device.model, a.manufacturer = b.device.vendor)
        } catch (f) {}
        if (null ==
            a.browserName || "null" == a.browserName) a.browserName = "";
        if (null == a.deviceType || "null" == a.deviceType) a.deviceType = "";
        if (null == a.operatingSystem || "null" == a.operatingSystem) a.operatingSystem = "";
        if (null == a.operatingSystemVersion || "null" == a.operatingSystemVersion) a.operatingSystemVersion = "";
        if (null == a.hardwareVersion || "null" == a.hardwareVersion) a.hardwareVersion = "";
        if (null == a.manufacturer || "null" == a.manufacturer) a.manufacturer = "";
        return a
    };
    Db.eval = function(a) { return eval(a) };
    var If = function(a) {
        this._setup();
        this._ua = null != a ? a : Db.eval("((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : '')");
        this.setUA(this._ua)
    };
    j["com.workinman.services._ServiceDeltaDNA.UAParser"] = If;
    If.__name__ = ["com", "workinman", "services", "_ServiceDeltaDNA", "UAParser"];
    If.prototype = {
        getBrowser: function() { var a = this._mapper_rgx(this.rgxmap.browser);
            a.major = this.util.major(a.version); return a },
        getCPU: function() { return this._mapper_rgx(this.rgxmap.cpu) },
        getDevice: function() { return this._mapper_rgx(this.rgxmap.device) },
        getEngine: function() { return this._mapper_rgx(this.rgxmap.engine) },
        getOS: function() { return this._mapper_rgx(this.rgxmap.os) },
        getResult: function() { return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() } },
        getUA: function() { return this._ua },
        setUA: function(a) { return this._ua = a },
        _setup: function() {
            this.util = { extend: o(this, this._util_extend), has: o(this, this._util_has), lowerize: o(this, this._util_lowerize), major: o(this, this._util_major) };
            this.mapper = { rgx: o(this, this._mapper_rgx), str: o(this, this._mapper_str) };
            this.maps = {
                browser: { oldsafari: { version: { "1.0": "/8", "1.2": "/1", "1.3": "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } },
                device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } },
                os: {
                    windows: {
                        version: {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2E3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            "8.1": "NT 6.3",
                            10: ["NT 6.4",
                                "NT 10.0"
                            ],
                            RT: "ARM"
                        }
                    }
                }
            };
            this.rgxmap = {
                browser: [
                    [new v("(opera\\smini)/([\\w\\.-]+)", "i"), new v("(opera\\s[mobiletab]+).+version/([\\w\\.-]+)", "i"), new v("(opera).+version/([\\w\\.]+)", "i"), new v("(opera)[/\\s]+([\\w\\.]+)", "i")],
                    ["name", "version"],
                    [new v("\\s(opr)/([\\w\\.]+)", "i")],
                    [
                        ["name", "Opera"], "version"
                    ],
                    [new v("(kindle)/([\\w\\.]+)", "i"), new v("(lunascape|maxthon|netfront|jasmine|blazer)[/\\s]?([\\w\\.]+)*", "i"), new v("(avant\\s|iemobile|slim|baidu)(?:browser)?[/\\s]?([\\w\\.]*)", "i"), new v("(?:ms|\\()(ie)\\s([\\w\\.]+)",
                        "i"), new v("(rekonq)/([\\w\\.]+)*", "i"), new v("(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)/([\\w\\.-]+)", "i")],
                    ["name", "version"],
                    [new v("(trident).+rv[:\\s]([\\w\\.]+).+like\\sgecko", "i")],
                    [
                        ["name", "IE"], "version"
                    ],
                    [new v("(edge)/((\\d+)?[\\w\\.]+)", "i")],
                    ["name", "version"],
                    [new v("(yabrowser)/([\\w\\.]+)", "i")],
                    [
                        ["name", "Yandex"], "version"
                    ],
                    [new v("(comodo_dragon)/([\\w\\.]+)", "i")],
                    [
                        ["name", new v("_", "g"), " "], "version"
                    ],
                    [new v("(chrome|omniweb|arora|[tizenoka]{5}\\s?browser)/v?([\\w\\.]+)",
                        "i"), new v("(qqbrowser)[/\\s]?([\\w\\.]+)", "i")],
                    ["name", "version"],
                    [new v("(uc\\s?browser)[/\\s]?([\\w\\.]+)", "i"), new v("ucweb.+(ucbrowser)[/\\s]?([\\w\\.]+)", "i"), new v("JUC.+(ucweb)[/\\s]?([\\w\\.]+)", "i")],
                    [
                        ["name", "UCBrowser"], "version"
                    ],
                    [new v("(dolfin)/([\\w\\.]+)", "i")],
                    [
                        ["name", "Dolphin"], "version"
                    ],
                    [new v("((?:android.+)crmo|crios)/([\\w\\.]+)", "i")],
                    [
                        ["name", "Chrome"], "version"
                    ],
                    [new v("XiaoMi/MiuiBrowser/([\\w\\.]+)", "i")],
                    ["version", ["name", "MIUI Browser"]],
                    [new v("android.+version/([\\w\\.]+)\\s+(?:mobile\\s?safari|safari)",
                        "i")],
                    ["version", ["name", "Android Browser"]],
                    [new v("FBAV/([\\w\\.]+);", "i")],
                    ["version", ["name", "Facebook"]],
                    [new v("version/([\\w\\.]+).+?mobile/\\w+\\s(safari)", "i")],
                    ["version", ["name", "Mobile Safari"]],
                    [new v("version/([\\w\\.]+).+?(mobile\\s?safari|safari)", "i")],
                    ["version", "name"],
                    [new v("webkit.+?(mobile\\s?safari|safari)(/[\\w\\.]+)", "i")],
                    ["name", ["version", this.mapper.str, this.maps.browser.oldsafari.version]],
                    [new v("(konqueror)/([\\w\\.]+)", "i"), new v("(webkit|khtml)/([\\w\\.]+)", "i")],
                    ["name", "version"],
                    [new v("(navigator|netscape)/([\\w\\.-]+)", "i")],
                    [
                        ["name", "Netscape"], "version"
                    ],
                    [new v("fxios/([\\w\\.-]+)", "i")],
                    ["version", ["name", "Firefox"]],
                    [new v("(swiftfox)", "i"), new v("(icedragon|iceweasel|camino|chimera|fennec|maemo\\sbrowser|minimo|conkeror)[/\\s]?([\\w\\.\\+]+)", "i"), new v("(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)/([\\w\\.-]+)", "i"), new v("(mozilla)/([\\w\\.]+).+rv:.+gecko/\\d+", "i"), new v("(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[/\\s]?([\\w\\.]+)",
                        "i"), new v("(links)\\s\\(([\\w\\.]+)", "i"), new v("(gobrowser)/?([\\w\\.]+)*", "i"), new v("(ice\\s?browser)/v?([\\w\\._]+)", "i"), new v("(mosaic)[/\\s]([\\w\\.]+)", "i")],
                    ["name", "version"]
                ],
                cpu: [
                    [new v("(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\\)]", "i")],
                    [
                        ["architecture", "amd64"]
                    ],
                    [new v("(ia32(?=;))", "i")],
                    [
                        ["architecture", this.util.lowerize]
                    ],
                    [new v("((?:i[346]|x)86)[;\\)]", "i")],
                    [
                        ["architecture", "ia32"]
                    ],
                    [new v("windows\\s(ce|mobile);\\sppc;", "i")],
                    [
                        ["architecture", "arm"]
                    ],
                    [new v("((?:ppc|powerpc)(?:64)?)(?:\\smac|;|\\))",
                        "i")],
                    [
                        ["architecture", new v("ower", ""), "", this.util.lowerize]
                    ],
                    [new v("(sun4\\w)[;\\)]", "i")],
                    [
                        ["architecture", "sparc"]
                    ],
                    [new v("((?:avr32|ia64(?=;))|68k(?=\\))|arm(?:64|(?=v\\d+;))|(?=atmel\\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)", "i")],
                    [
                        ["architecture", this.util.lowerize]
                    ]
                ],
                device: [
                    [new v("\\((ipad|playbook);[\\w\\s\\);-]+(rim|apple)", "i")],
                    ["model", "vendor", ["type", "tablet"]],
                    [new v("applecoremedia/[\\w\\.]+ \\((ipad)", "")],
                    ["model", ["vendor", "Apple"],
                        ["type", "tablet"]
                    ],
                    [new v("(apple\\s{0,1}tv)",
                        "i")],
                    [
                        ["model", "Apple TV"],
                        ["vendor", "Apple"]
                    ],
                    [new v("(archos)\\s(gamepad2?)", "i"), new v("(hp).+(touchpad)", "i"), new v("(kindle)/([\\w\\.]+)", "i"), new v("\\s(nook)[\\w\\s]+build/(\\w+)", "i"), new v("(dell)\\s(strea[kpr\\s\\d]*[\\dko])", "i")],
                    ["vendor", "model", ["type", "tablet"]],
                    [new v("(kf[A-z]+)\\sbuild/[\\w\\.]+.*silk/", "i")],
                    ["model", ["vendor", "Amazon"],
                        ["type", "tablet"]
                    ],
                    [new v("(sd|kf)[0349hijorstuw]+\\sbuild/[\\w\\.]+.*silk/", "i")],
                    [
                        ["model", this.mapper.str, this.maps.device.amazon.model],
                        ["vendor",
                            "Amazon"
                        ],
                        ["type", "mobile"]
                    ],
                    [new v("\\((ip[honed|\\s\\w*]+);.+(apple)", "i")],
                    ["model", "vendor", ["type", "mobile"]],
                    [new v("\\((ip[honed|\\s\\w*]+);", "i")],
                    ["model", ["vendor", "Apple"],
                        ["type", "mobile"]
                    ],
                    [new v("(blackberry)[\\s-]?(\\w+)", "i"), new v("(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\\s_-]?([\\w-]+)*", "i"), new v("(hp)\\s([\\w\\s]+\\w)", "i"), new v("(asus)-?(\\w+)", "i")],
                    ["vendor", "model", ["type", "mobile"]],
                    [new v("\\(bb10;\\s(\\w+)", "i")],
                    ["model",
                        ["vendor", "BlackBerry"],
                        ["type", "mobile"]
                    ],
                    [new v("android.+(transfo[prime\\s]{4,10}\\s\\w+|eeepc|slider\\s\\w+|nexus 7)", "i")],
                    ["model", ["vendor", "Asus"],
                        ["type", "tablet"]
                    ],
                    [new v("(sony)\\s(tablet\\s[ps])\\sbuild/", "i"), new v("(sony)?(?:sgp.+)\\sbuild/", "i")],
                    [
                        ["vendor", "Sony"],
                        ["model", "Xperia Tablet"],
                        ["type", "tablet"]
                    ],
                    [new v("(?:sony)?(?:(?:(?:c|d)\\d{4})|(?:so[-l].+))\\sbuild/", "i")],
                    [
                        ["vendor", "Sony"],
                        ["model", "Xperia Phone"],
                        ["type", "mobile"]
                    ],
                    [new v("\\s(ouya)\\s", "i"), new v("(nintendo)\\s([wids3u]+)",
                        "i")],
                    ["vendor", "model", ["type", "console"]],
                    [new v("android.+;\\s(shield)\\sbuild", "i")],
                    ["model", ["vendor", "Nvidia"],
                        ["type", "console"]
                    ],
                    [new v("(playstation\\s[34portablevi]+)", "i")],
                    ["model", ["vendor", "Sony"],
                        ["type", "console"]
                    ],
                    [new v("(sprint\\s(\\w+))", "i")],
                    [
                        ["vendor", this.mapper.str, this.maps.device.sprint.vendor],
                        ["model", this.mapper.str, this.maps.device.sprint.model],
                        ["type", "mobile"]
                    ],
                    [new v("(lenovo)\\s?(S(?:5000|6000)+(?:[-][\\w+]))", "i")],
                    ["vendor", "model", ["type", "tablet"]],
                    [new v("(htc)[;_\\s-]+([\\w\\s]+(?=\\))|\\w+)*",
                        "i"), new v("(zte)-(\\w+)*", "i"), new v("(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\\s)sony)[_\\s-]?([\\w-]+)*", "i")],
                    ["vendor", ["model", new v("_", "g"), " "],
                        ["type", "mobile"]
                    ],
                    [new v("(nexus\\s9)", "i")],
                    ["model", ["vendor", "HTC"],
                        ["type", "tablet"]
                    ],
                    [new v("[\\s\\(;](xbox(?:\\sone)?)[\\s\\);]", "i")],
                    ["model", ["vendor", "Microsoft"],
                        ["type", "console"]
                    ],
                    [new v("(kin\\.[onetw]{3})", "i")],
                    [
                        ["model", new v("\\.", "g"), " "],
                        ["vendor", "Microsoft"],
                        ["type", "mobile"]
                    ],
                    [new v("\\s(milestone|droid(?:[2-4x]|\\s(?:bionic|x2|pro|razr))?(:?\\s4g)?)[\\w\\s]+build/",
                        "i"), new v("mot[\\s-]?(\\w+)*", "i"), new v("(XT\\d{3,4}) build/", "i"), new v("(nexus\\s[6])", "i")],
                    ["model", ["vendor", "Motorola"],
                        ["type", "mobile"]
                    ],
                    [new v("android.+\\s(mz60\\d|xoom[\\s2]{0,2})\\sbuild/", "i")],
                    ["model", ["vendor", "Motorola"],
                        ["type", "tablet"]
                    ],
                    [new v("android.+((sch-i[89]0\\d|shw-m380s|gt-p\\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))", "i"), new v("((SM-T\\w+))", "i")],
                    [
                        ["vendor", "Samsung"], "model", ["type", "tablet"]
                    ],
                    [new v("((s[cgp]h-\\w+|gt-\\w+|galaxy\\snexus|sm-n900))", "i"), new v("(sam[sung]*)[\\s-]*(\\w+-?[\\w-]*)*",
                        "i"), new v("sec-((sgh\\w+))", "i")],
                    [
                        ["vendor", "Samsung"], "model", ["type", "mobile"]
                    ],
                    [new v("(samsung);smarttv", "i")],
                    ["vendor", "model", ["type", "smarttv"]],
                    [new v("\\(dtv[\\);].+(aquos)", "i")],
                    ["model", ["vendor", "Sharp"],
                        ["type", "smarttv"]
                    ],
                    [new v("sie-(\\w+)*", "i")],
                    ["model", ["vendor", "Siemens"],
                        ["type", "mobile"]
                    ],
                    [new v("(maemo|nokia).*(n900|lumia\\s\\d+)", "i"), new v("(nokia)[\\s_-]?([\\w-]+)*", "i")],
                    [
                        ["vendor", "Nokia"], "model", ["type", "mobile"]
                    ],
                    [new v("android\\s3\\.[\\s\\w;-]{10}(a\\d{3})", "i")],
                    ["model", ["vendor", "Acer"],
                        ["type", "tablet"]
                    ],
                    [new v("android\\s3\\.[\\s\\w;-]{10}(lg?)-([06cv9]{3,4})", "i")],
                    [
                        ["vendor", "LG"], "model", ["type", "tablet"]
                    ],
                    [new v("(lg) netcast\\.tv", "i")],
                    ["vendor", "model", ["type", "smarttv"]],
                    [new v("(nexus\\s[45])", "i"), new v("lg[e;\\s/-]+(\\w+)*", "i")],
                    ["model", ["vendor", "LG"],
                        ["type", "mobile"]
                    ],
                    [new v("android.+(ideatab[a-z0-9\\-\\s]+)", "i")],
                    ["model", ["vendor", "Lenovo"],
                        ["type", "tablet"]
                    ],
                    [new v("linux;.+((jolla));", "i")],
                    ["vendor", "model", ["type", "mobile"]],
                    [new v("((pebble))app/[\\d\\.]+\\s",
                        "i")],
                    ["vendor", "model", ["type", "wearable"]],
                    [new v("android.+;\\s(glass)\\s\\d", "i")],
                    ["model", ["vendor", "Google"],
                        ["type", "wearable"]
                    ],
                    [new v("android.+(\\w+)\\s+build/hm\\1", "i"), new v("android.+(hm[\\s\\-_]*note?[\\s_]*(?:\\d\\w)?)\\s+build", "i"), new v("android.+(mi[\\s\\-_]*(?:one|one[\\s_]plus)?[\\s_]*(?:\\d\\w)?)\\s+build", "i")],
                    [
                        ["model", new v("_", "g"), " "],
                        ["vendor", "Xiaomi"],
                        ["type", "mobile"]
                    ],
                    [new v("(mobile|tablet);.+rv:.+gecko/", "i")],
                    [
                        ["type", this.util.lowerize], "vendor", "model"
                    ]
                ],
                engine: [
                    [new v("windows.+\\sedge/([\\w\\.]+)",
                        "i")],
                    ["version", ["name", "EdgeHTML"]],
                    [new v("(presto)/([\\w\\.]+)", "i"), new v("(webkit|trident|netfront|netsurf|amaya|lynx|w3m)/([\\w\\.]+)", "i"), new v("(khtml|tasman|links)[/\\s]\\(?([\\w\\.]+)", "i"), new v("(icab)[/\\s]([23]\\.[\\d\\.]+)", "i")],
                    ["name", "version"],
                    [new v("rv:([\\w\\.]+).*(gecko)", "i")],
                    ["version", "name"]
                ],
                os: [
                    [new v("microsoft\\s(windows)\\s(vista|xp)", "i")],
                    ["name", "version"],
                    [new v("(windows)\\snt\\s6\\.2;\\s(arm)", "i"), new v("(windows\\sphone(?:\\sos)*|windows\\smobile|windows)[\\s/]?([ntce\\d\\.\\s]+\\w)",
                        "i")],
                    ["name", ["version", this.mapper.str, this.maps.os.windows.version]],
                    [new v("(win(?=3|9|n)|win\\s9x\\s)([nt\\d\\.]+)", "i")],
                    [
                        ["name", "Windows"],
                        ["version", this.mapper.str, this.maps.os.windows.version]
                    ],
                    [new v("\\((bb)(10);", "i")],
                    [
                        ["name", "BlackBerry"], "version"
                    ],
                    [new v("(blackberry)\\w*/?([\\w\\.]+)*", "i"), new v("(tizen)[/\\s]([\\w\\.]+)", "i"), new v("(android|webos|palm\\sos|qnx|bada|rim\\stablet\\sos|meego|contiki)[/\\s-]?([\\w\\.]+)*", "i"), new v("linux;.+(sailfish);", "i")],
                    ["name", "version"],
                    [new v("(symbian\\s?os|symbos|s60(?=;))[/\\s-]?([\\w\\.]+)*", "i")],
                    [
                        ["name", "Symbian"], "version"
                    ],
                    [new v("\\((series40);", "i")],
                    ["name"],
                    [new v("mozilla.+\\(mobile;.+gecko.+firefox", "i")],
                    [
                        ["name", "Firefox OS"], "version"
                    ],
                    [new v("(nintendo|playstation)\\s([wids34portablevu]+)", "i"), new v("(mint)[/\\s\\(]?(\\w+)*", "i"), new v("(mageia|vectorlinux)[;\\s]", "i"), new v("(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[/\\s-]?([\\w\\.-]+)*",
                        "i"), new v("(hurd|linux)\\s?([\\w\\.]+)*", "i"), new v("(gnu)\\s?([\\w\\.]+)*", "i")],
                    ["name", "version"],
                    [new v("(cros)\\s[\\w]+\\s([\\w\\.]+\\w)", "i")],
                    [
                        ["name", "Chromium OS"], "version"
                    ],
                    [new v("(sunos)\\s?([\\w\\.]+\\d)*", "i")],
                    [
                        ["name", "Solaris"], "version"
                    ],
                    [new v("\\s([frentopc-]{0,4}bsd|dragonfly)\\s?([\\w\\.]+)*", "i")],
                    ["name", "version"],
                    [new v("(ip[honead]+)(?:.*os\\s*([\\w]+)*\\slike\\smac|;\\sopera)", "i")],
                    [
                        ["name", "iOS"],
                        ["version", new v("_", "g"), "."]
                    ],
                    [new v("(mac\\sos\\sx)\\s?([\\w\\s\\.]+\\w)*",
                        "i"), new v("(macintosh|mac(?=_powerpc)\\s)", "i")],
                    [
                        ["name", "Mac OS"],
                        ["version", new v("_", "g"), "."]
                    ],
                    [new v("((?:open)?solaris)[/\\s-]?([\\w\\.]+)*", "i"), new v("(haiku)\\s(\\w+)", "i"), new v("(aix)\\s((\\d)(?=\\.|\\)|\\s)[\\w\\.]*)*", "i"), new v("(plan\\s9|minix|beos|os/2|amigaos|morphos|risc\\sos|openvms)", "i"), new v("(unix)\\s?([\\w\\.]+)*", "i")],
                    ["name", "version"]
                ]
            }
        },
        _mapper_rgx: function(a) {
            for (var b = {}, c, e = 0, d = a[1].length; e < d;) c = e++, c = a[1][c], c instanceof Array && null == c.__enum__ ? b[c[0]] = null : b[c] =
                null;
            c = null;
            for (var f, g = 0; g < a.length && null == c;) {
                for (var e = a[g], d = a[g + 1], h = 0, i = 0; h < e.length && null == c;)
                    if (c = this._regexExec(e[h++], this.getUA()), null != c)
                        for (var j = 0, k = d.length; j < k;) {
                            var l = j++;
                            f = c[++i];
                            if (d[l] instanceof Array && null == d[l].__enum__) {
                                var l = d[l],
                                    n = l[0];
                                if (2 == l.length) t.isFunction(l[1]) ? t.setField(b, n, (0, l[1])(f)) : b[n] = l[1];
                                else if (3 == l.length)
                                    if (t.isFunction(l[1]) && !C.__instanceof(l[1], v)) { var o = l[1];
                                        t.setField(b, n, null != f ? o(f, l[2]) : null) } else t.setField(b, n, this._replace(f, l[1], l[2]));
                                else 4 == l.length && (o = l[3], t.setField(b, n, null != f ? o(this._replace(f, l[1], l[2])) : null))
                            } else b[d[l]] = f
                        }
                g += 2
            }
            return b
        },
        _mapper_str: function(a, b) { for (var c = 0, e = t.fields(b); c < e.length;) { var d = e[c];++c; if (t.field(b, d) instanceof Array && null == t.field(b, d).__enum__)
                    for (var f = t.field(b, d), g = 0, h = f.length; g < h;) { var i = g++; if (this._util_has(f[i], a)) return "?" == d ? null : d } else if (this._util_has(t.field(b, d), a)) return "?" == d ? null : d } return a },
        _util_extend: function(a) { return a },
        _util_has: function(a, b) {
            return "string" ==
                typeof a ? -1 != b.toLowerCase().indexOf(C.__cast(a, String).toLowerCase()) : !1
        },
        _util_lowerize: function(a) { return a.toLowerCase() },
        _util_major: function(a) { return "string" == typeof a ? a.split(".")[0] : null },
        _regexExec: function(a, b) { var c = []; if (a.match(b)) { c.push(a.matched(0));
                c.push(a.matched(1)); try { c.push(a.matched(2)) } catch (e) {} try { c.push(a.matched(3)) } catch (d) {} try { c.push(a.matched(4)) } catch (f) {} return c } return null },
        _replace: function(a, b, c) {
            return null == a ? a : C.__instanceof(b, v) ? C.__cast(b, v).replace(a,
                c) : $.replace(a, b, c)
        },
        __class__: If
    };
    var Cb = function() {};
    j["com.workinman.utils.WMPageUtils"] = Cb;
    Cb.__name__ = ["com", "workinman", "utils", "WMPageUtils"];
    Cb.addScript = function(a, b) { var c = window.document.createElement("script");
        c.setAttribute("id", a);
        c.setAttribute("type", "text/javascript");
        c.setAttribute("src", b);
        window.document.getElementsByTagName("head")[0].appendChild(c) };
    var Na = function() {};
    j["com.workinman.utils.WMUtils"] = Na;
    Na.__name__ = ["com", "workinman", "utils", "WMUtils"];
    Na.emptyMap = function(a) {
        for (var b =
                a.keys(); b.hasNext();) { var c = b.next();
            Na._mapEmpty.push(c) }
        for (; 0 < Na._mapEmpty.length;) b = Na._mapEmpty.pop(), a.remove(b)
    };
    Na.removeExtension = function(a) { var b = a.lastIndexOf("."); return 0 > b ? a : a.substring(0, b) };
    Na.addStringToArrayWithoutDuplicates = function(a, b) { for (var c = 0; c < b.length;) { var e = b[c];++c; if (e == a) return } b.push(a) };
    Na.getExtension = function(a) { if (null == a) return ""; var b = a.lastIndexOf("."); if (0 > b) return ""; var c = a.lastIndexOf("?"); return c > b ? a.substring(b + 1, c) : a.substring(b + 1, a.length) };
    var ea =
        function() { this.parent = this.firstChild = this.next = this.firstComponent = null;
            this._compMap = {} };
    j["flambe.Entity"] = ea;
    ea.__name__ = ["flambe", "Entity"];
    ea.__interfaces__ = [Gb];
    ea.prototype = {
        add: function(a) { null != a.owner && a.owner.remove(a); var b = a.get_name(),
                c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            b = null; for (c = this.firstComponent; null != c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded(); return this },
        remove: function(a) {
            for (var b = null, c = this.firstComponent; null !=
                c;) { var e = c.next; if (c == a) return null == b ? this.firstComponent = e : (b.owner = this, b.next = e), delete this._compMap[c.get_name()], 0 != (c._flags & 1) && (c.onStop(), c._flags &= -2), c.onRemoved(), c.owner = null, c.next = null, !0;
                b = c;
                c = e }
            return !1
        },
        addChild: function(a, b) { null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this; if (b) { for (var c = null, e = this.firstChild; null != e;) c = e, e = e.next;
                null != c ? c.next = a : this.firstChild = a } else a.next = this.firstChild, this.firstChild = a; return this },
        removeChild: function(a) {
            for (var b =
                    null, c = this.firstChild; null != c;) { var e = c.next; if (c == a) { null == b ? this.firstChild = e : b.next = e;
                    c.parent = null;
                    c.next = null; break } b = c;
                c = e }
        },
        disposeChildren: function() { for (; null != this.firstChild;) this.firstChild.dispose() },
        dispose: function() { for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren() },
        __class__: ea
    };
    var rg = function() {};
    j["flambe.util.PackageLog"] = rg;
    rg.__name__ = ["flambe", "util", "PackageLog"];
    var Jf = function() {};
    j["flambe.platform.Platform"] =
        Jf;
    Jf.__name__ = ["flambe", "platform", "Platform"];
    Jf.prototype = { __class__: Jf };
    var Zb = function() {};
    j["flambe.platform.html.HtmlPlatform"] = Zb;
    Zb.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    Zb.__interfaces__ = [Jf];
    Zb.prototype = {
        init: function() {
            var a = this;
            Z.fixAndroidMath();
            var b = null;
            try { b = window.flambe.canvas } catch (c) {} b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque", "true");
            this._stage = new $b(b);
            this._pointer =
                new Ua;
            this._mouse = new me(this._pointer, b);
            this._renderer = this.createRenderer(b);
            this.mainLoop = new Lc;
            this.musicPlaying = !1;
            this._canvas = b;
            this._container = b.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var e = 0,
                d = function(c) {
                    if (!(1E3 > c.timeStamp - e)) {
                        var d = b.getBoundingClientRect(),
                            f = a.getX(c, d),
                            d = a.getY(c, d);
                        switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(), a._mouse.submitDown(f, d, c.button),
                                    b.focus());
                                break;
                            case "mousemove":
                                a._mouse.submitMove(f, d);
                                break;
                            case "mouseup":
                                a._mouse.submitUp(f, d, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a._mouse.submitScroll(f, d, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", d, !1);
            window.addEventListener("mousemove", d, !1);
            window.addEventListener("mouseup", d, !1);
            b.addEventListener("mousewheel", d, !1);
            b.addEventListener("DOMMouseScroll", d, !1);
            b.addEventListener("contextmenu", function(a) { a.preventDefault() },
                !1);
            var f = "undefined" != typeof window.ontouchstart,
                d = "msMaxTouchPoints" in window.navigator && 1 < window.navigator.msMaxTouchPoints;
            if (f || d) {
                var g = new ne(this._pointer, f ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = g;
                d = function(b) {
                    var c;
                    c = f ? b.changedTouches : [b];
                    var d = b.target.getBoundingClientRect();
                    e = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            b.preventDefault();
                            Z.SHOULD_HIDE_MOBILE_BROWSER && Z.hideMobileBrowser();
                            for (b = 0; b < c.length;) {
                                var h = c[b];
                                ++b;
                                var m = a.getX(h,
                                        d),
                                    i = a.getY(h, d);
                                g.submitDown((f ? h.identifier : h.pointerId) | 0, m, i)
                            }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) h = c[b], ++b, m = a.getX(h, d), i = a.getY(h, d), g.submitMove((f ? h.identifier : h.pointerId) | 0, m, i);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (b = 0; b < c.length;) h = c[b], ++b, m = a.getX(h, d), i = a.getY(h, d), g.submitUp((f ? h.identifier : h.pointerId) | 0, m, i)
                    }
                };
                f ? (b.addEventListener("touchstart", d, !1), b.addEventListener("touchmove",
                    d, !1), b.addEventListener("touchend", d, !1), b.addEventListener("touchcancel", d, !1)) : (b.addEventListener("MSPointerDown", d, !1), b.addEventListener("MSPointerMove", d, !1), b.addEventListener("MSPointerUp", d, !1))
            } else this._touch = new oe;
            var h = window.onerror;
            window.onerror = function(a, b, c) { I.uncaughtError.emit(a); return null != h ? h(a, b, c) : !1 };
            var i = Z.loadExtension("hidden", window.document);
            null != i.value ? (d = function() { I.hidden.set__(t.field(window.document, i.field)) }, d(null), window.document.addEventListener(i.prefix +
                "visibilitychange", d, !1)) : (d = function(a) { I.hidden.set__("pagehide" == a.type) }, window.addEventListener("pageshow", d, !1), window.addEventListener("pagehide", d, !1));
            I.hidden.get_changed().connect(function(b) { b || (a._skipFrame = !0) });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var j = Z.loadExtension("requestAnimationFrame").value;
            if (null != j) { var k = window.performance,
                    l = null != k && Z.polyfill("now", k);
                l ? this._lastUpdate = k.now() : null; var n = null,
                    n = function(c) { a.update(l ? k.now() : c);
                        j(n, b) };
                j(n, b) } else window.setInterval(function() { a.update(Date.now()) },
                16);
            cd.info("Initialized HTML platform", ["renderer", this._renderer.get_type()])
        },
        loadAssetPack: function(a) { return (new ka(this, a)).promise },
        getStage: function() { return this._stage },
        update: function(a) { var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            I.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer))) },
        getPointer: function() { return this._pointer },
        getTouch: function() { return this._touch },
        getKeyboard: function() {
            var a = this;
            if (null == this._keyboard) {
                this._keyboard =
                    new Ab;
                var b = function(b) { switch (b.type) {
                        case "keydown":
                            a._keyboard.submitDown(b.keyCode) && b.preventDefault(); break;
                        case "keyup":
                            a._keyboard.submitUp(b.keyCode) } };
                this._canvas.addEventListener("keydown", b, !1);
                this._canvas.addEventListener("keyup", b, !1)
            }
            return this._keyboard
        },
        getExternal: function() { null == this._external && (this._external = new pe); return this._external },
        getRenderer: function() { return this._renderer },
        getX: function(a, b) { return (a.clientX - b.left) * this._stage.get_width() / b.width },
        getY: function(a,
            b) { return (a.clientY - b.top) * this._stage.get_height() / b.height },
        createRenderer: function(a) { return new Mc(a) },
        __class__: Zb
    };
    var fb = function(a, b) { this._value = a;
        this._changed = null != b ? new dd(b) : null };
    j["flambe.util.Value"] = fb;
    fb.__name__ = ["flambe", "util", "Value"];
    fb.prototype = {
        watch: function(a) { a(this._value, this._value); return this.get_changed().connect(a) },
        get__: function() { return this._value },
        set__: function(a) { var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a, b)); return a },
        get_changed: function() { null == this._changed && (this._changed = new dd); return this._changed },
        __class__: fb,
        __properties__: { get_changed: "get_changed", set__: "set__", get__: "get__" }
    };
    var Nc = function(a, b) { this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0 };
    j["flambe.util.SignalConnection"] = Nc;
    Nc.__name__ = ["flambe", "util", "SignalConnection"];
    Nc.__interfaces__ = [Gb];
    Nc.prototype = {
        once: function() { this.stayInList = !1; return this },
        dispose: function() {
            null != this._signal && (this._signal.disconnect(this),
                this._signal = null)
        },
        __class__: Nc
    };
    var Va = function(a) { this._head = null != a ? new Nc(this, a) : null;
        this._deferredTasks = null };
    j["flambe.util.SignalBase"] = Va;
    Va.__name__ = ["flambe", "util", "SignalBase"];
    Va.prototype = {
        connectImpl: function(a, b) { var c = this,
                e = new Nc(this, a);
            this._head == Va.DISPATCHING_SENTINEL ? this.defer(function() { c.listAdd(e, b) }) : this.listAdd(e, b); return e },
        disconnect: function(a) { var b = this;
            this._head == Va.DISPATCHING_SENTINEL ? this.defer(function() { b.listRemove(a) }) : this.listRemove(a) },
        defer: function(a) {
            for (var b =
                    null, c = this._deferredTasks; null != c;) b = c, c = c.next;
            a = new Kf(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        willEmit: function() { var a = this._head;
            this._head = Va.DISPATCHING_SENTINEL; return a },
        didEmit: function(a) { this._head = a;
            a = this._deferredTasks; for (this._deferredTasks = null; null != a;) a.fn(), a = a.next },
        listAdd: function(a, b) { if (b) a._next = this._head, this._head = a;
            else { for (var c = null, e = this._head; null != e;) c = e, e = e._next;
                null != c ? c._next = a : this._head = a } },
        listRemove: function(a) {
            for (var b = null, c = this._head; null != c;) {
                if (c ==
                    a) { a = c._next;
                    null == b ? this._head = a : b._next = a; break } b = c;
                c = c._next
            }
        },
        __class__: Va
    };
    var dd = function(a) { Va.call(this, a) };
    j["flambe.util.Signal2"] = dd;
    dd.__name__ = ["flambe", "util", "Signal2"];
    dd.__super__ = Va;
    dd.prototype = A(Va.prototype, {
        connect: function(a, b) { null == b && (b = !1); return this.connectImpl(a, b) },
        emit: function(a, b) { var c = this;
            this._head == Va.DISPATCHING_SENTINEL ? this.defer(function() { c.emitImpl(a, b) }) : this.emitImpl(a, b) },
        emitImpl: function(a, b) {
            for (var c = this.willEmit(), e = c; null != e;) e._listener(a, b),
                e.stayInList || e.dispose(), e = e._next;
            this.didEmit(c)
        },
        __class__: dd
    });
    var ya = function(a) { Va.call(this, a) };
    j["flambe.util.Signal1"] = ya;
    ya.__name__ = ["flambe", "util", "Signal1"];
    ya.__super__ = Va;
    ya.prototype = A(Va.prototype, {
        connect: function(a, b) { null == b && (b = !1); return this.connectImpl(a, b) },
        emit: function(a) { var b = this;
            this._head == Va.DISPATCHING_SENTINEL ? this.defer(function() { b.emitImpl(a) }) : this.emitImpl(a) },
        emitImpl: function(a) {
            for (var b = this.willEmit(), c = b; null != c;) c._listener(a), c.stayInList || c.dispose(),
                c = c._next;
            this.didEmit(b)
        },
        __class__: ya
    });
    var qa = function(a, b) { this._behavior = null;
        fb.call(this, a, b) };
    j["flambe.animation.AnimatedFloat"] = qa;
    qa.__name__ = ["flambe", "animation", "AnimatedFloat"];
    qa.__super__ = fb;
    qa.prototype = A(fb.prototype, { set__: function(a) { this._behavior = null; return fb.prototype.set__.call(this, a) }, update: function(a) { null != this._behavior && (fb.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null)) }, __class__: qa });
    var I = function() {};
    j["flambe.System"] =
        I;
    I.__name__ = ["flambe", "System"];
    I.init = function() { I._calledInit || (I._platform.init(), I._calledInit = !0) };
    var cd = function() {};
    j["flambe.Log"] = cd;
    cd.__name__ = ["flambe", "Log"];
    cd.info = function() { null };
    cd.__super__ = rg;
    cd.prototype = A(rg.prototype, { __class__: cd });
    var qe = function(a) { null == a && (a = 1);
        this._realDt = 0;
        ja.call(this);
        this.scale = new qa(a) };
    j["flambe.SpeedAdjuster"] = qe;
    qe.__name__ = ["flambe", "SpeedAdjuster"];
    qe.__super__ = ja;
    qe.prototype = A(ja.prototype, {
        get_name: function() { return "SpeedAdjuster_2" },
        onUpdate: function(a) { 0 < this._realDt && (a = this._realDt, this._realDt = 0);
            this.scale.update(a) },
        __class__: qe
    });
    var sg = function() {};
    j["flambe.animation.Behavior"] = sg;
    sg.__name__ = ["flambe", "animation", "Behavior"];
    sg.prototype = { __class__: sg };
    var nc = function() {};
    j["flambe.asset.Asset"] = nc;
    nc.__name__ = ["flambe", "asset", "Asset"];
    nc.__interfaces__ = [Gb];
    nc.prototype = { __class__: nc };
    var E = j["flambe.asset.AssetFormat"] = { __ename__: ["flambe", "asset", "AssetFormat"], __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",") };
    E.WEBP = ["WEBP", 0];
    E.WEBP.toString = g;
    E.WEBP.__enum__ = E;
    E.JXR = ["JXR", 1];
    E.JXR.toString = g;
    E.JXR.__enum__ = E;
    E.PNG = ["PNG", 2];
    E.PNG.toString = g;
    E.PNG.__enum__ = E;
    E.JPG = ["JPG", 3];
    E.JPG.toString = g;
    E.JPG.__enum__ = E;
    E.GIF = ["GIF", 4];
    E.GIF.toString = g;
    E.GIF.__enum__ = E;
    E.DDS = ["DDS", 5];
    E.DDS.toString = g;
    E.DDS.__enum__ = E;
    E.PVR = ["PVR", 6];
    E.PVR.toString = g;
    E.PVR.__enum__ = E;
    E.PKM = ["PKM", 7];
    E.PKM.toString = g;
    E.PKM.__enum__ = E;
    E.MP3 = ["MP3", 8];
    E.MP3.toString = g;
    E.MP3.__enum__ = E;
    E.M4A = ["M4A", 9];
    E.M4A.toString = g;
    E.M4A.__enum__ =
        E;
    E.OPUS = ["OPUS", 10];
    E.OPUS.toString = g;
    E.OPUS.__enum__ = E;
    E.OGG = ["OGG", 11];
    E.OGG.toString = g;
    E.OGG.__enum__ = E;
    E.WAV = ["WAV", 12];
    E.WAV.toString = g;
    E.WAV.__enum__ = E;
    E.Data = ["Data", 13];
    E.Data.toString = g;
    E.Data.__enum__ = E;
    E.__empty_constructs__ = [E.WEBP, E.JXR, E.PNG, E.JPG, E.GIF, E.DDS, E.PVR, E.PKM, E.MP3, E.M4A, E.OPUS, E.OGG, E.WAV, E.Data];
    var Lf = function(a, b, c, e) { this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = e };
    j["flambe.asset.AssetEntry"] = Lf;
    Lf.__name__ = ["flambe", "asset", "AssetEntry"];
    Lf.prototype = { __class__: Lf };
    var re = function() {};
    j["flambe.asset.AssetPack"] = re;
    re.__name__ = ["flambe", "asset", "AssetPack"];
    re.__interfaces__ = [Gb];
    re.prototype = { __class__: re };
    var se = function() {};
    j["flambe.asset.File"] = se;
    se.__name__ = ["flambe", "asset", "File"];
    se.__interfaces__ = [nc];
    se.prototype = { __class__: se };
    var pb = function() { this._localBase = this._remoteBase = null;
        this._entries = [] };
    j["flambe.asset.Manifest"] = pb;
    pb.__name__ = ["flambe", "asset", "Manifest"];
    pb.fromAssets = function(a, b) {
        null == b && (b = !0);
        var c = t.field(tg.getType(pb).assets[0],
            a);
        if (null == c) { if (b) throw Da.withFields("Missing asset pack", ["name", a]); return null }
        var e = new pb;
        e.set_localBase("assets");
        for (var d = 0; d < c.length;) { var f = c[d];++d; var g = f.name,
                h = a + "/" + g + "?v=" + B.string(f.md5),
                i = pb.inferFormat(g);
            i != E.Data && (g = Da.removeFileExtension(g));
            e.add(g, h, f.bytes, i) }
        return e
    };
    pb.inferFormat = function(a) {
        a = Da.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "gif":
                return E.GIF;
            case "jpg":
            case "jpeg":
                return E.JPG;
            case "jxr":
            case "wdp":
                return E.JXR;
            case "png":
                return E.PNG;
            case "webp":
                return E.WEBP;
            case "dds":
                return E.DDS;
            case "pvr":
                return E.PVR;
            case "pkm":
                return E.PKM;
            case "m4a":
                return E.M4A;
            case "mp3":
                return E.MP3;
            case "ogg":
                return E.OGG;
            case "opus":
                return E.OPUS;
            case "wav":
                return E.WAV
        } else null;
        return E.Data
    };
    pb.prototype = {
        add: function(a, b, c, e) { null == c && (c = 0);
            null == e && (e = pb.inferFormat(b));
            a = new Lf(a, b, e, c);
            this._entries.push(a); return a },
        iterator: function() { return M.iter(this._entries) },
        getFullURL: function(a) {
            var b;
            b = null != this.get_remoteBase() && pb._supportsCrossOrigin ?
                this.get_remoteBase() : this.get_localBase();
            return null != b ? Da.joinPath(b, a.url) : a.url
        },
        get_localBase: function() { return this._localBase },
        set_localBase: function(a) { null != a && Mf.that(!$.startsWith(a, "http://") && !$.startsWith(a, "https://"), "localBase must be a path on the same domain, NOT starting with http(s)://", null); return this._localBase = a },
        get_remoteBase: function() { return this._remoteBase },
        set_remoteBase: function(a) {
            null != a && Mf.that($.startsWith(a, "http://") || $.startsWith(a, "https://"), "remoteBase must be on a remote domain, starting with http(s)://",
                null);
            return this._remoteBase = a
        },
        __class__: pb,
        __properties__: { set_remoteBase: "set_remoteBase", get_remoteBase: "get_remoteBase", set_localBase: "set_localBase", get_localBase: "get_localBase" }
    };
    var na = j["flambe.display.BlendMode"] = { __ename__: ["flambe", "display", "BlendMode"], __constructs__: "Normal,Add,Multiply,Screen,Mask,Copy".split(",") };
    na.Normal = ["Normal", 0];
    na.Normal.toString = g;
    na.Normal.__enum__ = na;
    na.Add = ["Add", 1];
    na.Add.toString = g;
    na.Add.__enum__ = na;
    na.Multiply = ["Multiply", 2];
    na.Multiply.toString =
        g;
    na.Multiply.__enum__ = na;
    na.Screen = ["Screen", 3];
    na.Screen.toString = g;
    na.Screen.__enum__ = na;
    na.Mask = ["Mask", 4];
    na.Mask.toString = g;
    na.Mask.__enum__ = na;
    na.Copy = ["Copy", 5];
    na.Copy.toString = g;
    na.Copy.__enum__ = na;
    na.__empty_constructs__ = [na.Normal, na.Add, na.Multiply, na.Screen, na.Mask, na.Copy];
    var La = function(a, b, c) { J.call(this);
        this.color = a;
        this.width = new qa(b);
        this.height = new qa(c) };
    j["flambe.display.FillSprite"] = La;
    La.__name__ = ["flambe", "display", "FillSprite"];
    La.__super__ = J;
    La.prototype = A(J.prototype, { draw: function(a) { a.fillRect(this.color, 0, 0, this.width._value, this.height._value) }, getNaturalWidth: function() { return this.width._value }, getNaturalHeight: function() { return this.height._value }, setSize: function(a, b) { this.width.set__(a);
            this.height.set__(b); return this }, onUpdate: function(a) { J.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a) }, __class__: La });
    var te = function(a) {
        this._kernings = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width =
            this.height = 0;
        this.charCode = a
    };
    j["flambe.display.Glyph"] = te;
    te.__name__ = ["flambe", "display", "Glyph"];
    te.prototype = { draw: function(a, b, c) { 0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height) }, getKerning: function(a) { return null != this._kernings ? B["int"](this._kernings.get(a)) : 0 }, setKerning: function(a, b) { null == this._kernings && (this._kernings = new cb);
            this._kernings.set(a, b) }, __class__: te };
    var dc = function(a, b) {
        this.name = b;
        this._pack = a;
        this._file = a.getFile(b +
            ".fnt");
        this.reload()
    };
    j["flambe.display.Font"] = dc;
    dc.__name__ = ["flambe", "display", "Font"];
    dc.prototype = {
        layoutText: function(a, b, c, e, d) { null == d && (d = 0);
            null == e && (e = 0);
            null == c && (c = 0);
            null == b && (b = ta.Left); return new oc(this, a, b, c, e, d) },
        getGlyph: function(a) { return this._glyphs.get(a) },
        reload: function() {
            this._glyphs = new cb;
            this._glyphs.set(dc.NEWLINE.charCode, dc.NEWLINE);
            for (var a = new Oc(this._file.toString()), b = new cb, c = this.name.lastIndexOf("/"), c = 0 <= c ? M.substr(this.name, 0, c + 1) : "", e = a.keywords(); e.hasNext();) switch (e.next()) {
                case "info":
                    for (var d =
                            a.pairs(); d.hasNext();) { var f = d.next(); switch (f.key) {
                            case "size":
                                this.size = f.getInt() } }
                    break;
                case "common":
                    for (d = a.pairs(); d.hasNext();) switch (f = d.next(), f.key) {
                        case "lineHeight":
                            this.lineHeight = f.getInt() }
                    break;
                case "page":
                    for (var d = 0, f = null, g = a.pairs(); g.hasNext();) { var h = g.next(); switch (h.key) {
                            case "id":
                                d = h.getInt(); break;
                            case "file":
                                f = h.getString() } } f = this._pack.getTexture(c + Da.removeFileExtension(f));
                    b.set(d, f);
                    break;
                case "char":
                    d = null;
                    for (f = a.pairs(); f.hasNext();) switch (g = f.next(), g.key) {
                        case "id":
                            d =
                                new te(g.getInt());
                            break;
                        case "x":
                            d.x = g.getInt();
                            break;
                        case "y":
                            d.y = g.getInt();
                            break;
                        case "width":
                            d.width = g.getInt();
                            break;
                        case "height":
                            d.height = g.getInt();
                            break;
                        case "page":
                            g = g.getInt();
                            d.page = b.get(g);
                            break;
                        case "xoffset":
                            d.xOffset = g.getInt();
                            break;
                        case "yoffset":
                            d.yOffset = g.getInt();
                            break;
                        case "xadvance":
                            d.xAdvance = g.getInt()
                    }
                    this._glyphs.set(d.charCode, d);
                    break;
                case "kerning":
                    d = null;
                    g = f = 0;
                    for (h = a.pairs(); h.hasNext();) {
                        var i = h.next();
                        switch (i.key) {
                            case "first":
                                d = this._glyphs.get(i.getInt());
                                break;
                            case "second":
                                f = i.getInt();
                                break;
                            case "amount":
                                g = i.getInt()
                        }
                    }
                    null != d && 0 != g && d.setKerning(f, g)
            }
        },
        __class__: dc
    };
    var ta = j["flambe.display.TextAlign"] = { __ename__: ["flambe", "display", "TextAlign"], __constructs__: ["Left", "Center", "Right"] };
    ta.Left = ["Left", 0];
    ta.Left.toString = g;
    ta.Left.__enum__ = ta;
    ta.Center = ["Center", 1];
    ta.Center.toString = g;
    ta.Center.__enum__ = ta;
    ta.Right = ["Right", 2];
    ta.Right.toString = g;
    ta.Right.__enum__ = ta;
    ta.__empty_constructs__ = [ta.Left, ta.Center, ta.Right];
    var oc = function(a, b, c, e, d, f) {
        this.lines =
            0;
        var g = this;
        this._font = a;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(a.lineHeight + f);
        this.bounds = new Sa;
        for (var h = [], f = b.length, i = 0; i < f;) { var j = i++,
                j = b.charCodeAt(j),
                j = a._glyphs.get(j);
            null != j ? this._glyphs.push(j) : null }
        for (var b = -1, k = 0, l = 0, a = a._glyphs.get(10), f = function() { g.bounds.width = lb.max(g.bounds.width, k);
                g.bounds.height += l;
                h[g.lines] = k;
                l = k = 0;++g.lines }, i = 0; i < this._glyphs.length;) {
            j = this._glyphs[i];
            this._offsets[i] = Math.round(k);
            var n = 0 < e && k + j.width > e;
            n || j == a ? (n && (0 <= b ? (this._glyphs[b] =
                a, k = this._offsets[b], i = b) : this._glyphs.splice(i, 0, a)), b = -1, l = this._lineOffset, f()) : (32 == j.charCode && (b = i), k += j.xAdvance + d, l = lb.max(l, j.height + j.yOffset), i + 1 < this._glyphs.length && (k += j.getKerning(this._glyphs[i + 1].charCode)));
            ++i
        }
        f();
        d = 0;
        a = oc.getAlignOffset(c, h[0], e);
        b = 1.79769313486231E308;
        f = -1.79769313486231E308;
        j = i = 0;
        for (n = this._glyphs.length; j < n;) {
            var o = this._glyphs[j];
            10 == o.charCode && (d += this._lineOffset, ++i, a = oc.getAlignOffset(c, h[i], e));
            this._offsets[j] += a;
            var p = d + o.yOffset;
            b < p || (b = p);
            f = lb.max(f,
                p + o.height);
            ++j
        }
        this.bounds.x = oc.getAlignOffset(c, this.bounds.width, e);
        this.bounds.y = b;
        this.bounds.height = f - b
    };
    j["flambe.display.TextLayout"] = oc;
    oc.__name__ = ["flambe", "display", "TextLayout"];
    oc.getAlignOffset = function(a, b, c) { switch (a[1]) {
            case 0:
                return 0;
            case 2:
                return c - b;
            case 1:
                return Math.round((c - b) / 2) } };
    oc.prototype = { draw: function(a) { for (var b = 0, c = 0, e = this._glyphs.length; c < e;) { var d = this._glyphs[c];
                10 == d.charCode ? b += this._lineOffset : d.draw(a, this._offsets[c], b);++c } }, __class__: oc };
    var Oc = function(a) {
        this._configText =
            a;
        this._keywordPattern = new v("([A-Za-z]+)(.*)", "");
        this._pairPattern = new v('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    j["flambe.display._Font.ConfigParser"] = Oc;
    Oc.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    Oc.advance = function(a, b) { var c = b.matchedPos(); return M.substr(a, c.pos + c.len, a.length) };
    Oc.prototype = {
        keywords: function() { var a = this,
                b = this._configText; return { next: function() { b = Oc.advance(b, a._keywordPattern);
                    a._pairText = a._keywordPattern.matched(2); return a._keywordPattern.matched(1) }, hasNext: function() { return a._keywordPattern.match(b) } } },
        pairs: function() { var a = this,
                b = this._pairText; return { next: function() { b = Oc.advance(b, a._pairPattern); return new Nf(a._pairPattern.matched(1), a._pairPattern.matched(2)) }, hasNext: function() { return a._pairPattern.match(b) } } },
        __class__: Oc
    };
    var Nf = function(a, b) { this.key = a;
        this._value = b };
    j["flambe.display._Font.ConfigPair"] = Nf;
    Nf.__name__ = ["flambe", "display", "_Font", "ConfigPair"];
    Nf.prototype = {
        getInt: function() { return B.parseInt(this._value) },
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null :
                M.substr(this._value, 1, this._value.length - 2)
        },
        __class__: Nf
    };
    var Of = function() {};
    j["flambe.display.Graphics"] = Of;
    Of.__name__ = ["flambe", "display", "Graphics"];
    Of.prototype = { __class__: Of };
    var Bb = j["flambe.display.Orientation"] = { __ename__: ["flambe", "display", "Orientation"], __constructs__: ["Portrait", "Landscape"] };
    Bb.Portrait = ["Portrait", 0];
    Bb.Portrait.toString = g;
    Bb.Portrait.__enum__ = Bb;
    Bb.Landscape = ["Landscape", 1];
    Bb.Landscape.toString = g;
    Bb.Landscape.__enum__ = Bb;
    Bb.__empty_constructs__ = [Bb.Portrait, Bb.Landscape];
    var ue = function() {};
    j["flambe.display.Texture"] = ue;
    ue.__name__ = ["flambe", "display", "Texture"];
    ue.__interfaces__ = [nc];
    ue.prototype = { __class__: ue };
    var ug = function() {};
    j["flambe.display.SubTexture"] = ug;
    ug.__name__ = ["flambe", "display", "SubTexture"];
    ug.__interfaces__ = [ue];
    var bd = function(a, b) {
        null == b && (b = "");
        this._layout = null;
        var c = this;
        J.call(this);
        this._font = a;
        this._text = b;
        this._align = ta.Left;
        this._flags |= 128;
        var e = function() { c._flags |= 128 };
        this.wrapWidth = new qa(0, e);
        this.letterSpacing = new qa(0, e);
        this.lineSpacing =
            new qa(0, e)
    };
    j["flambe.display.TextSprite"] = bd;
    bd.__name__ = ["flambe", "display", "TextSprite"];
    bd.__super__ = J;
    bd.prototype = A(J.prototype, {
        draw: function(a) { this.updateLayout();
            this._layout.draw(a) },
        getNaturalWidth: function() { this.updateLayout(); return 0 < this.wrapWidth._value ? this.wrapWidth._value : this._layout.bounds.width },
        getNaturalHeight: function() { this.updateLayout(); var a = this._layout.lines * (this._font.lineHeight + this.lineSpacing._value),
                b = this._layout.bounds.height; return a > b ? a : b },
        containsLocal: function(a,
            b) { this.updateLayout(); return this._layout.bounds.contains(a, b) },
        set_text: function(a) { a != this._text && (this._text = a, this._flags |= 128); return a },
        set_font: function(a) { a != this._font && (this._font = a, this._flags |= 128); return a },
        set_align: function(a) { a != this._align && (this._align = a, this._flags |= 128); return a },
        updateLayout: function() { 0 != (this._flags & 128) && (this._flags &= -129, this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value)) },
        onUpdate: function(a) {
            J.prototype.onUpdate.call(this,
                a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a)
        },
        __class__: bd,
        __properties__: A(J.prototype.__properties__, { set_align: "set_align", set_font: "set_font", set_text: "set_text" })
    });
    var f = j["flambe.input.Key"] = { __ename__: ["flambe", "input", "Key"], __constructs__: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Number0,Number1,Number2,Number3,Number4,Number5,Number6,Number7,Number8,Number9,Numpad0,Numpad1,Numpad2,Numpad3,Numpad4,Numpad5,Numpad6,Numpad7,Numpad8,Numpad9,NumpadAdd,NumpadDecimal,NumpadDivide,NumpadEnter,NumpadMultiply,NumpadSubtract,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,Left,Up,Right,Down,Alt,Backquote,Backslash,Backspace,CapsLock,Comma,Command,Control,Delete,End,Enter,Equals,Escape,Home,Insert,LeftBracket,Minus,PageDown,PageUp,Period,Quote,RightBracket,Semicolon,Shift,Slash,Space,Tab,Menu,Search,Unknown".split(",") };
    f.A = ["A", 0];
    f.A.toString = g;
    f.A.__enum__ = f;
    f.B = ["B", 1];
    f.B.toString = g;
    f.B.__enum__ = f;
    f.C = ["C", 2];
    f.C.toString = g;
    f.C.__enum__ = f;
    f.D = ["D", 3];
    f.D.toString = g;
    f.D.__enum__ = f;
    f.E = ["E", 4];
    f.E.toString = g;
    f.E.__enum__ = f;
    f.F = ["F", 5];
    f.F.toString = g;
    f.F.__enum__ = f;
    f.G = ["G", 6];
    f.G.toString = g;
    f.G.__enum__ = f;
    f.H = ["H", 7];
    f.H.toString = g;
    f.H.__enum__ = f;
    f.I = ["I", 8];
    f.I.toString = g;
    f.I.__enum__ = f;
    f.J = ["J", 9];
    f.J.toString = g;
    f.J.__enum__ = f;
    f.K = ["K", 10];
    f.K.toString = g;
    f.K.__enum__ = f;
    f.L = ["L", 11];
    f.L.toString = g;
    f.L.__enum__ =
        f;
    f.M = ["M", 12];
    f.M.toString = g;
    f.M.__enum__ = f;
    f.N = ["N", 13];
    f.N.toString = g;
    f.N.__enum__ = f;
    f.O = ["O", 14];
    f.O.toString = g;
    f.O.__enum__ = f;
    f.P = ["P", 15];
    f.P.toString = g;
    f.P.__enum__ = f;
    f.Q = ["Q", 16];
    f.Q.toString = g;
    f.Q.__enum__ = f;
    f.R = ["R", 17];
    f.R.toString = g;
    f.R.__enum__ = f;
    f.S = ["S", 18];
    f.S.toString = g;
    f.S.__enum__ = f;
    f.T = ["T", 19];
    f.T.toString = g;
    f.T.__enum__ = f;
    f.U = ["U", 20];
    f.U.toString = g;
    f.U.__enum__ = f;
    f.V = ["V", 21];
    f.V.toString = g;
    f.V.__enum__ = f;
    f.W = ["W", 22];
    f.W.toString = g;
    f.W.__enum__ = f;
    f.X = ["X", 23];
    f.X.toString =
        g;
    f.X.__enum__ = f;
    f.Y = ["Y", 24];
    f.Y.toString = g;
    f.Y.__enum__ = f;
    f.Z = ["Z", 25];
    f.Z.toString = g;
    f.Z.__enum__ = f;
    f.Number0 = ["Number0", 26];
    f.Number0.toString = g;
    f.Number0.__enum__ = f;
    f.Number1 = ["Number1", 27];
    f.Number1.toString = g;
    f.Number1.__enum__ = f;
    f.Number2 = ["Number2", 28];
    f.Number2.toString = g;
    f.Number2.__enum__ = f;
    f.Number3 = ["Number3", 29];
    f.Number3.toString = g;
    f.Number3.__enum__ = f;
    f.Number4 = ["Number4", 30];
    f.Number4.toString = g;
    f.Number4.__enum__ = f;
    f.Number5 = ["Number5", 31];
    f.Number5.toString = g;
    f.Number5.__enum__ =
        f;
    f.Number6 = ["Number6", 32];
    f.Number6.toString = g;
    f.Number6.__enum__ = f;
    f.Number7 = ["Number7", 33];
    f.Number7.toString = g;
    f.Number7.__enum__ = f;
    f.Number8 = ["Number8", 34];
    f.Number8.toString = g;
    f.Number8.__enum__ = f;
    f.Number9 = ["Number9", 35];
    f.Number9.toString = g;
    f.Number9.__enum__ = f;
    f.Numpad0 = ["Numpad0", 36];
    f.Numpad0.toString = g;
    f.Numpad0.__enum__ = f;
    f.Numpad1 = ["Numpad1", 37];
    f.Numpad1.toString = g;
    f.Numpad1.__enum__ = f;
    f.Numpad2 = ["Numpad2", 38];
    f.Numpad2.toString = g;
    f.Numpad2.__enum__ = f;
    f.Numpad3 = ["Numpad3", 39];
    f.Numpad3.toString =
        g;
    f.Numpad3.__enum__ = f;
    f.Numpad4 = ["Numpad4", 40];
    f.Numpad4.toString = g;
    f.Numpad4.__enum__ = f;
    f.Numpad5 = ["Numpad5", 41];
    f.Numpad5.toString = g;
    f.Numpad5.__enum__ = f;
    f.Numpad6 = ["Numpad6", 42];
    f.Numpad6.toString = g;
    f.Numpad6.__enum__ = f;
    f.Numpad7 = ["Numpad7", 43];
    f.Numpad7.toString = g;
    f.Numpad7.__enum__ = f;
    f.Numpad8 = ["Numpad8", 44];
    f.Numpad8.toString = g;
    f.Numpad8.__enum__ = f;
    f.Numpad9 = ["Numpad9", 45];
    f.Numpad9.toString = g;
    f.Numpad9.__enum__ = f;
    f.NumpadAdd = ["NumpadAdd", 46];
    f.NumpadAdd.toString = g;
    f.NumpadAdd.__enum__ = f;
    f.NumpadDecimal = ["NumpadDecimal", 47];
    f.NumpadDecimal.toString = g;
    f.NumpadDecimal.__enum__ = f;
    f.NumpadDivide = ["NumpadDivide", 48];
    f.NumpadDivide.toString = g;
    f.NumpadDivide.__enum__ = f;
    f.NumpadEnter = ["NumpadEnter", 49];
    f.NumpadEnter.toString = g;
    f.NumpadEnter.__enum__ = f;
    f.NumpadMultiply = ["NumpadMultiply", 50];
    f.NumpadMultiply.toString = g;
    f.NumpadMultiply.__enum__ = f;
    f.NumpadSubtract = ["NumpadSubtract", 51];
    f.NumpadSubtract.toString = g;
    f.NumpadSubtract.__enum__ = f;
    f.F1 = ["F1", 52];
    f.F1.toString = g;
    f.F1.__enum__ = f;
    f.F2 = ["F2", 53];
    f.F2.toString =
        g;
    f.F2.__enum__ = f;
    f.F3 = ["F3", 54];
    f.F3.toString = g;
    f.F3.__enum__ = f;
    f.F4 = ["F4", 55];
    f.F4.toString = g;
    f.F4.__enum__ = f;
    f.F5 = ["F5", 56];
    f.F5.toString = g;
    f.F5.__enum__ = f;
    f.F6 = ["F6", 57];
    f.F6.toString = g;
    f.F6.__enum__ = f;
    f.F7 = ["F7", 58];
    f.F7.toString = g;
    f.F7.__enum__ = f;
    f.F8 = ["F8", 59];
    f.F8.toString = g;
    f.F8.__enum__ = f;
    f.F9 = ["F9", 60];
    f.F9.toString = g;
    f.F9.__enum__ = f;
    f.F10 = ["F10", 61];
    f.F10.toString = g;
    f.F10.__enum__ = f;
    f.F11 = ["F11", 62];
    f.F11.toString = g;
    f.F11.__enum__ = f;
    f.F12 = ["F12", 63];
    f.F12.toString = g;
    f.F12.__enum__ = f;
    f.F13 = ["F13", 64];
    f.F13.toString = g;
    f.F13.__enum__ = f;
    f.F14 = ["F14", 65];
    f.F14.toString = g;
    f.F14.__enum__ = f;
    f.F15 = ["F15", 66];
    f.F15.toString = g;
    f.F15.__enum__ = f;
    f.Left = ["Left", 67];
    f.Left.toString = g;
    f.Left.__enum__ = f;
    f.Up = ["Up", 68];
    f.Up.toString = g;
    f.Up.__enum__ = f;
    f.Right = ["Right", 69];
    f.Right.toString = g;
    f.Right.__enum__ = f;
    f.Down = ["Down", 70];
    f.Down.toString = g;
    f.Down.__enum__ = f;
    f.Alt = ["Alt", 71];
    f.Alt.toString = g;
    f.Alt.__enum__ = f;
    f.Backquote = ["Backquote", 72];
    f.Backquote.toString = g;
    f.Backquote.__enum__ = f;
    f.Backslash = ["Backslash", 73];
    f.Backslash.toString = g;
    f.Backslash.__enum__ = f;
    f.Backspace = ["Backspace", 74];
    f.Backspace.toString = g;
    f.Backspace.__enum__ = f;
    f.CapsLock = ["CapsLock", 75];
    f.CapsLock.toString = g;
    f.CapsLock.__enum__ = f;
    f.Comma = ["Comma", 76];
    f.Comma.toString = g;
    f.Comma.__enum__ = f;
    f.Command = ["Command", 77];
    f.Command.toString = g;
    f.Command.__enum__ = f;
    f.Control = ["Control", 78];
    f.Control.toString = g;
    f.Control.__enum__ = f;
    f.Delete = ["Delete", 79];
    f.Delete.toString = g;
    f.Delete.__enum__ = f;
    f.End = ["End", 80];
    f.End.toString = g;
    f.End.__enum__ =
        f;
    f.Enter = ["Enter", 81];
    f.Enter.toString = g;
    f.Enter.__enum__ = f;
    f.Equals = ["Equals", 82];
    f.Equals.toString = g;
    f.Equals.__enum__ = f;
    f.Escape = ["Escape", 83];
    f.Escape.toString = g;
    f.Escape.__enum__ = f;
    f.Home = ["Home", 84];
    f.Home.toString = g;
    f.Home.__enum__ = f;
    f.Insert = ["Insert", 85];
    f.Insert.toString = g;
    f.Insert.__enum__ = f;
    f.LeftBracket = ["LeftBracket", 86];
    f.LeftBracket.toString = g;
    f.LeftBracket.__enum__ = f;
    f.Minus = ["Minus", 87];
    f.Minus.toString = g;
    f.Minus.__enum__ = f;
    f.PageDown = ["PageDown", 88];
    f.PageDown.toString = g;
    f.PageDown.__enum__ =
        f;
    f.PageUp = ["PageUp", 89];
    f.PageUp.toString = g;
    f.PageUp.__enum__ = f;
    f.Period = ["Period", 90];
    f.Period.toString = g;
    f.Period.__enum__ = f;
    f.Quote = ["Quote", 91];
    f.Quote.toString = g;
    f.Quote.__enum__ = f;
    f.RightBracket = ["RightBracket", 92];
    f.RightBracket.toString = g;
    f.RightBracket.__enum__ = f;
    f.Semicolon = ["Semicolon", 93];
    f.Semicolon.toString = g;
    f.Semicolon.__enum__ = f;
    f.Shift = ["Shift", 94];
    f.Shift.toString = g;
    f.Shift.__enum__ = f;
    f.Slash = ["Slash", 95];
    f.Slash.toString = g;
    f.Slash.__enum__ = f;
    f.Space = ["Space", 96];
    f.Space.toString =
        g;
    f.Space.__enum__ = f;
    f.Tab = ["Tab", 97];
    f.Tab.toString = g;
    f.Tab.__enum__ = f;
    f.Menu = ["Menu", 98];
    f.Menu.toString = g;
    f.Menu.__enum__ = f;
    f.Search = ["Search", 99];
    f.Search.toString = g;
    f.Search.__enum__ = f;
    f.Unknown = function(a) { a = ["Unknown", 100, a];
        a.__enum__ = f;
        a.toString = g; return a };
    f.__empty_constructs__ = [f.A, f.B, f.C, f.D, f.E, f.F, f.G, f.H, f.I, f.J, f.K, f.L, f.M, f.N, f.O, f.P, f.Q, f.R, f.S, f.T, f.U, f.V, f.W, f.X, f.Y, f.Z, f.Number0, f.Number1, f.Number2, f.Number3, f.Number4, f.Number5, f.Number6, f.Number7, f.Number8, f.Number9, f.Numpad0,
        f.Numpad1, f.Numpad2, f.Numpad3, f.Numpad4, f.Numpad5, f.Numpad6, f.Numpad7, f.Numpad8, f.Numpad9, f.NumpadAdd, f.NumpadDecimal, f.NumpadDivide, f.NumpadEnter, f.NumpadMultiply, f.NumpadSubtract, f.F1, f.F2, f.F3, f.F4, f.F5, f.F6, f.F7, f.F8, f.F9, f.F10, f.F11, f.F12, f.F13, f.F14, f.F15, f.Left, f.Up, f.Right, f.Down, f.Alt, f.Backquote, f.Backslash, f.Backspace, f.CapsLock, f.Comma, f.Command, f.Control, f.Delete, f.End, f.Enter, f.Equals, f.Escape, f.Home, f.Insert, f.LeftBracket, f.Minus, f.PageDown, f.PageUp, f.Period, f.Quote, f.RightBracket,
        f.Semicolon, f.Shift, f.Slash, f.Space, f.Tab, f.Menu, f.Search
    ];
    var Pf = function() { this.init(0, null) };
    j["flambe.input.KeyboardEvent"] = Pf;
    Pf.__name__ = ["flambe", "input", "KeyboardEvent"];
    Pf.prototype = { init: function(a, b) { this.id = a;
            this.key = b }, __class__: Pf };
    var Fa = j["flambe.input.MouseButton"] = { __ename__: ["flambe", "input", "MouseButton"], __constructs__: ["Left", "Middle", "Right", "Unknown"] };
    Fa.Left = ["Left", 0];
    Fa.Left.toString = g;
    Fa.Left.__enum__ = Fa;
    Fa.Middle = ["Middle", 1];
    Fa.Middle.toString = g;
    Fa.Middle.__enum__ =
        Fa;
    Fa.Right = ["Right", 2];
    Fa.Right.toString = g;
    Fa.Right.__enum__ = Fa;
    Fa.Unknown = function(a) { a = ["Unknown", 3, a];
        a.__enum__ = Fa;
        a.toString = g; return a };
    Fa.__empty_constructs__ = [Fa.Left, Fa.Middle, Fa.Right];
    var gb = j["flambe.input.MouseCursor"] = { __ename__: ["flambe", "input", "MouseCursor"], __constructs__: ["Default", "Button", "None"] };
    gb.Default = ["Default", 0];
    gb.Default.toString = g;
    gb.Default.__enum__ = gb;
    gb.Button = ["Button", 1];
    gb.Button.toString = g;
    gb.Button.__enum__ = gb;
    gb.None = ["None", 2];
    gb.None.toString = g;
    gb.None.__enum__ =
        gb;
    gb.__empty_constructs__ = [gb.Default, gb.Button, gb.None];
    var Qf = function() { this.init(0, 0, 0, null) };
    j["flambe.input.MouseEvent"] = Qf;
    Qf.__name__ = ["flambe", "input", "MouseEvent"];
    Qf.prototype = { init: function(a, b, c, e) { this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = e }, __class__: Qf };
    var ed = j["flambe.input.EventSource"] = { __ename__: ["flambe", "input", "EventSource"], __constructs__: ["Mouse", "Touch"] };
    ed.Mouse = function(a) { a = ["Mouse", 0, a];
        a.__enum__ = ed;
        a.toString = g; return a };
    ed.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = ed;
        a.toString = g;
        return a
    };
    ed.__empty_constructs__ = [];
    var Rf = function() { this.init(0, 0, 0, null, null) };
    j["flambe.input.PointerEvent"] = Rf;
    Rf.__name__ = ["flambe", "input", "PointerEvent"];
    Rf.prototype = { init: function(a, b, c, e, d) { this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = e;
            this.source = d;
            this._stopped = !1 }, __class__: Rf };
    var Sf = function(a) { this.id = a;
        this._source = ed.Touch(this) };
    j["flambe.input.TouchPoint"] = Sf;
    Sf.__name__ = ["flambe", "input", "TouchPoint"];
    Sf.prototype = {
        init: function(a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: Sf
    };
    var lb = function() {};
    j["flambe.math.FMath"] = lb;
    lb.__name__ = ["flambe", "math", "FMath"];
    lb.toDegrees = function(a) { return 180 * a / 3.141592653589793 };
    lb.max = function(a, b) { return a > b ? a : b };
    lb.clamp = function(a, b, c) { return a < b ? b : a > c ? c : a };
    var fc = function() { this.identity() };
    j["flambe.math.Matrix"] = fc;
    fc.__name__ = ["flambe", "math", "Matrix"];
    fc.multiply = function(a, b, c) {
        null == c && (c = new fc);
        var e = a.m00 * b.m00 + a.m01 * b.m10,
            d = a.m00 * b.m01 + a.m01 * b.m11,
            f = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
        c.m00 = e;
        c.m01 =
            d;
        c.m02 = f;
        e = a.m10 * b.m00 + a.m11 * b.m10;
        d = a.m10 * b.m01 + a.m11 * b.m11;
        f = a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
        c.m10 = e;
        c.m11 = d;
        c.m12 = f;
        return c
    };
    fc.prototype = {
        set: function(a, b, c, e, d, f) { this.m00 = a;
            this.m01 = c;
            this.m02 = d;
            this.m10 = b;
            this.m11 = e;
            this.m12 = f },
        identity: function() { this.set(1, 0, 0, 1, 0, 0) },
        compose: function(a, b, c, e, d) { var f = Math.sin(d),
                d = Math.cos(d);
            this.set(d * c, f * c, -f * e, d * e, a, b) },
        translate: function(a, b) { this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a },
        determinant: function() {
            return this.m00 * this.m11 -
                this.m01 * this.m10
        },
        inverseTransform: function(a, b, c) { var e = this.determinant(); if (0 == e) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / e;
            c.y = (b * this.m00 - a * this.m10) / e; return !0 },
        clone: function(a) { null == a && (a = new fc);
            a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12); return a },
        __class__: fc
    };
    var Sa = function(a, b, c, e) { null == e && (e = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, e) };
    j["flambe.math.Rectangle"] = Sa;
    Sa.__name__ = ["flambe", "math", "Rectangle"];
    Sa.prototype = {
        set: function(a,
            b, c, e) { this.x = a;
            this.y = b;
            this.width = c;
            this.height = e },
        contains: function(a, b) { a -= this.x; if (0 <= this.width) { if (0 > a || a > this.width) return !1 } else if (0 < a || a < this.width) return !1;
            b -= this.y; if (0 <= this.height) { if (0 > b || b > this.height) return !1 } else if (0 < b || b < this.height) return !1; return !0 },
        __class__: Sa
    };
    var ab = function() { this._disposed = !1 };
    j["flambe.platform.BasicAsset"] = ab;
    ab.__name__ = ["flambe", "platform", "BasicAsset"];
    ab.__interfaces__ = [nc];
    ab.prototype = {
        dispose: function() { this._disposed || (this._disposed = !0, this.onDisposed()) },
        onDisposed: function() { null },
        __class__: ab
    };
    var pc = function(a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new ve;
        this._bytesLoaded = new G;
        this._pack = new we(b, this);
        var e = Jb.array(b);
        if (0 == e.length) this.handleSuccess();
        else {
            for (var d = new G, f = 0; f < e.length;) { var g = e[f];++f; var h = d.get(g.name);
                null == h && (h = [], d.set(g.name, h));
                h.push(g) } this._assetsRemaining = Jb.count(d);
            for (e = d.iterator(); e.hasNext();) d = [e.next()], this.pickBestEntry(d[0], function(a) {
                return function(e) {
                    if (null != e) {
                        var d = b.getFullURL(e);
                        try { c.loadEntry(d, e) } catch (f) { c.handleError(e, "Unexpected error: " + B.string(f)) } d = c.promise;
                        d.set_total(d._total + e.bytes)
                    } else e = a[0][0], pc.isAudio(e.format) ? c.handleLoad(e, tb.getInstance()) : c.handleError(e, "Could not find a supported format to load")
                }
            }(d))
        }
    };
    j["flambe.platform.BasicAssetPackLoader"] = pc;
    pc.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    pc.isAudio = function(a) { switch (a[1]) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return !0;
            default:
                return !1 } };
    pc.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(a, b) { this.getAssetFormats(function(c) { for (var e = 0; e < c.length;) { var d = c[e];++e; for (var f = 0; f < a.length;) { var g = a[f];++f; if (g.format == d) { b(g); return } } } b(null) }) },
        loadEntry: function() { null },
        getAssetFormats: function() { null },
        handleLoad: function(a, b) {
            if (!this._pack.disposed) {
                this.handleProgress(a, a.bytes);
                var c;
                switch (a.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        c = this._pack.textures;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        c = this._pack.sounds;
                        break;
                    case 13:
                        c =
                            this._pack.files
                }
                c.set(a.name, b);
                this._assetsRemaining -= 1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function(a, b) { this._bytesLoaded.set(a.name, b); for (var c = 0, e = this._bytesLoaded.iterator(); e.hasNext();) var d = e.next(),
                c = c + d;
            this.promise.set_progress(c) },
        handleSuccess: function() { this.promise.set_result(this._pack) },
        handleError: function(a, b) { this.promise.error.emit(Da.withFields(b, ["url", a.url])) },
        handleTextureError: function(a) { this.handleError(a, "Failed to create texture. Is the GPU context unavailable?") },
        __class__: pc
    };
    var we = function(a, b) { this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new G;
        this.sounds = new G;
        this.files = new G };
    j["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = we;
    we.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    we.__interfaces__ = [re];
    we.prototype = {
        getTexture: function(a, b) { null == b && (b = !0); var c = this.textures.get(a); if (null == c && b) throw Da.withFields("Missing texture", ["name", a]); return c },
        getSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b) throw Da.withFields("Missing sound", ["name", a]);
            return c
        },
        getFile: function(a, b) { null == b && (b = !0); var c = this.files.get(a); if (null == c && b) throw Da.withFields("Missing file", ["name", a]); return c },
        dispose: function() { if (!this.disposed) { this.disposed = !0; for (var a = this.textures.iterator(); a.hasNext();) a.next().dispose();
                this.textures = null; for (a = this.sounds.iterator(); a.hasNext();) a.next().dispose();
                this.sounds = null; for (a = this.files.iterator(); a.hasNext();) a.next().dispose();
                this.files = null;
                this.loader.onDisposed() } },
        get_manifest: function() { return this._manifest },
        __class__: we,
        __properties__: { get_manifest: "get_manifest" }
    };
    var fd = function(a) { this._disposed = !1;
        this._content = a };
    j["flambe.platform.BasicFile"] = fd;
    fd.__name__ = ["flambe", "platform", "BasicFile"];
    fd.__interfaces__ = [se];
    fd.__super__ = ab;
    fd.prototype = A(ab.prototype, { toString: function() { return this._content }, onDisposed: function() { this._content = null }, __class__: fd });
    var Tf = function() {};
    j["flambe.subsystem.KeyboardSystem"] = Tf;
    Tf.__name__ = ["flambe", "subsystem",
        "KeyboardSystem"
    ];
    Tf.prototype = { __class__: Tf };
    var Ab = function() { this.down = new ya;
        this.up = new ya;
        this.backButton = new Pc;
        this._keyStates = new cb };
    j["flambe.platform.BasicKeyboard"] = Ab;
    Ab.__name__ = ["flambe", "platform", "BasicKeyboard"];
    Ab.__interfaces__ = [Tf];
    Ab.prototype = {
        isDown: function(a) { return this.isCodeDown(gd.toKeyCode(a)) },
        isCodeDown: function(a) { return this._keyStates.exists(a) },
        submitDown: function(a) {
            if (16777238 == a) return null != this.backButton._head ? (this.backButton.emit(), !0) : !1;
            this._keyStates.exists(a) ||
                (this._keyStates.set(a, !0), Ab._sharedEvent.init(Ab._sharedEvent.id + 1, gd.toKey(a)), this.down.emit(Ab._sharedEvent));
            return !0
        },
        submitUp: function(a) { this._keyStates.exists(a) && (this._keyStates.remove(a), Ab._sharedEvent.init(Ab._sharedEvent.id + 1, gd.toKey(a)), this.up.emit(Ab._sharedEvent)) },
        __class__: Ab
    };
    var zg = function() {};
    j["flambe.subsystem.MouseSystem"] = zg;
    zg.__name__ = ["flambe", "subsystem", "MouseSystem"];
    var jb = function(a) {
        this._pointer = a;
        this._source = ed.Mouse(jb._sharedEvent);
        this.down = new ya;
        this.move =
            new ya;
        this.up = new ya;
        this.scroll = new ya;
        this._y = this._x = 0;
        this._cursor = gb.Default;
        this._buttonStates = new cb
    };
    j["flambe.platform.BasicMouse"] = jb;
    jb.__name__ = ["flambe", "platform", "BasicMouse"];
    jb.__interfaces__ = [zg];
    jb.prototype = {
        submitDown: function(a, b, c) { this._buttonStates.exists(c) || (this._buttonStates.set(c, !0), this.prepare(a, b, Uf.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit(jb._sharedEvent)) },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a,
                b, this._source);
            this.move.emit(jb._sharedEvent)
        },
        submitUp: function(a, b, c) { this._buttonStates.exists(c) && (this._buttonStates.remove(c), this.prepare(a, b, Uf.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit(jb._sharedEvent)) },
        submitScroll: function(a, b, c) { this._x = a;
            this._y = b; if (null == this.scroll._head) return !1;
            this.scroll.emit(c); return !0 },
        prepare: function(a, b, c) { this._x = a;
            this._y = b;
            jb._sharedEvent.init(jb._sharedEvent.id + 1, a, b, c) },
        __class__: jb
    };
    var Vf = function() {};
    j["flambe.subsystem.PointerSystem"] =
        Vf;
    Vf.__name__ = ["flambe", "subsystem", "PointerSystem"];
    Vf.prototype = { __class__: Vf };
    var Ua = function(a, b, c) { null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new ya;
        this.move = new ya;
        this.up = new ya;
        this._x = a;
        this._y = b;
        this._isDown = c };
    j["flambe.platform.BasicPointer"] = Ua;
    Ua.__name__ = ["flambe", "platform", "BasicPointer"];
    Ua.__interfaces__ = [Vf];
    Ua.prototype = {
        submitDown: function(a, b, c) {
            if (!this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !0;
                var e = [],
                    d = J.hitTest(I.root, a, b);
                if (null != d) {
                    var f = d.owner;
                    do { var g = f._compMap.Sprite_3;
                        null != g && e.push(g);
                        f = f.parent } while (null != f)
                }
                this.prepare(a, b, d, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerDown(Ua._sharedEvent), Ua._sharedEvent._stopped) return;
                this.down.emit(Ua._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            if (!(a == this._x && b == this._y)) {
                var e = [],
                    d = J.hitTest(I.root, a, b);
                if (null != d) { var f = d.owner;
                    do { var g = f._compMap.Sprite_3;
                        null != g && e.push(g);
                        f = f.parent } while (null != f) } this.prepare(a, b, d, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerMove(Ua._sharedEvent),
                        Ua._sharedEvent._stopped) return;
                this.move.emit(Ua._sharedEvent)
            }
        },
        submitUp: function(a, b, c) { if (this._isDown) { this.submitMove(a, b, c);
                this._isDown = !1; var e = [],
                    d = J.hitTest(I.root, a, b); if (null != d) { var f = d.owner;
                    do { var g = f._compMap.Sprite_3;
                        null != g && e.push(g);
                        f = f.parent } while (null != f) } this.prepare(a, b, d, c); for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerUp(Ua._sharedEvent), Ua._sharedEvent._stopped) return;
                this.up.emit(Ua._sharedEvent) } },
        prepare: function(a, b, c, e) {
            this._x = a;
            this._y = b;
            Ua._sharedEvent.init(Ua._sharedEvent.id +
                1, a, b, c, e)
        },
        __class__: Ua
    };
    var qc = function(a, b, c) { this._x = this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        this._disposed = !1;
        this.root = a;
        this._width = b;
        this._height = c };
    j["flambe.platform.BasicTexture"] = qc;
    qc.__name__ = ["flambe", "platform", "BasicTexture"];
    qc.__interfaces__ = [ug];
    qc.__super__ = ab;
    qc.prototype = A(ab.prototype, {
        subTexture: function(a, b, c, e) { c = this.root.createTexture(c, e);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX = this.rootX + a;
            c.rootY = this.rootY + b; return c },
        onDisposed: function() {
            null == this._parent &&
                this.root.dispose()
        },
        get_width: function() { return this._width },
        get_height: function() { return this._height },
        __class__: qc,
        __properties__: { get_height: "get_height", get_width: "get_width" }
    });
    var xe = function() {};
    j["flambe.subsystem.TouchSystem"] = xe;
    xe.__name__ = ["flambe", "subsystem", "TouchSystem"];
    xe.prototype = { __class__: xe };
    var ne = function(a, b) { null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new cb;
        this._points = [];
        this.down = new ya;
        this.move = new ya;
        this.up = new ya };
    j["flambe.platform.BasicTouch"] =
        ne;
    ne.__name__ = ["flambe", "platform", "BasicTouch"];
    ne.__interfaces__ = [xe];
    ne.prototype = {
        get_supported: function() { return !0 },
        submitDown: function(a, b, c) { if (!this._pointMap.exists(a)) { var e = new Sf(a);
                e.init(b, c);
                this._pointMap.set(a, e);
                this._points.push(e);
                null == this._pointerTouch && (this._pointerTouch = e, this._pointer.submitDown(b, c, e._source));
                this.down.emit(e) } },
        submitMove: function(a, b, c) { a = this._pointMap.get(a);
            null != a && (a.init(b, c), this._pointerTouch == a && this._pointer.submitMove(b, c, a._source), this.move.emit(a)) },
        submitUp: function(a, b, c) { var e = this._pointMap.get(a);
            null != e && (e.init(b, c), this._pointMap.remove(a), M.remove(this._points, e), this._pointerTouch == e && (this._pointerTouch = null, this._pointer.submitUp(b, c, e._source)), this.up.emit(e)) },
        __class__: ne,
        __properties__: { get_supported: "get_supported" }
    };
    var rc = function() {};
    j["flambe.sound.Sound"] = rc;
    rc.__name__ = ["flambe", "sound", "Sound"];
    rc.__interfaces__ = [nc];
    rc.prototype = { __class__: rc };
    var tb = function() { this._disposed = !1;
        this._playback = new hd(this) };
    j["flambe.platform.DummySound"] =
        tb;
    tb.__name__ = ["flambe", "platform", "DummySound"];
    tb.__interfaces__ = [rc];
    tb.getInstance = function() { null == tb._instance && (tb._instance = new tb); return tb._instance };
    tb.__super__ = ab;
    tb.prototype = A(ab.prototype, { play: function() { return this._playback }, loop: function() { return this._playback }, get_duration: function() { return 0 }, onDisposed: function() {}, __class__: tb, __properties__: { get_duration: "get_duration" } });
    var Qc = function() {};
    j["flambe.sound.Playback"] = Qc;
    Qc.__name__ = ["flambe", "sound", "Playback"];
    Qc.__interfaces__ = [Gb];
    Qc.prototype = { __class__: Qc };
    var hd = function(a) { this._sound = a;
        this.volume = new qa(0);
        this._complete = new fb(!0) };
    j["flambe.platform.DummyPlayback"] = hd;
    hd.__name__ = ["flambe", "platform", "DummyPlayback"];
    hd.__interfaces__ = [Qc];
    hd.prototype = { get_paused: function() { return !0 }, get_complete: function() { return this._complete }, get_position: function() { return 0 }, dispose: function() {}, __class__: hd, __properties__: { get_position: "get_position", get_complete: "get_complete", get_paused: "get_paused" } };
    var oe = function() {
        this.down =
            new ya;
        this.move = new ya;
        this.up = new ya
    };
    j["flambe.platform.DummyTouch"] = oe;
    oe.__name__ = ["flambe", "platform", "DummyTouch"];
    oe.__interfaces__ = [xe];
    oe.prototype = { get_supported: function() { return !1 }, __class__: oe, __properties__: { get_supported: "get_supported" } };
    var id = function() { this._entries = [] };
    j["flambe.platform.EventGroup"] = id;
    id.__name__ = ["flambe", "platform", "EventGroup"];
    id.__interfaces__ = [Gb];
    id.prototype = {
        addListener: function(a, b, c) { a.addEventListener(b, c, !1);
            this._entries.push(new Wf(a, b, c)) },
        addDisposingListener: function(a,
            b, c) { var e = this;
            this.addListener(a, b, function(a) { e.dispose();
                c(a) }) },
        dispose: function() { for (var a = 0, b = this._entries; a < b.length;) { var c = b[a];++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1) } this._entries = [] },
        __class__: id
    };
    var Wf = function(a, b, c) { this.dispatcher = a;
        this.type = b;
        this.listener = c };
    j["flambe.platform._EventGroup.Entry"] = Wf;
    Wf.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    Wf.prototype = { __class__: Wf };
    var ye = function() {};
    j["flambe.platform.InternalGraphics"] = ye;
    ye.__name__ = ["flambe",
        "platform", "InternalGraphics"
    ];
    ye.__interfaces__ = [Of];
    ye.prototype = { __class__: ye };
    var Xf = function() {};
    j["flambe.subsystem.RendererSystem"] = Xf;
    Xf.__name__ = ["flambe", "subsystem", "RendererSystem"];
    Xf.prototype = { __class__: Xf };
    var ze = function() {};
    j["flambe.platform.InternalRenderer"] = ze;
    ze.__name__ = ["flambe", "platform", "InternalRenderer"];
    ze.__interfaces__ = [Xf];
    ze.prototype = { __class__: ze };
    var gd = function() {};
    j["flambe.platform.KeyCodes"] = gd;
    gd.__name__ = ["flambe", "platform", "KeyCodes"];
    gd.toKey = function(a) {
        switch (a) {
            case 65:
                return f.A;
            case 66:
                return f.B;
            case 67:
                return f.C;
            case 68:
                return f.D;
            case 69:
                return f.E;
            case 70:
                return f.F;
            case 71:
                return f.G;
            case 72:
                return f.H;
            case 73:
                return f.I;
            case 74:
                return f.J;
            case 75:
                return f.K;
            case 76:
                return f.L;
            case 77:
                return f.M;
            case 78:
                return f.N;
            case 79:
                return f.O;
            case 80:
                return f.P;
            case 81:
                return f.Q;
            case 82:
                return f.R;
            case 83:
                return f.S;
            case 84:
                return f.T;
            case 85:
                return f.U;
            case 86:
                return f.V;
            case 87:
                return f.W;
            case 88:
                return f.X;
            case 89:
                return f.Y;
            case 90:
                return f.Z;
            case 48:
                return f.Number0;
            case 49:
                return f.Number1;
            case 50:
                return f.Number2;
            case 51:
                return f.Number3;
            case 52:
                return f.Number4;
            case 53:
                return f.Number5;
            case 54:
                return f.Number6;
            case 55:
                return f.Number7;
            case 56:
                return f.Number8;
            case 57:
                return f.Number9;
            case 96:
                return f.Numpad0;
            case 97:
                return f.Numpad1;
            case 98:
                return f.Numpad2;
            case 99:
                return f.Numpad3;
            case 100:
                return f.Numpad4;
            case 101:
                return f.Numpad5;
            case 102:
                return f.Numpad6;
            case 103:
                return f.Numpad7;
            case 104:
                return f.Numpad8;
            case 105:
                return f.Numpad9;
            case 107:
                return f.NumpadAdd;
            case 110:
                return f.NumpadDecimal;
            case 111:
                return f.NumpadDivide;
            case 108:
                return f.NumpadEnter;
            case 106:
                return f.NumpadMultiply;
            case 109:
                return f.NumpadSubtract;
            case 112:
                return f.F1;
            case 113:
                return f.F2;
            case 114:
                return f.F3;
            case 115:
                return f.F4;
            case 116:
                return f.F5;
            case 117:
                return f.F6;
            case 118:
                return f.F7;
            case 119:
                return f.F8;
            case 120:
                return f.F9;
            case 121:
                return f.F10;
            case 122:
                return f.F11;
            case 123:
                return f.F12;
            case 37:
                return f.Left;
            case 38:
                return f.Up;
            case 39:
                return f.Right;
            case 40:
                return f.Down;
            case 18:
                return f.Alt;
            case 192:
                return f.Backquote;
            case 220:
                return f.Backslash;
            case 8:
                return f.Backspace;
            case 20:
                return f.CapsLock;
            case 188:
                return f.Comma;
            case 15:
                return f.Command;
            case 17:
                return f.Control;
            case 46:
                return f.Delete;
            case 35:
                return f.End;
            case 13:
                return f.Enter;
            case 187:
                return f.Equals;
            case 27:
                return f.Escape;
            case 36:
                return f.Home;
            case 45:
                return f.Insert;
            case 219:
                return f.LeftBracket;
            case 189:
                return f.Minus;
            case 34:
                return f.PageDown;
            case 33:
                return f.PageUp;
            case 190:
                return f.Period;
            case 222:
                return f.Quote;
            case 221:
                return f.RightBracket;
            case 186:
                return f.Semicolon;
            case 16:
                return f.Shift;
            case 191:
                return f.Slash;
            case 32:
                return f.Space;
            case 9:
                return f.Tab;
            case 16777234:
                return f.Menu;
            case 16777247:
                return f.Search
        }
        return f.Unknown(a)
    };
    gd.toKeyCode = function(a) {
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
    var Lc = function() { this._tickables = [] };
    j["flambe.platform.MainLoop"] = Lc;
    Lc.__name__ = ["flambe", "platform", "MainLoop"];
    Lc.updateEntity = function(a, b) { var c = a._compMap.SpeedAdjuster_2; if (null != c && (c._realDt = b, b *= c.scale._value, 0 >= b)) { c.onUpdate(b); return } for (c = a.firstComponent; null != c;) { var e = c.next;
            0 == (c._flags & 1) && (c._flags |= 1, c.onStart());
            c.onUpdate(b);
            c = e } for (c = a.firstChild; null != c;) e = c.next, Lc.updateEntity(c, b), c = e };
    Lc.prototype = {
        update: function(a) {
            if (!(0 >=
                    a)) { 1 < a && (a = 1); for (var b = 0; b < this._tickables.length;) { var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b } I.volume.update(a);
                Lc.updateEntity(I.root, a) }
        },
        render: function(a) { var b = a.graphics;
            null != b && (a.willRender(), J.render(I.root, b), a.didRender()) },
        addTickable: function(a) { this._tickables.push(a) },
        __class__: Lc
    };
    var Uf = function() {};
    j["flambe.platform.MouseCodes"] = Uf;
    Uf.__name__ = ["flambe", "platform", "MouseCodes"];
    Uf.toButton = function(a) {
        switch (a) {
            case 0:
                return Fa.Left;
            case 1:
                return Fa.Middle;
            case 2:
                return Fa.Right
        }
        return Fa.Unknown(a)
    };
    var Yf = function() {};
    j["flambe.platform.TextureRoot"] = Yf;
    Yf.__name__ = ["flambe", "platform", "TextureRoot"];
    Yf.prototype = { __class__: Yf };
    var Ae = function() {};
    j["flambe.platform.Tickable"] = Ae;
    Ae.__name__ = ["flambe", "platform", "Tickable"];
    Ae.prototype = { __class__: Ae };
    var Yb = function(a, b) { this._firstDraw = !1;
        this._canvasCtx = a.getContext("2d", { alpha: b }) };
    j["flambe.platform.html.CanvasGraphics"] = Yb;
    Yb.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    Yb.__interfaces__ = [ye];
    Yb.prototype = {
        save: function() { this._canvasCtx.save() },
        rotate: function(a) { this._canvasCtx.rotate(3.141592653589793 * a / 180) },
        transform: function(a, b, c, e, d, f) { this._canvasCtx.transform(a, b, c, e, d, f) },
        restore: function() { this._canvasCtx.restore() },
        drawTexture: function(a, b, c) { this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height()) },
        drawSubTexture: function(a, b, c, e, d, f, g) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, e, d, f, g), this._canvasCtx.globalCompositeOperation =
                "source-over") : this._canvasCtx.drawImage(a.root.image, a.rootX + e | 0, a.rootY + d | 0, f | 0, g | 0, b | 0, c | 0, f | 0, g | 0)
        },
        fillRect: function(a, b, c, e, d) { if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.fillRect(a, b, c, e, d), this._canvasCtx.globalCompositeOperation = "source-over";
            else { for (a = (16777215 & a).toString(16); 6 > a.length;) a = "0" + B.string(a);
                this._canvasCtx.fillStyle = "#" + B.string(a);
                this._canvasCtx.fillRect(b | 0, c | 0, e | 0, d | 0) } },
        multiplyAlpha: function(a) {
            this._canvasCtx.globalAlpha *=
                a
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
                    b = "copy" } this._canvasCtx.globalCompositeOperation = b },
        applyScissor: function(a, b, c, e) { this._canvasCtx.beginPath();
            this._canvasCtx.rect(a | 0, b | 0, c | 0, e | 0);
            this._canvasCtx.clip() },
        willRender: function() { this._firstDraw = !0 },
        didRender: function() {},
        __class__: Yb
    };
    var Mc = function(a) {
        this.graphics = new Yb(a, !1);
        this._hasGPU =
            new fb(!0)
    };
    j["flambe.platform.html.CanvasRenderer"] = Mc;
    Mc.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    Mc.__interfaces__ = [ze];
    Mc.prototype = {
        get_type: function() { return Ka.Canvas },
        createTextureFromImage: function(a) { a = new jd(Mc.CANVAS_TEXTURES ? Z.createCanvas(a) : a); return a.createTexture(a.width, a.height) },
        getCompressedTextureFormats: function() { return [] },
        createCompressedTexture: function() { return null },
        willRender: function() { this.graphics.willRender() },
        didRender: function() { this.graphics.didRender() },
        __class__: Mc,
        __properties__: { get_type: "get_type" }
    };
    var Be = function(a, b, c) { qc.call(this, a, b, c) };
    j["flambe.platform.html.CanvasTexture"] = Be;
    Be.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    Be.__super__ = qc;
    Be.prototype = A(qc.prototype, { __class__: Be });
    var jd = function(a) { this._graphics = null;
        this._disposed = !1;
        this.image = a;
        this.width = a.width;
        this.height = a.height };
    j["flambe.platform.html.CanvasTextureRoot"] = jd;
    jd.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    jd.__interfaces__ = [Yf];
    jd.__super__ =
        ab;
    jd.prototype = A(ab.prototype, { createTexture: function(a, b) { return new Be(this, a, b) }, onDisposed: function() { this._graphics = this.image = null }, __class__: jd });
    var ka = function(a, b) { pc.call(this, a, b) };
    j["flambe.platform.html.HtmlAssetPackLoader"] = ka;
    ka.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    ka.detectImageFormats = function(a) {
        var b = [E.PNG, E.JPG, E.GIF],
            c = 2,
            e;
        e = window.document.createElement("img");
        e.onload = e.onerror = function() { 1 == e.width && b.unshift(E.WEBP);--c;
            0 == c && a(b) };
        e.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var d;
        d = window.document.createElement("img");
        d.onload = d.onerror = function() { 1 == d.width && b.unshift(E.JXR);--c;
            0 == c && a(b) };
        d.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    };
    ka.detectAudioFormats = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == o(a, a.canPlayType)) return [];
        var b = new v("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b",
                ""),
            c = window.navigator.userAgent;
        if (!ga.get_supported() && b.match(c)) return [];
        for (var b = [{ format: E.M4A, mimeType: "audio/mp4; codecs=mp4a" }, { format: E.MP3, mimeType: "audio/mpeg" }, { format: E.OPUS, mimeType: "audio/ogg; codecs=opus" }, { format: E.OGG, mimeType: "audio/ogg; codecs=vorbis" }, { format: E.WAV, mimeType: "audio/wav" }], c = [], e = 0; e < b.length;) { var d = b[e];++e; var f = ""; try { f = a.canPlayType(d.mimeType) } catch (g) {} "" != f && c.push(d.format) }
        return c
    };
    ka.supportsBlob = function() {
        if (ka._detectBlobSupport) {
            ka._detectBlobSupport = !1;
            if ((new v("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1;
            var a = new XMLHttpRequest;
            a.open("GET", ".", !0);
            if ("" != a.responseType) return !1;
            a.responseType = "blob";
            if ("blob" != a.responseType) return !1;
            ka._URL = Z.loadExtension("URL").value
        }
        return null != ka._URL && null != ka._URL.createObjectURL
    };
    ka.__super__ = pc;
    ka.prototype = A(pc.prototype, {
        loadEntry: function(a, b) {
            var c = this;
            switch (b.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var e;
                    e = window.document.createElement("img");
                    var d =
                        new id;
                    d.addDisposingListener(e, "load", function() { ka.supportsBlob() && ka._URL.revokeObjectURL(e.src); var a = c._platform.getRenderer().createTextureFromImage(e);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b) });
                    d.addDisposingListener(e, "error", function() { c.handleError(b, "Failed to load image") });
                    ka.supportsBlob() ? this.download(a, b, "blob", function(a) { e.src = ka._URL.createObjectURL(a) }) : e.src = a;
                    break;
                case 5:
                case 6:
                case 7:
                    this.download(a, b, "arraybuffer", function() {
                        var a = c._platform.getRenderer().createCompressedTexture(b.format,
                            null);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    if (ga.get_supported()) this.download(a, b, "arraybuffer", function(a) { ga.ctx.decodeAudioData(a, function(a) { c.handleLoad(b, new ga(a)) }, function() { c.handleLoad(b, tb.getInstance()) }) });
                    else {
                        var f;
                        f = window.document.createElement("audio");
                        f.preload = "auto";
                        var g = ++ka._mediaRefCount;
                        null == ka._mediaElements && (ka._mediaElements = new cb);
                        ka._mediaElements.set(g, f);
                        d = new id;
                        d.addDisposingListener(f, "canplaythrough",
                            function() { ka._mediaElements.remove(g);
                                c.handleLoad(b, new kd(f)) });
                        d.addDisposingListener(f, "error", function() { ka._mediaElements.remove(g); var a = f.error.code;
                            3 == a || 4 == a ? c.handleLoad(b, tb.getInstance()) : c.handleError(b, "Failed to load audio: " + f.error.code) });
                        d.addListener(f, "progress", function() { if (0 < f.buffered.length && 0 < f.duration) { var a = f.buffered.end(0) / f.duration;
                                c.handleProgress(b, a * b.bytes | 0) } });
                        f.src = a;
                        f.load()
                    }
                    break;
                case 13:
                    this.download(a, b, "text", function(a) { c.handleLoad(b, new fd(a)) })
            }
        },
        getAssetFormats: function(a) { var b = this;
            null == ka._supportedFormats && (ka._supportedFormats = new ve, ka.detectImageFormats(function(a) { ka._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(ka.detectAudioFormats()).concat([E.Data])) }));
            ka._supportedFormats.get(a) },
        download: function(a, b, c, e) {
            var d = this,
                f = null,
                g = null,
                h = 0,
                i = !1,
                j = function() { i && (i = !1, window.clearInterval(h)) },
                k = 3,
                l = function() {--k; return 0 <= k ? (g(), !0) : !1 },
                g = function() {
                    j();
                    null != f && f.abort();
                    f = new XMLHttpRequest;
                    f.open("GET", a, !0);
                    f.responseType = c;
                    var g = 0;
                    f.onprogress = function(a) { i || (i = !0, h = window.setInterval(function() { 4 != f.readyState && 5E3 < Date.now() - g && !l() && (j(), d.handleError(b, "Download stalled")) }, 1E3));
                        g = Date.now();
                        d.handleProgress(b, a.loaded) };
                    f.onerror = function() { if (0 != f.status || !l()) j(), d.handleError(b, "HTTP error " + f.status) };
                    f.onload = function() { var a = f.response;
                        null == a && (a = f.responseText);
                        j();
                        e(a) };
                    f.send()
                };
            g()
        },
        __class__: ka
    });
    var Zf = function() {};
    j["flambe.subsystem.ExternalSystem"] =
        Zf;
    Zf.__name__ = ["flambe", "subsystem", "ExternalSystem"];
    Zf.prototype = { __class__: Zf };
    var pe = function() {};
    j["flambe.platform.html.HtmlExternal"] = pe;
    pe.__name__ = ["flambe", "platform", "html", "HtmlExternal"];
    pe.__interfaces__ = [Zf];
    pe.prototype = { call: function(a, b) { null == b && (b = []); for (var c = window, e = c, d = 0, f = a.split("."); d < f.length;) { var g = f[d];++d;
                c = e;
                e = t.field(c, g) } return e.apply(c, b) }, __class__: pe };
    var me = function(a, b) { jb.call(this, a);
        this._canvas = b };
    j["flambe.platform.html.HtmlMouse"] = me;
    me.__name__ = ["flambe",
        "platform", "html", "HtmlMouse"
    ];
    me.__super__ = jb;
    me.prototype = A(jb.prototype, { __class__: me });
    var kd = function(a) { this._disposed = !1;
        this.audioElement = a };
    j["flambe.platform.html.HtmlSound"] = kd;
    kd.__name__ = ["flambe", "platform", "html", "HtmlSound"];
    kd.__interfaces__ = [rc];
    kd.__super__ = ab;
    kd.prototype = A(ab.prototype, {
        play: function(a) { null == a && (a = 1); return new ld(this, a, !1) },
        loop: function(a) { null == a && (a = 1); return new ld(this, a, !0) },
        get_duration: function() { return this.audioElement.duration },
        onDisposed: function() {
            this.audioElement =
                null
        },
        __class__: kd,
        __properties__: { get_duration: "get_duration" }
    });
    var ld = function(a, b, c) { var e = this;
        this._sound = a;
        this._tickableAdded = !1;
        this._clonedElement = window.document.createElement("audio");
        this._clonedElement.loop = c;
        this._clonedElement.src = a.audioElement.src;
        this.volume = new qa(b, function() { e.updateVolume() });
        this.updateVolume();
        this._complete = new fb(!1);
        this.playAudio();
        I.hidden._value && this.set_paused(!0) };
    j["flambe.platform.html._HtmlSound.HtmlPlayback"] = ld;
    ld.__name__ = ["flambe", "platform",
        "html", "_HtmlSound", "HtmlPlayback"
    ];
    ld.__interfaces__ = [Ae, Qc];
    ld.prototype = {
        get_paused: function() { return this._clonedElement.paused },
        set_paused: function(a) { this._clonedElement.paused != a && (a ? this._clonedElement.pause() : this.playAudio()); return a },
        get_complete: function() { return this._complete },
        get_position: function() { return this._clonedElement.currentTime },
        update: function(a) {
            this.volume.update(a);
            this._complete.set__(this._clonedElement.ended);
            return this._complete._value || this._clonedElement.paused ?
                (this._tickableAdded = !1, this._volumeBinding.dispose(), this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() { this.set_paused(!0);
            this._complete.set__(!0) },
        playAudio: function() { var a = this;
            this._clonedElement.play();
            this._tickableAdded || (Zb.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._volumeBinding = I.volume.get_changed().connect(function() { a.updateVolume() }), this._hideBinding = I.hidden.get_changed().connect(function(b) { b ? (a._wasPaused = a._clonedElement.paused, a.set_paused(!0)) : a.set_paused(a._wasPaused) })) },
        updateVolume: function() { this._clonedElement.volume = I.volume._value * this.volume._value },
        __class__: ld,
        __properties__: { get_position: "get_position", get_complete: "get_complete", set_paused: "set_paused", get_paused: "get_paused" }
    };
    var $f = function() {};
    j["flambe.subsystem.StageSystem"] = $f;
    $f.__name__ = ["flambe", "subsystem", "StageSystem"];
    $f.prototype = { __class__: $f };
    var $b = function(a) {
        var b = this;
        this._canvas = a;
        this.resize = new Pc;
        this.scaleFactor = $b.computeScaleFactor();
        1 != this.scaleFactor && (Z.setVendorStyle(this._canvas,
            "transform-origin", "top left"), Z.setVendorStyle(this._canvas, "transform", "scale(" + 1 / this.scaleFactor + ")"));
        Z.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() { Z.callLater(o(b, b.hideMobileBrowser), 200) }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", o(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new fb(null);
        null != window.orientation && (window.addEventListener("orientationchange", o(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new fb(!1);
        Z.addVendorListener(window.document, "fullscreenchange", function() { b.updateFullscreen() }, !1);
        this.updateFullscreen()
    };
    j["flambe.platform.html.HtmlStage"] = $b;
    $b.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    $b.__interfaces__ = [$f];
    $b.computeScaleFactor = function() {
        var a = window.devicePixelRatio;
        null == a && (a = 1);
        var b = window.document.createElement("canvas").getContext("2d"),
            b = Z.loadExtension("backingStorePixelRatio", b).value;
        null == b && (b = 1);
        a /= b;
        b = window.screen.height;
        return 1136 <
            a * window.screen.width || 1136 < a * b ? 1 : a
    };
    $b.prototype = {
        get_width: function() { return this._canvas.width },
        get_height: function() { return this._canvas.height },
        requestResize: function(a, b) { if (this.resizeCanvas(a, b)) { var c = this._canvas.parentElement;
                c.style.width = a + "px";
                c.style.height = b + "px" } },
        onWindowResize: function() { var a = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(a.width, a.height) },
        resizeCanvas: function(a, b) {
            var c = this.scaleFactor * a,
                e = this.scaleFactor * b;
            if (this._canvas.width == c &&
                this._canvas.height == e) return !1;
            this._canvas.width = c | 0;
            this._canvas.height = e | 0;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function() { var a = this,
                b = window.document.documentElement.style;
            b.height = window.innerHeight + 100 + "px";
            b.width = window.innerWidth + "px";
            b.overflow = "visible";
            Z.callLater(function() { Z.hideMobileBrowser();
                Z.callLater(function() { b.height = window.innerHeight + "px";
                    a.onWindowResize(null) }, 100) }) },
        onOrientationChange: function() { this.orientation.set__(Z.orientation(window.orientation)) },
        updateFullscreen: function() {
            this.fullscreen.set__(!0 ==
                Z.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value)
        },
        __class__: $b,
        __properties__: { get_height: "get_height", get_width: "get_width" }
    };
    var Z = function() {};
    j["flambe.platform.html.HtmlUtil"] = Z;
    Z.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    Z.callLater = function(a, b) { null == b && (b = 0);
        window.setTimeout(a, b) };
    Z.hideMobileBrowser = function() { window.scrollTo(1, 0) };
    Z.loadExtension = function(a, b) {
        null == b && (b = window);
        var c = t.field(b, a);
        if (null != c) return { prefix: "", field: a, value: c };
        for (var c = a.charAt(0).toUpperCase() + M.substr(a, 1, null), e = 0, d = Z.VENDOR_PREFIXES; e < d.length;) { var f = d[e];++e; var g = f + c,
                h = t.field(b, g); if (null != h) return { prefix: f, field: g, value: h } }
        return { prefix: null, field: null, value: null }
    };
    Z.loadFirstExtension = function(a, b) { for (var c = 0; c < a.length;) { var e = a[c];++c;
            e = Z.loadExtension(e, b); if (null != e.field) return e } return { prefix: null, field: null, value: null } };
    Z.polyfill = function(a, b) { null == b && (b = window); var c = Z.loadExtension(a, b).value; if (null == c) return !1;
        b[a] = c; return !0 };
    Z.setVendorStyle = function(a, b, c) { for (var a = a.style, e = 0, d = Z.VENDOR_PREFIXES; e < d.length;) { var f = d[e];++e;
            a.setProperty("-" + f + "-" + b, c) } a.setProperty(b, c) };
    Z.addVendorListener = function(a, b, c, e) { for (var d = 0, f = Z.VENDOR_PREFIXES; d < f.length;) { var g = f[d];++d;
            a.addEventListener(g + b, c, e) } a.addEventListener(b, c, e) };
    Z.orientation = function(a) { switch (a) {
            case -90:
            case 90:
                return Bb.Landscape;
            default:
                return Bb.Portrait } };
    Z.createEmptyCanvas = function(a, b) {
        var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height =
            b;
        return c
    };
    Z.createCanvas = function(a) { var b = Z.createEmptyCanvas(a.width, a.height),
            c = b.getContext("2d");
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore(); return b };
    Z.fixAndroidMath = function() { if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) { var a = Math.sin,
                b = Math.cos;
            Math.sin = function(b) { return 0 == b ? 0 : a(b) };
            Math.cos = function(a) { return 0 == a ? 1 : b(a) } } };
    var ga = function(a) { this._disposed = !1;
        this.buffer = a };
    j["flambe.platform.html.WebAudioSound"] = ga;
    ga.__name__ = ["flambe",
        "platform", "html", "WebAudioSound"
    ];
    ga.__interfaces__ = [rc];
    ga.__properties__ = { get_supported: "get_supported" };
    ga.get_supported = function() { if (ga._detectSupport) { ga._detectSupport = !1; var a = Z.loadExtension("AudioContext").value;
            null != a && (ga.ctx = new a, ga.gain = ga.createGain(), ga.gain.connect(ga.ctx.destination), I.volume.watch(function(a) { ga.gain.gain.value = a })) } return null != ga.ctx };
    ga.createGain = function() { return null != ga.ctx.createGain ? ga.ctx.createGain() : ga.ctx.createGainNode() };
    ga.start = function(a, b) {
        null !=
            a.start ? a.start(b) : a.noteOn(b)
    };
    ga.__super__ = ab;
    ga.prototype = A(ab.prototype, { play: function(a) { null == a && (a = 1); return new md(this, a, !1) }, loop: function(a) { null == a && (a = 1); return new md(this, a, !0) }, get_duration: function() { return this.buffer.duration }, onDisposed: function() { this.buffer = null }, __class__: ga, __properties__: { get_duration: "get_duration" } });
    var md = function(a, b, c) {
        var e = this;
        this._sound = a;
        this._head = ga.gain;
        this._complete = new fb(!1);
        this._sourceNode = ga.ctx.createBufferSource();
        this._sourceNode.buffer =
            a.buffer;
        this._sourceNode.loop = c;
        this._sourceNode.onended = function() { e._complete.set__(!0) };
        ga.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new qa(b, function(a) { e.setVolume(a) });
        1 != b && this.setVolume(b);
        I.hidden._value && this.set_paused(!0)
    };
    j["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = md;
    md.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    md.__interfaces__ = [Ae, Qc];
    md.prototype = {
        get_paused: function() { return 0 <= this._pausedAt },
        set_paused: function(a) {
            a !=
                0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(), this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_complete: function() { return this._complete },
        get_position: function() { return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (ga.ctx.currentTime - this._startedAt) % this._sound.get_duration() },
        update: function(a) {
            this.volume.update(a);
            3 == this._sourceNode.playbackState && this._complete.set__(!0);
            return this._complete._value || 0 <= this._pausedAt ? (this._tickableAdded = !1, this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() { this.set_paused(!0);
            this._complete.set__(!0) },
        setVolume: function(a) { null == this._gainNode && (this._gainNode = ga.createGain(), this.insertNode(this._gainNode));
            this._gainNode.gain.value = a },
        insertNode: function(a) { 0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(a));
            a.connect(this._head);
            this._head = a },
        playAudio: function() {
            var a = this;
            this._sourceNode.connect(this._head);
            this._startedAt = ga.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (Zb.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._hideBinding = I.hidden.get_changed().connect(function(b) { b ? (a._wasPaused = 0 <= a._pausedAt, a.set_paused(!0)) : a.set_paused(a._wasPaused) }))
        },
        __class__: md,
        __properties__: { get_position: "get_position", get_complete: "get_complete", set_paused: "set_paused", get_paused: "get_paused" }
    };
    var ag = function() { this._transitor = null };
    j["flambe.scene.Director"] = ag;
    ag.__name__ = ["flambe", "scene", "Director"];
    ag.__super__ = ja;
    ag.prototype =
        A(ja.prototype, {
            get_name: function() { return "Director_5" },
            onAdded: function() { this.owner.addChild(this._root) },
            onRemoved: function() { this.completeTransition(); for (var a = 0, b = this.scenes; a < b.length;) { var c = b[a];++a;
                    c.dispose() } this.scenes = [];
                this.occludedScenes = [];
                this._root.dispose() },
            onUpdate: function(a) { null != this._transitor && this._transitor.update(a) && this.completeTransition() },
            get_topScene: function() { var a = this.scenes.length; return 0 < a ? this.scenes[a - 1] : null },
            show: function(a) {
                a = a._compMap.Scene_6;
                null !=
                    a && a.shown.emit()
            },
            invalidateVisibility: function() { for (var a = this.scenes.length; 0 < a;) { var b = this.scenes[--a]._compMap.Scene_6; if (null == b || b.opaque) break } this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
                a = this.get_topScene();
                null != a && this.show(a) },
            completeTransition: function() { null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility()) },
            __class__: ag,
            __properties__: A(ja.prototype.__properties__, { get_topScene: "get_topScene" })
        });
    var vg = function() {};
    j["flambe.scene._Director.Transitor"] = vg;
    vg.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    vg.prototype = { update: function(a) { return this._transition.update(a) }, complete: function() { this._transition.complete();
            this._onComplete() }, __class__: vg };
    var bg = function() {};
    j["flambe.scene.Scene"] = bg;
    bg.__name__ = ["flambe", "scene", "Scene"];
    bg.__super__ = ja;
    bg.prototype = A(ja.prototype, { get_name: function() { return "Scene_6" }, __class__: bg });
    var wg = function() {};
    j["flambe.scene.Transition"] = wg;
    wg.__name__ = ["flambe", "scene", "Transition"];
    wg.prototype = { update: function() { return !0 }, complete: function() {}, __class__: wg };
    var Sd = function() { ja.call(this);
        this._sounds = [] };
    j["flambe.sound.Mixer"] = Sd;
    Sd.__name__ = ["flambe", "sound", "Mixer"];
    Sd.__super__ = ja;
    Sd.prototype = A(ja.prototype, {
        get_name: function() { return "Mixer_4" },
        createSound: function(a, b) { null == b && (b = 2147483647); var c = new Ce(a, b);
            this._sounds.push(c); return c },
        stopAll: function() { for (var a = 0, b = this._sounds; a < b.length;) { var c = b[a];++a;
                c.dispose() } },
        onRemoved: function() { this.stopAll();
            this._sounds = [] },
        __class__: Sd
    });
    var Ce = function(a, b) { this._source = a;
        this._channels = b;
        this._playbacks = [] };
    j["flambe.sound._Mixer.MixerSound"] = Ce;
    Ce.__name__ = ["flambe", "sound", "_Mixer", "MixerSound"];
    Ce.__interfaces__ = [Gb, rc];
    Ce.prototype = {
        play: function(a) { null == a && (a = 1); return this.playOrLoop(a, !1) },
        loop: function(a) { null == a && (a = 1); return this.playOrLoop(a, !0) },
        playOrLoop: function(a, b) {
            var c = this.findOpenChannel();
            if (0 > c) return new hd(this);
            var e;
            e = b ? this._source.loop(a) :
                this._source.play(a);
            return this._playbacks[c] = e
        },
        findOpenChannel: function() { for (var a = 0, b = this._channels; a < b;) { var c = a++,
                    e = this._playbacks[c]; if (null == e || e.get_complete().get__()) return c } return -1 },
        get_duration: function() { return this._source.get_duration() },
        dispose: function() { for (var a = 0, b = this._playbacks; a < b.length;) { var c = b[a];++a;
                c.dispose() } this._playbacks = [] },
        __class__: Ce,
        __properties__: { get_duration: "get_duration" }
    };
    var Ka = j["flambe.subsystem.RendererType"] = {
        __ename__: ["flambe", "subsystem",
            "RendererType"
        ],
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    Ka.Stage3D = ["Stage3D", 0];
    Ka.Stage3D.toString = g;
    Ka.Stage3D.__enum__ = Ka;
    Ka.WebGL = ["WebGL", 1];
    Ka.WebGL.toString = g;
    Ka.WebGL.__enum__ = Ka;
    Ka.Canvas = ["Canvas", 2];
    Ka.Canvas.toString = g;
    Ka.Canvas.__enum__ = Ka;
    Ka.__empty_constructs__ = [Ka.Stage3D, Ka.WebGL, Ka.Canvas];
    var De = function() {};
    j["flambe.swf.Symbol"] = De;
    De.__name__ = ["flambe", "swf", "Symbol"];
    De.prototype = { __class__: De };
    var Ee = function(a, b) {
        this._name = a.symbol;
        var c = a.rect;
        this.texture = b.subTexture(c[0],
            c[1], c[2], c[3]);
        c = a.origin;
        null != c ? (this.anchorX = c[0], this.anchorY = c[1]) : this.anchorY = this.anchorX = 0
    };
    j["flambe.swf.BitmapSymbol"] = Ee;
    Ee.__name__ = ["flambe", "swf", "BitmapSymbol"];
    Ee.__interfaces__ = [De];
    Ee.prototype = { createSprite: function() { var a = new Vb(this.texture);
            a.setAnchor(this.anchorX, this.anchorY); return a }, get_name: function() { return this._name }, __class__: Ee, __properties__: { get_name: "get_name" } };
    var hf = function(a, b) {
        this._file = a.getFile(b + "/library.json");
        var c = JSON.parse(this._file.toString());
        this._symbols = new G;
        this.frameRate = c.frameRate;
        for (var e = [], d = 0, f = c.movies; d < f.length;) { var g = f[d];++d;
            g = new Gc(this, g);
            e.push(g);
            this._symbols.set(g._name, g) } c = c.textureGroups;
        (1 != c[0].scaleFactor || 1 < c.length) && null;
        c = c[0].atlases;
        for (d = 0; d < c.length;) { var h = c[d];++d;
            f = a.getTexture(b + "/" + Da.removeFileExtension(h.file));
            g = 0; for (h = h.textures; g < h.length;) { var i = h[g];++g;
                i = new Ee(i, f);
                this._symbols.set(i._name, i) } }
        for (c = 0; c < e.length;) {
            f = e[c];
            ++c;
            d = 0;
            for (f = f.layers; d < f.length;) {
                g = f[d];
                ++d;
                g = g.keyframes;
                h = g.length;
                for (i = 0; i < h;) { var j = i++,
                        k = g[j]; if (null != k.symbolName) { var l = this._symbols.get(k.symbolName);
                        k.symbol = l } if (k.tweened && 1 == k.duration && j + 1 < h && (j = g[j + 1], !j.visible || null == j.symbolName)) k.visible = !1 }
            }
        }
    };
    j["flambe.swf.Library"] = hf;
    hf.__name__ = ["flambe", "swf", "Library"];
    hf.prototype = { getSymbol: function(a) { return this._symbols.get(a) }, iterator: function() { return this._symbols.iterator() }, __class__: hf };
    var Fc = function(a) {
        this._looped = null;
        J.call(this);
        this.symbol = a;
        this.speed = new qa(1);
        this._animators =
            Array(a.layers.length);
        for (var b = 0, c = this._animators.length; b < c;) { var e = b++;
            this._animators[e] = new cg(a.layers[e]) } this._position = this._frame = 0;
        this["goto"](1)
    };
    j["flambe.swf.MovieSprite"] = Fc;
    Fc.__name__ = ["flambe", "swf", "MovieSprite"];
    Fc.__super__ = J;
    Fc.prototype = A(J.prototype, {
        onAdded: function() { J.prototype.onAdded.call(this); for (var a = 0, b = this._animators; a < b.length;) { var c = b[a];++a;
                this.owner.addChild(c.content) } },
        onRemoved: function() {
            J.prototype.onRemoved.call(this);
            for (var a = 0, b = this._animators; a <
                b.length;) { var c = b[a];++a;
                this.owner.removeChild(c.content) }
        },
        onUpdate: function(a) { J.prototype.onUpdate.call(this, a);
            this.speed.update(a); switch (this._flags & 384) {
                case 0:
                    this._position += this.speed._value * a;
                    this._position > this.symbol.duration && (this._position %= this.symbol.duration, null != this._looped && this._looped.emit()); break;
                case 256:
                    this._flags &= -257 } this["goto"](this._position * this.symbol.frameRate) },
        "goto": function(a) {
            if (this._frame != a) {
                if (a < this._frame)
                    for (var b = 0, c = this._animators; b < c.length;) {
                        var e =
                            c[b];
                        ++b;
                        e.needsKeyframeUpdate = !0;
                        e.keyframeIdx = 0
                    }
                b = 0;
                for (c = this._animators; b < c.length;) e = c[b], ++b, e.composeFrame(a);
                this._frame = a
            }
        },
        set_position: function(a) { return this._position = lb.clamp(a, 0, this.symbol.duration) },
        set_paused: function(a) { this._flags = Yc.set(this._flags, 128, a); return a },
        set_pixelSnapping: function(a) { for (var b = 0, c = this._animators; b < c.length;) { var e = c[b];++b;
                e.setPixelSnapping(a) } return J.prototype.set_pixelSnapping.call(this, a) },
        rewind: function() { this._position = 0;
            this._flags |= 256 },
        __class__: Fc,
        __properties__: A(J.prototype.__properties__, { set_paused: "set_paused", set_position: "set_position" })
    });
    var cg = function(a) { this.keyframeIdx = 0;
        this.needsKeyframeUpdate = !1;
        this.layer = a;
        this.content = new ea; if (a.empty) this._sprites = null;
        else { this._sprites = Array(a.keyframes.length); for (var b = 0, c = this._sprites.length; b < c;) { var e = b++,
                    d = a.keyframes[e];
                this._sprites[e] = 0 < e && a.keyframes[e - 1].symbol == d.symbol ? this._sprites[e - 1] : null == d.symbol ? new J : d.symbol.createSprite() } this.content.add(this._sprites[0]) } };
    j["flambe.swf._MovieSprite.LayerAnimator"] = cg;
    cg.__name__ = ["flambe", "swf", "_MovieSprite", "LayerAnimator"];
    cg.prototype = {
        composeFrame: function(a) {
            if (null != this._sprites) {
                var b = this.layer.keyframes,
                    c = b.length - 1;
                if (a > this.layer.frames) this.content._compMap.Sprite_3.set_visible(!1), this.keyframeIdx = c, this.needsKeyframeUpdate = !0;
                else {
                    for (; this.keyframeIdx < c && b[this.keyframeIdx + 1].index <= a;) ++this.keyframeIdx, this.needsKeyframeUpdate = !0;
                    var e;
                    this.needsKeyframeUpdate ? (this.needsKeyframeUpdate = !1, e = this._sprites[this.keyframeIdx],
                        e != this.content._compMap.Sprite_3 && (Y.getClass(e) == Fc && e.rewind(), this.content.add(e))) : e = this.content._compMap.Sprite_3;
                    var d = b[this.keyframeIdx],
                        f = d.visible && null != d.symbol;
                    e.set_visible(f);
                    if (f) {
                        var f = d.x,
                            g = d.y,
                            h = d.scaleX,
                            i = d.scaleY,
                            j = d.skewX,
                            k = d.skewY,
                            l = d.alpha;
                        if (d.tweened && this.keyframeIdx < c) {
                            a = (a - d.index) / d.duration;
                            c = d.ease;
                            if (0 != c) { var n;
                                0 > c ? (n = 1 - a, n = 1 - n * n, c = -c) : n = a * a;
                                a = c * n + (1 - c) * a } b = b[this.keyframeIdx + 1];
                            f += (b.x - f) * a;
                            g += (b.y - g) * a;
                            h += (b.scaleX - h) * a;
                            i += (b.scaleY - i) * a;
                            j += (b.skewX - j) * a;
                            k += (b.skewY -
                                k) * a;
                            l += (b.alpha - l) * a
                        }
                        b = e.getLocalMatrix();
                        a = Math.sin(j);
                        j = Math.cos(j);
                        c = Math.sin(k);
                        k = Math.cos(k);
                        b.set(k * h, c * h, -a * i, j * i, f, g);
                        b.translate(-d.pivotX, -d.pivotY);
                        e.alpha.set__(l)
                    }
                }
            }
        },
        setPixelSnapping: function(a) { for (var b = 0, c = this._sprites; b < c.length;) { var e = c[b];++b;
                e.set_pixelSnapping(a) } },
        __class__: cg
    };
    var Gc = function(a, b) {
        this._name = b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = Array(b.layers.length);
        for (var c = 0, e = this.layers.length; c < e;) {
            var d = c++,
                f = new dg(b.layers[d]);
            this.frames =
                Math.max(f.frames, this.frames);
            this.layers[d] = f
        }
        this.duration = this.frames / this.frameRate
    };
    j["flambe.swf.MovieSymbol"] = Gc;
    Gc.__name__ = ["flambe", "swf", "MovieSymbol"];
    Gc.__interfaces__ = [De];
    Gc.prototype = { get_name: function() { return this._name }, createSprite: function() { return new Fc(this) }, __class__: Gc, __properties__: { get_name: "get_name" } };
    var dg = function(a) {
        this.empty = !0;
        this.name = a.name;
        var b = null;
        this.keyframes = Array(a.keyframes.length);
        for (var c = 0, e = this.keyframes.length; c < e;) {
            var d = c++,
                b = new eg(a.keyframes[d],
                    b);
            this.keyframes[d] = b;
            this.empty = this.empty && null == b.symbolName
        }
        this.frames = null != b ? b.index + b.duration : 0
    };
    j["flambe.swf.MovieLayer"] = dg;
    dg.__name__ = ["flambe", "swf", "MovieLayer"];
    dg.prototype = { __class__: dg };
    var eg = function(a, b) {
        this.ease = 0;
        this.visible = this.tweened = !0;
        this.alpha = 1;
        this.skewX = this.skewY = this.pivotX = this.pivotY = 0;
        this.scaleX = this.scaleY = 1;
        this.x = this.y = 0;
        this.symbol = null;
        this.index = null != b ? b.index + b.duration : 0;
        this.duration = a.duration;
        this.label = a.label;
        this.symbolName = a.ref;
        var c =
            a.loc;
        null != c && (this.x = c[0], this.y = c[1]);
        c = a.scale;
        null != c && (this.scaleX = c[0], this.scaleY = c[1]);
        c = a.skew;
        null != c && (this.skewX = c[0], this.skewY = c[1]);
        c = a.pivot;
        null != c && (this.pivotX = c[0], this.pivotY = c[1]);
        null != a.alpha && (this.alpha = a.alpha);
        null != a.visible && (this.visible = a.visible);
        null != a.tweened && (this.tweened = a.tweened);
        null != a.ease && (this.ease = a.ease)
    };
    j["flambe.swf.MovieKeyframe"] = eg;
    eg.__name__ = ["flambe", "swf", "MovieKeyframe"];
    eg.prototype = { __class__: eg };
    var Mf = function() {};
    j["flambe.util.Assert"] =
        Mf;
    Mf.__name__ = ["flambe", "util", "Assert"];
    Mf.that = function() {};
    var Yc = function() {};
    j["flambe.util.BitSets"] = Yc;
    Yc.__name__ = ["flambe", "util", "BitSets"];
    Yc.set = function(a, b, c) { return c ? a | b : a & ~b };
    var ve = function() { this.success = new ya;
        this.error = new ya;
        this.progressChanged = new Pc;
        this.hasResult = !1;
        this._total = this._progress = 0 };
    j["flambe.util.Promise"] = ve;
    ve.__name__ = ["flambe", "util", "Promise"];
    ve.prototype = {
        set_result: function(a) {
            if (this.hasResult) throw "Promise result already assigned";
            this._result = a;
            this.hasResult = !0;
            this.success.emit(a);
            return a
        },
        get: function(a) { return this.hasResult ? (a(this._result), null) : this.success.connect(a).once() },
        set_progress: function(a) { this._progress != a && (this._progress = a, this.progressChanged.emit()); return a },
        set_total: function(a) { this._total != a && (this._total = a, this.progressChanged.emit()); return a },
        __class__: ve,
        __properties__: { set_total: "set_total", set_progress: "set_progress", set_result: "set_result" }
    };
    var Pc = function(a) { Va.call(this, a) };
    j["flambe.util.Signal0"] =
        Pc;
    Pc.__name__ = ["flambe", "util", "Signal0"];
    Pc.__super__ = Va;
    Pc.prototype = A(Va.prototype, { connect: function(a, b) { null == b && (b = !1); return this.connectImpl(a, b) }, emit: function() { var a = this;
            this._head == Va.DISPATCHING_SENTINEL ? this.defer(function() { a.emitImpl() }) : this.emitImpl() }, emitImpl: function() { for (var a = this.willEmit(), b = a; null != b;) b._listener(), b.stayInList || b.dispose(), b = b._next;
            this.didEmit(a) }, __class__: Pc });
    var Kf = function(a) { this.next = null;
        this.fn = a };
    j["flambe.util._SignalBase.Task"] = Kf;
    Kf.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    Kf.prototype = { __class__: Kf };
    var Da = function() {};
    j["flambe.util.Strings"] = Da;
    Da.__name__ = ["flambe", "util", "Strings"];
    Da.getFileExtension = function(a) { var b = a.lastIndexOf("."); return 0 < b ? M.substr(a, b + 1, null) : null };
    Da.removeFileExtension = function(a) { var b = a.lastIndexOf("."); return 0 < b ? M.substr(a, 0, b) : a };
    Da.getUrlExtension = function(a) { var b = a.lastIndexOf("?");
        0 <= b && (a = M.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = M.substr(a, b + 1, null)); return Da.getFileExtension(a) };
    Da.joinPath = function(a, b) { 0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/"); return a + b };
    Da.withFields = function(a, b) { var c = b.length; if (0 < c) { for (var a = 0 < a.length ? a + " [" : a + "[", e = 0; e < c;) { 0 < e && (a += ", "); var d = b[e],
                    f = b[e + 1]; if (B.is(f, Error)) { var g = f.stack;
                    null != g && (f = g) } a += d + "=" + B.string(f);
                e += 2 } a += "]" } return a };
    var Kb = function() {};
    j["flambesdk.BaseUtils"] = Kb;
    Kb.__name__ = ["flambesdk", "BaseUtils"];
    Kb.setupBaseURL = function() {
        Kb.BASE_URL = Qa.get_exists() ? Qa.get_isCrossdomain() ? Kb.appendAssetsToUrl(Qa.get_base()) :
            Kb.trimUrl(Qa.get_base()) : ""
    };
    Kb.trimUrl = function(a) { if ("" == a) return ""; if (0 > a.indexOf("http")) return "/" == a.charAt(0) && (a = M.substr(a, 1, a.length - 1)), a; var b = a.indexOf("http://");
        0 > b ? (b = a.indexOf("https://"), b = 0 > b ? 0 : b + 8) : b += 7;
        b = a.indexOf("/", b);
        a = M.substr(a, b, a.length - b); return a = Kb.appendAssetsToUrl(a) };
    Kb.appendAssetsToUrl = function(a) { "/" != a.charAt(a.length - 1) && (a += "/"); return a + "assets/" };
    var nd = function() { ja.call(this);
        this.sdk = new Ib;
        ub.set_onSuspendToggle(function(a) { I.root.add(new qe(a ? 0 : 1)) }) };
    j["flambesdk.SDKComponent"] = nd;
    nd.__name__ = ["flambesdk", "SDKComponent"];
    nd.__super__ = ja;
    nd.prototype = A(ja.prototype, { get_name: function() { return "SDKComponent_1" }, __class__: nd });
    var zc = function(a) { this.url = a;
        this.headers = new Nb;
        this.params = new Nb;
        this.async = !0 };
    j["haxe.Http"] = zc;
    zc.__name__ = ["haxe", "Http"];
    zc.prototype = {
        setHeader: function(a, b) { this.headers = Jb.filter(this.headers, function(b) { return b.header != a });
            this.headers.push({ header: a, value: b }); return this },
        setParameter: function(a, b) {
            this.params =
                Jb.filter(this.params, function(b) { return b.param != a });
            this.params.push({ param: a, value: b });
            return this
        },
        setPostData: function(a) { this.postData = a; return this },
        request: function(a) {
            var b = this;
            b.responseData = null;
            var c = this.req = xg.createXMLHttpRequest(),
                d = function() {
                    if (4 == c.readyState) {
                        var a;
                        try { a = c.status } catch (d) { a = null } void 0 == a && (a = null);
                        if (null != a) b.onStatus(a);
                        if (null != a && 200 <= a && 400 > a) b.req = null, b.onData(b.responseData = c.responseText);
                        else if (null == a) b.req = null, b.onError("Failed to connect or resolve host");
                        else switch (a) {
                            case 12029:
                                b.req = null;
                                b.onError("Failed to connect to host"); break;
                            case 12007:
                                b.req = null;
                                b.onError("Unknown host"); break;
                            default:
                                b.req = null, b.responseData = c.responseText, b.onError("Http Error #" + c.status) }
                    }
                };
            this.async && (c.onreadystatechange = d);
            var f = this.postData;
            if (null != f) a = !0;
            else
                for (var g = this.params.iterator(); g.hasNext();) var h = g.next(),
                    f = null == f ? "" : f + "&",
                    f = f + (encodeURIComponent(h.param) + "=" + encodeURIComponent(h.value));
            try {
                if (a) c.open("POST", this.url, this.async);
                else if (null !=
                    f) { var i = 1 >= this.url.split("?").length;
                    c.open("GET", this.url + (i ? "?" : "&") + f, this.async);
                    f = null } else c.open("GET", this.url, this.async)
            } catch (j) { b.req = null;
                this.onError(j.toString()); return }!Jb.exists(this.headers, function(a) { return "Content-Type" == a.header }) && a && null == this.postData && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            for (a = this.headers.iterator(); a.hasNext();) g = a.next(), c.setRequestHeader(g.header, g.value);
            c.send(f);
            this.async || d(null)
        },
        onData: function() {},
        onError: function() {},
        onStatus: function() {},
        __class__: zc
    };
    var zb = function() { this.buf = new tc;
        this.cache = [];
        this.useCache = zb.USE_CACHE;
        this.useEnumIndex = zb.USE_ENUM_INDEX;
        this.shash = new G;
        this.scount = 0 };
    j["haxe.Serializer"] = zb;
    zb.__name__ = ["haxe", "Serializer"];
    zb.run = function(a) { var b = new zb;
        b.serialize(a); return b.toString() };
    zb.prototype = {
        toString: function() { return this.buf.b },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b += "R", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)) : (this.shash.set(a,
                this.scount++), this.buf.b += "y", a = encodeURIComponent(a), this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length), this.buf.b += ":", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a))
        },
        serializeRef: function(a) { for (var b = typeof a, c = 0, d = this.cache.length; c < d;) { var f = c++,
                    g = this.cache[f]; if (typeof g == b && g == a) return this.buf.b += "r", this.buf.b = null == f ? this.buf.b + "null" : this.buf.b + ("" + f), !0 } this.cache.push(a); return !1 },
        serializeFields: function(a) {
            for (var b = 0, c = t.fields(a); b < c.length;) {
                var d =
                    c[b];
                ++b;
                this.serializeString(d);
                this.serialize(t.field(a, d))
            }
            this.buf.b += "g"
        },
        serialize: function(a) {
            var b = Y["typeof"](a);
            switch (b[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == a) { this.buf.b += "z"; break } this.buf.b += "i";
                    this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                    break;
                case 2:
                    Math.isNaN(a) ? this.buf.b += "k" : Math.isFinite(a) ? (this.buf.b += "d", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a)) : this.buf.b = 0 > a ? this.buf.b + "m" : this.buf.b + "p";
                    break;
                case 3:
                    this.buf.b = a ? this.buf.b + "t" : this.buf.b +
                        "f";
                    break;
                case 6:
                    b = b[2];
                    if (b == String) { this.serializeString(a); break }
                    if (this.useCache && this.serializeRef(a)) break;
                    switch (b) {
                        case Array:
                            b = 0;
                            this.buf.b += "a";
                            for (var c = a.length, d = 0; d < c;) { var f = d++;
                                null == a[f] ? b++ : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)), b = 0), this.serialize(a[f])) } 0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)));
                            this.buf.b += "h";
                            break;
                        case Nb:
                            this.buf.b += "l";
                            for (a = a.iterator(); a.hasNext();) this.serialize(a.next());
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.add(M.dateStr(a));
                            break;
                        case G:
                            this.buf.b += "b";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(a.get(c));
                            this.buf.b += "h";
                            break;
                        case cb:
                            this.buf.b += "q";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c), this.serialize(a.get(c));
                            this.buf.b += "h";
                            break;
                        case sb:
                            this.buf.b += "M";
                            for (b = a.keys(); b.hasNext();) c = b.next(), d = t.field(c, "__id__"), t.deleteField(c, "__id__"),
                                this.serialize(c), c.__id__ = d, this.serialize(a.h[c.__id__]);
                            this.buf.b += "h";
                            break;
                        case Rc:
                            d = 0;
                            f = a.length - 2;
                            b = new tc;
                            for (c = zb.BASE64; d < f;) { var g = a.get(d++),
                                    h = a.get(d++),
                                    i = a.get(d++);
                                b.add(c.charAt(g >> 2));
                                b.add(c.charAt((g << 4 | h >> 4) & 63));
                                b.add(c.charAt((h << 2 | i >> 6) & 63));
                                b.add(c.charAt(i & 63)) } d == f ? (f = a.get(d++), a = a.get(d++), b.add(c.charAt(f >> 2)), b.add(c.charAt((f << 4 | a >> 4) & 63)), b.add(c.charAt(a << 2 & 63))) : d == f + 1 && (a = a.get(d++), b.add(c.charAt(a >> 2)), b.add(c.charAt(a << 4 & 63)));
                            a = b.b;
                            this.buf.b += "s";
                            this.buf.b =
                                null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length);
                            this.buf.b += ":";
                            this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(Y.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(Y.getClassName(b)), this.useCache && this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 4:
                    if (this.useCache && this.serializeRef(a)) break;
                    this.buf.b +=
                        "o";
                    this.serializeFields(a);
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache) { if (this.serializeRef(a)) break;
                        this.cache.pop() } this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                    this.serializeString(Y.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += ":", this.buf.b += B.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += ":";
                    b = a.length;
                    this.buf.b += B.string(b - 2);
                    for (c = 2; c < b;) d = c++, this.serialize(a[d]);
                    this.useCache && this.cache.push(a);
                    break;
                case 5:
                    throw "Cannot serialize function";
                default:
                    throw "Cannot serialize " +
                        B.string(a);
            }
        },
        __class__: zb
    };
    var $a = function(a) { this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = $a.DEFAULT_RESOLVER;
        null == a && (a = Y, $a.DEFAULT_RESOLVER = a);
        this.setResolver(a) };
    j["haxe.Unserializer"] = $a;
    $a.__name__ = ["haxe", "Unserializer"];
    $a.initCodes = function() { for (var a = [], b = 0, c = $a.BASE64.length; b < c;) { var d = b++;
            a[$a.BASE64.charCodeAt(d)] = d } return a };
    $a.run = function(a) { return (new $a(a)).unserialize() };
    $a.prototype = {
        setResolver: function(a) {
            this.resolver = null == a ? {
                resolveClass: function() { return null },
                resolveEnum: function() { return null }
            } : a
        },
        get: function(a) { return this.buf.charCodeAt(a) },
        readDigits: function() { for (var a = 0, b = !1, c = this.pos;;) { var d = this.buf.charCodeAt(this.pos); if (d != d) break; if (45 == d) { if (this.pos != c) break;
                    b = !0 } else { if (48 > d || 57 < d) break;
                    a = 10 * a + (d - 48) } this.pos++ } b && (a *= -1); return a },
        unserializeObject: function(a) {
            for (;;) {
                if (this.pos >= this.length) throw "Invalid object";
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if ("string" != typeof b) throw "Invalid object key";
                var c =
                    this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        unserializeEnum: function(a, b) { if (58 != this.get(this.pos++)) throw "Invalid enum format"; var c = this.readDigits(); if (0 == c) return Y.createEnum(a, b); for (var d = []; 0 < c--;) d.push(this.unserialize()); return Y.createEnum(a, b, d) },
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
                    for (var a = this.pos;;) {
                        var b = this.buf.charCodeAt(this.pos);
                        if (43 <= b && 58 > b || 101 ==
                            b || 69 == b) this.pos++;
                        else break
                    }
                    return B.parseFloat(M.substr(this.buf, a, this.pos - a));
                case 121:
                    a = this.readDigits();
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw "Invalid string length";
                    b = M.substr(this.buf, this.pos, a);
                    this.pos += a;
                    b = decodeURIComponent(b.split("+").join(" "));
                    this.scache.push(b);
                    return b;
                case 107:
                    return Math.NaN;
                case 109:
                    return Math.NEGATIVE_INFINITY;
                case 112:
                    return Math.POSITIVE_INFINITY;
                case 97:
                    a = [];
                    for (this.cache.push(a);;) {
                        b = this.buf.charCodeAt(this.pos);
                        if (104 == b) {
                            this.pos++;
                            break
                        }
                        117 == b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) : a.push(this.unserialize())
                    }
                    return a;
                case 111:
                    return a = {}, this.cache.push(a), this.unserializeObject(a), a;
                case 114:
                    a = this.readDigits();
                    if (0 > a || a >= this.cache.length) throw "Invalid reference";
                    return this.cache[a];
                case 82:
                    a = this.readDigits();
                    if (0 > a || a >= this.scache.length) throw "Invalid string reference";
                    return this.scache[a];
                case 120:
                    throw this.unserialize();
                case 99:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw "Class not found " +
                        a;
                    a = Y.createEmptyInstance(b);
                    this.cache.push(a);
                    this.unserializeObject(a);
                    return a;
                case 119:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw "Enum not found " + a;
                    a = this.unserializeEnum(b, this.unserialize());
                    this.cache.push(a);
                    return a;
                case 106:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw "Enum not found " + a;
                    this.pos++;
                    var c = this.readDigits(),
                        d = Y.getEnumConstructs(b)[c];
                    if (null == d) throw "Unknown enum index " + a + "@" + c;
                    a = this.unserializeEnum(b, d);
                    this.cache.push(a);
                    return a;
                case 108:
                    a = new Nb;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                    this.pos++;
                    return a;
                case 98:
                    a = new G;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 113:
                    a = new cb;
                    this.cache.push(a);
                    for (b = this.get(this.pos++); 58 == b;) b = this.readDigits(), a.set(b, this.unserialize()), b = this.get(this.pos++);
                    if (104 != b) throw "Invalid IntMap format";
                    return a;
                case 77:
                    a = new sb;
                    for (this.cache.push(a); 104 !=
                        this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 118:
                    return a = M.substr(this.buf, this.pos, 19), a = M.strDate(a), this.cache.push(a), this.pos += 19, a;
                case 115:
                    a = this.readDigits();
                    d = this.buf;
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw "Invalid bytes length";
                    var f = $a.CODES;
                    null == f && (f = $a.initCodes(), $a.CODES = f);
                    for (var g = this.pos, h = a & 3, i = g + (a - h), b = Rc.alloc(3 * (a >> 2) + (2 <= h ? h - 1 : 0)), c = 0; g < i;) {
                        var j = f[$.fastCodeAt(d, g++)],
                            k = f[$.fastCodeAt(d, g++)];
                        b.set(c++, j << 2 | k >> 4);
                        j = f[$.fastCodeAt(d, g++)];
                        b.set(c++, k << 4 | j >> 2);
                        k = f[$.fastCodeAt(d, g++)];
                        b.set(c++, j << 6 | k)
                    }
                    2 <= h && (k = f[$.fastCodeAt(d, g++)], i = f[$.fastCodeAt(d, g++)], b.set(c++, k << 2 | i >> 4), 3 == h && (d = f[$.fastCodeAt(d, g++)], b.set(c++, i << 4 | d >> 2)));
                    this.pos += a;
                    this.cache.push(b);
                    return b;
                case 67:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw "Class not found " + a;
                    a = Y.createEmptyInstance(b);
                    this.cache.push(a);
                    a.hxUnserialize(this);
                    if (103 != this.get(this.pos++)) throw "Invalid custom data";
                    return a
            }
            this.pos--;
            throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
        },
        __class__: $a
    };
    var Rc = function(a, b) { this.length = a;
        this.b = b };
    j["haxe.io.Bytes"] = Rc;
    Rc.__name__ = ["haxe", "io", "Bytes"];
    Rc.alloc = function(a) { for (var b = [], c = 0; c < a;) c++, b.push(0); return new Rc(a, b) };
    Rc.prototype = { get: function(a) { return this.b[a] }, set: function(a, b) { this.b[a] = b & 255 }, __class__: Rc };
    var Ca = function() {};
    j["haxe.ds.ArraySort"] = Ca;
    Ca.__name__ = ["haxe", "ds", "ArraySort"];
    Ca.sort = function(a, b) {
        Ca.rec(a, b, 0,
            a.length)
    };
    Ca.rec = function(a, b, c, d) { var f = c + d >> 1; if (12 > d - c) { if (!(d <= c))
                for (f = c + 1; f < d;)
                    for (var g = f++; g > c;) { if (0 > b(a[g], a[g - 1])) Ca.swap(a, g - 1, g);
                        else break;
                        g-- } } else Ca.rec(a, b, c, f), Ca.rec(a, b, f, d), Ca.doMerge(a, b, c, f, d, f - c, d - f) };
    Ca.doMerge = function(a, b, c, d, f, g, h) { var i, j, k, l;
        0 == g || 0 == h || (2 == g + h ? 0 > b(a[d], a[c]) && Ca.swap(a, d, c) : (g > h ? (k = g >> 1, i = c + k, j = Ca.lower(a, b, d, f, i), l = j - d) : (l = h >> 1, j = d + l, i = Ca.upper(a, b, c, d, j), k = i - c), Ca.rotate(a, b, i, d, j), d = i + l, Ca.doMerge(a, b, c, i, d, k, l), Ca.doMerge(a, b, d, j, f, g - k, h - l))) };
    Ca.rotate = function(a, b, c, d, f) { if (!(c == d || d == f))
            for (b = Ca.gcd(f - c, d - c); 0 != b--;) { for (var g = a[c + b], h = d - c, i = c + b, j = c + b + h; j != c + b;) a[i] = a[j], i = j, j = f - j > h ? j + h : c + (h - (f - j));
                a[i] = g } };
    Ca.gcd = function(a, b) { for (; 0 != b;) var c = a % b,
            a = b,
            b = c; return a };
    Ca.upper = function(a, b, c, d, f) { for (var d = d - c, g, h; 0 < d;) g = d >> 1, h = c + g, 0 > b(a[f], a[h]) ? d = g : (c = h + 1, d = d - g - 1); return c };
    Ca.lower = function(a, b, c, d, f) { for (var d = d - c, g, h; 0 < d;) g = d >> 1, h = c + g, 0 > b(a[h], a[f]) ? (c = h + 1, d = d - g - 1) : d = g; return c };
    Ca.swap = function(a, b, c) { var d = a[b];
        a[b] = a[c];
        a[c] = d };
    var Fe = function() {};
    j["haxe.ds.BalancedTree"] = Fe;
    Fe.__name__ = ["haxe", "ds", "BalancedTree"];
    Fe.prototype = {
        set: function(a, b) { this.root = this.setLoop(a, b, this.root) },
        get: function(a) { for (var b = this.root; null != b;) { var c = this.compare(a, b.key); if (0 == c) return b.value;
                b = 0 > c ? b.left : b.right } return null },
        remove: function(a) { try { return this.root = this.removeLoop(a, this.root), !0 } catch (b) { if (C.__instanceof(b, String)) return !1; throw b; } },
        exists: function(a) {
            for (var b = this.root; null != b;) {
                var c = this.compare(a, b.key);
                if (0 ==
                    c) return !0;
                b = 0 > c ? b.left : b.right
            }
            return !1
        },
        iterator: function() { var a = [];
            this.iteratorLoop(this.root, a); return M.iter(a) },
        keys: function() { var a = [];
            this.keysLoop(this.root, a); return M.iter(a) },
        setLoop: function(a, b, c) { if (null == c) return new bb(null, a, b, null); var d = this.compare(a, c.key); if (0 == d) return new bb(c.left, a, b, c.right, null == c ? 0 : c._height); if (0 > d) return this.balance(this.setLoop(a, b, c.left), c.key, c.value, c.right);
            a = this.setLoop(a, b, c.right); return this.balance(c.left, c.key, c.value, a) },
        removeLoop: function(a,
            b) { if (null == b) throw "Not_found"; var c = this.compare(a, b.key); return 0 == c ? this.merge(b.left, b.right) : 0 > c ? this.balance(this.removeLoop(a, b.left), b.key, b.value, b.right) : this.balance(b.left, b.key, b.value, this.removeLoop(a, b.right)) },
        iteratorLoop: function(a, b) { null != a && (this.iteratorLoop(a.left, b), b.push(a.value), this.iteratorLoop(a.right, b)) },
        keysLoop: function(a, b) { null != a && (this.keysLoop(a.left, b), b.push(a.key), this.keysLoop(a.right, b)) },
        merge: function(a, b) {
            if (null == a) return b;
            if (null == b) return a;
            var c =
                this.minBinding(b);
            return this.balance(a, c.key, c.value, this.removeMinBinding(b))
        },
        minBinding: function(a) { if (null == a) throw "Not_found"; return null == a.left ? a : this.minBinding(a.left) },
        removeMinBinding: function(a) { return null == a.left ? a.right : this.balance(this.removeMinBinding(a.left), a.key, a.value, a.right) },
        balance: function(a, b, c, d) {
            var f;
            f = null == a ? 0 : a._height;
            var g;
            g = null == d ? 0 : d._height;
            return f > g + 2 ? function() { var b = a.left; return null == b ? 0 : b._height }(this) >= function() { var b = a.right; return null == b ? 0 : b._height }(this) ?
                new bb(a.left, a.key, a.value, new bb(a.right, b, c, d)) : new bb(new bb(a.left, a.key, a.value, a.right.left), a.right.key, a.right.value, new bb(a.right.right, b, c, d)) : g > f + 2 ? function() { var a = d.right; return null == a ? 0 : a._height }(this) > function() { var a = d.left; return null == a ? 0 : a._height }(this) ? new bb(new bb(a, b, c, d.left), d.key, d.value, d.right) : new bb(new bb(a, b, c, d.left.left), d.left.key, d.left.value, new bb(d.left.right, d.key, d.value, d.right)) : new bb(a, b, c, d, (f > g ? f : g) + 1)
        },
        compare: function(a, b) { return t.compare(a, b) },
        __class__: Fe
    };
    var bb = function(a, b, c, d, f) { null == f && (f = -1);
        this.left = a;
        this.key = b;
        this.value = c;
        this.right = d;
        this._height = -1 == f ? (function(a) { a = a.left; return null == a ? 0 : a._height }(this) > function(a) { a = a.right; return null == a ? 0 : a._height }(this) ? function(a) { a = a.left; return null == a ? 0 : a._height }(this) : function(a) { a = a.right; return null == a ? 0 : a._height }(this)) + 1 : f };
    j["haxe.ds.TreeNode"] = bb;
    bb.__name__ = ["haxe", "ds", "TreeNode"];
    bb.prototype = { __class__: bb };
    var db = function() {};
    j["haxe.ds.EnumValueMap"] = db;
    db.__name__ = ["haxe", "ds", "EnumValueMap"];
    db.__interfaces__ = [sc];
    db.__super__ = Fe;
    db.prototype = A(Fe.prototype, {
        compare: function(a, b) { var c = a[1] - b[1]; if (0 != c) return c; var c = a.slice(2),
                d = b.slice(2); return 0 == c.length && 0 == d.length ? 0 : this.compareArgs(c, d) },
        compareArgs: function(a, b) { var c = a.length - b.length; if (0 != c) return c; for (var c = 0, d = a.length; c < d;) { var f = c++,
                    f = this.compareArg(a[f], b[f]); if (0 != f) return f } return 0 },
        compareArg: function(a, b) {
            return t.isEnumValue(a) && t.isEnumValue(b) ? this.compare(a, b) : a instanceof Array &&
                null == a.__enum__ && b instanceof Array && null == b.__enum__ ? this.compareArgs(a, b) : t.compare(a, b)
        },
        __class__: db
    });
    var cb = function() { this.h = {} };
    j["haxe.ds.IntMap"] = cb;
    cb.__name__ = ["haxe", "ds", "IntMap"];
    cb.__interfaces__ = [sc];
    cb.prototype = {
        set: function(a, b) { this.h[a] = b },
        get: function(a) { return this.h[a] },
        exists: function(a) { return this.h.hasOwnProperty(a) },
        remove: function(a) { if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a]; return !0 },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) &&
                a.push(b | 0);
            return M.iter(a)
        },
        iterator: function() { return { ref: this.h, it: this.keys(), hasNext: function() { return this.it.hasNext() }, next: function() { return this.ref[this.it.next()] } } },
        __class__: cb
    };
    var sb = function() { this.h = {};
        this.h.__keys__ = {} };
    j["haxe.ds.ObjectMap"] = sb;
    sb.__name__ = ["haxe", "ds", "ObjectMap"];
    sb.__interfaces__ = [sc];
    sb.prototype = {
        set: function(a, b) { var c = a.__id__ || (a.__id__ = ++sb.count);
            this.h[c] = b;
            this.h.__keys__[c] = a },
        get: function(a) { return this.h[a.__id__] },
        exists: function(a) {
            return null !=
                this.h.__keys__[a.__id__]
        },
        remove: function(a) { a = a.__id__; if (null == this.h.__keys__[a]) return !1;
            delete this.h[a];
            delete this.h.__keys__[a]; return !0 },
        keys: function() { var a = [],
                b; for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]); return M.iter(a) },
        iterator: function() { return { ref: this.h, it: this.keys(), hasNext: function() { return this.it.hasNext() }, next: function() { return this.ref[this.it.next().__id__] } } },
        __class__: sb
    };
    var G = function() { this.h = {} };
    j["haxe.ds.StringMap"] = G;
    G.__name__ = ["haxe", "ds", "StringMap"];
    G.__interfaces__ = [sc];
    G.prototype = {
        set: function(a, b) { this.h["$" + a] = b },
        get: function(a) { return this.h["$" + a] },
        exists: function(a) { return this.h.hasOwnProperty("$" + a) },
        remove: function(a) { a = "$" + a; if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a]; return !0 },
        keys: function() { var a = [],
                b; for (b in this.h) this.h.hasOwnProperty(b) && a.push(b.substr(1)); return M.iter(a) },
        iterator: function() {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function() { return this.it.hasNext() },
                next: function() {
                    return this.ref["$" +
                        this.it.next()]
                }
            }
        },
        __class__: G
    };
    var yg = function() {};
    j["haxe.io.Eof"] = yg;
    yg.__name__ = ["haxe", "io", "Eof"];
    yg.prototype = { toString: function() { return "Eof" }, __class__: yg };
    var tg = function() {};
    j["haxe.rtti.Meta"] = tg;
    tg.__name__ = ["haxe", "rtti", "Meta"];
    tg.getType = function(a) { a = a.__meta__; return null == a || null == a.obj ? {} : a.obj };
    var fg = function(a) { this.__x = a };
    j["haxe.xml._Fast.NodeAccess"] = fg;
    fg.__name__ = ["haxe", "xml", "_Fast", "NodeAccess"];
    fg.prototype = {
        resolve: function(a) {
            var b = this.__x.elementsNamed(a).next();
            if (null == b) throw (this.__x.nodeType == O.Document ? "Document" : this.__x.get_nodeName()) + " is missing element " + a;
            return new Dc(b)
        },
        __class__: fg
    };
    var gg = function(a) { this.__x = a };
    j["haxe.xml._Fast.AttribAccess"] = gg;
    gg.__name__ = ["haxe", "xml", "_Fast", "AttribAccess"];
    gg.prototype = { resolve: function(a) { if (this.__x.nodeType == O.Document) throw "Cannot access document attribute " + a; var b = this.__x.get(a); if (null == b) throw this.__x.get_nodeName() + " is missing attribute " + a; return b }, __class__: gg };
    var hg = function(a) {
        this.__x =
            a
    };
    j["haxe.xml._Fast.HasAttribAccess"] = hg;
    hg.__name__ = ["haxe", "xml", "_Fast", "HasAttribAccess"];
    hg.prototype = { __class__: hg };
    var ig = function(a) { this.__x = a };
    j["haxe.xml._Fast.HasNodeAccess"] = ig;
    ig.__name__ = ["haxe", "xml", "_Fast", "HasNodeAccess"];
    ig.prototype = { resolve: function(a) { return this.__x.elementsNamed(a).hasNext() }, __class__: ig };
    var jg = function(a) { this.__x = a };
    j["haxe.xml._Fast.NodeListAccess"] = jg;
    jg.__name__ = ["haxe", "xml", "_Fast", "NodeListAccess"];
    jg.prototype = {
        resolve: function(a) {
            for (var b = new Nb,
                    a = this.__x.elementsNamed(a); a.hasNext();) { var c = a.next();
                b.add(new Dc(c)) }
            return b
        },
        __class__: jg
    };
    var Dc = function(a) { if (a.nodeType != O.Document && a.nodeType != O.Element) throw "Invalid nodeType " + B.string(a.nodeType);
        this.x = a;
        this.node = new fg(a);
        this.nodes = new jg(a);
        this.att = new gg(a);
        this.has = new hg(a);
        this.hasNode = new ig(a) };
    j["haxe.xml.Fast"] = Dc;
    Dc.__name__ = ["haxe", "xml", "Fast"];
    Dc.prototype = {
        get_name: function() { return this.x.nodeType == O.Document ? "Document" : this.x.get_nodeName() },
        get_innerData: function() {
            var a =
                this.x.iterator();
            if (!a.hasNext()) throw this.get_name() + " does not have data";
            var b = a.next(),
                c = a.next();
            if (null != c) { if (b.nodeType == O.PCData && c.nodeType == O.CData && "" == $.trim(b.get_nodeValue()) && (b = a.next(), null == b || b.nodeType == O.PCData && "" == $.trim(b.get_nodeValue()) && null == a.next())) return c.get_nodeValue(); throw this.get_name() + " does not only have data"; }
            if (b.nodeType != O.PCData && b.nodeType != O.CData) throw this.get_name() + " does not have data";
            return b.get_nodeValue()
        },
        __class__: Dc,
        __properties__: {
            get_innerData: "get_innerData",
            get_name: "get_name"
        }
    };
    var Ob = function() {};
    j["haxe.xml.Parser"] = Ob;
    Ob.__name__ = ["haxe", "xml", "Parser"];
    Ob.parse = function(a) { var b = O.createDocument();
        Ob.doParse(a, 0, b); return b };
    Ob.doParse = function(a, b, c) {
        null == b && (b = 0);
        for (var d = null, f = 1, g = 1, h = null, i = 0, j = 0, k = 0, l = a.charCodeAt(b), n = new tc; l == l;) {
            switch (f) {
                case 0:
                    switch (l) {
                        case 10:
                        case 13:
                        case 9:
                        case 32:
                            break;
                        default:
                            f = g; continue }
                    break;
                case 1:
                    switch (l) {
                        case 60:
                            f = 0;
                            g = 2; break;
                        default:
                            i = b;
                            f = 13; continue }
                    break;
                case 13:
                    60 == l ? (g = O.createPCData(n.b + M.substr(a,
                        i, b - i)), n = new tc, c.addChild(g), j++, f = 0, g = 2) : 38 == l && (n.addSub(a, i, b - i), f = 18, g = 13, i = b + 1);
                    break;
                case 17:
                    93 == l && 93 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (f = O.createCData(M.substr(a, i, b - i)), c.addChild(f), j++, b += 2, f = 1);
                    break;
                case 2:
                    switch (l) {
                        case 33:
                            if (91 == a.charCodeAt(b + 1)) { b += 2; if ("CDATA[" != M.substr(a, b, 6).toUpperCase()) throw "Expected <![CDATA[";
                                b += 5;
                                f = 17 } else if (68 == a.charCodeAt(b + 1) || 100 == a.charCodeAt(b + 1)) { if ("OCTYPE" != M.substr(a, b + 2, 6).toUpperCase()) throw "Expected <!DOCTYPE";
                                b += 8;
                                f = 16 } else {
                                if (45 !=
                                    a.charCodeAt(b + 1) || 45 != a.charCodeAt(b + 2)) throw "Expected <\!--";
                                b += 2;
                                f = 15
                            }
                            i = b + 1;
                            break;
                        case 63:
                            f = 14;
                            i = b;
                            break;
                        case 47:
                            if (null == c) throw "Expected node name";
                            i = b + 1;
                            f = 0;
                            g = 10;
                            break;
                        default:
                            f = 3;
                            i = b;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= l && 122 >= l || 65 <= l && 90 >= l || 48 <= l && 57 >= l || 58 == l || 46 == l || 95 == l || 45 == l)) { if (b == i) throw "Expected node name";
                        d = O.createElement(M.substr(a, i, b - i));
                        c.addChild(d);
                        f = 0;
                        g = 4; continue }
                    break;
                case 4:
                    switch (l) {
                        case 47:
                            f = 11;
                            j++; break;
                        case 62:
                            f = 9;
                            j++; break;
                        default:
                            f = 5;
                            i = b; continue }
                    break;
                case 5:
                    if (!(97 <=
                            l && 122 >= l || 65 <= l && 90 >= l || 48 <= l && 57 >= l || 58 == l || 46 == l || 95 == l || 45 == l)) { if (i == b) throw "Expected attribute name";
                        h = M.substr(a, i, b - i); if (d.exists(h)) throw "Duplicate attribute";
                        f = 0;
                        g = 6; continue }
                    break;
                case 6:
                    switch (l) {
                        case 61:
                            f = 0;
                            g = 7; break;
                        default:
                            throw "Expected ="; }
                    break;
                case 7:
                    switch (l) {
                        case 34:
                        case 39:
                            f = 8;
                            i = b; break;
                        default:
                            throw 'Expected "'; }
                    break;
                case 8:
                    l == a.charCodeAt(i) && (g = M.substr(a, i + 1, b - i - 1), d.set(h, g), f = 0, g = 4);
                    break;
                case 9:
                    i = b = Ob.doParse(a, b, d);
                    f = 1;
                    break;
                case 11:
                    switch (l) {
                        case 62:
                            f = 1;
                            break;
                        default:
                            throw "Expected >";
                    }
                    break;
                case 12:
                    switch (l) {
                        case 62:
                            return 0 == j && c.addChild(O.createPCData("")), b;
                        default:
                            throw "Expected >"; }
                case 10:
                    if (!(97 <= l && 122 >= l || 65 <= l && 90 >= l || 48 <= l && 57 >= l || 58 == l || 46 == l || 95 == l || 45 == l)) { if (i == b) throw "Expected node name"; if (M.substr(a, i, b - i) != c.get_nodeName()) throw "Expected </" + c.get_nodeName() + ">";
                        f = 0;
                        g = 12; continue }
                    break;
                case 15:
                    45 == l && 45 == a.charCodeAt(b + 1) && 62 == a.charCodeAt(b + 2) && (c.addChild(O.createComment(M.substr(a, i, b - i))), b += 2, f = 1);
                    break;
                case 16:
                    91 == l ? k++ : 93 == l ? k-- : 62 == l && 0 == k && (c.addChild(O.createDocType(M.substr(a,
                        i, b - i))), f = 1);
                    break;
                case 14:
                    63 == l && 62 == a.charCodeAt(b + 1) && (b++, f = M.substr(a, i + 1, b - i - 2), c.addChild(O.createProcessingInstruction(f)), f = 1);
                    break;
                case 18:
                    59 == l && (i = M.substr(a, i, b - i), 35 == i.charCodeAt(0) ? (i = 120 == i.charCodeAt(1) ? B.parseInt("0" + M.substr(i, 1, i.length - 1)) : B.parseInt(M.substr(i, 1, i.length - 1)), n.add(String.fromCharCode(i))) : Ob.escapes.exists(i) ? n.add(Ob.escapes.get(i)) : n.b += B.string("&" + i + ";"), i = b + 1, f = g)
            }
            l = $.fastCodeAt(a, ++b)
        }
        1 == f && (i = b, f = 13);
        if (13 == f) return (b != i || 0 == j) && c.addChild(O.createPCData(n.b +
            M.substr(a, i, b - i))), b;
        throw "Unexpected end";
    };
    var C = function() {};
    j["js.Boot"] = C;
    C.__name__ = ["js", "Boot"];
    C.getClass = function(a) { return a instanceof Array && null == a.__enum__ ? Array : a.__class__ };
    C.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 == a.length) return a[0];
                        for (var c = a[0] + "(", b = b + "\t", d = 2, f = a.length; d < f;) var g = d++,
                            c = 2 != g ? c + ("," +
                                C.__string_rec(a[g], b)) : c + C.__string_rec(a[g], b);
                        return c + ")"
                    }
                    c = a.length;
                    d = "[";
                    b += "\t";
                    for (f = 0; f < c;) g = f++, d += (0 < g ? "," : "") + C.__string_rec(a[g], b);
                    return d + "]"
                }
                try { d = a.toString } catch (h) { return "???" }
                if (null != d && d != Object.toString && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                f = null != a.hasOwnProperty;
                for (c in a)
                    if (!f || a.hasOwnProperty(c)) "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + C.__string_rec(a[c],
                        b));
                b = b.substring(1);
                return d + ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return "" + a
        }
    };
    C.__interfLoop = function(a, b) { if (null == a) return !1; if (a == b) return !0; var c = a.__interfaces__; if (null != c)
            for (var d = 0, f = c.length; d < f;) { var g = d++,
                    g = c[g]; if (g == b || C.__interfLoop(g, b)) return !0 }
        return C.__interfLoop(a.__super__, b) };
    C.__instanceof = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case $c:
                return (a | 0) === a;
            case X:
                return "number" == typeof a;
            case Vd:
                return "boolean" == typeof a;
            case String:
                return "string" ==
                    typeof a;
            case Array:
                return a instanceof Array && null == a.__enum__;
            case Cg:
                return !0;
            default:
                if (null != a) { if ("function" == typeof b && (a instanceof b || C.__interfLoop(C.getClass(a), b))) return !0 } else return !1;
                return b == Dg && null != a.__name__ || b == Eg && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    C.__cast = function(a, b) { if (C.__instanceof(a, b)) return a; throw "Cannot cast " + B.string(a) + " to " + B.string(b); };
    var xg = function() {};
    j["js.Browser"] = xg;
    xg.__name__ = ["js", "Browser"];
    xg.createXMLHttpRequest = function() {
        if ("undefined" !=
            typeof XMLHttpRequest) return new XMLHttpRequest;
        if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
        throw "Unable to create XMLHttpRequest object.";
    };
    var mg = function() {};
    j["js.Lib"] = mg;
    mg.__name__ = ["js", "Lib"];
    mg.eval = function(a) { return eval(a) };
    var Ib = function() { Ib.eval("nick_sdk_client.SDK.initialize") };
    j["nicksdk.SDK"] = Ib;
    Ib.__name__ = ["nicksdk", "SDK"];
    Ib.eval = function(a, b) {
        null == b && (b = []);
        for (var c = null, d = null, f = 0, g = a.split("."); f < g.length;) {
            var h = g[f];
            ++f;
            c = d;
            d = null ==
                c ? t.field(window, h) : t.field(c, h)
        }
        f = null;
        null != d ? f = d.apply(c, b) : null;
        return f
    };
    Ib.bind = function(a, b) { for (var c = null, d = null, f = "", g = 0, h = a.split("."); g < h.length;) { var i = h[g];++g;
            c = d;
            f = i;
            d = null == c ? t.field(window, i) : t.field(c, i) } null == c ? null : c[f] = b };
    Ib.prototype = { __class__: Ib };
    var Pb = function() {};
    j["nicksdk.event.GameEventEmitter"] = Pb;
    Pb.__name__ = ["nicksdk", "event", "GameEventEmitter"];
    Pb.sendGameEvent = function(a, b) { Pb.callExternal(a, b) };
    Pb.callExternal = function(a, b) {
        Ib.eval("nick_sdk_client.GameEventEmitter.sendGameEvent",
            [a, b])
    };
    var ub = function() {};
    j["nicksdk.event.GameEventListener"] = ub;
    ub.__name__ = ["nicksdk", "event", "GameEventListener"];
    ub.__properties__ = { set_onSuspendToggle: "set_onSuspendToggle", set_onPlaybackToggle: "set_onPlaybackToggle", set_onAudioToggle: "set_onAudioToggle" };
    ub.set_onAudioToggle = function(a) { ub.onAudioToggle = a;
        Ib.bind("nick_sdk_client.GameEventListener.onAudioToggle", a); return a };
    ub.set_onPlaybackToggle = function(a) {
        ub.onPlaybackToggle = a;
        Ib.bind("nick_sdk_client.GameEventListener.onPlaybackToggle",
            a);
        return a
    };
    ub.set_onSuspendToggle = function(a) { ub.onSuspendToggle = a;
        Ib.bind("nick_sdk_client.GameEventListener.onSuspendToggle", a); return a };
    var Qa = function() {};
    j["nicksdk.jsembed.JSEmbedProxy"] = Qa;
    Qa.__name__ = ["nicksdk", "jsembed", "JSEmbedProxy"];
    Qa.__properties__ = { get_isCrossdomain: "get_isCrossdomain", get_base: "get_base", get_exists: "get_exists" };
    Qa.get_exists = function() { return Qa.callJSEmbedMethod("exists()") };
    Qa.get_base = function() { return Qa.callJSEmbedMethod("baseUrl()") };
    Qa.get_isCrossdomain =
        function() { return Qa.callJSEmbedMethod("isBaseCrossdomain()") };
    Qa.callJSEmbedMethod = function(a) { try { var b = Qa.eval("eval", ["jsembed." + a]); if (null != b) return b } catch (c) {} return "" };
    Qa.eval = function(a, b) { null == b && (b = []); for (var c = null, d = 0, f = a.split("."); d < f.length;) c = f[d], ++d, c = t.field(window, c); return c.apply(null, b) };
    var ia, Bg = 0;
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    j.Math = Math;
    Math.isFinite = function(a) { return isFinite(a) };
    Math.isNaN = function(a) { return isNaN(a) };
    String.prototype.__class__ = j.String = String;
    String.__name__ = ["String"];
    j.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = j.Date = Date;
    Date.__name__ = ["Date"];
    var $c = j.Int = { __name__: ["Int"] },
        Cg = j.Dynamic = { __name__: ["Dynamic"] },
        X = j.Float = Number;
    X.__name__ = ["Float"];
    var Vd = j.Bool = Boolean;
    Vd.__ename__ = ["Bool"];
    var Dg = j.Class = { __name__: ["Class"] },
        Eg = {};
    O.Element = "element";
    O.PCData = "pcdata";
    O.CData = "cdata";
    O.Comment = "comment";
    O.DocType = "doctype";
    O.ProcessingInstruction =
        "processingInstruction";
    O.Document = "document";
    Eb.SINGLE_NAMES = 114;
    Eb.OPTIONAL_SLOTS = [p.MASK, p.POWER_LEFT, p.POWER_RIGHT];
    y._scratchPoint = new sa;
    y._DEBUG_SHOW_HITBOX = !1;
    D._DEBUG_SHOW_CLICKWALL = !1;
    r.STAGE_WIDTH = 960;
    r.STAGE_CENTER_X = 480;
    r.scaleFactor = 1;
    r.ACHIEVEMENTS_ID = "X";
    r.SHARED_OBJECT_DATA_ID = "sbcc_1.0.0";
    r.MAX_AVATARS = 10;
    r._uniqueId = 0;
    r._isCocoon = -1;
    Wa._GRID_START_X = -(r.STAGE_WIDTH / 2) + 220;
    Wa._GRID_OFFSET_X = (r.STAGE_WIDTH - 450) / 4;
    Wa._GRID_START_Y = -45;
    Wa._GRID_OFFSET_Y = 155;
    uc._TAP_TO_EDIT_Y = -200;
    uc._LARGE_PANEL_WIDTH =
        718;
    Sc.TIMER_POINTER = 1.5;
    Fb._scratchPoint = new sa;
    Ac._NUM_ITEMS = 5;
    Ac._NUM_ITEMS_BG = 3;
    da._CLICK_TIME = 1;
    da._DRAG_THRESH = 10;
    da._MAX_SIZE = 100;
    da._idAssign = 0;
    h.texture = new Ye;
    h.sound = new Ue;
    h.xml = new Ze;
    h.spine = new Xe;
    h.localization = new Te;
    h.xmlconfig = ["config_loading", "config"];
    J._scratchPoint = new sa;
    qb.radDeg = 180 / Math.PI;
    qb.degRad = Math.PI / 180;
    yb.VERSION = "3.2.00";
    yb.FPS = 30;
    ib.ACTION_STOP = 0;
    ib.ACTION_OPENED = 1;
    ib.ACTION_CLOSED = 4;
    ib.ACTION_FLOW = 5;
    ke._DEBUG_SHOW_HITBOX = !1;
    Ja._tweenRemoval = [];
    Ja._tweenUpdate = [];
    vb._canadaShowGameTitle = "";
    H._offlineUserId = "";
    H._offlineTrackingId = "";
    H._sessionId = "";
    H._flagInitted = !1;
    H._DEFAULT_SHARED_OBJECT_ID = "nkcimocuresid";
    H.OPTION_ENABLE_TRACKING = !0;
    Na._mapEmpty = [];
    Zb.instance = new Zb;
    Va.DISPATCHING_SENTINEL = new Nc(null, null);
    I.root = new ea;
    I.uncaughtError = new ya;
    I.hidden = new fb(!1);
    I.volume = new qa(1);
    I._platform = Zb.instance;
    I._calledInit = !1;
    pb.__meta__ = {
        obj: {
            assets: [{
                fonts_en_simple: [{ bytes: 43774, md5: "7b84645400ecece59d76be44a8f95722", name: "font.fnt" }, {
                    bytes: 397652,
                    md5: "794e6cfd70964c1c59e8ac536072443b",
                    name: "font.png"
                }, { bytes: 44187, md5: "078e3bde09dd21d9ffe51168089987c2", name: "lh_comic_black.fnt" }, { bytes: 23649, md5: "6f836ab6ec34cd9af8c98f7cdffea5cc", name: "lh_comic_black.png" }],
                preload: [{ bytes: 261, md5: "d8b5014b3cab1914058213f2ac3db77b", name: "preload_0.atlas" }, { bytes: 24710, md5: "0bac9db4fc6e6ed16d3f31d3489b9dad", name: "preload_0.png" }],
                scripts: [{ bytes: 6752, md5: "f363a5d86010c723a6d608d678591814", name: "Blob.js" }, { bytes: 3802, md5: "e288a24a248f4a9a0ff4fb5d96b66721", name: "canvas-toBlob.js" },
                    { bytes: 540, md5: "54cc4bdadbdb0f7b4af6afddc0ed2c50", name: "clip.js" }, { bytes: 1262, md5: "f34507141673779b20f4e4890d04c204", name: "clip_nick.js" }, { bytes: 342950, md5: "ece1cb020606fc500d86565772657b95", name: "cocoon.js" }, { bytes: 2975, md5: "ac3159cc365ed87daf53d2d0f55d9bc6", name: "FileSaver.js" }, { bytes: 4630, md5: "fa4db372d7d948a4842e386347e3882a", name: "nicksdk.min.js" }, { bytes: 14195, md5: "9c1918bde89ba940ca972e1bea344fd7", name: "nickshareoverlay.js" }, { bytes: 4272, md5: "fc5776259a3b25b9d2ed1584452a5b95", name: "shareoverlay.js" },
                    { bytes: 2146, md5: "72ffb2de17eb8edf2ad5f4707e0ac85e", name: "wm_screenshot.js" }, { bytes: 7905, md5: "0ce8aee91d974a598eaeccdd58dab246", name: "wm_share.js" }
                ],
                avatar_builder_universal: [{ bytes: 6226, md5: "8e88a6fdc4d417520faba26254ee3d67", name: "avatar_builder_universal_0.atlas" }, { bytes: 743265, md5: "f7559567ea7d15b12ee7aaefb10d18ad", name: "avatar_builder_universal_0.png" }, { bytes: 193, md5: "6bb2c3e2eac3c9b55bc35d1036f1097a", name: "avatar_builder_universal_1.atlas" }, {
                    bytes: 548869,
                    md5: "c18bcb5d8580244ea2116ea16bad0136",
                    name: "avatar_builder_universal_1.png"
                }, { bytes: 331, md5: "1e995498454015ff56053fda6cd75a9c", name: "avatar_builder_universal_2.atlas" }, { bytes: 136822, md5: "f72ec4e35e05d0e7e517f5ec8369a746", name: "avatar_builder_universal_2.png" }],
                initial_audio_optional: [{ bytes: 35252, md5: "3903437252786b2e531cece67c5039e7", name: "game.mp3" }, { bytes: 37636, md5: "c0a0335b51b6e23398e352e6a12c81be", name: "game.ogg" }],
                initial_universal: [{ bytes: 85417, md5: "90e9e945faa1c33a9ab942ce5b445f1d", name: "audio/music/hdcc_gameplaymusicv3.mp3" },
                    { bytes: 70308, md5: "6a799b62eaebda6675b4bcf4470d860d", name: "audio/music/hdcc_gameplaymusicv3.ogg" }, { bytes: 16877, md5: "62074eeab74f248ad1cc1d7b5dedf2c0", name: "audio/music/hdcc_splashscreenmusic_endstingerv3.mp3" }, { bytes: 17876, md5: "d2a52c0ecd7a97d25902f5e27a0effa1", name: "audio/music/hdcc_splashscreenmusic_endstingerv3.ogg" }, { bytes: 93422, md5: "39bf75ac32945031ae765fd9dbc64dbb", name: "audio/music/hdcc_splashscreenmusicv3.mp3" }, { bytes: 87123, md5: "88d836a18d5572108bec63504401e22c", name: "audio/music/hdcc_splashscreenmusicv3.ogg" },
                    { bytes: 149911, md5: "6aa53d88e5ab738af4d1ef22e0ad394a", name: "audio/music/ncc_menu_selection_musicloopv3.mp3" }, { bytes: 164799, md5: "396e9d52eab7408f590c2be606cf6bbc", name: "audio/music/ncc_menu_selection_musicloopv3.ogg" }, { bytes: 9933, md5: "4002575b2369bd5419abc16731e07b8c", name: "audio/music/ncc_theme_endstingerv1.mp3" }, { bytes: 10568, md5: "1bd1714d35cfd2c232d29cc24c90a87e", name: "audio/music/ncc_theme_endstingerv1.ogg" }, { bytes: 278078, md5: "e6af5932621c5fe92e4c8afcbeac129d", name: "audio/music/ncc_theme_musicloopv1.mp3" },
                    { bytes: 311602, md5: "1480497f4c3c0af36cc80cb515fe40e6", name: "audio/music/ncc_theme_musicloopv1.ogg" }, { bytes: 1553, md5: "6b0baf8c7eb7790dc3b4eca2cd521603", name: "audio/sfx/sbcc_sfx_drop.mp3" }, { bytes: 4835, md5: "13d5cf5a40a4f90a01938e17f805045c", name: "audio/sfx/sbcc_sfx_drop.ogg" }, { bytes: 1699, md5: "b97958d8c2294820c8996362118fedc7", name: "audio/sfx/sbcc_sfx_locked_alt_2.mp3" }, { bytes: 4561, md5: "88b176ec0735c27ac8545c5a62412f7d", name: "audio/sfx/sbcc_sfx_locked_alt_2.ogg" }, {
                        bytes: 1785,
                        md5: "f72a15ab24eead1b9ccdfd631b73c030",
                        name: "audio/sfx/sbcc_sfx_play.mp3"
                    }, { bytes: 4490, md5: "b955d07f361cded78ad7ca651647b670", name: "audio/sfx/sbcc_sfx_play.ogg" }, { bytes: 1591, md5: "af06ef682dab2df997d647566a7918d8", name: "audio/sfx/sbcc_sfx_screenchange.mp3" }, { bytes: 4744, md5: "60aa24c8a4de7b9c03149440ef9b9d25", name: "audio/sfx/sbcc_sfx_screenchange.ogg" }, { bytes: 3037, md5: "ced05a9ceb5dd896a49ac8b69fd956ea", name: "audio/sfx/sbcc_sfx_select.mp3" }, { bytes: 5273, md5: "cd67a52c34c3f256da5e83e0a834d1f8", name: "audio/sfx/sbcc_sfx_select.ogg" }, {
                        bytes: 1922,
                        md5: "6867a84f567746f8a4594dcfb30fc993",
                        name: "audio/sfx/sbcc_whoosh.mp3"
                    }, { bytes: 4998, md5: "45412f0af7733117718882de9607cf2a", name: "audio/sfx/sbcc_whoosh.ogg" }, { bytes: 763707, md5: "4e12d71a3833d6f414f51aa6b34539b0", name: "bg_universal.jpg" }, { bytes: 924, md5: "f1d7a03717efe079ecfde762685503bb", name: "black.png" }, { bytes: 1969, md5: "ec9dd7f0b14acc507ffa5ba9ab19783e", name: "initial_universal_0.atlas" }, { bytes: 963129, md5: "06a74608497d21e0b2ce546e26943af5", name: "initial_universal_0.png" }, {
                        bytes: 1787,
                        md5: "828aec6c39ce6cb9903ff9978d159b3a",
                        name: "initial_universal_1.atlas"
                    }, { bytes: 845916, md5: "8c4e3f6233a359661bbf8f66762352d2", name: "initial_universal_1.png" }, { bytes: 1750, md5: "1e9b62024e9ccb8cff131caafaedd5cf", name: "initial_universal_2.atlas" }, { bytes: 495457, md5: "1f64680754da132960eec6ca555d5924", name: "initial_universal_2.png" }, { bytes: 2754, md5: "33a719c9a9656fd9c07dfb702469e265", name: "initial_universal_3.atlas" }, { bytes: 379114, md5: "8e9a011c1a68e3f4bbb0cb671d2b76c2", name: "initial_universal_3.png" }, {
                        bytes: 1986,
                        md5: "23049aa878b528b57783ccbe93c96f3f",
                        name: "initial_universal_4.atlas"
                    }, { bytes: 1060001, md5: "6bc6684941456118d80e33c211b2dfdc", name: "initial_universal_4.png" }, { bytes: 3787, md5: "5e2bfaaa847f401669c7c9a4a327711c", name: "initial_universal_5.atlas" }, { bytes: 564468, md5: "b04adc5297aa569e7cac3402d33f3b8f", name: "initial_universal_5.png" }, { bytes: 263859, md5: "064498bfd300444472e4c3245ca40e01", name: "main_bg.jpg" }, { bytes: 274001, md5: "1bcec25ba6f982643330350b261d8175", name: "menu_bg.jpg" }, { bytes: 176, md5: "3053a5594d4b918cf04fb9b30f75c0c6", name: "text_field.png" },
                    { bytes: 925, md5: "294279a1752c943c8af230f515e46c71", name: "white.png" }
                ],
                comic_creator_universal: [{ bytes: 469, md5: "627bb950e3617675252918fee23ae0f7", name: "comic_backgrounds/comic_background_0.atlas" }, { bytes: 712009, md5: "01a9bf74f23f024e10a8d89cb76c658e", name: "comic_backgrounds/comic_background_0.png" }, { bytes: 595, md5: "db71d15c3841d81ed57acc749f24abfe", name: "comic_backgrounds/comic_background_1.atlas" }, { bytes: 633411, md5: "f5624a58e2891783859ce297296bd0dd", name: "comic_backgrounds/comic_background_1.png" }, {
                        bytes: 594,
                        md5: "44ffd53dae311a563a09369fc156c1f3",
                        name: "comic_backgrounds/comic_background_10.atlas"
                    }, { bytes: 902053, md5: "1ddd39053d3404ac9b6ec0158e5d0d4a", name: "comic_backgrounds/comic_background_10.png" }, { bytes: 596, md5: "802c747b9f676ace6869b101ba3f5016", name: "comic_backgrounds/comic_background_11.atlas" }, { bytes: 905615, md5: "1049f45891eb6e2509a95c6381edfa3d", name: "comic_backgrounds/comic_background_11.png" }, { bytes: 596, md5: "4d3b912be44688fdde64b08a4ed2ff76", name: "comic_backgrounds/comic_background_12.atlas" },
                    { bytes: 861235, md5: "6c4e6c81e24f62faa079790b8cc95ce3", name: "comic_backgrounds/comic_background_12.png" }, { bytes: 596, md5: "16cbeaada92b6f4e738413869bdb9565", name: "comic_backgrounds/comic_background_13.atlas" }, { bytes: 674552, md5: "8524f4879bb0bef336673d6c50d08697", name: "comic_backgrounds/comic_background_13.png" }, { bytes: 595, md5: "ba7ae5c98ba6ea877f5dae9dbc3132c5", name: "comic_backgrounds/comic_background_14.atlas" }, { bytes: 769728, md5: "bb8c0102f852dbe9532e907fe9bdaf00", name: "comic_backgrounds/comic_background_14.png" },
                    { bytes: 594, md5: "98d98613df68ad1e9a618539870f96e4", name: "comic_backgrounds/comic_background_15.atlas" }, { bytes: 708865, md5: "718055f7084813cb1ddd000d3f24a6bd", name: "comic_backgrounds/comic_background_15.png" }, { bytes: 592, md5: "4b465c5afc60b5864c76e1f8ad0edc82", name: "comic_backgrounds/comic_background_16.atlas" }, { bytes: 724658, md5: "d24bfbf65f8a54cd63240975f38ddfec", name: "comic_backgrounds/comic_background_16.png" }, { bytes: 592, md5: "dd269f10d3ddeb4c9222ac350006a9a5", name: "comic_backgrounds/comic_background_17.atlas" },
                    { bytes: 792006, md5: "4b5afe26372256d6898d9d5c3e2e3e27", name: "comic_backgrounds/comic_background_17.png" }, { bytes: 592, md5: "191fef587d689bb32929a35d2789cde7", name: "comic_backgrounds/comic_background_18.atlas" }, { bytes: 984699, md5: "22fc6828d3f6527f5760dd2c1bb13af6", name: "comic_backgrounds/comic_background_18.png" }, { bytes: 592, md5: "9fd5828ff8b4be7a77d9e4a5fcecfa0e", name: "comic_backgrounds/comic_background_19.atlas" }, { bytes: 869011, md5: "48ca758b2ebb7032e8be3291d319f6a3", name: "comic_backgrounds/comic_background_19.png" },
                    { bytes: 595, md5: "5dffc134809a6335968cb5f3ef00eb0e", name: "comic_backgrounds/comic_background_2.atlas" }, { bytes: 760083, md5: "300bcbc64679eae256e334bfe9600b62", name: "comic_backgrounds/comic_background_2.png" }, { bytes: 592, md5: "d898bc3f6b76d3b45460a4c30bebe978", name: "comic_backgrounds/comic_background_20.atlas" }, { bytes: 815211, md5: "7c65202b75255bcabe77291e1eabc12c", name: "comic_backgrounds/comic_background_20.png" }, { bytes: 592, md5: "0921c51cebe08087ec723d339d76cc31", name: "comic_backgrounds/comic_background_21.atlas" },
                    { bytes: 810284, md5: "9cdf112354383575dda709279a729224", name: "comic_backgrounds/comic_background_21.png" }, { bytes: 718, md5: "f8cb7c083d3583c9d4c05b9bc5952955", name: "comic_backgrounds/comic_background_22.atlas" }, { bytes: 1168457, md5: "2a07681f0d127bd0883a968fddc6d221", name: "comic_backgrounds/comic_background_22.png" }, { bytes: 591, md5: "d322bffaceb99d3d89633b8619a16fa6", name: "comic_backgrounds/comic_background_23.atlas" }, { bytes: 699158, md5: "6f3cb8f679688259c68c806d712ae9f4", name: "comic_backgrounds/comic_background_23.png" },
                    { bytes: 595, md5: "390246c8505cf2144f869226ed3b76dd", name: "comic_backgrounds/comic_background_3.atlas" }, { bytes: 746762, md5: "c2f885562db4699e5abc2bef898b3ad4", name: "comic_backgrounds/comic_background_3.png" }, { bytes: 595, md5: "2113819ec25dd4bf4c74bcb52ad25e30", name: "comic_backgrounds/comic_background_4.atlas" }, { bytes: 725040, md5: "70d014a6050b51c4c3f2b7932bc2139b", name: "comic_backgrounds/comic_background_4.png" }, { bytes: 595, md5: "68f9e5187ee80bb37dbd87041883e75c", name: "comic_backgrounds/comic_background_5.atlas" },
                    { bytes: 672352, md5: "0cb10beb074f27c8cd69b54925ece317", name: "comic_backgrounds/comic_background_5.png" }, { bytes: 595, md5: "b95df167f28d3ca74a6590e05b9e3eb3", name: "comic_backgrounds/comic_background_6.atlas" }, { bytes: 793848, md5: "0bf218f95cad4c988e29a87c28cd456d", name: "comic_backgrounds/comic_background_6.png" }, { bytes: 595, md5: "bc57a053659f6b7ae69e381ea7ff8044", name: "comic_backgrounds/comic_background_7.atlas" }, { bytes: 921388, md5: "e1351688caf31329466439bd21272c63", name: "comic_backgrounds/comic_background_7.png" },
                    { bytes: 594, md5: "837631e47916889541ab018a024f638b", name: "comic_backgrounds/comic_background_8.atlas" }, { bytes: 918348, md5: "31022783ee91599726d4583499ffb692", name: "comic_backgrounds/comic_background_8.png" }, { bytes: 594, md5: "749491f6832768ad20a59ac0e1179740", name: "comic_backgrounds/comic_background_9.atlas" }, { bytes: 912157, md5: "c9816cae4e5df2b04a218e05c44dd407", name: "comic_backgrounds/comic_background_9.png" }, { bytes: 9702, md5: "39a8a5b84757e98737d20688b4e09861", name: "frames/comic_panel_back_large.png" }, {
                        bytes: 4593,
                        md5: "3e77e272f0456f62f1860a987f77a8a6",
                        name: "frames/comic_panel_back_large_glow.png"
                    }, { bytes: 5157, md5: "25d130c9be85a195e7c853aac937dce5", name: "frames/comic_panel_back_medium.png" }, { bytes: 3640, md5: "996ff940835a66e239cdc67ff18a28ee", name: "frames/comic_panel_back_medium_glow.png" }, { bytes: 4355, md5: "f363a2a9c978a8400cd60dcfff2552bc", name: "frames/comic_panel_back_mini.png" }, { bytes: 3290, md5: "dd86e7f8eb3ee729ddca484cac71b966", name: "frames/comic_panel_back_mini_glow.png" }, {
                        bytes: 4554,
                        md5: "14cccf80e40a8ac7b5422ffbf9757d4a",
                        name: "frames/comic_panel_back_small.png"
                    }, { bytes: 3556, md5: "1de36ec67dd6fac02243f54f4238b2f1", name: "frames/comic_panel_back_small_glow.png" }, { bytes: 9196, md5: "4e5be756207884f752e909193a17344a", name: "frames/comic_panel_frame_large.png" }, { bytes: 22511, md5: "8803011514a110098db036813d3e8c05", name: "frames/comic_panel_frame_medium.png" }, { bytes: 14554, md5: "ef1fa238f398189cba3b096b98485681", name: "frames/comic_panel_frame_mini.png" }, { bytes: 18093, md5: "ce356bd1551d0a467e685aefd9b36dce", name: "frames/comic_panel_frame_small.png" },
                    { bytes: 2427, md5: "1aaf1a3c785f5af6cedda99cb3389fa7", name: "frames/hd_comic_panel_frame_large.png" }, { bytes: 1539, md5: "5efa5085877e74d3ea39f81d2a2d8ca0", name: "frames/hd_comic_panel_frame_medium.png" }, { bytes: 1379, md5: "af5c6b79674c4d2574ad982193094925", name: "frames/hd_comic_panel_frame_mini.png" }, { bytes: 1530, md5: "3f2f36459ab6d515e8d81b6ec094feff", name: "frames/hd_comic_panel_frame_small.png" }, { bytes: 3891, md5: "124b86933188221a72abab99f3866155", name: "frames/large_blank.jpg" }, {
                        bytes: 1919,
                        md5: "7d07ef3164289f699dc7a7926fa11507",
                        name: "frames/medium_blank.jpg"
                    }, { bytes: 1469, md5: "a225f3ba961ffce1d4f140d52d89030e", name: "frames/mini_blank.jpg" }, { bytes: 1664, md5: "997bbdc9c7ac03f50c5bd1202f024608", name: "frames/small_blank.jpg" }
                ],
                bootstrap: [{ bytes: 729, md5: "d97b4f34eb226dde41c0849a4b494446", name: "audio/silent.mp3" }, { bytes: 3909, md5: "64eff81fa3ddb67aff9d88d605b53175", name: "audio/silent.ogg" }, { bytes: 1128, md5: "515d217f30a2e891a7dc1594e5818f8d", name: "config/config.xml" }, { bytes: 1896, md5: "e924dbfc8b331f5365f11f1f8566f918", name: "config/config_loading.xml" },
                    { bytes: 615038, md5: "25066df02b947054e98dc27f16110e7b", name: "ui/splash/splash.jpg" }
                ],
                avatar_spine: [{ bytes: 18729, md5: "8f75847bdbe716b89348d5502c40a37b", name: "HDCC_avatar_boy.atlas" }, { bytes: 14271, md5: "a3ecb61d6739192ce7e8ee050c2ec6f8", name: "HDCC_avatar_boy.json" }, { bytes: 779760, md5: "116154e0c9f5ed50370d2a85295fe41c", name: "HDCC_avatar_boy.png" }, { bytes: 88572, md5: "36d559d4497d39b0aea176f31b013147", name: "HDCC_avatar_boy2.png" }, { bytes: 18761, md5: "028d4be410fbaeac0405137c44a6da1b", name: "HDCC_avatar_girl.atlas" },
                    { bytes: 14329, md5: "f2f496e70f1f999f0a948c34126b5418", name: "HDCC_avatar_girl.json" }, { bytes: 777971, md5: "5bcafd04808c0e68c6fad3026573ce15", name: "HDCC_avatar_girl.png" }, { bytes: 86775, md5: "855ef11dc078476df3d6de6c660b8028", name: "HDCC_avatar_girl2.png" }
                ],
                fonts_ru: [{ bytes: 54427, md5: "e594059ffbb713e138b7b63901c575e7", name: "font.fnt" }, { bytes: 534238, md5: "b8516bf94d1e1bdc0913940a5c8dc874", name: "font.png" }, { bytes: 189732, md5: "e16ba6c25f3f1f93a77b10baa267905f", name: "font_black.fnt" }, {
                    bytes: 210331,
                    md5: "8ca21f2b024ca50f5418e7a27422dd61",
                    name: "font_black.png"
                }, { bytes: 189733, md5: "604ac93d371f877e39e01a1b7140bb43", name: "font_white.fnt" }, { bytes: 421081, md5: "a8ca1bbda3794eae200a4d9a17299c35", name: "font_white.png" }, { bytes: 84390, md5: "60c776d30da4cecd6549e4a9d18a51e6", name: "lh_comic_black.fnt" }, { bytes: 65494, md5: "0609bc875063fb52435a9307b4f38b91", name: "lh_comic_black.png" }, { bytes: 119074, md5: "3b9e5d26ad598bf176377166b674b11d", name: "translation.xml" }],
                fonts_la: [{ bytes: 43774, md5: "7b84645400ecece59d76be44a8f95722", name: "font.fnt" }, {
                        bytes: 397652,
                        md5: "794e6cfd70964c1c59e8ac536072443b",
                        name: "font.png"
                    }, { bytes: 173264, md5: "c5e5b46bda7d7fd662737b0376e0e508", name: "font_black.fnt" }, { bytes: 155927, md5: "804acfca0e40d13ef4e55d5981773f78", name: "font_black.png" }, { bytes: 173264, md5: "24d365c3cf543e41ee1b0e168fce544f", name: "font_white.fnt" }, { bytes: 305725, md5: "122e642c0fa00b9d4567aec09f680520", name: "font_white.png" }, { bytes: 74556, md5: "11460bd5ab59a620f49e11785374ea79", name: "lh_comic_black.fnt" }, { bytes: 48687, md5: "a4e6251e0458dbfbb503682a68ea4aee", name: "lh_comic_black.png" },
                    { bytes: 119074, md5: "3b9e5d26ad598bf176377166b674b11d", name: "translation.xml" }
                ],
                fonts_kr: [{ bytes: 43774, md5: "7b84645400ecece59d76be44a8f95722", name: "font.fnt" }, { bytes: 397652, md5: "794e6cfd70964c1c59e8ac536072443b", name: "font.png" }, { bytes: 74556, md5: "11460bd5ab59a620f49e11785374ea79", name: "lh_comic_black.fnt" }, { bytes: 48687, md5: "a4e6251e0458dbfbb503682a68ea4aee", name: "lh_comic_black.png" }, { bytes: 119074, md5: "3b9e5d26ad598bf176377166b674b11d", name: "translation.xml" }],
                fonts_jp: [{
                    bytes: 43774,
                    md5: "7b84645400ecece59d76be44a8f95722",
                    name: "font.fnt"
                }, { bytes: 397652, md5: "794e6cfd70964c1c59e8ac536072443b", name: "font.png" }, { bytes: 74556, md5: "11460bd5ab59a620f49e11785374ea79", name: "lh_comic_black.fnt" }, { bytes: 48687, md5: "a4e6251e0458dbfbb503682a68ea4aee", name: "lh_comic_black.png" }, { bytes: 119074, md5: "3b9e5d26ad598bf176377166b674b11d", name: "translation.xml" }],
                fonts_en: [{ bytes: 27760, md5: "6e46afc91cf2225c9f444a850c239cfa", name: "font.fnt" }, { bytes: 270242, md5: "12994e8c5de5d6114c09ba2e11f1cbe8", name: "font.png" }, {
                    bytes: 12025,
                    md5: "8123aae96b39dafe26854a100d0e60f9",
                    name: "font_black.fnt"
                }, { bytes: 56463, md5: "a5220faf3efe16ee18d9b1772fb23db4", name: "font_black.png" }, { bytes: 12025, md5: "93fdf4f69ff611cf4165967dd6ee6a99", name: "font_white.fnt" }, { bytes: 104506, md5: "37fbc46b6de524cc8f12ba60ae5b446e", name: "font_white.png" }, { bytes: 74556, md5: "11460bd5ab59a620f49e11785374ea79", name: "lh_comic_black.fnt" }, { bytes: 48687, md5: "a4e6251e0458dbfbb503682a68ea4aee", name: "lh_comic_black.png" }, { bytes: 116062, md5: "6be396c29443c8f96d1af24cc633012f", name: "translation.xml" }],
                fonts_cn: [{
                    bytes: 43774,
                    md5: "7b84645400ecece59d76be44a8f95722",
                    name: "font.fnt"
                }, { bytes: 397652, md5: "794e6cfd70964c1c59e8ac536072443b", name: "font.png" }, { bytes: 74556, md5: "11460bd5ab59a620f49e11785374ea79", name: "lh_comic_black.fnt" }, { bytes: 48687, md5: "a4e6251e0458dbfbb503682a68ea4aee", name: "lh_comic_black.png" }, { bytes: 119074, md5: "3b9e5d26ad598bf176377166b674b11d", name: "translation.xml" }],
                temp: []
            }]
        }
    };
    pb._supportsCrossOrigin = function() {
        var a;
        a = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
        a || null;
        return a
    }();
    dc.NEWLINE = new te(10);
    Ab._sharedEvent = new Pf;
    jb._sharedEvent = new Qf;
    Ua._sharedEvent = new Rf;
    Mc.CANVAS_TEXTURES = (new v("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    ka._mediaRefCount = 0;
    ka._detectBlobSupport = !0;
    Z.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    Z.SHOULD_HIDE_MOBILE_BROWSER = window.top == window && (new v("Mobile(/.*)? Safari", "")).match(window.navigator.userAgent);
    ga._detectSupport = !0;
    Kb.BASE_URL = "";
    zb.USE_CACHE = !1;
    zb.USE_ENUM_INDEX = !1;
    zb.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    $a.DEFAULT_RESOLVER = Y;
    $a.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    sb.count = 0;
    Ob.escapes = function() { var a = new G;
        a.set("lt", "<");
        a.set("gt", ">");
        a.set("amp", "&");
        a.set("quot", '"');
        a.set("apos", "'");
        a.set("nbsp", String.fromCharCode(160)); return a }(this);
    za.main()
})();