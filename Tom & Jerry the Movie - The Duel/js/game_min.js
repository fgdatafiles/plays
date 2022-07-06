var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
    var g = 0;
    return function() {
        return g < a.length ? {
            done: !1,
            value: a[g++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function(a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    }
};
$jscomp.makeIterator = function(a) {
    var g = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return g ? g.call(a) : $jscomp.arrayIterator(a)
};

function LegalPanel(a) {
    var g = this,
        c = document.getElementById(a || "div_legal");
    c.style.pointerEvents = "none";
    c.style.background = "#000000";
    var f, q;
    this.hidden = !1;
    this.legalPanelHeight = 0;
    this.doResizeUpdate = function() {
        if (g.hidden) c.style.top = "-5000px";
        else {
            var m = Math.min(1, window.devicePixelRatio || 1);
            f = Math.max(Math.min(1.2 * oSTAGE.scale, oSTAGE.screen_width * oSTAGE.screen_height / (4E5 * m)), .3 / m);
            c.style.transform = c.style.webkitTransform = "scale(" + f + "," + f + ")";
            c.style.width = 1 / f * oSTAGE.screen_width + "px";
            q = Math.max(c.clientHeight) *
                f;
            c.style.left = "0px";
            c.style.top = oSTAGE.screen_height - q + "px";
            this.legalPanelHeight = (c.clientHeight - 30 * oSTAGE.scale) * oSTAGE.scale_inv / (window.devicePixelRatio || 1)
        }
    };
    a = c.appendChild(document.createElement("table"));
    a.style.margin = "0px";
    a.setAttribute("width", "100%");
    a.border = 0;
    var k = a.appendChild(document.createElement("tr"));
    k = k.appendChild(document.createElement("td"));
    k.style.textAlign = "center";
    k.setAttribute("valign", "middle");
    k.setAttribute("cellpadding", "0");
    k = a.appendChild(document.createElement("tr"));
    a = k.appendChild(document.createElement("td"));
    a.style.textAlign = "center";
    a.setAttribute("valign", "middle");
    a.setAttribute("cellpadding", "0");
    a = a.appendChild(document.createElement("div"));
    a.className = "legal_block";
    a.style.textAlign = "center";
    a.style.background = "transparent";
    a.style.textShadow = "0px 0px 8px black, 0px 0px 8px black";
    for (k = 0; k < legal_links.length; k++) {
        if ("true" == oLANG[legal_links[k].msg].visible) {
            if (legal_links[k].link) {
                var l = a.appendChild(document.createElement("a"));
                var h = "";
                oLANG[legal_links[k].msg].classAdd &&
                    (h = oLANG[legal_links[k].msg].classAdd + " ");
                h = platform.isMobile ? h + "legal_link_mobile" : h + "legal_link";
                l.className = h;
                "showBilling" === legal_links[k].link ? (l.setAttribute("onmouseup", "BILLING.doShow();"), l.setAttribute("href", "#"), l.style.cursor = "pointer") : (h = legal_links[k].link, void 0 != oLANG[legal_links[k].msg] && void 0 != oLANG[legal_links[k].msg].link && (h = oLANG[legal_links[k].msg].link), l.setAttribute("href", h), "legal_cookies" != legal_links[k].msg && l.setAttribute("target", "_blank"))
            } else l = a.appendChild(document.createElement("div")),
                l.style.pointerEvents = "none", l.prohibit_touch = !0;
            l.style.fontSize = "14px";
            __utils.doHTMLText(l, oLANG[legal_links[k].msg]);
            getTextValues(l, legal_links[k].msg)
        }("true" == oLANG[legal_links[k].msg].visible || "nl" === legal_links[k].after) && oLANG[legal_links[k].msg].after && k < legal_links.length - 1 && ("nl" === oLANG[legal_links[k].msg].after ? l = a.appendChild(document.createElement("br")) : (l = a.appendChild(document.createElement("div")), l.className = "legal_dividers", l.innerHTML = oLANG[legal_links[k].msg].after, l.prohibit_touch = !0))
    }
    g.doResizeUpdate();
    this.doHide = function() {
        g.hidden = !0;
        g.doResizeUpdate()
    };
    this.doShow = function() {
        g.hidden = !1;
        g.doResizeUpdate()
    };
    update_queue.push({
        doResizeUpdate: g.doResizeUpdate
    })
   /* var g = this,
        c = document.getElementById(a || "div_legal");
    c.style.pointerEvents = "none";
    c.style.background = "#000000";
    var h, q;
    this.hidden = !1;
    this.legalPanelHeight = 0;
    this.doResizeUpdate = function() {
        if (g.hidden) c.style.top = "-5000px";
        else {
            var w = Math.min(1, window.devicePixelRatio || 1);
            h = Math.max(Math.min((platform.isMobile ? 1.25 : 1) * oSTAGE.scale, oSTAGE.screen_width * oSTAGE.screen_height / (2E5 * w)), .4 / w);
            c.style.transform = c.style.webkitTransform = "scale(" + h + "," + h + ")";
            c.style.width = 1 / h * oSTAGE.screen_width +
                "px";
            q = Math.max(c.clientHeight) * h;
            c.style.left = "0px";
            c.style.top = oSTAGE.screen_height - q + "px";
            this.legalPanelHeight = (c.clientHeight - 30 * oSTAGE.scale) * oSTAGE.scale_inv / (window.devicePixelRatio || 1)
        }
    };
    a = c.appendChild(document.createElement("table"));
    a.style.margin = "0px";
    a.setAttribute("width", "100%");
    a.border = 0;
    a = a.appendChild(document.createElement("tr")).appendChild(document.createElement("td"));
    a.style.textAlign = "center";
    a.setAttribute("valign", "middle");
    a.setAttribute("cellpadding", "0");
    a = a.appendChild(document.createElement("div"));
    a.className = "legal_block";
    a.style.textAlign = "center";
    a.style.background = "transparent";
    a.style.textShadow = "0px 0px 8px black, 0px 0px 8px black";
    platform.isMobile && (a.style.transformOrigin = "middle center", a.style.transform = "scale(1.5.1.5)");
    var k = a.appendChild(document.createElement("table"));
    k.style.position = "relative";
    k.style.display = "inline-block";
    k.style.width = "450px";
    k.style.textAlign = "center";
    var n = k.appendChild(document.createElement("tr")),
        e = n.appendChild(document.createElement("td"));
    e.style.width =
        "75px";
    for (var m = a.appendChild(document.createElement("br")), r = !1, l = 0; l < legal_links.length; l++) {
        if ("true" == oLANG[legal_links[l].msg].visible) {
            if (legal_links[l].link) {
                e = a.appendChild(document.createElement("a"));
                var y = "";
                oLANG[legal_links[l].msg].classAdd && (y = oLANG[legal_links[l].msg].classAdd + " ");
                y = platform.isMobile ? y + "legal_link_mobile" : y + "legal_link";
                e.className = y;
                e.style.whiteSpace = "nowrap";
                "showBilling" === legal_links[l].link ? (e.setAttribute("onmouseup", "BILLING.doShow();"), e.setAttribute("href",
                    "#"), e.style.cursor = "pointer") : (y = legal_links[l].link, void 0 != oLANG[legal_links[l].msg] && void 0 != oLANG[legal_links[l].msg].link && (y = oLANG[legal_links[l].msg].link), e.setAttribute("href", y), "legal_cookies" != legal_links[l].msg && e.setAttribute("target", "_blank"))
            } else r = !0, e = n.appendChild(document.createElement("td")), e = e.appendChild(document.createElement("div")), e.style.whiteSpace = "nowrap", e.style.pointerEvents = "none", e.style.width = "200px", e.prohibit_touch = !0;
            __utils.doHTMLText(e, oLANG[legal_links[l].msg]);
            getTextValues(e, legal_links[l].msg)
        }("true" == oLANG[legal_links[l].msg].visible || "nl" === legal_links[l].after) && oLANG[legal_links[l].msg].after && l < legal_links.length - 1 && (e = oLANG[legal_links[l].msg].after, platform.isMobile || "nl" != e || (e = "|"), "nl" === e ? y = a.appendChild(document.createElement("br")) : "|" === e && (y = a.appendChild(document.createElement("div")), y.className = "legal_dividers", y.innerHTML = e, y.prohibit_touch = !0))
    }
    r ? (e = n.appendChild(document.createElement("td")), e.style.width = "75px") : (a.removeChild(m),
        a.removeChild(k));
    g.doResizeUpdate();
    this.doHide = function() {
        g.hidden = !0;
        g.doResizeUpdate()
    };
    this.doShow = function() {
        g.hidden = !1;
        g.doResizeUpdate()
    };
    update_queue.push({
        doResizeUpdate: g.doResizeUpdate
    })*/
};

function BillingPanel(a) {
    var g = this,
        c = document.getElementById(a || "div_billing");
    c.style.pointerEvents = "none";
    c.style.background = "#000000";
    var h, q;
    this.legalPanelHeight = 0;
    a = c.appendChild(document.createElement("table"));
    a.style.margin = "0px";
    a.setAttribute("width", "100%");
    a.border = 0;
    var k = a.appendChild(document.createElement("tr"));
    k = k.appendChild(document.createElement("td"));
    k.style.textAlign = "center";
    k.setAttribute("valign", "middle");
    k.setAttribute("cellpadding", "0");
    k = a.appendChild(document.createElement("tr"));
    a = k.appendChild(document.createElement("td"));
    a.style.textAlign = "center";
    a.setAttribute("valign", "middle");
    a.setAttribute("cellpadding", "0");
    a = a.appendChild(document.createElement("div"));
    a.className = "legal_block";
    a.style.textAlign = "center";
    a.style.background = "transparent";
    k = a.appendChild(document.createElement("table"));
    k.style.position = "relative";
    k.style.display = "inline-block";
    k.style.width = "450px";
    k.style.textAlign = "center";
    var n = k.appendChild(document.createElement("tr")),
        e = n.appendChild(document.createElement("td"));
    e.style.width = "75px";
    var m = a.appendChild(document.createElement("br"));
    madeTable = !1;
    for (var r = 0; r < billing_links.length; r++) {
        if ("true" == oLANG[billing_links[r].msg].visible) {
            if (billing_links[r].link) {
                e = a.appendChild(document.createElement("a"));
                var l = "";
                oLANG[legal_links[r].msg].classAdd && (l = oLANG[legal_links[r].msg].classAdd + " ");
                l = platform.isMobile ? l + "legal_link_mobile" : l + "legal_link";
                e.className = l;
                e.style.whiteSpace = "nowrap";
                l = billing_links[r].link;
                void 0 != oLANG[billing_links[r].msg] && void 0 != oLANG[billing_links[r].msg].link &&
                    (l = oLANG[billing_links[r].msg].link);
                e.setAttribute("href", l);
                "legal_cookies" != billing_links[r].msg && e.setAttribute("target", "_blank")
            } else madeTable = !0, e = n.appendChild(document.createElement("td")), e = e.appendChild(document.createElement("div")), e.style.whiteSpace = "nowrap", e.style.pointerEvents = "none", e.style.width = "200px", e.prohibit_touch = !0;
            __utils.doHTMLText(e, oLANG[billing_links[r].msg])
        }("true" == oLANG[billing_links[r].msg].visible || "nl" === billing_links[r].after) && oLANG[billing_links[r].msg].billingafter &&
            r < billing_links.length - 1 && (e = oLANG[billing_links[r].msg].billingafter, platform.isMobile || "nl" != e || (e = "|"), "nl" === e ? l = a.appendChild(document.createElement("br")) : "|" === e && (l = a.appendChild(document.createElement("div")), l.className = "legal_dividers", l.innerHTML = e, l.prohibit_touch = !0))
    }
    madeTable ? (e = n.appendChild(document.createElement("td")), e.style.width = "75px") : (a.removeChild(m), a.removeChild(k));
    var y = c.appendChild(document.createElement("div"));
    y.className = "legal_billing";
    var w = y.appendChild(document.createElement("img"));
    w.className = "legal_billing_image";
    w.src = oLANG_IMAGES.billing;
    w.style.zIndex = 50;
    w.onmouseout = function(u) {
        u.clientY > window.innerHeight - g.legalPanelHeight || g.transitioning || g.hidden || g.doHide()
    };
    this.hidden = !0;
    this.nextAnimUpdate = -1;
    this.doResizeUpdate = function(u) {
        u = void 0 === u ? 0 : u;
        g.nextAnimUpdate = Date.now() + 100;
        if (g.hidden && 0 == u) c.style.top = "-10000px";
        else {
            var H = Math.min(1, window.devicePixelRatio || 1);
            h = Math.max(Math.min((platform.isMobile ? 1.25 : 1) * oSTAGE.scale, oSTAGE.screen_width * oSTAGE.screen_height /
                (2E5 * H)), .4 / H);
            c.style.transform = c.style.webkitTransform = "scale(" + h + "," + h + ")";
            c.style.width = 1 / h * oSTAGE.screen_width + "px";
            q = Math.max(c.clientHeight) * h;
            c.style.left = "0px";
            c.style.top = u + oSTAGE.screen_height - q + 1 + "px";
            var D = Math.min(150, 1 / h * .159375 * oSTAGE.screen_width);
            H = D / (.159375 * H);
            w.style.width = H + "px";
            w.style.left = oSTAGE.screen_width > H ? .5 * (1 / h * oSTAGE.screen_width - H) + "px" : "0px";
            w.style.opacity = 1 - u / 300;
            w.style.height = D + "px";
            y.style.height = 10 + D + "px";
            y.style.bottom = 1 / h * q + "px";
            return h
        }
    };
    this.timeoutId = -1;
    this.transitioning = !1;
    g.doResizeUpdate();
    this.doHide = function(u) {
        if (!g.hidden || 0 != (void 0 === u ? 0 : u)) {
            g.hidden = !0;
            g.transitioning = !0;
            u = 300;
            if (Date.now() > g.nextAnimUpdate || 300 <= u) SCREEN.doResizeUpdate(), LEGAL.doResizeUpdate(), g.doResizeUpdate(u);
            300 > u ? g.timeoutId = setTimeout(g.doHide.bind(g, u), 20) : (g.timeoutId = -1, g.transitioning = !1)
        }
    };
    this.doShow = function(u) {
        g.transitioning = !0;
        u = -1 == (void 0 === u ? -1 : u) ? 300 : 0;
        g.hidden = !1;
        0 > u && (u = 0);
        if (Date.now() > g.nextAnimUpdate || 0 >= u) SCREEN.doResizeUpdate(), LEGAL.doResizeUpdate(),
            g.doResizeUpdate(u);
        0 < u ? g.timeoutId = setTimeout(g.doShow.bind(g, u), 20) : (g.timeoutId = -1, g.transitioning = !1)
    };
    update_queue.push({
        doResizeUpdate: g.doResizeUpdate
    })
};

function ControlsPanel() {
    var a = this;
    this.nextFullScreenChange = -1;
    document.getElementById("div_screens");
    var g = document.getElementById("div_controls"),
        c = document.documentElement,
        h = oCONFIG.fullScreenAvailable && (c.requestFullScreen || c.webkitRequestFullScreen || c.mozRequestFullScreen ? !0 : !1);
    this.isFullScreen = function() {
        return document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled ? !0 : !1
    };
    this.doCheckFullScreen = function() {
        return document.fullScreen || document.mozFullScreen ||
            document.webkitIsFullScreen || document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
    };
    this.buttonDelay = -1;
    if (h) {
        c = function() {
            a.doCheckFullScreen();
            1 == document.webkitIsFullScreen || 1 == document.mozFullScreen || void 0 !== document.msFullscreenElement ? (trace("Show shrink"), oSTAGE.is_fullscreen = !0, q.className = "b_fullscreen") : (trace("Show grow"), q.className = "b_fullscreen_on", oSTAGE.is_fullscreen = !1)
        };
        var q = g.appendChild(document.createElement("div"));
        q.className = "b_fullscreen";
        q.onclick = function(e) {
            TweensActive() || Date.now() < a.nextFullScreenChange || (a.nextFullScreenChange = Date.now() + 100, oSTAGE.is_fullscreen ? (a.doFullScreenOff(), q.className = "b_fullscreen_on") : (a.doFullScreenOn(), q.className = "b_fullscreen"))
        };
        q.onmouseover = function() {
            q.style.backgroundImage = oSTAGE.is_fullscreen ? "url('media/b_fullscreen_off_over.svg')" : "url('media/b_fullscreen_on_over.svg')"
        };
        q.onmouseout = function() {
            q.style.backgroundImage = oSTAGE.is_fullscreen ? "url('media/b_fullscreen_off.svg')" :
                "url('media/b_fullscreen_on.svg')"
        };
        document.addEventListener && (document.addEventListener("fullscreenchange", c, !1), document.addEventListener("mozfullscreenchange", c, !1), document.addEventListener("MSFullscreenChange", c, !1), document.addEventListener("webkitfullscreenchange", c, !1))
    }
    var k = g.appendChild(document.createElement("div"));
    k.className = "b_mute_on";
    k.onclick = function() {
        0 == __snds.toggleMute() ? (k.className = "b_mute_on", oUSER.is_mute = !1) : (k.className = "b_mute", oUSER.is_mute = !0);
        k.onmouseout()
    };
    k.onmouseover =
        function() {
            k.style.backgroundImage = oUSER.is_mute ? "url('media/b_sound_on_over.svg')" : "url('media/b_sound_off_over.svg')"
        };
    k.onmouseout = function() {
        k.style.backgroundImage = oUSER.is_mute ? "url('media/b_sound_on.svg')" : "url('media/b_sound_off.svg')"
    };
    var n = g.appendChild(document.createElement("div"));
    n.className = "b_pause";
    n.style.pointerEvents = "none";
    n.style.transform = "translateY(2000px)";
    n.onclick = function() {
        GAME.is_paused ? GAME.doUnPause() : GAME.doPause()
    };
    n.onmouseover = function() {
        n.style.backgroundImage =
            "url('media/b_pause_over.svg')"
    };
    n.onmouseout = function() {
        n.style.backgroundImage = "url('media/b_pause.svg')"
    };
    this.positioning = 0;
    this.doResizeUpdate = function() {
        var e = window.innerHeight / 1920,
            m = Math.max(10, window.innerWidth - 1020 * e >> 1),
            r = window.innerHeight,
            l = 0;
        .55546875 > 1 * window.innerWidth / window.innerHeight && (l = .5 * (1 * window.innerHeight - window.innerWidth / (1422 * r / 2560 / r)));
        0 == a.positioning ? (g.style.right = m + "px", g.style.top = "10px") : (g.style.right = m + "px", g.style.top = (2 > a.positioning ? l + 35 * e : .4 * l + 670 * e) + "px");
        g.style.transform = g.style.webkitTransform = "scale(" + e + "," + e + ")";
        h && (oSTAGE.is_fullscreen ? (q.className = "b_fullscreen_on", q.style.backgroundImage = "url('media/b_fullscreen_off.svg')") : (q.className = "b_fullscreen", q.style.backgroundImage = "url('media/b_fullscreen_on.svg')"))
    };
    this.setGamePos = function(e) {
        a.positioning = e;
        a.doResizeUpdate()
    };
    this.doShowPause = function() {
        n.style.pointerEvents = "auto";
        TweenLite.set(n, {
            transform: "translateY(-500px)",
            overwrite: !0
        });
        n.style.transform = n.style.webkitTransform = "translateY(-500px)";
        TweenLite.to(n, 1.2, {
            transform: "translateY(0px)",
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .5)
        })
    };
    this.doHidePause = function() {
        n.style.pointerEvents = "none";
        TweenLite.to(n, .4, {
            transform: "translateY(-500px)",
            overwrite: !0,
            ease: Back.easeIn.config(1.5)
        })
    };
    this.doHideAll = function() {
        k.style.pointerEvents = "none";
        TweenLite.to(k, .4, {
            transform: "translateY(-500px)",
            overwrite: !0,
            ease: Back.easeIn.config(1.5)
        });
        q.style.pointerEvents = "none";
        TweenLite.to(q, .4, {
            transform: "translateY(-500px)",
            overwrite: !0,
            ease: Back.easeIn.config(1.5)
        })
    };
    this.doShowAll = function() {};
    a.doResizeUpdate();
    update_queue.push({
        doResizeUpdate: a.doResizeUpdate
    });
    this.doGoFullScreen = function() {
        var e = document.documentElement;
        (e.requestFullScreen || e.webkitRequestFullScreen || e.mozRequestFullScreen).call(e)
    };
    this.doFullScreenOn = function() {
        var e = document.documentElement;
        e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
        oSTAGE.is_fullscreen = !0
    };
    this.doFullScreenOff = function() {
        document.exitFullscreen ? document.exitFullscreen() : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
        oSTAGE.is_fullscreen = !1
    }
};

function PopupPause(a) {
    var g = this,
        c = document.getElementById("div_pause");
    __utils.doDestroyAllChildren(c);
    var h = c.appendChild(document.createElement("div"));
    h.className = "pause_menu_block";
    for (var q = 0; q < a.length; q++) {
        var k = a[q],
            n = h.appendChild(document.createElement("div"));
        n.className = "pause_menu";
        __utils.doHTMLText(n, k.msg);
        n.callback = k.callback;
        n.snd = k.snd;
        n.onmouseup = function(m) {
            __snds.unforceMute();
            m.target.callback();
            __snds.playSound(m.target.snd, "interface");
            g.doDestroy()
        }
    }
    this.doResizeUpdate =
        function() {
            var m = Math.min(Infinity, oSTAGE.screen_width / 800, oSTAGE.screen_height / 800);
            c.style.transform = c.style.webkitTransform = "scale(" + m + "," + m + ")";
            c.style.width = 1 / m * oSTAGE.screen_width + "px";
            c.style.height = 1 / m * oSTAGE.screen_height + "px";
            h.style.top = .5 * (c.clientHeight - h.clientHeight) + "px"
        };
    this.doReveal = function() {};
    this.doDestroy = function() {
        __utils.doDestroyAllChildren(c);
        e.forget = !0;
        c.style.display = "none"
    };
    __snds.forceMute();
    c.style.display = "block";
    g.doResizeUpdate();
    g.doReveal();
    var e = {
        doResizeUpdate: g.doResizeUpdate
    };
    update_queue.push(e)
};

function Loader(a) {
    var g = this,
        c = document.getElementById("div_loading");
    __utils.doDestroyAllChildren(c);
    c.style.display = "block";
    c.style.opacity = 1;
    this.doResizeUpdate = function() {
        trace("loading -> doResizeUpdate()");
        var n = Math.min(Infinity, oSTAGE.screen_width / 800, oSTAGE.screen_height / 800);
        c.style.transform = c.style.webkitTransform = "scale(" + n + "," + n + ")";
        c.style.width = 1 / n * oSTAGE.screen_width + "px";
        c.style.height = 1 / n * oSTAGE.screen_height + "px"
    };
    this.doUpdateBar = function(n) {
        q.style.width = 100 * n + "%"
    };
    this.doFadeAndDestroy =
        function() {
            __utils.doDestroyAllChildren(c);
            TweenLite.to(c, 1, {
                opacity: 0,
                overwrite: !0,
                onComplete: g.doDestroy
            })
        };
    this.doDestroy = function() {
        __utils.doDestroyAllChildren(c);
        k.forget = !0;
        c.style.display = "none"
    };
    var h = c.appendChild(document.createElement("table"));
    h.setAttribute("border", "0");
    h.setAttribute("width", "100%");
    h.setAttribute("height", "100%");
    h = h.appendChild(document.createElement("tr")).appendChild(document.createElement("td"));
    h.setAttribute("align", "center");
    h.setAttribute("valign", "middle");
    a && (a = h.appendChild(document.createElement("div")), a.className = "film_logo_block", a.style.position = "relative", a.style.display = "block", a.style.top = "20px", a.style.left = "0px", a = a.appendChild(document.createElement("img")), a.className = "film_logo_img", a.style.height = "100px", a.src = oLANG_IMAGES.logo, a.onload = function() {
        g.doResizeUpdate()
    });
    a = h.appendChild(document.createElement("div"));
    a.className = "loader_spinner";
    a.style.position = "relative";
    a.style.display = "block";
    h = h.appendChild(document.createElement("div"));
    h.className = "loader_bar";
    h.style.position = "relative";
    h.style.display = "block";
    var q = h.appendChild(document.createElement("div"));
    q.className = "loader_bar_fill";
    g.doResizeUpdate();
    var k = {
        doResizeUpdate: g.doResizeUpdate
    };
    update_queue.push(k)
};

function TitleScreen() {
    var a = this;
    a.exiting = !1;
    var g = function() {
        __snds.playSound("music_title_loop", "music", -1, .25);
        window.removeEventListener("touchstart", g)
    };
    "music_title_loop" != __snds.getNowPlaying("music") && (platform.isMobile && !__snds.initialized ? window.addEventListener("touchstart", g, {
        passive: !1,
        capture: !1
    }) : __snds.playSound("music_title_loop", "music", -1, .25));
    document.getElementById("div_legal");
    CONTROLS.setGamePos(0);
    document.getElementById("div_controls").style.width = "74px";
    var c = document.getElementById("div_screens");
    __utils.doDestroyAllChildren(c);
    var h = c.appendChild(document.createElement("div"));
    h.className = "blue_portrait_bib";
    var q = c.appendChild(document.createElement("div"));
    q.className = "TitleScene";
    var k = c.appendChild(document.createElement("div"));
    k.className = "character_title";
    k.style.backgroundImage = "url('media/front/Title_Character_Shadow.png')";
    var n = c.appendChild(document.createElement("div"));
    n.className = "character_title";
    var e = c.appendChild(document.createElement("div"));
    e.className = "character_title";
    e.style.backgroundImage = "url('media/front/Title_Character_Jerry.png')";
    var m = c.appendChild(document.createElement("div"));
    m.className = "game_title";
    __utils.doHTMLText(m, oLANG.title);
    var r = c.appendChild(document.createElement("div"));
    r.className = "game_logo";
    r.style.backgroundImage = "url('" + oLANG_IMAGES.GameLogoLarge + "')";
    var l = c.appendChild(document.createElement("div"));
    l.className = "b_play";
    __utils.doHTMLText(l, oLANG.play);
    l.onmouseup = function(F) {
        a.doExit();
        __snds.playSound("snd_click");
        a.doDestroy();
        SCREEN = new InstructionsScreen
    };
    l.onmouseover = function(F) {
        a.exiting || (setTransform(l), TweenLite.set(F.target, {
            transform: makeScaleCentered(l, 1),
            overwrite: !0
        }), TweenLite.to(F.target, .1, {
            transform: makeScaleCentered(l, 1.1),
            overwrite: !0
        }))
    };
    l.onmouseout = function(F) {
        a.exiting || TweenLite.to(F.target, .5, {
            transform: makeScaleCentered(l, 1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .5)
        })
    };
    l.vAnchor = "bottom";
    var y = c.appendChild(document.createElement("div"));
    y.className = "theaters_white";
    y.style.backgroundImage =
        "url('" + oLANG_IMAGES.share_theaters + "')";
    y.vAnchor = "bottom";
    Date.now();
    var w = window.innerHeight * oSTAGE.scale_inv,
        u = w / oCONFIG.heightCalibration,
        H = [h, k, n, e, l, q, r, m, y];
    getScaleVars(H);
    this.animStep = 0;
    this.updateStep = -1;
    this.updateAnim = function() {
        k.style.transform = "translate(0px," + 5 * Math.sin(13 * a.animStep) * u + "px)" + makeScale(1 + .01 * Math.sin(a.animStep)) + " rotate(" + 1 * Math.sin(2.33 * a.animStep) + "deg)";
        n.style.transform = "translate(0px," + 5 * Math.sin(13 * a.animStep) * u + "px)" + makeScale(1 + .01 * Math.sin(a.animStep)) +
            " rotate(" + 1 * Math.sin(2.33 * a.animStep) + "deg)";
        e.style.transform = "translate(0px," + 5 * Math.sin(13 * a.animStep) * u + "px)" + makeScale(1 + .01 * Math.sin(a.animStep)) + " rotate(" + 1 * Math.sin(2.33 * a.animStep) + "deg)";
        a.animStep += .01; - 1 != a.animTimer && clearTimeout(a.animTimer);
        a.animTimer = setTimeout(a.updateAnim, 50)
    };
    this.animTimer = setTimeout(this.updateAnim, 3600);
    this.doResizeUpdate = function() {
        setTransform(H);
        0 < a.animStep && (clearTimeout(a.animTimer), a.updateAnim())
    };
    this.doReveal = function() {
        ww = window.innerWidth * oSTAGE.scale_inv;
        u = w / oCONFIG.heightCalibration;
        r.style.transform = "translateY(" + (-r.clientHeight - r.offsetTop - 50) + "px)" + makeScale(1);
        m.style.transform = "translateY(" + (-m.clientHeight - m.offsetTop - 50) + "px)" + makeScale(1);
        y.style.transform = "translateY(800px)" + makeScale(1);
        l.style.transform = "translateY(" + (window.innerHeight * oSTAGE.scale_inv - l.offsetTop) + "px)" + makeScale(1);
        k.style.transform = "translateX(-" + (300 + window.innerWidth * oSTAGE.scale_inv - .4 * k.offsetLeft) + "px)" + makeScale(1);
        n.style.transform = "translateX(-" + (300 + window.innerWidth *
            oSTAGE.scale_inv - .4 * k.offsetLeft) + "px)" + makeScale(1);
        q.style.transform = "translateY(-" + (300 + window.innerHeight * oSTAGE.scale_inv - .4 * q.offsetTop) + "px)" + makeScale(1);
        e.style.transform = "translateX(" + (300 + window.innerWidth * oSTAGE.scale_inv - .4 * k.offsetLeft) + "px)" + makeScale(1);
        var F = 1.1;
        TweenLite.to(r, 1, {
            transform: "translateY(0px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: F
        });
        TweenLite.to(m, 1, {
            transform: "translateY(0px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: F
        });
        F += .5;
        TweenLite.to(q, 1, {
            transform: "translateY(0px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: F
        });
        F += .5;
        TweenLite.to(e, 1, {
            transform: "translateX(0px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: F
        });
        F += .5;
        TweenLite.to(k, 1, {
            transform: "translateX(0px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: F
        });
        TweenLite.to(n, 1, {
            transform: "translateX(0px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: F
        });
        F += .5;
        TweenLite.to(l,
            .75, {
                transform: "translateY(0px)" + makeScale(1),
                overwrite: !0,
                ease: Elastic.easeOut.config(1, .8),
                delay: F
            });
        F += .5;
        TweenLite.to(y, 1, {
            transform: "translateY(0px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: F
        });
        Date.now()
    };
    this.doExit = function() {
        clearTimeout(a.animTimer);
        a.exiting = !0;
        TweenLite.to(r, 1, {
            transform: "translateY(-" + (r.offsetTop + r.clientHeight) + "px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8)
        });
        TweenLite.to(l, .75, {
            transform: "translateY(200px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8)
        });
        TweenLite.to(k, 1, {
            transform: "translateY(-1100px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8)
        });
        TweenLite.to(n, 1, {
            transform: "translateY(-1100px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8)
        });
        TweenLite.to(e, 1, {
            transform: "translateY(-1100px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8)
        });
        TweenLite.to(q, 1, {
            transform: "translateY(-1100px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8)
        })
    };
    this.doDestroy =
        function() {
            clearInterval(a.cheaterInterval);
            __utils.doDestroyAllChildren(c);
            D.forget = !0
        };
    LEGAL.doResizeUpdate();
    a.doResizeUpdate();
    a.doReveal();
    var D = {
        doResizeUpdate: a.doResizeUpdate
    };
    update_queue.push(D)
};

function PickerScreen() {
    var a = this,
        g = platform.isTouchDevice; - 1 < window.location.href.indexOf("lbgdev") && (g = !0);
    document.getElementById("div_legal");
    var c = document.getElementById("div_screens");
    __utils.doDestroyAllChildren(c);
    c.style.backgroundColor = "rgba(0,38,65,.5)";
    var h = c.appendChild(document.createElement("div"));
    h.className = "blue_portrait_bib";
    var q = c.appendChild(document.createElement("div"));
    q.className = "instructions_header";
    __utils.doHTMLText(q, oLANG.instructions_page);
    q.vAnchor = "middle";
    this.makeScale =
        function(u) {
            return "scale(" + u * y + ", " + u * y + ")"
        };
    this.doGame = function(u, H) {
        __snds.playSound("snd_click", "interface", !1, oCONFIG.masterVolume);
        a.doDestroy();
        doFinishLoading(function() {
            SCREEN = new GameScreen(u);
            GAME = new Game(u, H)
        })
    };
    if (g) {
        var k = "EasyButton";
        var n = "HardButton"
    } else k = "EasyButtonDesk", n = "HardButtonDesk";
    var e = c.appendChild(document.createElement("div"));
    e.className = k;
    e.firstPass = !0;
    __utils.doHTMLText(e, oLANG.EASY);
    e.onmouseup = function(u) {
        a.doGame(1, 1)
    };
    e.onmouseover = function(u) {
        setTransform(e);
        TweenLite.set(u.target, {
            transform: makeScaleCentered(u.target, 1),
            overwrite: !0
        });
        TweenLite.to(u.target, .1, {
            transform: makeScaleCentered(e, 1.1),
            overwrite: !0
        })
    };
    e.onmouseout = function(u) {
        TweenLite.to(u.target, .5, {
            transform: makeScaleCentered(e, 1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .5)
        })
    };
    e.vAnchor = "middle";
    var m = c.appendChild(document.createElement("div"));
    m.className = n;
    __utils.doHTMLText(m, oLANG.HARD);
    m.onmouseup = function(u) {
        a.doGame(1, 0)
    };
    m.onmouseover = function(u) {
        setTransform(m);
        TweenLite.set(u.target, {
            transform: makeScaleCentered(u.target, 1),
            overwrite: !0
        });
        TweenLite.to(u.target, .1, {
            transform: makeScaleCentered(m, 1.1),
            overwrite: !0
        })
    };
    m.onmouseout = function(u) {
        TweenLite.to(u.target, .5, {
            transform: makeScaleCentered(m, 1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .5)
        })
    };
    m.vAnchor = "middle";
    var r = [h, e, m, q];
    if (g) {
        var l = c.appendChild(document.createElement("div"));
        l.className = "TwoPlayers";
        __utils.doHTMLText(l, oLANG.HEAD_TO_HEAD);
        l.onmouseup = function(u) {
            a.doGame(2, 0)
        };
        l.onmouseover = function(u) {
            setTransform(l);
            TweenLite.set(u.target, {
                transform: makeScaleCentered(u.target, 1),
                overwrite: !0
            });
            TweenLite.to(u.target, .1, {
                transform: makeScaleCentered(l, 1.1),
                overwrite: !0
            })
        };
        l.onmouseout = function(u) {
            TweenLite.to(u.target, .5, {
                transform: makeScaleCentered(l, 1),
                overwrite: !0,
                ease: Elastic.easeOut.config(1, .5)
            })
        };
        l.vAnchor = "middle";
        r.push(l)
    }
    getScaleVars(r);
    var y = oSTAGE.wrapper_height / 1920;
    this.doResizeUpdate = function() {
        setTransform(r)
    };
    this.doReveal = function() {
        g ? (e.style.transform = "translateY(-" + (oSTAGE.wrapper_height - e.offsetTop) +
            "px) " + makeScale(1), m.style.transform = "translateY(-" + (oSTAGE.wrapper_height - m.offsetTop) + "px) " + makeScale(1)) : (e.style.transform = "translateX(-" + (oSTAGE.wrapper_width - e.offsetLeft) + "px) " + makeScale(1), m.style.transform = "translateX(" + (oSTAGE.wrapper_width - m.offsetLeft) + "px) " + makeScale(1));
        l && (l.style.transform = "translateY(" + (oSTAGE.wrapper_height - l.offsetTop) + "px) " + makeScale(1));
        var u = .5;
        TweenLite.to(e, .75, {
            transform: "translate(0px,0px) " + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: u
        });
        u += .25;
        TweenLite.to(m, .75, {
            transform: "translate(0px,0px) " + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: u
        });
        u += .25;
        l && TweenLite.to(l, .75, {
            transform: "translateY(0px) " + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: u
        })
    };
    this.doDestroy = function() {
        c.style.backgroundColor = "";
        __utils.doDestroyAllChildren(c);
        w.forget = !0
    };
    a.doResizeUpdate();
    a.doReveal();
    var w = {
        doResizeUpdate: a.doResizeUpdate
    };
    update_queue.push(w)
};

function InstructionsScreen() {
    var a = this;
    document.getElementById("div_legal");
    CONTROLS.setGamePos(0);
    var g = document.getElementById("div_screens");
    __utils.doDestroyAllChildren(g);
    __snds.playSound("music_title_loop", "music", -1, .25);
    g.style.backgroundColor = "rgba(0,38,65,.5)";
    var c = g.appendChild(document.createElement("div"));
    c.className = "blue_portrait_bib";
    var h = g.appendChild(document.createElement("div"));
    h.className = "instruction_logo";
    var q = g.appendChild(document.createElement("div"));
    q.className =
        "inst_play_button";
    q.vAnchor = "middle";
    q.firstPass = !0;
    __utils.doHTMLText(q, oLANG.inst_play);
    q.onmouseup = function(w) {
        a.doDestroy();
        SCREEN = new PickerScreen;
        __snds.playSound("snd_click", "interface", !1, oCONFIG.masterVolume)
    };
    q.onmouseover = function(w) {
        setTransform(q);
        TweenLite.set(w.target, {
            transform: makeScaleCentered(w.target, 1),
            overwrite: !0
        });
        TweenLite.to(w.target, .1, {
            transform: makeScaleCentered(q, 1.1),
            overwrite: !0
        })
    };
    q.onmouseout = function(w) {
        TweenLite.to(w.target, .5, {
            transform: makeScaleCentered(q, 1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .5)
        })
    };
    this.pageNum = 1;
    this.totalPages = oCONFIG.instruction_pages;
    var k = g.appendChild(document.createElement("div"));
    k.className = "instruction_image";
    k.style.backgroundImage = "url('media/front/inst_page_" + a.pageNum + ".png')";
    k.vAnchor = "middle";
    var n = g.appendChild(document.createElement("div"));
    n.className = "inst_text_area";
    n.vAnchor = "middle";
    var e = g.appendChild(document.createElement("div"));
    e.className = "inst_text";
    __utils.doHTMLText(e, oLANG.inst_page_1);
    e.vAnchor =
        "middle";
    var m = g.appendChild(document.createElement("div"));
    m.className = "inst_left";
    m.style.opacity = 0;
    m.cursor = "default";
    m.onmouseup = function(w) {
        1 < a.pageNum && (a.changePage(-1), __snds.playSound("snd_click", "interface", !1, oCONFIG.masterVolume))
    };
    m.onmouseover = function(w) {
        1 < a.pageNum && (setTransform(m), TweenLite.set(w.target, {
            transform: makeScaleCentered(w.target, 1),
            overwrite: !0
        }), TweenLite.to(w.target, .1, {
            transform: makeScaleCentered(m, 1.1),
            overwrite: !0
        }))
    };
    m.onmouseout = function(w) {
        1 < a.pageNum && TweenLite.to(w.target,
            .5, {
                transform: makeScaleCentered(m, 1),
                overwrite: !0,
                ease: Elastic.easeOut.config(1, .5)
            })
    };
    m.vAnchor = "middle";
    var r = g.appendChild(document.createElement("div"));
    r.className = "inst_right";
    r.onmouseup = function(w) {
        a.pageNum < a.totalPages && (a.changePage(1), __snds.playSound("snd_click", "interface", !1, oCONFIG.masterVolume))
    };
    r.onmouseover = function(w) {
        a.pageNum < a.totalPages && (setTransform(r), TweenLite.set(w.target, {
            transform: makeScaleCentered(w.target, 1),
            overwrite: !0
        }), TweenLite.to(w.target, .1, {
            transform: makeScaleCentered(r,
                1.1),
            overwrite: !0
        }))
    };
    r.onmouseout = function(w) {
        a.pageNum < a.totalPages && TweenLite.to(w.target, .5, {
            transform: makeScaleCentered(r, 1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .5)
        })
    };
    r.vAnchor = "middle";
    var l;
    masterObjects = [c, h, q, k, n, e, m, r];
    getScaleVars(masterObjects);
    this.changePage = function(w) {
        a.pageNum += w;
        a.direction = w;
        1 >= a.pageNum ? (a.pageNum = 1, m.style.opacity = 0, m.cursor = "default") : (m.style.opacity = 1, m.cursor = "pointer");
        a.pageNum >= a.totalPages ? (a.pageNum = a.totalPages, r.style.opacity = 0, r.cursor = "default") :
            (r.style.opacity = 1, r.cursor = "pointer");
        TweenLite.to(k, .5, {
            transform: "translateX(" + 1200 * oSTAGE.scale * a.direction + "px) " + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            onComplete: a.completeChange
        });
        TweenLite.to(n, .4, {
            transform: "translateX(" + 1200 * oSTAGE.scale * a.direction + "px) " + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8)
        });
        TweenLite.to(e, .4, {
            transform: "translateX(" + 1200 * oSTAGE.scale * a.direction + "px) " + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8)
        })
    };
    this.completeChange =
        function() {
            k.style.backgroundImage = "url('media/front/inst_page_" + a.pageNum + ".png')";
            e.className = "inst_text";
            __utils.doHTMLText(e, oLANG["inst_page_" + a.pageNum]);
            setTransform(e);
            e.OY = parseFloat((l = oLANG["inst_page_" + a.pageNum].top).substr(0, l.length - 2));
            setTransform(masterObjects);
            TweenLite.set(k, {
                transform: "translateX(-" + 1200 * oSTAGE.scale * a.direction + "px) " + makeScale(1)
            });
            TweenLite.set(e, {
                transform: "translateX(-" + 1200 * oSTAGE.scale * a.direction + "px) " + makeScale(1)
            });
            TweenLite.set(n, {
                transform: "translateX(-" +
                    1200 * oSTAGE.scale * a.direction + "px) " + makeScale(1)
            });
            TweenLite.to(e, .5, {
                transform: "translateX(0px) " + makeScale(1),
                overwrite: !0,
                ease: Elastic.easeOut.config(1, .8)
            });
            TweenLite.to(n, .5, {
                transform: "translateX(0px) " + makeScale(1),
                overwrite: !0,
                ease: Elastic.easeOut.config(1, .8)
            });
            TweenLite.to(k, .5, {
                transform: "translateX(0px) " + makeScale(1),
                overwrite: !0,
                ease: Elastic.easeOut.config(1, .8)
            })
        };
    this.doResizeUpdate = function() {
        setTransform(masterObjects)
    };
    this.doReveal = function() {
        h.style.transform = "translateY(-" +
            oSTAGE.wrapper_height + "px) " + makeScale(1);
        q.style.transform = "translateY(" + oSTAGE.wrapper_height + "px) " + makeScale(1);
        k.style.transform = "translateX(-" + oSTAGE.wrapper_width + "px) " + makeScale(1);
        n.style.transform = "translateX(-" + oSTAGE.wrapper_width + "px) " + makeScale(1);
        e.style.transform = "translateX(-" + oSTAGE.wrapper_width + "px) " + makeScale(1);
        m.style.transform = "translateX(-" + oSTAGE.wrapper_width + "px) " + makeScale(1);
        r.style.transform = "translateX(" + oSTAGE.wrapper_width + "px) " + makeScale(1);
        var w = .5;
        TweenLite.to(h,
            .75, {
                transform: "translateX(0px) " + makeScale(1),
                overwrite: !0,
                ease: Elastic.easeOut.config(1, .8),
                delay: w
            });
        w += .5;
        TweenLite.to(k, .75, {
            transform: "translateX(0px) " + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: w
        });
        w += .25;
        TweenLite.to(n, .75, {
            transform: "translateX(0px) " + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: w
        });
        TweenLite.to(e, .75, {
            transform: "translateX(0px) " + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: w
        });
        w += .25;
        TweenLite.to(m, .75, {
            transform: "translateX(0px) " +
                makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: w
        });
        TweenLite.to(r, .75, {
            transform: "translateX(0px) " + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: w
        });
        w += .25;
        TweenLite.to(q, .75, {
            transform: "translateX(0px) " + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: w
        })
    };
    this.doDestroy = function() {
        g.style.backgroundColor = "";
        __utils.doDestroyAllChildren(g);
        y.forget = !0
    };
    a.doResizeUpdate();
    a.doReveal();
    var y = {
        doResizeUpdate: a.doResizeUpdate
    };
    update_queue.push(y)
};

function GameScreen(a) {
    var g = this,
        c;
    g.videoComplete = !0;
    CONTROLS.setGamePos(a);
    var h = document.getElementById("div_screens"),
        q = document.getElementById("div_game_back");
    g.game_bib = q.appendChild(document.createElement("img"));
    g.game_bib.className = "div_game_bib";
    g.game_bib.src = "media/front/gameBackground_black.jpg";
    LEGAL.doHide();
    __utils.doDestroyAllChildren(h);
    h.style.backgroundColor = "";
    var k = h.appendChild(document.createElement("div"));
    k.className = "hud_messages";
    k.style.display =
        "none";
    this.doShowMessage = function(n, e) {
        __utils.doHTMLText(k, n);
        k.style.opacity = 1;
        k.style.display = "block";
        k.style.left = .5 * (h.clientWidth - k.clientWidth) + "px";
        k.style.top = .5 * (h.clientHeight - k.clientHeight) + "px";
        clearTimeout(c);
        e && (c = setTimeout(g.doHideMessage, 1E3 * e))
    };
    this.doHideMessage = function() {
        TweenLite.to(k, .5, {
            opacity: 0,
            overwrite: !0,
            onComplete: function() {
                k.style.display = "none"
            }
        })
    };
    this.doResizeUpdate = function() {
        k.style.left = .5 * (h.clientWidth - k.clientWidth) + "px";
        k.style.top = .5 * (h.clientHeight -
            k.clientHeight) + "px";
        var n = window.innerHeight / 1920,
            e = 1180 * window.innerHeight / 1920;
        g.game_bib.style.left = .5 * (window.innerWidth - e) + "px";
        g.game_bib.style.width = e + "px";
        g.game_bib.style.height = 1920 * n + "px"
    };
    this.doReveal = function() {};
    this.doHide = function() {};
    this.doDestroy = function() {
        q.removeChild(g.game_bib)
    };
    g.doResizeUpdate();
    g.doReveal();
    update_queue.push({
        doResizeUpdate: g.doResizeUpdate
    })
};

function replaceStr(a, g, c) {
    a = a.replace("*1*", g);
    return a.replace("*2*", c)
}

function RecapScreen(a, g, c, h, q) {
    trace("RecapScreen:" + a + "," + g + "," + c + "," + h + "," + q);
    var k = this;
    k.id = "screen";
    LEGAL.doShow();
    CONTROLS.setGamePos(0);
    document.getElementById("div_controls").style.width = "74px";
    "music_title_loop" != __snds.getNowPlaying("music") && __snds.playSound("music_title_loop", "music", -1, .25);
    var n = document.getElementById("div_screens");
    __utils.doDestroyAllChildren(n);
    var e = oCONFIG.hideShareButtonOnLose,
        m = n.appendChild(document.createElement("div"));
    m.className = "blue_portrait_bib";
    this.share_message =
        oLANG.sharable_level_lost;
    this.share_score = 0;
    var r = n.appendChild(document.createElement("div"));
    r.className = "Recap_Heading";
    var l = n.appendChild(document.createElement("div"));
    l.className = "Recap_ScoreLabel";
    __utils.doHTMLText(l, oLANG.score);
    var y = n.appendChild(document.createElement("div"));
    y.className = "Recap_Score";
    if (5 <= a) {
        var w = n.appendChild(document.createElement("div"));
        w.className = "Recap_BothLose";
        __utils.doHTMLText(r, oLANG.BothLose);
        0 == h ? 0 == q && (g = c) : g = 0;
        k.share_score = AddComma(10 * g)
    } else e = !1,
        0 == h && 1 === q && (a = g, g = c, c = a), g > c ? (w = n.appendChild(document.createElement("div")), w.className = "Recap_TomWins", __utils.doHTMLText(r, oLANG.TomWins), k.share_message = oLANG.sharable_level_tom, k.share_score = AddComma(10 * g)) : (w = n.appendChild(document.createElement("div")), w.className = "Recap_JerryWins", __utils.doHTMLText(r, oLANG.JerryWins), k.share_message = oLANG.sharable_level_jerry, k.share_score = AddComma(10 * c));
    __utils.doHTMLText(y, k.share_score);
    c = n.appendChild(document.createElement("div"));
    c.className = "instruction_logo";
    var u = n.appendChild(document.createElement("div"));
    u.className = "txt_processing";
    __utils.doHTMLText(u, oLANG.txt_processing);
    u.vAnchor = "bottom";
    g = ["facebook", "instagram", "twitter", "download"];
    var H = [],
        D = n.appendChild(document.createElement("div"));
    if ("true" == oLANG.share_button_visible.value && !e) {
        D.className = "Recap_ShareButton";
        D.helper = {};
        D.helper.enabled = !0;
        __utils.doHTMLText(D, oLANG.share);
        D.onmouseover = function(z) {
            setTransform(x);
            TweenLite.set(z.target, {
                transform: makeScaleCentered(z.target, 1),
                overwrite: !0
            });
            TweenLite.to(z.target, .1, {
                transform: makeScaleCentered(D, 1.1),
                overwrite: !0
            })
        };
        D.onmouseout = function(z) {
            TweenLite.to(z.target, .5, {
                transform: makeScaleCentered(D, 1),
                overwrite: !0,
                ease: Elastic.easeOut.config(1, .5)
            })
        };
        var F;
        D.onmouseup = function(z) {
            z.target.helper.enabled && (z.target.helper.enabled = !1, z.target.style.opacity = .1, u.style.visiblity = "visible", u.style.opacity = 1, __snds.playSound("snd_click", "interface"), SHARE = new Shareable, SHARE.doSaveImage(null, function(C) {
                u.style.visiblity = "hidden";
                u.style.opacity =
                    0;
                D.style.display = "none";
                if ("failed" == C) F = null, z.target.helper.enabled = !0, z.target.alpha = 1;
                else {
                    F = C;
                    z.target.visible = !1;
                    for (C = 0; C < H.length; C++) {
                        var M = H[C];
                        M.style.visiblity = "visible";
                        M.style.display = "block"
                    }
                    k.doResizeUpdate()
                }
                SHARE.stageObj.needUpdate = !0;
                SHARE.doDestroy()
            }))
        }
    }
    D.vAnchor = "bottom";
    var N = n.appendChild(document.createElement("div"));
    N.className = "Recap_Play_Again";
    __utils.doHTMLText(N, oLANG.play_again);
    N.onmouseup = function(z) {
        __snds.playSound("snd_click", "interface", !1, oCONFIG.masterVolume);
        k.doDestroy();
        doFinishLoading(function() {
            SCREEN = new PickerScreen
        })
    };
    N.onmouseover = function(z) {
        setTransform(x);
        TweenLite.set(z.target, {
            transform: makeScaleCentered(z.target, 1),
            overwrite: !0
        });
        TweenLite.to(z.target, .1, {
            transform: makeScaleCentered(N, 1.1),
            overwrite: !0
        })
    };
    N.onmouseout = function(z) {
        TweenLite.to(z.target, .5, {
            transform: makeScaleCentered(N, 1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .5)
        })
    };
    N.vAnchor = "bottom";
    var I = n.appendChild(document.createElement("div"));
    I.className = "Recap_VOD";
    I.style.backgroundImage =
        "url('" + oLANG_IMAGES.share_theaters + "')";
    I.vAnchor = "bottom";
    var x = [m, c, N, D, u, I, w, y, l, r];
    for (e = 0; e < g.length; e++) m = n.appendChild(document.createElement("div")), "true" == oLANG["share_button_" + g[e] + "_visible"].value && (m.className = "Recap_" + g[e], H.push(m), x.push(m), m.soc_button = m, m.which = g[e], m.onmouseup = function(z) {
        TweenLite.to(z.target, .5, {
            transform: makeScaleCentered(this.soc_button, 1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .5)
        });
        __snds.playSound("snd_click", "interface", !1, oCONFIG.masterVolume);
        SHARE.doShareImage(this.which,
            F)
    }, m.onmouseover = function(z) {
        setTransform(x);
        TweenLite.set(z.target, {
            transform: makeScaleCentered(z.target, 1),
            overwrite: !0
        });
        TweenLite.to(z.target, .1, {
            transform: makeScaleCentered(this.soc_button, 1.1),
            overwrite: !0
        })
    }, m.onmouseout = function(z) {
        TweenLite.to(z.target, .5, {
            transform: makeScaleCentered(this.soc_button, 1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .5)
        })
    }, m.vAnchor = "bottom");
    doClosePage = function() {
        try {
            printable_popup.close()
        } catch (z) {}
    };
    getScaleVars(x);
    u.style.visiblity = "hidden";
    for (e = 0; e < H.length; e++) H[e].OX =
        D.OX + .5 * D.OW - (H.length - 2 * e) * H[e].OW * .5, H[e].style.display = "none";
    Date.now();
    this.doResizeUpdate = function() {
        setTransform(x)
    };
    this.doReveal = function() {
        N.style.transform = "translateY(" + window.innerHeight + "px)" + makeScale(1);
        TweenLite.set(N, {
            transform: "translateY(" + window.innerHeight + "px)" + makeScale(1),
            overwrite: !0
        });
        D.style.transform = "translateY(" + window.innerHeight + "px)" + makeScale(1);
        TweenLite.set(D, {
            transform: "translateY(" + window.innerHeight + "px)" + makeScale(1),
            overwrite: !0
        });
        I.style.transform = "translateY(" +
            window.innerHeight + "px)" + makeScale(1);
        TweenLite.set(I, {
            transform: "translateY(" + window.innerHeight + "px)" + makeScale(1),
            overwrite: !0
        }); - 1 !== w && (w.style.transform = "translateY(-" + window.innerHeight + "px)" + makeScale(1), TweenLite.set(w, {
            transform: "translateY(-" + window.innerHeight + "px)" + makeScale(1),
            overwrite: !0
        }));
        for (var z = $jscomp.makeIterator([y, l, r]), C = z.next(); !C.done; C = z.next()) TweenLite.set(C.value, {
            transform: "translateX(" + window.innerWidth + "px)" + makeScale(1),
            overwrite: !0
        })
    };
    this.doReveal2 = function() {
        GAME =
            void 0;
        var z = 1;
        TweenLite.to(w, .75, {
            transform: "translateY(0px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: z
        });
        z += .5;
        for (var C = $jscomp.makeIterator([y, l, r]), M = C.next(); !M.done; M = C.next()) TweenLite.to(M.value, .75, {
            transform: "translateX(0px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: z
        }), z += .25;
        TweenLite.to(N, .75, {
            transform: "translateY(0px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: z
        });
        z += 1;
        TweenLite.to(D, .75, {
            transform: "translateY(0px)" +
                makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: z
        });
        z += 1;
        TweenLite.to(I, .75, {
            transform: "translateY(0px)" + makeScale(1),
            overwrite: !0,
            ease: Elastic.easeOut.config(1, .8),
            delay: z
        });
        Date.now()
    };
    this.doDestroy = function() {
        __utils.doDestroyAllChildren(n);
        ba.forget = !0
    };
    k.doResizeUpdate();
    oCONFIG.recapAnimation && (k.doReveal(), setTimeout(k.doReveal2, 100));
    var ba = {
        doResizeUpdate: k.doResizeUpdate
    };
    update_queue.push(ba)
}

function AddComma(a) {
    return String(a).replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")
};
var halfPi = Math.PI / 2;

function Atlas() {
    var a = this;
    a.numLoadTries = 0;
    var g = void 0,
        c = !1;
    this.loadJSON = function(h, q) {
        if (void 0 !== oMODELS[h]) a.initJSONAtlas(oMODELS[h]);
        else {
            var k = new XMLHttpRequest;
            k.onreadystatechange = function() {
                if (4 == this.readyState && 200 == this.status) {
                    var n = this.responseText.replace(/\n/g, "").replace(/\r/g, "").replace(/\t/g, "");
                    n = JSON.parse(n);
                    oMODELS[h] = n;
                    a.initJSONAtlas(n)
                } else 4 === this.readyState && 0 < this.status && (trace("Loading Error:" + q + " " + this.status), 6 > a.numLoadTries++ && a.loadJSON(h, q))
            };
            k.open("GET",
                q, !0);
            k.send();
            return !1
        }
    };
    this.initJSONAtlas = function(h) {
        c = !0;
        a.animated = !0;
        var q = {},
            k = 1,
            n = h.frames,
            e = Object.keys(n);
        h = h.meta.size;
        for (var m = 0; m < e.length; m++) {
            var r = n[e[m]],
                l = r.frame;
            l.nx = l.x / h.w;
            r.rotated ? (l.ny = 1 - (l.y + l.w) / h.h, l.nw = l.h / h.w, l.nh = l.w / h.h, l.sw = 1 * l.h / r.sourceSize.h, l.sh = 1 * l.w / r.sourceSize.w) : (l.ny = 1 - (l.y + l.h) / h.h, l.nw = l.w / h.w, l.nh = l.h / h.h, l.sw = 1 * l.w / r.sourceSize.w, l.sh = 1 * l.h / r.sourceSize.h);
            l.center = new THREE.Vector2((r.spriteSourceSize.x + r.spriteSourceSize.w / 2 - r.sourceSize.w / 2) / r.sourceSize.w,
                -(r.spriteSourceSize.y + r.spriteSourceSize.h / 2 - r.sourceSize.h / 2) / r.sourceSize.h);
            l.rotated = r.rotated;
            q[k] = l;
            k++
        }
        g = q;
        a.maxAtlas = k - 1;
        a.setCell(a.curDef[0])
    };
    this.Init = function(h, q, k, n, e, m) {
        var r = a.texture = oMODELS[h];
        a.xScale = void 0 === m ? 1 : m;
        a.baseScale = 2 * q;
        r.generateMipmaps = !1;
        r.magFilter = THREE.LinearFilter;
        r.minFilter = THREE.LinearFilter;
        a.animDef = k;
        a.animating = !1;
        a.looping = !1;
        q = 1;
        void 0 === k ? (a.animated = !1, a.animating = !0, a.animNames = ["default"], a.curDef = [1], a.offsets = [
                [0, 1]
            ], q = 1 * r.image.width / r.image.height) :
            (r = r.clone(), a.animated = !0, a.animNames = Object.keys(k), a.curDef = k[a.animNames[0]].cells, r.matrixAutoUpdate = !0, r.needsUpdate = !0, a.offsets = []);
        a.material = new THREE.MeshBasicMaterial({
            name: h + "_mat",
            transparent: !0,
            map: r,
            side: THREE.FrontSide,
            depthWrite: !1,
            precision: "highp"
        });
        oMODELS[h + "_mat"] = a.material;
        k = new THREE.PlaneGeometry(q, 1, 8, 8);
        a.sprite = new THREE.Mesh(k, a.material);
        a.sprite.name = h + "_plane";
        void 0 !== n && a.loadJSON(n, e);
        a.setCell(a.curDef[0]);
        return a.sprite
    };
    this.startAnim = function(h, q, k) {
        void 0 ===
            a.testCellNum && void 0 !== h && (-1 === a.animNames.indexOf(h) ? trace("Missing Anim" + h) : (a.animated && (a.curDef = a.animDef[h].cells, a.loop = a.animDef[h].loop), a.numFrames = a.curDef.length, a.currentAnim = h, a.frameNum = 0, a.updateTime = 0, a.cellNum = a.curDef[0], a.animating = a.animated, a.animCallback = q, a.animCallbackParam = k, a.animChain = void 0 !== a.animDef[h].chain ? a.animDef[h].chain : "", a.updateTime = Date.now() + 42, a.setCell(a.cellNum)))
    };
    this.setCell = function(h) {
        if (c) {
            var q = g[h];
            void 0 === q ? (console.log("Missing frame:" + h),
                a.sprite.position.y = -100) : (a.displayCell !== h && (a.displayCell = h, a.material.map.offset.set(q.nx, q.ny), a.material.map.repeat.set(q.nw, q.nh), a.sprite.scale.set(a.xScale * a.baseScale * q.sw, a.baseScale * q.sh, 1), a.sprite.rotation.z = q.rotated ? halfPi : 0), a.sprite.position.x = q.center.x * a.baseScale, a.sprite.position.y = q.center.y * a.baseScale)
        } else a.sprite.position.y = -100
    };
    this.stepAnimation = function() {
        a.animating && (Date.now() > a.updateTime && (a.updateTime = Date.now() + 42, a.frameNum++, a.frameNum >= a.numFrames && (a.loop ?
            a.frameNum = 0 : "" !== a.animChain ? a.startAnim(a.animChain) : (a.frameNum = a.numFrames - 1, a.animating = !1, void 0 !== a.animCallback && (a.animCallback(), a.animCallback = void 0)))), a.setCell(a.curDef[a.frameNum]))
    }
}

function RadialMask(a, g, c) {
    void 0 === c && (c = 0);
    return new THREE.ShaderMaterial({
        transparent: !0,
        uniforms: {
            tDiffuse: {
                type: "t",
                value: a
            },
            tLevel: {
                type: "f",
                value: g
            },
            tAngle: {
                type: "f",
                value: c
            }
        },
        vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}",
        fragmentShader: "uniform sampler2D tDiffuse;\nuniform float tLevel;\n\nuniform float tAngle;\nvarying vec2 vUv;\nvoid main() {\nvec4 texel = texture2D(tDiffuse, vUv);\nfloat angle = tAngle+0.5+atan(0.5-vUv.y,vUv.x-0.5)/6.283;\nif (angle>1.0) angle=angle-1.0;\nfloat alpha = 0.0;\nif (angle<tLevel ) alpha=1.0;\ngl_FragColor = texel * alpha;\n}"
    })
}

function padZero(a, g, c) {
    a += "";
    return a.length >= g ? a : Array(g - a.length + 1).join(c || "0") + a
}

function rndInt(a) {
    return Math.floor(Math.random() * a)
};
enableGameTouches();
var GAME, BILLING, LEGAL;

function enableGameTouches() {
    document.addEventListener("touchstart", F_event_Touch_onDocument_handle, !1);
    document.addEventListener("touchend", F_event_Touch_onDocument_handle, !1);
    window.addEventListener("touchmove", F_event_Touch_onDocument_handle, !1);
    document.addEventListener("mousedown", F_event_Touch_onDocument_handle, !1);
    document.addEventListener("mouseup", F_event_Touch_onDocument_handle, !1);
    window.addEventListener("mousemove", F_event_Touch_onDocument_handle, !1)
}

function disableGameTouches() {
    document.removeEventListener("touchstart", F_event_Touch_onDocument_handle, !1);
    document.removeEventListener("touchend", F_event_Touch_onDocument_handle, !1);
    window.removeEventListener("touchmove", F_event_Touch_onDocument_handle, !1);
    document.removeEventListener("mousedown", F_event_Touch_onDocument_handle, !1);
    document.removeEventListener("mouseup", F_event_Touch_onDocument_handle, !1);
    window.removeEventListener("mousemove", F_event_Touch_onDocument_handle, !1)
}
var thisTouch = {
        x: -1E3,
        y: -1E3
    },
    curTouch = {
        x: -1E3,
        y: -1E3
    },
    halfPie = 1.25 * Math.PI,
    lastActionTime = -1,
    __lastSwipe = -1;

function F_event_Touch_onDocument_handle(a) {
    void 0 != BILLING && (BILLING.hidden || "touchend" != a.type || setTimeout(BILLING.doHide, 50));
    if (void 0 !== GAME && GAME.is_playing) {
        platform.isTouchDevice || a.preventDefault();
        var g = null,
            c = null,
            h = [];
        switch (a.type) {
            case "touchstart":
                platform.isTouchDevice && (c = a.targetTouches[0], h = a.targetTouches, g = "onclick");
                break;
            case "touchmove":
                c = a.changedTouches[0];
                g = "mousemove";
                break;
            case "touchend":
                platform.isTouchDevice && (c = a.changedTouches[0], h = a.changedTouches, g = "mouseup");
                break;
            case "mousedown":
                platform.isTouchDevice || (g = "onclick", h = [a], c = a);
                break;
            case "mousemove":
                g = "mousemove";
                c = a;
                break;
            case "mouseup":
                platform.isTouchDevice || (c = a, h = [a], g = "mouseup")
        }
        if ("onclick" === g)
            for (a = 0; a < h.length; a++) thisTouch.x = h[a].clientX / window.innerWidth * 2 - 1, thisTouch.y = 2 * -(h[a].clientY / window.innerHeight) + 1, void 0 !== GAME && GAME.selectPiece(h[a]);
        "mousemove" === g && -1 < thisTouch.x && (curTouch = {}, curTouch.x = c.clientX / window.innerWidth * 2 - 1 - thisTouch.x, curTouch.y = 2 * -(c.clientY / window.innerHeight) + 1 - thisTouch.y,
            .05 < Math.abs(curTouch.x) + Math.abs(curTouch.y) && (g = Math.floor(2 * (halfPie - Math.atan2(curTouch.y, curTouch.x)) / Math.PI), 1 > g && (g = 4), __lastSwipe = g))
    }
    return !1
};
var animations, document_blurred = !1,
    Game = function(a, g) {
        g = void 0 === g ? 0 : g;
        window.focus();
        var c = this,
            h, q;
        c.score = 0;
        c.scoreOpponent = 0;
        c.damage = 0;
        c.opponentTraps = 0;
        c.moveCount = 0;
        c.starCount = 0;
        c.cascade = 1;
        c.cascadeTime = -1;
        c.currentTime = -1;
        c.redrawBaselineDiff = 0;
        c.level = 1;
        c.difficulty = 0;
        c.is_paused = !1;
        c.is_playing = !1;
        var k = 0,
            n, e, m, r = [],
            l = [],
            y = [],
            w, u = [],
            H = {},
            D, F, N;
        r = [];
        LEGAL.doHide();
        __snds.stopSound("music");
        music_playing = null;
        document.getElementById("div_screens");
        var I = document.getElementById("canvas_game");
        this.canvas_game_element = I;
        var x = {};
        c.left_down = !1;
        c.right_down = !1;
        var ba = -1,
            z = 0,
            C = 1 === a ? 0 : 1,
            M = g,
            ma = 0 == C ? oCONFIG.fifthPieceOdds : oCONFIG.fifthPieceOdds2Up,
            da = 0,
            R = [],
            ia, fa, ea = -1,
            V = [-1, -1],
            Z;
        this.selectPiece = function(d) {
            ba = -1;
            if (c.is_playing && !c.is_paused) {
                var t = new THREE.Raycaster;
                t.camera = x.camera;
                var f = new THREE.Vector3;
                f.x = (d.clientX - I.offsetLeft) / I.clientWidth * 2 - 1;
                f.y = 1 - (d.clientY - da) / I.clientHeight * 2;
                d = f.clone().unproject(x.camera);
                f = (new THREE.Vector3(0, 0, 1)).transformDirection(x.camera.matrixWorld);
                t.set(d, f);
                t = t.intersectObjects(x.scene.children);
                for (d = 0; d < t.length; d++) {
                    ba = t[d].object;
                    f = -1;
                    for (var p = 0; p < y.length; p++)
                        if (y[p].sprite.id === ba.id && -1 !== y[p].currentGrid) {
                            f = y[p];
                            break
                        } - 1 !== f && F.findSimilar(f.currentGrid)
                }
            }
        };
        this.doInit = function() {
            x.renderer = I.renderer || new THREE.WebGLRenderer({
                canvas: I,
                antialias: !0,
                alpha: !0,
                shadows: !1,
                powerPreference: "high-performance"
            });
            x.scene = new THREE.Scene;
            c.magicTriggerTime = -1;
            x.camera = new THREE.OrthographicCamera(-72, 72, 128, -128, 1, 1E3);
            x.camera.position.set(0,
                0, 20);
            x.scene.add(x.camera);
            q = new THREE.Group;
            q.position.set(0, 0, -1);
            x.scene.add(q);
            c.doCreateBackground();
            score_holder = new THREE.Group;
            score_holder.position.set(0, 0, -1);
            x.scene.add(score_holder);
            n = new c.doCreateParticles;
            w = new THREE.Group;
            w.position.set(0, 0, 0);
            x.camera.add(w);
            h = new THREE.Group;
            h.position.set(0, 0, -1);
            x.scene.add(h);
            c.doCreatePowerUpMeter();
            c.doCreateBlockers();
            c.doCreateAnim();
            0 === M ? (R = [e, m], ia = oCONFIG.tomDelayMinimum, fa = oCONFIG.tomDelayRange) : (e.rotation.set(0, 0, Math.PI), e.position.x = -20, m.rotation.set(0, 0, 0), m.position.x = 20, R = [m, e], ia = oCONFIG.jerryDelayMinumum, fa = oCONFIG.jerryDelayRange);
            var d = new THREE.AmbientLight(new THREE.Color(1, 1, 1));
            x.scene.add(d);
            x.masterLight = d;
            D = new this.doMakeCandySet;
            F = new this.doMakeGameGrid;
            x.camera.lookAt(new THREE.Vector3(0, 0, 0));
            x.renderer.render(x.scene, x.camera);
            c.doResizeUpdate();
            N = {
                doResizeUpdate: c.doResizeUpdate
            };
            update_queue.push(N);
            I.style.opacity = 1;
            I.style.display = "block";
            SCREEN.doShowMessage(oLANG.msg_ready, null);
            setTimeout(c.doGo, 2E3);
            c.frameUpdateInterval = setInterval(c.doFrameUpdate, 25);
            c.doResizeUpdate();
            D.checkedMatched = !1;
            __snds.playSound("GameStart", "game")
        };
        var la = 0;
        this.playCandySound = function(d) {
            Date.now() > la && -1 === c.magicTriggerTime && (la = Date.now() + 750, __snds.playSound(d, "game", !1, oCONFIG.masterVolume))
        };
        this.playCandySoundNum = function(d) {
            -1 == d ? __snds.playSound("Trapped", "game", !1, oCONFIG.masterVolume) : -2 == d ? __snds.playSound("Trapset_0" + (1 + rndInt(4)), "game", !1, oCONFIG.masterVolume) : 1 > d ? __snds.playSound("Candy_NoMatch",
                "game", !1, oCONFIG.masterVolume) : 6 > d ? __snds.playSound("Candy_0" + (rndInt(3) + 1), "game", !1, oCONFIG.masterVolume) : 11 > d ? __snds.playSound("Candy_smallgroup", "game", !1, oCONFIG.masterVolume) : __snds.playSound("Candy_largegroup", "game", !1, oCONFIG.masterVolume)
        };
        this.doCreateParticles = function() {
            var d = this,
                t = [];
            this.fxBank = 50;
            var f = [];
            this.glowfxBank = 25;
            var p = 0,
                v = 0,
                E = 0,
                B = new THREE.MeshBasicMaterial({
                    name: "ParticleCloud",
                    transparent: !0,
                    map: oMODELS.particle_cloud.clone(),
                    side: THREE.FrontSide,
                    depthWrite: !1
                }),
                A =
                new THREE.PlaneGeometry(1, 1, 1, 1),
                J = new THREE.SpriteMaterial({
                    map: oMODELS.MT_start.clone(),
                    fog: !1,
                    flatShading: !1,
                    transparent: !0,
                    precision: "highp",
                    blending: THREE.AdditiveBlending
                }),
                L = new THREE.SpriteMaterial({
                    map: oMODELS.MT_end.clone(),
                    fog: !1,
                    flatShading: !1,
                    transparent: !0,
                    precision: "highp",
                    blending: THREE.AdditiveBlending
                }),
                O = new THREE.SpriteMaterial({
                    map: oMODELS.MT_end.clone(),
                    fog: !1,
                    flatShading: !1,
                    transparent: !0,
                    precision: "highp",
                    blending: THREE.AdditiveBlending
                }),
                aa = [J, L, O];
            J.map.needsUpdate = !0;
            L.map.needsUpdate = !0;
            O.map.needsUpdate = !0;
            B.map.needsUpdate = !0;
            for (L = 0; L < this.fxBank; L++) O = {
                a: !1,
                t: 0,
                r: 0,
                s: 1
            }, O.sprite = sprite = new THREE.Mesh(A, B), sprite.renderOrder = 35, O.sprite.visible = !1, O.sprite.scale.set(25, 25, 1), x.scene.add(O.sprite), O.p = new THREE.Vector3(0, 0, 0), O.v = new THREE.Vector3(0, 0, 0), t.push(O);
            for (L = 0; L < this.glowfxBank; L++) B = {
                    a: 0,
                    t: 0,
                    v: !1
                }, B.sprite = sprite = new THREE.Sprite(J.clone()), sprite.renderOrder = 35, B.sprite.visible = !1, B.sprite.scale.set(18, 18, 1), x.scene.add(B.sprite), B.p = new THREE.Vector3(0, 0, 0), B.v =
                new THREE.Vector3(0, 0, 0), f.push(B);
            this.createGlow = function(Y, G) {
                var Q = f[p];
                Q.a = 1;
                Q.v = !0;
                Q.t = Date.now() + 500;
                Q.p.copy(Y);
                Q.p.z = 2;
                Q.sprite.position.set(Q.p.x, Q.p.y, 1);
                Q.sprite.visible = !0;
                Q.sprite.material = aa[G];
                p++;
                p >= this.glowfxBank && (p = 0)
            };
            this.createFX = function(Y) {
                if (E < this.fxBank) {
                    var G = v + E;
                    G >= this.fxBank && (G -= this.fxBank);
                    G = t[G];
                    G.b = 0;
                    G.t = Date.now() + 500;
                    G.p.copy(Y);
                    G.p.z = 1;
                    G.v = new THREE.Vector3(Math.random() - .5, Math.random() - .5, 0);
                    G.sprite.position.set(G.p.x, G.p.y, 1);
                    G.sprite.rotation = new THREE.Vector3(0,
                        0, 0);
                    G.sprite.visible = !0;
                    G.r = .1 * Math.PI * (Math.random() - .5);
                    G.a = !0;
                    E++
                }
            };
            var ca;
            this.doUpdate = function() {
                for (var Y = 0; Y < this.glowfxBank; Y++) {
                    var G = f[Y];
                    G.v && 0 < G.a && (ca = G.a - .015, 0 >= ca ? (G.a = 0, G.v = !1, G.sprite.visible = !1, trace("hide glow " + Y)) : (G.a = ca, G.sprite.material.opacity = G.a))
                }
                G = v;
                var Q = 0;
                for (Y = 0; Y < E; Y++) {
                    var K = t[G];
                    K.a ? 20 < K.b ? (K.a = !1, K.sprite.visible = !1, Q++) : (dTime = 40 * Math.abs(Math.sin(.05 * Math.PI * K.b++)), K.v.x *= .95, K.v.y = -.1 + .95 * K.v.y, K.p.x += K.v.x, K.p.y += K.v.y, K.sprite.position.copy(K.p), K.sprite.scale.set(dTime,
                        dTime, 1), K.sprite.rotateZ(K.r)) : K.sprite.visible && (K.sprite.visible = !1);
                    G++;
                    G >= d.fxBank && (G = 0)
                }
                v += Q;
                v >= d.fxBank && (v -= d.fxBank);
                E -= Q
            };
            return this
        };
        this.doCreateBackground = function() {
            var d = new THREE.MeshBasicMaterial({
                name: "Background_mat",
                transparent: !1,
                map: oMODELS.game_background.clone(),
                side: THREE.FrontSide,
                depthWrite: !1
            });
            var t = new THREE.PlaneGeometry(1, 1, 1, 1);
            d = new THREE.Mesh(t, d);
            d.name = "background";
            d.position.set(0, 0, -10);
            d.scale.set(142, 256, 1);
            d.renderOrder = 2;
            d.material.map.needsUpdate = !0;
            q.add(d);
            d = new THREE.MeshBasicMaterial({
                name: "Background2_mat",
                transparent: !1,
                map: oMODELS.Damage0.clone(),
                side: THREE.FrontSide,
                depthWrite: !1
            });
            t = new THREE.PlaneGeometry(1, 1, 1, 1);
            d = new THREE.Mesh(t, d);
            d.name = "damageView";
            0 == C ? d.position.set(0, 84, -7) : d.position.set(0, 0, -7);
            d.scale.set(142, 78, 1);
            d.renderOrder = 3;
            d.material.map.needsUpdate = !0;
            c.damageView = d;
            x.scene.add(c.damageView);
            c.damageView.currentLevel = 0;
            c.damageView.changeImage = function(f) {
                c.damageView.currentLevel !== f && (__snds.playSound("Hotel_Damage",
                    "smash", !1, oCONFIG.masterVolume), c.damageView.currentLevel = f, this.material.map = oMODELS["Damage" + f].clone(), this.material.map.needsUpdate = !0)
            };
            d = new THREE.MeshBasicMaterial({
                name: "GameGameLogoLogo_mat",
                transparent: XMLHttpRequest,
                map: oMODELS.GameGameLogoLogo.clone(),
                side: THREE.FrontSide,
                depthWrite: !1
            });
            t = new THREE.PlaneGeometry(1, 1, 1, 1);
            d = new THREE.Mesh(t, d);
            d.material.map.needsUpdate = !0;
            d.name = "GameGameLogoLogo";
            d.scale.set(42, 24.5, 1);
            x.scene.add(d);
            0 == C ? d.position.set(-50, 57.5, -6) : d.position.set(-50,
                -26.5, -6);
            d.renderOrder = 29
        };
        this.doCreateBlockers = function() {
            Z = [];
            0 === C ? (sprite_map = new THREE.MeshBasicMaterial({
                name: "blockerFull",
                transparent: !1,
                map: oMODELS.blockerFull.clone(),
                side: THREE.FrontSide,
                depthWrite: !0
            }), plane = new THREE.PlaneGeometry(1, 1, 1, 1), sprite = new THREE.Mesh(plane, sprite_map), sprite.name = "blockerFull", sprite.position.set(-2E4, -45, 5), sprite.scale.set(143, 170, 1)) : (sprite_map = new THREE.MeshBasicMaterial({
                    name: "blockerBottom",
                    transparent: !1,
                    map: oMODELS.blockerBottom.clone(),
                    side: THREE.FrontSide,
                    depthWrite: !0
                }), plane = new THREE.PlaneGeometry(1, 1, 1, 1), sprite = new THREE.Mesh(plane, sprite_map), sprite.name = "blockerBottom", sprite.position.set(-2E4, -87, 5), sprite.scale.set(143, 85, 1), sprite.renderOrder = 40, sprite.material.map.needsUpdate = !0, Z.push(sprite), x.scene.add(sprite), sprite_map = new THREE.MeshBasicMaterial({
                    name: "blockerTop",
                    transparent: !1,
                    map: oMODELS.blockerTop.clone(),
                    side: THREE.FrontSide,
                    depthWrite: !0
                }), plane = new THREE.PlaneGeometry(1, 1, 1, 1), sprite = new THREE.Mesh(plane, sprite_map), sprite.name =
                "blockerTop", 1 == C ? sprite.position.set(-2E4, 86, 5) : sprite.position.set(-2E4, 0, 5), sprite.scale.set(143, 85, 1));
            sprite.renderOrder = 40;
            sprite.material.map.needsUpdate = !0;
            Z.push(sprite);
            x.scene.add(sprite)
        };
        this.doCreateScoreDigits = function() {
            x.score_digits = [];
            score_holder.renderOrder = 10;
            for (var d = 0; 6 >= d; d++) {
                var t = new THREE.SpriteMaterial({
                    map: oMODELS.score_digits.clone(),
                    fog: !1,
                    flatShading: !0,
                    transparent: !0
                });
                t = new THREE.Sprite(t);
                t.material.map.repeat = new THREE.Vector2(.1, 1);
                t.material.map.offset = new THREE.Vector2(.1 *
                    d, 0);
                t.material.map.needsUpdate = !0;
                t.center = new THREE.Vector2(0, 1);
                t.position.set(12 * d, 0, 1E-4 * d);
                t.scale.set(.7968 * 12, 12, 1);
                t.renderOrder = 18;
                score_holder.add(t);
                x.score_digits.push(t)
            }
        };
        this.doUpdateGameScore = function() {
            var d, t = String(c.score).split(""),
                f = 0;
            for (d = 0; d < t.length; d++) {
                var p = x.score_digits[f];
                p.position.x = 8 * (d - .5 * t.length);
                p.material.map.offset.x = .1 * parseInt(t[d]);
                p.visible = !0;
                f++
            }
            for (d = Math.max(2, f + 1); 7 >= d; d++) p = x.score_digits[d - 1], p.visible = !1
        };
        this.makeGrid = function(d, t) {
            var f = this;
            this.incoming = this.occupant = -1;
            this.x = d;
            this.y = t;
            this.vector = 0 == C ? new THREE.Vector3(-63 + 14 * d, -80 + 14 * (8 - t), 0) : 6 > t ? new THREE.Vector3(-63 + 14 * d, 10 + 14 * (8 - t), 0) : new THREE.Vector3(-63 + 14 * d, -80 + 14 * (8 - t), 0);
            this.links = [];
            this.forceList = [];
            this.setTrap = this.isTrap = !1;
            this.pieceSet = 0 == C ? 0 : 6 > t ? 6 : 0;
            M && (this.pieceSet = 6 - this.pieceSet);
            this.spawn = t === oCONFIG.gridSize.y - 1;
            this.flow = 0;
            0 == C ? 0 < t && (this.flow = -1) : (this.spawn = this.spawn || 0 === t, 5 != t && 6 != t && (this.flow = t < oCONFIG.gridSize.y / 2 ? 1 : -1));
            if (this.spawn)
                for (var p =
                        0; p < oCONFIG.gridSize.y; p++);
            f.getGridLink = function() {
                return this.flow
            };
            f.findLinks = function(v) {
                v = Math.min(f.links.length, v ? 3 : 1);
                for (var E = 0; E < v; E++)
                    if (tGrid = f.links[E], -1 !== tGrid && -1 === tGrid.occupant && -1 === tGrid.incoming) return tGrid;
                return -1
            }
        };
        this.doMakeGameGrid = function() {
            var d = this;
            this.angles = [
                [1, 0],
                [-1, 0],
                [0, 1],
                [0, -1]
            ];
            this.getGridFromId = function(f) {
                return H[f]
            };
            this.getGridFromCoord = function(f, p) {
                var v = d.getGridFromId(50 + 100 * f + p);
                void 0 === v && console.log("undefined getGridFromCoord:" + f + "," +
                    p);
                return v
            };
            this.init = function() {
                H = {};
                for (var f = 0; f < oCONFIG.gridSize.y; f++)
                    for (var p = 0; p < oCONFIG.gridSize.x; p++) H[50 + 100 * p + f] = new c.makeGrid(p, f);
                d.keyList = Object.keys(H).reverse();
                d.keyList.forEach(function(v) {
                    v = H[v];
                    var E = v.getGridLink();
                    0 != E && v.links.push(d.getGridFromCoord(v.x, v.y + E))
                })
            };
            this.init();
            var t = -1;
            this.spawnTraps = function(f, p, v) {
                for (var E = [], B = 0; B < f; B++) {
                    var A = p + rndInt(v - p + 1),
                        J;
                    if (0 > A) c.opponentTraps++, d.getGridFromCoord(rndInt(oCONFIG.gridSize.x), 0), E.push();
                    else {
                        for (J = rndInt(oCONFIG.gridSize.x); d.getGridFromCoord(J,
                                A).occupant.isTrap;) J++, J >= oCONFIG.gridSize.x && (J = 0);
                        A = d.getGridFromCoord(J, A).occupant;
                        A.isTrap = !0;
                        n.createGlow(A.sprite.position.clone(), 0);
                        n.createFX(A.sprite.position.clone());
                        A = A.sprite.position.clone();
                        E.push(A)
                    }
                }
                return E
            };
            this.pointValue = function(f) {
                return f >= oCONFIG.scorePoints.length ? parseInt(oCONFIG.scorePoints[oCONFIG.scorePoints.length - 1]) + oCONFIG.scoreOver * (f - oCONFIG.scorePoints.length) : parseInt(oCONFIG.scorePoints[f])
            };
            this.AITurn = function() {
                if (c.is_paused) ea = setTimeout(F.AITurn, 50);
                else {
                    var f = rndInt(3 - M) + 1;
                    if (rndInt(oCONFIG.chanceOfOpponentGeneratingTrap) <= rndInt(3 - M)) oCONFIG.playAISFX && c.playCandySoundNum(-2), R[1].animation.startAnim("Trap"), d.spawnTraps(f, 0, oCONFIG.gridSize.y - 1);
                    else {
                        var p = !0;
                        0 < c.opponentTraps && rndInt(oCONFIG.chanceOfOpponentHittingTrap) <= c.opponentTraps && (p = !1, R[1].animation.startAnim("TRAPPED"), c.score += d.pointValue(2 + rndInt(oCONFIG.opponentAutoplayScore) + (0 == M) ? oCONFIG.opponentAutoplayTomBonus : 0), oCONFIG.playAISFX && c.playCandySoundNum(-1));
                        if (p) {
                            f = rndInt(5);
                            var v = 2 + rndInt(oCONFIG.opponentAutoplayScore) + (0 == M) ? oCONFIG.opponentAutoplayTomBonus : 0;
                            R[1].animation.startAnim(["Red", "Yellow", "Green", "Blue", "Pink"][rndInt(5)]);
                            (0 === M ? oCONFIG.pieceRemovesPoints : oCONFIG.jerryPieceRemovesPoints) === f ? c.score = Math.max(0, c.score - d.pointValue(v)) : c.scoreOpponent += d.pointValue(v);
                            oCONFIG.playAISFX && c.playCandySoundNum(v)
                        }
                    }
                    c.damage++;
                    c.opponentTraps--;
                    f = Math.floor(c.damage / oCONFIG.damageStep);
                    c.damageView.changeImage(f);
                    5 == f ? c.doGameOver() : ea = setTimeout(F.AITurn, (p ? oCONFIG.trapTimePenalty :
                        0) + ia + rndInt(fa))
                }
            };
            this.blockArea = function(f) {
                V[f] = c.currentTime + oCONFIG.trapTimePenalty;
                Z[f].position.x = 0
            };
            this.unBlock = function(f) {
                for (f = 0; f < Z.length; f++)(-1 < V[f] || -1E3 < Z[f].position.x) && c.currentTime >= V[f] && (Z[f].position.x = -2E4, V[f] = -1, R[f].animation.startAnim("Welcome"))
            };
            this.findSimilar = function(f) {
                if (0 === C) {
                    if (-1 < V[0] && c.currentTime < V[0]) return
                } else if (5 < f.y) {
                    if (-1 < V[0] && c.currentTime < V[0]) return
                } else if (-1 < V[1] && c.currentTime < V[1]) return;
                if (D.stillAnimating) - 1 == t && (t = setTimeout(d.findSimilar.bind(d,
                    f), 50));
                else {
                    t = -1;
                    var p = [d.getGridFromCoord(f.x, f.y)],
                        v = [
                            [f.x, f.y]
                        ],
                        E = d.getGridFromCoord(f.x, f.y).occupant.type;
                    v = v.concat(d.getLinks([f.x, f.y]));
                    var B = 1,
                        A = 50;
                    f = p[0].occupant.isTrap ? 1 : 0;
                    0 < f && (n.createGlow(p[0].occupant.sprite.position, 1), n.createFX(p[0].occupant.sprite.position));
                    for (; B < v.length && 0 < A--;) {
                        var J = v[B],
                            L = d.getGridFromCoord(J[0], J[1]);
                        if (E == L.occupant.type) {
                            L.occupant.isTrap && (n.createGlow(L.occupant.sprite.position, 1), n.createFX(L.occupant.sprite.position), f++);
                            var O = d.getLinks(J);
                            p.push(L);
                            for (var aa = 0; aa < O.length; aa++) - 1 === v.findIndex(function(ca) {
                                return ca[0] == O[aa][0] && ca[1] == O[aa][1]
                            }) && v.push(O[aa])
                        } else L.occupant.isTrap && (n.createGlow(L.occupant.sprite.position.clone(), 1), n.createFX(L.occupant.sprite.position), L.occupant.isTrap = !1);
                        B++
                    }
                    if (0 < p.length) {
                        c.damage++;
                        if (0 === f)
                            for (E = 0, v = oCONFIG.gridSize.y, 0 < C && (5 < p[0].y ? E = 6 : v = 6), A = !1; E < v && !A; E++)
                                for (B = 0; B < oCONFIG.gridSize.x; B++)
                                    if (d.getGridFromCoord(B, E).occupant.isTrap) {
                                        A = d.getGridFromCoord(B, E).occupant;
                                        n.createGlow(A.sprite.position.clone(),
                                            2);
                                        n.createFX(A.sprite.position.clone());
                                        A.isTrap = !1;
                                        A = !0;
                                        break
                                    } E = [];
                        v = 2;
                        p[0].occupant.setTrap && 0 == f ? (f = oCONFIG.trapCounts.split(","), f = parseInt(f[Math.min(f.length, p.length) - 1]), 0 === C ? (R[0].animation.startAnim("Trap"), E = d.spawnTraps(f, -6, -1)) : 5 < p[0].y ? (R[0].animation.startAnim("Trap"), E = d.spawnTraps(f, 0, 5)) : (R[1].animation.startAnim("Trap"), E = d.spawnTraps(f, 6, 11))) : 0 === C || 5 < p[0].y ? 0 < f ? (R[0].animation.startAnim("TRAPPED"), d.blockArea(0), c.scoreOpponent += d.pointValue(p.length), v = 1) : (c.playCandySoundNum(p.length),
                            R[0].animation.startAnim(["Red", "Yellow", "Green", "Blue", "Pink"][p[0].occupant.typeIndex]), oCONFIG.trappedPlayersLosePoints && -1 < V[1] && (c.scoreOpponent = Math.max(0, c.scoreOpponent - d.pointValue(p.length))), 1 === M && p[0].occupant.typeIndex === oCONFIG.jerryPieceRemovesPoints || p[0].occupant.typeIndex === oCONFIG.pieceRemovesPoints ? c.scoreOpponent = Math.max(0, c.scoreOpponent - d.pointValue(p.length)) : c.score += d.pointValue(p.length), v = 0) : 0 < f ? (R[1].animation.startAnim("TRAPPED"), d.blockArea(1), c.score += d.pointValue(p.length),
                            v = 0) : (c.playCandySoundNum(p.length), R[1].animation.startAnim(["Red", "Yellow", "Green", "Blue", "Pink"][p[0].occupant.typeIndex]), oCONFIG.trappedPlayersLosePoints && -1 < V[0] && (c.score = Math.max(0, c.score - d.pointValue(p.length))), p[0].occupant.typeIndex === oCONFIG.jerryPieceRemovesPoints ? c.score = Math.max(0, c.score - d.pointValue(p.length)) : c.scoreOpponent += d.pointValue(p.length), v = 1);
                        for (f = 0; f < p.length; f++) A = p[f].occupant, null != A && (A.currentGrid = -1, p[f].occupant = -1, B = A.sprite.position.clone(), B.z = 3, n.createFX(B),
                            B = [W.position.clone(), X.position.clone(), new THREE.Vector3(0, 180, 0)][v], B.z = 3, 0 < E.length && (B = E.pop().clone()), A.scorePiece(B));
                        F.checkStatus()
                    } else c.playCandySoundNum(0);
                    p = Math.floor(c.damage / oCONFIG.damageStep);
                    c.damageView.changeImage(p);
                    5 == p && c.doGameOver()
                }
            };
            this.getLinks = function(f) {
                var p = [];
                0 < f[0] && p.push([f[0] - 1, f[1]]);
                f[0] < oCONFIG.gridSize.x - 1 && p.push([f[0] + 1, f[1]]);
                0 == C ? (0 < f[1] && p.push([f[0], f[1] - 1]), f[1] < oCONFIG.gridSize.y - 1 && p.push([f[0], f[1] + 1])) : 6 > f[1] ? (0 < f[1] && p.push([f[0], f[1] - 1]),
                    5 > f[1] && p.push([f[0], f[1] + 1])) : (6 < f[1] && p.push([f[0], f[1] - 1]), f[1] < oCONFIG.gridSize.y - 1 && p.push([f[0], f[1] + 1]));
                return p
            };
            this.postTurnCleanup = function() {
                z++
            };
            this.checkStatus = function() {
                var f = d.keyList;
                Date.now();
                f.forEach(function(p) {
                    p = H[p];
                    if (0 === p.flow) {
                        var v = p.y,
                            E = oCONFIG.gridSize.y / 2,
                            B = 6 > v ? -1 : 1;
                        0 == C && (v = 0, E = oCONFIG.gridSize.y, B = 1);
                        for (var A = 1; A < E; A++) {
                            var J = F.getGridFromCoord(p.x, v + A * B);
                            J.spawn && -1 === J.occupant && -1 === J.incoming && D.makePiece(J, -1, 1);
                            var L = J.findLinks(!1); - 1 !== L && -1 !== J.occupant &&
                                (J.occupant.setDestGrid(L), J.occupant = -1)
                        }
                    }
                })
            }
        };
        this.reactionAnim = function(d, t) {};
        this.doMakeCandyPiece = function() {
            var d = this;
            this.id = l.length;
            this.active = !1;
            this.currentGrid = this.destGrid = this.destination = this.arrived = -1;
            this.velocity = new THREE.Vector3(0, 0, 0);
            this.stable = !1;
            this.typeIndex = this.type = 0;
            this.scored = !1;
            this.sprite = new THREE.Sprite(u.Candy1.mat);
            this.sprite.visible = !1;
            this.sprite.scale.set(14, 14, 1);
            this.setType = function(t, f) {
                f = void 0 === f ? 0 : f;
                d.typeIndex = t;
                isNaN(t) || (t = Object.keys(u)[t +
                    f]);
                d.type = t;
                d.sprite.material = u[t].mat;
                d.sprite.material.rotation = 0 < C && 0 < f ? Math.PI : 0;
                this.scored = !1
            };
            this.setPos = function(t, f, p) {
                p ? d.sprite.position.set(-63 + 14 * t, (0 < C && 6 > f ? 45 : -45) - 35 + 14 * (8 - f), 0) : d.sprite.position.set(t, f, 0);
                d.destination = d.sprite.position.clone();
                d.velocity = new THREE.Vector3(0, 0, 0);
                d.active = !0;
                d.sprite.visible = !0
            };
            this.setDestGrid = function(t) {
                t.incoming = d;
                t.occupant = -1;
                d.setDestination(t.x, t.y, 0, !0);
                d.destGrid = t
            };
            this.setDestination = function(t, f, p, v) {
                d.stable = !1;
                d.destination = v ?
                    new THREE.Vector3(-63 + 14 * t, (0 < C && 6 > f ? 45 : -45) - 35 + 14 * (8 - f), p) : new THREE.Vector3(t, f, p);
                this.arrived = d.destGrid = -1
            };
            c.tVect = new THREE.Vector3(0, 0, 0);
            this.doUpdate = function() {
                if (d.active && !d.stable) {
                    c.tVect.set(0, 0, 0);
                    c.tVect.subVectors(d.destination, d.sprite.position);
                    var t = c.tVect.length();
                    d.scored ? d.velocity.add(c.tVect.normalize().multiplyScalar(4)).multiplyScalar(.5) : (d.velocity.add(c.tVect.normalize().multiplyScalar(6)).multiplyScalar(.5), 6 < d.velocity.length() && (d.velocity = d.velocity.normalize().multiplyScalar(6)));
                    var f = d.velocity.clone().add(d.sprite.position);
                    d.sprite.position.set(f.x, f.y, f.z);
                    d.sprite.renderOrder = 35;
                    t <= d.velocity.length() + 4 ? -1 !== d.destGrid ? (d.destGrid.occupant = d, d.destGrid.incoming = -1, t = d.destGrid.findLinks(!1), f = d.currentGrid, d.currentGrid = d.destGrid, -1 !== f && f.spawn && -1 === f.incoming && -1 === f.occupant && D.makePiece(f, -1, 1), D.stillAnimating = !0, -1 !== t ? (d.destGrid.occupant = -1, d.setDestGrid(t)) : (d.sprite.position.copy(d.destination.clone()), d.destGrid = -1, d.scored = !1)) : d.scored ? d.returnToPool() :
                        20 > t && (d.sprite.position.y = d.destination.y + (d.sprite.position.y - d.destination.y), d.velocity.y *= .05, .25 > d.velocity.length() && 3 > t ? (d.stable = !0, d.sprite.position.copy(d.destination.clone())) : D.stillAnimating = !0) : d.scored && c.is_playing || (D.stillAnimating = !0)
                }
            };
            this.scorePiece = function(t) {
                d.sprite.renderOrder = 35;
                d.scored = !0;
                d.destGrid = -1;
                d.sprite.position.z += 6;
                d.setDestination(t.x, t.y, t.z + 6, !1);
                d.velocity = new THREE.Vector3(0, 0, 0)
            };
            this.lastScoreSound = 0;
            this.returnToPool = function() {
                Date.now() > d.lastScoreSound &&
                    (__snds.playSound("GameStart", "game"), d.lastScoreSound = Date.now() + 500);
                d.currentGrid = -1;
                d.destGrid = -1;
                d.sprite.visible = !1;
                d.active = !1;
                availablePieces.push(d);
                for (var t = 0; t < y.length; t++)
                    if (y[t].id === d.id) {
                        y.splice(t, 1);
                        break
                    }
            }
        };
        this.doMakeCandySet = function() {
            var d = this;
            u = {
                Candy1: {},
                Candy2: {},
                Candy3: {},
                Candy4: {},
                Candy5: {},
                Candy6: {},
                Candy7: {},
                Candy8: {},
                Candy9: {},
                Candy10: {},
                Candy11: {},
                Candy12: {}
            };
            Object.keys(u).forEach(function(f) {
                var p = new THREE.SpriteMaterial({
                    map: oMODELS[f].clone(),
                    fog: !1,
                    flatShading: !0,
                    transparent: !0,
                    precision: "highp"
                });
                u[f].mat = p;
                p.map.needsUpdate = !0
            });
            y = [];
            l = [];
            availablePieces = [];
            this.birthPiece = function() {
                var f = new c.doMakeCandyPiece;
                l.push(f);
                availablePieces.push(f);
                x.scene.add(f.sprite);
                return f
            };
            this.allocatePiece = function() {
                var f = 1 > availablePieces.length ? d.birthPiece() : availablePieces.pop();
                f.isTrap = !1;
                f.setTrap = !1;
                f.sprite.renderOrder = 15;
                y.push(f);
                return f
            };
            this.makeScorePiece = function(f, p) {
                var v = d.allocatePiece();
                v.active = !0;
                v.currentGrid = -1;
                v.destGrid = -1;
                v.velocity = new THREE.Vector3(0,
                    2, 0);
                v.sprite.position.copy(f.occupant.sprite.position);
                v.sprite.visible = !0;
                v.setType(p, f.pieceSet);
                return v
            };
            this.powerUpForce = 0;
            this.makePiece = function(f, p, v) {
                v = d.allocatePiece();
                v.active = !0;
                f.incoming = v;
                f.occupant = -1;
                v.setDestGrid(f);
                v.setPos(f.x, f.y, !0);
                v.sprite.position.y += 14 * f.flow;
                f.spawn && 0 < f.forceList.length ? v.setType(f.forceList.pop(), f.pieceSet) : (-1 === p && (1 > d.powerUpForce && (d.powerUpForce = oCONFIG.powerUpOdds), p = 2 > rndInt(d.powerUpForce--) ? 1 : 0), 0 === p ? rndInt(ma) <= M ? v.setType(4, f.pieceSet) :
                    v.setType(rndInt(4), f.pieceSet) : (v.setType(5, f.pieceSet), v.setTrap = !0));
                return v
            };
            this.fillGrid = function() {
                Object.keys(H).forEach(function(f) {
                    f = H[f]; - 1 === f.occupant && -1 === f.incoming && d.makePiece(f, -1)
                });
                F.checkStatus()
            };
            this.teslaAnimTime = -1;
            this.checkedMatched = !1;
            this.doUpdate = function() {
                d.stillAnimating = !1;
                for (var f = 0; f < y.length; f++) y[f].doUpdate();
                d.checkedMatched || d.stillAnimating || (F.checkStatus(), d.checkedMatched = !0);
                d.stillAnimating && (d.checkedMatched = !1)
            };
            for (var t = 0; 200 > t; t++) d.birthPiece()
        };
        var X, W, P, S, T, U, ja, ha;
        this.doCreatePowerUpMeter = function() {
            var d = new THREE.MeshBasicMaterial({
                name: "playerScore_mat",
                transparent: !1,
                map: oMODELS.ScoreBarPlayer.clone(),
                side: THREE.FrontSide,
                depthWrite: !1
            });
            var t = new THREE.MeshBasicMaterial({
                name: "playerScore_change_mat",
                transparent: !1,
                map: oMODELS.ScoreBarPlayerChange.clone(),
                side: THREE.FrontSide,
                depthWrite: !1
            });
            var f = new THREE.MeshBasicMaterial({
                name: "playerScore_down_mat",
                transparent: !1,
                map: oMODELS.ScoreBarPlayerDown.clone(),
                side: THREE.FrontSide,
                depthWrite: !1
            });
            var p = new THREE.PlaneGeometry(1, 1, 1, 1);
            W = new THREE.Mesh(p, d);
            U = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 1, 1), t);
            W.name = "playerScore";
            U.name = "playerScoreChange";
            W.scale.set(142, 4, 1);
            U.scale.set(142, 4, 1);
            W.renderOrder = 4;
            U.renderOrder = 3;
            W.material.map.needsUpdate = !0;
            U.material.map.needsUpdate = !0;
            h.add(W);
            h.add(U);
            d = new THREE.MeshBasicMaterial({
                name: "opponentScore_mat",
                transparent: !1,
                map: oMODELS.ScoreBarOpponent.clone(),
                side: THREE.FrontSide,
                depthWrite: !1
            });
            var v = new THREE.MeshBasicMaterial({
                name: "opponentScore_change_mat",
                transparent: !1,
                map: oMODELS.ScoreBarOpponentChange.clone(),
                side: THREE.FrontSide,
                depthWrite: !1
            });
            var E = new THREE.MeshBasicMaterial({
                name: "opponentScore_down_mat",
                transparent: !1,
                map: oMODELS.ScoreBarOpponentDown.clone(),
                side: THREE.FrontSide,
                depthWrite: !1
            });
            p = new THREE.PlaneGeometry(1, 1, 1, 1);
            X = new THREE.Mesh(p, d);
            T = new THREE.Mesh(new THREE.PlaneGeometry(1, 1, 1, 1), v);
            X.name = "opponentScore";
            T.name = "opponentScoreChange";
            X.scale.set(142, 4, 1);
            T.scale.set(142, 4, 1);
            X.renderOrder = 4;
            T.renderOrder = 3;
            X.material.map.needsUpdate = !0;
            T.material.map.needsUpdate = !0;
            ja = new THREE.MeshBasicMaterial({
                name: "trophy_map",
                transparent: !0,
                map: oMODELS.Chalice_01.clone(),
                side: THREE.FrontSide,
                depthWrite: !1
            });
            ha = new THREE.MeshBasicMaterial({
                name: "trophy_win_map",
                transparent: !0,
                map: oMODELS.Chalice_02.clone(),
                side: THREE.FrontSide,
                depthWrite: !1
            });
            h.add(X);
            h.add(T);
            p = new THREE.PlaneGeometry(1, 1, 1, 1);
            S = new THREE.Mesh(p, ja);
            S.name = "opponent_trophy";
            S.scale.set(8, 9.25, 1);
            S.renderOrder = 50;
            S.material.map.needsUpdate = !0;
            S.rotation.set(0, 0, Math.PI);
            P = new THREE.Mesh(p, ha);
            P.name = "player_trophy";
            P.scale.set(8, 9.25, 1);
            P.renderOrder = 50;
            P.material.map.needsUpdate = !0;
            S.flipstate = !1;
            P.flipstate = !1;
            h.add(S);
            h.add(P);
            0 == C ? (W.position.set(0, 42.5, -10), X.position.set(0, 125.5, -10), U.position.set(0, 42.5, -10), T.position.set(0, 125.5, -10), P.position.set(67, 44.5, -10), S.position.set(-67, 123.5, -10)) : (W.position.set(0, -41.5, -10), X.position.set(0, 41.5, -10), U.position.set(0, -41.5, -10), T.position.set(0, 41.5, -10), P.position.set(67, -39.5, -10), S.position.set(-67, 39.5,
                -10));
            h.lastPlayerReading = -1;
            h.lastOpponentReading = -1;
            h.lastPlayerChangeReading = -1;
            h.lastOpponentChangeReading = -1;
            h.playerDirection = 0;
            h.opponentDirection = 0;
            P.flipstate = !1;
            P.material = ja;
            P.material.map.needsUpdate = !0;
            h.doUpdate = function() {
                var B = !1;
                if (h.lastPlayerChangeReading !== c.score) {
                    h.lastPlayerChangeReading > c.score ? (h.lastPlayerChangeReading = Math.max(h.lastPlayerChangeReading - oCONFIG.meterStep, c.score), B = !0, 0 <= h.playerDirection && (h.playerDirection = -1, U.material = f)) : h.lastPlayerChangeReading = c.score;
                    var A = Math.min(1, h.lastPlayerChangeReading / oCONFIG.meterScale);
                    U.scale.set(142 * A, 4, 1);
                    U.material.map.needsUpdate = !0;
                    U.position.x = -71 + 71 * A
                }
                h.lastPlayerReading !== c.score && (B ? h.lastPlayerReading = c.score : (0 > h.playerDirection && (h.playerDirection = 1, U.material = t), h.lastPlayerReading = h.lastPlayerReading < c.score ? Math.min(h.lastPlayerReading + oCONFIG.meterStep, c.score) : c.score), A = Math.min(1, h.lastPlayerReading / oCONFIG.meterScale), W.scale.set(142 * A, 4, 1), W.material.map.needsUpdate = !0, W.position.x = -71 + 71 * A);
                B = !1;
                h.lastOpponentChangeReading !== c.scoreOpponent && (h.lastOpponentChangeReading > c.scoreOpponent ? (h.lastOpponentChangeReading = Math.max(h.lastOpponentChangeReading - oCONFIG.meterStep, c.scoreOpponent), B = !0, 0 <= h.opponentDirection && (h.opponentDirection = -1, T.material = E)) : h.lastOpponentChangeReading = c.scoreOpponent, A = Math.min(1, h.lastOpponentChangeReading / oCONFIG.meterScale), T.scale.set(142 * A, 4, 1), T.material.map.needsUpdate = !0, T.position.x = 71 - 71 * A);
                h.lastOpponentReading !== c.scoreOpponent && (B ? h.lastOpponentReading =
                    c.scoreOpponent : (0 > h.opponentDirection && (h.opponentDirection = 1, T.material = v), h.lastOpponentReading < c.scoreOpponent ? (h.lastOpponentReading++, h.lastOpponentReading = Math.min(h.lastOpponentReading + oCONFIG.meterStep, c.scoreOpponent)) : h.lastOpponentReading = c.scoreOpponent), A = Math.min(1, h.lastOpponentReading / oCONFIG.meterScale), X.scale.set(142 * A, 4, 1), X.material.map.needsUpdate = !0, X.position.x = 71 - 71 * A);
                if (c.score >= oCONFIG.meterScale || c.scoreOpponent >= oCONFIG.meterScale) c.score >= oCONFIG.meterScale ? (P.flipstate = !0, P.material = ha, P.material.map.needsUpdate = !0) : (S.flipstate = !0, S.material = ha, S.material.map.needsUpdate = !0), c.doGameOver()
            };
            h.doUpdate()
        };
        this.doCreateAnim = function() {
            e = new THREE.Group;
            e.animation = new Atlas;
            e.playerSprite = e.animation.Init("Tom_char", 39.1, animations.Tom_char, "Tom_charAtlas_Atlas", "media/front/Tom_char.json", 2);
            h.add(e);
            e.playerSprite.position.set(0, 0, 0);
            e.position.set(20, 0 === C ? 84 : 0, 0);
            e.animation.startAnim("Welcome");
            e.add(e.playerSprite);
            e.playerSprite.doubleSided = !0;
            e.playerSprite.renderOrder =
                20;
            e.doUpdate = function() {
                e.animation.stepAnimation()
            };
            m = new THREE.Group;
            m.animation = new Atlas;
            m.playerSprite = m.animation.Init("Jerry_char", 39.1, animations.Jerry_char, "Jerry_charAtlas_Atlas", "media/front/Jerry_char.json", 2);
            h.add(m);
            m.playerSprite.position.set(0, 0, 0);
            m.position.set(-20, 0 === C ? 84 : 0, 0);
            m.rotation.set(0, 0, Math.PI);
            m.animation.startAnim("Welcome");
            m.add(m.playerSprite);
            m.playerSprite.doubleSided = !0;
            m.playerSprite.renderOrder = 21;
            m.doUpdate = function() {
                m.animation.stepAnimation()
            }
        };
        this.doDestroy =
            function() {
                r = [];
                N.forget = !0;
                if (x.scene)
                    for (; 0 < x.scene.children.length;) x.scene.remove(x.scene.children[0]);
                x.scene = null;
                TweenLite.to(I, .5, {
                    opacity: 0,
                    overwrite: !0,
                    onComplete: function() {
                        I.style.display = "none"
                    }
                });
                is_active = !1;
                GAME = void 0
            };
        this.doUpdate = function() {};
        this.doResizeUpdate = function() {
            var d = window.innerHeight,
                t = 1422 * d / 2560,
                f = t / d;
            c.redrawBaselineDiff = 0;
            t > window.innerWidth ? (x.camera.aspect = 1, I.style.width = oSTAGE.screen_width + "px", I.style.height = oSTAGE.screen_width / f + "px", x.renderer.setSize(oSTAGE.screen_width,
                oSTAGE.screen_width / f, !0), x.camera.bottom = -128, c.redrawBaselineDiff = 0, da = .55546875 > window.innerWidth / window.innerHeight ? .5 * (oSTAGE.screen_height - oSTAGE.screen_width / f) : 0, I.style.top = da + "px", I.style.left = "0px") : (c.redrawBaselineDiff = 0, t = f = 1422 * d / 2560, x.camera.aspect = 1, I.style.width = t + "px", I.style.height = d + "px", x.renderer.setSize(f, d, !0), x.camera.bottom = -128, I.style.left = .5 * (oSTAGE.screen_width - t) + "px", da = 0, I.style.top = da + "px");
            x.renderer.setPixelRatio(__utils.getPixelRatio());
            x.camera.updateProjectionMatrix();
            x.camera.position.x = 0;
            score_holder.position.set(0, -48, 2);
            x.renderer.render(x.scene, x.camera)
        };
        this.doPause = function() {
            c.is_paused = !0;
            new PopupPause([{
                snd: "snd_click",
                msg: oLANG.help,
                callback: c.doHelp
            }, {
                snd: "snd_click",
                msg: oLANG.quit,
                callback: c.doQuit
            }, {
                snd: "snd_click",
                msg: oLANG.resume,
                callback: c.doUnPause
            }])
        };
        this.doUnPause = function() {
            __snds.playSound("music_game_loop", "music", -1, 1);
            c.is_paused = !1
        };
        this.doQuit = function() {
            __snds.stopSound("music");
            CONTROLS.doHidePause();
            SCREEN.doDestroy();
            SCREEN = new TitleScreen;
            LEGAL.doShow();
            c.doDestroy()
        };
        this.doHelp = function() {
            __snds.stopSound("music");
            CONTROLS.doHidePause();
            SCREEN.doDestroy();
            SCREEN = new InstructionsScreen;
            LEGAL.doShow();
            c.doDestroy()
        };
        this.doUnPause = function() {
            c.is_paused = !1
        };
        this.doGo = function() {
            SCREEN.videoComplete ? (trace("GO!"), SCREEN.doShowMessage(oLANG.msg_go, 1), clock.start(), c.is_playing = !0, __snds.playSound("music_game_loop", "music", -1, 1), CONTROLS.doShowPause(), c.currentTime = 0, 0 == C && (ea = setTimeout(F.AITurn, rndInt(fa)))) : setTimeout(c.doGo, 500)
        };
        this.doGameOver = function() {
            0 < ka || (-1 !== ea && clearTimeout(ea), trace("GAME OVER!"), __snds.stopSound("running"), clock.stop(), SCREEN.doShowMessage(oLANG.msg_gameover, null), ka = 1, c.is_playing = !1, oUSER.best_score = Math.max(oUSER.best_score, c.score), __localsaver.doSaveData("user", oUSER), __snds.playSound("music_game_end", "music", 1, .25), CONTROLS.doHidePause(), setTimeout(c.doGotoRecap, 3E3))
        };
        this.doGotoRecap = function() {
            c.is_paused ? setTimeout(c.doGotoRecap, 1E3) : (clearInterval(c.frameUpdateInterval), SCREEN.doDestroy(),
                SCREEN = new RecapScreen(Math.floor(c.damage / oCONFIG.damageStep), c.score, c.scoreOpponent, C, M), LEGAL.doShow(), c.doDestroy())
        };
        var ka = 0;
        this.doFrameUpdate = function() {
            k = clock.getDelta();
            if (x.scene && !c.is_paused) {
                switch (ka) {
                    case 0:
                        if (document_blurred) break;
                        c.currentTime += k;
                        void 0 !== c.doUpdate && c.doUpdate();
                        F.unBlock();
                        D.doUpdate();
                        e.doUpdate();
                        m.doUpdate();
                        h.doUpdate();
                        break;
                    case 1:
                        h.doUpdate();
                        D.doUpdate();
                        e.doUpdate();
                        m.doUpdate();
                        c.doUpdate();
                        break;
                    case 3:
                        UpdateGameScore()
                }
                if (!1 === document_blurred) {
                    for (var d =
                            0; d < r.length; d++) r[d].doUpdate();
                    n.doUpdate()
                }
                x.renderer.render(x.scene, x.camera)
            }
        };
        c.doInit()
    };
var __snds, __utils, __localscaver, __input, __window, oSTAGE, oLANG, oLANG_IMAGES, oVARS, oCONFIG, oUSER, oMODELS, LOADER, THREELOADER, SCREEN, CONTROLS, FONTLOADER, images, wrapper, update_queue = [],
    actives = [],
    window_in_background = !1,
    game_is_active = !1,
    date_msg, stats, loader, clock = new THREE.Clock(!0);

function is_touch_device() {
    return "ontouchstart" in window || 0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints
}
var platform = {
    isAndroid: navigator.userAgent.match(/Android/i),
    isBlackBerry: navigator.userAgent.match(/BlackBerry/i),
    isiOS: navigator.userAgent.match(/iPhone|iPad|iPod/i),
    isMobileOpera: navigator.userAgent.match(/Opera Mini/i),
    isMobileWindows: navigator.userAgent.match(/IEMobile/i),
    isTouchDevice: is_touch_device(),
    isMobile: navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i),
    isIE: -1 != myNav.indexOf("msie") || "Microsoft Internet Explorer" == navigator.appName || "Netscape" == navigator.appName && null != /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent),
    isFirefox: navigator.userAgent.match(/Firefox/i),
    isChrome: navigator.userAgent.match(/Chrome/i),
    isWindows: -1 != window.navigator.platform.indexOf("Win")
};

function doFrameLoop() {
    stats && stats.begin();
    for (var a = 0; a < actives.length; a++) actives[a].purge || actives[a].forget ? actives.splice(a, 1) : actives[a].doUpdate ? actives[a].doUpdate() : actives.splice(a, 1);
    stats && stats.end()
}

function doInit() {
    oCONFIG.debug_stats && (stats = new Stats, stats.showPanel(0), document.body.appendChild(stats.dom));
    wrapper = document.getElementById("wrapper");
    __utils = new BlitTools;
    __snds = new myNameSpace.BlitSounds;
    __localsaver = new BlitSaver;
    __input = new BlitInputs("wrapper");
    __input.doSetPropagationPrevention(1);
    loader = new createjs.LoadQueue(!1);
    loader.installPlugin(createjs.Sound);
    doFrameLoop();
    oVARS = __utils.getQueryString();
    oSTAGE = {};
    var a = document.getElementById("canvas_game");
    a.renderer = new THREE.WebGLRenderer({
        canvas: a,
        antialias: !0,
        alpha: !1,
        shadows: !1
    });
    a.renderer.autoClear = !1;
    a.renderer.shadowMap.enabled = !0;
    oUSER = __localsaver.doGetData("user");
    oUSER || (oUSER = {
        is_mute: !1,
        best_score: 0
    }, __localsaver.doSaveData("user", oUSER));
    oUSER.is_mute = !1;
    __localsaver.doSaveData("user", oUSER);
    doInitResizer();
    doWindowResize();
    a = new Date(date_day_before);
    var g = new Date(date_week_before),
        c = new Date;
    date_msg = c >= new Date(date_playing) ? oLANG.date_msg_4 : c >= a ? oLANG.date_msg_3 : c >= g ? oLANG.date_msg_2 : oLANG.date_msg_1;
    __utils.doInitFocusManager(doLoseFocus,
        doGetFocus);
    doProcessLib()
}
var currentMusic = "";

function doLoseFocus() {
    trace("doLoseFocus");
    __snds.forceMute();
    currentMusic = __snds.getNowPlaying("music");
    null == currentMusic && (currentMusic = GAME ? "music_game_loop" : "music_title_loop");
    __snds.stopSound(currentMusic);
    window_in_background = !0;
    GAME && GAME.doPause()
}

function doGetFocus() {
    trace("doGetFocus");
    window_in_background = !1;
    GAME ? GAME.is_paused || __snds.unforceMute() : __snds.unforceMute();
    "" != currentMusic && __snds.playSound(currentMusic, "music", -1, .25)
}

function doPreloadAssets() {
    lib.properties.manifest[0].src = "media/images/SocialShareable.png";
    lib.properties.manifest[1].src = oLANG_IMAGES.share_theaters;
    lib.properties.manifest[2].src = oLANG_IMAGES.share_logo;
    for (var a = 0; a < lib.properties.manifest.length; a++) {
        for (var g = !0, c = lib.properties.manifest[a].id, h = 0; h < assets_additional.manifest.length; h++)
            if (c == assets_additional.manifest[h].id) {
                g = !1;
                break
            } g && assets_preload.manifest.push(lib.properties.manifest[a])
    }
    var q = my_performance.now();
    __utils.doLoadAssets(assets_preload);
    LOADER = new Loader(!0);
    LOADER.doUpdate = function() {
        this.doUpdateBar(assets_preload.progress);
        if (assets_preload.loaded) {
            this.forget = !0;
            var k = my_performance.now() - q;
            window.setTimeout(function() {
                doStart();
                LOADER.doFadeAndDestroy()
            }, Math.max(0, 1E3 * oCONFIG.splash_hold - k))
        }
    };
    actives.push(LOADER)
}

function doProcessLib() {
    var a = AdobeAn.getComposition("6A454FA589CDD44C8194A5D1116158DD");
    handleComplete({}, a)
}

function handleComplete(a, g) {
    lib = g.getLibrary();
    images = g.getImages();
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener("tick", doFrameLoop);
    doPreloadAssets()
}

function doStart() {
    console.log(navigator.userAgent);
    LEGAL = new LegalPanel;
    BILLING = new BillingPanel;
    BILLING.doHide();
    CONTROLS = new ControlsPanel;
    SCREEN = new TitleScreen;
    __utils.doLoadAssets(assets_additional);
    oMODELS = {};
    __utils.doLoad3dAssets(assets_threejs, oMODELS)
}

function doFinishLoading(a) {
    LOADER = new Loader(!0);
    LOADER.doUpdate = function() {
        this.doUpdateBar(.5 * (assets_additional.progress + assets_threejs.progress));
        assets_additional.loaded && assets_threejs.loaded && (this.purge = !0, a && a(), LOADER.doFadeAndDestroy())
    };
    actives.push(LOADER)
}
var calcScale = function() {
        return .48 > 1 * oSTAGE.wrapper_width / oSTAGE.wrapper_height ? window.innerWidth / oCONFIG.widthCalibration : (oSTAGE.wrapper_height - LEGAL.legalPanelHeight * oSTAGE.scale_inv) / oCONFIG.heightCalibration
    },
    calcVertical = function() {
        return .48 > 1 * oSTAGE.wrapper_width / oSTAGE.wrapper_height ? window.innerHeight - LEGAL.legalPanelHeight - window.innerWidth / oCONFIG.widthCalibration * oCONFIG.heightCalibration * oSTAGE.scale : 0
    };
makeScale = function(a) {
    var g = calcScale();
    .48 > 1 * oSTAGE.wrapper_width / oSTAGE.wrapper_height && (g = window.innerWidth / oCONFIG.widthCalibration);
    return " scale(" + a * g + ", " + a * g + ")"
};
makeScaleCentered = function(a, g) {
    var c = calcScale(),
        h = g * c;
    return "translate(-" + a.OW * (g - 1) * c * .5 * oSTAGE.scale_inv + "px,-" + a.OH * (g - 1) * c * .5 * oSTAGE.scale_inv + "px) scale(" + (1 * h + ", " + 1 * h + ")")
};
var curScaleVars = [];
getScaleVars = function(a) {
    if (Array.isArray(a)) {
        curScaleVars = a;
        for (var g = 0; g < a.length; g++) getScaleVars(a[g]);
        setTransform(a)
    } else a.OX = parseFloat((str = window.getComputedStyle(a).left).substr(0, str.length - 2)), a.OY = parseFloat((str = window.getComputedStyle(a).top).substr(0, str.length - 2)), a.OW = parseFloat((str = window.getComputedStyle(a).width).substr(0, str.length - 2)), a.OH = parseFloat((str = window.getComputedStyle(a).height).substr(0, str.length - 2)), a.FS = parseFloat((str = window.getComputedStyle(a).fontSize).substr(0,
        str.length - 2))
};
getTextValues = function(a, g) {
    for (var c = ["fontSize", "fontFamily", "lineHeight"], h = 0; h < c.length; h++) {
        var q = window.getComputedStyle(a)[c[h]];
        "lineHeight" === c[h] && "normal" == q || parseFloat(q.substr(0, q.length - 2))
    }
};
setTransform = function(a) {
    if (Array.isArray(a)) {
        LEGAL.doResizeUpdate();
        for (var g = 0; g < a.length; g++) setTransform(a[g])
    } else {
        g = 0;
        var c = calcScale();
        "bottom" == a.vAnchor && (g = .975 * calcVertical());
        "middle" == a.vAnchor && (g = .5 * calcVertical());
        a.style.transform = "scale(" + 1 * c + "," + 1 * c + ")";
        a.style.left = .5 * oSTAGE.wrapper_width - (540 - a.OX) * c + "px";
        a.style.top = g + a.OY * c + "px"
    }
};

function TweensActive() {
    if (curScaleVars && 0 < curScaleVars.length)
        for (var a = 0; a < curScaleVars.length; a++)
            if (0 < TweenLite.getTweensOf(curScaleVars[a]).length) return !0;
    return !1
}
lerp = function(a, g, c) {
    return a * (1 - c) + g * c
};

function doInitResizer() {
    var a = document.createElement("div");
    a.id = "resizer";
    a.w = null;
    a.h = null;
    a.keep = !0;
    a.doUpdate = function() {
        if (this.w != window.innerWidth || this.h != window.innerHeight) this.w = window.innerWidth, this.h = window.innerHeight, doWindowResize(), window.scrollTo(0, 1)
    };
    actives.push(a);
    window.addEventListener("orientationchange", function() {
        a.w = 0;
        a.h = 0
    });
    window.addEventListener("blur", function(g) {
        trace("addEventListener:blur");
        document_blurred = !0
    });
    window.addEventListener("focus", function(g) {
        trace("addEventListener:focus");
        document_blurred = !1;
        a.w = 0;
        a.h = 0
    })
}

function doWindowResize() {
    window.innerWidth > window.innerHeight ? (oSTAGE.is_landscape = !0, oSTAGE.scale = Math.min(Infinity, Math.min(window.innerHeight / 550, window.innerWidth / 900))) : (oSTAGE.is_landscape = !1, oSTAGE.scale = Math.min(Infinity, Math.min(window.innerHeight / 800, window.innerWidth / 600)));
    oSTAGE.scale = Math.min(1, oSTAGE.scale);
    oSTAGE.scale_inv = 1 / oSTAGE.scale;
    oSTAGE.screen_width = Math.ceil(window.innerWidth);
    oSTAGE.screen_height = Math.ceil(window.innerHeight);
    oSTAGE.window_width = Math.ceil(window.innerWidth *
        oSTAGE.scale_inv);
    oSTAGE.window_height = Math.ceil(window.innerHeight * oSTAGE.scale_inv);
    oSTAGE.wrapper_height = Math.ceil(window.innerHeight * oSTAGE.scale_inv);
    oSTAGE.wrapper_width = Math.ceil(window.innerWidth * oSTAGE.scale_inv);
    oSTAGE.wrapper_ratio = oSTAGE.wrapper_height / oSTAGE.wrapper_width;
    oSTAGE.physical_ppi = __utils.getPPI();
    oSTAGE.ppi_scale = oSTAGE.physical_ppi / 96;
    var a = document.getElementById("div_screens");
    a.style.transform = a.style.webkitTransform = "scale(" + oSTAGE.scale + "," + oSTAGE.scale + ")";
    a.style.width =
        Math.ceil(oSTAGE.wrapper_width) + "px";
    a.style.height = Math.ceil(oSTAGE.wrapper_height) + "px";
    for (a = update_queue.length - 1; 0 <= a; a--) update_queue[a].forget ? update_queue.splice(a, 1) : update_queue[a].doResizeUpdate ? update_queue[a].doResizeUpdate() : update_queue.splice(a, 1);
    if (a = document.getElementById("orientation_overlay")) platform.isMobile && "portrait" == oCONFIG.game_orientation && oSTAGE.is_landscape ? (a.style.backgroundImage = "url('media/front/portrait_only.gif')", a.style.display = "block", __snds.forceMute(), GAME &&
        GAME.doPause()) : (a.style.display = "none", __snds.unforceMute())
}
this.doSubText = function(a, g, c) {
    a = String(a);
    return a.replace(new RegExp(g, "g"), c)
};
var Shareable = function() {
    trace("Shareable()");
    var a = document.body.appendChild(document.createElement("canvas"));
    a.className = "canvas_shareable";
    a.width = 1200;
    a.height = 630;
    this.canvas = a;
    var g = new createjs.Stage(a);
    this.stageObj = g;
    g.enableMouseOver(0);
    g.tickChildren = !1;
    g.tickEnabled = !1;
    g.needUpdate = !1;
    g.snapToPixelsEnabled = !0;
    g.enableDOMEvents(!1);
    var c = g.addChild(new lib.scene_shareable);
    __utils.doText(c.txt_msg, SCREEN.share_message, {
        verticalAlign: "top"
    });
    var h = JSON.parse(JSON.stringify(oLANG.recap_score)),
        q = 1234;
    void 0 !== SCREEN && (q = "" + SCREEN.share_score);
    h.value = __utils.doSubText(h.value, "~amt~", q);
    __utils.doText(c.txt_score, h);
    __utils.doText(c.txt_button, oLANG.sharable_button);
    __utils.doText(c.txt_title, oLANG.sharable_title);
    __utils.doText(c.txt_copy, oLANG.sharable_copyright);
    __utils.doText(c.txt_availability, oLANG.sharable_availability);
    g.update();
    this.doDestroy = function() {
        g = null;
        document.body.removeChild(a)
    };
    this.doSaveImage = function(k, n) {
        var e = a.toDataURL("image/jpeg");
        var m = location.href;
        m = m.substring(0,
            m.lastIndexOf("/") + 1) + "user_files/";
        var r = new FormData;
        r.append("destination", "user_files");
        r.append("name", __utils.guid() + ".jpeg");
        r.append("path", m);
        r.append("shorten", "no");
        r.append("file", __utils.dataURItoBlob(e));
        var l = new XMLHttpRequest;
        l.open("POST", "save_image.php", !1);
        l.onreadystatechange = function() {
            4 == l.readyState && 200 == l.status ? (saved_file = l.responseText, n(saved_file)) : n("failed")
        };
        l.send(r)
    };
    this.doShareImage = function(k, n) {
        switch (k) {
            case "twitter":
                var e = n.slice(0, -5);
                e = base_url + "?i=" +
                    e;
                e = "https://twitter.com/intent/tweet?text=" + oLANG.tweet_text.value + "&url=" + encodeURI(e);
                window.open(e, "twitter", "width=640, height=800, scrollbars=yes");
                window.focus();
                trace(e);
                break;
            case "facebook":
                e = n.slice(0, -5);
                e = base_url + "?i=" + e;
                e = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURI(e);
                window.open(e, "share", "width=500, height=550, scrollbars=yes");
                window.focus();
                trace(e);
                break;
            case "instagram":
                e = a.toDataURL("image/jpeg");
                e = __utils.dataURItoBlob(e);
                platform.isIE && 11 >= doGetBrowser().version ?
                    window.navigator.msSaveBlob(e, oLANG.sharable_default_filename.value + ".jpeg") : (doClosePage(), printable_popup = window.open("", oLANG.sharable_default_filename.value, "location=0,menubar=0,scrollbars=0,status=0,toolbar=0,resizable=1"), printable_popup.document.write('<!DOCTYPE html><html><head><meta name="viewport" content="minimal-ui, user-scalable=yes, width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /><link rel="stylesheet" type="text/css" href="css/popup_style.css"><style>' +
                        (platform.isMobile ? oLANG.instagram_css_mobile.value : oLANG.instagram_css.value) + "</style></head><body>"), printable_popup.document.write("<center><table><tr><td>"), printable_popup.document.write('<span id="download_inst" class="download_inst"></span></td><td width="55px">'), printable_popup.document.write('<img id="button_close" class="close_button" src="media/images/close.png" onClick="javascript:opener.doClosePage();"></td></tr></table></center>'), printable_popup.document.write('<a href="' + window.URL.createObjectURL(e) +
                        '" download="' + oLANG.sharable_default_filename.value + '.jpeg" >'), printable_popup.document.write('<img id="image" class="download_image" src="' + window.URL.createObjectURL(e) + '"/>'), printable_popup.document.write("</a>"), printable_popup.document.write("</body>"), printable_popup.focus(), e = printable_popup.document.getElementById("download_inst"), platform.isMobile ? __utils.doHTMLText(e, oLANG.instagram_text_mobile) : __utils.doHTMLText(e, oLANG.instagram_text_desktop));
                break;
            case "download":
                if (e = a.toDataURL("image/jpeg"),
                    e = __utils.dataURItoBlob(e), platform.isIE && 11 >= doGetBrowser().version) window.navigator.msSaveBlob(e, oLANG.sharable_default_filename.value + ".jpeg");
                else if (platform.isiOS) doClosePage(), printable_popup = window.open("", oLANG.sharable_default_filename.value, "location=0,menubar=0,scrollbars=0,status=0,toolbar=0,resizable=1"), printable_popup.document.write('<!DOCTYPE html><html><head><meta name="viewport" content="minimal-ui, user-scalable=yes, width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" /><link rel="stylesheet" type="text/css" href="css/popup_style.css"><style>' +
                    (platform.isMobile ? oLANG.instagram_css_mobile.value : oLANG.instagram_css.value) + "</style></head><body>"), printable_popup.document.write("<center><table><tr><td>"), printable_popup.document.write('<span id="download_inst" class="download_inst"></span></td><td>'), printable_popup.document.write('</td><td><img id="button_close" class="close_button" src="media/images/close.png" onClick="javascript:opener.doClosePage();"></td></tr></table></center>'), printable_popup.document.write('<a href="' + window.URL.createObjectURL(e) +
                    '" download="' + oLANG.sharable_default_filename.value + '" >'), printable_popup.document.write('<img id="image" class="download_image" src="' + window.URL.createObjectURL(e) + '"/>'), printable_popup.document.write("</a>"), printable_popup.document.write("</body>"), printable_popup.focus(), e = printable_popup.document.getElementById("download_inst"), __utils.doHTMLText(e, oLANG.mobile_download_intructions);
                else {
                    var m = wrapper.appendChild(document.createElement("a"));
                    m.id = "download_helper";
                    m.download = oLANG.sharable_default_filename.value +
                        ".jpeg";
                    m.href = window.URL.createObjectURL(e);
                    m.click();
                    __utils.doDestroyElement("download_helper")
                }
        }
    }
};

function doBrowserAlert() {
    var a = document.getElementById("div_errors");
    b = '<table border="0" width="100%" height="100%" cellpadding="40"><tr><td align="center" valign="middle"><img border="0" src="' + (oLANG_IMAGES.logo + '"/><br>');
    b += oLANG.browser_alert.value + "<p>";
    a.innerHTML = b + '<a href="https://www.google.com/chrome/browser/"><img border="0" src="media/browser_icons/icon_chrome.png" width="64" height="64" alt="Chrome"/></a><a href="http://www.mozilla.org/firefox/new/"><img border="0" src="media/browser_icons/icon_firefox.png" width="64" height="64" alt="Firefox"/></a><a href="https://www.microsoft.com/microsoft-edge"><img border="0" src="media/browser_icons/icon_edge.png" width="64" height="64" alt="Edge"/></a><a href="http://www.apple.com/safari/"><img border="0" src="media/browser_icons/icon_safari.png" width="64" height="64" alt="Safari"/></a><a href="http://www.opera.com/"><img border="0" src="media/browser_icons/icon_opera.png" width="64" height="64" alt="Opera"/></a></td></tr></table>';
    a.style.display =
        "inline-block"
};