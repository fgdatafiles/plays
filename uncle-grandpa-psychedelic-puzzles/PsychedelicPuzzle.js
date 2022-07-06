(function ($hx_exports) { "use strict";
$hx_exports.openfl = $hx_exports.openfl || {};
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { };
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.preloader = null;
ApplicationMain.embed = $hx_exports.openfl.embed = function(elementName,width,height,background) {
	var element = null;
	if(elementName != null) element = window.document.getElementById(elementName);
	var color = null;
	if(background != null) {
		background = StringTools.replace(background,"#","");
		if(background.indexOf("0x") > -1) color = Std.parseInt(background); else color = Std.parseInt("0x" + background);
	}
	openfl.Lib.create(element,width,height,color);
	ApplicationMain.preloader = new com.ie.blitz.blitzone.screens.Preloader();
	openfl.Lib.current.addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var sounds = [];
	var id;
	var image = new Image();
	id = "img/preloader/loading-screenbg.png";
	ApplicationMain.images.set(id,image);
	image.onload = ApplicationMain.image_onLoad;
	image.src = id;
	ApplicationMain.total++;
	var image1 = new Image();
	id = "img/preloader/loadingbar.png";
	ApplicationMain.images.set(id,image1);
	image1.onload = ApplicationMain.image_onLoad;
	image1.src = id;
	ApplicationMain.total++;
	var image2 = new Image();
	id = "img/preloader/loadingtext.png";
	ApplicationMain.images.set(id,image2);
	image2.onload = ApplicationMain.image_onLoad;
	image2.src = id;
	ApplicationMain.total++;
	var image3 = new Image();
	id = "img/puzzles/unclegrandpa_puzzle1.png";
	ApplicationMain.images.set(id,image3);
	image3.onload = ApplicationMain.image_onLoad;
	image3.src = id;
	ApplicationMain.total++;
	var image4 = new Image();
	id = "img/puzzles/unclegrandpa_puzzle10.png";
	ApplicationMain.images.set(id,image4);
	image4.onload = ApplicationMain.image_onLoad;
	image4.src = id;
	ApplicationMain.total++;
	var image5 = new Image();
	id = "img/puzzles/unclegrandpa_puzzle2.png";
	ApplicationMain.images.set(id,image5);
	image5.onload = ApplicationMain.image_onLoad;
	image5.src = id;
	ApplicationMain.total++;
	var image6 = new Image();
	id = "img/puzzles/unclegrandpa_puzzle3.png";
	ApplicationMain.images.set(id,image6);
	image6.onload = ApplicationMain.image_onLoad;
	image6.src = id;
	ApplicationMain.total++;
	var image7 = new Image();
	id = "img/puzzles/unclegrandpa_puzzle4.png";
	ApplicationMain.images.set(id,image7);
	image7.onload = ApplicationMain.image_onLoad;
	image7.src = id;
	ApplicationMain.total++;
	var image8 = new Image();
	id = "img/puzzles/unclegrandpa_puzzle5.png";
	ApplicationMain.images.set(id,image8);
	image8.onload = ApplicationMain.image_onLoad;
	image8.src = id;
	ApplicationMain.total++;
	var image9 = new Image();
	id = "img/puzzles/unclegrandpa_puzzle6.png";
	ApplicationMain.images.set(id,image9);
	image9.onload = ApplicationMain.image_onLoad;
	image9.src = id;
	ApplicationMain.total++;
	var image10 = new Image();
	id = "img/puzzles/unclegrandpa_puzzle7.png";
	ApplicationMain.images.set(id,image10);
	image10.onload = ApplicationMain.image_onLoad;
	image10.src = id;
	ApplicationMain.total++;
	var image11 = new Image();
	id = "img/puzzles/unclegrandpa_puzzle8.png";
	ApplicationMain.images.set(id,image11);
	image11.onload = ApplicationMain.image_onLoad;
	image11.src = id;
	ApplicationMain.total++;
	var image12 = new Image();
	id = "img/puzzles/unclegrandpa_puzzle9.png";
	ApplicationMain.images.set(id,image12);
	image12.onload = ApplicationMain.image_onLoad;
	image12.src = id;
	ApplicationMain.total++;
	var image13 = new Image();
	id = "img/ui/Fail1.png";
	ApplicationMain.images.set(id,image13);
	image13.onload = ApplicationMain.image_onLoad;
	image13.src = id;
	ApplicationMain.total++;
	var image14 = new Image();
	id = "img/ui/Fail2.png";
	ApplicationMain.images.set(id,image14);
	image14.onload = ApplicationMain.image_onLoad;
	image14.src = id;
	ApplicationMain.total++;
	var image15 = new Image();
	id = "img/ui/Fail3.png";
	ApplicationMain.images.set(id,image15);
	image15.onload = ApplicationMain.image_onLoad;
	image15.src = id;
	ApplicationMain.total++;
	var image16 = new Image();
	id = "img/ui/go.png";
	ApplicationMain.images.set(id,image16);
	image16.onload = ApplicationMain.image_onLoad;
	image16.src = id;
	ApplicationMain.total++;
	var image17 = new Image();
	id = "img/ui/how-to-play.png";
	ApplicationMain.images.set(id,image17);
	image17.onload = ApplicationMain.image_onLoad;
	image17.src = id;
	ApplicationMain.total++;
	var image18 = new Image();
	id = "img/ui/ingame-bg.png";
	ApplicationMain.images.set(id,image18);
	image18.onload = ApplicationMain.image_onLoad;
	image18.src = id;
	ApplicationMain.total++;
	var image19 = new Image();
	id = "img/ui/ingame_screen.png";
	ApplicationMain.images.set(id,image19);
	image19.onload = ApplicationMain.image_onLoad;
	image19.src = id;
	ApplicationMain.total++;
	var image20 = new Image();
	id = "img/ui/ingame_timer1.png";
	ApplicationMain.images.set(id,image20);
	image20.onload = ApplicationMain.image_onLoad;
	image20.src = id;
	ApplicationMain.total++;
	var image21 = new Image();
	id = "img/ui/popup.png";
	ApplicationMain.images.set(id,image21);
	image21.onload = ApplicationMain.image_onLoad;
	image21.src = id;
	ApplicationMain.total++;
	var image22 = new Image();
	id = "img/ui/popupnewhighscore.png";
	ApplicationMain.images.set(id,image22);
	image22.onload = ApplicationMain.image_onLoad;
	image22.src = id;
	ApplicationMain.total++;
	var image23 = new Image();
	id = "img/ui/popup_gameover_withscore.png";
	ApplicationMain.images.set(id,image23);
	image23.onload = ApplicationMain.image_onLoad;
	image23.src = id;
	ApplicationMain.total++;
	var image24 = new Image();
	id = "img/ui/popup_loser_withscore.png";
	ApplicationMain.images.set(id,image24);
	image24.onload = ApplicationMain.image_onLoad;
	image24.src = id;
	ApplicationMain.total++;
	var image25 = new Image();
	id = "img/ui/popup_winner_withscore.png";
	ApplicationMain.images.set(id,image25);
	image25.onload = ApplicationMain.image_onLoad;
	image25.src = id;
	ApplicationMain.total++;
	var image26 = new Image();
	id = "img/ui/rect.png";
	ApplicationMain.images.set(id,image26);
	image26.onload = ApplicationMain.image_onLoad;
	image26.src = id;
	ApplicationMain.total++;
	var image27 = new Image();
	id = "img/ui/redRect.png";
	ApplicationMain.images.set(id,image27);
	image27.onload = ApplicationMain.image_onLoad;
	image27.src = id;
	ApplicationMain.total++;
	var image28 = new Image();
	id = "img/ui/splashscreen_bg.png";
	ApplicationMain.images.set(id,image28);
	image28.onload = ApplicationMain.image_onLoad;
	image28.src = id;
	ApplicationMain.total++;
	var image29 = new Image();
	id = "img/ui/splashscreen_howtoplay_button.png";
	ApplicationMain.images.set(id,image29);
	image29.onload = ApplicationMain.image_onLoad;
	image29.src = id;
	ApplicationMain.total++;
	var image30 = new Image();
	id = "img/ui/splashscreen_howtoplay_button_clicked.png";
	ApplicationMain.images.set(id,image30);
	image30.onload = ApplicationMain.image_onLoad;
	image30.src = id;
	ApplicationMain.total++;
	var image31 = new Image();
	id = "img/ui/splashscreen_playbutton_clicked.png";
	ApplicationMain.images.set(id,image31);
	image31.onload = ApplicationMain.image_onLoad;
	image31.src = id;
	ApplicationMain.total++;
	var image32 = new Image();
	id = "img/ui/splashscreen_playbutton_normal.png";
	ApplicationMain.images.set(id,image32);
	image32.onload = ApplicationMain.image_onLoad;
	image32.src = id;
	ApplicationMain.total++;
	var image33 = new Image();
	id = "img/ui/Success1.png";
	ApplicationMain.images.set(id,image33);
	image33.onload = ApplicationMain.image_onLoad;
	image33.src = id;
	ApplicationMain.total++;
	var image34 = new Image();
	id = "img/ui/Success2.png";
	ApplicationMain.images.set(id,image34);
	image34.onload = ApplicationMain.image_onLoad;
	image34.src = id;
	ApplicationMain.total++;
	var image35 = new Image();
	id = "img/ui/Success3.png";
	ApplicationMain.images.set(id,image35);
	image35.onload = ApplicationMain.image_onLoad;
	image35.src = id;
	ApplicationMain.total++;
	var sound = haxe.io.Path.withoutExtension("audio/sfx/button.mp3");
	if(!HxOverrides.remove(sounds,sound)) ApplicationMain.total++;
	sounds.push(sound);
	var sound1 = haxe.io.Path.withoutExtension("audio/sfx/button.ogg");
	if(!HxOverrides.remove(sounds,sound1)) ApplicationMain.total++;
	sounds.push(sound1);
	var sound2 = haxe.io.Path.withoutExtension("audio/sfx/button.wav");
	if(!HxOverrides.remove(sounds,sound2)) ApplicationMain.total++;
	sounds.push(sound2);
	var sound3 = haxe.io.Path.withoutExtension("audio/sfx/cancel.mp3");
	if(!HxOverrides.remove(sounds,sound3)) ApplicationMain.total++;
	sounds.push(sound3);
	var sound4 = haxe.io.Path.withoutExtension("audio/sfx/cancel.ogg");
	if(!HxOverrides.remove(sounds,sound4)) ApplicationMain.total++;
	sounds.push(sound4);
	var sound5 = haxe.io.Path.withoutExtension("audio/sfx/cancel.wav");
	if(!HxOverrides.remove(sounds,sound5)) ApplicationMain.total++;
	sounds.push(sound5);
	var sound6 = haxe.io.Path.withoutExtension("audio/sfx/distress.mp3");
	if(!HxOverrides.remove(sounds,sound6)) ApplicationMain.total++;
	sounds.push(sound6);
	var sound7 = haxe.io.Path.withoutExtension("audio/sfx/distress.ogg");
	if(!HxOverrides.remove(sounds,sound7)) ApplicationMain.total++;
	sounds.push(sound7);
	var sound8 = haxe.io.Path.withoutExtension("audio/sfx/distress.wav");
	if(!HxOverrides.remove(sounds,sound8)) ApplicationMain.total++;
	sounds.push(sound8);
	var sound9 = haxe.io.Path.withoutExtension("audio/sfx/fail.mp3");
	if(!HxOverrides.remove(sounds,sound9)) ApplicationMain.total++;
	sounds.push(sound9);
	var sound10 = haxe.io.Path.withoutExtension("audio/sfx/fail.ogg");
	if(!HxOverrides.remove(sounds,sound10)) ApplicationMain.total++;
	sounds.push(sound10);
	var sound11 = haxe.io.Path.withoutExtension("audio/sfx/fail.wav");
	if(!HxOverrides.remove(sounds,sound11)) ApplicationMain.total++;
	sounds.push(sound11);
	var sound12 = haxe.io.Path.withoutExtension("audio/sfx/tap.mp3");
	if(!HxOverrides.remove(sounds,sound12)) ApplicationMain.total++;
	sounds.push(sound12);
	var sound13 = haxe.io.Path.withoutExtension("audio/sfx/tap.ogg");
	if(!HxOverrides.remove(sounds,sound13)) ApplicationMain.total++;
	sounds.push(sound13);
	var sound14 = haxe.io.Path.withoutExtension("audio/sfx/tap.wav");
	if(!HxOverrides.remove(sounds,sound14)) ApplicationMain.total++;
	sounds.push(sound14);
	var sound15 = haxe.io.Path.withoutExtension("audio/sfx/tileSwap.mp3");
	if(!HxOverrides.remove(sounds,sound15)) ApplicationMain.total++;
	sounds.push(sound15);
	var sound16 = haxe.io.Path.withoutExtension("audio/sfx/tileSwap.ogg");
	if(!HxOverrides.remove(sounds,sound16)) ApplicationMain.total++;
	sounds.push(sound16);
	var sound17 = haxe.io.Path.withoutExtension("audio/sfx/tileSwap.wav");
	if(!HxOverrides.remove(sounds,sound17)) ApplicationMain.total++;
	sounds.push(sound17);
	var sound18 = haxe.io.Path.withoutExtension("audio/sfx/win.mp3");
	if(!HxOverrides.remove(sounds,sound18)) ApplicationMain.total++;
	sounds.push(sound18);
	var sound19 = haxe.io.Path.withoutExtension("audio/sfx/win.ogg");
	if(!HxOverrides.remove(sounds,sound19)) ApplicationMain.total++;
	sounds.push(sound19);
	var sound20 = haxe.io.Path.withoutExtension("audio/sfx/win.wav");
	if(!HxOverrides.remove(sounds,sound20)) ApplicationMain.total++;
	sounds.push(sound20);
	var urlLoader = new openfl.net.URLLoader();
	urlLoader.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("fonts/bradybu0.eot",urlLoader);
	ApplicationMain.total++;
	var urlLoader1 = new openfl.net.URLLoader();
	urlLoader1.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("fonts/bradybu0.svg",urlLoader1);
	ApplicationMain.total++;
	var urlLoader2 = new openfl.net.URLLoader();
	urlLoader2.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("fonts/bradybu0.woff",urlLoader2);
	ApplicationMain.total++;
	var urlLoader3 = new openfl.net.URLLoader();
	urlLoader3.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("fonts/Fffharmo.eot",urlLoader3);
	ApplicationMain.total++;
	var urlLoader4 = new openfl.net.URLLoader();
	urlLoader4.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("xml/puzzle_config.bak",urlLoader4);
	ApplicationMain.total++;
	var urlLoader5 = new openfl.net.URLLoader();
	urlLoader5.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("xml/puzzle_config.xml",urlLoader5);
	ApplicationMain.total++;
	if(ApplicationMain.total == 0) ApplicationMain.start(); else {
		var $it0 = ApplicationMain.urlLoaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var urlLoader6 = ApplicationMain.urlLoaders.get(path);
			urlLoader6.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader6.load(new openfl.net.URLRequest(path));
		}
		var _g = 0;
		while(_g < sounds.length) {
			var soundName = sounds[_g];
			++_g;
			var sound21 = new openfl.media.Sound();
			sound21.addEventListener(openfl.events.Event.COMPLETE,ApplicationMain.sound_onComplete);
			sound21.addEventListener(openfl.events.IOErrorEvent.IO_ERROR,ApplicationMain.sound_onIOError);
			sound21.load(new openfl.net.URLRequest(soundName + ".ogg"));
		}
	}
};
ApplicationMain.main = function() {
};
ApplicationMain.start = function() {
	ApplicationMain.preloader.addEventListener(openfl.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
};
ApplicationMain.image_onLoad = function(_) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(openfl.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	openfl.Lib.current.removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	var hasMain = false;
	var _g = 0;
	var _g1 = Type.getClassFields(com.ie.blitz.blitzone.Main);
	while(_g < _g1.length) {
		var methodName = _g1[_g];
		++_g;
		if(methodName == "main") {
			hasMain = true;
			break;
		}
	}
	if(hasMain) Reflect.callMethod(com.ie.blitz.blitzone.Main,Reflect.field(com.ie.blitz.blitzone.Main,"main"),[]); else {
		var instance = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(instance,openfl.display.DisplayObject)) openfl.Lib.current.addChild(instance); else {
			haxe.Log.trace("Error: No entry point found",{ fileName : "ApplicationMain.hx", lineNumber : 790, className : "ApplicationMain", methodName : "preloader_onComplete"});
			haxe.Log.trace("If you are using DCE with a static main, you may need to @:keep the function",{ fileName : "ApplicationMain.hx", lineNumber : 791, className : "ApplicationMain", methodName : "preloader_onComplete"});
		}
	}
};
ApplicationMain.sound_onComplete = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
ApplicationMain.sound_onIOError = function(event) {
	ApplicationMain.assetsLoaded++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.assetsLoaded,ApplicationMain.total);
	if(ApplicationMain.assetsLoaded == ApplicationMain.total) ApplicationMain.start();
};
var openfl = {};
openfl.events = {};
openfl.events.IEventDispatcher = function() { };
$hxClasses["openfl.events.IEventDispatcher"] = openfl.events.IEventDispatcher;
openfl.events.IEventDispatcher.__name__ = ["openfl","events","IEventDispatcher"];
openfl.events.IEventDispatcher.prototype = {
	__class__: openfl.events.IEventDispatcher
};
openfl.events.EventDispatcher = function(target) {
	if(target != null) this.__targetDispatcher = target;
};
$hxClasses["openfl.events.EventDispatcher"] = openfl.events.EventDispatcher;
openfl.events.EventDispatcher.__name__ = ["openfl","events","EventDispatcher"];
openfl.events.EventDispatcher.__interfaces__ = [openfl.events.IEventDispatcher];
openfl.events.EventDispatcher.__sortByPriority = function(l1,l2) {
	if(l1.priority == l2.priority) return 0; else if(l1.priority > l2.priority) return -1; else return 1;
};
openfl.events.EventDispatcher.prototype = {
	addEventListener: function(type,listener,useCapture,priority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(priority == null) priority = 0;
		if(useCapture == null) useCapture = false;
		if(this.__eventMap == null) this.__eventMap = new haxe.ds.StringMap();
		if(!this.__eventMap.exists(type)) {
			var list = new Array();
			list.push(new openfl.events._EventDispatcher.Listener(listener,useCapture,priority));
			this.__eventMap.set(type,list);
		} else {
			var list1 = this.__eventMap.get(type);
			list1.push(new openfl.events._EventDispatcher.Listener(listener,useCapture,priority));
			list1.sort(openfl.events.EventDispatcher.__sortByPriority);
		}
	}
	,dispatchEvent: function(event) {
		if(this.__eventMap == null || event == null) return false;
		var list = this.__eventMap.get(event.type);
		if(list == null) return false;
		if(event.target == null) {
			if(this.__targetDispatcher != null) event.target = this.__targetDispatcher; else event.target = this;
		}
		event.currentTarget = this;
		var capture = event.eventPhase == 0;
		var index = 0;
		var listener;
		while(index < list.length) {
			listener = list[index];
			if(listener.useCapture == capture) {
				listener.callback(event);
				if(event.__isCancelledNow) return true;
			}
			if(listener == list[index]) index++;
		}
		return true;
	}
	,hasEventListener: function(type) {
		if(this.__eventMap == null) return false;
		return this.__eventMap.exists(type);
	}
	,removeEventListener: function(type,listener,capture) {
		if(capture == null) capture = false;
		if(this.__eventMap == null) return;
		var list = this.__eventMap.get(type);
		if(list == null) return;
		var _g1 = 0;
		var _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].match(listener,capture)) {
				list.splice(i,1);
				break;
			}
		}
		if(list.length == 0) this.__eventMap.remove(type);
		if(!this.__eventMap.iterator().hasNext()) this.__eventMap = null;
	}
	,toString: function() {
		var full = Type.getClassName(Type.getClass(this));
		var $short = full.split(".").pop();
		return "[object " + $short + "]";
	}
	,willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,__class__: openfl.events.EventDispatcher
};
openfl.display = {};
openfl.display.IBitmapDrawable = function() { };
$hxClasses["openfl.display.IBitmapDrawable"] = openfl.display.IBitmapDrawable;
openfl.display.IBitmapDrawable.__name__ = ["openfl","display","IBitmapDrawable"];
openfl.display.IBitmapDrawable.prototype = {
	__class__: openfl.display.IBitmapDrawable
};
openfl.display.DisplayObject = function() {
	openfl.events.EventDispatcher.call(this);
	this.set_alpha(1);
	this.set_rotation(0);
	this.set_scaleX(1);
	this.set_scaleY(1);
	this.set_visible(true);
	this.set_x(0);
	this.set_y(0);
	this.__worldAlpha = 1;
	this.__worldTransform = new openfl.geom.Matrix();
	this.set_name("instance" + ++openfl.display.DisplayObject.__instanceCount);
};
$hxClasses["openfl.display.DisplayObject"] = openfl.display.DisplayObject;
openfl.display.DisplayObject.__name__ = ["openfl","display","DisplayObject"];
openfl.display.DisplayObject.__interfaces__ = [openfl.display.IBitmapDrawable];
openfl.display.DisplayObject.__super__ = openfl.events.EventDispatcher;
openfl.display.DisplayObject.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	dispatchEvent: function(event) {
		var result = openfl.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
		if(event.__isCancelled) return true;
		if(event.bubbles && this.parent != null && this.parent != this) {
			event.eventPhase = 2;
			this.parent.dispatchEvent(event);
		}
		return result;
	}
	,getBounds: function(targetCoordinateSpace) {
		var matrix = this.__getTransform();
		if(targetCoordinateSpace != null) {
			matrix = new openfl.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			matrix.concat(targetCoordinateSpace.__worldTransform.clone().invert());
		}
		var bounds = new openfl.geom.Rectangle();
		this.__getBounds(bounds,matrix);
		return bounds;
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,globalToLocal: function(pos) {
		return this.__getTransform().clone().invert().transformPoint(pos);
	}
	,hitTestObject: function(obj) {
		return false;
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		return false;
	}
	,localToGlobal: function(point) {
		return this.__getTransform().transformPoint(point);
	}
	,__applyStyle: function(renderSession,setTransform,setAlpha,setClip) {
		if(setTransform && this.__worldTransformChanged) this.__style.setProperty(renderSession.transformProperty,this.__worldTransform.to3DString(renderSession.roundPixels),null);
		if(this.__worldZ != ++renderSession.z) {
			this.__worldZ = renderSession.z;
			this.__style.setProperty("z-index",Std.string(this.__worldZ),null);
		}
		if(setAlpha && this.__worldAlphaChanged) {
			if(this.__worldAlpha < 1) this.__style.setProperty("opacity",Std.string(this.__worldAlpha),null); else this.__style.removeProperty("opacity");
		}
		if(setClip && this.__worldClipChanged) {
			if(this.__worldClip == null) this.__style.removeProperty("clip"); else {
				var clip = this.__worldClip.transform(this.__worldTransform.clone().invert());
				this.__style.setProperty("clip","rect(" + clip.y + "px, " + clip.get_right() + "px, " + clip.get_bottom() + "px, " + clip.x + "px)",null);
			}
		}
	}
	,__broadcast: function(event,notifyChilden) {
		if(this.__eventMap != null && this.hasEventListener(event.type)) {
			var result = openfl.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
			if(event.__isCancelled) return true;
			return result;
		}
		return false;
	}
	,__getBounds: function(rect,matrix) {
	}
	,__getInteractive: function(stack) {
	}
	,__getLocalBounds: function(rect) {
		this.__getTransform();
		this.__getBounds(rect,new openfl.geom.Matrix());
	}
	,__getTransform: function() {
		if(openfl.display.DisplayObject.__worldTransformDirty > 0) {
			var list = [];
			var current = this;
			var transformDirty = this.__transformDirty;
			while(current.parent != null) {
				list.push(current);
				current = current.parent;
				if(current.__transformDirty) transformDirty = true;
			}
			if(transformDirty) {
				var i = list.length;
				while(--i >= 0) list[i].__update(true,false);
			}
		}
		return this.__worldTransform;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		return false;
	}
	,__initializeElement: function(element,renderSession) {
		this.__style = element.style;
		this.__style.setProperty("position","absolute",null);
		this.__style.setProperty("top","0",null);
		this.__style.setProperty("left","0",null);
		this.__style.setProperty(renderSession.transformOriginProperty,"0 0 0",null);
		renderSession.element.appendChild(element);
		this.__worldAlphaChanged = true;
		this.__worldClipChanged = true;
		this.__worldTransformChanged = true;
		this.__worldVisibleChanged = true;
		this.__worldZ = -1;
	}
	,__renderCanvas: function(renderSession) {
	}
	,__renderDOM: function(renderSession) {
	}
	,__renderGL: function(renderSession) {
	}
	,__renderMask: function(renderSession) {
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
		}
	}
	,__setRenderDirty: function() {
		if(!this.__renderDirty) {
			this.__renderDirty = true;
			openfl.display.DisplayObject.__worldRenderDirty++;
		}
	}
	,__setTransformDirty: function() {
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			openfl.display.DisplayObject.__worldTransformDirty++;
		}
	}
	,__update: function(transformOnly,updateChildren) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(this.get_rotation() != this.__rotationCache) {
			this.__rotationCache = this.get_rotation();
			var radians = this.get_rotation() * (Math.PI / 180);
			this.__rotationSine = Math.sin(radians);
			this.__rotationCosine = Math.cos(radians);
		}
		if(this.parent != null) {
			var parentTransform = this.parent.__worldTransform;
			var a00 = this.__rotationCosine * this.get_scaleX();
			var a01 = this.__rotationSine * this.get_scaleX();
			var a10 = -this.__rotationSine * this.get_scaleY();
			var a11 = this.__rotationCosine * this.get_scaleY();
			var b00 = parentTransform.a;
			var b01 = parentTransform.b;
			var b10 = parentTransform.c;
			var b11 = parentTransform.d;
			this.__worldTransform.a = a00 * b00 + a01 * b10;
			this.__worldTransform.b = a00 * b01 + a01 * b11;
			this.__worldTransform.c = a10 * b00 + a11 * b10;
			this.__worldTransform.d = a10 * b01 + a11 * b11;
			if(this.get_scrollRect() == null) {
				this.__worldTransform.tx = this.get_x() * b00 + this.get_y() * b10 + parentTransform.tx;
				this.__worldTransform.ty = this.get_x() * b01 + this.get_y() * b11 + parentTransform.ty;
			} else {
				this.__worldTransform.tx = (this.get_x() - this.get_scrollRect().x) * b00 + (this.get_y() - this.get_scrollRect().y) * b10 + parentTransform.tx;
				this.__worldTransform.ty = (this.get_x() - this.get_scrollRect().x) * b01 + (this.get_y() - this.get_scrollRect().y) * b11 + parentTransform.ty;
			}
		} else {
			this.__worldTransform.a = this.__rotationCosine * this.get_scaleX();
			this.__worldTransform.c = -this.__rotationSine * this.get_scaleY();
			this.__worldTransform.b = this.__rotationSine * this.get_scaleX();
			this.__worldTransform.d = this.__rotationCosine * this.get_scaleY();
			if(this.get_scrollRect() == null) {
				this.__worldTransform.tx = this.get_x();
				this.__worldTransform.ty = this.get_y();
			} else {
				this.__worldTransform.tx = this.get_y() - this.get_scrollRect().x;
				this.__worldTransform.ty = this.get_y() - this.get_scrollRect().y;
			}
		}
		if(updateChildren && this.__transformDirty) {
			this.__transformDirty = false;
			openfl.display.DisplayObject.__worldTransformDirty--;
		}
		if(!transformOnly) {
			if(this.parent != null) this.__worldAlpha = this.get_alpha() * this.parent.__worldAlpha; else this.__worldAlpha = this.get_alpha();
			if(updateChildren && this.__renderDirty) this.__renderDirty = false;
		}
	}
	,__updateChildren: function(transformOnly) {
		this.__renderable = this.get_visible() && this.get_scaleX() != 0 && this.get_scaleY() != 0 && !this.__isMask;
		if(!this.__renderable && !this.__isMask) return;
		this.__worldAlpha = this.get_alpha();
		if(this.__transformDirty) {
			this.__transformDirty = false;
			openfl.display.DisplayObject.__worldTransformDirty--;
		}
	}
	,get_alpha: function() {
		return this.__alpha;
	}
	,set_alpha: function(value) {
		if(value != this.__alpha) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__alpha = value;
	}
	,get_filters: function() {
		if(this.__filters == null) return new Array(); else return this.__filters.slice();
	}
	,set_filters: function(value) {
		return value;
	}
	,get_height: function() {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		return bounds.height * this.get_scaleY();
	}
	,set_height: function(value) {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		if(value != bounds.height) this.set_scaleY(value / bounds.height); else this.set_scaleY(1);
		return value;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_mask: function(value) {
		if(value != this.__mask) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		if(this.__mask != null) this.__mask.__isMask = false;
		if(value != null) value.__isMask = true;
		return this.__mask = value;
	}
	,get_mouseX: function() {
		if(this.stage != null) return this.globalToLocal(new openfl.geom.Point(this.stage.__mouseX,0)).x;
		return 0;
	}
	,get_mouseY: function() {
		if(this.stage != null) return this.globalToLocal(new openfl.geom.Point(0,this.stage.__mouseY)).y;
		return 0;
	}
	,get_name: function() {
		return this.__name;
	}
	,set_name: function(value) {
		return this.__name = value;
	}
	,get_root: function() {
		if(this.stage != null) return openfl.Lib.current;
		return null;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_rotation: function(value) {
		if(value != this.__rotation) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__rotation = value;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_scaleX: function(value) {
		if(value != this.__scaleX) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scaleX = value;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleY: function(value) {
		if(this.__scaleY != value) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scaleY = value;
	}
	,get_scrollRect: function() {
		return this.__scrollRect;
	}
	,set_scrollRect: function(value) {
		if(value != this.__scrollRect) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__scrollRect = value;
	}
	,get_transform: function() {
		if(this.__transform == null) this.__transform = new openfl.geom.Transform(this);
		return this.__transform;
	}
	,set_transform: function(value) {
		if(value == null) throw new openfl.errors.TypeError("Parameter transform must be non-null.");
		if(this.__transform == null) this.__transform = new openfl.geom.Transform(this);
		if(!this.__transformDirty) {
			this.__transformDirty = true;
			openfl.display.DisplayObject.__worldTransformDirty++;
		}
		this.__transform.set_matrix(value.get_matrix().clone());
		this.__transform.colorTransform = new openfl.geom.ColorTransform(value.colorTransform.redMultiplier,value.colorTransform.greenMultiplier,value.colorTransform.blueMultiplier,value.colorTransform.alphaMultiplier,value.colorTransform.redOffset,value.colorTransform.greenOffset,value.colorTransform.blueOffset,value.colorTransform.alphaOffset);
		return this.__transform;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_visible: function(value) {
		if(value != this.__visible) {
			if(!this.__renderDirty) {
				this.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
		}
		return this.__visible = value;
	}
	,get_width: function() {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		return bounds.width * this.get_scaleX();
	}
	,set_width: function(value) {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		if(value != bounds.width) this.set_scaleX(value / bounds.width); else this.set_scaleX(1);
		return value;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_x: function(value) {
		if(value != this.__x) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__x = value;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_y: function(value) {
		if(value != this.__y) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
		}
		return this.__y = value;
	}
	,__class__: openfl.display.DisplayObject
	,__properties__: {set_y:"set_y",get_y:"get_y",set_x:"set_x",get_x:"get_x",set_width:"set_width",get_width:"get_width",set_visible:"set_visible",get_visible:"get_visible",set_transform:"set_transform",get_transform:"get_transform",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_rotation:"set_rotation",get_rotation:"get_rotation",get_root:"get_root",set_name:"set_name",get_name:"get_name",get_mouseY:"get_mouseY",get_mouseX:"get_mouseX",set_mask:"set_mask",get_mask:"get_mask",set_height:"set_height",get_height:"get_height",set_filters:"set_filters",get_filters:"get_filters",set_alpha:"set_alpha",get_alpha:"get_alpha"}
});
openfl.display.InteractiveObject = function() {
	openfl.display.DisplayObject.call(this);
	this.doubleClickEnabled = false;
	this.mouseEnabled = true;
	this.needsSoftKeyboard = false;
	this.tabEnabled = true;
	this.tabIndex = -1;
};
$hxClasses["openfl.display.InteractiveObject"] = openfl.display.InteractiveObject;
openfl.display.InteractiveObject.__name__ = ["openfl","display","InteractiveObject"];
openfl.display.InteractiveObject.__super__ = openfl.display.DisplayObject;
openfl.display.InteractiveObject.prototype = $extend(openfl.display.DisplayObject.prototype,{
	requestSoftKeyboard: function() {
		openfl.Lib.notImplemented("InteractiveObject.requestSoftKeyboard");
		return false;
	}
	,__getInteractive: function(stack) {
		stack.push(this);
		if(this.parent != null) this.parent.__getInteractive(stack);
	}
	,__class__: openfl.display.InteractiveObject
});
openfl.display.DisplayObjectContainer = function() {
	openfl.display.InteractiveObject.call(this);
	this.mouseChildren = true;
	this.__children = new Array();
	this.__removedChildren = new Array();
};
$hxClasses["openfl.display.DisplayObjectContainer"] = openfl.display.DisplayObjectContainer;
openfl.display.DisplayObjectContainer.__name__ = ["openfl","display","DisplayObjectContainer"];
openfl.display.DisplayObjectContainer.__super__ = openfl.display.InteractiveObject;
openfl.display.DisplayObjectContainer.prototype = $extend(openfl.display.InteractiveObject.prototype,{
	addChild: function(child) {
		if(child != null) {
			if(child.parent != null) child.parent.removeChild(child);
			this.__children.push(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED,true));
		}
		return child;
	}
	,addChildAt: function(child,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		if(child.parent == this) HxOverrides.remove(this.__children,child); else {
			if(child.parent != null) child.parent.removeChild(child);
			child.parent = this;
			if(this.stage != null) child.__setStageReference(this.stage);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED,true));
		}
		this.__children.splice(index,0,child);
		return child;
	}
	,areInaccessibleObjectsUnderPoint: function(point) {
		return false;
	}
	,contains: function(child) {
		return HxOverrides.indexOf(this.__children,child,0) > -1;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		return null;
	}
	,getChildByName: function(name) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.get_name() == name) return child;
		}
		return null;
	}
	,getChildIndex: function(child) {
		var _g1 = 0;
		var _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child) return i;
		}
		return -1;
	}
	,getObjectsUnderPoint: function(point) {
		point = this.localToGlobal(point);
		var stack = new Array();
		this.__hitTest(point.x,point.y,false,stack,false);
		stack.shift();
		return stack;
	}
	,removeChild: function(child) {
		if(child != null && child.parent == this) {
			if(this.stage != null) child.__setStageReference(null);
			child.parent = null;
			HxOverrides.remove(this.__children,child);
			this.__removedChildren.push(child);
			if(!child.__transformDirty) {
				child.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			if(!child.__renderDirty) {
				child.__renderDirty = true;
				openfl.display.DisplayObject.__worldRenderDirty++;
			}
			child.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED,true));
		}
		return child;
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.removeChild(this.__children[index]);
		return null;
	}
	,removeChildren: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 2147483647;
		if(beginIndex == null) beginIndex = 0;
		if(endIndex == 2147483647) {
			endIndex = this.__children.length - 1;
			if(endIndex < 0) return;
		}
		if(beginIndex > this.__children.length - 1) return; else if(endIndex < beginIndex || beginIndex < 0 || endIndex > this.__children.length) throw new openfl.errors.RangeError("The supplied index is out of bounds.");
		var numRemovals = endIndex - beginIndex;
		while(numRemovals >= 0) {
			this.removeChildAt(beginIndex);
			numRemovals--;
		}
	}
	,setChildIndex: function(child,index) {
		if(index >= 0 && index <= this.__children.length && child.parent == this) {
			HxOverrides.remove(this.__children,child);
			this.__children.splice(index,0,child);
		}
	}
	,swapChildren: function(child1,child2) {
		if(child1.parent == this && child2.parent == this) {
			var index1 = HxOverrides.indexOf(this.__children,child1,0);
			var index2 = HxOverrides.indexOf(this.__children,child2,0);
			this.__children[index1] = child2;
			this.__children[index2] = child1;
		}
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.__children[child1];
		this.__children[child1] = this.__children[child2];
		this.__children[child2] = swap;
		swap = null;
	}
	,__broadcast: function(event,notifyChilden) {
		if(event.target == null) event.target = this;
		if(notifyChilden) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__broadcast(event,true);
				if(event.__isCancelled) return true;
			}
		}
		return openfl.display.InteractiveObject.prototype.__broadcast.call(this,event,notifyChilden);
	}
	,__getBounds: function(rect,matrix) {
		if(this.__children.length == 0) return;
		var matrixCache = null;
		if(matrix != null) {
			matrixCache = this.__worldTransform;
			this.__worldTransform = matrix;
			this.__updateChildren(true);
		}
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(!child.__renderable) continue;
			child.__getBounds(rect,null);
		}
		if(matrix != null) {
			this.__worldTransform = matrixCache;
			this.__updateChildren(true);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var i = this.__children.length;
		if(interactiveOnly && (stack == null || !this.mouseChildren)) {
			while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,null,interactiveOnly)) {
				if(stack != null) stack.push(this);
				return true;
			}
		} else if(stack != null) {
			var length = stack.length;
			while(--i >= 0) if(this.__children[i].__hitTest(x,y,shapeFlag,stack,interactiveOnly)) {
				stack.splice(length,0,this);
				return true;
			}
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.get_scrollRect() != null) renderSession.maskManager.pushRect(this.get_scrollRect(),this.__worldTransform);
		if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderCanvas(renderSession);
		}
		this.__removedChildren = [];
		if(this.__mask != null) renderSession.maskManager.popMask();
		if(this.get_scrollRect() != null) renderSession.maskManager.popMask();
	}
	,__renderDOM: function(renderSession) {
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderDOM(renderSession);
		}
		var _g2 = 0;
		var _g11 = this.__removedChildren;
		while(_g2 < _g11.length) {
			var orphan = _g11[_g2];
			++_g2;
			if(orphan.stage == null) orphan.__renderDOM(renderSession);
		}
		this.__removedChildren = [];
	}
	,__renderGL: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__renderGL(renderSession);
		}
		this.__removedChildren = [];
	}
	,__renderMask: function(renderSession) {
		var bounds = new openfl.geom.Rectangle();
		this.__getTransform();
		this.__getBounds(bounds,new openfl.geom.Matrix());
		renderSession.context.rect(0,0,bounds.width,bounds.height);
	}
	,__setStageReference: function(stage) {
		if(this.stage != stage) {
			if(this.stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.REMOVED_FROM_STAGE,false,false));
			this.stage = stage;
			if(stage != null) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__setStageReference(stage);
			}
		}
	}
	,__update: function(transformOnly,updateChildren) {
		openfl.display.InteractiveObject.prototype.__update.call(this,transformOnly,updateChildren);
		if(!this.__renderable) return;
		if(updateChildren) {
			var _g = 0;
			var _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__update(transformOnly,true);
			}
		}
	}
	,__updateChildren: function(transformOnly) {
		openfl.display.InteractiveObject.prototype.__updateChildren.call(this,transformOnly);
		var _g = 0;
		var _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__update(transformOnly,true);
		}
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,__class__: openfl.display.DisplayObjectContainer
	,__properties__: $extend(openfl.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
openfl.display.Sprite = function() {
	openfl.display.DisplayObjectContainer.call(this);
	this.buttonMode = false;
	this.useHandCursor = true;
};
$hxClasses["openfl.display.Sprite"] = openfl.display.Sprite;
openfl.display.Sprite.__name__ = ["openfl","display","Sprite"];
openfl.display.Sprite.__super__ = openfl.display.DisplayObjectContainer;
openfl.display.Sprite.prototype = $extend(openfl.display.DisplayObjectContainer.prototype,{
	startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.stage != null) this.stage.__startDrag(this,lockCenter,bounds);
	}
	,stopDrag: function() {
		if(this.stage != null) this.stage.__stopDrag(this);
	}
	,__getBounds: function(rect,matrix) {
		openfl.display.DisplayObjectContainer.prototype.__getBounds.call(this,rect,matrix);
		if(this.__graphics != null) this.__graphics.__getBounds(rect,matrix != null?matrix:this.__worldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var length = 0;
		if(stack != null) length = stack.length;
		if(openfl.display.DisplayObjectContainer.prototype.__hitTest.call(this,x,y,shapeFlag,stack,interactiveOnly)) return true; else if(this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(stack != null) stack.splice(length,0,this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				if(this.get_scrollRect() == null) context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y); else context.drawImage(this.__graphics.__canvas,this.get_scrollRect().x - this.__graphics.__bounds.x,this.get_scrollRect().y - this.__graphics.__bounds.y,this.get_scrollRect().width,this.get_scrollRect().height,this.__graphics.__bounds.x + this.get_scrollRect().x,this.__graphics.__bounds.y + this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height);
				if(this.__mask != null) renderSession.maskManager.popMask();
			}
		}
		openfl.display.DisplayObjectContainer.prototype.__renderCanvas.call(this,renderSession);
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.__graphics != null) {
			if(this.__graphics.__dirty || this.__worldAlphaChanged || this.__canvas == null && this.__graphics.__canvas != null) {
				this.__graphics.__render();
				if(this.__graphics.__canvas != null) {
					if(this.__canvas == null) {
						this.__canvas = window.document.createElement("canvas");
						this.__canvasContext = this.__canvas.getContext("2d");
						this.__initializeElement(this.__canvas,renderSession);
					}
					this.__canvas.width = this.__graphics.__canvas.width;
					this.__canvas.height = this.__graphics.__canvas.height;
					this.__canvasContext.globalAlpha = this.__worldAlpha;
					this.__canvasContext.drawImage(this.__graphics.__canvas,0,0);
				} else if(this.__canvas != null) {
					renderSession.element.removeChild(this.__canvas);
					this.__canvas = null;
					this.__style = null;
				}
			}
			if(this.__canvas != null) {
				if(this.__worldTransformChanged) {
					var transform = new openfl.geom.Matrix();
					transform.translate(this.__graphics.__bounds.x,this.__graphics.__bounds.y);
					transform = transform.mult(this.__worldTransform);
					this.__style.setProperty(renderSession.transformProperty,renderSession.roundPixels?"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + (transform.tx | 0) + ", " + (transform.ty | 0) + ", 0, 1)":"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)",null);
				}
				this.__applyStyle(renderSession,false,false,true);
			}
		} else if(this.__canvas != null) {
			renderSession.element.removeChild(this.__canvas);
			this.__canvas = null;
			this.__style = null;
		}
		openfl.display.DisplayObjectContainer.prototype.__renderDOM.call(this,renderSession);
	}
	,__renderMask: function(renderSession) {
		if(this.__graphics != null) this.__graphics.__renderMask(renderSession); else openfl.display.DisplayObjectContainer.prototype.__renderMask.call(this,renderSession);
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new openfl.display.Graphics();
		return this.__graphics;
	}
	,__class__: openfl.display.Sprite
	,__properties__: $extend(openfl.display.DisplayObjectContainer.prototype.__properties__,{get_graphics:"get_graphics"})
});
var com = {};
com.ie = {};
com.ie.blitz = {};
com.ie.blitz.blitzone = {};
com.ie.blitz.blitzone.Main = function() {
	openfl.display.Sprite.call(this);
	this.addEventListener(openfl.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
};
$hxClasses["com.ie.blitz.blitzone.Main"] = com.ie.blitz.blitzone.Main;
com.ie.blitz.blitzone.Main.__name__ = ["com","ie","blitz","blitzone","Main"];
com.ie.blitz.blitzone.Main.main = function() {
	openfl.Lib.current.stage.align = openfl.display.StageAlign.TOP_LEFT;
	openfl.Lib.current.stage.scaleMode = openfl.display.StageScaleMode.NO_SCALE;
	openfl.Lib.current.addChild(new com.ie.blitz.blitzone.Main());
};
com.ie.blitz.blitzone.Main.__super__ = openfl.display.Sprite;
com.ie.blitz.blitzone.Main.prototype = $extend(openfl.display.Sprite.prototype,{
	resize: function(e) {
		if(!this.inited) this.init(); else {
		}
	}
	,init: function() {
		if(this.inited) return;
		this.inited = true;
		if(openfl.ui.Multitouch.get_supportsTouchEvents()) com.ie.blitz.blitzone.config.GameConfig.TOUCH_MODE = true; else com.ie.blitz.blitzone.config.GameConfig.TOUCH_MODE = false;
		this.prepareScaleAndPos();
		this.initializeSound();
		this.initializeWNP();
		this.initializeFont();
		com.ie.blitz.blitzone.config.GameConfig.PUZZLEDATA = new com.ie.blitz.blitzone.data.PuzzleData();
		com.ie.blitz.blitzone.config.GameConfig.NUM_PUZZLES = com.ie.blitz.blitzone.config.GameConfig.PUZZLEDATA.puzzleData.length;
		com.ie.blitz.blitzone.config.GameConfig.PLAYERDATA = new com.ie.blitz.blitzone.data.PlayerData();
		if(com.ie.blitz.blitzone.config.GameConfig.PLAYERDATA.bgmOn) com.ie.blitz.blitzone.config.GameConfig.BGM_SOUND_TRANSFORM.volume = 1; else com.ie.blitz.blitzone.config.GameConfig.BGM_SOUND_TRANSFORM.volume = 0;
		if(com.ie.blitz.blitzone.config.GameConfig.PLAYERDATA.sfxOn) com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM.volume = 1; else com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM.volume = 0;
		this.events = new com.philipmabanta.utils.TaggedEventRegistry();
		this.gamePanel = new com.ie.blitz.blitzone.panels.GamePanel();
		this.gamePanel.set_y(0);
		this.setToScaleAndPos(this.gamePanel);
		this.instScreen = new com.ie.blitz.blitzone.screens.InstructionScreen();
		this.setToScaleAndPos(this.instScreen);
		this.events.register("inst",this.instScreen,openfl.events.Event.COMPLETE,$bind(this,this.instScreenHandler));
		this.targetLevel = 0;
		this.addChild(this.instScreen);
		this.instScreen.prepInteraction();
	}
	,instScreenHandler: function(e) {
		openfl.Lib.trace("instScreenHandler called");
		this.displayNewPuzzle(this.targetLevel);
	}
	,puzzleHandler: function(e) {
		var _g = e.type;
		switch(_g) {
		case "puzzleCompleted":
			if(com.ie.blitz.blitzone.config.GameConfig.PLAYERDATA.highScore < com.ie.blitz.blitzone.config.GameConfig.CURRENT_SCORE) {
				com.ie.blitz.blitzone.config.GameConfig.PLAYERDATA.highScore = com.ie.blitz.blitzone.config.GameConfig.CURRENT_SCORE;
				this.showNewBT = true;
			} else this.showNewBT = false;
			if(this.currentPuzzleIndex < 9) this.gamePanel.showWin(e.data / 60 | 0); else this.gamePanel.showEnd(com.ie.blitz.blitzone.config.GameConfig.CURRENT_SCORE | 0,this.showNewBT);
			this.addChild(this.puzzleGame);
			this.addChild(this.gamePanel);
			this.events.register("gamePanel",this.gamePanel,openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.gamePanelHandler));
			this.events.register("gamePanel",this.gamePanel,"touchEnd",$bind(this,this.gamePanelHandler));
			break;
		case "puzzleFailed":
			this.gamePanel.showLose(com.ie.blitz.blitzone.config.GameConfig.CURRENT_SCORE | 0);
			this.addChild(this.puzzleGame);
			this.addChild(this.gamePanel);
			this.events.register("gamePanel",this.gamePanel,openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.gamePanelHandler2));
			this.events.register("gamePanel",this.gamePanel,"touchEnd",$bind(this,this.gamePanelHandler2));
			break;
		}
	}
	,gamePanelHandler: function(e) {
		this.gamePanel.hide();
		this.events.unregister("gamePanel");
		this.events.unregister("puzzleGame");
		this.removeChild(this.puzzleGame);
		this.puzzleGame.destroy();
		this.puzzleGame = null;
		com.ie.blitz.blitzone.config.GameConfig.CURRENT_GAME = null;
		com.ie.blitz.blitzone.config.GameConfig.PLAYERDATA.saveData();
		++this.currentPuzzleIndex;
		if(this.currentPuzzleIndex < 10) this.displayNewPuzzle(this.currentPuzzleIndex); else {
			this.addChild(this.instScreen);
			this.currentPuzzleIndex = 0;
			com.ie.blitz.blitzone.config.GameConfig.CURRENT_SCORE = 0;
			this.instScreen.prepInteraction();
		}
	}
	,gamePanelHandler2: function(e) {
		this.gamePanel.hide();
		this.events.unregister("gamePanel");
		this.events.unregister("puzzleGame");
		this.removeChild(this.puzzleGame);
		this.puzzleGame.destroy();
		this.puzzleGame = null;
		com.ie.blitz.blitzone.config.GameConfig.CURRENT_GAME = null;
		com.ie.blitz.blitzone.config.GameConfig.PLAYERDATA.saveData();
		com.ie.blitz.blitzone.config.GameConfig.CURRENT_SCORE = 0;
		this.addChild(this.instScreen);
		this.currentPuzzleIndex = 0;
		this.instScreen.prepInteraction();
	}
	,swapBGM: function(bgmPath) {
		if(this._curBGM == bgmPath) return;
		this._curBGM = bgmPath;
		var gameSound = openfl.Assets.getSound(com.ie.blitz.blitzone.config.GameConfig.GAMEBGMS.get(bgmPath));
		if(this._soundChannel != null) this._soundChannel.stop();
		this._soundChannel = gameSound.play(210,9999999,com.ie.blitz.blitzone.config.GameConfig.BGM_SOUND_TRANSFORM);
		com.ie.blitz.blitzone.config.GameConfig.BGM_CHANNEL = this._soundChannel;
	}
	,initializeSound: function() {
		if(com.ie.blitz.blitzone.config.GameConfig.BGM_SOUND_TRANSFORM == null) {
			com.ie.blitz.blitzone.config.GameConfig.GAMEBGMS = new haxe.ds.StringMap();
			com.ie.blitz.blitzone.config.GameConfig.BUTTON_SOUND = openfl.Assets.getSound("audio/sfx/button.mp3");
			com.ie.blitz.blitzone.config.GameConfig.CLICK_SOUND = openfl.Assets.getSound("audio/sfx/tileSwap.mp3");
			com.ie.blitz.blitzone.config.GameConfig.CANCEL_SOUND = openfl.Assets.getSound("audio/sfx/tileSwap.mp3");
			com.ie.blitz.blitzone.config.GameConfig.BUTTON_SOUND.play(0,0,new openfl.media.SoundTransform(0,0));
			com.ie.blitz.blitzone.config.GameConfig.CLICK_SOUND.play(0,0,new openfl.media.SoundTransform(0,0));
			com.ie.blitz.blitzone.config.GameConfig.CANCEL_SOUND.play(0,0,new openfl.media.SoundTransform(0,0));
			com.ie.blitz.blitzone.config.GameConfig.BGM_SOUND_TRANSFORM = new openfl.media.SoundTransform(1,0);
			com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM = new openfl.media.SoundTransform(1,0);
		}
	}
	,added: function(e) {
		this.removeEventListener(openfl.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
		this.stage.addEventListener(openfl.events.Event.RESIZE,$bind(this,this.resize));
		this.init();
	}
	,setToScaleAndPos: function(displayObject) {
	}
	,prepareScaleAndPos: function() {
	}
	,displayNewPuzzle: function(index) {
		if(index > com.ie.blitz.blitzone.config.GameConfig.NUM_PUZZLES - 1) index = 0;
		this.puzzleGame = new com.ie.blitz.blitzone.PuzzleGame();
		this.events.register("puzzleGame",this.puzzleGame,"puzzleCompleted",$bind(this,this.puzzleHandler));
		this.events.register("puzzleGame",this.puzzleGame,"puzzleFailed",$bind(this,this.puzzleHandler));
		this.puzzleGame.setGame(com.ie.blitz.blitzone.config.GameConfig.PUZZLEDATA.puzzleData[index]);
		this.setToScaleAndPos(this.puzzleGame);
		this.addChildAt(this.puzzleGame,0);
		this.puzzleGame.begin();
		this.currentPuzzleIndex = index;
		com.ie.blitz.blitzone.config.GameConfig.CURRENT_GAME = this.puzzleGame;
	}
	,initializeWNP: function() {
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("pause",$bind(this,this.wnpActionsHandler));
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("unpause",$bind(this,this.wnpActionsHandler));
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("mute",$bind(this,this.wnpActionsHandler));
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("unmute",$bind(this,this.wnpActionsHandler));
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("reload",$bind(this,this.wnpActionsHandler));
	}
	,wnpActionsHandler: function(e) {
		var _g = e.type;
		switch(_g) {
		case "pause":
			if(this.puzzleGame != null) this.puzzleGame.isPaused = true;
			break;
		case "unpause":
			if(this.puzzleGame != null) this.puzzleGame.isPaused = false;
			break;
		case "mute":
			com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM.volume = 0;
			break;
		case "unmute":
			com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM.volume = 1;
			break;
		case "reload":
			this.events.unregister("gamePanel");
			this.events.unregister("puzzleGame");
			if(this.contains(this.puzzleGame)) this.removeChild(this.puzzleGame);
			if(this.contains(this.gamePanel)) this.removeChild(this.gamePanel);
			if(this.puzzleGame != null) this.puzzleGame.destroy();
			this.puzzleGame = null;
			com.ie.blitz.blitzone.config.GameConfig.CURRENT_GAME = null;
			com.ie.blitz.blitzone.config.GameConfig.PLAYERDATA.saveData();
			com.ie.blitz.blitzone.config.GameConfig.CURRENT_SCORE = 0;
			this.currentPuzzleIndex = 0;
			this.displayNewPuzzle(this.currentPuzzleIndex);
			break;
		}
	}
	,initializeFont: function() {
		com.ie.blitz.blitzone.config.GameConfig.FONT = openfl.Assets.getFont("fonts/Fffharmo.ttf");
		com.ie.blitz.blitzone.config.GameConfig.FONT2 = openfl.Assets.getFont("fonts/bradybu0.ttf");
		var cacheTF = com.jamdevera.utils.DisplayUtils.createTextField(com.ie.blitz.blitzone.config.GameConfig.FONT,2,0,"test");
		var cacheTF2 = com.jamdevera.utils.DisplayUtils.createTextField(com.ie.blitz.blitzone.config.GameConfig.FONT2,2,0,"test");
		cacheTF.set_y(800);
		cacheTF2.set_y(800);
		this.addChild(cacheTF);
		this.addChild(cacheTF2);
	}
	,__class__: com.ie.blitz.blitzone.Main
});
var DocumentClass = function() {
	this.stage = openfl.Lib.current.stage;
	com.ie.blitz.blitzone.Main.call(this);
	this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = com.ie.blitz.blitzone.Main;
DocumentClass.prototype = $extend(com.ie.blitz.blitzone.Main.prototype,{
	__class__: DocumentClass
});
openfl.AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary;
openfl.AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl.AssetLibrary.prototype = {
	exists: function(id,type) {
		return false;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getMovieClip: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getPath: function(id) {
		return null;
	}
	,getSound: function(id) {
		return null;
	}
	,getText: function(id) {
		var bytes = this.getBytes(id);
		if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,list: function(type) {
		return null;
	}
	,load: function(handler) {
		handler(this);
	}
	,loadBitmapData: function(id,handler) {
		handler(this.getBitmapData(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadMovieClip: function(id,handler) {
		handler(this.getMovieClip(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadText: function(id,handler) {
		var callback = function(bytes) {
			if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
		};
		this.loadBytes(id,callback);
	}
	,__class__: openfl.AssetLibrary
};
var DefaultAssetLibrary = function() {
	this.type = new haxe.ds.StringMap();
	this.path = new haxe.ds.StringMap();
	this.className = new haxe.ds.StringMap();
	openfl.AssetLibrary.call(this);
	var id;
	id = "img/preloader/loading-screenbg.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/preloader/loadingbar.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/preloader/loadingtext.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/puzzles/unclegrandpa_puzzle1.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/puzzles/unclegrandpa_puzzle10.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/puzzles/unclegrandpa_puzzle2.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/puzzles/unclegrandpa_puzzle3.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/puzzles/unclegrandpa_puzzle4.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/puzzles/unclegrandpa_puzzle5.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/puzzles/unclegrandpa_puzzle6.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/puzzles/unclegrandpa_puzzle7.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/puzzles/unclegrandpa_puzzle8.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/puzzles/unclegrandpa_puzzle9.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/Fail1.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/Fail2.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/Fail3.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/go.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/how-to-play.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ingame-bg.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ingame_screen.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ingame_timer1.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/popup.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/popupnewhighscore.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/popup_gameover_withscore.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/popup_loser_withscore.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/popup_winner_withscore.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/rect.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/redRect.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/splashscreen_bg.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/splashscreen_howtoplay_button.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/splashscreen_howtoplay_button_clicked.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/splashscreen_playbutton_clicked.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/splashscreen_playbutton_normal.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/Success1.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/Success2.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/Success3.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "audio/sfx/button.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/sfx/button.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/button.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/cancel.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/sfx/cancel.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/cancel.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/distress.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/sfx/distress.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/distress.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/fail.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/sfx/fail.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/fail.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/tap.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/sfx/tap.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/tap.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/tileSwap.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/sfx/tileSwap.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/tileSwap.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/win.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "audio/sfx/win.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "audio/sfx/win.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "fonts/bradybu0.eot";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.BINARY);
	id = "fonts/bradybu0.svg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "fonts/bradybu0.ttf";
	this.className.set(id,__ASSET__fonts_bradybu0_ttf);
	this.type.set(id,openfl.AssetType.FONT);
	id = "fonts/bradybu0.woff";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.BINARY);
	id = "fonts/Fffharmo.eot";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "fonts/Fffharmo.ttf";
	this.className.set(id,__ASSET__fonts_fffharmo_ttf);
	this.type.set(id,openfl.AssetType.FONT);
	id = "xml/puzzle_config.bak";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "xml/puzzle_config.xml";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	exists: function(id,type) {
		var assetType = this.type.get(id);
		if(assetType != null) {
			if(assetType == type || (type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return true;
			if(type == openfl.AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,getBitmapData: function(id) {
		return openfl.display.BitmapData.fromImage((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = ApplicationMain.images.get(key);
			return $r;
		}(this)));
	}
	,getBytes: function(id) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = ApplicationMain.urlLoaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") {
			bytes = new openfl.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,openfl.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(this.className.get(id),[]) , openfl.text.Font);
	}
	,getMusic: function(id) {
		var sound = new openfl.media.Sound();
		sound.__buffer = true;
		sound.load(new openfl.net.URLRequest(this.path.get(id)));
		return sound;
	}
	,getPath: function(id) {
		return this.path.get(id);
	}
	,getSound: function(id) {
		return new openfl.media.Sound(new openfl.net.URLRequest(this.path.get(id)));
	}
	,getText: function(id) {
		var bytes = null;
		var data = ((function($this) {
			var $r;
			var key = $this.path.get(id);
			$r = ApplicationMain.urlLoaders.get(key);
			return $r;
		}(this))).data;
		if(typeof(data) == "string") return data; else if(js.Boot.__instanceof(data,openfl.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes.readUTFBytes(bytes.length);
		} else return null;
	}
	,isLocal: function(id,type) {
		return true;
	}
	,list: function(type) {
		var items = [];
		var $it0 = this.type.keys();
		while( $it0.hasNext() ) {
			var id = $it0.next();
			if(type == null || this.exists(id,type)) items.push(id);
		}
		return items;
	}
	,loadBitmapData: function(id,handler) {
		if(this.path.exists(id)) {
			var loader = new openfl.display.Loader();
			loader.contentLoaderInfo.addEventListener(openfl.events.Event.COMPLETE,function(event) {
				handler((js.Boot.__cast(event.currentTarget.content , openfl.display.Bitmap)).bitmapData);
			});
			loader.load(new openfl.net.URLRequest(this.path.get(id)));
		} else handler(this.getBitmapData(id));
	}
	,loadBytes: function(id,handler) {
		if(this.path.exists(id)) {
			var loader = new openfl.net.URLLoader();
			loader.addEventListener(openfl.events.Event.COMPLETE,function(event) {
				var bytes = new openfl.utils.ByteArray();
				bytes.writeUTFBytes(event.currentTarget.data);
				bytes.position = 0;
				handler(bytes);
			});
			loader.load(new openfl.net.URLRequest(this.path.get(id)));
		} else handler(this.getBytes(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadText: function(id,handler) {
		if(this.path.exists(id)) {
			var loader = new openfl.net.URLLoader();
			loader.addEventListener(openfl.events.Event.COMPLETE,function(event) {
				handler(event.currentTarget.data);
			});
			loader.load(new openfl.net.URLRequest(this.path.get(id)));
		} else handler(this.getText(id));
	}
	,__class__: DefaultAssetLibrary
});
openfl.text = {};
openfl.text.Font = function() {
};
$hxClasses["openfl.text.Font"] = openfl.text.Font;
openfl.text.Font.__name__ = ["openfl","text","Font"];
openfl.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return [];
};
openfl.text.Font.registerFont = function(font) {
};
openfl.text.Font.prototype = {
	__class__: openfl.text.Font
};
var __ASSET__fonts_bradybu0_ttf = function() {
	openfl.text.Font.call(this);
	this.fontName = "fonts/bradybu0.ttf";
};
$hxClasses["__ASSET__fonts_bradybu0_ttf"] = __ASSET__fonts_bradybu0_ttf;
__ASSET__fonts_bradybu0_ttf.__name__ = ["__ASSET__fonts_bradybu0_ttf"];
__ASSET__fonts_bradybu0_ttf.__super__ = openfl.text.Font;
__ASSET__fonts_bradybu0_ttf.prototype = $extend(openfl.text.Font.prototype,{
	__class__: __ASSET__fonts_bradybu0_ttf
});
var __ASSET__fonts_fffharmo_ttf = function() {
	openfl.text.Font.call(this);
	this.fontName = "fonts/Fffharmo.ttf";
};
$hxClasses["__ASSET__fonts_fffharmo_ttf"] = __ASSET__fonts_fffharmo_ttf;
__ASSET__fonts_fffharmo_ttf.__name__ = ["__ASSET__fonts_fffharmo_ttf"];
__ASSET__fonts_fffharmo_ttf.__super__ = openfl.text.Font;
__ASSET__fonts_fffharmo_ttf.prototype = $extend(openfl.text.Font.prototype,{
	__class__: __ASSET__fonts_fffharmo_ttf
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
};
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.remove = function(a,obj) {
	var i = HxOverrides.indexOf(a,obj,0);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,__class__: List
};
var IMap = function() { };
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
IMap.prototype = {
	__class__: IMap
};
Math.__name__ = ["Math"];
var NMEPreloader = function() {
	openfl.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new openfl.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new openfl.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = openfl.display.Sprite;
NMEPreloader.prototype = $extend(openfl.display.Sprite.prototype,{
	getBackgroundColor: function() {
		return 16777215;
	}
	,getHeight: function() {
		var height = 768;
		if(height > 0) return height; else return openfl.Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = 1280;
		if(width > 0) return width; else return openfl.Lib.current.stage.stageWidth;
	}
	,onInit: function() {
	}
	,onLoaded: function() {
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,__class__: NMEPreloader
});
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
};
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.setField = function(o,field,value) {
	o[field] = value;
};
Reflect.getProperty = function(o,field) {
	var tmp;
	if(o == null) return null; else if(o.__properties__ && (tmp = o.__properties__["get_" + field])) return o[tmp](); else return o[field];
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
};
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) return false;
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std["int"] = function(x) {
	return x | 0;
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,addSub: function(s,pos,len) {
		if(len == null) this.b += HxOverrides.substr(s,pos,null); else this.b += HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
};
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
};
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
StringTools.fastCodeAt = function(s,index) {
	return s.charCodeAt(index);
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
};
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	HxOverrides.remove(a,"__name__");
	HxOverrides.remove(a,"__interfaces__");
	HxOverrides.remove(a,"__properties__");
	HxOverrides.remove(a,"__super__");
	HxOverrides.remove(a,"prototype");
	return a;
};
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c;
		if((v instanceof Array) && v.__enum__ == null) c = Array; else c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var XmlType = $hxClasses["XmlType"] = { __ename__ : ["XmlType"], __constructs__ : [] };
var Xml = function() {
};
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.Element = null;
Xml.PCData = null;
Xml.CData = null;
Xml.Comment = null;
Xml.DocType = null;
Xml.ProcessingInstruction = null;
Xml.Document = null;
Xml.parse = function(str) {
	return haxe.xml.Parser.parse(str);
};
Xml.createElement = function(name) {
	var r = new Xml();
	r.nodeType = Xml.Element;
	r._children = new Array();
	r._attributes = new haxe.ds.StringMap();
	r.set_nodeName(name);
	return r;
};
Xml.createPCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.PCData;
	r.set_nodeValue(data);
	return r;
};
Xml.createCData = function(data) {
	var r = new Xml();
	r.nodeType = Xml.CData;
	r.set_nodeValue(data);
	return r;
};
Xml.createComment = function(data) {
	var r = new Xml();
	r.nodeType = Xml.Comment;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocType = function(data) {
	var r = new Xml();
	r.nodeType = Xml.DocType;
	r.set_nodeValue(data);
	return r;
};
Xml.createProcessingInstruction = function(data) {
	var r = new Xml();
	r.nodeType = Xml.ProcessingInstruction;
	r.set_nodeValue(data);
	return r;
};
Xml.createDocument = function() {
	var r = new Xml();
	r.nodeType = Xml.Document;
	r._children = new Array();
	return r;
};
Xml.prototype = {
	get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,set_nodeName: function(n) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName = n;
	}
	,set_nodeValue: function(v) {
		if(this.nodeType == Xml.Element || this.nodeType == Xml.Document) throw "bad nodeType";
		return this._nodeValue = v;
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,set: function(att,value) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		this._attributes.set(att,value);
	}
	,exists: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.exists(att);
	}
	,elementsNamed: function(name) {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				if(n.nodeType == Xml.Element && n._nodeName == name) break;
				k++;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k1 = this.cur;
			var l1 = this.x.length;
			while(k1 < l1) {
				var n1 = this.x[k1];
				k1++;
				if(n1.nodeType == Xml.Element && n1._nodeName == name) {
					this.cur = k1;
					return n1;
				}
			}
			return null;
		}};
	}
	,firstElement: function() {
		if(this._children == null) throw "bad nodetype";
		var cur = 0;
		var l = this._children.length;
		while(cur < l) {
			var n = this._children[cur];
			if(n.nodeType == Xml.Element) return n;
			cur++;
		}
		return null;
	}
	,addChild: function(x) {
		if(this._children == null) throw "bad nodetype";
		if(x._parent != null) HxOverrides.remove(x._parent._children,x);
		x._parent = this;
		this._children.push(x);
	}
	,__class__: Xml
	,__properties__: {set_nodeValue:"set_nodeValue",set_nodeName:"set_nodeName",get_nodeName:"get_nodeName"}
};
openfl.events.Event = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.type = type;
	this.bubbles = bubbles;
	this.cancelable = cancelable;
	this.eventPhase = 1;
};
$hxClasses["openfl.events.Event"] = openfl.events.Event;
openfl.events.Event.__name__ = ["openfl","events","Event"];
openfl.events.Event.prototype = {
	clone: function() {
		var event = new openfl.events.Event(this.type,this.bubbles,this.cancelable);
		event.eventPhase = this.eventPhase;
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		return event;
	}
	,isDefaultPrevented: function() {
		return this.__isCancelled || this.__isCancelledNow;
	}
	,stopImmediatePropagation: function() {
		this.__isCancelled = true;
		this.__isCancelledNow = true;
	}
	,stopPropagation: function() {
		this.__isCancelled = true;
	}
	,toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,__class__: openfl.events.Event
};
com.ie.blitz.blitzone.GameEvent = function(type,data,showNewBT,coinsReceived,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	if(coinsReceived == null) coinsReceived = 0;
	if(showNewBT == null) showNewBT = false;
	if(data == null) data = 0;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.data = data;
	this.showNewBT = showNewBT;
	this.coinsReceived = coinsReceived;
};
$hxClasses["com.ie.blitz.blitzone.GameEvent"] = com.ie.blitz.blitzone.GameEvent;
com.ie.blitz.blitzone.GameEvent.__name__ = ["com","ie","blitz","blitzone","GameEvent"];
com.ie.blitz.blitzone.GameEvent.__super__ = openfl.events.Event;
com.ie.blitz.blitzone.GameEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: com.ie.blitz.blitzone.GameEvent
});
com.ie.blitz.blitzone.PuzzleGame = function() {
	openfl.display.Sprite.call(this);
	this.events = new com.philipmabanta.utils.TaggedEventRegistry();
	this.timeRemaining = 1860;
	this.distress = openfl.Assets.getSound("audio/sfx/distress.wav");
	this.win = openfl.Assets.getSound("audio/sfx/win.wav");
	this.lose = openfl.Assets.getSound("audio/sfx/fail.wav");
	var silence = new openfl.media.SoundTransform(0,0);
	this.distress.play(0,0,silence);
	this.win.play(0,0,silence);
	this.isPaused = false;
	this.prepareDisplay();
};
$hxClasses["com.ie.blitz.blitzone.PuzzleGame"] = com.ie.blitz.blitzone.PuzzleGame;
com.ie.blitz.blitzone.PuzzleGame.__name__ = ["com","ie","blitz","blitzone","PuzzleGame"];
com.ie.blitz.blitzone.PuzzleGame.__super__ = openfl.display.Sprite;
com.ie.blitz.blitzone.PuzzleGame.prototype = $extend(openfl.display.Sprite.prototype,{
	destroy: function() {
		motion.Actuate.reset();
		com.jamdevera.utils.DisplayUtils.removeAllChildren(this);
		this.events.dispose();
		this.events = null;
		this.timerLabel = null;
		this.textLabel = null;
		this.currentGame = null;
		this.puzzle = null;
		this.currentTarget = null;
		this.hintsLabel = null;
		this.earningsLabel = null;
		this.helpLabel = null;
		this.highScore = null;
		this.highScoreValue = null;
		this.blackOverlay = null;
		this.whiteLabelText = null;
		this.goText = null;
		this.win = null;
		this.lose = null;
	}
	,begin: function() {
		this.showGame();
	}
	,setGame: function(puzzleData) {
		this.puzzle = puzzleData;
		this.timerLabel.set_text("30");
		this.timerLabel.set_textColor(16777215);
		this.whiteLabelContainer.set_y(-this.whiteLabelContainer.get_height());
		this.goText.set_y(-300);
		this.blackOverlay = new openfl.display.Bitmap(new openfl.display.BitmapData(600,600,true,-1627389952));
		this.blackOverlay.set_x(389);
		this.blackOverlay.set_y(116);
		var index = com.jamdevera.utils.ArrayUtils.indexOf(com.ie.blitz.blitzone.config.GameConfig.PUZZLEDATA.puzzleData,this.puzzle);
		this.whiteLabelText.set_wordWrap(true);
		this.whiteLabelText.set_text("Level " + (index + 1) + "\n" + this.puzzle.name);
		this.whiteLabelText.set_height(300);
		this.whiteLabelText.set_y(220);
		if(this.currentGame != null) this.removeCurrentGame();
		this.addChild(this.whiteLabelContainer);
		this.whiteLabelContainer.addChild(this.whiteLabelText);
		motion.Actuate.tween(this.whiteLabelContainer,0.4,{ y : (768 - this.whiteLabelContainer.get_height()) * 0.5}).ease(motion.easing.Quad.get_easeInOut());
		motion.Actuate.timer(1).onComplete($bind(this,this.setPuzzle));
		motion.Actuate.timer(1.5).onComplete($bind(this,this.hideOverlay));
		motion.Actuate.timer(2).onComplete($bind(this,this.showGo));
		motion.Actuate.timer(3.25).onComplete($bind(this,this.removeGo));
	}
	,setPuzzle: function() {
		motion.Actuate.tween(this.blackOverlay,0.8,{ alpha : 0});
		motion.Actuate.tween(this.whiteLabelContainer,0.4,{ y : 768}).ease(motion.easing.Quad.get_easeInOut());
	}
	,hideOverlay: function() {
		this.currentGame.readdAllPieces();
		motion.Actuate.tween(this.currentTarget,0.8,{ width : 335, height : 335, x : 825, y : 102}).ease(motion.easing.Quad.get_easeInOut());
	}
	,showGo: function() {
		this.addChild(this.goText);
		motion.Actuate.tween(this.goText,0.4,{ y : 313}).ease(motion.easing.Quad.get_easeInOut());
	}
	,removeGo: function() {
		motion.Actuate.tween(this.goText,0.4,{ y : 768}).ease(motion.easing.Quad.get_easeInOut()).onComplete($bind(this,this.startTime));
	}
	,resumeGame: function() {
		if(this.end) {
			this.dispatchEvent(new com.ie.blitz.blitzone.GameEvent("puzzleFailed"));
			return;
		}
		this.setListeners();
		this._previousTime = openfl.Lib.getTimer();
		this.events.register("enterFrame",this,openfl.events.Event.ENTER_FRAME,$bind(this,this.enterFrameHandler));
	}
	,retryGame: function() {
		this.end = false;
		this.removeCurrentGame();
		this.timeRemaining = 1860;
		this.setGame(this.puzzle);
		this.showGame();
	}
	,showGame: function() {
		this.currentGame = new com.ie.blitz.blitzone.puzzlemap.PuzzleMap();
		this.currentGame.setMapGraphicPath(this.puzzle.imageLocation);
		this.currentGame.setDivision(this.puzzle.divisions,this.puzzle.divisions);
		this.currentGame.createMap();
		this.currentGame.startDisplay();
		this.currentGame.set_x(156);
		this.currentGame.set_y(208);
		this.currentGame.set_scaleX(.78);
		this.currentGame.set_scaleY(.78);
		this.redRect.set_scaleX(this.currentGame.get_scaleX());
		this.redRect.set_scaleY(this.currentGame.get_scaleY());
		this.redRect.set_x(this.currentGame.get_x() - 11);
		this.redRect.set_y(this.currentGame.get_y() - 11);
		this.currentGame.mouseChildren = false;
		this.currentGame.mouseEnabled = false;
		this.events.register("game",this.currentGame,openfl.events.Event.COMPLETE,$bind(this,this.currentGameCompleteHandler));
		this.currentTarget = com.jamdevera.utils.DisplayUtils.createBitmap(this.puzzle.imageLocation);
		this.currentTarget.set_x(this.currentGame.get_x());
		this.currentTarget.set_y(this.currentGame.get_y());
		this.currentTarget.set_scaleX(this.currentGame.get_scaleX());
		this.currentTarget.set_scaleY(this.currentGame.get_scaleY());
		this.blackOverlay.set_alpha(0);
		this.timerLabel.set_x(955);
		this.timerLabel.set_y(590);
		this.addChild(this.currentGame);
		this.addChild(this.currentTarget);
		this.addChild(this.blackOverlay);
		this.addChild(this.timerLabel);
		this.addChild(this.whiteLabelContainer);
		this.addChild(this.scoreLabel);
	}
	,setTime: function(numOfSecondsElapsed,color) {
		if(color == null) color = 0;
		if(color != 0) this.timerLabel.set_textColor(color); else this.timerLabel.set_textColor(0);
		this.timerLabel.set_text(com.jamdevera.utils.DisplayUtils.timeToString(numOfSecondsElapsed,false));
	}
	,removeCurrentGame: function() {
		this.events.unregister("game");
		this.removeChild(this.currentGame);
		this.removeChild(this.currentTarget);
		this.currentGame.destroy();
		this.currentGame = null;
	}
	,endGame: function() {
		var _g = this;
		this.events.unregister("game");
		if(this.contains(this.redRect)) this.removeChild(this.redRect);
		this.removeListeners();
		var gameEvent;
		if(!this.end) {
			var index = com.jamdevera.utils.ArrayUtils.indexOf(com.ie.blitz.blitzone.config.GameConfig.PUZZLEDATA.puzzleData,this.puzzle);
			gameEvent = new com.ie.blitz.blitzone.GameEvent("puzzleCompleted",this.timeRemaining,false,this.puzzle.earnings);
			this.win.play(0,0,com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM);
		} else {
			this.lose.play(0,0,com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM);
			gameEvent = new com.ie.blitz.blitzone.GameEvent("puzzleFailed",this.timeRemaining);
		}
		if(gameEvent.type == "puzzleCompleted" || gameEvent.type == "puzzleFailed") motion.Actuate.timer(1).onComplete(function() {
			com.ie.blitz.blitzone.config.GameConfig.CURRENT_SCORE += _g.timeRemaining / 60 | 0;
			_g.dispatchEvent(gameEvent);
		});
	}
	,enterFrameHandler: function(e) {
		if(this.isPaused) return;
		var now = openfl.Lib.getTimer();
		if(now - this._previousTime > 17) {
			this.update();
			this._previousTime = now;
		}
	}
	,currentGameCompleteHandler: function(e) {
		this.puzzlesCompleted++;
		this.removeListeners();
		this.currentGame.mouseChildren = false;
		this.currentGame.mouseEnabled = false;
		this.currentGame.flipTiles();
		haxe.Timer.delay($bind(this,this.endGame),1000);
	}
	,setListeners: function() {
	}
	,startTime: function() {
		this.removeChild(this.blackOverlay);
		this.removeChild(this.whiteLabelContainer);
		this.removeChild(this.goText);
		this.currentGame.mouseChildren = true;
		this.currentGame.mouseEnabled = true;
		this.removeListeners();
		this.setListeners();
		this._previousTime = openfl.Lib.getTimer();
		this.events.register("enterFrame",this,openfl.events.Event.ENTER_FRAME,$bind(this,this.enterFrameHandler));
	}
	,removeListeners: function() {
		this.events.unregister("ui");
		this.events.unregister("enterFrame");
	}
	,prepareDisplay: function() {
		this.redRect = com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/redRect.png");
		this.gameBG = com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/ingame-bg.png");
		this.gameBG.set_x(0);
		this.addChild(this.gameBG);
		this.timerLabel = com.jamdevera.utils.DisplayUtils.createTextField(com.ie.blitz.blitzone.config.GameConfig.FONT,70,16777215,"");
		this.timerLabel.set_y(6);
		this.scoreLabel = com.jamdevera.utils.DisplayUtils.createTextField(com.ie.blitz.blitzone.config.GameConfig.FONT,30,16777215,Std.string(com.ie.blitz.blitzone.config.GameConfig.CURRENT_SCORE));
		this.scoreLabel = com.jamdevera.utils.DisplayUtils.convertToNoneAutoSizeCenteredAcrossWidth(this.scoreLabel,200);
		this.scoreLabel.set_x(298);
		this.scoreLabel.set_y(60);
		this.whiteLabelContainer = com.jamdevera.utils.DisplayUtils.createSpriteFromBitmapAsset("img/ui/popup.png");
		this.whiteLabelContainer.set_x((1280 - this.whiteLabelContainer.get_width()) * 0.5);
		this.whiteLabelContainer.set_y(-this.whiteLabelContainer.get_height() * 0.5);
		this.whiteLabelText = com.jamdevera.utils.DisplayUtils.createTextField(com.ie.blitz.blitzone.config.GameConfig.FONT2,75,16777215,"");
		this.whiteLabelText = com.jamdevera.utils.DisplayUtils.convertToNoneAutoSizeCenteredAcrossWidth(this.whiteLabelText,this.whiteLabelContainer.get_width());
		this.goText = com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/go.png");
		this.goText.set_x(526);
		this.textLabel = new openfl.text.TextField();
		this.timerLabel.set_x(160);
		this.textLabel.set_scaleX(5);
		this.textLabel.set_scaleY(5);
		this.textLabel.set_autoSize(openfl.text.TextFieldAutoSize.LEFT);
		this.textLabel.set_textColor(0);
		this.timerLabel.mouseEnabled = false;
		this.textLabel.mouseEnabled = false;
		this.currentGameIndex = 0;
		this.puzzlesCompleted = 0;
		this.end = false;
		this.addChild(this.timerLabel);
	}
	,update: function() {
		if(this.timeRemaining > 0) {
			this.timeRemaining--;
			if(this.timeRemaining < 360 && this.timeRemaining % 40 < 20) {
				this.setTime(this.timeRemaining,16711680);
				if(!this.contains(this.redRect)) {
					this.distress.play(0,0,com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM);
					this.addChildAt(this.redRect,this.getChildIndex(this.currentGame));
				}
			} else {
				this.setTime(this.timeRemaining,16777215);
				if(this.contains(this.redRect)) this.removeChild(this.redRect);
			}
		} else if(!this.end) {
			this.end = true;
			if(this.contains(this.redRect)) this.removeChild(this.redRect);
			this.currentGame.mouseEnabled = false;
			this.currentGame.mouseChildren = false;
			haxe.Timer.delay($bind(this,this.endGame),1000);
		}
		if(!this.contains(this.textLabel)) this.addChild(this.textLabel);
	}
	,__class__: com.ie.blitz.blitzone.PuzzleGame
});
com.ie.blitz.blitzone.config = {};
com.ie.blitz.blitzone.config.GameConfig = function() {
};
$hxClasses["com.ie.blitz.blitzone.config.GameConfig"] = com.ie.blitz.blitzone.config.GameConfig;
com.ie.blitz.blitzone.config.GameConfig.__name__ = ["com","ie","blitz","blitzone","config","GameConfig"];
com.ie.blitz.blitzone.config.GameConfig.PLAYERDATA = null;
com.ie.blitz.blitzone.config.GameConfig.PUZZLEDATA = null;
com.ie.blitz.blitzone.config.GameConfig.FONT = null;
com.ie.blitz.blitzone.config.GameConfig.FONT2 = null;
com.ie.blitz.blitzone.config.GameConfig.BGM_SOUND_TRANSFORM = null;
com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM = null;
com.ie.blitz.blitzone.config.GameConfig.BGM_CHANNEL = null;
com.ie.blitz.blitzone.config.GameConfig.NUM_PUZZLES = null;
com.ie.blitz.blitzone.config.GameConfig.CURRENT_GAME = null;
com.ie.blitz.blitzone.config.GameConfig.BUTTON_SOUND = null;
com.ie.blitz.blitzone.config.GameConfig.CLICK_SOUND = null;
com.ie.blitz.blitzone.config.GameConfig.CANCEL_SOUND = null;
com.ie.blitz.blitzone.config.GameConfig.GAMEBGMS = null;
com.ie.blitz.blitzone.config.GameConfig.SF = null;
com.ie.blitz.blitzone.config.GameConfig.AD_AVAILABLE = null;
com.ie.blitz.blitzone.config.GameConfig.playClick = function(cancel) {
	if(cancel == null) cancel = false;
	if(!cancel) com.ie.blitz.blitzone.config.GameConfig.CLICK_SOUND.play(0,0,com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM); else com.ie.blitz.blitzone.config.GameConfig.CANCEL_SOUND.play(0,0,com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM);
};
com.ie.blitz.blitzone.config.GameConfig.clearAssetsFromMemory = function() {
	com.ie.blitz.blitzone.config.GameConfig.callGC();
};
com.ie.blitz.blitzone.config.GameConfig.callGC = function() {
};
com.ie.blitz.blitzone.config.GameConfig.prototype = {
	__class__: com.ie.blitz.blitzone.config.GameConfig
};
com.ie.blitz.blitzone.data = {};
com.ie.blitz.blitzone.data.PlayerData = function() {
	this.sharedObjectManager = com.jamdevera.utils.sharedobject.SharedObjectManager.getInstance("ug_pp");
	var limit = com.ie.blitz.blitzone.config.GameConfig.NUM_PUZZLES;
	this.puzzleCompletedList = new Array();
	this.puzzleScoreList = new Array();
	var _g = 0;
	while(_g < limit) {
		var i = _g++;
		this.puzzleCompletedList.push(false);
		this.puzzleScoreList.push(0);
	}
	if(this.sharedObjectManager.getProperty("firstPlay") == null) {
		this.sharedObjectManager.saveProperty("firstPlay","no");
		this.createNewPlayerData();
		this.saveData();
	} else this.loadPlayerData();
};
$hxClasses["com.ie.blitz.blitzone.data.PlayerData"] = com.ie.blitz.blitzone.data.PlayerData;
com.ie.blitz.blitzone.data.PlayerData.__name__ = ["com","ie","blitz","blitzone","data","PlayerData"];
com.ie.blitz.blitzone.data.PlayerData.prototype = {
	createNewPlayerData: function() {
		this.highScore = 0;
		this.bgmOn = true;
		this.sfxOn = true;
	}
	,saveData: function() {
		this.sharedObjectManager.saveProperty("HSCORE",this.highScore);
		this.sharedObjectManager.saveProperty("BGM_ON",this.bgmOn);
		this.sharedObjectManager.saveProperty("SFX_ON",this.sfxOn);
	}
	,loadPlayerData: function() {
		this.highScore = this.sharedObjectManager.getProperty("HSCORE");
		this.bgmOn = this.sharedObjectManager.getProperty("BGM_ON");
		this.sfxOn = this.sharedObjectManager.getProperty("SFX_ON");
	}
	,__class__: com.ie.blitz.blitzone.data.PlayerData
};
com.ie.blitz.blitzone.data.PuzzleData = function() {
	var locHeader = "img/puzzles/";
	this.puzzleData = new Array();
	var fast = new haxe.xml.Fast(Xml.parse(openfl.Assets.getText("xml/puzzle_config.xml")).firstElement());
	var puzzles = fast.nodes.resolve("puzzle");
	var $it0 = puzzles.iterator();
	while( $it0.hasNext() ) {
		var puzzle = $it0.next();
		this.puzzleData.push(new com.ie.blitz.blitzone.puzzlemap.PuzzleMapData(locHeader + puzzle.att.resolve("image_loc"),Std.parseInt(puzzle.att.resolve("earnings")),Std.parseInt(puzzle.att.resolve("divisions")),puzzle.att.resolve("puzzle_name"),puzzle.att.resolve("cutscene_loc")));
	}
};
$hxClasses["com.ie.blitz.blitzone.data.PuzzleData"] = com.ie.blitz.blitzone.data.PuzzleData;
com.ie.blitz.blitzone.data.PuzzleData.__name__ = ["com","ie","blitz","blitzone","data","PuzzleData"];
com.ie.blitz.blitzone.data.PuzzleData.prototype = {
	__class__: com.ie.blitz.blitzone.data.PuzzleData
};
com.ie.blitz.blitzone.panels = {};
com.ie.blitz.blitzone.panels.GamePanel = function() {
	openfl.display.Sprite.call(this);
	this.overlay = new openfl.display.Bitmap(new openfl.display.BitmapData(1280,768,true,-1627389952));
	this.overlay.set_x(0);
	this.overlay.set_y(0);
	this.winGraphics = new Array();
	this.loseGraphics = new Array();
	this.winGraphics.push(com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/popup_winner_withscore.png"));
	this.winGraphics.push(com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/Success1.png"));
	this.winGraphics.push(com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/Success2.png"));
	this.winGraphics.push(com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/Success3.png"));
	this.loseGraphics.push(com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/popup_loser_withscore.png"));
	this.loseGraphics.push(com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/Fail1.png"));
	this.loseGraphics.push(com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/Fail2.png"));
	this.loseGraphics.push(com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/Fail3.png"));
	this.endGraphic = com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/popup_gameover_withscore.png");
	this.newHighScore = com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/popupnewhighscore.png");
	this.newHighScore.set_x(1280 - this.newHighScore.get_width() - 20);
	this.newHighScore.set_y(768 - this.newHighScore.get_height() - 10);
	this.scoreField = com.jamdevera.utils.DisplayUtils.createTextField(com.ie.blitz.blitzone.config.GameConfig.FONT2,55,16777215,"Time Left");
	this.scoreField2 = com.jamdevera.utils.DisplayUtils.createTextField(com.ie.blitz.blitzone.config.GameConfig.FONT2,85,16777215,"Time Left");
	this.scoreField = com.jamdevera.utils.DisplayUtils.convertToNoneAutoSizeCenteredAcrossWidth(this.scoreField,1280);
	this.scoreField2 = com.jamdevera.utils.DisplayUtils.convertToNoneAutoSizeCenteredAcrossWidth(this.scoreField2,1280);
	this.scoreField.multiline = true;
	this.scoreField2.multiline = true;
	this.scoreField.set_height(300);
	this.scoreField2.set_height(300);
	var _g = 0;
	var _g1 = this.winGraphics;
	while(_g < _g1.length) {
		var winG = _g1[_g];
		++_g;
		winG.set_x((1280 - winG.get_width()) * 0.5);
		winG.set_y((768 - winG.get_height()) * 0.5);
	}
};
$hxClasses["com.ie.blitz.blitzone.panels.GamePanel"] = com.ie.blitz.blitzone.panels.GamePanel;
com.ie.blitz.blitzone.panels.GamePanel.__name__ = ["com","ie","blitz","blitzone","panels","GamePanel"];
com.ie.blitz.blitzone.panels.GamePanel.__super__ = openfl.display.Sprite;
com.ie.blitz.blitzone.panels.GamePanel.prototype = $extend(openfl.display.Sprite.prototype,{
	destroy: function() {
		com.jamdevera.utils.DisplayUtils.removeAllChildren(this);
		while(this.winGraphics.length > 0) this.winGraphics.pop();
		while(this.loseGraphics.length > 0) this.loseGraphics.pop();
		this.winGraphics = null;
		this.loseGraphics = null;
		this.winGraphic = null;
		this.loseGraphic = null;
		this.scoreField = null;
		this.overlay = null;
	}
	,showWin: function(scoreToShow) {
		com.jamdevera.utils.DisplayUtils.removeAllChildren(this);
		this.winGraphic = this.winGraphics[Std["int"](Math.random() * this.winGraphics.length)];
		this.scoreField.set_y(this.winGraphic.get_y() + 380);
		this.addChild(this.overlay);
		this.addChild(this.winGraphic);
		this.scoreField.set_x(0);
		this.scoreField.set_y(this.winGraphic.get_y() + 380);
		this.scoreField.set_text("Score:      " + Std.string(com.ie.blitz.blitzone.config.GameConfig.CURRENT_SCORE) + "\nTime Left:      ");
		this.scoreField.appendText((scoreToShow == null?"null":"" + scoreToShow) + "\n\n(tap to continue)");
		this.addChild(this.scoreField);
	}
	,showEnd: function(scoreToShow,showNewBT) {
		if(showNewBT == null) showNewBT = false;
		com.jamdevera.utils.DisplayUtils.removeAllChildren(this);
		this.scoreField.set_x(150);
		this.scoreField.set_y(190);
		this.scoreField2.set_x(150);
		this.scoreField2.set_y(250);
		this.addChild(this.endGraphic);
		this.scoreField.set_text("High Score:   " + com.ie.blitz.blitzone.config.GameConfig.PLAYERDATA.highScore);
		this.scoreField2.set_text("Your Score:\n");
		this.scoreField2.appendText(scoreToShow == null?"null":"" + scoreToShow);
		this.addChild(this.scoreField);
		this.addChild(this.scoreField2);
		if(showNewBT) this.addChild(this.newHighScore);
	}
	,showLose: function(scoreToShow) {
		com.jamdevera.utils.DisplayUtils.removeAllChildren(this);
		this.loseGraphic = this.loseGraphics[Std["int"](Math.random() * this.loseGraphics.length)];
		this.loseGraphic.set_x((1280 - this.loseGraphic.get_width()) * 0.5);
		this.loseGraphic.set_y((768 - this.loseGraphic.get_height()) * 0.5);
		this.scoreField.set_x(0);
		this.scoreField.set_y(this.loseGraphic.get_y() + 380);
		this.addChild(this.overlay);
		this.addChild(this.loseGraphic);
		this.scoreField.set_text("Final Score\n");
		this.scoreField.appendText((scoreToShow == null?"null":"" + scoreToShow) + "\n\n(tap to continue)");
		this.addChild(this.scoreField);
	}
	,hide: function() {
		com.jamdevera.utils.DisplayUtils.removeAllChildren(this);
	}
	,__class__: com.ie.blitz.blitzone.panels.GamePanel
});
com.ie.blitz.blitzone.puzzlemap = {};
com.ie.blitz.blitzone.puzzlemap.PuzzleMap = function() {
	openfl.display.Sprite.call(this);
	this._events = new com.philipmabanta.utils.TaggedEventRegistry();
	this._divisionLocation = new Array();
	this._divisionBitmapContainer = new Array();
	this._divisionBitmapData = new Array();
	this._redrawRects = new Array();
	this._glowBox = com.jamdevera.utils.DisplayUtils.createSpriteFromBitmapAsset("img/ui/rect.png");
	this._glowBox.mouseEnabled = false;
	this._glowBox.mouseChildren = false;
	this._cropMatrix = new openfl.geom.Matrix();
	this._puzzleSwap = openfl.Assets.getSound("audio/sfx/tileSwap.wav");
	this._puzzleTap = openfl.Assets.getSound("audio/sfx/tap.wav");
	var silence = new openfl.media.SoundTransform(0,0);
	this._puzzleSwap.play(0,0,silence);
	this._puzzleTap.play(0,0,silence);
	this._usedHint = false;
};
$hxClasses["com.ie.blitz.blitzone.puzzlemap.PuzzleMap"] = com.ie.blitz.blitzone.puzzlemap.PuzzleMap;
com.ie.blitz.blitzone.puzzlemap.PuzzleMap.__name__ = ["com","ie","blitz","blitzone","puzzlemap","PuzzleMap"];
com.ie.blitz.blitzone.puzzlemap.PuzzleMap.__super__ = openfl.display.Sprite;
com.ie.blitz.blitzone.puzzlemap.PuzzleMap.prototype = $extend(openfl.display.Sprite.prototype,{
	destroy: function() {
		com.jamdevera.utils.DisplayUtils.removeAllChildren(this);
		com.jamdevera.utils.DisplayUtils.removeAllChildren(this._originalMap);
		this._originalMap = null;
		com.jamdevera.utils.DisplayUtils.removeAllChildren(this._mapContent);
		this._mapContent = null;
		this._mapGraphic = null;
		this._events.unregister();
		while(this._divisionBitmapContainer.length > 0) this._divisionBitmapContainer.pop();
		this._divisionBitmapContainer = null;
		while(this._divisionLocation.length > 0) this._divisionLocation.pop();
		this._divisionLocation = null;
		this._selectedSprite = null;
		while(this._divisionBitmapData.length > 0) this._divisionBitmapData.pop();
		this._divisionBitmapData = null;
		this._rect = null;
		this._cropMatrix = null;
		while(this._redrawRects.length > 0) this._redrawRects.pop();
		this._redrawRects = null;
		this._redrawerRect = null;
		this._coinSound = null;
		this._puzzleSwap = null;
	}
	,get_mapContent: function() {
		return this._mapContent;
	}
	,set_mapContent: function(value) {
		return this._mapContent = value;
	}
	,get_xDivisions: function() {
		return this._xDivisions;
	}
	,get_yDivisions: function() {
		return this._yDivisions;
	}
	,get_divisionHeight: function() {
		return this._divisionHeight;
	}
	,get_divisionWidth: function() {
		return this._divisionWidth;
	}
	,get_puzzleTileSize: function() {
		return this._puzzleTileSize;
	}
	,get_bgWidth: function() {
		return this._mapGraphic.get_width();
	}
	,get_bgHeight: function() {
		return this._mapGraphic.get_width();
	}
	,setMapGraphicPath: function(mapGraphicPath) {
		this._mapGraphic = com.jamdevera.utils.DisplayUtils.createBitmap(mapGraphicPath);
	}
	,setDivision: function(xDivisions,yDivisions) {
		this._xDivisions = xDivisions;
		this._yDivisions = yDivisions;
		this._glowBox.set_width(600 / xDivisions + 12);
		this._glowBox.set_height(600 / yDivisions + 12);
	}
	,createNormalMap: function() {
		this._originalMap = new openfl.display.Sprite();
		this._mapContent = new openfl.display.Sprite();
		this._mapContent.addChild(this._mapGraphic);
		this._originalMap.addChild(this._mapContent);
	}
	,drawMap: function() {
		var i;
		var j;
		var sprite;
		var bitmap;
		var bitmapData;
		var divLoc;
		var oneOverYDiv = 1 / this._yDivisions;
		var _g1 = 0;
		var _g = this._totalBitmaps;
		while(_g1 < _g) {
			var i1 = _g1++;
			sprite = this._divisionBitmapContainer[i1];
			divLoc = this._divisionLocation[i1];
			sprite.set_scrollRect(new openfl.geom.Rectangle(divLoc % this._xDivisions * this._divisionWidth,Math.floor(divLoc * oneOverYDiv) * this._divisionHeight,this._divisionWidth,this._divisionHeight));
			sprite.getChildAt(0).set_x(sprite.get_scrollRect().x);
			sprite.getChildAt(0).set_y(sprite.get_scrollRect().y);
			this._cropMatrix.tx = -(divLoc % this._xDivisions) * this._divisionWidth;
			this._cropMatrix.ty = -Math.floor(divLoc * oneOverYDiv) * this._divisionHeight;
			bitmapData = this._divisionBitmapData[i1];
			bitmapData.fillRect(this._rect,0);
			bitmapData.draw(this._originalMap,this._cropMatrix,null,null,this._rect,true);
			sprite.set_x(i1 % this._xDivisions * this._divisionWidth | 0);
			sprite.set_y(Std["int"](Math.floor(i1 * oneOverYDiv) * this._divisionHeight));
			this.addChild(sprite);
			com.jamdevera.utils.DisplayUtils.resetMatrix(this._cropMatrix);
		}
	}
	,divideMap: function() {
		var i;
		var bitmap;
		var bitmapData;
		var sprite;
		var oneOverYDiv = 1 / this._yDivisions;
		this._totalBitmaps = this._yDivisions * this._xDivisions;
		this._divisionHeight = Math.floor(this._mapGraphic.get_height() * oneOverYDiv);
		this._divisionWidth = Math.floor(this._mapGraphic.get_width() / this._xDivisions);
		this._rect = new openfl.geom.Rectangle(0,0,this._divisionWidth,this._divisionHeight);
		this._redrawerRect = new openfl.geom.Rectangle(0,0,this._divisionWidth,this._divisionHeight);
		var _g1 = 0;
		var _g = this._totalBitmaps;
		while(_g1 < _g) {
			var i1 = _g1++;
			this._divisionLocation.push(i1);
			sprite = new openfl.display.Sprite();
			if(com.ie.blitz.blitzone.config.GameConfig.TOUCH_MODE) this._events.register("sprite",sprite,"touchEnd",$bind(this,this.pieceClickHandler)); else this._events.register("sprite",sprite,openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.pieceClickHandler));
			sprite.set_x(i1 % this._xDivisions * this._divisionWidth);
			sprite.set_y(Math.floor(i1 * oneOverYDiv) * this._divisionHeight);
			this._divisionBitmapContainer.push(sprite);
			bitmapData = new openfl.display.BitmapData(this._divisionWidth,this._divisionHeight,true,0);
			bitmap = new openfl.display.Bitmap(bitmapData,openfl.display.PixelSnapping.ALWAYS,true);
			this._divisionBitmapData.push(bitmapData);
			sprite.addChild(bitmap);
		}
		this.shuffle();
	}
	,createMap: function() {
		this.createNormalMap();
		this.divideMap();
		this.drawMap();
	}
	,startDisplay: function() {
		this._selectedTileIndex = -2;
	}
	,shuffle: function() {
		var limit = this._divisionLocation.length;
		var i;
		var target;
		var _g = 0;
		while(_g < limit) {
			var i1 = _g++;
			target = Math.floor(Math.random() * limit);
			com.jamdevera.utils.ArrayUtils.swap(this._divisionLocation,i1,target);
		}
	}
	,swapTiles: function(indexA,indexB) {
		this._puzzleSwap.play(0,0,com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM);
		com.jamdevera.utils.ArrayUtils.swap(this._divisionLocation,indexA,indexB);
		com.jamdevera.utils.ArrayUtils.swap(this._divisionBitmapContainer,indexA,indexB);
		com.jamdevera.utils.ArrayUtils.swap(this._divisionBitmapData,indexA,indexB);
		var _g = 0;
		var _g1 = this._divisionBitmapContainer;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			this.addChildAt(sprite,0);
		}
		if(this._usedHint) {
			motion.Actuate.stop(this._glowBox);
			this._glowBox.set_x(this._divisionBitmapContainer[indexB].get_x() - 6);
			this._glowBox.set_y(this._divisionBitmapContainer[indexB].get_y() - 6);
			this._glowBox.get_transform().colorTransform = new openfl.geom.ColorTransform(3,3,3);
			this._glowBox.set_alpha(1);
			this.addChild(this._divisionBitmapContainer[indexB]);
			this.addChild(this._glowBox);
			this._usedHint = false;
			motion.Actuate.tween(this._glowBox,3,{ alpha : 0.01});
		}
		this._selectedSprite = null;
		this._selectedTileIndex = -2;
		this.mouseChildren = true;
		this.mouseEnabled = true;
		if(this.checkIfSolved()) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,flipTiles: function() {
		var limit = this._divisionBitmapContainer.length;
		this._animatingTileIndex = 0;
		var _g = 0;
		while(_g < limit) {
			var i = _g++;
			haxe.Timer.delay($bind(this,this.animateTile),(i + 1) / this._totalBitmaps * 1000 | 0);
		}
	}
	,animateTile: function() {
		if(this._animatingTileIndex >= this._divisionBitmapContainer.length) return;
		motion.Actuate.tween(this._divisionBitmapContainer[this._animatingTileIndex],0.5 / this._totalBitmaps,{ alpha : 0, scaleX : -1, x : this._divisionBitmapContainer[this._animatingTileIndex].get_x() + this._divisionWidth}).ease(motion.easing.Quad.get_easeIn()).repeat(5).reflect();
		this._animatingTileIndex++;
	}
	,revealTiles: function() {
		var limit = this._divisionBitmapContainer.length;
		this._animatingTileIndex = 0;
		var _g = 0;
		while(_g < limit) {
			var i = _g++;
			var xPos = i % this._xDivisions * this._divisionWidth;
			this._divisionBitmapContainer[i].set_scaleX(1);
			this._divisionBitmapContainer[i].set_x(xPos);
			this._divisionBitmapContainer[i].set_alpha(1);
			this._divisionBitmapContainer[i].set_visible(true);
		}
	}
	,determineCorrectPosition: function(spriteToCheck) {
		var index = com.jamdevera.utils.ArrayUtils.indexOf(this._divisionBitmapContainer,spriteToCheck);
		return this._divisionLocation[index];
	}
	,randomFix: function() {
		if(this.checkIfSolved()) return;
		var indexToSolve = Std["int"](Math.random() * this._totalBitmaps);
		if(this.determineCorrectPosition(this._divisionBitmapContainer[indexToSolve]) == indexToSolve) this.randomFix(); else {
			var spriteToChange = this._divisionBitmapContainer[indexToSolve];
			var spriteToSwapWith = this._divisionBitmapContainer[this.determineCorrectPosition(this._divisionBitmapContainer[indexToSolve])];
			this.mouseChildren = false;
			this.mouseEnabled = false;
			this.addChild(spriteToChange);
			this.addChild(spriteToSwapWith);
			this._usedHint = true;
			motion.Actuate.tween(spriteToChange,0.1,{ x : spriteToSwapWith.get_x(), y : spriteToSwapWith.get_y()});
			motion.Actuate.tween(spriteToSwapWith,0.1,{ x : spriteToChange.get_x(), y : spriteToChange.get_y()}).onComplete($bind(this,this.swapTiles),[com.jamdevera.utils.ArrayUtils.indexOf(this._divisionBitmapContainer,spriteToChange),com.jamdevera.utils.ArrayUtils.indexOf(this._divisionBitmapContainer,spriteToSwapWith)]);
		}
	}
	,readdAllPieces: function() {
		var _g = 0;
		var _g1 = this._divisionBitmapContainer;
		while(_g < _g1.length) {
			var sprite = _g1[_g];
			++_g;
			this.addChild(sprite);
		}
	}
	,checkIfSolved: function() {
		var i;
		var _g1 = 0;
		var _g = this._totalBitmaps;
		while(_g1 < _g) {
			var i1 = _g1++;
			if(this.determineCorrectPosition(this._divisionBitmapContainer[i1]) != i1) return false;
		}
		return true;
	}
	,pieceClickHandler: function(e) {
		var index;
		if(this._selectedSprite == null) {
			motion.Actuate.stop(this._glowBox);
			this._puzzleTap.play(0,0,com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM);
			this._selectedSprite = e.currentTarget;
			this._glowBox.set_x(this._selectedSprite.get_x() - 6);
			this._glowBox.set_y(this._selectedSprite.get_y() - 6);
			this._glowBox.set_alpha(1);
			this._glowBox.get_transform().colorTransform = new openfl.geom.ColorTransform(1,1,1);
			this.addChild(this._selectedSprite);
			this.addChild(this._glowBox);
			index = com.jamdevera.utils.ArrayUtils.indexOf(this._divisionBitmapContainer,this._selectedSprite);
		} else {
			var thisSprite = e.currentTarget;
			this.mouseChildren = false;
			this.mouseEnabled = false;
			this.removeChild(this._glowBox);
			this.addChild(this._selectedSprite);
			this.addChild(thisSprite);
			motion.Actuate.tween(this._selectedSprite,0.1,{ x : thisSprite.get_x(), y : thisSprite.get_y()});
			motion.Actuate.tween(thisSprite,0.1,{ x : this._selectedSprite.get_x(), y : this._selectedSprite.get_y()}).onComplete($bind(this,this.swapTiles),[com.jamdevera.utils.ArrayUtils.indexOf(this._divisionBitmapContainer,this._selectedSprite),com.jamdevera.utils.ArrayUtils.indexOf(this._divisionBitmapContainer,thisSprite)]);
		}
	}
	,__class__: com.ie.blitz.blitzone.puzzlemap.PuzzleMap
	,__properties__: $extend(openfl.display.Sprite.prototype.__properties__,{get_bgHeight:"get_bgHeight",get_bgWidth:"get_bgWidth",get_puzzleTileSize:"get_puzzleTileSize",get_divisionWidth:"get_divisionWidth",get_divisionHeight:"get_divisionHeight",get_yDivisions:"get_yDivisions",get_xDivisions:"get_xDivisions",set_mapContent:"set_mapContent",get_mapContent:"get_mapContent"})
});
com.ie.blitz.blitzone.puzzlemap.PuzzleMapData = function(imgLoc,earnings,div,name,cutscene) {
	if(imgLoc == null) imgLoc = "";
	this.imageLocation = imgLoc;
	this.divisions = div;
	this.cutsceneLocation = cutscene;
	this.completed = false;
	this.bestTime = 0;
	this.earnings = earnings;
	this.name = name;
};
$hxClasses["com.ie.blitz.blitzone.puzzlemap.PuzzleMapData"] = com.ie.blitz.blitzone.puzzlemap.PuzzleMapData;
com.ie.blitz.blitzone.puzzlemap.PuzzleMapData.__name__ = ["com","ie","blitz","blitzone","puzzlemap","PuzzleMapData"];
com.ie.blitz.blitzone.puzzlemap.PuzzleMapData.prototype = {
	__class__: com.ie.blitz.blitzone.puzzlemap.PuzzleMapData
};
com.ie.blitz.blitzone.screens = {};
com.ie.blitz.blitzone.screens.Screen = function() {
	openfl.display.Sprite.call(this);
	this.buttons = new Array();
};
$hxClasses["com.ie.blitz.blitzone.screens.Screen"] = com.ie.blitz.blitzone.screens.Screen;
com.ie.blitz.blitzone.screens.Screen.__name__ = ["com","ie","blitz","blitzone","screens","Screen"];
com.ie.blitz.blitzone.screens.Screen.__super__ = openfl.display.Sprite;
com.ie.blitz.blitzone.screens.Screen.prototype = $extend(openfl.display.Sprite.prototype,{
	destroy: function() {
		com.jamdevera.utils.DisplayUtils.removeAllChildren(this);
	}
	,buttonize: function() {
	}
	,buttonHandler: function(e) {
	}
	,__class__: com.ie.blitz.blitzone.screens.Screen
});
com.ie.blitz.blitzone.screens.InstructionScreen = function() {
	com.ie.blitz.blitzone.screens.Screen.call(this);
	this.background = com.jamdevera.utils.DisplayUtils.createBitmap("img/ui/splashscreen_bg.png");
	this.background.set_x(0);
	this.playButton = com.jamdevera.utils.DisplayUtils.createSpriteFromBitmapAsset("img/ui/splashscreen_playbutton_normal.png");
	this.playButton.addChildAt(com.jamdevera.utils.DisplayUtils.createSpriteFromBitmapAsset("img/ui/splashscreen_playbutton_clicked.png"),0);
	this.playButton.getChildAt(0).set_x((this.playButton.get_width() - this.playButton.getChildAt(0).get_width()) * 0.5);
	this.playButton.getChildAt(0).set_y((this.playButton.get_height() - this.playButton.getChildAt(0).get_height()) * 0.5);
	this.htpButton = com.jamdevera.utils.DisplayUtils.createSpriteFromBitmapAsset("img/ui/splashscreen_howtoplay_button.png");
	this.htpButton.addChildAt(com.jamdevera.utils.DisplayUtils.createSpriteFromBitmapAsset("img/ui/splashscreen_howtoplay_button_clicked.png"),0);
	this.htpButton.getChildAt(0).set_x((this.htpButton.get_width() - this.htpButton.getChildAt(0).get_width()) * 0.5);
	this.htpButton.getChildAt(0).set_y((this.htpButton.get_height() - this.htpButton.getChildAt(0).get_height()) * 0.5);
	this.htpScr = com.jamdevera.utils.DisplayUtils.createSpriteFromBitmapAsset("img/ui/how-to-play.png");
	this.htpScr.set_scaleX(0);
	this.htpScr.set_scaleY(0);
	this.htpScr.set_x(640.);
	this.htpScr.set_y(384.);
};
$hxClasses["com.ie.blitz.blitzone.screens.InstructionScreen"] = com.ie.blitz.blitzone.screens.InstructionScreen;
com.ie.blitz.blitzone.screens.InstructionScreen.__name__ = ["com","ie","blitz","blitzone","screens","InstructionScreen"];
com.ie.blitz.blitzone.screens.InstructionScreen.__super__ = com.ie.blitz.blitzone.screens.Screen;
com.ie.blitz.blitzone.screens.InstructionScreen.prototype = $extend(com.ie.blitz.blitzone.screens.Screen.prototype,{
	htpHandler: function(e) {
		com.ie.blitz.blitzone.config.GameConfig.BUTTON_SOUND.play(0,0,com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM);
		if(e.currentTarget == this.htpButton) {
			motion.Actuate.stop(this.htpButton);
			this.addChild(this.background);
			this.addChild(this.playButton);
			this.addChild(this.htpButton);
			this.addChild(this.htpScr);
			motion.Actuate.tween(this.htpScr,.5,{ scaleX : 1, scaleY : 1, x : 0, y : 0}).onComplete($bind(this,this.repositionPlay));
		} else if(e.currentTarget == this.htpScr) motion.Actuate.tween(this.htpScr,.5,{ scaleX : 0, scaleY : 0, x : 640., y : 384.}).onComplete($bind(this,this.removeChild),[this.htpScr]);
	}
	,repositionPlay: function() {
		this.playButton.set_x(810 + this.playButton.get_width() * .5);
		this.playButton.set_y(581 + this.playButton.get_height() * .5);
		this.playButton.set_scaleX(0);
		this.playButton.set_scaleY(0);
		motion.Actuate.timer(1.5).onComplete(motion.Actuate.tween,[this.playButton,0.25,{ x : 810, y : 581, scaleX : 1, scaleY : 1}]);
		this.addChild(this.playButton);
	}
	,controlHandler: function(e) {
		com.ie.blitz.blitzone.config.GameConfig.BUTTON_SOUND.play(0,0,com.ie.blitz.blitzone.config.GameConfig.SFX_SOUND_TRANSFORM);
		motion.Actuate.stop(this.playButton);
		motion.Actuate.stop(this.htpButton);
		this.removeListeners();
		com.jamdevera.utils.DisplayUtils.removeAllChildren(this,false);
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,addListeners: function() {
		if(com.ie.blitz.blitzone.config.GameConfig.TOUCH_MODE) {
			this.playButton.addEventListener("touchEnd",$bind(this,this.controlHandler));
			this.htpButton.addEventListener("touchEnd",$bind(this,this.htpHandler));
		} else {
			this.playButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.controlHandler));
			this.htpButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.htpHandler));
		}
	}
	,buttonBeginHandler: function(e) {
		if(e.currentTarget == this.playButton) {
			if(com.ie.blitz.blitzone.config.GameConfig.TOUCH_MODE) this.playButton.addEventListener("touchEnd",$bind(this,this.buttonEndHandler)); else this.playButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.buttonEndHandler));
			this.playButton.getChildAt(1).set_alpha(0.01);
		} else if(e.currentTarget == this.htpButton) {
			if(com.ie.blitz.blitzone.config.GameConfig.TOUCH_MODE) this.htpButton.addEventListener("touchEnd",$bind(this,this.buttonEndHandler)); else this.htpButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.buttonEndHandler));
			this.htpButton.getChildAt(1).set_alpha(0.01);
		}
	}
	,buttonEndHandler: function(e) {
		if(e.currentTarget == this.playButton) {
			if(com.ie.blitz.blitzone.config.GameConfig.TOUCH_MODE) this.playButton.removeEventListener("touchEnd",$bind(this,this.buttonEndHandler)); else this.playButton.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.buttonEndHandler));
			this.playButton.getChildAt(1).set_alpha(1);
		} else if(e.currentTarget == this.htpButton) {
			if(com.ie.blitz.blitzone.config.GameConfig.TOUCH_MODE) this.htpButton.removeEventListener("touchEnd",$bind(this,this.buttonEndHandler)); else this.htpButton.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.buttonEndHandler));
			this.htpButton.getChildAt(1).set_alpha(1);
		}
	}
	,removeListeners: function() {
		if(com.ie.blitz.blitzone.config.GameConfig.TOUCH_MODE) {
			this.playButton.removeEventListener("touchEnd",$bind(this,this.controlHandler));
			this.htpButton.removeEventListener("touchEnd",$bind(this,this.htpHandler));
			this.playButton.removeEventListener("touchBegin",$bind(this,this.buttonBeginHandler));
			this.htpButton.removeEventListener("touchBegin",$bind(this,this.buttonBeginHandler));
		} else {
			this.playButton.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.controlHandler));
			this.htpButton.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.htpHandler));
			this.playButton.removeEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.buttonBeginHandler));
			this.htpButton.removeEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.buttonBeginHandler));
		}
	}
	,prepInteraction: function() {
		this.playButton.set_x(484 + this.playButton.get_width() * .5);
		this.playButton.set_y(531 + this.playButton.get_height() * .5);
		this.playButton.set_scaleX(0);
		this.playButton.set_scaleY(0);
		this.htpButton.set_x(504 + this.htpButton.get_width() * .5);
		this.htpButton.set_y(673 + this.htpButton.get_height() * .5);
		this.htpButton.set_scaleX(0);
		this.htpButton.set_scaleY(0);
		motion.Actuate.timer(1.5).onComplete(motion.Actuate.tween,[this.playButton,0.25,{ x : 484, y : 531, scaleX : 1, scaleY : 1}]);
		motion.Actuate.timer(1.5).onComplete(motion.Actuate.tween,[this.htpButton,0.25,{ x : 504, y : 673, scaleX : 1, scaleY : 1}]);
		this.addListeners();
		this.addChild(this.background);
		this.addChild(this.playButton);
		this.addChild(this.htpButton);
	}
	,__class__: com.ie.blitz.blitzone.screens.InstructionScreen
});
openfl.display.BitmapData = function(width,height,transparent,fillColor) {
	if(fillColor == null) fillColor = -1;
	if(transparent == null) transparent = true;
	this.transparent = transparent;
	if(width > 0 && height > 0) {
		this.width = width;
		this.height = height;
		this.rect = new openfl.geom.Rectangle(0,0,width,height);
		this.__createCanvas(width,height);
		if(!transparent) fillColor = -16777216 | fillColor & 16777215;
		this.__fillRect(new openfl.geom.Rectangle(0,0,width,height),fillColor);
	}
};
$hxClasses["openfl.display.BitmapData"] = openfl.display.BitmapData;
openfl.display.BitmapData.__name__ = ["openfl","display","BitmapData"];
openfl.display.BitmapData.__interfaces__ = [openfl.display.IBitmapDrawable];
openfl.display.BitmapData.__base64Encoder = null;
openfl.display.BitmapData.fromBase64 = function(base64,type,onload) {
	var bitmapData = new openfl.display.BitmapData(0,0,true);
	bitmapData.__loadFromBase64(base64,type,onload);
	return bitmapData;
};
openfl.display.BitmapData.fromBytes = function(bytes,rawAlpha,onload) {
	var bitmapData = new openfl.display.BitmapData(0,0,true);
	bitmapData.__loadFromBytes(bytes,rawAlpha,onload);
	return bitmapData;
};
openfl.display.BitmapData.fromFile = function(path,onload,onfail) {
	var bitmapData = new openfl.display.BitmapData(0,0,true);
	bitmapData.__sourceImage = new Image();
	bitmapData.__sourceImage.onload = function(_) {
		bitmapData.width = bitmapData.__sourceImage.width;
		bitmapData.height = bitmapData.__sourceImage.height;
		bitmapData.rect = new openfl.geom.Rectangle(0,0,bitmapData.__sourceImage.width,bitmapData.__sourceImage.height);
		bitmapData.__valid = true;
		if(onload != null) onload(bitmapData);
	};
	bitmapData.__sourceImage.onerror = function(_1) {
		bitmapData.__valid = false;
		if(onfail != null) onfail();
	};
	bitmapData.__sourceImage.src = path;
	if(bitmapData.__sourceImage.complete) {
	}
	return bitmapData;
};
openfl.display.BitmapData.fromImage = function(image,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new openfl.display.BitmapData(0,0,transparent);
	bitmapData.__sourceImage = image;
	bitmapData.width = image.width;
	bitmapData.height = image.height;
	bitmapData.rect = new openfl.geom.Rectangle(0,0,image.width,image.height);
	bitmapData.__valid = true;
	return bitmapData;
};
openfl.display.BitmapData.fromCanvas = function(canvas,transparent) {
	if(transparent == null) transparent = true;
	var bitmapData = new openfl.display.BitmapData(0,0,transparent);
	bitmapData.width = canvas.width;
	bitmapData.height = canvas.height;
	bitmapData.rect = new openfl.geom.Rectangle(0,0,canvas.width,canvas.height);
	bitmapData.__createCanvas(canvas.width,canvas.height);
	bitmapData.__sourceContext.drawImage(canvas,0,0);
	return bitmapData;
};
openfl.display.BitmapData.__base64Encode = function(bytes) {
	var extension;
	var _g = bytes.length % 3;
	switch(_g) {
	case 1:
		extension = "==";
		break;
	case 2:
		extension = "=";
		break;
	default:
		extension = "";
	}
	if(openfl.display.BitmapData.__base64Encoder == null) openfl.display.BitmapData.__base64Encoder = new haxe.crypto.BaseCode(haxe.io.Bytes.ofString(openfl.display.BitmapData.__base64Chars));
	return openfl.display.BitmapData.__base64Encoder.encodeBytes(haxe.io.Bytes.ofData(bytes.byteView)).toString() + extension;
};
openfl.display.BitmapData.__flipPixel = function(pixel) {
	return (pixel & 255) << 24 | (pixel >> 8 & 255) << 16 | (pixel >> 16 & 255) << 8 | pixel >> 24 & 255;
};
openfl.display.BitmapData.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
};
openfl.display.BitmapData.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
};
openfl.display.BitmapData.__isGIF = function(bytes) {
	bytes.position = 0;
	if(bytes.readByte() == 71 && bytes.readByte() == 73 && bytes.readByte() == 70 && bytes.readByte() == 38) {
		var b = bytes.readByte();
		return (b == 7 || b == 9) && bytes.readByte() == 97;
	}
	return false;
};
openfl.display.BitmapData.__ucompare = function(n1,n2) {
	var tmp1;
	var tmp2;
	tmp1 = n1 >> 24 & 255;
	tmp2 = n2 >> 24 & 255;
	if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else {
		tmp1 = n1 >> 16 & 255;
		tmp2 = n2 >> 16 & 255;
		if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else {
			tmp1 = n1 >> 8 & 255;
			tmp2 = n2 >> 8 & 255;
			if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else {
				tmp1 = n1 & 255;
				tmp2 = n2 & 255;
				if(tmp1 != tmp2) if(tmp1 > tmp2) return 1; else return -1; else return 0;
			}
		}
	}
};
openfl.display.BitmapData.prototype = {
	applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(!this.__valid || sourceBitmapData == null || !sourceBitmapData.__valid) return;
		this.__convertToCanvas();
		this.__createImageData();
		sourceBitmapData.__convertToCanvas();
		sourceBitmapData.__createImageData();
		filter.__applyFilter(this.__sourceImageData,sourceBitmapData.__sourceImageData,sourceRect,destPoint);
		this.__sourceImageDataChanged = true;
	}
	,clone: function() {
		this.__syncImageData();
		if(!this.__valid) return new openfl.display.BitmapData(this.width,this.height,this.transparent); else if(this.__sourceImage != null) return openfl.display.BitmapData.fromImage(this.__sourceImage,this.transparent); else return openfl.display.BitmapData.fromCanvas(this.__sourceCanvas,this.transparent);
	}
	,colorTransform: function(rect,colorTransform) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		var stride = this.width * 4;
		var offset;
		var _g1 = rect.y | 0;
		var _g = rect.height | 0;
		while(_g1 < _g) {
			var row = _g1++;
			var _g3 = rect.x | 0;
			var _g2 = rect.width | 0;
			while(_g3 < _g2) {
				var column = _g3++;
				offset = row * stride + column * 4;
				data[offset] = data[offset] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				data[offset + 1] = data[offset + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				data[offset + 2] = data[offset + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				data[offset + 3] = data[offset + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		sourceRect = this.__clipRect(sourceRect);
		if(!this.__valid || sourceRect == null) return;
		if(destChannel == 8 && !this.transparent) return;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.width) sourceRect.width = sourceBitmapData.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.height) sourceRect.height = sourceBitmapData.height - sourceRect.y;
		var destIdx = -1;
		if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
		var srcIdx = -1;
		if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
		sourceBitmapData.__convertToCanvas();
		sourceBitmapData.__createImageData();
		var srcData = sourceBitmapData.__sourceImageData.data;
		var srcStride = sourceBitmapData.width * 4 | 0;
		var srcPosition = sourceRect.x * 4 + srcStride * sourceRect.y + srcIdx | 0;
		var srcRowOffset = srcStride - (4 * sourceRect.width | 0);
		var srcRowEnd = 4 * (sourceRect.x + sourceRect.width) | 0;
		this.__convertToCanvas();
		this.__createImageData();
		var destData = this.__sourceImageData.data;
		var destStride = this.width * 4 | 0;
		var destPosition = destPoint.x * 4 + destStride * destPoint.y + destIdx | 0;
		var destRowOffset = destStride - (4 * sourceRect.width | 0);
		var destRowEnd = 4 * (destPoint.x + sourceRect.width) | 0;
		var length = sourceRect.width * sourceRect.height | 0;
		var _g = 0;
		while(_g < length) {
			var i = _g++;
			destData[destPosition] = srcData[srcPosition];
			srcPosition += 4;
			destPosition += 4;
			if(srcPosition % srcStride > srcRowEnd) srcPosition += srcRowOffset;
			if(destPosition % destStride > destRowEnd) destPosition += destRowOffset;
		}
		this.__sourceImageDataChanged = true;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(!this.__valid || sourceBitmapData == null) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.width) sourceRect.width = sourceBitmapData.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.height) sourceRect.height = sourceBitmapData.height - sourceRect.y;
		if(sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(alphaBitmapData != null && alphaBitmapData.transparent) {
			if(alphaPoint == null) alphaPoint = new openfl.geom.Point();
			var tempData = this.clone();
			tempData.copyChannel(alphaBitmapData,new openfl.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new openfl.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = tempData;
		}
		this.__syncImageData();
		if(!mergeAlpha) {
			if(this.transparent && sourceBitmapData.transparent) this.__sourceContext.clearRect(destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		}
		sourceBitmapData.__syncImageData();
		if(sourceBitmapData.__sourceImage != null) this.__sourceContext.drawImage(sourceBitmapData.__sourceImage,sourceRect.x | 0,sourceRect.y | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x | 0,destPoint.y | 0,sourceRect.width | 0,sourceRect.height | 0); else if(sourceBitmapData.__sourceCanvas != null) this.__sourceContext.drawImage(sourceBitmapData.__sourceCanvas,sourceRect.x | 0,sourceRect.y | 0,sourceRect.width | 0,sourceRect.height | 0,destPoint.x | 0,destPoint.y | 0,sourceRect.width | 0,sourceRect.height | 0);
	}
	,dispose: function() {
		this.__sourceImage = null;
		this.__sourceCanvas = null;
		this.__sourceContext = null;
		this.width = 0;
		this.height = 0;
		this.rect = null;
		this.__valid = false;
	}
	,draw: function(source,matrix,colorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		if(!this.__valid) return;
		this.__convertToCanvas();
		this.__syncImageData();
		var renderSession = new openfl.display.RenderSession();
		renderSession.context = this.__sourceContext;
		renderSession.roundPixels = true;
		if(!smoothing) {
			this.__sourceContext.mozImageSmoothingEnabled = false;
			this.__sourceContext.webkitImageSmoothingEnabled = false;
			this.__sourceContext.imageSmoothingEnabled = false;
		}
		var matrixCache = source.__worldTransform;
		if(matrix != null) source.__worldTransform = matrix; else source.__worldTransform = new openfl.geom.Matrix();
		source.__updateChildren(false);
		source.__renderCanvas(renderSession);
		source.__worldTransform = matrixCache;
		source.__updateChildren(true);
		if(!smoothing) {
			this.__sourceContext.mozImageSmoothingEnabled = true;
			this.__sourceContext.webkitImageSmoothingEnabled = true;
			this.__sourceContext.imageSmoothingEnabled = true;
		}
		this.__sourceContext.setTransform(1,0,0,1,0,0);
	}
	,encode: function(rect,compressor,byteArray) {
		openfl.Lib.notImplemented("BitmapData.encode");
		return null;
	}
	,fillRect: function(rect,color) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		this.__syncImageData();
		if(rect.x == 0 && rect.y == 0 && rect.width == this.width && rect.height == this.height) {
			if(this.transparent && (color & -16777216) == 0) {
				this.__sourceCanvas.width = this.width;
				return;
			}
		}
		this.__fillRect(rect,color);
	}
	,floodFill: function(x,y,color) {
		if(!this.__valid) return;
		this.__convertToCanvas();
		this.__createImageData();
		var data = this.__sourceImageData.data;
		var offset = y * (this.width * 4) + x * 4;
		var hitColorR = data[offset];
		var hitColorG = data[offset + 1];
		var hitColorB = data[offset + 2];
		var hitColorA;
		if(this.transparent) hitColorA = data[offset + 3]; else hitColorA = 255;
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a;
		if(this.transparent) a = (color & -16777216) >>> 24; else a = 255;
		if(hitColorR == r && hitColorG == g && hitColorB == b && hitColorA == a) return;
		var dx = [0,-1,1,0];
		var dy = [-1,0,0,1];
		var queue = new Array();
		queue.push(x);
		queue.push(y);
		while(queue.length > 0) {
			var curPointY = queue.pop();
			var curPointX = queue.pop();
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				var nextPointX = curPointX + dx[i];
				var nextPointY = curPointY + dy[i];
				if(nextPointX < 0 || nextPointY < 0 || nextPointX >= this.width || nextPointY >= this.height) continue;
				var nextPointOffset = (nextPointY * this.width + nextPointX) * 4;
				if(data[nextPointOffset] == hitColorR && data[nextPointOffset + 1] == hitColorG && data[nextPointOffset + 2] == hitColorB && data[nextPointOffset + 3] == hitColorA) {
					data[nextPointOffset] = r;
					data[nextPointOffset + 1] = g;
					data[nextPointOffset + 2] = b;
					data[nextPointOffset + 3] = a;
					queue.push(nextPointX);
					queue.push(nextPointY);
				}
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,generateFilterRect: function(sourceRect,filter) {
		return sourceRect.clone();
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		return this.rect.clone();
	}
	,getPixel: function(x,y) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		return this.__sourceImageData.data[offset] << 16 | this.__sourceImageData.data[offset + 1] << 8 | this.__sourceImageData.data[offset + 2];
	}
	,getPixel32: function(x,y) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return 0;
		this.__convertToCanvas();
		this.__createImageData();
		return this.__getInt32(4 * y * this.width + x * 4,this.__sourceImageData.data);
	}
	,getPixels: function(rect) {
		if(!this.__valid) return null;
		this.__convertToCanvas();
		this.__createImageData();
		var byteArray = new openfl.utils.ByteArray();
		if(rect == null || rect.equals(this.rect)) {
			byteArray.set_length(this.__sourceImageData.data.length);
			byteArray.byteView.set(this.__sourceImageData.data);
		} else {
			var srcData = this.__sourceImageData.data;
			var srcStride = this.width * 4 | 0;
			var srcPosition = rect.x * 4 + srcStride * rect.y | 0;
			var srcRowOffset = srcStride - (4 * rect.width | 0);
			var srcRowEnd = 4 * (rect.x + rect.width) | 0;
			var length = 4 * rect.width * rect.height | 0;
			if(byteArray.allocated < length) byteArray.___resizeBuffer(byteArray.allocated = Std["int"](Math.max(length,byteArray.allocated * 2))); else if(byteArray.allocated > length) byteArray.___resizeBuffer(byteArray.allocated = length);
			byteArray.length = length;
			length;
			var _g = 0;
			while(_g < length) {
				var i = _g++;
				byteArray.__set(i,srcData[srcPosition++]);
				if(srcPosition % srcStride > srcRowEnd) srcPosition += srcRowOffset;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getVector: function(rect) {
		var pixels = this.getPixels(rect);
		var result = openfl._Vector.Vector_Impl_._new();
		var _g1 = 0;
		var _g = pixels.length / 4 | 0;
		while(_g1 < _g) {
			var i = _g1++;
			var x = pixels.readUnsignedInt();
			if(!result.fixed) {
				result.length++;
				if(result.data.length < result.length) {
					var data;
					var this1;
					this1 = new Array(result.data.length + 10);
					data = this1;
					haxe.ds._Vector.Vector_Impl_.blit(result.data,0,data,0,result.data.length);
					result.data = data;
				}
				result.data[result.length - 1] = x;
			}
			result.length;
		}
		return result;
	}
	,histogram: function(hRect) {
		var rect;
		if(hRect != null) rect = hRect; else rect = new openfl.geom.Rectangle(0,0,this.width,this.height);
		var pixels = this.getPixels(rect);
		var result;
		var _g = [];
		var _g1 = 0;
		while(_g1 < 4) {
			var i = _g1++;
			_g.push((function($this) {
				var $r;
				var _g2 = [];
				{
					var _g3 = 0;
					while(_g3 < 256) {
						var j = _g3++;
						_g2.push(0);
					}
				}
				$r = _g2;
				return $r;
			}(this)));
		}
		result = _g;
		var _g21 = 0;
		var _g11 = pixels.length;
		while(_g21 < _g11) {
			var i1 = _g21++;
			++result[i1 % 4][pixels.readUnsignedByte()];
		}
		return result;
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		if(!this.__valid) return false;
		openfl.Lib.notImplemented("BitmapData.hitTest");
		return false;
	}
	,lock: function() {
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		if(!this.__valid) return;
		openfl.Lib.notImplemented("BitmapData.noise");
	}
	,paletteMap: function(sourceBitmapData,sourceRect,destPoint,redArray,greenArray,blueArray,alphaArray) {
		var memory = new openfl.utils.ByteArray();
		var sw = sourceRect.width | 0;
		var sh = sourceRect.height | 0;
		memory.set_length(sw * sh * 4);
		memory = this.getPixels(sourceRect);
		memory.position = 0;
		openfl.Memory.select(memory);
		var position;
		var pixelValue;
		var r;
		var g;
		var b;
		var color;
		var _g1 = 0;
		var _g = sh * sw;
		while(_g1 < _g) {
			var i = _g1++;
			position = i * 4;
			pixelValue = openfl.Memory._setPositionTemporarily(position,function() {
				return openfl.Memory.gcRef.readInt();
			});
			r = pixelValue >> 8 & 255;
			g = pixelValue >> 16 & 255;
			b = pixelValue >> 24 & 255;
			color = openfl.display.BitmapData.__flipPixel(-16777216 | redArray[r] | greenArray[g] | blueArray[b]);
			openfl.Memory.setI32(position,color);
		}
		memory.position = 0;
		var destRect = new openfl.geom.Rectangle(destPoint.x,destPoint.y,sw,sh);
		this.setPixels(destRect,memory);
		openfl.Memory.select(null);
	}
	,perlinNoise: function(baseX,baseY,numOctaves,randomSeed,stitch,fractalNoise,channelOptions,grayScale,offsets) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		openfl.Lib.notImplemented("BitmapData.perlinNoise");
	}
	,scroll: function(x,y) {
		openfl.Lib.notImplemented("BitmapData.scroll");
	}
	,setVector: function(rect,inputVector) {
		var byteArray = new openfl.utils.ByteArray();
		byteArray.set_length(inputVector.length * 4);
		var _g = 0;
		while(_g < inputVector.length) {
			var color = inputVector.data[_g];
			++_g;
			byteArray.writeUnsignedInt(color);
		}
		byteArray.position = 0;
		this.setPixels(rect,byteArray);
	}
	,setPixel: function(x,y,color) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		this.__sourceImageData.data[offset] = (color & 16711680) >>> 16;
		this.__sourceImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.__sourceImageData.data[offset + 2] = color & 255;
		if(this.transparent) this.__sourceImageData.data[offset + 3] = 255;
		this.__sourceImageDataChanged = true;
	}
	,setPixel32: function(x,y,color) {
		if(!this.__valid || x < 0 || y < 0 || x >= this.width || y >= this.height) return;
		this.__convertToCanvas();
		this.__createImageData();
		var offset = 4 * y * this.width + x * 4;
		this.__sourceImageData.data[offset] = (color & 16711680) >>> 16;
		this.__sourceImageData.data[offset + 1] = (color & 65280) >>> 8;
		this.__sourceImageData.data[offset + 2] = color & 255;
		if(this.transparent) this.__sourceImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.__sourceImageData.data[offset + 3] = 255;
		this.__sourceImageDataChanged = true;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.__clipRect(rect);
		if(!this.__valid || rect == null) return;
		this.__convertToCanvas();
		var len = Math.round(4 * rect.width * rect.height);
		if(rect.x == 0 && rect.y == 0 && rect.width == this.width && rect.height == this.height) {
			if(this.__sourceImageData == null) this.__sourceImageData = this.__sourceContext.createImageData(this.width,this.height);
			this.__sourceImageData.data.set(byteArray.byteView);
		} else {
			this.__createImageData();
			var offset = Math.round(4 * this.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var data = this.__sourceImageData.data;
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.width * 4) > boundR - 1) pos += this.width * 4 - boundR;
				data[pos] = byteArray.readByte();
				pos++;
			}
		}
		this.__sourceImageDataChanged = true;
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		if(sourceBitmapData == this && sourceRect.equals(this.rect) && destPoint.x == 0 && destPoint.y == 0) {
			var hits = 0;
			threshold = (threshold & 255) << 24 | (threshold >> 8 & 255) << 16 | (threshold >> 16 & 255) << 8 | threshold >> 24 & 255;
			color = (color & 255) << 24 | (color >> 8 & 255) << 16 | (color >> 16 & 255) << 8 | color >> 24 & 255;
			var memory = new openfl.utils.ByteArray();
			memory.set_length(this.width * this.height * 4);
			memory = this.getPixels(this.rect);
			memory.position = 0;
			openfl.Memory.select(memory);
			var thresholdMask = threshold & mask;
			var width_yy;
			var position;
			var pixelMask;
			var pixelValue;
			var i;
			var test;
			var _g1 = 0;
			var _g = this.height;
			while(_g1 < _g) {
				var yy = _g1++;
				width_yy = this.width * yy;
				var _g3 = 0;
				var _g2 = this.width;
				while(_g3 < _g2) {
					var xx = _g3++;
					position = (width_yy + xx) * 4;
					pixelValue = openfl.Memory._setPositionTemporarily(position,function() {
						return openfl.Memory.gcRef.readInt();
					});
					pixelMask = pixelValue & mask;
					i = openfl.display.BitmapData.__ucompare(pixelMask,thresholdMask);
					test = false;
					if(operation == "==") test = i == 0; else if(operation == "<") test = i == -1; else if(operation == ">") test = i == 1; else if(operation == "!=") test = i != 0; else if(operation == "<=") test = i == 0 || i == -1; else if(operation == ">=") test = i == 0 || i == 1;
					if(test) {
						openfl.Memory.setI32(position,color);
						hits++;
					}
				}
			}
			memory.position = 0;
			this.setPixels(this.rect,memory);
			openfl.Memory.select(null);
			return hits;
		} else {
			var sx = sourceRect.x | 0;
			var sy = sourceRect.y | 0;
			var sw = sourceBitmapData.width | 0;
			var sh = sourceBitmapData.height | 0;
			var dx = destPoint.x | 0;
			var dy = destPoint.y | 0;
			var bw = this.width - sw - dx;
			var bh = this.height - sh - dy;
			var dw;
			if(bw < 0) dw = sw + (this.width - sw - dx); else dw = sw;
			var dh;
			if(bw < 0) dh = sh + (this.height - sh - dy); else dh = sh;
			var hits1 = 0;
			threshold = (threshold & 255) << 24 | (threshold >> 8 & 255) << 16 | (threshold >> 16 & 255) << 8 | threshold >> 24 & 255;
			color = (color & 255) << 24 | (color >> 8 & 255) << 16 | (color >> 16 & 255) << 8 | color >> 24 & 255;
			var canvasMemory = sw * sh * 4;
			var sourceMemory = 0;
			if(copySource) sourceMemory = sw * sh * 4;
			var totalMemory = canvasMemory + sourceMemory;
			var memory1 = new openfl.utils.ByteArray();
			if(memory1.allocated < totalMemory) memory1.___resizeBuffer(memory1.allocated = Std["int"](Math.max(totalMemory,memory1.allocated * 2))); else if(memory1.allocated > totalMemory) memory1.___resizeBuffer(memory1.allocated = totalMemory);
			memory1.length = totalMemory;
			totalMemory;
			memory1.position = 0;
			var bitmapData = sourceBitmapData.clone();
			var pixels = bitmapData.getPixels(sourceRect);
			memory1.writeBytes(pixels);
			memory1.position = canvasMemory;
			if(copySource) memory1.writeBytes(pixels);
			memory1.position = 0;
			openfl.Memory.select(memory1);
			var thresholdMask1 = threshold & mask;
			var position1;
			var pixelMask1;
			var pixelValue1;
			var i1;
			var test1;
			var _g4 = 0;
			while(_g4 < dh) {
				var yy1 = _g4++;
				var _g11 = 0;
				while(_g11 < dw) {
					var xx1 = _g11++;
					position1 = (xx1 + sx + (yy1 + sy) * sw) * 4;
					pixelValue1 = openfl.Memory._setPositionTemporarily(position1,function() {
						return openfl.Memory.gcRef.readInt();
					});
					pixelMask1 = pixelValue1 & mask;
					i1 = openfl.display.BitmapData.__ucompare(pixelMask1,thresholdMask1);
					test1 = false;
					if(operation == "==") test1 = i1 == 0; else if(operation == "<") test1 = i1 == -1; else if(operation == ">") test1 = i1 == 1; else if(operation == "!=") test1 = i1 != 0; else if(operation == "<=") test1 = i1 == 0 || i1 == -1; else if(operation == ">=") test1 = i1 == 0 || i1 == 1;
					if(test1) {
						openfl.Memory.setI32(position1,color);
						hits1++;
					} else if(copySource) openfl.Memory.setI32(position1,openfl.Memory._setPositionTemporarily(canvasMemory + position1,function() {
						return openfl.Memory.gcRef.readInt();
					}));
				}
			}
			memory1.position = 0;
			bitmapData.setPixels(sourceRect,memory1);
			this.copyPixels(bitmapData,bitmapData.rect,destPoint);
			openfl.Memory.select(null);
			return hits1;
		}
	}
	,unlock: function(changeRect) {
	}
	,__clipRect: function(r) {
		if(r == null) return null;
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= this.width) {
			r.width -= r.x + r.width - this.width;
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= this.height) {
			r.height -= r.y + r.height - this.height;
			if(r.height <= 0) return null;
		}
		return r;
	}
	,__convertToCanvas: function() {
		if(this.__loading) return;
		if(this.__sourceImage != null) {
			if(this.__sourceCanvas == null) {
				this.__createCanvas(this.__sourceImage.width,this.__sourceImage.height);
				this.__sourceContext.drawImage(this.__sourceImage,0,0);
			}
			this.__sourceImage = null;
		}
	}
	,__createCanvas: function(width,height) {
		if(this.__sourceCanvas == null) {
			this.__sourceCanvas = window.document.createElement("canvas");
			this.__sourceCanvas.width = width;
			this.__sourceCanvas.height = height;
			if(!this.transparent) {
				if(!this.transparent) this.__sourceCanvas.setAttribute("moz-opaque","true");
				this.__sourceContext = this.__sourceCanvas.getContext ("2d", { alpha: false });
			} else this.__sourceContext = this.__sourceCanvas.getContext("2d");
			this.__sourceContext.mozImageSmoothingEnabled = false;
			this.__sourceContext.webkitImageSmoothingEnabled = false;
			this.__sourceContext.imageSmoothingEnabled = false;
			this.__valid = true;
		}
	}
	,__createImageData: function() {
		if(this.__sourceImageData == null) this.__sourceImageData = this.__sourceContext.getImageData(0,0,this.width,this.height);
	}
	,__fillRect: function(rect,color) {
		var a;
		if(this.transparent) a = (color & -16777216) >>> 24; else a = 255;
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		this.__sourceContext.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
		this.__sourceContext.fillRect(rect.x,rect.y,rect.width,rect.height);
	}
	,__getInt32: function(offset,data) {
		return (this.transparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,__loadFromBase64: function(base64,type,onload) {
		var _g = this;
		this.__sourceImage = window.document.createElement("img");
		var image_onLoaded = function(event) {
			if(_g.__sourceImage == null) _g.__sourceImage = event.target;
			_g.width = _g.__sourceImage.width;
			_g.height = _g.__sourceImage.height;
			_g.rect = new openfl.geom.Rectangle(0,0,_g.width,_g.height);
			_g.__valid = true;
			if(onload != null) onload(_g);
		};
		this.__sourceImage.addEventListener("load",image_onLoaded,false);
		this.__sourceImage.src = "data:" + type + ";base64," + base64;
	}
	,__loadFromBytes: function(bytes,rawAlpha,onload) {
		var _g = this;
		var type = "";
		if(openfl.display.BitmapData.__isPNG(bytes)) type = "image/png"; else if(openfl.display.BitmapData.__isJPG(bytes)) type = "image/jpeg"; else if(openfl.display.BitmapData.__isGIF(bytes)) type = "image/gif"; else throw new openfl.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		if(rawAlpha != null) this.__loadFromBase64(openfl.display.BitmapData.__base64Encode(bytes),type,function(_) {
			_g.__convertToCanvas();
			_g.__createImageData();
			var data = _g.__sourceImageData.data;
			var _g2 = 0;
			var _g1 = rawAlpha.length;
			while(_g2 < _g1) {
				var i = _g2++;
				data[i * 4 + 3] = rawAlpha.readUnsignedByte();
			}
			_g.__sourceImageDataChanged = true;
			if(onload != null) onload(_g);
		}); else this.__loadFromBase64(openfl.display.BitmapData.__base64Encode(bytes),type,onload);
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__valid) return;
		this.__syncImageData();
		var context = renderSession.context;
		if(this.__worldTransform == null) this.__worldTransform = new openfl.geom.Matrix();
		context.globalAlpha = 1;
		var transform = this.__worldTransform;
		if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
		if(this.__sourceImage != null) context.drawImage(this.__sourceImage,0,0); else context.drawImage(this.__sourceCanvas,0,0);
	}
	,__renderMask: function(renderSession) {
	}
	,__syncImageData: function() {
		if(this.__sourceImageDataChanged) {
			this.__sourceContext.putImageData(this.__sourceImageData,0,0);
			this.__sourceImageData = null;
			this.__sourceImageDataChanged = false;
		}
	}
	,__updateChildren: function(transformOnly) {
	}
	,__class__: openfl.display.BitmapData
};
com.ie.blitz.blitzone.screens.BackgroundBD = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	openfl.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(com.ie.blitz.blitzone.screens.BackgroundBD.preload != null) {
		this.__sourceImage = com.ie.blitz.blitzone.screens.BackgroundBD.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(com.ie.blitz.blitzone.screens.BackgroundBD.resourceName),com.ie.blitz.blitzone.screens.BackgroundBD.resourceType,function(b) {
		if(com.ie.blitz.blitzone.screens.BackgroundBD.preload == null) com.ie.blitz.blitzone.screens.BackgroundBD.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["com.ie.blitz.blitzone.screens.BackgroundBD"] = com.ie.blitz.blitzone.screens.BackgroundBD;
com.ie.blitz.blitzone.screens.BackgroundBD.__name__ = ["com","ie","blitz","blitzone","screens","BackgroundBD"];
com.ie.blitz.blitzone.screens.BackgroundBD.preload = null;
com.ie.blitz.blitzone.screens.BackgroundBD.__super__ = openfl.display.BitmapData;
com.ie.blitz.blitzone.screens.BackgroundBD.prototype = $extend(openfl.display.BitmapData.prototype,{
	__class__: com.ie.blitz.blitzone.screens.BackgroundBD
});
com.ie.blitz.blitzone.screens.LoaderBar = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	openfl.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(com.ie.blitz.blitzone.screens.LoaderBar.preload != null) {
		this.__sourceImage = com.ie.blitz.blitzone.screens.LoaderBar.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(com.ie.blitz.blitzone.screens.LoaderBar.resourceName),com.ie.blitz.blitzone.screens.LoaderBar.resourceType,function(b) {
		if(com.ie.blitz.blitzone.screens.LoaderBar.preload == null) com.ie.blitz.blitzone.screens.LoaderBar.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["com.ie.blitz.blitzone.screens.LoaderBar"] = com.ie.blitz.blitzone.screens.LoaderBar;
com.ie.blitz.blitzone.screens.LoaderBar.__name__ = ["com","ie","blitz","blitzone","screens","LoaderBar"];
com.ie.blitz.blitzone.screens.LoaderBar.preload = null;
com.ie.blitz.blitzone.screens.LoaderBar.__super__ = openfl.display.BitmapData;
com.ie.blitz.blitzone.screens.LoaderBar.prototype = $extend(openfl.display.BitmapData.prototype,{
	__class__: com.ie.blitz.blitzone.screens.LoaderBar
});
com.ie.blitz.blitzone.screens.Label = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	openfl.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(com.ie.blitz.blitzone.screens.Label.preload != null) {
		this.__sourceImage = com.ie.blitz.blitzone.screens.Label.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(com.ie.blitz.blitzone.screens.Label.resourceName),com.ie.blitz.blitzone.screens.Label.resourceType,function(b) {
		if(com.ie.blitz.blitzone.screens.Label.preload == null) com.ie.blitz.blitzone.screens.Label.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["com.ie.blitz.blitzone.screens.Label"] = com.ie.blitz.blitzone.screens.Label;
com.ie.blitz.blitzone.screens.Label.__name__ = ["com","ie","blitz","blitzone","screens","Label"];
com.ie.blitz.blitzone.screens.Label.preload = null;
com.ie.blitz.blitzone.screens.Label.__super__ = openfl.display.BitmapData;
com.ie.blitz.blitzone.screens.Label.prototype = $extend(openfl.display.BitmapData.prototype,{
	__class__: com.ie.blitz.blitzone.screens.Label
});
com.ie.blitz.blitzone.screens.Preloader = function() {
	this.graphicCounter = 0;
	this.dotCounter = 0;
	NMEPreloader.call(this);
	this.removeChild(this.progress);
	this.background = new openfl.display.Bitmap(new com.ie.blitz.blitzone.screens.BackgroundBD(1280,768));
	this.addChildAt(this.background,0);
	this.bar = new openfl.display.Bitmap(new com.ie.blitz.blitzone.screens.LoaderBar(637,56));
	this.addChild(this.bar);
	this.bar.set_x(303);
	this.bar.set_y(385);
	this.bar.set_scaleX(0);
	this.label = new openfl.display.Bitmap(new com.ie.blitz.blitzone.screens.Label(279,66));
	this.addChild(this.label);
	this.label.set_x(501);
	this.label.set_y(251);
};
$hxClasses["com.ie.blitz.blitzone.screens.Preloader"] = com.ie.blitz.blitzone.screens.Preloader;
com.ie.blitz.blitzone.screens.Preloader.__name__ = ["com","ie","blitz","blitzone","screens","Preloader"];
com.ie.blitz.blitzone.screens.Preloader.__super__ = NMEPreloader;
com.ie.blitz.blitzone.screens.Preloader.prototype = $extend(NMEPreloader.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		this.bar.set_scaleX(bytesLoaded / bytesTotal);
	}
	,onLoaded: function() {
		NMEPreloader.prototype.onLoaded.call(this);
	}
	,__class__: com.ie.blitz.blitzone.screens.Preloader
});
com.indigogaming = {};
com.indigogaming.wnpdispatcher = {};
com.indigogaming.wnpdispatcher.WNPEvent = function(type,canBubble,cancelable) {
	Event.call(this,type,canBubble,cancelable);
};
$hxClasses["com.indigogaming.wnpdispatcher.WNPEvent"] = com.indigogaming.wnpdispatcher.WNPEvent;
com.indigogaming.wnpdispatcher.WNPEvent.__name__ = ["com","indigogaming","wnpdispatcher","WNPEvent"];
com.indigogaming.wnpdispatcher.WNPEvent.__super__ = Event;
com.indigogaming.wnpdispatcher.WNPEvent.prototype = $extend(Event.prototype,{
	__class__: com.indigogaming.wnpdispatcher.WNPEvent
});
com.indigogaming.wnpdispatcher.WNPInterface = function() {
	openfl.events.EventDispatcher.call(this);
};
$hxClasses["com.indigogaming.wnpdispatcher.WNPInterface"] = com.indigogaming.wnpdispatcher.WNPInterface;
com.indigogaming.wnpdispatcher.WNPInterface.__name__ = ["com","indigogaming","wnpdispatcher","WNPInterface"];
com.indigogaming.wnpdispatcher.WNPInterface.__properties__ = {get_instance:"get_instance"}
com.indigogaming.wnpdispatcher.WNPInterface.instance = null;
com.indigogaming.wnpdispatcher.WNPInterface.get_instance = function() {
	if(com.indigogaming.wnpdispatcher.WNPInterface.instance == null) com.indigogaming.wnpdispatcher.WNPInterface.instance = new com.indigogaming.wnpdispatcher.WNPInterface();
	return com.indigogaming.wnpdispatcher.WNPInterface.instance;
};
com.indigogaming.wnpdispatcher.WNPInterface.pause = $hx_exports.pause = function() {
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().dispatchEvent(new openfl.events.Event("pause"));
};
com.indigogaming.wnpdispatcher.WNPInterface.unpause = $hx_exports.unpause = function() {
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().dispatchEvent(new openfl.events.Event("unpause"));
};
com.indigogaming.wnpdispatcher.WNPInterface.mute = $hx_exports.mute = function() {
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().dispatchEvent(new openfl.events.Event("mute"));
};
com.indigogaming.wnpdispatcher.WNPInterface.unmute = $hx_exports.unmute = function() {
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().dispatchEvent(new openfl.events.Event("unmute"));
};
com.indigogaming.wnpdispatcher.WNPInterface.reload = $hx_exports.reload = function() {
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().dispatchEvent(new openfl.events.Event("reload"));
};
com.indigogaming.wnpdispatcher.WNPInterface.__super__ = openfl.events.EventDispatcher;
com.indigogaming.wnpdispatcher.WNPInterface.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	submitRank: function(rank) {
		switch(rank[1]) {
		case 0:
			location.href = "cnwap://userperform:0";
			break;
		case 1:
			location.href = "cnwap://userperform:1";
			break;
		case 2:
			location.href = "cnwap://userperform:2";
			break;
		case 3:
			location.href = "cnwap://userperform:3";
			break;
		case 4:
			location.href = "cnwap://userperform:4";
			break;
		case 5:
			location.href = "cnwap://userperform:5";
			break;
		}
	}
	,__class__: com.indigogaming.wnpdispatcher.WNPInterface
});
com.indigogaming.wnpdispatcher.WNPRank = $hxClasses["com.indigogaming.wnpdispatcher.WNPRank"] = { __ename__ : ["com","indigogaming","wnpdispatcher","WNPRank"], __constructs__ : ["None","Poor","Ok","Good","Great","Outstanding"] };
com.indigogaming.wnpdispatcher.WNPRank.None = ["None",0];
com.indigogaming.wnpdispatcher.WNPRank.None.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.None.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
com.indigogaming.wnpdispatcher.WNPRank.Poor = ["Poor",1];
com.indigogaming.wnpdispatcher.WNPRank.Poor.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.Poor.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
com.indigogaming.wnpdispatcher.WNPRank.Ok = ["Ok",2];
com.indigogaming.wnpdispatcher.WNPRank.Ok.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.Ok.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
com.indigogaming.wnpdispatcher.WNPRank.Good = ["Good",3];
com.indigogaming.wnpdispatcher.WNPRank.Good.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.Good.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
com.indigogaming.wnpdispatcher.WNPRank.Great = ["Great",4];
com.indigogaming.wnpdispatcher.WNPRank.Great.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.Great.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
com.indigogaming.wnpdispatcher.WNPRank.Outstanding = ["Outstanding",5];
com.indigogaming.wnpdispatcher.WNPRank.Outstanding.toString = $estr;
com.indigogaming.wnpdispatcher.WNPRank.Outstanding.__enum__ = com.indigogaming.wnpdispatcher.WNPRank;
com.jamdevera = {};
com.jamdevera.utils = {};
com.jamdevera.utils.ArrayUtils = function() {
};
$hxClasses["com.jamdevera.utils.ArrayUtils"] = com.jamdevera.utils.ArrayUtils;
com.jamdevera.utils.ArrayUtils.__name__ = ["com","jamdevera","utils","ArrayUtils"];
com.jamdevera.utils.ArrayUtils.swap = function(array,firstIndex,secondIndex) {
	var temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};
com.jamdevera.utils.ArrayUtils.shuffle = function(array) {
	var limit = array.length;
	var i;
	var target;
	var temp;
	var _g = 0;
	while(_g < limit) {
		var i1 = _g++;
		target = Std["int"](Math.random() * limit);
		com.jamdevera.utils.ArrayUtils.swap(array,i1,target);
	}
};
com.jamdevera.utils.ArrayUtils.isAnElementOf = function(array,element) {
	if(com.jamdevera.utils.ArrayUtils.indexOf(array,element) != -1) return true; else return false;
};
com.jamdevera.utils.ArrayUtils.indexOf = function(array,element) {
	var i;
	var len = array.length;
	var _g = 0;
	while(_g < len) {
		var i1 = _g++;
		if(array[i1] == element) return i1;
	}
	return -1;
};
com.jamdevera.utils.ArrayUtils.lastIndexOf = function(array,element) {
	var i;
	var lastI = -1;
	var len = array.length;
	var _g = 0;
	while(_g < len) {
		var i1 = _g++;
		if(array[i1] == element) lastI = i1;
	}
	return lastI;
};
com.jamdevera.utils.ArrayUtils.prototype = {
	__class__: com.jamdevera.utils.ArrayUtils
};
openfl.geom = {};
openfl.geom.ColorTransform = function(redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset) {
	if(alphaOffset == null) alphaOffset = 0;
	if(blueOffset == null) blueOffset = 0;
	if(greenOffset == null) greenOffset = 0;
	if(redOffset == null) redOffset = 0;
	if(alphaMultiplier == null) alphaMultiplier = 1;
	if(blueMultiplier == null) blueMultiplier = 1;
	if(greenMultiplier == null) greenMultiplier = 1;
	if(redMultiplier == null) redMultiplier = 1;
	this.redMultiplier = redMultiplier;
	this.greenMultiplier = greenMultiplier;
	this.blueMultiplier = blueMultiplier;
	this.alphaMultiplier = alphaMultiplier;
	this.redOffset = redOffset;
	this.greenOffset = greenOffset;
	this.blueOffset = blueOffset;
	this.alphaOffset = alphaOffset;
};
$hxClasses["openfl.geom.ColorTransform"] = openfl.geom.ColorTransform;
openfl.geom.ColorTransform.__name__ = ["openfl","geom","ColorTransform"];
openfl.geom.ColorTransform.prototype = {
	concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,__class__: openfl.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
};
com.jamdevera.utils.DisplayUtils = function() {
};
$hxClasses["com.jamdevera.utils.DisplayUtils"] = com.jamdevera.utils.DisplayUtils;
com.jamdevera.utils.DisplayUtils.__name__ = ["com","jamdevera","utils","DisplayUtils"];
com.jamdevera.utils.DisplayUtils.createBitmap = function(locationString) {
	var bitmap;
	var assetData = openfl.Assets.getBitmapData(locationString,true);
	bitmap = new openfl.display.Bitmap(assetData,openfl.display.PixelSnapping.ALWAYS,true);
	return bitmap;
};
com.jamdevera.utils.DisplayUtils.resetMatrix = function(matrix) {
	matrix.a = 1;
	matrix.b = 0;
	matrix.c = 0;
	matrix.d = 1;
	matrix.tx = 0;
	matrix.ty = 0;
};
com.jamdevera.utils.DisplayUtils.createBitmapFromBitmapData = function(bitmapData) {
	var bitmap;
	var assetData = bitmapData;
	bitmap = new openfl.display.Bitmap(assetData,openfl.display.PixelSnapping.ALWAYS,true);
	return bitmap;
};
com.jamdevera.utils.DisplayUtils.removeAllChildren = function(displayObjectContainer,deep) {
	if(deep == null) deep = true;
	var child;
	while(displayObjectContainer.get_numChildren() > 0) {
		if(deep) {
			child = displayObjectContainer.getChildAt(0);
			if(js.Boot.__instanceof(child,openfl.display.DisplayObjectContainer)) com.jamdevera.utils.DisplayUtils.removeAllChildren(js.Boot.__cast(child , openfl.display.DisplayObjectContainer));
		}
		displayObjectContainer.removeChildAt(0);
	}
};
com.jamdevera.utils.DisplayUtils.createSpriteFromBitmapAsset = function(locationString,horizontalFlipped) {
	if(horizontalFlipped == null) horizontalFlipped = false;
	var sprite;
	var bitmap = com.jamdevera.utils.DisplayUtils.createBitmap(locationString);
	bitmap.set_scaleX(horizontalFlipped?-1:1);
	bitmap.set_x(horizontalFlipped?bitmap.get_width():0);
	sprite = new openfl.display.Sprite();
	sprite.addChild(bitmap);
	return sprite;
};
com.jamdevera.utils.DisplayUtils.timeToString = function(time,showMinutes,showSeconds) {
	if(showSeconds == null) showSeconds = true;
	if(showMinutes == null) showMinutes = false;
	var seconds = Std.string((time / 60 | 0) % 60);
	var minutes = Std.string((time / 60 | 0) / 60 | 0);
	var returnString = "";
	if(showMinutes) returnString = returnString + minutes + ":";
	if(showSeconds) {
		if(seconds.length == 1) returnString = returnString + "0";
		returnString = returnString + seconds;
		if(((time / 60 | 0) / 60 | 0) > 0 && !showMinutes) returnString = "60";
	}
	return returnString;
};
com.jamdevera.utils.DisplayUtils.createTextField = function(font,size,color,content) {
	if(content == null) content = "";
	if(color == null) color = 0;
	if(size == null) size = 0.0;
	var textFormat = new openfl.text.TextFormat();
	if(font != null) textFormat.font = font.fontName; else textFormat.font = "_sans";
	textFormat.size = size;
	textFormat.color = color;
	var textField = new openfl.text.TextField();
	textField.set_defaultTextFormat(textFormat);
	textField.embedFonts = true;
	textField.selectable = false;
	textField.mouseEnabled = false;
	textField.multiline = true;
	textField.set_autoSize(openfl.text.TextFieldAutoSize.LEFT);
	textField.set_text(content);
	return textField;
};
com.jamdevera.utils.DisplayUtils.swapPosition = function(duration,displayObject1,displayObject2) {
	var initX1 = displayObject1.get_x();
	var initY1 = displayObject1.get_y();
	var initX2 = displayObject2.get_x();
	var initY2 = displayObject2.get_y();
	motion.Actuate.tween(displayObject1,duration,{ x : initX2, y : initY2});
	motion.Actuate.tween(displayObject2,duration,{ x : initX1, y : initY1});
};
com.jamdevera.utils.DisplayUtils.convertToNoneAutoSizeCenteredAcrossWidth = function(textField,width) {
	var textFormat;
	textField.set_wordWrap(true);
	textField.set_autoSize(openfl.text.TextFieldAutoSize.NONE);
	textField.set_width(width);
	textFormat = textField.get_defaultTextFormat();
	textFormat.align = openfl.text.TextFormatAlign.CENTER;
	textField.setTextFormat(textFormat);
	textField.set_defaultTextFormat(textFormat);
	return textField;
};
com.jamdevera.utils.DisplayUtils.wrapObject = function(object) {
	var sprite = new openfl.display.Sprite();
	sprite.addChild(object);
	return sprite;
};
com.jamdevera.utils.DisplayUtils.prototype = {
	__class__: com.jamdevera.utils.DisplayUtils
};
openfl.text.TextField = function() {
	openfl.display.InteractiveObject.call(this);
	this.__width = 100;
	this.__height = 100;
	this.__text = "";
	this.set_type(openfl.text.TextFieldType.DYNAMIC);
	this.set_autoSize(openfl.text.TextFieldAutoSize.NONE);
	this.displayAsPassword = false;
	this.embedFonts = false;
	this.selectable = true;
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = openfl.text.GridFitType.PIXEL;
	this.maxChars = 0;
	this.multiline = false;
	this.sharpness = 0;
	this.scrollH = 0;
	this.scrollV = 1;
	this.set_wordWrap(false);
	if(openfl.text.TextField.__defaultTextFormat == null) {
		openfl.text.TextField.__defaultTextFormat = new openfl.text.TextFormat("Times New Roman",12,0,false,false,false,"","",openfl.text.TextFormatAlign.LEFT,0,0,0,0);
		openfl.text.TextField.__defaultTextFormat.blockIndent = 0;
		openfl.text.TextField.__defaultTextFormat.bullet = false;
		openfl.text.TextField.__defaultTextFormat.letterSpacing = 0;
		openfl.text.TextField.__defaultTextFormat.kerning = false;
	}
	this.__textFormat = openfl.text.TextField.__defaultTextFormat.clone();
};
$hxClasses["openfl.text.TextField"] = openfl.text.TextField;
openfl.text.TextField.__name__ = ["openfl","text","TextField"];
openfl.text.TextField.__defaultTextFormat = null;
openfl.text.TextField.__super__ = openfl.display.InteractiveObject;
openfl.text.TextField.prototype = $extend(openfl.display.InteractiveObject.prototype,{
	appendText: function(text) {
		var _g = this;
		_g.set_text(_g.get_text() + text);
	}
	,getCharBoundaries: function(a) {
		openfl.Lib.notImplemented("TextField.getCharBoundaries");
		return null;
	}
	,getCharIndexAtPoint: function(x,y) {
		openfl.Lib.notImplemented("TextField.getCharIndexAtPoint");
		return 0;
	}
	,getLineIndexAtPoint: function(x,y) {
		openfl.Lib.notImplemented("TextField.getLineIndexAtPoint");
		return 0;
	}
	,getLineMetrics: function(lineIndex) {
		openfl.Lib.notImplemented("TextField.getLineMetrics");
		return null;
	}
	,getLineOffset: function(lineIndex) {
		openfl.Lib.notImplemented("TextField.getLineOffset");
		return 0;
	}
	,getLineText: function(lineIndex) {
		openfl.Lib.notImplemented("TextField.getLineText");
		return "";
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return this.__textFormat.clone();
	}
	,setSelection: function(beginIndex,endIndex) {
		openfl.Lib.notImplemented("TextField.setSelection");
	}
	,setTextFormat: function(format,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		if(format.font != null) this.__textFormat.font = format.font;
		if(format.size != null) this.__textFormat.size = format.size;
		if(format.color != null) this.__textFormat.color = format.color;
		if(format.bold != null) this.__textFormat.bold = format.bold;
		if(format.italic != null) this.__textFormat.italic = format.italic;
		if(format.underline != null) this.__textFormat.underline = format.underline;
		if(format.url != null) this.__textFormat.url = format.url;
		if(format.target != null) this.__textFormat.target = format.target;
		if(format.align != null) this.__textFormat.align = format.align;
		if(format.leftMargin != null) this.__textFormat.leftMargin = format.leftMargin;
		if(format.rightMargin != null) this.__textFormat.rightMargin = format.rightMargin;
		if(format.indent != null) this.__textFormat.indent = format.indent;
		if(format.leading != null) this.__textFormat.leading = format.leading;
		if(format.blockIndent != null) this.__textFormat.blockIndent = format.blockIndent;
		if(format.bullet != null) this.__textFormat.bullet = format.bullet;
		if(format.kerning != null) this.__textFormat.kerning = format.kerning;
		if(format.letterSpacing != null) this.__textFormat.letterSpacing = format.letterSpacing;
		if(format.tabStops != null) this.__textFormat.tabStops = format.tabStops;
		this.__dirty = true;
	}
	,__getBounds: function(rect,matrix) {
		var bounds = new openfl.geom.Rectangle(0,0,this.__width,this.__height);
		bounds.transform(this.__worldTransform);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__getFont: function(format) {
		var font;
		if(format.italic) font = "italic "; else font = "normal ";
		font += "normal ";
		if(format.bold) font += "bold "; else font += "normal ";
		font += format.size + "px";
		font += "/" + (format.size + format.leading + 4) + "px ";
		font += "'" + (function($this) {
			var $r;
			var _g = format.font;
			$r = (function($this) {
				var $r;
				switch(_g) {
				case "_sans":
					$r = "sans-serif";
					break;
				case "_serif":
					$r = "serif";
					break;
				case "_typewriter":
					$r = "monospace";
					break;
				default:
					$r = format.font;
				}
				return $r;
			}($this));
			return $r;
		}(this));
		font += "'";
		return font;
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || interactiveOnly && !this.mouseEnabled) return false;
		var point = this.globalToLocal(new openfl.geom.Point(x,y));
		if(point.x > 0 && point.y > 0 && point.x <= this.__width && point.y <= this.__height) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__measureText: function() {
		if(this.__ranges == null) {
			this.__context.font = this.__getFont(this.__textFormat);
			return [this.__context.measureText(this.__text).width];
		} else {
			var measurements = [];
			var _g = 0;
			var _g1 = this.__ranges;
			while(_g < _g1.length) {
				var range = _g1[_g];
				++_g;
				this.__context.font = this.__getFont(range.format);
				measurements.push(this.__context.measureText(this.get_text().substring(range.start,range.end)).width);
			}
			return measurements;
		}
	}
	,__measureTextWithDOM: function() {
		var div = this.__div;
		if(this.__div == null) {
			div = window.document.createElement("div");
			div.innerHTML = this.__text;
			div.style.setProperty("font",this.__getFont(this.__textFormat),null);
			div.style.position = "absolute";
			div.style.top = "110%";
			window.document.body.appendChild(div);
		}
		this.__measuredWidth = div.clientWidth;
		if(this.__div == null) div.style.width = Std.string(this.__width) + "px";
		this.__measuredHeight = div.clientHeight;
		if(this.__div == null) window.document.body.removeChild(div);
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__dirty) {
			if((this.__text == null || this.__text == "") && !this.background && !this.border || (this.get_width() <= 0 || this.get_height() <= 0) && this.autoSize != openfl.text.TextFieldAutoSize.LEFT) {
				this.__canvas = null;
				this.__context = null;
			} else {
				if(this.__canvas == null) {
					this.__canvas = window.document.createElement("canvas");
					this.__context = this.__canvas.getContext("2d");
				}
				if(this.__text != null && this.__text != "") {
					var measurements = this.__measureText();
					var textWidth = 0.0;
					var _g = 0;
					while(_g < measurements.length) {
						var measurement = measurements[_g];
						++_g;
						textWidth += measurement;
					}
					if(this.autoSize == openfl.text.TextFieldAutoSize.LEFT) this.__width = textWidth + 4;
					this.__canvas.width = Math.ceil(this.__width);
					this.__canvas.height = Math.ceil(this.__height);
					if(this.border || this.background) {
						this.__context.rect(0.5,0.5,this.__width - 1,this.__height - 1);
						if(this.background) {
							this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor,6);
							this.__context.fill();
						}
						if(this.border) {
							this.__context.lineWidth = 1;
							this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor,6);
							this.__context.stroke();
						}
					}
					if(this.__ranges == null) this.__renderText(this.get_text(),this.__textFormat,0); else {
						var currentIndex = 0;
						var range;
						var offsetX = 0.0;
						var _g1 = 0;
						var _g2 = this.__ranges.length;
						while(_g1 < _g2) {
							var i = _g1++;
							range = this.__ranges[i];
							this.__renderText(this.get_text().substring(range.start,range.end),range.format,offsetX);
							offsetX += measurements[i];
						}
					}
				} else {
					if(this.autoSize == openfl.text.TextFieldAutoSize.LEFT) this.__width = 4;
					this.__canvas.width = Math.ceil(this.__width);
					this.__canvas.height = Math.ceil(this.__height);
					if(this.border || this.background) {
						if(this.border) this.__context.rect(0.5,0.5,this.__width - 1,this.__height - 1); else this.__context.rect(0,0,this.__width,this.__height);
						if(this.background) {
							this.__context.fillStyle = "#" + StringTools.hex(this.backgroundColor,6);
							this.__context.fill();
						}
						if(this.border) {
							this.__context.lineWidth = 1;
							this.__context.lineCap = "square";
							this.__context.strokeStyle = "#" + StringTools.hex(this.borderColor,6);
							this.__context.stroke();
						}
					}
				}
			}
			this.__dirty = false;
		}
		if(this.__canvas != null) {
			var context = renderSession.context;
			context.globalAlpha = this.__worldAlpha;
			var transform = this.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			if(this.get_scrollRect() == null) context.drawImage(this.__canvas,0,0); else context.drawImage(this.__canvas,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height);
		}
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable) {
			if(this.__dirty || this.__div == null) {
				if(this.__text != "" || this.background || this.border) {
					if(this.__div == null) {
						this.__div = window.document.createElement("div");
						this.__initializeElement(this.__div,renderSession);
						this.__style.setProperty("cursor","inherit",null);
					}
					this.__div.innerHTML = this.__text;
					if(this.background) this.__style.setProperty("background-color","#" + StringTools.hex(this.backgroundColor,6),null); else this.__style.removeProperty("background-color");
					if(this.border) this.__style.setProperty("border","solid 1px #" + StringTools.hex(this.borderColor,6),null); else this.__style.removeProperty("border");
					this.__style.setProperty("font",this.__getFont(this.__textFormat),null);
					this.__style.setProperty("color","#" + StringTools.hex(this.__textFormat.color,6),null);
					if(this.autoSize != openfl.text.TextFieldAutoSize.NONE) this.__style.setProperty("width","auto",null); else this.__style.setProperty("width",this.__width + "px",null);
					this.__style.setProperty("height",this.__height + "px",null);
					var _g = this.__textFormat.align;
					switch(_g[1]) {
					case 3:
						this.__style.setProperty("text-align","center",null);
						break;
					case 1:
						this.__style.setProperty("text-align","right",null);
						break;
					default:
						this.__style.setProperty("text-align","left",null);
					}
					this.__dirty = false;
				} else if(this.__div != null) {
					renderSession.element.removeChild(this.__div);
					this.__div = null;
				}
			}
			if(this.__div != null) this.__applyStyle(renderSession,true,true,false);
		} else if(this.__div != null) {
			renderSession.element.removeChild(this.__div);
			this.__div = null;
			this.__style = null;
		}
	}
	,__renderText: function(text,format,offsetX) {
		this.__context.font = this.__getFont(format);
		this.__context.textBaseline = "top";
		this.__context.fillStyle = "#" + StringTools.hex(format.color,6);
		var lines = text.split("\n");
		var yOffset = 0;
		var _g = 0;
		while(_g < lines.length) {
			var line = lines[_g];
			++_g;
			var _g1 = format.align;
			switch(_g1[1]) {
			case 3:
				this.__context.textAlign = "center";
				this.__context.fillText(line,this.__width / 2,2 + yOffset,this.__width - 4);
				break;
			case 1:
				this.__context.textAlign = "end";
				this.__context.fillText(line,this.__width - 2,2 + yOffset,this.__width - 4);
				break;
			default:
				this.__context.textAlign = "start";
				this.__context.fillText(line,2 + offsetX,2 + yOffset,this.__width - 4);
			}
			yOffset += this.get_textHeight();
		}
	}
	,set_autoSize: function(value) {
		if(value != this.autoSize) this.__dirty = true;
		return this.autoSize = value;
	}
	,set_background: function(value) {
		if(value != this.background) this.__dirty = true;
		return this.background = value;
	}
	,set_backgroundColor: function(value) {
		if(value != this.backgroundColor) this.__dirty = true;
		return this.backgroundColor = value;
	}
	,set_border: function(value) {
		if(value != this.border) this.__dirty = true;
		return this.border = value;
	}
	,set_borderColor: function(value) {
		if(value != this.borderColor) this.__dirty = true;
		return this.borderColor = value;
	}
	,get_bottomScrollV: function() {
		return this.get_numLines();
	}
	,get_caretPos: function() {
		return 0;
	}
	,get_defaultTextFormat: function() {
		return this.__textFormat.clone();
	}
	,set_defaultTextFormat: function(value) {
		this.__textFormat.__merge(value);
		return value;
	}
	,get_height: function() {
		return this.__height * this.get_scaleY();
	}
	,set_height: function(value) {
		if(this.get_scaleY() != 1 || value != this.__height) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			this.__dirty = true;
		}
		this.set_scaleY(1);
		return this.__height = value;
	}
	,get_htmlText: function() {
		return this.__text;
	}
	,set_htmlText: function(value) {
		if(!this.__isHTML || this.__text != value) this.__dirty = true;
		this.__ranges = null;
		this.__isHTML = true;
		if(this.__div == null) {
			value = new EReg("<br>","g").replace(value,"\n");
			value = new EReg("<br/>","g").replace(value,"\n");
			var segments = value.split("<font");
			if(segments.length == 1) {
				value = new EReg("<.*?>","g").replace(value,"");
				return this.__text = value;
			} else {
				value = "";
				this.__ranges = [];
				var _g = 0;
				while(_g < segments.length) {
					var segment = segments[_g];
					++_g;
					if(segment == "") continue;
					var closeFontIndex = segment.indexOf("</font>");
					if(closeFontIndex > -1) {
						var start = segment.indexOf(">") + 1;
						var end = closeFontIndex;
						var format = this.__textFormat.clone();
						var faceIndex = segment.indexOf("face=");
						var colorIndex = segment.indexOf("color=");
						var sizeIndex = segment.indexOf("size=");
						if(faceIndex > -1 && faceIndex < start) {
							var len = segment.indexOf("\"",faceIndex);
							format.font = HxOverrides.substr(segment,faceIndex + 6,len);
						}
						if(colorIndex > -1 && colorIndex < start) format.color = Std.parseInt("0x" + HxOverrides.substr(segment,colorIndex + 8,6));
						if(sizeIndex > -1 && sizeIndex < start) format.size = Std.parseInt((function($this) {
							var $r;
							var len1 = segment.indexOf("\"",sizeIndex);
							$r = HxOverrides.substr(segment,sizeIndex + 6,len1);
							return $r;
						}(this)));
						var sub = segment.substring(start,end);
						sub = new EReg("<.*?>","g").replace(sub,"");
						this.__ranges.push(new openfl.text.TextFormatRange(format,value.length,value.length + sub.length));
						value += sub;
						if(closeFontIndex + 7 < segment.length) {
							sub = HxOverrides.substr(segment,closeFontIndex + 7,null);
							this.__ranges.push(new openfl.text.TextFormatRange(this.__textFormat,value.length,value.length + sub.length));
							value += sub;
						}
					} else {
						this.__ranges.push(new openfl.text.TextFormatRange(this.__textFormat,value.length,value.length + segment.length));
						value += segment;
					}
				}
			}
		}
		return this.__text = value;
	}
	,get_maxScrollH: function() {
		return 0;
	}
	,get_maxScrollV: function() {
		return 1;
	}
	,get_numLines: function() {
		if(this.get_text() != "" && this.get_text() != null) {
			var count = this.get_text().split("\n").length;
			if(this.__isHTML) count += this.get_text().split("<br>").length - 1;
			return count;
		}
		return 1;
	}
	,get_text: function() {
		if(this.__isHTML) {
		}
		return this.__text;
	}
	,set_text: function(value) {
		if(this.__isHTML || this.__text != value) this.__dirty = true;
		this.__ranges = null;
		this.__isHTML = false;
		return this.__text = value;
	}
	,get_textColor: function() {
		return this.__textFormat.color;
	}
	,set_textColor: function(value) {
		if(value != this.__textFormat.color) this.__dirty = true;
		if(this.__ranges != null) {
			var _g = 0;
			var _g1 = this.__ranges;
			while(_g < _g1.length) {
				var range = _g1[_g];
				++_g;
				range.format.color = value;
			}
		}
		return this.__textFormat.color = value;
	}
	,get_textWidth: function() {
		if(this.__canvas != null) {
			var sizes = this.__measureText();
			var total = 0;
			var _g = 0;
			while(_g < sizes.length) {
				var size = sizes[_g];
				++_g;
				total += size;
			}
			return total;
		} else if(this.__div != null) return this.__div.clientWidth; else {
			this.__measureTextWithDOM();
			return this.__measuredWidth;
		}
	}
	,get_textHeight: function() {
		if(this.__canvas != null) return this.__textFormat.size * 1.185; else if(this.__div != null) return this.__div.clientHeight; else {
			this.__measureTextWithDOM();
			return this.__measuredHeight + this.__textFormat.size * 0.185;
		}
	}
	,set_type: function(value) {
		return this.type = value;
	}
	,get_width: function() {
		if(this.autoSize == openfl.text.TextFieldAutoSize.LEFT) return (this.get_textWidth() + 4) * this.get_scaleX(); else return this.__width * this.get_scaleX();
	}
	,set_width: function(value) {
		if(this.get_scaleX() != 1 || this.__width != value) {
			if(!this.__transformDirty) {
				this.__transformDirty = true;
				openfl.display.DisplayObject.__worldTransformDirty++;
			}
			this.__dirty = true;
		}
		this.set_scaleX(1);
		return this.__width = value;
	}
	,get_wordWrap: function() {
		return this.wordWrap;
	}
	,set_wordWrap: function(value) {
		return this.wordWrap = value;
	}
	,__class__: openfl.text.TextField
	,__properties__: $extend(openfl.display.InteractiveObject.prototype.__properties__,{set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap",set_type:"set_type",get_textWidth:"get_textWidth",get_textHeight:"get_textHeight",set_textColor:"set_textColor",get_textColor:"get_textColor",set_text:"set_text",get_text:"get_text",get_numLines:"get_numLines",get_maxScrollV:"get_maxScrollV",get_maxScrollH:"get_maxScrollH",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",get_caretPos:"get_caretPos",get_bottomScrollV:"get_bottomScrollV",set_borderColor:"set_borderColor",set_border:"set_border",set_backgroundColor:"set_backgroundColor",set_background:"set_background",set_autoSize:"set_autoSize"})
});
com.jamdevera.utils.TraceUtil = function(inX,inY,textCol) {
	if(textCol == null) textCol = 0;
	if(inY == null) inY = 10.0;
	if(inX == null) inX = 10.0;
	openfl.text.TextField.call(this);
	this.set_x(inX);
	this.set_y(inY);
	this.selectable = false;
	this.set_defaultTextFormat(new openfl.text.TextFormat("_sans",12,textCol));
	this.set_text("FPS: ");
	this.set_wordWrap(true);
	this.multiline = true;
	this.set_autoSize(openfl.text.TextFieldAutoSize.LEFT);
	this._times = [];
	this._message = "";
	this.addEventListener(openfl.events.Event.ENTER_FRAME,$bind(this,this.handleEnterFrame));
};
$hxClasses["com.jamdevera.utils.TraceUtil"] = com.jamdevera.utils.TraceUtil;
com.jamdevera.utils.TraceUtil.__name__ = ["com","jamdevera","utils","TraceUtil"];
com.jamdevera.utils.TraceUtil.__super__ = openfl.text.TextField;
com.jamdevera.utils.TraceUtil.prototype = $extend(openfl.text.TextField.prototype,{
	log: function(message) {
		this._message = message;
	}
	,handleEnterFrame: function(e) {
		var now = haxe.Timer.stamp();
		var memConsumpt;
		this._times.push(now);
		while(this._times[0] < now - 1) this._times.shift();
		if(this.get_visible()) {
			memConsumpt = openfl.system.System.get_totalMemory() >> 20;
			this.set_text("FPS: " + this._times.length + " || " + memConsumpt + " MB\n" + this._message);
		}
	}
	,__class__: com.jamdevera.utils.TraceUtil
});
com.jamdevera.utils.sharedobject = {};
com.jamdevera.utils.sharedobject.SharedObjectItem = function() {
};
$hxClasses["com.jamdevera.utils.sharedobject.SharedObjectItem"] = com.jamdevera.utils.sharedobject.SharedObjectItem;
com.jamdevera.utils.sharedobject.SharedObjectItem.__name__ = ["com","jamdevera","utils","sharedobject","SharedObjectItem"];
com.jamdevera.utils.sharedobject.SharedObjectItem.prototype = {
	__class__: com.jamdevera.utils.sharedobject.SharedObjectItem
};
com.jamdevera.utils.sharedobject.SharedObjectManager = function() {
	openfl.events.EventDispatcher.call(this);
};
$hxClasses["com.jamdevera.utils.sharedobject.SharedObjectManager"] = com.jamdevera.utils.sharedobject.SharedObjectManager;
com.jamdevera.utils.sharedobject.SharedObjectManager.__name__ = ["com","jamdevera","utils","sharedobject","SharedObjectManager"];
com.jamdevera.utils.sharedobject.SharedObjectManager._instance = null;
com.jamdevera.utils.sharedobject.SharedObjectManager._storage = null;
com.jamdevera.utils.sharedobject.SharedObjectManager._soReference = null;
com.jamdevera.utils.sharedobject.SharedObjectManager._soPath = null;
com.jamdevera.utils.sharedobject.SharedObjectManager._tempStorage = null;
com.jamdevera.utils.sharedobject.SharedObjectManager.init = function() {
	if(com.jamdevera.utils.sharedobject.SharedObjectManager._soReference != null && com.jamdevera.utils.sharedobject.SharedObjectManager._soPath != null) com.jamdevera.utils.sharedobject.SharedObjectManager._storage = openfl.net.SharedObject.getLocal(com.jamdevera.utils.sharedobject.SharedObjectManager._soReference,com.jamdevera.utils.sharedobject.SharedObjectManager._soPath); else if(com.jamdevera.utils.sharedobject.SharedObjectManager._soReference != null) com.jamdevera.utils.sharedobject.SharedObjectManager._storage = openfl.net.SharedObject.getLocal(com.jamdevera.utils.sharedobject.SharedObjectManager._soReference); else com.jamdevera.utils.sharedobject.SharedObjectManager._storage = openfl.net.SharedObject.getLocal(com.jamdevera.utils.sharedobject.SharedObjectManager.DEFAULT_SO_IDENTIFIER);
	com.jamdevera.utils.sharedobject.SharedObjectManager._tempStorage = new Array();
	com.jamdevera.utils.sharedobject.SharedObjectManager._instance.addEventListener(com.jamdevera.utils.sharedobject.SharedObjectManagerEvent.SAVE_SUCCESS,com.jamdevera.utils.sharedobject.SharedObjectManager.saveHandler);
};
com.jamdevera.utils.sharedobject.SharedObjectManager.getInstance = function(identifier,path) {
	if(com.jamdevera.utils.sharedobject.SharedObjectManager._instance == null) {
		com.jamdevera.utils.sharedobject.SharedObjectManager._instance = new com.jamdevera.utils.sharedobject.SharedObjectManager();
		com.jamdevera.utils.sharedobject.SharedObjectManager._soReference = identifier;
		com.jamdevera.utils.sharedobject.SharedObjectManager._soPath = path;
		com.jamdevera.utils.sharedobject.SharedObjectManager.init();
	}
	return com.jamdevera.utils.sharedobject.SharedObjectManager._instance;
};
com.jamdevera.utils.sharedobject.SharedObjectManager.save = function() {
	var item = com.jamdevera.utils.sharedobject.SharedObjectManager._tempStorage.shift();
	var propertyIdentifier = item.identifier;
	var value = item.value;
	var flushResult;
	Reflect.setProperty(com.jamdevera.utils.sharedobject.SharedObjectManager._storage.data,propertyIdentifier,value);
	try {
		flushResult = com.jamdevera.utils.sharedobject.SharedObjectManager._storage.flush();
		if(flushResult == openfl.net.SharedObjectFlushStatus.PENDING) {
		} else if(flushResult == openfl.net.SharedObjectFlushStatus.FLUSHED) com.jamdevera.utils.sharedobject.SharedObjectManager._instance.dispatchEvent(new com.jamdevera.utils.sharedobject.SharedObjectManagerEvent(com.jamdevera.utils.sharedobject.SharedObjectManagerEvent.SAVE_SUCCESS));
	} catch( e ) {
		if( js.Boot.__instanceof(e,openfl.errors.Error) ) {
			openfl.Lib.trace("unable to save");
		} else throw(e);
	}
};
com.jamdevera.utils.sharedobject.SharedObjectManager.saveHandler = function(e) {
	if(com.jamdevera.utils.sharedobject.SharedObjectManager._tempStorage.length >= 1) com.jamdevera.utils.sharedobject.SharedObjectManager.save();
};
com.jamdevera.utils.sharedobject.SharedObjectManager.__super__ = openfl.events.EventDispatcher;
com.jamdevera.utils.sharedobject.SharedObjectManager.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	getProperty: function(propertyIdentifier) {
		return Reflect.getProperty(com.jamdevera.utils.sharedobject.SharedObjectManager._storage.data,propertyIdentifier);
	}
	,saveProperty: function(propertyIdentifier,value) {
		var item = new com.jamdevera.utils.sharedobject.SharedObjectItem();
		item.identifier = propertyIdentifier;
		item.value = value;
		com.jamdevera.utils.sharedobject.SharedObjectManager._tempStorage.push(item);
		if(com.jamdevera.utils.sharedobject.SharedObjectManager._tempStorage.length > 1) return; else if(com.jamdevera.utils.sharedobject.SharedObjectManager._tempStorage.length == 1) com.jamdevera.utils.sharedobject.SharedObjectManager.save();
	}
	,deleteSharedObject: function() {
		com.jamdevera.utils.sharedobject.SharedObjectManager._storage.clear();
	}
	,__class__: com.jamdevera.utils.sharedobject.SharedObjectManager
});
com.jamdevera.utils.sharedobject.SharedObjectManagerEvent = function(type,bubbles,cancelable) {
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["com.jamdevera.utils.sharedobject.SharedObjectManagerEvent"] = com.jamdevera.utils.sharedobject.SharedObjectManagerEvent;
com.jamdevera.utils.sharedobject.SharedObjectManagerEvent.__name__ = ["com","jamdevera","utils","sharedobject","SharedObjectManagerEvent"];
com.jamdevera.utils.sharedobject.SharedObjectManagerEvent.__super__ = openfl.events.Event;
com.jamdevera.utils.sharedobject.SharedObjectManagerEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: com.jamdevera.utils.sharedobject.SharedObjectManagerEvent
});
com.philipmabanta = {};
com.philipmabanta.utils = {};
com.philipmabanta.utils.IDisposable = function() { };
$hxClasses["com.philipmabanta.utils.IDisposable"] = com.philipmabanta.utils.IDisposable;
com.philipmabanta.utils.IDisposable.__name__ = ["com","philipmabanta","utils","IDisposable"];
com.philipmabanta.utils.IDisposable.prototype = {
	__class__: com.philipmabanta.utils.IDisposable
};
com.philipmabanta.utils.EventRegistry = function() {
	this.registry = new haxe.ds.ObjectMap();
};
$hxClasses["com.philipmabanta.utils.EventRegistry"] = com.philipmabanta.utils.EventRegistry;
com.philipmabanta.utils.EventRegistry.__name__ = ["com","philipmabanta","utils","EventRegistry"];
com.philipmabanta.utils.EventRegistry.__interfaces__ = [com.philipmabanta.utils.IDisposable];
com.philipmabanta.utils.EventRegistry.unregisterListenerForTypeInDispatcher = function(dispatcher,type,listeners,listener) {
	dispatcher.removeEventListener(type,listener);
	listeners.remove(listener);
};
com.philipmabanta.utils.EventRegistry.prototype = {
	register: function(dispatcher,type,listener) {
		var typeList = this.registry.h[dispatcher.__id__];
		if(typeList == null) {
			typeList = new haxe.ds.StringMap();
			this.registry.set(dispatcher,typeList);
		}
		var listeners = typeList.get(type);
		if(listeners == null) {
			listeners = new List();
			typeList.set(type,listeners);
		}
		if(Lambda.indexOf(listeners,listener) != -1) return;
		listeners.push(listener);
		dispatcher.addEventListener(type,listener);
	}
	,dispose: function() {
		this.unregister();
		this.registry = null;
	}
	,unregister: function(dispatcher,type,listener) {
		if(dispatcher == null) {
			var $it0 = this.registry.keys();
			while( $it0.hasNext() ) {
				var dispatcherA = $it0.next();
				this.unregisterDispatcher(dispatcherA);
				this.registry.remove(dispatcherA);
			}
		} else if(type == null) {
			this.unregisterDispatcher(dispatcher);
			this.registry.remove(dispatcher);
		} else if(listener == null) {
			this.unregisterTypeInDispatcher(dispatcher,this.registry.h[dispatcher.__id__],type);
			var this1 = this.registry.h[dispatcher.__id__];
			this1.remove(type);
		} else {
			var types = this.registry.h[dispatcher.__id__];
			if(types == null) return;
			var listeners = types.get(type);
			if(listeners == null) return;
			dispatcher.removeEventListener(type,listener);
			listeners.remove(listener);
		}
	}
	,unregisterDispatcher: function(dispatcher) {
		var typeList = this.registry.h[dispatcher.__id__];
		if(typeList != null) {
			var $it0 = typeList.keys();
			while( $it0.hasNext() ) {
				var type = $it0.next();
				openfl.Lib.trace("unregistering eventtype: " + type);
				this.unregisterTypeInDispatcher(dispatcher,typeList,type);
				typeList.remove(type);
			}
		}
	}
	,unregisterTypeInDispatcher: function(dispatcher,typeList,type) {
		if(typeList != null) {
			var listeners = typeList.get(type);
			if(listeners != null) {
				var $it0 = listeners.iterator();
				while( $it0.hasNext() ) {
					var listener = $it0.next();
					dispatcher.removeEventListener(type,listener);
					listeners.remove(listener);
				}
			}
		}
	}
	,__class__: com.philipmabanta.utils.EventRegistry
};
com.philipmabanta.utils.TaggedEventRegistry = function() {
	this.tags = new haxe.ds.StringMap();
	var value = new com.philipmabanta.utils.EventRegistry();
	this.tags.set("",value);
};
$hxClasses["com.philipmabanta.utils.TaggedEventRegistry"] = com.philipmabanta.utils.TaggedEventRegistry;
com.philipmabanta.utils.TaggedEventRegistry.__name__ = ["com","philipmabanta","utils","TaggedEventRegistry"];
com.philipmabanta.utils.TaggedEventRegistry.__interfaces__ = [com.philipmabanta.utils.IDisposable];
com.philipmabanta.utils.TaggedEventRegistry.prototype = {
	register: function(tag,dispatcher,type,listener) {
		if(tag == null) tag = "";
		var tagEvents = this.tags.get(tag);
		if(tagEvents == null) {
			tagEvents = new com.philipmabanta.utils.EventRegistry();
			this.tags.set(tag,tagEvents);
		}
		openfl.Lib.trace("registering tag: " + tag + " || with type: " + type);
		tagEvents.register(dispatcher,type,listener);
	}
	,unregister: function(tag,dispatcher,type,listener) {
		openfl.Lib.trace("unregistering tag: " + tag);
		if(tag == null) {
			var $it0 = this.tags.iterator();
			while( $it0.hasNext() ) {
				var tagEvents = $it0.next();
				tagEvents.unregister(dispatcher,type,listener);
			}
			var $it1 = this.tags.keys();
			while( $it1.hasNext() ) {
				var tagEventKeys = $it1.next();
				this.tags.remove(tagEventKeys);
			}
		} else {
			var tagEvents1 = this.tags.get(tag);
			if(tagEvents1 != null) {
				tagEvents1.unregister(dispatcher,type,listener);
				this.tags.remove(tag);
			}
		}
	}
	,registerObjects: function(tag,objects,type,handler) {
		if(tag == null) tag = "";
		var _g = 0;
		while(_g < objects.length) {
			var obj = objects[_g];
			++_g;
			this.register(tag,obj,type,handler);
		}
	}
	,dispose: function() {
		var $it0 = this.tags.iterator();
		while( $it0.hasNext() ) {
			var tag = $it0.next();
			tag.dispose();
		}
	}
	,__class__: com.philipmabanta.utils.TaggedEventRegistry
};
var haxe = {};
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; };
haxe.CallStack = function() { };
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
};
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe.CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		if(m == null) b.b += "null"; else b.b += "" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		if(file == null) b.b += "null"; else b.b += "" + file;
		b.b += " line ";
		if(line == null) b.b += "null"; else b.b += "" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		if(cname == null) b.b += "null"; else b.b += "" + cname;
		b.b += ".";
		if(meth == null) b.b += "null"; else b.b += "" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		if(n == null) b.b += "null"; else b.b += "" + n;
		break;
	}
};
haxe.Log = function() { };
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
};
haxe.Resource = function() { };
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.content = null;
haxe.Resource.getString = function(name) {
	var _g = 0;
	var _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.crypto.Base64.decode(x.data);
			return b.toString();
		}
	}
	return null;
};
haxe.Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new haxe.ds.StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe.Serializer;
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.run = function(v) {
	var s = new haxe.Serializer();
	s.serialize(v);
	return s.toString();
};
haxe.Serializer.prototype = {
	toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			if(x == null) this.buf.b += "null"; else this.buf.b += "" + x;
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = encodeURIComponent(s);
		if(s.length == null) this.buf.b += "null"; else this.buf.b += "" + s.length;
		this.buf.b += ":";
		if(s == null) this.buf.b += "null"; else this.buf.b += "" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0;
		var _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				if(i == null) this.buf.b += "null"; else this.buf.b += "" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		{
			var _g = Type["typeof"](v);
			switch(_g[1]) {
			case 0:
				this.buf.b += "n";
				break;
			case 1:
				var v1 = v;
				if(v1 == 0) {
					this.buf.b += "z";
					return;
				}
				this.buf.b += "i";
				if(v1 == null) this.buf.b += "null"; else this.buf.b += "" + v1;
				break;
			case 2:
				var v2 = v;
				if(Math.isNaN(v2)) this.buf.b += "k"; else if(!Math.isFinite(v2)) if(v2 < 0) this.buf.b += "m"; else this.buf.b += "p"; else {
					this.buf.b += "d";
					if(v2 == null) this.buf.b += "null"; else this.buf.b += "" + v2;
				}
				break;
			case 3:
				if(v) this.buf.b += "t"; else this.buf.b += "f";
				break;
			case 6:
				var c = _g[2];
				if(c == String) {
					this.serializeString(v);
					return;
				}
				if(this.useCache && this.serializeRef(v)) return;
				switch(c) {
				case Array:
					var ucount = 0;
					this.buf.b += "a";
					var l = v.length;
					var _g1 = 0;
					while(_g1 < l) {
						var i = _g1++;
						if(v[i] == null) ucount++; else {
							if(ucount > 0) {
								if(ucount == 1) this.buf.b += "n"; else {
									this.buf.b += "u";
									if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
								}
								ucount = 0;
							}
							this.serialize(v[i]);
						}
					}
					if(ucount > 0) {
						if(ucount == 1) this.buf.b += "n"; else {
							this.buf.b += "u";
							if(ucount == null) this.buf.b += "null"; else this.buf.b += "" + ucount;
						}
					}
					this.buf.b += "h";
					break;
				case List:
					this.buf.b += "l";
					var v3 = v;
					var $it0 = v3.iterator();
					while( $it0.hasNext() ) {
						var i1 = $it0.next();
						this.serialize(i1);
					}
					this.buf.b += "h";
					break;
				case Date:
					var d = v;
					this.buf.b += "v";
					this.buf.add(HxOverrides.dateStr(d));
					break;
				case haxe.ds.StringMap:
					this.buf.b += "b";
					var v4 = v;
					var $it1 = v4.keys();
					while( $it1.hasNext() ) {
						var k = $it1.next();
						this.serializeString(k);
						this.serialize(v4.get(k));
					}
					this.buf.b += "h";
					break;
				case haxe.ds.IntMap:
					this.buf.b += "q";
					var v5 = v;
					var $it2 = v5.keys();
					while( $it2.hasNext() ) {
						var k1 = $it2.next();
						this.buf.b += ":";
						if(k1 == null) this.buf.b += "null"; else this.buf.b += "" + k1;
						this.serialize(v5.get(k1));
					}
					this.buf.b += "h";
					break;
				case haxe.ds.ObjectMap:
					this.buf.b += "M";
					var v6 = v;
					var $it3 = v6.keys();
					while( $it3.hasNext() ) {
						var k2 = $it3.next();
						var id = Reflect.field(k2,"__id__");
						Reflect.deleteField(k2,"__id__");
						this.serialize(k2);
						k2.__id__ = id;
						this.serialize(v6.h[k2.__id__]);
					}
					this.buf.b += "h";
					break;
				case haxe.io.Bytes:
					var v7 = v;
					var i2 = 0;
					var max = v7.length - 2;
					var charsBuf = new StringBuf();
					var b64 = haxe.Serializer.BASE64;
					while(i2 < max) {
						var b1 = v7.get(i2++);
						var b2 = v7.get(i2++);
						var b3 = v7.get(i2++);
						charsBuf.add(b64.charAt(b1 >> 2));
						charsBuf.add(b64.charAt((b1 << 4 | b2 >> 4) & 63));
						charsBuf.add(b64.charAt((b2 << 2 | b3 >> 6) & 63));
						charsBuf.add(b64.charAt(b3 & 63));
					}
					if(i2 == max) {
						var b11 = v7.get(i2++);
						var b21 = v7.get(i2++);
						charsBuf.add(b64.charAt(b11 >> 2));
						charsBuf.add(b64.charAt((b11 << 4 | b21 >> 4) & 63));
						charsBuf.add(b64.charAt(b21 << 2 & 63));
					} else if(i2 == max + 1) {
						var b12 = v7.get(i2++);
						charsBuf.add(b64.charAt(b12 >> 2));
						charsBuf.add(b64.charAt(b12 << 4 & 63));
					}
					var chars = charsBuf.b;
					this.buf.b += "s";
					if(chars.length == null) this.buf.b += "null"; else this.buf.b += "" + chars.length;
					this.buf.b += ":";
					if(chars == null) this.buf.b += "null"; else this.buf.b += "" + chars;
					break;
				default:
					if(this.useCache) this.cache.pop();
					if(v.hxSerialize != null) {
						this.buf.b += "C";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						v.hxSerialize(this);
						this.buf.b += "g";
					} else {
						this.buf.b += "c";
						this.serializeString(Type.getClassName(c));
						if(this.useCache) this.cache.push(v);
						this.serializeFields(v);
					}
				}
				break;
			case 4:
				if(this.useCache && this.serializeRef(v)) return;
				this.buf.b += "o";
				this.serializeFields(v);
				break;
			case 7:
				var e = _g[2];
				if(this.useCache) {
					if(this.serializeRef(v)) return;
					this.cache.pop();
				}
				if(this.useEnumIndex) this.buf.b += "j"; else this.buf.b += "w";
				this.serializeString(Type.getEnumName(e));
				if(this.useEnumIndex) {
					this.buf.b += ":";
					this.buf.b += Std.string(v[1]);
				} else this.serializeString(v[0]);
				this.buf.b += ":";
				var l1 = v.length;
				this.buf.b += Std.string(l1 - 2);
				var _g11 = 2;
				while(_g11 < l1) {
					var i3 = _g11++;
					this.serialize(v[i3]);
				}
				if(this.useCache) this.cache.push(v);
				break;
			case 5:
				throw "Cannot serialize function";
				break;
			default:
				throw "Cannot serialize " + Std.string(v);
			}
		}
	}
	,__class__: haxe.Serializer
};
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
};
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
};
haxe.Timer.prototype = {
	stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
};
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0;
	var _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe.Unserializer.prototype = {
	setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_1) {
			return null;
		}}; else this.resolver = r;
	}
	,get: function(p) {
		return this.buf.charCodeAt(p);
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!(typeof(k) == "string")) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.get(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		var _g = this.get(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.get(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c1 = this.buf.charCodeAt(this.pos);
				if(c1 == 104) {
					this.pos++;
					break;
				}
				if(c1 == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n1 = this.readDigits();
			if(n1 < 0 || n1 >= this.cache.length) throw "Invalid reference";
			return this.cache[n1];
		case 82:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.scache.length) throw "Invalid string reference";
			return this.scache[n2];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o1 = Type.createEmptyInstance(cl);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 119:
			var name1 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name1);
			if(edecl == null) throw "Enum not found " + name1;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name2 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name2);
			if(edecl1 == null) throw "Enum not found " + name2;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl1)[index];
			if(tag == null) throw "Unknown enum index " + name2 + "@" + index;
			var e1 = this.unserializeEnum(edecl1,tag);
			this.cache.push(e1);
			return e1;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf1 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf2 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s1 = this.unserialize();
				h.set(s1,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h1 = new haxe.ds.IntMap();
			this.cache.push(h1);
			var buf3 = this.buf;
			var c2 = this.get(this.pos++);
			while(c2 == 58) {
				var i = this.readDigits();
				h1.set(i,this.unserialize());
				c2 = this.get(this.pos++);
			}
			if(c2 != 104) throw "Invalid IntMap format";
			return h1;
		case 77:
			var h2 = new haxe.ds.ObjectMap();
			this.cache.push(h2);
			var buf4 = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s2 = this.unserialize();
				h2.set(s2,this.unserialize());
			}
			this.pos++;
			return h2;
		case 118:
			var d;
			var s3 = HxOverrides.substr(this.buf,this.pos,19);
			d = HxOverrides.strDate(s3);
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len1 = this.readDigits();
			var buf5 = this.buf;
			if(this.get(this.pos++) != 58 || this.length - this.pos < len1) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len1 & 3;
			var size;
			size = (len1 >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i1 + (len1 - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c21 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c11 << 2 | c21 >> 4);
				var c3 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c21 << 4 | c3 >> 2);
				var c4 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c3 << 6 | c4);
			}
			if(rest >= 2) {
				var c12 = codes[StringTools.fastCodeAt(buf5,i1++)];
				var c22 = codes[StringTools.fastCodeAt(buf5,i1++)];
				bytes.set(bpos++,c12 << 2 | c22 >> 4);
				if(rest == 3) {
					var c31 = codes[StringTools.fastCodeAt(buf5,i1++)];
					bytes.set(bpos++,c22 << 4 | c31 >> 2);
				}
			}
			this.pos += len1;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name3 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name3);
			if(cl1 == null) throw "Class not found " + name3;
			var o2 = Type.createEmptyInstance(cl1);
			this.cache.push(o2);
			o2.hxUnserialize(this);
			if(this.get(this.pos++) != 103) throw "Invalid custom data";
			return o2;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,__class__: haxe.Unserializer
};
haxe.io = {};
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
};
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var i = 0;
	while(i < s.length) {
		var c = StringTools.fastCodeAt(s,i++);
		if(55296 <= c && c <= 56319) c = c - 55232 << 10 | StringTools.fastCodeAt(s,i++) & 1023;
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
};
haxe.io.Bytes.ofData = function(b) {
	return new haxe.io.Bytes(b.length,b);
};
haxe.io.Bytes.prototype = {
	get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c21 = b[i++];
				var c3 = b[i++];
				var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe.io.Bytes
};
haxe.crypto = {};
haxe.crypto.Base64 = function() { };
$hxClasses["haxe.crypto.Base64"] = haxe.crypto.Base64;
haxe.crypto.Base64.__name__ = ["haxe","crypto","Base64"];
haxe.crypto.Base64.decode = function(str,complement) {
	if(complement == null) complement = true;
	if(complement) while(HxOverrides.cca(str,str.length - 1) == 61) str = HxOverrides.substr(str,0,-1);
	return new haxe.crypto.BaseCode(haxe.crypto.Base64.BYTES).decodeBytes(haxe.io.Bytes.ofString(str));
};
haxe.crypto.BaseCode = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "BaseCode : base length must be a power of two.";
	this.base = base;
	this.nbits = nbits;
};
$hxClasses["haxe.crypto.BaseCode"] = haxe.crypto.BaseCode;
haxe.crypto.BaseCode.__name__ = ["haxe","crypto","BaseCode"];
haxe.crypto.BaseCode.prototype = {
	encodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		var size = b.length * 8 / nbits | 0;
		var out = haxe.io.Bytes.alloc(size + (b.length * 8 % nbits == 0?0:1));
		var buf = 0;
		var curbits = 0;
		var mask = (1 << nbits) - 1;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < nbits) {
				curbits += 8;
				buf <<= 8;
				buf |= b.get(pin++);
			}
			curbits -= nbits;
			out.set(pout++,base.b[buf >> curbits & mask]);
		}
		if(curbits > 0) out.set(pout++,base.b[buf << nbits - curbits & mask]);
		return out;
	}
	,initTable: function() {
		var tbl = new Array();
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g1 = 0;
		var _g2 = this.base.length;
		while(_g1 < _g2) {
			var i1 = _g1++;
			tbl[this.base.b[i1]] = i1;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) this.initTable();
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = haxe.io.Bytes.alloc(size);
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.get(pin++)];
				if(i == -1) throw "BaseCode : invalid encoded char";
				buf |= i;
			}
			curbits -= 8;
			out.set(pout++,buf >> curbits & 255);
		}
		return out;
	}
	,__class__: haxe.crypto.BaseCode
};
haxe.ds = {};
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe.ds.IntMap
};
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe.ds.ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,exists: function(key) {
		return this.h.__keys__[key.__id__] != null;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i.__id__];
		}};
	}
	,__class__: haxe.ds.ObjectMap
};
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,__class__: haxe.ds.StringMap
};
haxe.ds._Vector = {};
haxe.ds._Vector.Vector_Impl_ = function() { };
$hxClasses["haxe.ds._Vector.Vector_Impl_"] = haxe.ds._Vector.Vector_Impl_;
haxe.ds._Vector.Vector_Impl_.__name__ = ["haxe","ds","_Vector","Vector_Impl_"];
haxe.ds._Vector.Vector_Impl_.blit = function(src,srcPos,dest,destPos,len) {
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		dest[destPos + i] = src[srcPos + i];
	}
};
haxe.ds._Vector.Vector_Impl_.toArray = function(this1) {
	var a = new Array();
	var len = this1.length;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		a[i] = this1[i];
	}
	return a;
};
haxe.io.Eof = function() { };
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
};
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; };
haxe.io.Path = function(path) {
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else this.dir = null;
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe.io.Path;
haxe.io.Path.__name__ = ["haxe","io","Path"];
haxe.io.Path.withoutExtension = function(path) {
	var s = new haxe.io.Path(path);
	s.ext = null;
	return s.toString();
};
haxe.io.Path.prototype = {
	toString: function() {
		return (this.dir == null?"":this.dir + (this.backslash?"\\":"/")) + this.file + (this.ext == null?"":"." + this.ext);
	}
	,__class__: haxe.io.Path
};
haxe.xml = {};
haxe.xml._Fast = {};
haxe.xml._Fast.NodeAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.NodeAccess"] = haxe.xml._Fast.NodeAccess;
haxe.xml._Fast.NodeAccess.__name__ = ["haxe","xml","_Fast","NodeAccess"];
haxe.xml._Fast.NodeAccess.prototype = {
	__class__: haxe.xml._Fast.NodeAccess
};
haxe.xml._Fast.AttribAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.AttribAccess"] = haxe.xml._Fast.AttribAccess;
haxe.xml._Fast.AttribAccess.__name__ = ["haxe","xml","_Fast","AttribAccess"];
haxe.xml._Fast.AttribAccess.prototype = {
	resolve: function(name) {
		if(this.__x.nodeType == Xml.Document) throw "Cannot access document attribute " + name;
		var v = this.__x.get(name);
		if(v == null) throw this.__x.get_nodeName() + " is missing attribute " + name;
		return v;
	}
	,__class__: haxe.xml._Fast.AttribAccess
};
haxe.xml._Fast.HasAttribAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.HasAttribAccess"] = haxe.xml._Fast.HasAttribAccess;
haxe.xml._Fast.HasAttribAccess.__name__ = ["haxe","xml","_Fast","HasAttribAccess"];
haxe.xml._Fast.HasAttribAccess.prototype = {
	__class__: haxe.xml._Fast.HasAttribAccess
};
haxe.xml._Fast.HasNodeAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.HasNodeAccess"] = haxe.xml._Fast.HasNodeAccess;
haxe.xml._Fast.HasNodeAccess.__name__ = ["haxe","xml","_Fast","HasNodeAccess"];
haxe.xml._Fast.HasNodeAccess.prototype = {
	__class__: haxe.xml._Fast.HasNodeAccess
};
haxe.xml._Fast.NodeListAccess = function(x) {
	this.__x = x;
};
$hxClasses["haxe.xml._Fast.NodeListAccess"] = haxe.xml._Fast.NodeListAccess;
haxe.xml._Fast.NodeListAccess.__name__ = ["haxe","xml","_Fast","NodeListAccess"];
haxe.xml._Fast.NodeListAccess.prototype = {
	resolve: function(name) {
		var l = new List();
		var $it0 = this.__x.elementsNamed(name);
		while( $it0.hasNext() ) {
			var x = $it0.next();
			l.add(new haxe.xml.Fast(x));
		}
		return l;
	}
	,__class__: haxe.xml._Fast.NodeListAccess
};
haxe.xml.Fast = function(x) {
	if(x.nodeType != Xml.Document && x.nodeType != Xml.Element) throw "Invalid nodeType " + Std.string(x.nodeType);
	this.x = x;
	this.node = new haxe.xml._Fast.NodeAccess(x);
	this.nodes = new haxe.xml._Fast.NodeListAccess(x);
	this.att = new haxe.xml._Fast.AttribAccess(x);
	this.has = new haxe.xml._Fast.HasAttribAccess(x);
	this.hasNode = new haxe.xml._Fast.HasNodeAccess(x);
};
$hxClasses["haxe.xml.Fast"] = haxe.xml.Fast;
haxe.xml.Fast.__name__ = ["haxe","xml","Fast"];
haxe.xml.Fast.prototype = {
	__class__: haxe.xml.Fast
};
haxe.xml.Parser = function() { };
$hxClasses["haxe.xml.Parser"] = haxe.xml.Parser;
haxe.xml.Parser.__name__ = ["haxe","xml","Parser"];
haxe.xml.Parser.parse = function(str) {
	var doc = Xml.createDocument();
	haxe.xml.Parser.doParse(str,0,doc);
	return doc;
};
haxe.xml.Parser.doParse = function(str,p,parent) {
	if(p == null) p = 0;
	var xml = null;
	var state = 1;
	var next = 1;
	var aname = null;
	var start = 0;
	var nsubs = 0;
	var nbrackets = 0;
	var c = str.charCodeAt(p);
	var buf = new StringBuf();
	while(!(c != c)) {
		switch(state) {
		case 0:
			switch(c) {
			case 10:case 13:case 9:case 32:
				break;
			default:
				state = next;
				continue;
			}
			break;
		case 1:
			switch(c) {
			case 60:
				state = 0;
				next = 2;
				break;
			default:
				start = p;
				state = 13;
				continue;
			}
			break;
		case 13:
			if(c == 60) {
				var child = Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start));
				buf = new StringBuf();
				parent.addChild(child);
				nsubs++;
				state = 0;
				next = 2;
			} else if(c == 38) {
				buf.addSub(str,start,p - start);
				state = 18;
				next = 13;
				start = p + 1;
			}
			break;
		case 17:
			if(c == 93 && str.charCodeAt(p + 1) == 93 && str.charCodeAt(p + 2) == 62) {
				var child1 = Xml.createCData(HxOverrides.substr(str,start,p - start));
				parent.addChild(child1);
				nsubs++;
				p += 2;
				state = 1;
			}
			break;
		case 2:
			switch(c) {
			case 33:
				if(str.charCodeAt(p + 1) == 91) {
					p += 2;
					if(HxOverrides.substr(str,p,6).toUpperCase() != "CDATA[") throw "Expected <![CDATA[";
					p += 5;
					state = 17;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) == 68 || str.charCodeAt(p + 1) == 100) {
					if(HxOverrides.substr(str,p + 2,6).toUpperCase() != "OCTYPE") throw "Expected <!DOCTYPE";
					p += 8;
					state = 16;
					start = p + 1;
				} else if(str.charCodeAt(p + 1) != 45 || str.charCodeAt(p + 2) != 45) throw "Expected <!--"; else {
					p += 2;
					state = 15;
					start = p + 1;
				}
				break;
			case 63:
				state = 14;
				start = p;
				break;
			case 47:
				if(parent == null) throw "Expected node name";
				start = p + 1;
				state = 0;
				next = 10;
				break;
			default:
				state = 3;
				start = p;
				continue;
			}
			break;
		case 3:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(p == start) throw "Expected node name";
				xml = Xml.createElement(HxOverrides.substr(str,start,p - start));
				parent.addChild(xml);
				state = 0;
				next = 4;
				continue;
			}
			break;
		case 4:
			switch(c) {
			case 47:
				state = 11;
				nsubs++;
				break;
			case 62:
				state = 9;
				nsubs++;
				break;
			default:
				state = 5;
				start = p;
				continue;
			}
			break;
		case 5:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				var tmp;
				if(start == p) throw "Expected attribute name";
				tmp = HxOverrides.substr(str,start,p - start);
				aname = tmp;
				if(xml.exists(aname)) throw "Duplicate attribute";
				state = 0;
				next = 6;
				continue;
			}
			break;
		case 6:
			switch(c) {
			case 61:
				state = 0;
				next = 7;
				break;
			default:
				throw "Expected =";
			}
			break;
		case 7:
			switch(c) {
			case 34:case 39:
				state = 8;
				start = p;
				break;
			default:
				throw "Expected \"";
			}
			break;
		case 8:
			if(c == str.charCodeAt(start)) {
				var val = HxOverrides.substr(str,start + 1,p - start - 1);
				xml.set(aname,val);
				state = 0;
				next = 4;
			}
			break;
		case 9:
			p = haxe.xml.Parser.doParse(str,p,xml);
			start = p;
			state = 1;
			break;
		case 11:
			switch(c) {
			case 62:
				state = 1;
				break;
			default:
				throw "Expected >";
			}
			break;
		case 12:
			switch(c) {
			case 62:
				if(nsubs == 0) parent.addChild(Xml.createPCData(""));
				return p;
			default:
				throw "Expected >";
			}
			break;
		case 10:
			if(!(c >= 97 && c <= 122 || c >= 65 && c <= 90 || c >= 48 && c <= 57 || c == 58 || c == 46 || c == 95 || c == 45)) {
				if(start == p) throw "Expected node name";
				var v = HxOverrides.substr(str,start,p - start);
				if(v != parent.get_nodeName()) throw "Expected </" + parent.get_nodeName() + ">";
				state = 0;
				next = 12;
				continue;
			}
			break;
		case 15:
			if(c == 45 && str.charCodeAt(p + 1) == 45 && str.charCodeAt(p + 2) == 62) {
				parent.addChild(Xml.createComment(HxOverrides.substr(str,start,p - start)));
				p += 2;
				state = 1;
			}
			break;
		case 16:
			if(c == 91) nbrackets++; else if(c == 93) nbrackets--; else if(c == 62 && nbrackets == 0) {
				parent.addChild(Xml.createDocType(HxOverrides.substr(str,start,p - start)));
				state = 1;
			}
			break;
		case 14:
			if(c == 63 && str.charCodeAt(p + 1) == 62) {
				p++;
				var str1 = HxOverrides.substr(str,start + 1,p - start - 2);
				parent.addChild(Xml.createProcessingInstruction(str1));
				state = 1;
			}
			break;
		case 18:
			if(c == 59) {
				var s = HxOverrides.substr(str,start,p - start);
				if(s.charCodeAt(0) == 35) {
					var i;
					if(s.charCodeAt(1) == 120) i = Std.parseInt("0" + HxOverrides.substr(s,1,s.length - 1)); else i = Std.parseInt(HxOverrides.substr(s,1,s.length - 1));
					buf.add(String.fromCharCode(i));
				} else if(!haxe.xml.Parser.escapes.exists(s)) buf.b += Std.string("&" + s + ";"); else buf.add(haxe.xml.Parser.escapes.get(s));
				start = p + 1;
				state = next;
			}
			break;
		}
		c = StringTools.fastCodeAt(str,++p);
	}
	if(state == 1) {
		start = p;
		state = 13;
	}
	if(state == 13) {
		if(p != start || nsubs == 0) parent.addChild(Xml.createPCData(buf.b + HxOverrides.substr(str,start,p - start)));
		return p;
	}
	throw "Unexpected end";
};
var js = {};
js.Boot = function() { };
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js.Boot.__trace = function(v,i) {
	var msg;
	if(i != null) msg = i.fileName + ":" + i.lineNumber + ": "; else msg = "";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof console != "undefined" && console.log != null) console.log(msg);
};
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
};
js.Browser = function() { };
$hxClasses["js.Browser"] = js.Browser;
js.Browser.__name__ = ["js","Browser"];
js.Browser.getLocalStorage = function() {
	try {
		var s = window.localStorage;
		s.getItem("");
		return s;
	} catch( e ) {
		return null;
	}
};
var motion = {};
motion.actuators = {};
motion.actuators.IGenericActuator = function() { };
$hxClasses["motion.actuators.IGenericActuator"] = motion.actuators.IGenericActuator;
motion.actuators.IGenericActuator.__name__ = ["motion","actuators","IGenericActuator"];
motion.actuators.IGenericActuator.prototype = {
	__class__: motion.actuators.IGenericActuator
};
motion.actuators.GenericActuator = function(target,duration,properties) {
	this._autoVisible = true;
	this._delay = 0;
	this._reflect = false;
	this._repeat = 0;
	this._reverse = false;
	this._smartRotation = false;
	this._snapping = false;
	this.special = false;
	this.target = target;
	this.properties = properties;
	this.duration = duration;
	this._ease = motion.Actuate.defaultEase;
};
$hxClasses["motion.actuators.GenericActuator"] = motion.actuators.GenericActuator;
motion.actuators.GenericActuator.__name__ = ["motion","actuators","GenericActuator"];
motion.actuators.GenericActuator.__interfaces__ = [motion.actuators.IGenericActuator];
motion.actuators.GenericActuator.prototype = {
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,i)) Reflect.setField(this.target,i,Reflect.field(this.properties,i)); else Reflect.setProperty(this.target,i,Reflect.field(this.properties,i));
		}
	}
	,autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		return this;
	}
	,callMethod: function(method,params) {
		if(params == null) params = [];
		return method.apply(method,params);
	}
	,change: function() {
		if(this._onUpdate != null) this.callMethod(this._onUpdate,this._onUpdateParams);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		if(sendEvent) {
			this.change();
			if(this._onComplete != null) this.callMethod(this._onComplete,this._onCompleteParams);
		}
		motion.Actuate.unload(this);
	}
	,delay: function(duration) {
		this._delay = duration;
		return this;
	}
	,ease: function(easing) {
		this._ease = easing;
		return this;
	}
	,move: function() {
	}
	,onComplete: function(handler,parameters) {
		this._onComplete = handler;
		if(parameters == null) this._onCompleteParams = []; else this._onCompleteParams = parameters;
		if(this.duration == 0) this.complete();
		return this;
	}
	,onRepeat: function(handler,parameters) {
		this._onRepeat = handler;
		if(parameters == null) this._onRepeatParams = []; else this._onRepeatParams = parameters;
		return this;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		return this;
	}
	,pause: function() {
	}
	,reflect: function(value) {
		if(value == null) value = true;
		this._reflect = value;
		this.special = true;
		return this;
	}
	,repeat: function(times) {
		if(times == null) times = -1;
		this._repeat = times;
		return this;
	}
	,resume: function() {
	}
	,reverse: function(value) {
		if(value == null) value = true;
		this._reverse = value;
		this.special = true;
		return this;
	}
	,smartRotation: function(value) {
		if(value == null) value = true;
		this._smartRotation = value;
		this.special = true;
		return this;
	}
	,snapping: function(value) {
		if(value == null) value = true;
		this._snapping = value;
		this.special = true;
		return this;
	}
	,stop: function(properties,complete,sendEvent) {
	}
	,__class__: motion.actuators.GenericActuator
};
motion.actuators.SimpleActuator = function(target,duration,properties) {
	this.active = true;
	this.propertyDetails = new Array();
	this.sendChange = false;
	this.paused = false;
	this.cacheVisible = false;
	this.initialized = false;
	this.setVisible = false;
	this.toggleVisible = false;
	this.startTime = openfl.Lib.getTimer() / 1000;
	motion.actuators.GenericActuator.call(this,target,duration,properties);
	if(!motion.actuators.SimpleActuator.addedEvent) {
		motion.actuators.SimpleActuator.addedEvent = true;
		openfl.Lib.current.stage.addEventListener(openfl.events.Event.ENTER_FRAME,motion.actuators.SimpleActuator.stage_onEnterFrame);
	}
};
$hxClasses["motion.actuators.SimpleActuator"] = motion.actuators.SimpleActuator;
motion.actuators.SimpleActuator.__name__ = ["motion","actuators","SimpleActuator"];
motion.actuators.SimpleActuator.stage_onEnterFrame = function(event) {
	var currentTime = openfl.Lib.getTimer() / 1000;
	var actuator;
	var j = 0;
	var cleanup = false;
	var _g1 = 0;
	var _g = motion.actuators.SimpleActuator.actuatorsLength;
	while(_g1 < _g) {
		var i = _g1++;
		actuator = motion.actuators.SimpleActuator.actuators[j];
		if(actuator != null && actuator.active) {
			if(currentTime > actuator.timeOffset) actuator.update(currentTime);
			j++;
		} else {
			motion.actuators.SimpleActuator.actuators.splice(j,1);
			--motion.actuators.SimpleActuator.actuatorsLength;
		}
	}
};
motion.actuators.SimpleActuator.__super__ = motion.actuators.GenericActuator;
motion.actuators.SimpleActuator.prototype = $extend(motion.actuators.GenericActuator.prototype,{
	autoVisible: function(value) {
		if(value == null) value = true;
		this._autoVisible = value;
		if(!value) {
			this.toggleVisible = false;
			if(this.setVisible) this.setField(this.target,"visible",this.cacheVisible);
		}
		return this;
	}
	,delay: function(duration) {
		this._delay = duration;
		this.timeOffset = this.startTime + duration;
		return this;
	}
	,getField: function(target,propertyName) {
		var value = null;
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) value = Reflect.field(target,propertyName); else value = Reflect.getProperty(target,propertyName);
		return value;
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var i = _g1[_g];
			++_g;
			var isField = true;
			if(Object.prototype.hasOwnProperty.call(this.target,i) && (!this.target.__properties__ || !this.target.__properties__["set_" + i])) start = Reflect.field(this.target,i); else {
				isField = false;
				start = Reflect.getProperty(this.target,i);
			}
			if(typeof(start) == "number") {
				details = new motion.actuators.PropertyDetails(this.target,i,start,this.getField(this.properties,i) - start,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,move: function() {
		this.toggleVisible = Object.prototype.hasOwnProperty.call(this.properties,"alpha") && js.Boot.__instanceof(this.target,openfl.display.DisplayObject);
		if(this.toggleVisible && this.properties.alpha != 0 && !this.getField(this.target,"visible")) {
			this.setVisible = true;
			this.cacheVisible = this.getField(this.target,"visible");
			this.setField(this.target,"visible",true);
		}
		this.timeOffset = this.startTime;
		motion.actuators.SimpleActuator.actuators.push(this);
		++motion.actuators.SimpleActuator.actuatorsLength;
	}
	,onUpdate: function(handler,parameters) {
		this._onUpdate = handler;
		if(parameters == null) this._onUpdateParams = []; else this._onUpdateParams = parameters;
		this.sendChange = true;
		return this;
	}
	,pause: function() {
		this.paused = true;
		this.pauseTime = openfl.Lib.getTimer();
	}
	,resume: function() {
		if(this.paused) {
			this.paused = false;
			this.timeOffset += (openfl.Lib.getTimer() - this.pauseTime) / 1000;
		}
	}
	,setField: function(target,propertyName,value) {
		if(Object.prototype.hasOwnProperty.call(target,propertyName)) target[propertyName] = value; else Reflect.setProperty(target,propertyName,value);
	}
	,setProperty: function(details,value) {
		if(details.isField) details.target[details.propertyName] = value; else Reflect.setProperty(details.target,details.propertyName,value);
	}
	,stop: function(properties,complete,sendEvent) {
		if(this.active) {
			if(properties == null) {
				this.active = false;
				if(complete) this.apply();
				this.complete(sendEvent);
				return;
			}
			var _g = 0;
			var _g1 = Reflect.fields(properties);
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				if(Object.prototype.hasOwnProperty.call(this.properties,i)) {
					this.active = false;
					if(complete) this.apply();
					this.complete(sendEvent);
					return;
				}
			}
		}
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var i;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g1 = 0;
				var _g = this.detailsLength;
				while(_g1 < _g) {
					var i1 = _g1++;
					details = this.propertyDetails[i1];
					this.setProperty(details,details.start + details.change * easing);
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g11 = 0;
				var _g2 = this.detailsLength;
				while(_g11 < _g2) {
					var i2 = _g11++;
					details = this.propertyDetails[i2];
					if(this._smartRotation && (details.propertyName == "rotation" || details.propertyName == "rotationX" || details.propertyName == "rotationY" || details.propertyName == "rotationZ")) {
						var rotation = details.change % 360;
						if(rotation > 180) rotation -= 360; else if(rotation < -180) rotation += 360;
						endValue = details.start + rotation * easing;
					} else endValue = details.start + details.change * easing;
					if(!this._snapping) {
						if(details.isField) details.target[details.propertyName] = endValue; else Reflect.setProperty(details.target,details.propertyName,endValue);
					} else this.setProperty(details,Math.round(endValue));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._onRepeat != null) this.callMethod(this._onRepeat,this._onRepeatParams);
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion.actuators.SimpleActuator
});
motion.easing = {};
motion.easing.Expo = function() { };
$hxClasses["motion.easing.Expo"] = motion.easing.Expo;
motion.easing.Expo.__name__ = ["motion","easing","Expo"];
motion.easing.Expo.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Expo.get_easeIn = function() {
	return new motion.easing.ExpoEaseIn();
};
motion.easing.Expo.get_easeInOut = function() {
	return new motion.easing.ExpoEaseInOut();
};
motion.easing.Expo.get_easeOut = function() {
	return new motion.easing.ExpoEaseOut();
};
motion.easing.IEasing = function() { };
$hxClasses["motion.easing.IEasing"] = motion.easing.IEasing;
motion.easing.IEasing.__name__ = ["motion","easing","IEasing"];
motion.easing.IEasing.prototype = {
	__class__: motion.easing.IEasing
};
motion.easing.ExpoEaseOut = function() {
};
$hxClasses["motion.easing.ExpoEaseOut"] = motion.easing.ExpoEaseOut;
motion.easing.ExpoEaseOut.__name__ = ["motion","easing","ExpoEaseOut"];
motion.easing.ExpoEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseOut.prototype = {
	calculate: function(k) {
		if(k == 1) return 1; else return 1 - Math.pow(2,-10 * k);
	}
	,ease: function(t,b,c,d) {
		if(t == d) return b + c; else return c * (1 - Math.pow(2,-10 * t / d)) + b;
	}
	,__class__: motion.easing.ExpoEaseOut
};
motion.Actuate = function() { };
$hxClasses["motion.Actuate"] = motion.Actuate;
motion.Actuate.__name__ = ["motion","Actuate"];
motion.Actuate.apply = function(target,properties,customActuator) {
	motion.Actuate.stop(target,properties);
	if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
	var actuator = Type.createInstance(customActuator,[target,0,properties]);
	actuator.apply();
	return actuator;
};
motion.Actuate.effects = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	return new motion._Actuate.EffectsOptions(target,duration,overwrite);
};
motion.Actuate.getLibrary = function(target,allowCreation) {
	if(allowCreation == null) allowCreation = true;
	if(!motion.Actuate.targetLibraries.exists(target) && allowCreation) motion.Actuate.targetLibraries.set(target,new Array());
	return motion.Actuate.targetLibraries.get(target);
};
motion.Actuate.motionPath = function(target,duration,properties,overwrite) {
	if(overwrite == null) overwrite = true;
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MotionPathActuator);
};
motion.Actuate.pause = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).pause(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.pause();
			}
		}
	}
};
motion.Actuate.pauseAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.pause();
		}
	}
};
motion.Actuate.reset = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var i = library.length - 1;
		while(i >= 0) {
			library[i].stop(null,false,false);
			i--;
		}
	}
	motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
};
motion.Actuate.resume = function(target) {
	if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).resume(); else {
		var library = motion.Actuate.getLibrary(target,false);
		if(library != null) {
			var _g = 0;
			while(_g < library.length) {
				var actuator = library[_g];
				++_g;
				actuator.resume();
			}
		}
	}
};
motion.Actuate.resumeAll = function() {
	var $it0 = motion.Actuate.targetLibraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var _g = 0;
		while(_g < library.length) {
			var actuator = library[_g];
			++_g;
			actuator.resume();
		}
	}
};
motion.Actuate.stop = function(target,properties,complete,sendEvent) {
	if(sendEvent == null) sendEvent = true;
	if(complete == null) complete = false;
	if(target != null) {
		if(js.Boot.__instanceof(target,motion.actuators.GenericActuator)) (js.Boot.__cast(target , motion.actuators.GenericActuator)).stop(null,complete,sendEvent); else {
			var library = motion.Actuate.getLibrary(target,false);
			if(library != null) {
				if(typeof(properties) == "string") {
					var temp = { };
					Reflect.setField(temp,properties,null);
					properties = temp;
				} else if((properties instanceof Array) && properties.__enum__ == null) {
					var temp1 = { };
					var _g = 0;
					var _g1;
					_g1 = js.Boot.__cast(properties , Array);
					while(_g < _g1.length) {
						var property = _g1[_g];
						++_g;
						Reflect.setField(temp1,property,null);
					}
					properties = temp1;
				}
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(properties,complete,sendEvent);
					i--;
				}
			}
		}
	}
};
motion.Actuate.timer = function(duration,customActuator) {
	return motion.Actuate.tween(new motion._Actuate.TweenTimer(0),duration,new motion._Actuate.TweenTimer(1),false,customActuator);
};
motion.Actuate.transform = function(target,duration,overwrite) {
	if(overwrite == null) overwrite = true;
	if(duration == null) duration = 0;
	return new motion._Actuate.TransformOptions(target,duration,overwrite);
};
motion.Actuate.tween = function(target,duration,properties,overwrite,customActuator) {
	if(overwrite == null) overwrite = true;
	if(target != null) {
		if(duration > 0) {
			if(customActuator == null) customActuator = motion.Actuate.defaultActuator;
			var actuator = Type.createInstance(customActuator,[target,duration,properties]);
			var library = motion.Actuate.getLibrary(actuator.target);
			if(overwrite) {
				var i = library.length - 1;
				while(i >= 0) {
					library[i].stop(actuator.properties,false,false);
					i--;
				}
				library = motion.Actuate.getLibrary(actuator.target);
			}
			library.push(actuator);
			actuator.move();
			return actuator;
		} else return motion.Actuate.apply(target,properties,customActuator);
	}
	return null;
};
motion.Actuate.unload = function(actuator) {
	var target = actuator.target;
	if(motion.Actuate.targetLibraries.h.__keys__[target.__id__] != null) {
		HxOverrides.remove(motion.Actuate.targetLibraries.h[target.__id__],actuator);
		if(motion.Actuate.targetLibraries.h[target.__id__].length == 0) motion.Actuate.targetLibraries.remove(target);
	}
};
motion.Actuate.update = function(target,duration,start,end,overwrite) {
	if(overwrite == null) overwrite = true;
	var properties = { start : start, end : end};
	return motion.Actuate.tween(target,duration,properties,overwrite,motion.actuators.MethodActuator);
};
motion._Actuate = {};
motion._Actuate.EffectsOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.EffectsOptions"] = motion._Actuate.EffectsOptions;
motion._Actuate.EffectsOptions.__name__ = ["motion","_Actuate","EffectsOptions"];
motion._Actuate.EffectsOptions.prototype = {
	filter: function(reference,properties) {
		properties.filter = reference;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.FilterActuator);
	}
	,__class__: motion._Actuate.EffectsOptions
};
motion._Actuate.TransformOptions = function(target,duration,overwrite) {
	this.target = target;
	this.duration = duration;
	this.overwrite = overwrite;
};
$hxClasses["motion._Actuate.TransformOptions"] = motion._Actuate.TransformOptions;
motion._Actuate.TransformOptions.__name__ = ["motion","_Actuate","TransformOptions"];
motion._Actuate.TransformOptions.prototype = {
	color: function(value,strength,alpha) {
		if(strength == null) strength = 1;
		if(value == null) value = 0;
		var properties = { colorValue : value, colorStrength : strength};
		if(alpha != null) properties.colorAlpha = alpha;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,sound: function(volume,pan) {
		var properties = { };
		if(volume != null) properties.soundVolume = volume;
		if(pan != null) properties.soundPan = pan;
		return motion.Actuate.tween(this.target,this.duration,properties,this.overwrite,motion.actuators.TransformActuator);
	}
	,__class__: motion._Actuate.TransformOptions
};
motion._Actuate.TweenTimer = function(progress) {
	this.progress = progress;
};
$hxClasses["motion._Actuate.TweenTimer"] = motion._Actuate.TweenTimer;
motion._Actuate.TweenTimer.__name__ = ["motion","_Actuate","TweenTimer"];
motion._Actuate.TweenTimer.prototype = {
	__class__: motion._Actuate.TweenTimer
};
motion.MotionPath = function() {
	this._x = new motion.ComponentPath();
	this._y = new motion.ComponentPath();
	this._rotation = null;
};
$hxClasses["motion.MotionPath"] = motion.MotionPath;
motion.MotionPath.__name__ = ["motion","MotionPath"];
motion.MotionPath.prototype = {
	bezier: function(x,y,controlX,controlY,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.BezierPath(x,controlX,strength));
		this._y.addPath(new motion.BezierPath(y,controlY,strength));
		return this;
	}
	,line: function(x,y,strength) {
		if(strength == null) strength = 1;
		this._x.addPath(new motion.LinearPath(x,strength));
		this._y.addPath(new motion.LinearPath(y,strength));
		return this;
	}
	,get_rotation: function() {
		if(this._rotation == null) this._rotation = new motion.RotationPath(this._x,this._y);
		return this._rotation;
	}
	,get_x: function() {
		return this._x;
	}
	,get_y: function() {
		return this._y;
	}
	,__class__: motion.MotionPath
	,__properties__: {get_y:"get_y",get_x:"get_x",get_rotation:"get_rotation"}
};
motion.IComponentPath = function() { };
$hxClasses["motion.IComponentPath"] = motion.IComponentPath;
motion.IComponentPath.__name__ = ["motion","IComponentPath"];
motion.IComponentPath.prototype = {
	__class__: motion.IComponentPath
};
motion.ComponentPath = function() {
	this.paths = new Array();
	this.start = 0;
	this.totalStrength = 0;
};
$hxClasses["motion.ComponentPath"] = motion.ComponentPath;
motion.ComponentPath.__name__ = ["motion","ComponentPath"];
motion.ComponentPath.__interfaces__ = [motion.IComponentPath];
motion.ComponentPath.prototype = {
	addPath: function(path) {
		this.paths.push(path);
		this.totalStrength += path.strength;
	}
	,calculate: function(k) {
		if(this.paths.length == 1) return this.paths[0].calculate(this.start,k); else {
			var ratio = k * this.totalStrength;
			var lastEnd = this.start;
			var _g = 0;
			var _g1 = this.paths;
			while(_g < _g1.length) {
				var path = _g1[_g];
				++_g;
				if(ratio > path.strength) {
					ratio -= path.strength;
					lastEnd = path.end;
				} else return path.calculate(lastEnd,ratio / path.strength);
			}
		}
		return 0;
	}
	,get_end: function() {
		if(this.paths.length > 0) {
			var path = this.paths[this.paths.length - 1];
			return path.end;
		} else return this.start;
	}
	,__class__: motion.ComponentPath
	,__properties__: {get_end:"get_end"}
};
motion.BezierPath = function(end,control,strength) {
	this.end = end;
	this.control = control;
	this.strength = strength;
};
$hxClasses["motion.BezierPath"] = motion.BezierPath;
motion.BezierPath.__name__ = ["motion","BezierPath"];
motion.BezierPath.prototype = {
	calculate: function(start,k) {
		return (1 - k) * (1 - k) * start + 2 * (1 - k) * k * this.control + k * k * this.end;
	}
	,__class__: motion.BezierPath
};
motion.LinearPath = function(end,strength) {
	motion.BezierPath.call(this,end,0,strength);
};
$hxClasses["motion.LinearPath"] = motion.LinearPath;
motion.LinearPath.__name__ = ["motion","LinearPath"];
motion.LinearPath.__super__ = motion.BezierPath;
motion.LinearPath.prototype = $extend(motion.BezierPath.prototype,{
	calculate: function(start,k) {
		return start + k * (this.end - start);
	}
	,__class__: motion.LinearPath
});
motion.RotationPath = function(x,y) {
	this.step = 0.01;
	this._x = x;
	this._y = y;
	this.offset = 0;
	this.start = this.calculate(0.0);
};
$hxClasses["motion.RotationPath"] = motion.RotationPath;
motion.RotationPath.__name__ = ["motion","RotationPath"];
motion.RotationPath.__interfaces__ = [motion.IComponentPath];
motion.RotationPath.prototype = {
	calculate: function(k) {
		var dX = this._x.calculate(k) - this._x.calculate(k + this.step);
		var dY = this._y.calculate(k) - this._y.calculate(k + this.step);
		var angle = Math.atan2(dY,dX) * (180 / Math.PI);
		angle = (angle + this.offset) % 360;
		return angle;
	}
	,get_end: function() {
		return this.calculate(1.0);
	}
	,__class__: motion.RotationPath
	,__properties__: {get_end:"get_end"}
};
motion.actuators.FilterActuator = function(target,duration,properties) {
	this.filterIndex = -1;
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(js.Boot.__instanceof(properties.filter,Class)) {
		this.filterClass = properties.filter;
		var _g = 0;
		var _g1 = (js.Boot.__cast(target , openfl.display.DisplayObject)).get_filters();
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(filter,this.filterClass)) this.filter = filter;
		}
	} else {
		this.filterIndex = properties.filter;
		this.filter = (js.Boot.__cast(target , openfl.display.DisplayObject)).get_filters()[this.filterIndex];
	}
};
$hxClasses["motion.actuators.FilterActuator"] = motion.actuators.FilterActuator;
motion.actuators.FilterActuator.__name__ = ["motion","actuators","FilterActuator"];
motion.actuators.FilterActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.FilterActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") Reflect.setField(this.filter,propertyName,Reflect.field(this.properties,propertyName));
		}
		var filters = this.getField(this.target,"filters");
		Reflect.setField(filters,this.properties.filter,this.filter);
		this.setField(this.target,"filters",filters);
	}
	,initialize: function() {
		var details;
		var start;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(propertyName != "filter") {
				start = this.getField(this.filter,propertyName);
				details = new motion.actuators.PropertyDetails(this.filter,propertyName,start,Reflect.field(this.properties,propertyName) - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		var filters = (js.Boot.__cast(this.target , openfl.display.DisplayObject)).get_filters();
		if(this.filterIndex > -1) Reflect.setField(filters,this.properties.filter,this.filter); else {
			var _g1 = 0;
			var _g = filters.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(js.Boot.__instanceof(filters[i],this.filterClass)) filters[i] = this.filter;
			}
		}
		this.setField(this.target,"filters",filters);
	}
	,__class__: motion.actuators.FilterActuator
});
motion.actuators.MethodActuator = function(target,duration,properties) {
	this.currentParameters = new Array();
	this.tweenProperties = { };
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
	if(!Object.prototype.hasOwnProperty.call(properties,"start")) this.properties.start = new Array();
	if(!Object.prototype.hasOwnProperty.call(properties,"end")) this.properties.end = this.properties.start;
	var _g1 = 0;
	var _g = this.properties.start.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.currentParameters.push(null);
	}
};
$hxClasses["motion.actuators.MethodActuator"] = motion.actuators.MethodActuator;
motion.actuators.MethodActuator.__name__ = ["motion","actuators","MethodActuator"];
motion.actuators.MethodActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MethodActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		this.callMethod(this.target,this.properties.end);
	}
	,complete: function(sendEvent) {
		if(sendEvent == null) sendEvent = true;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
		}
		this.callMethod(this.target,this.currentParameters);
		motion.actuators.SimpleActuator.prototype.complete.call(this,sendEvent);
	}
	,initialize: function() {
		var details;
		var propertyName;
		var start;
		var _g1 = 0;
		var _g = this.properties.start.length;
		while(_g1 < _g) {
			var i = _g1++;
			propertyName = "param" + i;
			start = this.properties.start[i];
			this.tweenProperties[propertyName] = start;
			if(typeof(start) == "number" || ((start | 0) === start)) {
				details = new motion.actuators.PropertyDetails(this.tweenProperties,propertyName,start,this.properties.end[i] - start);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.active) {
			var _g1 = 0;
			var _g = this.properties.start.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.currentParameters[i] = Reflect.field(this.tweenProperties,"param" + i);
			}
			this.callMethod(this.target,this.currentParameters);
		}
	}
	,__class__: motion.actuators.MethodActuator
});
motion.actuators.MotionPathActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.MotionPathActuator"] = motion.actuators.MotionPathActuator;
motion.actuators.MotionPathActuator.__name__ = ["motion","actuators","MotionPathActuator"];
motion.actuators.MotionPathActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.MotionPathActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) Reflect.setField(this.target,propertyName,(js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end()); else Reflect.setProperty(this.target,propertyName,(js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath)).get_end());
		}
	}
	,initialize: function() {
		var details;
		var path;
		var _g = 0;
		var _g1 = Reflect.fields(this.properties);
		while(_g < _g1.length) {
			var propertyName = _g1[_g];
			++_g;
			path = js.Boot.__cast(Reflect.field(this.properties,propertyName) , motion.IComponentPath);
			if(path != null) {
				var isField = true;
				if(Object.prototype.hasOwnProperty.call(this.target,propertyName)) path.start = Reflect.field(this.target,propertyName); else {
					isField = false;
					path.start = Reflect.getProperty(this.target,propertyName);
				}
				details = new motion.actuators.PropertyPathDetails(this.target,propertyName,path,isField);
				this.propertyDetails.push(details);
			}
		}
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,update: function(currentTime) {
		if(!this.paused) {
			var details;
			var easing;
			var tweenPosition = (currentTime - this.timeOffset) / this.duration;
			if(tweenPosition > 1) tweenPosition = 1;
			if(!this.initialized) this.initialize();
			if(!this.special) {
				easing = this._ease.calculate(tweenPosition);
				var _g = 0;
				var _g1 = this.propertyDetails;
				while(_g < _g1.length) {
					var details1 = _g1[_g];
					++_g;
					if(details1.isField) Reflect.setField(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details1.target,details1.propertyName,(js.Boot.__cast(details1 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
				}
			} else {
				if(!this._reverse) easing = this._ease.calculate(tweenPosition); else easing = this._ease.calculate(1 - tweenPosition);
				var endValue;
				var _g2 = 0;
				var _g11 = this.propertyDetails;
				while(_g2 < _g11.length) {
					var details2 = _g11[_g2];
					++_g2;
					if(!this._snapping) {
						if(details2.isField) Reflect.setField(details2.target,details2.propertyName,(js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing)); else Reflect.setProperty(details2.target,details2.propertyName,(js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing));
					} else if(details2.isField) Reflect.setField(details2.target,details2.propertyName,Math.round((js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing))); else Reflect.setProperty(details2.target,details2.propertyName,Math.round((js.Boot.__cast(details2 , motion.actuators.PropertyPathDetails)).path.calculate(easing)));
				}
			}
			if(tweenPosition == 1) {
				if(this._repeat == 0) {
					this.active = false;
					if(this.toggleVisible && this.getField(this.target,"alpha") == 0) this.setField(this.target,"visible",false);
					this.complete(true);
					return;
				} else {
					if(this._reflect) this._reverse = !this._reverse;
					this.startTime = currentTime;
					this.timeOffset = this.startTime + this._delay;
					if(this._repeat > 0) this._repeat--;
				}
			}
			if(this.sendChange) this.change();
		}
	}
	,__class__: motion.actuators.MotionPathActuator
});
motion.actuators.PropertyDetails = function(target,propertyName,start,change,isField) {
	if(isField == null) isField = true;
	this.target = target;
	this.propertyName = propertyName;
	this.start = start;
	this.change = change;
	this.isField = isField;
};
$hxClasses["motion.actuators.PropertyDetails"] = motion.actuators.PropertyDetails;
motion.actuators.PropertyDetails.__name__ = ["motion","actuators","PropertyDetails"];
motion.actuators.PropertyDetails.prototype = {
	__class__: motion.actuators.PropertyDetails
};
motion.actuators.PropertyPathDetails = function(target,propertyName,path,isField) {
	if(isField == null) isField = true;
	motion.actuators.PropertyDetails.call(this,target,propertyName,0,0,isField);
	this.path = path;
};
$hxClasses["motion.actuators.PropertyPathDetails"] = motion.actuators.PropertyPathDetails;
motion.actuators.PropertyPathDetails.__name__ = ["motion","actuators","PropertyPathDetails"];
motion.actuators.PropertyPathDetails.__super__ = motion.actuators.PropertyDetails;
motion.actuators.PropertyPathDetails.prototype = $extend(motion.actuators.PropertyDetails.prototype,{
	__class__: motion.actuators.PropertyPathDetails
});
motion.actuators.TransformActuator = function(target,duration,properties) {
	motion.actuators.SimpleActuator.call(this,target,duration,properties);
};
$hxClasses["motion.actuators.TransformActuator"] = motion.actuators.TransformActuator;
motion.actuators.TransformActuator.__name__ = ["motion","actuators","TransformActuator"];
motion.actuators.TransformActuator.__super__ = motion.actuators.SimpleActuator;
motion.actuators.TransformActuator.prototype = $extend(motion.actuators.SimpleActuator.prototype,{
	apply: function() {
		this.initialize();
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.endColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.endSoundTransform);
	}
	,initialize: function() {
		if(Object.prototype.hasOwnProperty.call(this.properties,"colorValue") && js.Boot.__instanceof(this.target,openfl.display.DisplayObject)) this.initializeColor();
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundVolume") || Object.prototype.hasOwnProperty.call(this.properties,"soundPan")) this.initializeSound();
		this.detailsLength = this.propertyDetails.length;
		this.initialized = true;
	}
	,initializeColor: function() {
		this.endColorTransform = new openfl.geom.ColorTransform();
		var color = this.properties.colorValue;
		var strength = this.properties.colorStrength;
		if(strength < 1) {
			var multiplier;
			var offset;
			if(strength < 0.5) {
				multiplier = 1;
				offset = strength * 2;
			} else {
				multiplier = 1 - (strength - 0.5) * 2;
				offset = 1;
			}
			this.endColorTransform.redMultiplier = multiplier;
			this.endColorTransform.greenMultiplier = multiplier;
			this.endColorTransform.blueMultiplier = multiplier;
			this.endColorTransform.redOffset = offset * (color >> 16 & 255);
			this.endColorTransform.greenOffset = offset * (color >> 8 & 255);
			this.endColorTransform.blueOffset = offset * (color & 255);
		} else {
			this.endColorTransform.redMultiplier = 0;
			this.endColorTransform.greenMultiplier = 0;
			this.endColorTransform.blueMultiplier = 0;
			this.endColorTransform.redOffset = color >> 16 & 255;
			this.endColorTransform.greenOffset = color >> 8 & 255;
			this.endColorTransform.blueOffset = color & 255;
		}
		var propertyNames = ["redMultiplier","greenMultiplier","blueMultiplier","redOffset","greenOffset","blueOffset"];
		if(Object.prototype.hasOwnProperty.call(this.properties,"colorAlpha")) {
			this.endColorTransform.alphaMultiplier = this.properties.colorAlpha;
			propertyNames.push("alphaMultiplier");
		} else this.endColorTransform.alphaMultiplier = this.getField(this.target,"alpha");
		var transform = this.getField(this.target,"transform");
		var begin = this.getField(transform,"colorTransform");
		this.tweenColorTransform = new openfl.geom.ColorTransform();
		var details;
		var start;
		var _g = 0;
		while(_g < propertyNames.length) {
			var propertyName = propertyNames[_g];
			++_g;
			start = this.getField(begin,propertyName);
			details = new motion.actuators.PropertyDetails(this.tweenColorTransform,propertyName,start,this.getField(this.endColorTransform,propertyName) - start);
			this.propertyDetails.push(details);
		}
	}
	,initializeSound: function() {
		if(this.getField(this.target,"soundTransform") == null) this.setField(this.target,"soundTransform",new openfl.media.SoundTransform());
		var start = this.getField(this.target,"soundTransform");
		this.endSoundTransform = this.getField(this.target,"soundTransform");
		this.tweenSoundTransform = new openfl.media.SoundTransform();
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundVolume")) {
			this.endSoundTransform.volume = this.properties.soundVolume;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"volume",start.volume,this.endSoundTransform.volume - start.volume));
		}
		if(Object.prototype.hasOwnProperty.call(this.properties,"soundPan")) {
			this.endSoundTransform.pan = this.properties.soundPan;
			this.propertyDetails.push(new motion.actuators.PropertyDetails(this.tweenSoundTransform,"pan",start.pan,this.endSoundTransform.pan - start.pan));
		}
	}
	,update: function(currentTime) {
		motion.actuators.SimpleActuator.prototype.update.call(this,currentTime);
		if(this.endColorTransform != null) {
			var transform = this.getField(this.target,"transform");
			this.setField(transform,"colorTransform",this.tweenColorTransform);
		}
		if(this.endSoundTransform != null) this.setField(this.target,"soundTransform",this.tweenSoundTransform);
	}
	,__class__: motion.actuators.TransformActuator
});
motion.easing.ExpoEaseIn = function() {
};
$hxClasses["motion.easing.ExpoEaseIn"] = motion.easing.ExpoEaseIn;
motion.easing.ExpoEaseIn.__name__ = ["motion","easing","ExpoEaseIn"];
motion.easing.ExpoEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseIn.prototype = {
	calculate: function(k) {
		if(k == 0) return 0; else return Math.pow(2,10 * (k - 1));
	}
	,ease: function(t,b,c,d) {
		if(t == 0) return b; else return c * Math.pow(2,10 * (t / d - 1)) + b;
	}
	,__class__: motion.easing.ExpoEaseIn
};
motion.easing.ExpoEaseInOut = function() {
};
$hxClasses["motion.easing.ExpoEaseInOut"] = motion.easing.ExpoEaseInOut;
motion.easing.ExpoEaseInOut.__name__ = ["motion","easing","ExpoEaseInOut"];
motion.easing.ExpoEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.ExpoEaseInOut.prototype = {
	calculate: function(k) {
		if(k == 0) return 0;
		if(k == 1) return 1;
		if((k /= 0.5) < 1.0) return 0.5 * Math.pow(2,10 * (k - 1));
		return 0.5 * (2 - Math.pow(2,-10 * --k));
	}
	,ease: function(t,b,c,d) {
		if(t == 0) return b;
		if(t == d) return b + c;
		if((t /= d / 2.0) < 1.0) return c / 2 * Math.pow(2,10 * (t - 1)) + b;
		return c / 2 * (2 - Math.pow(2,-10 * --t)) + b;
	}
	,__class__: motion.easing.ExpoEaseInOut
};
motion.easing.Quad = function() { };
$hxClasses["motion.easing.Quad"] = motion.easing.Quad;
motion.easing.Quad.__name__ = ["motion","easing","Quad"];
motion.easing.Quad.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Quad.get_easeIn = function() {
	return new motion.easing.QuadEaseIn();
};
motion.easing.Quad.get_easeInOut = function() {
	return new motion.easing.QuadEaseInOut();
};
motion.easing.Quad.get_easeOut = function() {
	return new motion.easing.QuadEaseOut();
};
motion.easing.QuadEaseIn = function() {
};
$hxClasses["motion.easing.QuadEaseIn"] = motion.easing.QuadEaseIn;
motion.easing.QuadEaseIn.__name__ = ["motion","easing","QuadEaseIn"];
motion.easing.QuadEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.QuadEaseIn.prototype = {
	calculate: function(k) {
		return k * k;
	}
	,ease: function(t,b,c,d) {
		return c * (t /= d) * t + b;
	}
	,__class__: motion.easing.QuadEaseIn
};
motion.easing.QuadEaseInOut = function() {
};
$hxClasses["motion.easing.QuadEaseInOut"] = motion.easing.QuadEaseInOut;
motion.easing.QuadEaseInOut.__name__ = ["motion","easing","QuadEaseInOut"];
motion.easing.QuadEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.QuadEaseInOut.prototype = {
	calculate: function(k) {
		if((k *= 2) < 1) return 0.5 * k * k;
		return -0.5 * ((k - 1) * (k - 3) - 1);
	}
	,ease: function(t,b,c,d) {
		if((t /= d / 2) < 1) return c / 2 * t * t + b;
		return -c / 2 * ((t - 1) * (t - 3) - 1) + b;
	}
	,__class__: motion.easing.QuadEaseInOut
};
motion.easing.QuadEaseOut = function() {
};
$hxClasses["motion.easing.QuadEaseOut"] = motion.easing.QuadEaseOut;
motion.easing.QuadEaseOut.__name__ = ["motion","easing","QuadEaseOut"];
motion.easing.QuadEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.QuadEaseOut.prototype = {
	calculate: function(k) {
		return -k * (k - 2);
	}
	,ease: function(t,b,c,d) {
		return -c * (t /= d) * (t - 2) + b;
	}
	,__class__: motion.easing.QuadEaseOut
};
openfl.AssetCache = function() {
	this.enabled = true;
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = ["openfl","AssetCache"];
openfl.AssetCache.prototype = {
	clear: function(prefix) {
		if(prefix == null) {
			this.bitmapData = new haxe.ds.StringMap();
			this.font = new haxe.ds.StringMap();
			this.sound = new haxe.ds.StringMap();
		} else {
			var keys = this.bitmapData.keys();
			while( keys.hasNext() ) {
				var key = keys.next();
				if(StringTools.startsWith(key,prefix)) this.bitmapData.remove(key);
			}
			var keys1 = this.font.keys();
			while( keys1.hasNext() ) {
				var key1 = keys1.next();
				if(StringTools.startsWith(key1,prefix)) this.font.remove(key1);
			}
			var keys2 = this.sound.keys();
			while( keys2.hasNext() ) {
				var key2 = keys2.next();
				if(StringTools.startsWith(key2,prefix)) this.sound.remove(key2);
			}
		}
	}
	,__class__: openfl.AssetCache
};
openfl.Assets = function() { };
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.addEventListener = function(type,listener,useCapture,priority,useWeakReference) {
	if(useWeakReference == null) useWeakReference = false;
	if(priority == null) priority = 0;
	if(useCapture == null) useCapture = false;
	openfl.Assets.initialize();
	openfl.Assets.dispatcher.addEventListener(type,listener,useCapture,priority,useWeakReference);
};
openfl.Assets.dispatchEvent = function(event) {
	openfl.Assets.initialize();
	return openfl.Assets.dispatcher.dispatchEvent(event);
};
openfl.Assets.exists = function(id,type) {
	openfl.Assets.initialize();
	if(type == null) type = openfl.AssetType.BINARY;
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
};
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(library.isLocal(symbolName,openfl.AssetType.IMAGE)) {
				var bitmapData1 = library.getBitmapData(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.bitmapData.set(id,bitmapData1);
				return bitmapData1;
			} else haxe.Log.trace("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 139, className : "openfl.Assets", methodName : "getBitmapData"});
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 145, className : "openfl.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 151, className : "openfl.Assets", methodName : "getBitmapData"});
	return null;
};
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) return library.getBytes(symbolName); else haxe.Log.trace("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 188, className : "openfl.Assets", methodName : "getBytes"});
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 194, className : "openfl.Assets", methodName : "getBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 200, className : "openfl.Assets", methodName : "getBytes"});
	return null;
};
openfl.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return openfl.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(library.isLocal(symbolName,openfl.AssetType.FONT)) {
				var font = library.getFont(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.font.set(id,font);
				return font;
			} else haxe.Log.trace("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 251, className : "openfl.Assets", methodName : "getFont"});
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 257, className : "openfl.Assets", methodName : "getFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 263, className : "openfl.Assets", methodName : "getFont"});
	return null;
};
openfl.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return openfl.Assets.libraries.get(name);
};
openfl.Assets.getMovieClip = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else haxe.Log.trace("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 313, className : "openfl.Assets", methodName : "getMovieClip"});
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 319, className : "openfl.Assets", methodName : "getMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 325, className : "openfl.Assets", methodName : "getMovieClip"});
	return null;
};
openfl.Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(library.isLocal(symbolName,openfl.AssetType.MUSIC)) {
				var sound1 = library.getMusic(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound1);
				return sound1;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 382, className : "openfl.Assets", methodName : "getMusic"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 388, className : "openfl.Assets", methodName : "getMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 394, className : "openfl.Assets", methodName : "getMusic"});
	return null;
};
openfl.Assets.getPath = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else haxe.Log.trace("[openfl.Assets] There is no asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 429, className : "openfl.Assets", methodName : "getPath"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 435, className : "openfl.Assets", methodName : "getPath"});
	return null;
};
openfl.Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(library.isLocal(symbolName,openfl.AssetType.SOUND)) {
				var sound1 = library.getSound(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound1);
				return sound1;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 492, className : "openfl.Assets", methodName : "getSound"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 498, className : "openfl.Assets", methodName : "getSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 504, className : "openfl.Assets", methodName : "getSound"});
	return null;
};
openfl.Assets.getText = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			if(library.isLocal(symbolName,openfl.AssetType.TEXT)) return library.getText(symbolName); else haxe.Log.trace("[openfl.Assets] String asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 541, className : "openfl.Assets", methodName : "getText"});
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 547, className : "openfl.Assets", methodName : "getText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 553, className : "openfl.Assets", methodName : "getText"});
	return null;
};
openfl.Assets.hasEventListener = function(type) {
	openfl.Assets.initialize();
	return openfl.Assets.dispatcher.hasEventListener(type);
};
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		openfl.Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl.Assets.initialized = true;
	}
};
openfl.Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled) {
		if(type == openfl.AssetType.IMAGE || type == null) {
			if(openfl.Assets.cache.bitmapData.exists(id)) return true;
		}
		if(type == openfl.AssetType.FONT || type == null) {
			if(openfl.Assets.cache.font.exists(id)) return true;
		}
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC || type == null) {
			if(openfl.Assets.cache.sound.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
};
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return bitmapData.__sourceImage != null || bitmapData.__sourceCanvas != null;
	return true;
};
openfl.Assets.isValidSound = function(sound) {
	return true;
};
openfl.Assets.list = function(type) {
	openfl.Assets.initialize();
	var items = [];
	var $it0 = openfl.Assets.libraries.iterator();
	while( $it0.hasNext() ) {
		var library = $it0.next();
		var libraryItems = library.list(type);
		if(libraryItems != null) items = items.concat(libraryItems);
	}
	return items;
};
openfl.Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadBitmapData(symbolName,function(bitmapData1) {
				openfl.Assets.cache.bitmapData.set(id,bitmapData1);
				handler(bitmapData1);
			}); else library.loadBitmapData(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 750, className : "openfl.Assets", methodName : "loadBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 756, className : "openfl.Assets", methodName : "loadBitmapData"});
	handler(null);
};
openfl.Assets.loadBytes = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			library.loadBytes(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 786, className : "openfl.Assets", methodName : "loadBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 792, className : "openfl.Assets", methodName : "loadBytes"});
	handler(null);
};
openfl.Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) {
		handler(openfl.Assets.cache.font.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadFont(symbolName,function(font) {
				openfl.Assets.cache.font.set(id,font);
				handler(font);
			}); else library.loadFont(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 843, className : "openfl.Assets", methodName : "loadFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 849, className : "openfl.Assets", methodName : "loadFont"});
	handler(null);
};
openfl.Assets.loadLibrary = function(name,handler) {
	openfl.Assets.initialize();
	var data = openfl.Assets.getText("libraries/" + name + ".dat");
	if(data != null && data != "") {
		var unserializer = new haxe.Unserializer(data);
		unserializer.setResolver({ resolveEnum : openfl.Assets.resolveEnum, resolveClass : openfl.Assets.resolveClass});
		var library = unserializer.unserialize();
		openfl.Assets.libraries.set(name,library);
		library.eventCallback = openfl.Assets.library_onEvent;
		library.load(handler);
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + name + "\"",{ fileName : "Assets.hx", lineNumber : 880, className : "openfl.Assets", methodName : "loadLibrary"});
};
openfl.Assets.loadMusic = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadMusic(symbolName,function(sound1) {
				openfl.Assets.cache.sound.set(id,sound1);
				handler(sound1);
			}); else library.loadMusic(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 935, className : "openfl.Assets", methodName : "loadMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 941, className : "openfl.Assets", methodName : "loadMusic"});
	handler(null);
};
openfl.Assets.loadMovieClip = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			library.loadMovieClip(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 971, className : "openfl.Assets", methodName : "loadMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 977, className : "openfl.Assets", methodName : "loadMovieClip"});
	handler(null);
};
openfl.Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadSound(symbolName,function(sound1) {
				openfl.Assets.cache.sound.set(id,sound1);
				handler(sound1);
			}); else library.loadSound(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 1034, className : "openfl.Assets", methodName : "loadSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 1040, className : "openfl.Assets", methodName : "loadSound"});
	handler(null);
};
openfl.Assets.loadText = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName;
	var pos = id.indexOf(":") + 1;
	symbolName = HxOverrides.substr(id,pos,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			library.loadText(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 1070, className : "openfl.Assets", methodName : "loadText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 1076, className : "openfl.Assets", methodName : "loadText"});
	handler(null);
};
openfl.Assets.registerLibrary = function(name,library) {
	if(openfl.Assets.libraries.exists(name)) openfl.Assets.unloadLibrary(name);
	if(library != null) library.eventCallback = openfl.Assets.library_onEvent;
	openfl.Assets.libraries.set(name,library);
};
openfl.Assets.removeEventListener = function(type,listener,capture) {
	if(capture == null) capture = false;
	openfl.Assets.initialize();
	openfl.Assets.dispatcher.removeEventListener(type,listener,capture);
};
openfl.Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
};
openfl.Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
};
openfl.Assets.unloadLibrary = function(name) {
	openfl.Assets.initialize();
	var library = openfl.Assets.libraries.get(name);
	if(library != null) {
		openfl.Assets.cache.clear(name + ":");
		library.eventCallback = null;
	}
	openfl.Assets.libraries.remove(name);
};
openfl.Assets.library_onEvent = function(library,type) {
	if(type == "change") {
		openfl.Assets.cache.clear();
		openfl.Assets.dispatchEvent(new openfl.events.Event(openfl.events.Event.CHANGE));
	}
};
openfl.AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl.AssetData;
openfl.AssetData.__name__ = ["openfl","AssetData"];
openfl.AssetData.prototype = {
	__class__: openfl.AssetData
};
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : ["openfl","AssetType"], __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] };
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl.AssetType.MOVIE_CLIP.toString = $estr;
openfl.AssetType.MOVIE_CLIP.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",4];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",5];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEMPLATE = ["TEMPLATE",6];
openfl.AssetType.TEMPLATE.toString = $estr;
openfl.AssetType.TEMPLATE.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",7];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
openfl.Lib = function() { };
$hxClasses["openfl.Lib"] = openfl.Lib;
openfl.Lib.__name__ = ["openfl","Lib"];
openfl.Lib.current = null;
openfl.Lib["as"] = function(v,c) {
	if(js.Boot.__instanceof(v,c)) return v; else return null;
};
openfl.Lib.attach = function(name) {
	return new openfl.display.MovieClip();
};
openfl.Lib.create = function(element,width,height,backgroundColor) {
	if(width == null) width = 0;
	if(height == null) height = 0;
	
			var lastTime = 0;
			var vendors = ['ms', 'moz', 'webkit', 'o'];
			for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
										   || window[vendors[x]+'CancelRequestAnimationFrame'];
			}
			
			if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
					var currTime = new Date().getTime();
					var timeToCall = Math.max(0, 16 - (currTime - lastTime));
					var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
					  timeToCall);
					lastTime = currTime + timeToCall;
					return id;
				};
			
			if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
					clearTimeout(id);
				};
			
			window.requestAnimFrame = window.requestAnimationFrame;
		;
	var stage = new openfl.display.Stage(width,height,element,backgroundColor);
	if(openfl.Lib.current == null) {
		openfl.Lib.current = new openfl.display.MovieClip();
		stage.addChild(openfl.Lib.current);
	}
};
openfl.Lib.getTimer = function() {
	return Std["int"]((haxe.Timer.stamp() - openfl.Lib.__startTime) * 1000);
};
openfl.Lib.getURL = function(request,target) {
	if(target == null) target = "_blank";
	window.open(request.url,target);
};
openfl.Lib.notImplemented = function(api) {
	if(!openfl.Lib.__sentWarnings.exists(api)) {
		openfl.Lib.__sentWarnings.set(api,true);
		haxe.Log.trace("Warning: " + api + " is not implemented",{ fileName : "Lib.hx", lineNumber : 114, className : "openfl.Lib", methodName : "notImplemented"});
	}
};
openfl.Lib.preventDefaultTouchMove = function() {
	window.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
};
openfl.Lib.trace = function(arg) {
	haxe.Log.trace(arg,{ fileName : "Lib.hx", lineNumber : 134, className : "openfl.Lib", methodName : "trace"});
};
openfl.Memory = function() { };
$hxClasses["openfl.Memory"] = openfl.Memory;
openfl.Memory.__name__ = ["openfl","Memory"];
openfl.Memory.gcRef = null;
openfl.Memory.len = null;
openfl.Memory._setPositionTemporarily = function(position,action) {
	var oldPosition = openfl.Memory.gcRef.position;
	openfl.Memory.gcRef.position = position;
	var value = action();
	openfl.Memory.gcRef.position = oldPosition;
	return value;
};
openfl.Memory.getByte = function(addr) {
	return openfl.Memory.gcRef.__get(addr);
};
openfl.Memory.getDouble = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readDouble();
	});
};
openfl.Memory.getFloat = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readFloat();
	});
};
openfl.Memory.getI32 = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readInt();
	});
};
openfl.Memory.getUI16 = function(addr) {
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readUnsignedShort();
	});
};
openfl.Memory.select = function(inBytes) {
	openfl.Memory.gcRef = inBytes;
	if(inBytes != null) openfl.Memory.len = inBytes.length; else openfl.Memory.len = 0;
};
openfl.Memory.setByte = function(addr,v) {
	openfl.Memory.gcRef.__set(addr,v);
};
openfl.Memory.setDouble = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeDouble(v);
	});
};
openfl.Memory.setFloat = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeFloat(v);
	});
};
openfl.Memory.setI16 = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeUnsignedShort(v);
	});
};
openfl.Memory.setI32 = function(addr,v) {
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeInt(v);
	});
};
openfl._Vector = {};
openfl._Vector.Vector_Impl_ = function() { };
$hxClasses["openfl._Vector.Vector_Impl_"] = openfl._Vector.Vector_Impl_;
openfl._Vector.Vector_Impl_.__name__ = ["openfl","_Vector","Vector_Impl_"];
openfl._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
openfl._Vector.Vector_Impl_._new = function(length,fixed) {
	if(fixed == null) fixed = false;
	if(length == null) length = 0;
	var this1;
	this1 = new openfl.VectorData();
	var this2;
	this2 = new Array(length);
	this1.data = this2;
	this1.length = length;
	this1.fixed = fixed;
	return this1;
};
openfl._Vector.Vector_Impl_.concat = function(this1,a) {
	var vectorData = new openfl.VectorData();
	if(a != null) vectorData.length = this1.length + a.length; else vectorData.length = this1.length;
	vectorData.fixed = false;
	var this2;
	this2 = new Array(vectorData.length);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,vectorData.data,0,this1.length);
	if(a != null) haxe.ds._Vector.Vector_Impl_.blit(a.data,0,vectorData.data,this1.length,a.length);
	return vectorData;
};
openfl._Vector.Vector_Impl_.copy = function(this1) {
	var vectorData = new openfl.VectorData();
	vectorData.length = this1.length;
	vectorData.fixed = this1.fixed;
	var this2;
	this2 = new Array(this1.length);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,vectorData.data,0,this1.length);
	return vectorData;
};
openfl._Vector.Vector_Impl_.iterator = function(this1) {
	return new openfl.VectorDataIterator(this1);
};
openfl._Vector.Vector_Impl_.join = function(this1,sep) {
	var output = "";
	var _g1 = 0;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(i > 0) output += sep;
		output += Std.string(this1.data[i]);
	}
	return output;
};
openfl._Vector.Vector_Impl_.pop = function(this1) {
	if(!this1.fixed) {
		if(this1.length > 0) {
			this1.length--;
			return this1.data[this1.length];
		}
	}
	return null;
};
openfl._Vector.Vector_Impl_.push = function(this1,x) {
	if(!this1.fixed) {
		this1.length++;
		if(this1.data.length < this1.length) {
			var data;
			var this2;
			this2 = new Array(this1.data.length + 10);
			data = this2;
			haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,0,this1.data.length);
			this1.data = data;
		}
		this1.data[this1.length - 1] = x;
	}
	return this1.length;
};
openfl._Vector.Vector_Impl_.reverse = function(this1) {
	var data;
	var this2;
	this2 = new Array(this1.length);
	data = this2;
	var _g1 = 0;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		data[this1.length - 1 - i] = this1.data[i];
	}
	this1.data = data;
};
openfl._Vector.Vector_Impl_.shift = function(this1) {
	if(!this1.fixed && this1.length > 0) {
		var value = this1.data[0];
		this1.length--;
		haxe.ds._Vector.Vector_Impl_.blit(this1.data,1,this1.data,0,this1.length);
		return value;
	}
	return null;
};
openfl._Vector.Vector_Impl_.unshift = function(this1,x) {
	if(!this1.fixed) {
		this1.length++;
		if(this1.data.length < this1.length) {
			var data;
			var this2;
			this2 = new Array(this1.length + 10);
			data = this2;
			haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,1,this1.data.length);
			this1.data = data;
		} else haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,this1.data,1,this1.length - 1);
		this1.data[0] = x;
	}
};
openfl._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	if(end == null) end = 0;
	if(pos == null) pos = 0;
	if(pos < 0) pos += this1.length;
	if(end <= 0) end += this1.length;
	if(end > this1.length) end = this1.length;
	var length = end - pos;
	if(length <= 0 || length > this1.length) length = this1.length;
	var vectorData = new openfl.VectorData();
	vectorData.length = end - pos;
	vectorData.fixed = true;
	var this2;
	this2 = new Array(length);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,pos,vectorData.data,0,length);
	return vectorData;
};
openfl._Vector.Vector_Impl_.sort = function(this1,f) {
	var array = haxe.ds._Vector.Vector_Impl_.toArray(this1.data);
	array.sort(f);
	var vec;
	var this2;
	this2 = new Array(array.length);
	vec = this2;
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = array[i];
	}
	this1.data = vec;
};
openfl._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	if(pos < 0) pos += this1.length;
	if(pos + len > this1.length) len = this1.length - pos;
	if(len < 0) len = 0;
	var vectorData = new openfl.VectorData();
	vectorData.length = len;
	vectorData.fixed = false;
	var this2;
	this2 = new Array(len);
	vectorData.data = this2;
	haxe.ds._Vector.Vector_Impl_.blit(this1.data,pos,vectorData.data,0,len);
	if(len > 0) {
		this1.length -= len;
		haxe.ds._Vector.Vector_Impl_.blit(this1.data,pos + len,this1.data,pos,this1.length - pos);
	}
	return vectorData;
};
openfl._Vector.Vector_Impl_.toString = function(this1) {
	return "";
};
openfl._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from;
	var _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1.data[i] == x) return i;
	}
	return -1;
};
openfl._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1.data[i] == x) return i;
		i--;
	}
	return -1;
};
openfl._Vector.Vector_Impl_.ofArray = function(a) {
	var vectorData = new openfl.VectorData();
	vectorData.length = a.length;
	vectorData.fixed = true;
	var vec;
	var this1;
	this1 = new Array(a.length);
	vec = this1;
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = a[i];
	}
	vectorData.data = vec;
	return vectorData;
};
openfl._Vector.Vector_Impl_.convert = function(v) {
	return v;
};
openfl._Vector.Vector_Impl_.arrayAccess = function(this1,key) {
	return this1.data[key];
};
openfl._Vector.Vector_Impl_.arrayWrite = function(this1,key,value) {
	if(key >= this1.length && !this1.fixed) this1.length = key + 1;
	return this1.data[key] = value;
};
openfl._Vector.Vector_Impl_.fromArray = function(value) {
	var vectorData = new openfl.VectorData();
	vectorData.length = value.length;
	vectorData.fixed = true;
	var vec;
	var this1;
	this1 = new Array(value.length);
	vec = this1;
	var _g1 = 0;
	var _g = value.length;
	while(_g1 < _g) {
		var i = _g1++;
		vec[i] = value[i];
	}
	vectorData.data = vec;
	return vectorData;
};
openfl._Vector.Vector_Impl_.toArray = function(this1) {
	var value = new Array();
	var _g1 = 0;
	var _g = this1.data.length;
	while(_g1 < _g) {
		var i = _g1++;
		value.push(this1.data[i]);
	}
	return value;
};
openfl._Vector.Vector_Impl_.fromHaxeVector = function(value) {
	var vectorData = new openfl.VectorData();
	vectorData.length = value.length;
	vectorData.fixed = true;
	vectorData.data = value;
	return vectorData;
};
openfl._Vector.Vector_Impl_.toHaxeVector = function(this1) {
	return this1.data;
};
openfl._Vector.Vector_Impl_.fromVectorData = function(value) {
	return value;
};
openfl._Vector.Vector_Impl_.toVectorData = function(this1) {
	return this1;
};
openfl._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
};
openfl._Vector.Vector_Impl_.set_length = function(this1,value) {
	if(!this1.fixed) {
		if(value > this1.length) {
			var data;
			var this2;
			this2 = new Array(value);
			data = this2;
			haxe.ds._Vector.Vector_Impl_.blit(this1.data,0,data,0,Std["int"](Math.min(this1.data.length,value)));
			this1.data = data;
		}
		this1.length = value;
	}
	return value;
};
openfl._Vector.Vector_Impl_.get_fixed = function(this1) {
	return this1.fixed;
};
openfl._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return this1.fixed = value;
};
openfl.VectorData = function() {
	this.length = 0;
};
$hxClasses["openfl.VectorData"] = openfl.VectorData;
openfl.VectorData.__name__ = ["openfl","VectorData"];
openfl.VectorData.prototype = {
	__class__: openfl.VectorData
};
openfl.VectorDataIterator = function(data) {
	this.index = 0;
	this.vectorData = data;
};
$hxClasses["openfl.VectorDataIterator"] = openfl.VectorDataIterator;
openfl.VectorDataIterator.__name__ = ["openfl","VectorDataIterator"];
openfl.VectorDataIterator.prototype = {
	hasNext: function() {
		return this.index < this.vectorData.length;
	}
	,next: function() {
		var index = this.index++;
		return this.vectorData.data[index];
	}
	,__class__: openfl.VectorDataIterator
};
openfl.display.Bitmap = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	openfl.display.DisplayObjectContainer.call(this);
	this.bitmapData = bitmapData;
	this.pixelSnapping = pixelSnapping;
	this.smoothing = smoothing;
	if(pixelSnapping == null) this.pixelSnapping = openfl.display.PixelSnapping.AUTO;
};
$hxClasses["openfl.display.Bitmap"] = openfl.display.Bitmap;
openfl.display.Bitmap.__name__ = ["openfl","display","Bitmap"];
openfl.display.Bitmap.__super__ = openfl.display.DisplayObjectContainer;
openfl.display.Bitmap.prototype = $extend(openfl.display.DisplayObjectContainer.prototype,{
	__getBounds: function(rect,matrix) {
		if(this.bitmapData != null) {
			var bounds = new openfl.geom.Rectangle(0,0,this.bitmapData.width,this.bitmapData.height);
			bounds = bounds.transform(this.__worldTransform);
			rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
		}
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(!this.get_visible() || this.bitmapData == null) return false;
		var point = this.globalToLocal(new openfl.geom.Point(x,y));
		if(point.x > 0 && point.y > 0 && point.x <= this.bitmapData.width && point.y <= this.bitmapData.height) {
			if(stack != null) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		var context = renderSession.context;
		if(this.bitmapData != null && this.bitmapData.__valid) {
			if(this.__mask != null) renderSession.maskManager.pushMask(this.__mask);
			this.bitmapData.__syncImageData();
			context.globalAlpha = this.__worldAlpha;
			var transform = this.__worldTransform;
			if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
			if(!this.smoothing) {
				context.mozImageSmoothingEnabled = false;
				context.webkitImageSmoothingEnabled = false;
				context.imageSmoothingEnabled = false;
			}
			if(this.get_scrollRect() == null) {
				if(this.bitmapData.__sourceImage != null) context.drawImage(this.bitmapData.__sourceImage,0,0); else context.drawImage(this.bitmapData.__sourceCanvas,0,0);
			} else if(this.bitmapData.__sourceImage != null) context.drawImage(this.bitmapData.__sourceImage,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height); else context.drawImage(this.bitmapData.__sourceCanvas,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height,this.get_scrollRect().x,this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height);
			if(!this.smoothing) {
				context.mozImageSmoothingEnabled = true;
				context.webkitImageSmoothingEnabled = true;
				context.imageSmoothingEnabled = true;
			}
			if(this.__mask != null) renderSession.maskManager.popMask();
		}
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.bitmapData != null && this.bitmapData.__valid) {
			if(this.bitmapData.__sourceImage != null) this.__renderDOMImage(renderSession); else this.__renderDOMCanvas(renderSession);
		} else {
			if(this.__image != null) {
				renderSession.element.removeChild(this.__image);
				this.__image = null;
				this.__style = null;
			}
			if(this.__canvas != null) {
				renderSession.element.removeChild(this.__canvas);
				this.__canvas = null;
				this.__style = null;
			}
		}
	}
	,__renderDOMCanvas: function(renderSession) {
		if(this.__image != null) {
			renderSession.element.removeChild(this.__image);
			this.__image = null;
		}
		if(this.__canvas == null) {
			this.__canvas = window.document.createElement("canvas");
			this.__canvasContext = this.__canvas.getContext("2d");
			if(!this.smoothing) {
				this.__canvasContext.mozImageSmoothingEnabled = false;
				this.__canvasContext.webkitImageSmoothingEnabled = false;
				this.__canvasContext.imageSmoothingEnabled = false;
			}
			this.__initializeElement(this.__canvas,renderSession);
		}
		this.bitmapData.__syncImageData();
		this.__canvas.width = this.bitmapData.width;
		this.__canvas.height = this.bitmapData.height;
		this.__canvasContext.globalAlpha = this.__worldAlpha;
		this.__canvasContext.drawImage(this.bitmapData.__sourceCanvas,0,0);
		this.__applyStyle(renderSession,true,false,true);
	}
	,__renderDOMImage: function(renderSession) {
		if(this.__canvas != null) {
			renderSession.element.removeChild(this.__canvas);
			this.__canvas = null;
		}
		if(this.__image == null) {
			this.__image = window.document.createElement("img");
			this.__image.src = this.bitmapData.__sourceImage.src;
			this.__initializeElement(this.__image,renderSession);
		}
		this.__applyStyle(renderSession,true,true,true);
	}
	,__renderMask: function(renderSession) {
		renderSession.context.rect(0,0,this.get_width(),this.get_height());
	}
	,get_height: function() {
		if(this.bitmapData != null) return this.bitmapData.height * this.get_scaleY();
		return 0;
	}
	,set_height: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.height) {
				if(!this.__transformDirty) {
					this.__transformDirty = true;
					openfl.display.DisplayObject.__worldTransformDirty++;
				}
				this.set_scaleY(value / this.bitmapData.height);
			}
			return value;
		}
		return 0;
	}
	,get_width: function() {
		if(this.bitmapData != null) return this.bitmapData.width * this.get_scaleX();
		return 0;
	}
	,set_width: function(value) {
		if(this.bitmapData != null) {
			if(value != this.bitmapData.width) {
				if(!this.__transformDirty) {
					this.__transformDirty = true;
					openfl.display.DisplayObject.__worldTransformDirty++;
				}
				this.set_scaleX(value / this.bitmapData.width);
			}
			return value;
		}
		return 0;
	}
	,__class__: openfl.display.Bitmap
});
openfl.display.BitmapDataChannel = function() { };
$hxClasses["openfl.display.BitmapDataChannel"] = openfl.display.BitmapDataChannel;
openfl.display.BitmapDataChannel.__name__ = ["openfl","display","BitmapDataChannel"];
openfl.display.BlendMode = $hxClasses["openfl.display.BlendMode"] = { __ename__ : ["openfl","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] };
openfl.display.BlendMode.ADD = ["ADD",0];
openfl.display.BlendMode.ADD.toString = $estr;
openfl.display.BlendMode.ADD.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.ALPHA = ["ALPHA",1];
openfl.display.BlendMode.ALPHA.toString = $estr;
openfl.display.BlendMode.ALPHA.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.DARKEN = ["DARKEN",2];
openfl.display.BlendMode.DARKEN.toString = $estr;
openfl.display.BlendMode.DARKEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
openfl.display.BlendMode.DIFFERENCE.toString = $estr;
openfl.display.BlendMode.DIFFERENCE.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.ERASE = ["ERASE",4];
openfl.display.BlendMode.ERASE.toString = $estr;
openfl.display.BlendMode.ERASE.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
openfl.display.BlendMode.HARDLIGHT.toString = $estr;
openfl.display.BlendMode.HARDLIGHT.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.INVERT = ["INVERT",6];
openfl.display.BlendMode.INVERT.toString = $estr;
openfl.display.BlendMode.INVERT.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.LAYER = ["LAYER",7];
openfl.display.BlendMode.LAYER.toString = $estr;
openfl.display.BlendMode.LAYER.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
openfl.display.BlendMode.LIGHTEN.toString = $estr;
openfl.display.BlendMode.LIGHTEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
openfl.display.BlendMode.MULTIPLY.toString = $estr;
openfl.display.BlendMode.MULTIPLY.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.NORMAL = ["NORMAL",10];
openfl.display.BlendMode.NORMAL.toString = $estr;
openfl.display.BlendMode.NORMAL.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.OVERLAY = ["OVERLAY",11];
openfl.display.BlendMode.OVERLAY.toString = $estr;
openfl.display.BlendMode.OVERLAY.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.SCREEN = ["SCREEN",12];
openfl.display.BlendMode.SCREEN.toString = $estr;
openfl.display.BlendMode.SCREEN.__enum__ = openfl.display.BlendMode;
openfl.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
openfl.display.BlendMode.SUBTRACT.toString = $estr;
openfl.display.BlendMode.SUBTRACT.__enum__ = openfl.display.BlendMode;
openfl.display._CapsStyle = {};
openfl.display._CapsStyle.CapsStyle_Impl_ = function() { };
$hxClasses["openfl.display._CapsStyle.CapsStyle_Impl_"] = openfl.display._CapsStyle.CapsStyle_Impl_;
openfl.display._CapsStyle.CapsStyle_Impl_.__name__ = ["openfl","display","_CapsStyle","CapsStyle_Impl_"];
openfl.display.FrameLabel = function(name,frame) {
	openfl.events.EventDispatcher.call(this);
	this.__name = name;
	this.__frame = frame;
};
$hxClasses["openfl.display.FrameLabel"] = openfl.display.FrameLabel;
openfl.display.FrameLabel.__name__ = ["openfl","display","FrameLabel"];
openfl.display.FrameLabel.__super__ = openfl.events.EventDispatcher;
openfl.display.FrameLabel.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	get_frame: function() {
		return this.__frame;
	}
	,get_name: function() {
		return this.__name;
	}
	,__class__: openfl.display.FrameLabel
	,__properties__: {get_name:"get_name",get_frame:"get_frame"}
});
openfl.display.GradientType = $hxClasses["openfl.display.GradientType"] = { __ename__ : ["openfl","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] };
openfl.display.GradientType.RADIAL = ["RADIAL",0];
openfl.display.GradientType.RADIAL.toString = $estr;
openfl.display.GradientType.RADIAL.__enum__ = openfl.display.GradientType;
openfl.display.GradientType.LINEAR = ["LINEAR",1];
openfl.display.GradientType.LINEAR.toString = $estr;
openfl.display.GradientType.LINEAR.__enum__ = openfl.display.GradientType;
openfl.display.Graphics = function() {
	this.__commands = new Array();
	this.__halfStrokeWidth = 0;
	this.__positionX = 0;
	this.__positionY = 0;
};
$hxClasses["openfl.display.Graphics"] = openfl.display.Graphics;
openfl.display.Graphics.__name__ = ["openfl","display","Graphics"];
openfl.display.Graphics.prototype = {
	beginBitmapFill: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		this.__commands.push(openfl.display.DrawCommand.BeginBitmapFill(bitmap,matrix,repeat,smooth));
		this.__visible = true;
	}
	,beginFill: function(rgb,alpha) {
		if(alpha == null) alpha = 1;
		this.__commands.push(openfl.display.DrawCommand.BeginFill(rgb & 16777215,alpha));
		if(alpha > 0) this.__visible = true;
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		openfl.Lib.notImplemented("Graphics.beginGradientFill");
	}
	,clear: function() {
		this.__commands = new Array();
		this.__halfStrokeWidth = 0;
		if(this.__bounds != null) {
			this.__dirty = true;
			this.__bounds = null;
		}
		this.__visible = false;
	}
	,curveTo: function(cx,cy,x,y) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__inflateBounds(cx,cy);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.CurveTo(cx,cy,x,y));
		this.__dirty = true;
	}
	,drawCircle: function(x,y,radius) {
		if(radius <= 0) return;
		this.__inflateBounds(x - radius - this.__halfStrokeWidth,y - radius - this.__halfStrokeWidth);
		this.__inflateBounds(x + radius + this.__halfStrokeWidth,y + radius + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.DrawCircle(x,y,radius));
		this.__dirty = true;
	}
	,drawEllipse: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.DrawEllipse(x,y,width,height));
		this.__dirty = true;
	}
	,drawGraphicsData: function(graphicsData) {
		openfl.Lib.notImplemented("Graphics.drawGraphicsData");
	}
	,drawPath: function(commands,data,winding) {
		openfl.Lib.notImplemented("Graphics.drawPath");
	}
	,drawRect: function(x,y,width,height) {
		if(width <= 0 || height <= 0) return;
		this.__inflateBounds(x - this.__halfStrokeWidth,y - this.__halfStrokeWidth);
		this.__inflateBounds(x + width + this.__halfStrokeWidth,y + height + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.DrawRect(x,y,width,height));
		this.__dirty = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		openfl.Lib.notImplemented("Graphics.drawRoundRect");
	}
	,drawRoundRectComplex: function(x,y,width,height,topLeftRadius,topRightRadius,bottomLeftRadius,bottomRightRadius) {
		openfl.Lib.notImplemented("Graphics.drawRoundRectComplex");
	}
	,drawTiles: function(sheet,tileData,smooth,flags,count) {
		if(count == null) count = -1;
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.__inflateBounds(0,0);
		this.__inflateBounds(openfl.Lib.current.stage.stageWidth,openfl.Lib.current.stage.stageHeight);
		this.__commands.push(openfl.display.DrawCommand.DrawTiles(sheet,tileData,smooth,flags,count));
		this.__dirty = true;
		this.__visible = true;
	}
	,drawTriangles: function(vertices,indices,uvtData,culling) {
		openfl.Lib.notImplemented("Graphics.drawTriangles");
	}
	,endFill: function() {
		this.__commands.push(openfl.display.DrawCommand.EndFill);
	}
	,lineBitmapStyle: function(bitmap,matrix,repeat,smooth) {
		if(smooth == null) smooth = false;
		if(repeat == null) repeat = true;
		openfl.Lib.notImplemented("Graphics.lineBitmapStyle");
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		openfl.Lib.notImplemented("Graphics.lineGradientStyle");
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		if(thickness != null) this.__halfStrokeWidth = thickness / 2; else this.__halfStrokeWidth = 0;
		this.__commands.push(openfl.display.DrawCommand.LineStyle(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit));
		if(thickness != null) this.__visible = true;
	}
	,lineTo: function(x,y) {
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__positionX = x;
		this.__positionY = y;
		this.__inflateBounds(this.__positionX - this.__halfStrokeWidth,this.__positionY - this.__halfStrokeWidth);
		this.__inflateBounds(this.__positionX + this.__halfStrokeWidth,this.__positionY + this.__halfStrokeWidth);
		this.__commands.push(openfl.display.DrawCommand.LineTo(x,y));
		this.__dirty = true;
	}
	,moveTo: function(x,y) {
		this.__commands.push(openfl.display.DrawCommand.MoveTo(x,y));
		this.__positionX = x;
		this.__positionY = y;
	}
	,__beginPath: function() {
		if(!this.__inPath) {
			this.__context.beginPath();
			this.__inPath = true;
		}
	}
	,__beginPatternFill: function(bitmapFill,bitmapRepeat) {
		if(this.__setFill || bitmapFill == null) return;
		if(this.__pattern == null) {
			if(bitmapFill.__sourceImage != null) this.__pattern = this.__context.createPattern(bitmapFill.__sourceImage,bitmapRepeat?"repeat":"no-repeat"); else this.__pattern = this.__context.createPattern(bitmapFill.__sourceCanvas,bitmapRepeat?"repeat":"no-repeat");
		}
		this.__context.fillStyle = this.__pattern;
		this.__setFill = true;
	}
	,__closePath: function(closeFill) {
		if(this.__inPath) {
			if(this.__hasFill) {
				this.__context.translate(-this.__bounds.x,-this.__bounds.y);
				if(this.__pendingMatrix != null) {
					this.__context.transform(this.__pendingMatrix.a,this.__pendingMatrix.b,this.__pendingMatrix.c,this.__pendingMatrix.d,this.__pendingMatrix.tx,this.__pendingMatrix.ty);
					this.__context.fill();
					this.__context.transform(this.__inversePendingMatrix.a,this.__inversePendingMatrix.b,this.__inversePendingMatrix.c,this.__inversePendingMatrix.d,this.__inversePendingMatrix.tx,this.__inversePendingMatrix.ty);
				} else this.__context.fill();
				this.__context.translate(this.__bounds.x,this.__bounds.y);
			}
			this.__context.closePath();
			if(this.__hasStroke) this.__context.stroke();
		}
		this.__inPath = false;
		if(closeFill) {
			this.__hasFill = false;
			this.__hasStroke = false;
			this.__pendingMatrix = null;
			this.__inversePendingMatrix = null;
		}
	}
	,__getBounds: function(rect,matrix) {
		if(this.__bounds == null) return;
		var bounds = this.__bounds.clone().transform(matrix);
		rect.__expand(bounds.x,bounds.y,bounds.width,bounds.height);
	}
	,__hitTest: function(x,y,shapeFlag,matrix) {
		if(this.__bounds == null) return false;
		var bounds = this.__bounds.clone().transform(matrix);
		return x > bounds.x && y > bounds.y && x <= bounds.get_right() && y <= bounds.get_bottom();
	}
	,__inflateBounds: function(x,y) {
		if(this.__bounds == null) {
			this.__bounds = new openfl.geom.Rectangle(x,y,0,0);
			return;
		}
		if(x < this.__bounds.x) {
			this.__bounds.width += this.__bounds.x - x;
			this.__bounds.x = x;
		}
		if(y < this.__bounds.y) {
			this.__bounds.height += this.__bounds.y - y;
			this.__bounds.y = y;
		}
		if(x > this.__bounds.x + this.__bounds.width) this.__bounds.width = x - this.__bounds.x;
		if(y > this.__bounds.y + this.__bounds.height) this.__bounds.height = y - this.__bounds.y;
	}
	,__render: function() {
		if(this.__dirty) {
			this.__hasFill = false;
			this.__hasStroke = false;
			this.__inPath = false;
			this.__positionX = 0;
			this.__positionY = 0;
			if(!this.__visible || this.__commands.length == 0 || this.__bounds == null || this.__bounds.width == 0 || this.__bounds.height == 0) {
				this.__canvas = null;
				this.__context = null;
			} else {
				if(this.__canvas == null) {
					this.__canvas = window.document.createElement("canvas");
					this.__context = this.__canvas.getContext("2d");
				}
				this.__canvas.width = Math.ceil(this.__bounds.width);
				this.__canvas.height = Math.ceil(this.__bounds.height);
				var offsetX = this.__bounds.x;
				var offsetY = this.__bounds.y;
				var bitmapFill = null;
				var bitmapRepeat = false;
				var _g = 0;
				var _g1 = this.__commands;
				while(_g < _g1.length) {
					var command = _g1[_g];
					++_g;
					switch(command[1]) {
					case 0:
						var smooth = command[5];
						var repeat = command[4];
						var matrix = command[3];
						var bitmap = command[2];
						this.__closePath(false);
						if(bitmap != bitmapFill || repeat != bitmapRepeat) {
							bitmapFill = bitmap;
							bitmapRepeat = repeat;
							this.__pattern = null;
							this.__setFill = false;
							bitmap.__syncImageData();
						}
						if(matrix != null) {
							this.__pendingMatrix = matrix;
							this.__inversePendingMatrix = new openfl.geom.Matrix(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
							this.__inversePendingMatrix.invert();
						} else {
							this.__pendingMatrix = null;
							this.__inversePendingMatrix = null;
						}
						this.__hasFill = true;
						break;
					case 1:
						var alpha = command[3];
						var rgb = command[2];
						this.__closePath(false);
						if(alpha == 1) this.__context.fillStyle = "#" + StringTools.hex(rgb,6); else {
							var r = (rgb & 16711680) >>> 16;
							var g = (rgb & 65280) >>> 8;
							var b = rgb & 255;
							this.__context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
						}
						bitmapFill = null;
						this.__setFill = true;
						this.__hasFill = true;
						break;
					case 2:
						var y = command[5];
						var x = command[4];
						var cy = command[3];
						var cx = command[2];
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.quadraticCurveTo(cx - offsetX,cy - offsetY,x - offsetX,y - offsetY);
						this.__positionX = x;
						this.__positionY = y;
						break;
					case 3:
						var radius = command[4];
						var y1 = command[3];
						var x1 = command[2];
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.moveTo(x1 - offsetX + radius,y1 - offsetY);
						this.__context.arc(x1 - offsetX,y1 - offsetY,radius,0,Math.PI * 2,true);
						break;
					case 4:
						var height = command[5];
						var width = command[4];
						var y2 = command[3];
						var x2 = command[2];
						x2 -= offsetX;
						y2 -= offsetY;
						var kappa = .5522848;
						var ox = width / 2 * kappa;
						var oy = height / 2 * kappa;
						var xe = x2 + width;
						var ye = y2 + height;
						var xm = x2 + width / 2;
						var ym = y2 + height / 2;
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.moveTo(x2,ym);
						this.__context.bezierCurveTo(x2,ym - oy,xm - ox,y2,xm,y2);
						this.__context.bezierCurveTo(xm + ox,y2,xe,ym - oy,xe,ym);
						this.__context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
						this.__context.bezierCurveTo(xm - ox,ye,x2,ym + oy,x2,ym);
						break;
					case 5:
						var height1 = command[5];
						var width1 = command[4];
						var y3 = command[3];
						var x3 = command[2];
						var optimizationUsed = false;
						if(bitmapFill != null) {
							var st = 0;
							var sr = 0;
							var sb = 0;
							var sl = 0;
							var canOptimizeMatrix = true;
							if(this.__pendingMatrix != null) {
								if(this.__pendingMatrix.b != 0 || this.__pendingMatrix.c != 0) canOptimizeMatrix = false; else {
									var stl = this.__inversePendingMatrix.transformPoint(new openfl.geom.Point(x3,y3));
									var sbr = this.__inversePendingMatrix.transformPoint(new openfl.geom.Point(x3 + width1,y3 + height1));
									st = stl.y;
									sl = stl.x;
									sb = sbr.y;
									sr = sbr.x;
								}
							} else {
								st = y3;
								sl = x3;
								sb = y3 + height1;
								sr = x3 + width1;
							}
							if(canOptimizeMatrix && st >= 0 && sl >= 0 && sr <= bitmapFill.width && sb <= bitmapFill.height) {
								optimizationUsed = true;
								if(bitmapFill.__sourceImage != null) this.__context.drawImage(bitmapFill.__sourceImage,sl,st,sr - sl,sb - st,x3,y3,width1,height1); else this.__context.drawImage(bitmapFill.__sourceCanvas,sl,st,sr - sl,sb - st,x3,y3,width1,height1);
							}
						}
						if(!optimizationUsed) {
							this.__beginPatternFill(bitmapFill,bitmapRepeat);
							this.__beginPath();
							this.__context.rect(x3 - offsetX,y3 - offsetY,width1,height1);
						}
						break;
					case 6:
						var count = command[6];
						var flags = command[5];
						var smooth1 = command[4];
						var tileData = command[3];
						var sheet = command[2];
						this.__closePath(false);
						var useScale = (flags & 1) > 0;
						var useRotation = (flags & 2) > 0;
						var useTransform = (flags & 16) > 0;
						var useRGB = (flags & 4) > 0;
						var useAlpha = (flags & 8) > 0;
						if(useTransform) {
							useScale = false;
							useRotation = false;
						}
						var scaleIndex = 0;
						var rotationIndex = 0;
						var rgbIndex = 0;
						var alphaIndex = 0;
						var transformIndex = 0;
						var numValues = 3;
						if(useScale) {
							scaleIndex = numValues;
							numValues++;
						}
						if(useRotation) {
							rotationIndex = numValues;
							numValues++;
						}
						if(useTransform) {
							transformIndex = numValues;
							numValues += 4;
						}
						if(useRGB) {
							rgbIndex = numValues;
							numValues += 3;
						}
						if(useAlpha) {
							alphaIndex = numValues;
							numValues++;
						}
						var totalCount = tileData.length;
						if(count >= 0 && totalCount > count) totalCount = count;
						var itemCount = totalCount / numValues | 0;
						var index = 0;
						var rect = null;
						var center = null;
						var previousTileID = -1;
						var surface;
						sheet.__bitmap.__syncImageData();
						if(sheet.__bitmap.__sourceImage != null) surface = sheet.__bitmap.__sourceImage; else surface = sheet.__bitmap.__sourceCanvas;
						while(index < totalCount) {
							var tileID = tileData[index + 2] | 0;
							if(tileID != previousTileID) {
								rect = sheet.__tileRects[tileID];
								center = sheet.__centerPoints[tileID];
								previousTileID = tileID;
							}
							if(rect != null && rect.width > 0 && rect.height > 0 && center != null) {
								this.__context.save();
								this.__context.translate(tileData[index],tileData[index + 1]);
								if(useRotation) this.__context.rotate(tileData[index + rotationIndex]);
								var scale = 1.0;
								if(useScale) scale = tileData[index + scaleIndex];
								if(useTransform) this.__context.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
								if(useAlpha) this.__context.globalAlpha = tileData[index + alphaIndex];
								this.__context.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
								this.__context.restore();
							}
							index += numValues;
						}
						break;
					case 7:
						this.__closePath(true);
						break;
					case 8:
						var miterLimit = command[9];
						var joints = command[8];
						var caps = command[7];
						var scaleMode = command[6];
						var pixelHinting = command[5];
						var alpha1 = command[4];
						var color = command[3];
						var thickness = command[2];
						this.__closePath(false);
						if(thickness == null) this.__hasStroke = false; else {
							this.__context.lineWidth = thickness;
							this.__context.lineJoin = joints;
							this.__context.lineCap = caps;
							this.__context.miterLimit = miterLimit;
							this.__context.strokeStyle = "#" + StringTools.hex(color,6);
							this.__hasStroke = true;
						}
						break;
					case 9:
						var y4 = command[3];
						var x4 = command[2];
						this.__beginPatternFill(bitmapFill,bitmapRepeat);
						this.__beginPath();
						this.__context.lineTo(x4 - offsetX,y4 - offsetY);
						this.__positionX = x4;
						this.__positionY = y4;
						break;
					case 10:
						var y5 = command[3];
						var x5 = command[2];
						this.__beginPath();
						this.__context.moveTo(x5 - offsetX,y5 - offsetY);
						this.__positionX = x5;
						this.__positionY = y5;
						break;
					}
				}
			}
			this.__dirty = false;
			this.__closePath(false);
		}
	}
	,__renderMask: function(renderSession) {
		if(this.__commands.length != 0) {
			var __context = renderSession.context;
			var __positionX = 0.0;
			var __positionY = 0.0;
			var offsetX = 0;
			var offsetY = 0;
			var _g = 0;
			var _g1 = this.__commands;
			while(_g < _g1.length) {
				var command = _g1[_g];
				++_g;
				switch(command[1]) {
				case 2:
					var y = command[5];
					var x = command[4];
					var cy = command[3];
					var cx = command[2];
					__context.quadraticCurveTo(cx,cy,x,y);
					__positionX = x;
					__positionY = y;
					break;
				case 3:
					var radius = command[4];
					var y1 = command[3];
					var x1 = command[2];
					__context.arc(x1 - offsetX,y1 - offsetY,radius,0,Math.PI * 2,true);
					break;
				case 4:
					var height = command[5];
					var width = command[4];
					var y2 = command[3];
					var x2 = command[2];
					x2 -= offsetX;
					y2 -= offsetY;
					var kappa = .5522848;
					var ox = width / 2 * kappa;
					var oy = height / 2 * kappa;
					var xe = x2 + width;
					var ye = y2 + height;
					var xm = x2 + width / 2;
					var ym = y2 + height / 2;
					__context.moveTo(x2,ym);
					__context.bezierCurveTo(x2,ym - oy,xm - ox,y2,xm,y2);
					__context.bezierCurveTo(xm + ox,y2,xe,ym - oy,xe,ym);
					__context.bezierCurveTo(xe,ym + oy,xm + ox,ye,xm,ye);
					__context.bezierCurveTo(xm - ox,ye,x2,ym + oy,x2,ym);
					break;
				case 5:
					var height1 = command[5];
					var width1 = command[4];
					var y3 = command[3];
					var x3 = command[2];
					__context.rect(x3 - offsetX,y3 - offsetY,width1,height1);
					break;
				case 9:
					var y4 = command[3];
					var x4 = command[2];
					__context.lineTo(x4 - offsetX,y4 - offsetY);
					__positionX = x4;
					__positionY = y4;
					break;
				case 10:
					var y5 = command[3];
					var x5 = command[2];
					__context.moveTo(x5 - offsetX,y5 - offsetY);
					__positionX = x5;
					__positionY = y5;
					break;
				default:
				}
			}
		}
	}
	,__class__: openfl.display.Graphics
};
openfl.display.DrawCommand = $hxClasses["openfl.display.DrawCommand"] = { __ename__ : ["openfl","display","DrawCommand"], __constructs__ : ["BeginBitmapFill","BeginFill","CurveTo","DrawCircle","DrawEllipse","DrawRect","DrawTiles","EndFill","LineStyle","LineTo","MoveTo"] };
openfl.display.DrawCommand.BeginBitmapFill = function(bitmap,matrix,repeat,smooth) { var $x = ["BeginBitmapFill",0,bitmap,matrix,repeat,smooth]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.BeginFill = function(rgb,alpha) { var $x = ["BeginFill",1,rgb,alpha]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.CurveTo = function(cx,cy,x,y) { var $x = ["CurveTo",2,cx,cy,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawCircle = function(x,y,radius) { var $x = ["DrawCircle",3,x,y,radius]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawEllipse = function(x,y,width,height) { var $x = ["DrawEllipse",4,x,y,width,height]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawRect = function(x,y,width,height) { var $x = ["DrawRect",5,x,y,width,height]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.DrawTiles = function(sheet,tileData,smooth,flags,count) { var $x = ["DrawTiles",6,sheet,tileData,smooth,flags,count]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.EndFill = ["EndFill",7];
openfl.display.DrawCommand.EndFill.toString = $estr;
openfl.display.DrawCommand.EndFill.__enum__ = openfl.display.DrawCommand;
openfl.display.DrawCommand.LineStyle = function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) { var $x = ["LineStyle",8,thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.LineTo = function(x,y) { var $x = ["LineTo",9,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.DrawCommand.MoveTo = function(x,y) { var $x = ["MoveTo",10,x,y]; $x.__enum__ = openfl.display.DrawCommand; $x.toString = $estr; return $x; };
openfl.display.GraphicsPathWinding = $hxClasses["openfl.display.GraphicsPathWinding"] = { __ename__ : ["openfl","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] };
openfl.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
openfl.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
openfl.display.GraphicsPathWinding.EVEN_ODD.__enum__ = openfl.display.GraphicsPathWinding;
openfl.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
openfl.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
openfl.display.GraphicsPathWinding.NON_ZERO.__enum__ = openfl.display.GraphicsPathWinding;
openfl.display.IGraphicsData = function() { };
$hxClasses["openfl.display.IGraphicsData"] = openfl.display.IGraphicsData;
openfl.display.IGraphicsData.__name__ = ["openfl","display","IGraphicsData"];
openfl.display.IGraphicsData.prototype = {
	__class__: openfl.display.IGraphicsData
};
openfl.display.GraphicsDataType = $hxClasses["openfl.display.GraphicsDataType"] = { __ename__ : ["openfl","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH","BITMAP","END"] };
openfl.display.GraphicsDataType.STROKE = ["STROKE",0];
openfl.display.GraphicsDataType.STROKE.toString = $estr;
openfl.display.GraphicsDataType.STROKE.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.SOLID = ["SOLID",1];
openfl.display.GraphicsDataType.SOLID.toString = $estr;
openfl.display.GraphicsDataType.SOLID.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
openfl.display.GraphicsDataType.GRADIENT.toString = $estr;
openfl.display.GraphicsDataType.GRADIENT.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.PATH = ["PATH",3];
openfl.display.GraphicsDataType.PATH.toString = $estr;
openfl.display.GraphicsDataType.PATH.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.BITMAP = ["BITMAP",4];
openfl.display.GraphicsDataType.BITMAP.toString = $estr;
openfl.display.GraphicsDataType.BITMAP.__enum__ = openfl.display.GraphicsDataType;
openfl.display.GraphicsDataType.END = ["END",5];
openfl.display.GraphicsDataType.END.toString = $estr;
openfl.display.GraphicsDataType.END.__enum__ = openfl.display.GraphicsDataType;
openfl.display.InterpolationMethod = $hxClasses["openfl.display.InterpolationMethod"] = { __ename__ : ["openfl","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] };
openfl.display.InterpolationMethod.RGB = ["RGB",0];
openfl.display.InterpolationMethod.RGB.toString = $estr;
openfl.display.InterpolationMethod.RGB.__enum__ = openfl.display.InterpolationMethod;
openfl.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
openfl.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
openfl.display.InterpolationMethod.LINEAR_RGB.__enum__ = openfl.display.InterpolationMethod;
openfl.display._JointStyle = {};
openfl.display._JointStyle.JointStyle_Impl_ = function() { };
$hxClasses["openfl.display._JointStyle.JointStyle_Impl_"] = openfl.display._JointStyle.JointStyle_Impl_;
openfl.display._JointStyle.JointStyle_Impl_.__name__ = ["openfl","display","_JointStyle","JointStyle_Impl_"];
openfl.display.LineScaleMode = $hxClasses["openfl.display.LineScaleMode"] = { __ename__ : ["openfl","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] };
openfl.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
openfl.display.LineScaleMode.HORIZONTAL.toString = $estr;
openfl.display.LineScaleMode.HORIZONTAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.NONE = ["NONE",1];
openfl.display.LineScaleMode.NONE.toString = $estr;
openfl.display.LineScaleMode.NONE.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.NORMAL = ["NORMAL",2];
openfl.display.LineScaleMode.NORMAL.toString = $estr;
openfl.display.LineScaleMode.NORMAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
openfl.display.LineScaleMode.VERTICAL.toString = $estr;
openfl.display.LineScaleMode.VERTICAL.__enum__ = openfl.display.LineScaleMode;
openfl.display.Loader = function() {
	openfl.display.Sprite.call(this);
	this.contentLoaderInfo = openfl.display.LoaderInfo.create(this);
};
$hxClasses["openfl.display.Loader"] = openfl.display.Loader;
openfl.display.Loader.__name__ = ["openfl","display","Loader"];
openfl.display.Loader.__super__ = openfl.display.Sprite;
openfl.display.Loader.prototype = $extend(openfl.display.Sprite.prototype,{
	load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		if(request.contentType == null && request.contentType != "") switch(extension) {
		case "swf":
			this.contentLoaderInfo.contentType = "application/x-shockwave-flash";
			break;
		case "jpg":case "jpeg":
			transparent = false;
			this.contentLoaderInfo.contentType = "image/jpeg";
			break;
		case "png":
			this.contentLoaderInfo.contentType = "image/png";
			break;
		case "gif":
			this.contentLoaderInfo.contentType = "image/gif";
			break;
		default:
			this.contentLoaderInfo.contentType = "application/x-www-form-urlencoded";
		} else this.contentLoaderInfo.contentType = request.contentType;
		openfl.display.BitmapData.fromFile(request.url,$bind(this,this.BitmapData_onLoad),$bind(this,this.BitmapData_onError));
	}
	,loadBytes: function(buffer) {
		openfl.display.BitmapData.fromBytes(buffer,null,$bind(this,this.BitmapData_onLoad));
	}
	,unload: function() {
		if(this.get_numChildren() > 0) {
			while(this.get_numChildren() > 0) this.removeChildAt(0);
			this.content = null;
			this.contentLoaderInfo.url = null;
			this.contentLoaderInfo.contentType = null;
			this.contentLoaderInfo.content = null;
			this.contentLoaderInfo.bytesLoaded = 0;
			this.contentLoaderInfo.bytesTotal = 0;
			this.contentLoaderInfo.width = 0;
			this.contentLoaderInfo.height = 0;
			var event = new openfl.events.Event(openfl.events.Event.UNLOAD);
			event.currentTarget = this;
			this.dispatchEvent(event);
		}
	}
	,BitmapData_onLoad: function(bitmapData) {
		this.contentLoaderInfo.content = new openfl.display.Bitmap(bitmapData);
		this.content = this.contentLoaderInfo.content;
		this.addChild(this.contentLoaderInfo.content);
		var event = new openfl.events.Event(openfl.events.Event.COMPLETE);
		event.target = this.contentLoaderInfo;
		event.currentTarget = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	}
	,BitmapData_onError: function() {
		var event = new openfl.events.IOErrorEvent(openfl.events.IOErrorEvent.IO_ERROR);
		event.target = this.contentLoaderInfo;
		event.currentTarget = this.contentLoaderInfo;
		this.contentLoaderInfo.dispatchEvent(event);
	}
	,__class__: openfl.display.Loader
});
openfl.display.LoaderInfo = function() {
	openfl.events.EventDispatcher.call(this);
	this.applicationDomain = openfl.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["openfl.display.LoaderInfo"] = openfl.display.LoaderInfo;
openfl.display.LoaderInfo.__name__ = ["openfl","display","LoaderInfo"];
openfl.display.LoaderInfo.create = function(ldr) {
	var li = new openfl.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
};
openfl.display.LoaderInfo.__super__ = openfl.events.EventDispatcher;
openfl.display.LoaderInfo.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	__class__: openfl.display.LoaderInfo
});
openfl.display.MovieClip = function() {
	openfl.display.Sprite.call(this);
	this.__currentFrame = 0;
	this.__currentLabels = [];
	this.__totalFrames = 0;
	this.enabled = true;
	this.loaderInfo = openfl.display.LoaderInfo.create(null);
};
$hxClasses["openfl.display.MovieClip"] = openfl.display.MovieClip;
openfl.display.MovieClip.__name__ = ["openfl","display","MovieClip"];
openfl.display.MovieClip.__super__ = openfl.display.Sprite;
openfl.display.MovieClip.prototype = $extend(openfl.display.Sprite.prototype,{
	gotoAndPlay: function(frame,scene) {
	}
	,gotoAndStop: function(frame,scene) {
	}
	,nextFrame: function() {
	}
	,play: function() {
	}
	,prevFrame: function() {
	}
	,stop: function() {
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,get_currentFrameLabel: function() {
		return this.__currentFrameLabel;
	}
	,get_currentLabel: function() {
		return this.__currentLabel;
	}
	,get_currentLabels: function() {
		return this.__currentLabels;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_totalFrames: function() {
		return this.__totalFrames;
	}
	,__class__: openfl.display.MovieClip
	,__properties__: $extend(openfl.display.Sprite.prototype.__properties__,{get_totalFrames:"get_totalFrames",get_framesLoaded:"get_framesLoaded",get_currentLabels:"get_currentLabels",get_currentLabel:"get_currentLabel",get_currentFrameLabel:"get_currentFrameLabel",get_currentFrame:"get_currentFrame"})
});
openfl.display.PixelSnapping = $hxClasses["openfl.display.PixelSnapping"] = { __ename__ : ["openfl","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] };
openfl.display.PixelSnapping.NEVER = ["NEVER",0];
openfl.display.PixelSnapping.NEVER.toString = $estr;
openfl.display.PixelSnapping.NEVER.__enum__ = openfl.display.PixelSnapping;
openfl.display.PixelSnapping.AUTO = ["AUTO",1];
openfl.display.PixelSnapping.AUTO.toString = $estr;
openfl.display.PixelSnapping.AUTO.__enum__ = openfl.display.PixelSnapping;
openfl.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
openfl.display.PixelSnapping.ALWAYS.toString = $estr;
openfl.display.PixelSnapping.ALWAYS.__enum__ = openfl.display.PixelSnapping;
openfl.display.Shape = function() {
	openfl.display.DisplayObject.call(this);
};
$hxClasses["openfl.display.Shape"] = openfl.display.Shape;
openfl.display.Shape.__name__ = ["openfl","display","Shape"];
openfl.display.Shape.__super__ = openfl.display.DisplayObject;
openfl.display.Shape.prototype = $extend(openfl.display.DisplayObject.prototype,{
	__getBounds: function(rect,matrix) {
		if(this.__graphics != null) this.__graphics.__getBounds(rect,this.__worldTransform);
	}
	,__hitTest: function(x,y,shapeFlag,stack,interactiveOnly) {
		if(this.get_visible() && this.__graphics != null && this.__graphics.__hitTest(x,y,shapeFlag,this.__worldTransform)) {
			if(!interactiveOnly) stack.push(this);
			return true;
		}
		return false;
	}
	,__renderCanvas: function(renderSession) {
		if(!this.__renderable || this.__worldAlpha <= 0) return;
		if(this.__graphics != null) {
			this.__graphics.__render();
			if(this.__graphics.__canvas != null) {
				var context = renderSession.context;
				context.globalAlpha = this.__worldAlpha;
				var transform = this.__worldTransform;
				if(renderSession.roundPixels) context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx | 0,transform.ty | 0); else context.setTransform(transform.a,transform.b,transform.c,transform.d,transform.tx,transform.ty);
				if(this.get_scrollRect() == null) context.drawImage(this.__graphics.__canvas,this.__graphics.__bounds.x,this.__graphics.__bounds.y); else context.drawImage(this.__graphics.__canvas,this.get_scrollRect().x - this.__graphics.__bounds.x,this.get_scrollRect().y - this.__graphics.__bounds.y,this.get_scrollRect().width,this.get_scrollRect().height,this.__graphics.__bounds.x + this.get_scrollRect().x,this.__graphics.__bounds.y + this.get_scrollRect().y,this.get_scrollRect().width,this.get_scrollRect().height);
			}
		}
	}
	,__renderDOM: function(renderSession) {
		if(this.stage != null && this.__worldVisible && this.__renderable && this.__graphics != null) {
			if(this.__graphics.__dirty || this.__worldAlphaChanged || this.__canvas == null && this.__graphics.__canvas != null) {
				this.__graphics.__render();
				if(this.__graphics.__canvas != null) {
					if(this.__canvas == null) {
						this.__canvas = window.document.createElement("canvas");
						this.__canvasContext = this.__canvas.getContext("2d");
						this.__initializeElement(this.__canvas,renderSession);
					}
					this.__canvas.width = this.__graphics.__canvas.width;
					this.__canvas.height = this.__graphics.__canvas.height;
					this.__canvasContext.globalAlpha = this.__worldAlpha;
					this.__canvasContext.drawImage(this.__graphics.__canvas,0,0);
				} else if(this.__canvas != null) {
					renderSession.element.removeChild(this.__canvas);
					this.__canvas = null;
					this.__style = null;
				}
			}
			if(this.__canvas != null) {
				if(this.__worldTransformChanged) {
					var transform = new openfl.geom.Matrix();
					transform.translate(this.__graphics.__bounds.x,this.__graphics.__bounds.y);
					transform = transform.mult(this.__worldTransform);
					this.__style.setProperty(renderSession.transformProperty,renderSession.roundPixels?"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + (transform.tx | 0) + ", " + (transform.ty | 0) + ", 0, 1)":"matrix3d(" + transform.a + ", " + transform.b + ", " + "0, 0, " + transform.c + ", " + transform.d + ", " + "0, 0, 0, 0, 1, 0, " + transform.tx + ", " + transform.ty + ", 0, 1)",null);
				}
				this.__applyStyle(renderSession,false,false,true);
			}
		} else if(this.__canvas != null) {
			renderSession.element.removeChild(this.__canvas);
			this.__canvas = null;
			this.__style = null;
		}
	}
	,get_graphics: function() {
		if(this.__graphics == null) this.__graphics = new openfl.display.Graphics();
		return this.__graphics;
	}
	,__class__: openfl.display.Shape
	,__properties__: $extend(openfl.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
openfl.display.SpreadMethod = $hxClasses["openfl.display.SpreadMethod"] = { __ename__ : ["openfl","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] };
openfl.display.SpreadMethod.REPEAT = ["REPEAT",0];
openfl.display.SpreadMethod.REPEAT.toString = $estr;
openfl.display.SpreadMethod.REPEAT.__enum__ = openfl.display.SpreadMethod;
openfl.display.SpreadMethod.REFLECT = ["REFLECT",1];
openfl.display.SpreadMethod.REFLECT.toString = $estr;
openfl.display.SpreadMethod.REFLECT.__enum__ = openfl.display.SpreadMethod;
openfl.display.SpreadMethod.PAD = ["PAD",2];
openfl.display.SpreadMethod.PAD.toString = $estr;
openfl.display.SpreadMethod.PAD.__enum__ = openfl.display.SpreadMethod;
openfl.display.Stage = function(width,height,element,color) {
	this.__mouseY = 0;
	this.__mouseX = 0;
	openfl.display.Sprite.call(this);
	this.__element = element;
	if(color == null) {
		this.__transparent = true;
		this.set_color(0);
	} else this.set_color(color);
	this.set_name(null);
	this.__mouseX = 0;
	this.__mouseY = 0;
	if(!this.__initializeGL()) this.__initializeCanvas();
	this.__originalWidth = width;
	this.__originalHeight = height;
	if(width == 0 && height == 0) {
		if(element != null) {
			width = element.clientWidth;
			height = element.clientHeight;
		} else {
			width = window.innerWidth;
			height = window.innerHeight;
		}
		this.__fullscreen = true;
	}
	this.stageWidth = width;
	this.stageHeight = height;
	if(this.__canvas != null) {
		this.__canvas.width = width;
		this.__canvas.height = height;
	} else {
		this.__div.style.width = width + "px";
		this.__div.style.height = height + "px";
	}
	this.__resize();
	window.addEventListener("resize",$bind(this,this.window_onResize));
	window.addEventListener("focus",$bind(this,this.window_onFocus));
	window.addEventListener("blur",$bind(this,this.window_onBlur));
	if(element != null) {
		if(this.__canvas != null) {
			if(element != this.__canvas) element.appendChild(this.__canvas);
		} else element.appendChild(this.__div);
	}
	this.stage = this;
	this.align = openfl.display.StageAlign.TOP_LEFT;
	this.allowsFullScreen = false;
	this.set_displayState(openfl.display.StageDisplayState.NORMAL);
	this.frameRate = 60;
	this.quality = "high";
	this.scaleMode = openfl.display.StageScaleMode.NO_SCALE;
	this.stageFocusRect = true;
	this.__clearBeforeRender = true;
	this.__stack = [];
	var keyEvents = ["keydown","keyup"];
	var touchEvents = ["touchstart","touchmove","touchend"];
	var mouseEvents = ["mousedown","mousemove","mouseup","dblclick","mousewheel"];
	var focusEvents = ["focus","blur"];
	var element1;
	if(this.__canvas != null) element1 = this.__canvas; else element1 = this.__div;
	var _g = 0;
	while(_g < keyEvents.length) {
		var type = keyEvents[_g];
		++_g;
		window.addEventListener(type,$bind(this,this.window_onKey),false);
	}
	var _g1 = 0;
	while(_g1 < touchEvents.length) {
		var type1 = touchEvents[_g1];
		++_g1;
		element1.addEventListener(type1,$bind(this,this.element_onTouch),true);
	}
	var _g2 = 0;
	while(_g2 < mouseEvents.length) {
		var type2 = mouseEvents[_g2];
		++_g2;
		element1.addEventListener(type2,$bind(this,this.element_onMouse),true);
	}
	var _g3 = 0;
	while(_g3 < focusEvents.length) {
		var type3 = focusEvents[_g3];
		++_g3;
		element1.addEventListener(type3,$bind(this,this.element_onFocus),true);
	}
	window.requestAnimationFrame($bind(this,this.__render));
};
$hxClasses["openfl.display.Stage"] = openfl.display.Stage;
openfl.display.Stage.__name__ = ["openfl","display","Stage"];
openfl.display.Stage.__super__ = openfl.display.Sprite;
openfl.display.Stage.prototype = $extend(openfl.display.Sprite.prototype,{
	globalToLocal: function(pos) {
		return pos;
	}
	,invalidate: function() {
		this.__invalidated = true;
	}
	,localToGlobal: function(pos) {
		return pos;
	}
	,__drag: function(mouse) {
		var parent = this.__dragObject.parent;
		if(parent != null) mouse = parent.globalToLocal(mouse);
		var x = mouse.x + this.__dragOffsetX;
		var y = mouse.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__fireEvent: function(event,stack) {
		var length = stack.length;
		if(length == 0) {
			event.eventPhase = 1;
			event.target.__broadcast(event,false);
		} else {
			event.eventPhase = 0;
			event.target = stack[stack.length - 1];
			var _g1 = 0;
			var _g = length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				stack[i].__broadcast(event,false);
				if(event.__isCancelled) return;
			}
			event.eventPhase = 1;
			event.target.__broadcast(event,false);
			if(event.__isCancelled) return;
			if(event.bubbles) {
				event.eventPhase = 2;
				var i1 = length - 2;
				while(i1 >= 0) {
					stack[i1].__broadcast(event,false);
					if(event.__isCancelled) return;
					i1--;
				}
			}
		}
	}
	,__getInteractive: function(stack) {
		stack.push(this);
	}
	,__initializeCanvas: function() {
		if(js.Boot.__instanceof(this.__element,HTMLCanvasElement)) this.__canvas = this.__element; else this.__canvas = window.document.createElement("canvas");
		if(this.__transparent) this.__context = this.__canvas.getContext("2d"); else {
			this.__canvas.setAttribute("moz-opaque","true");
			this.__context = this.__canvas.getContext ("2d", { alpha: false });
		}
		var style = this.__canvas.style;
		style.setProperty("-webkit-transform","translateZ(0)",null);
		style.setProperty("transform","translateZ(0)",null);
		this.__renderSession = new openfl.display.RenderSession();
		this.__renderSession.context = this.__context;
		this.__renderSession.roundPixels = true;
	}
	,__initializeDOM: function() {
		this.__div = window.document.createElement("div");
		var style = this.__div.style;
		if(!this.__transparent) style.backgroundColor = this.__colorString;
		style.setProperty("-webkit-transform","translate3D(0,0,0)",null);
		style.setProperty("transform","translate3D(0,0,0)",null);
		style.position = "relative";
		style.overflow = "hidden";
		style.setProperty("-webkit-user-select","none",null);
		style.setProperty("-moz-user-select","none",null);
		style.setProperty("-ms-user-select","none",null);
		style.setProperty("-o-user-select","none",null);
		window.document.addEventListener("dragstart",function(e) {
			if(e.target.nodeName.toLowerCase() == "img") {
				e.preventDefault();
				return false;
			}
			return true;
		},false);
		this.__renderSession = new openfl.display.RenderSession();
		this.__renderSession.element = this.__div;
		this.__renderSession.roundPixels = true;
		var prefix = (function () {
		  var styles = window.getComputedStyle(document.documentElement, ''),
			pre = (Array.prototype.slice
			  .call(styles)
			  .join('') 
			  .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
			)[1],
			dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
		  return {
			dom: dom,
			lowercase: pre,
			css: '-' + pre + '-',
			js: pre[0].toUpperCase() + pre.substr(1)
		  };
		})();
		this.__renderSession.vendorPrefix = prefix.lowercase;
		if(prefix.lowercase == "webkit") this.__renderSession.transformProperty = "-webkit-transform"; else this.__renderSession.transformProperty = "transform";
		if(prefix.lowercase == "webkit") this.__renderSession.transformOriginProperty = "-webkit-transform-origin"; else this.__renderSession.transformOriginProperty = "transform-origin";
	}
	,__initializeGL: function() {
		return false;
	}
	,__render: function() {
		this.__broadcast(new openfl.events.Event(openfl.events.Event.ENTER_FRAME),true);
		if(this.__invalidated) {
			this.__invalidated = false;
			this.__broadcast(new openfl.events.Event(openfl.events.Event.RENDER),true);
		}
		this.__renderable = true;
		this.__update(false,true);
		if(this.__canvas != null) {
			if(!this.__fullscreen || this.__element != this.__canvas) {
				if(this.stageWidth != this.__canvas.width || this.stageHeight != this.__canvas.height) {
					this.__canvas.width = this.stageWidth;
					this.__canvas.height = this.stageHeight;
				}
			} else {
				this.stageWidth = this.__canvas.width;
				this.stageHeight = this.__canvas.height;
			}
			if(this.__gl != null) {
				if(!this.__glContextLost) {
					this.__gl.viewport(0,0,this.stageWidth,this.stageHeight);
					this.__gl.bindFramebuffer(36160,null);
					if(this.__transparent) this.__gl.clearColor(0,0,0,0); else this.__gl.clearColor(this.__colorSplit[0],this.__colorSplit[1],this.__colorSplit[2],1);
					this.__gl.clear(16384);
					this.__renderGL(this.__renderSession);
				}
			} else {
				this.__context.setTransform(1,0,0,1,0,0);
				this.__context.globalAlpha = 1;
				if(!this.__transparent && this.__clearBeforeRender) {
					this.__context.fillStyle = this.__colorString;
					this.__context.fillRect(0,0,this.stageWidth,this.stageHeight);
				} else if(this.__transparent && this.__clearBeforeRender) this.__context.clearRect(0,0,this.stageWidth,this.stageHeight);
				this.__renderCanvas(this.__renderSession);
			}
		} else {
			this.__renderSession.z = 1;
			this.__renderDOM(this.__renderSession);
		}
		window.requestAnimationFrame($bind(this,this.__render));
	}
	,__resize: function() {
		if(this.__element != null && (this.__div == null || this.__div != null && this.__fullscreen)) {
			if(this.__fullscreen) {
				this.stageWidth = this.__element.clientWidth;
				this.stageHeight = this.__element.clientHeight;
				if(this.__canvas != null) {
					if(this.__element != this.__canvas) {
						this.__canvas.width = this.stageWidth;
						this.__canvas.height = this.stageHeight;
					}
				} else {
					this.__div.style.width = this.stageWidth + "px";
					this.__div.style.height = this.stageHeight + "px";
				}
			} else {
				var scaleX = this.__element.clientWidth / this.__originalWidth;
				var scaleY = this.__element.clientHeight / this.__originalHeight;
				var currentRatio = scaleX / scaleY;
				var targetRatio = Math.min(scaleX,scaleY);
				if(this.__canvas != null) {
					if(this.__element != this.__canvas) {
						this.__canvas.style.width = this.__originalWidth * targetRatio + "px";
						this.__canvas.style.height = this.__originalHeight * targetRatio + "px";
						this.__canvas.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px";
						this.__canvas.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px";
					}
				} else {
					this.__div.style.width = this.__originalWidth * targetRatio + "px";
					this.__div.style.height = this.__originalHeight * targetRatio + "px";
					this.__div.style.marginLeft = (this.__element.clientWidth - this.__originalWidth * targetRatio) / 2 + "px";
					this.__div.style.marginTop = (this.__element.clientHeight - this.__originalHeight * targetRatio) / 2 + "px";
				}
			}
		}
	}
	,__setCursor: function(cursor) {
		if(this.__cursor != cursor) {
			this.__cursor = cursor;
			if(!this.__cursorHidden) {
				var element;
				if(this.__canvas != null) element = this.__canvas; else element = this.__div;
				element.style.cursor = cursor;
			}
		}
	}
	,__setCursorHidden: function(value) {
		if(this.__cursorHidden != value) {
			this.__cursorHidden = value;
			var element;
			if(this.__canvas != null) element = this.__canvas; else element = this.__div;
			if(value) element.style.cursor = "none"; else element.style.cursor = this.__cursor;
		}
	}
	,__startDrag: function(sprite,lockCenter,bounds) {
		if(bounds == null) this.__dragBounds = null; else this.__dragBounds = bounds.clone();
		this.__dragObject = sprite;
		if(this.__dragObject != null) {
			if(lockCenter) {
				this.__dragOffsetX = -this.__dragObject.get_width() / 2;
				this.__dragOffsetY = -this.__dragObject.get_height() / 2;
			} else {
				var mouse = new openfl.geom.Point(this.get_mouseX(),this.get_mouseY());
				var parent = this.__dragObject.parent;
				if(parent != null) mouse = parent.globalToLocal(mouse);
				this.__dragOffsetX = this.__dragObject.get_x() - mouse.x;
				this.__dragOffsetY = this.__dragObject.get_y() - mouse.y;
			}
		}
	}
	,__stopDrag: function(sprite) {
		this.__dragBounds = null;
		this.__dragObject = null;
	}
	,__update: function(transformOnly,updateChildren) {
		if(transformOnly) {
			if(openfl.display.DisplayObject.__worldTransformDirty > 0) {
				openfl.display.Sprite.prototype.__update.call(this,true,updateChildren);
				if(updateChildren) {
					openfl.display.DisplayObject.__worldTransformDirty = 0;
					this.__dirty = true;
				}
			}
		} else if(openfl.display.DisplayObject.__worldTransformDirty > 0 || this.__dirty || openfl.display.DisplayObject.__worldRenderDirty > 0) {
			openfl.display.Sprite.prototype.__update.call(this,false,updateChildren);
			if(updateChildren) {
				openfl.display.DisplayObject.__worldTransformDirty = 0;
				openfl.display.DisplayObject.__worldRenderDirty = 0;
				this.__dirty = false;
			}
		}
	}
	,get_mouseX: function() {
		return this.__mouseX;
	}
	,get_mouseY: function() {
		return this.__mouseY;
	}
	,canvas_onContextLost: function(event) {
		this.__glContextLost = true;
	}
	,canvas_onContextRestored: function(event) {
		this.__glContextLost = false;
	}
	,element_onFocus: function(event) {
	}
	,element_onTouch: function(event) {
		event.preventDefault();
		var rect;
		if(this.__canvas != null) rect = this.__canvas.getBoundingClientRect(); else rect = this.__div.getBoundingClientRect();
		var touch = event.changedTouches[0];
		var point = new openfl.geom.Point((touch.pageX - rect.left) * (this.stageWidth / rect.width),(touch.pageY - rect.top) * (this.stageHeight / rect.height));
		this.__mouseX = point.x;
		this.__mouseY = point.y;
		this.__stack = [];
		var type = null;
		var mouseType = null;
		var _g = event.type;
		switch(_g) {
		case "touchstart":
			type = "touchBegin";
			mouseType = openfl.events.MouseEvent.MOUSE_DOWN;
			break;
		case "touchmove":
			type = "touchMove";
			mouseType = openfl.events.MouseEvent.MOUSE_MOVE;
			break;
		case "touchend":
			type = "touchEnd";
			mouseType = openfl.events.MouseEvent.MOUSE_UP;
			break;
		default:
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			var localPoint = target.globalToLocal(point);
			var touchEvent = openfl.events.TouchEvent.__create(type,event,touch,localPoint,target);
			touchEvent.touchPointID = touch.identifier;
			touchEvent.isPrimaryTouchPoint = true;
			var mouseEvent = openfl.events.MouseEvent.__create(mouseType,event,localPoint,target);
			mouseEvent.buttonDown = type != "touchEnd";
			this.__fireEvent(touchEvent,this.__stack);
			this.__fireEvent(mouseEvent,this.__stack);
		} else {
			var touchEvent1 = openfl.events.TouchEvent.__create(type,event,touch,point,this);
			touchEvent1.touchPointID = touch.identifier;
			touchEvent1.isPrimaryTouchPoint = true;
			var mouseEvent1 = openfl.events.MouseEvent.__create(mouseType,event,point,this);
			mouseEvent1.buttonDown = type != "touchEnd";
			this.__fireEvent(touchEvent1,[this]);
			this.__fireEvent(mouseEvent1,[this]);
		}
		if(type == "touchMove" && this.__dragObject != null) this.__drag(point);
	}
	,element_onMouse: function(event) {
		var rect;
		if(this.__canvas != null) {
			rect = this.__canvas.getBoundingClientRect();
			this.__mouseX = (event.clientX - rect.left) * (this.stageWidth / rect.width);
			this.__mouseY = (event.clientY - rect.top) * (this.stageHeight / rect.height);
		} else {
			rect = this.__div.getBoundingClientRect();
			this.__mouseX = event.clientX - rect.left;
			this.__mouseY = event.clientY - rect.top;
		}
		this.__stack = [];
		var type;
		var _g = event.type;
		switch(_g) {
		case "mousedown":
			type = openfl.events.MouseEvent.MOUSE_DOWN;
			break;
		case "mouseup":
			type = openfl.events.MouseEvent.MOUSE_UP;
			break;
		case "mousemove":
			type = openfl.events.MouseEvent.MOUSE_MOVE;
			break;
		case "dblclick":
			type = openfl.events.MouseEvent.DOUBLE_CLICK;
			break;
		case "mousewheel":
			type = openfl.events.MouseEvent.MOUSE_WHEEL;
			break;
		default:
			type = null;
		}
		if(this.__hitTest(this.get_mouseX(),this.get_mouseY(),false,this.__stack,true)) {
			var target = this.__stack[this.__stack.length - 1];
			this.__setCursor(target.buttonMode?"pointer":"default");
			this.__fireEvent(openfl.events.MouseEvent.__create(type,event,target.globalToLocal(new openfl.geom.Point(this.get_mouseX(),this.get_mouseY())),target),this.__stack);
			if(type == openfl.events.MouseEvent.MOUSE_UP) this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.CLICK,event,target.globalToLocal(new openfl.geom.Point(this.get_mouseX(),this.get_mouseY())),target),this.__stack);
		} else {
			this.__setCursor(this.buttonMode?"pointer":"default");
			this.__fireEvent(openfl.events.MouseEvent.__create(type,event,new openfl.geom.Point(this.get_mouseX(),this.get_mouseY()),this),[this]);
			if(type == openfl.events.MouseEvent.MOUSE_UP) this.__fireEvent(openfl.events.MouseEvent.__create(openfl.events.MouseEvent.CLICK,event,new openfl.geom.Point(this.get_mouseX(),this.get_mouseY()),this),[this]);
		}
		if(this.__dragObject != null) this.__drag(new openfl.geom.Point(this.get_mouseX(),this.get_mouseY()));
	}
	,window_onKey: function(event) {
		var keyCode;
		if(event.keyCode != null) keyCode = event.keyCode; else keyCode = event.which;
		keyCode = openfl.ui.Keyboard.__convertMozillaCode(keyCode);
		var location;
		if(event.location != null) location = event.location; else location = event.keyLocation;
		var keyLocation;
		keyLocation = js.Boot.__cast(location , Int);
		var stack = new Array();
		if(this.__focus == null) this.__getInteractive(stack); else this.__focus.__getInteractive(stack);
		if(stack.length > 0) {
			stack.reverse();
			this.__fireEvent(new openfl.events.KeyboardEvent(event.type == "keydown"?openfl.events.KeyboardEvent.KEY_DOWN:openfl.events.KeyboardEvent.KEY_UP,true,false,event.charCode,keyCode,keyLocation,event.ctrlKey,event.altKey,event.shiftKey),stack);
		}
	}
	,window_onResize: function(event) {
		this.__resize();
		var event1 = new openfl.events.Event(openfl.events.Event.RESIZE);
		this.__broadcast(event1,false);
	}
	,window_onFocus: function(event) {
		var event1 = new openfl.events.Event(openfl.events.Event.ACTIVATE);
		this.__broadcast(event1,true);
	}
	,window_onBlur: function(event) {
		var event1 = new openfl.events.Event(openfl.events.Event.DEACTIVATE);
		this.__broadcast(event1,true);
	}
	,get_color: function() {
		return this.__color;
	}
	,set_color: function(value) {
		var r = (value & 16711680) >>> 16;
		var g = (value & 65280) >>> 8;
		var b = value & 255;
		this.__colorSplit = [r / 255,g / 255,b / 255];
		this.__colorString = "#" + StringTools.hex(value,6);
		return this.__color = value;
	}
	,get_focus: function() {
		return this.__focus;
	}
	,set_focus: function(value) {
		if(value != this.__focus) {
			if(this.__focus != null) {
				var event = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_OUT,true,false,value,false,0);
				this.__stack = [];
				this.__focus.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event,this.__stack);
			}
			if(value != null) {
				var event1 = new openfl.events.FocusEvent(openfl.events.FocusEvent.FOCUS_IN,true,false,this.__focus,false,0);
				this.__stack = [];
				value.__getInteractive(this.__stack);
				this.__stack.reverse();
				this.__fireEvent(event1,this.__stack);
			}
			this.__focus = value;
		}
		return this.__focus;
	}
	,set_displayState: function(value) {
		switch(value[1]) {
		case 0:
			var fs_exit_function = function() {
			    if (document.exitFullscreen) {
			      document.exitFullscreen();
			    } else if (document.msExitFullscreen) {
			      document.msExitFullscreen();
			    } else if (document.mozCancelFullScreen) {
			      document.mozCancelFullScreen();
			    } else if (document.webkitExitFullscreen) {
			      document.webkitExitFullscreen();
			    }
				}
			fs_exit_function();
			break;
		case 1:case 2:
			var fsfunction = function(elem) {
					if (elem.requestFullscreen) elem.requestFullscreen();
					else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
					else if (elem.mozRequestFullScreen) elem.mozRequestFullScreen();
					else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
				}
			fsfunction(this.__element);
			break;
		}
		this.displayState = value;
		return value;
	}
	,__class__: openfl.display.Stage
	,__properties__: $extend(openfl.display.Sprite.prototype.__properties__,{set_focus:"set_focus",get_focus:"get_focus",set_displayState:"set_displayState",set_color:"set_color",get_color:"get_color"})
});
openfl.display.RenderSession = function() {
	this.maskManager = new openfl.display.MaskManager(this);
};
$hxClasses["openfl.display.RenderSession"] = openfl.display.RenderSession;
openfl.display.RenderSession.__name__ = ["openfl","display","RenderSession"];
openfl.display.RenderSession.prototype = {
	__class__: openfl.display.RenderSession
};
openfl.display.MaskManager = function(renderSession) {
	this.renderSession = renderSession;
};
$hxClasses["openfl.display.MaskManager"] = openfl.display.MaskManager;
openfl.display.MaskManager.__name__ = ["openfl","display","MaskManager"];
openfl.display.MaskManager.prototype = {
	pushMask: function(mask) {
		var context = this.renderSession.context;
		context.save();
		var transform = mask.__worldTransform;
		if(transform == null) transform = new openfl.geom.Matrix();
		context.setTransform(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty);
		context.beginPath();
		mask.__renderMask(this.renderSession);
		context.clip();
	}
	,pushRect: function(rect,transform) {
		var context = this.renderSession.context;
		context.save();
		context.setTransform(transform.a,transform.c,transform.b,transform.d,transform.tx,transform.ty);
		context.beginPath();
		context.rect(rect.x,rect.y,rect.width,rect.height);
		context.clip();
	}
	,popMask: function() {
		this.renderSession.context.restore();
	}
	,__class__: openfl.display.MaskManager
};
openfl.display.StageAlign = $hxClasses["openfl.display.StageAlign"] = { __ename__ : ["openfl","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] };
openfl.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
openfl.display.StageAlign.TOP_RIGHT.toString = $estr;
openfl.display.StageAlign.TOP_RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
openfl.display.StageAlign.TOP_LEFT.toString = $estr;
openfl.display.StageAlign.TOP_LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.TOP = ["TOP",2];
openfl.display.StageAlign.TOP.toString = $estr;
openfl.display.StageAlign.TOP.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.RIGHT = ["RIGHT",3];
openfl.display.StageAlign.RIGHT.toString = $estr;
openfl.display.StageAlign.RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.LEFT = ["LEFT",4];
openfl.display.StageAlign.LEFT.toString = $estr;
openfl.display.StageAlign.LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
openfl.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
openfl.display.StageAlign.BOTTOM_RIGHT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
openfl.display.StageAlign.BOTTOM_LEFT.toString = $estr;
openfl.display.StageAlign.BOTTOM_LEFT.__enum__ = openfl.display.StageAlign;
openfl.display.StageAlign.BOTTOM = ["BOTTOM",7];
openfl.display.StageAlign.BOTTOM.toString = $estr;
openfl.display.StageAlign.BOTTOM.__enum__ = openfl.display.StageAlign;
openfl.display.StageDisplayState = $hxClasses["openfl.display.StageDisplayState"] = { __ename__ : ["openfl","display","StageDisplayState"], __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] };
openfl.display.StageDisplayState.NORMAL = ["NORMAL",0];
openfl.display.StageDisplayState.NORMAL.toString = $estr;
openfl.display.StageDisplayState.NORMAL.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
openfl.display.StageDisplayState.FULL_SCREEN.toString = $estr;
openfl.display.StageDisplayState.FULL_SCREEN.__enum__ = openfl.display.StageDisplayState;
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
openfl.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = openfl.display.StageDisplayState;
openfl.display._StageQuality = {};
openfl.display._StageQuality.StageQuality_Impl_ = function() { };
$hxClasses["openfl.display._StageQuality.StageQuality_Impl_"] = openfl.display._StageQuality.StageQuality_Impl_;
openfl.display._StageQuality.StageQuality_Impl_.__name__ = ["openfl","display","_StageQuality","StageQuality_Impl_"];
openfl.display.StageScaleMode = $hxClasses["openfl.display.StageScaleMode"] = { __ename__ : ["openfl","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] };
openfl.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
openfl.display.StageScaleMode.SHOW_ALL.toString = $estr;
openfl.display.StageScaleMode.SHOW_ALL.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
openfl.display.StageScaleMode.NO_SCALE.toString = $estr;
openfl.display.StageScaleMode.NO_SCALE.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
openfl.display.StageScaleMode.NO_BORDER.toString = $estr;
openfl.display.StageScaleMode.NO_BORDER.__enum__ = openfl.display.StageScaleMode;
openfl.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
openfl.display.StageScaleMode.EXACT_FIT.toString = $estr;
openfl.display.StageScaleMode.EXACT_FIT.__enum__ = openfl.display.StageScaleMode;
openfl.display.Tilesheet = function(image) {
	this.__bitmap = image;
	this.__centerPoints = new Array();
	this.__tileRects = new Array();
	this.__tileUVs = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	addTileRect: function(rectangle,centerPoint) {
		this.__tileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new openfl.geom.Point();
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new openfl.geom.Rectangle(rectangle.get_left() / this.__bitmap.width,rectangle.get_top() / this.__bitmap.height,rectangle.get_right() / this.__bitmap.width,rectangle.get_bottom() / this.__bitmap.height));
		return this.__tileRects.length - 1;
	}
	,drawTiles: function(graphics,tileData,smooth,flags,count) {
		if(count == null) count = -1;
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags,count);
	}
	,getTileCenter: function(index) {
		return this.__centerPoints[index];
	}
	,getTileRect: function(index) {
		return this.__tileRects[index];
	}
	,getTileUVs: function(index) {
		return this.__tileUVs[index];
	}
	,__class__: openfl.display.Tilesheet
};
openfl.display.TriangleCulling = $hxClasses["openfl.display.TriangleCulling"] = { __ename__ : ["openfl","display","TriangleCulling"], __constructs__ : ["NEGATIVE","NONE","POSITIVE"] };
openfl.display.TriangleCulling.NEGATIVE = ["NEGATIVE",0];
openfl.display.TriangleCulling.NEGATIVE.toString = $estr;
openfl.display.TriangleCulling.NEGATIVE.__enum__ = openfl.display.TriangleCulling;
openfl.display.TriangleCulling.NONE = ["NONE",1];
openfl.display.TriangleCulling.NONE.toString = $estr;
openfl.display.TriangleCulling.NONE.__enum__ = openfl.display.TriangleCulling;
openfl.display.TriangleCulling.POSITIVE = ["POSITIVE",2];
openfl.display.TriangleCulling.POSITIVE.toString = $estr;
openfl.display.TriangleCulling.POSITIVE.__enum__ = openfl.display.TriangleCulling;
openfl.errors = {};
openfl.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
	this.name = "Error";
};
$hxClasses["openfl.errors.Error"] = openfl.errors.Error;
openfl.errors.Error.__name__ = ["openfl","errors","Error"];
openfl.errors.Error.prototype = {
	getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,__class__: openfl.errors.Error
};
openfl.errors.IOError = function(message) {
	if(message == null) message = "";
	openfl.errors.Error.call(this,message);
};
$hxClasses["openfl.errors.IOError"] = openfl.errors.IOError;
openfl.errors.IOError.__name__ = ["openfl","errors","IOError"];
openfl.errors.IOError.__super__ = openfl.errors.Error;
openfl.errors.IOError.prototype = $extend(openfl.errors.Error.prototype,{
	__class__: openfl.errors.IOError
});
openfl.errors.RangeError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	openfl.errors.Error.call(this,inMessage,0);
};
$hxClasses["openfl.errors.RangeError"] = openfl.errors.RangeError;
openfl.errors.RangeError.__name__ = ["openfl","errors","RangeError"];
openfl.errors.RangeError.__super__ = openfl.errors.Error;
openfl.errors.RangeError.prototype = $extend(openfl.errors.Error.prototype,{
	__class__: openfl.errors.RangeError
});
openfl.errors.TypeError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	openfl.errors.Error.call(this,inMessage,0);
};
$hxClasses["openfl.errors.TypeError"] = openfl.errors.TypeError;
openfl.errors.TypeError.__name__ = ["openfl","errors","TypeError"];
openfl.errors.TypeError.__super__ = openfl.errors.Error;
openfl.errors.TypeError.prototype = $extend(openfl.errors.Error.prototype,{
	__class__: openfl.errors.TypeError
});
openfl.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["openfl.events.TextEvent"] = openfl.events.TextEvent;
openfl.events.TextEvent.__name__ = ["openfl","events","TextEvent"];
openfl.events.TextEvent.__super__ = openfl.events.Event;
openfl.events.TextEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.TextEvent
});
openfl.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
	this.errorID = id;
};
$hxClasses["openfl.events.ErrorEvent"] = openfl.events.ErrorEvent;
openfl.events.ErrorEvent.__name__ = ["openfl","events","ErrorEvent"];
openfl.events.ErrorEvent.__super__ = openfl.events.TextEvent;
openfl.events.ErrorEvent.prototype = $extend(openfl.events.TextEvent.prototype,{
	__class__: openfl.events.ErrorEvent
});
openfl.events._EventDispatcher = {};
openfl.events._EventDispatcher.Listener = function(callback,useCapture,priority) {
	this.callback = callback;
	this.useCapture = useCapture;
	this.priority = priority;
};
$hxClasses["openfl.events._EventDispatcher.Listener"] = openfl.events._EventDispatcher.Listener;
openfl.events._EventDispatcher.Listener.__name__ = ["openfl","events","_EventDispatcher","Listener"];
openfl.events._EventDispatcher.Listener.prototype = {
	match: function(callback,useCapture) {
		return this.callback == callback && this.useCapture == useCapture;
	}
	,__class__: openfl.events._EventDispatcher.Listener
};
openfl.events._EventPhase = {};
openfl.events._EventPhase.EventPhase_Impl_ = function() { };
$hxClasses["openfl.events._EventPhase.EventPhase_Impl_"] = openfl.events._EventPhase.EventPhase_Impl_;
openfl.events._EventPhase.EventPhase_Impl_.__name__ = ["openfl","events","_EventPhase","EventPhase_Impl_"];
openfl.events.FocusEvent = function(type,bubbles,cancelable,relatedObject,shiftKey,keyCode) {
	if(keyCode == null) keyCode = 0;
	if(shiftKey == null) shiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = keyCode;
	if(shiftKey == null) this.shiftKey = false; else this.shiftKey = shiftKey;
	this.relatedObject = relatedObject;
};
$hxClasses["openfl.events.FocusEvent"] = openfl.events.FocusEvent;
openfl.events.FocusEvent.__name__ = ["openfl","events","FocusEvent"];
openfl.events.FocusEvent.__super__ = openfl.events.Event;
openfl.events.FocusEvent.prototype = $extend(openfl.events.Event.prototype,{
	clone: function() {
		var event = new openfl.events.FocusEvent(this.type,this.bubbles,this.cancelable,this.relatedObject,this.shiftKey,this.keyCode);
		event.target = this.target;
		event.currentTarget = this.currentTarget;
		event.eventPhase = this.eventPhase;
		return event;
	}
	,__class__: openfl.events.FocusEvent
});
openfl.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	openfl.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["openfl.events.HTTPStatusEvent"] = openfl.events.HTTPStatusEvent;
openfl.events.HTTPStatusEvent.__name__ = ["openfl","events","HTTPStatusEvent"];
openfl.events.HTTPStatusEvent.__super__ = openfl.events.Event;
openfl.events.HTTPStatusEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.HTTPStatusEvent
});
openfl.events.IOErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.ErrorEvent.call(this,type,bubbles,cancelable,text,id);
};
$hxClasses["openfl.events.IOErrorEvent"] = openfl.events.IOErrorEvent;
openfl.events.IOErrorEvent.__name__ = ["openfl","events","IOErrorEvent"];
openfl.events.IOErrorEvent.__super__ = openfl.events.ErrorEvent;
openfl.events.IOErrorEvent.prototype = $extend(openfl.events.ErrorEvent.prototype,{
	clone: function() {
		return new openfl.events.IOErrorEvent(this.type,this.bubbles,this.cancelable,this.text,this.errorID);
	}
	,toString: function() {
		return "[IOErrorEvent type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + " text=" + this.text + " errorID=" + this.errorID + "]";
	}
	,__class__: openfl.events.IOErrorEvent
});
openfl.events.KeyboardEvent = function(type,bubbles,cancelable,charCodeValue,keyCodeValue,keyLocationValue,ctrlKeyValue,altKeyValue,shiftKeyValue,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(shiftKeyValue == null) shiftKeyValue = false;
	if(altKeyValue == null) altKeyValue = false;
	if(ctrlKeyValue == null) ctrlKeyValue = false;
	if(keyCodeValue == null) keyCodeValue = 0;
	if(charCodeValue == null) charCodeValue = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.charCode = charCodeValue;
	this.keyCode = keyCodeValue;
	if(keyLocationValue != null) this.keyLocation = keyLocationValue; else this.keyLocation = 0;
	this.ctrlKey = ctrlKeyValue;
	this.altKey = altKeyValue;
	this.shiftKey = shiftKeyValue;
	this.controlKey = controlKeyValue;
	this.commandKey = commandKeyValue;
};
$hxClasses["openfl.events.KeyboardEvent"] = openfl.events.KeyboardEvent;
openfl.events.KeyboardEvent.__name__ = ["openfl","events","KeyboardEvent"];
openfl.events.KeyboardEvent.__super__ = openfl.events.Event;
openfl.events.KeyboardEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.KeyboardEvent
});
openfl.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["openfl.events.MouseEvent"] = openfl.events.MouseEvent;
openfl.events.MouseEvent.__name__ = ["openfl","events","MouseEvent"];
openfl.events.MouseEvent.__buttonDown = null;
openfl.events.MouseEvent.__create = function(type,event,local,target) {
	var delta = 2;
	if(type == openfl.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == openfl.events.MouseEvent.MOUSE_DOWN) openfl.events.MouseEvent.__buttonDown = true; else if(type == openfl.events.MouseEvent.MOUSE_UP) openfl.events.MouseEvent.__buttonDown = false;
	var pseudoEvent = new openfl.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,openfl.events.MouseEvent.__buttonDown,delta);
	pseudoEvent.stageX = openfl.Lib.current.stage.get_mouseX();
	pseudoEvent.stageY = openfl.Lib.current.stage.get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
};
openfl.events.MouseEvent.__super__ = openfl.events.Event;
openfl.events.MouseEvent.prototype = $extend(openfl.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: openfl.events.MouseEvent
});
openfl.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["openfl.events.ProgressEvent"] = openfl.events.ProgressEvent;
openfl.events.ProgressEvent.__name__ = ["openfl","events","ProgressEvent"];
openfl.events.ProgressEvent.__super__ = openfl.events.Event;
openfl.events.ProgressEvent.prototype = $extend(openfl.events.Event.prototype,{
	__class__: openfl.events.ProgressEvent
});
openfl.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	openfl.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["openfl.events.SecurityErrorEvent"] = openfl.events.SecurityErrorEvent;
openfl.events.SecurityErrorEvent.__name__ = ["openfl","events","SecurityErrorEvent"];
openfl.events.SecurityErrorEvent.__super__ = openfl.events.ErrorEvent;
openfl.events.SecurityErrorEvent.prototype = $extend(openfl.events.ErrorEvent.prototype,{
	__class__: openfl.events.SecurityErrorEvent
});
openfl.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,sizeX,sizeY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(sizeY == null) sizeY = 1;
	if(sizeX == null) sizeX = 1;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	openfl.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.sizeX = sizeX;
	this.sizeY = sizeY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.pressure = 1;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["openfl.events.TouchEvent"] = openfl.events.TouchEvent;
openfl.events.TouchEvent.__name__ = ["openfl","events","TouchEvent"];
openfl.events.TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new openfl.events.TouchEvent(type,true,false,local.x,local.y,null,null,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = openfl.Lib.current.stage.get_mouseX();
	evt.stageY = openfl.Lib.current.stage.get_mouseY();
	evt.target = target;
	return evt;
};
openfl.events.TouchEvent.__super__ = openfl.events.Event;
openfl.events.TouchEvent.prototype = $extend(openfl.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__class__: openfl.events.TouchEvent
});
openfl.filters = {};
openfl.filters.BitmapFilter = function() {
};
$hxClasses["openfl.filters.BitmapFilter"] = openfl.filters.BitmapFilter;
openfl.filters.BitmapFilter.__name__ = ["openfl","filters","BitmapFilter"];
openfl.filters.BitmapFilter.prototype = {
	clone: function() {
		return new openfl.filters.BitmapFilter();
	}
	,__applyFilter: function(sourceData,targetData,sourceRect,destPoint) {
	}
	,__class__: openfl.filters.BitmapFilter
};
openfl.geom.Matrix = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.tx = tx;
	this.ty = ty;
};
$hxClasses["openfl.geom.Matrix"] = openfl.geom.Matrix;
openfl.geom.Matrix.__name__ = ["openfl","geom","Matrix"];
openfl.geom.Matrix.prototype = {
	clone: function() {
		return new openfl.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.ty = this.tx * m.b + this.ty * m.d + m.ty;
		this.tx = tx1;
	}
	,copyColumnFrom: function(column,vector3D) {
		if(column > 2) throw "Column " + column + " out of bounds (2)"; else if(column == 0) {
			this.a = vector3D.x;
			this.c = vector3D.y;
		} else if(column == 1) {
			this.b = vector3D.x;
			this.d = vector3D.y;
		} else {
			this.tx = vector3D.x;
			this.ty = vector3D.y;
		}
	}
	,copyColumnTo: function(column,vector3D) {
		if(column > 2) throw "Column " + column + " out of bounds (2)"; else if(column == 0) {
			vector3D.x = this.a;
			vector3D.y = this.c;
			vector3D.z = 0;
		} else if(column == 1) {
			vector3D.x = this.b;
			vector3D.y = this.d;
			vector3D.z = 0;
		} else {
			vector3D.x = this.tx;
			vector3D.y = this.ty;
			vector3D.z = 1;
		}
	}
	,copyFrom: function(sourceMatrix) {
		this.a = sourceMatrix.a;
		this.b = sourceMatrix.b;
		this.c = sourceMatrix.c;
		this.d = sourceMatrix.d;
		this.tx = sourceMatrix.tx;
		this.ty = sourceMatrix.ty;
	}
	,copyRowFrom: function(row,vector3D) {
		if(row > 2) throw "Row " + row + " out of bounds (2)"; else if(row == 0) {
			this.a = vector3D.x;
			this.c = vector3D.y;
		} else if(row == 1) {
			this.b = vector3D.x;
			this.d = vector3D.y;
		} else {
			this.tx = vector3D.x;
			this.ty = vector3D.y;
		}
	}
	,copyRowTo: function(row,vector3D) {
		if(row > 2) throw "Row " + row + " out of bounds (2)"; else if(row == 0) {
			vector3D.x = this.a;
			vector3D.y = this.b;
			vector3D.z = this.tx;
		} else if(row == 1) {
			vector3D.x = this.c;
			vector3D.y = this.d;
			vector3D.z = this.ty;
		} else {
			vector3D.x = 0;
			vector3D.y = 0;
			vector3D.z = 1;
		}
	}
	,createBox: function(scaleX,scaleY,rotation,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(rotation == null) rotation = 0;
		this.a = scaleX;
		this.d = scaleY;
		this.b = rotation;
		this.tx = tx;
		this.ty = ty;
	}
	,createGradientBox: function(width,height,rotation,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(rotation == null) rotation = 0;
		this.a = width / 1638.4;
		this.d = height / 1638.4;
		if(rotation != 0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.tx = tx + width / 2;
		this.ty = ty + height / 2;
	}
	,equals: function(matrix) {
		return matrix != null && this.tx == matrix.tx && this.ty == matrix.ty && this.a == matrix.a && this.b == matrix.b && this.c == matrix.c && this.d == matrix.d;
	}
	,deltaTransformPoint: function(point) {
		return new openfl.geom.Point(point.x * this.a + point.y * this.c,point.x * this.b + point.y * this.d);
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.tx = -this.tx;
			this.ty = -this.ty;
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.ty = -this.b * this.tx - this.d * this.ty;
			this.tx = tx1;
		}
		return this;
	}
	,mult: function(m) {
		var result = new openfl.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		result.concat(m);
		return result;
	}
	,rotate: function(theta) {
		var cos = Math.cos(theta);
		var sin = Math.sin(theta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.ty = this.tx * sin + this.ty * cos;
		this.tx = tx1;
	}
	,scale: function(sx,sy) {
		this.a *= sx;
		this.b *= sy;
		this.c *= sx;
		this.d *= sy;
		this.tx *= sx;
		this.ty *= sy;
	}
	,setRotation: function(theta,scale) {
		if(scale == null) scale = 1;
		this.a = Math.cos(theta) * scale;
		this.c = Math.sin(theta) * scale;
		this.b = -this.c;
		this.d = this.a;
	}
	,setTo: function(a,b,c,d,tx,ty) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
	}
	,to3DString: function(roundPixels) {
		if(roundPixels == null) roundPixels = false;
		if(roundPixels) return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + (this.tx | 0) + ", " + (this.ty | 0) + ", 0, 1)"; else return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", 0, 1)";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,transformPoint: function(pos) {
		return new openfl.geom.Point(pos.x * this.a + pos.y * this.c + this.tx,pos.x * this.b + pos.y * this.d + this.ty);
	}
	,translate: function(dx,dy) {
		var m = new openfl.geom.Matrix();
		m.tx = dx;
		m.ty = dy;
		this.concat(m);
	}
	,__cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.tx = Math.round(this.tx * 10) / 10;
		this.ty = Math.round(this.ty * 10) / 10;
	}
	,__transformX: function(pos) {
		return pos.x * this.a + pos.y * this.c + this.tx;
	}
	,__transformY: function(pos) {
		return pos.x * this.b + pos.y * this.d + this.ty;
	}
	,__translateTransformed: function(pos) {
		this.tx = pos.x * this.a + pos.y * this.c + this.tx;
		this.ty = pos.x * this.b + pos.y * this.d + this.ty;
	}
	,__class__: openfl.geom.Matrix
};
openfl.geom.Point = function(x,y) {
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
};
$hxClasses["openfl.geom.Point"] = openfl.geom.Point;
openfl.geom.Point.__name__ = ["openfl","geom","Point"];
openfl.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
};
openfl.geom.Point.interpolate = function(pt1,pt2,f) {
	return new openfl.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
};
openfl.geom.Point.polar = function(len,angle) {
	return new openfl.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
};
openfl.geom.Point.prototype = {
	add: function(v) {
		return new openfl.geom.Point(v.x + this.x,v.y + this.y);
	}
	,clone: function() {
		return new openfl.geom.Point(this.x,this.y);
	}
	,equals: function(toCompare) {
		return toCompare != null && toCompare.x == this.x && toCompare.y == this.y;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,subtract: function(v) {
		return new openfl.geom.Point(this.x - v.x,this.y - v.y);
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,__class__: openfl.geom.Point
	,__properties__: {get_length:"get_length"}
};
openfl.geom.Rectangle = function(x,y,width,height) {
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};
$hxClasses["openfl.geom.Rectangle"] = openfl.geom.Rectangle;
openfl.geom.Rectangle.__name__ = ["openfl","geom","Rectangle"];
openfl.geom.Rectangle.prototype = {
	clone: function() {
		return new openfl.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,contains: function(x,y) {
		return x >= this.x && y >= this.y && x < this.get_right() && y < this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,copyFrom: function(sourceRect) {
		this.x = sourceRect.x;
		this.y = sourceRect.y;
		this.width = sourceRect.width;
		this.height = sourceRect.height;
	}
	,equals: function(toCompare) {
		return toCompare != null && this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,intersection: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return new openfl.geom.Rectangle();
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		if(y1 <= y0) return new openfl.geom.Rectangle();
		return new openfl.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,intersects: function(toIntersect) {
		var x0;
		if(this.x < toIntersect.x) x0 = toIntersect.x; else x0 = this.x;
		var x1;
		if(this.get_right() > toIntersect.get_right()) x1 = toIntersect.get_right(); else x1 = this.get_right();
		if(x1 <= x0) return false;
		var y0;
		if(this.y < toIntersect.y) y0 = toIntersect.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() > toIntersect.get_bottom()) y1 = toIntersect.get_bottom(); else y1 = this.get_bottom();
		return y1 > y0;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,setTo: function(xa,ya,widtha,heighta) {
		this.x = xa;
		this.y = ya;
		this.width = widtha;
		this.height = heighta;
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new openfl.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,union: function(toUnion) {
		if(this.width == 0 || this.height == 0) return toUnion.clone(); else if(toUnion.width == 0 || toUnion.height == 0) return this.clone();
		var x0;
		if(this.x > toUnion.x) x0 = toUnion.x; else x0 = this.x;
		var x1;
		if(this.get_right() < toUnion.get_right()) x1 = toUnion.get_right(); else x1 = this.get_right();
		var y0;
		if(this.y > toUnion.y) y0 = toUnion.y; else y0 = this.y;
		var y1;
		if(this.get_bottom() < toUnion.get_bottom()) y1 = toUnion.get_bottom(); else y1 = this.get_bottom();
		return new openfl.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,__contract: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) return;
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x < x) this.x = x;
		if(this.y < y) this.y = y;
		if(this.get_right() > x + width) this.width = x + width - this.x;
		if(this.get_bottom() > y + height) this.height = y + height - this.y;
	}
	,__expand: function(x,y,width,height) {
		if(this.width == 0 && this.height == 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			return;
		}
		var cacheRight = this.get_right();
		var cacheBottom = this.get_bottom();
		if(this.x > x) this.x = x;
		if(this.y > y) this.y = y;
		if(cacheRight < x + width) this.width = x + width - this.x;
		if(cacheBottom < y + height) this.height = y + height - this.y;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottomRight: function() {
		return new openfl.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_left: function() {
		return this.x;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_size: function() {
		return new openfl.geom.Point(this.width,this.height);
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_top: function() {
		return this.y;
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_topLeft: function() {
		return new openfl.geom.Point(this.x,this.y);
	}
	,set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,__class__: openfl.geom.Rectangle
	,__properties__: {set_topLeft:"set_topLeft",get_topLeft:"get_topLeft",set_top:"set_top",get_top:"get_top",set_size:"set_size",get_size:"get_size",set_right:"set_right",get_right:"get_right",set_left:"set_left",get_left:"get_left",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_bottom:"set_bottom",get_bottom:"get_bottom"}
};
openfl.geom.Transform = function(displayObject) {
	this.colorTransform = new openfl.geom.ColorTransform();
	this.concatenatedColorTransform = new openfl.geom.ColorTransform();
	this.concatenatedMatrix = new openfl.geom.Matrix();
	this.pixelBounds = new openfl.geom.Rectangle();
	this.__displayObject = displayObject;
	this.__matrix = new openfl.geom.Matrix();
};
$hxClasses["openfl.geom.Transform"] = openfl.geom.Transform;
openfl.geom.Transform.__name__ = ["openfl","geom","Transform"];
openfl.geom.Transform.prototype = {
	get_matrix: function() {
		if(this.__matrix != null) {
			this.__matrix.identity();
			this.__matrix.scale(this.__displayObject.get_scaleX(),this.__displayObject.get_scaleY());
			this.__matrix.rotate(this.__displayObject.get_rotation() * (Math.PI / 180));
			this.__matrix.translate(this.__displayObject.get_x(),this.__displayObject.get_y());
			return this.__matrix.clone();
		}
		return null;
	}
	,set_matrix: function(value) {
		if(value == null) return this.__matrix = null;
		if(this.__displayObject != null) {
			this.__displayObject.set_x(value.tx);
			this.__displayObject.set_y(value.ty);
			this.__displayObject.set_scaleX(Math.sqrt(value.a * value.a + value.b * value.b));
			this.__displayObject.set_scaleY(Math.sqrt(value.c * value.c + value.d * value.d));
			this.__displayObject.set_rotation(Math.atan2(value.b,value.a) * (180 / Math.PI));
		}
		return value;
	}
	,__class__: openfl.geom.Transform
	,__properties__: {set_matrix:"set_matrix",get_matrix:"get_matrix"}
};
openfl.geom.Vector3D = function(x,y,z,w) {
	if(w == null) w = 0.;
	if(z == null) z = 0.;
	if(y == null) y = 0.;
	if(x == null) x = 0.;
	this.w = w;
	this.x = x;
	this.y = y;
	this.z = z;
};
$hxClasses["openfl.geom.Vector3D"] = openfl.geom.Vector3D;
openfl.geom.Vector3D.__name__ = ["openfl","geom","Vector3D"];
openfl.geom.Vector3D.__properties__ = {get_Z_AXIS:"get_Z_AXIS",get_Y_AXIS:"get_Y_AXIS",get_X_AXIS:"get_X_AXIS"}
openfl.geom.Vector3D.X_AXIS = null;
openfl.geom.Vector3D.Y_AXIS = null;
openfl.geom.Vector3D.Z_AXIS = null;
openfl.geom.Vector3D.angleBetween = function(a,b) {
	var a0 = new openfl.geom.Vector3D(a.x,a.y,a.z,a.w);
	a0.normalize();
	var b0 = new openfl.geom.Vector3D(b.x,b.y,b.z,b.w);
	b0.normalize();
	return Math.acos(a0.x * b0.x + a0.y * b0.y + a0.z * b0.z);
};
openfl.geom.Vector3D.distance = function(pt1,pt2) {
	var x = pt2.x - pt1.x;
	var y = pt2.y - pt1.y;
	var z = pt2.z - pt1.z;
	return Math.sqrt(x * x + y * y + z * z);
};
openfl.geom.Vector3D.get_X_AXIS = function() {
	return new openfl.geom.Vector3D(1,0,0);
};
openfl.geom.Vector3D.get_Y_AXIS = function() {
	return new openfl.geom.Vector3D(0,1,0);
};
openfl.geom.Vector3D.get_Z_AXIS = function() {
	return new openfl.geom.Vector3D(0,0,1);
};
openfl.geom.Vector3D.prototype = {
	add: function(a) {
		return new openfl.geom.Vector3D(this.x + a.x,this.y + a.y,this.z + a.z);
	}
	,clone: function() {
		return new openfl.geom.Vector3D(this.x,this.y,this.z,this.w);
	}
	,copyFrom: function(sourceVector3D) {
		this.x = sourceVector3D.x;
		this.y = sourceVector3D.y;
		this.z = sourceVector3D.z;
	}
	,crossProduct: function(a) {
		return new openfl.geom.Vector3D(this.y * a.z - this.z * a.y,this.z * a.x - this.x * a.z,this.x * a.y - this.y * a.x,1);
	}
	,decrementBy: function(a) {
		this.x -= a.x;
		this.y -= a.y;
		this.z -= a.z;
	}
	,dotProduct: function(a) {
		return this.x * a.x + this.y * a.y + this.z * a.z;
	}
	,equals: function(toCompare,allFour) {
		if(allFour == null) allFour = false;
		return this.x == toCompare.x && this.y == toCompare.y && this.z == toCompare.z && (!allFour || this.w == toCompare.w);
	}
	,incrementBy: function(a) {
		this.x += a.x;
		this.y += a.y;
		this.z += a.z;
	}
	,nearEquals: function(toCompare,tolerance,allFour) {
		if(allFour == null) allFour = false;
		return Math.abs(this.x - toCompare.x) < tolerance && Math.abs(this.y - toCompare.y) < tolerance && Math.abs(this.z - toCompare.z) < tolerance && (!allFour || Math.abs(this.w - toCompare.w) < tolerance);
	}
	,negate: function() {
		this.x *= -1;
		this.y *= -1;
		this.z *= -1;
	}
	,normalize: function() {
		var l = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
		if(l != 0) {
			this.x /= l;
			this.y /= l;
			this.z /= l;
		}
		return l;
	}
	,project: function() {
		this.x /= this.w;
		this.y /= this.w;
		this.z /= this.w;
	}
	,scaleBy: function(s) {
		this.x *= s;
		this.y *= s;
		this.z *= s;
	}
	,setTo: function(xa,ya,za) {
		this.x = xa;
		this.y = ya;
		this.z = za;
	}
	,subtract: function(a) {
		return new openfl.geom.Vector3D(this.x - a.x,this.y - a.y,this.z - a.z);
	}
	,toString: function() {
		return "Vector3D(" + this.x + ", " + this.y + ", " + this.z + ")";
	}
	,get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	,get_lengthSquared: function() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	,__class__: openfl.geom.Vector3D
	,__properties__: {get_lengthSquared:"get_lengthSquared",get_length:"get_length"}
};
openfl.media = {};
openfl.media.ID3Info = function() {
};
$hxClasses["openfl.media.ID3Info"] = openfl.media.ID3Info;
openfl.media.ID3Info.__name__ = ["openfl","media","ID3Info"];
openfl.media.ID3Info.prototype = {
	__class__: openfl.media.ID3Info
};
openfl.media.Sound = function(stream,context) {
	openfl.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	if(stream != null) this.load(stream,context);
};
$hxClasses["openfl.media.Sound"] = openfl.media.Sound;
openfl.media.Sound.__name__ = ["openfl","media","Sound"];
openfl.media.Sound.__super__ = openfl.events.EventDispatcher;
openfl.media.Sound.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	close: function() {
		if(openfl.media.Sound.__registeredSounds.exists(this.__soundID)) createjs.Sound.removeSound(this.__soundID);
	}
	,load: function(stream,context) {
		this.url = stream.url;
		this.__soundID = haxe.io.Path.withoutExtension(stream.url);
		if(!openfl.media.Sound.__registeredSounds.exists(this.__soundID)) {
			openfl.media.Sound.__registeredSounds.set(this.__soundID,true);
			createjs.Sound.addEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			createjs.Sound.registerSound(this.url,this.__soundID);
		} else this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
	}
	,loadCompressedDataFromByteArray: function(bytes,bytesLength) {
		openfl.Lib.notImplemented("Sound.loadCompressedDataFromByteArray");
	}
	,loadPCMFromByteArray: function(bytes,samples,format,stereo,sampleRate) {
		if(sampleRate == null) sampleRate = 44100;
		if(stereo == null) stereo = true;
		openfl.Lib.notImplemented("Sound.loadPCMFromByteArray");
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(sndTransform == null) sndTransform = new openfl.media.SoundTransform(1,0);
		var instance = createjs.Sound.play(this.__soundID,"any",0,startTime | 0,loops,sndTransform.volume,sndTransform.pan);
		return new openfl.media.SoundChannel(instance);
	}
	,get_id3: function() {
		return new openfl.media.ID3Info();
	}
	,SoundJS_onFileLoad: function(event) {
		if(event.id == this.__soundID) {
			createjs.Sound.removeEventListener("fileload",$bind(this,this.SoundJS_onFileLoad));
			this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
		}
	}
	,__class__: openfl.media.Sound
	,__properties__: {get_id3:"get_id3"}
});
openfl.media.SoundChannel = function(soundInstance) {
	openfl.events.EventDispatcher.call(this,this);
	this.__soundInstance = soundInstance;
	this.__soundInstance.addEventListener("complete",$bind(this,this.soundInstance_onComplete));
};
$hxClasses["openfl.media.SoundChannel"] = openfl.media.SoundChannel;
openfl.media.SoundChannel.__name__ = ["openfl","media","SoundChannel"];
openfl.media.SoundChannel.__super__ = openfl.events.EventDispatcher;
openfl.media.SoundChannel.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	stop: function() {
		this.__soundInstance.stop();
	}
	,__dispose: function() {
		this.__soundInstance.stop();
		this.__soundInstance = null;
	}
	,get_position: function() {
		return this.__soundInstance.getPosition();
	}
	,set_position: function(value) {
		this.__soundInstance.setPosition(value | 0);
		return this.__soundInstance.getPosition();
	}
	,get_soundTransform: function() {
		return new openfl.media.SoundTransform(this.__soundInstance.getVolume(),this.__soundInstance.getPan());
	}
	,set_soundTransform: function(value) {
		this.__soundInstance.setVolume(value.volume);
		this.__soundInstance.setPan(value.pan);
		return value;
	}
	,soundInstance_onComplete: function(_) {
		this.dispatchEvent(new openfl.events.Event(openfl.events.Event.SOUND_COMPLETE));
	}
	,__class__: openfl.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform",get_soundTransform:"get_soundTransform",set_position:"set_position",get_position:"get_position"}
});
openfl.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["openfl.media.SoundLoaderContext"] = openfl.media.SoundLoaderContext;
openfl.media.SoundLoaderContext.__name__ = ["openfl","media","SoundLoaderContext"];
openfl.media.SoundLoaderContext.prototype = {
	__class__: openfl.media.SoundLoaderContext
};
openfl.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["openfl.media.SoundTransform"] = openfl.media.SoundTransform;
openfl.media.SoundTransform.__name__ = ["openfl","media","SoundTransform"];
openfl.media.SoundTransform.prototype = {
	__class__: openfl.media.SoundTransform
};
openfl.net = {};
openfl.net.SharedObject = function() {
	openfl.events.EventDispatcher.call(this);
};
$hxClasses["openfl.net.SharedObject"] = openfl.net.SharedObject;
openfl.net.SharedObject.__name__ = ["openfl","net","SharedObject"];
openfl.net.SharedObject.getLocal = function(name,localPath,secure) {
	if(secure == null) secure = false;
	if(localPath == null) localPath = window.location.href;
	var so = new openfl.net.SharedObject();
	so.__key = localPath + ":" + name;
	var rawData = null;
	try {
		rawData = openfl.net.SharedObject.__getLocalStorage().getItem(so.__key);
	} catch( e ) {
	}
	so.data = { };
	if(rawData != null && rawData != "") {
		var unserializer = new haxe.Unserializer(rawData);
		unserializer.setResolver({ resolveEnum : Type.resolveEnum, resolveClass : openfl.net.SharedObject.resolveClass});
		so.data = unserializer.unserialize();
	}
	if(so.data == null) so.data = { };
	return so;
};
openfl.net.SharedObject.__getLocalStorage = function() {
	var res = js.Browser.getLocalStorage();
	if(res == null) throw new openfl.errors.Error("SharedObject not supported");
	return res;
};
openfl.net.SharedObject.resolveClass = function(name) {
	if(name != null) return Type.resolveClass(StringTools.replace(StringTools.replace(name,"jeash.","flash."),"browser.","flash."));
	return null;
};
openfl.net.SharedObject.__super__ = openfl.events.EventDispatcher;
openfl.net.SharedObject.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	clear: function() {
		this.data = { };
		try {
			openfl.net.SharedObject.__getLocalStorage().removeItem(this.__key);
		} catch( e ) {
		}
		this.flush();
	}
	,flush: function() {
		var data = haxe.Serializer.run(this.data);
		try {
			openfl.net.SharedObject.__getLocalStorage().removeItem(this.__key);
			openfl.net.SharedObject.__getLocalStorage().setItem(this.__key,data);
		} catch( e ) {
			return openfl.net.SharedObjectFlushStatus.PENDING;
		}
		return openfl.net.SharedObjectFlushStatus.FLUSHED;
	}
	,setProperty: function(propertyName,value) {
		if(this.data != null) this.data[propertyName] = value;
	}
	,get_size: function() {
		var d = haxe.Serializer.run(this.data);
		return haxe.io.Bytes.ofString(d).length;
	}
	,__class__: openfl.net.SharedObject
	,__properties__: {get_size:"get_size"}
});
openfl.net.SharedObjectFlushStatus = $hxClasses["openfl.net.SharedObjectFlushStatus"] = { __ename__ : ["openfl","net","SharedObjectFlushStatus"], __constructs__ : ["FLUSHED","PENDING"] };
openfl.net.SharedObjectFlushStatus.FLUSHED = ["FLUSHED",0];
openfl.net.SharedObjectFlushStatus.FLUSHED.toString = $estr;
openfl.net.SharedObjectFlushStatus.FLUSHED.__enum__ = openfl.net.SharedObjectFlushStatus;
openfl.net.SharedObjectFlushStatus.PENDING = ["PENDING",1];
openfl.net.SharedObjectFlushStatus.PENDING.toString = $estr;
openfl.net.SharedObjectFlushStatus.PENDING.__enum__ = openfl.net.SharedObjectFlushStatus;
openfl.net.URLLoader = function(request) {
	openfl.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(openfl.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["openfl.net.URLLoader"] = openfl.net.URLLoader;
openfl.net.URLLoader.__name__ = ["openfl","net","URLLoader"];
openfl.net.URLLoader.__super__ = openfl.events.EventDispatcher;
openfl.net.URLLoader.prototype = $extend(openfl.events.EventDispatcher.prototype,{
	close: function() {
	}
	,getData: function() {
		return null;
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s;
			try {
				s = subject.status;
			} catch( e ) {
				s = null;
			}
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,openfl.utils.ByteArray)) {
			var data1 = data;
			var _g = this.dataFormat;
			switch(_g[1]) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,openfl.net.URLVariables)) {
			var data2 = data;
			var _g1 = 0;
			var _g11 = Reflect.fields(data2);
			while(_g1 < _g11.length) {
				var p = _g11[_g1];
				++_g1;
				if(uri.length != 0) uri += "&";
				uri += encodeURIComponent(p) + "=" + StringTools.urlEncode(Reflect.field(data2,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g2 = this.dataFormat;
		switch(_g2[1]) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g3 = 0;
		while(_g3 < requestHeaders.length) {
			var header = requestHeaders[_g3];
			++_g3;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this.dataFormat;
		switch(_g[1]) {
		case 0:
			this.data = openfl.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new openfl.events.Event(openfl.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new openfl.events.IOErrorEvent(openfl.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new openfl.events.Event(openfl.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new openfl.events.ProgressEvent(openfl.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new openfl.events.SecurityErrorEvent(openfl.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onStatus: function(status) {
		var evt = new openfl.events.HTTPStatusEvent(openfl.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,set_dataFormat: function(inputVal) {
		if(inputVal == openfl.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(window,"ArrayBuffer")) this.dataFormat = openfl.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,__class__: openfl.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
openfl.net.URLLoaderDataFormat = $hxClasses["openfl.net.URLLoaderDataFormat"] = { __ename__ : ["openfl","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] };
openfl.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
openfl.net.URLLoaderDataFormat.BINARY.toString = $estr;
openfl.net.URLLoaderDataFormat.BINARY.__enum__ = openfl.net.URLLoaderDataFormat;
openfl.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
openfl.net.URLLoaderDataFormat.TEXT.toString = $estr;
openfl.net.URLLoaderDataFormat.TEXT.__enum__ = openfl.net.URLLoaderDataFormat;
openfl.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
openfl.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
openfl.net.URLLoaderDataFormat.VARIABLES.__enum__ = openfl.net.URLLoaderDataFormat;
openfl.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = openfl.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["openfl.net.URLRequest"] = openfl.net.URLRequest;
openfl.net.URLRequest.__name__ = ["openfl","net","URLRequest"];
openfl.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == openfl.net.URLRequestMethod.GET || this.data == null) return res;
		if(typeof(this.data) == "string" || js.Boot.__instanceof(this.data,openfl.utils.ByteArray)) {
			res = res.slice();
			res.push(new openfl.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: openfl.net.URLRequest
};
openfl.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["openfl.net.URLRequestHeader"] = openfl.net.URLRequestHeader;
openfl.net.URLRequestHeader.__name__ = ["openfl","net","URLRequestHeader"];
openfl.net.URLRequestHeader.prototype = {
	__class__: openfl.net.URLRequestHeader
};
openfl.net.URLRequestMethod = function() { };
$hxClasses["openfl.net.URLRequestMethod"] = openfl.net.URLRequestMethod;
openfl.net.URLRequestMethod.__name__ = ["openfl","net","URLRequestMethod"];
openfl.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["openfl.net.URLVariables"] = openfl.net.URLVariables;
openfl.net.URLVariables.__name__ = ["openfl","net","URLVariables"];
openfl.net.URLVariables.prototype = {
	decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g1 = 0;
		while(_g1 < fields1.length) {
			var f1 = fields1[_g1];
			++_g1;
			var eq = f1.indexOf("=");
			if(eq > 0) Reflect.setField(this,StringTools.urlDecode(HxOverrides.substr(f1,0,eq)),StringTools.urlDecode(HxOverrides.substr(f1,eq + 1,null))); else if(eq != 0) Reflect.setField(this,decodeURIComponent(f1.split("+").join(" ")),"");
		}
	}
	,toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(encodeURIComponent(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,__class__: openfl.net.URLVariables
};
openfl.system = {};
openfl.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = openfl.system.ApplicationDomain.currentDomain;
};
$hxClasses["openfl.system.ApplicationDomain"] = openfl.system.ApplicationDomain;
openfl.system.ApplicationDomain.__name__ = ["openfl","system","ApplicationDomain"];
openfl.system.ApplicationDomain.prototype = {
	getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,__class__: openfl.system.ApplicationDomain
};
openfl.system.Capabilities = function() { };
$hxClasses["openfl.system.Capabilities"] = openfl.system.Capabilities;
openfl.system.Capabilities.__name__ = ["openfl","system","Capabilities"];
openfl.system.Capabilities.__properties__ = {get_language:"get_language",get_screenResolutionY:"get_screenResolutionY",get_screenResolutionX:"get_screenResolutionX",get_screenDPI:"get_screenDPI",get_pixelAspectRatio:"get_pixelAspectRatio"}
openfl.system.Capabilities.pixelAspectRatio = null;
openfl.system.Capabilities.screenDPI = null;
openfl.system.Capabilities.screenResolutionX = null;
openfl.system.Capabilities.screenResolutionY = null;
openfl.system.Capabilities.language = null;
openfl.system.Capabilities.get_pixelAspectRatio = function() {
	return 1;
};
openfl.system.Capabilities.get_screenDPI = function() {
	if(openfl.system.Capabilities.screenDPI > 0) return openfl.system.Capabilities.screenDPI;
	var body = window.document.getElementsByTagName("body")[0];
	var testDiv = window.document.createElement("div");
	testDiv.style.width = testDiv.style.height = "1in";
	testDiv.style.padding = testDiv.style.margin = "0px";
	testDiv.style.position = "absolute";
	testDiv.style.top = "-100%";
	body.appendChild(testDiv);
	openfl.system.Capabilities.screenDPI = testDiv.offsetWidth;
	body.removeChild(testDiv);
	return openfl.system.Capabilities.screenDPI;
};
openfl.system.Capabilities.get_screenResolutionX = function() {
	return window.screen.width;
};
openfl.system.Capabilities.get_screenResolutionY = function() {
	return window.screen.height;
};
openfl.system.Capabilities.get_language = function() {
	return navigator.language;
};
openfl.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	this.applicationDomain = applicationDomain;
	this.allowCodeImport = true;
	this.allowLoadBytesCodeExecution = true;
};
$hxClasses["openfl.system.LoaderContext"] = openfl.system.LoaderContext;
openfl.system.LoaderContext.__name__ = ["openfl","system","LoaderContext"];
openfl.system.LoaderContext.prototype = {
	__class__: openfl.system.LoaderContext
};
openfl.system.SecurityDomain = function() {
};
$hxClasses["openfl.system.SecurityDomain"] = openfl.system.SecurityDomain;
openfl.system.SecurityDomain.__name__ = ["openfl","system","SecurityDomain"];
openfl.system.SecurityDomain.prototype = {
	__class__: openfl.system.SecurityDomain
};
openfl.system.System = function() { };
$hxClasses["openfl.system.System"] = openfl.system.System;
openfl.system.System.__name__ = ["openfl","system","System"];
openfl.system.System.__properties__ = {get_vmVersion:"get_vmVersion",get_totalMemory:"get_totalMemory"}
openfl.system.System.totalMemory = null;
openfl.system.System.vmVersion = null;
openfl.system.System.exit = function(code) {
	throw "System.exit is currently not supported for HTML5";
};
openfl.system.System.gc = function() {
};
openfl.system.System.pause = function() {
	throw "System.pause is currently not supported for HTML5";
};
openfl.system.System.resume = function() {
	throw "System.resume is currently not supported for HTML5";
};
openfl.system.System.setClipboard = function(string) {
	throw "System.setClipboard is currently not supported for HTML5";
};
openfl.system.System.get_totalMemory = function() {
	return 0;
};
openfl.system.System.get_vmVersion = function() {
	return "1.0.0";
};
openfl.text._AntiAliasType = {};
openfl.text._AntiAliasType.AntiAliasType_Impl_ = function() { };
$hxClasses["openfl.text._AntiAliasType.AntiAliasType_Impl_"] = openfl.text._AntiAliasType.AntiAliasType_Impl_;
openfl.text._AntiAliasType.AntiAliasType_Impl_.__name__ = ["openfl","text","_AntiAliasType","AntiAliasType_Impl_"];
openfl.text.FontStyle = $hxClasses["openfl.text.FontStyle"] = { __ename__ : ["openfl","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] };
openfl.text.FontStyle.REGULAR = ["REGULAR",0];
openfl.text.FontStyle.REGULAR.toString = $estr;
openfl.text.FontStyle.REGULAR.__enum__ = openfl.text.FontStyle;
openfl.text.FontStyle.ITALIC = ["ITALIC",1];
openfl.text.FontStyle.ITALIC.toString = $estr;
openfl.text.FontStyle.ITALIC.__enum__ = openfl.text.FontStyle;
openfl.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
openfl.text.FontStyle.BOLD_ITALIC.toString = $estr;
openfl.text.FontStyle.BOLD_ITALIC.__enum__ = openfl.text.FontStyle;
openfl.text.FontStyle.BOLD = ["BOLD",3];
openfl.text.FontStyle.BOLD.toString = $estr;
openfl.text.FontStyle.BOLD.__enum__ = openfl.text.FontStyle;
openfl.text.FontType = $hxClasses["openfl.text.FontType"] = { __ename__ : ["openfl","text","FontType"], __constructs__ : ["DEVICE","EMBEDDED","EMBEDDED_CFF"] };
openfl.text.FontType.DEVICE = ["DEVICE",0];
openfl.text.FontType.DEVICE.toString = $estr;
openfl.text.FontType.DEVICE.__enum__ = openfl.text.FontType;
openfl.text.FontType.EMBEDDED = ["EMBEDDED",1];
openfl.text.FontType.EMBEDDED.toString = $estr;
openfl.text.FontType.EMBEDDED.__enum__ = openfl.text.FontType;
openfl.text.FontType.EMBEDDED_CFF = ["EMBEDDED_CFF",2];
openfl.text.FontType.EMBEDDED_CFF.toString = $estr;
openfl.text.FontType.EMBEDDED_CFF.__enum__ = openfl.text.FontType;
openfl.text.GridFitType = $hxClasses["openfl.text.GridFitType"] = { __ename__ : ["openfl","text","GridFitType"], __constructs__ : ["NONE","PIXEL","SUBPIXEL"] };
openfl.text.GridFitType.NONE = ["NONE",0];
openfl.text.GridFitType.NONE.toString = $estr;
openfl.text.GridFitType.NONE.__enum__ = openfl.text.GridFitType;
openfl.text.GridFitType.PIXEL = ["PIXEL",1];
openfl.text.GridFitType.PIXEL.toString = $estr;
openfl.text.GridFitType.PIXEL.__enum__ = openfl.text.GridFitType;
openfl.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
openfl.text.GridFitType.SUBPIXEL.toString = $estr;
openfl.text.GridFitType.SUBPIXEL.__enum__ = openfl.text.GridFitType;
openfl.text.TextFormatRange = function(format,start,end) {
	this.format = format;
	this.start = start;
	this.end = end;
};
$hxClasses["openfl.text.TextFormatRange"] = openfl.text.TextFormatRange;
openfl.text.TextFormatRange.__name__ = ["openfl","text","TextFormatRange"];
openfl.text.TextFormatRange.prototype = {
	__class__: openfl.text.TextFormatRange
};
openfl.text.TextFieldAutoSize = $hxClasses["openfl.text.TextFieldAutoSize"] = { __ename__ : ["openfl","text","TextFieldAutoSize"], __constructs__ : ["CENTER","LEFT","NONE","RIGHT"] };
openfl.text.TextFieldAutoSize.CENTER = ["CENTER",0];
openfl.text.TextFieldAutoSize.CENTER.toString = $estr;
openfl.text.TextFieldAutoSize.CENTER.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.LEFT = ["LEFT",1];
openfl.text.TextFieldAutoSize.LEFT.toString = $estr;
openfl.text.TextFieldAutoSize.LEFT.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.NONE = ["NONE",2];
openfl.text.TextFieldAutoSize.NONE.toString = $estr;
openfl.text.TextFieldAutoSize.NONE.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldAutoSize.RIGHT = ["RIGHT",3];
openfl.text.TextFieldAutoSize.RIGHT.toString = $estr;
openfl.text.TextFieldAutoSize.RIGHT.__enum__ = openfl.text.TextFieldAutoSize;
openfl.text.TextFieldType = $hxClasses["openfl.text.TextFieldType"] = { __ename__ : ["openfl","text","TextFieldType"], __constructs__ : ["DYNAMIC","INPUT"] };
openfl.text.TextFieldType.DYNAMIC = ["DYNAMIC",0];
openfl.text.TextFieldType.DYNAMIC.toString = $estr;
openfl.text.TextFieldType.DYNAMIC.__enum__ = openfl.text.TextFieldType;
openfl.text.TextFieldType.INPUT = ["INPUT",1];
openfl.text.TextFieldType.INPUT.toString = $estr;
openfl.text.TextFieldType.INPUT.__enum__ = openfl.text.TextFieldType;
openfl.text.TextFormat = function(font,size,color,bold,italic,underline,url,target,align,leftMargin,rightMargin,indent,leading) {
	this.font = font;
	this.size = size;
	this.color = color;
	this.bold = bold;
	this.italic = italic;
	this.underline = underline;
	this.url = url;
	this.target = target;
	this.align = align;
	this.leftMargin = leftMargin;
	this.rightMargin = rightMargin;
	this.indent = indent;
	this.leading = leading;
};
$hxClasses["openfl.text.TextFormat"] = openfl.text.TextFormat;
openfl.text.TextFormat.__name__ = ["openfl","text","TextFormat"];
openfl.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new openfl.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__merge: function(format) {
		if(format.font != null) this.font = format.font;
		if(format.size != null) this.size = format.size;
		if(format.color != null) this.color = format.color;
		if(format.bold != null) this.bold = format.bold;
		if(format.italic != null) this.italic = format.italic;
		if(format.underline != null) this.underline = format.underline;
		if(format.url != null) this.url = format.url;
		if(format.target != null) this.target = format.target;
		if(format.align != null) this.align = format.align;
		if(format.leftMargin != null) this.leftMargin = format.leftMargin;
		if(format.rightMargin != null) this.rightMargin = format.rightMargin;
		if(format.indent != null) this.indent = format.indent;
		if(format.leading != null) this.leading = format.leading;
		if(format.blockIndent != null) this.blockIndent = format.blockIndent;
		if(format.bullet != null) this.bullet = format.bullet;
		if(format.kerning != null) this.kerning = format.kerning;
		if(format.letterSpacing != null) this.letterSpacing = format.letterSpacing;
		if(format.tabStops != null) this.tabStops = format.tabStops;
	}
	,__class__: openfl.text.TextFormat
};
openfl.text.TextFormatAlign = $hxClasses["openfl.text.TextFormatAlign"] = { __ename__ : ["openfl","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] };
openfl.text.TextFormatAlign.LEFT = ["LEFT",0];
openfl.text.TextFormatAlign.LEFT.toString = $estr;
openfl.text.TextFormatAlign.LEFT.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.RIGHT = ["RIGHT",1];
openfl.text.TextFormatAlign.RIGHT.toString = $estr;
openfl.text.TextFormatAlign.RIGHT.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
openfl.text.TextFormatAlign.JUSTIFY.toString = $estr;
openfl.text.TextFormatAlign.JUSTIFY.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextFormatAlign.CENTER = ["CENTER",3];
openfl.text.TextFormatAlign.CENTER.toString = $estr;
openfl.text.TextFormatAlign.CENTER.__enum__ = openfl.text.TextFormatAlign;
openfl.text.TextLineMetrics = function(x,width,height,ascent,descent,leading) {
	this.x = x;
	this.width = width;
	this.height = height;
	this.ascent = ascent;
	this.descent = descent;
	this.leading = leading;
};
$hxClasses["openfl.text.TextLineMetrics"] = openfl.text.TextLineMetrics;
openfl.text.TextLineMetrics.__name__ = ["openfl","text","TextLineMetrics"];
openfl.text.TextLineMetrics.prototype = {
	__class__: openfl.text.TextLineMetrics
};
openfl.ui = {};
openfl.ui._KeyLocation = {};
openfl.ui._KeyLocation.KeyLocation_Impl_ = function() { };
$hxClasses["openfl.ui._KeyLocation.KeyLocation_Impl_"] = openfl.ui._KeyLocation.KeyLocation_Impl_;
openfl.ui._KeyLocation.KeyLocation_Impl_.__name__ = ["openfl","ui","_KeyLocation","KeyLocation_Impl_"];
openfl.ui.Keyboard = function() { };
$hxClasses["openfl.ui.Keyboard"] = openfl.ui.Keyboard;
openfl.ui.Keyboard.__name__ = ["openfl","ui","Keyboard"];
openfl.ui.Keyboard.capsLock = null;
openfl.ui.Keyboard.numLock = null;
openfl.ui.Keyboard.isAccessible = function() {
	return false;
};
openfl.ui.Keyboard.__convertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 20;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
};
openfl.ui.Keyboard.__convertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 20;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
};
openfl.ui.Multitouch = function() { };
$hxClasses["openfl.ui.Multitouch"] = openfl.ui.Multitouch;
openfl.ui.Multitouch.__name__ = ["openfl","ui","Multitouch"];
openfl.ui.Multitouch.__properties__ = {get_supportsTouchEvents:"get_supportsTouchEvents",set_inputMode:"set_inputMode",get_inputMode:"get_inputMode"}
openfl.ui.Multitouch.maxTouchPoints = null;
openfl.ui.Multitouch.supportedGestures = null;
openfl.ui.Multitouch.supportsGestureEvents = null;
openfl.ui.Multitouch.supportsTouchEvents = null;
openfl.ui.Multitouch.get_inputMode = function() {
	return openfl.ui.MultitouchInputMode.TOUCH_POINT;
};
openfl.ui.Multitouch.set_inputMode = function(inMode) {
	if(inMode == openfl.ui.MultitouchInputMode.GESTURE) return openfl.ui.Multitouch.get_inputMode();
	return inMode;
};
openfl.ui.Multitouch.get_supportsTouchEvents = function() {
	if(('ontouchstart' in document.documentElement) || (window.DocumentTouch && document instanceof DocumentTouch)) return true;
	return false;
};
openfl.ui.MultitouchInputMode = $hxClasses["openfl.ui.MultitouchInputMode"] = { __ename__ : ["openfl","ui","MultitouchInputMode"], __constructs__ : ["NONE","TOUCH_POINT","GESTURE"] };
openfl.ui.MultitouchInputMode.NONE = ["NONE",0];
openfl.ui.MultitouchInputMode.NONE.toString = $estr;
openfl.ui.MultitouchInputMode.NONE.__enum__ = openfl.ui.MultitouchInputMode;
openfl.ui.MultitouchInputMode.TOUCH_POINT = ["TOUCH_POINT",1];
openfl.ui.MultitouchInputMode.TOUCH_POINT.toString = $estr;
openfl.ui.MultitouchInputMode.TOUCH_POINT.__enum__ = openfl.ui.MultitouchInputMode;
openfl.ui.MultitouchInputMode.GESTURE = ["GESTURE",2];
openfl.ui.MultitouchInputMode.GESTURE.toString = $estr;
openfl.ui.MultitouchInputMode.GESTURE.__enum__ = openfl.ui.MultitouchInputMode;
openfl.utils = {};
openfl.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["openfl.utils.ByteArray"] = openfl.utils.ByteArray;
openfl.utils.ByteArray.__name__ = ["openfl","utils","ByteArray"];
openfl.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new openfl.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
};
openfl.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new openfl.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
};
openfl.utils.ByteArray.prototype = {
	clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Std["int"](Math.max(0,this.allocated * 2))); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
		this.position = 0;
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,readByte: function() {
		var data = this.data;
		return data.getInt8(this.position++);
	}
	,readBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw new openfl.errors.IOError("Read error - Out of bounds");
		if(length == 0) length = this.length - this.position;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = Std["int"](Math.max(lengthToEnsure,bytes.allocated * 2))); else if(bytes.allocated > lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this.___resizeBuffer(this.allocated = Std["int"](Math.max(len,this.allocated * 2))); else if(this.allocated > len) this.___resizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos;
		var _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readMultiByte: function(length,charSet) {
		return this.readUTFBytes(length);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c21 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c21 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBytes: function(bytes,offset,length) {
		if(length == null) length = 0;
		if(offset == null) offset = 0;
		if(offset < 0 || length < 0) throw new openfl.errors.IOError("Write error - Out of bounds");
		if(length == 0) length = bytes.length;
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Std["int"](Math.max(lengthToEnsure,this.allocated * 2))); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,__fromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,__get: function(pos) {
		return this.data.getInt8(pos);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0;
		var _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,__getBuffer: function() {
		return this.data.buffer;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,get_endian: function() {
		if(this.littleEndian) return "littleEndian"; else return "bigEndian";
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Std["int"](Math.max(value,this.allocated * 2))); else if(this.allocated > value) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,__class__: openfl.utils.ByteArray
	,__properties__: {set_length:"set_length",set_endian:"set_endian",get_endian:"get_endian",get_bytesAvailable:"get_bytesAvailable"}
};
openfl.utils.Endian = function() { };
$hxClasses["openfl.utils.Endian"] = openfl.utils.Endian;
openfl.utils.Endian.__name__ = ["openfl","utils","Endian"];
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
$hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
haxe.Resource.content = [{ name : "__ASSET__:bitmap_com_ie_blitz_blitzone_screens_LoaderBar", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQW4wQUFBQTRDQVlBQUFDSWVVNDdBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQVVaSlJFRlVlTnJzM2JFSkFrRVVSZEZaWjhKcFF6QXhzQU03c1EvQkpreTNHQzNCd0ZEc1FGakJ5RWlON09IdE9UQU52T2pDRDJaNDlMb3RwWndLQUFDeEZpWUFBQkI5QUFDSVBnQUFSQjhBQUtJUEFBRFJCd0NBNkFNQVFQUUJBQ0Q2QUFCRUh3QUFVVnBkZHlzQUFLUkhYOTg5clFBQUVNNTVGd0JBOUFFQUlQb0FBQkI5QUFDSVBnQUFSQjhBQUtJUEFBRFJCd0NBNkFNQUVIMEFBR1JwaDJXMUFnQkFldlJkKzJBRkFJQnd6cnNBQUtJUEFBRFJCd0NBNkFNQVFQUUJBQ0Q2QUFBUWZRQUFpRDRBQUVRZkFNQ3N0TnRsYndVQWdQVG9lMDByS3dBQWhIUGVCUUFRZlFBQWlENEFBRVFmQUFDaUR3QUEwUWNBZ09nREFFRDBBUUR3MTQ3alpBVUFnUFRvMjl6ZlZnQUFDT2U4Q3dBZytnQUFFSDBBQUlnK0FBQkVId0FBb2c4QUFORUhBSURvQXdCQTlBRUF6RXI3dnQ4L2JHZFRBQURrK2dnd0FKWWhENk1HM3VIaUFBQUFBRWxGVGtTdVFtQ0M"},{ name : "__ASSET__:bitmap_com_ie_blitz_blitzone_screens_Label", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVJjQUFBQkNDQVlBQUFCOTU1SWtBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBRzJsSlJFRlVlTnJzWFYrSUhNZVpMd2sveEJHY1JuQVcrTUR5YlBJVzY5REl4K2tlOUxDejNOTlpnbDF4SWhlREU4MGNPWnh3RWxwQkxNSGQ0WjAxNU1BNmg1WHhublhoQXJPeUE4NFpoNVZBU3A3Q3JCNFVPSWZ6ckpEdE4zdkdNa1FnRzNiOUlNZHZjLzNyNmVyNStwdXE3cXJxNnZramIwR3h1N005M2RWVjMvZjdmdDlYVlY4SnNWTWV4bElPNmxaUWU2emlzMlpRRjNhNmFLZnNsSjNpVXBvS1lGRUJ6VXBRS3p2ZHRWTjJ5azR4TFMwSkl1WHlnVjZwdERjTGFOcEJyUVcxdE5OMU8yV25USDRCSTFnM1lCQXFSYy9ydHNRdVViTzUydXYxUHUrMVd0ZDZpNHZQaDJDVHdXWWFCWUlNK3FSS2F1VWhISFA1YnJXb0wrbjdscjlPQ3JBcjZnVCswdHRCM1dTZmJVYWZUMnFNb1J3TmJrbnpIcU5zUDlyUXlhbWtjMEhkY1B4dUw2WXdyV3VpV2oyYStPZkd4aTF4NWNxdnhOV3J2eEhiMjErb3ZvOStlaldvbHd6NlRNclBYZ1ZZVkEzYXVoYlUraFRxVGlsNnYvbm92VzJBY2lPU3g1dEJ2Zm93QTB6UHNYWWkrbDBkVTd0ckVUUFlzbWp6VnRUbVJzRldzNWFqWDJWdE9qNjdTdS9UNmJSRDVxS3FXMXNmaGN5bVVqbVkxbCtMS2M5cWUzalBYdFJmMDhST21wN2Vtd2JaSHpwV3M0dGF1VEZaV1Z0ckFXRS82NG02ZDRONkpiS2VYWS90YkVxRkNSUlhyS3o4MU9oTFlCTnJhMjlSOXJEUEVWeGFzZVhvZlc1bVNnTTI4K3FyUHcvWmpLSnNSdXhpa3dGbzAxTi9MVWVBbjRlNXBnR1Vpb25MOGU5YVBLTnBha3hMcGIxaDdYYnYycndINVBEY0JIc0lWdVVSMlJGUWdsaVNOdC9YMFdWZE9Uc0NjQUdvTEtXQlNybDhJS2hQRENTbisyblc0SmFqZXk1NUh0ZzRaZ0tYaExzbGFRSkp3RVhTN2cwSGNJbjd3L2hMVVR2UlovWDY2UkJzbUxWdVIvMXppZlNkb1BMRDMvUFFvWVBoLy9qNFFMYm01dVpET2ZQRUpGbzVqQTM2OTBUR3VEY2lHUmwrZVBUZXM3Tkh3L2VqZXFRQ2NQVHY3ZHQzQWhEL3JVbzJhNUhzbkJpUnNTN2VMUW82UjB1ZEpYMUdRSkRXaFlWbktMVnJGY3hXV2lwS0NUcmZhSndQMjJQUy9vQkI5R3ExWjlObVQ3WThVUFFLdldkVzIzaGxBZGNWaCtjMzVQZXp4ald0b3QwYWQ2a1pqWW5UYytDR09ib1A3VWdPbWd4STFrVnhMcWhTOWlBL0NJNm51WndtdGQzZUNPWHhJWEFWOWVDQ3pyTHRHSFR1Q01DbG9vcXBRSmh0bFpiWDlmVTMwZ1kyRDkxZnBFSm8yeTdXcG83RDgyTmx3TDN5OUJFcXdGdWo2Q3UyNElJeDh4U25hS2xpaGdCRHRJWFhqQmt5WFQrWFZERWx5RDJNVmQ1K3BSVWd4WXoxUXdNdzRZdllkZ2dHalhSQ1l4VEFBaUhKQ3lvV0Erc0tNTEZ5NDc0dW9NZmFVWEY5UG9EQlJ4L0J3cWF0bFRFRlVRMVF1ZFlxQnhjYjJXQnQ2V1FCU3hHeXh5dVl0ZUk5cDNhNi9wRUpqc2duL09oQVVVV3orVnJDaC9kUkVBTUlGRG9NWk5icloyaXNDVmJqWmhTTHNYSGg0cGpIL1B3ejlzR2E0RDN4anFRZHB6VEJ5TXlZQzJJZVhnYWpjbEIwT3U5cDR5U1c4Yms0eG9OcGNuelhKUFp5OCtZdGNlblN6M20vK0lwTGRCV3VVSVcrUDlycVcvYUdLTy9pOCtFekVQTmlidC9NRHJnVUJDd0J2UStCcGNnQ3BVWkFEZ3BFQkhnbEV1Q3VyV0pMQlhKdEN3bnNWaTIrV3VJQlltK0JyK0JlVURDUGdkajR2aWI5Sks5cE5DNVM4Rjh1UUJTYTR3Q1dnYXgvVDN6eXlWMzZudVhJTTJoTUc3anNkdjBpczFhSFBBWnYxMGNOTEZTUTJMTktsa0hWZVhvdk9uTmxVekR6d01DMmJBSE1pZmZ4R2xrUEZLelpYQjJab3ZGeTZ0U3pRN3JvU1g1cHZHeGhYTUFpeTlMU2VUNTJ2cFplVEFlNE1Pdmw2OFhYcVNLTkVsZ29hd0E5cFI5WnNJZHFYdGJTYjhQZkRYMDBidVpDRlE3Qzc4TTFjbkZoTVQ0VWJ6ekpiemZxdXlYTzFNWUZwR3h0VkVsTTRVNzIzUlBVbGtXcW5ETEdNbzRDNVdGQ3RXVElHc29hOW1ITkVCeVZxRklVYStHeEFiNkd4cWVybE01ZXZwZkFHMCszclVZTU5RYm5JdUo3VmcwS2pCTWJ3L212SzdqYzlPQU9MUTBzMUlHeEFZdFVic1plcWdhQ1hPVU1LRTlod2VDS0lUdmNXeVJyU2ZEMHM4OWJmd2NMeVBLMlQ4YkdmSk1pNm1MaEdYbkh6MDhmLzRpejE5SlVnc3VvTEkrT0JVNlMxWkRLdzlwd05pdFU0Z3RZY3JoR0ZSOXVtYWxsdFFlWHU4SUhzM0lCdGh3dWliVzdoVm10NWVXTGNYWFZMVVVmVjZjU1hHeDhacy8rOVpEVktGb3hIRjJUV2hZZStIQ0o2UE1kYUxHMW03QzI5cXV3dXNSZXhsVXdvNUszNkdRWWNUNlhRRHlXOW1NbTdmRGhxamgzN2wvRDJSNVo4ZG1KRXordzFodTBnN0cweWxTQ2l5MDYreVFKdnF4R3dkUS9MYWkyNE5NbEdzUVhucldseFdWYmdNTStGNnlyZ0dKUXQyV1NDNEFYSUpDbjZHUllGYXcyQVdqMEg5dVBsU2hZUjhXV09iaUErS0dISGx4VXdKMGoxbExMYXpXS0t2M3A1QU1tN0dGMllHME9lSHNIQlVndCtHUXRWTW1nR0xDd21sM1JFMWRZWU5mamVEOWhEU3hzMFp2WXMrY2I0cW1udmhWVy9FNzdHbTVTRG5BcGZSM0J4VmwvYUljVjdVdDdpSDFVczVpTElsYWlwT1FtN0ErQ3pvUnIxaFJjVEYxTGFrbnhPK2k3S1RPbGJjTUsybEVXeFd5S2I2Wm9CTXdjV09yMVkrTHk2K2ZGUzhzL0RDdCtMNWNmai8rUGVJd0pRNVFyeG5IOXRKWnhnMHRpMGRrNC9YaHRBNU96Tm1XRjMxdTJkVWZBRXE1ZCs0MnhFbzJDdWRCaVN0L0hIM1Qva1ZkMzNUYldoOWdLTFM4dC81TTRmdXhvZ3EzZzl3c1hua3RjcDJNdkVsRDI3ZnQyQ1BKWXBjM0c0ZVlPdUppN1JBczZRYkV0R0FRTUdxajlybDEvSGc5UW1oOXNLbkJNaWFwcHJvcUpnTjYrL2I1eHU1ZzFUWXY3bFBPd0Z2NjVTNUIzSEt5U2pzMFhYN2hQTkNnQzZKbWdUTWZ3SDc3N3Q0RWJOQk93a252aStvMWI0dTIzZnhmWEx4OThGUUQyMHdrUXNRQ1V4R09uQ1Z6R3ViZG9JY1g5c0xhKzNOcmlkd3djS3BRTnk5WmRZeUg0UGhFSXVDYVhWSzZLQW9pMHpNWEc5VUFjaDB6amd1MnA4cTQrYWNzb2VCdEEzNkVjMHMxaGEzMG1yc2daUGJJUEsxZTh4YVpjdWZKV2dwMmc3MTVjK29YNDRJT1BoNjc5bndCZ3FHdEVrMldsTWNUOSsvZUpCdy8rRk5TdjRtYUtLY3E1dTl1VHo3emg4SjFaT3JDdUZGc0ZMQ3BsQnFOeHBjM00xZUhNcGFweG9WTGJZeHAzc1lqN2xHMFZoZnYrTXpPUFo3S2FTU3N1c3pzK1hDSmtrcVBsNVl1L1ZBTExvSy92S1dWQUJTaHdyWDcyeWhseCtmVVh3cUF3S1YvTDJTS244Undvajl2VUxaU0RBOHVSSTk4UkY4NC9GOUpVNnZ2bVNhMm9pTmlYeVR1VWJBU1VVbWxUMThnZzdpUG9aM3YzbWdFMWR0L1MwbXE5UjFqTWdha1FZTEJSMmU5NUFQSEpKdzlZeVIxZEVFaVlSU3h1a2NIZEVBWnBVem1nSUNnc21jNE1ZVHhpeW1hTHh1VVdVUVYxWG5TR1NEMFZLUGkxcC8vNVpBd3l4NElCYTY1ZGo1VUcxK0k3N2JZZDBWS0FCaFM1SzBoQU9pdC9xc29WTVhVOXBMdVZrZU9sbEplNUpHTTkyVk85ZWVOWnZncmlVamF1cGc2a3pNRWxOUzh6OGd5dlJhQWk4L3NrVW5NQ09QYnNlVlFjZkdvbWxOTnlFa0RDOHU2N0g0cDMvL0JoK0hOYXk3aVlTKzdVQUlpQlVPSEdJRWxnb2I0d1BxUEJOSmUxQm9vMlZqajdNcVhWMVAyMFVRYkc3aGJTK3RQVXhkUXBpVWxTOFRGdkYwa1VyTmdkNWN4VlNnZ0JwMkRJczU1cW9wL2hicDB6amkrLy9DcG1QQUFQQklBLytLQVQvcjc2bisrSUg1eDZLWFN6WUJRWks1cXEyYUp4TVpjcXRmZ3Vnbkh1M0w4bFFBUlVFcEg1L3cwR0NQNnRYTWdFdWdtQTZYVHV4WDR2MWc0bzlnNWxnTXRmVW9XYTVlN0ovTHhaUUpvQ0lwUWI3TUhFYXVMK0pIQXBuNzJwb3N1bVlLMENDSHdYbWZteUNnMW9HdFBWQWdFQURERFBESmVIWlJETFloQjdMSXVVTktuMzcyK0ZOUzFHb3lsNzJianZNQmVWaSt0Q1I2bUNVcXM3Vi8wcjhaT2Z2QlpHNVNXQVNLdnc0dEovaDFIODQ4ZVBKdUl2dG9MSTJsa1dEbG5uVkxNRHBxNkZJaTVWVlRFWEd3WG1iZWtEeTV0RzkrQUJUVnNGOXUxU3dUV3lQQ1BJR2ZnVW9Md3Rrak9JUmVWZVFWb1NtUng5aDdub2ROWFduYUNGTDBCcmJmeWZLcWdXRjFpSWJ2ZVBZZUFNRmtOYVhwdXBWaFlYS2d1MkFOQkVPRlZNZ1FkVnN3Q0dUSW1mSWdKdEhXL2hiY0U0Z0xHWXZrY2VSUzVFb0tKRVVnRE1vbDBrUmVENHFrZ0diaE03NUxGZlR2WVgrZzdyY2Voc29jSDVXaXFRdVRMcERPYVJBVVgvZEN6ZzRsSzQxV1BBY2pYcWVGanpPRDBncnFIWFNSYVJReENyS2F4Q0d4dklzNk1YczBZRVhHUnlxcTRnVTVTbXN6eFVRUnFOODFaVHVqaVpjWlRGZEp6ZzZtSmN4N0NyL2hxM0E5UW85WGMzUDJGa1RLVnNReCtsNFpHeXl1UytQRVhnY25jczRPSXlVNVFTVEZ3VGcwUE5yMGFXZlVWbzBpWFlDS0xpdWhKVitsRVVySGVwMTRlRStKSkl6RVNZdVprSVNyb3NMb1RRKzFpMFpnTXNBRE1UOEpNblJoWUpZRHBNMExsRXRrQ1hkajFXbmpOWGJDZm1NcUp5bFFBTEhZQzZzRHNleE5wWEg5V2VLRVdPbVZuT29relhhOERLSTBlc2JjekxaYVl0VDVISmwyemNJOWZuT01abnVqcVh5SFI1d3NOYXhnRXU1UUx1dWEwQUZscnFLZ3Jwd3pjZmRUcEV4dlNHY3J5WUtwZkx1ME1CUjhsYUtLdnd2ZGNwenlKQkJoaGRuYnZzMHoyYmxsdzdFd1V1TGdPZ1VBeVRBK1RQWlFpSkQyVWZnV3MwQkdZcnZwUW1TOEY1ZW9GUkZ0K01pWU93emVwZXhnNnJUTGF0bHllWWdjdmRORmRzQjF4VVNPK0N5QXdVdGczZG5rMEtRTDRZUjU0Tmw2NUt3ZDUvd1lkYmtGV3dybWljQytlZ1hFWHUxTVpPZFVmNW8yTlF6V3M0TFpoTFpRZGNNc0hGUHBETUFxZ2xRMWNya1FUY1IyS3FQQnN1OHhSRkdnWnZURXhWK25sMjN4cTdzQllaNzdFeGNvb01oV2M1SzhmLzBXOTV0eVhJb2xpeVVKNTBjUEcxenFVc3pJODh6VjB3bmNzUzlXQTE1RnphVndTWk1USlozdTR6M21LeUE5b21QYWF1N1VVQUhaUmpuTzRRQlV6Slhud2s2QjZpdFp0M3JHV1FITGxhamVvMmJTdFBKa1hIRGo5aEpIT3NwdDZlR25DeFdUR3BFTzZSZ29zOFY0ak1JbUJnc2JEb2tnWlltdlM3bUg3MVlkbE00eTJZU2lXQ3FPMVR6TjdZV0U3Tytud3pGd2cwRWhqUmdtMFZhUXNXaXhqclpGLytWMEhnWXJmdUNjd1g4a2RpTmRoRGRFSU1OaXhxd1ZyK3RFbXJPV21MRmlmVkxVclFPZGM4TW9wVEVWWHJXUnFDN2ZIQW1VZ3VjUWsrdUtZSHFHdXNqdE0xV2JFZW44eEZsU2NIKzdSR0NTeTZkdm5ZT3FBYU81djdvcS9aMmh0NXpya2g4ekZQUm0vQWZLdGljRmk5ckZsYkVHUnlmUHFkUllOWVRpVzZqbjZ2cGdMVVVTei9MNG5CaVlINCtTVHZPRmVMaHVYcVVBRG1IbUdkd1NlaXZ6eStuQVNXVmVkQXJtcTV2STFyWVNwQXB1d0RWbyt2L3poMDZHQmh3SUpkNSs4UGI3VHJqc1AzUit5bFdyM20vYjdYcnYzV1NqN0FuaEVJSnZHb2hJTDFVMTkrSzl6MVRGTW5LSURKeGZCc1JFcTlsRElHWUZITGpOR1hSTXJDVW5KdnVoRlRBdGlTMENjcmcrNnRDVEp6Nnd3dUxML0lQQUdQdlF4TXZGcHNydUFBREJZVFVIWWFyc3REcHpuRE1sMlZ5emNySW9remNxM0s4dmNuL3lVQlFxYmdvbktOZkRBWEZiRElsQlVzbTlxeUlFZndtaXplbzBtczhvdzcrZ25WOXpKL2JLMndQVWE0Znpyb255a1grbUVqclJDL0cvb2NlNDFzMkxPRzNhOGJzcE9WU0Q5UFJDRFVFdGxKcDJRTTZWd0VUQTFoZGw1NkxXb1Q0cCtiem00UlU0TEY2R1dYeE9CQStZcXBvT1FwQUF3QWgwNngwRTRraDhycnAvTjJ1cnBFRkZqNmZ3L1NHTnBNaDZyYWtEZm1JazhONU1DQ050SXNkYUkvcmQ5SStMb0d5a0xiWjhOWVZXTmJ4TXlSNjJJOWdFVi90WE0yd0dJZmw2MHNhczZTWWtzUURzUVRGWXAyVkNOUUdRSVdqSW44bnFLZkFVd2REaXd5SktBNTNxVVVQYWN5MHBpTGZCRitXbDdlcVRvTUZnQUVORlcrTk9ndFFBZWY1MVU2emo1c0RzK2lWZ2NaeDVBVWlOYjkrMHZPUU1zRHlubVlpencxa0FNTDBsbXNycjdEcWZhSlVjdU5qcjI0RmwwdzNoVzBJSE9kem51aHF3N1o0Mk1oQS9hMk9YOHhrWkNtSHdBUzNCZlB4ay82dStJbzJOSWdadmRNY0YwNzFBLzZQWUFmZndRSFIvb3NmQi8zWWU1a0NERE9ibEcvNGJlR2hFRHV0Y0ZQeEFEbzN4eU5wU0FqL1VHbGt1OFlWeWg3VVVmQjhsM0FydkVXdUJYSUw2TVhKUFBrVVNoMDdVTWVGd0VLeFdlekFDd0k0Q3JhV3hjam5Cbk1HaGZmcmhIR0FDNk82OGtIVURLcWFEYmphY0ZhWW4yRGdxdU1DdnFsM1c0cDgwYkR1S3ZjUHhrTGdzdlBEUTMraDJlcGdCN3ZCMURGRVNrMC9yVGJsVUVneHlwdWlBZHViWDBrZXIzUFl4U0VrcU9SOGxCNTFjdlRBWEJKUERTcUlvOG9jWW0zT09UcHNMTEdlZmViOUpmMG54a0NsdE9uVDhiQXdtYUhBQ3dUYzdRRnhxV0lQVGNBVzEvM3pidGlXcGZlUWk2cFNHT3IvVW1QTnhWeHl0Y3ltU0ozM2FEUFdSNEE3a3YxZWpjWE5oc2FtQVllV1lYdXU0QUNUa3F5WjlYZzhuNHhqN2Zjc1g0ZURvYTNzYkt1ekVXZWhzQlgzZ0pZWnNJemVJYUFaVTBVdUx2Y0pyYmt3NDFKVTVUK3NiYmZIL3Z4S24zd3ZLc05CWmdsaEwvREFHRFZVTFkrVGZTVktaT2ozc1BZVWk1d1FCcjFWbjdURHVaVzNXYXFVaFBsUnlSOUY2a2paeTVncURNelR5ZVlLaGJINFdpTEZHQ3BwL25pNHpyYUZlRG8wZzlaN1VYZjBEek40eWhwT21HNkFJOU9FdGpFQ3FsczJNZzg3aTlqcWhPVHp5VnZnSzZJb2xyMmJyTUxXdk0rRzJsL1o1M0NwMk11cHUxQzRCWUh4TkZuSU5EOFNnQXNBQlJEWUJrQ2x5THpsbVNkdzFTVVlRSndZWVh5T0JnTTRqNXBZUXFYL3JZeEFDNnl4VjNCc1lHTHl0cW85bUtNMDJxb3dNRUd4UlhDc2FFaU9DN3N4ZFpheS9nS0Iwd3Nqc1BhRzh4Y1dRQ0xGMWZFMUpoa0taSXJlOUhkbHg2bUI5ZkU5VEE5MTJKeS9JMUxlMnhBa3M0MHVhNmlIeHU0cUJKVDk2bm8rQUVHMWwyMUY4aG1jNkZHY1c0YU1CbWo5UzdjRjArTFM4aUZjVHkrZ2hXa09KM3l4bzFiZkxyWk83QVU3VHE1c0JkZGV3QzRGR0RRZjJCN0FPZWlremJKdkRsWlFHQUt6SFRWZGoreHVsbjc4NXpVSUlGdjR0SmNnZzRXbWJmREJGaDB1NEJ0Y3JkbzBIN1RCRngwZ3lsbnJ2b001SXlSMHNyMUt6eStBbERCaVpRNGhLdS9ralRwRWZvR2xqekZKRmhObHpia0JSY3MxUWViNHljaEFweG5aZzZIZlYrRUM5OEhzVGtqVm1LYUpKMzNuZWw1VTlRVnNra2JBZkNTczZ1NzgxRHRJbU1kNDJBd0FMYTA5QUlRUnRNK01veTNLRUZIZmxlQ0Nmb0NsblBmdm0rSE1ZQytHM0EzbGQ1VE4wZ1ZYOEdxVzdoQmJPV3RCSlkxRTdsVlVlaHhGWm5JTzRkYkZLY3dnR3Y0V3NEa0FEQmdkeW8zRElDTm9EakdKcS9MaExhRGVXR01UWmN1NERwcVlOS1VuWUlvR0xtTDhUWmhVL0k2V25xeU5ocm5lNzNlNXlPcGVCWjl0cW9HZzk5cnR6Y0tiMHVuMCs0RkNELzAvRUN3VXR1MnNQQk0rQjdONW1xdjFicVd1R2N3b1B3NzdaUXhXZUgzRHhRMnMzOWtSVHZvczlGbmFCKy83dml4bzcxZnYvUHZ2Wis5Y3FZWHNCZitmeHpvWkpQZHJDRy9pNzR6N1d2NlRONW5hVlUxUHJ5aXo3ZTJQbktWUVl4UGs5NXZidTdwc0w4dVgzNGgvRDNyMlZJZTF0ZmZDTjlOMVJaOGh2L2hHbHlyZTYvQUNQVDI3OStYK2M3NHZ1NmQ4UnlGSElaMVplV24xcm9KbWRTTm1VYUhKZ2RjTUlBS29lL1ZhczlhQ2FKcHhhQ2dIYW9CT0gzNlpDK3c3c1lLVG9WTUl6QnBwK1F0MkR3RGdrZjdpWTRiaElaZmoyc0ROeWhVRkx5WDRwNVFyTEtsTVhNQ0Y1MndXOWFtN244cUdZYnNxS3BDQmt0Ulg4U2ZIVG55bmQ0YlYxNk1RUVlBclpKUm54WFBxTmVQOGM5YmFUSzN1UGg4L0Y0QUxnQmR0aHdkaUEwakttVEh4S2hCSHlXQW91TFpxbkhkSlJHbVQ1bk9XKzk5Y0hRUEF0OXZPSFVpS1B1WjB5ZERTc3AyNE1iMEczRVArSU91aS9mazRWTFlYcTlLM2RpUFIzdy9QS1ZSRVl2STVlMmx1QnVsaURsb0l2ZVBpNE9CRzROTmozQm4wRVljVmk1bmRyQndDWXVxNERMeC9zWjNMMXg0VHV6NTVxT2l1WFpkNVFiSkkxbTJIY0JsYUVPYjNLMk53TGRxK3dkYkl1NWFzRllJS1RWcUhzZW5HOVNaQ0dUYkluRVdWRjh1YVF3R2NabDMvL0JoK05OWGpodU1MZHd3akMrYnVldEdZOVNpY2pxcTNEcXV6MHFBaSs4Y0pTNEZ5ODYvRzNRd1pqQ1FCeVB0cGFRUXkzWmpQUVNQUDhqak0vc2J3TzZrK3NmWVQxT3ZIUStGUmpGN0VoNEhpMFB0SHp6NFV3aCtuYUNpZllZSGlzK0k5RDA1SGNrZUlHUUhBeUI1TEhqZWtiOU96bHpJUWxNMXlFUFl1VThNUVVWZm9xMGF3RjRXYkhlelRaeVZDcnRwY05FazVhZGhYOG8rOHhaeUU0TVRJaXBDc1lNWThvSCszUC9ZUGhiWHVCZm11c0YwUG80TFZobEduZEdZbVhrOC9Ja1pLdHhYcmpWaTl6Z1JHWUVlSFZ2SUg4MFRZMUt3QXZ2dHdHaktZNDFOUVEveW1LV1Bzby91Mzk4T2RTSUJMcE5TMEFGejFhZkRGekVCbWJ3RkE0dkJ3aUMzTnQ1VEFvc0V2b0N1S3Y5My83TXQ4Vm5RcVozdUg4V1hRVnZmRDNjOWY4eXRZbHBwU2t1TXdYeHArWWRERjBnZ0EvZ3BHTWdRQ0lMcDRIMmF6ZXU4LytRNVQzbjJDVm1EaTBxNS9yRiszT2hhdG9GeUxncU9OejJ5bDZzaXVkczdUaDJnVWlEc0Z1ZnBNL2hZNlVBRzc2MHlHTGorNVl1LzVJcS9SbWJ1NGh3dUdPUExyNzhRQWhyT1N1Y01Dcy80bTBDdXEwRmJmL3pqL3hneU9KQUx5QkEzak5BRlZCalFadk5HL0RsV2IzOHphUE9ONjc4UDVZKzJFZStDNzBBL2NJMTgzcTZJanBmR2pDZmRxQTBsblNKTEdpcXRROTVDTzE5YUlvQVk3VkJlTUREMCtuUmwrQVVkT0M2NHFsSVRKQ1ZuNE9QSFlJSjNobVUwc1lnWVpBQkxpRlpxTjJnemFrczNaeGZHYnBFRU13cXNrdDJsRlV5SG83MG1oVEkxNG1LV0tYdVJTcy9MWS90THlqR0RCU2V1NzRaUUoza2ZjdjhvaUlOWjRybDgydHFtU0NPcWNNTTNvelp0azlqY09uMWZPZGI2MmFKN1E0c2pwZkZPSzF3WDhINllQVk9Cb2s3dWQwWG9YS1dkbFhXREFmbythbmpkTjB3RzlsWEJjcENxZkYxcUZmQVMrTDBUQ2ZGbkFYdmd3SU5ubDh0L0VmNE9hb2Q3bFFNcVNvVU5yR04xOWRjcTk2WXVXQTVlMmpiMEYvYml3SDNCL2FnbG96RVJNY2pvbGRwVlZGRndieHNReFh0QzBLQ3NLVzRRcGY3Q0Y3am9tQllkcXo2ejIwb29FTS9LWndIVzFKMkxyVG42NFBMcjU0M2tWeUdEVU9UREtXT3psTWFTOEV6MEErUkI2b1pLOW1WL1NQQmxERGNOV0dScFV6YUZad0trVmU4TW8vVHl4VGVWckIrR0d3YmNvRitVakZqRjNMa09KY0JGVXFaUkZJM1ZxQWwydnBBcERjMWpNVFJ1bDdTT2FNK2lqWklEekpqQUhCYnFCWFRhdUV0RzJZeXVLOUZZRVo2dFlWOCszQ0FuY09HRmdhNXJvZUNTY005VU1nd2xVeFZGMEg2WGdRRTRLelFKcVF1Sy8vQXlGQS9DdUVNL0pBc0VjTUh0eVlySEFDeG9EQW5NODhhTjMyY2FOY2hibjRROEduc1ZjTTNZdUc0V0RpNjZnVVZqQ0dXbmxMUVNzWVdLam9iU1dSTVhRTW1JVzhoTWF4dE1rVTRKdDJUVXVOOCt3MnNYaERxRC9HYlVucHZSejIzcXpzSUtRYmpncnl1c29DODNLTk5ka01DNlAzSkRWQlljSzRMVDRrV0daWTZOVHl6RE9WMXpHK3VGc1pvWGl2TzZjNVFOTVp3WVd3Y3c2NWJ5dUJiSlQ5T3lUUUM1V1pHZHI1ZkxYRDBCTGpTZmF6Wm9mT3hUVUZYQnRNWElTcFRTa1BleFFJZ1BSb3dHd2FTWnlBV0txVUFVQndCdDYzVHVaY1VCMWtUMnVkTlZNVWcrZmlqNlBVMndUVmU4MHZ0WGljQmYxYlNuUitOVENzdkJMYnp2VWhIcEN3T0hDdVRMSkJaaklPeVhmQWVYYy9aVkpXckRyR0RuUlJzb0llcnRhSnh0REVBcEFvb3NwZCtPUWc2VTZUVU5nS2tiNmVRbU1TWm5EWUEwb1VQYUJVa2pyTldVRG14RVZyckk1NitML0dmdmxzWGdjTFpHVkt1aXVKTDJQcDJDbjAyRDBIbkdwazNBMUtTbUNmWmlqallVQWNBbHgvZXdMUklzdGpUdlZVb1p1NVpHRjJvcE1pNlRkdlBWM1VQZXh2OExNQUF0YlZpTkVPQzZ6Z0FBQUFCSlJVNUVya0pnZ2c9PQ"},{ name : "__ASSET__:bitmap_com_ie_blitz_blitzone_screens_BackgroundBD", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQlFBQUFBTUFDQUlBQUFEMFZsMmFBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFDTXcxSlJFRlVlTnJzdlFtWVhOVjF0cnRYcWRBczBaTFFoSkJvRUNBR2cxckNERGJHa293SFlpZXhpT1BFd2NTMDRrdzN0b01JRitjbStUSHc1UGt2MTNhZUNKS1EzUC9CK1FXNXdiSERJRGtHWXdaYndnWVNJNHdrQXhJT2c1clJnTEFRUWkyUWNMTHZxYTZxYy9hdzl0NXJENmVxV3B6dHR1aXVPblhtcWpyditiNzFMUmc0OHhJMk1pRDduempFdjBCK3FuZ1lmN3c1dmZ3azRMK2ljOUFlbENZRDdEY3dMd2lzTDVBbVZ4NEVaSFgwRlFad3I0TStjL3MyT3VjTTdsY2hjOWJtVTB5cnZFcDREUUIyRE1RL0FkcWJKeHgzRUhhaXNnZlZDVURmUm0yZG02ZFVzU1BCdHBtZ0gydGwvNnNucC9JU2FlY0QwNTdUMTFEWUFjcGs1aU1CMnZ0T1AyUDFOeEh5ck8wUjRYV2dQWVM5NDZYanJPMFdlU1hCK2dhbnZMc0JQLzJRbDZHbnRtbDZNTTRRektzRHpEQjc4NExkSDVLRXhaaGZqbjQ2dVZmRmVBN1FsMHgrT25wNjU3ZEpTU05nY1oxZHdUU0RCN3lFZDI3dFlwYmwrMXJyOUxZbk9XMkhjdFBEM0RFTnRteE8zRXo3YS9YSnpKUGI1c1JkUjQzamMrZm80NXd5a1dHRm1nOXlaUEhxSHVPdW5jbTVZVTdLS3poNkRuQjBIYmkrL29ZaktjKzJkWkp3YlhNNHQrMG5ycnhRUERyeVpOcUdheXN0TDRocko3Q3krUHhQZVVkdzhVemo4bW5IOFRWczd3bmhhV1ZMT1hKODg4ZDRlMW55RnFuN1VKNmU0MmNnTjU3NTJEblBqWjltM1B6bXNyeks4RmJsK052UU5XZjF1QmkyQzMyZjZHOE5UbHNIdzRjR1plK3BrM0hyeDZIaFU5SDRoV0w0QUt6M0VQb0NPQlprSTFtd1g3YXFMMUMzR0J4OGFFWmZQKzZsb0crUGNhKzhOYjNGdmZMcEFUckJtcmtYVEtoczRGNUF6MGIwek5GUEd4djNsZ0c5K0hrQytGVFk2UWRtRGdSR1pPd1k0Z1VIZUVKcTNQVmlYVHMrMlZrM01laVNLTmZHZWw0YzZBK05aV0d0NDNaRG9vV01TdVExN2dwT3BHSEtJZU5wME5UcjlGQXZia2pyeVluVE41NDByVGFJejRCeFB3RCtjdURnT2h6WTUwUytTR0cxa1V0U3NMNDJuMWEvR0NpdUNNRzBITTcxejF1T3ZpL2Eyd0xLaWdKSWo3ZVdxZTRvK1Fzc3YxUlhObTNrY2VWN3VVMm5vSC9xdDlhOStTb3VuUU5jWDNheFVIRVd3bTRCYlhHZ0lLVDJJSk5lS2V3TlZqd0wrUnFDdkZnbTdybjJyOFZEK1o0RTZkaUlSd2ZhSzh5TEN6ZXV3Z1FVK3lSZno1RWREOElwMWxvM2FNMi9mZUp4OVlUaTRqdTZNVEVVdTd2eEpDam5EM0JodDBCN3hoemF1NUhubXlsdE5zOHZ2SE9PQnQ2YVM3WkZ2UGxjWTIyaGRSemFqNDNNRUlSZHFieUpBRG56dWZKZHdQVTNadnNSYWR1bDg2bDFMblBlZnBYNGdRS0F6N1k5ay93RHBMazkrY1BpV3d5WnM3eDY3U2ZsN2VLdDdXcXRNT1Q3RThTUEVhNnZsV2tkeExrQUU5NUVvSDZBYS90Qm5ReVl0aUJoUXhpZ1h6VElncFRGU2JObGRUQUFxaC82QWxpdWRkT2hMMDN5Ulo4bVNiNE1GNXJvZ01vNkx2a200bDd4UTJiazA0UEN2U2pXYWt2cU9QZnFwN1RPdldBaUZvQUVZcThUZXJXekloWDBhaWNWQVhwUjFaZ204M2FJZUtrQ2J6bTRXdzdyaG9OdWVaVHJDYXZKNEJaOHhlM3lrWFgwazY5dDUvQTArOGRJMUpZVGc0Y3pNK1Y4ODROazhzVEFJdGdZOE0wR0JDK0ZYUXJJTWdHN3dFVVVSdlJqVGR0WXJpSnhmblhyUW1MdGNlVjlwN0s5ZzRkeEpyWHhzSUljSUI5NmtZZEZHRlo0R0pBREl5NjBGQmh1QzFnRm5vamZjZjR3TE41VFVHRzRSYUFpVkxRWmxldDNiM0tzMVlnZEhDVGNnaWI1YlNoZU5UVzRRK0JWWGlJSnQzZE5nNFJoNUhkZ0Fna1gvTU5WNUJVeFNhQXpGZWNvTEZkTUE4bzlKaTRkZEJTZWxYZXh3R3d0V0FXdXZ2bXNjeFpYVDkwdTBCaGJtRUYrb3Nzb0toT2t0ZzRoR0d5NUkxQXlCdGM3aHI1RXQ3TWQ0Vmh2dVoweEVXd1VTYjV1N3BXMzFhQVBKK0plK2Y5MjdyV2JuRmx1YWxiL3BwbWN6V0p2aVE3blZOQUx4cmVnM2R1Y1R1YkZ0ZXdJNGlVS3ZHNHpjeUxjVGNPNnlVR1hncU5rWkUwQXQwRGY2aFFjMjNWa2hTNnRRWUNMT0sxQ3pyMFhqWkF6dXZlNDkvWTZ6MXRPMW9TSjZyR0pqYmxwanhkc3lQRmR5cGtOalBWUFVydFdiS0ZpRllsbEdHTnVsWmdxRVVPKzI2VmJNSUlpQ2w0OGJCT0hVVUJWVGovQVlaaVp4ZUVVTU93akN6dGdtQXYzRWhCWldEd0VIRVBOZ29TWktndkxXQXQyRW02VE5wYzNraXM0bDE5aU5YVmdLSk9FYzQyM0JkN054UlFrM040NmFLdlM0djdza0NCc2xtM0pnakJuSElWRG85UXNySjc0cTRyM3VpQ2MvMGYwUmVPQ3FvemlYTHdHNGpZTVpxNzlVQm9HMTh0QzM4NFUrbExjemlqNmVybWR3eVJmZmRmUUpkOXVsdmgyajNzVkl2WGwzclFtWjdQWTYzUTRSNWYxQmtGdlFFRnZSMlhlOG9pWFdydGJJdTdHc0s0WDZLYWozQ2pFTmUrQkJFeWJGaVJMNDFMb0VaVlloSkx5cW5jdHN3NFQ2amxwT2hJcWM0KzF0Wi8ySVhnTTVpSUpSNEV1NEpzQUpMbllvUldIQ2NWdWxWaFdXV01sWWdvUEl4cXRjc1k3emRKdWNUaUhGb000bkFLR1F6M1NHZ3pIeU1LYVFkb3NDMk1HNlp5RVdidlNGdHJxUW8rUXNEZ0I1SWU0SU9FV2lrSCt0Q0lnaTBYQ1NVbVlTN2pva0cyZGdyRHFpeFptaTh6Wm9GZVg2WXZtTXRKQ2h6Q1lXVzNWMnJMcW93cDl3d3Q5eTNNN2QwdnlUUjl0QmFDVThLb2x2bWJ1MVNib2JlNVZseE5TMmVzV2UyUExldjJnMTZDN1VxQ1hKdk4yZ1hocEFtODg3Z2F4TGc1MS9xeGJLdWdHVWk2UVNvczk0RGFlRllNMmhMS0gyRUUwNHBpY08yY2RDTmpveStoZUFPNmVTT1ZrZ0RCQ1RvREhybWx3TURaWnFjMXlNYW9WZXduRkFVaHNyQ1dtU3NRQlBPeXVIM2FhcGQzaU1JaUE3SEJLZHhPR1hSN3BOTEl3M1NDdGxBcERBVTQ1WWRwS2hZTkl1T1h0TnBNd0Z5L3J1RUMyVFJKdUxiSmRNMHd2RW82elJqc0ZZWlJYSFlLd0NLc1dRVGpDRjQxaXNNMFhUY1JnWWFjeG1xVmN1NG1BWVRBblZCY0xveDZOdmlYR081ZFQ2TnU1Z0t0ZWtYd0RTM3hISmZjR201eExGbnVUT0p6TGdkN1V4dVplSVY2WHVoc3I3U1poWFNleWxFUzVaTVF0QzI0OXpOamw0T3ZCV09VYmljOU9FS1lVNGFJdjh5Tm56bjJQbElPVGZRblpINCs1U3hCMmd6SHpsNHQxS3JiVUZXdENNVEJWNlhJaXNYNFhoSVBOTmQxUkhtNXZJTlVzclRFcU00dkRYWVZoVXNFd2I5S0pweXlNNTJiSkJtbWVpNlZxQWhaNGxRcW5JbUZvbjRZbUVsWkZaOUh0WE1SbDVZZ3V4V1haaW9STEZvUXR2R3F1bmswV2xHWHlSY2VWQjVlV2twVUlnK3VkUU4rMEdWZTk0M2J1Y2NtWFVPSXJwbGs1b3EyaXVGZFltOTdoM2lSaXI0L0RPYXFzTjZ5bU53bjB1bVRlRGhGdmNvRTNGbmM3emJvUTA1RW9HSEY5UVpGRTdORkxpc0ZYcU5pWHNHOEQxVjY4S3RndXJBWUNzdzhuK3hFeVFDbzI5Z0Jqc2x4c28ySXNjTXRtbjJZUWk4UjJpVmdPMXRJczB5Q1hCaE40R012VDR2Z2RBWmRabWhncjNUMFlibC9IeDhqQ2xtcGhydHpCTitWbTJVdUZlNHVFUjE3YzNqcGhSenFDbzhzcUVvNFJoSFdLTS9xaWhjUGpFWlFWNzRzT0tnOU9qOEh5VFFRdkRLNjdyNjdlb2VnYkVuRFZZY2szamRYWlh1S3JjNjgwQVNUTGMzWnhyeVBVS2piSjJSM2puQ3JEdWVlZzErbHRkc3U4aFBLSDVNVGJNN2pyemJwcFFaZEF1V0RGMzRUb0NCQzZnS1Nya1lZQXV6a0Q1c09MNWN3QzR0UjFEMzRHTWpCemIwN21uRXJJSE1wZzQwQXd0c3JGVkszWVJ5ZzJJckhUT0czbFlXT3dsbXFacHZJd21pL3RYVHhzZ0dGbUZvYzdETU5xUnlHclI5cTdXcmpOZ3l5RlFkb3JOS3NFRXVhNWRzTmIweFNnSzVHd09TNExLUkpPWkkwdXRVTFlLUWgzMkJjZGtaS1ZzR2VTSHdiWGV4cDl5eWowVGVKMkp2YzA2bWhESTdyVjJiUEV0NVBjNnhmbUhGRGNTekk1QjFYMmVqbWNld1o2eTVKNTZSSHVLWWpYTFFoNzRLNFA2ekpxbjZSdWdpNzRMeUlKM0taWWJoTG83RklBVjIvaU9aSlJGQVhMUFBxWVVvRVptTHR2a1N4SU1uck9zMldwQnZXWXlNWmtNS2JLeFRRSGRSb2sxbzNUOGtweTE3b0J4VEtOOFREcWwvWTFTN3ZGWVgrbmRMa3dyS012ZHpSVjhwYUZLUVpwWHB6ZTFGSmhKVFNySEJMVytna1g3WTZiSkN5ZVVCSUptK095a0NMaGxqVzZPYnN5cmRGbENNSStRVmxHWHpTS3diSXZPbDFLRmkwc3VnUU1ybHRza0tVMDlZM1B1RXBWNk5zbHQzT1E1T3VaYmtXeU9vZHdyNGFjWGVaZXplU01jRzlhazNOOGh2T29oZDVJbVRjUjhYb0t2SWx4dHdPczZ3TGQ4aWlYMGlYS1kzSEJXQnV5ZmIwdDJ2WTRUZk80SFFPMldYRGlvMEIyQ2poUUdSZ25FN0pkUXliZ01ZbU55V0FjSWhkYjhxc0FjWWx6SG9qRTNxNXBMOHMweHNONC9iQzEzNUp1bGlhSXd6NHhXdVhDTU0rdmd3Z2U2V1N5TUc2UURpZ1ZWbzV5T1NUY1lscWVZNDVxMjlhRG81bWc0a3JYWEk0aVlRNDhUL3J5c1VaN1pXV1ZJUWo3QkdVWmZkSGxsUWRIaGtWN3RBNTJZM0M5VlBSTkhPL2N3VUxmWUxkemg2dDhTN1E2KzNBdmt6M0xaZnVjRXhUM0loMlBmVXpPOFE3blhvQmVvcmZaTGZQMkFQR2FCRjZUYmxrYTdvYXdibkxRdGJSbUljNExVc010dFhFU1JNN1c4K1ZWUFhCazBhOERwTUdIbVVtMERBVGZBZWVoaEV6RFl3b2JZNTVxRHVpVm5JMkswWThVcW9QYWFaOG1JekZJaUdSRlluc1ZjU2s4YkRGTHU4Umg4T2s1WEE0TWN4SEQzUjdwWkxJd25wdUZHYVJkcGNLOHVMT3ZoMllaR2lrRmt6QXZPREszUmtza1RBK090aFlKSzUyRXlkYm9jZ1ZoWTZmZkR2cWl5ZVhCMUpTc1Vuc20yVEM0L3M1RzN4UnU1ODVMdnFGVzU5VFJWbEM4YlBSeHIyK2lsYWZZUzNRNGR4bDZTZDVtcDh4THJOc3ZnM2lEQmQ2TzRtNllxQnNxc1RyRHd0enpoeWdLRGRxWUlKcnRHTDZPZGt6bUhkbVo4YVcvWkZybVVaQWNoc2VlYkd4NnAzTjBtVmE1bUtZVkJ3ckZ3VWhNbEloOUxOTTJIc2J6cFlQTTBpUVlacFN5NFZnWTVsSldFN042cEVObFlXT0l0R3FRNWdxR0V4S2t2VWlZU2EyVFBFaFk3aWNzd1dGZTM4c0Z3MjlZWEJaYUpJeGJvK1hVYUZwV1ZpSkIyTkU1eWRzWGJkSmo2YjdvQkNsWjVyRG9rakc0N2tDNExxR3ZKZU9xOUVMZmNMZHpkeVhmbEZabkwrNWxxdkRjSmU0Tkx1NGxtNXo5eFY2U3c3bmIwT3Z5TmhObFhudkZ2aS94QmdxODBiZ2JMKzJhZGQwdWdDNUUwMDQ4M0hheUVqZ3ByTUpCWTR4R1ZMdHlpTnEzOUpmUm1KbTdyQXNhSk5zSU9SQ1BTV3hzckRxMmc3RmRMZzZsNGlSSWJLd2xwa3JFYVhoWXk1ZE9KQTRuS1J2MmdtSE9peE9GNkpHT2tvVXhnelFYcnQ5eVdaaVFJTzBLemNMam80MGtUSFJIaTFzSWtubFp2ZUZSa0xBeExpdUZOVnBPamM2UHV6VXJLMlZrZEVEbkpGSmVkRVI1Y09xVUxIdnI0RlFZWEtlUVlSTDBEWXgzanN5NDZoRzNjNm1TYndldHpwWldScjNKdlVGSnpwNHh6aTZ4bCtwdzdqejArbmliQTJYZUhpRmVmM1hYVDlvbDZycEJ2bUxML1lRMGxPdEEzQzVWQWdlaGJCcGtoUzYvUGdKQWFmdUhwOWxGM2pnZEhKZEYwcGFCOFZCQ3B1S3htNDM5d05oZkxrYW8yT3lndGduRlpDUTJ4MnZSSk9JQUhzYld4Q29PTTZ6WkVra2NUbEkyN0FmRFhoN3A1TEt3aDBGYTJHNklDczF5dTZNOVNSZ3ZFczZQTGg0Y2JTd1NKbHFqS2FuUmNsYVdueURzOUVVejBRUXUzeG0wQjJXRithTGp5NE1UWTdCRk9RL0Y0UHJvUk4vUjZuYnVtdVNiaEhzSkpiNGUvWHU3eUwwRWs3UEJpeEFoOW5vNW5Ec0N2V1J2Y3pLWjF6YWxGL0dtRm5namNUY0o2N29WM1JqUWhTREVMYjhTT0JuS1FxSUY5eWJ3MmhmSlMxMWhianRHM0h1NVZHem1BU2ViVHo1V0FCNTdzN0VMakUxV2FqTVlJMW94NnFBT0VJcE5TT3dyRWNmek1KcW5aVEZMQTVMNVJCU0g3VERNYUdYRFJCajI4a2lYSkF1VEROTFdVdUV1azNCN2U2akIwVmhjbHExSTJHeU5OcVJHVzdLeWN2Q0xFNFNEZzdMUytxSTl5b1BOS1ZtV3NPaHVZSEM5QlBTTmJ1bzdDdEEzV1UrajlKSnZXcXR6NzNLdlQ2Z1Z1YmlYWW5LT0Vuc0RITTdsUWErWHR6bEk1ZzJwNHcwZzNsN0dYUWZySmdWZEkrVjJvUkk0Q21zaEtXaVdBYWc5Wlk2R0NCZ21ZMnZRZnVEaDJBdzBWT1plWnl5NStsZUdyUWcyeHBiSTBXOGlxMXpzNmFDMkNjVXVKRFlhcDRrU3NhbUtPSTZIdmMzU3hNcGhCd3d6bjdKaENZYTVoaTVlQmNQdTZDeFBXZGpRVzlpZElLMlVDaXVoV2NiNDZKSkl1QzJCeHNSbG9VWENvZFpvVWxaV0dZS3dPeWlMNklzV3lGUHlSWWVYQjJ1a3FzUlFDMjhENkNvRzEwbmRUY3BHMzZRWlZ6R0Z2aVc2bmROSXZqTERKVWkzU2hsdFplTmVqSk03ekwzaFNjNitNYzVtc1RmQTRWdzI5SHJmcFRKZDhKR056YjFJdkFiYzdRN3JKZ2ZkK0VwZzVyUkNROUFjU203UW14NVRlNzRxR0lpOEZ6UmI3djh5N3JVWHVUY3FPems1ZWZXdmdZMDl3QmgzZEZ2bFlsUXI5aEdLNlVoY21rUWN4Y05LdnlXaVdacFFPVXlBNGZ5aW5BakRuR25SVmw0Rnc3ekpaTVhFOU9nczc5N0NOb08wV2lyTWk0c3hKRFJMaVk4T0ptRm5QK0hXYXJpRG82MXhXZXI2dUt6UmZsbFp5UVRoNktBc3R5KzZyUExnb0xCb2MrdmdNakM0UGlyUjF6L2p5cnZRdHpTM2N6ckoxeS9kcXJ3UzMxSE92WUVtNXlpeE44RGhYQXIwT2pvVkpaQjVTeVhlSHNOZGI5WU5CTjFPVkFMNzhXMFkyZEpaTW9RNms1THFhQTNEZ3NRZ0RQN3o4aU5ualhpQndNa2N3Z2s1WWZWdlBCaGI1V0pkSzdiVkZhTytGWjRHaVNNbFlsOGVSdk9saVdacGQ2eDBEQXlyYllPaGRJKzBKVHJMdTdkdzc1Q3duQjB0N0J4UTJWZU1rU1lGUjF1S2hEbjNza2FMTDNGbFpRVUx3bm9QWWMrZ3JBUythSEo1Y09Ld2FGcnI0TFFZWEtkSEZvZWdiNHJPUnAzT3VES21Jam1tTjZOdnB5WGZybGlkS2R5cjhIS251TmU3dU5mRDVCd3Y5dm80bkJORHI3T2dONVhNMjEzaXBadVpVK0Z1Qk91R2h5NURGSE9DaDAwNlJleXpCMUtXV0duc3VrOXkwS1ZBODJUNVYyV1JNMUFtQk13VkdrVElSRHlPcWY1MWdyRTNGY3RDbjVPS0RVS3hCeEtIU2NRQlBJelZEeHY2TGJuTTBnRk82VUNiZEtCSFdvTGhDRm5ZV2kxTU1VaTdTNFhWMEN4VGZIUWdDV3RkbExoeUxvZzdGNHJTNWVDNExHakx0alpydERzMTJwaVZSUk9FZlhvSWgvcWlnL09pdVJabjVadVNOUm93dUg0UW9tK1hDbjNkQVZlQXB1Nm1rbng5MDYwOHJNNXBJcDJEYzYxSzRONFFrM001WW0rSXd6a2VlcjBLZWhQSXZHaWRSYWVKdHlkd2x5N3FwcWdFVG8rNDd0am5wSVRxVzRiY0M4amFtVlVJSWxsSTJtdktFNmZKaVZrVVduWndzZ2NoVzR6V0hHTFkyRlg5bTVhS3ZZUmlFeEtiak5OaEVyRS9EK041V2hIaXNLVnl1RmRnbU9pUkRxc1dKaG1rYmFYQ2JaV1BGcG9WVE1KS1AyRm9yNFNSaEFuTmhBbHhXVlpyTkpJYWJjL0s4aFdFM1QyRUMwRTQxQmR0S2c4bStxSURVckpHRlFiWFBmVE1Ia1hmMGd0OXkzTTcwNE9kMDBpKzVWbWRTZHlyUTNpdmNhL2I1RnlXMkJ2c2NBNkNYbUpCYjdreWIzTGlEZll6RzNFM1d0cUZDTlpORHJxVXZzRk9mb3NQVzZaMlV4NUZIdVp1VURla0FPSTQwZ2IvbURReU0xT3FmM2xwaE16RDJUaXkraGU3QzBDajRoUkk3S29sVmlYaTFEenNhNVoyaXNPMk5rdTlBc00wajNTa0xFd3hTR09sd3ViUXJDZ1NOdllURGlCaHJ5SmhwelhhbWhvZExRaHJrZEdDTDFvU2hPMUJXZUcrNktUbHdYUU1abFozTis4YUJ0ZTdoYjRwbXZwR28yOTMzYzRxNFBrR08zZEk4azFTNG90d3I0YlhQY3E5OUo2OVVXSnZWRmx2SjZDWEtQTjJnSGdqQlY2NnVoc2s3WHF6YmhEb2xrVzVrWHpyTHI2T1kwWG82TXQ2alhtcEs4VExtSEhRVEhuRUNlQ21aWEMyUFFwZGJkT2IySzBiQjRLeHZmcFhZMzRFRXdIY3NFMUhZcUpFbkJ2SWZTelROaDcyTlV1N3hXRnZwM1RIWURnbVI5cFdMV3p1TFN6UG1ha0dhYjlTWVd0OHRJdUVqVjJVTkJMTzQ3S01KS3pIWlZtS2hLM1dhTitzTEg5QldQQkZ0eEVkMnE5aXlwVGErWm5jRjIwdkR6WjJEN2FsWkxsN0pubTBEaTRmZyt0azlHVzJ2cjd2V1BRTmRUdkwwQ2lzRGEyWHIxM3lEVTYzaWl6eHRYRXZFOVJlTUJ3V1dRbnZMZTVWVGM0bGliMHB5bm9qVTZ6czBPdVNlWU9OelIwajNzN2hicW1zU3dIZEVNb05OejhEbEYyczI3Vmk0SjZsWHRkcThzUXpMYS8wTjR5V25aRE1JV1Rkak9xeFJUZm1JV0FjWFAwclU1MDZ0V20yZENUV1E2ZTlKT0x5ZVpncURuczVwVHNHd3pFNTBzNXFZVUp1RmlWQk9pbzBLeDBKNjhIUk9RbnJ3ZEdrSW1Hek5kbzNLNnN0d0pvRllTMHl1dWljeE5vdHBxQkY3LzVCV1RSZnRCNytaQzhQSnFaazZjMk5vc0tpdTRQQmRSc29sbzYrQ1RvYlJXZGNwU24wRFhJN282MklDTDE4dlJvYUdkS3R5clE2QTlOdDNkWTlWZ0wzV2tPdC9JdDdjZTkrT1dKdmZGbXZkMDJ2Qi9TNnFubTdUcnpCZm1ZUDNJMldkaE9DcmpmbEJpSXVwT3VaNU0yVDNVMkJIc1ZKV0QyUUFwMjI5RmVieEZVY1lTVmtHeDU3YnFaTE5FYUR1TkpRTVVVb0RrZmlLSW00UEI3MkVvZXBUdWxTWVpqcmpWdURaR0dQRU9sUWczUm5TVmk2SzRDUnNDMDRPcUJJbUc2TlJyS3lrRFhKczdJUVFkalZROWd2S0N2TUYrMWJIa3hNeVVvY0Z0MGRESzVUNkc1MG9DOHQ0eXBkb1crbzI1a2VjSlZJOHZWT3QwckV2Y3dWNmR4VDNCdHVjaTVMN08weDZJMzJOaWVvNHlVUUwxWGdqY0hkMEVwZ011dVdDYnFRQW5FaGVvclJrUUxkVXdETjQxY2hRUWgwZ0JUc2djMmt4ci91dVhIaWpUWUxIbHM2R0hQOGNXNEZZN3BjakFaVGgxWC9CaUN4M29kS0pVSE95RlhFa1R5TTkxdnlFb2Y5bmRMSllaZ3JvcWJWSTUxU0ZwWU4wbHdDMGM2UXNLRk9XTzZpQkFvQlN5VE14WXRJSkRnNnFFZ1l0VWE3czdMYWpYeDVZa0dZSEpSVmdpODZ0anlZSEJiZFF4ak1pODJwaDZBdjgranJPL3JRdHl5M015bmdxdE9TYjNLcnN4ZjNLcE9PYXU0dFMrenRGZWgxZTV2RFpONnVFNi9UekJ3bjdTWmpYVWhBdVlrUU53bmNKdWhPN0krczVZdTUwTUZaKzlPc0o5SnpLenFXZzgwa1duWlcvL0o0UE9ibS9DdVBoZUpnREpnbmwxbmtZcHRXN0ZYOTYwUmlKMkJ6WVBRcVlqb1BZM2xhYm5IWWxhUVY1SlJPQjhOWXJKU3dCSzZDaWxxWFM1Q0Z5YmxaOWxMaGNrallrSmlsOVJQbWpJdW1aT0cveGJya2t5ckIwYW1zMFhLenBYd2RWVUc0eU1wS0pnaDdCR1VsOTBYYnV3Y2ZuQmdzSkhqVkR5YjBwY1k3bDFIb1MzYzdXd0t1NVBKVUJYMlRTNzd4Vm1lUEVsK2xlcmFEM0Z0U2NXOGFzVGQ1V1c5NTBCc3Y4MXBDNEVPSU53aFRPNCs3cGJKdURPZ0dJMjduZ3FDVEl1YkIwdE8zZzF0a28xYlhLY1lqc0RsZUJ3YjdrNHpRK3hmTXQ4d011ckZKTktaWFFlc2ZUemF0R0tIaUFLdXpDWW1KRXJHWFpkck13M2krdEZNY0xzTXBuUUtHVzVmelZJOTBoQ3djbkp0RjZLVWsrSzRUazNBTGhJcWx0MWV5SUdFdW1KTVowa0twdmFQMEltRUFyZkxiYm8wMnAwWkhDc0tHeUdnaGFxdVp4TzBPeXFMNW9rMUp5elFNWm9hVXJJTVlnK3VtU3pRUDEyVVBvbTljeHBWdm9TL043UndTY0VVS2RpWkl2dFIwcTBRbHZoYnVWUTlsVDNKdnNNazVUT3gxdnRkNkNIcWpaZDZ5aUpjcThDYW9CQ2F3THFNWnA2TkFONDV5ZzhPdVl0alllQWFOTW9pRjNvWnBualFHT2poNW0zdnRPZTZOeXR4NUtpYXQvaVhveHR6Vis5ZWZpbEd0MkVjb3BscWROU1NtU3NUK1BJelZEeXVFN3pSTFU4VmgrUkdBRHNFdzJTT2RXQmFtR0tRZHBjSkthQmJuVWhwU0loSXVpb1J6RXM2TGhKbG9neWExVUFvc0VoWlNvNGxaV2I2Q3NDRXl1dkJGTTZIZE1OTjkwZm5kQWFJdk9tMTVzRzlZTkxsMWNPOWdjRDBxWmFkVTlEWE5zNk1aVjVSQ1h6emIyZFB0N0pCOG1iV1hMeTc1VXRPdHlyYzZrN2hYd25Gbm5uTWs5NVpyY2c0VGU3MGN6ajBMdlU1amMwZUlseXJ3cHNGZFdzTmhJdmlGc1c2NlN1Q0lsS3d3SUI0OXBEcGFOR1FvcHlXU0wxZjdSbnh6eXFIakhwQWNGZ0h0Vy8zTFhLSXhyaGpqMWIrMEdEQklnTVR1V21JdGNib2x6RVh6c0JJeGpmS3cweXp0SlE3SGxRMFRZZGpQSXgwakMrTWgwbHk5TE9sSkVtNWpqMGJDZWx4V1FYS1d1S3cwMXVoVWdyQWhNcnJ3UlRmM0RhRnpraUR6S3I1b2NsNjB2VHpZM1QzWW5wSVYzVHE0RXhqTXJTcjBpQUxjOCtqYm5Yam56cm1kZlFLdWJMMTh5NU44UzQrMjZrbnU5VWx5N3B6WTJ5M29MVlhtdFZWYmRJWjRuV1ptTDl3TlpkMVEwUFdsM0JERUJmRGttN1M0V0hxUHBZTUFmTzNyenRNY2dvRFpFTW1aV0RyTzdTY0ZtWkJEUkdEd25ONzJ2cWJLeGZyTWticGl3THJlOHNSSXpJRTVMZFArUEJ4b2xxYUp3N0ZsdzA0WTVwcnFTL1JJeDhqQ2FvaTBiQkptbUVFYUt4VjJoR2FWUThKU05waFFqMHNKanJZVkNjZGJvKzF0aEdtQ2NJdHMxUjdDaFMrYTVZSndzQzlhem92bUVqQlR5b01qVTdMaWVpWjFHSU5sVVZwWWJtc3I2dkhvcTVGcWI2RXZOZDY1bEVKZmd0dVpISEFWV2VWTFRiZEtaSFgyNGw2R1I0RDFCdmVHbTV5RHhGNHZoM1BQUW04U21aZEV2RkdWd0ozRFhWL1c5V0xYbEVIUVpDS0pwMElvei9tY0Fsa1B0cHJoVUh6RmR3djNPOUQweVoyMDdMVG9Fd25aaHNlK0lyQlA5YTgzRmFOYU1Wa29EbENKZmF0LzQzallsaThkTFE1SGxnM2JZRmlLTWs3a2tmYVVoWDBNMG9SUzRZS0VwZTludFpHU0R3bnZmZjNscHpkL0wvdmw2TVhuVE9xYnBYY2FFdWpFU3NKSVhKWmFKQnh1amFaa1pYa0l3b0l2dW4zVUNFRlpaRiswbEJmTjgxMUJMZytPVE1teVlUQ3o5MHpxSVF4dWI4WHA1L3dQS3ZwYXJub3RqdERlUVY5YXhsV3FRdDlndDdNaDRLcEV5YmV6Vm1lOXhKZDRFSHVKZXoxTXprRmlyNWZEdVRQUTY0eXdvc3E4L2dvdG5YaHBBcS9aenh5QXV5VC9NNEN2NkFwUlUxb2VocWlYSnlOYjZ2eDlZNkFyOHFWaFpoZG13Wk5OR0ZQa3pFblBHWmZBZmViTEk2ZVV5YzB4UFdFYWJ2aWJ1eUNjRTQ2Q1llWThjQTRjT1FyY3NldTQvSWZsUU9JeFpzaCt4azRKaml4WVhRZk00ODFkUytINmc5eXlRK1RONVJ6ZjhkeDhySlc5b1A3RkdmcTB2R0xxYWduekhIN3Q1ZHYvNFFzSDNock9maDg3ZnRKSC8vQnZNZ2FXM21TbXJlTWNmek1LcXlUc1o2Njhubk4xZTdubzUrVmMyU0hDcnVQYTJuQjlqWGhCcTlKZTV2b09iSzh6bDQrWHVBNWNmSTV6YmYybFUxRGVSSEVmY0dVL2NHMlBNUG1sVE41QitQc0MzU0xqT1dhZUhqOXp1T05kYjE0WjlLeTJ2UDJSazZsdGdXYVcxcjRISmZvR1pWeFpDMzBsclRTcDJ4bTBpbHdyK2lhWGZJZjM3SngwNk14U3VaZGh2WWRRN2xWWG9senVEVXh5VGluMlVoM09KVU92VjBHdlUrYjFKbDRXN0lzMkVpK3hjMUlRN3ZwTHUzR3NTd0xkcEpRTDhlYm5jbm9neFlMdk80Rjg1WDNGWTNzTGV3bkI1R2JBM0gya2VDZ2hBMmtOdFhQQnFSdlRhM3JKVTVxMVltNk9zUExZallaYVlxcEU3SzhQZTlRUFI0dkQzc293czVZTmM2NTRyZ01LaGhQS3dwYmV3bzVTWWEvUUxKTW16RVJoRnRPRVIrYncxSmJ2TmVrM0c5a3ZUMi85M2luTHoyKzVveFVSMkNzNG1sUWtUTFJHbTdPeXloQ0VuVUZaWmwrMFVCN3M4a1czVm9ZWFFyQW9xNEtpRUJOU3N0SzJEaTVKRGVhUzdLK3J3VnlaeWNoRGRXYkF6aDVIMzdDbXZvblFOOVR0ek5Cc1o0K0FxNUJldmdUSmQ5K2VWM2UvOHN6ck80ZDJQcmN0KzdQNUx6b09HVGRwMnV6K1E4WlBtamFyZitLaHM2Yk5QaXI3UVVtUFhPSnI1bDdseVI3ZzNtQ1RjNkRZNitOd0xnOTZ3Y2RtSEdoczdoRHhPaU9naytKdU9PdUdnVzQ2eW9VWTgzT2EybUJJdTg3bG92UG81ZUJZWHpSNFVUUVZnYVBiSU5rSk9RQ1B1ZW0rSlRmd241bExUV2hLSkZodStOalJvN2FjTTlScmlXbXU2V0FleHZPMGNNZTF4U3hOcWh4T0JzUEJIbWtKMHNLanMzeDZDM3VWQ3Z1RVpqbmQwUW9KRzc4KzgrdGtlWWIydUt3U3JkRzJyQ3k4UXJnTnhjWUs0WGFoYzNCUUZ1cUxWbzVPd2Jjd3NwM3R0a2tqejFLN0I2c1liRXJKS3FOblVpSU1SaG8rS1JqY25nT0l3bnA3SGVxakhuMlR4enVYWE9pYk51QXFKTmk1L1dnR3ZjODhkdStMVHo2MGI4OU80Z1hNMi91SFgzbjJzZXlYRi83endmekJqSUZuSFhsU1grUGZkMDN1bStYSHZlcE9LWjk3WTBLdHlqTTVsK0Z3VGdXOUFkNW1KN1hhdXhPUks0RmRpQTQrdU11Y2duQXM3a1lGUVFjU2NnZ3hsdFVpbUc1ODl0bVlkeXkrSnNQZ2FJcm1Qb3VpQURObGxzRnRrQUx3R053cmlvTXhyaGdUeTNwcGs1bUU0Z0FrTnUxaHEwUWN5OE9GN2tkN09WRWNUZ1hEMWpScEt3d1hLNVZTRmlibFpsRktoVXNuWWJPakN0cEFEcVM0TEV1Uk1OSkp1SDFlMDFLall3VmhQVEphRHNwaXJXSmVjMUNXdFlHd2xCZnRYUjZzZHcrT0NJc0dRN2x2VnpIWTJQZVlhYjJJTVF5dTR5TENPd2Q5aVJsWDVSYjZTcEl2anI3V25rWmVrdS9iKy9kbDNQdkVqKytnYzY5OXZQYnlqdXhIZ09GM3plby8rWWhGWnpDUGFDdXN5aE5uL3U1ekw4NTdGSk56ak5nYjZuRHVEdlNXVWNxYm5uZ2RnT3FEdTdST1NOU0M0WFNnQ3dHeWNHZ2JwRlJZMnhtZ2hZcWJ5ZmlYOXBEUlpHYzNLanNoT2JnTmt0ZWVBY2VpQVF2aTVzUzFoU0Nyc3dHSjNjYnBJSWs0TlE4N3pkSktwWjlWSE80R0RMZFpKYlVzWE9RWFdRelNTSUswcTVlU1QzeTBEd25yRnp2UTF1emsxa3Z5L1JwRkJCYjFZWW1FM2Rab05EVTZzU0NNOVJDV2ppTXVDQnQ5MGVKTGZYelJSUnZnZHRza3RIc3dQU1hMaXNHTTFEcTQ5ekc0anB0QzBXdE5PSmpSTnlUanFsTnVaenpnQ3JTUFg1ZmttNkh2a3cvZmthSHYyL3VIUzdwOGFzTHdUeC84OXRqeGs0NVlkT2FzL25mTlAvN003UGV3YUN1ZGUxR002ZzczZGxIc0RYWTQrMEt2VjBHdkYvUjZFaSt6MXorSEVXKzV1TnRaMXZVRzNSQy9OSVN0UTNsa1cwRnNyOTBYNEY1YU1HRmxlQVFrMjEvTndZK05UU3Zqb1JoYjVXSlVLeWJoTGhXSjNiWEVZUkp4V2g1Mm1xV0RuZEtkZ21HaVI5cERGdll3U0Z0TGhibm1YOVZLaFZPUWNMdWZzUG1LUXVBM1ptbWg1Q2dTRHJKR3h3ckM5QjdDUWI1b2NsNDBYaDdNYzRlMG9Yc3dVNnFJV2RLZVNiMkt3VkpoTUcrWnA2RVpndVhWMmpjRWZaVUwvZEdEdmlFWlZ3YkoxNEMrZ1c1blo4Q1ZIdXljb2UrMkIyNzJSZC8rL3Y2aG9hR0FDNkZtNWtIMjgvQ2RYenZpK0RNekRNNytEWXgwRHVCZVJxdnZqUTYxQ3ViZUJIRldYZzduSU9oMXQrYzFlSnZkMWJ5K3hNc01kYnhsRUc4NXVKdUdkZjFBMTc4TlVqQWFKVUhSSGdIYUtnYTZZMGN3dHVtUkE1SnRoR3g1blZlLzMzZ3c1bnB3aGlVN1dWc2NNQmJBc1NnU08xM1RhWG1ZWHYxTGdtRm1ka3AzQ29hSkhtbGZXWmhna09iaUY3MnBWTmduTkN1Q2hOdXlEdnJwQUtBV0NkdWJDVnVLaE8zV2FGcFdscmNnck55REtGUmdhMUJXbEMvYW96ellrWkxWeG1DSmdFWHJnaFdEcVQyVHVvWEJVajVXNjE2SXZWdFNIY2pveXl3YVZLK2hMNjJwYitLTUs2OXNaMlpHMzdDQUszT3c4NnZQYjMvb3UzOC8vUHBPTytndVg3NTg4ZUxGQXdNRC9TTURuV3pMbGkyN2QrL08vbjM5OWRjM2J0elkvTk5Od2x1K2wvMU03cHVkTWZBSjcvbjRwR216a1gxSTRWNm05d1R1TnZjR201d1R4Vm1GT0p5VHAxZ1J2YzJCeHVhU2lkZS9FamdXZDJOWU4wa25wQUI2aVM4VEhRWGcrazdTa3dQYStab3Blcy9MTDJ5NzU1YnNseE0vK0ltcHMrZWxQekU0anpodTV2UGRtNDE5K3YzU3dSaU1DMExyaXQzMjZRQWtKcnFtdzNtWUd6bFRXUWVpT096bmxDNGRodDBlYVZ1T3RMbGFtR3VzYXpCSUp5Z1ZUa2ZDbkhQOG0xU01ITTVSUmdpTzVyUWlZWkkxdWt4Qm1JdXN5RWhCV1JHKzZLRHlZRFFsaXhnV25hUjFjTWN3T0tKcE1Keng0Y3Z4eTFBZjlHVm1leVNZKzhGMEFIMUxqbmNPTC9TTmNEdFRleHBsNCszOXcxczMzREQwNkwybWI2Z01keSs4OE1LVksxZWFpTmM1aG9hR01oSys5OTU3czMrSld2SHNvMDVlT1BEQmhVcy9oSE12dzB0OE84aTkwY1c5ZEpOeldyRTMxT0djRW5ySjhWZm1OUXdsM3JJRVhtZXBjTGRaMTB0UlRrNjU1Y0V0bERqMU81WjhMUndiTnZhOC9QeU5uL3VWL1h2M1pMK1BtenoxMDlkKzI4YkFKU25Qd2YyY3VOOE11ZDk4YUMxL2lTdHY3djNMNlMxL2lSTncwMTdoNFRQUkduN2ErZzg3N3gxZ2krYVVQV3p2Tm14dHVheXVJYkhKY0ZoN1lVdHZZVzdyRHF6MWVCVkoyUFE2UXpOWVlrdGhRei9oTGZmOGY5bFBjYlY1emdXTHo3bWdtQmMzSEFhdTM5cmcwbklNbllTMS9yRllsMXFwbDYreVdSemRSbkhuU3oyRXViS3ZPTU82QnRzYUNITnUzQXd1SHdicDBJaTdrTjQ5T084V3pJc05rTmU1eE5iQnRvYlByamVPMmtQWjhQNE5haHBjcjlEWGdyNUJHVmRsdXAzZFBZMktSM1krdDgwaS9BNE9EbDUwMFVVWkFFZGVlR1RrUERneWNoaisxcmUrdFg3OWVzdExYdDd4U1Biemt3MWZ6eGo0aFBldWJGUUlINHpjNjIxeURoTjdJOHA2dld0NktkQWJML04ybUhoRFdoOUY0RzZZQ3AwUWRKTjNSU3FMTmpzU0JGMFZFVE9oTWlwb2JMdjcxaWI5WmlQN0pmdnp6QXYrMkxxc1lONkxPRVc5SXF5WVViODFlYXE1S3dwTG1BVW5MWXNpRkh0NHAzWGp0RjNheFdrMm1UN3NNa3NUeE9GZ3AzUUNaYmdWcTBQMFNJZkp3aFNEdEZvYVN5Z1ZUcVlKYytUU2g2c21WTzBNdGdWSGMrMk5aaXNTMXF6Umh0Um9jMVpXcENBY0ZwUmw5a1VqNWNFdExnVkgyeVNQbEt4MldIUlROUmFrNmJaOW10d3pxVE5xTU5mRVcrbmJDbFRCMzdOcGNCMURYK1lvOXgzTjZHdnRiR1NPZDQ3S3VFcUR2aFRKTjU5ODYvZHZlT0xIMzBHL2VsYXVYTGxtelpwZ3laY0N3N3QzNzg0WTJFN0NlM2UvdlBYNy83ejlnWFh6VDN6dndEa1hURzc0b3MwbHZxT0NlNU9ZbklNY3pqMEh2VEV5TDVsWFN5SGVzbkUzT2V0Q1hIcFdXc3FGQkZONFJncVhEdUtsMEdaeUFreTJZangyaTREZ1NhWXNCSGpLL1dNNXZYM1oyUFFlNXB5Mm9lUWVTTTVWalVGaVg5YzBkSXlIYVpYREFVN3BkRENjd0NNZEZDS2RvRlE0R1FsclhaUzR2TFVBMnJVTmd4cmdjVmt0S0dXTUpiZEcyN0t5QWl1RVpSQjFCR1dKOXc2c3ZtaWtQRGpQTFE0cEQzWmhNQlBEb2xVTXR2ZE1LaHVEa2ZrWU1SakU4NXFLd2UzVnJzZjFOenBJMFpjVzcxeEtvVytvMnpsZit0djc5ejJ3N3FzN245dW1mOHNNREF4azZMdDgrZkt5TDZYNit2cEVFcjdoaGhzMmJ0eUlUbm5ncmVHbkhyNDcremxtNlljV2YvQzNNd3hHdVZjOUZnbnluTUZ3WDlKMjVvY1U5M1pMN08wcTlNYkp2UEYxdk9IRUM4Ujg2WVM0UzVXRVV5aTZrWlFMVVUvVDltSDVFTnRMelpnNnZ3YWsxQ2xlOHBvRFpSRXVUbmFLeVR6NlRlSGJFeGdCVzVwY3pJRzJkWkFLaVFtRnhHWHljQ3B4MkJtamxSeUdpUVhERWJJd0pUY3J2bFE0UFFtRFlERnRYa2ZqN3pZa0xvc0ovWHRhV3duU0cwQW1ZYXgvRWpVcks0VWc3QldVUldrZzdNNkx0cGNIazFLeVZBeG1ZbGgwanNIdFBkdFZERGJPSndVR2k2dGRWeTVQZzlGWFFUZ0srbXFrMXluMERldHNWRTZocjNmQUZVUGN6am1EN2Q0NWxOR3ZibnZPaVBUeXl5OWZ2WHAxaHkvaGNoSWVHaHE2NXBwcnJyLytlbE5vMXBNUDM1MzlMRGpwdlNlZTlXdHpqajRGUHhDamczdkpKdWVneXQ3d3N0NU9RcTg3UHRvMm95amlEYXpnOVJkNElVRldsZ2ZyeHJkRVNrQXZFVUhRRUx0czRyU1ZxWmwxNURqd3lOZFR2TkJ1VHJaQ3NuMFJQT0t0NU5YNmlFTEZRT3NNRE1tUTJGOGlUc3JEaWNSaFA2ZDBMQXo3ZUtTVHlNS29RUnBOa0xiMlVpcWZoTG5vL3pVZXpWd1QxdU95QkJMbVRFeXVJbHVqRmFoT0t3aHpkUU85Z3JKc2VkRmhiWlBhTG1wR1NNbktqNkFlRnEzMVRHcHVGbUN0Z3p1SXdmWjhMQlNEdWZoaHgxdnpJSFJMcWpPRXMrSmErNDRlOUkzc2JGUWUrbnBKdnZuT2YrR0pUWnUrOC9kNm82UGx5NWV2WGJ1MkRNOHpmV1JMWHpNeU1nYTJDTUxQUHZaQTlqUG42TVZuLzhhbERWTTBocjVkNEY3LzR0NVlrM05VaG5OM29aZm9iZlkwTm51b3VPVUl2Q2x3dDRkWUY3eWZpT1BiUU9kelIybjJIZGhWbUlkTHZVWTdDK0E3a21vRzl1VmtPeVJ6eS9rY3djWjBNRGFvWUVpUkx1ZnVkUzhEaVlrU2NUQVBZL25TS2NUaEFLZTBQd3h6QVhqalBkSytJZEtvUVZvOGlvWUU2ZEpKV08wblhOaVpwVmxpSWRCY0pmeThGUkFYVmtJcUVnNjJSZ2NLd25wa05NakNkNnVFMXVLTEhqa1lSbDkwaXZMZ0FvTlozajFZT3M0Y21Da3MydFl6eWRRNnVBTVlqT3UzTmd5TzdwWlV0MkdrTC9xcTErSzAwQ3dZdGVqYjdVSmZrY1dHSHIxMzAzZXUxYjh5cnJqaWlzc3Z2NXgwUmJON0Yzdjl0Y2EvdTE5amJ4OW8vS0tNU1pQWnhNbnNrRU5ZMy9UR3o4UkpqWDg5UjFNUTNySmxTMU1RUnFkNTZlbXROLzAvRnh6ejdvOHMrZEJuSmsrZkhjRzk4bW5XU2U1TllYSk80SER1UFBRU3ZjMU9tYmU3eE91N1BzRzRHOW4rdDVPVUc2d01zeEE3ZWUvaTY2akFaTjZwbmFaaEczanROaElxTzczUVBBaVB6Yk0xelRBTWpLbHlNZllSbzdHcm01S2RTQndrRVlmemNFbmlzTjVqaVV2ZlRjRXdIT0NSNWx4WGNjVXRjTXZDOU43QzVsTGhEcEt3bUFXVzg0a2t5WExEbDZJeExrc2lZVXVSTUdhTnRtWmwrUXZDV0E5aGtLT2hCR1VYOVVVenFYalk2b3NPS3c5R1U3SkVMVnJCWUNaV05jc1l6SlNld0ozRllKN2ZrZUEyRzNOSjNaTHFzU0hQbE5hK293bDlrOFk3UnhUNk90M080ajRaZW5TalRyOTlmWDNyMXExelYveSsrQng3OFZuMnduTU42TFdQNGIyTm4rWkw4akZ6RHBzNXUvVXZlUXdNREt4ZHV6WWo4eXV2dkhMOSt2V29ML3JKaCs3TWZqSU1YdnJoRElQbktQQVZ3TDNNbW10VkN2ZlNUYzZlWXErZnc3bVQwRXN6SnhOa1huSWRieG5FNjk4Y09CbnVwbVJkVDVkd0dPS0dRbjJIZ1BhZGFZa3VZNnU1NlREUkpHQUxEWHF6SVhOeG9jcVIzcnVQKzh5S3A2QmkybHNZRWlCeGlFUWN3Y1B5S3JwNE9FUWM5bW80YkNGYkx1RWdJM3VrT3lRTE8wcUZQVUt6NGttWXk0Wm9VNUd3ZWw0cGNWbk9Uc0kwYTNSNlFSanZJZXdJeXVxa0w1cVlrZ1Z0bWJvSWkyYVUxc0dkdzJENUJrcVpHSXdWQnRkUmtxelFOeTM2ZWhmNnV0ek80dEtHSGtIb055UE1qSDV0dHVjTWQ1L1l6cDU1cXNXMHdXUG5TNDBmdHBVZE1yYkJ3UE1Xc01Qbk4zNG5qR3oxTWd4ZXMyYk5OZGRjYy9YVlY1c3crTm5IN2ovcDdFK2M5UDVQakowd1dVUGZqbk92ZjNGdmlXSXYxZUhjU2VqMThUWUhsL0pDMmNRYmpic2xTYnR4ellHdEswWkYzRmkyU20vYkhpMVE2cjhCblBmUytwTWZOM2VyOGRnSjFtMTNHaks0blFtRDJaalkyYWhFS281R1ltU3JmU1RpU0I1Mm1hV3A0ckFkaGhtaGJCZ0owQ3JOSTAyWGhjc3BGVTVPd29xU2l4Y0pJL2YvUVlyTHlxL2hOQkttQ3NJWUNRY0l3bTBOWHhLRVE0S3lhSG5SUlFxYTZvdU9UTWtpaEVWYmVpWjFIb04xc2syQndmUnVTZlZPaFR5UEd2UzFkall5eGp0M3JOQlhXZmVoUnpjK2lOSHZoZzBiK3ZyNmJPaWIvVGdsWDYrUnphMGhKbytJd3hrRGswbTRHZEIxMFVVWG1URDR3SnQ3Tjk5MXcyTS92T1hNbFo4NzlyUnpIZHlMbnI0QjNCc1E1bHdPOXlZV2U4dUdYajl2YzRpeE9ZUjQ0d1RlTkxqYllkYjFCVjFJUVpvQmpOZDVyQjFGdGI3ZFd0VVk4SWJRNCt1THluUkNCc3R5UE1WZTA5STRlUTdjNTNDblFHSjNMVEYwa0llSlptbG41VEFKaHNWdlJOVW1IVnN3bkNnNmk5SmJ1RWRKbUN1cnBzWmxnZkdiVTQvTEFobGYxYXdzcHFWR093UmhZWTBRUVpqV1E1Z1dsRVgzUlNjdER5YUdSUWYwVENvZmd4MkZ3UmdHUnpjTnhvbTZidUJWRFZrVDlUY0NJak5BTlBxQ1RLNys2SXQzTnVwS3hoVmFXQTN3d2hNUFBuaTdTcitEZzROcjE2NDFmc1ZtZ0xwMVU2enE2eHc1Q2ZjdlpFY2VRM0ZIVXpENEIvL3k1Y2QrY01zWkt6OC85NWdCS2UxcFZIQnZwTW5acGR6Nk9aeExnMTQvYjdPM3NUa1Y4WG9LdkdYakxwRjE0MEUzbm5JVGJOYzdqMk5IM2VqS3ZxVXNreWNnWk11SGdWczM5Z0pqb2x6TVBRK0VzNGhYK2NCMXhtdVZ4Y1BjdlZlQnhyUThIb2JKYWRKRUdBNlNoUzNWd2hTRHRLT1hrajAwSzU2RU9SYzJDL0tBSnJRRkVRTzBRN2hhSkl4M0VpWllvNldzTEdzYjRZRElhRmtRdGdkbGhlWkZrOHVEdVhDOE9DaVR1Vkt5ZWd1RE9aTVNxVDB3Mk5JMFdMMHg1Qk1UWFhlaUwvTVBlU2ExOWlXZ3J3Q3FZYXF2d3JmU0hPbm9teUxlT1VHaHI1TFB0ZnVWSVQvNjNiZVhiWHBneEs3Y3dUSDBWT05uMG1SMnpBa05HSFlKd2prR1gzbmxsUmtHNnhQOC9JVW52M1B0NmlOUGZ0OTd6dnZDNUJsenZMbVhTWDJNeXVWZWVwSnpXSXd6NE85Vk95ZjNHUFE2WmQ0MHhMdm5sUmUyZjI5ZDlzc0o1L3phMUZuelhQWEYwUzJSdkMvMFkxZzNOZWpTdHlVNUpYV1hhZCtCUUYyU3c1cDRIQU4wWnZEWkl2OVNaSkp1VEFkak5JS0wyUEkzUmlqV3YxK1U1KzBTY1NvZVZ2T2xmY1JoSDZkMDUyQllKMXRoUVE1WldOWkxtY1VncmN2VUtVcUZFNUN3S0RVTDJ5U1FzS1I3YTZmNWlBV2Ewa2tZdFVaYnNyTEVOc0xKQkdGeVVKWTVMN3A5TDBDZTB1V0xGdUtwM0NsWlhMaGtkR0F3dFhWd2VSZ00rZjd6dzJCcjAyREdES295SVNhNlR2SThrME9lZXdaOW1XaDRWdWNJSW1xVWdMN0VqQ3RQdDdPd0xmRDIvdUh2Zi8zeXQ5OGFwdEx2RTl2WnRxMkpQYy8wTWJ5M0lUdG5LekJ2UGp0eGNTTksyb1hCYTlhc2FXSXdtaFQ5ekNQMy9lekpMZTlhL3NtbHY3VEt3cjA0RlpkZDM1dlc1T3dyOXZvNW5KTkNMMVhPOVpGNTZYVzg1cVZuOVB2MVAxNjVmM2hQOXZ2bWI5MXcvdDkrNjlDTWdjbnduQm9SYVI1bWY5YjF3emZpSnFSaXdnNlFiZWZ3ZGJTQU11L0VwdkR5endvdlRnYmEyc2F3c1o5aUhFekZFVWpzTms1REozalkxeXdkNnBUdUJBekh5OEowZzNRNXBjSmxrTENVbVMyVXkxcXE3ajA3Q1F2V2FHSldWcEFnekpHVUw0K2dMRk5lZEV4NU1ERWxTdytMOW1rZDNFRU1MaHJ3K21Od2NOTmdSejRXcjVlVmRFVm83ZHQxOUUzVDFOY1M3eHlRY1dXV2ZFV0UwZWwzWUdBZ2cwYmtFNmNyd2k4Nk12eHVDc0tIejJmSG51ajBSVGNqc2k2ODhNSU1nL1crd1FmZTNQdndIV3VmK05FZHl5NzQ4N25ITGprWXVEZWgyQnZnY0U0QXZiU0NYbWMxYjZETWEzeHErL2R1YmRKdk5ySmZ0dDl6NjVtZi9tT1BpK2EwdUJ2TXVtR2lMbVhsNHltb0RMNkZucHZSYUJ2Sk45elF6Z2RjajBRQ2Mxd3hNSFdYT05tWWM4ZjhVRENtaDJZbFJHSmZpVmpmRHBsanFSN21jQjdtTE40cFhTWU1rM09rZldWaGI0TzBXaXJjTFJJbXhXWHBYOHFHdUN3V2FJME9GSVMxeUdnNUtFdmhxYlMrNk1qeVlIZEtWazloY0xHYmN2eE5nOEZKOHJHZ0hwVjBsU3prMlkyK09lMkd4VndsUTE5elo2UFllR2NDK2pZbit0RnRmN3Y3NVIwSy9lS3BWODg4eGJaczZwcndheHJOQ3VHWmN4cHFzQXVEbDQrTTlldlhYM3p4eFVORFE4cXpiK3g2NmJhLytlUCtVODdPTUhqc3hDa285ekpjTkMyWmV3T1NuRXNTZXdNY3ptSFFTMjJBbElwNGJUTUIrL1YwRXVKTmhyc3BXTmU1enBFMGxCQnhvUXV2ckxnNEJuSmR1OHh5bHZQQTNjN1RuWnhFUElaeXdKaEl4U1NoV0l2YUNrYmlpQ3JpY0gzWVpaYU9kVXFYQmNOZUJjT2hzakRaSU4wMUV1WXk3Z3FPWVNNSkd5NlhwTGdzTHVPTmJJMzJ6Y3FpQ3NJQ0NjdUNzSzF6a3NVWDdjaUx0clpONG1Eb0hpeVdSb1JpTU5OYkIzY0VnM243NWVJTmdLUVk3QmtUYlNnTXJtdVh2bUhsdnU4NDlFMlFjVVVvOU5VbjJ2SElodXhIM0ovTmZyOHEvV2JRdTNWVFEyN3QyYkh6SlhidlMwUU1Yamt5bW9YQmVqN1cwRTkrK09MbG56ejFvNzl6OGdkKzA4Mjl6SzkvcjErWWMwQnhiMmZFWGgrSGN5ajAraFQwRXFFM21Iak5OUmZwaURjeDdxWmgzUml1UzBLNVVQb0xLbzVOTy9hODlQeTI3OTZjL1hMaXViOCtkYzRSU2MrQTBBeG84SDVGV1hpY0RveXRWSXptU0hQM3JnNUQ0Z2lKV05HSGZYaVlKZzRITzZVVHdyQUVFR1paV0RRdms2dUZ3dzNTOXRDczlDVE1wV1ZCZTVNNTAxcjRhUE1jZVFyN3FrTTdDZXVDTUdPQ2kxWWxZWDlCR0krTUZuelJ4VkdTbk9aVVg3U2FGeTJjSnprYUZrS3dYQjdza1pKbENZc210dzd1Q0FZWFpjd3FCaXNuaVk3QjFxYkJMQy8zOVkySlJ2T3hnTmZUSmwyRjl6ZWlvSy9VbXRlN3VaRUxmUk0wOWJXaUx5M2pTaWowMWIzb3c2L3YzSHpQLzFZK1ZKQit2N3Qzc1ljZWFQemIreVBINE1YdlpuM1Q3ZE5lZnZubEYxNTQ0Y1VYWDd4Ky9YcmxxUU52N3YzM1cvN21tWi84Y05sbi9zZlVHWFBqdVplbDBIczlpbnREdWJkVER1Y3lvVGZJMkJ3VjFCeG9ESFl0Z2t6STNXUmQ2Q1J3am9hdVNPOTQrdjNuMy8ybC9Yc2JOUUlQMy95UEYzenRqZ1FNSElLdi9xOEJyL2w3dmgzQ3dOZ1p3VVdnWWoraG1GbjVrK0Z4eXU3OVFPZGhldjB3VVJ3T2Rrb25oT0Y0V2RpU2d5VXNnbXlROWduTkNpWmh0WXNTTUdYSmhjV1hISmVsSFBBYVlKMkVNVUdZYzdsU1Z5Mm1MUzZxbVZzUXhuc0lnM1o3Umc3S0N2ZEZsMVFlTEw3cGhJUm92R2RTTnpFWWxKaXVBb05CY3cwVVhCelZORGdzSDZ2T0VpVmRwV250cTVUWUd0Qlg2c0liMTl5b0pQUzF4RHRUTXE2UU1teG9tWjhQeUtXL2E5YXNXYjU4dWJUbjQyelBXNGFlM2ZqWTQxdUhuaG5hK1dyMmkvaFUzNlNKQS8wTCtpWk9IRGpxeU1YOUMvcG5IcGI5bVF5RDc3bXRFUlB0aXNqS1VEOEQvbzBiTjY1YXRVcDNSTC80eE9aL3Vld1Q3LzdZWjAvOTVjLzJFUGVTaW51cGtHemdYcWZET2Jxc2wxQ3ZHd2k5WVRKdlFHc2l4eXAxRlhlVHMyNE02RUlwazFadzI0TmoyM2R2YnRKdk5ySmZzai9QSEZ6ZGlRV0hlS0Y5TXFBajY1RER3RGhBTGs2THhMcHgybTVSVHNERHJULzJ2UHo4dG50dXpYNDU4WU1qU2Z2NndvbmljTEJUT2c2R3VhYloybUE0VEJZT04waDNoSVMxZnNMdE10NzJmRHlMaEk4OTg2T1BiTHpwd0p1TnBwdGpKMHcrN294ZkFtTW40YllvbXE4K1BTc0xGWVNSeUdpa2h6QXRLQ3N3THpxMlBKaVNrcVZnc05nemFRUkI5KzNaK2R6Mis3SUg1eC8vdm9sVFpwU0t3Y1Z2Smd3V1Vaa2xiUm9jbW85VnB3cS85S1Nyc05hK0F2NzFDUHFHTmZWVjBOY1M3Mnd2OUcxTktXejZvei80NWl2UFBDcnUyNVVyVjY1ZUxWK3NiTjNVQ0h6Mkg3dUg5MTIvOGI1cmJyOHo0MTdMTkUwa1hyL3A0UnlKbDU5NC9MS1RUbGg1K3RLTWgyTXZpWm9SV1JrREgzdUN2V0ZTeHZ3N2R1d3dPYUlmdXYwZmQyejl3WW9MTDVzeC85aWU1ZDVZazNPRTJKdkE0Unl2OU1iTHZPRUIwVUhFU3hhRVkzRzNZNndMaWFlcitMWWFYZUJrRDBMbUNkZzRGUmpiSGRTY0owTmladWRoYlpzcGxtbE5zTjN6OGdzM2Z1SGplZEwrcC8vMjM2Yk9uc2ZveGNQZGhlSElnbUdLTEV6S3plS3FGOWxHd2t5eVdaZER3c1hxY0NrNW1VVENBRk5uelAzRS83WDJQMzkwUi9iSXNXZjgwcFRwYzVEK1NVajhNdE90MGQ2Q3NMdUhzQ0FJTzRLeUxIblJoWm5aNUlzMllEQm5paDg2SG9PMTFzRnZ2djd6amQrNDdPMzkrN0xmbjk1NjUvSlAvZVdFS1llbFY0TWxtUmZCNEpFSGVMNmV2aGhjWWo0V3p5M1FKWlQ3SmtWZkdVeDdGbjFUWkZ6cDZNdEd6TStQL09BYjRwN3U2K3VUbWg2OWZZQTlzREVzN2ZucTIrKzY4cVoxR2Q4R1lITUd3OW5QeGRmZm1BRndoc0VYTGo4N1ZoYmV0clhCOEFPbnNTTVgyaWRzT3FKWHJWcWxaMFQvL1BrbmJ2NmZuM24zTC8vdXUzL2xzMTNqM2c2WW5HUEUzdDZCM2lReWIwZ25YaS9peGU4YWRCcDNvU1JUY1dlN0lsV2pHcDBoWkNvZXU5ZzRESXd0Vkd4M1VMdUVZZzhrTGtNaTFuaDQyejFTMHY2Mjc5MTY1cWUvb0s2cHhTeE5nV0ZHTEJ2MmgyR2lSNXFMMzd5ZXNqQWxOOHVyVkZnT3pUSTJVZ29tNFNSeFdaeFBtVEgzMUkvK2pxMS9rbDBRYnNOb3VZS3dNeWpMNkl0V3VWMzNSWHQwRDZhR1JWTmJCei83K0ErYjlOdmdnLzM3bnR0KzM2TFRWNlkzUlFOamF0RnZFNE81VUErTVlMQlNFbTNBNERMenNRRHFQWkowcFRVdXFwSFJWM2w1cWVnYjFOVFhKK05LUjkvbTR2L2ozLzVHK2JETjZMY0l2Z290K3QweTlPeXFhNi9ML28yL0RobmErV29HMHRsUFJzSVhmZXdqVVpwd0J2T2I3bTlnOE9MVDdQbFkvZjM5R3pac1dMOStmWWJCaUJSODI5ZUd0djVneGVDSUZOeWIzQXNXMzJ5bzJKdXdyTGNqMEJzbzg0WTMrQUVjWG1tQ3NIdXBBTjFoM1NTZ1d5RnVOZDRoZUV4aTR6Z3dqcWZpZUNTT2xZaHBQRXh5MmRDU3BTUExocWt3VERBOEt4N3BGTEl3eVNBdGx3cjdrVEEzQlhGNWtuQllYQmFsU05pWkdvMkJaVm1Dc0U5UUZzVVhIVkFlTENSSEVjT2kxWjVKWmd6V0wzd2djVzF3dnFvSUJyTVc3WTZJeEFVR1M5MlNKRlNPYnhwTXo4ZHF6cVFtY1p2aVpCNTVRUFU4QXo2bE9oL0lUejhvSmhHbmJFL1htbG56bjlianRkWkxhK28wQlJFWEljOGprN2NleXA4WmVUUkhtdFpNUmtydzVmVlgxb0lWSzlEZTM3VmlzY1ZrK2RLRWFaV0ZGdnRCMmJ2aURtcnY0OVorcWhYN3ZJM3pqY1h2MlBwOXhmdzhPRGk0Y3VYS2duN3Z2U3VBZmpOWVhYTHBaVW5vVnlIaGk2Ky84YWcvdXVTOHIxeVRtNlZEUm1PNzdtUVAzZStzWjg1MnhZNGRPN0o5b2ovMTZuUC9lZE5mL3ZaRHQvMmplQmlRczdjbUhCQW1IQkdRSndQaFBHdS9vUDBEOHVuZHVtL1Mrb2N3c1dFRjlOY0tQL0lyQzdKVE5oTi9pV3MrSUozbXlHcW8xMERGdXJ2bkxFMEM1cGVibDJKaFczUmpUZE9ncTlwZVJYMmxiS3RrT0thT3pxam9USndsd1k3NWcyTWlvTXlrR3RWd2p4UFAvZlZ4azZjMmY4OSt5ZjUwdm1UUFM4Ly94L1ZYWnovWkw5MWtZL2U3SU9oOXhEemY3RjRyYVpxUDZhWDU4OVlQT3E5UFJjSUhHa1BXU3AyNThBVmpXcUJ0VlEzYnJyMWMrakowZlRHWnZsTEZiMVZRdnc4STM5SEZ0em80cnpId2I4ZjhJSm9tMXIvNTBlK2ovTUtrZlkzZHZPeFU1QUV4alVlNWJwY3ZoTVJqRGVwbERJQnlzSXFyZDJXRzhrYmsxMlBDRmJweVVhVWNDSEZueVpjM3l2YUlTSk5mdlV1TTBsNjZ3aHJDWlpCNFlhYk9CRVFHQVFGOGF0SmloTTBVZHlnVUtwMnkxUklwS0pka0k5Z0JUTmwrTUZ3L2lVaWpyS3RJSnpXSlU5b0xMYmFpQnFDdU95dU9zc0JEYmJxcmlTZEFMUTg0THFZUjk0NjBKMVRSQXJtRzEwOWRXVUhWeGRmbWxIVkVLWW9zOXcwT2VRYVF6enVHWkNOanFpOHp4RU1UbXh2NXFiNEptdm9hTTY3MFRzSU5OWFQvOE1OM2ZVM2N6MzE5Zld2V3JHbjk4Y3hURGJIVWY2eTY5cnJyTjk2SFBqViswcnlwMDArZU9QV1lNV01tWkw4WHV1eitYUWYyNzhyK2ZXdjRoZXhuZU0rVDlrVTAzZEZOUVhodytmdjZKazBNNHVtbjJBdlBPUjNSVFVONDB4R3RoMk05OUcvWERXMitkOFh2Zk9tdytjZDFTdS8xQ0xWS1luS09FbnM3ci9TbWtua3BzaTJlWHhVazhDWlJkMFBjMnBXaVc0MGVIVlBuSEhIQjErNmdOMUlxSlhlNk03b3h0MC9CS1UvR0NzVW1sZGhUSXFaYXBpMzZNQkRDeElCVzBHdHdTc2VXRFV0eUtaVGhrVGJJd3R4d21NQmhrS2IwVWpMR1I3dmMwYzUrd3B3cEtwa2dLenVDbzBsRndtMGh6cElhYmJCR0J3akNTQS9oY0YrMGtoZGRsQWRMamdPNWJaSllIdXlYa3FXSFJWdDZKaFZDTWFJR0crcTJraWRGRjd0UUUycWxDT2kyM051V2htVTEyTll0S1NRZmkxQVlYTzl3dVM4ZThveTA5bFZxZWtub3E4TjFUNkN2SmQ1Wm5iZTgrSkhYL2ZSSDMxYVNud3Z6Y3hEOTdoN2VkOTVYcjFFU25wdGowdFJqWnM0L04vc1hmZUVoNDZablA0M2ZacllleVJqNGpWMlBaUDltUEd3WGhLKzhhZDNxajMza29vOStPQVNEbTQ3b2pJUmRyWktXTDErK2VmUG1aamdXSWdWZmVjRlpuL3FUVXo3MFc3M0t2U2xNenE3cERmQThlcUhYTjduS2NlVFRFMjh5M0MydC9XODFxaEhOd1BUczZLN2xUcGNFeGgyajRrZ2tEck5NV3lpWCs5Wm8wQXA2VFRETUVLdXpEWWJMOWtqYnFvVkREZExkSldISURhZ0VFaTdWR20zT3lxSlhDTXM5aExuRUpzemJGeDFYSHF5bFpDbmJiUXlMTnZkTXlwM1JWZ3hXM244ZzNQd0t4MkE1bDB2RTRMd0FtSURCY29Oa1Y3ZWs2SHdzdkRDNDNqSDBaWVNRWjcyMXIxbzlURU5mQ1o1RG1odjVvQys1cWErajBCYzdCTU92di9MSXZmK2lNRjdML1B6UUNCUDYwKytLSzY3U2JjOFoyYzQ3NW53VCtwcEdObjN6SlcvdjM3Vm4xeU83ZHo1b0l1RnN1VmY4Njdyc1ozRDUreTcvamZOQ3lvT2JyWkpPWE56NE1ZK21QUDd4ajM4Y2xZTHYvOFpmNzloeTd3ZCs1L0twaHgyT2ZEVjJtSHRKeGIxSnhGNWFXVy9QUWkrNVQ1STd1WW9wYVhhME5Ta0RkeXZXclVZMURvS1Jsb3JMUUdJdmlUaVFoNjJkQlp4SldzbGdtT1BmZWdFd25Gd1dGdUVXeUNUTUxGMkZBMGpZMWtYSmo0UkpSY0xXL2tsY3h0MTRRUmp2SWV3SXl2SnJJSnlxUEpnYUZpMWhzSlNTUmNCZ3pQdFdVNUtpUXpCWTJ0c0ZCcmVla0RDWWExdFBhQnBNallsT1VCaGN5KzhNaEpYNzVsT0tKUXZxbEFEN2gzYzk4OGlkUTQvY3VYL2ZyZ0ljYyt0NjIxRXUxdlF5MVprdkpWM1YxREpleUgzNUl3N3pva3BBbkVpeHlGTnJmZVZwaTFwZjJad3ZGSnlJWG55NUdyaHRoV2VLdTEwei9UY2ZVT2lYalRUK0RhYmZiSnozMVd0MCt1MmJlZnJDVXk3MXBWK0ZuMmZNWFpiTkpQdko1amFtUHNFMDVmVWI3enZxank1WmRlMTFsbjVMVnZsZ2F3T0RkNzVzbjZvcEJhczlva2JHaTQvLytLWXJQcjFqODBheFJDUzZ2cGM1NjN0RGkzdkZpbHhDWmE5N0p1YXlYdjF1WVlLYVhrck5zSUU1QTRyV1RGUGFHSmxRd1d1NUpDV1c4L25WR1pxZnFlaTNHdFVZRlZTYzZpM1B5SjgveEpXaHZSd3ZJVllqSW1nWkJNN05vUlQwbW1xR0dhR3kxNjlnV0M2Wjlnck9FQzlKd1RDOW8xUll2bHBnekYwcXpJb3JUcUJNS2RXbUVxNVZBb3FFcFdKWDVHckhXQ0VzbFd4YUs0VGw2M3BwNzRFS0JZekpWM2ZDaVFFQW9KYm5Ja2xHclJXdUNWV3hvRjVPeVJ1clU0T0tJKzBOckVtVjBWSVJzbnlvNUJyaG9qbzNMeEJXYW9OUlo2TzhSR0VPZUcyd3VrUHkybUFoVGhqRVRjZ2ZyWUZRankwaGxmUmJyWjFlUExJQ0JmeUlOYktLa3BxdU1MaU9DTCtweTMzZkduNXQweDEvOVlzRGIyWVBQUGZUZTgvNDJCZkhUejZNM3Q5SVZsTVZRYmRIVkY5a2ZmMVZYOG41blAzL3RaZWVmbnJMOThUZFBqZzRPREF3RUV5L0dYYnF6dWM1L2VkbDdKcnFlMy84cEhuempqbi92Mzd4NWh1dlBmTHpuOTFyRW9RekRGNi82ZUZBVTNRekhPdllFeHBTc0xsZGNDNEZuM2ZlZVVwQTlQNTliOXp4dC8vblVVdVhmK0IzcnhnM2NZcXkvenVrOTlxTGUwa201NGpLWHFmWVc0YlNHK3h0QnRwa2pKYnV6R3poMjY0MWpHOFhsTFFEY0RXcVVZMVJSTVg2NEs3bjZDb3hVU0lHdzl3b2xtbDcvYkFDbGs0MUZkMldHR1hZdDdVU1hqRHNLUXVqN1pGSUJtbTBWRmpxcGVRWkgwM1hoQXNSbFprMFlTNUtxMHdQanZickpNekVCM2hSak1wQ0JXRThNbHBRMUxsc2drVUVZWWN2V2k0UFpwSUtXVlRGTWk1ZVhibTZCM3VFUmVzOWsweXRnMDFxTUpZQ2pUWk1zcWpCSUJ4aVdRM203ZE5UVW9OSHhISnowK0QyVHBhNkpkVXNNZEZOdVZ5b05VOWFHRnhMbWJLRmhUeG52NzIwNDhFbS9XWWorK1ZuVDI5Q1FwNXJvTjErZ0lLS1c3S3VtaThtcXM1Rm1MTittOFdoK3JKbzFWZFNxUmxGOVcwdVc4eFAweUxzZm53bmxuMFZTcjlYMzM2WG5ucVZ3V3BDK3MzSG1QcUVwcXJjZjlMbnAwdy9HY2ZZRVZQMFVaKzc1TXFiMW9jczQ0bnRSQ2w0eDQ0ZFJXSzJNSFk4dlBGZnYzVCtpei85c1hwVGtMR3U2YjJVSkdmeTNlZ29zWmV4OUVxdlc1cndsM214ckdiU2RTaEZaZ2tXZUpOTFBkV29SalVPVmlyMi9mU0FVSXVLMTJlWCtiWEt0eCsrQWtsaXBXT1VZZkJSaGswenA4akM3Z2ZsTDNUaTkxMnV6OGp4MGZMM3ZyS1hrbXJDK3NXTWVEV3JRUUZvc3EyNFJJb2dYR2kyY1lLd3NPdGtIeXVlRncwZWVkSDVFMEwzRUVWaUZsQkNqU0szaEVXM1oxeEQrdVpvMEVGVWd3MGxZQXB5a05SZzNFN2JUb0tXbTh2bVdkcGdWSVB6M1VDT2lRWWxLQml4TFVPQWJibW1YQkZhWHF5YU9rd0IwekozanJRMDBnNkRFTEZ0N20vRWxQNUdFb2d5eGhRWkhSaU92Z0F1OUpYSXVrUG9xNStIQXZwbUMzemxtVWRmSG5wRTNHZXJWNi91ZS9LeE1QcmRNdlRzeGRmZnFOTnZocW5vOU9NbWpaMDZjM0wyTS9lNG1UUDdwMCtkTlRuN21kUTN3WGU1azZZZXMyRFJaNDliK2lYVGdsb1kvRWVYbUNLcGJXTjRiME1LM3JySlBsVmZYOSs2a1ZHMFRXNlBOMTU5Y2YxVnY3OXAvZjlTdk5BeTk3SlN1QmNqVEtuUkFndjh1alVidVYzUWF3THA4cUNYNkcyMk5DaWl0Q1pDMnlBRlh5L2FMa0FyM0sxR05hclJNU1IyM29Bcmg0Y1JZY2s2STUrN21SMkVZUitQdE54UkNkeWRrd2dHYVdJdkpRTUpreG9wTVZCWWowTENxQWFReEJxdE5lVlNXeFlKRjlneTdrclhadW9oOXUrY3BNQTEyUmZ0M3paSjNGTEVXVjBxQnF0dklEQTJURkl3bUhsanNMS2YxVzVKclJmWXVpVkpyV3JsWTVPL1ZxSGVzT3BkOFFLN0xwazBxWjVuTlpwS2ZJbWVkS1YvWGlxZTU0aitScUE1bDdXTmFSK2MvR05FV0EvcHpnQXJ3ZkJzaVhmVzlwazRQM2o4My85Tm9iaUx6bnAzR1AwMllwKy9jbzN5NEt6NTUrcFFPck4vMnJURER6MTAxdVF4aDR4aGVnWlpNNWRyOTV2N2RyK1ovYnZubFRlR1gzdVRzZ0xOaEsxc2lhODg5OTNkT3gvVUp4amErZXFxYTYrN1llTVBMLy9rZWN0UE90NWJDdDc1TW52M2UrMEIwU3RYcmh3WUdGaTFhdFhHalJ1VnB4NWM5NzllZVB6SDUveitsVk9heVZoNlFuQzh6OWxxVWZaTWNvNkljUWFmaUN6MGhXSDI1a2h2TTlpV2JGdzZNTWM2czNoTGM0cXVTTldvUmpXcTRmWDV3NjFQRUYzVFZzOHp2bWhPZXFHU04wdHRubVRNbmJLdWViQk5Pa0dPdEdLUVpnWXZ0TU1nN1FqTlV1WXZlYUlGaTdKK2dPVHNhTTFHYko3U0t6aWFhSTIyWjJYcHpaT0t4a0xreUdpdm9DeGlYclNoYlpMVThjZ3pKUXNMaTVhU3A1alVNMGtPTG1ZK3BtajB0aFRlTUtrWkROWGV3YTBsdDFBNk4wVnpBVjFrVTdRUWZCWGNMY21lajlWT3crWmNqY05pSUZxa0MvdStrc0NWVHltZXBYVWs1em11dTY4YzRJejZaNlQ3TTR5NVE1N2ZVZWpiZ016WFgzN3U4WDhYZDlycUQ2L28yLzN6c0cvUEsyOWFweVJPVFpsKzhzd2p6aFVmT2VMRTJYT09uVmtmT3liZlNuMkZtNXMyYWZyRTdHZld5QU8vZVB1L2RqMy9la2JDdTU3Zi9Zc0QveFdKd1JzZmUzempZMWNOTG4vZm1zRlAreFVHNzk1RkNZanU3Ky9mc0dIRGxWZGVlY1VWVnloUHZiRDlvVy8reGFmTytZTXJqejUxUlRuY1N3aHo5azl5VGxQWkcxelcyOHZRNjdpZ0RJdFpybkMzR3RXb1J1OGhNWGM5QVdYek1OaFcwd1RERmg0dUNZWTV6citHeGRHcmhjM3RsTUNWQ0sybUszdVRzTEZPV08raUpHS1JTTUttS1gyTGhIMVRvM051WVNJWFk4MlQwQXBoQmFvNVowcm5KR1VydUwyQmNIQjVzTlk5MkRzc1d1K1psQUtEOWJjS2dLMXZzRkFRakdLd2VEc0F4MkJtYXhyc2lJbHViMFR4Vy9hZi8rYUFGQWJ6ZGllbDJNTGdXbUM1TDJOb3VXOHUvQ3FxUHZxWlJRaDVCb2xGRlpVY1FLVmY5YUcyWmNSaWVBYkFEYzhzM1BBc0tmS2E0VmtQb3lzOEEyMmZ3MDgyZkYzY1d4a05YdlRSRDRkOVVXWlVlZlh0ZDZrZ3V2RDgvTStwTXljditlZ0pSNXcwcHo1dWpLRkdRdlp5QzAvWHg5Wm5IVDNqbURQN1QvL2traE9XSFRQcmFIZHpveVlHSDdmMFM2YlE2VVpNOU9jdVVkYVpOTFp0WmZmZXhmYnR0VTkxK2VXWGI5NjhPWU5oNWZIOSs5NzR6cG8vK2VFLy8xVlNuN05QbUxPOXVKZGljdFp2d21NMko2VGVPTXpoakY3dnBDcm9UUlhYVE5GNFN6SWNWcU1hMWFoR1ozaVlWSlRoOHdubTVaZlduekJWRHR0aXBUdGdrM1o1cEJrTHFSWW1HYVFkcVI4c0lENWEzTlZvbmJDNlc1VHlXUUFXVkNSc3Z5S2lXS1BseGNsbkJUa3lHblZaRzN6Um11SFo3b3VPS3c5T0VCYXRoQ3VGbUtMUjRpODFLVm8zUmNzWlRPMGxGNlpva0lSSUJibWsrdGF3bUdpb0NSSFFzWVhCRGtkMFRYOUlSa3ByaXlPdDNGZklrV3BidVd0NkZqYzk2VXJ0YjhUTS9ZM2toNHJpOUVEMGhiTFFGeXZYbGo2MWhuZS84dFRtZThRZHR2cGpIL0dPU202UFZkZGVwenl5WU5Gbjh6WkYvUU9IbjdoODRiakpZNWxhYWlHOCtXdmF4NHA2d2pYK25qNS8yckh2UGVxTTMxaWEvVHRwMmtRbkJ2ZWY5UG5zQjhYZzNjUDdMcjcreGlXWFhxWm5WanZHenBmWTNiZXhaeHhHOFlHQmdZeUJCd2NIOWFlMmZ2ZkdiL3o1Yjc3eDZzKzZ3TDN1V0N5dlJDc1hSZVBjNjEvVzZ3dTlYZ1c5NkhLRG0yb1lWOXQ2WVZpVjcxYWpHdFVZMVVocy95eUw1MkgvajJJMVJxczhHRGJ1RnNDcVNaM0xjbjRsR1hLejdLWEM4clpFa0RCNnJlTGlXOCs0TExzMklFa21wcXdzZS9Na3JFSllZR1VOZHkxQldVSmFsVnJuclBieUFibGVWN3NTOXNWZ0pVS204eGhzNEYrbFV0ZUZ3VXpCWUFScHhLZ2xRcmNrZXo2VzhyaFdHRnhqenNKZ2NxdWtHb3ErSUYyTmFudGNWMTFySUhYM2xmWUtJSjVIWXRLVkdQSWNoTDVvMjJBbTN2V3hvUzhyQ1gxYnUwdEQzK1owVDIrNVIva2t2M0Q1KzhLK0JLKzhhYjFpZnA0MS85enhrK1psdjlRUEdaT2g3NXpqWmhydmU5WGt0c2tNVGZtV2tSZ3lzcTNQWGpoenlTKy82K1FQbnpCN29VTVF6dWczWStCNXg1eWY4YkQrN0phaFoxZGNjVlZHd2hrUGUyenoyd2ZZcHZzYldkblpMK2JSMTllM2RtVG95Vml2UHZQVGIvelpieno5MElaT2N5OTI3MWxOY3FZbldvV0p2WFNNSkFaNE9FT3FLZEJMa1hrcDBDdk9qVTY4MWFoR05hcHhFUEl3UzhQRHhNVjFDNFo5MHJNOFpHRkdsNFVaZ0hOdTZKZDBBQWxEUEFralV6SlpPcloyRWs0bENNdUlDRWhRRmxDRHNoZ2o1RVV6VjE0MFBTVkx3V0FoTEZwdnpsRWVCcHZlbUNBcGNEVWNnelVKT1ArMWFJcENhaHFNeGtUYjhyRUF6OGNTZHFPelk3Q3FEY3ZuajNBMjFtSmFIQUZJWVZlQ2M3bElCa09FK1B3TXFvSFkzVmZSdjVuZUsxblBId1BzMUFNMWNobEhYM0NpcnloTnAwUmY5VjBuSDdudEQwaHRnUWFYdjY5LzVtRUJYM2taTjE1OSs1Mks3dG9zL1czUTc0cUZVMmROb2J1ZHNaUnYrYjBIMHVmc29YT21IbnZXd3RNK01iQmc0SWhXYWJHSlJVY2FKbVZramo1NzllMTNIZlc1UzladmV0aHY0NGVlYWxRRjc5NWxuMnB3Y0hEejVzMk4xc3J5YU5paC8zcjFmZi8wVmZFSUVmS2MwM012U2V4bExnZ1BFM3NkcXFraDVkSUp2Y3dmZXNOa1hyQTY5Q3JpclVZMXFsSHhNTGcrTkNrZnhmVEZ1VzVacG9SaCtyZEdnQ3djWXBBZUhTUU1PZ25IcDBiN0M4SjRaRFJnZ3JDQ3UyUmZ0SlFYVFcyYkpCMTBZbGkwcldkU2FSaXNtMjl6a2hjdjEzRU1WdThzWUJnY0hoTmRVekZZUUZtZE1rQTNlRFBFRWMzOEhkRTFjZDhJVi9LQWgxMnByWFdWSmtOTWhQNENjWFcvVEUwWFoyWDBCYlcvRVNpT2MwZHJYMkFNT1R2RDBCYzZnTDd0cytmcHpYY2ZlR3RZM0ZjWGZld2pZZDl4dW5ZNjc1anoyL1I3ek1TK2ljRnVaeW1ISCtRUFZpWjlsSXlmTXU3SWdYbW4vZnFTSXhzWVhEZXQ2cGo2aEl6TVRZWEJ6UlRyN01kUENoN2UyMkRnSjdiYnArcnY3ODhZZVBYcTFZZ0VmY2MvLzh1ZmZYTC9tM3R4eHNQQmxjNjlFTXU5WkpOemxOZ2I3bkJPRGIxT21kZm8rdE9tcTRpM0d0V29SalVjbjV3UjdwZ1U0bkFJREJ0di9acS9VQUpsWWF0QjJrSEM0TzRxM0JVU1ppRkZ3c0lXWVYvb0Jmb2tGSVJ0blpNaWZOSDI4bUF6QmdNZ0dBeEdER1lkd1dBMGNGU2lrZ2dNOW0wYTNKaWhjUFdsWUhDeDA1MkZ3WWFPd2FwY2pHT3c2b2l1c1VTZTV4RTVXVldHbWVuQ1YvY2x1NUt1ME5hK1RJQlNPZWxLUFNPRmswa0sxdW9WOUcyZi9VODlMUG1mbDU5MC9FRC9nb0J2dEtHZHJ5cWRkVE8yekg2YTlEdHAyZ1N0KzVtMzIxbmFMWWlacERoLzZ1UHFDNVljY2Rvbmx4eTVaTDRGZzV1RndRc1dmUloxUksvZjlQQlJuL052Rjd4MVV5TVp5MnFIenNhYU5XdlFSc0d2RHYzMGhpOTg1SVh0bSt4Zk5rSGN5Mks1MTZObmI0VFlHM1QzUGREZW5Fem1WUjZ0R0xjYTFhaEdOVXJqWVRzR2UzMkFwNFRoVkI1cFVBaUtrSnRsTFJYV1NEWU5DVE15Q2FzWG80N0xqRUJyZEltQ01DRW95NG5Cek1jWFRVL0pFczhXRElPaFl4aU1uT2thRFlvWXpEUU1CaFdES1UyRDhYd3NGcEdQbGMvRjNERlkyRitJK0d0eVJOZThQYzgxMFJJc3k3ZUNNcXdYVW91akJtaTVyeTNwQ3BIRjdTSFBadlNWcXNEMVU5K0t2dEpPVElxKzJmeUhkNy95MG82ZmlEdnF3dVZuaDMyRlhmbXY2NVJIbXZMdm92YzFFNnI4Q24yRmp5VEU3U3pmTnNOdm5lUVlmUHB2TEQxeXFRMkRwMHcvMmVTSTNqMjhiOVcxMTYyNDRpcWxzTmt4ZHI3RXZuTnJvMWV3ZGF4Y3VSSzNRdysvY2V1VnYvUGd6Zi9RZTl4cjhsT25GWHRIQmZRR1haeFZveHJWcUVZMTZEeHNlcFR5TVZzQ0RBZmxVTVRJd3Y0R2FYU2VxVWhZZWIybExFdVpzeDRjWFlZMXVneEJtQjZVWmNxTGppa1AxbEt5S0dIUklBWHVDcS92QUFaTFo3RzA2bEl2V2dWM2Nnd0dvV21zWXZtMngwUjc1bVBsYzFNS2c1RVFaeVg3cW1aeVJET0tJN3BHOHp5Yld4eTFQYzlhV1M4VFhBdTZBTXl3Y3QvQXBDc1ZmY1U3RU9wSm85N3dVTkZYaDJNWmZjWFM0b1RvMi94VHFmN3RtelJ4TUNqK1NwZC8rMmFlM3RCWGx4d3hVdmZyS3ZRTmNqdEwvYkd3ejYvbUxETU1QbkxKL05OL3M0SEJwdlZ2T3FJekRFWWQwUnNmZTN6SnBaZjU5VWw2K3dDNzk4NUdueVRyc05paGYzVFQzOS8rMVQvZXYrK05UbkN2UGRRcTB1UWNJL1oyQzNyZGlvUmxzbXBVb3hyVnFFYlo0ckJ6c3ZRdzNHbFoyR3FRZGx3TUFIUEdSM3VUTURoSjJKelRvVnkvSmJGR00wSldsbzhnakZ5OXBQWkZlNVFIWXlsWm9XSFJuY0JnL1QwbFRDY0NJVGd4T0Q0bVdnVktwREFZOU1MZ0hHWGxMWmF6cnlJYzBUVW1BS2paODh6OFBNOXFkMS85czhWUTdodWFkRVhxYnlRSG9KblF0L0RPZHhCOW0rdjA1SS92RnZmU1lHajQ4dzJhVDNqVy9IT256enQwYmlQejJWSG9HK2wyWnBpRFJROGZyNDgvNU1oVEY1eitxWGZQT1c2MmFTdkdUNXJYZjlMbjUvU2ZsemR0RXFYZ2k2Ky8wYnNxT0FQZ0J6WUUyNkdmM3ZUOWIzengxMTk5NXFjRTdtVlIzT3VhT2RYazdDdjIwdTZkZHdGNktUSnZSYnpWcUVZMXF0RVZIclkva1NyY3dYby9OeGtNVzlZUS80WWlsZ3A3aEdaMWdvU0pSY0xNcXZUR1oyVlpCV0ZOYlBEeFJiTWdYN1IwZlNOZjRSTlRzbm9HZy9GenVhQmVJd2J2Mi9QcXRuKy9lZHNETisvYnM1UFFOSmdVRXgxV0dDd0FuT1NJQm1admxhUTdvaG5xaUs1Smp5ZnpQRXVQYTlZWm4zSmZlOUtWSmVRWlE5OGlJdHlNdnRJZEtTdjZNcFlNZmJQL1BiZjlnUU52N1JWM1ZGajhsUjcrM0RmejlBbFRaaTQ4ODBnUmZSbHp1WjF4OUNXNW5mRVBMNlprQU1DRUtlTVhMVHQyOFMrZjNIZjRvYWJObVRGM21Va0tibFlGK3dWRXYvZ2NKUjE2NWNxVkd6WnMwTzNRZTE1NTRkYkxCN2R2WEcvMkkvbm5XdEc0MTFIY20wVHNaU1N4dDN2UXl5cm9yVVkxcWxHTlVZakkvdkgrbEM4SVlzRXdjOTNuWlN3aENiTlNTWmgxaElRVkxqV1JzS3lBT0NZalZBaEx5cE5kRUZidzFaVVhIWUxCeHBRc01nWkRkekJZb2puRDViZUt3ZTJWMy9mNnpydXYvK0syKzIvYTlzQk5kOS93cDAwR05qWU5KdWRqTVRCVXRsb0xnMDJ0a3BpM0l4clBpSzZwTjJiMG5HZUM1MW4xVHhlUEd6N0psRGd2Uzdrdm5uVGxHZklzb0s5NGZvQ3NDL3VpYjFFc0hJZSt6ZlY3ZHR1L2kzdG9vSDlCV1BlakRBZ1ZYWFRXL0hNWG5uRmtmV3c5dHREWDArMnNmbTNVOEpxVGpINFgvOG9waTVZZk4zN0tlSFNMbXVGWUppbllPeUM2bVE3OXpGUDJxVEw2elJoNGNIQlFlWHovOEJ0My85MWYvR0R0bHgyODZ1RnpKbkV2QytiZXNNcGVvc081TTlBYjUyMCs4ZHhmSHpkNWF2UDM3SmZzeitxeXRCclZxTjRkMWVnaytYckRzTzhYaHdXR3cyUmhpa0hhVHNKb3FiQnZmTFNpSmtBNENXTVVIV2VOSm1abGtTdUU3VDJFWTN6UlNjdURRZlB1dW5zbWRRU0Q1Y0piL0kwallURFRhb0tISHJ2MzdmMnRUalRaTDltZnhKaG9lejRXWVBsWWZoMkRUYTJTSEk3b1FncldIZEYxdVNCQlJkLzh6ZEQ2WFZSOWhSc0FxdXFydkV4dlJpV2NQZWpDcFNtWldPc3JyNDhVaVNYY0VNZ25sS0xBcFpncmRRcHhpNlMyVWFMU0syMjBIRkVHNHFjNmsyK1FDRzhQOFpYRnl3Kzh0ZmZKSDB0RnJjSGRqNVQ0cXluVFQ1NHgvOGdaUi9ReGVZL3BteVM4SVpTakpqeW0zMXZTQWd5MDd3bDlMa3gvK2R6alo4ODgrckRuZi9MQzBFUFBvTnMxWSs2eXFkTlBmdUhKcncvdmVWSm4vaTJYWHJiMmM3KzMvS1RqcWJ0cDAvMk5jS3pGcDdGRHhwb202ZXZyVzd0MjdlTEZpeSsrK0dMbHFTMjMvZE9yUTQ5LzdFLy9kdHlrcWVJV1NXY09NM3h4SWs4QnM3d096SE5qekZaRFpaNi9lbnpsWDRIUkZtUVAvN1JmR3prZlNxZnVUcDF6eEFWZnUyUGJkMjl1WHU1bmYxWlhwOVdvUnZYdXFFYm5ZRGdmM1BBUU1vM2hDNFZ6OS96ejZZV0p4UzluM3ZwLy9zM0lrZFhtNGpjang5Y05YVEVRVmlhL0ptZy95OFZua1JVQTI5eUtLeXhodzRyNThQeS82aVBOWC9NWDU1dkJ6WHVBNTFjRGZHUTJ4Vy9JZmhabUNPM2xjbVV5THEzZXlHT2NjK0ZaYWEyRnhjSEl2TnBiTE93Q0xzMjh1S3psMG9uRmhRM2tyWXRjM3R3SHplbEhYc3YxK2ZEOE5CbFpIYzdWTlcrdlpuNXgyNXdwSytiWG5vZDRxZDE2YWJHNEpyODBIdWJ0OVFmZzdTVTJnYUk0UDFwcnk0UUZ5UzhmbVpaelFHNFo1Y3RzYjlISVlyTFg4ZGJyVUFGbFpQODNwbW1kUWpDeUJUem5CUzZ0V0d1SE4yWUhMSit3ZFRaeFhxd2ZBT2ZDRG0zdXp1eWh4dTdNZDI1cldZMUplSHRmdzhpTzV1MXp1cjNjL1BIR1E0M1ZhRzVXYldUZGVYdjdlUHM1c1E4d3FOVzg3ZVBsNzNuV3FuS1JuVm9EQnJSeVgvK2txNXlSTGYyTm1KNTBwVWVFYWVaNHhkNVEzSkVMVlgxejVsZmszMnlzUEcxcHdCZk54c2NlVnhLU00yNDg5c3dqa1l3cmQ2RnZTcmV6NlE2aXVLdnFZK3Y5cHgxNTVnV245eDNlaDI2ZFJRck90bnJGRlZkZGVkTjZqNTAxOUZTalE5Syt2ZmFwVnE5ZXZYbnpacjBrK1BsSEgveVhTMzV0NTlEamdUNW43UFl0TmRTS1V0enJlWjhiRjN1OUhNNXBsZDdVVi9sbkRxN09mcXJyKzJwVW8zcDNWQ1B0OFBBUmRFd1p0azVzbG9XVEdxVHRvVm5FUmtyNHBvbU80aVRCMFZack5ERTFtbmxYQ09NOWhJT0RzdVRma1VNY21wS2xYTk9TZXlaMVJRMEdYWXBxYjVGVzlGcVREYkNtTjVWWFREU1dqK1ZSR0V4c2xSVG5pRzZ1U2sxa1FnQkZuSzRGZXA2VnRrMzZ6cVNYKzRLMTNCZEx1cktGUFB1MDlzWFJseVZHMytaU24zM3Nmb1YrK3laTkRQZ2V1bUhqRHhWaVBQNnNzOGROSHFkOFlORFFON1hiV2Y2U3dJa1JZUHpVQ1FNckZ4Ly9nVVgxY1hpckpFdFY4QlgvdW03SnBaZDVORW5hdll2ZGZWdWpNTmc2QmdZR2R1ellnWmNFWC9hWjdSdldwNnJ2TlV4di9uNjFjUzg1eGptVnc3bkhvTGNhMWFoR05hclJtWHNvRjN6dGp2Y01YcHo5Wkw5UTc2U1VDc01XajdRK2xYREYzakdEZEFvU0JtOFNUbXFOVnJqYXIwS1lJVHl2WFdwU2c3S29HQXlCM1lPUnNPamV3R0JteG1ERWo4bVVic2I1MHNXOW9iN0swaTBKejhlS0xBeTJ0VXJ5ZGtRenN5TzZhWmZPM2QwZU9jOU16SG11Q1NscElFVlFxMitQL0daQ0FhUklkMThCUWhsYTdtdFB1cktIUEpQUmwrSG9Xek9qcjNTVXFPaWIvZi90dDRhZmZld0JjUmQ5L1BSVEE3NkVkZy92VXhLaFpoLzVnYm1MWnVzN1dVWGZWSVcrTmNLSEkvcFpvSDNxelQxaHpudCsrOHc1eDg5QnQ3UXBCYU85Z3JjTVBac3g4UFZhRHJaeHZIMmdFUTN0NnBEVTE5ZUhka2hxbEFUL3paLzk0Qit2d2l0eU84Kzl3VEhPRnJFMzhyS2pndDVxVktNYTFUallHVGpLUjVBUWhtMWZsTGJ2TDZNc0hOeFlPQUVKc3c2UWNIQldWbFNGc0ZFUU5nUmxNU3dvUzhaZzBMdVFrTXVEdlZPeWFoaHJkQXFEaGUzQ01aamg5YjlxT0xIY3c4WDAzdFM2SlRHWnFNb3NESmJMcmFXTWFLRlZFaWdscVhJYnBDSWptZ21kaXJNSmFtckZyNGpSb1o1bnBjVVJwakRaUE05dDlHV0tXQnlWZEdYdWI4UVU0SllsZWdSOW1RRjlRWXovSTZGdjgrVUsvYkpRLzdNZWYzWEMyYjlTSDFkM1oxeXA3MXRiVzZNa2JtZjhNeDJrMTJkcmZzSUhqMTl5M3NENHFYZzRWck5YOFBoSjgvUWJBYXV1dlM3NzhVakdJbmRJV3J0MnJXNkgzdnp0RzI3NWk4OWtNRXpwM3h2THZlRFB2WlFZWitjVmhsK25pZ3A2cTFHTmFsU2pHaVhEY09UOVdhc3NIT2FyU2tyQ21JZVpSc0t5QW1IcVdPRnBqV2EwckN5R0lhNThkZW13VDd0ODBkS1ZQRmtROWt2Sjh1eVoxRWtNQmhjR2d4Rm94WDFiVXpHNEJ1ZzdSdFd1WkxsUnpjY0M1WEpmbHAyVmpzRktzeWw3cXlTYUkxcURVY1YwV2ppaWE0andLMFJ5eVFJdjFmTXNIaXpCTFNEc1VXYnpQRFBHWE9XK1lDMzNGWnNRaDRROE85QVhYT2dyV3RpdDZOdWMvOCtlM3FyUWI1ai8rVnNQL2xqODg3QjU3NWwvVWorQ3ZveUd2dWk3TVpYYldmMXNZdkl1SzNabTN4SFRUdnZVYVVjTTREZVZHNzJDVC96OGpMbkw5S2V1MzNqZmtrc3YyekwwTEhYM3ZmaGNveVRZMVNGcGNIQnd3NFlOL2YzOXl1UFBQL3BneHNBN2QyejN5SE1PNDE1bXZ6dkxva3pPWWJmVndjakJGZlJXb3hyVnFFWTFTb0Jod3EzVk9GbllUTUlRV0NvY1Q4Smc4TTFwSkl3RlIwZGJvNk9hSnhrRVlSeURtZDBYclluUDNoaE02QjRNbVBMWGZReG1WQXhHd0JjMFVFSXdXRG1sNVBCa3Fma3J5QkFhVUJqczFTb3B5QkVOUlEydjJpNjRob1JkeVNYQlRHbXhMSG1oRFo1bk1ZMGFVTm5KMnVMSVhlNEx0bkpmS2VsS2NmbUNldllpNk11UWhsZSs2TXRJNk52Y1Ywb0JjSmovZVdqbnE0ci9lZEY3UDFnZk82YjRsQUF3b1M4eDQwcjdFQTl5TzJ2b0pYMWVZcC9zOWZIMVk5OS83SkpQTEVHbDRESDFDWFA2ejF1dzZMTm9NbGJHd0ZmZmZoZDFKMmIwbXpId3pwZnRVdzBNREd6ZXZGa3ZDYzdvOTVZLy84enpqendZMHNjb2xuc0p4YjFoSm1mbmRVTWw5bGFqR3RXb1JqVTZCc01CWHoxeHNyQmZZK0ZJRW1hZUpFeHFvVlN5TlZya1BkZGxvWHBKbE1RWEhWOGVURW5KMG4yUkhjUmdwdlY5VlRGWTIyYjgyZzV0R3B4anNQYnVFUEt4bEVaQ0tRcUQwem1pR1dNMFIzUVJqbFZ6aDEzcG51Zm1ScGc5ejhVQzhCN0FJTnlBd0R6UGFIZGZZU01jNWI1bzBoVXQ1Qms1Y29waWl0UXRZK2hiazk5NEJ2UnR0UDk5N1A0RGIwcEJ4SUgrNXdjbCtoMDdZZktpOTM1SVJGOXh1UXI2bWo0ZFdHaWhyODN0TE43REErbnpobGxidzAyYk4rMzA4MCtmdjJRK3V2bFRwcDk4N0pJdm9jbFlGMTkvbzBlajRMY1BzSHZ2WkU5c3QwL1ZMQW5HdWdUdnVlWFBmM3Z6djkzQWtuRXYwTGlYVU55YjloS2hndDVxVktNYS9xUHFQRnlOWkNRYzZaRjJNbmJDVW1FNkNVTTZFazVxamJaTlJxOFFSaEczREYrMERIeUtGbVhFWUNDRlJYY0ZnMlhPRU5jZUYrY1dMamxuN1BoSkxTSVlQMm5oa2cvYW1nWVhHSXd5VzFGaGluaUttWDloc01rUnJVaVJlRVkwUXgzUk5TbWx1amdWTVVkMDZ5U3BLeS93YS9Bcm9tK3hYZXA2STYybG1udTV1RFVnejFXNEIrRHE3cXV1bzFDZ0t6YW5WdHNJczRqV3Z2SkhMa2lkVStXTjBIWWpVL0svc3ZIU1U1TC9lZmxKeHlmSmYxNTA1a2ZyNDhab3JYZEIyKzNHcHI3dWpyNVlPMTl4cnpKOEVmTFRobW13YWFFKzdwQmozMy9jeklVenQ5MjE3YTA5YnlsN1lFeDlRdjlKbjkvNS9IZGZlZTY3NnQyQmtVYkI2NzU0MFVEL0F0TGUzTHFKdmI3TDNpVTRHMnZYcmwyMmJObXFWYXVVeDM5dzNmOThkY2YyRDEvOFplTnRPSGZ6WG1Sdm1KNGx0ZTBONjlrTGpyOHIzSzFHTmFyaE5hck93OVZJRE1QNVVKc011em9NVzlvTEt3MXVyWTJGMVE2L1l0UGdZajdZcytqS1dQb0p0N3U3Y21hZHM2MlpNTnBKV0Y4M1pHM2RiWVE1a3hvUlUzb0lGODJCODZ0bEh0eEF1TlhWRnVzZUxMMVMzTlg1amkxNjVMWVBLcjExc0hKMFFOaE9qdlFOem5kbVFOL2c0b1djeVkyUGVlczR0QnZ0VHA0MjUyTi85SGRQYmI0bit5dUQ0VW1IemthYkJuTjByeW8zYVBMaldPd1lzWi91eUdvM20vYzJXZ3VyWFh5YnI4ejN2TkFOdUwzaEl4MkQyMDJKVzN1U0N6aVJyMlZyMzQzTWxRczdNejhnSXd2SzJ3WHo1cHlZMkhSNDVJSG1adFJrNFpjZWRvVjVuazBHYnZTQzI2L0ZVV3k1YjVzVlhDSFAxdjVHa3VwYmM2bSt5bTQwM0JONlJ2RS9ueGFZLzZ3VXV4NzNubytGZFRieXlMaEM3cUk1c3AyZGJtZmMxaUxQdG0vK3ROTXZPR1ArRWh4bG04bFloNHlicmp6ZXRFTjdwRU0zdXdTN1lyRUdCd2ZSTHNIYjdybjF4aS84NnY1OWUwTDEzdFNoVnFiSktyRzNHdFdvUnNjWnVPbzhYSTFTWURpNUxCd1RtZ1ZhTTZGSVRWZ1hoSm05ZzFHY05ScWRwMitGY0ZoUWxrVTBsbGZCVVI1TVRNbXloRVhyUFpOWUI5VmdabGFEUlVRU2FoeEZiSms4YmZiaUQzeDY4WXJ6Si9mTnRuUkxBbDFvRk04WFVDbEFjdnVTQzRNakhkSHlXU3M2b3BuTkVXME54Nm9WdXJKZjJCWG1lUVpFc0padERlMTlhdlk4bTFvY3haYjcwa09ld2RWeFM0d044MEZmOFNBMmw3TDN0WmYzN25wSjNEUExUem8rNEdOZnFmNmRNbVB1WVVjY1MrcHNwTVU3cTUvQ3pvd3JaNkV2eGUyTTlqMEhZN1ZKUXdwZWZ0elNUNTZLOWdvZVAybGV4c0JUcHArc1ArV1hEcjE3Ri92T3JjNVlMR05KOE5QYmIvejhyMmIvNHQ5RHpObnp3TXk5TEpwN2ZTOGRLdWl0UmpXcVVZMXFqQzRTZHQ3R0RTQmhNTjVFN2lZSmwyR05qcXdRWmxGQldVWmZkRmg1Y01LdzZFNWlNQmd3T0g5TXgyQ2Zwc0hNVU95b240bXQvOVJrbGRHdk1KalFLc21jRVkxb3EwcmtNREVjUzJnaVZET0ZYU25DcnpIc0tvL1ZBa09LRmtNNnBESUZIQWt0amtMTGZmMlRyZ2l0ZmJGU1llM05vS0d2V01EZG5QR3pqMHFDWlAvTXc2Z2VYWGtvK2MvOWk5L1AxR1VaT2h1aDV6NHQ0NHBTNkd2S2RuWjBlQU5USzNicDQ3VnYvclN6ZnU5OU00K1pwZStRTWZVSkN4WjlkazcvZWZwVDEyKzhiOFVWVjFIVG9Sc2x3WGV4WjU2eVQ5WGYzNzlodzRhVksxY3FqKzk1K1lXYi8vU0NrVmdzTy9kQ2Q3ZzM1aXFoR3RXb1JqV3FVWTNSQXNPKzkzWWpTb1U5U0pqMUFBa3oxZ2xCV0wwb3BBUmxVZktpdGZKZ0N3YlhEaFlNeG1PaW1XL1RZTnhzcTU1N05jVVRyTzBFVzJHd3FWVVNCazJ1ak9nazRWakM3WUNhUWZobHVmRHJDTHZTSzM3MWV4WEkrMW4yUE91SDBPeDVsczRVckx0dmJOS1ZUMnRmSEgxVnF3YUN2czNWLzVsV0FCejJDYThvd0ljZnR6UzhzeEU1NDRyUTFpalU3V3lrUWFtc1BSdjFjWWVjOHZIRko1NTdFaW9GejVpN0RMVkRaL1NiTWJDeTAyd012T24rUnFOZzYranI2MXUzYnQzcTFhdVZ4L2NQNzduNVR6Kzk3ZTViSFY5NGRPNVZianhEQlBlYU9MamkzbXBVb3hyVnFNWkJTY0srTjN4TEpXRzdFUXhkRTMwRmRPSmlQdGJvY2dWaG42QXNISEdaWDl1a29KU3Mzc0ZnWlZub3hiWVZnODNka3JURkZrZThCa3lMT1pKT1BMa2RrS1RuZ3lTU0t1aWUwaEVkMUM0WUM4Y3FwdEM2SE5WQUZIN2Jod2R2OEN2cHZhQUZUME1OREJxd2Nsc2kwUE1jVnU0cjRhdjB2bUR5YlFuR1BGcjdtcXNVMEhzOGpiOSs5dVFXY2IrRU5VQlNRRzdzeE1uOUErOFBSMStHb2E5UWcwSHI2T3NvQnBiMkY5YUt6WHdyVWM1NEgvbVorNjU1cDEvNG5zbXpwdWc3cDJtSDF0T2hkdy92Tys4cjExeDgvWTNVdlp3QjhFUDNPMHVDMTZ4WnMzYnRXdjN4dS83NmkzZjk5Wi9TdVpmUnc1eFpQUGN5QjBoWG94clZxRVkxcW5Id3dYQVlDZnVYQ2hQa1dYTVVpUE1yM2lBSU14WnVqVlo3Q0ljTHd0YXJPeEJqYTYxNTBRcGxScFFIZHhHREdRR0Q1UjJvdUZabERNWXU3RmtOaURIUjhqRmllZnNlN1hRVDFYVXB4Umt0REdhZ0pRMWJIZEhNbkJITk1FZTB2VjB3TTdRTExuYXUwQ2VwemhoRHc2NmFyK2VGMFhra1ZrczBqb01XR1N3MS9tbm1jK0hYMDF6U2lvdWRYRUFVQXowd1dWNDNxVVpjSkg4a2tSamtQR0V0NUZtNDc2SjhGclNtNU1YNW1XK1hkRUp6TldoYTNIdkYybkJoMVg3KzRwTktBNlRsSjRZb3dQYytKdlhzT1dyeHN0YlNUWkhPK1Nab083NTExS3p4emx6WjdkcXZVaENqbHUwc1JqOXpQVElhejMrV1ppV2ZWSzM1alQ5MFFzYkFUM3ovcDgvOStCbGwvMWpTb2ErKy9hNHRROCt1dS9RaVV2TDIwRk5zOTJ0czJZZnQwZENEZzRNREF3TXJWcXpZdlh1M1JOQjMzN0ovZU0rSEx2bEtvd1VJbHVlc2ZLVnk5SW1BTUdkN2tuT0Z1OVdvUmpXcVVZMTNMQWxMMzdpR0JHbHUvc0wxajQ4V0orTklobk0raDRqZ2FITVFORWVpbTBGZFF5R1ptUWx4eGZrVkdHZm15R2hsdzRXSTRwRnB1WGFoQS9tbEpjdFRybHZSeU9Lc2xNVzFvcEs1UG8wd1R6UXNXcHBETTBDNDJFdml4RVVHc3pwL1BiR1ptNVpZSkVWenBpMUlTNGN1TXJPWm1JQmR4Q3l6VnF5eHRndkUrVGZUa3FValdHeUtHQ2pOaTkzUzN1T210aUtRUHowUy90eEthbTREZGp0V3VoMER6WVdBNm1KSG9SblJJM0hkSUlacHQvZThjQ2EwOW5Bemo3cTlZNlVRYjhoRHQvbC84K1o2dE0vdFpnQjFPNlM2bGNIZENJaXVRU0Z4Tmplc29EZmhjZEhyM2Y0dkYyK2JTTFpqcGF4endZbG5Iekt1QlJqWkwwZWU5SDZwb1JQWE9WaTQweUpsWmVVTGtvMEJ6Zi93OXA5Y01DeXJOQ1dMOTF4Y1RkTmRKbjNGV3B0ZjNEL2hJaG9LZTQrcFRONDRPcTFzYjNqMkVha0FlS0IvUVZnREpLVUQ4TnpqbHVacjFUeWFVSnhCV2hmYS9CQTB6bWRBYm1scU8xTjhxdjF1a0xkZG15WS9RQ0F1QlV0SEsxWll2eWZKNVM4R2NWYXR2UTNIZmVENHBaODZEYlZEenp6aTNBeURNeGhXSHQvNDJPTkxMcjJNV2hLOGV4ZTc1N2JnV0t5bkhyajdsaStldjMvdm5tS0hjK0VrNC9JUHZ1R0dhZkpkWFR5bHZBVHlKZHBtV1AxVVA5VlA5VlA5VkQvdnRCL2pOeWFvMkduNXByYk0wRENaY0FFQTJHV1lRWkpHMTBGZk92YVVjTDJoTEU1YlF3bkY5ZUJyK2ZwRW55RkhyZ3psSzFKOUc0c0xQT0NDNkNGdWlINkJhbGlXZEltcktQekNEamRlNGlvcnJHOUxUZ3JjdFVUSlBTdnVZZG5UMkh5YU0vVTZtV09oT0Z6VjM0RXpMWDFiT3JLUzc5TkFRL3FoQVZuN2JtK2FJS0J6aHNNYVkzcTB0YmhpaFZGWnR6ZTNXS0FtV0lZVkFaMnB2dXYyVFJhb0ZWMkRoVTBBaGZqYTFtcEJBUytFMlZwTjBaZWxSR2lRdStES1htMGhsS3N4emFTcHN6NXcvdjk5d3BtZnlIN091ZUNxaVZOblNqYnBXZzMwRkdKUVMyZEJhRitybFZrck1XS1kwVmZ6amt2R0JTa25HZFFPeFZMcWM1R2xwV2JWZ1dZQkVSd0N4UXZicTZmNG4xY0crWitIaHQ4YTJ2bXFwQUFQTEdQeXJRbTl1N2RXQjlDMGthdVZHOHJPMUx3V1dEc2w1aW9HcmhsakdQQXNMdjNqU0l1U0ZsODJiY0gwcy81d1dmYXZ2cThtVFQxbTRTbVhqcDgwVDkySE8xOWRjY1ZWMUE1Snczc2JzVmc3WDdaUFpZckYydm5VOXJVWEx0djU5SFpqVlJGYTMrdDBRRVU2dTZwUmpXcFVveHJWcUVieVVtRkNJeVhsMnNwWUNhdzRmc0cxQW1hM3MydzdOY2VVU21zRUNsakpPY09HMGwrR1hDV3FCY1BLYXVtWHpZYjVJTzJMc0dsYWhaWEt1dFdrcTBxc2tTZFc5b2hzQzNLZEREWHRBbHNxZE5XbUYvM01OVkFMQ1d0V1p6VWdTR05lYmFYR0c0UkVKMFc2bCtnUDN6UUZoa1R6dVZBZUxEYkx4YllZQzN5V3pOVkNaYk93emdLVWljVytoVEdkcVNXNU5TWlRiVTBNaFZadVlZaW5xUnoycGNaUWlXc3BCemEzTm1MaW9UTlBlTThuc3ArSmg4NFNHZ25Ya0k3QjZ2NHRyTnRZMExaZU5vM1Z1S3J4MUV3aTZwcmtXbGRvV2N2OUVoM3pWdlFGN0QwczdEOEZnSmNGK1o4M0RqMG4vamxqL25GakowNVdLbzJwNkt0OG9EblJGL20wdFJZRDEvQlBWYnp6c0ZZd2pCWURhMTlTamYvWHh4Mnk5TGRPUC9wOXgraTc2NUJ4MHpNRzdwdDV1cXJzRHU5YmRlMTExSkxnUmpUMG5jNW82R1lzMXVEZ29QTDQvcjE3YnJuMC9LY2V1THMwN3EwNkdGV2pHdFdvUmpXcWtRaUd5eU5oNDB1dGxjQklCRlFVQ1dQZ2JZdU1Gc3R1UWUyY1lpb1lScGV1NUdZSlU2SVlES1lOZEdPd0d1RGFUUXhtQ1RBWTMzQzVIeXpnTktUVmVBdTh5ckRUeWFaUXRpT04wU2d5cVdvVlVTaDFPcFVDbi9PdVMxSWNkUEVhTVVWSXlYM095MzFSMkc0ZEgwWVFmcVVUb3dZVzRWY09iRmI3UGlsZ2paS3FmQlRSaW1vUTBCZlJLdlZ6RkVBdE1HNzlVNU4wWmJsVkxsUFJsMms5alZEMFpVd3FjQmZ2WFFnNVpncjlzckFJNkVtVHY3WGxVZkdCZWNjdEphQXYyTkhYZ3JXMkNTeGRmMnY0WjdHaC9aSUNnVWllbGxxMnJNZEhNM2JVV2Njc1BmLzArdmhEOU4wMjc1anpzeC85OGF0dnYydkZGVmRSdXdSdnVyOFJpK1VhYTBlR3pzRGZ2dUlQdHQxMUN4NXRGY3U5MXUvbWFsU2pHdFdvUmpXcTBRc2tiQldFd2Q0dTJDNElNMUpxdEdOeHpCRVo3UkNFRmZhekNzTElKWkRRbHdUTHViWlJyc1dmQ0RYb05nWURGWU9SV0ZtMW9hc0JnOFdZYldVbmc5VHhSMjRRWlNvQjFvNFV5THhXa3lVcEtZZE1iSmhrNFRXcHQ2clNIRmNDUDZHQVVwV0NRY2w5dGt2Qk5ZZndXOU9FWDJYWHRybGNEbXh1WTNzTmk0WjJDTDlXenpNSW5tZnJIUVdiNXhtVUJya0kra3FSMTB4UFkyTkc5RldEeVBIYk5qOS80WWxZK3MzRzRmTTNidHdvUHRDL1pCa0JmVmxpOUZVLzVZU2wxMHAwTytQeDBjSU1weTJZY2RiL2dkdWgrMmFlam5aSThpc0pIbnFLRWcwOU9EaTRidDI2dnI0KzVmRzcvdXJTZS8vaEw5MWZueFgzVnFNYTFhaEdOYXB4VUpJd0s1bUVZd1JoOEJHRXhYbUgrcUp4RE5aVUpiY3YybEttcHhCSEwyT3cxQ1ZLUENLS0hLZGpjT0YwQmIzTkVoTlRuUVZIZEEyT1h2S2hzZU1uTlNmSmZsbTQ1SU5GaDJpM1l6ZldFUzEwb3paSXdReXNVakJUcEdDd1NzRmpqbDM2S3piaFY2aGNCVTM0TGRCWG1sYnRkQ3dlU01CdUpIaDRubG1nNTltdjNGYzVRQXE5eWhaOEUvcUN5YmcvOHZ2V2UyNTgvZVdDc2daWG5CM0F3RnZHVDczbTcvOUJmR1RGcXN2VG9tOXgycnZkenRyN1UvdXNwTG1kbWNQdERFZ1NQVExEa2NkcjlURnpUNW1mUGZEYXMycHlWWDNzMUF5RDM5ejd6TnY3cGFkMjc5djN6UWQrTktldmI2Qi9nZnNZN0g2TnZmd2ltOS9QeG95eFRIWDg4Y2VmZSs2NTMvem1OOTk2NnkzeDhaZTJiOTd6eWd0SExENnpQbmFjMzIzamludXJVWTFxVktNYTFSaDFKR3lmbFcrUk1ETmUvN2lYbmxZUWxtdDYvWHpSTXZvSnNUdm9iZ0ZxZWJDT3diamNpdTVTQWdZekt3WXIyVnFLR1pXcC9YNk4weXNncFBDempzR1NBVmx5Qlp2V09WK3pzUk1tOTUrOGJOejRTWE9PT3VXTVgvMzhwR216SmVnRk1EaWlRVjZFb1IyczdvaEdWR09aVy9UZXY2TEpHMmtLSmM1WWFRVUVDbXpYbUxZWlRPcW5yUFFOeXVlQUNMOU02TXFyZGhVUzZWZTljU0pTRklqQ3IzN0hoZW45bzVBWmd0b3RWaTczRlkzNGVrRTVrOFJ1T2NoWlA4bVlXcXZBQlBRMXZ5M1p6NTdZTEg0S0xhYXdsakw2cG05ODhDSHhnY01YbmFyY2s3T2pyOVNEeS9JQlNsQjkzUmxYMkIwNFI2R3Zjb3VCWVpLdjZUYWhQTGVqeno3MjFBdk8xTzNRelE1Sk0rWXVVNmwycENUNHlwdldrdzRFT1JwNng0NGRlalQwdGp0dnZ2bVMzOW8vdktmaTNtcFVveHJWcUVZMURuSVNqb2pMRWlXMHpnakN6RThRUm56UmpPS0x4c3FER2EwOG1ORXdtRmxUc3BoTEtHSldOZGg4d2E4YkliSEZnV3B5bGpaQjJIQ0I4N1NaNHpqRDVQSmVOVUZaV0VRTExDZFBtMzNLT1JlYzhvRUxKdmZObGhyN2lQTm4yRXhrUnpUVFcvSGtsQWNvWTVyM1pJNTFXRGlXSUpYVmhGNnJJSjRnZVZXd3VBbGpqbnYzeDVsSTM0WDlXQUFrdVNNUklNSnZUYllLeXcyWHRlZ3QvU1JRQXFodzNiVm9qbXpRNGxXWlBpOE5MU0xGNUs3STZpMFRPUzFaN3ZnTVN2aVZab0lYQ1ZCWGZZVVcxWHQzdmJUMWJpbHY2Zi85dmNIeFl3L3grOWhkOUs0dmYrMS9QLzc0NDhVRFovM3kzRVdueXVkV2ZyTkErOXlwb1o4MUR2UUZDN0thQzMyWlo2RXY0Sit0VnNsWDY1YXVURG4rMEFselRqeDg5N083RGd6dlYzYms1TDRUeG82Zi9zYXVSNVRITno3MitETTdYMTErMGdudVEvUDJBZmJjRUp0ek9Ccy93VExWK1BIalAvV3BULzNvUno4YUdob1NIOS8zMnM1bk52M2d5Tk9XTlZvRU83NVdLKzZ0UmpXcVVZMXFWR01Va2pDTElHSEROTnhKd3ZTbEUyUmVyU01QeVJjdExwRXpEMSswOWhKME1rUlY1blpkUjV5ek9rTnByYmk2Q0ZEN0RZbklrTS9RZkFYTHNjVnhwcmRyUWRhTkc5ZFRQTlBhelltRXJlWXlzekU5ODFtY0xXaFgzV0tEcEh4bGhOZHlmVDJsK1RDcEFaYTRvR0tUZ1RQakRLVk5BMUhUQlpuWW1ONVZTZ1Jzc1lhV05VT3dpcGlvR29EdVlaWWs2QnJnd3EvZytOVWw1ZUpYSk94S3I4SUZKR2JaN1htVzRzQmxlek5JZllYQkVLRUc4cDBEdGR4WHR4a29WbnVqTDEvS3cyNDgrYk1ucEFTc3dBN0EvUXVWQXVERE0vckYwQmRjNkF1NkNSa3NkZm5hSjFkOG9hOHhGZ3NQdURKOHFBR1NGaWhNT2I1djR1bS9kL2JjeFVmbys3SlpFcXgzQ2I1KzQzMHJycmhLYVRSbFpPQjdicU5FUTIvWXNFR1BodDc1MUxhdi84RkhzMzl0WDZJVjkxYWpHdFdvUmpXcU1VcEp1TFFpWVozY2tKa1RqZG5XZmtocVkwdFBYelJEZk1keDVjR1NBVk9KaTNMWkc5SExWRm1lQlV4QUVrR0pYaHVzOStJVnFnZWxNQ2VtaENnaDErSEllaHJMTTdWOExHbDJTSnF2RkpPRTlFOWlUSStxc21SRU0xM2lWU3VRQ2VGWTBncHExbTZSRlFRcFdPenl5OFNLMkpGOU8rYllVejhPb213cnJMOFVBU1gyT3dMTmhWeFl1OFdkV3dPbUZWNHp3WDh0N1JpNXh5NG93cStjd0NWc09uSjQ1ZUpvNVF3UmJMdWdxT2dTejRza3JMNlJCRisrOGtJNWZKd3h6VzAvTXA1NDhJNVhoaDdMeitwekIwNzJiZ0o4K1B3aFZ2L3lsNzhzUG5iV3AvNWtUS09VVkpGQm1WNHpJQjlsK2ROV2JSY09hamFjdHRYeXkrVTNNOU0rNEF3TFV1OFdLcDlvek5DR1hicU5JZnJRNVk5aDRiVXpqNXN6b1cvaWE4L3UrdTlmL0xjNHgvcllxZE5tbjdYMzljZC84ZlliNHVNdjdYNzlobzMzblR0d3lweStROTNINWNYbjJDRmoyWXlaOXFsV3JseVprZkNkZDk0cFB2aGZCL2IvNTRadlQ1dS9jUHI4aGVwWFpqV3FVWTFxVktNYTFSaU5nK3M0cXo4clg3Und5NnlRYWFRckJpNHZpQnZSSEZzMFV4ZU5TQXJ0R1hHVlIwMkVMYTJTTEVkYTEwMWFKVVJUNWdLWFl4ZUhJNnFpc2wzSUdncnFwRHhETHFrcnlvNVMxNGViWXNHMEF3cWkrZ3lNYVhUVjJtbkNoYnJPOFZ5aVdka2tpUzZGeVNXZHdrVHEwUWNWTEJuVFlwZmIxTU1adHRYaURnTW1JNS8wbEhKbmdrdWJJSVJIS3dHNEFteUlpVlFTWkdDWlkvSnRnQnBTWVN6a05yZWZLQ0sybEx3dmdmMUEyakVnWmxCcjdXdEVGN1VXNWl3bWE2djhLVEMvSEhuT0pFaldlajByT1UxSTBia0Nlb29KVzFlZGpjRnJqR25CVzhXWk5ES1VBdUJsSjUzZy9YazZiNEVpL3g0Mi83aXhrNlpxem11WDZndjZ4NXo4RmtYUFVtYjB2YWp2VlZCd1dpcGhVVTV4cHI2UnhmdUxHdENpZmRKTkNkTHlSOGZjeGZPWC92Wjd4dmVwcXZ1WStnUlRsK0FsbDE1Mi9jYjdTSWRtNnlaS2U2VFZxMWVqN1pGdSs5THZiN3Z6Rm1iOXVxeEdOYXBSaldwVW94cWpZMWlDUEZoUUR3anpOS0QzQy9MTHlnSThLd3U5ckVLYTlCaW4xT21VQ2RHbytMb3huVy9sbDFoTTBiTGdCVXpaS08wS2xxZ0dhenNmR0Nab2EzSWhGajhtWHgranJZWjBuRENFUzhrd0l1dmdvQUt0dkx1VUNtR1FwUyt0WTQ1RWYwd3dEb3ZWdVJwcGFEV3RrajRwcGplcmFNWmtKVlVRNFFHa2pWSVNoOXZkYnZWTTZYd1Axa1RKWGhTWGtYYStncWd0Q2ZIS1BRR2grbGtXaE1VOUl0VkFTMDJNRmQxY3Voa0JhTlMxa0E0dHg0RXB4NFl4VXp0bUJzZzVMZ2RjeWVpcjVxRXh6WDBCK2oyUmZKLzkvSG1wQjlKQVFBTFd6TmxidDI0Vkh6ajgrRk85MGRjU0NTQTNESGFpTHluZTJaTDFoOTdEQWtzM1lIQ2dMOWdyUnRpVTJWUFArTDJ6cHgwNUE3bTNjTXo1Yy9yUDB4OWZkZTExRjE5L0krbm9rTnNqYmRpd1FXK1BkUGRYTHZuUlAxMWRvVzgxcWxHTmFsU2pHZ2NiQ1dOWUhCS1haWjJHMmp5SmVmcWlFZit6d1JmTnNNczUrYW9ZdVRTVk5zcGNsNmMyYlVHdlBEVU1ka1c2aG1Bd2Zta05xbXNXclJhc0tUbXZ4bTZzT1ZlQTJ1ZkZFTkFyOTQ1VkhkR1MxQ2VoVy9zQXlVaGRrL3JTcWxadmtFVk4yU1F1TDdxbXNwcVdnZ3hhTVd5eE5KQjd3b0NVVFkwMUNSSjJtNWdQM1Y3M21rMzRCWmZ3Sy9VS1pvandxNkdqVUVCc0VYN2xTbG93Q0w4MStUSHhKQVQ1a0RETnk2emNNcEhQQmhCa2I0WGVIU2VaZEtjRzcwRDlzeWUzS0o4ejNnRGNONTFObkt3b3dETVdMTUs2dDhXaEw2T2lyKzNtSXBqTE9SUThsaklHVFVDcmRZR3p4T3Vidmh0R3BxbVBQMlRwaGUrZGY4YlIrZzZlTVhmWmdrV2YxVXVDcjc3OXJneURkdy92SXpId3ZYYzVHWGo1OHVVb0EvL0hEV3Z1L3ZJbDFkVkNOYXBSaldwVW94b0hJUWJIeDJVUnNySzBoa2FKSXFQMWF6TzhIYVlCZzUzbHdTWkV4OEtpdTR6QkFEZ0dNeFdEUmVoVk1Cak1HQ3p5aTBwRFVvcXdTNXlyZ2FwY1lpMWFpL2JJc3RjNTN3T3kzVldvR01WNjVlWU1MeTlhdXBUWHdCdGtnNjlMQ3BhN0RxbFNjSzNvQmF4THdUVUZ6K0tGWDdteUZCVit3VS80TGU1NWFLSzhTTFNLNXhsd3p6TnlpaWdrRElCNG5zRmxNMURRbHdIeUxocjU1ZWZQLzZlRVFQN3RmOW1SQzdOL3RteVJRSHJlb2xPWm9RMXZoOUNYa0NPTm82L3Vkc1lpRGZRYm1yWUVCY1ljOTAzYnp4NzNrWk5PL1BpQTNpRnB5dlNUKzAvOC9DSGpwaXVQTjJPeFNBeThlMWVEZ2ZmdHRVOWxhWStVTWZEK3ZYdXFxNFZxVktNYTFhaEdOZDRaSkl3K1JiaXdBVE1xbHlRSU01eHZNVjgwR0s3MFFCZUUzUmhzdXJic0tReldGRy9KRVUzR1lCbXFqU2xjMVBMTUd0cGJXSS9DVWdEZTdJZ0dVSHZ3S2pGYVRKS0NsV0F4bXhUTVdObFNjSjNwRFh1WlVGOHRsbUdQUENqMDhwWE92ZUx3YVAySjJnWGJBSnJuT1MrNkJvYmQ4MkQ1UXR1L3l5bGtuQlg3bHpNcHVicW9qUmRZdVQwOXc3dHN0WExEcGRkeDliNUN2czZLYWwya3BZdG5JWmR2dDdCRS9tZEYvaDAzY2Nya3d3N25vRzVPYzIyRUduVjhndmEyWXhOb1BlalVUVk9ubHg2VTI4bkpXUXhLYmJCNHowejlyNWprcm54YkdENnAwVzhhOUNsZ2N3Ym1UNTV6NkUrK3VlbXQzUkxXanA4MGIrRXBsdzV0Kzd1M2hsOFFIOTh5OU94Um43dGt3eFYvNWo1MkdRUGZmUnRiOXVHR2FHOGV6V2pvRlN0V0tEYzFNZ2JlK2RTMlgvdnJiMHJ0a2FwUmpXcFVveHJWcU1iQlJNS3Q2ekQxRCtVdjlTS0hjMlErWEpnR25hQjl3Y2Zib1VQRnpFRmJucjVjenRHNU1YRnVJRjFXOHViVmQ3NTErWjhnYkhWN2pkQmw4ZnhQeXpaQzhSeEg1NlBQcEhscHFzeUJjMmxuSXROd2ZhczV4NWJWbXBMeFlnT0ZWNDBnRnBmMlp6R0hGbjFvYytNY2NnUnBQc0JhVTBIT1RDeGZZeEFPQ2MrUE9LZzdKTiswNXFLYktNU2Jod01haDQ4enFUdFU4eWxvSGxxdTdOajJDbVV6NGVpS3RaY2xuSUZORnVINTlMeTltZmwyQW05dmJHTWZ0aFlMclhWdjlMMGErYjJ4RHEybE1oQmUwbHdqM2lUTjFtSnFha0MxMmo1SDFxZFYraFVyZmtFUDBwTGpzd0dsWDFHYjF1bFh2YzJnOHBWd293WEUybCt0YXR6Y29FaTV0U05GVE91eDFPcHN3Smtxcmxpc0ZRQmUzSCtrM3dmbHBNa1pUU21rTkdQQmNVYW5zVmV5dkZuMVJTb05EUGZNRUZkNVVLR3ZsSFFlNTNZMkJmcm5TNWt5NTlBei9uRFp0UDdEbEoxdGljVmFjY1ZWNnpjOTdENWVieDlvNk1BWkNWdEh4c0NiTjI5RzJpTTl1ZTNXUC9uTlNnZXVSaldxVVkxcVZPUGdKK0VBYXpRNkU2c2dqRjlsRVFWaG95L2FKUE1peGF2R2tqZEQ1ckVrdVZxdmJMWE9NT2FMVzUrZW5jWVNaYm5OREw0c3hRcXRSakpydlVqTkZtVjMzMVlrZ3dxTFVxcUJxYWVzWE9pcVNzNUtqYXlNV21LMXI5NDhDYWtKTFdwb0JTbFlVTDZGbEdLMVJXNitZeEc2bEpPdFZDazRoOWdhMHlaUzBzaGttbEp3V0tqQlZlUjZOWkpLN3ZLa1NkSk1xL2xXamVhYTB3REVLR3l4OWxkeHlkZjAza3JxTVJES2lWVUxzZHcrQ1R2UHJQWURKbkxneUZKaUZlQ1pzN04vdEFTc2Q0OWk5R1U0K2pvSm1mUWR3SXhaRHNwU0dpWEJnKytkZnlaU0VvekdZbVVNZk41WHJpRkZROU5hQkdkajdkcTFLQU5mZi81WjJiL1Z0VUUxcWxHTmFsU2pHdThJREtaYm8rbFpXWVlKMUlzdUNnWXpSaThQUmpEWVZCNU13V0FWUVR1RXdjYWtMc1lRZlUzTERKSzJYOXRSZ09WakdURVlTU0JTNmtsUjQ3SFdUS2VtZVc4VlNBQTV6UXNVQnppbzNVK1ZsclJxRHlBa0ZWaGdXU0hmVmxvcFFPRWZRSUpxTEZoS0ZYZEJqQk9DV28yVkpQd3lSaGQrTlkrN0hEVldzd20vUW1HeVZqTmMweUFXdjl1aEhGcUdwWEFwOTNqRUZHdHpBYm9hSmEzU2J3Z0FIOTZZWGxHQUQxdXdxSnZvS3lTSEI2SXZXTkdYQmFHdk9iekJlTXVUc2VOKzZlUVR6MXVpNy9VWmM1ZjkvK3k5QzVoVjFaWHZPK2VtZUVoQlZZa1VEMEVvQkIrVUNvVW1pRzBMYUFMUnZyNElKT25RYlJ1UzYyZDN4elNoRS9MZGM2KzI0Y1R2NUg0eCtaQ2puUnVQSjZLeFkwNzd3a2Y2MkVLaVFKSU9tTVJRYURBbVBnb0RpZzlJVVR4VWpEM3ZyTDMyV211TU1jZGNyNzNyQmVQLzdhcGFlNjI1NXBycnNYZXQzeG92aThGdVdxeGwvM3lIZldVNmNiLzRXVVlHWHIxNk5abjUzc0d1aC83eFU4TEFJcEZJSkJJZGt5UmNpMXhaaVEwWXR6dlNiWkY4MGRTUzRjQjJXcFlzWnhqOURvTkxHVEFZOGllT0NHYnlPWEVZekZNR1NxUGo0UlJxMU5Xc2h5eTc3OXJaUjFUakJwdUNZWmFxZUdzbHAwQVBZSDRjdTR0TndTVmRFMU13MkRXUWc3bzh1NFJUYkdFb2hJWmZUWXppWEI0clZKTUtHSDZkUXI0a1BGemh4d1Z3VjJuQk1PU2ZyRFJ4alVWSEVBV011eWVVWG9ZNHpiV21sYldwVndKK3dNRTFWb3FXR3JNQS9BY0V3RVV5WUpVdHdJNEw5R21rVHJSeXRwN1dRTk02MzlvZHYxczVqZlZkOXFDdllvdjZLcVlDT050TU9aWFl2YkcrUEJWci9DeUxXYk84MXZpMlNiUC9icjZiRnF1cGVYWkw2M1V1QTkrMThhZUx2ckVtVTFvc3k4RHR2MGh0NVNzUmJCbjQ1Wit1bDFzQ2tVZ2tFb21PTFJKbWlkWlhMbEZ6cUtxek5zQjN4YzVhT3ZNV25UczlSZTYvbFlQM2ZGMWlway82TUNCaDd5TG5UZCtBbmNFemxJdHZSTFdtbWJzd0JkREZnTjhJOWVJc09OcnBHY0lSUFU5YUVYRFU3dGFKb1JWdkMrUVlWc3BqQ29acmFVSVQ4Yk1LeGhTTVFUaytydmpHWHFNUmx2Q0Y1ekVGSzF3VUY0OE5GanhTdU40cU5wZXJRYWZOL2poSzlJVk5vczRBU3ZCZ2FmY2hBVXhmVFI1SHVObXJGUk9qU3c4VGZ0S0FZVTd6NTh5M2FYTE80TTdSaThaekpXbnVTdEwreTQ2RUpDdTljL3ZtMTM4WEI0NWVPZnZzaTl0bTVQZ1NiQnFsVHBtK2NlUEd1KysrTzVvM2RQaklPWi80aDRRUGYyd1dUdmprazZlSzd0ZUhwd2UrdmZzRjVmK2FvMSsxeWQrR21yUGJhdCszbnUrcjF0OWgrZS9RRWNQR25UV2hzMlB2a1lQdndiWjFReHFPSDN2K3dmMi8vZFA3QitEODM3NzIraFBibnYzTDgrY01Hekk0NVF6dWU3czdML1NKS1diL3RyS2VlT0tKZDk5OU41cjV3WkgzZnZmVVl3MWpUMnFlMmlyM0F5S1JTQ1FTSFlzeUdLdm9mTXhkSnJVSHZvMDIrTGJQWUNqbE4rcnAwUERRem0yQ0JXYXdSWVB2TWcyKzBYTnZRZkd3cVdzNUdpMVhhcGowQU45cUpvRzF4eGdXem5FMmhKeVRqVlB5VjBHRGtOY1VSOHV4MHExNzdIYktLZEdrSFdzaTNUSFdaUnJFbVNxWGYwQVpIMFdoa2p1TW1pa1JUZUFaSEEzWDJFbHM2OVFVSEZrK3l6SEFwS0l5TU1SanV6a3VQYVJJb0RGa2FHS2Z4c1p1M2dkZDArcklDbE9sSnZRTGo1SmJhb2h1bXRwNFVUWnR6dS9hOFNYQWpnZU85NFhQOFVDUjBHSkl2NnBBQnF3VFQxS2MrVGZKNGJta1UvTEMwMlQxamdOSktVTk9Bdkx0VjBwSWtPRFBpMUE0MExlUXR6UG55eDB2SE5ZMC9PelAvbm56OVBGa2c0UHFqbXRwdlc3a3FMUEkvRzBkcjg1YWVZUDluWDRTTzE1U3YveFphb25nSzYrOGtpMFJ2T0ViWDNyK2lRZmtCa0FrRW9sRW9tTlJ2bHhaMlNPRWRkWUk0VnI2UlN2RlpzbmlOcEdRNkpTWm1SUi9WK0tjb3FtcEphbnFwK09aekZoUzhhMHM0NmlzL1NHSDRGNmFWZ1oxUWdKMVFxeXZvdjYyMEUxYThaR2JpdmdQWTVPcXB2dEZhNUs2OEFXWkFoYW5SWlY2dFMvR1dERmh0blRUTVFNNzhJaXI1TktpUnpqbFZ2ZWNFbGY0bHhRNHJqaHhBOE95ZXl3aXE3Um1pd2JoREZVNDNCbURwb3F6V1duRzhBdkluRDZFQUtlRUdIN2RpQUsyckpaU2JnSnFwenFXUTlmK3l4RmRRc0dHM3NZeHdDM05vL045NnpXUHM3OTI3dHlKb0hqNmg3Z1BiUitocjg2Q3Zyckc2TXY4WS9COFpmdlFsMnRRTjJ6d2pFK2ZlOUo1VTEwR25uVGE1OXpVMEIxdnZYM2hWNytlbFlFM3JVOWw0TGEyTmg4RGIvNzJLcmtIRUlsRUlwSG9tTWJnaEZ4WnlWRHF0a3hMbEpWVVFEalZ6S0F5WmNsUy9SaURWV0oxWWpwNGhrMDhkK1BSRURRWEdLd2RVM0Jpcks4aWFZOW9GRFNYdXhlNnhHS3JuZ1BoVG1acGg4S0l6eWxnWUpna3l6RUZoMVY0U0F3dTJIRmlDWWJXU2tVdHIzRnZKZG9Bd0c0ZHRvZWpZcjhHdERVYUZvd0ZGYWxpWTNLbDBLNE9KeFF3Q1JzOFBOZ2JEa05WK0FtRVJxVmhLOTJpblRHSzJOMjE0Y3J6b3NwR2xmSmR5QVhCNEdyTENsUUFWcWhZTGp6MXRDd3dDZitHeFlIdHo1RjNEaDQ1akZ4bmM4Y0Fjd0hBb3llZFpraVFjelIrZW9TUkkzMGs0M2djT0FFSU9yRzlzeFZGaS9yaUV4a1dRdE8wTmVmd3JMaHVQUVdLM1UwazlKYXRnUEFwZjNIV2lQR056ejlFS3g1Tm1MWjBXUDJFUFIzcjRNek9RNGRucmJ4aDdlZXYrY3o4UDA4NWxaMzd1aGw0M2tJMWVFZ3lBNy95eWl0dWllQnREOTc1M3NHdWozN2xXM0lQSUJLSlJDTFJNVTNDQ25vMVYyNkNjdFFRaGkwVEdoZ3dSY29NczNWNnlhTEVyc0JRNDFyQnhpMGRqUGFDbTRtTCtxSXF1K1hhczRxdCtndHVWK002d200RFdyblgzV3N3ZU9VdEM0eUc1dzQ3S3JTcmNNbmZhR2c2dk1lRkJaYUQ4cmZ4a01EdUJ3VitZWEhtdUVKdnBhWnhWQms2Ymh6TTBvWVdIQWJWaVEzWVZseDVPSmdUVmhMV0dveTdNc2hvR0FvZUlxTU0ycGVLRmRmRWxaRzFSbHNKYWhTcmVKY04xNXZSWUNZWVc0blFyNjlBRTg1WUhTTjdISXZyR0g1aHptbVNzTnZwRFQ0YjBBejl4cjRXVGtFamJKUjNhMkdCbE5Hb2xpL1lhN2VzVnJLSjMvVzNqL2JMcWNRRjBydnQzZlU3K0pWVnpQeHJ0WEhqUmpoN1pQT0o4ZE1TbldUMWhVN29ucWRjMU9xYmxCQlBaYkw2MHZUMWlWbWdreDVWZXNvYW9XTmV5TnM1OWNIbitGbVRadi85Ulc1YXJJVFUwTGY4VzRac1ZRRURaeWdSL05SVFQxa1NKdk9mZitLQkgzM2pTL0t2WHlRU2lVUWl3ZUFlTndocjN3MmVzMHBHYTNEYXpTRi9nMGY2VEx4N2RHNWllV3N3YkJEbkZ2WTJjRk5ra2FQbmRTTWxBOWJlSWl3UmdYbEsvdUlNVUw2Q3JDVFRNdVI4a0dsSnV6bWtZQXdwMkRyZEtXSnRSbzdOeWsyYURCcWhZa2JhM1d0c29BYW1PK3lLaXhDUFdNWlJIV08zNmxEZ0F1MGtqRVpHNGhLeU8wTzNaK3JXclRISGttSk5pcWE5eGdITnBPcHYrSzRFanFQdldEdkhNRTd2alAzak1Zd3p3eU00cDNrdkFweTV6aWtCcmJSMjYxd3JWWnNLd0IwZEhSVER5aldRTlBzdDRGN25DZWlyK3c1OTZUQ3FRRitWaHI1NS93ZVUzNHdZM3pqNzh4ZlozNVJPUGFtaFY5ejEvVXpsa2ZJdzhQejU4MTBHZnVnZlAvWGV3Uzc1MXk4U2lVUWlrYWhJRGVGY0dFeHY5blJ1REU0TmxPc1BHT3dZMjhpWWs2c2wwVHRocml3d1UzakpHYlliR0l5N3hVVkdFV0g2WTBXWjlNRTQ1QmR6RTFqaVpFZFNLc2txcWFCRHNqZlRFN1ZlSWkvb2FIZ2xEU05rQ2YxaGQyaE5USmc0S2pqcXQxUUpJOFlub0I4WmZwWEtZL2pGYWMwME9kL29FWUZpYmJuK3B5YWF1UVMxSW5WL2NlNHhFajEvOE8zWEVBQlB5WmtCcTJtVWN2eWZUNXorb2FSTVY2QTZGYy9HbnUrT1BrTmYvb21tOXFDdkxvNis2V2toYUdLSlljY1BQL3R6Rnh3L2hkcnRoOVZQc0F4c2Y1UDVkMjM4cVdYZzlQSkk3eC9KenNDZitjeG55UHpkN1Z1RWdVVWlrVWdrRXFYZnorUzlJOHJFeVg0TXpwY2xxOWN4V1BzeFdEc1luRGMvRnFtVW92aXl3TXpZdEsrTWl5OU5MNmpuUXREUjc4M3FDd1pHbFVseENWdTRyYXBNd1Zxbm1vSTl3Nk9tWUVBNk9peFY1REVGdzRSclFhSWs4bXhBaC9tdTBIbk5idmhWcXZjTXYweUtNK1UxL0lJcXd5Um5XQzE4bmpYcjgwdytHTVFDUExPUUJiaTl2UjNPR3puNnhHVDBUZmQ1ZHRCWCt4MC8rZ1o5bWE5b1Q3b3M4ajFlN0htbi8vOUUzYkRCc3o1M3dmaXpKMlZuNEF1Lyt2V3NETHp6cGRSTFlPM2F0UzREdi8zU0RtRmdrVWdrRW9sRXhXNXZ2RGRJMnZIQzgzSXlBSUpVTk8xVERFNjdyWFdNdlN5N1pzUmdkK1NKSHRHYTJ3bzJkSEVlMGFwNmorallrcWR4Z2FRNHF5ekt5RVhCUG9jcEdLN3BNUVVUOHNlVzZ0Z1VyQk5Od2E1ek5TaFRYRGJtS3BlUldkb3NRVnV5eC9DclMyNUliVThaZmpuVEsydjQxWTdoRjhlTEZ2RjVacE9xTWJadU1NcTMvMUJGREhEOWlDQmJFckVBTnpSUDRENXkyZEEzTmR5M242RXYrcTdORXVpYitzMmU5MzlEV2RNL2ZzNHBmMEdyTndmbGtkelUwTnM2WHJVTTNQSFcyK2tNL0l1ZlpXVGdyMzcxcXl3RGQrM1pKZi9yUlNLUlNDUVM1YmpWcWQ0dk9tTjRjUC9BWU00VXJOSURnNVVxVWkycHBvSEJoVHlpVlRhUGFGSWVLWTRscFI3UnJDbFlxUjQwQmVPK2trekJFY0V6RlhhcEtiZ3U2aGVjWmlmVGJ0Q3BZYW9QSS9wMUZqRmRPVTh3bktxLzRYSVQ3b3VoUnhUOWliSXd1OW1rVlppd21Ic2VBRGVFanpJWWl0SE1CaXVMU0ZjNCtaWEJNSy9Va2NNMEJYUytHT0N5K1ZjNU1jRGxHa2dlNTJiRG9TdzhQaVJCdG5IUEFwNWo4R0V3R2g5c2poY05QdFhlSWRIdEtaeGpqL2FEdWdLcjhEa1BhWjlPUDlvejM2dVR6cHRhTjJ6dzcvLzM5ais5K3o1azRBblRsdHFKenJlZUpndzhhK1VOVDMzMXY2U2ZjY3ZBVnBPbkpyZTY4Y1liSjArZXZHelpNc0xBLyt2YVN6NytyWDhkUGJXMXdEOUh1enEwSVkrZTFqcTB2a0h1R1VRaWtVZ2tPdHBrUExjN1JqSDNTY1lrOW1DWSt5V2owUitEKzlUY0tqU3ZOT3FBYlJ6bUpuYWFHYysyb3J6S0pyNTdOWEQ4T3U1U0tXWUhuWVRVZE13NlNCT3RETnBjOUpjY0ZyUzZSc1Zib3JFcGxMd2F6WTl2ckN2OWdDNWcwdW5Lc1FMakNNZkpiTHJNVWdia2pEYkJPQTA4UHBWaGdOWEJmb0tNMVdFZTVpaDNjMlcwVVhwcEZYVWVwWmFPTmhQbXAxWmhXdXh3VVhUMnVuTTZhMWl6Qnc0N0dMZ09EMHU4NDFGdTZEcGNhc2t0OGdzcjlDcFNLVmVWd0xNUkJ6bEJNU1N0U0FHaFlGRjh0WGk0MzZGUldBN0x3THhPVVljYWwwN1NZTHU0Zmc5NVZHUHdFNXJ3MExzUEdKVHk5Uk9WWmVKR1FsSkE1ODZBMVRpcVFsUFlBanlpZVlMQmoyU000bkNZWnNaV3ZqRlRrdVZLQnhIbU5kN3lRcHJoWXUzblphNnlrZkgxNDY2U3Jhd1JicGE0ZXFMR3pabzBZbHpqcisvOENXUmc1UytQZE9GWHY1NlZnUThkVkswemsxc0ZqdENFZ1MzQlB2U2xUeTNLd01DMjVlNzJMUlo2ZDdmL25LQXYycGVaYzJ4WEUyYWVkL0w1QytXR1FTUVNpVVNpbzBGTTVTVGp6Q2QzWTRiMllNQ05wYnZVQjNvSnF4aGZ6U1JjTUltdHZSU0NCT1ExdXEyb043UjE5TlpBc21iYmd5RUZrTVdNT1dLdXFDV3FTZ1YyQjZ4dXlGQnhwU2lqTkYvQVNXdERpamJwaUh3MU9UZ2hNaXBRWFNrMmhhSHlUbEcxb1VvMUkyNGtJWTNHSXcrM1pYUmMwS2d5bEVxWGxaWW1XQlNVV0tvY3J2QnBpWUVuUmNjSE9ScVNpb29xQlR0WTN1NS9ocHVMdGd1NnJSQzFxUXdsNkxndWlYNlJpemEwOTVKSWF4d3hpem1LcGtqV3ZPZTNja09XRmJJb1UwTWpiMnAzME10aitNVU9BSmdSbmRoZ1dtS1dlVWpnMU5wMVJuSmc3K3R3QUUzMXcvTjlXM0VWZ0ZXNUJoSnZndldncjNJcTgxYUR2cW9uMFZkbFJOOVVNSzQxK3NaUEg4WTNmdmp6RnoxNzc1YURyKytIODA4WVAyOVEzWEc3WDd5WE1IRFdFc0U3MnRYaGcrcEQ1eGRqNEhWK0JqN3d4cTZYZjdiKytTZnV0OUNiWlFjdEpOdFgrME4zTm95YmVQckNUOHo4K0dlSGpoQ3pzRWdrRW9sRXh6d0d1OVdERXpGWSswb0h1K01wZ01FcXNpY2k4eUpIaktCVEJ5a0JMUUlNNWltM2dpWUdsczlWZ0dzQVJXc0RScVZveGVCZ2RVMEFEL2svbW9ydGtOUXhOaWFDRVZyeTF3QkxKTEJJUjV1cGJCMmFseU9XSnAzcXlHenVqS1JpTUlRVmdNbVJpZTN3R3JCNmhVR0JxMjJJMHBxWWUrT3VGQjVTUE9ieWlxWHkyb0hwTjBSdUZWVVFEcm9LWVR1WUtNVmh4S24waTdOa0J6bTBFdWlYQk12R2J1Z08vVEpKcTFuNnhmbXZQZlFiZXNaenFjQ1VHd0pPWGZOcFVtaWNRcy92UTgvUUwrcnFBRTRCUGYrTTZmbStwOG9wb0RzN08rRzhFNmQvV0xzQnNUVHdBQVpJYzVFWmJyQUVGNDlCZStGak5sUktyRzlhcUVsNmVtYzN4NVZLNmhBTTJIbWprd0o5TTJwWTAvQlpuNzJBTDQ5MHhuVnNpZUM3TnY0MHZkK09sOVF2ZjViYXlqTHdyMy85NjZhbUpwZUJMYmpDbWI5ZC80Q2RlZmRmbmYrVGI2L0tTTDlRWFh0MlBmMjkxZC83Ni9NdFA4czlnMGdrRW9sRVJ3OEdaNzlIU2c0UFRzcVNsVll6eWRjYjM0OUtqdnVOSWxpOWVXZTBOd3MwQ1RlbWxXS2NYRE9vRksyYlpWb2hpMkJsVkNVbkhwUkw2ZVR1TlI4L3pGSUpxaC9zVC91czBIRndrd0hCQWtETVNBaFpPV2VCK3A5aUJQTm1SQzQ1V2F4QmdpZHlpTXBkbGxBaVpFV3laNEVOQUM0c1ljTXZMQjZsS2YxR2JzOWFVY012Q1RYV0hzTnZsbkJuZk0zaG5HTjQ3Tm81VW83aFYvdVN2emxoMzR6aGx4UVFTc2lpRmkwb2Fab0lLbHowK2d1L2doL3d5Ymt5WURXUEMvNXUyclFKemg3WmZDSmYzOGd0MUpTQXZxb2ZvbStOY2x6bFQzQlZRSFhEQm4vNDd5OGFONHY2TnRjM1RHTkxCRnNHWG5IWDkydkZ3RzF0YlU4OTlSVEx3Qlo2N2NUVDM3dkZndXVQdnZFbGdzUUZaSHY3M3pkZTgrT2J2eVEzRENLUlNDUVNIWVVrbk9XV3FYQ1dMS1g2SFFhckRCaXMrSUtwQklQOU44bG85ZmlPdXVUc2krSVNSeW51MEhFMzg3NWFSd1RRSWg1aVVnSVRWbElPbGhPcllTa2g3VE4rT2dCaEltTnFaQnlLaXhqWU9VU3gvYkpFMlJ1bXpnclRHM2UvcmN0aytLWFhtVTQyL0pMckk4SHdteER4cTNERXI4SVJ2NG9PQktHdjRneS9pcDQvNVpacmNqWkUwWmVpcG5NOFhQU3R3QVBPZ0pVdkJYVFQ4UlVtd2htdzRoVFF5dlZoNXNOOWxmdHN5VjJxYUlLelhuRjR6dFkrbzhOenJiMmRVelg5NCtkWUV0NzFjNVRHT1NpUHRQdWxlOTg5dEJ2T3YrWGYxbmNlT3J6Mjg5ZWtNL0NoUStyUDVnY0p3Sk1aK01JTEx5UU9BaFo2aDQ1b1NDNlAxREo1NHN5WjA5dG10RFkxTmRqZndjek8vVjNiMm5kMDdOeTFhZk5XKzV1czh2d1REOWpmSDFuNUxibGJFSWxFSXBIb2FNTmdsYzB2T3NudDJkTUFwelVOL0hQNzJDbmF1NG1LdjZ4Q3VhdU14NE82L0N0ellMQW1nY0U5NUJHTm80SkJJaVNRSEV1RDlGUTZUcmlGM0tvVkhnK09DdFk0S3JpeW1uTUtVRlN3UVlPTXBoUk5YSVhkb1lQREEzek9kWm83ZE9TR0hRMEx1a1BYWmFYZkVvKyt5ZlRMb0s5S05QejJRTVN2ZHN2ZXV1aXIrR1JYeXAvc2lxTmZQb3cyMk5MZVAxU1JCS3RwRkF2QUowdys3WmhHMzE0SjlNMnVVLzVpeHNqeFRjOC85Q3VYZ1R0MjNFWVlPSENFVG1mZ3QvWjBsd2lldHpBTEF5OWF0SWhjSVQ3NnZlTHlCVmRldG5EZTNITXRBUE1OTGxzUVRHemJ2bVBOcld2dnZ1ZEJZV0NSU0NRU2lRU0RHUXoyZ200L3dtQ1RuRWJMM1FRSURGWnNmaXdmQm1jSkRJWmtYc2tSRFVBMDJqeG1QRGVzMnBjY1M1UGtXSlhrVk5GcU1DOXlCSWVLSk1jaTBjV1pvb0tWZzZadVZIQ0UvemdxR0RKd0pTbzRNUEVhR2hVY1BXVWdqd2tDMDY0Qm1iRWdlMnVOR1hqSnl2dDU5Rlg1OGwwQlpFM0pkOFVEYWkwTXYyNTZwMXlHM3lxU1hmRlVHVzNtd043WDdsMTVhY3l6OWNQL2VOZi9sK09iNktPWEJneDgvUEhIUXl2Zko3Nyt3T2lXMDhGMnE4dDBwVDBBelZPb29DK3ZQYjkrbFpSSHN2cmdUKy84NFlYdkh1cDZrWUpyeTZTbnZ2cGYwak9pMmJPZnhzQ3FIQ0orNFlVWHVwblM0czNOYkYxKzNUSkx2MDJOK1hKWldReis3RFZmMmRhT2dvYy8rcFZ2bmI1d2lkd25pRVFpa1VpVVN3ZmU2TTZzOGZMUDFnZlBxWWVPYURqNS9JV3ovMmJGeUxFVCs5MVlqZWNOV3kzU3JabGtNaTQxelBLRTlyUmdFbDdNYmhSVTVra2FtR0g3Tis1Z3ZlT0p0MkE4dmFIVjBaQU1HbXZVdWVIMkJSMDNic0J3MWNvYzR4eHUyaEFPeHVtRUhBcGo0SURSTUVnenVMTW1Qanh1NXdZdGlsWURyWXh4RDY5aDl0cEVoeFFWdTZxME5pV2Vma09IY1J3b204SHRPWnBUMGxuY251UEFjUkMrek5BdnJLSHNqL2dsb2VHZVZNOWFJUzl6ekxnWmsxMkZmdVI0R0tnWlBENEgzbjZkWUUrK2I1OHdBeGJ4Y2UybTN4cG11bkxqSmJnMmZSenJteEo1VXVNY1Z3VTBidGFrV1orOW9HN1lZRGh6VU4xeExXZGMxOVE4bTRKbHg2c1hmdlhyblljT3AzVGF1YS9iRHZ6K2tlUldkOTExRjdFQVI3cjZxc1hQUFAzRFo3YiswRTdrcGQvdUszWkc2NVByNzdYOERHZis1TnVya3YyclJjZXl1cnB2NzI2eEx6c2hSME1rRW9raXZmM1NqdjkxN1NYUFAvRkE5RC9VVHRpM2RtYUJMSlU5cnVRc1dTcnRKcTJ2WW9NOU42am9kam5oenJOQWZpeG5rREJzMWJtZDlneUp2ZE5HVWJodXkvSzhrbWI5UFRNbHh3cXB5WW12cGhIRDhGQTRlSVdIUVpvcEoxZzZEdjNWWEZRd29zQWd5NUxLa3hrTEhrTjRqQ1BhSFRUOXp6OEZlcUdtVVJnNmpHZkJjR3FORHpIc0RVWThhMWd4R0dXVGpzY05Eby9yYTQyMjZNU0lJL3VuVGpxanBPS1JlMUhDUE5hS3RpSER3SjhpUVBEZ2ZIYzhzM0hYYy84Uk5acC94dWxYemo0bkIvMmVmS3I5dTJYTGxydnZ2anVhUGJKNXdsbC9jWlhpUEo3aG9VQ0QxNHJaSGJJdkNseVg1RXVIdG5FMnA1MXZUYTExcGs2WWdhVXNaYkdjbWQ4SEdqSnkyS2hUeHU3Ny9SdkVEdHd3NnF6MzM5djM3bUhrQzcybmMvOFQyNTY5ZU5hTUZEdnd1KytvWFIzZDFiQ0dIY2NBY21mbkpaZGNjdnZ0dDcvNzdydGswUldYTDNqODBicytjOVdTY1dPYnE5bXBZY09HZnVxVGx6NnhZZk9lTjk0SzVueHc1TDNEKzk2YWN2N0g1RzVHUkhSZ3o2NS8vZHRMWHYzRnB0M3RXMzY3L29GVDVsOCtSQXBvaVVRaVVmbnI4WUYvdUpKOWZHei9xLzUrNDJNRDVBdFRweFdxOU4rU0pTMGxkN0RkTXFudDJiSHA1Q0hGYlV6U3dMaTFjSXU0WGk5cHpOeHlhK083SHdaRG9zN2Z1SE5ZeW9tNUFkYWEyWjNBTVppOU9kWmtvOVJlcUNyT3hNNzRrZHR2TURCdUdBamx0SEVHYk1BV2pUTnNndzhVOURZT053RVpXTHQ3SFRTQmV4ZXRWWXB6Ynluc0Uwd01pdmhrd3YzUk5CNlh3aEEwQVN0a1p0U1lmaGw4alNHVnhCQkhxeGhNMmt6KzY3Szd2S0ZYSjZsckM1ZHE1RENOVVRLT2RvajZ4TSt1dUF2NnlEc0g0ZlhXTWlZUGluZ3lZSFZYQURaZ25BWld6UWFIaGYzQ012QlMxZkcrd0VOa2NDVnhvN0c3Q1BmMVorQXd3ZzljU2lmT3dCVGZHNTZEdmhvcjNkTDVmZmthTWE3eFEzOS9rZjFOVHVhRWFVdkh0U3dpTTdkMXZEcHI1UTMyZDhxVmNPaGd0eDI0Y3g5ZGZkdTJLVk9tYk55NGtjeHZtOW42MVBvZnJMdnZkbCtnYjE0MU5UYmNlY2MzNEJ6TE52Wi9lZDhlYW5uMXcxZVFnVHl5Yk5pM2NremtKUzk1eWN1K252N2U2Z1RucVhMdGh0WDlkUERNTFpZTzQxSGRPN2Z3NXMxZDNUallSdS85MEtLUXdMamVOTjZRdjVONG8xcVROakZaR2kvbDR2N1JQV2QzajBiemQ5cmtobGtUdnVDT2c4RUZhTGhhTDB5NUdSTUZCb1BxT1F5SWE0KzFDYitQOE1vNFpsRmtQd2VIUlR1bU5vWklNWFFSYzZ0bTRBc2IwVFRCdHNpTEdObFdGU1Z2WHpCdENRNUNhNXlLV3BjWW16QjFQSVk0ckxWVHBoWFJMMTZkZGRiVjJpa2JoVjBJdEd1TDV3enJ0SW9SVGhDdDQ1Sld5bXRuZGhPWDAxTERpaytwNWJoUHZQN2JYOEtMZldZdUYramhJNEsvTzNmdWhMTkhUejVkSlRpS2FKM2dLOEw3SWVmTk5hKzhMc3JPSjVmclJITUc0VlNINTE2cGJGUVQxUTBiM1BiWkM1cW0wSFRmSjR5Zlp6R1ltbkFQSGI3d3ExOVBaK0QzanhBR3Z1dXV1MmJObWtWODQ1dWFHbFovODRabnR2NXczdHh6YTd0VGJUTmFiN3grT1dGZ2VhSXZFb2xFSWxFV3ZmSWY2NnRzMEs4TXdPazNZMWx1NUppYlE3cUlqKzlUS3RrSk9TbHFMNlAzTmQrL2RwaVJtTUNnQTdOeXVVYVRCdXhPYW5iQW1pYnM1U29xVVNNbVY0SUlIYTRTTGdHTVEwZmpXM3RQc0twU1hIVWkxREl1aThRamc5WWNiU21FOHpwMG1OYU94eSszT3VEaUVpakJXNWtzY1FHOXdCWUs5aG1kWFk1K0NYS2pncitrb3EvV2JNSXFYWEtxUlVINmRSSkJSeGNFYi9pTnJ3eE5jMVp6VnprbzhFdHQ0WnhuUEhkbE1CZEU5eVNwZ2RRMGZIaU9iNW13Q0RCSmJqUzB2c0dMdm02NEwvT1p6VmphVjZWOWNUQlVmWXlqTDJMZ1pSZTRKWUtibW1mN0dIampiMzZibllGWHJGaXhiTmt5c256KzNEa1dmWmRmdDZ5SGRtcjVGNVpad0k3ZXZ2eXpKK1NHUmlRU2lVU2lMRXJOblRHUWttdjBCUVluOVZiVjNTekgxeGtDZ3hFR0s1bytpYm4xaFlDalFGUzE1bmJTdlpuWEZEZVZKMzRZWVJmY1lBdzdUTWxpQkF3bDdiUHphUjlFT0hHLzJHNnFJeG9sQjVrd01NUXVEUU9Bby9hSkRCeXREcXNZbzBUUHVtd0JUcUJmM3ZDck5UcXc4RkRpclRDcmw3Z1N6eDdEYjV3aUs3ZmhWL1dNNFpkNTBKSmcrSTEyWmUrckx5QkVPZVAwSE44dm9RczBzZktkMlByaHZKbXV0Q2UydnVnek13WjlkZkkzempHRHZsQ25MenFIWmVDcE0xWU9xanZPWmVDZ1FsSXlBM2MrL3ZDaVJZdHV1ZVVXc3VURzY1Yy91ZjdlV3ZrODg5ZGpZME5VSkVtVmszbklEWTFJSkJLSlJNZW9lZ21EbmVYNU1EaUxQNk4ySFlJejVzZkNlOEJiWHpHTGFpWWpsNXRiSzhrVXJHZ0tYOGMxdGRhbVlNNHNxamhUTUh5Y1FGc21tb0lCcHFXWWdySFpNclRSOHF1ekRGeXEzdTBablg1RTlyemJNem5jeVBDcjhobCt2WHRZdVE1NjFQQ3JpRXVBOHdpZ3N1QUlOdi9tMCtBaFVmRWJFdVE1cEw2QitmajUwVmRyRG4xekpYbk9oNzVhMEJjeXNIMlJtVUdKWU1MQVZzdisrWTVrQnU3bTVQOTcxY01QUDR5NHRLbGgzZjIzRS8va0h0TDh1WFBnMjkzdFcrUUdRQ1FTaVVTaVZBMU5TM0ExZElDbURPeHhETlkxeG1EMkZocUhoSG9wVjNrQ0R3Rm5PZFpYWFpWSE5Hc0s5bHIrTUk3WHpCU3NzNXFDdVJUUU5IZzRteW1ZTURDVEM3cW9PM1FwUGhRMWNudG1EbnJJb255ZFh1d3VUd3kvRFAxeWdGcGJ3eTl4cUE0ZmlyZ2ZETTE4RXNqekhLM2Uva00xNXQ5UnZpV1ZDc0FxZjdpdlN2eGVTS2h2cEp5dk1FSGZ6Qm8zYTFKTkdKaU5GbTZiMlYybUNCcG1lMVE5YW1FV2lVUWlrZWhvMVpRL1cxaGxBOEZnSG9QZGtWUjF1MXVMd0dERkJRYVRrZVR3aUFhWmZKM1I5bHRUY0R4YUdpbnRNUVZEQnRhTU1aSTFCU2N3c004ZHVxNlNxd3lNM2dDK04raEpRQ1YvZExUWTBHT3VEYXJLVTFrOWFtS2NSRnpHWVhUajFIVHlKUmdEQ2M5QVduQ012cFdOb21PTHpyUlI5SEVHenRNTmttbURPWVk3MDFFUEJsK3lwQWh3dmdEZzBQK1ptSDlITms4d1NqRm9xa21CSTN4azNPOElkS2lVOGtVK2tJV2dFME8ycC8yZCt5bWFHMUtHZFFlYXhzNmFOR2pZNEJmVy9RcVdSN0lNZk1xc2YrclljZHU3aDNZVEJtN3YyTG42TTM4Rlo3SjFnd1A2TFZEZHQ0WXljbE1qOGw4UFJxNFFrVWdrS3V2RGY3UGlsZjlZN3d2MEhUcWl3VFlZOEYrWUd2NG5BRyswOHgraWtuRFlKSzBiY0lCQmQvWUszRzZET2k5eFZ3WjJSYmFpd1dMWWVYeFRha0FYaGd5N0d5dU1vWGU1Y2VmZ2JUaGFFM2VpS3ltbkRSNUpaV2Fsa1FubTZ3aVRETjFyb3d3ZExleTVNbXdENzlRRFJET3dCNjNLUTR2SEhKQVJQRkNxc3JNbW9rcGo0RWdxWTYwTXRkSnozQTg0R3BYamhscEdSMGJISjQ0TUp0b2pYWmtvcnhJZGdxamJ5bHFtMGx1bDhreDV0SlhWRGU2bnBDQk5jNldBYVZYaW1MdEFBSFpKeHlta2xZZnNDZjI2WksrVEt4cTd6eTI0VEdnYUcrbExTZlRyWkxEU3lqSDhPczdEVExJckRTc29PVzRHQjk1K0RlSEtsTWs1dmtUQ0ZOQWtBTmdDc092enJCMzZ6Unp1bTVMazJldHFJbGJmbkJvOWZmek16MTVRTjJ3d25EbW83cmlXMXVzc0NaUEd0L3piZW92QnlmUjc5VldMbjluNncxNm0zNDJia2MremxIZ1ZpVVFpa1NpTFJvNmRlTVUzLzVYMWM3WXo3U0xiNENqWjFkNjBCanRkTVZzdWVBOU10K0xrSkdKdmoxTTlvcjA1b3BIUE0xdUxscFFNMG16UFlKalVxb2VkWGJXbTlqekhGSXpMdTJoL0JSeWNSTWtGUU8yT0FYa0tLOGVrejZlSUF1Rys2SFJvN1F5TjlZTHUvbE9xK0ZOSFZYbEpRdU1FK2dVWEFtckJwdmx5NlpmVys4VVVCN01WYTdZSXNhWm82aDQ3akw1dXVESVpGbkdOMENVbllUTG42YTRWK3ltS0w2a0RieVBMWG1NK0MzREZCYnE5dlIxOWdZNlpBRC9TRkgyVGZaNXpacnJ5b2kvNzdhTTVxN0tnTDlDSWNZM1pHZml1alQ4TkdEandmSGJwZCswZE4vZitManp5MkFiNDlyNi92ZVFYOTl3eWtCSlhpa1Fpa1VqVVJ4bzl0ZldUMzNuODlJVkxJZ3kyRS9hdG5Xa1hIVzE3VzBzTWR2S3FKdDdLTWxzdUZoak1iWVhVKzhudkVaMlNJeG9SQ3BjY3kwVm01VEhtYWMzNmZtTzhjd0pydFJNVnJCd3JwcWNVRHZTZjFmU00wS0d5cWFZb0EvTkZnaEJScW13TUhGcHV1MTJnNGFsRTNFTFB2TE1JV0l5NUJHZVJ0elNDb2Noc3J1a3FrUXQxWkx4R0NHczA1NE1MT2pFTytwcjQwUXRzVmprb1JtR0hCUHA1QWc0U3JxZHU1Q2tlOXFDY1Qybm9EbjZRV0lCekZRSDJwSUR1dGdEREhTRUh3M1ZFUnE0aml2bW9rL2RHMFV1UWJJWHNzbkU2VndtK0xzNDJqY1BNeWxuM2FHTGdzWTNucnZoWSs5cWZITnl6bnpEdzdwZnVQYkR2V2NMQXFteitKZlM3K3BzMzlGeXRvd1J0MnJ4MVd6dk4vUHlMNzYxKzVXZFBYUFRsYngyRi83eEZCU1ErMENLUlNPVFh5REVUN1gvTTlDL1BvL08vZzNOM2FKeDdVV1BTVjRSTkRIRmRCcFFTZWZCNmJqMlpIaFRudjExNUd6ZHdQSko5cTZEZDBVWWI0RTVOaDIzQVZneDBJSFlIQUc3SFRYamJic0IyZyszRVBzSEswTDJvdEE5Q1VpdURBQU9vZEFIOXcwMTBQREZvR2VnQWpUWVllMmFIUFZmOG5nMzFBcSs0WGdkYlVYZ3JzYnUyTTd6d3I0NjkwelhZWHgwZkpoUDV5bmRQbGRCVEJoSzRySjJuRUtqdVZGaWRTZEg0YVpKVVdiUDFqUlIwSjRiVTc2WUxRdzhub3FjVFNpV1psd25zNHdjOGp1RlhrUnhnNUdrVDhXclFtalg4S3V3Z0hlN0FnYmNRQURmVjU3RUFoeW1nU1JIZzdneFlKRGlmREVBbHVpdkRwMHBLOFE0ZUtrTkZOV2ErenZwZ1Qva2ZDaDREcWhzMmVPYXlDMGFNYTRRekxRTlBPdTF6VGMyelNXUEx3Q1RyMWRvN2J1NFQrclZhZGRNYWR2N2JMKzE0Wk9XbnBDcVNTQ1FTaVVRaVhobHYvTmc3UnM4dHExTHAvc3hhS1Yzb2Z0aTVnNldwWVdOLzRxVE8wenlpRmZHSTF0aThpMGZQR1NpMWI2alVIa282MGJ3cEdBSmJzaWtZYkJjZENxZXdEc1F1UEJwZ2RsYUovT2prNjRvemEydmlEbzB6V1dPcURkNldjdEt2d2lPanJLVTF5T0hzb1YrK1lCVDBuZllrN0dieVNLTUFYdTNTci9PUklGNFJydU03dXA1aElTWDhwSURMSTRmTC8wYS9EaFMyQURlUGl5YUpCWGhJZlVPYVgwZGFxSU1uL29GUHFaZWM1TGttWDJUcTZIUjR6c3ZBVmhPbUxYVVpHT3JHNjVkZmZkWGlQaG56STQ5dElBSEFVTzhkN0JJR0ZvbEVJcEZJbE1UQUxnWVhNNXlrcFltbWtNTGNlNmJmR0hQMzFWeTBvT3NSblZoK2hhWmxwcFdRRkhSWDlsWkN3Z3l1K2FGNnlqdHBOMjBUN0VoN0VqVTc2WlpTWW4yNTRySTY1REVuTjFNcUE1T0FWbVRweEViVlpBWXUwZWpoQ3NIbXBGKzRIVTJ1Qkh4RTJSelp2b3BTMFdsQXlhdVRzbXBGdmNhbG9yeUdYMDI0TWNYd3F4TU52NW9hZm9OZmhIN3ptWC9yNjZOSnh3SThQUWw5VS9OVUpZUTBxRjdMZEhYc29pOWs0SFArN3FKeGJaT3lNN0JGMzk0cDl1dXFjMy9Yc210V3dqbXJ2M25ERlpjdkVBWVdpVVFpa1VqVUd4aGMrL3hZMm11RFZRbW1ZRSsrV0pwd0p5a1pyZGNVckJOTndacUZjTDhwV1B0TndSclFVTElwR09WMTh1YXN3bldNTkpNWks4RVVyTm1RWUUxd01vbEFNekJ3MUYzSlovaFZzVFZibDR0QjRXVEhPcmZiTTE4bEdURGxucGUzdmZGUys1Nlh0dGtKdUM0dEpPVmV4RW1HWDVUZks4SHd5K2JUY2s1bkRzTnZzTkVEMVFRQWUxSkFXdzJ0SDVrbDREN2xnNjB6K2p6N01sMEordFpHcHkwNlp5ekh3Q2VNbjBkbXpwODdwMCt5WGdXNmFPSFN6czQ0MDFYYnpOYmwxeTFiZDkvdFpFZ0JBMHRPTEpGSUpCS0pSSGt3dU1BdHBVcHhUc3lZSHl1Ym9ZaG5TK1V4QmZOa204RVVyRnhUc0NhMlJRcmhZTFFaVGNFcXdSU01ONXBxQ25ZWlRYdDY5akl3NURzdXExYTZPN1RMd0JXYUE5RzZZRU4xY0gyRHMxc1pBSk1HWnRPcUZIbkNCWFh4UVRQNHJCcldoeG5YSEI0M2RWWjBNdUlrV2FEZ3NQUGdJcTd4QzlOakdVL3BaOE9pTDF5a3FPRlhNd1Z2a2VHWEpEdzJUZzYwOXc0ZmdCL1lwa0lwb0YzenIzSHpjbW0yWkM0YjNzRDhOUm5yQTdQZlUwcDVSOEswT2JaaWZiTXpzUDM5eGpZVTZEdW83amo0dG1YeXhJZnUvMDVmalhEWk5TdEo3cXZWTjk4UVRBVCsyTkE0Yk9uMzhWWFhYSEh6djhxWkZZWGZqU0tSU0NRU2VUQllPV211aWhRTkJybVpVSi9HU1UybFVjVmd4UlVIVmxsN2NLb0hoenlDcXdISG9HRGNjc0dvUXE5U29IUXdISVkyekhnMHFHVU1sNEx5eUhGK3FhQVJib1pMQ2dmWmd1UGVETjBvck5rYkpweUNoNkpTY0RlcWxsd3AveHZueVZKeDFXSUR5eGVIcTVDS3dZWVVHWTZHQkRlQnlnNkR6R0NWUEdoR29TeGEzU3VXQUk0NnVaMWpZa2IwcTdpQ3VqUzdkMXpheVJQQnk5WWNyclFMdzRKZGU2LzdNQU0rZXlocHBycVU0ZzIvdEhpdjl0T3Z4L0NyK2VkTTZPSE4zcDB2d005NHZpTEFZUVlzSndCNFpENmY1K0xodmlvcDNMZHdmU094K25vWWVPb2xNNkszSC96cG5iMnZiNElOMXQ1eGN5L1grNDIwNnFZMWQ5L3pJSnh6NC9YTDU4MDlOM3JyRm1SNnJYM0w5blYzeW1rVmlVUWlrVWlVQ1lPeitBbG1jVERNR1Jqc3ZRRld4VDJpRlNrbXhBY2trcnQzNkVpS0VjWXhCV09icWtvcDJzVFJVMkpKWVkvQmxxODdTK21NVDloRTdicktyYzNMUmhFalppT0U1eGJOVmJTQ0x6QmNvNXBKcFhCWURoVG1wRi9DbWZHMnRWUGRWeWZUcjNQVW1LclRtcUZmaitHWFZ0YnlGdTlGQjFIN3ZCY1VTWVZObGxMMy9TT0hxM0FFYlI0Yi9DVkZnRWRQbWU1RjN3VDNpWnFIK3haQVh5WG9tNlFKYzZZR3BtQ3JmWHMyV1FhR2hBbUJzemRsMFpka2ZwNC9kNDRiaCt3R0ovL3ludFhpQ0MwU2lVUWlrU2dIQnF0c0dKeThZcDdBNEdvOW90MmJZYlllVFdweUxNMGxqbUt0V1k2bHlpbXhxOXdLdGdqZlN0b2JQTXpTT0pkWE9JbUJJZmRCb1BOeEg2NUZqSGNIR1VJWk1pL0V3Q1hXOEZ2SklCV25UZVlxSTJlaFgrVXovR3FZTVJ1NXBDdmx6U2NHV1JlbVJpdjU2WmMvcHU0RG9Sb1pmdkZIeGI0bkZ1QjVyYWRuL1FvSXpiK3VodFEzTU0rTmtnUG9WUStIK3hiNy9oSTVHdHMyS1dEZ1A3NzVOSnpmVjRtdkxQMlN4RmR0TTF0OW50aDJrSFpwOU5iU3IyVmdPYWNpa1Vna0VvbHlNSEFXQzBwUEJ3YVR4a2tPa2pvNVIzUVd1TUI3NFNTT1VqMXRDbllDalhXeUtUaTJIY1lOblF4S2ZJb3NZaStFZGtXZHdSU2NoNEZqQTNlY3g2c3lwMFRwbDNtc1FSODQrRXMyYVRkN0dMcHNYY012MkZDODg0RFdHZnBWaE9ZSTFuRVoxZUMyeVlxa21DNWxPVHhJaG42ZGpoVjFLQ2lvTUFEWWF1UEdqWERKeU9ZSkRIT3lUN1lVUGZ6OHQwaEt4Sy9tajRlQzU0dnRMV0ZGVVJJRFQ3cHc0dnZ2N1l2bVhIM1Y0cGJKRTN0L0pLdHVXa1BvdDZtcDRjbjE5eVo0WXQ5NXh6ZmcyKzNyN2p5d1o1ZWNVNUZJSkJLSlJQa3dPT1VXTndhSXhCWFpkNXEvcCtWeTNYQjNzNXhKaDQ3RTZWMjdhS0NUZG9RVy85V1lnUlUxQmNmNHJESFBhY29vekVNRW5RSURzSlFSUkd2bXVISDJjY1RBR2diTk9xdTUzV3FtalRzazdaS2dWbzVGUGpxSWRmaXNhNXhPeXEwMWpIbllxSlJST3FDcmVQOEQwTE5oRE9Sa0NQUVlHUzQ3bWVLcUpYR0xLc0gyQ1RtbG92ZEdrUzF5SUJxbS9Dci9ldTM1WDhCRjg4L0liQUVHTlpDSVJvNlpHSVp4aDd0anVDdmNnRG5HZVNJQlZ6SDRZSlBkSkl2WWZtZ2IvNHFpRERLRC93amZYbm41d3Q0ZmcwVmZFdmViU3I5V2JUTmFsMzloMlpwYjF3SUcvdTc1ZjN1am5OTmovcHFXUXlBU2lVU2lhdjZEYVBTL3hEZzM5c1p3SzNJWnFoVElTb1htVjVJbTBlNk5rNUxMMnpOSWpoVndpaUVERFpOajhUMXJrdmdyN3NIQVBFNU9BN3c3T0JFVzdsWlhPTVhnekZXd1diaVphT3M0MjFpUTN3dGwwb29TVmNHNy84cWk4TnpBYzBRVFc0Ris0V2hCczNBa1dsY1NYdUg5alROY2tZeGhZVG95SFNWWEM1Sm9sUUFpZW9KK25hckUxTWZZZFZSMnF2c0dabkduQm5NMit6aGdYYWNZRlBCUTV3ekZGTU9keEZwb0ZKcWozNFNJWDhlRjJJbFpyOEx1R2RaQVVxd0ZXTlhVNTdrbnduM0Y0YmtLN1gwWjVWdnU1ZWpmenYxZGl6NTVMVXUvbG05VFY3L3grdVcyY2ZUMmhRMFB5QWtWaVVRaWtVaFVVTm56WTdrcjR0djByQjdSZklVbTk1WmJaVTJPQmJlV2tHbUl2elAzUkFXakxkTEI4T21UWUNzZk4ybFBMU1hDVFF3VGhSdlVyc1V6YTVSckhEd2NKVGFPVExwYTgvRElWVmZDWU91RUJIZGJnRU5ET2JhOGFnTldOZFFIUFZvYWo4YmdQVEh3SFc1REJtK1lTc0p4UFNFeVl1UE8xYUJVRWptZjhTYlFXL2VVRzlaY3IyQVJKai82Z2tOdk1QcnUzZmxiMkNwZkVXRGdBazAwWXV3RTQzN2syQXJYOFZPcXRDSkpxdm9TUjVMbXF0YlBPcU5yb1JlVFAxdjZ2V2poVWxMeEtLakFsSVYrdDIzZjBkNyt2QjF3VkRINHZZTmRQL3ZPcXBZLys5am9rMXVIakdpUWszc01Yc0JHRE1BaWtVZ2txaDZERGJ6UnhNWkNlSnRhZmFra1R6K0dWak55aWljbDFFa3lCdTFJWE1XSDY1bXJaZ1JySFJscTRnM2ZHR2N3V2pQR1hvMzJLZ1lpWExzSTFnMWl1Z0xHWndOTXdlRGdSSFdNVkd5VWhhV1NncTFyajBVNnRQYkNkZEVJd3dtNkNWaTlxVklGU1ZkTTJicXl3M1dvWkRDWUlvWmZKdktZZXlUQWxEanlQVGxRSEpSNmc1dkJCY2pSTC85SVFER1dXTTJQTnJtWm4zNXh4RFBaM0JGU0JMZytUeEhnTUFrV0tRSmN5WURsTC9Dcms1K0hlWjlYMVFKOWhYNEh1Q3krV3ZxTjJMWHk0R1ptYTZybjg5MzNQUGp3WStzM2JkNUsxZzIwZmQyZFFVbWtrV01uVHZtemhTZk9PSy9senhiSzBSYUpSQ0tSU0pTUGdaV0R3ZmtxQmhQT1pPcjBIbmhqMXdzL2ZzaStPZTBqSHk5SEhScEZxVGF4WExEeERBTWhNZVZQMExQQjhZa0laU011MWJCV01JRmtaekNhZ0tzQ0pZZ05HcGdtaEFtcURWY3dQVENSb3Q0TUdvL0R3T1ZmSVp6cnVEdUNzcG9IOVJpWEsxdndNRENwTU54TndCVXdMM2NSUGZDbytGR2J1bHJScjA1QTM5clFieUw2WnFCZmo2MC9lWVFPTHZyb2wxdDY0SzNkY0lBdHphTnpmTWpER2tpa0NIQzVCaEwzWElCMXVQWmh2TXFUNlNvSmZaVVlmbnRDRmhUaFd3dVd2ZUFGdmVhMnRTdSsvRFV5Yy83Y09RL2QvNTBFK2wxMTB4cTdJc3U5cnV3L2xRQ0c3UTZldHZBVE02NzhyTmlFUlNLUlNDUVNWWUhCeHBucHgyQUl6NGd0S3hCNzRNMWREeXkvN0wxRDNYYzF6ejY2ZHNtYXgxd0dqcUFWa1I2THJDcUhLVmpuTkFWclpIcFZoRWpKUG1xdmxaVmg0RXBMR0wwTENMeEN0UWtNWFBFckJnZk5RSk8xRjJVek1EQmdYREJDTU9aNEV4b05LclFKaDZiZ1VvL1RMMXRmMTYxY1hBMzk4dldtMHVoWGN6VzRFdWlYS2RYbG9kL1E5LzNBMjY4aEFCN1RYT0JqM3RIUndYL3lZZTB0elJsK3RSc21RWGFjbytKVUE3S0UrL2E4UnArTW5JM3Z1cWRudzJpRG9GK1hmcSsrYW5HQzdkZGkrY21uemJVQW5KRitDUW4vOHA3VjM3LzYvRi8reXkxSHBGYXdTQ1FTaVVTaXZCaGNJREJZYzVHQTRLNzRoUjgvR05DdmxaMElUTUZ1K2h0UW1wWXRGNXhXSjRtTUIyRVI3a1NwMUtoZ2VDTmZXVnJTdm1yQURDazRZMkJZajhseGpBT01TOXJKaFlTY1ZUV2Yyb2toU3UwaVpMbEFyODZ3THRrRWphY0Z2RmJxY2ZyMUhjcG9KM0hCSzFSdE9TUDlLbzQvMmRyRktzWHRHZGVxMXNsdXo2QTR0UVBlNVQ5SERpRVg2TWJobVYyZ204ZEZrenQzN29STFRqenpYQUt1T2psSmxmZkRrd2F4YkxJcnhYM1hpR3F0RTZhMlFpUHdJNDl0c0l6YVE5dXluVnVPZmVUUkRXVCs2bS9lc1BhT20zMXJyYmx0N1lVTFA5MnhzNm9TUjBHaFlJdkJraWhMSkJLSlJDSlJFUXhPdlRWTnl0N3FMN0RFYkl2QllBcVpubnkwRHZkeTkrb0FhQmk2WmtzQ3dSUzhHVEpqZWJGSUpRYU5jb1pEdmxTdGt6UXFrWUUxU2dubUdrZnBDR3ZKd0tWd0JBQTlJNXNpUVZNQzVWWFRyM3Qwa09GWFE4ekV0SmxNdjhwditOWGNFeFE2UW55NWxIUld0MmNuZTF0VlNiQkNFUmRvK05ubERiLzA0NjJaWkZlNjZtOEtKWWJmbnRVVUVDWGIyZGxGNnZIV1JCWmZGMzN5MmtXZnVKYVljSnVhR3RiZGYvdnk2NWI1VnJTRGNjM0ZxaHd0Zk9QMXk1OWEvNE45YjJ6N3ozZGZqbDdQUFAxRHk5Sythc1lXZzUvNjVwY2VYZmtwTVFXTFJDS1JTQ1RLemNCc1F0YThkaDMydGxZcmI4SGFCRmp0SFZNd05PR21tSUxwRHFZd2NJTHJMbXNLVG1CZ0FKS1lOTE9oYkk4eGNLbUk0UmRhVm1IbTYxSmlrU0ZWaTZCZjdUekJ5T3YyclB4blYyVXVkS1E1K21VdTA2SUtBNENWa3dUcmhDQUdPSWZodDdZK3o0Syt2YVN6Rm4wT3ZuM2swUTJrTGxFMTZ0emZ0ZXFtTldlZmU2bHIrTFVRKzh6V0gxNXgyUUxmdW10dVcrdU81SXJMRjFqS3RTdGFBSjQzOTF6aU5kMDJvOVhTcjJYZ2wxL1liSnZaYWJmYjE3WnYrZjdWNSs5OWFZZWNlcEZJSkJLSlJFVXh1R3FQYUticnhFSkhMcXpxdmpBRnE5eW1ZR1lZT3BzcE9KbUJhK2NPblpHQkNhVURSRlVJdTZNL1d0Y3BnMm9uTWVtaERCd0IzaWJaclRoQ09yRW9VN1NpZ1plb1Z0eGpHZG8rMm5sblcvRmFCaDh5dkMveFd0SEJOWXFoMWtwY05lRSswRS9VQUFXK1IxdnBidnZhanFmaElPYWZjWHIxSC9BaDlRMGE3a3QwQmd5SHZ2Rm93Y0RnY2laYmdPSWErTmNTOVl4Sy96bHl6RWtYdi9tSGY0L21yRmo1dFprenAyZXBSWlNNdm10dVhldExXN1g4Qzh0VzMzeER3dXFiTm04bHR0OXVjL0Y5dDJmUDBXWEhiMG5ZY3JJbGNBTFM3eDNzZXZRcm43cndTOTlxT1U5eVJBOXdTUjBra1Vna0V2WGwveURuaHRVUVdERDhXc2FIMXdwVUlZcG1Hb1h6T3NjcHJOeVd5cm12Tm9idENtM1JWSW9ONFU1SWgrU1dQVXdsQlFlZ0RXMXBWSnhOS2tZdDBxMUI2NU5oUkJCaXdweFhaSS9nWUtMT0RSb1EzSjE0SmtpTHBVeDBhR0FhNXpEblZYeDB0Q0VKelpRMmVEd3duMWhkWU9jMHRPeXRCaVNsalVPekJsVVc1bXY1eHMyQXA3TEJ5TXpVMnRVYW55N21ZWW1HdFcyNTV4Qk01VjdsTkl0YXVwdEdiZUk1UnZtZUV1QmF6NnBxQXltSUFkNjRjU05jTW5MTVJKUDhLRXNsbGo1eUpwbjJTa29jOWIzZTZUdzhhdHk4cm4zUHZudW9ra3ZjSXV0RkM1ZGFla3d3enlhb1krY3V5NXpkNGNRYytyWk1ubWg3VHViWUlGY1dvdG1aclEvZDl4M1dzVGxad2VZc2IzLzJtcS9BbXNPV2dmOTkxVFh6di9TdDB4WXNrV3ZnS0NaaWtVZ2tFb2w2U3RySkVhMjRpc0dFZ1RVMkZESGdqS3ZqUmlUREpKcDJhaFJGTGJVblFUVHBpdGJPalZoWXFiamFrS0lKb2trS1pZVEpvSDlQbVY5WWpna2ZqWENMRG5hU0pOTEdIWU55aXZkcWVreU1CZ20wNC8zU2xVSFIwa28wZDdTSnU0MmF3WHpVN3E1MVQ1UVkrelZHUko4dDE0Mi9kYjJ1U1R2bG9WK1gzTmlRYU9Tc25HeUY5emtKd0tCdG42M2ZRNyt3RTdTaWgzNUpBSEMrR2toK2pSd3pnUWRYTG9jYlE3L2k4enhBZE9pTi9ZUHFqcHN3ZGFuOUhTTm9aOWVpVDF4cktYVGI5cXl1d3BaNzE5eTI5dXh6THozNXRMbDMzL09nUzc5TlRRMDNYci84NVJjMnAxcHhTY0pudStLVDYrOHRRTDh4UDg5b0RieW15ZnlOMy9yUzNwZkZGM29BNjlRRlM2SUNWM2JpVkhtY0lSS0pSS0plWm1EV0k1cmNBSHVqZ24zZE91bUVQRGZTMkFFWXQ4d2VGVnpocFNnWkV3b2M5WkVPTzFRblpSS1BVVHFWZEJLekx6SHUwQ3pXNFNPZ09YaEVUSldZanhuVG54UFlTNmcybktncmdyNDlUNy9jZFpDR3ZxbjB5K3kvSDMxOTlPdFNKVHhWOFZycXlHR1VBcnBsVEpFaXdDUUFlRWg5Zy84VElvYmZvMHIxWXh2dDcySDFFOGExTE5yOTRyMXcwU09QYnJDdnRwbXRWMXkyWVA3Y09UTm5Ub2N4dDUzN3U5cmJuN2VFdksxOXg2Yk5XNU1UTlY5OTFXTExuMWtndGh1a2IxMEw1Nnk3Ny9hRStzRFpGUXlBWlBsNjlDdWZXdkxQajVONnlLS0JJbnZpN09uN1hUbTV0NlZmT1k4aWtVZ2s2aHNNUnE2ZUpyMWNNSnNIUzNIV1kxcDlsekVGYTljVTdCYlhWZjVhd1NpeXNtSUtqaXZxUWlNdHFtbk1tNEsxYXdpTjFqR29ETEhIRkJ6YllDdEdXTmdtUXFGeWVkN1lIUnJXVGZhWmdvTUYxQTg2cWplc1hUc3c2VXB6ZG1DTjdjQmt2K3A2MGZEYmsvU2JnTDRGNkpkM0pNN205aHhPdllkcklEVmxyNEVFUkZKQWorN09nS1VTd3VXOTlLdTVoMWplaDE1UzRxanZWVGRzY09YS2FaNXRmKy9wV1BmQm45NkJEU3pmMnRjcXRhWlkvOW5STjlDcW05Q0dsbjloV2ZhNDN5eURzUmgvMGNLbGtZWDV5TUd1Si83ck5SYWk1RW9ZdUF4OHpsOS9VWTZEU0NRU2lmcVlnWlhqRWUxalduNTlqVHlOMFYwMERyVWxuVlRJTkFpaTVJZzNBYUVSeEFJeWpEbzIyaUR1MWVudTBGRnp4TmlNTzNRS0EwZkQ3YVpXak92R0lWSzhPejNPd0NITmwzK1ZuYlpOK1ZDVlk0bDE1RExkblFXNmwrZ1hPQVI0S2krelpaYXFwZDhlY1h2V3FmUmJyb0gwUFB3QXRVMlpuUFd6Q2dLQW1ScEkybkZMNW4yWWk3bDgrTXNDaTNwWGpTMnh5NEJsNEpiVzY0YlZUNmkrMjZhbUJzdXVMNyt3ZWUwZE4yZW4zODc5WFNSaDFmeTVjelp0M2xyRC9RMlNZOEU1ZTEvYThSKzNyNUlyUVNRU2lVUWlVUTB3V09XOFBTYjMxcjRvUXAxK2o2MTlxYVIxWW9Kbzl0NWVLOXBqUm5kb1ZiMDd0SzZKTzdSdnU5Z1hPaTdnRk1PY3IwQ3ZXNW80elIyNjFGdjBtOGZ3NjZ0MXBQUFRiNExoMXoxa0tvL2JzOFlyYXlmTmR5M1UzdDRPMzU0d3BaWGZDL29KTHhEeHE4WHcyOTgwdGkwdUhHM3BkK3FNbFdOT3VoaUdCT2ZTRlpjdnNJUzViOCsyMVRmZmtCRjlnL2poaXhZdUhUVzJqU3hhOUlsckwxejQ2ZEt3azg4Kzk5SlZONjNKSHBPY05NTExGaEFHZm5iZG5SSU1MQktKUkNLUnFBWU1YQ0RIVFdxZHBMeFJ3ZG9URmF3U3daWGM1Rk1HMXBTUXRaK29mUXlzbVFyRE9obUZDakF3TVhrNjI2MHM2Zm1RNExwK1I3OEtQd2xRZVF5L3FvcWdYNTMyNklXOWFoekRiNlRYY1Eya21TMlRzbjVFUVJGZ29xRWpHbm8yNGxmUXR6OXB6TXpKYjJ4N0ZWMGFFeTkrNTlEdUEvdWV6ZGhEMjh6V2VYUFBuVDkzamx1Yk4xbWJObSs5NWJZNzNTckJyaXFlMkRldHNWdTUrcXJGYkkzZjdMS3JQL3pZZXJqZC8vak9xc3UrOGE5eU1ZaEVJcEZJSktvQkJpdW5kSkJPcTFWQVlvazFLVEpVS0NxWXRFendwaWJ1MENwTXlCenRCaE1WN0hlSGp2YS9KdTdRSkNSWXFjamRtZzhKVnIzb0RwMFlFbHluNGlNQmloVVJEQWJsa1ZBQklVQy8wUnFHSi9YS0lkWWNoUm9Qc3JxMWpxTHRHNC9obHp4c01FblZwVUU5M1d5R1g0MkowZmpwTjk2cFVNVmlnRWtOcEJGakpoaVZQK0pYa2wwTlREVzBqQjdUTnVsTndNQ0h1bDRrOUx2MmpwdmRORmVXUlJ1YlJ1YXFHR3c3YWQvK2ZEZk5idCt4YytkdVdKb282N1c2ZVl0OVdSSk9MYWVVTEx2Nnladm5Sc0hBcjIzZllsL2paOHlSNjBFazZwODYrTWF1RjhvSnowNWJzR1NFSkR3VGlVUURBb005eWJHOFplemRXT0tpVWNGeHlSL1luRVZvTmpPVzRvc2t3VkVaR0s5clBBSEdxSzZ3VHE2UUJLZU51eGNLVWJUaEtpUjVpaTNSN1JyampyQ0NybUFIbzRjSWlNTVZUYzBWOVltWXVUeHdYUmNUckhZZ1VpdUZUY0hRajUyM0xDdlhxS3R3K21oS3Y4cER2eTZUT2Iyd01NY3ZJdnVpdFo4ZU9ZSms0Rkt6bkJ5L09mam1iZ1RBOVprQnVHbVViOG5JTVJNWlR0WEpIQ3YwTzRBMTVXTXo5djMyOVQrOSszN3c5cTAvL0R0Y2V1UDF5NnUwdUQ3eTJJYUhIMTN2S3c1Y1FCYWtMMXo0NmNEZHVsaU9hTHZXNnB0dmdFbWhmL1V2cXk4Vkk3QkkxQzkxNEkxZEQzNytraU1IdTc5QW5uMzR1NHNsZWJ0SUpCcGdES3d5bUlEWjlWVm9uUFQyRzJLWTR2cDNxaFh6REl4NDJ1bEhZeU4ybUhmTDhBbXZmVjBob0djWVdJRkZTbk9GanprdWR3Y0pUTXBnQTNBQ0hKUjRPOXBoWU8xaFlNMHhNTnBzdUt3dTVsZWpmYjdldkpYVEVDRG02QmNzUjMzR1R5Tkk4U0hOUi9PYXNFK0Q3WmxHdzR0UWNkdFZ6bmExQW9jYWJnYjJZTkJ6R3EwOVlHd1VrOXk4L1BiQVd3aUEyN0s3UUE4ZUV1TkVSd2Y5RkpFUFF2d294a2xxQi9lRk5uRE9zSkh2d3Y2b3VxR0RULy9Vbk9mdS9rbjNqZWErWnc5MXZSZ3RhcGs4Y2ZrWGxoWHJkdHYySFd0dVhadUxlKzNtTE5OT25qekJUbGpLN2JZU2x5c3RzWjA4OHVpR2t6ZlBYWGZmN2NWTXdaYnFWOTIwSnJKc3Y3Wjl5NEU5dStTdVdpVHFoL3JkaGdjQytsWGw1TzMyN1RsL0pkbS9SU0pSSCt2QUc3dCs5Nk55S2I2UHBwWGlNK3c5TkxuYk4vNjFISGZvQUVBTW1lOTBZakFEVjVxenc0RHJ1b1BoUVRjY0Foa2g3aW8yQVFQZmJtTm9uNWhNZ1pHWDdrWFVmemVpR3BhOVlWK3h3VGVlUUZ1Q3p3aktYc2JHT0Y3Z1ljNW5wc3hVdUMvR0lNSXZFM0hKc2V1NmtiZU1QM09NdFk0dFY5TndaMFRHaXB2UU9vbCtQYUhTS002YkNRbG1nOUcxemxybUYyVWVjMXNxWDdFbFpqcXY2dXQ5QUR6K3pIUGRFU3FlelgzSnJwUkUvQTRzTlU0ZWZjb1Y1OWlKTjNkUjgyOEJFK3VtelZzdldyajA3Tm1YM24zUGc3bXN2aFpITGZFRzJiUHNiMHUyeTY5YkZtVFZzci9uejZVdXlyYnpDeGQrZXMxdGE0dnR0ZDA3K1BhNWg3OHJWNEpJSkJLSlJLSXM5UHZnNXkvNTFiK3N0aTg3WWQ4bXRkWWUxMGh5VTUxVVAwVmxUUkROYkZjcjVjOU5wYmlzdDhtWnNWaThVc3BOY0lXbWtkc3VtNWhKZVhKZk9lQ21PVjlnQkc0QXIzQk80bWdpWHFPRWR0WkxuUTZseHV5bVFaOHhTT3BTLzZkZjdrcEMxNG9tWUt5MUx3bDRWdm9sMXdEcUJDWGc5dEh2Njc5QkdiQnltSCt0aG85SWFaQ2M2bG1xSEIxMUdqTnowcGp6aHI5N0tQWXBzQWlhMS9uWkVxeEZYd3VsR3pkdlNXalcxTlJnYVRaNGtVWFFLZ3RsUi9MaytudWZXdjhETjduMGlpOS9EVG96WjVmdDA0NGtIdnpQMTh0bElCS0pSQ0tSS0ZXLys5RURSdzZGbmltSHVnSlRjTFpiYTVWMGY1eGFTTVhId0RyMUZsMVRVS1hvNGNlV0JBYldHcVJ6WmpJS3M2eWVpNEUxdzdlK0FyZGtUekZuc1lTSXlLc29BK09FVnRGV1N3T2Rmck1hZnVHekN1MCtQa21rWDkrNVYrbVBVaXBRa1QwQUdQZy9rd3hZM1FIQVl2ZzlWdlhLejlIWE56R1Fwc3F5NjhtbnpmV2hiOXZNMXVWZldHWUpkdDhiMi9idDJXWnBObmk5L01KbXV5aHExdGxKcXdGRHpadDdybTN2RHN5dVVveUJyN2hzUVRSOTRJMWRVZzlKSkJLSlJDSlJUeW1MY1NpdktaamxnZ1JUc001Z0N2WXhzR3NGVkI1VGNGNEc5bGtCUThzcXkyaThLYmpmTUhEcG1LRGY1S3ZIS2ZGY2xkdHp1Wis5SGM4akFCNWVpd3hZbFJpR1BEVitsZk5vU3VoM0FNcmlIelNCNWpML2J0dStJeWpWeTF4clRRMldleTIxUHJQMWg2dHZ2c0V0bFdRMzlOQjkzNEdXMkFRQWpzamNnalJjcFRBRFgzbjVRdmoydGUxYjVFb1FpVVNpYXY2Vi9Pcjd0OWhYaWtlb1NIU01ZM0FxR0JjMkJhZURkSm83dEs2Uk83VHlBSkYySEd4VkdoQU5UQVl1NWFWZkdwRkxEZHk2N0s3dFdQQ0piM2Rra2ErZ01uN3M0V3lpQituWE9SK0YzWjdoSlJXNVhnUnFteks1d0dlUVpzQ2lEMmY4SHlReC9CNWRJZzdBMmMyL2EyNWJlL2JzUzkyYVJrRkdxMzE3dGxudWRmMldTVXRvaVdWZG9Ja0NVekEwSFJkallMaGRxNzB2LzBhdUJKRklKQ3BNdnptaUlrVWlVVElZWnpFRnUrMTFtaW5ZZ1IzdG85eTg3dENBMnhEUnNDNnhQUjBTM0E4WXVCUlYzRFdWMHI1eGpMSXBGd1Eya0ZUTGJlTEdDc3dKWmxicUFNZHR5RVF3Z1BMYlNtTlR6amxtd05NSXRGWjVBT1UyNkd4VnRoVXMwbEZYem5PUmVHeDRKR2hVY2UxaXhUU0xSNGozVk5OcDBPQzl3d2NLZnNDYXgwYVRPM2Z1aEV2R256VUhIQkRGN0FqYzA4cUIxZndxOGhwUXI5OXR1QitSNGVVTFVxK2p6djFkaXo1NTdZb3ZmNDNNYjJwcXNQeHNBVFc3RFptZzdLYk5XMU5YYVdwc2VITDl2UzREcHhxUWlXQWNzcjFka3l0Qlh2THFieTlYY2t6NjZmOFJKeXBTam9tODVIc3B3N282NlhZNitRN2MxMTRuOXFEcDZvb0JMai9Vd0U0QUgwVzBFbUVoR29uYmxZWTFrTFZuREJvT0p1SmJDSGV3ODZnZlE5dkVBMlBoRWFBbEdpcGhXSU5OdVdBdllsL2phRWdsK0ZpQ1JXZU5pUm5oZUU2M1o4MDhtY0NWbFB4dXoxb3JmaEVhZ3M5aDNlOHdBTGRmbmR0ek5BYXJ2YThnRitpWnVaSmcxZkQ1a3hoK2o0ckg5akQ4dFRzN1ZGcnk1eURmMVNPUGJxQTIxY3NYc0dHNktRQThvN1hBc0ZrR1huYk55aXo4SEdueTVBblI5T3ZpQWkwU2lVUWlrYWh2VGNCNWZUQnJrUm1MWW82cUtqczB3ejRxeWEyVk4rUXFQaVNZTnpXN1NaNjUxTkFWZTJ1dTFOQ1IyekJzRFBHVnhQQ0dFeVd1M2NDbjN5eCtBdUJRZXpKalphWmY5dEtFTUZBb0JwZ2t3Um94ZGdMekVXSStjbHJvOTJnU0FUODNPVE5SRVBSTDNKNmJtaHJXM1gvN3V2dHVMMUE1cVhOL1Y3R1Jzd3k4NkpQWFp1OHcyVDFiSkJLSlJDS1JxSVk2NWFOTGh0Ulg3cFRzeENrTGx2QzJwUnhaZUlwbXh2SXdzSzQrTzNSR0JpWSsyMnpvcTJMY29Ra3lNemdXc3lScEE0YVZ4eDNhQ2VhTkxic3dMaGV5YlYxUVFGZ2J2RzFWTmhoWGlnbVhPNHJLQzV0d1dBYVAyeWppQUY2eGdnZXRUVlROV01jVDZLVEVqVlhVR082cXdvdmlmc0lkQnlPTTE0R0RWM0JId0E0eXplQjRTR2xsM0JVN0J1VWt3U3FVQlpwb1pQTkVmaVFLVjRxR2Y0MThsUjBGQVB4eitEYlovM25UNXEzZGhJa0wvRm9FZmVpKzd4U0dTY0xTTTJkT3o4WEFkdE1XeUtNaDJZbGwxNnkwS0o1cGRaeE1hKzlMTzA0NHVWVXVDWkdvSDhrNGIrWC9qcHdwa1dqQVh1MGp4MHo4K0cyUC83NWNPY25DY0hjRkZnTzd4YmZYQmpPck1keEl3Q29KN1kydkIyYjFibTVMV3BmcjJmNHhoSXdqbXVwZTl1dUh2djNjdjMvdlNEbUVjOGp3a1dkKzdLcFppLzQrWVpET0dEUVlwRVovb2s3UVNIUzhEbXdienRNbUlFNkRsa1pyR2N3L2dmZHpaVURSbU4yaEJ2Qm9MUGFXa08wM01iYVkybjVwWG1qeW1BSG5xdkxaZmozb24vaDRRS1hZZnBNTnRrclJSTllxdjlzemZpamlQZ3VoU2JDeXUwQVBIaHhOY2ttd3hQQjd6QW42UDF1VVRURGgzbjNQZ3hjdS9EU2gzNnV2V3Z6TTFoOVdZMHFGVHN1V1NQUGFrTzJtQ2U0Kzh1aUdSeDdia0dWZDRuMU5QbFlpa1Vna0VvbEV0ZFhJc1JQUC9xc3YybGRZZmtVNWQ5ZlozS0ZWdHN4WThDNitTbmZvaEo0OUZaSzZiNjRPSDNqNC8xbjh6RVAvZkNSTVlHUW5ubG4zN1lldlg4SWhrdDhkV2pGNWl6VURhSm82K1NiWWdUbXVqSWZnemNXVlhxdW8xT1AwUzQ5NzZIbGNJZzdpVEYwcHpaVEdRdWVQNW90T2NLbXZJZjBtWDRMZDlIdWcrTWNPdUVBVEFCNS8xcHhNRWI5Q3YwY3ZBQ2ZUcjV0bWVmVTNiMWg3eDgzVmJMMWo1eTVZUFhqZTNITUxkR0xYSW9ISGRxaUZQYXRGSXBGSUpCS0ora0JaS293bUZ5Vk5icThUZXNqZ0R1MWpINVhrRHYzY3YzOXY3ODdmTXZlZnIvNzIxK3UrZmJReWNLbEc5T3NXTk1MVmtmdlc4QXNpem1uUnB0clNiL2tQOFg5dXExa0dMTWwzZGN5SlZLcUFTYUZTNmRlaTcvTHJsbFU1QUpLMytjckxGaGJyeHdJd0RBYnU3T3hpU3hPTFJDS1JTQ1FTOVdzR3ptSUtUbDZsQUFOckhxRjExUldTbm52OGU3NTlmZTZKZTFKSE9FQVp1TTVvNHFTc2pRZURqZFowSEdId3J4TkxYWFlvZC9OdWhlZk9lT2hYZ3dUWkNmU3J3VGhUNlZmanMyVzgxMFE2K21xbmdlRWV6eEQvL1J3QndNM2pva21TQVd2azJJbEcwUGNZQk9BM0VRQ1RoRktCdG0zZlFlaTNPK1hWZmJjWHM5WkNkZTd2V25QYld0aHRsZ3BNUHQxNXh6Zk9ubjFwOUhiTnJXc3RueWY3WmtQanM5V0lNUk1sWmswazZsZVN3Rkk1VXlMUnNYaTFvK1E3TWRhZ1ZFRktvUUJhc29vbTJYeEF0QzFLc2VUMjRLeU8xeldHek1FOWgxR3gwZXBIL0tWYjdTSVRyUTczaUl3d1hHUVV6S05rWXFMVFlhUnVwWEJSdUtqeUxteWp3MkpIM2I5TUpSNllqam1JNGxWb2FSUWFIT1dRaXNaY25qRE9uQktoWDhWTzZEaFpNcUZmNWFGZjVhZGZsVWEvS2dQOXFrTDBxNnFoWDU5L3RiTlROQU5XOWhUUWZ0bGIvNEZPdndmZjJQWE05Mit4cjRQWXFpbEswSkdET0ppY3EwaEVUS2tXVTU5Y2YyLzE5S3NDUjJVUVVYekZaUXNLSkpHR2cxLytoV1VKSTJjSkhIMEt4a3BTYUpGSUpCS0pSUDFBV2JMdzVIS0hadXNZWlhPSHhwNjhITWlraGdUNzl6TEZwRXdxL3ZCc2hRYXMvYVpnNEZydVJNZ2lkMlBYOEt1UVJUZWhlbEY1b3NUU3I2ZWUwckZOdndubkhsL0hOQVBXbE1sWlAwdjE5ZEVra3dGTEQyejZmZWk2UzU3NS9tcjdzaFBDd0JrRkE0Q1ZKd016aE5LQWZvdFY3aVc2KzU0SFNTWGh2QVdFWGRrZVlHSm51NG1PblVsWEFzeS9OVkxvVnlRU2lVUWlVWC9ENE9RNzgyS0Znck16TUdlY3EweG1Dd2tlTW55a2IrZUNSWDNKd0I2NkJGVnNOWWJUckF4Y0luV1Q0bXJDR0RLRmZoUHBGL1ZRUEZmdDhCSFI1TTZkTytHUzhUUG0wSS9PZ01wMzlic2ZQUkFkRmp2eHUzSitlVkZlc1FiWTVWOVlGbEJsNFBsY0UvcmR0bjNIaXBWZkkreGFmVlZlTzM0U2xweGdCTGIwQ3lzd2RTZUJFNGxFSXBGSUpLcE9OZlpKckVtaDRGUUdaaWhhRnpFRk94Uno1bDljN2R1ek15LytHMUxWcC84d01GMnE0OE9TaFlGTGlINFYwN29QNk5leHprZEp0ZUtMd091UUhERzhrdytOT2dBNDdnZmNrNUs4OUt1Y0lzQXphNVVFSytIeGt1Z1lsaVhlZlh1MlBiWCtCeSsvc0xrbW5zK1dmaTlhdUJRNlA3Zk5iSzNlL0V0d1BkRGQ5enpvU3dkTjJIanllUitUY3kwU2lVUWlrYWhLK3EyOVQySzE3dEFaS2lTcDJybEQ0eDVtTGI3dWhNbU1nK0VKazArZnRmanptTjc2TndNRCtvc3pNWHNZdU9RY205NmozeUFsTXo1QU91MjYwQWtQWG5BbU1ubzVlTmRpRzBkMW1NQWNSVStuVHIrK2M4VUFKeVRCNm80QkZ2b1ZlV1hSdDVvQTNRVDZ0Yng2NXgzZnFOVTRYU013U1RTdHlxRy9pejU1TGN5QU5YTHN4TW5uTFpTekxCS0pSQ0tScUJyMW9FOWlnZXpRa0hFWk5PbXhrR0RjdzVYLzc3cXpGMThYK1VMYmliTVhmLzdLLy9ZUTVNSCt6c0RzNGZZemNCMGVKdWpDVkJKdVZYbzJNSFVZU3YwY3IyV2lGR0VZUlExWGFqaE1JUjJtVFFPN1pMRGJNN3RqeHIwT3VJc0NOalBnTkJpY3JrMVRWTmJ1Vm94Q0kxU2VoRzlLN1gwRko4R3FyMGtTckpQb21BZTZKQUZsQm8wY2c3eU9OMjNlV2hNYnIwK1dSVmVzL0JxazMwRFZPejlEWFgzVlltamR0ZE53aXgwN2R6M3kyQVl5aHJPWHJwQUxSaVNTNzNhUm5DbVJxUFpYdSttSmJlRXN6NlNVaXpGSnF4aU1NNGIwbzduVjNYWGpaaUU5SVBJaHc1aTErRHI3aWpJMGh6MGorSW5vTWNpczdOa2REWm5RUkIwYU9FSTAybTdjakh2UTRSZzAzcG1vRGR6OVN1TTRxN1VoaHozTy9oeU9zNUl3dW83U3I2L3lrdGU2eXp3Sm9EU3ZFa29OdTV3YmIxRnpvNktiNDhwUUZRbjZKZFdvRWg1dkpCaCsyU1JZMlYyZ200NlBNWUJOZ2lVNnhrVHlIbS9idnFQbkFOaWk3NXBiMTdyekxZdGV0SERwayt2dnJZbUZPY0RwS3k1ZkVHWFlTcTBKUFBtOGhhZDhkSWxjRENKUlA5U3BIMW55M01QZkRmN3JEYWx2c0cvbG1JaEVvbU5hbUJiaklrbStva2NxWjRVazQ5UllRc1k1Z01HNFdkZ05yQjZVVWlISlYwNnBQSm1wSHgyZ2E4emtzRHhTdktkYUF3YldtSUhkTm1SVWtJRzU4a2dhbGtlcVZGMHlkV3hWWG8wTC9McjBhM3hNcXpVNjZkRUttRWlOaHllMVcyRTRBN1VHYTVsYTBHOWtIcTRWL2ViVDRDRStBQjQzWTg1UjlxeFdIajFuMFRpYytTbW9uVnZ6cld6YXZOWFNMOHc0UldRWHJmankxOWJlY1hPdHRuamxaUXRKaW1tZmh0VlBtTHZpVzNLMWlFVDlVL1ZqSnk2NjlmSGYvN2piaC9DVWp5eXBIeXZGdXVXL3NFZzB3SzcySHZrc3NJV0Nzekl3NWxqRjFlQTF2aDVTcWdTckVCT3JaT0NBTFUybWZpaVJBbExGSllMQmhnekh3RXhkWHd6TVBnWU8zcHA0Vkxxa1BQU2J3L1licHAxU0hydXVab2swalg1Vkh2cFZ0YU5mVlFYOUtzZi9PWWY1RjlDdlNCUUp4cjUyN056bFJzeFdJOXZoc210V1hyancwNFIrbTVvYTVzOUY3RzIzYTF2V2FydFhYTDRnUzdNeEoxMDhkY2JLSWZVTmNobUlSUDFXSThaT25MWDBpL1lsbGJwRklwSElZUWZWWnhXU1BDdHEwc1pUSGlrTFcrbXMvYUNDdmRvWEVvd3FPV2wrZDl5YVJwVVZ5YzdSRXNHRWNFczFvTjlFc3UwOStpMlE4RG5PbHgza3ZGS2UxVlZTeFdydHY4aHlCUUEzallvbVNRYXNFMDV1bGErUlkxYW5mK3h2NE50dVUrMzJIVFZCMzFVM3JUbjczRXRkb202WlBQSEo5ZmZhMTlWWExTWU1YQ3Y4Ym1xa2dBMDFySDdDdUpaRnA1NzlUODBUTHg3YU5GeXVBWkZJSkJLSlJBT1NnVWwyNko2b2tIUTBNYkJDRWJYZDVYcDFqekJ3M1VDaTMzNXMrSTNtN0hsdUMyS0o1dEhWZjN6RUFuWXNxMkhNOVBxR2FZZTZYZ3plQmhHNXEyKytnZEJwZGxsK1huUHJXaC9LWG5INWdyVjMzQnlFKzlxSjl1M1BRK053WUFRdXZHbW9tVE9ud3p6UHAzLzQ2NFBxam5PYjFZOXRsR3RBSkJLSlJDTFJBTWJnNHU3UTJVS0M4L3RDNjlyNVF1dEN2dEJvTFkrcmM4Q2FwaEs0cStMeFJJRzlPZU9Cb3pWSytlaTNwSHVMZmptYmJiK25YMWN0WTVxemZqeEFCcXh0MjdZaEFCNGhBSHhNYTF6TElnaUhsb0V0aUZvTXptV1A3ZGk1YTgxdGE4OCs5OUt6WjEvS3J0Z3llZUs2KzI5ZmQ5L3RNTm5Wayt2dmJadUpIQkJxWllKdW00RzZmZmZ3YnJiWjhhZWRLQmVBU0NRU2lVU2lnYzNBWktxMlZZSjViMnFQQTJ4RWVEcGM3SFlTOWVDRnJGNnlBeXZpRGwwak8zQmRWdnAxRWo3M0FQME95S0Jmc3VLQk40c1cxQVl4d1B2Mzc0ZExUamo1RFBucU9KWVZ1QVR2ZnZGZU9IUGo1aTMyWlVsNC90dzU4K2FlYS9IVkxWWVVtRmczYmQ1cTZkZSt2TTllbXJwcjh5Ny93akkzejdPZDg5QjkzN0hZSE5VbGlwSkNFNExOcXl5bGxlcUdEUjUxNm5pNUFFUWlrVWdrRWcxNEJrNjFBeXMzdDdQaTAyS3BYalFGeDFtbVNEb3VsSnFyVit6QUtzckZIRzJsbUIyNHJ1L3BkeUNudkhLZjJSeDhFeG15NXJXZVh1QXowdG5aS1Y4VUlnU2l6YlB0YjhMQWtJUUw5M3oxVll0dnZINTVBbzRHSWNFV2VpRURmL2FhcjFSWkdHbnk1QW53N2J1SGR0YzNUQ050eHMyZU5tallZRG43SXBGSUpCS0pqZ1lHVnJoQ0Vpek42OUtwR2xEdTBHRlZuZ0JwZTVhQjhWQUxNSENkVnJDaUZDa3dGYUdzaHZ1czR6R1J4d1BoN3FNRHhMUkIxR2dBYWhxTlRuWlVsVWlIUlpub3lXT25jVC9SdUV4OEFqUjU3a0pYaDBQQ1NHejhLNWFYRnkrRDFEd3VtaVF1MEtPbXRBNzBlZ1cwWkxlUkNnelpqMTNNd01PR1Q5ajkwcjJXRmF2djFXS3RSVi9XNnV1cWJVYnIyanR1WHZTSmErTkx0SDFIbGNXQkNYTC81d2Z2a0FiRHh6Wk92T0IwdVU1RUlwRkkvZ3VMUk5rMURkY250Mi9oMWQ0dlBndUcwaTBlZzNaR2lkc25ORFpjTTNZbVhoRXlLTk0rbXNPdlRzWUE4Y2t3dzNENkx4Y0xkbm96M0lhaW5nMFlxa0dWamloekczY1ZWV2NVVExlRjRUUkFYV2dyamN2OFlyc3U4TU5taXVqaWJyV25WckRqL0UxZHcwMEIyeTkxQksvOE1kcTNMak1NWnFieVpsM2Ird29Lajh4UkJza3YrK2s5K3Y1UHlYL2VqQm81T2M2ak5xeCt3dFFaS3p2ZmVucnY2NXNLWS9BVmx5LzR6RlZMcnJoc1FiNjFMdXRPamdVcklWVlpISGpUNXEzdzdlQ2hvK0RiNDA4ZFAvV3ljK1FpRVlsRUl2a3ZMQkxsMG9neEU2Kzg5ZkhmLzZoY24veWpTK3hiMDk4K0N6MmRGb3ZhVWJPV0NNWnRvRXR6N2hMQktqSzlscTNDWENmVTJHdEliNXdkT0pnMnBFMXNoUTRMQlN0bVpyU0svVldYUUwrS28xK1ZTTDhxRy8ycS9QU3JDdEZ2VW5SMUQ5Q3ZlNFhuS1lNVUo4RWlaWkNrdU9JeHJ1RmpHdysvRVllRk56WFB0cTlEWFM5YURENnc3OWxjWFMzL3dyTFZOOTlRYkJoWFg3VjQ0K1l0TUlHV25XNXFhaWpXWWVmK0xoZUE3WjdXajIwY04zdmFjRW4rTEJLSlJDS1JxQ2dEejFyNnhYNDl4SUhBd0xvMkRCeTdPWWN1M3p3RDY4d01yTk1ZV0NjeWNKQUU2NmloMzNURGIwL1RiMVUxa0VBU0xQZGpMTjlseDdJc0VMNzgySy9JelBxR2FmYjF3Wi9lT2R6MTRydUhkNzl6YVBkLy9vbDZFZGMzZGpld25Cek5XWFByMmlzdld6aHY3cm5GUmhMWWV5RUQydzdiWnJRV0tJeEU0cFpuZituVGNwMkxSQ0tSU0NRNlZvU1lWakVod2JuU1l1R1VWQlhPaE0zNkNRTkhpL3FVZ2V0NmxuNUpEdXNlb3Q5c2JzKzlZZnZGQzF2R1pBWmdRTCswQnBJVUFUN20xVHhqMHU3Tno3KzMvN0M3YUZEZGNTTkhuV1ZmeVQxQUJsNTJ6Y3BubnY1aDRkamQxZCs4d1MwTzNESjVZaTZvN3R6ZkJTbDZ4TmlKUXI4aWtVZ2tFb21PT1FaV3ZXZ0tac0c0THhrNElQWStZT0RTZ0tSZlVxaXEzOUF2Q1FCdUdwN2QvemtPZ0NRcG9FODR1VlcrSDBRblgzWk9jWDZlZURHTXNPM1l1V3ZWVFdzSzkyYkorY24xOTVJVVZvcytlVzJ1NHNBcnZ2eTFLS2UwMWZpejVzZ3BGb2xFSXBGSWRPeGlNR1lLM0NCbmxlQUNtTU1XQVdiQnFvcm9WRlROSjhKSmh3ZTF6OE5YSlpZbDRwRFdCN01sSG5IN09mMTZEbXVmMjM2UEhEb0FtN1JObVZ6Z1V5QTFrRVN1R2lhUExzekFnK3FPbXpCdEtaeXo1dGExdVhqVlplQ0g3djlPVTFNRHVHaTdQdjZKdnlWaHZUNHR1MllsTlA5YXpWcTZRazZ4U0NRU2lVUWlZZUErWTJBZXNuU1BNN0RxQXdZdWNZaXIreGY5b21jUy9ZQitOYmdtd0YrcmcyL3NLb29VY1Fhczl2WjJ1R1NVV0lCRlpUWFBtRFQ5cnk4WTJqaTh3THIxRGROT0dEOFB6dm5zTlYrcFpqQnRNMXJYM1hjN25OT3hjMWQzcmVCRUJyWkxGMzN5V2tLL1FZWkdPYjhpa1Vna0VvbUVnZnNaQTRkMFZTYTFHRi83TFFPclRBeGNDc3BmbVhMNW9xaStFWndERnFHVjR3YWtEZDU4MkNCb3FjUHBhQ0krTHFpWnBqMDcwN2lUcUZRU3N5M2Y2azZiU3AvbHJjTUIrRllrL1N0MTRFMEV3UE5hVDg5NjBmc3pZQTJwYjRTYkdLQXZWMFplK1Y4ako0OCs4Lys4YU1MYzZRVXd1SG5peFlQcWpvdmVibXZmc2VhMnRkVjhVYytiZXk2cGdSUVVSdksxdDl4NzhtbHpIM2wwQTNtK00vdWFHK1hNeWt0ZThwSlhqNzZtZlhSSmxGS2t1ekxxUjVmSU1aSFhzZm5xMTNla01WYndvSUdReEcyZjBOZ0xQcm1KS2VKaGh0cXlnMXZJd0E3OW9jRzRUT3NqUkdBMFZTekpFbnIxdVVBN1lLNDlObUhYUHF4OER6QTA5d3pBdFFacjVoRUltU2FkTU04d2l0bCtkY0xUR0xvaTk2d2xLTHBkUkFDQWFRMGtNWTZKZ0FZTkd6emhndE5uWHZleGt5ODdKMWV0b0c1SDZLbklFWHJWVFdzeU9pMzdkUFZWaTVkL1lSbWhYQkpnSE9TN3N1aTc3SnFWTU81WGxjc2F6L3ZpLzVBMGJ5S1JTTlRUc3ZjU1YvejN4MmN0WFdGZmRrSnVMVVNpZ1dBSFRqUHQ5cklkMkNXeGFxclZZa3N3MkVTYXNaZGRoSjJLV1R1d0F2N0xkV1dFRHpzMWptOTM5S2VTV1N2c3hZQ0ZCcVRqaG0wVVNicU5JZE9FZ3pIaEloTU9tdlRnbm16U0NleWZUb01CczZCTFU2SXB1bEc0b3NIMFM3T3VxWDA0Q1ZaYnk2U3NsenRJZ3VYKzB6bzZ5OVViK1pLclNxUFBtbVJmNyswL2ZQaU4vZVZYNXdmdnZWOWgzYUdEaDQ5dHNxaGNQN2JSVGovLy9aOTg4Rzczb3BHanpxcHZtSGFvNjhVS21uWjJXVmd0WEJZNGtGM2Q5Z085bWdPdWJtcHM2Tmk1aStTTEp2VGIwbnJkb0VISHlaVWdFb2xFdmNQQWJaLytvdndMRm9rR3hoMnBjWGpEWUE0eXhta2ZOallZbW1ETDFHWW00NHBSaW1kMm5IQmQwazlDSjJHaVprTkdpSHFMazBRYnludlJMbFRtb2dZaHlKVlRXdGR4U08zRzFMcHBvdWtEQTYzOE1jTnhyS3gybmdqNDQzNUpVMjVSUHR1dlRuaHdVbFc1STRmUFE2cXRMeEt1S1dXUVJOazF0SEc0ZlIxLzZ2aUVOaE11bVA3cWh1MlY2V2xMZi9mTWY0MFdyYmwxN2RWWExXNmJVVldjdVZzWXlYYWJ2TW9KNCtlTmExa1VzTHFjUkpGSUpCS0pSQ0tLSGtYS0kzbEtCQ2ZVUmlJZDZ1d3I2c0Q3MkpBYVJhUWlrVXFxalVRN2lSdmpFZklGa053NlQ4RXVoRFdRYUlPNHJGT0pvVjh0OUZ1RWZ2Yzh0d1hPYm1rZW5lTXFCMG13U0Jab1NZSWxxbExqUGp3MUl1VEJRMGVSYkZqLytPV2JxdXlmTFl6a1UzM0R0Sll6cnF2UTc3REJ1Ynk0UlNLUlNDUVNpWTRoQmxhWkdJUnZUOURHbTVaWWViRkxwVHBSNDV6SUNkaVY3QXROZHFXVXpSYzZEZVcwOHNiaGxqajZWVWNEL2JwbnVoZHR2OTBBUENZUEFJY3h3R0wrRmZXRVRyNzBIRXVid1RUSmhyVng4NVpObTdkV3o4Q2tNSktya2FQT3N1aHJYNWFCZ3prTmswYkxxUkdKUkNLUlNDVHFjUVpPd0xSK3lNQSt1RXRsWURmL004ZkFKWTUrL1lXRGsrblhOK2crb1Y4eW1KNm1YMTJGQmJoK1JEUjV0SnAvcDMwRTU1Lzh5SklDblJ4OGM5ZTJIOXhpWHdmZjNDVmZpYmxrNmRjeWNHVzY3cmpBQUJ0cDJUVXJxOTlFMjR4V2toUzZ3c2JOc3lkTVczcnEyZjgwNmJUUFJlZ2JhTnpzYVhKcVJDS1JTQ1FTaWZxQWdYVS9abUN0Q3pLd3lzVEFKWlorMlRyQzZmVExOanNxNlJlYWx4V1hQYnJiQXR5Yzljb2VIZ053UjBmSFVmbmhyVDcvcElYZVIvN2hrbC9mdTlxKzdJUXdjRjRkZityNGhzbWpJeWdkUERUT3U5YXhjeGVwelZ0TVYxeTJZUFUzYVVvdHk5dGtjNEhzWUVhS0JWZ2tFb2xFSXBHb1R4ZzRwa045dERBd3o3QXVBOWNaam41cFBpN1B5RXdHK29XbndCU2wzNVJPZXA5K3VZdnNkV3dCYmh4ZUpBUFd6cDA3NGR0eFo1MTMxR1JxckI4emNXYVlmN0xBVHYzK3h3OUVWYWJzaEgwYlo3TVVaVlBMcGVmODVydFBCaG1oSjB4YjJ2R2IyNkpGSzFaKzdZckxGelExVnV0eXYveTZaZHZhZDBDYzN2djZwbUgxRXl3RHcyYkR4elpPV3p4SHNwQ0tSQ0tSU0NUcVRVMzl5SkxmUFBMZDRKWnlTSDJEZlRzdzdrWUs1c1JTU2ZtdVVFc2Q1RWVtYlhMbXhJb1RSVmVSRXd0MW9neVR0WXZ0TFV4OVJiY1lUc0NjV0NXV2ZnR0Zab0I3eFhsdE8vU3JFdWczNFpGRGFpYzlUYjg2RS8yNlZ1QWNOWkNheDBhVFI2c0ZXTlFmTkxSeCtMZ1BWN3lPNnh1bVFZZmt6czZ1MU5UTkdiWDJqcHZiWmlMWC9UMGQ2OTQ5dEJ2UzcrbC9kVUVVa3l3U2lVUWlrVWpVT3hveFp1TGwvLzN4dHFVcjdPdnlnVlVUdTJmdHdLcFdkbUF1UlZRaU9YSjJZRVNlR2V6QURJZXFKRHR3S1lsK25kMUxvVjlkbEg1NVgrcytwTjhpdGFmM3ZZenFuUmFyZ1VRQWVOeVpjK1NyU2xSRG5YakI2UmFESzFjWGpnUmVjOXZhenYxZE5ka0tTUXI5d1ovZWVmV0Y3OXJmZG5yMGpFbEN2eUtSU0NRU2lmcVFnZHMrL1VYN0drajBHd0ZIcnV5OHhSaFk5d01HMWtVWVdLZkY4MGJicVFNMW95cFZvOHFXWXRERWdGMkFEZHh0RzVBN0N4UWxocHNJamV5b2NkelV3SHJGYVowb3BjaVFOQnlKeG5aOGJpM0ZOdE40bFlTV2FQeVJnMjZnSEJiZ3BqZzhraVRCQ28rL3lEa09SbzVNUVUyNTlKemZmdjhuZGlMd1RPNTg2K253MnV0YWRkT2ExVGZmVVAwbWdxVFFGeTFjYXZzTTVyei8zcjZPSGJkOWJOV0RsWUpNY3U1RUlwRklKQktKaXQ4VjYvaisyR0RxTllhN2hkYnBqUTNiakd1VHRGWThYZkZJamhyN1c1Wi9PNXVPZmFoajVNTjdSem92dDJPM0VnNDdXRkR5ZUQ0ckVrM3N0ZjB5RHdteTJYN1ptT1ZxYkwvWlhacVRtaFY2b0tLVXZidEhBSkRML0J2V1FGSk9HYVJSVTZRSXNLakdHamxwZEZRV2VNeEpGOE5GYTI1ZDI3R3pOdG5GMm1hMEVwWis5OUR1MzIvK0gzTDhSU0tSU0NRU2lhcFNkdE91S21RSFZtbFczMnJzd0Q2bTAxNHc1R3Z1S3FidWtVcE91aHd1S3lYUnI3dWhWUHBsMkRDTmZyVnplbnFmZm5WVjlHdi9GamYvZGdOd3hSM1VOZjlLSFdCUlQraWtqODZvWEhwRFI1MHdmaDVjdE9xbU5iWGF5dFZYTGI3eCt1Vnd6bzVINzN6eHh3L0k4UmVKUkNLUlNDU3FNUU5uVDFxVWtZRlYxUXlzQ2pHd3pzbkFMbzBtaHQvcWJnQk9vVitmcjNaaUVHOXUrdFVGNmRlLzU3bWZaRlJCdjFaN25rVXBvSnR5cFlBT1hhREYvQ3ZxSFExdEhEN2hndW5CZFBQRWl3ZlZIUmN0dXZ1ZUIydGxCTGF5QUh6RjVRdmduS2YvNTZwOXIreVFVeUFTaVVRaWtVaFVTd1pXdFdiZzFEYXBES3p6TTdDZjRQd01yTE15Y0xpZ3BOTG9WK3NjOUt1TDBXOHFseVp3YkQrZ1gxZHRVeVlYdUl5SkJYaklDREgvaW5wS1l6NDBOY2hFWmVtMzU0ekF5a2tLZmVSUTEwOXYrUkx4bUJDSlJDS1JTQ1FTSFhVTXJISXpzRTZpUDU2QmRXWUdEc2ZjRGNDbW5HM0tkT2Q0aWliaTFrYmhsMjBNWnBKQmdKWnhWOTNUd1lSbUZybEgwTmNTVERNanFleEYvTmEvRnR1R05QTjJ5TGZmODl6UDRlVXh1WGwwMWd1M2VWdzAyZDdlRHBlTW10SktELzR4L0hJbHg2U2FsNlhmU2FFajlLaHg4M3JPQ056VTJIRG5IZDlvYW9xZjV1eDdaY2ZULzNPVm5BSjV5VXRlOHBLWHZPUWxyMnBmaVlTU2dqTUo3RU1nTHFGTkFsdmhyU2lIZ1JuV2M1ZzBvUk8wWFRRTWJXQ21NRGdlWFVtQ3BWemJyL2FsbWNZV1Y1M3NpcDNCOXF0WkkycEcyMis2cVRadHJSNncvUVpxeVE3QUNSYmcra1o1c0NYcU9aMXcxcVNnSkZKUEc0SGRoRmd2L3ZpQlY3ZXNsMU1nRW9sRUlwRkkxTC90d0txZ0hUZ1Z4elJKbHFXd3FUYWRCTFV2SVJaamJVWURLMFV1enVuMFMvZGRKMW5NVlU3NnplY1huampDbnMvNTdOSXZpUUZ1R1pNWmdKdU9qeVpKRFBEeEVnTXM2bUdkMUN0R1lGVk9pR1ZmY003UDFvZ2p0RWdrRW9sRUlsRS9aK0Jzbkp4c0RjM0N3S1JsS2dNVElFMWdZTG9kWGNLYlNhUmZZUDVOcDErdDZPK2psMzdkKy9nY0ZtQlFBNm1qb3dNdWtSaGdVVStyNmRUeEl5ZDFYNnM5YlFTMld2M05HMW9tVDRTZm11Y2Z2Vk5PZ1Vna0VvbEVJbEgvWmVDc25KeThWaW9ESnhaR1NxZ0VsTXpBaW9mY0VrUkJHdW1ja1BqS1BhN0oyYTJ5MEs5S1hvdWpYMzQ0ZWVoWFZVdS9WdnRlUmxsdDg5VkFDbE5BdXdBc1dhQkZ2YUFUdzNUUVBXMEVibXBzZU9qKzc4QTUyMzZ3V2pKQ2kwUWlrVWdrRXZVVUEyZkhITzNwUzJmbjVPUzEzQjUwT2kxcnhhYUhUbUpnTkF6Tk1uQXB5bmtWSnhxS3RtMXdMMUg0Y0dVUm1LbFFvREZhcWhUYVJCQ1ZISytvVVpvamxPOEk5b2FIWkJKV1QyeERGMlZzcVpsMXdldmdtNGdUbXVyejFFQUtMY0NFZnEyR0RHK1EwSDdKZ3RYVHI1RW5qZTQxSTNEYmpGYmlDUDJMTzFiSktaQ1h2T1FsTDNuSlMxN3lxdGtOczhGTWxCMTJLQ1hwRk1neXVBM0JSZ2JmdEVOOFllNWx1cFR3cVViMy85d2VhVGdTclNpVEttQnZOaXAyZ2NibzdDblN5eEEyNi9udERUdjIybjVweHF5MG5Ob0YydVI2aHBFbjY5VWhETUQ1TE1EMTlTd0FqenR6amp6R2dwcDYwWkloOVJXZmNEdGgzOG94cVpXbS9CL245STRSV0pVZG9XRkc2RDNQYmJFdk9RVWlrVWdrRW9sRS9jNE9ySFBhZ2RtOFdUbzlsSmRMaU9WUHllekJ2U1NZUlZaaFBXakdwZGZ5dTVkU3dsaG5wbCtOd0ZkbndOY0JSYjlXT3g3OWJ0ZnVsNkszRjgrYU1mK00wN05lb3pNL0hQeDkrT0dIbjNqaWlXajJpREVUcDM3a0UvSVJqbVNodCtXQ3k0ZU1hQngzMW5sei91Ni8yZU1qeDZSV0dqUnM4Skg5aDk5NWMzK3BOTmlZUHgzcWVqRmExTG0vNjhyTEY5WndXOE9HRFIwM3R2bVJ4elpFY3c2OXVVc3VkWkZJSkJLSlJLS2VZdUJjNEpNMzFGUmxpQm5XV2NnV0xUVkp0SndFZmNCbTdOMW95YnZoTFBTcnN0T3Z5a3EvV1E2MHorTThJLzNtZWhDU1JyOVc3K01rV1BOYU05TXZ5SUMxZi85K3VHVHNXZWZKaDVmSVF1L012L3lpZlFuOTFsd24vbmt2UlFLcmNrWm9tQTFyejNOYjNoQWpzRWdrRW9sRUlsRS9aT0NzMUpabUs5YmFTMlJKL0tpVGtKUHBYK05kNFRkYXltTGE5dEp2aGoxUEc3MnowWXlIengxRGR2ck5uaEl0QS8wR2QvRHdiWTRZWUpBQmk5UkFpdHg5UmFKZTBKREc0U2VjMWUyNjN3dVJ3RlkzWHI4Y3ZuM3h4L2ZMS1JDSlJDS1JTQ1Fhd0F5YzJrYnJkSGJMWVVQMTJvZjlEQnhsZ2ZZT1ZIdTlydUVxUHFkb2wzNTFocU9UMFlEdTl0QjM5T3ZXUU1vUkF6eDRjRFRaMmRrSmwwZ0thRkV2cXcrTndDODkrWURVQkJhSlJDS1JTQ1RxTVFaV3VSbFk1V1RnZkcxMEZnWm1Xbm9xL1JJc1pSZ1lkRlZLcFYrZHNGZStoRmdKOUp0ZzRNMFlRdTBqMjc2Z1g2cy80am91T1NvQUsyUUIzcmh4STF4U0wxNitvdDVWZ2hIWU1uRE5OMGZTUVlzWHRFZ2tFb2xFSWxHUE1iRE95Y0Jaa2wwVjlwZk95TUJwT0puQWQyN2VadEJWaVYvQWh2NG0wSytUZEN2VGNGUG9OelBaNnZ6MDYzMDZrbzkrclVnTnBKWXhlUUE0akFFbTVsOVZqbmVWRDZ5b2wrVXpBcSs1Ylczbi9ocGJhQWtBNzNuMjUzTDhSU0tSU0NRU2lYb2FoYk14Y01hRXovbHR4Y2xKb2ZOQ1pVSkNMQTFYUlJzdDVVNThsYUhvVVRyOTZnU1d6a20yV2J6UFZiYUUzZm5wMXdYZytXZE16N0Z5YUFFbUFjRGkveXpxRTBFajhNamp6NHJtZDNaMnJibDFiVzIzMVRKNUl2U0NKcDRVSXBGSUpCS0pSS0xha205V0JsYTVHRGcvSjJjcmpKVEN3SHh2bnQzQkRGeEtKRW5mYnZGSFZHWGcwV3lkNjF4bjBuL21QUDBrbk9QODJ2ZnliK0RieHVIRGM2d2N4Z0FUQUI0c0diQkVmYVR4b1JGNHpFa1h3L2s5WVFTZU4vZmNhRnFxQVl0RUlwRklKQkwxSGdNbm9GQks0eXowcDlQbStaMnRkVUwvU1E3SUdhaXY4cTdPbUpCK1RkbjRxOFB5U1ZwMy96WE9pc0VjQS9vMElVR0hYUmtEb05xQVp0RjJEVnpxV1JTdkVtNnVRQnZTakxTTXhxQThqVE9JV0lCelpNQlNzUVdZMUVBYWQrWjV4c2duVmRRSEd0TFFiUVRlKyt5cmc0ZU9hbXFlM2ZuVzA4SDh6czZ1OXZibkliSldMMmdCN3Y3WXlUVXZFb2xFSXBGSTFITXlpSDhjNnRIb2JvdzA5clUwaGR2QU9lVnBrNzZ1SVdNemh2WVdyV0lNdDFPV2NFMmNCRXVUWE1vUW05TnR5dUhLbVZKYlZWSDBLRmNibGNmSFhSVzBBZE1rV05samdFRVJZSklCU3l6QW9qN1UrUE41SS9ER3pUVTIwaElBRmk5b2tVZ2tFb2xFb2g1VXJzRFA1Q3BLQ1h6bmtsZU5DaU01eU9seDdQWFZLZ3BWNHVuWFYrelhrL2pLUzcvSlI2ZGcwYU9NeVp6elpEbXJFZjJxWEZtZ1FRcG9xWUVrNmorS0lvRUhEeDBGNTIvYlhtTkFiV3BDRDNxa0VwSklKQktKUkNKUlh6Snc3eGNIems2Q2lqVzc1cTdYcTd1VFlDVUJ0OThoMjBsOHBXcVE5cm5XUlk5VW9kT1pSMDRHck5OenJBeUtBSk1ZNE9NRmdFVjlxc2dJUEt4K1FqU3p2ZjM1Mm01bFd6c2lhaW45SlJLSlJDS1JTTlN2R1ZqbFpPQ2FKSVYybHVya2hGZ3NBNFA1SmFXdzhUY2hxYlNIZm5XbU9zWCtvZlJDMGFQc0p6S25hbElFbU5DdjFSQnhnUmIxcVNJamNIM0R0R2hteDg1ZHRUVUMydzdoV3luOUpSS0pSQ0tSU05RM0RKd09ZbHp6YWdvanBWRnVNZ3hxWDBJc25aNEZ1WlE3OUplbDN5ejhyWFNPcHdXcDlKdlFKaS85VmtIQkI5LzhBd0xnTWMwNVZ2WVVBUjU3NWh6NVZJcjZYSUVSR0FLdzFkMzNQRmpEVFd6YXZGWG9WeVFTaVVRaWthaFBHVGlOYkZYZTRzRDUyN2dNekVBb053YWR5TUFlUitoUzd0QmZMLzFtVG55VnVxZ2FlN3JLRTh5dHFyVUJFeGZvZWExNVhLQkRDL0NtVFp2Z2JDRUJVWC9Ra01iaFRhZU1INDRCK0pGSE45U1FmcUVGV0o3N2lFUWlrVWdrRXZVbEN0ZWtPSERoTmprU1lrWHZDaWJFS25GZFp3ajlwZVB1c2NSWHVkcGtmTjVRSS9xMWVnTVhMODJSQXRxcXZqNzQyOUhSZ1dhUE9VaytpS0wrb09ZUFRSdFVkMXhUOCt4b2prWFdXaG1CVjkyMEJyNDk2ZHlQeVFFWGlVUWlrVWdrNm4zeUxVSlN0WExkTFpJUUt3dUVKZ1VEMXhtNjI1by9ITjFMNktFeDdCRHpKcjVLZURaUXVFM3FjNHRhMEc5VkthQ3RobzlnQVhqc21YT2tIcXFvUDJqRXBOSDIxZFFWVndNT3dQV0t5eGMwTlZZVnBtNHBHaFpWR2pGbTRzUnpGOHBsTHhLSlJDS1JTTlRiREV6cS9XcFN6amV4TWNRdVkzQ3ovRzJDQm5DUk94aG1LV2lrdFlrM2dTc0FnNjNVMFM0TkhrbDBLTFJXaG13VnRBd21OT2doUW1RZFRXaW5XOUtKUm50WW9JMkNJMmRiZXQ0VzBzRTNxa2dCWFQ4aW1pUkZnSWNNYjFDQ0FxTCtvZkhuVHovNDZ0djFEZE1PZGIwWXpPbll1Y3N5OE9xYmJ5amM1N2J0TzFhcy9CcWNNK05USytTYUY0bEVJcEZJSk9vYnVWaHJJQjRhYjJORFFOTGdaZ1hhd0FaZ21yU0UzR3ZRd0xRQ0RPenBvYVJpZHFTVHZ0QmZ4dTZzUXZwTjdVRlZZUm52NjZKSFJIL3NxQ0lGdE1mOHE2UUdrcWcvYWNSSjNWZDE4MGtYdzVscmJsMWIyQkg2a2NjMlhMUndhV2RuRjd6Z1Q3NW9pUnhxa1Vna0VvbEVvcjVSRHlhRnpoWmFuSjBmTll1QkNQRjBXZzhsc0lJMzlGZG45N3IyNXFuU0tmUmJUV3BvMVV0Rmp5Z0F2L0liQk1DNVVrQTNIYzhDc05DdnFML3B1REdOOVEzVFRoZy9EODVjZHMzS0FneTg2cVkxaXo1eExhVGZRWFhIemYrLzdwQ0RMQktKUkNLUlNOUS9HRGd6dFZhZkVDc1ZERmxDekpoVzJkOURDZEV2ei95K29Ga1kzSnZFejdWUGZOVjNhWjh4QUNNTGNMNFUwR0VOSkVrQkxlci9BR3gvTjArOGVGajlCTUxBOXRXNXZ5dExKNXMyYnozNXRMa2s4WlhWaEtsTDYrV2FGNGxFSXBGSUpPb3ZETnpQRW1KNXF4UzVLM3JNdHc1cGxwSmRsM1dXeWt1NjBLQjlZMHBPZnAzK3VLSm4wejVEa1JwSWJTMlRjcXpjUEM3NDYxaUF6NUJQbjZoZmFlU2tidGVHUVhYSFdWaTF2K0dpdSs5NTBHTHRpcFZmMjdaOWgyLzF3T2Y1d29XZmhrV1BLdlE3YmVrSlU4NlZJeXdTaVVRaWtValVEMUU0aDVXeGhoVnRtUWFPTVZXbjhhbVBnY3QvNnpMUlp1SFEzOVQ5enhMV1c2d1FjNjVUbUYra0FGSlQvWEQ3eXJIKzRNSEIzMjNidHNIWlk4K1FhcWlpL3FYR1U4WUhFOFBxSjdTMFh0ZXg0N1lQL3ZST3RMU3pzMnZOcld2dHEyWHlSUHVhTnpjRzJzNzlYWTg4dXNIbDNnQ25iVmUydzhDOExCS0pSQ0tSU0NUcUYrU2JrQlNhNUZYT2x4VGEzUmJYSm1GenFHVjNyaXVhdkRsYWpOSW5NejNVR2N5RmhKVk5PZ2xuNEdkVnE1SlF4UkpmMVo1K3JmWmgvK2Q4NXQ5dVloN0ZBbkQ5bUltU0RWZlVyMVFhT25qRXBORUhYMzA3WU9DcE0xYSsrc0ozM3oyMG16U3pvR3Rmc0xpUlQvVU4wMDQ2N1hPQk1ibnhsQlBsZ2hlSlJDS1JTQ1Rxdnd6c28xYkZGdy95NEN0WDFpaTFUZFNBTGFHa0RScHFTdjJrT0R0MHlRdUhyUE16QWRRYWh2NFdzSS8zUmVLclNIL3NRQm13NXA4eFBjZktZUTBrUXI4QkFNdm5UdFRmTk9yTXlkSDA0S0dqTEFPUE9lbGk0ZzZkUlhiZFNhZDlydVdNNjRKMUJ3MGRISm1YUlNLUlNDUVNpVVQ5aFlHVDN1WlBpTlYzd2NCc1h1YzYzRURuR0VwdFEzLzUvZEhleFgyVStDclNJUndBUERPWEJkaFRBMm5zbWVML0xPcWZBRHhwejgrZVA3TC9jRFNuZWVMRlRjMno5NzYrcWZPdHA2RkhkQUw2V21hMnE4Q1p6UithWmhsWURxOUlKQktKUkNKUnYyTmdXR3Mzd1hKTExNWmVoMmVQZVpZMTdjSXVVQVBIWW93Y29jbUtYa2ZvT21VQS9ScUhtdzJnVUlPSmxIZlVkbWRHQXlMajRJNEkyNXZ5OWNtMVJPZUFhMXdqa1JqZ25CbXd4Z1ovMjl2YjRlempXMXFWK0lPSytxWEcvZG4wVngvL0ZXSGFjUzJMN092QXZtY1BkYjFvWDY1ZnRHMVQzekN0YWN4cys1c3NHdEk0dlBtY3FYTEJpMFFpa1Vna0V2VlRFYW8wN2xJeUhUWTJBT0VnZkJwMmRVK2JUQTNLV3pRY2NMdlJ2NlpNek1iVVVUUlhpaW12RkhFbTE1cGJXdFRlcmZLMzZjWEVWNUZJQWFTbSt1RXR6YU56ckIvV1FOcTRjU09jWFQvbUpQbWdpZnFuUnAwNWFkOXpPdy8rNFcxMzBjaFJaOWxYM2c2blhEbEh6TDhpa1Vna0VvbEUvVjZzSGRoamJtVmh6ZmlzbW9sdCtEN0JYS1lCWEFyN2pEdlVPcWdEakp5ZmRiYU1WdG1jbjFsWXJtSFYzOTVOZkJVRGNFZVBaTUE2ZmtxcmZNSkUvVlpURnRVTVdTZGRjbzdrZnhhSlJDS1JTQ1RxNytTYmdGWFpnNEZack12VkprdFZwTXowV29ycFZ5ZnVsV3ZnelZYM0tCVlpleUwwdDhmMHhuTS9oMi96WmNEcUJ1RGpWVGtBdUxPekU4NldHa2lpL2l4THY5UCs4b0lxR2RpdVB1WEtPYVBPbkNUSFV5UVNpVVFpa1dqZ01ERDdWbnRaTEZmVlgxVTBnVlIyLzJVd1dhcG01VXlqVVRtZG54T011dG1QZUE5VE1MRUF6OHhyQVM2N1FKTU1XR0wrRmZWL0hUZW0wVEx3a01iaGhWYy83ZXFMSlBPelNDUVNpVVFpMFVCRjRXTDJTQmJjVXZKTEY3VzVwaGx4NjBDeDMwTE96eld2ZTVSS3lBbkQ2eFg2VlU0TWNNNE1XT09DdjVzMmJVSUEzTklxK1lCRS9WL0R4alNlZXZWRnJ6MjVmZDl6cjJaZmE5RFF3V1BQbjk2ZDlVcEozaXVSU0NRU2lVU2lBVVcrSk1lVkw0Mnpxcm95TU8zSDM4Yko3WncwcXJoQjkwOGRqNHNzMXRhKzd0RUFDLzBOOU9adlVQN24zQm13NnV1RHZ5UUFXREpnaVFhS0xNMmVkTWs1eDU4NStlMWZ2YmovOTYrbk5tNyswTFRSNTB5VmxGY2lrVWdrRW9sRVJ3a0RKN05vWWI3bEN5eWxiU3V1S0dSU1ZpbTNyTXVaK1ZsbHN4S3JKRU94eWxrWldQV1gwTjlBVlpsL1ZWd0VtQUN3RkFFV0RTeU5PR20wZlgzdzN2dVdnUS85NGEwait3Ky84K1orK3paWWV0eVl4aUdOd3h1bW5Tamh2aUtSU0NRU2lVUkhFUVA3NlpTbDVWeDhxeklZaXFNR3lUV0V2UVdFZFYwZXJQVUg2Nlk2UDZjU2NrS2JUSnpjUzg3UHF2b01XR1VYNkk2eTRPeW1Gb2tCRmcwOERSbzYyQ0t1VUs1SUpCS0pSQ0xSc1lYQ0dSMmg4L0x0LzgvZXZjQTNVZVo3QTUra1NTOHBUZE1iVUhvTEZ4V0tRQUJoY1FFYjFBWFUzYVhkSStMdStrclJaWGZQVVpkeVVNOTZmTFd0dnU1Rmo5dXk2am03QjZIRlhjNnVDN3NVejRwU2RadHlzNEtsTGRvTEFwSmV1RFpBMnRLVU5tM25mWkpwcDVQSkpKbmNtcVQ5ZlQvekNaUEp6Q1FkRXNpdnovUDhINEduOG5GSGFDay9OYUx6c3l1OENsaFptVFBkTzk3YUJkcCtBcVR3YUNVK1R3QUFBQUFBRUtUSjEwbm84dUdzU083T0s4VGIwMVVnbFZtR0Fqdk0wMDUrZnFGSFJ6STZKM3p6OWhUN1hCSVJ2ei9nTnErUGt1NHJiV1RoYnZHc0MzUmRYWjFOQUZabm9qUVFBQUFBQUFBRU5kckpYZHNXVjk2d1lkckpidFo5SEoyS0ZudzZkZ2VoczNFNlBOdXZ5L3hlK2RsbHlnK0ZlWTlZbDIwcllKSDBxNHAyWjBxWTRSTFFPcDNPTmdEUEhtTWZqZTRyYlYvcjlwQ1ZhZG9Ib3llbTR0OEtBQUFBQUlDeFFxZ2p0SU5kaEI1eVVzdkswWGw4MWhGYVJsTXVZNjJmT3o4N1NzaXVUelhhNlpleTlIK3U1d1ZnOTQ1WHhURi84cnBBcTZhT3FUbVFTUHI5OE9uNytybzd5ZnFwdjI5Zi9SOGZJQU1EQUFBQUFJeVo1QnU2RmFHbGJzZGF2MWQrZG11UzVWRk52OFNWTDIxYWdMUGNyWUJsN2Y5TTBxL1JhT1J1bmpoN1RKV0FQcWZidzZSZmdxeWNzellGQXdBQUFBREFXTWpBenU0NjdyUXJFUjA1aGFPaXArMnl0dWVSdW9xMTRwN0crUXVpL056NWViU1FMTWVyZ0tXZDdXWUZMRlU4WmRmOE84YlNMd0FBQUFBQWpLTW9MTDdsMG45eDB2NXNEaktzMU5YcmNKRFV4MS9uWitLSzdRQmdkVklpV2R3TXdKWXUwSldWbGR4dGNWTXhBUklBQUFBQUFJUlk4ZzFFUldnUnoyVmZFWnF6bTlUcFllN1VtM2I5ODRoTHlGU1FkbjYyQm1EZURNRHVUb0EwZ1pLSFV3SXR3SGZpUXdRQUFBQUFBQ0dZZ1FYdkJyb2p0T05IcGQ1Ty9DdjRpaDNOM1NRbUlRZGw1K2VoQU96bEFPQllTL092MFdqa1R3S3NSZ3N3QUFBQUFBQ0VjaFFlNVk3UXdvRlJ3dC9UN2xSU2R4T3plNi9BM1lRc0tzUUhvUE16NWJzQndMd0prS0lucHFKQ01nQUFBQUFBaEdqeTlVdEhhTEZSVk53T25OMmt6cDVjOEVmeWJVYjN5YThOUm9VdkJnQmJBakJ2QVBDWXJJREZLMGhPMC9qbkFRQUFBQUJnL0VSaSt4VHBPTmVKaXE4U0Z5SFo0Wkg4Um1EWlVEaXh6SW5FT1lUbVRSODh2QzZSak15b05EeFhFMlV6WFpQbFBMUmdRbll5N3hQN21tamJTOE43aUhkMVJqZFdYZm5TdXdIQTFGQUZMRjRMY0p4NjluakloOGpBQUFBQUFBQmpPZnZ5RzhFb2gzZHAreDA0aDlPYzlFaVBKRnJ1NlVjeUtjMEpwalpub1Bobkd3NnhVcUhBTExiMkZaT21hUWtuL1hLZlRpSVV3dTA3UDR0dkhKY0VzaFc0N1hnNTk2N2JBNERsNFpSaWd2MEFZTXlCQkFBQUFBQUFvUitCQmVlNGRkdzdXblFGWlpvVE5qbDdlVmdOeTc0S3RMTVQyYmZqMHQ1MmZuYngwd2FKN3ZhMjdpdHQzQzArR1FBY0hxMVVvUUlXQUFBQUFBQ013VWpzT09oSlhIYUVkaGFTYVU1ekxNVjJJeFkzSlpMVVJlMXBWODIvdHVuWVFlZG5KNWREWklGc0tzRE52ejRZQUp3MGlSb2ZBNEFCQUFBQUFHQmNKbDQzYXhpTGJrd1ZiQVRtN3N6UHdJNURydFQyQWJITnY3ek96NkorRW9tNDRjN09yMFdBbkQ5MmdIczNlL0VDdDA4aDFBS01HWUFCQUFBQUFHRE1abUMzT2tJTHBsYUpUUVllaWNUY1JsbFI4WE5vWDZtejVDbXhhWk9sbmIxNGo1cC9oYmVJTDZJOWVuZ3R3RzRQQUxZRTREZ01BQVlBQUFBQWdIRWNqOTNNejNhaFV1SzRhVmRFUjJodUFIWmUrOHAyUW1IQjV0K3hXdnVLU2I5OTNaM2NMZG1MM0d3QnRsYkF3Z0JnQUFBQUFBQVk2eWwzbEtwaERkMTFzeEZZNmpxUkM3VHUycVpmeTlSSVRuODh0MnBmQlY4ZHJEWmUvK2RGN3ZkL0Zob0FuTEo0SlQ0ZEFBQUFBQUF3MWlPeDQ3am5aalVzNXlXWmFTZnhjemlveW9ZbVJ1THNSVHNkWG15ZGRjbDF1S1U5cm4xRnVib2lvKzY4bHhNZ1VVTURnTXZLeW14Qzhldzd4OC9rdUpnR0dBQUFBQUJnM0NSZXUybUJoK0llemYzVC9oSDdJeVEwLzJIYTl2emNtWUFGVGlLUjBEVE5qYnF5NFJQWXpnOXM4OUxadVljNUtWVnc0M0I2dHQzT09RTzdBKzA0SGdkWlZMS2ZBTW1UQ2xoSmsvVlczRzBUTTVlTTFWeW8xajU0NnYzdFptdS9jWG0wa3R4RkFnWUFBQUFBR0Vkb3dTM0RlYysyVGRVbUxRdnVSanM0T1MxMEVwcC9sODJqSkU3TEtJRTJaOEZPMjhONTJQNHh1eDJjbE1zU1NMeVU0NzJEb2ZuM21FM3pyMGFkN3ZZRVNKU2xBcGJ1L1E5c05xZ3pvNU5TeCtxN25meG9xMTc3UUsvYnc0VGhNZnlUQWdBQUFBQ0FjSlNqYVdjeFVGeWI2RWhwSzFxbzFWaTQxZGRtbzhUYUNNeG1ZTmxJOHk4bDFQenI2SzdyK2wzT0VyTHcza0ZXKzRweFRyZWJlMWM3ZTZiNzZUZWVrb2Z2MjdlUHUyM00xMzhtb1hmMjJqeDg4QUVBQUFBQWtJRTV1VlFvczdxVmJ4M2xaLzdUQ1NWd2lkMDBTTTZhZjhXRlcxcDRaeWZuQ1Y3ZDdXMUdmUU4zeTNydGNyZlBZcTJBaFJtQUFRQUFBQUFBM00ySmprdGJTVndsVnB1UXk1eEg2a256cjhzWDdhalVkYWcxLy9MNlA2dVRFalhxZExmUG9vb3ZLeXN6R28zY2JTbUxVQUlhQUFBQUFBREdkc3AxYzBva2tmbVdFamZ2a1ZDb2xISlR0ZHZOdjNabkgwdk52NVJkLzJkUHlsOVJsaFpnL2dSSVNMOEFBQUFBQURBZUk3RmJhZEZteWwrZk5BTEx1UE1WMGU1RVorZFpuQTc5NWwrVFQvby9SMCtnRkJONEV5Qk5IRThUSUFFQUFBQkFTQ1BmaXM5Wmk1dE8xVDZvUUhGVGNEdnhpcDRTU1doUGg5TVZVUjZPQkpZNWpKM3VOLytLVGNqaWMzOUF0Zm1rLzNQU3BOcmFXdDRFU0ZNV293VVlBQUFBQUVKQWQzdGIrVFAzTWROYmZ2WCs5cFd2ZllBSlBzRHJTQ3h1N2x2Qm9sbGVsSU5tanBVS1ozU1B3NjBIemIraTlnd0F2VS82UDhmRzg4cGZqZTBKa0FBQUFBQmdMTkhyOWpEcGx5QXJ6RHlYQUc0bVhxZGgwT21jUWJTSStPbFducFc2SHp0ZGhsdW5nNVdwMEJqOWE5UTMrS0QvTTJWcEFkNjVjeWQzUThxaVZmZ0lBQUFBQUVCb29KM2VCZkJ2Y2hZS2tJNUdBb3VMNHJLUnR6SjdkcHJUV0N5UmNQcGtzeHVkVGNkRUMwWncrNU93T1psMnNHZEE2U3RzbW44OTdQOHNEOWNiTzJ0cmEyMEQ4RXI4d3dFQUFBQUFZeVFTQTRqTXNyeXV5N3p1emJTRFBXbE9WS1VkdkFrRnRuTk93bjBpZXFnRjJJZWpmMTAxLzNvVTFFZmYrZU0yQTRCelYzalkvTXNyZnhXZGxLcFNaK0x0RHdBQUFBQUE0endSdTdPYnVFWmdFZU51cFc2ZTErWG9YOHBaUXBZNFBVdlFqUDRsNmJlN3ZZMjdaYjEybVNjblNrbTM2LytNOGxjQUFBQUFBREFPRTI5QVJ3SVBKMlFwbW4vdDhjcGZhZFRwNnFSRVQ4N1QzY1ByLzZ6V3JzVTdId0FBQUFBQUlDQ053REthOGxuenIwMDZ0ejlKaURUL21yczdlZjJmTnozZ1VkbXE2QWxsNVIvYmJFaEtqVlZuWXRBRUFBQUFBSVF1ZkpzRkx4S3ZoM01DMnhTU2NseU95dFhUV1hhU2VoaTRIVVJXZWd3MC8xYmExSFpYUlN1eUYzazBBWkpkL2VjcDZQOE1BQUFBQUFEZ1pqQ2tmZGNJTEhXOXE4c1g1MDVDRHZMbVgrTDArOXU1ZDBuNkpSbllreURkTjRqK3p3QUFBQUFBQUdKRG9rUkVTSFJySkxEZFRsSTNSZ3k3ZXQyMHlMbC9nN3Y0TTYvOGxZZjlueWxxNS9zZmN1K2kvak1BQUFBQUFJQkh3ZFZCMkhRNUo3RGREcHhwa0NRZXZab3gxdnk3MzZiNVY2Tk85MlQ2WDBJVlgvby8vOFBkZ1A3UEFBQUFBQUFBM2tWRmNYV1hIVCtEYkdpc01IL0FNWGVqeE9FT3ZOUFJqcCtlZHJDYkpJakcwWGUzdDdYWFYzRzNlTno4cS92cXJGNnY1MjY1NWY3SFVURUFBQUFBQUVJZXZ0T0NQOTVJdE91SHlKOFMybjRmMjBwWE5DZGswZ0k3eUh3UzRTa254Wi9GeFBEZzBMQzdpSHZYOC9KWEZMWHpvMy9ZbkVxZEdaMlVpamM1QUFBQWhJVHU5clptYTFuUWpLd0g4UjBHQVB4QXVHcXp1STNXTFo2MnBNcDhNdnNSN1NJZGh3QnpkeWV2L25QZUE2czhLMzlsTlBlWDZRNXl0Nml6VVA0S0FBQUFRaWI5ZnZSdjk1R3ZSbVQ5cS8zYnYvWHJENUNCeHpQYTZWMkEwVXZIdys5QWlTZkplcVFSbURzUHNHQndkVG00MTlyOEt4bmFqNmFjTnY5S0tOZGhPMEMrK21BSGI4dDY3VExQVGxWMnBNcG9OSEszWkdROWlIOHNBQUFBSUNUb0svY3c2WmNhYmlISWZEQVBsd1dRZ2NIWEtkZTI2N0xFdHZleTNaNURlVk53TjRIcGhSMjJFa3RkSjFMUlphWnA4Y2NHR2ZLUE82LzhWYTUybVRvcDBiT3piWDMvQVBmdWxFVXI1ZEZLdk1NQkFBQUFBQURFeFdNdndxYlRFQ3AxNzJrZHpINGtFZlB5ZzdqNTkvUUhPOWpmZERJOExuOVZxMjhoQzNjTCtqOERBQUFBQUFDNFNKY2lBcUxFNi9tUXBMNmEvWWkyZitLUWJmN1Z6cDdwNGV4SGRzMi8wVW1wbUFBSkFBQUFBQUJBWkN3V2lKTVN1N3JMbnM2SEpIVWNtaVdDejhvam92azMyTU93ZmZOdi90b2N6MDVsN0RhVkhUL0IzWktoUmZNdkFBQUFBQUNBYjJLancwWmdnZk1JTkFKTHZRaXJvanBJaTU3Uk9EQUVtMy9KNHRuWlNQb2xHWmk3UlozMUlON0dBQUFBQUFBQW9vT2h5QWdwWWo0anU3Mmt6dllXTWFwNHBQaXpoeWs2d0h6WS9Fc1UvbVV2OSs2VVJTc1ZtRFlBQUFBQUFFS1dPdXRCdHA0cldVSHJEb3h1UE9adm9PMDN1MWtLUzBiVDRuYTNsSmEyMjhHMnJqVHQ2RHk4OHRQOFV3V00yZVRMNWw5ZGZaTyszY0RkTXUzdVIyblVpUWNBQUlEUVlqZnhLNzdQakdkUmlhbjMvdXFENXNvOWxIVnFUM0lYN3dmd2Zjemx2YXU0RXgxeFp6dmliYUR0LzlXeVBSVjdIczRPTXBGQjJlVU9kQWlXdjJyWVUrVEw1dC9kTnMyL2lxVFVTZk9YNCswTUFBQUFBQ0dOZksyZGhibWdJWERwbUkydkpISktSTS8zNitnazFpN1FidlYvZGpmbEJtc1lOclczbmRtL2c3c2xlOUVDajV0L2EvVXR1dm9tN3BaYlZ2NEViMWNBQUFBQUFBQzNRNjlQZGhQYVFTYTBoOHZxVnZ3ZDZCQXNmL1g1ZjIzaGJTbmE4RU9QejhhYi9TaE1GcFc2N0FHOGRRRUFBQUFBSU9DTXpRMkdoaXEyOTJ1c09qTXBjNGxjb1F5YXhDc1JHbXNoMExEcnNCSFkyYWxzV29sbDdvVnBNZWsxRlBvL1gvaTh2TDJoaXJzbFY3dE1uWlRvMmRuMDdZWlMzV0h1bHJRNy9pa3lMZ0dmTkFBQUFBQUFDQ0JUZTl2bi83V0ZsMzBZSkFOblpLM05DUDdDWmk1N09JdmN4MHJxc25YWHd3N1NnaE1UQjBmenI5blVXYmV6a0x0RkZhMG95dlc4K1pkWC9KbVllcytqK0xBQkFBQUFBRUFBR1pzYlB2NzVmWUxwbHlEYlNUYis0S21sVEpHelFLZGNpWnQ1MC9GdUF0V3BKSndBN081emlPMy9ITHpPN045aGFtL2pic2xmbTBNeXNHZG5zMi8rVFVoZEdqL25ObnplQUFBQUFBQWdVTXltemsvL1l5T3Y2Szg5cG9uNGs1L2ZSOUp5OFAwUUFrbVRkamtoc05PVFNjWEdhTXI5L3M5Qm1ZdkozMnZEbmlMdUZvMDZQZStCbFI2ZjBMNzU5OWJ2UEluUEd3QUFBSVNvZE50NVg5TXg3eXRBYURyTmFmYlRhRFI3OSs2bHJhNWZ2MTVTVXBLZG5XMlRrdlFObi96YmZZMTdpb1AwaC9IZFVGekpQNVdjNWh4ZzEyOVpzUGxZNGppQ2M1dVlnN0wvOHljL3Y2OURiL083allxQzV6d3UvcXh2TjB6OUY1dGlXcXFreGN0ZjJTbFhLdkNSQXdBQWdCQkZ2alN6ODc0cWtsSnhRUUJDMFlkUExXVUNzRXFscXFtcFVhdlYvQ3lqMXhjV0ZwYVdsbkkzVGxtMGN1RS92eDZ3K2xnQ0V3SlRRaE1DMisvRzM4ZHVRbUNLbVJCWTZtWDBEcTMrejQxN2lubnBOKytCbFI2blgwcW8rWGZHeWg4ai9RSUFBRUJJWStaOUpRdlNMMENJSXFtSGJmN056YzIxVDc4RTJWaFNVa0t5c1VhallUZGVPRjUrOEtWMUxqdE9CeFpOZWRvTDJsSUZtaDdlbjdkaWYwSzNTbStKTHNNMWVtK0M1b1pHMjg3UHFtaEYvdG9jajA5b1AvcFhsYlE0Y2Y3OFlQdkJBUUFBQUFCZ1hMbndlVG03dm43OWVpZDdrdlJMTW5CaFlXRkJRUUVibmtrR3Z1dkZkd1BRRGt5THZ1dHkzY0d4VW1laDJadjZ6MkpPTllyTXBrNzdpWDlMbnRqb2NlMHJTcWo1TjJQSkk0cVVSSHplQUFBQUFBQWdnRXp0cmN5S1NxWGlOdkE2a3ArZnYzZnZYckx6VUFadWJ2andxYVVkbzE4V1M3Z1d0S3NzS1JGeHF1SDlwS0l5cllNbkZocjlHNlJPdmxQSSsvdkxYclNBTEI2ZnNGYmZJdHo4Q3dBQUFBQUFFT0FBUEZMK1N1UWgyZG5aRlJVVmJBWTJtem9QdnJTdUl4aExROXRGVVhjU3FkVDlROFFFOStDNk9zMlZlM2h6VzZtVEVrdWUyT2pOT1RlWDd1SnRTWm45dmRoWjZmaXdBUUFBQUFCQUtDSnAyVDRER3h4TUl4d0F2cWdGTFhPNDQxanAvOXpSM0hEeW5VTGVSaTg3UCt2cW04akMzWktRbkRYNXJxWDR6QUFBQUFBQVFNQ3hGZXgwT3AwSEdYakZpaFZHbzNFb0E3KzhidUZQWDg5d01DTWFpY2ZOQjNlM04xU3hiYzVKbVV1UzcxaEY5dmR3Q0RFSmo5d0N6a08xcFZ5Vm1ISlpnbXA0QituWTd2L2NaK3I4OVBXTjVLK051N0hnb1J4dktqOFRHOTdheHIwYkpvdWFQUDA3YVA0RkFBQUFBSUJnRUpzeG0xMHZLeXR6TndPZk8zZU8yM2U2K25kYkd2L0tueUxZMk54dzZPVjFKQjQzVis1aDB5OUJ3dkRKZHdvL2ZHcnBtUTkyK1BWbmROMExXbWlIc0ZuWlB4dmExZEcwdlE2bTluVVFnQ1ZDSmFrRGxvOHJYOGkrY2VFc2R3dUp2bDUyZmk3Y1hWWjIvQVIzUzFMS3ZlbjNyb2xLUmZrckFBQUFBQUFJdkVoVjB0bmgvSG41OHVYYzNGejNEbytNZlBqaGh3OGNPSERwMGlWbWk2R2hxdHZRbHBoNXAxUWVRVm03MlI1NmFWMlhiZFRpR2pUM1hxNnJKSWNrMzdIS2x6K1kxNzJnbVFETUQ3ZVVRTGgxbkpBZGgrVEFwdC9xMzIyNVVsZkozYUpPU3F3b2VDNHlYTzd4T1kzZHB1OFgvK2ROczVuZElvK0lWOC85NlpUVml5U3lNSHpTQUFBQUFBQWc0T1RSU2tQalVMZGt2VjZ2VXFtV0xGbmliZ2IrNlU5LzJ0emNYRnRieTJ3aG9aZGsya256dENaREcwbS8zRzYybXJENG4wYmVxcFZQVmtuREx3M2V2RWtOc0lkSUpKTEVUUGVlMmtFdGFGZFJWMXpYWnBFQjJHbnpiMUFHNEpQdkZPby90cWxUcFlwV2ZQRDgwK3FKWHJYVGt2UmJxMi9oYmttZDhZUGs1Y3VqTXliaFl3WUFBQUFBQUVFaU9pbXQ1ZUJRSmVBREJ3Nm8xV3J4RmFGWjJkblpKTUd5QTRsN085cGJLdmNZR3FwSUJtYWo3NTlpN3ZxVllnRkp2MlI1T0h3cVNjSzkxRUJWdjRIWmdleWNsSGtuT3liWkM4TFZwaVRPZDdON1BHeldtcDhKOVZ1MjYvOHNjWHhlSi8yZkpWUkF4Z2VUdituNlAvK2F0L0cvbnZqeDZybVozcHhXVjkvMDNQL3N0bmxYS1djazMvcTlLYXNXU2NMUS9Bc0FBQUFBQU1HQ1pFNnpxZlA2bVJybTdyNTkrMGhhMUdxMXZOMEd6TDNtM2g1cG1Fd2lrUXFlaHh4Q3duTmxaZVhObXpjcGE5OW1Fb1BaOUZ1aFhEa3pMSmE3ZjZRa2JMVThoWVJBWGY5bFpndDVHYWwzZnRlOVYwODczY0l0a2tXNzJzZDJvK1I3TzA2TEdnQnN1NFBZQWNDU3dLVGY2dDl0NFcwc2VPYnAvTVZ6dkRtdHNkczAvNWtYOU8wRzdzWmJGN3c0NVY1dG5HWTZQbUFBQUFBQUFCQnNxbjZ6OGVMbjVkdzBXMUpTUWdJdFdiOXgvVEpaU0FCbUhwSkt3eUpqNGhUS3hBaEZqUDE1YW10cmMzSnk5SG85ZDJOTjdMZEpCbmIwMUN1NnluWG1vU0hFMzM3N0MvZUtRdE8wVUFDbWhRSXdiUmQ2YWRzQWJITXFxWWdKa0p6V2YzYThXMEFJcHQvYzNOejhCNzdsNVprTGQrL2xwZCtKYWFzVlNhbEl2d0FBQUFBQUVKd1cvdlQxNUR0V3NuZDFPdDNVcVZNM2JOandSZlhSamlzdGJQb2xCZ2NIVEIwR1EydlRwYTlQa2hYZWVUUWFUVTFORGJjQk9Uczh6VW42SmRhSGp3UWx0eWNUOWl4eVNseWZTdXIyOGNFWWUxMmszNUpYWHFMYUwzbHpabDE5VS9INzVkd3RrZEVwU2FtckV4YlB3b2NLQUFBQUFBQ0NrMXloWFBLdjI2YmY5eGgzWTJscDZkdzdsajcrNURNSFBxbTBQNFNrNHV1WHpwRWtiTzQxY2JlclZLcUtpb3FSU093MC9USUptVjN2YUc3dzB3L29laklrV3pMYW15ZHova1NqMi8vNTdBYzd2dmhEb2YwdktvcGUvVFgxK1dGdnptenNOdkVtL2lVbXEzTWlFbU5qWnFYVCtGUUJBQUFBQUVBUW0vTi84cFB2V0hYaWQxdTRFL1llK0xpU0xFcGx6T3A3c2xiZG0zWG40Z1hLbUpIT3o3Mm1yaXY2ZW1WaVNrekNGTStlVkNVSjV5WkhYK1ltaVhVMHI2Tll5dGxISUFEemc2dGdhcFc0VEw4QmJnZ21mNWRzaVROdStxMm9xRkExbjZhNmIzaHo4czJsdTNpZG54T1NzNktWTTVMdW1vdlBFZ0FBQUFBQUJML0VXVXRXYmoxeThyZS9hcTE1MTl4N2pkM2UyZG4xbDcxL0p3dFp2M1B4d3RtemJySGN6cncxTlNYWjhxamhmTjlOVTF6eVZLbVVYL1RYU1BjNWY4YmFnWkZuY1c4QU1KdE11Y04zN1FJdExaaENKUzZpdGt4RXVMWjdIY0hFYk9yODdEY2I3ZnVVRDZWZmN5OTF1dEdiODVjZFAxR3FzMmxBbGtmRUo2V3VuakF0T1NvbEVSOGtBQUFBQUFBSUZlcHYvU0JLY3B1eC9aanh5ckh1empPOFJ6ODlWazJXdDNmK21hd3JsVEVrQnFlbEpKTWtUTEpWMnZSTWNxdFNxY2d0TXpOd1dWOXJrV0tSaytmYTE5ZktydDlvYWVtOWZqVWlMc0hybjBBbzRQS2lzdE1zTGNuWmNVYTRCZGpSMUw3RE85Q1ViZjFuS2dCZG9EdWFHMDc4Ym90OWgzS3RWcnQzNzE1VnRJTDYrTy9lTlAvcTJ3M3puM25CMkczVDkxMDkrOGxvNVF6MStsVnlwUUlmSVFBQUFBQUFDQldEdmVhV1AvL0QzR2tKT09iZWE1M1h2aUJoK0diM2VjL09WaEExTHo5cW5uQ1NHcnd4ditQdnZGYml4TXdseVF0WGtkdllESEhUMDlKMmJiNmNQN2k5b0NuQld0QzB3S2trT1NWbmhGT3Iwd0JNMit4REJXUUNwSmFEZTc1NHA5QnM2dVJ0dDFTOUtpbXhyTlVkOTdMNWw2VGZXbjBMZDh2RXROV1cybGZmbUJXL2VDWStQd0FBQUFBQUVGcDZ6aHZhL25hSXU0VWs0ZTdPTTkwZFo4Z3R0M2UwR0NYUlMzTWpwdHVuMzV3dUhiY0xOSThpS1RWeDFwTEV6RHZKTFZuM1Z3Q21CQ1pEc2czQUFyUDdDaWRiMm5sSTluTUFKcUdYUkYvN1FiOUVYbDVlVVZHUlphMzlNbFY1d0p0bjJWeTZ5Nzd5OC9TNXo4aVZpdlNINzVaR3lQSGhBUUFBQUFDQWtOUFoySEw1NDJyQmh3YjZlMjZhenBzNnovUjBueC9zNzdIdkptMHZPenh0VTJTbVZqYUppYjQ3ZTg4VzMyeDBPVUtZRjRaak0yWUx0d3dMWkdDYjJZQWx6bmNUQ01BN25BUmdwLzJmQXhTQURZMVZKMzV2VTc1czVOY1BKU1c1dWJuV2lOeEg3ZitiNWRaVHBickR2TXJQWWJJb1MvcU5pRS9OV1k3UnZ3QUFBQUFBRU1JWnVNbGhCaGFNeElQV1czSzM3K1kxYysrMXZ0NXJZdHFLbVptVDFHcDFXVm5adm4zN2REcWQwV2gwZmdqVEprenlNQW5EWk4xWkk3QmJBWGg0SHdjQk9DZ0hBSnROblUxL0xUcjc0UTVIVjFhajBRemRyeXozWnVMZlduM0xpb0pmOG9iK3B0LzJlRXo4bkFuVGtwUHZYNElQREFBQUFBQUFoTFNlODRiTG4xUXo0NEhkUlZMeEpmMWVZL3N4Si91a3BTVHYydm4yckZ1blJTaVU4b2lveUFseFpDUEp3SldWbFNRUE01VzBYRXBldURMNWpwWHB5eDkwRVlBcHNjT0FKZG51QitDQURBQnVPYmpueXo4SWpQaWwySkpYS3RYUS9ZWTZ5K0lwa252blAvT0MvYnhIazlVNTBnaTUrdEZWNlB3TUFBQUFBQUJqd0dDdjJWaDM5dG94VHdvblhXMzdzTDMxdzBISHN3NnR1amRyKzV1dnNYZWwwckM0NUtsTURMYkVMcU9SaE9HNnVqcWRsZlBuVWlTbDN2N0lpeVFNZXo4TTJGVUFEb0lCd0liR0toSjk3VXM5TXdvS0N2THo4MGZ1ZXpmMGw2VGZGUVcvNUJXK1lvYitXbjc5Y1ArUzZHbkorSndBQUFBQUFNQ1kwZDlsSWhuNHh0Y1hTUjRXZVlpNTkxcnp5ZGNHKzN1a0ZEVkFVZkZwcTBlQzhjWEtnZjRlWm4zN1c2K3R1aWZMSnNyR0pzWk5ubXAvUXBLQmEydHJTUjZ1dFJKODB1bXJIeU14V05Rd1lGRUJPUGdHQUpQb2UrcXZSZVJXOEZHTlJsTlNVakxTN2RtU1g2OVpPajk3TWZSM3cxdmI3R2Y5SmVrM1RCWVZqYzdQQUFBQUFBQXdScEgwMjMzdW9ySDJUSytodytYT2JmVnZtb2JyWXlXa3JVNUlIUW5BWGRlK2FEbTFuVmxYS21QSzkvNHhOY1dtRVRGMll2cUV1RW5Peisrb3AzVDY4Z2ZuLy9nL2VPSFdyVHBZbmdaZ1B3OEFiam00cC9YZ2JrZlJsN0p2K0tXc2hhOUkralZlOC9oSjdkTXZ5YjNxekNjam8xUFErUmtBQUFBQUFNYUQvaTVUejNuRGphOHZrRnZCTnVFYjE3NjRNQnh4NVJIeFV4ZTh5RTl6cDdhVEdNeXN6NTUxNjRHOWYrUStLcFdHVFpvK2o5eUtlVEVrQUJjV0ZwSWt6RzVablBmZmxyN1FuZzRERHB1NTVtZjgxT3FxQWhaRk9SMEE3RVVBTnJXM2ZYMWdSODN2dDdRZTNHTXl0QW51dzR6NGZmamhoL2tQVkh6Z1Rmb3QzRjNHbS9TSW1ETHRvUW1xV1dSbDhxckZFVW14K0RBQUFBQUFBTURZSm8yUVJ5VEd4dHlTR3JmdzF1aHBVOExqWW1UUkVXVDdnS21YM0E3Mjk3UTJ2RWtQOWpNN3A4eDhuR1JnM2hsSWh1cTRXak00WU9rSTNXNjQybmIrNHFwN3N6Z2hsQTZUeWNPakpvaDVNWk1uVHliUlQ2MVc3OXUzajlseS9Vek45TldQVVE0eXEwdHVCMkIvVk1BeW16clBmL3EvcC81V1ZMZmplVU5qbFdDbEs0TDgyQ1VsSmIvNjFhL0lWZUEvOXZrUjZ0SUZqLytPUzNXSE41ZnU0bTFNbWZFRFZkSmlzcUthTjEybG1ZRlBBZ0FBQUFBQWpDc3lSV1RrNUhnU2cyTnZueHEvZUJaWnVWajNwODYyazh5akNkTzFxdVFzZW1DUUg2R2w4bWpsak91WGp6SjM2NXUrVWlwakZzeTdmV1FQZWxBUjY4Yk1zaHFOcHFPam82cXFpZ21Qc1JtWk1WT21jeEtwVTdZUHk4VHY2dGtlVHBqYTJ5NVdsMTl0L1BUaTUrWE85eVRSTno4L2YyaU9YM3NrL2VyUGVwTitlVlArV2tKdjBtSW0vVVlreGlZdW40dTNQZ0FBQUFBQWpITzkzZWN2ZlA1WFpsMnVVQzc0K1J2a2xybmJjOTdRYStnd0hCckt4cEhSS1NremZuRCt6UDh3ZHd0KzhadlltQWxyYzc3dDhWTnYyclNwdUxpWVdlOXNhVWhlK0syUk5PMU9McFVOTmVsS0pMYmxxKzNPd04xQjRyald0U3NkTFEwZHpRMGs5Qm9hcTBnQWRybS9pK2pydC9STC9yWW9hK3YvNVB1WGVQekRBZ0FBQUFBQWpCbU5meWhrMTJkOGI3TThTc2xtcGFncGlXU1Joc3NOaDA4eUk0ZEpxdXJ1T01QT0ZiejV1WmZJcmNjWm1BUkRkcDFreWR1eTgvZzFydGcwYkwvTzJTanpMTnlKUE1wa2FPdHBiN05rWFVNcnN5TCtLYlJhN2ZyMTY1MUZYeituWDJMaVBRdGxNUXJrWHdBQUFBQUFHT2ZPSDlwemRUalFLVE15MWFzZnN3OUtNVFBUbzFJU0RZZE9EdmFaZXcwZEpGakpsWXIyc3pwZUJnNlRSM2lXZ2ZWNlBTK1FTbXp1dW15cWxkaDFnUmJSZUN6WVZOelIzTkJ2NnV4b2FUQ2J1cTQyZm1vbTZ3NW03blZPcFZLUjBFdWlyODM4Um41SXY1dExkOWxYdllxTVRwbXN6bUhXWStkTmo1NktXWDhCQUFBQUFHQzhJL21PMi93NzY1RjhSM3QyTmJVa0xwOHJpMUV3ZDlOTjl4eDlaUjJiRFVrRzd1aTY4ZlBuQ3p4NERXejZUWmdwZm5wYWZpU1d1ZldVaHFhaFljY2RMWTFrNWFyMUx2bGhISld0Y2l2M1ptZG5yMW16aHR5S09zQzc5R3MvNHhHVGZ0V1pUNGJKb3NnNmliNkp5ekQwRndBQUFBQUFnRHJ6dHlJUytzSW9hcENpcHR6MVlQd3M0UWpLekNITXBsL0tPbFQ0bTgrL3k4M0FCYi80VFczRDEyLy85KzhTa2lhSmZ3RkdvNUg3TElPOVptbUVKY3pTRWtyaXNzc3VKd1ZMbGo1cnFYN2MwZHJZYitvYWVkZzZXTmM4dklYSnZmNmcwV2kwV20xV1ZwYlkzRXRaNS9zOWZvUzYwT3JaTXhxN1RUbXZiZFhWTi9HMlJ5dG5wTjMyT0pOK0l4SmpwMlF2eDZ5L0FBQUFBQUFBUFlZMlhkNVNFaE5KQUpZb2xGbkZSOWphVnp5WDlsZE52R2VoZlpJaTRmbkxQeGEySHR6RGJsRXFZMzc3Mml2Zi9lNjNveWFvSWlmRXVYd05HelpzS0MwdFpkYlRiM3M4Tm5uQnhCWHptUjY3RXR1WmZqbnJuRDlvYnRnZFhTVHhrdHhMUWk5WlVhbFU3aDFzdWtFZDFYazgzNisrM1pEejZ0WmFmUXR2TzNmY0wvbmJTbHQzTi9lWEZnQUFBQUFBQU9QV1o2K3N1OVpZSmFPb0FZcWErVWkrbXAyRzExWkgzVmtTcG1KbXBqczZ6OG50LzFkZjhRZnVsanNYTC96WEp6ZmV1WGhCaENLR3hHQnlLNC9nQnpHZFRyZDU4K2JhMmxwMnk2MExYbVFtSDU1NDkveVkyOUtES3dBektaY2szbm56NXFuVmF0Y2plNTFvdjB3ZHJiQzBBSHRFVjkrVTg5cFdZN2ZKZWZxZGtyMDhJakVXNzNJQUFBQUFBQUFTZlVrQWxscWpZM1JHNXRKWFBoRGNyYi9MWkRoMDBqS0hqbU9EdmVhbUhmOTU3clAvR3VqdjRXNVBTMGxlZFcvV3FudTBzMmZkb29wVmhTdVU0WkdLTTgwWDYwNStzWFBuVGhLQXVUdFBWdWNrSkdleDhTMXRyVlkrUVNFY2dJZHlyMzhDTUpOeW1kdU1qQXdtNjdyZHdPdkU2VWFxN3JqSFJ4ZnVMaXY0eTE3NzdSUFRWaWVscmg2NW12Y3ZRZUVyNExsVVhlNVpSVGNBQUFBWW4ySXpNaWN2WEluckFHT0RidlBTbnZZMk9ZbTRGTFg0K1hjZGpmNjl0TDhxZHQ2TXFKUkU1MmZyTlhTMDdTbHZhZGpaZGUwTEQxNU15b3dmcUpJV2M3ZkUzSlkrYWNWODI5QkxPd25BN2hYQlVsdFIxckc3Sk53eVFaY0p2WDY4NVA0WjlHdC8rWkx1V1lqMEMxd2s5eDR2M2lobXdtb0FBQUFBTGtWUzZxSzhiU1FKNDFKQVNHczd0SWVrWDZiMlZkeXNKWTdTYjg5NWd6UkM3akw5VXRaeVM1TlhMYU1HWk4yZFo5cGJQeVMzSWw5SnRITEdaSFZPWkhRSy82a3ZHR2dYN2JvMmhhQWxXcTJXbTJ4WlRMamw1ZDRBSUxtWHBGOVB1ejJYSFQreDRhMXQ5dDJldzJSUjZzd251WmVQcEY4bnZkVmhIT3BzYmpqNnlqcnZLNXdEQUFEQStNUVV2MVVpQTBQSTZqZDFWdVl0SmJjeWlqSlRWRmJ4a2FqRVZPR2MvTzQvSnQrL1JId2RwYTZtbHZaUHFzbkt6ZTd6eHZaam5kZStNUGM2TFBNVUV6OG5JVG1MQkdCSE8wei81eldVeTJIQWJBdHdSVVZGa0Y1dnJ4dCtDM2Z2dFovcGw3Sk9kNVIrMitQTXNPbWg5SHYzd3BqYjBpa2FiM0lZY2NwYTZoM1hBUUFBQUR6OE1tdnFKRjhuRnVWdHc2V0FFS1gvY0FjejlkRUFSYVVzZnpBcUlWVXdNVjAvM2hROWRZcHNna0o4bm1MQ1Yvcy9xa2swbXh5ZE0xbWRRd0l3Q2NNM1RlZlpmYVJoVWVSUko3bVhHM2h0NjJBNVc1Y0Y2Y1UrM1VnMTFIblQ4THU1WkplKzNXRC9rQ3BwTWJtK3pIUkhJK2tYYmI5ZzUxSjFPUzRDQUFBQTRPc0VqR0ZkelEwOWhyYk9Ga3U5bTg3bStyN2g1cCtZOUV4bHh1em1EN2RMckIySXBRcmxyRWZ5QmMvUTMyWHFhbXBPZmVodWQ1K2FpV0FrQXpOMzVSSHhaSW1KbitQdkh6bjRBbkQ3WlV1eEt5OG1PaUxSbHdSZys0ZEk2Q1hSbHpkbUd1a1hSRm9hRVlXTEFBQUFBQzRkNmUzQlJZQWdkNlc2L0hMMUFYTHJxTU9qc2JGcUtFTlptMytucjM1YzVtRGkzNnVIVDhZdG1tVS84YThIR2RnejRXN080Qk5NQVpoRTM0WTZxdjJTWjBjYnUwMWI5NWNYdjMvQWZzUXZKZFR0R2VrWDNQTEo5aDI0Q0FBQUFPQlM1Q1BmeDBXQTROUnY2dFFmMkhIKzRPNGVnNlhJcThTYWI2bmhDbEs4T2xLRDFvV3lkaHhXcGdzUFpiOTV3V0R1TW5rVHFjaXhjcVhpMGdkVmc3MW16ODRnZHo3d1dFTHhPbVlIUndEMkx2b1NwYnJEaFgvWks5am5tYktiNjRoaTV2dGRzendjOC8wQ0FBQUFBTUE0Y1A3UW5xWS9GcHBOblV6dWxicmFYMnBkbUF4OG9uaWpldFZqTSsxNlFWLzVwSHJpUFF1OWZHR1JVeExUSDFsMStjT3Fudk1HZDQ4bHNTN3VqdHZjT2lTZ0FkamNaNmx4ZGJyUjR3N1BMcU52WkhSS3l2UWY4SXBseTJJVWsrNWJndlFMQUFBQUFBQmpYbWR6UTlPdXdtdU5WYnpvTzZqUjlLOWZUMnMwQTlhSmdTeDVzclpXWWpSU1JxTzByaTZzckl6Y2xWcmJVQWNvU24vQVVoQnJ6bzlmWjAvYmNmSnNSR0lzaWEvZXYwS1NZNVBYTE85cWFybCt2TEcveXlRMnlwSll0L29iNFFsMmZiTWxFcHRDMEVFUmdFbmlQZE5JblcvMXVNeVZ5K2diSm90S1NsMmRrSnpGMjA1eUw3bTQ1QktqNURNQUFBQUErQnUrYzBKZ05SL1ljZVp2UmYzV1lzNU05S1ZWcXY2OFBFdjB0WnZwbGtSaVptVWdPOXVjbngrbTA4a0xDNlU2bmN5YWdjOGYyaU5US0psMjRNRmVNd21yS1EvZDdjTjMrSVNaNldTNUlTSUdrelFYTzNlNmNzNTBhYmljRnZVaEcra0pQYm9CbU9UZTVyT1dWdC91RzU2Zm85dEVvdS9XOXc4NGlyNlV0ZFR6eExUVnZCRy96RFZOdW5zaFBnWUFBQUFBQURDMmtkRGI5TWRDa2xvbDF0VEhEUEh0ejgwMUZ4V1JEQ3ptREFOYUxWbGt4Y1hobXplSERjZnBpUXRYeGM5YTBubnliT3pjR2VJbi9uVTNCdmNaT201ZU1QU2NieWRKbUt3em9UYzhJVFk4TVRacVNxSmlhckkxeW50eWZ2OEhZTk1OeXhEZjlrdGV0dmNTdGZvV2tudkxqcDhRTEhQRmlGYk9TRXBiYlQ5YkZMbGVDVXZuVGtESkt3QUFBQUFBR0FmcDk5Z3YxblUxTjBpSEsxM1JhblZmU1FuYjI5bU5VK1hsVVNwVitJWU5ZZFlod1YvKzk1WnZ2dlJSeDhremFZK3M4dC9ySjBHWExNcTUwMjIyT3U3WWJGL3NhaFFETUVtNXh1dVd4R3U4Um5WYzk2YXhsOEUwK2U3VUhTSUIyTWx1OG9qNGlXbXJlYk1jc1pjdjZlNkZHUFFMM3VqKytRdTRDQUFBQUFBUS9FanVyU25lMkdOb1k3czl1OVh3SzVDQmMzUEQ5dTBMS3lzakp5U25QYjNqUDlOV1BlVFoxRWYrSXJvMTJPc0FURkt1Mld5SnUwenV0ZHp0ODhtUFFISnYyZkVUKzQ1VkMwN3FLekw2RXNxNTArUHVzTTVNaFJFWUFBQUFBQkNzMzhzQmZKTitXeHFPL1dJZGQ5QnZYMGtKU2JCZW5yYXZxQ2lxckl6cFIzMjErZU5adHowZGdQYzI3WEFMK1ZOQ085alRkbDEwQURiZG9McTdyU24zMmxEV3RXeTU0Zk1mcWxiZm9xdHYybmU4bXR5NjNEbGFPVU0xY2JHajZFdENiOUtLaFVNZHhBRUFBQUFBQU1aSCttVUcvZElxVlc5RkJWdmF5cXZzcVZhVDh6QjFvYnZiRzNzTWJWR0pxYVA5NHprdDd5eVN6Q2JmTXBqNWVKbVVTMUUrYk5SMUVuckpVbG5mU0VLdms5SldYQ1Qwa3VoclA5YVhSWEl2U2IvQjFTNFBBQUFBQUFBd091bFhyZTdkdTljbjZaY3hrSjF0bVNmSnVuNnB1bnpxcXNkQzhTckpxRDN2alA2emtwUkxFbStkcGJHM2thdzRLV3JGSTQrSWo3TTIrZHBYZUI3NWtXSVVpWGN2alBMRmhGUUFBQUFBQUFEQnI3T2w0VGduL1pMYzIxdFI0ZkdnWDBHRFdaWXBacVhXS1pHdU5YMGFzZ0hZLzNUMVRVYVRpY1JkL1pWMkVuM0Y5RzNtQ1pORnhjVE5jZDdrUzFuN1BDdm56bERkTVpQQ2FBc0FBQUFBQ0FMNFVncWpnT1RlTC85N2kxL1RMeGQ1Q2xON1c0aSt0MzBaZ0kzZEprdHpMaWZyNnE4WVJIWnBkcEo3bGZGell1TG51Tng1d20zcHFrV3ovREVWRlFBQUFBQUFRTkNtMytPL1dOZlYwaERHOW56MlQvb2RWS3ZaOVJzdERUZE90WkFJRmdRWHdOVU1TTGFQdXgyQW1mWmJKdVdTbGRwenpXVGR5NkRMRXhtZEVxMmNRVUt2OC9iZWtmMm5KQ2JldlJEUkYwSk94K0RnOHgyRy9UMDN5QXF1QmdBQXdLaUpsVXJ2ajVyd1Ntd2lXY0hWZ0ZEMzViWXRUUHFWTWxXdjl1NzFYOXN2aXlSS3d6K3FwZUh5a0NzNUxDT0J0ckpCb0U4eTA0UTd2TzdMZk9zazlKSkZvWndSSm9zU2VSUzUzTXE1TXlJeDNCZEM4WjhxYys5MzI4OGorZ0lBQUl3Kzh2L3ZuN283OS9mY2VDOHA1WFo1QkM0SWhLNVR1d3F2VkpkTDJmVHJvNXJQSXk1ZVpGZWwxU2U0QVpnd1ZGU25UbGtWV29XSFpTc0tmaG1RSnlaWlZ4NFJUM0l2RTMzZFBSd2RuaUhVL2J2UmdQUUxBQUFRMkJoTS9qc21HUmlYQWtJVWliN05CM1pJS0NyTWV0ZGNWT1J0K3Uzcm8vVE5sdEJMbGk3K2xMZURYNTNxSDU1YmVHaExyN256aTdOTURhYVFDY0NqOEJ4aHNxaElSUXFKdStHUjhRcmxqUENJZUNjMW5GMjgzQmpGaE5zeVNQb2RpcjZvS2dDaDZVdHo3NUhlSGx3SEFBQ0F3Q0wvSFpQL2xQM2JDSXp2cStBZlhTME5YMjdiSWhsT2RPYUNndjdjWEM5T2Q0TTZjY0tTZnZzY3pvQXJhVzJsclNXZ0tldnNQTXpHRzAzTnFvV2pHSUJweDNmRlBFVDdPZ0JIUnFlRWhVVlpicTJoVnlxTDhxQjFWNUJpYWpLSnZncDFNdDdydm5MNVJIbjlyc0llUXh0WmowcE1uZjNEL0VrTFZ1S3lqSTdEU0w4QUFBQkI4NTh5ZWtGRHlMR1VmZDQyVlBhWnNzN1FhODdQOS9CY0pQRitXa1Y5ZGRybGpoTER5S2hZTmdEM2Q1bUNwaHFXNHpETTRYWUFaaUx1MElvc1NtcU51NVMxUzdNL1hubDRZbXkwTmZjeVRiNzREWm9QMDIvMTFvM3NYUktEUDkrNmNlR21iY2pBbzZQVHR2UHpaQ3JzZmluNjh3TUFBSXlHL1lPbVMwT05XQUwvS1kvaTkzQUF6elh0S21UTFBnOXFOSDBsSlI2ZTZNdDZxdnFFazFaZm13RDgxU24yWFIwZE81TCtUUG9MMFFFTndCSjNQbXN5RWx5WktNdDdnRTIyREQvbFc0Y3hlMHBpMU5RcGJPNEZuMnZZVlNpNEVRRTRJS0lrRXZXb2pFY0FBQUFBOHQ4dVVpbUV0Q3NueWk4YzNzTVd2aUxwMTVPeXp5VDBsbi9NclhIbE9tZTJ0cklCT0ZJeEVoVk41eTRHM1RXeWZNeUZQK2N5OWV3bmcrUkZrcXpMNUY1eUt3Mlg0NTN0VjB6UFp6RWJBUUFBQUFBQzZGcFQxZFdtcXM3bStuNVRKMW5oUFJxVm1LcElUQ1czVVVscENUT1h4S1JueWhYS3NmMDF2dDQ2OU5lcndsZFhyMUovM3kreTRaY2hyYTFoMTBteVZOaTJqL1pkN1FoUGlBMkpDeGpnUnFmd3hGZ1NkK1VKS25LTHhsNEFBQUFBQUdCemI5dWgzWmRQbEp0Tm5jNERJZHVLYzNvNEVwTWtQR25ocXZpWlM4WmVHSzYzSGZyclNlR3JyMDVUbFFmZFBVaHk2aFM3UGlGK0RxOEg4V0N2T1ZRdTRLZ0dZQkp4eVVKQ0wwbThUSHN2UHRpQlF2NWRzRy92SlJ0eFpRQUFBQUFnZ05vTzd6bC9hTGQ5UzY5NDVGc3VPUWxaeVBxa0JTdEpFaWEzWXlNSnQ1VHZ1TjVVSmJXT2VxWFZhaytHL3A2b29UalQrYm9SZ0d0cm1SV2FvbUxpNTRUdU5mUmpBTGIwWkk2UWh5ZW93cXk1RjNFM3FHVCtNSjliQkl2ZGlDc0RBQUFBQUFGaE5uVis5c3QxblMwTmdvK3FWQ3FOUnFPMjRtN1hXOVhXMWhxTlJ2dWpMcDhvSnd0SnZ5UURweTVmR3o5elNlaGVIeExzeis0dFlqcy9lekwwdC9LZ21HclBBdW0zdFZWeWRhZ0V0RlFXcFVwYXpOdGhzRy9jdEFCTHcrWGhpYkhXdUp0RWJpT3NLUmRaTi9pUmZ3SVdidHJXd0prR0tSUFRJQUVBQUFCQTRBaW1YeEo2MTY5ZnI5VnFOYTVHdXBJQXJOUHBLaXNyeVczdGNITWxHNjJaTm1IeXBmZVduTTJweXg0TXhldkQ3ZnpjbjVjM29OV09UdnExaEw2alIwWitFNUdjSlpnS3gwZ0Fqa3dlaXJMV3R0eFk2ODhta3lkYWZ0TkFjcS9OenltUjRFTWJjaGtZaVJjQUFBQUFnc0hwc21KdStzM096bGFwVkV6MEZYa0dzbisyRlJPR3k4cks5dTNiUjI2NSsvUVkyazV1MjlLNHExQzk2bkgxeXNkQ3FGLzBoY043dUoyZjNaNzExNHYwUzNINlAwdGxVZkdUczRMcXlnaW5VTnBocVhmWnBQdSt5UjVrYWM2Tmo3VTVCemZXRHEvU1pFMWllMW9KNWpnREFBQUFBQkQvUFJ4R21FMmQrZ1BiMmJzVkZSVmFkNXMzN2NKd3JoVkp3cVdscFR0Mzd1UzJDWk9uTzcyM2lEeWpldVhqR2FFUWcvdE5uYWQyRlhyZStmblRLcS9TTDZmL2MyelNZdnNKZEFsNVF1d292ZFZweDNmRlBTU05uSnpBTHBiMDYvMFRBd0FBQUFBQWlOWmN2b010OVZ4UVVPQmwrdVVsNGJ5OHZKcWFHaEtxYzIwTEpsdGljRmxSNWROTHo1UVZCL24xK2Jxc2lHUmdLUk9HYzNQZDYveE1vdStYOWQ0OE83Zi9jNVR0N0VjTVdZd2k2THBBTzg2bk1uemVBQUFBQUFBZ2dOb083MmJ6NnFaTm01ajFrN1cxSFViam9jcEszczZ4c2JGek5acmxib1prclZWK2Z2N09uVHVMaTR2WmlsbE1EQ1l2WU5ZUGdyUWdUbGRMUTB2NURna0pvaVRXcVZUbW9pSTNEdFkzZXpEakVZL2txMU5zcUJRTXdCRWhWUUVLQVJnQUFBQUFBQUxtV2xNVk96M25RbzNtRjRXRkpQb2UwdWxjSGtneThDUHIxMzhuT3p0V2RIOWd0VnBOTWpESjJGdTNidVhHWVBJQ1R2eDJZL3pNSlNRR0s5TXpnK3I2MUwrOWhScnUvRXlwVkxLdFcvdlhyNmR0UzJFTHUzclZCK24zNmxWSmF5dXpybERPRU96L0hKbWNGRUx2TnlrK2NnQUFBQUFBRUNpWFR4d2d0K0VrWDFIVXB6cmRXOFhGWXRJdlFYYjd5WVlOczZaT0pZZTQ5WXdxbFlyRTRIUG56dVhsNWZHaStKRVg3MnY4bjBLMlAzYkFrUmZUMWRJUU5seU9TYUxYeXdzS29xWk9qVnl4UWxaYTZ1ekl2ajdxbzQ4dHQxNEc0Tm9hZG4yQzBQUy8wbkI1MU5Sa0JHQUFBQUFBQUFEWHJsbUxHM3ZjTWJYRGFIeDI4K2JWSzFaMENNMEQ3RHdHRnhVVmtSak1GSTVtNmN0M2tCaDgrVVI1d0svTStjTjd5SXNaRkNwMExOWHB3amRzSUVsWVhsZ29FZnpCeXorbXVtNzRJQzV5QmdBTEJtQ1NmZ005QUpoMjYzR3BEODhNQUFBQUFBQWdudG5VMmRuU1FIc2ROUTdwZEI1a1lNcmFLWHJ2M3IwVkZSWGNlWWFaSHRGa0NXQlRNTGtzSjYyZG4wa0E3cUdvZnlzb2VDSXZqOWZabTJrUWpyU1B3U2RxcUlzWHZYOE4zUDdQc29oNGVVUzgvVDR4YzJhRTFsc09MY0FBQUFBQUFCQVlYZGE1ZjBuNnZVbFJEMlJuWjRnWjJ1ckF5ZHJhbjJ6WTRObXhXcTIycHFhbXFLaEl4VW1ZbDArVVZ6NjlOQ0JOd1NUOUh2dlZPdlp1Ym03dWkvbjVyeFlWWGJoKy9jOTc5MzdIdHNtYVJGK2JHS3h2cHFwUCtPUmxjUHMvUndzMS8wWk1TUXhQaUEydHQ1eVUrWFhMOEVMYjNzV0NaZnd1QUFBQUFON0RkeXJueTlXbUt2WkNrWURYY080Y1dVakdleUl2ejRNdy9MOWxaUjQwQXJPWUNaTzRQYUxOcHM0VHY5MTQ4dTB0WkdYVXJnbDVMcEorMmNabmpVWlRVbExDdmlTU2ZzbjFJVmVKMXlETXhtRHBpeS82TEN0eUFuQnMwbUw3SGVLK09UZmszbkpvQVFZQUFBQUFnTURvYWhtYW9sYWxVcW10aVpma1hwTHhtREQ4YVUyTmZiOWY1MDdXMW5yemVwZ2UwUVMzS2ZqODRUMUhYcnlQYWF6MnQzN2I5RXRlVDBWRmhmMXU1Q3FSUzlSNDd0enpCUVhjNnpOZ05JYjk0UjNaeTRYczNFV2VNNWtrcDRaT0lwRkZSVWFuOEI2WHhTamtvOXo4Uy91Z2xVcnFJaUFQMHZZYkpmaFZGUlkwQVFNQUFBQ0krc3FPeGRuQ2JlZTB2M2h6TlJxbTMrL3ZTMHJtQ3UxQVc0ZklNa3UvZGFIcmpsTmthYWlqVGpkUzdaY3BreWVGb0xLenMzbkZzWG9NYlNRRE54L1k0ZGVyMGQ5dFNiK2R3MG1iaEhCZUZPY2gwZmZmOC9QWkdEdzQvQjFXMHRvcSs0L1h3a3BMU0lqMVBDaHlmcFV3SVU2by8zTnlZb0RmUDRPZUhJVVdZQUFBQUFBQUNJeHJ3MTJnMVU0N1BEK1NtL3RwVGMySEZSWEx0VnJLR253R0tNcHNUYndEdzh0UUU0Ynh1aVg2a2dCTVluRGxBV3IvMzZoOWY2YU9WbGcyR3ErSmYyRk0rQ3dwS2VIbXo4WS9GZGE4c2JIZlA1V3h1bG9hanVUZngwMi92TkpjTG1Kd1RmVy9QTERTSnNFZVBTTC85NTl6dXpHN3hlVUVTRkhxS2FINGxwUGhVd2NBQUFBQUFLT1BteVRWTGtmOG1tNHNueGozWWZHckIvZS8vL0t1ZHl2cm0reDNtYWRPdjJ2MlRQNVdjeDkxb2RXeUVORVRxS1JKMUpSMGFrcGFzMTYvYStkT1pwYzU4K2JkcGRYYTk3WE96YzNWYXJVNU9UbTF3ODJobDArVWQ3YmN0K0NwYlRIcG1iNU52OGQrUGRMeldYejZIWW5CWnhwZXovM2hvOXJsVDVmdUdyazRKbFBZZjc0bCtlYlNnWWZXVVFxRkd5L0laR0tUOHlCRnhUaW9nQld5QVppMm5WdUtGcHBxeW9iclBRQUFBQUFBQUp6bzVJeXFuVGR2bnJOZG04OVN4NGNtcEwzcmxta2ZGVHhuN0RZZGJHaXEwN2Njckc5a3RzOVZwNyt3TnNmRlUzYmZzQ3o2c3lRSnI5ejRWT3Y1Qzl4VTg1M3M3Q2MyYldJYW1ibkp2S2FtWnZQbXpjWEZ4Y3lXSGtNYkNhc3p2NStmc3V4Qm4xeUg4NGYzZkxGOUMzdlhnL1JyYWZHMnRtL1BVNmVUaS9PTzdqQ0p3ZVFTTVE5S2p4NlJuRG8xOEM5UDBHbHBJczluMC8vWlFmb045UFMvZGduVmpRQU1BQUFBQUFBUU9FNUd1bHFpM1hENkhkay9XdkhkUlF2SVFxM045dVQ1dW0rY08zK0JzamJyU1ljckEvOXZXUmxaU0FEK2ZVa0pyd1oxVVZGUlZsYldoZzBiak5ZcTAyWlRKNG1zWGEzMUpBWjc4MVAzbXpvYi8xUklBckJYNmRkMHc5TEJtK05SN1RKeVpYNzAxcmIzamcvTmh5UzVhcEM5WERpdzd1SEJlKzRWYzByWC9aOHpRcXYvODBnK2xucDF0TTFXVkEwQ0FBQUFBQUN4ZWd4dG9nTHc1MGY5R293R3JHT0pCNGUzSE5McE1xZE9mV3U0dlplVm5aMWRVMVBEamFiNjhoM2Nmc3Z1dXRaVWRTVC9QbTc2SlNjL2QrNmNlK21YT0g3VTBzM2I3aGNFZTU3ZDlQWVRHOGtLdXpIczNUK0xySXdsSFM0aVRhNVBUSnpnQU9Ea0lFNjd6cEtwMUxQaXVMVDF0Q2hjaHdWRm9BRUFBQUNjNXlzc2pwYWVxMjNjN0NkOEJadlB1bFc4U3J5TXBFUW5NZmpaelpzZnpzbmh6U3JNVEVxVW01dkxEYkVrQTVzTWJlN085UHZGOWkza1FPNnZBTWhweWNsVjdzejVaSEdobFdxLzVPakJSN1hManIvMjhqeDEra2o4TzNwRTl2cHJrcXRYblVYRTJobzJKRWNwWjRUSm9uZzd5R0lVWVRHS0lQbkdqbm1BQVFBQUFBQmdyTkNmOWRPSkgxMngzUDYzRmR3WS9MOWxaYXRYck9CbFlCSlFTMHBLaW9xSzJDMWRMUTFIOCsrN2NxSmN6Sk9TeEh0MlgzSGxNMHQ1M1o1THJOeE92K1krKzg3aDlqbWZaT0NuT0FXaUxaTWt2VnhJYmgwZEluRTFBRGd5aUpwL2FYY2ZsL3IyL0FBQUFBQUFBTDVodXVHa2VkUGJBS3hkeHUwZWJCK0R5Y3JKMmxxU2dVOXlBaUVqTHkrUE8wTnZ2Nm16NW8yTlI2MzltUVVuU1NJYlNVTCtjdnVXZzg4c1BWTld4TjFIcTlYVzFOUndXNVhkY0xyUnZ2T3pvTmR6ZjJqVEhkcGtrcjMrbXZTb2NOOXl0djR6N2FEK2MvU3RHYUg2anFJRmltRFpWWGhHeVdjQUFBQUFBUEMxYTAyZk1pc08reitmYi9YZnMyY2tKYjZ3Tm1kTDZTNEhRY21TZ1VrTXFyTm00QThyS3ViYXZzanM3R3kxV3IxaXhRcmpjQk54VjBzRGliaGZicWRpMGpPakVsT1Y2Yk1wUzZYcitoNURXeGVuM2pXTDVPZWlvaUlQb3k5bHJRM1dVT2RXNEorblR2OVd3UytIcWtPYlRHR2xPOGlmZzkvOEpuYzN5VmVuMlA3UDRkRXA4b2g0Zmp3T2w4c1RZZ09SWFduKzM1RGd1aXN5NjRsc0E2NkVkd3FCQkN4Qll6QUFBQUFBZ090djdiZ0Vyam5zK251aDFhL1ArOVFES3l2ckc5bFN5WTVpOEhXamNWMU9UbFZORFcraVlLWm0xWVlORzhyS3lyamJTZHdsaTVOTzBlVG56Y3ZMMjdScGs5dDlubG5tUHFxeTNOMkRTQUQrNnEzWFNRYXUwN2N3Vyt3enNMUm1wUDV6Yk5KaSs1Tll5bC9SUWZCUmNuS1hkbndzalRIQUFBQUFBQUFRblB6Vy81bjE5aE1idVRXaUJBMVExTmQ2L1NxNzhjQk1sTjI3ZHkrdk1wWVQyZG5aSlNVbDE2OWZ6OC9QOXp6OUVpVDlpdXY4ekgvQjBZcVBDcDdMbWoyVDNVSXlNTGN2TkRzQW1HUkdoWEtHL1JraWczQUNKSGNDdWRTRFl6dzdZTlF3STh2SndpMnFCZ0FBQUFBQW9jUS94WjhGQTZITERFekN6NG5hMm0rdFdDRVlPN1ZhTFJOcnlTMUp3dVF1RzI0MUdnMjV5NHdaSmp1UVc4LzdQTE0rUCtMTnhXRis1RWUxeSt3enNLUzFWWExWd0d5VVJjUkhScWZ3MDJPNFBLZ25RQkwreTdPSnJqS1BneXd0ZUdwSmdJY0wzelMwSFMyNGp4bFdydjlvK3pjTFBvaE1UTVcvSGdBQUFBQVFtTy9ldUFRZTY3ZytPcy9EQk1LblMzZTlvenZzZk0vYTJ0b2Y1YXg1dTZTVVNwb2tjQjZWS3RmS3Z5K1hwRjlmVk1aKys0bU41SmI5a1ptKzBHejZwUnpVZjQ2WWtoZzhiMm1KbzB6cWxIU01mYURQSHhrcHZFWld5RjM4MHdFQUFBQUFFSHE2YjR6YVU1RU1UQUxoNjdrL2RMbm5PKzkvK01helc2aTY0NTcxUVBaVzgxa2Z6Z3RGZm1SK08vQW5IN04zQlFjQUIxbi9aMC9pcU15VFowRlJhQUFBQUFBQWNGK1BvZTNtMWFHQmltYWhHWU5HdEY4ZTVkZjIxQU1yNzVvOTg4Rlh0emEzRzV6c3RxVjBGOWx0SG5sNWQzeVRVc1dQYXZwMU5ldXZCeG1ZNHJRRHMvV2ZCZnMvVThFMUE3Q0hlVmtvQUFkQlQyWUFBQUFBQUJnYnJ0U1VYMi82OU5xcEtzSFpnQWlkVGhjWEY2ZlJhTmFzV2FQVmFvZG1SUXBFRStzOGRmcngxMTUrWTMvNXkzL1o2MlMzYnhYODhxdTNYbGNaLzA3TlcwVGRNaXRFMHkrYmdZM2RKbDRwN0dpaC9zOGsvVXJENVFIS3JvN25RSEtUYlBnRUVoZlBKOEZNU0FBQUFBQUFJTmIxVTFYbkQrOG02YmZmZVV1dmxkRm8xRm1SZGJWYW5adWJ1MzVpakRvcGNmUmZ0aXBhOGNMYTdPOHVXdkIwNmE3SytpYmhWOXR0K3RGYjIvWTh1OG5TRjdyOUVyVm9LU1VQOStOcmFxaHphOHBmRHpJd2QyNGt5dEVBNE9Ta01mQzI5R1lNTVBJdkFBQUFBQUFJUk4vUFgxMTMvTmZyTG5BSzlJaW4xK3NMQ2dxbS9zdVdEVzl0MHp2dGpldy84OVRwSHhVOFI1Smhob01RL3Q3eEUyKzhiNTJKOTBJcjlmSGYvVml6K3ZNamZrMi8xSEFaTVBhdVJCWVZMVFFCVWxSR1VQWi9kak9WeWtaYWY3bk53TTZiaEozc2llN1RBQUFBQUFEalZZK2hyWDdIbG10TlZmWVBhYXpVYW5WV1ZoWjN1OUZvckt1cnE2MnQxZWwwUnR1SmRrdDFoOHVPbjhoN1lGWCsydXlBL0RpUGFwZVI1ZVhkWllJOW9sL2V2ZGN5R0ZpZGJxblhWVmxPYVJaUkdkTjkrZlRtUHN0cFIyVTZLS1BKMUU5UllkWjRwNHdUYVA2Vko4U0d4U2lDSXVKYTd3cG5UdnNTME95V29UOXBtVVN3VXJUei9zMmgxZnNaRGRVQUFBQUFnTytpL3RmODBZNno3eFh4bW54SjZGMi9mbjEyZGphSnZvNE9KSTh5S3lRRzc5eTVzN1MwbEUzQ3htNVR3Vi8ybGgyckxubGlvOGJWYkwxKzhzTGFiSkp5Zi9UV052SmliRUtqdFNQMDhkZGVIZ3FyeDYzVDg4NWI1SnRuYmI5TUhhMFl0WUhRWmNkT2tMZHF2M1U5UnFqL3MrS1dqRUMrbVFVeU1DM3dFTzMwUU91NmxCdUp4UzcweUxwN0IvcC9FYnhXV0xENDVMMEVBQUFBNE1IMzl2R3dtRTJkWCs3WWN1clBoZHowcTlWcUt5b3FhbXBxOHZMeW5LUmZYbG91S2lxNmZ2MTZTY25iYWs3Y3JkVzNyQ2o0WmFtcmVYcjk1N3VMRm54VThOdzh1d1JlcDI5NWVYZlp5UDNUamI1SnJRMTFWT1dCMFN3RHRsTjNpRmtKazBYRk9LaUFGYkEzR0UzenZxVjdkSktoWXgyTUFYYlNkZ3dBQUFBQUFEQ01oTjdQWDdVTTkyVzNrTGhiWVVVeXNHZm5YSi83Z3pQblRyeFk4Q3k3eGRodDJ2RFd0bUptMkcwZ01LT0NTUkxtYlgvai9RTTIweVpkYUxYMFd6WjVPb2x4KzJYcWc3LzVlOUF2ajc3ZFVEdGNBU3ZHVWYvbkNZcGdlY041RjB5bDNweEdnbll5QUFBQUFJQnhuMzY3V2tmbU44ckx5NnVwcWZFNCtuSzltUDlzZFkxdW51WjJkc3ZtMGwxa0NkUVBxNHBXN0hsMjB3c1A1WEEza21TK3BjVDJKUm12VVIvOTNlMTVqTW4rSkRsWEhyQ01LQjVkWmNkRzVrQlNDalgvaGljbkJ1bjd6LzA4S3ZYeWVJRnFXV2dyQmdBQUFBQVlsK20zcEtTa3FLaElwVkw1NmlsSSt2MmtZdC82M08relc0cmZMdzlnWDJqS09pVDQ3U2Mya2pETWJubnYrQW5lOEdCci9hb0Rsa0I3b2RYRjZjaWV6V2VIb20vN3BZRDhSQzc3UDFzR0FBYy9WNzJZbWVaYm1XOWlOd28vQXdBQUFBQ01NNmYrWE1pbVh4SjZLeW9xTkJxTno1OUZwWXJkWHZLR0phZVYvb25ac3VHdGJlcWtSTzNzbVlINndSL1ZMcHVuVG4vdzFhMXM1K2VUK3BhNzdGOFBDYlJra1lkVEtXbFViRHlsaXJmSnZjWnJsbGJmQUlWZUZvbnViUDluaGREc1IyRXhDbmxDYkZDOThienBpU3p6TU1FaTlBSUFBQUFBakdNdEgrM2dqdnYxYmZxbHFRSGVGbDRHem5sdDY3bTNYdWMydzNLUlJFY1drazUxOVkzMmoycG56OHBJU3RTbzA3MHBLMDBDOFBIWFh2NkQ3dkI3eDZ0akZZcTVUazVGc3E3K0xFV2REYzYveDdMakx2by9Sd1oyK2w5ZUt5N3RVUktsZVFGNE9FYlQzRlBaeitpTE9YNEJBQUFBQU1BNjMrL1o5NHJZdXlVbEpiNXUreDIwMzBReXNGN2ZVcWs3UWxuYkxVa0dyaWg0anBmbDloMnJMclB2a0d4TFY5L0VySkQ4ck0yY3VXYnh3bHp0TWc5ZUlqbjhxUWRXa2lVay9zcklOVm43MnRiSytpWVMvbC9mOEVPMm1oZTVZdXcrZ2hXd2dyZi9NKzNKSVZJdm54UjFzQUFBQUFBQXhwdjZIVnZZR1kveTh2SnljM05INTNuL3V2Y2Rkbm9ra21PWjFrc1M3UXAzbDhYbC9uUE9xMXRMZFllZHAxOWVKaVJuMlBEV05uTHM1dEpkZW00eDV6SG42ZEpkbGRiazM5eHUrTkZiMjdoWFlDajl4czhKazBYeGpnckMvcytpc3k1dkFQQVFHWGY3MEh6Q0hyVHkwaFF0c1gyeUFMVVY4MFkrVzZaN1FrSUhBQUFBZ0tENEVqNUdYRDlWUlJabVhhMVc1K2ZuY3grdHRXcHViczdLeXRKb05ENHNpRVVOandlK1o4VWE1dTdta2wxMStwYmk5dzg0Q3Iwa0xXZW8wN2hibXZXdCt1RWhyOXdrWFB4K09WbHl0Y3VLY24vb3FHZDFTT1BPMVVSKzNvUDFUWGZObnVtNi8zTjZjb0RmdzdUOTNlRlhSRHY5cE5HVVhkQzEzTWk4ZWluQjF5RjZ5dElIV3o3ZXp2dzZTcVpRa3J2NFp4Y0FBQUFBd0llK3R1Mzh6RVpja25zM2I5NnMwK2s0ZVZXVmw1ZkhTOGhleXRJdVhaTjkvNzZ5L1pSMUF0dUN2K3psN1RCUGN6dlpJU3RyS2RuVDBVa3FkVWZxYXIvY3VmTlA1SmE3dlZSM21HVEMvTFU1ZVNIU3NWbThqS1NScVl4SXdtZEtkdkg2UDV0N3IvVjJuKzgxbldlMlNNT2lJdVlrQkRUOUNyZmllaE9oSlN2Zk9zT2ViMmdNTVBmRXZJWmMvdDJSUDJqZXl3bmNhT0diVjl1WTRmZ2svVVltcE9KZktQRE14eit5R2Uxd05YV0dEMC8rYXVlMVgzZGVZKzlPbGNnMlNHSnd6UUVBQUVaQkNkMTFqdTVuNy82Yk12NVpaYndQejUvUWRvWjc5OTYzbThmWUJieCtxcXI2dFhYTXVsYXJyYWlvR0lxT3BhVWJObXdRUEVTajBkVFUxTGoxTElOVUowMlpIVDFLVXV2QytWcmVScFVxOW1kNVAxbS8vdnU4Smwvbm12V3RKQWEvVS9wblhyTnc5cUlGSmJaekhZVTZZN2ZwNmRKZDcrZ096MU9udi8zRVJuSkx0c1RsL2pQenFGd1dKUStMSWdIWS9zREUrU3RuUDdFdEtBSXdyK1hYUlF1d3pXNlM0UlpncVcyZXBkMTZCY0taT3RCSTZKMzIzVHl5SVAwQ0FBQUFBUGpXeGFPNzJYVzJhVmV2MTIvZXZOblJJVXpMc0hDOG9NdzAxVE5JZFpIRU8wQmRHNkN1V3Bkck5OWHZKTEkrdHVGSlh2UjlzZURaTStkT3ZKai9yRnZwbHlEN2s2UElzVHRLM2lUblliZVhIVDh4LzVrWGF1MDZTd2U1OTQ2ZitGYkJMOG55SHFkdjg5QlZpbGFRM051M2UrZngxMTZlWngxSHpmUi9EaVBwbC96UjN5T1lmZ2xEVFRrNzNqdUkwQjRlSXZWVm5wWFFZcUl5QUFBQUFBQ0VzQ3MxNWN5S1JxUFJhclhNK3RhdFc0MUdvNU9qaW91THVUdlFWQzhKdlNUcmt0dzdTSmxvcXMvYTNrdHpBb2x3bW1EYWZybjlsdGRrMzg5RVgyNTg5Y0NqdVErVDgvd3M3eWZzRm4yN1lVWEJMME1vQTlmcFd4NTgxVkxubVN4azVlQndzV3RIOWgycmxsR3VxeUxMRkVxeUJIWHdkZEw4eTJSVnpsRXliNThkOHlJQkFBQUFBSXdQN1p6R3dQWHIxN1BieThyS1hCNnIwK215czlmUTFNMUJxc2V6TmplU2UrOVpzY1pvN0dEdWtzVDdtNkpYU0hEMTFVL0huREFyYStuakc1NWluc1hZYlNJWnVLTGdPVzltREI0MXZGYmZ5b1ltWnFDdklLYitzNXl6UlNxTG1oQTNaMEw4SElWeUJsbVhoc3VqdGRPTXA2b1M1d2RvT0xRZkJnQlROb0dmZHYyc3dsc0FBQUFBQUdBY3VIN3FVM1k5T3p1YlhkZnI5UzZQcmEzN2ZJQzZQa2laUEV1L0pKSHkwdThuRmZ0OG1INVphN0x2cjY3UnpkUGN6Z2JGVUdrSDVwYTVzci9Mdy9SL3BvZWpiMExhNm1uelg1dzg0d2NrQUV1dGt5RkZaQ1JQU010TXZmZXhZQmxZU2xNdW9xczQvQlp2VCtmMVJTb0dBQUFBQUJqanVsb2JtQldOUnFOV3E5ME1ER2FQVXdNdi9aSjB5czJvdmsrUzZqU1NycmtaT09mVnJlS25GdzZVUjdYTHlNS3NaODJleWE0THFxeHZKTGY5MWlWajdqTUpxYXVsdHBNQVIyWk1DWTAzcGNnbTIrRnRNdHJCMjVNTzVkbUFBVUxMT2JyL1JmbzZyZ01BQU1EWU04YWFpZGpwZjBrQTVtN1hhclhjMlk4RVpXVXQ5Zmg1WHlwOGxSMzNxMUxGN2loNTA5MWlWKzVpV3BoSjZtYWVWOTl1MlBEV3RyM1BiZ3J5djZDM245ajR3a001bEt2bVgycTRCWmlJaUU2UlIvQUxvVXZENVJFWnlYVG9mNTRrZG9GWTZ2cUU5SGo2VEFPTWlxVVJVYmdJQUFBQStFODV0SEJMQWZPYWY3bmpnUVdwMWVsT1p1VjFybEozNUxmRnYyZnZjdHRtL1oyQnVhV2hTV0lzc3l1dEhJUkk5QldUZnRrR2JWWFNZdnNkU1BvTmROUVZuQURKdlFRcW9RVU9rVnBPVFZPMkMrM3NMa1VKSFlJRnk1aGIvUHgvYmJwTWp2OUhBUUFBQW92OGQrejNBRHlHdmgxMXRUU3dQMVpXVmhiM3A4ek56ZVcxQ2ZPOFh2VC9QTDZFajI5NGlsMy9UZEVybzVOK0dlUzV0cGU4d2Q3ZDhOYTI0TzhJTGNhK1k5WHN1akoranYwTzRaT1RRdWxMdXp2N082eDZMZkhrdyswaXVBTUE2NVhZUkZ3RUFBQUEvSGM4WmxSVVZEakt3RHRLM2x5VGZiOW5wMzJwOEZYOWNBR3FMTzFTWnBxaVpuM3JPNlYvSmcvOXR2ajMzQ21SL0lHOGN2YkZrL1M3ZFgvNUdQakxLanQrUW1MdERDeVhSZDI0OWtWUDV4bmVEcEVCYndIMk9JVHlFeWgvQjVtelU3a2ZnaVdlRFI0R0dIL3VqNHArTHlubHlldFhXdnJOdUJvQUFBQ2pMRjBtZnpOdUl2by8rNUJLcGFxcHFTa3VMdDY1YzJkdGJhMTFTeXlKamkvbVArdnhlRjJqc1lQYitaa0VhUko5SDl2d1pLWHVDSGMzdFRwOWU4a2JIbmV4ZG9tY25Ed2pVNEtyK1AwRG0rNWZxWXBXaEhUNjdldzJEZVhBL3A1Mi9WN0tXZ2c2TGprcmJuSVdXU0hwVnhKdTZhczRjTVBVMjN5eDcxSzcrV29IV1plR3kyVUpzYkhMRjRaTjhQT1BMOXovMmIyMlZZbUQzV1dpY2krM25KWDlEcGdOR01BajVEL2Rtc2taWDVwN093WUhjVFVBQUFCR1RheFVlcnM4QXRmQkgvS3NCcWtPMmxKZDJGdnZsWDNBVm41K3NlQlpYaTFvbGw3ZlFyYVRlT3lQV1pHWUpQK3p2Sis4VlBBcU5kd0luTDgyTzNUL2p2WWRxN2J2Qmp6WTMzTzE5Y1ByRnl2VE1wK01UVi9ZZDhsZ3FqOXpzL2tpeWJwaE1ZcW9XekxrOGJFay9mbzkrcnJPeGlLMk9DWHpOTlFLQjJWRVlRQjM0VDlnQUFBQUdFdG9xc2NuNlpmWXV2VjM3UHI2OWQvL1hzNy9zVSsvckgvZC9IeVdkcW1mcWtQL2JOTlBmbHY4ZStiWlN5c09oWFFBTGp0K3dsRnNJekc0dGVITm1HL01qZXhMVWN5ZUVidDhJZE1VSEx6dk5mNEcydVZlVXZmaXRRY3ZBOE9BQVFBQUFBREdGcjFlNytDUndVR3F4eWRQVVZmN0pUdStkMzN1OXl0MVI1d1A5eVhwOUtYQ1YvMzA4NnBVc1d6enNyN2RFUHpsb0kzZHBrWFB2QkMrZHYzRTNIOStSM2VZbTM3SlF3UFc2WDlqazdOdXZiTjQ2b0lYRTlKR0pnRW1HYmhwMXhQaFU1UENKeWNHSnYzU0hreE5KRDdRMGxJblJhQXBSNld6bk5hTnBsQS9HQXVLUUFNQUFBQ011Uy9HcXR1V3NEOVhjM096Y1B5bFRMNzZKclZ2MzM1Mi9idHI3dVBlZFhoSTJYNy8vVlZ1MnZUVGtTZmlWRkVPVGsrWDdxcXpGZzhqY2ZkSG5PTFY3Q3NuZjBueHlaWlMzdktJK0lUVTFkUG12eGdSbmNJODFHL3F2TkhhRUN6ZnlXbXhPZFRoVWJhTGpQUFpkTm9MbWpzTTJPRWhGSHBCQXdBQUFBQ01WWkVKcVRldnRwRVYvZEhqMU9lTjFBVURkYUdkNnVtMXJGQlVaMi9QOW1vZHU3TXlPVkU1T1NrOFJwRjBTMGJTalBTWTVFU3lJdjY1MkVwWFRER3QzMjc5dmN0RG5IU1E5bDZHT20yZTVuYW1GVnBYM3hUa2YxUE43UWJ1M1pQNmxydG16NlNzTGNCRGY1WFJLU1Q2c2p0SVpWRnBtVSsyTnJ6WjIzMWVwbEJHcDJXR3dpK1hlQnRvTVh2Sm5KL1ZzNnJPL0tNRXdqTUFBQUFBQUlTWSthbTNxT1BpZjNIMzk5VEtlT3JkajNtUE5sdzV6NzNiZWRGQUZyTHk5Y0dSOXRMVStiTlNGc3hLblQ4elpmNHNrUUhZNHltVWZDNUx1NVFKd1BwMkExblVTY0U3amRaZHMyZFZEcWQwVmJTQ1RiOXNVN0FxYVRIdkVKS0JwOTFUSUwvVmtuNUpCZzVRcXZWdi8rZmhBQ3l5QmhaM0kycEJBd0FBQUFDTUQvSytucWtObjZTZC9qUXFPcEtLVG5IVWhsWi9wYzNscWRwcUdzbnltWFY5MmwwTHB5OWZTRzRqN0dvTGN5YzZtamZ2ZHNyYUR1enk1R0wyOFNvQVp5MWxwMlhTWHducUFQekMybXhqZC9kSmF5L28vOGo5SWJPUjIzTmJHVC9IL3Fqb21UT2pia2tQbnAvQ1ppb2owZldmSmJTelVDempIR2FOc055SXl3KzFIZ1JsQUFBQUFJQnhMTVFyaXpEUmQyckRQK1I5Sm1WRTFJS3BzNmJIVDFKeTUwK2Vra2hGUmxCVGtucTd1MmRmT3NzOTlrcFhSMjkvZjN0WFoyKy9XZkRrWHgrc3RqUU92eUtRaEp2MXJTTUJXR01Kd0d2VzNPOXlpSysvMjRvMW1wSFFXTm5RcExVMnF3YXQxNGR6TDh0Ui8yZFdaSHB5Z04reHRPTzd0TjBETm8vU29xSXlMV0llWVBTQ0JpQjAxN3R3RVFBQUFHQmNtZHhTTi92WVg2SnVYRTJOamIvejFqbXB5dmlSMEpzNW5acVdZbG1HUlh4V3QyVGFMWUxuSVFHWXhHQ3l0RjYvMm42anM3T254MUVTbm5YLzhzejdsNmZNbjZWdmJtRWZ6ZEl1SmJlUDVqNzhVdUdyZW4yTGt4ZjhZdjZ6ZnIwZ2ZwcGphWFE0Ny85cytSdE1Udzd3cEVlMi9aOGxEdU9zQjBsNlpJdk1VZTRWZFU3MGdnWUFBQUFBR0hQa2ZUMGsrcWFlK1RSQ0p0Zk9tSnM1MFJwMG95S29oYk9vcGZPb09PVklRSkVNSjRzTGx4MmRqWndrTlM2QkxQUFRwNUs3SkFtM1hiOUt3dkRaZHY0aGpmc1BrVVdabkdnSzY0MlN5WHRzbTQ3L3V2ZWRlMWFzY1ZUcGFrZkptNk1RVURsMXNCcERhelpnbC8yZkl6S21kQjZxSHJoaENjbGhFeFNSdDJTRVR3NW9IMjlmOVgrMjNTS2pSWWRhbW5LN0ZqVE5DL1JvQkFZQUFBQ0E4U1FZZWtETGpXM3lqamFGL2pQN2g4eXFGTE1xMVJ5YlNtNjU2ZmZPRDMranZOWTZQWDdTcWhselNIeTFSTitsR21yWlBFdHZaNm5kMTMvcjNkN01KQ29qV25yUkdIYkJTRzZkdko2a0dDVlpTQmp1N1RlVERIem15aVZlRXU2OGFKaENVZjkzUWRiQmk4M0hPZU9LU2Zpc3J0RTl0dUZKN2doaFFxMU8zMTd5QnROUTdHLytIbWJzUHk3N1AwZWtKMGZPU0RkZk12U2NidTQ1MDBJV3NrVzVmR0dBbTRYRmZLcXNUY2NTbDU4NDYyTXk0UWQ4MHJTTEJtRUFBQUFBZ0FDSnJkc1QwL1NSb3JsS2VyTlR6UDRtOVpMZVNabVNpYk0walVmbGZTYnQxRm56azlXV0IyWlBvOWJlYTRtKzVMdTkxUEYzLzc1ZVNoNDJrSjVBRm9tcFQ5WjRJYXpscXZObkpORTZNem1WTEV3U1B0RnlycjFyNUtWR3llU3IwbWFRNWUvUEZVOWZ2bkRXL2NzcGF5ZmtUeXIyMWRWK1NUS3dzY1BTRkp5VnRYUjBvbTlJYzluL1dSWWZ5d1JkK2VSRXNzUjhZNjRsQTllZnVmN0JvYmo3bG85R0J1YjFmNllwbDNuV2NUU21uV3lSaWMrckV2dm5IMm5vbFNEMEFnQUFBQUFFWE5qTnpyalBTdUkvMjhIazNpa1JraFNsSkVGT1JVZ2xNVElxSm14b3Q5NUI2cXExZjdIQlRQY05VdWQ3cWE2MnFyNEw5YWtURjBlRlI2MmF1V0I2L0NSTHcrKzNsMXU2UFZPVVFNTXYxOENBVFVwUWhKc1hxZ2RtVEpSWE4wczZUQzVmTTV1RVNRQSswWHF1NFlKTk5XbG1oUERCclg4a0dWanowR3BsY3VJOHplMU1aU3dRaWR2L09WbzV3MzZIU05zcG1rbmlWV1JPSjR2NWtxSHZraUVpUFRtUXIxNUUvMmZ4R1ZSbTF6UFpWZnV2Mko3TWxxTWs2QVVOQUFBQUFEQmFZazZWSis5N2hrUmZrblVYeFV2VWtaSUlCMjIyWlB1VUNJcEp5T1QyRHBLY1pRcjEvR2N2ZGx1cVBTZEZLeTNwOThmZm81SVRoK0tGMDIveGd6M2RBaHRqRlgzTGI1Vlg2NTMzaU9aS2lsR3V5cHludlRXenBrVi9vdVVjdDN4MDd3MVQ3VjhPa0dYYVhRdm5QN1RLNVRUQ2ZzSU1BQ1pVQ2tVSXZUSFkvcy95aVBqSTZCU0I5NE9EaUNzZm5XSEFia3ovUzdzNjFrRmNwdGtBN0RDOUNteHgzQWpzWUFzYWhHR3MrS2Z1eTdnSUFBQUFFTXhJOUxWMGU3WkczOXNVUTkvQ294TmtFeExDeUsxY0lRbVA0cWZoN3FzRDF0dit2cDdCeE1SL2lZeUltUjRSWTNtQW0zNHB6Ny9TMC9Ld3ZpWFR3dzk5SlRXNE1hRkdoRXkrWk5vdFpHbTQyR1kvUXBocEVFNmRQK3NiaitlTWZneG1TM0JwcG1hRVVQcGwrejhyNCtkMGQ1NHhkWjdwN2pqVDEzdk4zSHR0YUtkUHJlRlFvWnlRbGpraE5UTW1iWGFpWmlXNUc1QVhMUEZ4NFdjYk1oZHAxbEZBbDJCQ1lBQUFBQUNBWUpIK3p2Y1YrcXFwVVpJVmNaWlczekM1SkhGcXVDcE5iaDk2dWFJVHdvWnVlMVpUdmNNTmc3ejBLeUlBUzhKa1RoNDFMNWtlY2VBTHlqemc3Zy9GOUl2dXZOblRjS0d0L21JcmQvNmt0cHJHdGljYlJ6a0dzODIvUkd6b3RBQlgxamV5NjFjdlZwTEYwWjc5cGs3anFTcXlNSGRKR0U2NzUvRUFKbUdSc1ZiaXprbGsvRUJMTTRsYllwdGU3Ylk0YitibGJNR0V3QUFBQUFBQWZwVzg3eG1TZm0rTGx0d2RaL21tclp3c1M1MFhSVEt3Mk9QNzFWVHZrcEc3dlBRcmdpVEtXUnFrNVdIbXVXbnlhcjFuUDUweU1vcHRFSzYvME5aMi9XcWdZakEzQUd2VTZhSHk5aWc3ZHNLekEyKzBOalNXYmlIcGw4VGcxSHNlODFjTWRsTCt5cjc3TWUzZ1dCSGxyNWg3TXY0cEpDNUtiUTA5TGdtT211NEFBQUFBQU1ITS85K1o0ei9iRVZ1M2gwMi9xWnFvdUZSM2F2YlNrWlNKTTUvdGQ1YTdtMzdGR0VoUGtKOXM5YUFSbUl0cEVDWUIrTk92VDl2SDRGbjNMLy9HWTk5VEp2dHh6R3BsNWNqMFM5clpNMFBpRFZpcmI5RzNHK3kzcTZJVkpNTnJaM04rYTVBMFNkOTlzOWJLNXRjanBzNXovMXZVK3NsMkVvUFYzODd6KzJmRXJlbC9hZTZjdlNMT1E5TXkxNFdkYlIrZ01DRXdqRXRwbEF3WEFRQUFBRnhxcGZwSE0vL0tqVzBUeTE5T2xGTWVwbCtpZHdrMXFCcGFuNVppbWUrWGN2U2wzaG5wQk9YZ0RXZnpMUTNHS3R3YUNleElhbHpDMm9VSjlqRzRjZitocnc5V2E5YXQvc1pqT1g2NjJ2dks5ak1ySWRUOHk0NytaVi81ZXUzeTdNVUwxRWwydnltNDk5dVV5akkvc05GbzFPbDArL2J0S3kwdDVjWGdpMGQzejh4OVhYWHJFdCtsWHgrV3Z4SVZzR1hPUXFrM0V3S2pGQmFNTFdzbDBiZ0lBQUFBNE5KdjZJN1JmTG9wN3oxRGJsZkVXd2I2Sms0TmR6djkwcEVqbloraklpenovYnI4YnU4b0FFZEZPdy9BdmlVWWczdHZtRDdiL3JmRy9RZS85ZnlQZmQ0am1xUmZ0Z0lXeVpDaDhvYTBOdlBPMU5VMzVXcVhrWmZ0c09FNmVnS1RmZ21WU3BWdFZWUlV0SFhyMXVMaVloS0ptWWR1WG0ycmZYMWQ2ajJQelhnbzN4K3YxcnZ5Vnk3N1AxdnVTc1htYmU3THNnL2N0RHRKSFFBQUFBQUF2Qlo1dVVIUmJCbjZteWlud2hYUzVObVJicCtDcEY5NitLaWxHaXBPNlRCZ3VQcFNMNTBRZ0RwSjFoaTg1THZ6N2xCR1JiRWJPeThhL3Zya0x3NXUvU1BKd3o1OHJ2ZjJmY0N1Wnk5ZUVDcHZFbFcwb3FMZ09YcjN6cEluTmpycnRqMGxUZUJZbFNvL1AvL2N1WE1GQlFWa25kM2U5c21Pei8vZmZmMG1QLysrZzdhNzQ4WDB2eU52VkY0Z2RocGNhWS96ck1UUllHVUFBQUFBQVBCSS9HY2w1SGFSMHRyNWVWNlVKNmZvRys3d0hCVkJMWnZuYk05QnAwRmdZSUFlNkhjUlBEcE1mcm9PMDVNbVBmS041WGRPdTVXN3NmWXZCLzcyNUMvYVR6Zjc1Q21hOWEwN1MvL0VyR3ZVNlFMOWgwTmR4blNIRWRvYWcydHFhclJhTGJ2eFJtdEQxZk5MeWExM0VkZHgrU3MzanhXZlhxVVNOMkszMDZoTml6MFdBQUFBQUFDOE4rRlUrWlFJU1V5WXBmbVhtZERJUGYzcWtkRy9DMmRSa1JFdTloZkt3SFNQeWR4eXRyZWhodHc2T1RTczVhcVhGYkNjWTZZT2ZuelozYWx4Q2V4R2tuNy9sUHQvRy9jZjh2NzhMeFcreXE1dmVtRFZXSHNuY2ZvL082SldxeXNxS29xS2lrYmVQcWJPMnQrczh6WURpOCtoanBwL1JlYlE0Y0FzYy9oOHJrcGhEWjFGZENrc3pJY0VJZTFUcWhjWEFRQUFBSUpIektueXNKdWRNK010MzZnVHBvWjdjZ29TZ0ZrTHhZMllIYlIySWJWK2l4KzgwZGwvcVUzTXVGOXBoOGxTQXRyL2xKRlJheGN1cVdrNTkrblhwM3Y3emN6R2oxNzU3N2FheHJzMlBSSXh3Y09aZSt0cXYyU2JmOVZKaWJuYVpXUHR6U1RVLzFsUVhsNmVWcXRkc1dJRk15cVl5Y0NhZjMxM1FscW0reEdYRmtpekhwYS9vc1dtYUg0QWRxY1Vsa1JvV2liUGkyWUJCSGtBcG0vaUlnQUFBRUR3VURSL1pra3VFVU1ULzNweUNwb3pabGo4N0VFa0EvZjJEdWkvTnZlSkt2Y2xOWFNGVjUzMWEvTXZ6L3owcWFseENRY2E2dHE3aHNKNTQvNURodE10MzN2ejN6M0x3STl0ZUpKZHozOG9ad3krbVJ6M2Y3YW4wV2hxYW1weWNuS1kyWks4eXNDT3dpcnQwVkUyVzJoSGdWbEtPWXFvSXArVkZ0dmtMTzVZZ0dEaDdXY1lBQUFBOEhYQ24xOG5GUHFxR0JrVkUwWkZLc1BDbzZTZW5HSmc4dERLdEJRM2ptbytULzMrM2JCMy94SHhqMGJaMlNzU1U1K2pIY011R3NNUGZVV1cwVXkvaktRWTVTUGZXSjQ1SlpYZFl1ME8vYndIUTRML2RmUHpkYlZmTXV2YTJUUEhZUE92aVA3UFBFeDNhSktFbWJ1ZTlJVjJkL1lqbW4rczYyYlcvOC9ldThDM2NaMkhudWZnUVJBZ0NaSUFYeElmb3Q0dnkxSWN5NUUzYmlRN043SlQ3NzJXVzd1M2JtNFNwZDcrMGwrVHJwM05UZFAwc2JaL2ZXM2IyMnY3L2paMzkyN3EyTzF0bXRSV2F6bUo2MXB0YkRteFk5bVNiY20yS0ZrdlVpUklrU0xCQjBnQ0JQRTRld1lEekp5Wk9XZG04Q0lKOFBzSGdRZURtWU9aQVNUaGorODczOGNiak83bFhIL25iNnZiWUdXOWJqTmtzb1pZYmFDdUpDVXAzQVVBUzBGTlk5djRxUi9CZFFBQUFBQUFvR0EyZis1UGZlMGJ5elQ0bXBmK29OT0ROL2x3UTV2TDMrRXVaSWpGUGZJYzRQSDBZbDFQQjVxWlJRdUx5RHhHZXVZOCtvZVhwTTNvOS9oNHdqRVdvUTdzSEF3N3I4MDRacUtPcWFoallzNTVOVXhYdXQ4ZGNJYW1UUFI0Q2RqVTJ0SG85VjBlSDVNZnh1ZWlGLy90eExwOU45WUZtMnlPOExmUC9PRDN2dlZIeXNQbmYrZWhqcWJHYXZ1WTltNUVIWjM1N2xSYlcvdXJ2L3FyTDcvODh1am9LSDJZVHNRbno3N1dmdXY5RHBmSDF2NWFMY1QyQ2xweE5pYUdyWW5SbVFtN0Y3N2p2MzZrcEQxekJCam5IbUtEdGJKemdURTJLQzNtU1M0bUhGa0dCd1pXS0tOdkh2bm9iNzRPMXdFQUFBQUFnQUxZK3NXLzZyajF2aklOWGp2V3QrRTdkKy8xNDV2OWVNM08ycFo4NWdBbmttUnNQRDA1bmJvdzhZbWhXV2xIdVptUVpxT21CdFRrUitzNnBZWDJGdFNSU1pCKzRTZVNBRmNhNDdPUjU5NDVvVXdKOXRUN2Z1bi8vcjNXemVzc2R6eHorc09QZit5QTh2RHh3NTk3K082RFZmaEovWGYvYTc0UllJWHA2ZW5iYjc5ZHpvV210T3c1dVBNM3YyTlBnSTMxbnduUGZ2WGhYOHp1YTk3K1Z5REFMdDBMRTA3dEs4SFUzb0xtOStwTFlRSEFDb2IrbzlXMFpkL3dLMCtWcTdvZEFBQUFBQURWU0gzM2pzNDdIcXdOZHBYdkpad0wwdXpXaHN4M2VhL2ZidjNueWVsMDZGb3lkQzJia0J4ZWpDSWtNT2ZwV2VrMk1Kd1Ribzlrd3FNVGxmaDJ0RGI0cWQ0ckRoeWZpLzdUVi8vVTBvRmZPLzdHTDkvN0JlWGg0UU8zVmFmOTVwLy9yUG1kcEtucDZhZWZWbXBpVFp3K052cm1FZXZmZmZqZGoreFJVUGNqOWlWYzJWRXN3N0NtdW90MWdxMnphTUxXcU1hY2M0QWdNTEJTb2Y5MGJiei9FYmdPQUFBQUFBQ3NRQnFjZHI5Rko1TGszTVdFb3I0eURwenQzQnRac09yUXV4QkhveFhjRVlNNjhJTzMzVTRkV0M2TFJSMzR4Vzg5OGNBemZ5S3FpZlczei95QUxYeTFwN2ZuOGNPZnE4N1BrTzM2enlMMjdObERIZmplZTdPMXdZWmZlYXFveEFmTDhLK1YrVnFzSlVRL1hWNlFmazBzQjdKL1VoaEtYd0VBQUFBQUFBQkFFY2dsb0dWcS9SWVZzQ0p6NmVNL2ordnNWOW9SejJVM2lNV3Evb3A1WE83N1A3NlAzbWRQK2RyRVAzMzFUNDJiVFUvUFBQaWwzOWJaNzZ1UGZxdXB6bGVkMTBWWC8zbDhERjA4aC9yT29KKy9pbDQ3SnQzb0FuMTQ5VEthbmhTTmNlalFvY09IRDh2TGMwTjkweGRPbUNvdU4veHJUeEdMRHY4aU5RVmFINGJsaG1yTnVoelpEZ0lEQUFBQUFBQUFBRkF5bkc1c2JyOXZ2YnVZU0hJRXc0WFZMbytocVhCWGMzQTFPTENTQ3oxKzhlcFBuL3k3VHozMG41UU5YanYrQnJYZmdZSEIxV0svU3Y0ejlkdmhRY2wrRTd5aVpTTzVIczd1R3RUWmpkYjJHT1BHWC96aUY1OTU1aGw1ZWZpVnA1cTI3Q3ZrZU93R2RRc1AveUs1RFpLT01nZUJDZThsSUNnTUFBQUFBQUFBQUNYR3hINHBQc2Uwc253cFZ5cTV1cEhuQXlzUFR6Lzc4cFdmdmlPcjc2ZHZ2NGZlV1BzOWZPQzI5Lzd5ajZyV2ZpbU56VkowOTRVZm9KTnZTSmFic0NyWlRUY1l1Q3pGaEYvNkoybEhadnNER2VUbGlkUEhGc0loZ1F2YUQvOFNnNldXSVB5ckZXRHJFY3NoNVFBQUFBQUFBQUFBbElYMyt4SWkrNlc0OFlJN0Z3UytQRDY2U3E0SmRlQURXOVQrelAvNkovL2ZiVGQvaHFvdmRXQmxKWlhlcDcveUcvUlc1ZGVDU3EvV1krMHlQeWZ0K00vL0pPVkw1L2ppRjcrb0xJKytlU1R2TVpjay9FdHg5aDc4cXByOHJPMW1SS3o3SVdVZUY5UVBDU0ZET1dnb2hRVUFBQUFBQUFBQU5uQXNSQnI3ZnJ5dERqZTRVSDNRVmVQajVIVmU3RTlldTU0eUh5ZUJhaGZTZnJvUVR5YTdtNE4rcjI4MVhMMDFqYzNqczVHcDZEeGRUaTBtd3VNVDU2ZlZBdGNIZG01NzZmZi9NNzJIajVrRjZSUWFHNUVzT3RDQ2FyMTc5dXg1OHNrbkZ4YWtuMVRpNFZEbnB4ODBDR2xadzcvNjFTSzNkSmdkRStLOURBU0JBUUFBQUFBQUFHQjUxYVBXYjJHMlNUSXdsTFFjcDlHcEJuN2Z2SEp4OVZ6QU8zZnVWZ3BpZldwTmI4RGpsZFgzMVVlL1JXKzlyUzFWZk82cFZHcG1hbnAwZU9UcWxZR0w1eitTYjZIQm9jbUpNSDBxNytHbUo5Ry8vVmdLQ0NPa2xNSmFDSWZtUXZtMEVTMkJZL0pNbGplSXExZ3B4WVExWmFybUJBc3FaV0hkOFdHc0wzTU4vWkFBQUFBQUFBQUF3SzR3ak1USldnOU9KVGhmNkFlR1VpYkp6d29lUE9kelRFZlRUU2hUQjJzMWxNTEtucmpMZldEcmpwZlBucEVmZnZuanR4NDgrSW1xai9wU3hRMVBUTXhGWm8xUEtTc2JtNXVhbXBzRExYbCtES2dBajQ5OThkY2VlT0tKSitRVjE0Nzl6ZVl2L2JuRzlUU0NLbitHaVZCbDJWaXVNZnhMQkVvc2loTXpJemlNUjhOdXJhcXQ0R2dzL0pua3FmVlFEUXNBQUFBQUFBQUFyRmhvVjJleExrUTRVYnZRdGFUTm9acGRhcjJpVlJVRTNyR215Ky8xeXN1dHlITlRkM2NWbit6YzdPelpNeDljdmRMUHRWK1dtYWxwdXRuNUQvdm9Mdm05eHZqb25vbVFFanlmT0hOczRkeGxXNTVveHh3dHR0Ullxa240bDlNSDJFeEJoV0ZvWFRLMytHd01mWTJoSnpBQUFBQUFBQUFBNUVYRGhXTWIvL3B1dWpBY2x4N0dEQUljbVV2SEZ1eCt6NjUzVENqbG9FTlQ0ZmNHKzFmUGxieDF3eFpsK2QxM0wxVHJhWVlHaHk2ZSsyZ3hIdWU4Ky80R2V2UDY5SE8vWTlFbzNZWHVtTjhyemM4ZHV1VW1lVEVSbjV4NSt3MnltT0FKbzBFT2lkQTU5WFpKckdmL211dXFxQTl3YmhTcHhCWFJWTU5DdVp4bm05bkt4cDdBaHVmMHh3ZUowQUFBQUFBQUFBQmd3RDBUNnZ6Uk4rcXVudkE0MEkxK3ZLdWUvN1Y1YkR5ZDE3QkIxMEIwY1krOC9PYVZpeHZiT3Z5MTN0VndQWGVzNlhyenlvVklMRWFYKy9yNkR4ejRXUFdkNDlVckE1TVRFK3dhT2NtNXZxR2h4bE9qckV5bFVuT1IyZkRFeE15VTJoeHJmSFNNbXZDR3padWNUcWZObDl1L2Mvc1RMeDZUbDJkRzMvV2Z1OFY3NDFiYndrb3NWSlkvaHQzWnY4SSt3T1VKQWd0SGdDQXdBQUFBQUFBQUFGaEN2WGZqWDk5TjcyK3N4NS9yY056c3gxU0Q2NEt1TlR0cmRWdEc1dklUWUo5aldrbUVqaWNUUHp4emF2VmMxWnU2MTJkUFBMNTQrZkp3bFozZDVFU1l0ZDk2ZjhQTzNUZFNvUTIwQkZuN3BWREZwV0pNbjZJYjBNMlU5ZFNLcjF5OFpQOFZEKzI5U1ZtZWoxeGF1SHpWMnY3RVBsank4Qzh5N1FNc3RPcVNxTG5ad2NKTVlBQUFBQUFBQUFCZ2FIci9TTy9mUGVCYmpOelQ2dmhrazZTKy9nN1gxay9YYjdqVlYrUFZ4N1FpcytsOHgyOXhEU2c5Z2Nkbkl5LzNuVmtsRjNaalc0ZXlQRFIwdlpwT2JURytHTG82cUR3TXRMUnMzclpWNTcxRzZBWjBzNjZlYnRhQjg4cUZWbXFKUlNPWDBuUFIrT1ZCZThKYUVzZTBDUDlTWEVRa3lrb2VNcE9uVEpBNHBWbVh1c3dwQjQyTUF5cHJDR1E5QXdBQUFBQUFBQUNQdXFzbk9uLzBqUlkzdWozZ29QYzFQa2ZYYm05ZFVKaVZhbjhDc0lJREpUdmM1NGR5aWRCOUk2SHU1dUNPTlYxVmYyMzl0VjYvMXl0blFZZENWU1hBMThmR2xMWkcxSDdYYmVpMXYyOXJSN3ZUNWJwNkpUc2hmSHgwckttNXFiNmh3WjRBYno5KzlqeGRTQ1ZqaWZna0ZlQ2FqVDN5VTVnWTVOUTAvRXQ0QnN2VlhjemRTbm5BckhXSnZWYzNGNWZidU1oc0pyQ21KWkxWVEdCb2lRUUFBQUFBQUFBQVJtcG1RajFIdnV4eG9MdGFIQTFPVk90M2JyalY1M1FMdnlybm0vK3M0SE5NdDdrdlhVOXNraC9LTFlKV2d3TjNOUWY3WWxJRytQajRsUFR6UVN3YUdoNk0wdnNSVHRnejJCd01CbG8yYjZxQWhrbVQ0OW5rNXhxUHAydGQzald1NVU1SWlnTmZ2VEt3Yy9jdU96dnUzNkZlbklYNVlmZFlJRDBYZGRUN3NHVmVzRm5ySXpOdHh0eTFnaEZjaHJHRTFiQU1ENjJDd09aSGpLM1dBQUFBQUFBQUFNQ3FwL05IMzNBdVJQNUR1eTM3cFNTVGhiOVdzek1VVDlmUHBEcFdsUU8zMWZ2N2NzdS85K2p2VHMrTTJkTG16cDR0bTdidDIvdEp1ckFDVDJwbWFsb0ovN2ExdDltdllxVno0T21wS2JrczFtSThQamtSdHRNZmVFK3Zla0VXb3NNTmdWMkxROWRxdDIrMDlGaFRmeVNXeml5V2ExMFZhQk5yTFNBSXJIMW9GZ1RXYkprWldaY0lEVUZnd09SdjltaWs3My84eHN5RkUzUzVjY3UrSFYvK2pzdm5oOHNDQUFBQUFFQ1YwZnora2JxckovYjZzWno1YkdtL3hkUGhQcDlDcnJsVXkrcHg0TllHOVd0a1BKNnd1VmRvZUpEZVhubnRXRERRY3Z1blBuUHJMYmQ1dmI2VmMxS3pUQmZmeHVibWdzZnA2dWxSNmtKZkd4NnhJOEJOZFQ1Nm01NlAwdVhZdkZSWExINTUwTHR0bzk1UWlWQmxEYld2QkphclNYNjJWeTRMSVdmdlo3NnFkVmJOZnd3RFlzMlRoZ2U4TmRod3JOdy90Rmp3a3dBNE1NRGh3MjkvUWJaZjZVOVVPRFE3OEY3N3Z2dmhzZ0FBQUFBQVVHV3MvOTREalNoK1YxQXFjeVhWdS9JNUxIZUpMWkRRdFZReEwxcnZuSnhQQjFJa1d5M3A4dmhZbzlmSFdtS1ZFVm1JOVYzTEZzR096SThrazdHOGRvL0ZvbjNuUC96Wno0KzdYZTcxdlJ0WHlFbU5YUnRkakMraVRQN3ptczYxQlkvamREbnBPTEdvWkxPcFZLcXB1Y250ZGx2dTlmTHBEd1l5Q2RodXQ3K3A3UmF5RUsvZDBJTjFPeEtoNHVvclJYTjhtSEEyNWcrb3QydFhkc1M4Z3NENlVLM3RtY0M2SFN5RHdBQWdRTEZmNWVGQ09GUWI3SUlyQXdBQUFBQkExZEQ4L2hIblFtUnZRUHArM0xLK3B0YnZYSnJYZGFCa1Q4M3B3Y1U5OFhSOTFtZk9ucmsrR3ptd1pVZlZYL09nMStHcmMvazkyTzJVbG5YUEp0SW9Fay9IRWlRY0plRllPcG9nckFZZk9mcjk5ejk4Ny9NUFBCZ010Q3o3aWFTUzJSOUJMTXMrVzlMVzBhYjBVZ3BQaEx0NnJBUGR2YTNaS3pBZnliWlFrcktndDIwUUNxcldIODJHNXF1eTNmQXZmY29oR0xHSWxrajVITEgxYzlBU0NiQUgyQzhBQUFBQUFOVW1ZeWVmOWpqUVZwOGt3RzFiUEV2NTBySUQxenZWRnJMdkRmYi84TXlwZURKUjNkZDhTOUJKYngzMURxUDlVdHdPeVlxNy9NN2RIYTQ3MXRkOGFsM04rbWFubTlud3dxWHpmL3BmSGdrTkR5NzdpY2d4VzRyWFYyeGlOaDJoeHBQOStNMUZadTNzMHR2V3F2L3RZR3hDS0lEbXdrZEkza0pxK3BRck42ejlJSEIyS0xOUXJYVkxKRzRRMk1iSUFKQ2hjY3MrTmdoTUg4SXZKUUFBQUFBQVZCTTFNNkhhc2I2dDlkSTM0K1p1ZDdtbi9uSWR1TlA5NFNqYXB0VEV1ancrOXR3N0orN2NzYnVLMDZIend1L0JPMXRkVzRLdUMrRmsvMVEyNGhxTFJSLy85cDkvNFlFSGQrKzZhU1VjcE10WmdzU0Irb2FHeVhpYzlXcUw3K3FNZFMvTUQ5ZldkUzZHcm9tRHZpbzJXaCt4Ry9OR01way9UQ1RSZEtoVGg5VXVTZUxqWXA3QytZZzdGZ3pDZlFHTG5HOEFRR2o3bDc5RHBWZXhYL29RcmdrQUFBQUFBRlVsVnhlTzBmdXRkZEwzYUgrNzIvNk9EZldsVk9VTzkva1cxNER5Y0h3MlFoMzR2Y0YrZUlNVTNBNUVOZmhUNjJwOHVSOHBxQVAvN2ZlZldnbHhZRW95bFNwK2tBYS8yZ0Y0YnRZNkNNd1dnazZsc25PcWsvb2djR0d0ajNSbHBhekN2MXI3Ulp3MlNNckdsZ1daRFRONDlkYXFEUUtMSTh4UTZBcklHNWZYdit2aGY0RHJBQUFBQUFCQXRWSjM5UzJQQTdXNGtkT04vUjJ1UEh6TVZlTHYxa0hYZ01jeGR5MnhMVTJrdzRnbkU4Y3Y5QTFOaGUvY3VkdmpjbGZCcFE1TlRhcFhEeThVK0lPRkIvL0N1cG8zaHhZamNZSnljZUEvL3NPL1hLN1MwRjZmVDQ3VzJvelptc05PSkpacWF6VVVwT0pUTTY3MkZwUGFWd1pQSkdaT3k2OTlaVm8rT29ORGVRSnpYc01xQ0d5bjdSSlg2SFZCWUgxakpRZ0NBd0FBQUFBQUFLdGJnQWRQQkRNUnhRSnFYL25ySGFVOW1IckhSRS9OYWFyQnlwckw0Mk5QdmY0cXZhK0NTMzE5ZGlhclJqaFpzQUNqVENqNDF1NGFhc0x5UXprT3ZGd241WFNWc21RYU81RjRNWk1MWFlnQWo0V1hzUFlWUC94TFZ6dUVVV085b3hJcjBTVTJsTjJtTFVNMUxBQUFBQUFBQUdEMTRseUkwRnRucHZCUWZUQS9rMGtreS9LMTJZUG5xQU0zdTBMS21uZ3k4Y016cCtndHNoQ3I2S3M5UGhlUkYycnhYSkZEeVE2c2xNVTY4OEc3OUxZc0oxVlRrMS9aS29zUFpDa21FcWZtb3hyZEs3YjJsWldac3NuVnpHck5qME1ZV2RTTU5vNXJFUVRXN29KTm90aUdaekFJTHdBQUFBQUFBTEFxcWIzZUp6bE01cXU2L1Fnd1ZkK0wvY25qUDQ5SDV0TG1XMTRJcDk0TUpjNk9KL002S2dkS3Rya3VkZFo4Nk1EcWpwZkh4Lzd1eE05T1hMbFlxZlk3RzRuRXNnTHZjMHdYUHlDMTM5MGRhbWI0a2FQZlg1Yno4dWlTbHBlVzNqYTFFZFRDL0hCV2dLZG1STnZyUGRHcTloVkhJRzFyckVPbnlIYXJWZVZkZ1ZvcjM1YmpReUkwQUFBQUFBQUFzTHBweWFSQTI2ei9QRGFlb3VwN3NUOWhHUUdPSmNpRmNESWNUZmRQcFVLUnZDc2sxVHNtTm5wT3NCMlM0c25FbTFjdVBQWEdLNVdZRVgzMm1oclRaaytxR0RycUhSMjVMUFR3NU1TeUJJSHI4eXhiVlQ2Y0xxK3luSEhnSmFsOUpRai8wdis0MUJFeHppNnpCYXRzVk1QQ21zWkZlVmJEWWplM1V3M0xwSmdXQUFBQUFBQUFBRlFGOVZmZlV2M0JScDJwOTg4dGhxN1pWZGtvWThoWHBsSmQrYzh4bGpza1JaMU5vNGx0Q1ZJcnI0ekVZajg4YzZxck9YanJoczMwdmxJdTllWHgwZXhKNGFTbjZCUm9oWjJ0cnRHNWJOejF6SWZ2TFgxTEpIYldialFhRGFBbGZVY0dycXMvSmJnOUFWWG1GaE9TOU9XVFJKeDVWakFibDVqc3duc3FzK3dRZXFiWlFSbGNQSjlxV01odUlyU04xSEFBQUFBQUFBQUFxRHJZcjhEbUtkQ0pKSG45N2JoOSswV1pDTEN5SEltVGZCT2hGWHlPNlY3UEtiWkpFcElxS29lZmUrY0V2ZEdGbFgrZFQxeTVxT1EvTnpwSFMrbWZicXhVdzFxV0NMRFQ2VlFjZUdacXVpUUQ2aFlLSUduTWdzNnJiaFRYUUUxclh4bUhkQkgyYVl3NXUyWURzN240ckVsOFdEMFdyQTN0OHNPMmhEdStmaE5wS0dMWmt3a0FBQUFBQUFBQVZoL3ZuMHRZenZqVkVVMW9IdlpQcGR3T3ZDVllpTlU0VURMb0d2QTdSNjhuTjgybFdyUWFITzVxRHQ3VXMzNWphL3ZLdkhUanM1RTNyMXhRSGpZN1E2VWR2NlBlR1lsTFB5N0VZbEY2Vy9wK1NQWCtCcmtIMG1JOHZoaGZaRnNaRmNDNkRldXZqNDNWMUhnQ3JTMEZEMElXRTRxVFlxNnpDbXBmTVJ2bm5meE10Q083UkQ2SkNTSEN6cjI2WFZUanhjS0Q0U1JDOHplR1JHZ0FBQUFBQUFBQXNNSEYvdVRZZU42VGVDTnh2VEJMVTRKajZUM3RMcSs3a08vWWJyd2daMFNIazczUmRCT3J3ZlRtY2JrM3RyVnZhdTFZVVNaTTdmZTVkMDRvRDF0Y0E4VTBRT0tpUklDbFN6RTh1SG5UdGlVK3g0YUdodkhSN0t6c21hbXAxbzZpcm45amN4TzlsZXJZc0ZGM2tUQWFqRG1pYkxFTEVrOHRkdGtTUzVNZ0xmOHBReEJZSUxGWVNlcldCSm5aSGFVSFdCY0VCZ0FBQUFBQUFJRFZRU3BCdUhXd0luUHBpLzJKQWdhTXhEbGlFSTZtZjlLLzJPMTNybTkyc3VabUg1OWoybGR6bWdxd1RvUGp5VVRmU0lqZTZESjE0RTF0SFYzTlFYK3RkeGt2NmVYeHNaZlBucUVISmovME9PYUMya1R1a3VCMkx2TW5oL3FxMCtsTXBhU2ZTTUlUNFNJRk9DOEd4dFU1d0U2bitsNG5yb2RyUmZacjFFeldlazJtM3lMT1V5WmxwVjE2NzJXV05VRmdrMnBZaElrdXEwRmdxMnBZOWgyYjY4QVFCQVlBQUFBQUFBQ3FsUG1lVHlqTEM1RjBIUzgvK2R6RlF1dzNrVWJSM0J6ZzkrZklZaHJkN0ZlL1ZBOUZVdlRtYytQMmVrZlE2L0F4RTFtTDFHREZQT1ZLMGEwTi9rMnQxSVFEUzF3dWkwcnY4UXQ5c28wcjl0dFRjN3BhUDBpTnpjMlRFNUtMeHFMUjRyT2c3WE9WRWVEYXVrNWIrMWdsUDJ1ZjRpazBzVE15Y1puN3BDRVJtaEZVTzRuUTVrV2tJUkVhQUFBQUFBQUFBRVMybGhaK0o1NmNUb2VuMGdXTXllWS9UeVRRUi9Oa09JN3VDT0FHUnJHcElmZFBwZWd0NjdSdWZQTmFkMTRtTEd0d2d0VE9wVnRtVWgzeGRMMXVnL0haQ0wzSnl4dGIyOXNhR3NzdHcxUjkzeHNjZUhld1h3bjhLdmJyUU1scS9RZzFOVGZKQWt5NVBqYlcxZE85Tks4N1BUOHZlcXFJNUdlVFhZak9ZVTFNMkpXSFdKWXRFWm8vQ0NSQ0F3QUFBQUFBQUt1U2xNZFA3OE1KdE42TEZtUHBPcVNQQVBjUEZlaHM0YWpxQmlPWlhHaDYvM2ZYeU5ZNnZOZXYwV0RXaDgrT0oyL3RjdWY3V202ODBPd00wWnRzd3RGMEUxc29TMEVKQzFPb0E3YzIrTnNhL0szMWZycFFrb3RKQjc4MFBzcEdmV1VhbmFOdDdrdFZiTDlJbXdVOU16VzlaQUo4ZW1CUVhxanpiN0syWDZOYXNrNmJaL0l6VjNwWlhKYmVtMDgxTE5WajgwcUV4cllyUWtNaU5BQUFBQUFBQUZEMXhOcDNJQ2tDTEMwbm92cElieUpKQ3FoOUpUTTZsOTF4Tm9WbUdmWDdhSjdRVzRzYlVSTmU2OEV0YnAwMnA4T3hkTkRyS094RkZSTk91MTJ5QnRON3BZRXdpMXczUzNrb3pSYjJlaHRyZlZTR1BTNVg1dDdhdzhkbkk1R0ZHTDBmMG82bTRNREpOZTd6OVk2SnNyNkprWVVWMGRBMTBOb2lsOEphak1lcEE1ZXdrSlVKYkI5Z2EwcWEvSXdOalg5MXl5NUN0Q1dvc2ZJME52WXh5dTZGZVluUTdGTk1FSmQ1U21DdHl1QzZZekR1cU4yQWdBTURBQUFBQUFBQVZjcGlZOWZFd2pCZG1BdW4yclJQalkybkN4c3prVllyWUkzd1NtRk5KTkRFTkYxUFBBNFVkT05PanpwRCtNeG84aGZXMWJnZFJaMlVBeVdwZHNybUdTZjFWSVBsVzVxNHVOdEwranJGV2M5TmxvNG5FMHBhdGZBQWNESkFWZHdWV29MQUwxdHNiT2xMUUN1MHRiY3J0YUN2ajQwdGtRRG41Z0RYTlc3U21od2hKc25QMmc1R2hGVkVvZjFtbjVLM3grem9nbDFjaUcvQWlKT0NiTlJRYkJpYXM2M1ZkRjZjOVczdFpHQnhXMkRkUlFFQUFBQUFBQUNBYWhUZzhHeUlmdWROeFBTNk96bGRZUGgzYkU3ZGNUaHV0bVU4TFJueVNCeXQ5ZUMxSG1sTk5FRXVoSk03VzEybE9rRVBudk00NStUdXU3SU14OVAxb3Nnd1I0enpmVG1IOUZvTnpva2x5M2tPNTk2NHJzNmVaZndnMVhocTZ2ME5jNUZaNmNlVXlPd1NsTUk2ZnZhOHN1ejJCRGhiRVBObEc4blBvcWVJdFZvYlBzR21pZEI2NTdTYUZXd3JFWnFJWXJ4aUI4NDlrL3RoQUlMQUFBQUFBQUFBUUZVeDM3T3ZmdkRFYkFvMVJOTzZUa2lSMlFMRFFLTnpxa3NQeEd3TjhzcFUrdjQyaHljVCtPMmZTZ1c5am81NlI4bFBWcFpoZWFaekdya1cwdld4akFuVG03R1V0SDBjT0NtVjQzSk0xenNtU3Q3bTE1eEluQ2pWdHJjc1gvaFhwcTI5WFJaZ3lyWGhrWFViZXN2NmNtd1BKSTRBV3ppcVZmSXo0aVEvSytGZndjaWFYVndtMHF0Ymo5bHNaNnh6VVYzbHF2d3JRaU50RUZnWWloYjVkdlU3Y0h3eWRQM0VFZWtUdk84K1Q2QUwvbFVBQUFBQUFBQ29ZbUx0MjFFbVVYbXJEOCtIVS80T05YQVZtU3NrQlRxUlZnVzRQMGJpOXNhWVRhSlRFZkxKSmlVUk91SHJyaW1zVWJCZGEwVlphMVhXeUVvc1haT01ES2VReTFoV09xdGJlSUhlcVBkU281YVhsK3Z0RzRxb3dmYk5HN2N1NzJlcHNibXB4dU5aakV0Qi81bXBxVlNxMitrc1k1UGlNd05YbFdWZEVTeDNhNHZJUzFYck5QaXczbmUxVDNIc0Z5SGhxL0RiSUltV2MrcEpVS2tyUWpPNzhCT2hoVkZpVnJDcjJZR3AvWjc1czg4bVk5S3NobXV2UHJYN1d5K0JBd01BQUFBQUFGUXhjejM3VUNaUmVhc1BSY1lTaWdESENpMnRwTFExa3BiekVjUDM1OGhhRDFydnhiSkZ2em0wZUd1WkhaaXJ4Q2pUWGFraTNqdDZsVUl6MmFzZERMVHMzblhUc2g5U1czdGJhSEJJK3ZrZ2xacVptZzYwbExIamxKSUNiYmNETUNwRjhyT0o5R3JYTy9MYVI1NVZqTTBQMS9BVVJvS2pGS1JsbTE0RnpsQ3JJZnY1K29ranN2MVM2SUljQ2dZQUFBQUFBQUNxa3BxWjBNYS9md0NoYktIbVJhWjNVV0VDVEpXc2Z5bzc5eldlbG1vKzU3WDdxMU5rSXFFT1JSMDRFb2RxUEdhL05TUnlBZlo5dDl5MkVnNHB3SVJlcitkcVlwV0Q2Zm1vcUFlUzBEZVhLdmxaeG1GVGxGa0hGc3UzOENsczU4eU5wMjJpMXZ6ZkErRFBJUUFBQUFBQUFGRFoxQStlMlBMMDNVM2pmWjlzd3ZlMFNsK05uZTVpeDJTVjdJTzV2TDh6VTJmKzRYaGE1OENoU0FyZUxQUGZHcnhlM3gyZitzeEtPQ3FuMHhsb3lUcHdMQnBkakMrVzZZV085NmtWc0l3UllGZGJVR0J0akFhV0xmazVKOEIyZEpud1NsOGg2OWl2NlhHYjdZTE5OdUE4eHVEQUFBQUFBQUFBeTBSOE1qVDB6MC9RRzEyQXExRWtnUStPYlB6N0IzeUxrZi9RNnJpeFh2cVMyNzdGMDdYYld5b2xvNXlQRnZLRjJlakFwMGVUWjBhVGlUUzhhUnJPakNhVWEzTEgvb1BVZ1ZmSWdUVXhEWkJtcHFiSzlDcXZuVDJuTFBNandJSVd2aHpCTEhYeWMxYkN6YW9vaTljVHBvWXp3YXdXRTAzS005WVpjM1pRYlkwclkwVm85VCtDSWx0Y0hWOWRuWUZCOUFFQUFBQUFXQ0gyK3o1VHFlUkdxRlJTQk43cmZXdC84a2N0YmtUdDErTkF0WDdudXIzZUdtK3hWWmRQamFoS2RpcENaZ3R0QXlRN01EMjJsbHhFZWlpU0dwMUw3V3h6ZGZtZDhQWlJRdElGeVY3cllLQmxoWVIvWlJxYm01eE9aeW9seGUzREUrSFdqdlp5dklveUFkanRDUmhMUUR0Ymc4U1EvSXpaanI5OHhTWHNBbWJUampXTmY0a2RFM2JnL0tXWnR4a3ZFVnB3QXRqb2JubE5CaFlQRHEyUUFBQUFBQUFBbHBoeGJhV1NjYWhVVWlqT2VHUlRKdlo3VjR0a3Y4M2Q3ZzIzK29xMzN6T2p5WEEwclJqcyszTkZoVkZrQi82SWlTSExvZUJYK2lFaldtcDlkUGE2K3V2Q2ZZY2VXRG5oMzV3RE44c0xzV2hVTnVIU01qQStvVXdBOWdkMjZaN0ZiamNTMkM4eUVUNFQ0OHRYWFRWRnNQSlBoRmJQcExBNE5URjNZTzVrWU81MWdjbkFBQUFBQUFBQVFNV3ovaCsvN0Z5STNCVjBORGhSWGREVnRkdkw5djR0Mkg3WmZqeXZUdG50Zm1UdXdLOU1rbjhKYTRhS0pvaXN3UmZDcVZoaU5YNFZsK2RGczdXdlZrTHhaeDNhTE9qU2w5USsrdmE3eXJJeC85blo1TmVMcExVNUV1RlRGZ0ZhL25vczlRRW1TaWNoWHBNaUxPL0Q3WXFrcnNkS0lyVHVLVUVYWUNyNlVoSzF4UjhOKzEyUm1DTlpQWW5RNFBnQUFBQ3JqL2hrYVB3dEtielcrZ25vQ1EvQXQ1U3FJdkRCa2ZyQkUzdjllSzBIMWZnYzYyNHVkdEx2MkZ6cXlsU0tyZFY4S2tMNll5VjdiK2hRSTNHcFAvQldIMlkxK0VJNGVTR00vQjdjVWU4TStuQ3dpQWgyT0phT0xCQjY3L2M0dGdSWGRJcTF6bjY3T252dVAvVEFDanpPZW4rRHNqd2JtUzE1TTZRWFRyNlRkVjJYdDhFUUFYYTFCb1ZoUzJQT3J6NENxa2wrMW05RERQRlN3bHVmZWVUaWVxNXFqeGI5ZmsyYS9mSWEveklQTVR1UjJLaXN3aG5GMEJrWUFBQUFXTDMyKy83L3hjeTAvRjJZYVFrQVZZSXpIdW44eVI4MXVOQ3VUTlVyODlodm9NbGhLV092WElucmFsTjlGQ1VuSXlYK1pVSU9CZE5ocWJlekdvd3l5Y0NSZUJLRnBXVXF3ejQzcGhMcmRpQi9yZkM4RWlrazZ6bzEzbGlDUkprdzh1aWN0R1ozcmhQeXlyUmY1YmNHcjlmMzVWLy83WldXL0p6OXBEbWQxSUhuSXJOMGVXNTJ0clNERDR4UEtCT0FmYnp5VjQ0NnpUWEJSSndoekF2NVl0MnNZQnY1MHJydDVRK2ZpeStSeUY1bExJM1F5a0ZnZ3dQejlWaHJxcWFERzZMSVhBZldESTdobDBjQUFBRGJUZ1VSeFVxQnZsT2FtWlp2SGVuNjdNTndXUUNnQ21nOTlUUjE0TDBCTEUvOXJTc3UyaG1KcDNYMis4WTBLWExxcndtenlhd0czMWd2YWJESFlUd2VLc05FS1ExVkdISWk5d3AwWUhwcXAwY1RyUDErN1N2ZkRBWmFWdXlIcmFFaEs4Q0w4ZmhpZkxIR1UxT3FrZG44WitNRVlDUkhnTG4yYXoyTGxoaHRWcU9RWFBzMUpEOGpuUURuZ3NDRzBDb25HR3VlQ0swZFFheXBmTWZXcjlRbVFwdEVwTGtPREVGZ0FBQUFVL3VGaUNJQUFNRHlDL0RKN3phNEVMVkhweHV2MlZGcnVYMncyUkdlRXZxa24zSFEyUlI2WVR4ZGNObm52RFNZYWphOXJmZmk5VjYwMW9NYlNwMnpUQjE0SnA2K3Ridkc3VmdwYjF3NGxqNDFyRmJZbHUyM3E3Tm5KWC9ZdkQ0MURCdUxSa3Nvd0g5ei9HZnlncFQvM015cGdPWHdlWFV1YXFhNDJxZXdxQ2FVcmFtL0dtRjJzWXFvZCtEOEU2RXh0eXVTMFlFWjlTY21nc29Nd3A5TnpKME1yQTg4Z3dNREFBRHdnWWdpQUFEQXNoUDQ0SWdjL3FYTHpWMXVPNFd2dkxWbTIwaVp4aDRzeHlTcGx5NkIvYkwweDBoL1RQb0tUcFgrODNzMnU1UHgxTUpjT2paSFVuYVBvMnZIVHArL2NmTytXNE9kM1hRNTFIZjJiNytSL2JlSm50UXJWK0s3Tzl3ZDljc3Z3ZjFUcWJQajZrbFZoUDBpN1RSZ0tzQ05URm1zWW1EclAxUDdwUTZzMjRBTi85cWQrc3UxWDBTRWxvc3NrcCt6UjJJUkpzMDhSWXlxcWM5VjVqeHRjekt3TWhRUkRvNk1jV1E3QmJGUUZVMEdOdjRrQWpuZUFBREEzeTN3ZnNIN0JjQW5zeG9FK01OLzlEaFFiOFpwZ3h0c2hlUDhrdjZaOWJCcDlEZ2ljV21EdFo1bE95K0h1N2ErTFp0VmROdS8vK3kvLzkrK1FGVTJGb21ZN0VLbGwrdkQ5RjV4NEVSYWFtc2M5RWxsc1lMZVpkUGdVRVJqdjhGQXk1ZC8vYmRYdnYyaXpEUmdwUnR3TkJvdDFiQlB2dml5K3ZrMHozOG0rdkxOaGtWVlpUSFNoVyt0cC81aXBFMksxbGVWSmk1cm9aVml0R3kzWVN6V1ZIVVpHeDFZNTZqY21sdG1EcXd1Nm5PdG9TQVdBQUFBQUFBQVVJSFV6SVRxQjAvMDFrbFRaLzBkTHB0ZGZ3UE5GcHQ1M2N2L3ZiYzdxSVlXTit6YW9haHNBZXk3NzFmb3ZvOC84TXVLUDRlajZUZWphYXJCM1g1SGwzOFpDa1JIRTR5aWQvWjg3U3ZmWEpsVnIvZ2ZqenFmUEEyNGhLMkFuem4rdXJ6ZzlnUWFUQVE0bjZtLzJPN1VYeVN3WDZNbXkzMkF1VnNReFBueGpoT2hKaWJ1anZXemtQbU9yb0I1eDZmYlJSRmFyRHNZOGVCWU9DQUFBQUFBQUFBQUxDZU5GNC9SKy9XWmFiLytEcmZOdmZ6MURyZHJwWWQyTnJlM0tzczdQM0Z6a2FOUkFmN2puNzI5KytCZDdFcXF3YWRIa3k5ZmlwOGFTWVFpbXA1UFpkZDd2L29iUkN3V3JTRDdSY3cwWUZtRFMySy8wL1BaWUhKejJ5M0dEUngxUHFrSk1DRm1hc20xWDF0VGY0bnFmZUtwdjhwVExzMHFyQ3RlcFU0R3hwcEVhQnRka2F4bjUrcHFaVW12cnEvZXpKdUVqRVZ4WUNSOE9TZ0tEUUFBQUFBQUFLeEFtaTcrcThlQjFudWw3NnorOWp4S0hBZWFIV1BqcVpWOGFqMkJiQVI0d3cwN1NxTnRmditYLzhkM0w1NTQ4OFVuLytyQ2laOHI2eE5wcVUrU1VtWGE3OEZ1Si9hNU1Cc0dseXRqdXgxb1M5QkZOeWpCd2JoeHQ5OHAxNllPVDA2YytlRGQzYnR1cXBSUG5jdFo0cGk1VXY1SytraTNjZ1JZTXdFWW1VNzlGZGx2UVZOL09VZ3AwSVQxVE1hQnNWNnltVVJveE5kbXcyUmcwMFJvZ3dWekhWaS9wZGFCTmZuY1pwT0IrWkpmUWNEMEdnQUE0TzhXQU40dkFENlpWVWY5NEltMXN2MTJ1SnkyODVaakN5U1pYTkZYdWMxZjczRm5mWDdqcmgwbEhIbnp2bHR2R0hnZ05ENi9PRDZjakV3WU44akVnVWxZT0VEeTVyWHVraHpKK3Vhc0FGUE9mUGhlQlFrd1N5cVZjaGJudzhmUG5sZmEvellFZHJrOUFlTTI3alh0S0szVFhlSFVYOHo1dTRVSVFzSGlxYjlJRURFbXlHRllaVktTaTJCa2xRaHRPREtzcTJGTitFZk1Eb1VSTWgyY3lZVTJTNFRXWENsSWhBWUFvT3FKVDRaQ0x6MUJiM1FCcmdZQUFFQUYyTy9RQ1pTclUxVVh0QnYrdmRpZmZQWG5DeVp0a0ZZQ1N2aVhzcVBvL0djZFowK2NkTlkxZVh0M3B0YnRmbU9hak1TWDV4ejlIcXdFazg5ODhHNGxmZkMwaGFDTEhJME4vd2JYN0RkdWdOMXVTWUM1d29qRVhYK0Y5a3VzN05lQVZuWEZLZEJJblBCc3V6TXdyeUNXd1ZFTEtZZ2xiajRNQmJFQUFGaXQ5dnZCbjJjNytvNGVmMnJYTjZHakx3QUF3RXFuWWZDdGpBQkwzMHZyZzlaUnVFU1N2SDh1WVNmek9STFA2bkY4bVRTNU85Z3NMM2pyZkd2WHJ5dmh5TEg1NkVqL1ZYazVOTHZ3L2h5aE4va3l0cmhSZ3d1MVpBTHBvdkxYVzRLdVVwNm0zeW5YZ283Rm9xSGh3WXFvQWwxYUJzWW5sUEpYdFhXZGRmNU54bTNjYTl2NXVvdkVoYStzN1pjUmJHU2FGRzBJOUxyNGlpd1N6c0luQXl0ckJKT0J0U01KSndNYmhOYXFLTFJnTW5DbE9YRHJKKzY3ZHZ5cFZPYXJyZFBycHcvaDN3d0FBRmlnb3k4QUFFREY0YjNlUis5Yk1nbTV0VmFsaktuOXZ2WHVZbVRPbHRFcTVhRENpZVU1dGMzdExmSkNxU1lBSzF6NXNFOVpIcHljVXBaSDRrb29XS01SVkl6dmFjV0tyNVprQXJCQzBLZVd3cnB3Nlh5bENIQXFXYkxaNDQ4OSs3eDZOWGpoWDBtQTEzVHc3UmRaMnEvQlVrV1dhN21lMmRkRk5HN0ptd3dzMG1POWRwbzBVbExsbDJCa3N5QVdNbkZnclZqekRzWk1zQ3ZSZ1dzQ1hidSsrZExFVzBla3Z5VS9jUjk5Q0puY0FBQ1lRNVp3TDZDeTNtVUFnRS9teWhGZ09meHJKLy81M01XRVRmdU5KVWcwa1gwVEpoTEw4RzcwR0JvZ2xWS0FQMUFGZUNnOGJibjl0anAxZVgxemlZcy9TUVczSEZJVkxzckZ5eC9kc2Y5Z09hN24rT2hZS3BWcTdXaDNscWg0Rlp2MnJGU0VMZ0EyL092MkJMamxyeHcrcjJ0dE8wRm1oYTh3WVNSVlYvaUtDTzFYN2ROclorb3ZnMHZzdDV3S3pMcHRjcUZYbnFNYUNtSmw2MWNKSGJqQWdsakt1a0tLUWxlVUEzc0NYWjBRendFQUFBQUFBS2dXYW1aQ0RYWFNkMUd2MzZLdjc4QlFNblROYnRRdUhGTTllVm5teDNZSG1sVUJMbHNFK0hwa2JpYTJZTGw5YnkxV1pMVzA0ZC9zc0xXT2NGUzY0TEZZdEJ3WGs5cHZhSENJTGtTajBRMmJONVY4L0dLa21nMy90blhmeGQzR3ZiWURtZGt2cDVjdngzNE5HMkVpVUZ4KzRTdE4rU29IYjdkaU9nQ2JGY1RTSHE0aHZSc1ZXQkNMZFdEQjVVUEM1c0FBQUFBQUFBQUFzT1RJK2M5eTRyUGJaeWJBc1FYU2R6R1BWT2FoQ0N2QXl4QUJWdktmbTl0YVN6c0JlT3I2dURJQmVIRFNPdnk3MW9NOXVVdmI3WGVXNDJRVnFiNXc2WHc1eHArZHpiYnFqVVZqSlIrenh1TXBlQkE3NFYvcEpUYXQ1em1qd0ExRjlrc0Uwa2ZFK3NlMTN3d09vZlRhRUU3K0VRdmQyTVo1RnUzQW1qVjJIQmlLUWdNQUFBQUFBQUJMamlzdUZXNElaaVlBZTAzZDdQMXppL2FIalNXSUhKQ2s5TWZJMGhmQjhyaGRiZjU2ZWJtc0U0Q0h3bE9XMjNjeWZ0ZFI3eWpIK2JvZDVZMnNwVktwbkt6V2xHck0ySHkwK0RHLzl2VDNsR1ZSK05mVkduVDR2Q1psbjNGK1paOVIzdDJBZVlGZWg4QXRpVmc0OWR0Z29ZaWF0WGpDaER1c2pieHRVd2ZHbG8yUnhDY0NBQUFBQUFBQUFFdURkMHh5T1U5R241eml4clNUMCttOE9oNWRDS3VaMGg5RmwrRzgyQVpJRzNkdEwrM2dsejg0cHl6YmpBRExDejQzOXJvaEJ6Ump2OUdvSXRVTkRRMkZEWEw4N1Btako3T2RuMHpDdis2ZUxwT3l6d0w3TlRFMXJVWG1wWkRNU29kUS80UlJZMkx0d01TeXpiR0prWEl1QVM2NUErdUdCUWNHQUFBQWxwYjRaR2o0cFNlRzgrbmIzUEtKKzV4ZXY3eE1GMXFnSXdBQVZETE91SlNHMnBBcHlHTlNBdnBpZng3Sno1RTRHWXBrM1dZMkpVV0FsLzY4bEFaSXFNd1RnT09KcE9YMndkd3ZDK1dZL2JzMDFOUmtvOWhLMkxaSXJvOWVWNVlibTVzS0crU3g1OVRadjJ0NjcrVnU0L0I1YTNxNmVENW1icisyQ2w4aE80V3ZDRDljN01ydWdKVW5NS2NsTDFzUUMra3FQTnNyaUlVNDliRXdVYzRENTBaV3Q5QWRGY2FHb3RES29ScnFYbWxHVmcvYllNRllXeENMUFhjQUFBQUFLSi85aGtNZi9NVm41ZVoyMTQ0L3RldDNYdklFcmZzMmV3SmRkTXVKdHpNZEFXNjVEMW85QTBBVjBHQTZMelV5bDEvNFYrNUpLM015c2p3QkhpVUN2SGI5dXVhMjFoS09QTkovZGVyNmVQWjNnYkVKTzdzb0U0RDlIa2VGZmtJOHVTemxWQ29WaTBhTEtkb3NEekl6bFUwZHIvRjRDaHZ0bWVPdkh6K2JuZkJjNTkvVUVOakZWL2VlYm8zOUVvMnNXYmdyejRxRndVdU5DMXNsTWhQaXlvMkltZWR6eXppbmhSellrc3FhOHMyQzlibW5NSHR3U3AxbjQ2dndLa2h6eW9TSnFrZ2o4Y2lpTFVVYkE1bnZhcE1oK01vRkFCV0dqVzgrOUU4MDIyT2NQb1R1SlVzRC9SczFsZXZiVEJmb3c4NjdiTlg1bHpvQ0tGdkNtd1ZVOHQ4L1FNMU1OdnZESlB3N01KUzBQMkQvVkVxWi9UdVJRQi9OTDhQYjBPaXRYYUlKd0pQV0U0RFhNbEhmeW8wQU56WTNYUnNla1pldmoxNWZ0NkczbU5HdVh1bFg4cC9iMnRzS0dHRjZQc29XZjI0VnpQN0ZibmZOeGw1aDNxNW9uaXcvTDFpWCtVeDRvK21rMTJ5OVM1WmZ6TGJWMVRkQXl1MkdkWDE5RGEyTXRPdjFUWWxJempYNUhYcWxGN0JzaklSRXpZRjVqWkdxdmpud1V0cnZoMHlrNG9iZmVRa2NHQUJXK0xkTll1LzdaMDJnNndZbW9nZzl4bGY0K3dVQThIbXVTZ0YyaXVlbWpvM2JEZjlHNG9RTi83NHh2VHh2UXZkU2RRQWV0TkVCbU1YdExOY3BLMDJudkY1Zk9jYjMrbncxSHM5aVhPcG5OVGt4MGRiUlZuQVFlSElpUERPVnZXNU9welBRMmxMQUlJODk5L3pBZURiODN0UjZTNTJmMzVtcFp1TjY1SGJwcEJYbnZKUncvZ2JockdXTFJwSGk3RmZOR3lhWklsalpoR0hFbEZ6bTF0b3ltM2xyTmEyWmV6VGFOYmlBeGtqY2E4Zis5bUEySDFqUUdBbm1BeHN3UmlyZ21nQkF3VWd6UC8vbENYcXpQL096ck1nUlJYcURIN1lBQUFDVyttOWcwN1Rjc2ZGVUltbnJlMmtzUWQ0Y1VpdEZ2ejlIbHFYN0VaTHluNWRpQW5DKytjOWxoVjc4clB4MzlwVHBKZFowcmxXV0w1NzdLQll0WkRJd3RkK3JWL3FWaCtzMnJDK2dBL0RwZ2NFblhqeVdWV2lYdDBNdyt6Y2p3TDFJWUw5R0t6TzFYNUZMaWtwbkNlMVhXZXRTUkZHSkEyT2RoR3FDcU1ZNHNIRWI5YUZoWWpBejQ1Y1hqTVZ5SEJoeG5sTFBBZXVPVUJDYVpoeVlHSVBEdlBFeHhJRUJBQ2kvL1NyNUZLT1FUd0VBQUxDNkNacldKUjZiU05rWkpKRkdKMGNTaVZ5b2VDS3hiT0ZmeEVTQTE2NWY1NjByWlVSMHBQK3FVZ1hLVGdNa1NndFRXenZvTFlzTlUvdU41Z1I0ODZadFpicXFnWlpnZUdKaUxpSlZUVXVsVXRTQk4yelpWRys3Z0RQZDVkcnd5UGpvR0ROZ1MySGxyNzcyak5yNnFMWHJMdXJBM00zY1BWM1k3YkpsdjhTRy9YSWlzL1ltRDJ2dGwrU0dkYkNWbkRVakVVNVFWejg2VjhTMUR6SDNKSkZwNVdjYmpaSHlhZzVzV21LNzdISGdsUmJ0QVFCZ0dZRjhDZ0FBcW8rV1c3VDF5VytCK3VTbHdVNzVLK3E5Ync0dFJuTHgzbmdhL1hBOHZWd0gzT2F2Yi9UV3lzczc5KzB0N2VCOWI1MVNsdTAwUUZvYVJ1ZlVxNzFsNDlieXZkQ0d6WnVVZ0szc3dGZXZEQ3pHTFJwRTB3MUdoMGZPbm42ZnRkOTZmME5oRTRtZmVQR1lVdnVxdHE0enVHWS9kelBzZG51MmJiWnR2eHcxRXpZSFJwYjJTd1RPcU5vdnlsV0JWaXM1YTJLaG9obTIzUFg4T0RBdkttc1NCMGE1SUxEcGZGMU9oTlp1SEJnaFpBd0dsekVPRE5FZUFBQUFBQUNxRzQrMm1nQjgxU2tKc1FWQ2IrYmJVTzg5UFpyUTJXOTgyZnhYMHdHNHRzNFhtNCtXTUFoOE9UY0JPSjVJWG8vTXJaQzNxWDg2RzZYM2VuM2xpd0NqekpUZHpkdTNVdTlWU2xoTlRrelFXMk56VTFOek03MVg5RGdXalZMdnBmZlRVOVBHWk9sQVMwdGg5anN3UHNHMlB1cmMrR3VpTFdzMjlqcDhYdHYyUzNTS2EyYS8zSENwdUI4UzEzNlZLdENhRWxPYVJHanpLbFBtRHB4N0d2TUxZaGtkR0drU29jMGRXRk85MmI0RGN3dGlsZEdCQzY3ekNRQUFBQUFBVUVFT0ROOXc4cUxwNHJHR29STklYSnJZTXZ3YmpxVlBEYXVaejdMOVRpU1c4NlRZRHNBLyt1dS9wYmUxNjlmdDNMZDN3dzNiaTU4UHJFd0FYam5oMzFBa3BlUS83OTUxVTdsZnp1dno3ZHh6NDVXTGwrUmNhSm1acVdtbHJwV2xRcS9wWE52YTBWN1lxMy9wMjkrWnpxV2dCOWZzcjYzcjVHNldMZjZzK3BwOSswWDI3RmZYRk1pNjdETXhkQTkyNlEvYU9CbTRrS0xRK21WN0RteVlER3ppd01iSndEWWNtSDFpS2VQQUFBQUFBQUFBQUNCVE14UHFmZWtiRFM1MFYxRDZrbGtmNU5RaWlzeVpDWEQvVklxdCtid1M3QmRsWXJPNk5TUDlWK2xOWHFZT3ZIUGZ6ZlNlV25HK0k1OWw4cDh2am8zYjNJdTlJT0ZZdXVUVGdDK0UxVW5hZDk5NXp4SmNZU2tPdkczcjVFVDQydkNJWEJmYTVsNXRIZTFVZlF1b2VpWERKais3UFlIV3JydUVuKzJOdmRTQnRTNXEwMzVGZ2R5aXlqNGpnLzFtQkZqMVd6VVJXdWpBR29ITXJ6R1NtUVB6TExRY0Rvek5HaU9CQXdNQUFBQUFBQUJsWitQUkx6dmprYnZhSFI0SDhuZTQyclo0ak52TWlnV1lldGVGc0txYXN5bjBMeFBMYjcrVW41eTd1SkJNOWdTYWxGYkFMRmMrN0pPanVONDZueUxEelcydGRrWm1HeUFOMlc2QVZOWnNjUG91S09IZmZiZmNGZ3kwTE5sMURyVFFWd3RTRFo2ZW1qSUovOVo0UFBVTkRRMytCcnB4TVM5M2VtQ1FyWDNWdWVuWFJMV3ZIRDV2ZHZZdm0veHMyMzR4Wi9OaXl6NFRYcE1qRjJFOWtBbjI1bzVDMzhWWGRsbGk3Y0Njb3RBbXd5SmtpQU5udGlTeU9TTk9sRmc5S2F5OUFPWnhZTjB4YUY1YTkrcnNCUy9VZ2MxTGZGY0sxWEVXQUZEZGY1cmd6eWw4RWdBQXFBVFd2dkdrNzNyZlhqOXVjYU1hbjZOck45OGxJclBDdnhXVXhyTW9FK1JjM25tL0d1Rk1KRi9wdTBnWEdyMjEzY0dtbmtBenZWZktZaW5FNXFObjN6b2xCM1dwQUZNTjNyaHIrNDVQN0RXWk1LemtQOC9FRnVodDJjODBFaWZzYnhCTEUvN2xhbkFxbFpxTHpMSnpmWjFPSjcyU05UVWUrci9pWDJWNlB2cWxiMzlIZVJoY3MxL1UrSmZpMmJWRHRrUlpxRGcxaFVYMlN4UWoxRTRKSm9KL0puTmxsVEV2d3hscGh5SklQMmZZbFpWVm9nUTkrYk55TTBOZ2hKaFQwaGE1MGkxcTlsV1BCS3ZuaGtTdnFCa0k1OVJUODdzQnhzWk9UYm50TTRkSmpFZkZqcWs5QnM0N294MndTQWMyLzlKVEhWL2RBQUJZZ1grYTRNOHBmQklBQUZoaE9PT1I5bmUrUzlYM1pyLzByWExkelY2bm9CT1NTUWRnbnd1SGM4dlBqYVZYNEdsS21ob2EvVEEwS3N2dzV2YVc3bUJ6VDZESjQ5YlB2cHk2UHY3T0s2L1JHMEwvNzlyMTY2Z01iOWkxWStjbmJ0WUpzNUpIYlQvOGk2VFl1UHF0UGh3bFFXOXB6azZ1dkszYTcxMkhsakw4cS85RU9aMk56VTJGOVRTeXcyUFBQWDk2WUZCZXJxM3JOR244NjJ3SnVqcmE1Y2dsdHVvVHBIdUlPVStaeDM1Vkg4YTJ3c1dNQ3BOc0ZXamRkRnlMU3M1S2pqVFJCWHRaZ1ZSMklWZ1hYK1UxNXJWdURxeHZLYXk1QWhvMUZlUmFJOGlGQmdBQUFBQUFBSmFSOW5lZXBnNzh5VlpwTW1yN0ZrK3RuejhuYzNMYVRHdTk3a3I2T2twbCtOUkFpTjVRcGsvUzV2YldubUJUZDRBamJQS0U0ZGQvOUJMS1RCamV1R3VIWEQxTENmK2lmQ1lBU3dLY1pLMjFOTDh5eXZhcjFCN3I2dXhabHZEdjBuRDA1THRQdkhnczY3Y3VyMG5sWitsaitiRWJTMk8vV21rMXNWK3NqM2xhMm0vMjNxVlBXaFpVY3JicndOd2lXRUlIUnR3S1dOWU9iTjRHQ1J3WUFBQUFBQUFBV0lrQy9OMjFIcnpXZzV4dUhGeGZZSWFxbTZubDFPSkdLMkgycjAydVIrYm83UTBwU3hwUkRkNUVaZGpHaE9IYXVqcGxmYjRsb09uRmFjbVVaRkthUlJWRExFRk9qcWg5cDd4ZTM5ZSs4czFxL2F5ZUhoaGtrNTlidSs0U1ZYNm1lTFp1ZG5pOXBiRmZncGdBcjVYOUVrdGhOaDVQdGcyUzJJSEZYWTRNRG93NHFtbmh3TUlxME9EQUFBQUFBQUFBUURYUmN2YUlNeDdaRnBDK1JyYXNyM0dLQTdtUldiTUlzTDlXM2JIR2dTdDBCc1ZnZUhvd2s4L3NjYnVvQm05dWJ4Vk5HSTdsdXU5UWVUWVdtalpuTmtsYU10YzVzbEJzcmpqMVhqYjJLOXN2dmEvS3o2bzg5VmZwZTlRUTJCVmNzMSswc2NQbnJkblFTMHlhSHVWcnZ5aGYreVcyN0RlMzNzVXZYbVVwdEVZSEZxbW0ySUY1MG12RGdVMUVGQndZQUFBQUFBQUFXSkUwREwxRjczc3orbW9lL3MzVDhpb2I2clFYeHlib0RUSFZzemEzdHhnbkRCZlFBVGljUU9zelUzK3B1TVlTcE9Ec2NWM2ZLZGwrdXpwN3F2Vk4rZG96MzJPbi9wb25QOWQrYkRkeXU2MWEvdVpqdjd6cTBXYjJpK3picjlJSFdGVEFHWmttTm1zY1dEa1ErdzZzbFUvN0Rzd09BZzRNQUFBQUFBQUFWSVlBbjFqcndSNEhxZ3U2bkc3NEdzbUJyWjdWNXEvdkNUUjFCeVVabGozNW5mNmh2RWJiV29kMzFhdlhPWm9zUklDcE5wOGVTNGFqNmRWanY0ODlkL1NaNDYvTHkvTFVYMUhmSTByTmhsNW5NR0JsdnlSLysrVTNTK0RicjJYL0pPMWh1SVMreWkrSUphcVZaWlJuU3djMkZNU3k1OEJTbVdmcGY1WGh3TVQwWWFWUUhXY0JBTlg5cHduK25NSW5BUUNBbFl3ekhxbVpDYlZrZkt3KzZJUUxZb2s4WVZpdW50VVRiQnJMTS8rWjJ1OGR6ZW9YZGJkRHFwNmQxd0VrMGxMZ2wyMTNoREpWcjZvNDg1bEMxZmZSWjU5WEhuYjAzbXN5OVZkS2Z0NjZ1VnoyUy9LeVgwT2dXV0MvS05NSG1LZTR5S1FvTk9jcHdsZ2l5ZE9CbGZYYVVzOW1Ea3lRMHBYSmxnTWpHdzZNOG5GZ1ZFUWNHTG9nQVFDd05IK2E0TThwZkJJQUFGZzVlSzlMSlowOG1mcFZvdUxQQ3JHRk5Gd3hsc0Z3ZnNuUE92djFlL0NlRG5kZTRkOVFKSFgyZWpLaGZSL3UySC93dmtNUFZQRjFQajB3K0xWbnZxYzhESzdaMzlSNmk4bjJ0Uis3RWJ0ZHhNcCtkZFdoU1o3MmkxWHZZbWZ5RWhQSE5yRmZsRTJCNXZjOXlzZUJtV1ZjcUFQalBCeFlXMG9hUVM0MEFBQUFVRW0wM0hMZjJHdFBwV0lSdXV6MCt1bER1Q1lBc0hxd3pIK09MY0J2WW9XejFxT3gzMjYvYzNlSEsyOFZITlVFZm9PQmxpODg4T0RtVGR1cTIzNXZmL1RQMk1KWEpsMS9VUzc1R1ZuWkx5TlJvaTF0MmE5dXZYZ1hDL3ZOVklFMnlXZEdHYlVqT1RzVU9qRHpTb3FhSWtZTGJUcHdacytzQXlQdExzaVlIYTI4a0NMdFdZM1dPREN6SnJleGxRUHJUaGJ4REJ4bEJ5Wkk4TklBQUFBQVlQSzlJZEMxOHhzdlRieDlSSlpoK2hDdUNRQUFRUEY0SE9pdVlMSDJpeklwMDByNGQ4dW1iUTlYYjdzakdlcTk5LzdGazRyOVdoYStjdmo5bmh1MmM1elc0S2lZNjZzY1RkVXQ1OHlTYTcraU9jQ3M5SXIzZFVueWxuVlJ3bGlkb1E2V2Z0bXdEV1lsWHE3VnpJbVdHb0s2K3BIMXBaNDVXeXRhcnJ3UVFpWWJNMnN3bTYzTmRlRGNsU0M4b3hRUHlIMXBBWkFERFFEQTB2eHBnaituSzl5Qm03dlczdmt3dkZrQXNFcEkxZmlWNWNWWXVnNlpaVUc3WEJCWEtaRGJtN0VuMXllNW85NVJtUDFTZHJhNWxDRHdoVXZudzVNVHdVQkxtWTU1WUh6aTlrZitiRG9hZmVUK2V4KysrK0N5Mk8vdGovNFpQWXlzL0hzQ3ZUdSthbEw0Q3J2ZDNvL3RZa3BQQ1dPLzJLUzBsY1ZUaXNUYTJFWHZ1c1I4QTRkZW96aytiVDBqMmVEcmhIZkNvaVBUajJ4UjNVdHpsZG1KMUlZM2dMY0cyNXFmemNaL2pkOUxqRnNLWGhvQUFBQUFBQUFBRUlxMjdhRDNrWlMwdkRDVE10a3lrU1N4bU5tM3luQlVmWFkyQmQ4L1ZkWjdNYjNKeXo0MzN0M2hMbmlvTHI5elMxQ1Y1eGRmZnFGOGgvM1lzODlUK2FRVytyVm52c2QyMzExSysxV2FIbEh2N2RuNm9JbjlVanc3dHp2OGZudjJpd3EyWDh3cEYybkhmdlVER2ZYWW9kMkM1Ty9BcU5vZG1MRC9CUWNHQUFBQUFBQUFDblBnOEtMMFhYRXViQ2JBNzM2d0dKa3pLNEtWU0RNQ25JVHJxdkxKSnZWYitlNE9sOXRSMUdoYmdrNWZicmIyaWJkZmo4WEs1YVhIejU1WGxwODUvanFybzB0dnY3MDd2bXBTOXBuaTd1NmtOenYyU3pTR1dKajlrdnp0VnhzM0poeXJkWmhMb0EwSEpvVTdNS29JQjBhQ1VEQmhEeDRjR0FBQUFBQUFBREJodG12ZlJBTE5wdEJDSkxVUTRUdnd4ZjVrZU1xaUJIUWtudjIyU1VjREZMYlc0WVpjWG5tMzN4bjBPb29mY3d2VHNPck1CKytXNDdDcGZDcTV4OHFhajMzakR4OTc3bWk1cjVpVWVxMlY3YzZOdjJadXY5TFUzNTNiYmRvdlhqYjdSU2IybXhGZ1luUlIydzZNaW5OZ1Vsb0hKa3Z1d0xtRHp4NnRVcWlMZ0FZREFBQUFBQUFBTEZPYlBrUHZQNXFYdmlWTzlDOXl6SFl1ZmJIZldtckQwYXdoenliaEM2ZktYai9taW1zeHROZXI0MXk0L0ZFNUR2dUZrNnBYczRuSGp6NzcvUHJmK2pvYkhDNHRkR1NxMlJyNzNmUnJEWUZkSnJ0SVUzLzMza1R2TGUwWExiUDlFaFA3UmRrMlNHb2pIMElJeHJtdXZFeGRKMDN0WmN1T3ZzeDZ6YjV5aFdkTkxUQ2wvaFovRi8yUkVFNzFhYllMa1RvT1FiYjZBNnN2b1YzREs5WkZTQ2xhQkVNTkxBQUFsdVpQRS93NUJRQUFXRkZFdXZmRi9WM25vNkdiL1hocUtORzJ4Vk9qalZLKzMyZHR2Nk5NZHZSSUhDNXFsdlZlVGZnM3I1YS9KcmdkVWc5aE9lUStPVGxSamlNLyt2WTdpdjMyN3ZqcThPVy9YNWdmbHRmSUVkb0RPN2M5L1pYZjZHMHRXUW11NmZub1k4ODkvOFNMeDFqeDd0NzZZSjEvay9tT3RkUitmVjRpc0Yrc1NtZ2VWYStZdmJMT1RFcG52MWd4UXJZZ004bk5BVllPVFFxNk1qdFl4NEZGN1poNFFWMmM2MStNV0Z1MGlnTnJUd09aeG9HUkVwTEZpdHZxdnhJUzR6ZEViQlVIVmk2TzRIdWxlRW93aElJQkFBQUFBQUNBRE1QL3kwT3pTZlQrblBUOU1IUjZnWDBxZEMxbFB2Vlhab3pacGgvYUJlZlk2bE9YU3hYK2xWR21BWWZMSU1EVVJaVVliRVB6cnRxNnpvMDNmcU90K3k1Mm0rTm56Ni8vcmEvZit4ZFBsaVFhL016eDF6LzJqVDlrN1ZldStXeHR2M3R1ekhYOU5iTmZWSno5b3BMWUx6S3pYNFRrTmtoWTZyK2JEZjFtSFZoNmdHM0ZnUkZ2QXlRSzZtSW1Eb3p6aVFNcnk5aE9ISmpkMkY0Y0dOdUxBMk43Y1dBTXNSY0FBQUFBQUFCQXk4VE8renAvL3VTcFNHaXJENk53Y3FKL3NXVjlqZnlVbmVUblJCb041U1lQUzlPSm9RSldCbzhES2NXZmd6NUhxY0svTW42UFE0NjZsME9BanpMNXovNWMrbkZyMTExTnJiY01YL3I3K2NnbGRrdDYyOVBiODlEZGR4N2FlMU5UbmE4QTlYM3l4WmQxNWJXbzkzWmIxWHhHbWNKWExybndWVVhZTHpHelg1Uk5nWmJWcmtBSDFsbmlTblZnaExUU0N3NmNCOEc5OTQyOTlsUXFGcUhMVHErZlBvUy9hZ0VBQUFBQUFBcWcvNjYvM1Bic0E2OU9rYnVDK05yWmhmcWdzOWJ2ak15bFl6YkN1WDNYVmVXVnc4Z0FwZGVyZmlQdjlqdEtPM2dzVWNici9FSXUvNW5pWTJLd1VsUjI1MWVwQUZNTlRzUW5sZlZVWDcvMDdlOThDU0hxd1B0M2JqK3djeHRWWWt2SGZ1M3NPV3EvdXU1S1ZIcXBhUWZYN0xjOFNHcS9uajAzbXRtdmFPYnRNdG12YW5zOCs2VlA1T1lBWi93UHk5RlNMSEJncEhOQ3d3SXlTaVBKL2lpQTdUa3drcXVHY1hiUmpKeVJXYjRESTg2MFpNeWRFcXl6NHV3anJRTWo0OWtaSEJnaGpyRWo1a0Iwamx5QjFBUzZkdnpubDhKdkg1RmsrSmI3NkVQNHF4WUFDb1NVN2UrRThvME1BQUFBbEk1STk3N1JtMzRkdmZ2ZDkrZlFqZlg0eXB2UkRiZjZRbVBXeWMraFNFb0ovOGJUYUNBR2Y5Rm5XVityTHJObHEwcENORmRwYk11bWJTVS84dU45MmF6bU92OG1ZeGlXcnR4eTAvODVQZjUyK05wcnlzUmdSV3VWNkRIVjRDYWZiOC82ZGV3R3AvdXZEb3hQaU5vcE5iWGUwdFo5RjlWc3l5TjArUDAxTzdkekd3dGhFeWsxZlFvejZ6RFJOd3UyYXNGcldmVXFPNlVYczNXWldDMVdVcUFWLzhTTUppckxtdENvUER6T0JwYlZCZjRHd3FleWcrc2NPSi9Sc25GZ2pBMlRoN0Z4UjJ5N0xCYk9GcTNHZ2pFTkRzejVFb3J6K0pKYUtRN2MzTFhtem9maGl6VUFsRjJKSzJKa0FBQUFvQWdHRC95aGYrakVHK045SG9jMGVaVTY4S2pQWmI3TDZGejZMQlArUFJVaDhUUmN5SndBTS9uUDdoSUhnRkZrb1Z3WCt2alo4MHBVMXFUOE1wVlZlcHVQWEpxKy9qYVZZZTQ0U0p0TmJZSTBXdHN0bGpOK0ZmdjEzbm9MZHJrTlJaUjQ5c3NZcGw1bG1hZjBzVi9kWGtRd21za0xhYmZKZFJIaXhYNXp4dWxpbEMzN0gwMHVkRzVabnd1dGVDTlRRUnB4TjhpZUlqYm1Lbk1jbUIyTnNPSFpRcWY0TXNzNG45TFFoaGd2VVgvcFlPTEFTRTB5MThXQjFaOUY0QXNwQUFBQUFBQUF3SEx1Vjc2Ly9ka0hYaG52UTVrQ1RrZk94anZxSGZRVzlPcW5zRWJpcEg5S2pmMVMrbU1FOHA4VjFuclV5OVZSVi9yODUwVE9memVYT2dMOHdrazEvNWxycE83ZHU1Sjk1MGtpSVc5QWJ4Mjk5ODVPZlJDWi9DQWF1WlJLeHV5L2x0c1RhRzZUUk5wTzFGZHJ2NjdLc2w5a1piLzAvNjVzRHJNeUJYY0ZPYkEycFhrWkhSZ1ZOeVZZcjhEODlrZ0FBQUFybHNYSlVQaGtaaExFWHBnRUFRQUFVQUpTSHIvaXdISXNkM1F1cmJRNEN2cXlJcWUwL0ZXWVNLQlhwOEIrVlRvOTZySnkzVW9GMjNScXk4YXRwUjFjcWVwTXBiUzJybFB2bjAyTnJrMGJIQzNCeER2dnBhZG41SlZPbDFjT0NOUGxoZm5oK2NnbGVwK0lUeTdHSjltcHd2S1d0YjVPT2l5OVVYTzI3NzE2K3pXSXpBcTNYMlJsdi9UL3JsekdzZDZCNVNuQXl1akVYSEZ6R2x1QUF4dDZEcXRQRWQxZUFnZldINjJwQTZPbGJoR01kSThKT0RBQXJHSUk5KytFbFQweXRkOXpmL1ZadVF6ZTJFK2YydjcxbDhDQkFRQUFpaWZwOGZmOXl2ZDNQUHZBRzVrNE1JdlJlMlg2WTRUYUx5US9zd1RkNnJMZlUrSXYyUDNUMmNDNzErc3JiUVNZbmFEcjUrVS9PMXBhSkxGb2FxejU5SUhrbVErVGx5N3JOcERsdGh5WGxOcHY3YTIzSUpkTDkwVUNLdzF0N2RrdjFqN0Y3a2p5dDE5c2FyL1p4NXJEMEc3QlRDMTJhTDR2NlNjdWM4OUtPeEdaT1FqTTdkTnJiTkpyT2FidWR3SjJMMDFuWGUxMFovT1d2NFR0Q21VOE1ONmEwclFJRm4xWGhaL3VBQUNvRE1Jbmo4ajJTNkVMY2lnWUFBQUFLSjZVeC8vQjUxKzhjdWRmaHIwM21HODVtMEwvRWliMEJ2YXJvNlZHblFCYzRuLytZdWxvcmdUMDdsMDNsWFp3dHFrdk4vL1p1YTVia1F2WGpUZlVmT3FUanNiR0piaWV6bzcyV2w3c0Y5c0p5WXJ0MTJCU3BMVDJhME5kVllQTEZjSFNOeTVTNDhDOE9LcFpISmpUbzhoZUhKamIxZ2diNDhENnZkU3B1ZGgySEhocGM2SFpiWmoyU0JBSEJnQUFBQUFBV1BXTTc3enZXbUxMaFgvOHpVQnlwTk9EdXYyK1g5aVVyZWpyOWZvdVRjOC9jK3JjUkFLdUU1K0dYTlhua29kL0w0VFZlZGQzZk9venBSMmNiWUJrcklDRjNXN2MxTWhxcHJNbDZQejAvdVNsSzhsekg4bXpnc3RCemM3dDd2Vzl4a0JkNmUzWHNNdVMyUy9LOWdHdWJBZlc3SmdOell0YS9pNjdBK2RLVWlQbDFSRUNEUWFBMVVOdzczM1hmd3BkdFFFQUFBQXRHem9YNW9kSEVCcUpvMC8rd2ljZlB2dzU1Wm1qSjkvOUwyK2VneXZFaGEyQTFWaFNBUTdIMGtvaStwWk4yN282ZTBwNzVFb0RKRzc5WjhmYU5heXdLYW1tcmswYm5PdTZVMVNETDEwcHJRWTdnd0Zxdnc2L3YvVDJhNVppdkF6Mm0rc0RYRVlIUnNJWnZHVnpZSVFNb1dEV001bGxaZnF3M2tJRkxZS1IwaDdKZm1sb3JnTmp4c0FSaElJQllCVlJFK2phL3ZXWG9LQVVBQUFBd0RMejBhdks4djZkMjltbkR1ellCdGRIaElmSmV0WlZ6eTZHUkJxZEdWV2JUdDE5NXoybFBleWpKOTlWR2lCeDg1OGRyVUdqL1dZZnV0eXViVnVkRzllbkx2VW5CNGRJTkZya3dXQ2Z0MmJMWmxkWHA5NGtxOVIrVVRZQ1hFWUhSa3FIWWJsZTg3STVNRnFtVURBNE1BQUFCZ2RXdTJvREFBQUFLNXU1eXlmaWs2SEZ5ZERjNVRmbE5jbFlKRGJjUi84eTkrUit4S3hwN3FvSmRNdHJ2R3QzT0wzK3ZGL2wwcHNpNDIycTgrM3A3VkVLSmdFc0xab0tXQ1diQTl3L2xXSm4vNWE4QWRKclo5V1FQcmNDbG5QTkdxNzlLdWFBM1ZTRHQ5QmI2dHBvK3Rvb3ZTOGdJT3dNQmx6ZFhWbjFMZGgrYmFZOXJ4ajdsUVdZVWJmeU9iQ3lqU2E0YXJCWmhQbEtXYmtPVEFUNm0yc2RySEZnaEJGWU1BQUFBQUFBd0xLU2lrV21QencyODhITDlGNjB6V0xHaXJsUFVSUDJyZDNoN2R6WnNHbGYvY1o5ZGw1eDl2SUplWUc2TGpWZTNiTUhkbTVibVFMY2dCemJNdUcwdmFoR1dja3VqNkRVTUVycGxrK2l4WEljakx0RS9odU9wUytFcytGZnI5ZDMzNkVIU242b1I5OStOM3ZNbm9DeFFaRlU3TXJ0RnFtdnprT2RhenBjYTlvUjJVMGRPRFVSSnBFSXZUZDVhV3JPam1EQUdReTZPdHF3MTh2WDBXeWVLN0ZRMzNMYkx6R29ySDY1RVB2TkNIQmFQa1VtU0l1MFBzbGYwRG93eHByUk1lYW9LWGNiL1dSWjdRdVpPREFTelBJdHJRUHJMMGplRHF6N01ERzF3N0htUlpUbkNVd0pCZ0NnUkpBS0hCa0FBR0JaaVkzMFhmL3BVMFdXdTVmZG1Ncnp0WmN6bHJoeFgrTU5kMUlaOXE3ZFllblMxSFdORyt6ZnVmMkpGNCt0aE92VGlaelViN2NpTi9YZWJjamRVRVRvaG1xd3JNVEtRZ0dES0hPQVMxVUJ5NWo4SEF5MGxQWWFEb3hQMEZ2MnNMa1RnTmQxWTJMTGZyTlRNVE5ybkIwZDlKWTFuR2dzblVtTlRvY241UlhVZUZFbTI5a2hTeTloaGpMcGpHTnV2MGpYNE5lZS9RckZWVHdnTVcwQ3JEaVVwVy9udG1INkFDTmo3SmNiNmVVNXNENVN5bHZQTEJOV1RmVVRiaTF5b1pWbFlhVXJYb3Rnekw1MTRoYkIrcEZadWRWTHVzMFd3YUx2alp6NXc1QU9EUUFBK0M4QUFNQ3lRQlUwOU1Kak0rS1FiMitHcktZZU9IRDY5T25wNlduNUlidHNaUGJ5Q1RuQVd4UG9hcnpoWUhEdi9Ub1RadVBNOSt6OXVIR0VRM3R2YXFyektiTkdsNTQ3VU8ybmtZZXE3MXJrTE5XWWJLQll1a3FJbkVjSktzUDBkaDRsWjFGKzdaN2N6dEo4ZVQ0MWtsQ1NuN2RzMm5iSC9vTWx2NWhLK0JlSkdpQzFCSWtOKzhXSThPdzE4OWliRlYxSE1LaHphWUxNT3NVUys4MSttUVJwVXFqOVlxS05OSElITExYOVNtMmw5R2E3SkE2TWRRNXMzQ3lyeEFaTFpHTzJ0aDBZNStuQTJKNERxL1d1a0ZsWkxOT3ZqZHJqQkFjR0FBQUFBQUJZY3NaLyt0MXJ4eDVYZXA2cjVubm8wUDc5Ky9mczJVT04xM0lRcXNFREF3Tm56cHc1ZnZ3NFY0bXBZOU1Yb2pkcXdsU0RBemRuU3lIT1htWW1BTys1RVNVV3VRNzh6UEhYbDhWNzZYMUQrU2ZwMFplZ1NxeFlNWFZnV1laZlFRdExkcjVuUnBOSzVXZXYxL2Y1Qng0c3g2dXdFNEE1RFpCOFBzejIrelcxWDhTMVg4SnhWTDdFQ3V3WDVXTy9xTlQycXk2TDlpM09mbEd1Q0pZTkIxYU5kRWtjR0psT00wYTVNczY2cGtlNkNjWkkweUpZZmtvNzU1WlRHcHA5VTNNeGFrWnVkZUZhMituUU91Y0ZCd1lBQUFBQUFGaDJxUFNHWG5oc1VwdnozTnZiKzhnamoxRDdiV3Bxc2ovVW5neDBMN3F2N01QVWhGOTc3VFY2cjVOaGFzTFhYbjZjM3VvMzdxTW1QSmViQUN4cDl2NkQ2TjkrYkJ6OG5scyt2bVFDM0lBY2g1RDM4OGhYd25odnZtUlNyRjMwR09qeUt5Z3VtN0F4VGJvaFY4KzMrQlRvL3FuVVVFUWQvemQvL2JkTG52d3NjL1RrdXlMN3BUaGFncXZhZm9uVnZrWGJyNVFDYmRBd2dRT3JTcllDSEJpdHVGQ3cwSUdSNEtPSmpTdHpycTYrWmRBbEdBQUFBQUFBb0l6MmUvRy8vOGZZU0o5T2ZROGZQbHo4NExJUFAveXdWUGFmT3ZBTEw3eHc5T2pSZ1lFQmRodXF2b3I5U3BaN3p6Mm9LWUQyZmhLZGZFTTMydEprUVZQMXBjNzVlVlRYc0pMcXN0NGhSYUU5MzBRTjUxSHlCUlJqVGJnaForaHVSMUVISElxa3pvNnJVMysvOE1DREphLzhyTE5mSk1wLzFuUUF0cW0rbFdTL09OZURGcHNjVlRudFYvcVZ3YXBrRnRGYzR1ekdKTGUrMENObUw0SEpkVVRjaWw3OFh4R0ViN0IyUi8zdkRjaDBIcmIrMkF3ZmlOd2pqZXh5Tjh1ZHIvckJOZjNaQm9zUENRQUFBQUFBQUNpNS9WSlpmZSs5OTBwaXZ6b09IRGp3K09PUDkvZjN5K09MQXN2WlJPdDFHeVVITmtBZHVLd1g1QkR5SGtPdHY0WHFHMVpxVjVKdHlFVTErR1hVZWdTMVVFdnZMRkdBbXRydmFhYncxYjViYnFPM01wMkNaUU1rS1FLY2QrQ1hzR1pCNVlWalJrdHB2OGFYVTlTUFNHQnpDeXVYL1JMbDhCd0N5YlIwNE54NlFqZ3Z2Rm9kR0dzL2l2VC93WS8vc3RJTGppNEViLzVsalMyREF3TUFBQUFBQUN3SG9SY2VZKzMzNmFlZnBvNmFWODV6QWV6WnM0ZSswTlRVRkwzWHpTdW1MMDJmelQ3Z09mQkRkOTlaTnJGMFA0MENmNHdhR3lxa0lhZGl3dVd3M3krVVorcXZqRVVEcEpZVzVITG5hYjk1Qm40WkJaUFhZTUlHNTdSbXAxVXRUSGhQNlhZc1p0SnZPZXlYRUdQbkpJZFlNdTA1TURLMFk3SS9hN21pSE5nb3QwZ1g5WlZuRFd0WDFqUjM3bmpvUjJzLzh4Qzk3WGo0eHpYTlhab1BzY25uT0N2VlRIb0FhREFBQUFBQUFFQXBtUG53bURMdmw1cG5tUUsvSnRDWGUvWFZWL3Y3KzVXQXNEeHpXSVU2OEMvK0V0cTlGNjN0Um02cE5OU2UzaDU2Sy9tUmZCN1ZIVUZCWFUzbTFmSWp5TkxhcjJVREpPZWFqdkxhcnpyZ3lpdDVWWHI3SlV6eXNtWkxsem9oVlZUdDJXdytNREtiRW16c2J5US9YR0h6Z1pHOXNsZ280OEFGVEFtbTBydm0zLzN2eG9wWXlsVkQydXBhNnVOOEttTXRUb1ltVDBsL2p5c1ZCUUVBQUFBQUFBQWpxVmprNmcrK3JqeDgvUEhIMWREcjB0TGIyL3QwQnY3VHZucTBlYnQwR3g5RHIwazloUis2Kzg0dmZmczdwWHIxQnVUNEU5UjRCL0pVNlB0NHZxNm9BdEZueDVQOVU2a2xzMTlrb3dGU3BnSVdxYkpKdjB0b3Y4Skp2OW90aVl1dzdtcVFUSXd6THFkNFhjNkI1VDY0cE9EMlNBTFYxRlYreXM2UXhwZ1JWTXd2czh3YmtLTzF1cjVLdVJkQStYUUpaZzVWNE1EWlQ0cXVYalJURmd2cmZxYkFDRmxVaDlaYU90YlpOTFhmai83clorWGEvZGQvK3RUVy8rTWxjR0FBV0cxdzV2dXMrSkVCQUFDV0JiYmowYUZEaDVZNDlsc0kwNVB5Znc4ZnVPMnhaNTlYb29qRnNBMjUveHRxV3NZNnowWHlrMERrdks5d0FUNHptbVJyUGkrQi9TSWJEWkJRbzU5bzdaY2dzOEF2VzBmSzJPMlhzNXdWSUtSdHVTdTBYOVhIOHJGZlk1a3JvbmNaVThzbElxbldPQzNXbmdWN3JiQjYwQno3UlZJRW1EQzZoWE4rbFIwcHE3K1M2Sktza01rT0xHK0VXUWZHbUpWQ3pWQ3NSb3JXODdhUmY1K1FJN1dFUFhPMWtETTJmQ0RVQVptOURLRmd6S1FxWjU3Q2VUb3dObkhnM01WVDVUYTdpVDYweTN5NEJRN01IQ2RyOExtTGtHWHk1QkhsNzNHNlFCOTJISHdZL25rRGdGWHZ4QlU0TWdBQVFKbVp1M3hpL0tmZmxaZWJtcHFFMGRjVnhmaW9zbmo0OWw5NDlObm5pN2ZmcDFHZ1VtYjhXdHB2ME9kWTMyelg1Qk5wOU9iUVlpUk9sdGgra1dVRHBJNE9sTllJQXJKdHYzcFZFZGtzZHhkaVpyODgvelRUVjczOTZzNkMvMXFpYllqZXRKbGlXdXd6bU5rSHEvSXJuT0hyME1nMHo1WFpFSGsyS01rY0RDYkUrbGcxRjBqNGF3RjNtMXpyWDRLdExyZnhGdzRrMmt2d3h0dWZFcXhzbjVWZjQ1UmdaRlVkV3J1dFprcXdib2F6TGduQjVLZ0FBQUFBQUFBQVV3Yi9RWlA4WE82cVY2VmhaRWhaZk9nWER6YlYrWW9aYkMrcXFTYjc3Zlk3YisxeXV4MTI3ZmRuVnpYMmU4ZitnMHRzdjhncy94a2hYZGVZMHRxdnVENnpyajRXMWp2SWt0Z3ZJZnFXUTd6eVdrWGFMOG9Wd1dKZUFCeFl0TEdnbmpqbW5wUk5COVltT1Fncll4a2NHQ3BqQVFBQUFBQUE1TXZvc1NjV0owUHk4b0VEQnlvZytaa3lQc1krb3ZiN2NCSGxvS3ZNZm5lMnVuWjN1T3p2SG9tbm93bjF5ek5WMy9zT1BiQTBSMjdkQUNrWXpJa0RNVVRXU0duczErYkdldlVsL1BpY3JxWjByc1VSMWh1c3lMUU4yOWdReWVMdGwvN0h3WG1hRUtOdHJ4WUhWdDgyd2M4a3ZNK1pIUWNXRnBFMkNRWHpmRnYvVVViYVRsUUFBQUFBQUFBQWo4V3AwUGpQbmxJZVZrYnlNOUxrUDhzODlJc0hlMXRiQ2hncE0rKzN1WExmd1RQMVVkWis5M1M0N0djK0c3bGovOEh5OWZzMVl0VUFLWWpjYm92QUwxSHlUOGtTMnEvZ1ZaWXM3Ym5VOW9zeWM0QzUxWldWbXM5RW5ZQ2RLVjRsVjBJMm13OHNHbEEzNzFlMFhyQU5iejZ3U2FrdGZVV3VUS1ZwYkxQYWN5bW1CT3MvQS9SNHNINUtNT0pVOHpLckRxMS9kUXppQ3dBQUFBQUFZSS9oRng1VGFxWTgrdWlqdmIyOXhZNllXRVRUVTVuN1NmMVRUUUdwZDVIYkxTMFVDWlAvbkIyN3p2ZklyOXliYnpub1R1U3M2Tmp2aER2NWV0TWNhNzlkL3J6dE4raFZVNldqc2VpU0hieGxBeVJIUndkTStsMGErODBJc0lteXNnNmMyMHhwVnBTdHB5eGRHVXd3YzFpYUlzOGxkT0JjQVdoT2FXakU2N3FFY3I1cG95d1dyMVIxZmc2TTVEMXlsOTFlaHlTTkEycy9wMWhVSGRyZ3dBQUFBQUFBQUlBNWM1ZFB6SHg0VEY2bTZ2dlFRdzhWT0ZCMERnMFBTVkhaOFRGSmZlMVFWNDhhbXlVVGJ1MUFUYzF5VTk5OEhIdlN1UHJ3Z2R1ZWZQSGwwd09ETm9kcFFJNG5VWFBsMm0vY1FmNjVaVVo1Mk8xM0ZtQy9XUWYyT2NKUnFkalU1T1RFa2gzLzhiUG4xWThEYndLd3M2UER2TmRSV2RPZVY1SDlFcElUNEVJZFdObmFOQlRNZGg1U3lpQXIxb3I0NnpWbXExSEtZa1BCZVRvd3N0a2xHTm1vRHAxellNVEtMY3EvT3JUaDFVR0RBUUFBQUFBQVRCaCs0VEZsdWNEYVYxY3ZvNEhMeG9Sa2ErYm5wSnNVeUQwalBaUk11RjJTWVhwdktjUGFDY0FzangvKzNPMlAvcG5OUS9oZDFMQU51U3IzN1h1L1BqcnJ6SFl0OG50d1h2TitkZmhjT0p4WnVIRHAvSklkL3d0dnY2UCtHTUZyZ0lTOTNyelZGeTFWMm5QbDJxOWdRQmRSVEM5UEI5WjB4TTF0Um9RNnFxZ3p1NmVpeXZtbFErZWVVVGNqL0J4c3ZnT3plK2xmaXhWTGcyY1NWRmlYWUdSSWg5WStMVTZIVmdQWnB1blFwcjhGQVFDd1NvRXVTQUFBQURLVHA0N0VSdnJrNVFNSERodzZkQ2h2OWUwN0kwbHNTWmllbEc0WE15V1IxblpMSnR6WmpYejFBZ0VXK3ZhQm5kc2V2dnZnRXk4ZXMzekJROGg3RC9KVzd0czM2MHE5N1orWGw5ME90SGV0dTVqUnZHNzErM1FzRnZWNmZVdHdDc2Y3em92c0YyWEtYeEd4L1JKa0svQ0w5ZjVBYkc1UDdBVitaZFZrMDZxSmJoOGlFQkdCL1NwYWk5azJyNXpTVVd3all1WUp4WXJ0cFQyejJ6czA0NG9zWEZqTFNueTlETnZvMnhNeloyNWkvTnFoREYrOW1NcGpoRitMQzJrdWhQS3NwbzhSc2F3T0xmdzFoZnR4VkNwcEViUEtXR3g5TDJhTnNleGJIcFd4UUlFQkFBQUFBQUJZVXJISTJMSEhsWWVQUC81NEhqdEg1OUJyeDlESk4wcG12enBHaHRDWmsraWYvd245MjQ4bHpUYm1WSXNqd0pSSDdyL1hzaHBXSjNKK0Uva3IraDFVN0pleUplaGlEYllBZ2o1MTk5RHc0QkljLy9HejU2Zm5zL09OK1EyUU90b1pTU2drN1JtYkM0TEo5b1hhTDFmWE9hL0ZLL2hNUjh0RmJvbGNXVGs3anhacGkwdHJha2RyNi82YUZXQzJzRi9wZ21PZFc2OThCeVpDQjg1ZVVPNTdUd3pWa3JVN1dsV0hOblhnd3FwRDUycEI4MjNaNE1CWSsrZUNlM2lhS3dsTmtnQUFBQUFBV1BWTS9PeTdTdXVqdzRjUDc5bXp4KzZlVkQ3LzljZUY1RHdYd1BTa3BOa3YvQUNkZWtPVlhxcmZ2QW5BQ2sxMXZxZS84aHZtQS84eGFteW84Tmx5L2JWeGVjSG54c1dVZlY0dVhqaXA1aitiTkVDeVZlMloyTEJma1F6cit0MFFjNDhyaGYzeXRyRWYrTlcrQ0RGeHpMenNGOHNwMERnN0NWV2ZiWnk1L0poeFlDWVhHc3RER0ZPT21ldkQyd1l6MDNCeGJ0WnM1ckp5ODV4ekMreFFTTWxxUnN4bXJHK3lGYVFNV2NxSWt3Nk5zMVduK0puUzZtY0NZK1lsZGJuTjJ1MXpvNWxWaDBhR010ZVlmY1B5cVl4bEFCTkRPam9BQUtzTnlJRUdBR0RWazRwRmxOWkhUVTFOanp6eWlOMDlyMTZXakhUcEdjak1OSzZyUnp0MjI5bmNQQkg2RVBMdVJUVVYvUTcyZStOeFIvWmZuZlZOSmJCZnQwUDlZaHllbk5oYy9sTlFLbUR4R3lCUiszVzVjekZQalYzby84RWxuSkFYSnFiMks5cllSR0sxRzhneFMweTRHK3QyRkVkUDFWQmlia1lwNnp3Vy9YUXR2WnFZU2JJY1ljNHRaR1NLT0hJcnBYck9tVGh3eHZHSnBnbXc0WWNCVWtqR3NuWWVzM29WaUt5L0JETS9lekNCY2paaXpnYStCZTlCenYwd0V2MSt3TDg2bURCZG00MC9tUmlHd3VLaGRHZVJSem8wMFgyOHJCb0ZtMzRIRlhZekJnQUFBQUFBV0IxTXZQNWRwZlhSd3c4L2JMZjEwY2pROHRpdnd2eWNkQUQyanVIeHc1L2IwOXRqWE4rQUhKV2UvRXdaOWlTVTVZNTZSL0VEK2oyTUFFK0Z5LzZEeHZpRVVxeGIwQUNwWFpFZGJOZCtzKzZtRWRwUzJhODZWelJyWVpnL1ZiTlM3UmRsVXFBSlU4YUtDUStySXhMdEtDUlhWb3RvcE5RUVlkZmJMTktuZEJORzZnZ3gyQjMvM0ZEcEhKaHp0QlphYThlQkJiNXRNeDFhLzBPT01CMWFNQ3ZZNE1EQ0RtQUFBQUFBQUFCVmpTNzhhN2YxVVdKeG1lMDNmNTcvblllYTZ2VEZuQTRoYjBQbHR3cVpjQ2NWY1MxeTl1K3lZTmtBU1lvQTZ3Ty9ocEpBSmphTFROT2VsV2ljZmZ0VjdNd3M4S3N6WVNaYVNWYTYvZEk3UjFZVXpSMFlsU3NVWEZZSDFyaWlmaGExVUhSdE9UQWJOOWFGcG9XK2piU2hZR0llQ3RiN01ZRlFNQUFBQUFBQVFCNk0vUEF4TnZ4cnQvVVJ0VitiRFg1WERMMnRMYTgrK2kzOWVhREZLbmdUSjl6WkNMRFBYWkV5enpaQThoa0VHSHU5dU1HUHpBTy9KamFMN0tVOTg4c0RGV3kvZGdLL1RNbXJqSTdKS2NZWXFkTnhzYjdTRlNtVC9lYmFGOG5SYk9sVkhPck00NHAzWUVPbU5CSFBxMGI1TzNBcDBxR1IvY3BZSk05UXNBNURiMnNJQlFNQUFBQUFzSHBZbkFwTm5qb2lMK2NSL2gwWnlqVHNyVHoyOVBib0NtS2RSNGsvUURPVi9qNHFFNEQ5SGtkSkJvekUxVy9Dd2VaZ3VZOWZhWUJVNTkva2RPbWJVVG1Dd1h6U25obWJSVVdtUFd1amE1b1dPYnBvM05KTytqVzZPcWVVdEhiQnVGbG1ncTFjWFJvellXQ2xIck5MZGw3Q3RQeFZuUkhuamhZTDZsMHBaYkY0dllMVm96RnY5cXYwNzgwOTBHN0d0TXRWaWtESkZaR1ZPbGk2NXJyNkYxS2MzdkJ5aHQ3Q2F1OWZnalF2WVd3Q3JEOU50cTB2MWd3bGVDMWlvektXVHQvbFh6RjBtM05Ed0FSeCtoaGJQZ1VBUU9WaXJJeEJWdnpJQUFBQTVVT3hYMlEvL0Z1QnljOHNody9jZG5WODR0Rm5uMWZXSEVXeHZhaW1vcHNBcTI5T21wUjhuR0NncGJ6Mnl6UkE0bmNBN3VnZ1Z1cUxtUTBJMzNXTjVhQzEyMXNGZmpVaVpLSytwdmFMZVlaczdOVnIxWHVvQklGZmRvSHBVYXdlaklPN3FkbHJsQ0VPTEp4bXJCdzRHeG5PUHgzYWtCMU5lSDJWTEE0WWl6NXRoc3hxYkowT1RaRGR5bGpzMUhQQnA5YmlxNnQrVXdnRkF3Q1FGODAzMytmMFpzdW8wQVg2RUs0SkFBQXJuRlFzTWxIQTdOOHpKeXN1K1ZuSEkvY2ZvaHJNcnZsOU5QTUtpbGZ1R1hYR3MxV3MyY2h0TWNRU1MvY0ZtRzJBeEo4QUhBaFkyYS9sbEdDZC9XcTN0NUgyTElnLzh3Sy80a20vR0hGTTE4eFVsOFIrUlR1Nk5IRlNZemhYQ2YvbUZ3ZEdhcU5mckEySDZpS3J1bTI0dzhvdGdqSlBZcVFOU2h1Q3ZidzRNT09rdWRmRjhxOFA1cUZnZmVBYVpRL0lHRDQxREpVOVR2WmR3ZXJQSXByejRyNjZjVXVpTkFKRzRsQXdRanliTnNaNzFlWlJFQW9HQU1DS211YXV6Vjk3YVNvVFM2SDJTeC9DTlFFQVlJV2pLLzVzSy93N1BpYjFINnA4NUVUb1o0Ni96anJ3MHlpd1RVcjhyTUIvZzlMWnI2bVJoWFJKQnB4aFJIcnpwbTFsUFhpMkFWSnRYYWZlZm9OQjVIYUorZzhoVGZCUG9MNGMreFhJcEpuNjJyTmY3bE5NOEkrb1ZheDVtcnBpN0pmKzM2V2tCT2VtQWVOY0QxbWxQVENiZUN4cm5WWmNPVHVpZ3RPaGkzQmdnK2lxaXNneFpGc09ySkYybmJXYXBrUEx6cXFrUXlOUnZuVHVDaG95cmpsYk11ZWtQa2RNSFJnai9oSG1ub1Jld1FBQTJIVGc5czg4RE5jQkFJQ0tvUER3YjdXZ2MrQlpsUDRTbXF4UUIrNk11L3U5VWdRN2tVYWpjK25pT3lHRm8xbVJMbmYrTTlzQWlSLytiVyszay9Zc3RGK2oraFppdnp5L0xkUitFVUlsQ1B5VzJYNVJwZzJTTHQ5N0JhUkRjOGZNbWFEYU5GamZKUmpsbXc2TnRVMkpTNWtPald5a1ErZGZHUXVKQ2tUejlSZHg4aVZFeGJHZ1FEUUFBQUFBQUZYQjFLa2plWWQvTDU1RDA1UFZkQkdvQTdPNTBMSURWMkpkNkEwTEhtVzVmenBWNUdpeEJGRlNxWmNzL0l0RUhZQ2wvR2V1L1JhUTlveEttZlpNRUwvWDBSTFliMEVsci9LeVgycC9McUsyUmNLNk9LbHdnZDFXRTRLMDJsRTU0a3drbHkwR2hyQmFGU3AzRlpud01sYTJ6aTVoWkpVT3pSNlNNRk02TXlDUlB3V0NVTERtd0d5a1Eydk9OSnNPald4VXhsSkR3VmFWc1REUmk3WFJnVEZoWDlRWUN0WU1yZzBGSTRRZ0dnd0FGUWpVcWdJQUFNaWdoSDhwdHNLL2lVWFVkNmI2cmdOMTRQMDd0My9wMjk5aEhmaFBVR05sMWNScVNEbzc0elhESGtuZHc5RjBPSllPZWdzUEFnOUYxRHpxM1RkOHJLeEgvdHJaYzhxeXNBRVMwWCtUNTZROTY3L3FFeWJGRkZsbkwydWZ4Y2hlZEZmelgvYWhXbEZaa1F4c0ovYkpkMk96MktkQW5sRitZVnB0b0ZmT1YzWWd0ZEVUOHpUWDFDMWZ5VUx4dFp1bE5ZWE1qSVd2VEs0ZEp0cU1aMjVaTEtMOUdzanJrTVFPcUg4enVMK0NHSGZrdk0yNjN5ZnlEd1VURzZGZ2ZXVXNQc0pld1VUY0o0bEFjU3dBQUFBQUFDcVZ5TmxqaTFNaGVmbnc0Y08yd3IrVlgvdEt4T0VEdHozL093ODExZm1VTmIrUFp2NmN1bkJGc1RkU3A3NVhvOGxFb1hPQjZZNzlVMGw1MmV2MTdkNTFVMWtQKytqSmQrVUZmZ09rUURBckJVekhJR3dNL09yc2w3RDJhd3dVbTFTdXl1cWZyZWl1aVJBUnJmM3FSWWtJaXh5WHczNUpJZmFyVm9FdXNRTnoreHJyekZEN2xsdWN0cWtEWTFZNytlK3I5YThhbU9UeURYaGVhcEZIamJqNXo1eDBhR3k4U3NJQmVmbll4bVBtdXFyMlp5VE0rZm1IZHd5UUVRMEFBQUFBUUlVejhib2EvbjNra1Vlc2Q1aWVySTdhVnlJTzdiM3AxVWUvdGFlM1IxbnpQOUg4bDlEa2JJV2tDWTJnMVA4VGo0N2s2bGhIRStUTWFLS3dvUzZFVlhtK1kvL0JzaDcyNllGQml3Wkk3VzBXOWE0MHliMnFEWW16bDRuQVh4ajc1ZTlvRWZEanB6M25FZmdsL0FCaDhmYUxDckZmaE5TcDhKcDBZbjF0SkRWeDEwWjlMT08rV0pRK25VdjVaUXM3MldrcG5DdUR6TVJNa2E1bU5kR1hnMGJDZEdpa0s1cVZmUmw5ZldiVHN0TElXQmxMZjZiNjdaR3hDcGRoZzl3cmN3dEVhNC9FNExhR1hzRk1uTnUwT0JhajhGQWNDd0FxR1BnUkN3Q0ExVVppS2pSMytZUzhmT0RBZ2Q3ZVh1dDl6cHlxK3N0QzdaYzY4TmVlK1o1U0Z1c2tXanlJeHY4YmF0cUxhbGJzWVZORnA2NytQMUYwRnFVYnB0RDliUTVQSm5JM09wYytNNXJjM1pGZlFhOVFKTlUvbFoxQzdQWDY3dmpVWjhwNjhDL2t3cjlJVUFFTHF4T0FDZUxrWHdyVmwxaTI1RVZLN0kweENZU0lpZjFxekZQOUQrYlpwcjdQcm9YOUZoSDRMZHArMlIzWm8zVklFbVlTcDlVRnNwSHBxeGFjRGkyTUE5c01wbk1HeC9iVG9RMmZHSnp6UjMwa2x1UVpDdVlFdlRYL0VZU085WjhTYkJFS0ZrejFNL3hCc2g4S1JoQUtCZ0FBQUFDZzBzaDc5dS80R0JvZlhRMVhwcW5POS9SWGZvTk5oNWFuQlA4Qm1sbUJvZUFSbFBwek5Fc1YvYitqT1hxY2RNM0dycDdQSEx4SDJXQW9rcUlPbkpmOW5tYTJ2L3ZPZTZnRGwvVVVqcjZkN1FETWI0QVVDR0NYbTZjcXlHN2dsOU9TMTh4K0MwaDd4c0x5eHVLMFoxVFNTYjhhOXlSczIyR2h0NXByYy9aSjRzcGVJS2tYa21tYzFoak90V3dYalBLSkE4dDFvREI3b0RaRHdid1liOFppc1J3RnhzYXV1ZFk5aEpYL200YUNEVEZrYnBNazAxQXdmM3VrRHdWak5xYXRVMXgrakpiZksxaTlPdHhRTU5LM0N5YUNwd0FBQUFBQUFGWWFVKzhja1JkNmUzc1BIVHBrdlVNVnRUNnl3Nkc5TngzNDlsK3hvZUNqS1BZVEZQOWQxTEJDS21PZFI4bS9RL1AwcUZoMWYrVCtleCsrVzhwWWJuRGhGLy9scU9MQTlINUhtOHR0V2hJcmxpQm54NU9qYzB6dHExMDNsVHYvZVhvK2F0RUFTUXIvY3VOU0p1cUxiSGJyeGV6WC9yenJYZG13WDY2dklsR1I1MUpQK3VXcXRXMzFsUU9XRHVYS0VzczRyZkhjOG8wRGwydEtzT2ozRFBOUU1HOFhiZm83WmxPSlRTcGpvVHdyWXlHYnM0ZzFSNHpGb2VEQXgzN1pXZXVYSDlHRjVwdCtDZkYvSmRKb01QY3A0YXhnQk1XeEFBQUFBQUJZd2ZiTGREODZmUGl3OVE1WEwxZFo2eU03eUtGZ2RsYnc3UC9QM3ZzSDIzR2U5MzNmOTk0RFhPQmVYT0FDQlBoRGdFaElwbUwraUUxYXFoUzNWVXpFclNVbmFpeHFJbnZxZUdMUjA5RWZyWlBJbWpicHRLa3JjOUtacFBaa2JLVzFaenF1S3lhcG14a3JHWUZKVmNmSzJBVnNKZllRRVUxWkJVbEhFZ1grSmdXU0FFSGdBZ1FJdk4xN2R2ZmQ5OGZ6L3RwOTk5eHpnZWNSUkp4Nzd1NmUzVDNuWHV4bnY5L24rK0RhMzhHYkg4WHBSelhzbkgxVnIvNHplT09UZUUybjM0cDd2L09yLzZDbVgweVYyeC84VURmYnFXTGdQM3orc2hwcnBGYzlOUGpycjd6enU5KzVyTlB2b1lPMy8vUlAvaGRqSDh0UjNmKzh4ek1CMkw0T2p3cS9NZjFXRTM0cHBUU0ZmbVV0SFFwWGErMUR2K2FLMStRODBHLzlhQ0xicHRmQk9yQy9KVmpYRDRlM0JPdWJBaUpTc0dqbUJoa3R3WUM1ejBFcHVOMDlvYzZxM256cm1hNUVEMGthVFFyZXZuYndlLy82djN6ajhYOWVQVmZCOFBhMVE4NG5XbGppc1RtY0tTNEZRMjlRWUNtWWk0dUxpNHVMYTk0QStHdGZWSTgvOWFsUHhWZTRIa2NmSmRhUmUrLzY0MS82dTQ4YysrckR2L1dsVTZkZnE1NTVFVmNyRFA0MW5QK3ZzR3VXYW5BdCtmNHUzcTZ0enFvZU92TGh6LzNFSnc0ZjJHOHRYK0hyVGZ2Mkt4MjRvdC9mZi9ieTdpV3hiYkc3T2oxMzZScVpGRjNCODQ4LytKTmptNTloRGtCYTNlc2tZRzNiSmxaWGl3dS9vRzNQTWZSRnN1M1pYbXZzV1VkajBhK2NobUJOa1N1ZGdXditJV0t4VU13T2JUTXd1dGl0SW5ibzdHUXNLZUoyYURoMDdXTmFLeTNNSFFYc25SVU1ZNzhNTUs0WStOWWYvcHZkcTBzaFlLUk9tN1R2WUhDYUk1b3htSXVMaTR1TGkyc082L0taRnk2MDhWY1BQdmhnUFA3cTJXL2p3dmtiL0tSVmtGbjljVEg0NytPdEI3SHpyMkg1WFZnY2ozc2Z4Y1hmdzZYcUZkMjlJdEZYMWNjKyt2R2I5dDcweGFQLzlPTEZkWVhCNGVUSGlway8rZUJQamozM1NKVlNnSGVzSEhRSElDM2VmTE1IU2wzNnBUcUVFUkoraFV6R1pqZ08xdUcyWjR3ejY4aTMvVjcwVy8wMWFZQ21sV3pGRkc0bEdoeFdCQmhQZUI3WUVtd3B4a1pMTUhMVG9RRTZIVnA0MDZHN0NHZ05zMjBwdUhzWklqc2FzNWVDdFRzODVrMGlSZFRhRGxMM0NEb01sZ2I1bXorRUp1aHlZekFYRnhjWEZ4Zlh2Tlc1azE5Ump6Lys4WS9IVjdpQjVWOGZCditqWTM5dzdPVFRtSnFpcC9ITEYrN0N0aC9HMGc5angxMllESCtobDNEMUJDNVhmMXk5dDZxS2VEL3pzWTlXZTZKUExmYlZEMzdvdzRjTzN2NlAvK2x2dlBEaWMrRWxxOFYrK0lkK1JEZE9qMTM2QUtUZDFBQWtzWGVmZzJvdSttWVFiSkx3aTE1NVYraGhlL2FoTDJaaGUzWjIyS1hmNm4rVEJvY2FESjVTSGh3cFdBaGQrbXpkd0tKN29JR1hzYnkxb3M1WVVoR3ZVcFdkbDVBbUExc3ZKRTFtN2hCZHZTN2MvUkZTTzUzdTluWG9GZGI5bFdibFZDbFlVNWhiVjdnSnZkVEVJME1LaG0rQkR0RmJtVmM3Yi9ZYnI3QWYxRDJDam9IUnd4RU5IcFhFeFRYSHhXMzdYRnhjTjB5ZCtYZU4vM2x0YlMzZUFNenlyd2VESzNpck1MaUM0UnJobnNhVjZzK3Y0ZndxRmlvRy9pQzJWMGo4TGl3bThuREZ1bTlCVmx1b0hqeU5kMXpveGJRbitjRVB2djlUUi83OGtYdnZ5dHJoaW16LysvL200VDk2N0tzdnZQUzhoY0U3ZHk1WDN6MzBybmYvbVR2dm1vSGgyU3A5QUJMaGYyNFVZRnJhRmNGZ0twZGdkYm5TdzY1K1lWYTlhQWdweWZpbkdNM0NDb2RDbjlBc0dXQmRtZklTc3U1blZrOXBZM29tbXJpcXFOZGhZTnBtN0ZkbFNhZTBRWWE2OEp2eUVoYUpPWU4vMVZrUWdxQXlaMyswQm5GL09uU240SGFuc1FaS2c0SGhrWUl0TzdUVVA5ZVcwZG9qQmJ2dHZ1WTIwUzR1aVgyd2Zwd0UwaHpSMm9Ccnpvam00dHJDdE12d3k4WEZkZVBVNVRNdlhIcnB5ZnB4VXZnenk3K2V1di93N2ZjLzlGTy8vTkJQSFQzeCtQR1RUeDE5N1BIYUdsMnhheTNlZG1nM1JlSUErb1pmNlBDQi9SWHhmdnhESDZqb2Q4Z096MUxhVGF4amJRUHc0bVNuT3dCcG8vdDNNaUZjelVuQnZZZ05Pa0lDZ3BvdmlzRGMzVlNQY1RiOXh2T2lCOU92RW40ZCtwMWFvRFh3VlE4N3RURmtXdTdZcXdhc05qVzUxVm5idnVKMm15MWN0bHduV215VzdXS0dhYmZ0MmhVZHdVSGZXbktYc25ZcUNUenVEa2U5cXRSUmxsU0ptMFdFaWNhQnJtQlBibGI3bm5pNmdydVRZUENvS3dXNyswQmdzSDZZTHZBN0M1dVliSjlEOTZlV01aaUxhNzZSbUl1TGkrdDZyVHovTTh1L0NWVnhhZlduSXVFS2dJK2RmTHFDNGVxL05RelhWU054TmwwZnZ2MkJlKyt1MERmUTRydWw2K3lGOWRwR0RvLzh1M0R6TFczbm9YNTFybUZsc09OWDJDS3VsQUhoVjlPMXBNdllNTllucHIyazBhK1ExdllsUlFqZFlrSWEvbWJoV2N3ZFZLUnB1VW1BcloxWnpiYzZmV2JTWXFyQndLYkttaURuYm5CcVoydXV0eVUxdUJYVEI0cTM5UDVWVVV1cWpjVzRpWnpTbDZ5M0xLWXZVYitnY0JrNDNxWHNQQThZbmNQdGEwbmx6NmFsWUVwOHRvS3BnbDNCZXJPeDZhYjJLcjJhRkF6WXpicitjQ3hKU01HSmptajlCWVRVNXlZbE9LSVpnN200dUxpNHVMaG1XQ3IvZVcxdExhNEFmL01wUG1QcFZaRnE3WTZ1djZ3eCtOblRyNTM2N3VtYWgvV1p0d3AwNno3ZWF0M0ROeCs0by9ydlZPKzlFVTdYc1NlZlZvL3BBVWdIYmxiS3JVQ1Mwa3ZTTDlLRVgyRU5zVUdLd0pzV3kreWhYK2xoV3BpUDgrazNpTDRJYU1VMi9UWmprR281czAxMGJzS2dOZFlWSHFTVXVReGNVNjZTTmV0SFNtTVZmbHBXREt4SnF0M1dTQ0lOTVREZ2s0S0ZLWlNtU01FNmVJdTRGR3g4Vnkwa1lsS3c1bUgyV3FZN0RCWmFrelA2TzZMMW5SZXVGQXh1RE9iaTR1TGk0dUxhNUxxUzVYOCsvZW9OT1B1M1lOMGdITnU3SG4zc2Erb3hvUUJQSmd1cnF6Q0ZYMlFLdjE3NnRkRVhDTkR2Y09FWHV0QWFvVisvOEZ1Q2ZtUG9DMmd6YjZZYlhkRE9tR3hlUUZyN2sremJsdXArUmtPK0RVSEthZG4zQ2JUR1ZlMHVnbHBNYUpPYmhXdzNMMXVSMWI2alFJYVB0UU9YcFV4MXROZjNBS1RCdUVZUW1UUVhkbDVVZEVGUzFyaHFtRytZK3E0VWVqcVdPemJhL1BRTGF3RTRFN0hyOTlqNmlYSi9iTHF0T1Q5czFNTFU4c1NKRmJxM1c3SUJrNHVMaTR1TGkydmN1dkRNSDZuSGNmOHpkLzl5alZuSy8wd09RRnE0K1JhYUVhUU5JMzc2bGMyNEhBSUhMT0czd1ZHS0hmekNiN3J0ZVVwdDdVdklzS0xyRjM3cm5aUTFBeXA0TEVpL3NnbWpsanFRTGtCM2p2ZGs0STdscHB2VysxRGQ3T2s0QXpkTFRzK0Z0YVJoTk5aUTJkeVR6UGZZUmpWOXIxcWVseHFhMHRBWTVFOExtSW5oWGRLWXdVWEVpSGQvQ2ZLV2ovT2svWWtuc0ZacXhPNVNQYkd3RjRQTllnem00dUxpNHVMaW1rMmRPL2s3Nm5GRUFWNC9qOU92OEJuakdxbWVPUFdjYXBOZTJVMzVuL2Z1dGRGQUJxS2VKU0ZXMFJUUWJVcUViYzlleERXSnlVaCtUclk5UzRKcDBjdjJMRnNtYlFCU3l0NzBLNnhlNmVuakJXTWhId00zcnlyOTNFaEx3UUVHYmtCZmUzZjFFeXlDdER4ZFJZb09TK1VZVW5DN1Z4NHBtSVpHRDM4bVNjRlFVckJ3b1JwcFVyRHpwRWVSdHU4ekNVazhHY0ZnM3gwakRZUEJHTXpGeGNYRnhjVTFaaWtGT081L1p2bVhhOHhTOG05VnE5UUU0QTBBcHRVcFUxQXNKdnpDS3dyS0ZDcVdsb3luRVZ5ZHlvUzQ3VmxLdGZmNlh2V3hQUnVuVHZhbVgwd3QwTVpXTlBXNWtYUE5UZmV3UTdldk84UU9yZEd5cHNMRzdOQ2pTc0V5UVFwR3BoUXMyMXNkdGlPYVJsd0RiaWxPVnMrVWRrUkxjN05lMEJXTXdWeGNYRnhjWEZ4ajB1L1ZpK2ZxeHc4ODhFQm8wU3VYOGVMemZNYTR4cXRIVHpRTndJdVRuYTRDTEZaWHhZNmRGQVVRSGIrNXdpOW80VmZHRU5kUHhkRzhxOXIxcTJseW0yTjc3aEJWZGp3cjBjQXNSYi9WWHdzR3N4V3dROE94UThzc083VFE0TEt6UTFOTEtnWnV1NFdiVStsOG1CTHVmR0NBRkp6U0ZSeVdncDFiUWNsU3NJUU1PS0psVDBjMGVVUkZHb01aZzdtNHVMaTR1TGlLQXJCNmZPVElrZENpTHoyL3djQmNYS09WVW9DWHZmNW5UOVJ6ZTRrdStncS82Q0g4QnZESGZGR1JrUFpzMko0MWMrNEEyek1LMko2bE5MbTdPYlJKRzdGY3k2blRpVVJDZFB0VVIwS3JBT1J1UXBJNVRLaDkwQ1VqcTgxSW9XY1g2NE9GcFRhUnFNdHpick9JcGZZcVVndHQxZ09xTkJRV3V1VWF4S0JncUlOcDlobUpRNUwwN2VnVHBiUUp2UWtCMGNZRVlHdGVFZlhkOXJhSjBEN2syZ2JkVEdsMGgya2dLalZEV0ZvVGZxMDRhSE9Tc0tTZWhMa1Q5TVJnSURnMFdJQ0Rvcm00eXRYYUJ6NzUrbGQvbzFaQ0ZuZnVycjdrVzAxY1hGelhQd0IvK3crYjM0RnJhL2ZmZjM5b1VaNSt4RFZtSFQzeHVIcThtL1EvSDdoWldtT05ZTHRCblNtL0xzMENuaFJsWW82dzlEeDJNRkk0bEtBRHA3blhucGZUVUZNNmgyQWVtWlRXamx0eXEwSEgyaHhqK25ETXdHZTFuSFJmVVhtSDVhUjJLNHZwektLcEFsMVA1VFhacjZGUkJZMXFlMEpuTzBXUVlyb2RLUTIyTXg4QTNjZ2s1N3RDYUtkZXFCbEJ6WjdvRC9RbGRRcDFSeGEzcnlmYUFVYzJ3eE5RSitubjFUUE5TV3RmSFlaeEdlcHVnTTE1N2MyQzduTWpIRUkwcGlnSkhZT0ZaNFBHYUNVVGc0VzkvOEw0cWZKT0RJWkdxVEs4c0JEUTdPSUJEQmJXVHpsUFMrTGlLbFRiMWc1OXo5Lzg3Yk5mKzJjMURGZGZnZ240aHFtM252ekt5Ly95NFN0blh0ajRKT3c5ZE50Zi90enFQUi9oMDhKMUk5U2xsNXNCU0JINTkrd2JQUDJJYTlRNmZySzd3MElrWUUwbVltMnZRYkEwbDlydzZYelh2MjRFRWVIN2xqQWJWNzNZN1BQVkdnbEhNcklrRWFqa3JHS296ZEtCYUF2UnphTlRYbURyQm9IVTJuS3JkME9Cc1JCQ3FLY2I3REdWekU0Z1ZSZ21qUUc4amQyN25mb3JoS2xsYWhxdk1RNVgybE44TGZMVUdWQmZON1Frak8rMkQ1U01LMndCVmo4MEVCSzN0VUg5bGttcmRHdUg1b0Z3NDhaQ2NGMTdNRzlIaXNhNFlBbmZLcDN3RFZvdUZrTC95QWdDOE0zbkRXWjJKd1pySjBvZ0I0TTlRakVYRjFjZkJ0NTc2TUIvK25OOEhtNUErbjN1SDM5YWZWbGhjUFhsN1QvOTY4ekFYRGNDL2FZMkFIOXIzdVhmcjU5NjdsK2NlSHh0ZWZtdkhmbncyc295djdsYnJvNCsxaWpBTzFZT2JsdmFaMzEzWWU4K0cxOEp2SVJmdncydUc2QldtZzloU2RBaVpEQU83NXNNb1crRWZtbjB6YVBmRVByUzlEc0Y0RmFHbFMyU05UN3N4czlzRW0rRWdWdDFkYnJCWnBhdkVNcjkzRG1UQ1FadTF1MWdHNll3SzEwR0RpL3BNSENMby9YTGlFYTFsUVFEdzNRTzY5enJBdHYwdThKNGU2Z2RJRG16WFJjcU53eWttN3JiSDJGSXdTNkxHcXVJZ0NNNlhkMU5aK1lvQnB1Z3l4ak14Y1hGTmJ4ZS9wY1BrMDh5QUhOZC93RDgwcFBxY2NUL1BNZnhWMmN2clAvNEwzMytlTnMrK25lLytLVi8vUXYvM1gySGIrZjNkd3ZWcWRPdlJRWWc3VC9nRlcrbDg4Z0RueU1KdjhRQ1NjSnZqSDc5U2NrQitpV3puM3JSTDQyKzlib0wxbXRMWlFSdjNkTDJ3ZXNlNjI0OGtvVGRyT3lHVjRFYUtrV3ZTNTlpdFlxVVFZZUFtVTFGNVo0SmNqYTBzYVN6L2JDTnZvMHZJKzQ5V0FGbDdtZFI2bmQwQWpPVzBQWEhBL1pKbzdPNDJ2QnE0cWRJVDQxTEdKVUVhbUZRK1ZqYXVSTHdma3ZIWUI0YXpNWEZ4ZFc3YXVkenlwTmNYTmNiQUw5OFVqME9XYUNmL2ZZOHgxLzl5Qy84dmVQYStKeUtoLytYTC84T3Y3bGJxNVQ4NndOZ3NYZXZVSXFnOUZ5WjA5L1ZMLzZsZDVZTkFoTnFiUmdSTHYzNlp1S0VtRmJDbnREcnR6MUxFSUZlaWJabllsM1puMzZucXk2NGU2QVkyQmcrcEJPdkRZclNkdy9BbVdQa3psYU8zVDhJUkhLSEdGVVNGR29EcDdRU3pKd2xuU3hsMzhnczdic2RIMHJwdituaWNHWjRYU3BCbXNpSTlxOGk5SUFxNmNWZ1JERlkrakhZY3k5S01BWnpjWEZ4Y1hGeGpRSEFyUUljazMrZm05dEQrTHRmUFByMVUvYnUzWEh6QVg1enQxYnBEY0R1QkdDeGEzVmh4dzRISmNLZzBWM2hlN3FGcFYvNGRiUkFEZHRFT3lvb2JudjJEWlIxd1UxS0w1SDVoRjlwTUw4Mld6ak45aXoxMTdMUUtVaS8wd2NUMCticTJLSHJIY3ExUTdkZHRwMGR1dDVveEE2dHVhQjFPelRjWGw5bGg1NHVJUHpKVlhSVHJ0RVYzRVZMQzhwV2JZVklKWFFGbTQ1b3p3NjRMbUppWFpSd1JLc25TVWMwOGh1RDlVNWo3ZE0wdURFWWJJcm00dUxpeXE5dGV3KzVlbS8xSko4WnJ1c2ZnTnNFck1PSEQzc1h1bko1WXdEU1hOYXpwMS9UeGQ1LzhOQlBuVjFmWDF0ZS9oc2Y0LzZGTFZZcUFucVZ6SC9ldTNjbVlWZEk2ZmlWMFk1ZkpKdVpNWGJlRlFyWm5xM3RURk9nNjJIR2pRaW5oVkdwWkt5a2xtQ1k2ZENlWkN5RGdSWEJHVkhIL21Rc25SN0R5Vmowa2lheU9xT2JpSzVnYUVIVHZ2QXRmMWN3eU01ZW95c1l3WEFzQjZFREdkRWRHSlB6aWhUaUJrY2wrUnFER1lPNXVMaTQ1clZ1Kzh1ZjAwT3cxSk44WnJpdTc3cDY2WnhLd0FvcHdDL05iL2Z2UC96eTc1eTlzRjQvL3ZtZitBUno3eGF0WTVxRG5XNEFYbHZ6b2k4R2hGMWhRTlF6MGpwK01WcmVGZkxUbm9tanl4TisxU3RNMUtRZW9RMWIwaWpWR3R2cnlNV3RFcW1HL3JiSTZESXdsSUlxQ1FVMUlSa0xJMHJCK3Roa2F6dHlnQlJzN0lDYWxHdEx3UTQzYWx2emhHUFpHZEg2cDFiNk1xSk5jcVpISlZFYXNpVHlzZUNxeElreDBVakRZREFHYzNGeGNTWFVybnMrOHU2Zi92Vlh0REZJdC83bHoxVlBjak1KMS9WZGVnTFdmZmZkNTExdVh2M1BGZnIrazJOZnJSK3ZyU3ovamIvRTlMdFY2OUVUWDFPUHlRbkFZdjhCRS8wSThoUW1IMHIwRjM0Rk5hRElTSExxSi93aWE5QVJVdEtlTFF3bTZkY2M0ZXROZXpZMnBROFdicmNqdEZlYU5LelZFR0tER3ZvTUkwMEkxZWY2MkZMd1ZDS2UzbDBRc3B2a2ExaWFQWU9PREFiV09GWmZaZXdoU1NEbkZUVi9DUVh0cEJTc3N6VGd4K0Q2N291UVlVZTA4OTBzUnpTNnI1b01icGRtelZGSmtOQ3pyMm1DRlJwWUo4ZEVzeHJNeGNYRk5hTmF2ZWNqblBuTWRhUFZaYzM1djZZcmJGYk5xd0w4TDA0OHJ1VGZ2L0d4ai9Mb282MWJTZ0hldHJTUEdJQzAvd0FROFR5TGtKb2EvdEtIdmlEc3lnSDZIVlg0amRHdlo5MUUrcFYrcEtmcHQzcTQwQ3c2YlIxdVc2S3YxU3RJY2wrbDlOd0ptRllUcmR4RmlYbFBtVGRReXArTUpUMEphZFlwOHdVN3UzY0xxSUJvTTl5NGEra1d3OEt4MUJmVFNERGZ4NHNLeHdya1MxTVowZnJQa3FBVHJSTHpzZXlFNXlaUU9od1RMU0ZNUFRvYUU4MFJXVnhjWEZ4Y1hGeTV0ZjdNSDZySFhndjBIUHVmLzhteFAxQ1BXZjdkdW5YcTlHdFB0REZtdFB5N3RqY0FEalUzMllBYW52SHJHUzRqdkV5UkgvVk12SVNNTDVtV2Q1Vkl6aldkMXR3a3MrbTM1VklGdGhyOW9sR0FZWWlRblJRc1JHTUw3aFJPVjdmVG5wbXF4RzI3cnlZRnF6YmJabmxOVys2MFFHZGtibmRVd214U05YZFlQM0dkWEdwS3dmU1NhbmQweFZqYlF5WDVLaW5Za2t4dHRaazhGaERmTldjWlI2UmdwSXdMOWppaW00T1JuaG0vbmRZdHpCNXU3VjIyVjB4U2crTVRobGtONXVMaTR1TGk0dXBmRjU3NUkwVy9YZ1g0cGZuMVA2dlJSei8yd2Zlei9MdDFLOTRBZk5OK1VwK2tBcTRrSVJyUjN6WFJseFJhNFhjbWd3eks4dUNyTDZrcnA5SFhmeXowa3JidzY4N2loZlJ1cXROOVcrRlhyYUtsUU1PTm5tb1lXS3JRSkpYbDdKaVQ5ZmJhaHZvNkJtNk51QkFnZW00ZG9BVmx0MFpxZXpDY2ptSWtMT21tUUVGU2x1YU9xeFc0aDlaMUlZMzZyaEJDRXNqbjZRb0drakhZZFNhM04wSGdjVVRyK1ZqU3U0eHBpbTd2TkdYbFk0Rk4wVnhjWEZ4Y1hGeUQ2c3FaRjFUNGVXZ0M4T2xYNTNQLy84V0pibXpzajMzb0EveUdidDE2OUxHdUFYalpBV0N4WTRkd0J5RHBlY0R3Z0doeTJKV0lPcE9UZ3JLUTRWdk9iZlFOTXphQnZoQ0tIa0wwUzFPMFRiOFVwUzlJWW9xdlpvZVcxOGgrWXMvTGQrT1lwQjVMM0taeVVXK0RESTJaTXU1YlNIMzNzclY0VUw1bDQxVEM4eTNyL1pZMUk1cjNXdUFmWUIyWjJTV2tGTjdQTisySWh1V0lKbHJBNFl5WlZobmZIa2MwZEVkMFpCbjFwRkN4MmJsRGc0dWJvdGtYemNYRnhjWEZkY09Va24rcmV1Q0JCK2lGMXMvand2azVCV0NObW43c2crL25OM1RyMXJFbkd3VjRaZmVkaTVPZDFuZmJCbUJEK0JVdUxDUjVudUVLdjhMQ0ltc1YvN3FoZmxLa2Q1NTY2QXdJazFTUWZxY2VZcWx0MUVZMjZhUG8xdlU4QlZnMVhOaFp1UHBpUVRUVGh5WEpscTBpN0dkZ3FWWWs1aklSREJ4NlB4TGVPUkpvdzVPYUpienZqWFU3d1dmUTk3enhIUWJMR0VKSE1kaUtPODlvREpaSmpjRXlEWU5sQWdiTHVjUmdjSHN3RnhjWEZ4ZlhqVktYWGo2cEhuc1Y0SG1WZjZ2Ni9TZlovM3hkME8vSnAxV1NHVGtCV094WnN5OXVvK2pyNjVJbHJ1ZkQ4cDZmSm1nb2xUSGJzNG12UHBVeHBDTmFxQ0x6Yk04RWRmcHR6eFNsMTJlaGVva0Z0QzlHU2NFZEE3ZWMzS1ZqVWFlSlpHQW5HU3VVTzVVaUJXTW1VbkQwTGV3d09JN1FhWGQzaFBjSGdDTEdWZ29XOWllUy9LelBBb1BCR016RnhjWEZ4Y1UxZnIzOWNqTUQ2ZkRodzk0RzROT3Z6Q245YXRUMHdMMTM4N3U1ZGV2NGs3RUc0RDFyNm1JMTF5WHFEYnRLc2RCNjFxVmxOcExGRW9WZitJVmZ3c2xMTHpsVmJzMjhxeVRic3hIRDdLRmZmZjBwWFU4UGNFRnFTOWpSemJLelEzY2FkTndPTFNIdHMyL050SktSZHlqaHZld2pCY3VJRkN4amNpNzVVVkJoeXpaQ2gyL2swTjhWM2dVa2JkejMzcGp4WWJERm5DU0ZSdGVpTVZnRXNOYkJZT1JnTUVnTWRyc3BHSU81dUxpNHVMaHVnRklXNkszWUFLeFQwdy9kZXhlL20xdTNqclpXOW0xTCszYXNITFRwZDIwTms0MjRwUUtlWjIyY0Q0MUxrYmsyWG9xSkdKaGRmRTBCNW1UaHQyVlhxK05YbWx3bVE3Ym43Z3pvdG1kcFRSSnVwZDZHUlNmVFJkVWMzZWJVNmtRamhCRVhEQzBaeXc2STZ0S3Vwb3pkNURGMXlWamRHNll5dVh6SldIcG1sWjZUTkIwNDNId0NhdU50RzNQVlR1eHQ5bG1Dakp0eThyUVN3N0ZBemcwR0hUcXRPNyt0U2NLSWpndTJFNlNsZWRUZE95UThxN2Y1V0RJOE1WanE5Nk9zWjd4clNXMm9zM2Qvb0lWcElSU1JaZjVZVU1zNzUwcTZKQXdpQjBzR3Y4dkZ4Y1hGeGNXMWRXdGRhd0MrNzc3NzZJV3VYSjdiQnVEZlAvbFUvV0J0WmZtK3c3ZnpHN3BGNit5RmRUVUFpWlIveFUwSERFZ0RDSG5HeW9YV1U2QkFCUDNJOUxBckJEelBzQ0c1Q2RjMWRyYmVqWTRUTkVvVjB0aVEwRUVVN3NZUkdxd3JuYVdsMDBVYlM0MjJYa3NhQzJ2bzIvNS9vaU5UaTdpaVMzaHVBTlppNEhyUWpmRE03Mm1tSDRrNlN4b3FSQm9hVEtyRWFaY3F5WWxIRFJaMndkSkNLTTZUb3Z1MnVVZzMybWVLa0MzQk53ZnJmNkdPekoxWlJ3UzA2eWRRbXNkb1FuYkhzVEVNZHJLUnUwTkt4dUQyQm9IK0NhQXdXQmpIWmxLb3ZaWlF0MFZpR0N5U01WallIMzhSd0dCQmtyQnpNb1h6cTRJeG1JdUxpNHVMNi9xb1M2My9HWUVKd0dmUHpPMytmNzJscGgrNmgrWGZMVnhIdFNodmNnTHd3cDQ5L2lSa0p4ZmFRbC9BaDZsQjlFWHZLVWNXL1lvMkkwckExbWkxenRsbXQyVUlzejJkb1RTS2F4Tm1BdlRyb204Qy9lb0h1eUM5TTRnNzU2M3EvelZzc2NGVzN0WTNyYlV5UzJuZms1QnV0QmZwckxidHhOb0VIbWl2MHUxbXk5MFFHcWJWRm5GQnZDdGhHMzEyT0picjdCV05QdTZZbkpNdEVCMEdKelFHYXd0c25CbGhQbU1mbE5zWURIOEVkRE5NU2ZWMU80czVwdWpNM21CNGVveHQyek9IUlhOeGNYRnhjZDJZZGVYTTgrcXhQd0ZyVGh1QUsvcFZEY0QzdmVjT2ZqZTNiaDF2bFh6NEJpQ3Q3RXFoWHhXMFpFUmJ1VXlSNUhsT0NidUNLL3hDYTZRVnJ2RGJOc1BXRi8rMDhCdG9MU2JvU1libzEyVEpPUDIyaEtKaW9NUDBXeTAwZ2FhT0drcG1CK0FCS2JoZVJ2ajBXeVVGeTk1U3NERnp1RDFhUytkdDJwcE5LYmd4V3FkSXdZZ01KWVl1QlRmM1JMUnZrVkl3WEVkMDdSR1hsaVBhM2dMbGlFYW5mNXFyRzBJdXZUcnF1VTNDRm16MTl4R1dIdXNmR3R6TkZtN25HdHUyK1FGcU1IVDdPV211Sms0SXNrWUhnd1ZoTGk0dUxpNnVyVjFLQWZiS3YxV2RmV051QVZnOWZvQVY0SzFjU2dIZXNYTFFIWUFrNnZpcktQcGFWOWprY05PaG5tZjRoRjhCSFR4YnlKSEcvZ3dWZmhHeVBldGhWM0hiczYwaEo5bWVyUk5ZTHpkUlRhWlRLRkFZN0xWRHQrU2x1TFQranJlVlYxdXd3V0RWRld3eU1CRHVDcmJhY1ZzSVU3NWkyWkZlOSsyNkdiaERaczFkVDNVRkc1M01ObEFaa3J6SjZwNHVYTnNSRFdNM01oelIyZ25wVG9yczhKTmdSY0lSRGJnWTNLMDFCeGpjYmJZUUJvUHdSVE1HYzNGeGNYRnhiZWxTUGNDSER4LzJMM1JoWGdINFdmV1lFN0MyYmoyaEtmbTAvM25mVFNHYjUyWjVudUh0K0JVYVJyb2R2N3JDTzZqamx6aE1xdU0zc2lsN2dSVDYxVjNQRXhoZTZ5a0xxb2RxRXpvbWlDNXB5dHd6QmE1b2dWbHhZeXNGMTVxMi9rNmIwTmJDcERBM0swMSthWEZJZHVpc3NGVWgrNVM5UldlSGJuYXJEY2RxNzI4SWRUc2prTUxWdmxhM0wycVgxTGRBU3EvQzBJM2hvcUNtVGd2bzd3WHhqSXQ4Ym1Pd2hZa2tCZ3ZkdVN6dHQyRE9NQmh1T0p0SXhtQ2t0UWN6Q1hOeGNYRnhjVzJSdW5MbUJmVjRLeXJBZjlJcXdCeC90YVhyMk1rdXludDFMOWtBdkdhVEhycldTS085MWxqRUhmd1RRRTBMangxMEpIYWdSVitUR2J0NFltT0trTTNKb3BubWswQzhMbnVUTTQyNkZLSnVGTEN6S2V1Z2pOTWlYY0NtMXBWbXArckVBbzk2QUpPdzFVdE5zMVZPYU4yNDI3VGVDdHRJckFtNUdsUUtYY0hWUUZFL0I0NzVtUWlkN3ZpM3p0dXlCZDVXc0JhdDNOclJjaGZuMUFKeklJVkwzWmZvN00zNit5cm9zR2hqQVppaHl1b3oxSW5xMGhCamhRbW50REdieU1jaWhVMUhUQll3TWRoRjk1bGdjTmZLN2NkZ0p5VXJFaGFkbUpJRkZvUzV1TGk0dUxpMklnQ2Y3UURZR3dHOWZuNXU5Lzk0QzA0TXdGdTZIajNSREVCYW5PeDBCeUJ0ZFA4dVRseCtVK2lMZnNKdkt2b2k0QjhXNXRBaG9jVWdDWFBlcmVqR0ZHbVFMRDNvYSswbmliNG0vVHJvNnlGWUVuMTk5RXVpTCt5ZTZnbXVUWUd0azJhYjJVTENIdTBqdGI1Y0dOQm0ySFJCTUhDM1RFM1BzcllmZHg1ZXdHQkxnN2YxeUdJeWRCcUcvVm56T1RlOXZob1FvNG1QYm1tNXhlZU9ZdjJ6bmN6T1p3dURoYmREbU9Ua0R1MGFhRFQ3bXVGNnA0MW5VakRZWlRrWGc0VXdmMUpjRExZb3REQUdkN2N4Q21Jd3VEMllpNHVMaTR2cnVxMUxMM1VSMEY0TDlJVzU5VDkzRGNEM0hlWUVySzFhWnkrc0t3V1lsbjl2MnUrZ0wyQzExeHJFbDRhKzdqS2tHT3RCMDA3NGxTYlRPdWdMci9BcmlkZUZYNjBGS2Z5UzlCdlRrRVBDYjVCK2lUZ3hURnJxYWhLa0ZKZE5wV0NENjh3T1lLR0hVUkZTY0lkakJvNjIyY3hTMnlUZ2w0STF0YmJkbStuTENZS3AxUEJoYVp6UGxnbDFqZFJOa0pLZ2lkMkE4SGF3a0Q3b0dKMVJYbmhuSmlsT2hqMkNxUHRFNklxM1J1YUpHQXhyNUUrTC9TRU1KcWZzV2dvMlFadk4zaEtUa0d4bFZ5QU5nM1VjbGdRR2U2bWJJdWZZOU9DZzdabDkwVnhjWEZ4Y1hQTmNWeStkVTQrOUZ1aDVqWUIrOXZSckdnQ3pBcnhWNjlpVG5mOTVaUTgxQVhqZlBxa3U1RTFpYytBeHFxWjJ5d2dUSXBXRlZhUjVrcVhiT2d1VGE3VStXM3RYUE1LdnhqQWRiYlphTVMzOE9oU3N2MzQzcjBmNmhWOXp2NlFCOE5hZGdpNU5xMjFtdGtLd0ZBTTNIYkZTR0oydUxSaTFYdUtXZ1VHbFFFa1Y4OVQ0bkJXUENvTThwWmF4VEV2QlUyNXUxRnBsem9hUjJTVXBlWmJ5Sk5QUnpZNmhPdUs0RnAzdFdrLzJNakNZYnR6dE5pVklGTFExWjlHUk9mVFp3bmJqcmlkQVM0UXhXSGpGWkVrNm9oMy9ObUFFb3BFWTNONDZTY0hnOXIwbk1CaEJBVmwzajlNWW5OZ2VEQmFFdWJpNHVMaTQ1cnZXdi9PSDlZTlFBdGJwVitkejUxVnNVbFhmendDOFpldlJ4NzdXQWJBekFBbVR5Y0xLcnFBZWF6RnFLdnJDaVVyV3hwM0tpQ2M1ak5reXZCWWgvSkxvUzlDdjJmRnJoWFZkUHYvcUc5LyszZXJCM3UvNTRhV1ZteVAwNit3dFRiOFUrdXIwYS9RQXQ5cXR3dURXb3F0SndSM1g2aTJpT21FNlVyRG16QlhDR3Jsa0lMUjZQMjBwV0JHeDdKUlhZVFQ3VWxKd2ZHcFJ3RkR0cmtYUmFYMFBRRTlYYmdkbk9kbFh5WTNCZGdwWFI1Z3VoVG9ZN0xiK0N1TkVoZkJ2Y3pFWXRyb3JwUDRDa1ZXTXdIRndlekFYRnhjWEY5ZDFXOWN1bmtzQTREbFZnSC82eUlkLy8rUlR6NTUrN2NjKytJRzFsV1YrTjdkb0tmL3pqcFdEMjViMldkK2Q1ai9EazBFRkwxdVM4QWxiK0JXYUdpdGlubWZxcFlQRUczQmNPd3EyMENsVWJ5ZE9FSDdydnl2NmZmci8vcHRYTDI4MExIejNxVWZ2K3RqbnQrODYwRmY0RGRGdmpiNzZZVXlzZ1VPbUZLeTFxVGEwMjNaNHVsSXc2YW90TFFVM3c2SmJLYmhwenJha1lGaUJWY0dwUmJUU0N5UTRvb1htaUc1aXVCU1BHWTVvWkRVR095bGN1aWlhbW85bFBUUHZHRXowOUhiYkJPMkx0bGNKNVVzbnRnZUQ4Nks1dUxpNHVMam11dUpEZ09kVi9xM3JmLy9aVC9PYnVLWHJpVlBQbldxdDdJVDhXd0h3N2oyZTRVUEQwRmU3SkcyRjM0UWNacVFKdjRHVWFlbmdMT0Y1Vm1DYUpQeldYNy94N2QrdDZiZXE2c0hyMy83ZFc3Ly9QeWZvbDdCalI0UmZVTFpuL1JSTjRBd0JxdVBKcGxKd2E0ZW1wR0JoU2NIMEZOOUVLVmdiQWp4Y0NqWWMwWDV2TSszZmxpNnorVG5aZGtRTDJoR04zbzNCNUF0cGUrWHM1M1dKd2NUeUVReE9hUTltWHpRWEZ4Y1hGOWZXcmJXMU5ROEF2OEluaDJ1OE1nWWdVUk9BUlFYQUtWRlZKT0NONG5tR2Z6QnZZQzI2WWRpUThqSTdmcDA3QWM3STRoemhGekhic3liOFdtZEFXYUFidVZkb3NuWkVDbFljVUVJS2hqNWpxVHVNamp4Y0tYampMZkJMd2ZhY0pDK0ZFanZzVUxUMjVnWWMwU283ekhKRWwyOE0zaUlZN09TN1d4anN0dnYyeHVCWWV6QjYrYUxCZ2pBWEZ4Y1hGOWNjMWZwMy9rZzl2dU1PVDRyeXZFNEE1cm8rNnZqSnArb0hpNU9kcmdJc1ZsYkUwcExmZUR3QWZjZjFQTU1qL0ViQ3J1d0xZeEo5SGZxdHc2Nm9OTnB4aGQvT0F0M1NMVWdwdU1HeVRaR0NBVzJja3V3SVI5TjcvVkl3a3NLeFVNZ1JiZmJyQ3BWRzNiOHgrSHJBWUVsanNIVlczWGJmY1BKelFrb1dDdm1pd1lJd0Z4ZFgrVHIvNUZkZS9mTERWODVzekRMZHR2ZlFMUi83M0s1N1BzS25oWXNydDd3OXdQTnRnZWJhNm5YMHhPUDFnMld2L3prQmZaSFk3Z3M3NXprZzZnSmxQTS9vSmZ3YUx4b1VmcVdNWHpjUEUzNDdZSEhvdC83L0FteHNsdHFPeXJxME4wQi9NZGtpdnpWQ1N0cjdiUk84a2JuZHp1cjF6SEdTYWhWSkJXZkxSbUp0eDBvcnJtdDNWRS8vY2laQmtmdHA3TERVRmpmWDBzNlMvZ2tSVW4wMHBxYm85dldGdW8xZ3JDV2RhVmZTTmg2NFBRT3llNE9GdldQT0FSS3YwajNUM0x5UWt2allTV2NMVXZHODhZejJpbEw5M2NMbmRHcVZoSkFXckpydlM2MlNCeFp6bmhmRTh1YmJJWTBwWjBMMVVFdlFCNnNkbmZBdm9HT3cwSVl3azh0d2NYRnh1ZlQ3d3YvNTZacCtxNm9lVkY5V1QvS1o0ZUpLS1pXQTVhMzE4N2h5bVU4VTE5ajBDMThEOE42YnpFdGM0OUk5d0JGVGhiQlpUbDNoeS9ZSzJlUWdraVBjcTJzLzROQnIyZFFqSGVHMzZaT0Y5SFQ4U3BObENPRzMzWnFkbHFXeHN3em5YY251UDlKcmU1YlNPVXZHTEtjSnBDVWRTdTBLdnhGZ05mbXk2dzl1OTdTYjdpdUVwa3FMenVocUxDbWd2N2xLNXJQNmZTRTZ3YTk5cktSZ1hhMXRoZzVMSWRRZENkRUtycDJkV2dpRGdZVzk4OFIrV281b1lmc1IyZ094dG1DWmRhZjZ2blFhZzRYeldwWWJWenBtYkdoK2JHSGNIcktuSlZsZHhNWnBoNjZOcW1kQ2FqQzlZN0JEejBsQldGZURBMzIvNXBmbDJvT3RzOUV0SlVIZWVES09oUktFM1lPRnN5UzlEQmNYRjFkZHIzNzVZZkxKWFhlekNNekZGUytWZ0ZYVmtTTkhpQ1V1WE9DenhEVmVLZjl6VmJ2ZEJ1REZpVmcxRzRCZHlITWtYRlBZOUxUN0VsdUxoV25aR3B1MWxuOG5OWSt4a1BaT0N4V243S1E2VTNLM2NiekNHVGZzbkJ4cGlzL1M4SVJUSjFhaVUvV2dDNzltbXJRMGoyNGlsVzRwaEU3b2FOMnJ6ZjlOWTdOVWpOQ1pqcldVcXNhWDNDSnJDMEUxcXJiODJNNGJobjZTdTljbHpNL3FrYkpOcS9zU09zcHByOWpzcDlmV1MvYmZhdFRuYTJrT0R4elcwNkExQTdibUhxRDZqZHU5RmJxWm5zUmd1aHNabG4xYUVtRmFpSXhUYXF6czNhdHF6ZGhlVzdVa3p3OXNGN2ZXTEFEcVZJUndWOFl3R0FRR3d6dHBxVDFNK25jYmVZRGtieFpxQzJ5TjV1TGlDcFRTZnEwbjJUN0N4VldtT0FHTGE4dzYrbGlqQUc5YjJrY01RTnE5UnpxRUpreVlkTWxURXBmVW1yVFpBMzB0S0EyWXNhWGZsUzF0WE83MFdHMUxMYjFMNlc3Y29GRG5tbHBLM3pXNENjOVNtcHVWcm5uV1FWL3BmQmZkUWxNQVZ0OFgwbTBXclhXN1dtTzBRcXFrR29jRXE0KzNVNHN0Vm1rU3NLVFNLK3VjNlNiRUN1YVFJV0hrWUxXWXFyN1I2bjR0Qmd0enFyQTlTY2lYeXlWTW1vWGQxdXZPRUlhVDRSd1B5cklpcVVIc1FMMWE5em5TTU5pQjZrNTBEMkt3Nkl2QlF1c1RUc0Zna1lQQjNaSEdNVmdmTm0zZVJBcTJCOVBUZzkyOGFQVURRMktxUnJraVRNTFJEbUVtWVM0dUxpNHVydGtVSjJCeGpWYW5UcittQmlEdEp2T2Y5KzdUTHhGRmE5blZOVVlQcjhJYlhvV3d4SnFDdmg1bWx2NDRMcTlFM0lHeDZNek03cERncU9Bc0phaTJSQk45M1lNMWVtYUovWmVhSjVwbzhGUzd0YUNjMWxQTDlEWHFUb0R4ZjhlWjNlMlFSdDRXOGV0TnhiWFNLWTF6U0RqUnBmTld5ZFlKMzMxRDZEY0ZwTFQ3aDkydHVXKzI5WTdxTGJYV0RSS3ZvMEI2M2ZiR1BzQnVZL1lzS2JUYlB3SmhmMy9jL1c4MnlsTE50d0R4ak5ZYmJHQ210NGZCYVlnRjlhTEdxMGk3aVpmb1JqWjJXT2lTc0w4OUdLSDJZT20yQVcvOEFFdS8ra0llbzd1QXVRVzdsNWhhaG91TDZ3YXNiWHNQSlQ3SnhjWGwxcFV6ejljUHZET1ExdGtDelRWVzZRT1F5QVpnc1hzM3VqWlhUZmoxWmduQjEzL3JMQ2xESGNVK3JpRkloTHJrdHFqUzNRY2JlUXpoMXdZeFMvZ2x0dWFqWHdjZWpVNWtTZE92YXZGVmlWQ2s4Q3V2U2EwbGVNR0NSa25PWDZyQTJCS2dqVmU5NXVGeS9WUktmUnB5clFJTG5Xb045amFQbVRxbldnKzBGTktTM2FVbnlNb1RQV1Y5dG1RUW5tVTR2RXI2TVZqN1dNc0lCay81VFhhaDUvMHhXRzRLQmdzZkJzT045V3JqckVLc2FPQ3V4cGJrTm4xSEhRRHlEb085Skt6dGxRaVRzUFdya0NSaExpNnVHN1Z1L2t1ZlMzeVNpNHVMQXVDbWllRCsrKytubDJBRm1HdTBldlN4cjZuSDdnUmdzYlFrdGkrWjZDdEZpQTVNZVN3aXB3V3Z3RzMwbFpTa0Y0TWdyNlFuRFVkMCs2UWtiTS9hUzlOYnV5YmJzR0lCRUJadW5SbTl3dTgxUjVYVWhkOXJQdHV6dnZ5Q3diU3psWUlsS1FWNzBwV05PR2hwRzlOclRwUDJmUlJKMEZmR3pRL1BCODRYY0IzQllOa1BnMlYvRE1ZWUdDekNHR3lKcGNrWVRNaTJzWFhUTURpY0YxMUFFQlorVkhaSk9Md00xenhjV3IzK2U3OVMvU0ViTmJtNGh0ZXVlejV5OEtkK1hVbSsxWVBxU3g2RHhNVlZwcGgrdWNhc1kwODJDckFuLzNtZnlFSmY2YnNVbHhFM0sveVJ6b2tJZzZCY2JJTngxNDFMZFB4S04velp0N1ZPK0JXUWtyNE1IbGY0VmJzM2FWT0p0WlpYb1dLc3luVUYxL2lsOVptcXhta2gybE1LMWJmcUdiUnJoMlBCYkhRVndnekhnaG1PRlltNWd0TlZhOFZjU1QwcU82Y3hHSUZXWHIzOW1OcUg3dlJvejRhNmZ3UHBXV1QvYlhadnNERzEyZWpUemgwZFBHWjdNQkx6b3VFZElKemNJWXp3REdGajUrM01hMjRTbmpmNlBmVy8vc1ZybHpabWJMenhiMzdqOEYvL2JUYW1jbzNFd0V5OFhGeWpGUHVmdWNhajM1TlBuNzJ3WGo5ZXBScUFzYnBIK3BPdXpBdlA1SGJmU09ld2YrSGU3YjR3Wk5VV3hnYUdYUm5vQy9nMUlHbGRKcGZwK0hXWFgraWVIbFVLaGlzRlMwMEtoaU1GWDB1UWd1RTZvanNwR01NZDBjZ3cwSWNhZ3hOR2RYblZZRjI4RGF2QjhLakJjcWdhYk43QlVtZllWSU1SR0Q3c1VZTkJhYkFlOTNKNDNReGZ0T080Qm5YSVdnMFZoSkZqaldaTmVGUHIzQi8vczVwK3E2b2VWRi95T2VIaTR1TGFTc1VLTU5kbzllaUp6djlNS3NDTGEzdEY2T0lmZHNoUmlta1V5ZTIrRW4zYmZSSDJQSXRFenpQOG5tZm93aStrUVlMRXRUcEdFMzdWYVozVXFxazJHV1pVS1JpTnB0cUpxMExMMEc3bUpLbGh2cVlVYklxM25SNkxidnB2KzQxT3ErekV6L3lNYUxXd2tSRk5hY2oxa3Q1UlNhREdDeU1wSnRyYzRhQWFUR1VkRjFHREFXc3RlTlZneE1PaUNjM1QxV0E5cWM2K2RiV2pqdVZGZHk4bllMeXMrUk5iUUJDR0RlQzAyRXRyd2l3SWMzRnhjWEZ4NWRhVnkzd091RVlxbFlDMWJXbmZqcFdEMW5jWG12em5FcW92K2s3M1JmS0lJeUFuNXhrZzBWZmZTSUx3SzZWMUNpUzh3VHNlOU5YMnNKL3cyM0tHbkVpVjA5MWdzTW0wRFNYVmdXYkN4bUJ0VHJEdE41WWRDTWx1VmpETU9VbkNHSFNVUGllcGVUblJ3YTNLR0E4N29uVlFEOU5zZDR3Sm81S1FQekdZeG1CSk1CczVMU2w5YVBDTU1SakRaaWJadzRvOHNKcnFpNFozRkhDS0w1cmlaNUV5UXhqWjFtaWJoTmthemNYRnhjWEZsVnRuei9BNTRCcmxrM1ZoL1lsVHo5V1A2ZnpuMWQyZVZscy9jNkxJZEYvTWgrY1p2cHhuWVNBdE5lVkkyd3RwVTNvSVpSUENyaHo2YlJLajVLUlpRWWlTVWpDVUlocVRnbXZHNktUZ0d1emFsNWZ0OU44T3JSM3gxak11dUdZWGFseXcyeGpzcDFrVWJBeU9ZckRKcFRMUUdBenYwT0ROdzJDRmZPa1lERzk3TUlYQjhmWmdHM2U3OTlBekN0aVdta3QxQ1BzT05vZUV1VW1ZaTR1TGk0c3JyMWdCNWhxbmpwNTRYRDBtSndBdnJLNG1vQzg4OHV4bzZCdGUwVUZmYUw1Y1kwUEVnRjk0eGdVYmJiWENSbDh2L2RxWDMxbkNiOXU2RzZEbFRwS2QvbWVoQXhFcDdYU3Z2SzVnS2NsaHZETGc1OVlPa3A2VEpJM3B2L0Z4d1prWjBRR3JmYlF4T01WcVQ4UkVvMkJNZEpPYzNDNG5JaHVNdlJ3eG05ZlRHK3lzVlc5WldFblJHQmdXSFpvZUhCK2JCRjlldEgrQWNIaHkwckRoU2VBbVlTNHVMaTR1cmtKMTl1eFo2bG51QWVZYXBZNmZmRW85WG5ZVTRJMEJTRHVYRStZYmhWT0IvQ0hQb1hHdENMWDcwaU9PcUp4bkpPUTgyK3dHY3NCdk8rVklha25QMGlhKzZYLzJIbjVnY2R0S3ZVVDFvUHJTUCtWSVVuTnpXNGJ0MkkvdStCV3lLYlh1WkFOb053VFNWcUFXb28xbWprbkJjRHRtNFplQ1FUbWlUVit4RkFaN05SNWZxYVRnSnVOcWdDTzYyN3VRSXpxdE1SZ3cwcDREVm1wZFQzWlh0SmQzNU5sSVRIU3JRcFpSZzlVSHBUdHhqZ3JxcXNIYUkwMnhwTlJnOUdrUEx1S0xMaWdJRXl2MnNVWmpTSk13V0JQbTR1TGk0cnJoYXVtMmU5YS84MGZWZ3llZWVJTFBCdGZNU2luQU8xWU9MazUyMmdDODRYKzIwRGRkOVVWUDYzSlN1eTlTUGMraGRsOWtlWjVCQ0wrU1RLamV2bkxnejN6MGYzN2pPOGVyeDNzUC85RDJsZjBFK2dJRmhkLzIyNTBGR3NJMGFjZTdncHZuYkVmMEZKa0piQjRlamdVTWRVUzNwSncvS2drcGpjRzk4N0VRbXBZME93eTJQYzhFQmp2R2FScUR0UjJ4VTdLRWpHQXdjdHFEZmI1bzVBZGxaWkJ3MzZ3c2xHc1NaaExtNHVMaW1sVmRPZk5DSFF1Lyt3Yyt5ZFBSTnJjV2QrN3hmdS8wcTN4K3VNYW9KMDQ5cHdZZzBmN250YjNaNkl1eGs2NlMwQmNabm1kZmRCYmhlVGJQZ2pUUGpDNTJ5bTNMQjI2NTk1UFVVQ0gwQ2JzeW9MN3IrRFZPeC9UTENkciszNm1oTmxzS0RvUmpDWkl3azhLeExCcEpHUmVjbmhFOVhtT3dmOFYwREtiYWZaT0hCZy9FWUpDdHYyWVVNNG5CeUJ3ZGpBSHR3Y0c4Nk1LQ01QS3lzakRUSm1FbVlTNHVMcTdaMEM5UENPZml1cEhyVWEwQmVIVXZCY0M3VnB1TE1SZDlVU1RrR1NXVHJyVC90TUt2aEdYYmRGODliOEF2RlhhbHYwaHEyQlhvS1VjSXpnUldBQUpiK0sydm9xc05MRFMwUzhGMFhWUlhzRFJuUVZHU3RESDN5YlJsVDcvcm5YRXNuYnNGbm5IQmpoSGNIUEFyaVNsVnNsOWpjT3JFWU5NTmI3Vy9oaHFEU3cwTlJrNXZzUFQwQm9OdVdwQjZmNnpiWFp3ME9oaTkyNE9ETGI3NmsvUUE0VElkd20zN3NiZEoyRHRHMkF1bVdVM0MzQ2ZNeGNYRk5mUGlDZUZ6VlpPMTd1N0RzV1BIK0lSd3phQ090UTNBaTVPZHhBQ2sxZDFZWFBRazVnU3h3bHFHeGdvUXlVZm9OOTFYSnlpNzNWZmEreVlwN25BRy9NckFnRjlUK0pYK0FiL1MzNzdyNmZnMWo2dWpQRjM0bFhxQ2xVbS9HNzlKV3Y1dnhGaXZGSXc2azZyVEdKT2xZRVFkMFlRVURPWDdWYzNEUFJ6UmxpZloyeGpjM1pZZ0c0TURhYzl3MVdCdG9GR2ZtR2lFMUdCamFEQ0dxY0h1TnVOcXNLbUYwc1pwS2l3YWFqZ3owS3M5R1BIUlIvcVQ5Z0JoOUJDRUU2elJBdTZVTjNyRmxvRUhOUW1ETldFdUxpNHVyaHU2UXZMNzZWZjQvSEFWcjdNWDF0VUVZRkwrRlJ2eXIzUFZscVg2b2xESU05S20rOUlqamtDaHIzdUpPOVR6YktDdmZSVEpVNDdnRlg1bFVQaFZTeTQweE50Q3VTNEZLNnQwdllJdEJjdEVLVmo2TXFYMTgyamVFcENlakdpWm1SSHQzbmlRK2lkQWFtcTJuWFVXaldnTEpLMTVZNktwd3crcHdTQnVDQTFXZzBWa20vN3Zha2VSR1JZTlZ4Q0dybDdLNEMweFhlb2tGRTVTdG5WVmEyMmJTWUl3QXJxdWQvdkdpdm1wMFJoTkUyWlptSXVMaTR2ck9nQmdUUUUrZnZ3NG54Q3VzZXZZazArcnh5dDdpQW5BMHdiZ3Zxb3Zpb1E4d3p0b3hvRUYwYUdaRlhZbEtTc3UrdWM4dy9ZODAvU3JVNTdlOFpzbS9FcXk0OWNjWFNRMDRiZmRmMzBPc0NNRm81RllPeW00bmRJTGxZV1ZLZ1VQQ3NkQ1BDTjZldHhPUm5UeHh1Q0VmQ3dFWXFJOStkSjloZ2IzVW9QVmFkTnZ3NlNyd2Vtamc1R2FrbVcwQjhNL1BSZ0Q4cUpuSmdpUDBTU01vWm93V0JibTR1TGk0cnB1QUZoVGdFK2RPc1VuaEd2c2V2U3hyM1VBN0F4QXd1S2kyTG5UdmlUcm9mb0NzYXdwejBaS0pWM3BMeHB2OTlVdnhxMHRKQXUvS1FOK1FZWmRnUlorcGRteWJIcWVOZUc2RGNHQ05aQm91aDNScGs1MWptaEZMRFVNcTdRckorbUttSk1FYTNGZk9CWmlqbWc5STdybDhYYVRyU002ZlZTU0JVZWlvN0tPOUZ3cnNqL21xanZTekpqbzJXQndGeVdXZ01IdHB5YUd3U2xoMFNaOWltQllORko5MFVnTnlrSmtjdExzU0ZnL0NUTWlZYkJCbW91TGk0dnJPcXFsMis1NSsrVW5HWUM1WmxQSy83eGo1ZUMycFgzV2Q5djg1OTdvaTdGQ25vSENJNDVnZUo3TjE5MDh6elBvS1Vld05UTjltWTFGSnVyY05FZlVTTUVLTjRUeVJsTnprdXExOCtZa1RiK2JPUzRZb0RLaWljYmdUdGtkMkJqY1liQW1XYnNiN0JNVHZVVXdXRmRURFdRS3pVd3l3NkpUMjRPdDZjR0k1a1dqaENBY2lveUdmM2dTa0p3YURkLzhKUDhrNFpJa0RHNFY1dUxpNHVLNjNtcEhDOEFjZ3NVMWRqMXg2cmxUcDErckh4UHlyNTcvWEJ4OWsxWkVwTjEzS1ByQ3lubVdocWlNdEp4blVNSnZjTUF2K2t3NWdrZjRsZFRKV1hEQ2s2WGVJaXhiNS9UMCtXdEdSclNXbmQzbWdFbUw0Slg5MnY0Y2RORmhrc2kvTmpPaUwxLzQ3cXNudi9qcXlkKzZmUDY3VGthMDJ4aU1NbzNCR3BCNGdxQjd4MFFqbnVmbTdRMld4WHFEbXo1ZTJTcm1udDVnOHpVenc2TFJyejA0bmhjTm9rT1lQbStCRHVHTXlPaHVDeUluTlpwNGljaU9OU2VoVEo4d3VGV1lpNHVMaSt0NnE2WGI3bFdQbVlHNVJpMGwvMWExU2s0QTNyT1czK3VMcE5reFNTSFBibjV5TjBCSTh6dzdVMjlTMjMybGF2YzFoVjlwSGtJNDUva2FuZk1zM1lFK0xmdVp5R212Z3VZNldWTEkyVUlyS2Z4MjUzd2lkVU9uTGdXalViM1NwT0RHRVUzTy9tMGMwWmJLbERRdUdKY3Z2UGJOci95M1Y2OWNxQjZmL3RQLzU4OTg5QmUzcnh4b0ZOR29JeHI5RzRQMW5PT3VNYmhNVERTU2hnWmptQm9NM1RRT2VrL3FMelExMkxobDRsT0RveS9hYlRiY0hveUlMeHBVWG5TM20rWnZCQ0ZzWHpRR0M4TFl6Q1poRk5TRXdhM0NYRnhjWEZ6WFNTMi81d2ZWNCtQSGp4ODVjb1RQQ2RkSWRWd2JnT1Fxd0dMbk1oWVhqR3RVQWxrSHFMNElwa01qT2VRWlE2Yjdva0M3TDRvTStBVXAvRXBOU1kwS3YrM3V5Z1Z0czQ0c2FVckJHbFhiVW5BN1MwcjZadjlHcEdENHhnWExNNmVPMWZSYlZmV2crdEkrREQxdFRKbTNwUlMydHA0M01WaGZTQlNPaWM2ODhkTlBEZGJ2OUpCcXNLbGoxMnF3K3FRSWVyRllXRFNzc0doSnFNRkFVQkNXa2J4b3pGQVFoajkwR25acWRLRkp3b00xWWUxMFpjVkhnMlZoTGk0dUxxNnRVRXUzM2JPd1kzZjkrT2pSbzN4Q3VNYXJveWNlYjI2NzBQN25YZU9xdnI1MGFKc1BEYzh6RWZMc09GNzlOS0Z6V2EySVNta3NKajBBbFp2em5ETGdGMmJIYjB0azdnU2laT0ZYYlhGaDQ5bHJzc3VSdHJGZWV1Y2tLUXh1K2RDUTJrczVvb21yZDFLN0owWWxOUmlzZnpBQ0JtWjcrclBVY0UvQ2RPZHFJNDVJREpiemk4RzBMMXJIcytiSEJqUkdabUV3S09xVHZjY21nY1pnU2RLZFBUa3BUc0orUmszYmduZCswaXhKR1BtRGxQd0dhWkdBelZ4Y1hGeGNYRE91MVhzK1VqOTQ0b2tuT0FxTGEyejZoYThCdVBFL2o0Kys5QVcvS2RxMVlpUUk5SVd4SFhyazZqVnQwbTM2aUtOUlBjK3k4enhUd3E5bnlwRWlaT2tLdjNLS3ZkWGZDOXFScDBqQnNwT0NIVmh2dm1YM1RDZU1DNFkxV2twYlJaSjJUbzhWdmw5ak1LeVp2U1FHU3h1RDVSeGlzSXhqTUFJWWJQSnE0dWhnNlFLU0YzRzk3Y0gySVpCUHl0UUJ3c2ljSVF4U0VPNUp3b1FnRFA4azRYa2dZYkFzek1YRnhjVzFsV3JYM1IvdEtJVkZZSzV4U3ZtZnE5cnROZ0F2TG9wZHUwWkRYK1NqTDdRMlhBSm5ndjNEeG5UZjlIWmZCOHF1RVdGWEdzZkcwZGMzNEpjVWZsdjBsWVlOV2JwblR5TzZaZ3NMWGVLVVR3cnVGNDVsTmsrbk82SnRjcWFwZ05MWkpleDNxQ0gyZW0rbGdiUzJJOXFYajlXZHdSZ0dZdzR3R0RrWUhFdkpra1ZUc2diNW9qRmNFRWEySUd4enU4QmdFcGFGU0ZpV0llRitCbW1XaGJtNHVMaTROaHVBZjBTNW9ELy8rYy96Q2VFYW8xUUMxcmFsZmNRQXBGMnJZNkt2OUtJdmZPZ3JRK2libEhUVjVqeGJnaUl0RStvczVxQ3ZSdW1PQ1ZlajMwVFBNNUxEcnFSMEplNW1pOWYwSHR0ckM3SWpUN1VIMEd6UFhrZDBYYm9VTEkxbGlqaWlQVmZ6WHJ1NS9ybVJGZ1piamNGK0RKWVpNZEhTK2JUTklRWVRybTkzRmZpd1djZGdGR2dQUnR3WExTa01kbjRSbEJHRWs2M1JrRmxOd21PU01FSWtMRkpJZUlCQkdpd0xjM0Z4Y1hITnZzeC9hNVFMK3RTcFV5d0NjeFd2VTZkZmUrTFVjL1hqM1dUKzgrNDltNE8rTW9DKzhJWTgrOXA5NVJqdHZoMTFsdkU4TytxcHgvTU1pL04xejNNSDZ0TXZGalFlTlIzYmhpTWFLZUZZU1k1bzZYRkVFNkZuYnRNcWRIYjMzSUZJeThlU2FmbFlNSTI0MGpzdEtZYkIyRXdNQmlMKzVHUU1ObEt5TU1BWExSSHlSWVBPeEFvSFpjRVZoR1dDSUl5UnJORndZWFUySkF4RndzVmw0YXh1WVlaaExpNHVMcTZpMEt2L3U3UC9oMzlPTGZYd3d3OXYvTFcyajA4WVY2blNCeUNSRGNDTi8za1c2SXRrOUpVVUNpR2FkQVVDZlllMCs4cU1kdDk4ejNNci9NcVVzQ3VMbU5RaExTaHdsUm9aTjh0ZGt4NHBXSkxoV0VtT2FIZ2MwWlF2M0FZejR6NEJnY0UwQkZwQ3JqY2Y2MW93SHl1SXdlMW4wWS9CY3M0d0dLa1lUS1ZreGR1RGdYNTUwY0lDdkNSQjJOOGhqREd5c3RDelNYaGNFaTdXS296QjNjSU13MXhjWEZ4Y1kwQ3YvZy9UdHJWRGFoN1NFMDg4OGNnamoyRGJkajU1WEtYcTBjZStwaDY3RTRERjl1MWkyN1pab2EvMG9pOEdvRzlpMGxXZmRsL0FrL2NrRVl5R3p2UThTNy9uMlNmOHFnTmMwSVlGZFFPTVRiSnl3N0dnUzhIak9xS3BYNDMySGtZYmcwUDVXRmt4MFNDbkpla1lUQVN2bGNSZzJRZURvMkhSTWpFc0dvWGJnOTJnTE5sREVFYmE1S1RpMXVpNUltR1VKT0Zoc2pDNFlaaUxpNHVMYXdUb3RaYS81Uy8rdkhyaXM1Lzk3TmtMRi9oRWNwV3FZMDgyQ2pDZC83eDdqM2J0T2o3NldoaGxzd1k1M3dnNUljL3hwS3VjZHQrZzhFdEdRNWYxUEJ2Qzc3VU9WMlVIdkF1YTQ3bkxBZk5Md1hERHNZbzdvaU1ZN0prWUhHb01EdVZqSmNkRSs2Y2w2UnhKRHcwdWhzSG9nOEZJdzJEa2hVVWp0ejFZa2lBVUNzb1NZVnEydVZLU3pjK2lYMVlXa3ZwN3FSTXlVeEx1SFpvMWlpeWNBc056TEF2di9vRlBxbFNWNmtIMUpWOEJjSEZ4Y2MwVjlPckxMOTEyejU3MkYvWFpzMmQvNXJQLzlRejIrdWlKeC9jKzlGK0tILy9VdzEva3h1UHJsMzVQUG4zMnducjllSlZxQUo3Nm41MnI2L0hRTnpyYWQyREljMkxTVmZsMlg0emllVFlhWm1GcXZRMGZMM1FIMk9HaUZpU3RZM0JhT0JaaWptakVITkV3UmlVUmlXSDB4T0JBWTNBc0h5c3BKaHFSYVVuNnZZR1pZN0JNdzJDWmo4Rlo3Y0hCNmNGQWJsQVdMUWpMZkVFNGxKWFZ3eG9OVHd1dTlEUTJGeUpoYXA0d1RkMys3UnUvdm92THdvZ292WE1Pdzl2MkhqcjgxMzk3LzMveTJlcFA5YUQ2a2k4Q3VMaTR1T1lLZXExL1UyNzVTeisvMk42NFBIcjA2TS84NnErUHV2c1Y5SDdpRno5Zm85R3ZmUGwzK1AyOFh1djRrNUVHNElYVjNWc0hmUU1oejhoTHVpclU3a3Q0bmlrcHRJam5XWFppcmRSWmJUTDlsbWhQTTFyVUZ0TXZoVkNFS1lUUythcWRGVk10R3ZXUzlVbXR6K3JHR3RPbm1wVkVCOFFiU3pRYmtSdmYyTmk4VkY5ckc2blhiSUNiL0cwNFhicmV0TnFSZW1mYit4c2RnTmU3MFRLd2dFREh3L1VydHI3NmJqK2FaV3MyRU0yV3UrTkZReHY2c1hmcjFCdVcybEwxYVFTY1kxUzdibnhYUCtmNjNRbTFHL3FCV0x1a05xNi9aVUlZVU5Tc0xydC9RZlJWdWsrcVVKOEc3UlZoM0hUUWxtK092UG5BdHZ0cTdibTlaWVJlV2pzb0lmV252WXNaTjB6MEExU2ZicUc5NWRyUGVIZm1uUk11WU55OU1jK25mZzY3WFhET0NZeG81cFR0Nkc4KzlWMVQxRWJvNWF5N1NOMUpNMGhZKzc0SVhiaDA2MWluek5XcTdZWGRDeGRqWGV0blhZak5ZdUNidEdBVkxpNHVMcTRDME92Ly9aKzRpbS9kaW40UC9kWC83ZG4vNHlmckx4ODU5dFg3RHQveGN4Lzd5QmpIVWRGMXRYMzE1ZjJIYitmMzlucXRvMjBEOExhbGZUdFdEdHIwdStGL2x2b1ZqUGVqYTNjbXVsZGw5aXlicHJWUU44d1NMMlJHSFlIY3JCNXpwVi9HV2h1Unh2V3dkY1dyME5mZVlSMWlFVy8zMVY1UlYzMnRLMEJEOVRVOHo4U0o2bFRmN3I1QS9mUTE0Nmk2bFEzdGRzRWREMFhqOGdpT2FHa05iaVoxWGU4ZHdXdlNtaGhzNjU4cCtWaittR2hFcHlYQk16UllhbDdkR2F2Qm52dEpwUGFZbFpLVjNoNGM5MFdEdHZpbUIyVU42QkR1blpXRjRrM0NHS0FKbDIwVjdpRUxvNlJIR2h5Z3hjWEZ4WFg5UVcrVzBvditFd2VXRC84NW94bjRrZDhzcmdPZnZiRCtpVi84dkU2L0QzN3cvVi82VzUvaDkvbTZyT3J0VmdPUTZQem5sUlVpWEdZV3FpK1NSdnNtelRmS0RIbEd6blJmdXQyWEdIRWtxVGhrMGUxR211ZjVtdC96M0lWU1djN2xEUVc0dmR0Z2FvTlRGVlcyVWpDbUtseDlQYjdRQXVwVXBPMTB3U2syQ3MxbzNYeExUSVhoVnNlZWJsaVlOeU5FcTBzUnVtNm9HYmltVmRHSVZrS2E0bXFqRmJjZkp5VUZ3MUdEbFpDckZrYWpCc3RHRG04NGxsQ0RsYWlMT1ZLRGZhdmJnckN6T3ZHSytsNTE3eThoQ0p2TGkxWldONzRYMnJMNWRvY0VZZlBNK2hjekpWTktFRFkrRTVZZ3JOMW9OalhiSkUzWUZscDdhOExkb3BvbUhIZ2grdVV3SjdJdzhwWGhoRlc0dUxpNHVPWUNldjIvenhOWGlhenJXWDdmZi9nemwxNTU4czAvL3VmMWx4V3BWZ0R6aFovOWRCR1J0c0todi9BTGYwOFJVVlUvOTdHUC9QSkRQOFZ2K1BWYVIwODhyaDdURTRBckFFNVNmUWx4MVY2Z24rcnIzYXpVMXhBdytteTFqZER5TlQzYVYrZFBmWmZEcWk5Y3JSaGR1Njk5bENiNjZ1dmJTVmVnUnh4Qm4rdlVIYU1yL0tydFRFd2JiUXVFbmZXNUJnZmRFWDJ0NFVDdkk3cGpVUVZLeWhGTlkzRHRpQVk2WHBMd05EWFd1VlhDZzhFT1ZVcWwvVnVPYUJ2NDV3eURMWDkxR2daRE4wTG5ZekFzTDNFWVZnZjdvcjJVaTZSWDE3RE10RVk3aXlWWW82VXdYZHB6Uk1MRXBveVB2L3RDeURWSVUzdnJnMkVoWk9LbERNTXdGeGNYMXcxR3ZMT0VYcXNPUHZpTGkwdTczL2lqTDlSZlZyejZBMy9yNXg4Njh1SFAvY1FuRGgvWVg1QitLNjZ1TnN0di9uVmN4MDgrcFI0dk93cnd4Z0NrSFR2b1QrWThvaStNWHQ4VTlBV0krVVo5MFZmZjZVNzFwZEFYNlo1bjYyeWxlWjZ0VXpmUkRsaFQrVFJoc0ZaanRTYk1XaGx1KzJ4cnlWclVpd3R0TzBaanNOQjJoMndNYnNEVWJnd0d5Y0JUUEJiMlo2NTVEUjhHazQzQkZBWWJWL2dFQmplSFB5NEdVNXYxWWJCT2tuSUFCZ1A5MjROTkhIVFpWUW5DVnVOMWtISXpCZUgySm9WdnNRQUowNEl3WWszQ0p1WkpCTFhjR0FucmNuVWlDUnYzSHlLdHd1Z3ZDNXR2YnZjd3pKOWp3akRtcVcyWWk0dUw2MGFHM2lIRU94QjZoYm5rclgveGY5aHgyOTJ2L3ZiL2RQWFN1ZnFaUjQ1OXRmcHovK0hiSC96UUJ6Nyt3ZmYzRUlRLys4aHZNdjNlYUtVVTRCMHJCeGNuTysxUDNmSktwTkYzVTlBWHV1R1pSRjhLQ09Qb0M2TngxOFA4Uk1penliK0JkbC9ZSTQ0SWhJYmU4U3poak1LMWNwNHB6bmRPM1VRVFZEVUNDVGlpbFpxblU2V0J3ZHBWdU9HSUZzMVRIZTNLRmlsZFI3U3dqOEU2MGJKZXp3MHVhbEtzREF5TzVHTkJUd0p6SUxCNTR4VER0VGNITmdXRDNRVXM1cVE0TmtEUm9aUXNSSHpSRm1IR2ZkSDE4YmUzS29vTHdxbFpXU1lKbTRjWkpHSERUZUNTcWlEWkxKbUVkYUNVSXBPRTZkQ3NpRUVhaWJLd2g2aFRQZElEWVJnc0RuTnhjWEhORWZGdUx2UmEvL3BZL3hLczNmZFhkdHh5OTZ0Zitqc1hYdjBUOVoyS1lLcy92L0JiWDFwYldUNXl6MTBQM0h2M2tYdnZTb0ZoSy9XSzZmZEdxT3Fqb2dZZzBmN24zYXRlOVBYbVVjRlNLT2NNZldIUE4zTFJGMzJUcnRETkFESnZBRmllWjR1UXkzdWVyYk0zYVhiQ1ZnTDlqbWg0TXFMUk5nWUxmUllPN1loT2Jnd1c5SzlJSVlJWVhOTnFma3kwdnNNT0JpdnVId09ETmROM0dJTTlhYzhrY3hMdHdRNUZROC8zSHRnZWpKZ3ZHcVoxZVRhQ01JWllvN05KMkxKRzl5Tmh6V2RNa0RCU1c0VVJOMGlqakN4Y0RvYkI0akFYRjllYzFlNGYrT1FiLytZM3JrMUZ4UnRsUW5nUG1YZFRvQmZ1Z0VEc3VQWHVPLzdLcjczNWxWLzc3dlAvNnNyYmIramZyc0RtNkluSGEzM3Y4SUg5RlFiWE1FeDZwQi8rNGxHbTN4dXdqcDNzQmlDdDdxVUFlSGxsRVBwMlRycjVRMTk0R25kN29TOTZ0L3ZhMTl3Vyt2YjBQRnZIT0tIWUNYMGMwYW94ZU9wUHpocVZCRTlqc0QyRTF2cGt4REI0K2tKYU8vRWdETmFuSlpYRVlPWGJGVmtZUE9PVUxJc1BveUNhNUlzdUt3aVBZbzNXLzlGVkVxL3hVNW5ZSkp4SXdnYWZrekJQM2xid2NqVmxrTTZRaFExWDlreGdHSU9kMG9pS3c4ekRYRnhjT1ZWUENELzN4LytzaHVIcmMwTDRDTVE3UytpMTYrWmIxKzc5c2JVREg3cHc3bHRudi92WVcyZStjZldkaTlZaXAwNi9WaHVrTVIxbzFNRHdQWGV0clN4ajZwMytoZC82MG5ENnZiaSt2bjFwYVhGeHNkUWJkZm50eTlWL3R5OXQ1eC9Na2VyUkU4MEFwTVhKVG1JQTBzb0tGaGFvOXRSNVFsOVkrdWRvNkl0STBsV0JkbCtnbE9mWk92RVRRLzcxU1hBcGp1ajB4dURPK2h0cERLWit0VWxRUUJ2QjRDNG1PaE9EUTBPRHkyQ3dpakwyWTdDNXowUENvakc4UFJnRjhxSXhoaUNNd3RabzR2bXVNNzEvY0RSUzV3QVhETTFDWDFtWWRtWFBKd3dqV1J4bUh1Ymk0c3BuNE90dFFuZy9ZM00vNk0yWlp0Y2ZlcTEvK2Yvc2ZmajkxMWQyMzFtUHNibDA0Y1VLaHFzL2I3M3hEWGV0MmlQOUsxLytTZzNERDM3b0E3L3k1ZDlSMy8yNWozMmtCLzFldlhyMW0wLzlhUVhBMWVNNzN2dWVmZnR2R3Y2bWZmUHBQejEvN3EzcXdXMEgzM1hyd1hmeEQyYnhPbnRoWFNuQXkrUUFwRnIrVFVGZmpjaTJFUHBxYkRrczZRcHAwMzJSM081TGVaNmx6U2toejdOMUxCT2FuY0tPYU8xWGxPNklicC9PR3BVVWF3d21mZ2RLMzl3ajJVclRNUXgycGlXWkdPeVpsalJiREs3dkVkZ3dPUXlEa1phU2hlRys2QjVCV1RNV2hKSGZKQXd5TG11elNCaTlETklGWk9FWnd6QjZPYVdaaDdtNHVMZzJpM2huQzcyd3g0Wk12NWhNOE1FZnhCLytRZjNVanBXRDFaK2JibnVnZWx4aDhQcTViNTE3NHhzVkZmdGdXSDM1NEFmZjMyL2kwYlBQZktlbTM2cGVlUGE1NFFCOC9xMjNhdnF0NnVVWFh6cHc2eTBGaFdXdXVvNDkyZm1mNlFiZzFWMHVxcGtmK0N6MGRYQzNHUHJxMXppam9TOTZKbDFoYUxzdmVuaWVyY2NUNHlrYW5HQTdvZ0ZxVkZJVFFPVWJsWVMweG1DRndWSk5CZlpkc1ZLQnoxSTExcm94MFlGcFNTWUdCNGNHRjhGZ0s1aUt3bUNJYmtLUERsZTlNUmdwS1ZrbzVJdEdSbEFXZWd2Q0pyYlJndkNRSm1FWFJCM3NSemc0bWlKaEU1NFJucUtFekZaaGpDOEx6eGlHMFVzY1JyWlptbm1ZaTR1TGlUZVJYWWQ2bXdNTEQ0RmVxMVozNDk3N2NQTHIxdE8xTEh6ZzBJOWVmZWZpK2xRV3J2NlFNSHovNGR1LzhMT2Y3bkh1M3p4enR2b3o2dHRiMGZXdTFWWCttSmN0ZlFEU2lxc0FMeTZLcFIyV3NwcUJ2cEpFVmdURjVQSFJGejNtRzZGdjBoV1NwdnVDSEhFRXd2TWN2bmZnUVY4RndOSytSczl6UkN0MGxnaU9Tb28wQm9QT3gzTGVqTnJxckdLaTZjQm4yaEdOMkxTa2RnR1lORDRDQnNNWlBweUF3WUJsSXplWUZzR1lLL0lOSGRnZURBd0t5a0thSU54OW9raFdMR0NOaHJkSkdDbHhXYTdHR3lGaFpNMFRSa0pvVmkrRE5ISms0Vm5CY0dUT01FWVVoMU41bUpHWWk0dnJlc0xkbVJEdjdLRFhldnBkQnplazRKTi9nbmV1dUFzdVRuYXU3dnUrMWFuUWQrWHROeW9NZnYzbDQ0cUUxMWFXdi9TM1AxTzNCT2ZXQzg4OXIzKzViOEFnWWcyK0RMMzM0Z1VHNFBKMTlMRnVBTksycFgzV2R4ZDJyZWFncjNTQmRHdWhMNGo1Um5IMFJWTFNGVVpvOTBYWTgyejlqbGhvMXpmWDhSS3piSFpDYXVkVTZ1czBzclZVeDduQjd1MXRnR3RTZHUrZ2ZxaFN2VjN0K3JKdUIxNTc5MyswdUszNTdWTTlXRHYwSDZQWmhtenMxdXBqMHF3dDlkc1BzbnAxOXhRMFMwdHB2bnA3QkxKOXN1bEtscFlLYnh5NzFENkl6V0Z2cU16dHU5OGNrYkViK2puc2pyaDl4ZTRsOU9WRXU3L3VTUXR0MmZlR3VrZWtyNkp2WHkydm54ejM1OHIzb3QyUG1iWnYzWUdiSVdmMnh0V3gxM2NqcEVKbkVkOSs4ajUwTDJGK3lEMUx3dmpLZUY3VW4wbFpONyszKzlrdEplMGZOT2VRQlgxMC9oMXo5cmsrRVBOd3RLMGxiTkRjZVJsOFVmdDBkSy91dlNxSmJXMTZEcHMvaWRkdHpxRUp3SDRMQW12SlVDOFp2YW0wMWJtNHVMakdKVjduRjFIOHQxL3lMekh2cG5KKyt3bnRWN3B6TVViK1l5cEo2TlgrWGZNczZkbmF4czdmZkl2NEQvN2NoaG9jcklwMlZuYmZxYWRHZitGblAzMjRGN2krOGRycmw5OStXMzI1YzNuNTBPM3ZIdjZHVjl2UnY3eDY5U3IvRUpTdFU2ZGZxLzdVajFlb0J1QUZkVGRFSndVcGRWdXV3U1p3UHBQNkJiTU9GTWJGODdXV1VOcStRR2tBZ00wTzFpdloySExOUU1wdXQ5c2Q5NENTUmlQYWhYUkRjUjJieUJiS0xQSVM5blJmZmJFT0hnM2g5NXJPR3RlNncrdkFqWVJIOGh6NnFiWmRhOUxlcjRBaGRpSHFpRTRkbFFTM01aaWNHT3pKeDlxMlk5OTcvL3pQbjMzaDMySUt3NVBsZldxWDZwaG8wZTZJYis1UmJHaXdSdzJXVWpzWmc5VGc5bFRWUHhYQ0cra3NUVk94N0U2a1dpNXpkREF5MjRNeHlCZnRicUc4SUl3KzFtaU0zQ1NNa0NaTTl3a2pORThZcENhTW1SaWtrZUNSOW93RnRqYWliUVV5Zkl2ZXB6T2JESnpubEVaZnN6UkNBaTlMeEZ4Y1hKdUd1d20vbEhKWFQ5cFVLWmtYWXlxOWtBajh1N1JydC9oekg4WXozNVRQblNLbDRMcGUvTmIvcGNLaWYrNWpIM253ZysvdjkxNjkvT0pMK3BlSDduaDNxVS9COXFVbGhkYnJiWU14VjZsUzhtOVZxMVFEc05pNWMvQlFYOFJWWDlsZFBaVldmV0hvdC9RODdmQjhJL1FKZWNhUXBDc01iL2QxVUdXakpnVE5Kam1pRVJ5VnBQMytjaHVEa1plUHRXM252Z1B2Kzg5OE1kSFRGdG5HS0N1NzYvNWNESGFzMUlVd3VNSHJNQVlidHdCMGNPM3dJR0YwOFBEMllBejJSWU5PbkViYUNOK1VEbUh0L2ZWblpTSEhHajBqRWdhUU1VOFlpYUZaeUpxbGhIaHVGcUllYWZQM2U5d2piWkZyaGswYUE1elNTREpMSThVdmpWVExOQ014RnhmWFhPRHVESWtYZ1FncmtJNmhXVUd2KzhWNzd4UzMzNEhuVHNubm5uVXgrUFdYajE4NDk2MzY4ZUVEK3ovMzQ1L285OWE5ZWVhc0x2L3UycjFhMEtpOGZXbTcyamdyd01VcjNBQXNkdXdRMjdZTmlIZjJvSzh4RFdodTBCZUY1aHVoYjlJVk1HVEVrZk1sd2N3VEU0c2Ria0ZDUm5SdVkvRGdmQ3pvTWRIYU4yd016cG1XTkYyaklBWmIvelJrWXJEeFdQdlV1YU9EZlNsWktORWVEREl2MnRtQ0w4T3ByQ0RzSEpHV2xZVStxZEd6SmVIdXpZTDdZMmg4d01Ja2pHaXJzRDlCT2k0THA5RjE3NFpoWlBVTW81dzRqQ1I5R0tVbFlrWmlMaTZ1V2VEdWpJa1haV1RlV1VDdmRaaUxFN3puVHZHZU8zSG1EWng5UTM3M3V6aC9iZ01tMzdsNCtvVi9wUmI4d3M5K3VsL3JiMVZuemV5cjIzaFkwZGFwb3ljYUJaaVVmeGM2K1hjSStoS0VHVWRmZjlSVE52cVNQN3haNkl0Q0ljK3cyMzI5U1ZjWTB1N3JaZWFKQTdSbTJqT0p3WEZIZEVNK2lpRERFNE96OHJGZ3hrUVRHRHpOZ3RabXRzNFFnNkdMNFRLRXdRMzdwMk53WmtyV2lMNW9iSTRnak5HczBUNGdMMHpDTUtZb29XZDhOUG9acEpFbUM2T0lSem9BdzhnSjBBTFN0bW5wRDdQbVlVWmlMaTZ1K2NQZGdzU0xnakp2S3F3bVFLL3ZhampsYksvdHc5bytjZmhPdkhORm5ubmpsWC8xUCtybTV5UDMzdFg3N1gzenpCbjFlUHZTRXVkVWJaVlM0My9oYVFBV3UzYWxvVy9pWkNNRGZZV05vVDcwelpyck93aDlFUjN0aTRTUVo2QnYwaFdTcHZzaTNmUHNtd01jRUhXdGEvR3N4bUNRRTRNVkNSZ1kzRFlHNThWRUV4amNZTkJtWURBMEVUdU13V2pWY1lYQjhHbTJHUmpjZ21nUWc0ZjdvbnNNRUVhNklHeFNwYnExbEdpTmJ1MEc1dTJvTEJJbXBkVGhKR3gvb2E0bmxDcmNPejRhZzJUaEVoN3BvakNjMXphODZUdzhIaEl6RlhOeE1lc094OTNpeElzaE1tOUI2UFZzeW5mYXlSVW5rL1gxVTJlZk8xNS9OY1Q4ak9tb1h0Mlp2R2Z2R3Y4UWJKVjY5TVRYMUdOaUF2REN3c0x5TXJMaW5iM29LMkdiLzZTMGw1d2o5RVVmOUVXODNaZENYemdXYUZEWHg1bm9TOTU5VUJib0tNMzJhd3dHT1RFNEpSOUxhSnZTTUZnMGJiTHR5L2JBWUlNSkMySnd1ejhVQnV0bVpoOEdnMnJpcFVjSG8rTkpNeVVMUGR1RDBjc1huUnVVaFRSQkdJT3MwVnI2V0VLVGNGcGNGalVpdUQ4Snc5c3FySThIVGczTnduQlpHQVU4MG40WTl2WU1vMURiY0JZUHB6UVBKL1B3ZUVqTVZNekZkWDJ3N25pNGk2SUNieWJ4b295M3VTRDBlbzQ2c2h2VEoxNzlnMTlWVDN6dUp6N1IyL3lNNldnaS9jczFCdUN0VTBvQjNyYTBqeGlBTktYZjRSbFhKdnFhWEdtc0xxbFgyV1QwUmEvNVJ1aVpkSVdDN2I3a2twT1lxSnZnaUlaZlEwYTVmQ3d6SmpvTGc5dWh3ZDd4djRNd1dPblltaEU3T1BMWHh1Qm15RkdId1RsaDBRNEI5Mm9QUnJJZ1RJMy85VzBCSXdqQzZHZU5SbXBjVnZ0am5VRExQVWdZaFVLelVFZ1dUcG90UEJDR3ZRRmE2Tk0ySEJlSHd6enNURmZxb3crUGo4Uk14VnhjTndUckZzSGRlU1Rld2RDYktocDdwaDhIdU5mODFybC8vN3NYbm4ycy91TEl2WGM5ZE9URFF6NGFiMSsrckgvSi91ZXRVcWRPdi9iRXFlZnF4N1QvZWVkT1NVTnBUcnp6dU9nckhZeE5SbDl6eGRtaEw4b21YZVd0T1BFQ0Q2M0ZaVFlHKy9PeDZwbWxDT2RqeFRCWUdNMmVtNFRCMmpJZUROWkl6OGJnZHBCVG01VFV1WnV6dzZJeHFEMDQ2b3ZHYkFSaFVGcjBFR3MwM1NRTVgxeld1Q1FNeXdVZERjM3FQdG41Qm1uRVpXSDRRNlJuQU1OOW5OSUo0akQ2NjhPSlBMeEpTTnlIaWhtTXViaEdBTjJ4V1hjVTNJMnVtRXU4U0RaQys3ZWNIV1NGVEljejhZVHhyWmYvOWQ5WGo0ZVluK3U2cUkwbXNzYjJGcW1yNzNEeTh5aWxOd0R2SmdjZzdWb1poTDZoakt1dGhMNndRcDZsOUoyQklQcGlaa2xYZ1JVbkhyd1pyekc0bzhFK01kSGVhVW56ak1IMmdVZEhCM2Z1NXFJcFdZajdvdlB6b2xGV0VEWS9YUVdzMFJhZ09rM0NTR2tBVGlCaDVQUUpJelUwQzFTck1HaURORkp5czVBbEM0OEt3NGx0dzBnV2gwZmc0VlRMTkVKSjBZT1F1QzhWTXhoemNXMGE2TTRCN281QnZDZ3U4ODRPZXVtTm4vbVRvNWZmZkxGKy9PQ1JIenB5Ly9manl1VlNINnZGeVdMeGo2b08yS3NzTDVjcmZRRFNzanNBYWRzMk1kbm1DM1lhRk84TWxFVGZyT0ZHRnZxcTF5cy8zMmh3eURPR3R2dVNYMDRHMFd4R1kzQWdIeXMxSmhyRXRDUXZCa3Yxcm8rQ3dkNFYwekFZcWFPRGtaS1NsZFFlN0V3UEJ1V0xSbDVlTkFZTHd0Ym5oQlNFa1dPTmpwT3dKeTRMc1FiZ01BbG5KV1pSQzBkRHM3cmZPZlFzSlVSa1lTUjJDODhLaHBIV05veGtjVGpKTEozSHd6MHQwekdVRlNuWG9zT291RDhZTXh0ejNYaVVPelBRamIvUWVMZzdVK0tkWCtqVnQvejZpWCtzbnZ2bEwvd2pIRDZNczIvZzlLdDQ2WG1jZm1YZVBzSTYvWEtWTFRVQWFXWDNuWXVUbmZaSGJtV2xUaTd1MGVoN0k2SXZlb1U4WThSMlg1S1pKNXFvMnpmbXFsUStWb3RNclJwcXgwUlQwNUpJRE5hbUpZMkZ3VXA4TFlqQjJxLzN2SlFzdmMwWUdkT0RrZVdMeGlpQ3NQZDJDWHBhbytGdkVrWWtMZ3ZoNE9nU0pOeTlEUzZBV2RxdlB6UkxWeWt6WkdHa2RRdlBEb1l4MUNrZHZyQ1M1bWFLOFBBUWlSZ1J6M09HVUl4QnVxNklYaDR6RzNOZGo0ZzdpSExIWU4wQnVJdG9CeS85RzZRbzhhS2Z6QXZraml5S1ltME85S3A5dS9EY2lZdXZOc2JYaHg1NjZIQkZ2MVZOeHlQaGZYZHZQTjRnNGVjMi9sdFJjWDVkZnZ0eTJRLzR4ZldMK3BlN2RyTUNYS2FlT1BYYzJUYTlqSndBTEhidUNIaDlmZWhyVGpZS3hEdjcwRmQ2S001TXE5cFM2SXZlSWMrOTBkZS80a1NEblhTYVRXNE1qcTdvNW1PaHg3U2tMdDZaSGhvOE93dzJHVFVQZzcwemsvSlNzZ1pORHk0U2xJV1FJQXlFWmdpamhEVWFuaVpoeE9PeUJwR3dEZGgwSXJRVHM5eXZWWmc0RlY1WkdCa2gwck9EWWZSeFNvZkU0U3dlVHZWTE94dU5TY1JEa1JnUm9YZzhNQjdLeGt6SVhIT0F1QVVvdHhlWGpzcTZTYmlMUGdMdk1PTEZpREp2VWVnbDM2RFRtdno3cVU5OWlsajl3QzBiZjZxNmNua0RnMCsvc3FFTVh6Z2ZPRDA3bDVmUG4zdXJCZUMzcjE2OXVyaFl6QWo5VnJ0bDlWcjhLNkZJUGRyS3YvQWtZQzNzM0JsRjMrU01LeHA5cFF0cFpkSFhTbmd1aTc1QS9ud2p6Q2JwS3NETWsyeWFUVzhNeHNDWWFIZGFVcytod2FOak1LYnptVHdEaDVNd0dMNlpTWFJLVm1aN3NIRXBUL2lpM2J6b3JLQXM1QWpDVVZYWmE0MkdOelVhbnZiZFBrM0NBMGdZU05Xb1RVcnMweW9NZjRLMEY0WmpzdkQ0TUd6THNQbE82V0k4bk5vL0hObVo4a2lNZURoV25vTzZCQmhIcis5bDFsVStRekxYQUQ0VW0vR2lzMlRkdnJpYlJMd2lsNU43RWk4R2U1dEhnVjcxM2N0dnZuVHUzLzllL2ZqSXRFSW5ZZHQydk92ZEczL1c5dUhFdndrc3VHeENhUVhEQlVjQnYzbm1qRTYvQmRINkJxK2pqelVUZ0Jjbk8zZXNITFEvbGhYOUxnaERSTFd1L3pGMnhsVlI5TTJOdVJxS3ZpZzMzd2hsSTdJbWNBWVREWTI1eWxyUkd4TnQ3ZFFtWXJCQnN6UUdxenRBQ29QMTlsb2JnK0VaSFl4b1NsYmY5bUJFZk5GUlFaZ015Z0lHQzhMSXNVWmpWazNDc3lGaHhPT2prVHRMQ2JaSG1oNm50R2t3SE1wd1RuUktJOWtzUFl5SFV5M1QvWkFZSllSaVJCelVnOEE0RTFOVEZzMkRaT2JrRzQ5c3kvUHRNQllWSTI5Zis2ZGdMTnlscUhLT2lCY3A0NExMUWE5ZVo3NXhWRDJtNVYrMzFzL2ppUlBoUmF5NVI5OTk5ZFZTQVB6bW1iTlhyM1lSME94L0xsVm5MNnlyQVVpcmV3bi84OExLc29Xc00yejBoVzR1cHRGWFN2dmlwd1Q2bWtzbW9HOTB0QzhLaGp4amFFU1dyQUZZUFNOUU11YXFmejRXeUdsSm00ZkJoS2dieDJDVnRHU2xUSVZHQnlPYWtoVnNEeDd1aSs2Q3NneFM4Z1ZscFF2QzhNOFFkZ1ZoNUZpak1hQkp1QWdKSTJCN1RpTmhCRnFGTVZ3V2RzY3BaY013NWNndEFNTTluZEpJTmtzUDRtRTM3U3BWSWs1QllwUVFpcEdVajlVVGpLTVg1ZmwwbXJoQ05pY3pNODh4elk2RnRUT20zQktnbThHNlEzQVgrVWJvZE9KRnNyRVpwYnpOSmFGWHYzNVFBTHkydHZiUVF3OGx2U24vOWxnMEkzcjcwdmFkeThzcXJlcjh1YmZPdi9WV2tXbkFGVXZyWDk2MC95YitiVlNramozWkRVQmEyVU5OQU42eFE3c1M4N3FkTng5OWZYTHhqTkVYR0NYa0dUMlRydXdWdFVVbTlHZ1ptT2xLZldpMjk0cHdweVZaR0N4Y1Job0JnNmZYbzBNeGVOak1KRVJUc3JUMllBejJSY05LYUNvbUNJT2NJUXpEMG13cjFXbldhR1ExQ1k5QXdrZ1VlL05DczBLdHd2VHl5SkNGM2VnczVPVklGNEpoZUozUy9UcUhZenc4eEMrTkRJbTRIQklYcEdMbmpNVGJmUWZ5UUY4V3pWMU5scWFVNjVPaWk1eVptUUZ0NlowWE16OVJJbjFyc3Y5UG9laUJ5c0hseHlCZWxQSTJENFplVmVlKytYdVgzM3lwZnB4S3YwOStQVEVLNitaYmIzbjJtZStvTDU5OTV0UmRmL2FlZ1hibE44K2NQYTgxQUZlTXpRM0FwZXJSMXY4TVNnRVdrNGxZMnU1ek95T3owVGNmZmIxRGZjZEFYOXZ3REt1SmJvN1JGd2tSV2M0dm1ZbjJoWUFCRWVYU25rdGpNREUwZUdZWTdIaWJPd3dta0svRTZHQ2t0Z2NyZnUzdGl5YURzbEluSjZWSFJtTWthelJpVGNJamtqQUNCbWtmQ1NNbE5FdmpMdUg4RUdmTHdvZzNER2Q2cElmQ01PTGljSExuTUtLUnppS2RoNk5JN0tScURVWGlVYWs0ZklHWUpocG5YSmhqZHMzQXd6Y2hSMmJGT2F3NVF2eXl3TGtadHdORTFnWmwveDhwMFcvMUlIeUt6T1ZUaVRlRmFXY0x2Zm9XS2dCV3ozem1NNStKbi9vS2ZTc0FUcXQ5KzI5NitjV1hMci85ZHYxbDlhRGk0ZmUrNzg0aG43RVhubnZlWW13RzExSjE3R1NqQU85WU9VZ01RTnJJZjc2R3VOc1plWTIrUUh5eWtRZDlKUkxrNHJGN2ZZdWpMMHFGUEh0dVBWRDdNTkhhZEtWOTlTeEs1R09WeG1DaDNvdE53V0RYMnl5MHZaVHdZM0RmbVVtd0J6NXAyQlZzRDBaZlg3UW1CQWNuSndVRVlaVFB5cksyUXdqQ2lEY0pqMERDTU9jSko1RXcraGlrZFZOdVQxbllQUzFtdzdBTnJPa3dqTDQ5dzRpTHc2bWR3MlY1R1BHUlNIRWt6akpPRDZUaU1jQTRINDh6THVlenNHRk1WWlp0MC9QSnRFUGZvNUZFNzVtd2JqbmNSWTdBaS80YWJ6YnhvcWUzdVMvMDZ1dSsyY1pmM1gvLy9jMzBvM0I5L2Q5bGZWUU8zZjd1Wjc3NUxmWGxtMmZPUHZ2TXFUdmVlN2ozWjAvaE5LYnk3ejcyUHhlcUowNDlkK3IwYS9Wak12OVo3Rmp5akRWQ2NiY3orbVJjMGVncjV3UjlNY3VRNXd6MHJkZWRlTm1WeE9EZU1WY0ZNRmhvVit0bE1WaTllTU9mWGd5ZWJvUEc0QmFTMjh2VElUT1RFRXpKUW1sZnRPVmhodjVhSlFWaEpHWmxJV0tOeG9BbTRSRkl1UHN3cEpOd2VtZ1dZckp3WUxBdzhqelNDVG5TZmhoRzd3QXREQktIQy9Kd3JtVTY3WEpTVUd0bENNWHBWRHdHR09mak1YSURzY2FHR2U0S25qT1VMWGtEWXB6ZEt3RzYyWi94bnJpTE1RWGUyRWxJbXA5VVJPWXRBYjBkam43ejk2NiszZGlKaytLdnZ2blV4Z0Nrbk5xemQyM2YvdjF2dlBhYWVxWjZ2RGhack1DNDMyZHkrOUtTWXVCRGQ3d2JYSVZLeWIvd1RRQmVYbTRzbkdPNm5RZWpyeEptYlBTVm1wSzgxZEFYUXlPeWZMOThwRXFCRHJNckF2bFlRYXJwUFMwSndhYmlVVEJZNkIvdUVBWUxsWmJjZGI4UG1wbFVJQ1Vyd1JlTmNGNDBDZ3ZDU0pzaGpDSFdhR1EzQ2MrQ2hHdmFrZG8yaEtEeEx5RTBDMm15Y0toYnVJeEhPdFF3M0F1R3JYOFcwbnQ2QjVtbG96eU13Ukp4MnZXbUc2K0ZrRkFjdUt3Y0RNYkQyUmc5bTRHem1FZU91bnZYQjFmUG4yMWJ6UDFCaVI0dnNibXNXd0IzWjB5ODh3SzkrcDVjZUw1TGNuN3d3UWNqSi96SzVYVHpzMTRWcGw1Y1gxZHBXRldkZnVYVjFkWFZmcUhRNzd2cmV6ZHMxWmZmdnZtV1c0cEVhaVhXMWF0WDN6eHo5dXgwL05KdEI5K1YxWGg4NnZSckQvL1dsNm9Idi96UVQ2MnR6R25IOHZHVFQ5VVBGaWM3WFFWWWJOOHVGb1RzcmxnQ2JtZVV6N2lDZjdLUkJjNEtmUzNKVjBOZi9TaHVYUFExVjUva1NMZ29HaE9OL2szRkpURlkwVllHQnJlVTJRSlpGZ2FqWEVvVzBuelIwYnhvVWhBV3p0VTJKUWhyR0l6Z0RHRi9WaFlTVXFPUjN5UThTeEpHcUZYWWZXOFMrRFpDMm1teU1JWjVwQ013RE5jbWpiSnR3OGczUzl2UUd0S0hVVm9pN28zRUhxRVkrV2syWHBMMmhrR1B5Y1paR09OSHluNG9OUzQ4M1FCOXdpVlJkcFBPbnVqOWNyTE1aMG9NMlZTTVhVVStJVzlaNHUwTnZmWS9FTmhRZ1AvZitxdkQwNHFjbjRwK1k4blBaQzB1THI3djd1Lzk1bE4vcWpQd3M4OTg1OTc3djc5SElOYjJwZTFESE5UOXFpTDJpcnJWN0tYejU5NzYvZy84UU9LNmp4ejc2bWNmK2MyekZ6YU92ZnJ2bC83Mlp6Qi9WU0g2MFJPUDE0K1hTZi96OGs1VDljMTBPNk4vb3k5OGs0MXVLUFRGb0pEbjZLWW1xZnlKVXZsWU9SZ2NkbE9Yd2VBT2I5SXhHRnJIclZUbnB0Zm80T1NVTEF6MlJXL3NoZTJMaGwrdHRUbVRGb1JGTkRJYStkWm9wRFFKSnhEMXpFZ1lDYTNDNmFGWkdDNEw5NGpPd3BEMExQU1lNNHhjY1JnSlptbGsrS1V4V0NKT1FtTHFZaTlKS0laUFBNMm1ZZ1FsNWg1czNQMXkyeVFvU2hCZ3g1Qm81NTk2TjBlWTNyemJBV0xJRHNpUzcvTWcxaTJHdXhnazhDYlNiRjhUOVNaQ3I2ckxiNzZrOHAvajh1LzYrUTMvYzkrcUdmanAvKzlKNVY2dVlMS2l5bHNQdm12T2Y0MVUwUDdzTTZkMGRLOTNQbkdrMDgvODZxOVhBRHovdC9hcS9WU1BkNVArNXgxTEhmb1dkenNqTytQS3ZvUWwwVmRoZ291KzBqVnZieEgwUlZwRVZ1YW1KaDdrb0Foa1NENVdGZ1puTlJXUGc4RU5YVkVZM0hDWUZvZWVOem9ZS1NsWmJudXdnUk85Zk5GSURjcnFJd2liSkp3cUNLT1hOUnAwWE5ibWtEQnNwNngvWGUxV2lZZUVVVWdXUm1KMDFxYkNNRExGWWZRd1MwZDRPR0taTG9QRTZDc1UrNjQrdlpiaVBtRGNqNDFoOUJUTmlKQUxFdGVzUmpSdHBacG5FL1dRZlN0S3VRVkFOMjMxTXJoN3ZSQXZrdTNOMFJOMVh2TS9QL0RBQTVHejE4djhiREh3ZTkvM1BSVURxMmRlZiszMU9RZmdOMTU3L1lWbm4xUENyMzRzVWZvOWUySDlFNy8wZWIyeDl2Q0IvWi83aVUvTTRXRWVQZkc0MnM5dFMvdldEbnpJWG1KaG9RSGdRbTVuREdqMFJmSmtJMGJmOU4yWUdEWm1wTW13WTJOd2VsTnhOZ2EzUE9iRFlLMHBWNW9ZaktZRldHcDduVE16Q1FrcFdVWGFnK0gxUmNlRHN0QmJFSWJmR3QzeWp3d3dYcFkxR3Q2NVIrSGc2RkZJMk1YeUdBbFRyY0lZa3B1RnhObkNZWTkwT1JpT3RnMmpsemc4QWcvYk1DbGlFM0dvN3QwNFQ3clowSWxDTVZJZDFBRzVHTDF5WXlON2xZS0RVVUxXZG5uVzdIVWpHWmpuc0VUQk4wSU8rbll2ME4wczFwMFY3aFluWGd5V2VhUFFHejFkN2NOTDMvMVQ5ZHlSSTBkQ3g3VitIcWUrUGZ6VFBnMXQ3Z0t4THIvOWRzV1dBOGNDajBxLytoQmpWYnQycjBZVHZDcjYvUXUvOFBlZU9QV2NldWFoSXgrZXp3YmdhbGQxK2ZmZ25YK1YrSG1wNkxlTmxMS1JMOVh0akFHTnZzaWRiTlFIZmFYN2lqTkIzd0xZUEFoOTY2Y203V3FPTWhQbFR5VEhST2RoY002S09SamNqaEZ1QVpMRVlCMmlMT090UGpOSkdmVFR3NkpIYVE5R0wxKzBQeWdMeVlJd3dwSFJSYTNSR0J5WE5RTVNoaHJYakI2dHdpR0ROUHk1V2VnckM0OEt3NGkxRFNOVEhDN0F3ODdhZ2w0c010bzNMaEduSVhHaVVJeWNDT2dzTUU1bDR3RjRuQXpKU0ZSV2hTaUFOVnp6ejdSNXBDa0w3SFlSbGJnMzY2SjMvclBNWi9pNUlWNE1WbnFUb1ZmLzR2enp6VUNqKysrL2YyMHRtRWMxV1A1VnRiWjNUVStFdnJpK1Bzc2dxNEgwVzZIdkhlOTV6L2FsN2RIVlAvRkxuOWZwdDY2akp4NC9jdTlkaHcvc242c2pyZWkzN2svR05QeVpISUMwc0hPSDdYd20wWmNHclhFYWZSR1piR1QwS0dlaHI5cjhGa0JmSklZOFIzK05UR2p4TnAwL2tSQVRqZnlZcTNJWTNISXZPcHJVODZVMEROWmUxY3hEemgwZFBEQXNHam0rNkVSQjJQQkZFMEZaMllLd3phc08wMFdISjlreHpzbHpqd2dTVG9uTEdwbUVYZEUxcDFYWU1VaWpmTGZ3ckdFWWZaelM2R21XanZFd3lrakVLVWlNQk9NMEVvWGlIQ3BHbnBaVWdvMFRscElKYkp0b0xFNjU3STZSTThOejZwc3d0a2d1aXkyVWRHaXkzS3VrYWJOaTJPcXp4ZDJ4aVJjRFpONG85QWJNeis1UU9seHNGZURaeUw5MXZmWFdXL3FYMjdjdnplRnZnQXJMWDNqV3dOZkZ4Y1ZEZDl5ZU9ITzRRa3JkK1Z6WEk4ZStXamNEVndEODRJZmUvOEM5ZHgrNTU2NU5GNFEvKzhodnF1eXJ4Y25PMnc3VERtMVJNYitVM2d1TWdtNW5ETXE0MHZZdGdMN2FWS1RyR0gwUkRzMnk5MlFTZ3M5cy9rVGhtS3NTR0F4bDRZMWg4QWFrQ1ptTHdVZ05pMDVJeWFJWkwraUxSaXd2V3BHWTdZdldYMmVnSUl5czRVbmQyNklvcjNlVE1QeHhXWnRHd3NOYWhmTmtZU1IxQzI4S0RDUFBLWTJRT0l5b1dib3dEOE92RFVXUkdMMkZZdnJ5VW5oYzBJUEJ1QmNiNStFeGtqWG1IS1RON2NTVmNzamFQUmg3RmpXSExtNDV5cUtwSDRmaVh1aGtVaTNQdW1WeEZ4Z1NEVjJXZUpIcmJZNUNiK3pROUgrRmxQeGIxWDMzM1JmYS9RSFpWeTVZbm43bFZaMHFVOVRVMmRleno1elMrMzdyQksvRXVVY0tkSDExNnZScnYvTGxyMVIvcXNmM0g3Nzl5TDEzZmZ5REg2aitPL3ZEclBhejNvMjZEbjdQWDkyMnRJLzRsRzdmaHNraWRTMHhvdHNaS1JsWFNCdnFTMXhSU2JQUjEwRmZZeFBYT2ZyV2YwM2k4RGtxQnFlZzdDQU03dGpQd1dDMCtxU0R3WVlWTW9EQkExS3kwdHVETWR3WGpVMFFoRkhLR3QyM1NYZ1dKQXhEeDBaeXF6Q1NETklGWk9ITmdXR1VGb2VSYTVZZXlzTklsb2g3STNFaUZjUHJnaFlZRE1ZOTJEaUt4L292N0hIZ0tSdVlSOGZmNjZpcFdHN0NtaVg0dHU4TzVKaWZSWW1OOVB2d0RNTmRJQ2NhZWpPSUY4Tzl6ZjV6MVgxeCtkeEw2bkZrQUZJaCtiZEN5bWUrYVd4cTM1eVpnZXQ2NWNXWDlNem5MUHF0NFBhemoveG1oNVIzYmlEbCtybHZYWGp6V3hmT2ZjdGQvb2xUejFWL2FncFZKRnhSOFF3TzA0cW52dm5kUDdwS2hUK2psbi9UQTY0UWN6dGo1RVpmUnQrVWUyck9ua3ljTFhwYWVjZkE0Q3lVemNOZzgzVnBEQlpkdDdDRndRb1Q5YXZNNU5IQlNFbko2dHNlN1BWRkl5MG9DNm1DTURvTk95d0ltNEJxRTZiUEdoMUlqWTQxQ2M4RkNjT2V5WlRWS294TWc3UXVDMmVGU0c4S0RHTW00dkF3SG5iOVRER0pHSjR1NHI1SWpFU2hPSWVLYzhHNEp4dEhyNmVOejJkUlRoNk1XemxOeHlPV0tIWkE4OEMrUTgvQnFJMittZVpuMFdkcjZYNklmcXhiRkhmTEVpOUtHSnZIaEY3OW9ScUFoTEFGK3Rsdjk1djk2OUx2TjUvNlV6VURxUWJMMitZdkFycmF6KzlxR25WVmgrNjRQWkYrcS9yc0YzNVQ5ZE91SGZoUUhhZThzdnZPQTRkdzlaMkxHeVE4L1hQcHdvdnV1c2RPUGwwYnB3OGYyUCtaajMzMG9TTWZIc2tnN2NaVFYvdDU0TkNQZWxkWTJpNE5wT3p2ZGthaFJsOWtabHdWUU4rZStWSnppNzcyNmhQVGh4eWpWcURYME9CeU1WZmhkUkdNMXpJd1dHM1N3ZUFhOE5yUFErN01KR1NtWk1YYmc1SG1peTR0Q0NmUEVFWXZhelQ4cWRFK0VuYlNuamVUaE9Fb3VvTU4wa2lUaGRXdGs3QXN2SWt3akpoVEdwbmljQjRQSStTWFJtK0pPQUdKRVRCT1UyU2FLQlFqV1N2T0J1TXdHNk4vQkhTTzh6a3RBYXNzcFcwMmJsNlBqY2g5TzYwM0lRaTY3NGMzeTZmUW0zVTNDWGNMRWk5S3lMeUlOL1RtMHZMNUZ4b0w5R3prMzRwK3JWRzZGVmpPWWY3ejZWZGUxYzNQZS9hdUpmYjkxZ1NyK21tM0xlMjcxZXluWFp6c1hOMzNmYlhLV3NId1cyZStVY3ZDVjk1K3d6N2xVeG01K2xNeDhNYy85SUVIUC9qK2dnZjRLMS8reXNOZi9KS2k5SnAreWVUbnBoWVdSSk9BRmUzVXhYQzNNL0l5cnVMb0c1aHNaTzY5UTdxYmpyN1d1cU9oYjczS2hDTFBYaGdjaW9sRzRaZ3IzN3BJU0puV0VwSU5ERzdFenB6UndkR3dhSGhUc3VMdHdlam5pODRNeWtLaUlBeDNobkNMeUNMU3UrdXpScHROd3RiWTJxUzRyTjdCMGNWSkdBbXR3cGlCTEp3T3c4NVFwUkl3ckcyMXIxTzZBQThqMUQrTWdoSXhFbWNnQlJZbUJ4Y2xhY1hJa1l2RE5Dc0MxOFI5OFRpSk01RFpTcHhNeTc1M0hseVo3MWpQVXpiTElHZzV3a2V2TU9paTkvVGd6Y1JkWkxpYU1ZYk1HNFhlREZxMkpLNFFBSytmcjRodytNZjIyV2RPV2ZSNzROWmIwc0Z5bHZYNmE2OGJsSDU3aGh1NUFrdjF1RUxLaW5oOVMxYmZVdnB3QmNEbjN2aEdSY0xyNTc1VmdiRytXTjFPdkxheVhESHdBL2ZlWGYyM3R5WmNFVysxcWM5LytYY3F1dGFmcnlqOXB0dENJNkFYZGkxRFhrdGkxNHhzWnhCdVorUTEraUlsM2htQm9iNGU5SlVKeERoajlPMi9KMG5vVy84OThhTWpRdUt0eTcxWjA1TEd3R0RrREZ0eU1SaXRqaHZEWUF4SXlVSjZlM0JQWHpSaVFWa29KUWdyRWhicUZHWlpveEZwRXRhQ283UGlzc3FSTVB3S2N4NEpvMWVDTkhKa1lScUdoVXR6S2JKd1h4aTJpQzdUS1kxVXN6UVN4ZzczNXVFWklER0NmWTBlclppNk9FeVhpL3V5Y1FJZUl5S1lsVXVCN3A5akpQSmVweWNzYmw3SkxiYmRuTTNMUWFlL1pQaXp6UGhjeklaMXFiMGFRK0JWMXdFaXZyVk00a1VaYjNQNE1sZlYrUmUrVmorNC8vNzd2YWZoeGVlSGY3VFB2L1dXUHZlb3FuMzc5MGZuNkc1S1ZaU3VtN1NyL1V6UDZGSUdaa3c5eitRd0liSzJMZTJyRUxTbTBFc1hYbno5NWVOdm5mbUdUc0kxdTFaL2ZxWU56YnJ2OEIzVmc1Ulc0YnJIK05ISHZxYWthZjExSzBxUDdPZUNFTHVXSSt4YUl0c1pZelQ2SW82K2txREU2d3Q5QTljbTBySkF1OThtZXVGRW1XbEpvMkF3K3M4Y3BqRllMU1ZhdXkvNmhrWG50QWZUdnVqOHZPaElVQmF5QldIN0RkY0VZUWg0czdLUVk0MkcyeVNzOGF6UWIzNFJlRDhTQ1llOTF0Q2Jya0Y5MG5TSXpUZElJMDBXUmw2T3RFRnhvOEl3TFE2SFp4SDFNa3ZEeVN3MWVWZzRFK3lkVC9Wc2tSaGhvUmkrZ09oQmNuRS9OazZCV0JIK2RneVNrUmxxMVFjN3h3RzU4Yk9sTncxTlo3RlRjdnhiSXYyNnk0ZURiZy9XN1lPN1l1aUJ5UEFyQy90VzVCakVpeUxlNXRCUlUwdUZKZ0EvVzhELy9Pd3pwL1F2OSt4ZHUrTzloekdYOWVhWnM4YVoyYnVXdnU0L092WUg2dkdCZC85b3Z4M1lzWEt3Z3RMYUlGMlJzTnNxWEFPdCt2THdnZjJIYjk2L3RyeDgvM3Z1TUduOHFackpmUzkwODd0L2ROK3REd1EwNm9aL2QrK0MwSzZXbzVJdlNycWRNVWFqcjQzYXhyVGdHeE45NjJjbUNTNWlGSXVKTG9uQlEyWU9tMzJZR3ZtMGkwcWt6RXhLU01uS2FBK21mZEhva1JkdEJHV1J4SmdsQ0NNdkt3dktHbzNnZ0Y4NzI5blhKR3lFSXVjRVJ4Y2tZV3R2VVV3V1RuVXArMlZoK0J2Z2tad2pIU1ZiNVBjTUkxTWNSaUd6Tk1YRFFvTmg1RnFtQnlJeEJzMUFpaVFGU1E5KytpWVY5V0hqNk5WOGtoRTZ0cERNaEpvNVM0RytidXpWWTZaQWk4TGI2eDJFSnJNL01yMjdnc3ROUXBvQjdob2FyM2VESXhCdm1HeUhRbS96eGVWekwzZEV1bWNQZlhEcjUzSDJqWUUvUTVhbXVuMXA2WTczdm1kdWYrTDFHY1dMaTR0N2tnRzRGbWtWeEtiTHYyUXBnM1R0amo1NytqRXlOQXZUYnVIYTB1d0t2TDR0cis3OXZvcCt5WEZIOWtkeGFidFkyYWx6WmZzNEsrQUtROXpPczh1NEdvaStaYkY1dHVoYi96M3hRdSs4WXpDeVp3NGpkWFJ3WjlzbFp5YWxwR1RGMm9OQlRRODJqa0hMaXg0VWxGVkdFTmFwT05rYWpVQnFOT3dtWWYyakZJekxRa1p3ZEQ0SjY5Qk9wajBYYUJWR0pFSGF1bkVBbnl5TTRSN3BWQmhHZm9BV2NzVmhERFZMV3daNzU4U0tibWM3L2hiT3Z3aHhpVGdMaVpFb0ZDTnJCbEpzTFQvUkN0OGxhL0FDdWpjZUkwZmdUVUxseEl2aXdUdHp3MVUrRm83NE9zT1RzWG9kenFhQUxqS2R6Q2ltN2xyRUsyWkZ2TWlRZWRPdWFCSHZBZFlqb0wwVzZCTCtaMHRUdmVPOWgrY3crRXJWK1hNZEFPL2F2WnErb3M2Zm9aYmFoWVhGQXdmazIyL0xpeGVsZGwvQVY4b2RyVUt6THEyLzZJUGhjSzN1Kzc3ZCs3NnZvdCtvNnR2dXFsall0MXU3Rk84bCtXS28yeGs5RzMxUllMTFJEWU8rSmdCdkxReEcwTmc4RklNUm1abVVrcExWZTNvd0NGODBmRUZaUXVqM2tPWkFFRWFPTmRvUmdkUGlzblFTaGhBb1M4S2daR0hTekJ6ZUlBSUdhZjgydlRzMm1rZWFnbUhLSm8yTU5Ha01Fb2Z6emRMd1pnVEhKR0poQVRGOHYwNEhJVEU4YzBGNmFzVklrWXNSNlBnVi9qUXMvL1Z0N0lKYmlBSThrMHVub2grTUZRbjUzYXBWbVA3bDZDc1U0ZHZ1MkFkMkJRLy83SlJuWGVTYW1kVm01NFY0VWNUYkhMcllUZjNZbDRpL3Ntclg2dXJjL2phNC9MWXg3V2w1T1NOdTZ2alVjdHlnNXQ3djg5SHY1TkJCc2JSVW5ZYU45K2ZhdFdzWExzajFpeHN3L000NzRlM3JvVmxWMVlPVXJsMjlXQ0Z4OVdWRnhWWjZWa1hPMjVmMkxVeDI3bHc1dUp6VGtOenQ3RTFyc3J2cTZ5UDVZcmpiR1dVYWZlR0xkMGFhWS9uNlExL3F5VWs4NFhsK01CZzUvYjM5TVJpaG1VbEVTaGFVTHpvdEphdWZMNW9LeWpKaEwxOFFUb3FNYmdIQnNmSksrdCtXWkdzMDZBRy9nYmdzaDRReFl4SkdTbWdXeHBTRk1jZ2pQUkNHVWFodEdFRzNjNjVadWo4UGc0eVloaU1SZTRPMWNwRTRUTVZJZDFCbmduRXlHNGRBVm9Tdi94TXUwMFhLVldoV0FHOEpwaE9qd2VIOGw5ems5VXVScmZIMkZXa01IbWNTa2loeitFbG1aaVJsVmlYaWJpL2lSYnF4R1dWa1hncDZ0VmJPaEhQNzB2TTMxQytBeTVjTlNYWm5EZ0NyYnRzZEt3ZDlFdXZpZ2YxaSsvYnUybkpCTE96YWhlcFA5Y1U3VitURlMvTENoV3NYTDFWZ0hIMDVGYkoxNE5BNGR3YlhWckZ0Y1ZqQWxicmFiYTVvWitwMkJzYkp1Sm8zOUtWdkRXVENmTFBpcERYQkRNYmdua09EY3pBWStURlgyUmpjSXlVTHVlM0JTUEJGZzhxTFJtSlFGbEF3TWhyaldhTVJIR3VVRUJ4ZGhvUVJuQ2VNM0ZaaHBCcWtNYllzUEFpRzlRQXRsR29icHRleUtNUnZsdTdKdzM1NlM1T0lCUVZ2TXZCN2ZBWlVqTnd4U0lrVGZTTnBXQ0tCSkFkQmNnWXFGOEt3SWhSOTQ3SHZ6TEIyRkw0dFNMbjlRRGZqbk9TcnU5N0FLbmpTQithRGVFZUIzdTUzZlB4Tk9mMXFrUSs3WlhnKy85WmJjeXNDVjhSYjdhMGFBcHdPd0djdnJLdlpRcnYzMGZMdndzcktRblBnQk5HSnlVU3NWakM4c3JoaFQ3OThiUU9HTDhwTGx6YmhMQ3dJc1h0RjdOemVZNllSaGttKzZPTjJadlF0Z0w3MWZ5WW1odzdBNEt5aHdYMHdHUDFqcnFMcklpRWxTK2dyU3d4c0QwN0ppeDRRbElVaGdqQjArMjVKYTNUOXBaSDZIRzhTcGtoWWswd0xrSEJLMm5PRWhPRnRGUTV2TTBVV1JzNXM0WEl3ckFkb2FXTHpzTFpoTC8rbmR2OEtoN0VsZmFWVlZDSkdYQ1dPVUhHUWNQdFFjU2t3Um53TVVpb1lKSTdxRlFuYjZzZExZZ2pFOHBEZ21kSXMvUkVySG53bGk3N2o0NEp1bkhWQjl1NGlXZDNOWXY1NUlWNGtlcHRKNk5WWHYzeXU2d0dtVTZBTCtaK3RUdHA1YmdDdTl1MTlkMy92eXk5dW5KbWJiNzBsZlFDU0hzdThZL2tnUlpVTGk3Y2NzSnRqM2F2UStzdHQyeGUyYmNmdTNkVy81OWN1dmkzWDErV2x0eXNxbnNrcFdGall1NHB0RStxZjEyVEpGMFRBRllhN25WR3EwWGNndTZKTVJGWXg5RVdQZGw5cUk0MEZXamdZVE0wRjJSd01MdHJmbSt1cDFsZDN3cUt6Mm9QUnd4ZXRmZ2p6Z3JJR0M4SnBXVm5vWTQxV3J5U2tQdjhvTkVtNEtBbkRzclNTY1ZNeE03TVBIWDNJYXFkOFpjckNTSnN0UEFzWVJobW5OSkxGNFJnUGUvcUhNWnBFREc4ak1ZeGU0cmgzMnY0QlNkT0swOEFZcVEzR0tYaWNGUEtjQVJXSm5Hejk2ekZqTUJQWG5TQXNaMHI0SXUrZDYwMmtJOXpVa0RMeUdaOGg2MHBQT0xOSVBONTAvaytiUXB6VHgxdVVlQkdRZVp0ZlVpSWFncVdsUU5NaFdJVVU0SjNMeXdkdXZlWDBLeHRicXg1aytZcG5YOVh1dmZkOTJlMnlPZ0NUNmNxTCsvWkNMRGlYQVNiM1N2TWlxVFpRN2xnU096WTRYRjY2Sk0rdlh6dC9ZY1JmVXp1Mml6MjdzQ0NjZnowSFM3NGczYzV4eVJlak52b0NneVliOVVQZjBEMnlUVU5mM1FMdDEyQTNINE5SUHVhcXgvNTRVN0xVMDI1N01NYnlSU01jbElWUkJHRU10RVpiSk56cTJVUmMxbGdrYkV4UlVoZmhQbDl4OFZaaDVNdkNTSnd0UEZzWWpyWU41NHJEbTg3RHBaRVlIdSswaEhrSGh2eUhRY1F1dkJQQUdQN1lHKzlWY1k4UndZbUVUT3hOVmg5bUdpMFBJZWZOeHNYNXJINXZXZ0VFVFYxMXlNWUhVRzcyeDZNdjY3WTMyOHZqTHZvSnZMMklGOFdNelFqSnZFanRJZzdVNEFGSXFnN2QvdTdxejNYOHkrSE45WFgxZU1lS3JRQ0x5V1JoejI3dGt4L25Ydk1kbkY3d0xpMkpwZTBMZTNmTDlVdlgzam92TDE4cCtjdHQremF4dWhQYnQrbWZsaGxLdmlqWjZJdHlHVmNvR3BFMVArZ0xXcEdlME5BYnhtQVJBK090Z2NFWXVUM1ltUjZNbnI1b2hJT3l0RXZ0QW9Kd2srTXNnSUhXNk80MlFiaEpHSFpjRm1MQjBUMUpXTmlpNjJna0RHcVdFbkprWWZUMlNJOEp3MGhzRzBhZU9Ed2lEenVKeDZSbGVpQVNFK09YUWxSc2hVNG5VWEU1TUVhdWJoekJZMlNwdnZuVWhiN0NvTWltbXV3ZEt3aGtCZmRpakYyUk05L1NLR09ReE9BdHBPNXpZZGFkQmU3T2xuaVJvZytyMy9qZFArVTl3cUxiWlhmZTlENzExYkZqeDQ0Y09XSXNzSDRlVjJiaXViMEJhbUZ0andXUU1wRjdYWllUQzJKbDUrTEt6bzBFNll1WEtoaVdiMTlPQ2MzeS9nRHVYQkxMU3gzNjVrdSt5SkI4UVFSY1liamJHZjBiZllHaThjNWJGWDNyY2kzUUNSaE1FTzhXd3VEZXExT3Y3dlZGZTlxRGtlS0xWaHNXMm16aVdRbkNLR1dOaHJkSjJMbWE5OFZsd1JzY25VUENkbmEwdmczUnZvNDAvcjBOazdCK2RlMnpMdmVYaGRIWEl6MCtETWMzMWQyNmdTa09JOVE1ak96bVlTOFBJOUw5SzUySlI3NW9uWFFrUnFKUURESjAycDFPckIvTmlHQ2N6c1pSUEVhS1ozamNTVWlqMDJqQ1JKWE50azNMdVgvQmdpQXR5N3dGZmFSK21YaEFnbWduSzg2NlkrTHViSW5YdlZDcjdZa2lFNXVkWlp1L0ZwZDJoYzdpaFF2Z1NxNWo3UXdrMHYrOHNHc0Y4dG9nN25YL3phditnVnplV2YzWmVIemxDaTVmMmRDRXI3eXo4ZmhhN0tkNDIwUnNuMVRRS3lydVhlaXU4Qk5tK2FLMzVJdFp1NTB4MjR5cnJZMityUVdhUnMzckdJTjdyWTVZeUpiczJHT3dMOXBBMXJFRTRYYUJGam9GL1ZZT3NFYkQxeVNNMUxpc01pUU1hNHBTOTdjd1RvWDZNaHFhVmNRZ2pld1E2VTJIWVVTZDB2Q0t3eG1kd3dobFJDT3NEeU8zKzllVHFqVUNFb2VwR0o2SUhVY3VGcVhBT0hyMW40N0hpUG1yVXlFNUg1TktaVGlMN0pmYzJpWG5ZaE5abjBsUmVvTkZLQmQrVVZmOWs1WjNEZ2RKdTFtNGkzNmR3REhnN0VtOHFkMjg0ZmRVK3QrKzhDZGhoQW5BTjBKdGR3QllyQ3pMQmRNTVpyQm1TQXVGYzZQVnZFWm9yMWNuaTVnc2l1VWQ2bTJWeGtEalRpL0Y0di9QM3ZuME9ISlZVZnpjYWFjek16MURSZ2xSU0JSQkk3SmdsRVdhUFF1V2ZJejVTbndEZG16RGdnV3NHQ2s3SkdqRURvRmtrQklTSlVwYVlTYUVIc2lqcDkxVnJ2Zi8zdnZ1Szl0TWxVWWEyMjAvdnlxWDdmZnpPZmZjSXh6ZFFqaGlqc1RhcTN4UkRMaUNJdHNaM1F0OVlST1JkVERvdTcyeWltN2Fad3hHMkswWHBtblB5Y1dvcGp3WWRWOTBLaThhMW9Jd0pvMTF5M0x1K0R1V29UVWFoU0poOE9PeTVpRGhDWElXU1JqQ1hrcW81V2FCR1NLOUh6QU12Vk1hZXJNMEd2elNFRmYvWmwzVGFpUzJwR0pxQitNRVNhandPQU8wSEVobXdkT2NuWkFNUWZvRkFGOXpDcVZ1STl0U0xuS2dXeGQxRmF6YkgzZlJKdkNpeWRXTXJMSFpGSHI1NS96aWZ6YmFidDI5TTM3SnA3alhCMVFXOXlMUm50ZW5WanArYWNLTjJmTkhJUG1tZXZtaWwrU0xXZDNPWnVqcjZtODNwb3c4Ty9vT0FCelc5UHJRU3pVd25nR0RDOWlKV3V0Z0hjY3F5RnpxaTk3bVJhT2ZJQXgrRDJGMHNrWWpYU1M4L3lTOHNkd0U4ZEhnOTFLQ3BGb1lwU2JBQ2hpT2ZMNldNQXlkVXhxRldPbGt6MkZMSHM0d3VSS0pTOGJwMURMWWpJcVZZSXdTRzJ2eG1Na2VHWTZ0TTQrSWxwWFl2RGQ4ZUVnRXpUcEVOT056Q1Y3UU5zb2R2NUNzUVJkczIvTXN1QXVtcFZsQXZKRG1WMG1KdHdxOXcrLzQyZTNpaStYTnpkOGVETkhXbC84T2s4UG85c3VUeFdlVmUzMWtFWEZ2UUszWm4ybDJML2tpR1hEVnorME1kSWwzUGhqMFJWMlV2aDVxVlNMVldHNDF4MkRtT1BPMERwWStISzIrNkFHTWEwRlp4YzVKWEVFNDFVTVkwR1ZsWWJCRzMrakNBK1luZWF4WUpJdzRPSHJISkl3b05HdFNLZ3dEZ3pRc1BOTHd3M0c1QmNNV01JeUNVeG82Y2Rqck9ad3BIbTdpWVZza2pvM1RLQXZGUmxTc0JlTWtHOGNMZlJVZVYzR0F6VEJrVVZ2citHdjhlWWo2TUhpMUk4UjJ3Vm9sMzQ3NzVYSU5kYm1VYXdlNlF0YWREM2VoMUlmVHhOdG9iRVpWNXEydm5vL3ZmMmU4L1BqeDR6QUVhOWtrMjluM3YvZis3MzUvZGVHWkQ4QzBXdUZvWmNDOWlPM0IzYmtYdTVKOG9jMTJobldoNzI3UWwvZHBZSXErbS85WGRWTHRpc0ZWNlJXSzFzR1pDY002SlF1dHZtaGhVSmJmcGRaQ0VBWXZLd3RaYXpRRVJjSkFMUzZyUHdsallncjNSTWRDZkxSWEt1eTlhY1VHYVlobFlkamxTTGZETUt6RllURE0wcHd3clJKYUkxMUNETFpybW9mRWNieVdIUlZiZ0RFeU5jYVRYazBxUEU3ZEpJVmtOUmVScUpmd0hMVFdWVUhlVXhidjFUTEs2WTVzUUxhRkdDb2w1WEluczBQV05jRmRGdkhHbjdtanhrdkNvZXJFQzBCRDBTNEc0TVMyMUFDYmJNL1RsVjBIN2sxUnE0WFZHUVhKMS8rVTZDYjVqZ09sRGhSZkhUVjJPK2NuOEgrQnZoRUFqMzlPcnBKM2hjRlFwR1NwMHA1aFhoN005RVh6ZzdJYUJPR2I2MGxCbUZETHlnTEhHbDB0RXA2YmhKSG9KeHh5WTR5UmNYdzBrbzVYb1VGYUt3dkRJa2M2Q2NPUTF3ekRXaHhXOFhCY1AreUduMlpaUUpzU2I5TWZzbzFJbktSaUt0WWQ1Z29KMVdDY2J0RlVmRmxqUEVZcW90cTNWVlB4bXpvOVA2MDUyaGk5VERYZUE5T0w1MjUzckZOTnhYd3JRZHd5SzVydmxKUjF1K0V1ckFSZUNPcDR1ZlBSeTd6RkViYVgxdXYxd3FvdDJ5dURCUnJYSXZDWUJmMDhabm1LaFJuVVNVWmJaVjVXSHZmQ1J2SjEvbE1vSlY4WUJseGg5a0pmaU9PZER4QjlON2VzR0tybWdXSXdaR25QbU0wWGpiRkJibHRRbGtRUUhqOGRSbXUwMzlla2JvMUdsQm9OZnBHd05EamFoSVF4OUJQbWtMRGVJRzB2QzhQUUl3MWhMaGNIaHNzVFpvckRlaDZPNjRmakhYYlQwdlB5YUNJa0xnMENscUticWlqMndUaTNubGFCY1hrUlQ0NkxjaXBDVG9KS3JiVFhxZUN5QVR6ZFV2ZHJSN1BRaStESjh5VFhzNXBrTDN3ajRpcDJ0aGI2cFdmZHpyaTdjK0tGVHVaTlFtOTR0M3R2L2VqSlIzOVlBTGg5T3p2OTduajVjZ0xBOEJwL1dIRXY1cmM2dzFUeUJUL2dDczF1WjhBNEhab3YrUjRPK203K1g3RnBzQm1ENitQM3gyQzBwMlMxZ3pTMmd2RFdGMTBJeWhJSndoRTVSb0l3ZE5ib09EVWEvQ0xoYUJCVWdxTXRTZmo2R05DMFV6SlJTWnZOa2pDU0JtbmtETktReU1JdzkwanpZQmlpTkdub25kSmdtS1ZOZUhoN0FsTzRnR3Z5UE9jL1RFdmpnT3R6cmppb2hXQmNFbjU1YkZ5UmpsbUVqS0FJT2MvSjhLVThsMmdLS213UG93VGtKUVc2Q1dKelRBc08xazZXcDhKWHdobnRpNEtUalVCWHdib3kzSVZJNEUxWW1rMklGNGJHNXR3Z1piQy8rV3NJd0o5K3NqQ3RhSHR3c2xXQXYzNzY0Y20zM3JrNWY1NHJ3RzNjQzI2Skw2eXN6bUNtVzBFcithSXA0QW9IV3VpNzEranJBL0FNR013ZHY2YTdBdUtlU2JCS3liTHpSV05NUDA0R1pZMTNsQXJDaUt6UkExNVBCR0V3c3JJU2JZU0JoaUpoUHk1ckZoSWVma1dneVVQZDhKdURKRFFMWW9PMFdCYUdvVWRhQXNPd0xSdFc4M0J3aUJwNHVHYVpSaTVWeXhDSnphZzRLeGZudmhOS0UyYVJMUk9QT1lRczRPVGdmalE1aGxSY1MxUHhxcHlDdXFuQlVyTGVHMWs2MHlLQ1JiTUIwNnArWUhDbUIwcUh5cTUraUVTUDNSWHJJcXZ1SWlyY3BNYWV3QUxpaGEzTVd4amgvbHRuVHo0Nng2SUFOMjlUQmZoWkdBVHQ5cEI3MFdoMWhxbmtpLzEyTzF1aHJ5amVtWXUrakJseXVScXJSQkhOSG1Hd1VjOGtXSmNIdC91aUswRlpiRUVZNWNob1FWWVdxdFpvUnBHd25vUXpMWlJhU0hqaWRobUhwK25YT3pjMEMxS0RkT0FiUjZsYUdIWWVhUVVNdzZwc0dNTEs0WDQ4aktwRUhDTXhrbFhFVWlRR1V5aEdhL1d2UTZHL2tLc3ZncWtCYS9tRW5KOC9FeENkRXoyRy9PUE1aNjBjeURrR3R1MlFyRW0xVTN4d2pWOE9hb042OGVGdzFpTTNtQWhJQWNrNm9uYlNYV2pCM2UxSGo2bkEyNGQ0VmRBN3ZlWG8rTjU0K2Z6OC9PenNiRUhaRmdZK1gvLzk2c0xUTC84eVBkb3pjUzltc0RxREhleThJOGtYSGRLaFh3ejAzZnhobGYxQzNBc01ocmgxTU96S2c5SHNpMFovUVJpVHlPZ0o1VWJNVnMvS2dzUWFEYWpqc2hBR1I2UGFRb2xCd3ZEN0NjTXFOTXRBRnFZUUtmTXdyUEJJTjhMd0ZwZ2F5NGJSSmc2TGVCaXMrbUdVaW42WlNKeGk0dnl3a0F2RlpjYUd2UHJYbGJvSjFkbTRnc2Njb0dXRnY2YS83V1JFUlpvRnVvUWtLZnY3aFFrRWR0dWNLMC9NZXM2dTY5MEZqM1N0VDZ5aFhPaWxZMHZXN1lTN2gwaTgrWkh2dlBhRDhjcDZ2VjRBMkFTQXYzNzY0ZlRsSWdYM2doM3B6T2RlWkszT01FeTMyblBKRnhhRnZob2czM2YwdmZsRjdMVTNmeHg4enhlWGFPWFZBRVVYaTdmb3hpZkpWSWxxTTBTa0w1RndUUGtJaFlsTlorWFBNTGcyZk1vNHZ4OXNrZzVTQWxwRUVFUlRLaGpMak1OWkJsT2gxQVNuYTNyS0hqUnY4b2tqUnlrRUNoZWxWRHhEVW5PYkNFVVVIUnlDbTBCUitlU2gvSnVHVVA0N0JtVzRjSS9DYVNZNjA4cWprZndwY3M5Q3RTVTNNZGJoeElLUjdGQjFPeVlWL3VEOXl5QXhaVjVOTVdHUmJwNk1JUWpjZlp6c3JBU0txUEh2bGlCR2V6SEV3VzV1NXdOd1IzRTJVNkVCLzVKdmhCcHI5UUZkMklSZHBUNmR0cmpyNzZacm5xcXE3YkNBZUUyZ04xelpINzE4NzVQelgyd3VQM3o0Y05zSytLdW4rTnRmRjZZVmJSZGYvZXVYMTYyQXI3YVRWOTQ1dnM3Qm9wTTdkSFNybFh0Umk3WkMydW9jbndreDl3YmpDS3pPWVBYeVJVTHlSWE5Qb3g3b0s1ZDg1MEZmVng3Y0JuMDMvMThEY0lvc09tTXdlKzJ1b0UwUnNzYmo1R2FvZzFqeEFVenRYZW40a1IrQ1M1TnZQZmdRbTRHRWFPMUxVMG1Lb3JzTWhYbDFFdllKVmsvQ1BsRzNrWEQ2T3FXQWxyZ2tySVRoVVpLdWcyRjNHRTRlTWR1MzdXSHhNQXVKcWM2YnBsVGNDTWFWOGZONExDWmtObFZTaHpFWENwNkpXbzJld0JrUHlFRGNQcFRiQTNSVHc5SmtOK05CNGgyM3dGMW9CRjdPTXRTWWVGR1dzMjRkSFgvKzUxLy85L0xKNXVxalI0OFdBRlp2RDA3dS91eFh2OWxjUHI3OTZpWUhpKzdlcHRWUk0vZktTbnlUNTBOZ2RRN1ExenJkQ3Qwa1h6dDQ3dVIyUm52RzFRN1FkM05wbFhMendzWVVqWlFGT3VjWnhwdzlrNkF2RDRhdy9hOXNCQWdyaExjOWhJZGIxRmxaZFdzMGdpTGhRaWRoWk9LeUFGWXo0V0NjWEdJV2l2MkVFWFhOSFk0WXAxUVlVb00wOG8yRlVmSklVOUJiR0VXUE5EclpwTUVyRzRZbVV4cGxzelFFZm1udzhxVnpsbW53WGROZ0dxZVJxcVVlM3JzRit6UzREdXBnMm9VRmEzbms4dmlvZVpzZGdkZUhpT1d5OWs0RVNhMnVIbE9KTVpObGF6NGNydThEaVB1Z1hwWEFYRzQwWmQzZ3dTTkFFRCtxU2p4dGxjQ0wrVFZleGtMWmY3cmplMjljL3ZOalhOY0FMKy96bHUzMDlXOWYvVnQvK3RuVjVTOC8vOVByYi8vMCthMlgvOEh4UzFydWhaUjdEVXA4b3pNa2IzV0dXUzlmN0kvYitVVkMzMmpDcXd4M3lUR1lTNWhkTVJqTktWbW90RTNpMDNVNEF1UkJXWXdLNGZCSWpGbFp0RVhIU1ZZV0dHMkVrVW1OUnI1SUdOSzRMQk1TbnR5WlFjSVkyeThYd20yRXZaVEFhaXljZ09GMGRKWmZuQ3RQejJxRVlURExobk83MXArSHdRMkNUcmRjMGlGeDZWbW01Z2dYb2FDZnNLV21ZZzRZZzFOampKcncxUkNPNVJBWEd6QTRHWEsxVUFmQmlocmpIaHR4cDNwbzVOdnlZSklOMEwwU3VKbHlvVEJGVTZyN2wvZTFuSDRMem9PNy9Za1haakp2ZVYxKy84MzNudnpqajFjWExpNHUxdXYxNmVucGdyTHE3U2Z2L3ZEbnYvMEExMlhBenpiZGdMLzVabW9abnBWN1laVHFESlhrNjZ5b0ZlalhFTGkxMEJkMU9kb1lmVnZHUnpVMC9uOENEQUNZc1ZxN3ZENWE1d0FBQUFCSlJVNUVya0pnZ2c9PQ"}];
if(window.createjs != null) createjs.Sound.alternateExtensions = ["ogg","mp3","wav"];
openfl.ui.Multitouch.maxTouchPoints = 2;
openfl.ui.Multitouch.supportedGestures = null;
openfl.ui.Multitouch.supportsGestureEvents = false;
ApplicationMain.images = new haxe.ds.StringMap();
ApplicationMain.urlLoaders = new haxe.ds.StringMap();
ApplicationMain.assetsLoaded = 0;
ApplicationMain.total = 0;
openfl.display.DisplayObject.__instanceCount = 0;
openfl.display.DisplayObject.__worldRenderDirty = 0;
openfl.display.DisplayObject.__worldTransformDirty = 0;
com.ie.blitz.blitzone.Main.BASE_WIDTH = 1280;
com.ie.blitz.blitzone.Main.BASE_HEIGHT = 768;
com.ie.blitz.blitzone.Main.PLAY_LOOPS = 9999999;
openfl.events.Event.ACTIVATE = "activate";
openfl.events.Event.ADDED = "added";
openfl.events.Event.ADDED_TO_STAGE = "addedToStage";
openfl.events.Event.CANCEL = "cancel";
openfl.events.Event.CHANGE = "change";
openfl.events.Event.CLOSE = "close";
openfl.events.Event.COMPLETE = "complete";
openfl.events.Event.CONNECT = "connect";
openfl.events.Event.CONTEXT3D_CREATE = "context3DCreate";
openfl.events.Event.DEACTIVATE = "deactivate";
openfl.events.Event.ENTER_FRAME = "enterFrame";
openfl.events.Event.ID3 = "id3";
openfl.events.Event.INIT = "init";
openfl.events.Event.MOUSE_LEAVE = "mouseLeave";
openfl.events.Event.OPEN = "open";
openfl.events.Event.REMOVED = "removed";
openfl.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
openfl.events.Event.RENDER = "render";
openfl.events.Event.RESIZE = "resize";
openfl.events.Event.SCROLL = "scroll";
openfl.events.Event.SELECT = "select";
openfl.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
openfl.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
openfl.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
openfl.events.Event.UNLOAD = "unload";
openfl.events.Event.SOUND_COMPLETE = "soundComplete";
com.ie.blitz.blitzone.GameEvent.TITLE_TOBROWSE = "titleBrowse";
com.ie.blitz.blitzone.GameEvent.TITLE_TOPLAY = "titlePlay";
com.ie.blitz.blitzone.GameEvent.PUZZLE_COMPLETED = "puzzleCompleted";
com.ie.blitz.blitzone.GameEvent.PUZZLE_FAILED = "puzzleFailed";
com.ie.blitz.blitzone.GameEvent.PUZZLE_RETRIED = "puzzleRetried";
com.ie.blitz.blitzone.GameEvent.PUZZLE_CONTINUED = "puzzleContinued";
com.ie.blitz.blitzone.GameEvent.PUZZLE_PAUSED = "puzzlePaused";
com.ie.blitz.blitzone.GameEvent.PUZZLE_RESUMED = "puzzleResumed";
com.ie.blitz.blitzone.GameEvent.SHOW_STORE = "showStore";
com.ie.blitz.blitzone.GameEvent.SHOW_STORE2 = "showStore2";
com.ie.blitz.blitzone.GameEvent.SHOW_BESTTIME = "showBesttime";
com.ie.blitz.blitzone.GameEvent.SHOW_COINS = "showCoins";
com.ie.blitz.blitzone.GameEvent.SHOW_GALLERY = "showGallery";
com.ie.blitz.blitzone.GameEvent.NEXT_LEVEL = "nextLevel";
com.ie.blitz.blitzone.GameEvent.UPDATE_VC = "updateVc";
com.ie.blitz.blitzone.PuzzleGame.MAX_DELAY = 17;
com.ie.blitz.blitzone.config.GameConfig.CURRENT_SCORE = 0;
com.ie.blitz.blitzone.config.GameConfig.TOUCH_MODE = false;
com.ie.blitz.blitzone.config.GameConfig.RESET = false;
com.ie.blitz.blitzone.config.GameConfig.PUZZLE_DIVISIONS = 4;
com.ie.blitz.blitzone.config.GameConfig.TIME_LIMIT = 1860;
com.ie.blitz.blitzone.config.GameConfig.TIME_BLINK_START = 360;
com.ie.blitz.blitzone.config.GameConfig.FLASH_MEM_THRESHOLD = 100;
openfl.display.BitmapData.__base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
com.ie.blitz.blitzone.screens.BackgroundBD.resourceType = "image/png";
com.ie.blitz.blitzone.screens.BackgroundBD.resourceName = "__ASSET__:bitmap_com_ie_blitz_blitzone_screens_BackgroundBD";
com.ie.blitz.blitzone.screens.LoaderBar.resourceType = "image/png";
com.ie.blitz.blitzone.screens.LoaderBar.resourceName = "__ASSET__:bitmap_com_ie_blitz_blitzone_screens_LoaderBar";
com.ie.blitz.blitzone.screens.Label.resourceType = "image/png";
com.ie.blitz.blitzone.screens.Label.resourceName = "__ASSET__:bitmap_com_ie_blitz_blitzone_screens_Label";
com.ie.blitz.blitzone.screens.Preloader.BASE_WIDTH = 1280;
com.ie.blitz.blitzone.screens.Preloader.BASE_HEIGHT = 768;
com.indigogaming.wnpdispatcher.WNPEvent.PAUSE = "pause";
com.indigogaming.wnpdispatcher.WNPEvent.UNPAUSE = "unpause";
com.indigogaming.wnpdispatcher.WNPEvent.MUTE = "mute";
com.indigogaming.wnpdispatcher.WNPEvent.UNMUTE = "unmute";
com.indigogaming.wnpdispatcher.WNPEvent.RELOAD = "reload";
com.jamdevera.utils.DisplayUtils.PRESSED_COLOR = new openfl.geom.ColorTransform(.3,.3,.3);
com.jamdevera.utils.sharedobject.SharedObjectManager.DEFAULT_SO_IDENTIFIER = "storage";
com.jamdevera.utils.sharedobject.SharedObjectManagerEvent.SAVE_SUCCESS = "save_success";
com.jamdevera.utils.sharedobject.SharedObjectManagerEvent.SAVE_FAIL = "save_fail";
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
haxe.crypto.Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe.crypto.Base64.BYTES = haxe.io.Bytes.ofString(haxe.crypto.Base64.CHARS);
haxe.ds.ObjectMap.count = 0;
haxe.xml.Parser.escapes = (function($this) {
	var $r;
	var h = new haxe.ds.StringMap();
	h.set("lt","<");
	h.set("gt",">");
	h.set("amp","&");
	h.set("quot","\"");
	h.set("apos","'");
	h.set("nbsp",String.fromCharCode(160));
	$r = h;
	return $r;
}(this));
motion.actuators.SimpleActuator.actuators = new Array();
motion.actuators.SimpleActuator.actuatorsLength = 0;
motion.actuators.SimpleActuator.addedEvent = false;
motion.Actuate.defaultActuator = motion.actuators.SimpleActuator;
motion.Actuate.defaultEase = motion.easing.Expo.get_easeOut();
motion.Actuate.targetLibraries = new haxe.ds.ObjectMap();
openfl.Assets.cache = new openfl.AssetCache();
openfl.Assets.libraries = new haxe.ds.StringMap();
openfl.Assets.dispatcher = new openfl.events.EventDispatcher();
openfl.Assets.initialized = false;
openfl.Lib.__sentWarnings = new haxe.ds.StringMap();
openfl.Lib.__startTime = haxe.Timer.stamp();
openfl.display.BitmapDataChannel.ALPHA = 8;
openfl.display.BitmapDataChannel.BLUE = 4;
openfl.display.BitmapDataChannel.GREEN = 2;
openfl.display.BitmapDataChannel.RED = 1;
openfl.display._CapsStyle.CapsStyle_Impl_.NONE = "butt";
openfl.display._CapsStyle.CapsStyle_Impl_.ROUND = "round";
openfl.display._CapsStyle.CapsStyle_Impl_.SQUARE = "square";
openfl.display.Graphics.TILE_SCALE = 1;
openfl.display.Graphics.TILE_ROTATION = 2;
openfl.display.Graphics.TILE_RGB = 4;
openfl.display.Graphics.TILE_ALPHA = 8;
openfl.display.Graphics.TILE_TRANS_2x2 = 16;
openfl.display.Graphics.TILE_BLEND_NORMAL = 0;
openfl.display.Graphics.TILE_BLEND_ADD = 65536;
openfl.display._JointStyle.JointStyle_Impl_.MITER = "miter";
openfl.display._JointStyle.JointStyle_Impl_.ROUND = "round";
openfl.display._JointStyle.JointStyle_Impl_.BEVEL = "bevel";
openfl.display._StageQuality.StageQuality_Impl_.BEST = "best";
openfl.display._StageQuality.StageQuality_Impl_.HIGH = "high";
openfl.display._StageQuality.StageQuality_Impl_.MEDIUM = "medium";
openfl.display._StageQuality.StageQuality_Impl_.LOW = "low";
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
openfl.errors.Error.DEFAULT_TO_STRING = "Error";
openfl.events.TextEvent.LINK = "link";
openfl.events.TextEvent.TEXT_INPUT = "textInput";
openfl.events.ErrorEvent.ERROR = "error";
openfl.events._EventPhase.EventPhase_Impl_.CAPTURING_PHASE = 0;
openfl.events._EventPhase.EventPhase_Impl_.AT_TARGET = 1;
openfl.events._EventPhase.EventPhase_Impl_.BUBBLING_PHASE = 2;
openfl.events.FocusEvent.FOCUS_IN = "focusIn";
openfl.events.FocusEvent.FOCUS_OUT = "focusOut";
openfl.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
openfl.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
openfl.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
openfl.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
openfl.events.IOErrorEvent.IO_ERROR = "ioError";
openfl.events.KeyboardEvent.KEY_DOWN = "keyDown";
openfl.events.KeyboardEvent.KEY_UP = "keyUp";
openfl.events.MouseEvent.CLICK = "click";
openfl.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
openfl.events.MouseEvent.MIDDLE_CLICK = "middleClick";
openfl.events.MouseEvent.MIDDLE_MOUSE_DOWN = "middleMouseDown";
openfl.events.MouseEvent.MIDDLE_MOUSE_UP = "middleMouseUp";
openfl.events.MouseEvent.MOUSE_DOWN = "mouseDown";
openfl.events.MouseEvent.MOUSE_MOVE = "mouseMove";
openfl.events.MouseEvent.MOUSE_OUT = "mouseOut";
openfl.events.MouseEvent.MOUSE_OVER = "mouseOver";
openfl.events.MouseEvent.MOUSE_UP = "mouseUp";
openfl.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
openfl.events.MouseEvent.RIGHT_CLICK = "rightClick";
openfl.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
openfl.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
openfl.events.MouseEvent.ROLL_OUT = "rollOut";
openfl.events.MouseEvent.ROLL_OVER = "rollOver";
openfl.events.ProgressEvent.PROGRESS = "progress";
openfl.events.ProgressEvent.SOCKET_DATA = "socketData";
openfl.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
openfl.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
openfl.events.TouchEvent.TOUCH_END = "touchEnd";
openfl.events.TouchEvent.TOUCH_MOVE = "touchMove";
openfl.events.TouchEvent.TOUCH_OUT = "touchOut";
openfl.events.TouchEvent.TOUCH_OVER = "touchOver";
openfl.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
openfl.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
openfl.events.TouchEvent.TOUCH_TAP = "touchTap";
openfl.geom.Matrix.__identity = new openfl.geom.Matrix();
openfl.media.Sound.__registeredSounds = new haxe.ds.StringMap();
openfl.net.URLRequestMethod.DELETE = "DELETE";
openfl.net.URLRequestMethod.GET = "GET";
openfl.net.URLRequestMethod.HEAD = "HEAD";
openfl.net.URLRequestMethod.OPTIONS = "OPTIONS";
openfl.net.URLRequestMethod.POST = "POST";
openfl.net.URLRequestMethod.PUT = "PUT";
openfl.system.ApplicationDomain.currentDomain = new openfl.system.ApplicationDomain(null);
openfl.system.Capabilities.hasAccessibility = false;
openfl.system.SecurityDomain.currentDomain = new openfl.system.SecurityDomain();
openfl.system.System.useCodePage = false;
openfl.text._AntiAliasType.AntiAliasType_Impl_.ADVANCED = "advanced";
openfl.text._AntiAliasType.AntiAliasType_Impl_.NORMAL = "normal";
openfl.ui._KeyLocation.KeyLocation_Impl_.STANDARD = 0;
openfl.ui._KeyLocation.KeyLocation_Impl_.LEFT = 1;
openfl.ui._KeyLocation.KeyLocation_Impl_.RIGHT = 2;
openfl.ui._KeyLocation.KeyLocation_Impl_.NUM_PAD = 3;
openfl.ui.Keyboard.NUMBER_0 = 48;
openfl.ui.Keyboard.NUMBER_1 = 49;
openfl.ui.Keyboard.NUMBER_2 = 50;
openfl.ui.Keyboard.NUMBER_3 = 51;
openfl.ui.Keyboard.NUMBER_4 = 52;
openfl.ui.Keyboard.NUMBER_5 = 53;
openfl.ui.Keyboard.NUMBER_6 = 54;
openfl.ui.Keyboard.NUMBER_7 = 55;
openfl.ui.Keyboard.NUMBER_8 = 56;
openfl.ui.Keyboard.NUMBER_9 = 57;
openfl.ui.Keyboard.A = 65;
openfl.ui.Keyboard.B = 66;
openfl.ui.Keyboard.C = 67;
openfl.ui.Keyboard.D = 68;
openfl.ui.Keyboard.E = 69;
openfl.ui.Keyboard.F = 70;
openfl.ui.Keyboard.G = 71;
openfl.ui.Keyboard.H = 72;
openfl.ui.Keyboard.I = 73;
openfl.ui.Keyboard.J = 74;
openfl.ui.Keyboard.K = 75;
openfl.ui.Keyboard.L = 76;
openfl.ui.Keyboard.M = 77;
openfl.ui.Keyboard.N = 78;
openfl.ui.Keyboard.O = 79;
openfl.ui.Keyboard.P = 80;
openfl.ui.Keyboard.Q = 81;
openfl.ui.Keyboard.R = 82;
openfl.ui.Keyboard.S = 83;
openfl.ui.Keyboard.T = 84;
openfl.ui.Keyboard.U = 85;
openfl.ui.Keyboard.V = 86;
openfl.ui.Keyboard.W = 87;
openfl.ui.Keyboard.X = 88;
openfl.ui.Keyboard.Y = 89;
openfl.ui.Keyboard.Z = 90;
openfl.ui.Keyboard.NUMPAD_0 = 96;
openfl.ui.Keyboard.NUMPAD_1 = 97;
openfl.ui.Keyboard.NUMPAD_2 = 98;
openfl.ui.Keyboard.NUMPAD_3 = 99;
openfl.ui.Keyboard.NUMPAD_4 = 100;
openfl.ui.Keyboard.NUMPAD_5 = 101;
openfl.ui.Keyboard.NUMPAD_6 = 102;
openfl.ui.Keyboard.NUMPAD_7 = 103;
openfl.ui.Keyboard.NUMPAD_8 = 104;
openfl.ui.Keyboard.NUMPAD_9 = 105;
openfl.ui.Keyboard.NUMPAD_MULTIPLY = 106;
openfl.ui.Keyboard.NUMPAD_ADD = 107;
openfl.ui.Keyboard.NUMPAD_ENTER = 108;
openfl.ui.Keyboard.NUMPAD_SUBTRACT = 109;
openfl.ui.Keyboard.NUMPAD_DECIMAL = 110;
openfl.ui.Keyboard.NUMPAD_DIVIDE = 111;
openfl.ui.Keyboard.F1 = 112;
openfl.ui.Keyboard.F2 = 113;
openfl.ui.Keyboard.F3 = 114;
openfl.ui.Keyboard.F4 = 115;
openfl.ui.Keyboard.F5 = 116;
openfl.ui.Keyboard.F6 = 117;
openfl.ui.Keyboard.F7 = 118;
openfl.ui.Keyboard.F8 = 119;
openfl.ui.Keyboard.F9 = 120;
openfl.ui.Keyboard.F10 = 121;
openfl.ui.Keyboard.F11 = 122;
openfl.ui.Keyboard.F12 = 123;
openfl.ui.Keyboard.F13 = 124;
openfl.ui.Keyboard.F14 = 125;
openfl.ui.Keyboard.F15 = 126;
openfl.ui.Keyboard.BACKSPACE = 8;
openfl.ui.Keyboard.TAB = 9;
openfl.ui.Keyboard.ALTERNATE = 18;
openfl.ui.Keyboard.ENTER = 13;
openfl.ui.Keyboard.COMMAND = 15;
openfl.ui.Keyboard.SHIFT = 16;
openfl.ui.Keyboard.CONTROL = 17;
openfl.ui.Keyboard.CAPS_LOCK = 20;
openfl.ui.Keyboard.NUMPAD = 21;
openfl.ui.Keyboard.ESCAPE = 27;
openfl.ui.Keyboard.SPACE = 32;
openfl.ui.Keyboard.PAGE_UP = 33;
openfl.ui.Keyboard.PAGE_DOWN = 34;
openfl.ui.Keyboard.END = 35;
openfl.ui.Keyboard.HOME = 36;
openfl.ui.Keyboard.LEFT = 37;
openfl.ui.Keyboard.RIGHT = 39;
openfl.ui.Keyboard.UP = 38;
openfl.ui.Keyboard.DOWN = 40;
openfl.ui.Keyboard.INSERT = 45;
openfl.ui.Keyboard.DELETE = 46;
openfl.ui.Keyboard.NUMLOCK = 144;
openfl.ui.Keyboard.BREAK = 19;
openfl.ui.Keyboard.SEMICOLON = 186;
openfl.ui.Keyboard.EQUAL = 187;
openfl.ui.Keyboard.COMMA = 188;
openfl.ui.Keyboard.MINUS = 189;
openfl.ui.Keyboard.PERIOD = 190;
openfl.ui.Keyboard.SLASH = 191;
openfl.ui.Keyboard.BACKQUOTE = 192;
openfl.ui.Keyboard.LEFTBRACKET = 219;
openfl.ui.Keyboard.BACKSLASH = 220;
openfl.ui.Keyboard.RIGHTBRACKET = 221;
openfl.ui.Keyboard.QUOTE = 222;
openfl.ui.Keyboard.DOM_VK_CANCEL = 3;
openfl.ui.Keyboard.DOM_VK_HELP = 6;
openfl.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
openfl.ui.Keyboard.DOM_VK_TAB = 9;
openfl.ui.Keyboard.DOM_VK_CLEAR = 12;
openfl.ui.Keyboard.DOM_VK_RETURN = 13;
openfl.ui.Keyboard.DOM_VK_ENTER = 14;
openfl.ui.Keyboard.DOM_VK_SHIFT = 16;
openfl.ui.Keyboard.DOM_VK_CONTROL = 17;
openfl.ui.Keyboard.DOM_VK_ALT = 18;
openfl.ui.Keyboard.DOM_VK_PAUSE = 19;
openfl.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
openfl.ui.Keyboard.DOM_VK_ESCAPE = 27;
openfl.ui.Keyboard.DOM_VK_SPACE = 32;
openfl.ui.Keyboard.DOM_VK_PAGE_UP = 33;
openfl.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
openfl.ui.Keyboard.DOM_VK_END = 35;
openfl.ui.Keyboard.DOM_VK_HOME = 36;
openfl.ui.Keyboard.DOM_VK_LEFT = 37;
openfl.ui.Keyboard.DOM_VK_UP = 38;
openfl.ui.Keyboard.DOM_VK_RIGHT = 39;
openfl.ui.Keyboard.DOM_VK_DOWN = 40;
openfl.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
openfl.ui.Keyboard.DOM_VK_INSERT = 45;
openfl.ui.Keyboard.DOM_VK_DELETE = 46;
openfl.ui.Keyboard.DOM_VK_0 = 48;
openfl.ui.Keyboard.DOM_VK_1 = 49;
openfl.ui.Keyboard.DOM_VK_2 = 50;
openfl.ui.Keyboard.DOM_VK_3 = 51;
openfl.ui.Keyboard.DOM_VK_4 = 52;
openfl.ui.Keyboard.DOM_VK_5 = 53;
openfl.ui.Keyboard.DOM_VK_6 = 54;
openfl.ui.Keyboard.DOM_VK_7 = 55;
openfl.ui.Keyboard.DOM_VK_8 = 56;
openfl.ui.Keyboard.DOM_VK_9 = 57;
openfl.ui.Keyboard.DOM_VK_SEMICOLON = 59;
openfl.ui.Keyboard.DOM_VK_EQUALS = 61;
openfl.ui.Keyboard.DOM_VK_A = 65;
openfl.ui.Keyboard.DOM_VK_B = 66;
openfl.ui.Keyboard.DOM_VK_C = 67;
openfl.ui.Keyboard.DOM_VK_D = 68;
openfl.ui.Keyboard.DOM_VK_E = 69;
openfl.ui.Keyboard.DOM_VK_F = 70;
openfl.ui.Keyboard.DOM_VK_G = 71;
openfl.ui.Keyboard.DOM_VK_H = 72;
openfl.ui.Keyboard.DOM_VK_I = 73;
openfl.ui.Keyboard.DOM_VK_J = 74;
openfl.ui.Keyboard.DOM_VK_K = 75;
openfl.ui.Keyboard.DOM_VK_L = 76;
openfl.ui.Keyboard.DOM_VK_M = 77;
openfl.ui.Keyboard.DOM_VK_N = 78;
openfl.ui.Keyboard.DOM_VK_O = 79;
openfl.ui.Keyboard.DOM_VK_P = 80;
openfl.ui.Keyboard.DOM_VK_Q = 81;
openfl.ui.Keyboard.DOM_VK_R = 82;
openfl.ui.Keyboard.DOM_VK_S = 83;
openfl.ui.Keyboard.DOM_VK_T = 84;
openfl.ui.Keyboard.DOM_VK_U = 85;
openfl.ui.Keyboard.DOM_VK_V = 86;
openfl.ui.Keyboard.DOM_VK_W = 87;
openfl.ui.Keyboard.DOM_VK_X = 88;
openfl.ui.Keyboard.DOM_VK_Y = 89;
openfl.ui.Keyboard.DOM_VK_Z = 90;
openfl.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
openfl.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
openfl.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
openfl.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
openfl.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
openfl.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
openfl.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
openfl.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
openfl.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
openfl.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
openfl.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
openfl.ui.Keyboard.DOM_VK_MULTIPLY = 106;
openfl.ui.Keyboard.DOM_VK_ADD = 107;
openfl.ui.Keyboard.DOM_VK_SEPARATOR = 108;
openfl.ui.Keyboard.DOM_VK_SUBTRACT = 109;
openfl.ui.Keyboard.DOM_VK_DECIMAL = 110;
openfl.ui.Keyboard.DOM_VK_DIVIDE = 111;
openfl.ui.Keyboard.DOM_VK_F1 = 112;
openfl.ui.Keyboard.DOM_VK_F2 = 113;
openfl.ui.Keyboard.DOM_VK_F3 = 114;
openfl.ui.Keyboard.DOM_VK_F4 = 115;
openfl.ui.Keyboard.DOM_VK_F5 = 116;
openfl.ui.Keyboard.DOM_VK_F6 = 117;
openfl.ui.Keyboard.DOM_VK_F7 = 118;
openfl.ui.Keyboard.DOM_VK_F8 = 119;
openfl.ui.Keyboard.DOM_VK_F9 = 120;
openfl.ui.Keyboard.DOM_VK_F10 = 121;
openfl.ui.Keyboard.DOM_VK_F11 = 122;
openfl.ui.Keyboard.DOM_VK_F12 = 123;
openfl.ui.Keyboard.DOM_VK_F13 = 124;
openfl.ui.Keyboard.DOM_VK_F14 = 125;
openfl.ui.Keyboard.DOM_VK_F15 = 126;
openfl.ui.Keyboard.DOM_VK_F16 = 127;
openfl.ui.Keyboard.DOM_VK_F17 = 128;
openfl.ui.Keyboard.DOM_VK_F18 = 129;
openfl.ui.Keyboard.DOM_VK_F19 = 130;
openfl.ui.Keyboard.DOM_VK_F20 = 131;
openfl.ui.Keyboard.DOM_VK_F21 = 132;
openfl.ui.Keyboard.DOM_VK_F22 = 133;
openfl.ui.Keyboard.DOM_VK_F23 = 134;
openfl.ui.Keyboard.DOM_VK_F24 = 135;
openfl.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
openfl.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
openfl.ui.Keyboard.DOM_VK_COMMA = 188;
openfl.ui.Keyboard.DOM_VK_PERIOD = 190;
openfl.ui.Keyboard.DOM_VK_SLASH = 191;
openfl.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
openfl.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
openfl.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
openfl.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
openfl.ui.Keyboard.DOM_VK_QUOTE = 222;
openfl.ui.Keyboard.DOM_VK_META = 224;
openfl.ui.Keyboard.DOM_VK_KANA = 21;
openfl.ui.Keyboard.DOM_VK_HANGUL = 21;
openfl.ui.Keyboard.DOM_VK_JUNJA = 23;
openfl.ui.Keyboard.DOM_VK_FINAL = 24;
openfl.ui.Keyboard.DOM_VK_HANJA = 25;
openfl.ui.Keyboard.DOM_VK_KANJI = 25;
openfl.ui.Keyboard.DOM_VK_CONVERT = 28;
openfl.ui.Keyboard.DOM_VK_NONCONVERT = 29;
openfl.ui.Keyboard.DOM_VK_ACEPT = 30;
openfl.ui.Keyboard.DOM_VK_MODECHANGE = 31;
openfl.ui.Keyboard.DOM_VK_SELECT = 41;
openfl.ui.Keyboard.DOM_VK_PRINT = 42;
openfl.ui.Keyboard.DOM_VK_EXECUTE = 43;
openfl.ui.Keyboard.DOM_VK_SLEEP = 95;
openfl.utils.Endian.BIG_ENDIAN = "bigEndian";
openfl.utils.Endian.LITTLE_ENDIAN = "littleEndian";
ApplicationMain.main();
})(typeof window != "undefined" ? window : exports);
