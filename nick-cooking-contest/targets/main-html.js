 /** Built with 2DKit, http://2dkit.com */
'use strict';
(function(ei) {
    function p(a, b) {
        function c() {} c.prototype = a; var d = new c,
            e; for (e in b) d[e] = b[e];
        b.toString !== Object.prototype.toString && (d.toString = b.toString); return d }

    function lg(a) { return a instanceof Array ? function() { return I.iter(a) } : "function" == typeof a.iterator ? G(a, a.iterator) : a.iterator }

    function G(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = oi++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var h = {},
        l = function() { return V.__string_rec(this, "") },
        q = function(a, b) { b = b.split("u").join("");
            this.r = RegExp(a, b) };
    h.EReg = q;
    q.__name__ = ["EReg"];
    q.prototype = {
        match: function(a) { this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a; return null != this.r.m },
        matched: function(a) { if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a]; throw new A("EReg::matched"); },
        matchedPos: function() {
            if (null == this.r.m) throw new A("No string matched");
            return { pos: this.r.m.index, len: this.r.m[0].length }
        },
        matchSub: function(a, b, c) { null == c && (c = -1); if (this.r.global) { this.r.lastIndex = b;
                this.r.m = this.r.exec(0 > c ? a : I.substr(a, 0, b + c)); if (b = null != this.r.m) this.r.s = a; return b } if (c = this.match(0 > c ? I.substr(a, b, null) : I.substr(a, b, c))) this.r.s = a, this.r.m.index += b; return c },
        replace: function(a, b) { return a.replace(this.r, b) },
        map: function(a, b) {
            var c = 0,
                d = new lb;
            do {
                if (c >= a.length) break;
                else if (!this.matchSub(a, c)) { d.add(I.substr(a, c, null)); break }
                var e = this.matchedPos();
                d.add(I.substr(a, c, e.pos - c));
                d.add(b(this));
                0 == e.len ? (d.add(I.substr(a, e.pos, 1)), c = e.pos + 1) : c = e.pos + e.len
            } while (this.r.global);
            !this.r.global && 0 < c && c < a.length && d.add(I.substr(a, c, null));
            return d.b
        },
        __class__: q
    };
    var I = function() {};
    h.HxOverrides = I;
    I.__name__ = ["HxOverrides"];
    I.strDate = function(a) {
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
                return b =
                    a.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2]);
            default:
                throw new A("Invalid date format : " + a);
        }
    };
    I.cca = function(a, b) { var c = a.charCodeAt(b); return c != c ? void 0 : c };
    I.substr = function(a, b, c) { if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b); return a.substr(b, c) };
    I.remove = function(a, b) { var c = a.indexOf(b); if (-1 == c) return !1;
        a.splice(c, 1); return !0 };
    I.iter = function(a) {
        return {
            cur: 0,
            arr: a,
            hasNext: function() {
                return this.cur <
                    this.arr.length
            },
            next: function() { return this.arr[this.cur++] }
        }
    };
    var Zb = function() {};
    h.Lambda = Zb;
    Zb.__name__ = ["Lambda"];
    Zb.array = function(a) { var b = []; for (a = lg(a)(); a.hasNext();) { var c = a.next();
            b.push(c) } return b };
    Zb.exists = function(a, b) { for (var c = lg(a)(); c.hasNext();) { var d = c.next(); if (b(d)) return !0 } return !1 };
    Zb.filter = function(a, b) { for (var c = new Ja, d = lg(a)(); d.hasNext();) { var e = d.next();
            b(e) && c.add(e) } return c };
    Zb.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var d = lg(a)(); d.hasNext();) d.next(), c++;
        else
            for (d = lg(a)(); d.hasNext();) { var e = d.next();
                b(e) && c++ }
        return c
    };
    var Ja = function() { this.length = 0 };
    h.List = Ja;
    Ja.__name__ = ["List"];
    Ja.prototype = {
        add: function(a) { a = [a];
            null == this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++ },
        push: function(a) { this.h = a = [a, this.h];
            null == this.q && (this.q = a);
            this.length++ },
        first: function() { return null == this.h ? null : this.h[0] },
        last: function() { return null == this.q ? null : this.q[0] },
        remove: function(a) {
            for (var b = null, c = this.h; null != c;) {
                if (c[0] == a) return null == b ? this.h = c[1] : b[1] =
                    c[1], this.q == c && (this.q = b), this.length--, !0;
                b = c;
                c = c[1]
            }
            return !1
        },
        iterator: function() { return new mg(this.h) },
        __class__: Ja
    };
    var mg = function(a) { this.head = a;
        this.val = null };
    h["_List.ListIterator"] = mg;
    mg.__name__ = ["_List", "ListIterator"];
    mg.prototype = { hasNext: function() { return null != this.head }, next: function() { this.val = this.head[0];
            this.head = this.head[1]; return this.val }, __class__: mg };
    var Jb = function() {};
    h["kit.util.Disposable"] = Jb;
    Jb.__name__ = ["kit", "util", "Disposable"];
    Jb.prototype = { __class__: Jb };
    var U =
        function() { this.$C = null;
            this.$B = 0;
            this.owner = this.next = null };
    h["kit.Component"] = U;
    U.__name__ = ["kit", "Component"];
    U.__interfaces__ = [Jb];
    U.prototype = {
        onAdded: function() {},
        onRemoved: function() { null != this.$C && this.$C.$HG() },
        onStart: function() {},
        onStop: function() {},
        onUpdate: function(a) {},
        onMessage: function(a, b) { if (null != this.$C) { var c = this.$C.$FG; if (null != c && (c = null != Za[a] ? c.getReserved(a) : c.h[a], null != c && null != c.$EH)) return c.emit(b), !0 } return !1 },
        connect0: function(a, b, c) {
            null == c && (c = !1);
            a = a.connect(b,
                c);
            this.registerDisposable(a);
            return a
        },
        connect1: function(a, b, c) { null == c && (c = !1);
            a = a.connect(b, c);
            this.registerDisposable(a); return a },
        connect2: function(a, b, c) { null == c && (c = !1);
            a = a.connect(b, c);
            this.registerDisposable(a); return a },
        registerDisposable: function(a) { null == this.$C && (this.$C = new ng);
            null == this.$C.$GG && (this.$C.$GG = []);
            this.$C.$GG.push(a) },
        dispose: function() { null != this.owner ? this.owner.remove(this) : null != this.$C && this.$C.$HG() },
        get_entitySlot: function() { return -1 },
        $A: function() {},
        __class__: U,
        __properties__: { get_entitySlot: "get_entitySlot" }
    };
    var Pd = function() { U.call(this) };
    h.Main = Pd;
    Pd.__name__ = ["Main"];
    Pd.__super__ = U;
    Pd.prototype = p(U.prototype, {
        get_entitySlot: function() { return 13 },
        onStart: function() {
            this._flagWebAudioUnlocked = !1;
            na.flow.add(G(this, this._onFlowEvent));
            var a = new cd;
            this._worldRoot = new aa;
            var b = new aa;
            this.owner.addChild(this._worldRoot);
            this.owner.addChild(b);
            oa.initMain();
            b.add(M.assets);
            b.add(a);
            b.add(new Qd("Preload"));
            this.owner.yieldForStart();
            b.yieldForStart();
            this._flowStack = [];
            u.prime();
            u.setDelegateUnlockWebAudio(G(this, this._handleWebAudioUnlock));
            n.set_muteAll(!1);
            this._registerInput();
            this._ui = new og(a, M.assets);
            M.load(["bootstrap"], G(this, this._parseConfig));
            this._calculateStageSize();
            z.$KH.$aG.resize.connect(G(this, this._onResize));
            mb.setDelegateOnButtonDown(function(a) { n.playSound("audio/button_click") });
            ba.setBool("paused", !1)
        },
        _handleWebAudioUnlock: function() { this._flagWebAudioUnlocked || (this._flagWebAudioUnlocked = !0, n.playSound("audio/silent")) },
        onUpdate: function(a) {
            oa.update(a);
            for (this._updateCloud(a); 0 < this._flowStack.length;) this._runFlowStack(this._flowStack.shift());
            this._ui.update(a);
            null != this._world && this._world.update(a)
        },
        _updateCloud: function(a) { n.update(a);
            u.update(a);
            ka.update(a) },
        _onFlowEvent: function(a) { this._flowStack.push(a) },
        _runFlowStack: function(a) {
            switch (a[1]) {
                case 0:
                    this._enableInput();
                    n.playMusic("audio/splash_music");
                    this._ui.unwindToScene_screen_ScreenSplash(dd);
                    break;
                case 1:
                    oa.onSplashClose();
                    oa.onSplashPlay();
                    D.sendGameStarted();
                    this._handleWebAudioUnlock();
                    this._ui.unwindToScene_screen_ScreenLoading(wb);
                    break;
                case 2:
                    this._startGame();
                    break;
                case 3:
                    na.flow.dispatch(J.RECIPE_SELECT_OPEN);
                    break;
                case 12:
                    this._unpauseGameplay();
                    null != m.get_recipePackName() && (oa.onPlayAgain(), M.unload(m.getRecipeAssetPacks()), n.stopMusic());
                    n.playMusic("menu_music");
                    this._ui.unwindToScene_screen_ScreenRecipeSelect(ed);
                    break;
                case 15:
                    this._ui.unwindToScene_screen_ScreenLoadingMinigame(sc);
                    break;
                case 14:
                    this._world.start();
                    this._ui.unwindToScene_screen_ScreenGameplayHud(fd);
                    D.sendUIInteraction("Start Mission", "Start");
                    break;
                case 4:
                    oa.onPauseEvent();
                    D.sendUIInteraction("Mid Mission", "Pause");
                    this._pauseGameplay();
                    this._ui.pushScene_screen_ScreenGameplayPause(gd);
                    break;
                case 5:
                    oa.onResumeEvent();
                    this._unpauseGameplay();
                    this._ui.popScene();
                    break;
                case 6:
                    D.sendUIInteraction("Pause Screen", "Help");
                    this._ui.pushScene_screen_ScreenGameplayHelp(hd);
                    break;
                case 7:
                    this._ui.popScene();
                    break;
                case 8:
                    D.sendUIInteraction("Pause Screen", "Exit");
                    this._ui.pushScene_screen_ScreenQuitConfirm(id);
                    break;
                case 9:
                    this._ui.popScene();
                    break;
                case 10:
                    this._ui.unwindToScene_screen_ScreenEndGame(jd, G(this, this._stopGame));
                    break;
                case 11:
                    oa.onGameEnd();
                    oa.onPlayAgain();
                    D.sendUIInteraction("End of Match Screen", "Replay");
                    this._unpauseGameplay();
                    this._ui.unwindToScene_screen_ScreenLoading(wb);
                    break;
                default:
                    null
            }
        },
        _registerInput: function() {
            u.registerInput(T.MOVE_LEFT, [g.Left, g.A]);
            u.registerInput(T.MOVE_RIGHT, [g.Right, g.D]);
            u.registerInput(T.MOVE_UP, [g.Up, g.W]);
            u.registerInput(T.MOVE_DOWN, [g.Down, g.S]);
            u.registerInput(T.ATTACK, [g.Z], [ec.ATTACK]);
            u.registerInput(T.JUMP, [g.Space], [ec.JUMP]);
            u.registerInput(T.UI_OK, [g.Space], null, [s.START, s.A]);
            u.registerInput(T.UI_DENY, [g.Escape], null, [s.B]);
            u.registerInput(T.UI_MENU, [g.Escape], null, [s.START])
        },
        _parseConfig: function() {
            oa.onLoadHalf();
            for (var a = "000000", b = !1, c = "en", d = [], e = 0, k = Jh.allConfig; e < k.length;) { var w = k[e];++e;
                d.push(M.getXML(w)) }
            for (e = 0; e < d.length;)
                if (k = d[e], ++e, k.hasNode.resolve("unlockCode") && (a = k.node.resolve("unlockCode").get_innerData()),
                    k.hasNode.resolve("unlockEnabled") && (b = "true" == k.node.resolve("unlockEnabled").get_innerData()), k.hasNode.resolve("enableVO") && ba.setBool("enable_vo", "true" == k.node.resolve("enableVO").get_innerData()), k.hasNode.resolve("achievements") && k.node.resolve("achievements").att.resolve("enabled"), k.hasNode.resolve("localization") && (c = H.string(k.node.resolve("localization").node.resolve("region").get_innerData())), !1 != k.hasNode.resolve("services"))
                    for (k = k.node.resolve("services").nodes.resolve("service").iterator(); null !=
                        k.head;) switch (w = void 0, k.val = k.head[0], k.head = k.head[1], w = k.val, w.att.resolve("type").toString()) {
                        case "deltadna":
                            "true" == w.att.resolve("enabled").toString() && D.init("true" == w.att.resolve("development").toString()) } f.unlockCode = a;
            f.unlockEnabled = b;
            ta.region = c;
            M.load(["fonts_" + c], G(this, this._onLocalizationLoadComplete))
        },
        _onLocalizationLoadComplete: function() { ta.parseLocalization();
            oa.onLoadFinished();
            D.setupPlayer();
            na.flow.dispatch(J.SPLASH_OPEN) },
        _enableInput: function() { u.enabled = !0 },
        _pauseGameplay: function() {
            ba.setBool("paused",
                !0)
        },
        _unpauseGameplay: function() { ba.setBool("paused", !1) },
        _stopGame: function() { oa.onGameEnd();
            null != this._world && (this._world.dispose(), this._world = null) },
        _startGame: function() { oa.onGameStart();
            null != this._world && this._stopGame();
            this._world = new Kb(this._worldRoot) },
        _onResize: function() { this._calculateStageSize();
            na.resizeStage.dispatch() },
        _calculateStageSize: function() { var a = new fb;
            Ta.$yI(a);
            f.setStage(a) },
        __class__: Pd
    });
    Math.__name__ = ["Math"];
    var L = function() {};
    h.Reflect = L;
    L.__name__ = ["Reflect"];
    L.field = function(a, b) { try { return a[b] } catch (c) { return c instanceof A && (c = c.val), null } };
    L.setField = function(a, b, c) { a[b] = c };
    L.getProperty = function(a, b) { var c; return null == a ? null : a.__properties__ && (c = a.__properties__["get_" + b]) ? a[c]() : a[b] };
    L.setProperty = function(a, b, c) { var d; if (a.__properties__ && (d = a.__properties__["set_" + b])) a[d](c);
        else a[b] = c };
    L.callMethod = function(a, b, c) { return b.apply(a, c) };
    L.fields = function(a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty,
                d;
            for (d in a) "__id__" != d &&
                "hx__closures__" != d && c.call(a, d) && b.push(d)
        }
        return b
    };
    L.isFunction = function(a) { return "function" == typeof a && !(a.__name__ || a.__ename__) };
    L.compare = function(a, b) { return a == b ? 0 : a > b ? 1 : -1 };
    L.isEnumValue = function(a) { return null != a && null != a.__enum__ };
    L.deleteField = function(a, b) { if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b]; return !0 };
    var H = function() {};
    h.Std = H;
    H.__name__ = ["Std"];
    H.is = function(a, b) { return V.__instanceof(a, b) };
    H.instance = function(a, b) { return a instanceof b ? a : null };
    H.string =
        function(a) { return V.__string_rec(a, "") };
    H["int"] = function(a) { return a | 0 };
    H.parseInt = function(a) { var b = parseInt(a, 10);
        0 != b || 120 != I.cca(a, 1) && 88 != I.cca(a, 1) || (b = parseInt(a)); return isNaN(b) ? null : b };
    H.parseFloat = function(a) { return parseFloat(a) };
    var lb = function() { this.b = "" };
    h.StringBuf = lb;
    lb.__name__ = ["StringBuf"];
    lb.prototype = { add: function(a) { this.b += H.string(a) }, addSub: function(a, b, c) { this.b = null == c ? this.b + I.substr(a, b, null) : this.b + I.substr(a, b, c) }, __class__: lb };
    var Z = function() {};
    h.StringTools = Z;
    Z.__name__ = ["StringTools"];
    Z.htmlEscape = function(a, b) { a = a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;"); return b ? a.split('"').join("&quot;").split("'").join("&#039;") : a };
    Z.startsWith = function(a, b) { return a.length >= b.length && I.substr(a, 0, b.length) == b };
    Z.isSpace = function(a, b) { var c = I.cca(a, b); return 8 < c && 14 > c || 32 == c };
    Z.ltrim = function(a) { for (var b = a.length, c = 0; c < b && Z.isSpace(a, c);) c++; return 0 < c ? I.substr(a, c, b - c) : a };
    Z.rtrim = function(a) {
        for (var b = a.length, c = 0; c < b && Z.isSpace(a,
                b - c - 1);) c++;
        return 0 < c ? I.substr(a, 0, b - c) : a
    };
    Z.trim = function(a) { return Z.ltrim(Z.rtrim(a)) };
    Z.lpad = function(a, b, c) { if (0 >= b.length) return a; for (; a.length < c;) a = b + a; return a };
    Z.replace = function(a, b, c) { return a.split(b).join(c) };
    Z.fastCodeAt = function(a, b) { return a.charCodeAt(b) };
    var da = h.ValueType = { __ename__: ["ValueType"], __constructs__: "TNull TInt TFloat TBool TObject TFunction TClass TEnum TUnknown".split(" ") };
    da.TNull = ["TNull", 0];
    da.TNull.toString = l;
    da.TNull.__enum__ = da;
    da.TInt = ["TInt", 1];
    da.TInt.toString =
        l;
    da.TInt.__enum__ = da;
    da.TFloat = ["TFloat", 2];
    da.TFloat.toString = l;
    da.TFloat.__enum__ = da;
    da.TBool = ["TBool", 3];
    da.TBool.toString = l;
    da.TBool.__enum__ = da;
    da.TObject = ["TObject", 4];
    da.TObject.toString = l;
    da.TObject.__enum__ = da;
    da.TFunction = ["TFunction", 5];
    da.TFunction.toString = l;
    da.TFunction.__enum__ = da;
    da.TClass = function(a) { a = ["TClass", 6, a];
        a.__enum__ = da;
        a.toString = l; return a };
    da.TEnum = function(a) { a = ["TEnum", 7, a];
        a.__enum__ = da;
        a.toString = l; return a };
    da.TUnknown = ["TUnknown", 8];
    da.TUnknown.toString = l;
    da.TUnknown.__enum__ =
        da;
    var ga = function() {};
    h.Type = ga;
    ga.__name__ = ["Type"];
    ga.getClassName = function(a) { a = a.__name__; return null == a ? null : a.join(".") };
    ga.getEnumName = function(a) { return a.__ename__.join(".") };
    ga.resolveClass = function(a) { a = h[a]; return null != a && a.__name__ ? a : null };
    ga.resolveEnum = function(a) { a = h[a]; return null != a && a.__ename__ ? a : null };
    ga.createInstance = function(a, b) {
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
                throw new A("Too many arguments");
        }
    };
    ga.createEmptyInstance = function(a) {
        function b() {} b.prototype = a.prototype; return new b };
    ga.createEnum = function(a, b, c) {
        var d = L.field(a, b);
        if (null == d) throw new A("No such constructor " + b);
        if (L.isFunction(d)) {
            if (null == c) throw new A("Constructor " +
                b + " need parameters");
            return L.callMethod(a, d, c)
        }
        if (null != c && 0 != c.length) throw new A("Constructor " + b + " does not need parameters");
        return d
    };
    ga.getEnumConstructs = function(a) { return a.__constructs__.slice() };
    ga["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return da.TBool;
            case "string":
                return da.TClass(String);
            case "number":
                return Math.ceil(a) == a % 2147483648 ? da.TInt : da.TFloat;
            case "object":
                if (null == a) return da.TNull;
                var b = a.__enum__;
                if (null != b) return da.TEnum(b);
                a = V.getClass(a);
                return null !=
                    a ? da.TClass(a) : da.TObject;
            case "function":
                return a.__name__ || a.__ename__ ? da.TObject : da.TFunction;
            case "undefined":
                return da.TNull;
            default:
                return da.TUnknown
        }
    };
    var B = function(a) { this.nodeType = a;
        this.children = [];
        this.attributeMap = new W };
    h.Xml = B;
    B.__name__ = ["Xml"];
    B.parse = function(a) { return fc.parse(a) };
    B.createElement = function(a) { var b = new B(B.Element); if (b.nodeType != B.Element) throw new A("Bad node type, expected Element but found " + b.nodeType);
        b.nodeName = a; return b };
    B.createPCData = function(a) {
        var b =
            new B(B.PCData);
        if (b.nodeType == B.Document || b.nodeType == B.Element) throw new A("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a;
        return b
    };
    B.createCData = function(a) { var b = new B(B.CData); if (b.nodeType == B.Document || b.nodeType == B.Element) throw new A("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a; return b };
    B.createComment = function(a) { var b = new B(B.Comment); if (b.nodeType == B.Document || b.nodeType == B.Element) throw new A("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a; return b };
    B.createDocType =
        function(a) { var b = new B(B.DocType); if (b.nodeType == B.Document || b.nodeType == B.Element) throw new A("Bad node type, unexpected " + b.nodeType);
            b.nodeValue = a; return b };
    B.createProcessingInstruction = function(a) { var b = new B(B.ProcessingInstruction); if (b.nodeType == B.Document || b.nodeType == B.Element) throw new A("Bad node type, unexpected " + b.nodeType);
        b.nodeValue = a; return b };
    B.createDocument = function() { return new B(B.Document) };
    B.prototype = {
        get_nodeName: function() {
            if (this.nodeType != B.Element) throw new A("Bad node type, expected Element but found " +
                this.nodeType);
            return this.nodeName
        },
        get: function(a) { if (this.nodeType != B.Element) throw new A("Bad node type, expected Element but found " + this.nodeType); return this.attributeMap.get(a) },
        set: function(a, b) { if (this.nodeType != B.Element) throw new A("Bad node type, expected Element but found " + this.nodeType);
            this.attributeMap.set(a, b) },
        exists: function(a) { if (this.nodeType != B.Element) throw new A("Bad node type, expected Element but found " + this.nodeType); return this.attributeMap.exists(a) },
        attributes: function() {
            if (this.nodeType !=
                B.Element) throw new A("Bad node type, expected Element but found " + this.nodeType);
            return this.attributeMap.keys()
        },
        iterator: function() { if (this.nodeType != B.Document && this.nodeType != B.Element) throw new A("Bad node type, expected Element or Document but found " + this.nodeType); return I.iter(this.children) },
        elements: function() {
            if (this.nodeType != B.Document && this.nodeType != B.Element) throw new A("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var a = [], b = 0, c = this.children; b < c.length;) {
                var d =
                    c[b];
                ++b;
                d.nodeType == B.Element && a.push(d)
            }
            return I.iter(a)
        },
        elementsNamed: function(a) { if (this.nodeType != B.Document && this.nodeType != B.Element) throw new A("Bad node type, expected Element or Document but found " + this.nodeType); for (var b = [], c = 0, d = this.children; c < d.length;) { var e = d[c];++c; var k; if (k = e.nodeType == B.Element) { k = void 0; if (e.nodeType != B.Element) throw new A("Bad node type, expected Element but found " + e.nodeType);
                    k = e.nodeName;
                    k = k == a } k && b.push(e) } return I.iter(b) },
        firstElement: function() {
            if (this.nodeType !=
                B.Document && this.nodeType != B.Element) throw new A("Bad node type, expected Element or Document but found " + this.nodeType);
            for (var a = 0, b = this.children; a < b.length;) { var c = b[a];++a; if (c.nodeType == B.Element) return c }
            return null
        },
        addChild: function(a) { if (this.nodeType != B.Document && this.nodeType != B.Element) throw new A("Bad node type, expected Element or Document but found " + this.nodeType);
            null != a.parent && a.parent.removeChild(a);
            this.children.push(a);
            a.parent = this },
        removeChild: function(a) {
            if (this.nodeType !=
                B.Document && this.nodeType != B.Element) throw new A("Bad node type, expected Element or Document but found " + this.nodeType);
            return I.remove(this.children, a) ? (a.parent = null, !0) : !1
        },
        __class__: B,
        __properties__: { get_nodeName: "get_nodeName" }
    };
    var f = function() {};
    h["app.ConstantsApp"] = f;
    f.__name__ = ["app", "ConstantsApp"];
    f.__properties__ = { get_STAGE_CENTER_Y: "get_STAGE_CENTER_Y", get_STAGE_CENTER_X: "get_STAGE_CENTER_X", get_STAGE_HEIGHT: "get_STAGE_HEIGHT", get_STAGE_WIDTH: "get_STAGE_WIDTH" };
    f.setStage = function(a) {
        f.STAGE_ORIGIN_X =
            a.x;
        f.STAGE_ORIGIN_Y = a.y
    };
    f.get_STAGE_WIDTH = function() { return 1024 };
    f.get_STAGE_HEIGHT = function() { return 660 };
    f.get_STAGE_CENTER_X = function() { return f.get_STAGE_WIDTH() / 2 };
    f.get_STAGE_CENTER_Y = function() { return f.get_STAGE_HEIGHT() / 2 };
    var Ka = {};
    h["workinman.event._Event1.Event1_Impl_"] = Ka;
    Ka.__name__ = ["workinman", "event", "_Event1", "Event1_Impl_"];
    Ka._new = function() { return new pg };
    var pg = function() { this._list = [] };
    h["workinman.event._Event1.Event1Base"] = pg;
    pg.__name__ = ["workinman", "event", "_Event1",
        "Event1Base"
    ];
    pg.prototype = { add: function(a) { 0 <= this._list.indexOf(a) || this._list.push(a) }, remove: function(a) { for (var b = this._list.length; 0 < b--;)
                if (this._list[b] == a) { I.remove(this._list, a); break } }, dispatch: function(a) { for (var b = 0, c = this._list; b < c.length;) { var d = c[b];++b;
                d(a) } }, dispose: function() { for (; 0 < this._list.length;) this._list.pop();
            this._list = null }, __class__: pg };
    var gc = {};
    h["workinman.event._Event0.Event0_Impl_"] = gc;
    gc.__name__ = ["workinman", "event", "_Event0", "Event0_Impl_"];
    gc._new = function() { return new qg };
    var qg = function() { this._list = [] };
    h["workinman.event._Event0.Event0Base"] = qg;
    qg.__name__ = ["workinman", "event", "_Event0", "Event0Base"];
    qg.prototype = { add: function(a) { 0 <= this._list.indexOf(a) || this._list.push(a) }, remove: function(a) { for (var b = this._list.length; 0 < b--;)
                if (this._list[b] == a) { I.remove(this._list, a); break } }, dispatch: function() { for (var a = 0, b = this._list; a < b.length;) { var c = b[a];++a;
                c() } }, dispose: function() { for (; 0 < this._list.length;) this._list.pop();
            this._list = null }, __class__: qg };
    var na = function() {};
    h["app.ConstantsEvent"] = na;
    na.__name__ = ["app", "ConstantsEvent"];
    var J = h["app.FLOW"] = { __ename__: ["app", "FLOW"], __constructs__: "SPLASH_OPEN SPLASH_PLAY WORLD_BEGIN_LOAD WORLD_INIT_COMPLETE PAUSE_OPEN PAUSE_CLOSE HELP_OPEN HELP_CLOSE QUIT_CONFIRM_OPEN QUIT_CONFIRM_CLOSE END_GAME_OPEN END_GAME_NEW_GAME RECIPE_SELECT_OPEN RECIPE_SELECT_CLOSE COOKING_RECIPE_START COOKING_RECIPE_LOAD".split(" ") };
    J.SPLASH_OPEN = ["SPLASH_OPEN", 0];
    J.SPLASH_OPEN.toString = l;
    J.SPLASH_OPEN.__enum__ = J;
    J.SPLASH_PLAY = ["SPLASH_PLAY",
        1
    ];
    J.SPLASH_PLAY.toString = l;
    J.SPLASH_PLAY.__enum__ = J;
    J.WORLD_BEGIN_LOAD = ["WORLD_BEGIN_LOAD", 2];
    J.WORLD_BEGIN_LOAD.toString = l;
    J.WORLD_BEGIN_LOAD.__enum__ = J;
    J.WORLD_INIT_COMPLETE = ["WORLD_INIT_COMPLETE", 3];
    J.WORLD_INIT_COMPLETE.toString = l;
    J.WORLD_INIT_COMPLETE.__enum__ = J;
    J.PAUSE_OPEN = ["PAUSE_OPEN", 4];
    J.PAUSE_OPEN.toString = l;
    J.PAUSE_OPEN.__enum__ = J;
    J.PAUSE_CLOSE = ["PAUSE_CLOSE", 5];
    J.PAUSE_CLOSE.toString = l;
    J.PAUSE_CLOSE.__enum__ = J;
    J.HELP_OPEN = ["HELP_OPEN", 6];
    J.HELP_OPEN.toString = l;
    J.HELP_OPEN.__enum__ =
        J;
    J.HELP_CLOSE = ["HELP_CLOSE", 7];
    J.HELP_CLOSE.toString = l;
    J.HELP_CLOSE.__enum__ = J;
    J.QUIT_CONFIRM_OPEN = ["QUIT_CONFIRM_OPEN", 8];
    J.QUIT_CONFIRM_OPEN.toString = l;
    J.QUIT_CONFIRM_OPEN.__enum__ = J;
    J.QUIT_CONFIRM_CLOSE = ["QUIT_CONFIRM_CLOSE", 9];
    J.QUIT_CONFIRM_CLOSE.toString = l;
    J.QUIT_CONFIRM_CLOSE.__enum__ = J;
    J.END_GAME_OPEN = ["END_GAME_OPEN", 10];
    J.END_GAME_OPEN.toString = l;
    J.END_GAME_OPEN.__enum__ = J;
    J.END_GAME_NEW_GAME = ["END_GAME_NEW_GAME", 11];
    J.END_GAME_NEW_GAME.toString = l;
    J.END_GAME_NEW_GAME.__enum__ = J;
    J.RECIPE_SELECT_OPEN = ["RECIPE_SELECT_OPEN", 12];
    J.RECIPE_SELECT_OPEN.toString = l;
    J.RECIPE_SELECT_OPEN.__enum__ = J;
    J.RECIPE_SELECT_CLOSE = ["RECIPE_SELECT_CLOSE", 13];
    J.RECIPE_SELECT_CLOSE.toString = l;
    J.RECIPE_SELECT_CLOSE.__enum__ = J;
    J.COOKING_RECIPE_START = ["COOKING_RECIPE_START", 14];
    J.COOKING_RECIPE_START.toString = l;
    J.COOKING_RECIPE_START.__enum__ = J;
    J.COOKING_RECIPE_LOAD = ["COOKING_RECIPE_LOAD", 15];
    J.COOKING_RECIPE_LOAD.toString = l;
    J.COOKING_RECIPE_LOAD.__enum__ = J;
    var T = h["app.INPUT_TYPE"] = { __ename__: ["app", "INPUT_TYPE"], __constructs__: "CLICK UI_OK UI_DENY UI_MENU MOVE_UP MOVE_DOWN MOVE_LEFT MOVE_RIGHT JUMP ATTACK POINTER_MOVE".split(" ") };
    T.CLICK = ["CLICK", 0];
    T.CLICK.toString = l;
    T.CLICK.__enum__ = T;
    T.UI_OK = ["UI_OK", 1];
    T.UI_OK.toString = l;
    T.UI_OK.__enum__ = T;
    T.UI_DENY = ["UI_DENY", 2];
    T.UI_DENY.toString = l;
    T.UI_DENY.__enum__ = T;
    T.UI_MENU = ["UI_MENU", 3];
    T.UI_MENU.toString = l;
    T.UI_MENU.__enum__ = T;
    T.MOVE_UP = ["MOVE_UP", 4];
    T.MOVE_UP.toString = l;
    T.MOVE_UP.__enum__ = T;
    T.MOVE_DOWN = ["MOVE_DOWN", 5];
    T.MOVE_DOWN.toString = l;
    T.MOVE_DOWN.__enum__ = T;
    T.MOVE_LEFT = ["MOVE_LEFT", 6];
    T.MOVE_LEFT.toString = l;
    T.MOVE_LEFT.__enum__ = T;
    T.MOVE_RIGHT = ["MOVE_RIGHT", 7];
    T.MOVE_RIGHT.toString =
        l;
    T.MOVE_RIGHT.__enum__ = T;
    T.JUMP = ["JUMP", 8];
    T.JUMP.toString = l;
    T.JUMP.__enum__ = T;
    T.ATTACK = ["ATTACK", 9];
    T.ATTACK.toString = l;
    T.ATTACK.__enum__ = T;
    T.POINTER_MOVE = ["POINTER_MOVE", 10];
    T.POINTER_MOVE.toString = l;
    T.POINTER_MOVE.__enum__ = T;
    var ec = h["app.INPUT_VIRTUAL"] = { __ename__: ["app", "INPUT_VIRTUAL"], __constructs__: ["JUMP", "ATTACK"] };
    ec.JUMP = ["JUMP", 0];
    ec.JUMP.toString = l;
    ec.JUMP.__enum__ = ec;
    ec.ATTACK = ["ATTACK", 1];
    ec.ATTACK.toString = l;
    ec.ATTACK.__enum__ = ec;
    var D = function() {};
    h["app.ServiceDeltaDNA"] = D;
    D.__name__ = ["app", "ServiceDeltaDNA"];
    D.init = function(a) {
        D._flagInitted = !0;
        !1 != D.OPTION_ENABLE_TRACKING && (D._ENVIRONMENT_KEY = a ? "" : "", D._url = "#" + D._ENVIRONMENT_KEY, D._platform = Ec.detectPlatform(), D._nickSDKVersion = "1.1.2", D._sharedObjectId = D._DEFAULT_SHARED_OBJECT_ID, D._sharedObjectData = window.localStorage.getItem(D._sharedObjectId), D._sharedObjectData = null == D._sharedObjectData ? {} : $a.run(D._sharedObjectData),
            D._generateSessionID())
    };
    D.sendEvent = function(a) { D.OPTION_ENABLE_TRACKING && D._flagInitted && D._sendJsonHttp(D._url, D._setupEventData(a)) };
    D.sendBulkEvents = function(a) { if (D.OPTION_ENABLE_TRACKING && D._flagInitted)
            if (1 == a.length) D._sendJsonHttp(D._url, D._setupEventData(a[0]));
            else { for (var b = { eventList: [] }, c = 0; c < a.length;) { var d = a[c];++c;
                    b.eventList.push(D._setupEventData(d)) }(new Rd(D._url + "/bulk")).setHeader("Content-Type", "application/json").setPostData(JSON.stringify(b)).request(!0) } };
    D._setupEventData =
        function(a) { var b = { eventName: a.event, userID: D._offlineUserId, sessionID: D._sessionId, eventTimestamp: D._generateTimeStamp(new Date), eventParams: { platform: D._platform, sdkVersion: D._nickSDKVersion, clientVersion: "1.0.2" } }; if (null != a.params)
                for (var c = 0, d = L.fields(a.params); c < d.length;) { var e = d[c];++c;
                    L.setField(b.eventParams, e, L.field(a.params, e)) }
            return b };
    D._sendJsonHttp = function(a, b) {
        (new Rd(a)).setHeader("Content-Type", "application/json").setPostData(JSON.stringify(b)).request(!0) };
    D.setupPlayer = function() {
        D._flagInitted &&
            (null == D._sharedObjectData.userID || 14 > H.string(D._sharedObjectData.userID).length ? (D._generateOfflineIDs(), D._sharedObjectData.userID = D._offlineUserId, D._sharedObjectData.trackingID = D._offlineTrackingId, window.localStorage.setItem(D._sharedObjectId, xb.run(D._sharedObjectData)), D.sendEvent({ event: "newPlayer" })) : (D._offlineUserId = D._sharedObjectData.userID, D._offlineTrackingId = D._sharedObjectData.trackingID))
    };
    D.sendGameStarted = function() {
        if (D._flagInitted) {
            var a = Ec.detectDeviceInfo();
            D.sendBulkEvents([{
                event: "gameStarted",
                params: { clientVersion: "1.0.2" }
            }, { event: "clientDevice", params: a }])
        }
    };
    D.sendUIInteraction = function(a, b) { D._flagInitted && D.sendEvent({ event: "uiInteraction", params: { UILocation: a, UIName: b, UIType: "Button", UIAction: "Click" } }) };
    D._generateSessionID = function() { for (var a = "", b = 11; - 1 < b;) a += Math.floor(10 * Math.random()), b--;
        D._sessionId = a };
    D._generateOfflineIDs = function() {
        D._offlineUserId = "";
        D._offlineTrackingId = "";
        for (var a = 15; - 1 < a;) {
            if (0.66 > Math.random()) D._offlineUserId += H.string(Math.floor(10 * Math.random()));
            else switch (Math.floor(10 * Math.random())) {
                case 0:
                    D._offlineUserId += "a"; break;
                case 1:
                    D._offlineUserId += "b"; break;
                case 2:
                    D._offlineUserId += "c"; break;
                case 3:
                    D._offlineUserId += "d"; break;
                case 4:
                    D._offlineUserId += "e"; break;
                case 5:
                    D._offlineUserId += "f"; break;
                case 6:
                    D._offlineUserId += "g"; break;
                case 7:
                    D._offlineUserId += "h"; break;
                case 8:
                    D._offlineUserId += "i"; break;
                case 9:
                    D._offlineUserId += "j"; break;
                default:
                    D._offlineUserId += "z" } a--
        }
        D._offlineTrackingId = "";
        for (a = 15; - 1 < a;) D._offlineTrackingId += Math.floor(10 *
            Math.random()), a--
    };
    D._generateTimeStamp = function(a) { return H.string(a.getFullYear()) + "-" + Z.lpad(H.string(a.getMonth() + 1), "0", 2) + "-" + Z.lpad(H.string(a.getDate()), "0", 2) + " " + Z.lpad(H.string(a.getHours()), "0", 2) + ":" + Z.lpad(H.string(a.getMinutes()), "0", 2) + ":" + Z.lpad(H.string(a.getSeconds()), "0", 2) };
    var Ec = function() {};
    h["app._ServiceDeltaDNA.BrowserData"] = Ec;
    Ec.__name__ = ["app", "_ServiceDeltaDNA", "BrowserData"];
    Ec.detectPlatform = function() {
        var a = "UNKNOWN",
            b = window.location.href.toLowerCase(),
            c = window.navigator.userAgent.toLowerCase(),
            d = window.document.referrer.toLowerCase(); - 1 != b.indexOf("t.nick") || -1 != c.indexOf("ipad") || -1 != c.indexOf("tablet") || -1 != c.indexOf("android") && -1 == c.indexOf("mobi") ? a = "NICKWEB_TABLET" : -1 != b.indexOf("m.nick") || -1 != c.indexOf("mobi") ? a = "NICKWEB_MOBILE" : -1 != b.indexOf("www.nick") && (a = "NICKWEB_DESKTOP"); - 1 != c.indexOf("android") && -1 != d.indexOf("http://www.ludei.com") ? a = "ANDROID_APP" : -1 == c.indexOf("ipod") && -1 == c.indexOf("iphone") && -1 == c.indexOf("ipad") || -1 != c.indexOf("safari") || (a = "IOS_APP"); - 1 == b.indexOf(".nick") &&
            (a = "UNKNOWN"); - 1 != b.indexOf("nick.com/games/data/") && (a = "UNKNOWN");
        return a
    };
    Ec.detectDeviceInfo = function() {
        var a = { browserName: "UNKNOWN", deviceType: "UNKNOWN", operatingSystem: "UNKNOWN", operatingSystemVersion: "UNKNOWN", hardwareVersion: "UNKNOWN", manufacturer: "" };
        try {
            var b = (new rg).getResult(),
                c = b.ua.toUpperCase(),
                d = window.navigator.platform.toUpperCase();
            a.browserName = b.browser.name;
            (new q("TV", "i")).match(d) ? a.deviceType = "TV" : (new q("IPAD", "i")).match(c) || (new q("ANDROID", "i")).match(c) && -1 == c.indexOf("MOBI") ?
                a.deviceType = "TABLET" : -1 != c.indexOf("MOBI") ? a.deviceType = "MOBILE_PHONE" : a.deviceType = "PC";
            var e = b.os.name;
            (new q("WINDOWS", "i")).match(e) ? a.operatingSystem = "WINDOWS" : (new q("MAC", "i")).match(e) ? a.operatingSystem = "OSX" : (new q("ANDROID", "i")).match(e) ? a.operatingSystem = "ANDROID" : (new q("IOS", "i")).match(e) || (new q("IPHONE", "i")).match(c) || (new q("IPAD", "i")).match(c) || (new q("IPOD", "i")).match(c) ? a.operatingSystem = "IOS" : (new q("BLACKBERRY", "i")).match(c) ? a.operatingSystem = "BLACKBERRY" : -1 != c.indexOf("LINUX") ?
                a.operatingSystem = "LINUX" : (new q("\\bSILK\\b", "")).match(b.ua) && (a.operatingSystem = "FIREOS");
            a.operatingSystemVersion = b.os.version;
            "PC" == a.deviceType && "OSX" == a.operatingSystem ? a.hardwareVersion = "MAC" : "PC" == a.deviceType ? a.hardwareVersion = "PC" : (a.hardwareVersion = b.device.model, a.manufacturer = b.device.vendor)
        } catch (k) { k instanceof A && (k = k.val) }
        return a
    };
    Ec.eval = function(a) { return eval(a) };
    var rg = function(a) {
        this._setup();
        this._ua = null != a ? a : Ec.eval("((window && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : '')");
        this.setUA(this._ua)
    };
    h["app._ServiceDeltaDNA.UAParser"] = rg;
    rg.__name__ = ["app", "_ServiceDeltaDNA", "UAParser"];
    rg.prototype = {
        getBrowser: function() { var a = this._mapper_rgx(this.rgxmap.browser);
            a.major = this.util.major(a.version); return a },
        getCPU: function() { return this._mapper_rgx(this.rgxmap.cpu) },
        getDevice: function() { return this._mapper_rgx(this.rgxmap.device) },
        getEngine: function() { return this._mapper_rgx(this.rgxmap.engine) },
        getOS: function() { return this._mapper_rgx(this.rgxmap.os) },
        getResult: function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            }
        },
        getUA: function() { return this._ua },
        setUA: function(a) { return this._ua = a },
        _setup: function() {
            this.util = { extend: G(this, this._util_extend), has: G(this, this._util_has), lowerize: G(this, this._util_lowerize), major: G(this, this._util_major) };
            this.mapper = { rgx: G(this, this._mapper_rgx), str: G(this, this._mapper_str) };
            this.maps = {
                browser: {
                    oldsafari: {
                        version: {
                            "1.0": "/8",
                            "1.2": "/1",
                            "1.3": "/3",
                            "2.0": "/412",
                            "2.0.2": "/416",
                            "2.0.3": "/417",
                            "2.0.4": "/419",
                            "?": "/"
                        }
                    }
                },
                device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } },
                os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2E3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", "8.1": "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } }
            };
            this.rgxmap = {
                browser: [
                    [new q("(opera\\smini)/([\\w\\.-]+)", "i"), new q("(opera\\s[mobiletab]+).+version/([\\w\\.-]+)", "i"), new q("(opera).+version/([\\w\\.]+)",
                        "i"), new q("(opera)[/\\s]+([\\w\\.]+)", "i")],
                    ["name", "version"],
                    [new q("\\s(opr)/([\\w\\.]+)", "i")],
                    [
                        ["name", "Opera"], "version"
                    ],
                    [new q("(kindle)/([\\w\\.]+)", "i"), new q("(lunascape|maxthon|netfront|jasmine|blazer)[/\\s]?([\\w\\.]+)*", "i"), new q("(avant\\s|iemobile|slim|baidu)(?:browser)?[/\\s]?([\\w\\.]*)", "i"), new q("(?:ms|\\()(ie)\\s([\\w\\.]+)", "i"), new q("(rekonq)/([\\w\\.]+)*", "i"), new q("(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium)/([\\w\\.-]+)",
                        "i")],
                    ["name", "version"],
                    [new q("(trident).+rv[:\\s]([\\w\\.]+).+like\\sgecko", "i")],
                    [
                        ["name", "IE"], "version"
                    ],
                    [new q("(edge)/((\\d+)?[\\w\\.]+)", "i")],
                    ["name", "version"],
                    [new q("(yabrowser)/([\\w\\.]+)", "i")],
                    [
                        ["name", "Yandex"], "version"
                    ],
                    [new q("(comodo_dragon)/([\\w\\.]+)", "i")],
                    [
                        ["name", new q("_", "g"), " "], "version"
                    ],
                    [new q("(chrome|omniweb|arora|[tizenoka]{5}\\s?browser)/v?([\\w\\.]+)", "i"), new q("(qqbrowser)[/\\s]?([\\w\\.]+)", "i")],
                    ["name", "version"],
                    [new q("(uc\\s?browser)[/\\s]?([\\w\\.]+)",
                        "i"), new q("ucweb.+(ucbrowser)[/\\s]?([\\w\\.]+)", "i"), new q("JUC.+(ucweb)[/\\s]?([\\w\\.]+)", "i")],
                    [
                        ["name", "UCBrowser"], "version"
                    ],
                    [new q("(dolfin)/([\\w\\.]+)", "i")],
                    [
                        ["name", "Dolphin"], "version"
                    ],
                    [new q("((?:android.+)crmo|crios)/([\\w\\.]+)", "i")],
                    [
                        ["name", "Chrome"], "version"
                    ],
                    [new q("XiaoMi/MiuiBrowser/([\\w\\.]+)", "i")],
                    ["version", ["name", "MIUI Browser"]],
                    [new q("android.+version/([\\w\\.]+)\\s+(?:mobile\\s?safari|safari)", "i")],
                    ["version", ["name", "Android Browser"]],
                    [new q("FBAV/([\\w\\.]+);",
                        "i")],
                    ["version", ["name", "Facebook"]],
                    [new q("version/([\\w\\.]+).+?mobile/\\w+\\s(safari)", "i")],
                    ["version", ["name", "Mobile Safari"]],
                    [new q("version/([\\w\\.]+).+?(mobile\\s?safari|safari)", "i")],
                    ["version", "name"],
                    [new q("webkit.+?(mobile\\s?safari|safari)(/[\\w\\.]+)", "i")],
                    ["name", ["version", this.mapper.str, this.maps.browser.oldsafari.version]],
                    [new q("(konqueror)/([\\w\\.]+)", "i"), new q("(webkit|khtml)/([\\w\\.]+)", "i")],
                    ["name", "version"],
                    [new q("(navigator|netscape)/([\\w\\.-]+)", "i")],
                    [
                        ["name",
                            "Netscape"
                        ], "version"
                    ],
                    [new q("fxios/([\\w\\.-]+)", "i")],
                    ["version", ["name", "Firefox"]],
                    [new q("(swiftfox)", "i"), new q("(icedragon|iceweasel|camino|chimera|fennec|maemo\\sbrowser|minimo|conkeror)[/\\s]?([\\w\\.\\+]+)", "i"), new q("(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)/([\\w\\.-]+)", "i"), new q("(mozilla)/([\\w\\.]+).+rv:.+gecko/\\d+", "i"), new q("(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[/\\s]?([\\w\\.]+)", "i"), new q("(links)\\s\\(([\\w\\.]+)", "i"), new q("(gobrowser)/?([\\w\\.]+)*",
                        "i"), new q("(ice\\s?browser)/v?([\\w\\._]+)", "i"), new q("(mosaic)[/\\s]([\\w\\.]+)", "i")],
                    ["name", "version"]
                ],
                cpu: [
                    [new q("(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\\)]", "i")],
                    [
                        ["architecture", "amd64"]
                    ],
                    [new q("(ia32(?=;))", "i")],
                    [
                        ["architecture", this.util.lowerize]
                    ],
                    [new q("((?:i[346]|x)86)[;\\)]", "i")],
                    [
                        ["architecture", "ia32"]
                    ],
                    [new q("windows\\s(ce|mobile);\\sppc;", "i")],
                    [
                        ["architecture", "arm"]
                    ],
                    [new q("((?:ppc|powerpc)(?:64)?)(?:\\smac|;|\\))", "i")],
                    [
                        ["architecture", new q("ower", ""), "", this.util.lowerize]
                    ],
                    [new q("(sun4\\w)[;\\)]", "i")],
                    [
                        ["architecture", "sparc"]
                    ],
                    [new q("((?:avr32|ia64(?=;))|68k(?=\\))|arm(?:64|(?=v\\d+;))|(?=atmel\\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)", "i")],
                    [
                        ["architecture", this.util.lowerize]
                    ]
                ],
                device: [
                    [new q("\\((ipad|playbook);[\\w\\s\\);-]+(rim|apple)", "i")],
                    ["model", "vendor", ["type", "tablet"]],
                    [new q("applecoremedia/[\\w\\.]+ \\((ipad)", "")],
                    ["model", ["vendor", "Apple"],
                        ["type", "tablet"]
                    ],
                    [new q("(apple\\s{0,1}tv)", "i")],
                    [
                        ["model", "Apple TV"],
                        ["vendor", "Apple"]
                    ],
                    [new q("(archos)\\s(gamepad2?)",
                        "i"), new q("(hp).+(touchpad)", "i"), new q("(kindle)/([\\w\\.]+)", "i"), new q("\\s(nook)[\\w\\s]+build/(\\w+)", "i"), new q("(dell)\\s(strea[kpr\\s\\d]*[\\dko])", "i")],
                    ["vendor", "model", ["type", "tablet"]],
                    [new q("(kf[A-z]+)\\sbuild/[\\w\\.]+.*silk/", "i")],
                    ["model", ["vendor", "Amazon"],
                        ["type", "tablet"]
                    ],
                    [new q("(sd|kf)[0349hijorstuw]+\\sbuild/[\\w\\.]+.*silk/", "i")],
                    [
                        ["model", this.mapper.str, this.maps.device.amazon.model],
                        ["vendor", "Amazon"],
                        ["type", "mobile"]
                    ],
                    [new q("\\((ip[honed|\\s\\w*]+);.+(apple)",
                        "i")],
                    ["model", "vendor", ["type", "mobile"]],
                    [new q("\\((ip[honed|\\s\\w*]+);", "i")],
                    ["model", ["vendor", "Apple"],
                        ["type", "mobile"]
                    ],
                    [new q("(blackberry)[\\s-]?(\\w+)", "i"), new q("(blackberry|benq|palm(?=\\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\\s_-]?([\\w-]+)*", "i"), new q("(hp)\\s([\\w\\s]+\\w)", "i"), new q("(asus)-?(\\w+)", "i")],
                    ["vendor", "model", ["type", "mobile"]],
                    [new q("\\(bb10;\\s(\\w+)", "i")],
                    ["model", ["vendor", "BlackBerry"],
                        ["type", "mobile"]
                    ],
                    [new q("android.+(transfo[prime\\s]{4,10}\\s\\w+|eeepc|slider\\s\\w+|nexus 7)",
                        "i")],
                    ["model", ["vendor", "Asus"],
                        ["type", "tablet"]
                    ],
                    [new q("(sony)\\s(tablet\\s[ps])\\sbuild/", "i"), new q("(sony)?(?:sgp.+)\\sbuild/", "i")],
                    [
                        ["vendor", "Sony"],
                        ["model", "Xperia Tablet"],
                        ["type", "tablet"]
                    ],
                    [new q("(?:sony)?(?:(?:(?:c|d)\\d{4})|(?:so[-l].+))\\sbuild/", "i")],
                    [
                        ["vendor", "Sony"],
                        ["model", "Xperia Phone"],
                        ["type", "mobile"]
                    ],
                    [new q("\\s(ouya)\\s", "i"), new q("(nintendo)\\s([wids3u]+)", "i")],
                    ["vendor", "model", ["type", "console"]],
                    [new q("android.+;\\s(shield)\\sbuild", "i")],
                    ["model", ["vendor",
                            "Nvidia"
                        ],
                        ["type", "console"]
                    ],
                    [new q("(playstation\\s[34portablevi]+)", "i")],
                    ["model", ["vendor", "Sony"],
                        ["type", "console"]
                    ],
                    [new q("(sprint\\s(\\w+))", "i")],
                    [
                        ["vendor", this.mapper.str, this.maps.device.sprint.vendor],
                        ["model", this.mapper.str, this.maps.device.sprint.model],
                        ["type", "mobile"]
                    ],
                    [new q("(lenovo)\\s?(S(?:5000|6000)+(?:[-][\\w+]))", "i")],
                    ["vendor", "model", ["type", "tablet"]],
                    [new q("(htc)[;_\\s-]+([\\w\\s]+(?=\\))|\\w+)*", "i"), new q("(zte)-(\\w+)*", "i"), new q("(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\\s)sony)[_\\s-]?([\\w-]+)*",
                        "i")],
                    ["vendor", ["model", new q("_", "g"), " "],
                        ["type", "mobile"]
                    ],
                    [new q("(nexus\\s9)", "i")],
                    ["model", ["vendor", "HTC"],
                        ["type", "tablet"]
                    ],
                    [new q("[\\s\\(;](xbox(?:\\sone)?)[\\s\\);]", "i")],
                    ["model", ["vendor", "Microsoft"],
                        ["type", "console"]
                    ],
                    [new q("(kin\\.[onetw]{3})", "i")],
                    [
                        ["model", new q("\\.", "g"), " "],
                        ["vendor", "Microsoft"],
                        ["type", "mobile"]
                    ],
                    [new q("\\s(milestone|droid(?:[2-4x]|\\s(?:bionic|x2|pro|razr))?(:?\\s4g)?)[\\w\\s]+build/", "i"), new q("mot[\\s-]?(\\w+)*", "i"), new q("(XT\\d{3,4}) build/",
                        "i"), new q("(nexus\\s[6])", "i")],
                    ["model", ["vendor", "Motorola"],
                        ["type", "mobile"]
                    ],
                    [new q("android.+\\s(mz60\\d|xoom[\\s2]{0,2})\\sbuild/", "i")],
                    ["model", ["vendor", "Motorola"],
                        ["type", "tablet"]
                    ],
                    [new q("android.+((sch-i[89]0\\d|shw-m380s|gt-p\\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))", "i"), new q("((SM-T\\w+))", "i")],
                    [
                        ["vendor", "Samsung"], "model", ["type", "tablet"]
                    ],
                    [new q("((s[cgp]h-\\w+|gt-\\w+|galaxy\\snexus|sm-n900))", "i"), new q("(sam[sung]*)[\\s-]*(\\w+-?[\\w-]*)*", "i"), new q("sec-((sgh\\w+))", "i")],
                    [
                        ["vendor", "Samsung"], "model", ["type", "mobile"]
                    ],
                    [new q("(samsung);smarttv", "i")],
                    ["vendor", "model", ["type", "smarttv"]],
                    [new q("\\(dtv[\\);].+(aquos)", "i")],
                    ["model", ["vendor", "Sharp"],
                        ["type", "smarttv"]
                    ],
                    [new q("sie-(\\w+)*", "i")],
                    ["model", ["vendor", "Siemens"],
                        ["type", "mobile"]
                    ],
                    [new q("(maemo|nokia).*(n900|lumia\\s\\d+)", "i"), new q("(nokia)[\\s_-]?([\\w-]+)*", "i")],
                    [
                        ["vendor", "Nokia"], "model", ["type", "mobile"]
                    ],
                    [new q("android\\s3\\.[\\s\\w;-]{10}(a\\d{3})", "i")],
                    ["model", ["vendor", "Acer"],
                        ["type",
                            "tablet"
                        ]
                    ],
                    [new q("android\\s3\\.[\\s\\w;-]{10}(lg?)-([06cv9]{3,4})", "i")],
                    [
                        ["vendor", "LG"], "model", ["type", "tablet"]
                    ],
                    [new q("(lg) netcast\\.tv", "i")],
                    ["vendor", "model", ["type", "smarttv"]],
                    [new q("(nexus\\s[45])", "i"), new q("lg[e;\\s/-]+(\\w+)*", "i")],
                    ["model", ["vendor", "LG"],
                        ["type", "mobile"]
                    ],
                    [new q("android.+(ideatab[a-z0-9\\-\\s]+)", "i")],
                    ["model", ["vendor", "Lenovo"],
                        ["type", "tablet"]
                    ],
                    [new q("linux;.+((jolla));", "i")],
                    ["vendor", "model", ["type", "mobile"]],
                    [new q("((pebble))app/[\\d\\.]+\\s",
                        "i")],
                    ["vendor", "model", ["type", "wearable"]],
                    [new q("android.+;\\s(glass)\\s\\d", "i")],
                    ["model", ["vendor", "Google"],
                        ["type", "wearable"]
                    ],
                    [new q("android.+(\\w+)\\s+build/hm\\1", "i"), new q("android.+(hm[\\s\\-_]*note?[\\s_]*(?:\\d\\w)?)\\s+build", "i"), new q("android.+(mi[\\s\\-_]*(?:one|one[\\s_]plus)?[\\s_]*(?:\\d\\w)?)\\s+build", "i")],
                    [
                        ["model", new q("_", "g"), " "],
                        ["vendor", "Xiaomi"],
                        ["type", "mobile"]
                    ],
                    [new q("(mobile|tablet);.+rv:.+gecko/", "i")],
                    [
                        ["type", this.util.lowerize], "vendor", "model"
                    ]
                ],
                engine: [
                    [new q("windows.+\\sedge/([\\w\\.]+)",
                        "i")],
                    ["version", ["name", "EdgeHTML"]],
                    [new q("(presto)/([\\w\\.]+)", "i"), new q("(webkit|trident|netfront|netsurf|amaya|lynx|w3m)/([\\w\\.]+)", "i"), new q("(khtml|tasman|links)[/\\s]\\(?([\\w\\.]+)", "i"), new q("(icab)[/\\s]([23]\\.[\\d\\.]+)", "i")],
                    ["name", "version"],
                    [new q("rv:([\\w\\.]+).*(gecko)", "i")],
                    ["version", "name"]
                ],
                os: [
                    [new q("microsoft\\s(windows)\\s(vista|xp)", "i")],
                    ["name", "version"],
                    [new q("(windows)\\snt\\s6\\.2;\\s(arm)", "i"), new q("(windows\\sphone(?:\\sos)*|windows\\smobile|windows)[\\s/]?([ntce\\d\\.\\s]+\\w)",
                        "i")],
                    ["name", ["version", this.mapper.str, this.maps.os.windows.version]],
                    [new q("(win(?=3|9|n)|win\\s9x\\s)([nt\\d\\.]+)", "i")],
                    [
                        ["name", "Windows"],
                        ["version", this.mapper.str, this.maps.os.windows.version]
                    ],
                    [new q("\\((bb)(10);", "i")],
                    [
                        ["name", "BlackBerry"], "version"
                    ],
                    [new q("(blackberry)\\w*/?([\\w\\.]+)*", "i"), new q("(tizen)[/\\s]([\\w\\.]+)", "i"), new q("(android|webos|palm\\sos|qnx|bada|rim\\stablet\\sos|meego|contiki)[/\\s-]?([\\w\\.]+)*", "i"), new q("linux;.+(sailfish);", "i")],
                    ["name", "version"],
                    [new q("(symbian\\s?os|symbos|s60(?=;))[/\\s-]?([\\w\\.]+)*", "i")],
                    [
                        ["name", "Symbian"], "version"
                    ],
                    [new q("\\((series40);", "i")],
                    ["name"],
                    [new q("mozilla.+\\(mobile;.+gecko.+firefox", "i")],
                    [
                        ["name", "Firefox OS"], "version"
                    ],
                    [new q("(nintendo|playstation)\\s([wids34portablevu]+)", "i"), new q("(mint)[/\\s\\(]?(\\w+)*", "i"), new q("(mageia|vectorlinux)[;\\s]", "i"), new q("(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[/\\s-]?([\\w\\.-]+)*",
                        "i"), new q("(hurd|linux)\\s?([\\w\\.]+)*", "i"), new q("(gnu)\\s?([\\w\\.]+)*", "i")],
                    ["name", "version"],
                    [new q("(cros)\\s[\\w]+\\s([\\w\\.]+\\w)", "i")],
                    [
                        ["name", "Chromium OS"], "version"
                    ],
                    [new q("(sunos)\\s?([\\w\\.]+\\d)*", "i")],
                    [
                        ["name", "Solaris"], "version"
                    ],
                    [new q("\\s([frentopc-]{0,4}bsd|dragonfly)\\s?([\\w\\.]+)*", "i")],
                    ["name", "version"],
                    [new q("(ip[honead]+)(?:.*os\\s*([\\w]+)*\\slike\\smac|;\\sopera)", "i")],
                    [
                        ["name", "iOS"],
                        ["version", new q("_", "g"), "."]
                    ],
                    [new q("(mac\\sos\\sx)\\s?([\\w\\s\\.]+\\w)*",
                        "i"), new q("(macintosh|mac(?=_powerpc)\\s)", "i")],
                    [
                        ["name", "Mac OS"],
                        ["version", new q("_", "g"), "."]
                    ],
                    [new q("((?:open)?solaris)[/\\s-]?([\\w\\.]+)*", "i"), new q("(haiku)\\s(\\w+)", "i"), new q("(aix)\\s((\\d)(?=\\.|\\)|\\s)[\\w\\.]*)*", "i"), new q("(plan\\s9|minix|beos|os/2|amigaos|morphos|risc\\sos|openvms)", "i"), new q("(unix)\\s?([\\w\\.]+)*", "i")],
                    ["name", "version"]
                ]
            }
        },
        _mapper_rgx: function(a) {
            for (var b = {}, c, d = 0, e = a[1].length; d < e;) c = d++, c = a[1][c], c instanceof Array && null == c.__enum__ ? b[c[0]] = "" : b[c] =
                "";
            c = null;
            for (var k, w = 0; w < a.length && null == c;) {
                for (var d = a[w], e = a[w + 1], g = 0, f = 0; g < d.length && null == c;)
                    if (c = this._regexExec(d[g++], this.getUA()), null != c)
                        for (var h = 0, l = e.length; h < l;) {
                            var m = h++;
                            k = c[++f];
                            if (e[m] instanceof Array && null == e[m].__enum__) {
                                var m = e[m],
                                    n = m[0];
                                if (2 == m.length) L.isFunction(m[1]) ? L.setField(b, n, (0, m[1])(k)) : b[n] = m[1];
                                else if (3 == m.length)
                                    if (L.isFunction(m[1]) && !V.__instanceof(m[1], q)) { var p = m[1];
                                        L.setField(b, n, null != k ? p(k, m[2]) : null) } else L.setField(b, n, this._replace(k, m[1], m[2]));
                                else 4 ==
                                    m.length && (p = m[3], L.setField(b, n, null != k ? p(this._replace(k, m[1], m[2])) : null))
                            } else b[e[m]] = k
                        }
                w += 2
            }
            return b
        },
        _mapper_str: function(a, b) { for (var c = 0, d = L.fields(b); c < d.length;) { var e = d[c];++c; if (L.field(b, e) instanceof Array && null == L.field(b, e).__enum__)
                    for (var k = L.field(b, e), w = 0, g = k.length; w < g;) { var f = w++; if (this._util_has(k[f], a)) return "?" == e ? null : e } else if (this._util_has(L.field(b, e), a)) return "?" == e ? null : e } return a },
        _util_extend: function(a, b) { return a },
        _util_has: function(a, b) {
            return "string" == typeof a ?
                -1 != b.toLowerCase().indexOf(V.__cast(a, String).toLowerCase()) : !1
        },
        _util_lowerize: function(a) { return a.toLowerCase() },
        _util_major: function(a) { return "string" == typeof a ? a.split(".")[0] : null },
        _regexExec: function(a, b) { var c = []; if (a.match(b)) { c.push(a.matched(0));
                c.push(a.matched(1)); try { c.push(a.matched(2)) } catch (d) { d instanceof A && (d = d.val) } try { c.push(a.matched(3)) } catch (e) { e instanceof A && (e = e.val) } try { c.push(a.matched(4)) } catch (k) { k instanceof A && (k = k.val) } return c } return null },
        _replace: function(a,
            b, c) { return null == a ? a : V.__instanceof(b, q) ? V.__cast(b, q).replace(a, c) : Z.replace(a, b, c) },
        __class__: rg
    };
    var oa = function() {};
    h["app.Services"] = oa;
    oa.__name__ = ["app", "Services"];
    oa.initMain = function() { oa._sdk = new Pb;
        tc.set_onSuspendToggle(function(a) { z.root.add(new Sd(a ? 0 : 1)) });
        tc.set_onAudioToggle(function(a) { z.volume.set__(a ? 1 : 0) });
        Kh.vjeiwo231("http://www.nick.com");
        yb.sendGameEvent("onLoadingStart") };
    oa.onLoadHalf = function() { yb.sendGameEvent("getLoadingProgress", 0.5) };
    oa.onLoadFinished = function() {
        yb.sendGameEvent("onLoadingEnd");
        yb.sendGameEvent("onTitleScreenStart")
    };
    oa.onSplashPlay = function() { oa._sendCanadaTrackingCall("play") };
    oa.onSplashClose = function() { yb.sendGameEvent("onTitleScreenEnd") };
    oa.onGameStart = function() { yb.sendGameEvent("onLevelStart") };
    oa.onPlayAgain = function() { oa._sendCanadaTrackingCall("replay") };
    oa.onGameEnd = function() { yb.sendGameEvent("onGameOver") };
    oa.onPauseEvent = function() { yb.sendGameEvent("onPause") };
    oa.onResumeEvent = function() { yb.sendGameEvent("onResume") };
    oa.update = function(a) {};
    oa._sendCanadaTrackingCall =
        function(a) { if (oa._flagCanadaTrackingEnabled) try { eval("trackFlashEvent('" + oa._canadaShowGameTitle + "', '" + a + "', 'true');") } catch (b) { b instanceof A && (b = b.val) } };
    var ab = function() { this.onStarted = this.onUpdated = this.onStopped = null;
        this.spawned = !0;
        U.call(this) };
    h["kit.creator.CreatorObject"] = ab;
    ab.__name__ = ["kit", "creator", "CreatorObject"];
    ab.__super__ = U;
    ab.prototype = p(U.prototype, {
        get_entitySlot: function() { return 1 },
        onStart: function() { this.$B |= 2 },
        onUpdate: function(a) {
            0 != (this.$B & 2) && (this.$B &= -3, null !=
                this.onStarted && (this.owner.yieldForStart(), this.owner.emitMessageToParents(this.onStarted, this.owner)));
            null != this.onUpdated && this.owner.emitMessageToParents(this.onUpdated, this.owner)
        },
        onStop: function() { this.$B &= -3;
            null != this.onStopped && this.owner.emitMessageToParents(this.onStopped, this.owner) },
        __class__: ab
    });
    var hc = function() {
        this.physicsType = Lb.Dynamic;
        this.collisionGroup = this.collidesWith = this.onBeginContact = this.onEndContact = null;
        this.sensor = !1;
        this.restitution = 0;
        this.friction = 0.2;
        this.gravityScale =
            1;
        this.fixedRotation = !1;
        this.density = 1;
        this.physicsEnabled = !1;
        this.onPointerDown = this.onPointerIn = this.onPointerOut = this.onPointerUp = null;
        this.pointerEnabled = !0;
        ab.call(this)
    };
    h["ez.Actor"] = hc;
    hc.__name__ = ["ez", "Actor"];
    hc.__super__ = ab;
    hc.prototype = p(ab.prototype, {
        onStart: function() {
            var a = this;
            ab.prototype.onStart.call(this);
            var b = this.owner.$PG[3];
            null != b && (b.set_pointerEnabled(this.pointerEnabled), null != this.onPointerDown && b.get_pointerDown().connect(function(b) { a.$eF(a.onPointerDown) }), null != this.onPointerIn &&
                b.get_pointerIn().connect(function(b) { a.$eF(a.onPointerIn) }), null != this.onPointerOut && b.get_pointerOut().connect(function(b) { a.$eF(a.onPointerOut) }), null != this.onPointerUp && b.get_pointerUp().connect(function(b) { a.$eF(a.onPointerUp) }))
        },
        $eF: function(a) { null != this.owner && this.owner.emitMessageToParents(a, this.owner) },
        __class__: hc
    });
    var Lb = h["ez.PhysicsType"] = { __ename__: ["ez", "PhysicsType"], __constructs__: ["Dynamic", "Static", "Kinematic"] };
    Lb.Dynamic = ["Dynamic", 0];
    Lb.Dynamic.toString = l;
    Lb.Dynamic.__enum__ =
        Lb;
    Lb.Static = ["Static", 1];
    Lb.Static.toString = l;
    Lb.Static.__enum__ = Lb;
    Lb.Kinematic = ["Kinematic", 2];
    Lb.Kinematic.toString = l;
    Lb.Kinematic.__enum__ = Lb;
    var Qd = function(a, b) { this.callInitPlatformSDK = !0;
        this.loaded = new $b;
        U.call(this);
        null == b && (b = a);
        this.$gF = b };
    h["ez.EzApp"] = Qd;
    Qd.__name__ = ["ez", "EzApp"];
    Qd.__super__ = U;
    Qd.prototype = p(U.prototype, {
        get_entitySlot: function() { return 15 },
        onStart: function() {
            var a = this,
                b = this.owner.$PG[8];
            null == b && this.owner.add(b = new cd);
            var c = this.owner.$PG[2];
            null == c && this.owner.add(c =
                new Fc);
            var d = this.owner.$PG[16];
            null == d && this.owner.add(d = new kd);
            d = Ba.getRequiredAssetPacks(this.$gF).map(function(a) { return c.load(a) });
            d = Qa.all(d);
            this.callInitPlatformSDK && (d = z.$KH.initPlatformSDK(d));
            d.then(function(c) { b.unwindToScene(new ld(a.$gF));
                a.loaded.emit() })
        },
        __class__: Qd
    });
    var ac = function(a) { null == a && (a = !0);
        U.call(this);
        this.opaque = a;
        this.shown = new $b;
        this.hidden = new $b };
    h["kit.scene.Scene"] = ac;
    ac.__name__ = ["kit", "scene", "Scene"];
    ac.__super__ = U;
    ac.prototype = p(U.prototype, {
        get_entitySlot: function() { return 9 },
        __class__: ac
    });
    var ld = function(a, b) { null == b && (b = !0);
        this.onStarted = this.onStopped = this.onUpdated = this.onPropertyChanged = this.onKeyDown = this.onKeyUp = this.onPointerDown = this.onPointerUp = this.$iF = null;
        ac.call(this, b);
        this.$hF = a };
    h["ez.EzScene"] = ld;
    ld.__name__ = ["ez", "EzScene"];
    ld.__super__ = ac;
    ld.prototype = p(ac.prototype, {
        onStart: function() {
            var a = this;
            ac.prototype.onStart.call(this);
            var b = this.owner._internal_getFromParents(2).getScene(this.$hF),
                c = [];
            this.registerDisposable(b.reloadCount.watch(function(d,
                e) {
                a.onStarted = b.properties.get("onStarted");
                a.onStopped = b.properties.get("onStopped");
                a.onUpdated = b.properties.get("onUpdated");
                a.onPropertyChanged = b.properties.get("onPropertyChanged");
                a.onKeyDown = b.properties.get("onKeyDown");
                a.onKeyUp = b.properties.get("onKeyUp");
                a.onPointerDown = b.properties.get("onPointerDown");
                a.onPointerUp = b.properties.get("onPointerUp");
                for (var k = 0; k < c.length;) { var w = c[k];++k;
                    w.dispose() } c = [];
                null != a.onKeyDown && c.push(a.connect1(z.$KH.getKeyboard().down, function(b) { a.$eF(a.onKeyDown) }));
                null != a.onKeyUp && c.push(a.connect1(z.$KH.getKeyboard().up, function(b) { a.$eF(a.onKeyUp) }));
                null != a.onPointerDown && c.push(a.connect1(z.$KH.$YG.down, function(b) { a.$eF(a.onPointerDown) }));
                null != a.onPointerUp && c.push(a.connect1(z.$KH.$YG.up, function(b) { a.$eF(a.onPointerUp) }))
            }));
            var d = b.createSprite();
            d.setCamera(0, 0, ua.$qN("width"), ua.$qN("height"));
            d.drawBackgroundColor = this.opaque;
            this.$iF = (new aa).add(d);
            this.owner.addChild(this.$iF);
            var e = new kd;
            this.owner.add(e);
            if (null != this.onPropertyChanged) {
                for (var k = [e], w = this.owner.parent; null != w;) { var g = w.$PG[16];
                    null != g && k.push(g);
                    w = w.parent }
                for (w = 0; w < k.length;) g = k[w], ++w, this.connect2(g.changed, function(b, c) { a.$eF(a.onPropertyChanged) })
            }
            for (k = b.properties.keys(); k.hasNext();) w = k.next(), g = H.parseFloat(b.properties.get(w)), isNaN(g) || e.set(w, g);
            1 != ua.$qN("scaleMode") && (e = function() {
                var a = Math.min(z.$KH.$aG.get_width() / d.cameraWidth.$tG, z.$KH.$aG.get_height() / d.cameraHeight.$tG);
                d.setXY(z.$KH.$aG.get_width() / 2 - a * d.cameraWidth.$tG / 2, z.$KH.$aG.get_height() / 2 - a *
                    d.cameraHeight.$tG / 2);
                d.setScale(a)
            }, e(), this.connect0(z.$KH.$aG.resize, e));
            e = b.createScript();
            this.$iF.add(e);
            this.owner.yieldForStart();
            null != this.onStarted && this.$eF(this.onStarted)
        },
        onUpdate: function(a) { ac.prototype.onUpdate.call(this, a);
            null != this.onUpdated && this.$eF(this.onUpdated) },
        onStop: function() { ac.prototype.onStop.call(this);
            null != this.onStopped && this.$eF(this.onStopped) },
        $eF: function(a) { this.$iF.emitMessageToParents(a, this.owner) },
        __class__: ld
    });
    var ia = function() {
        this.target = this.script =
            null
    };
    h["kit.creator.CreatorAction"] = ia;
    ia.__name__ = ["kit", "creator", "CreatorAction"];
    ia.runSequence = function(a, b) { if (0 >= a.length) return (new Qa).$gW(null); for (var c = null, d = 0; d < a.length;) { var e = [a[d]];++d;
            c = null != c ? c.then(function(a) { return function(c) { return a[0].$lF(b) } }(e)) : e[0].$lF(b) } return c };
    ia.prototype = {
        $jF: function(a) {},
        $kF: function(a) { return null },
        $lF: function(a) {
            if (null == this.script || null == this.script.owner) return (new Qa).failure();
            if (null != this.target) {
                var b = this.script.owner._internal_getFromParents(3,
                    Ta);
                a = null;
                for (var c = b.objects.keys(); c.hasNext();) { var d = c.next(); if (this.target.name == d.name) { a = b.objects.h[d.__id__]; break } }
                if (null == a) return (new Qa).failure()
            }
            this.$jF(a);
            a = this.$kF(a);
            null == a && (a = (new Qa).$gW(null));
            return a
        },
        __class__: ia
    };
    var Gc = function() { ia.call(this) };
    h["ez.TweenAction"] = Gc;
    Gc.__name__ = ["ez", "TweenAction"];
    Gc.__super__ = ia;
    Gc.prototype = p(ia.prototype, {
        $oF: function(a, b, c, d, e) { if (0 >= d) return b.set__(c), null;
            b.animateTo(c, d, this.$qF(e)); return Hc.on(a, b) },
        $qF: function(a) {
            switch (a[1]) {
                case 0:
                    return P.linear;
                case 1:
                    return P.quadIn;
                case 2:
                    return P.quadOut;
                case 3:
                    return P.quadInOut;
                case 4:
                    return P.cubeIn;
                case 5:
                    return P.cubeOut;
                case 6:
                    return P.cubeInOut;
                case 7:
                    return P.quartIn;
                case 8:
                    return P.quartOut;
                case 9:
                    return P.quartInOut;
                case 10:
                    return P.quintIn;
                case 11:
                    return P.quintOut;
                case 12:
                    return P.quintInOut;
                case 13:
                    return P.sineIn;
                case 14:
                    return P.sineOut;
                case 15:
                    return P.sineInOut;
                case 16:
                    return P.bounceIn;
                case 17:
                    return P.bounceOut;
                case 18:
                    return P.bounceInOut;
                case 19:
                    return P.circIn;
                case 20:
                    return P.circOut;
                case 21:
                    return P.circInOut;
                case 22:
                    return P.expoIn;
                case 23:
                    return P.expoOut;
                case 24:
                    return P.expoInOut;
                case 25:
                    return P.backIn;
                case 26:
                    return P.backOut;
                case 27:
                    return P.backInOut;
                case 28:
                    return P.elasticIn;
                case 29:
                    return P.elasticOut;
                case 30:
                    return P.elasticInOut
            }
        },
        __class__: Gc
    });
    var Hc = function(a, b) { U.call(this);
        this.$sF = a;
        this.$tF = a.$tF;
        this.$uF = b };
    h.$CG = Hc;
    Hc.__name__ = ["$CG"];
    Hc.on = function(a, b) { var c = new Qa;
        a.addChild((new aa).add(new Hc(b, c))); return c };
    Hc.__super__ = U;
    Hc.prototype = p(U.prototype, { get_entitySlot: function() { return 10 }, onUpdate: function(a) { this.$sF.$tF != this.$tF && (this.owner.dispose(), this.$uF.success(null)) }, __class__: Hc });
    var y = h["ez.TweenEase"] = { __ename__: ["ez", "TweenEase"], __constructs__: "Linear QuadIn QuadOut QuadInOut CubeIn CubeOut CubeInOut QuartIn QuartOut QuartInOut QuintIn QuintOut QuintInOut SineIn SineOut SineInOut BounceIn BounceOut BounceInOut CircIn CircOut CircInOut ExpoIn ExpoOut ExpoInOut BackIn BackOut BackInOut ElasticIn ElasticOut ElasticInOut".split(" ") };
    y.Linear = ["Linear", 0];
    y.Linear.toString = l;
    y.Linear.__enum__ = y;
    y.QuadIn = ["QuadIn", 1];
    y.QuadIn.toString = l;
    y.QuadIn.__enum__ = y;
    y.QuadOut = ["QuadOut", 2];
    y.QuadOut.toString = l;
    y.QuadOut.__enum__ = y;
    y.QuadInOut = ["QuadInOut", 3];
    y.QuadInOut.toString = l;
    y.QuadInOut.__enum__ = y;
    y.CubeIn = ["CubeIn", 4];
    y.CubeIn.toString = l;
    y.CubeIn.__enum__ = y;
    y.CubeOut = ["CubeOut", 5];
    y.CubeOut.toString = l;
    y.CubeOut.__enum__ = y;
    y.CubeInOut = ["CubeInOut", 6];
    y.CubeInOut.toString = l;
    y.CubeInOut.__enum__ = y;
    y.QuartIn = ["QuartIn", 7];
    y.QuartIn.toString =
        l;
    y.QuartIn.__enum__ = y;
    y.QuartOut = ["QuartOut", 8];
    y.QuartOut.toString = l;
    y.QuartOut.__enum__ = y;
    y.QuartInOut = ["QuartInOut", 9];
    y.QuartInOut.toString = l;
    y.QuartInOut.__enum__ = y;
    y.QuintIn = ["QuintIn", 10];
    y.QuintIn.toString = l;
    y.QuintIn.__enum__ = y;
    y.QuintOut = ["QuintOut", 11];
    y.QuintOut.toString = l;
    y.QuintOut.__enum__ = y;
    y.QuintInOut = ["QuintInOut", 12];
    y.QuintInOut.toString = l;
    y.QuintInOut.__enum__ = y;
    y.SineIn = ["SineIn", 13];
    y.SineIn.toString = l;
    y.SineIn.__enum__ = y;
    y.SineOut = ["SineOut", 14];
    y.SineOut.toString = l;
    y.SineOut.__enum__ =
        y;
    y.SineInOut = ["SineInOut", 15];
    y.SineInOut.toString = l;
    y.SineInOut.__enum__ = y;
    y.BounceIn = ["BounceIn", 16];
    y.BounceIn.toString = l;
    y.BounceIn.__enum__ = y;
    y.BounceOut = ["BounceOut", 17];
    y.BounceOut.toString = l;
    y.BounceOut.__enum__ = y;
    y.BounceInOut = ["BounceInOut", 18];
    y.BounceInOut.toString = l;
    y.BounceInOut.__enum__ = y;
    y.CircIn = ["CircIn", 19];
    y.CircIn.toString = l;
    y.CircIn.__enum__ = y;
    y.CircOut = ["CircOut", 20];
    y.CircOut.toString = l;
    y.CircOut.__enum__ = y;
    y.CircInOut = ["CircInOut", 21];
    y.CircInOut.toString = l;
    y.CircInOut.__enum__ =
        y;
    y.ExpoIn = ["ExpoIn", 22];
    y.ExpoIn.toString = l;
    y.ExpoIn.__enum__ = y;
    y.ExpoOut = ["ExpoOut", 23];
    y.ExpoOut.toString = l;
    y.ExpoOut.__enum__ = y;
    y.ExpoInOut = ["ExpoInOut", 24];
    y.ExpoInOut.toString = l;
    y.ExpoInOut.__enum__ = y;
    y.BackIn = ["BackIn", 25];
    y.BackIn.toString = l;
    y.BackIn.__enum__ = y;
    y.BackOut = ["BackOut", 26];
    y.BackOut.toString = l;
    y.BackOut.__enum__ = y;
    y.BackInOut = ["BackInOut", 27];
    y.BackInOut.toString = l;
    y.BackInOut.__enum__ = y;
    y.ElasticIn = ["ElasticIn", 28];
    y.ElasticIn.toString = l;
    y.ElasticIn.__enum__ = y;
    y.ElasticOut = ["ElasticOut",
        29
    ];
    y.ElasticOut.toString = l;
    y.ElasticOut.__enum__ = y;
    y.ElasticInOut = ["ElasticInOut", 30];
    y.ElasticInOut.toString = l;
    y.ElasticInOut.__enum__ = y;
    var Td = function() { this.ease = y.Linear;
        this.to = this.duration = 0;
        ia.call(this) };
    h["ez.display.AlphaTo"] = Td;
    Td.__name__ = ["ez", "display", "AlphaTo"];
    Td.__super__ = Gc;
    Td.prototype = p(Gc.prototype, { $kF: function(a) { return this.$oF(a, a.$PG[3].alpha, this.to, this.duration, this.ease) }, __class__: Td });
    var Ic = function() {};
    h["haxe.IMap"] = Ic;
    Ic.__name__ = ["haxe", "IMap"];
    Ic.prototype = { __class__: Ic };
    var Rd = function(a) { this.url = a;
        this.headers = new Ja;
        this.params = new Ja;
        this.async = !0 };
    h["haxe.Http"] = Rd;
    Rd.__name__ = ["haxe", "Http"];
    Rd.prototype = {
        setHeader: function(a, b) { this.headers = Zb.filter(this.headers, function(b) { return b.header != a });
            this.headers.push({ header: a, value: b }); return this },
        setPostData: function(a) { this.postData = a; return this },
        request: function(a) {
            var b = this;
            b.responseData = null;
            var c = this.req = Lh.createXMLHttpRequest(),
                d = function(a) {
                    if (4 == c.readyState) {
                        var d;
                        try { d = c.status } catch (e) {
                            e instanceof
                            A && (e = e.val), d = null
                        }
                        null != d && (a = window.location.protocol.toLowerCase(), (new q("^(?:about|app|app-storage|.+-extension|file|res|widget):$", "")).match(a) && (d = null != c.responseText ? 200 : 404));
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
                                b.req = null, b.responseData = c.responseText, b.onError("Http Error #" + c.status)
                        }
                    }
                };
            this.async && (c.onreadystatechange = d);
            var e = this.postData;
            if (null != e) a = !0;
            else
                for (var k = this.params.h, w = null; null != k;) w = k[0], k = k[1], e = null == e ? "" : e + "&", e += encodeURIComponent(w.param) + "=" + encodeURIComponent(w.value);
            try { if (a) c.open("POST", this.url, this.async);
                else if (null != e) { var g = 1 >= this.url.split("?").length;
                    c.open("GET", this.url + (g ? "?" : "&") + e, this.async);
                    e = null } else c.open("GET", this.url, this.async) } catch (f) {
                f instanceof
                A && (f = f.val);
                b.req = null;
                this.onError(f.toString());
                return
            }!Zb.exists(this.headers, function(a) { return "Content-Type" == a.header }) && a && null == this.postData && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            a = this.headers.h;
            for (k = null; null != a;) k = a[0], a = a[1], c.setRequestHeader(k.header, k.value);
            c.send(e);
            this.async || d(null)
        },
        onData: function(a) {},
        onError: function(a) {},
        onStatus: function(a) {},
        __class__: Rd
    };
    var sg = function(a, b) { this.high = a;
        this.low = b };
    h["haxe._Int64.___Int64"] = sg;
    sg.__name__ = ["haxe", "_Int64", "___Int64"];
    sg.prototype = { __class__: sg };
    var xb = function() { this.buf = new lb;
        this.cache = [];
        this.useCache = xb.USE_CACHE;
        this.useEnumIndex = xb.USE_ENUM_INDEX;
        this.shash = new W;
        this.scount = 0 };
    h["haxe.Serializer"] = xb;
    xb.__name__ = ["haxe", "Serializer"];
    xb.run = function(a) { var b = new xb;
        b.serialize(a); return b.toString() };
    xb.prototype = {
        toString: function() { return this.buf.b },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b += "R", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b +
                ("" + b)) : (this.shash.set(a, this.scount++), this.buf.b += "y", a = encodeURIComponent(a), this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length), this.buf.b += ":", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a))
        },
        serializeRef: function(a) { for (var b = typeof a, c = 0, d = this.cache.length; c < d;) { var e = c++,
                    k = this.cache[e]; if (typeof k == b && k == a) return this.buf.b += "r", this.buf.b = null == e ? this.buf.b + "null" : this.buf.b + ("" + e), !0 } this.cache.push(a); return !1 },
        serializeFields: function(a) {
            for (var b = 0, c = L.fields(a); b <
                c.length;) { var d = c[b];++b;
                this.serializeString(d);
                this.serialize(L.field(a, d)) } this.buf.b += "g"
        },
        serialize: function(a) {
            var b = ga["typeof"](a);
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
                            for (var c = a.length, d = 0; d < c;) { var e = d++;
                                null == a[e] ? b++ : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)), b = 0), this.serialize(a[e])) } 0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)));
                            this.buf.b += "h";
                            break;
                        case Ja:
                            this.buf.b += "l";
                            a = a.h;
                            for (b = null; null !=
                                a;) b = a[0], a = a[1], this.serialize(b);
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.add(a.getTime());
                            break;
                        case W:
                            this.buf.b += "b";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(null != Za[c] ? a.getReserved(c) : a.h[c]);
                            this.buf.b += "h";
                            break;
                        case nb:
                            this.buf.b += "q";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c), this.serialize(a.h[c]);
                            this.buf.b += "h";
                            break;
                        case Qb:
                            this.buf.b += "M";
                            for (b = a.keys(); b.hasNext();) c =
                                b.next(), d = L.field(c, "__id__"), L.deleteField(c, "__id__"), this.serialize(c), c.__id__ = d, this.serialize(a.h[c.__id__]);
                            this.buf.b += "h";
                            break;
                        case Jc:
                            d = 0;
                            e = a.length - 2;
                            b = new lb;
                            for (c = xb.BASE64; d < e;) { var k = a.get(d++),
                                    w = a.get(d++),
                                    g = a.get(d++);
                                b.add(c.charAt(k >> 2));
                                b.add(c.charAt((k << 4 | w >> 4) & 63));
                                b.add(c.charAt((w << 2 | g >> 6) & 63));
                                b.add(c.charAt(g & 63)) } d == e ? (e = a.get(d++), a = a.get(d++), b.add(c.charAt(e >> 2)), b.add(c.charAt((e << 4 | a >> 4) & 63)), b.add(c.charAt(a << 2 & 63))) : d == e + 1 && (a = a.get(d++), b.add(c.charAt(a >> 2)),
                                b.add(c.charAt(a << 4 & 63)));
                            a = b.b;
                            this.buf.b += "s";
                            this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length);
                            this.buf.b += ":";
                            this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(ga.getClassName(b)), this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(ga.getClassName(b)), this.useCache && this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 4:
                    if (V.__instanceof(a, hi)) a = ga.getClassName(a), this.buf.b += "A", this.serializeString(a);
                    else if (V.__instanceof(a, ii)) this.buf.b += "B", this.serializeString(ga.getEnumName(a));
                    else { if (this.useCache && this.serializeRef(a)) break;
                        this.buf.b += "o";
                        this.serializeFields(a) }
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache) { if (this.serializeRef(a)) break;
                        this.cache.pop() } this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                    this.serializeString(ga.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += ":", this.buf.b += H.string(a[1])) :
                        this.serializeString(a[0]);
                    this.buf.b += ":";
                    b = a.length;
                    this.buf.b += H.string(b - 2);
                    for (c = 2; c < b;) d = c++, this.serialize(a[d]);
                    this.useCache && this.cache.push(a);
                    break;
                case 5:
                    throw new A("Cannot serialize function");
                default:
                    throw new A("Cannot serialize " + H.string(a));
            }
        },
        __class__: xb
    };
    var $a = function(a) { this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = $a.DEFAULT_RESOLVER;
        null == a && (a = ga, $a.DEFAULT_RESOLVER = a);
        this.setResolver(a) };
    h["haxe.Unserializer"] = $a;
    $a.__name__ = ["haxe", "Unserializer"];
    $a.initCodes = function() { for (var a = [], b = 0, c = $a.BASE64.length; b < c;) { var d = b++;
            a[$a.BASE64.charCodeAt(d)] = d } return a };
    $a.run = function(a) { return (new $a(a)).unserialize() };
    $a.prototype = {
        setResolver: function(a) { this.resolver = null == a ? { resolveClass: function(a) { return null }, resolveEnum: function(a) { return null } } : a },
        get: function(a) { return this.buf.charCodeAt(a) },
        readDigits: function() {
            for (var a = 0, b = !1, c = this.pos;;) {
                var d = this.buf.charCodeAt(this.pos);
                if (d != d) break;
                if (45 == d) { if (this.pos != c) break;
                    b = !0 } else {
                    if (48 >
                        d || 57 < d) break;
                    a = 10 * a + (d - 48)
                }
                this.pos++
            }
            b && (a *= -1);
            return a
        },
        readFloat: function() { for (var a = this.pos;;) { var b = this.buf.charCodeAt(this.pos); if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                else break } return H.parseFloat(I.substr(this.buf, a, this.pos - a)) },
        unserializeObject: function(a) { for (;;) { if (this.pos >= this.length) throw new A("Invalid object"); if (103 == this.buf.charCodeAt(this.pos)) break; var b = this.unserialize(); if ("string" != typeof b) throw new A("Invalid object key"); var c = this.unserialize();
                a[b] = c } this.pos++ },
        unserializeEnum: function(a, b) { if (58 != this.get(this.pos++)) throw new A("Invalid enum format"); var c = this.readDigits(); if (0 == c) return ga.createEnum(a, b); for (var d = []; 0 < c--;) d.push(this.unserialize()); return ga.createEnum(a, b, d) },
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
                    if (58 != this.get(this.pos++) || this.length - this.pos <
                        a) throw new A("Invalid string length");
                    var b = I.substr(this.buf, this.pos, a);
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
                    a =
                        this.readDigits();
                    if (0 > a || a >= this.cache.length) throw new A("Invalid reference");
                    return this.cache[a];
                case 82:
                    a = this.readDigits();
                    if (0 > a || a >= this.scache.length) throw new A("Invalid string reference");
                    return this.scache[a];
                case 120:
                    throw new A(this.unserialize());
                case 99:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new A("Class not found " + a);
                    a = ga.createEmptyInstance(b);
                    this.cache.push(a);
                    this.unserializeObject(a);
                    return a;
                case 119:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new A("Enum not found " + a);
                    a = this.unserializeEnum(b, this.unserialize());
                    this.cache.push(a);
                    return a;
                case 106:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new A("Enum not found " + a);
                    this.pos++;
                    var c = this.readDigits(),
                        d = ga.getEnumConstructs(b)[c];
                    if (null == d) throw new A("Unknown enum index " + a + "@" + c);
                    a = this.unserializeEnum(b, d);
                    this.cache.push(a);
                    return a;
                case 108:
                    a = new Ja;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                    this.pos++;
                    return a;
                case 98:
                    a = new W;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 113:
                    a = new nb;
                    this.cache.push(a);
                    for (b = this.get(this.pos++); 58 == b;) b = this.readDigits(), a.set(b, this.unserialize()), b = this.get(this.pos++);
                    if (104 != b) throw new A("Invalid IntMap format");
                    return a;
                case 77:
                    a = new Qb;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 118:
                    return 48 <=
                        this.buf.charCodeAt(this.pos) && 57 >= this.buf.charCodeAt(this.pos) && 48 <= this.buf.charCodeAt(this.pos + 1) && 57 >= this.buf.charCodeAt(this.pos + 1) && 48 <= this.buf.charCodeAt(this.pos + 2) && 57 >= this.buf.charCodeAt(this.pos + 2) && 48 <= this.buf.charCodeAt(this.pos + 3) && 57 >= this.buf.charCodeAt(this.pos + 3) && 45 == this.buf.charCodeAt(this.pos + 4) ? (a = I.substr(this.buf, this.pos, 19), a = I.strDate(a), this.pos += 19) : (a = this.readFloat(), b = new Date, b.setTime(a), a = b), this.cache.push(a), a;
                case 115:
                    a = this.readDigits();
                    d = this.buf;
                    if (58 !=
                        this.get(this.pos++) || this.length - this.pos < a) throw new A("Invalid bytes length");
                    var e = $a.CODES;
                    null == e && (e = $a.initCodes(), $a.CODES = e);
                    for (var k = this.pos, w = a & 3, g = k + (a - w), b = Jc.alloc(3 * (a >> 2) + (2 <= w ? w - 1 : 0)), c = 0; k < g;) { var f = e[Z.fastCodeAt(d, k++)],
                            h = e[Z.fastCodeAt(d, k++)];
                        b.set(c++, f << 2 | h >> 4);
                        f = e[Z.fastCodeAt(d, k++)];
                        b.set(c++, h << 4 | f >> 2);
                        h = e[Z.fastCodeAt(d, k++)];
                        b.set(c++, f << 6 | h) } 2 <= w && (h = e[Z.fastCodeAt(d, k++)], g = e[Z.fastCodeAt(d, k++)], b.set(c++, h << 2 | g >> 4), 3 == w && (d = e[Z.fastCodeAt(d, k++)], b.set(c++, g <<
                        4 | d >> 2)));
                    this.pos += a;
                    this.cache.push(b);
                    return b;
                case 67:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new A("Class not found " + a);
                    a = ga.createEmptyInstance(b);
                    this.cache.push(a);
                    a.hxUnserialize(this);
                    if (103 != this.get(this.pos++)) throw new A("Invalid custom data");
                    return a;
                case 65:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw new A("Class not found " + a);
                    return b;
                case 66:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw new A("Enum not found " +
                        a);
                    return b
            }
            this.pos--;
            throw new A("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
        },
        __class__: $a
    };
    var Jc = function(a) { this.length = a.byteLength;
        this.b = new fi(a);
        this.b.bufferValue = a;
        a.hxBytes = this;
        a.bytes = this.b };
    h["haxe.io.Bytes"] = Jc;
    Jc.__name__ = ["haxe", "io", "Bytes"];
    Jc.alloc = function(a) { return new Jc(new Mh(a)) };
    Jc.prototype = { get: function(a) { return this.b[a] }, set: function(a, b) { this.b[a] = b & 255 }, __class__: Jc };
    var Ud = function() {};
    h["haxe.ds.BalancedTree"] = Ud;
    Ud.__name__ = ["haxe",
        "ds", "BalancedTree"
    ];
    Ud.prototype = {
        set: function(a, b) { this.root = this.setLoop(a, b, this.root) },
        get: function(a) { for (var b = this.root; null != b;) { var c = this.compare(a, b.key); if (0 == c) return b.value;
                b = 0 > c ? b.left : b.right } return null },
        setLoop: function(a, b, c) {
            if (null == c) return new eb(null, a, b, null);
            var d = this.compare(a, c.key);
            if (0 == d) return new eb(c.left, a, b, c.right, null == c ? 0 : c._height);
            if (0 > d) return a = this.setLoop(a, b, c.left), this.balance(a, c.key, c.value, c.right);
            a = this.setLoop(a, b, c.right);
            return this.balance(c.left,
                c.key, c.value, a)
        },
        balance: function(a, b, c, d) {
            var e;
            e = null == a ? 0 : a._height;
            var k;
            k = null == d ? 0 : d._height;
            return e > k + 2 ? function(b) { b = a.left; return null == b ? 0 : b._height }(this) >= function(b) { b = a.right; return null == b ? 0 : b._height }(this) ? new eb(a.left, a.key, a.value, new eb(a.right, b, c, d)) : new eb(new eb(a.left, a.key, a.value, a.right.left), a.right.key, a.right.value, new eb(a.right.right, b, c, d)) : k > e + 2 ? function(a) { a = d.right; return null == a ? 0 : a._height }(this) > function(a) { a = d.left; return null == a ? 0 : a._height }(this) ? new eb(new eb(a,
                b, c, d.left), d.key, d.value, d.right) : new eb(new eb(a, b, c, d.left.left), d.left.key, d.left.value, new eb(d.left.right, d.key, d.value, d.right)) : new eb(a, b, c, d, (e > k ? e : k) + 1)
        },
        compare: function(a, b) { return L.compare(a, b) },
        __class__: Ud
    };
    var eb = function(a, b, c, d, e) {
        null == e && (e = -1);
        this.left = a;
        this.key = b;
        this.value = c;
        this.right = d;
        this._height = -1 == e ? (function(a) { a = a.left; return null == a ? 0 : a._height }(this) > function(a) { a = a.right; return null == a ? 0 : a._height }(this) ? function(a) { a = a.left; return null == a ? 0 : a._height }(this) :
            function(a) { a = a.right; return null == a ? 0 : a._height }(this)) + 1 : e
    };
    h["haxe.ds.TreeNode"] = eb;
    eb.__name__ = ["haxe", "ds", "TreeNode"];
    eb.prototype = { __class__: eb };
    var md = function() {};
    h["haxe.ds.EnumValueMap"] = md;
    md.__name__ = ["haxe", "ds", "EnumValueMap"];
    md.__interfaces__ = [Ic];
    md.__super__ = Ud;
    md.prototype = p(Ud.prototype, {
        compare: function(a, b) { var c = a[1] - b[1]; if (0 != c) return c; var c = a.slice(2),
                d = b.slice(2); return 0 == c.length && 0 == d.length ? 0 : this.compareArgs(c, d) },
        compareArgs: function(a, b) {
            var c = a.length - b.length;
            if (0 != c) return c;
            for (var c = 0, d = a.length; c < d;) { var e = c++,
                    e = this.compareArg(a[e], b[e]); if (0 != e) return e }
            return 0
        },
        compareArg: function(a, b) { return L.isEnumValue(a) && L.isEnumValue(b) ? this.compare(a, b) : a instanceof Array && null == a.__enum__ && b instanceof Array && null == b.__enum__ ? this.compareArgs(a, b) : L.compare(a, b) },
        __class__: md
    });
    var nb = function() { this.h = {} };
    h["haxe.ds.IntMap"] = nb;
    nb.__name__ = ["haxe", "ds", "IntMap"];
    nb.__interfaces__ = [Ic];
    nb.prototype = {
        set: function(a, b) { this.h[a] = b },
        get: function(a) { return this.h[a] },
        remove: function(a) { if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a]; return !0 },
        keys: function() { var a = [],
                b; for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0); return I.iter(a) },
        __class__: nb
    };
    var Qb = function() { this.h = {};
        this.h.__keys__ = {} };
    h["haxe.ds.ObjectMap"] = Qb;
    Qb.__name__ = ["haxe", "ds", "ObjectMap"];
    Qb.__interfaces__ = [Ic];
    Qb.prototype = {
        set: function(a, b) { var c = a.__id__ || (a.__id__ = ++Qb.count);
            this.h[c] = b;
            this.h.__keys__[c] = a },
        get: function(a) { return this.h[a.__id__] },
        remove: function(a) {
            a = a.__id__;
            if (null == this.h.__keys__[a]) return !1;
            delete this.h[a];
            delete this.h.__keys__[a];
            return !0
        },
        keys: function() { var a = [],
                b; for (b in this.h.__keys__) this.h.hasOwnProperty(b) && a.push(this.h.__keys__[b]); return I.iter(a) },
        iterator: function() { return { ref: this.h, it: this.keys(), hasNext: function() { return this.it.hasNext() }, next: function() { var a = this.it.next(); return this.ref[a.__id__] } } },
        __class__: Qb
    };
    var Vd = function(a, b) { this.map = a;
        this.keys = b;
        this.index = 0;
        this.count = b.length };
    h["haxe.ds._StringMap.StringMapIterator"] =
        Vd;
    Vd.__name__ = ["haxe", "ds", "_StringMap", "StringMapIterator"];
    Vd.prototype = { hasNext: function() { return this.index < this.count }, next: function() { return this.map.get(this.keys[this.index++]) }, __class__: Vd };
    var W = function() { this.h = {} };
    h["haxe.ds.StringMap"] = W;
    W.__name__ = ["haxe", "ds", "StringMap"];
    W.__interfaces__ = [Ic];
    W.prototype = {
        set: function(a, b) { null != Za[a] ? this.setReserved(a, b) : this.h[a] = b },
        get: function(a) { return null != Za[a] ? this.getReserved(a) : this.h[a] },
        exists: function(a) {
            return null != Za[a] ? this.existsReserved(a) :
                this.h.hasOwnProperty(a)
        },
        setReserved: function(a, b) { null == this.rh && (this.rh = {});
            this.rh["$" + a] = b },
        getReserved: function(a) { return null == this.rh ? null : this.rh["$" + a] },
        existsReserved: function(a) { return null == this.rh ? !1 : this.rh.hasOwnProperty("$" + a) },
        remove: function(a) { if (null != Za[a]) { a = "$" + a; if (null == this.rh || !this.rh.hasOwnProperty(a)) return !1;
                delete this.rh[a] } else { if (!this.h.hasOwnProperty(a)) return !1;
                delete this.h[a] } return !0 },
        keys: function() { var a = this.arrayKeys(); return I.iter(a) },
        arrayKeys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b);
            if (null != this.rh)
                for (b in this.rh) 36 == b.charCodeAt(0) && a.push(b.substr(1));
            return a
        },
        iterator: function() { return new Vd(this, this.arrayKeys()) },
        __class__: W
    };
    var ob = h["haxe.io.Error"] = { __ename__: ["haxe", "io", "Error"], __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"] };
    ob.Blocked = ["Blocked", 0];
    ob.Blocked.toString = l;
    ob.Blocked.__enum__ = ob;
    ob.Overflow = ["Overflow", 1];
    ob.Overflow.toString = l;
    ob.Overflow.__enum__ = ob;
    ob.OutsideBounds = ["OutsideBounds",
        2
    ];
    ob.OutsideBounds.toString = l;
    ob.OutsideBounds.__enum__ = ob;
    ob.Custom = function(a) { a = ["Custom", 3, a];
        a.__enum__ = ob;
        a.toString = l; return a };
    var Rb = function() {};
    h["haxe.io.FPHelper"] = Rb;
    Rb.__name__ = ["haxe", "io", "FPHelper"];
    Rb.i32ToFloat = function(a) { var b = a >>> 23 & 255,
            c = a & 8388607; return 0 == c && 0 == b ? 0 : (1 - (a >>> 31 << 1)) * (1 + Math.pow(2, -23) * c) * Math.pow(2, b - 127) };
    Rb.floatToI32 = function(a) {
        if (0 == a) return 0;
        var b;
        b = 0 > a ? -a : a;
        var c = Math.floor(Math.log(b) / 0.6931471805599453); - 127 > c ? c = -127 : 128 < c && (c = 128);
        b = Math.round(8388608 *
            (b / Math.pow(2, c) - 1)) & 8388607;
        return (0 > a ? -2147483648 : 0) | c + 127 << 23 | b
    };
    Rb.i64ToDouble = function(a, b) { var c = (b >> 20 & 2047) - 1023,
            d = 4294967296 * (b & 1048575) + 2147483648 * (a >>> 31) + (a & 2147483647); return 0 == d && -1023 == c ? 0 : (1 - (b >>> 31 << 1)) * (1 + Math.pow(2, -52) * d) * Math.pow(2, c) };
    Rb.doubleToI64 = function(a) {
        var b = Rb.i64tmp;
        if (0 == a) b.low = 0, b.high = 0;
        else {
            var c;
            c = 0 > a ? -a : a;
            var d = Math.floor(Math.log(c) / 0.6931471805599453);
            c = 4503599627370496 * (c / Math.pow(2, d) - 1);
            c = Math.round(c);
            b.low = c | 0;
            b.high = (0 > a ? -2147483648 : 0) | d + 1023 << 20 | c /
                4294967296 | 0
        }
        return b
    };
    var ya = h["haxe.rtti.CType"] = { __ename__: ["haxe", "rtti", "CType"], __constructs__: "CUnknown CEnum CClass CTypedef CFunction CAnonymous CDynamic CAbstract".split(" ") };
    ya.CUnknown = ["CUnknown", 0];
    ya.CUnknown.toString = l;
    ya.CUnknown.__enum__ = ya;
    ya.CEnum = function(a, b) { var c = ["CEnum", 1, a, b];
        c.__enum__ = ya;
        c.toString = l; return c };
    ya.CClass = function(a, b) { var c = ["CClass", 2, a, b];
        c.__enum__ = ya;
        c.toString = l; return c };
    ya.CTypedef = function(a, b) {
        var c = ["CTypedef", 3, a, b];
        c.__enum__ = ya;
        c.toString =
            l;
        return c
    };
    ya.CFunction = function(a, b) { var c = ["CFunction", 4, a, b];
        c.__enum__ = ya;
        c.toString = l; return c };
    ya.CAnonymous = function(a) { a = ["CAnonymous", 5, a];
        a.__enum__ = ya;
        a.toString = l; return a };
    ya.CDynamic = function(a) { a = ["CDynamic", 6, a];
        a.__enum__ = ya;
        a.toString = l; return a };
    ya.CAbstract = function(a, b) { var c = ["CAbstract", 7, a, b];
        c.__enum__ = ya;
        c.toString = l; return c };
    var ra = h["haxe.rtti.Rights"] = { __ename__: ["haxe", "rtti", "Rights"], __constructs__: "RNormal RNo RCall RMethod RDynamic RInline".split(" ") };
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
    ra.RMethod.__enum__ = ra;
    ra.RDynamic = ["RDynamic", 4];
    ra.RDynamic.toString = l;
    ra.RDynamic.__enum__ = ra;
    ra.RInline = ["RInline", 5];
    ra.RInline.toString = l;
    ra.RInline.__enum__ = ra;
    var zb = h["haxe.rtti.TypeTree"] = {
        __ename__: ["haxe", "rtti", "TypeTree"],
        __constructs__: ["TPackage", "TClassdecl",
            "TEnumdecl", "TTypedecl", "TAbstractdecl"
        ]
    };
    zb.TPackage = function(a, b, c) { a = ["TPackage", 0, a, b, c];
        a.__enum__ = zb;
        a.toString = l; return a };
    zb.TClassdecl = function(a) { a = ["TClassdecl", 1, a];
        a.__enum__ = zb;
        a.toString = l; return a };
    zb.TEnumdecl = function(a) { a = ["TEnumdecl", 2, a];
        a.__enum__ = zb;
        a.toString = l; return a };
    zb.TTypedecl = function(a) { a = ["TTypedecl", 3, a];
        a.__enum__ = zb;
        a.toString = l; return a };
    zb.TAbstractdecl = function(a) { a = ["TAbstractdecl", 4, a];
        a.__enum__ = zb;
        a.toString = l; return a };
    var Wd = function() {};
    h["haxe.rtti.Meta"] =
        Wd;
    Wd.__name__ = ["haxe", "rtti", "Meta"];
    Wd.getType = function(a) { a = Wd.getMeta(a); return null == a || null == a.obj ? {} : a.obj };
    Wd.getMeta = function(a) { return a.__meta__ };
    var tg = function() { this.root = [] };
    h["haxe.rtti.XmlParser"] = tg;
    tg.__name__ = ["haxe", "rtti", "XmlParser"];
    tg.prototype = {
        mkPath: function(a) { return a },
        mkTypeParams: function(a) { a = a.split(":"); return "" == a[0] ? [] : a },
        mkRights: function(a) {
            switch (a) {
                case "null":
                    return ra.RNo;
                case "method":
                    return ra.RMethod;
                case "dynamic":
                    return ra.RDynamic;
                case "inline":
                    return ra.RInline;
                default:
                    return ra.RCall(a)
            }
        },
        xerror: function(a) { throw new A("Invalid " + a.get_name()); },
        processElement: function(a) { a = new pb(a); switch (a.get_name()) {
                case "class":
                    return zb.TClassdecl(this.xclass(a));
                case "enum":
                    return zb.TEnumdecl(this.xenum(a));
                case "typedef":
                    return zb.TTypedecl(this.xtypedef(a));
                case "abstract":
                    return zb.TAbstractdecl(this.xabstract(a));
                default:
                    return this.xerror(a) } },
        xmeta: function(a) {
            var b = [];
            for (a = a.nodes.resolve("m").iterator(); null != a.head;) {
                var c;
                a.val = a.head[0];
                a.head = a.head[1];
                c = a.val;
                for (var d = [], e = c.nodes.resolve("e").iterator(); null != e.head;) e.val = e.head[0], e.head = e.head[1], d.push(e.val.get_innerHTML());
                b.push({ name: c.att.resolve("n"), params: d })
            }
            return b
        },
        xoverloads: function(a) { var b = new Ja; for (a = a.get_elements(); a.hasNext();) { var c = a.next();
                b.add(this.xclassfield(c)) } return b },
        xpath: function(a) { var b = this.mkPath(a.att.resolve("path")),
                c = new Ja; for (a = a.get_elements(); a.hasNext();) { var d = a.next();
                c.add(this.xtype(d)) } return { path: b, params: c } },
        xclass: function(a) {
            for (var b =
                    null, c = null, d = null, e = new Ja, k = new Ja, w = new Ja, g = [], f = a.get_elements(); f.hasNext();) { var h = f.next(); switch (h.get_name()) {
                    case "haxe_doc":
                        c = h.get_innerData(); break;
                    case "extends":
                        b = this.xpath(h); break;
                    case "implements":
                        e.add(this.xpath(h)); break;
                    case "haxe_dynamic":
                        d = this.xtype(new pb(h.x.firstElement())); break;
                    case "meta":
                        g = this.xmeta(h); break;
                    default:
                        h.x.exists("static") ? w.add(this.xclassfield(h)) : k.add(this.xclassfield(h)) } }
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
                fields: k,
                statics: w,
                tdynamic: d,
                platforms: this.defplat(),
                meta: g
            }
        },
        xclassfield: function(a, b) {
            null == b && (b = !1);
            for (var c = a.get_elements(), d = this.xtype(c.next()), e = null, k = [], w = null; c.hasNext();) {
                var g = c.next();
                switch (g.get_name()) {
                    case "haxe_doc":
                        e = g.get_innerData();
                        break;
                    case "meta":
                        k = this.xmeta(g);
                        break;
                    case "overloads":
                        w = this.xoverloads(g);
                        break;
                    default:
                        this.xerror(g)
                }
            }
            return {
                name: a.get_name(),
                type: d,
                isPublic: a.x.exists("public") || b,
                isOverride: a.x.exists("override"),
                line: a.has.resolve("line") ? H.parseInt(a.att.resolve("line")) : null,
                doc: e,
                get: a.has.resolve("get") ? this.mkRights(a.att.resolve("get")) : ra.RNormal,
                set: a.has.resolve("set") ? this.mkRights(a.att.resolve("set")) : ra.RNormal,
                params: a.has.resolve("params") ? this.mkTypeParams(a.att.resolve("params")) : [],
                platforms: this.defplat(),
                meta: k,
                overloads: w,
                expr: a.has.resolve("expr") ? a.att.resolve("expr") : null
            }
        },
        xenum: function(a) {
            for (var b = new Ja, c = null, d = [], e = a.get_elements(); e.hasNext();) { var k = e.next(); "haxe_doc" == k.get_name() ? c = k.get_innerData() : "meta" == k.get_name() ? d = this.xmeta(k) : b.add(this.xenumfield(k)) }
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
                for (var e = a.att.resolve("a").split(":"), k = a.get_elements(), b = new Ja, w = 0; w < e.length;) { var g = e[w];++w; var f = !1; "?" == g.charAt(0) && (f = !0, g = I.substr(g, 1, null));
                    b.add({ name: g, opt: f, t: this.xtype(k.next()) }) }
            return {
                name: a.get_name(),
                args: b,
                doc: null ==
                    c ? null : (new pb(c)).get_innerData(),
                meta: d,
                platforms: this.defplat()
            }
        },
        xabstract: function(a) {
            for (var b = null, c = null, d = null, e = [], k = [], w = [], g = a.get_elements(); g.hasNext();) {
                var f = g.next();
                switch (f.get_name()) {
                    case "haxe_doc":
                        b = f.get_innerData();
                        break;
                    case "meta":
                        e = this.xmeta(f);
                        break;
                    case "to":
                        for (f = f.get_elements(); f.hasNext();) { var h = f.next();
                            k.push({ t: this.xtype(new pb(h.x.firstElement())), field: h.has.resolve("field") ? h.att.resolve("field") : null }) }
                        break;
                    case "from":
                        for (f = f.get_elements(); f.hasNext();) h =
                            f.next(), w.push({ t: this.xtype(new pb(h.x.firstElement())), field: h.has.resolve("field") ? h.att.resolve("field") : null });
                        break;
                    case "impl":
                        c = this.xclass(f.node.resolve("class"));
                        break;
                    case "this":
                        d = this.xtype(new pb(f.x.firstElement()));
                        break;
                    default:
                        this.xerror(f)
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
                to: k,
                from: w,
                impl: c
            }
        },
        xtypedef: function(a) {
            for (var b = null, c = null, d = [], e = a.get_elements(); e.hasNext();) { var k = e.next(); "haxe_doc" == k.get_name() ? b = k.get_innerData() : "meta" == k.get_name() ? d = this.xmeta(k) : c = this.xtype(k) } e = new W;
            null != this.curplatform && e.set(this.curplatform, c);
            return {
                file: a.has.resolve("file") ? a.att.resolve("file") : null,
                path: this.mkPath(a.att.resolve("path")),
                module: a.has.resolve("module") ? this.mkPath(a.att.resolve("module")) : null,
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
                    return ya.CUnknown;
                case "e":
                    return ya.CEnum(this.mkPath(a.att.resolve("path")), this.xtypeparams(a));
                case "c":
                    return ya.CClass(this.mkPath(a.att.resolve("path")), this.xtypeparams(a));
                case "t":
                    return ya.CTypedef(this.mkPath(a.att.resolve("path")), this.xtypeparams(a));
                case "x":
                    return ya.CAbstract(this.mkPath(a.att.resolve("path")), this.xtypeparams(a));
                case "f":
                    var b = new Ja,
                        c = a.att.resolve("a").split(":"),
                        c = I.iter(c),
                        d;
                    a.has.resolve("v") ? (d = a.att.resolve("v").split(":"), d = I.iter(d)) : d = null;
                    for (a = a.get_elements(); a.hasNext();) { var e = a.next(),
                            k = !1,
                            w = c.next();
                        null == w && (w = ""); "?" == w.charAt(0) && (k = !0, w = I.substr(w, 1, null)); var g;
                        g = null == d ? null : d.next();
                        b.add({ name: w, opt: k, t: this.xtype(e), value: "" == g ? null : g }) } c = b.last();
                    b.remove(c);
                    return ya.CFunction(b, c.t);
                case "a":
                    b = new Ja;
                    for (c = a.get_elements(); c.hasNext();) d = c.next(), d = this.xclassfield(d, !0), d.platforms =
                        new Ja, b.add(d);
                    return ya.CAnonymous(b);
                case "d":
                    return b = null, c = a.x.firstElement(), null != c && (b = this.xtype(new pb(c))), ya.CDynamic(b);
                default:
                    return this.xerror(a)
            }
        },
        xtypeparams: function(a) { var b = new Ja; for (a = a.get_elements(); a.hasNext();) { var c = a.next();
                b.add(this.xtype(c)) } return b },
        defplat: function() { var a = new Ja;
            null != this.curplatform && a.add(this.curplatform); return a },
        __class__: tg
    };
    var ug = function(a) { this.__x = a };
    h["haxe.xml._Fast.NodeAccess"] = ug;
    ug.__name__ = ["haxe", "xml", "_Fast", "NodeAccess"];
    ug.prototype = { resolve: function(a) { var b = this.__x.elementsNamed(a).next(); if (null == b) throw b = this.__x.nodeType == B.Document ? "Document" : this.__x.get_nodeName(), new A(b + " is missing element " + a); return new pb(b) }, __class__: ug };
    var vg = function(a) { this.__x = a };
    h["haxe.xml._Fast.AttribAccess"] = vg;
    vg.__name__ = ["haxe", "xml", "_Fast", "AttribAccess"];
    vg.prototype = {
        resolve: function(a) {
            if (this.__x.nodeType == B.Document) throw new A("Cannot access document attribute " + a);
            var b = this.__x.get(a);
            if (null == b) throw new A(this.__x.get_nodeName() +
                " is missing attribute " + a);
            return b
        },
        __class__: vg
    };
    var wg = function(a) { this.__x = a };
    h["haxe.xml._Fast.HasAttribAccess"] = wg;
    wg.__name__ = ["haxe", "xml", "_Fast", "HasAttribAccess"];
    wg.prototype = { resolve: function(a) { if (this.__x.nodeType == B.Document) throw new A("Cannot access document attribute " + a); return this.__x.exists(a) }, __class__: wg };
    var xg = function(a) { this.__x = a };
    h["haxe.xml._Fast.HasNodeAccess"] = xg;
    xg.__name__ = ["haxe", "xml", "_Fast", "HasNodeAccess"];
    xg.prototype = {
        resolve: function(a) { return this.__x.elementsNamed(a).hasNext() },
        __class__: xg
    };
    var yg = function(a) { this.__x = a };
    h["haxe.xml._Fast.NodeListAccess"] = yg;
    yg.__name__ = ["haxe", "xml", "_Fast", "NodeListAccess"];
    yg.prototype = { resolve: function(a) { var b = new Ja; for (a = this.__x.elementsNamed(a); a.hasNext();) { var c = a.next();
                b.add(new pb(c)) } return b }, __class__: yg };
    var pb = function(a) { if (a.nodeType != B.Document && a.nodeType != B.Element) throw new A("Invalid nodeType " + a.nodeType);
        this.x = a;
        this.node = new ug(a);
        this.nodes = new yg(a);
        this.att = new vg(a);
        this.has = new wg(a);
        this.hasNode = new xg(a) };
    h["haxe.xml.Fast"] = pb;
    pb.__name__ = ["haxe", "xml", "Fast"];
    pb.prototype = {
        get_name: function() { return this.x.nodeType == B.Document ? "Document" : this.x.get_nodeName() },
        get_innerData: function() {
            var a = this.x.iterator();
            if (!a.hasNext()) throw new A(this.get_name() + " does not have data");
            var b = a.next(),
                c = a.next();
            if (null != c) {
                if (b.nodeType == B.PCData && c.nodeType == B.CData && "" == Z.trim(function(a) { if (b.nodeType == B.Document || b.nodeType == B.Element) throw new A("Bad node type, unexpected " + b.nodeType); return b.nodeValue }(this))) {
                    var d =
                        a.next();
                    if (null == d || d.nodeType == B.PCData && "" == Z.trim(function(a) { if (d.nodeType == B.Document || d.nodeType == B.Element) throw new A("Bad node type, unexpected " + d.nodeType); return d.nodeValue }(this)) && null == a.next()) { if (c.nodeType == B.Document || c.nodeType == B.Element) throw new A("Bad node type, unexpected " + c.nodeType); return c.nodeValue }
                }
                throw new A(this.get_name() + " does not only have data");
            }
            if (b.nodeType != B.PCData && b.nodeType != B.CData) throw new A(this.get_name() + " does not have data");
            if (b.nodeType ==
                B.Document || b.nodeType == B.Element) throw new A("Bad node type, unexpected " + b.nodeType);
            return b.nodeValue
        },
        get_innerHTML: function() { for (var a = new lb, b = this.x.iterator(); b.hasNext();) { var c = b.next();
                a.add(nd.print(c)) } return a.b },
        get_elements: function() { var a = this.x.elements(); return { hasNext: G(a, a.hasNext), next: function() { var b = a.next(); return null == b ? null : new pb(b) } } },
        __class__: pb,
        __properties__: { get_elements: "get_elements", get_innerHTML: "get_innerHTML", get_innerData: "get_innerData", get_name: "get_name" }
    };
    var fc = function() {};
    h["haxe.xml.Parser"] = fc;
    fc.__name__ = ["haxe", "xml", "Parser"];
    fc.parse = function(a, b) { null == b && (b = !1); var c = B.createDocument();
        fc.doParse(a, b, 0, c); return c };
    fc.doParse = function(a, b, c, d) {
        null == c && (c = 0);
        for (var e = null, k = 1, w = 1, g = null, f = 0, h = 0, l = 0, m = a.charCodeAt(c), n = new lb, p = 1, q = -1; m == m;) {
            switch (k) {
                case 0:
                    switch (m) {
                        case 10:
                        case 13:
                        case 9:
                        case 32:
                            break;
                        default:
                            k = w; continue }
                    break;
                case 1:
                    switch (m) {
                        case 60:
                            k = 0;
                            w = 2; break;
                        default:
                            f = c;
                            k = 13; continue }
                    break;
                case 13:
                    60 == m ? (n.addSub(a, f, c - f), w = B.createPCData(n.b),
                        n = new lb, d.addChild(w), h++, k = 0, w = 2) : 38 == m && (n.addSub(a, f, c - f), k = 18, p = 13, f = c + 1);
                    break;
                case 17:
                    93 == m && 93 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (m = B.createCData(I.substr(a, f, c - f)), d.addChild(m), h++, c += 2, k = 1);
                    break;
                case 2:
                    switch (m) {
                        case 33:
                            if (91 == a.charCodeAt(c + 1)) { c += 2; if ("CDATA[" != I.substr(a, c, 6).toUpperCase()) throw new A("Expected <![CDATA[");
                                c += 5;
                                k = 17 } else if (68 == a.charCodeAt(c + 1) || 100 == a.charCodeAt(c + 1)) { if ("OCTYPE" != I.substr(a, c + 2, 6).toUpperCase()) throw new A("Expected <!DOCTYPE");
                                c += 8;
                                k = 16 } else {
                                if (45 !=
                                    a.charCodeAt(c + 1) || 45 != a.charCodeAt(c + 2)) throw new A("Expected \x3c!--");
                                c += 2;
                                k = 15
                            }
                            f = c + 1;
                            break;
                        case 63:
                            k = 14;
                            f = c;
                            break;
                        case 47:
                            if (null == d) throw new A("Expected node name");
                            f = c + 1;
                            k = 0;
                            w = 10;
                            break;
                        default:
                            k = 3;
                            f = c;
                            continue
                    }
                    break;
                case 3:
                    if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) { if (c == f) throw new A("Expected node name");
                        e = B.createElement(I.substr(a, f, c - f));
                        d.addChild(e);
                        h++;
                        k = 0;
                        w = 4; continue }
                    break;
                case 4:
                    switch (m) {
                        case 47:
                            k = 11; break;
                        case 62:
                            k = 9; break;
                        default:
                            k = 5;
                            f = c; continue }
                    break;
                case 5:
                    if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) { if (f == c) throw new A("Expected attribute name");
                        g = I.substr(a, f, c - f); if (e.exists(g)) throw new A("Duplicate attribute");
                        k = 0;
                        w = 6; continue }
                    break;
                case 6:
                    switch (m) {
                        case 61:
                            k = 0;
                            w = 7; break;
                        default:
                            throw new A("Expected ="); }
                    break;
                case 7:
                    switch (m) {
                        case 34:
                        case 39:
                            n = new lb;
                            k = 8;
                            f = c + 1;
                            q = m; break;
                        default:
                            throw new A('Expected "'); }
                    break;
                case 8:
                    switch (m) {
                        case 38:
                            n.addSub(a, f, c - f);
                            k = 18;
                            p = 8;
                            f = c + 1;
                            break;
                        case 62:
                            if (b) throw new A("Invalid unescaped " +
                                String.fromCharCode(m) + " in attribute value");
                            m == q && (n.addSub(a, f, c - f), w = n.b, n = new lb, e.set(g, w), k = 0, w = 4);
                            break;
                        case 60:
                            if (b) throw new A("Invalid unescaped " + String.fromCharCode(m) + " in attribute value");
                            m == q && (n.addSub(a, f, c - f), w = n.b, n = new lb, e.set(g, w), k = 0, w = 4);
                            break;
                        default:
                            m == q && (n.addSub(a, f, c - f), w = n.b, n = new lb, e.set(g, w), k = 0, w = 4)
                    }
                    break;
                case 9:
                    f = c = fc.doParse(a, b, c, e);
                    k = 1;
                    break;
                case 11:
                    switch (m) {
                        case 62:
                            k = 1; break;
                        default:
                            throw new A("Expected >"); }
                    break;
                case 12:
                    switch (m) {
                        case 62:
                            return 0 == h &&
                                d.addChild(B.createPCData("")), c;
                        default:
                            throw new A("Expected >");
                    }
                case 10:
                    if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m)) { if (f == c) throw new A("Expected node name");
                        w = I.substr(a, f, c - f); if (d.nodeType != B.Element) throw new A("Bad node type, expected Element but found " + d.nodeType); if (w != d.nodeName) throw new A("Expected </" + function(a) { if (d.nodeType != B.Element) throw "Bad node type, expected Element but found " + d.nodeType; return d.nodeName }(this) + ">");
                        k = 0;
                        w = 12; continue }
                    break;
                case 15:
                    45 == m && 45 == a.charCodeAt(c + 1) && 62 == a.charCodeAt(c + 2) && (m = B.createComment(I.substr(a, f, c - f)), d.addChild(m), h++, c += 2, k = 1);
                    break;
                case 16:
                    91 == m ? l++ : 93 == m ? l-- : 62 == m && 0 == l && (m = B.createDocType(I.substr(a, f, c - f)), d.addChild(m), h++, k = 1);
                    break;
                case 14:
                    63 == m && 62 == a.charCodeAt(c + 1) && (c++, m = I.substr(a, f + 1, c - f - 2), m = B.createProcessingInstruction(m), d.addChild(m), h++, k = 1);
                    break;
                case 18:
                    if (59 == m) {
                        f = I.substr(a, f, c - f);
                        if (35 == f.charCodeAt(0)) f = 120 == f.charCodeAt(1) ? H.parseInt("0" + I.substr(f, 1, f.length - 1)) : H.parseInt(I.substr(f,
                            1, f.length - 1)), n.b += String.fromCharCode(f);
                        else if (fc.escapes.exists(f)) n.add(fc.escapes.get(f));
                        else { if (b) throw new A("Undefined entity: " + f);
                            n.b += H.string("&" + f + ";") } f = c + 1;
                        k = p
                    } else if (!(97 <= m && 122 >= m || 65 <= m && 90 >= m || 48 <= m && 57 >= m || 58 == m || 46 == m || 95 == m || 45 == m) && 35 != m) { if (b) throw new A("Invalid character in entity: " + String.fromCharCode(m));
                        n.b += "&";
                        n.addSub(a, f, c - f);
                        c--;
                        f = c + 1;
                        k = p }
            }
            m = Z.fastCodeAt(a, ++c)
        }
        1 == k && (f = c, k = 13);
        if (13 == k) {
            if (c != f || 0 == h) n.addSub(a, f, c - f), a = B.createPCData(n.b), d.addChild(a), h++;
            return c
        }
        if (!b && 18 == k && 13 == p) return n.b += "&", n.addSub(a, f, c - f), a = B.createPCData(n.b), d.addChild(a), h++, c;
        throw new A("Unexpected end");
    };
    var nd = function(a) { this.output = new lb;
        this.pretty = a };
    h["haxe.xml.Printer"] = nd;
    nd.__name__ = ["haxe", "xml", "Printer"];
    nd.print = function(a, b) { null == b && (b = !1); var c = new nd(b);
        c.writeNode(a, ""); return c.output.b };
    nd.prototype = {
        writeNode: function(a, b) {
            switch (a.nodeType) {
                case 2:
                    this.output.b += H.string(b + "<![CDATA[");
                    this.write(Z.trim(function(b) {
                        if (a.nodeType == B.Document ||
                            a.nodeType == B.Element) throw new A("Bad node type, unexpected " + a.nodeType);
                        return a.nodeValue
                    }(this)));
                    this.output.b += "]]\x3e";
                    this.pretty && (this.output.b += "");
                    break;
                case 3:
                    var c;
                    if (a.nodeType == B.Document || a.nodeType == B.Element) throw new A("Bad node type, unexpected " + a.nodeType);
                    c = a.nodeValue;
                    c = (new q("[\n\r\t]+", "g")).replace(c, "");
                    this.output.b = null == b ? this.output.b + "null" : this.output.b + ("" + b);
                    this.write(Z.trim("\x3c!--" + c + "--\x3e"));
                    this.pretty && (this.output.b += "");
                    break;
                case 6:
                    if (a.nodeType !=
                        B.Document && a.nodeType != B.Element) throw new A("Bad node type, expected Element or Document but found " + a.nodeType);
                    for (c = I.iter(a.children); c.hasNext();) { var d = c.next();
                        this.writeNode(d, b) }
                    break;
                case 0:
                    this.output.b += H.string(b + "<");
                    this.write(function(b) { if (a.nodeType != B.Element) throw new A("Bad node type, expected Element but found " + a.nodeType); return a.nodeName }(this));
                    for (c = a.attributes(); c.hasNext();) d = c.next(), this.output.b += H.string(" " + d + '="'), this.write(Z.htmlEscape(a.get(d), !0)), this.output.b +=
                        '"';
                    if (this.hasChildren(a)) { this.output.b += ">";
                        this.pretty && (this.output.b += ""); if (a.nodeType != B.Document && a.nodeType != B.Element) throw new A("Bad node type, expected Element or Document but found " + a.nodeType); for (c = I.iter(a.children); c.hasNext();) d = c.next(), this.writeNode(d, this.pretty ? b + "\t" : b);
                        this.output.b += H.string(b + "</");
                        this.write(function(b) { if (a.nodeType != B.Element) throw new A("Bad node type, expected Element but found " + a.nodeType); return a.nodeName }(this));
                        this.output.b += ">" } else this.output.b +=
                        "/>";
                    this.pretty && (this.output.b += "");
                    break;
                case 1:
                    if (a.nodeType == B.Document || a.nodeType == B.Element) throw new A("Bad node type, unexpected " + a.nodeType);
                    c = a.nodeValue;
                    0 != c.length && (this.write(b + Z.htmlEscape(c)), this.pretty && (this.output.b += ""));
                    break;
                case 5:
                    this.write("<?" + function(b) { if (a.nodeType == B.Document || a.nodeType == B.Element) throw new A("Bad node type, unexpected " + a.nodeType); return a.nodeValue }(this) + "?>");
                    break;
                case 4:
                    this.write("<!DOCTYPE " + function(b) {
                        if (a.nodeType == B.Document || a.nodeType ==
                            B.Element) throw new A("Bad node type, unexpected " + a.nodeType);
                        return a.nodeValue
                    }(this) + ">")
            }
        },
        write: function(a) { this.output.b = null == a ? this.output.b + "null" : this.output.b + ("" + a) },
        hasChildren: function(a) {
            if (a.nodeType != B.Document && a.nodeType != B.Element) throw new A("Bad node type, expected Element or Document but found " + a.nodeType);
            for (a = I.iter(a.children); a.hasNext();) {
                var b = a.next();
                switch (b.nodeType) {
                    case 0:
                    case 1:
                        return !0;
                    case 2:
                    case 3:
                        if (0 != Z.ltrim(function(a) {
                                if (b.nodeType == B.Document || b.nodeType ==
                                    B.Element) throw new A("Bad node type, unexpected " + b.nodeType);
                                return b.nodeValue
                            }(this)).length) return !0
                }
            }
            return !1
        },
        __class__: nd
    };
    var A = function(a) { Error.call(this);
        this.val = a;
        this.message = String(a);
        Error.captureStackTrace && Error.captureStackTrace(this, A) };
    h["js._Boot.HaxeError"] = A;
    A.__name__ = ["js", "_Boot", "HaxeError"];
    A.__super__ = Error;
    A.prototype = p(Error.prototype, { __class__: A });
    var V = function() {};
    h["js.Boot"] = V;
    V.__name__ = ["js", "Boot"];
    V.getClass = function(a) {
        if (a instanceof Array && null == a.__enum__) return Array;
        var b = a.__class__;
        if (null != b) return b;
        a = V.__nativeClassName(a);
        return null != a ? V.__resolveNativeClass(a) : null
    };
    V.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        "function" == c && (a.__name__ || a.__ename__) && (c = "object");
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) { if (2 == a.length) return a[0];
                        c = a[0] + "(";
                        b += "\t"; for (var d = 2, e = a.length; d < e;) var k = d++,
                            c = 2 != k ? c + ("," + V.__string_rec(a[k], b)) : c + V.__string_rec(a[k], b); return c + ")" } c = a.length;
                    d = "[";
                    b += "\t";
                    for (e = 0; e < c;) k = e++, d += (0 < k ? "," : "") + V.__string_rec(a[k], b);
                    return d + "]"
                }
                try { d = a.toString } catch (w) { return w instanceof A && (w = w.val), "???" }
                if (null != d && d != Object.toString && "function" == typeof d && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                d = "{\n";
                b += "\t";
                e = null != a.hasOwnProperty;
                for (c in a) e && !a.hasOwnProperty(c) || "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" == c || (2 != d.length && (d += ", \n"), d += b + c + " : " + V.__string_rec(a[c], b));
                b = b.substring(1);
                return d +
                    ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return String(a)
        }
    };
    V.__interfLoop = function(a, b) { if (null == a) return !1; if (a == b) return !0; var c = a.__interfaces__; if (null != c)
            for (var d = 0, e = c.length; d < e;) { var k = d++,
                    k = c[k]; if (k == b || V.__interfLoop(k, b)) return !0 }
        return V.__interfLoop(a.__super__, b) };
    V.__instanceof = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case pi:
                return (a | 0) === a;
            case ji:
                return "number" == typeof a;
            case ki:
                return "boolean" == typeof a;
            case String:
                return "string" == typeof a;
            case Array:
                return a instanceof Array && null == a.__enum__;
            case qi:
                return !0;
            default:
                if (null != a)
                    if ("function" == typeof b) { if (a instanceof b || V.__interfLoop(V.getClass(a), b)) return !0 } else { if ("object" == typeof b && V.__isNativeObj(b) && a instanceof b) return !0 }
                else return !1;
                return b == hi && null != a.__name__ || b == ii && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    V.__cast = function(a, b) { if (V.__instanceof(a, b)) return a; throw new A("Cannot cast " + H.string(a) + " to " + H.string(b)); };
    V.__nativeClassName = function(a) {
        a = V.__toStr.call(a).slice(8,
            -1);
        return "Object" == a || "Function" == a || "Math" == a || "JSON" == a ? null : a
    };
    V.__isNativeObj = function(a) { return null != V.__nativeClassName(a) };
    V.__resolveNativeClass = function(a) { return ei[a] };
    var Lh = function() {};
    h["js.Browser"] = Lh;
    Lh.__name__ = ["js", "Browser"];
    Lh.createXMLHttpRequest = function() { if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest; if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP"); throw new A("Unable to create XMLHttpRequest object."); };
    var Nh = function() {};
    h["js.html._CanvasElement.CanvasUtil"] = Nh;
    Nh.__name__ = ["js", "html", "_CanvasElement", "CanvasUtil"];
    Nh.getContextWebGL = function(a, b) { for (var c = 0, d = ["webgl", "experimental-webgl"]; c < d.length;) { var e = d[c];++c;
            e = a.getContext(e, b); if (null != e) return e } return null };
    var Sb = function(a) { if (a instanceof Array && null == a.__enum__) this.a = a, this.byteLength = a.length;
        else { this.a = []; for (var b = 0; b < a;) { var c = b++;
                this.a[c] = 0 } this.byteLength = a } };
    h["js.html.compat.ArrayBuffer"] = Sb;
    Sb.__name__ = ["js", "html", "compat", "ArrayBuffer"];
    Sb.sliceImpl = function(a, b) { var c = new fi(this, a, null == b ? null : b - a),
            d = new Mh(c.byteLength);
        (new fi(d)).set(c); return d };
    Sb.prototype = { slice: function(a, b) { return new Sb(this.a.slice(a, b)) }, __class__: Sb };
    var Oh = function(a, b, c) { this.buf = a;
        this.offset = null == b ? 0 : b;
        this.length = null == c ? a.byteLength - this.offset : c; if (0 > this.offset || 0 > this.length || this.offset + this.length > a.byteLength) throw new A(ob.OutsideBounds); };
    h["js.html.compat.DataView"] = Oh;
    Oh.__name__ = ["js", "html", "compat", "DataView"];
    Oh.prototype = {
        getInt8: function(a) {
            a =
                this.buf.a[this.offset + a];
            return 128 <= a ? a - 256 : a
        },
        getUint8: function(a) { return this.buf.a[this.offset + a] },
        getInt16: function(a, b) { var c = this.getUint16(a, b); return 32768 <= c ? c - 65536 : c },
        getUint16: function(a, b) { return b ? this.buf.a[this.offset + a] | this.buf.a[this.offset + a + 1] << 8 : this.buf.a[this.offset + a] << 8 | this.buf.a[this.offset + a + 1] },
        getInt32: function(a, b) { var c = this.offset + a,
                d = this.buf.a[c++],
                e = this.buf.a[c++],
                k = this.buf.a[c++],
                c = this.buf.a[c++]; return b ? d | e << 8 | k << 16 | c << 24 : c | k << 8 | e << 16 | d << 24 },
        getUint32: function(a,
            b) { var c = this.getInt32(a, b); return 0 > c ? c + 4294967296 : c },
        getFloat32: function(a, b) { return Rb.i32ToFloat(this.getInt32(a, b)) },
        getFloat64: function(a, b) { var c = this.getInt32(a, b),
                d = this.getInt32(a + 4, b); return Rb.i64ToDouble(b ? c : d, b ? d : c) },
        setInt8: function(a, b) { this.buf.a[a + this.offset] = 0 > b ? b + 128 & 255 : b & 255 },
        setUint8: function(a, b) { this.buf.a[a + this.offset] = b & 255 },
        setInt16: function(a, b, c) { this.setUint16(a, 0 > b ? b + 65536 : b, c) },
        setUint16: function(a, b, c) {
            a += this.offset;
            c ? (this.buf.a[a] = b & 255, this.buf.a[a++] = b >> 8 &
                255) : (this.buf.a[a++] = b >> 8 & 255, this.buf.a[a] = b & 255)
        },
        setInt32: function(a, b, c) { this.setUint32(a, b, c) },
        setUint32: function(a, b, c) { a += this.offset;
            c ? (this.buf.a[a++] = b & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >>> 24) : (this.buf.a[a++] = b >>> 24, this.buf.a[a++] = b >> 16 & 255, this.buf.a[a++] = b >> 8 & 255, this.buf.a[a++] = b & 255) },
        setFloat32: function(a, b, c) { this.setUint32(a, Rb.floatToI32(b), c) },
        setFloat64: function(a, b, c) {
            b = Rb.doubleToI64(b);
            c ? (this.setUint32(a, b.low), this.setUint32(a, b.high)) :
                (this.setUint32(a, b.high), this.setUint32(a, b.low))
        },
        __class__: Oh
    };
    var ic = function() {};
    h["js.html.compat.Uint8Array"] = ic;
    ic.__name__ = ["js", "html", "compat", "Uint8Array"];
    ic._new = function(a, b, c) {
        if ("number" == typeof a) { c = []; for (b = 0; b < a;) { var d = b++;
                c[d] = 0 } c.byteLength = c.length;
            c.byteOffset = 0;
            c.buffer = new Sb(c) } else if (V.__instanceof(a, Sb)) null == b && (b = 0), null == c && (c = a.byteLength - b), c = 0 == b ? a.a : a.a.slice(b, b + c), c.byteLength = c.length, c.byteOffset = b, c.buffer = a;
        else if (a instanceof Array && null == a.__enum__) c =
            a.slice(), c.byteLength = c.length, c.byteOffset = 0, c.buffer = new Sb(c);
        else throw new A("TODO " + H.string(a));
        c.subarray = ic._subarray;
        c.set = ic._set;
        return c
    };
    ic._set = function(a, b) {
        if (V.__instanceof(a.buffer, Sb)) { if (a.byteLength + b > this.byteLength) throw new A("set() outside of range"); for (var c = 0, d = a.byteLength; c < d;) { var e = c++;
                this[e + b] = a[e] } } else if (a instanceof Array && null == a.__enum__) { if (a.length + b > this.byteLength) throw new A("set() outside of range");
            c = 0; for (d = a.length; c < d;) e = c++, this[e + b] = a[e] } else throw new A("TODO");
    };
    ic._subarray = function(a, b) { var c = ic._new(this.slice(a, b));
        c.byteOffset = a; return c };
    var od = function() {};
    h["kit.asset.AssetPack"] = od;
    od.__name__ = ["kit", "asset", "AssetPack"];
    od.__interfaces__ = [Jb];
    od.prototype = { __class__: od, __properties__: { get_manifest: "get_manifest" } };
    var Fc = function() { this.$xF = new W;
        this.$wF = [];
        this.preferredPixelScale = -1;
        this.localBase = this.remoteBase = null;
        U.call(this) };
    h["kit.Assets"] = Fc;
    Fc.__name__ = ["kit", "Assets"];
    Fc.__interfaces__ = [od];
    Fc.__super__ = U;
    Fc.prototype = p(U.prototype, {
        get_entitySlot: function() { return 2 },
        load: function(a, b) { null == b && (b = -1);
            0 >= b && (b = this.preferredPixelScale); var c = Mb.fromAssets(a, b);
            null != this.localBase && (c.$fH = this.localBase);
            null != this.remoteBase && (c.$gH = this.remoteBase); return this.loadManifest(c, a) },
        loadManifest: function(a, b) {
            var c = this;
            if (null != b) { var d = this.$xF.get(b); if (null == d) { var e = d = new zg;
                    this.$xF.set(b, e);
                    d.$EG = z.$KH.loadAssetPack(a).then(function(a) { c.$xF.get(b) == d && c.$wF.push(new Xd(a)); return d.$yF = a }) } return d.$EG }
            return z.$KH.loadAssetPack(a).then(function(a) {
                c.addPack(a);
                return a
            })
        },
        addPack: function(a) { this.$wF.push(new Xd(a)); return this },
        removePackByName: function(a) { var b = this.$xF.get(a); if (null != b && (this.$xF.remove(a), null != b.$yF)) { a = 0; for (var c = this.$wF.length; a < c;) { var d = a++; if (this.$wF[d].$yF == b.$yF) { this.$wF.splice(d, 1); break } } b.$yF.dispose() } },
        getTexture: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$wF; c < d.length;) { var e = d[c];++c;
                e = e.$yF.getTexture(a, !1); if (null != e) return e } c = this.$vF(); return null != c ? c.getTexture(a, b) : null },
        getSound: function(a, b) {
            null ==
                b && (b = !0);
            for (var c = 0, d = this.$wF; c < d.length;) { var e = d[c];++c;
                e = e.$yF.getSound(a, !1); if (null != e) return e } c = this.$vF();
            return null != c ? c.getSound(a, b) : null
        },
        getFile: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$wF; c < d.length;) { var e = d[c];++c;
                e = e.$yF.getFile(a, !1); if (null != e) return e } c = this.$vF(); return null != c ? c.getFile(a, b) : null },
        getVectorFont: function(a, b) {
            null == b && (b = !0);
            for (var c = 0, d = this.$wF; c < d.length;) { var e = d[c];++c;
                e = e.$yF.getVectorFont(a, !1); if (null != e) return e } c = this.$vF();
            return null !=
                c ? c.getVectorFont(a, b) : null
        },
        getFont: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$wF; c < d.length;) { var e = d[c];++c; var k = e.$zF.get(a); if (null != k) return k; if (null != e.$yF.getFile(a + ".fnt", !1)) return c = new Kc(this, a), e.$zF.set(a, c), c.disposeFiles() } e = this.$vF(); return null != e ? e.getFont(a, b) : null },
        getScene: function(a, b) {
            null == b && (b = !0);
            for (var c = 0, d = this.$wF; c < d.length;) {
                var e = d[c];
                ++c;
                var k = e.$AG.get(a);
                if (null != k) return k;
                if (null != e.$yF.getFile(a + ".scene", !1)) return c = new Ba(this, a), e.$AG.set(a,
                    c), c.disposeFiles()
            }
            e = this.$vF();
            return null != e ? e.getScene(a, b) : null
        },
        getSceneSymbol: function(a, b) { null == b && (b = !0); for (var c = 0, d = this.$wF; c < d.length;) { var e = d[c];++c; var k = e.$BG.get(a); if (null != k) return k; if (null != e.$yF.getFile(a + ".symbol", !1)) return c = new Ba(this, a, !0), e.$BG.set(a, c), c.disposeFiles() } e = this.$vF(); return null != e ? e.getSceneSymbol(a, b) : null },
        getTexturePacker: function(a, b) {
            null == b && (b = !0);
            for (var c = 0, d = this.$wF; c < d.length;) {
                var e = d[c];
                ++c;
                var k = e.$CG.get(a);
                if (null != k) return k;
                if (null !=
                    e.$yF.getFile(a + ".json", !1)) return c = new Ag(this, a), e.$CG.set(a, c), c.disposeFiles()
            }
            e = this.$vF();
            return null != e ? e.getTexturePacker(a, b) : null
        },
        $vF: function() { return null == this.owner || null == this.owner.parent ? null : this.owner.parent._internal_getFromParents(2) },
        dispose: function() { U.prototype.dispose.call(this); var a = this.$wF;
            this.$wF = [];
            this.$xF = new W; for (var b = 0; b < a.length;) { var c = a[b];++b;
                c.$yF.dispose() } },
        get_manifest: function() { return null },
        __class__: Fc,
        __properties__: p(U.prototype.__properties__, { get_manifest: "get_manifest" })
    });
    var Xd = function(a) { this.$CG = new W;
        this.$BG = new W;
        this.$AG = new W;
        this.$zF = new W;
        this.$yF = a };
    h.$CH = Xd;
    Xd.__name__ = ["$CH"];
    Xd.prototype = { __class__: Xd };
    var zg = function() {};
    h.$CI = zg;
    zg.__name__ = ["$CI"];
    zg.prototype = { __class__: zg };
    var ng = function() { this.$FG = this.$GG = null };
    h.$CK = ng;
    ng.__name__ = ["$CK"];
    ng.prototype = { $HG: function() { var a = this.$GG; if (null != a) { this.$GG = null; for (var b = 0; b < a.length;) { var c = a[b];++b;
                    c.dispose() } } this.$FG = null }, __class__: ng };
    var Bg = function() {};
    h["kit.MessageResult"] = Bg;
    Bg.__name__ = ["kit", "MessageResult"];
    Bg.prototype = { __class__: Bg };
    var aa = function() { this.active = !0;
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this.$PG = {} };
    h["kit.Entity"] = aa;
    aa.__name__ = ["kit", "Entity"];
    aa.__interfaces__ = [Jb];
    aa.$QG = function(a) { for (var b = null; null != a;) b = a, a = a.next; return b };
    aa.prototype = {
        add: function(a) {
            null != a.owner && a.owner.remove(a);
            var b = a.get_entitySlot(),
                c = this.$PG[b];
            null != c && this.remove(c);
            this.$PG[b] = a;
            b = null;
            for (c = this.firstComponent; null !=
                c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded();
            return this
        },
        remove: function(a) { for (var b = null, c = this.firstComponent; null != c;) { var d = c.next; if (c == a) return null == b ? this.firstComponent = d : (b.owner = this, b.next = d), a = c.get_entitySlot(), delete this.$PG[a], 0 != (c.$B & 1) && (c.onStop(), c.$B &= -2), c.onRemoved(), c.owner = null, c.next = null, !0;
                b = c;
                c = d } return !1 },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            b ? this.$LG(aa.$QG(this.firstChild),
                a) : this.$MG(a);
            return this
        },
        removeChild: function(a) { for (var b = null, c = this.firstChild; null != c;) { if (c == a) { this.$KG(b);
                    c.parent = null;
                    c.next = null; break } b = c;
                c = c.next } },
        emitMessage: function(a, b) { for (var c = !1, d = this.firstComponent; null != d;) { var e = d.next;
                d.onMessage(a, b) && (c = !0);
                d = e } aa.$RG.handled = c; return aa.$RG },
        emitMessageToParents: function(a, b) { var c = !1,
                d = this;
            do { var e = d.parent;
                d.emitMessage(a, b).handled && (c = !0);
                d = e } while (null != d);
            aa.$RG.handled = c; return aa.$RG },
        sortChildren: function(a) {
            var b = null,
                c;
            do { c = !1; for (var d = null, e = this.firstChild; e != b && null != e.next;) { var k = e,
                        w = e.next;
                    0 < a(k, w) ? (k.next = w.next, w.next = k, null != d ? d.next = w : this.firstChild = w, c = !0, d = b = w) : (d = k, e = w) } } while (c)
        },
        disposeChildren: function() { for (; null != this.firstChild;) this.firstChild.dispose() },
        dispose: function() { for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren() },
        yieldForStart: function() {
            for (var a = this.firstComponent; null != a;) {
                var b = a.next;
                0 == (a.$B &
                    1) && (a.$B |= 1, a.$A(), a.onStart());
                a = b
            }
            for (a = this.firstChild; null != a;) b = a.next, a.yieldForStart(), a = b
        },
        _internal_getFromParents: function(a, b) { var c = this;
            do { var d = c.$PG[a];
                null != b && (d = d instanceof b ? d : null); if (null != d) return d;
                c = c.parent } while (null != c); return null },
        _internal_getFromChildren: function(a, b) { var c = this.$PG[a];
            null != b && (c = c instanceof b ? c : null); if (null != c) return c; for (c = this.firstChild; null != c;) { var d = c._internal_getFromChildren(a, b); if (null != d) return d;
                c = c.next } return null },
        $KG: function(a) {
            null !=
                a ? a.next = a.next.next : this.$NG()
        },
        $LG: function(a, b) { null != a ? (b.next = a.next, a.next = b) : this.$MG(b) },
        $MG: function(a) { a.next = this.firstChild;
            this.firstChild = a },
        $NG: function() { this.firstChild = this.firstChild.next },
        __class__: aa
    };
    var Cg = function() {};
    h.$CL = Cg;
    Cg.__name__ = ["$CL"];
    Cg.prototype = { __class__: Cg };
    var jc = function() { this.$pG = !0 };
    h.$CM = jc;
    jc.__name__ = ["$CM"];
    jc.__interfaces__ = [Cg];
    jc.prototype = {
        init: function() {
            var a = this;
            Q.$GT();
            Q.$HT();
            var b = null;
            try { b = window.flambe.canvas } catch (c) {
                c instanceof A &&
                    (c = c.val)
            }
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            Q.$$S(b, "tap-highlight-color", "transparent");
            b.setAttribute("moz-opaque", "");
            this.$aG = new Lc(b);
            this.$YG = new bb;
            this.$XG = new Yd(this.$YG, b);
            this.$ZG = this.$WG(b);
            this.$SG = new uc;
            this.$lG = b;
            this.$mG = b.parentElement;
            this.$mG.style.overflow = "hidden";
            this.$mG.style.position = "relative";
            Q.$$S(this.$mG, "touch-action", "none");
            var d = 0,
                e = function(c) {
                    if (!(1E3 > c.timeStamp - d)) {
                        var e = b.getBoundingClientRect(),
                            k = a.$UG(c, e),
                            e = a.$VG(c, e);
                        switch (c.type) {
                            case "mousedown":
                                c.target ==
                                    b && (c.preventDefault(), a.$XG.$VN(k, e, c.button), b.focus());
                                break;
                            case "mousemove":
                                a.$XG.$ZN(k, e);
                                break;
                            case "mouseup":
                                a.$XG.$WN(k, e, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a.$XG.$aN(k, e, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", e, !1);
            window.addEventListener("mousemove", e, !1);
            window.addEventListener("mouseup", e, !1);
            b.addEventListener("mousewheel", e, !1);
            b.addEventListener("DOMMouseScroll", e, !1);
            b.addEventListener("contextmenu",
                function(a) { a.preventDefault() }, !1);
            var k = "undefined" != typeof window.ontouchstart,
                e = H["int"](Q.$xS("maxTouchPoints", window.navigator).value);
            if (k || 1 < e) {
                var w = new Zd(this.$YG, k ? 4 : e);
                this.$bG = w;
                e = function(b) {
                    var c;
                    c = k ? b.changedTouches : [b];
                    var e = b.target.getBoundingClientRect();
                    d = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            b.preventDefault();
                            for (b = 0; b < c.length;) { var f = c[b];++b; var g = a.$UG(f, e),
                                    h = a.$VG(f, e);
                                w.$VN((k ? f.identifier : f.pointerId) | 0, g, h) }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) f = c[b], ++b, g = a.$UG(f, e), h = a.$VG(f, e), w.$ZN((k ? f.identifier : f.pointerId) | 0, g, h);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (b = 0; b < c.length;) f = c[b], ++b, g = a.$UG(f, e), h = a.$VG(f, e), w.$WN((k ? f.identifier : f.pointerId) | 0, g, h)
                    }
                };
                k ? (b.addEventListener("touchstart", e, !1), b.addEventListener("touchmove", e, !1), b.addEventListener("touchend", e, !1), b.addEventListener("touchcancel", e, !1)) : (b.addEventListener("MSPointerDown", e, !1), b.addEventListener("MSPointerMove",
                    e, !1), b.addEventListener("MSPointerUp", e, !1))
            } else this.$bG = new $d;
            var f = window.onerror;
            window.onerror = function(a, b, c) { z.uncaughtError.emit(a); return null != f ? f(a, b, c) : !1 };
            var g = Q.$xS("hidden", window.document);
            null != g.value ? (e = function(a) { z.hidden.set__(L.field(window.document, g.field)) }, e(null), window.document.addEventListener(g.prefix + "visibilitychange", e, !1)) : (e = function(a) { z.hidden.set__("pagehide" == a.type) }, window.addEventListener("pageshow", e, !1), window.addEventListener("pagehide", e, !1));
            z.hidden.get_changed().connect(function(b,
                c) { b || (a.$oG = !0) });
            this.$oG = !1;
            this.$nG = Date.now();
            var h = Q.$xS("requestAnimationFrame").value;
            if (null != h) { var l = window.performance,
                    m = null != l && Q.$zS("now", l);
                m ? this.$nG = l.now() : null; var n = null,
                    n = function(c) { h(n, b);
                        a.$TG(m ? l.now() : c) };
                h(n, b) } else window.setInterval(function() { a.$TG(Date.now()) }, 16);
            ua.$qN("fullscreen") && this.$bG.get_supported() && this.$aG.get_fullscreenSupported() && this.$bG.up.connect(function(b) { a.$aG.fullscreen.$tG || a.$aG.requestFullscreen() });
            var p = ua.$rN();
            null != p && (this.$aG.fullscreen.get_changed().connect(function(b,
                c) { b && a.$aG.lockOrientation(p) }), this.$aG.lockOrientation(p));
            this.$SG.$bQ.add(new ae);
            this.$SG.$sK();
            return (new Qa).$gW(null)
        },
        loadAssetPack: function(a) { return (new ha(this, a)).$EG },
        initPlatformSDK: function(a) { return a },
        $TG: function(a) { var b = (a - this.$nG) / 1E3;
            this.$nG = a;
            z.hidden.$tG || (this.$oG ? this.$oG = !1 : (this.$pG && (this.$pG = !1, this.$aG.$jS(null)), this.$SG.$TG(b), this.$SG.$GJ(this.$ZG))) },
        getKeyboard: function() {
            var a = this;
            if (null == this.$hG) {
                this.$hG = new Nb;
                var b = function(b) {
                    switch (b.type) {
                        case "keydown":
                            a.$hG.$VN(b.keyCode) &&
                                b.preventDefault();
                            break;
                        case "keyup":
                            a.$hG.$WN(b.keyCode)
                    }
                };
                this.$lG.addEventListener("keydown", b, !1);
                this.$lG.addEventListener("keyup", b, !1);
                if (null != window.history && null != (be = window.history, G(be, be.pushState))) { var c = !1,
                        d = function() { window.history.pushState("2DKitBack", null);
                            c = !0 };
                    window.addEventListener("popstate", function(b) { c && (null != a.$hG.backButton.$EH ? (d(), a.$hG.backButton.emit()) : window.history.back()) }); if (Q.$sS) this.$YG.down.connect(function(a) { d() }).once();
                    else d() }
            }
            return this.$hG
        },
        getExternal: function() { null == this.$eG && (this.$eG = new ce); return this.$eG },
        getRenderer: function() { return this.$ZG },
        $UG: function(a, b) { return (a.clientX - b.left) * this.$aG.get_width() / b.width },
        $VG: function(a, b) { return (a.clientY - b.top) * this.$aG.get_height() / b.height },
        $WG: function(a) {
            var b = this;
            if (window.navigator.isCocoonJS) {
                window.ext.IDTK_APP.makeCall("setWebGLEnabled", !0);
                var c = window.jsembed;
                null != c && (c.disableAutoScaling(), window.document.documentElement.style.height = "100%", window.document.body.style.height =
                    "100%", c = function() { var c = a.parentNode;
                        null != c && (c.style.width = "100%", c.style.height = "100%", c.style.left = "0", c.style.top = "0", b.$aG.$jS(null)) }, c(), window.setTimeout(c, 500))
            }
            if (0 <= window.navigator.userAgent.indexOf("Windows Phone")) return new pd(a);
            try { var d = Nh.getContextWebGL(a, { alpha: !1, depth: !1, stencil: !0, failIfMajorPerformanceCaveat: !0 }); if (null != d) { var e = new de(this.$aG, d); if (e.$QV) return e } } catch (k) { k instanceof A && (k = k.val), null }
            return new pd(a)
        },
        __class__: jc
    };
    var La = function(a, b) {
        this.$tG =
            a;
        this.$uG = null != b ? new Mc(b) : null
    };
    h["kit.util.Value"] = La;
    La.__name__ = ["kit", "util", "Value"];
    La.prototype = { watch: function(a) { a(this.$tG, this.$tG); return this.get_changed().connect(a) }, set__: function(a) { var b = this.$tG;
            a != b && (this.$tG = a, null != this.$uG && this.$uG.emit(a, b)); return a }, get_changed: function() { null == this.$uG && (this.$uG = new Mc); return this.$uG }, __class__: La, __properties__: { get_changed: "get_changed", set__: "set__" } };
    var Nc = function(a, b) { this.$vG = null;
        this.$xG = a;
        this.$wG = b;
        this.stayInList = !0 };
    h["kit.util.SignalConnection"] = Nc;
    Nc.__name__ = ["kit", "util", "SignalConnection"];
    Nc.__interfaces__ = [Jb];
    Nc.prototype = { once: function() { this.stayInList = !1; return this }, dispose: function() { null != this.$xG && (this.$xG.$zG(this), this.$xG = null) }, __class__: Nc };
    var Ra = function(a) { this.$EH = null != a ? new Nc(this, a) : null;
        this.$FH = null };
    h["kit.util.SignalBase"] = Ra;
    Ra.__name__ = ["kit", "util", "SignalBase"];
    Ra.prototype = {
        $yG: function(a, b) {
            var c = this,
                d = new Nc(this, a);
            this.$EH == Ra.$GH ? this.$$G(function() { c.$BH(d, b) }) : this.$BH(d,
                b);
            return d
        },
        $zG: function(a) { var b = this;
            this.$EH == Ra.$GH ? this.$$G(function() { b.$CH(a) }) : this.$CH(a) },
        $$G: function(a) { for (var b = null, c = this.$FH; null != c;) b = c, c = c.next;
            a = new Dg(a);
            null != b ? b.next = a : this.$FH = a },
        $_G: function() { var a = this.$EH;
            this.$EH = Ra.$GH; return a },
        $AH: function(a) { this.$EH = a;
            a = this.$FH; for (this.$FH = null; null != a;) a.$qW(), a = a.next },
        $BH: function(a, b) { if (b) a.$vG = this.$EH, this.$EH = a;
            else { for (var c = null, d = this.$EH; null != d;) c = d, d = d.$vG;
                null != c ? c.$vG = a : this.$EH = a } },
        $CH: function(a) {
            for (var b =
                    null, c = this.$EH; null != c;) { if (c == a) { a = c.$vG;
                    null == b ? this.$EH = a : b.$vG = a; break } b = c;
                c = c.$vG }
        },
        __class__: Ra
    };
    var Mc = function(a) { Ra.call(this, a) };
    h["kit.util.Signal2"] = Mc;
    Mc.__name__ = ["kit", "util", "Signal2"];
    Mc.__super__ = Ra;
    Mc.prototype = p(Ra.prototype, {
        connect: function(a, b) { null == b && (b = !1); return this.$yG(a, b) },
        emit: function(a, b) { var c = this;
            this.$EH == Ra.$GH ? this.$$G(function() { c.$HH(a, b) }) : this.$HH(a, b) },
        $HH: function(a, b) { for (var c = this.$_G(), d = c; null != d;) d.$wG(a, b), d.stayInList || d.dispose(), d = d.$vG;
            this.$AH(c) },
        __class__: Mc
    });
    var $b = function(a) { Ra.call(this, a) };
    h["kit.util.Signal0"] = $b;
    $b.__name__ = ["kit", "util", "Signal0"];
    $b.__super__ = Ra;
    $b.prototype = p(Ra.prototype, { connect: function(a, b) { null == b && (b = !1); return this.$yG(a, b) }, emit: function() { var a = this;
            this.$EH == Ra.$GH ? this.$$G(function() { a.$HH() }) : this.$HH() }, $HH: function() { for (var a = this.$_G(), b = a; null != b;) b.$wG(), b.stayInList || b.dispose(), b = b.$vG;
            this.$AH(a) }, __class__: $b });
    var za = function(a) { Ra.call(this, a) };
    h["kit.util.Signal1"] = za;
    za.__name__ = ["kit",
        "util", "Signal1"
    ];
    za.__super__ = Ra;
    za.prototype = p(Ra.prototype, { connect: function(a, b) { null == b && (b = !1); return this.$yG(a, b) }, emit: function(a) { var b = this;
            this.$EH == Ra.$GH ? this.$$G(function() { b.$HH(a) }) : this.$HH(a) }, $HH: function(a) { for (var b = this.$_G(), c = b; null != c;) c.$wG(a), c.stayInList || c.dispose(), c = c.$vG;
            this.$AH(b) }, __class__: za });
    var la = function(a, b) { this.$tF = null;
        La.call(this, a, b) };
    h["kit.animation.AnimatedFloat"] = la;
    la.__name__ = ["kit", "animation", "AnimatedFloat"];
    la.__super__ = La;
    la.prototype = p(La.prototype, { set__: function(a) { this.$tF = null; return La.prototype.set__.call(this, a) }, update: function(a) { null != this.$tF && (La.prototype.set__.call(this, this.$tF.update(a)), this.$tF.isComplete() && (this.$tF = null)) }, animate: function(a, b, c, d) { this.set__(a);
            this.animateTo(b, c, d) }, animateTo: function(a, b, c) { this.set_behavior(new ee(this.$tG, a, b, c)) }, set_behavior: function(a) { this.$tF = a;
            this.update(0); return a }, __class__: la, __properties__: p(La.prototype.__properties__, { set_behavior: "set_behavior" }) });
    var z = function() {};
    h["kit.System"] = z;
    z.__name__ = ["kit", "System"];
    z.$IH = function() { null == z.$LH && (z.$LH = z.$KH.init()); return z.$LH };
    z.loadAssetPack = function(a) { return z.$KH.loadAssetPack(a) };
    z.nextFrame = function(a) { z.$KH.$SG.$eQ(a) };
    var Sd = function(a) { null == a && (a = 1);
        this.$OH = 0;
        U.call(this);
        this.scale = new la(a) };
    h["kit.SpeedAdjuster"] = Sd;
    Sd.__name__ = ["kit", "SpeedAdjuster"];
    Sd.__super__ = U;
    Sd.prototype = p(U.prototype, {
        get_entitySlot: function() { return 11 },
        onUpdate: function(a) { 0 < this.$OH && (a = this.$OH, this.$OH = 0);
            this.scale.update(a) },
        __class__: Sd
    });
    var Eg = function() {};
    h["kit.animation.Behavior"] = Eg;
    Eg.__name__ = ["kit", "animation", "Behavior"];
    Eg.prototype = { __class__: Eg };
    var P = function() {};
    h["kit.animation.Ease"] = P;
    P.__name__ = ["kit", "animation", "Ease"];
    P.linear = function(a) { return a };
    P.quadIn = function(a) { return a * a };
    P.quadOut = function(a) { return a * (2 - a) };
    P.quadInOut = function(a) { return 0.5 >= a ? a * a * 2 : 1 - --a * a * 2 };
    P.cubeIn = function(a) { return a * a * a };
    P.cubeOut = function(a) { return 1 + --a * a * a };
    P.cubeInOut = function(a) {
        return 0.5 >= a ? a * a * a * 4 : 1 +
            --a * a * a * 4
    };
    P.quartIn = function(a) { return a * a * a * a };
    P.quartOut = function(a) { return 1 - --a * a * a * a };
    P.quartInOut = function(a) { return 0.5 >= a ? a * a * a * a * 8 : (1 - (a = 2 * a - 2) * a * a * a) / 2 + 0.5 };
    P.quintIn = function(a) { return a * a * a * a * a };
    P.quintOut = function(a) { return (a -= 1) * a * a * a * a + 1 };
    P.quintInOut = function(a) { return 1 > (a *= 2) ? a * a * a * a * a / 2 : ((a -= 2) * a * a * a * a + 2) / 2 };
    P.sineIn = function(a) { return 1 - Math.cos(1.5707963267948966 * a) };
    P.sineOut = function(a) { return Math.sin(1.5707963267948966 * a) };
    P.sineInOut = function(a) {
        return 0.5 - Math.cos(3.141592653589793 *
            a) / 2
    };
    P.bounceIn = function(a) { a = 1 - a; return 0.36363636363636365 > a ? 1 - 7.5625 * a * a : 0.7272727272727273 > a ? 1 - (7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75) : 0.9090909090909091 > a ? 1 - (7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375) : 1 - (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375) };
    P.bounceOut = function(a) {
        return 0.36363636363636365 > a ? 7.5625 * a * a : 0.7272727272727273 > a ? 7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75 : 0.9090909090909091 > a ? 7.5625 * (a - 0.8181818181818182) *
            (a - 0.8181818181818182) + 0.9375 : 7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375
    };
    P.bounceInOut = function(a) {
        if (0.5 > a) return a = 1 - 2 * a, 0.36363636363636365 > a ? (1 - 7.5625 * a * a) / 2 : 0.7272727272727273 > a ? (1 - (7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75)) / 2 : 0.9090909090909091 > a ? (1 - (7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375)) / 2 : (1 - (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375)) / 2;
        a = 2 * a - 1;
        return 0.36363636363636365 > a ? 7.5625 * a * a / 2 + 0.5 : 0.7272727272727273 >
            a ? (7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75) / 2 + 0.5 : 0.9090909090909091 > a ? (7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375) / 2 + 0.5 : (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375) / 2 + 0.5
    };
    P.circIn = function(a) { return 1 - Math.sqrt(1 - a * a) };
    P.circOut = function(a) {--a; return Math.sqrt(1 - a * a) };
    P.circInOut = function(a) { return 0.5 >= a ? (Math.sqrt(1 - a * a * 4) - 1) / -2 : (Math.sqrt(1 - (2 * a - 2) * (2 * a - 2)) + 1) / 2 };
    P.expoIn = function(a) { return Math.pow(2, 10 * (a - 1)) };
    P.expoOut = function(a) {
        return -Math.pow(2,
            -10 * a) + 1
    };
    P.expoInOut = function(a) { return 0.5 > a ? Math.pow(2, 10 * (2 * a - 1)) / 2 : (-Math.pow(2, -10 * (2 * a - 1)) + 2) / 2 };
    P.backIn = function(a) { return a * a * (2.70158 * a - 1.70158) };
    P.backOut = function(a) { return 1 - --a * a * (-2.70158 * a - 1.70158) };
    P.backInOut = function(a) { a *= 2; if (1 > a) return a * a * (2.70158 * a - 1.70158) / 2;
        a -= 2; return (1 - a * a * (-2.70158 * a - 1.70158)) / 2 + 0.5 };
    P.elasticIn = function(a) { return -(Math.pow(2, 10 * (a -= 1)) * Math.sin(1.5707963267948966 * (a - 0.25464790894703254 * Math.asin(1)) / 0.4)) };
    P.elasticOut = function(a) {
        return Math.pow(2,
            -10 * a) * Math.sin(1.5707963267948966 * (a - 0.25464790894703254 * Math.asin(1)) / 0.4) + 1
    };
    P.elasticInOut = function(a) { return 0.5 > a ? -0.5 * Math.pow(2, 10 * (a -= 0.5)) * Math.sin(1.5707963267948966 * (a - 0.1) / 0.4) : Math.pow(2, -10 * (a -= 0.5)) * Math.sin(1.5707963267948966 * (a - 0.1) / 0.4) * 0.5 + 1 };
    var ee = function(a, b, c, d) { this.$bH = a;
        this.$cH = b;
        this.$dH = c;
        this.elapsed = 0;
        this.$eH = null != d ? d : P.linear };
    h["kit.animation.Tween"] = ee;
    ee.__name__ = ["kit", "animation", "Tween"];
    ee.__interfaces__ = [Eg];
    ee.prototype = {
        update: function(a) {
            this.elapsed +=
                a;
            return this.elapsed >= this.$dH ? this.$cH : this.$bH + (this.$cH - this.$bH) * this.$eH(this.elapsed / this.$dH)
        },
        isComplete: function() { return this.elapsed >= this.$dH },
        __class__: ee
    };
    var bc = function() {};
    h["kit.asset.Asset"] = bc;
    bc.__name__ = ["kit", "asset", "Asset"];
    bc.__interfaces__ = [Jb];
    bc.prototype = { __class__: bc };
    var C = h["kit.asset.AssetFormat"] = { __ename__: ["kit", "asset", "AssetFormat"], __constructs__: "WEBP JXR PNG JPG GIF _2DKD _2DKP _2DKE MP3 M4A OPUS OGG WAV WOFF TTF OTF SWF MP4 WEBM Data".split(" ") };
    C.WEBP = ["WEBP", 0];
    C.WEBP.toString = l;
    C.WEBP.__enum__ = C;
    C.JXR = ["JXR", 1];
    C.JXR.toString = l;
    C.JXR.__enum__ = C;
    C.PNG = ["PNG", 2];
    C.PNG.toString = l;
    C.PNG.__enum__ = C;
    C.JPG = ["JPG", 3];
    C.JPG.toString = l;
    C.JPG.__enum__ = C;
    C.GIF = ["GIF", 4];
    C.GIF.toString = l;
    C.GIF.__enum__ = C;
    C._2DKD = ["_2DKD", 5];
    C._2DKD.toString = l;
    C._2DKD.__enum__ = C;
    C._2DKP = ["_2DKP", 6];
    C._2DKP.toString = l;
    C._2DKP.__enum__ = C;
    C._2DKE = ["_2DKE", 7];
    C._2DKE.toString = l;
    C._2DKE.__enum__ = C;
    C.MP3 = ["MP3", 8];
    C.MP3.toString = l;
    C.MP3.__enum__ = C;
    C.M4A = ["M4A", 9];
    C.M4A.toString =
        l;
    C.M4A.__enum__ = C;
    C.OPUS = ["OPUS", 10];
    C.OPUS.toString = l;
    C.OPUS.__enum__ = C;
    C.OGG = ["OGG", 11];
    C.OGG.toString = l;
    C.OGG.__enum__ = C;
    C.WAV = ["WAV", 12];
    C.WAV.toString = l;
    C.WAV.__enum__ = C;
    C.WOFF = ["WOFF", 13];
    C.WOFF.toString = l;
    C.WOFF.__enum__ = C;
    C.TTF = ["TTF", 14];
    C.TTF.toString = l;
    C.TTF.__enum__ = C;
    C.OTF = ["OTF", 15];
    C.OTF.toString = l;
    C.OTF.__enum__ = C;
    C.SWF = ["SWF", 16];
    C.SWF.toString = l;
    C.SWF.__enum__ = C;
    C.MP4 = ["MP4", 17];
    C.MP4.toString = l;
    C.MP4.__enum__ = C;
    C.WEBM = ["WEBM", 18];
    C.WEBM.toString = l;
    C.WEBM.__enum__ = C;
    C.Data = ["Data",
        19
    ];
    C.Data.toString = l;
    C.Data.__enum__ = C;
    var Fg = function(a, b, c, d) { this.cacheKey = null;
        this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = d };
    h["kit.asset.AssetEntry"] = Fg;
    Fg.__name__ = ["kit", "asset", "AssetEntry"];
    Fg.prototype = { __class__: Fg };
    var fe = function() {};
    h["kit.asset.File"] = fe;
    fe.__name__ = ["kit", "asset", "File"];
    fe.__interfaces__ = [bc];
    fe.prototype = { __class__: fe };
    var Mb = function() { this.$fH = this.$gH = null;
        this.pixelScale = 1;
        this.$wF = [] };
    h["kit.asset.Manifest"] = Mb;
    Mb.__name__ = ["kit", "asset", "Manifest"];
    Mb.fromAssets =
        function(a, b, c) {
            null == c && (c = !0);
            null == b && (b = -1);
            b = 1;
            c = [];
            for (var d = ua.$qN("assets"), e = 0, k = L.fields(d); e < k.length;) { var w = k[e];++e; if (Z.startsWith(w, a)) { var f = I.substr(w, a.length, null); if (0 < f.length) { var g = new q("^-([\\d\\.]+)%$", "");
                        g.match(f) && (f = H.parseFloat(g.matched(1)), c.push(new ge(w, f / 100))) } else c.push(new ge(w, 1)) } }
            if (0 == c.length) return null;
            c.sort(function(a, b) { return L.compare(a.$lH, b.$lH) });
            a = null;
            for (e = 0; e < c.length && !(k = c[e], ++e, a = k, k.$lH >= b););
            b = L.field(d, a.$kH);
            c = new Mb;
            c.$fH = "assets";
            c.pixelScale = a.$lH;
            try { var h = jsembed.baseUrl();
                c.$fH = h + c.$fH } catch (l) { l instanceof A && (l = l.val) } h = encodeURIComponent(a.$kH);
            for (d = 0; d < b.length;) { a = b[d];++d;
                e = a.name;
                k = h;
                w = 0; for (f = e.split("/"); w < f.length;) g = f[w], ++w, k += "/" + encodeURIComponent(g);
                null != a.md5 && (k += "?v=" + H.string(a.md5));
                w = Mb.$hH(e);
                w != C.Data && (e = qb.removeFileExtension(e));
                e = c.add(e, k, a.bytes, w);
                null != a.md5 && (e.cacheKey = "assets:" + H.string(a.md5)) }
            return c
        };
    Mb.$hH = function(a) {
        a = qb.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "gif":
                return C.GIF;
            case "jpg":
            case "jpeg":
                return C.JPG;
            case "jxr":
            case "wdp":
                return C.JXR;
            case "png":
                return C.PNG;
            case "webp":
                return C.WEBP;
            case "2dkd":
                return C._2DKD;
            case "2dkp":
                return C._2DKP;
            case "2dke":
                return C._2DKE;
            case "m4a":
                return C.M4A;
            case "mp3":
                return C.MP3;
            case "ogg":
                return C.OGG;
            case "opus":
                return C.OPUS;
            case "wav":
                return C.WAV;
            case "woff":
                return C.WOFF;
            case "ttf":
                return C.TTF;
            case "otf":
                return C.OTF;
            case "swf":
                return C.SWF;
            case "mp4":
                return C.MP4;
            case "webm":
                return C.WEBM
        } else null;
        return C.Data
    };
    Mb.prototype = { add: function(a, b, c, d) { null == c && (c = 0);
            null == d && (d = Mb.$hH(b));
            a = new Fg(a, b, d, c);
            this.$wF.push(a); return a }, iterator: function() { return I.iter(this.$wF) }, getFullURL: function(a) { var b;
            b = null != this.$gH && Mb.$jH ? this.$gH : this.$fH; return null != b ? qb.joinPath(b, a.url) : a.url }, __class__: Mb };
    var ge = function(a, b) { this.$kH = a;
        this.$lH = b };
    h.$CN = ge;
    ge.__name__ = ["$CN"];
    ge.prototype = { __class__: ge };
    var he = function() { this.offsetX = this.offsetY = 0;
        this.active = !0;
        this.following = null };
    h["kit.creator.Camera"] = he;
    he.__name__ = ["kit", "creator", "Camera"];
    he.__super__ = ab;
    he.prototype = p(ab.prototype, {
        onStart: function() { ab.prototype.onStart.call(this); var a = this.owner.$PG[3];
            null == a && (this.owner.add(a = new E), this.info.transformSprite(a), a.set_visible(!1));
            null != this.following && (a = this.following.$PG[3], null != a && a.set_pixelSnapping(!1));
            this.active && (this.owner._internal_getFromParents(3, Ta).camera = this) },
        onUpdate: function(a) { ab.prototype.onUpdate.call(this, a);
            this.zoom.update(a) },
        $mH: function(a) {
            var b = this.owner.$PG[3];
            if (null !=
                this.following) { var c = this.following.$PG[3];
                null != c && b.setXY(c.x.$tG + this.offsetX, c.y.$tG + this.offsetY) }
            for (var c = this.zoom.$tG, d = b.y.$tG - 0.5 * a.cameraHeight.$tG / c, b = -sa.clamp(b.x.$tG - 0.5 * a.cameraWidth.$tG / c, 0, a.info.width * a.info.tileWidth - a.cameraWidth.$tG / c), d = -sa.clamp(d, 0, a.info.height * a.info.tileHeight - a.cameraHeight.$tG / c), e = 0, k = a.info.layers; e < k.length;) {
                var w = k[e];
                ++e;
                var f = a.layers.get(w.name).$PG[3],
                    g = sa.max(w.parallaxX, w.parallaxY) * (c - 1) + 1;
                f.setScale(g);
                f.x.set__(w.parallaxX * b * g);
                f.y.set__(w.parallaxY *
                    d * g)
            }
        },
        __class__: he
    });
    var ie = function(a) { this.$sH = null;
        this.$rH = new W;
        U.call(this);
        this.scene = a;
        this.$nH() };
    h["kit.creator.CreatorScript"] = ie;
    ie.__name__ = ["kit", "creator", "CreatorScript"];
    ie.__super__ = U;
    ie.prototype = p(U.prototype, {
        get_entitySlot: function() { return 4 },
        onMessage: function(a, b) { var c = !1,
                d = this.$rH.get(a); if (null != d) { var e = H.instance(b, aa); if (null != e)
                    for (var k = this.owner; null != k;) k == z.root && (ia.runSequence(d.actions, e), c = !0), k = k.parent } return U.prototype.onMessage.call(this, a, b) || c },
        $nH: function() {
            this.groups = [];
            for (var a = 0, b = this.scene.script.groups; a < b.length;) { var c = b[a];++a; var d = c.actions.map(G(this, this.$oH)).filter(function(a) { return null != a }),
                    d = new Gg(c, d);
                this.groups.push(d);
                this.$rH.set(c.name, d) } this.$sH = null
        },
        $oH: function(a) {
            var b = ga.resolveClass(a.type);
            if (null == b || null == b.__rtti) return null;
            var c = ga.createInstance(b, []);
            c.script = this;
            null == this.$sH && (this.$sH = new W);
            var d = this.$sH.get(a.type);
            null == d && (b = d = vc.$PO(b, new W), this.$sH.set(a.type, b));
            for (b = a.properties.keys(); b.hasNext();) {
                var e =
                    b.next(),
                    k;
                k = null != Za[e] ? d.getReserved(e) : d.h[e];
                if (null != k) { var w = a.properties.get(e);
                    k = this.$pH(k.type, w, a.type + "." + e);
                    null != k && L.setProperty(c, e, k) } else null
            }
            d = c instanceof qd ? c : null;
            null != d && (d.subActions = a.subActions.map(G(this, this.$oH)).filter(function(a) { return null != a }));
            return c
        },
        $pH: function(a, b, c) {
            var d = vc.$pH(a, b);
            if (null != d) return d;
            switch (a[1]) {
                case 3:
                    switch (a[2]) {
                        case "Null":
                            return this.$pH(a[3].first(), b, c);
                        default:
                            return null }
                case 2:
                    switch (a[2]) {
                        case "Array":
                            a = a[3].first();
                            var d = [],
                                e = 0;
                            for (b = b.split(","); e < b.length;) { var k = b[e];++e;
                                d.push(this.$pH(a, Z.trim(k), c)) }
                            return d;
                        case "kit.creator.ObjectInfo":
                            return this.scene.getObject(b, !1);
                        case "kit.creator.LayerInfo":
                            return this.scene.getLayer(b, !1);
                        default:
                            return null
                    }
                default:
                    return null
            }
        },
        __class__: ie
    });
    var Gg = function(a, b) { this.info = a;
        this.actions = b };
    h["kit.creator.Group"] = Gg;
    Gg.__name__ = ["kit", "creator", "Group"];
    Gg.prototype = { __class__: Gg };
    var qd = function() { this.subActions = [] };
    h["kit.creator.GroupAction"] = qd;
    qd.__name__ = ["kit", "creator", "GroupAction"];
    qd.__super__ = ia;
    qd.prototype = p(ia.prototype, { $kF: function(a) { return ia.runSequence(this.subActions, a) }, __class__: qd });
    var Hg = function() {};
    h["kit.filter.FilterContext"] = Hg;
    Hg.__name__ = ["kit", "filter", "FilterContext"];
    Hg.prototype = { __class__: Hg };
    var je = function() { this.$xH = [];
        this.$wH = [] };
    h.$CO = je;
    je.__name__ = ["$CO"];
    je.__interfaces__ = [Hg];
    je.prototype = {
        $uH: function(a, b, c, d) { var e = this.$wH.pop();
            null != e ? e.$dO(c, d) : e = new Ig(c, d);
            e.$ZO = a;
            e.$aO = b;
            this.$xH.unshift(e); return e.$bO },
        apply: function(a) { a.active && a.apply(this) },
        render: function(a) { this.$xH[0].$eO(a) },
        $vH: function() { var a = this.$xH.shift();
            this.$wH.push(a); return a.$bO },
        __class__: je
    };
    var gb = function() { this.identity() };
    h["kit.math.Matrix"] = gb;
    gb.__name__ = ["kit", "math", "Matrix"];
    gb.multiply = function(a, b, c) { null == c && (c = new gb); var d = a.m00,
            e = a.m01,
            k = a.m02,
            w = a.m10,
            f = a.m11;
        a = a.m12; var g = b.m00,
            h = b.m01,
            l = b.m02,
            m = b.m10,
            n = b.m11;
        b = b.m12;
        c.m00 = d * g + e * m;
        c.m01 = d * h + e * n;
        c.m02 = d * l + e * b + k;
        c.m10 = w * g + f * m;
        c.m11 = w * h + f * n;
        c.m12 = w * l + f * b + a; return c };
    gb.prototype = {
        set: function(a, b, c, d, e, k) { this.m00 = a;
            this.m01 = c;
            this.m02 = e;
            this.m10 = b;
            this.m11 = d;
            this.m12 = k },
        identity: function() { this.set(1, 0, 0, 1, 0, 0) },
        compose: function(a, b, c, d, e) { var k = Math.sin(e);
            e = Math.cos(e);
            this.set(e * c, k * c, -k * d, e * d, a, b) },
        translate: function(a, b) { this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a },
        invert: function() {
            var a = this.determinant();
            if (0 == a) return !1;
            this.set(this.m11 / a, -this.m10 / a, -this.m01 / a, this.m00 / a, (this.m01 * this.m12 - this.m11 * this.m02) / a, (this.m10 * this.m02 -
                this.m00 * this.m12) / a);
            return !0
        },
        transform: function(a, b, c) { null == c && (c = new Ab);
            c.x = a * this.m00 + b * this.m01 + this.m02;
            c.y = a * this.m10 + b * this.m11 + this.m12; return c },
        transformArray: function(a, b, c) { for (var d = 0; d < b;) { var e = a[d],
                    k = a[d + 1];
                c[d++] = e * this.m00 + k * this.m01 + this.m02;
                c[d++] = e * this.m10 + k * this.m11 + this.m12 } },
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
        clone: function(a) { null == a && (a = new gb);
            a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12); return a },
        __class__: gb
    };
    var Ab = function(a, b) { null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b };
    h["kit.math.Point"] = Ab;
    Ab.__name__ = ["kit", "math", "Point"];
    Ab.prototype = {
        add: function(a, b) { this.x += a;
            this.y += b },
        normalize: function() { var a = this.magnitude();
            this.x /= a;
            this.y /= a },
        dot: function(a, b) { return this.x * a + this.y * b },
        multiply: function(a) { this.x *= a;
            this.y *= a },
        magnitude: function() {
            return Math.sqrt(this.x *
                this.x + this.y * this.y)
        },
        __class__: Ab
    };
    var E = function() { this.$PI = null;
        this.$HI = this.$II = 0;
        this.$GI = null; var a = this;
        U.call(this);
        this.$B |= 182;
        this.$FI = new gb; var b = function(b, d) { a.$B |= 24 };
        this.x = new la(0, b);
        this.y = new la(0, b);
        this.rotation = new la(0, b);
        this.scaleX = new la(1, b);
        this.scaleY = new la(1, b);
        this.anchorX = new la(0, b);
        this.anchorY = new la(0, b);
        this.alpha = new la(1) };
    h["kit.display.Sprite"] = E;
    E.__name__ = ["kit", "display", "Sprite"];
    E.hitTest = function(a, b, c) {
        if (!a.active) return null;
        var d = a.$PG[3];
        if (null !=
            d) { if (6 != (d.$B & 6) || null != d.$PI && null != d.$PI.$QK || !d.getLocalMatrix().inverseTransform(b, c, E.$WI)) return null;
            b = E.$WI.x;
            c = E.$WI.y; var e = d.get_scissor(); if (null != e && !e.contains(b, c)) return null } a = E.$TI(a.firstChild, b, c);
        return null != a ? a : null != d && d.containsLocal(b, c) ? d : null
    };
    E.render = function(a, b) { E.$QI(a, b, !0) };
    E.$QI = function(a, b, c) {
        if (a.active) {
            var d = null,
                e = null,
                k = a.$PG[3];
            if (null != k) {
                var w = k.alpha.$tG;
                if (0 == (k.$B & 2) || 0 >= w) return;
                var f = k.$PI;
                if (c && null != f && null != f.$QK) return;
                b.save();
                null != f && null !=
                    f.$PK && 0 != (k.$B & 128) && (c = f.$PK.owner, null != c && (b.beginMask(), E.$QI(c, b, !1), b.endMask()));
                if (null != f) {
                    var g = !1;
                    c = !1;
                    for (var h = 0, l = 0, m = 0, n = 0, p = 0, q = f.$RK; p < q.length;) { var r = q[p];++p;
                        r.active && (g = !0, c = c || !r.outputOnly, h = Math.max(h, r.paddingTop), l = Math.max(l, r.paddingRight), m = Math.max(m, r.paddingBottom), n = Math.max(n, r.paddingLeft)) }
                    if (g && z.$KH.$ZG.get_filterSupported()) {
                        e = k.$_H();
                        g = null != e ? e.getViewMatrix() : null;
                        p = k.getViewMatrix();
                        e = new fb;
                        e.set(1.79769313486231E308, 1.79769313486231E308, -1.79769313486231E308,
                            -1.79769313486231E308);
                        var t = f.$SK;
                        if (null != t) { var q = t.x,
                                r = t.y,
                                s = q + t.width,
                                t = r + t.height;
                            s > q && t > r && (E.$VI(p, q, r, e), E.$VI(p, s, r, e), E.$VI(p, s, t, e), E.$VI(p, q, t, e)) } else E.$UI(a, g, e);
                        e.width -= e.x;
                        e.height -= e.y;
                        if (!e.get_empty()) {
                            e.x -= n;
                            e.y -= h;
                            e.width += n + l;
                            e.height += h + m;
                            d = E.$YI.$uH(e.x, e.y, Math.ceil(e.width), Math.ceil(e.height));
                            c && (d = d.get_graphics(), d.save(), d.translate(-e.x, -e.y), d.transform(p.m00, p.m10, p.m01, p.m11, p.m02, p.m12), E.$SI(k, d), E.$RI(a, d), d.restore());
                            d = 0;
                            for (c = f.$RK; d < c.length;) h = c[d], ++d,
                                E.$YI.apply(h);
                            d = E.$YI.$vH();
                            null != g && (c = g.clone(E.$XI), c.invert(), b.transform(c.m00, c.m10, c.m01, c.m11, c.m02, c.m12))
                        }
                    }
                }
                1 > w && b.multiplyAlpha(w);
                null == d && (w = k.getLocalMatrix(), c = w.m02, h = w.m12, 0 != (k.$B & 32) && (c = Math.round(c), h = Math.round(h)), b.transform(w.m00, w.m10, w.m01, w.m11, c, h));
                null != f && (1 == f.$LK.$tG && 1 == f.$MK.$tG && 1 == f.$NK.$tG || b.tint(f.$LK.$tG, f.$MK.$tG, f.$NK.$tG), null != f.$JK && b.setBlendMode(f.$JK), f = f.$KK, null != f && null == d && b.applyScissor(f.x, f.y, f.width, f.height));
                null == d ? E.$SI(k, b) : b.drawSubTexture(d,
                    e.x, e.y, 0, 0, e.width, e.height)
            }
            null == d && E.$RI(a, b);
            null != k && b.restore()
        }
    };
    E.$RI = function(a, b) { var c = a.$PG[8]; if (null != c)
            for (var c = c.occludedScenes, d = 0; d < c.length;) { var e = c[d];++d;
                E.render(e, b) }
        for (c = a.firstChild; null != c;) d = c.next, E.render(c, b), c = d };
    E.$SI = function(a, b) { a.draw(b); var c = a.$PI;
        null != c && null != c.$OK && c.$OK.render(b) };
    E.$TI = function(a, b, c) { if (null != a) { var d = E.$TI(a.next, b, c); return null != d ? d : E.hitTest(a, b, c) } return null };
    E.$UI = function(a, b, c) {
        if (a.active) {
            var d = a.$PG[3];
            if (null != d) {
                if (0 ==
                    (d.$B & 2) || null != d.$PI && null != d.$PI.$QK) return null;
                b = null != b ? gb.multiply(b, d.getLocalMatrix()) : d.getLocalMatrix();
                var e = d.getNaturalWidth(),
                    d = d.getNaturalHeight();
                0 < e && 0 < d && (E.$VI(b, 0, 0, c), E.$VI(b, e, 0, c), E.$VI(b, e, d, c), E.$VI(b, 0, d, c))
            }
            e = a.$PG[8];
            if (null != e)
                for (var e = e.occludedScenes, d = 0, k = e.length; d < k;) E.$UI(e[d], b, c), ++d;
            for (a = a.firstChild; null != a;) e = a.next, E.$UI(a, b, c), a = e
        }
    };
    E.$VI = function(a, b, c, d) {
        a = a.transform(b, c, E.$WI);
        b = a.x;
        c = a.y;
        b < d.x && (d.x = b);
        c < d.y && (d.y = c);
        b > d.width && (d.width = b);
        c > d.height &&
            (d.height = c)
    };
    E.__super__ = U;
    E.prototype = p(U.prototype, {
        get_entitySlot: function() { return 3 },
        getNaturalWidth: function() { return 0 },
        getNaturalHeight: function() { return 0 },
        containsLocal: function(a, b) { return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight() },
        getLocalMatrix: function() { 0 != (this.$B & 8) && (this.$B &= -9, this.$FI.compose(this.x.$tG, this.y.$tG, this.scaleX.$tG, this.scaleY.$tG, 3.141592653589793 * this.rotation.$tG / 180), this.$FI.translate(-this.anchorX.$tG, -this.anchorY.$tG)); return this.$FI },
        getViewMatrix: function() { if (this.$$H()) { var a = this.$_H();
                this.$GI = null != a ? gb.multiply(a.getViewMatrix(), this.getLocalMatrix(), this.$GI) : this.getLocalMatrix().clone(this.$GI);
                this.$B &= -17;
                null != a && (this.$II = a.$HI);++this.$HI } return this.$GI },
        setAnchor: function(a, b) { this.anchorX.set__(a);
            this.anchorY.set__(b); return this },
        centerAnchor: function() { this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() / 2); return this },
        setXY: function(a, b) {
            this.x.set__(a);
            this.y.set__(b);
            return this
        },
        setTint: function(a) { if (null != this.$PI || 16777215 != a) this.get_tintR().set__((a & 16711680) / 16711680), this.get_tintG().set__((a & 65280) / 65280), this.get_tintB().set__((a & 255) / 255); return this },
        setScale: function(a) { this.scaleX.set__(a);
            this.scaleY.set__(a); return this },
        setScaleXY: function(a, b) { this.scaleX.set__(a);
            this.scaleY.set__(b); return this },
        onAdded: function() { 0 != (this.$B & 64) && this.$AI() },
        onRemoved: function() { null != this.$OI && (this.$OI.dispose(), this.$OI = null) },
        onUpdate: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a);
            var b = this.$PI;
            if (null != b) { b.$LK.update(a);
                b.$MK.update(a);
                b.$NK.update(a); for (var c = 0, b = b.$RK; c < b.length;) { var d = b[c];++c;
                    d.active && d.update(a) } }
        },
        draw: function(a) {},
        $$H: function() { if (0 != (this.$B & 16)) return !0; var a = this.$_H(); return null == a ? !1 : this.$II != a.$HI || a.$$H() },
        $_H: function() {
            if (null == this.owner) return null;
            for (var a = this.owner.parent; null !=
                a;) { var b = a.$PG[3]; if (null != b) return b;
                a = a.parent }
            return null
        },
        get_pointerDown: function() { null == this.$JI && (this.$JI = new za); return this.$JI },
        get_pointerUp: function() { null == this.$LI && (this.$LI = new za); return this.$LI },
        get_pointerIn: function() { null == this.$MI && (this.$MI = new za); return this.$MI },
        get_pointerOut: function() { null == this.$NI && (this.$NI = new za); return this.$NI },
        $AI: function() {
            var a = this;
            null == this.$OI && z.$KH.$SG.$eQ(function() {
                a.$OI = z.$KH.$YG.move.connect(function(b) {
                    for (var c = b.hit; null != c;) {
                        if (c ==
                            a) return;
                        c = c.$_H()
                    }
                    null != a.$NI && 0 != (a.$B & 64) && a.$NI.emit(b);
                    a.$B &= -65;
                    null != a.$OI && (a.$OI.dispose(), a.$OI = null)
                })
            })
        },
        get_blendMode: function() { return null != this.$PI ? this.$PI.$JK : null },
        set_blendMode: function(a) { if (null == this.$PI) { if (null == a) return null;
                this.$PI = new Tb } return this.$PI.$JK = a },
        get_scissor: function() { return null != this.$PI ? this.$PI.$KK : null },
        set_scissor: function(a) { if (null == this.$PI) { if (null == a) return null;
                this.$PI = new Tb } return this.$PI.$KK = a },
        get_tintR: function() {
            null == this.$PI && (this.$PI =
                new Tb);
            return this.$PI.$LK
        },
        get_tintG: function() { null == this.$PI && (this.$PI = new Tb); return this.$PI.$MK },
        get_tintB: function() { null == this.$PI && (this.$PI = new Tb); return this.$PI.$NK },
        get_graphics: function() { null == this.$PI && (this.$PI = new Tb); var a = this.$PI.$OK;
            null == a && (a = this.$PI.$OK = new ke); return a },
        get_mask: function() { return null != this.$PI ? this.$PI.$PK : null },
        set_mask: function(a) {
            if (null == this.$PI) { if (null == a) return null;
                this.$PI = new Tb }
            var b = this.$PI.$PK;
            if (null != b && (b = b.$PI, null != b && null != b.$QK)) {
                var c =
                    b.$QK;
                b.$QK = null;
                c.set_mask(null)
            }
            null != a && (b = a.$PI, null == b && (b = a.$PI = new Tb), null != b.$QK && b.$QK.set_mask(null), b.$QK = this);
            return this.$PI.$PK = a
        },
        set_maskEnabled: function(a) { this.$B = Oc.set(this.$B, 128, a); return a },
        set_visible: function(a) { this.$B = Oc.set(this.$B, 2, a); return a },
        set_pointerEnabled: function(a) { this.$B = Oc.set(this.$B, 4, a); return a },
        set_pixelSnapping: function(a) { this.$B = Oc.set(this.$B, 32, a); return a },
        $BI: function(a) { this.$DI(a);
            null != this.$JI && this.$JI.emit(a) },
        $CI: function(a) {
            this.$DI(a);
            null != this.$KI && this.$KI.emit(a)
        },
        $DI: function(a) { 0 == (this.$B & 64) && (this.$B |= 64, null != this.$MI || null != this.$NI) && (null != this.$MI && this.$MI.emit(a), this.$AI()) },
        $EI: function(a) { switch (a.source[1]) {
                case 1:
                    null != this.$NI && 0 != (this.$B & 64) && this.$NI.emit(a), this.$B &= -65, null != this.$OI && (this.$OI.dispose(), this.$OI = null) } null != this.$LI && this.$LI.emit(a) },
        __class__: E,
        __properties__: p(U.prototype.__properties__, {
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
            get_mask: "get_mask",
            set_scissor: "set_scissor",
            get_scissor: "get_scissor",
            set_blendMode: "set_blendMode",
            get_blendMode: "get_blendMode"
        })
    });
    var rd = function(a) {
        this.$jI = new aa;
        this.state = new La(null);
        E.call(this);
        this.$iI =
            a
    };
    h["kit.creator.ObjectSprite"] = rd;
    rd.__name__ = ["kit", "creator", "ObjectSprite"];
    rd.__super__ = E;
    rd.prototype = p(E.prototype, {
        loop: function(a, b) { null == b && (b = !0); if (!b && this.state.$tG == a) return this;
            this.$gI(a); return this },
        $gI: function(a) {
            if (null == this.owner) return null;
            var b = this.$iI.states.get(a);
            if (null == b) return null;
            var c;
            c = this.owner._internal_getFromParents(2);
            if (null == c) return null;
            var d = b.lastIndexOf("/");
            if (0 > d) return null;
            var e = I.substr(b, 0, d),
                d = I.substr(b, d + 1, null),
                e = c.getTexturePacker(e,
                    !1);
            if (null != e) return b = e.createSprite(d, !1), null == b && (b = e.toLibrary().createSprite(d)), this.$hI(b, a), b;
            b = c.getTexture(b, !1);
            return null != b ? (b = new Ob(b), this.$hI(b, a), b) : null
        },
        $hI: function(a, b) { var c = this.$iI.tile;
            null == c.texture && (a.x.set__(-H.parseFloat(c.properties.get("boundsX"))), a.y.set__(-H.parseFloat(c.properties.get("boundsY"))));
            this.$jI.add(a);
            this.state.set__(b) },
        onStart: function() {
            E.prototype.onStart.call(this);
            if (null != this.owner && (this.owner.addChild(this.$jI), null == this.state.$tG)) {
                var a;
                a = this.$iI.tile;
                if (null != a.texture) a = new Ob(a.texture);
                else { var b;
                    b = this.owner._internal_getFromParents(2); var c = a.properties.get("symbol"); if (null != a.properties.get("scene")) c = b.getSceneSymbol(c), a = c.createSprite(), this.$jI.add(c.createScript());
                    else if (null != a.tileset.properties.get("library")) a = null;
                    else { var d = a.tileset.properties.get("texturepacker");
                        null != d ? (b = b.getTexturePacker(d), a = null != a.properties.get("animated") ? b.toLibrary().createSprite(c) : b.createSprite(c)) : a = null } } this.$hI(a, null)
            }
        },
        __class__: rd
    });
    var kd = function() { this.$lI = new W;
        this.changed = new Mc;
        U.call(this) };
    h["kit.creator.PropertyBag"] = kd;
    kd.__name__ = ["kit", "creator", "PropertyBag"];
    kd.__super__ = U;
    kd.prototype = p(U.prototype, {
        get_entitySlot: function() { return 16 },
        get: function(a) { var b = this.$kI(a); if (null != b) return b.$tG;
            a = this.$lI.get(a); return null != a ? a : null },
        set: function(a, b) { var c = this.$kI(a);
            null != c ? c.$tG != b && (c.set__(b), this.changed.emit(a, b)) : this.$lI.get(a) != b && (this.$lI.set(a, b), this.changed.emit(a, b)); return this },
        $kI: function(a) { switch (a) {
                case "x":
                case "y":
                case "rotation":
                case "scaleX":
                case "scaleY":
                case "anchorX":
                case "anchorY":
                case "alpha":
                    var b = this.owner.$PG[3]; if (null != b) return H.instance(L.field(b, a), la) } return null },
        __class__: kd
    });
    var Ba = function(a, b, c) { null == c && (c = !1);
        this.$oI = a;
        this.$qH = a.getFile(b + (c ? ".symbol" : ".scene"));
        this.symbol = c;
        a = b.lastIndexOf("/");
        this.$pI = 0 <= a ? I.substr(b, 0, a + 1) : "";
        this.$nH();
        this.reloadCount = new La(0) };
    h["kit.creator.SceneInfo"] = Ba;
    Ba.__name__ = ["kit", "creator", "SceneInfo"];
    Ba.getRequiredAssetPacks = function(a) { var b = ua.$qN("scenes");
        a = L.field(b, a); return null != a ? a : [] };
    Ba.$rI = function(a) { var b = new W; if (null != a)
            for (var c = 0, d = L.fields(a); c < d.length;) { var e = d[c];++c; if (!Z.startsWith(e, "//")) { var k = Ba.$sI(L.field(a, e));
                    null != k && (null != Za[e] ? b.setReserved(e, k) : b.h[e] = k) } }
        return b };
    Ba.$sI = function(a) { null != a && (a = Z.trim(a), 0 == a.length && (a = null)); return a };
    Ba.$tI = function(a, b) { return null != a ? a : b };
    Ba.prototype = {
        disposeFiles: function() { this.$qH.dispose(); return this },
        createSprite: function() { return new Ta(this) },
        createScript: function() { return new ie(this) },
        getLayer: function(a, b) { for (var c = 0, d = this.layers; c < d.length;) { var e = d[c];++c; if (e.name == a) return e } return null },
        getObject: function(a, b) { return this.$qI.get(a) },
        $mI: function(a) { return this.$oI.getTexture(this.$pI + qb.removeFileExtension(a), !1) },
        $nI: function(a) { return this.$oI.getTexture(a) },
        $nH: function() {
            var a = this,
                b = this.$qH.toJson();
            this.width = b.width;
            this.height = b.height;
            this.tileWidth = b.tilewidth;
            this.tileHeight = b.tileheight;
            this.tilesets = b.tilesets.map(function(b) {
                return new Jg(a,
                    b)
            });
            this.backgroundColor = null != b.backgroundcolor ? H.parseInt(Z.replace(b.backgroundcolor, "#", "0x")) : 8421504;
            this.tiles = new nb;
            for (var c = 0, d = this.tilesets; c < d.length;) { var e = d[c];++c; for (var k = 0, e = e.tiles; k < e.length;) { var f = e[k];++k;
                    this.tiles.h[f.id] = f } } this.layers = b.layers.map(function(b) { return new Kg(a, b) });
            this.properties = Ba.$rI(b.properties);
            this.script = new Lg(b.script);
            this.$qI = new W;
            b = 0;
            for (c = this.layers; b < c.length;)
                if (k = c[b], ++b, null != k.objects)
                    for (d = 0, k = k.objects; d < k.length;) e = k[d], ++d, null !=
                        e.name && this.$qI.set(e.name, e)
        },
        __class__: Ba
    };
    var kc = h["kit.creator.LayerType"] = { __ename__: ["kit", "creator", "LayerType"], __constructs__: ["Tile", "Object"] };
    kc.Tile = ["Tile", 0];
    kc.Tile.toString = l;
    kc.Tile.__enum__ = kc;
    kc.Object = ["Object", 1];
    kc.Object.toString = l;
    kc.Object.__enum__ = kc;
    var Kg = function(a, b) {
        this.parallaxX = this.parallaxY = 1;
        this.tiles = this.objects = null;
        var c = this;
        this.scene = a;
        this.name = Ba.$sI(b.name);
        switch (b.type) {
            case "tilelayer":
                this.type = kc.Tile;
                break;
            case "objectgroup":
                this.type = kc.Object;
                break;
            default:
                this.type = null
        }
        this.width = b.width;
        this.height = b.height;
        this.opacity = b.opacity;
        this.visible = b.visible;
        null != b.data && (this.tiles = b.data.map(function(b) { return 0 != b ? a.tiles.h[b] : null }));
        null != b.objects && (this.objects = b.objects.map(function(a) { return new le(c, a) }), "index" != b.draworder && this.objects.sort(function(a, b) { return L.compare(a.y + a.height, b.y + b.height) }));
        null != b.parallaxX && (this.parallaxX = b.parallaxX, this.parallaxY = b.parallaxY);
        this.tileCollisions = b.collisions;
        this.properties = Ba.$rI(b.properties)
    };
    h["kit.creator.LayerInfo"] = Kg;
    Kg.__name__ = ["kit", "creator", "LayerInfo"];
    Kg.prototype = { __class__: Kg };
    var va = h["kit.creator.ObjectShape"] = { __ename__: ["kit", "creator", "ObjectShape"], __constructs__: ["Rectangle", "Ellipse", "Polygon", "Polyline", "Tile"] };
    va.Rectangle = ["Rectangle", 0];
    va.Rectangle.toString = l;
    va.Rectangle.__enum__ = va;
    va.Ellipse = ["Ellipse", 1];
    va.Ellipse.toString = l;
    va.Ellipse.__enum__ = va;
    va.Polygon = ["Polygon", 2];
    va.Polygon.toString = l;
    va.Polygon.__enum__ = va;
    va.Polyline = ["Polyline", 3];
    va.Polyline.toString =
        l;
    va.Polyline.__enum__ = va;
    va.Tile = ["Tile", 4];
    va.Tile.toString = l;
    va.Tile.__enum__ = va;
    var le = function(a, b) {
        this.states = new W;
        this.properties = new W;
        this.tile = this.points = null;
        this.layer = a;
        this.name = Ba.$sI(b.name);
        this.type = Ba.$sI(b.type);
        this.x = b.x;
        this.y = b.y;
        this.anchorX = Ba.$tI(b.anchorX, 0);
        this.anchorY = Ba.$tI(b.anchorY, 0);
        this.rotation = b.rotation;
        this.width = b.width;
        this.height = b.height;
        this.visible = b.visible;
        this.tint = null != b.tintcolor ? H.parseInt(Z.replace(b.tintcolor, "#", "0x")) : 16777215;
        b.ellipse ?
            this.shape = va.Ellipse : null != b.polygon ? (this.shape = va.Polygon, this.points = b.polygon.map(function(a) { return new Ab(a.x, a.y) })) : null != b.polyline ? (this.shape = va.Polyline, this.points = b.polyline.map(function(a) { return new Ab(a.x, a.y) })) : null != b.gid ? (this.shape = va.Tile, this.tile = a.scene.tiles.h[b.gid]) : this.shape = va.Rectangle;
        var c;
        c = null != this.tile ? -this.height : 0;
        if (0 == this.rotation) this.x += this.anchorX, this.y += this.anchorY + c;
        else {
            var d = new gb;
            d.compose(this.x, this.y, 1, 1, 3.141592653589793 * this.rotation /
                180);
            d.translate(this.anchorX, this.anchorY + c);
            this.x = d.m02;
            this.y = d.m12
        }
        null != this.tile && (this.anchorX *= this.tile.get_width() / this.width, this.anchorY *= this.tile.get_height() / this.height);
        c = Ba.$rI(b.properties);
        for (d = c.keys(); d.hasNext();) { var e = d.next(),
                k;
            k = null != Za[e] ? c.getReserved(e) : c.h[e];
            Z.startsWith(e, "@State:") ? (e = I.substr(e, 7, null), this.states.set(e, k)) : this.properties.set(e, k) }
    };
    h["kit.creator.ObjectInfo"] = le;
    le.__name__ = ["kit", "creator", "ObjectInfo"];
    le.prototype = {
        createSprite: function() {
            var a;
            null != this.tile ? (a = this.tile.texture, a = null != a && 2 > Zb.count(this.states) ? new Ob(a) : new rd(this)) : a = new E;
            this.transformSprite(a);
            return a
        },
        transformSprite: function(a) { null != this.tile ? (a.setXY(this.x + this.tile.tileset.offsetX, this.y + this.tile.tileset.offsetY), a.setScaleXY(this.width / this.tile.get_width(), this.height / this.tile.get_height())) : a.setXY(this.x, this.y);
            a.setAnchor(this.anchorX, this.anchorY);
            a.rotation.set__(this.rotation);
            a.set_visible(this.visible);
            a.setTint(this.tint) },
        __class__: le
    };
    var Jg =
        function(a, b) {
            this.offsetX = this.offsetY = 0;
            this.atlas = null;
            this.scene = a;
            this.name = Ba.$sI(b.name);
            this.spacing = b.spacing;
            this.margin = b.margin;
            var c = b.tileoffset;
            null != c && (this.offsetX = c.x, this.offsetY = c.y);
            this.tileWidth = b.tilewidth;
            this.tileHeight = b.tileheight;
            if (null != b.image) {
                this.atlas = a.$mI(b.image);
                null == this.atlas && (this.atlas = a.$nI(this.name));
                var c = this.atlas.get_width() - 2 * this.margin,
                    d = this.atlas.get_height() - 2 * this.margin,
                    c = (c + this.spacing) / (this.tileWidth + this.spacing) | 0,
                    d = (d + this.spacing) /
                    (this.tileHeight + this.spacing) | 0;
                this.tiles = Array(c * d);
                for (var e = 0, k = 0; k < d;)
                    for (var f = k++, g = 0; g < c;) { var h = g++,
                            l = new me(this, b, e);
                        l.texture = this.atlas.subTexture(h * (this.tileWidth + this.spacing) + this.margin, f * (this.tileHeight + this.spacing) + this.margin, this.tileWidth, this.tileHeight);
                        this.tiles[e] = l;++e }
            } else this.tiles = [];
            if (null != b.tiles)
                for (c = 0, d = L.fields(b.tiles); c < d.length;)
                    if (e = d[c], ++c, k = L.field(b.tiles, e), f = H.parseInt(e), e = this.tiles[f], null == e && (e = this.tiles[f] = new me(this, b, f)), null != k.image &&
                        "true" != e.properties.get("previewImage") && (e.texture = a.$mI(k.image), null == e.texture && (e.texture = a.$nI(this.name))), null != k.objectgroup)
                        for (f = 0, k = k.objectgroup.objects; f < k.length;) g = k[f], ++f, e.collision.push(new le(null, g));
            this.properties = Ba.$rI(b.properties)
        };
    h["kit.creator.TilesetInfo"] = Jg;
    Jg.__name__ = ["kit", "creator", "TilesetInfo"];
    Jg.prototype = { __class__: Jg };
    var me = function(a, b, c) {
        this.collision = [];
        this.texture = null;
        this.id = b.firstgid + c;
        this.tileset = a;
        this.properties = Ba.$rI(null != b.tileproperties ?
            L.field(b.tileproperties, "" + c) : null)
    };
    h["kit.creator.TileInfo"] = me;
    me.__name__ = ["kit", "creator", "TileInfo"];
    me.prototype = { get_width: function() { return null != this.texture ? this.texture.get_width() : H.parseInt(this.properties.get("boundsWidth")) }, get_height: function() { return null != this.texture ? this.texture.get_height() : H.parseInt(this.properties.get("boundsHeight")) }, __class__: me, __properties__: { get_height: "get_height", get_width: "get_width" } };
    var Lg = function(a) {
        this.groups = null != a ? a.groups.map(function(a) { return new Mg(a) }) : []
    };
    h["kit.creator.ScriptInfo"] = Lg;
    Lg.__name__ = ["kit", "creator", "ScriptInfo"];
    Lg.prototype = { __class__: Lg };
    var Mg = function(a) { this.actions = [];
        this.name = a.name;
        this.actions = a.actions.map(function(a) { return new ne(a) }) };
    h["kit.creator.GroupInfo"] = Mg;
    Mg.__name__ = ["kit", "creator", "GroupInfo"];
    Mg.prototype = { __class__: Mg };
    var ne = function(a) { this.type = a.type;
        this.subActions = null != a.subActions ? a.subActions.map(function(a) { return new ne(a) }) : [];
        this.properties = Ba.$rI(a.properties) };
    h["kit.creator.ActionInfo"] =
        ne;
    ne.__name__ = ["kit", "creator", "ActionInfo"];
    ne.prototype = { __class__: ne };
    var fb = function(a, b, c, d) { null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, d) };
    h["kit.math.Rectangle"] = fb;
    fb.__name__ = ["kit", "math", "Rectangle"];
    fb.prototype = {
        set: function(a, b, c, d) { this.x = a;
            this.y = b;
            this.width = c;
            this.height = d },
        contains: function(a, b) {
            a -= this.x;
            if (0 <= this.width) { if (0 > a || a > this.width) return !1 } else if (0 < a || a < this.width) return !1;
            b -= this.y;
            if (0 <= this.height) { if (0 > b || b > this.height) return !1 } else if (0 <
                b || b < this.height) return !1;
            return !0
        },
        clone: function(a) { null == a && (a = new fb);
            a.set(this.x, this.y, this.width, this.height); return a },
        equals: function(a) { return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height },
        get_empty: function() { return 0 >= this.width || 0 >= this.height },
        __class__: fb,
        __properties__: { get_empty: "get_empty" }
    };
    var Ta = function(a) {
        this.$sH = null;
        this.drawBackgroundColor = !1;
        this.objects = new Qb;
        this.layers = new W;
        this.camera = null;
        E.call(this);
        this.info = a;
        var b = new E;
        this.cameraX =
            new la(0, function(a, d) { b.x.set__(-a) });
        this.cameraY = new la(0, function(a, d) { b.y.set__(-a) });
        this.cameraWidth = new la(a.tileWidth * a.width);
        this.cameraHeight = new la(a.tileHeight * a.height);
        this.content = (new aa).add(b)
    };
    h["kit.creator.SceneSprite"] = Ta;
    Ta.__name__ = ["kit", "creator", "SceneSprite"];
    Ta.$yI = function(a) {
        null == a && (a = new fb);
        var b = ua.$qN("width"),
            c = ua.$qN("height"),
            d = Math.min(z.$KH.$aG.get_width() / b, z.$KH.$aG.get_height() / c);
        if (1 == ua.$qN("scaleMode")) {
            var e = Math.max(b, H["int"](ua.$qN("maxWidth"))),
                k = Math.max(c, H["int"](ua.$qN("maxHeight")));
            a.width = Math.min(z.$KH.$aG.get_width() / d, e);
            a.height = Math.min(z.$KH.$aG.get_height() / d, k)
        } else a.width = z.$KH.$aG.get_width() / d, a.height = z.$KH.$aG.get_height() / d;
        a.x = -(a.width / 2 - b / 2);
        a.y = -(a.height / 2 - c / 2);
        return a
    };
    Ta.__super__ = E;
    Ta.prototype = p(E.prototype, {
        onStart: function() { E.prototype.onStart.call(this); for (var a = 0, b = this.info.layers; a < b.length;) { var c = b[a];++a; var d = new aa;
                this.$vI(c, d);
                this.content.addChild(d) } this.$sH = null },
        setCamera: function(a, b, c,
            d) { this.cameraX.set__(a);
            this.cameraY.set__(b);
            this.cameraWidth.set__(c);
            this.cameraHeight.set__(d); return this },
        onAdded: function() { E.prototype.onAdded.call(this);
            this.owner.addChild(this.content) },
        draw: function(a) { null != this.camera && this.camera.$mH(this); if (this.drawBackgroundColor) { var b = Ta.$yI(Ta.$zI);
                a.fillRect(this.info.backgroundColor, b.x, b.y, b.width, b.height) } },
        onUpdate: function(a) { E.prototype.onUpdate.call(this, a);
            this.cameraX.update(a);
            this.cameraY.update(a);
            this.cameraWidth.update(a);
            this.cameraHeight.update(a) },
        $vI: function(a, b) { var c; switch (a.type[1]) {
                case 0:
                    c = new oe(this, this.info, a); break;
                case 1:
                    c = new E } c.alpha.set__(a.opacity);
            c.set_visible(a.visible);
            b.add(c); switch (a.type[1]) {
                case 1:
                    c = 0; for (var d = a.objects; c < d.length;) { var e = d[c];++c; var k = this.$wI(e, !0); if (null == k || k.spawned) { var f = this.objects.h[e.__id__]; if (e.shape == va.Tile) { if (null == f) { var g = f = new aa;
                                    this.objects.set(e, g) } f.add(e.createSprite());
                                null != k && f.add(k) } null != f && b.addChild(f) } } } this.layers.set(a.name, b) },
        createObject: function(a) {
            var b =
                new aa,
                c = this.$wI(a, !1);
            a.shape == va.Tile && b.add(a.createSprite());
            null != c && b.add(c);
            return b
        },
        getNaturalWidth: function() { return this.info.symbol ? 0 : this.cameraWidth.$tG },
        getNaturalHeight: function() { return this.info.symbol ? 0 : this.cameraHeight.$tG },
        $wI: function(a, b) {
            if (null == a.type) return null;
            if (b) { var c = this.objects.h[a.__id__]; if (null != c && (c = c.$PG[1], null != c)) return c } c = ga.resolveClass(a.type);
            if (null == c || null == c.__rtti) return null;
            var d = ga.createInstance(c, []);
            if (b) {
                var e = (new aa).add(d);
                this.objects.set(a,
                    e)
            }
            this.$xI(a, d, c);
            return d
        },
        $xI: function(a, b, c) { null == this.$sH && (this.$sH = new W); var d = this.$sH.get(a.type);
            null == d && (c = d = vc.$PO(c, new W), this.$sH.set(a.type, c)); for (c = a.properties.keys(); c.hasNext();) { var e = c.next(),
                    k = a.properties.get(e),
                    f;
                f = null != Za[e] ? d.getReserved(e) : d.h[e];
                null != f ? (k = this.$pH(f.type, k, a.type + "." + e), null != k && L.setProperty(b, e, k)) : null } b.info = a },
        $pH: function(a, b, c) {
            var d = vc.$pH(a, b);
            if (null != d) return d;
            switch (a[1]) {
                case 3:
                    switch (a[2]) {
                        case "Null":
                            return this.$pH(a[3].first(),
                                b, c);
                        default:
                            null
                    }
                    break;
                case 2:
                    d = a[2];
                    switch (a[2]) {
                        case "Array":
                            a = a[3].first();
                            var d = [],
                                e = 0;
                            for (b = b.split(","); e < b.length;) { var k = b[e];++e;
                                d.push(this.$pH(a, Z.trim(k), c)) }
                            return d;
                        case "kit.creator.ObjectInfo":
                            return this.info.getObject(b, !1);
                        case "kit.creator.LayerInfo":
                            return this.info.getLayer(b, !1);
                        case "kit.Entity":
                            c = this.info.getObject(b, !1);
                            if (null == c) return null;
                            c = this.$wI(c, !0);
                            return null != c ? c.owner : null;
                        default:
                            c = ga.resolveClass(d);
                            b = this.info.getObject(b, !1);
                            if (null == b) return null;
                            b = this.$wI(b,
                                !0);
                            if (null != b) { if (V.__instanceof(b, c)) return b;
                                null }
                    }
                    break;
                default:
                    null
            }
            return null
        },
        __class__: Ta
    });
    var oe = function(a, b, c) { E.call(this);
        this.$$I = a;
        this.$_I = b;
        this.$AJ = c };
    h.$CP = oe;
    oe.__name__ = ["$CP"];
    oe.__super__ = E;
    oe.prototype = p(E.prototype, {
        getNaturalWidth: function() { return this.$_I.tileWidth * this.$AJ.width },
        getNaturalHeight: function() { return this.$_I.tileHeight * this.$AJ.height },
        containsLocal: function(a, b) {
            var c = a / this.$_I.tileWidth | 0;
            if (0 > c || c >= this.$AJ.width) return !1;
            var d = b / this.$_I.tileHeight |
                0;
            return 0 > d || d >= this.$AJ.height ? !1 : null != this.$AJ.tiles[d * this.$AJ.width + c]
        },
        draw: function(a) {
            var b = this.$_I.tileWidth,
                c = this.$_I.tileHeight,
                d = this.$AJ.width,
                e = this.$AJ.height,
                k = Ta.$yI(Ta.$zI);
            k.x = (k.x - this.x.$tG) / this.scaleX.$tG;
            k.y = (k.y - this.y.$tG) / this.scaleY.$tG;
            k.width /= this.scaleX.$tG;
            k.height /= this.scaleY.$tG;
            for (var f = sa.clamp(k.x / b | 0, 0, d), g = sa.clamp(k.y / c | 0, 0, e), h = sa.clamp(f + Math.ceil(k.width / b) + 1, 0, d), e = sa.clamp(g + Math.ceil(k.height / c) + 1, 0, e); g < e;)
                for (var k = g++, l = f; l < h;) {
                    var m = l++,
                        n = this.$AJ.tiles[k *
                            d + m];
                    if (null != n) { var p = n.tileset;
                        a.drawTexture(n.texture, m * b + p.offsetX, k * c + p.offsetY - p.tileHeight + c) }
                }
        },
        __class__: oe
    });
    var Sa = function() { this.cameraEnabled = rb.Yes;
        this.dockY = Bb.None;
        this.dockX = Cb.None;
        this.onPointerDown = this.onPointerIn = this.onPointerOut = this.onPointerUp = this.onClick = null;
        this.pointerEnabled = !0;
        ab.call(this) };
    h["kit.creator.ui.Widget"] = Sa;
    Sa.__name__ = ["kit", "creator", "ui", "Widget"];
    Sa.__super__ = ab;
    Sa.prototype = p(ab.prototype, {
        onStart: function() {
            var a = this;
            ab.prototype.onStart.call(this);
            var b = this.owner.$PG[3];
            if (null != b) {
                b.set_pointerEnabled(this.pointerEnabled);
                null != this.onPointerDown && this.$BJ(b.get_pointerDown(), this.onPointerDown);
                null != this.onPointerIn && this.$BJ(b.get_pointerIn(), this.onPointerIn);
                null != this.onPointerOut && this.$BJ(b.get_pointerOut(), this.onPointerOut);
                null != this.onPointerUp && this.$BJ(b.get_pointerUp(), this.onPointerUp);
                null != this.onClick && b.get_pointerDown().connect(function(b) { z.$KH.$YG.up.connect(function(b) { a.owner.emitMessageToParents(a.onClick, a.owner) }).once() });
                var c = this.owner._internal_getFromParents(3, Ta),
                    d = function() { var c = ua.$qN("width"),
                            d = ua.$qN("height"),
                            f = Ta.$yI(Sa.$zI); switch (a.dockX[1]) {
                            case 1:
                                b.x.set__(a.info.x + f.x); break;
                            case 2:
                                b.x.set__(a.info.x + f.width - c + f.x) } switch (a.dockY[1]) {
                            case 1:
                                b.y.set__(a.info.y + f.y); break;
                            case 2:
                                b.y.set__(a.info.y + f.height - d + f.y) } };
                if (this.dockX != Cb.None || this.dockY != Bb.None) d(), this.connect0(z.$KH.$aG.resize, d);
                this.cameraEnabled != rb.Yes && c.owner.addChild(this.owner, this.cameraEnabled == rb.Foreground)
            }
        },
        $BJ: function(a,
            b) { var c = this;
            a.connect(function(a) { null != c.owner && c.owner.emitMessageToParents(b, c.owner) }) },
        __class__: Sa
    });
    var sd = function() { this.textScale = 1;
        this.text = "Your text";
        this.letterSpacing = this.lineSpacing = 0;
        this.textAlign = ea.Left;
        Sa.call(this) };
    h["kit.creator.ui.BitmapText"] = sd;
    sd.__name__ = ["kit", "creator", "ui", "BitmapText"];
    sd.__super__ = Sa;
    sd.prototype = p(Sa.prototype, {
        onStart: function() {
            var a = this.owner._internal_getFromParents(2),
                a = new Ub(a.getFont(this.font));
            a.set_align(this.textAlign);
            a.letterSpacing.set__(this.letterSpacing);
            a.lineSpacing.set__(this.lineSpacing);
            a.wrapWidth.set__(this.info.width / this.textScale);
            this.owner.add(a);
            this.info.transformSprite(a);
            var b = a.scaleX;
            b.set__(b.$tG * this.textScale);
            a = a.scaleY;
            a.set__(a.$tG * this.textScale);
            this.$DJ(!0);
            Sa.prototype.onStart.call(this)
        },
        $CJ: function() { return H.instance(this.owner.$PG[3], Ub) },
        $DJ: function(a) {
            var b = this,
                c = H.instance(this.owner.$PG[3], Ub);
            if (null != this.owner._internal_getFromParents(4)) {
                var d = Z.replace(this.text, "\\n", "\n"),
                    e = null;
                c.set_text((new q("{(.+?)}",
                    "g")).map(d, function(c) { var d = c.matched(1); if (null == e)
                        for (e = [], c = b.owner; null != c;) { var f = c.$PG[16];
                            null != f && e.push(f);
                            c = c.parent }
                    if (a)
                        for (c = 0; c < e.length;) f = e[c], ++c, b.connect2(f.changed, function(a, c) { a == d && b.$DJ(!1) }); for (c = 0; c < e.length;)
                        if (f = e[c], ++c, f = f.get(d), null != f) return "" + f; return "0" }))
            }
        },
        __class__: sd
    });
    var wc = function() { this.pressDistance = 10;
        Sa.call(this) };
    h["kit.creator.ui.Button"] = wc;
    wc.__name__ = ["kit", "creator", "ui", "Button"];
    wc.__super__ = Sa;
    wc.prototype = p(Sa.prototype, {
        onStart: function() {
            var a =
                this,
                b = this.owner.$PG[3],
                c;
            c = b instanceof rd ? b : null;
            var d = !1,
                e = !1;
            b.get_pointerIn().connect(function(a) { e = !0;
                null != c && c.loop(d ? "down" : "hover", !1) });
            b.get_pointerOut().connect(function(a) { e = !1;
                null != c && c.loop("up") });
            b.get_pointerDown().connect(function(k) { d = !0;
                k = b.y;
                k.set__(k.$tG + a.pressDistance);
                null != c && c.loop("down");
                z.$KH.$YG.up.connect(function(k) { d = !1;
                    k = b.y;
                    k.set__(k.$tG - a.pressDistance);
                    null != c && c.loop(e ? "hover" : "up") }).once() });
            Sa.prototype.onStart.call(this)
        },
        __class__: wc
    });
    var td = function() {
        this.textAlign =
            ea.Left;
        this.strokeWidth = this.lineSpacing = 0;
        this.strokeColor = 16777215;
        this.color = 0;
        this.bold = this.italic = !1;
        this.fontSize = 24;
        this.text = "Your text";
        this.font = this.systemFont = null;
        Sa.call(this)
    };
    h["kit.creator.ui.Text"] = td;
    td.__name__ = ["kit", "creator", "ui", "Text"];
    td.__super__ = Sa;
    td.prototype = p(Sa.prototype, {
        onStart: function() {
            var a;
            a = null != this.font ? this.owner._internal_getFromParents(2).getVectorFont(this.font) : z.$KH.$ZG.createSystemFont(null != this.systemFont ? this.systemFont : "sans");
            a = new xc(a, Z.replace(this.text,
                "\\n", "\n"));
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
            this.$DJ(!0);
            Sa.prototype.onStart.call(this)
        },
        $DJ: function(a) {
            var b = this,
                c = H.instance(this.owner.$PG[3], xc);
            if (null != this.owner._internal_getFromParents(4)) {
                var d =
                    Z.replace(this.text, "\\n", "\n"),
                    e = null;
                c.set_text((new q("{(.+?)}", "g")).map(d, function(c) { var d = c.matched(1); if (null == e)
                        for (e = [], c = b.owner; null != c;) { var f = c.$PG[16];
                            null != f && e.push(f);
                            c = c.parent }
                    if (a)
                        for (c = 0; c < e.length;) f = e[c], ++c, b.connect2(f.changed, function(a, c) { a == d && b.$DJ(!1) }); for (c = 0; c < e.length;)
                        if (f = e[c], ++c, f = f.get(d), null != f) return "" + f; return "0" }))
            }
        },
        __class__: td
    });
    var rb = h["kit.creator.ui.CameraSetting"] = {
        __ename__: ["kit", "creator", "ui", "CameraSetting"],
        __constructs__: ["Yes", "Background",
            "Foreground"
        ]
    };
    rb.Yes = ["Yes", 0];
    rb.Yes.toString = l;
    rb.Yes.__enum__ = rb;
    rb.Background = ["Background", 1];
    rb.Background.toString = l;
    rb.Background.__enum__ = rb;
    rb.Foreground = ["Foreground", 2];
    rb.Foreground.toString = l;
    rb.Foreground.__enum__ = rb;
    var Cb = h["kit.creator.ui.DockX"] = { __ename__: ["kit", "creator", "ui", "DockX"], __constructs__: ["None", "Left", "Right"] };
    Cb.None = ["None", 0];
    Cb.None.toString = l;
    Cb.None.__enum__ = Cb;
    Cb.Left = ["Left", 1];
    Cb.Left.toString = l;
    Cb.Left.__enum__ = Cb;
    Cb.Right = ["Right", 2];
    Cb.Right.toString =
        l;
    Cb.Right.__enum__ = Cb;
    var Bb = h["kit.creator.ui.DockY"] = { __ename__: ["kit", "creator", "ui", "DockY"], __constructs__: ["None", "Top", "Bottom"] };
    Bb.None = ["None", 0];
    Bb.None.toString = l;
    Bb.None.__enum__ = Bb;
    Bb.Top = ["Top", 1];
    Bb.Top.toString = l;
    Bb.Top.__enum__ = Bb;
    Bb.Bottom = ["Bottom", 2];
    Bb.Bottom.toString = l;
    Bb.Bottom.__enum__ = Bb;
    var qa = h["kit.display.BlendMode"] = { __ename__: ["kit", "display", "BlendMode"], __constructs__: "Normal Add Multiply Screen Mask Copy".split(" ") };
    qa.Normal = ["Normal", 0];
    qa.Normal.toString = l;
    qa.Normal.__enum__ = qa;
    qa.Add = ["Add", 1];
    qa.Add.toString = l;
    qa.Add.__enum__ = qa;
    qa.Multiply = ["Multiply", 2];
    qa.Multiply.toString = l;
    qa.Multiply.__enum__ = qa;
    qa.Screen = ["Screen", 3];
    qa.Screen.toString = l;
    qa.Screen.__enum__ = qa;
    qa.Mask = ["Mask", 4];
    qa.Mask.toString = l;
    qa.Mask.__enum__ = qa;
    qa.Copy = ["Copy", 5];
    qa.Copy.toString = l;
    qa.Copy.__enum__ = qa;
    var pe = function() {};
    h["kit.display.Graphics"] = pe;
    pe.__name__ = ["kit", "display", "Graphics"];
    pe.prototype = { __class__: pe };
    var ke = function() { this.$FJ = [] };
    h["kit.display.BufferedGraphics"] =
        ke;
    ke.__name__ = ["kit", "display", "BufferedGraphics"];
    ke.__interfaces__ = [pe];
    ke.prototype = {
        save: function() { this.$EJ(new qe) },
        translate: function(a, b) { this.$EJ(new re(a, b)) },
        scale: function(a, b) { this.$EJ(new se(a, b)) },
        rotate: function(a) { this.$EJ(new te(a)) },
        transform: function(a, b, c, d, e, k) { this.$EJ(new ue(a, b, c, d, e, k)) },
        multiplyAlpha: function(a) { this.$EJ(new ve(a)) },
        setAlpha: function(a) { this.$EJ(new we(a)) },
        tint: function(a, b, c) { this.$EJ(new xe(a, b, c)) },
        setBlendMode: function(a) { this.$EJ(new ye(a)) },
        beginMask: function() { this.$EJ(new ze) },
        endMask: function() { this.$EJ(new Ae) },
        applyScissor: function(a, b, c, d) { this.$EJ(new Be(a, b, c, d)) },
        restore: function() { this.$EJ(new Ce) },
        drawTexture: function(a, b, c) { this.$EJ(new De(a, b, c)) },
        drawSubTexture: function(a, b, c, d, e, k, f) { this.$EJ(new Ee(a, b, c, d, e, k, f)) },
        drawPattern: function(a, b, c, d, e) { this.$EJ(new Fe(a, b, c, d, e)) },
        fillRect: function(a, b, c, d, e) { this.$EJ(new Ge(a, b, c, d, e)) },
        fillTriangles: function(a, b, c) { this.$EJ(new He(a, b.slice(), c.slice())) },
        drawTriangles: function(a, b, c, d) {
            this.$EJ(new Ie(a, b.slice(),
                c.slice(), null != d ? d.slice() : null))
        },
        fillPolygon: function(a, b) { this.$EJ(new Je(a, b.slice())) },
        drawPolygon: function(a, b) { this.$EJ(new Ke(a, b.slice())) },
        drawCircle: function(a, b, c, d, e) { null == e && (e = 50);
            this.$EJ(new Le(a, b, c, d, e)) },
        fillCircle: function(a, b, c, d, e) { null == e && (e = 50);
            this.$EJ(new Me(a, b, c, d, e)) },
        strokeCircle: function(a, b, c, d, e, k) { null == k && (k = 50);
            this.$EJ(new Ne(a, b, c, d, e, k)) },
        drawEllipse: function(a, b, c, d, e, k) { null == k && (k = 50);
            this.$EJ(new Oe(a, b, c, d, e, k)) },
        fillEllipse: function(a, b, c, d, e, k) {
            null ==
                k && (k = 50);
            this.$EJ(new Pe(a, b, c, d, e, k))
        },
        strokeEllipse: function(a, b, c, d, e, k, f) { null == f && (f = 50);
            this.$EJ(new Qe(a, b, c, d, e, k, f)) },
        fillArc: function(a, b, c, d, e, k, f) { null == f && (f = 50);
            this.$EJ(new Re(a, b, c, d, e, k, f)) },
        strokeArc: function(a, b, c, d, e, k, f, g) { null == g && (g = 50);
            this.$EJ(new Se(a, b, c, d, e, k, f, g)) },
        strokeLines: function(a, b, c) { this.$EJ(new Te(a, b.slice(), c)) },
        drawLines: function(a, b, c) { this.$EJ(new Ue(a, b.slice(), c)) },
        clear: function() { this.$FJ.length = 0 },
        render: function(a) {
            for (var b = this.$FJ.length, c = 0; c <
                b;) { var d = c++;
                this.$FJ[d].$GJ(a) }
        },
        $EJ: function(a) { this.$FJ.push(a) },
        __class__: ke
    };
    var O = function() {};
    h.$CQ = O;
    O.__name__ = ["$CQ"];
    O.prototype = { $GJ: function(a) {}, __class__: O };
    var qe = function() {};
    h.$CR = qe;
    qe.__name__ = ["$CR"];
    qe.__super__ = O;
    qe.prototype = p(O.prototype, { $GJ: function(a) { a.save() }, __class__: qe });
    var re = function(a, b) { this.$HJ = a;
        this.$IJ = b };
    h.$CS = re;
    re.__name__ = ["$CS"];
    re.__super__ = O;
    re.prototype = p(O.prototype, { $GJ: function(a) { a.translate(this.$HJ, this.$IJ) }, __class__: re });
    var se = function(a,
        b) { this.$HJ = a;
        this.$IJ = b };
    h.$CT = se;
    se.__name__ = ["$CT"];
    se.__super__ = O;
    se.prototype = p(O.prototype, { $GJ: function(a) { a.scale(this.$HJ, this.$IJ) }, __class__: se });
    var te = function(a) { this.$JJ = a };
    h.$CU = te;
    te.__name__ = ["$CU"];
    te.__super__ = O;
    te.prototype = p(O.prototype, { $GJ: function(a) { a.rotate(this.$JJ) }, __class__: te });
    var ue = function(a, b, c, d, e, k) { this.$KJ = a;
        this.$LJ = b;
        this.$MJ = c;
        this.$NJ = d;
        this.$OJ = e;
        this.$PJ = k };
    h.$CV = ue;
    ue.__name__ = ["$CV"];
    ue.__super__ = O;
    ue.prototype = p(O.prototype, {
        $GJ: function(a) {
            a.transform(this.$KJ,
                this.$LJ, this.$MJ, this.$NJ, this.$OJ, this.$PJ)
        },
        __class__: ue
    });
    var ve = function(a) { this.$QJ = a };
    h.$CW = ve;
    ve.__name__ = ["$CW"];
    ve.__super__ = O;
    ve.prototype = p(O.prototype, { $GJ: function(a) { a.multiplyAlpha(this.$QJ) }, __class__: ve });
    var we = function(a) { this.$RJ = a };
    h.$CX = we;
    we.__name__ = ["$CX"];
    we.__super__ = O;
    we.prototype = p(O.prototype, { $GJ: function(a) { a.setAlpha(this.$RJ) }, __class__: we });
    var xe = function(a, b, c) { this.$SJ = a;
        this.$TJ = b;
        this.$UJ = c };
    h.$CY = xe;
    xe.__name__ = ["$CY"];
    xe.__super__ = O;
    xe.prototype = p(O.prototype, { $GJ: function(a) { a.tint(this.$SJ, this.$TJ, this.$UJ) }, __class__: xe });
    var ye = function(a) { this.$VJ = a };
    h.$CZ = ye;
    ye.__name__ = ["$CZ"];
    ye.__super__ = O;
    ye.prototype = p(O.prototype, { $GJ: function(a) { a.setBlendMode(this.$VJ) }, __class__: ye });
    var Be = function(a, b, c, d) { this.$HJ = a;
        this.$IJ = b;
        this.$WJ = c;
        this.$XJ = d };
    h.$Ca = Be;
    Be.__name__ = ["$Ca"];
    Be.__super__ = O;
    Be.prototype = p(O.prototype, { $GJ: function(a) { a.applyScissor(this.$HJ, this.$IJ, this.$WJ, this.$XJ) }, __class__: Be });
    var ze = function() {};
    h.$Cb = ze;
    ze.__name__ = ["$Cb"];
    ze.__super__ = O;
    ze.prototype = p(O.prototype, { $GJ: function(a) { a.beginMask() }, __class__: ze });
    var Ae = function() {};
    h.$Cc = Ae;
    Ae.__name__ = ["$Cc"];
    Ae.__super__ = O;
    Ae.prototype = p(O.prototype, { $GJ: function(a) { a.endMask() }, __class__: Ae });
    var Ce = function() {};
    h.$Cd = Ce;
    Ce.__name__ = ["$Cd"];
    Ce.__super__ = O;
    Ce.prototype = p(O.prototype, { $GJ: function(a) { a.restore() }, __class__: Ce });
    var De = function(a, b, c) { this.$YJ = a;
        this.$ZJ = b;
        this.$aJ = c };
    h.$Ce = De;
    De.__name__ = ["$Ce"];
    De.__super__ = O;
    De.prototype = p(O.prototype, {
        $GJ: function(a) {
            a.drawTexture(this.$YJ,
                this.$ZJ, this.$aJ)
        },
        __class__: De
    });
    var Ee = function(a, b, c, d, e, k, f) { this.$YJ = a;
        this.$ZJ = b;
        this.$aJ = c;
        this.$bJ = d;
        this.$cJ = e;
        this.$dJ = k;
        this.$eJ = f };
    h.$Cf = Ee;
    Ee.__name__ = ["$Cf"];
    Ee.__super__ = O;
    Ee.prototype = p(O.prototype, { $GJ: function(a) { a.drawSubTexture(this.$YJ, this.$ZJ, this.$aJ, this.$bJ, this.$cJ, this.$dJ, this.$eJ) }, __class__: Ee });
    var Fe = function(a, b, c, d, e) { this.$YJ = a;
        this.$ZJ = b;
        this.$aJ = c;
        this.$WJ = d;
        this.$XJ = e };
    h.$Cg = Fe;
    Fe.__name__ = ["$Cg"];
    Fe.__super__ = O;
    Fe.prototype = p(O.prototype, {
        $GJ: function(a) {
            a.drawPattern(this.$YJ,
                this.$ZJ, this.$aJ, this.$WJ, this.$XJ)
        },
        __class__: Fe
    });
    var He = function(a, b, c) { this.$fJ = a;
        this.$gJ = b;
        this.$hJ = c };
    h.$Ch = He;
    He.__name__ = ["$Ch"];
    He.__super__ = O;
    He.prototype = p(O.prototype, { $GJ: function(a) { a.fillTriangles(this.$fJ, this.$gJ, this.$hJ) }, __class__: He });
    var Ie = function(a, b, c, d) { this.$YJ = a;
        this.$gJ = b;
        this.$hJ = c;
        this.$iJ = d };
    h.$Ci = Ie;
    Ie.__name__ = ["$Ci"];
    Ie.__super__ = O;
    Ie.prototype = p(O.prototype, { $GJ: function(a) { a.drawTriangles(this.$YJ, this.$gJ, this.$hJ, this.$iJ) }, __class__: Ie });
    var Je = function(a,
        b) { this.$fJ = a;
        this.$gJ = b };
    h.$Cj = Je;
    Je.__name__ = ["$Cj"];
    Je.__super__ = O;
    Je.prototype = p(O.prototype, { $GJ: function(a) { a.fillPolygon(this.$fJ, this.$gJ) }, __class__: Je });
    var Ke = function(a, b) { this.$YJ = a;
        this.$gJ = b };
    h.$Ck = Ke;
    Ke.__name__ = ["$Ck"];
    Ke.__super__ = O;
    Ke.prototype = p(O.prototype, { $GJ: function(a) { a.drawPolygon(this.$YJ, this.$gJ) }, __class__: Ke });
    var Le = function(a, b, c, d, e) { this.$YJ = a;
        this.$jJ = b;
        this.$kJ = c;
        this.$lJ = d;
        this.$mJ = e };
    h.$Cl = Le;
    Le.__name__ = ["$Cl"];
    Le.__super__ = O;
    Le.prototype = p(O.prototype, {
        $GJ: function(a) {
            a.drawCircle(this.$YJ,
                this.$jJ, this.$kJ, this.$lJ, this.$mJ)
        },
        __class__: Le
    });
    var Me = function(a, b, c, d, e) { this.$fJ = a;
        this.$jJ = b;
        this.$kJ = c;
        this.$lJ = d;
        this.$mJ = e };
    h.$Cm = Me;
    Me.__name__ = ["$Cm"];
    Me.__super__ = O;
    Me.prototype = p(O.prototype, { $GJ: function(a) { a.fillCircle(this.$fJ, this.$jJ, this.$kJ, this.$lJ, this.$mJ) }, __class__: Me });
    var Ne = function(a, b, c, d, e, k) { this.$fJ = a;
        this.$jJ = b;
        this.$kJ = c;
        this.$lJ = d;
        this.$nJ = e;
        this.$mJ = k };
    h.$Cn = Ne;
    Ne.__name__ = ["$Cn"];
    Ne.__super__ = O;
    Ne.prototype = p(O.prototype, {
        $GJ: function(a) {
            a.strokeCircle(this.$fJ,
                this.$jJ, this.$kJ, this.$lJ, this.$nJ, this.$mJ)
        },
        __class__: Ne
    });
    var Pe = function(a, b, c, d, e, k) { this.$fJ = a;
        this.$jJ = b;
        this.$kJ = c;
        this.$oJ = d;
        this.$pJ = e;
        this.$mJ = k };
    h.$Co = Pe;
    Pe.__name__ = ["$Co"];
    Pe.__super__ = O;
    Pe.prototype = p(O.prototype, { $GJ: function(a) { a.fillEllipse(this.$fJ, this.$jJ, this.$kJ, this.$oJ, this.$pJ, this.$mJ) }, __class__: Pe });
    var Oe = function(a, b, c, d, e, k) { this.$YJ = a;
        this.$jJ = b;
        this.$kJ = c;
        this.$oJ = d;
        this.$pJ = e;
        this.$mJ = k };
    h.$Cp = Oe;
    Oe.__name__ = ["$Cp"];
    Oe.__super__ = O;
    Oe.prototype = p(O.prototype, {
        $GJ: function(a) {
            a.drawEllipse(this.$YJ,
                this.$jJ, this.$kJ, this.$oJ, this.$pJ, this.$mJ)
        },
        __class__: Oe
    });
    var Qe = function(a, b, c, d, e, k, f) { this.$fJ = a;
        this.$jJ = b;
        this.$kJ = c;
        this.$oJ = d;
        this.$pJ = e;
        this.$nJ = k;
        this.$mJ = f };
    h.$Cq = Qe;
    Qe.__name__ = ["$Cq"];
    Qe.__super__ = O;
    Qe.prototype = p(O.prototype, { $GJ: function(a) { a.strokeEllipse(this.$fJ, this.$jJ, this.$kJ, this.$oJ, this.$pJ, this.$nJ, this.$mJ) }, __class__: Qe });
    var Re = function(a, b, c, d, e, k, f) { this.$fJ = a;
        this.$jJ = b;
        this.$kJ = c;
        this.$lJ = d;
        this.$qJ = e;
        this.$rJ = k;
        this.$mJ = f };
    h.$Cr = Re;
    Re.__name__ = ["$Cr"];
    Re.__super__ =
        O;
    Re.prototype = p(O.prototype, { $GJ: function(a) { a.fillArc(this.$fJ, this.$jJ, this.$kJ, this.$lJ, this.$qJ, this.$rJ, this.$mJ) }, __class__: Re });
    var Se = function(a, b, c, d, e, k, f, g) { this.$fJ = a;
        this.$jJ = b;
        this.$kJ = c;
        this.$lJ = d;
        this.$qJ = e;
        this.$rJ = k;
        this.$nJ = f;
        this.$mJ = g };
    h.$Cs = Se;
    Se.__name__ = ["$Cs"];
    Se.__super__ = O;
    Se.prototype = p(O.prototype, { $GJ: function(a) { a.strokeArc(this.$fJ, this.$jJ, this.$kJ, this.$lJ, this.$qJ, this.$rJ, this.$nJ, this.$mJ) }, __class__: Se });
    var Te = function(a, b, c) {
        this.$fJ = a;
        this.$gJ = b;
        this.$sJ =
            c
    };
    h.$Ct = Te;
    Te.__name__ = ["$Ct"];
    Te.__super__ = O;
    Te.prototype = p(O.prototype, { $GJ: function(a) { a.strokeLines(this.$fJ, this.$gJ, this.$sJ) }, __class__: Te });
    var Ue = function(a, b, c) { this.$YJ = a;
        this.$gJ = b;
        this.$sJ = c };
    h.$Cu = Ue;
    Ue.__name__ = ["$Cu"];
    Ue.__super__ = O;
    Ue.prototype = p(O.prototype, { $GJ: function(a) { a.drawLines(this.$YJ, this.$gJ, this.$sJ) }, __class__: Ue });
    var Ge = function(a, b, c, d, e) { this.$fJ = a;
        this.$HJ = b;
        this.$IJ = c;
        this.$WJ = d;
        this.$XJ = e };
    h.$Cv = Ge;
    Ge.__name__ = ["$Cv"];
    Ge.__super__ = O;
    Ge.prototype = p(O.prototype, { $GJ: function(a) { a.fillRect(this.$fJ, this.$HJ, this.$IJ, this.$WJ, this.$XJ) }, __class__: Ge });
    var ud = function(a, b, c) { E.call(this);
        this.color = a;
        this.width = new la(b);
        this.height = new la(c) };
    h["kit.display.FillSprite"] = ud;
    ud.__name__ = ["kit", "display", "FillSprite"];
    ud.__super__ = E;
    ud.prototype = p(E.prototype, {
        draw: function(a) { a.fillRect(this.color, 0, 0, this.width.$tG, this.height.$tG) },
        getNaturalWidth: function() { return this.width.$tG },
        getNaturalHeight: function() { return this.height.$tG },
        setSize: function(a, b) {
            this.width.set__(a);
            this.height.set__(b);
            return this
        },
        onUpdate: function(a) { E.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a) },
        __class__: ud
    });
    var Ve = function(a) { this.$uJ = null;
        this.xOffset = this.yOffset = this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a };
    h["kit.display.Glyph"] = Ve;
    Ve.__name__ = ["kit", "display", "Glyph"];
    Ve.prototype = {
        draw: function(a, b, c) { 0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height) },
        getKerning: function(a) { return null != this.$uJ ? H["int"](this.$uJ.h[a]) : 0 },
        $tJ: function(a, b) { null == this.$uJ && (this.$uJ = new nb);
            this.$uJ.h[a] = b },
        __class__: Ve
    };
    var Kc = function(a, b) { this.name = b;
        this.$oI = a;
        this.$qH = a.getFile(b + ".fnt");
        this.$nH() };
    h["kit.display.Font"] = Kc;
    Kc.__name__ = ["kit", "display", "Font"];
    Kc.prototype = {
        disposeFiles: function() { this.$qH.dispose(); return this },
        layoutText: function(a, b, c, d, e) { null == e && (e = 0);
            null == d && (d = 0);
            null == c && (c = 0);
            null == b && (b = ea.Left); return new yc(this, a, b, c, d, e) },
        $nH: function() {
            this.$vJ =
                new nb;
            this.$vJ.h[Kc.$wJ.charCode] = Kc.$wJ;
            for (var a = new Pc(this.$qH.toString()), b = new nb, c = this.name.lastIndexOf("/"), c = 0 <= c ? I.substr(this.name, 0, c + 1) : "", d = a.$_J(); d.hasNext();) switch (d.next()) {
                case "info":
                    for (var e = a.$AK(); e.hasNext();) { var k = e.next(); switch (k.$GK) {
                            case "size":
                                this.size = k.$HK(); break;
                            case "face":
                                this.typeface = k.$IK() } }
                    break;
                case "common":
                    for (e = a.$AK(); e.hasNext();) switch (k = e.next(), k.$GK) {
                        case "lineHeight":
                            this.lineHeight = k.$HK() }
                    break;
                case "page":
                    for (var e = 0, k = null, f = a.$AK(); f.hasNext();) {
                        var g =
                            f.next();
                        switch (g.$GK) {
                            case "id":
                                e = g.$HK(); break;
                            case "file":
                                k = g.$IK() }
                    }
                    k = this.$oI.getTexture(c + qb.removeFileExtension(k));
                    b.h[e] = k;
                    break;
                case "char":
                    e = null;
                    for (k = a.$AK(); k.hasNext();) switch (f = k.next(), f.$GK) {
                        case "id":
                            e = new Ve(f.$HK());
                            break;
                        case "x":
                            e.x = f.$HK();
                            break;
                        case "y":
                            e.y = f.$HK();
                            break;
                        case "width":
                            e.width = f.$HK();
                            break;
                        case "height":
                            e.height = f.$HK();
                            break;
                        case "page":
                            f = f.$HK();
                            e.page = b.h[f];
                            break;
                        case "xoffset":
                            e.xOffset = f.$HK();
                            break;
                        case "yoffset":
                            e.yOffset = f.$HK();
                            break;
                        case "xadvance":
                            e.xAdvance =
                                f.$HK()
                    }
                    this.$vJ.h[e.charCode] = e;
                    break;
                case "kerning":
                    g = null;
                    k = e = 0;
                    for (f = a.$AK(); f.hasNext();) { var h = f.next(); switch (h.$GK) {
                            case "first":
                                g = h.$HK();
                                g = this.$vJ.h[g]; break;
                            case "second":
                                e = h.$HK(); break;
                            case "amount":
                                k = h.$HK() } } null != g && 0 != k && g.$tJ(e, k)
            }
        },
        __class__: Kc
    };
    var ea = h["kit.display.TextAlign"] = { __ename__: ["kit", "display", "TextAlign"], __constructs__: ["Left", "Center", "Right"] };
    ea.Left = ["Left", 0];
    ea.Left.toString = l;
    ea.Left.__enum__ = ea;
    ea.Center = ["Center", 1];
    ea.Center.toString = l;
    ea.Center.__enum__ =
        ea;
    ea.Right = ["Right", 2];
    ea.Right.toString = l;
    ea.Right.__enum__ = ea;
    var yc = function(a, b, c, d, e, k) {
        this.lines = 0;
        var f = this;
        this.$xJ = a;
        this.$vJ = [];
        this.$yJ = [];
        this.$zJ = Math.round(a.lineHeight + k);
        this.bounds = new fb;
        var g = [];
        k = b.length;
        for (var h = 0; h < k;) { var l = h++,
                l = b.charCodeAt(l),
                l = a.$vJ.h[l];
            null != l ? this.$vJ.push(l) : null } b = -1;
        var m = 0,
            n = 0;
        a = a.$vJ.h[10];
        k = function() { f.bounds.width = sa.max(f.bounds.width, m);
            f.bounds.height += n;
            g[f.lines] = m;
            n = m = 0;++f.lines };
        for (h = 0; h < this.$vJ.length;) {
            l = this.$vJ[h];
            this.$yJ[h] =
                Math.round(m);
            var p = 0 < d && m + l.width > d;
            p || l == a ? (p && (0 <= b ? (this.$vJ[b] = a, m = this.$yJ[b], h = b) : this.$vJ.splice(h, 0, a)), b = -1, n = this.$zJ, k()) : (32 == l.charCode && (b = h), m += l.xAdvance + e, n = sa.max(n, l.height + l.yOffset), h + 1 < this.$vJ.length && (m += l.getKerning(this.$vJ[h + 1].charCode)));
            ++h
        }
        k();
        e = 0;
        a = yc.$$J(c, g[0], d);
        b = 1.79769313486231E308;
        k = -1.79769313486231E308;
        l = h = 0;
        for (p = this.$vJ.length; l < p;) {
            var q = this.$vJ[l];
            10 == q.charCode && (e += this.$zJ, ++h, a = yc.$$J(c, g[h], d));
            this.$yJ[l] += a;
            var r = e + q.yOffset;
            b = b < r ? b : r;
            k = sa.max(k,
                r + q.height);
            ++l
        }
        this.bounds.x = yc.$$J(c, this.bounds.width, d);
        this.bounds.y = b;
        this.bounds.height = k - b
    };
    h["kit.display.TextLayout"] = yc;
    yc.__name__ = ["kit", "display", "TextLayout"];
    yc.$$J = function(a, b, c) { switch (a[1]) {
            case 0:
                return 0;
            case 2:
                return c - b;
            case 1:
                return Math.round((c - b) / 2) } };
    yc.prototype = { draw: function(a) { for (var b = 0, c = 0, d = this.$vJ.length; c < d;) { var e = this.$vJ[c];
                10 == e.charCode ? b += this.$zJ : e.draw(a, this.$yJ[c], b);++c } }, __class__: yc };
    var Pc = function(a) {
        this.$BK = a;
        this.$DK = new q("([A-Za-z]+)(.*)",
            "");
        this.$EK = new q('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    h.$Cw = Pc;
    Pc.__name__ = ["$Cw"];
    Pc.$FK = function(a, b) { var c = b.matchedPos(); return I.substr(a, c.pos + c.len, a.length) };
    Pc.prototype = {
        $_J: function() { var a = this,
                b = this.$BK; return { next: function() { b = Pc.$FK(b, a.$DK);
                    a.$CK = a.$DK.matched(2); return a.$DK.matched(1) }, hasNext: function() { return a.$DK.match(b) } } },
        $AK: function() { var a = this,
                b = this.$CK; return { next: function() { b = Pc.$FK(b, a.$EK); return new Ng(a.$EK.matched(1), a.$EK.matched(2)) }, hasNext: function() { return a.$EK.match(b) } } },
        __class__: Pc
    };
    var Ng = function(a, b) { this.$GK = a;
        this.$tG = b };
    h.$Cx = Ng;
    Ng.__name__ = ["$Cx"];
    Ng.prototype = { $HK: function() { return H.parseInt(this.$tG) }, $IK: function() { return 34 != this.$tG.charCodeAt(0) ? null : I.substr(this.$tG, 1, this.$tG.length - 2) }, __class__: Ng };
    var Ob = function(a) { E.call(this);
        this.texture = a };
    h["kit.display.ImageSprite"] = Ob;
    Ob.__name__ = ["kit", "display", "ImageSprite"];
    Ob.__super__ = E;
    Ob.prototype = p(E.prototype, {
        draw: function(a) { null != this.texture && a.drawTexture(this.texture, 0, 0) },
        getNaturalWidth: function() {
            return null !=
                this.texture ? this.texture.get_width() : 0
        },
        getNaturalHeight: function() { return null != this.texture ? this.texture.get_height() : 0 },
        __class__: Ob
    });
    var Vb = h["kit.display.Orientation"] = { __ename__: ["kit", "display", "Orientation"], __constructs__: ["Portrait", "Landscape"] };
    Vb.Portrait = ["Portrait", 0];
    Vb.Portrait.toString = l;
    Vb.Portrait.__enum__ = Vb;
    Vb.Landscape = ["Landscape", 1];
    Vb.Landscape.toString = l;
    Vb.Landscape.__enum__ = Vb;
    var Tb = function() {
        this.$SK = null;
        this.$RK = [];
        this.$OK = this.$PK = this.$QK = null;
        this.$NK = new la(1);
        this.$MK = new la(1);
        this.$LK = new la(1);
        this.$JK = this.$KK = null
    };
    h.$Cy = Tb;
    Tb.__name__ = ["$Cy"];
    Tb.prototype = { __class__: Tb };
    var We = function() {};
    h["kit.display.Texture"] = We;
    We.__name__ = ["kit", "display", "Texture"];
    We.__interfaces__ = [bc];
    We.prototype = { __class__: We, __properties__: { get_graphics: "get_graphics", get_height: "get_height", get_width: "get_width" } };
    var Ph = function() {};
    h["kit.display.SubTexture"] = Ph;
    Ph.__name__ = ["kit", "display", "SubTexture"];
    Ph.__interfaces__ = [We];
    var Ub = function(a, b) {
        null == b && (b = "");
        this.$YK = null;
        var c = this;
        E.call(this);
        this.$xJ = a;
        this.$WK = b;
        this.$XK = ea.Left;
        this.$B |= 256;
        var d = function(a, b) { c.$B |= 256 };
        this.wrapWidth = new la(0, d);
        this.letterSpacing = new la(0, d);
        this.lineSpacing = new la(0, d)
    };
    h["kit.display.TextSprite"] = Ub;
    Ub.__name__ = ["kit", "display", "TextSprite"];
    Ub.__super__ = E;
    Ub.prototype = p(E.prototype, {
        draw: function(a) { this.$VK();
            this.$YK.draw(a) },
        getNaturalWidth: function() { this.$VK(); return 0 < this.wrapWidth.$tG ? this.wrapWidth.$tG : this.$YK.bounds.width },
        getNaturalHeight: function() {
            this.$VK();
            var a = this.$YK.lines * (this.$xJ.lineHeight + this.lineSpacing.$tG),
                b = this.$YK.bounds.height;
            return a > b ? a : b
        },
        containsLocal: function(a, b) { this.$VK(); return this.$YK.bounds.contains(a, b) },
        setWrapWidth: function(a) { this.wrapWidth.set__(a); return this },
        setLetterSpacing: function(a) { this.letterSpacing.set__(a); return this },
        setLineSpacing: function(a) { this.lineSpacing.set__(a); return this },
        set_text: function(a) { a != this.$WK && (this.$WK = a, this.$B |= 256); return a },
        set_font: function(a) {
            a != this.$xJ && (this.$xJ = a, this.$B |=
                256);
            return a
        },
        set_align: function(a) { a != this.$XK && (this.$XK = a, this.$B |= 256); return a },
        $VK: function() { 0 != (this.$B & 256) && (this.$B &= -257, this.$YK = this.$xJ.layoutText(this.$WK, this.$XK, this.wrapWidth.$tG, this.letterSpacing.$tG, this.lineSpacing.$tG)) },
        onUpdate: function(a) { E.prototype.onUpdate.call(this, a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a) },
        __class__: Ub,
        __properties__: p(E.prototype.__properties__, { set_align: "set_align", set_font: "set_font", set_text: "set_text" })
    });
    var Fa = h["kit.display.TextureFormat"] = { __ename__: ["kit", "display", "TextureFormat"], __constructs__: ["RGBA", "RGBA_4444", "RGB", "RGB_565", "COMPRESSED"] };
    Fa.RGBA = ["RGBA", 0];
    Fa.RGBA.toString = l;
    Fa.RGBA.__enum__ = Fa;
    Fa.RGBA_4444 = ["RGBA_4444", 1];
    Fa.RGBA_4444.toString = l;
    Fa.RGBA_4444.__enum__ = Fa;
    Fa.RGB = ["RGB", 2];
    Fa.RGB.toString = l;
    Fa.RGB.__enum__ = Fa;
    Fa.RGB_565 = ["RGB_565", 3];
    Fa.RGB_565.toString = l;
    Fa.RGB_565.__enum__ = Fa;
    Fa.COMPRESSED = ["COMPRESSED", 4];
    Fa.COMPRESSED.toString = l;
    Fa.COMPRESSED.__enum__ = Fa;
    var Ag = function(a,
        b) { this.$aK = null;
        this.items = new W; var c = b.lastIndexOf("/"),
            c = I.substr(b, 0, c + 1);
        this.$qH = a.getFile(b + ".json"); for (var d = 0, e = this.$qH.toJson().atlases; d < e.length;) { var k = e[d];++d; for (var f = qb.removeFileExtension(k.image), f = a.getTexture(c + f), g = 0, k = k.items; g < k.length;) { var h = k[g];++g;
                h = new Og(this, f, h);
                this.items.set(h.name, h) } } };
    h["kit.display.TexturePacker"] = Ag;
    Ag.__name__ = ["kit", "display", "TexturePacker"];
    Ag.prototype = {
        getItem: function(a, b) { return this.items.get(a) },
        createSprite: function(a, b) {
            null ==
                b && (b = !0);
            var c = this.getItem(a, b);
            return null != c ? c.createSprite() : null
        },
        disposeFiles: function() { this.$qH.dispose(); return this },
        toLibrary: function() {
            var a = this;
            if (null == this.$aK) {
                for (var b = new W, c = this.items.iterator(); c.hasNext();) { var d = c.next(),
                        e = new q("^(.*?)(\\W*\\d+)$", ""); if (e.match(d.name)) { var d = e.matched(1),
                            e = e.matched(2),
                            k;
                        k = null != Za[d] ? b.getReserved(d) : b.h[d]; if (null == k) { var f = k = [];
                            null != Za[d] ? b.setReserved(d, f) : b.h[d] = f } k.push(e) } }
                for (var g = new q("\\D", "g"), c = [], d = b.keys(); d.hasNext();) {
                    e = [d.next()];
                    k = null != Za[e[0]] ? b.getReserved(e[0]) : b.h[e[0]];
                    k.sort(function() { return function(a, b) { var c = H.parseInt(g.replace(a, "")),
                                d = H.parseInt(g.replace(b, "")); return c - d } }());
                    for (var f = k.map(function(b) { return function(c) { return a.items.get(b[0] + c).texture } }(e)), f = new Pg(e[0], f), h = 0, l = k.length; h < l;) { var m = h++,
                            n = f.frames[m],
                            m = this.items.get(e[0] + k[m]);
                        n.anchorX = m.anchorX;
                        n.anchorY = m.anchorY } c.push(f)
                }
                this.$aK = vd.fromFlipbooks(c)
            }
            return this.$aK
        },
        __class__: Ag
    };
    var Og = function(a, b, c) {
        this.name = null;
        this.packer = a;
        this.name = c.name;
        a = c.frame;
        this.texture = b.subTexture(a[0], a[1], a[2], a[3]);
        this.anchorX = c.pivot[0];
        this.anchorY = c.pivot[1]
    };
    h["kit.display.TexturePackerItem"] = Og;
    Og.__name__ = ["kit", "display", "TexturePackerItem"];
    Og.prototype = { createSprite: function() { return (new Ob(this.texture)).setAnchor(this.anchorX, this.anchorY) }, __class__: Og };
    var Xe = function() {};
    h["kit.display.VectorFont"] = Xe;
    Xe.__name__ = ["kit", "display", "VectorFont"];
    Xe.__interfaces__ = [bc];
    Xe.prototype = { __class__: Xe };
    var Qg = function() {
        this.align =
            ea.Left;
        this.strokeWidth = this.lineSpacing = this.wrapWidth = 0;
        this.strokeColor = 16777215;
        this.color = 0;
        this.bold = this.italic = !1;
        this.fontSize = 18
    };
    h["kit.display.TextStyle"] = Qg;
    Qg.__name__ = ["kit", "display", "TextStyle"];
    Qg.prototype = { __class__: Qg };
    var xc = function(a, b) {
        null == b && (b = "");
        this.$YJ = null;
        this.$XK = ea.Left;
        this.$iK = 16777215;
        this.$fJ = 0;
        this.$gK = this.$hK = !1;
        this.marginX = this.marginY = 0;
        var c = this;
        E.call(this);
        this.$xJ = a;
        this.$WK = b;
        this.$B |= 256;
        var d = function(a, b) { c.$B |= 256 };
        this.fontSize = new la(18,
            d);
        this.strokeWidth = new la(0, d);
        this.wrapWidth = new la(0, d);
        this.lineSpacing = new la(0, d)
    };
    h["kit.display.VectorTextSprite"] = xc;
    xc.__name__ = ["kit", "display", "VectorTextSprite"];
    xc.__super__ = E;
    xc.prototype = p(E.prototype, {
        getNaturalWidth: function() { this.$fK(); return null != this.$YJ ? 1 * this.$YJ.get_width() : 0 },
        getNaturalHeight: function() { this.$fK(); return null != this.$YJ ? 1 * this.$YJ.get_height() : 0 },
        containsLocal: function(a, b) {
            this.$fK();
            if (null == this.$YJ) return !1;
            var c = this.$dK(),
                d = this.$eK();
            return a >= c &&
                a <= c + 1 * this.$YJ.get_width() && b >= d && b <= d + 1 * this.$YJ.get_height()
        },
        draw: function(a) { this.$fK();
            null != this.$YJ && (a.scale(1, 1), a.drawTexture(this.$YJ, this.$dK(), this.$eK())) },
        onUpdate: function(a) { E.prototype.onUpdate.call(this, a);
            this.fontSize.update(a);
            this.strokeWidth.update(a) },
        dispose: function() { E.prototype.dispose.call(this);
            null != this.$YJ && (this.$YJ.dispose(), this.$YJ = null);
            this.$B |= 256 },
        $bK: function() {
            if (0 < this.wrapWidth.$tG) return 0;
            switch (this.$XK[1]) {
                case 0:
                    return 0;
                case 1:
                    return -this.$YJ.get_width() /
                        2;
                case 2:
                    return -this.$YJ.get_width()
            }
        },
        $dK: function() { return this.marginX / 1 + this.$bK() },
        $eK: function() { return this.marginY / 1 + 0 },
        $fK: function() {
            if (0 != (this.$B & 256) && (this.$B &= -257, null != this.$YJ && (this.$YJ.dispose(), this.$YJ = null), 0 < this.$WK.length)) {
                var a = new Qg;
                a.fontSize = this.fontSize.$tG / 1;
                a.bold = this.$gK;
                a.italic = this.$hK;
                a.color = this.$fJ;
                a.strokeColor = this.$iK;
                a.strokeWidth = this.strokeWidth.$tG / 1;
                a.lineSpacing = this.lineSpacing.$tG / 1;
                a.wrapWidth = this.wrapWidth.$tG / 1;
                a.align = this.$XK;
                this.$YJ =
                    this.$xJ.createTexture(this.$WK, a)
            }
        },
        set_text: function(a) { a != this.$WK && (this.$WK = a, this.$B |= 256); return a },
        set_bold: function(a) { a != this.$gK && (this.$gK = a, this.$B |= 256); return a },
        set_italic: function(a) { a != this.$hK && (this.$hK = a, this.$B |= 256); return a },
        set_color: function(a) { a != this.$fJ && (this.$fJ = a, this.$B |= 256); return a },
        set_strokeColor: function(a) { a != this.$iK && (this.$iK = a, this.$B |= 256); return a },
        set_align: function(a) { a != this.$XK && (this.$XK = a, this.$B |= 256); return a },
        __class__: xc,
        __properties__: p(E.prototype.__properties__, { set_align: "set_align", set_strokeColor: "set_strokeColor", set_color: "set_color", set_italic: "set_italic", set_bold: "set_bold", set_text: "set_text" })
    });
    var Qh = function() { this.$mK = this.$nK = this.$oK = null;
        this.$lK = new W;
        this.paddingTop = this.paddingRight = this.paddingBottom = this.paddingLeft = 0;
        this.outputOnly = !1;
        this.active = !0 };
    h["kit.filter.Filter"] = Qh;
    Qh.__name__ = ["kit", "filter", "Filter"];
    Qh.prototype = {
        apply: function(a) { a.render(this) },
        setUniformVec2: function(a, b, c) { this.$jK(a, 1, [b, c]) },
        setUniformSampler2D: function(a,
            b) { this.$jK(a, 11, b) },
        update: function(a) {},
        $jK: function(a, b, c) { var d = this.$lK.get(a); if (null == d) { var e = d = new Rg(a);
                this.$lK.set(a, e) } d.$rK = b;
            d.$qK = c },
        $kK: function() { null == this.$oK && (this.$oK = null != this.$nK ? this.$nK + "@" + this.$mK : this.$mK); return this.$oK },
        __class__: Qh
    };
    var Rg = function(a) { this.$rK = 0;
        this.$qK = null;
        this.$pK = a };
    h.$C$ = Rg;
    Rg.__name__ = ["$C$"];
    Rg.prototype = { __class__: Rg };
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
    var Sg = function() { this.$sK(0, null) };
    h["kit.input.KeyboardEvent"] = Sg;
    Sg.__name__ = ["kit", "input", "KeyboardEvent"];
    Sg.prototype = { $sK: function(a, b) { this.id = a;
            this.key = b }, __class__: Sg };
    var cb = h["kit.input.MouseButton"] = {
        __ename__: ["kit", "input",
            "MouseButton"
        ],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    cb.Left = ["Left", 0];
    cb.Left.toString = l;
    cb.Left.__enum__ = cb;
    cb.Middle = ["Middle", 1];
    cb.Middle.toString = l;
    cb.Middle.__enum__ = cb;
    cb.Right = ["Right", 2];
    cb.Right.toString = l;
    cb.Right.__enum__ = cb;
    cb.Unknown = function(a) { a = ["Unknown", 3, a];
        a.__enum__ = cb;
        a.toString = l; return a };
    var Ua = h["kit.input.MouseCursor"] = { __ename__: ["kit", "input", "MouseCursor"], __constructs__: ["Default", "Button", "None"] };
    Ua.Default = ["Default", 0];
    Ua.Default.toString = l;
    Ua.Default.__enum__ =
        Ua;
    Ua.Button = ["Button", 1];
    Ua.Button.toString = l;
    Ua.Button.__enum__ = Ua;
    Ua.None = ["None", 2];
    Ua.None.toString = l;
    Ua.None.__enum__ = Ua;
    var Tg = function() { this.$sK(0, 0, 0, null) };
    h["kit.input.MouseEvent"] = Tg;
    Tg.__name__ = ["kit", "input", "MouseEvent"];
    Tg.prototype = { $sK: function(a, b, c, d) { this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = d }, __class__: Tg };
    var Ye = h["kit.input.EventSource"] = { __ename__: ["kit", "input", "EventSource"], __constructs__: ["Mouse", "Touch"] };
    Ye.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = Ye;
        a.toString =
            l;
        return a
    };
    Ye.Touch = function(a) { a = ["Touch", 1, a];
        a.__enum__ = Ye;
        a.toString = l; return a };
    var Ug = function() { this.$sK(0, 0, 0, null, null) };
    h["kit.input.PointerEvent"] = Ug;
    Ug.__name__ = ["kit", "input", "PointerEvent"];
    Ug.prototype = { $sK: function(a, b, c, d, e) { this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = d;
            this.source = e;
            this.$tK = !1 }, __class__: Ug };
    var Vg = function(a) { this.id = a;
        this.$uK = Ye.Touch(this) };
    h["kit.input.TouchPoint"] = Vg;
    Vg.__name__ = ["kit", "input", "TouchPoint"];
    Vg.prototype = {
        $sK: function(a, b) {
            this.viewX = a;
            this.viewY =
                b
        },
        __class__: Vg
    };
    var sa = function() {};
    h["kit.math.FMath"] = sa;
    sa.__name__ = ["kit", "math", "FMath"];
    sa.max = function(a, b) { return a > b ? a : b };
    sa.min = function(a, b) { return a < b ? a : b };
    sa.clamp = function(a, b, c) { return a < b ? b : a > c ? c : a };
    var wd = function() {};
    h["kit.movie.Symbol"] = wd;
    wd.__name__ = ["kit", "movie", "Symbol"];
    wd.prototype = { __class__: wd };
    var Ze = function() {};
    h["kit.movie.BitmapSymbol"] = Ze;
    Ze.__name__ = ["kit", "movie", "BitmapSymbol"];
    Ze.__interfaces__ = [wd];
    Ze.prototype = {
        createSprite: function() {
            var a = new Ob(this.texture);
            a.setAnchor(this.anchorX, this.anchorY);
            a.setScaleXY(this.scaleX, this.scaleY);
            return a
        },
        __class__: Ze
    };
    var Pg = function(a, b) { this.name = a; var c = 1 / b.length;
        this.frames = []; for (var d = 0; d < b.length;) { var e = b[d];++d;
            this.frames.push(new Wg(e, c)) } };
    h["kit.movie.Flipbook"] = Pg;
    Pg.__name__ = ["kit", "movie", "Flipbook"];
    Pg.prototype = { __class__: Pg };
    var Wg = function(a, b) { this.label = null;
        this.anchorX = this.anchorY = 0;
        this.texture = a;
        this.duration = b };
    h["kit.movie.FlipbookFrame"] = Wg;
    Wg.__name__ = ["kit", "movie", "FlipbookFrame"];
    Wg.prototype = { $vK: function() { return new $e(this) }, __class__: Wg };
    var $e = function(a) { this.$YJ = a.texture;
        this.$wK = a.anchorX;
        this.$xK = a.anchorY };
    h.$CAB = $e;
    $e.__name__ = ["$CAB"];
    $e.__interfaces__ = [wd];
    $e.prototype = { createSprite: function() { var a = new Ob(this.$YJ);
            a.setAnchor(this.$wK, this.$xK); return a }, __class__: $e };
    var vd = function() { this.sounds = new W };
    h["kit.movie.Library"] = vd;
    vd.__name__ = ["kit", "movie", "Library"];
    vd.fromFlipbooks = function(a) {
        var b = ga.createEmptyInstance(vd);
        b.$yK = new W;
        b.frameRate = 60;
        b.$qH = null;
        for (var c = 0; c < a.length;) { var d = a[c];++c; for (var e = [], k = 0, f = d.frames; k < f.length;) { var g = f[k];++k;
                e.push({ duration: g.duration * b.frameRate, label: g.label, pivot: [g.anchorX, g.anchorY], ref: "" }) } e = new af(b, { id: d.name, layers: [{ name: "flipbook", flipbook: !0, keyframes: e }] });
            b.$yK.set(d.name, e);
            e = e.layers[0].keyframes;
            k = 0; for (f = d.frames.length; k < f;) g = k++, e[g].$tL(d.frames[g].$vK()) }
        return b
    };
    vd.prototype = { createSprite: function(a, b) { var c = this.$yK.get(a); return null == c ? null : c.createSprite() }, __class__: vd };
    var Wb = function(a) {
        this.$NL = this.$OL = this.$PL = null;
        this.$ML = 0;
        var b = this;
        E.call(this);
        this.symbol = a;
        this.speed = new la(1);
        this.$JL = Array(a.layers.length);
        for (var c = 0, d = this.$JL.length; c < d;) { var e = c++;
            this.$JL[e] = new Qc(a.layers[e]) } this.$KL = 0;
        this.$LL = -1;
        this.$GL(0);
        if (a.button) {
            var k = 0 / a.frameRate,
                f = 1 / a.frameRate,
                g = 2 / a.frameRate,
                h = !1,
                l = !1,
                c = new fb(1.79769313486231E308, 1.79769313486231E308, -1.79769313486231E308, -1.79769313486231E308),
                d = 0;
            for (a = a.layers; d < a.length;) e = a[d], ++d, Wb.$QL(e, c);
            c.x < c.width &&
                c.y < c.height && (this.$PL = c);
            this.$B |= 4096;
            this.get_pointerDown().connect(function(a) { h = !0;
                b.set_position(g);
                z.$KH.$YG.up.connect(function(a) { h = !1;
                    b.set_position(l ? f : k) }).once() });
            var m = null;
            this.get_pointerIn().connect(function(a) { l = !0;
                b.set_position(h ? g : f);
                z.$KH.$XG.get_cursor() == Ua.Default && z.$KH.$XG.set_cursor(Ua.Button);
                null != m && m.dispose();
                m = z.$KH.$YG.move.connect(function(a) { null == b.owner && (m.dispose(), z.$KH.$XG.get_cursor() == Ua.Button && z.$KH.$XG.set_cursor(Ua.Default)) }) });
            this.get_pointerOut().connect(function(a) {
                l = !1;
                b.set_position(k);
                z.$KH.$XG.get_cursor() == Ua.Button && z.$KH.$XG.set_cursor(Ua.Default)
            })
        }
    };
    h["kit.movie.MovieSprite"] = Wb;
    Wb.__name__ = ["kit", "movie", "MovieSprite"];
    Wb.$QL = function(a, b) {
        for (var c = 0, d = a.keyframes; c < d.length;) {
            var e = d[c];
            ++c;
            if (3 == e.index && null != e.symbol) {
                var k = e.symbol.createSprite(),
                    f = k.getNaturalWidth(),
                    g = k.getNaturalHeight();
                if (0 < f && 0 < g) {
                    var h = k.scaleX.$tG * e.scaleX,
                        l = k.scaleY.$tG * e.scaleY,
                        k = k.getLocalMatrix(),
                        m = Math.sin(e.skewX),
                        n = Math.cos(e.skewX),
                        p = Math.sin(e.skewY),
                        q = Math.cos(e.skewY);
                    k.set(q * h, p * h, -m * l, n * l, e.x, e.y);
                    k.translate(-e.pivotX, -e.pivotY);
                    E.$VI(k, 0, 0, b);
                    E.$VI(k, f, 0, b);
                    E.$VI(k, f, g, b);
                    E.$VI(k, 0, g, b)
                }
            }
        }
        c = 0;
        for (d = a.childLayers; c < d.length;) e = d[c], ++c, Wb.$QL(e, b)
    };
    Wb.__super__ = E;
    Wb.prototype = p(E.prototype, {
        containsLocal: function(a, b) { return null != this.$PL && a >= this.$PL.x && a < this.$PL.width && b >= this.$PL.y && b < this.$PL.height },
        onAdded: function() { E.prototype.onAdded.call(this); for (var a = 0, b = this.$JL; a < b.length;) { var c = b[a];++a;
                this.owner.addChild(c.$WL) } },
        onRemoved: function() {
            E.prototype.onRemoved.call(this);
            for (var a = 0, b = this.$JL; a < b.length;) { var c = b[a];++a;
                this.owner.removeChild(c.$WL) }
        },
        onUpdate: function(a) { E.prototype.onUpdate.call(this, a);
            this.speed.update(a); switch (this.$B & 6912) {
                case 0:
                    0 <= this.speed.$tG && (this.$KL += this.speed.$tG * a, this.$KL > this.symbol.duration && (0 != (this.$B & 1024) ? (this.$KL = this.symbol.duration, this.$B |= 2048) : (this.$KL %= this.symbol.duration, null != this.$NL && this.$NL.emit()))); break;
                case 512:
                    this.$B &= -513 } this.$GL(this.$KL * this.symbol.frameRate) },
        $GL: function(a) {
            if (this.$LL != a) {
                if (a <
                    this.$LL)
                    for (var b = 0, c = this.$JL; b < c.length;) { var d = c[b];++b; if (d.$gL(this.$OL)) return } b = 0;
                for (c = this.$JL; b < c.length;)
                    if (d = c[b], ++b, d.$iL(a, this.$OL, this.$ML)) return;
                switch (this.$ML) {
                    case 0:
                        this.$ML = 1; break;
                    case 1:
                    case 2:
                        this.$ML = 3 } this.$LL = a
            }
        },
        set_position: function(a) { this.setPosition(a, !0); return a },
        setPosition: function(a, b) {
            var c = sa.clamp(a, 0, this.symbol.duration);
            this.$KL = c;
            this.$ML = 3;
            var d = c * this.symbol.frameRate,
                e;
            e = b ? 2 : 0;
            for (var k = 0, f = this.$JL; k < f.length;) {
                var g = f[k];
                ++k;
                if (g.$hL(d, this.$OL,
                        e)) return c
            }
            this.$LL = d;
            return c
        },
        set_paused: function(a) { this.$B = Oc.set(this.$B, 256, a); return a },
        set_pixelSnapping: function(a) { for (var b = 0, c = this.$JL; b < c.length;) { var d = c[b];++b;
                d.$jL(a) } return E.prototype.set_pixelSnapping.call(this, a) },
        $HL: function(a) { this.$KL = a.firstFrame / this.symbol.frameRate;
            this.set_paused(a.playMode == Va.SingleFrame);
            this.$B = (this.$B | 512) & -2049;
            a = 0; for (var b = this.$JL; a < b.length;) { var c = b[a];++a;
                c.$HL() } },
        __class__: Wb,
        __properties__: p(E.prototype.__properties__, {
            set_paused: "set_paused",
            set_position: "set_position"
        })
    });
    var Qc = function(a) {
        this.$oL = [];
        this.$cL = null;
        this.$bL = !0;
        this.$ZL = -1;
        this.$YL = 0;
        this.$XL = !1;
        this.$aL = a;
        this.$WL = new aa;
        if (a.empty) this.$nL = null;
        else {
            this.$nL = Array(a.keyframes.length);
            for (var b = null, c = null, d = 0, e = this.$nL.length; d < e;) {
                var k = d++,
                    f = a.keyframes[k];
                if (null != b && Qc.$pL(b, f)) this.$nL[k] = c;
                else if (null != f.symbol) {
                    c = f.symbol.createSprite();
                    this.$nL[k] = c;
                    if (0 < f.firstFrame || f.playMode != Va.Loop)
                        if (b = c instanceof Wb ? c : null, null != b) {
                            switch (f.playMode[1]) {
                                case 1:
                                    b.$B |=
                                        1024;
                                    break;
                                case 2:
                                    b.set_paused(!0)
                            }
                            b.$KL = f.firstFrame / b.symbol.frameRate
                        } b = f
                } else this.$nL[k] = new E
            }
            this.$WL.add(this.$nL[0])
        }
        this.$mL = this.$WL;
        if (0 < a.childLayers.length)
            for (e = new E, f = (new aa).add(e), f.addChild(this.$WL), this.$WL = b = new aa, d = new aa, a.mask && (this.$cL = new E, this.$cL.set_mask(e), d.add(this.$cL)), b.addChild(d), b.addChild(f), e = 0, a = a.childLayers; e < a.length;) f = a[e], ++e, f = new Qc(f), this.$oL.push(f), d.addChild(f.$WL)
    };
    h.$CBB = Qc;
    Qc.__name__ = ["$CBB"];
    Qc.$pL = function(a, b) {
        if (a.symbol != b.symbol ||
            a.playMode != b.playMode) return !1;
        switch (a.playMode[1]) {
            case 2:
                return a.firstFrame == b.firstFrame;
            default:
                return a.firstFrame == b.firstFrame || a.firstFrame + a.duration == b.firstFrame }
    };
    Qc.prototype = {
        $fL: function(a, b) { null != a.sound && null != a.sound.sound && (this.$WL.emitMessageToParents("MovieSprite.FRAME_SOUND", new bf(this.$WL, a)).handled || a.sound.sound.play()); if (null != b) { var c = a.label;
                null != c && b.emit(c) } null != a.actions && this.$WL.emitMessageToParents("MovieSprite.FRAME_ACTION", new bf(this.$WL, a)) },
        $gL: function(a) {
            for (var b =
                    0, c = this.$oL; b < c.length;) { var d = c[b];++b; if (d.$gL(a)) return !0 }
            if (0 <= this.$ZL) { for (var b = this.$aL.keyframes, c = this.$YL, d = this.$ZL + 1, e = b.length; d < e;) { var k = d++;
                    this.$fL(b[k], a); if (c != this.$YL) return !0 } this.$ZL = -1 } this.$XL = !0;
            return !1
        },
        $hL: function(a, b, c) { for (var d = 0, e = this.$oL; d < e.length;) { var k = e[d];++d; if (k.$hL(a, b, c)) return !0 }++this.$YL;
            d = this.$aL.keyframes;
            e = d.length - 1;
            k = this.$ZL; for (this.$ZL = -1; this.$ZL < e && d[this.$ZL + 1].index <= a;) ++this.$ZL;
            this.$ZL != k && (this.$XL = !0); return this.$iL(a, b, c) },
        $iL: function(a,
            b, c) {
            for (var d = 0, e = this.$oL; d < e.length;) { var k = e[d];++d; if (k.$iL(a, b, c)) return !0 }
            var d = this.$aL.keyframes,
                f = d.length - 1,
                e = this.$ZL;
            if (a > this.$aL.frames) this.$ZL = f, this.$XL = !0;
            else
                for (; this.$ZL < f && d[this.$ZL + 1].index <= a;) ++this.$ZL, this.$XL = !0;
            if (null != this.$nL) {
                var k = d[this.$ZL],
                    g;
                if (this.$XL) { if (this.$XL = !1, g = this.$nL[this.$ZL], g != this.$mL.$PG[3]) { var h;
                        h = g instanceof Wb ? g : null;
                        null != h && h.$HL(k);
                        this.$mL.add(g) } } else g = this.$mL.$PG[3];
                if (this.$bL && (h = k.visible && null != k.symbol && a <= this.$aL.frames,
                        g.set_visible(h), null != this.$cL && this.$cL.set_maskEnabled(h), h)) {
                    h = k.x;
                    var l = k.y,
                        m = k.scaleX,
                        n = k.scaleY,
                        p = k.skewX,
                        q = k.skewY,
                        r = k.alpha,
                        t = k.tint;
                    if (k.tweened && this.$ZL < f) {
                        var f = (a - k.index) / k.duration,
                            s = k.ease;
                        if (0 != s) { var u;
                            0 > s ? (u = 1 - f, u = 1 - u * u, s = -s) : u = f * f;
                            f = s * u + (1 - s) * f } s = d[this.$ZL + 1];
                        h += (s.x - h) * f;
                        l += (s.y - l) * f;
                        m += (s.scaleX - m) * f;
                        n += (s.scaleY - n) * f;
                        p += (s.skewX - p) * f;
                        q += (s.skewY - q) * f;
                        r += (s.alpha - r) * f;
                        s = s.tint;
                        if (16777215 != s || 16777215 != t) {
                            u = (t & 16711680) >> 16;
                            var v = (t & 65280) >> 8,
                                t = t & 255,
                                v = v + ((((s & 65280) >> 8) - v) *
                                    f | 0),
                                t = t + (((s & 255) - t) * f | 0),
                                t = u + ((((s & 16711680) >> 16) - u) * f | 0) << 16 | v << 8 | t
                        }
                    }
                    f = H.instance(k.symbol, Ze);
                    null != f && (m *= f.scaleX, n *= f.scaleY);
                    f = g.getLocalMatrix();
                    s = Math.sin(p);
                    p = Math.cos(p);
                    u = Math.sin(q);
                    q = Math.cos(q);
                    f.set(q * m, u * m, -s * n, p * n, h, l);
                    f.translate(-k.pivotX, -k.pivotY);
                    g.$B |= 16;
                    g.alpha.set__(r);
                    g.setTint(t);
                    null == k.blendMode && null == g.get_blendMode() || g.set_blendMode(k.blendMode)
                }
            }
            if (0 != c)
                for (1 == c ? e = -1 : 2 == c && 0 <= this.$ZL && d[this.$ZL].index == a && (e = this.$ZL - 1), a = this.$YL, c = e, e = this.$ZL; c < e;)
                    if (k = c++,
                        this.$fL(d[k + 1], b), this.$YL != a) return !0;
            return !1
        },
        $jL: function(a) { for (var b = 0, c = this.$oL; b < c.length;) { var d = c[b];++b;
                d.$jL(a) } if (null != this.$nL)
                for (b = 0, c = this.$nL; b < c.length;) d = c[b], ++b, d.set_pixelSnapping(a) },
        $HL: function() { for (var a = 0, b = this.$oL; a < b.length;) { var c = b[a];++a;
                c.$HL() } this.$XL = !0;
            this.$ZL = -1; if (null != this.$nL)
                for (a = 0, b = this.$nL.length; a < b;) { var c = a++,
                        d = H.instance(this.$nL[c], Wb);
                    null != d && d.$HL(this.$aL.keyframes[c]) } },
        __class__: Qc
    };
    var bf = function(a, b) { this.layer = a;
        this.keyframe = b };
    h["kit.movie.FrameEvent"] = bf;
    bf.__name__ = ["kit", "movie", "FrameEvent"];
    bf.prototype = { __class__: bf };
    var af = function(a, b) { this.$hF = b.id;
        this.frameRate = a.frameRate;
        this.frames = 0;
        this.layers = Array(b.layers.length); for (var c = 0, d = this.layers.length; c < d;) { var e = c++,
                k = new cf(a, b.layers[e]);
            this.frames = Math.max(k.frames, this.frames);
            this.layers[e] = k } this.duration = this.frames / this.frameRate;
        this.button = !0 == b.button };
    h["kit.movie.MovieSymbol"] = af;
    af.__name__ = ["kit", "movie", "MovieSymbol"];
    af.__interfaces__ = [wd];
    af.prototype = { createSprite: function() { return new Wb(this) }, __class__: af };
    var cf = function(a, b) {
        this.mask = !1;
        this.childLayers = [];
        this.empty = !0;
        this.name = b.name;
        var c = null;
        this.keyframes = Array(b.keyframes.length);
        for (var d = 0, e = this.keyframes.length; d < e;) { var k = d++,
                c = new Xg(a, b.keyframes[k], c);
            this.keyframes[k] = c;
            this.empty = this.empty && null == c.$rL } this.frames = null != c ? c.index + c.duration : 0;
        null != b.mask && (this.mask = b.mask);
        if (null != b.childLayers)
            for (c = 0, d = b.childLayers; c < d.length;) e = d[c], ++c, e = new cf(a,
                e), e.frames > this.frames && (this.frames = e.frames), this.childLayers.push(e)
    };
    h["kit.movie.MovieLayer"] = cf;
    cf.__name__ = ["kit", "movie", "MovieLayer"];
    cf.prototype = { __class__: cf };
    var Va = h["kit.movie.PlayMode"] = { __ename__: ["kit", "movie", "PlayMode"], __constructs__: ["Loop", "PlayOnce", "SingleFrame"] };
    Va.Loop = ["Loop", 0];
    Va.Loop.toString = l;
    Va.Loop.__enum__ = Va;
    Va.PlayOnce = ["PlayOnce", 1];
    Va.PlayOnce.toString = l;
    Va.PlayOnce.__enum__ = Va;
    Va.SingleFrame = ["SingleFrame", 2];
    Va.SingleFrame.toString = l;
    Va.SingleFrame.__enum__ =
        Va;
    var Xg = function(a, b, c) {
        this.actions = this.sound = null;
        this.firstFrame = 0;
        this.playMode = Va.Loop;
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
        this.$rL = b.ref;
        c = b.loc;
        null != c && (this.x = c[0], this.y = c[1]);
        c = b.scale;
        null != c && (this.scaleX = c[0], this.scaleY =
            c[1]);
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
                    this.blendMode = qa.Add;
                    break;
                case "multiply":
                    this.blendMode = qa.Multiply;
                    break;
                case "screen":
                    this.blendMode = qa.Screen;
                    break;
                case "layer":
                    this.blendMode =
                        qa.Mask;
                    break;
                default:
                    this.blendMode = null
            } else this.blendMode = null;
        null != b.firstFrame && (this.firstFrame = b.firstFrame);
        if (null != b.playMode)
            if (c = b.playMode, null != c) switch (c) {
                case "stop":
                    this.playMode = Va.SingleFrame; break;
                case "once":
                    this.playMode = Va.PlayOnce; break;
                default:
                    this.playMode = Va.Loop } else this.playMode = Va.Loop;
        null != b.actions && (this.actions = b.actions);
        null != b.sound && (this.sound = a.sounds.get(b.sound));
        null != b.refName && (this.instanceName = b.refName)
    };
    h["kit.movie.MovieKeyframe"] = Xg;
    Xg.__name__ = ["kit", "movie", "MovieKeyframe"];
    Xg.prototype = { $tL: function(a) { this.symbol = a }, __class__: Xg };
    var Rh = function() {};
    h["kit.movie.SoundSymbol"] = Rh;
    Rh.__name__ = ["kit", "movie", "SoundSymbol"];
    Rh.prototype = { __class__: Rh };
    var Ca = function() { this.$xM = !1 };
    h.$CGB = Ca;
    Ca.__name__ = ["$CGB"];
    Ca.__interfaces__ = [bc];
    Ca.prototype = { dispose: function() { this.$xM || (this.$xM = !0, this.$vM()) }, $vM: function() { null }, __class__: Ca };
    var xd = function(a, b) {
        this.$IN = 0;
        var c = this;
        this.$zM = b;
        this.$KH = a;
        this.$EG = new Qa;
        this.$oI = new df(b, this);
        this.$HN = new W;
        var d = Zb.array(b);
        if (0 == d.length) this.$DN();
        else {
            for (var e = new W, k = 0; k < d.length;) { var f = d[k];++k; var g = e.get(f.name);
                null == g && (g = [], e.set(f.name, g));
                g.push(f) } this.$GN = Zb.count(e);
            for (d = new Vd(e, e.arrayKeys()); d.hasNext();) e = [d.next()], this.$$M(e[0], function(a) {
                return function(d) {
                    if (null != d) { var e = new ef(0, d.bytes);
                        c.$HN.set(d.name, e);
                        e = b.getFullURL(d); try { c.$_M(e, d) } catch (k) { k instanceof A && (k = k.val), c.$EN(d, "Unexpected error: " + H.string(k)) } } else switch (d = a[0][0], e = new ef(0, 0), c.$HN.set(d.name,
                        e), d.format[1]) {
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                            c.$BN(d, Db.$QO()); break;
                        case 17:
                        case 18:
                            c.$BN(d, Xb.$QO()); break;
                        default:
                            c.$EN(d, "Could not find a supported format to load") }
                }
            }(e))
        }
    };
    h.$CHB = xd;
    xd.__name__ = ["$CHB"];
    xd.prototype = {
        $$M: function(a, b) { this.$AN(function(c) { for (var d = 0; d < c.length;) { var e = c[d];++d; for (var k = 0; k < a.length;) { var f = a[k];++k; if (f.format == e) { b(f); return } } } b(null) }) },
        $_M: function(a, b) { null },
        $AN: function(a) { null },
        $BN: function(a, b) {
            if (this.$oI.$PN) b.dispose();
            else {
                var c = this.$HN.get(a.name);
                c.$SN = c.$TN;
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
                        d = this.$oI.$KN; break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        d = this.$oI.$LN; break;
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                        d = this.$oI.$NN; break;
                    case 17:
                    case 18:
                        d = this.$oI.$ON; break;
                    case 19:
                        d = this.$oI.$MN } d.set(a.name, b);
                this.$GN -= 1;
                0 == this.$GN && this.$DN()
            }
        },
        $CN: function(a, b, c) {
            a = this.$HN.get(a.name);
            0 < c && (a.$TN = c);
            a.$SN = sa.min(b, a.$TN);
            c = b = 0;
            for (a = this.$HN.iterator(); a.hasNext();) {
                var d = a.next();
                if (0 == d.$TN) return;
                b += d.$SN;
                c += d.$TN
            }
            b = 0 < c ? b / c : 0;
            b != this.$IN && (this.$IN = b, this.$EG.emitProgress(b))
        },
        $DN: function() { this.$EG.success(this.$oI) },
        $EN: function(a, b) { this.$oI.dispose();
            this.$EG.failure(qb.withFields(b, ["url", a.url])) },
        $FN: function(a) { this.$EN(a, "Failed to create texture. Is the GPU context unavailable?") },
        __class__: xd
    };
    var df = function(a, b) { this.$PN = !1;
        this.$ON = new W;
        this.$NN = new W;
        this.$MN = new W;
        this.$LN = new W;
        this.$KN = new W;
        this.$QN = a };
    h.$CIB = df;
    df.__name__ = ["$CIB"];
    df.__interfaces__ = [od];
    df.prototype = {
        getTexture: function(a, b) { return this.$KN.get(a) },
        getSound: function(a, b) { return this.$LN.get(a) },
        getFile: function(a, b) { return this.$MN.get(a) },
        getVectorFont: function(a, b) { return this.$NN.get(a) },
        dispose: function() {
            if (!this.$PN) {
                this.$PN = !0;
                for (var a = this.$KN.iterator(); a.hasNext();) a.next().dispose();
                this.$KN = null;
                for (a = this.$LN.iterator(); a.hasNext();) a.next().dispose();
                this.$LN = null;
                for (a = this.$MN.iterator(); a.hasNext();) a.next().dispose();
                this.$MN = null;
                for (a = this.$NN.iterator(); a.hasNext();) a.next().dispose();
                this.$NN = null
            }
        },
        get_manifest: function() { return this.$QN },
        __class__: df,
        __properties__: { get_manifest: "get_manifest" }
    };
    var ef = function(a, b) { this.$SN = a;
        this.$TN = b };
    h.$CJB = ef;
    ef.__name__ = ["$CJB"];
    ef.prototype = { __class__: ef };
    var yd = function(a) { this.$xM = !1;
        this.$jI = a };
    h.$CKB = yd;
    yd.__name__ = ["$CKB"];
    yd.__interfaces__ = [fe];
    yd.__super__ = Ca;
    yd.prototype = p(Ca.prototype, { toString: function() { return this.$jI }, toJson: function() { return JSON.parse(this.toString()) }, $vM: function() { this.$jI = null }, __class__: yd });
    var Yg =
        function() {};
    h["kit.subsystem.KeyboardSystem"] = Yg;
    Yg.__name__ = ["kit", "subsystem", "KeyboardSystem"];
    Yg.prototype = { __class__: Yg };
    var Nb = function() { this.down = new za;
        this.up = new za;
        this.backButton = new $b;
        this.$XN = new nb };
    h.$CLB = Nb;
    Nb.__name__ = ["$CLB"];
    Nb.__interfaces__ = [Yg];
    Nb.prototype = {
        isDown: function(a) { return this.$UN(zd.$aQ(a)) },
        $UN: function(a) { return this.$XN.h.hasOwnProperty(a) },
        $VN: function(a) {
            if (16777238 == a) return null != this.backButton.$EH ? (this.backButton.emit(), !0) : !1;
            this.$XN.h.hasOwnProperty(a) ||
                (this.$XN.h[a] = !0, Nb.$YN.$sK(Nb.$YN.id + 1, zd.$ZQ(a)), this.down.emit(Nb.$YN));
            return !0
        },
        $WN: function(a) { this.$XN.h.hasOwnProperty(a) && (this.$XN.remove(a), Nb.$YN.$sK(Nb.$YN.id + 1, zd.$ZQ(a)), this.up.emit(Nb.$YN)) },
        __class__: Nb
    };
    var Zg = function() {};
    h["kit.subsystem.MouseSystem"] = Zg;
    Zg.__name__ = ["kit", "subsystem", "MouseSystem"];
    Zg.prototype = { __class__: Zg, __properties__: { set_cursor: "set_cursor", get_cursor: "get_cursor" } };
    var hb = function(a) {
        this.$YG = a;
        this.$uK = Ye.Mouse(hb.$YN);
        this.down = new za;
        this.move = new za;
        this.up = new za;
        this.scroll = new za;
        this.$IJ = this.$HJ = 0;
        this.$bN = Ua.Default;
        this.$cN = new nb
    };
    h.$CMB = hb;
    hb.__name__ = ["$CMB"];
    hb.__interfaces__ = [Zg];
    hb.prototype = {
        get_cursor: function() { return this.$bN },
        set_cursor: function(a) { return this.$bN = a },
        $VN: function(a, b, c) { this.$cN.h.hasOwnProperty(c) || (this.$cN.h[c] = !0, this.$TK(a, b, $g.$sQ(c)), this.$YG.$VN(a, b, this.$uK), this.down.emit(hb.$YN)) },
        $ZN: function(a, b) { this.$TK(a, b, null);
            this.$YG.$ZN(a, b, this.$uK);
            this.move.emit(hb.$YN) },
        $WN: function(a, b, c) {
            this.$cN.h.hasOwnProperty(c) &&
                (this.$cN.remove(c), this.$TK(a, b, $g.$sQ(c)), this.$YG.$WN(a, b, this.$uK), this.up.emit(hb.$YN))
        },
        $aN: function(a, b, c) { this.$HJ = a;
            this.$IJ = b; if (null == this.scroll.$EH) return !1;
            this.scroll.emit(c); return !0 },
        $TK: function(a, b, c) { this.$HJ = a;
            this.$IJ = b;
            hb.$YN.$sK(hb.$YN.id + 1, a, b, c) },
        __class__: hb,
        __properties__: { set_cursor: "set_cursor", get_cursor: "get_cursor" }
    };
    var ah = function() {};
    h["kit.subsystem.PointerSystem"] = ah;
    ah.__name__ = ["kit", "subsystem", "PointerSystem"];
    ah.prototype = { __class__: ah };
    var bb = function(a,
        b, c) { null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new za;
        this.move = new za;
        this.up = new za;
        this.$HJ = a;
        this.$IJ = b;
        this.$dN = c };
    h.$CNB = bb;
    bb.__name__ = ["$CNB"];
    bb.__interfaces__ = [ah];
    bb.prototype = {
        $VN: function(a, b, c) { if (!this.$dN) { this.$ZN(a, b, c);
                this.$dN = !0; var d = [],
                    e = E.hitTest(z.root, a, b); if (null != e) { var k = e.owner;
                    do { var f = k.$PG[3];
                        null != f && d.push(f);
                        k = k.parent } while (null != k) } this.$TK(a, b, e, c); for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.$BI(bb.$YN), bb.$YN.$tK) return;
                this.down.emit(bb.$YN) } },
        $ZN: function(a,
            b, c) { if (a != this.$HJ || b != this.$IJ) { var d = [],
                    e = E.hitTest(z.root, a, b); if (null != e) { var k = e.owner;
                    do { var f = k.$PG[3];
                        null != f && d.push(f);
                        k = k.parent } while (null != k) } this.$TK(a, b, e, c); for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.$CI(bb.$YN), bb.$YN.$tK) return;
                this.move.emit(bb.$YN) } },
        $WN: function(a, b, c) {
            if (this.$dN) {
                this.$ZN(a, b, c);
                this.$dN = !1;
                var d = [],
                    e = E.hitTest(z.root, a, b);
                if (null != e) { var k = e.owner;
                    do { var f = k.$PG[3];
                        null != f && d.push(f);
                        k = k.parent } while (null != k) } this.$TK(a, b, e, c);
                for (a = 0; a < d.length;)
                    if (b = d[a], ++a, b.$EI(bb.$YN),
                        bb.$YN.$tK) return;
                this.up.emit(bb.$YN)
            }
        },
        $TK: function(a, b, c, d) { this.$HJ = a;
            this.$IJ = b;
            bb.$YN.$sK(bb.$YN.id + 1, a, b, c, d) },
        __class__: bb
    };
    var ff = function() {};
    h.$COB = ff;
    ff.__name__ = ["$COB"];
    ff.__interfaces__ = [Ph];
    ff.prototype = { __class__: ff };
    var Yb = function(a, b, c) { this.$HJ = this.$IJ = 0;
        this.$hN = null;
        this.$fN = this.$gN = 0;
        this.$xM = !1;
        this.$eN = a;
        this.$WJ = b;
        this.$XJ = c };
    h.$CPB = Yb;
    Yb.__name__ = ["$CPB"];
    Yb.__interfaces__ = [ff];
    Yb.__super__ = Ca;
    Yb.prototype = p(Ca.prototype, {
        subTexture: function(a, b, c, d) {
            c = this.$eN.createTexture(c,
                d);
            c.$hN = this;
            c.$HJ = a;
            c.$IJ = b;
            c.$fN = this.$fN + a;
            c.$gN = this.$gN + b;
            return c
        },
        clear: function() { this.$eN.clear() },
        renderFilter: function(a, b, c) { this.$eN.renderFilter(a, b, c) },
        get_graphics: function() { return this.$eN.getGraphics() },
        $vM: function() { null == this.$hN && this.$eN.dispose() },
        get_width: function() { return this.$WJ },
        get_height: function() { return this.$XJ },
        __class__: Yb,
        __properties__: { get_height: "get_height", get_width: "get_width", get_graphics: "get_graphics" }
    });
    var gf = function() {};
    h["kit.subsystem.TouchSystem"] =
        gf;
    gf.__name__ = ["kit", "subsystem", "TouchSystem"];
    gf.prototype = { __class__: gf, __properties__: { get_supported: "get_supported" } };
    var Zd = function(a, b) { null == b && (b = 4);
        this.$YG = a;
        this.$jN = b;
        this.$kN = new nb;
        this.$gJ = [];
        this.down = new za;
        this.move = new za;
        this.up = new za };
    h.$CQB = Zd;
    Zd.__name__ = ["$CQB"];
    Zd.__interfaces__ = [gf];
    Zd.prototype = {
        get_supported: function() { return !0 },
        $VN: function(a, b, c) {
            if (!this.$kN.h.hasOwnProperty(a)) {
                var d = new Vg(a);
                d.$sK(b, c);
                this.$kN.h[a] = d;
                this.$gJ.push(d);
                null == this.$iN && (this.$iN =
                    d, this.$YG.$VN(b, c, d.$uK));
                this.down.emit(d)
            }
        },
        $ZN: function(a, b, c) { a = this.$kN.h[a];
            null != a && (a.$sK(b, c), this.$iN == a && this.$YG.$ZN(b, c, a.$uK), this.move.emit(a)) },
        $WN: function(a, b, c) { var d = this.$kN.h[a];
            null != d && (d.$sK(b, c), this.$kN.remove(a), I.remove(this.$gJ, d), this.$iN == d && (this.$iN = null, this.$YG.$WN(b, c, d.$uK)), this.up.emit(d)) },
        __class__: Zd,
        __properties__: { get_supported: "get_supported" }
    };
    var Sh = function() {};
    h.$CRB = Sh;
    Sh.__name__ = ["$CRB"];
    Sh.$lN = function() {
        z.$IH().then(function(a) {
            try {
                z.$KH.getExternal().call("console.info",
                    ["Built with 2DKit, http://2dkit.com"])
            } catch (b) { b instanceof A && (b = b.val) } a = new Pd;
            z.root.add(a)
        })
    };
    var ua = function() {};
    h.$CSB = ua;
    ua.__name__ = ["$CSB"];
    ua.$qN = function(a) { var b = Wd.getType(ua).injected[0]; return L.field(b, a) };
    ua.$rN = function() { switch (ua.$qN("orientation")) {
            case "landscape":
                return Vb.Landscape;
            case "portrait":
                return Vb.Portrait } return null };
    var hf = function() { this.$JO = new Qb;
        this.$IO = 0;
        this.$GO = this.$HO = null;
        this.$FO = Infinity;
        this.$EO = 0 };
    h.$CTB = hf;
    hf.__name__ = ["$CTB"];
    hf.__interfaces__ = [Jb];
    hf.prototype = {
        $wN: function(a) { this.$FO = a;
            this.$DO(!0); return this },
        $xN: function(a) { this.$GO = a; return this },
        $yN: function(a) { this.$HO = a; return this },
        $zN: function(a, b, c) { null == c && (c = !0);
            this.$BO(a); var d;
            d = null != this.$HO ? this.$HO(a, b) : 1;
            this.$EO += d;
            this.$DO(c);
            b = new bh(a, b);
            b.$KO = ++this.$IO;
            b.$uN = d;
            this.$JO.set(a, b) },
        $qN: function(a) { a = this.$JO.h[a.__id__]; if (null == a) return null;
            a.$KO = ++this.$IO; return a.$qK },
        $$N: function() { var a = this.$AO(!0); return null != a ? a.$GK : null },
        $AO: function(a) {
            for (var b =
                    null, c = this.$JO.iterator(); c.hasNext();) { var d = c.next(); if (null == b || d.$KO < b.$KO == a) b = d }
            return b
        },
        $BO: function(a, b) { null == b && (b = !0); var c = this.$JO.h[a.__id__]; if (null == c) return null;
            null != this.$GO && b && this.$GO(a, c.$qK);
            this.$JO.remove(a);
            this.$EO -= c.$uN; return c.$qK },
        $CO: function(a) { null == a && (a = !0); var b = this.$JO;
            this.$JO = new Qb;
            this.$EO = 0; if (null != this.$GO && a)
                for (a = b.iterator(); a.hasNext();) b = a.next(), this.$GO(b.$GK, b.$qK) },
        dispose: function() { this.$CO() },
        $DO: function(a) {
            for (; this.$EO > this.$FO;) {
                var b =
                    this.$AO(a);
                if (null != b) null != this.$GO && this.$GO(b.$GK, b.$qK), this.$JO.remove(b.$GK), this.$EO -= b.$uN;
                else break
            }
        },
        __class__: hf
    };
    var bh = function(a, b) { this.$uN = 1;
        this.$KO = 0;
        this.$GK = a;
        this.$qK = b };
    h.$CUB = bh;
    bh.__name__ = ["$CUB"];
    bh.prototype = { __class__: bh };
    var vc = function() {};
    h.$CWB = vc;
    vc.__name__ = ["$CWB"];
    vc.$PO = function(a, b) {
        var c = a.__rtti;
        if (null == c) return null;
        c = B.parse(c).firstElement();
        c = (new tg).processElement(c);
        switch (c[1]) {
            case 1:
                c = c[2];
                if (null != c.superClass) {
                    var d = ga.resolveClass(c.superClass.path);
                    null != d && vc.$PO(d, b)
                }
                c = c.fields.h;
                for (d = null; null != c;) d = void 0, d = c[0], c = c[1], b.set(d.name, d)
        }
        return b
    };
    vc.$pH = function(a, b) {
        switch (a[1]) {
            case 2:
                switch (a[2]) {
                    case "String":
                        return b;
                    case "kit.animation.AnimatedFloat":
                        var c = parseFloat(b);
                        return new la(isNaN(c) ? 0 : c);
                    case "Date":
                        var c = parseFloat(b),
                            d = new Date;
                        d.setTime(c);
                        return d;
                    case "kit.math.Point":
                        return c = new Ab, d = b.split(","), 2 <= d.length && (c.x = parseFloat(d[0]), c.y = parseFloat(d[1])), c;
                    case "kit.math.Rectangle":
                        return c = new fb, d = b.split(","), 4 <= d.length &&
                            (c.x = parseFloat(d[0]), c.y = parseFloat(d[1]), c.width = parseFloat(d[2]), c.height = parseFloat(d[3])), c
                }
                break;
            case 7:
                switch (a[2]) {
                    case "Int":
                        return 35 == I.cca(b, 0) && (b = "0x" + I.substr(b, 1, null)), c = H.parseInt(b), null != c ? c : 0;
                    case "Float":
                        return c = parseFloat(b), isNaN(c) ? 0 : c;
                    case "Bool":
                        return "0" != b && "false" != b }
                break;
            case 1:
                if (c = ga.resolveEnum(a[2]), null != c) try { return ga.createEnum(c, b) } catch (e) { e instanceof A && (e = e.val) }
        }
        return null
    };
    var Rc = function() {};
    h["kit.sound.Sound"] = Rc;
    Rc.__name__ = ["kit", "sound", "Sound"];
    Rc.__interfaces__ = [bc];
    Rc.prototype = { __class__: Rc };
    var Db = function() { this.$xM = !1;
        this.$uL = new jf(this) };
    h.$CZB = Db;
    Db.__name__ = ["$CZB"];
    Db.__interfaces__ = [Rc];
    Db.$QO = function() { null == Db.$RO && (Db.$RO = new Db); return Db.$RO };
    Db.__super__ = Ca;
    Db.prototype = p(Ca.prototype, { play: function(a) { return this.$uL }, loop: function(a) { return this.$uL }, $vM: function() {}, __class__: Db });
    var Sc = function() {};
    h["kit.sound.Playback"] = Sc;
    Sc.__name__ = ["kit", "sound", "Playback"];
    Sc.__interfaces__ = [Jb];
    Sc.prototype = {
        __class__: Sc,
        __properties__: { get_complete: "get_complete" }
    };
    var jf = function(a) { this.$SO = a;
        this.volume = new la(0);
        this.$TO = new La(!0) };
    h.$CaB = jf;
    jf.__name__ = ["$CaB"];
    jf.__interfaces__ = [Sc];
    jf.prototype = { get_complete: function() { return this.$TO }, dispose: function() {}, __class__: jf, __properties__: { get_complete: "get_complete" } };
    var $d = function() { this.down = new za;
        this.move = new za;
        this.up = new za };
    h.$CcB = $d;
    $d.__name__ = ["$CcB"];
    $d.__interfaces__ = [gf];
    $d.prototype = { get_supported: function() { return !1 }, __class__: $d, __properties__: { get_supported: "get_supported" } };
    var ch = function() {};
    h["kit.video.Video"] = ch;
    ch.__name__ = ["kit", "video", "Video"];
    ch.__interfaces__ = [bc];
    var Xb = function() { this.$xM = !1;
        this.$uL = new kf(this) };
    h.$CdB = Xb;
    Xb.__name__ = ["$CdB"];
    Xb.__interfaces__ = [ch];
    Xb.$QO = function() { null == Xb.$RO && (Xb.$RO = new Xb); return Xb.$RO };
    Xb.__super__ = Ca;
    Xb.prototype = p(Ca.prototype, { $vM: function() {}, __class__: Xb });
    var lf = function() {};
    h["kit.video.VideoPlayback"] = lf;
    lf.__name__ = ["kit", "video", "VideoPlayback"];
    lf.__interfaces__ = [Jb];
    lf.prototype = { __class__: lf };
    var kf =
        function(a) { this.$UO = a;
            this.volume = new la(0);
            this.$TO = new La(!0);
            this.$YJ = z.$KH.$ZG.createTexture(1, 1) };
    h.$CeB = kf;
    kf.__name__ = ["$CeB"];
    kf.__interfaces__ = [lf];
    kf.prototype = { dispose: function() {}, __class__: kf };
    var Tc = function() { this.$wF = [] };
    h.$CgB = Tc;
    Tc.__name__ = ["$CgB"];
    Tc.__interfaces__ = [Jb];
    Tc.prototype = {
        $BJ: function(a, b, c) { a.addEventListener(b, c, !1);
            this.$wF.push(new dh(a, b, c)) },
        $VO: function(a, b, c) { var d = this;
            this.$BJ(a, b, function(a) { d.dispose();
                c(a) }) },
        dispose: function() {
            for (var a = 0, b = this.$wF; a <
                b.length;) { var c = b[a];++a;
                c.$WO.removeEventListener(c.$rK, c.$XO, !1) } this.$wF = []
        },
        __class__: Tc
    };
    var dh = function(a, b, c) { this.$WO = a;
        this.$rK = b;
        this.$XO = c };
    h.$ChB = dh;
    dh.__name__ = ["$ChB"];
    dh.prototype = { __class__: dh };
    var Ig = function(a, b) { this.$ZO = this.$aO = 0; var c = a + 150,
            d = b + 150;
        this.$bO = z.$KH.$ZG.createTexture(c, d);
        this.$cO = z.$KH.$ZG.createTexture(c, d);
        this.$WJ = a;
        this.$XJ = b };
    h.$CjB = Ig;
    Ig.__name__ = ["$CjB"];
    Ig.prototype = {
        $dO: function(a, b) {
            if (a > this.$bO.get_width() || b > this.$bO.get_height()) {
                var c = H["int"](Math.max(this.$bO.get_width(),
                        a + 150)),
                    d = H["int"](Math.max(this.$bO.get_height(), b + 150));
                this.$bO.dispose();
                this.$cO.dispose();
                this.$bO = z.$KH.$ZG.createTexture(c, d);
                this.$cO = z.$KH.$ZG.createTexture(c, d)
            } else this.$bO.clear(), this.$cO.clear();
            this.$WJ = a;
            this.$XJ = b
        },
        $eO: function(a) { null != a.$mK && (a.outputOnly || a.setUniformSampler2D("uTexture", this.$bO), a.setUniformVec2("uFilterPosition", this.$ZO, this.$aO), this.$cO.renderFilter(a, this.$WJ, this.$XJ), a = this.$bO, this.$bO = this.$cO, this.$cO = a) },
        __class__: Ig
    };
    var Ad = function() {};
    h.$ClB =
        Ad;
    Ad.__name__ = ["$ClB"];
    Ad.__interfaces__ = [pe];
    Ad.prototype = { __class__: Ad };
    var eh = function() {};
    h["kit.subsystem.RendererSystem"] = eh;
    eh.__name__ = ["kit", "subsystem", "RendererSystem"];
    eh.prototype = { __class__: eh, __properties__: { get_filterSupported: "get_filterSupported" } };
    var Bd = function() {};
    h.$CmB = Bd;
    Bd.__name__ = ["$CmB"];
    Bd.__interfaces__ = [eh];
    Bd.prototype = { __class__: Bd };
    var zd = function() {};
    h.$CnB = zd;
    zd.__name__ = ["$CnB"];
    zd.$ZQ = function(a) {
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
    zd.$aQ = function(a) {
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
    var uc = function() { this.$hQ = 0;
        this.$fQ = null;
        this.$bQ = new aa;
        this.$gQ = [] };
    h.$CoB = uc;
    uc.__name__ = ["$CoB"];
    uc.$iQ = function(a, b) { if (a.active) { var c = a.$PG[11]; if (null != c && (c.$OH = b, b *= c.scale.$tG, 0 >= b)) { c.onUpdate(b); return } for (c = a.firstComponent; null != c;) { var d = c.next;
                0 == (c.$B & 1) && (c.$B |= 1, c.$A(), c.onStart());
                c.onUpdate(b);
                c = d } for (c = a.firstChild; null != c;) d = c.next, uc.$iQ(c, b), c = d } };
    uc.prototype = {
        $sK: function() {
            if (1 == ua.$qN("scaleMode")) {
                var a = new E;
                z.root.add(a);
                var b = ua.$qN("width"),
                    c = ua.$qN("height"),
                    d = ua.$qN("maxWidth"),
                    e = ua.$qN("maxHeight"),
                    k = function() { var k = Math.min(z.$KH.$aG.get_width() / b, z.$KH.$aG.get_height() / c);
                        a.setXY(z.$KH.$aG.get_width() / 2 - k * b / 2, z.$KH.$aG.get_height() / 2 - k * c / 2);
                        a.setScale(k);
                        d * k < z.$KH.$aG.get_width() || e * k < z.$KH.$aG.get_height() ? (null == a.get_scissor() && a.set_scissor(new fb), a.get_scissor().set(b / 2 - d / 2, c / 2 - e / 2, d, e)) : a.set_scissor(null) };
                k();
                z.$KH.$aG.resize.connect(k)
            }
        },
        $TG: function(a) {
            if (!(0 >= a)) {
                0.5 < a ? 3 >= this.$hQ && (++this.$hQ, a = 0.016666666666666666) :
                    this.$hQ = 0;
                if (null != this.$fQ) { var b = this.$fQ;
                    this.$fQ = null; for (var c = 0; c < b.length;) { var d = b[c];++c;
                        d() } }
                for (b = 0; b < this.$gQ.length;) c = this.$gQ[b], null == c || c.update(a) ? this.$gQ.splice(b, 1) : ++b;
                z.volume.update(a);
                uc.$iQ(z.root, a);
                uc.$iQ(this.$bQ, a)
            }
        },
        $GJ: function(a) { var b = a.graphics;
            null != b && (a.willRender(), E.$QI(z.root, b, !0), E.$QI(this.$bQ, b, !0), a.didRender()) },
        $cQ: function(a) { this.$gQ.push(a) },
        $eQ: function(a) { null == this.$fQ ? this.$fQ = [a] : this.$fQ.push(a) },
        __class__: uc
    };
    var Da = function() {};
    h.$CpB = Da;
    Da.__name__ = ["$CpB"];
    Da.$kQ = function(a, b, c, d, e, k, f) { if (3 > f) return !1; for (var g = 0, h = 2 * Math.PI / f, l = 0; l < f;) { var m = l++,
                n = Math.cos(g),
                p = Math.sin(g),
                g = g + h;
            a.push(e * n + c);
            a.push(k * p + d);
            m < f - 1 && (b.push(0), b.push(m), b.push(m + 1)) } return !0 };
    Da.$lQ = function(a, b, c, d, e, k, f, g) { if (3 > g) return !1;
        a.push(c);
        a.push(d);
        f /= g; var h = 0; for (g += 1; h < g;) { var l = h++,
                m = Math.cos(k),
                n = Math.sin(k);
            k += f;
            a.push(e * m + c);
            a.push(e * n + d);
            b.push(0);
            b.push(l);
            b.push(l + 1) } return !0 };
    Da.$mQ = function(a, b, c, d, e, k, f, g, h) {
        f /= h;
        var l = [],
            m = 0;
        for (h += 1; m <
            h;) { m++; var n = Math.cos(k),
                p = Math.sin(k);
            k += f;
            l.push(e * n + c);
            l.push(e * p + d) }
        return Da.$oQ(a, b, l, g)
    };
    Da.$nQ = function(a, b, c, d, e, k, f, g) { for (var h = 0, l = 2 * Math.PI / g, m = [], n = 0; n < g;) { n++; var p = Math.cos(h),
                q = Math.sin(h),
                h = h + l;
            m.push(e * p + c);
            m.push(k * q + d) } m.push(e + c);
        m.push(d); return Da.$oQ(a, b, m, f) };
    Da.$oQ = function(a, b, c, d) {
        var e = c.length;
        if (4 > e) return !1;
        d /= 2;
        var k = c[0],
            f = c[1],
            g = c[e - 2],
            h = c[e - 1],
            l = new Ab(-(c[3] - f), c[2] - k);
        l.normalize();
        var m = l.x,
            l = l.y;
        a.push(k - d * m);
        a.push(f - d * l);
        a.push(k + d * m);
        a.push(f + d * l);
        k = e /
            2 | 0;
        for (f = 2; f < e - 2;) {
            var n = c[f++],
                p = c[f++],
                q = c[f],
                t = c[f + 1],
                r = new Ab(-(t - p), q - n);
            r.normalize();
            var s = new Ab(r.x, r.y);
            s.add(m, l);
            s.normalize();
            var u = r.dot(s.x, s.y);
            s.multiply(d / u);
            if (0.15 > u) { var u = c[f - 4],
                    v = c[f - 3];
                0 > (n - u) * (t - v) - (p - v) * (q - u) ? (a.push(n - s.x), a.push(p - s.y), a.push(n + m * d), a.push(p + l * d), a.push(n - s.x), a.push(p - s.y), a.push(n + r.x * d), a.push(p + r.y * d)) : (a.push(n - m * d), a.push(p - l * d), a.push(n + s.x), a.push(p + s.y), a.push(n - r.x * d), a.push(p - r.y * d), a.push(n + s.x), a.push(p + s.y));++k } else a.push(n - s.x), a.push(p -
                s.y), a.push(n + s.x), a.push(p + s.y);
            m = r.x;
            l = r.y
        }
        a.push(g - d * m);
        a.push(h - d * l);
        a.push(g + d * m);
        a.push(h + d * l);
        a = 0;
        for (c = k - 1; a < c;) e = 2 * a++, b.push(e), b.push(e + 1), b.push(e + 2), b.push(e + 2), b.push(e + 3), b.push(e + 1);
        return !0
    };
    Da.$pQ = function(a) { if (6 > a.length) return null;
        null == Da.$qQ && (Da.$qQ = new fh); return Da.$qQ.triangulate(a) };
    var $g = function() {};
    h.$CqB = $g;
    $g.__name__ = ["$CqB"];
    $g.$sQ = function(a) { switch (a) {
            case 0:
                return cb.Left;
            case 1:
                return cb.Middle;
            case 2:
                return cb.Right } return cb.Unknown(a) };
    var ae = function() {
        this.$jI =
            null;
        U.call(this)
    };
    h.$CrB = ae;
    ae.__name__ = ["$CrB"];
    ae.__super__ = U;
    ae.prototype = p(U.prototype, {
        get_entitySlot: function() { return 12 },
        onStart: function() { var a = this,
                b = ua.$rN();
            null != b && z.$KH.$aG.orientation.watch(function(c, d) { null == c || c == b ? a.$vQ() : a.$uQ(c != d) }) },
        $uQ: function(a) {
            var b = this;
            if (null == this.$jI) {
                this.owner.addChild(this.$jI = new aa);
                var c = this.$jI;
                z.loadAssetPack(Mb.fromAssets("_2DKitOrientation")).then(function(d) {
                    b.registerDisposable(d);
                    var e = new ud(0, 0, 0);
                    a && e.alpha.animate(0, 1, 0.3);
                    c.add(e);
                    var k = (new Ob(d.getTexture("RotateDevice"))).centerAnchor();
                    c.addChild((new aa).add(k));
                    d = function() { e.setSize(z.$KH.$aG.get_width(), z.$KH.$aG.get_height());
                        k.setXY(z.$KH.$aG.get_width() / 2, z.$KH.$aG.get_height() / 2) };
                    d();
                    b.connect0(z.$KH.$aG.resize, d)
                })
            }
        },
        $vQ: function() { null != this.$jI && (this.$jI.dispose(), this.$jI = null) },
        __class__: ae
    });
    var mf = function() {};
    h.$CtB = mf;
    mf.__name__ = ["$CtB"];
    mf.prototype = { __class__: mf };
    var nf = function() {};
    h.$CuB = nf;
    nf.__name__ = ["$CuB"];
    nf.prototype = { __class__: nf };
    var wa =
        function(a, b) { this.$OR = new of ;
            this.$NR = !1;
            this.$MR = a.getContext("2d", { alpha: b }) };
    h.$CvB = wa;
    wa.__name__ = ["$CvB"];
    wa.__interfaces__ = [Ad];
    wa.prototype = {
        save: function() { var a = this.$OR,
                b = this.$OR.next;
            null == b && (b = new of , b.$SR = a, a.next = b);
            b.$RM = a.$RM;
            b.$TM = a.$TM;
            b.$VM = a.$VM;
            b.$QR = a.$QR;
            b.$RR = a.$RR;
            this.$OR = b;
            this.$MR.save() },
        translate: function(a, b) { this.$MR.translate(a | 0, b | 0) },
        scale: function(a, b) { this.$MR.scale(a, b) },
        rotate: function(a) { this.$MR.rotate(3.141592653589793 * a / 180) },
        transform: function(a, b, c,
            d, e, k) { this.$MR.transform(a, b, c, d, e, k) },
        restore: function() { this.$OR = this.$OR.$SR;
            this.$MR.restore() },
        $AR: function(a, b, c, d, e) {
            var k = this.$OR,
                k = (255 * k.$RM & 255) << 16 | (255 * k.$TM & 255) << 8 | 255 * k.$VM & 255;
            null == wa.$PR && (wa.$PR = Q.$DT(d, e));
            wa.$PR.width = d;
            wa.$PR.height = e;
            var f = wa.$PR.getContext("2d", null);
            f.globalCompositeOperation = "copy";
            f.fillStyle = Q.$JT(k);
            f.fillRect(0, 0, d, e);
            f.globalCompositeOperation = "multiply";
            f.drawImage(a, b, c, d, e, 0, 0, d, e);
            f.globalCompositeOperation = "destination-atop";
            f.drawImage(a, b,
                c, d, e, 0, 0, d, e);
            return wa.$PR
        },
        drawTexture: function(a, b, c) { this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height()) },
        drawSubTexture: function(a, b, c, d, e, k, f) {
            if (this.$NR) this.$NR = !1, this.$MR.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, d, e, k, f), this.$MR.globalCompositeOperation = "source-over";
            else {
                var g = a.$eN;
                d = a.$fN + d | 0;
                a = a.$gN + e | 0;
                k |= 0;
                f |= 0;
                b |= 0;
                c |= 0;
                e = g.$lH;
                this.$OR.$QR ? (g = this.$AR(g.$dR, d, a, k, f), this.$MR.drawImage(g, b * e, c * e, k * e, f * e)) : this.$MR.drawImage(g.$dR, d * e, a * e, k * e, f * e, b, c, k,
                    f)
            }
        },
        drawPattern: function(a, b, c, d, e) { if (this.$NR) this.$NR = !1, this.$MR.globalCompositeOperation = "copy", this.drawPattern(a, b, c, d, e), this.$MR.globalCompositeOperation = "source-over";
            else { var k = this.$OR,
                    f = a.$eN.$lH;
                1 != f && (this.$MR.save(), this.$MR.scale(1 / f, 1 / f));
                b |= 0;
                c |= 0;
                d |= 0;
                e |= 0;
                k.$RR ? this.$MR.rect(b, c, d, e) : (this.$MR.fillStyle = this.$IR(a), this.$MR.fillRect(b, c, d * f, e * f));
                1 != f && this.$MR.restore() } },
        fillRect: function(a, b, c, d, e) {
            this.$NR ? (this.$NR = !1, this.$MR.globalCompositeOperation = "copy", this.fillRect(a,
                b, c, d, e), this.$MR.globalCompositeOperation = "source-over") : (b |= 0, c |= 0, d |= 0, e |= 0, this.$OR.$RR ? this.$MR.rect(b, c, d, e) : (this.$MR.fillStyle = this.$HR(a), this.$MR.fillRect(b, c, d, e)))
        },
        fillTriangles: function(a, b, c) { this.$NR = !1;
            this.$BR(b, c);
            this.$JR(a) },
        drawTriangles: function(a, b, c, d) { this.$NR = !1;
            this.$BR(b, c);
            this.$KR(a) },
        $BR: function(a, b) {
            this.$MR.beginPath();
            for (var c = 0, d = b.length; c < d;) {
                var e = 2 * b[c],
                    k = 2 * b[c + 1],
                    f = 2 * b[c + 2],
                    c = c + 3;
                this.$MR.moveTo(a[e], a[e + 1]);
                this.$MR.lineTo(a[k], a[k + 1]);
                this.$MR.lineTo(a[f],
                    a[f + 1])
            }
            this.$MR.closePath()
        },
        fillPolygon: function(a, b) { this.$NR = !1;
            this.$CR(b);
            this.$JR(a) },
        drawPolygon: function(a, b) { this.$NR = !1;
            this.$CR(b);
            this.$KR(a) },
        $CR: function(a) { this.$MR.beginPath(); for (var b = 0, c = a.length; b < c;) { var d = a[b++],
                    e = a[b++];
                this.$MR.lineTo(d, e) } this.$MR.closePath() },
        drawCircle: function(a, b, c, d, e) { this.$NR = !1;
            this.$DR(b, c, d);
            this.$KR(a) },
        fillCircle: function(a, b, c, d, e) { this.$NR = !1;
            this.$DR(b, c, d);
            this.$JR(a) },
        strokeCircle: function(a, b, c, d, e, k) {
            this.$NR = !1;
            this.$DR(b, c, d);
            this.$LR(a,
                e)
        },
        $DR: function(a, b, c) { this.$MR.beginPath();
            this.$MR.arc(a, b, c, 0, 6.283185307179586);
            this.$MR.closePath() },
        drawEllipse: function(a, b, c, d, e, k) { this.$NR = !1;
            this.$ER(b, c, d, e);
            this.$KR(a) },
        fillEllipse: function(a, b, c, d, e, k) { this.$NR = !1;
            this.$ER(b, c, d, e);
            this.$JR(a) },
        strokeEllipse: function(a, b, c, d, e, k, f) { this.$NR = !1;
            this.$ER(b, c, d, e);
            this.$LR(a, k) },
        $ER: function(a, b, c, d) {
            var e = 0.5522848 * c,
                k = 0.5522848 * d,
                f = a - c,
                g = b - d;
            c = a + c;
            d = b + d;
            this.$MR.beginPath();
            this.$MR.moveTo(f, b);
            this.$MR.bezierCurveTo(f, b - k, a - e, g, a,
                g);
            this.$MR.bezierCurveTo(a + e, g, c, b - k, c, b);
            this.$MR.bezierCurveTo(c, b + k, a + e, d, a, d);
            this.$MR.bezierCurveTo(a - e, d, f, b + k, f, b);
            this.$MR.closePath()
        },
        fillArc: function(a, b, c, d, e, k, f) { this.$NR = !1;
            k = e + k;
            this.$MR.beginPath();
            this.$MR.moveTo(b, c);
            this.$MR.arc(0, 0, d, 3.141592653589793 * e / 180, 3.141592653589793 * k / 180);
            this.$JR(a) },
        strokeArc: function(a, b, c, d, e, k, f, g) { this.$NR = !1;
            c = e + k;
            this.$MR.beginPath();
            this.$MR.arc(b, b, d, 3.141592653589793 * e / 180, 3.141592653589793 * c / 180);
            this.$LR(a, f) },
        strokeLines: function(a, b,
            c) { this.$NR = !1;
            this.$FR(b);
            this.$MR.lineWidth = c;
            this.$MR.strokeStyle = this.$HR(a);
            this.$MR.stroke() },
        drawLines: function(a, b, c) { this.$NR = !1;
            this.$FR(b);
            this.$MR.lineWidth = c;
            this.$MR.strokeStyle = this.$IR(a);
            this.$MR.stroke() },
        $FR: function(a) { this.$MR.beginPath(); if (2 <= a.length) { this.$MR.moveTo(a[0], a[1]); for (var b = 2, c = a.length; b < c;) { var d = a[b++],
                        e = a[b++];
                    this.$MR.lineTo(d, e) } } },
        multiplyAlpha: function(a) { this.$MR.globalAlpha *= a },
        setAlpha: function(a) { this.$MR.globalAlpha = a },
        tint: function(a, b, c) {
            var d =
                this.$OR;
            d.$RM *= a;
            d.$TM *= b;
            d.$VM *= c;
            d.$QR = !0
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
                    b = "copy" } this.$MR.globalCompositeOperation = b },
        beginMask: function() { var a = this.$OR;
            a.$RR && this.endMask();
            a.$RR = !0;
            this.$MR.beginPath() },
        endMask: function() { var a = this.$OR;
            a.$RR && (a.$RR = !1, this.$MR.clip()) },
        applyScissor: function(a, b, c, d) {
            this.$MR.beginPath();
            this.$MR.rect(a |
                0, b | 0, c | 0, d | 0);
            this.$MR.clip()
        },
        willRender: function() { this.$NR = !0 },
        didRender: function() {},
        onResize: function(a, b) {},
        $HR: function(a) { var b = this.$OR;
            b.$QR && (a = (b.$RM * (a & 16711680) / 16711680 * 255 & 255) << 16 | (b.$TM * (a & 65280) / 65280 * 255 & 255) << 8 | b.$VM * (a & 255) / 255 * 255 & 255); return Q.$JT(a) },
        $IR: function(a) { return this.$OR.$QR ? (a = this.$AR(a.$eN.$dR, a.$fN, a.$gN, a.$WJ, a.$XJ), this.$MR.createPattern(a, "repeat")) : a.$WR() },
        $JR: function(a) { this.$OR.$RR || (this.$MR.fillStyle = this.$HR(a), this.$MR.fill()) },
        $KR: function(a) {
            this.$OR.$RR ||
                (this.$MR.fillStyle = this.$IR(a), this.$MR.fill())
        },
        $LR: function(a, b) { this.$OR.$RR || (this.$MR.strokeStyle = this.$HR(a), this.$MR.lineWidth = b, this.$MR.stroke()) },
        __class__: wa
    };
    var of = function() { this.$SR = this.next = null;
        this.$QR = this.$RR = !1;
        this.$RM = this.$TM = this.$VM = 1 };
    h.$CwB = of ; of .__name__ = ["$CwB"]; of .prototype = { __class__: of };
    var pd = function(a) { this.graphics = new wa(a, !1);
        this.$VR = new La(!0) };
    h.$CxB = pd;
    pd.__name__ = ["$CxB"];
    pd.__interfaces__ = [Bd];
    pd.prototype = {
        get_filterSupported: function() { return !1 },
        createTextureFromImage: function(a,
            b, c) { null == c && (c = 1);
            a = new Cd(a, c); return a.createTexture(a.$ZR / c, a.$aR / c) },
        createTexture: function(a, b, c, d) { null == d && (d = 1);
            a = Q.$DT(a, b); return this.createTextureFromImage(a, null, d) },
        createSystemFont: function(a) { return new Eb(a) },
        getTextureAssetFormats: function() { return [] },
        willRender: function() { this.graphics.willRender() },
        didRender: function() { this.graphics.didRender() },
        __class__: pd,
        __properties__: { get_filterSupported: "get_filterSupported" }
    };
    var pf = function(a, b, c) {
        this.$YR = 0;
        this.$XR = null;
        Yb.call(this,
            a, b, c)
    };
    h.$CyB = pf;
    pf.__name__ = ["$CyB"];
    pf.__super__ = Yb;
    pf.prototype = p(Yb.prototype, { $WR: function() { if (this.$YR != this.$eN.$eR || null == this.$XR) this.$YR = this.$eN.$eR, this.$XR = this.$eN.$gR(this.$fN, this.$gN, this.$WJ, this.$XJ); return this.$XR }, __class__: pf });
    var Cd = function(a, b) { this.$iR = null;
        this.$eR = 0;
        this.$xM = !1;
        this.$dR = a;
        this.$ZR = a.width;
        this.$aR = a.height;
        this.$lH = b;
        this.$bR = this.$ZR / b;
        this.$cR = this.$aR / b };
    h.$CzB = Cd;
    Cd.__name__ = ["$CzB"];
    Cd.__interfaces__ = [mf];
    Cd.__super__ = Ca;
    Cd.prototype = p(Ca.prototype, {
        createTexture: function(a, b) { return new pf(this, Math.ceil(a), Math.ceil(b)) },
        getGraphics: function() { null == this.$iR && (this.$hR(), this.$iR = new qf(this)); return this.$iR },
        clear: function() { var a = this.$hR();
            a.save();
            a.setTransform(1, 0, 0, 1, 0, 0);
            a.clearRect(0, 0, this.$dR.width, this.$dR.height);
            a.restore() },
        renderFilter: function(a, b, c) { null },
        $gR: function(a, b, c, d) {
            var e = this.$hR(),
                k = this.$dR;
            if (0 != a || 0 != b || c != this.$bR || d != this.$cR) k = Q.$DT(c, d), c = k.getContext("2d", null), c.globalCompositeOperation = "copy", c.drawImage(this.$dR,
                -a, -b);
            return e.createPattern(k, "repeat")
        },
        $hR: function() { V.__instanceof(this.$dR, HTMLCanvasElement) || (this.$dR = Q.$ET(this.$dR)); return this.$dR.getContext("2d", null) },
        $vM: function() { this.$iR = this.$dR = null },
        __class__: Cd
    });
    var qf = function(a) { wa.call(this, a.$dR, !0);
        this.$jR = a };
    h.$C$B = qf;
    qf.__name__ = ["$C$B"];
    qf.__super__ = wa;
    qf.prototype = p(wa.prototype, {
        drawTexture: function(a, b, c) { wa.prototype.drawTexture.call(this, a, b, c);++this.$jR.$eR },
        drawSubTexture: function(a, b, c, d, e, k, f) {
            wa.prototype.drawSubTexture.call(this,
                a, b, c, d, e, k, f);
            ++this.$jR.$eR
        },
        drawPattern: function(a, b, c, d, e) { wa.prototype.drawPattern.call(this, a, b, c, d, e);++this.$jR.$eR },
        fillRect: function(a, b, c, d, e) { wa.prototype.fillRect.call(this, a, b, c, d, e);++this.$jR.$eR },
        fillTriangles: function(a, b, c) { wa.prototype.fillTriangles.call(this, a, b, c);++this.$jR.$eR },
        drawTriangles: function(a, b, c, d) { wa.prototype.drawTriangles.call(this, a, b, c);++this.$jR.$eR },
        drawCircle: function(a, b, c, d, e) { null == e && (e = 50);
            wa.prototype.drawCircle.call(this, a, b, c, d, e);++this.$jR.$eR },
        fillCircle: function(a, b, c, d, e) { null == e && (e = 50);
            wa.prototype.fillCircle.call(this, a, b, c, d, e);++this.$jR.$eR },
        drawEllipse: function(a, b, c, d, e, k) { null == k && (k = 50);
            wa.prototype.drawEllipse.call(this, a, b, c, d, e, k);++this.$jR.$eR },
        fillEllipse: function(a, b, c, d, e, k) { null == k && (k = 50);
            wa.prototype.fillEllipse.call(this, a, b, c, d, e, k);++this.$jR.$eR },
        strokeLines: function(a, b, c) { wa.prototype.strokeLines.call(this, a, b, c);++this.$jR.$eR },
        drawLines: function(a, b, c) { wa.prototype.drawLines.call(this, a, b, c);++this.$jR.$eR },
        __class__: qf
    });
    var ha = function(a, b) { xd.call(this, a, b) };
    h.$CAC = ha;
    ha.__name__ = ["$CAC"];
    ha.$pR = function(a) { var b = [C.PNG, C.JPG, C.GIF],
            c = 2,
            d;
        d = window.document.createElement("img");
        d.onload = d.onerror = function(e) { 1 == d.width && b.unshift(C.WEBP);--c;
            0 == c && a(b) };
        d.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=="; var e;
        e = window.document.createElement("img");
        e.onload = e.onerror = function(d) { 1 == e.width && b.unshift(C.JXR);--c;
            0 == c && a(b) };
        e.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA==" };
    ha.$qR = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == G(a, a.canPlayType)) return [];
        var b = new q("\\b(iPhone|iPod|iPad|Android|Windows Phone)\\b", ""),
            c = window.navigator.userAgent;
        if (!ca.get_supported() && b.match(c)) return [];
        b = [];
        b.push({ format: C.MP3, mimeType: "audio/mpeg" });
        b.push({ format: C.MP4, mimeType: "video/mp4" });
        for (var c = [{ format: C.OGG, mimeType: "audio/ogg; codecs=vorbis" }, { format: C.WAV, mimeType: "audio/wav" }, { format: C.WEBM, mimeType: "video/webm" }], b = 0 <= window.navigator.userAgent.indexOf("2DKSim") ?
                c : b.concat(c), c = [], d = 0; d < b.length;) { var e = b[d];++d; var k = ""; try { k = a.canPlayType(e.mimeType) } catch (f) { f instanceof A && (f = f.val) } "" != k && c.push(e.format) }
        return c
    };
    ha.$rR = function() { if (ha.$AS) { ha.$AS = !1; if ((new q("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1; var a = new XMLHttpRequest;
            a.open("GET", ".", !0); if ("" != a.responseType) return !1;
            a.responseType = "blob"; if ("blob" != a.responseType) return !1;
            ha.$BS = Q.$xS("URL").value } return null != ha.$BS && null != ha.$BS.createObjectURL };
    ha.$sR = function(a) { var b = ++ha.$$R;
        null == ha.$zR && (ha.$zR = new nb);
        ha.$zR.h[b] = a; return b };
    ha.$tR = function(a) { ha.$zR.remove(a) };
    ha.__super__ = xd;
    ha.prototype = p(xd.prototype, {
        $_M: function(a, b) {
            var c = this;
            switch (b.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var d;
                    d = window.document.createElement("img");
                    var e = new Tc;
                    e.$VO(d, "load", function(a) { ha.$rR() && ha.$BS.revokeObjectURL(d.src);
                        a = c.$KH.getRenderer().createTextureFromImage(d, null, 1);
                        null != a ? c.$BN(b, a) : c.$FN(b) });
                    e.$VO(d, "error", function(a) { c.$EN(b, "Failed to load image") });
                    e = "data:" == I.substr(a, 0, 5);
                    !e && ha.$rR() ? this.$nR(a, b, "blob", function(a) { d.src = ha.$BS.createObjectURL(a) }) : (e || (d.crossOrigin = ""), d.src = a);
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    if (ca.get_supported()) this.$nR(a, b, "arraybuffer", function(a) { ca.$eT.decodeAudioData(a, function(a) { c.$BN(b, new ca(a)) }, function() { c.$BN(b, Db.$QO()) }) });
                    else {
                        var k;
                        k = window.document.createElement("audio");
                        k.preload = "auto";
                        var f = ha.$sR(k),
                            e = new Tc;
                        e.$VO(k, "canplaythrough", function(a) { ha.$tR(f);
                            c.$BN(b, new Dd(k)) });
                        e.$VO(k,
                            "error",
                            function(a) { ha.$tR(f);
                                a = k.error.code;
                                3 == a || 4 == a ? c.$BN(b, Db.$QO()) : c.$EN(b, "Failed to load audio: " + k.error.code) });
                        e.$BJ(k, "progress", function(a) { 0 < k.buffered.length && 0 < k.duration && (a = k.buffered.end(0) / k.duration, c.$CN(b, a * b.bytes | 0, b.bytes)) });
                        k.src = a;
                        k.load()
                    }
                    break;
                case 17:
                case 18:
                    var g;
                    g = window.document.createElement("video");
                    g.preload = "metadata";
                    var h = ha.$sR(g),
                        e = new Tc;
                    e.$VO(g, "loadedmetadata", function(a) { ha.$tR(h);
                        c.$BN(b, new Ed(g)) });
                    e.$VO(g, "error", function(a) {
                        ha.$tR(h);
                        c.$EN(b, "Failed to load video: " +
                            g.error.code)
                    });
                    g.src = a;
                    g.load();
                    break;
                case 13:
                case 14:
                case 15:
                    (function(a, d) {
                        var e = "_kit_font_" + ha.$_R;
                        ++ha.$_R;
                        if ("undefined" != typeof FontFace)(new FontFace(e, "url(" + a + ")", {})).load().then(function(a) { window.document.fonts.add(a);
                            c.$BN(b, new Eb(e, a)) }, function(a) { c.$EN(b, a.message) });
                        else {
                            var k;
                            k = window.document.createElement("style");
                            k.innerHTML = "@font-face{font-family:" + e + ";src:url(" + a + ");}";
                            window.document.head.appendChild(k);
                            var f = window.document.createElement("canvas").getContext("2d", null);
                            f.font = "300px sans";
                            var g = f.measureText("BESbswy").width;
                            f.font = '300px "' + e + '"';
                            var h = Date.now() / 1E3;
                            z.nextFrame(function(a) { var d = null; return d = function() { var a = Date.now() / 1E3 - h,
                                        l = f.measureText("BESbswy").width;
                                    5 <= a || g != l ? c.$BN(b, new Eb(e, null, k)) : z.$KH.$SG.$eQ(d) } }(this))
                        }
                    })(a, !1);
                    break;
                case 19:
                    this.$nR(a, b, "text", function(a) { c.$BN(b, new yd(a)) })
            }
        },
        $AN: function(a) {
            var b = this;
            null == ha.$yR && (ha.$yR = new Qa, ha.$pR(function(a) {
                var d;
                d = window.navigator.isCocoonJS ? [C.TTF, C.WOFF] : [C.WOFF, C.OTF, C.TTF];
                a =
                    b.$KH.getRenderer().getTextureAssetFormats().concat(a).concat(ha.$qR()).concat(d).concat([C.Data]);
                ha.$yR.success(a)
            }));
            ha.$yR.then(a)
        },
        $nR: function(a, b, c, d) { this.$oR(a, b, c, d) },
        $oR: function(a, b, c, d) {
            var e = this,
                k = null,
                f = null,
                g = 0,
                h = !1,
                l = function() { h && (h = !1, window.clearInterval(g)) },
                m = 3,
                n = function() {--m; return 0 <= m ? (f(), !0) : !1 },
                f = function() {
                    l();
                    null != k && k.abort();
                    k = new XMLHttpRequest;
                    k.open("GET", a, !0);
                    k.responseType = c;
                    var f = 0;
                    k.onprogress = function(a) {
                        h || (h = !0, g = window.setInterval(function() {
                            4 != k.readyState &&
                                5E3 < Date.now() - f && !n() && (l(), e.$EN(b, "Download stalled"))
                        }, 1E3));
                        f = Date.now();
                        e.$CN(b, a.loaded, a.total)
                    };
                    k.onerror = function(a) { 0 == k.status && n() || (l(), e.$EN(b, "HTTP error " + k.status)) };
                    k.onload = function(a) { a = k.response;
                        null == a && (a = k.responseText);
                        l();
                        d(a) };
                    k.send()
                };
            f()
        },
        __class__: ha
    });
    var gh = function() {};
    h["kit.subsystem.ExternalSystem"] = gh;
    gh.__name__ = ["kit", "subsystem", "ExternalSystem"];
    gh.prototype = { __class__: gh };
    var ce = function() {};
    h.$CCC = ce;
    ce.__name__ = ["$CCC"];
    ce.__interfaces__ = [gh];
    ce.prototype = { call: function(a, b) { null == b && (b = []); for (var c = window, d = c, e = 0, k = a.split("."); e < k.length;) { var f = k[e];++e;
                c = d;
                d = L.field(c, f) } return d.apply(c, b) }, __class__: ce };
    var Yd = function(a, b) { hb.call(this, a);
        this.$lG = b };
    h.$CGC = Yd;
    Yd.__name__ = ["$CGC"];
    Yd.__super__ = hb;
    Yd.prototype = p(hb.prototype, { set_cursor: function(a) { var b; switch (a[1]) {
                case 0:
                    b = ""; break;
                case 1:
                    b = "pointer"; break;
                case 2:
                    b = "none" } this.$lG.style.cursor = b; return hb.prototype.set_cursor.call(this, a) }, __class__: Yd });
    var Dd = function(a) {
        this.$xM = !1;
        this.$bS =
            a
    };
    h.$CHC = Dd;
    Dd.__name__ = ["$CHC"];
    Dd.__interfaces__ = [Rc];
    Dd.__super__ = Ca;
    Dd.prototype = p(Ca.prototype, { play: function(a) { null == a && (a = 1); return new Fd(this, a, !1) }, loop: function(a) { null == a && (a = 1); return new Fd(this, a, !0) }, $vM: function() { this.$bS = null }, __class__: Dd });
    var Fd = function(a, b, c) {
        this.$iS = !1;
        var d = this;
        this.$SO = a;
        this.$QS = !1;
        this.$eS = window.document.createElement("audio");
        this.$eS.loop = c;
        this.$eS.src = a.$bS.src;
        this.volume = new la(b, function(a, b) { d.$dS() });
        this.$dS();
        this.$TO = new La(!1);
        this.$cS();
        z.hidden.$tG && this.set_paused(!0)
    };
    h.$CIC = Fd;
    Fd.__name__ = ["$CIC"];
    Fd.__interfaces__ = [nf, Sc];
    Fd.prototype = {
        set_paused: function(a) { a != this.$iS && ((this.$iS = a) ? this.$eS.pause() : this.$cS()); return a },
        get_complete: function() { return this.$TO },
        update: function(a) { this.volume.update(a);
            this.$TO.set__(this.$eS.ended); return this.$TO.$tG || this.$iS ? (this.$QS = !1, this.$fS.dispose(), this.$gS.dispose(), !0) : !1 },
        dispose: function() { this.set_paused(!0);
            this.$TO.set__(!0) },
        $cS: function() {
            var a = this;
            this.$eS.play();
            this.$QS ||
                (jc.$rG.$SG.$cQ(this), this.$QS = !0, this.$fS = z.volume.get_changed().connect(function(b, c) { a.$dS() }), this.$gS = z.hidden.get_changed().connect(function(b, c) { b ? (a.$hS = a.$iS, a.set_paused(!0)) : a.set_paused(a.$hS) }))
        },
        $dS: function() { this.$eS.volume = sa.clamp(z.volume.$tG * this.volume.$tG, 0, 1) },
        __class__: Fd,
        __properties__: { get_complete: "get_complete", set_paused: "set_paused" }
    };
    var hh = function() {};
    h["kit.subsystem.StageSystem"] = hh;
    hh.__name__ = ["kit", "subsystem", "StageSystem"];
    hh.prototype = {
        __class__: hh,
        __properties__: {
            get_height: "get_height",
            get_width: "get_width"
        }
    };
    var Lc = function(a) { this.$nS = 1;
        this.orientation = new La(null); var b = this;
        this.$lG = a;
        this.resize = new $b;
        this.$nS = Lc.$oS();
        Q.$KT() || (Q.$$S(this.$lG, "transform-origin", "top left"), Q.$$S(this.$lG, "transform", "scale(" + 1 / this.$nS + ")"));
        window.addEventListener("resize", G(this, this.$jS), !1);
        this.$jS(null);
        this.fullscreen = new La(!1);
        Q.$_S(window.document, "fullscreenchange", function(a) { b.$mS() }, !1);
        this.$mS() };
    h.$CJC = Lc;
    Lc.__name__ = ["$CJC"];
    Lc.__interfaces__ = [hh];
    Lc.$oS = function() {
        var a =
            window.devicePixelRatio;
        null == a && (a = 1);
        var b = window.document.createElement("canvas").getContext("2d", null),
            b = Q.$xS("backingStorePixelRatio", b).value;
        null == b && (b = 1);
        return a / b
    };
    Lc.prototype = {
        get_width: function() { return this.$lG.width },
        get_height: function() { return this.$lG.height },
        get_fullscreenSupported: function() { return !0 == Q.$yS(["fullscreenEnabled", "fullScreenEnabled"], window.document).value },
        lockOrientation: function(a) {
            var b = Q.$xS("lockOrientation", window.screen).value;
            if (null != b) {
                var c;
                switch (a[1]) {
                    case 0:
                        c =
                            "portrait";
                        break;
                    case 1:
                        c = "landscape"
                }
                L.callMethod(window.screen, b, [c]) || null
            }
        },
        requestFullscreen: function(a) { null == a && (a = !0); if (a) { a = window.document.documentElement; var b = Q.$yS(["requestFullscreen", "requestFullScreen"], a).value;
                null != b && b.apply(a, []) } else a = Q.$yS(["exitFullscreen", "cancelFullscreen", "cancelFullScreen"], window.document).value, null != a && L.callMethod(window.document, a, []) },
        $jS: function(a) {
            var b = this.$lG.parentElement.getBoundingClientRect();
            !Q.$sS || 90 != window.orientation && -90 != window.orientation ?
                this.$kS(b.width, b.height) : (a = Math.min(window.innerWidth, b.width), b = Math.min(window.innerHeight, b.height), this.$kS(a, b) && window.scrollTo(window.scrollX, window.scrollY));
            this.$lS()
        },
        $kS: function(a, b) { var c = this.$nS * a,
                d = this.$nS * b; if (this.$lG.width == c && this.$lG.height == d) return !1;
            1 != this.$nS && Q.$KT() && (this.$lG.style.width = a + "px", this.$lG.style.height = b + "px");
            this.$lG.width = c | 0;
            this.$lG.height = d | 0;
            this.resize.emit(); return !0 },
        $lS: function() {
            null == window.orientation ? this.orientation.set__(null) : this.orientation.set__(window.innerWidth >
                window.innerHeight ? Vb.Landscape : Vb.Portrait)
        },
        $mS: function() { var a = Q.$yS(["fullscreen", "fullScreen", "isFullScreen"], window.document).value;
            this.fullscreen.set__(!0 == a) },
        __class__: Lc,
        __properties__: { get_fullscreenSupported: "get_fullscreenSupported", get_height: "get_height", get_width: "get_width" }
    };
    var Q = function() {};
    h.$CLC = Q;
    Q.__name__ = ["$CLC"];
    Q.$wS = function(a, b) { null == b && (b = 0);
        window.setTimeout(a, b) };
    Q.$xS = function(a, b) {
        null == b && (b = window);
        var c = L.field(b, a);
        if (null != c) return { prefix: "", field: a, value: c };
        for (var c = a.charAt(0).toUpperCase() + I.substr(a, 1, null), d = 0, e = Q.$rS; d < e.length;) { var k = e[d];++d; var f = k + c,
                g = L.field(b, f); if (null != g) return { prefix: k, field: f, value: g } }
        return { prefix: null, field: null, value: null }
    };
    Q.$yS = function(a, b) { for (var c = 0; c < a.length;) { var d = a[c];++c;
            d = Q.$xS(d, b); if (null != d.field) return d } return { prefix: null, field: null, value: null } };
    Q.$zS = function(a, b) { null == b && (b = window); var c = Q.$xS(a, b).value; if (null == c) return !1;
        b[a] = c; return !0 };
    Q.$$S = function(a, b, c) {
        a = a.style;
        for (var d = 0, e = Q.$rS; d <
            e.length;) { var k = e[d];++d;
            a.setProperty("-" + k + "-" + b, c) } a.setProperty(b, c)
    };
    Q.$_S = function(a, b, c, d) { for (var e = 0, k = Q.$rS; e < k.length;) { var f = k[e];++e;
            a.addEventListener(f + b, c, d) } a.addEventListener(b, c, d) };
    Q.$DT = function(a, b) { var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height = b; return c };
    Q.$ET = function(a) { var b = Q.$DT(a.width, a.height),
            c = b.getContext("2d", null);
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore(); return b };
    Q.$GT = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a =
                Math.sin,
                b = Math.cos;
            Math.sin = function(b) { return 0 == b ? 0 : a(b) };
            Math.cos = function(a) { return 0 == a ? 1 : b(a) }
        }
    };
    Q.$HT = function() { 0 <= window.navigator.userAgent.indexOf("iPhone OS 7_1") && (window.addEventListener("scroll", function(a) { window.document.activeElement == window.document.body && 0 < window.scrollY && (window.document.body.scrollTop = 0) }, !0), window.document.body.scrollTop = 0) };
    Q.$IT = function(a, b, c) { var d = a.getContext("2d", null);
        d.drawImage(a, b - 1, 0, 1, c, b, 0, 1, c);
        d.drawImage(a, 0, c - 1, b, 1, 0, c, b, 1) };
    Q.$JT = function(a) {
        for (a =
            (16777215 & a).toString(16); 6 > a.length;) a = "0" + H.string(a);
        return "#" + H.string(a)
    };
    Q.$KT = function() { try { return window.self != window.parent } catch (a) { return a instanceof A && (a = a.val), !0 } };
    Q.$LT = function(a) { return 157286400 };
    var Eb = function(a, b, c) { this.$xM = !1;
        this.$hF = a;
        this.$QT = b;
        this.$RT = c };
    h.$CMC = Eb;
    Eb.__name__ = ["$CMC"];
    Eb.__interfaces__ = [Xe];
    Eb.__super__ = Ca;
    Eb.prototype = p(Ca.prototype, {
        createTexture: function(a, b) {
            var c = b.fontSize + 'px "' + this.$hF + '"';
            b.bold && (c = "bold " + c);
            b.italic && (c = "italic " + c);
            var d =
                this.$PT(c),
                e;
            e = window.document.createElement("canvas");
            var k = e.getContext("2d", null);
            k.font = c;
            0 < b.wrapWidth && (a = this.$OT(k, a, b.wrapWidth));
            var f = a.split("\n"),
                g;
            if (0 < b.wrapWidth && b.align != ea.Left) g = b.wrapWidth;
            else
                for (var h = g = 0; h < f.length;) { var l = f[h];++h;
                    g = Math.max(g, k.measureText(l).width) } g += b.strokeWidth;
            var h = d.$TT + d.$UT + b.strokeWidth,
                l = g + 4,
                m = h + (h + b.lineSpacing) * (f.length - 1) + 4;
            b.italic && (l += 0.25 * b.fontSize);
            e.width = Math.ceil(l);
            e.height = Math.ceil(m);
            k.font = c;
            k.textBaseline = "alphabetic";
            0 < b.strokeWidth &&
                (k.strokeStyle = Q.$JT(b.strokeColor), k.lineWidth = b.strokeWidth);
            k.fillStyle = Q.$JT(b.color);
            var n;
            switch (b.align[1]) {
                case 0:
                    n = 0.5 * b.strokeWidth;
                    k.textAlign = "left"; break;
                case 1:
                    n = g / 2;
                    k.textAlign = "center"; break;
                case 2:
                    n = g - 0.5 * b.strokeWidth, k.textAlign = "right" } c = d.$TT + 0.5 * b.strokeWidth;
            for (d = 0; d < f.length;) g = f[d], ++d, 0 < b.strokeWidth && k.strokeText(g, n | 0, c | 0), k.fillText(g, n | 0, c | 0), c += h + b.lineSpacing;
            return z.$KH.$ZG.createTextureFromImage(e, Fa.RGBA_4444)
        },
        $OT: function(a, b, c) {
            var d = "";
            b = b.split("\n");
            for (var e =
                    0, k = b.length; e < k;) { for (var f = e++, g = c, h = b[f].split(" "), l = 0, m = h.length; l < m;) { var n = l++,
                        p = a.measureText(h[n]).width,
                        q = p + a.measureText(" ").width;
                    0 == n || q > g ? (0 < n && (d += "\n"), d += h[n], g = c - p) : (g -= q, d += " " + h[n]) } f < b.length - 1 && (d += "\n") }
            return d
        },
        $PT: function(a) {
            null == Eb.$ST && (Eb.$ST = new W);
            var b = Eb.$ST.get(a);
            if (null != b) return b;
            var c;
            c = window.document.createElement("canvas");
            var d = c.getContext("2d", null);
            d.font = a;
            var e = Math.ceil(d.measureText("|M\u00c9q").width),
                b = Math.ceil(d.measureText("M").width),
                k = 2 *
                b,
                b = 1.4 * b | 0;
            c.width = e;
            c.height = k;
            d.fillStyle = "#f00";
            d.fillRect(0, 0, e, k);
            d.font = a;
            d.textBaseline = "alphabetic";
            d.fillStyle = "#000";
            d.fillText("|M\u00c9q", 0, b);
            c = d.getImageData(0, 0, e, k).data;
            for (var d = c.length, e = 4 * e, f = 0, g = 0, h = !1; f < b;) { for (var l = 0; l < e;) { if (255 != c[g + l]) { h = !0; break } l += 4 } if (h) break;
                else g += e;++f } l = b - f;
            g = d - e;
            h = !1;
            for (f = k; f > b;) { for (k = 0; k < e;) { if (255 != c[g + k]) { h = !0; break } k += 4 } if (h) break;
                else g -= e;--f } b = new ih(l, f - b);
            Eb.$ST.set(a, b);
            return b
        },
        $vM: function() {
            null != this.$QT && (window.document.fonts["delete"](this.$QT),
                this.$QT = null);
            null != this.$RT && (null != this.$RT.parentNode && this.$RT.parentNode.removeChild(this.$RT), this.$RT = null)
        },
        __class__: Eb
    });
    var ih = function(a, b) { this.$TT = a;
        this.$UT = b };
    h.$CNC = ih;
    ih.__name__ = ["$CNC"];
    ih.prototype = { __class__: ih };
    var Ed = function(a) { this.$xM = !1;
        this.$WT = a };
    h.$CPC = Ed;
    Ed.__name__ = ["$CPC"];
    Ed.__interfaces__ = [ch];
    Ed.__super__ = Ca;
    Ed.prototype = p(Ca.prototype, { $vM: function() { this.$WT = null }, __class__: Ed });
    var ca = function(a) { this.$xM = !1;
        this.$cT = a };
    h.$CTC = ca;
    ca.__name__ = ["$CTC"];
    ca.__interfaces__ = [Rc];
    ca.__properties__ = { get_supported: "get_supported" };
    ca.get_supported = function() {
        if (ca.$kT) {
            ca.$kT = !1;
            var a = Q.$xS("AudioContext").value;
            if (null != a && (ca.$eT = new a, ca.$fT = ca.$gT(), ca.$fT.connect(ca.$eT.destination), z.volume.watch(function(a, b) { ca.$fT.gain.value = a }), z.$KH.$bG.down.connect(function(a) {
                    (new ca(ca.$jT())).play() }).once(), a = function(a) { "suspended" == ca.$eT.state && ca.$eT.resume() }, z.$KH.$bG.down.connect(a), z.$KH.$bG.up.connect(a), z.$KH.$XG.down.connect(a), z.$KH.$XG.up.connect(a), Q.$sS)) var b =
                null,
                b = z.$KH.$bG.up.connect(function(a) { var d = (new ca(ca.$jT())).play();
                    Q.$wS(function() { var a = d.$pT();
                        (null == a || 2 <= a) && b.dispose() }) })
        }
        return null != ca.$eT
    };
    ca.$gT = function() { return null != ca.$eT.createGain ? ca.$eT.createGain() : ca.$eT.createGainNode() };
    ca.$hT = function(a, b) { null != a.start ? a.start(0, b) : a.noteOn(0, b) };
    ca.$iT = function(a) { null != a.stop ? a.stop(0) : a.noteOff(0) };
    ca.$jT = function() { null == ca.$lT && (ca.$lT = ca.$eT.createBuffer(1, 1, 22050)); return ca.$lT };
    ca.__super__ = Ca;
    ca.prototype = p(Ca.prototype, { play: function(a) { null == a && (a = 1); return new Gd(this, a, !1) }, loop: function(a) { null == a && (a = 1); return new Gd(this, a, !0) }, get_duration: function() { return this.$cT.duration }, $vM: function() { this.$cT = null }, __class__: ca, __properties__: { get_duration: "get_duration" } });
    var Gd = function(a, b, c) { this.$vT = 0;
        this.$qT = -1; var d = this;
        this.$SO = a;
        this.$EH = ca.$fT;
        this.$TO = new La(!1);
        this.$uT = c;
        this.$dH = a.get_duration();
        this.volume = new la(b, function(a, b) { null != d.$sT && d.$nT(a) });
        this.$cS(0);
        z.hidden.$tG && this.set_paused(!0) };
    h.$CUC = Gd;
    Gd.__name__ = ["$CUC"];
    Gd.__interfaces__ = [nf, Sc];
    Gd.prototype = {
        set_paused: function(a) { a != 0 <= this.$qT && (a ? (this.$mT(), this.$qT = this.get_position()) : (this.$TO.$tG || this.$cS(this.$qT), this.$qT = -1)); return a },
        get_complete: function() { return this.$TO },
        get_position: function() { return this.$TO.$tG ? this.$dH : 0 <= this.$qT ? this.$qT : (ca.$eT.currentTime - this.$rT + this.$vT) % this.$dH },
        update: function(a) {
            this.volume.update(a);
            null != this.$sT && 3 == this.$sT.playbackState && this.$TO.set__(!0);
            return this.$TO.$tG ||
                0 <= this.$qT ? (this.$QS = !1, this.$gS.dispose(), this.$mT(), !0) : !1
        },
        $mT: function() { if (null != this.$sT) { ca.$iT(this.$sT);
                this.$sT.disconnect();
                this.$sT.onended = null; if (Q.$sS) { var a = ca.$jT(); try { this.$sT.buffer = a } catch (b) { b instanceof A && (b = b.val) } } this.$sT = null } },
        dispose: function() { this.set_paused(!0);
            this.$TO.set__(!0) },
        $nT: function(a) { null == this.$tT && (this.$tT = ca.$gT(), this.$oT(this.$tT));
            this.$tT.gain.value = a },
        $oT: function(a) {
            0 <= this.$qT || (this.$sT.disconnect(), this.$sT.connect(a));
            a.connect(this.$EH);
            this.$EH = a
        },
        $cS: function(a) { var b = this;
            this.$sT = ca.$eT.createBufferSource();
            this.$sT.buffer = this.$SO.$cT;
            this.$sT.loop = this.$uT;
            this.$sT.onended = function() { b.$TO.set__(!0) };
            ca.$hT(this.$sT, a);
            this.$sT.connect(this.$EH);
            this.$vT = 0 <= this.$qT ? this.$qT : 0;
            this.$rT = ca.$eT.currentTime;
            1 == this.volume.$tG && null == this.$tT || this.$nT(this.volume.$tG);
            this.$QS || (jc.$rG.$SG.$cQ(this), this.$QS = !0, this.$gS = z.hidden.get_changed().connect(function(a, d) { a ? (b.$hS = 0 <= b.$qT, b.set_paused(!0)) : b.set_paused(b.$hS) })) },
        $pT: function() {
            return null !=
                this.$sT ? this.$sT.playbackState : 3
        },
        __class__: Gd,
        __properties__: { get_position: "get_position", get_complete: "get_complete", set_paused: "set_paused" }
    };
    var jh = function(a) {
        this.$DV = new W;
        this.$CV = (new hf).$wN(157286400).$yN(function(a, b) { return a.$ZV() });
        this.$yU = this.$zU = this.$$U = this.$_U = this.$AV = this.$BV = 0;
        this.$qU = [];
        this.$nU = !0;
        this.$lU = !1;
        this.$jU = this.$kU = null;
        this.$iU = !1;
        this.$hU = null;
        this.$gU = 0;
        this.$cU = this.$dU = this.$UK = this.$eU = this.$fU = null;
        this.$bU = !1;
        this.$aU = null;
        this.$ZU = new fb;
        this.$YU =
            0;
        this.$WU = this.$XU = null;
        this.$xT = [];
        this.$wT = null;
        var b = this;
        this.$VU = a;
        this.$CV.$xN(function(a, d) { b.$HU(a, d) });
        this.$CV.$wN(Q.$LT(a));
        z.lowMemoryWarning.connect(function() { b.$CV.dispose() });
        a.clearColor(0, 0, 0, 0);
        a.enable(3042);
        a.pixelStorei(37441, 1);
        a.pixelStorei(3317, 1);
        this.$mU = a.createBuffer();
        a.bindBuffer(34962, this.$mU);
        this.$oU = a.createBuffer();
        this.$pU = a.createBuffer();
        this.$XU = this.$oU;
        this.$rU = new Uc(a, 0);
        this.$sU = new Uc(a, 1);
        this.$tU = new Uc(a, 2);
        this.$uU = new Vc(a, 0);
        this.$vU = new Vc(a,
            1);
        this.$wU = new Vc(a, 2);
        this.$xU = new rf(a);
        this.$UU(16)
    };
    h.$CVC = jh;
    jh.__name__ = ["$CVC"];
    jh.prototype = {
        $yT: function(a, b) { this.$VU.viewport(0, 0, a, b);
            this.$_U = a;
            this.$AV = b },
        $zT: function() { this.$BV = this.$BV + 1 | 0;
            this.$DU(null) },
        $$T: function() { this.$TU();
            this.$VU.flush() },
        $AU: function(a) { a == this.$UK && (this.$TU(), this.$UK = null);
            this.$JU(a);
            null != a.$YV ? this.$HU(a, a.$YV) : this.$CV.$BO(a) },
        $BU: function(a) { if (a.$XV) { a.$XV = !1; var b = this.$CV.$BO(a, !1);
                null != b ? a.$YV = b : this.$EU(a);
                a.$TV = null;
                a.$UV = null } },
        $CU: function() {
            var a =
                this.$VU.createTexture();
            this.$FU(a);
            this.$VU.texParameteri(3553, 10242, 33071);
            this.$VU.texParameteri(3553, 10243, 33071);
            this.$VU.texParameteri(3553, 10240, 9729);
            this.$VU.texParameteri(3553, 10241, 9729);
            return a
        },
        $DU: function(a) { this.$TU();
            this.$aU = null;
            this.$VU.clearColor(0, 0, 0, 0);
            null != this.$cU && (this.$cU = null, this.$VU.disable(3089));
            this.$IU(a);
            null == a && this.$VU.colorMask(!0, !0, !0, !1);
            this.$VU.clear(16384);
            null == a && this.$VU.colorMask(!0, !0, !0, !0) },
        $EU: function(a) {
            var b;
            b = a.$XV ? this.$CV.$qN(a) : a.$YV;
            if (null == b) {
                b = this.$CU();
                b = new kh(b);
                if (a.$XV) { var c = !0; if (this.$CV.$EO + a.$ZV() > this.$CV.$FO) { var d = this.$CV.$$N();
                        2 > this.$BV - d.$WV && (c = !1) } this.$CV.$zN(a, b, c) } else a.$YV = b;
                switch (a.$aV[1]) {
                    case 2:
                    case 3:
                        c = 6407; break;
                    default:
                        c = 6408 }
                switch (a.$aV[1]) {
                    case 3:
                        d = 33635; break;
                    case 1:
                        d = 32819; break;
                    default:
                        d = 5121 }
                var e = a.$TV;
                if (null != e && null == H.instance(a.$TV, HTMLVideoElement)) {
                    if (a.$ZR != e.width || a.$aR != e.height) {
                        var k = Q.$DT(a.$ZR, a.$aR);
                        k.getContext("2d", null).drawImage(e, 0, 0);
                        Q.$IT(k, e.width, e.height);
                        e =
                            k
                    }
                    this.$VU.texImage2D(3553, 0, c, c, d, e)
                } else this.$VU.texImage2D(3553, 0, c, a.$ZR, a.$aR, 0, c, d, null)
            }
            a.$WV != this.$BV && (c = H.instance(a.$TV, HTMLVideoElement), null != c && 2 <= c.readyState && (this.$FU(b.$SV), this.$VU.texImage2D(3553, 0, 6407, 6407, 5121, c)));
            a.$WV = this.$BV;
            return b
        },
        $FU: function(a) { this.$kU != a && (this.$kU = a, this.$VU.bindTexture(3553, a)) },
        $GU: function(a) { this.$jU != a && (a.$hV(this.$jU), this.$jU = a) },
        $HU: function(a, b) { a == this.$UK && (this.$TU(), this.$UK = null);
            this.$VU.deleteTexture(b.$SV);
            null != b.$PM && this.$VU.deleteTexture(b.$PM) },
        $IU: function(a) { if (this.$hU != a)
                if (this.$hU = a, null != a) { var b = null;
                    null == a.$VV && (a.$VV = this.$VU.createFramebuffer(), this.$BU(a), b = a.$YV.$SV);
                    this.$VU.bindFramebuffer(36160, a.$VV);
                    this.$VU.viewport(0, 0, a.$ZR, a.$aR);
                    null != b && this.$VU.framebufferTexture2D(36160, 36064, 3553, b, 0) } else this.$VU.bindFramebuffer(36160, null), this.$VU.viewport(0, 0, this.$_U, this.$AV) },
        $JU: function(a) { a == this.$aU && (this.$TU(), this.$aU = null);
            null != a.$VV && (this.$VU.deleteFramebuffer(a.$VV), a.$VV = null) },
        $KU: function(a, b, c, d, e, k) {
            k.$eN !=
                this.$UK && (this.$TU(), this.$UK = k.$eN);
            return this.$SU(a, b, c, d, e, this.$LU(k.$eN, e))
        },
        $LU: function(a, b) { return b ? this.$sU : null != a.$UV && a.$UV.separateAlpha ? this.$tU : this.$rU },
        $MU: function(a, b, c, d, e, k) { k.$eN != this.$UK && (this.$TU(), this.$UK = k.$eN); if (k.$fN != this.$ZU.x || k.$gN != this.$ZU.y || k.$WJ != this.$ZU.width || k.$XJ != this.$ZU.height) this.$TU(), this.$ZU.set(k.$fN, k.$gN, k.$WJ, k.$XJ); return this.$SU(a, b, c, d, e, this.$NU(k.$eN, e)) },
        $NU: function(a, b) {
            return b ? this.$vU : null != a.$UV && a.$UV.separateAlpha ? this.$wU :
                this.$uU
        },
        $OU: function(a, b, c, d, e) { return this.$SU(a, b, c, d, e, this.$xU) },
        $PU: function(a, b, c, d, e, k) { return this.$RU(a, b, c, d, e, this.$xU, k) },
        $QU: function(a, b, c, d, e, k, f) { k.$eN != this.$UK && (this.$TU(), this.$UK = k.$eN); if (k.$fN != this.$ZU.x || k.$gN != this.$ZU.y || k.$WJ != this.$ZU.width || k.$XJ != this.$ZU.height) this.$TU(), this.$ZU.set(k.$fN, k.$gN, k.$WJ, k.$XJ); return this.$RU(a, b, c, d, e, this.$NU(k.$eN, e), f) },
        $TK: function(a, b, c, d, e, k, f) {
            a != this.$aU && (this.$TU(), this.$aU = a);
            b != this.$WU && (this.$TU(), this.$WU = b);
            d != this.$YU &&
                (this.$TU(), this.$YU = d);
            e != this.$bU && (this.$TU(), this.$bU = e);
            k != this.$dU && (this.$TU(), k.$TK(), this.$dU = k);
            f != this.$XU && (this.$TU(), this.$XU = f);
            if (null != c || null != this.$cU) null != c && null != this.$cU && this.$cU.equals(c) || (this.$TU(), this.$cU = null != c ? c.clone(this.$cU) : null, this.$lU = !0)
        },
        $RU: function(a, b, c, d, e, k, f) { this.$TK(a, b, c, d, e, k, this.$pU);
            a = this.$xT.length;
            k = a / k.$fV | 0; for (b = 0; b < f.length;) c = f[b], ++b, this.$qU.push(c + k); return a },
        $SU: function(a, b, c, d, e, k) {
            this.$TK(a, b, c, d, e, k, this.$oU);
            this.$yU >= this.$zU &&
                this.$UU(2 * this.$zU);
            ++this.$yU;
            a = this.$$U;
            this.$$U += 4 * k.$fV;
            return a
        },
        $eO: function(a, b, c, d) { var e = b.$kK(),
                k = this.$DV.get(e);
            null == k && (k = new sf(this.$VU, this, b.$nK, b.$mK), this.$DV.set(e, k)); var e = this.$SU(a, qa.Copy, null, 0, !1, k),
                f = this.$wT;
            this.$UK = null; var g = c / a.$bR,
                h = d / a.$cR,
                l = 2 * g - 1,
                m = 2 * h - 1;
            f[e] = -1;
            f[++e] = -1;
            f[++e] = 0;
            f[++e] = 0;
            f[++e] = l;
            f[++e] = -1;
            f[++e] = g;
            f[++e] = 0;
            f[++e] = l;
            f[++e] = m;
            f[++e] = g;
            f[++e] = h;
            f[++e] = -1;
            f[++e] = m;
            f[++e] = 0;
            f[++e] = h;
            this.$IU(a);
            this.$GU(k);
            k.$AW(b, a, c, d);
            this.$TU() },
        $TU: function() {
            if (this.$XU ==
                this.$oU) { if (1 > this.$yU) return } else if (1 > this.$qU.length) return;
            this.$IU(this.$aU);
            if (this.$WU != this.$eU) { switch (this.$WU[1]) {
                    case 0:
                        this.$VU.blendFunc(1, 771); break;
                    case 1:
                        this.$VU.blendFunc(1, 1); break;
                    case 2:
                        this.$VU.blendFunc(774, 771); break;
                    case 3:
                        this.$VU.blendFunc(1, 769); break;
                    case 4:
                        this.$VU.blendFunc(0, 770); break;
                    case 5:
                        this.$VU.blendFunc(1, 0) } this.$eU = this.$WU }
            if (this.$YU != this.$gU) {
                if (0 < this.$YU)
                    if (0 == this.$gU && this.$VU.enable(2960), this.$bU) {
                        var a = 1 << this.$YU - 1;
                        this.$VU.stencilMask(a);
                        this.$gU <
                            this.$YU && this.$VU.clear(1024);
                        this.$VU.stencilFunc(514, a - 1, 255)
                    } else a = (1 << this.$YU) - 1, this.$VU.stencilFunc(514, a, a);
                else this.$VU.disable(2960);
                this.$gU = this.$YU
            }
            this.$bU != this.$iU && (this.$bU ? (this.$VU.stencilMask(1 << this.$YU - 1), this.$VU.clear(1024), this.$VU.colorMask(!1, !1, !1, !1), this.$VU.stencilFunc(514, (1 << this.$YU - 1) - 1, 255), this.$VU.stencilOp(7680, 7680, 7682)) : (this.$VU.colorMask(!0, !0, !0, !0), a = (1 << this.$YU) - 1, this.$VU.stencilFunc(514, a, a), this.$VU.stencilOp(7680, 7680, 7680)), this.$iU = this.$bU);
            this.$lU && (null != this.$cU ? (this.$VU.enable(3089), this.$VU.scissor(this.$cU.x | 0, this.$cU.y | 0, this.$cU.width | 0, this.$cU.height | 0)) : this.$VU.disable(3089), this.$lU = !1);
            null != this.$UK && (a = this.$EU(this.$UK), null != a.$PM ? (this.$VU.activeTexture(33985), this.$FU(a.$SV), this.$VU.activeTexture(33984), this.$FU(a.$PM)) : this.$FU(a.$SV));
            this.$GU(this.$dU);
            this.$dU != this.$uU && this.$dU != this.$vU && this.$dU != this.$wU || this.$dU.$sV(this.$ZU.x / this.$UK.$bR, this.$ZU.y / this.$UK.$cR, this.$ZU.width / this.$UK.$bR, this.$ZU.height /
                this.$UK.$cR);
            this.$XU != this.$fU && (this.$VU.bindBuffer(34963, this.$XU), this.$fU = this.$XU);
            if (this.$fU == this.$oU) { if (this.$nU) { this.$nU = !1; for (var a = new Uint16Array(6 * this.$zU), b = 0, c = this.$zU; b < c;) { var d = b++,
                            e = 6 * d,
                            d = 4 * d;
                        a[e] = d;
                        a[e + 1] = d + 1;
                        a[e + 2] = d + 2;
                        a[e + 3] = d + 2;
                        a[e + 4] = d + 3;
                        a[e + 5] = d } this.$VU.bufferData(34963, a, 35044) } this.$VU.bufferData(34962, this.$wT.subarray(0, this.$$U), 35048);
                this.$VU.drawElements(4, 6 * this.$yU, 5123, 0);
                this.$$U = this.$yU = 0 } else a = new Uint16Array(this.$qU), this.$VU.bufferData(34963, a,
                35048), this.$qU.length = 0, this.$VU.bufferData(34962, new Float32Array(this.$xT), 35048), this.$xT.length = 0, this.$VU.drawElements(4, a.length, 5123, 0)
        },
        $UU: function(a) { 1024 < a ? this.$TU() : (this.$zU = a, a = new Float32Array(32 * a), null != this.$wT && a.set(this.$wT, 0), this.$wT = a, this.$nU = !0) },
        __class__: jh
    };
    var Fb = function(a, b) { this.$IV = this.$OR = null;
        null == Fb.$JV && (Fb.$JV = new Float32Array(8));
        this.$HV = a;
        this.$jR = b };
    h.$CWC = Fb;
    Fb.__name__ = ["$CWC"];
    Fb.__interfaces__ = [Ad];
    Fb.prototype = {
        save: function() {
            var a = this.$OR,
                b = this.$OR.next;
            null == b && (b = new tf, b.$SR = a, a.next = b);
            a.$KV.clone(b.$KV);
            b.$RM = a.$RM;
            b.$TM = a.$TM;
            b.$VM = a.$VM;
            b.$PM = a.$PM;
            b.$JK = a.$JK;
            b.$KK = null != a.$KK ? a.$KK.clone(b.$KK) : null;
            b.$LV = a.$LV;
            b.$MV = a.$MV;
            this.$OR = b
        },
        translate: function(a, b) { var c = this.$OR.$KV;
            c.m02 += c.m00 * a + c.m01 * b;
            c.m12 += c.m10 * a + c.m11 * b },
        scale: function(a, b) { var c = this.$OR.$KV;
            c.m00 *= a;
            c.m10 *= a;
            c.m01 *= b;
            c.m11 *= b },
        rotate: function(a) {
            var b = this.$OR.$KV;
            a = 3.141592653589793 * a / 180;
            var c = Math.sin(a);
            a = Math.cos(a);
            var d = b.m00,
                e = b.m10,
                k = b.m01,
                f = b.m11;
            b.m00 = d * a +
                k * c;
            b.m10 = e * a + f * c;
            b.m01 = k * a - d * c;
            b.m11 = f * a - e * c
        },
        transform: function(a, b, c, d, e, k) { var f = this.$OR;
            Fb.$XI.set(a, b, c, d, e, k);
            gb.multiply(f.$KV, Fb.$XI, f.$KV) },
        restore: function() { this.$OR = this.$OR.$SR },
        drawTexture: function(a, b, c) { this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height()) },
        drawSubTexture: function(a, b, c, d, e, f, g) {
            var h = this.$OR,
                l = a.$eN;
            b = this.$GV(b, c, f, g);
            c = l.$bR;
            l = l.$cR;
            d = (a.$fN + d) / c;
            e = (a.$gN + e) / l;
            f = d + f / c;
            g = e + g / l;
            c = h.$RM;
            var l = h.$TM,
                m = h.$VM,
                n = h.$PM;
            a = this.$HV.$KU(this.$jR, h.$JK, h.$KK, h.$LV,
                h.$MV, a);
            h = this.$HV.$wT;
            h[a] = b[0];
            h[++a] = b[1];
            h[++a] = d;
            h[++a] = e;
            h[++a] = c;
            h[++a] = l;
            h[++a] = m;
            h[++a] = n;
            h[++a] = b[2];
            h[++a] = b[3];
            h[++a] = f;
            h[++a] = e;
            h[++a] = c;
            h[++a] = l;
            h[++a] = m;
            h[++a] = n;
            h[++a] = b[4];
            h[++a] = b[5];
            h[++a] = f;
            h[++a] = g;
            h[++a] = c;
            h[++a] = l;
            h[++a] = m;
            h[++a] = n;
            h[++a] = b[6];
            h[++a] = b[7];
            h[++a] = d;
            h[++a] = g;
            h[++a] = c;
            h[++a] = l;
            h[++a] = m;
            h[++a] = n
        },
        drawPattern: function(a, b, c, d, e) {
            var f = this.$OR,
                g = a.$eN;
            b = this.$GV(b, c, d, e);
            d /= g.$bR;
            e /= g.$cR;
            g = f.$RM;
            c = f.$TM;
            var h = f.$VM,
                l = f.$PM;
            a = this.$HV.$MU(this.$jR, f.$JK, f.$KK, f.$LV,
                f.$MV, a);
            f = this.$HV.$wT;
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
            var f = this.$OR;
            b = this.$GV(b, c, d, e);
            c = f.$RM * (a & 16711680) / 16711680;
            d = f.$TM * (a & 65280) / 65280;
            a = f.$VM * (a & 255) / 255;
            e = f.$PM;
            var f = this.$HV.$OU(this.$jR,
                    f.$JK, f.$KK, f.$LV, f.$MV),
                g = this.$HV.$wT;
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
            var d = this.$OR,
                e = d.$KV,
                f = e.m00,
                g = e.m01,
                h = e.m02,
                l = e.m10,
                m = e.m11,
                e = e.m12,
                n = d.$RM * (a & 16711680) / 16711680,
                p = d.$TM * (a & 65280) / 65280;
            a = d.$VM * (a & 255) / 255;
            var q = d.$PM;
            c = this.$HV.$PU(this.$jR, d.$JK, d.$KK,
                d.$LV, d.$MV, c);
            for (var d = this.$HV.$xT, r = 0, s = b.length; r < s;) { var t = b[r++],
                    u = b[r++];
                d[c++] = t * f + u * g + h;
                d[c++] = t * l + u * m + e;
                d[c++] = n;
                d[c++] = p;
                d[c++] = a;
                d[c++] = q }
        },
        drawTriangles: function(a, b, c, d) {
            var e = this.$OR,
                f = a.$eN,
                g = e.$KV,
                h = g.m00,
                l = g.m01,
                m = g.m02,
                n = g.m10,
                p = g.m11,
                g = g.m12,
                q = e.$RM,
                r = e.$TM,
                s = e.$VM,
                t = e.$PM;
            a = this.$HV.$QU(this.$jR, e.$JK, e.$KK, e.$LV, e.$MV, a, c);
            c = this.$HV.$xT;
            for (var u = e = 0, v = b.length; u < v;) {
                var x = b[u++],
                    y = b[u++];
                c[a++] = x * h + y * l + m;
                c[a++] = x * n + y * p + g;
                null != d ? (c[a++] = d[e++], c[a++] = d[e++]) : (c[a++] = x / f.$bR,
                    c[a++] = y / f.$cR);
                c[a++] = q;
                c[a++] = r;
                c[a++] = s;
                c[a++] = t
            }
        },
        fillPolygon: function(a, b) { var c = Da.$pQ(b);
            null != c && this.fillTriangles(a, b, c) },
        drawPolygon: function(a, b) { var c = Da.$pQ(b);
            null != c && this.drawTriangles(a, b, c) },
        drawCircle: function(a, b, c, d, e) { null == e && (e = 50); var f = [],
                g = [];
            Da.$kQ(f, g, b, c, d, d, e) && this.drawTriangles(a, f, g) },
        fillCircle: function(a, b, c, d, e) { null == e && (e = 50); var f = [],
                g = [];
            Da.$kQ(f, g, b, c, d, d, e) && this.fillTriangles(a, f, g) },
        strokeCircle: function(a, b, c, d, e, f) {
            null == f && (f = 50);
            var g = [],
                h = [];
            Da.$nQ(g,
                h, b, c, d, d, e, f) && this.fillTriangles(a, g, h)
        },
        drawEllipse: function(a, b, c, d, e, f) { null == f && (f = 50); var g = [],
                h = [];
            Da.$kQ(g, h, b, c, d, e, f) && this.drawTriangles(a, g, h) },
        fillEllipse: function(a, b, c, d, e, f) { null == f && (f = 50); var g = [],
                h = [];
            Da.$kQ(g, h, b, c, d, e, f) && this.fillTriangles(a, g, h) },
        strokeEllipse: function(a, b, c, d, e, f, g) { null == g && (g = 50); var h = [],
                l = [];
            Da.$nQ(h, l, b, c, d, e, f, g) && this.fillTriangles(a, h, l) },
        fillArc: function(a, b, c, d, e, f, g) {
            null == g && (g = 50);
            var h = [],
                l = [];
            Da.$lQ(h, l, b, c, d, 3.141592653589793 * e / 180, 3.141592653589793 *
                f / 180, g) && this.fillTriangles(a, h, l)
        },
        strokeArc: function(a, b, c, d, e, f, g, h) { null == h && (h = 50); var l = [],
                m = [];
            Da.$mQ(l, m, b, c, d, 3.141592653589793 * e / 180, 3.141592653589793 * f / 180, g, h) && this.fillTriangles(a, l, m) },
        strokeLines: function(a, b, c) { var d = [],
                e = [];
            Da.$oQ(d, e, b, c) && this.fillTriangles(a, d, e) },
        drawLines: function(a, b, c) { var d = [],
                e = [];
            Da.$oQ(d, e, b, c) && this.drawTriangles(a, d, e) },
        multiplyAlpha: function(a) { this.$OR.$PM *= a },
        setAlpha: function(a) { this.$OR.$PM = a },
        tint: function(a, b, c) {
            var d = this.$OR;
            d.$RM *= a;
            d.$TM *=
                b;
            d.$VM *= c
        },
        setBlendMode: function(a) { this.$OR.$JK = a },
        beginMask: function() { var a = this.$OR;++a.$LV;
            a.$MV = !0 },
        endMask: function() { this.$OR.$MV = !1 },
        applyScissor: function(a, b, c, d) { var e = this.$OR,
                f = Fb.$JV;
            f[0] = a;
            f[1] = b;
            f[2] = a + c;
            f[3] = b + d;
            e.$KV.transformArray(f, 4, f);
            this.$IV.transformArray(f, 4, f);
            a = f[0];
            b = f[1];
            c = f[2] - a;
            d = f[3] - b;
            0 > c && (a += c, c = -c);
            0 > d && (b += d, d = -d);
            e.$NV(a, b, c, d) },
        willRender: function() { this.$HV.$zT() },
        didRender: function() { this.$HV.$$T() },
        onResize: function(a, b) {
            this.$OR = new tf;
            var c;
            c = null != this.$jR ?
                -1 : 1;
            this.$OR.$KV.set(2 / a, 0, 0, -2 * c / b, -1, c);
            this.$IV = new gb;
            this.$IV.set(2 / a, 0, 0, 2 / b, -1, -1);
            this.$IV.invert()
        },
        $GV: function(a, b, c, d) { c = a + c;
            d = b + d; var e = Fb.$JV;
            e[0] = a;
            e[1] = b;
            e[2] = c;
            e[3] = b;
            e[4] = c;
            e[5] = d;
            e[6] = a;
            e[7] = d;
            this.$OR.$KV.transformArray(e, 8, e); return e },
        __class__: Fb
    };
    var tf = function() { this.$SR = this.next = null;
        this.$MV = !1;
        this.$LV = 0;
        this.$RM = this.$TM = this.$VM = this.$PM = 1;
        this.$KK = null;
        this.$JK = qa.Normal;
        this.$KV = new gb };
    h.$CXC = tf;
    tf.__name__ = ["$CXC"];
    tf.prototype = {
        $NV: function(a, b, c, d) {
            if (null !=
                this.$KK) { var e = sa.max(this.$KK.x, a),
                    f = sa.max(this.$KK.y, b);
                c = sa.min(this.$KK.x + this.$KK.width, a + c);
                d = sa.min(this.$KK.y + this.$KK.height, b + d);
                a = e;
                b = f;
                c = sa.max(0, c - e);
                d = sa.max(0, d - f) } else this.$KK = new fb;
            this.$KK.set(Math.round(a), Math.round(b), Math.round(c), Math.round(d))
        },
        __class__: tf
    };
    var de = function(a, b) {
        this.$QV = !1;
        var c = this;
        this.$VR = new La(!0);
        this.$OV = b;
        this.$sK();
        if (0 == b.getError()) {
            this.$QV = !0;
            var d = b.canvas;
            d.addEventListener("webglcontextlost", function(a) {
                a.preventDefault();
                c.graphics = null;
                c.$VR.set__(!1)
            }, !1);
            d.addEventListener("webglcontextrestored", function(a) { c.$sK();
                c.$VR.set__(!0) }, !1);
            a.resize.connect(G(this, this.$RV))
        } else null
    };
    h.$CYC = de;
    de.__name__ = ["$CYC"];
    de.__interfaces__ = [Bd];
    de.prototype = {
        get_filterSupported: function() { return !0 },
        createTextureFromImage: function(a, b, c) {
            null == c && (c = 1);
            var d = a.width,
                e = a.height,
                f = new Wc(this, d, e, c);
            null != b && b != Fa.COMPRESSED && (f.$aV = b);
            f.$TV = a;
            if (this.$OV.isContextLost()) return null;
            null == H.instance(a, HTMLVideoElement) && this.$PV.$BU(f);
            return f.createTexture(d /
                c, e / c)
        },
        createTexture: function(a, b, c, d) { null == d && (d = 1); var e = new Wc(this, a, b, d);
            null != c && c != Fa.COMPRESSED && (e.$aV = c);
            e.clear(); return e.createTexture(a / d, b / d) },
        createSystemFont: function(a) { return new Eb(a) },
        getTextureAssetFormats: function() { return [] },
        willRender: function() { this.graphics.willRender() },
        didRender: function() { this.graphics.didRender() },
        $RV: function() { if (null != this.graphics) { var a = this.$OV.canvas,
                    b = a.width,
                    a = a.height;
                this.$PV.$yT(b, a);
                this.graphics.onResize(b, a) } },
        $sK: function() {
            this.$PV =
                new jh(this.$OV);
            this.graphics = new Fb(this.$PV, null);
            this.$RV()
        },
        __class__: de,
        __properties__: { get_filterSupported: "get_filterSupported" }
    };
    var kh = function(a) { this.$PM = null;
        this.$SV = a };
    h.$CZC = kh;
    kh.__name__ = ["$CZC"];
    kh.prototype = { __class__: kh };
    var uf = function(a, b, c) { Yb.call(this, a, b, c) };
    h.$CaC = uf;
    uf.__name__ = ["$CaC"];
    uf.__super__ = Yb;
    uf.prototype = p(Yb.prototype, { __class__: uf });
    var Wc = function(a, b, c, d) {
        this.$iR = null;
        this.$aV = Fa.RGBA;
        this.$YV = null;
        this.$XV = !0;
        this.$WV = -1;
        this.$TV = this.$UV = this.$VV = null;
        this.$xM = !1;
        this.$ZG = a;
        b = 2 > b ? 2 : b;
        c = 2 > c ? 2 : c;
        this.$ZR = b;
        this.$aR = c;
        this.$lH = d;
        this.$bR = b / d;
        this.$cR = c / d
    };
    h.$CbC = Wc;
    Wc.__name__ = ["$CbC"];
    Wc.__interfaces__ = [mf];
    Wc.__super__ = Ca;
    Wc.prototype = p(Ca.prototype, {
        createTexture: function(a, b) { return new uf(this, Math.ceil(a), Math.ceil(b)) },
        getGraphics: function() { null == this.$iR && (this.$iR = new Fb(this.$ZG.$PV, this), this.$iR.onResize(this.$ZR, this.$aR)); return this.$iR },
        clear: function() { this.$ZG.$PV.$DU(this) },
        renderFilter: function(a, b, c) {
            this.$ZG.$PV.$eO(this, a,
                b, c)
        },
        $ZV: function() { var a; switch (this.$aV[1]) {
                case 3:
                    a = 2; break;
                case 1:
                    a = 2; break;
                case 2:
                    a = 3; break;
                default:
                    a = 4 } return a * this.$ZR * this.$aR },
        $vM: function() { this.$ZG.$PV.$AU(this);
            this.$iR = this.$YV = this.$VV = this.$UV = this.$TV = null },
        __class__: Wc
    });
    var Wa = function(a) { this.$qV = !0;
        this.$pV = -1;
        this.$oV = [];
        this.$lV = this.$mV = this.$nV = null;
        this.$fV = 0;
        this.$VU = a };
    h.$CfC = Wa;
    Wa.__name__ = ["$CfC"];
    Wa.$rV = function(a, b, c) { b = a.createShader(b);
        a.shaderSource(b, c);
        a.compileShader(b); return b };
    Wa.prototype = {
        $gV: function() { null },
        $TK: function() { null == this.$lV && (this.$lV = this.$VU.createProgram(), this.$gV(), this.$qV && (this.$VU.detachShader(this.$lV, this.$mV), this.$VU.deleteShader(this.$mV), this.$mV = null, this.$VU.detachShader(this.$lV, this.$nV), this.$VU.deleteShader(this.$nV), this.$nV = null)) },
        $hV: function(a) {
            this.$VU.useProgram(this.$lV);
            if (0 > this.$pV) {
                for (var b = this.$pV = 0, c = this.$oV; b < c.length;) { var d = c[b];++b; var e = d.$HW();
                    d.$GW = this.$pV;
                    this.$pV += e } this.$oV = this.$oV.filter(function(a) { return 0 <= a.$FW });
                this.$oV.sort(function(a,
                    b) { return a.$FW - b.$FW })
            }
            if (null != a) { b = a.$oV.length; for (c = this.$oV.length; b < c;) d = b++, this.$VU.enableVertexAttribArray(d);
                b = this.$oV.length; for (c = a.$oV.length; b < c;) d = b++, this.$VU.disableVertexAttribArray(d) } else
                for (b = 0, c = this.$oV.length; b < c;) d = b++, this.$VU.enableVertexAttribArray(d);
            b = 0;
            for (c = this.$oV.length; b < c;) { var d = b++,
                    e = this.$oV[d],
                    f;
                f = null != a ? a.$oV[d] : null;
                null != f && f.$uN == e.$uN && f.$rK == e.$rK && a.$pV == this.$pV && f.$GW == e.$GW || this.$VU.vertexAttribPointer(d, e.$uN, e.$rK, !1, this.$pV, e.$GW) }
        },
        $iV: function(a,
            b) { b = "precision mediump float;\n" + b;
            this.$mV = Wa.$rV(this.$VU, 35633, a);
            this.$nV = Wa.$rV(this.$VU, 35632, b);
            this.$VU.attachShader(this.$lV, this.$mV);
            this.$VU.attachShader(this.$lV, this.$nV);
            this.$VU.linkProgram(this.$lV);
            this.$VU.useProgram(this.$lV) },
        $jV: function(a, b, c) { a = this.$VU.getAttribLocation(this.$lV, a);
            this.$oV.push(new lh(a, b, c));
            this.$fV += b },
        $kV: function(a) { return this.$VU.getUniformLocation(this.$lV, a) },
        __class__: Wa
    };
    var Vc = function(a, b) {
        this.$tV = this.$uV = this.$vV = this.$wV = -1;
        Wa.call(this,
            a);
        this.$$V = b
    };
    h.$CgC = Vc;
    Vc.__name__ = ["$CgC"];
    Vc.__super__ = Wa;
    Vc.prototype = p(Wa.prototype, {
        $gV: function() {
            var a;
            switch (this.$$V) {
                case 0:
                case 1:
                    a = "texture2D(u_texture, pos);"; break;
                case 2:
                    a = "vec4(texture2D(u_textureRGB, pos).rgb, texture2D(u_texture, pos).r);" } a = ["varying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nuniform lowp sampler2D u_texture;\nuniform mediump vec4 u_region;", 2 == this.$$V ? "uniform lowp sampler2D u_textureRGB;" : "", "void main (void) {\nmediump vec2 pos = u_region.xy + mod(v_uv, u_region.zw);",
                "lowp vec4 color = " + a, 1 == this.$$V ? "if (color.a == 0.0) discard;" : "", "gl_FragColor = color * v_color;\n}"
            ].join("\n");
            this.$iV("attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp vec4 a_color;\nvarying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_uv = a_uv;\nv_color = vec4(a_color.rgb * a_color.a, a_color.a);\ngl_Position = vec4(a_pos, 0, 1);\n}", a);
            this.$jV("a_pos", 2, 5126);
            this.$jV("a_uv", 2, 5126);
            this.$jV("a_color", 4, 5126);
            this.$xV = this.$kV("u_texture");
            this.$zV = this.$kV("u_region");
            this.$VU.uniform1i(this.$xV, 0);
            2 == this.$$V && (this.$yV = this.$kV("u_textureRGB"), this.$VU.uniform1i(this.$yV, 1))
        },
        $sV: function(a, b, c, d) { if (a != this.$tV || b != this.$uV || c != this.$vV || d != this.$wV) this.$tV = a, this.$uV = b, this.$vV = c, this.$wV = d, this.$VU.uniform4f(this.$zV, a, b, c, d) },
        __class__: Vc
    });
    var Uc = function(a, b) { Wa.call(this, a);
        this.$$V = b };
    h.$ChC = Uc;
    Uc.__name__ = ["$ChC"];
    Uc.__super__ = Wa;
    Uc.prototype = p(Wa.prototype, {
        $gV: function() {
            var a;
            switch (this.$$V) {
                case 0:
                case 1:
                    a = "texture2D(u_texture, v_uv);";
                    break;
                case 2:
                    a = "vec4(texture2D(u_textureRGB, v_uv).rgb, texture2D(u_texture, v_uv).r);"
            }
            a = ["varying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nuniform lowp sampler2D u_texture;", 2 == this.$$V ? "uniform lowp sampler2D u_textureRGB;" : "", "void main (void) {", "lowp vec4 color = " + a, 1 == this.$$V ? "if (color.a == 0.0) discard;" : "", "gl_FragColor = color * v_color;\n}"].join("\n");
            this.$iV("attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp vec4 a_color;\nvarying mediump vec2 v_uv;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_uv = a_uv;\nv_color = vec4(a_color.rgb * a_color.a, a_color.a);\ngl_Position = vec4(a_pos, 0, 1);\n}",
                a);
            this.$jV("a_pos", 2, 5126);
            this.$jV("a_uv", 2, 5126);
            this.$jV("a_color", 4, 5126);
            this.$xV = this.$kV("u_texture");
            this.$_V(0);
            2 == this.$$V && (this.$yV = this.$kV("u_textureRGB"), this.$VU.uniform1i(this.$yV, 1))
        },
        $_V: function(a) { this.$VU.uniform1i(this.$xV, a) },
        __class__: Uc
    });
    var rf = function(a) { Wa.call(this, a) };
    h.$CiC = rf;
    rf.__name__ = ["$CiC"];
    rf.__super__ = Wa;
    rf.prototype = p(Wa.prototype, {
        $gV: function() {
            this.$iV("attribute highp vec2 a_pos;\nattribute lowp vec3 a_rgb;\nattribute lowp float a_alpha;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_color = vec4(a_rgb*a_alpha, a_alpha);\ngl_Position = vec4(a_pos, 0, 1);\n}",
                "varying lowp vec4 v_color;\nvoid main (void) {\ngl_FragColor = v_color;\n}");
            this.$jV("a_pos", 2, 5126);
            this.$jV("a_rgb", 3, 5126);
            this.$jV("a_alpha", 1, 5126)
        },
        __class__: rf
    });
    var sf = function(a, b, c, d) { this.$DW = new W;
        this.$BW = this.$CW = null;
        Wa.call(this, a);
        this.$HV = b;
        null == c && (c = "void main () {\nvTextureCoord = aTextureCoord;\nvFilterCoord = aTextureCoord * uTextureSize/uFilterSize;\ngl_Position = vec4(aVertexPosition, 0, 1);\n}");
        this.$nK = c;
        this.$mK = d;
        this.$qV = !1 };
    h.$CjC = sf;
    sf.__name__ = ["$CjC"];
    sf.__super__ =
        Wa;
    sf.prototype = p(Wa.prototype, {
        $gV: function() {
            var a = ["precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\nuniform sampler2D uTexture;\nuniform vec2 uTextureSize;\nuniform vec2 uFilterSize;\nuniform vec2 uFilterPosition;\nattribute highp vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n#line 0", this.$nK].join("\n"),
                b = ["varying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\nuniform sampler2D uTexture;\nuniform vec2 uTextureSize;\nuniform vec2 uFilterSize;\nuniform vec2 uFilterPosition;\n#line 0",
                    this.$mK
                ].join("\n");
            this.$iV(a, b);
            this.$jV("aVertexPosition", 2, 5126);
            this.$jV("aTextureCoord", 2, 5126);
            this.$CW = this.$VU.getUniformLocation(this.$lV, "uTextureSize");
            this.$BW = this.$VU.getUniformLocation(this.$lV, "uFilterSize");
            this.$nK = this.$mK = null
        },
        $AW: function(a, b, c, d) {
            null != this.$CW && this.$VU.uniform2f(this.$CW, b.$ZR, b.$aR);
            null != this.$BW && this.$VU.uniform2f(this.$BW, c, d);
            b = 0;
            for (a = a.$lK.iterator(); a.hasNext();)
                if (c = a.next(), d = this.$DW.get(c.$pK), null == d && (d = new mh(this.$VU.getUniformLocation(this.$lV,
                        c.$pK)), this.$DW.set(c.$pK, d)), d = d.$EW, null != d) switch (c.$rK) {
                    case 0:
                        this.$VU.uniform1f(d, c.$qK);
                        break;
                    case 1:
                        this.$VU.uniform2fv(d, c.$qK);
                        break;
                    case 2:
                        this.$VU.uniform3fv(d, c.$qK);
                        break;
                    case 3:
                        this.$VU.uniform4fv(d, c.$qK);
                        break;
                    case 4:
                        this.$VU.uniform1i(d, c.$qK);
                        break;
                    case 5:
                        this.$VU.uniform2iv(d, c.$qK);
                        break;
                    case 6:
                        this.$VU.uniform3iv(d, c.$qK);
                        break;
                    case 7:
                        this.$VU.uniform4iv(d, c.$qK);
                        break;
                    case 8:
                        this.$VU.uniformMatrix2fv(d, !1, c.$qK);
                        break;
                    case 9:
                        this.$VU.uniformMatrix3fv(d, !1, c.$qK);
                        break;
                    case 10:
                        this.$VU.uniformMatrix4fv(d,
                            !1, c.$qK);
                        break;
                    case 11:
                        this.$VU.uniform1i(d, b), 0 != b && this.$VU.activeTexture(33984 + b), b++, c = this.$HV.$EU(c.$qK.$eN), this.$HV.$FU(c.$SV)
                }
            1 < b && this.$VU.activeTexture(33984)
        },
        __class__: sf
    });
    var mh = function(a) { this.$EW = a };
    h.$CkC = mh;
    mh.__name__ = ["$CkC"];
    mh.prototype = { __class__: mh };
    var lh = function(a, b, c) { this.$GW = 0;
        this.$FW = a;
        this.$uN = b;
        this.$rK = c };
    h.$ClC = lh;
    lh.__name__ = ["$ClC"];
    lh.prototype = { $HW: function() { var a; switch (this.$rK) {
                case 5126:
                    a = 4; break;
                default:
                    a = 1 } return this.$uN * a }, __class__: lh };
    var cd = function() {
        this.$OW =
            null;
        U.call(this);
        this.scenes = [];
        this.occludedScenes = [];
        this.$AL = new aa
    };
    h["kit.scene.Director"] = cd;
    cd.__name__ = ["kit", "scene", "Director"];
    cd.__super__ = U;
    cd.prototype = p(U.prototype, {
        get_entitySlot: function() { return 8 },
        pushScene: function(a, b) { var c;
            c = null != a.owner ? a.owner : (new aa).add(a);
            this.$IW(c, b) },
        $IW: function(a, b) { var c = this;
            this.$MW(); var d = this.get_topScene();
            null != d ? this.$NW(d, a, b, function() { c.$vQ(d) }) : (this.$EJ(a), this.$LW()) },
        popScene: function(a) {
            var b = this;
            this.$MW();
            var c = this.get_topScene();
            if (null != c) { this.scenes.pop(); var d = this.get_topScene();
                null != d ? this.$NW(c, d, a, function() { b.$KW(c) }) : (this.$KW(c), this.$LW()) }
        },
        unwindToScene: function(a, b) { var c;
            c = null != a.owner ? a.owner : (new aa).add(a);
            this.$JW(c, b) },
        $JW: function(a, b) { var c = this;
            this.$MW(); var d = this.get_topScene(); if (null != d) { if (d != a) { for (this.scenes.pop(); 0 < this.scenes.length && this.scenes[this.scenes.length - 1] != a;) this.scenes.pop().dispose();
                    this.$NW(d, a, b, function() { c.$KW(d) }) } } else this.$IW(a, b) },
        onAdded: function() { this.owner.addChild(this.$AL) },
        onRemoved: function() { this.$MW(); for (var a = 0, b = this.scenes; a < b.length;) { var c = b[a];++a;
                c.dispose() } this.scenes = [];
            this.occludedScenes = [];
            this.$AL.dispose() },
        onUpdate: function(a) { null != this.$OW && this.$OW.$TG(a) && this.$MW() },
        get_topScene: function() { var a = this.scenes.length; return 0 < a ? this.scenes[a - 1] : null },
        $EJ: function(a) { var b = this.get_topScene();
            null != b && this.$AL.removeChild(b);
            I.remove(this.scenes, a);
            this.scenes.push(a);
            this.$AL.addChild(a) },
        $vQ: function(a) { a = a.$PG[9];
            null != a && a.hidden.emit() },
        $KW: function(a) {
            this.$vQ(a);
            a.dispose()
        },
        $uQ: function(a) { a = a.$PG[9];
            null != a && a.shown.emit() },
        $LW: function() { for (var a = this.scenes.length; 0 < a;) { var b = this.scenes[--a].$PG[9]; if (null == b || b.opaque) break } this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.$uQ(a) },
        $MW: function() { null != this.$OW && (this.$OW.$PW(), this.$OW = null, this.$LW()) },
        $NW: function(a, b, c, d) {
            this.$MW();
            this.$EJ(b);
            null != c ? (this.occludedScenes.push(a), this.$OW = new nh(a, b, c, d), this.$OW.$sK(this)) :
                (d(), this.$LW())
        },
        __class__: cd,
        __properties__: p(U.prototype.__properties__, { get_topScene: "get_topScene" })
    });
    var nh = function(a, b, c, d) { this.$bH = a;
        this.$cH = b;
        this.$QW = c;
        this.$RW = d };
    h.$CmC = nh;
    nh.__name__ = ["$CmC"];
    nh.prototype = { $sK: function(a) { this.$QW.init(a, this.$bH, this.$cH) }, $TG: function(a) { return this.$QW.update(a) }, $PW: function() { this.$QW.complete();
            this.$RW() }, __class__: nh };
    var Th = function() {};
    h["kit.scene.Transition"] = Th;
    Th.__name__ = ["kit", "scene", "Transition"];
    Th.prototype = {
        init: function(a, b,
            c) { this.$SW = a;
            this.$bH = b;
            this.$cH = c },
        update: function(a) { return !0 },
        complete: function() {},
        __class__: Th
    };
    var Oc = function() {};
    h["kit.util.BitSets"] = Oc;
    Oc.__name__ = ["kit", "util", "BitSets"];
    Oc.set = function(a, b, c) { return c ? a | b : a & ~b };
    var Qa = function() { this.$lW = this.$mW = null;
        this.$kW = 0;
        this.$jW = null };
    h["kit.util.Promise"] = Qa;
    Qa.__name__ = ["kit", "util", "Promise"];
    Qa.all = function(a) {
        if (1 > a.length) return (new Qa).$gW([]);
        for (var b = a.length, c = new Qa, d = function(a) { c.failure(a) }, e = Array(b), f = function() {
                for (var a =
                        0, d = 0; d < e.length;) { var f = e[d];++d;
                    a += f } c.emitProgress(a / b)
            }, g = Array(b), h = 0, l = 0; l < b;) { var m = [l++];
            e[m[0]] = 0;
            a[m[0]].then(function(a) { return function(d) {++h;
                    g[a[0]] = d;
                    1 > e[a[0]] && (e[a[0]] = 1, f());
                    h == b && c.success(g) } }(m)).progress(function(a) { return function(b) { e[a[0]] = b;
                    f() } }(m)).catchError(d) }
        return c
    };
    Qa.prototype = {
        then: function(a) { var b = this; if (2 == this.$kW) return this; var c = new Qa;
            this.$$G(c, function() { 1 == b.$kW ? c.$hW(a(b.$jW)) : c.failure(b.$jW) }); return c },
        catchError: function(a) {
            var b = this;
            if (1 == this.$kW) return this;
            var c = new Qa;
            this.$$G(c, function() { 2 == b.$kW ? c.$hW(a(b.$jW)) : c.$gW(b.$jW) });
            return c
        },
        failure: function(a) { return this.$iW(2, a) },
        success: function(a) { return this.$iW(1, a) },
        $gW: function(a) { return this.success(a) },
        progress: function(a) { 0 == this.$kW && (null == this.$mW && (this.$mW = new za), this.$mW.connect(a)); return this },
        emitProgress: function(a) { 0 == this.$kW && null != this.$mW && this.$mW.emit(a) },
        $$G: function(a, b) { 0 == this.$kW ? null == this.$lW ? this.$lW = [b] : this.$lW.push(b) : z.$KH.$SG.$eQ(b);
            this.progress(function(b) { a.emitProgress(b) }) },
        $hW: function(a) { var b = this;
            V.__instanceof(a, Qa) ? a.then(function(a) { b.success(a) }).catchError(function(a) { b.failure(a) }) : this.$gW(a) },
        $iW: function(a, b) { if (0 == this.$kW && (this.$jW = b, this.$kW = a, null != this.$lW)) { for (var c = 0, d = this.$lW; c < d.length;) { var e = d[c];++c;
                    e() } this.$lW = null } return this },
        __class__: Qa
    };
    var Dg = function(a) { this.next = null;
        this.$qW = a };
    h.$CpC = Dg;
    Dg.__name__ = ["$CpC"];
    Dg.prototype = { __class__: Dg };
    var qb = function() {};
    h["kit.util.Strings"] = qb;
    qb.__name__ = ["kit", "util", "Strings"];
    qb.getFileExtension =
        function(a) { var b = a.lastIndexOf("."); return 0 < b ? I.substr(a, b + 1, null) : null };
    qb.removeFileExtension = function(a) { var b = a.lastIndexOf("."); return 0 < b ? I.substr(a, 0, b) : a };
    qb.getUrlExtension = function(a) { var b = a.lastIndexOf("?");
        0 <= b && (a = I.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = I.substr(a, b + 1, null)); return qb.getFileExtension(a) };
    qb.joinPath = function(a, b) { 0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/"); return a + b };
    qb.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            a = 0 < a.length ? a + " [" : a + "[";
            for (var d =
                    0; d < c;) { 0 < d && (a += ", "); var e = b[d],
                    f = b[d + 1]; if (H.is(f, Error)) { var g = f.stack;
                    null != g && (f = g) } a += e + "=" + H.string(f);
                d += 2 } a += "]"
        }
        return a
    };
    var oh = function() {};
    h.$CqC = oh;
    oh.__name__ = ["$CqC"];
    oh.prototype = { __class__: oh };
    var fh = function() {};
    h["kit.util.Triangulator"] = fh;
    fh.__name__ = ["kit", "util", "Triangulator"];
    fh.prototype = {
        triangulate: function(a) {
            var b = a.length;
            if (6 > b) return [];
            for (var c = this.$IX(-1, 0, 0, null), d = c, e = 0, f = 0, g = b - 2; f < b;) e += (a[g] - a[f]) * (a[f + 1] + a[g + 1]), g = f, f += 2;
            if (0 < e)
                for (e = f = 0; f < b;) var g = a[f],
                    h = a[f + 1],
                    c = this.$IX(e++, g, h, c),
                    f = f + 2;
            else
                for (f = b - 2, e = f / 2 | 0; 0 <= f;) g = a[f], h = a[f + 1], c = this.$IX(e--, g, h, c), f -= 2;
            c.next = d.next;
            c.next.$SR = c;
            return this.$BX(c, 160 < b)
        },
        $BX: function(a, b) {
            this.$xW = [];
            a = this.$GX(a);
            if (b && null != a) { var c, d;
                this.$$W = c = a.$BM;
                this.$_W = d = a.$DM; for (var e = a.next; e != a;) { var f = e.$BM,
                        g = e.$DM;
                    f < this.$$W && (this.$$W = f);
                    g < this.$_W && (this.$_W = g);
                    f > c && (c = f);
                    g > d && (d = g);
                    e = e.next } this.$uN = Math.max(c - this.$$W, d - this.$_W);
                this.$AX = !0 } else this.$AX = !1;
            this.$JX(a);
            c = this.$xW;
            this.$xW = null;
            d = this.$zW;
            if (null != this.$yW) { for (; d != this.$yW;) d = d.$tW;
                d = d.$tW }
            for (; null != d;) d.next = this.$yW, this.$yW = d, d = d.$tW;
            return c
        },
        $CX: function(a, b) { return a.$BM == b.$BM && a.$DM == b.$DM },
        $DX: function(a, b, c) { return (b.$DM - a.$DM) * (c.$BM - b.$BM) - (b.$BM - a.$BM) * (c.$DM - b.$DM) },
        $EX: function(a, b, c, d) {
            return 0 < (b.$DM - a.$DM) * (c.$BM - b.$BM) - (b.$BM - a.$BM) * (c.$DM - b.$DM) != 0 < (b.$DM - a.$DM) * (d.$BM - b.$BM) - (b.$BM - a.$BM) * (d.$DM - b.$DM) && 0 < (d.$DM - c.$DM) * (a.$BM - d.$BM) - (d.$BM - c.$BM) * (a.$DM - d.$DM) != 0 < (d.$DM - c.$DM) * (b.$BM - d.$BM) - (d.$BM - c.$BM) * (b.$DM -
                d.$DM)
        },
        $GX: function(a, b) { if (null == a) return a;
            null == b && (b = a); var c = a,
                d;
            do
                if (d = !1, c.$wW || !this.$CX(c, c.next) && 0 != this.$DX(c.$SR, c, c.next)) c = c.next;
                else { c.next.$SR = c.$SR;
                    c.$SR.next = c.next;
                    null != c.$sW && (c.$sW.$rW = c.$rW);
                    null != c.$rW && (c.$rW.$sW = c.$sW);
                    c = b = c.$SR; if (c == c.next) return null;
                    d = !0 } while (d || c != b);
            return b },
        $HX: function(a) { a.next.$SR = a.$SR;
            a.$SR.next = a.next;
            null != a.$sW && (a.$sW.$rW = a.$rW);
            null != a.$rW && (a.$rW.$sW = a.$sW) },
        $IX: function(a, b, c, d) {
            var e = this.$yW;
            null == e ? (e = new oh, e.$tW = this.$zW, this.$zW =
                e) : this.$yW = e.next;
            e.$uW = a;
            e.$vW = -1;
            e.$BM = b;
            e.$DM = c;
            e.next = null;
            e.$SR = d;
            e.$wW = !1;
            e.$sW = null;
            e.$rW = null;
            null != d && (d.next = e);
            return e
        },
        $JX: function(a, b) {
            null == b && (b = 0);
            if (null != a) {
                0 == b && this.$AX && this.$UX(a);
                for (var c = a, d, e; a.$SR != a.next;)
                    if (d = a.$SR, e = a.next, this.$AX ? this.$LX(a) : this.$KX(a)) this.$xW.push(d.$uW), this.$xW.push(a.$uW), this.$xW.push(e.$uW), a.next.$SR = a.$SR, a.$SR.next = a.next, null != a.$sW && (a.$sW.$rW = a.$rW), null != a.$rW && (a.$rW.$sW = a.$sW), c = a = e.next;
                    else if (a = e, a == c) {
                    switch (b) {
                        case 0:
                            this.$JX(this.$GX(a),
                                1);
                            break;
                        case 1:
                            a = this.$MX(a);
                            this.$JX(a, 2);
                            break;
                        case 2:
                            this.$NX(a)
                    }
                    break
                }
            }
        },
        $KX: function(a) { var b = a.$SR,
                c = a.next; if (0 <= (a.$DM - b.$DM) * (c.$BM - a.$BM) - (a.$BM - b.$BM) * (c.$DM - a.$DM)) return !1; for (var d = a.next.next; d != a.$SR;) { if (this.$PX(b.$BM, b.$DM, a.$BM, a.$DM, c.$BM, c.$DM, d.$BM, d.$DM) && 0 <= this.$DX(d.$SR, d, d.next)) return !1;
                d = d.next } return !0 },
        $LX: function(a) {
            var b = a.$SR,
                c = a.next;
            if (0 <= (a.$DM - b.$DM) * (c.$BM - a.$BM) - (a.$BM - b.$BM) * (c.$DM - a.$DM)) return !1;
            var d;
            d = b.$BM < a.$BM ? b.$BM < c.$BM ? b.$BM : c.$BM : a.$BM < c.$BM ?
                a.$BM : c.$BM;
            var e;
            e = b.$DM < a.$DM ? b.$DM < c.$DM ? b.$DM : c.$DM : a.$DM < c.$DM ? a.$DM : c.$DM;
            var f;
            f = b.$BM > a.$BM ? b.$BM > c.$BM ? b.$BM : c.$BM : a.$BM > c.$BM ? a.$BM : c.$BM;
            var g;
            g = b.$DM > a.$DM ? b.$DM > c.$DM ? b.$DM : c.$DM : a.$DM > c.$DM ? a.$DM : c.$DM;
            d = this.$TX(d, e);
            f = this.$TX(f, g);
            for (g = a.$rW; null != g && g.$vW <= f;) { if (g != a.$SR && g != a.next && this.$PX(b.$BM, b.$DM, a.$BM, a.$DM, c.$BM, c.$DM, g.$BM, g.$DM) && 0 <= this.$DX(g.$SR, g, g.next)) return !1;
                g = g.$rW }
            for (g = a.$sW; null != g && g.$vW >= d;) {
                if (g != a.$SR && g != a.next && this.$PX(b.$BM, b.$DM, a.$BM, a.$DM, c.$BM,
                        c.$DM, g.$BM, g.$DM) && 0 <= this.$DX(g.$SR, g, g.next)) return !1;
                g = g.$sW
            }
            return !0
        },
        $MX: function(a) {
            var b = a;
            do {
                var c = b.$SR,
                    d = b.next.next;
                this.$EX(c, b, b.next, d) && (0 > this.$DX(c.$SR, c, c.next) ? 0 <= this.$DX(c, d, c.next) && 0 <= this.$DX(c, c.$SR, d) : 0 > this.$DX(c, d, c.$SR) || 0 > this.$DX(c, c.next, d)) && (0 > this.$DX(d.$SR, d, d.next) ? 0 <= this.$DX(d, c, d.next) && 0 <= this.$DX(d, d.$SR, c) : 0 > this.$DX(d, c, d.$SR) || 0 > this.$DX(d, d.next, c)) && (this.$xW.push(c.$uW), this.$xW.push(b.$uW), this.$xW.push(d.$uW), b.next.$SR = b.$SR, b.$SR.next = b.next, null !=
                    b.$sW && (b.$sW.$rW = b.$rW), null != b.$rW && (b.$rW.$sW = b.$sW), this.$HX(b.next), b = a = d);
                b = b.next
            } while (b != a);
            return b
        },
        $NX: function(a) { var b = a;
            do { for (var c = b.next.next; c != b.$SR;) { if (b.$uW != c.$uW && this.$QX(b, c)) { a = this.$OX(b, c);
                        b = this.$GX(b, b.next);
                        a = this.$GX(a, a.next);
                        this.$JX(b);
                        this.$JX(a); return } c = c.next } b = b.next } while (b != a) },
        $OX: function(a, b) { var c = this.$IX(a.$uW, a.$BM, a.$DM, null),
                d = this.$IX(b.$uW, b.$BM, b.$DM, null),
                e = a.next,
                f = b.$SR;
            a.next = b;
            b.$SR = a;
            c.next = e;
            e.$SR = c;
            d.next = c;
            c.$SR = d;
            f.next = d;
            d.$SR = f; return d },
        $PX: function(a, b, c, d, e, f, g, h) { return 0 <= (e - g) * (b - h) - (a - g) * (f - h) && 0 <= (a - g) * (d - h) - (c - g) * (b - h) && 0 <= (c - g) * (f - h) - (e - g) * (d - h) },
        $QX: function(a, b) { return a.$BM == b.$BM && a.$DM == b.$DM || a.next.$uW != b.$uW && a.$SR.$uW != b.$uW && !this.$SX(a, b) && (0 > this.$DX(a.$SR, a, a.next) ? 0 <= this.$DX(a, b, a.next) && 0 <= this.$DX(a, a.$SR, b) : 0 > this.$DX(a, b, a.$SR) || 0 > this.$DX(a, a.next, b)) && (0 > this.$DX(b.$SR, b, b.next) ? 0 <= this.$DX(b, a, b.next) && 0 <= this.$DX(b, b.$SR, a) : 0 > this.$DX(b, a, b.$SR) || 0 > this.$DX(b, b.next, a)) && this.$RX(a, b) },
        $RX: function(a,
            b) { var c = a,
                d = !1,
                e = (a.$BM + b.$BM) / 2,
                f = (a.$DM + b.$DM) / 2;
            do c.$DM > f != c.next.$DM > f && e < (c.next.$BM - c.$BM) * (f - c.$DM) / (c.next.$DM - c.$DM) + c.$BM && (d = !d), c = c.next; while (c != a); return d },
        $SX: function(a, b) { var c = a;
            do { if (c.$uW != a.$uW && c.next.$uW != a.$uW && c.$uW != b.$uW && c.next.$uW != b.$uW && this.$EX(c, c.next, a, b)) return !0;
                c = c.next } while (c != a); return !1 },
        $TX: function(a, b) {
            var c = 32767 * (a - this.$$W) / this.$uN | 0,
                d = 32767 * (b - this.$_W) / this.$uN | 0,
                c = (c | c << 8) & 16711935,
                c = (c | c << 4) & 252645135,
                c = (c | c << 2) & 858993459,
                d = (d | d << 8) & 16711935,
                d = (d | d << 4) & 252645135,
                d = (d | d << 2) & 858993459;
            return (c | c << 1) & 1431655765 | ((d | d << 1) & 1431655765) << 1
        },
        $UX: function(a) { var b = a;
            do 0 > b.$vW && (b.$vW = this.$TX(b.$BM, b.$DM)), b.$sW = b.$SR, b = b.$rW = b.next; while (b != a);
            b.$sW.$rW = null;
            b.$sW = null;
            this.$VX(b) },
        $VX: function(a) {
            var b, c, d, e, f, g, h, l = 1;
            do {
                b = a;
                e = a = null;
                for (f = 0; null != b;) {
                    f++;
                    c = b;
                    for (d = g = 0; d < l && (d++, g++, c = c.$rW, null != c););
                    for (h = l; 0 < g || 0 < h && null != c;) 0 == g ? (d = c, c = c.$rW, h--) : 0 == h || null == c ? (d = b, b = b.$rW, g--) : b.$vW <= c.$vW ? (d = b, b = b.$rW, g--) : (d = c, c = c.$rW, h--), null != e ? e.$rW =
                        d : a = d, d.$sW = e, e = d;
                    b = c
                }
                e.$rW = null;
                l *= 2
            } while (1 < f);
            return a
        },
        __class__: fh
    };
    var Jh = function() {};
    h["manifest.Xml"] = Jh;
    Jh.__name__ = ["manifest", "Xml"];
    var Kh = function() {};
    h["nicksdk.wfaei09ne"] = Kh;
    Kh.__name__ = ["nicksdk", "wfaei09ne"];
    Kh.vjeiwo231 = function(a) { null == a && (a = "");
        Pb.eval("nick_sdk_client.wfaei09ne.vjeiwo231", [a]) };
    var Pb = function() { Pb.eval("nick_sdk_client.SDK.initialize") };
    h["nicksdk.SDK"] = Pb;
    Pb.__name__ = ["nicksdk", "SDK"];
    Pb.eval = function(a, b) {
        null == b && (b = []);
        for (var c = null, d = null, e = 0,
                f = a.split("."); e < f.length;) { var g = f[e];++e;
            c = d;
            d = null == c ? L.field(window, g) : L.field(c, g) } e = null;
        null != d ? e = d.apply(c, b) : null;
        return e
    };
    Pb.bind = function(a, b) { for (var c = null, d = null, e = "", f = 0, g = a.split("."); f < g.length;) { var h = g[f];++f;
            c = d;
            e = h;
            d = null == c ? L.field(window, h) : L.field(c, h) } null == c ? null : c[e] = b };
    Pb.prototype = { __class__: Pb };
    var yb = function() {};
    h["nicksdk.event.GameEventEmitter"] = yb;
    yb.__name__ = ["nicksdk", "event", "GameEventEmitter"];
    yb.sendGameEvent = function(a, b) { yb.callExternal(a, b) };
    yb.callExternal =
        function(a, b, c) { Pb.eval("nick_sdk_client.GameEventEmitter.sendGameEvent", [a, b]) };
    var tc = function() {};
    h["nicksdk.event.GameEventListener"] = tc;
    tc.__name__ = ["nicksdk", "event", "GameEventListener"];
    tc.__properties__ = { set_onSuspendToggle: "set_onSuspendToggle", set_onAudioToggle: "set_onAudioToggle" };
    tc.set_onAudioToggle = function(a) { tc.onAudioToggle = a;
        Pb.bind("nick_sdk_client.GameEventListener.onAudioToggle", a); return a };
    tc.set_onSuspendToggle = function(a) {
        tc.onSuspendToggle = a;
        Pb.bind("nick_sdk_client.GameEventListener.onSuspendToggle",
            a);
        return a
    };
    var ma = function() { this.scene = new ld(this.get_asset(), !1);
        this._addEventListeners();
        this._tween = new Hd };
    h["workinman.ui.ScreenBase"] = ma;
    ma.__name__ = ["workinman", "ui", "ScreenBase"];
    ma.prototype = {
        dispose: function() { this._tween.dispose();
            this._sceneSprite = this._root = this._tween = null;
            this._sceneSpriteCache.dispose();
            this._sceneSpriteCache = null;
            this._removeEventListeners() },
        onAdded: function() {
            this.scene.owner.yieldForStart();
            this._sceneSprite = this.scene.owner._internal_getFromChildren(3, Ta);
            this._root = this._sceneSprite.owner;
            this._sceneSpriteCache = new ph(this.get_asset(), this._tween, this._sceneSprite);
            this._buildScreen()
        },
        get__buttons: function() { return this._sceneSpriteCache.button },
        get__sprites: function() { return this._sceneSpriteCache.sprite },
        get__text: function() { return this._sceneSpriteCache.text },
        _addSprite: function(a, b) { return this._sceneSpriteCache.addSprite(a, b) },
        _addText: function(a, b) { return this._sceneSpriteCache.addText(a, b) },
        _buildScreen: function() {},
        get_asset: function() {
            throw new A("[ScreenBase](asset) Did not implement an asset name!");
        },
        _addEventListeners: function() { u.inputEvents.add(G(this, this._onInput));
            na.resizeStage.add(G(this, this._onResize)) },
        _removeEventListeners: function() { u.inputEvents.remove(G(this, this._onInput));
            na.resizeStage.remove(G(this, this._onResize)) },
        _onInput: function(a, b) {},
        _onResize: function() {},
        update: function(a) { this._tween.update(a) },
        __class__: ma,
        __properties__: { get__text: "get__text", get__sprites: "get__sprites", get__buttons: "get__buttons", get_asset: "get_asset" }
    };
    var jd = function() { ma.call(this) };
    h["screen.ScreenEndGame"] =
        jd;
    jd.__name__ = ["screen", "ScreenEndGame"];
    jd.__super__ = ma;
    jd.prototype = p(ma.prototype, { get_asset: function() { return "ScreenEndGame" }, __class__: jd });
    var hd = function() { ma.call(this) };
    h["screen.ScreenGameplayHelp"] = hd;
    hd.__name__ = ["screen", "ScreenGameplayHelp"];
    hd.__super__ = ma;
    hd.prototype = p(ma.prototype, { get_asset: function() { return "ScreenGameplayHelp" }, __class__: hd });
    var fd = function() { ma.call(this) };
    h["screen.ScreenGameplayHud"] = fd;
    fd.__name__ = ["screen", "ScreenGameplayHud"];
    fd.__super__ = ma;
    fd.prototype =
        p(ma.prototype, { get_asset: function() { return "ScreenGameplayHud" }, __class__: fd });
    var gd = function() { ma.call(this) };
    h["screen.ScreenGameplayPause"] = gd;
    gd.__name__ = ["screen", "ScreenGameplayPause"];
    gd.__super__ = ma;
    gd.prototype = p(ma.prototype, {
        dispose: function() { ma.prototype.dispose.call(this);
            this._muteToggleAsset = this._muteToggleBtn = null },
        get_asset: function() { return "ScreenGameplayPause" },
        _buildScreen: function() {
            this._muteToggleBtn = this.get__buttons().get("button_vol_off_big");
            this._muteToggleBtn.buttonClick.add(G(this,
                this._muteToggle));
            this._muteToggleAsset = this._addSprite({ asset: "ui/menu/button_vol_off_big", x: 25, y: 0, originX: 0.5 }, this.get__buttons().get("button_vol_off_big").owner);
            n.muteAll ? this._muteToggleAsset.setAsset("ui/menu/button_vol_off_big") : (this._muteToggleAsset.set_x(47), this._muteToggleAsset.set_y(-43), this._muteToggleAsset.setAsset("ui/menu/button_vol_on_big"))
        },
        _muteToggle: function(a) {
            n.muteAll ? (this._muteToggleAsset.set_x(25), this._muteToggleAsset.set_y(0), this._muteToggleAsset.setAsset("ui/menu/button_vol_off_big")) :
                (this._muteToggleAsset.set_x(47), this._muteToggleAsset.set_y(-43), this._muteToggleAsset.setAsset("ui/menu/button_vol_on_big"))
        },
        __class__: gd
    });
    var Ea = h["screen._ScreenLoading.STATE"] = { __ename__: ["screen", "_ScreenLoading", "STATE"], __constructs__: ["PRE", "LOAD_FILES", "INIT_WORLD", "END_WAIT", "DONE"] };
    Ea.PRE = ["PRE", 0];
    Ea.PRE.toString = l;
    Ea.PRE.__enum__ = Ea;
    Ea.LOAD_FILES = ["LOAD_FILES", 1];
    Ea.LOAD_FILES.toString = l;
    Ea.LOAD_FILES.__enum__ = Ea;
    Ea.INIT_WORLD = ["INIT_WORLD", 2];
    Ea.INIT_WORLD.toString = l;
    Ea.INIT_WORLD.__enum__ =
        Ea;
    Ea.END_WAIT = ["END_WAIT", 3];
    Ea.END_WAIT.toString = l;
    Ea.END_WAIT.__enum__ = Ea;
    Ea.DONE = ["DONE", 4];
    Ea.DONE.toString = l;
    Ea.DONE.__enum__ = Ea;
    var wb = function() { this._ROT = 250;
        ma.call(this);
        this._loadPercentStateStart = this._loadPercentCurrent = this._loadPercentReal = 0;
        this._setState(Ea.PRE) };
    h["screen.ScreenLoading"] = wb;
    wb.__name__ = ["screen", "ScreenLoading"];
    wb.__super__ = ma;
    wb.prototype = p(ma.prototype, {
        _buildScreen: function() {
            this._loadtext = this._addText({
                text: "common.loading",
                align: ea.Center,
                x: f.get_STAGE_CENTER_X(),
                y: f.get_STAGE_CENTER_Y() - 25
            });
            this._loadtext.setVars([0]);
            this._updateDisplay()
        },
        dispose: function() { ma.prototype.dispose.call(this);
            this._loadingSpinner = this._loadtext = this._state = null },
        get_asset: function() { return "ScreenLoading" },
        _addEventListeners: function() { na.worldAllocateComplete.add(G(this, this._onWorldAllocateComplete));
            na.worldAllocateProgress.add(G(this, this._onWorldAllocateProgress));
            M.eventProgress.add(G(this, this._onLoadProgress)) },
        _removeEventListeners: function() {
            na.worldAllocateComplete.remove(G(this,
                this._onWorldAllocateComplete));
            na.worldAllocateProgress.remove(G(this, this._onWorldAllocateProgress));
            M.eventProgress.remove(G(this, this._onLoadProgress))
        },
        _setState: function(a) {
            this._state = a;
            this._loadPercentCurrent = 0;
            switch (this._state[1]) {
                case 0:
                    this._timer = 0.2;
                    break;
                case 1:
                    this._phaseComplete = !1;
                    this._timer = 0.3;
                    M.load(["gameplay", "gameplay_audio"], G(this, this._onLoadComplete));
                    break;
                case 2:
                    this._loadPercentReal = 0.8;
                    this._phaseComplete = !1;
                    this._timer = 0.3;
                    na.flow.dispatch(J.WORLD_BEGIN_LOAD);
                    break;
                case 3:
                    this._loadPercentReal = 1;
                    this._timer = 0.7;
                    break;
                case 4:
                    na.flow.dispatch(J.WORLD_INIT_COMPLETE)
            }
            this._loadPercentStateStart = this._loadPercentReal
        },
        _onLoadComplete: function() { this._phaseComplete = !0 },
        _onWorldAllocateComplete: function() { this._phaseComplete = !0 },
        update: function(a) {
            ma.prototype.update.call(this, a);
            switch (this._state[1]) {
                case 0:
                    this._timer -= a;
                    0 > this._timer && this._setState(Ea.LOAD_FILES);
                    break;
                case 1:
                    0 <= this._timer && (this._timer -= a);
                    this._updateRealLoadPercent(sa.min(1 - this._timer / 0.3,
                        this._loadPercentCurrent), 0.8);
                    0 > this._timer && this._phaseComplete && this._setState(Ea.INIT_WORLD);
                    break;
                case 2:
                    0 <= this._timer && (this._timer -= a);
                    this._updateRealLoadPercent(sa.min(1 - this._timer / 0.3, this._loadPercentCurrent), 0.2);
                    0 > this._timer && this._phaseComplete && this._setState(Ea.END_WAIT);
                    break;
                case 3:
                    this._timer -= a, 0 > this._timer && this._setState(Ea.DONE)
            }
            this._updateDisplay()
        },
        _updateDisplay: function() { this._loadtext.setVars([Math.floor(100 * this._loadPercentReal)]) },
        _onLoadProgress: function(a) {
            this._loadPercentCurrent =
                a
        },
        _onWorldAllocateProgress: function(a) { this._loadPercentCurrent = a },
        _updateRealLoadPercent: function(a, b) { this._loadPercentReal = sa.max(this._loadPercentStateStart + a * b, this._loadPercentReal) },
        __class__: wb
    });
    var lc = h["screen.MINIGAME_STATE_LOAD"] = { __ename__: ["screen", "MINIGAME_STATE_LOAD"], __constructs__: ["WAIT", "DONE"] };
    lc.WAIT = ["WAIT", 0];
    lc.WAIT.toString = l;
    lc.WAIT.__enum__ = lc;
    lc.DONE = ["DONE", 1];
    lc.DONE.toString = l;
    lc.DONE.__enum__ = lc;
    var sc = function() {
        this._ROT = 250;
        this._WAIT_TIME = 1.5;
        ma.call(this);
        this._loadPercentStateStart = this._loadPercentCurrent = this._loadPercentReal = 0;
        this._setState(lc.WAIT)
    };
    h["screen.ScreenLoadingMinigame"] = sc;
    sc.__name__ = ["screen", "ScreenLoadingMinigame"];
    sc.__super__ = ma;
    sc.prototype = p(ma.prototype, {
        dispose: function() { ma.prototype.dispose.call(this);
            this._loadingSpinner = this._loadtext = null },
        get_asset: function() { return "ScreenLoading" },
        _buildScreen: function() {
            this._loadtext = this._addText({
                text: "common.loading",
                align: ea.Center,
                x: f.get_STAGE_CENTER_X(),
                y: f.get_STAGE_CENTER_Y() -
                    25
            });
            this._loadtext.setVars([0])
        },
        _setState: function(a) { this._state = a;
            this._loadPercentCurrent = 0; switch (this._state[1]) {
                case 0:
                    this._recipeLoaded = !1;
                    this._timer = 0.3;
                    this._minimumOpenTime = this._WAIT_TIME;
                    M.load(m.getRecipeAssetPacks(), G(this, this._recipeLoadComplete)); break;
                case 1:
                    na.flow.dispatch(J.COOKING_RECIPE_START) } this._loadPercentStateStart = this._loadPercentReal },
        _recipeLoadComplete: function() { this._recipeLoaded = !0 },
        update: function(a) {
            switch (this._state[1]) {
                case 0:
                    0 <= this._timer && (this._timer -=
                        a), this._updateRealLoadPercent(sa.min(1 - this._timer / 0.3, this._loadPercentCurrent), 0.8), 0 > this._timer && this._recipeLoaded && this._setState(lc.DONE)
            }
            this._updateDisplay()
        },
        _updateDisplay: function() { this._loadtext.setVars([Math.floor(100 * this._loadPercentReal)]) },
        _updateRealLoadPercent: function(a, b) { this._loadPercentReal = sa.max(this._loadPercentStateStart + a * b, this._loadPercentReal) },
        __class__: sc
    });
    var id = function() { ma.call(this) };
    h["screen.ScreenQuitConfirm"] = id;
    id.__name__ = ["screen", "ScreenQuitConfirm"];
    id.__super__ = ma;
    id.prototype = p(ma.prototype, { get_asset: function() { return "ScreenQuitConfirm" }, _buildScreen: function() { this._addText({ text: "quit_confirm.quit_confirm_header", align: ea.Center, x: f.get_STAGE_CENTER_X() - 15, y: f.get_STAGE_CENTER_Y() - 165 }) }, __class__: id });
    var ed = function() { this._NUM_RECIPES = 10;
        this._CENTER_X = 660;
        this._SPACING_X = 190;
        ma.call(this);
        this._flagTweening = this._flagClosing = !1 };
    h["screen.ScreenRecipeSelect"] = ed;
    ed.__name__ = ["screen", "ScreenRecipeSelect"];
    ed.__super__ = ma;
    ed.prototype =
        p(ma.prototype, {
            dispose: function() { ma.prototype.dispose.call(this);
                this._foodPlates = this._recipeBtns = null },
            get_asset: function() { return "ScreenRecipeSelect" },
            _buildScreen: function() {
                Xa.loadMinigameData();
                this._recipeBtns = [];
                this._foodPlates = [];
                for (var a = 0, b = 110 + f.get_STAGE_WIDTH(), c = f.get_STAGE_HEIGHT() - 270; a < this._NUM_RECIPES;) 5 == a && (b = 110 + f.get_STAGE_WIDTH(), c = f.get_STAGE_HEIGHT() - 115), this._recipeBtns.push(this._addButton("ui/platter_bottom_sm_nohand", m.getRecipeAssetPack(a), b, c, a, !0, G(this, this._onButtonClick))),
                    b += this._SPACING_X, a++;
                this.get__buttons().get("mute_toggle_btn").buttonClick.add(G(this, this._onMuteToggle));
                this._muteToggle = this._addSprite({ asset: "ui/splash_sound_on", x: 45, y: 20, originX: 0.5 }, this.get__buttons().get("mute_toggle_btn").owner);
                n.muteAll && this._muteToggle.setAsset("ui/splash_sound_off");
                this._openScreen()
            },
            _addButton: function(a, b, c, d, e, f, g) {
                var h = new aa;
                h.add(new E);
                this._addStarRating(h, e);
                this._addSprite({ asset: a, x: 0, y: 0, originX: 0.5 }, h);
                a = new vf(b, this._tween);
                h.add(a);
                a.buttonClick.add(g);
                a.set_x(c);
                a.set_y(d);
                a.setScale(0.45, 0.45);
                switch (e) {
                    case 0:
                        this._addSprite({ asset: "ui/recipe_" + e, x: 0, y: -25, originX: 0.5 }, h);
                        break;
                    case 1:
                        this._addSprite({ asset: "ui/recipe_" + e, x: 0, y: -85, originX: 0.5 }, h);
                        break;
                    case 2:
                        this._addSprite({ asset: "ui/recipe_" + e, x: 0, y: -5, originX: 0.5 }, h);
                        break;
                    case 3:
                        this._addSprite({ asset: "ui/recipe_" + e, x: 5, y: -100, originX: 0.5 }, h);
                        break;
                    case 4:
                        this._addSprite({ asset: "ui/recipe_" + e, x: -5, y: 0, originX: 0.5 }, h);
                        break;
                    case 5:
                        this._addSprite({ asset: "ui/recipe_" + e, x: 0, y: 10, originX: 0.5 },
                            h);
                        break;
                    case 6:
                        this._addSprite({ asset: "ui/recipe_" + e, x: 0, y: 10, originX: 0.5 }, h);
                        break;
                    case 7:
                        this._addSprite({ asset: "ui/recipe_" + e, x: 0, y: -20, originX: 0.5 }, h);
                        break;
                    case 8:
                        this._addSprite({ asset: "ui/recipe_" + e + "_b", x: -48, y: 0, originX: 0.5 }, h);
                        this._addSprite({ asset: "ui/recipe_" + e, x: 15, y: 8, originX: 0.5 }, h);
                        break;
                    case 9:
                        this._addSprite({ asset: "ui/recipe_" + e, x: 0, y: -75, originX: 0.5 }, h)
                }
                f && (this._addSprite({ asset: "ui/platter_bottom_card", x: -10, y: 60, originX: 0.5, scale: 1.2 }, h), this._addText({
                    text: "button_text." +
                        b,
                    align: ea.Center,
                    x: -5,
                    y: 100
                }, h));
                this._sceneSpriteCache.sceneSprite.owner.addChild(h);
                this.get__buttons().set(b, a);
                return a
            },
            _addStarRating: function(a, b) { var c = Xa.get_minigameSaveData().minigameScores[b],
                    d = "",
                    e = 16777215;
                0 > c || (5 >= c ? (d = "ui/plaque_bronze", e = 13217373) : 8 >= c ? (d = "ui/plaque_silver", e = 12632256) : (d = "ui/plaque_gold", e = 15657130)); "" != d && (this._addSprite({ asset: d, x: 35, y: -125, scale: 0.8, rotation: 10 }, a), d = this._addText({ text: "gameplay.score", align: ea.Center, x: 100, y: -90 }, a), d.setVars([c]), d.get_sprite().setTint(e)) },
            _onMuteToggle: function(a) { n.muteAll ? this._muteToggle.setAsset("ui/splash_sound_off") : this._muteToggle.setAsset("ui/splash_sound_on") },
            _onLeftClick: function(a) { this._moveLeft() },
            _onRightClick: function(a) { this._moveRight() },
            _moveLeft: function() {
                if (!this._flagTweening) {
                    this._flagTweening = !0;
                    for (var a = 0; a < this._recipeBtns.length;) this._recipeBtns[a].x <= 231 - this._SPACING_X * (this._recipeBtns.length - 2) && (0 == a ? (this._recipeBtns[a].set_x(this._recipeBtns[this._recipeBtns.length - 1].x + this._SPACING_X), this._foodPlates[a].set_x(this._foodPlates[this._foodPlates.length -
                        1].x + this._SPACING_X)) : (this._recipeBtns[a].set_x(this._recipeBtns[a - 1].x + this._SPACING_X), this._foodPlates[a].set_x(this._foodPlates[a - 1].x + this._SPACING_X))), a++;
                    for (a = 0; a < this._recipeBtns.length;) {
                        var b = 1;
                        if (231 > this._recipeBtns[a].x - this._SPACING_X || this._recipeBtns[a].x > 231 + 2 * this._SPACING_X) b = 0;
                        this._tween.tween({ target: this._recipeBtns[a], duration: 0.4, ease: v.inOutQuad, delay: 0 }, { x: this._recipeBtns[a].x - this._SPACING_X, alpha: b });
                        this._tween.tween({
                            target: this._foodPlates[a],
                            duration: 0.4,
                            ease: v.inOutQuad,
                            delay: 0.1
                        }, { x: this._foodPlates[a].x - this._SPACING_X, alpha: b });
                        a++
                    }
                    ka.start(G(this, this._enableTweening), 0.6)
                }
            },
            _moveRight: function() {
                if (!this._flagTweening) {
                    this._flagTweening = !0;
                    for (var a = this._recipeBtns.length; 0 < a--;) this._recipeBtns[a].x >= 231 + this._SPACING_X * (this._recipeBtns.length - 2) && (a == this._recipeBtns.length - 1 ? (this._recipeBtns[a].set_x(this._recipeBtns[0].x - this._SPACING_X), this._foodPlates[a].set_x(this._foodPlates[0].x - this._SPACING_X)) : (this._recipeBtns[a].set_x(this._recipeBtns[a + 1].x -
                        this._SPACING_X), this._foodPlates[a].set_x(this._foodPlates[a + 1].x - this._SPACING_X)));
                    for (a = this._recipeBtns.length; 0 < a--;) {
                        var b = 1;
                        if (this._recipeBtns[a].x + this._SPACING_X > 231 + this._SPACING_X || this._recipeBtns[a].x < 231 - this._SPACING_X) b = 0;
                        this._tween.tween({ target: this._recipeBtns[a], duration: 0.4, ease: v.inOutQuad, delay: 0 }, { x: this._recipeBtns[a].x + this._SPACING_X, alpha: b });
                        this._tween.tween({ target: this._foodPlates[a], duration: 0.4, ease: v.inOutQuad, delay: 0.1 }, {
                            x: this._foodPlates[a].x + this._SPACING_X,
                            alpha: b
                        })
                    }
                    ka.start(G(this, this._enableTweening), 0.6)
                }
            },
            _enableTweening: function() { this._flagTweening = !1 },
            _onButtonClick: function(a) {
                if (!this._flagClosing) {
                    this._flagClosing = !0;
                    m.setRecipeID(a.name);
                    D.sendEvent({ event: "missionStarted", params: { gameModeName: "" + H.string(m.get_recipeID()) } });
                    n.stopMusic();
                    n.playSound("menu_stinger");
                    for (a = 0; a < this._recipeBtns.length;) this._tween.tween({ target: this._recipeBtns[a], duration: 0.5, ease: v.inOutQuad, delay: 0 }, { x: this._recipeBtns[a].x - f.get_STAGE_WIDTH() }), this._recipeBtns[a].set_active(!1),
                        a++;
                    ka.start(G(this, this._closeScreen), 0.5)
                }
            },
            _openScreen: function() { for (var a = 0; a < this._recipeBtns.length;) this._tween.tween({ target: this._recipeBtns[a], duration: 0.5, ease: v.inOutQuad, delay: 0 }, { x: this._recipeBtns[a].x - f.get_STAGE_WIDTH() }), a++ },
            _closeScreen: function() { na.flow.dispatch(J.COOKING_RECIPE_LOAD) },
            __class__: ed
        });
    var dd = function() { ma.call(this);
        this._flagClosing = !1 };
    h["screen.ScreenSplash"] = dd;
    dd.__name__ = ["screen", "ScreenSplash"];
    dd.__super__ = ma;
    dd.prototype = p(ma.prototype, {
        get_asset: function() { return "ScreenSplash" },
        dispose: function() { this._tween.stop(this.get__text());
            ma.prototype.dispose.call(this);
            this._muteToggle = this._clickText = null },
        _buildScreen: function() {
            this._addText({ text: "splash.version", x: 5, y: 3, align: ea.Left }).setVars(["1.0.2"]);
            z.$KH.$bG.get_supported() ? this._clickText = this._addText({ text: "splash.tap_anywhere", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_HEIGHT() - 75, align: ea.Center }) : this._clickText = this._addText({ text: "splash.click_anywhere", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_HEIGHT() - 75, align: ea.Center });
            this.get__buttons().get("mute_toggle_btn").buttonClick.add(G(this, this._onMuteToggle));
            this._muteToggle = this._addSprite({ asset: "ui/splash_sound_on", x: 45, y: 20, originX: 0.5 }, this.get__buttons().get("mute_toggle_btn").owner);
            this._fadeTextOut()
        },
        _onResize: function() {},
        _onMuteToggle: function(a) { n.muteAll ? this._muteToggle.setAsset("ui/splash_sound_off") : this._muteToggle.setAsset("ui/splash_sound_on") },
        _fadeTextIn: function() {
            this._tween.tween({
                target: this._clickText,
                duration: 0.5,
                ease: v.inOutQuad,
                complete: G(this,
                    this._fadeTextOut)
            }, { alpha: 1 })
        },
        _fadeTextOut: function() { this._tween.tween({ target: this._clickText, duration: 0.5, ease: v.inOutQuad, delay: 0.5, complete: G(this, this._fadeTextIn) }, { alpha: 0 }) },
        _onInput: function(a, b) { switch (a[1]) {
                case 0:
                    !b || 940 < u.pointer.lastPos.x && 80 > u.pointer.lastPos.y || !1 != this._flagClosing || (this._flagClosing = !0, na.flow.dispatch(J.SPLASH_PLAY)) } },
        __class__: dd
    });
    var Ma = function(a) { U.call(this);
        this.name = a };
    h["workinman.ui.UIBase"] = Ma;
    Ma.__name__ = ["workinman", "ui", "UIBase"];
    Ma.__super__ =
        U;
    Ma.prototype = p(U.prototype, {
        get_entitySlot: function() { return 14 },
        set_x: function(a) { this.x = a;
            this._sprite.x.set__(a); return a },
        set_y: function(a) { this.y = a;
            this._sprite.y.set__(a); return a },
        set_alpha: function(a) { this.alpha = a;
            this._sprite.alpha.set__(a); return a },
        set_rotation: function(a) { this.rotation = a;
            this._sprite.rotation.set__(a); return a },
        set_scaleX: function(a) { this.scaleX = a;
            this._sprite.scaleX.set__(a); return a },
        set_scaleY: function(a) { this.scaleY = a;
            this._sprite.scaleY.set__(a); return a },
        set_scale: function(a) {
            this.scale =
                a;
            this.set_scaleX(a);
            this.set_scaleY(a);
            return a
        },
        get_sprite: function() { return this._sprite },
        set_originX: function(a) { this._originX = a;
            this._sprite.anchorX.set__(this._originX * this._sprite.getNaturalWidth()); return a },
        set_originY: function(a) { this._originY = a;
            this._sprite.anchorY.set__(this._originY * this._sprite.getNaturalHeight()); return a },
        onAdded: function() {
            U.prototype.onAdded.call(this);
            this._sprite = this.owner.$PG[3];
            if (null != this._sprite) {
                this.set_x(this._sprite.x.$tG);
                this.set_y(this._sprite.y.$tG);
                this.set_alpha(this._sprite.alpha.$tG);
                this.set_rotation(this._sprite.rotation.$tG);
                this._originX = this._sprite.anchorX.$tG / this._sprite.getNaturalWidth();
                this._originY = this._sprite.anchorY.$tG / this._sprite.getNaturalHeight();
                var a = this._sprite.scaleX.$tG,
                    b = this._sprite.scaleY.$tG;
                this.set_scale(a);
                this.set_scaleX(a);
                this.set_scaleY(b);
                this.defaultX = this.x;
                this.defaultY = this.y
            }
        },
        dispose: function() { U.prototype.dispose.call(this);
            this._sprite = null },
        __class__: Ma,
        __properties__: p(U.prototype.__properties__, { set_originY: "set_originY", set_originX: "set_originX", get_sprite: "get_sprite", set_scale: "set_scale", set_scaleY: "set_scaleY", set_scaleX: "set_scaleX", set_rotation: "set_rotation", set_alpha: "set_alpha", set_y: "set_y", set_x: "set_x" })
    });
    var mb = function(a, b) { Ma.call(this, a);
        this._tween = b;
        this._state = Ha.IDLE;
        this.set_active(!0);
        this._defaultScale = 1;
        this.buttonIn = Ka._new();
        this.buttonOut = Ka._new();
        this.buttonDown = Ka._new();
        this.buttonClick = Ka._new() };
    h["workinman.ui.UIButton"] = mb;
    mb.__name__ = ["workinman", "ui",
        "UIButton"
    ];
    mb.setDelegateOnButtonDown = function(a) { mb._delegateOnButtonDown = a };
    mb.__super__ = Ma;
    mb.prototype = p(Ma.prototype, {
        set_active: function(a) { null != this.owner && (H.instance(this.owner.$PG[1], wc).pointerEnabled = a);
            this._setState(Ha.IDLE); return this.active = a },
        onAdded: function() {
            Ma.prototype.onAdded.call(this);
            this._sprite.set_pixelSnapping(!1);
            this._connectionPointerUp = this._sprite.get_pointerUp().connect(G(this, this._pointerUp));
            this._connectionPointerDown = this._sprite.get_pointerDown().connect(G(this,
                this._pointerDown));
            this._connectionPointerIn = this._sprite.get_pointerIn().connect(G(this, this._pointerIn));
            this._connectionPointerOut = this._sprite.get_pointerOut().connect(G(this, this._pointerOut));
            this._defaultScale = this.scale
        },
        dispose: function() {
            this._sprite.get_pointerUp().$zG(this._connectionPointerUp);
            this._sprite.get_pointerDown().$zG(this._connectionPointerDown);
            this._sprite.get_pointerIn().$zG(this._connectionPointerIn);
            this._sprite.get_pointerOut().$zG(this._connectionPointerOut);
            this._connectionPointerOut =
                this._connectionPointerIn = this._connectionPointerDown = this._connectionPointerUp = null;
            this.buttonIn.dispose();
            this.buttonOut.dispose();
            this.buttonDown.dispose();
            this.buttonClick.dispose();
            this.buttonClick = this.buttonDown = this.buttonOut = this.buttonIn = null;
            Ma.prototype.dispose.call(this)
        },
        _setState: function(a) {
            if (this._state != a) switch (this._state = a, this._state[1]) {
                case 0:
                    this._tween.tween({ target: this, duration: 0.3, ease: v.outBack, thread: "button_state" }, { scale: this._defaultScale });
                    break;
                case 1:
                    this._tween.stop(this);
                    null != mb._delegateOnButtonDown && mb._delegateOnButtonDown(this);
                    this._tween.tween({ target: this, duration: 0.1, ease: v.outQuad, thread: "button_state" }, { scale: 0.9 * this._defaultScale });
                    break;
                case 2:
                    this._tween.tween({ target: this, duration: 0.05, ease: v.outQuad, thread: "button_state" }, { scale: 1.075 * this._defaultScale })
            }
        },
        _pointerUp: function(a) { this.active ? (this._setState(Ha.IDLE), this.buttonClick.dispatch(this)) : this._setState(Ha.IDLE) },
        _pointerDown: function(a) {
            this.active ? (this._setState(Ha.DOWN), this.buttonDown.dispatch(this)) :
                this._setState(Ha.IDLE)
        },
        _pointerIn: function(a) { this.active ? (this._setState(Ha.OVER), this.buttonIn.dispatch(this)) : this._setState(Ha.IDLE) },
        _pointerOut: function(a) { this.active ? (this._setState(Ha.IDLE), this.buttonOut.dispatch(this)) : this._setState(Ha.IDLE) },
        __class__: mb,
        __properties__: p(Ma.prototype.__properties__, { set_active: "set_active" })
    });
    var vf = function(a, b) { mb.call(this, a, b);
        this._defaultScale = this._defaultScaleY = this._defaultScaleX = 1 };
    h["screen.ui.buttons.MenuButton"] = vf;
    vf.__name__ = ["screen",
        "ui", "buttons", "MenuButton"
    ];
    vf.__super__ = mb;
    vf.prototype = p(mb.prototype, {
        set_active: function(a) { this._setState(Ha.IDLE); return this.active = a },
        dispose: function() { mb.prototype.dispose.call(this) },
        setScale: function(a, b) { this.set_scaleX(a);
            this.set_scaleY(b);
            this._defaultScaleX = a;
            this._defaultScale = this._defaultScaleY = b },
        _setState: function(a) {
            if (this._state != a) switch (this._state = a, this._state[1]) {
                case 0:
                    this._tween.tween({ target: this, duration: 0.3, ease: v.outBack, thread: "button_state" }, {
                        scaleX: this._defaultScaleX,
                        scaleY: this._defaultScaleY
                    });
                    break;
                case 1:
                    n.playSound("audio/button_click");
                    this._tween.stop(this);
                    this._tween.tween({ target: this, duration: 0.1, ease: v.outQuad, thread: "button_state" }, { scaleX: 0.9 * this._defaultScaleX, scaleY: 0.9 * this._defaultScaleY });
                    break;
                case 2:
                    this._tween.tween({ target: this, duration: 0.05, ease: v.outQuad, thread: "button_state" }, { scaleX: 1.075 * this._defaultScaleX, scaleY: 1.075 * this._defaultScaleY })
            }
        },
        __class__: vf
    });
    var wf = function() { ia.call(this) };
    h["screen.ui.end_game.EndGameClose"] = wf;
    wf.__name__ = ["screen", "ui", "end_game", "EndGameClose"];
    wf.__super__ = ia;
    wf.prototype = p(ia.prototype, { $jF: function(a) { na.flow.dispatch(J.END_GAME_NEW_GAME) }, __class__: wf });
    var xf = function() { ia.call(this) };
    h["screen.ui.gameplay.ButtonHelpClose"] = xf;
    xf.__name__ = ["screen", "ui", "gameplay", "ButtonHelpClose"];
    xf.__super__ = ia;
    xf.prototype = p(ia.prototype, { $jF: function(a) { na.flow.dispatch(J.HELP_CLOSE) }, __class__: xf });
    var yf = function() { ia.call(this) };
    h["screen.ui.gameplay.ButtonHelpOpen"] = yf;
    yf.__name__ = ["screen",
        "ui", "gameplay", "ButtonHelpOpen"
    ];
    yf.__super__ = ia;
    yf.prototype = p(ia.prototype, { $jF: function(a) { na.flow.dispatch(J.HELP_OPEN) }, __class__: yf });
    var zf = function() { ia.call(this) };
    h["screen.ui.gameplay.ButtonMuteToggle"] = zf;
    zf.__name__ = ["screen", "ui", "gameplay", "ButtonMuteToggle"];
    zf.__super__ = ia;
    zf.prototype = p(ia.prototype, { $jF: function(a) { n.set_muteAll(!n.muteAll) }, __class__: zf });
    var Af = function() { ia.call(this) };
    h["screen.ui.gameplay.ButtonPauseClose"] = Af;
    Af.__name__ = ["screen", "ui", "gameplay", "ButtonPauseClose"];
    Af.__super__ = ia;
    Af.prototype = p(ia.prototype, { $jF: function(a) { na.flow.dispatch(J.PAUSE_CLOSE) }, __class__: Af });
    var Bf = function() { ia.call(this) };
    h["screen.ui.gameplay.ButtonPauseOpen"] = Bf;
    Bf.__name__ = ["screen", "ui", "gameplay", "ButtonPauseOpen"];
    Bf.__super__ = ia;
    Bf.prototype = p(ia.prototype, { $jF: function(a) { na.flow.dispatch(J.PAUSE_OPEN) }, __class__: Bf });
    var Cf = function() { ia.call(this) };
    h["screen.ui.gameplay.ButtonQuitConfirmNo"] = Cf;
    Cf.__name__ = ["screen", "ui", "gameplay", "ButtonQuitConfirmNo"];
    Cf.__super__ =
        ia;
    Cf.prototype = p(ia.prototype, { $jF: function(a) { na.flow.dispatch(J.QUIT_CONFIRM_CLOSE) }, __class__: Cf });
    var Df = function() { ia.call(this) };
    h["screen.ui.gameplay.ButtonQuitConfirmOpen"] = Df;
    Df.__name__ = ["screen", "ui", "gameplay", "ButtonQuitConfirmOpen"];
    Df.__super__ = ia;
    Df.prototype = p(ia.prototype, { $jF: function(a) { na.flow.dispatch(J.QUIT_CONFIRM_OPEN) }, __class__: Df });
    var Ef = function() { ia.call(this) };
    h["screen.ui.gameplay.ButtonQuitConfirmYes"] = Ef;
    Ef.__name__ = ["screen", "ui", "gameplay", "ButtonQuitConfirmYes"];
    Ef.__super__ = ia;
    Ef.prototype = p(ia.prototype, { $jF: function(a) { n.stopMusic();
            n.playSound("gameplay_stinger");
            na.flow.dispatch(J.END_GAME_NEW_GAME);
            x.abandonMinigame.dispatch() }, __class__: Ef });
    var gi = function() {};
    h["spine.Updatable"] = gi;
    gi.__name__ = ["spine", "Updatable"];
    var qh = function() {};
    h["spine.Bone"] = qh;
    qh.__name__ = ["spine", "Bone"];
    qh.__interfaces__ = [gi];
    qh.prototype = { __class__: qh };
    var Uh = function() {};
    h["spine.BoneData"] = Uh;
    Uh.__name__ = ["spine", "BoneData"];
    Uh.prototype = { __class__: Uh };
    var li = function() {};
    h["spine.EventData"] = li;
    li.__name__ = ["spine", "EventData"];
    var Vh = function() {};
    h["spine.IkConstraintData"] = Vh;
    Vh.__name__ = ["spine", "IkConstraintData"];
    Vh.prototype = { __class__: Vh };
    var Wh = function() {};
    h["spine.PathConstraintData"] = Wh;
    Wh.__name__ = ["spine", "PathConstraintData"];
    Wh.prototype = { __class__: Wh };
    var Xh = function() {};
    h["spine.Skeleton"] = Xh;
    Xh.__name__ = ["spine", "Skeleton"];
    Xh.prototype = { __class__: Xh };
    var mi = function() {};
    h["spine.SkeletonData"] = mi;
    mi.__name__ = ["spine", "SkeletonData"];
    var ni = function() {};
    h["spine.Skin"] = ni;
    ni.__name__ = ["spine", "Skin"];
    var Yh = function() {};
    h["spine.SlotData"] = Yh;
    Yh.__name__ = ["spine", "SlotData"];
    Yh.prototype = { __class__: Yh };
    var Zh = function() {};
    h["spine.TransformConstraintData"] = Zh;
    Zh.__name__ = ["spine", "TransformConstraintData"];
    Zh.prototype = { __class__: Zh };
    var $h = function() {};
    h["spine.attachments.Attachment"] = $h;
    $h.__name__ = ["spine", "attachments", "Attachment"];
    var Id = function() {};
    h["spine.attachments.VertexAttachment"] = Id;
    Id.__name__ = ["spine", "attachments", "VertexAttachment"];
    Id.__super__ = $h;
    Id.prototype = p($h.prototype, { __class__: Id });
    var rh = function() {};
    h["spine.attachments.MeshAttachment"] = rh;
    rh.__name__ = ["spine", "attachments", "MeshAttachment"];
    rh.__super__ = Id;
    rh.prototype = p(Id.prototype, { __class__: rh });
    var M = function() {};
    h["workinman.WMAssets"] = M;
    M.__name__ = ["workinman", "WMAssets"];
    M.load = function(a, b) {
        if (null != M._load) M._loadQueue.push(new sh(a, b));
        else {
            M._load = new th(b, M._updateProgress, M._loadComplete);
            for (var c = 0; c < a.length;) {
                var d = a[c];
                ++c;
                M._assetPacks.exists(d) ||
                    M._load.promises.push(new uh(M.assets, d, M._load))
            }
            M._updateProgress();
            1 > M._load.promises.length && M._nextQueue()
        }
    };
    M._nextQueue = function() { M._load.dispose();
        M._load = null; if (!(1 > M._loadQueue.length)) { var a = M._loadQueue.shift();
            M.load(a.array, a.complete);
            a.dispose() } };
    M._updateProgress = function() { var a = M._load.get_progress();
        M.eventProgress.dispatch(a) };
    M._loadComplete = function(a) { var b = 0; for (a = a.promises; b < a.length;) { var c = a[b];++b;
            M._processPack(c.pack, c.id) } M._nextQueue() };
    M.unload = function(a) {
        for (var b =
                0; b < a.length;) { var c = a[b];++b;!1 != M._assetPacks.exists(c) && (M._assetPacks.get(c).dispose(), M._assetPacks.remove(c), M.assets.removePackByName(c)) }
    };
    M._processPack = function(a, b) { for (var c = new vh(b), d = a.get_manifest().iterator(); d.hasNext();) { var e = d.next(),
                f = e.name.indexOf(".json");
            0 > f || null == a.getFile(e.name).toJson().texturepacker || (e = I.substr(e.name, 0, f), e = M.assets.getTexturePacker(e, !1), c.texturePacks.push(e), e.disposeFiles()) } M._assetPacks.set(b, c);
        c };
    M.getSprite = function(a) {
        var b = M.assets.getTexture(a,
            !1);
        if (null != b) return new Ob(b);
        for (b = M._assetPacks.iterator(); b.hasNext();)
            for (var c = 0, d = b.next().texturePacks; c < d.length;) { var e = d[c];++c; if (e.items.exists(a)) return a = e.createSprite(a), a.anchorX.set__(0), a.anchorY.set__(0), a }
        return null
    };
    M.getFile = function(a) { return M.assets.getFile(a) };
    M.getFont = function(a) { return M.assets.getFont(a) };
    M.getXML = function(a) { return new pb(B.parse(M.getFile(a).toString()).firstElement()) };
    M.getSound = function(a) { return M.assets.getSound(a) };
    var th = function(a, b, c) {
        this.promises = [];
        this._updateProgress = b;
        this._complete = a;
        this._allLoadComplete = c
    };
    h["workinman._WMAssets.LoadBatch"] = th;
    th.__name__ = ["workinman", "_WMAssets", "LoadBatch"];
    th.prototype = {
        dispose: function() { for (; 0 < this.promises.length;) this.promises.pop().dispose();
            this.promises = null;
            this._complete();
            this._updateProgress = this._allLoadComplete = this._complete = null },
        get_progress: function() { if (1 > this.promises.length) return 1; for (var a = 0, b = 0, c = this.promises; b < c.length;) { var d = c[b];++b;
                a += d.progress } return a /= this.promises.length },
        updateProgress: function() { this._updateProgress() },
        promiseComplete: function() { this._updateProgress(); for (var a = 0, b = this.promises; a < b.length;) { var c = b[a];++a; if (!1 == c.complete) return } this._allLoadComplete(this) },
        __class__: th,
        __properties__: { get_progress: "get_progress" }
    };
    var uh = function(a, b, c) { this.complete = !1;
        this.id = b;
        this._parent = c;
        this.progress = 0;
        a = a.load(b);
        a.progress(G(this, this._onProgress));
        a.then(G(this, this._onPackLoadComplete)) };
    h["workinman._WMAssets.LoadPromise"] = uh;
    uh.__name__ = ["workinman",
        "_WMAssets", "LoadPromise"
    ];
    uh.prototype = { dispose: function() { this._parent = this.pack = this.id = null }, _onProgress: function(a) { this.progress = a;
            this._parent.updateProgress() }, _onPackLoadComplete: function(a) { this.progress = 1;
            this.pack = a;
            this.complete = !0;
            this._parent.updateProgress();
            this._parent.promiseComplete() }, __class__: uh };
    var sh = function(a, b) { this.array = a;
        this.complete = b };
    h["workinman._WMAssets.LoadQueue"] = sh;
    sh.__name__ = ["workinman", "_WMAssets", "LoadQueue"];
    sh.prototype = {
        dispose: function() {
            this.complete =
                this.array = null
        },
        __class__: sh
    };
    var ba = function() {};
    h["workinman.WMCloud"] = ba;
    ba.__name__ = ["workinman", "WMCloud"];
    ba.setBool = function(a, b) { ba.setValue(a, b) };
    ba.getBool = function(a) { return ba._values.get(a) };
    ba.getFloat = function(a) { return ba._values.get(a) };
    ba.setInt = function(a, b) { ba.setValue(a, b) };
    ba.modifyInt = function(a, b) { return Math.floor(ba.modifyValue(a, b)) };
    ba.getInt = function(a) { return ba._values.get(a) };
    ba.setDefault = function(a, b) { ba._defaults.set(a, b);
        ba.resetValue(a) };
    ba.setValue = function(a,
        b) { ba._values.set(a, b);!1 == ba._defaults.exists(a) && ba.setDefault(a, b);
        ba._updateDisplays(a) };
    ba.modifyValue = function(a, b) { var c = ba.getFloat(a) + b;
        ba._values.set(a, c);
        ba._updateDisplays(a); return ba.getFloat(a) };
    ba.resetValue = function(a) { var b = ba._defaults.get(a);
        ba._values.set(a, b);
        ba._updateDisplays(a) };
    ba._updateDisplays = function(a) { na.updateDisplay.dispatch(a) };
    var ai = {};
    h["workinman.event._Event2.Event2_Impl_"] = ai;
    ai.__name__ = ["workinman", "event", "_Event2", "Event2_Impl_"];
    ai._new = function() { return new wh };
    var wh = function() { this._list = [] };
    h["workinman.event._Event2.Event2Base"] = wh;
    wh.__name__ = ["workinman", "event", "_Event2", "Event2Base"];
    wh.prototype = { add: function(a) { 0 <= this._list.indexOf(a) || this._list.push(a) }, remove: function(a) { for (var b = this._list.length; 0 < b--;)
                if (this._list[b] == a) { I.remove(this._list, a); break } }, dispatch: function(a, b) { for (var c = 0, d = this._list; c < d.length;) { var e = d[c];++c;
                e(a, b) } }, __class__: wh };
    var ib = function(a, b, c) { null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.to(a, b, c) };
    h["workinman.math.WMPoint"] =
        ib;
    ib.__name__ = ["workinman", "math", "WMPoint"];
    ib.prototype = {
        to: function(a, b, c) { null == c && (c = 0);
            this.x = a;
            this.y = b;
            this.z = c;
            this.calculateLength(); return this },
        toPoint: function(a) { this.x = a.x;
            this.y = a.y;
            this.z = a.z;
            this.calculateLength(); return this },
        normalize: function() { if (0 == this._length) return this;
            this.x /= this._length;
            this.y /= this._length;
            this.z /= this._length;
            this.calculateLength(); return this },
        pseudoCross: function(a) { a.to(this.y, -this.x, this.z); return this },
        calculateLength: function() {
            this._length =
                Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            return this
        },
        rotate: function(a) { a *= Math.PI / 180;
            this._workFloat = this.x * Math.cos(a) - this.y * Math.sin(a);
            this.y = this.y * Math.cos(a) + this.x * Math.sin(a);
            this.x = this._workFloat; return this },
        dispose: function() {},
        __class__: ib
    };
    var Gf = function(a) { this.lastPos = new ib;
        this.line = new Ff;
        this.swipe = xa.NONE;
        this.down = !1;
        this.fresh = !0;
        this.id = a;
        this.disposed = this.consumed = !1 };
    h["workinman.input.Pointer"] = Gf;
    Gf.__name__ = ["workinman", "input", "Pointer"];
    Gf.prototype = {
        dispose: function() { this.disposed = !0;
            this.lastPos.dispose();
            this.lastPos = null;
            this.line.dispose();
            this.swipe = this.line = null },
        begin: function(a, b) { this.line.toFloats(a, b, a, b);
            this.lastPos.to(a, b);
            this.fresh = this.down = !0;
            this.consumed = !1;
            this.swipe = xa.NONE },
        move: function(a, b) { this._updateInfo(a, b) },
        end: function(a, b) { this._updateInfo(a, b);
            this.down = !1 },
        _updateInfo: function(a, b) {
            this.lastPos.toPoint(this.line.get_p1());
            this.line.endTo(a, b, 0);
            var c = this.line.get_p0().x - this.line.get_p1().x,
                d = this.line.get_p0().y -
                this.line.get_p1().y;
            30 <= Math.abs(c) && 30 > Math.abs(d) ? this.swipe = 0 < c ? xa.LEFT : xa.RIGHT : 30 <= Math.abs(d) && 30 > Math.abs(c) ? this.swipe = 0 < d ? xa.UP : xa.DOWN : this.swipe = xa.NONE
        },
        __class__: Gf
    };
    var Ff = function(a, b, c, d) { null == d && (d = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this._p0 = new ib;
        this._p1 = new ib;
        this._normal = new ib;
        this._vector = new ib;
        this._parametricDenom = new ib;
        this.toFloats(a, b, c, d);
        this._calcProperties() };
    h["workinman.math.WMLine"] = Ff;
    Ff.__name__ = ["workinman", "math", "WMLine"];
    Ff.prototype = {
        dispose: function() {
            this._p0.dispose();
            this._p0 = null;
            this._p1.dispose();
            this._p1 = null;
            this._normal.dispose();
            this._normal = null;
            this._vector.dispose();
            this._vector = null;
            this._parametricDenom.dispose();
            this._parametricDenom = null
        },
        get_p0: function() { return this._p0 },
        get_p1: function() { return this._p1 },
        get_vector: function() { return this._vector },
        toFloats: function(a, b, c, d) { this._p0.to(a, b);
            this._p1.to(c, d);
            this._calcProperties(); return this },
        endTo: function(a, b, c) { null == c && (c = 0);
            this._p1.to(a, b, c);
            this._calcProperties() },
        _calcProperties: function() {
            this._length =
                Math.round(1E3 * Math.sqrt((this._p0.x - this._p1.x) * (this._p0.x - this._p1.x) + (this._p0.y - this._p1.y) * (this._p0.y - this._p1.y))) / 1E3;
            this._vector.to(this.get_p1().x - this.get_p0().x, this.get_p1().y - this.get_p0().y);
            this._slope = this._vector.y / this._vector.x;
            0 == this.get_vector().x && (this._slope = 1E5);
            this._yIntercept = this.get_p0().y - this._slope * this.get_p0().x;
            this._parametricDenom.to(this.get_p1().x - this.get_p0().x, this.get_p1().y - this.get_p0().y);
            this._vector.pseudoCross(this._normal);
            this._normal.normalize()
        },
        __class__: Ff,
        __properties__: { get_vector: "get_vector", get_p1: "get_p1", get_p0: "get_p0" }
    };
    var xa = h["workinman.input.data.INPUT_SWIPE"] = { __ename__: ["workinman", "input", "data", "INPUT_SWIPE"], __constructs__: ["NONE", "LEFT", "RIGHT", "UP", "DOWN"] };
    xa.NONE = ["NONE", 0];
    xa.NONE.toString = l;
    xa.NONE.__enum__ = xa;
    xa.LEFT = ["LEFT", 1];
    xa.LEFT.toString = l;
    xa.LEFT.__enum__ = xa;
    xa.RIGHT = ["RIGHT", 2];
    xa.RIGHT.toString = l;
    xa.RIGHT.__enum__ = xa;
    xa.UP = ["UP", 3];
    xa.UP.toString = l;
    xa.UP.__enum__ = xa;
    xa.DOWN = ["DOWN", 4];
    xa.DOWN.toString =
        l;
    xa.DOWN.__enum__ = xa;
    var u = function() {};
    h["workinman.WMInput"] = u;
    u.__name__ = ["workinman", "WMInput"];
    u.setDelegateUnlockWebAudio = function(a) { u._delegateUnlockWebAudio = a };
    u._delegateDispatch = function(a, b) {!1 != u.enabled && (null != u._delegateUnlockWebAudio && !1 == b && (u._delegateUnlockWebAudio(), u._delegateUnlockWebAudio = null), u.inputEvents.dispatch(a, b)) };
    u.update = function(a) {
        if (!1 != u.enabled) {
            u._findGamepad();
            null != u._gamepad && (u._gamepad.update(), u.leftStick.to(u._gamepad.leftX, u._gamepad.leftY), u.rightStick.to(u._gamepad.rightX,
                u._gamepad.rightY));
            a = 0;
            for (var b = u._inputTrackers; a < b.length;) { var c = b[a];++a;
                c.updateStatus() } u.pointer.fresh = !1;
            for (a = u.multiTouch.length; 0 < a--;) b = u.multiTouch[a], b.fresh = !1, !1 == b.down && (b.dispose(), u.multiTouch.splice(a, 1))
        }
    };
    u._findGamepad = function() {
        if (L.isFunction((be = window.navigator, G(be, be.getGamepads))))
            for (var a = 0, b = window.navigator.getGamepads(); a < b.length;) {
                var c = b[a];
                ++a;
                if (null != c && -1 < c.id.indexOf("Xbox 360 Controller")) {
                    null == u._gamepad ? u._gamepad = new Hf(c) : u._gamepad.setGamepad(c);
                    break
                }
            }
    };
    u.prime = function() { z.$KH.getKeyboard().down.connect(u._onKeyDown);
        z.$KH.getKeyboard().up.connect(u._onKeyUp);
        z.$KH.$bG.get_supported() && (z.$KH.$bG.down.connect(u._onTouchDown), z.$KH.$bG.move.connect(u._onTouchMove), z.$KH.$bG.up.connect(u._onTouchUp));
        z.$KH.$YG.down.connect(u._onPointerDown);
        z.$KH.$YG.move.connect(u._onPointerMove);
        z.$KH.$YG.up.connect(u._onPointerUp);
        z.$KH.$XG.scroll.connect(u._onScrollWheel) };
    u._onScrollWheel = function(a) { u.mouseWheel.dispatch(a) };
    u.registerInput = function(a,
        b, c, d) { u._createOrGetInputTracker(a).setKeys(b, c, d) };
    u._createOrGetInputTracker = function(a) { for (var b = 0, c = u._inputTrackers; b < c.length;) { var d = c[b];++b; if (d.type == a) return d } a = new xh(a, u._fireKeyEvent, u._isVirtualDown, u._isControllerDown);
        u._inputTrackers.push(a); return a };
    u._fireKeyEvent = function(a, b) { u._delegateDispatch(a, b) };
    u.getInputDown = function(a) { if (a == T.CLICK) return u.pointer.down; for (var b = 0, c = u._inputTrackers; b < c.length;) { var d = c[b];++b; if (d.type == a) return d.down } return !1 };
    u._onKeyDown =
        function(a) { u.keyDown.dispatch(a.key) };
    u._onKeyUp = function(a) { u.keyUp.dispatch(a.key) };
    u._isVirtualDown = function(a) { for (var b = 0, c = u._virtualDown; b < c.length;) { var d = c[b];++b; if (d == a) return !0 } return !1 };
    u.onControllerDown = function(a) { for (var b = 0, c = u._controllerDown; b < c.length;) { var d = c[b];++b; if (d == a) return } u._controllerDown.push(a) };
    u.onControllerUp = function(a) { for (var b = u._controllerDown.length; 0 < b--;)
            if (u._controllerDown[b] == a) { u._controllerDown.splice(b, 1); break } };
    u._isControllerDown = function(a) {
        for (var b =
                0, c = u._controllerDown; b < c.length;) { var d = c[b];++b; if (d == a) return !0 }
        return !1
    };
    u._onTouchDown = function(a) { u._doTouchDown(a.id, a.viewX, a.viewY) };
    u._onTouchMove = function(a) { u._doTouchMove(a.id, a.viewX, a.viewY) };
    u._onTouchUp = function(a) { u._doTouchUp(a.id, a.viewX, a.viewY) };
    u._doTouchDown = function(a, b, c) { var d = u._findTouch(a);
        null == d && (d = new Gf(a), u.multiTouch.push(d));
        d.begin(b, c) };
    u._doTouchMove = function(a, b, c) { a = u._findTouch(a);
        null != a && a.move(b, c) };
    u._doTouchUp = function(a, b, c) {
        a = u._findTouch(a);
        null !=
            a && a.end(b, c)
    };
    u._findTouch = function(a) { for (var b = 0, c = u.multiTouch; b < c.length;) { var d = c[b];++b; if (d.id == a) return d } return null };
    u._onPointerDown = function(a) { u.pointer.begin(a.viewX, a.viewY);!1 == z.$KH.$bG.get_supported() && u._doTouchDown(0, a.viewX, a.viewY);
        u._delegateDispatch(T.CLICK, !0) };
    u._onPointerMove = function(a) { u.pointer.move(a.viewX, a.viewY);!1 == z.$KH.$bG.get_supported() && u._doTouchMove(0, a.viewX, a.viewY);
        u._delegateDispatch(T.POINTER_MOVE, u.getInputDown(T.CLICK)) };
    u._onPointerUp = function(a) {
        u.pointer.end(a.viewX,
            a.viewY);
        !1 == z.$KH.$bG.get_supported() && u._doTouchUp(0, a.viewX, a.viewY);
        u._delegateDispatch(T.CLICK, !1)
    };
    var Gb = h["workinman.LOCALIZATION_FORMAT"] = { __ename__: ["workinman", "LOCALIZATION_FORMAT"], __constructs__: ["TRADITIONAL_XML", "STRINGS_JS", "STRINGS_JSON"] };
    Gb.TRADITIONAL_XML = ["TRADITIONAL_XML", 0];
    Gb.TRADITIONAL_XML.toString = l;
    Gb.TRADITIONAL_XML.__enum__ = Gb;
    Gb.STRINGS_JS = ["STRINGS_JS", 1];
    Gb.STRINGS_JS.toString = l;
    Gb.STRINGS_JS.__enum__ = Gb;
    Gb.STRINGS_JSON = ["STRINGS_JSON", 2];
    Gb.STRINGS_JSON.toString =
        l;
    Gb.STRINGS_JSON.__enum__ = Gb;
    var yh = function(a, b, c, d, e, f, g) { this.id = a;
        this.string = this._sanitizeString(b);
        this.fontName = c;
        this.scale = d;
        this.offsetX = e;
        this.offsetY = f;
        this.subtitleTime = g };
    h["workinman.localization.LocalizationData"] = yh;
    yh.__name__ = ["workinman", "localization", "LocalizationData"];
    yh.prototype = { dispose: function() { this.fontName = this.string = this.id = null }, _sanitizeString: function(a) { a = Z.replace(a, "<br>", "\n"); return a = Z.replace(a, "\\n", "\n") }, __class__: yh };
    var ta = function() {};
    h["workinman.WMLocalize"] =
        ta;
    ta.__name__ = ["workinman", "WMLocalize"];
    ta.parseLocalization = function(a) {
        null == a && (a = "");
        if (null == a || "" == a) a = "translation.xml";
        var b = M.getXML(a);
        a = Gb.TRADITIONAL_XML;
        b.has.resolve("format") && (a = ga.createEnum(Gb, b.att.resolve("format")));
        ta.defaultFont = b.att.resolve("defaultFont");
        ta.rtl = !1;
        b.has.resolve("rtl") && (ta.rtl = "true" == b.att.resolve("rtl"));
        ta.subtitlesEnabled = !1;
        b.has.resolve("sub") && (ta.subtitlesEnabled = "true" == b.att.resolve("sub"));
        switch (a[1]) {
            case 0:
                a = "";
                for (b = b.nodes.resolve("string").iterator(); null !=
                    b.head;) { var c;
                    b.val = b.head[0];
                    b.head = b.head[1];
                    c = b.val;
                    a = c.att.resolve("id");
                    ta._localizedData.exists(a) || ta._addLocalizationData(a, c.get_innerData(), c.has.resolve("fontName") ? c.att.resolve("fontName") : ta.defaultFont, c.has.resolve("fontScale") ? c.att.resolve("fontScale") : "1", c.has.resolve("offsetX") ? c.att.resolve("offsetX") : "0", c.has.resolve("offsetY") ? c.att.resolve("offsetY") : "0", c.has.resolve("subTime") ? c.att.resolve("subTime") : "-1") }
                break;
            case 2:
                for (a = b.nodes.resolve("json").iterator(); null != a.head;) {
                    a.val =
                        a.head[0];
                    a.head = a.head[1];
                    b = JSON.parse(M.getFile(a.val.get_innerData()).toString());
                    c = 0;
                    for (var d = L.fields(b.strings); c < d.length;) { var e = d[c];++c; var f = L.field(b.strings, e);
                        null != f.value ? ta._addLocalizationData(e, f.value, null == f.fontName ? "" : f.fontName, null == f.fontScale ? "1" : f.fontScale, null == f.offsetX ? "0" : f.offsetX, null == f.offsetY ? "0" : f.offsetY, null == f.subTime ? "-1" : f.subTime) : ta._addLocalizationData(e, f, "", "1", "0", "0", "-1") }
                }
        }
    };
    ta._addLocalizationData = function(a, b, c, d, e, f, g) {
        ta._localizedData.exists(a) &&
            ta._localizedData.get(a).dispose();
        b = new yh(a, b, c, parseFloat(d), parseFloat(e), parseFloat(f), parseFloat(g));
        ta._localizedData.set(a, b);
        b
    };
    ta.getLocalizeData = function(a) { return !1 == ta._localizedData.exists(a) ? null : ta._localizedData.get(a) };
    var S = function() {};
    h["workinman.WMRandom"] = S;
    S.__name__ = ["workinman", "WMRandom"];
    S.random = function(a) { null == a && (a = ""); return null == a || "" == a || null == S._seeds.get(a) ? Math.random() : S._seeds.get(a).random() };
    S.randomFloat = function(a, b, c) {
        null == c && (c = "");
        return a + S.random(c) *
            (b - a)
    };
    S.randomInt = function(a, b, c) { null == c && (c = ""); return Math.floor(S.randomFloat(a, b + 1, c)) };
    var mc = function() {};
    h["workinman.WMSaving"] = mc;
    mc.__name__ = ["workinman", "WMSaving"];
    mc.dataLoad = function(a) { a = mc._getLocal(a); var b = a.data;
        a.dispose(); return b };
    mc.dataSave = function(a, b) { var c = mc._getLocal(a);
        c.data = b;
        c.flush();
        c.dispose() };
    mc._getLocal = function(a) { var b = new zh(a); try { var c = window.localStorage.getItem(a);
            null != c && "" != c && (b.data = $a.run(c)) } catch (d) { d instanceof A && (d = d.val), null } return b };
    var jb = h["workinman.sound.VO_STATUS"] = { __ename__: ["workinman", "sound", "VO_STATUS"], __constructs__: ["STOPPED", "PLAYING", "PAUSED"] };
    jb.STOPPED = ["STOPPED", 0];
    jb.STOPPED.toString = l;
    jb.STOPPED.__enum__ = jb;
    jb.PLAYING = ["PLAYING", 1];
    jb.PLAYING.toString = l;
    jb.PLAYING.__enum__ = jb;
    jb.PAUSED = ["PAUSED", 2];
    jb.PAUSED.toString = l;
    jb.PAUSED.__enum__ = jb;
    var Hd = function() { this._objectTrackers = [] };
    h["workinman.tween.Tweener"] = Hd;
    Hd.__name__ = ["workinman", "tween", "Tweener"];
    Hd.prototype = {
        dispose: function() {
            for (var a = 0, b =
                    this._objectTrackers; a < b.length;) { var c = b[a];++a;
                c.dispose() } this._objectTrackers = null
        },
        update: function(a) { for (var b = this._objectTrackers.length; 0 < b--;) { var c = this._objectTrackers[b];
                c.update(a);
                c.get_isComplete() && (c.dispose(), this._objectTrackers.splice(b, 1)) } },
        tween: function(a, b) {
            null == a.overwrite && (a.overwrite = !1);
            null == a.thread && (a.thread = "def");
            for (var c = new Ah(a, b), d = 0, e = this._objectTrackers; d < e.length;) {
                var f = e[d];
                ++d;
                if (f.target == a.target) return a.overwrite && f.stopThread(a.thread), f.queueStep(c,
                    a.thread), c
            }
            d = new Bh(a.target);
            this._objectTrackers.push(d);
            d.queueStep(c, a.thread);
            return c
        },
        stop: function(a) { for (var b = this._objectTrackers.length; 0 < b--;)
                if (this._objectTrackers[b].target == a) { this._objectTrackers[b].dispose();
                    this._objectTrackers.splice(b, 1); break } },
        stopAllTweens: function() { for (; 0 < this._objectTrackers.length;) this._objectTrackers.pop().dispose() },
        __class__: Hd
    };
    var n = function() {};
    h["workinman.WMSound"] = n;
    n.__name__ = ["workinman", "WMSound"];
    n.__properties__ = { set_muteAll: "set_muteAll" };
    n.set_muteAll = function(a) { n.muteAll = a;
        n._toggleMute(); return a };
    n._toggleMute = function() { n._getMuteState(n.muteMusic) ? n.stopMusic() : n.playMusic(n._musicId, n._musicGain);
        n._getMuteState(n.muteSfx) && n.stopAllSound();
        n._getMuteState(n.muteVo) && n.stopVO() };
    n._setVOState = function(a) {
        if (a != n._stateVo) {
            n._stateVo = a;
            switch (n._stateVo[1]) {
                case 0:
                    null != n._music && n._tween.tween({ target: n._music, duration: 0.15, overwrite: !0, ease: v.inOutQuad }, { volume: 1 });
                    break;
                case 1:
                    null != n._music && n._tween.tween({
                        target: n._music,
                        duration: 0.15,
                        overwrite: !0,
                        ease: v.inOutQuad
                    }, { volume: 0.25 })
            }
            n.voStatus.dispatch(a)
        }
    };
    n._getMuteState = function(a) { return n.muteAll || n.muteSystem || a };
    n.playMusic = function(a, b, c) { null == c && (c = -1);
        null == b && (b = 1);
        null == a || "" == a || n._musicId == a && null != n._music || (n._musicId = a, n._musicGain = b, n.stopMusic(c, n._finishPlayingMusic)) };
    n._finishPlayingMusic = function() { n._music = n._playAudio(n._musicId, n._musicGain, null, !0, n.muteMusic) };
    n.stopMusic = function(a, b) {
        null == a && (a = -1);
        0 < a && null != n._music ? n._tween.tween({
            target: n._music,
            duration: a,
            overwrite: !0,
            ease: v.linear,
            complete: function() { n._disposeMusic();
                null != b && b() }
        }, { volume: 0 }) : (n._disposeMusic(), null != b && b())
    };
    n._disposeMusic = function() { null != n._music && (n._music.dispose(), n._music = null) };
    n.playSound = function(a, b, c, d) { null == d && (d = !1);
        null == b && (b = 1);
        a = n._playAudio(a, b, c, d, n.muteSfx); if (null == a) return null;
        n._sound.push(a); return a };
    n.stopAllSound = function() { for (; 0 < n._sound.length;) n._sound.pop().dispose() };
    n.stopSound = function(a) {
        for (var b = n._sound.length; 0 < b--;) n._sound[b].id ==
            a && (n._sound[b].dispose(), n._sound.splice(b, 1))
    };
    n.stopVO = function() { for (; 0 < n._voQueue.length;) n._voQueue.pop().dispose();
        null != n._vo && (n._vo.dispose(), n._vo = null) };
    n._playAudio = function(a, b, c, d, e) { if (null == a || "" == a || n._getMuteState(e)) return null != c && c(), null;
        e = M.getSound(a); return null == e ? (null != c && c(), null) : d ? new If(a, e.loop(b), c) : new If(a, e.play(b), c) };
    n.update = function(a) {
        n._tween.update(a);
        for (var b = n._sound.length; 0 < b--;) {
            var c = n._sound[b];
            if (c.isComplete || c.disposed) c.dispose(), n._sound.splice(b,
                1)
        }
        null != n._music && (n._music.isComplete || n._music.disposed) && (n._music.dispose(), n._music = null);
        switch (n._stateVo[1]) {
            case 0:
            case 2:
                n._checkVOQueue(a); break;
            case 1:
                null != n._vo && (n._vo.isComplete || n._vo.disposed) && (n._vo.dispose(), n._vo = null), null == n._vo && n._checkVOQueue(a) }
    };
    n._checkVOQueue = function(a) {
        if (0 < n._voQueue.length)
            if (n._voQueue[0].delay -= a, 0 > n._voQueue[0].delay) {
                a = n._voQueue.shift();
                var b = a.call;
                n.subtitleQueue.push(a.localization);
                n._vo = n._playAudio(a.id, 1, function() { null != b && b();
                        n.subtitleQueue.shift() },
                    !1, n.muteVo);
                a.dispose();
                n._setVOState(jb.PLAYING)
            } else n._setVOState(jb.PAUSED);
        else n._setVOState(jb.STOPPED)
    };
    var ka = function() {};
    h["workinman.WMTimer"] = ka;
    ka.__name__ = ["workinman", "WMTimer"];
    ka.update = function(a) { if (!ka._paused)
            for (var b = ka._timers.length; 0 < b--;) ka._timers[b].update(a), ka._timers[b].get_isComplete() && (ka._timers[b].dispose(!0), ka._timers.splice(b, 1)) };
    ka.start = function(a, b, c) { null == c && (c = "");
        null != a && ka._timers.push(new Ch(a, b, "" == c ? "def" + ka._uniqueInc++ : c)) };
    ka.stop = function(a,
        b) { null == b && (b = !1); for (var c = ka._timers.length; 0 < c--;)
            if (ka._timers[c].id == a) { ka._timers[c].dispose(b);
                ka._timers.splice(c, 1); break } };
    var Ch = function(a, b, c) { this.id = c;
        this._callback = a;
        this._timer = b;
        this.paused = !1 };
    h["workinman.WMTimerData"] = Ch;
    Ch.__name__ = ["workinman", "WMTimerData"];
    Ch.prototype = {
        dispose: function(a) { a && this._fireCallback();
            this._callback = this.id = null },
        get_isComplete: function() { return 0 >= this._timer },
        update: function(a) { this.paused || (this._timer -= a, 0 > this._timer && this._fireCallback()) },
        _fireCallback: function() { if (null != this._callback) { var a = this._callback;
                this._callback = null;
                a() } },
        __class__: Ch,
        __properties__: { get_isComplete: "get_isComplete" }
    };
    var vh = function(a) { this.texturePacks = [];
        this.id = a };
    h["workinman.assets.WMAssetPack"] = vh;
    vh.__name__ = ["workinman", "assets", "WMAssetPack"];
    vh.prototype = { dispose: function() { this.id = this.texturePacks = null }, __class__: vh };
    var Dh = function(a, b, c, d) {
        null == c && (c = -1);
        null == b && (b = -1);
        this.frameIds = [];
        this.id = a;
        this.reverse = !1;
        if (null != d) {
            for (a = 0; a < d.length;) b =
                d[a], ++a, this.frameIds.push(b);
            this.startFrame = 1;
            this.endFrame = this.frameIds.length
        } else this.startFrame = b, this.endFrame = c, b > c && (this.reverse = !0, this.startFrame = c, this.endFrame = b)
    };
    h["workinman.display.AnimationDef"] = Dh;
    Dh.__name__ = ["workinman", "display", "AnimationDef"];
    Dh.prototype = { dispose: function() { this.id = this.frameIds = null }, __class__: Dh };
    var Eh = function(a, b, c) { this.name = a;
        this.loops = b;
        this.force = c };
    h["workinman.display.AnimationQueue"] = Eh;
    Eh.__name__ = ["workinman", "display", "AnimationQueue"];
    Eh.prototype = { dispose: function() { this.name = null }, __class__: Eh };
    var Fh = function(a, b) { this._worldRoot = a;
        this.focalLength = 300;
        this.set_rotation(0);
        this.center = b;
        this.x = this.y = this.z = 0;
        this._scratchPoint = new Ab };
    h["workinman.display.Camera"] = Fh;
    Fh.__name__ = ["workinman", "display", "Camera"];
    Fh.prototype = {
        dispose: function() { this._scratchPoint = null },
        set_rotation: function(a) { this.rotation = a;
            this._worldRoot.rotation.set__(a); return this.rotation },
        update: function() {
            this.center ? (this._worldRoot.x.set__(f.STAGE_ORIGIN_X +
                f.get_STAGE_CENTER_X()), this._worldRoot.y.set__(f.STAGE_ORIGIN_Y + f.get_STAGE_CENTER_Y())) : (this._worldRoot.x.set__(0), this._worldRoot.y.set__(0))
        },
        getWorldPositionOfScreenPoint: function(a, b, c, d) {
            this._worldRoot.getViewMatrix().inverseTransform(a, b, this._scratchPoint);
            a = 1 / (this.focalLength / (this.focalLength - (this.z - c)));
            d.x = this.x + (f.STAGE_ORIGIN_X + f.get_STAGE_CENTER_X() + (this._scratchPoint.x - (f.STAGE_ORIGIN_X + f.get_STAGE_CENTER_X())) * a);
            d.y = this.y + (f.STAGE_ORIGIN_Y + f.get_STAGE_CENTER_Y() + (this._scratchPoint.y -
                (f.STAGE_ORIGIN_Y + f.get_STAGE_CENTER_Y())) * a);
            return d
        },
        __class__: Fh,
        __properties__: { set_rotation: "set_rotation" }
    };
    var Jf = function(a) { U.call(this);
        this._depthFunction = a };
    h["workinman.display.DepthComponent"] = Jf;
    Jf.__name__ = ["workinman", "display", "DepthComponent"];
    Jf.__super__ = U;
    Jf.prototype = p(U.prototype, { get_entitySlot: function() { return 18 }, get_depth: function() { return this._depthFunction() }, __class__: Jf, __properties__: p(U.prototype.__properties__, { get_depth: "get_depth" }) });
    var fa = function(a) {
        this.root =
            new aa;
        this.root.add(new Jf(G(this, this.depth)));
        this.rootSprite = new E;
        this.root.add(this.rootSprite);
        this.rootSprite.set_pixelSnapping(!1);
        this.parent = null;
        this.useCamera = this.usePerspective = this.set_visible(!0);
        this.x = this.y = this.z = this.offsetX = this.offsetY = this.offsetZ = this.set_rotation(0);
        this.set_alpha(this.scaleX = this.scaleY = 1);
        this.originX = this.originY = 0.5;
        null != a && (null != a.useCamera && (this.useCamera = a.useCamera), null != a.usePerspective && (this.usePerspective = a.usePerspective), null != a.x && (this.x =
                a.x), null != a.y && (this.y = a.y), null != a.z && (this.z = a.z), null != a.alpha && this.set_alpha(a.alpha), null != a.origin && (this.originX = this.originY = a.origin), null != a.originX && (this.originX = a.originX), null != a.originY && (this.originY = a.originY), null != a.offsetX && (this.offsetX = a.offsetX), null != a.offsetY && (this.offsetY = a.offsetY), null != a.offsetZ && (this.offsetZ = a.offsetZ), null != a.scale && (this.scaleX = this.scaleY = a.scale), null != a.scaleX && (this.scaleX = a.scaleX), null != a.scaleY && (this.scaleY = a.scaleY), null != a.rotation && this.set_rotation(a.rotation),
            null != a.visible && this.set_visible(a.visible), null != a.tint && this.set_tint(a.tint));
        this._children = [];
        this._addEventListeners();
        this._buildAsset(null != a && null != a.asset ? a.asset : "")
    };
    h["workinman.display.ElementBase"] = fa;
    fa.__name__ = ["workinman", "display", "ElementBase"];
    fa.prototype = {
        dispose: function() { for (var a = 0, b = this._children; a < b.length;) { var c = b[a];++a;
                c.dispose() } this._removeEventListeners();
            this.root.dispose();
            this.rootSprite.dispose();
            this._children = this.rootSprite = null },
        depth: function() { return this.y },
        get_scale: function() { return this.scaleX },
        set_scale: function(a) { return this.scaleX = this.scaleY = a },
        set_alpha: function(a) { this.alpha = this.rootSprite.alpha.set__(a); return a },
        set_rotation: function(a) { this.rotation = this.rootSprite.rotation.set__(a); return a },
        get_visible: function() { return 0 != (this.rootSprite.$B & 2) },
        set_visible: function(a) { this.rootSprite.set_visible(a); return a },
        set_tint: function(a) { this.rootSprite.setTint(a); return this.tint = a },
        get_width: function() { return 0 },
        get_height: function() { return 0 },
        _buildAsset: function(a) {},
        get_sprite: function() { return null },
        _addEventListeners: function() {},
        _removeEventListeners: function() {},
        addChild: function(a) { null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            this._children.push(a);
            this.root.addChild(a.root); return a },
        removeChild: function(a) { I.remove(this._children, a) && (this.root.removeChild(a.root), a.parent = null); return a },
        update: function(a) {
            for (var b = this._children.length; 0 < b--;) {
                var c = this._children[b];
                c.update(a);
                c.doDelete && (c.dispose(), this._children.splice(b,
                    1))
            }
        },
        render: function(a) {
            if (!1 != this.get_visible()) {
                var b, c = b = 0,
                    d = 1;
                if (null == a || !1 == this.useCamera || !1 == this.usePerspective) b = this.x + this.offsetX, c = this.y + this.offsetY, d = 1;
                else {
                    b = this.z - a.z;
                    if (b < -a.focalLength || !1 == this.get_visible()) { this.rootSprite.set_visible(!1); return } d = 0 >= a.focalLength ? 1 : a.focalLength / (a.focalLength + b);
                    b = f.STAGE_ORIGIN_X + f.get_STAGE_CENTER_X() - a._worldRoot.x.$tG + (this.x - a.x + this.offsetX - (f.STAGE_ORIGIN_X + f.get_STAGE_CENTER_X() - a._worldRoot.x.$tG)) * d;
                    c = f.STAGE_ORIGIN_Y + f.get_STAGE_CENTER_Y() -
                        a._worldRoot.y.$tG + (this.y - a.y + this.offsetY - (f.STAGE_ORIGIN_Y + f.get_STAGE_CENTER_Y() - a._worldRoot.y.$tG)) * d
                }
                this.rootSprite.x.set__(b);
                this.rootSprite.y.set__(c);
                this.rootSprite.scaleX.set__(this.scaleX * d);
                this.rootSprite.scaleY.set__(this.scaleY * d);
                a = 0;
                for (b = this._children; a < b.length;) c = b[a], ++a, c.render(null)
            }
        },
        __class__: fa,
        __properties__: {
            get_height: "get_height",
            get_width: "get_width",
            set_tint: "set_tint",
            set_visible: "set_visible",
            get_visible: "get_visible",
            set_alpha: "set_alpha",
            set_rotation: "set_rotation",
            set_scale: "set_scale",
            get_scale: "get_scale",
            get_sprite: "get_sprite"
        }
    };
    var t = function(a) { fa.call(this, a) };
    h["workinman.display.ElementSprite"] = t;
    t.__name__ = ["workinman", "display", "ElementSprite"];
    t.__super__ = fa;
    t.prototype = p(fa.prototype, {
        get_sprite: function() { return this._imageSprite },
        dispose: function() { null != this._imageSprite && (this._imageSprite.dispose(), this._imageSprite = null);
            null != this._imageEntity && (this._imageEntity.dispose(), this._imageEntity = null);
            fa.prototype.dispose.call(this) },
        get_width: function() {
            return null ==
                this._imageSprite ? 0 : this._imageSprite.getNaturalWidth()
        },
        get_height: function() { return null == this._imageSprite ? 0 : this._imageSprite.getNaturalHeight() },
        setAsset: function(a) { this._buildAsset(a) },
        _buildAsset: function(a) { null == this._imageEntity && (this._imageEntity = new aa, this.root.addChild(this._imageEntity));
            null != a && "" != a && (this._imageSprite = M.getSprite(a), this._imageEntity.add(this._imageSprite)) },
        render: function(a) {
            null != this._imageSprite && (this._imageSprite.x.set__(-(this.originX * this.get_width())),
                this._imageSprite.y.set__(-(this.originY * this.get_height())));
            fa.prototype.render.call(this, a)
        },
        __class__: t
    });
    var Xc = function(a) { this._animations = [];
        this._queuedAnimations = [];
        this.eventAnimationComplete = gc._new();
        this._currentAnimDef = null;
        this._lastFrame = -1;
        this._currentFrame = 0;
        this.currentAnimation = "";
        this.fps = 24;
        this._animationStopped = !0;
        this._loopComplete = !1;
        this._realFrame = 0;
        fa.call(this, a) };
    h["workinman.display.ElementAnimated"] = Xc;
    Xc.__name__ = ["workinman", "display", "ElementAnimated"];
    Xc.__super__ =
        t;
    Xc.prototype = p(t.prototype, {
        dispose: function() { for (var a = 0, b = this._animations; a < b.length;) { var c = b[a];++a;
                c.dispose() } this._currentAnimDef = this._animations = null;
            this.clearQueue();
            a = 0; for (b = this._queuedAnimations; a < b.length;) c = b[a], ++a, c.dispose();
            this._queuedAnimations = null;
            this.eventAnimationComplete.dispose();
            this.currentAnimation = this.eventAnimationComplete = null;
            t.prototype.dispose.call(this) },
        setFps: function(a) { this.fps = a; return this },
        get_animationRatio: function() {
            return (this._currentFrame -
                this._currentAnimDef.startFrame) / (this._currentAnimDef.endFrame - this._currentAnimDef.endFrame)
        },
        set_animationRatio: function(a) { this._newFrame = Math.floor(a * (this._currentAnimDef.endFrame - this._currentAnimDef.startFrame) + this._currentAnimDef.startFrame);
            this._newFrame != this._currentFrame && this.set_animationFrame(this._newFrame); return this.get_animationRatio() },
        get_animationFrame: function() { return this._currentFrame | 0 },
        set_animationFrame: function(a) {
            this._currentFrame = this._realFrame = a;
            this._setFrame(this._realFrame);
            this.stopAnimation();
            return this._currentFrame | 0
        },
        get_isPlaying: function() { return "" != this.currentAnimation && !0 == this._doLoop() && !1 == this._animationStopped },
        get_animationFrameRelative: function() { return this._currentFrame - this._currentAnimDef.startFrame | 0 },
        set_animationFrameRelative: function(a) { this._currentFrame = this._currentAnimDef.startFrame + a; return this.get_animationFrameRelative() },
        get_frames: function() { return Math.floor(this._frames) },
        removeAnimation: function(a) {
            for (var b = this._animations.length; 0 <
                b--;) this._animations[b].id == a && (this._animations[b].dispose(), this._animations.splice(b, 1))
        },
        animate: function(a, b, c) { null == c && (c = !1);
            null == b && (b = 0);
            this.clearQueue();
            this._doAnimate(a, b, c); return this },
        _doAnimate: function(a, b, c) {
            null == c && (c = !1);
            null == b && (b = 0);
            if (this.currentAnimation != a || !1 != c) null != this._animations && this.hasAnimation(a) ? (this._currentAnimDef = null, this._currentAnimDef = this._getAnimation(a), this._currentAnimDef.reverse ? (this.reverse = !0, this._currentFrame = this._currentAnimDef.endFrame) :
                (this.reverse = !1, this._currentFrame = this._currentAnimDef.startFrame), this.currentAnimation = a, this.setLoop(b), this._animationStopped = !1, this._setFrame(this._currentFrame)) : null
        },
        setLoop: function(a) { this._currentLoop = a;
            this._flagLoop = 0 == a; return this },
        stopAnimation: function() { this._animationStopped = !0 },
        startAnimation: function() { this._animationStopped = !1 },
        _getAnimation: function(a) { for (var b = 0, c = this._animations; b < c.length;) { var d = c[b];++b; if (d.id == a) return d } return null },
        hasAnimation: function(a) {
            for (var b =
                    0, c = this._animations; b < c.length;) { var d = c[b];++b; if (d.id == a) return !0 }
            return !1
        },
        queueAnimation: function(a, b, c) { null == c && (c = !1);
            null == b && (b = 0);
            this._queuedAnimations.push(new Eh(a, b, c)); return this },
        clearQueue: function() { for (; 0 < this._queuedAnimations.length;) this._queuedAnimations.pop().dispose() },
        update: function(a) { t.prototype.update.call(this, a);
            this._runAnimation(a) },
        _doLoop: function() { return 0 < this._currentLoop || this._flagLoop },
        _runAnimation: function(a) {
            this.get_isPlaying() && (this._currentFrame +=
                this.fps * a, Math.floor(this._currentFrame) > this._currentAnimDef.endFrame && (this._currentFrame = this._currentAnimDef.startFrame + (this._currentFrame - Math.floor(this._currentFrame)), this._loopComplete = !0), !0 == this._loopComplete && (this._loopComplete = !1, this._currentLoop--, !1 == this._doLoop() && (this._animationStopped = !0, this._currentFrame = this._currentAnimDef.endFrame, 0 < this._queuedAnimations.length ? (this._doAnimate(this._queuedAnimations[0].name, this._queuedAnimations[0].loops, this._queuedAnimations[0].force),
                    this._queuedAnimations[0].dispose(), this._queuedAnimations.splice(0, 1)) : (this._onAnimationComplete(), this.eventAnimationComplete.dispatch()))), this._realFrame = this.reverse ? this._currentAnimDef.endFrame - (this._currentFrame - this._currentAnimDef.startFrame) + 1 : this._currentFrame, this._realFrame != this._lastFrame && this._setFrame(this._realFrame))
        },
        _setFrame: function(a) { this.setAsset(this._currentAnimDef.frameIds[Math.floor(a - 1)]) },
        _onAnimationComplete: function() {},
        __class__: Xc,
        __properties__: p(t.prototype.__properties__, { get_frames: "get_frames", set_animationFrameRelative: "set_animationFrameRelative", get_animationFrameRelative: "get_animationFrameRelative", get_isPlaying: "get_isPlaying", set_animationFrame: "set_animationFrame", get_animationFrame: "get_animationFrame", set_animationRatio: "set_animationRatio", get_animationRatio: "get_animationRatio" })
    });
    var Hb = function(a) { Xc.call(this, a) };
    h["workinman.display.ElementAnimatedFrames"] = Hb;
    Hb.__name__ = ["workinman", "display", "ElementAnimatedFrames"];
    Hb.__super__ = Xc;
    Hb.prototype =
        p(Xc.prototype, { addAnimation: function(a, b) { this.removeAnimation(a);
                this._animations.push(new Dh(a, -1, -1, b)); return this }, _setFrame: function(a) { this.setAsset(this._currentAnimDef.frameIds[Math.floor(a - 1)]) }, __class__: Hb });
    var Ga = function(a) {
        fa.call(this, a);
        this.set_color(16711680);
        this.set_sizeX(this.set_sizeY(10));
        null != a && (this.set_color(a.color), this.set_sizeX(a.width), this.set_sizeY(a.height));
        null != this._fillEntity && (this.root.removeChild(this._fillEntity), this._fillEntity.dispose(), this._fillSprite =
            this._fillEntity = null);
        this._fillEntity = new aa;
        this._fillSprite = new ud(this.color, this.sizeX, this.sizeY);
        this._fillEntity.add(this._fillSprite);
        this.root.addChild(this._fillEntity, !1)
    };
    h["workinman.display.ElementFill"] = Ga;
    Ga.__name__ = ["workinman", "display", "ElementFill"];
    Ga.__super__ = fa;
    Ga.prototype = p(fa.prototype, {
        get_sprite: function() { return this._fillSprite },
        dispose: function() {
            null != this._fillSprite && (this._fillSprite.dispose(), this._fillSprite = null);
            null != this._fillEntity && (this._fillEntity.dispose(),
                this._fillEntity = null);
            fa.prototype.dispose.call(this)
        },
        render: function(a) { null != this._fillSprite && (this._fillSprite.x.set__(-(this.originX * this.sizeX)), this._fillSprite.y.set__(-(this.originY * this.sizeY)));
            fa.prototype.render.call(this, a) },
        get_width: function() { return null == this._fillSprite ? 0 : this._fillSprite.getNaturalWidth() },
        get_height: function() { return null == this._fillSprite ? 0 : this._fillSprite.getNaturalHeight() },
        set_color: function(a) {
            this.color = a;
            null != this._fillSprite && (this._fillSprite.color =
                this.color);
            return this.color
        },
        set_sizeX: function(a) { this.sizeX = a;
            null != this._fillSprite && this._fillSprite.setSize(this.sizeX, this.sizeY); return this.sizeX },
        set_sizeY: function(a) { this.sizeY = a;
            null != this._fillSprite && this._fillSprite.setSize(this.sizeX, this.sizeY); return this.sizeY },
        __class__: Ga,
        __properties__: p(fa.prototype.__properties__, { set_sizeY: "set_sizeY", set_sizeX: "set_sizeX", set_color: "set_color" })
    });
    var Gh = function(a, b) {
        null == b && (b = !0);
        this._layerMain = this.root = a;
        this._rootSprite = new E;
        this.root.add(this._rootSprite);
        this.camera = new Fh(this._rootSprite, b);
        this._layers = new W;
        this._elements = []
    };
    h["workinman.display.ElementManager"] = Gh;
    Gh.__name__ = ["workinman", "display", "ElementManager"];
    Gh.prototype = {
        dispose: function() { for (var a = 0, b = this._elements; a < b.length;) { var c = b[a];++a;
                c.dispose() } for (a = this._layers.iterator(); a.hasNext();) a.next().dispose();
            this._elements = this.root = this._layerMain = this._layers = null;
            this.camera.dispose();
            this.camera = null;
            this._rootSprite.dispose();
            this._rootSprite = null },
        addLayer: function(a,
            b) { null == b && (b = !1); var c = new aa; if (this._layerMain == this.root || b) this._layerMain = c;
            this.root.addChild(c);
            this._layers.set(a, c);
            c },
        sortLayer: function(a, b) { null != this._layers.get(a) && (null == b && (b = G(this, this._defaultSort)), this._layers.get(a).sortChildren(b)) },
        _defaultSort: function(a, b) { var c = a.$PG[18],
                d = b.$PG[18]; return null == c ? 1 : null == d || c.get_depth() < d.get_depth() ? -1 : c.get_depth() > d.get_depth() ? 1 : 0 },
        addElement: function(a, b) {
            var c = null,
                c = null == b || 1 > b.length ? this._layerMain : this._layers.get(b);
            c.addChild(a.root);
            0 > this._elements.indexOf(a) && this._elements.push(a);
            a.render(this.camera);
            return a
        },
        removeElement: function(a) { I.remove(this._elements, a) && a.root.parent.removeChild(a.root); return a },
        update: function(a) { this.camera.update(); for (var b = this._elements.length; 0 < b--;) { var c = this._elements[b];
                c.update(a);
                c.doDelete ? (c.dispose(), this._elements.splice(b, 1)) : c.render(this.camera) } },
        __class__: Gh
    };
    var Na = function(a) {
        fa.call(this, a);
        this._align = ea.Center;
        this.set_wrapWidth(0);
        this.set_letterSpacing(0);
        this.set_lineSpacing(0);
        null != a && (null != a.align && (this._align = a.align), null != a.color && this.set_color(a.color), null != a.wrapWidth && this.set_wrapWidth(a.wrapWidth), null != a.lineSpacing && this.set_lineSpacing(a.lineSpacing), null != a.letterSpacing && this.set_letterSpacing(a.letterSpacing), this.setText(a.text), this.setVariables(a.vars))
    };
    h["workinman.display.ElementText"] = Na;
    Na.__name__ = ["workinman", "display", "ElementText"];
    Na.__super__ = fa;
    Na.prototype = p(fa.prototype, {
        dispose: function() {
            this._textSprite.dispose();
            this._data = this._textSprite =
                null;
            fa.prototype.dispose.call(this)
        },
        get_width: function() { return null == this._textSprite ? 0 : this._textSprite.getNaturalWidth() },
        get_height: function() { return null == this._textSprite ? 0 : this._textSprite.getNaturalHeight() },
        set_color: function(a) { return this.color = this.set_tint(a) },
        set_wrapWidth: function(a) { this.wrapWidth = a;
            null != this._textSprite && this._textSprite.setWrapWidth(a); return a },
        set_letterSpacing: function(a) { this.letterSpacing = a;
            null != this._textSprite && this._textSprite.setLetterSpacing(a); return a },
        set_lineSpacing: function(a) { this.lineSpacing = a;
            null != this._textSprite && this._textSprite.setLineSpacing(a); return a },
        setText: function(a) {
            null != this._textSprite && (this._textEntity.remove(this._textSprite), this._textSprite.dispose(), this._textSprite = null, this.root.removeChild(this._textEntity), this._textEntity.dispose(), this._data = this._textEntity = null);
            this._data = ta.getLocalizeData(a);
            this._text = this._data.string;
            this._textEntity = new aa;
            this._textSprite = new Ub(M.getFont(this._data.fontName), this._text);
            this._textEntity.add(this._textSprite);
            this._textSprite.set_align(this._align);
            this._textSprite.setWrapWidth(this.wrapWidth).setLetterSpacing(this.letterSpacing).setLineSpacing(this.lineSpacing);
            this._textSprite.scaleX.set__(this._data.scale);
            this._textSprite.scaleY.set__(this._data.scale);
            this._textSprite.x.set__(this._data.offsetX);
            this._textSprite.y.set__(this._data.offsetY);
            this.root.addChild(this._textEntity)
        },
        _replaceVars: function(a) {
            for (var b = "", c = this._data.string.split("}"), d = 0; d < c.length;) {
                var e =
                    c[d];
                ++d;
                e = e.split("{");
                b += e[0];
                1 < e.length && (e = H.parseInt(e[1]), b = null != a && a.length > e ? b + H.string(a[e]) : b + ("[Missing {" + e + "}]"))
            }
            return b
        },
        setVariables: function(a) { null != this._data && (this._text = this._replaceVars(a), this._textSprite.set_text(this._text)) },
        get_sprite: function() { return this._textSprite },
        render: function(a) {
            if (null != this._textSprite)
                if (this._textSprite.x.set__(-(this.originX * this.get_width() * this._data.scale) + this._data.offsetX), this._textSprite.y.set__(-(this.originY * this.get_height() *
                        this._data.scale) + this._data.offsetY), 0 == this.wrapWidth) switch (this._align[1]) {
                    case 1:
                        var b = this._textSprite.x;
                        b.set__(b.$tG + this.get_width() * this._data.scale * 0.5); break;
                    case 2:
                        b = this._textSprite.x, b.set__(b.$tG + this.get_width() * this._data.scale) } else switch (b = this._textSprite.setWrapWidth(0).getNaturalWidth(), this._textSprite.setWrapWidth(this.wrapWidth), this._align[1]) {
                    case 0:
                        var c = this._textSprite.x;
                        c.set__(c.$tG + (this.get_width() * this._data.scale * 0.5 - 0.5 * b));
                        break;
                    case 2:
                        c = this._textSprite.x,
                            c.set__(c.$tG - (this.get_width() * this._data.scale * 0.5 - 0.5 * b))
                }
            fa.prototype.render.call(this, a)
        },
        __class__: Na,
        __properties__: p(fa.prototype.__properties__, { set_lineSpacing: "set_lineSpacing", set_letterSpacing: "set_letterSpacing", set_wrapWidth: "set_wrapWidth", set_color: "set_color" })
    });
    var Yc = function(a, b) {
        this.gamepad = a;
        this.type = b;
        this._buttons = new md;
        this._addButton(s.A);
        this._addButton(s.B);
        this._addButton(s.X);
        this._addButton(s.Y);
        this._addButton(s.RB);
        this._addButton(s.LB);
        this._addButton(s.RT);
        this._addButton(s.LT);
        this._addButton(s.DPAD_UP);
        this._addButton(s.DPAD_DOWN);
        this._addButton(s.DPAD_LEFT);
        this._addButton(s.DPAD_RIGHT);
        this._addButton(s.LSTICK_UP);
        this._addButton(s.LSTICK_DOWN);
        this._addButton(s.LSTICK_LEFT);
        this._addButton(s.LSTICK_RIGHT);
        this._addButton(s.RSTICK_UP);
        this._addButton(s.RSTICK_DOWN);
        this._addButton(s.RSTICK_LEFT);
        this._addButton(s.RSTICK_RIGHT);
        this._addButton(s.START);
        this._addButton(s.SELECT);
        this._addButton(s.LSTICK_BUTTON);
        this._addButton(s.RSTICK_BUTTON)
    };
    h["workinman.input.GamepadBase"] = Yc;
    Yc.__name__ = ["workinman", "input", "GamepadBase"];
    Yc.prototype = {
        setGamepad: function(a) { this.gamepad = a },
        update: function() { this.leftX = this.leftY = this.rightX = this.rightY = 0 },
        _normalizeAxis: function(a) { a = Math.floor(100 * a) / 100;
            0.15 > Math.abs(a) && (a = 0); return a },
        _addButton: function(a) { this._buttons.set(a, !1);!1 },
        _testButton: function(a, b) {
            !1 == this._buttons.get(a) && b ? (this._buttons.set(a, !0), !0, u.onControllerDown(a)) : !0 == this._buttons.get(a) && !1 == b && (this._buttons.set(a, !1),
                !1, u.onControllerUp(a))
        },
        __class__: Yc
    };
    var Hf = function(a) { Yc.call(this, a, zc.XBOX_360);
        this.leftX = this.leftY = this.rightX = this.rightY = 0 };
    h["workinman.input.GamepadXbox360"] = Hf;
    Hf.__name__ = ["workinman", "input", "GamepadXbox360"];
    Hf.__super__ = Yc;
    Hf.prototype = p(Yc.prototype, {
        update: function() {
            Yc.prototype.update.call(this);
            this.leftX = this._normalizeAxis(this.gamepad.axes[0]);
            this.leftY = this._normalizeAxis(this.gamepad.axes[1]);
            this.rightX = this._normalizeAxis(this.gamepad.axes[2]);
            this.rightY = this._normalizeAxis(this.gamepad.axes[3]);
            this._testButton(s.A, V.__cast(this.gamepad.buttons[0], GamepadButton).pressed);
            this._testButton(s.B, V.__cast(this.gamepad.buttons[1], GamepadButton).pressed);
            this._testButton(s.X, V.__cast(this.gamepad.buttons[2], GamepadButton).pressed);
            this._testButton(s.Y, V.__cast(this.gamepad.buttons[3], GamepadButton).pressed);
            this._testButton(s.LB, V.__cast(this.gamepad.buttons[4], GamepadButton).pressed);
            this._testButton(s.RB, V.__cast(this.gamepad.buttons[5], GamepadButton).pressed);
            this._testButton(s.LT, V.__cast(this.gamepad.buttons[6],
                GamepadButton).pressed);
            this._testButton(s.RT, V.__cast(this.gamepad.buttons[7], GamepadButton).pressed);
            this._testButton(s.SELECT, V.__cast(this.gamepad.buttons[8], GamepadButton).pressed);
            this._testButton(s.START, V.__cast(this.gamepad.buttons[9], GamepadButton).pressed);
            this._testButton(s.LSTICK_BUTTON, this.gamepad.buttons[10].pressed);
            this._testButton(s.RSTICK_BUTTON, this.gamepad.buttons[11].pressed);
            this._testButton(s.DPAD_UP, V.__cast(this.gamepad.buttons[12], GamepadButton).pressed);
            this._testButton(s.DPAD_DOWN,
                V.__cast(this.gamepad.buttons[13], GamepadButton).pressed);
            this._testButton(s.DPAD_LEFT, V.__cast(this.gamepad.buttons[14], GamepadButton).pressed);
            this._testButton(s.DPAD_RIGHT, V.__cast(this.gamepad.buttons[15], GamepadButton).pressed);
            this._testButton(s.LSTICK_LEFT, 0 > this.leftX);
            this._testButton(s.LSTICK_RIGHT, 0 < this.leftX);
            this._testButton(s.LSTICK_UP, 0 > this.leftY);
            this._testButton(s.LSTICK_DOWN, 0 < this.leftY);
            this._testButton(s.RSTICK_LEFT, 0 > this.rightX);
            this._testButton(s.RSTICK_RIGHT, 0 < this.rightX);
            this._testButton(s.RSTICK_UP, 0 > this.rightY);
            this._testButton(s.RSTICK_DOWN, 0 < this.rightY)
        },
        __class__: Hf
    });
    var xh = function(a, b, c, d) { this.type = a;
        this._keys = [];
        this._virtual = [];
        this._controller = [];
        this._fireDelegate = b;
        this._virtualTestDelegate = c;
        this._controllerTestDelegate = d;
        this._pointer = null;
        this.fresh = this.down = !1 };
    h["workinman.input.InputTracker"] = xh;
    xh.__name__ = ["workinman", "input", "InputTracker"];
    xh.prototype = {
        setKeys: function(a, b, c) {
            if (null != a)
                for (var d = 0; d < a.length;) { var e = a[d];++d;
                    this._keys.push(e) }
            if (null !=
                b)
                for (a = 0; a < b.length;) d = b[a], ++a, this._virtual.push(d);
            if (null != c)
                for (b = 0; b < c.length;) a = c[b], ++b, this._controller.push(a)
        },
        updateStatus: function() { this.fresh = !1;
            this.down ? !1 == this._isDown() && (this.down = !1, this._fireDelegate(this.type, !1)) : this._isDown() && (this.fresh = this.down = !0, this._fireDelegate(this.type, !0)) },
        _isDown: function() {
            for (var a = 0, b = this._keys; a < b.length;) { var c = b[a];++a; if (z.$KH.getKeyboard().isDown(c)) return !0 } a = 0;
            for (b = this._virtual; a < b.length;)
                if (c = b[a], ++a, this._virtualTestDelegate(c)) return !0;
            a = 0;
            for (b = this._controller; a < b.length;)
                if (c = b[a], ++a, this._controllerTestDelegate(c)) return !0;
            return null != this._pointer && this._pointer.down ? !0 : !1
        },
        __class__: xh
    };
    var zc = h["workinman.input.data.GAMEPAD_TYPE"] = { __ename__: ["workinman", "input", "data", "GAMEPAD_TYPE"], __constructs__: ["NONE", "XBOX_360"] };
    zc.NONE = ["NONE", 0];
    zc.NONE.toString = l;
    zc.NONE.__enum__ = zc;
    zc.XBOX_360 = ["XBOX_360", 1];
    zc.XBOX_360.toString = l;
    zc.XBOX_360.__enum__ = zc;
    var s = h["workinman.input.data.INPUT_CONTROLLER"] = {
        __ename__: ["workinman",
            "input", "data", "INPUT_CONTROLLER"
        ],
        __constructs__: "A B X Y DPAD_UP DPAD_DOWN DPAD_RIGHT DPAD_LEFT LB RB LT RT START SELECT LSTICK_UP LSTICK_DOWN LSTICK_RIGHT LSTICK_LEFT RSTICK_UP RSTICK_DOWN RSTICK_RIGHT RSTICK_LEFT LSTICK_BUTTON RSTICK_BUTTON".split(" ")
    };
    s.A = ["A", 0];
    s.A.toString = l;
    s.A.__enum__ = s;
    s.B = ["B", 1];
    s.B.toString = l;
    s.B.__enum__ = s;
    s.X = ["X", 2];
    s.X.toString = l;
    s.X.__enum__ = s;
    s.Y = ["Y", 3];
    s.Y.toString = l;
    s.Y.__enum__ = s;
    s.DPAD_UP = ["DPAD_UP", 4];
    s.DPAD_UP.toString = l;
    s.DPAD_UP.__enum__ = s;
    s.DPAD_DOWN = ["DPAD_DOWN", 5];
    s.DPAD_DOWN.toString = l;
    s.DPAD_DOWN.__enum__ = s;
    s.DPAD_RIGHT = ["DPAD_RIGHT", 6];
    s.DPAD_RIGHT.toString = l;
    s.DPAD_RIGHT.__enum__ = s;
    s.DPAD_LEFT = ["DPAD_LEFT", 7];
    s.DPAD_LEFT.toString = l;
    s.DPAD_LEFT.__enum__ = s;
    s.LB = ["LB", 8];
    s.LB.toString = l;
    s.LB.__enum__ = s;
    s.RB = ["RB", 9];
    s.RB.toString = l;
    s.RB.__enum__ = s;
    s.LT = ["LT", 10];
    s.LT.toString = l;
    s.LT.__enum__ = s;
    s.RT = ["RT", 11];
    s.RT.toString = l;
    s.RT.__enum__ = s;
    s.START = ["START", 12];
    s.START.toString = l;
    s.START.__enum__ = s;
    s.SELECT = ["SELECT", 13];
    s.SELECT.toString = l;
    s.SELECT.__enum__ = s;
    s.LSTICK_UP = ["LSTICK_UP", 14];
    s.LSTICK_UP.toString = l;
    s.LSTICK_UP.__enum__ = s;
    s.LSTICK_DOWN = ["LSTICK_DOWN", 15];
    s.LSTICK_DOWN.toString = l;
    s.LSTICK_DOWN.__enum__ = s;
    s.LSTICK_RIGHT = ["LSTICK_RIGHT", 16];
    s.LSTICK_RIGHT.toString = l;
    s.LSTICK_RIGHT.__enum__ = s;
    s.LSTICK_LEFT = ["LSTICK_LEFT", 17];
    s.LSTICK_LEFT.toString = l;
    s.LSTICK_LEFT.__enum__ = s;
    s.RSTICK_UP = ["RSTICK_UP", 18];
    s.RSTICK_UP.toString = l;
    s.RSTICK_UP.__enum__ = s;
    s.RSTICK_DOWN = ["RSTICK_DOWN", 19];
    s.RSTICK_DOWN.toString = l;
    s.RSTICK_DOWN.__enum__ =
        s;
    s.RSTICK_RIGHT = ["RSTICK_RIGHT", 20];
    s.RSTICK_RIGHT.toString = l;
    s.RSTICK_RIGHT.__enum__ = s;
    s.RSTICK_LEFT = ["RSTICK_LEFT", 21];
    s.RSTICK_LEFT.toString = l;
    s.RSTICK_LEFT.__enum__ = s;
    s.LSTICK_BUTTON = ["LSTICK_BUTTON", 22];
    s.LSTICK_BUTTON.toString = l;
    s.LSTICK_BUTTON.__enum__ = s;
    s.RSTICK_BUTTON = ["RSTICK_BUTTON", 23];
    s.RSTICK_BUTTON.toString = l;
    s.RSTICK_BUTTON.__enum__ = s;
    var bi = function() {};
    h["workinman.math.WMMath"] = bi;
    bi.__name__ = ["workinman", "math", "WMMath"];
    bi.clamp = function(a, b, c, d) {
        null == d && (d = !1);
        d ? a > c ? a = b : a <
            b && (a = c) : a > c ? a = c : a < b && (a = b);
        return a
    };
    var ci = function() {};
    h["workinman.random.SeededRandom"] = ci;
    ci.__name__ = ["workinman", "random", "SeededRandom"];
    ci.prototype = { set_seed: function(a) { 0 == a && (a = 1); return this.seed = a }, _randomInt: function() { return this.set_seed(16807 * this.seed % 2147483647) & 1073741823 }, random: function() { return this._randomInt() / 1073741823 }, __class__: ci, __properties__: { set_seed: "set_seed" } };
    var zh = function(a) { this.data = { version: "-1" };
        this.id = a };
    h["workinman.saving.WMSharedObject"] = zh;
    zh.__name__ = ["workinman", "saving", "WMSharedObject"];
    zh.prototype = { dispose: function() { this.id = this.data = null }, flush: function() { window.localStorage.setItem(this.id, xb.run(this.data)) }, __class__: zh };
    var If = function(a, b, c) { this.id = a;
        this._playback = b;
        this._completeListener = this._playback.get_complete().watch(G(this, this._onCompleteEvent));
        this._complete = c;
        this.disposed = this.isComplete = !1 };
    h["workinman.sound.PlaybackDef"] = If;
    If.__name__ = ["workinman", "sound", "PlaybackDef"];
    If.prototype = {
        _onCompleteEvent: function(a,
            b) {!1 != a && (this.isComplete = !0) },
        dispose: function() { if (!0 != this.disposed && (this.disposed = !0, this._completeListener.dispose(), this._completeListener = null, this._playback.dispose(), this.id = this._playback = null, null != this._complete)) { var a = this._complete;
                this._complete = null;
                a() } },
        __class__: If
    };
    var di = function() {};
    h["workinman.sound.VOQueue"] = di;
    di.__name__ = ["workinman", "sound", "VOQueue"];
    di.prototype = { dispose: function() { this.localization = this.id = this.call = null }, __class__: di };
    var v = function() {};
    h["workinman.tween.Ease"] =
        v;
    v.__name__ = ["workinman", "tween", "Ease"];
    v.linear = function(a, b, c, d) { return c * a / d + b };
    v.inQuad = function(a, b, c, d) { return c * (a /= d) * a + b };
    v.outQuad = function(a, b, c, d) { return -c * (a /= d) * (a - 2) + b };
    v.inOutQuad = function(a, b, c, d) { return 1 > (a /= d / 2) ? c / 2 * a * a + b : -c / 2 * (--a * (a - 2) - 1) + b };
    v.inBack = function(a, b, c, d) { return c * (a /= d) * a * (2.70158 * a - 1.70158) + b };
    v.outBack = function(a, b, c, d) { return c * ((a = a / d - 1) * a * (2.70158 * a + 1.70158) + 1) + b };
    var Bh = function(a) { this.target = a;
        this._threads = [] };
    h["workinman.tween.data.ObjectTracker"] =
        Bh;
    Bh.__name__ = ["workinman", "tween", "data", "ObjectTracker"];
    Bh.prototype = {
        dispose: function() { this.target = null; for (var a = 0, b = this._threads; a < b.length;) { var c = b[a];++a;
                c.dispose() } this._threads = null },
        update: function(a) { for (var b = this._threads.length; 0 < b--;) { var c = this._threads[b];
                c.update(a);
                c.get_isComplete() && (c.dispose(), this._threads.splice(b, 1)) } },
        get_isComplete: function() { return 1 > this._threads.length },
        stopThread: function(a) {
            for (var b = this._threads.length; 0 < b--;)
                if (this._threads[b].id == a) {
                    this._threads[b].dispose();
                    this._threads.splice(b, 1);
                    break
                }
        },
        queueStep: function(a, b) { for (var c = null, d = 0, e = this._threads; d < e.length;) { var f = e[d];++d; if (f.id == b) { c = f; break } } null == c && (c = new Hh(b), this._threads.push(c));
            c.queueStep(a) },
        __class__: Bh,
        __properties__: { get_isComplete: "get_isComplete" }
    };
    var Ih = function(a, b) { this.name = a;
        this.origin = 0;
        this.dest = b };
    h["workinman.tween.data.PropertyReference"] = Ih;
    Ih.__name__ = ["workinman", "tween", "data", "PropertyReference"];
    Ih.prototype = { dispose: function() { this.name = null }, __class__: Ih };
    var Hh =
        function(a) { this.id = a;
            this._tweens = [] };
    h["workinman.tween.data.ThreadQueue"] = Hh;
    Hh.__name__ = ["workinman", "tween", "data", "ThreadQueue"];
    Hh.prototype = {
        dispose: function() { this.id = null; for (var a = 0, b = this._tweens; a < b.length;) { var c = b[a];++a;
                c.dispose() } this._tweens = null },
        get_isComplete: function() { return 1 > this._tweens.length },
        update: function(a) { if (!(1 > this._tweens.length)) { var b = this._tweens[0];
                b.update(a);
                b.get_isComplete() && (this._tweens.shift(), this.update(a)) } },
        queueStep: function(a) { this._tweens.push(a) },
        __class__: Hh,
        __properties__: { get_isComplete: "get_isComplete" }
    };
    var Ah = function(a, b) { this._properties = []; for (var c = 0, d = L.fields(b); c < d.length;) { var e = d[c];++c;
            this._properties.push(new Ih(e, L.field(b, e))) } this._target = a.target;
        this._easeFunction = a.ease;
        this._duration = a.duration;
        this._postDelay = this._delay = 0;
        this._completionHandler = null;
        this._progress = 0;
        this._started = !1;
        null != a.delay && (this._delay = a.delay);
        null != a.postDelay && (this._postDelay = a.postDelay);
        null != a.complete && (this._completionHandler = a.complete) };
    h["workinman.tween.data.TweenStep"] = Ah;
    Ah.__name__ = ["workinman", "tween", "data", "TweenStep"];
    Ah.prototype = {
        dispose: function() { this._target = null; for (var a = 0, b = this._properties; a < b.length;) { var c = b[a];++a;
                c.dispose() } this._completionHandler = this._easeFunction = this._properties = null },
        update: function(a) {
            if (0 < this._delay && (this._delay -= a, 0 < this._delay)) return;
            if (!1 == this._started) {
                this._started = !0;
                for (var b = 0, c = this._properties; b < c.length;) {
                    var d = c[b];
                    ++b;
                    Object.prototype.hasOwnProperty.call(this._target,
                        d.name) ? d.origin = L.field(this._target, d.name) : null != L.getProperty(this._target, d.name) && (d.origin = L.getProperty(this._target, d.name))
                }
            }
            if (this._progress < this._duration)
                if (this._progress += a, this._progress >= this._duration)
                    for (this._progress = this._duration, b = 0, c = this._properties; b < c.length;) d = c[b], ++b, L.setProperty(this._target, d.name, d.dest);
                else {
                    a = 0;
                    for (b = this._properties; a < b.length;) c = b[a], ++a, L.setProperty(this._target, c.name, this._easeFunction(this._progress, c.origin, c.dest - c.origin, this._duration));
                    return
                } this._postDelay -= a;
            0 >= this._postDelay && null != this._completionHandler && (a = this._completionHandler, this._completionHandler = null, a())
        },
        get_isComplete: function() { return this._progress >= this._duration && 0 > this._postDelay && null == this._completionHandler },
        __class__: Ah,
        __properties__: { get_isComplete: "get_isComplete" }
    };
    var Zc = function() {};
    h["workinman.ui.NestContainer"] = Zc;
    Zc.__name__ = ["workinman", "ui", "NestContainer"];
    Zc.__super__ = hc;
    Zc.prototype = p(hc.prototype, {
        onStart: function() {
            var a = this.owner.$PG[3];
            null == a && (a = new E, this.info.transformSprite(a), this.owner.add(a));
            hc.prototype.onStart.call(this);
            this.children = new W;
            for (var b = this.owner._internal_getFromParents(3, Ta), c = new E, d = new Ab, e = !1, f = 0, g = 0, h = this.info.layer.objects.length; g < h;) {
                var l = g++,
                    l = this.info.layer.objects[l];
                if (l == this.info) e = !0;
                else if (!1 != e && this._testOverlap(this.info, l, a, c, d)) {
                    f++;
                    var m = b.createObject(l);
                    this.owner.addChild(m);
                    this.children.set(l.name, m);
                    m;
                    m.yieldForStart();
                    m = m.$PG[3];
                    null != m && (a.getViewMatrix().inverseTransform(l.x,
                        l.y, d), m.x.set__(d.x), m.y.set__(d.y), l = m.rotation, l.set__(l.$tG - this.info.rotation))
                }
            }
            null
        },
        _testOverlap: function(a, b, c, d, e) {
            b.transformSprite(d);
            d = d.getLocalMatrix();
            c = c.getViewMatrix();
            return this._containsPoint(d, c, 0, 0, a.width, a.height, e) || this._containsPoint(d, c, b.width, 0, a.width, a.height, e) || this._containsPoint(d, c, b.width, b.height, a.width, a.height, e) || this._containsPoint(d, c, 0, b.height, a.width, a.height, e) || this._containsPoint(c, d, 0, 0, b.width, b.height, e) || this._containsPoint(c, d, a.width, 0, b.width,
                b.height, e) || this._containsPoint(c, d, a.width, a.height, b.width, b.height, e) || this._containsPoint(c, d, 0, a.height, b.width, b.height, e) ? !0 : !1
        },
        _containsPoint: function(a, b, c, d, e, f, g) { a.transform(c, d, g);
            b.inverseTransform(g.x, g.y, g); return 0 <= g.x && g.x <= e && 0 <= g.y && g.y <= f },
        __class__: Zc
    });
    var ph = function(a, b, c) {
        this.id = a;
        this.sprite = new W;
        this.button = new W;
        this.text = new W;
        this._tween = b;
        this._uniqueIndex = 0;
        this.sceneSprite = c;
        for (a = this.sceneSprite.objects.keys(); a.hasNext();) b = a.next(), this._testChildEntity(b.name,
            this.sceneSprite.objects.h[b.__id__])
    };
    h["workinman.ui.SceneSpriteCache"] = ph;
    ph.__name__ = ["workinman", "ui", "SceneSpriteCache"];
    ph.prototype = {
        dispose: function() { this._tween = this.text = this.button = this.sprite = this.sceneSprite = this.id = null },
        _testChildEntity: function(a, b) {
            var c = H.instance(b.$PG[1], Zc);
            if (null != c) { for (var d = c.children.keys(); d.hasNext();) { var e = d.next();
                    this._testChildEntity(e, c.children.get(e)) } c = new $c(a);
                b.add(c);
                this.sprite.set(a, c) } else null != H.instance(b.$PG[1], wc) ? (c = new mb(a, this._tween),
                b.add(c), this.button.set(a, c)) : null != H.instance(b.$PG[3], Ub) ? (c = new nc(a), b.add(c), this.text.set(a, c)) : null != H.instance(b.$PG[3], xc) ? (c = new Kf(a), b.add(c), this.text.set(a, c)) : (c = new $c(a), b.add(c), this.sprite.set(a, c));
            c
        },
        addSprite: function(a, b) { var c = new aa;
            c.add(M.getSprite(a.asset)); var d = new $c("generatedSprite_" + this._uniqueIndex++);
            c.add(d);
            d.updateFromProp(a);
            null != b ? b.addChild(c) : this.sceneSprite.owner.addChild(c); return d },
        addText: function(a, b) {
            var c = new aa,
                d = ta.getLocalizeData(a.text),
                e =
                new Ub(M.getFont(d.fontName), a.text);
            null != a.x && (a.x += d.offsetX);
            null != a.y && (a.y += d.offsetY);
            null != a.tint && e.setTint(a.tint);
            c.add(e);
            d = new nc("generatedText_" + this._uniqueIndex++);
            c.add(d);
            null != a.vars && d.setVars(a.vars);
            d.updateFromProp(a);
            null != b ? b.addChild(c) : this.sceneSprite.owner.addChild(c);
            return d
        },
        __class__: ph
    };
    var og = function(a, b) { this.director = a;
        this._assets = b;
        this._init = !1;
        this._screens = [] };
    h["workinman.ui.ScreenManager"] = og;
    og.__name__ = ["workinman", "ui", "ScreenManager"];
    og.prototype = {
        unwindToScene_screen_ScreenEndGame: function(a, b, c) { var d = this;
            this._loadScene(ga.createEmptyInstance(a).get_asset(), function(a) { a = new jd;
                d._screens.push(a);
                null != c ? d.director.unwindToScene(a.scene, c) : d.director.unwindToScene(a.scene);
                a.onAdded();
                null != b && b() }) },
        pushScene_screen_ScreenQuitConfirm: function(a, b) { var c = this;
            this._loadScene(ga.createEmptyInstance(a).get_asset(), function(a) { a = new id;
                c._screens.push(a);
                c.director.pushScene(a.scene);
                a.onAdded();
                null != b && b() }) },
        pushScene_screen_ScreenGameplayHelp: function(a,
            b) { var c = this;
            this._loadScene(ga.createEmptyInstance(a).get_asset(), function(a) { a = new hd;
                c._screens.push(a);
                c.director.pushScene(a.scene);
                a.onAdded();
                null != b && b() }) },
        pushScene_screen_ScreenGameplayPause: function(a, b) { var c = this;
            this._loadScene(ga.createEmptyInstance(a).get_asset(), function(a) { a = new gd;
                c._screens.push(a);
                c.director.pushScene(a.scene);
                a.onAdded();
                null != b && b() }) },
        unwindToScene_screen_ScreenGameplayHud: function(a, b, c) {
            var d = this;
            this._loadScene(ga.createEmptyInstance(a).get_asset(), function(a) {
                a =
                    new fd;
                d._screens.push(a);
                null != c ? d.director.unwindToScene(a.scene, c) : d.director.unwindToScene(a.scene);
                a.onAdded();
                null != b && b()
            })
        },
        unwindToScene_screen_ScreenLoadingMinigame: function(a, b, c) { var d = this;
            this._loadScene(ga.createEmptyInstance(a).get_asset(), function(a) { a = new sc;
                d._screens.push(a);
                null != c ? d.director.unwindToScene(a.scene, c) : d.director.unwindToScene(a.scene);
                a.onAdded();
                null != b && b() }) },
        unwindToScene_screen_ScreenRecipeSelect: function(a, b, c) {
            var d = this;
            this._loadScene(ga.createEmptyInstance(a).get_asset(),
                function(a) { a = new ed;
                    d._screens.push(a);
                    null != c ? d.director.unwindToScene(a.scene, c) : d.director.unwindToScene(a.scene);
                    a.onAdded();
                    null != b && b() })
        },
        unwindToScene_screen_ScreenLoading: function(a, b, c) { var d = this;
            this._loadScene(ga.createEmptyInstance(a).get_asset(), function(a) { a = new wb;
                d._screens.push(a);
                null != c ? d.director.unwindToScene(a.scene, c) : d.director.unwindToScene(a.scene);
                a.onAdded();
                null != b && b() }) },
        unwindToScene_screen_ScreenSplash: function(a, b, c) {
            var d = this;
            this._loadScene(ga.createEmptyInstance(a).get_asset(),
                function(a) { a = new dd;
                    d._screens.push(a);
                    null != c ? d.director.unwindToScene(a.scene, c) : d.director.unwindToScene(a.scene);
                    a.onAdded();
                    null != b && b() })
        },
        popScene: function() { this.director.popScene() },
        _loadScene: function(a, b) { var c = this,
                d = Ba.getRequiredAssetPacks(a).map(function(a) { return c._assets.load(a) });
            Qa.all(d).then(b) },
        update: function(a) { for (var b = this._screens.length; 0 < b--;) { var c = this._screens[b];
                null == c.scene.owner ? (c.dispose(), this._screens.splice(b, 1)) : c.update(a) } },
        __class__: og
    };
    var Ha = h["workinman.ui.BUTTON_STATE"] = { __ename__: ["workinman", "ui", "BUTTON_STATE"], __constructs__: ["IDLE", "DOWN", "OVER"] };
    Ha.IDLE = ["IDLE", 0];
    Ha.IDLE.toString = l;
    Ha.IDLE.__enum__ = Ha;
    Ha.DOWN = ["DOWN", 1];
    Ha.DOWN.toString = l;
    Ha.DOWN.__enum__ = Ha;
    Ha.OVER = ["OVER", 2];
    Ha.OVER.toString = l;
    Ha.OVER.__enum__ = Ha;
    var $c = function(a) { Ma.call(this, a) };
    h["workinman.ui.UISprite"] = $c;
    $c.__name__ = ["workinman", "ui", "UISprite"];
    $c.__super__ = Ma;
    $c.prototype = p(Ma.prototype, {
        setAsset: function(a) {
            var b = 0,
                c = 0;
            null != this.owner && (b = this._sprite.x.$tG, c = this._sprite.y.$tG,
                this._originX = this._sprite.anchorX.$tG / this._sprite.getNaturalWidth(), this._originY = this._sprite.anchorY.$tG / this._sprite.getNaturalHeight(), this.set_scaleX(this._sprite.scaleX.$tG), this.set_scaleY(this._sprite.scaleY.$tG), this.set_rotation(this._sprite.rotation.$tG), this._sprite.dispose(), this._sprite = null);
            null != a && "" != a && (this._sprite = M.getSprite(a), this._sprite.x.set__(b), this._sprite.y.set__(c), this._sprite.scaleX.set__(this.scaleX), this._sprite.scaleY.set__(this.scaleY), this._sprite.rotation.set__(this.rotation),
                this._sprite.anchorX.set__(this._originX * this._sprite.getNaturalWidth()), this._sprite.anchorY.set__(this._originY * this._sprite.getNaturalHeight()), this.owner.add(this._sprite))
        },
        updateFromProp: function(a) {
            this.set_x(null != a.x ? a.x : this.x);
            this.set_y(null != a.y ? a.y : this.y);
            this.set_alpha(null != a.alpha ? a.alpha : this.alpha);
            null != a.originX && this.set_originX(a.originX);
            null != a.originY && this.set_originY(a.originY);
            this._sprite.scaleX.set__(null != a.scaleX ? a.scaleX : this.scaleX);
            this._sprite.scaleY.set__(null !=
                a.scaleY ? a.scaleY : this.scaleY);
            null != a.scale && (this._sprite.scaleX.set__(a.scale), this._sprite.scaleY.set__(a.scale))
        },
        __class__: $c
    });
    var nc = function(a) { Ma.call(this, a) };
    h["workinman.ui.UIText"] = nc;
    nc.__name__ = ["workinman", "ui", "UIText"];
    nc.__super__ = Ma;
    nc.prototype = p(Ma.prototype, {
        set_color: function(a) { this.color = a;
            this._sprite.setTint(this.color); return this.color },
        dispose: function() { Ma.prototype.dispose.call(this);
            this._data = this._text = null },
        updateFromProp: function(a) {
            this.set_x(null != a.x ? a.x :
                this.x);
            this.set_y(null != a.y ? a.y : this.y);
            this.set_alpha(null != a.alpha ? a.alpha : this.alpha);
            this.set_scaleX(null != a.scaleX ? a.scaleX : this.scaleX);
            this.set_scaleY(null != a.scaleY ? a.scaleY : this.scaleY);
            null != a.scale && (this.set_scaleX(a.scale), this.set_scaleY(a.scale));
            null != a.color && this.set_color(a.color);
            null != a.align && this._text.set_align(a.align)
        },
        setText: function(a, b) {
            this._data = ta.getLocalizeData(a);
            var c = "";
            null == this._data ? c = null == H.parseInt(a) ? "no localization field: " + a : a : (c = this._data.string,
                this._text.set_font(M.getFont(this._data.fontName)));
            null != b ? this._text.set_text(this._replaceVars(b)) : this._text.set_text(c);
            this.set_scale(this._data.scale);
            this.set_scaleX(this._data.scale);
            this.set_scaleY(this._data.scale)
        },
        setVars: function(a) { this._text.set_text(this._replaceVars(a)) },
        _replaceVars: function(a) {
            for (var b = "", c = this._data.string.split("}"), d = 0; d < c.length;) {
                var e = c[d];
                ++d;
                e = e.split("{");
                b += e[0];
                1 < e.length && (e = H.parseInt(e[1]), b = null != a && a.length > e ? b + H.string(a[e]) : b + ("[Missing {" +
                    e + "}]"))
            }
            return b
        },
        onAdded: function() { Ma.prototype.onAdded.call(this);
            this._initText() },
        _initText: function() { this._text = H.instance(this.owner.$PG[3], Ub);
            this.setText(this._text.$WK) },
        __class__: nc,
        __properties__: p(Ma.prototype.__properties__, { set_color: "set_color" })
    });
    var Kf = function(a) { Ma.call(this, a) };
    h["workinman.ui.UITextVector"] = Kf;
    Kf.__name__ = ["workinman", "ui", "UITextVector"];
    Kf.__super__ = nc;
    Kf.prototype = p(nc.prototype, {
        updateFromProp: function(a) {
            this.set_x(null != a.x ? a.x : this.x);
            this.set_y(null !=
                a.y ? a.y : this.y);
            this.set_alpha(null != a.alpha ? a.alpha : this.alpha);
            this.set_scaleX(null != a.scaleX ? a.scaleX : this.scaleX);
            this.set_scaleY(null != a.scaleY ? a.scaleY : this.scaleY);
            null != a.scale && (this.set_scaleX(a.scale), this.set_scaleY(a.scale));
            null != a.color && this.set_color(a.color);
            null != a.align && this._textVector.set_align(a.align)
        },
        dispose: function() { nc.prototype.dispose.call(this);
            this._data = this._textVector = null },
        setText: function(a, b) {
            this._data = ta.getLocalizeData(a);
            var c = "",
                c = null == this._data ? "no localization field: " +
                a : this._data.string;
            null != b ? this._textVector.set_text(this._replaceVars(b)) : this._textVector.set_text(c)
        },
        setVars: function(a) { this._textVector.set_text(this._replaceVars(a)) },
        _initText: function() { this._textVector = H.instance(this.owner.$PG[3], xc);
            this.setText(this._textVector.$WK) },
        __class__: Kf
    });
    var Y = h["world.RECIPE_TYPE"] = { __ename__: ["world", "RECIPE_TYPE"], __constructs__: "DOUGHNUT KRABBY_PATTY KELP_SHAKE SPONGECAKE SUSHI AVOCADO_TOAST HOLLAND_OATS LOVE_MUFFINS STEAK JUICE_BLEND".split(" ") };
    Y.DOUGHNUT = ["DOUGHNUT", 0];
    Y.DOUGHNUT.toString = l;
    Y.DOUGHNUT.__enum__ = Y;
    Y.KRABBY_PATTY = ["KRABBY_PATTY", 1];
    Y.KRABBY_PATTY.toString = l;
    Y.KRABBY_PATTY.__enum__ = Y;
    Y.KELP_SHAKE = ["KELP_SHAKE", 2];
    Y.KELP_SHAKE.toString = l;
    Y.KELP_SHAKE.__enum__ = Y;
    Y.SPONGECAKE = ["SPONGECAKE", 3];
    Y.SPONGECAKE.toString = l;
    Y.SPONGECAKE.__enum__ = Y;
    Y.SUSHI = ["SUSHI", 4];
    Y.SUSHI.toString = l;
    Y.SUSHI.__enum__ = Y;
    Y.AVOCADO_TOAST = ["AVOCADO_TOAST", 5];
    Y.AVOCADO_TOAST.toString = l;
    Y.AVOCADO_TOAST.__enum__ = Y;
    Y.HOLLAND_OATS = ["HOLLAND_OATS", 6];
    Y.HOLLAND_OATS.toString =
        l;
    Y.HOLLAND_OATS.__enum__ = Y;
    Y.LOVE_MUFFINS = ["LOVE_MUFFINS", 7];
    Y.LOVE_MUFFINS.toString = l;
    Y.LOVE_MUFFINS.__enum__ = Y;
    Y.STEAK = ["STEAK", 8];
    Y.STEAK.toString = l;
    Y.STEAK.__enum__ = Y;
    Y.JUICE_BLEND = ["JUICE_BLEND", 9];
    Y.JUICE_BLEND.toString = l;
    Y.JUICE_BLEND.__enum__ = Y;
    var F = h["world.MINIGAME_TYPE"] = { __ename__: ["world", "MINIGAME_TYPE"], __constructs__: "PIT BAKE BLEND BOIL CHOP GRILL SLICE SPREAD MIX PEEL POUND POUR PREP TOAST FINAL_JUDGE".split(" ") };
    F.PIT = ["PIT", 0];
    F.PIT.toString = l;
    F.PIT.__enum__ = F;
    F.BAKE = ["BAKE",
        1
    ];
    F.BAKE.toString = l;
    F.BAKE.__enum__ = F;
    F.BLEND = ["BLEND", 2];
    F.BLEND.toString = l;
    F.BLEND.__enum__ = F;
    F.BOIL = ["BOIL", 3];
    F.BOIL.toString = l;
    F.BOIL.__enum__ = F;
    F.CHOP = ["CHOP", 4];
    F.CHOP.toString = l;
    F.CHOP.__enum__ = F;
    F.GRILL = ["GRILL", 5];
    F.GRILL.toString = l;
    F.GRILL.__enum__ = F;
    F.SLICE = ["SLICE", 6];
    F.SLICE.toString = l;
    F.SLICE.__enum__ = F;
    F.SPREAD = ["SPREAD", 7];
    F.SPREAD.toString = l;
    F.SPREAD.__enum__ = F;
    F.MIX = ["MIX", 8];
    F.MIX.toString = l;
    F.MIX.__enum__ = F;
    F.PEEL = ["PEEL", 9];
    F.PEEL.toString = l;
    F.PEEL.__enum__ = F;
    F.POUND = ["POUND",
        10
    ];
    F.POUND.toString = l;
    F.POUND.__enum__ = F;
    F.POUR = ["POUR", 11];
    F.POUR.toString = l;
    F.POUR.__enum__ = F;
    F.PREP = ["PREP", 12];
    F.PREP.toString = l;
    F.PREP.__enum__ = F;
    F.TOAST = ["TOAST", 13];
    F.TOAST.toString = l;
    F.TOAST.__enum__ = F;
    F.FINAL_JUDGE = ["FINAL_JUDGE", 14];
    F.FINAL_JUDGE.toString = l;
    F.FINAL_JUDGE.__enum__ = F;
    var r = h["world.INGREDIENT_TYPE"] = { __ename__: ["world", "INGREDIENT_TYPE"], __constructs__: "BUN CHEESE LETTUCE ONION PICKLE TOMATO AVOCADO EGG TUNA SALMON ROE WASABI MEAT RICE DOUGH CHOCOLATE_FROSTING STRAWBERRY_FROSTING STRAWBERRY APPLE BREAD_LOAF SPONGE_LOAF BEEF HAM TURKEY STEAK BANANA POTATO MUFFINS KELP".split(" ") };
    r.BUN = ["BUN", 0];
    r.BUN.toString = l;
    r.BUN.__enum__ = r;
    r.CHEESE = ["CHEESE", 1];
    r.CHEESE.toString = l;
    r.CHEESE.__enum__ = r;
    r.LETTUCE = ["LETTUCE", 2];
    r.LETTUCE.toString = l;
    r.LETTUCE.__enum__ = r;
    r.ONION = ["ONION", 3];
    r.ONION.toString = l;
    r.ONION.__enum__ = r;
    r.PICKLE = ["PICKLE", 4];
    r.PICKLE.toString = l;
    r.PICKLE.__enum__ = r;
    r.TOMATO = ["TOMATO", 5];
    r.TOMATO.toString = l;
    r.TOMATO.__enum__ = r;
    r.AVOCADO = ["AVOCADO", 6];
    r.AVOCADO.toString = l;
    r.AVOCADO.__enum__ = r;
    r.EGG = ["EGG", 7];
    r.EGG.toString = l;
    r.EGG.__enum__ = r;
    r.TUNA = ["TUNA", 8];
    r.TUNA.toString =
        l;
    r.TUNA.__enum__ = r;
    r.SALMON = ["SALMON", 9];
    r.SALMON.toString = l;
    r.SALMON.__enum__ = r;
    r.ROE = ["ROE", 10];
    r.ROE.toString = l;
    r.ROE.__enum__ = r;
    r.WASABI = ["WASABI", 11];
    r.WASABI.toString = l;
    r.WASABI.__enum__ = r;
    r.MEAT = ["MEAT", 12];
    r.MEAT.toString = l;
    r.MEAT.__enum__ = r;
    r.RICE = ["RICE", 13];
    r.RICE.toString = l;
    r.RICE.__enum__ = r;
    r.DOUGH = ["DOUGH", 14];
    r.DOUGH.toString = l;
    r.DOUGH.__enum__ = r;
    r.CHOCOLATE_FROSTING = ["CHOCOLATE_FROSTING", 15];
    r.CHOCOLATE_FROSTING.toString = l;
    r.CHOCOLATE_FROSTING.__enum__ = r;
    r.STRAWBERRY_FROSTING = ["STRAWBERRY_FROSTING",
        16
    ];
    r.STRAWBERRY_FROSTING.toString = l;
    r.STRAWBERRY_FROSTING.__enum__ = r;
    r.STRAWBERRY = ["STRAWBERRY", 17];
    r.STRAWBERRY.toString = l;
    r.STRAWBERRY.__enum__ = r;
    r.APPLE = ["APPLE", 18];
    r.APPLE.toString = l;
    r.APPLE.__enum__ = r;
    r.BREAD_LOAF = ["BREAD_LOAF", 19];
    r.BREAD_LOAF.toString = l;
    r.BREAD_LOAF.__enum__ = r;
    r.SPONGE_LOAF = ["SPONGE_LOAF", 20];
    r.SPONGE_LOAF.toString = l;
    r.SPONGE_LOAF.__enum__ = r;
    r.BEEF = ["BEEF", 21];
    r.BEEF.toString = l;
    r.BEEF.__enum__ = r;
    r.HAM = ["HAM", 22];
    r.HAM.toString = l;
    r.HAM.__enum__ = r;
    r.TURKEY = ["TURKEY", 23];
    r.TURKEY.toString =
        l;
    r.TURKEY.__enum__ = r;
    r.STEAK = ["STEAK", 24];
    r.STEAK.toString = l;
    r.STEAK.__enum__ = r;
    r.BANANA = ["BANANA", 25];
    r.BANANA.toString = l;
    r.BANANA.__enum__ = r;
    r.POTATO = ["POTATO", 26];
    r.POTATO.toString = l;
    r.POTATO.__enum__ = r;
    r.MUFFINS = ["MUFFINS", 27];
    r.MUFFINS.toString = l;
    r.MUFFINS.__enum__ = r;
    r.KELP = ["KELP", 28];
    r.KELP.toString = l;
    r.KELP.__enum__ = r;
    var m = function() {};
    h["world.RecipeManager"] = m;
    m.__name__ = ["world", "RecipeManager"];
    m.__properties__ = {
        set_recipeIngredientOrder: "set_recipeIngredientOrder",
        get_recipeIngredientOrder: "get_recipeIngredientOrder",
        set_recipeIngredientTintColors: "set_recipeIngredientTintColors",
        get_recipeIngredientTintColors: "get_recipeIngredientTintColors",
        set_minigameResults: "set_minigameResults",
        get_minigameResults: "get_minigameResults",
        set_recipePackName: "set_recipePackName",
        get_recipePackName: "get_recipePackName",
        set_recipeID: "set_recipeID",
        get_recipeID: "get_recipeID"
    };
    m.get_recipeID = function() { return m.recipeID };
    m.set_recipeID = function(a) { return m.recipeID = a };
    m.get_recipePackName = function() { return m.recipePackName };
    m.set_recipePackName =
        function(a) { return m.recipePackName = a };
    m.setRecipeID = function(a) {
        switch (a) {
            case "recipe_hollandoats":
                m.set_recipeID(Y.HOLLAND_OATS);
                break;
            case "recipe_krabbypatty":
                m.set_recipeID(Y.KRABBY_PATTY);
                break;
            case "recipe_sushi":
                m.set_recipeID(Y.SUSHI);
                break;
            case "recipe_doughnut":
                m.set_recipeID(Y.DOUGHNUT);
                break;
            case "recipe_kelpshake":
                m.set_recipeID(Y.KELP_SHAKE);
                break;
            case "recipe_toast":
                m.set_recipeID(Y.AVOCADO_TOAST);
                break;
            case "recipe_spongecake":
                m.set_recipeID(Y.SPONGECAKE);
                break;
            case "recipe_muffins":
                m.set_recipeID(Y.LOVE_MUFFINS);
                break;
            case "recipe_steak":
                m.set_recipeID(Y.STEAK);
                break;
            case "recipe_juice_blend":
                m.set_recipeID(Y.JUICE_BLEND)
        }
        m.set_recipePackName(a)
    };
    m.getRecipeInt = function() { switch (m.get_recipeID()[1]) {
            case 0:
                return 4;
            case 1:
                return 1;
            case 2:
                return 3;
            case 3:
                return 6;
            case 4:
                return 2;
            case 5:
                return 5;
            case 6:
                return 0;
            case 7:
                return 7;
            case 8:
                return 8;
            case 9:
                return 9 } return -1 };
    m.getRecipeAssetPacks = function() {
        switch (m.get_recipeID()[1]) {
            case 0:
                return ["univ_minigame_grill", m.getRecipeAssetPack(m.getRecipeInt()), m.getRecipePropertyPack()];
            case 1:
                return ["univ_minigame_grill", m.getRecipeAssetPack(m.getRecipeInt()), m.getRecipePropertyPack()];
            case 2:
                return ["univ_minigame_slice", m.getRecipeAssetPack(m.getRecipeInt()), m.getRecipePropertyPack()];
            case 3:
                return [m.getRecipeAssetPack(m.getRecipeInt()), m.getRecipePropertyPack()];
            case 4:
                return ["univ_minigame_slice", "univ_minigame_pit", "univ_minigame_boil", m.getRecipeAssetPack(m.getRecipeInt()), m.getRecipePropertyPack()];
            case 5:
                return ["univ_minigame_slice", "univ_minigame_pit", m.getRecipeAssetPack(m.getRecipeInt()),
                    m.getRecipePropertyPack()
                ];
            case 6:
                return ["univ_minigame_boil", m.getRecipeAssetPack(m.getRecipeInt()), m.getRecipePropertyPack()];
            case 7:
                return [m.getRecipeAssetPack(m.getRecipeInt()), m.getRecipePropertyPack()];
            case 8:
                return ["univ_minigame_grill", "univ_minigame_boil", m.getRecipeAssetPack(m.getRecipeInt()), m.getRecipePropertyPack()];
            case 9:
                return ["univ_minigame_slice", m.getRecipeAssetPack(m.getRecipeInt()), m.getRecipePropertyPack()]
        }
        return []
    };
    m.getRecipeAssetPack = function(a) {
        switch (a) {
            case 0:
                return "recipe_hollandoats";
            case 1:
                return "recipe_krabbypatty";
            case 2:
                return "recipe_sushi";
            case 3:
                return "recipe_kelpshake";
            case 4:
                return "recipe_doughnut";
            case 5:
                return "recipe_toast";
            case 6:
                return "recipe_spongecake";
            case 7:
                return "recipe_muffins";
            case 8:
                return "recipe_steak";
            case 9:
                return "recipe_juice_blend"
        }
        return ""
    };
    m.get_minigameResults = function() { null == m.minigameResults && m.set_minigameResults([]); return m.minigameResults };
    m.set_minigameResults = function(a) { return m.minigameResults = a };
    m.get_recipeIngredientTintColors = function() {
        null ==
            m.recipeIngredientTintColors && m.set_recipeIngredientTintColors([]);
        return m.recipeIngredientTintColors
    };
    m.set_recipeIngredientTintColors = function(a) { return m.recipeIngredientTintColors = a };
    m.get_recipeIngredientOrder = function() { null == m.recipeIngredientOrder && m.set_recipeIngredientOrder([]); return m.recipeIngredientOrder };
    m.set_recipeIngredientOrder = function(a) { return m.recipeIngredientOrder = a };
    m.getRecipePropertyPack = function() {
        switch (m.get_recipeID()[1]) {
            case 1:
            case 2:
            case 3:
                return "property_spongebob";
            case 4:
            case 6:
            case 7:
            case 8:
                return "property_henry_danger";
            case 0:
            case 5:
            case 9:
                return "property_gameshakers"
        }
        return ""
    };
    m.getRecipeMinigameList = function() {
        switch (m.get_recipeID()[1]) {
            case 6:
                return [F.BOIL, F.CHOP, F.MIX, F.FINAL_JUDGE];
            case 1:
                return [F.POUND, F.GRILL, F.CHOP, F.PREP, F.FINAL_JUDGE];
            case 4:
                return [F.BOIL, F.PIT, F.SLICE, F.PREP, F.FINAL_JUDGE];
            case 0:
                return [F.POUND, F.GRILL, F.SPREAD, F.FINAL_JUDGE];
            case 2:
                return [F.POUR, F.SLICE, F.BLEND, F.POUR, F.FINAL_JUDGE];
            case 5:
                return [F.PIT, F.SLICE, F.TOAST, F.SPREAD,
                    F.FINAL_JUDGE
                ];
            case 3:
                return [F.POUND, F.POUR, F.BAKE, F.FINAL_JUDGE];
            case 7:
                return [F.CHOP, F.POUND, F.POUR, F.BAKE, F.FINAL_JUDGE];
            case 8:
                return [F.PEEL, F.CHOP, F.BOIL, F.GRILL, F.FINAL_JUDGE];
            case 9:
                return [F.SLICE, F.PREP, F.BLEND, F.POUR, F.FINAL_JUDGE]
        }
        return []
    };
    m.getMinigameIngredientList = function(a) {
        switch (a[1]) {
            case 4:
                switch (m.get_recipeID()[1]) {
                    case 6:
                        return [
                            [r.STRAWBERRY, r.APPLE]
                        ];
                    case 1:
                        return [
                            [r.TOMATO, r.ONION, r.PICKLE]
                        ];
                    case 8:
                        return [
                            [r.POTATO]
                        ];
                    case 7:
                        return [
                            [r.BANANA]
                        ] }
                break;
            case 12:
                switch (m.get_recipeID()[1]) {
                    case 1:
                        return [
                            [r.CHEESE],
                            [r.PICKLE],
                            [r.LETTUCE],
                            [r.TOMATO],
                            [r.ONION],
                            [r.BUN]
                        ];
                    case 4:
                        return [
                            [r.TUNA, r.SALMON],
                            [r.AVOCADO, r.EGG],
                            [r.WASABI, r.ROE]
                        ];
                    case 9:
                        return [
                            [r.HAM],
                            [r.CHEESE],
                            [r.LETTUCE],
                            [r.TOMATO],
                            [r.PICKLE],
                            [r.BUN]
                        ]
                }
                break;
            case 6:
                switch (m.get_recipeID()[1]) {
                    case 4:
                        return [
                            [r.AVOCADO]
                        ];
                    case 5:
                        return [
                            [r.BREAD_LOAF]
                        ];
                    case 9:
                        return [
                            [r.BREAD_LOAF]
                        ];
                    case 2:
                        return [
                            [r.KELP]
                        ];
                    case 7:
                        return [
                            [r.BANANA]
                        ] }
                break;
            case 7:
                switch (m.get_recipeID()[1]) {
                    case 0:
                        return [
                            [r.CHOCOLATE_FROSTING, r.STRAWBERRY_FROSTING]
                        ] }
        }
        return []
    };
    m.createMinigameWorld =
        function(a, b, c) { switch (a[1]) {
                case 1:
                    return new Lf(b, c, a);
                case 2:
                    return new Mf(b, c, a);
                case 10:
                    return new Nf(b, c, a);
                case 5:
                    return new Of(b, c, a);
                case 4:
                    return new Pf(b, c, a);
                case 12:
                    return new Qf(b, c, a);
                case 14:
                    return new Rf(b, c, a);
                case 9:
                    return new Sf(b, c, a);
                case 3:
                    return new Tf(b, c, a);
                case 6:
                    return new Uf(b, c, a);
                case 11:
                    return new Vf(b, c, a);
                case 0:
                    return new Wf(b, c, a);
                case 7:
                    return new oc(b, c, a);
                case 13:
                    return new Xf(b, c, a);
                case 8:
                    return new Yf(b, c, a) } return null };
    m.getRecipeNameString = function(a) {
        switch (a[1]) {
            case 0:
                return "pit";
            case 1:
                return "bake";
            case 2:
                return "blend";
            case 3:
                return "boil";
            case 10:
                return "pound";
            case 5:
                return "grill";
            case 4:
                return "chop";
            case 9:
                return "peel";
            case 6:
                return "slice";
            case 7:
                return "spread";
            case 12:
                return "prep";
            case 11:
                return "pour";
            case 13:
                return "toast";
            case 14:
                return "final_judge";
            case 8:
                return "mix"
        }
        return ""
    };
    m.getGameLength = function(a) { switch (a[1]) {
            case 4:
                return 20;
            case 12:
                return 20;
            case 14:
                return 120;
            case 10:
                return 20;
            default:
                return 20 } };
    m.getIngredientAsset = function(a, b) {
        null == b && (b = 0);
        var c;
        c = 0 ==
            b ? "_front" : "_back";
        switch (a[1]) {
            case 5:
                return "chop/tomato" + c;
            case 3:
                return "chop/onion" + c;
            case 4:
                return "chop/pickle" + c;
            case 6:
                return "slice/avocado_whole";
            case 19:
                return "loaf";
            case 20:
                return "";
            case 28:
                return "slice/kelp_whole";
            default:
                return "" }
    };
    var sb = h["world.WORLD_STATE"] = { __ename__: ["world", "WORLD_STATE"], __constructs__: ["ALLOCATE", "WAIT_FOR_LOAD_SCREEN", "GAMEPLAY"] };
    sb.ALLOCATE = ["ALLOCATE", 0];
    sb.ALLOCATE.toString = l;
    sb.ALLOCATE.__enum__ = sb;
    sb.WAIT_FOR_LOAD_SCREEN = ["WAIT_FOR_LOAD_SCREEN", 1];
    sb.WAIT_FOR_LOAD_SCREEN.toString =
        l;
    sb.WAIT_FOR_LOAD_SCREEN.__enum__ = sb;
    sb.GAMEPLAY = ["GAMEPLAY", 2];
    sb.GAMEPLAY.toString = l;
    sb.GAMEPLAY.__enum__ = sb;
    var Kb = function(a) { this._BOT_TRAY_INIT_Y = f.get_STAGE_CENTER_Y() + f.get_STAGE_HEIGHT();
        this._TOP_TRAY_INIT_Y = f.get_STAGE_CENTER_Y() + 165 + f.get_STAGE_HEIGHT();
        this._BOT_TRAY_Y = f.get_STAGE_CENTER_Y();
        this._TOP_TRAY_Y = f.get_STAGE_CENTER_Y() + 165;
        this._root = a;
        this._addEventListeners();
        this._setState(sb.ALLOCATE) };
    h["world.World"] = Kb;
    Kb.__name__ = ["world", "World"];
    Kb.prototype = {
        dispose: function() {
            this._tween.stopAllTweens();
            this._elementManager.dispose();
            this._removeEventListeners();
            this._tween = this._elementManager = this._root = this._state = null;
            null != this._minigame && this._minigame.dispose();
            this._transitionOverlay = this._transitionScreen = this._minigameLineup = this._minigame = null;
            this._screenShakeTarget.dispose();
            this._screenShakeTarget = null;
            this._camTarget.dispose();
            this._camTarget = null;
            this._particleManager.dispose();
            this._particleManager = null;
            this._textParticleManager.dispose();
            this._minigameTitle = this._textParticleManager =
                null
        },
        _initWorld: function() {
            this._tween = new Hd;
            this._elementManager = new Gh(this._root, !1);
            this._elementManager.addLayer("bottom");
            this._elementManager.addLayer("main", !0);
            this._elementManager.addLayer("minigame");
            this._elementManager.addLayer("minigame_ui");
            this._elementManager.addLayer("top");
            this._screenShakeTimer = 0;
            this._screenShakeTarget = new ib;
            this._camTarget = new ib;
            this._particleManager = new Ya(this._elementManager, this._tween, "minigame", 150);
            this._textParticleManager = new Aa(this._elementManager,
                this._tween, "minigame_ui");
            this._elementManager.addElement(new t({ asset: "ui/nick_kitchen_main_menu_bg", x: f.get_STAGE_CENTER_X() - 32, y: f.get_STAGE_CENTER_Y() }), "bottom");
            this._elementManager.addElement(new t({ asset: "ui/splash_nick_logo", x: f.get_STAGE_CENTER_X() - 30, y: f.get_STAGE_CENTER_Y() - 242 }), "bottom");
            this._elementManager.addElement(new t({ asset: "ui/splash_text", x: f.get_STAGE_CENTER_X() - 35, y: f.get_STAGE_CENTER_Y() - 155 }), "bottom");
            this._elementManager.addElement(new t({
                asset: "ui/nick_kitchen_main_menu_fg",
                x: f.get_STAGE_CENTER_X() - 32,
                y: f.get_STAGE_HEIGHT(),
                originY: 1
            }), "bottom");
            this._transitionScreen = [];
            this._transitionScreen.push(this._elementManager.addElement(new t({ asset: "ui/transition/platter_bottom", x: f.get_STAGE_CENTER_X(), y: this._BOT_TRAY_INIT_Y, useCamera: !1, originY: 0 }), "top"));
            this._transitionScreen[0].addChild(new t({ asset: "ui/platter_bottom_card", x: 0, y: 0, useCamera: !1, originY: 0 }));
            this._transitionScreen.push(this._elementManager.addElement(new t({
                asset: "ui/transition/platter_top",
                x: f.get_STAGE_CENTER_X(),
                y: this._TOP_TRAY_INIT_Y,
                useCamera: !1,
                originY: 1
            }), "top"));
            this._minigameTitle = this._transitionScreen[0].addChild(new Na({ text: "minigame.pound", align: ea.Center, y: 55 }));
            this._transitionOverlay = this._elementManager.addElement(new Ga({ color: 0, width: f.get_STAGE_WIDTH(), height: f.get_STAGE_HEIGHT(), x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), useCamera: !1 }), "top");
            this._transitionOverlay.set_alpha(0);
            this._elementManager.addElement(new Ga({
                originX: 1,
                color: 0,
                width: f.get_STAGE_WIDTH() / 2,
                height: f.get_STAGE_HEIGHT(),
                x: 0,
                y: f.get_STAGE_CENTER_Y(),
                useCamera: !1
            }), "top");
            this._elementManager.addElement(new Ga({ originX: 0, color: 0, width: f.get_STAGE_WIDTH() / 2, height: f.get_STAGE_HEIGHT(), x: f.get_STAGE_WIDTH(), y: f.get_STAGE_CENTER_Y(), useCamera: !1 }), "top");
            this._elementManager.addElement(new Ga({ originY: 1, color: 0, width: f.get_STAGE_WIDTH() / 2, height: 200, x: f.get_STAGE_CENTER_X(), y: 0, useCamera: !1 }), "top");
            this._elementManager.addElement(new Ga({
                originY: 0,
                color: 0,
                width: f.get_STAGE_WIDTH() / 2,
                height: 200,
                x: f.get_STAGE_CENTER_X(),
                y: f.get_STAGE_HEIGHT(),
                useCamera: !1
            }), "top");
            this._initWorldVars();
            this._tween.tween({ target: this, duration: 1, ease: v.linear, complete: G(this, this._allocateComplete) }, { allocateProgress: 1 })
        },
        _initWorldVars: function() { m.set_minigameResults([]) },
        _addEventListeners: function() { u.inputEvents.add(G(this, this._onInput));
            Kb.screenShake.add(G(this, this._onScreenShake));
            Kb.completeMinigame.add(G(this, this._onCompleteMinigame)) },
        _removeEventListeners: function() {
            u.inputEvents.remove(G(this, this._onInput));
            Kb.screenShake.remove(G(this,
                this._onScreenShake));
            Kb.completeMinigame.remove(G(this, this._onCompleteMinigame))
        },
        _allocateComplete: function() { na.worldAllocateComplete.dispatch();
            this._setState(sb.WAIT_FOR_LOAD_SCREEN) },
        _onScreenShake: function(a) { this._screenShakeTimer < a && (this._screenShakeTimer = a) },
        _onCompleteMinigame: function() { this._particleManager.clearPool();
            this._textParticleManager.clearPool();
            this._screenTransitionIn(G(this, this._moveToNextMinigame)) },
        _screenTransitionIn: function(a) {
            this._tween.tween({
                target: this._transitionOverlay,
                duration: 0.3,
                ease: v.linear,
                complete: a
            }, { alpha: 1 })
        },
        _moveToNextMinigame: function() { null != this._minigame && this._minigame.dispose();
            this._minigame = null;
            this._minigameLineup.splice(0, 1);
            this._particleManager.clearPool();
            this._textParticleManager.clearPool();
            this._checkIfAnotherMinigame() },
        _checkIfAnotherMinigame: function() {
            if (null != this._minigameLineup[0]) switch (this._minigame = m.createMinigameWorld(this._minigameLineup[0], this._elementManager, this._tween), this._minigameTitle.setText("minigame." + m.getRecipeNameString(this._minigameLineup[0])),
                this._minigameLineup[0][1]) {
                case 14:
                    this._tween.tween({ target: this._transitionOverlay, duration: 0.3, ease: v.linear, delay: 0.4, complete: G(this, this._startCountdown) }, { alpha: 0 }); break;
                default:
                    this._screenTransitionOut() } else this._tween.tween({ target: this._transitionOverlay, duration: 0.3, ease: v.linear, delay: 1.4 }, { alpha: 0 }), ka.start(function() { na.flow.dispatch(J.RECIPE_SELECT_OPEN) }, 1.7)
        },
        _screenTransitionOut: function() {
            var a = this;
            this._tween.tween({
                target: this._transitionOverlay,
                duration: 0.3,
                ease: v.linear,
                delay: 0.4
            }, { alpha: 0 });
            this._tween.tween({ target: this._transitionScreen[0], duration: 0.3, ease: v.inOutQuad, delay: 0.7 }, { y: this._BOT_TRAY_Y });
            this._tween.tween({
                target: this._transitionScreen[1],
                duration: 0.3,
                ease: v.inOutQuad,
                delay: 0.7,
                complete: function() {
                    ka.start(function() { n.playSound("tray_reveal") }, 0.2);
                    a._tween.tween({
                        target: a._transitionScreen[1],
                        duration: 0.35,
                        ease: v.linear,
                        delay: 0.2,
                        complete: function() {
                            a._tween.tween({
                                target: a._transitionScreen[1],
                                duration: 0.35,
                                ease: v.linear,
                                delay: 1.5,
                                complete: function() {
                                    n.playSound("tray_close",
                                        0.5);
                                    a._tween.tween({ target: a._transitionScreen[0], duration: 0.3, ease: v.inOutQuad, delay: 0.1 }, { y: a._BOT_TRAY_INIT_Y });
                                    a._tween.tween({ target: a._transitionScreen[1], duration: 0.3, ease: v.inOutQuad, delay: 0.1, complete: G(a, a._startCountdown) }, { y: a._TOP_TRAY_INIT_Y })
                                }
                            }, { rotation: 0, x: a._transitionScreen[1].x - 100, y: a._TOP_TRAY_Y })
                        }
                    }, { x: a._transitionScreen[1].x + 100, y: f.get_STAGE_CENTER_Y() - 250, rotation: 35 })
                }
            }, { y: this._TOP_TRAY_Y })
        },
        _startCountdown: function() { null != this._minigame && this._minigame.start() },
        _onInput: function(a,
            b) { if (!ba.getBool("paused") && null != this._minigame) this._minigame.onInput(a, b) },
        start: function() { this._setState(sb.GAMEPLAY) },
        _setState: function(a) { this._state = a; switch (this._state[1]) {
                case 0:
                    this.allocateProgress = 0;
                    this._initComplete = !1;
                    this._initWorld(); break;
                case 2:
                    m.set_minigameResults([]), ba.setInt("recipe_total_score", 0), this._screenTransitionIn(G(this, this._initMinigameFlow)) } },
        _initMinigameFlow: function() { this._minigameLineup = m.getRecipeMinigameList();
            this._playGameplayMusic();
            this._checkIfAnotherMinigame() },
        _playGameplayMusic: function() { m.getRecipePropertyPack() },
        update: function(a) { if (!ba.getBool("paused")) switch (this._state[1]) {
                case 0:
                    na.worldAllocateProgress.dispatch(this.allocateProgress);
                    this._elementManager.update(a);
                    this._tween.update(a); break;
                case 2:
                    this._updateCamera(a), this._elementManager.update(a), this._tween.update(a), null != this._minigame && this._minigame.update(a) } },
        _updateCamera: function(a) {
            0 < this._screenShakeTimer ? (this._screenShakeTimer -= a, this._screenShakeTarget.to(Math.random() * this._screenShakeTimer *
                15 - 7.5 * this._screenShakeTimer, Math.random() * this._screenShakeTimer * 15 - 7.5 * this._screenShakeTimer)) : this._screenShakeTarget.to(0, 0);
            this._elementManager.camera.x = this._camTarget.x + this._screenShakeTarget.x;
            this._elementManager.camera.y = this._camTarget.y + this._screenShakeTarget.y
        },
        __class__: Kb
    };
    var Xa = function() {};
    h["world.data.MinigameSaveManager"] = Xa;
    Xa.__name__ = ["world", "data", "MinigameSaveManager"];
    Xa.__properties__ = { set_minigameSaveData: "set_minigameSaveData", get_minigameSaveData: "get_minigameSaveData" };
    Xa.get_minigameSaveData = function() { return Xa.minigameSaveData };
    Xa.set_minigameSaveData = function(a) { return Xa.minigameSaveData = a };
    Xa.loadMinigameData = function() { Xa.set_minigameSaveData(mc.dataLoad("1.0.2")); "-1" == Xa.get_minigameSaveData().version && (Xa.set_minigameSaveData({ version: "1.0.2", minigameScores: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1] }), mc.dataSave("1.0.2", Xa.get_minigameSaveData()));
        null };
    Xa.saveMinigameData = function(a, b) {
        Xa.get_minigameSaveData().minigameScores[a] < b && (Xa.get_minigameSaveData().minigameScores[a] =
            b, mc.dataSave("1.0.2", Xa.get_minigameSaveData()), null)
    };
    var x = function(a, b, c) { this._END_GAME_DELAY = 3;
        this._UI_LAYER = "minigame_ui";
        this._MG_LAYER = "minigame";
        this._elementManager = a;
        this._tween = b;
        this._recipeType = c;
        this._inputPos = new ib;
        this._addEventListeners();
        this._setState(ja.INIT) };
    h["world.minigames.MinigameBase"] = x;
    x.__name__ = ["world", "minigames", "MinigameBase"];
    x.prototype = {
        dispose: function() {
            ka.stop("endMinigameTimer");
            this._removeEventListeners();
            for (var a = 0, b = this._childSprites; a < b.length;) {
                var c =
                    b[a];
                ++a;
                c.doDelete = !0
            }
            this._character = this._timer = this._countdownTimer = this._recipeType = this._gameResult = this._tutorialHand = this._state = this._tween = this._elementManager = this._childSprites = null;
            this._inputPos.dispose();
            this._inputPos = null
        },
        start: function() { this._setState(ja.COUNTDOWN) },
        _setState: function(a) {
            if (this._state != a) switch (this._state = a, a[1]) {
                case 0:
                    this._initWorld();
                    break;
                case 1:
                    this._countdownTimer.start();
                    break;
                case 2:
                    this._timer.startTimer();
                    break;
                case 3:
                    n.stopMusic(), n.playSound("gameplay_stinger"),
                        ka.start(function() { Kb.completeMinigame.dispatch() }, this._END_GAME_DELAY, "endMinigameTimer")
            }
        },
        update: function(a) {
            switch (this._state[1]) {
                case 2:
                    0 < this._timerGame && (this._timerGame -= a, 0 >= this._timerGame && (this._timerGame = 1, 6 >= this._timerGameCount && 1 < this._timerGameCount && (n.playSound("end_countdown_sfx", 0.5), a = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 100, textId: "gameplay.countdown", vars: [this._timerGameCount - 1], color: 268435455, lifeSpan: 1 }, Aa.spawnParticle.dispatch(a)), this._timerGameCount--,
                        0 >= this._timerGameCount && (this._timerGame = 0, this._checkMinigameWinOrLose())))
            }
        },
        _addEventListeners: function() { x.beginMinigame.add(G(this, this._onBeginMinigame));
            x.endMinigameEarly.add(G(this, this._onEndMinigameEarly));
            x.abandonMinigame.add(G(this, this._onAbandon)) },
        _removeEventListeners: function() { x.beginMinigame.remove(G(this, this._onBeginMinigame));
            x.endMinigameEarly.remove(G(this, this._onEndMinigameEarly));
            x.abandonMinigame.remove(G(this, this._onAbandon)) },
        _onAbandon: function() {
            D.sendEvent({
                event: "taskSummary",
                params: { gamemodeName: m.get_recipeID(), taskName: this._recipeType, outcome: "abandon" }
            });
            D.sendEvent({ event: "taskSummary", params: { gamemodeName: m.get_recipeID(), outcome: "abandon", score1: 0 } });
            for (var a = 0, b = this._childSprites; a < b.length;) { var c = b[a];++a;
                null != c && c.set_alpha(0) }
        },
        _onBeginMinigame: function() { this._tween.tween({ target: this._countdownTimer, duration: 0.5, ease: v.linear, delay: 0.5 }, { alpha: 0 });
            this._setState(ja.GAMEPLAY) },
        _onEndMinigameEarly: function(a) { this._timerGameCount = this._timerGame = 0;
            this._checkMinigameWinOrLose() },
        _checkMinigameWinOrLose: function() {},
        _setMinigameResult: function(a) {
            if (this._state == ja.GAMEPLAY) {
                this._timer.stopTimer();
                this._gameResult = a;
                switch (this._gameResult[1]) {
                    case 2:
                        a = { x: f.get_STAGE_CENTER_X() + 125, y: f.get_STAGE_CENTER_Y() - 200, textId: "minigame.fail", color: 11740160, backingAsset: "ui/results/bad_splat", lifeSpan: this._END_GAME_DELAY, rotation: 7 };
                        Aa.spawnParticle.dispatch(a);
                        n.playSound("fail");
                        this._character.reactGross();
                        D.sendEvent({
                            event: "taskSummary",
                            params: {
                                gamemodeName: "" + H.string(m.get_recipeID()),
                                taskName: "" + H.string(this._recipeType),
                                outcome: "fail"
                            }
                        });
                        break;
                    case 0:
                        a = { x: f.get_STAGE_CENTER_X() + 125, y: f.get_STAGE_CENTER_Y() - 200, textId: "minigame.good", color: 16777088, backingAsset: "ui/results/good_splat", lifeSpan: this._END_GAME_DELAY, rotation: 7 };
                        Aa.spawnParticle.dispatch(a);
                        ba.modifyInt("recipe_total_score", 1);
                        n.playSound("perfect_job");
                        this._character.reactIdle();
                        D.sendEvent({ event: "taskSummary", params: { gamemodeName: "" + H.string(m.get_recipeID()), taskName: "" + H.string(this._recipeType), outcome: "good" } });
                        break;
                    case 1:
                        a = { x: f.get_STAGE_CENTER_X() + 125, y: f.get_STAGE_CENTER_Y() - 200, textId: "minigame.perfect", color: 6750054, backingAsset: "ui/results/good_splat", lifeSpan: this._END_GAME_DELAY, rotation: 7 }, Aa.spawnParticle.dispatch(a), ba.modifyInt("recipe_total_score", 2), n.playSound("perfect_job"), this._character.reactSurprise(), D.sendEvent({ event: "taskSummary", params: { gamemodeName: "" + H.string(m.get_recipeID()), taskName: "" + H.string(this._recipeType), outcome: "perfect" } })
                }
                m.get_minigameResults().push(this._gameResult);
                this._setState(ja.GAME_COMPLETE)
            }
        },
        _initWorld: function() {
            this._childSprites = [];
            this._childSprites.push(this._elementManager.addElement(new Ga({ color: 0, width: f.get_STAGE_WIDTH(), height: f.get_STAGE_HEIGHT(), x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), useCamera: !1 }), this._MG_LAYER));
            this._timerGame = 1;
            this._timerGameCount = m.getGameLength(this._recipeType);
            this._gameResult = K.FAIL;
            n.playMusic("gameplay_music", 0.85);
            switch (m.getRecipePropertyPack()) {
                case "property_spongebob":
                    this._childSprites.push(this._elementManager.addElement(new t({
                        asset: "nick_kitchen_bg_sb",
                        x: f.get_STAGE_CENTER_X(),
                        y: f.get_STAGE_CENTER_Y()
                    }), this._MG_LAYER));
                    switch (m.get_recipeID()[1]) {
                        case 2:
                            this._childSprites.push(this._elementManager.addElement(new t({ asset: "pour/barrel_bg", originY: 1, x: 215, y: f.get_STAGE_CENTER_Y() + 100 }), this._MG_LAYER)) } this._childSprites.push(this._character = this._elementManager.addElement(new ad({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, this._tween), this._MG_LAYER));
                    this._childSprites.push(this._elementManager.addElement(new t({
                        asset: "nick_kitchen_fg_sb",
                        x: f.get_STAGE_CENTER_X(),
                        y: f.get_STAGE_HEIGHT(),
                        originY: 1
                    }), this._MG_LAYER));
                    break;
                case "property_henry_danger":
                    this._childSprites.push(this._elementManager.addElement(new t({ asset: "nick_kitchen_bg_hd", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }), this._MG_LAYER));
                    this._childSprites.push(this._character = this._elementManager.addElement(new ad({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, this._tween), this._MG_LAYER));
                    this._childSprites.push(this._elementManager.addElement(new t({
                        asset: "nick_kitchen_fg_hd",
                        x: f.get_STAGE_CENTER_X(),
                        y: f.get_STAGE_HEIGHT(),
                        originY: 1
                    }), this._MG_LAYER));
                    switch (m.get_recipeID()[1]) {
                        case 4:
                            this._childSprites.push(this._elementManager.addElement(new t({ asset: "sushidushi_noren", x: f.get_STAGE_CENTER_X(), y: -50, originY: 0 }), this._MG_LAYER)) }
                    break;
                case "property_gameshakers":
                    this._childSprites.push(this._elementManager.addElement(new t({ asset: "nick_kitchen_gameshakers_bg", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }), this._MG_LAYER)), this._childSprites.push(this._character =
                        this._elementManager.addElement(new ad({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, this._tween), this._MG_LAYER)), this._childSprites.push(this._elementManager.addElement(new t({ asset: "nick_kitchen_gameshakers_fg", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_HEIGHT(), originY: 1 }), this._MG_LAYER))
            }
            this._childSprites.push(this._countdownTimer = this._elementManager.addElement(new Zf({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 200 }), this._UI_LAYER));
            this._childSprites.push(this._tutorialHand = this._elementManager.addElement(new Ac({
                x: f.get_STAGE_CENTER_X(),
                y: f.get_STAGE_CENTER_Y(),
                alpha: 1
            }, this._tween), "top"));
            this._childSprites.push(this._timer = this._elementManager.addElement(new $f({ asset: "minigame_universal/timer", x: f.get_STAGE_CENTER_X() - 365, y: f.get_STAGE_CENTER_Y() + 205 }, this._tween, this._timerGameCount), this._UI_LAYER))
        },
        onInput: function(a, b) { switch (a[1]) {
                case 0:
                    b && this._updateInputPos() } },
        _pauseButtonCollisionCheck: function() { this._updateInputPos(); return this._inputPos.x > f.get_STAGE_WIDTH() - 300 && 150 >= this._inputPos.y ? !0 : !1 },
        _updateInputPos: function() {
            this._elementManager.camera.getWorldPositionOfScreenPoint(u.pointer.lastPos.x,
                u.pointer.lastPos.y, 0, this._inputPos)
        },
        __class__: x
    };
    var Lf = function(a, b, c) { this._BURN_TIME = 0.3;
        x.call(this, a, b, c) };
    h["world.minigames.MinigameBake"] = Lf;
    Lf.__name__ = ["world", "minigames", "MinigameBake"];
    Lf.__super__ = x;
    Lf.prototype = p(x.prototype, {
        dispose: function() { x.prototype.dispose.call(this);
            this._bakeButton = this._bakeObject = this._meter = null },
        update: function(a) {
            x.prototype.update.call(this, a);
            switch (this._state[1]) {
                case 2:
                    this._flagBake && 0 < this._burnTimer && (this._burnTimer -= a, 0 >= this._burnTimer &&
                        (this._burnTimer = this._BURN_TIME, this._increaseBakeCounter())), 12 <= this._bakeCount && 0 < this._smokeTimer && (this._smokeTimer -= a, 0 >= this._smokeTimer && (this._smokeTimer = 0.07, a = { x: this._bakeObject.x + S.randomFloat(0.5 * -this._bakeObject.get_width() * this._bakeObject.scaleX, 0.5 * this._bakeObject.get_width() * this._bakeObject.scaleY), y: this._bakeObject.y - 0.5 * this._bakeObject.get_height() * this._bakeObject.scaleY, type: $.SMOKE }, Ya.spawnParticle.dispatch(a)))
            }
        },
        _increaseBakeCounter: function() {
            this._bakeCount++;
            this._meter.updateBar(this._bakeCount);
            this._bakeObject.set_cookedState(this._bakeCount);
            switch (this._bakeCount) {
                case 9:
                    this._tutorialHand.set_alpha(1), this._tutorialHand.setTutorialType(R.TAP), m.get_recipeID() } 12 <= this._bakeCount && (this._burnTimer = 0, this._checkMinigameWinOrLose())
        },
        _onBeginMinigame: function() { x.prototype._onBeginMinigame.call(this);
            this._tutorialHand.x = f.get_STAGE_CENTER_X() + 300;
            this._tutorialHand.y = f.get_STAGE_CENTER_Y() - 175;
            this._tutorialHand.set_alpha(1);
            this._tutorialHand.setTutorialType(R.TAP) },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "minigame_universal/items/oven_back", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }), this._MG_LAYER));
            switch (m.get_recipeID()[1]) {
                case 3:
                    switch ((null == m.get_minigameResults()[0] ? K.PERFECT : m.get_minigameResults()[0])[1]) {
                        case 2:
                            this._childSprites.push(this._bakeObject = this._elementManager.addElement(new tb({ asset: "bake/sponge_raw_bad", x: f.get_STAGE_CENTER_X() - 40, y: f.get_STAGE_CENTER_Y() + 15 }, r.SPONGE_LOAF), this._MG_LAYER));
                            break;
                        case 0:
                        case 1:
                            this._childSprites.push(this._bakeObject = this._elementManager.addElement(new tb({ asset: "bake/sponge_raw", x: f.get_STAGE_CENTER_X() - 40, y: f.get_STAGE_CENTER_Y() + 15 }, r.SPONGE_LOAF), this._MG_LAYER))
                    }
                    break;
                case 7:
                    this._childSprites.push(this._bakeObject = this._elementManager.addElement(new tb({ asset: "bake/muffins_fail_baked", x: f.get_STAGE_CENTER_X() - 40, y: f.get_STAGE_CENTER_Y() }, r.MUFFINS), this._MG_LAYER))
            }
            this._childSprites.push(this._elementManager.addElement(new t({
                asset: "minigame_universal/items/oven_front",
                x: f.get_STAGE_CENTER_X(),
                y: f.get_STAGE_CENTER_Y()
            }), this._MG_LAYER));
            this._childSprites.push(this._bakeButton = this._elementManager.addElement(new N({ alpha: 0, asset: "minigame_universal/good_spot", x: f.get_STAGE_CENTER_X() + 305, y: f.get_STAGE_CENTER_Y() - 125 }), this._MG_LAYER));
            this._childSprites.push(this._meter = this._elementManager.addElement(new Bc({ x: f.get_STAGE_CENTER_X() - 40, y: f.get_STAGE_CENTER_Y() + 140 }, this._tween, this._BURN_TIME, 10), this._UI_LAYER));
            this._character.x -= 50;
            this._flagBake = !1;
            this._burnTimer =
                this._BURN_TIME;
            this._bakeCount = 0;
            this._smokeTimer = 0.7
        },
        onInput: function(a, b) { if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    b && (this._updateInputPos(), this._bakeButton.contains(this._inputPos.x, this._inputPos.y) && (!1 == this._flagBake ? (this._flagBake = !0, this._tutorialHand.set_alpha(0)) : (this._flagBake = !1, 6 < this._bakeCount && this._checkMinigameWinOrLose()))) } },
        _checkMinigameWinOrLose: function() {
            this._meter.stopBar();
            this._tutorialHand.set_alpha(0);
            this._gameResult =
                this._bakeObject.getMinigameResult();
            this._setMinigameResult(this._gameResult)
        },
        __class__: Lf
    });
    var ja = h["world.minigames.MINIGAME_STATE"] = { __ename__: ["world", "minigames", "MINIGAME_STATE"], __constructs__: ["INIT", "COUNTDOWN", "GAMEPLAY", "GAME_COMPLETE"] };
    ja.INIT = ["INIT", 0];
    ja.INIT.toString = l;
    ja.INIT.__enum__ = ja;
    ja.COUNTDOWN = ["COUNTDOWN", 1];
    ja.COUNTDOWN.toString = l;
    ja.COUNTDOWN.__enum__ = ja;
    ja.GAMEPLAY = ["GAMEPLAY", 2];
    ja.GAMEPLAY.toString = l;
    ja.GAMEPLAY.__enum__ = ja;
    ja.GAME_COMPLETE = ["GAME_COMPLETE", 3];
    ja.GAME_COMPLETE.toString =
        l;
    ja.GAME_COMPLETE.__enum__ = ja;
    var K = h["world.minigames.MINIGAME_RESULT"] = { __ename__: ["world", "minigames", "MINIGAME_RESULT"], __constructs__: ["GOOD", "PERFECT", "FAIL"] };
    K.GOOD = ["GOOD", 0];
    K.GOOD.toString = l;
    K.GOOD.__enum__ = K;
    K.PERFECT = ["PERFECT", 1];
    K.PERFECT.toString = l;
    K.PERFECT.__enum__ = K;
    K.FAIL = ["FAIL", 2];
    K.FAIL.toString = l;
    K.FAIL.__enum__ = K;
    var Mf = function(a, b, c) { this._BLEND_TIME = 0.25;
        x.call(this, a, b, c) };
    h["world.minigames.MinigameBlend"] = Mf;
    Mf.__name__ = ["world", "minigames", "MinigameBlend"];
    Mf.__super__ =
        x;
    Mf.prototype = p(x.prototype, {
        dispose: function() { x.prototype.dispose.call(this);
            this._liquidVFX = this._meter = this._liquid = this._blender = this._blenderButton = null },
        update: function(a) {
            x.prototype.update.call(this, a);
            if (this._flagStartBlender && (this._blender.x = this._startX + S.randomFloat(-2.5, 2.5), this._blender.y = this._startY + S.randomFloat(-2.5, 2.5), this._blender.set_rotation(S.randomFloat(-3, 3)), 0 < this._timerBlendGoal && (this._timerBlendGoal -= a, 0 >= this._timerBlendGoal)))
                if (this._timerBlendGoal = this._BLEND_TIME,
                    this._blendCount++, this._meter.updateBar(this._blendCount), 12 <= this._blendCount) this._checkMinigameWinOrLose();
                else if (8 == this._blendCount) switch (this._tutorialHand.set_alpha(1), this._tutorialHand.setTutorialType(R.STOP), m.get_recipeID()[1]) {
                case 9:
                    this._liquid.setAsset("blend/juice_good"), this._liquid.render(null) }
        },
        _onBeginMinigame: function() { x.prototype._onBeginMinigame.call(this);
            this._tutorialHand.setTutorialType(R.HOLD) },
        _startBlender: function() {
            this._flagStartBlender = !0;
            n.playSound("blend",
                1, null, !0);
            null != this._liquidVFX && (this._liquidVFX.set_alpha(1), this._liquidVFX.animate("blend"))
        },
        _stopBlender: function() { this._flagStartBlender = !1;
            this._checkMinigameWinOrLose();
            n.stopSound("blend");
            null != this._liquidVFX && this._liquidVFX.set_alpha(0) },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            this._flagStartBlender = !1;
            this._blendCount = 0;
            this._timerBlendGoal = this._BLEND_TIME;
            this._childSprites.push(this._blender = this._elementManager.addElement(new t({
                x: f.get_STAGE_CENTER_X(),
                y: f.get_STAGE_CENTER_Y() -
                    50
            }), this._MG_LAYER));
            var a;
            a = null == m.get_minigameResults()[m.get_minigameResults().length - 1] ? K.PERFECT : m.get_minigameResults()[m.get_minigameResults().length - 1];
            switch (m.get_recipeID()[1]) {
                case 2:
                    this._liquid = this._blender.addChild(new t({ asset: "blend/juice_bad", x: 5, y: 50 }));
                    this._liquidVFX = this._blender.addChild(new Hb({ x: 5, y: 50 }));
                    switch (a[1]) {
                        case 2:
                            this._liquidVFX.addAnimation("blend", ["blend/kelp_blend_bad1", "blend/kelp_blend_bad2", "blend/kelp_blend_bad3"]);
                            break;
                        case 0:
                        case 1:
                            this._liquid.setAsset("blend/juice_good"),
                                this._liquid.render(null), this._liquidVFX.addAnimation("blend", ["blend/kelp_blend1", "blend/kelp_blend2", "blend/kelp_blend3"])
                    }
                    break;
                case 9:
                    this._liquid = this._blender.addChild(new t({ asset: "blend/juice_bad", x: 5, y: 50 })), this._liquidVFX = this._blender.addChild(new Hb({ x: 5, y: 50 })), this._liquidVFX.addAnimation("blend", ["blend/blend1", "blend/blend2", "blend/blend3"])
            }
            this._blender.addChild(new t({ asset: "minigame_universal/items/blender" }));
            this._childSprites.push(this._blenderButton = this._elementManager.addElement(new N({
                alpha: 0,
                asset: "minigame_universal/good_spot",
                x: f.get_STAGE_CENTER_X() + 20,
                y: f.get_STAGE_CENTER_Y() + 175
            }), this._MG_LAYER));
            this._childSprites.push(this._meter = this._elementManager.addElement(new Bc({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 240 }, this._tween, this._BLEND_TIME, 10), this._UI_LAYER));
            this._tutorialHand.x = f.get_STAGE_CENTER_X() + 20;
            this._tutorialHand.y = f.get_STAGE_CENTER_Y() + 153;
            this._startX = this._blender.x;
            this._startY = this._blender.y
        },
        onInput: function(a, b) {
            if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    b ?
                        (this._updateInputPos(), this._blenderButton.contains(this._inputPos.x, this._inputPos.y) && !1 == this._flagStartBlender && this._startBlender()) : this._flagStartBlender && this._stopBlender()
            }
        },
        _checkMinigameWinOrLose: function() {
            switch (this._blendCount) {
                case 7:
                case 8:
                    this._gameResult = K.GOOD;
                    break;
                case 9:
                case 10:
                case 11:
                    this._gameResult = K.PERFECT;
                    break;
                default:
                    this._gameResult = K.FAIL;
                    switch (m.get_recipeID()[1]) {
                        case 9:
                            this._liquid.setAsset("blend/juice_bad"), this._liquid.render(null) } this._flagStartBlender = !1;
                    n.stopSound("blend")
            }
            this._blender.x = this._startX;
            this._blender.y = this._startY;
            this._blender.set_rotation(0);
            this._meter.stopBar();
            this._tutorialHand.set_alpha(0);
            this._setMinigameResult(this._gameResult)
        },
        __class__: Mf
    });
    var cc = h["world.minigames._MinigameBoil.GAME_PHASE"] = { __ename__: ["world", "minigames", "_MinigameBoil", "GAME_PHASE"], __constructs__: ["POUR_PHASE", "BOIL_PHASE"] };
    cc.POUR_PHASE = ["POUR_PHASE", 0];
    cc.POUR_PHASE.toString = l;
    cc.POUR_PHASE.__enum__ = cc;
    cc.BOIL_PHASE = ["BOIL_PHASE", 1];
    cc.BOIL_PHASE.toString =
        l;
    cc.BOIL_PHASE.__enum__ = cc;
    var Tf = function(a, b, c) { this._DEBUG_HITBOX = 0;
        this._PARTICLE_TIMER = 0.2;
        this._FILL_LINE = -150;
        x.call(this, a, b, c) };
    h["world.minigames.MinigameBoil"] = Tf;
    Tf.__name__ = ["world", "minigames", "MinigameBoil"];
    Tf.__super__ = x;
    Tf.prototype = p(x.prototype, {
        dispose: function() { x.prototype.dispose.call(this);
            this._liquidVFX = this._hitBox = this._selectedIngredient = this._ingredients = this._gamePhase = this._container = this._rice = this._pot = null },
        _setGamePhase: function(a) {
            var b = this;
            this._gamePhase =
                a;
            switch (this._gamePhase[1]) {
                case 0:
                    this._tutorialHand.x = f.get_STAGE_CENTER_X();
                    this._tutorialHand.y = 190;
                    break;
                case 1:
                    switch (n.stopSound("rice_pour"), m.get_recipeID()[1]) {
                        case 4:
                        case 6:
                            this._tween.tween({ target: this._tutorialHand, duration: 0.5, ease: v.linear, delay: 0.5 }, { alpha: 1 });
                            this._tween.tween({ target: this._container, duration: 0.25, ease: v.linear, complete: function() { b._tween.tween({ target: b._container, duration: 0.4, ease: v.linear }, { y: f.get_STAGE_CENTER_Y() - 225 - 500, alpha: 0 }) } }, {
                                rotation: -30,
                                x: f.get_STAGE_CENTER_X() +
                                    300,
                                y: f.get_STAGE_CENTER_Y() - 225
                            });
                            break;
                        case 8:
                            this._tutorialHand.setTutorialType(R.HOLD), this._tween.tween({ target: this._tutorialHand, duration: 0.5, ease: v.linear }, { alpha: 1 }), this._tutorialHand.x = f.get_STAGE_CENTER_X(), this._tutorialHand.y = 190
                    }
            }
        },
        update: function(a) {
            x.prototype.update.call(this, a);
            switch (this._gamePhase[1]) {
                case 0:
                    switch (m.get_recipeID()[1]) {
                        case 4:
                        case 6:
                            if (this._flagMouseDown && (0 < this._timerPour && (this._timerPour -= a, 0 >= this._timerPour && (this._timerPour = 0, this._tutorialHand.set_alpha(0),
                                    this._flagMouseDown = !1, this._setGamePhase(cc.BOIL_PHASE))), 0 < this._timerParticle && (this._timerParticle -= a, 0 >= this._timerParticle)))
                                for (this._timerParticle = 0.1, a = 10; 0 < a--;) { var b = { x: S.randomFloat(f.get_STAGE_CENTER_X() + 125, f.get_STAGE_CENTER_X() + 125), y: S.randomFloat(f.get_STAGE_CENTER_Y() - 180, f.get_STAGE_CENTER_Y() - 170), type: $.RICE };
                                    Ya.spawnParticle.dispatch(b) }
                    }
                    break;
                case 1:
                    this._flagMouseDown && (this._rice.y == this._FILL_LINE ? 0 < this._timerBurn && (this._timerBurn -= a, 0 >= this._timerBurn && (this._timerBurn =
                            0.25, a = this._rice, a.set_cookedState(a.get_cookedState() + 1), 2 <= this._rice.get_cookedState() && (this._tutorialHand.set_alpha(0), n.stopSound("boil"), this._flagMouseDown = !1, this._checkMinigameWinOrLose()))) : (this._rice.y -= 75 * a, this._rice.y <= this._FILL_LINE && (this._rice.y = this._FILL_LINE, this._timerBurn = 1, this._tutorialHand.setTutorialType(R.STOP))), this._pot.x = this._startX + S.randomFloat(-2, 2), this._pot.y = this._startY + S.randomFloat(-2, 2), this._pot.set_rotation(S.randomFloat(-3, 3)), this._potFront.x = this._pot.x,
                        this._potFront.y = this._pot.y, this._potFront.set_rotation(this._pot.rotation))
            }
        },
        _onBeginMinigame: function() { x.prototype._onBeginMinigame.call(this); switch (m.get_recipeID()[1]) {
                case 8:
                    this._tutorialHand.setTutorialType(R.TRACE, [this._ingredients[0].x - f.get_STAGE_CENTER_X(), 0], [this._ingredients[0].y - 160, -25], 0.6); break;
                default:
                    this._tutorialHand.setTutorialType(R.HOLD), this._tutorialHand.set_alpha(0), this._tween.tween({ target: this._tutorialHand, duration: 0.5, ease: v.linear }, { alpha: 1 }) } },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            this._flagMouseDown = !1;
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "minigame_universal/items/nick_kitchen_stovetop", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 100 }), this._MG_LAYER));
            this._childSprites.push(this._pot = this._elementManager.addElement(new t({ asset: "pot_back", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 10, scale: 0.75 }), this._MG_LAYER));
            this._rice = this._pot.addChild(new tb({ asset: "rice_pot", y: 0 }, r.RICE));
            this._liquidVFX = this._pot.addChild(new Hb({
                x: 0,
                y: -160
            }));
            this._childSprites.push(this._potFront = this._elementManager.addElement(new t({ asset: "pot_front", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 10, scale: 0.75 }), this._UI_LAYER));
            switch (m.get_recipeID()[1]) {
                case 4:
                    this._childSprites.push(this._container = this._elementManager.addElement(new t({ asset: "boil/box_rice", x: f.get_STAGE_CENTER_X() + 300, y: f.get_STAGE_CENTER_Y() - 225, rotation: -30 }), this._MG_LAYER));
                    break;
                case 6:
                    this._childSprites.push(this._container = this._elementManager.addElement(new t({
                        asset: "boil/box_oats",
                        x: f.get_STAGE_CENTER_X() + 300,
                        y: f.get_STAGE_CENTER_Y() - 225,
                        rotation: -30
                    }), this._MG_LAYER));
                    break;
                case 8:
                    this._rice.set_alpha(0);
                    this._ingredients = [];
                    var a = "chop/potato_back";
                    switch ((null == m.get_minigameResults()[m.get_minigameResults().length - 1] ? K.PERFECT : m.get_minigameResults()[m.get_minigameResults().length - 1])[1]) {
                        case 2:
                            a = "chop/potato_back_bad" } this._childSprites.push(this._elementManager.addElement(new N({ asset: a, x: f.get_STAGE_CENTER_X() - 125, y: f.get_STAGE_CENTER_Y() + 215, scale: 1 }), this._UI_LAYER));
                    this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                    this._childSprites.push(this._elementManager.addElement(new N({ asset: a, x: f.get_STAGE_CENTER_X() + 110, y: f.get_STAGE_CENTER_Y() + 215, scale: 1, rotation: -45 }), this._UI_LAYER));
                    this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                    this._childSprites.push(this._elementManager.addElement(new N({ asset: a, x: f.get_STAGE_CENTER_X() + 350, y: f.get_STAGE_CENTER_Y() + 215, scale: 1, rotation: -20 }), this._UI_LAYER));
                    this._ingredients.push(this._childSprites[this._childSprites.length -
                        1]);
                    this._liquidVFX.addAnimation("splash", "boil/nick_kitchen_animations_watersplash0000 boil/nick_kitchen_animations_watersplash0001 boil/nick_kitchen_animations_watersplash0002 boil/nick_kitchen_animations_watersplash0003 boil/nick_kitchen_animations_watersplash0004 boil/nick_kitchen_animations_watersplash0005 boil/nick_kitchen_animations_watersplash0006 boil/nick_kitchen_animations_watersplash0007 boil/nick_kitchen_animations_watersplash0008 boil/nick_kitchen_animations_watersplash0009 boil/nick_kitchen_animations_watersplash0010 boil/nick_kitchen_animations_watersplash0011 boil/nick_kitchen_animations_watersplash0012 boil/nick_kitchen_animations_watersplash0013".split(" "))
            }
            this._childSprites.push(this._hitBox =
                this._elementManager.addElement(new Ga({ color: 16777215, width: 425, height: 280, x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 160, alpha: this._DEBUG_HITBOX }), this._UI_LAYER));
            this._tutorialHand.doDelete = !0;
            this._tutorialHand = null;
            this._childSprites.push(this._tutorialHand = this._elementManager.addElement(new Ac({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), alpha: 1 }, this._tween), this._UI_LAYER));
            this._timerPour = 2;
            this._timerParticle = this._PARTICLE_TIMER;
            this._setGamePhase(cc.POUR_PHASE);
            this._startX =
                this._pot.x;
            this._startY = this._pot.y
        },
        onInput: function(a, b) {
            var c = this;
            if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    if (b) switch (this._flagMouseDown = !0, this._updateInputPos(), this._gamePhase[1]) {
                        case 0:
                            switch (m.get_recipeID()[1]) {
                                case 4:
                                case 6:
                                    n.playSound("rice_pour", 1.5, null, !0);
                                    this._tween.stop(this._container);
                                    this._timerParticle = this._PARTICLE_TIMER;
                                    this._tween.tween({ target: this._container, duration: 0.25, ease: v.linear }, {
                                        rotation: -115,
                                        x: f.get_STAGE_CENTER_X() +
                                            275,
                                        y: f.get_STAGE_CENTER_Y() - 325
                                    });
                                    break;
                                case 8:
                                    n.playSound("pick_up");
                                    for (var d = this._ingredients.length; 0 < d--;)
                                        if (this._ingredients[d].contains(this._inputPos.x, this._inputPos.y)) { this._tutorialHand.set_alpha(0);
                                            this._selectedIngredient = this._ingredients[d];
                                            this._prevX = this._ingredients[d].x;
                                            this._prevY = this._ingredients[d].y; break }
                            }
                            break;
                        case 1:
                            n.stopSound("boil"), n.playSound("boil", 1, null, !0)
                    } else switch (this._gamePhase[1]) {
                        case 0:
                            switch (m.get_recipeID()[1]) {
                                case 4:
                                case 6:
                                    n.stopSound("rice_pour");
                                    this._flagMouseDown && (this._flagMouseDown = !1, this._tween.tween({ target: this._container, duration: 0.25, ease: v.linear }, { rotation: -30, x: f.get_STAGE_CENTER_X() + 300, y: f.get_STAGE_CENTER_Y() - 225 }));
                                    break;
                                case 8:
                                    if (this._flagMouseDown && (this._flagMouseDown = !1, null != this._selectedIngredient))
                                        if (this._inputPos.x > this._hitBox.x - this._hitBox.sizeX / 2 && this._inputPos.x < this._hitBox.x + this._hitBox.sizeX / 2 && this._inputPos.y > this._hitBox.y - this._hitBox.sizeY / 2 && this._inputPos.y < this._hitBox.y + this._hitBox.sizeY / 2) {
                                            this._liquidVFX.animate("splash",
                                                1, !0);
                                            n.playSound("splash");
                                            this._selectedIngredient.doDelete = !0;
                                            this._selectedIngredient = null;
                                            for (d = this._ingredients.length; 0 < d--;) this._ingredients[d].doDelete && this._ingredients.splice(d, 1);
                                            0 == this._ingredients.length && this._setGamePhase(cc.BOIL_PHASE)
                                        } else this._tween.tween({ target: this._selectedIngredient, duration: 0.25, ease: v.outQuad, complete: function() { c._selectedIngredient = null } }, { x: this._prevX, y: this._prevY, scale: 1 })
                            }
                            break;
                        case 1:
                            this._flagMouseDown && (n.stopSound("boil"), this._flagMouseDown = !1, this._rice.y <= this._FILL_LINE && this._checkMinigameWinOrLose())
                    }
                    break;
                case 10:
                    switch (this._gamePhase[1]) {
                        case 0:
                            switch (m.get_recipeID()[1]) {
                                case 8:
                                    this._flagMouseDown && (this._updateInputPos(), null != this._selectedIngredient && (this._selectedIngredient.x = this._inputPos.x, this._selectedIngredient.y = this._inputPos.y)) } }
            }
        },
        _checkMinigameWinOrLose: function() {
            if (this._rice.y <= this._FILL_LINE) switch (this._rice.get_cookedState()) {
                case 0:
                    this._gameResult = K.PERFECT;
                    break;
                case 1:
                    this._gameResult = K.GOOD;
                    break;
                case 2:
                    this._gameResult = K.FAIL
            }
            this._pot.x = this._startX;
            this._pot.y = this._startY;
            this._pot.set_rotation(0);
            this._tutorialHand.set_alpha(0);
            m.get_recipeIngredientTintColors().push(this._rice.tint);
            this._setMinigameResult(this._gameResult)
        },
        __class__: Tf
    });
    var Pf = function(a, b, c) { this._OFFSET_Y = 500;
        this._PERFECT_CHOP_COUNT = this._GOOD_CHOP_COUNT = 3;
        x.call(this, a, b, c) };
    h["world.minigames.MinigameChop"] = Pf;
    Pf.__name__ = ["world", "minigames", "MinigameChop"];
    Pf.__super__ = x;
    Pf.prototype = p(x.prototype, {
        dispose: function() {
            x.prototype.dispose.call(this);
            this._chopLine = this._drawLine = this._rightMasks = this._leftMasks = this._rightSprites = this._leftSprites = this._displaySprites = this._ingredientList = null
        },
        update: function(a) { x.prototype.update.call(this, a) },
        _onBeginMinigame: function() { x.prototype._onBeginMinigame.call(this); switch (m.get_recipeID()[1]) {
                case 8:
                    this._tutorialHand.x += 40;
                    this._tutorialHand.setTutorialType(R.SWIPE_DOWN); break;
                default:
                    this._tutorialHand.setTutorialType(R.SWIPE) } },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            this._displaySprites = [];
            this._leftSprites = [];
            this._rightSprites = [];
            this._leftMasks = [];
            this._rightMasks = [];
            this._currentIndex = this._numFailChops = this._numGoodChops = this._numPerfectChops = 0;
            var a = 5,
                b = m.getMinigameIngredientList(this._recipeType)[0];
            this._ingredientList = [];
            switch (m.get_recipeID()[1]) {
                case 1:
                    this._ingredientList.push(r.TOMATO);
                    this._ingredientList.push(r.PICKLE);
                    this._ingredientList.push(r.ONION);
                    a = 2; break;
                case 6:
                    this._ingredientList.push(r.APPLE), this._ingredientList.push(r.STRAWBERRY), a = 3 }
            for (; 0 < a--;) {
                var c =
                    S.randomInt(0, b.length - 1);
                this._ingredientList.push(b[c])
            }
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "minigame_universal/items/cuttingboard", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 80 }), this._MG_LAYER));
            for (a = 0; a < this._ingredientList.length;) {
                switch (this._ingredientList[a][1]) {
                    case 5:
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({ asset: "chop/tomato_back", x: f.get_STAGE_CENTER_X() - 118.5, y: f.get_STAGE_CENTER_Y() + 85, originX: 0, originY: 1 }, this._ingredientList[a]),
                            this._MG_LAYER));
                        this._leftSprites.push(b);
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({ asset: "chop/tomato_front", x: f.get_STAGE_CENTER_X() + 118.5, y: f.get_STAGE_CENTER_Y() + 85, originX: 1, originY: 1 }, this._ingredientList[a]), this._MG_LAYER));
                        this._rightSprites.push(b);
                        break;
                    case 3:
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({ asset: "chop/onion_back", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, this._ingredientList[a]), this._MG_LAYER));
                        this._leftSprites.push(b);
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({ asset: "chop/onion_front", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, this._ingredientList[a]), this._MG_LAYER));
                        this._rightSprites.push(b);
                        break;
                    case 4:
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({ asset: "chop/pickle_back", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, this._ingredientList[a]), this._MG_LAYER));
                        this._leftSprites.push(b);
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({
                            asset: "chop/pickle_front",
                            x: f.get_STAGE_CENTER_X(),
                            y: f.get_STAGE_CENTER_Y()
                        }, this._ingredientList[a]), this._MG_LAYER));
                        this._rightSprites.push(b);
                        break;
                    case 17:
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({ asset: "chop/strawberry_back", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, this._ingredientList[a]), this._MG_LAYER));
                        this._leftSprites.push(b);
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({ asset: "chop/strawberry_front", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, this._ingredientList[a]),
                            this._MG_LAYER));
                        this._rightSprites.push(b);
                        break;
                    case 18:
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({ asset: "chop/apple_back", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, this._ingredientList[a]), this._MG_LAYER));
                        this._leftSprites.push(b);
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({ asset: "chop/apple_front", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, this._ingredientList[a]), this._MG_LAYER));
                        this._rightSprites.push(b);
                        break;
                    case 25:
                        this._childSprites.push(b =
                            this._elementManager.addElement(new Oa({ asset: "chop/banana_good_top", x: f.get_STAGE_CENTER_X() + 22.5, y: f.get_STAGE_CENTER_Y() + 100 }, this._ingredientList[a]), this._MG_LAYER));
                        this._rightSprites.push(b);
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({ asset: "chop/banana_good_bottom", x: f.get_STAGE_CENTER_X() - 10, y: f.get_STAGE_CENTER_Y() - 100 }, this._ingredientList[a]), this._MG_LAYER));
                        this._leftSprites.push(b);
                        break;
                    case 26:
                        this._childSprites.push(b = this._elementManager.addElement(new Oa({
                            asset: "chop/potato_back",
                            x: f.get_STAGE_CENTER_X() + 75,
                            y: f.get_STAGE_CENTER_Y(),
                            originX: 1
                        }, this._ingredientList[a]), this._MG_LAYER)), this._leftSprites.push(b), this._childSprites.push(b = this._elementManager.addElement(new Oa({ asset: "chop/potato_front", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), originX: 0 }, this._ingredientList[a]), this._MG_LAYER)), this._rightSprites.push(b)
                }
                a++
            }
            for (a = 1; a < this._leftSprites.length;) this._leftSprites[a].y -= this._OFFSET_Y, this._rightSprites[a].y -= this._OFFSET_Y, a++;
            this._childSprites.push(this._drawLine =
                this._elementManager.addElement(new Jd({ color: 0, width: 250, height: 5, originX: 0, originY: 0, x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), alpha: 0 }), this._MG_LAYER));
            this._childSprites.push(this._chopLine = this._elementManager.addElement(new Kd({ asset: "minigame_universal/slice_line", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 25 }), this._MG_LAYER));
            this._setChopLine();
            this._flagMouseDown = this._flagDisableInput = !1
        },
        onInput: function(a, b) {
            if (this._state == ja.GAMEPLAY && !this._flagDisableInput) {
                switch (a[1]) {
                    case 8:
                        b &&
                            null;
                        break;
                    case 0:
                        if (b) { this._updateInputPos(); if (this._inputPos.x > f.get_STAGE_WIDTH() - 300 && 150 >= this._inputPos.y) return;
                            this._flagMouseDown = !0;
                            this._startX = this._inputPos.x;
                            this._startY = this._inputPos.y } else this._flagMouseDown && (this._updateInputPos(), this._flagMouseDown = !1, this._checkCutResult());
                        break;
                    case 10:
                        this._flagMouseDown && (this._updateInputPos(), this._chopLine.beginCheck(this._startX, this._startY, this._inputPos.x, this._inputPos.y))
                }
                if (null != this._drawLine) this._drawLine.onInput(a, b, this._inputPos.x,
                    this._inputPos.y)
            }
        },
        _checkCutResult: function() {
            if (this._chopLine.getNumberOfPerfectSpotsHit() >= this._PERFECT_CHOP_COUNT) { var a = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), textId: "minigame.perfect", color: 6750054 };
                Aa.spawnParticle.dispatch(a);
                this._numPerfectChops++ } else {
                if (this._chopLine.getNumberOfGoodSpotsHit() >= this._GOOD_CHOP_COUNT) {
                    a = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), textId: "minigame.good", color: 16777088 };
                    Aa.spawnParticle.dispatch(a);
                    this._numGoodChops++;
                    var b = a = "";
                    switch (this._leftSprites[this._currentIndex].get_ingredientType()[1]) {
                        case 5:
                            a =
                                "chop/tomato_back_good";
                            b = "chop/tomato_front_good";
                            break;
                        case 3:
                            a = "chop/onion_back_good";
                            b = "chop/onion_front_good";
                            break;
                        case 4:
                            a = "chop/pickle_back_good";
                            b = "chop/pickle_front_good";
                            break;
                        case 17:
                            a = "mix/strawberry_back_bad";
                            b = "chop/strawberry_front_bad";
                            break;
                        case 18:
                            a = "chop/apple_back_bad";
                            b = "chop/apple_front_bad";
                            break;
                        case 25:
                            a = "chop/banana_fail_bottom", b = "chop/banana_fail_top"
                    }
                } else switch (a = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), textId: "minigame.fail", color: 11740160 }, Aa.spawnParticle.dispatch(a),
                    this._numFailChops++, b = a = "", this._leftSprites[this._currentIndex].get_ingredientType()[1]) {
                    case 5:
                        a = "chop/tomato_back_bad";
                        b = "chop/tomato_front_bad";
                        break;
                    case 3:
                        a = "chop/onion_back_bad";
                        b = "chop/onion_front_bad";
                        break;
                    case 4:
                        a = "chop/pickle_back_bad";
                        b = "chop/pickle_front_bad";
                        break;
                    case 17:
                        a = "mix/strawberry_back_bad";
                        b = "chop/strawberry_front_bad";
                        break;
                    case 18:
                        a = "chop/apple_back_bad";
                        b = "chop/apple_front_bad";
                        break;
                    case 25:
                        a = "chop/banana_fail_bottom";
                        b = "chop/banana_fail_top";
                        break;
                    case 26:
                        a = "chop/potato_back_bad",
                            b = "chop/potato_front_bad"
                }
                this._leftSprites[this._currentIndex].setAsset(a);
                this._leftSprites[this._currentIndex].render(null);
                this._rightSprites[this._currentIndex].setAsset(b);
                this._rightSprites[this._currentIndex].render(null)
            }
            switch (this._leftSprites[this._currentIndex].get_ingredientType()[1]) {
                case 5:
                    this._tween.tween({ target: this._leftSprites[this._currentIndex], duration: 0.25, ease: v.linear }, { rotation: -35 });
                    this._tween.tween({
                        target: this._rightSprites[this._currentIndex],
                        duration: 0.25,
                        ease: v.linear,
                        complete: G(this, this._grabCutIngredientIn)
                    }, { x: this._rightSprites[this._currentIndex].x + 15, y: this._rightSprites[this._currentIndex].y + 10 });
                    break;
                case 3:
                    this._tween.tween({ target: this._leftSprites[this._currentIndex], duration: 0.25, ease: v.linear }, { x: this._leftSprites[this._currentIndex].x - 50 });
                    this._tween.tween({ target: this._rightSprites[this._currentIndex], duration: 0.25, ease: v.linear, complete: G(this, this._grabCutIngredientIn) }, {
                        x: this._rightSprites[this._currentIndex].x + 70,
                        y: this._rightSprites[this._currentIndex].y +
                            15
                    });
                    break;
                case 4:
                    this._tween.tween({ target: this._leftSprites[this._currentIndex], duration: 0.1, ease: v.linear }, { x: this._leftSprites[this._currentIndex].x - 15, rotation: -5 });
                    this._tween.tween({ target: this._rightSprites[this._currentIndex], duration: 0.1, ease: v.linear, complete: G(this, this._grabCutIngredientIn) }, { x: this._rightSprites[this._currentIndex].x + 15, rotation: 5 });
                    break;
                case 18:
                    this._tween.tween({ target: this._leftSprites[this._currentIndex], duration: 0.25, ease: v.outQuad }, {
                        x: this._leftSprites[this._currentIndex].x -
                            25,
                        y: this._rightSprites[this._currentIndex].y - 10
                    });
                    this._tween.tween({ target: this._rightSprites[this._currentIndex], duration: 0.25, ease: v.outQuad, complete: G(this, this._grabCutIngredientIn) }, { x: this._rightSprites[this._currentIndex].x + 25, y: this._rightSprites[this._currentIndex].y + 10 });
                    break;
                case 17:
                    this._tween.tween({ target: this._leftSprites[this._currentIndex], duration: 0.25, ease: v.outQuad }, { x: this._leftSprites[this._currentIndex].x - 25, y: this._rightSprites[this._currentIndex].y - 10 });
                    this._tween.tween({
                        target: this._rightSprites[this._currentIndex],
                        duration: 0.25,
                        ease: v.outQuad,
                        complete: G(this, this._grabCutIngredientIn)
                    }, { rotation: 30, x: this._rightSprites[this._currentIndex].x + 25, y: this._rightSprites[this._currentIndex].y + 10 });
                    break;
                case 25:
                    this._tween.tween({ target: this._leftSprites[this._currentIndex], duration: 0.25, ease: v.outQuad }, { x: this._leftSprites[this._currentIndex].x - 25, y: this._leftSprites[this._currentIndex].y - 10, rotation: 20 });
                    this._tween.tween({
                        target: this._rightSprites[this._currentIndex],
                        duration: 0.25,
                        ease: v.outQuad,
                        complete: G(this,
                            this._grabCutIngredientIn)
                    }, { rotation: -30, x: this._rightSprites[this._currentIndex].x + 25, y: this._rightSprites[this._currentIndex].y + 10 });
                    break;
                case 26:
                    this._tween.tween({ target: this._leftSprites[this._currentIndex], duration: 0.25, ease: v.outQuad }, { x: this._leftSprites[this._currentIndex].x - 40 }), this._tween.tween({ target: this._rightSprites[this._currentIndex], duration: 0.25, ease: v.outQuad, complete: G(this, this._grabCutIngredientIn) }, { x: this._rightSprites[this._currentIndex].x + 40 })
            }
            this._tutorialHand.set_alpha(0);
            this._chopLine.set_alpha(0);
            this._chopLine.resetSpots();
            this._flagDisableInput = !0;
            n.playSound("chop", 0.8)
        },
        _grabCutIngredientIn: function() {
            this._currentIndex + 1 >= this._leftSprites.length ? ka.start(G(this, this._checkMinigameWinOrLose), 0.1) : (this._tween.tween({ target: this._leftSprites[this._currentIndex], duration: 0.4, ease: v.outQuad }, { x: this._leftSprites[this._currentIndex].x - f.get_STAGE_CENTER_X() - this._leftSprites[this._currentIndex].get_width() / 2, y: this._leftSprites[this._currentIndex].y - 100 }), this._tween.tween({
                target: this._rightSprites[this._currentIndex],
                duration: 0.4,
                ease: v.outQuad
            }, { rotation: 30, x: this._rightSprites[this._currentIndex].x + f.get_STAGE_CENTER_X() + this._rightSprites[this._currentIndex].get_width() / 2, y: this._rightSprites[this._currentIndex].y + 25 }), ka.start(G(this, this._placeNextIngredientIn), 0.45))
        },
        _placeNextIngredientIn: function() {
            this._leftSprites[this._currentIndex].doDelete = !0;
            this._rightSprites[this._currentIndex].doDelete = !0;
            this._currentIndex++;
            this._currentIndex >= this._leftSprites.length ? this._checkMinigameWinOrLose() : (this._tween.tween({
                target: this._leftSprites[this._currentIndex],
                duration: 0.25,
                ease: v.outBack,
                delay: 0.15
            }, { x: this._leftSprites[this._currentIndex].x, y: this._leftSprites[this._currentIndex].y + this._OFFSET_Y }), this._tween.tween({ target: this._rightSprites[this._currentIndex], duration: 0.25, ease: v.outBack, delay: 0.15, complete: G(this, this._placeNextIngredientOut) }, { x: this._rightSprites[this._currentIndex].x, y: this._rightSprites[this._currentIndex].y + this._OFFSET_Y }))
        },
        _placeNextIngredientOut: function() { this._setChopLine();
            this._flagDisableInput = !1 },
        _setChopLine: function() {
            switch (this._leftSprites[this._currentIndex].get_ingredientType()[1]) {
                case 5:
                    this._chopLine.setPosition(f.get_STAGE_CENTER_X(),
                        f.get_STAGE_CENTER_Y() - 15, 60);
                    break;
                case 3:
                    this._chopLine.setPosition(f.get_STAGE_CENTER_X(), f.get_STAGE_CENTER_Y() + 15, -72);
                    break;
                case 4:
                    this._chopLine.setPosition(f.get_STAGE_CENTER_X() + 15, f.get_STAGE_CENTER_Y(), 0);
                    break;
                case 18:
                    this._chopLine.setPosition(f.get_STAGE_CENTER_X() - 15, f.get_STAGE_CENTER_Y() - 25, 55);
                    break;
                case 17:
                    this._chopLine.setPosition(f.get_STAGE_CENTER_X(), f.get_STAGE_CENTER_Y() - 15, 30);
                    break;
                case 26:
                    this._chopLine.setPosition(f.get_STAGE_CENTER_X(), f.get_STAGE_CENTER_Y(), 0);
                    break;
                default:
                    this._chopLine.setPosition(f.get_STAGE_CENTER_X(), f.get_STAGE_CENTER_Y() - 15, 60)
            }
        },
        _checkMinigameWinOrLose: function() { this._numPerfectChops >= this._leftSprites.length ? this._gameResult = K.PERFECT : this._numGoodChops + this._numPerfectChops > this._numFailChops && (this._gameResult = K.GOOD);
            this._setMinigameResult(this._gameResult) },
        __class__: Pf
    });
    var Of = function(a, b, c) { this._BURN_TIMER = 0.3;
        x.call(this, a, b, c) };
    h["world.minigames.MinigameGrill"] = Of;
    Of.__name__ = ["world", "minigames", "MinigameGrill"];
    Of.__super__ =
        x;
    Of.prototype = p(x.prototype, {
        dispose: function() { n.stopSound("sizzle");
            x.prototype.dispose.call(this);
            this._fryVFX = this._meter = this._pan = this._grillObject = null },
        update: function(a) { x.prototype.update.call(this, a);
            this._flagDarkenMeat && 0 < this._timerBurn && (this._timerBurn -= a, 0 >= this._timerBurn && this._darkenMeat());
            0 < this._timerPointerUp && (this._timerPointerUp -= a, 0 >= this._timerPointerUp && (this._timerPointerUp = 0, this._checkMinigameWinOrLose())) },
        _darkenMeat: function() {
            if (!this._flagBurgerFlip) {
                this._timerBurn =
                    this._BURN_TIMER;
                var a = this._grillObject;
                a.set_cookedState(a.get_cookedState() + 1);
                this._meter.updateBar(this._grillObject.get_cookedState());
                switch (this._grillObject.get_cookedState()) {
                    case 8:
                        m.get_recipeID();
                        0 < this._flipState ? this._tutorialHand.setTutorialType(R.STOP) : this._tutorialHand.setTutorialType(R.SWIPE_UP); break;
                    case 12:
                        this._timerBurn = 0, a = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 50, textId: "minigame.burnt" }, Aa.spawnParticle.dispatch(a), this._checkMinigameWinOrLose() }
            }
        },
        _onBeginMinigame: function() {
            x.prototype._onBeginMinigame.call(this);
            this._tutorialHand.setTutorialType(R.HOLD);
            n.playSound("sizzle", 0.3, null, !0)
        },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            m.set_recipeIngredientTintColors([]);
            this._flagBurgerFlip = this._flagMouseDown = this._flagDarkenMeat = !1;
            this._timerBurn = this._BURN_TIMER;
            this._timerPointerUp = this._flipState = 0;
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "minigame_universal/items/nick_kitchen_stovetop", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 100 }), this._MG_LAYER));
            this._childSprites.push(this._pan =
                this._elementManager.addElement(new t({ asset: "minigame_universal/items/pan", x: f.get_STAGE_CENTER_X() - 68, y: f.get_STAGE_CENTER_Y() - 25 }), this._MG_LAYER));
            var a;
            a = null == m.get_minigameResults()[m.get_minigameResults().length - 1] ? K.PERFECT : m.get_minigameResults()[m.get_minigameResults().length - 1];
            switch (m.get_recipeID()[1]) {
                case 1:
                    switch (a[1]) {
                        case 2:
                            this._childSprites.push(this._grillObject = this._elementManager.addElement(new tb({ asset: "pound/raw3_bad", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() },
                                r.MEAT), this._MG_LAYER));
                            break;
                        case 0:
                            this._childSprites.push(this._grillObject = this._elementManager.addElement(new tb({ asset: "pound/raw3_good", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, r.MEAT), this._MG_LAYER));
                            break;
                        case 1:
                            this._childSprites.push(this._grillObject = this._elementManager.addElement(new tb({ asset: "pound/raw3_perfect", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, r.MEAT), this._MG_LAYER))
                    }
                    this._grillObject.set_tint(16777215);
                    break;
                case 0:
                    switch (a[1]) {
                        case 2:
                            this._childSprites.push(this._grillObject =
                                this._elementManager.addElement(new tb({ asset: "fry/donut_bad_raw", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, r.DOUGH), this._MG_LAYER));
                            break;
                        case 0:
                        case 1:
                            this._childSprites.push(this._grillObject = this._elementManager.addElement(new tb({ asset: "fry/donut_good_raw", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, r.DOUGH), this._MG_LAYER))
                    }
                    break;
                case 8:
                    this._childSprites.push(this._grillObject = this._elementManager.addElement(new tb({
                        asset: "grill/steak_raw",
                        x: f.get_STAGE_CENTER_X(),
                        y: f.get_STAGE_CENTER_Y(),
                        scale: 1
                    }, r.STEAK), this._MG_LAYER))
            }
            this._fryVFX = this._pan.addChild(new Hb({ x: 55, y: 30 }));
            this._fryVFX.addAnimation("fry", "nick_kitchen_animations_donutfry0000 nick_kitchen_animations_donutfry0001 nick_kitchen_animations_donutfry0002 nick_kitchen_animations_donutfry0003 nick_kitchen_animations_donutfry0004 nick_kitchen_animations_donutfry0005 nick_kitchen_animations_donutfry0006 nick_kitchen_animations_donutfry0007".split(" "));
            this._fryVFX.animate("fry");
            this._childSprites.push(this._meter = this._elementManager.addElement(new Bc({
                x: f.get_STAGE_CENTER_X(),
                y: f.get_STAGE_CENTER_Y() + 65
            }, this._tween, this._BURN_TIMER, 10), this._UI_LAYER))
        },
        onInput: function(a, b) {
            if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    (this._flagMouseDown = b) ? (n.stopSound("sizzle"), n.playSound("sizzle", 0.75, null, !0), this._updateInputPos(), 10 > this._grillObject.get_cookedState() && (this._flagDarkenMeat = !0)) : (n.stopSound("sizzle"), n.playSound("sizzle", 0.5, null, !0), this._flagDarkenMeat = !1, this._meter.stopBar(), m.get_recipeID(), 0 < this._flipState && 8 < this._grillObject.get_cookedState() &&
                        (this._timerPointerUp = 0.5));
                    break;
                case 10:
                    if (this._flagMouseDown) switch (u.pointer.swipe[1]) {
                        case 3:
                            m.get_recipeID(), !1 == this._flagBurgerFlip && 1 > this._flipState && (this._flagBurgerFlip = !0, this._meter.stopBar(), this._flipBurgerUp()) }
            }
        },
        _flipBurgerUp: function() {
            n.playSound("flip");
            this._tutorialHand.set_alpha(0);
            this._tween.tween({ target: this._grillObject, duration: 0.2, ease: v.linear, complete: G(this, this._flipBurgerDown) }, { y: this._grillObject.y - 225, rotation: this._grillObject.rotation - 135 });
            this._tween.tween({
                target: this._pan,
                duration: 0.2,
                ease: v.linear
            }, { x: this._pan.x - 50, y: this._pan.y - 10, rotation: this._pan.rotation - 5 })
        },
        _flipBurgerDown: function() {
            var a = this;
            this._grillObject.set_rotation(35);
            this._tween.tween({ target: this._grillObject, duration: 0.2, ease: v.linear }, { y: this._grillObject.y + 225, rotation: 0 });
            this._tween.tween({ target: this._pan, duration: 0.2, ease: v.linear }, { x: this._pan.x + 50, y: this._pan.y + 10, rotation: this._pan.rotation + 5 });
            ka.start(function() {
                a._grillObject.scaleX = -1;
                a._flipState++;
                a._flagBurgerFlip = !1;
                a._tutorialHand.set_alpha(1);
                a._timerBurn = a._BURN_TIMER;
                a._tutorialHand.setTutorialType(R.HOLD);
                a._grillObject.set_cookedState(0);
                a._grillObject.set_assetFlipped(!0);
                a._meter.resetBar()
            }, 0.25)
        },
        _checkGrillState: function() { this._gameResult = this._grillObject.getMinigameResult() },
        _checkMinigameWinOrLose: function() { n.stopSound("sizzle");
            m.get_recipeID();
            0 < this._flipState && this._checkGrillState();
            this._tutorialHand.set_alpha(0);
            this._meter.stopBar();
            m.get_recipeIngredientTintColors().push(this._grillObject.tint);
            this._setMinigameResult(this._gameResult) },
        __class__: Of
    });
    var Rf = function(a, b, c) { this._JUDGE_Y = 50;
        this._JUDGE_X = 0;
        this._MOVE_TO_NEXT_TIME = 1;
        this._STARTING_Y_POS = 200;
        this._NUM_JUDGES = 3;
        x.call(this, a, b, c) };
    h["world.minigames.MinigameJudges"] = Rf;
    Rf.__name__ = ["world", "minigames", "MinigameJudges"];
    Rf.__super__ = x;
    Rf.prototype = p(x.prototype, {
        dispose: function() { n.stopSound("drumroll");
            n.stopSound(this._judgeVO);
            x.prototype.dispose.call(this);
            this._revealTray = this._judgesContainer = this._judges = null },
        start: function() {
            var a = this;
            this._flagRevealed = !1;
            ka.start(function() { n.playSound("tray_reveal") }, 0.2);
            this._tween.tween({ target: this._revealTray, duration: 0.5, ease: v.inOutQuad, delay: 0.2, complete: function() { a._timerMoveToNext = a._MOVE_TO_NEXT_TIME;
                    a._setState(ja.GAMEPLAY) } }, { x: this._revealTray.x + 250, y: this._revealTray.y - f.get_STAGE_HEIGHT(), rotation: 35 });
            D.sendEvent({ event: "missionSummary", params: { gamemodeName: "" + H.string(m.get_recipeID()), taskName: "" + H.string(this._recipeType), outcome: "success", score1: this._finalScore } })
        },
        update: function(a) {
            x.prototype.update.call(this,
                a);
            if (this._flagRevealed && 0 < this._timerSpawnParticle && (this._timerSpawnParticle -= a, 0 >= this._timerSpawnParticle)) {
                this._timerSpawnParticle = 0.75;
                for (var b = 10; 0 < b--;) { var c = { x: this._judgesContainer.x + this._foodDisplay.x + S.randomFloat(-75, 75), y: this._judgesContainer.y + this._foodDisplay.y + S.randomFloat(-100, 25), type: $.SPARKLE };
                    Ya.spawnParticle.dispatch(c) }
                if (8 < this._finalScore)
                    for (b = 0; 5 > b;) b++, c = { lifeSpan: 5 * Math.random() + 2.5, rotation: 60, x: f.get_STAGE_CENTER_X() + S.randomFloat(-150, 150), y: -25, type: $.CONFETTI },
                        Ya.spawnParticle.dispatch(c)
            }
            this._state == ja.GAMEPLAY && 0 < this._timerMoveToNext && (this._timerMoveToNext -= a, 0 >= this._timerMoveToNext && this._judgeReveal())
        },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            n.playMusic("judge_scene_music");
            this._flagInputEnabled = !0;
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "judge_bg", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }), this._MG_LAYER));
            this._childSprites.push(this._judgesContainer = this._elementManager.addElement(new fa({
                x: f.get_STAGE_CENTER_X(),
                y: f.get_STAGE_CENTER_Y()
            }), this._MG_LAYER));
            this._childSprites.push(this._elementManager.addElement(new Cc({ asset: "ui/spotlight", x: 0, y: 100, originY: 0, rotation: -45 }), this._MG_LAYER));
            this._childSprites.push(this._elementManager.addElement(new Cc({ asset: "ui/spotlight", x: f.get_STAGE_WIDTH() - 25, y: 100, originY: 0, rotation: 45 }), this._MG_LAYER));
            this._finalScore = Math.round(ba.getInt("recipe_total_score") / (2 * (m.getRecipeMinigameList().length - 1)) * 10);
            var a = [],
                b = this._finalScore;
            if (0 == this._finalScore) a = [0, 0,
                0
            ];
            else
                for (var c = 0; 3 > c;) a.push(b), 10 > b && (b = this._finalScore + S.randomInt(-1, 1)), 10 <= b ? b = 10 : 0 >= b && (b = S.randomInt(1, 3)), c++;
            Xa.saveMinigameData(m.getRecipeInt(), this._finalScore);
            this._childSprites.push(this._elementManager.addElement(new Cc({ asset: "ui/spotlight", x: f.get_STAGE_CENTER_X() - 250, y: 0, originY: 0, rotation: -15 }), this._MG_LAYER));
            this._childSprites.push(this._elementManager.addElement(new Cc({ asset: "ui/spotlight", x: f.get_STAGE_CENTER_X() + 250, y: 0, originY: 0, rotation: 15 }), this._MG_LAYER));
            this._judges = [];
            this._judges.push(this._judgesContainer.addChild(new pa({ x: this._JUDGE_X - 450, y: this._JUDGE_Y }, a[0], 2)));
            this._judges.push(this._judgesContainer.addChild(new pa({ x: this._JUDGE_X + 200, y: this._JUDGE_Y }, a[2], 0)));
            this._judges.push(this._judgesContainer.addChild(new pa({ x: this._JUDGE_X - 165, y: this._JUDGE_Y }, a[1], 1)));
            this._judgesContainer.addChild(new t({ asset: "judge_table", y: f.get_STAGE_CENTER_Y(), originY: 1 }));
            this._judgeIndex = 0;
            this._childSprites.push(this._foodDisplay = this._judgesContainer.addChild(new t({
                asset: "ui/transition/platter_bottom",
                x: 0,
                y: this._STARTING_Y_POS
            })));
            for (b = a = 0; a < this._NUM_JUDGES;) {
                switch (m.get_recipeID()[1]) {
                    case 1:
                        this._childSprites.push(this._judgesContainer.addChild(new Ld({ x: b, y: this._STARTING_Y_POS, scale: 0.75 }, m.get_recipeIngredientOrder())));
                        break;
                    case 4:
                        this._childSprites.push(this._judgesContainer.addChild(new Md({ x: b, y: this._STARTING_Y_POS - 25 }, m.get_recipeIngredientOrder())));
                        break;
                    case 2:
                        this._childSprites.push(this._judgesContainer.addChild(new ag({ x: b, y: this._STARTING_Y_POS - 90, scale: 0.8 }, m.get_recipeIngredientOrder())));
                        break;
                    case 0:
                        this._childSprites.push(this._judgesContainer.addChild(new bg({ x: b, y: this._STARTING_Y_POS - 20, scale: 0.8 }, m.get_recipeIngredientOrder())));
                        break;
                    case 5:
                        this._childSprites.push(this._judgesContainer.addChild(new cg({ x: b, y: this._STARTING_Y_POS - 25, scale: 0.8 }, m.get_recipeIngredientOrder())));
                        break;
                    case 6:
                        this._childSprites.push(this._judgesContainer.addChild(new Pa({ x: b, y: this._STARTING_Y_POS - 55, scale: 0.5 }, m.get_recipeIngredientOrder())));
                        break;
                    case 3:
                        this._childSprites.push(this._judgesContainer.addChild(new dg({
                            x: b,
                            y: this._STARTING_Y_POS - 25
                        }, m.get_recipeIngredientOrder())));
                        break;
                    case 7:
                        this._childSprites.push(this._judgesContainer.addChild(new eg({ x: b, y: this._STARTING_Y_POS - 25 }, m.get_recipeIngredientOrder())));
                        break;
                    case 8:
                        this._childSprites.push(this._judgesContainer.addChild(new fg({ x: b, y: this._STARTING_Y_POS - 10 }, m.get_recipeIngredientOrder())));
                        break;
                    case 9:
                        this._childSprites.push(this._judgesContainer.addChild(new gg({ x: b, y: this._STARTING_Y_POS - 60 }, m.get_recipeIngredientOrder())))
                }
                b += f.get_STAGE_WIDTH();
                a++
            }
            this._childSprites.push(this._revealTray = this._judgesContainer.addChild(new t({ asset: "ui/transition/platter_top", x: 0, y: this._STARTING_Y_POS - 135, scale: 1.1 })));
            b = "";
            a = 16777215;
            5 >= this._finalScore ? (b = "judges/plaque_bronze_score_reveal", a = 13217373) : 8 >= this._finalScore ? (b = "judges/plaque_silver_score_reveal", a = 12632256) : (b = "judges/plaque_gold_score_reveal", a = 15657130);
            this._finalScoreCard = this._judgesContainer.addChild(new t({ asset: b, x: 0, y: 0, scale: 1, alpha: 0 }));
            b = this._finalScoreCard.addChild(new Na({
                text: "gameplay.final_score",
                align: ea.Center,
                x: 0,
                y: 0,
                alpha: 1
            }));
            b.setVariables([this._finalScore]);
            b.set_tint(a);
            7 < this._finalScore && (this._timerSpawnParticle = 0.25);
            this._timer.set_alpha(0)
        },
        onInput: function(a, b) { if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    b && this._flagInputEnabled && this._updateInputPos() } },
        _judgeReveal: function() {
            var a = this;
            this._flagInputEnabled = !1;
            this._judges[this._judgeIndex].showFinalScore(this._tween);
            this._judgeIndex++;
            this._judgeIndex == this._judges.length ? ka.start(function() {
                    n.playSound("drumroll");
                    ka.start(function() { 5 >= a._finalScore && 0 < a._finalScore ? n.playSound("applause_low", 0.8) : 8 >= a._finalScore && 5 < a._finalScore ? n.playSound("applause_mid", 0.8) : 0 != a._finalScore && n.playSound("applause_high", 0.8);
                        a._finalScoreCard.set_scale(3);
                        a._tween.tween({ target: a._finalScoreCard, duration: 0.15, ease: v.inOutQuad }, { scale: 1, alpha: 1 });
                        a._flagRevealed = !0;
                        ka.start(function() { ka.start(function() { a._timerSpawnParticle = 0;
                                a._flagRevealed = !1 }, 2);
                            a._setState(ja.GAME_COMPLETE) }, 2) }, 3.6)
                }, 1) : this._timerMoveToNext = this._MOVE_TO_NEXT_TIME +
                0.05 * this._judgeIndex
        },
        __class__: Rf
    });
    var Yf = function(a, b, c) { this._DEBUG_HITBOX = 0;
        x.call(this, a, b, c) };
    h["world.minigames.MinigameMix"] = Yf;
    Yf.__name__ = ["world", "minigames", "MinigameMix"];
    Yf.__super__ = x;
    Yf.prototype = p(x.prototype, {
        dispose: function() { x.prototype.dispose.call(this);
            this._hitBox = this._selectedIngredient = this._ingredients = null },
        _onBeginMinigame: function() {
            x.prototype._onBeginMinigame.call(this);
            this._tutorialHand.setTutorialType(R.TRACE, [this._ingredients[3].x - f.get_STAGE_CENTER_X(), 0],
                [this._ingredients[3].y - f.get_STAGE_CENTER_Y(), this._hitBox.y - f.get_STAGE_CENTER_Y()], 0.55)
        },
        update: function(a) { x.prototype.update.call(this, a); if (this._state == ja.GAMEPLAY) { for (var b = a = 0; b < this._ingredients.length;) this._ingredients[b].get_isLocked() && a++, b++;
                a >= this._ingredients.length && this._checkMinigameWinOrLose() } },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            this._flagMouseDown = !1;
            Pa.fruitPosX = [];
            Pa.fruitPosY = [];
            Pa.fruitType = [];
            this._childSprites.push(this._elementManager.addElement(new Pa({
                x: f.get_STAGE_CENTER_X(),
                y: f.get_STAGE_CENTER_Y() + 75
            }, m.get_recipeIngredientOrder()), this._MG_LAYER));
            this._childSprites.push(this._hitBox = this._elementManager.addElement(new Ga({ color: 16777215, width: 425, height: 160, x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 10, alpha: this._DEBUG_HITBOX }), this._UI_LAYER));
            this._startScale = 0.75;
            this._ingredients = [];
            this._childSprites.push(this._elementManager.addElement(new dc({ x: f.get_STAGE_CENTER_X() + 190, y: f.get_STAGE_CENTER_Y() + 245, scale: this._startScale }, r.APPLE), this._UI_LAYER));
            this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
            this._childSprites.push(this._elementManager.addElement(new dc({ x: f.get_STAGE_CENTER_X() + 365, y: f.get_STAGE_CENTER_Y() + 25, scale: this._startScale }, r.APPLE), this._UI_LAYER));
            this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
            this._childSprites.push(this._elementManager.addElement(new dc({ x: f.get_STAGE_CENTER_X() - 300, y: f.get_STAGE_CENTER_Y() + 50, scale: this._startScale, rotation: -60 }, r.STRAWBERRY), this._UI_LAYER));
            this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
            this._childSprites.push(this._elementManager.addElement(new dc({ x: f.get_STAGE_CENTER_X() - 125, y: f.get_STAGE_CENTER_Y() + 265, scale: this._startScale, rotation: -60 }, r.STRAWBERRY), this._UI_LAYER));
            this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
            this._childSprites.push(this._elementManager.addElement(new dc({ x: f.get_STAGE_CENTER_X() + 350, y: f.get_STAGE_CENTER_Y() + 175, scale: this._startScale, rotation: -60 }, r.STRAWBERRY),
                this._UI_LAYER));
            this._ingredients.push(this._childSprites[this._childSprites.length - 1])
        },
        onInput: function(a, b) {
            var c = this;
            if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    if (b) {
                        this._flagMouseDown = !0;
                        this._updateInputPos();
                        for (var d = this._ingredients.length; 0 < d--;)
                            if (this._ingredients[d].contains(this._inputPos.x, this._inputPos.y)) {
                                this._selectedIngredient = this._ingredients[d];
                                this._prevX = this._ingredients[d].x;
                                this._prevY = this._ingredients[d].y;
                                this._tutorialHand.set_alpha(0);
                                break
                            }
                    } else this._flagMouseDown && (this._flagMouseDown = !1, null != this._selectedIngredient && (this._inputPos.x > this._hitBox.x - this._hitBox.sizeX / 2 && this._inputPos.x < this._hitBox.x + this._hitBox.sizeX / 2 && this._inputPos.y > this._hitBox.y - this._hitBox.sizeY / 2 && this._inputPos.y < this._hitBox.y + this._hitBox.sizeY / 2 ? (this._selectedIngredient.x - this._selectedIngredient.get_width() / 2 < this._hitBox.x - this._hitBox.sizeX / 2 ? this._selectedIngredient.x = this._hitBox.x - this._hitBox.sizeX / 2 + this._selectedIngredient.get_width() /
                        2 : this._selectedIngredient.x + this._selectedIngredient.get_width() / 2 > this._hitBox.x + this._hitBox.sizeX / 2 && (this._selectedIngredient.x = this._hitBox.x + this._hitBox.sizeX / 2 - this._selectedIngredient.get_width() / 2), Pa.fruitPosX.push(this._selectedIngredient.x - f.get_STAGE_CENTER_X()), Pa.fruitPosY.push(this._selectedIngredient.y - (f.get_STAGE_CENTER_Y() + 75)), Pa.fruitType.push(this._selectedIngredient.get_ingredientType()), this._selectedIngredient.placeInBowl(), this._selectedIngredient = null, this._elementManager.sortLayer(this._UI_LAYER),
                        n.playSound("pick_up")) : this._tween.tween({ target: this._selectedIngredient, duration: 0.25, ease: v.outQuad, complete: function() { c._selectedIngredient = null } }, { x: this._prevX, y: this._prevY, scale: this._startScale })));
                    break;
                case 10:
                    this._flagMouseDown && (this._updateInputPos(), null != this._selectedIngredient && (this._selectedIngredient.x = this._inputPos.x, this._selectedIngredient.y = this._inputPos.y))
            }
        },
        _checkMinigameWinOrLose: function() {
            for (var a = this._ingredients.length; 0 < a--;)
                if (this._ingredients[a].get_isLocked()) {
                    this._gameResult =
                        K.PERFECT;
                    break
                } this._setMinigameResult(this._gameResult)
        },
        __class__: Yf
    });
    var Sf = function(a, b, c) { this._STROKE_SIZE = 45;
        x.call(this, a, b, c) };
    h["world.minigames.MinigamePeel"] = Sf;
    Sf.__name__ = ["world", "minigames", "MinigamePeel"];
    Sf.__super__ = x;
    Sf.prototype = p(x.prototype, {
        dispose: function() { x.prototype.dispose.call(this);
            this._peeler = this._points = this._gridCheck = this._topSprite = this._mask = null },
        update: function(a) { x.prototype.update.call(this, a) },
        _onBeginMinigame: function() {
            x.prototype._onBeginMinigame.call(this);
            for (var a = [], b = [], c = 0, d = this._gridCheck.get_gridSpaces(); c < d.length;) { var e = d[c];++c;
                a.push(e.x);
                b.push(e.y + 15) } this._tutorialHand.x = f.get_STAGE_CENTER_X();
            this._tutorialHand.setTutorialType(R.TRACE, a, b, 0.25)
        },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            var a;
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "minigame_universal/items/cuttingboard", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 110 }), this._MG_LAYER));
            this._childSprites.push(this._topSprite = this._elementManager.addElement(new t({
                asset: "peel/redpotato_whole",
                x: f.get_STAGE_CENTER_X(),
                y: f.get_STAGE_CENTER_Y() + 25,
                scale: 0.7
            }), this._MG_LAYER));
            this._childSprites.push(a = this._elementManager.addElement(new t({ asset: "peel/redpotato_peeled", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 25, scale: 0.7 }), this._MG_LAYER));
            this._childSprites.push(this._gridCheck = this._elementManager.addElement(new Nd({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }), this._MG_LAYER));
            this._addMask(a.rootSprite, 0, 0, 0, 0);
            this._childSprites.push(this._peeler = this._elementManager.addElement(new t({
                asset: "minigame_universal/items/peeler",
                x: f.get_STAGE_CENTER_X() + 250,
                y: f.get_STAGE_CENTER_Y() - 75,
                originY: 0,
                rotation: 30
            }), this._MG_LAYER));
            this._flagMouseDown = !1
        },
        _addMask: function(a, b, c, d, e) { this._mask = new E;
            this._points = [0, 0, d, 0, d, e, 0, e];
            this._mask.get_graphics().fillPolygon(16711680, this._points);
            this._mask.setXY(b, c);
            a.owner.addChild((new aa).add(this._mask));
            a.set_mask(this._mask);
            a.set_maskEnabled(!0) },
        onInput: function(a, b) {
            if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    if (this._flagMouseDown = b) this._updateInputPos(),
                        this._peeler.x = this._inputPos.x, this._peeler.y = this._inputPos.y, this._tutorialHand.set_alpha(0), this._mask.get_graphics().fillCircle(16711680, this._inputPos.x, this._inputPos.y, this._STROKE_SIZE), null != this._gridCheck && this._gridCheck.doGridCheck(this._inputPos.x, this._inputPos.y, 3);
                    break;
                case 10:
                    this._updateInputPos(), this._peeler.x = this._inputPos.x, this._peeler.y = this._inputPos.y, this._flagMouseDown && (this._mask.get_graphics().fillCircle(16711680, this._inputPos.x, this._inputPos.y, this._STROKE_SIZE),
                        null != this._gridCheck && this._gridCheck.doGridCheck(this._inputPos.x, this._inputPos.y, 3))
            }
        },
        _checkMinigameWinOrLose: function() { switch (m.get_recipeID()[1]) {
                case 8:
                    var a = this._gridCheck.getSpreadPercentage();
                    95 <= a ? (this._gameResult = K.PERFECT, this._topSprite.setAsset("peel/redpotato_peeled"), this._topSprite.render(null)) : 65 <= a && 95 > a && (this._gameResult = K.GOOD) } n.stopSound("spread");
            this._setMinigameResult(this._gameResult) },
        __class__: Sf
    });
    var pc = h["world.minigames._MinigamePit.GAME_PHASE"] = {
        __ename__: ["world",
            "minigames", "_MinigamePit", "GAME_PHASE"
        ],
        __constructs__: ["TRACE", "DRAG_PIT"]
    };
    pc.TRACE = ["TRACE", 0];
    pc.TRACE.toString = l;
    pc.TRACE.__enum__ = pc;
    pc.DRAG_PIT = ["DRAG_PIT", 1];
    pc.DRAG_PIT.toString = l;
    pc.DRAG_PIT.__enum__ = pc;
    var Wf = function(a, b, c) { x.call(this, a, b, c) };
    h["world.minigames.MinigamePit"] = Wf;
    Wf.__name__ = ["world", "minigames", "MinigamePit"];
    Wf.__super__ = x;
    Wf.prototype = p(x.prototype, {
        dispose: function() { x.prototype.dispose.call(this);
            this._gamePhase = this._pit = this._pitObj = null },
        _onBeginMinigame: function() {
            x.prototype._onBeginMinigame.call(this);
            this._setGamePhase(pc.TRACE)
        },
        _setGamePhase: function(a) {
            this._gamePhase = a;
            switch (this._gamePhase[1]) {
                case 0:
                    this._tutorialHand.setTutorialType(R.TRACE, this._pitObj.get_spotPositionsX(), this._pitObj.get_spotPositionsY());
                    break;
                case 1:
                    this._tutorialHand.doDelete = !0, this._childSprites.push(this._tutorialHand = this._elementManager.addElement(new Ac({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), alpha: 1 }, this._tween), this._UI_LAYER)), this._tutorialHand.setTutorialType(R.TRACE, [this._pit.x - f.get_STAGE_CENTER_X(),
                        265
                    ], [this._pit.y - f.get_STAGE_CENTER_Y(), 150], 0.5)
            }
        },
        update: function(a) { x.prototype.update.call(this, a) },
        _onEndMinigameEarly: function(a) { null == a && (a = !0);
            a && (this._gameResult = this._pitObj.checkGameResult());
            x.prototype._onEndMinigameEarly.call(this, a) },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            this._gameResult = K.FAIL;
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "minigame_universal/items/trash_bg", x: f.get_STAGE_CENTER_X() + 265, y: f.get_STAGE_CENTER_Y() + 132 }), this._MG_LAYER));
            switch (m.get_recipeID()[1]) {
                case 4:
                case 5:
                    this._childSprites.push(this._elementManager.addElement(new t({ asset: "avocado_half2", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }), this._MG_LAYER)), this._childSprites.push(this._pit = this._elementManager.addElement(new hg({ asset: "pit", x: f.get_STAGE_CENTER_X() + 2, y: f.get_STAGE_CENTER_Y() + 33 }), this._MG_LAYER)), this._childSprites.push(this._pitObj = this._elementManager.addElement(new ig({ asset: "avocado", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }),
                        this._MG_LAYER))
            }
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "minigame_universal/items/trash_fg", x: f.get_STAGE_CENTER_X() + 265, y: f.get_STAGE_CENTER_Y() + 225 }), this._MG_LAYER))
        },
        onInput: function(a, b) {
            if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    if (b) switch (this._flagMouseDown = !0, this._updateInputPos(), this._gamePhase[1]) {
                        case 0:
                            this._tutorialHand.set_alpha(0);
                            break;
                        case 1:
                            this._pit.contains(this._inputPos.x, this._inputPos.y) && (this._tutorialHand.set_alpha(0),
                                this._pit.set_isLocked(!1), this._pit.set_enableGravity(!1), this._pit.setPosition(this._inputPos.x, this._inputPos.y), n.playSound("pit_pop"))
                    } else if (this._flagMouseDown) switch (this._flagMouseDown = !1, this._gamePhase[1]) {
                        case 0:
                            this._checkSpots(); break;
                        case 1:
                            this._pit.set_enableGravity(!0) }
                    break;
                case 10:
                    if (this._flagMouseDown) switch (this._updateInputPos(), this._gamePhase[1]) {
                        case 0:
                            this._pitObj.beginCheck(this._inputPos.x, this._inputPos.y);
                            break;
                        case 1:
                            !1 == this._pit.get_isLocked() && this._pit.setPosition(this._inputPos.x,
                                this._inputPos.y)
                    }
            }
        },
        _checkSpots: function() { switch (this._pitObj.checkGameResult()[1]) {
                case 1:
                    this._removeOuterLayerIn(); break;
                case 0:
                    this._removeOuterLayerIn(); break;
                case 2:
                    this._pitObj.resetSpots() } },
        _removeOuterLayerIn: function() { this._pitObj.removeTraceLine(this._tween);
            this._removeOuterLayerOut() },
        _removeOuterLayerOut: function() { var a = this;
            n.playSound("pit_skin_off");
            this._tween.tween({ target: this._pitObj, duration: 0.25, ease: v.inOutQuad, complete: function() { a._setGamePhase(pc.DRAG_PIT) } }, { alpha: 0 }) },
        _checkMinigameWinOrLose: function() { this._setMinigameResult(this._gameResult) },
        __class__: Wf
    });
    var Nf = function(a, b, c) { this._START_HAMMER_Y = f.get_STAGE_CENTER_Y() + 110;
        this._START_HAMMER_X = f.get_STAGE_CENTER_X() - 450;
        this._BAD_TAPS = 27;
        this._PERFECT_TAPS = 24;
        this._GOOD_TAPS = 20;
        x.call(this, a, b, c) };
    h["world.minigames.MinigamePound"] = Nf;
    Nf.__name__ = ["world", "minigames", "MinigamePound"];
    Nf.__super__ = x;
    Nf.prototype = p(x.prototype, {
        dispose: function() {
            x.prototype.dispose.call(this);
            this._poundObject = this._hand =
                null
        },
        update: function(a) { x.prototype.update.call(this, a);
            0 < this._timerPointerUp && (this._timerPointerUp -= a, 0 >= this._timerPointerUp && (this._timerPointerUp = 0, this._checkMinigameWinOrLose())) },
        _onBeginMinigame: function() { x.prototype._onBeginMinigame.call(this);
            this._tutorialHand.setTutorialType(R.TAP) },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            this._tapCount = 0;
            this._flagMinigameUp = !1;
            this._childSprites.push(this._elementManager.addElement(new t({
                asset: "minigame_universal/items/cuttingboard",
                x: f.get_STAGE_CENTER_X(),
                y: f.get_STAGE_CENTER_Y() + 110
            }), this._MG_LAYER));
            this._GOOD_TAPS = S.randomInt(14, 20);
            this._PERFECT_TAPS = this._GOOD_TAPS + 4;
            this._BAD_TAPS = this._PERFECT_TAPS + 3;
            this._childSprites.push(this._poundObject = this._elementManager.addElement(new jg({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 145, originY: 1 }, this._GOOD_TAPS, this._PERFECT_TAPS, this._BAD_TAPS), this._MG_LAYER));
            var a = "minigame_universal/items/spatula";
            switch (m.get_recipeID()[1]) {
                case 1:
                    break;
                default:
                    this._START_HAMMER_X =
                        f.get_STAGE_CENTER_X() - 365, this._START_HAMMER_Y = f.get_STAGE_CENTER_Y() + 15, a = "minigame_universal/items/pounder"
            }
            switch (m.getRecipePropertyPack()) {
                case "property_spongebob":
                    break;
                default:
                    this._character.x = f.get_STAGE_CENTER_X() - 100, this._character.scaleX = -1 } this._childSprites.push(this._hand = this._elementManager.addElement(new N({ asset: a, x: this._START_HAMMER_X, y: this._START_HAMMER_Y, rotation: 35, originY: 1 }), this._MG_LAYER))
        },
        onInput: function(a, b) {
            if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    b &&
                        (this._updateInputPos(), this._hand.y = this._START_HAMMER_Y, this._hand.set_rotation(35), this._tapCount++, this._fistDown(), this._tapCount >= this._PERFECT_TAPS ? (this._tutorialHand.setTutorialType(R.STOP), this._timerPointerUp = 0.5) : this._tapCount > this._BAD_TAPS && (this._checkMinigameWinOrLose(), this._timerPointerUp = 0))
            }
        },
        _fistDown: function() { this._tween.tween({ target: this._hand, duration: 0.1, ease: v.linear, complete: G(this, this._fistUp), overwrite: !0 }, { rotation: 90 }) },
        _fistUp: function() {
            this._doPoundVFX();
            this._tween.tween({
                target: this._hand,
                duration: 0.1,
                ease: v.linear
            }, { rotation: 35 })
        },
        _doPoundVFX: function() { Kb.screenShake.dispatch(0.5);
            n.playSound("pound");
            this._poundObject.doPoundAnimation(this._tapCount, this._tween) },
        _checkMinigameWinOrLose: function() { this._flagMinigameUp || (this._flagMinigameUp = !0, this._tutorialHand.set_alpha(0), this._gameResult = this._tapCount > this._GOOD_TAPS && this._tapCount < this._PERFECT_TAPS ? K.GOOD : this._tapCount < this._BAD_TAPS && this._tapCount >= this._PERFECT_TAPS ? K.PERFECT : K.FAIL, this._setMinigameResult(this._gameResult)) },
        __class__: Nf
    });
    var Vf = function(a, b, c) { this._maskFrequency = 0.03;
        this._fillRate = 20;
        x.call(this, a, b, c);
        this._fillPercent = 10;
        this._maskTimer = 0 };
    h["world.minigames.MinigamePour"] = Vf;
    Vf.__name__ = ["world", "minigames", "MinigamePour"];
    Vf.__super__ = x;
    Vf.prototype = p(x.prototype, {
        dispose: function() { x.prototype.dispose.call(this);
            this._pourOverflow = this._pourFill = this._pourContainer = this._pourSpout = this._mask = null },
        update: function(a) {
            x.prototype.update.call(this, a);
            if (this._flagMouseDown) {
                if (1 > this._pourSpout.alpha) {
                    var b =
                        this._pourSpout;
                    b.set_alpha(b.alpha + 5 * a)
                }
                this._fillPercent = bi.clamp(this._fillPercent + a * this._fillRate, 0, 110);
                this._maskTimer += a;
                this._maskTimer >= this._maskFrequency && (this._maskTimer = 0, this._maskUpdate());
                if (110 <= this._fillPercent) { switch (m.get_recipeID()[1]) {
                        case 2:
                            0 == m.get_minigameResults().length && (this._pourFill.setAsset("blend/juice_bad"), this._pourFill.render(null)) } this._checkMinigameWinOrLose();
                    this._tween.tween({ target: this._pourOverflow, duration: 0.25, ease: v.outQuad }, { alpha: 1 }) } else 90 <
                    this._fillPercent && this._tutorialHand.setTutorialType(R.STOP)
            } else 0 < this._pourSpout.alpha && (b = this._pourSpout, b.set_alpha(b.alpha - 5 * a))
        },
        _maskUpdate: function() { var a = this._pourFill.get_height() * (1 - this._fillPercent / 100);
            this._pourFill.set_alpha(0.9);
            this._maskPolygon(this._pourFill.get_sprite(), [0, a, this._pourFill.get_sprite().getNaturalWidth(), a, this._pourFill.get_sprite().getNaturalWidth(), this._pourFill.get_sprite().getNaturalHeight(), 0, this._pourFill.get_sprite().getNaturalHeight()]) },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            var a = f.get_STAGE_CENTER_Y() + 200,
                b = f.get_STAGE_CENTER_X(),
                c = 1,
                d = "",
                e = "",
                g = "",
                h = 0;
            switch (m.get_recipeID()[1]) {
                case 2:
                    if (0 < m.get_minigameResults().length) {
                        this._pourSpout = this._elementManager.addElement(new Hb({ originY: 0, x: f.get_STAGE_CENTER_X(), y: 0, scaleY: 1.9 }), this._MG_LAYER);
                        this._pourSpout.addAnimation("pour", ["pour/pour1", "pour/pour2", "pour/pour3", "pour/pour4"]);
                        switch ((null == m.get_minigameResults()[0] ? K.FAIL : m.get_minigameResults()[0])[1]) {
                            case 2:
                                d = "pour/fill_bad"; break;
                            case 0:
                            case 1:
                                d = "pour/fill_good" } e =
                            "pour/bottle_transparent";
                        g = "pour/overflow";
                        h = 0
                    } else this._childSprites.push(this._elementManager.addElement(new t({ asset: "pour/blender_topoff_bg", originY: 1, x: f.get_STAGE_CENTER_X() + 10, y: f.get_STAGE_CENTER_Y() + 200 - 408 }), this._MG_LAYER)), this._pourSpout = this._elementManager.addElement(new Hb({ originY: 0, x: f.get_STAGE_CENTER_X(), y: 50, scaleY: 1.6 }), this._MG_LAYER), this._pourSpout.addAnimation("pour", ["pour/pour1_slime", "pour/pour2_slime", "pour/pour3_slime", "pour/pour4_slime"]), this._childSprites.push(this._elementManager.addElement(new t({
                        asset: "pour/barrel_fg",
                        originY: 0,
                        x: f.get_STAGE_CENTER_X(),
                        y: -45
                    }), this._MG_LAYER)), d = "blend/juice_good", e = "pour/blender_topoff_fg", g = "pour/overflow", h = 120, a = f.get_STAGE_CENTER_Y() + 135, b = f.get_STAGE_CENTER_X() + 15, c = 1.35;
                    break;
                case 7:
                    this._childSprites.push(this._elementManager.addElement(new t({ asset: "pour/potion_empty_back", originY: 0, x: f.get_STAGE_CENTER_X(), y: 98, scaleY: -1 }), this._MG_LAYER));
                    this._pourSpout = this._elementManager.addElement(new Hb({ originY: 0, x: f.get_STAGE_CENTER_X(), y: -10, scaleY: 2 }), this._MG_LAYER);
                    this._pourSpout.addAnimation("pour",
                        ["pour/potion_pour1", "pour/potion_pour2", "pour/potion_pour3", "pour/potion_pour4"]);
                    d = "pour/potion_fill";
                    e = "pour/potion_fill_container";
                    g = "pour/overflow_potion";
                    a = f.get_STAGE_CENTER_Y() + 165;
                    h = 30;
                    c = 1.35;
                    this._childSprites.push(this._elementManager.addElement(new t({ asset: "pour/potion_empty_front", originY: 0, x: f.get_STAGE_CENTER_X(), y: 100, scaleY: -1 }), this._MG_LAYER));
                    break;
                case 3:
                    c = "";
                    switch ((null == m.get_minigameResults()[0] ? K.PERFECT : m.get_minigameResults()[0])[1]) {
                        case 2:
                            c = "pour/sponge_pour_container_bad";
                            d = "pour/sponge_pour_fill_bad";
                            e = "pour/sponge_pour_bad";
                            break;
                        case 0:
                        case 1:
                            c = "pour/sponge_pour_container_good", d = "pour/sponge_pour_fill", e = "pour/sponge_pour_good"
                    }
                    c = this._elementManager.addElement(new t({ asset: c, originY: 1, x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 200 }), this._MG_LAYER);
                    this._childSprites.push(c);
                    this._pourSpout = this._elementManager.addElement(new Hb({ originY: 0, x: f.get_STAGE_CENTER_X(), y: 0, scaleY: 2 }), this._MG_LAYER);
                    this._pourSpout.addAnimation("pour", ["pour/cream_pour1", "pour/cream_pour2",
                        "pour/cream_pour3", "pour/cream_pour4"
                    ]);
                    g = "pour/overflow_cream";
                    a = f.get_STAGE_CENTER_Y() + 225;
                    c = 0.5;
                    h = 30;
                    break;
                case 9:
                    switch ((null == m.get_minigameResults()[m.get_minigameResults().length - 1] ? K.FAIL : m.get_minigameResults()[m.get_minigameResults().length - 1])[1]) {
                        case 2:
                            d = "pour/juice_fill_bad"; break;
                        case 0:
                        case 1:
                            d = "pour/juice_fill_good" } this._childSprites.push(this._elementManager.addElement(new t({ asset: "pour/straw", originY: 1, x: f.get_STAGE_CENTER_X() + 5, y: a - 25 }), this._MG_LAYER));
                    this._pourSpout = this._elementManager.addElement(new Hb({
                        originY: 0,
                        x: f.get_STAGE_CENTER_X(),
                        y: 0,
                        scaleY: 1.9
                    }), this._MG_LAYER);
                    this._pourSpout.addAnimation("pour", ["pour/juice_pour1", "pour/juice_pour2", "pour/juice_pour3", "pour/juice_pour4"]);
                    e = "pour/glass"
            }
            this._childSprites.push(this._pourSpout);
            this._pourFill = this._elementManager.addElement(new t({ asset: d, originY: 1, x: b, y: a, alpha: 0 }), this._MG_LAYER);
            this._childSprites.push(this._pourFill);
            this._addMask(this._pourFill.get_sprite());
            b = this._pourFill.get_height();
            this._maskPolygon(this._pourFill.get_sprite(), [0, b, this._pourFill.get_sprite().getNaturalWidth(),
                b, this._pourFill.get_sprite().getNaturalWidth(), this._pourFill.get_sprite().getNaturalHeight(), 0, this._pourFill.get_sprite().getNaturalHeight()
            ]);
            this._pourContainer = this._elementManager.addElement(new t({ asset: e, originY: 1, x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 200 }), this._MG_LAYER);
            this._childSprites.push(this._pourContainer);
            this._pourFill.get_sprite().get_graphics().clear();
            this._pourOverflow = this._elementManager.addElement(new t({
                asset: g,
                x: f.get_STAGE_CENTER_X(),
                y: this._pourContainer.y -
                    this._pourContainer.get_height() + h,
                alpha: 0
            }), this._MG_LAYER);
            this._childSprites.push(this._pourOverflow);
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "minigame_universal/slice_line", x: f.get_STAGE_CENTER_X(), y: this._pourFill.y - this._pourFill.get_height(), rotation: 90, scaleY: c }), this._MG_LAYER));
            this._prevY = this._prevX = 0;
            this._flagMouseDown = !1;
            this._maskUpdate()
        },
        _addMask: function(a) { var b = new E;
            b.setXY(a.x.$tG, a.y.$tG);
            a.owner.parent.addChild((new aa).add(b));
            a.set_mask(b);
            a.set_maskEnabled(!0) },
        _maskPolygon: function(a, b) { a.get_mask().get_graphics().fillPolygon(16711680, b);
            a.set_maskEnabled(!0) },
        onInput: function(a, b) { if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    this._flagMouseDown = b, this._pourSpout.animate("pour"), b ? n.playSound("pour", 1, null, !0) : (80 <= this._fillPercent && this._checkMinigameWinOrLose(), n.stopSound("pour")) } },
        _onBeginMinigame: function() {
            x.prototype._onBeginMinigame.call(this);
            this._tutorialHand.x = f.get_STAGE_CENTER_X();
            switch (m.get_recipeID()[1]) {
                case 3:
                    this._tutorialHand.y =
                        f.get_STAGE_CENTER_Y() - 35;
                    break;
                default:
                    this._tutorialHand.y = f.get_STAGE_CENTER_Y()
            }
            this._tutorialHand.set_alpha(1);
            this._tutorialHand.setTutorialType(R.HOLD)
        },
        _checkMinigameWinOrLose: function() { this._flagMouseDown = !1;
            this._gameResult = 110 <= this._fillPercent ? K.FAIL : 90 < this._fillPercent ? K.PERFECT : 80 < this._fillPercent ? K.GOOD : K.FAIL;
            n.stopSound("pour");
            this._tutorialHand.set_alpha(0);
            this._setMinigameResult(this._gameResult) },
        __class__: Vf
    });
    var qc = h["world.minigames._MinigamePrep.GAME_STATE"] = {
        __ename__: ["world",
            "minigames", "_MinigamePrep", "GAME_STATE"
        ],
        __constructs__: ["MEMORY_PHASE", "PREP_PHASE"]
    };
    qc.MEMORY_PHASE = ["MEMORY_PHASE", 0];
    qc.MEMORY_PHASE.toString = l;
    qc.MEMORY_PHASE.__enum__ = qc;
    qc.PREP_PHASE = ["PREP_PHASE", 1];
    qc.PREP_PHASE.toString = l;
    qc.PREP_PHASE.__enum__ = qc;
    var Qf = function(a, b, c) { this._STARTING_Y_POS = f.get_STAGE_CENTER_Y() + 75;
        this._HIDE_INIT_LAYERS = !0;
        this._DEBUG_HITBOX = 0;
        x.call(this, a, b, c) };
    h["world.minigames.MinigamePrep"] = Qf;
    Qf.__name__ = ["world", "minigames", "MinigamePrep"];
    Qf.__super__ = x;
    Qf.prototype =
        p(x.prototype, {
            start: function() { this._setGameState(qc.MEMORY_PHASE) },
            _onBeginMinigame: function() { x.prototype._onBeginMinigame.call(this); for (var a = this._ingredients.length; 0 < a--;)
                    if (this._ingredients[a].get_ingredientType() == this._ingredientList[0]) { this._tutorialHand.setTutorialType(R.TRACE, [this._ingredients[a].x - f.get_STAGE_CENTER_X(), 0], [this._ingredients[a].y - f.get_STAGE_CENTER_Y(), this._foodBase.y - f.get_STAGE_CENTER_Y()], 0.55); break } },
            dispose: function() {
                x.prototype.dispose.call(this);
                this._readyBtn =
                    this._ingredientPosY = this._ingredientPosX = this._ingredients = this._hitBox = this._selectedIngredient = this._foodBase = this._ingredientContainer = this._ingredientList = null
            },
            _setGameState: function(a) {
                var b = this;
                this._gameState = a;
                switch (this._gameState[1]) {
                    case 0:
                        this._tween.tween({ target: this._ingredientContainer, duration: 0.5, ease: v.outBack }, { y: f.get_STAGE_CENTER_Y() });
                        this._tween.tween({ target: this._readyBtn, duration: 0.5, ease: v.outBack }, { y: f.get_STAGE_CENTER_Y() + 150 });
                        break;
                    case 1:
                        this._tween.tween({
                            target: this._ingredientContainer,
                            duration: 0.5,
                            ease: v.inBack,
                            complete: function() { b._setState(ja.COUNTDOWN) }
                        }, { y: this._ingredientContainer.y - f.get_STAGE_HEIGHT() }), this._tween.tween({ target: this._readyBtn, duration: 0.5, ease: v.inBack }, { y: this._readyBtn.y - f.get_STAGE_HEIGHT() })
                }
            },
            update: function(a) { x.prototype.update.call(this, a) },
            _initWorld: function() {
                x.prototype._initWorld.call(this);
                m.set_recipeIngredientOrder([]);
                this._flagDisableMouseOverTween = this._flagMouseDown = !1;
                this._currentLayer = this._numWrongAnswers = 0;
                this._numLayers = m.getMinigameIngredientList(this._recipeType).length;
                this._ingredientList = [];
                for (var a = 0; a < this._numLayers;) { var b = m.getMinigameIngredientList(this._recipeType)[a].length;
                    this._ingredientList.push(m.getMinigameIngredientList(this._recipeType)[a][S.randomInt(0, b - 1)]);
                    a++ } this._childSprites.push(this._hitBox = this._elementManager.addElement(new Ga({ color: 16777215, width: 300, height: 300, x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), alpha: this._DEBUG_HITBOX }), this._UI_LAYER));
                switch (m.get_recipeID()[1]) {
                    case 1:
                        this._hitBox.y -= 25;
                        this._hitBox.set_sizeX(280);
                        this._hitBox.set_sizeY(280);
                        this._startScale = 0.8;
                        this._childSprites.push(this._foodBase = this._elementManager.addElement(new Ld({ x: f.get_STAGE_CENTER_X(), y: this._STARTING_Y_POS }, this._ingredientList, this._HIDE_INIT_LAYERS), this._MG_LAYER));
                        this._addKrabbyPattyIngredients();
                        break;
                    case 4:
                        this._childSprites.push(this._elementManager.addElement(new t({ asset: "sushimat_norice", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 125 }), this._MG_LAYER));
                        this._hitBox.y += 60;
                        this._hitBox.set_sizeX(150);
                        this._hitBox.set_sizeY(175);
                        this._startScale = 1;
                        this._childSprites.push(this._foodBase = this._elementManager.addElement(new Md({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 90 }, this._ingredientList, this._HIDE_INIT_LAYERS), this._MG_LAYER));
                        this._addSushiIngredients();
                        break;
                    case 9:
                        this._startScale = 0.65, this._childSprites.push(this._foodBase = this._elementManager.addElement(new kg({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 90 }, this._ingredientList, this._HIDE_INIT_LAYERS), this._MG_LAYER)), this._addJuiceBlendIngredients()
                }
                this._ingredientPosX = [];
                this._ingredientPosY = [];
                for (a = 0; a < this._ingredients.length;) this._ingredientPosX.push(this._ingredients[a].x), this._ingredientPosY.push(this._ingredients[a].y), a++;
                this._showIngredientOrder()
            },
            _addKrabbyPattyIngredients: function() {
                for (var a = [], b = S.randomInt(0, 4); 5 > a.length;) { for (var c = a.length; 0 < c--;) a[c] == b && (b = S.randomInt(0, 4), c = a.length);
                    a.push(b) } this._ingredients = [];
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() - 275, y: f.get_STAGE_CENTER_Y() + 25, scale: this._startScale },
                    m.getMinigameIngredientList(this._recipeType)[a[0]][0], 0), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() - 285, y: f.get_STAGE_CENTER_Y() + 125, scale: this._startScale }, m.getMinigameIngredientList(this._recipeType)[a[1]][0], 1), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({
                    x: f.get_STAGE_CENTER_X() +
                        275,
                    y: f.get_STAGE_CENTER_Y() + 25,
                    scale: this._startScale
                }, m.getMinigameIngredientList(this._recipeType)[a[2]][0], 2), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() + 325, y: f.get_STAGE_CENTER_Y() + 250, scale: this._startScale }, m.getMinigameIngredientList(this._recipeType)[a[3]][0], 3), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({
                    x: f.get_STAGE_CENTER_X(),
                    y: f.get_STAGE_CENTER_Y() + 250,
                    scale: this._startScale
                }, m.getMinigameIngredientList(this._recipeType)[a[4]][0], 4), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() + 260, y: f.get_STAGE_CENTER_Y() + 125, scale: this._startScale }, m.getMinigameIngredientList(this._recipeType)[5][0], 5), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1])
            },
            _addSushiIngredients: function() {
                this._ingredients = [];
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() + 150, y: f.get_STAGE_CENTER_Y() }, m.getMinigameIngredientList(this._recipeType)[0][0], 0), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() + 200, y: f.get_STAGE_CENTER_Y() + 70 }, m.getMinigameIngredientList(this._recipeType)[0][1], 1), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length -
                    1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() + 250, y: f.get_STAGE_CENTER_Y() + 140 }, m.getMinigameIngredientList(this._recipeType)[1][0], 2), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() + 300, y: f.get_STAGE_CENTER_Y() + 210 }, m.getMinigameIngredientList(this._recipeType)[1][1], 3), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length -
                    1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() - 100, y: f.get_STAGE_CENTER_Y() + 210 }, m.getMinigameIngredientList(this._recipeType)[2][0], 4), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() + 100, y: f.get_STAGE_CENTER_Y() + 210 }, m.getMinigameIngredientList(this._recipeType)[2][1], 5), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length -
                    1])
            },
            _addJuiceBlendIngredients: function() {
                this._ingredients = [];
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() - 275, y: f.get_STAGE_CENTER_Y() + 15, scale: this._startScale }, m.getMinigameIngredientList(this._recipeType)[4][0], 4), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() - 285, y: f.get_STAGE_CENTER_Y() + 125, scale: this._startScale }, m.getMinigameIngredientList(this._recipeType)[1][0],
                    1), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X() + 275, y: f.get_STAGE_CENTER_Y() + 15, scale: this._startScale }, m.getMinigameIngredientList(this._recipeType)[2][0], 2), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({
                    x: f.get_STAGE_CENTER_X() + 325,
                    y: f.get_STAGE_CENTER_Y() + 250,
                    scale: this._startScale
                }, m.getMinigameIngredientList(this._recipeType)[3][0], 3), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 250, scale: this._startScale }, m.getMinigameIngredientList(this._recipeType)[0][0], 0), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1]);
                this._childSprites.push(this._elementManager.addElement(new Ia({
                    x: f.get_STAGE_CENTER_X() +
                        300,
                    y: f.get_STAGE_CENTER_Y() + 125,
                    scale: this._startScale
                }, m.getMinigameIngredientList(this._recipeType)[5][0], 5), this._MG_LAYER));
                this._ingredients.push(this._childSprites[this._childSprites.length - 1])
            },
            _showIngredientOrder: function() {
                this._childSprites.push(this._ingredientContainer = this._elementManager.addElement(new t({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - f.get_STAGE_HEIGHT() }), this._UI_LAYER));
                var a = this._ingredientContainer.addChild(new t({ asset: "minigame_universal/container_horizontal" }));
                f.get_STAGE_CENTER_X();
                switch (m.get_recipeID()[1]) {
                    case 1:
                        f.get_STAGE_CENTER_X();
                        a.scaleX = 2;
                        a.scaleY = 1.8;
                        this._ingredientContainer.set_scale(0.6);
                        this._ingredientContainer.addChild(new N({ asset: "prep/cheese", x: -500, y: 0, scale: 0.8 }));
                        this._ingredientContainer.addChild(new Na({ text: "code.code_key_1", align: ea.Center, x: -500, y: 75 }));
                        this._ingredientContainer.addChild(new N({ asset: "prep/pickle", x: -250, y: 0, scale: 0.8 }));
                        this._ingredientContainer.addChild(new Na({
                            text: "code.code_key_2",
                            align: ea.Center,
                            x: -250,
                            y: 75
                        }));
                        this._ingredientContainer.addChild(new N({ asset: "prep/lettuce", x: 0, y: 0, scale: 0.8 }));
                        this._ingredientContainer.addChild(new Na({ text: "code.code_key_3", align: ea.Center, x: 0, y: 75 }));
                        this._ingredientContainer.addChild(new N({ asset: "prep/tomato", x: 250, y: 0, scale: 0.8 }));
                        this._ingredientContainer.addChild(new Na({ text: "code.code_key_4", align: ea.Center, x: 250, y: 75 }));
                        this._ingredientContainer.addChild(new N({ asset: "prep/onion", x: 500, y: 0, scale: 0.8 }));
                        this._ingredientContainer.addChild(new Na({
                            text: "code.code_key_5",
                            align: ea.Center,
                            x: 500,
                            y: 75
                        }));
                        this._ingredientContainer.addChild(new Na({ text: "minigame.order", align: ea.Center, x: 0, y: -75 }));
                        break;
                    case 4:
                        a.set_scale(1.35);
                        this._ingredientContainer.set_scale(0.8);
                        this._ingredientContainer.addChild(new db({ x: -275, y: 15 }, this._ingredientList[0]));
                        this._ingredientContainer.addChild(new Na({ text: "code.code_key_1", align: ea.Center, x: -275, y: 65 }));
                        this._ingredientContainer.addChild(new db({ x: -25, y: 15 }, this._ingredientList[1]));
                        this._ingredientContainer.addChild(new Na({
                            text: "code.code_key_2",
                            align: ea.Center,
                            x: -25,
                            y: 65
                        }));
                        this._ingredientContainer.addChild(new db({ x: 225, y: 15 }, this._ingredientList[2]));
                        this._ingredientContainer.addChild(new Na({ text: "code.code_key_3", align: ea.Center, x: 225, y: 65 }));
                        this._ingredientContainer.addChild(new Na({ text: "minigame.order", align: ea.Center, y: -50 }));
                        break;
                    case 9:
                        f.get_STAGE_CENTER_X(), a.scaleX = 1.15, this._ingredientContainer.addChild(new Na({ text: "minigame.any_order", align: ea.Center, x: -40, y: 0 }))
                }
                this._childSprites.push(this._readyBtn = this._elementManager.addElement(new N({
                    asset: "ui/splash_sound_button",
                    x: f.get_STAGE_CENTER_X(),
                    y: f.get_STAGE_CENTER_Y() + 150 - f.get_STAGE_HEIGHT()
                }), this._UI_LAYER));
                this._readyBtn.addChild(new t({ asset: "ui/menu/button_green", x: 0, y: 0, scale: 0.7 }))
            },
            onInput: function(a, b) {
                switch (a[1]) {
                    case 0:
                        if (b && (this._flagMouseDown = !0, this._updateInputPos(), null != this._gameState)) switch (this._gameState[1]) {
                            case 0:
                                this._readyBtn.contains(this._inputPos.x, this._inputPos.y) && this._setGameState(qc.PREP_PHASE) }
                        break;
                    case 10:
                        if (null != this._gameState) switch (this._gameState[1]) {
                            case 0:
                                this._updateInputPos(),
                                    this._readyBtn.contains(this._inputPos.x, this._inputPos.y) ? this._readyBtn.set_scale(1.1) : this._readyBtn.set_scale(1)
                        }
                }
                if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                    case 0:
                        if (b) switch (this._flagMouseDown = !0, this._updateInputPos(), this._gameState[1]) {
                            case 1:
                                for (var c = this._ingredients.length; 0 < c--;)
                                    if (this._ingredients[c].contains(this._inputPos.x, this._inputPos.y))
                                        if (this._ingredients[c].get_isLocked()) {
                                            if (this._ingredients[c].get_currentLayer() == this._currentLayer - 1) {
                                                this._selectedIngredient =
                                                    this._ingredients[c];
                                                this._selectedIngredient.set_isLocked(!1);
                                                this._selectedIngredient.set_scale(1);
                                                this._removeLayer();
                                                n.stopSound("pick_up");
                                                break
                                            }
                                        } else { this._tutorialHand.set_alpha(0);
                                            this._selectedIngredient = this._ingredients[c];
                                            this._selectedIngredient.set_scale(1);
                                            this._prevX = this._ingredients[c].x;
                                            this._prevY = this._ingredients[c].y; break }
                        } else if (this._flagMouseDown && (this._flagMouseDown = !1, null != this._selectedIngredient))
                            if (this._inputPos.x > this._hitBox.x - this._hitBox.sizeX / 2 && this._inputPos.x <
                                this._hitBox.x + this._hitBox.sizeX / 2 && this._inputPos.y > this._hitBox.y - this._hitBox.sizeY / 2 && this._inputPos.y < this._hitBox.y + this._hitBox.sizeY / 2)
                                if (this._currentLayer < this._numLayers - 1) switch (this._selectedIngredient.get_ingredientType()[1]) {
                                    case 11:
                                    case 10:
                                    case 0:
                                        switch (m.get_recipeID()[1]) {
                                            case 9:
                                                this._addLayer(this._selectedIngredient.get_ingredientType(), 0);
                                                this._checkMinigameWinOrLose();
                                                break;
                                            default:
                                                c = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 50, textId: "minigame.wrong", color: 11740160 },
                                                    Aa.spawnParticle.dispatch(c), this._tweenIngredientBackToStart()
                                        }
                                        break;
                                    default:
                                        this._addLayer(this._selectedIngredient.get_ingredientType(), 0)
                                } else this._addLayer(this._selectedIngredient.get_ingredientType(), 0);
                                else this._tweenIngredientBackToStart();
                        break;
                    case 10:
                        !1 == this._flagDisableMouseOverTween && (this._updateInputPos(), this._flagMouseDown && null != this._selectedIngredient && (this._selectedIngredient.x = this._inputPos.x, this._selectedIngredient.y = this._inputPos.y))
                }
            },
            _tweenIngredientBackToStart: function() {
                var a =
                    this;
                this._tween.tween({ target: this._selectedIngredient, duration: 0.25, ease: v.outQuad, complete: function() { a._selectedIngredient = null } }, { x: this._ingredientPosX[this._selectedIngredient.get_index()], y: this._ingredientPosY[this._selectedIngredient.get_index()], scale: this._startScale })
            },
            _addLayer: function(a, b) {
                if (!(this._currentLayer >= this._numLayers)) {
                    this._selectedIngredient.set_isLocked(!0);
                    this._selectedIngredient.set_currentLayer(this._currentLayer);
                    this._selectedIngredient.x = this._foodBase.x;
                    this._selectedIngredient.y =
                        this._foodBase.y + this._foodBase.get_layers()[this._currentLayer].y;
                    this._selectedIngredient = null;
                    m.get_recipeIngredientOrder().push(a);
                    this._foodBase.swapLayerAsset(a, this._currentLayer);
                    this._currentLayer++;
                    switch (m.get_recipeID()[1]) {
                        case 9:
                            if (this._currentLayer < this._numLayers) switch (n.playSound("place_item_correct"), S.randomInt(0, 2)) {
                                case 0:
                                    var c = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 50, textId: "minigame.good", color: 6750054 };
                                    Aa.spawnParticle.dispatch(c);
                                    break;
                                case 1:
                                    c = {
                                        x: f.get_STAGE_CENTER_X(),
                                        y: f.get_STAGE_CENTER_Y() - 50,
                                        textId: "minigame.cool",
                                        color: 6750054
                                    };
                                    Aa.spawnParticle.dispatch(c);
                                    break;
                                case 2:
                                    c = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 50, textId: "minigame.nice", color: 6750054 }, Aa.spawnParticle.dispatch(c)
                            }
                            break;
                        default:
                            a == this._ingredientList[this._currentLayer - 1] ? this._currentLayer < this._numLayers && (n.playSound("place_item_correct"), c = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 50, textId: "minigame.right", color: 6750054 }, Aa.spawnParticle.dispatch(c)) : (n.playSound("place_item_bad"),
                                this._numWrongAnswers++, this._currentLayer < this._numLayers && (c = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 50, textId: "minigame.wrong", color: 11740160 }, Aa.spawnParticle.dispatch(c)))
                    }
                    this._currentLayer >= this._numLayers && this._checkMinigameWinOrLose()
                }
            },
            _removeLayer: function() { 0 != this._currentLayer && (this._currentLayer--, m.get_recipeIngredientOrder().pop(), this._foodBase.removeLayerAsset(this._currentLayer)) },
            _checkMinigameWinOrLose: function() {
                switch (m.get_recipeID()[1]) {
                    case 9:
                        0 < this._currentLayer &&
                            (this._gameResult = K.PERFECT);
                        break;
                    default:
                        for (var a = 0, b = !1; a < this._ingredientList.length;) { if (m.get_recipeIngredientOrder()[a] != this._ingredientList[a]) { b = !0; break } a++ }!1 == b && (this._gameResult = 0 >= this._numWrongAnswers ? K.PERFECT : K.GOOD)
                }
                this._setMinigameResult(this._gameResult)
            },
            __class__: Qf
        });
    var Uf = function(a, b, c) { x.call(this, a, b, c);
        this._previousCutQuality = 2 };
    h["world.minigames.MinigameSlice"] = Uf;
    Uf.__name__ = ["world", "minigames", "MinigameSlice"];
    Uf.__super__ = x;
    Uf.prototype = p(x.prototype, {
        dispose: function() {
            x.prototype.dispose.call(this);
            this._chopLine = this._drawLine = this._ingredientList = null;
            this._sliceTarget.doDelete = !0;
            for (var a = this._slices.length; 0 < a;) a--, this._slices[a].doDelete = !0, this._slices.splice(a, 1);
            this._slices = null
        },
        update: function(a) { x.prototype.update.call(this, a) },
        _onBeginMinigame: function() { x.prototype._onBeginMinigame.call(this);
            this._tutorialHand.setTutorialType(R.SWIPE_DOWN) },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            this._currentIndex = 0;
            this._ingredientList = [m.getMinigameIngredientList(this._recipeType)[0][0]];
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "minigame_universal/items/cuttingboard", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 80 }), this._MG_LAYER));
            var a = this._ingredientList.shift();
            this._sliceTarget = this._elementManager.addElement(new Oa({ asset: m.getIngredientAsset(a), x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 150, originX: 0.5, originY: 1 }, a), this._MG_LAYER);
            this._addMask(this._sliceTarget.get_sprite());
            this._slices = [];
            this._childSprites.push(this._drawLine =
                this._elementManager.addElement(new Jd({ color: 0, width: 250, height: 5, originX: 0, originY: 0, x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), alpha: 0 }), this._MG_LAYER));
            this._numSlices = 4;
            this._sliceIncrement = this._sliceTarget.get_width() / (this._numSlices + 1);
            this._sliceX = this._sliceTarget.get_width() - this._sliceIncrement;
            this._childSprites.push(this._chopLine = this._elementManager.addElement(new Kd({ asset: "minigame_universal/slice_line", x: this._sliceX + this._sliceTarget.x, y: f.get_STAGE_CENTER_Y() + 40 }), this._MG_LAYER));
            this._setChopLine();
            this._failSlices = this._goodSlices = this._perfectSlices = this._sliceNum = 0;
            this._flagMouseDown = this._flagDisableInput = !1;
            switch (m.get_recipeID()[1]) {
                case 5:
                case 9:
                    this._tutorialHand.x = f.get_STAGE_CENTER_X() + 175; break;
                case 2:
                    this._sliceTarget.y = f.get_STAGE_CENTER_Y() + 100;
                    this._tutorialHand.x = f.get_STAGE_CENTER_X() + 235; break;
                default:
                    this._tutorialHand.x = f.get_STAGE_CENTER_X() + 100 }
        },
        _addMask: function(a) {
            var b = new E;
            b.setXY(a.x.$tG, a.y.$tG);
            a.owner.parent.addChild((new aa).add(b));
            a.set_mask(b);
            a.set_maskEnabled(!0);
            b.get_graphics().fillPolygon(16711680, [0, 0, a.getNaturalWidth(), 0, a.getNaturalWidth(), a.getNaturalHeight(), 0, a.getNaturalHeight()])
        },
        _clearMask: function(a) { a.get_mask().get_graphics().clear() },
        _maskPolygon: function(a, b) { a.get_mask().get_graphics().fillPolygon(16711680, b);
            a.set_maskEnabled(!0) },
        _maskTexture: function(a, b, c, d) { null == d && (d = 0);
            null == c && (c = 0);
            a.get_mask().get_graphics().drawTexture(M.assets.getTexture(b), c, d) },
        onInput: function(a, b) {
            if (this._state == ja.GAMEPLAY && !this._flagDisableInput) {
                switch (a[1]) {
                    case 0:
                        b ?
                            (this._updateInputPos(), this._flagMouseDown = !0, this._startX = this._inputPos.x, this._startY = this._inputPos.y) : this._flagMouseDown && (this._updateInputPos(), this._flagMouseDown = !1, this._checkCutResult(new Ff(this._startX, this._startY, this._inputPos.x, this._inputPos.y)));
                        break;
                    case 10:
                        this._flagMouseDown && (this._updateInputPos(), this._chopLine.beginCheck(this._startX, this._startY, this._inputPos.x, this._inputPos.y))
                }
                if (null != this._drawLine) this._drawLine.onInput(a, b, this._inputPos.x, this._inputPos.y)
            }
        },
        _checkCutResult: function(a) {
            a = 0;
            if (3 <= this._chopLine.getNumberOfPerfectSpotsHit()) a = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), textId: "minigame.perfect", color: 6750054 }, Aa.spawnParticle.dispatch(a), a = 2, this._perfectSlices++;
            else if (3 <= this._chopLine.getNumberOfGoodSpotsHit()) a = { x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), textId: "minigame.good", color: 16777088 }, Aa.spawnParticle.dispatch(a), a = 1, this._goodSlices++;
            else {
                var b = {
                    x: f.get_STAGE_CENTER_X(),
                    y: f.get_STAGE_CENTER_Y(),
                    textId: "minigame.fail",
                    color: 11740160
                };
                Aa.spawnParticle.dispatch(b);
                this._failSlices++
            }
            this._tutorialHand.set_alpha(0);
            n.playSound("slice");
            this._clearMask(this._sliceTarget.get_sprite());
            this._maskPolygon(this._sliceTarget.get_sprite(), [0, 0, this._sliceX, 0, this._sliceX, this._sliceTarget.get_height(), 0, this._sliceTarget.get_height()]);
            this._slices.push(this._elementManager.addElement(new Oa({
                asset: m.getIngredientAsset(this._sliceTarget.get_ingredientType()),
                x: this._sliceTarget.x,
                y: this._sliceTarget.y,
                originX: this._sliceTarget.originX,
                originY: this._sliceTarget.originY
            }, this._sliceTarget.get_ingredientType()), this._MG_LAYER));
            this._addMask(this._slices[this._slices.length - 1].get_sprite());
            this._clearMask(this._slices[this._slices.length - 1].get_sprite());
            var c = b = 0;
            switch (a) {
                case 0:
                    this._maskTexture(this._sliceTarget.get_sprite(), "slice_bad_b", this._sliceX);
                    this._maskTexture(this._slices[this._slices.length - 1].get_sprite(), "slice_bad_a", this._sliceX);
                    b = 22;
                    break;
                case 1:
                    this._maskTexture(this._sliceTarget.get_sprite(), "slice_good_b",
                        this._sliceX), this._maskTexture(this._slices[this._slices.length - 1].get_sprite(), "slice_good_a", this._sliceX), b = 6, this._maskTexture(this._sliceTarget.get_sprite(), "slice_good_b", this._sliceX)
            }
            switch (this._previousCutQuality) {
                case 0:
                    c = 22;
                    this._maskTexture(this._slices[this._slices.length - 1].get_sprite(), "slice_bad_b", this._sliceX + this._sliceIncrement - c); break;
                case 1:
                    c = 6, this._maskTexture(this._slices[this._slices.length - 1].get_sprite(), "slice_good_b", this._sliceX + this._sliceIncrement - c) } this._maskPolygon(this._slices[this._slices.length -
                1].get_sprite(), [this._sliceX + b, 0, this._sliceX + this._sliceIncrement - c, 0, this._sliceX + this._sliceIncrement - c, this._slices[this._slices.length - 1].get_height(), this._sliceX + b, this._slices[this._slices.length - 1].get_height()]);
            this._previousCutQuality = a;
            this._tween.tween({ target: this._slices[this._slices.length - 1], duration: 0.15, ease: v.linear }, { x: this._sliceTarget.x + 25, rotation: 3 * (this._numSlices - this._sliceNum) });
            this._sliceNum++;
            this._sliceNum >= this._numSlices ? this._checkMinigameWinOrLose() : (this._sliceX -=
                this._sliceIncrement, this._setChopLine())
        },
        _setChopLine: function() { this._chopLine.resetSpots();
            this._chopLine.setPosition(this._sliceX + this._sliceTarget.x - this._sliceTarget.get_width() * this._sliceTarget.originX, f.get_STAGE_CENTER_Y() + 40, 0) },
        _checkMinigameWinOrLose: function() { this._chopLine.set_alpha(0);
            this._perfectSlices >= this._numSlices - 1 ? this._gameResult = K.PERFECT : this._perfectSlices + this._goodSlices > this._failSlices && (this._gameResult = K.GOOD);
            this._setMinigameResult(this._gameResult) },
        __class__: Uf
    });
    var kb = h["world.minigames._MinigameSpread.GAME_PHASE"] = { __ename__: ["world", "minigames", "_MinigameSpread", "GAME_PHASE"], __constructs__: ["SELECTION_PHASE", "SPREAD_PHASE", "SPRINKLE_PHASE"] };
    kb.SELECTION_PHASE = ["SELECTION_PHASE", 0];
    kb.SELECTION_PHASE.toString = l;
    kb.SELECTION_PHASE.__enum__ = kb;
    kb.SPREAD_PHASE = ["SPREAD_PHASE", 1];
    kb.SPREAD_PHASE.toString = l;
    kb.SPREAD_PHASE.__enum__ = kb;
    kb.SPRINKLE_PHASE = ["SPRINKLE_PHASE", 2];
    kb.SPRINKLE_PHASE.toString = l;
    kb.SPRINKLE_PHASE.__enum__ = kb;
    var oc = function(a, b, c) {
        this._PLATTER_TARGET_Y =
            f.get_STAGE_HEIGHT() - 50;
        this._STROKE_SIZE = 45;
        x.call(this, a, b, c)
    };
    h["world.minigames.MinigameSpread"] = oc;
    oc.__name__ = ["world", "minigames", "MinigameSpread"];
    oc.__super__ = x;
    oc.prototype = p(x.prototype, {
        dispose: function() { x.prototype.dispose.call(this);
            this._secondTutHand = this._handIn = this._platters = this._gridCheck = this._points = this._mask = this._maskSprite = this._layers = this._toppings = null },
        _onBeginMinigame: function() {
            x.prototype._onBeginMinigame.call(this);
            switch (m.get_recipeID()[1]) {
                case 0:
                    this._setGamePhase(kb.SELECTION_PHASE);
                    break;
                case 5:
                case 3:
                    this._setGamePhase(kb.SPREAD_PHASE)
            }
        },
        _highlightLeftHand: function() { switch (this._gamePhase[1]) {
                case 0:
                    break;
                default:
                    return } null != this._secondTutHand && (this._secondTutHand.set_alpha(0), this._tween.tween({ target: this._tutorialHand, duration: 0.15, ease: v.inOutQuad }, { alpha: 1 }), ka.start(G(this, this._highlightRightHand), 1.1)) },
        _highlightRightHand: function() {
            switch (this._gamePhase[1]) {
                case 0:
                    break;
                default:
                    return } null != this._tutorialHand && (this._tutorialHand.set_alpha(0), this._tween.tween({
                target: this._secondTutHand,
                duration: 0.15,
                ease: v.inOutQuad
            }, { alpha: 1 }), ka.start(G(this, this._highlightLeftHand), 1.1))
        },
        _setGamePhase: function(a) {
            var b = this;
            this._gamePhase = a;
            switch (this._gamePhase[1]) {
                case 0:
                    this._tutorialHand.set_alpha(0);
                    this._secondTutHand.set_alpha(0);
                    this._tutorialHand.x = f.get_STAGE_CENTER_X() - 250;
                    this._tutorialHand.y = f.get_STAGE_CENTER_Y() - 35;
                    this._tutorialHand.setTutorialType(R.TAP);
                    this._secondTutHand.x = f.get_STAGE_CENTER_X() + 250;
                    this._secondTutHand.y = f.get_STAGE_CENTER_Y() - 35;
                    this._secondTutHand.setTutorialType(R.TAP);
                    this._highlightLeftHand();
                    this._tweenPlattersIn();
                    break;
                case 1:
                    null != this._secondTutHand && (this._secondTutHand.doDelete = !0, this._secondTutHand = null);
                    a = [];
                    for (var c = [], d = 0, e = this._gridCheck.get_gridSpaces(); d < e.length;) { var g = e[d];++d;
                        a.push(g.x);
                        c.push(g.y + 35) } this._tutorialHand.set_alpha(1);
                    this._tutorialHand.x = f.get_STAGE_CENTER_X();
                    this._tutorialHand.setTutorialType(R.TRACE, a, c, 0.25);
                    break;
                case 2:
                    this._flagTweening = !0, this._tutorialHand.x = f.get_STAGE_CENTER_X() + 100, this._tutorialHand.y = f.get_STAGE_CENTER_Y() -
                        175, this._tutorialHand.setTutorialType(R.SWIPE_DOWN), this._tween.tween({ target: this._handIn, duration: 0.25, ease: v.linear, complete: function() { b._flagTweening = !1 } }, { y: this._handIn.y + f.get_STAGE_CENTER_Y() })
            }
        },
        update: function(a) { x.prototype.update.call(this, a) },
        _addEventListeners: function() { x.prototype._addEventListeners.call(this);
            oc.sprinklePhase.add(G(this, this._onSprinklePhase)) },
        _removeEventListeners: function() { x.prototype._removeEventListeners.call(this);
            oc.sprinklePhase.remove(G(this, this._onSprinklePhase)) },
        _onSprinklePhase: function() { this._setGamePhase(kb.SPRINKLE_PHASE) },
        _shakeHand: function() {
            var a = this;
            this._flagTweening || (this._flagTweening = !0, this._tween.tween({
                target: this._handIn,
                duration: 0.1,
                ease: v.linear,
                complete: function() {
                    for (var b = 15; 0 < b--;) { var c = { x: S.randomFloat(480, 525), y: S.randomFloat(200, 275), type: $.SPRINKLE };
                        Ya.spawnParticle.dispatch(c) } a._tween.tween({
                        target: a._handIn,
                        duration: 0.1,
                        ease: v.linear,
                        complete: function() {
                            a._flagTweening = !1;
                            a._tween.tween({
                                target: a._toppings[a._shakeCount],
                                duration: 0.5,
                                ease: v.linear,
                                delay: 0.25
                            }, { alpha: 1 });
                            a._shakeCount++;
                            3 <= a._shakeCount && (a._shakeCount = 3, a._flagTweening = !0, a._tutorialHand.set_alpha(0), a._tween.tween({ target: a._handIn, duration: 0.25, ease: v.linear }, { y: a._handIn.y - f.get_STAGE_CENTER_Y() }), x.endMinigameEarly.dispatch(null))
                        }
                    }, { rotation: 0 })
                }
            }, { rotation: 5 }))
        },
        _addSprinkleLayer: function() { var a;
            this._childSprites.push(a = this._elementManager.addElement(new t({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 65 }), this._MG_LAYER));
            this._layers.push(a) },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            var a = null;
            switch (m.get_recipeID()[1]) {
                case 0:
                    switch ((null == m.get_minigameResults()[0] ? K.PERFECT : m.get_minigameResults()[1])[1]) {
                        case 2:
                            this._childSprites.push(this._elementManager.addElement(new t({ asset: "spread/donut_bad", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 75 }), this._MG_LAYER));
                            break;
                        default:
                            this._childSprites.push(this._elementManager.addElement(new t({
                                asset: "spread/donut_good",
                                x: f.get_STAGE_CENTER_X(),
                                y: f.get_STAGE_CENTER_Y() +
                                    75
                            }), this._MG_LAYER))
                    }
                    this._childSprites.push(this._maskSprite = this._elementManager.addElement(new t({ asset: "spread/icing_good_pink", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 65 }), this._MG_LAYER));
                    this._toppings = [];
                    this._childSprites.push(this._elementManager.addElement(new t({ asset: "spread/sprinkles1", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 60, alpha: 0 }), this._MG_LAYER));
                    this._toppings.push(this._childSprites[this._childSprites.length - 1]);
                    this._childSprites.push(this._elementManager.addElement(new t({
                        asset: "spread/sprinkles2",
                        x: f.get_STAGE_CENTER_X(),
                        y: f.get_STAGE_CENTER_Y() + 60,
                        alpha: 0
                    }), this._MG_LAYER));
                    this._toppings.push(this._childSprites[this._childSprites.length - 1]);
                    this._childSprites.push(this._elementManager.addElement(new t({ asset: "spread/sprinkles3", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() + 60, alpha: 0 }), this._MG_LAYER));
                    this._toppings.push(this._childSprites[this._childSprites.length - 1]);
                    this._layers = [];
                    for (a = 0; 3 > a;) a++, this._addSprinkleLayer();
                    m.set_recipeIngredientOrder([]);
                    this._platters = [];
                    this._childSprites.push(a =
                        this._elementManager.addElement(new Od({ asset: "spread/icing_tube_chocolate", x: f.get_STAGE_CENTER_X() - 250, y: f.get_STAGE_CENTER_Y() + 15 }, this._recipeType), this._MG_LAYER));
                    this._platters.push(a);
                    this._childSprites.push(a = this._elementManager.addElement(new Od({ asset: "spread/icing_tube_pink", x: f.get_STAGE_CENTER_X() + 250, y: f.get_STAGE_CENTER_Y() + 15 }, this._recipeType), this._MG_LAYER));
                    a.get_ingredientChoice().set_ingredientType(m.getMinigameIngredientList(this._recipeType)[0][1]);
                    this._platters.push(a);
                    this._childSprites.push(this._handIn = this._elementManager.addElement(new t({ x: -95, y: f.get_STAGE_CENTER_Y() - 215 - f.get_STAGE_CENTER_Y(), originX: 0 }), this._MG_LAYER));
                    this._handIn.addChild(new t({ asset: "minigame_universal/shaker_sprinkles", x: 575, y: 15, rotation: 0 }));
                    this._childSprites.push(this._secondTutHand = this._elementManager.addElement(new Ac({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y(), alpha: 1 }, this._tween), this._UI_LAYER));
                    break;
                case 5:
                    this._childSprites.push(this._elementManager.addElement(new t({
                        asset: "spread/guac",
                        x: f.get_STAGE_CENTER_X() + 335,
                        y: f.get_STAGE_CENTER_Y() + 95
                    }), this._MG_LAYER));
                    switch ((null == m.get_minigameResults()[2] ? K.PERFECT : m.get_minigameResults()[2])[1]) {
                        case 2:
                            this._childSprites.push(this._elementManager.addElement(new t({ asset: "toast/toast_bad", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }), this._MG_LAYER)); break;
                        default:
                            this._childSprites.push(a = this._elementManager.addElement(new t({ asset: "toast/toast_good", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }), this._MG_LAYER)), a.set_tint(10714665) } this._childSprites.push(this._maskSprite =
                        this._elementManager.addElement(new t({ asset: "spread/avocado_spread_good", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }), this._MG_LAYER))
            }
            this._childSprites.push(this._gridCheck = this._elementManager.addElement(new Nd({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }), this._MG_LAYER));
            this._addMask(this._maskSprite.rootSprite, 0, 0, 0, 0);
            this._totalShakeValue = this._lastShakeValue = this._shakeCount = 0;
            this._flagTweening = this._flagMouseDown = !1
        },
        _tweenPlattersIn: function() {},
        _tweenPlattersOut: function(a) {
            for (var b =
                    0; b < this._platters.length;) b != a && this._tween.tween({ target: this._platters[b], duration: 0.25, ease: v.linear }, { alpha: 0 }), b++
        },
        _addMask: function(a, b, c, d, e) { this._mask = new E;
            this._points = [0, 0, d, 0, d, e, 0, e];
            this._mask.get_graphics().fillPolygon(16711680, this._points);
            this._mask.setXY(b, c);
            a.owner.addChild((new aa).add(this._mask));
            a.set_mask(this._mask);
            a.set_maskEnabled(!0) },
        onInput: function(a, b) {
            if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    if (this._flagMouseDown = b) switch (this._updateInputPos(),
                        n.playSound("spread", 1, null, !0), this._gamePhase[1]) {
                        case 0:
                            for (var c = this._platters.length; 0 < c--;)
                                if (this._platters[c].contains(this._inputPos.x, this._inputPos.y)) { m.get_recipeIngredientOrder().push(this._platters[c].get_ingredientChoice().get_ingredientType()); switch (this._platters[c].get_ingredientChoice().get_ingredientType()[1]) {
                                        case 16:
                                            this._maskSprite.setAsset("spread/icing_good_pink"); break;
                                        case 15:
                                            this._maskSprite.setAsset("spread/icing_good_choc") } this._tweenPlattersOut(c);
                                    this._setGamePhase(kb.SPREAD_PHASE) } break;
                        case 1:
                            this._tutorialHand.set_alpha(0);
                            this._mask.get_graphics().fillCircle(16711680, this._inputPos.x, this._inputPos.y, this._STROKE_SIZE);
                            null != this._gridCheck && this._gridCheck.doGridCheck(this._inputPos.x, this._inputPos.y);
                            break;
                        case 2:
                            this._shakeHand(), this._flagMouseDown = !1
                    } else n.stopSound("spread");
                    break;
                case 10:
                    if (this._flagMouseDown) switch (this._updateInputPos(), this._gamePhase[1]) {
                        case 1:
                            this._mask.get_graphics().fillCircle(16711680, this._inputPos.x, this._inputPos.y, this._STROKE_SIZE);
                            null !=
                                this._gridCheck && this._gridCheck.doGridCheck(this._inputPos.x, this._inputPos.y);
                            break;
                        case 2:
                            z.$KH.$bG.get_supported()
                    }
            }
        },
        _checkMinigameWinOrLose: function() { switch (m.get_recipeID()[1]) {
                case 0:
                    switch (this._shakeCount) {
                        case 3:
                            this._gameResult = K.PERFECT; break;
                        case 1:
                        case 2:
                            this._gameResult = K.GOOD } ba.setInt("sprinkle_result", this._shakeCount); break;
                case 5:
                    var a = this._gridCheck.getSpreadPercentage();
                    100 <= a ? this._gameResult = K.PERFECT : 65 <= a && 100 > a && (this._gameResult = K.GOOD) } n.stopSound("spread");
            this._setMinigameResult(this._gameResult) },
        __class__: oc
    });
    var ub = h["world.minigames._MinigameToast.TOAST_PHASE"] = { __ename__: ["world", "minigames", "_MinigameToast", "TOAST_PHASE"], __constructs__: ["TOAST_START", "TOAST_DOWN", "TOAST_UP"] };
    ub.TOAST_START = ["TOAST_START", 0];
    ub.TOAST_START.toString = l;
    ub.TOAST_START.__enum__ = ub;
    ub.TOAST_DOWN = ["TOAST_DOWN", 1];
    ub.TOAST_DOWN.toString = l;
    ub.TOAST_DOWN.__enum__ = ub;
    ub.TOAST_UP = ["TOAST_UP", 2];
    ub.TOAST_UP.toString = l;
    ub.TOAST_UP.__enum__ = ub;
    var Xf = function(a, b, c) {
        this._OFFSET_Y = 150;
        this._BURN_TIME = 0.3;
        x.call(this,
            a, b, c)
    };
    h["world.minigames.MinigameToast"] = Xf;
    Xf.__name__ = ["world", "minigames", "MinigameToast"];
    Xf.__super__ = x;
    Xf.prototype = p(x.prototype, {
        dispose: function() { x.prototype.dispose.call(this);
            this._toastPhase = this._meter = this._bread = null },
        _setToastPhase: function(a) { this._toastPhase = a; switch (this._toastPhase[1]) {
                case 1:
                    this._tutorialHand.setTutorialType(R.SWIPE_DOWN); break;
                case 2:
                    this._tutorialHand.set_alpha(0) } },
        _onBeginMinigame: function() { x.prototype._onBeginMinigame.call(this);
            this._setToastPhase(ub.TOAST_DOWN) },
        update: function(a) {
            x.prototype.update.call(this, a);
            switch (this._state[1]) {
                case 2:
                    switch (this._toastPhase[1]) {
                        case 2:
                            !1 == this._flagPopToast && 0 < this._timerToast && (this._timerToast -= a, 0 >= this._timerToast && (this._timerToast = this._BURN_TIME, this._increaseToastCounter())) } 12 <= this._toastCount && 0 < this._timerToast && (this._timerToast -= a, 0 >= this._timerToast && (this._timerToast = 0.07, a = {
                        x: this._bread.x + S.randomFloat(0.5 * -this._bread.get_width() * this._bread.scaleX, 0.5 * this._bread.get_width() * this._bread.scaleY),
                        y: this._bread.y - 0.5 * this._bread.get_height() * this._bread.scaleY,
                        type: $.SMOKE
                    }, Ya.spawnParticle.dispatch(a)));
                    break;
                case 3:
                    this._gameResult == K.FAIL && 0 < this._timerToast && (this._timerToast -= a, 0 >= this._timerToast && (this._timerToast = 0.07, a = { x: this._bread.x + S.randomFloat(0.5 * -this._bread.get_width() * this._bread.scaleX, 0.5 * this._bread.get_width() * this._bread.scaleY), y: this._bread.y - 0.5 * this._bread.get_height() * this._bread.scaleY, type: $.SMOKE }, Ya.spawnParticle.dispatch(a)))
            }
        },
        _increaseToastCounter: function() {
            this._toastCount++;
            this._meter.updateBar(this._toastCount);
            switch (this._toastCount) {
                case 9:
                    this._tutorialHand.set_alpha(1);
                    this._tutorialHand.setTutorialType(R.SWIPE_UP);
                    this._bread.set_tint(10714665); break;
                case 12:
                    this._bread.setAsset("toast/toast_bad"), this._bread.set_tint(16777215), this._bread.render(null) }
        },
        _initWorld: function() {
            x.prototype._initWorld.call(this);
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "toast/toaster_back", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() - 147 }), this._MG_LAYER));
            this._childSprites.push(this._bread = this._elementManager.addElement(new t({ asset: "toast/toast_good", x: f.get_STAGE_CENTER_X() + 10, y: f.get_STAGE_CENTER_Y() - 50 - this._OFFSET_Y, scale: 0.4 }), this._MG_LAYER));
            this._childSprites.push(this._elementManager.addElement(new t({ asset: "toast/toaster", x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }), this._MG_LAYER));
            this._childSprites.push(this._meter = this._elementManager.addElement(new Bc({ x: f.get_STAGE_CENTER_X(), y: f.get_STAGE_CENTER_Y() }, this._tween, this._BURN_TIME,
                10), this._UI_LAYER));
            this._flagPopToast = !1;
            this._timerToast = this._BURN_TIME;
            this._toastCount = 0;
            this._tutorialHand.y = f.get_STAGE_CENTER_Y() - 150;
            this._setToastPhase(ub.TOAST_START)
        },
        onInput: function(a, b) { if (this._state == ja.GAMEPLAY && !this._pauseButtonCollisionCheck()) switch (a[1]) {
                case 0:
                    if (b) switch (this._toastPhase[1]) {
                        case 2:
                            !1 == this._flagPopToast && (this._flagPopToast = !0, this._popToast()) }
                    break;
                case 10:
                    if (b) switch (u.pointer.swipe[1]) {
                        case 4:
                            switch (this._toastPhase[1]) {
                                case 1:
                                    this._popToastDown() } } } },
        _popToastDown: function() { this._tween.tween({ target: this._bread, duration: 0.15, ease: v.outBack, complete: function() {} }, { y: this._bread.y + this._OFFSET_Y });
            this._setToastPhase(ub.TOAST_UP);
            n.playSound("toast_down") },
        _popToast: function() { var a = this;
            this._tutorialHand.set_alpha(0);
            this._meter.stopBar();
            this._tween.tween({ target: this._bread, duration: 0.15, ease: v.outBack, complete: function() { ka.start(G(a, a._checkMinigameWinOrLose), 0.5) } }, { y: this._bread.y - this._OFFSET_Y });
            n.playSound("toast_down") },
        _checkMinigameWinOrLose: function() {
            switch (this._toastCount) {
                case 7:
                case 8:
                    this._gameResult =
                        K.GOOD;
                    break;
                case 9:
                case 10:
                case 11:
                    this._gameResult = K.PERFECT;
                    break;
                default:
                    this._bread.setAsset("toast/toast_bad"), this._gameResult = K.FAIL
            }
            this._meter.stopBar();
            this._setMinigameResult(this._gameResult)
        },
        __class__: Xf
    });
    var Kd = function(a) {
        fa.call(this, a);
        this._perfectSpots = [];
        this._goodSpots = [];
        a = -75;
        for (var b = 0; 3 > b;) this._goodSpots.push(this.addChild(new Dc({ asset: "minigame_universal/good_spot", y: a, alpha: 0 }))), this._perfectSpots.push(this.addChild(new Dc({
            asset: "minigame_universal/perfect_spot",
            y: a,
            alpha: 0
        }))), a += 75, b++
    };
    h["world.minigames.chop.ElementChopLine"] = Kd;
    Kd.__name__ = ["world", "minigames", "chop", "ElementChopLine"];
    Kd.__super__ = t;
    Kd.prototype = p(t.prototype, {
        dispose: function() { t.prototype.dispose.call(this);
            this._goodSpots = this._perfectSpots = null },
        setPosition: function(a, b, c) { this.set_alpha(1);
            this.x = a;
            this.y = b;
            this.set_rotation(c) },
        resetSpots: function() {
            for (var a = this._goodSpots.length; 0 < a--;) this._goodSpots[a].set_tint(16777215), this._goodSpots[a].set_flagContainsPoint(!1), this._perfectSpots[a].set_tint(16777215),
                this._perfectSpots[a].set_flagContainsPoint(!1)
        },
        getNumberOfGoodSpotsHit: function() { for (var a = 0, b = this._goodSpots.length; 0 < b--;) this._goodSpots[b].get_flagContainsPoint() && a++; return a },
        getNumberOfPerfectSpotsHit: function() { for (var a = 0, b = this._perfectSpots.length; 0 < b--;) this._perfectSpots[b].get_flagContainsPoint() && a++; return a },
        beginCheck: function(a, b, c, d) {
            for (var e = Math.PI / 180 * this.rotation, f = this._goodSpots.length; 0 < f--;) {
                var g = this._goodSpots[f].x - this._goodSpots[1].x,
                    h = this._goodSpots[f].y -
                    this._goodSpots[1].x,
                    l = g * Math.cos(e) - h * Math.sin(e),
                    g = g * Math.sin(e) + h * Math.cos(e);
                this._checkLineCollisionBetweenPoints(a, b, c, d, l + this.x, g + this.y, 25) ? (this._goodSpots[f].set_tint(16711680), this._goodSpots[f].set_flagContainsPoint(!0)) : (this._goodSpots[f].set_tint(16777215), this._goodSpots[f].set_flagContainsPoint(!1))
            }
            for (f = this._perfectSpots.length; 0 < f--;) g = this._perfectSpots[f].x - this._perfectSpots[1].x, h = this._perfectSpots[f].y - this._perfectSpots[1].y, l = g * Math.cos(e) - h * Math.sin(e), g = g * Math.sin(e) +
                h * Math.cos(e), this._checkLineCollisionBetweenPoints(a, b, c, d, l + this.x, g + this.y, 12) ? (this._perfectSpots[f].set_tint(16711680), this._perfectSpots[f].set_flagContainsPoint(!0)) : (this._perfectSpots[f].set_tint(16777215), this._perfectSpots[f].set_flagContainsPoint(!1))
        },
        _checkLineCollisionBetweenPoints: function(a, b, c, d, e, f, g) {
            a -= e;
            b -= f;
            c -= e;
            f = d - f;
            d = 2 * (a * (c - a) + b * (f - b));
            f = (c - a) * (c - a) + (f - b) * (f - b);
            g = d * d - 4 * f * (a * a + b * b - g * g);
            if (0 >= g) return !1;
            a = Math.sqrt(g);
            g = (-d + a) / (2 * f);
            a = (-d - a) / (2 * f);
            return 0 < g && 1 > g || 0 < a && 1 >
                a ? !0 : !1
        },
        __class__: Kd
    });
    var Oa = function(a, b) { fa.call(this, a);
        this.set_ingredientType(b) };
    h["world.minigames.chop.ElementChopObject"] = Oa;
    Oa.__name__ = ["world", "minigames", "chop", "ElementChopObject"];
    Oa.__super__ = t;
    Oa.prototype = p(t.prototype, {
        get_ingredientType: function() { return this.ingredientType },
        set_ingredientType: function(a) { return this.ingredientType = a },
        update: function(a) { t.prototype.update.call(this, a) },
        __class__: Oa,
        __properties__: p(t.prototype.__properties__, {
            set_ingredientType: "set_ingredientType",
            get_ingredientType: "get_ingredientType"
        })
    });
    var Jd = function(a) { Ga.call(this, a);
        this._flagMouseDown = !1 };
    h["world.minigames.chop.ElementDrawLine"] = Jd;
    Jd.__name__ = ["world", "minigames", "chop", "ElementDrawLine"];
    Jd.__super__ = Ga;
    Jd.prototype = p(Ga.prototype, {
        dispose: function() { Ga.prototype.dispose.call(this) },
        onInput: function(a, b, c, d) {
            switch (a[1]) {
                case 0:
                    (this._flagMouseDown = b) ? (this.x = c, this.y = d, this.set_alpha(1)) : (this.set_alpha(0), this.set_sizeX(0));
                    break;
                case 10:
                    this._flagMouseDown && (a = 180 * Math.atan2(d -
                        this.y, c - this.x) / Math.PI, this.set_rotation(a), this.set_sizeX(this._getDistance(c, d, this.x, this.y)))
            }
        },
        _getDistance: function(a, b, c, d) { a = Math.abs(a - c);
            b = Math.abs(b - d);
            d = Math.min(a, b); return b = 1.4142135623730951 * d + (a - d + (b - d)) },
        __class__: Jd
    });
    var N = function(a) { fa.call(this, a) };
    h["world.minigames.universal.ElementMinigame"] = N;
    N.__name__ = ["world", "minigames", "universal", "ElementMinigame"];
    N.__super__ = t;
    N.prototype = p(t.prototype, {
        contains: function(a, b) {
            return this.x - this.get_width() / 2 < a && this.x + this.get_width() /
                2 > a && this.y - this.get_height() * this.originY < b && this.y + this.get_height() * this.originY > b ? !0 : !1
        },
        update: function(a) { t.prototype.update.call(this, a) },
        __class__: N
    });
    var Dc = function(a) { fa.call(this, a);
        this.set_flagContainsPoint(!1) };
    h["world.minigames.chop.ElementHitSpot"] = Dc;
    Dc.__name__ = ["world", "minigames", "chop", "ElementHitSpot"];
    Dc.__super__ = N;
    Dc.prototype = p(N.prototype, {
        get_flagContainsPoint: function() { return this.flagContainsPoint },
        set_flagContainsPoint: function(a) { return this.flagContainsPoint = a },
        __class__: Dc,
        __properties__: p(N.prototype.__properties__, { set_flagContainsPoint: "set_flagContainsPoint", get_flagContainsPoint: "get_flagContainsPoint" })
    });
    var vb = h["world.minigames.judge.JUDGE_TYPE"] = { __ename__: ["world", "minigames", "judge", "JUDGE_TYPE"], __constructs__: ["KRABS", "SCHWOZ", "DOUBLE_G"] };
    vb.KRABS = ["KRABS", 0];
    vb.KRABS.toString = l;
    vb.KRABS.__enum__ = vb;
    vb.SCHWOZ = ["SCHWOZ", 1];
    vb.SCHWOZ.toString = l;
    vb.SCHWOZ.__enum__ = vb;
    vb.DOUBLE_G = ["DOUBLE_G", 2];
    vb.DOUBLE_G.toString = l;
    vb.DOUBLE_G.__enum__ = vb;
    var pa = function(a, b, c) {
        fa.call(this, a);
        this._theta = Math.random() * Math.PI * 2;
        this._frequency = 1.5;
        this._magnitude = 0.015;
        this._scaleAnchor = 0.9;
        this._scaleBreathing = 1;
        this._judgeScore = b;
        switch (c) {
            case 0:
                this._judgeType = vb.SCHWOZ;
                this._addSchwoz(b); break;
            case 1:
                this._judgeType = vb.KRABS;
                this._addMrKrabs(b); break;
            case 2:
                this._judgeType = vb.DOUBLE_G, this._addDoubleG(b) } this._character = this.addChild(new t({ asset: this._assetName, x: this._charX, y: this._charY, originX: 0, originY: 1 }));
        this._silhouette = new t({
            asset: this._assetName,
            x: this._charX,
            y: this._charY,
            originX: 0,
            originY: 1
        });
        this._silhouette.set_tint(0);
        this.addChild(this._silhouette);
        this._scoreText = this.addChild(new Na({ text: "gameplay.score", align: ea.Center, x: this._scoreX, y: this._scoreY, alpha: 0 }));
        this._scoreText.setVariables([b])
    };
    h["world.minigames.judge.ElementJudge"] = pa;
    pa.__name__ = ["world", "minigames", "judge", "ElementJudge"];
    pa.__super__ = t;
    pa.prototype = p(t.prototype, {
        dispose: function() {
            t.prototype.dispose.call(this);
            this._scoreText = this._assetName = this._character =
                null
        },
        _addMrKrabs: function(a) { this._assetCharacter = "judges/krabs";
            this._assetName = this._assetCharacter + "_idle";
            this._charX = pa._KRABS_X;
            this._charY = pa._KRABS_Y;
            this._scoreX = pa._KRABS_SCORE_X;
            this._scoreY = pa._KRABS_SCORE_Y; switch (this._judgeScore) {
                case 4:
                case 5:
                case 6:
                    this._scoreX += 15; break;
                case 9:
                case 10:
                    this._scoreX += 15 } },
        _addDoubleG: function(a) {
            this._assetCharacter = "judges/doubleg";
            this._assetName = this._assetCharacter + "_idle";
            this._charX = pa._DOUBLE_X;
            this._charY = pa._DOUBLE_Y;
            this._scoreX = pa._DOUBLE_SCORE_X;
            this._scoreY = pa._DOUBLE_SCORE_Y;
            switch (this._judgeScore) {
                case 4:
                case 5:
                case 6:
                    this._scoreX += 80; break;
                case 7:
                case 8:
                    this._scoreX += 10; break;
                case 9:
                case 10:
                    this._scoreX += 113, this._scoreY += 3 }
        },
        _addSchwoz: function(a) {
            this._assetCharacter = "judges/schwoz";
            this._assetName = this._assetCharacter + "_idle";
            this._charX = pa._SCHWOZ_X;
            this._charY = pa._SCHWOZ_Y;
            this._scoreX = pa._SCHWOZ_SCORE_X;
            this._scoreY = pa._SCHWOZ_SCORE_Y;
            switch (this._judgeScore) {
                case 4:
                case 5:
                case 6:
                    this._scoreX += 70;
                    break;
                case 9:
                case 10:
                    this._scoreX +=
                        80
            }
        },
        showFinalScore: function(a) { var b = this;
            a.tween({ target: this._silhouette, duration: 0.5, ease: v.inOutQuad }, { alpha: 0 });
            a.tween({ target: this, duration: 0.5, ease: v.inOutQuad }, { _scaleAnchor: 1 });
            a.tween({ target: this, duration: 0.5, ease: v.inOutQuad, complete: function() { b._showCharacterReaction();
                    b._character.render(null);
                    b._scoreText.set_alpha(1);
                    n.playSound("judge_reveal_score", 1);
                    ba.getBool("enable_vo") && n.playSound(b._getJudgeVO(), 0.8) } }, {}) },
        _showCharacterReaction: function() {
            this._assetName = 3 >= this._judgeScore ?
                this._assetCharacter + "_bad" : 6 >= this._judgeScore ? this._assetCharacter + "_meh" : 8 >= this._judgeScore ? this._assetCharacter + "_good" : this._assetCharacter + "_perfect";
            this._character.setAsset(this._assetName);
            if (3 >= this._judgeScore) switch (this._judgeType[1]) {
                case 0:
                    this.x += 5; break;
                case 1:
                    this.x += 5; break;
                case 2:
                    this.x += 25 } this.render(null)
        },
        update: function(a) {
            t.prototype.update.call(this, a);
            this.scaleY = this._scaleAnchor * this._scaleBreathing;
            this.scaleX = this._scaleAnchor;
            this._theta += a * this._frequency;
            this._theta >=
                2 * Math.PI && (this._theta = 0);
            this._scaleBreathing = 1 + this._magnitude * Math.sin(this._theta)
        },
        _getJudgeVO: function() {
            switch (this._judgeType[1]) {
                case 0:
                    switch (this._judgeScore) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            return "judge_vo/krabs_bad";
                        case 4:
                        case 5:
                        case 6:
                            return "judge_vo/krabs_bad2";
                        case 7:
                        case 8:
                            return 0 == S.randomInt(0, 1) ? "judge_vo/krabs_good" : "judge_vo/krabs_good2";
                        case 9:
                        case 10:
                            return "judge_vo/krabs_perfect" }
                    break;
                case 1:
                    switch (this._judgeScore) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            return "judge_vo/schwoz_bad";
                        case 4:
                        case 5:
                        case 6:
                            return "judge_vo/schwoz_okay";
                        case 7:
                        case 8:
                            return "judge_vo/schwoz_good";
                        case 9:
                        case 10:
                            return "judge_vo/schwoz_perfect"
                    }
                    break;
                case 2:
                    switch (this._judgeScore) {
                        case 0:
                        case 1:
                        case 2:
                        case 3:
                            return "judge_vo/double_g_bad";
                        case 4:
                        case 5:
                        case 6:
                            return "judge_vo/double_g_bad";
                        case 7:
                        case 8:
                            return "judge_vo/double_g_good";
                        case 9:
                        case 10:
                            return "judge_vo/double_g_perfect" }
            }
            return ""
        },
        __class__: pa
    });
    var dc = function(a, b) {
        fa.call(this, a);
        this.set_ingredientType(b);
        this.set_isLocked(!1);
        switch ((null ==
            m.get_minigameResults()[1] ? K.PERFECT : m.get_minigameResults()[1])[1]) {
            case 2:
                switch (this.get_ingredientType()[1]) {
                    case 18:
                        this.setAsset("mix/apple2_back_bad"); break;
                    case 17:
                        this.setAsset("chop/strawberry_front_bad") } break;
            default:
                switch (this.get_ingredientType()[1]) {
                    case 18:
                        this.setAsset("mix/apple2_back"); break;
                    case 17:
                        this.setAsset("chop/strawberry_front") } }
    };
    h["world.minigames.mix.ElementFruit"] = dc;
    dc.__name__ = ["world", "minigames", "mix", "ElementFruit"];
    dc.__super__ = N;
    dc.prototype = p(N.prototype, {
        get_ingredientType: function() { return this.ingredientType },
        set_ingredientType: function(a) { return this.ingredientType = a },
        get_isLocked: function() { return this.isLocked },
        set_isLocked: function(a) { return this.isLocked = a },
        depth: function() { return this.y + this.get_height() / 2 },
        update: function(a) { N.prototype.update.call(this, a) },
        placeInBowl: function() {
            this.set_rotation(0);
            this.set_isLocked(!0);
            switch ((null == m.get_minigameResults()[1] ? K.PERFECT : m.get_minigameResults()[1])[1]) {
                case 2:
                    switch (this.get_ingredientType()[1]) {
                        case 18:
                            this.setAsset("mix/apple2_back_bad_bowl");
                            break;
                        case 17:
                            this.setAsset("mix/strawberry_back_bad")
                    }
                    break;
                default:
                    switch (this.get_ingredientType()[1]) {
                        case 18:
                            this.setAsset("mix/apple2_back_bowl"); break;
                        case 17:
                            this.setAsset("mix/strawberry_front_bowl") }
            }
        },
        __class__: dc,
        __properties__: p(N.prototype.__properties__, { set_isLocked: "set_isLocked", get_isLocked: "get_isLocked", set_ingredientType: "set_ingredientType", get_ingredientType: "get_ingredientType" })
    });
    var hg = function(a) {
        this._GRAVITY_CAP = 1020;
        this._FLOOR_CAP = 565;
        this._INIT_VEL_Y = 450;
        fa.call(this,
            a);
        this._startPosY = this.y;
        this._bobSin = 0;
        this._bobRate = 8;
        this._bobOffset = 5;
        this._velocityX = 0;
        this._velocityY = this._INIT_VEL_Y;
        this._gravity = 980;
        this.set_enableGravity(!1);
        this.set_isLocked(!0)
    };
    h["world.minigames.pit.ElementPit"] = hg;
    hg.__name__ = ["world", "minigames", "pit", "ElementPit"];
    hg.__super__ = N;
    hg.prototype = p(N.prototype, {
        get_enableGravity: function() { return this.enableGravity },
        set_enableGravity: function(a) { return this.enableGravity = a },
        get_isLocked: function() { return this.isLocked },
        set_isLocked: function(a) {
            return this.isLocked =
                a
        },
        dispose: function() { N.prototype.dispose.call(this) },
        update: function(a) {
            N.prototype.update.call(this, a);
            if (this.get_enableGravity()) this._velocityY += this._gravity * a, this._velocityY > this._GRAVITY_CAP && (this._velocityY = this._GRAVITY_CAP), this.x += this._velocityX * a, this.y += this._velocityY * a, this.y + 40 > f.get_STAGE_CENTER_Y() + 225 - 101.5 && (this.x > f.get_STAGE_CENTER_X() + 265 - 212 - 55 && this.x < f.get_STAGE_CENTER_X() + 265 - 212 + 55 || this.x > f.get_STAGE_CENTER_X() + 265 + 212 - 55 && this.x < f.get_STAGE_CENTER_X() + 265 + 212 + 55) &&
                (this.x > f.get_STAGE_CENTER_X() + 265 ? this._velocityX = -100 : this._velocityX = 100, this._velocityY *= -0.5, this.y = f.get_STAGE_CENTER_Y() + 225 - 101.5 - 40), this.y >= this._FLOOR_CAP && (this.y = this._FLOOR_CAP, this._velocityX = 0, this.set_enableGravity(!1), this.x > f.get_STAGE_CENTER_X() + 265 - 212 && this.x < f.get_STAGE_CENTER_X() + 265 + 212 ? x.endMinigameEarly.dispatch(null) : x.endMinigameEarly.dispatch(!1));
            else if (this.get_isLocked()) switch (m.get_recipeID()[1]) {
                case 2:
                    this._bobSin += a * this._bobRate, this.y = this._startPosY - Math.sin(this._bobSin) *
                        this._bobOffset
            }
        },
        setPosition: function(a, b) { this._velocityX = 0;
            this._velocityY = this._INIT_VEL_Y;
            this.x = a;
            this.y = b },
        __class__: hg,
        __properties__: p(N.prototype.__properties__, { set_isLocked: "set_isLocked", get_isLocked: "get_isLocked", set_enableGravity: "set_enableGravity", get_enableGravity: "get_enableGravity" })
    });
    var ig = function(a) {
        fa.call(this, a);
        this._perfectSpots = [];
        this._goodSpots = [];
        this._spotPositionsX = [];
        this._spotPositionsY = [];
        switch (m.get_recipeID()[1]) {
            case 4:
            case 5:
                this._initRecipe1Spots(), this._traceLineRemaining =
                    this.addChild(new t({ asset: "avocado_line_red", rotation: 0 })), this._traceLine = this.addChild(new t({ asset: "avocado_line", rotation: 0 })), this._addMask(this._traceLine.get_sprite()), this._clearMask(this._traceLine.get_sprite())
        }
    };
    h["world.minigames.pit.ElementPitObject"] = ig;
    ig.__name__ = ["world", "minigames", "pit", "ElementPitObject"];
    ig.__super__ = t;
    ig.prototype = p(t.prototype, {
        get_spotPositionsX: function() { return this._spotPositionsX },
        get_spotPositionsY: function() { return this._spotPositionsY },
        dispose: function() {
            t.prototype.dispose.call(this);
            this._spotPositionsY = this._spotPositionsX = this._traceLine = this._goodSpots = this._perfectSpots = null
        },
        _initRecipe1Spots: function() {
            for (var a = [0, -65.25, -98.5, -85, 0, 85, 98.5, 65.25], b = [-121, -70, 0, 75, 121, 75, 0, -70], c = 0; c < a.length;) this._goodSpots.push(this.addChild(new Dc({ asset: "minigame_universal/good_spot", x: a[c], y: b[c], alpha: 0 }))), this._perfectSpots.push(this.addChild(new Dc({ asset: "minigame_universal/perfect_spot", x: a[c], y: b[c], alpha: 0 }))), this._spotPositionsX.push(a[c]), this._spotPositionsY.push(b[c]),
                c++
        },
        checkGameResult: function() { return this._getNumberOfPerfectSpotsHit() >= this._spotPositionsX.length ? K.PERFECT : this._getNumberOfGoodSpotsHit() >= this._spotPositionsX.length ? K.GOOD : K.FAIL },
        _getNumberOfGoodSpotsHit: function() { for (var a = 0, b = this._goodSpots.length; 0 < b--;) this._goodSpots[b].get_flagContainsPoint() && a++; return a },
        _getNumberOfPerfectSpotsHit: function() { for (var a = 0, b = this._perfectSpots.length; 0 < b--;) this._perfectSpots[b].get_flagContainsPoint() && a++; return a },
        beginCheck: function(a, b) {
            for (var c =
                    this._goodSpots.length; 0 < c--;) this._goodSpots[c].contains(a - this.x, b - this.y) && !this._goodSpots[c].get_flagContainsPoint() && (this._goodSpots[c].set_tint(16711680), this._goodSpots[c].set_flagContainsPoint(!0), n.playSound("pit_skin"), this._updateTraceLine(a - this.x, b - this.y), null), this._perfectSpots[c].contains(a - this.x, b - this.y) && !this._perfectSpots[c].get_flagContainsPoint() && (this._perfectSpots[c].set_tint(16711680), this._perfectSpots[c].set_flagContainsPoint(!0))
        },
        _updateTraceLine: function(a, b) {
            switch (m.get_recipeID()[1]) {
                case 4:
                case 5:
                    this._maskCircle(this._traceLine.get_sprite(),
                        a, b, 65)
            }
        },
        removeTraceLine: function(a) { a.tween({ target: this._traceLine, duration: 0.25, ease: v.outQuad }, { alpha: 0 });
            a.tween({ target: this._traceLineRemaining, duration: 0.25, ease: v.outQuad }, { alpha: 0 }) },
        resetSpots: function() { for (var a = this._goodSpots.length; 0 < a--;) this._goodSpots[a].set_tint(16777215), this._goodSpots[a].set_flagContainsPoint(!1), this._perfectSpots[a].set_tint(16777215), this._perfectSpots[a].set_flagContainsPoint(!1); switch (m.get_recipeID()[1]) {
                case 4:
                case 5:
                    this._clearMask(this._traceLine.get_sprite()) } },
        _spawnParticles: function(a, b, c) { switch (m.get_recipeID()[1]) {
                case 4:
                case 5:
                    for (var d = 0; d < c;) d++, Ya.spawnParticle.dispatch({ x: a, y: b, type: $.AVOCADO }) } },
        _addMask: function(a) { var b = new E;
            b.setXY(a.x.$tG, a.y.$tG);
            a.owner.parent.addChild((new aa).add(b));
            a.set_mask(b);
            a.set_maskEnabled(!0) },
        _clearMask: function(a) { a.get_mask().get_graphics().clear() },
        _maskPolygon: function(a, b) { a.get_mask().get_graphics().fillPolygon(16711680, b);
            a.set_maskEnabled(!0) },
        _maskCircle: function(a, b, c, d) {
            a.get_mask().get_graphics().fillCircle(16711680,
                b, c, d);
            a.set_maskEnabled(!0)
        },
        _maskSprite: function(a, b) { a.get_mask().get_graphics().drawTexture(b.texture, 0, 0) },
        __class__: ig,
        __properties__: p(t.prototype.__properties__, { get_spotPositionsY: "get_spotPositionsY", get_spotPositionsX: "get_spotPositionsX" })
    });
    var jg = function(a, b, c, d) {
        fa.call(this, a);
        switch (m.get_recipeID()[1]) {
            case 1:
                this._maxScaleX = 1.4;
                this._maxScaleY = 0.65;
                this.setAsset("pound/raw1");
                break;
            case 0:
                this._maxScaleX = 1.2;
                this._maxScaleY = 0.7;
                this.setAsset("pound/doughball1");
                break;
            case 3:
                this._maxScaleX =
                    1.2;
                this._maxScaleY = 0.7;
                this.setAsset("pound/sponge_doughball1");
                break;
            case 7:
                this._maxScaleX = 1.1, this._maxScaleY = 0.8, this.setAsset("pound/nuts1")
        }
        this._goodMin = b;
        this._perfectMin = c;
        this._badMin = d;
        this._currentScaleX = this.scaleX;
        this._currentScaleY = this.scaleY;
        this._tweenTime = this._angle = 0
    };
    h["world.minigames.pound.ElementPound"] = jg;
    jg.__name__ = ["world", "minigames", "pound", "ElementPound"];
    jg.__super__ = N;
    jg.prototype = p(N.prototype, {
        contains: function(a, b) {
            return this.x - this.get_width() / 2 < a && this.x +
                this.get_width() / 2 > a && this.y - this.get_height() < b && this.y > b ? !0 : !1
        },
        update: function(a) { N.prototype.update.call(this, a);
            0 < this._tweenTime && (this._tweenTime -= a, this._angle += 12 * a, this._angle > 2 * Math.PI && (this._angle -= 2 * Math.PI), this.scaleX = 1 + 0.1 * Math.cos(this._angle), this.scaleY = 1 + 0.1 * Math.sin(this._angle)) },
        doPoundAnimation: function(a, b) {
            var c = this;
            switch (m.get_recipeID()[1]) {
                case 1:
                    a == Math.round(this._perfectMin / 2) ? (this.setAsset("pound/raw2"), this._resetScale()) : a == this._badMin ? (this.setAsset("pound/raw3_bad"),
                        this._resetScale()) : a == this._goodMin ? (this.setAsset("pound/raw3_good"), this._resetScale()) : a == this._perfectMin && (this.setAsset("pound/raw3_perfect"), this._resetScale());
                    break;
                case 0:
                    a == Math.round(this._perfectMin / 2) ? (this.setAsset("pound/doughball2"), this._resetScale()) : a == this._badMin ? (this.setAsset("pound/doughball_bad"), this._resetScale()) : a == this._goodMin ? (this.setAsset("pound/doughball_good"), this._resetScale()) : a == this._perfectMin && (this.setAsset("pound/doughball_perfect"), this._resetScale());
                    break;
                case 3:
                    a == Math.round(this._perfectMin / 2) ? (this.setAsset("pound/sponge_doughball2"), this._resetScale()) : a == this._badMin ? (this.setAsset("pound/sponge_doughball_fail"), this._resetScale()) : a == this._goodMin ? (this.setAsset("pound/sponge_doughball_good"), this._resetScale()) : a == this._perfectMin && (this.setAsset("pound/sponge_doughball_good"), this._resetScale());
                    break;
                case 7:
                    a == Math.round(this._perfectMin / 2) ? (this.setAsset("pound/nuts2"), this._resetScale()) : a == this._badMin ? (this.setAsset("pound/nuts3_fail"),
                        this._resetScale()) : a == this._goodMin ? (this.setAsset("pound/nuts2"), this._resetScale()) : a == this._perfectMin && (this.setAsset("pound/nuts3_perfect"), this._resetScale())
            }
            this._currentScaleX += 0.025;
            this._currentScaleY -= 0.05;
            this._currentScaleX >= this._maxScaleX && (this._currentScaleX = this._maxScaleX);
            this._currentScaleY <= this._maxScaleY && (this._currentScaleY = this._maxScaleY);
            b.stop(this);
            b.tween({
                target: this,
                duration: 0.1,
                ease: v.inOutQuad,
                complete: function() {
                    b.tween({ target: c, duration: 0.1, ease: v.inOutQuad }, { scaleX: c._currentScaleX, scaleY: c._currentScaleY })
                }
            }, { scaleX: this._currentScaleX + 0.1, scaleY: this._currentScaleY - 0.1 })
        },
        _resetScale: function() { this.scaleY = this.scaleX = this._currentScaleY = this._currentScaleX = 1;
            this.render(null) },
        __class__: jg
    });
    var Od = function(a, b) { fa.call(this, a);
        this.set_ingredientChoice(this.addChild(new db({ x: 0, y: -290, originY: 1, alpha: 0 }, m.getMinigameIngredientList(b)[0][0]))) };
    h["world.minigames.prep.ElementChoicePlatter"] = Od;
    Od.__name__ = ["world", "minigames", "prep", "ElementChoicePlatter"];
    Od.__super__ = N;
    Od.prototype = p(N.prototype, {
        get_ingredientChoice: function() { return this.ingredientChoice },
        set_ingredientChoice: function(a) { return this.ingredientChoice = a },
        contains: function(a, b) { return this.x - this.get_width() * Math.abs(this.get_scale()) / 2 < a && this.x + this.get_width() * Math.abs(this.get_scale()) / 2 > a && this.y - this.get_height() * Math.abs(this.get_scale()) * this.originY < b && this.y + this.get_height() * Math.abs(this.get_scale()) * this.originY > b ? !0 : !1 },
        update: function(a) {
            N.prototype.update.call(this,
                a)
        },
        __class__: Od,
        __properties__: p(N.prototype.__properties__, { set_ingredientChoice: "set_ingredientChoice", get_ingredientChoice: "get_ingredientChoice" })
    });
    var db = function(a, b) { fa.call(this, a);
        this.set_ingredientType(b) };
    h["world.minigames.universal.ElementIngredient"] = db;
    db.__name__ = ["world", "minigames", "universal", "ElementIngredient"];
    db.__super__ = N;
    db.prototype = p(N.prototype, {
        get_ingredientType: function() { return this.ingredientType },
        set_ingredientType: function(a) {
            var b;
            b = null == m.get_minigameResults()[m.get_minigameResults().length -
                1] ? K.PERFECT : m.get_minigameResults()[m.get_minigameResults().length - 1];
            switch (m.get_recipeID()[1]) {
                case 1:
                case 0:
                    break;
                default:
                    b = K.PERFECT }
            switch (b[1]) {
                case 2:
                    switch (a[1]) {
                        case 4:
                            this.setAsset("prep/pickle bad"); break;
                        case 2:
                            this.setAsset("prep/lettuce"); break;
                        case 5:
                            this.setAsset("prep/tomato_bad"); break;
                        case 3:
                            this.setAsset("prep/onion_bad"); break;
                        case 15:
                            this.setAsset("spread/icing_bad_choc"); break;
                        case 16:
                            this.setAsset("spread/icing_bad_pink") }
                    break;
                case 0:
                case 1:
                    switch (a[1]) {
                        case 4:
                            this.setAsset("prep/pickle");
                            break;
                        case 2:
                            this.setAsset("prep/lettuce");
                            break;
                        case 5:
                            this.setAsset("prep/tomato");
                            break;
                        case 3:
                            this.setAsset("prep/onion");
                            break;
                        case 15:
                            this.setAsset("spread/icing_good_choc");
                            break;
                        case 16:
                            this.setAsset("spread/icing_good_pink")
                    }
            }
            switch (a[1]) {
                case 22:
                    this.setAsset("prep/ham");
                    break;
                case 23:
                    this.setAsset("prep/turkey");
                    break;
                case 21:
                    this.setAsset("prep/beef");
                    break;
                case 1:
                    this.setAsset("prep/cheese");
                    break;
                case 0:
                    this.setAsset("prep/bun_top");
                    break;
                case 8:
                    this.setAsset("prep/tuna_slice");
                    break;
                case 9:
                    this.setAsset("prep/salmon_slice");
                    break;
                case 7:
                    this.setAsset("prep/egg_slice");
                    break;
                case 6:
                    this.setAsset("prep/avocado_slice");
                    break;
                case 11:
                    this.setAsset("prep/wasabi");
                    break;
                case 10:
                    this.setAsset("prep/roe")
            }
            this.render(null);
            return this.ingredientType = a
        },
        update: function(a) { N.prototype.update.call(this, a) },
        __class__: db,
        __properties__: p(N.prototype.__properties__, { set_ingredientType: "set_ingredientType", get_ingredientType: "get_ingredientType" })
    });
    var Ia = function(a, b, c) {
        db.call(this, a, b);
        this.set_isLocked(!1);
        this.set_index(c)
    };
    h["world.minigames.prep.ElementPrepIngredient"] = Ia;
    Ia.__name__ = ["world", "minigames", "prep", "ElementPrepIngredient"];
    Ia.__super__ = db;
    Ia.prototype = p(db.prototype, {
        get_isLocked: function() { return this.isLocked },
        set_isLocked: function(a) { a ? this.set_alpha(0) : this.set_alpha(1); return this.isLocked = a },
        get_index: function() { return this.index },
        set_index: function(a) { return this.index = a },
        get_currentLayer: function() { return this.currentLayer },
        set_currentLayer: function(a) {
            return this.currentLayer =
                a
        },
        update: function(a) { db.prototype.update.call(this, a) },
        __class__: Ia,
        __properties__: p(db.prototype.__properties__, { set_currentLayer: "set_currentLayer", get_currentLayer: "get_currentLayer", set_index: "set_index", get_index: "get_index", set_isLocked: "set_isLocked", get_isLocked: "get_isLocked" })
    });
    var Nd = function(a) { this._SHOW_GRID = 0;
        fa.call(this, a);
        this._gridSpaces = []; switch (m.get_recipeID()[1]) {
            case 0:
                this._addDonutGrid(); break;
            case 5:
                this._addAvocadoGrid(); break;
            case 8:
                this._addSteakGrid() } };
    h["world.minigames.spread.ElementSpreadGridCheck"] =
        Nd;
    Nd.__name__ = ["world", "minigames", "spread", "ElementSpreadGridCheck"];
    Nd.__super__ = t;
    Nd.prototype = p(t.prototype, {
        get_gridSpaces: function() { return this._gridSpaces },
        dispose: function() { t.prototype.dispose.call(this);
            this._gridSpaces = null },
        _addDonutGrid: function() { for (var a = 0, b = 0, c = -100, d = 10; 3 > b;) { for (; 5 > a;) 2 == a && 1 == b || this._gridSpaces.push(this.addChild(new bd({ color: 16711680, width: 50, height: 50, x: c, y: d, alpha: this._SHOW_GRID }))), c += 50, a++;
                a = 0;
                c = -100;
                d += 50;
                b++ } },
        _addAvocadoGrid: function() {
            for (var a =
                    0, b = 0, c = -150, d = -160; 6 > a;) { for (; 5 > b;) this._gridSpaces.push(this.addChild(new bd({ color: 16711680, width: 75, height: 65, x: c, y: d, alpha: this._SHOW_GRID }))), b++, c += 75;
                b = 0;
                c = -150;
                d += 65;
                a++ }
        },
        _addSteakGrid: function() { for (var a = 0, b = 0, c = -100, d = -75; 4 > a;) { for (; 4 > b;) this._gridSpaces.push(this.addChild(new bd({ color: 16711680, width: 65, height: 65, x: c, y: d, alpha: this._SHOW_GRID }))), d += 65, b++;
                b = 0;
                d = -75;
                c += 65;
                a++ } },
        doGridCheck: function(a, b, c) {
            null == c && (c = 25);
            for (var d = this._gridSpaces.length; 0 < d--;) this._gridSpaces[d].aabbCollision(a -
                this.x, b - this.y, c, c) && !1 == this._gridSpaces[d].get_isCovered() && (this._gridSpaces[d].set_color(65280), this._gridSpaces[d].set_isCovered(!0), n.playSound("pit_skin_off"));
            a = 0;
            for (d = this._gridSpaces.length; 0 < d--;) this._gridSpaces[d].get_isCovered() && a++;
            if (100 <= this.getSpreadPercentage()) switch (m.get_recipeID()[1]) {
                case 0:
                    oc.sprinklePhase.dispatch(); break;
                case 5:
                case 3:
                case 8:
                    x.endMinigameEarly.dispatch(null) }
        },
        getSpreadPercentage: function() {
            for (var a = this._gridSpaces.length, b = 0, c = this._gridSpaces.length; 0 <
                c--;) this._gridSpaces[c].get_isCovered() && b++;
            return b / a * 100
        },
        __class__: Nd,
        __properties__: p(t.prototype.__properties__, { get_gridSpaces: "get_gridSpaces" })
    });
    var bd = function(a) { Ga.call(this, a);
        this.set_isCovered(!1) };
    h["world.minigames.spread.ElementSpreadGridSpace"] = bd;
    bd.__name__ = ["world", "minigames", "spread", "ElementSpreadGridSpace"];
    bd.__super__ = Ga;
    bd.prototype = p(Ga.prototype, {
        get_isCovered: function() { return this.isCovered },
        set_isCovered: function(a) { return this.isCovered = a },
        contains: function(a,
            b) { return this.x - this.sizeX / 2 < a && this.x + this.sizeX / 2 > a && this.y - this.sizeY / 2 < b && this.y + this.sizeY / 2 > b ? (this.set_color(65280), this.set_isCovered(!0), !0) : !1 },
        aabbCollision: function(a, b, c, d) { if (b + d / 2 > this.y - this.sizeY / 2 && b + d / 2 < this.y + this.sizeY / 2 || b - d / 2 > this.y - this.sizeY / 2 && b - d / 2 < this.y + this.sizeY / 2)
                if (a + c / 2 > this.x - this.sizeX / 2 && a + c / 2 < this.x + this.sizeX / 2 || a - c / 2 > this.x - this.sizeX / 2 && a - c / 2 < this.x + this.sizeX / 2) return !0; return !1 },
        __class__: bd,
        __properties__: p(Ga.prototype.__properties__, {
            set_isCovered: "set_isCovered",
            get_isCovered: "get_isCovered"
        })
    });
    var ad = function(a, b) {
        fa.call(this, a);
        switch (m.getRecipePropertyPack()) {
            case "property_spongebob":
                this._character = this.addChild(new t({ asset: "sb_new_idle", x: -f.get_STAGE_CENTER_X() + 175, y: 74, originY: 1 }));
                this._eyes = this._character.addChild(new t({ asset: "sb_blink", y: -278, x: -10 }));
                break;
            case "property_henry_danger":
                this._character = this.addChild(new t({ asset: "hd_new_idle", x: -f.get_STAGE_CENTER_X() + 175, y: -15 }));
                this._eyes = this._character.addChild(new t({
                    asset: "hd_blink",
                    y: -230,
                    x: -7
                }));
                switch (m.get_recipeID()[1]) {
                    case 4:
                        this._character.addChild(new t({ asset: "hd_sushi", y: -45, x: 38 })); break;
                    case 6:
                        this._character.addChild(new t({ asset: "hd_hollandoats", y: -45, x: 38 })); break;
                    case 7:
                        this._character.addChild(new t({ asset: "hd_banana", y: -40, x: 38 })); break;
                    case 8:
                        this._character.addChild(new t({ asset: "hd_potatoes", y: -45, x: 38 })) }
                break;
            case "property_gameshakers":
                switch (m.get_recipeID()[1]) {
                    case 0:
                        this._character = this.addChild(new t({
                            asset: "babe_new_idle",
                            x: -f.get_STAGE_CENTER_X() +
                                200,
                            y: -30
                        }));
                        break;
                    default:
                        this._character = this.addChild(new t({ asset: "babe_with_whisk_avocado", x: -f.get_STAGE_CENTER_X() + 200, y: -30 }))
                }
                this._eyes = this._character.addChild(new t({ asset: "babe_blink", y: -217, x: -7 }))
        }
        this._tween = b;
        this._eyes.set_alpha(0);
        this._blinkTimer = S.randomFloat(0.5, 1);
        this._reactTimer = 0;
        this._tweenIdleUp()
    };
    h["world.minigames.universal.ElementCharacter"] = ad;
    ad.__name__ = ["world", "minigames", "universal", "ElementCharacter"];
    ad.__super__ = t;
    ad.prototype = p(t.prototype, {
        dispose: function() {
            this._tween.stop(this._character);
            t.prototype.dispose.call(this);
            this._tween = this._character = this._eyes = null
        },
        _tweenIdleUp: function() { this._tween.tween({ target: this._character, duration: 1.5, ease: v.inOutQuad, complete: G(this, this._tweenIdleDown) }, { scaleY: 1.02 }) },
        _tweenIdleDown: function() { this._tween.tween({ target: this._character, duration: 1.5, ease: v.inOutQuad, complete: G(this, this._tweenIdleUp) }, { scaleY: 1 }) },
        update: function(a) {
            t.prototype.update.call(this, a);
            0 < this._blinkTimer && 0 >= this._reactTimer && (this._blinkTimer -= a, 0 >= this._blinkTimer &&
                (0 == this._eyes.alpha ? (this._blinkTimer = 0.15, this._eyes.set_alpha(1)) : (this._blinkTimer = S.randomFloat(1, 3), this._eyes.set_alpha(0))));
            0 < this._reactTimer && (this._reactTimer -= a)
        },
        reactIdle: function() {
            this._reactTimer = 1.5;
            switch (m.getRecipePropertyPack()) {
                case "property_spongebob":
                    this._character.setAsset("sb_new_idle");
                    this._character.render(null);
                    break;
                case "property_henry_danger":
                    this._character.setAsset("hd_new_idle");
                    this._character.render(null);
                    break;
                case "property_gameshakers":
                    this._character.setAsset("babe_new_idle"),
                        this._character.render(null)
            }
            this._eyes.set_alpha(0)
        },
        reactGross: function() { this._reactTimer = 1.5; switch (m.getRecipePropertyPack()) {
                case "property_spongebob":
                    this._character.setAsset("sb_new_gross");
                    this._character.render(null); break;
                case "property_henry_danger":
                    this._character.setAsset("hd_new_gross");
                    this._character.render(null); break;
                case "property_gameshakers":
                    this._character.setAsset("babe_new_gross"), this._character.render(null) } this._eyes.set_alpha(0);
            this._blinkTimer = 0 },
        reactSurprise: function() {
            this._reactTimer =
                1.5;
            switch (m.getRecipePropertyPack()) {
                case "property_spongebob":
                    this._character.setAsset("sb_new_surprise");
                    this._character.render(null); break;
                case "property_henry_danger":
                    this._character.setAsset("hd_new_surprise");
                    this._character.render(null); break;
                case "property_gameshakers":
                    this._character.setAsset("babe_new_surprise"), this._character.render(null) } this._eyes.set_alpha(0);
            this._blinkTimer = 0
        },
        __class__: ad
    });
    var Zf = function(a) {
        fa.call(this, a);
        this._countdownTime = 1;
        this._secondTimer = 0;
        this._countdownText =
            this.addChild(new Na({ text: "gameplay.countdown", align: ea.Center }));
        this._countdownText.setVariables(["Ready!"]);
        this.set_alpha(0)
    };
    h["world.minigames.universal.ElementCountdown"] = Zf;
    Zf.__name__ = ["world", "minigames", "universal", "ElementCountdown"];
    Zf.__super__ = t;
    Zf.prototype = p(t.prototype, {
        dispose: function() { t.prototype.dispose.call(this);
            this._countdownText = null },
        start: function() { this._secondTimer = 1;
            this.set_alpha(1);
            n.playSound("countdown") },
        update: function(a) {
            t.prototype.update.call(this, a);
            0 < this._secondTimer &&
                (this._secondTimer -= a, 0 >= this._secondTimer && (this._secondTimer = 0.75, this._countdownTime--, 0 >= this._countdownTime ? (this._secondTimer = 0, this._countdownText.setVariables(["Go!"]), x.beginMinigame.dispatch(), n.playSound("start_game")) : (this._countdownText.setVariables(["Ready!"]), n.playSound("countdown"))))
        },
        __class__: Zf
    });
    var tb = function(a, b) { fa.call(this, a);
        this._ingredientType = b;
        this.set_cookedState(0) };
    h["world.minigames.universal.ElementFoodTint"] = tb;
    tb.__name__ = ["world", "minigames", "universal", "ElementFoodTint"];
    tb.__super__ = t;
    tb.prototype = p(t.prototype, {
        dispose: function() { t.prototype.dispose.call(this);
            this._ingredientType = null },
        get_assetFlipped: function() { return this.assetFlipped },
        set_assetFlipped: function(a) { return this.assetFlipped = a },
        get_cookedState: function() { return this.cookedState },
        set_cookedState: function(a) {
            switch (this._ingredientType[1]) {
                case 13:
                    switch (a) {
                        case 0:
                            this.set_tint(16777215); break;
                        case 1:
                            this.set_tint(7685913); break;
                        case 2:
                            this.set_tint(6897686) }
                    break;
                case 24:
                    switch (a) {
                        case 0:
                            this.set_tint(16777215);
                            break;
                        case 2:
                            this.set_tint(10046720);
                            break;
                        case 4:
                            this.set_tint(8404992);
                            break;
                        case 6:
                            this.set_tint(6697728);
                            break;
                        case 8:
                            this.set_tint(5056E3);
                            break;
                        case 9:
                            this.set_tint(16777215);
                            this._swapAsset();
                            break;
                        case 12:
                            this.set_tint(16777215), this.setAsset("grill/steak_cooked_bad")
                    }
                    this.get_assetFlipped() && this.set_tint(16777215);
                    break;
                case 12:
                    switch (a) {
                        case 0:
                            this.set_tint(16777215);
                            this._resetAsset(); break;
                        case 9:
                            this._swapAsset(); break;
                        case 11:
                            this.set_tint(7807496); break;
                        case 12:
                            this.set_tint(6232839) }
                    break;
                case 14:
                    switch (a) {
                        case 0:
                            this._resetAsset(); break;
                        case 9:
                            this._swapAsset(); break;
                        case 11:
                            this.set_tint(16549891); break;
                        case 12:
                            this.set_tint(14907906) }
                    break;
                case 20:
                    switch (a) {
                        case 9:
                            this._swapAsset(1); break;
                        case 12:
                            this._swapAsset(2) }
                    break;
                case 27:
                    switch (a) {
                        case 9:
                            this._swapAsset(1); break;
                        case 12:
                            this._swapAsset(2) }
            }
            return this.cookedState = a
        },
        _resetAsset: function() {
            var a;
            a = null == m.get_minigameResults()[0] ? K.PERFECT : m.get_minigameResults()[0];
            switch (m.get_recipeID()[1]) {
                case 1:
                    switch (a[1]) {
                        case 2:
                            this.setAsset("pound/raw3_bad");
                            break;
                        case 0:
                            this.setAsset("pound/raw3_good");
                            break;
                        case 1:
                            this.setAsset("pound/raw3_perfect")
                    }
                    break;
                case 0:
                    switch (a[1]) {
                        case 2:
                            this.setAsset("fry/donut_bad_raw"); break;
                        case 0:
                            this.setAsset("fry/donut_good_raw"); break;
                        case 1:
                            this.setAsset("fry/donut_good_raw") }
                    break;
                case 8:
                    this.setAsset("grill/steak_raw")
            }
            this.render(null)
        },
        _swapAsset: function(a) {
            null == a && (a = 0);
            var b;
            b = null == m.get_minigameResults()[0] ? K.PERFECT : m.get_minigameResults()[0];
            switch (m.get_recipeID()[1]) {
                case 1:
                    switch (b[1]) {
                        case 2:
                            this.setAsset("grill/raw3_bad_dark");
                            break;
                        case 0:
                            this.setAsset("grill/raw3_good_dark");
                            break;
                        case 1:
                            this.setAsset("grill/raw3_perfect_dark")
                    }
                    break;
                case 0:
                    switch (b[1]) {
                        case 2:
                            this.setAsset("spread/donut_bad"); break;
                        case 0:
                            this.setAsset("spread/donut_good"); break;
                        case 1:
                            this.setAsset("spread/donut_good") }
                    break;
                case 8:
                    this.setAsset("grill/steak_cooked_good");
                    break;
                case 3:
                    switch (b[1]) {
                        case 2:
                            switch (a) {
                                case 1:
                                    this.setAsset("bake/sponge_fail_baked"); break;
                                case 2:
                                    this.setAsset("bake/sponge_fail_burnt") }
                            break;
                        case 0:
                        case 1:
                            switch (a) {
                                case 1:
                                    this.setAsset("bake/sponge_good_baked");
                                    break;
                                case 2:
                                    this.setAsset("bake/sponge_good_burnt")
                            }
                    }
                    break;
                case 7:
                    switch (b[1]) {
                        case 2:
                            switch (a) {
                                case 1:
                                    this.setAsset("bake/muffins_fail_baked"); break;
                                case 2:
                                    this.setAsset("bake/muffins_fail_burnt") } break;
                        case 0:
                        case 1:
                            switch (a) {
                                case 1:
                                    this.setAsset("bake/muffins_good_baked"); break;
                                case 2:
                                    this.setAsset("bake/muffins_good_burnt") } }
            }
            this.render(null)
        },
        getMinigameResult: function() { switch (this.get_cookedState()) {
                case 7:
                case 8:
                    return K.GOOD;
                case 9:
                case 10:
                case 11:
                    return K.PERFECT } return K.FAIL },
        __class__: tb,
        __properties__: p(t.prototype.__properties__, { set_cookedState: "set_cookedState", get_cookedState: "get_cookedState", set_assetFlipped: "set_assetFlipped", get_assetFlipped: "get_assetFlipped" })
    });
    var Bc = function(a, b, c, d) {
        fa.call(this, a);
        this._tween = b;
        this._barScale = 0;
        this.addChild(new Ga({ color: 0, width: 200, height: 30, x: -100, y: 0, originX: 0 }));
        this._bar = this.addChild(new Ga({ color: 16711680, width: 200, height: 30, x: -100, y: 0, originX: 0 }));
        this._bar.scaleX = this._barScale;
        this.addChild(new t({ asset: "minigame_universal/meter" }));
        this._tweenTime = c;
        this._MAX_VALUE = d
    };
    h["world.minigames.universal.ElementProgressBar"] = Bc;
    Bc.__name__ = ["world", "minigames", "universal", "ElementProgressBar"];
    Bc.__super__ = t;
    Bc.prototype = p(t.prototype, {
        dispose: function() { t.prototype.dispose.call(this);
            this._tween = null },
        update: function(a) { t.prototype.update.call(this, a) },
        resetBar: function() { this._bar.scaleX = 0;
            this._bar.set_color(16711680) },
        updateBar: function(a) {
            this._barScale = a /= this._MAX_VALUE;
            1 <= this._barScale && (this._barScale = 1);
            0.7 == a ? this._bar.set_color(16776960) :
                0.9 == a ? this._bar.set_color(65280) : 1.1 < a && this._bar.set_color(16711680);
            this._tween.tween({ target: this._bar, duration: this._tweenTime, ease: v.linear }, { scaleX: this._barScale })
        },
        stopBar: function() { this._tween.stop(this._bar) },
        __class__: Bc
    });
    var Cc = function(a) { fa.call(this, a);
        this._rotationAnchor = this.rotation;
        this._theta = Math.random() * Math.PI * 2;
        this._magnitude = 20;
        this._frequency = 1;
        this._panDelay = 0;
        this.set_rotation(this._rotationAnchor + this._magnitude * Math.sin(this._theta)) };
    h["world.minigames.universal.ElementSpotlight"] =
        Cc;
    Cc.__name__ = ["world", "minigames", "universal", "ElementSpotlight"];
    Cc.__super__ = t;
    Cc.prototype = p(t.prototype, { dispose: function() { t.prototype.dispose.call(this) }, update: function(a) { t.prototype.update.call(this, a);
            this._theta += a * this._frequency;
            this._theta >= 2 * Math.PI && (this._theta = 0);
            this.set_rotation(this._rotationAnchor + this._magnitude * Math.sin(this._theta)) }, __class__: Cc });
    var $f = function(a, b, c) {
        fa.call(this, a);
        this._tween = b;
        this._gameTime = c;
        this.addChild(new t({
            asset: "minigame_universal/timer_fill2",
            x: 3,
            y: -5
        }));
        this._fill = this.addChild(new t({ asset: "minigame_universal/timer_fill", x: 3, y: -5 }));
        this._knob = this.addChild(new t({ asset: "minigame_universal/timer_pointer", x: 0, y: 0, alpha: 1 }));
        this._addMask(this._fill.get_sprite());
        this._startX = this.x;
        this._startY = this.y;
        this._flagShake = this._flagStart = !1;
        this._maskCircle(this._fill.get_sprite(), 0);
        this._initAngle = 0
    };
    h["world.minigames.universal.ElementTimer"] = $f;
    $f.__name__ = ["world", "minigames", "universal", "ElementTimer"];
    $f.__super__ = t;
    $f.prototype = p(t.prototype, {
        dispose: function() { t.prototype.dispose.call(this);
            this._tween.stop(this._knob);
            this._fill = this._knob = this._tween = null },
        startTimer: function() { var a = this;
            this._flagStart = !0;
            this._tween.tween({ target: this._knob, duration: this._gameTime, ease: v.linear, complete: function() { a._flagShake = !0;
                    a._flagStart = !1 } }, { rotation: 360 }) },
        stopTimer: function() { this._tween.stop(this._knob);
            this._flagStart = !1 },
        update: function(a) {
            t.prototype.update.call(this, a);
            this._flagShake && (this.x = this._startX + S.randomFloat(-2.5, 2.5),
                this.y = this._startY + S.randomFloat(-2.5, 2.5), this.set_rotation(S.randomFloat(-3, 3)));
            this._flagStart && (this._clearMask(this._fill.get_sprite()), this._maskCircle(this._fill.get_sprite(), this._knob.rotation))
        },
        _addMask: function(a) { var b = new E;
            b.setXY(a.x.$tG, a.y.$tG);
            a.owner.parent.addChild((new aa).add(b));
            a.set_mask(b);
            a.set_maskEnabled(!0) },
        _clearMask: function(a) { a.get_mask().get_graphics().clear() },
        _maskCircle: function(a, b) { a.get_mask().get_graphics().fillArc(16711680, 0, 0, 100, -90, b);
            a.set_maskEnabled(!0) },
        __class__: $f
    });
    var R = h["world.minigames.universal.TUTORIAL_TYPE"] = { __ename__: ["world", "minigames", "universal", "TUTORIAL_TYPE"], __constructs__: "TAP TRACE SWIPE HOLD SWIPE_UP SWIPE_DOWN STOP".split(" ") };
    R.TAP = ["TAP", 0];
    R.TAP.toString = l;
    R.TAP.__enum__ = R;
    R.TRACE = ["TRACE", 1];
    R.TRACE.toString = l;
    R.TRACE.__enum__ = R;
    R.SWIPE = ["SWIPE", 2];
    R.SWIPE.toString = l;
    R.SWIPE.__enum__ = R;
    R.HOLD = ["HOLD", 3];
    R.HOLD.toString = l;
    R.HOLD.__enum__ = R;
    R.SWIPE_UP = ["SWIPE_UP", 4];
    R.SWIPE_UP.toString = l;
    R.SWIPE_UP.__enum__ = R;
    R.SWIPE_DOWN = ["SWIPE_DOWN", 5];
    R.SWIPE_DOWN.toString = l;
    R.SWIPE_DOWN.__enum__ = R;
    R.STOP = ["STOP", 6];
    R.STOP.toString = l;
    R.STOP.__enum__ = R;
    var Ac = function(a, b) { fa.call(this, a);
        this._tween = b;
        this._vfx = this.addChild(new t({ asset: "ui/tutorial/tap", alpha: 0 }));
        this._hand = this.addChild(new t({ asset: "ui/tutorial/hand_press1", alpha: 0 })) };
    h["world.minigames.universal.ElementTutorialHand"] = Ac;
    Ac.__name__ = ["world", "minigames", "universal", "ElementTutorialHand"];
    Ac.__super__ = t;
    Ac.prototype = p(t.prototype, {
        dispose: function() {
            this._tween.stop(this._vfx);
            this._tween.stop(this._hand);
            t.prototype.dispose.call(this);
            this._vfx = this._hand = this._tween = null
        },
        setTutorialType: function(a, b, c, d) {
            null == d && (d = 0.25);
            if (a != this._type) switch (this._type = a, this._tween.stop(this._hand), this._tween.stop(this._vfx), this._type[1]) {
                case 0:
                    this._tapAnimation();
                    break;
                case 1:
                    this._traceAnimation(b, c, d);
                    break;
                case 3:
                    this._holdAnimation();
                    break;
                case 2:
                    this._swipeAnimation();
                    break;
                case 4:
                    this._swipeAnimationUp();
                    break;
                case 5:
                    this._swipeAnimationDown();
                    break;
                case 6:
                    n.playSound("perfect",
                        1), this._stopAnimation()
            }
        },
        _traceAnimation: function(a, b, c) { this._hand.set_alpha(1);
            this._hand.setAsset("ui/tutorial/hand_swipe");
            this._vfx.set_alpha(0);
            this._i = 0;
            this._xPoints = a;
            this._yPoints = b;
            this._hand.x = this._xPoints[this._i] + 25;
            this._hand.y = this._yPoints[this._i] + 40;
            this.render(null);
            this._tweenHandToPoint(c) },
        _tweenHandToPoint: function(a) {
            var b = this;
            this._type == R.TRACE && (this._i >= this._xPoints.length && (this._i = 0), this._tween.tween({
                target: this._hand,
                duration: a,
                ease: v.linear,
                complete: function() {
                    b._i++;
                    b._tweenHandToPoint(a)
                }
            }, { x: this._xPoints[this._i] + 25, y: this._yPoints[this._i] + 40 }))
        },
        _stopAnimation: function() { var a = this;
            this._type == R.STOP && (this._hand.set_alpha(1), this._vfx.set_alpha(0), this._hand.setAsset("ui/tutorial/thumbsup"), this.render(null), this._tween.tween({ target: this._hand, duration: 0.25, ease: v.inOutQuad, complete: function() { a._tween.tween({ target: a._hand, duration: 0.25, ease: v.inOutQuad, complete: function() { a._stopAnimation() } }, { scale: 1 }) } }, { scale: 1.1 })) },
        _tapAnimation: function() {
            var a =
                this;
            this._type == R.TAP && (this._hand.set_alpha(1), this._hand.y = -50, this._vfx.set_alpha(0), this._vfx.x = 0, this._vfx.y = 50, this._hand.setAsset("ui/tutorial/hand_press1"), this.render(null), this._tween.tween({
                target: this._hand,
                duration: 0.2,
                ease: v.inOutQuad,
                complete: function() {
                    a._hand.setAsset("ui/tutorial/hand_press2");
                    a.render(null);
                    a._tween.tween({
                        target: a._vfx,
                        duration: 0.15,
                        ease: v.inOutQuad,
                        complete: function() {
                            a._hand.setAsset("ui/tutorial/hand_press1");
                            a.render(null);
                            a._tween.tween({
                                target: a._vfx,
                                duration: 0.15,
                                ease: v.inOutQuad
                            }, { alpha: 0 });
                            a._tween.tween({ target: a._hand, duration: 0.2, ease: v.inOutQuad, complete: function() { a._tapAnimation() } }, { y: a._hand.y - 50 })
                        }
                    }, { alpha: 1 })
                }
            }, { y: this._hand.y + 50 }))
        },
        _holdAnimation: function() {
            var a = this;
            this._hand.set_rotation(0);
            this._hand.set_alpha(1);
            this._hand.y = -100;
            this._vfx.set_alpha(0);
            this._vfx.set_rotation(0);
            this._vfx.x = -5;
            this._vfx.y = 0;
            this._vfx.setAsset("ui/tutorial/tap");
            this._hand.setAsset("ui/tutorial/hand_press1");
            this.render(null);
            this._tween.tween({
                target: this._hand,
                duration: 0.25,
                ease: v.inOutQuad,
                complete: function() { a._hand.setAsset("ui/tutorial/hand_press2");
                    a.render(null);
                    a._alphaInVFX() }
            }, { y: this._hand.y + 50 })
        },
        _swipeAnimationUp: function() {
            var a = this;
            this._hand.set_rotation(-25);
            this._hand.set_alpha(1);
            this._vfx.set_rotation(-25);
            this._vfx.set_alpha(0);
            this._vfx.x = -50;
            this._vfx.y = -65;
            this._hand.setAsset("ui/tutorial/hand_swipe");
            this._vfx.setAsset("ui/tutorial/swipe");
            this.render(null);
            this._tween.tween({
                target: this._vfx,
                duration: 0.2,
                ease: v.inOutQuad,
                delay: 0.15,
                complete: function() { a._tween.tween({ target: a._vfx, duration: 0.4, ease: v.inOutQuad, complete: function() {} }, { alpha: 0 }) }
            }, { alpha: 1 });
            this._tween.tween({ target: this._hand, duration: 0.3, ease: v.inOutQuad, complete: function() { a._tween.tween({ target: a._hand, duration: 0.3, ease: v.inOutQuad, delay: 0.2, complete: function() { a._hand.y = 0;
                            a._swipeAnimationUp() } }, { y: a._hand.y + 90 }) } }, { y: this._hand.y - 90 })
        },
        _swipeAnimationDown: function() {
            var a = this;
            this._hand.set_rotation(-25);
            this._hand.set_alpha(1);
            this._vfx.set_rotation(-145);
            this._vfx.set_alpha(0);
            this._vfx.x = -50;
            this._vfx.y = 0;
            this._vfx.scaleX = -1;
            this._hand.setAsset("ui/tutorial/hand_swipe");
            this._vfx.setAsset("ui/tutorial/swipe");
            this.render(null);
            this._tween.tween({ target: this._vfx, duration: 0.2, ease: v.inOutQuad, delay: 0.15, complete: function() { a._tween.tween({ target: a._vfx, duration: 0.4, ease: v.inOutQuad, complete: function() {} }, { alpha: 0 }) } }, { alpha: 1 });
            this._tween.tween({
                target: this._hand,
                duration: 0.3,
                ease: v.inOutQuad,
                complete: function() {
                    a._tween.tween({
                        target: a._hand,
                        duration: 0.3,
                        ease: v.inOutQuad,
                        delay: 0.2,
                        complete: function() { a._hand.y = 0;
                            a._swipeAnimationDown() }
                    }, { y: a._hand.y - 90 })
                }
            }, { y: this._hand.y + 90 })
        },
        _swipeAnimation: function() {
            var a = this;
            this._hand.set_rotation(0);
            this._hand.set_alpha(1);
            this._vfx.set_rotation(0);
            this._vfx.set_alpha(0);
            this._vfx.x = 35;
            this._vfx.y = -75;
            this._hand.setAsset("ui/tutorial/hand_swipe");
            this._vfx.setAsset("ui/tutorial/swipe");
            this.render(null);
            this._tween.tween({
                target: this._vfx,
                duration: 0.2,
                ease: v.inOutQuad,
                delay: 0.15,
                complete: function() {
                    a._tween.tween({
                        target: a._vfx,
                        duration: 0.4,
                        ease: v.inOutQuad,
                        complete: function() {}
                    }, { alpha: 0 })
                }
            }, { alpha: 1 });
            this._tween.tween({ target: this._hand, duration: 0.3, ease: v.inOutQuad, complete: function() { a._tween.tween({ target: a._hand, duration: 0.3, ease: v.inOutQuad, delay: 0.2, complete: function() { a._hand.y = 0;
                            a._swipeAnimation() } }, { y: a._hand.y + 90, x: a._hand.x - 90 }) } }, { y: this._hand.y - 90, x: this._hand.x + 90 })
        },
        _alphaInVFX: function() { this._tween.tween({ target: this._vfx, duration: 0.5, ease: v.inOutQuad, complete: G(this, this._alphaOutVFX) }, { alpha: 1 }) },
        _alphaOutVFX: function() { this._tween.tween({ target: this._vfx, duration: 0.5, ease: v.inOutQuad, complete: G(this, this._alphaInVFX) }, { alpha: 0 }) },
        update: function(a) { t.prototype.update.call(this, a) },
        __class__: Ac
    });
    var X = function(a) { fa.call(this, a);
        this._layers = [] };
    h["world.minigames.universal.food.ElementFoodBase"] = X;
    X.__name__ = ["world", "minigames", "universal", "food", "ElementFoodBase"];
    X.__super__ = t;
    X.prototype = p(t.prototype, {
        get_layers: function() { return this._layers },
        dispose: function() {
            t.prototype.dispose.call(this);
            this._layers = null
        },
        update: function(a) { t.prototype.update.call(this, a) },
        swapLayerAsset: function(a, b) { this._layers[b].set_alpha(1);
            this._layers[b].set_ingredientType(a) },
        removeLayerAsset: function(a) { this._layers[a].set_alpha(0) },
        __class__: X,
        __properties__: p(t.prototype.__properties__, { get_layers: "get_layers" })
    });
    var cg = function(a, b, c) {
        X.call(this, a);
        a = m.get_minigameResults()[2];
        null == a && (a = K.PERFECT);
        switch (a[1]) {
            case 2:
                this.addChild(new N({ asset: "toast_judge_bad", y: 0 }));
                break;
            default:
                this.addChild(new N({
                    asset: "toast_judge_good",
                    y: 0
                }))
        }
        a = m.get_minigameResults()[3];
        null == a && (a = K.PERFECT);
        switch (a[1]) {
            case 2:
                break;
            case 0:
                this.addChild(new N({ asset: "toast_judge_badavocado", y: 0 })); break;
            default:
                this.addChild(new N({ asset: "toast_judge_goodavocado", y: 0 })) }
    };
    h["world.minigames.universal.food.ElementAvocadoToast"] = cg;
    cg.__name__ = ["world", "minigames", "universal", "food", "ElementAvocadoToast"];
    cg.__super__ = X;
    cg.prototype = p(X.prototype, { update: function(a) { X.prototype.update.call(this, a) }, __class__: cg });
    var bg = function(a, b, c) {
        null == c &&
            (c = !1);
        X.call(this, a);
        switch ((null == m.get_minigameResults()[0] ? K.FAIL : m.get_minigameResults()[0])[1]) {
            case 2:
                this.addChild(new N({ asset: "spread/donut_bad", y: 0 })); break;
            default:
                this.addChild(new N({ asset: "spread/donut_good", y: 0 })) }
        for (a = 0; a < b.length;) this._layers.push(this.addChild(new db({ y: -10, alpha: !0 == c ? 0 : 1 }, b[a]))), a++;
        null != m.get_minigameResults()[2] && m.get_minigameResults();
        switch (ba.getInt("sprinkle_result")) {
            case 1:
                this.addChild(new N({ asset: "spread/sprinkles1", y: -15 }));
                break;
            case 2:
                this.addChild(new N({
                    asset: "spread/sprinkles2",
                    y: -15
                }));
                break;
            case 3:
                this.addChild(new N({ asset: "spread/sprinkles3", y: -15 }))
        }
    };
    h["world.minigames.universal.food.ElementDoughnut"] = bg;
    bg.__name__ = ["world", "minigames", "universal", "food", "ElementDoughnut"];
    bg.__super__ = X;
    bg.prototype = p(X.prototype, { dispose: function() { X.prototype.dispose.call(this) }, update: function(a) { X.prototype.update.call(this, a) }, __class__: bg });
    var Pa = function(a, b, c) {
        X.call(this, a);
        this.addChild(new N({ asset: "hollandoats_bowl", y: 0, scale: 1.5 }));
        a = m.get_minigameResults()[0];
        null ==
            a && (a = K.PERFECT);
        switch (a[1]) {
            case 2:
                this.addChild(new N({ asset: "hollandoats_badoats", y: 0, scale: 1.5 })); break;
            default:
                this.addChild(new N({ asset: "hollandoats_goodoats", y: 0, scale: 1.5 })) }
        if (0 < Pa.fruitPosX.length)
            for (a = 0; a < Pa.fruitPosX.length;) this.addChild(new dc({ x: Pa.fruitPosX[a], y: Pa.fruitPosY[a], scale: 0.75 }, Pa.fruitType[a])).placeInBowl(), a++
    };
    h["world.minigames.universal.food.ElementHollandOats"] = Pa;
    Pa.__name__ = ["world", "minigames", "universal", "food", "ElementHollandOats"];
    Pa.__super__ = X;
    Pa.prototype =
        p(X.prototype, { update: function(a) { X.prototype.update.call(this, a) }, __class__: Pa });
    var gg = function(a, b, c) { X.call(this, a);
        this.addChild(new t({ asset: "pour/straw", originY: 1, x: 5, y: 175 })); switch ((null == m.get_minigameResults()[2] ? K.FAIL : m.get_minigameResults()[2])[1]) {
            case 2:
                this.addChild(new N({ asset: "pour/juice_fill_bad", y: 0, alpha: 0.9 })); break;
            default:
                this.addChild(new N({ asset: "pour/juice_fill_good", y: 0, alpha: 0.9 })) } this.addChild(new t({ asset: "pour/glass", x: 0, y: 0 }));
        this.set_scale(0.45) };
    h["world.minigames.universal.food.ElementJuiceBlend"] =
        gg;
    gg.__name__ = ["world", "minigames", "universal", "food", "ElementJuiceBlend"];
    gg.__super__ = X;
    gg.prototype = p(X.prototype, { update: function(a) { X.prototype.update.call(this, a) }, __class__: gg });
    var kg = function(a, b, c) {
        null == c && (c = !1);
        X.call(this, a);
        this.addChild(new N({ asset: "toast_judge_good", y: 0 }));
        for (var d = a = 0; 6 > a;) {
            switch (a) {
                case 0:
                    d = -15; break;
                case 1:
                    d = -35; break;
                case 2:
                    d = -55; break;
                case 3:
                    d = -75; break;
                case 4:
                    d = -95; break;
                case 5:
                    d = -115 } this._layers.push(this.addChild(new db({ y: d, alpha: !0 == c ? 0 : 1 }, b[a])));
            a++
        }
    };
    h["world.minigames.universal.food.ElementJuiceBlendSandwhich"] = kg;
    kg.__name__ = ["world", "minigames", "universal", "food", "ElementJuiceBlendSandwhich"];
    kg.__super__ = X;
    kg.prototype = p(X.prototype, { update: function(a) { X.prototype.update.call(this, a) }, __class__: kg });
    var ag = function(a, b, c) {
        X.call(this, a);
        a = m.get_minigameResults()[0];
        null == a && (a = K.PERFECT);
        switch (a[1]) {
            case 2:
                this.addChild(new N({ asset: "final/kelpshake_finalbad", y: 0 }));
                break;
            default:
                this.addChild(new N({
                    asset: "final/kelpshake_finalgood",
                    y: 0
                }))
        }
        this.set_scale(0.5)
    };
    h["world.minigames.universal.food.ElementKelpShake"] = ag;
    ag.__name__ = ["world", "minigames", "universal", "food", "ElementKelpShake"];
    ag.__super__ = X;
    ag.prototype = p(X.prototype, { update: function(a) { X.prototype.update.call(this, a) }, __class__: ag });
    var Ld = function(a, b, c) {
        null == c && (c = !1);
        X.call(this, a);
        this.addChild(new N({ asset: "prep/bun_bottom", y: 0 }));
        switch ((null == m.get_minigameResults()[0] ? K.FAIL : m.get_minigameResults()[0])[1]) {
            case 2:
                this.addChild(new N({
                    asset: "grill/raw3_bad_dark",
                    y: -40,
                    tint: m.get_recipeIngredientTintColors()[0]
                }));
                break;
            case 0:
                this.addChild(new N({ asset: "grill/raw3_good_dark", y: -40, tint: m.get_recipeIngredientTintColors()[0] }));
                break;
            case 1:
                this.addChild(new N({ asset: "grill/raw3_perfect_dark", y: -40, tint: m.get_recipeIngredientTintColors()[0] }))
        }
        for (var d = a = 0; a < b.length;) {
            switch (a) {
                case 0:
                    d = -60; break;
                case 1:
                    d = -75; break;
                case 2:
                    d = -85; break;
                case 3:
                    d = -95; break;
                case 4:
                    d = -115; break;
                case 5:
                    d = -170 } this._layers.push(this.addChild(new db({ y: d, alpha: !0 == c ? 0 : 1 }, b[a])));
            a++
        }
    };
    h["world.minigames.universal.food.ElementKrabbyPatty"] = Ld;
    Ld.__name__ = ["world", "minigames", "universal", "food", "ElementKrabbyPatty"];
    Ld.__super__ = X;
    Ld.prototype = p(X.prototype, { update: function(a) { X.prototype.update.call(this, a) }, __class__: Ld });
    var eg = function(a, b, c) { X.call(this, a);
        this.addChild(new N({ asset: "bake/muffins_good_baked", y: 0 })) };
    h["world.minigames.universal.food.ElementLoveMuffins"] = eg;
    eg.__name__ = ["world", "minigames", "universal", "food", "ElementLoveMuffins"];
    eg.__super__ = X;
    eg.prototype =
        p(X.prototype, { update: function(a) { X.prototype.update.call(this, a) }, __class__: eg });
    var dg = function(a, b, c) { X.call(this, a);
        a = null == m.get_minigameResults()[0] ? K.PERFECT : m.get_minigameResults()[0];
        b = null == m.get_minigameResults()[2] ? K.PERFECT : m.get_minigameResults()[2]; switch (a[1]) {
            case 2:
                switch (b[1]) {
                    case 0:
                    case 1:
                        this.setAsset("bake/sponge_fail_baked"); break;
                    case 2:
                        this.setAsset("bake/sponge_fail_burnt") } break;
            case 0:
            case 1:
                switch (b[1]) {
                    case 0:
                    case 1:
                        this.setAsset("bake/sponge_good_baked"); break;
                    case 2:
                        this.setAsset("bake/sponge_good_burnt") } } };
    h["world.minigames.universal.food.ElementSpongecake"] = dg;
    dg.__name__ = ["world", "minigames", "universal", "food", "ElementSpongecake"];
    dg.__super__ = X;
    dg.prototype = p(X.prototype, { update: function(a) { X.prototype.update.call(this, a) }, __class__: dg });
    var fg = function(a, b, c) {
        X.call(this, a);
        switch ((null == m.get_minigameResults()[1] ? K.PERFECT : m.get_minigameResults()[1])[1]) {
            case 1:
            case 0:
                this.addChild(new N({ asset: "potatoes_good", x: -65, y: -55, scale: 0.4 }));
                break;
            default:
                this.addChild(new N({
                    asset: "potatoes_bad",
                    x: -65,
                    y: -55,
                    scale: 0.4
                }))
        }
        switch ((null == m.get_minigameResults()[3] ? K.PERFECT : m.get_minigameResults()[3])[1]) {
            case 1:
            case 0:
                this.addChild(new N({ asset: "grill/steak_cooked_good", x: 40, y: 5, scale: 0.5 })); break;
            case 2:
                this.addChild(new N({ asset: "grill/steak_cooked_bad", x: 40, y: 5, scale: 0.5 })) }
    };
    h["world.minigames.universal.food.ElementSteak"] = fg;
    fg.__name__ = ["world", "minigames", "universal", "food", "ElementSteak"];
    fg.__super__ = X;
    fg.prototype = p(X.prototype, {
        dispose: function() { X.prototype.dispose.call(this) },
        update: function(a) {
            X.prototype.update.call(this,
                a)
        },
        __class__: fg
    });
    var Md = function(a, b, c) { null == c && (c = !1);
        X.call(this, a);
        this.addChild(new N({ asset: "prep/riceball", y: 0, tint: m.get_recipeIngredientTintColors()[0] })); for (var d = a = 0; a < b.length;) { switch (a) {
                case 0:
                    d = -25; break;
                case 1:
                    d = -55; break;
                case 2:
                    d = -85 } this._layers.push(this.addChild(new db({ y: d, alpha: !0 == c ? 0 : 1 }, b[a])));
            a++ } };
    h["world.minigames.universal.food.ElementSushiRoll"] = Md;
    Md.__name__ = ["world", "minigames", "universal", "food", "ElementSushiRoll"];
    Md.__super__ = X;
    Md.prototype = p(X.prototype, {
        update: function(a) {
            X.prototype.update.call(this,
                a)
        },
        __class__: Md
    });
    var $ = h["world.particles.PARTICLE_TYPE"] = { __ename__: ["world", "particles", "PARTICLE_TYPE"], __constructs__: "DEFAULT FOUNTAIN STEAM SPARKLE SPRINKLE SMOKE AVOCADO RICE CONFETTI STARBURST".split(" ") };
    $.DEFAULT = ["DEFAULT", 0];
    $.DEFAULT.toString = l;
    $.DEFAULT.__enum__ = $;
    $.FOUNTAIN = ["FOUNTAIN", 1];
    $.FOUNTAIN.toString = l;
    $.FOUNTAIN.__enum__ = $;
    $.STEAM = ["STEAM", 2];
    $.STEAM.toString = l;
    $.STEAM.__enum__ = $;
    $.SPARKLE = ["SPARKLE", 3];
    $.SPARKLE.toString = l;
    $.SPARKLE.__enum__ = $;
    $.SPRINKLE = ["SPRINKLE", 4];
    $.SPRINKLE.toString = l;
    $.SPRINKLE.__enum__ = $;
    $.SMOKE = ["SMOKE", 5];
    $.SMOKE.toString = l;
    $.SMOKE.__enum__ = $;
    $.AVOCADO = ["AVOCADO", 6];
    $.AVOCADO.toString = l;
    $.AVOCADO.__enum__ = $;
    $.RICE = ["RICE", 7];
    $.RICE.toString = l;
    $.RICE.__enum__ = $;
    $.CONFETTI = ["CONFETTI", 8];
    $.CONFETTI.toString = l;
    $.CONFETTI.__enum__ = $;
    $.STARBURST = ["STARBURST", 9];
    $.STARBURST.toString = l;
    $.STARBURST.__enum__ = $;
    var Ib = function(a) { fa.call(this, {});
        this._velocity = new ib;
        this._tween = a;
        this._lifeSpan = this._lifeSpanMax = 1;
        this.set_isAlive(!1) };
    h["world.particles.ParticleBase"] =
        Ib;
    Ib.__name__ = ["world", "particles", "ParticleBase"];
    Ib.__super__ = t;
    Ib.prototype = p(t.prototype, {
        dispose: function() { t.prototype.dispose.call(this);
            this._velocity.dispose();
            this._tween = this._type = this._velocity = null },
        get_isAlive: function() { return this.isAlive },
        set_isAlive: function(a) { return this.isAlive = a },
        spawn: function(a) {
            var b = this;
            this.x = a.x;
            this.y = a.y;
            this.scaleX = null != a.scaleX ? a.scaleX : 1;
            this.scaleY = null != a.scaleY ? a.scaleY : 1;
            this.set_rotation(null != a.rotation ? a.rotation : 0);
            this._buildAsset(null !=
                a.texture ? a.texture : "");
            this._lifeSpan = null != a.lifeSpan ? this._lifeSpanMax = a.lifeSpan : this._lifeSpanMax = 0.25;
            this._velocity.to(0, 0);
            this.set_alpha(1);
            this.set_isAlive(!0);
            this.originX = this.originY = 0.5;
            this._type = null != a.type ? a.type : $.DEFAULT;
            switch (this._type[1]) {
                case 1:
                    this._velocity.x = this._getRandomArbitrary(-250, 250);
                    this._velocity.y = this._getRandomArbitrary(-400, -200);
                    break;
                case 2:
                    this._velocity.y = this._getRandomArbitrary(-400, -200);
                    break;
                case 3:
                    this._lifeSpan = 1;
                    this.set_alpha(0);
                    this._buildAsset(0 ==
                        S.randomInt(0, 1) ? "minigame_universal/particles/circle_large" : "minigame_universal/particles/star_large");
                    this.set_scale(S.randomFloat(0.5, 0.8));
                    this._tween.tween({ target: this, duration: 0.25, ease: v.linear, delay: S.randomFloat(0, 0.4), complete: function() { b._tween.tween({ target: b, duration: 0.25, ease: v.linear, complete: function() { b.set_isAlive(!1);
                                    b._die() } }, { alpha: 0 }) } }, { alpha: 1 });
                    break;
                case 4:
                    this._velocity.x = 0;
                    this._velocity.y = S.randomFloat(75, 100);
                    this._lifeSpan = S.randomFloat(0.25, 0.4);
                    switch (S.randomInt(0,
                        4)) {
                        case 0:
                            this._buildAsset("spread/sprinkle_blue"); break;
                        case 1:
                            this._buildAsset("spread/sprinkle_green"); break;
                        case 2:
                            this._buildAsset("spread/sprinkle_purple"); break;
                        case 3:
                            this._buildAsset("spread/sprinkle_red"); break;
                        case 4:
                            this._buildAsset("spread/sprinkle_yellow") } this.set_scale(S.randomFloat(0.5, 0.8));
                    this.set_rotation(S.randomFloat(0, 179));
                    break;
                case 5:
                    this._velocity.x = S.randomFloat(-15, 15);
                    this._velocity.y = S.randomFloat(-100, -50);
                    this._lifeSpan = S.randomFloat(0.25, 0.4);
                    this._buildAsset("minigame_universal/particles/smoke_particle");
                    this.set_rotation(180 * Math.random());
                    this.set_scale(0.5 * Math.random() + 0.5);
                    this.set_alpha(0);
                    this._tween.tween({ target: this, duration: 0.25, ease: v.linear, complete: function() { b._tween.tween({ target: b, duration: 0.5, ease: v.linear, complete: function() { b.set_isAlive(!1);
                                    b._die() } }, { alpha: 0 }) } }, { alpha: 0.35 });
                    break;
                case 6:
                    this._velocity.x = S.randomFloat(50, 150);
                    this._velocity.rotate(S.randomFloat(0, 360));
                    this._lifeSpan = S.randomFloat(0.25, 0.4);
                    break;
                case 7:
                    this._buildAsset("boil/boil_particle");
                    this._velocity.x =
                        S.randomFloat(-150, -50);
                    this._velocity.y = S.randomFloat(0, 50);
                    this._lifeSpan = S.randomFloat(0.5, 0.6);
                    break;
                case 8:
                    this._buildAsset("minigame_universal/particles/confetti" + S.randomInt(1, 4));
                    this._velocity.x = S.randomFloat(-25, 25);
                    this._velocity.y = S.randomFloat(0, 25);
                    break;
                case 9:
                    this._buildAsset("minigame_universal/particles/star_large"), this._velocity.to(0, -500), this._velocity.rotate(180 * Math.random() - 90)
            }
        },
        _getRandomArbitrary: function(a, b) { return Math.random() * (b - a) + a },
        update: function(a) {
            t.prototype.update.call(this,
                a);
            this.get_isAlive() && (this._doCustomParticleMovement(a), 0 < this._lifeSpan && (this._lifeSpan -= a, 0 >= this._lifeSpan && (this.set_isAlive(!1), this._die())))
        },
        _doCustomParticleMovement: function(a) {
            switch (this._type[1]) {
                case 1:
                case 4:
                case 7:
                    this.x += this._velocity.x * a;
                    this.y += this._velocity.y * a;
                    this._velocity.y += 960 * a;
                    break;
                case 2:
                    this.y += this._velocity.y * a;
                    break;
                case 5:
                    this.x += this._velocity.x * a;
                    this.y += this._velocity.y * a;
                    break;
                case 6:
                    this.x += this._velocity.x * a;
                    this.y += this._velocity.y * a;
                    break;
                case 8:
                    this.x +=
                        this._velocity.x * a;
                    this.y += this._velocity.y * a;
                    this._velocity.y += 75 * a;
                    0 >= this._velocity.y && (this._velocity.y = 0);
                    this.set_rotation(this.rotation + 100 * Math.random() * a);
                    this.set_alpha(this._lifeSpan <= this._lifeSpanMax / 2 ? this._lifeSpan / (this._lifeSpanMax / 2) : 1);
                    break;
                case 9:
                    this.x += this._velocity.x * a * 0.5, this.y += this._velocity.y * a, this._velocity.y += 100 * a
            }
        },
        _die: function() { Ib.particleDie.dispatch(this) },
        forceDie: function() { this.set_isAlive(!1);
            this._die() },
        __class__: Ib,
        __properties__: p(t.prototype.__properties__, { set_isAlive: "set_isAlive", get_isAlive: "get_isAlive" })
    });
    var Ya = function(a, b, c, d) { this._elementManager = a;
        this._tween = b;
        this._layer = c;
        this._activeParticles = [];
        this._pool = [];
        this._buildPool(d);
        this._addEventListeners() };
    h["world.particles.ParticleManager"] = Ya;
    Ya.__name__ = ["world", "particles", "ParticleManager"];
    Ya.prototype = {
        dispose: function() {
            this._removeEventListeners();
            this._activeParticles = this._layer = this._tween = this._elementManager = null;
            for (var a = 0, b = this._pool.length; a < b;) { var c = a++;
                this._pool[c].dispose() } this._pool =
                null
        },
        _buildPool: function(a) { for (var b = 0; b < a;) this._pool.push(new Ib(this._tween)), b++ },
        _addEventListeners: function() { Ib.particleDie.add(G(this, this._onParticleDie));
            Ya.spawnParticle.add(G(this, this._onSpawnParticle)) },
        _removeEventListeners: function() { Ib.particleDie.remove(G(this, this._onParticleDie));
            Ya.spawnParticle.remove(G(this, this._onSpawnParticle)) },
        _onParticleDie: function(a) {-1 != this._activeParticles.indexOf(a) && (I.remove(this._activeParticles, a), this._pool.push(a), this._elementManager.removeElement(a)) },
        _onSpawnParticle: function(a) { this.spawn(a) },
        clearPool: function() { for (var a = 0, b = this._activeParticles; a < b.length;) { var c = b[a];++a;
                c.forceDie() } },
        spawn: function(a) { if (!(0 >= this._pool.length)) { var b = this._pool.pop();
                b.spawn(a);
                this._activeParticles.push(b);
                this._elementManager.addElement(b, this._layer) } },
        __class__: Ya
    };
    var rc = function(a) { Ib.call(this, a);
        this._splatBacking = this.addChild(new t({ y: -15, scale: 0.75 }));
        this._text = this.addChild(new Na({ text: "splash.click_anywhere", align: ea.Center })) };
    h["world.particles.TextParticle"] =
        rc;
    rc.__name__ = ["world", "particles", "TextParticle"];
    rc.__super__ = Ib;
    rc.prototype = p(Ib.prototype, {
        dispose: function() { Ib.prototype.dispose.call(this);
            this._text = this._splatBacking = null },
        spawn: function(a) {
            var b = this;
            this.x = a.x;
            this.y = a.y;
            this.set_alpha(1);
            this.set_isAlive(!0);
            this._lifeSpan = null != a.lifeSpan ? this._lifeSpanMax = a.lifeSpan : this._lifeSpanMax = 1;
            this.scaleX = null != a.scaleX ? a.scaleX : 1;
            this.scaleY = null != a.scaleY ? a.scaleY : 1;
            this.set_rotation(null != a.rotation ? a.rotation : 0);
            this.set_tint(null != a.color ?
                a.color : 16777215);
            this._text.setText(a.textId);
            null != a.vars && this._text.setVariables(a.vars);
            this._splatBacking.set_alpha(0);
            null != a.backingAsset ? (this.set_tint(16777215), this.set_scale(0.8), this._splatBacking.set_alpha(1), this._splatBacking.setAsset(a.backingAsset), this._tween.tween({ target: this, duration: 0.25, ease: v.inQuad, complete: function() { b._tween.tween({ target: b, duration: b._lifeSpan, ease: v.inQuad, delay: 0.5, complete: G(b, b._die) }, { alpha: 1 }) } }, { scale: 1 })) : this._tween.tween({
                target: this,
                duration: this._lifeSpanMax,
                ease: v.inQuad
            }, { y: this.y - 200, alpha: 0 })
        },
        _doCustomParticleMovement: function(a) {},
        _die: function() { rc.particleDie.dispatch(this) },
        __class__: rc
    });
    var Aa = function(a, b, c) { Ya.call(this, a, b, c, 10) };
    h["world.particles.TextParticleManager"] = Aa;
    Aa.__name__ = ["world", "particles", "TextParticleManager"];
    Aa.__super__ = Ya;
    Aa.prototype = p(Ya.prototype, {
        _addEventListeners: function() { rc.particleDie.add(G(this, this._onParticleDie));
            Aa.spawnParticle.add(G(this, this._onSpawnParticle)) },
        _removeEventListeners: function() {
            rc.particleDie.remove(G(this,
                this._onParticleDie));
            Aa.spawnParticle.remove(G(this, this._onSpawnParticle))
        },
        _buildPool: function(a) { for (var b = 0; b < a;) this._pool.push(new rc(this._tween)), b++ },
        __class__: Aa
    });
    var be, oi = 0;
    h.Math = Math;
    String.prototype.__class__ = h.String = String;
    String.__name__ = ["String"];
    h.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = h.Date = Date;
    Date.__name__ = ["Date"];
    var pi = h.Int = { __name__: ["Int"] },
        qi = h.Dynamic = { __name__: ["Dynamic"] },
        ji = h.Float = Number;
    ji.__name__ = ["Float"];
    var ki = h.Bool = Boolean;
    ki.__ename__ = ["Bool"];
    var hi = h.Class = { __name__: ["Class"] },
        ii = {},
        Za = {},
        Mh = ei.ArrayBuffer || Sb;
    null == Mh.prototype.slice && (Mh.prototype.slice = Sb.sliceImpl);
    var fi = ei.Uint8Array || ic._new;
    B.Element = 0;
    B.PCData = 1;
    B.CData = 2;
    B.Comment = 3;
    B.DocType = 4;
    B.ProcessingInstruction = 5;
    B.Document = 6;
    f.unlockCode = "";
    f.unlockEnabled = !1;
    na.flow = Ka._new();
    na.worldAllocateProgress = Ka._new();
    na.worldAllocateComplete = gc._new();
    na.updateDisplay = Ka._new();
    na.resizeStage = gc._new();
    D._ENVIRONMENT_KEY = "49271858100349678327975813515103";
    D._offlineUserId =
        "";
    D._offlineTrackingId = "";
    D._sessionId = "";
    D._flagInitted = !1;
    D._DEFAULT_SHARED_OBJECT_ID = "nkcimocuresid";
    D.OPTION_ENABLE_TRACKING = !0;
    oa._flagCanadaTrackingEnabled = !1;
    oa._canadaShowGameTitle = "";
    ab.__rtti = '<class path="kit.creator.CreatorObject" params="">\n\t<extends path="kit.Component"/>\n\t<get_entitySlot set="method" line="71" override="1"><f a=""><x path="Int"/></f></get_entitySlot>\n\t<info public="1" set="null">\n\t\t<c path="kit.creator.ObjectInfo"/>\n\t\t<meta>\n\t\t\t<m n=":Creator"><e>visible=false</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t</meta>\n\t</info>\n\t<spawned public="1" set="null" expr="true" line="76">\n\t\t<x path="Bool"/>\n\t\t<meta>\n\t\t\t<m n=":value"><e>true</e></m>\n\t\t\t<m n=":Creator"><e>initial=true</e></m>\n\t\t</meta>\n\t</spawned>\n\t<onStarted public="1" set="null" expr="null" line="81">\n\t\t<c path="String"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</onStarted>\n\t<onUpdated public="1" set="null" expr="null" line="86">\n\t\t<c path="String"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</onUpdated>\n\t<onStopped public="1" set="null" expr="null" line="91">\n\t\t<c path="String"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</onStopped>\n\t<onStart public="1" set="method" line="93" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="101" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<onStop public="1" set="method" line="117" override="1"><f a=""><x path="Void"/></f></onStop>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":rtti"/>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    hc.__rtti = '<class path="ez.Actor" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<pointerEnabled public="1" line="42">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</pointerEnabled>\n\t<onPointerDown public="1" line="44"><c path="String"/></onPointerDown>\n\t<onPointerIn public="1" line="45"><c path="String"/></onPointerIn>\n\t<onPointerOut public="1" line="46"><c path="String"/></onPointerOut>\n\t<onPointerUp public="1" line="47"><c path="String"/></onPointerUp>\n\t<physicsEnabled public="1" line="49"><x path="Bool"/></physicsEnabled>\n\t<density public="1" line="52">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</density>\n\t<fixedRotation public="1" line="54"><x path="Bool"/></fixedRotation>\n\t<gravityScale public="1" line="57">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</gravityScale>\n\t<friction public="1" line="60">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=0.2</e></m></meta>\n\t</friction>\n\t<restitution public="1" line="62"><x path="Float"/></restitution>\n\t<sensor public="1" line="63"><x path="Bool"/></sensor>\n\t<collisionGroup public="1" line="64"><c path="Array"><c path="String"/></c></collisionGroup>\n\t<collidesWith public="1" line="65"><c path="Array"><c path="String"/></c></collidesWith>\n\t<onBeginContact public="1" line="66"><c path="String"/></onBeginContact>\n\t<onEndContact public="1" line="67"><c path="String"/></onEndContact>\n\t<physicsType public="1" line="69"><e path="ez.PhysicsType"/></physicsType>\n\t<onStart public="1" set="method" line="73" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<emitMessage set="method" line="159">\n\t\t<f a="message">\n\t\t\t<c path="String"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$eF"</e></m></meta>\n\t</emitMessage>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    hc.ENTITY_SLOT = 1;
    ia.__rtti = '<class path="kit.creator.CreatorAction" params="">\n\t<runSequence public="1" set="method" line="129" static="1"><f a="actions:target">\n\t<c path="Array"><c path="kit.creator.CreatorAction"/></c>\n\t<c path="kit.Entity"/>\n\t<t path="kit.util.Promise0"/>\n</f></runSequence>\n\t<target public="1" set="null" expr="null" line="37">\n\t\t<c path="kit.creator.ObjectInfo"/>\n\t\t<meta><m n=":value"><e>null</e></m></meta>\n\t</target>\n\t<script public="1" set="null" expr="null" line="44">\n\t\t<c path="kit.creator.CreatorScript"/>\n\t\t<meta>\n\t\t\t<m n=":value"><e>null</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t\t<m n=":Creator"><e>visible=false</e></m>\n\t\t</meta>\n\t\x3c/script>\n\t<onRun public="1" set="method" line="61">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$jF"</e></m></meta>\n\t</onRun>\n\t<onRunAsync public="1" set="method" line="71">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$kF"</e></m></meta>\n\t</onRunAsync>\n\t<run public="1" set="method" line="86">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$lF"</e></m></meta>\n\t</run>\n\t<new set="method" line="52"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":rtti"/>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    Gc.__rtti = '<class path="ez.TweenAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<tween set="method" line="43">\n\t\t<f a="entity:float:to:duration:ease">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t\t<x path="Float"/>\n\t\t\t<x path="Float"/>\n\t\t\t<e path="ez.TweenEase"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$oF"</e></m></meta>\n\t</tween>\n\t<toEaseFunction set="method" line="75">\n\t\t<f a="ease">\n\t\t\t<e path="ez.TweenEase"/>\n\t\t\t<t path="kit.animation.EaseFunction"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$qF"</e></m></meta>\n\t</toEaseFunction>\n\t<new set="method" line="38"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    Td.__rtti = '<class path="ez.display.AlphaTo" params="">\n\t<extends path="ez.TweenAction"/>\n\t<to public="1" line="35"><x path="Float"/></to>\n\t<duration public="1" line="37"><x path="Float"/></duration>\n\t<ease public="1" line="38"><e path="ez.TweenEase"/></ease>\n\t<onRunAsync public="1" set="method" line="40" override="1">\n\t\t<f a="input">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$kF"</e></m></meta>\n\t</onRunAsync>\n\t<new set="method" line="33"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    xb.USE_CACHE = !1;
    xb.USE_ENUM_INDEX = !1;
    xb.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    $a.DEFAULT_RESOLVER = ga;
    $a.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Qb.count = 0;
    Rb.i64tmp = new sg(0, 0);
    fc.escapes = function(a) {
        a = new W;
        null != Za.lt ? a.setReserved("lt", "<") : a.h.lt = "<";
        null != Za.gt ? a.setReserved("gt", ">") : a.h.gt = ">";
        null != Za.amp ? a.setReserved("amp", "&") : a.h.amp = "&";
        null != Za.quot ? a.setReserved("quot", '"') : a.h.quot = '"';
        null != Za.apos ? a.setReserved("apos",
            "'") : a.h.apos = "'";
        return a
    }(this);
    V.__toStr = {}.toString;
    ic.BYTES_PER_ELEMENT = 1;
    aa.$RG = new Bg;
    jc.$rG = new jc;
    Ra.$GH = new Nc(null, null);
    z.root = new aa;
    z.uncaughtError = new za;
    z.lowMemoryWarning = new $b;
    z.hidden = new La(!1);
    z.volume = new la(1);
    z.$KH = jc.$rG;
    Mb.$jH = function() { var a = null != (new XMLHttpRequest).withCredentials;
        a || null; return a }();
    he.__rtti = '<class path="kit.creator.Camera" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<following public="1" line="36"><c path="kit.Entity"/></following>\n\t<zoom public="1">\n\t\t<c path="kit.animation.AnimatedFloat"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</zoom>\n\t<active public="1" line="42">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</active>\n\t<offsetX public="1" line="44"><x path="Float"/></offsetX>\n\t<offsetY public="1" line="45"><x path="Float"/></offsetY>\n\t<onStart public="1" set="method" line="49" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<onUpdate public="1" set="method" line="73" override="1"><f a="dt">\n\t<x path="Float"/>\n\t<x path="Void"/>\n</f></onUpdate>\n\t<updateLayers set="method" line="78">\n\t\t<f a="sceneSprite">\n\t\t\t<c path="kit.creator.SceneSprite"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta>\n\t\t\t<m n=":native"><e>"$mH"</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t</meta>\n\t</updateLayers>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t</meta>\n</class>';
    qd.__rtti = '<class path="kit.creator.GroupAction" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<subActions public="1" set="null" line="34">\n\t\t<c path="Array"><c path="kit.creator.CreatorAction"/></c>\n\t\t<meta>\n\t\t\t<m n=":Creator"><e>visible=false</e></m>\n\t\t\t<m n=":allow"><e>kit</e></m>\n\t\t</meta>\n\t</subActions>\n\t<onRunAsync public="1" set="method" line="36" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<t path="kit.util.Promise0"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$kF"</e></m></meta>\n\t</onRunAsync>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    E.$WI = new Ab;
    E.$XI = new gb;
    E.$YI = new je;
    Ta.$zI = new fb;
    Sa.__rtti = '<class path="kit.creator.ui.Widget" params="">\n\t<extends path="kit.creator.CreatorObject"/>\n\t<_scratchRect line="131" static="1">\n\t\t<c path="kit.math.Rectangle"/>\n\t\t<meta><m n=":native"><e>"$zI"</e></m></meta>\n\t</_scratchRect>\n\t<pointerEnabled public="1" line="40">\n\t\t<x path="Bool"/>\n\t\t<meta><m n=":Creator"><e>initial=true</e></m></meta>\n\t</pointerEnabled>\n\t<onPointerDown public="1" line="42"><c path="String"/></onPointerDown>\n\t<onPointerIn public="1" line="43"><c path="String"/></onPointerIn>\n\t<onPointerOut public="1" line="44"><c path="String"/></onPointerOut>\n\t<onPointerUp public="1" line="45"><c path="String"/></onPointerUp>\n\t<onClick public="1" line="47"><c path="String"/></onClick>\n\t<dockX public="1" line="50"><e path="kit.creator.ui.DockX"/></dockX>\n\t<dockY public="1" line="51"><e path="kit.creator.ui.DockY"/></dockY>\n\t<cameraEnabled line="54">\n\t\t<e path="kit.creator.ui.CameraSetting"/>\n\t\t<meta><m n=":Creator"><e>visible=false</e></m></meta>\n\t</cameraEnabled>\n\t<onStart public="1" set="method" line="56" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<addListener params="A" set="method" line="122">\n\t\t<f a="signal:message">\n\t\t\t<c path="kit.util.Signal1"><c path="addListener.A"/></c>\n\t\t\t<c path="String"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$BJ"</e></m></meta>\n\t</addListener>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":Creator"><e>visible=false</e></m>\n\t</meta>\n</class>';
    Sa.$zI = new fb;
    sd.__rtti = '<class path="kit.creator.ui.BitmapText" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<textAlign public="1" line="36"><e path="kit.display.TextAlign"/></textAlign>\n\t<font public="1"><c path="String"/></font>\n\t<letterSpacing public="1" line="38"><x path="Float"/></letterSpacing>\n\t<lineSpacing public="1" line="39"><x path="Float"/></lineSpacing>\n\t<text public="1" line="42">\n\t\t<c path="String"/>\n\t\t<meta><m n=":Creator"><e>initial="Your text"</e></m></meta>\n\t</text>\n\t<textScale public="1" line="45">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=1</e></m></meta>\n\t</textScale>\n\t<onStart public="1" set="method" line="47" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<getTextSprite public="1" set="method" line="70">\n\t\t<f a=""><c path="kit.display.TextSprite"/></f>\n\t\t<meta><m n=":native"><e>"$CJ"</e></m></meta>\n\t</getTextSprite>\n\t<updateTextSprite set="method" line="75">\n\t\t<f a="addListeners">\n\t\t\t<x path="Bool"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$DJ"</e></m></meta>\n\t</updateTextSprite>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    sd.ENTITY_SLOT = 1;
    wc.__rtti = '<class path="kit.creator.ui.Button" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<pressDistance public="1" line="33">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=10</e></m></meta>\n\t</pressDistance>\n\t<onStart public="1" set="method" line="35" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    wc.ENTITY_SLOT = 1;
    td.__rtti = '<class path="kit.creator.ui.Text" params="">\n\t<extends path="kit.creator.ui.Widget"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<font public="1" line="36"><c path="String"/></font>\n\t<systemFont public="1" line="37"><c path="String"/></systemFont>\n\t<text public="1" line="40">\n\t\t<c path="String"/>\n\t\t<meta><m n=":Creator"><e>initial="Your text"</e></m></meta>\n\t</text>\n\t<fontSize public="1" line="43">\n\t\t<x path="Float"/>\n\t\t<meta><m n=":Creator"><e>initial=24</e></m></meta>\n\t</fontSize>\n\t<bold public="1" line="45"><x path="Bool"/></bold>\n\t<italic public="1" line="46"><x path="Bool"/></italic>\n\t<color public="1" line="49">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator">\n\t<e>initial="#000000"</e>\n\t<e>format=color</e>\n</m></meta>\n\t</color>\n\t<strokeColor public="1" line="52">\n\t\t<x path="Int"/>\n\t\t<meta><m n=":Creator">\n\t<e>initial="#ffffff"</e>\n\t<e>format=color</e>\n</m></meta>\n\t</strokeColor>\n\t<strokeWidth public="1" line="54"><x path="Float"/></strokeWidth>\n\t<lineSpacing public="1" line="56"><x path="Float"/></lineSpacing>\n\t<textAlign public="1" line="58"><e path="kit.display.TextAlign"/></textAlign>\n\t<onStart public="1" set="method" line="60" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<updateTextSprite set="method" line="91">\n\t\t<f a="addListeners">\n\t\t\t<x path="Bool"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$DJ"</e></m></meta>\n\t</updateTextSprite>\n\t<new public="1" set="method" line="37"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    td.ENTITY_SLOT = 1;
    Kc.$wJ = new Ve(10);
    Nb.$YN = new Sg;
    hb.$YN = new Tg;
    bb.$YN = new Ug;
    ua.__meta__ = {
        obj: {
            injected: [{
                scenes: { ScreenGameplayHelp: ["gameplay_ui"], ScreenRecipeSelect: ["gameplay_ui"], ScreenEndGame: ["gameplay_ui"], ScreenLoadingMinigame: ["gameplay_ui"], Preload: ["bootstrap"], ScreenGameplayPause: ["gameplay_ui"], ScreenLoading: ["bootstrap"], ScreenGameplayHud: ["gameplay_ui"], ScreenSplash: ["bootstrap"], ScreenQuitConfirm: ["gameplay_ui"], ScreenRecipeOverview: ["gameplay_ui"] },
                maxHeight: 660,
                scaleMode: 1,
                height: 660,
                id: "com.nick.kitchen",
                orientation: "landscape",
                fullscreen: !0,
                maxWidth: 1024,
                assets: {
                    fonts_en_simple: [{ bytes: 12013, md5: "Mi7StaUzzXtpMAVllIsLSg", name: "Basic.fnt" }, { bytes: 56453, md5: "3hzA6mCZVhWF_cnnqrtwqA", name: "Basic.png" }],
                    property_spongebob: [{ bytes: 615, md5: "jXJ15rdPTK69E9ovVzS0ew", name: "property_spongebob.json" }, { bytes: 319602, md5: "0ZB24cakm5AdQ-0qfQxp2A", name: "nick_kitchen_bg_sb.jpg" }, { bytes: 224008, md5: "9yc9Tvc8UnC0bJvib6pEXQ", name: "nick_kitchen_fg_sb.png" }, {
                        bytes: 149525,
                        md5: "Y5jBUlm-X6PgUIhgL6mOpQ",
                        name: "sb_music.mp3"
                    }, { bytes: 191357, md5: "NyIMbRpVfyCCnJ0s4PbU4A", name: "sb_music.ogg" }, { bytes: 303669, md5: "4jRQynzyolzKH1w1keCcmw", name: "property_spongebob_0.png" }],
                    gameplay_audio: [{ bytes: 38582, md5: "18-y4KS8dN5n-mh4I3FXhg", name: "applause_high.mp3" }, { bytes: 37930, md5: "Ad5q531qBdqgOj_EufyvEw", name: "applause_high.ogg" }, { bytes: 23709, md5: "Znsop15paPDaSlScaWbeMA", name: "applause_low.mp3" }, { bytes: 25466, md5: "GipjNYkdc-Mln_WxLAviJQ", name: "applause_low.ogg" }, { bytes: 40219, md5: "B5iYS2kBLqnXVxBdSP3TwQ", name: "applause_mid.mp3" },
                        { bytes: 38835, md5: "oKxiGnz_F-fHVJkl71eSSw", name: "applause_mid.ogg" }, { bytes: 21196, md5: "E6u1keZaJ4af6jtMWTIJUw", name: "blend.mp3" }, { bytes: 20325, md5: "GI1yR_MHmPljD-jOaUA9dQ", name: "blend.ogg" }, { bytes: 7101, md5: "y2x_ZCfY0Enlp7vlOqLpFg", name: "boil.mp3" }, { bytes: 9008, md5: "5XaeZJ8yuvn_n-1_Te_PqA", name: "boil.ogg" }, { bytes: 4551, md5: "NHPAlDYuXQSpJ9-vSy3X7A", name: "chop.mp3" }, { bytes: 5890, md5: "vGnKLPH7_BmYsXT6pa_nWw", name: "chop.ogg" }, { bytes: 1053, md5: "SGRGG6-kr48GP47ByEBzvQ", name: "countdown.mp3" }, {
                            bytes: 4349,
                            md5: "0VIycXUD5YK8PcTAinDEfg",
                            name: "countdown.ogg"
                        }, { bytes: 43102, md5: "yTzpIL_nFlv4oZ8zqEk4uw", name: "drumroll.mp3" }, { bytes: 30397, md5: "Bm6NIeoMv_hQvV9ZujzXYw", name: "drumroll.ogg" }, { bytes: 4625, md5: "InmtDSH0YazvVWA2Ufz0pw", name: "end_countdown_sfx.mp3" }, { bytes: 7460, md5: "W2YlxqseYXbUzzolbqoVHQ", name: "end_countdown_sfx.ogg" }, { bytes: 8820, md5: "Fie8sTzwvHnDq-VLfg_pZw", name: "fail.mp3" }, { bytes: 9033, md5: "JXw616ha_mGi3vAU_QOVmg", name: "fail.ogg" }, { bytes: 2998, md5: "2kieZnyKhCBk3lA79un5dQ", name: "flip.mp3" }, {
                            bytes: 4998,
                            md5: "CA8oTBPwwwC3pgxJXIinZg",
                            name: "flip.ogg"
                        }, { bytes: 8882, md5: "avdVbQ-tM9Y77rZsqlIQKg", name: "gameplay_stinger.mp3" }, { bytes: 12197, md5: "PnIjygYGS3Sn12LpWty59Q", name: "gameplay_stinger.ogg" }, { bytes: 98952, md5: "yz32L7WHxENPnX7D5eK0Sw", name: "gameplay_music.mp3" }, { bytes: 138851, md5: "UDaxkXUqqJkVlrR5L8HDhA", name: "gameplay_music.ogg" }, { bytes: 9105, md5: "0-uJ8GjoLmejfYlS6qRMEQ", name: "judge_reveal_score.mp3" }, { bytes: 8452, md5: "3XusPwuJrYC4omGx34QpjQ", name: "judge_reveal_score.ogg" }, { bytes: 49946, md5: "KeTTs2eAycVFOndfMqLueA", name: "judge_scene_music.mp3" },
                        { bytes: 8882, md5: "2xApoL0dP9jcIlFZFljY7w", name: "menu_stinger.mp3" }, { bytes: 12070, md5: "vo0VFg8tgKmx2o5jlyyclg", name: "menu_stinger.ogg" }, { bytes: 6974, md5: "K471ss3LjYYQuOezx3bisQ", name: "perfect.mp3" }, { bytes: 6380, md5: "xPHp49vqmJQt-VqWMbsU0w", name: "perfect.ogg" }, { bytes: 70936, md5: "cdj_likV40IRmwu5Xe1BFw", name: "judge_scene_music.ogg" }, { bytes: 8594, md5: "GU7lUT9LbqzKXR28BmLOXw", name: "perfect_job.mp3" }, { bytes: 106266, md5: "tZz9lpjA6ceW__IzImZzgA", name: "menu_music.mp3" }, { bytes: 7237, md5: "bW6TIqUEpVd8cH8QIZ7tdA", name: "perfect_job.ogg" },
                        { bytes: 2113, md5: "XTEpKUCy7YnmFf7ALYDlzA", name: "pick_up.mp3" }, { bytes: 4819, md5: "d1xH0ompgDryTmWGV-SvLg", name: "pick_up.ogg" }, { bytes: 141841, md5: "xezAzIPXurmzejUl5-djiA", name: "menu_music.ogg" }, { bytes: 492, md5: "1Ej84_x3aQrkGgZq_H4qPw", name: "pit_pop.mp3" }, { bytes: 4047, md5: "4CtzfPP7onBsj0C4lpewlg", name: "pit_pop.ogg" }, { bytes: 3465, md5: "aFJW2RRX4WOhVhiWvtlqpA", name: "pit_skin.mp3" }, { bytes: 6379, md5: "jKEb9rUnmKZMXEwVUvg4VQ", name: "pit_skin.ogg" }, { bytes: 3562, md5: "XYnUwXgNbhds7dD5atVGMg", name: "pit_skin_off.mp3" }, {
                            bytes: 6083,
                            md5: "DO_wNuWJT0sHzhJBfwX2mQ",
                            name: "pit_skin_off.ogg"
                        }, { bytes: 7130, md5: "eFgzf0znXbBp2qBDnje4tg", name: "place_item_bad.mp3" }, { bytes: 8921, md5: "qUPQazgT39ahqotCodlAIQ", name: "place_item_bad.ogg" }, { bytes: 4246, md5: "JGu9eCJ4P_HqKhV3vKr8kA", name: "place_item_correct.mp3" }, { bytes: 6616, md5: "3khCfp9VV55iOYykx0Uwlw", name: "place_item_correct.ogg" }, { bytes: 4889, md5: "4us1i0Zri01FsOgnPSJfGw", name: "platter_up.mp3" }, { bytes: 6890, md5: "dTec0JIM51LqLI20w-4JCg", name: "platter_up.ogg" }, {
                            bytes: 4242,
                            md5: "Xp2pW-1nX4Poo-D-f7e7nw",
                            name: "pound.mp3"
                        }, { bytes: 6544, md5: "CLuM1STrEsHBsSUo35Un-A", name: "pound.ogg" }, { bytes: 18123, md5: "oxBniN-VNhJrgmVF9Tmz-Q", name: "pour.mp3" }, { bytes: 17295, md5: "fAQ-R2buzCVyBGuzLDm1_w", name: "pour.ogg" }, { bytes: 5307, md5: "UWflCK8KNVY5uZoSsMm3Dg", name: "rice_pour.mp3" }, { bytes: 13102, md5: "LaUC8RcGWm5w3QjhF1Lg6Q", name: "rice_pour.ogg" }, { bytes: 8041, md5: "Zv7b7zZ5OvAwlcCJL8uqDQ", name: "sizzle.mp3" }, { bytes: 9264, md5: "5FXjmGrcq1bX_Lfu82-zcg", name: "sizzle.ogg" }, { bytes: 3589, md5: "aJ13mGd4uU43ZiUYwj973g", name: "slice.mp3" },
                        { bytes: 5819, md5: "6igmuNRn95XBFEws4ERxYA", name: "slice.ogg" }, { bytes: 10388, md5: "vcqIF2LEcCUvlMv7O0GsAw", name: "splash.ogg" }, { bytes: 4674, md5: "aQtUjry91f3iTc4mfjgYqQ", name: "splash.mp3" }, { bytes: 2470, md5: "J_OWcObHswoQLWcUetCzOQ", name: "splat.mp3" }, { bytes: 6193, md5: "lv8M9E6Jffb01_lF-TIhFg", name: "splat.ogg" }, { bytes: 3544, md5: "K8U5hf1Qk31O-buBh_kfFA", name: "spread.mp3" }, { bytes: 6417, md5: "BXsPZQNltJT-1ghTXamoNA", name: "spread.ogg" }, { bytes: 8124, md5: "oiv0HBGj7l6NG2zTorb5yw", name: "start_game.mp3" }, {
                            bytes: 8966,
                            md5: "0sm0T-1dRiO_yB9VCsOIHg",
                            name: "start_game.ogg"
                        }, { bytes: 2871, md5: "9m3Y3PkrB5wCj-bfxwC3JQ", name: "toast_down.mp3" }, { bytes: 5334, md5: "FneegzT0lXUKaFcR-ye6Aw", name: "toast_down.ogg" }, { bytes: 2296, md5: "WxxU83UoNAG1DUlgHbKERg", name: "tray_close.mp3" }, { bytes: 4646, md5: "PlbGYp52we7moDcJ8fhmcA", name: "tray_close.ogg" }, { bytes: 3647, md5: "yR2Trq7GmYnewiDZrOSO1Q", name: "tray_reveal.mp3" }, { bytes: 5466, md5: "u4IPlrCoJvvxzQclJXaY9w", name: "tray_reveal.ogg" }, { bytes: 18180, md5: "I7FNjVshrTyTjmUT5A5wWw", name: "judge_vo/double_g_bad.mp3" }, {
                            bytes: 7204,
                            md5: "vgdvGjbYCypSn-eZu7rJvQ",
                            name: "judge_vo/double_g_bad.ogg"
                        }, { bytes: 23195, md5: "UllyWf4jfcul69srlYOv8Q", name: "judge_vo/double_g_good.mp3" }, { bytes: 7979, md5: "Nzpg6aYfMg8-T1NAxif7yg", name: "judge_vo/double_g_good.ogg" }, { bytes: 18180, md5: "aGwtAoEH72EOQrW-NK_Erg", name: "judge_vo/double_g_perfect.mp3" }, { bytes: 7273, md5: "e8-Ek-FFIVGYQ3D9ddXe5Q", name: "judge_vo/double_g_perfect.ogg" }, { bytes: 18180, md5: "KVNjJ_NJGG53dBl-9iX2rw", name: "judge_vo/krabs_bad.mp3" }, { bytes: 7197, md5: "qaR1_1-hbza0VzyEvTCY0w", name: "judge_vo/krabs_bad.ogg" }, {
                            bytes: 50781,
                            md5: "z1TaEoJDNtaYvf9KqECsYw",
                            name: "judge_vo/krabs_bad2.mp3"
                        }, { bytes: 14692, md5: "to0ghIVnrqu7hkRBe80npw", name: "judge_vo/krabs_bad2.ogg" }, { bytes: 21315, md5: "7G6tljuJEZBdUqUwFzKAGw", name: "judge_vo/krabs_good.mp3" }, { bytes: 7412, md5: "Rg7R38wBy_FJCNcEJMlXlw", name: "judge_vo/krabs_good.ogg" }, { bytes: 57050, md5: "qKByDIWr59vSQW5bHm7ZUA", name: "judge_vo/krabs_good2.mp3" }, { bytes: 16061, md5: "_ONwLqykGImSCe13DU4Zhw", name: "judge_vo/krabs_good2.ogg" }, { bytes: 19315, md5: "CA3o1SEHurOOG2Fy2bN5Kg", name: "judge_vo/krabs_perfect.ogg" },
                        { bytes: 6559, md5: "STSv0WZKjj2jBG8i5MCtCw", name: "judge_vo/schwoz_bad.ogg" }, { bytes: 16299, md5: "VeJ6EIvaYiLOLh85kQ3Ivg", name: "judge_vo/schwoz_bad.mp3" }, { bytes: 3339, md5: "VDhX8XNmehfJ2CwWMlXKhw", name: "judge_vo/schwoz_good.mp3" }, { bytes: 5904, md5: "3em-bNKz7X5Tz3DweGbNiw", name: "judge_vo/schwoz_good.ogg" }, { bytes: 72724, md5: "4Nk4HALXSFXTO4gEp0eh9g", name: "judge_vo/krabs_perfect.mp3" }, { bytes: 33226, md5: "75H5w_LEobh8ald0aDXxMQ", name: "judge_vo/schwoz_okay.mp3" }, { bytes: 8881, md5: "gFrQF3Dd3qzaXJk79_ZKeQ", name: "judge_vo/schwoz_okay.ogg" },
                        { bytes: 6385, md5: "rjqhFXscCq20sF7CGDLI_A", name: "judge_vo/schwoz_perfect.mp3" }, { bytes: 8490, md5: "D5WDimxZY7ZjqbBZ-GwbVw", name: "judge_vo/schwoz_perfect.ogg" }
                    ],
                    univ_minigame_slice: [{ bytes: 2953, md5: "l2JeC-iuL3DXowfHPFlK8g", name: "slice_bad_a.png" }, { bytes: 2959, md5: "QukW2riu5BJkS1MEMb4jzQ", name: "slice_bad_b.png" }, { bytes: 2306, md5: "5_RJZhLr_iOSzna1kvQhRQ", name: "slice_good_a.png" }, { bytes: 2260, md5: "3pFXZ7zW1wdXvZnkDUDu9A", name: "slice_good_b.png" }, { bytes: 253, md5: "RNeIsfymmMsTzMzHC6Jk4w", name: "univ_minigame_slice.json" },
                        { bytes: 62239, md5: "DzqPSnyc7U4AG5W9urWXxA", name: "univ_minigame_slice_0.png" }
                    ],
                    gameplay_ui: [{ bytes: 11E3, md5: "Uzv2QU1G78P_rXKjBUfy1g", name: "ScreenEndGame.scene" }, { bytes: 2500, md5: "1kc7s7Nz54Z_mmFZ1s6dMw", name: "ScreenGameplayHud.scene" }, { bytes: 5528, md5: "tD2bS6hdiEzCKoJZZMA0iA", name: "ScreenGameplayHelp.scene" }, { bytes: 8231, md5: "dioNqoyBYU1YKDn4-n5qHQ", name: "ScreenGameplayPause.scene" }, { bytes: 7763, md5: "9yQSKrHcgjwkTrbLOWHc7g", name: "ScreenLoadingMinigame.scene" }, { bytes: 5971, md5: "P11buwSm6yDeyMWmHT52ig", name: "ScreenQuitConfirm.scene" },
                        { bytes: 5958, md5: "eYE6nViE1NLAVc_yG4BhrA", name: "ScreenRecipeOverview.scene" }, { bytes: 10534, md5: "adrW4yIbiQxOI-W7ic9Ffg", name: "ScreenRecipeSelect.scene" }, { bytes: 5908, md5: "4fPiNhffAfkE6l75pmuWzA", name: "ui/menu/button_confirm.png" }, { bytes: 7189, md5: "Ks2e0cqHvtbV3uWxikOg8A", name: "ui/menu/button_green.png" }, { bytes: 7280, md5: "bimkWbyRtmH2rA5QU61vMA", name: "ui/menu/button_help.png" }, { bytes: 5839, md5: "HIy6KnPtJh2SxcgJ5CLB5g", name: "ui/menu/button_pause.png" }, { bytes: 4859, md5: "Uovv0Nufpt461fkQ-d3Gww", name: "ui/menu/button_play.png" },
                        { bytes: 3042, md5: "DEfk2hZSAT8dKR39EN69zA", name: "ui/menu/button_vol_off_big.png" }, { bytes: 9575, md5: "q_-VCbmmh_U6X01P4o3fWg", name: "ui/menu/button_vol_on_big.png" }, { bytes: 8742, md5: "1gJKYwrpTOsnNaHgSYKzxg", name: "ui/menu/button_x.png" }, { bytes: 31570, md5: "t69DBT6iOdrvgCEPsEfDpg", name: "ui/menu/button_yes.png" }, { bytes: 114544, md5: "fgAKa3mL_a2AforYY-pjVw", name: "ui/menu/pause_menu.png" }
                    ],
                    recipe_spongecake: [{ bytes: 2886, md5: "vGcuxNdDsaXp0EfX_pE_rg", name: "recipe_spongecake.json" }, {
                        bytes: 340691,
                        md5: "UJ24xMA95qk00HS4I51GsA",
                        name: "recipe_spongecake_0.png"
                    }],
                    recipe_juice_blend: [{ bytes: 2922, md5: "p54jty9MaKLu3Yivra6w7A", name: "recipe_juice_blend.json" }, { bytes: 149166, md5: "Rch6kZGCewtlfd1vNy1iww", name: "recipe_juice_blend_1.png" }, { bytes: 472543, md5: "N-qUlbJwpJNZywmGPVE8LQ", name: "recipe_juice_blend_0.png" }],
                    recipe_muffins: [{ bytes: 3037, md5: "-N6CT5quwSuH-KUkRWJwdQ", name: "recipe_muffins.json" }, { bytes: 114171, md5: "GQwnV-fk6WS-S5yhF2xYzQ", name: "recipe_muffins-2.png" }, { bytes: 713710, md5: "Qmkx8KR3L-U_Usv05cXIKg", name: "recipe_muffins-1.png" },
                        { bytes: 668956, md5: "Dn95Qh6X9aGe0WiK6-nKKQ", name: "recipe_muffins.png" }
                    ],
                    property_henry_danger: [{ bytes: 615, md5: "CBB7Hu0fHAKiNU5nDZgyaw", name: "property_henry_danger.json" }, { bytes: 223281, md5: "KX4CxS7UTkp1hjfuH7qf5g", name: "nick_kitchen_fg_hd.png" }, { bytes: 211662, md5: "LToymXkmURL_sxGP6_4h-A", name: "property_henry_danger_0.png" }, { bytes: 359018, md5: "Prb49BheuHNTafxH1k9CoA", name: "nick_kitchen_bg_hd.jpg" }],
                    recipe_hollandoats: [{ bytes: 3987, md5: "pfhZfwyxkH5g3jnyTSEQOA", name: "recipe_hollandoats.json" }, {
                        bytes: 196649,
                        md5: "SL4dg1AdrWd5-kZvslXubg",
                        name: "recipe_hollandoats_1.png"
                    }, { bytes: 630654, md5: "V2ea--AngvnUW1Jrbeo24g", name: "recipe_hollandoats_0.png" }],
                    recipe_toast: [{ bytes: 1473, md5: "dYJJuRO9vET4jsD9ytr9QQ", name: "recipe_toast.json" }, { bytes: 186400, md5: "7xCXVdY8rSth5JNL6W-V1Q", name: "recipe_toast_1.png" }, { bytes: 496981, md5: "eYm4loAupQXSQDoPrQ_ZmA", name: "recipe_toast_0.png" }],
                    bootstrap: [{ bytes: 6311, md5: "5TU183x25raE1mOOb-GXWg", name: "Preload.scene" }, { bytes: 8210, md5: "DnolV2BRcc376ArpvJUpOA", name: "ScreenLoading.scene" },
                        { bytes: 8578, md5: "nqqGb3R5SUobuGxudB2gJQ", name: "ScreenSplash.scene" }, { bytes: 5039, md5: "bMA2n6MkOCUTMMetxSSGKw", name: "audio/button_click.ogg" }, { bytes: 2117, md5: "bv9uPXdWBFUKXw0udlm2Cw", name: "audio/button_click.mp3" }, { bytes: 2114, md5: "s49FcObo0I_e9kD7kAyKLw", name: "audio/silent.mp3" }, { bytes: 3864, md5: "qwkNis-8lzry3vF8QDtLLg", name: "audio/silent.ogg" }, { bytes: 16823, md5: "jwO-HdkYRfwxpDEvU3pXsA", name: "audio/splash_stinger.mp3" }, { bytes: 20503, md5: "XgtRvBvRTUEr668E_2ahIA", name: "audio/splash_stinger.ogg" }, {
                            bytes: 926,
                            md5: "gIT--qPHcwcX8daq5JeUig",
                            name: "config/config.xml"
                        }, { bytes: 10445, md5: "lPvdqk6uwTsAqi8bNmTepA", name: "fonts/Arial-hd.fnt" }, { bytes: 2591, md5: "G9pgiCxm6x4XPX0uO40chg", name: "ui/bootstrap_0.json" }, { bytes: 49007, md5: "EGtsjsmab6K3jrktpQe5IA", name: "fonts/Arial-hd.png" }, { bytes: 17693, md5: "HkD2YbLEHV59BTbxm6NNCw", name: "ui/splash_nick_logo.png" }, { bytes: 106266, md5: "mjA2TvCGVqVvGnFHvDoIzg", name: "audio/splash_music.mp3" }, { bytes: 124142, md5: "O97Y8Dax80Xybf-fZgC9UQ", name: "audio/splash_music.ogg" }, {
                            bytes: 82995,
                            md5: "deyqO_8XcPQeRJ6SSbNEwQ",
                            name: "ui/nick_kitchen_main_menu_fg.png"
                        }, { bytes: 263290, md5: "4qm2JsRbqRQMDpjbECrB8Q", name: "ui/nick_kitchen_main_menu_bg.jpg" }, { bytes: 491681, md5: "KWaF1154pbu9l86BdrRsag", name: "ui/bootstrap_0.png" }, { bytes: 37401, md5: "x83343peVWAWzsWg3BCV4A", name: "ui/splash_text.png" }, { bytes: 742228, md5: "OsxeY7TLdGXXGu7kGcdStA", name: "ui/nick_kitchen_splash_v021.jpg" }
                    ],
                    recipe_sushi: [{ bytes: 1974, md5: "6BXh_kDkHG2SDI8QWbFXJA", name: "recipe_sushi.json" }, { bytes: 395009, md5: "m7rHsntJI5Z3WsSc5GEyXg", name: "recipe_sushi_0.png" }],
                    recipe_krabbypatty: [{
                        bytes: 4910,
                        md5: "b7rmhSs-ug1EIv4hfcjUhA",
                        name: "recipe_krabbypatty.json"
                    }, { bytes: 494960, md5: "mc98w2Vgb7Bk9vajN7wbsg", name: "recipe_krabbypatty_0.png" }, { bytes: 524729, md5: "b-o8chl1uM6k81i3bbkqhw", name: "recipe_krabbypatty_1.png" }],
                    recipe_steak: [{ bytes: 6866, md5: "8ZoJzQkluWh7_LTUP1zvPg", name: "recipe_steak.json" }, { bytes: 253337, md5: "J2viVFfe9svXX5FcbWJa9g", name: "recipe_steak_2.png" }, { bytes: 156560, md5: "YHE0ZfAQEUI6IbDtMDCbJw", name: "recipe_steak_3.png" }, { bytes: 174742, md5: "wwWPtnR6mPiYPpWA9YEfcw", name: "recipe_steak_4.png" },
                        { bytes: 122377, md5: "K21wWYLIUjadzKwDjfug_g", name: "recipe_steak_6.png" }, { bytes: 392641, md5: "bfbMYjFqmnqDR2HeOojcEg", name: "recipe_steak_0.png" }, { bytes: 170349, md5: "0deIkokD621t2Kxdfv0gzw", name: "recipe_steak_5.png" }, { bytes: 117767, md5: "rOMCgld7iuBzCe_0YEe2Rw", name: "recipe_steak_8.png" }, { bytes: 139730, md5: "zMLR-fnt2WZFJAKYPrcOlw", name: "recipe_steak_7.png" }, { bytes: 471238, md5: "v12WYx0kCcweh4ASiVdohA", name: "recipe_steak_1.png" }
                    ],
                    univ_minigame_pit: [{ bytes: 730, md5: "aUNPpxP53sAritZhW3wPTQ", name: "universal_minigame_pit.json" },
                        { bytes: 81560, md5: "d74cR1n8r-2avhDhg9_GXA", name: "univ_minigame_pit_0.png" }
                    ],
                    _2DKitOrientation: [{ bytes: 3720, md5: "mvAlyYTf1LRKK4k4-E_lsA", name: "RotateDevice.png" }],
                    fonts_ru: [{ bytes: 52507, md5: "BAEl1oajGqdD8UnDnXH80g", name: "Basic.fnt" }, { bytes: 20085, md5: "f7B0gjgWBrk7oNydhgPsmg", name: "translation.xml" }, { bytes: 375602, md5: "XmY6J3XxuF8KT0WwvVJarQ", name: "Basic.png" }],
                    fonts_la: [{ bytes: 49416, md5: "lEnjl6PamIQveXYgyLPBow", name: "Basic.fnt" }, { bytes: 20085, md5: "f7B0gjgWBrk7oNydhgPsmg", name: "translation.xml" }, {
                        bytes: 337781,
                        md5: "wNZLFzsfffTiFECCZS_vNQ",
                        name: "Basic.png"
                    }],
                    fonts_kr: [{ bytes: 49416, md5: "lEnjl6PamIQveXYgyLPBow", name: "Basic.fnt" }, { bytes: 20085, md5: "f7B0gjgWBrk7oNydhgPsmg", name: "translation.xml" }, { bytes: 337781, md5: "wNZLFzsfffTiFECCZS_vNQ", name: "Basic.png" }],
                    fonts_jp: [{ bytes: 49416, md5: "lEnjl6PamIQveXYgyLPBow", name: "Basic.fnt" }, { bytes: 20085, md5: "f7B0gjgWBrk7oNydhgPsmg", name: "translation.xml" }, { bytes: 337781, md5: "wNZLFzsfffTiFECCZS_vNQ", name: "Basic.png" }],
                    fonts_en: [{ bytes: 12021, md5: "PWT-ahD4AYsL6gU2DKv5Mg", name: "Basic.fnt" },
                        { bytes: 20085, md5: "f7B0gjgWBrk7oNydhgPsmg", name: "translation.xml" }, { bytes: 144991, md5: "PIVd_XixgwYfRqcgIrgSBw", name: "Basic.png" }
                    ],
                    fonts_cn: [{ bytes: 49416, md5: "lEnjl6PamIQveXYgyLPBow", name: "Basic.fnt" }, { bytes: 20085, md5: "f7B0gjgWBrk7oNydhgPsmg", name: "translation.xml" }, { bytes: 337781, md5: "wNZLFzsfffTiFECCZS_vNQ", name: "Basic.png" }],
                    recipe_kelpshake: [{ bytes: 3720, md5: "EMqGS0i-R2UYL9fvAlo3aQ", name: "recipe_kelpshake.json" }, { bytes: 166015, md5: "MsIh0xcPPq1WQcnxjaE6kw", name: "recipe_kelpshake_2.png" }, {
                        bytes: 455969,
                        md5: "hprmP6_OOzNo1YuC6uh7OA",
                        name: "recipe_kelpshake_1.png"
                    }, { bytes: 705089, md5: "2cHvJoTIameoVpRw-5CROA", name: "recipe_kelpshake_0.png" }],
                    recipe_doughnut: [{ bytes: 3070, md5: "0f9ZbeuURS09v_GucAlFdQ", name: "recipe_doughnut.json" }, { bytes: 492082, md5: "tA_tuB6vUb02p5_FM9HSKA", name: "recipe_doughnut_0.png" }],
                    property_gameshakers: [{ bytes: 759, md5: "D1aM8SQtc2MHm-sTomTtOg", name: "property_gameshakers.json" }, { bytes: 219626, md5: "ED0T8yt-w7gCYL4lRD9d_Q", name: "nick_kitchen_gameshakers_fg.png" }, {
                        bytes: 271176,
                        md5: "fHKWZagU0X6QcbQFn-vGzQ",
                        name: "property_gameshakers_0.png"
                    }, { bytes: 339724, md5: "DWnsvyARwXUIe0JfOy_NJQ", name: "nick_kitchen_gameshakers_bg.jpg" }],
                    gameplay: [{ bytes: 8647, md5: "qIkkmsZzouZ8x5DrXongKg", name: "gameplay.json" }, { bytes: 132641, md5: "u6mbBFwJ0sBb5scvLrAFEQ", name: "gameplay_9.png" }, { bytes: 278460, md5: "3sVmRFeJE__jiuT70CKQRw", name: "gameplay_5.png" }, { bytes: 67500, md5: "5XNDQhL3Z-KEbAasZ52dDA", name: "judge_table.png" }, { bytes: 365072, md5: "sQemCZNpnxYAG5qNBjoDTg", name: "gameplay_1.png" }, { bytes: 267005, md5: "xCC5kLWxBZ0cZ3IBLNgMqw", name: "gameplay_7.png" },
                        { bytes: 289589, md5: "mvE15BT7-cPs_eoJKodrew", name: "gameplay_8.png" }, { bytes: 345327, md5: "w0BZqYMY-eQ6y2XTbfg7-A", name: "gameplay_4.png" }, { bytes: 452247, md5: "zTBhBnv_PywIupcBa7MzUQ", name: "gameplay_6.png" }, { bytes: 496750, md5: "swxgw-AXVx5Cf6a3x9tXIw", name: "gameplay_2.png" }, { bytes: 545593, md5: "gD3Ee4yVbzNkZYoyx4eofg", name: "gameplay_0.png" }, { bytes: 345153, md5: "UmjWmVr_QRFNlldASx3ZTw", name: "judge_bg.jpg" }, { bytes: 699552, md5: "NSX0Y69ZcAG0dOsCTdRFAQ", name: "gameplay_3.png" }
                    ],
                    univ_minigame_boil: [{
                        bytes: 809,
                        md5: "KhJOaQclp6CodFF7j6-PEw",
                        name: "univ_minigame_boil.json"
                    }, { bytes: 55908, md5: "AN5zicOvqXX8v7TWGwdWBw", name: "univ_minigame_boil_1.png" }, { bytes: 238203, md5: "khyOuK3mnNHwzxh4P0Srxw", name: "univ_minigame_boil_0.png" }],
                    univ_minigame_grill: [{ bytes: 1409, md5: "LV_KID5t45PCBYs8esTPUA", name: "univ_minigame_grill.json" }, { bytes: 141220, md5: "b4X17a9nYqqLHmaBhYprOg", name: "univ_minigame_grill_0.png" }, { bytes: 131732, md5: "v6ZM5psaGsxzgKym2UV94Q", name: "univ_minigame_grill_1.png" }]
                },
                width: 960
            }]
        }
    };
    ha.$$R = 0;
    ha.$_R = 0;
    ha.$AS = !0;
    Q.$rS = ["webkit", "moz", "ms"];
    Q.$sS = (new q("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    ca.$kT = !0;
    Fb.$XI = new gb;
    Jh.allConfig = ["config/config.xml"];
    ma._LAYER_UI = "ui";
    wb._LOAD_PERCENT_FILES = 0.8;
    wb._LOAD_PERCENT_WORLD = 0.2;
    wb._TIME_PRE = 0.2;
    wb._TIME_LOAD_MIN = 0.3;
    wb._TIME_INIT_MIN = 0.3;
    wb._TIME_END_WAIT = 0.7;
    sc._LOAD_PERCENT_FILES = 0.8;
    sc._TIME_LOAD_MIN = 0.3;
    wf.__rtti = '<class path="screen.ui.end_game.EndGameClose" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="10" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$jF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    xf.__rtti = '<class path="screen.ui.gameplay.ButtonHelpClose" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="10" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$jF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    yf.__rtti = '<class path="screen.ui.gameplay.ButtonHelpOpen" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="10" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$jF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    zf.__rtti = '<class path="screen.ui.gameplay.ButtonMuteToggle" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="10" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$jF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Af.__rtti = '<class path="screen.ui.gameplay.ButtonPauseClose" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="10" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$jF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Bf.__rtti = '<class path="screen.ui.gameplay.ButtonPauseOpen" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="10" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$jF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Cf.__rtti = '<class path="screen.ui.gameplay.ButtonQuitConfirmNo" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="10" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$jF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Df.__rtti = '<class path="screen.ui.gameplay.ButtonQuitConfirmOpen" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="10" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$jF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="7"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    Ef.__rtti = '<class path="screen.ui.gameplay.ButtonQuitConfirmYes" params="">\n\t<extends path="kit.creator.CreatorAction"/>\n\t<onRun public="1" set="method" line="11" override="1">\n\t\t<f a="target">\n\t\t\t<c path="kit.Entity"/>\n\t\t\t<x path="Void"/>\n\t\t</f>\n\t\t<meta><m n=":native"><e>"$jF"</e></m></meta>\n\t</onRun>\n\t<new set="method" line="8"><f a=""><x path="Void"/></f></new>\n\t<meta>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":keep"/>\n\t</meta>\n</class>';
    M.assets = new Fc;
    M._assetPacks = new W;
    M._loadQueue = [];
    M.eventProgress = Ka._new();
    ba._values = new W;
    ba._defaults = new W;
    u.inputEvents = ai._new();
    u.mouseWheel = Ka._new();
    u.keyDown = Ka._new();
    u.keyUp = Ka._new();
    u.leftStick = new ib;
    u.rightStick = new ib;
    u.pointer = new Gf(-1);
    u.multiTouch = [];
    u.enabled = !1;
    u._inputTrackers = [];
    u._virtualDown = [];
    u._controllerDown = [];
    ta._localizedData = new W;
    ta.region = "";
    S._seeds = new W;
    n.voStatus = Ka._new();
    n.subtitleQueue = [];
    n._sound = [];
    n._voQueue = [];
    n._tween = new Hd;
    n._musicId = "";
    n._stateVo =
        jb.STOPPED;
    n._musicGain = 1;
    ka._timers = [];
    ka._uniqueInc = 0;
    ka._paused = !1;
    Zc.__rtti = '<class path="workinman.ui.NestContainer" params="">\n\t<extends path="ez.Actor"/>\n\t<ENTITY_SLOT public="1" get="inline" set="null" line="37" static="1"><x path="Int"/></ENTITY_SLOT>\n\t<children public="1" set="null"><x path="Map">\n\t<c path="String"/>\n\t<c path="kit.Entity"/>\n</x></children>\n\t<onStart public="1" set="method" line="14" override="1"><f a=""><x path="Void"/></f></onStart>\n\t<_testOverlap set="method" line="60"><f a="pInfo:pChild:pRoot:pTest:pScratch">\n\t<c path="kit.creator.ObjectInfo"/>\n\t<c path="kit.creator.ObjectInfo"/>\n\t<c path="kit.display.Sprite"/>\n\t<c path="kit.display.Sprite"/>\n\t<c path="kit.math.Point"/>\n\t<x path="Bool"/>\n</f></_testOverlap>\n\t<_containsPoint set="method" line="97"><f a="pTestMatrix:pRootMatrix:pTestX:pTestY:pWidth:pHeight:pScratch">\n\t<c path="kit.math.Matrix"/>\n\t<c path="kit.math.Matrix"/>\n\t<x path="Float"/>\n\t<x path="Float"/>\n\t<x path="Float"/>\n\t<x path="Float"/>\n\t<c path="kit.math.Point"/>\n\t<x path="Bool"/>\n</f></_containsPoint>\n\t<meta>\n\t\t<m n=":keep"/>\n\t\t<m n=":directlyUsed"/>\n\t\t<m n=":build"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.ComponentBuilder.build()</e></m>\n\t\t<m n=":build"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t\t<m n=":autoBuild"><e>kit.platform.CreatorBuilder.build()</e></m>\n\t</meta>\n</class>';
    Zc.ENTITY_SLOT = 1;
    Kb.completeMinigame = gc._new();
    Kb.screenShake = Ka._new();
    x.beginMinigame = gc._new();
    x.endMinigameEarly = Ka._new();
    x.abandonMinigame = gc._new();
    oc.sprinklePhase = gc._new();
    pa._KRABS_X = -265;
    pa._KRABS_Y = 255;
    pa._KRABS_SCORE_X = 150;
    pa._KRABS_SCORE_Y = -235;
    pa._DOUBLE_X = -130;
    pa._DOUBLE_Y = 340;
    pa._DOUBLE_SCORE_X = 117;
    pa._DOUBLE_SCORE_Y = -272;
    pa._SCHWOZ_X = -150;
    pa._SCHWOZ_Y = 265;
    pa._SCHWOZ_SCORE_X = 95;
    pa._SCHWOZ_SCORE_Y = -270;
    Pa.fruitPosX = [];
    Pa.fruitPosY = [];
    Pa.fruitType = [];
    Ib.particleDie = Ka._new();
    Ya.spawnParticle =
        Ka._new();
    rc.particleDie = Ka._new();
    Aa.spawnParticle = Ka._new();
    Sh.$lN()
})("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this);