(function() {
	var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
		e = "undefined" !== typeof module && module.exports,
		b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
		c = function() {
			for (var b, c = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")], d = 0, f = c.length, e = {}; d < f; d++)
				if ((b = c[d]) && b[1] in a) {
					for (d = 0; d < b.length; d++) e[c[0][d]] = b[d];
					return e
				}
			return !1
		}(),
		h = {
			change: c.fullscreenchange,
			error: c.fullscreenerror
		},
		f = {
			request: function(f) {
				var g = c.requestFullscreen;
				f = f || a.documentElement;
				if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) f[g]();
				else f[g](b && Element.ALLOW_KEYBOARD_INPUT)
			},
			exit: function() {
				a[c.exitFullscreen]()
			},
			toggle: function(a) {
				this.isFullscreen ? this.exit() : this.request(a)
			},
			onchange: function(a) {
				this.on("change", a)
			},
			onerror: function(a) {
				this.on("error", a)
			},
			on: function(b, c) {
				var d = h[b];
				d && a.addEventListener(d, c, !1)
			},
			off: function(b, c) {
				var d = h[b];
				d && a.removeEventListener(d, c, !1)
			},
			raw: c
		};
	c ? (Object.defineProperties(f, {
		isFullscreen: {
			get: function() {
				return !!a[c.fullscreenElement]
			}
		},
		element: {
			enumerable: !0,
			get: function() {
				return a[c.fullscreenElement]
			}
		},
		enabled: {
			enumerable: !0,
			get: function() {
				return !!a[c.fullscreenEnabled]
			}
		}
	}), e ? module.exports = f : window.screenfull = f) : e ? module.exports = !1 : window.screenfull = !1
})();
var s_iOffsetX, s_iOffsetY, s_iScaleFactor = 1,
	s_bIsIphone = !1;
(function(a) {
	(jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
	sizeHandler()
});

function trace(a) {
	console.log(a)
}

function getSize(a) {
	var e = a.toLowerCase(),
		b = window.document,
		c = b.documentElement;
	if (void 0 === window["inner" + a]) a = c["client" + a];
	else if (window["inner" + a] != c["client" + a]) {
		var h = b.createElement("body");
		h.id = "vpw-test-b";
		h.style.cssText = "overflow:scroll";
		var f = b.createElement("div");
		f.id = "vpw-test-d";
		f.style.cssText = "position:absolute;top:-1000px";
		f.innerHTML = "<style>@media(" + e + ":" + c["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + e + ":7px!important}}</style>";
		h.appendChild(f);
		c.insertBefore(h, b.head);
		a = 7 == f["offset" + a] ? c["client" + a] : window["inner" + a];
		c.removeChild(h)
	} else a = window["inner" + a];
	return a
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
	window.matchMedia("(orientation: portrait)").matches && sizeHandler();
	window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function isIOS() {
	var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
	for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
		if (navigator.platform === a.pop()) return !0;
	return s_bIsIphone = !1
}

function getIOSWindowHeight() {
	return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
	var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
	return 1 < a ? a : 0
}

function inIframe() {
	try {
		return window.self !== window.top
	} catch (a) {
		return !0
	}
}

function _checkOrientation(a, e) {
	s_bMobile && ENABLE_CHECK_ORIENTATION && (a > e ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()))
}

function sizeHandler() {
	window.scrollTo(0, 1);
	if ($("#canvas")) {
		var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
		var e = getSize("Width");
		_checkOrientation(e, a);
		var b = Math.min(a / CANVAS_HEIGHT, e / CANVAS_WIDTH),
			c = CANVAS_WIDTH * b,
			b = CANVAS_HEIGHT * b;
		if (b < a) {
			var h = a - b;
			b += h;
			c += CANVAS_WIDTH / CANVAS_HEIGHT * h
		} else c < e && (h = e - c, c += h, b += CANVAS_HEIGHT / CANVAS_WIDTH * h);
		h = a / 2 - b / 2;
		var f = e / 2 - c / 2,
			g = CANVAS_WIDTH / c;
		if (f * g < -EDGEBOARD_X || h * g < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 * EDGEBOARD_Y), e / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), c = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, h = (a - b) / 2, f = (e - c) / 2, g = CANVAS_WIDTH / c;
		s_iOffsetX = -1 * f * g;
		s_iOffsetY = -1 * h * g;
		0 <= h && (s_iOffsetY = 0);
		0 <= f && (s_iOffsetX = 0);
		null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		null !== s_oLevelMenu && s_oLevelMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * c, s_oStage.canvas.height = 2 * b, canvas.style.width = c + "px", canvas.style.height = b + "px", a = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_iScaleFactor = 2 * a, s_oStage.scaleX = s_oStage.scaleY = 2 * a) : s_bMobile && !1 === isIOS() ? ($("#canvas").css("width", c + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = c, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(c / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
		0 > h ? $("#canvas").css("top", h + "px") : $("#canvas").css("top", "0px");
		$("#canvas").css("left", f + "px");
		fullscreenHandler()
	}
}

function playSound(a, e, b) {
	return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(e), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function stopSound(a) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, e) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(e)
}

function setMute(a, e) {
	!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(e)
}

function createBitmap(a, e, b) {
	var c = new createjs.Bitmap(a),
		h = new createjs.Shape;
	e && b ? h.graphics.beginFill("#fff").drawRect(0, 0, e, b) : h.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
	c.hitArea = h;
	return c
}

function createSprite(a, e, b, c, h, f) {
	a = null !== e ? new createjs.Sprite(a, e) : new createjs.Sprite(a);
	e = new createjs.Shape;
	e.graphics.beginFill("#000000").drawRect(-b, -c, h, f);
	a.hitArea = e;
	return a
}

function pad(a, e, b) {
	a += "";
	return a.length >= e ? a : Array(e - a.length + 1).join(b || "0") + a
}

function randomFloatBetween(a, e, b) {
	"undefined" === typeof b && (b = 2);
	return parseFloat(Math.min(a + Math.random() * (e - a), e).toFixed(b))
}

function rotateVector2D(a, e) {
	var b = e.getX() * Math.cos(a) + e.getY() * Math.sin(a),
		c = e.getX() * -Math.sin(a) + e.getY() * Math.cos(a);
	e.set(b, c)
}

function tweenVectorsOnX(a, e, b) {
	return a + b * (e - a)
}

function shuffle(a) {
	for (var e = a.length, b, c; 0 !== e;) c = Math.floor(Math.random() * e), --e, b = a[e], a[e] = a[c], a[c] = b;
	return a
}
Array.prototype.sortOn = function() {
	var a = this.slice();
	if (!arguments.length) return a.sort();
	var e = Array.prototype.slice.call(arguments);
	return a.sort(function(a, c) {
		for (var b = e.slice(), f = b.shift(); a[f] == c[f] && b.length;) f = b.shift();
		return a[f] == c[f] ? 0 : a[f] > c[f] ? 1 : -1
	})
};

function bubbleSort(a) {
	do {
		var e = !1;
		for (var b = 0; b < a.length - 1; b++) a[b] > a[b + 1] && (e = a[b], a[b] = a[b + 1], a[b + 1] = e, e = !0)
	} while (e)
}

function compare(a, e) {
	return a.index > e.index ? -1 : a.index < e.index ? 1 : 0
}

function easeLinear(a, e, b, c) {
	return b * a / c + e
}

function easeInQuad(a, e, b, c) {
	return b * (a /= c) * a + e
}

function easeInSine(a, e, b, c) {
	return -b * Math.cos(a / c * (Math.PI / 2)) + b + e
}

function easeInCubic(a, e, b, c) {
	return b * (a /= c) * a * a + e
}

function getTrajectoryPoint(a, e) {
	var b = new createjs.Point,
		c = (1 - a) * (1 - a),
		h = a * a;
	b.x = c * e.start.x + 2 * (1 - a) * a * e.traj.x + h * e.end.x;
	b.y = c * e.start.y + 2 * (1 - a) * a * e.traj.y + h * e.end.y;
	return b
}

function formatTime(a) {
	a /= 1E3;
	var e = Math.floor(a / 60);
	a = parseFloat(a - 60 * e).toFixed(1);
	var b = "",
		b = 10 > e ? b + ("0" + e + ":") : b + (e + ":");
	return 10 > a ? b + ("0" + a) : b + a
}

function degreesToRadians(a) {
	return a * Math.PI / 180
}

function checkRectCollision(a, e) {
	var b = getBounds(a, .9);
	var c = getBounds(e, .98);
	return calculateIntersection(b, c)
}

function calculateIntersection(a, e) {
	var b, c, h, f;
	var g = a.x + (b = a.width / 2);
	var k = a.y + (c = a.height / 2);
	var d = e.x + (h = e.width / 2);
	var m = e.y + (f = e.height / 2);
	g = Math.abs(g - d) - (b + h);
	k = Math.abs(k - m) - (c + f);
	return 0 > g && 0 > k ? (g = Math.min(Math.min(a.width, e.width), -g), k = Math.min(Math.min(a.height, e.height), -k), {
		x: Math.max(a.x, e.x),
		y: Math.max(a.y, e.y),
		width: g,
		height: k,
		rect1: a,
		rect2: e
	}) : null
}

function getBounds(a, e) {
	var b = {
		x: Infinity,
		y: Infinity,
		width: 0,
		height: 0
	};
	if (a instanceof createjs.Container) {
		b.x2 = -Infinity;
		b.y2 = -Infinity;
		var c = a.children,
			h = c.length,
			f;
		for (f = 0; f < h; f++) {
			var g = getBounds(c[f], 1);
			g.x < b.x && (b.x = g.x);
			g.y < b.y && (b.y = g.y);
			g.x + g.width > b.x2 && (b.x2 = g.x + g.width);
			g.y + g.height > b.y2 && (b.y2 = g.y + g.height)
		}
		Infinity == b.x && (b.x = 0);
		Infinity == b.y && (b.y = 0);
		Infinity == b.x2 && (b.x2 = 0);
		Infinity == b.y2 && (b.y2 = 0);
		b.width = b.x2 - b.x;
		b.height = b.y2 - b.y;
		delete b.x2;
		delete b.y2
	} else {
		if (a instanceof createjs.Bitmap) {
			h = a.sourceRect || a.image;
			f = h.width * e;
			var k = h.height * e
		} else if (a instanceof createjs.Sprite)
			if (a.spriteSheet._frames && a.spriteSheet._frames[a.currentFrame] && a.spriteSheet._frames[a.currentFrame].image) {
				h = a.spriteSheet.getFrame(a.currentFrame);
				f = h.rect.width;
				k = h.rect.height;
				c = h.regX;
				var d = h.regY
			} else b.x = a.x || 0, b.y = a.y || 0;
		else b.x = a.x || 0, b.y = a.y || 0;
		c = c || 0;
		f = f || 0;
		d = d || 0;
		k = k || 0;
		b.regX = c;
		b.regY = d;
		h = a.localToGlobal(0 - c, 0 - d);
		g = a.localToGlobal(f - c, k - d);
		f = a.localToGlobal(f - c, 0 - d);
		c = a.localToGlobal(0 - c, k - d);
		b.x = Math.min(Math.min(Math.min(h.x, g.x), f.x), c.x);
		b.y = Math.min(Math.min(Math.min(h.y, g.y), f.y), c.y);
		b.width = Math.max(Math.max(Math.max(h.x, g.x), f.x), c.x) - b.x;
		b.height = Math.max(Math.max(Math.max(h.y, g.y), f.y), c.y) - b.y
	}
	return b
}

function NoClickDelay(a) {
	this.element = a;
	window.Touch && this.element.addEventListener("touchstart", this, !1)
}

function shuffle(a) {
	for (var e = a.length, b, c; 0 < e;) c = Math.floor(Math.random() * e), e--, b = a[e], a[e] = a[c], a[c] = b;
	return a
}
NoClickDelay.prototype = {
	handleEvent: function(a) {
		switch (a.type) {
			case "touchstart":
				this.onTouchStart(a);
				break;
			case "touchmove":
				this.onTouchMove(a);
				break;
			case "touchend":
				this.onTouchEnd(a)
		}
	},
	onTouchStart: function(a) {
		a.preventDefault();
		this.moved = !1;
		this.element.addEventListener("touchmove", this, !1);
		this.element.addEventListener("touchend", this, !1)
	},
	onTouchMove: function(a) {
		this.moved = !0
	},
	onTouchEnd: function(a) {
		this.element.removeEventListener("touchmove", this, !1);
		this.element.removeEventListener("touchend", this, !1);
		if (!this.moved) {
			a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
			3 == a.nodeType && (a = a.parentNode);
			var e = document.createEvent("MouseEvents");
			e.initEvent("click", !0, !0);
			a.dispatchEvent(e)
		}
	}
};
(function() {
	function a(a) {
		var b = {
			focus: "visible",
			focusin: "visible",
			pageshow: "visible",
			blur: "hidden",
			focusout: "hidden",
			pagehide: "hidden"
		};
		a = a || window.event;
		a.type in b ? document.body.className = b[a.type] : (document.body.className = this[e] ? "hidden" : "visible", "hidden" === document.body.className ? s_oMain.stopUpdate() : s_oMain.startUpdate())
	}
	var e = "hidden";
	e in document ? document.addEventListener("visibilitychange", a) : (e = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", a) : (e = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", a) : (e = "msHidden") in document ? document.addEventListener("msvisibilitychange", a) : "onfocusin" in document ? document.onfocusin = document.onfocusout = a : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = a
})();

function ctlArcadeResume() {
	null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
	null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
	for (var e = window.location.search.substring(1).split("&"), b = 0; b < e.length; b++) {
		var c = e[b].split("=");
		if (c[0] == a) return c[1]
	}
}
this.clearLocalStorage = function() {
	s_iLastLevel = 1;
	s_bStorageAvailable && localStorage.clear()
};

function saveItem(a, e) {
	s_bStorageAvailable && localStorage.setItem(a, e)
}

function getItem(a) {
	return s_bStorageAvailable ? localStorage.getItem(a) : null
}

function fullscreenHandler() {
	ENABLE_FULLSCREEN && !inIframe() && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut(), null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
	s_bFullscreen = screenfull.isFullscreen;
	null !== s_oInterface && s_oInterface.resetFullscreenBut();
	null !== s_oMenu && s_oMenu.resetFullscreenBut();
	null !== s_oLevelMenu && s_oLevelMenu.resetFullscreenBut()
});

function CSpriteLibrary() {
	var a, e, b, c, h, f;
	this.init = function(g, k, d) {
		b = e = 0;
		c = g;
		h = k;
		f = d;
		a = {}
	};
	this.addSprite = function(b, c) {
		a.hasOwnProperty(b) || (a[b] = {
			szPath: c,
			oSprite: new Image
		}, e++)
	};
	this.getSprite = function(b) {
		return a.hasOwnProperty(b) ? a[b].oSprite : null
	};
	this._onSpritesLoaded = function() {
		h.call(f)
	};
	this._onSpriteLoaded = function() {
		c.call(f);
		++b == e && this._onSpritesLoaded()
	};
	this.loadSprites = function() {
		for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
				this.oSpriteLibrary._onSpriteLoaded()
			},
			a[b].oSprite.src = a[b].szPath
	};
	this.getNumSprites = function() {
		return e
	}
}
var CANVAS_WIDTH = 1136,
	CANVAS_HEIGHT = 832,
	EDGEBOARD_X = 0,
	EDGEBOARD_Y = 170,
	PRIMARY_FONT = "walibi",
	FONT_COLOR = "#fff",
	FONT_STROKE = "#7b0040",
	FPS = 30,
	FPS_TIME = 1E3 / FPS,
	DISABLE_SOUND_MOBILE = !1,
	ENABLE_FULLSCREEN = !0,
	STATE_LOADING = 0,
	STATE_MENU = 1,
	STATE_LEVEL_MENU = 2,
	STATE_HELP = 3,
	STATE_GAME = 3,
	ON_MOUSE_DOWN = 0,
	ON_MOUSE_UP = 1,
	ON_MOUSE_OVER = 2,
	ON_MOUSE_OUT = 3,
	ON_DRAG_START = 4,
	ON_DRAG_END = 5,
	ON_REMOVE_CHARACTER = 6,
	ON_SPAWN_ENEMY_BY_BOSS = 7,
	ON_BOSS_DEATH = 8,
	ON_SHOT = 9,
	ON_MSG_BOX_LEFT_BUT = 10,
	ON_MSG_BOX_CENTER_BUT = 11,
	ON_MSG_BOX_RIGHT_BUT = 12,
	SURVIVOR_ID = 5,
	BULLET_START = {
		x: 96,
		y: 127
	},
	NUM_LEVELS, NUM_ENEMIES = 6,
	NUM_ROWS_PAGE_LEVEL = 3,
	NUM_COLS_PAGE_LEVEL = 5,
	MIN_CHARACTER_Y = 350,
	MAX_CHARACTER_Y, BULLET_SPEED, BULLET_DAMAGE = [1.6, 2.4],
	BOSS_START_X = CANVAS_WIDTH + 200,
	BOSS_START_Y = CANVAS_HEIGHT / 2 + 50,
	BOSS_ID = 5,
	BOSS_NUM_SPAWN, TIME_SPAWN_BY_BOSS, MIN_TIME_INCITE = 1E4,
	MAX_TIME_INCITE = 25E3,
	NUM_POWERUP = 4,
	POWERUP_SIZE = [{
		width: 138,
		height: 152
	}, {
		width: 43,
		height: 69
	}, {
		width: 80,
		height: 60
	}, {
		width: 61,
		height: 104
	}],
	POWERUP_FRAMES = [19, 15, 5, 9],
	POWERUP_TIME = [1E4, 16E3, 1E3, 1E3],
	POWERUP_OCCUR, POWERUP_LIFE, POWERUP_DURATION, EXTRA_SCORE_DIAMOND, EXTRA_SCORE_DOLLARS, ENABLE_CHECK_ORIENTATION, TEXT_SELECT_LEVEL = "SELECT A LEVEL",
	TEXT_ARE_SURE = "ARE YOU SURE?",
	TEXT_GAMEOVER = "GAME OVER",
	TEXT_CONGRATS = "YOU'RE THE STAR BAKER!",
	TEXT_SCORE = "SCORE",
	TEXT_NO = "NO",
	TEXT_YES = "YES",
	TEXT_OK = "OK",
	TEXT_KILL = "KILL",
	TEXT_AVOID = "AVOID",
	TEXT_PAUSE = "PAUSE",
	TEXT_LEVEL = "LEVEL",
	TEXT_LEVEL_COMPLETE = "LEVEL COMPLETE!!",
	TEXT_POWERUP = ["SLOW DOWN!!", "SUPERSHOOT!!", "SCORE-o-MATIC!!", "EXTRA BONUS!!"],
	TEXT_DELETE_SAVINGS = "ALL YOUR PROGRESS WILL BE DELETED! ARE YOU SURE?",
	TEXT_ERR_LS = "YOUR WEB BROWSER DOES NOT SUPPORT LOCAL STORAGE. IF YOU'RE USING SAFARI, IT MAY BE RELATED TO PRIVATE BROWSING. AS A RESULT, SOME INFO MAY NOT BE SAVED OR SOME FEATURES MAY NOT BE AVAILABLE.",
	TEXT_SHARE_IMAGE = "200x200.jpg",
	TEXT_SHARE_TITLE = "Congratulations!",
	TEXT_SHARE_MSG1 = "You collected <strong>",
	TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!",
	TEXT_SHARE_SHARE1 = "My score is ",
	TEXT_SHARE_SHARE2 = " points! Can you do better";

function CPreloader() {
	var a, e, b, c, h, f, g;
	this._init = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
		s_oSpriteLibrary.loadSprites();
		g = new createjs.Container;
		s_oStage.addChild(g)
	};
	this.unload = function() {
		g.removeAllChildren()
	};
	this.hide = function() {
		var a = this;
		setTimeout(function() {
			createjs.Tween.get(f).to({
				alpha: 1
			}, 500).call(function() {
				a.unload();
				s_oMain.gotoMenu()
			})
		}, 1E3)
	};
	this._onImagesLoaded = function() {};
	this._onAllImagesLoaded = function() {
		this.attachSprites();
		s_oMain.preloaderReady()
	};
	this.attachSprites = function() {
		var k = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		g.addChild(k);
		k = s_oSpriteLibrary.getSprite("progress_bar");
		c = createBitmap(k);
		c.x = CANVAS_WIDTH / 2 - k.width / 2;
		c.y = CANVAS_HEIGHT - 220;
		g.addChild(c);
		a = k.width;
		e = k.height;
		h = new createjs.Shape;
		h.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(c.x, c.y, 1, e);
		g.addChild(h);
		c.mask = h;
		b = new createjs.Text("", "30px " + PRIMARY_FONT, "#fff");
		b.x = CANVAS_WIDTH / 2;
		b.y = CANVAS_HEIGHT - 175;
		b.shadow = new createjs.Shadow("#000", 2, 2, 2);
		b.textBaseline = "alphabetic";
		b.textAlign = "center";
		g.addChild(b);
		f = new createjs.Shape;
		f.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		f.alpha = 0;
		g.addChild(f)
	};
	this.refreshLoader = function(f) {
		b.text = f + "%";
		h.graphics.clear();
		f = Math.floor(f * a / 100);
		h.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(c.x, c.y, f, e)
	};
	this._init()
}

function CMain(a) {
	var e, b = 0,
		c = 0,
		h = STATE_LOADING,
		f, g, k;
	this.initContainer = function() {
		s_oCanvas = document.getElementById("canvas");
		s_oStage = new createjs.Stage(s_oCanvas);
		s_oStage.preventSelection = !0;
		createjs.Touch.enable(s_oStage, !0);
		s_bMobile = jQuery.browser.mobile;
		!1 === s_bMobile && (s_oStage.enableMouseOver(FPS), $("body").on("contextmenu", "#canvas", function(d) {
			return !1
		}));
		s_iPrevTime = (new Date).getTime();
		createjs.Ticker.addEventListener("tick", this._update);
		createjs.Ticker.setFPS(FPS);
		navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
		s_oSpriteLibrary = new CSpriteLibrary;
		g = new CPreloader
	};
	this.preloaderReady = function() {
		jQuery.getJSON("game_settings.json", this.onLoadedJSON);
		e = !0
	};
	this.onLoadedJSON = function(d) {
		f = d;
		s_oMain._loadImages();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_oMain._initSounds()
	};
	this.soundLoaded = function() {
		b++;
		g.refreshLoader(Math.floor(b / c * 100));
		b === c && this._onAllResourcesLoaded()
	};
	this._initSounds = function() {
		var d = [];
		d.push({
			path: "./sounds/",
			filename: "boss_death",
			loop: !1,
			volume: 1,
			ingamename: "boss_death"
		});
		d.push({
			path: "./sounds/",
			filename: "press_but",
			loop: !1,
			volume: 1,
			ingamename: "press_but"
		});
		d.push({
			path: "./sounds/",
			filename: "death_survivor",
			loop: !0,
			volume: 1,
			ingamename: "death_survivor"
		});
		d.push({
			path: "./sounds/",
			filename: "energy_lost",
			loop: !1,
			volume: 1,
			ingamename: "energy_lost"
		});
		d.push({
			path: "./sounds/",
			filename: "enemy_hit_0",
			loop: !1,
			volume: 1,
			ingamename: "enemy_hit_0"
		});
		d.push({
			path: "./sounds/",
			filename: "enemy_hit_1",
			loop: !1,
			volume: 1,
			ingamename: "enemy_hit_1"
		});
		d.push({
			path: "./sounds/",
			filename: "enemy_hit_2",
			loop: !1,
			volume: 1,
			ingamename: "enemy_hit_2"
		});
		d.push({
			path: "./sounds/",
			filename: "enemy_hit_3",
			loop: !1,
			volume: 1,
			ingamename: "enemy_hit_3"
		});
		d.push({
			path: "./sounds/",
			filename: "enemy_hit_4",
			loop: !1,
			volume: 1,
			ingamename: "enemy_hit_4"
		});
		d.push({
			path: "./sounds/",
			filename: "boss_hit",
			loop: !1,
			volume: 1,
			ingamename: "boss_hit"
		});
		d.push({
			path: "./sounds/",
			filename: "game_over",
			loop: !1,
			volume: 1,
			ingamename: "game_over"
		});
		d.push({
			path: "./sounds/",
			filename: "powerup",
			loop: !1,
			volume: 1,
			ingamename: "powerup"
		});
		d.push({
			path: "./sounds/",
			filename: "shot1",
			loop: !1,
			volume: 1,
			ingamename: "shot1"
		});
		d.push({
			path: "./sounds/",
			filename: "shot0",
			loop: !1,
			volume: 1,
			ingamename: "shot0"
		});
		d.push({
			path: "./sounds/",
			filename: "win",
			loop: !1,
			volume: 1,
			ingamename: "win"
		});
		d.push({
			path: "./sounds/",
			filename: "level_cleared",
			loop: !1,
			volume: 1,
			ingamename: "level_cleared"
		});
		d.push({
			path: "./sounds/",
			filename: "boss_incite_0",
			loop: !1,
			volume: 1,
			ingamename: "boss_incite_0"
		});
		d.push({
			path: "./sounds/",
			filename: "boss_incite_1",
			loop: !1,
			volume: 1,
			ingamename: "boss_incite_1"
		});
		d.push({
			path: "./sounds/",
			filename: "boss_incite_2",
			loop: !1,
			volume: 1,
			ingamename: "boss_incite_2"
		});
		d.push({
			path: "./sounds/",
			filename: "launch",
			loop: !1,
			volume: 1,
			ingamename: "launch"
		});
		d.push({
			path: "./sounds/",
			filename: "soundtrack",
			loop: !0,
			volume: 1,
			ingamename: "soundtrack"
		});
		c += d.length;
		s_aSounds = [];
		for (var a = 0; a < d.length; a++) s_aSounds[d[a].ingamename] = new Howl({
			src: [d[a].path + d[a].filename + ".mp3", d[a].path + d[a].filename + ".ogg"],
			autoplay: !1,
			preload: !0,
			loop: d[a].loop,
			volume: d[a].volume,
			onload: s_oMain.soundLoaded()
		})
	};
	this._loadImages = function() {
		s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
		s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
		s_oSpriteLibrary.addSprite("but_continue", "./sprites/but_continue.png");
		s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
		s_oSpriteLibrary.addSprite("ctl_logo", "./sprites/ctl_logo.png");
		s_oSpriteLibrary.addSprite("but_info", "./sprites/but_info.png");
		s_oSpriteLibrary.addSprite("but_yes", "./sprites/but_yes.png");
		s_oSpriteLibrary.addSprite("but_no", "./sprites/but_no.png");
		s_oSpriteLibrary.addSprite("lose_panel", "./sprites/lose_panel.png");
		s_oSpriteLibrary.addSprite("win_panel", "./sprites/win_panel.png");
		s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
		s_oSpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
		s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
		s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
		s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
		s_oSpriteLibrary.addSprite("heart", "./sprites/heart.png");
		s_oSpriteLibrary.addSprite("bullet", "./sprites/bullet.png");
		s_oSpriteLibrary.addSprite("but_level", "./sprites/but_level.png");
		s_oSpriteLibrary.addSprite("grass", "./sprites/grass.png");
		s_oSpriteLibrary.addSprite("king_bg", "./sprites/king_bg.png");
		s_oSpriteLibrary.addSprite("vegan0", "./sprites/vegan/vegan0.png");
		s_oSpriteLibrary.addSprite("vegan1", "./sprites/vegan/vegan1.png");
		s_oSpriteLibrary.addSprite("vegan2", "./sprites/vegan/vegan2.png");
		s_oSpriteLibrary.addSprite("vegan3", "./sprites/vegan/vegan3.png");
		s_oSpriteLibrary.addSprite("chicken_walk", "./sprites/vegan/chicken_walk.png");
		s_oSpriteLibrary.addSprite("chicken_dead", "./sprites/vegan/chicken_dead.png");
		s_oSpriteLibrary.addSprite("player", "./sprites/vegan/player.png");
		s_oSpriteLibrary.addSprite("star_small", "./sprites/star_small.png");
		s_oSpriteLibrary.addSprite("character_0_dead", "./sprites/character/character_0_dead.png");
		s_oSpriteLibrary.addSprite("character_0_walk", "./sprites/character/character_0_walk.png");
		s_oSpriteLibrary.addSprite("character_1_walk", "./sprites/character/character_1_walk.png");
		s_oSpriteLibrary.addSprite("character_1_dead", "./sprites/character/character_1_dead.png");
		s_oSpriteLibrary.addSprite("character_2_walk", "./sprites/character/character_2_walk.png");
		s_oSpriteLibrary.addSprite("character_2_dead", "./sprites/character/character_2_dead.png");
		s_oSpriteLibrary.addSprite("character_3_walk", "./sprites/character/character_3_walk.png");
		s_oSpriteLibrary.addSprite("character_3_dead", "./sprites/character/character_3_dead.png");
		s_oSpriteLibrary.addSprite("character_4_walk", "./sprites/character/character_4_walk.png");
		s_oSpriteLibrary.addSprite("character_4_dead", "./sprites/character/character_4_dead.png");
		s_oSpriteLibrary.addSprite("character_5_walk", "./sprites/character/character_5_walk.png");
		s_oSpriteLibrary.addSprite("character_5_dead", "./sprites/character/character_5_dead.png");
		s_oSpriteLibrary.addSprite("king_cast_0", "./sprites/character/king/king_cast_0.png");
		s_oSpriteLibrary.addSprite("king_cast_1", "./sprites/character/king/king_cast_1.png");
		s_oSpriteLibrary.addSprite("king_die", "./sprites/character/king/king_die.png");
		s_oSpriteLibrary.addSprite("king_walk", "./sprites/character/king/king_walk.png");
		s_oSpriteLibrary.addSprite("baloon_0", "./sprites/baloon_0.png");
		s_oSpriteLibrary.addSprite("baloon_1", "./sprites/baloon_1.png");
		s_oSpriteLibrary.addSprite("baloon_2", "./sprites/baloon_2.png");
		s_oSpriteLibrary.addSprite("baloon_3", "./sprites/baloon_3.png");
		s_oSpriteLibrary.addSprite("arrow_left", "./sprites/arrow_left.png");
		s_oSpriteLibrary.addSprite("arrow_right", "./sprites/arrow_right.png");
		s_oSpriteLibrary.addSprite("but_pause", "./sprites/but_pause.png");
		s_oSpriteLibrary.addSprite("character_bar_bg", "./sprites/character_bar_bg.png");
		s_oSpriteLibrary.addSprite("character_bar_fill", "./sprites/character_bar_fill.png");
		s_oSpriteLibrary.addSprite("but_restart", "./sprites/but_restart.png");
		s_oSpriteLibrary.addSprite("but_home", "./sprites/but_home.png");
		s_oSpriteLibrary.addSprite("star", "./sprites/star.png");
		s_oSpriteLibrary.addSprite("powerup_0", "./sprites/powerup_0.png");
		s_oSpriteLibrary.addSprite("powerup_1", "./sprites/powerup_1.png");
		s_oSpriteLibrary.addSprite("powerup_2", "./sprites/powerup_2.png");
		s_oSpriteLibrary.addSprite("powerup_3", "./sprites/powerup_3.png");
		s_oSpriteLibrary.addSprite("powerup_bg", "./sprites/powerup_bg.png");
		s_oSpriteLibrary.addSprite("powerups", "./sprites/powerups.png");
		s_oSpriteLibrary.addSprite("but_generic", "./sprites/but_generic.png");
		s_oSpriteLibrary.addSprite("healthbar_king", "./sprites/healthbar_king.png");
		s_oSpriteLibrary.addSprite("healthbar_king_fill", "./sprites/healthbar_king_fill.png");
		s_oSpriteLibrary.addSprite("healthbar_king_token", "./sprites/healthbar_king_token.png");
		for (var a = 0; 39 > a; a++) s_oSpriteLibrary.addSprite("vs_panel_" + a, "./sprites/nextround/vs_panel_" + a + ".png");
		c += s_oSpriteLibrary.getNumSprites();
		s_oSpriteLibrary.loadSprites()
	};
	this._onImagesLoaded = function() {
		b++;
		g.refreshLoader(Math.floor(b / c * 100));
		b === c && this._onAllResourcesLoaded()
	};
	this._onAllResourcesLoaded = function() {
		g.unload();
		try {
			saveItem("ls_available", "ok")
		} catch (d) {
			s_bStorageAvailable = !1
		}
		isIOS() || (s_oSoundTrack = playSound("soundtrack", 1, !0));
		s_oGameSettings = new CGameSettings(f);
		this.gotoMenu()
	};
	this._onAllImagesLoaded = function() {};
	this.getScoreTillLevel = function(a) {
		if (!s_bStorageAvailable) return 0;
		for (var d = 0, b = 0; b < a - 1; b++) d += parseInt(getItem("vegans_vs_king_bacon_score_level_" + (b + 1)));
		return d
	};
	this.setLocalStorageLevel = function(a) {
		s_iLastLevel < a && (s_iLastLevel = a, saveItem("vegans_vs_king_bacon_level", s_iLastLevel))
	};
	this.setLocalStorageLevelInfos = function(a, b, c, f) {
		saveItem("vegans_vs_king_bacon_score_level_" + f, a);
		saveItem("vegans_vs_king_bacon_life_level_" + (f + 1), b);
		saveItem("vegans_vs_king_bacon_stars_level_" + f, c)
	};
	this.clearLocalStorage = function() {
		s_iLastLevel = 1;
		s_bStorageAvailable && localStorage.clear()
	};
	this.gotoMenu = function() {
		new CMenu;
		h = STATE_MENU
	};
	this.gotoLevelMenu = function() {
		new CLevelMenu;
		h = STATE_LEVEL_MENU
	};
	this.gotoGame = function(a, b, f) {
		k = new CGame(a, b, f);
		h = STATE_GAME
	};
	this.gotoHelp = function() {
		new CHelp;
		h = STATE_HELP
	};
	this.levelSelected = function(a) {
		a >= s_iLastLevel && (s_iLastLevel = a);
		var d = this.getScoreTillLevel(a),
			b = getItem("vegans_vs_king_bacon_life_level_" + a);
		null === b && (b = NUM_LIVES);
		this.gotoGame(a, d, b)
	};
	this.pause = function() {
		e = !1;
		createjs.Ticker.paused = !0
	};
	this.unpause = function() {
		s_iPrevTime = (new Date).getTime();
		e = !0;
		createjs.Ticker.paused = !1
	};
	this.stopUpdate = function() {
		e = !1;
		createjs.Ticker.paused = !0;
		$("#block_game").css("display", "block");
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
	};
	this.startUpdate = function() {
		s_iPrevTime = (new Date).getTime();
		e = !0;
		createjs.Ticker.paused = !1;
		$("#block_game").css("display", "none");
		(!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
	};
	this._update = function(a) {
		if (!1 !== e) {
			var d = (new Date).getTime();
			s_iTimeElaps = d - s_iPrevTime;
			s_iCntTime += s_iTimeElaps;
			s_iCntFps++;
			s_iPrevTime = d;
			1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
			h === STATE_GAME && k.update();
			s_oStage.update(a)
		}
	};
	s_oMain = this;
	BULLET_SPEED = a.bullet_speed;
	NUM_LIVES = a.num_lives;
	POWERUP_OCCUR = a.powerup_occurrence;
	POWERUP_LIFE = a.powerup_life;
	POWERUP_DURATION = a.powerup_duration;
	EXTRA_SCORE_DIAMOND = a.extra_score_diamond;
	EXTRA_SCORE_DOLLARS = a.extra_score_dollars;
	TIME_SPAWN_BY_BOSS = a.time_spawn_by_boss;
	BOSS_NUM_SPAWN = a.boss_num_spawn;
	ENABLE_FULLSCREEN = a.fullscreen;
	ENABLE_CHECK_ORIENTATION = a.check_orientation;
	this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
	s_iCntTime = 0,
	s_iTimeElaps = 0,
	s_iPrevTime = 0,
	s_iCntFps = 0,
	s_iCurFps = 0,
	s_bFullscreen = !1,
	s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oSoundTrack = null,
	s_oCanvas, s_iLastLevel = 1,
	s_bStorageAvailable = !0,
	s_aSounds;

function CGameSettings(a) {
	var e, b, c, h, f, g, k;
	this._init = function(a) {
		this._initLevelInfos(a);
		this._initCharacterInfos(a);
		this._initGuiElement();
		this._initPlayer();
		this._initCharacter()
	};
	this._initLevelInfos = function(a) {
		a = a.level_info;
		k = [];
		NUM_LEVELS = Object.keys(a).length;
		for (var d = 0; d < NUM_LEVELS; d++) k[d] = {
			num_character: a[d].num_character,
			character_occur: a[d].character_occur,
			num_survivor: a[d].num_survivor,
			character_time_spawn_interval: a[d].character_time_spawn_interval,
			perc_enemy_to_kill_per_stars: a[d].perc_enemy_to_kill_per_stars,
			spawn_boss: a[d].spawn_boss
		}
	};
	this._initCharacterInfos = function(a) {
		b = a.survivor_speed;
		c = a.survivor_points;
		e = a.survivor_health;
		f = a.character_speed;
		h = a.character_health;
		g = a.character_points;
		f.push(a.boss_speed);
		h.push(a.boss_health);
		g.push(a.boss_points)
	};
	this._initGuiElement = function() {
		s_aSpriteSheetVegan = [];
		for (var a = 0; 4 > a; a++) {
			var b = s_oSpriteLibrary.getSprite("vegan" + a);
			var f = b.width / 2;
			var c = b.height;
			c = {
				images: [b],
				frames: {
					width: f,
					height: c,
					regX: f / 2,
					regY: c
				},
				animations: {
					stop: [1],
					idle: [0, 1]
				}
			};
			s_aSpriteSheetVegan[a] = new createjs.SpriteSheet(c)
		}
		b = s_oSpriteLibrary.getSprite("heart");
		f = b.width / 2;
		c = b.height;
		c = {
			images: [b],
			frames: {
				width: f,
				height: c,
				regX: 0,
				regY: 0
			},
			animations: {
				full: [0],
				empty: [1]
			}
		};
		s_oSpriteSheetHeart = new createjs.SpriteSheet(c)
	};
	this._initPlayer = function() {
		var a = s_oSpriteLibrary.getSprite("player"),
			b = a.width / 5,
			c = a.height / 6;
		s_oSpriteSheetPlayer = new createjs.SpriteSheet({
			images: [a],
			frames: {
				width: b,
				height: c,
				regX: b / 2,
				regY: c
			},
			animations: {
				start0: [0],
				launch0: [0, 12, "wait0"],
				wait0: [12, 12],
				start1: [13],
				launch1: [13,
					25, "wait1"
				],
				wait1: [25, 25],
				hit: [26, 29]
			}
		})
	};
	this._initCharacter = function() {
		var a = [{
			name: "character_0",
			walkframe: 9,
			deadframex: 12,
			deadframey: 1,
			totdeadframe: 12,
			deadoffsetx: 0,
			deadoffsety: -11,
			framerate: 20
		}, {
			name: "character_1",
			walkframe: 14,
			deadframex: 11,
			deadframey: 1,
			totdeadframe: 11,
			deadoffsetx: -18,
			deadoffsety: 1,
			framerate: 20
		}, {
			name: "character_2",
			walkframe: 12,
			deadframex: 6,
			deadframey: 2,
			totdeadframe: 12,
			deadoffsetx: 14,
			deadoffsety: 0,
			framerate: 12
		}, {
			name: "character_3",
			walkframe: 14,
			deadframex: 6,
			deadframey: 2,
			totdeadframe: 12,
			deadoffsetx: 32,
			deadoffsety: 0,
			framerate: 10
		}, {
			name: "character_4",
			walkframe: 9,
			deadframex: 4,
			deadframey: 3,
			totdeadframe: 11,
			deadoffsetx: 0,
			deadoffsety: 0,
			framerate: 20
		}, {
			name: "character_5",
			walkframe: 8,
			deadframex: 4,
			deadframey: 3,
			totdeadframe: 12,
			deadoffsetx: 0,
			deadoffsety: 0,
			framerate: 10
		}];
		s_aSpriteSheetCharacterWalk = [];
		s_aSpriteSheetCharacterDead = [];
		for (var b = 0; b < a.length; b++) {
			var c = s_oSpriteLibrary.getSprite(a[b].name + "_walk"),
				f = c.width / a[b].walkframe,
				g = c.height,
				c = {
					images: [c],
					framerate: a[b].framerate,
					frames: {
						width: f,
						height: g,
						regX: f / 2,
						regY: g
					},
					animations: {
						idle: [0, a[b].walkframe - 1]
					}
				};
			s_aSpriteSheetCharacterWalk[b] = new createjs.SpriteSheet(c);
			c = s_oSpriteLibrary.getSprite(a[b].name + "_dead");
			f = c.width / a[b].deadframex;
			g = c.height / a[b].deadframey;
			c = {
				images: [c],
				frames: {
					width: f,
					height: g,
					regX: f / 2 + a[b].deadoffsetx,
					regY: g + a[b].deadoffsety
				},
				animations: {
					idle: [0, a[b].totdeadframe - 1, "invisible"],
					invisible: [a[b].totdeadframe]
				}
			};
			s_aSpriteSheetCharacterDead[b] = new createjs.SpriteSheet(c)
		}
	};
	this.getLevelInfo = function(a) {
		return k[a]
	};
	this.getCharacterHealth = function(a) {
		return h[a]
	};
	this.getSurvivorHealth = function() {
		return e
	};
	this.getCharacterSpeed = function(a) {
		return f[a]
	};
	this.getSurvivorSpeed = function() {
		return b
	};
	this.getCharacterScore = function(a) {
		return g[a]
	};
	this.getSurvivorScore = function() {
		return c
	};
	this._init(a)
}
var s_oSpriteSheetKingGui, s_aSpriteSheetVegan, s_oSpriteSheetHeart, s_oSpriteSheetPlayer, s_aSpriteSheetCharacterWalk, s_aSpriteSheetCharacterDead;

function CTextButton(a, e, b, c, h, f, g, k) {
	var d, m, l, r, p, w, v;
	this._init = function(a, b, c, f, g, e, h) {
		d = [];
		m = [];
		g = createBitmap(c);
		var k = Math.ceil(h / 20);
		p = new createjs.Text(f, h + "px " + PRIMARY_FONT, "#000000");
		p.textAlign = "center";
		p.textBaseline = "alphabetic";
		var n = p.getBounds();
		p.x = c.width / 2 + k;
		p.y = Math.floor(c.height / 2) + n.height / 3 + k;
		r = new createjs.Text(f, h + "px " + PRIMARY_FONT, e);
		r.textAlign = "center";
		r.textBaseline = "alphabetic";
		n = r.getBounds();
		r.x = c.width / 2;
		r.y = Math.floor(c.height / 2) + n.height / 3;
		l = new createjs.Container;
		l.x = a;
		l.y = b;
		l.regX = c.width / 2;
		l.regY = c.height / 2;
		l.addChild(g, p, r);
		x.addChild(l);
		s_bMobile || (l.cursor = "pointer");
		this._initListener()
	};
	this.unload = function() {
		l.off("mousedown", w);
		l.off("pressup", v);
		x.removeChild(l)
	};
	this.setVisible = function(a) {
		l.visible = a
	};
	this._initListener = function() {
		w = l.on("mousedown", this.buttonDown);
		v = l.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		d[a] = b;
		m[a] = c
	};
	this.buttonRelease = function() {
		l.scaleX = 1;
		l.scaleY = 1;
		playSound("press_but", 1, !1);
		d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(m[ON_MOUSE_UP])
	};
	this.buttonDown = function() {
		l.scaleX = .9;
		l.scaleY = .9;
		d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN])
	};
	this.changeText = function(a) {
		r.text = a;
		p.text = a
	};
	this.setTextPosition = function(a) {
		r.y = a;
		p.y = a + 2
	};
	this.setPosition = function(a, b) {
		l.x = a;
		l.y = b
	};
	this.setX = function(a) {
		l.x = a
	};
	this.setY = function(a) {
		l.y = a
	};
	this.getButtonImage = function() {
		return l
	};
	this.getX = function() {
		return l.x
	};
	this.getY = function() {
		return l.y
	};
	var x = k;
	this._init(a, e, b, c, h, f, g);
	return this
}

function CToggle(a, e, b, c, h) {
	var f, g, k, d, m, l, r;
	this._init = function(a, b, c, e, h) {
		r = void 0 !== h ? h : s_oStage;
		g = [];
		k = [];
		h = new createjs.SpriteSheet({
			images: [c],
			frames: {
				width: c.width / 2,
				height: c.height,
				regX: c.width / 2 / 2,
				regY: c.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		});
		f = e;
		d = createSprite(h, "state_" + f, c.width / 2 / 2, c.height / 2, c.width / 2, c.height);
		d.x = a;
		d.y = b;
		d.stop();
		s_bMobile || (d.cursor = "pointer");
		r.addChild(d);
		this._initListener()
	};
	this.unload = function() {
		d.off("mousedown", m);
		d.off("pressup", l);
		r.removeChild(d)
	};
	this._initListener = function() {
		m = d.on("mousedown", this.buttonDown);
		l = d.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		g[a] = b;
		k[a] = c
	};
	this.setCursorType = function(a) {
		d.cursor = a
	};
	this.setActive = function(a) {
		f = a;
		d.gotoAndStop("state_" + f)
	};
	this.buttonRelease = function() {
		d.scaleX = 1;
		d.scaleY = 1;
		playSound("press_but", 1, !1);
		f = !f;
		d.gotoAndStop("state_" + f);
		g[ON_MOUSE_UP] && g[ON_MOUSE_UP].call(k[ON_MOUSE_UP], f)
	};
	this.buttonDown = function() {
		d.scaleX = .9;
		d.scaleY = .9;
		g[ON_MOUSE_DOWN] && g[ON_MOUSE_DOWN].call(k[ON_MOUSE_DOWN])
	};
	this.setPosition = function(a, b) {
		d.x = a;
		d.y = b
	};
	this._init(a, e, b, c, h)
}

function CGfxButton(a, e, b, c) {
	var h, f, g, k, d, m, l, r, p = !1;
	this._init = function(a, b, c) {
		h = [];
		f = [];
		k = [];
		g = createBitmap(c);
		g.x = a;
		g.y = b;
		m = d = 1;
		g.regX = c.width / 2;
		g.regY = c.height / 2;
		s_bMobile || (g.cursor = "pointer");
		w.addChild(g);
		this._initListener()
	};
	this.unload = function() {
		g.off("mousedown", l);
		g.off("pressup", r);
		w.removeChild(g)
	};
	this.setVisible = function(a) {
		g.visible = a
	};
	this.setCursorType = function(a) {
		g.cursor = a
	};
	this._initListener = function() {
		l = g.on("mousedown", this.buttonDown);
		r = g.on("pressup", this.buttonRelease)
	};
	this.addEventListener = function(a, b, c) {
		h[a] = b;
		f[a] = c
	};
	this.addEventListenerWithParams = function(a, b, c, d) {
		h[a] = b;
		f[a] = c;
		k[a] = d
	};
	this.buttonRelease = function() {
		p || (g.scaleX = 0 < d ? d : -d, g.scaleY = m, playSound("press_but", 1, !1), h[ON_MOUSE_UP] && h[ON_MOUSE_UP].call(f[ON_MOUSE_UP], k[ON_MOUSE_UP]))
	};
	this.buttonDown = function() {
		p || (g.scaleX = 0 < d ? .9 * d : .9 * -d, g.scaleY = .9 * m, h[ON_MOUSE_DOWN] && h[ON_MOUSE_DOWN].call(f[ON_MOUSE_DOWN], k[ON_MOUSE_DOWN]))
	};
	this.rotation = function(a) {
		g.rotation = a
	};
	this.getButton = function() {
		return g
	};
	this.setPosition = function(a, b) {
		g.x = a;
		g.y = b
	};
	this.setX = function(a) {
		g.x = a
	};
	this.setY = function(a) {
		g.y = a
	};
	this.getButtonImage = function() {
		return g
	};
	this.block = function(a) {
		p = a;
		g.scaleX = d;
		g.scaleY = m
	};
	this.setScaleX = function(a) {
		d = g.scaleX = a
	};
	this.setScale = function(a) {
		m = d = a;
		g.scaleX = g.scaleY = a
	};
	this.getX = function() {
		return g.x
	};
	this.getY = function() {
		return g.y
	};
	this.pulseAnimation = function() {
		createjs.Tween.get(g).to({
			scaleX: .9 * d,
			scaleY: .9 * m
		}, 850, createjs.Ease.quadOut).to({
			scaleX: d,
			scaleY: m
		}, 650, createjs.Ease.quadIn).call(function() {
			v.pulseAnimation()
		})
	};
	this.trebleAnimation = function() {
		createjs.Tween.get(g).to({
			rotation: 5
		}, 75, createjs.Ease.quadOut).to({
			rotation: -5
		}, 140, createjs.Ease.quadIn).to({
			rotation: 0
		}, 75, createjs.Ease.quadIn).wait(750).call(function() {
			v.trebleAnimation()
		})
	};
	this.removeAllTweens = function() {
		createjs.Tween.removeTweens(g)
	};
	var w = void 0 !== c ? c : s_oStage;
	this._init(a, e, b);
	var v = this;
	return this
}

function CMenu() {
	var a, e, b, c, h, f, g, k, d, m, l, r, p = null,
		w, v, x, n, y = null,
		t = null;
	this._init = function() {
		l = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		s_oStage.addChild(l);
		if (s_bStorageAvailable) {
			var q = getItem("vegans_vs_king_bacon_level");
			null !== q && void 0 !== q ? s_iLastLevel = parseInt(getItem("vegans_vs_king_bacon_level")) : saveItem("vegans_vs_king_bacon_level", 1)
		}
		1 === s_iLastLevel ? (q = s_oSpriteLibrary.getSprite("but_play"), b = CANVAS_WIDTH / 2, c = CANVAS_HEIGHT - q.height / 2 - 10, r = new CGfxButton(b, c, q, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this), r.pulseAnimation()) : (q = s_oSpriteLibrary.getSprite("but_play"), b = CANVAS_WIDTH / 2 - 200, c = CANVAS_HEIGHT - q.height / 2 - 10, r = new CGfxButton(b, c, q, s_oStage), r.addEventListener(ON_MOUSE_UP, this._onButPlayRelease, this), q = s_oSpriteLibrary.getSprite("but_continue"), a = CANVAS_WIDTH / 2 + 200, e = CANVAS_HEIGHT - q.height / 2 - 10, p = new CGfxButton(a, e, q, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onButContinueRelease, this), p.pulseAnimation());
		q = s_oSpriteLibrary.getSprite("but_info");
		d = q.height / 2 + 10;
		m = q.height / 2 + 10;
		x = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 240, q, s_oStage);
		x.addEventListener(ON_MOUSE_UP, this._onCreditsBut, this);
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) q = s_oSpriteLibrary.getSprite("audio_icon"), g = CANVAS_WIDTH - q.height / 2 - 10, k = q.height / 2 + 10, v = new CToggle(g, k, q, s_bAudioActive, s_oStage), v.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		q = window.document;
		var z = q.documentElement;
		y = z.requestFullscreen || z.mozRequestFullScreen || z.webkitRequestFullScreen || z.msRequestFullscreen;
		t = q.exitFullscreen || q.mozCancelFullScreen || q.webkitExitFullscreen || q.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (y = !1);
		y && !1 === inIframe() && (q = s_oSpriteLibrary.getSprite("but_fullscreen"), h = d + q.width / 2 + 10, f = q.height / 2 + 10, n = new CToggle(h, f, q, s_bFullscreen, s_oStage), n.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		w = new createjs.Shape;
		w.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(w);
		createjs.Tween.get(w).to({
			alpha: 0
		}, 1E3).call(function() {
			w.visible = !1
		});
		if (!s_bStorageAvailable) {
			var B = new CMsgBox(20, TEXT_ERR_LS, "", TEXT_OK, "");
			B.addEventListener(ON_MSG_BOX_CENTER_BUT, function() {
				B.hide()
			}, this)
		}
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
		setVolume("soundtrack", 1)
	};
	this.unload = function() {
		r.unload();
		r = null;
		null !== p && p.unload();
		w.visible = !1;
		x.unload();
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) v.unload(), v = null;
		y && !1 === inIframe() && n.unload();
		s_oStage.removeChild(l);
		s_oMenu = l = null
	};
	this.refreshButtonPos = function(l, t) {
		r.setPosition(b, c - t);
		x.setPosition(d + l, t + m);
		null !== p && p.setPosition(a, e - t);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || v.setPosition(g - l, t + k);
		y && !1 === inIframe() && n.setPosition(h + l, f + t)
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onCreditsBut = function() {
		new CCreditsPanel
	};
	this._exitFromMenu = function() {
		this.unload();
		s_oMain.gotoLevelMenu();
		$(s_oMain).trigger("start_session")
	};
	this._onButPlayRelease = function() {
		isIOS() && null === s_oSoundTrack && (s_oSoundTrack = playSound("soundtrack", 1, !0));
		if (1 < s_iLastLevel) {
			var a = new CMsgBox(36, TEXT_DELETE_SAVINGS, TEXT_NO, "", TEXT_YES);
			a.addEventListener(ON_MSG_BOX_LEFT_BUT, function() {
				a.hide()
			}, this);
			a.addEventListener(ON_MSG_BOX_RIGHT_BUT, function() {
				a.hide();
				s_oMain.clearLocalStorage();
				s_oMenu._exitFromMenu()
			}, this)
		} else s_oMenu._exitFromMenu()
	};
	this._onButContinueRelease = function() {
		isIOS() && null === s_oSoundTrack && (s_oSoundTrack = playSound("soundtrack", 1, !0));
		s_oMenu._exitFromMenu()
	};
	this.resetFullscreenBut = function() {
		n.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? t.call(window.document) : y.call(window.document.documentElement);
		sizeHandler()
	};
	s_oMenu = this;
	this._init()
}
var s_oMenu = null;

function CGame(a, e, b) {
	var c = !1,
		h, f, g, k, d, m, l, r, p, w, v, x, n, y, t, q, z, B, u, I, D, C, E, J = null,
		H, M = null,
		K = null,
		O = null,
		F, G, A, N, P = null,
		Q = null,
		L;
	this._init = function(a, b, f) {
		m = a;
		d = b;
		q = f;
		c = !1;
		u = [];
		s_oTweenController = new CTweenController;
		F = new createjs.Container;
		s_oStage.addChild(F);
		G = new createjs.Container;
		s_oStage.addChild(G);
		A = new createjs.Container;
		s_oStage.addChild(A);
		a = s_oSpriteLibrary.getSprite("bg_game");
		a = createBitmap(a);
		a.cache(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		F.addChild(a);
		N = new CPlayer(70, 300, F);
		N.addEventListener(ON_SHOT, this._onReadyToShot, this);
		L = new CBullet(BULLET_START, s_oStage);
		H = new CInterface(F);
		this.reset();
		F.on("mousedown", this._onClick)
	};
	this.unload = function() {
		c = !1;
		H.unload();
		null !== M && M.unload();
		null !== K && K.unload();
		createjs.Tween.removeAllTweens();
		s_oStage.removeAllChildren()
	};
	this.reset = function() {
		setVolume("soundtrack", .5);
		z = k = w = 0;
		f = !1;
		p = v = 0;
		t = -1;
		for (var a = 0; a < u.length; a++) u[a].unload();
		H.reset(d, q, m);
		N.reset();
		L.reset();
		null !== J && J.unload();
		this._initLevel();
		1 === m ? new CHelpPanel : g ? Q = new CVersusPanel(s_oStage) : c = !0
	};
	this.startUpdate = function() {
		c = !0
	};
	this.restartGame = function() {
		$(s_oMain).trigger("show_interlevel_ad");
		$(s_oMain).trigger("restart_level", m);
		d -= k;
		q += z;
		this.reset()
	};
	this.nextLevel = function() {
		setVolume("soundtrack", .2);
		m++;
		m > NUM_LEVELS ? this._win() : ($(s_oMain).trigger("show_interlevel_ad"), this.reset())
	};
	this._initLevel = function() {
		E = s_oGameSettings.getLevelInfo(m - 1);
		r = E.num_character;
		var a = E.character_occur;
		y = E.character_time_spawn_interval;
		g = E.spawn_boss;
		I = [];
		x = 0;
		h = !1;
		D = [];
		for (var b = 0; b < a.length; b++) {
			var c = a[b];
			for (var d = 0; d < c; d++) D.push(b)
		}
		B = [];
		for (b = 0; b < r; b++) d = Math.floor(Math.random() * D.length), c = Math.floor(Math.random() * (MAX_CHARACTER_Y - MIN_CHARACTER_Y + 1)) + MIN_CHARACTER_Y, a = Math.floor(Math.random() * (MAX_CHARACTER_Y - MIN_CHARACTER_Y + 1)) + MIN_CHARACTER_Y, B[b] = new CCharacter(D[d], c, a, G), B[b].addEventListener(ON_REMOVE_CHARACTER, this._removeCharacter, this);
		d = E.num_survivor;
		for (b = 0; b < d; b++) c = Math.floor(Math.random() * (MAX_CHARACTER_Y - MIN_CHARACTER_Y + 1)) + MIN_CHARACTER_Y, a = Math.floor(Math.random() * (MAX_CHARACTER_Y - MIN_CHARACTER_Y + 1)) + MIN_CHARACTER_Y, a = new CCharacter(SURVIVOR_ID, c, a, G), B.push(a), a.addEventListener(ON_REMOVE_CHARACTER, this._removeCharacter, this);
		B = shuffle(B);
		g && (P = new CBoss(G), P.addEventListener(ON_REMOVE_CHARACTER, this._removeCharacter, this), P.addEventListener(ON_SPAWN_ENEMY_BY_BOSS, this._bossSpawnNewEnemies, this), P.addEventListener(ON_BOSS_DEATH, this._bossDeath, this), B.unshift(P), H.showBossHealthBar());
		l = B.length;
		u = [];
		I = [];
		this._spawnNextCharacter();
		$(s_oMain).trigger("start_level", m)
	};
	this._spawnNextCharacter = function() {
		w < l ? (u.push(B[w]), B[w].start(), w++) : h = !0
	};
	this._bossSpawnNewEnemies = function() {
		for (var a = 0; a < BOSS_NUM_SPAWN; a++) {
			var b = new CCharacter(D[Math.floor(Math.random() * D.length)], Math.floor(Math.random() * (MAX_CHARACTER_Y - MIN_CHARACTER_Y + 1)) + MIN_CHARACTER_Y, Math.floor(Math.random() * (MAX_CHARACTER_Y - MIN_CHARACTER_Y + 1)) + MIN_CHARACTER_Y, G);
			b.addEventListener(ON_REMOVE_CHARACTER, this._removeCharacter, this);
			B.push(b)
		}
		l += BOSS_NUM_SPAWN
	};
	this._bossDeath = function() {};
	this._removeCharacter = function(a) {
		for (var b = 0; b < u.length; b++)
			if (u[b] === a) {
				I.push({
					character: u[b],
					hit: !1
				});
				break
			}
	};
	this._calculateStartPerLevel = function() {
		var a = E.perc_enemy_to_kill_per_stars,
			b = p / r * 100,
			c = 1;
		b >= a[0] ? c = 3 : b >= a[1] && (c = 2);
		return c
	};
	this._showNextLevelPanel = function() {
		this.pause();
		$(s_oMain).trigger("end_level", m);
		var a = this._calculateStartPerLevel();
		O = new CNextLevel(s_oStage);
		O.show(d, a);
		s_oMain.setLocalStorageLevelInfos(k, q, a, m);
		s_oMain.setLocalStorageLevel(m + 1)
	};
	this._gameOver = function() {
		this.pause();
		M = new CEndPanel(s_oSpriteLibrary.getSprite("lose_panel"));
		M.show(d)
	};
	this._win = function() {
		this.pause();
		K = CWinPanel(d)
	};
	this._tryToSpawnPowerUp = function(a, b) {
		var c = Math.floor(100 * Math.random());
		!f && c < POWERUP_OCCUR && (c = new CPowerUp(a, b, Math.floor(Math.random() * NUM_POWERUP), G), c.addEventListener(ON_REMOVE_CHARACTER, this._removeCharacter, this), u.push(c))
	};
	this._activatePowerUp = function(a, b) {
		if (-1 === t) {
			playSound("powerup", 1, !1);
			J = new CPowerUpMsg(a, s_oStage);
			f && this._deactivatePowerUp();
			t = a;
			n = POWERUP_TIME[a];
			switch (a) {
				case 0:
					for (var c = 0; c < B.length; c++) B[c].slowDown(!0);
					break;
				case 1:
					v = 1;
					break;
				case 2:
					this._increaseScore(EXTRA_SCORE_DIAMOND, b.getX(), b.getY());
					break;
				case 3:
					this._increaseScore(EXTRA_SCORE_DOLLARS, b.getX(), b.getY())
			}
			f = !0
		}
	};
	this._deactivatePowerUp = function() {
		f = !1;
		switch (t) {
			case 0:
				for (var a = 0; a < B.length; a++) B[a].slowDown(!1);
				break;
			case 1:
				v = 0
		}
		t = -1
	};
	this._increaseScore = function(a, b, c) {
		new CScoreText(a, b, c);
		k += a;
		d += a;
		0 > d && (d = 0);
		H.refreshScore(d)
	};
	this._characterDamage = function(a) {
		I[a].character.unload();
		playSound("energy_lost", 1, !1);
		N.hit();
		q--;
		H.loseLife(q);
		z++;
		0 === q && this._gameOver()
	};
	this._checkCharacterToRemove = function() {
		for (var a = I.length, b = 0; b < a; b++)
			for (var c = 0; c < u.length; c++)
				if (I[0].character === u[c]) {
					I[0].hit ? (I[0].character.death(), u[c].isPowerUp() ? this._activatePowerUp(u[c].getType(), u[c]) : u[c].isSurvivor() ? this._increaseScore(-s_oGameSettings.getSurvivorScore(), u[c].getX(), u[c].getY()) : (p++, this._increaseScore(s_oGameSettings.getCharacterScore(u[c].getType()), u[c].getX(), u[c].getY()), this._tryToSpawnPowerUp(u[c].getX(), u[c].getY()))) : u[c].isPowerUp() || u[c].isSurvivor() ? u[c].unload() : this._characterDamage(0);
					I.splice(0, 1);
					u.splice(c, 1);
					break
				}
		I = [];
		0 === u.length && h && this._showNextLevelPanel()
	};
	this._checkCollisionBulletCharacter = function() {
		for (var a = 0; a < u.length; a++) {
			var b = u[a].checkHit(L.getX(), L.getY(), BULLET_DAMAGE[v]);
			b.hit && (b.death && I.push({
				character: u[a],
				hit: !0
			}), playSound("shot" + L.getType(), 1, !1), L.reset())
		}
	};
	this.setCharacterDepth = function() {
		for (var a = [], b = 0; b < u.length; b++) a.push({
			index: b,
			y: u[b].getY()
		});
		for (var a = a.sortOn("y", "index"), c = b = 0; c < a.length; c++) u[a[c].index].setDepth(b), b++
	};
	this.endVersusPanel = function() {
		Q = null;
		c = !0
	};
	this.pause = function() {
		c = !1;
		for (var a = 0; a < u.length; a++) u[a].pause(!0);
		H.pause(!0)
	};
	this.unpause = function() {
		c = !0;
		for (var a = 0; a < u.length; a++) u[a].pause(!1);
		H.pause(!1)
	};
	this._onClick = function(a) {
		!N.isLaunching() && c && (N.launch(v), C = new createjs.Point(a.localX, a.localY))
	};
	this._onReadyToShot = function() {
		L.launch(C, v)
	};
	this.onExit = function() {
		$(s_oMain).trigger("end_session");
		s_oGame.unload();
		s_oMain.gotoMenu()
	};
	this.update = function() {
		if (c) {
			H.update();
			L.update();
			for (var a = 0; a < u.length; a++) u[a].update();
			this.setCharacterDepth();
			this._checkCollisionBulletCharacter();
			this._checkCharacterToRemove();
			x += s_iTimeElaps;
			x > y && (x = 0, this._spawnNextCharacter());
			f && (n -= s_iTimeElaps, 0 > n ? (this._deactivatePowerUp(), J.unload()) : J.refreshTime(Math.floor(n / 1E3)))
		}
		null !== Q && Q.update()
	};
	s_oGame = this;
	this._init(a, e, b)
}
var s_oGame, s_oTweenController;

function CInterface(a) {
	var e, b, c, h, f, g, k, d, m, l, r, p, w, v, x, n, y, t, q, z, B, u, I, D, C, E, J, H, M, K = null,
		O = null,
		F;
	this._init = function(a) {
		l = !1;
		var A = s_oSpriteLibrary.getSprite("grass");
		e = CANVAS_HEIGHT;
		F = new createjs.Container;
		F.regY = A.height;
		F.x = 0;
		F.y = e;
		s_oStage.addChild(F);
		A = createBitmap(A);
		F.addChild(A);
		q = new CKingGUI(CANVAS_WIDTH, 220, F);
		u = new CVeganGUI(280, 200, s_aSpriteSheetVegan[2], F);
		u.changeFramerate(2);
		z = new CVeganGUI(100, 203, s_aSpriteSheetVegan[0], F);
		z.changeFramerate(2);
		A = new createjs.Container;
		A.x = CANVAS_WIDTH / 2;
		A.y = 120;
		F.addChild(A);
		r = [];
		for (var G = 0; G < NUM_LIVES; G++) r[G] = createSprite(s_oSpriteSheetHeart, "full", 0, 0, 0, 0), r[G].x = 400 * G / NUM_LIVES, A.addChild(r[G]);
		A.regX = A.getBounds().width / 2;
		n = new createjs.Text("0", " 30px " + PRIMARY_FONT, FONT_COLOR);
		n.x = CANVAS_WIDTH / 2;
		n.y = 111;
		n.textAlign = "center";
		n.textBaseline = "alphabetic";
		n.lineWidth = 400;
		F.addChild(n);
		y = new createjs.Text("0", " 30px " + PRIMARY_FONT, FONT_STROKE);
		y.x = CANVAS_WIDTH / 2;
		y.y = 211;
		y.textAlign = "center";
		y.textBaseline = "alphabetic";
		y.outline = 3;
		F.addChild(y);
		t = new createjs.Text("0", " 30px " + PRIMARY_FONT, FONT_COLOR);
		t.x = CANVAS_WIDTH / 2;
		t.y = 211;
		t.textAlign = "center";
		t.textBaseline = "alphabetic";
		F.addChild(t);
		H = new createjs.Container;
		H.visible = !1;
		F.addChild(H);
		G = s_oSpriteLibrary.getSprite("healthbar_king");
		A = createBitmap(G);
		A.x = CANVAS_WIDTH / 2 - G.width / 2;
		A.y = 170;
		H.addChild(A);
		J = s_oSpriteLibrary.getSprite("healthbar_king_fill");
		G = createBitmap(J);
		G.x = A.x + 33;
		G.y = A.y + 13;
		H.addChild(G);
		C = new createjs.Shape;
		C.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(0, 0, J.width, J.height);
		C.x = G.x;
		C.y = G.y;
		H.addChild(C);
		G.mask = C;
		A = s_oSpriteLibrary.getSprite("healthbar_king_token");
		E = createBitmap(A);
		E.regX = A.width / 2;
		E.regY = A.height / 2;
		E.x = C.x + J.width;
		E.y = C.y;
		H.addChild(E);
		I = new CVeganGUI(430, 315, s_aSpriteSheetVegan[3], a);
		I.changeFramerate(2);
		B = new CVeganGUI(550, 330, s_aSpriteSheetVegan[1], a);
		B.changeFramerate(4);
		D = new createjs.Shape;
		D.graphics.beginFill("red").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		D.alpha = 0;
		s_oStage.addChild(D);
		A = s_oSpriteLibrary.getSprite("but_exit");
		d = CANVAS_WIDTH - A.height / 2 - 10;
		m = A.height / 2 + 10;
		w = new CGfxButton(d, m, A, s_oStage);
		w.addEventListener(ON_MOUSE_UP, this._onExit, this);
		g = d - A.width - 10;
		k = m;
		v = new CGfxButton(g, k, s_oSpriteLibrary.getSprite("but_pause"), s_oStage);
		v.addEventListenerWithParams(ON_MOUSE_UP, this.onPause, this, !0);
		h = g - A.width - 10;
		f = A.height / 2 + 10;
		!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (A = s_oSpriteLibrary.getSprite("audio_icon"), p = new CToggle(h, f, A, s_bAudioActive, s_oStage), p.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this), b = h - A.width / 2 - 10) : b = g - A.width - 10;
		c = A.height / 2 + 10;
		a = window.document;
		A = a.documentElement;
		K = A.requestFullscreen || A.mozRequestFullScreen || A.webkitRequestFullScreen || A.msRequestFullscreen;
		O = a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (K = !1);
		K && !inIframe() && (A = s_oSpriteLibrary.getSprite("but_fullscreen"), x = new CToggle(b, c, A, s_bFullscreen, s_oStage), x.addEventListener(ON_MOUSE_UP, this._onFullscreen, this));
		M = new CPause;
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) p.unload(), p = null;
		w.unload();
		v.unload();
		K && !inIframe() && x.unload();
		s_oInterface = null
	};
	this.refreshButtonPos = function(a, l) {
		w.setPosition(d - a, l + m);
		v.setPosition(g - a, l + k);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || p.setPosition(h - a, l + f);
		K && !inIframe() && x.setPosition(b - a, c + l);
		F.y = e - l;
		MAX_CHARACTER_Y = F.y - F.getBounds().height / 2
	};
	this.reset = function(a, b, c) {
		q.reset();
		z.pause(!1);
		B.pause(!1);
		u.pause(!1);
		I.pause(!1);
		C.scaleX = 1;
		this.refreshScore(a);
		this.refreshLevel(c);
		for (a = 0; a < r.length; a++) a < b ? r[a].gotoAndStop("full") : r[a].gotoAndStop("empty")
	};
	this.refreshScore = function(a) {
		n.text = a
	};
	this.refreshLevel = function(a) {
		y.text = TEXT_LEVEL + " " + a;
		t.text = TEXT_LEVEL + " " + a
	};
	this.pause = function(a) {
		z.pause(a);
		B.pause(a);
		u.pause(a);
		I.pause(a);
		q.pause(a)
	};
	this.showBossHealthBar = function() {
		q.hide();
		H.visible = !0
	};
	this.refreshBossBar = function(a) {
		createjs.Tween.get(C, {
			override: !0
		}).to({
			scaleX: a
		}, 500);
		createjs.Tween.get(E, {
			override: !0
		}).to({
			x: C.x + J.width * a
		}, 500)
	};
	this.loseLife = function(a) {
		createjs.Tween.get(D).to({
			alpha: .5
		}, 200, createjs.Ease.cubicOut).call(function() {
			createjs.Tween.get(D).to({
				alpha: 0
			}, 200, createjs.Ease.cubicOut)
		});
		r[a].gotoAndStop("empty")
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this._onExit = function() {
		if (!l && (new CAreYouSurePanel(s_oGame.onExit), !1 === l)) this.onPause(!1)
	};
	this.onPause = function(a) {
		l = !l;
		a && M.show();
		l ? s_oGame.pause() : s_oGame.unpause()
	};
	this.resetFullscreenBut = function() {
		x.setActive(s_bFullscreen)
	};
	this._onFullscreen = function() {
		s_bFullscreen ? O.call(window.document) : K.call(window.document.documentElement);
		sizeHandler()
	};
	this.update = function() {
		!1 === H.visible && q.update()
	};
	s_oInterface = this;
	this._init(a);
	return this
}
var s_oInterface = null;

function CHelpPanel() {
	var a, e, b, c;
	this._init = function() {
		b = new createjs.Container;
		s_oStage.addChild(b);
		a = new createjs.Shape;
		a.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		a.alpha = 0;
		a.on("mousedown", function() {});
		b.addChild(a);
		c = new createjs.Container;
		c.y = CANVAS_HEIGHT;
		b.addChild(c);
		var f = s_oSpriteLibrary.getSprite("msg_box"),
			g = createBitmap(f);
		g.regX = f.width / 2;
		g.regY = f.height / 2;
		g.x = CANVAS_WIDTH / 2 - 20;
		g.y = CANVAS_HEIGHT / 2;
		c.addChild(g);
		this.attachSprites();
		f = new createjs.Text(TEXT_KILL, " 40px " + PRIMARY_FONT, FONT_STROKE);
		f.x = CANVAS_WIDTH / 2 + 50;
		f.y = CANVAS_HEIGHT / 2 - 50;
		f.textAlign = "left";
		f.textBaseline = "alphabetic";
		f.outline = 3;
		c.addChild(f);
		f = new createjs.Text(TEXT_KILL, " 40px " + PRIMARY_FONT, "#ffffff");
		f.x = CANVAS_WIDTH / 2 + 50;
		f.y = CANVAS_HEIGHT / 2 - 50;
		f.textAlign = "left";
		f.textBaseline = "alphabetic";
		c.addChild(f);
		f = new createjs.Text(TEXT_AVOID, " 40px " + PRIMARY_FONT, FONT_STROKE);
		f.x = CANVAS_WIDTH / 2 - 50;
		f.y = CANVAS_HEIGHT / 2 + 100;
		f.textAlign = "left";
		f.textBaseline = "alphabetic";
		f.outline = 3;
		c.addChild(f);
		f = new createjs.Text(TEXT_AVOID, " 40px " + PRIMARY_FONT, "#ffffff");
		f.x = CANVAS_WIDTH / 2 - 50;
		f.y = CANVAS_HEIGHT / 2 + 100;
		f.textAlign = "left";
		f.textBaseline = "alphabetic";
		c.addChild(f);
		e = new CGfxButton(800, 510, s_oSpriteLibrary.getSprite("but_continue"), c);
		e.addEventListener(ON_MOUSE_UP, this._onExit, this);
		(new createjs.Tween.get(c)).to({
			y: 0
		}, 1E3, createjs.Ease.backOut);
		(new createjs.Tween.get(a)).to({
			alpha: .7
		}, 500)
	};
	this.attachSprites = function() {
		var a = {
				images: [s_oSpriteLibrary.getSprite("character_0_walk")],
				framerate: 20,
				frames: {
					width: 89,
					height: 135,
					regX: 44,
					regY: 135
				},
				animations: {
					idle: [0, 8]
				}
			},
			a = new createjs.SpriteSheet(a),
			a = createSprite(a, "idle", 44, 135, 89, 135);
		a.x = CANVAS_WIDTH / 2 - 240;
		a.y = 400;
		c.addChild(a);
		a = {
			images: [s_oSpriteLibrary.getSprite("character_1_walk")],
			framerate: 20,
			frames: {
				width: 137,
				height: 125,
				regX: 68,
				regY: 125
			},
			animations: {
				idle: [0, 13]
			}
		};
		a = new createjs.SpriteSheet(a);
		a = createSprite(a, "idle", 68, 125, 137, 125);
		a.x = CANVAS_WIDTH / 2 - 120;
		a.y = 400;
		c.addChild(a);
		a = {
			images: [s_oSpriteLibrary.getSprite("character_2_walk")],
			framerate: 20,
			frames: {
				width: 198,
				height: 198,
				regX: 99,
				regY: 198
			},
			animations: {
				idle: [0, 11]
			}
		};
		a = new createjs.SpriteSheet(a);
		a = createSprite(a, "idle", 41, 199, 83, 199);
		a.x = CANVAS_WIDTH / 2;
		a.y = 400;
		c.addChild(a);
		a = {
			images: [s_oSpriteLibrary.getSprite("character_5_walk")],
			framerate: 20,
			frames: {
				width: 237,
				height: 168,
				regX: 118,
				regY: 168
			},
			animations: {
				idle: [0, 7]
			}
		};
		a = new createjs.SpriteSheet(a);
		a = createSprite(a, "idle", 118, 168, 237, 168);
		a.x = CANVAS_WIDTH / 2 - 120;
		a.y = 570;
		c.addChild(a)
	};
	this.unload = function() {
		s_oStage.removeChild(b)
	};
	this._onExit = function() {
		(new createjs.Tween.get(c)).to({
			y: CANVAS_HEIGHT
		}, 500, createjs.Ease.backIn).call(function() {
			h.unload();
			s_oGame.startUpdate()
		});
		(new createjs.Tween.get(a)).wait(500).to({
			alpha: 0
		}, 500)
	};
	var h = this;
	this._init()
}

function CCreditsPanel() {
	var a, e, b, c, h, f, g;
	this._init = function() {
		c = new createjs.Shape;
		c.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		c.alpha = 0;
		c.on("mousedown", function() {});
		s_oStage.addChild(c);
		(new createjs.Tween.get(c)).to({
			alpha: .7
		}, 500);
		h = new createjs.Container;
		s_oStage.addChild(h);
		var k = s_oSpriteLibrary.getSprite("msg_box"),
			d = createBitmap(k);
		d.x = -30;
		d.y = 30;
		d.regX = k.width / 2;
		d.regY = k.height / 2;
		h.addChild(d);
		h.x = CANVAS_WIDTH / 2;
		h.y = CANVAS_HEIGHT + k.height / 2;
		a = h.y;
		(new createjs.Tween.get(h)).to({
			y: CANVAS_HEIGHT / 2 - 40
		}, 500, createjs.Ease.quartIn);
		d = new createjs.Text("DEVELOPED BY", " 30px " + PRIMARY_FONT, FONT_STROKE);
		d.y = -k.height / 2 + 145;
		d.textAlign = "center";
		d.textBaseline = "middle";
		d.lineWidth = 300;
		d.outline = 2;
		h.addChild(d);
		d = new createjs.Text("DEVELOPED BY", " 30px " + PRIMARY_FONT, FONT_COLOR);
		d.y = -k.height / 2 + 145;
		d.textAlign = "center";
		d.textBaseline = "middle";
		d.lineWidth = 300;
		h.addChild(d);
		k = new createjs.Text("www.codethislab.com", " 26px " + PRIMARY_FONT, FONT_STROKE);
		k.y = 110;
		k.textAlign = "center";
		k.textBaseline = "middle";
		k.lineWidth = 300;
		k.outline = 2;
		h.addChild(k);
		k = new createjs.Text("www.codethislab.com", " 26px " + PRIMARY_FONT, FONT_COLOR);
		k.y = 110;
		k.textAlign = "center";
		k.textBaseline = "middle";
		k.lineWidth = 300;
		h.addChild(k);
		k = s_oSpriteLibrary.getSprite("ctl_logo");
		g = createBitmap(k);
		e = g.on("mousedown", this._onLogoButRelease);
		g.regX = k.width / 2;
		g.regY = k.height / 2;
		g.y = 40;
		h.addChild(g);
		b = new createjs.Shape;
		b.graphics.beginFill("#0f0f0f").drawRect(-CANVAS_WIDTH / 2, -CANVAS_HEIGHT / 2, CANVAS_WIDTH, CANVAS_HEIGHT);
		b.alpha = .01;
		e = b.on("click", this._onLogoButRelease);
		h.addChild(b);
		k = s_oSpriteLibrary.getSprite("but_exit");
		f = new CGfxButton(-310, -130, k, h);
		f.addEventListener(ON_MOUSE_UP, this.unload, this)
	};
	this.unload = function() {
		b.off("click", e);
		f.block();
		(new createjs.Tween.get(c)).to({
			alpha: 0
		}, 500);
		(new createjs.Tween.get(h)).to({
			y: a
		}, 400, createjs.Ease.backIn).call(function() {
			s_oStage.removeChild(c);
			s_oStage.removeChild(h);
			f.unload()
		});
		c.off("mousedown", function() {});
		g.off("mousedown", this._onLogoButRelease)
	};
	this._onLogoButRelease = function() {
		window.open("http://www.codethislab.com/index.php?&l=en")
	};
	this._init()
}

function CAreYouSurePanel(a) {
	var e, b, c, h, f;
	this._init = function() {
		h = new createjs.Shape;
		h.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		h.alpha = 0;
		h.on("mousedown", function() {});
		s_oStage.addChild(h);
		(new createjs.Tween.get(h)).to({
			alpha: .7
		}, 500);
		f = new createjs.Container;
		s_oStage.addChild(f);
		var a = s_oSpriteLibrary.getSprite("msg_box"),
			g = createBitmap(a);
		g.regX = a.width / 2;
		g.regY = a.height / 2;
		g.x = -20;
		f.addChild(g);
		f.x = CANVAS_WIDTH / 2;
		f.y = CANVAS_HEIGHT + a.height / 2;
		e = f.y;
		(new createjs.Tween.get(f)).to({
			y: CANVAS_HEIGHT / 2 - 40
		}, 500, createjs.Ease.quartIn);
		g = new createjs.Text(TEXT_ARE_SURE, " 54px " + PRIMARY_FONT, FONT_STROKE);
		g.y = -a.height / 2 + 80;
		g.textAlign = "center";
		g.textBaseline = "middle";
		g.lineWidth = 500;
		g.outline = 5;
		f.addChild(g);
		a = new createjs.Text(TEXT_ARE_SURE, " 54px " + PRIMARY_FONT, FONT_COLOR);
		a.y = g.y;
		a.textAlign = "center";
		a.textBaseline = "middle";
		a.lineWidth = 500;
		f.addChild(a);
		b = new CGfxButton(160, 80, s_oSpriteLibrary.getSprite("but_yes"), f);
		b.addEventListener(ON_MOUSE_UP, this._onButYes, this);
		c = new CGfxButton(-160, 80, s_oSpriteLibrary.getSprite("but_no"), f);
		c.addEventListener(ON_MOUSE_UP, this._onButNo, this);
		c.pulseAnimation()
	};
	this._onButYes = function() {
		c.block();
		b.block();
		(new createjs.Tween.get(h)).to({
			alpha: 0
		}, 500);
		(new createjs.Tween.get(f)).to({
			y: e
		}, 400, createjs.Ease.backIn).call(function() {
			g.unload();
			k()
		})
	};
	this._onButNo = function() {
		c.block();
		b.block();
		(new createjs.Tween.get(h)).to({
			alpha: 0
		}, 500);
		(new createjs.Tween.get(f)).to({
			y: e
		}, 400, createjs.Ease.backIn).call(function() {
			g.unload();
			s_oInterface.onPause()
		})
	};
	this.unload = function() {
		c.unload();
		b.unload();
		s_oStage.removeChild(h);
		s_oStage.removeChild(f);
		h.off("mousedown", function() {})
	};
	var g = this;
	var k = a;
	this._init(a)
}

function CEndPanel(a) {
	var e, b, c, h, f, g, k, d, m;
	this._init = function(a) {
		b = new createjs.Container;
		b.alpha = 0;
		b.visible = !1;
		s_oStage.addChild(b);
		var c = new createjs.Shape;
		c.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		c.on("mousedown", function() {});
		b.addChild(c);
		e = createBitmap(a);
		e.x = 214;
		e.y = 218;
		b.addChild(e);
		h = new createjs.Text(TEXT_GAMEOVER, "50px " + PRIMARY_FONT, FONT_STROKE);
		h.x = CANVAS_WIDTH / 2;
		h.y = CANVAS_HEIGHT / 2 - 80;
		h.textAlign = "center";
		h.textBaseline = "alphabetic";
		h.lineWidth = 500;
		h.outline = 3;
		b.addChild(h);
		f = new createjs.Text(TEXT_GAMEOVER, "50px " + PRIMARY_FONT, FONT_COLOR);
		f.x = CANVAS_WIDTH / 2;
		f.y = CANVAS_HEIGHT / 2 - 80;
		f.textAlign = "center";
		f.textBaseline = "alphabetic";
		f.lineWidth = 500;
		b.addChild(f);
		g = new createjs.Text("", " 40px " + PRIMARY_FONT, FONT_STROKE);
		g.x = CANVAS_WIDTH / 2;
		g.y = CANVAS_HEIGHT / 2;
		g.textAlign = "center";
		g.textBaseline = "alphabetic";
		g.lineWidth = 500;
		g.outline = 2;
		b.addChild(g);
		k = new createjs.Text("", " 40px " + PRIMARY_FONT, FONT_COLOR);
		k.x = CANVAS_WIDTH / 2;
		k.y = CANVAS_HEIGHT / 2;
		k.textAlign = "center";
		k.textBaseline = "alphabetic";
		k.lineWidth = 500;
		b.addChild(k);
		d = new CGfxButton(CANVAS_WIDTH / 2 + 110, CANVAS_HEIGHT / 2 + 90, s_oSpriteLibrary.getSprite("but_restart"), b);
		d.addEventListener(ON_MOUSE_UP, this.onRestart, this);
		d.pulseAnimation();
		m = new CGfxButton(CANVAS_WIDTH / 2 - 110, CANVAS_HEIGHT / 2 + 90, s_oSpriteLibrary.getSprite("but_home"), b);
		m.addEventListener(ON_MOUSE_UP, this.onHome, this)
	};
	this.unload = function() {
		b.off("mousedown", c);
		m.unload();
		d.unload();
		s_oStage.removeChild(b)
	};
	this._initListener = function() {
		c = b.on("mousedown", function() {})
	};
	this.show = function(a) {
		playSound("game_over", 1, !1);
		g.text = TEXT_SCORE + ": " + a;
		k.text = TEXT_SCORE + ": " + a;
		b.visible = !0;
		var c = this;
		createjs.Tween.get(b).wait(500).to({
			alpha: 1
		}, 500).call(function() {
			c._initListener()
		});
		$(s_oMain).trigger("save_score", a);
		$(s_oMain).trigger("end_level", 1);
		var d = "You collected <strong>" + a + " points</strong>!<br><br>Share your score with your friends!",
			f = "My score is " + a + " points! Can you do better?";
		$(s_oMain).trigger("share_event", a, "200x200.jpg", "Congratulations!", d, f)
	};
	this._onExit = function() {
		$(s_oMain).trigger("show_interlevel_ad");
		b.off("mousedown", this._onExit);
		s_oStage.removeChild(b);
		s_oGame.onExit()
	};
	this.onRestart = function() {
		l.unload();
		s_oGame.restartGame()
	};
	this.onHome = function() {
		l.unload();
		s_oMain.gotoMenu()
	};
	var l = this;
	this._init(a);
	return this
}

function CKingGUI(a, e, b) {
	var c, h, f, g, k, d;
	this._init = function(a, g) {
		f = 0;
		k = new createjs.Container;
		b.addChild(k);
		var e = s_oSpriteLibrary.getSprite("king_bg"),
			l = e.width / 5,
			m = e.height / 7,
			e = new createjs.SpriteSheet({
				images: [e],
				frames: {
					width: l,
					height: m,
					regX: l,
					regY: m
				},
				animations: {
					eyeclose: {
						frames: [5, 4, 3, 2, 1, 0],
						next: "eyeopen",
						speed: .2
					},
					eyeopen: [0, 5, "eyeclose", .2],
					point: [6, 33, "speakpointrev"],
					speakpointrev: {
						frames: [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
						next: "eyeclose"
					}
				}
			});
		d = createSprite(e, "eyeopen", l, m, l, m);
		d.on("animationend", this._onAnimEnd);
		d.x = a;
		d.y = g;
		d.scaleX = d.scaleY = 1.5;
		k.addChild(d);
		this._initBaloon();
		h = Math.floor(Math.random() * (MAX_TIME_INCITE - MIN_TIME_INCITE + 1)) + MIN_TIME_INCITE;
		c = MAX_TIME_INCITE
	};
	this.unload = function() {
		b.removeChild(k)
	};
	this.hide = function() {
		d.stop();
		k.visible = !1
	};
	this.reset = function() {
		d.gotoAndPlay("eyeopen");
		g[f].visible = !1;
		h = Math.floor(Math.random() * (MAX_TIME_INCITE - MIN_TIME_INCITE + 1)) + MIN_TIME_INCITE;
		c = MAX_TIME_INCITE
	};
	this._initBaloon = function() {
		g = [];
		var a = s_oSpriteLibrary.getSprite("baloon_0"),
			b = a.width / 10,
			c = a.height,
			a = {
				images: [a],
				framerate: 8,
				frames: {
					width: b,
					height: c,
					regX: b,
					regY: c
				},
				animations: {
					start: [0, 0],
					anim: [0, 9]
				}
			},
			a = new createjs.SpriteSheet(a);
		g[0] = createSprite(a, "start", b, c, b, c);
		g[0].visible = !1;
		g[0].x = 990;
		g[0].y = 120;
		k.addChild(g[0]);
		a = s_oSpriteLibrary.getSprite("baloon_1");
		b = a.width / 10;
		c = a.height;
		a = {
			images: [a],
			framerate: 8,
			frames: {
				width: b,
				height: c,
				regX: b,
				regY: c
			},
			animations: {
				start: [0, 0],
				anim: [0, 9]
			}
		};
		a = new createjs.SpriteSheet(a);
		g[1] = createSprite(a, "start", b, c, b, c);
		g[1].visible = !1;
		g[1].x = 990;
		g[1].y = 120;
		k.addChild(g[1]);
		a = s_oSpriteLibrary.getSprite("baloon_2");
		b = a.width / 10;
		c = a.height;
		a = {
			images: [a],
			framerate: 8,
			frames: {
				width: b,
				height: c,
				regX: b,
				regY: c
			},
			animations: {
				start: [0, 0],
				anim: [0, 9]
			}
		};
		a = new createjs.SpriteSheet(a);
		g[2] = createSprite(a, "start", b, c, b, c);
		g[2].visible = !1;
		g[2].x = 990;
		g[2].y = 120;
		k.addChild(g[2]);
		a = s_oSpriteLibrary.getSprite("baloon_3");
		b = a.width / 10;
		c = a.height;
		a = {
			images: [a],
			framerate: 8,
			frames: {
				width: b,
				height: c,
				regX: b,
				regY: c
			},
			animations: {
				start: [0, 0],
				anim: [0, 9]
			}
		};
		a = new createjs.SpriteSheet(a);
		g[3] = createSprite(a, "start", b, c, b, c);
		g[3].visible = !1;
		g[3].x = 990;
		g[3].y = 120;
		k.addChild(g[3])
	};
	this._incite = function() {
		this.showBallon();
		d.gotoAndPlay("point");
		playSound("boss_incite_" + Math.floor(3 * Math.random()), 1, !1)
	};
	this.showBallon = function() {
		f = Math.floor(Math.random() * g.length);
		g[f].scaleX = g[f].scaleY = .1;
		g[f].visible = !0;
		g[f].gotoAndPlay("anim");
		(new createjs.Tween.get(g[f])).to({
			scaleX: 1,
			scaleY: 1
		}, 500, createjs.Ease.backOut)
	};
	this.pause = function(a) {
		d.paused = a;
		g[f].visible && (g[f].paused = a)
	};
	this._onAnimEnd = function(a) {
		"speakpointrev" === a.name && (new createjs.Tween.get(g[f])).to({
			scaleX: .1,
			scaleY: .1
		}, 200, createjs.Ease.backIn).call(function() {
			g[f].visible = !1;
			g[f].stop()
		})
	};
	this.update = function() {
		c += s_iTimeElaps;
		c > h && (c = 0, h = Math.floor(Math.random() * (MAX_TIME_INCITE - MIN_TIME_INCITE + 1)) + MIN_TIME_INCITE, this._incite())
	};
	this._init(a, e, b)
}

function CVeganGUI(a, e, b, c) {
	var h, f;
	this._init = function(a, b, c, e) {
		h = new createjs.Container;
		h.x = a;
		h.y = b;
		e.addChild(h);
		f = createSprite(c, "idle", 0, 0, 0, 0);
		h.addChild(f)
	};
	this.unload = function() {
		c.removeChild(h)
	};
	this.changeFramerate = function(a) {
		f.framerate = a
	};
	this.changeAnim = function(a) {
		f.gotoAndPlay(a)
	};
	this.pause = function(a) {
		f.paused = a
	};
	this._init(a, e, b, c)
}

function CPlayer(a, e, b) {
	var c, h, f, g, k;
	this._init = function(a, b, e) {
		c = !1;
		f = [];
		g = [];
		h = "start0";
		k = createSprite(s_oSpriteSheetPlayer, h, 0, 0, 0, 0);
		k.on("animationend", this._onAnimEnd);
		k.x = a;
		k.y = b;
		e.addChild(k)
	};
	this.reset = function() {
		k.gotoAndStop("start0")
	};
	this.addEventListener = function(a, b, c) {
		f[a] = b;
		g[a] = c
	};
	this.launch = function(a) {
		c = !0;
		h = "launch" + a;
		k.gotoAndPlay(h)
	};
	this.hit = function() {
		k.gotoAndPlay("hit")
	};
	this._onAnimEnd = function(a) {
		"launch0" === a.name || "launch1" === a.name ? (f[ON_SHOT].call(g[ON_SHOT]), c = !1) : "hit" === a.name && (c = !1, k.gotoAndStop(h))
	};
	this.isLaunching = function() {
		return c
	};
	this._init(a, e, b)
}

function CCharacter(a, e, b, c) {
	var h, f, g, k, d, m, l, r, p, w, v, x, n, y, t, q, z, B, u, I, D, C, E;
	this._init = function(a, b, c) {
		d = !1;
		v = 1;
		m = a;
		w = m === SURVIVOR_ID ? p = s_oGameSettings.getSurvivorHealth() : p = s_oGameSettings.getCharacterHealth(a);
		y = [];
		t = [];
		z = new createjs.Container;
		H.addChild(z);
		E = new createjs.Container;
		z.addChild(E);
		B = createSprite(s_aSpriteSheetCharacterWalk[a], "idle", 0, 0, 0, 0);
		B.stop();
		E.addChild(B);
		u = createSprite(s_aSpriteSheetCharacterDead[a], "idle", 0, 0, 0, 0);
		u.on("animationend", this._onDeadEnd);
		u.visible = !1;
		u.gotoAndStop("idle");
		E.addChild(u);
		a = z.getBounds().width / 2;
		z.x = CANVAS_WIDTH + z.getBounds().width;
		z.y = b;
		h = -a;
		f = c;
		b = s_oSpriteLibrary.getSprite("character_bar_bg");
		C = new createjs.Container;
		C.x = a;
		C.y = -b.height;
		z.addChild(C);
		I = createBitmap(b);
		C.addChild(I);
		b = s_oSpriteLibrary.getSprite("character_bar_fill");
		D = createBitmap(b);
		D.x = 9;
		D.y = 8;
		C.addChild(D);
		q = new createjs.Shape;
		q.graphics.beginFill("rgba(255,255,255,0.01)").drawRect(0, 0, b.width, b.height);
		q.regY = b.height;
		q.x = 9;
		q.y = b.height + D.y;
		C.addChild(q);
		D.mask = q;
		C.alpha = 0;
		x = z.getBounds().width;
		n = z.getBounds().height
	};
	this.unload = function() {
		H.removeChild(z)
	};
	this.addEventListener = function(a, b, c) {
		y[a] = b;
		t[a] = c
	};
	this.checkHit = function(a, b, c) {
		return (new createjs.Rectangle(z.x + z.getBounds().x, z.y + z.getBounds().y, x, n)).contains(a, b) ? (this.hit(c), {
			hit: !0,
			death: 0 >= w ? !0 : !1
		}) : {
			hit: !1,
			death: !1
		}
	};
	this.start = function() {
		l = 0;
		r = m === SURVIVOR_ID ? s_oGameSettings.getSurvivorSpeed() : s_oGameSettings.getCharacterSpeed(m);
		g = z.x;
		k = z.y;
		B.play();
		d = !0
	};
	this.hit = function(a) {
		w -= a;
		a = w / p + .001;
		0 === C.alpha ? (createjs.Tween.get(C).to({
			alpha: 1
		}, 200), createjs.Tween.get(q).wait(200).to({
			scaleY: a
		}, 200).call(function() {
			createjs.Tween.get(C).wait(1E3).to({
				alpha: 0
			}, 200)
		})) : q.scaleY = a;
		0 < w && createjs.Tween.get(E).to({
			alpha: .5
		}, 200).call(function() {
			createjs.Tween.get(E).to({
				alpha: 1
			}, 200)
		});
		m === SURVIVOR_ID ? playSound("death_survivor", 1, !1) : playSound("enemy_hit_" + m, 1, !1)
	};
	this.death = function() {
		0 >= w && (B.visible = !1, u.visible = !0, u.gotoAndPlay("idle"), d = !1)
	};
	this.setDepth = function(a) {
		H.setChildIndex(z, a)
	};
	this.pause = function(a) {
		u.visible ? u.paused = a : B.visible && (B.paused = a)
	};
	this.slowDown = function(a) {
		v = a ? .5 : 1
	};
	this._onDeadEnd = function(a) {
		J.unload()
	};
	this.getX = function() {
		return z.x
	};
	this.getY = function() {
		return z.y
	};
	this.getType = function() {
		return m
	};
	this.isPowerUp = function() {
		return !1
	};
	this.isSurvivor = function() {
		return m === SURVIVOR_ID ? !0 : !1
	};
	this.update = function() {
		if (d)
			if (l += v, l >= r) d = !1, y[ON_REMOVE_CHARACTER] && y[ON_REMOVE_CHARACTER].call(t[ON_REMOVE_CHARACTER], this);
			else {
				var a = s_oTweenController.easeLinear(l, 0, 1, r),
					b = s_oTweenController.tweenValue(g, h, a),
					a = s_oTweenController.tweenValue(k, f, a);
				z.x = b;
				z.y = a
			}
	};
	var J = this;
	var H = c;
	this._init(a, e, b)
}

function CBullet(a, e) {
	var b, c, h, f, g, k, d;
	this._init = function(a) {
		b = !1;
		f = 0;
		g = a;
		var c = s_oSpriteLibrary.getSprite("bullet"),
			e = new createjs.SpriteSheet({
				images: [c],
				frames: {
					width: c.width / 2,
					height: c.height,
					regX: c.width / 4,
					regY: c.height / 2
				},
				animations: {
					type0: [0, 0],
					type1: [1, 1]
				}
			});
		d = createSprite(e, "type0", c.width / 4, c.height / 2, c.width / 2, c.height);
		d.visible = !1;
		d.x = a.x;
		d.y = a.y;
		m.addChild(d)
	};
	this.addEventListener = function(a, b, c) {};
	this.reset = function() {
		b = !1;
		d.x = a.x;
		d.y = a.y;
		d.visible = !1
	};
	this.launch = function(g, e) {
		c = 0;
		f = e;
		h = BULLET_SPEED;
		k = g;
		playSound("launch", 1, !1);
		d.gotoAndStop("type" + e);
		d.x = a.x;
		d.y = a.y;
		d.alpha = 1;
		b = d.visible = !0
	};
	this.getX = function() {
		return m.x + d.x
	};
	this.getY = function() {
		return m.y + d.y
	};
	this.getType = function() {
		return f
	};
	this.update = function() {
		if (b)
			if (c++, c >= h) this.reset();
			else {
				var a = s_oTweenController.easeOutCubic(c, 0, 1, h),
					f = s_oTweenController.tweenValue(g.x, k.x, a),
					e = s_oTweenController.tweenValue(g.y, k.y, a),
					a = s_oTweenController.tweenValue(1, .3, a);
				d.x = f;
				d.y = e;
				d.alpha = a
			}
	};
	var m = e;
	this._init(a)
}

function CLevelBut(a, e, b, c, h, f, g) {
	var k, d, m, l = [],
		r = [],
		p, w, v, x, n;
	this._init = function(a, b, c, f, g, e) {
		d = [];
		m = [];
		n = new createjs.Container;
		n.x = a;
		n.y = b;
		y.addChild(n);
		a = {
			images: [g],
			frames: {
				width: g.width / 2,
				height: g.height,
				regX: g.width / 2 / 2,
				regY: g.height / 2
			},
			animations: {
				state_true: [0],
				state_false: [1]
			}
		};
		a = new createjs.SpriteSheet(a);
		k = e;
		x = createSprite(a, "state_" + k, g.width / 2 / 2, g.height / 2, g.width / 2, g.height);
		x.mouseEnabled = e;
		x.stop();
		s_bMobile || (n.cursor = "pointer");
		n.addChild(x);
		l.push(x);
		w = new createjs.Text(c, "40px " + PRIMARY_FONT, FONT_STROKE);
		w.x = 0;
		w.y = 42;
		w.textAlign = "center";
		w.textBaseline = "alphabetic";
		w.lineWidth = 200;
		w.outline = 4;
		n.addChild(w);
		v = new createjs.Text(c, "40px " + PRIMARY_FONT, FONT_COLOR);
		v.x = 0;
		v.y = 42;
		v.textAlign = "center";
		v.textBaseline = "alphabetic";
		v.lineWidth = 200;
		n.addChild(v);
		e || (v.color = "#fff", w.color = "#606161");
		c = s_oSpriteLibrary.getSprite("star_small");
		a = {
			images: [c],
			frames: {
				width: c.width / 2,
				height: c.height,
				regX: c.width / 4,
				regY: c.height / 2
			},
			animations: {
				fill: [0, 0],
				empty: [1, 1]
			}
		};
		g = new createjs.SpriteSheet(a);
		p = [];
		e = [{
			x: -30,
			y: -20
		}, {
			x: 0,
			y: -30
		}, {
			x: 30,
			y: -20
		}];
		for (a = 0; 3 > a; a++) b = createSprite(g, a < f ? "fill" : "empty", c.width / 4, c.height / 2, c.width / 2, c.height), b.x = e[a].x, b.y = e[a].y, n.addChild(b), p.push(b);
		this._initListener()
	};
	this.unload = function() {
		n.off("mousedown", this.buttonDown);
		n.off("pressup", this.buttonRelease);
		n.removeChild(x)
	};
	this._initListener = function() {
		n.on("mousedown", this.buttonDown);
		n.on("pressup", this.buttonRelease)
	};
	this.viewBut = function(a) {
		n.addChild(a)
	};
	this.addEventListener = function(a, b, c) {
		d[a] = b;
		m[a] = c
	};
	this.addEventListenerWithParams = function(a, b, c, f) {
		d[a] = b;
		m[a] = c;
		r = f
	};
	this.ifClickable = function() {
		return !0 === n.mouseEnabled ? 1 : 0
	};
	this.setActive = function(a, b) {
		k = b;
		l[a].gotoAndStop("state_" + k);
		l[a].mouseEnabled = !0;
		k ? (v.color = "#69b8d5", w.color = "#004e6f") : (v.color = "#b4b4b4", w.color = "#606161")
	};
	this.buttonRelease = function() {
		k && (playSound("press_but", 1, !1), d[ON_MOUSE_UP] && d[ON_MOUSE_UP].call(m[ON_MOUSE_UP], r))
	};
	this.buttonDown = function() {
		d[ON_MOUSE_DOWN] && d[ON_MOUSE_DOWN].call(m[ON_MOUSE_DOWN], r)
	};
	this.setPosition = function(a, b) {
		n.x = a;
		n.y = b
	};
	this.setVisible = function(a) {
		n.visible = a
	};
	var y = g;
	this._init(a, e, b, c, h, f, g)
}

function CLevelMenu() {
	var a, e, b, c, h, f, g, k, d, m, l, r, p, w, v, x = null,
		n = null,
		y, t, q, z, B = null,
		u = null;
	this._init = function() {
		d = 0;
		q = new createjs.Container;
		s_oStage.addChild(q);
		var l = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
		q.addChild(l);
		var D = new createjs.Shape;
		D.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		q.addChild(D);
		g = CANVAS_WIDTH / 2;
		k = 60;
		t = new createjs.Text(TEXT_SELECT_LEVEL, "50px " + PRIMARY_FONT, FONT_STROKE);
		t.x = g;
		t.y = k;
		t.textAlign = "center";
		t.outline = 3;
		q.addChild(t);
		y = new createjs.Text(TEXT_SELECT_LEVEL, "50px " + PRIMARY_FONT, FONT_COLOR);
		y.x = g;
		y.y = k;
		y.textAlign = "center";
		q.addChild(y);
		l = s_oSpriteLibrary.getSprite("but_exit");
		h = CANVAS_WIDTH - l.width / 2 - 10;
		f = l.height / 2 + 10;
		w = new CGfxButton(h, f, l, q);
		w.addEventListener(ON_MOUSE_UP, this._onExit, this);
		m = l.height;
		if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) b = w.getX() - l.width - 10, c = l.height / 2 + 10, v = new CToggle(b, c, s_oSpriteLibrary.getSprite("audio_icon"), s_bAudioActive), v.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
		var l = window.document,
			C = l.documentElement;
		B = C.requestFullscreen || C.mozRequestFullScreen || C.webkitRequestFullScreen || C.msRequestFullscreen;
		u = l.exitFullscreen || l.mozCancelFullScreen || l.webkitExitFullscreen || l.msExitFullscreen;
		!1 === ENABLE_FULLSCREEN && (B = !1);
		B && !1 === inIframe() && (l = s_oSpriteLibrary.getSprite("but_fullscreen"), a = l.width / 4 + 10, e = l.height / 2 + 10, z = new CToggle(a, e, l, s_bFullscreen, s_oStage), z.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
		this._checkBoundLimits();
		r = [];
		for (var l = Math.floor((CANVAS_WIDTH - 2 * EDGEBOARD_X - 100) / NUM_COLS_PAGE_LEVEL) / 2, E = C = 0; E < NUM_COLS_PAGE_LEVEL; E++) r.push(C), C += 2 * l;
		p = [];
		this._createNewLevelPage(0, NUM_LEVELS);
		if (1 < p.length) {
			for (l = 1; l < p.length; l++) p[l].visible = !1;
			x = new CGfxButton(CANVAS_WIDTH / 2 + 280, CANVAS_HEIGHT - 80, s_oSpriteLibrary.getSprite("arrow_right"), q);
			x.addEventListener(ON_MOUSE_UP, this._onRight, this);
			n = new CGfxButton(CANVAS_WIDTH / 2 - 280, CANVAS_HEIGHT - 80, s_oSpriteLibrary.getSprite("arrow_left"), q);
			n.addEventListener(ON_MOUSE_UP, this._onLeft, this)
		}
		D = new createjs.Shape;
		D.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		s_oStage.addChild(D);
		createjs.Tween.get(D).to({
			alpha: 0
		}, 1E3).call(function() {
			D.visible = !1
		});
		this.refreshButtonPos(s_iOffsetX, s_iOffsetY)
	};
	this.unload = function() {
		for (var a = 0; a < l.length; a++) l[a].unload();
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || v.unload();
		B && !1 === inIframe() && z.unload();
		w.unload();
		null !== n && (n.unload(), x.unload());
		s_oStage.removeChild(q);
		s_oLevelMenu = null
	};
	this.refreshButtonPos = function(d, g) {
		t.y = k + g;
		y.y = k + g;
		w.setPosition(h - d, f + g);
		!1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || v.setPosition(b - d, g + c);
		B && !1 === inIframe() && z.setPosition(a + d, e + g)
	};
	this._checkBoundLimits = function() {
		for (var a = s_oSpriteLibrary.getSprite("but_level"), b = 0, c = CANVAS_HEIGHT - 2 * EDGEBOARD_Y - 2 * m, d = 0; b < c;) b += a.height + 20, d++;
		NUM_ROWS_PAGE_LEVEL > d && (NUM_ROWS_PAGE_LEVEL = d);
		c = b = 0;
		d = CANVAS_WIDTH - 2 * EDGEBOARD_X;
		for (a = s_oSpriteLibrary.getSprite("but_level"); c < d;) c += a.width / 2 + 5, b++;
		NUM_COLS_PAGE_LEVEL > b && (NUM_COLS_PAGE_LEVEL = b)
	};
	this._createNewLevelPage = function(a, b) {
		var c = new createjs.Container;
		q.addChild(c);
		p.push(c);
		l = [];
		for (var d = 0, f = 0, g = 1, e = !1, h = s_oSpriteLibrary.getSprite("but_level"), k = a; k < b; k++) {
			var m = getItem("vegans_vs_king_bacon_stars_level_" + (k + 1));
			if (null === m || void 0 === m) m = 0;
			m = new CLevelBut(r[d] + h.width / 4, f + h.height / 2, k + 1, m, h, k + 1 > s_iLastLevel ? !1 : !0, c);
			m.addEventListenerWithParams(ON_MOUSE_UP, this._onButLevelRelease, this, k);
			l.push(m);
			d++;
			if (d === r.length && (d = 0, f += h.height + 80, g++, g > NUM_ROWS_PAGE_LEVEL)) {
				e = !0;
				break
			}
		}
		c.x = CANVAS_WIDTH / 2;
		c.y = CANVAS_HEIGHT / 2 + 30;
		c.regX = c.getBounds().width / 2;
		c.regY = c.getBounds().height / 2;
		e && this._createNewLevelPage(k + 1, b)
	};
	this._onRight = function() {
		p[d].visible = !1;
		d++;
		d >= p.length && (d = 0);
		p[d].visible = !0
	};
	this._onLeft = function() {
		p[d].visible = !1;
		d--;
		0 > d && (d = p.length - 1);
		p[d].visible = !0
	};
	this._onButLevelRelease = function(a) {
		s_oLevelMenu.unload();
		s_oMain.levelSelected(a + 1)
	};
	this._onAudioToggle = function() {
		Howler.mute(s_bAudioActive);
		s_bAudioActive = !s_bAudioActive
	};
	this.resetFullscreenBut = function() {
		z.setActive(s_bFullscreen)
	};
	this._onFullscreenRelease = function() {
		s_bFullscreen ? u.call(window.document) : B.call(window.document.documentElement);
		sizeHandler()
	};
	this._onExit = function() {
		s_oMain.gotoMenu()
	};
	s_oLevelMenu = this;
	this._init()
}
var s_oLevelMenu = null;

function CTweenController() {
	this.tweenValue = function(a, e, b) {
		return a + b * (e - a)
	};
	this.easeLinear = function(a, e, b, c) {
		return b * a / c + e
	};
	this.easeInCubic = function(a, e, b, c) {
		c = (a /= c) * a * a;
		return e + b * c
	};
	this.easeBackInQuart = function(a, e, b, c) {
		c = (a /= c) * a;
		return e + b * (2 * c * c + 2 * c * a + -3 * c)
	};
	this.easeInBack = function(a, e, b, c) {
		return b * (a /= c) * a * (2.70158 * a - 1.70158) + e
	};
	this.easeOutCubic = function(a, e, b, c) {
		return b * ((a = a / c - 1) * a * a + 1) + e
	};
	this.getTrajectoryPoint = function(a, e) {
		var b = new createjs.Point,
			c = (1 - a) * (1 - a),
			h = a * a;
		b.x = c * e.start.x + 2 * (1 - a) * a * e.traj.x + h * e.end.x;
		b.y = c * e.start.y + 2 * (1 - a) * a * e.traj.y + h * e.end.y;
		return b
	}
}

function CNextLevel(a) {
	var e, b, c, h, f, g, k, d, m;
	this._init = function() {
		m = new createjs.Container;
		m.alpha = 0;
		m.visible = !1;
		b = m.on("mousedown", function() {});
		r.addChild(m);
		var a = new createjs.Shape;
		a.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		a.on("mousedown", function() {});
		m.addChild(a);
		a = s_oSpriteLibrary.getSprite("msg_box");
		d = createBitmap(a);
		d.regX = a.width / 2;
		d.regY = a.height / 2;
		d.x = CANVAS_WIDTH / 2 - 22;
		d.y = CANVAS_HEIGHT / 2;
		m.addChild(d);
		var a = s_oSpriteLibrary.getSprite("star"),
			l = new createjs.SpriteSheet({
				images: [a],
				frames: {
					width: a.width / 2,
					height: a.height,
					regX: a.width / 4,
					regY: a.height / 2
				},
				animations: {
					fill: [0, 0],
					empty: [1, 1]
				}
			});
		e = [];
		for (var v = [CANVAS_WIDTH / 2 - 150, CANVAS_WIDTH / 2, CANVAS_WIDTH / 2 + 150], x = 0; 3 > x; x++) {
			var n = createSprite(l, "empty", a.width / 4, a.height / 2, a.width / 2, a.height);
			n.x = v[x];
			n.y = 370;
			m.addChild(n);
			var y = createSprite(l, "fill", a.width / 4, a.height / 2, a.width / 2, a.height);
			y.x = v[x];
			y.y = n.y;
			y.visible = !1;
			m.addChild(y);
			e[x] = y
		}
		c = new createjs.Text("", " 40px " + PRIMARY_FONT, FONT_STROKE);
		c.x = CANVAS_WIDTH / 2;
		c.y = CANVAS_HEIGHT / 2 - 112;
		c.textAlign = "center";
		c.textBaseline = "alphabetic";
		c.lineWidth = 500;
		c.outline = 2;
		m.addChild(c);
		h = new createjs.Text("", " 40px " + PRIMARY_FONT, FONT_COLOR);
		h.x = CANVAS_WIDTH / 2;
		h.y = CANVAS_HEIGHT / 2 - 112;
		h.textAlign = "center";
		h.textBaseline = "alphabetic";
		h.lineWidth = 500;
		m.addChild(h);
		f = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 92, s_oSpriteLibrary.getSprite("but_restart"), m);
		f.addEventListener(ON_MOUSE_UP, this.onRestart, this);
		g = new CGfxButton(CANVAS_WIDTH / 2 - 150, CANVAS_HEIGHT / 2 + 92, s_oSpriteLibrary.getSprite("but_home"), m);
		g.addEventListener(ON_MOUSE_UP, this.onHome, this);
		k = new CGfxButton(CANVAS_WIDTH / 2 + 150, CANVAS_HEIGHT / 2 + 92, s_oSpriteLibrary.getSprite("but_play"), m);
		k.addEventListener(ON_MOUSE_UP, this.onContinue, this)
	};
	this.unload = function() {
		m.off("mousedown", b);
		g.unload();
		f.unload();
		k.unload();
		s_oStage.removeChild(m)
	};
	this.show = function(a, b) {
		playSound("level_cleared", 1, !1);
		c.text = TEXT_SCORE + ": " + a;
		h.text = TEXT_SCORE + ": " + a;
		for (var d = 500, f = 0; f < b; f++) e[f].visible = !0, e[f].scaleX = e[f].scaleY = .01, (new createjs.Tween.get(e[f])).wait(d).to({
			scaleX: 1,
			scaleY: 1
		}, 800, createjs.Ease.backOut), d += 800;
		m.visible = !0;
		createjs.Tween.get(m).wait(500).to({
			alpha: 1
		}, 500);
		$(s_oMain).trigger("save_score", a)
	};
	this.onRestart = function() {
		l.unload();
		s_oGame.restartGame()
	};
	this.onHome = function() {
		l.unload();
		s_oMain.gotoMenu()
	};
	this.onContinue = function() {
		l.unload();
		s_oGame.nextLevel()
	};
	var l = this;
	var r = a;
	this._init()
}

function CPowerUp(a, e, b, c) {
	var h, f, g, k, d;
	this._init = function(a, b, c) {
		h = c;
		f = 0;
		g = [];
		k = [];
		var e = {
				images: [s_oSpriteLibrary.getSprite("powerup_" + c)],
				framerate: 20,
				frames: {
					width: POWERUP_SIZE[c].width,
					height: POWERUP_SIZE[c].height,
					regX: POWERUP_SIZE[c].width / 2,
					regY: POWERUP_SIZE[c].height
				},
				animations: {
					stop: [0, 0],
					anim: [0, POWERUP_FRAMES[c]]
				}
			},
			e = new createjs.SpriteSheet(e);
		d = createSprite(e, "stop", POWERUP_SIZE[c].width / 2, POWERUP_SIZE[c].height, POWERUP_SIZE[c].width, POWERUP_SIZE[c].height);
		d.x = a;
		d.y = b;
		m.addChild(d);
		createjs.Tween.get(d).to({
			x: d.x + 50
		}, 1E3).call(function() {
			d.gotoAndPlay("anim")
		});
		createjs.Tween.get(d).to({
			y: d.y - 60
		}, 500, createjs.Ease.cubicOut).to({
			y: d.y
		}, 500, createjs.Ease.cubicIn)
	};
	this.unload = function() {
		createjs.Tween.get(d).to({
			alpha: 0
		}, 1E3).call(function() {
			m.removeChild(d)
		})
	};
	this.addEventListener = function(a, b, c) {
		g[a] = b;
		k[a] = c
	};
	this.pause = function(a) {
		d.paused = a
	};
	this.setDepth = function(a) {
		m.setChildIndex(d, a)
	};
	this.checkHit = function(a, b) {
		return (new createjs.Rectangle(d.x + d.getBounds().x, d.y + d.getBounds().y, d.getBounds().width, d.getBounds().height)).contains(a, b) ? {
			hit: !0,
			death: !0
		} : {
			hit: !1,
			death: !1
		}
	};
	this.death = function() {
		m.removeChild(d)
	};
	this.getType = function() {
		return h
	};
	this.getX = function() {
		return d.x
	};
	this.getY = function() {
		return d.y
	};
	this.isPowerUp = function() {
		return !0
	};
	this.getY = function() {
		return d.y
	};
	this.update = function() {
		f += s_iTimeElaps;
		f > POWERUP_LIFE && (f = 0, g[ON_REMOVE_CHARACTER] && g[ON_REMOVE_CHARACTER].call(k[ON_REMOVE_CHARACTER], this))
	};
	var m = c;
	this._init(a, e, b)
}

function CPowerUpMsg(a, e) {
	var b, c, h, f;
	this._init = function(a) {
		var d = s_oSpriteLibrary.getSprite("powerup_bg");
		f = new createjs.Container;
		f.x = d.width / 2 + 10;
		f.y = CANVAS_HEIGHT + d.height;
		g.addChild(f);
		b = CANVAS_HEIGHT + d.height;
		var e = createBitmap(d);
		e.regX = d.width / 2;
		e.regY = d.height / 2;
		f.addChild(e);
		h = new createjs.Container;
		f.addChild(h);
		e = s_oSpriteLibrary.getSprite("powerups");
		e = new createjs.SpriteSheet({
			images: [e],
			framerate: 10,
			frames: {
				width: 50,
				height: 57,
				regX: 25,
				regY: 28
			},
			animations: {
				type_0: [0, 0],
				type_1: [1, 1],
				type_2: [2, 2],
				type_3: [3, 3]
			}
		});
		e = createSprite(e, "type_" + a, 25, 57, 50, 28);
		e.x = 0;
		e.y = -10;
		h.addChild(e);
		var k = new createjs.Text(TEXT_POWERUP[a], "28px " + PRIMARY_FONT, "#ffffff");
		k.x = e.x + 25;
		k.y = 0;
		k.textAlign = "left";
		k.textBaseline = "middle";
		h.addChild(k);
		c = new createjs.Text("", "32px " + PRIMARY_FONT, "#00ffff");
		c.x = k.x + k.getBounds().width + 10;
		c.y = k.y;
		c.textAlign = "left";
		c.textBaseline = "middle";
		0 !== a && 1 !== a || h.addChild(c);
		h.regX = h.getBounds().width / 2;
		createjs.Tween.get(f).to({
			y: CANVAS_HEIGHT - s_iOffsetY - d.height / 2 - 4
		}, 500, createjs.Ease.backOut)
	};
	this.unload = function() {
		createjs.Tween.get(f).to({
			y: b
		}, 500, createjs.Ease.backIn).call(function() {
			g.removeChild(f)
		})
	};
	this.refreshTime = function(a) {
		c.text = a
	};
	var g = e;
	this._init(a)
}

function CBoss(a) {
	var e, b, c, h, f, g, k, d, m, l, r, p, w, v, x, n, y, t;
	this._init = function() {
		f = !1;
		g = 1;
		r = 0;
		k = d = s_oGameSettings.getCharacterHealth(BOSS_ID);
		p = [];
		w = [];
		t = new createjs.Container;
		t.x = BOSS_START_X;
		t.y = BOSS_START_Y;
		z.addChild(t);
		y = new createjs.Container;
		t.addChild(y);
		var a = {
				images: [s_oSpriteLibrary.getSprite("king_walk")],
				framerate: 6,
				frames: {
					width: 154,
					height: 196,
					regX: 77,
					regY: 196
				},
				animations: {
					stop: [0, 0],
					anim: [0, 5]
				}
			},
			a = new createjs.SpriteSheet(a);
		v = createSprite(a, "anim", 77, 196, 154, 196);
		y.addChild(v);
		var a = s_oSpriteLibrary.getSprite("king_cast_0"),
			l = s_oSpriteLibrary.getSprite("king_cast_1"),
			a = {
				images: [a, l],
				framerate: 15,
				frames: {
					width: 200,
					height: 212,
					regX: 100,
					regY: 212
				},
				animations: {
					stop: [0, 0],
					anim: [0, 27, "stop"]
				}
			},
			a = new createjs.SpriteSheet(a);
		x = createSprite(a, "stop", 100, 212, 200, 212);
		x.x = -20;
		x.on("animationend", this._onCastEnd);
		x.visible = !1;
		y.addChild(x);
		a = {
			images: [s_oSpriteLibrary.getSprite("king_die")],
			framerate: 15,
			frames: {
				width: 184,
				height: 201,
				regX: 92,
				regY: 201
			},
			animations: {
				stop: [0, 0],
				anim: [0, 5]
			}
		};
		a = new createjs.SpriteSheet(a);
		n = createSprite(a, "idle", 92, 201, 184, 201);
		n.on("animationend", this._onDeadEnd);
		n.visible = !1;
		n.gotoAndStop("stop");
		y.addChild(n);
		a = t.getBounds().width / 2;
		c = t.x;
		h = t.y;
		e = -a;
		b = BOSS_START_Y
	};
	this.unload = function() {
		z.removeChild(t)
	};
	this.addEventListener = function(a, b, c) {
		p[a] = b;
		w[a] = c
	};
	this.checkHit = function(a, b, c) {
		return (new createjs.Rectangle(t.x + t.getBounds().x, t.y + t.getBounds().y, t.getBounds().width, t.getBounds().height)).contains(a, b) ? (this.hit(c), {
			hit: !0,
			death: 0 >= k ? !0 : !1
		}) : {
			hit: !1,
			death: !1
		}
	};
	this.start = function() {
		m = 0;
		l = s_oGameSettings.getCharacterSpeed(BOSS_ID);
		c = t.x;
		h = t.y;
		v.play();
		f = !0
	};
	this.hit = function(a) {
		k -= a;
		s_oInterface.refreshBossBar(k / d + .001);
		0 < k && (createjs.Tween.get(y).to({
			alpha: .5
		}, 200).call(function() {
			createjs.Tween.get(y).to({
				alpha: 1
			}, 200)
		}), playSound("boss_hit", 1, !1))
	};
	this.death = function() {
		0 >= k && (playSound("boss_death", 1, !1), v.visible = !1, x.visible = !1, n.visible = !0, n.gotoAndPlay("idle"), f = !1)
	};
	this.setDepth = function(a) {
		z.setChildIndex(t, a)
	};
	this.pause = function(a) {
		n.visible ? n.paused = a : v.visible ? v.paused = a : x.visible && (x.paused = a)
	};
	this.slowDown = function(a) {
		g = a ? .5 : 1
	};
	this._spawnEnemy = function() {
		f = !1;
		v.visible = !1;
		x.visible = !0;
		x.gotoAndPlay("anim");
		p[ON_SPAWN_ENEMY_BY_BOSS] && p[ON_SPAWN_ENEMY_BY_BOSS].call(w[ON_SPAWN_ENEMY_BY_BOSS], this)
	};
	this._onCastEnd = function() {
		x.visible = !1;
		v.gotoAndPlay("idle");
		f = v.visible = !0
	};
	this._onDeadEnd = function(a) {
		createjs.Tween.get(t).wait(1E3).to({
			alpha: 0
		}, 500).call(function() {
			q.unload()
		});
		p[ON_BOSS_DEATH] && p[ON_BOSS_DEATH].call(w[ON_BOSS_DEATH], this)
	};
	this.getX = function() {
		return t.x
	};
	this.getY = function() {
		return t.y
	};
	this.getType = function() {
		return BOSS_ID
	};
	this.isPowerUp = function() {
		return !1
	};
	this.isSurvivor = function() {
		return !1
	};
	this.update = function() {
		if (f)
			if (m += g, m >= l) f = !1, p[ON_REMOVE_CHARACTER] && p[ON_REMOVE_CHARACTER].call(w[ON_REMOVE_CHARACTER], this);
			else {
				var a = s_oTweenController.easeLinear(m, 0, 1, l),
					d = s_oTweenController.tweenValue(c, e, a),
					a = s_oTweenController.tweenValue(h, b, a);
				t.x = d;
				t.y = a;
				r += s_iTimeElaps;
				r > TIME_SPAWN_BY_BOSS && (r = 0, this._spawnEnemy())
			}
	};
	var q = this;
	var z = a;
	this._init()
}

function CScoreText(a, e, b) {
	var c, h, f;
	this._init = function(a, b, d) {
		c = new createjs.Container;
		c.alpha = 0;
		c.x = b;
		c.y = d;
		s_oStage.addChild(c);
		a = 0 <= a ? "+" + a : a;
		f = new createjs.Text(a, " 30px " + PRIMARY_FONT, FONT_STROKE);
		f.textAlign = "center";
		f.outline = 4;
		c.addChild(f);
		h = new createjs.Text(a, " 30px " + PRIMARY_FONT, FONT_COLOR);
		h.textAlign = "center";
		c.addChild(h);
		var e = this;
		createjs.Tween.get(c).to({
			alpha: 1
		}, 400, createjs.Ease.quadIn).call(function() {
			e.moveUp()
		})
	};
	this.moveUp = function() {
		var a = c.y - 100,
			b = this;
		createjs.Tween.get(c).to({
			y: a
		}, 1E3, createjs.Ease.sineIn).call(function() {
			b.unload()
		});
		createjs.Tween.get(c).wait(500).to({
			alpha: 0
		}, 500)
	};
	this.unload = function() {
		s_oStage.removeChild(c)
	};
	this._init(a, e, b)
}

function CMsgBox(a, e, b, c, h) {
	var f, g, k, d, m, l, r, p;
	this._init = function(a, b, c, e, h) {
		f = [];
		g = [];
		p = new createjs.Container;
		s_oStage.addChild(p);
		var n = new createjs.Shape;
		n.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		n.on("mousedown", function() {});
		p.addChild(n);
		var n = s_oSpriteLibrary.getSprite("msg_box"),
			q = createBitmap(n);
		q.regX = n.width / 2;
		q.regY = n.height / 2;
		q.x = CANVAS_WIDTH / 2 - 20;
		q.y = CANVAS_HEIGHT / 2;
		p.addChild(q);
		d = new createjs.Text("", a + "px " + PRIMARY_FONT, FONT_STROKE);
		d.textAlign = "center";
		d.textBaseline = "alphabetic";
		d.lineWidth = 580;
		d.x = CANVAS_WIDTH / 2;
		d.y = 320;
		d.outline = 3;
		p.addChild(d);
		k = new createjs.Text("", a + "px " + PRIMARY_FONT, FONT_COLOR);
		k.textAlign = "center";
		k.textBaseline = "alphabetic";
		k.lineWidth = 580;
		k.x = CANVAS_WIDTH / 2;
		k.y = 320;
		p.addChild(k);
		m = new CTextButton(CANVAS_WIDTH / 2 - 100, CANVAS_HEIGHT - 320, s_oSpriteLibrary.getSprite("but_generic"), "LEFT", PRIMARY_FONT, "#ffffff", 30, p);
		m.addEventListener(ON_MOUSE_UP, this._onButLeftDownRelease, this);
		l = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 320, s_oSpriteLibrary.getSprite("but_generic"), "CENTER", PRIMARY_FONT, "#ffffff", 30, p);
		l.addEventListener(ON_MOUSE_UP, this._onButCenterDownRelease, this);
		r = new CTextButton(CANVAS_WIDTH / 2 + 90, CANVAS_HEIGHT - 320, s_oSpriteLibrary.getSprite("but_generic"), "LEFT", PRIMARY_FONT, "#ffffff", 30, p);
		r.addEventListener(ON_MOUSE_UP, this._onButRightDownRelease, this);
		this.show(b, c, e, h)
	};
	this.show = function(a, b, c, e) {
		k.text = a;
		d.text = a;
		"" !== b ? (m.changeText(b), m.setVisible(!0)) : m.setVisible(!1);
		"" !== c ? (l.changeText(c), l.setVisible(!0)) : l.setVisible(!1);
		"" !== e ? (r.changeText(e), r.setVisible(!0)) : r.setVisible(!1)
	};
	this.hide = function() {
		this.unload();
		s_oStage.removeChild(p)
	};
	this.unload = function() {
		m.unload();
		l.unload();
		r.unload()
	};
	this.addEventListener = function(a, b, c) {
		f[a] = b;
		g[a] = c
	};
	this._onButLeftDownRelease = function() {
		f[ON_MSG_BOX_LEFT_BUT] && (f[ON_MSG_BOX_LEFT_BUT].call(g[ON_MSG_BOX_LEFT_BUT]), p.visible = !1)
	};
	this._onButCenterDownRelease = function() {
		f[ON_MSG_BOX_CENTER_BUT] && (f[ON_MSG_BOX_CENTER_BUT].call(g[ON_MSG_BOX_CENTER_BUT]), p.visible = !1)
	};
	this._onButRightDownRelease = function() {
		f[ON_MSG_BOX_RIGHT_BUT] && (f[ON_MSG_BOX_RIGHT_BUT].call(g[ON_MSG_BOX_RIGHT_BUT]), p.visible = !1)
	};
	this._init(a, e, b, c, h)
}

function CVersusPanel(a) {
	var e, b, c, h, f, g, k, d = this;
	this._init = function() {
		k = new createjs.Container;
		m.addChild(k);
		g = new createjs.Shape;
		g.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		g.alpha = 0;
		g.on("mousedown", function() {});
		k.addChild(g);
		b = 0;
		c = 2;
		h = 0;
		f = [];
		for (var a = 0; 39 > a; a++) {
			var d = createBitmap(s_oSpriteLibrary.getSprite("vs_panel_" + a));
			d.y = 130;
			0 < a && (d.visible = !1);
			k.addChild(d);
			f[a] = d
		}(new createjs.Tween.get(g)).to({
			alpha: .7
		}, 500);
		e = !0
	};
	this.unload = function() {
		g.off("mousedown", function() {});
		m.removeChild(k)
	};
	this.update = function() {
		if (!e) return b;
		h++;
		h === c && (h = 0, b++, f[b].visible = !0, f[b - 1].visible = !1, b === f.length - 1 && (e = !1, (new createjs.Tween.get(k)).wait(1E3).to({
			alpha: 0
		}, 500).call(function() {
			d.unload();
			s_oGame.endVersusPanel()
		})));
		return b
	};
	var m = a;
	this._init()
}

function CWinPanel(a) {
	var e, b, c, h, f, g, k, d;
	this._init = function(a) {
		b = new createjs.Container;
		b.alpha = 0;
		b.visible = !1;
		s_oStage.addChild(b);
		var c = new createjs.Shape;
		c.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		c.on("mousedown", function() {});
		b.addChild(c);
		e = createBitmap(s_oSpriteLibrary.getSprite("win_panel"));
		e.x = 170;
		e.y = 200;
		b.addChild(e);
		h = new createjs.Text(TEXT_CONGRATS, "40px " + PRIMARY_FONT, FONT_STROKE);
		h.x = CANVAS_WIDTH / 2;
		h.y = CANVAS_HEIGHT / 2 - 80;
		h.textAlign = "center";
		h.textBaseline = "alphabetic";
		h.lineWidth = 500;
		h.outline = 3;
		b.addChild(h);
		f = new createjs.Text(TEXT_CONGRATS, "40px " + PRIMARY_FONT, FONT_COLOR);
		f.x = CANVAS_WIDTH / 2;
		f.y = CANVAS_HEIGHT / 2 - 80;
		f.textAlign = "center";
		f.textBaseline = "alphabetic";
		f.lineWidth = 500;
		b.addChild(f);
		g = new createjs.Text(a, " 40px " + PRIMARY_FONT, FONT_STROKE);
		g.x = CANVAS_WIDTH / 2;
		g.y = CANVAS_HEIGHT / 2;
		g.textAlign = "center";
		g.textBaseline = "alphabetic";
		g.lineWidth = 500;
		g.outline = 2;
		b.addChild(g);
		k = new createjs.Text(a, " 40px " + PRIMARY_FONT, FONT_COLOR);
		k.x = CANVAS_WIDTH / 2;
		k.y = CANVAS_HEIGHT / 2;
		k.textAlign = "center";
		k.textBaseline = "alphabetic";
		k.lineWidth = 500;
		b.addChild(k);
		d = new CGfxButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 90, s_oSpriteLibrary.getSprite("but_home"), b);
		d.addEventListener(ON_MOUSE_UP, this.onHome, this);
		this.show(a)
	};
	this.unload = function() {
		b.off("mousedown", c);
		d.unload();
		s_oStage.removeChild(b)
	};
	this._initListener = function() {
		c = b.on("mousedown", function() {})
	};
	this.show = function(a) {
		playSound("win", 1, !1);
		g.text = TEXT_SCORE + ": " + a;
		k.text = TEXT_SCORE + ": " + a;
		b.visible = !0;
		var c = this;
		createjs.Tween.get(b).wait(500).to({
			alpha: 1
		}, 500).call(function() {
			c._initListener()
		});
		$(s_oMain).trigger("save_score", a);
		$(s_oMain).trigger("end_level", 1);
		var d = "You collected <strong>" + a + " points</strong>!<br><br>Share your score with your friends!",
			e = "My score is " + a + " points! Can you do better?";
		$(s_oMain).trigger("share_event", a, "200x200.jpg", "Congratulations!", d, e)
	};
	this._onExit = function() {
		$(s_oMain).trigger("show_interlevel_ad");
		b.off("mousedown", this._onExit);
		s_oStage.removeChild(b);
		s_oGame.onExit()
	};
	this.onHome = function() {
		m.unload();
		s_oMain.gotoMenu()
	};
	var m = this;
	this._init(a);
	return this
}

function CPause() {
	var a, e;
	this._init = function() {
		var b = this;
		e = new createjs.Container;
		e.visible = !1;
		e.on("click", function() {
			b.hide()
		});
		s_oStage.addChild(e);
		a = new createjs.Shape;
		a.graphics.beginFill("rgba(0,0,0,0.5)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		e.addChild(a);
		var c = new createjs.Text(TEXT_PAUSE, " 70px " + PRIMARY_FONT, FONT_STROKE);
		c.x = CANVAS_WIDTH / 2;
		c.y = CANVAS_HEIGHT / 2;
		c.textAlign = "center";
		c.textBaseline = "alphabetic";
		c.outline = 4;
		e.addChild(c);
		c = new createjs.Text(TEXT_PAUSE, " 70px " + PRIMARY_FONT, FONT_COLOR);
		c.x = CANVAS_WIDTH / 2;
		c.y = CANVAS_HEIGHT / 2;
		c.textAlign = "center";
		c.textBaseline = "alphabetic";
		e.addChild(c)
	};
	this.show = function() {
		e.alpha = 0;
		e.visible = !0;
		createjs.Tween.get(e).to({
			alpha: 1
		}, 600)
	};
	this.hide = function() {
		e.visible = !1;
		s_oInterface.onPause(!1)
	};
	this._init()
};