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
	ApplicationMain.preloader = new com.indigo.Preloader();
	openfl.Lib.current.addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var sounds = [];
	var id;
	var image = new Image();
	id = "img/sprites/char_shadow.png";
	ApplicationMain.images.set(id,image);
	image.onload = ApplicationMain.image_onLoad;
	image.src = id;
	ApplicationMain.total++;
	var image1 = new Image();
	id = "img/sprites/citizen1.png";
	ApplicationMain.images.set(id,image1);
	image1.onload = ApplicationMain.image_onLoad;
	image1.src = id;
	ApplicationMain.total++;
	var image2 = new Image();
	id = "img/sprites/citizen2.png";
	ApplicationMain.images.set(id,image2);
	image2.onload = ApplicationMain.image_onLoad;
	image2.src = id;
	ApplicationMain.total++;
	var image3 = new Image();
	id = "img/sprites/citizen5.png";
	ApplicationMain.images.set(id,image3);
	image3.onload = ApplicationMain.image_onLoad;
	image3.src = id;
	ApplicationMain.total++;
	var image4 = new Image();
	id = "img/sprites/citizen6.png";
	ApplicationMain.images.set(id,image4);
	image4.onload = ApplicationMain.image_onLoad;
	image4.src = id;
	ApplicationMain.total++;
	var image5 = new Image();
	id = "img/sprites/heart.png";
	ApplicationMain.images.set(id,image5);
	image5.onload = ApplicationMain.image_onLoad;
	image5.src = id;
	ApplicationMain.total++;
	var image6 = new Image();
	id = "img/sprites/vfxpomf.png";
	ApplicationMain.images.set(id,image6);
	image6.onload = ApplicationMain.image_onLoad;
	image6.src = id;
	ApplicationMain.total++;
	var image7 = new Image();
	id = "img/sprites/vfxsplash.png";
	ApplicationMain.images.set(id,image7);
	image7.onload = ApplicationMain.image_onLoad;
	image7.src = id;
	ApplicationMain.total++;
	var image8 = new Image();
	id = "img/sprites/wolf1.png";
	ApplicationMain.images.set(id,image8);
	image8.onload = ApplicationMain.image_onLoad;
	image8.src = id;
	ApplicationMain.total++;
	var image9 = new Image();
	id = "img/sprites/wolf2.png";
	ApplicationMain.images.set(id,image9);
	image9.onload = ApplicationMain.image_onLoad;
	image9.src = id;
	ApplicationMain.total++;
	var image10 = new Image();
	id = "img/stage_assets_BACK.png";
	ApplicationMain.images.set(id,image10);
	image10.onload = ApplicationMain.image_onLoad;
	image10.src = id;
	ApplicationMain.total++;
	var image11 = new Image();
	id = "img/stage_assets_BG.png";
	ApplicationMain.images.set(id,image11);
	image11.onload = ApplicationMain.image_onLoad;
	image11.src = id;
	ApplicationMain.total++;
	var image12 = new Image();
	id = "img/stage_assets_CASTLE.png";
	ApplicationMain.images.set(id,image12);
	image12.onload = ApplicationMain.image_onLoad;
	image12.src = id;
	ApplicationMain.total++;
	var image13 = new Image();
	id = "img/stage_assets_GATE.png";
	ApplicationMain.images.set(id,image13);
	image13.onload = ApplicationMain.image_onLoad;
	image13.src = id;
	ApplicationMain.total++;
	var image14 = new Image();
	id = "img/stage_assets_PLATFORM.png";
	ApplicationMain.images.set(id,image14);
	image14.onload = ApplicationMain.image_onLoad;
	image14.src = id;
	ApplicationMain.total++;
	var image15 = new Image();
	id = "img/ui/asset_click_to_play_container.png";
	ApplicationMain.images.set(id,image15);
	image15.onload = ApplicationMain.image_onLoad;
	image15.src = id;
	ApplicationMain.total++;
	var image16 = new Image();
	id = "img/ui/asset_exitBtn_idle.png";
	ApplicationMain.images.set(id,image16);
	image16.onload = ApplicationMain.image_onLoad;
	image16.src = id;
	ApplicationMain.total++;
	var image17 = new Image();
	id = "img/ui/asset_exitBtn_pressed.png";
	ApplicationMain.images.set(id,image17);
	image17.onload = ApplicationMain.image_onLoad;
	image17.src = id;
	ApplicationMain.total++;
	var image18 = new Image();
	id = "img/ui/asset_smallBtn_idle.png";
	ApplicationMain.images.set(id,image18);
	image18.onload = ApplicationMain.image_onLoad;
	image18.src = id;
	ApplicationMain.total++;
	var image19 = new Image();
	id = "img/ui/asset_smallBtn_pressed.png";
	ApplicationMain.images.set(id,image19);
	image19.onload = ApplicationMain.image_onLoad;
	image19.src = id;
	ApplicationMain.total++;
	var image20 = new Image();
	id = "img/ui/asset_title_screen.png";
	ApplicationMain.images.set(id,image20);
	image20.onload = ApplicationMain.image_onLoad;
	image20.src = id;
	ApplicationMain.total++;
	var image21 = new Image();
	id = "img/ui/btn_play_pressed_revised.png";
	ApplicationMain.images.set(id,image21);
	image21.onload = ApplicationMain.image_onLoad;
	image21.src = id;
	ApplicationMain.total++;
	var image22 = new Image();
	id = "img/ui/btn_play_revised.png";
	ApplicationMain.images.set(id,image22);
	image22.onload = ApplicationMain.image_onLoad;
	image22.src = id;
	ApplicationMain.total++;
	var image23 = new Image();
	id = "img/ui/btn_restart_idle.png";
	ApplicationMain.images.set(id,image23);
	image23.onload = ApplicationMain.image_onLoad;
	image23.src = id;
	ApplicationMain.total++;
	var image24 = new Image();
	id = "img/ui/btn_restart_press.png";
	ApplicationMain.images.set(id,image24);
	image24.onload = ApplicationMain.image_onLoad;
	image24.src = id;
	ApplicationMain.total++;
	var image25 = new Image();
	id = "img/ui/left_btn.png";
	ApplicationMain.images.set(id,image25);
	image25.onload = ApplicationMain.image_onLoad;
	image25.src = id;
	ApplicationMain.total++;
	var image26 = new Image();
	id = "img/ui/right_btn.png";
	ApplicationMain.images.set(id,image26);
	image26.onload = ApplicationMain.image_onLoad;
	image26.src = id;
	ApplicationMain.total++;
	var image27 = new Image();
	id = "img/ui/tut_content_01.png";
	ApplicationMain.images.set(id,image27);
	image27.onload = ApplicationMain.image_onLoad;
	image27.src = id;
	ApplicationMain.total++;
	var image28 = new Image();
	id = "img/ui/tut_content_02.png";
	ApplicationMain.images.set(id,image28);
	image28.onload = ApplicationMain.image_onLoad;
	image28.src = id;
	ApplicationMain.total++;
	var image29 = new Image();
	id = "img/ui/tut_content_03.png";
	ApplicationMain.images.set(id,image29);
	image29.onload = ApplicationMain.image_onLoad;
	image29.src = id;
	ApplicationMain.total++;
	var image30 = new Image();
	id = "img/ui/tut_content_04.png";
	ApplicationMain.images.set(id,image30);
	image30.onload = ApplicationMain.image_onLoad;
	image30.src = id;
	ApplicationMain.total++;
	var image31 = new Image();
	id = "img/ui/tut_content_05.png";
	ApplicationMain.images.set(id,image31);
	image31.onload = ApplicationMain.image_onLoad;
	image31.src = id;
	ApplicationMain.total++;
	var image32 = new Image();
	id = "img/ui/tut_content_06.png";
	ApplicationMain.images.set(id,image32);
	image32.onload = ApplicationMain.image_onLoad;
	image32.src = id;
	ApplicationMain.total++;
	var image33 = new Image();
	id = "img/ui/ui_bg_preloader.png";
	ApplicationMain.images.set(id,image33);
	image33.onload = ApplicationMain.image_onLoad;
	image33.src = id;
	ApplicationMain.total++;
	var image34 = new Image();
	id = "img/ui/ui_gameover_container.png";
	ApplicationMain.images.set(id,image34);
	image34.onload = ApplicationMain.image_onLoad;
	image34.src = id;
	ApplicationMain.total++;
	var image35 = new Image();
	id = "img/ui/ui_life_container.png";
	ApplicationMain.images.set(id,image35);
	image35.onload = ApplicationMain.image_onLoad;
	image35.src = id;
	ApplicationMain.total++;
	var image36 = new Image();
	id = "img/ui/ui_loading_bar.png";
	ApplicationMain.images.set(id,image36);
	image36.onload = ApplicationMain.image_onLoad;
	image36.src = id;
	ApplicationMain.total++;
	var image37 = new Image();
	id = "img/ui/ui_pause_container.png";
	ApplicationMain.images.set(id,image37);
	image37.onload = ApplicationMain.image_onLoad;
	image37.src = id;
	ApplicationMain.total++;
	var image38 = new Image();
	id = "img/ui/ui_score_wave_container.png";
	ApplicationMain.images.set(id,image38);
	image38.onload = ApplicationMain.image_onLoad;
	image38.src = id;
	ApplicationMain.total++;
	var image39 = new Image();
	id = "img/ui/ui_tutorial_container.png";
	ApplicationMain.images.set(id,image39);
	image39.onload = ApplicationMain.image_onLoad;
	image39.src = id;
	ApplicationMain.total++;
	var urlLoader = new openfl.net.URLLoader();
	urlLoader.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/enemies.json",urlLoader);
	ApplicationMain.total++;
	var urlLoader1 = new openfl.net.URLLoader();
	urlLoader1.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/citizen1-behavior.json",urlLoader1);
	ApplicationMain.total++;
	var urlLoader2 = new openfl.net.URLLoader();
	urlLoader2.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/citizen1.json",urlLoader2);
	ApplicationMain.total++;
	var urlLoader3 = new openfl.net.URLLoader();
	urlLoader3.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/citizen2-behavior.json",urlLoader3);
	ApplicationMain.total++;
	var urlLoader4 = new openfl.net.URLLoader();
	urlLoader4.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/citizen2.json",urlLoader4);
	ApplicationMain.total++;
	var urlLoader5 = new openfl.net.URLLoader();
	urlLoader5.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/citizen5-behavior.json",urlLoader5);
	ApplicationMain.total++;
	var urlLoader6 = new openfl.net.URLLoader();
	urlLoader6.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/citizen5.json",urlLoader6);
	ApplicationMain.total++;
	var urlLoader7 = new openfl.net.URLLoader();
	urlLoader7.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/citizen6-behavior.json",urlLoader7);
	ApplicationMain.total++;
	var urlLoader8 = new openfl.net.URLLoader();
	urlLoader8.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/citizen6.json",urlLoader8);
	ApplicationMain.total++;
	var urlLoader9 = new openfl.net.URLLoader();
	urlLoader9.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/heart-behavior.json",urlLoader9);
	ApplicationMain.total++;
	var urlLoader10 = new openfl.net.URLLoader();
	urlLoader10.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/heart.json",urlLoader10);
	ApplicationMain.total++;
	var urlLoader11 = new openfl.net.URLLoader();
	urlLoader11.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/vfxpomf-behavior.json",urlLoader11);
	ApplicationMain.total++;
	var urlLoader12 = new openfl.net.URLLoader();
	urlLoader12.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/vfxpomf.json",urlLoader12);
	ApplicationMain.total++;
	var urlLoader13 = new openfl.net.URLLoader();
	urlLoader13.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/vfxsplash-behavior.json",urlLoader13);
	ApplicationMain.total++;
	var urlLoader14 = new openfl.net.URLLoader();
	urlLoader14.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/vfxsplash.json",urlLoader14);
	ApplicationMain.total++;
	var urlLoader15 = new openfl.net.URLLoader();
	urlLoader15.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/wolf1-behavior.json",urlLoader15);
	ApplicationMain.total++;
	var urlLoader16 = new openfl.net.URLLoader();
	urlLoader16.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/wolf1.json",urlLoader16);
	ApplicationMain.total++;
	var urlLoader17 = new openfl.net.URLLoader();
	urlLoader17.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/wolf2-behavior.json",urlLoader17);
	ApplicationMain.total++;
	var urlLoader18 = new openfl.net.URLLoader();
	urlLoader18.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedata/game/wolf2.json",urlLoader18);
	ApplicationMain.total++;
	var urlLoader19 = new openfl.net.URLLoader();
	urlLoader19.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("data/spritedatalink.json",urlLoader19);
	ApplicationMain.total++;
	var urlLoader20 = new openfl.net.URLLoader();
	urlLoader20.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("font/antrf_-webfont.eot",urlLoader20);
	ApplicationMain.total++;
	var urlLoader21 = new openfl.net.URLLoader();
	urlLoader21.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("font/antrf_-webfont.svg",urlLoader21);
	ApplicationMain.total++;
	var urlLoader22 = new openfl.net.URLLoader();
	urlLoader22.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("font/antrf_-webfont.woff",urlLoader22);
	ApplicationMain.total++;
	var urlLoader23 = new openfl.net.URLLoader();
	urlLoader23.set_dataFormat(openfl.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("font/antrf_-webfont.woff2",urlLoader23);
	ApplicationMain.total++;
	var sound = haxe.io.Path.withoutExtension("snd/1upSFX.mp3");
	if(!HxOverrides.remove(sounds,sound)) ApplicationMain.total++;
	sounds.push(sound);
	var sound1 = haxe.io.Path.withoutExtension("snd/1upSFX.ogg");
	if(!HxOverrides.remove(sounds,sound1)) ApplicationMain.total++;
	sounds.push(sound1);
	var sound2 = haxe.io.Path.withoutExtension("snd/1upSFX.wav");
	if(!HxOverrides.remove(sounds,sound2)) ApplicationMain.total++;
	sounds.push(sound2);
	var sound3 = haxe.io.Path.withoutExtension("snd/ButtonSFX.mp3");
	if(!HxOverrides.remove(sounds,sound3)) ApplicationMain.total++;
	sounds.push(sound3);
	var sound4 = haxe.io.Path.withoutExtension("snd/ButtonSFX.ogg");
	if(!HxOverrides.remove(sounds,sound4)) ApplicationMain.total++;
	sounds.push(sound4);
	var sound5 = haxe.io.Path.withoutExtension("snd/ButtonSFX.wav");
	if(!HxOverrides.remove(sounds,sound5)) ApplicationMain.total++;
	sounds.push(sound5);
	var sound6 = haxe.io.Path.withoutExtension("snd/CandyEnterSFX.mp3");
	if(!HxOverrides.remove(sounds,sound6)) ApplicationMain.total++;
	sounds.push(sound6);
	var sound7 = haxe.io.Path.withoutExtension("snd/CandyEnterSFX.ogg");
	if(!HxOverrides.remove(sounds,sound7)) ApplicationMain.total++;
	sounds.push(sound7);
	var sound8 = haxe.io.Path.withoutExtension("snd/CandyEnterSFX.wav");
	if(!HxOverrides.remove(sounds,sound8)) ApplicationMain.total++;
	sounds.push(sound8);
	var sound9 = haxe.io.Path.withoutExtension("snd/DogWhimperSFX.mp3");
	if(!HxOverrides.remove(sounds,sound9)) ApplicationMain.total++;
	sounds.push(sound9);
	var sound10 = haxe.io.Path.withoutExtension("snd/DogWhimperSFX.ogg");
	if(!HxOverrides.remove(sounds,sound10)) ApplicationMain.total++;
	sounds.push(sound10);
	var sound11 = haxe.io.Path.withoutExtension("snd/DogWhimperSFX.wav");
	if(!HxOverrides.remove(sounds,sound11)) ApplicationMain.total++;
	sounds.push(sound11);
	var sound12 = haxe.io.Path.withoutExtension("snd/GateCloseSFX.mp3");
	if(!HxOverrides.remove(sounds,sound12)) ApplicationMain.total++;
	sounds.push(sound12);
	var sound13 = haxe.io.Path.withoutExtension("snd/GateCloseSFX.ogg");
	if(!HxOverrides.remove(sounds,sound13)) ApplicationMain.total++;
	sounds.push(sound13);
	var sound14 = haxe.io.Path.withoutExtension("snd/GateCloseSFX.wav");
	if(!HxOverrides.remove(sounds,sound14)) ApplicationMain.total++;
	sounds.push(sound14);
	var sound15 = haxe.io.Path.withoutExtension("snd/GateHitSFX.mp3");
	if(!HxOverrides.remove(sounds,sound15)) ApplicationMain.total++;
	sounds.push(sound15);
	var sound16 = haxe.io.Path.withoutExtension("snd/GateHitSFX.ogg");
	if(!HxOverrides.remove(sounds,sound16)) ApplicationMain.total++;
	sounds.push(sound16);
	var sound17 = haxe.io.Path.withoutExtension("snd/GateHitSFX.wav");
	if(!HxOverrides.remove(sounds,sound17)) ApplicationMain.total++;
	sounds.push(sound17);
	var sound18 = haxe.io.Path.withoutExtension("snd/SplashSFX.mp3");
	if(!HxOverrides.remove(sounds,sound18)) ApplicationMain.total++;
	sounds.push(sound18);
	var sound19 = haxe.io.Path.withoutExtension("snd/SplashSFX.ogg");
	if(!HxOverrides.remove(sounds,sound19)) ApplicationMain.total++;
	sounds.push(sound19);
	var sound20 = haxe.io.Path.withoutExtension("snd/SplashSFX.wav");
	if(!HxOverrides.remove(sounds,sound20)) ApplicationMain.total++;
	sounds.push(sound20);
	var sound21 = haxe.io.Path.withoutExtension("snd/WolfEnterSFX.mp3");
	if(!HxOverrides.remove(sounds,sound21)) ApplicationMain.total++;
	sounds.push(sound21);
	var sound22 = haxe.io.Path.withoutExtension("snd/WolfEnterSFX.ogg");
	if(!HxOverrides.remove(sounds,sound22)) ApplicationMain.total++;
	sounds.push(sound22);
	var sound23 = haxe.io.Path.withoutExtension("snd/WolfEnterSFX.wav");
	if(!HxOverrides.remove(sounds,sound23)) ApplicationMain.total++;
	sounds.push(sound23);
	if(ApplicationMain.total == 0) ApplicationMain.start(); else {
		var $it0 = ApplicationMain.urlLoaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var urlLoader24 = ApplicationMain.urlLoaders.get(path);
			urlLoader24.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader24.load(new openfl.net.URLRequest(path));
		}
		var _g = 0;
		while(_g < sounds.length) {
			var soundName = sounds[_g];
			++_g;
			var sound24 = new openfl.media.Sound();
			sound24.addEventListener(openfl.events.Event.COMPLETE,ApplicationMain.sound_onComplete);
			sound24.addEventListener(openfl.events.IOErrorEvent.IO_ERROR,ApplicationMain.sound_onIOError);
			sound24.load(new openfl.net.URLRequest(soundName + ".ogg"));
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
	var _g1 = Type.getClassFields(com.indigo.Main);
	while(_g < _g1.length) {
		var methodName = _g1[_g];
		++_g;
		if(methodName == "main") {
			hasMain = true;
			break;
		}
	}
	if(hasMain) Reflect.callMethod(com.indigo.Main,Reflect.field(com.indigo.Main,"main"),[]); else {
		var instance = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(instance,openfl.display.DisplayObject)) openfl.Lib.current.addChild(instance); else {
			haxe.Log.trace("Error: No entry point found",{ fileName : "ApplicationMain.hx", lineNumber : 982, className : "ApplicationMain", methodName : "preloader_onComplete"});
			haxe.Log.trace("If you are using DCE with a static main, you may need to @:keep the function",{ fileName : "ApplicationMain.hx", lineNumber : 983, className : "ApplicationMain", methodName : "preloader_onComplete"});
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
com.indigo = {};
com.indigo.Main = function() {
	openfl.display.Sprite.call(this);
	this.addEventListener(openfl.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
};
$hxClasses["com.indigo.Main"] = com.indigo.Main;
com.indigo.Main.__name__ = ["com","indigo","Main"];
com.indigo.Main.main = function() {
	openfl.Lib.current.stage.align = openfl.display.StageAlign.TOP_LEFT;
	openfl.Lib.current.stage.scaleMode = openfl.display.StageScaleMode.NO_SCALE;
	openfl.Lib.current.addChild(new com.indigo.Main());
};
com.indigo.Main.__super__ = openfl.display.Sprite;
com.indigo.Main.prototype = $extend(openfl.display.Sprite.prototype,{
	resize: function(e) {
		if(!this.inited) this.init();
	}
	,init: function() {
		if(this.inited) return;
		this.inited = true;
		com.indigo.models.Enemy.initialize("data/enemies.json");
		com.tkb.utils.TrigUtil.initialize();
		com.utils.ResizeUtility.initialize(640,384,1280,768);
		com.tkb.controllers.DisplayManager.initialize(this);
		com.tkb.controllers.UpdateManager.initialize();
		com.indigo.controllers.SoundManager.initialize();
		com.indigo.controllers.GameManager.intialize();
		com.indigo.controllers.WaveManager.initialize();
		com.tkb.ui.MouseInputLayer.initialize(640,384);
		com.indigo.utils.UIBlock.initialize();
		com.indigo.pages.TitleScreen.initialize();
		com.indigo.ui.HowToPlayPopup.initialize();
		com.indigo.ui.PausePopup.initialize();
		com.indigo.pages.GameOverScreen.initialize();
		com.indigo.controllers.GameAssetsManager.initialize($bind(this,this.onInitializedGraphics));
	}
	,onInitializedGraphics: function() {
		com.indigo.pages.TitleScreen.showTitleScreen();
	}
	,added: function(e) {
		this.removeEventListener(openfl.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
		this.stage.addEventListener(openfl.events.Event.RESIZE,$bind(this,this.resize));
		this.init();
	}
	,__class__: com.indigo.Main
});
var DocumentClass = function() {
	this.stage = openfl.Lib.current.stage;
	com.indigo.Main.call(this);
	this.dispatchEvent(new openfl.events.Event(openfl.events.Event.ADDED_TO_STAGE,false,false));
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = com.indigo.Main;
DocumentClass.prototype = $extend(com.indigo.Main.prototype,{
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
	id = "img/sprites/char_shadow.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/sprites/citizen1.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/sprites/citizen2.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/sprites/citizen5.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/sprites/citizen6.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/sprites/heart.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/sprites/vfxpomf.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/sprites/vfxsplash.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/sprites/wolf1.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/sprites/wolf2.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/stage_assets_BACK.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/stage_assets_BG.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/stage_assets_CASTLE.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/stage_assets_GATE.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/stage_assets_PLATFORM.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/asset_click_to_play_container.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/asset_exitBtn_idle.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/asset_exitBtn_pressed.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/asset_smallBtn_idle.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/asset_smallBtn_pressed.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/asset_title_screen.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/btn_play_pressed_revised.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/btn_play_revised.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/btn_restart_idle.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/btn_restart_press.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/left_btn.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/right_btn.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/tut_content_01.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/tut_content_02.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/tut_content_03.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/tut_content_04.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/tut_content_05.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/tut_content_06.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ui_bg_preloader.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ui_gameover_container.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ui_life_container.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ui_loading_bar.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ui_pause_container.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ui_score_wave_container.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "img/ui/ui_tutorial_container.png";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.IMAGE);
	id = "data/enemies.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/citizen1-behavior.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/citizen1.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/citizen2-behavior.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/citizen2.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/citizen5-behavior.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/citizen5.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/citizen6-behavior.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/citizen6.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/heart-behavior.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/heart.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/vfxpomf-behavior.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/vfxpomf.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/vfxsplash-behavior.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/vfxsplash.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/wolf1-behavior.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/wolf1.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/wolf2-behavior.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedata/game/wolf2.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "data/spritedatalink.json";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "font/antrf_-webfont.eot";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.BINARY);
	id = "font/antrf_-webfont.svg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.TEXT);
	id = "font/antrf_-webfont.ttf";
	this.className.set(id,__ASSET__font_antrf__webfont_ttf);
	this.type.set(id,openfl.AssetType.FONT);
	id = "font/antrf_-webfont.woff";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.BINARY);
	id = "font/antrf_-webfont.woff2";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.BINARY);
	id = "snd/1upSFX.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "snd/1upSFX.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/1upSFX.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/ButtonSFX.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "snd/ButtonSFX.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/ButtonSFX.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/CandyEnterSFX.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "snd/CandyEnterSFX.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/CandyEnterSFX.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/DogWhimperSFX.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "snd/DogWhimperSFX.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/DogWhimperSFX.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/GateCloseSFX.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "snd/GateCloseSFX.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/GateCloseSFX.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/GateHitSFX.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "snd/GateHitSFX.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/GateHitSFX.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/SplashSFX.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "snd/SplashSFX.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/SplashSFX.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/WolfEnterSFX.mp3";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.MUSIC);
	id = "snd/WolfEnterSFX.ogg";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
	id = "snd/WolfEnterSFX.wav";
	this.path.set(id,id);
	this.type.set(id,openfl.AssetType.SOUND);
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
var __ASSET__font_antrf__webfont_ttf = function() {
	openfl.text.Font.call(this);
	this.fontName = "font/antrf_-webfont.ttf";
};
$hxClasses["__ASSET__font_antrf__webfont_ttf"] = __ASSET__font_antrf__webfont_ttf;
__ASSET__font_antrf__webfont_ttf.__name__ = ["__ASSET__font_antrf__webfont_ttf"];
__ASSET__font_antrf__webfont_ttf.__super__ = openfl.text.Font;
__ASSET__font_antrf__webfont_ttf.prototype = $extend(openfl.text.Font.prototype,{
	__class__: __ASSET__font_antrf__webfont_ttf
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
HxOverrides.lastIndexOf = function(a,obj,i) {
	var len = a.length;
	if(i >= len) i = len - 1; else if(i < 0) i += len;
	while(i >= 0) {
		if(a[i] === obj) return i;
		i--;
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
Lambda.has = function(it,elt) {
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(x == elt) return true;
	}
	return false;
};
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
		return 0;
	}
	,getHeight: function() {
		var height = 384;
		if(height > 0) return height; else return openfl.Lib.current.stage.stageHeight;
	}
	,getWidth: function() {
		var width = 640;
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
			pixelValue = openfl.Memory.getI32(position);
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
					pixelValue = openfl.Memory.getI32(position);
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
					pixelValue1 = openfl.Memory.getI32(position1);
					pixelMask1 = pixelValue1 & mask;
					i1 = openfl.display.BitmapData.__ucompare(pixelMask1,thresholdMask1);
					test1 = false;
					if(operation == "==") test1 = i1 == 0; else if(operation == "<") test1 = i1 == -1; else if(operation == ">") test1 = i1 == 1; else if(operation == "!=") test1 = i1 != 0; else if(operation == "<=") test1 = i1 == 0 || i1 == -1; else if(operation == ">=") test1 = i1 == 0 || i1 == 1;
					if(test1) {
						openfl.Memory.setI32(position1,color);
						hits1++;
					} else if(copySource) openfl.Memory.setI32(position1,openfl.Memory.getI32(canvasMemory + position1));
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
		this.__sourceContext.clearRect(rect.x,rect.y,rect.width,rect.height);
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
com.indigo.BackgroundBD = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	openfl.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(com.indigo.BackgroundBD.preload != null) {
		this.__sourceImage = com.indigo.BackgroundBD.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(com.indigo.BackgroundBD.resourceName),com.indigo.BackgroundBD.resourceType,function(b) {
		if(com.indigo.BackgroundBD.preload == null) com.indigo.BackgroundBD.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["com.indigo.BackgroundBD"] = com.indigo.BackgroundBD;
com.indigo.BackgroundBD.__name__ = ["com","indigo","BackgroundBD"];
com.indigo.BackgroundBD.preload = null;
com.indigo.BackgroundBD.__super__ = openfl.display.BitmapData;
com.indigo.BackgroundBD.prototype = $extend(openfl.display.BitmapData.prototype,{
	__class__: com.indigo.BackgroundBD
});
com.indigo.LoadingTopBD = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	openfl.display.BitmapData.call(this,0,0,transparent,fillRGBA);
	if(com.indigo.LoadingTopBD.preload != null) {
		this.__sourceImage = com.indigo.LoadingTopBD.preload;
		width = this.__sourceImage.width;
		height = this.__sourceImage.height;
	} else this.__loadFromBase64(haxe.Resource.getString(com.indigo.LoadingTopBD.resourceName),com.indigo.LoadingTopBD.resourceType,function(b) {
		if(com.indigo.LoadingTopBD.preload == null) com.indigo.LoadingTopBD.preload = b.__sourceImage;
		if(onload != null) onload(b);
	});
};
$hxClasses["com.indigo.LoadingTopBD"] = com.indigo.LoadingTopBD;
com.indigo.LoadingTopBD.__name__ = ["com","indigo","LoadingTopBD"];
com.indigo.LoadingTopBD.preload = null;
com.indigo.LoadingTopBD.__super__ = openfl.display.BitmapData;
com.indigo.LoadingTopBD.prototype = $extend(openfl.display.BitmapData.prototype,{
	__class__: com.indigo.LoadingTopBD
});
com.indigo.Preloader = function() {
	NMEPreloader.call(this);
	var x = this.getWidth() * 0.317;
	var y = this.getHeight() / 2 - this.get_height() / 2;
	var padding = 0;
	var bg = new openfl.display.Bitmap(new com.indigo.BackgroundBD(640,384));
	this.addChildAt(bg,0);
	this.progressHolder = new openfl.display.Sprite();
	this.progressBmp = new openfl.display.Bitmap(new com.indigo.LoadingTopBD(235,20));
	this.fullProgressWidth = 470;
	this.progressRect = new openfl.geom.Rectangle(0,0,0,40);
	this.progressHolder.set_scrollRect(this.progressRect);
	this.progressHolder.set_x(x + padding);
	this.progressHolder.set_y(y + padding);
	this.progressHolder.addChild(this.progressBmp);
	this.addChild(this.progressHolder);
	this.tempText = new openfl.text.TextField();
	this.tempText.set_defaultTextFormat(new openfl.text.TextFormat("Arial",25,16777215,false,false,false,"","",openfl.text.TextFormatAlign.CENTER));
	this.tempText.set_width(500);
	this.tempText.set_x(this.outline.get_x() + (this.outline.get_width() / 2 - this.tempText.get_width() / 2));
	this.tempText.set_y(this.getHeight() / 2 - this.tempText.get_height() / 4 + 4);
	this.addEventListener(openfl.events.Event.ENTER_FRAME,$bind(this,this.onFrame));
};
$hxClasses["com.indigo.Preloader"] = com.indigo.Preloader;
com.indigo.Preloader.__name__ = ["com","indigo","Preloader"];
com.indigo.Preloader.__super__ = NMEPreloader;
com.indigo.Preloader.prototype = $extend(NMEPreloader.prototype,{
	onFrame: function(e) {
	}
	,onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded = 1;
		this.progressRect.width = this.fullProgressWidth * percentLoaded;
		this.progressHolder.set_scrollRect(this.progressRect);
		this.tempText.set_text(Std.string("Loading " + Math.round(percentLoaded * 100) + "%"));
		this.tempText.selectable = false;
	}
	,__class__: com.indigo.Preloader
});
com.indigo.controllers = {};
com.indigo.controllers.GameAssetsManager = function() { };
$hxClasses["com.indigo.controllers.GameAssetsManager"] = com.indigo.controllers.GameAssetsManager;
com.indigo.controllers.GameAssetsManager.__name__ = ["com","indigo","controllers","GameAssetsManager"];
com.indigo.controllers.GameAssetsManager.updateCallback = null;
com.indigo.controllers.GameAssetsManager.spriteData = null;
com.indigo.controllers.GameAssetsManager.spritesheets = null;
com.indigo.controllers.GameAssetsManager.hasInitialized = null;
com.indigo.controllers.GameAssetsManager.initialize = function(callback) {
	com.indigo.controllers.GameAssetsManager.updateCallback = callback;
	com.indigo.controllers.GameAssetsManager.spriteData = JSON.parse(openfl.Assets.getText("data/spritedatalink.json"));
	com.indigo.controllers.GameAssetsManager.spritesheets = new haxe.ds.StringMap();
	com.indigo.controllers.GameAssetsManager.loadSprites();
};
com.indigo.controllers.GameAssetsManager.loadSprites = function() {
	var _g = 0;
	var _g1 = com.indigo.controllers.GameAssetsManager.spriteData;
	while(_g < _g1.length) {
		var sprite = _g1[_g];
		++_g;
		var key = sprite.name;
		var value = com.utils.TexturePackerJSON.parse(openfl.Assets.getText(sprite.spritesheet),openfl.Assets.getText(sprite.behavior),sprite.parentfolder);
		com.indigo.controllers.GameAssetsManager.spritesheets.set(key,value);
	}
	com.indigo.controllers.GameAssetsManager.onLoadComplete();
};
com.indigo.controllers.GameAssetsManager.onLoadComplete = function(obj) {
	com.indigo.controllers.GameAssetsManager.updateCallback();
};
com.tkb = {};
com.tkb.interfaces = {};
com.tkb.interfaces.IDisposable = function() { };
$hxClasses["com.tkb.interfaces.IDisposable"] = com.tkb.interfaces.IDisposable;
com.tkb.interfaces.IDisposable.__name__ = ["com","tkb","interfaces","IDisposable"];
com.tkb.interfaces.IDisposable.prototype = {
	__class__: com.tkb.interfaces.IDisposable
};
com.indigo.controllers.GameManager = function() {
	this.built = false;
	this.score = 0;
	this.life = 30;
};
$hxClasses["com.indigo.controllers.GameManager"] = com.indigo.controllers.GameManager;
com.indigo.controllers.GameManager.__name__ = ["com","indigo","controllers","GameManager"];
com.indigo.controllers.GameManager.__interfaces__ = [com.tkb.interfaces.IDisposable];
com.indigo.controllers.GameManager.UI_BASE_Y = null;
com.indigo.controllers.GameManager.instance = null;
com.indigo.controllers.GameManager.intialize = function() {
	com.indigo.controllers.GameManager.instance = new com.indigo.controllers.GameManager();
	com.indigo.controllers.GameManager.UI_BASE_Y = 384 * 0.15;
};
com.indigo.controllers.GameManager.restart = function() {
	com.indigo.controllers.GameManager.instance.readyGame();
};
com.indigo.controllers.GameManager.end = function() {
	com.indigo.controllers.GameManager.instance.endGame();
	com.indigo.controllers.WaveManager.stop();
	while(com.indigo.controllers.GameManager.runners.length > 0) {
		var runner = com.indigo.controllers.GameManager.runners.pop();
		motion.Actuate.stop(runner);
		com.tkb.controllers.DisplayManager.remove(runner);
		runner.dispose();
	}
};
com.indigo.controllers.GameManager.registerRunner = function(entity) {
	if(Lambda.has(com.indigo.controllers.GameManager.runners,entity)) return;
	com.indigo.controllers.GameManager.runners.push(entity);
};
com.indigo.controllers.GameManager.unregisterRunner = function(entity) {
	var objIndex;
	var _this = com.indigo.controllers.GameManager.runners;
	objIndex = HxOverrides.lastIndexOf(_this,entity,_this.length - 1);
	if(objIndex == -1) return;
	com.indigo.controllers.GameManager.runners.splice(objIndex,1);
};
com.indigo.controllers.GameManager.updateLife = function(amount) {
	com.indigo.controllers.GameManager.instance.life += amount;
	if(com.indigo.controllers.GameManager.instance.life > 99) com.indigo.controllers.GameManager.instance.life = 3;
	if(com.indigo.controllers.GameManager.instance.life < 0) com.indigo.controllers.GameManager.instance.life = 0;
	com.indigo.controllers.WaveManager.updatePlayerLife(com.indigo.controllers.GameManager.instance.life);
	com.indigo.controllers.GameManager.instance.lifeDisplay.set_text("" + com.indigo.controllers.GameManager.instance.life);
};
com.indigo.controllers.GameManager.updateScore = function(amount) {
	com.indigo.controllers.GameManager.instance.scoreDisplay.set_text("" + (com.indigo.controllers.GameManager.instance.score += amount));
	com.indigo.controllers.WaveManager.playerScore = com.indigo.controllers.GameManager.instance.score;
};
com.indigo.controllers.GameManager.updateWave = function(amount) {
	com.indigo.controllers.GameManager.instance.waveDisplay.set_text("" + amount);
};
com.indigo.controllers.GameManager.prototype = {
	build: function(forceHowToPlay) {
		if(forceHowToPlay == null) forceHowToPlay = false;
		if(this.built) {
			com.tkb.controllers.DisplayManager.add(com.tkb.ui.MouseInputLayer.instance,5);
			com.tkb.controllers.DisplayManager.add(this.bg,0);
			com.tkb.controllers.DisplayManager.add(this.bridge,1);
			com.tkb.controllers.DisplayManager.add(this.castleBack,0);
			com.tkb.controllers.DisplayManager.add(this.gateSprite,1);
			com.tkb.controllers.DisplayManager.add(this.castleFront,4);
			com.tkb.controllers.DisplayManager.add(this.waveScoreHolder,4);
			com.tkb.controllers.DisplayManager.add(this.lifeHolder,4);
			this.readyGame(forceHowToPlay);
			return;
		}
		this.built = true;
		var groundHeight = 384 - com.utils.ResizeUtility.adjustSize(452);
		this.directiveY = [];
		this.oppresiveY = [];
		this.bg = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/stage_assets_BG.png"));
		this.bridge = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/stage_assets_PLATFORM.png"));
		this.bridge.set_x(640 - this.bridge.get_width());
		this.bridge.set_y(384 - this.bridge.get_height());
		this.castleFront = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/stage_assets_CASTLE.png"));
		var _g = this.castleFront;
		_g.set_x(_g.get_x() - this.castleFront.get_width() * 0.02);
		this.castleBack = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/stage_assets_BACK.png"));
		this.castleBack.set_x(this.castleFront.get_width() * 0.35);
		this.castleBack.set_y(384 * 0.92 - this.castleBack.get_height());
		this.gateSprite = new openfl.display.Sprite();
		this.gateImage = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/stage_assets_GATE.png"));
		this.gateSprite.addChild(this.gateImage);
		this.gateImage.set_y(-271 + 271 * 0.3512);
		this.gateSprite.set_x(this.castleFront.get_width() * 0.4);
		this.gateSprite.set_y(384 * 0.87 - 271);
		this.gateSprite.set_scrollRect(new openfl.geom.Rectangle(0,0,53,271));
		this.pauseButton = new openfl.display.Sprite();
		this.pauseButton.addChild(new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/asset_pauseBtn_idle.png"),openfl.Assets.getBitmapData("img/ui/asset_pauseBtn_pressed.png")));
		this.pauseButton.mouseChildren = false;
		this.pauseButton.buttonMode = true;
		this.pauseButton.set_x(640 - this.pauseButton.get_width() * 1.5);
		this.oppresiveY[0] = this.pauseButton.set_y(-this.pauseButton.get_height());
		this.directiveY[0] = com.indigo.controllers.GameManager.UI_BASE_Y - this.pauseButton.get_height() / 2;
		this.lifeHolder = new openfl.display.Sprite();
		this.lifeHolder.addChild(new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/ui_life_container.png")));
		this.lifeDisplay = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.left(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),com.utils.ResizeUtility.adjustSize(84),160),com.utils.ResizeUtility.adjustSize(72)),"30");
		this.lifeDisplay.embedFonts = true;
		com.philipmabanta.tools.display.DisplayObjectTools.setPos(this.lifeDisplay,this.lifeHolder.get_width() * 0.58,this.lifeHolder.get_height() * 0.48 - this.lifeDisplay.get_textHeight() / 2);
		this.lifeHolder.set_x(com.utils.ResizeUtility.adjustSize(20));
		this.oppresiveY[1] = this.lifeHolder.set_y(-this.lifeHolder.get_height());
		this.directiveY[1] = com.indigo.controllers.GameManager.UI_BASE_Y - this.lifeHolder.get_height() / 2;
		this.lifeHolder.addChild(this.lifeDisplay);
		this.waveScoreHolder = new openfl.display.Sprite();
		this.waveScoreHolder.addChild(new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/ui_score_wave_container.png")));
		var scoreLabel = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.left(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),2361626),com.utils.ResizeUtility.adjustSize(150),0),com.utils.ResizeUtility.adjustSize(36)),"SCORE");
		scoreLabel.embedFonts = true;
		scoreLabel.set_height(scoreLabel.get_textHeight() + com.utils.ResizeUtility.adjustSize(10));
		com.philipmabanta.tools.display.DisplayObjectTools.setPos(scoreLabel,this.waveScoreHolder.get_width() * 0.1,this.waveScoreHolder.get_height() * 0.16);
		this.scoreDisplay = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.left(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),this.waveScoreHolder.get_width() * 0.4,0),com.utils.ResizeUtility.adjustSize(24)),"0");
		this.scoreDisplay.embedFonts = true;
		this.scoreDisplay.set_height(this.scoreDisplay.get_textHeight() + com.utils.ResizeUtility.adjustSize(10));
		com.philipmabanta.tools.display.DisplayObjectTools.setPos(this.scoreDisplay,this.waveScoreHolder.get_width() * 0.5,this.waveScoreHolder.get_height() * 0.2);
		var waveLabel = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.left(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),2361626),com.utils.ResizeUtility.adjustSize(150),0),com.utils.ResizeUtility.adjustSize(36)),"WAVE");
		waveLabel.embedFonts = true;
		waveLabel.set_height(this.scoreDisplay.get_textHeight() + com.utils.ResizeUtility.adjustSize(10));
		com.philipmabanta.tools.display.DisplayObjectTools.setPos(waveLabel,this.waveScoreHolder.get_width() * 0.1,this.waveScoreHolder.get_height() * 0.52);
		this.waveDisplay = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.left(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),com.utils.ResizeUtility.adjustSize(150),0),com.utils.ResizeUtility.adjustSize(24)),"0");
		this.waveDisplay.embedFonts = true;
		this.waveDisplay.set_height(this.waveDisplay.get_textHeight() + com.utils.ResizeUtility.adjustSize(10));
		com.philipmabanta.tools.display.DisplayObjectTools.setPos(this.waveDisplay,this.waveScoreHolder.get_width() * 0.5,this.waveScoreHolder.get_height() * 0.55);
		this.waveScoreHolder.set_x(640 / 2 - this.waveScoreHolder.get_width() / 4);
		this.oppresiveY[2] = this.waveScoreHolder.set_y(-this.waveScoreHolder.get_height());
		this.directiveY[2] = com.indigo.controllers.GameManager.UI_BASE_Y - this.waveScoreHolder.get_height() / 2;
		this.waveScoreHolder.addChild(scoreLabel);
		this.waveScoreHolder.addChild(this.scoreDisplay);
		this.waveScoreHolder.addChild(waveLabel);
		this.waveScoreHolder.addChild(this.waveDisplay);
		com.tkb.controllers.DisplayManager.add(com.tkb.ui.MouseInputLayer.instance,5);
		com.tkb.controllers.DisplayManager.add(this.bg,0);
		com.tkb.controllers.DisplayManager.add(this.bridge,1);
		com.tkb.controllers.DisplayManager.add(this.castleBack,0);
		com.tkb.controllers.DisplayManager.add(this.gateSprite,1);
		com.tkb.controllers.DisplayManager.add(this.castleFront,4);
		com.tkb.controllers.DisplayManager.add(this.waveScoreHolder,4);
		com.tkb.controllers.DisplayManager.add(this.lifeHolder,4);
		this.readyGame(forceHowToPlay);
	}
	,readyGame: function(forceHowToPlay) {
		if(forceHowToPlay == null) forceHowToPlay = false;
		this.life = 30;
		this.score = 0;
		this.lifeDisplay.set_text("" + this.life);
		this.scoreDisplay.set_text("" + this.score);
		this.waveDisplay.set_text("" + 1);
		motion.Actuate.tween(this.pauseButton,0.5,{ y : this.directiveY[0]});
		motion.Actuate.tween(this.lifeHolder,0.5,{ y : this.directiveY[1]});
		motion.Actuate.tween(this.waveScoreHolder,0.5,{ y : this.directiveY[2]});
		com.indigo.controllers.WaveManager.resetStats(0,0);
		com.indigo.controllers.WaveManager.seedWave(50,1,5,1,0.05,0,0,0,0,1,1,0,1,1,10);
		if(forceHowToPlay) com.indigo.ui.HowToPlayPopup.showHowToPlay($bind(this,this.startGame)); else {
			var settingsSO = openfl.net.SharedObject.getLocal("HasSeenHowToPlay");
			var settings = settingsSO.data;
			if(settings.once == true) this.startGame(); else {
				settings.once = true;
				settingsSO.flush();
				com.indigo.utils.UIBlock.block();
				com.indigo.ui.HowToPlayPopup.showHowToPlay($bind(this,this.startGame));
			}
		}
	}
	,startGame: function() {
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("pause",$bind(this,this.onPause));
		com.tkb.ui.MouseInputLayer.addCallbackToDown($bind(this,this.dropGate));
		com.tkb.ui.MouseInputLayer.addCallbackToUp($bind(this,this.raiseGate));
		com.indigo.controllers.WaveManager.start();
	}
	,endGame: function() {
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().removeEventListener("pause",$bind(this,this.onPause));
		com.tkb.ui.MouseInputLayer.removeCallbackFromDown($bind(this,this.dropGate));
		com.tkb.ui.MouseInputLayer.removeCallbackFromUp($bind(this,this.raiseGate));
		motion.Actuate.tween(this.pauseButton,0.5,{ y : this.oppresiveY[0]});
		motion.Actuate.tween(this.lifeHolder,0.5,{ y : this.oppresiveY[1]});
		motion.Actuate.tween(this.waveScoreHolder,0.5,{ y : this.oppresiveY[2]});
	}
	,dispose: function() {
		com.tkb.controllers.DisplayManager.remove(com.tkb.ui.MouseInputLayer.instance);
		com.tkb.controllers.DisplayManager.remove(this.bg);
		com.tkb.controllers.DisplayManager.remove(this.bridge);
		com.tkb.controllers.DisplayManager.remove(this.castleBack);
		com.tkb.controllers.DisplayManager.remove(this.gateSprite);
		com.tkb.controllers.DisplayManager.remove(this.castleFront);
		com.tkb.controllers.DisplayManager.remove(this.waveScoreHolder);
		com.tkb.controllers.DisplayManager.remove(this.lifeHolder);
		return this;
	}
	,dropGate: function() {
		motion.Actuate.stop(this.gateImage);
		com.indigo.controllers.SoundManager.playSFX("snd/GateCloseSFX.ogg");
		motion.Actuate.tween(this.gateImage,0.1,{ y : 0}).ease(motion.easing.Quad.get_easeOut());
		com.indigo.controllers.GameManager.isGateOpen = false;
	}
	,raiseGate: function() {
		motion.Actuate.stop(this.gateImage);
		com.indigo.controllers.SoundManager.playSFX("snd/GateCloseSFX.ogg");
		motion.Actuate.tween(this.gateImage,0.1,{ y : -271 + 271 * 0.3512}).ease(motion.easing.Quad.get_easeOut());
		com.indigo.controllers.GameManager.isGateOpen = true;
	}
	,onPause: function(e) {
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
		com.indigo.ui.PausePopup.showPause();
	}
	,__class__: com.indigo.controllers.GameManager
};
com.indigo.controllers.LocalizationManager = function() {
};
$hxClasses["com.indigo.controllers.LocalizationManager"] = com.indigo.controllers.LocalizationManager;
com.indigo.controllers.LocalizationManager.__name__ = ["com","indigo","controllers","LocalizationManager"];
com.indigo.controllers.LocalizationManager.prototype = {
	__class__: com.indigo.controllers.LocalizationManager
};
com.tkb.interfaces.IUpdatable = function() { };
$hxClasses["com.tkb.interfaces.IUpdatable"] = com.tkb.interfaces.IUpdatable;
com.tkb.interfaces.IUpdatable.__name__ = ["com","tkb","interfaces","IUpdatable"];
com.tkb.interfaces.IUpdatable.prototype = {
	__class__: com.tkb.interfaces.IUpdatable
};
com.indigo.controllers.SoundManager = function() {
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("mute",com.indigo.controllers.SoundManager.muteAll);
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("unmute",com.indigo.controllers.SoundManager.unmuteAll);
	com.tkb.controllers.UpdateManager.subscribeAsSystem(this);
};
$hxClasses["com.indigo.controllers.SoundManager"] = com.indigo.controllers.SoundManager;
com.indigo.controllers.SoundManager.__name__ = ["com","indigo","controllers","SoundManager"];
com.indigo.controllers.SoundManager.__interfaces__ = [com.tkb.interfaces.IUpdatable];
com.indigo.controllers.SoundManager.bgmChannel = null;
com.indigo.controllers.SoundManager.sfxChannel = null;
com.indigo.controllers.SoundManager.transformSilent = null;
com.indigo.controllers.SoundManager.transformNormalBGM = null;
com.indigo.controllers.SoundManager.transformNormalSFX = null;
com.indigo.controllers.SoundManager.muteAllSounds = null;
com.indigo.controllers.SoundManager.currentBGMKey = null;
com.indigo.controllers.SoundManager.playList = null;
com.indigo.controllers.SoundManager.instance = null;
com.indigo.controllers.SoundManager.initialize = function(mute) {
	if(mute == null) mute = false;
	com.indigo.controllers.SoundManager.muteAllSounds = mute;
	com.indigo.controllers.SoundManager.transformSilent = new openfl.media.SoundTransform(0,0);
	com.indigo.controllers.SoundManager.transformNormalBGM = new openfl.media.SoundTransform(0.4,0);
	com.indigo.controllers.SoundManager.transformNormalSFX = new openfl.media.SoundTransform(0.8,0);
	com.indigo.controllers.SoundManager.playList = [];
	com.indigo.controllers.SoundManager.instance = new com.indigo.controllers.SoundManager();
};
com.indigo.controllers.SoundManager.playBGM = function(audioKey,loops,fadeIn,duration) {
	if(duration == null) duration = 0.8;
	if(fadeIn == null) fadeIn = false;
	if(loops == null) loops = 9999;
	if(com.indigo.controllers.SoundManager.currentBGMKey == audioKey) return null;
	if(fadeIn) com.indigo.controllers.SoundManager.fadeOutBGM(duration,(function(f,a1,a2,a3,a4) {
		return function() {
			return f(a1,a2,a3,a4);
		};
	})(com.indigo.controllers.SoundManager.fadeInBGM,audioKey,loops,fadeIn,duration)); else {
		if(com.indigo.controllers.SoundManager.bgmChannel != null) com.indigo.controllers.SoundManager.bgmChannel.stop();
		com.indigo.controllers.SoundManager.bgmChannel = openfl.Assets.getSound(audioKey).play(0,loops,new openfl.media.SoundTransform(com.indigo.controllers.SoundManager.muteAllSounds?0:0.4));
	}
	com.indigo.controllers.SoundManager.currentBGMKey = audioKey;
	return com.indigo.controllers.SoundManager.bgmChannel;
};
com.indigo.controllers.SoundManager.fadeOutBGM = function(duration,onComplete) {
	if(duration == null) duration = 0.8;
	if(com.indigo.controllers.SoundManager.bgmChannel == null) {
		if(onComplete != null) onComplete();
		return;
	}
	if(onComplete == null) motion.Actuate.transform(com.indigo.controllers.SoundManager.bgmChannel,duration).sound(0).onComplete(($_=com.indigo.controllers.SoundManager.bgmChannel,$bind($_,$_.stop))); else motion.Actuate.transform(com.indigo.controllers.SoundManager.bgmChannel,duration).sound(0).onComplete(function() {
		com.indigo.controllers.SoundManager.bgmChannel.stop();
		onComplete();
	});
};
com.indigo.controllers.SoundManager.fadeInBGM = function(audioKey,loops,fadeIn,duration,onComplete) {
	if(duration == null) duration = 0.8;
	if(fadeIn == null) fadeIn = false;
	if(loops == null) loops = 9999;
	com.indigo.controllers.SoundManager.bgmChannel = openfl.Assets.getSound(audioKey).play(0,loops,com.indigo.controllers.SoundManager.transformSilent);
	if(onComplete == null) motion.Actuate.transform(com.indigo.controllers.SoundManager.bgmChannel,duration).sound(com.indigo.controllers.SoundManager.muteAllSounds?0:0.4); else motion.Actuate.transform(com.indigo.controllers.SoundManager.bgmChannel,duration).sound(com.indigo.controllers.SoundManager.muteAllSounds?0:0.4).onComplete(onComplete);
};
com.indigo.controllers.SoundManager.playSFX = function(audioKey,loops,fadeIn,duration,volume,panning,onComplete) {
	if(panning == null) panning = 0;
	if(volume == null) volume = 0.8;
	if(duration == null) duration = 0.8;
	if(fadeIn == null) fadeIn = false;
	if(loops == null) loops = 0;
	if(com.indigo.controllers.SoundManager.muteAllSounds) return null;
	if(HxOverrides.indexOf(com.indigo.controllers.SoundManager.playList,audioKey,0) != -1) return null;
	com.indigo.controllers.SoundManager.playList.push(audioKey);
	if(fadeIn) com.indigo.controllers.SoundManager.fadeInSFX(audioKey,loops,fadeIn,duration,volume,panning,onComplete); else {
		var soundTrans = new openfl.media.SoundTransform(volume,panning);
		com.indigo.controllers.SoundManager.sfxChannel = openfl.Assets.getSound(audioKey).play(0,loops,soundTrans);
	}
	return com.indigo.controllers.SoundManager.sfxChannel;
};
com.indigo.controllers.SoundManager.fadeInSFX = function(audioKey,loops,fadeIn,duration,volume,panning,onComplete) {
	if(panning == null) panning = 0;
	if(volume == null) volume = 1;
	if(duration == null) duration = 0.8;
	if(fadeIn == null) fadeIn = false;
	if(loops == null) loops = 0;
	var soundTrans = new openfl.media.SoundTransform(0,panning);
	com.indigo.controllers.SoundManager.sfxChannel = openfl.Assets.getSound(audioKey).play(0,loops,soundTrans);
	if(onComplete == null) motion.Actuate.transform(com.indigo.controllers.SoundManager.sfxChannel,duration).sound(volume); else motion.Actuate.transform(com.indigo.controllers.SoundManager.sfxChannel,duration).sound(volume).onComplete(onComplete);
};
com.indigo.controllers.SoundManager.muteAll = function(e) {
	com.indigo.controllers.SoundManager.muteAllSounds = true;
	com.indigo.controllers.SoundManager.sfxChannel.set_soundTransform(com.indigo.controllers.SoundManager.transformSilent);
};
com.indigo.controllers.SoundManager.unmuteAll = function(e) {
	com.indigo.controllers.SoundManager.muteAllSounds = false;
	com.indigo.controllers.SoundManager.sfxChannel.set_soundTransform(com.indigo.controllers.SoundManager.transformNormalBGM);
	com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
};
com.indigo.controllers.SoundManager.findSound = function() {
};
com.indigo.controllers.SoundManager.prototype = {
	update: function(deltaTime) {
		while(com.indigo.controllers.SoundManager.playList.length > 0) com.indigo.controllers.SoundManager.playList.pop();
	}
	,__class__: com.indigo.controllers.SoundManager
};
com.indigo.controllers.WaveManager = function() {
	this.waveNumber = 0;
	this.enemiesThisWave = 0;
	com.indigo.controllers.WaveManager.averageSummonInterval = 0;
	com.indigo.controllers.WaveManager.averageSummonSize = 0;
	com.indigo.controllers.WaveManager.enemyCountGrowth = 0;
	com.indigo.controllers.WaveManager.enemyCountScaling = 0;
	com.indigo.controllers.WaveManager.intervalGrowth = 0;
	com.indigo.controllers.WaveManager.intervalScaling = 0;
	com.indigo.controllers.WaveManager.summonSizeGrowth = 0;
	com.indigo.controllers.WaveManager.summonSizeScaling = 0;
	this.targetCount = 0;
	this.isSummoning = false;
	this.hasPowerup = false;
	this.summonedList = [];
	this.powerupList = [];
};
$hxClasses["com.indigo.controllers.WaveManager"] = com.indigo.controllers.WaveManager;
com.indigo.controllers.WaveManager.__name__ = ["com","indigo","controllers","WaveManager"];
com.indigo.controllers.WaveManager.__interfaces__ = [com.tkb.interfaces.IUpdatable];
com.indigo.controllers.WaveManager.instance = null;
com.indigo.controllers.WaveManager.averageSummonInterval = null;
com.indigo.controllers.WaveManager.averageSummonSize = null;
com.indigo.controllers.WaveManager.averageEnemyCount = null;
com.indigo.controllers.WaveManager.enemyCountGrowth = null;
com.indigo.controllers.WaveManager.enemyCountScaling = null;
com.indigo.controllers.WaveManager.intervalGrowth = null;
com.indigo.controllers.WaveManager.intervalScaling = null;
com.indigo.controllers.WaveManager.summonSizeGrowth = null;
com.indigo.controllers.WaveManager.summonSizeScaling = null;
com.indigo.controllers.WaveManager.summonSizeCap = null;
com.indigo.controllers.WaveManager.targetSizeGrowth = null;
com.indigo.controllers.WaveManager.powerupInterval = null;
com.indigo.controllers.WaveManager.powerupChance = null;
com.indigo.controllers.WaveManager.baseAllyScoreThreshold = null;
com.indigo.controllers.WaveManager.allyScoreThresholdGrowth = null;
com.indigo.controllers.WaveManager.maxWaves = null;
com.indigo.controllers.WaveManager.targetSize = null;
com.indigo.controllers.WaveManager.playerLife = null;
com.indigo.controllers.WaveManager.playerScore = null;
com.indigo.controllers.WaveManager.playerPower = null;
com.indigo.controllers.WaveManager.isSeeded = null;
com.indigo.controllers.WaveManager.initialize = function() {
	com.indigo.controllers.WaveManager.instance = new com.indigo.controllers.WaveManager();
	com.tkb.controllers.UpdateManager.subscribe(com.indigo.controllers.WaveManager.instance);
};
com.indigo.controllers.WaveManager.seedWave = function(avgSummonInterval,avgSummonSize,avgEnemyCount,enemyCountGrw,enemyCountScl,intervalGrw,intervalScl,summonSizeGrw,summonSizeScl,summonSizeCp,targetSz,targetGrw,powerupInt,powerupChc,mxWav) {
	com.indigo.controllers.WaveManager.averageSummonInterval = avgSummonInterval;
	com.indigo.controllers.WaveManager.averageSummonSize = avgSummonSize;
	com.indigo.controllers.WaveManager.averageEnemyCount = avgEnemyCount;
	com.indigo.controllers.WaveManager.enemyCountGrowth = enemyCountGrw;
	com.indigo.controllers.WaveManager.enemyCountScaling = enemyCountScl;
	com.indigo.controllers.WaveManager.intervalGrowth = intervalGrw;
	com.indigo.controllers.WaveManager.intervalScaling = intervalScl;
	com.indigo.controllers.WaveManager.summonSizeGrowth = summonSizeGrw;
	com.indigo.controllers.WaveManager.summonSizeScaling = summonSizeScl;
	com.indigo.controllers.WaveManager.summonSizeCap = summonSizeCp;
	com.indigo.controllers.WaveManager.targetSize = targetSz;
	com.indigo.controllers.WaveManager.targetSizeGrowth = targetGrw;
	com.indigo.controllers.WaveManager.powerupInterval = powerupInt;
	com.indigo.controllers.WaveManager.powerupChance = powerupChc;
	com.indigo.controllers.WaveManager.maxWaves = mxWav;
	com.indigo.controllers.WaveManager.isSeeded = true;
};
com.indigo.controllers.WaveManager.resetStats = function(score,power) {
	com.indigo.controllers.WaveManager.playerLife = 30;
	com.indigo.controllers.WaveManager.playerScore = score;
	com.indigo.controllers.WaveManager.playerPower = power;
	com.indigo.controllers.WaveManager.instance.waveNumber = 1;
};
com.indigo.controllers.WaveManager.start = function() {
	if(!com.indigo.controllers.WaveManager.isSeeded) return;
	com.tkb.ui.MouseInputLayer.isDisabled = false;
	com.indigo.controllers.WaveManager.instance.startWave();
};
com.indigo.controllers.WaveManager.stop = function() {
	com.indigo.controllers.WaveManager.instance.isSummoning = false;
	com.indigo.controllers.WaveManager.instance.hasPowerup = false;
	while(com.indigo.controllers.WaveManager.instance.summonedList.length > 0) motion.Actuate.stop(com.indigo.controllers.WaveManager.instance.summonedList.pop().dispose());
};
com.indigo.controllers.WaveManager.pause = function() {
	com.indigo.controllers.WaveManager.instance.isSummoning = false;
};
com.indigo.controllers.WaveManager.resume = function() {
	com.indigo.controllers.WaveManager.instance.startWave();
};
com.indigo.controllers.WaveManager.getRandomSummonedEnemy = function() {
	if(com.indigo.controllers.WaveManager.instance.summonedList.length <= 0) return null;
	var randomIndex = Std["int"](Math.random() * com.indigo.controllers.WaveManager.instance.summonedList.length);
	return com.indigo.controllers.WaveManager.instance.summonedList[randomIndex];
};
com.indigo.controllers.WaveManager.updateTargetCount = function() {
	if(com.indigo.controllers.WaveManager.instance.targetCount > 0) com.indigo.controllers.WaveManager.instance.targetCount--; else com.indigo.controllers.WaveManager.instance.hasWon = true;
};
com.indigo.controllers.WaveManager.updatePlayerLife = function(life) {
	com.indigo.controllers.WaveManager.playerLife = life;
	if(com.indigo.controllers.WaveManager.playerLife == 0) {
		if(com.indigo.controllers.WaveManager.instance.hasLost) return;
		com.indigo.controllers.WaveManager.instance.hasLost = true;
		com.tkb.ui.MouseInputLayer.isDisabled = true;
		haxe.Timer.delay(function() {
			com.indigo.pages.GameOverScreen.showGameOverScreen();
		},1000);
	}
};
com.indigo.controllers.WaveManager.updateScore = function(val) {
	if(com.indigo.controllers.WaveManager.instance.isDoubleScore) val = val * 2;
	com.indigo.controllers.WaveManager.playerScore += val;
	com.indigo.controllers.WaveManager.instance.currentWaveScore += val;
	var randomString = "";
	var _g = Std["int"](Math.random() * 3);
	switch(_g) {
	case 0:
		randomString = "increment-00";
		break;
	case 1:
		randomString = "increment-01";
		break;
	default:
		randomString = "increment-02";
	}
};
com.indigo.controllers.WaveManager.updatePlayerPower = function(val) {
	if(com.indigo.controllers.WaveManager.instance.isDoubleScore) val = val * 2;
	com.indigo.controllers.WaveManager.playerPower += val;
	if(com.indigo.controllers.WaveManager.playerPower > 20) com.indigo.controllers.WaveManager.playerPower = 20;
};
com.indigo.controllers.WaveManager.resetPlayerPower = function(val) {
	com.indigo.controllers.WaveManager.playerPower = 0;
};
com.indigo.controllers.WaveManager.doubleScoreOn = function(duration) {
	com.indigo.controllers.WaveManager.instance.isDoubleScore = true;
	com.indigo.controllers.WaveManager.instance.doubleScoreCount = duration;
};
com.indigo.controllers.WaveManager.doublePowerOn = function(duration) {
	com.indigo.controllers.WaveManager.instance.isDoublePower = true;
	com.indigo.controllers.WaveManager.instance.doublePowerCount = duration;
};
com.indigo.controllers.WaveManager.onSummonedDisposed = function(entity) {
	HxOverrides.remove(com.indigo.controllers.WaveManager.instance.summonedList,entity);
};
com.indigo.controllers.WaveManager.onPowerupDisposed = function(entity) {
	HxOverrides.remove(com.indigo.controllers.WaveManager.instance.powerupList,entity);
};
com.indigo.controllers.WaveManager.prototype = {
	startWave: function() {
		this.enemiesThisWave = Math.floor(com.indigo.controllers.WaveManager.averageEnemyCount * (1.2 - Math.random() * 0.4));
		this.targetCount = com.indigo.controllers.WaveManager.targetSize;
		this.powerupCount = com.indigo.controllers.WaveManager.powerupInterval;
		this.currentWaveScore = 0;
		this.currentAllyThreshold = com.indigo.controllers.WaveManager.baseAllyScoreThreshold;
		this.hasSummonedCannonball = false;
		this.isDoubleScore = false;
		this.doubleScoreCount = 0;
		this.isDoublePower = false;
		this.doublePowerCount = 0;
		this.hasLost = false;
		this.hasWon = false;
		this.spawnableEnemiesThisWave = [];
		var $it0 = com.indigo.models.Enemy.enemyTypes.iterator();
		while( $it0.hasNext() ) {
			var enemy = $it0.next();
			if(enemy.waveStart <= this.waveNumber) this.spawnableEnemiesThisWave.push(enemy.name);
		}
		var randomSummonIndex = Std["int"](Math.random() * com.indigo.models.Enemy.enemyIdList.length);
		var randomModelKey = com.indigo.models.Enemy.enemyIdList[randomSummonIndex];
		var currentIndex = randomSummonIndex;
		com.indigo.controllers.WaveManager.playerPower = 20;
		this.startInterval();
	}
	,generateNextWave: function() {
		com.indigo.controllers.WaveManager.averageSummonInterval += com.indigo.controllers.WaveManager.averageSummonInterval * com.indigo.controllers.WaveManager.intervalScaling + com.indigo.controllers.WaveManager.intervalGrowth;
		com.indigo.controllers.WaveManager.averageSummonSize += com.indigo.controllers.WaveManager.averageSummonSize * com.indigo.controllers.WaveManager.summonSizeScaling + com.indigo.controllers.WaveManager.summonSizeGrowth;
		if(com.indigo.controllers.WaveManager.averageSummonSize > com.indigo.controllers.WaveManager.summonSizeCap) com.indigo.controllers.WaveManager.averageSummonSize = com.indigo.controllers.WaveManager.summonSizeCap;
		com.indigo.controllers.WaveManager.averageEnemyCount += com.indigo.controllers.WaveManager.averageEnemyCount * com.indigo.controllers.WaveManager.enemyCountScaling + com.indigo.controllers.WaveManager.enemyCountGrowth;
		com.indigo.controllers.WaveManager.targetSize += com.indigo.controllers.WaveManager.targetSizeGrowth;
		this.targetCount = com.indigo.controllers.WaveManager.targetSize;
		this.enemiesThisWave = Math.floor(com.indigo.controllers.WaveManager.averageEnemyCount * (1.2 - Math.random() * 0.4));
		this.waveNumber++;
		if(this.waveNumber <= com.indigo.controllers.WaveManager.maxWaves) {
			com.indigo.controllers.GameManager.updateWave(this.waveNumber);
			this.startInterval();
		} else {
			com.indigo.controllers.WaveManager.instance.hasLost = true;
			com.tkb.ui.MouseInputLayer.isDisabled = true;
			haxe.Timer.delay(function() {
				com.indigo.pages.GameOverScreen.showGameOverScreen("YOU HAVE SAVED \nTHE CANDY KINGDOM");
			},1000);
		}
	}
	,startInterval: function() {
		this.intervalCount = Math.floor(com.indigo.controllers.WaveManager.averageSummonInterval * (1.2 - Math.random() * 0.4));
		this.summonSize = 1;
		this.isSummoning = true;
		this.enemiesThisWave -= this.summonSize;
	}
	,endInterval: function() {
		if(this.enemiesThisWave <= 0) {
			this.isSummoning = false;
			if(com.indigo.controllers.WaveManager.playerLife <= 0) return;
			haxe.Timer.delay($bind(this,this.generateNextWave),5000);
		} else this.startInterval();
	}
	,update: function(deltaTime) {
		if(!this.isSummoning) return;
		if(com.indigo.controllers.WaveManager.instance.hasLost) return;
		if(this.powerupCount > 0) this.powerupCount--; else if(Math.random() < com.indigo.controllers.WaveManager.powerupChance) this.powerupCount = com.indigo.controllers.WaveManager.powerupInterval;
		if(this.intervalCount == 0) {
			this.summon();
			this.endInterval();
		} else this.intervalCount--;
		if(this.isDoubleScore) {
			if(this.doubleScoreCount > 0) this.doubleScoreCount--; else this.isDoubleScore = false;
		}
		if(this.isDoublePower) {
			if(this.doublePowerCount > 0) this.doublePowerCount--; else this.isDoublePower = false;
		}
	}
	,summon: function() {
		var randomSummonIndex = Std["int"](Math.random() * this.spawnableEnemiesThisWave.length);
		var randomModelKey = this.spawnableEnemiesThisWave[randomSummonIndex];
		var currentIndex = randomSummonIndex;
		var enemyModel = com.indigo.models.Enemy.getEnemyType(randomModelKey);
		var summonedEnemy = com.tkb.models.Entity.getInstance();
		summonedEnemy.dynamicData.model = enemyModel;
		summonedEnemy.addGraphic(enemyModel.graphicComponent.classType.getInstance().build(enemyModel.graphicComponent.params));
		summonedEnemy.set_x(640 + com.utils.ResizeUtility.adjustSize(100));
		summonedEnemy.set_y(384 * 0.86 - summonedEnemy.dynamicData.srcHeight);
		summonedEnemy.set_rotation(0);
		summonedEnemy.dynamicData.heading = 180;
		var newLogicA;
		var newLogicB;
		var _g = 0;
		var _g1 = enemyModel.logicComponents;
		while(_g < _g1.length) {
			var logic = _g1[_g];
			++_g;
			if(logic.handlers != null) {
				newLogicA = logic.classType.getInstance();
				summonedEnemy.addLogic(newLogicA);
				newLogicA.build(logic.handlers);
			} else {
				newLogicB = logic.classType.getInstance();
				summonedEnemy.addLogic(newLogicB);
				newLogicB.build();
			}
		}
		summonedEnemy.build();
		summonedEnemy.addEventListener("disposed",$bind(this,this.onDisposed));
		this.summonedList.push(summonedEnemy);
		if(enemyModel.name == "heart") com.tkb.controllers.DisplayManager.add(summonedEnemy,3); else com.tkb.controllers.DisplayManager.add(summonedEnemy,2);
	}
	,onDisposed: function(e) {
		e.target.removeEventListener("disposed",$bind(this,this.onDisposed));
		var x = e.target;
		HxOverrides.remove(this.summonedList,x);
	}
	,onClickHeart: function(e) {
		com.indigo.controllers.GameManager.updateLife(1);
		e.target.mouseEnabled = false;
		e.target.dispose();
	}
	,setSummonCoordinatesOnEntity: function(entity,modelName) {
		entity.set_x(640 + com.utils.ResizeUtility.adjustSize(100));
		entity.set_y(384 * 0.86 - entity.dynamicData.srcHeight);
	}
	,setRotationOnEntity: function(entity) {
		entity.set_rotation(0);
		entity.dynamicData.heading = 180;
	}
	,__class__: com.indigo.controllers.WaveManager
};
com.tkb.models = {};
com.tkb.models.GraphicComponent = function() {
	openfl.display.Sprite.call(this);
};
$hxClasses["com.tkb.models.GraphicComponent"] = com.tkb.models.GraphicComponent;
com.tkb.models.GraphicComponent.__name__ = ["com","tkb","models","GraphicComponent"];
com.tkb.models.GraphicComponent.__interfaces__ = [com.tkb.interfaces.IDisposable];
com.tkb.models.GraphicComponent.__super__ = openfl.display.Sprite;
com.tkb.models.GraphicComponent.prototype = $extend(openfl.display.Sprite.prototype,{
	build: function(params) {
		return this;
	}
	,dispose: function() {
		return this;
	}
	,connectToEntity: function(entity) {
		this.parentEntity = entity;
	}
	,__class__: com.tkb.models.GraphicComponent
});
com.indigo.graphics = {};
com.indigo.graphics.EnemyGraphics = function() {
	com.tkb.models.GraphicComponent.call(this);
	this.shadow = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/sprites/char_shadow.png"));
	this.addChild(this.shadow);
};
$hxClasses["com.indigo.graphics.EnemyGraphics"] = com.indigo.graphics.EnemyGraphics;
com.indigo.graphics.EnemyGraphics.__name__ = ["com","indigo","graphics","EnemyGraphics"];
com.indigo.graphics.EnemyGraphics.__interfaces__ = [com.tkb.interfaces.IUpdatable];
com.indigo.graphics.EnemyGraphics.getInstance = function() {
	if(com.indigo.graphics.EnemyGraphics.instanceList.length > 0) return com.indigo.graphics.EnemyGraphics.instanceList.pop(); else return new com.indigo.graphics.EnemyGraphics();
};
com.indigo.graphics.EnemyGraphics.returnInstance = function(instance) {
	if(Lambda.has(com.indigo.graphics.EnemyGraphics.instanceList,instance)) return;
	com.indigo.graphics.EnemyGraphics.instanceList.push(instance);
};
com.indigo.graphics.EnemyGraphics.__super__ = com.tkb.models.GraphicComponent;
com.indigo.graphics.EnemyGraphics.prototype = $extend(com.tkb.models.GraphicComponent.prototype,{
	build: function(params) {
		if(params == null) this.recommendedAnim = "idle"; else this.recommendedAnim = params[0];
		this.disposed = false;
		this.shadow.set_visible(true);
		com.tkb.controllers.UpdateManager.subscribe(this);
		return this;
	}
	,dispose: function() {
		if(this.disposed) return this;
		this.disposed = true;
		this.get_graphics().clear();
		com.indigo.graphics.EnemyGraphics.returnInstance(this);
		com.tkb.controllers.UpdateManager.unsubscribe(this);
		return this;
	}
	,update: function(deltaTime) {
		if(this.sprite == null) return;
		if(this.sprite.currentBehavior == null) return;
		this.sprite.update(60);
	}
	,showBehavior: function(behavior) {
		if(this.sprite == null) return;
		this.sprite.showBehavior(behavior,true);
		var sourceFrame;
		sourceFrame = js.Boot.__cast(this.sprite.spritesheet.getFrame(0) , com.models.SpritesheetFrameScRef);
		this.set_x(-(sourceFrame.sourceWidth / 2));
	}
	,connectToEntity: function(entity) {
		com.tkb.models.GraphicComponent.prototype.connectToEntity.call(this,entity);
		var spriteName;
		spriteName = entity.dynamicData.model.name;
		if(this.sprite == null) {
			this.sprite = new spritesheet.AnimatedSprite(com.indigo.controllers.GameAssetsManager.spritesheets.get(spriteName),true);
			this.addChild(this.sprite);
		} else this.sprite.spritesheet = com.indigo.controllers.GameAssetsManager.spritesheets.get(spriteName);
		this.keyMapping = spriteName;
		this.sprite.showBehavior(this.recommendedAnim);
		this.sprite.update(com.tkb.controllers.UpdateManager.deltaTime);
		var sourceFrame;
		sourceFrame = js.Boot.__cast(this.sprite.spritesheet.getFrame(0) , com.models.SpritesheetFrameScRef);
		this.set_x(-(sourceFrame.sourceWidth / 2));
		entity.dynamicData.srcHeight = sourceFrame.sourceHeight;
		this.shadow.set_x(sourceFrame.sourceWidth / 2 - com.utils.ResizeUtility.adjustSize(46.5));
		this.shadow.set_y(sourceFrame.sourceHeight - com.utils.ResizeUtility.adjustSize(5));
	}
	,__class__: com.indigo.graphics.EnemyGraphics
});
com.indigo.graphics.VfxGraphics = function() {
	com.tkb.models.GraphicComponent.call(this);
};
$hxClasses["com.indigo.graphics.VfxGraphics"] = com.indigo.graphics.VfxGraphics;
com.indigo.graphics.VfxGraphics.__name__ = ["com","indigo","graphics","VfxGraphics"];
com.indigo.graphics.VfxGraphics.__interfaces__ = [com.tkb.interfaces.IUpdatable];
com.indigo.graphics.VfxGraphics.getInstance = function() {
	if(com.indigo.graphics.VfxGraphics.instanceList.length > 0) return com.indigo.graphics.VfxGraphics.instanceList.pop(); else return new com.indigo.graphics.VfxGraphics();
};
com.indigo.graphics.VfxGraphics.returnInstance = function(instance) {
	if(Lambda.has(com.indigo.graphics.VfxGraphics.instanceList,instance)) return;
	com.indigo.graphics.VfxGraphics.instanceList.push(instance);
};
com.indigo.graphics.VfxGraphics.__super__ = com.tkb.models.GraphicComponent;
com.indigo.graphics.VfxGraphics.prototype = $extend(com.tkb.models.GraphicComponent.prototype,{
	build: function(params) {
		if(this.sprite == null) {
			this.sprite = new spritesheet.AnimatedSprite(com.indigo.controllers.GameAssetsManager.spritesheets.get(params[0]),true);
			this.addChild(this.sprite);
		} else this.sprite.spritesheet = com.indigo.controllers.GameAssetsManager.spritesheets.get(params[0]);
		com.tkb.controllers.UpdateManager.subscribe(this);
		this.sprite.showBehavior("animate");
		this.sprite.update(com.tkb.controllers.UpdateManager.deltaTime);
		var sourceFrame;
		sourceFrame = js.Boot.__cast(this.sprite.spritesheet.getFrame(0) , com.models.SpritesheetFrameScRef);
		this.set_x(-(sourceFrame.sourceWidth / 2));
		this.set_y(-(sourceFrame.sourceHeight / 2));
		return this;
	}
	,dispose: function() {
		this.get_graphics().clear();
		com.indigo.graphics.VfxGraphics.returnInstance(this);
		com.tkb.controllers.UpdateManager.unsubscribe(this);
		return this;
	}
	,update: function(deltaTime) {
		if(this.sprite == null) return;
		if(this.sprite.currentBehavior == null) return;
		if(!this.sprite.currentBehavior.loop) {
			if(this.sprite.currentFrameIndex == this.sprite.currentBehavior.frames.length - 1) this.parentEntity.dispose();
		}
		this.sprite.update(60);
	}
	,showBehavior: function(behavior) {
		if(this.sprite == null) return;
		this.sprite.showBehavior(behavior,true);
	}
	,__class__: com.indigo.graphics.VfxGraphics
});
com.tkb.interfaces.IHandlerMaster = function() { };
$hxClasses["com.tkb.interfaces.IHandlerMaster"] = com.tkb.interfaces.IHandlerMaster;
com.tkb.interfaces.IHandlerMaster.__name__ = ["com","tkb","interfaces","IHandlerMaster"];
com.tkb.interfaces.IHandlerMaster.prototype = {
	__class__: com.tkb.interfaces.IHandlerMaster
};
com.tkb.models.LogicComponent = function() {
	this.handlers = [];
};
$hxClasses["com.tkb.models.LogicComponent"] = com.tkb.models.LogicComponent;
com.tkb.models.LogicComponent.__name__ = ["com","tkb","models","LogicComponent"];
com.tkb.models.LogicComponent.__interfaces__ = [com.tkb.interfaces.IDisposable,com.tkb.interfaces.IHandlerMaster];
com.tkb.models.LogicComponent.prototype = {
	build: function(handlers) {
		return this;
	}
	,dispose: function() {
		while(this.handlers.length > 0) this.handlers.pop().dispose();
		this.parentEntity.removeLogic(this);
		return this;
	}
	,connectToEntity: function(entity) {
		this.parentEntity = entity;
		return this;
	}
	,update: function(deltaTime) {
	}
	,__class__: com.tkb.models.LogicComponent
};
com.indigo.logics = {};
com.indigo.logics.EnterCastleLogic = function() {
	com.tkb.models.LogicComponent.call(this);
};
$hxClasses["com.indigo.logics.EnterCastleLogic"] = com.indigo.logics.EnterCastleLogic;
com.indigo.logics.EnterCastleLogic.__name__ = ["com","indigo","logics","EnterCastleLogic"];
com.indigo.logics.EnterCastleLogic.getInstance = function() {
	if(com.indigo.logics.EnterCastleLogic.instanceList.length > 0) return com.indigo.logics.EnterCastleLogic.instanceList.pop(); else return new com.indigo.logics.EnterCastleLogic();
};
com.indigo.logics.EnterCastleLogic.returnInstance = function(instance) {
	if(Lambda.has(com.indigo.logics.EnterCastleLogic.instanceList,instance)) return;
	com.indigo.logics.EnterCastleLogic.instanceList.push(instance);
};
com.indigo.logics.EnterCastleLogic.__super__ = com.tkb.models.LogicComponent;
com.indigo.logics.EnterCastleLogic.prototype = $extend(com.tkb.models.LogicComponent.prototype,{
	build: function(handlers) {
		var newHandler;
		var _g = 0;
		while(_g < handlers.length) {
			var handler = handlers[_g];
			++_g;
			if(Type.getClass(handler) == String) {
				newHandler = Type.resolveClass(handler).getInstance().build();
				newHandler.connectToMaster(this);
				this.handlers.push(newHandler);
			} else {
				newHandler = Type.resolveClass(handler.handler).getInstance().build(handler.params);
				newHandler.connectToMaster(this);
				this.handlers.push(newHandler);
			}
		}
		return this;
	}
	,dispose: function() {
		com.tkb.models.LogicComponent.prototype.dispose.call(this);
		com.indigo.logics.EnterCastleLogic.returnInstance(this);
		return this;
	}
	,onEnter: function() {
		this.handlers[0].activate();
	}
	,onSlam: function() {
		this.handlers[1].activate();
	}
	,update: function(deltaTime) {
		com.tkb.models.LogicComponent.prototype.update.call(this,deltaTime);
		if(this.parentEntity.get_x() <= com.utils.ResizeUtility.adjustSize(150)) {
			if(this.parentEntity.get_x() <= com.utils.ResizeUtility.adjustSize(50)) this.onEnter();
		} else if(this.parentEntity.get_x() <= com.utils.ResizeUtility.adjustSize(280)) {
			if(!com.indigo.controllers.GameManager.isGateOpen) this.onSlam();
		}
	}
	,__class__: com.indigo.logics.EnterCastleLogic
});
com.indigo.logics.FollowStraightLineIfOpenLogic = function() {
	this.cosLUT = com.tkb.utils.TrigUtil.cosLUT;
	this.sinLUT = com.tkb.utils.TrigUtil.sinLUT;
	com.tkb.models.LogicComponent.call(this);
};
$hxClasses["com.indigo.logics.FollowStraightLineIfOpenLogic"] = com.indigo.logics.FollowStraightLineIfOpenLogic;
com.indigo.logics.FollowStraightLineIfOpenLogic.__name__ = ["com","indigo","logics","FollowStraightLineIfOpenLogic"];
com.indigo.logics.FollowStraightLineIfOpenLogic.getInstance = function() {
	if(com.indigo.logics.FollowStraightLineIfOpenLogic.instanceList.length > 0) return com.indigo.logics.FollowStraightLineIfOpenLogic.instanceList.pop(); else return new com.indigo.logics.FollowStraightLineIfOpenLogic();
};
com.indigo.logics.FollowStraightLineIfOpenLogic.returnInstance = function(instance) {
	if(Lambda.has(com.indigo.logics.FollowStraightLineIfOpenLogic.instanceList,instance)) return;
	com.indigo.logics.FollowStraightLineIfOpenLogic.instanceList.push(instance);
};
com.indigo.logics.FollowStraightLineIfOpenLogic.__super__ = com.tkb.models.LogicComponent;
com.indigo.logics.FollowStraightLineIfOpenLogic.prototype = $extend(com.tkb.models.LogicComponent.prototype,{
	build: function(handlers) {
		if(this.parentEntity == null) return this;
		var model = this.parentEntity.dynamicData.model;
		var parentRotation = com.tkb.utils.TrigUtil.toRad(this.parentEntity.dynamicData.heading);
		this.accelX = model.accel * this.cosLUT.val(parentRotation) * 0.08;
		this.accelY = model.accel * this.sinLUT.val(parentRotation) * 0.08;
		this.parentEntity.dynamicData.velX = model.initVel * this.cosLUT.val(parentRotation);
		this.parentEntity.dynamicData.velY = model.initVel * this.sinLUT.val(parentRotation);
		this.maxVelX = model.maxVel * this.cosLUT.val(parentRotation);
		this.maxVelY = model.maxVel * this.sinLUT.val(parentRotation);
		this.maxVelX = Math.abs(this.maxVelX);
		this.maxVelY = Math.abs(this.maxVelY);
		return this;
	}
	,dispose: function() {
		com.tkb.models.LogicComponent.prototype.dispose.call(this);
		com.indigo.logics.FollowStraightLineIfOpenLogic.returnInstance(this);
		return this;
	}
	,update: function(deltaTime) {
		com.tkb.models.LogicComponent.prototype.update.call(this,deltaTime);
		var stats = this.parentEntity.dynamicData;
		var velX = stats.velX;
		var velY = stats.velY;
		if(com.indigo.controllers.GameManager.isGateOpen) velX += this.accelX; else velX += -this.accelX;
		if(velX < 0) if(velX < -this.maxVelX) velX = -this.maxVelX; else velX = velX; else if(velX > this.maxVelX) velX = this.maxVelX; else velX = velX;
		velY += this.accelY;
		if(velY < 0) if(velY < -this.maxVelY) velY = -this.maxVelY; else velY = velY; else if(velY > this.maxVelY) velY = this.maxVelY; else velY = velY;
		var _g = this.parentEntity;
		_g.set_x(_g.get_x() + velX);
		var _g1 = this.parentEntity;
		_g1.set_y(_g1.get_y() + velY);
		stats.velX = velX;
		stats.velY = velY;
	}
	,__class__: com.indigo.logics.FollowStraightLineIfOpenLogic
});
com.indigo.logics.FollowStraightLineLogic = function() {
	this.cosLUT = com.tkb.utils.TrigUtil.cosLUT;
	this.sinLUT = com.tkb.utils.TrigUtil.sinLUT;
	com.tkb.models.LogicComponent.call(this);
};
$hxClasses["com.indigo.logics.FollowStraightLineLogic"] = com.indigo.logics.FollowStraightLineLogic;
com.indigo.logics.FollowStraightLineLogic.__name__ = ["com","indigo","logics","FollowStraightLineLogic"];
com.indigo.logics.FollowStraightLineLogic.getInstance = function() {
	if(com.indigo.logics.FollowStraightLineLogic.instanceList.length > 0) return com.indigo.logics.FollowStraightLineLogic.instanceList.pop(); else return new com.indigo.logics.FollowStraightLineLogic();
};
com.indigo.logics.FollowStraightLineLogic.returnInstance = function(instance) {
	if(Lambda.has(com.indigo.logics.FollowStraightLineLogic.instanceList,instance)) return;
	com.indigo.logics.FollowStraightLineLogic.instanceList.push(instance);
};
com.indigo.logics.FollowStraightLineLogic.__super__ = com.tkb.models.LogicComponent;
com.indigo.logics.FollowStraightLineLogic.prototype = $extend(com.tkb.models.LogicComponent.prototype,{
	build: function(handlers) {
		if(this.parentEntity == null) return this;
		var model = this.parentEntity.dynamicData.model;
		var parentRotation = com.tkb.utils.TrigUtil.toRad(this.parentEntity.dynamicData.heading);
		this.accelX = model.accel * this.cosLUT.val(parentRotation) * 0.08;
		this.accelY = model.accel * this.sinLUT.val(parentRotation) * 0.08;
		this.parentEntity.dynamicData.velX = model.initVel * this.cosLUT.val(parentRotation);
		this.parentEntity.dynamicData.velY = model.initVel * this.sinLUT.val(parentRotation);
		this.maxVelX = model.maxVel * this.cosLUT.val(parentRotation);
		this.maxVelY = model.maxVel * this.sinLUT.val(parentRotation);
		this.maxVelX = Math.abs(this.maxVelX);
		this.maxVelY = Math.abs(this.maxVelY);
		return this;
	}
	,dispose: function() {
		com.tkb.models.LogicComponent.prototype.dispose.call(this);
		com.indigo.logics.FollowStraightLineLogic.returnInstance(this);
		return this;
	}
	,update: function(deltaTime) {
		com.tkb.models.LogicComponent.prototype.update.call(this,deltaTime);
		var stats = this.parentEntity.dynamicData;
		var velX = stats.velX;
		var velY = stats.velY;
		velX += this.accelX;
		if(velX < 0) if(velX < -this.maxVelX) velX = -this.maxVelX; else velX = velX; else if(velX > this.maxVelX) velX = this.maxVelX; else velX = velX;
		velY += this.accelY;
		if(velY < 0) if(velY < -this.maxVelY) velY = -this.maxVelY; else velY = velY; else if(velY > this.maxVelY) velY = this.maxVelY; else velY = velY;
		var _g = this.parentEntity;
		_g.set_x(_g.get_x() + velX / 60 * deltaTime);
		var _g1 = this.parentEntity;
		_g1.set_y(_g1.get_y() + velY / 60 * deltaTime);
		stats.velX = velX;
		stats.velY = velY;
	}
	,__class__: com.indigo.logics.FollowStraightLineLogic
});
com.indigo.logics.RemoveIfOutOfScreenLogic = function() {
	com.tkb.models.LogicComponent.call(this);
	this.boundUp = -com.utils.ResizeUtility.adjustSize(300);
	this.boundDown = openfl.Lib.current.stage.stageHeight + com.utils.ResizeUtility.adjustSize(300);
	this.boundLeft = -com.utils.ResizeUtility.adjustSize(300);
	this.boundRight = openfl.Lib.current.stage.stageWidth + com.utils.ResizeUtility.adjustSize(300);
};
$hxClasses["com.indigo.logics.RemoveIfOutOfScreenLogic"] = com.indigo.logics.RemoveIfOutOfScreenLogic;
com.indigo.logics.RemoveIfOutOfScreenLogic.__name__ = ["com","indigo","logics","RemoveIfOutOfScreenLogic"];
com.indigo.logics.RemoveIfOutOfScreenLogic.getInstance = function() {
	if(com.indigo.logics.RemoveIfOutOfScreenLogic.instanceList.length > 0) return com.indigo.logics.RemoveIfOutOfScreenLogic.instanceList.pop(); else return new com.indigo.logics.RemoveIfOutOfScreenLogic();
};
com.indigo.logics.RemoveIfOutOfScreenLogic.returnInstance = function(instance) {
	if(Lambda.has(com.indigo.logics.RemoveIfOutOfScreenLogic.instanceList,instance)) return;
	com.indigo.logics.RemoveIfOutOfScreenLogic.instanceList.push(instance);
};
com.indigo.logics.RemoveIfOutOfScreenLogic.__super__ = com.tkb.models.LogicComponent;
com.indigo.logics.RemoveIfOutOfScreenLogic.prototype = $extend(com.tkb.models.LogicComponent.prototype,{
	build: function(handlers) {
		return this;
	}
	,dispose: function() {
		com.tkb.models.LogicComponent.prototype.dispose.call(this);
		com.indigo.logics.RemoveIfOutOfScreenLogic.returnInstance(this);
		return this;
	}
	,update: function(deltaTime) {
		com.tkb.models.LogicComponent.prototype.update.call(this,deltaTime);
		if(this.parentEntity.get_x() < this.boundLeft) {
			this.parentEntity.dispose();
			return;
		}
		if(this.parentEntity.get_x() > this.boundRight) {
			this.parentEntity.dispose();
			return;
		}
		if(this.parentEntity.get_y() < this.boundUp) {
			this.parentEntity.dispose();
			return;
		}
		if(this.parentEntity.get_y() > this.boundDown) {
			this.parentEntity.dispose();
			return;
		}
	}
	,__class__: com.indigo.logics.RemoveIfOutOfScreenLogic
});
com.indigo.logics.UpdateOnEnemyDisposeLogic = function() {
	com.tkb.models.LogicComponent.call(this);
};
$hxClasses["com.indigo.logics.UpdateOnEnemyDisposeLogic"] = com.indigo.logics.UpdateOnEnemyDisposeLogic;
com.indigo.logics.UpdateOnEnemyDisposeLogic.__name__ = ["com","indigo","logics","UpdateOnEnemyDisposeLogic"];
com.indigo.logics.UpdateOnEnemyDisposeLogic.getInstance = function() {
	if(com.indigo.logics.UpdateOnEnemyDisposeLogic.instanceList.length > 0) return com.indigo.logics.UpdateOnEnemyDisposeLogic.instanceList.pop(); else return new com.indigo.logics.UpdateOnEnemyDisposeLogic();
};
com.indigo.logics.UpdateOnEnemyDisposeLogic.returnInstance = function(instance) {
	if(Lambda.has(com.indigo.logics.UpdateOnEnemyDisposeLogic.instanceList,instance)) return;
	com.indigo.logics.UpdateOnEnemyDisposeLogic.instanceList.push(instance);
};
com.indigo.logics.UpdateOnEnemyDisposeLogic.__super__ = com.tkb.models.LogicComponent;
com.indigo.logics.UpdateOnEnemyDisposeLogic.prototype = $extend(com.tkb.models.LogicComponent.prototype,{
	build: function(handlers) {
		return this;
	}
	,dispose: function() {
		com.tkb.models.LogicComponent.prototype.dispose.call(this);
		com.indigo.logics.UpdateOnEnemyDisposeLogic.returnInstance(this);
		return this;
	}
	,onKill: function() {
		return this;
	}
	,__class__: com.indigo.logics.UpdateOnEnemyDisposeLogic
});
com.tkb.interfaces.IHandler = function() { };
$hxClasses["com.tkb.interfaces.IHandler"] = com.tkb.interfaces.IHandler;
com.tkb.interfaces.IHandler.__name__ = ["com","tkb","interfaces","IHandler"];
com.tkb.interfaces.IHandler.prototype = {
	__class__: com.tkb.interfaces.IHandler
};
com.indigo.logics.handlers = {};
com.indigo.logics.handlers.EnemyEnterCastleHandler = function() {
};
$hxClasses["com.indigo.logics.handlers.EnemyEnterCastleHandler"] = com.indigo.logics.handlers.EnemyEnterCastleHandler;
com.indigo.logics.handlers.EnemyEnterCastleHandler.__name__ = ["com","indigo","logics","handlers","EnemyEnterCastleHandler"];
com.indigo.logics.handlers.EnemyEnterCastleHandler.__interfaces__ = [com.tkb.interfaces.IHandler];
com.indigo.logics.handlers.EnemyEnterCastleHandler.getInstance = function() {
	if(com.indigo.logics.handlers.EnemyEnterCastleHandler.instanceList.length > 0) return com.indigo.logics.handlers.EnemyEnterCastleHandler.instanceList.pop(); else return new com.indigo.logics.handlers.EnemyEnterCastleHandler();
};
com.indigo.logics.handlers.EnemyEnterCastleHandler.returnInstance = function(instance) {
	if(Lambda.has(com.indigo.logics.handlers.EnemyEnterCastleHandler.instanceList,instance)) return;
	com.indigo.logics.handlers.EnemyEnterCastleHandler.instanceList.push(instance);
};
com.indigo.logics.handlers.EnemyEnterCastleHandler.prototype = {
	build: function(params) {
		this.lifeGiven = params[0];
		this.scoreGiven = params[1];
		return this;
	}
	,activate: function() {
		var _g = this;
		com.indigo.controllers.GameManager.updateLife(this.lifeGiven);
		com.indigo.controllers.GameManager.updateScore(this.scoreGiven);
		if(this.lifeGiven > 0) com.indigo.controllers.SoundManager.playSFX("snd/1upSFX.ogg");
		if(this.lifeGiven < 0) {
		}
		if(this.parentLogic.parentEntity.dynamicData.model.name != "wolf1" && this.parentLogic.parentEntity.dynamicData.model.name != "wolf2") {
			com.indigo.controllers.SoundManager.playSFX("snd/CandyEnterSFX.ogg");
			this.parentLogic.parentEntity.dispose();
			return this;
		}
		com.indigo.controllers.SoundManager.playSFX("snd/DogWhimperSFX.ogg");
		com.indigo.controllers.SoundManager.playSFX("snd/GateHitSFX.ogg");
		var popGraphic = com.indigo.graphics.EnemyGraphics.getInstance().build(["dizzy"]);
		this.popOutEntity = com.tkb.models.Entity.getInstance();
		this.popOutEntity.set_x(com.utils.ResizeUtility.adjustSize(200));
		this.popOutEntity.set_y(this.parentLogic.parentEntity.get_y());
		this.popOutEntity.set_scaleX(1);
		this.popOutEntity.dynamicData.model = this.parentLogic.parentEntity.dynamicData.model;
		this.parentLogic.parentEntity.dispose();
		this.popOutEntity.addGraphic(popGraphic);
		motion.Actuate.tween(this.popOutEntity,0.5,{ x : com.utils.ResizeUtility.adjustSize(530)}).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
			(js.Boot.__cast(_g.popOutEntity.getGraphic(com.indigo.graphics.EnemyGraphics) , com.indigo.graphics.EnemyGraphics)).showBehavior("fallvertical");
			(js.Boot.__cast(_g.popOutEntity.getGraphic(com.indigo.graphics.EnemyGraphics) , com.indigo.graphics.EnemyGraphics)).shadow.set_visible(false);
			motion.Actuate.tween(_g.popOutEntity,0.3,{ x : com.utils.ResizeUtility.adjustSize(555), y : _g.popOutEntity.get_y() - com.utils.ResizeUtility.adjustSize(70)}).onComplete(function() {
				haxe.Timer.delay(function() {
					var vfx = com.tkb.models.Entity.getInstance();
					vfx.set_x(_g.popOutEntity.get_x());
					vfx.set_y(384 - com.utils.ResizeUtility.adjustSize(89));
					com.indigo.controllers.SoundManager.playSFX("snd/SplashSFX.ogg");
					vfx.addGraphic(com.indigo.graphics.VfxGraphics.getInstance().build(["vfxsplash"]));
					vfx.build();
					com.tkb.controllers.DisplayManager.add(vfx,2);
				},250);
				motion.Actuate.tween(_g.popOutEntity,0.7,{ x : com.utils.ResizeUtility.adjustSize(600), y : 384 + _g.popOutEntity.get_height()}).onComplete(function() {
					com.tkb.controllers.DisplayManager.remove(_g.popOutEntity);
					_g.popOutEntity.dispose();
				});
			});
		});
		com.tkb.controllers.DisplayManager.add(this.popOutEntity,2);
		return this;
	}
	,postActivate: function() {
		return this;
	}
	,dispose: function() {
		com.indigo.logics.handlers.EnemyEnterCastleHandler.returnInstance(this);
	}
	,connectToMaster: function(master) {
		this.parentLogic = master;
		return this;
	}
	,__class__: com.indigo.logics.handlers.EnemyEnterCastleHandler
};
com.indigo.logics.handlers.PopOutOfCastleHandler = function() {
};
$hxClasses["com.indigo.logics.handlers.PopOutOfCastleHandler"] = com.indigo.logics.handlers.PopOutOfCastleHandler;
com.indigo.logics.handlers.PopOutOfCastleHandler.__name__ = ["com","indigo","logics","handlers","PopOutOfCastleHandler"];
com.indigo.logics.handlers.PopOutOfCastleHandler.__interfaces__ = [com.tkb.interfaces.IHandler];
com.indigo.logics.handlers.PopOutOfCastleHandler.getInstance = function() {
	if(com.indigo.logics.handlers.PopOutOfCastleHandler.instanceList.length > 0) return com.indigo.logics.handlers.PopOutOfCastleHandler.instanceList.pop(); else return new com.indigo.logics.handlers.PopOutOfCastleHandler();
};
com.indigo.logics.handlers.PopOutOfCastleHandler.returnInstance = function(instance) {
	if(Lambda.has(com.indigo.logics.handlers.PopOutOfCastleHandler.instanceList,instance)) return;
	com.indigo.logics.handlers.PopOutOfCastleHandler.instanceList.push(instance);
};
com.indigo.logics.handlers.PopOutOfCastleHandler.prototype = {
	build: function(params) {
		return this;
	}
	,activate: function() {
		var vfx = com.tkb.models.Entity.getInstance();
		vfx.set_x(com.utils.ResizeUtility.adjustSize(150));
		vfx.set_y(384 - com.utils.ResizeUtility.adjustSize(270));
		vfx.addGraphic(com.indigo.graphics.VfxGraphics.getInstance().build(["vfxpomf"]));
		vfx.build();
		com.tkb.controllers.DisplayManager.add(vfx,1);
		com.indigo.controllers.SoundManager.playSFX("snd/WolfEnterSFX.ogg");
		this.popOutEntity = com.tkb.models.Entity.getInstance();
		this.popOutEntity.set_x(com.utils.ResizeUtility.adjustSize(200));
		this.popOutEntity.set_y(this.parentLogic.parentEntity.get_y());
		this.popOutEntity.set_scaleX(1);
		this.popOutEntity.dynamicData.model = this.parentLogic.parentEntity.dynamicData.model;
		this.parentLogic.parentEntity.dispose();
		haxe.Timer.delay($bind(this,this.throwOot),200);
		return this;
	}
	,throwOot: function() {
		var _g = this;
		com.indigo.controllers.SoundManager.playSFX("snd/DogWhimperSFX.ogg");
		this.popOutEntity.addGraphic(com.indigo.graphics.EnemyGraphics.getInstance().build(["fallhorizontal"]));
		motion.Actuate.tween(this.popOutEntity,1,{ x : 640 + com.utils.ResizeUtility.adjustSize(100)}).onComplete(function() {
			com.tkb.controllers.DisplayManager.remove(_g.popOutEntity);
			_g.popOutEntity.dispose();
		});
		var _g1 = 0;
		var _g11 = com.indigo.controllers.WaveManager.instance.summonedList;
		while(_g1 < _g11.length) {
			var enemy = _g11[_g1];
			++_g1;
			enemy.dynamicData.velX = 8;
		}
		com.indigo.controllers.GameManager.updateLife(-10);
		com.tkb.controllers.DisplayManager.add(this.popOutEntity,2);
	}
	,postActivate: function() {
		return this;
	}
	,dispose: function() {
		com.indigo.logics.handlers.PopOutOfCastleHandler.returnInstance(this);
	}
	,connectToMaster: function(master) {
		this.parentLogic = master;
		return this;
	}
	,__class__: com.indigo.logics.handlers.PopOutOfCastleHandler
};
com.indigo.logics.handlers.RunAwayHandler = function() {
};
$hxClasses["com.indigo.logics.handlers.RunAwayHandler"] = com.indigo.logics.handlers.RunAwayHandler;
com.indigo.logics.handlers.RunAwayHandler.__name__ = ["com","indigo","logics","handlers","RunAwayHandler"];
com.indigo.logics.handlers.RunAwayHandler.__interfaces__ = [com.tkb.interfaces.IHandler];
com.indigo.logics.handlers.RunAwayHandler.getInstance = function() {
	if(com.indigo.logics.handlers.RunAwayHandler.instanceList.length > 0) return com.indigo.logics.handlers.RunAwayHandler.instanceList.pop(); else return new com.indigo.logics.handlers.RunAwayHandler();
};
com.indigo.logics.handlers.RunAwayHandler.returnInstance = function(instance) {
	if(Lambda.has(com.indigo.logics.handlers.RunAwayHandler.instanceList,instance)) return;
	com.indigo.logics.handlers.RunAwayHandler.instanceList.push(instance);
};
com.indigo.logics.handlers.RunAwayHandler.prototype = {
	build: function(params) {
		this.enemyGraphicsColor = params[0];
		return this;
	}
	,activate: function() {
		var _g = this;
		var popGraphic = com.indigo.graphics.EnemyGraphics.getInstance().build(["shock"]);
		this.popOutEntity = com.tkb.models.Entity.getInstance();
		this.popOutEntity.set_x(this.parentLogic.parentEntity.get_x());
		this.popOutEntity.set_y(this.parentLogic.parentEntity.get_y());
		this.popOutEntity.set_scaleX(1);
		this.popOutEntity.dynamicData.model = this.parentLogic.parentEntity.dynamicData.model;
		this.parentLogic.parentEntity.dispose();
		com.indigo.controllers.SoundManager.playSFX("snd/GateHitSFX.ogg");
		this.popOutEntity.addGraphic(popGraphic);
		motion.Actuate.tween(this.popOutEntity,0.2,{ x : this.parentLogic.parentEntity.get_x() + com.utils.ResizeUtility.adjustSize(30)}).ease(motion.easing.Linear.get_easeNone()).onComplete(function() {
			(js.Boot.__cast(_g.popOutEntity.getGraphic(com.indigo.graphics.EnemyGraphics) , com.indigo.graphics.EnemyGraphics)).showBehavior("back");
			_g.popOutEntity.set_scaleX(-1);
			motion.Actuate.tween(_g.popOutEntity,8,{ x : 640 + com.utils.ResizeUtility.adjustSize(100)}).ease(motion.easing.Linear.get_easeNone()).onComplete(function(entity) {
				com.tkb.controllers.DisplayManager.remove(entity);
				entity.dispose();
			},[_g.popOutEntity]);
		});
		com.indigo.controllers.GameManager.registerRunner(this.popOutEntity);
		com.indigo.controllers.GameManager.updateLife(-1);
		com.tkb.controllers.DisplayManager.add(this.popOutEntity,2);
		this.parentLogic.parentEntity.dispose();
		return this;
	}
	,postActivate: function() {
		return this;
	}
	,dispose: function() {
		com.indigo.logics.handlers.RunAwayHandler.returnInstance(this);
	}
	,connectToMaster: function(master) {
		this.parentLogic = master;
		return this;
	}
	,__class__: com.indigo.logics.handlers.RunAwayHandler
};
com.indigo.models = {};
com.indigo.models.Enemy = function() {
	this.waveStart = 0;
	this.maxVel = 0;
	this.initVel = 0;
	this.accel = 0;
	this.scoreValue = 0;
	this.hp = 0;
	this.name = "";
	this.logicComponents = [];
};
$hxClasses["com.indigo.models.Enemy"] = com.indigo.models.Enemy;
com.indigo.models.Enemy.__name__ = ["com","indigo","models","Enemy"];
com.indigo.models.Enemy.enemyTypes = null;
com.indigo.models.Enemy.enemyIdList = null;
com.indigo.models.Enemy.initialize = function(dataURL) {
	var data = openfl.Assets.getText(dataURL);
	var jsonData = JSON.parse(data);
	com.indigo.models.Enemy.enemyTypes = new haxe.ds.StringMap();
	com.indigo.models.Enemy.enemyIdList = [];
	var newEnemy;
	var _g = 0;
	while(_g < jsonData.length) {
		var enemy = jsonData[_g];
		++_g;
		newEnemy = new com.indigo.models.Enemy();
		newEnemy.name = enemy.name;
		newEnemy.hp = enemy.hp;
		newEnemy.scoreValue = enemy.scoreValue;
		newEnemy.accel = enemy.accel;
		newEnemy.initVel = enemy.initVel;
		newEnemy.maxVel = enemy.maxVel;
		newEnemy.waveStart = enemy.waveStart;
		newEnemy.setGraphicComponent(enemy.graphicComponent);
		newEnemy.setLogicComponents(enemy.logicComponents);
		com.indigo.models.Enemy.enemyTypes.set(newEnemy.name,newEnemy);
		com.indigo.models.Enemy.enemyIdList.push(newEnemy.name);
	}
};
com.indigo.models.Enemy.getEnemyType = function(name) {
	if(com.indigo.models.Enemy.enemyTypes == null) return null;
	var returnEnemy = com.indigo.models.Enemy.enemyTypes.get(name);
	if(returnEnemy == null) {
	}
	return returnEnemy;
};
com.indigo.models.Enemy.prototype = {
	setGraphicComponent: function(graphic) {
		if(Type.getClass(graphic) == String) this.graphicComponent = new com.tkb.models.GraphicComponentEntry(Type.resolveClass(graphic)); else {
			var classType = Type.resolveClass(graphic.graphic);
			var handlers = graphic.params;
			this.graphicComponent = new com.tkb.models.GraphicComponentEntry(classType,handlers);
		}
	}
	,setLogicComponents: function(value) {
		var _g = 0;
		while(_g < value.length) {
			var logic = value[_g];
			++_g;
			if(Type.getClass(logic) == String) this.logicComponents.push(new com.tkb.models.LogicComponentEntry(Type.resolveClass(logic))); else {
				var classType = Type.resolveClass(logic.logic);
				var handlers = logic.params;
				this.logicComponents.push(new com.tkb.models.LogicComponentEntry(classType,handlers));
			}
		}
	}
	,__class__: com.indigo.models.Enemy
};
com.indigo.pages = {};
com.indigo.pages.GameOverScreen = function() {
	openfl.display.Sprite.call(this);
	this.bg2 = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/ui_gameover_container.png"));
	this.bg2.set_x(640 / 2 - this.bg2.get_width() / 2);
	this.bg2.set_y(384 / 2 - this.bg2.get_height() * .65);
	this.addChild(this.bg2);
	var gameOverText = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.center(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),640,com.utils.ResizeUtility.adjustSize(180)),com.utils.ResizeUtility.adjustSize(32)),"Game Over");
	gameOverText.embedFonts = true;
	com.philipmabanta.tools.display.DisplayObjectTools.setPos(gameOverText,0,this.bg2.get_y() + com.utils.ResizeUtility.adjustSize(10) - com.utils.ResizeUtility.adjustSize(73));
	this.gameOverText2 = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.center(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),640,com.utils.ResizeUtility.adjustSize(180)),com.utils.ResizeUtility.adjustSize(48)),"YOUR SCORE");
	this.gameOverText2.embedFonts = true;
	com.philipmabanta.tools.display.DisplayObjectTools.setPos(this.gameOverText2,0,this.bg2.get_y() + this.bg2.get_height() * 0.2);
	this.addChild(this.gameOverText2);
	this.waveText = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.left(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),2361626),com.utils.ResizeUtility.adjustSize(200),com.utils.ResizeUtility.adjustSize(180)),com.utils.ResizeUtility.adjustSize(48)),"Total Waves");
	this.waveText.embedFonts = true;
	com.philipmabanta.tools.display.DisplayObjectTools.setPos(this.waveText,this.bg2.get_x() + this.bg2.get_width() * 0.15,this.bg2.get_y() + this.bg2.get_height() * 0.5);
	this.addChild(this.waveText);
	this.waveField = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.left(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),com.utils.ResizeUtility.adjustSize(200),com.utils.ResizeUtility.adjustSize(180)),com.utils.ResizeUtility.adjustSize(48)),"");
	this.waveField.embedFonts = true;
	com.philipmabanta.tools.display.DisplayObjectTools.setPos(this.waveField,this.bg2.get_x() + this.bg2.get_width() * 0.6,this.bg2.get_y() + this.bg2.get_height() * 0.5);
	this.addChild(this.waveField);
	this.scoreText = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.left(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),2361626),com.utils.ResizeUtility.adjustSize(200),com.utils.ResizeUtility.adjustSize(180)),com.utils.ResizeUtility.adjustSize(48)),"Total Score");
	this.scoreText.embedFonts = true;
	com.philipmabanta.tools.display.DisplayObjectTools.setPos(this.scoreText,this.bg2.get_x() + this.bg2.get_width() * 0.15,this.bg2.get_y() + this.bg2.get_height() * 0.73);
	this.addChild(this.scoreText);
	this.scoreField = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.left(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),com.utils.ResizeUtility.adjustSize(200),com.utils.ResizeUtility.adjustSize(180)),com.utils.ResizeUtility.adjustSize(48)),"Score");
	this.scoreField.embedFonts = true;
	com.philipmabanta.tools.display.DisplayObjectTools.setPos(this.scoreField,this.bg2.get_x() + this.bg2.get_width() * 0.6,this.bg2.get_y() + this.bg2.get_height() * 0.73);
	this.addChild(this.scoreField);
	this.playButton = new openfl.display.Sprite();
	this.playButton.addChild(new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/btn_restart_idle.png"),openfl.Assets.getBitmapData("img/ui/btn_restart_press.png")));
	this.playButton.mouseChildren = false;
	this.playButton.buttonMode = true;
	this.playButton.set_x(openfl.Lib.current.stage.stageWidth / 2 - this.playButton.get_width() * 1.5);
	this.playButton.set_y(openfl.Lib.current.stage.stageHeight - this.playButton.get_height() * 1.5);
	this.addChild(this.playButton);
	this.exitButton = new openfl.display.Sprite();
	this.exitButton.addChild(new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/asset_exitBtn_idle.png"),openfl.Assets.getBitmapData("img/ui/asset_exitBtn_pressed.png")));
	this.exitButton.mouseChildren = false;
	this.exitButton.buttonMode = true;
	this.exitButton.set_x(openfl.Lib.current.stage.stageWidth / 2 + this.exitButton.get_width() * 0.5);
	this.exitButton.set_y(openfl.Lib.current.stage.stageHeight - this.exitButton.get_height() * 1.5);
	this.addChild(this.exitButton);
	this.playButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onPlayAgain));
	this.exitButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onExit));
};
$hxClasses["com.indigo.pages.GameOverScreen"] = com.indigo.pages.GameOverScreen;
com.indigo.pages.GameOverScreen.__name__ = ["com","indigo","pages","GameOverScreen"];
com.indigo.pages.GameOverScreen.__interfaces__ = [com.tkb.interfaces.IDisposable];
com.indigo.pages.GameOverScreen.instance = null;
com.indigo.pages.GameOverScreen.initialize = function() {
	com.indigo.pages.GameOverScreen.instance = new com.indigo.pages.GameOverScreen();
	com.indigo.pages.GameOverScreen.instance.set_y(openfl.Lib.current.stage.stageHeight);
};
com.indigo.pages.GameOverScreen.showGameOverScreen = function(message) {
	if(message == null) message = "WOLVES HAVE INFILTRATED\n THE CANDY KINGDOM";
	com.indigo.pages.GameOverScreen.instance.build();
	com.indigo.pages.GameOverScreen.instance.waveField.set_text(Std.string(com.indigo.controllers.WaveManager.instance.waveNumber - 1));
	com.indigo.pages.GameOverScreen.instance.scoreField.set_text(Std.string(com.indigo.controllers.WaveManager.playerScore));
	com.indigo.controllers.GameManager.end();
	com.indigo.utils.UIBlock.block();
	com.indigo.pages.GameOverScreen.instance.isAnimating = false;
};
com.indigo.pages.GameOverScreen.__super__ = openfl.display.Sprite;
com.indigo.pages.GameOverScreen.prototype = $extend(openfl.display.Sprite.prototype,{
	build: function() {
		this.set_y(openfl.Lib.current.stage.stageHeight);
		motion.Actuate.tween(this,0.8,{ y : 0}).ease(motion.easing.Back.get_easeOut());
		com.tkb.controllers.DisplayManager.add(this,7);
	}
	,dispose: function() {
		var _g = this;
		motion.Actuate.tween(this,0.6,{ y : openfl.Lib.current.stage.stageHeight}).ease(motion.easing.Sine.get_easeOut()).onComplete(function() {
			com.tkb.controllers.DisplayManager.remove(_g);
		});
		return this;
	}
	,onPlayAgain: function(event) {
		if(this.isAnimating) return;
		this.isAnimating = true;
		this.dispose();
		com.indigo.utils.UIBlock.unblock();
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
		com.indigo.controllers.GameManager.restart();
	}
	,onExit: function(event) {
		if(this.isAnimating) return;
		this.isAnimating = true;
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
		this.dispose();
		com.indigo.utils.UIBlock.unblock();
		com.indigo.controllers.GameManager.instance.dispose();
		com.indigo.pages.TitleScreen.showTitleScreen();
	}
	,__class__: com.indigo.pages.GameOverScreen
});
com.indigo.pages.TitleScreen = function() {
	openfl.display.Sprite.call(this);
};
$hxClasses["com.indigo.pages.TitleScreen"] = com.indigo.pages.TitleScreen;
com.indigo.pages.TitleScreen.__name__ = ["com","indigo","pages","TitleScreen"];
com.indigo.pages.TitleScreen.__interfaces__ = [com.tkb.interfaces.IDisposable];
com.indigo.pages.TitleScreen.instance = null;
com.indigo.pages.TitleScreen.initialize = function() {
	com.indigo.pages.TitleScreen.instance = new com.indigo.pages.TitleScreen();
	com.indigo.pages.TitleScreen.instance.set_alpha(0);
};
com.indigo.pages.TitleScreen.showTitleScreen = function() {
	com.indigo.pages.TitleScreen.instance.build();
	com.indigo.pages.TitleScreen.instance.isAnimating = false;
};
com.indigo.pages.TitleScreen.hideTitleScreen = function() {
	com.indigo.pages.TitleScreen.instance.dispose();
};
com.indigo.pages.TitleScreen.__super__ = openfl.display.Sprite;
com.indigo.pages.TitleScreen.prototype = $extend(openfl.display.Sprite.prototype,{
	onMute: function(event) {
	}
	,build: function() {
		var _g = this;
		this.background = new openfl.display.Sprite();
		this.background.addChild(new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/asset_title_screen.png")));
		this.background.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onGame));
		this.tapButton = new openfl.display.Sprite();
		this.tapButton.addChild(new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/asset_click_to_play_container.png")));
		this.tapToPlay = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.center(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),this.tapButton.get_width(),this.tapButton.get_height()),com.utils.ResizeUtility.adjustSize(36)),"Tap To Play");
		this.tapToPlay.embedFonts = true;
		com.philipmabanta.tools.display.DisplayObjectTools.setPos(this.tapToPlay,0,this.tapButton.get_height() * 0.5 - this.tapToPlay.get_textHeight() / 2);
		this.wane();
		this.tapButton.addChild(this.tapToPlay);
		this.tapButton.mouseEnabled = false;
		this.tapButton.mouseChildren = false;
		this.tapButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onGame));
		this.tapButton.set_x(640 / 2 - this.tapButton.get_width() / 2);
		this.htpButton = new openfl.display.Sprite();
		this.htpButton.addChild(new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/asset_click_to_play_container.png")));
		this.htp = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.center(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),this.htpButton.get_width(),this.htpButton.get_height()),com.utils.ResizeUtility.adjustSize(36)),"How To Play");
		this.htp.embedFonts = true;
		com.philipmabanta.tools.display.DisplayObjectTools.setPos(this.htp,0,this.htpButton.get_height() * 0.5 - this.htp.get_textHeight() / 2);
		this.htpButton.addChild(this.htp);
		this.htpButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onClick));
		this.htpButton.set_x(640 / 2 - this.htpButton.get_width() / 2);
		this.muteButton = new openfl.display.Sprite();
		this.muteOnBitmap = new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/asset_soundOnBtn_idle.png"),openfl.Assets.getBitmapData("img/ui/asset_soundOnBtn_pressed.png"));
		this.muteOffBitmap = new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/asset_soundOffBtn_idle.png"),openfl.Assets.getBitmapData("img/ui/asset_soundOffBtn_pressed.png"));
		this.muteOffBitmap.set_visible(false);
		this.muteButton.addChild(this.muteOffBitmap);
		this.muteButton.addChild(this.muteOnBitmap);
		this.muteButton.mouseChildren = false;
		this.muteButton.buttonMode = true;
		this.muteButton.set_x(this.background.get_width() - this.muteButton.get_width() * 1.5);
		this.muteButton.set_y(this.muteButton.get_width() * 0.25);
		this.muteButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onMute));
		this.addChild(this.background);
		this.addChild(this.tapButton);
		this.addChild(this.htpButton);
		this.htp.set_alpha(1);
		this.htpButton.set_y(384);
		this.tapButton.set_y(384);
		this.set_alpha(0);
		motion.Actuate.tween(this,0.8,{ alpha : 1}).ease(motion.easing.Sine.get_easeOut()).onComplete(function() {
			motion.Actuate.tween(_g.htpButton,0.8,{ y : 384 * 0.9 - _g.htpButton.get_height() / 2}).ease(motion.easing.Sine.get_easeOut());
			motion.Actuate.tween(_g.tapButton,0.8,{ y : 384 * 0.75 - _g.tapButton.get_height() / 2}).onComplete(function() {
				com.philipmabanta.tools.display.TextTools.font(_g.htp,com.indigo.controllers.LocalizationManager.defaultFont);
				com.philipmabanta.tools.display.TextTools.font(_g.tapToPlay,com.indigo.controllers.LocalizationManager.defaultFont);
			});
		});
		com.tkb.controllers.DisplayManager.add(this,7);
	}
	,dispose: function() {
		var _g = this;
		motion.Actuate.tween(this,0.6,{ alpha : 0}).ease(motion.easing.Sine.get_easeOut()).onComplete(function() {
			com.tkb.controllers.DisplayManager.remove(_g);
			_g.background.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(_g,_g.onGame));
			while(_g.background.get_numChildren() > 0) _g.background.removeChildAt(0);
			_g.background = null;
			motion.Actuate.stop(_g.tapToPlay);
			_g.tapButton.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(_g,_g.onGame));
			while(_g.tapButton.get_numChildren() > 0) _g.tapButton.removeChildAt(0);
			_g.tapToPlay = null;
			_g.tapButton = null;
			_g.htpButton.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(_g,_g.onClick));
			while(_g.htpButton.get_numChildren() > 0) _g.htpButton.removeChildAt(0);
			_g.htpButton = null;
			_g.muteButton.removeChild(_g.muteOnBitmap);
			_g.muteButton.removeChild(_g.muteOffBitmap);
			_g.muteOnBitmap.dispose();
			_g.muteOffBitmap.dispose();
			_g.muteOnBitmap = null;
			_g.muteOffBitmap = null;
			_g.muteButton = null;
		});
		return this;
	}
	,wax: function() {
		if(this.tapToPlay == null) return;
		motion.Actuate.tween(this.tapToPlay,1,{ alpha : 1}).onComplete($bind(this,this.wane));
	}
	,wane: function() {
		if(this.tapToPlay == null) return;
		motion.Actuate.tween(this.tapToPlay,1,{ alpha : 0}).onComplete($bind(this,this.wax));
	}
	,onClick: function(event) {
		if(this.isAnimating) return;
		this.isAnimating = true;
		this.dispose();
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
		com.indigo.controllers.GameManager.instance.build(true);
	}
	,onGame: function(event) {
		if(this.isAnimating) return;
		this.isAnimating = true;
		this.dispose();
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
		com.indigo.controllers.GameManager.instance.build();
	}
	,__class__: com.indigo.pages.TitleScreen
});
com.indigo.ui = {};
com.indigo.ui.HowToPlayPopup = function() {
	openfl.display.Sprite.call(this);
	this.bg2 = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/asset_click_to_play_container.png"));
	this.bg2.set_x(640 / 2 - this.bg2.get_width() / 2);
	this.bg2.set_y(384 * 0.1 - this.bg2.get_height() / 2);
	var newBMP;
	this.tutorialImages = [];
	var _g = 1;
	while(_g < 8) {
		var i = _g++;
		newBMP = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/tut_content_0" + i + ".png"));
		newBMP.set_x(0);
		newBMP.set_y(0);
		this.tutorialImages.push(newBMP);
	}
	var leftButtonIdle = openfl.Assets.getBitmapData("img/ui/left_btn.png");
	var leftButtonPressed = openfl.Assets.getBitmapData("img/ui/left_btn.png");
	this.leftButton = new openfl.display.Sprite();
	this.leftButton.addChild(new com.tkb.ui.TwoStateBitmapComponent(leftButtonIdle,leftButtonPressed));
	this.leftButton.set_x(-leftButtonIdle.width * 0.2);
	this.leftButton.set_y(384 / 2 - leftButtonIdle.height / 2);
	this.leftButton.mouseChildren = false;
	this.leftButton.buttonMode = true;
	com.philipmabanta.tools.display.UITools.addDownState(this.leftButton);
	this.leftButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onScroll));
	this.rightButton = new openfl.display.Sprite();
	var arrow = new com.tkb.ui.TwoStateBitmapComponent(leftButtonIdle,leftButtonPressed);
	arrow.set_scaleX(-1);
	arrow.set_x(-arrow.get_width());
	this.rightButton.addChild(arrow);
	this.rightButton.set_x(640 - leftButtonIdle.width * 0.8);
	this.rightButton.set_y(384 / 2 - leftButtonIdle.height / 2);
	this.rightButton.mouseChildren = false;
	this.rightButton.buttonMode = true;
	com.philipmabanta.tools.display.UITools.addDownState(this.rightButton);
	this.rightButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onScroll));
	this.howToPlayPages = [new openfl.display.Sprite(),new openfl.display.Sprite(),new openfl.display.Sprite(),new openfl.display.Sprite(),new openfl.display.Sprite(),new openfl.display.Sprite()];
	var headerText = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.center(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),this.bg2.get_width(),com.utils.ResizeUtility.adjustSize(180)),com.utils.ResizeUtility.adjustSize(32)),"How to Play");
	headerText.embedFonts = true;
	com.philipmabanta.tools.display.DisplayObjectTools.setPos(headerText,this.bg2.get_x(),this.bg2.get_y() + com.utils.ResizeUtility.adjustSize(14));
	this.yesButton = new openfl.display.Sprite();
	this.yesButton.addChild(new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/btn_play_revised.png"),openfl.Assets.getBitmapData("img/ui/btn_play_pressed_revised.png")));
	var playText = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.center(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),this.yesButton.get_width(),this.yesButton.get_height()),com.utils.ResizeUtility.adjustSize(46)),"Play");
	playText.embedFonts = true;
	com.philipmabanta.tools.display.DisplayObjectTools.setPos(playText,0,0);
	playText.set_y(this.yesButton.get_height() / 2 - playText.get_textHeight() / 2);
	this.yesButton.mouseChildren = false;
	this.yesButton.buttonMode = true;
	this.yesButton.addChild(playText);
	this.yesButton.set_x(640 / 2 - this.yesButton.get_width() / 2);
	this.yesButton.set_y(384 * 0.95 - this.yesButton.get_height());
	this.yesButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onClick));
	this.addChild(this.leftButton);
	this.addChild(this.rightButton);
	this.addChild(this.yesButton);
	this.createPage(this.selectedPage = 0,1);
	this.set_x(0);
	this.set_y(openfl.Lib.current.stage.stageHeight);
};
$hxClasses["com.indigo.ui.HowToPlayPopup"] = com.indigo.ui.HowToPlayPopup;
com.indigo.ui.HowToPlayPopup.__name__ = ["com","indigo","ui","HowToPlayPopup"];
com.indigo.ui.HowToPlayPopup.instance = null;
com.indigo.ui.HowToPlayPopup.initialize = function() {
};
com.indigo.ui.HowToPlayPopup.showHowToPlay = function(callback) {
	com.indigo.ui.HowToPlayPopup.instance = new com.indigo.ui.HowToPlayPopup();
	com.indigo.ui.HowToPlayPopup.instance.callback = callback;
	com.indigo.ui.HowToPlayPopup.instance.set_y(openfl.Lib.current.stage.stageHeight);
	motion.Actuate.tween(com.indigo.ui.HowToPlayPopup.instance,0.5,{ y : 0}).ease(motion.easing.Sine.get_easeOut());
	com.indigo.ui.HowToPlayPopup.instance.isAnimating = false;
	com.tkb.controllers.DisplayManager.add(com.indigo.ui.HowToPlayPopup.instance,8);
};
com.indigo.ui.HowToPlayPopup.__super__ = openfl.display.Sprite;
com.indigo.ui.HowToPlayPopup.prototype = $extend(openfl.display.Sprite.prototype,{
	destroy: function() {
		this.bg2.bitmapData = null;
		this.bg2 = null;
		while(this.howToPlayPages.length > 0) {
			var page = this.howToPlayPages.pop();
			while(page.get_numChildren() > 0) page.removeChildAt(0);
			page = null;
		}
		this.howToPlayPages = null;
		while(this.tutorialImages.length > 0) {
			var image = this.tutorialImages.pop();
			image.bitmapData = null;
			image = null;
		}
		this.tutorialImages = null;
		while(this.leftButton.get_numChildren() > 0) this.leftButton.removeChildAt(0);
		com.philipmabanta.tools.display.UITools.removeDownState(this.leftButton);
		this.leftButton.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onScroll));
		while(this.rightButton.get_numChildren() > 0) this.rightButton.removeChildAt(0);
		com.philipmabanta.tools.display.UITools.removeDownState(this.rightButton);
		this.rightButton.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onScroll));
		while(this.yesButton.get_numChildren() > 0) this.yesButton.removeChildAt(0);
		this.yesButton.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onClick));
		while(this.get_numChildren() > 0) this.removeChildAt(0);
	}
	,onScroll: function(event) {
		var _g = this;
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
		if(event.target == this.leftButton) {
			if(this.selectedPage == 0) return;
			if(this.isAnimating) return;
			this.isAnimating = true;
			this.destroyPage(this.selectedPage,1,function() {
				_g.selectedPage--;
				_g.createPage(_g.selectedPage,-1);
				_g.isAnimating = false;
			});
		} else {
			if(this.selectedPage == this.howToPlayPages.length - 1) return;
			if(this.isAnimating) return;
			this.isAnimating = true;
			this.destroyPage(this.selectedPage,-1,function() {
				_g.selectedPage++;
				_g.createPage(_g.selectedPage,1);
				_g.isAnimating = false;
			});
		}
	}
	,onClick: function(event) {
		var _g = this;
		if(this.isAnimating) return;
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
		this.isAnimating = true;
		if(this.callback != null) {
			com.indigo.utils.UIBlock.unblock();
			motion.Actuate.tween(this,0.8,{ y : -this.get_height()}).ease(motion.easing.Sine.get_easeOut()).onComplete(function(callback) {
				callback();
				_g.destroy();
				com.tkb.controllers.DisplayManager.remove(_g);
			},[this.callback]);
		} else motion.Actuate.tween(this,0.8,{ y : -this.get_height()}).ease(motion.easing.Sine.get_easeOut()).onComplete(function() {
			_g.destroy();
			com.tkb.controllers.DisplayManager.remove(_g);
		});
		this.callback = null;
	}
	,destroyPage: function(page,destination,callback) {
		var _g = this;
		motion.Actuate.tween(this.howToPlayPages[page],0.25,{ x : openfl.Lib.current.stage.stageWidth * destination}).onComplete(function() {
			_g.removeChild(_g.howToPlayPages[page]);
			if(callback != null) callback();
		});
	}
	,createPage: function(page,origin) {
		var texthighlight = new openfl.text.TextFormat(com.indigo.controllers.LocalizationManager.defaultFont,18,14483456);
		this.howToPlayPages[page].set_x(openfl.Lib.current.stage.stageWidth * origin);
		switch(page) {
		case 0:
			this.howToPlayPages[page].addChild(this.tutorialImages[page]);
			this.leftButton.set_visible(false);
			this.rightButton.set_visible(true);
			break;
		case 1:
			this.howToPlayPages[page].addChild(this.tutorialImages[page]);
			this.leftButton.set_visible(true);
			this.rightButton.set_visible(true);
			break;
		case 2:
			this.howToPlayPages[page].addChild(this.tutorialImages[page]);
			this.leftButton.set_visible(true);
			this.rightButton.set_visible(true);
			break;
		case 3:
			this.howToPlayPages[page].addChild(this.tutorialImages[page]);
			this.leftButton.set_visible(true);
			this.rightButton.set_visible(true);
			break;
		case 4:
			this.howToPlayPages[page].addChild(this.tutorialImages[page]);
			this.leftButton.set_visible(true);
			this.rightButton.set_visible(true);
			break;
		case 5:
			this.howToPlayPages[page].addChild(this.tutorialImages[page]);
			this.leftButton.set_visible(true);
			this.rightButton.set_visible(false);
			break;
		}
		this.addChildAt(this.howToPlayPages[page],0);
		motion.Actuate.tween(this.howToPlayPages[page],0.25,{ x : 0});
	}
	,__class__: com.indigo.ui.HowToPlayPopup
});
com.indigo.ui.PausePopup = function() {
	openfl.display.Sprite.call(this);
	return;
	this.get_graphics().beginFill(0,0);
	this.get_graphics().drawRect(0,0,640,384);
	this.get_graphics().endFill();
	var tempText;
	this.background = new openfl.display.Bitmap(openfl.Assets.getBitmapData("img/ui/ui_pausecontainer.png"));
	this.background.set_x(640 / 2 - this.background.get_width() / 2);
	this.background.set_y(384 / 2 - this.background.get_height() / 2);
	this.addChild(this.background);
	var headerText = com.philipmabanta.tools.display.TextTools.setText(com.philipmabanta.tools.display.TextTools.size(com.philipmabanta.tools.display.DisplayObjectTools.setSize(com.philipmabanta.tools.display.TextTools.color(com.philipmabanta.tools.display.TextTools.font(com.philipmabanta.tools.display.TextTools.center(com.philipmabanta.tools.display.TextTools.label(new openfl.text.TextField())),com.indigo.controllers.LocalizationManager.defaultFont),16777215),640,com.utils.ResizeUtility.adjustSize(180)),com.utils.ResizeUtility.adjustSize(36)),"Paused");
	headerText.embedFonts = true;
	com.philipmabanta.tools.display.DisplayObjectTools.setPos(headerText,0,this.background.get_y() + com.utils.ResizeUtility.adjustSize(11));
	this.howToPlayButton = new openfl.display.Sprite();
	this.howToPlayButton.addChild(new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/asset_helpBtn_idle.png"),openfl.Assets.getBitmapData("img/ui/asset_helpBtn_pressed.png")));
	this.howToPlayButton.mouseChildren = false;
	this.howToPlayButton.buttonMode = true;
	this.howToPlayButton.set_x(this.background.get_x() + (this.background.get_width() * 2 / 4 - this.howToPlayButton.get_width() / 2));
	this.howToPlayButton.set_y(this.background.get_y() + (this.background.get_height() / 2 - com.utils.ResizeUtility.adjustSize(4)));
	this.howToPlayButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onHowToPlay));
	this.resumeButton = new openfl.display.Sprite();
	this.resumeButton.addChild(new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/asset_resumeBtn_idle.png"),openfl.Assets.getBitmapData("img/ui/asset_resumeBtn_pressed.png")));
	this.resumeButton.mouseChildren = false;
	this.resumeButton.buttonMode = true;
	this.resumeButton.set_x(this.background.get_x() + (this.background.get_width() / 4 - this.resumeButton.get_width() / 2) - com.utils.ResizeUtility.adjustSize(9));
	this.resumeButton.set_y(this.background.get_y() + (this.background.get_height() / 2 - com.utils.ResizeUtility.adjustSize(4)));
	this.resumeButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onResume));
	this.quitButton = new openfl.display.Sprite();
	this.quitButton.addChild(new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/asset_exitBtn_idle.png"),openfl.Assets.getBitmapData("img/ui/asset_exitBtn_pressed.png")));
	this.quitButton.mouseChildren = false;
	this.quitButton.buttonMode = true;
	this.quitButton.set_x(this.background.get_x() + (this.background.get_width() * 3 / 4 - this.quitButton.get_width() / 2) + com.utils.ResizeUtility.adjustSize(9));
	this.quitButton.set_y(this.background.get_y() + (this.background.get_height() / 2 - com.utils.ResizeUtility.adjustSize(4)));
	this.quitButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onQuit));
	this.muteButton = new openfl.display.Sprite();
	this.muteOnBitmap = new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/asset_soundOnBtn_idle.png"),openfl.Assets.getBitmapData("img/ui/asset_soundOnBtn_pressed.png"));
	this.muteOffBitmap = new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/asset_soundOffBtn_idle.png"),openfl.Assets.getBitmapData("img/ui/asset_soundOffBtn_pressed.png"));
	if(com.indigo.controllers.SoundManager.muteAllSounds) {
		this.muteOnBitmap.set_visible(false);
		this.muteOffBitmap.set_visible(true);
	} else {
		this.muteOnBitmap.set_visible(true);
		this.muteOffBitmap.set_visible(false);
	}
	this.muteButton.addChild(this.muteOffBitmap);
	this.muteButton.addChild(this.muteOnBitmap);
	this.muteButton.mouseChildren = false;
	this.muteButton.buttonMode = true;
	this.muteButton.set_x(this.background.get_x() + (this.background.get_width() * 2 / 4 - this.muteButton.get_width() / 2));
	this.muteButton.set_y(this.background.get_y() + (this.background.get_height() / 2 - com.utils.ResizeUtility.adjustSize(4)));
	this.muteButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onMute));
	this.codeButton = new openfl.display.Sprite();
	this.codeButton.addChild(new com.tkb.ui.TwoStateBitmapComponent(openfl.Assets.getBitmapData("img/ui/btn_restart_idle.png"),openfl.Assets.getBitmapData("img/ui/btn_restart_press.png")));
	this.codeButton.mouseChildren = false;
	this.codeButton.buttonMode = true;
	this.codeButton.set_x(this.background.get_x() + (this.background.get_width() * 2 / 4 - this.codeButton.get_width() / 2) - 3);
	this.codeButton.set_y(this.background.get_y() + (this.background.get_height() / 2 - 4));
	com.philipmabanta.tools.display.UITools.addDownState(this.codeButton);
	this.codeButton.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onCode));
	this.addChild(headerText);
	this.addChild(this.resumeButton);
	this.addChild(this.quitButton);
	this.addChild(this.muteButton);
};
$hxClasses["com.indigo.ui.PausePopup"] = com.indigo.ui.PausePopup;
com.indigo.ui.PausePopup.__name__ = ["com","indigo","ui","PausePopup"];
com.indigo.ui.PausePopup.__interfaces__ = [com.tkb.interfaces.IDisposable];
com.indigo.ui.PausePopup.instance = null;
com.indigo.ui.PausePopup.initialize = function() {
	com.indigo.ui.PausePopup.instance = new com.indigo.ui.PausePopup();
	com.indigo.ui.PausePopup.instance.set_x(640 / 2 - com.indigo.ui.PausePopup.instance.get_width() / 2);
	com.indigo.ui.PausePopup.instance.set_y(384);
};
com.indigo.ui.PausePopup.showPause = function() {
	com.indigo.utils.UIBlock.block(com.tkb.controllers.UpdateManager.pause);
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("unpause",($_=com.indigo.ui.PausePopup.instance,$bind($_,$_.onResume)));
	com.indigogaming.wnpdispatcher.WNPInterface.get_instance().addEventListener("reload",($_=com.indigo.ui.PausePopup.instance,$bind($_,$_.onReload)));
	com.indigo.ui.PausePopup.instance.set_y(384);
	motion.Actuate.tween(com.indigo.ui.PausePopup.instance,0.5,{ y : 384 / 2 - com.indigo.ui.PausePopup.instance.get_height() / 2}).ease(motion.easing.Sine.get_easeOut());
	com.indigo.ui.PausePopup.instance.isAnimating = false;
	com.tkb.controllers.DisplayManager.add(com.indigo.ui.PausePopup.instance,7);
};
com.indigo.ui.PausePopup.__super__ = openfl.display.Sprite;
com.indigo.ui.PausePopup.prototype = $extend(openfl.display.Sprite.prototype,{
	dispose: function() {
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().removeEventListener("unpause",$bind(this,this.onResume));
		com.indigogaming.wnpdispatcher.WNPInterface.get_instance().removeEventListener("unpause",$bind(this,this.onReload));
		return this;
	}
	,onHowToPlay: function(event) {
		if(this.isAnimating) return;
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
		this.isAnimating = true;
		motion.Actuate.tween(this,0.8,{ y : -this.get_height()}).ease(motion.easing.Sine.get_easeIn()).onComplete(com.indigo.ui.HowToPlayPopup.showHowToPlay,[com.indigo.ui.PausePopup.showPause]);
	}
	,onResume: function(event) {
		com.tkb.controllers.UpdateManager.resume();
		com.indigo.utils.UIBlock.unblock();
	}
	,onReload: function(event) {
		this.dispose();
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
		com.indigo.controllers.GameManager.end();
		haxe.Timer.delay(function() {
			com.tkb.controllers.UpdateManager.resume();
			com.indigo.utils.UIBlock.unblock();
			com.indigo.controllers.GameManager.restart();
		},1000);
	}
	,onQuit: function(event) {
		if(this.isAnimating) return;
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
		motion.Actuate.tween(this,0.8,{ y : -this.get_height()}).ease(motion.easing.Sine.get_easeIn()).onComplete($bind(this,this.onQuitComplete));
	}
	,onQuitConfirm: function() {
		if(this.isAnimating) return;
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
		this.isAnimating = true;
		motion.Actuate.tween(this,0.8,{ y : -this.get_height()}).ease(motion.easing.Sine.get_easeIn()).onComplete($bind(this,this.onQuitComplete));
	}
	,onQuitComplete: function() {
		com.indigo.controllers.GameManager.end();
		com.indigo.pages.GameOverScreen.showGameOverScreen();
		com.tkb.controllers.UpdateManager.resume();
		com.tkb.controllers.DisplayManager.remove(this);
	}
	,onMute: function(event) {
		if(com.indigo.controllers.SoundManager.muteAllSounds) {
			com.indigo.controllers.SoundManager.unmuteAll();
			this.muteOnBitmap.set_visible(true);
			this.muteOffBitmap.set_visible(false);
			com.indigo.controllers.SoundManager.muteAllSounds = false;
		} else {
			com.indigo.controllers.SoundManager.muteAll();
			this.muteOnBitmap.set_visible(false);
			this.muteOffBitmap.set_visible(true);
		}
		com.indigo.controllers.SoundManager.playSFX("snd/ButtonSFX.ogg");
	}
	,onCode: function(event) {
	}
	,__class__: com.indigo.ui.PausePopup
});
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
com.indigo.utils = {};
com.indigo.utils.UIBlock = function() {
	openfl.display.Shape.call(this);
	this.get_graphics().beginFill(0,0.8);
	this.get_graphics().drawRect(0,0,640,384);
	this.get_graphics().endFill();
};
$hxClasses["com.indigo.utils.UIBlock"] = com.indigo.utils.UIBlock;
com.indigo.utils.UIBlock.__name__ = ["com","indigo","utils","UIBlock"];
com.indigo.utils.UIBlock.instance = null;
com.indigo.utils.UIBlock.initialize = function() {
	com.indigo.utils.UIBlock.instance = new com.indigo.utils.UIBlock();
	com.indigo.utils.UIBlock.instance.set_alpha(0);
	com.indigo.utils.UIBlock.instance.set_visible(false);
	com.tkb.controllers.DisplayManager.add(com.indigo.utils.UIBlock.instance,6);
};
com.indigo.utils.UIBlock.block = function(onComplete) {
	com.indigo.utils.UIBlock.instance.set_visible(true);
	com.indigo.utils.UIBlock.instance.set_alpha(1);
	if(onComplete != null) onComplete();
};
com.indigo.utils.UIBlock.unblock = function() {
	com.indigo.utils.UIBlock.instance.set_alpha(0);
	com.indigo.utils.UIBlock.instance.set_visible(false);
};
com.indigo.utils.UIBlock.__super__ = openfl.display.Shape;
com.indigo.utils.UIBlock.prototype = $extend(openfl.display.Shape.prototype,{
	__class__: com.indigo.utils.UIBlock
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
var spritesheet = {};
spritesheet.data = {};
spritesheet.data.SpritesheetFrame = function(x,y,width,height,offsetX,offsetY) {
	if(offsetY == null) offsetY = 0;
	if(offsetX == null) offsetX = 0;
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.offsetX = offsetX;
	this.offsetY = offsetY;
};
$hxClasses["spritesheet.data.SpritesheetFrame"] = spritesheet.data.SpritesheetFrame;
spritesheet.data.SpritesheetFrame.__name__ = ["spritesheet","data","SpritesheetFrame"];
spritesheet.data.SpritesheetFrame.prototype = {
	__class__: spritesheet.data.SpritesheetFrame
};
com.models = {};
com.models.SpritesheetFrameScRef = function(x,y,width,height,offsetX,offsetY,sourceWidth,sourceHeight) {
	if(sourceHeight == null) sourceHeight = 0;
	if(sourceWidth == null) sourceWidth = 0;
	if(offsetY == null) offsetY = 0;
	if(offsetX == null) offsetX = 0;
	if(height == null) height = 0;
	if(width == null) width = 0;
	if(y == null) y = 0;
	if(x == null) x = 0;
	spritesheet.data.SpritesheetFrame.call(this,x,y,width,height,offsetX,offsetY);
	this.sourceWidth = sourceWidth;
	this.sourceHeight = sourceHeight;
};
$hxClasses["com.models.SpritesheetFrameScRef"] = com.models.SpritesheetFrameScRef;
com.models.SpritesheetFrameScRef.__name__ = ["com","models","SpritesheetFrameScRef"];
com.models.SpritesheetFrameScRef.__super__ = spritesheet.data.SpritesheetFrame;
com.models.SpritesheetFrameScRef.prototype = $extend(spritesheet.data.SpritesheetFrame.prototype,{
	__class__: com.models.SpritesheetFrameScRef
});
com.philipmabanta = {};
com.philipmabanta.tools = {};
com.philipmabanta.tools.display = {};
com.philipmabanta.tools.display.DisplayObjectContainerTools = function() { };
$hxClasses["com.philipmabanta.tools.display.DisplayObjectContainerTools"] = com.philipmabanta.tools.display.DisplayObjectContainerTools;
com.philipmabanta.tools.display.DisplayObjectContainerTools.__name__ = ["com","philipmabanta","tools","display","DisplayObjectContainerTools"];
com.philipmabanta.tools.display.DisplayObjectContainerTools.addChildren = function(d,children) {
	return com.philipmabanta.tools.display.DisplayObjectContainerTools.inlineAddChildren(d,children);
};
com.philipmabanta.tools.display.DisplayObjectContainerTools.replaceChild = function(d,childToReplace,newChild) {
	return com.philipmabanta.tools.display.DisplayObjectContainerTools.inlineReplaceChild(d,childToReplace,newChild);
};
com.philipmabanta.tools.display.DisplayObjectContainerTools.removeChildList = function(dc,children) {
	return com.philipmabanta.tools.display.DisplayObjectContainerTools.inlineRemoveChildList(dc,children);
};
com.philipmabanta.tools.display.DisplayObjectContainerTools.removeAllChildren = function(dc) {
	while(dc.get_numChildren() > 0) dc.removeChildAt(0);
	return dc;
};
com.philipmabanta.tools.display.DisplayObjectContainerTools.inlineAddChildren = function(d,children) {
	var _g = 0;
	while(_g < children.length) {
		var child = children[_g];
		++_g;
		d.addChild(child);
	}
	return d;
};
com.philipmabanta.tools.display.DisplayObjectContainerTools.inlineReplaceChild = function(d,childToReplace,newChild) {
	var doc = d;
	doc.addChild(newChild);
	doc.swapChildren(childToReplace,newChild);
	doc.removeChild(childToReplace);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectContainerTools.inlineRemoveChildList = function(dc,children) {
	var doc = dc;
	var _g = 0;
	while(_g < children.length) {
		var child = children[_g];
		++_g;
		if(child.parent == doc) doc.removeChild(child);
	}
	return dc;
};
com.philipmabanta.tools.display.DisplayObjectContainerTools.inlineRemoveAllChildren = function(dc) {
	while(dc.get_numChildren() > 0) dc.removeChildAt(0);
	return dc;
};
com.philipmabanta.tools.display.DisplayObjectTools = function() { };
$hxClasses["com.philipmabanta.tools.display.DisplayObjectTools"] = com.philipmabanta.tools.display.DisplayObjectTools;
com.philipmabanta.tools.display.DisplayObjectTools.__name__ = ["com","philipmabanta","tools","display","DisplayObjectTools"];
com.philipmabanta.tools.display.DisplayObjectTools.fitHeight = function(d,targetHeight) {
	d.set_height(targetHeight);
	d.set_scaleX(d.get_scaleY());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.fitWidth = function(d,targetWidth) {
	d.set_height(targetWidth);
	d.set_scaleY(d.get_scaleX());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.cropWidth = function(d,targetWidth,adjustScale) {
	if(adjustScale == null) adjustScale = true;
	return com.philipmabanta.tools.display.DisplayObjectTools.inlineCropWidth(d,targetWidth,adjustScale);
};
com.philipmabanta.tools.display.DisplayObjectTools.cropHeight = function(d,targetHeight,adjustScale) {
	if(adjustScale == null) adjustScale = true;
	return com.philipmabanta.tools.display.DisplayObjectTools.inlineCropHeight(d,targetHeight,adjustScale);
};
com.philipmabanta.tools.display.DisplayObjectTools.hide = function(d) {
	d.set_visible(false);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.hideAll = function(all) {
	var $it0 = $iterator(all)();
	while( $it0.hasNext() ) {
		var d = $it0.next();
		d.set_visible(false);
	}
	return all;
};
com.philipmabanta.tools.display.DisplayObjectTools.show = function(d) {
	d.set_visible(true);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.showAll = function(all) {
	var $it0 = $iterator(all)();
	while( $it0.hasNext() ) {
		var d = $it0.next();
		d.set_visible(true);
	}
	return all;
};
com.philipmabanta.tools.display.DisplayObjectTools.alignXY = function(d,anchor) {
	d.set_x(anchor.get_x());
	d.set_y(anchor.get_y());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.alignCenter = function(d,anchor) {
	com.philipmabanta.tools.display.DisplayObjectTools.alignXY(d,anchor);
	d.set_x(d.get_x() - d.get_width() / 2 + anchor.get_width() / 2);
	d.set_y(d.get_y() - d.get_height() / 2 + anchor.get_height() / 2);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.setPos = function(d,x,y) {
	d.set_x(x);
	d.set_y(y);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.setSize = function(d,w,h) {
	d.set_width(w);
	d.set_height(h);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.setRotation = function(d,rot) {
	d.set_rotation(rot);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.setAlpha = function(d,alpha) {
	d.set_alpha(alpha);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.setScale = function(d,s) {
	d.set_scaleX(s);
	d.set_scaleY(s);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.setScaleXY = function(d,x,y) {
	d.set_scaleX(x);
	d.set_scaleY(y);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.setScaleX = function(d,x) {
	d.set_scaleX(x);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.setScaleY = function(d,y) {
	d.set_scaleY(y);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.flipX = function(d) {
	d.set_scaleX(-d.get_scaleX());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.flipY = function(d) {
	d.set_scaleY(-d.get_scaleY());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.flipXY = function(d) {
	d.set_scaleX(-d.get_scaleX());
	d.set_scaleY(-d.get_scaleY());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.setMouseEnabled = function(d,v) {
	d.mouseEnabled = v;
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.setMouseChildren = function(d,v) {
	d.mouseChildren = v;
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineFitHeight = function(d,targetHeight) {
	d.set_height(targetHeight);
	d.set_scaleX(d.get_scaleY());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineFitWidth = function(d,targetWidth) {
	d.set_height(targetWidth);
	d.set_scaleY(d.get_scaleX());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineCropWidth = function(d,targetWidth,adjustScale) {
	if(adjustScale == null) adjustScale = true;
	var scaleX;
	if(adjustScale) scaleX = d.get_scaleX(); else scaleX = 1;
	var scaleY;
	if(adjustScale) scaleY = d.get_scaleY(); else scaleY = 1;
	var rect;
	var oldWidth = d.get_width() / scaleX;
	if(d.get_scrollRect() != null) rect = d.get_scrollRect(); else rect = new openfl.geom.Rectangle(0,0,d.get_width() / scaleX,d.get_height() / scaleY);
	rect.width = targetWidth / scaleX;
	rect.x = oldWidth / 2 - rect.width / 2;
	d.set_scrollRect(rect);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineCropHeight = function(d,targetHeight,adjustScale) {
	if(adjustScale == null) adjustScale = true;
	var scaleX;
	if(adjustScale) scaleX = d.get_scaleX(); else scaleX = 1;
	var scaleY;
	if(adjustScale) scaleY = d.get_scaleY(); else scaleY = 1;
	var rect;
	var oldHeight = d.get_height() / scaleY;
	if(d.get_scrollRect() != null) rect = d.get_scrollRect(); else rect = new openfl.geom.Rectangle(0,0,d.get_width() / d.get_scaleX(),d.get_height() / scaleY);
	rect.height = targetHeight / scaleX;
	rect.y = oldHeight / 2 - rect.height / 2;
	d.set_scrollRect(rect);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineAlignXY = function(d,anchor) {
	d.set_x(anchor.get_x());
	d.set_y(anchor.get_y());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineAlignCenter = function(d,anchor) {
	com.philipmabanta.tools.display.DisplayObjectTools.alignXY(d,anchor);
	d.set_x(d.get_x() - d.get_width() / 2 + anchor.get_width() / 2);
	d.set_y(d.get_y() - d.get_height() / 2 + anchor.get_height() / 2);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineSetPos = function(d,x,y) {
	d.set_x(x);
	d.set_y(y);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineSetSize = function(d,w,h) {
	d.set_width(w);
	d.set_height(h);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineSetScale = function(d,s) {
	d.set_scaleX(s);
	d.set_scaleY(s);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineSetRotation = function(d,rot) {
	d.set_rotation(rot);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineSetAlpha = function(d,alpha) {
	d.set_alpha(alpha);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineSetScaleX = function(d,x) {
	d.set_scaleX(x);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineSetScaleY = function(d,y) {
	d.set_scaleY(y);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineSetScaleXY = function(d,x,y) {
	d.set_scaleX(x);
	d.set_scaleY(y);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineFlipX = function(d) {
	d.set_scaleX(-d.get_scaleX());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineFlipY = function(d) {
	d.set_scaleY(-d.get_scaleY());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineFlipXY = function(d) {
	d.set_scaleX(-d.get_scaleX());
	d.set_scaleY(-d.get_scaleY());
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineHide = function(d) {
	d.set_visible(false);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineHideAll = function(all) {
	var $it0 = $iterator(all)();
	while( $it0.hasNext() ) {
		var d = $it0.next();
		d.set_visible(false);
	}
	return all;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineShow = function(d) {
	d.set_visible(true);
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineShowAll = function(all) {
	var $it0 = $iterator(all)();
	while( $it0.hasNext() ) {
		var d = $it0.next();
		d.set_visible(true);
	}
	return all;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineSetMouseEnabled = function(d,v) {
	d.mouseEnabled = v;
	return d;
};
com.philipmabanta.tools.display.DisplayObjectTools.inlineSetMouseChildren = function(d,v) {
	d.mouseChildren = v;
	return d;
};
com.philipmabanta.tools.display.TextTools = function() { };
$hxClasses["com.philipmabanta.tools.display.TextTools"] = com.philipmabanta.tools.display.TextTools;
com.philipmabanta.tools.display.TextTools.__name__ = ["com","philipmabanta","tools","display","TextTools"];
com.philipmabanta.tools.display.TextTools.setText = function(tf,v) {
	tf.set_text(v);
	return tf;
};
com.philipmabanta.tools.display.TextTools.password = function(tf,v) {
	tf.displayAsPassword = v;
	return tf;
};
com.philipmabanta.tools.display.TextTools.sans = function(tf) {
	return com.philipmabanta.tools.display.TextTools.font(tf,"_sans");
};
com.philipmabanta.tools.display.TextTools.serif = function(tf) {
	return com.philipmabanta.tools.display.TextTools.font(tf,"_serif");
};
com.philipmabanta.tools.display.TextTools.label = function(tf) {
	tf.set_type(openfl.text.TextFieldType.DYNAMIC);
	tf.selectable = false;
	return tf;
};
com.philipmabanta.tools.display.TextTools.input = function(tf) {
	tf.selectable = true;
	tf.set_type(openfl.text.TextFieldType.INPUT);
	return tf;
};
com.philipmabanta.tools.display.TextTools.left = function(tf) {
	return com.philipmabanta.tools.display.TextTools.align(tf,openfl.text.TextFormatAlign.LEFT);
};
com.philipmabanta.tools.display.TextTools.right = function(tf) {
	return com.philipmabanta.tools.display.TextTools.align(tf,openfl.text.TextFormatAlign.RIGHT);
};
com.philipmabanta.tools.display.TextTools.center = function(tf) {
	return com.philipmabanta.tools.display.TextTools.align(tf,openfl.text.TextFormatAlign.CENTER);
};
com.philipmabanta.tools.display.TextTools.justify = function(tf) {
	return com.philipmabanta.tools.display.TextTools.align(tf,openfl.text.TextFormatAlign.JUSTIFY);
};
com.philipmabanta.tools.display.TextTools.align = function(tf,v) {
	var format = tf.get_defaultTextFormat();
	format.align = v;
	tf.setTextFormat(format);
	tf.set_defaultTextFormat(format);
	return tf;
};
com.philipmabanta.tools.display.TextTools.color = function(tf,v) {
	var format = tf.get_defaultTextFormat();
	format.color = v;
	tf.setTextFormat(format);
	tf.set_defaultTextFormat(format);
	return tf;
};
com.philipmabanta.tools.display.TextTools.font = function(tf,v) {
	var format = tf.get_defaultTextFormat();
	format.font = v;
	tf.setTextFormat(format);
	tf.set_defaultTextFormat(format);
	return tf;
};
com.philipmabanta.tools.display.TextTools.bold = function(tf,v) {
	var format = tf.get_defaultTextFormat();
	format.bold = v;
	tf.setTextFormat(format);
	tf.set_defaultTextFormat(format);
	return tf;
};
com.philipmabanta.tools.display.TextTools.italic = function(tf,v) {
	var format = tf.get_defaultTextFormat();
	format.italic = v;
	tf.setTextFormat(format);
	tf.set_defaultTextFormat(format);
	return tf;
};
com.philipmabanta.tools.display.TextTools.size = function(tf,v) {
	var format = tf.get_defaultTextFormat();
	format.size = v;
	tf.setTextFormat(format);
	tf.set_defaultTextFormat(format);
	return tf;
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
com.philipmabanta.tools.display.UITools = function() { };
$hxClasses["com.philipmabanta.tools.display.UITools"] = com.philipmabanta.tools.display.UITools;
com.philipmabanta.tools.display.UITools.__name__ = ["com","philipmabanta","tools","display","UITools"];
com.philipmabanta.tools.display.UITools.wrapSprite = function(d) {
	return com.philipmabanta.tools.display.UITools.inlineWrapSprite(d);
};
com.philipmabanta.tools.display.UITools.makeRect = function(x,y,w,h,color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	return com.philipmabanta.tools.display.UITools.inlineMakeRect(x,y,w,h,color,alpha);
};
com.philipmabanta.tools.display.UITools.addDownState = function(s) {
	s.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,function(e) {
		var t = e.currentTarget;
		t.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.GRAY;
	});
	s.addEventListener("touchBegin",function(e1) {
		var t1 = e1.currentTarget;
		t1.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.GRAY;
	});
	s.addEventListener(openfl.events.MouseEvent.ROLL_OUT,function(e2) {
		var t2 = e2.currentTarget;
		t2.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.blankColorTransform;
	});
	s.addEventListener("touchOut",function(e3) {
		var t3 = e3.currentTarget;
		t3.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.blankColorTransform;
	});
	s.addEventListener("touchEnd",function(e4) {
		var t4 = e4.currentTarget;
		t4.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.blankColorTransform;
	});
	s.addEventListener(openfl.events.MouseEvent.MOUSE_UP,function(e5) {
		var t5 = e5.currentTarget;
		t5.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.blankColorTransform;
	});
	return s;
};
com.philipmabanta.tools.display.UITools.removeDownState = function(s) {
	s.removeEventListener(openfl.events.MouseEvent.MOUSE_DOWN,function(e) {
		var t = e.currentTarget;
		t.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.GRAY;
	});
	s.removeEventListener("touchBegin",function(e1) {
		var t1 = e1.currentTarget;
		t1.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.GRAY;
	});
	s.removeEventListener(openfl.events.MouseEvent.ROLL_OUT,function(e2) {
		var t2 = e2.currentTarget;
		t2.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.blankColorTransform;
	});
	s.removeEventListener("touchOut",function(e3) {
		var t3 = e3.currentTarget;
		t3.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.blankColorTransform;
	});
	s.removeEventListener("touchEnd",function(e4) {
		var t4 = e4.currentTarget;
		t4.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.blankColorTransform;
	});
	s.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,function(e5) {
		var t5 = e5.currentTarget;
		t5.get_transform().colorTransform = com.philipmabanta.tools.display.UITools.blankColorTransform;
	});
	return s;
};
com.philipmabanta.tools.display.UITools.inlineMakeRect = function(x,y,w,h,color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	var s = new openfl.display.Shape();
	s.get_graphics().beginFill(color,alpha);
	s.get_graphics().drawRect(x,y,w,h);
	return s;
};
com.philipmabanta.tools.display.UITools.inlineMakeRectBorder = function(x,y,w,h,thickness,fillColor,borderColor,fillAlpha,borderAlpha) {
	if(borderAlpha == null) borderAlpha = 1;
	if(fillAlpha == null) fillAlpha = 1;
	if(borderColor == null) borderColor = 0;
	if(fillColor == null) fillColor = 0;
	if(thickness == null) thickness = 0;
	var s = new openfl.display.Shape();
	s.get_graphics().beginFill(fillColor,fillAlpha);
	s.get_graphics().lineStyle(thickness,borderColor,borderAlpha);
	s.get_graphics().drawRect(x,y,w,h);
	return s;
};
com.philipmabanta.tools.display.UITools.inlineWrapSprite = function(d) {
	var s = new openfl.display.Sprite();
	s.addChild(d);
	return s;
};
com.tkb.controllers = {};
com.tkb.controllers.DisplayManager = function() {
};
$hxClasses["com.tkb.controllers.DisplayManager"] = com.tkb.controllers.DisplayManager;
com.tkb.controllers.DisplayManager.__name__ = ["com","tkb","controllers","DisplayManager"];
com.tkb.controllers.DisplayManager.parentDisplay = null;
com.tkb.controllers.DisplayManager.debugDisplay = null;
com.tkb.controllers.DisplayManager.initialize = function(parent) {
	com.tkb.controllers.DisplayManager.displayIndexList = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	com.tkb.controllers.DisplayManager.parentDisplay = new openfl.display.Sprite();
	com.tkb.controllers.DisplayManager.debugDisplay = new openfl.display.Sprite();
	parent.addChild(com.tkb.controllers.DisplayManager.parentDisplay);
	parent.addChild(com.tkb.controllers.DisplayManager.debugDisplay);
};
com.tkb.controllers.DisplayManager.add = function(obj,type) {
	if(com.tkb.controllers.DisplayManager.parentDisplay.contains(obj)) return;
	com.tkb.controllers.DisplayManager.parentDisplay.addChildAt(obj,com.tkb.controllers.DisplayManager.displayIndexList[type]);
	var _g1 = type;
	var _g = com.tkb.controllers.DisplayManager.displayIndexList.length;
	while(_g1 < _g) {
		var i = _g1++;
		com.tkb.controllers.DisplayManager.displayIndexList[i]++;
	}
};
com.tkb.controllers.DisplayManager.remove = function(obj) {
	if(!com.tkb.controllers.DisplayManager.parentDisplay.contains(obj)) return;
	var index = com.tkb.controllers.DisplayManager.parentDisplay.getChildIndex(obj);
	if(index == -1) return;
	var _g1 = 0;
	var _g = com.tkb.controllers.DisplayManager.displayIndexList.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(index < com.tkb.controllers.DisplayManager.displayIndexList[i]) {
			if(com.tkb.controllers.DisplayManager.displayIndexList[i] > 0) com.tkb.controllers.DisplayManager.displayIndexList[i]--;
		}
	}
	com.tkb.controllers.DisplayManager.parentDisplay.removeChild(obj);
};
com.tkb.controllers.DisplayManager.prototype = {
	__class__: com.tkb.controllers.DisplayManager
};
com.tkb.controllers.UpdateManager = function() {
	openfl.display.Sprite.call(this);
	openfl.Lib.current.stage.addEventListener(openfl.events.Event.ENTER_FRAME,$bind(this,this.onUpdate));
};
$hxClasses["com.tkb.controllers.UpdateManager"] = com.tkb.controllers.UpdateManager;
com.tkb.controllers.UpdateManager.__name__ = ["com","tkb","controllers","UpdateManager"];
com.tkb.controllers.UpdateManager.instance = null;
com.tkb.controllers.UpdateManager.paused = null;
com.tkb.controllers.UpdateManager.updateList = null;
com.tkb.controllers.UpdateManager.systemList = null;
com.tkb.controllers.UpdateManager.delay = null;
com.tkb.controllers.UpdateManager.delayCounter = null;
com.tkb.controllers.UpdateManager.deltaTime = null;
com.tkb.controllers.UpdateManager.lastTime = null;
com.tkb.controllers.UpdateManager.initialize = function() {
	com.tkb.controllers.UpdateManager.delay = 0;
	com.tkb.controllers.UpdateManager.delayCounter = 0;
	com.tkb.controllers.UpdateManager.paused = false;
	com.tkb.controllers.UpdateManager.lastTime = openfl.Lib.getTimer();
	com.tkb.controllers.UpdateManager.updateList = new Array();
	com.tkb.controllers.UpdateManager.systemList = new Array();
	com.tkb.controllers.UpdateManager.instance = new com.tkb.controllers.UpdateManager();
};
com.tkb.controllers.UpdateManager.subscribe = function(obj) {
	if((function($this) {
		var $r;
		var _this = com.tkb.controllers.UpdateManager.updateList;
		$r = HxOverrides.lastIndexOf(_this,obj,_this.length - 1);
		return $r;
	}(this)) != -1) return;
	com.tkb.controllers.UpdateManager.updateList.push(obj);
};
com.tkb.controllers.UpdateManager.subscribeAsSystem = function(obj) {
	if((function($this) {
		var $r;
		var _this = com.tkb.controllers.UpdateManager.systemList;
		$r = HxOverrides.lastIndexOf(_this,obj,_this.length - 1);
		return $r;
	}(this)) != -1) return;
	com.tkb.controllers.UpdateManager.systemList.push(obj);
};
com.tkb.controllers.UpdateManager.unsubscribe = function(obj) {
	var objIndex;
	var _this = com.tkb.controllers.UpdateManager.updateList;
	objIndex = HxOverrides.lastIndexOf(_this,obj,_this.length - 1);
	if(objIndex == -1) return;
	com.tkb.controllers.UpdateManager.updateList.splice(objIndex,1);
};
com.tkb.controllers.UpdateManager.pause = function() {
	motion.Actuate.pauseAll();
	com.tkb.controllers.UpdateManager.paused = true;
};
com.tkb.controllers.UpdateManager.resume = function() {
	motion.Actuate.resumeAll();
	com.tkb.controllers.UpdateManager.paused = false;
};
com.tkb.controllers.UpdateManager.__super__ = openfl.display.Sprite;
com.tkb.controllers.UpdateManager.prototype = $extend(openfl.display.Sprite.prototype,{
	onUpdate: function(event) {
		if(com.tkb.controllers.UpdateManager.delayCounter > 0) {
			com.tkb.controllers.UpdateManager.delayCounter--;
			return;
		}
		com.tkb.controllers.UpdateManager.deltaTime = openfl.Lib.getTimer() - com.tkb.controllers.UpdateManager.lastTime;
		var _g = 0;
		var _g1 = com.tkb.controllers.UpdateManager.systemList.slice();
		while(_g < _g1.length) {
			var updateObj = _g1[_g];
			++_g;
			updateObj.update(com.tkb.controllers.UpdateManager.deltaTime);
		}
		if(com.tkb.controllers.UpdateManager.paused) return;
		if(com.tkb.controllers.UpdateManager.delay != 0) com.tkb.controllers.UpdateManager.delayCounter = com.tkb.controllers.UpdateManager.delay;
		var _g2 = 0;
		var _g11 = com.tkb.controllers.UpdateManager.updateList.slice();
		while(_g2 < _g11.length) {
			var updateObj1 = _g11[_g2];
			++_g2;
			updateObj1.update(com.tkb.controllers.UpdateManager.deltaTime);
		}
		com.tkb.controllers.UpdateManager.lastTime = openfl.Lib.getTimer();
	}
	,__class__: com.tkb.controllers.UpdateManager
});
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
com.tkb.models.BitmapComponent = function(bitmapData,pixelSnapping,smoothing) {
	if(smoothing == null) smoothing = false;
	openfl.display.Bitmap.call(this,bitmapData,pixelSnapping,smoothing);
	this.enabled = true;
};
$hxClasses["com.tkb.models.BitmapComponent"] = com.tkb.models.BitmapComponent;
com.tkb.models.BitmapComponent.__name__ = ["com","tkb","models","BitmapComponent"];
com.tkb.models.BitmapComponent.__super__ = openfl.display.Bitmap;
com.tkb.models.BitmapComponent.prototype = $extend(openfl.display.Bitmap.prototype,{
	enable: function() {
		if(this.enabled) return this;
		this.enabled = true;
		return this;
	}
	,disable: function() {
		if(!this.enabled) return this;
		this.enabled = false;
		return this;
	}
	,__class__: com.tkb.models.BitmapComponent
});
com.tkb.models.Entity = function() {
	openfl.display.Sprite.call(this);
	this.graphicList = [];
	this.logicList = [];
	this.logicDisposalList = [];
	this.dynamicData = { };
	this.mouseChildren = false;
	this.mouseEnabled = false;
	this.set_alpha(1);
};
$hxClasses["com.tkb.models.Entity"] = com.tkb.models.Entity;
com.tkb.models.Entity.__name__ = ["com","tkb","models","Entity"];
com.tkb.models.Entity.__interfaces__ = [com.tkb.interfaces.IUpdatable];
com.tkb.models.Entity.getInstance = function() {
	if(com.tkb.models.Entity.instanceList.length > 0) return com.tkb.models.Entity.instanceList.pop(); else return new com.tkb.models.Entity();
};
com.tkb.models.Entity.returnInstance = function(instance) {
	if(Lambda.has(com.tkb.models.Entity.instanceList,instance)) return;
	com.tkb.models.Entity.instanceList.push(instance);
};
com.tkb.models.Entity.__super__ = openfl.display.Sprite;
com.tkb.models.Entity.prototype = $extend(openfl.display.Sprite.prototype,{
	build: function() {
		this.set_alpha(1);
		this.set_scaleX(1);
		this.set_scaleY(1);
		this.isDisposed = false;
		com.tkb.controllers.UpdateManager.subscribe(this);
		this.dispatchEvent(new openfl.events.Event("built"));
		return this;
	}
	,dispose: function() {
		if(this.isDisposed) return this;
		this.isDisposed = true;
		while(this.graphicList.length > 0) this.removeChild(this.graphicList.pop().dispose());
		while(this.logicList.length > 0) this.logicList.pop().dispose();
		var _g = 0;
		var _g1 = Reflect.fields(this.dynamicData);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			Reflect.deleteField(this.dynamicData,field);
		}
		this.parentEntity = null;
		this.dispatchEvent(new openfl.events.Event("disposed"));
		com.tkb.controllers.UpdateManager.unsubscribe(this);
		com.tkb.controllers.DisplayManager.remove(this);
		com.tkb.models.Entity.returnInstance(this);
		return this;
	}
	,addGraphic: function(graphic,index) {
		if(index == null) index = -1;
		if(index == -1) {
			this.graphicList.push(graphic);
			this.addChild(graphic);
		} else {
			this.graphicList.splice(index,0,graphic);
			this.addChildAt(graphic,index);
		}
		graphic.connectToEntity(this);
		this.dispatchEvent(new openfl.events.Event("agraph"));
		return this;
	}
	,addLogic: function(logic) {
		this.logicList.push(logic);
		logic.connectToEntity(this);
		this.dispatchEvent(new openfl.events.Event("alogic"));
		return this;
	}
	,getLogic: function(logicType) {
		var _g = 0;
		var _g1 = this.logicList;
		while(_g < _g1.length) {
			var logic = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(logic,logicType)) return logic;
		}
		return null;
	}
	,getGraphic: function(graphicType) {
		var _g = 0;
		var _g1 = this.graphicList;
		while(_g < _g1.length) {
			var graphic = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(graphic,graphicType)) return graphic;
		}
		return null;
	}
	,removeGraphic: function(graphicType) {
		var _g = 0;
		var _g1 = this.graphicList;
		while(_g < _g1.length) {
			var graphic = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(graphic,graphicType)) {
				HxOverrides.remove(this.graphicList,graphic);
				this.removeChild(graphic);
				graphic.dispose();
			}
		}
		this.dispatchEvent(new openfl.events.Event("alogic"));
		return null;
	}
	,removeLogic: function(logicType) {
		var _g = 0;
		var _g1 = this.logicList;
		while(_g < _g1.length) {
			var logic = _g1[_g];
			++_g;
			if(js.Boot.__instanceof(logic,logicType)) this.logicDisposalList.push(logic);
		}
		return null;
	}
	,update: function(deltaTime) {
		var _g = 0;
		var _g1 = this.logicList;
		while(_g < _g1.length) {
			var logic = _g1[_g];
			++_g;
			logic.update(deltaTime);
		}
		if(this.logicDisposalList.length > 0) this.disposeLogicList();
	}
	,disposeLogicList: function() {
		while(this.logicDisposalList.length > 0) {
			var x = this.logicDisposalList.pop();
			HxOverrides.remove(this.logicList,x);
		}
		return null;
	}
	,__class__: com.tkb.models.Entity
});
com.tkb.models.GraphicComponentEntry = function(classType,params) {
	if(classType != null) this.classType = classType;
	if(params != null) this.params = params;
};
$hxClasses["com.tkb.models.GraphicComponentEntry"] = com.tkb.models.GraphicComponentEntry;
com.tkb.models.GraphicComponentEntry.__name__ = ["com","tkb","models","GraphicComponentEntry"];
com.tkb.models.GraphicComponentEntry.prototype = {
	__class__: com.tkb.models.GraphicComponentEntry
};
com.tkb.models.LogicComponentEntry = function(classType,handlers) {
	if(classType != null) this.classType = classType;
	if(handlers != null) this.handlers = handlers;
};
$hxClasses["com.tkb.models.LogicComponentEntry"] = com.tkb.models.LogicComponentEntry;
com.tkb.models.LogicComponentEntry.__name__ = ["com","tkb","models","LogicComponentEntry"];
com.tkb.models.LogicComponentEntry.prototype = {
	__class__: com.tkb.models.LogicComponentEntry
};
com.tkb.ui = {};
com.tkb.ui.MouseInputLayer = function(layerWidth,layerHeight) {
	openfl.display.Sprite.call(this);
	this.get_graphics().beginFill(0,0);
	this.get_graphics().drawRect(0,0,layerWidth,layerHeight);
	this.addEventListener(openfl.events.MouseEvent.CLICK,$bind(this,this.onClick));
	this.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onDown));
	this.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onUp));
	this.addEventListener(openfl.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMove));
};
$hxClasses["com.tkb.ui.MouseInputLayer"] = com.tkb.ui.MouseInputLayer;
com.tkb.ui.MouseInputLayer.__name__ = ["com","tkb","ui","MouseInputLayer"];
com.tkb.ui.MouseInputLayer.instance = null;
com.tkb.ui.MouseInputLayer.isDisabled = null;
com.tkb.ui.MouseInputLayer.clickCallbackList = null;
com.tkb.ui.MouseInputLayer.downCallbackList = null;
com.tkb.ui.MouseInputLayer.upCallbackList = null;
com.tkb.ui.MouseInputLayer.moveCallbackList = null;
com.tkb.ui.MouseInputLayer.initialize = function(layerWidth,layerHeight) {
	com.tkb.ui.MouseInputLayer.clickCallbackList = [];
	com.tkb.ui.MouseInputLayer.downCallbackList = [];
	com.tkb.ui.MouseInputLayer.upCallbackList = [];
	com.tkb.ui.MouseInputLayer.moveCallbackList = [];
	com.tkb.ui.MouseInputLayer.instance = new com.tkb.ui.MouseInputLayer(layerWidth,layerHeight);
};
com.tkb.ui.MouseInputLayer.addCallbackToClick = function(callback) {
	if(Lambda.has(com.tkb.ui.MouseInputLayer.clickCallbackList,callback)) return;
	com.tkb.ui.MouseInputLayer.clickCallbackList.push(callback);
};
com.tkb.ui.MouseInputLayer.removeCallbackFromClick = function(callback) {
	var index = Lambda.indexOf(com.tkb.ui.MouseInputLayer.clickCallbackList,callback);
	if(index == -1) return;
	com.tkb.ui.MouseInputLayer.clickCallbackList.splice(index,1);
};
com.tkb.ui.MouseInputLayer.addCallbackToDown = function(callback) {
	if(Lambda.has(com.tkb.ui.MouseInputLayer.downCallbackList,callback)) return;
	com.tkb.ui.MouseInputLayer.downCallbackList.push(callback);
};
com.tkb.ui.MouseInputLayer.removeCallbackFromDown = function(callback) {
	var index = Lambda.indexOf(com.tkb.ui.MouseInputLayer.downCallbackList,callback);
	if(index == -1) return;
	com.tkb.ui.MouseInputLayer.downCallbackList.splice(index,1);
};
com.tkb.ui.MouseInputLayer.addCallbackToUp = function(callback) {
	if(Lambda.has(com.tkb.ui.MouseInputLayer.upCallbackList,callback)) return;
	com.tkb.ui.MouseInputLayer.upCallbackList.push(callback);
};
com.tkb.ui.MouseInputLayer.removeCallbackFromUp = function(callback) {
	var index = Lambda.indexOf(com.tkb.ui.MouseInputLayer.upCallbackList,callback);
	if(index == -1) return;
	com.tkb.ui.MouseInputLayer.upCallbackList.splice(index,1);
};
com.tkb.ui.MouseInputLayer.addCallbackToMove = function(callback) {
	if(Lambda.has(com.tkb.ui.MouseInputLayer.moveCallbackList,callback)) return;
	com.tkb.ui.MouseInputLayer.moveCallbackList.push(callback);
};
com.tkb.ui.MouseInputLayer.removeCallbackFromMove = function(callback) {
	var index = Lambda.indexOf(com.tkb.ui.MouseInputLayer.moveCallbackList,callback);
	if(index == -1) return;
	com.tkb.ui.MouseInputLayer.moveCallbackList.splice(index,1);
};
com.tkb.ui.MouseInputLayer.__super__ = openfl.display.Sprite;
com.tkb.ui.MouseInputLayer.prototype = $extend(openfl.display.Sprite.prototype,{
	onClick: function(event) {
		if(com.tkb.ui.MouseInputLayer.isDisabled) return;
		var _g = 0;
		var _g1 = com.tkb.ui.MouseInputLayer.clickCallbackList;
		while(_g < _g1.length) {
			var callback = _g1[_g];
			++_g;
			callback();
		}
	}
	,onDown: function(event) {
		if(com.tkb.ui.MouseInputLayer.isDisabled) return;
		var _g = 0;
		var _g1 = com.tkb.ui.MouseInputLayer.downCallbackList;
		while(_g < _g1.length) {
			var callback = _g1[_g];
			++_g;
			callback();
		}
	}
	,onUp: function(event) {
		if(com.tkb.ui.MouseInputLayer.isDisabled) return;
		var _g = 0;
		var _g1 = com.tkb.ui.MouseInputLayer.upCallbackList;
		while(_g < _g1.length) {
			var callback = _g1[_g];
			++_g;
			callback();
		}
	}
	,onMove: function(event) {
		if(com.tkb.ui.MouseInputLayer.isDisabled) return;
		var _g = 0;
		var _g1 = com.tkb.ui.MouseInputLayer.moveCallbackList;
		while(_g < _g1.length) {
			var callback = _g1[_g];
			++_g;
			callback();
		}
	}
	,__class__: com.tkb.ui.MouseInputLayer
});
com.tkb.ui.TwoStateBitmapComponent = function(bitmapData,bitmapDataDown,smoothing) {
	if(smoothing == null) smoothing = true;
	com.tkb.models.BitmapComponent.call(this,bitmapData,openfl.display.PixelSnapping.AUTO,smoothing);
	this.bitmapDataUp = bitmapData;
	this.bitmapDataDown = bitmapDataDown;
	this.addEventListener(openfl.events.Event.ADDED,$bind(this,this.onAdd));
};
$hxClasses["com.tkb.ui.TwoStateBitmapComponent"] = com.tkb.ui.TwoStateBitmapComponent;
com.tkb.ui.TwoStateBitmapComponent.__name__ = ["com","tkb","ui","TwoStateBitmapComponent"];
com.tkb.ui.TwoStateBitmapComponent.__interfaces__ = [com.tkb.interfaces.IDisposable];
com.tkb.ui.TwoStateBitmapComponent.__super__ = com.tkb.models.BitmapComponent;
com.tkb.ui.TwoStateBitmapComponent.prototype = $extend(com.tkb.models.BitmapComponent.prototype,{
	dispose: function() {
		if(this.parent == null) {
			this.removeEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onDown));
			this.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onUp));
			this.removeEventListener(openfl.events.MouseEvent.MOUSE_OUT,$bind(this,this.onUp));
		} else {
			this.parent.removeEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onDown));
			this.parent.removeEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onUp));
			this.parent.removeEventListener(openfl.events.MouseEvent.MOUSE_OUT,$bind(this,this.onUp));
		}
		this.parent = null;
		this.bitmapDataUp = null;
		this.bitmapDataDown = null;
		return this;
	}
	,onAdd: function(event) {
		this.removeEventListener(openfl.events.Event.ADDED,$bind(this,this.onAdd));
		if(this.parent == null) {
			this.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onDown));
			this.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onUp));
			this.addEventListener(openfl.events.MouseEvent.MOUSE_OUT,$bind(this,this.onUp));
			return;
		}
		this.parent.addEventListener(openfl.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onDown));
		this.parent.addEventListener(openfl.events.MouseEvent.MOUSE_UP,$bind(this,this.onUp));
		this.parent.addEventListener(openfl.events.MouseEvent.MOUSE_OUT,$bind(this,this.onUp));
	}
	,onDown: function(event) {
		var _g = this;
		if(!this.enabled) {
			this.bitmapData = this.bitmapDataUp;
			return;
		}
		this.bitmapData = this.bitmapDataDown;
		haxe.Timer.delay(function() {
			_g.bitmapData = _g.bitmapDataUp;
		},100);
	}
	,onUp: function(event) {
		if(!this.enabled) {
			this.bitmapData = this.bitmapDataUp;
			return;
		}
		this.bitmapData = this.bitmapDataUp;
	}
	,__class__: com.tkb.ui.TwoStateBitmapComponent
});
com.tkb.ui.ThreeStatebitmapComponent = function(bitmapData,bitmapDataDown,bitmapDataHover,smoothing) {
	if(smoothing == null) smoothing = true;
	com.tkb.ui.TwoStateBitmapComponent.call(this,bitmapData,bitmapDataDown,smoothing);
	this.bitmapDataHover = bitmapDataHover;
};
$hxClasses["com.tkb.ui.ThreeStatebitmapComponent"] = com.tkb.ui.ThreeStatebitmapComponent;
com.tkb.ui.ThreeStatebitmapComponent.__name__ = ["com","tkb","ui","ThreeStatebitmapComponent"];
com.tkb.ui.ThreeStatebitmapComponent.__super__ = com.tkb.ui.TwoStateBitmapComponent;
com.tkb.ui.ThreeStatebitmapComponent.prototype = $extend(com.tkb.ui.TwoStateBitmapComponent.prototype,{
	dispose: function() {
		if(this.parent == null) this.removeEventListener(openfl.events.MouseEvent.MOUSE_OVER,$bind(this,this.onHover)); else this.parent.removeEventListener(openfl.events.MouseEvent.MOUSE_OVER,$bind(this,this.onHover));
		this.bitmapDataHover = null;
		return com.tkb.ui.TwoStateBitmapComponent.prototype.dispose.call(this);
	}
	,onAdd: function(event) {
		com.tkb.ui.TwoStateBitmapComponent.prototype.onAdd.call(this,event);
		if(this.parent == null) {
			this.addEventListener(openfl.events.MouseEvent.MOUSE_OVER,$bind(this,this.onHover));
			return;
		}
		this.parent.addEventListener(openfl.events.MouseEvent.MOUSE_OVER,$bind(this,this.onHover));
	}
	,onHover: function(event) {
		if(!this.enabled) {
			this.bitmapData = this.bitmapDataUp;
			return;
		}
		this.bitmapData = this.bitmapDataHover;
	}
	,__class__: com.tkb.ui.ThreeStatebitmapComponent
});
com.tkb.utils = {};
com.tkb.utils.TrigUtil = function() {
};
$hxClasses["com.tkb.utils.TrigUtil"] = com.tkb.utils.TrigUtil;
com.tkb.utils.TrigUtil.__name__ = ["com","tkb","utils","TrigUtil"];
com.tkb.utils.TrigUtil.sinLUT = null;
com.tkb.utils.TrigUtil.cosLUT = null;
com.tkb.utils.TrigUtil.initialize = function() {
	com.tkb.utils.TrigUtil.sinLUT = new com.utils.TrigLUT(2,Math.sin);
	com.tkb.utils.TrigUtil.cosLUT = new com.utils.TrigLUT(2,Math.cos);
};
com.tkb.utils.TrigUtil.toDegrees = function(rad) {
	return rad * 57.295645530939652;
};
com.tkb.utils.TrigUtil.toRad = function(deg) {
	return deg * 0.017453333333333335;
};
com.tkb.utils.TrigUtil.prototype = {
	__class__: com.tkb.utils.TrigUtil
};
com.utils = {};
com.utils.ResizeUtility = function() {
};
$hxClasses["com.utils.ResizeUtility"] = com.utils.ResizeUtility;
com.utils.ResizeUtility.__name__ = ["com","utils","ResizeUtility"];
com.utils.ResizeUtility.gameScaleX = null;
com.utils.ResizeUtility.gameScaleY = null;
com.utils.ResizeUtility.differenceVsOriginalScale = null;
com.utils.ResizeUtility.scaleCorrectionX = null;
com.utils.ResizeUtility.scaleCorrectionY = null;
com.utils.ResizeUtility.stageWidth = null;
com.utils.ResizeUtility.stageHeight = null;
com.utils.ResizeUtility.baseWidth = null;
com.utils.ResizeUtility.baseHeight = null;
com.utils.ResizeUtility.xMult = null;
com.utils.ResizeUtility.yMult = null;
com.utils.ResizeUtility.adjustSize = function(oldSize) {
	return oldSize * com.utils.ResizeUtility.xMult;
};
com.utils.ResizeUtility.initialize = function(bWidth,bHeight,oldWidth,oldHeight) {
	com.utils.ResizeUtility.baseWidth = bWidth;
	com.utils.ResizeUtility.baseHeight = bHeight;
	com.utils.ResizeUtility.xMult = bWidth / oldWidth;
	com.utils.ResizeUtility.yMult = bHeight / oldHeight;
	var normalizedX;
	if(openfl.Lib.current.stage.stageWidth > openfl.Lib.current.stage.stageHeight) normalizedX = openfl.Lib.current.stage.stageWidth; else normalizedX = openfl.Lib.current.stage.stageHeight;
	var normalizedY;
	if(openfl.Lib.current.stage.stageWidth < openfl.Lib.current.stage.stageHeight) normalizedY = openfl.Lib.current.stage.stageWidth; else normalizedY = openfl.Lib.current.stage.stageHeight;
	com.utils.ResizeUtility.gameScaleX = normalizedX / bWidth;
	com.utils.ResizeUtility.gameScaleY = normalizedY / bHeight;
	com.utils.ResizeUtility.differenceVsOriginalScale = com.utils.ResizeUtility.baseHeight * (normalizedY / bHeight) - com.utils.ResizeUtility.baseHeight * com.utils.ResizeUtility.gameScaleY;
	com.utils.ResizeUtility.stageWidth = normalizedX;
	com.utils.ResizeUtility.stageHeight = normalizedY;
	var assetScaleX;
	var assetScaleY;
	var graphicsQuality;
	if((com.utils.ResizeUtility.gameScaleX > com.utils.ResizeUtility.gameScaleY?com.utils.ResizeUtility.gameScaleX:com.utils.ResizeUtility.gameScaleY) < 0.35) {
		graphicsQuality = com.utils.ResizeUtility.QUALITY_NORMAL;
		assetScaleX = assetScaleY = 0.25;
	} else if((com.utils.ResizeUtility.gameScaleX > com.utils.ResizeUtility.gameScaleY?com.utils.ResizeUtility.gameScaleX:com.utils.ResizeUtility.gameScaleY) < 0.65) {
		graphicsQuality = com.utils.ResizeUtility.QUALITY_HD;
		assetScaleX = assetScaleY = 0.5;
	} else if((com.utils.ResizeUtility.gameScaleX > com.utils.ResizeUtility.gameScaleY?com.utils.ResizeUtility.gameScaleX:com.utils.ResizeUtility.gameScaleY) < 0.85) {
		graphicsQuality = com.utils.ResizeUtility.QUALITY_HI_HD;
		assetScaleX = assetScaleY = 0.75;
	} else {
		graphicsQuality = com.utils.ResizeUtility.QUALITY_IPAD;
		assetScaleX = assetScaleY = 1;
	}
	com.utils.ResizeUtility.scaleCorrectionX = 1 / assetScaleX;
	com.utils.ResizeUtility.scaleCorrectionY = 1 / assetScaleY;
	return graphicsQuality;
};
com.utils.ResizeUtility.prototype = {
	__class__: com.utils.ResizeUtility
};
com.utils.TexturePackerJSON = function() { };
$hxClasses["com.utils.TexturePackerJSON"] = com.utils.TexturePackerJSON;
com.utils.TexturePackerJSON.__name__ = ["com","utils","TexturePackerJSON"];
com.utils.TexturePackerJSON.parse = function(data,data2,assetDirectory,name) {
	if(name == null) name = "";
	if(assetDirectory == null) assetDirectory = "";
	if(data == null) return null;
	var json = JSON.parse(data);
	var bjson = JSON.parse(data2);
	var frames = new Array();
	var behaviors = new haxe.ds.StringMap();
	var behaviorFrames = new Array();
	if(name == "") name = json.meta.image;
	var _g1 = 0;
	var _g = json.frames.length;
	while(_g1 < _g) {
		var i = _g1++;
		var frame = json.frames[i];
		frames.push(new com.models.SpritesheetFrameScRef(frame.frame.x,frame.frame.y,frame.frame.w,frame.frame.h,frame.spriteSourceSize.x,frame.spriteSourceSize.y,frame.sourceSize.w,frame.sourceSize.h));
	}
	var bfields = Reflect.fields(bjson);
	var count = 0;
	var _g2 = 0;
	while(_g2 < bfields.length) {
		var prop = bfields[_g2];
		++_g2;
		var frame1 = Reflect.field(bjson,prop);
		var framelist;
		framelist = frame1.frames;
		var finalframelist = new Array();
		var _g11 = 0;
		while(_g11 < framelist.length) {
			var f = framelist[_g11];
			++_g11;
			finalframelist.push(f - 1);
		}
		var behaviorData = new spritesheet.data.BehaviorData(prop,finalframelist,frame1.loop,frame1.speed,0,0);
		behaviors.set(prop,behaviorData);
	}
	var spritesheet1 = new spritesheet.Spritesheet(null,frames,behaviors);
	spritesheet1.name = name;
	spritesheet1.updateImage(openfl.Assets.getBitmapData(assetDirectory + "/" + Std.string(json.meta.image)));
	return spritesheet1;
};
com.utils.TrigLUT = function(numDigits,mathFunc) {
	var pow = this.pow = Math.pow(10,numDigits);
	var round = 1.0 / pow;
	var len = 1 + 6.2832 * pow | 0;
	var table = this.table = new Array();
	var theta = 0;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		table[i] = mathFunc(theta);
		theta += round;
	}
};
$hxClasses["com.utils.TrigLUT"] = com.utils.TrigLUT;
com.utils.TrigLUT.__name__ = ["com","utils","TrigLUT"];
com.utils.TrigLUT.prototype = {
	val: function(radians) {
		if(radians >= 0) return this.table[radians % 6.2832 * this.pow | 0]; else return this.table[(6.2832 + radians % 6.2832) * this.pow | 0];
	}
	,valPositive: function(radians) {
		return this.table[radians % 6.2832 * this.pow | 0];
	}
	,valNormalized: function(radians) {
		if(radians >= 0) return this.table[radians * this.pow | 0]; else return this.table[(6.2832 + radians) * this.pow | 0];
	}
	,valNormalizedPositive: function(radians) {
		return this.table[radians * this.pow | 0];
	}
	,__class__: com.utils.TrigLUT
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
motion.easing.Back = function() { };
$hxClasses["motion.easing.Back"] = motion.easing.Back;
motion.easing.Back.__name__ = ["motion","easing","Back"];
motion.easing.Back.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Back.get_easeIn = function() {
	return new motion.easing.BackEaseIn(1.70158);
};
motion.easing.Back.get_easeInOut = function() {
	return new motion.easing.BackEaseInOut(1.70158);
};
motion.easing.Back.get_easeOut = function() {
	return new motion.easing.BackEaseOut(1.70158);
};
motion.easing.BackEaseIn = function(s) {
	this.s = s;
};
$hxClasses["motion.easing.BackEaseIn"] = motion.easing.BackEaseIn;
motion.easing.BackEaseIn.__name__ = ["motion","easing","BackEaseIn"];
motion.easing.BackEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.BackEaseIn.prototype = {
	calculate: function(k) {
		return k * k * ((this.s + 1) * k - this.s);
	}
	,ease: function(t,b,c,d) {
		return c * (t /= d) * t * ((this.s + 1) * t - this.s) + b;
	}
	,__class__: motion.easing.BackEaseIn
};
motion.easing.BackEaseInOut = function(s) {
	this.s = s;
};
$hxClasses["motion.easing.BackEaseInOut"] = motion.easing.BackEaseInOut;
motion.easing.BackEaseInOut.__name__ = ["motion","easing","BackEaseInOut"];
motion.easing.BackEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.BackEaseInOut.prototype = {
	calculate: function(k) {
		if((k /= 0.5) < 1) return 0.5 * (k * k * (((this.s *= 1.525) + 1) * k - this.s));
		return 0.5 * ((k -= 2) * k * (((this.s *= 1.525) + 1) * k + this.s) + 2);
	}
	,ease: function(t,b,c,d) {
		if((t /= d / 2) < 1) return c / 2 * (t * t * (((this.s *= 1.525) + 1) * t - this.s)) + b;
		return c / 2 * ((t -= 2) * t * (((this.s *= 1.525) + 1) * t + this.s) + 2) + b;
	}
	,__class__: motion.easing.BackEaseInOut
};
motion.easing.BackEaseOut = function(s) {
	this.s = s;
};
$hxClasses["motion.easing.BackEaseOut"] = motion.easing.BackEaseOut;
motion.easing.BackEaseOut.__name__ = ["motion","easing","BackEaseOut"];
motion.easing.BackEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.BackEaseOut.prototype = {
	calculate: function(k) {
		return (k = k - 1) * k * ((this.s + 1) * k + this.s) + 1;
	}
	,ease: function(t,b,c,d) {
		return c * ((t = t / d - 1) * t * ((this.s + 1) * t + this.s) + 1) + b;
	}
	,__class__: motion.easing.BackEaseOut
};
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
motion.easing.Linear = function() { };
$hxClasses["motion.easing.Linear"] = motion.easing.Linear;
motion.easing.Linear.__name__ = ["motion","easing","Linear"];
motion.easing.Linear.__properties__ = {get_easeNone:"get_easeNone"}
motion.easing.Linear.get_easeNone = function() {
	return new motion.easing.LinearEaseNone();
};
motion.easing.LinearEaseNone = function() {
};
$hxClasses["motion.easing.LinearEaseNone"] = motion.easing.LinearEaseNone;
motion.easing.LinearEaseNone.__name__ = ["motion","easing","LinearEaseNone"];
motion.easing.LinearEaseNone.__interfaces__ = [motion.easing.IEasing];
motion.easing.LinearEaseNone.prototype = {
	calculate: function(k) {
		return k;
	}
	,ease: function(t,b,c,d) {
		return c * t / d + b;
	}
	,__class__: motion.easing.LinearEaseNone
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
motion.easing.Sine = function() { };
$hxClasses["motion.easing.Sine"] = motion.easing.Sine;
motion.easing.Sine.__name__ = ["motion","easing","Sine"];
motion.easing.Sine.__properties__ = {get_easeOut:"get_easeOut",get_easeInOut:"get_easeInOut",get_easeIn:"get_easeIn"}
motion.easing.Sine.get_easeIn = function() {
	return new motion.easing.SineEaseIn();
};
motion.easing.Sine.get_easeInOut = function() {
	return new motion.easing.SineEaseInOut();
};
motion.easing.Sine.get_easeOut = function() {
	return new motion.easing.SineEaseOut();
};
motion.easing.SineEaseIn = function() {
};
$hxClasses["motion.easing.SineEaseIn"] = motion.easing.SineEaseIn;
motion.easing.SineEaseIn.__name__ = ["motion","easing","SineEaseIn"];
motion.easing.SineEaseIn.__interfaces__ = [motion.easing.IEasing];
motion.easing.SineEaseIn.prototype = {
	calculate: function(k) {
		return 1 - Math.cos(k * (Math.PI / 2));
	}
	,ease: function(t,b,c,d) {
		return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
	}
	,__class__: motion.easing.SineEaseIn
};
motion.easing.SineEaseInOut = function() {
};
$hxClasses["motion.easing.SineEaseInOut"] = motion.easing.SineEaseInOut;
motion.easing.SineEaseInOut.__name__ = ["motion","easing","SineEaseInOut"];
motion.easing.SineEaseInOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.SineEaseInOut.prototype = {
	calculate: function(k) {
		return -(Math.cos(Math.PI * k) - 1) / 2;
	}
	,ease: function(t,b,c,d) {
		return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
	}
	,__class__: motion.easing.SineEaseInOut
};
motion.easing.SineEaseOut = function() {
};
$hxClasses["motion.easing.SineEaseOut"] = motion.easing.SineEaseOut;
motion.easing.SineEaseOut.__name__ = ["motion","easing","SineEaseOut"];
motion.easing.SineEaseOut.__interfaces__ = [motion.easing.IEasing];
motion.easing.SineEaseOut.prototype = {
	calculate: function(k) {
		return Math.sin(k * (Math.PI / 2));
	}
	,ease: function(t,b,c,d) {
		return c * Math.sin(t / d * (Math.PI / 2)) + b;
	}
	,__class__: motion.easing.SineEaseOut
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
	if(addr < 0 || addr + 1 > openfl.Memory.len) throw "Bad address";
	return openfl.Memory.gcRef.__get(addr);
};
openfl.Memory.getDouble = function(addr) {
	if(addr < 0 || addr + 8 > openfl.Memory.len) throw "Bad address";
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readDouble();
	});
};
openfl.Memory.getFloat = function(addr) {
	if(addr < 0 || addr + 4 > openfl.Memory.len) throw "Bad address";
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readFloat();
	});
};
openfl.Memory.getI32 = function(addr) {
	if(addr < 0 || addr + 4 > openfl.Memory.len) throw "Bad address";
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readInt();
	});
};
openfl.Memory.getUI16 = function(addr) {
	if(addr < 0 || addr + 2 > openfl.Memory.len) throw "Bad address";
	return openfl.Memory._setPositionTemporarily(addr,function() {
		return openfl.Memory.gcRef.readUnsignedShort();
	});
};
openfl.Memory.select = function(inBytes) {
	openfl.Memory.gcRef = inBytes;
	if(inBytes != null) openfl.Memory.len = inBytes.length; else openfl.Memory.len = 0;
};
openfl.Memory.setByte = function(addr,v) {
	if(addr < 0 || addr + 1 > openfl.Memory.len) throw "Bad address";
	openfl.Memory.gcRef.__set(addr,v);
};
openfl.Memory.setDouble = function(addr,v) {
	if(addr < 0 || addr + 8 > openfl.Memory.len) throw "Bad address";
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeDouble(v);
	});
};
openfl.Memory.setFloat = function(addr,v) {
	if(addr < 0 || addr + 4 > openfl.Memory.len) throw "Bad address";
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeFloat(v);
	});
};
openfl.Memory.setI16 = function(addr,v) {
	if(addr < 0 || addr + 2 > openfl.Memory.len) throw "Bad address";
	openfl.Memory._setPositionTemporarily(addr,function() {
		openfl.Memory.gcRef.writeUnsignedShort(v);
	});
};
openfl.Memory.setI32 = function(addr,v) {
	if(addr < 0 || addr + 4 > openfl.Memory.len) throw "Bad address";
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
		var yOffset = 2;
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
		haxe.Log.trace("get_textWidth:",{ fileName : "TextField.hx", lineNumber : 923, className : "openfl.text.TextField", methodName : "get_textWidth"});
		if(this.__canvas != null) {
			haxe.Log.trace("case 1",{ fileName : "TextField.hx", lineNumber : 925, className : "openfl.text.TextField", methodName : "get_textWidth"});
			var sizes = this.__measureText();
			var maxSize = 0;
			var total = 0;
			var _g = 0;
			while(_g < sizes.length) {
				var size = sizes[_g];
				++_g;
				total += size;
			}
			haxe.Log.trace(sizes.length,{ fileName : "TextField.hx", lineNumber : 935, className : "openfl.text.TextField", methodName : "get_textWidth"});
			return total;
		} else if(this.__div != null) {
			haxe.Log.trace("case 2",{ fileName : "TextField.hx", lineNumber : 940, className : "openfl.text.TextField", methodName : "get_textWidth"});
			return this.__div.clientWidth;
		} else {
			haxe.Log.trace("case 3",{ fileName : "TextField.hx", lineNumber : 944, className : "openfl.text.TextField", methodName : "get_textWidth"});
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
openfl.display.FPS = function(x,y,color) {
	if(color == null) color = 0;
	if(y == null) y = 10;
	if(x == null) x = 10;
	openfl.text.TextField.call(this);
	this.set_x(x);
	this.set_y(y);
	this.currentFPS = 0;
	this.selectable = false;
	this.set_defaultTextFormat(new openfl.text.TextFormat("_sans",12,color));
	this.set_text("FPS: ");
	this.cacheCount = 0;
	this.times = [];
	this.addEventListener(openfl.events.Event.ENTER_FRAME,$bind(this,this.this_onEnterFrame));
};
$hxClasses["openfl.display.FPS"] = openfl.display.FPS;
openfl.display.FPS.__name__ = ["openfl","display","FPS"];
openfl.display.FPS.__super__ = openfl.text.TextField;
openfl.display.FPS.prototype = $extend(openfl.text.TextField.prototype,{
	this_onEnterFrame: function(event) {
		var currentTime = haxe.Timer.stamp();
		this.times.push(currentTime);
		while(this.times[0] < currentTime - 1) this.times.shift();
		var currentCount = this.times.length;
		this.currentFPS = Math.round((currentCount + this.cacheCount) / 2);
		if(currentCount != this.cacheCount && this.get_visible()) this.set_text("FPS: " + this.currentFPS);
		this.cacheCount = currentCount;
	}
	,__class__: openfl.display.FPS
});
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
		if(this.__lightMatrix == null) this.__lightMatrix = new openfl.display.LightMatrix();
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
		while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.__tileRects[tileID];
				previousTileID = tileID;
			}
			if(rect != null && rect.width > 0 && rect.height > 0) {
				if(useTransform) {
					var mat = this.__lightMatrix;
					mat.setTo(tileData[index + transformIndex],tileData[index + transformIndex + 2],tileData[index + transformIndex + 1],tileData[index + transformIndex + 3],tileData[index],tileData[index + 1]);
					this.__inflateBounds(mat.transformX(0,0),mat.transformY(0,0));
					this.__inflateBounds(mat.transformX(0,rect.height),mat.transformY(0,rect.height));
					this.__inflateBounds(mat.transformX(rect.width,rect.height),mat.transformY(rect.width,rect.height));
					this.__inflateBounds(mat.transformX(rect.width,0),mat.transformY(rect.width,0));
				}
			}
			index += numValues;
		}
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
								this.__context.translate(tileData[index] - offsetX,tileData[index + 1] - offsetY);
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
openfl.display.LightMatrix = function(a,b,c,d,tx,ty) {
	if(ty == null) ty = 0;
	if(tx == null) tx = 0;
	if(d == null) d = 1;
	if(c == null) c = 0;
	if(b == null) b = 0;
	if(a == null) a = 1;
	this.setTo(a,b,c,d,tx,ty);
};
$hxClasses["openfl.display.LightMatrix"] = openfl.display.LightMatrix;
openfl.display.LightMatrix.__name__ = ["openfl","display","LightMatrix"];
openfl.display.LightMatrix.prototype = {
	setTo: function(a,b,c,d,tx,ty) {
		if(ty == null) ty = 0;
		if(tx == null) tx = 0;
		if(d == null) d = 1;
		if(c == null) c = 0;
		if(b == null) b = 0;
		if(a == null) a = 1;
		this.a = a;
		this.c = b;
		this.b = c;
		this.d = d;
		this.tx = tx;
		this.ty = ty;
		return this;
	}
	,transformX: function(x,y) {
		return x * this.a + y * this.c + this.tx;
	}
	,transformY: function(x,y) {
		return x * this.b + y * this.d + this.ty;
	}
	,__class__: openfl.display.LightMatrix
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
openfl.external = {};
openfl.external.ExternalInterface = function() { };
$hxClasses["openfl.external.ExternalInterface"] = openfl.external.ExternalInterface;
openfl.external.ExternalInterface.__name__ = ["openfl","external","ExternalInterface"];
openfl.external.ExternalInterface.objectID = null;
openfl.external.ExternalInterface.addCallback = function(functionName,closure) {
	if(openfl.Lib.current.stage.__element != null) openfl.Lib.current.stage.__element[functionName] = closure;
};
openfl.external.ExternalInterface.call = function(functionName,p1,p2,p3,p4,p5) {
	var callResponse = null;
	var thisArg = functionName.split(".").slice(0,-1).join(".");
	if(thisArg.length > 0) functionName += ".bind(" + thisArg + ")";
	if(p1 == null) callResponse = eval(functionName)(); else if(p2 == null) callResponse = eval(functionName)(p1); else if(p3 == null) callResponse = eval(functionName)(p1,p2); else if(p4 == null) callResponse = eval(functionName)(p1,p2,p3); else if(p5 == null) callResponse = eval(functionName)(p1,p2,p3,p4); else callResponse = eval(functionName)(p1,p2,p3,p4,p5);
	return callResponse;
};
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
spritesheet.AnimatedSprite = function(sheet,smoothing) {
	if(smoothing == null) smoothing = false;
	openfl.display.Sprite.call(this);
	this.smoothing = smoothing;
	this.spritesheet = sheet;
	this.behaviorQueue = new Array();
	this.bitmap = new openfl.display.Bitmap();
	this.addChild(this.bitmap);
};
$hxClasses["spritesheet.AnimatedSprite"] = spritesheet.AnimatedSprite;
spritesheet.AnimatedSprite.__name__ = ["spritesheet","AnimatedSprite"];
spritesheet.AnimatedSprite.__super__ = openfl.display.Sprite;
spritesheet.AnimatedSprite.prototype = $extend(openfl.display.Sprite.prototype,{
	getFrameData: function(index) {
		if(this.currentBehavior != null && this.currentBehavior.frameData.length > index) return this.currentBehavior.frameData[index]; else return null;
	}
	,queueBehavior: function(behavior) {
		var behaviorData = this.resolveBehavior(behavior);
		if(this.currentBehavior == null) this.updateBehavior(behaviorData); else this.behaviorQueue.push(behaviorData);
	}
	,resolveBehavior: function(behavior) {
		if(js.Boot.__instanceof(behavior,spritesheet.data.BehaviorData)) return behavior; else if(typeof(behavior) == "string") {
			if(this.spritesheet != null) return this.spritesheet.behaviors.get(behavior);
		}
		return null;
	}
	,showBehavior: function(behavior,restart) {
		if(restart == null) restart = true;
		this.behaviorQueue = new Array();
		this.updateBehavior(this.resolveBehavior(behavior),restart);
	}
	,showBehaviors: function(behaviors) {
		this.behaviorQueue = new Array();
		var _g = 0;
		while(_g < behaviors.length) {
			var behavior = behaviors[_g];
			++_g;
			this.behaviorQueue.push(this.resolveBehavior(behavior));
		}
		if(this.behaviorQueue.length > 0) this.updateBehavior(this.behaviorQueue.shift());
	}
	,update: function(deltaTime) {
		if(!this.behaviorComplete) {
			this.timeElapsed += deltaTime;
			var ratio = this.timeElapsed / this.loopTime;
			if(ratio >= 1) {
				if(this.currentBehavior.loop) ratio -= Math.floor(ratio); else {
					this.behaviorComplete = true;
					ratio = 1;
				}
			}
			this.currentFrameIndex = Math.round(ratio * (this.currentBehavior.frames.length - 1));
			var frame = this.spritesheet.getFrame(this.currentBehavior.frames[this.currentFrameIndex]);
			this.bitmap.bitmapData = frame.bitmapData;
			this.bitmap.smoothing = this.smoothing;
			this.bitmap.set_x(frame.offsetX - this.currentBehavior.originX);
			this.bitmap.set_y(frame.offsetY - this.currentBehavior.originY);
			if(this.behaviorComplete) {
				if(this.behaviorQueue.length > 0) this.updateBehavior(this.behaviorQueue.shift()); else if(this.hasEventListener(openfl.events.Event.COMPLETE)) this.dispatchEvent(new openfl.events.Event(openfl.events.Event.COMPLETE));
			}
		}
	}
	,updateBehavior: function(behavior,restart) {
		if(restart == null) restart = true;
		if(behavior != null) {
			if(restart || behavior != this.currentBehavior) {
				this.currentBehavior = behavior;
				this.timeElapsed = 0;
				this.behaviorComplete = false;
				this.loopTime = behavior.frames.length / behavior.frameRate * 1000 | 0;
				if(this.bitmap.bitmapData == null) this.update(0);
			}
		} else {
			this.bitmap.bitmapData = null;
			this.currentBehavior = null;
			this.currentFrameIndex = -1;
			this.behaviorComplete = true;
		}
	}
	,__class__: spritesheet.AnimatedSprite
});
spritesheet.Spritesheet = function(image,frames,behaviors,imageAlpha) {
	this.sourceImage = image;
	this.sourceImageAlpha = imageAlpha;
	if(frames == null) {
		this.frames = new Array();
		this.totalFrames = 0;
	} else {
		this.frames = frames;
		this.totalFrames = frames.length;
	}
	if(behaviors == null) this.behaviors = new haxe.ds.StringMap(); else this.behaviors = behaviors;
};
$hxClasses["spritesheet.Spritesheet"] = spritesheet.Spritesheet;
spritesheet.Spritesheet.__name__ = ["spritesheet","Spritesheet"];
spritesheet.Spritesheet.prototype = {
	addBehavior: function(behavior) {
		this.behaviors.set(behavior.name,behavior);
	}
	,addFrame: function(frame) {
		this.frames.push(frame);
		this.totalFrames++;
	}
	,generateBitmaps: function() {
		var _g1 = 0;
		var _g = this.totalFrames;
		while(_g1 < _g) {
			var i = _g1++;
			this.generateBitmap(i);
		}
	}
	,generateBitmap: function(index) {
		var frame = this.frames[index];
		var bitmapData = new openfl.display.BitmapData(frame.width,frame.height,true);
		var sourceRectangle = new openfl.geom.Rectangle(frame.x,frame.y,frame.width,frame.height);
		var targetPoint = new openfl.geom.Point();
		bitmapData.copyPixels(this.sourceImage,sourceRectangle,targetPoint);
		if(this.sourceImageAlpha != null) bitmapData.copyChannel(this.sourceImageAlpha,sourceRectangle,targetPoint,2,8);
		frame.bitmapData = bitmapData;
	}
	,getFrame: function(index,autoGenerate) {
		if(autoGenerate == null) autoGenerate = true;
		var frame = this.frames[index];
		if(frame != null && frame.bitmapData == null && autoGenerate) this.generateBitmap(index);
		return frame;
	}
	,getFrameIDs: function() {
		var ids = [];
		var _g1 = 0;
		var _g = this.totalFrames;
		while(_g1 < _g) {
			var i = _g1++;
			ids.push(i);
		}
		return ids;
	}
	,getFrames: function() {
		return this.frames.slice();
	}
	,merge: function(spritesheet) {
		var cacheTotalFrames = this.totalFrames;
		var _g1 = 0;
		var _g = spritesheet.frames.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(spritesheet.frames[i].bitmapData == null && (spritesheet.sourceImage != this.sourceImage || spritesheet.sourceImageAlpha != this.sourceImageAlpha)) spritesheet.generateBitmap(i);
			this.addFrame(spritesheet.frames[i]);
		}
		var $it0 = spritesheet.behaviors.iterator();
		while( $it0.hasNext() ) {
			var behavior = $it0.next();
			if(!this.behaviors.exists(behavior.name)) {
				var clone = behavior.clone();
				clone.name = behavior.name;
				var _g11 = 0;
				var _g2 = behavior.frames.length;
				while(_g11 < _g2) {
					var i1 = _g11++;
					behavior.frames[i1] += cacheTotalFrames;
				}
				this.addBehavior(behavior);
			}
		}
		var ids = [];
		var _g12 = cacheTotalFrames;
		var _g3 = this.totalFrames;
		while(_g12 < _g3) {
			var i2 = _g12++;
			ids.push(i2);
		}
		return ids;
	}
	,updateImage: function(image,imageAlpha) {
		this.sourceImage = image;
		this.sourceImageAlpha = imageAlpha;
		var _g = 0;
		var _g1 = this.frames;
		while(_g < _g1.length) {
			var frame = _g1[_g];
			++_g;
			if(frame.bitmapData != null) frame.bitmapData = null;
		}
	}
	,__class__: spritesheet.Spritesheet
};
spritesheet.data.BehaviorData = function(name,frames,loop,frameRate,originX,originY) {
	if(originY == null) originY = 0;
	if(originX == null) originX = 0;
	if(frameRate == null) frameRate = 30;
	if(loop == null) loop = false;
	if(name == null) name = "";
	if(name == "") name = "behavior" + spritesheet.data.BehaviorData.uniqueID++;
	if(frames == null) frames = [];
	this.name = name;
	this.frames = frames;
	this.loop = loop;
	this.frameRate = frameRate;
	this.originX = originX;
	this.originY = originY;
	this.frameData = new Array();
	var _g1 = 0;
	var _g = this.frames.length;
	while(_g1 < _g) {
		var i = _g1++;
		this.frameData.push(null);
	}
};
$hxClasses["spritesheet.data.BehaviorData"] = spritesheet.data.BehaviorData;
spritesheet.data.BehaviorData.__name__ = ["spritesheet","data","BehaviorData"];
spritesheet.data.BehaviorData.prototype = {
	clone: function() {
		return new spritesheet.data.BehaviorData("behavior" + spritesheet.data.BehaviorData.uniqueID++,this.frames.slice(),this.loop,this.frameRate,this.originX,this.originY);
	}
	,__class__: spritesheet.data.BehaviorData
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
if(Array.prototype.lastIndexOf) HxOverrides.lastIndexOf = function(a1,o1,i1) {
	return Array.prototype.lastIndexOf.call(a1,o1,i1);
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
haxe.Resource.content = [{ name : "__ASSET__:bitmap_com_indigo_LoadingTopBD", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9zQUFBQVVDQVlBQUFCc3pzb1pBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBTnhKUkVGVWVKenQyakZPQTFFTUJ1R3huNUZBSkEyaW9PVVVuSjhMY0kxUVVLU0FBcFNzS2RJSHVuMHJ6WGVDdjVuR2Nydytjd2k0UjlLMEdyN3ExRHhGckQxRjBqVkxzNi9iNU9NTWp3M1lyRFNmQm5iSmU3MDgzTlk1RW1PVkp0VndFOHRkamN3YWFhYlMxSlljUlhlenJMMUUwbFhkbld0dmtQUS94aXB0aExGS0cyR3Mwa1lVR1lIWFlHbHVEWFg4UHAwaTBvT3dOS2tSd1dCWjZ1MzRBMXkrSkNUTko0RUlxQkVVNFB1U05LdUdia1lsdEtGS0U3djA2Vk9FdEJYR0ttMkVzVW9ia1FUN3RVZEkra093TDVvRHNGdDdpNlNyUG44QitwNHRSTW9ZTGZrQUFBQUFTVVZPUks1Q1lJST0"},{ name : "__ASSET__:bitmap_com_indigo_BackgroundBD", data : "aVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQW9BQUFBR0FDQUlBQUFDeVIwVHBBQUFBQTNOQ1NWUUlDQWpiNFUvZ0FBQWdBRWxFUVZSNG5PeTlkNVFjMTNYdSs1MVRxWE9jUEpnQkJvT01RYzVFWUFKekVDbVJsaXhLV2xZd2xTd0grVDFMMXJMOVpDL1o5MG9PMS9kS2xwL2xKeXNueTVJb2lpYkZMSUFBU0lBZ2NwekJBSmdjTzRmS1o3OC9lZ1k1ekFCZ0VGQy8xVnpzYVhSWFZWZFYxMWRuNzMyK3piNnhweDBlSGg0ZUhoNGVieTM4N2Q0QUR3OFBEdytQR3hGUGdEMDhQRHc4UE40R1BBSDI4UER3OFBCNEcvQUUyTVBEdzhQRDQyM0FFMkFQRHc4UEQ0KzNBVStBUFR3OFBEdzgzZ1k4QWZidzhQRHc4SGdiOEFUWXc4UER3OFBqYmNBVFlBOFBEdytQR3hnQ2lFRG5QWC96a2QraTlYaDRlSGg0ZUx5aklBSmpQS0F3VlNhQUFGWjUzUlZrT3VTNEVBU3c4VmV2UFo0QWUzaDRlSGpjWUJDQk1Ta2VKSWJDeVhTcE4rMFdEZVlTWklrSE5TV2krYW9qL3Vxd3JIQ2hXNkpzQVFDNzlqcnNDYkNIaDRlSHg0MkVLM2pZeDRQYThJNlR4cDZ1YW9WUFR3WnJxME9LSnB1Nm5jbVYwOFBaL01IZVlZZWNaQ2d5dnpIV1drMWx5eTBZNE9NYVRBVEdtTXlaSklHQlhFRzJXM2x4VWh2aUNiQ0hoNGVIeDQwQkFVUktiYVEwVWh6ODNyYXBoSlViWnJhdG5zckR3ZkYvQmdBNGpwMHFkSGVtVDNRTUhYbng0SW1YcGVUdGM2T3QxZlpRSHE2QUlrbmhBSEZtWk12V1NFNElVc00rZjNXSWMrYm1kRGppdEU1ZkR1WjFRL0x3OFBEd3VQNnBxRzlEZEhSM1QrSG5iMnk4ZGM3NjMxME95TkNMTUoweDhhMUlKMmZRWkdncW9JaFM0ZlZuajJ6ZWZOUmMwakpsNHp3aTRaak82SzV1cTNNNEprUTRvRXFjbGNwV3loSFM5T3JhZFROaHVTS3ZRNXBRZ2JNbndCNGVIaDRlTndDQzFJYll3SllPOGV0OUgvekQyNW9XekVBNUE4TUd2NGhZVnNxaEF3cDgwZnpRNkUvKzRkbVJ0aW1KdHNhaC8zcWpOZUp2VzlvMGZYWlZKQkdBeEsyODBkbWUzcldsNDJqWmFuai9hbFdUVDhlckszRnB6cGpFd1JrRFNCQTVBa0lBekJOZ0R3OFBENC9ySFZlb0RiSEI3U2ZFcjNaLzRvc1B4cWZVSURNS3NNdG5iUWtRTHBKaHdQL04vL0hMQTd1N1AvVW50ODFjTXhzQUhBT21BeUlvRXJRQUlHMys5bTllUERMVTlQak5LSm9rQlBlcHpLOFFZQnUyVlRDRWJoTWdCMVF0NXBkVldaUXRMd2Q4Rlp3S1dSQUJiMHFObkllSGg0ZkgxZUlLcFNxVTZSZ3hudHo5NlMvY0haOVNqZFRvQktQRVlKWC8rTWhRT2w4d056NjBaT2FhK1NobllUaGc0ek9VSElGU0JqNWx3Ky9kUHZvUFR4emFkTFRwM2N1Y3ZGSHNUUmRlSHhIRE9iOXBoelJaQVNNRzJ4V2psdU1rd3JXcnAzc0NmRVVRQWVBQmpXbnlXTmJlRmFSYlpMbW5ENG1IaDRlSHg5c09FUStvcHVrTS8vQzFqM3hrZFZWckUxTERrS1NKZnR3VlNNYVBkL1IvOS8rODlPQmpxNWV1bm8xY0NvTE9yYlRpSExxTmdMSHF0dGtIZjMxa1lGZTMrZXF4aE8wc3FnbFBhYXV2YTRna0V3SEZwNERCMHUzK3Z1S3hBejM3Zi82R0o4Q1RSNUFVOGNHbjVEdEhpaWRHUk1tQ3FtaFZ3VWhydGE4MjR1WjAwbTFJbmdoN2VIaDR2Q09RNHNIai83NzV0cVVOTTlZdVJIWmtFdW9yQ05GQWVqVDcvYTl0ZXV6eERUTVh0Q0kzQW5GZXZMTmk0Y0VBMklscHlhaGxWKzA2UG5kaFk5dmFhVW84QWpEQWdXbERFQUF0Nkd0cHJHMVoyWExpUzcveUJIZ3lDSUxFbFlab3RtTW84OUxoV3RDS3BuaThJV3lXcmU3TzRmNWRKNGVxSXJXM3ovSFhoZTNoQXVBRnBUMDhQRHdtektsNXRJd3hQcDZkWlFDQmhCZ3JpYUpKV2xPNVFxNk9ERzQvM3BBcGJmejhuVEJ5RUpPeFlKWUFXZnY1dDE2NmVlUHNtUXRtSURVSVNUcHI3UVRJZ0VvZ0FWOEFDSi9vN0Nta1N6Tm5WaSs1ZnhGZ0kxTVl5MWFlS1FldUMwZHdWZklFZU1JSTRuNkZ4d0pkVCs0SkhPeTkvOWJaeXpiTzVzRVFJQUJBdUtQSFJsOS8rY2pPYjJ4U05zeXVXemZUR2MyVE5Za0pZUjRlSGg0M0lnU0FtQ3J6Z0VxTWtTRFhkaDNMRVlZOVZtWWpjVm1UWlZYbUVtY01aTHRDdCtBSzRKS0RIQ0p3THNVQ0xxajA4cEhISGxzR1dVT3VOTkhVYjJVSjBXRDdybU9XNWR6OHdDSVVVbWNOblN1ajNoQmcwVWcvQy9xcWMwYjJxWi85dlB0NFpzV0dXWXR2bWc2OUROTVpUeUdmRFdPVnhYc0NQREZjSVlYOVFwT1AvZHVtMmE3ejhCZnVDOWNrb2VlUXlZNjlRZUpWTTZydW1YWEhnb01ubi9qM3pTZDYwdFBldTlMTmxNbTBQUTMyOFBEd3VEQ0NlRkRqSWEwOG5NOGY2cmVIQzd4a3FxN1FKQ1p6eGprRHdSR2tDeklJcms5RnpPK3ZqUVNiazc1RWtBekhMUmx3ejB2SENnSm5VakxrMm00aFhUN3g5TDYxemZHbTViT1J5MHhDZlNzd1pjZXJYZk1XVGdGa1dNN3BqMWZVTjR4VVB6cVB5cXBXZFdqL29YMXZiSjY3cFBHUC8vSytaSDBWbkRMeXhtVXYvcDRBVHdCWFNCRy95L254Ly9QaVRjM1JCLzd3THBDTjFEQzRkUHIrU3hCeUphQTBaZjZVVDMzNTBSLzkzYThPZjNOTDYwZlh1YWtpMlM1a3ptU0pTYndTVGdFUjJTNjU0Z3FzeXp3OFBEeXVCd1F4UlpKclEvbXVWT3JKM1pHQ01UMGVtTlljaTFiVmhjSmFLS2o2L0RKbkhDRExGbnJaeXVmTmZMWThOSkRyMjl1ZDNuRjhNT2dMdHpYRTU5WnpNQ2RUT2wwVjVRb2UxRmpJTjdTMXd6M1lXKzFYRjhoczQ2Tkw0Wm9Ya09wTG84bHVQcStYekFVTDZ1SG9aMzJXQVJIMEgyZUg5a3JWdGNrOU83ZjE5ZTMveUovZU9tdmVURGhGWk5JQUpySXVUNEF2aHlBZVVJVXFkLzd2RjI2YlhYWG40M2RDejZOc1hpQ05YNUhTVkpySFFvLzk5YnQvK01WZkhQbmV0dGFQYlhCS3BsMHl6YXp1bEV4aEN6RElQa1ZMQkxWNGtBbHlDNU96THZQdzhQRDRyY2NWVXNRUFRlNzYyYTdRaWVGYmx6VXZYYnMwMHB3Y1MvbEN3SFhoVWlYanEzS0VaS21hOGJGS0o5TWNQcDdxT05CMzhMWE9uaTBkdnFWVGExWk9oMm03V1IwZ0tlSjNPZXY1NXVacHRyUDJ6cmJaUytvUkNzSTBrU3RlMUhEamdoRGdWM3IyOTh1S25HeU1RcmZQR0c0QlVScnQ1UWQyODZhcHlSMWJ0NlhUaC8vb2k0OEVnMkZraG9GSlZQOTRBbnhKaUtCSVBCcm8rUHJMNjZmRjduejhMcFN5TU8xTHhURWtDZGtTWXZUK3Y3ai8yLy96bWE0ZmJXZU0vRmtqckVvK21jc0tKMEdtTFFxR1BjSzUxbHBUdFh3YTU4eE5UL0xrOFBEdzhQZ3R4UlZ5UEdpWVR0Ly85OUxDcVAvZVA3c3JWRk1GcDRSY3NWSW5ER0FzYjFvUk1nTE83TkNyU0RXemEycm1OcTIxakFPdkhIdjE1YVBIZDU2c2VYQnhwQ25oRmd5WHN4TmZmM2w5UytLZVQyOEVnRklSdVFJSWs3L0FFcGcwa2paOFBobUtncEoxNm1VRVlCWFlnZDJvYjB6czM3TTNuVDd5bWI5NlJGWWtwRVluVVY4TndCUGdTMEVBUWFtSmRQNW9lNXVNK3o1ekYvUWNKcExUbFRpeUpTU3JGMjJZa2Y3Wm52dmVzenllMEpMVklTbWtRcFlBUUxkejZkS0pqdFNCWFQzSGRwNkkzTDBnT2JmZUdzd0RGOGpXZTNoNGVGdy91RUtPQlhUZDZ2M2FTM2ZmMUxyaEErdmhscEVhUWFYcytZSmp4M1BxbUJ5QlhCbFVoaWEzM2Q3V2R2dnM3Yi9ZODhKM3RoVFd6NTc2MEpLamYvL3JEZFBpZDMvNkh1ZzU2T1pWRG14czE0MUdmUUE3M1N1WUF6SU83WWZQRnhrWkdqaCs3STFQZitGZVdaR1J5azFXZmVFSjhJVWhBc0FVV2E2TGpHN3JiQm5Kdi9jTDk4QTFVRFlubXNQbkVzcTVHZk1hMmc4UHR5NXZrZ04rNkNVSWd1VUNnQ3BGcHlZWFQyOVlmTmVDUTVzT1AvWGo3ZjIzdFRWc21HSDE1N3lVc0llSHgzVUxFUStvTnREN2pjM3Z1bTNXcWtmV29aaUM1VTYrTm9xQkFiYUxkQnFhc3VyaDFUT1dUZnZwTjdkcy9iUE9WVlBqZC8vQlJoZzU2TmJWaHhVNVp3Ry9jdnJ2U3ZDNWk0K095alUxYk5PTFd4NSsvK0p3TElIUjFOamdhckxMdjhydHU5NGdnSWlIZlZKMVdMZWMvaTBkK3ZNSEZxK2JJUVg4bUhDREN3QmdnRzZIcXhKVnRlR25mL1lHUU5CdDJDNWNBVmZBY3BIWGtjNmlrSnQzODRMSC8rSUIrWVVEZzY4ZFYrb2lZN1gxSGg0ZUh0Y2hUSW9GdW4rNGZlUDgybFdQckVOaEZMWjdWUlV3bk1OeWtSNUpOaWMrOFJkM0w0bjZicjU3SGdDVXpHdFJXQ09DZmlVWThZL05OU1ZBQlptc293TlZWZEc5Yit5Wk9rT2R2WGdCY21uSVY2aWtuZ0NmZ1V0TWxaUzZXTDQ3M2ZXZGJlenB2UXNHc3dGTjdzOFdRYzZrYjZZNGgxVmF2S1N4a0RPcFhJWjY5djBSWStBTUxwQWFpVFZXZmZUUDdqU2YzbC9veS9Lby84eGt4MFdweEdvbThrNFBEdytQZHdKQ0tOV2h2bGM2V2d6enR0Ky9CWG9HdHJnR01UOEdjSTVVRGtJOC9xVUhXcVlsa01sTmVraDlEZ1NBb1dnc1dGQzFZblU5SEIxQklBQ0VxT3NZSzVjVklVcWpJeWMyM3RrR011QmUrWHE4RVBRNHJwQmlBY0g1aVIrOG1oekszYmQyK3VKMWN3M0hIUGpPYTNmY3V3Q0dCVEhKYzRVQmhwMmNFcmRzNTBUNzhQUkZqY2lXTDdBRWlTT2RTclEyMzN2bm5DZWUzRFA5RTdlZ2FGNTBtWUtZSXZHd3p6SWR4cG1pU0tLZ1V5V0F3K0Rwc1llSHh6c1dwc3BHMFhTM2R6NzBzWnNBUXRtNldwazhFNG1qYk1GMklXZ3NaWXR4ejZ6Szh3bGV2U3U1WGo5QkJzcFVOTlJTZ2VmVGpnQ1BKVW1TV1c4UHE2b0t0aDg1VUQ5RnE1bzJCZG5jMVF5MVBRRUdBTGhDVGdSTjNlNyt4dVlWVGRINy8rcCtKUlFDK05hblhrOG1nMW9rZ25UbVN2YXlJRWdLNTZ5ekt6MTk4ZFNMdm8xeGxEUExIMTZ5ZTIvZjZKNmVxamwxYmw2L3dPbEN4SHd5VTVYQlovWXJJem1YYzlFUXI5MHdTd3BMZ2tnSTRoS25na0ZYR2RMeDhQRHd1T1lJa3VQQm5pZjNybXF0U3M2WmhzeUVteEZOSE1aZ0N4QkJZZ2hxa0N1NTIvSHFLY05FMmJwTXN4d0IrQUVGeFRRYkh1S3BVVll1d0hVRjR4ekF3QUJqZ0tKQjFUQXkxTHZtNWdhQVRjN1k4anc4QVFhRWtLSiswM0M2di9yaVBldGExNzkvQSt3Q1JrWlJIZkg1S29mUXZVeHhNbDJrZXBrSW9PWnBWU1RFeGQ4MGxqQkdJTHh5NWRTZjcrMnVXZFVpZElzY2NXNlhROFo0eU5mLzA1MExiWHYxZTFicFplUDFGL1ozUFg5SVh0eWMyM1pNS2hsU1k2Sm13eXpCR05tWDIyQVBEdytQdHhDbVN1Vk0yZCtiMnZDeE5SQUc2RTNvR2ljRU5BWEJJQ0FHTzRlT0h4OHRablc0Z2hpTEpJTUxGMDhKVmlWaEZGRzZTQzJ0QUFLd2JSemR4MVBEM0hHZ0txVDVUcmxUVnk3bjRMS2N6V1FrYnM2Y1VRLzdRaU9seVhEREN6QVIweFNoeUYzLzh2eDk2NmF2ZS84dEtJN0FFbEFrMlBiTTZja0R1M3VjZkZIV0pGZ1hLbzhpUUFFVUdpK1VKNWdNenJqVU1vWjhhZjB0cmE0bGtDOWQ2b1RqREdaNXdVM1RYM3J0Wk5lV2pwclpkVXJReHpranh5WGRKdHNGRVkvNDBvZjZhOUxGQjcvMFlPWEFUVjNlOHZXL2ZpTDlnMWZ2dTJkK3ZDcSsvemY3anp5OXYrcGRpeWxiZmpOMmxZZUhoOGVWUU1URC90SE43WXZxSTZGcDljaG1yM0dVamdpY0lSR0hZMjU2WnUrUi9mMnVpMmhVUzFhRkZFMXhYSEgwME5Bcnp4OXBubFh6dmcrdmdVOURLbit1QmhPZ2tlT3dYYTlKdVN6Q0VmTDd4eFo4YWcwQUNLU3BXbjlQcnhibW9ib1lDc1paSVc0R25Pb2hRUVNCc1FZUzV6ZGpHT2VHRjJCQVRvYVBmV2ZybWluaGRlKy9HY1ZSbk9xZ1VMS3FwdGNFUTlxZVhUM0xiNWtOczNqV0hxeElyNTlRWnFNRHZGUmtyb05naUdvYkNSSmdqTWNsSENGcnNxeklNQzQ1Z1pneHVDNWtxYWt4Tm5xZ3p6elVQOG9ZSlVKYVhUVFVuUEFuZ2lCaXFseHFIOXF3ZUFxZ0lKMkNxaERqV2xEOThQdHVicHpkQXJqVDI2cjYvdUdGUWw4bUhBOEt5M2x6OTVxSGg0ZkhCR0ZNRUZoM2F1R0dWa0JjWmRqMlhGeUJrQTlhY050TEI3ZThjREFTRFM1ZDFicG9XWU1XRG83WHhUQ0E5eDBmK2RFM1gvbnpUL3o0VDcvMFlGVk5GS216QzdVWW9LRnJIODlsV1R3eDFudnBnbkNKNS9MNTZrUVFUSVlqSURHRU5NanFtSUdYNVZTdXZWeFRvVW9BSDIvbjVLQm93ajdYOUZCbU4vTEVVMWNvTmVHaEhTZXErek1QL3YyN1lSVmduVkh0VEFUVHV2dSsrYnB1dzdETy9hd0VSMkNnUXhyb1phVWlxOXdldVE2djZxZUZ5MXpKQjVnWXV5R3lYV0FDdnFBTXVXdzVVaE41NU1NMzVmc3p2ZDJaNGQ1TWQvdEFhbTkzU3BGNFV5SjUwMHlWc1ZoTkNIQUFEbFhLRGhTRW9McnFFSXdzYkJlS0ZFa0doM1NiVlVtTVhVVmxub2VIaDhlMWdzQjlTcjR2VTgwd2JVRURkUDFhRG45ZEY4bW9iVHJmK3NlbjA4UEZlOTY5Yk5HcTZZQ0xVaG5aUEdqY1NZdWhjWHI4Ly9yYjkzN3ZYNTc5MG1kLytqZGZmVjhrRWtEeGpBQ3lCT2dzazRVdlFCZVRYZ0NNTVNMb1pTTXhNd0F3SkNJQURSNGJPdG94bkIwdUZJcVdZd3ZPR1VDT1M3TE1mWm9jQ3FyeDJzalVhWW1HbGlRa0dkbmltZHArUTQrQW1TcmJwbE40NmREdmZuQUZGTis1azZrWlE5RkkxRVVnNk55MEFRY1U3SHVOOS9ieVpCVUZnbFI1TzRHR2g5alIvWHplQ2hmMkpLY0pDUXFHdFV5NlVNNFdJOU5yNWsydm1RY08xeTcwcGs4Y0hlbHNIenIydlMyNTRXTDB2cmxqazlJVWVUU24yN2JMZlRJY0FWbWlvbVVZanV4WFFONWtZZzhQajNjS0xLQVVYeCtaWFJWazBUQXkxODV1eUJWSUp2cDZVdC81NStkbnpHOTgvRS92QW9CY0JxSVM3ejJWWm1ZQWtDNUFNei80NmJzSlQzLzNxeTk5NmkvdjR4SS83WHpKNFJwd0JaT2tzOGErWTZuZk14Q3VFTFk5ZGZZVVFOdnk3TTREZTNwdFIxUlZCV3VueEtiT0RJUkRxazlUaU1nd25HTFp6cVNMQXozWmc0Y0dYOVl0eGErdVdOT3k0ZlpaM0RsOWZiNXhCWmhjVW1wQ0o1L2NzMlJLdEduWkxPUXlGN0F5cVpTMlY1NmNpUUJjVEo5SGxrMkdEbFhGcVpCRkxFWjl2YnltbHFxYUJYTHNBcEdXVTBFUkdlREFxYUcxTEZrRlV5OVpqREdVRFpoMlpiM2h4dGpDcWJVTDcyekw5cVIvOGFQdEk2bHliWXNNUVdEUzBFQXVHTkpZd0k5TUFVSGZ5UEhSak9GRUVpRmhlOE5mRHcrUGR3b0VpS0Y4ODZLNmF6bFgwaFZJeGs4Y0cvelcvM3JoZ2ZldFdMRytEYVVNVEJ1Y1g3amFobk9ZTnBEKzBLYzJISHk5UzZRTFhKVlBiMDlseWhLZGZxR1NGYlJ0Smx3SUVDTW9LbVJaY0VscW1WRi9lRS92ejMrdzN4Vml4WnJXWmF1Yng4UGRBdVRDSlFDUU9FNTFqM0NzekdDK3ZYM0VzVjFoMkZ3NUxUVHlEUnVBNXBwc3BJdHkrK0R0bjF3SHNpYmRxY3BHTEVuTGJuSjNicFZLSlFTREVPUDlvWDArdEIrVkV0V0Nhd1RyakdJL0FqaWdqWFZoZG9xc1VHQ3hDREVHQ0lMbTI3TzNvMXl5L2JWUjVNWm5EQXRDd1FRTUFMR201SHMrZk5NdmZ2ajZ6RG0xbWw4QmVIOVhldXIwcXJGU2VDYjNkNmZMcWx3VjFOeDA2VVpPTEhoNGVMeUQ0TXd1V1NIYmFXaEtRTmpYWnBsQ0lCRWU2QnY5ajM5ODdyRlAzanhuNFF4a2hnRjJHYnNrem1BNklKcS9jaHF5WlRqaTlNVlpRRklocTJTYWpLdXdUSmdtMHpRS1J5Z1lKSjhHbHpBeUpHUTVBdENoQTUyMm5ibjl3ZVhMMTg0Q0NPVVNNcm54QloxNXVSOS9SZUh4dXNpcUtVbUFrQzNCUG0yOUtkK2c1c05DeVBGQTc2LzJMbTZPUlZzYnI2UXFqd0Y1S0dFc1hlWHUyQ3FaRmxTNVltUUpuNTl5V1hhOFhacXh4RVhsZkNOQUJ2d0VsK2w1bHMzeWJBWUQvYnkxMVkzVkFBYkFBTnNPQmRSYjc1d0RSNXhsK25IS2lEeVZqbFJYaGVQK1RjOGN2UFBSTlZZbWt5K2F0eTlwaEZVeFhhTVRuU201SWNZckVlb2I4N0I2ZUhpOG95QndUZGFIOGxGVml0ZUZZZGpYNXRLa3lvNHRmdmd2bXg3NG5XVnpGcllpTlR4aGwzNEdSeUJUcmd4TlR5TUFIMEpCNUhJb2xhQ3BhSjBqcXFwRU1GZ1pMekV3dDJWQmJOY20vVWZmK3RYUzlkV1BmT2k5Z0lSOERvNEE1eGY2VW1kM2p4Z2ZSNTNUY09KR0RVRXJrbFcyMk1uUjFlOWJBamlubXpsUENnNFVvTVZwN255eGI3ZWtoTVp1ZVlSQUtFeGRYYnk2bHFJTkFubUdJTWpDNEVrK01zVHlPZTdZVkNqd2FkUEYxSGtDcGJFWlN5aVVGNithQnBralc3cndmUnpuRU1hS0ZWT2YvZFYrUVBSMGpqUTNKNUpUcXBIT0k2UTZvOW1la1dKMFphdDc2WEpyRHc4UGo4dHlLbE0yd2RjdkR0TmtNMU51MENSRUE4anAxMkxiQ0tIZ2xsL3VxbXVLcjd4MUViS1Q5L1M0OFBlaVJCTEgybGxERTgxYjZxcCtnZ25ZREJiZ0NGVEZSb2V5VC8zaXYrOTRlUDZ0OTY2Q2tSc3JESnFnUmZFNURaM0d1U0VGbUNDRmZVTnZkRTJQYURVTG0xQW9YYmxpY1NEUHFocEZkUjlQcDVuZk41YXdseVFvQ2gzWXk1Y0d5Qitsa1c3ZTJjNUxSU2JKNVBPUkVLaXBFVzJMSFJpQWU2ckwxWGkrK1dKSGxER1V6YWFXQk9Pc3Y2TzNwclc2WVdvQ1pSMUVVUDBkZXpzenFqSjFTc0lkTFU3Q2Q4M0R3OFBqRkVSZ2pLa3k5eW5nYkx6KzZMVHFNZ0JDQ05NaDJ4a3pmYnlNU1JHQmNTZXZWNFUxZ0Y5MGNzL2tZSUFyTWJieXBoWkF2emFUbWhoZ3MwaEVKS3JZdkRaWDFRaFpOalpLZGdXcVFxTWpoWC83OHJQM1A3cGk2ZG9GeUtVZ3hEVng4cm94YzhERUpNazRPdFMyc0FHUVlidFgxYlZLQUF3MU5XSmtSRHAxY2drQnZ4KzZqbjJ2Uy80d1pVWVk0d2hIaUtneXcweFp0Snl4Z0FvSDREWU1aNktTNlJKQ211VlNWMWRtemN3bWxBc3diTWdjRUh2Mjl2SDVqVHlnSWVZeXhrVEpJdE8rak8rYWg0ZUhSd1ZCVEpHa3FGOElLZzNteSsxRGRxNHNkSnU1TGx4aURJSnpwa2c4b01vUnY3ODY3SzhPSzVwTXB1MFd6UXRIRUFXQk15bnM1MVZoMkc0a3FnR1g4Z09jSEFWaitab1cxM1pSTUs1WndNK0dxbUJlbTFBNVVCaXZueFdFb0dhVW5SLy82Mi91ZldUWmtwdm1Jek1DWEtSdjhlUzU4VWJBZ25oSUsrZjBXa1p0cTZiQnZGQ0RoRW5CQU1FVWhUZ0VuVkZCSndUeitXRGJ5SXd3bng4QUVURi9JT2c2YWpDWXkrZEdqbmZhbWlMWFQ0a0ZxdUp3RE9RbTJPNlFYRWZZamdzNE1Cd3dockIvcUhPby9VVGFiMU4vKzRDaktWSjFKRDZ2UGxRZnM3TWwwdTJLT1F1VE9KT2x5dGxQamlESHJkenRYdFYzOS9EdytHMkhDSUJTRTdiSzF1RG1kdmY0VUlLenhvQmFGZkZGRTVxc1NMSWlBMlNiam1XNXVYdzVOWlF0SE9nWnRvVWRDMGJtMXNWbTEzUEF5WlRPa21GWHlMRUFLVkxxUUYvNTVjUEQyNDlMNzF0NnpkdzNHR0M3L29BS0FLWnpMVE51QXBFSW5iWXlCS0J3aTlpdmZyQjkyYm9aUzI2YWkvUXcyRVdxcksrSUc2a0lxM0tlVllVZGlZMjhzTnMrM0Q4NFdtcU1Cb0VyS3N3akFoZzRJSE9vVE5jMUxTQUhRNmo0bmdoQnJ1TTRqaTFKUXBZaEJBV0NRVVhST284ZFA5bHhJaFF5L1ZISjBza1Z3dER0Y05TMy9yWTVVMXZpMEMrNUpZSVEwWUJ3WFYyNHFUa0pCT0hUWWRnb1c2cW1mUGdQTmdSSTVESkdMbHZxNmt4My9sZjNjRTJzOGQ1RmFxMWYyQUlTTi9PNk1WcDBiWWR6cnNVRC9rU0lFVGs1SGU2NTVpd2VIaDQzQ29LWXBpakowTURXRG4xTCs4eWE4TUkxTTJhMTFTaFZFWERwakZMZU00YXVydU9raWowbk1sMmRRMGUzZG5SdlB1cGJNcTF1ZFN1WnRwTXRNODRBcGpZbXNwMURJMC90YlZLbFZiT3EvTzlkMGpxdkhucjVta25YeEEyT0pzczVGb0txa3U1T3RjNnVYYnBoTnJLcGE2dStBTmgvN08rOGxzdDdwMEpFakV0S2JXam90ZVA2SzBmYnBsYjFqK2FYM05TeVptTWJNb1ZKN05PS3Q2ZGZnYitTMG5BZHcrdy9ycisrM1NJeVNUaXVLN2pFVlVVSlI4T0paRnhUVlYwdmFmN0FZTi9vdmwwNy9DR2piZm1VK2ZPYUVva0lOQm1PbXhuTzc5amU1Vk9sRFhmTVlaWnplbUw0T1RCQWtmcUhDa2NPRGg5ODQyUjlRN1JsVHNQaUpRMVNLSXhpSG9JUThWZlNMUlh6czF4UGF0TXY5cnpSblk0OXVOVE9sYzNEZlNGWGhEUlpWYmpyaXFKdVo0bjU1emZVckpnQnkzWnpaWGJOTzVONGVIaThzeUZCVWtCbElWL245N2ZWRFdidWZPK3ExaFV0QU1IVVlUb1FkTzZzM2JGcUZRWlZoazhGRkJqbGc5dE92UHJ5MFM1Qy9YdVdSeHBqMW1CT2E0ejNiZTV3bnR0MzkzMExsOTQ5SDdJQ0NKVEwwTzFyM3dIcHpZWUF6aEJTVVRDdlpjaFFrMkc3Ly82dnI5d29BZ3hBclkxMi9YSlhlSC8zdlkrdGJsMDUvNlVudHVwbDg3NzNyMEVtTjJiWGVlbWRTd1FHUkFMZ1NtRTRmZlR3OEhCZk5wMHhoQkMyeFdTTi9ENm1LSXd4TWsxUmVSaEZCSUpWaTVZc3poZUcydzl0WDdoeXlrMjNMb0trd1M1RHQ4Y09wMCtCNm9OalVrNi9xQW9TNEZOS1pldUZadzRXcytXYXVzalFjR213TjJOYnp0eWxUUSs5ZndYQU1IcUd2VGdEd2dGSW9ZT2I5L3p5di9hMHpxaWFNNmUrcVNVZVR3YVpLc01WeGF4KzdNakk3dGRPbkxTY2h2ZXVEbFdIck9IejNNazlQRHl1WTRpNEl2TllvUDMvL2MxQ2xSNzkzTDJRWk9SeWNHbEN0U09Wb1lnbUl4Z0c3RmQvdHZ1Rlp3OEZIbGd5OVlFbHgzN3ltdnpTd1kvOTVmMnhLVk9BQWx3QklWQ3lybGtDK0MzbXpXaTFma01KTUxsQ3E0LzF2blE0dEszOThiOTd0eElLQU02K2JSMWJOeDM3NUovZmpVSUo0UUFnbzFpRTZWeFloMXlCcUIreTFyNjNlLytlN256ZWpJWFVhRTI0cGpwY20vREhxZ0pLV0lNa2ovbWVnQ0JjdTZEMzlHVGFPd2JmMk5JZkNmUFBmUEZod0kvYzBQaThzVk1iaHdsV1lMa3VTVUVWUGcwQXdPQTRCL2YwUC9lcnZjV2MvdEUvM2RqUVZJMVUrdlRHVjVwaVJnTFdhRUdOQnlHcEVCWU1aMnlHc1NaRDlnUGkxWisrL3VzWGp0UjhaRU9zT1dFTzU3MXhzSWZIalFLUldoL3IrTzdXK1lieDZCY2VobDFDZm9KbEtHY3oxZ1F3UG5pMDYzdi90am5kWE5WYzBELzUrYnVoaExJblQrYUtsbWs1QWIvUzBCRGxqRjAwd25lamNWcUFEeHgvdTdmbFRZYUlCOVJ5M3NoK2EvTWZmZTdPUUVNU3FRdzBCVDd0Zi8zTlV3ODh2SGpHa25tSGR4N283QmhaZC9PTVdDSUEzVG5yTm8wSUhJakdCN3FIWDM3NmdPM1FqRmwxaTVjMUJwUGhNZTh4MjRIdHdoRmpVbHE1eTJNTXNnUy9CcVlOOWcwODlaTmRsa20vOThuMWdWZ1kyUXpvaW93eUtvczlkUWJMSEtFQW9MMzQ1TTdubnRqMTZiKzZ2M2xhTlZMWk16UVlZSUJmZ2VtTWViNmNXaWtCSktESkNGWWYyN3JudTkvWjN2Q1pPd0pSbjV2VHI2b2czTVBENDdjQkVrS3RqZ3pzUEJINHplRlBmK1hkY0FYeTVTdVBnVld1SjRtNGtjMS84MitmWHJCK3RoUU9kQi9xRVp3RFpKU2RjRVI3NkQxTFZMOE0wK3ZTQnVDMEFGLy8wNUFJa01MK29WL3V2WDFWYzZDaER1a1JTQklzRnlIcHpnY1dIem93Y09qZzhONDNUc3ljMzhDazh3eE5CRUdWRUlwdWZYSC8zaDBubHF5WnNXYkRUSENHY2htWi9QaWJ6Z3ZYVkF5eExBZW1EVkdvYTBoODdMTjNmZS9yTC8vMVozLzY2Tyt2Vzc1bUZvcDVXTzZreXdjSVo4Mmljd1RTQmNqRjJ4OWNIUTRyWC8vUzAzL3hUNCtFSXY3VGRmbVZ4VmNLdTg1WkZ3TVloK1hDSHB5eGR0RzdVNFgvK3Q3V1dYOThGNU1sN3hiVncrTzZoeXV5cmR2bFRVYy85S0dWNEFveWFVam5PZUZQSEZheDMzT2dxSTN6R2tmVHBXcFZ2dVhPdVltcW9CWlF3U1VJQWQyQzRWd21CUDFiR3FPK0NxU0hQdlZIYi9jMnZMbHdXYkowQzN0T1BQaEFteEtXWVRsalptQ0dXZFBhL1BJemUzTHB3aC85OWJzV3Jaamhnd1A5REJzcFFkQmtoQ0wvK1IrdmRIVU1mdUNUdDdUT2FVQytBTjJFb0xHRlhEcFp3aGc0ZzI2QzNFVTN6WThtdGFkL3NuT29Mek9yclVHUytTU2s3bUx1TTVVQnNWbHNuRHVydjJ0d3o2dWR5emJNaDJWT2RMR01nUURIcUZ2WU9rTXVsekVBQUNBQVNVUkJWTFN6c3pkanhPYzFpSko1QXhYR2UzamNnQWhTa3FIZXpVZmJKRnIrcnBYSVpjR3VMdTdsQ2lRajNTZFMzLy82cGtVM3RkNTIvNktwTTZyREVVMEdZTHR3WExqaU11SmFNZXNOQUlTelpnRmRyOGdjZ25idDdMN2U0NDJ1a0NPQlhGKzJJZUlMVEsxQzBSaFRGeUpFZ29kMkhnTGhVMy94b0FLQlZBcU9PQ3VIcWtvSWhyLy85UmZ6NmNJblBuOWZPS2dnZFVYUlk4NWhPc2ltVnE2Yi9aZC85NjdXMXFSYm1xaEdDZ0pVSUV3SUFKVkpBZWZXSlRJSXdNNis3ME1ydTdzeVBVZTZFZlpQb21TQU1WZ080SzY3WTQ3YlB1QllGMG1CZTNoNFhEZHc3dGd1SFI5ZXVYWTY0SXgxNzdsaWlCRFE4dG5TTDc3ejZ2MlBMRjJ5YWhaeWVXVHlLSnF3WFFnYWU5Q0ZMbDhWQkNyWHQ4RnVWc3d6cU9ldm9sTHpkVjVWOW04Lzh2VjhyMEZncWt5Y1VpOGVuRDRsQ3Nobk5LaGc0SHovenQ1Rks1b0Jkb0g4QjJjSXhYNytuVTNsb3Y3NG45MFB2UXpkdUhKeHFtaDJLc2NEeXZKYlp5TmZudEQ4Y1JtR3pubzZtS3lpdXBZaUlVS1lZREdZWjk4aGNvYWlvY1lUTStmVnZiN3RlTk9jeHNsdG04UmhsSnBtMU5RRWp4VjZNNUdhc0RDZHNRcnQ2L2pjOFBDNE1TRklBVFY5WXJSV2xScmJHbEM2Q2lQZThRWENIM2p4eDV2bkxtaHNiWnVPMUJBazZheHlFd1pvUUNYQ0xRQWJjTStJTmdzZ2pHS0dIZGpEczJtMllvMGJVZ0ZuUE4zR0dHUU9WWVlpZ1RFNExnb21jUDBNa2VYcitpcExTakkwOE96K3VWejRxa0pVS2pHRnd4N3ZHaWdjeGxGYkZ3Rlo1NTZDcmtBeXR1WFozVU45MlU5KzRWNFlaZWpHTmFoT2toaE1aNndmeUVST2VnZitBQ1VhY0hDWGRPUWdhdW9wa2FTbXFVSU5BYVZ6dmlnQVo4NzgraDNiamdNQy9Md3UwcGZHRWdpcW9iQmFsbVcxSnVvVURUQW1TcVl3Yk9aNWRIaDRYRjl3bjFMdVRzMnJEc0FmUUNaM3RTa25UYll5dVh6QnZPUGUrVEJ6NEdma2tnV2dBaHJLR1ZZc0Fnd0JIMEpCUW9qZ3NqRW4vQURNSW5adDU3cUJxaHFLUndrbVZReitJQ2tBWUJyWm9VSTZYUzdwVnNDdnRMWWtBVnczcFNyWHN4VWxVeVE5VTJiSGh0N3pxZHVlZUhKdis1R2gyY3RtSUpXQ0pFRVF1QlNOQmJMcEMxbFJSdnhkaC90T0hCdit5Qi9mRHR0RzZTckd2aGZZckVtYzdzeENkUzNkY3BkejRBMnB1NXRscytqcmtlWXZFc2s2Y2RxdHRMTE1zajVuVm8ybVNDZ2I0eDdpbDA2NkVCZ2IrMTRLRjJWcm9EOC82aDdYancyUmFVc2hMVDYzSVZRVHNVWUxubU9saDhmMUF3TVJpWFN4Zm03Vk5aamZTb0FtRDU5TStZTnFxQ3FFb25IV0JFc05rTkYrZ0EvMGN1RVNHQlNaYVQ2S1JLbW1udUsxQkJ0ZzFIRll0bXdXalpKdEM4WTR3a0dBQmpxSERoNFk2RG1leXVYS0NtTnlRQWtGdFZtemFscG5WRU5jTEpiOTI4ZjFLOEFFN2xQemh3ZXF3MXFnb1hieHN1YWYvK2lOUDVuVDZFdEdrY3FEY3hTTWRiZk10Q3dIQmVPMHdGUzY2ZHBPUU9XUC9PNXlUZVhJWFVWMS90WERnQUxnUTl0cVI1SGx2bjdHR1BidWxGYXRwV0FFME1jbGxnR0dGWWtIRnRWRllKU0Y0SzRGUmJ2NFdlb0tSSHhRTkZnbWlLQkZ6ZkpvVFUyb0xjUWpxaXRrTmppWVBiNnpNNys4dGVHV09kWncvZ0lGRkJPZXZ1emg0ZkVPZ3VDNEZIQkZkWDBNY0svSklnVVFES2pqWWVYeGk0NEVxSFR3RGJtM2k0V2pKUGtBUUJBWkJncDUzdGRMVlRYVXRreVF6a1pIV0RCSVJFSlRvM25kUHJMbjRONGR2ZVdTR1k3NHAweE5MSjh5dmFreEVrMEdtVitGRU1qcm9EYzViaXNBSHlBQjVUYzkxaTFmdDVkUUlpWXhxMlFrRWdIQW1iZWl0YWN2OTQ5LzljUmpuN3B0V25NRUpST1dIWXhvUWRKUXRpRXhFS0RBTmlFQjNIQ3FHNklBcm5CbStyV0ZBeVpBYlBaU1J6ZmtmQjRFMW5WQ21yZlVQZXZrWUJ5V0E3OVRMRXVwSVZZL1JWekt3Q1drZFo5TXYvYWJqcEhoSWhIRm92NWxhMXMvOEprSEFCT3dBUTd3MFdORFAvcm41d2RsUHVYZXhXYXFRS0lpdVpYcHhJeEpESUtFYmduREJnTzdiazhqRDQvckJCSUV4cFNhaUc3WW1ZRmNNVmV1UGJjci9lUmhnT1hFNGdGWms5MnlJNTI2NWhBUVJIOEg3KzFtOFNTZFNvaHhCbFdGcHBFUUdPNW4rMTBlamtLU2hDenpjQ1I1K0VEbks3L1pWMVduTFZvNmJkSHlSbDgwTkJiS3MyeVlEbkpsRUM3ZkFQSHEwZERmemJRQWtrMkU0cHRRbFYzWkd5b3hSdkwxazg0K0J3YUErUUpxNW9SZVR1Y0NmbjdYUTh2RElXWHZxKzFOVTVaSm5BRWN1Z01BRWdNQUJaYUpYSlpWMXhCY05qWmgvR0laVUtxSTFGdFZNYzhBRTFBd2Q3NTRmVHRYRkNya0lZcmd5bmdqQ1FZRUFBVURKOWlKZGo1L3NhdHFCT01pWnlwbkpDZzNsSytxank1WTJnVEd1cnV6ei8xeTc5R0RBdzk5Y0RXS0Jpd0hIRlV6R2ovNEo3Zi8vVCs5V0RJY3VhaWpaREVTQUNPQUpJbUNxcG9NUlZ0cnd3MVJ0Mnk1ZVgxc1VwYUhoOGM3RUNHNEtpdkpVTi9MaC9tUlhsNDIrbExsVmx6RjNOOVQyRzQ0NG11ZW1yQU0yNitOTDFDQlcwSlhGdytHVGc4QzJIaHBTaVdwRllram4yZjVIRFFmZ3NISWptMDdIZmZrL2U5YjBqcTNHUkFvNjhnV3htdFozdHBTSlEyMmc5MWJwUG1MeGJTWkFpNVF2bWFkbkVDQUJQaEZlVVMxYlBYNkRVR0RrZTFXVDYvWjhmMXQwYmp2Z1krc1J6WjkwOFo1TUV4Uk1DQnpBR2VsS3dKMDhxamtEeEI4UUhFQ1U5WVlpamtFZzJEWDNDbjBWUG5mbVdzRWdVSHpreXpEY1dEb0tGc3NGQkZnRENxQnNVS0dkWjFneDQveXhVdEZ0STZRWmhjOVl3U3hzclZnZFF0a3RSS0RtcnUwOVk0SEZuNzduMS80cjI5dGZlVEQ2NUROQTBBK0hXdE5ybHMvd3hySk5yVWsvS0dFcE1pY01VSENLRnVGVExubjVNamducTUrdjFaOXk1emtuQVk3VTNLTEp1UFhkVldmaDhkdkl3UW15MG95M1BuOWJkWGR3Ky82MkczZEF5UDdkdlZzd0xVWVB4Q1lTM1BuMU1JZTd5VkRnSTlHVGtqWkRQTUhZTnZFR0Vnd3prbnpnZk54R1JaUVZSQ0pVQ2kyYjlkK2dhNlBmUForZ0NHYlBUM2I4NjIvcHlmQVFiSUt3U0RhRDdETUtKKy9SS2hob0hEVkdseVIzZ0JBNkQvR3U0OHJuUFByVm9CSmtCVFU4a2NINGdwM0pEN20wcHd0Z2pNdW43Y2pmVERTN0hnbm56TlBRQkZqRGhVWFBQU1ZuYWpoUkR1UHh3UlRyckNaNFlXV1RBRGdWK0ZUeDlkOXBnRUhrV0VmMk9PYUp2eCtsRzBNRDdGQWpEa0dzc044WklTbGgxalpRSDI5YUc0V0tGNWNmU3RJSEVVVFpJejlLWW84NVB2SW45NzM5Yjk3Y3RjclI1YXVuNFYwQVFSa3l2ZThiOW1GSmlDUFdWNlhCaks3dGh4Ny9XYzdEdGZFcHR5OU1Ed2xicWVLcm1FejluYjhjanc4UEM0RUVXbTFrYzZmdlY3YlBmU3hMejhLeVI5S3lNODl1VC9UT3hKdmlDRmJQamZVVjduajUzd3NPbGl4MGJqa0N1Q09YellCY0pERCt2cFlLRUtOalJRSWtDVEJzbGs2Zy9Rd2t4V295aG1PdXJLY1R1ZFNtWk8vLzRmcklBUXlSVWpYdU9YZjVHQ0FnQ3pCNXlmTmgzU0s3WGhGV3JwYUJNSjBoUnBja1JJRjhCRXNEUGZ5dm02V1RmTndoR1NGcmxNclNnTDNxM3FxV0hybHlFZi9lT09MbXp2MGRNNGY5U09uWC9qOU1ucDdPR1BvNjJIUkdJODNFaHlDemVCVUxOYk9VQjhKQ09QUURrN0VXdVlBaFd0eUMwa0FFQThDY240ZzFkSFJsVTJYOVlKaE95NkJKTTU4QVkzeE1EblYwWGgxVFMwdkZVdWF6eDdvNWFrUnlYV2c2d3lNZkQ0RU9MUks3Y0FFN3dsT2FhVEVVRFNnYWJmZU9XZnpDMGVXcnAweGxoUUhRMDRmbi85KzNrK1FzMkJWYVAyamExZHNuTGZwRjd0M2YydlQ0TXo2eHR2bitldGpvbXc2ZVIzd2NzTWVIbTh6UktUR2c2TUgrNlJkSno3MHR3OUJZa2dOQm11cTV5eW8vODhmN1B6NDU5NEZTWWM0Zlo4UEFHRWZaQTF3WWRzZ3dIYkhEQVF2d2RuemdxaU1saFlSVHhEekVZaUJBQzRhR2NzTXNxT0htR1V6UmVHU0pIR0pCUUtodnQ3T2FUT2lhamlCZE9ZZDRVVXZvRWdrU1RBdFJDSW9GZGtiMi9pS3RhNHZDSlFtbzhFY2tBR0ZBTmdsTnR3bkRmYXpYQVpjUWlnTVdRSFI5V3JFUWFURS9TZC90bk5KZlhqS290bTFSd2UvL1cvYlB2SG5kelBWaG4zZW1VUUF3Ulh3YVFSZzN5NWVNMENKYW9vRzRRc0krRkNwM0IrTGltalVmVmc2M3M1dnVkTzlOaVdFNDNiVEhmdFBibjN4aU9XS2FOZ1hUd2JpZFJGVmxRR3lMS2VVTTFLancvbENIM1VpR0txZFBYOXVQQm5PWnJLR1RseG1nU0FraVZlOFlreER1Q1lrbFdCUDhyaEtISVkrc3pXNStYbEtuUnhOTnNWUnNlc2FpNGZqQWpjYUJCUU5DTjBYOXQzMWtkdFdkZzl1K3VXZUkvK3h5VXFFRXN0YnFoYzN1em5kdmJZenVEdzhQQ1lKWTR5cDB0Q3oreDY5cjAyTnhaQWFBWmRSTGp6MG9UVmYrZk1uWG5sbTUvcDdsaU16QW1JZ2dVZ0Fzai9WUC9UNnRyM0hPMGIwc3NVNHYvZUJ0am1MbTFHOHlPamxmQWljSVZGRGNJSGllRTVLTUhBUm55STNGc085M1l4UXpxVHpldG1VbGN6SWNDNGFjd0ZDSWc1aElxdS83UzVBcHlSQ0NBUkRWTWpqMEI1cHlXcVh5WUE0NVN0QzQvWFk1M2dGajRkUGJSaGw1QW84bSthWlVaUktURkVSRE5FcE0wYU1KVE92UHhUSkxKaHliM3JsSTR0QXBidC9aK2t2dnYvNkN6OS80N1o3MmlRaHpwM0VMUUdDeWlVd0RsV0ZKR0d3bnczMmNVMGpYNUFIZ3hRT2t1cG5ta3FRV0hxVW5laGcvaUJjQjlBSXBUUGFIcHpKeGR5YnozMGJRWkVRQ3Yvc2UxdmE5M1N2dUdYdTZyWFRRb253MlNIZnNabEdRaTkzdGcvczI5dnp5a3YvWGQ4d2MvSHloVUs0Sk9DNHdySnM0YnFxS3JsdWdLbEEwRURLd0dUVHNZNlFBeXJqZkRSYlRrNVBUc2dZblRGSURDVVRSU1BlR0gzb00zZWtUd3dlM2RPejUvbDlSN1ozVG52ZmFsOU4xT3R5Nk9IeHRrRWtSUVBEKzNvYUlSYmNPUStsM0ZqVEJkMlMvT3JIUDMvM3YzMzUxLzZRdG56OWJPVHppRlJsaGtkLzhjTk4zWjBqaWRyb3JKbFY4WnBJSkt3MU5VU2hXNU5iYjZWdUZLZnNyZ1I4Q2dLeDRlTzVUYzhkZE4yc0wrREttc1FsdUpZYnI1SkhCc3YvOGpkUDFVNkpyTDk5VHUzVWVoU3lzTVhWV25SZE1ReTJ5MXpuOUxhSHdraW4yVWd2cjVucHdtTGxMQ3ZrWVptOE1wcVRKVWdTT0NjaWdNRjF1TzNBTUdIb01Nck1NQmdBVmFOd2hEQnVxWGxLNEsvSEhEQ1JGRkJIRGcvVWgrVHFlWFVvRnNHa2h6K3dZdWpZc0NqcWtrODVLNW9xZ0JpbHUzZzJ6UU5CcW5UTERRWkJSTUpGTWM5eUdRWVFZeFVSSWNkaC9nQTVEaDA5ekJlR3lKY2dHSUROVG8rR0dTQURNb0VCRG9OMXVSWWY0Y2d2ZjdEMXlPNnV6MzdwM2Y1QUFPVThNdm56ZWtBemdMZ2l6VnpVTW5QUjdMNlRQYi82eVdzdlBUdTZlTVdDWTBlTzZhV2NyREJCTUEyblZNU3hqc2g5ajh5TzFTU1J5NDAxalpnZ0RMYmxTcW9VaS9waHVaTVE3MHI5Yzc0TWxCUE44VFV0ald2dVcvRHJiNysyNVN0UE5mN2V6Vld6YW8zKzdOdjJXN29hSm5nWDVlSHhEa2JTbE16T2szY3Zhb1RzTysxcUlIR2tpNGxrNUJQLzkxMC8rODdXWUVDZHUyemVDMCsrK3B0bjlyZk9iZmo0WnpmV3Q5UUFBQVFnVURJblpKMTdNVnlCWkZnNDdxOStzTDNyV0twbFZualduT3JHeGxnb0VvUlBCaEdZbXUvUGRIYU9ITy9LL084dlBiUDJybm4zUGJJS2hUd2M5KzBwd3BKaFdyQnRLR2U0VW5PWjhrVkVpK3pZUVo0ZTRZNURaOVRmbmxteVUvbVRHQVBua0dVRWdsUXAvNzZnT1NINzN1R3VOL1hydkEwUUtZblE4ZWNPcnViNnJZK3RSem8vMWdyWHI4QndJT2kwdW5FZ0FpT0xOMTZUaElDbW5idVB6b3dWQ0FGZ0xFUEJPY3BseURJYXAxSlZVb1FDcUpRaVY5N3RsRml1eUlSQUpFaGFsQUNHOG9Wa21BaGhmMC9uNkUrL3UvMFAvNTk3WlZWQ3FuQ1pwbUJqMmVJd29IenpuMzdaZVdUNGR6KzJ4aDlRb3dHVm1GVFMzWkhSM0J2YnVvN3M2ZitkeDlldXZXMGVzcmxKQ1lnanhHaldxRTBHbVRnMW0yK1M1VlJFRUlTZ0JsL3M2Slo5UC83V3RzUmphK3VYdGVpOUdTYjlOa2paZVBrSlZ5UW1jd0RrRWprdXVRS1YrOXZmaGkvaDRWR0JxN0poMkprZmJmdmtKOVlHYWlObm1RNmhZc2pqQjVlRys3SlAvdWZ1NGNIczcvNytocGJaVXlES0tPaW5JNFZYbzRKQ0lCSHZPajcweEhlMzF6WWw3bjVvWGl5WkFCd1lGaXhuWExNRU5BVStGZkQzZGcxKzdVdi92WHh0NnlPL3R3YTU0dHRnZUVWQW1BWlA4RU1IcFdEdzlPcUpJRWtrWEpSS3pCKzRmS3I2VE8wQXdEa1hGUWtaKzFPU0ZYbm45dDljbHpsZ1JpREZOaHlXSUFzc0RoZ01EbURhWThOVEJzZ0VHUkFZNmVIdEI3ampJQkRFR2Z0bmpEUDErTXc5TGdUOGZ0ZzJqaC9sdlFyM2g0VFB6M3dxZ1VFM1dMbUFzczZJb0tvVVRWQmpFOFZyQ0E1UXlhR2N1Y05sNWZDQnZ0VTN6NVRWQUZLamwyL0pPZGJVSVkrdy82Ti9jczlYL3Z3WGpHc3oydWJEem9BQmt0VENtbFp1V1B6R2EwZS8rOVdYNHhIL3ZPWE55SlF1MTRPelVuMnR3S2ZLNEhXSjZvcnh4L2kyQ3VnV0t1MFpKaUkvbGFDMGJzRVlucjJ1N2ZIcThMOS8rVm1BMVM5dE52cXlPTC8rL0owRGdZU1EvS29jOGR1R1V4b3RXQVVkQk5tdmFqRy9GZzh5enNpdzNmS3BacFJ2OXdaN2VGd2FnaFRVMG51Nm14TCtRR01TdWVLNVVzb1lMQmRCMzVNLzNjVWsrc0kvL0E3Z0lqTUNqUGRhdlVwY2dXU3M4MmpmajcreDVjSEhWaTFZT2dObUFla3N6cDBsd1dBNDBCMVFjY3JVNUJmLytaSHZmVzFULzdHaGhxa0pGTTIzK29mR0FXS2pvNHp6MHhPWEFYQU94MkdWY0xRUXhMbk1PYmR0NjJKMXB1TXpub2x6N3ZjSGRiMUVST2UvK1hyTUFUTVFZNXBDNVp4OGNBZVAxL0pFZ3Z6S2VQVWF3YlZSS3JCQ2dZOE1zOHdvWkFYK0M2bnZwU0dDTEVNSmszQlJMckZDbmxYMk9HZE1Wc2p2SndDdWkrRUJQakpBMWZVMGZRWUY0Z0psQnZ0VVZwZWhYRjdZMWhDSitWRTYyOFQ4MGtnY2hUS1MxV3R1bnZuVVQzZTFMVzZDN3NBVkFJRUFtUzFiUFRzYWtQV0NBZXR5ZFdLdVFDd0FTYzBQakhaMjl1WnpaYnRzV2FiREphNzZaU1dnSmVPQnBxWll1QzRPY0JobGxDendDVXdTcUV4SVNJM1V6NTc2OFQrNzQrdC8vN3d2ZVhla0xtcWxpK3lkVU9WNFBrUUFmUFd4VXFyVTljUXVQcGlKYWxKQTVnek1JY3Fhcmk1THFJcEVaOWJGWjlWS25OdVpvckRkZCtoMzhmQTRoY1QxN3RUMGxpVEFMNUNRa2hpQ29lOTk5ZG1BWDM3L3ArNkJub0Z1WGJNNlpDS0UvWm1SM00rKy9kb0hQcjVoNnF4R3BFY3UxWWVHQVl3amxmVkYvTC8veDdkWVdSMWw2NjFXSndGRVVSeG1JOFBNNzZjekIyQkU0QnljdzNYZFlERHN1bTR1bXc0RVEzVEJ5UExZUjBpUzVFZzAvdnByTHptT3MzVEZlcjE4VGhjZHZLblRrSWpBWGNuUHllS3VkYlU5bnlleldnWXVGSmxSMllWeVpCL3pCN2pQRHk0UkFCSndiR1lZekxiUENOQlBVbjNQV05WWTZSWmpOTzZmY2ZxSVNCSkNvVEhUdGZRd205TENXbG9GOHdORmpOWDlHMDdkMUFSY01la1VDK2NRNWRhWk5UdTNIcmZTQlRYaWh5SEdScWdDU0kzT1dGQVBXNkJ3U1NOcklaQ01EZmVPdnZEa1BzdEZNdTRMaERSLzFCL2d6SFZjMjNDeVEvbVQ3U092YnVua3dKU1c1UHBiWi9tU1ZTamxZTm9UQ01FQUVrZHFwSGJPOUVmZnUvVEgzOTB5LzNQM2MwV0dlNlg3K2syRENHRE1WeGZyZmVWbzZjWDlpMmZWenQwNHQybGFUQW1xQUlUcFpGT2xnYjVjLzhuUnpwY1BkTDU0d0RldnNXSHRiRTJSck5FOHZLbFdIdTlZSkdhVkxWOUpiMnFaRG5MTy9WY2hrSWkvOXZ6ZWN0bjUrT2Z1UVNrTjA3bkdzNEJVN1ptZmJsMjFkdnJVV2MxamJRb3Z2ODBjUlFPS3JQcFZ1Rzl0RGxnQUlaQ05Rd2Q1Uld2UDBWWWlZZ3p4UkZVMmxkcTI5YmxwMCtja2tqVzZmcTZtamkxTUNKOC9FQXFGdHIzeS9KRkR1Kys4KzFFNnAvNEt3SnRYaE1YSk1kV2tMZnZWL0hGTHEyTCt1Szg4U0p5L1JRTnUwd20wMUEwY1BqeGRtTkdFWXBsMnFjU0lHRkJwQkF4RkpWWERKWExqaytYVVFzNDdabUFNb2NoWXZIcGtBQzB6cVdZS1FRQWxnREVZTm5CeHo4dUx3Umhjb1RDRVlnSG1WODVWTllralo0dzl1UmlDa0loMEhPejV5VGRmWFhQYm5EWHJXZ014ZjJXVFQ2MERBSVFvakJhT0hCbytjckQvYTE5NWZzNmlLZmYvem5MNEZHUkw0TkxsRDZiRWtSOXR1M1Bab2wyOUhiL2FQZXVSbFdaZkJ1K3daREFqNFd0SWRqNjFXOTV5K1BmKzRQYkdlYzJBQmNPczdGVWVVQk94UUdKV3czendPOHFsUTl1N1h0L1cyZkg2OGNUR3RvYlZNNnlSZ2pBc2I2cVZ4enNPZ3FUS2hmNXNUR1oxMHhMUXJYUEZURlBzUW5ILzN2NUhQN2dDUXAvUVhmV2tDR3FwazBPbTVkNjhjVFpLNlFtcGI0VkszMSs4aFdZK2xRS2RHTXdTRHV6a3BXSWx6bnoyVzRTUVpEa2FTeHc3ZXVEVkxjL05ucjkwNXV5MjgwZTBsZUdYckNqUlVGUXZGNTkvNXVlcDBhSDczdldCZUtJcW44dnk4L2F3OU83UC9NbVlyOUcxZTNCeVNvRW0yUnlhMi82MVdVTXZWUTI5VUZDcXk4a0ZpcFVaQzJDK3VROUdsaDJZV2pQYTNldDBERTVkTU0vVWRVa2lSV2FTWEtrWGY4dHI2d2ljdytlRGFiS0JYbGJJTVg4QXZqZ2dqZmVteHVUdlRJZ2dVRnNmU1ZhRllFOStTckttbEVybUQ3Nng1ZDJQclZ5eGZvRWl5aWdhTUt6eGh6MzJ4TGExZ05vNHMzYlJ5cG5OTFZVdlBiWDNsUmNPTDFzN1E0bkc0R2NBZ3lNdTA2L1FKZmlrNXVib2pxY1ArT1kweUQ2WlhQSG1ud01UZTRESUpWOWR0SC9IY2ZIYzNrOTk2ZUZFY3pVeWFSZ1dYQUZCRUFSWHdMUmhtTkFOU0x4NlZzUGlEYk5yZkx6enlUZDZPMGFxVmszbml1VHFKcFBlZ2hQYmUzaVBpVDJJR0dmYTFLcDArMUJpTk5kMjZ4eVV6Yk92SGtBa3NIL0hDZHQwbHF5ZmcwenhHcXN2RVVLK3cvdjZoQ05tTFoyR2t2R1dYM01uUnVYYTZ3Y0NHT2xsKzNkSzVUSUxocytOaVFvaEFzR1FQeERhc2UybGZmdDJyRjY3Y2NHaUZjVkNYZ2pCem9oNVNwTGs5d2NEd2JCdG0wY083TnE5YzBzb0ZMbGw0NFBCWUxpUVAwdDlHZU5jNHYxOUo2VjNmK2F6MStLQTQ5UnpUazRwMk93cmQ2emU5NWV0STVuNmpaK3ZyMi8ydi82VmdmQThNOUtpT0VXQVg0czFYbTU3WEJHYzIzUnkrMjVsMUp3eWQ2YWhHK0pDT2ZDM0dFV0JxaUtmWlVPOVRDOHhUWU1Xb3JGcDNZeU43UmdPU0lBMHZwOHFuQy9TamxBRFNyd3hocUk1NlpPYmdLRFNlMlF3Rmc4c1dUY0g2VkVJakpWZGpEM09PTEN1Z0c2aVZJdzBWcTNkdU96azBiN056K3dQeGNMWi9wUXFjNjA2QnI4S3k0WjdFUmxtRElhbDFkVm1PL283aHdySlJjMmllTTZ2OFcyNVJJRUV5V0dmVWhjelRhZi9Qelo5OVBHYll0TWFrRTZQVllxZGUxZkJJSEVJZ2JJT3k2cWUxYlR5MWxrajI5cjNQWDh3dVhxbUV0TGNzc1U0UDMyWXhvcmUzNWF2NWoxdTVBZklKVFVaaEtZTTdqemUvc1R1NVhPcld4Wk1nMzVPTlJQQnIrM2IzYU13dExZMVFYOFRCTkt2RHZWa1lMdlQ1dGJEdkZhR3ZWZkJPZk02QVhEQVQvQkRML0wyZzd6ekNPY1NBc0d6MUpkSWNNYmo4YXBDSWZlYjUzL3BPTmI5RDM5d1NuTjlQbGRrak1teXJDaUtxdmsxemFkcVB1RzZ3ME85UncvdmFUKzh6N0xOdGtXckZpeGNhVmxtdVZ3OForeDdTb0N2UGdkTUFDT21NSElBTUJLV1dpMVo2V1VILzJkaktTR21yRVBkVEdEbTlEWFpvWjFmUDdUMlg4RVVkc1VaMTRuRG1DaGJTanpVK09HTisvNzlXZXRGWSs3Tkc4cWxnbUhvNXdjQnJveEtlUnZHWXc0VC9oUUFCRU53WFF6MnNKRUJGazN5cWlRRnd5S2dRbEhHaTlkZHVBS2NnVXVBUW1PbGNpNWduR0ZTelJrY2dieHhKZlB6R0ZBMHAwNUxUcDlkaTF6K011bDVJakNnS21ubTh5LzllcnNpY3pXZzdkeDhrREh1Q2xlU2VOdVM1dVhyNTRCc3BJc1hEc1lTQUh2UmlxWUR2MjRubHlTL052WVZDQ1NJWEJlQzN0Skp0d1NBK2VxaW1mYkIxRFA3K3ZiMDNMNmd0bmJCWENBdkZJbXJFalFORU1pVklRVEFFQThBTWx3YkhHQUs0Q0tUNFg3dDBjODlIUHZtQzcvNThsUHpQditnRXZhN1JWT09CcGdpQ1FMblRPaW1VK2xPNGVIeFZrRXVBZzN4Vk1mUXdNOTNUUE1yNzd1OWRkRk4wM0ZlcEJSZ2dHaW9EVzNkZEF3Z3FCdzJYY3RmSDJQUTdhYkdlSHZSSk5Oa1o5WVR2OWtRb0FIS3VBWG0rS1htalA5VkJoZ0VtK1V6ZkdpUURmVXl5MFl3Qk01UFI1NkpDS0JnTUNKSjB2NjlPN3BQZGt4dG1hWDUvZnQydlJvSWhzTGh1S0txUWdqTE1tM1RLSldMeFVMT01NckNkU09SK09LbE45WFVOVHEybmNtTUFyaUU2TEFmSE8yNTRtL0t5TFhVdUMwSG1UQVZSMWVkZ3VCcTBkL1FkdWlMaTFKRGxqVlZXYndzdE9nT0VqcmovdjcvL3N6bXhBTjZ3d2FmT1hKTkQvWEZjWVdTQ05tTzAvT0RsMnJ6dmlXMzNxcEVRb1ZzWnJ3Yy9ESldUeGVzR3EvSUxXTXNFQWdDekhGczI3WXFnWWdMTHVTYzZWOW53aGhjRjViRlhCZXlSSm9HU1FabkZiY1U1cnFWb2p1U0ZPYlRFQXBSTkNGQ0NjQUVyR3ZSRzRzQWlZRXoySmVzZENDQ0xDRWMyZjdLNGEzUEhhcHQrdi9aZTg4b3U2N3JUSENmY09QTDc5V3JWeEdWZ0tvQ2lBd0NZQktEcUVSS0ppVlpMY3RCOXRodWF6UmpUN3RiN2pCMnV4MTZldHIyT0hYTDNRNnRIa3ZMbG9Nc3liWk1pUXFVbUJOSUFnUkFaS0JRcUZ6MUtyeDQ4emxuOTQvN3FwQkprQlNoaEcrUmEyRlYzWGZmdVhYdlBmdWN2Yi92Mi9sYmIxOC9PRm9FUWtGaHMrWWVQamovMGpPbnBjS1Bmdnh0YlIwNVdLa0F1UkpOMm1BZzFKOTg4Z2x4NzlaVU1SMVdIQUFnakhCRDExT0dabXFFRXVWRjBna0E4UzEzN1ZESzdNeE5QM0VpK3RiaDIyNGZZcmEyNHgwM25UeTJPSEY4QWpVTmhBVEUvZzJselhzR0lKU2dhMk5IcHc2OU1DNGxJb0t1cy9XYk9qZnZIZ1FVMFBBaDNmYklwNzcyeEpucXJ0LzhnUENpeGNPVGpmRkZjRU13ZUhIWFFMYXZ6Uy9YQVY2UEhjb04zTUFiQlVwbGRtVEx4MmFXLy9MSkJ6KzBjOHM3TmdOUThCMXdnaXVzakNtQnBQV3AzMzlrWUtqNGpnL3VoY3JLdC84cDVYUnB5Y21sVE1Zdll6UzlGVmh0TnhUVVlHbVJlaTRBQWRNQVRjZTQrRWdvSUlLU0VBYmd1S1JlSjA2TlJBSk1Dem0va01lREFHQmF0bWxhTTFQang0NGU0SXh2MjNGcmUwZkh3dnpjMlRQSDY5VVZBR0NjeFhwRXlxaHAyc2xVT3BNdDVBdnRobUdHZ2UvN3IyYUd2NllEZmpNQkdDV3p0YWplVnY1R2FlWGcyT0RQVmxQRFFrdmx5OTk0Mi9FL3QreDdQSGMrKzU2ZjFncDlLcWhRSStjZit2VGprelBUTy81OXdwMld6Q0JLRVl6ZTZpMFBTc1ZURmtrWXMxL2ZCL3RuTm8zdVhMZDFzK2Q3U2dqR2VSUUdTa25FaS81TWlJaUlwbWt4cm9XQnI1UmM0emN6U3JtbWE1cE9nTXhNajcrOC81bUJ3WkZ0TzI0TkF0L3pITVNXbzNuTGtRelFOQzBwUlJSRnI1TDZYaU9DS1FWS25XOUZHUDljS1ZDS3hMK2lCTElGdFdrem1qckNaWlRHdHdxTUJKcjJ0WDk4Wldxcy9MNGYyZDIvdmh2UUE4ZHZOVC9SR0ZnSkFQakh6ejcvNU5kZitmZ3Z2M3Q0MHdDc0xGODVnbVpUbi8vVWs2OGNtKzhiS21JZ0FCVXlLaFI0UWdVYXA4VjBicVF6dDc0RVFrV1ZadXV2OEZaQW9WWklMcDJjcTMvMnFaLzc1ZnZ5ZmQwQTdPbHZ2SFRteU5UdXV6ZDFkZGdpRUNkT3I1dzZPc01vL1BCUDNQSFNjeWVmZi9Ua2pydEdOd3ptaEZBVFU5VlRoMmNGZGNqV1FnQUFJQUJKUkVGVXF2cy9zSDE0ZlJ0SUNZbjAzLzcrbHcvNkpKc3k4dFhtaHFGOE9wK3NsaHNIWHA3Uzc5bmNlODhtZjdieVBXa0VkZ1BmVzBEa0tjdXBleE4vK1BELy9ndDNkVzRaZ2NZaVJPcXFtbldGa0RTYmJ2VEZ6KzdidWJ0L3k4NmVsdjM3dHhFRVFPZXQzdXB2TlREdU9BUVRwOG5rR0EwaXdtZ3JvcTQyTm14TktJaW9FQkFKNTZqckY3UkhSQVFBU3BscFdSclhGeFpteGs0ZmNacU4vc0dSRGNOYmdzQjMzWVpoV0tabGl5anlmRmRFSWFWTTF3MU4xeGxsQ0NCRkZJYUJVb29RZUszUVJoTHA1QXRQZlpQODFhazNHSUFGVC9Db3R1dndmK3p4S1JPVmwzcjJIdG44Yi9XZ2R2T2hYMXZ2WjN5UklQbHM3ajMvSERIQUtLSjZCdWRmZVBINXp4L2Qrc3VNTWhuNWl1bEVUNXJlZkR5YU56YUdhNEpDb2pHOVBWTTVQYlh5dFpmYlBXdlRyYmQ1S3ZTYTlmWlNqMm5aY1l4VVVnSUFwVFRPNmMvTlR0UnJsZlpTdDJVbktDRUlnSWkrN3ptTjJ2THl3dHpzcE9zMCsvcUhIYWNlaHNINjlUZTFkL1pvWEZPSUFDMnl0YTRiWjg4Y201K2Izcjd6MWpBTXJ6MVRUU2tJQVlGSENGM2RnaE9nQkJVQ0pXVEh6VEtSUnZoMnZ5bFhoYTFQbjFzNWZIRDYvZy92QkNDdzByaFVvYThVNkJ5U2Jmc2VQL2puLy9YUmYvMy8vTkNHemV0Z3VYS0ZGVGVqaldZUTFMMXMycUNjQXdGVUdQcFJ0ZW90bHB1ekU4dGowN1VWeG5PM2IraThlVkJVWGVINGhOR0xHekc5T2ZzTEJBQWtHbU1aKzlqdlBmelIrMGFHM3JZTm91YnhRelBQUFhubVp6N3hUZ0FGcmcrTWdtR0Jrb2RlbWo3NTh0ajRlT1huZitYK1pEb0Z5Z1ZDZ09pZzVHTVBIenA2WU9vblBuWkhObU9DcnJrMTk5Ty85OGl0dHcvdGZPZE5vQnNBQ2tCZm1wajd6Rzg5ckg5Z1Q4L2VJVysrZXNNUSt3YmVXaURvcGZUUlAzcmtQY1A1dlIrK0MxWVdYcHRYSlJWa2JJekU5TG5sbnA0Y1VhL1ZkdkM2QVZjWk1OZFlyb3lqcndVbkQ5SnpZeVNaQWswRHVGaVRzdmJ2ODdNWEFVQWdRQWdsakhQT2RjNlk3M3ZsaFpuWm1VblBiUmJidTRaSHQycTYzbXpVejJleEVTbWxsTEk0amFxVVFvVUlHSXVVcmlXV0tTVlQyWHhRcXovMTZGZklYNSthdnJaTHZCU1NtYUM4bmEvODlxRHNWNFJQd09FbmJ2L3owdXhYN3o3K1YxcjZIbmZwZEdMWE94TmI3MVZSRllCU3pZYXdldkpidi8vVTRML0l5dXJtazUvMGtjOTB2M3VsNDI0V3JYcFl2SFZBUUtYMGZBb1psUGNkQzE0ODExZnFyL3VOeW5JNW5TbDBkdlhtOCsyVU1VSklGSWFOUnEyOE1CMkZJYUcwV2E4eXJtbWFIbFBkaEl4RUZESE9DMjJsdnY3aFFsdTc1M2xqcDQrVzU2Y3BZN3B1NnJxdWFUcWhSQ25WYk5RWEYrWTJidDdaUHpoOE9WdjlWUkNHa0U1ai96Q3FzS1V6QmdCR1FlTmdwUkFrd0Z1ZU9MZ0FzZjQ4WTBIVGgvQXFNc0c0U0p3dDdudjhsYzk5K3VsUC9NWVA5ZlJrcm1CaG94Q1NCbWhzMVZjTEFPSUxZMEE0QUZWTzgrQVRaNTU3OHRSeU5yWGhvMi9URFJiVmZXYnJoRkdNYjRCVUtwUXFFaUR4OWVaMVVTcG02enhsb2NIUGZ2Tlk4ZURZVC8vYSs2RGhRTXIrNmwrL01EamFNYkt6SDVacnJYV0RRakFZSkRKLzhsdi85TzczYmg3Y09nQkx5NjFmWWR5OUtxVWFUZUdGdXFtQmtHQm9rTkFCR0RnZUJBSUlBQ0xrMnhhUGovL0puejR6K0svdTB3aFJnYmgrZCswR2Z0Q0F5TkxXeWxnWnZ2cnl4My85ZmhBU3ZBZ29BWTBCZ1ZjejVJbTdzZWtjbk5mUDVYeUxFTGNiQWdnZDBBMTQ3VFVCQW5DQUJKNSttWTJmcFprc1hxM2lqSWlNYzQxcmhOQlcrRVJFeENnTUhLZlJiTlJxMVJYZmM0Q1FRcUhVTnpCc1dnbW5XWmN5UWdUVHRKUlNVUmk4U2ZzZHBWUW1WL0NYSzA5OTR5SGpQVGU5Y1Iwd2s1NXJkWmR6bzUxengweDdiOTduZldOL1ZuQ3F1cjQrRkE3UlRiMTdQUUMwWWdVSzRKYkdtR0JHNHR3am83M0QwSHRuMjFOLzhMVFJHZVJHOWJEeTFvWVVBb1RScU5La2h0Wit4OWJaMCtXdVl1L0czcTd4TThmblp5ZFBIRHVvYWJxbTZiN25JcUpVTXBYS2JObTJKNXR2bjUrYmJEWnFJb280NTF6VExET1JUR2NzTzBrcERYeHZlV21CTVQ2eWNkdlFoazJMOHpQVjJvcnZ1VTZ6b1FBNVpZbEVldVN1N2VsczFtazJYaGY3bWxJSUFsQUNjcjJyeXo4QklFa3I5TXJyR0gwQldvYmpWYmMxc3FzZGd3alZ4YjEzYi9GZC8vQnpZejAvdXZzS2c2UUVuUERTd0huQkJwZWEyczc3ZCs1ODE2YXZmT3FwNTM3bm9lR2ZmeGUxdE1Xak05SU5VU3BDS1V2b1ppNlJhRS9ydGdHSTBnbVVINzEySkVaQXFZeTJWT0FFNDMvN25ON3duS21WZDMxd0d3QURvY0FQa3htclZFaUE3NTNmdFJNQ2xuNzI1ZE9ackQyNHRSZHFGZURzL0s4RXdrcU5tbHczTlpBSWxJS1EwQXhhMVhUYVNuaEJaYm00Y1hEbnlNbFh2blZzNUVON3dzVTYwWG5NeVVLaFZDUmVRNzUxQXpmd0tsZ3JWZ0hFdmRPWXBTOGRPSGYzNWc3UUxHaXNRRDRGd05CMXZXWmdhcFJTY3VWSUZuTTVvOHRVd3Q4UnhDTk1nL0JnWW95V1NrcW44QnBkWCtQb200S3hnM1I4bkx4SzlBVUFYVGVXRnVkWFZoWVpvMG9xS1lWU1NnaUJxQUNRVW1ZbjB0MjlBNFcyRGthcDZ6YnJ0V1ZDcUtZWnJ0czg4T0pMTzI2K3c3UVRudHVrMSs1YWVPRklVVkhLODhXMjhxbXpMenozTGZ1QjdhVmJOcjhwSXc0Q3lqY0tFb1JBM3pTM2JaaCtuR2xGWld3VnpSbXQwS1VWZWhEZDFYQkJRSVVSUzBEb1pPcW40SlovQlptaElOVXZGRkwxYldtcmV3MmdCRGlySHAvSW9aMW95emZydFhYOTY0YzJiUEo5NzdGdi9PUEEwR2loME82NlRpcWRUYVV5UWVBMzY1VlNxYnQvY0RBS1ZCajZRSWlVVW9ySWRScHIxUUpkTjV4bVhTblYxdDdaMGJWdXRaU0E4UW9yQ2dPbldTZXYwd0pNMDBBSTh2SSttc25SVWlkbU1pcHBBekVST0FBRkNNbjFqc0hYa3A1WWpjRjMzYmRKMVQyb09sZVJKTUdsUTcvd0o0RUFkeGtTK252L2ovczd2dnJDRi83dzRjNzF4YnhHYlkwYW5BWkN1VUs1a1pvTFZaQ3d6SjU4YnJnejFaTUZpYUx1cVZDUXVOWVZSM1JDZ0JEQ0tlVU1DUENrMVp5clRQelp0M1lORjdmY081cHBNMU9GSk5UclFBZ29MQldUbEY3YVVSeUVZanJmdGFzWGxBQjFXZXFia3RhdVlvMWpLZFNWK2t6N2U5ODJkUHdmamlpTmtZVFJtS3VKU0JBZ1JzcXcyOU9NMHFqcXFFamVZRXJmd0xVREZSSkdlY29pR210eFFnR0FraWdRK2twenc1MTlBQUQ1M09GOVoxNTgra3k5NXZYMEZ4Nzh3RGI5MVd1eDEvZ0F4cGxlOWRac0F4REFCREJnZVo0Y1BVQ0gxcXRrQWNGOTFhOVJBQ2FBQ1dPSDZOa3hrazdEcTBSZkFKQlNKQklwUW9rVVFrb0pnSXh4UnJsaFdZbEVVamNzQUJRaTh0eG16TUNOcDI0aFJTNVhES1Bnc1c5KzZmNEhmb3d4MW16VTZldnh5bzU1UlhZeVpXajZ5U2VmT1Q1M292RFJPd29qZmY3TU1uOHo2eDRDS0ptQmdBaUNJV2Q2bDA0U2dBSURUK3NhQW1Bb0xpRHNFaG9adWE1RHZ6dlUxUW1aSVN3ZldQYWpLRDlzU3VlNnlYTUpLbTVwVVJTaFVBRGdOQnNBa01uays0ZEdUNTg0M0hYdkE1M2RuWUV2SXlHNHBuTk5kNXpHK05oeE81SEtaQXRDbk9kU0VkS3E2TTlNbit2czZ0VjF3M0dhdnVjQ1dhdjBBNkppVEtPVUt5VmYxd1hHdk9ORUNoMkhuRHhPZEkyYU5sbzJadEtReWFsMEJzQkdDTWxGN1RhL0d4RDdQOWQ5eXVqcmR0WmVBNlBnUlJBdDdycHZjNkV6bGJhMC9HQTdhUEY2RXlHU3F1N056MVJucGxZbXhoWm1qMHpNbXJvOTJsM2F2czdxemtWVlIvb1JUeGpVMUJCQWh0S3ZPVUc1SVVKQlUrYjBYejN6d08wRGV6NTBGMEFUcEFRdkJLR0FFaEJ5Y0tnSWdDQXVHRE1CY01LKzNoeG9ER3IrRy8wakl4QXNiaG5OZmUzVXM3LzU5NlcwbWJPNHhhbFM2QVJ5VmlwenVMUDM3azJhVW1HbFNhN2RKK2dHZmxDQkNna2xSaWtkQldMeCtJd3pYY0ZRQUFCaDFPek5DNFNNUVV2YjFrVmU4T24vL3EzS29yTnBWKytkNzlqWTFaM1NHWDJ6VEtnNDlOcmdyeEFpd2JEd05hcXp1Q3BMdnBibE93TG9BQllHRFhMdUdEMTFuQTZzVjkyakNpcFg1M3pFUmVJTXFBaE92RUJuWjBncWRRWHp5RXNncGRRTncwb2thUnhjU1NzMEtpbUZpS0tvYmllU0JLaFM2a0xoRUNvVkJON3RiM3YzSTEvNyt5OTk4ZE4zMy90Z3Z0RHVPUFV3Q0NDbXBieWFpQVFCUURmTlJDSzFNam45NG92UFZZclk4L1AzVzZta1A3c01qTDZaWmd4SUFDSTlGMEZrQS9ld0ZwSW9Td3BDZWtRejlNNGhBRGgvY2tSZ0tiSjRlRGlhTGQzKzJ3QVFMcDJxMHpScUtTb2ExMG1WQklDaFNQV1VKdG5oaGRObittL1pzYnl3UUFpdDF5c2pvMXVsbEk5OTgwdjVmREdaeWxES1BNK3AxeXJOWmwzWHRHMDdiK05jay9MU0o5Z3d6RnBsZVhwcWZHajl4bUo3bDZacllSaEdZYUNVUWtUTFNrZ3BDR1ZLcVREdzR4ak1HQ2VFU0JIQkJYSGF0QkpLeWlEdzErNTYvQlNaSnBvR0tJVEFBNmRCRitaQTR6U1J4bUlSU3gzS3lDQ0VCUHp2cWhnTWdBaml6ZDFQUWtBb3FEVDd0L2VDa09BRzRPTHErMHlvclhkdDZlN2EycjhiMEYrb0hOcy9lZnpJMVBTTFowUjNvZWZ1VFZZeFZUazkzNWhhanNvMTd2Z0pTblFLQ1ZPckxEVnY2azd2K2RBZWNKY2dFQzB5Vjd6dmxNZ05CZ3BCWGp6c2VPNTRBeFpqQUtBUU9JVnNZWFo4OXRHSG4vYTljS1BGYnIxMTNjYmQvUXdRRkhyTjRPeXA1WmVmUFhQMHBiTkQvL3llVkVmT202c1NmcjJNV20vZ2V4RlNjVnZYY29uSlI0ODE5NS9wTVBVTm5hbHN3U0tFdUU1UVBqbDEvTVJDLzdaZTMyZC85SnYvTUREYStiRlB2Qk9vRGhpQUc3eSs5dDZYb01WdlFnekkyQkhhcUpKTlc2OXl0cldndTlZUUhRa1FBRy9WK3Y3eTQ2RVZlcVZMcGs2d21YUEVjU0NmaDlFUjFlb2RkL254QU1BQUxBQUNTM05rN0RodE5pQjF3ZDRYRVEzREZFSklHVjJTZlNTRUtLVlVHS3paTjZ6NldLRmxKdzNEUEgzeXlPenN4SmF0ZXpqblFvaTFUNFZod0JoNzEvMy83TVhuSDMza3ExOFlHQm9aR3Q2Y3llU1ZVaUlLb3loU1NzVXByelZORFFJd3hnelQwcmhXWDFnOCtNenowKzZDK2JhaG9UdTJ5b1lmbG1OV0ppRi9jM3JtamQwWEFKRE1CdG5jY2VSM2hrVC9BcXRHMUMvQmVzK2QxN0tsN0h0K0ZrR2dhQm1nVUtZanFKUC85Rzk2ZHY5c3Nuc25BRlNmL2YrZThFb3JvejlwZWJQWGI5NUI1R25iS2E4c2ZmcUpQWHZ1S28wTU5XcTFNQWdvSmFsMHJsNWJtWjRjZDl5R0VnSVJkTVBJdDdWM2R2VVJBTTl6THhOVEl3RmlXdmIwOUxuWjZYT0lLcFhLNUF2dHVYelJNQ3pPdFZwdCtkbW52cEZLWi9mZWVxOXVHQ0tLR0dPZTV6bE8zVEROdFllSk1UWTdQWkZ2SzdVVlMvVjZWVW14UnBoZjB4d3p4dUtnamdoaENGRklEQk5MbmJodVVCbEpnTVpyU3BxLzF4RC9jV0p1MStYSmc3WHFsNldCWVFPb2hlTXorNTg1YzNTeUppMDl6NkF6YlhUMlpOdEttVklwYWFWTk1EVVFDb0FBNHZWbzhhMFFkQTdKMURlK3RQK1ZGOFkzN2xqMzluY09tNWtNZ0FBdmFDVzZOUXE2RGNDZS9jTHpEMy85Mk9BdnZpZS9ydUROeGpINEJtN2dVcUJDTFdtaW9aMzQxR09sV3YzdUg5bytmSE1mNk5vcVM1Z0FLR2UrU2pYdE0zLzY1T0J3NmQzLzdFN3dsc0NOZ0w3UnJvSnIwZEVFNWNIc0RKbVpvZ3R6NU9ZOXNtdTlnaG9CZXQ3V0FnQWd0Z3hpQUFvaWw5YnE0RFpKb3dHcEZLd2JWQkJkekdlTzV5c0RRUWZwa3BscE9qdEZuQVl4YlVTRVpCSzMzeW9oSkxCbW4wVUFLQUFIWUFnVUlDQkxLMlIybWl6UEU4YkJ0QzdjK0JKS1lHVmxzYTNZcVJ1bTAzeTFkaWt4YjlrMEU2WnB6YzFOSFQreVB3ajhrWTNiU2gwOVFrU1g2RmFVVXJwdUpKUHAyWm1KVXljUEI1NlhTS1Z6K2JaTXRwQktaUXpUb3BRaVFzdjdneENDRURTYmxibjU4dHowb3FqQ1lMNTQ1MVlya3dyS3RaYW9OQjd1bXduQUJOR3h1emVjK04yZDVmbDVpOXNrbllDY1g1bEtiSDk3WXZzN1ZYUytHenpsaGd5ZHlXZit1T2VXajJsMk93Qk9mdjMvZmpaM1g5aDVpeDRzWDlmb0laVmV5bGJIcHBlL3NHOG8zN2R1ODJZN2w1VktSbEZJS2RVMFBjNUpBQUFoTkU0K0NDbnBxcFNNRWtvcFFVSUlvWXhTU3FsdG00QXdQek05TnplOVVsMGtBSnpyU3NxbHhmbitnV0dsNU96Y1ZPKzZJY093NnRYbGhZV1ovb0hoRFNOYmZkK05oMk9ZNXV6MHVWUEhEL2YwRFcwWTJhcHJlaEQ2VWdnQVlJeHhyaEZLM1dZakVoSGpIRnBNZDRnaThGeGlHTGhoaytyb1EzQ3VPem5yMjQ2NGRzc282QXc0QTBwQUlVUVNRZ0VLcnl4QXdqaXpRaUJ0QVRGWHhxY3JjN1doclQyUVRBQUFnSUl3QWlGQklsQUNCQ0FRMTROcFFnbWswMy96UDU1WVhxaisxTDk0WnlxVGdxQUJmblRSVlNBQUt0QVpKSXRISHp2d1YzKzViL2pmUEpBcHBmM0YrZzIxMGcxY0NrU3FjNXF4WC9tRHIrN01zZ2MvY1Q4QWdXWWRvZ3YybFFRaFd6aTg3OFRUM3pyNWYvN0tBOUNvWG9HVWNLMWZCd0FBQm9BSlVSTm1wMkNwYkRicVNHbWtGTm02WGVYN1ZLczBTMk94RUFJQytxVGVoSHFWVkt2VWFZTHZFNldBRVBROXNtMm42aHFXVUcwcEtvRUQ2QWdBWHAzTXpaTHlISFVheERCUk4xck9CMUxBK2hIVjBhOEFDU2lBdU10cVNMd1FtazFTcjVIS0NtblVnQkN3N0NzVWZYWERuSmthbjV3NHMyRmtTKys2d1NnS1BkZFZTcTZsdzJPeEVPZmN0R3dBV0ppZk9YdjZXTDFXNmVycDM3UjVKMlc4MmFoZE1XYkhJZG0yazVxbVYxWVc1K1ltcTVXbEtBeUJFRW9JNDFvMlgweGJDWCs1RmdTaEwxd0hROTlHM3BmUGJobXkyM0pScGRreWpiOEFiNm9HSEdlaHZkUm9aWDRmd0pBTldhbDh3bld0YS9BS3h4S3FaQ1NEaG1hM2d6TmRqMUJrQmpSeC9RckFMVEFhbHF1NW9XN3o0KythZk96ZzNJSEhjenlkelJZUzZZeVZTb0p0RWNvSXBZUVFCUUlRTktackZCR1JvRkpDUm1FUVJDRklLVVhrK3lHS0tBajlJUEFGU01yNDIrNit2MXBkV1M3UFNTa0cxbytXU2oxQVNIYml6T0w4ak84NUFHUjAwNDZPenQ0ZzhOZUc0M3R1MzhCd0twVTlmUEQ1MmVueDlsSlBWMCtmeG5VRWpLS3dWbDJablo0QXhHMjdidE00ajZJb2Z0bzRoMHdXZ3dBTzdhZStqLzJiRkRUaG9nWGo5eFppaFpKdWdnZ2I1WHFsNGdrcERjN1NlVHRWVEFIVElBcWdFVnkwSVk0cHhCb0RTc0VOUVhqNTNueCtvQWhOSDZxTjFaZHlOZURGaWVUcjhLUXBCZG44MTc2d2IybXU4bi85K2djaDhtQjVhYlVCeVFYZlRnQUloVWhCZGVHbWUzYjhhQ1QvOXI5K2RmT3Z2bC9QMk1MeHI2c3I1dzE4bHdNQkFJeGkrc2ovZkdLTERROSs0djNnMTFyT1ZwY2Fxb2ZIWDU3ZXZxY1BRRUlrMzBoekJWeTFSMllRTk1qMEdTalBjMDZ6ZmxDaHpMWHRaQkNvc1ROVUFLWVNCQ1FFQXFJUWZKYzJIR2pXVVVRbUVCNEVqcTZUdUNFNnBhRHJlT1lrU1dkSXNoMUJFRkFZT1dSbGdTNHRrc295aVNLdWFTS1ZpZTMvQUFBWUEwUTRkWnpPelpGa0FoaUZTSkFnQkJHaTc1RXdCSVZFNDJnbnpsc1l4VzEzQVVCS1FRZ0pBNzkvY0VUWGpTT0g5cDA5ZmF4L2NLUzkxS1hwU1VUVnloQURLRlJPb3o0MWVYWnhZY2IzdlVKYmFmdXUyNU9wZEtOZWxVSmNUV2dVaHlyWGJRS0FhVmtqRzdjUklKN25OdXJWWnJPbUcyWnpjZW1GUXk5bGJoOWhwczZTUmF1VUs1UUtsRkZSOTRLNVpVSUp2U3pGOWVaWTBJUnc1VHJwa1lwTzI1VEdHSS84Wlo0cmFjVjFpSmNYSjF0N2N3Q1FpNmZya3NsRWh4YXN2SmtCdktGQkEyRTBLTmUwaE5IM29idWMrZVg2Mk16U1hKa3R6K29MakN1Q0FqaWh1c1lKQVNVeEZBSUJKSkdVVXlCRUVDVlFFVTVCSXhGQjFDaHZNNGl0NnowZGxSZFBobC82OHA3NzMxdmFYRVFFS1NId1BRVFlNTHh4WkhTajQvZ0VpRUwwUGVkQzYwcENhTDFXU1dmemQ3L2ovZE9UWjJhbXorMS80VWxOMHdFZzhIMEV6R1FMNjRkdk1nd3ppc0lMcjBNcDBIVmdGTTRjSjZqb3dJZ0VjN1cza2xxVkhLeXREZkVDUWdTdS9nY1gvL1k3aUlRK08xczcvT0xobFhKVEVhQ1VBQkJLQ1JEZ2xLWnoxcFlkUFowRFhSQzQwSXk5cndua0VnQWNYZGQzQWtLSW1UU0Jhd0FBR21zVmJxKy9yQUlSVXZiczJibmpoMlorL2xmZUE1RUg5VmZ0eHh4UEliWEZMZS9hdlR4WGVleFRqMjc5dHc4QUpack9SYVdKUXQzd3o3b0JRTlFLeWRuOTQ2bUorUS85OXZzaGJJQjcxZmFYaUVnSnVVckY5VlcrQWdBQU9JQ0pBS1MrUXVabWFIa1dLVXVsMHZyWk13ZFBISHQ1Kzg3Yk05azJWRzRRd05HWG1XRUFFQkFSS0FWU0llY3NtOHNvVlZsZW1tZ3ZkY2ZNSm9qbktBMENoRVA3V1ZzSGNnYU9DMjZEdUE0UUNybDhNZ3lhU2tuRTh3eEVST0FjS0lWR2xWUlhXaHduQWtBWk1CWnZlVnZSR2hFQVVDbE1KbE5oRkxwTzB6RE0rSHNiOVdwM1QzK3gxSG44eU11blR4dzZPM1lzWWFmc1pKcHpqcWdDUHdoOGx4QkNHV3N2ZGZlc1cyOG5FcTdUcUt3c1VVb0pwVW9weTA1SUtjTUxlRGxyaUtmdUtJckNNQ1NFVUVKVDZXenZRRDhKNFBHWFgybC9ZSGY3WFZ0RnpRVUZ5ZzlsMVdsWkxWN2xscjBaRWhZZ0FKZCsweXlnMlpzS1RRR1JDanlyWTRBUVRVWHVaV2NtZ0RLKzJWRnpycW5ua2VyZnFibWZNS1k4RWJoVnd6VHQzVGNoQVJsR1liMFpOandNb3lBVXZrSkNBUlVRVGdsbmhGRmtqR3JjMURuVE5hSnp5aGhsakxCWTF3bUUwZXk2cnBtSG5uLzBhMzlmeUJTNXB1TnF6d2tSUmxZKzNUbTBIb1ZjSyt0ZU9CaEttZWM2aExnOXZVTmRQZjM3bnZsVzM4Q3dhVnFJbUVpbUxUc1JPNHRleVpnYUdJZGtDc1pQaytvS0x4YlJ0RkhYVVdPRVVtQVVLR2t0K1NoYmZTdmpyQkhEbHY2SFlLczRLZ2tJQVBVVzNCQnNkWGJDNkVveEVRRVMrbEs1OGRMVFkxYkt1dVhPOVIxZGFUdHB4cmJvbnVNdmxwc25UaXc5OUlWRGljeUpEL3pvSHJ1UWdWb0RNcG1UaHlhZWYveGtHRW5MMGxHcE1NS0V6VHQ3ODl0MzlXUTZpb0FCVk53cmw1RGZVbWo2UzArZnVlVnQ2M1VyQWN0THI5MERsUkJRQ083eTNUOTExOWh2ZlhuL3IzK2h2WmlBN3JhKys3ZEhkUStGdXJFUC9rRUhBYVJzNmRFakgzN3ZKdERzS3o5VXE1YUxwZTcwMkluNVcrN2REQ2EwYktURTFjTngvQ25hcXNXQ1R4Wm42UHdjWFM0akFtOHZaUnUxeGVlZWVzNXhHbnR2dmJldHZkTnhtZ1JBMDREemxzckJNS2x1NktaaENpa214bys4Y3ZERm5wNkIzcjcxbnV1c05lbFRDTG9PUXNEY0ZFRUFRb0J6bGMyWjZVejY1ZjNQTnhxMVhUZmZFZHNtcjBFcFpJeGxza1lRK0xHdDQ0VjU1clYvS0tVMFRjdmxjOU5UNDBjT3ZyQjUyNTVZUGdvQWxOSjZ2YXBwMm81ZHQvbUJ2MVNlYTlRclVSUkZZY0ExemJUTXp1NWVwMUhOcHR0NjEzZk56MVNxbFNVUzF4WVJFVEdaeml4T1RacVduZXZzYk5TcXNVa2lYS21XaklpRTAyUW11M1J1NXZsdmZaM2ZPOXh6eTJaL2ZISDEzcEcxUGVmVjhDYTdJV0drWnhOTHo3YTVEYUlQU2d3STQxcm5JTUJsOHpoS3FpVlU1RWRlMWN5QkNKMUlTNVBZdGZFN0JRS0VFQlVLRlRSaStaQmhXR1lpU1JocFpXL2kyTlZLY3dBcUJLVVFFUlJpaUlBUlFyaTZFQU5RaWhwYTd3ZHVyNC9QTGsyVzBZdElTNDBLaXZQbS9pTnRoWTVFVzhGem0xZE11YThsTjZRVVFvcGtLcFBPWk1NZ2tGSTA2bFc0ZWlQRmVJekpGRFRycExKQ0tBSEdnWE1rQkFnRlNsb0hNSXFJUUZuc0hRNkVFbzJEcnFHbWdXNmdicEtFQllhbHdBSkFnSUNBK0RhRjRWZ216MkY1am1TeXlPbkZPMjhBSUFCZWxOTDRBeC9jRHJZTktnUS9XbXRlWmhuYXVnM0ZkYVByaE85LzVZc3YvLzZ2L2RPUGZmek9vWkdoaC83MnNlY2VQWDM3ZXpadHZxa2psektVVk5WNk1EVmRueG92SDNoaFBKMjE3M3R3VzlkZ056U3FFTW5ydDQvVVdGQ3RJNk03YjE0SGJ1MWFPNUFUQW40RWV2Q2huN3BsN213NWs4bDg4M1BQamtkaThFTjdnNFhhbS9QZXZJSHZZYUJDUXFuWlY1dzljSzZYNDhqYmg2RlJnOWdDWW0xMkpRQU1nQU5RQkhEdmZPZkk1ejd6L05USm1jN09ndStFdWdaNkVvRWpCQmNRbW1Lc3RWa1Q0TlRKNGlKZExKTkdGUUJVdmkxbFdjYlJ3eThlM1A4c0VITEw3ZS9JRjlwRkZDWHM1Q1VoS0F5RGFtV3BQRDg3UHpjcFJiUjF4eTE5L2NPTzJ3QkVoV2haZGhTRlFnaEFZSXhZTmdDQXB1dDJJdWw3M21PUFBEUS9QMzNYMjM4b2pua1hucGh6N25udVlubTJxMmRBMDNUUGJVb3BvUlY2VzBkcW1tN1pDUkZGTHozL3hLbFRyK3pZZVh0YmU2ZnJOdGJlRjBxcGxMSldxMUJLaTZXdWpxN2V0WmtIQVZOcDYvRkhqcjMwekpPMzNueDMxL0I2WUVrcEJjWk5sRTFyYVh6eXBaZWVOQ3hydEh0VHg0WWhMWkdTU3NZQXdIaEtKWlJwbkRPbStmWGE4Y2VmR2xzNGsvckF0dExlbThLNUZiZzY3ZXR5dkVrakRxSUk3U2cvazFhV29BeDlqMlhiZWFrWDRWSWJRaVVGMVd4bXBKb0xSMU5kTzBYUWtLejQzVEMxRUZqZEpDRmlKREFTRjVzUG56L3Fhak5oNjAvTktFWWlLdGVTN1lYMHVvN3pERG9FdlpDZXBIVHNwUU8zZnZDQk1QUkZGTVVwMXN0UHBaUk1KTktBV0o2ZlRtZXlRZUMxYVBTdmRUc1JRVGRRTjFyL1Znb1VBc2pWeERNQzRxcEpCY1lFSUxKS05DWUFTQWt4RE5STm1rcGhOb2R0YlVqU0NCNTVzMjJYWXBtOERVZGZvRHFIUWcrQ3M1b0pKd0EyZ2lUZ0FSQmxXQnlrZ3BYYXBjYnhTa0lvQVQxdWFBLysrSjBENjlzKzl6K2UyckYzYnZMMDRyLytUdy9tMndzZ0hZZ0VBTWwyWi90djZnSFlYRm1zZk9QTFJ6LzUvejU4NS8xYjd2L2hQZENvWHcvbWN3eEszS28zdkw3TlNPbXZyMGt6cFZCek0yMkpUTmN3Z1BIalhmWWYvZUdqOWFrVk8yMnA3NFpHcWpkdy9TR1ZsalJSNTB1dm5KNzc2cjVkcGMyZ0VwQmNCSThCQWFDdHhUMG9SSjgwbThSeGlGdVRrdGdiaG5lZk9oek1UVUlVVVVvaG1jWmlCeGJ5cUZrWDJLNGhRa2dhVlZLcjBxVmwwcWlRTUVTdXFWUkd5MlRhbHBmS2ozNzlpNDFHN1k2Nzd6Tk02OHlwSTJPbmoxTEtkTU0wRFpOekRRaEVVUlQ0WGhRRlVrckRNQWZYYitycjM4QTRielpxaUdnWVZubGhabnpzK09pbUhYWWlGUXM0Q1ZBZzBHelV6NXphZC9yRVljdEt2UHYrRDl1WGRhcVBZUmptWEtPKy80VW5DbTBkSFowOWlVU2FFRUJBUUVJb1VRcWI5ZXJac1dPVDU4NFFRdTk5NS92YjJydnExWlhMWDdoNEl4NzQ3cG82U0VxWnliZWRPM0M4RHU3QUwvN1FLdy92bi9qV21iWnMwVTVsR0dPQVdGMHNUMVNtU2o5eEY5UDUwYThmbUhqMlhFWlBwakk1SzVIVURRTVlaNHdwS1dVVXVvMUdkV1ZweVZzSk84enU5Ny9MTHVhQzJkY1hmUUdBZkc1czlvMDlJUVJWYU9TWk43WDMwTzhXNlUwaEk3SzJaSzdmbnJydGg1V29YNmEvUnFwbHF1TlBMcnp5aFpFSFBsbCs3RGVmTm5ZNi9mY2Ivc0ozdXZ6NDdjYUZudC94a28xUmxyYk9mZWFScm1aeXk3MzNFSjBIbmllaVNLRTZmM0RybzVoTXBzNmNQall6ZmZiT2U5N251YzIzd2lTYnRQNi9LS3VqRkFoQmhBQUNZQ2V3MUlWOUE0cm9BTTdycmlnQnJMSTVrcUFpT1BZeW5aMG1kOTBqalFSQVRENWpBRFpNbktDWkRHWTdFSnJYY1A2WU5wd3ZIZGwzOUhmK3cwTi85QmYvVzdhakhaWVdnTEcxOVZQcnlJUUJlbmJ5M05SLy9xVXZ2dnY5V3ovdzBkdWdXbitkbzMraklFUkpSVGx0MGJOZkw5Wldmcm5VNS8vN283UGtHMER4QUFBZ0FFbEVRVlQ5M2V0dUhZb3FWL0VVdTRIdll5QlNRMWNvWi8vaHVlU2l6SGQwRkFjM0prM2FQUmlrRTBSSjhFTUlmZkE4MG5SSTRLSHYwU2lLSTR4S0pIVkVqS0tJVXFJUW9oQ1VKSFlDa3hsSVdNZ29DQW1lRDc1TFhJZUVFWEFPbWlZNXA0bGtHcEVjT2Z6Q3NWZGU2dXJwMjNQTFBaYVZGQ0pDd0VhOVdxMHNlMjR6REFJaEJTR0VNYzAwalVRcWs4MjFwWkpwcVpUdk9WS0tlTU5BS0dXTWpaMDZ1cnc0bjhya1Rjc0VoREFNR3ZWcW8xbm5sRzNadnJkdmNLaFJiL2l1U3k5TEZNV2tLc3V5NStlbXBpYkdDQVhHTk02NWJoaUlKUEE5MTZtSFFVQTVXOWUzZm1Cd281Q1IwMnhjUzZOM0pWVTZsd3RyemNjZi9vZk1qKzF0M3prUzFKM3FxU2wvb3F3YVBnUUtHZENDWGRnOWFxYVRLQ1F4dGZxNU9XZWlMSmNiMUpOY0VSVXBTaWlDVWd5RVFYZ3BsUjVlbCtvdGlib3JtdjRia0RDUXo0M052ZDdQdEQ2SnNwSHNYbmZtZis0NXR3K1N1d1UyWlgwNWVjdDdyZUhiVkZpN2ZOWWdsQkdXT1BuUXYremEvR0J6L3VpVCtuYlJjYk1XckFCY21KZjhQcHhyVUNrdGFVcEdwdi9oR1h2SzYrNVlsMmxydDdOcHpUU0JrcmlLdkRiM1Vrb05RMy82OGE5Mzl2WjNkUGJHMVpUck50UTQ0eDZHNEhza25WVkRJOWpXaFNBQjNHdXJEYTlWbFN3QUNrdHo1T3dKdXJoSTF2WGpscDBDQWdJS1FBZXdZZndZUGY0S3RST3c5elpoSlFDOGE3dnpCQ0hUOWhlZi9LcGhhai95c2J1aFVyMnlTaGdSOG9YNW1ZVS8rTldIZnVIZnZYUGRjQWxxM25WNnNtTFo1UnV1M1NLQWpwQkkvY1h2UHRuYzFkV3h0Vi9VM0JzQitBY1FMSitZL2Z6VG5RdmExbmZmSzFCNlR0MXhoQkxVTUFFUm9vaW9WVFlKNThqNGVRUHlTNWIwaEJEZE1IMVArSjVRMkVvL3JSV3FLQVZLbVcwbkNXV1RFNmVQSEhwQlNibDkxKzE5QThPdTA0aDVKNFFRempWTjF5bWhNV0VFQUdJS2lWSXlDZ01wNVNVNVpFUmtqRmwyY3FrOHR6QS83ZnV1VW9wemJwcDJSOWU2dm9IdU13ZU9JNlZkSThOT3ZSYUY0UlZqSnlLYWxtMFk1c0xjZEJCNENLUldYVlpTTXM0dHl5NFVTcGxzUWFIMFhPZFYyckd2blFvQU5GMVBwak1yNTZiM1BmNTE4NEd0bmJkdDhhZVhpTVo1MGlJNlUxTEdodk9FTTlVTXBCZkVkZ3pNTXFpbEk2SVVRb1lSUmtJSlNUbWpwcUVaT3FGRU9ZSDBndGVzOVY0TmI3Z0dqSkdXTWJ6RjN2SitaZ3lGNkFNQ01NNlNCWUFyVDZZb0k4S2d0TzBqYzgvK0Y5SytIUXM5VEFUUUtsTlN4VXdxL2F2NGhYOXZnMUFxR2o2empNRWZmOGZLOGZHelJ5Ym8zSUk1dzVra09tRWEweEFKWlpReExxSUlsZEF0bzc2NGxMQlNBK3RIbkdhRFhWc3BFUkU1MXlpallSQzg0WmdkdjcyR0FZYUJ2a2NPdjBTS0hkamJqOWtDQWtHSUNFUVhNNnZoZ250TkFUUUVEVURBeWhLZFBrZVdGeWpYU1NLcExBdUJFL0FCVWdBU1RyeEVweVpKb1lETkpwdzZScmZ0Vm5CNWJmaUtrQUJSODRkL2N1L3YvZnBYSm81UDlZMjBRODI3OUxtUE9Sc3J5eDNkdVYvNnRmc0lBdmpYTVl1cmNIVjJlbFZjM29haFpYNkdZSmxubnE0djFQMTE2MHZLZmJWTzBqZndmUXRLaFJleWVqQ3diWmZydTc3bkVrSk1rOGJhQ3FCZ21MaHFUSENSWGNRbGFSZENtWkp5Ym1ZeVZ5aTJsN0pLS2FXa1VuSGZWVVlvcFpUNXZqcytmbkp5L0pUck92MERJNk9iZGhCQ3FwV2x1T2xlZkI0aG9pZ0t6MWZyV3Q5MW5rOTZ5Vk1hRzA0MUc3Vk1OdC9XM3JubXJKQk1XeXFBWi8vcEcrZklra0cxeXN6cytwMDdFNFUycDlFUVVYakplUWdobnRzMFRMTThON1U0TWJWajErMERXL2ZxTmtPRVNJRG51bzVUdnlLbjlaS1JNSzVwdXE0eHphMVVqcno0K1BqeXVkeVA3Qzd1R1BIbktvUnhnaURxWHV2S0NJbEZUUUN3ZHUzU0RhVWJCMlBDQ0NGVUEwTUhSUFNGY0NOb2VRSzk4VUxkRzZ3QkUxU2htZXdlKy90Mk41REpBbUlEVUJHbUVjMjQrbWNvU2llNzdwYkdnZFM1OGpsMVV6OTNGeWdxcEZxa1oybFlrenloUlhWOEV4ZnpYUXZDcUFyQ2NEN005blhsUi9wQ3gvTlg2cUxwZVY3b0JLRUtKVXJab2x4ckJrMFlxZDA3cHg5NnVYdXNPOWZYVzExZW90ZVEyV0NNTzgyR3BtdlpiRnVqVVVOVWw2eEo0MGZxdGRzU1kyeEExZktYV1ZvZ0syV1NLMkt4aElVYzZna0VDb0RrL0o1OVRXc3IwRzJTU3BXV0Y2Q3lpTHB1WlBNMENCeEU1alFCQ0VJU2xoZm8yUlBRcUxOOGdZa29NaTFvTm9sb0FyZmdVcExJRlVFSjFMMUVJZlhSbjdsRlJmSWk5K1pMajZTdzBpejE1Y0VYNEVYQXJvTUNHTUhnb0Y3TGJFc3AwRGlrRXVCNjRLM3FTU2lBanFDVG9BR0xVK25ISG5yZTNKNjI4dGxnb1hKaisvdURDS1YwMDRvU3ZEd3ozZCt4M1hXYWpMRTFtZXlGZUkyM0dVSFROTmQxcGlmSGRNTk1wM0pXSXFIcEJnQkVZZUQ3YnEyNjRqcE5JRkRxN0IwYzJtUmFWck5SaXpQSmw4ZlVDNzRVQWNCT0pLV1UvaFVzQXM5L0pBeURJUEFBd2JCc3kwNU1IeGw3WmY5ejRjYmN4bzk4TUd5NjAxOTVmdUd4cjNhMzlmU01qR1lLK1VoRW9lK3ZPZjRpcWtRNkUxUWE1Y1U1ZXUvZ2kyT0h6Vk1IMGp5WlRtY1RxYlNSc00xa2dtazZVRUlZaWVVY0Y5TitBUlRLTVBRcTlaWEt5dExpd25KWWxkM0ozaDk1ajVYUEJMTXJaSlZ1Y3Y3S1d1SDhrcXRZUFc4Y25DODJqSC96ZVRYeWQyZGZkd3FhSUlaNmhvWkxOeC80alU0eUdqSVRRWUtTS3ZJejkvNmsxcmJ1UWcrc0ZsQlJiZ0kxQUlpWWV2S0ZaLy82ekoxL2JQbExTTUJMdG5jYys4dWhNNTg1dmVzL0xwZHVOZHg1K0g2TXdTM0U5NWhSb25IS1dTd1ZXa3NjdGFyR0VyVk1vcnoveE1wbm43bmo3dnV5QTcyTnlvcTh3S0x5U21kRnkwcVV5N1BQUHZXMXJkdHZ2V256THRkdHJwSDdZM05VenJWWVF2NnF4bXpVc20wUlJXdkcxSVNBVXVEN29CU3hMRXlrTUpVRXkwS3V0U1R6VWtBVWd1T1JaaE9jQnZGOU5IUldLR1o4cjNub3dITjlnNk81Zk1GdCtxa01BWVlyODJDblVyWUZTMHNMbG1VSEFiVXN2SG1QSkhCWjA3Rkx0dGNYSnNDVmdsd0NBdEd5STNpMXYvYTNqOHQ5QlFIVjZpNDIvbTJDaEhWUFR5ZEFTNERqdExUSUYxNEZKYUJ6TUcwQWNmQ1pNMzE5bVZ4UENRQkFPT2lKUnBNdExLakFMNDBmT0hsczZjVU52L0NnY2dJVTN5NHkrZzE4VHdHUnArekdiTG42MmVmdWZzLzdXZEpxMUtxWEhMSzY4eVJjMDVXU0lncXZzQTlESkpSYVZxSmVyOHpOVHRacmxURDBLV1V4RTFMVDlHUXkzVmJzYkN0MlVNWmNwM201ZWZKbDUwTUFzQklKblJ1VFI0L2F1VXhiYjArOVVrRlVsMzJ3NVlwc1dMWnBtdFdaK2JIRGgrYlVjdVlkV3pwMmJRekxWYUJVSzZScVoyZFc5aDFuczI1Qnl4YmJPek1kN1dZcVJTaEZBTTVaV0hPZWYvZ2hjWHZQNElmdTlxdk4rdlM4TjdrWUxkYUpFMmtSMFNRRmdScGxCdU1BRkZ1U21qZ1FFeURLajhLSXlvaXJ5Q0tzTzVmWnVDN1ZXUlExVnpodnBGajdGb0g4M2RuNTEvMFpWTTFrWjkvSlA3NTU0Z0NrOWtiWUFDQ2dsUEtiNlhzL3FwY0dMd3ZBU0pqdFZjNUd6Y1ZNM3gwQU1QL3dMejZYdXIwNSttRWdrRC80SjN2OVEyM3I3ejE0NXNVajIzNWRseDdCSDRSNUIxOHQ2YXFVMlZWWVBESzIvUG5uUm5vMkRtemZ4aXd6REFJaElsU3htTGdWakNtbGNYcUVVcHBNSlNiSHg1OTQ5S0ZTUjgrdXZYZG0wdmxJaExHRnFkT29IenU2ZjhQbzFrd20xNmpYei9PaFcrOHhhSnBobUpaU2NtTDhGT2Rhc2IzclF0K1BlSWtnSlVRaEtDUUFpbk1PQ1BHeUlLNHRjVTRUS2NNeURTbmx6UFM1bzYrODJMTnVjR1RqOXBpQ0dJWE1NTzFrU2xzcXp4NTQ4YWxpcVd2VGx0MzFtcmQ1cTh4M0tuQkpTNkFNQURGRG5GNnd2VzRKdmI0VDdaRGoxbFRHeGUzS2xRS2RROEtBdWcrZzRvTDN5cUo1K0lYcVF2bkVUZHZiUnpmMThJUjE2WUpjS3IvZVBINnkvT1FqUjJmT0x2L2N2M3dmTjgyVEIxL0p0dzNaZHNmeW9tK25DcXF4OHV4alh5cjh6RjJaZFozaDRqVUxtVzdnK3c5S0dSMjUyY2RmRm8rYzNubkgzZG51VGdXb3pqY1pRMElvQVpCUlZGOWNOR3c3MmRibXVVNFVCbkRaQ2hzUk5WMDNkQk1CaEloRUZCRUFybW1NY3dJa0VtRVlCSGgxb1NPc3hsM0ttR1VuT0dYTGs5UGpKNDh0R0EzbXFwdTZOdlp1MlN3QkE5K1RRc1NUR3FXVWE3cXU2eW9TMWVuWjZmRXpDOUVLMjlUUmVkZDIzVEtDOG1wMFFPUnBteVdNNXZ4UzllZzVNYmxpZU1SQ3pXSW1aVnlFUWJtMnlIWjJkYi96NW1pcGdZak1OcWlsQTRDSUl0SDB3cm9qL1VBRmtZcWtDZ1VvcFVSTCtFRTVJenBucHM1U3BwblBHT2trSlZRMFBlbUZoTHhSYyt5M0J1VHpyejhBUzJZcURIYTgvSi9YaWZhQUozRjE4eUpyUzhrNzNtOE43VlpoOWVKZExGSXQ0eXdjbmp2NGQ0UHYrRlhLVERYNy9JSEgvdHZCOTM0MmUvYXBXNDcrZHM5SC9oYTAxUGhYZnVtbDdvL0k0aFllVm44QUF2QnJRYUhaa1d1V1YyWWYzbWN2UnFWc1I2NVlNbE5KM1RJWlkwcWhVaEtsaWlJaFJZUlNCRjRRdWk1UG1tWStQWGJpNk5MU1FxRllhbS92Tmt6TGFkYlBuSHJGODd6UmpkczZPbnRUNlp5bWFZaUljYk1TUXBTU2pYcDFiblp5ZW5JTUViZnV1TFZRYUwvUUwzTU5yVWNYU1JpRmlVU1NhN3FVa2pGS0tZM0NjSGw1b1R3L016MDE3cm5OdmJmZE83SnB0RkVQWW5lZU1BeVdGdWZPbmprK1B6YzFNRFM2YmNldG5pY1lpL2JjcGtBRDhBRWxTRVZpQVpVUUlDVEVXWGtwZ1ZLZ0hDd0Q3QXdDQVloZHROL3FCeVJPU21RU0FHcCtiS21qUGRteXBUVTBzSk1nL1hQSHAvb0hzc0NNV2xYTlROSDVLV0lucmVYRjh0VEVDZDJXK2J5ZVRqSEQxQW1BNTRlZUordjFxRkVQbmJvcWxucHllV09wdkZ5ck5BMHJNYkpwUnphZk1RMjZjUEwwZ2YxUHB6NjRxM1BYUm45dTVUVTI5emZ3L1EwRW9HQVVzd3Y3amphZU9aVm5xVXdxWjltMkFncUlCSlRyZVlIditCQjVoc0ptMEdrVWV6ZU9Kb3R0UWVBSG5udDVRRjF0Y0h1KzBjdWFYeFdsZEZXTUMvRjd0VnBialIyR21HNFltcVpIcnJjNFBqRTdNN0hDSFgxTGQvYzlPNTJaeGJsL2ZEN242bDJkNnpMdFJTdWRvb3dqWU9oNVRyVmVYU3l2TkphYWhtQkRiY1hkbzFZaEd5N1ZWUkJkdFB0RUJBUm02U3hsS2FuY3hZcGZYb21xamdvaW9tdXA5VjNwbm81d3VZNUNBbDJqZjVIWVdJcHlSamdGU2xjWmFPZlZvaGp2TGhTaWtDb1VLT1JsckFza0NQaGRFSWxmZndCR0RLeFNhdW5wUFVmK0ltbnRETmNJcklUSStvcXhibVA2cmg5VnNuRkplM09xbWRLdmp6LzV5WFczZlV4UGRnSFE4aU8vOGd3ZmJxOGR2dTNtRDVLZU84Q1pPdjdFSHg4YS9EbGl0ekY1dVl2V0R5SlFLaTF0MDRSUk9UWFpPRDVGVmp3dUNFZkNDVk9vRkNBd0txUkVCcFNSaUJHU3Q1YU9ucmxqOUcwak8wZkdUazlObmp2VHFOY0FGUUwwRDQ0VTJrckhqeHlvMXl1Y2E3YWRNTzBFWTF3S0VmaHVzMW4zWEpjeTF0M1RQN3h4RzZYVWRacXZRdXUzN01URStLbVpxZkcrZ1dGRUNFTy9YbHRwTnV0UkdLWXp1VVF5VmE5VlJSUktLZTFFa2pNZWhvSHJOb013U0tlemNiT1JacU1XaVlnZzFRM1FESkFSU2tHa2JIR1lwQVFwQ2VJRldRSWtuS09ad1BYRG1PM0NsdkgxRzN0R0ZJTEdRR1BnaFFCWDBsakhQT3FFQ1lhMU1yZjg1Uy91N3g4czNYbi9ucGlyTFgxbi8vTmp6ejV4TW1XMXZmMitXMnQxcUM5THFjQ3lnWUF5VEVzM0U0MnFVNjFVL1RoakFZaEtNVVkxVGMva01tMXRPVTNuSXNJZzhIVkRUOWlzdnRRc1Qwek9UbzR2a0ZyeGZUY1hodnY5dVpWTDlkQTM4QU1JUkFCaUZET0I0MVJQVEVhTE5lV0VyY3d1cDlUV1dkclNzOGxFVHlscU9FdlBINk1UdFRZdDI5VS9sTy9wSmhyelhUZTZqTmwwOGVrVklkUzBiQnJITGtLa2xER2ptREZHNGh3Ym90OTA2dVhGbGZMQ2lyZmlwb2sxMnRXMmZWaFBXc0ZDVFV1YW9MUEZnNmZjRXpPYW8welU0ZzJvSkJod29RcDJZckFqdTc1WHM4Mm8wcFIrU0dKVDlDc01CZUxJU25WT1RaMHdHbS94cFJ2RUJLaFhjL0s2cW9MbVlvYksya0dva05EUWJGT1VhVUdkaXlhUzcyUWJVUEw1OFdzT3dJZ0FCQWg2VmtmSCtOL3NIbitLV2xzRVhMQlBRaVdkV3ZiK2oybjVIcENPa3RIYVBwZ3lEUkhPUHZwYm5kcy9ZaGMzQXBDb01mM0taeDdzM1BOem5Ycy9EZ0J5K3VuOUx6OThhdWR2bUZIMTJoaXhQeEJBaFlRQVQxblUxRVVZQm5WSE5IMVVDZ2hReG9CUnhqblRPZFUxeXFsWnlNNDlmWmc5TXI3N3Z2dkR3TmQxVThwSVNzazFEUlVxSlRYTmFEU3JLMHZsWnJNZUJ0NnFqem16RThsY3JwZ3JGRFZOY3gxSGlDdlZreTRBcFJTQVRFK2RkUnIxbUNDbW0yWXFtYzBYaW5ZaVJRbHRObXVMaS9PdTA1QkN4UGtvMjA3bUMrM0pWQ29NUXM5ekFBQlJXWFpDUkxSUmJ6SWVwOUloL3JtZFNLQ1NZWGlSRWF0UzRIbEFDQXdNWS8rQUFnM0JXL1gzdWNiWEp6YkZ0QWk2dmhOZ3NyMGRVSUxyZzVDckFpb0NHZ1BMQU5CRHIvbk5yeHpZOTloWnB0RjN2RzhUMTdUUUN4Y1dhak9UTmJjTy9ZUERvNXMzTmVvQktxRWJMVEtxWVZxR1pYbkwxZWt6SnluanVVTFJNRzJtYTF6VG1VWUJNUWhDMy9XVWlHUVVpVER5ZmFkV1czR2s3MWxLR3ltVjl0N0VLUXVXNjFlZHAyN2dCdzBJaUlwcUdrK2F3QWpHNjlNMTl5QWtLaExLQzZpaDg0enR6Qzh0djN4YWpDMmxQSzJZSzdYMzlTWGI4Z2dRUldFVWhhZ3VwQThSempYVHNrRGg3S25UWjhkUFpOSzVYS1pOTXd6T21WUXFEQUlwUXRkeHZNRHhxUEF0WUIycDFIQjN1citMRWhwVm15b1VoRkpFSkl4cTZRUnc0dGVhL25JTnd3Z28xVksybVU5cnBxRkNJUnVla29wYzQ0THlBbXBuYXhQL2JYMFJpSktTMjVHUnRhWWU0OWowT200SmphTHBMbEVWSXYzT2xIdklGNjRsQUtOQ3dnS3JxSVYxTGh6WDdodzQ4ZCsyekk2anZWNWljUDR3U21WMTBlamFrSGo3aHluVkNZQUs2MEFZQUJCS0NVdWMvZVovYWh0NWQ3cDNEMFoxb3FYSHYvN3Z6Y0w2enB0L0dnQ0NVLy8wM09sRDB6Zi9COHRiZUt1dTlYc1dyWXdRcFlSVHdoaXNzUTNpSkpMQ2VEOE1CRmphR3Z2VHIyeHIzOXk1WmJTK3ZNdzRYLzA0cnJaUjBuVERJT1I4TTgrNHhpcEZGSWJCYXlycTFzWkRLYk5zRzFxWkt4cm5zYU13RUZGRUdkTjFnekpHQ0ZsYmhpcXBvaWdRUXNRekNLVTBrOG5QelUwdEw4MnYzM0JURVBoeEVveHpua3BucHliR2xKSnR4YzVMK2s5UUd2ZGhoRXdHdS9xZ3MwTVJDeUdDbHNJWXJoNkpzZFZVSEVLbzFQVFpjK0crWnc5MTlNTEl4dTcrL2phV3RGdjFaMVNpNFo0N3QzemkrUFNKVitZWVpIZnMzYU54T0hOaXpQY0RRcGxobUtWU2U5ZTZiczdZR3RXY2NjMHdiVVpJZFc1KzVzenBzcnVFSTNtV3NPUjhqVWVJSVZKRk5FNEpwVkpJZ1FvNEpaeEVIRWhTNTdtazNWMUk5cFk0NTFHbHFTSUo5THNnTDNZRDMwMUFXTnY4bkdkRXJNYXFlSnZhU3VUeVRDTHkvTXJKU2VmRU5GLzBrc3JNcFF1WnRyWmtMcTlaWnB5cVJVU01oRk90VnVibTV4ZG5tbG1WMkQya0drRXd0Y3drY002VVZBSVV0WFdhdG5qV3RrcDV1NVRuR3BkdUtCMGZGVjc0aUxiR1JnamxqR29jR0FGRUZFcEZBcVVDZUZXUjBIVUhVaGFZYlYwSGYyL1VQNjBIZEZHRjR4c2VXRnozb09uVnVIQVVZYXN6YXp4ekliUzg4dDlDa0MrTVgxUEFVOHl5YWtlY3pLalNzeWlDMGVQL1pYaTVMb3hPQmVMaTh4RndtclM3dDU0V1hWdC9oRk5MUlEwZ0ZBaFFuajczeE84bU96YTNqZHluZ2dvMU1rRjk1dFNYZjNuMC9YK28yY1htd2YvL21VVi9hZXZQbTk3M25UZldkWU5DUForcVRzNHRmZWJKdSsvL0lCZ3NjTjNMVzJ0ZFdPeTUyayt1Q1JlVVZURDJ0QVNnbEVrbGxKVHBUSTRBa1VvcUtXUHlDQ0dFeG5wbnhoQnhlbXI4eWNlKzNObmRkOWZiMzZza1VrSUlZMkVZbkRwK2FQTGM2ZDIzM3BQTHQvbWV5eGhuakVkUnVGckVBZ0R3ZlloQ1NLYXh2UVJ0UlV4bEZHaHgvMkFDOHVMVzN3Q2dBWmdJUHBtZG8vT3pwTDRDbXE1VHFrNmZPdFdzenhzSk5FeWFzQ2tpTkJxUjcwcTNvWFFqczM1a1EyOS9UeGdFQkdneVpiZXVrMEFrMEhVY0FHU014Mm9OdjFwYm1wd3VMODlXbVUvN3N2bGRJK251SWtxcHBCSlJKUDFRQnBFU0NnZ1NRcGl1VVkwelhXTWFJNVFCZ1BKRDZZWlhVQWJmd0EyOFRxQkN5aWxQMjlUZzdtS2xmbmJXbjFxbUs1NFdNVjB4ayt1VWdDOUVCQ0pnUW1RMGU2UzdjTk1BMTdpU0NnRlVKQlFpSVlReFNoaU5xYlhTaTFRWXRVcUtyL21JWGlKZStLNENLai9Wa1QzNmw3ZXNmTDN3Z2MvaTlMbm1WMzR2dEdhUDl0MXg3cVpQbUg2RFIwMEFsTXdPelN3QUVBV0dYNDVUMW0vZG9LNUJCNHdZV01YTThvR2I5LzFxdWJqbHlJNS81NlU3ZWVpdUVWVXZQZHl5eVB3U25KdVlhSlNIN3Z4bHduUlVVVHduYWxiT3Iwd0FBQkNxb29hUjdrMTFiWjErN3M4Rzd2M1ZzTGtZR3YzZm5UZnVld2FVQk12MXdraC84KzY1ZlYvOTh0MGYvZ2lsMUcwMjE1Z1hNUzVma3I3QlJlb2xMQThBM1RUVHFkUzVreWRQblQzS3VaN1BGeFBKbEs2YlhOTW9wVktLS0FvRDMyL1VxNHZsbVhxOXVuWDdMY2xVNXNDTFQzT3VjYzZsVlBWYVJZancxcmU5SzVzck9JMDZaU3lLSWhGRnlYU0dFT0w3bmhRQ0FBd0RMWnR4bHB5WmlpYkhuWFNPNVhLUXptQXFBWnFKRnovVUtId3lQOFptSjBtalRyZ0dwbzJFQkpUeFhYdTJSNkZjV2x5dTFXcUJGd0ZBd3VKZG5hbDhXOTZ5ekRBTWZjODNURXU0M3NrWER5eVY1KzFFTXBsTVU4WU4wMUJLUlVIb2UwNnRVWFdJSDJZMWEyOUgxMDBEVmlZVjFkMWd2aG9YMVFnaG5ISE4xaTVnVU9QL1l1Kzl3K1M2eXNQLzl6M24zREs5YmRmdWF0VlhYYlpreWIxYnhnWU1ka0xvSVlFUURJRUVNQVJDK0g0aElRa1FFaEw0SldDU1FMNlVZQnVNZ1Jqc1lCempnbnVUckY1VzB2WTZPMzNtbG5QTysvdGpkcVdWdEpJV3kzTGpmcDczMGZObzVzN2NjMlptNzN2ZlRscFQxWmZrSFRaaTZnYy9uNjhnSUdBR3lKQTArYmt5RUJpVzJiU3VHemN3ditaVXgzSmVvVnh5ZkNCQ1F4alJVS3c1YlNlajVDdFpxRHFIWGNRNDVRK1Q5Vi9tNGFRbm1QUHY4Mlg4S3ladW9sTnRHWDhrYzhuSEFBRGFPM1RYQm5OOGRFMy9rNmkvZEhEMXgwTmFBZ3JESzNUcy82Wmpoc3ZwalU1ME1XanZqSVpFeGFrL01tU2FzYWIrbnlTc3MySlZVenorcWQzZGIwY2VCbjY4clFGQWhNaVZwVE5HOThEdUIwZmEvcnRsOFhXa0MvV3pSQnFYanUzOEdRQWdGNlFra045Kzd2dDIzWEdqVnhwVWFQbFdhc3BsK1RMK0ZsL21JR2ZPeUdUbjFac09GS29QL09BSDY2KzRNdFhVNkRvMTEzR0lGQjI1aTMxZUgvR01MaDZIM3dRWk13ekRNQzBFTEkyTVBmWEVrMFBGb1lad3BtVisxOWpFeU5qb0VCZDgybE05MVQvUE11MzJqa1h6T3JyaWliVHZlNmxVUTZsYzhEd1hpRnJiT3B1YTI2VDB5NlVDSXNhVDZYeDI0cUg3ZjU1TU5UUzN0cmUwZGtTaXNYcTZobEp5ejY2bk5Pa2x5OWFWQ3U1a2xnUmp0azFXbUN3TExBTUVCMTlCemNWS0VTcGxGQWJGNHRQT1BFQ3RWS2xZWUlqcFRMeXBKVjJQZVpQV1Vra0FVcHFFRU1YaHNZT0huaDB2ajN2TlZ1ajhOcWZpams2TWtxc015UW5JQjgweXRyVzhNZEhWRW0zT2dDSy9XSzBOVHlLRHczMC9DQWlrbXVYUEY2Y2wrSzBIdk9BZ0FvRDJwY3FWRUFBRWl6YWtzTFd4N21FbEl2S1ZkbjF2ckZBL0dJKzBxWm4rQThmRC83NWFmcDlFMG9pWkkwODNSR0xRdUJaMERWbklYcjJwZU0vM3dxbkxWdlRkNDFyL09iVHNENW1DNU5pdnVnL2V3NjJGcFo0N256bm5jOFhNMlZadDdNemRIOCtsRlNVeGdGSnFaV1hzcCtId2RSMXUxTnIySDM1MG5qSVhnM0ptKzRJSUFIMnVtaE5uRHozK3crUzhjK3hRcS9aeVJFNWkvcm5qdTM1ZW5kZ1ZidWdtWGRTeUl1eGs0OG8zRER6d0pUTzFRRWVhbVhZRFMrQzBRQ0RTM2tSeHdac3VIVXcvOWV0SDcybUx0VFRONjB5ME5CcVJTSDJlbDVSU2EwMmtTZGZyRUk1WEVOTnAvZlVobVRpbExqaG5EQmxNalRoRUFBSk4wbkhLSStQRmJEYWJHODlEUlN4dmF0KzRlZUxlcmRsOXZlZHR2cG9zekk1TjFFZDljYzZGTUF6VDRvd0RvdWM2aGZ3a0FKaVcxUlNaeHhoRFFLbGtxVlFBZ0hBa1psdmh2a1A3dGp6OVNHZlhrblFtYzZCblQzOXZqMlhacG1VcnBYTFpVYzl6MTIyNGtETzBMTElzSWlLcDBNbmhrUm1SQUlob0dCU05IVmE5TXphSlNBQ2U1M3FlQ3dEQ05DM0x0cmlvVE9hR2UvZU9UNDZVVEJmYjQ0blZhOXNXdERGa3BEUUIxZHY1SVFBVEhCbEgwcXJxZWVOVDF6SjJmTXV0NFBjYzhKS0EwNTR0VGNyeG9PWWU5UlRVQzRsL1N5QUEwc0l3SzRPUmNBSUF0ZmFSdE5XMjNPaFlVaHM4RkU1ZXNYTC9UMnV4cnBFbGx3bG5oRUtMUStIemlvNnJ3R040Wm91VnhCeXVFR1E1azBPTDNob3E3ZTBlL3FXZDNCeVhrSmNqeE5SSnh2a3E4czF3TWo2UjdIdjA1cVdYL3hVVEllM1ZtSld5MDEyRnZpZkREY3ZydVRpa2F5MXIzOUt6Nys2aC9pSXN2SkhMNnVrTndBc0FSQ1JQZW1QRmppdlBLYTlhT1A3VW50SEJuZllnQzRNVkNVZENvYWdaQ2htbXhVM1RzazNHT2N5U2hUK3RhSHpmOVh5bEpHaXRsZlE4WDNvK2tDSlNOY2VUMG5XVjU2SHlESzBUcHQzZDB0YmRHVXJFdE9OMy90N0ZoMzcreUoyM2ZQdnNqUmUyTFY5Y0xsVjl6NjFuaTdoTzdmQUUwTU1Ed3VyOTNPdm5qa1JqaUd4c1pMQm4zNDVjYm1KWjk5b2wzYXUxVmkxdFhaUFpzY21Kc1pwVFpZeDFMZXFlMzdYTU1FU2xVcTRYT3ltdHBKUmFTNjMwREd0ZEE0QSsybE16N1hKSExyaGhXRUlJTFdVNU96azZ0Rzh5TjFiaXJzcFlvWXZtdFMzckRLWGlzdXpJYkJuMDlBQzQ2UmNybWxicGVGck5ZQU1DempUVGFkTy9oV2dna0ZZS2dKZ0d3eSthc1RRQUFCRnBIemxFMWx5YUc3alpJNTBJbmJOMHozZUtEU3RDYm82eGlLZXlOVE9pckFZbXZjUGVxalBCWEhwQkk5T2U2YmtIVjMwaVd2cmc0dW9lWlVlQlRFWjQ0bGE4Z0lDK0tpZlRxeXNISCt6ZjhkMk9sZTlrSmdKQXJIWDFaTS85QUZUUFlpZnBvQm5xMlBTK2lWOTkxUWR1b0RpTkFzK0FhUmdEb3RyZ3BCVzJ1NjQ5VHpwZWFXaXNOcG92NXNxcU1DSktHanhpQ2dReXBra3JnQm5KbFFBSXFCbG5oS0NCZksyQkF3b0dBaFdpWnNBc2hxYUJqWUtIb2lJZUNpV2k2Y2FVR1FtQjBuN1pjVVlMQU1BcWZORWJMeDFidVBmeG56emFmcUNuZStQR2FESlJyWlNrVnk5TVBMYTFiRDBHeWhpMzdORFFRTy93WUcvTnFjUVQ2Yk0zWGhRS1IwcUZ2TmFhTVJhUHA5S1o1cnBqakRSNW5nTU1FNGxVNzQ0ZHBYd3VsV20wd3hFN0ZySHNFSEtPOWJHQXN4cjQ5Vloxdmw4dGxIS1RnOFg4WktsV3FKcEtKYzNRcHVhR0pmUENqV21ReWkvVWFrTzVxZFk1aDgyRm1SM01ma3N2YWdFQnJ3Q1FsQkpoMTQ2SFJyWXd3eTQzZDNPdmhEdzAvVFRUcW1RMGR0bGRhMnVIbnVPWkpRMU9iZWxUbjBucEpOcWRTbnRNUzZZOHdqTmJualNuWVF5RTNIUW4vWGpyL3U3M056MzlaV1VzNE56Q0U5bS9SOFkrZ3dTbk5ibXgvNGs3KzdUdVdQME9CRERDR2Jjd0JLQ0JjVkFTa0pNc214M25MMnI3MmNTMm0vTWJQeGpPVlY2cWtxeFhHY2laY24wMW1nZkdZbzBOaVk1V1lFaGFheW1WNitKUE1mb0FBQ0FBU1VSQlZFdkhrNjVIdmlTcGptMWlqb2hjSUVkbWNHNGFUQWdVbkluNitCUjJWQWhaay9aODdVcXZXcXpuYTlUOVdxUjByWCtzWVdsWC9NOWFCKzUrL05jUDNEMHYzZEd4dkR1ZVRpbXRwTzlycmV1Wi9nd1pGd0xyQmVaU2wwWW10ajMwQURLODVpMS9FRTBhWThQNXdtU1djVjR2Q1BZOHgzVnJSTUNGRVlsRWJkTWUzbnVnOStDZVNvc3dGaVVuc2dOc1ZJc2hZajRLWWlZM0VBM2JNZ3pEUU1hQUdBSFdSM2xXcTFYWHJibm9lWUw4RVBLT3FOM1cxZGpaSEVvbFFHbFpycm1qK2JyUjhOdmtwZ3NJZUZXaHVZMkFuZHUrUG4veU1aZjQ0Nmx2dUpFMjhvYU9IS0VVY0FpdnVkanQzZUY1azZiWmxYWUhiQVFtYkkzYWxCNzNTOFRFQzlaU2ZqYndqdDZ4dVI1TFZJMDFMZGgrYzB2L25aSFlaU0Z0eTZORzJDQWdrbHZWbmdPa1VaaG8yc0M1WUJiNC9tanVTZFdRaWpRdksvWTltVnB3MGJ5Tjd5VlpuSElTa21abUhHb1QrMzUwNDNQci8xcGx1bzFhOXRVOGorRWw0WENGZTkzOFpJaWMxV084eVBCWUs1R21LZ3RKMDNTcHNaNytzZzYzcGpvU1pUM2hPWlhtSWRQTXhBdUhoc1lmM3NFR3kwa2VTNlVhbzRrRU53d2lBdEsrNTNtTzY3alZhcVZjVlk1cnF1aXFEdC94dk1mN2xpMWQxZEs5VkpOMmF0VjY4alBub3Q0VnIxWW9qdXcvTURUU1cwNVFiUDNDcHZYTGhEQ2s1MHZIY1l0VnYxeFZWVmZWWEZYenlmVkphcEpLK3dvWkVoRXpCUXNaSWhZMlVwRlFROHBPeGhsbjVFdFpkY21YSjk5UlFFREFLd09pV3JRcHRldVdDN0ozeDEvL0g2VmZmK0YvYVZHMS9jTExEL3g3eTFWL1E3SThOZGlJQWVQeDBzTzMxL1krYVdlNkhDcE5VbjhyTE9YQTg3VW50Nng5YjdueGZLdDZKcE93ZnBPRHlmVGNnVVcvbDhodHkzaU9Fak1tRHlJRHJWUnhraWN5WnROOFpFelhTcW93b1N0RkY0Z0JhMnU2VkhjdksxWDdtdGY4VHVQeU41Q3ExQ2NLMUYrcnZTSUxOYzFmZC8zb3JtLzFYL0psSTlDK0x6Z3p6VllpVWpSVkpnOG55TEUvZFc3OHFYK1J5SmwyWlcwd0cwa240Mis3c2p3OFVkalRteHNjRTVNanFJRUlHRWZOUVFua0dVc3NTVmdObmFtMkJqc1JSY0ZIbTJOYjd0dVdQdFRUTnE4ejJkb1Npa2FBd0NtWHgvcUdzdVBET2EvZ05SanhhNVl1WHIyWUlYclprcTkwL2E0aUZJdEdVZ2tVSERnZXVYVTk4bXViWGprQitVcTduc3lYajh5aUNsUnZRTUNyQmFHVUUya3ZWdWZGbVJrOSt6MEw3N3hwRC9LODFkeWl5OGdGU1E4QVFHbmdGRjV6a1hOb3UrK1ZJa2F5Z0NNNVBkaEduWTRaa2xhR0srK01Sa1Rua29RMURYTHVPNTZ3dGRuQ0hhbkZqQ3MzYVYzSmgxZGVFRnA5RVRPakFFRGdxdHk0S3VhQU5ERnV0blF5TXg2dkg2dXFOS05MSlFBQUlwQnZydmlkbGdOUGpvN3Zsb2tGd2k4R2tlQVhpVFBiNkFVUVVaWWR2K1JZb1ZEYitlc0lTVHFlOG4wZ1FNNjVJWmpnVXczaVBhVnFyak5TUUlDbVZVdlN5eGVNUGJWcjkrNCtlMCtmcVFVZytFeTVOb2hscWVUeXBmR09GdktWbHkyVDFzaFl2ZDhJS1NJbHRTT1BEbWtmdDZxWi9nQUk5RzVBd0tzT1JNUE5PKzBYOVIvOFVjdWhlMFhYbGNzdi9iaTY2LzlVNHgza2UyaEZBRndBQkdSYWxuaXMyVjU4Vm0zbkl6SVRTVlBIR1BiVTVJUXk0OUpJTXVXZjJTU3MzK2lOTlRlRk0yYjdGVEFhaUtaamg0aXFPR2t2WGhkWmZ3MkExS29FQk1pRlNNMFRxZmI2Q3dsYzdlV25PbndoVG1uZnFkSHZBQUNrYWlqaThWakd5Tyt0WmJyUkMvVHZxd2hFUk5DTzd6bmVWSHVLS1gycHlYWFYxRkNXK2dBV1pBd0p3QjNMbzhIYk5xM1NtMVpWeDNMT1pBRVFFNmw0cUNIQnVWQ1ZtanVhbjNyajQ0ZEduTEorOGRWVTRCZ1FFREFyV2dHSGJIcERvZWUrVE5lVlJ1djZsVy80cDkxMzNsVE85c1hhMGpNT0l3QWRYbjJoZStBNTN5dUZqSFFFMDFtOVY0dGx4TU9NMUJtZGl6S0hSaHhISUdKQ2tNZGxEV0JHdjNnaVVGSTB6QU1BN1phQWNRQWc2Uk40UUFSTU1HNlNYNXRTdXRNdVFRQmdadUxJVzZzS0FCaDJUUGpsR1cwS0FsNDl6TWplSWxKcSt0SERKdWlNWGwwQUlCaG84aWFLZ0dpSDdQQ0NLQUJvVDZwOFJXa0swcU1DQWdKT0JWcHV0YmJnNnVFbkg4aVUraUEyejJ4WWxseHlaV1ZzUjZ4dDNaSDRGS0tXSlI3TzJFdldWNTk3d0d1SUpLbHRnbllYVFNBenhwenNHZFZFcDR5MkhoVWhKRVRVTGxNZXpkU1FpTUNGUDl3TEFDaU1HWWNqTWs3S1UxNFZ1VEh6clpBaGluQng0SW14L2JmbVIrOTNhb2VRUndCQWxzZVVDQVdxOTlYUFhPNnhFSUFoSUdoZnlrcE5WbXE2bmlURmdsRjlBUUVCcHdLUisyV1piQnkxNTFmMzNnM0FBY0NNTlBxVkNZQ2pMejRhQUZSNDFRVThrbEJ1R1FGVDBBSGdhUTR2UWhuU3JCY3pBaUJpcHVZV1V5NHFyMjYvRW5MVWtoTURZRWNVS3BFSUoycURPM0R3cWRpODlhUVBoMjhKUmRRdjdoL2Q4YlBPOHorQURFbkw2Y2ZqU3VZUC9mSWZxenNIakZSU05NVlNaMS9ZM0R3dlc2MDRTeTgwdk9wVWNDNGdZSXJneHhBUUVQQ2JRWURDcDJMSDVSTjl0M1N1MXdCTWhET1ZzVDBBQU1obWxuSm92OHpzaEwxa2ZXWEwvL29OWWN0ZTJqSHh5UGp3cjBwdGw0V0xvOFIrbzJ6bDM0RFpZOENvdGJMaWlnbGVHOU5tbWhPaGxnQ0FETGx5QlFJd0JqUG1JREVqSkl1OTJmMzN4K1p0UUdRemVnWXpBdWJrKzdXc2NUTXlyWUFCQUlsSmJzYk1YQnNXTGRudjlqLzI3YjBkWWZjRFAyVFlLS3BqWi9xK0l5QWdJQ0RnVlE0eW8xWndXODhkNmJsdDNzQWp2UDNDVUtvOWQ4RFRzc0s0b2VXTWFhY0VBQ3EwZkpPejcybnQxbnpUVExDdUJYdHYzZEd3U1prSlhwL3Bkd1pnUjV5Qk04UVBKVUxGQXlzZS85U2FSMithdCs5YmJqZ0owMFBDR1Vra09zWjNyY20zSTIxZWJ0RHpzaWpDTTUveWEzbEFaR1lZYURyc0IwamFFU3hqTnpYN1Zra3kxMG9uTXZFVjJWOFdjdjE1S3dXa2FkWlZCUkpJSUlFRUVzamNoWUVQSnB0TUxDLzNQUVlBZHF5Wk1WUFdjb0F6bzZVd1pRU0hrdmFTOWJxYzErRHFVRWRiMlczZS8yMDNZazlQaXpvVHk1c0Zrb2JGS3owdG96czYyTHA1aCs0T1RXNnR4ZEtNSkNFZythaVBMUjBsMHFhWndIeWhPTElOZ005c2UrK1ZSb1VWUTdUMEVmTVhTTGtBekdqdWlpMklydGkwZWRuNlRkM1gzN0JwNDNMNWpmK3JPY0RNQ3VPQWdJQ0FnSURuQlNGeUJVNW1SYWt3Q2dCSyswU1NDWHZXVVg0QVpDOVp4K3dJU0YvcWlobGR2L0RRZmVHeGJVNnNBV2ZvcnhlUTJjMXF3L01ycWRYWjlBSmx4T1BXcXE2dC84amRxaHRxUkEyb0ZjeTJGRUl3SWVUbStnQUE4UEIrd0MwT2hsSUxBSTdyaUErNlljRm1YQkNOcEcxRHhLaFk2SHJ0RGMySGRoVCs5MzdXbm9URFdiSUJBUUVCQVFIUEUrUmVSYVpYNUQwZlpNVXBqR290UlNoRE0vM1BVd2N5clNvODFteTJMRlMxRXFHVzNFanhwUXUzZjVXazY5c3BwQmRlSzRuWk1rcFJ5S29iblYrTU5yaVRQVVprN2J6OGlQdjBwdytjKzJYaUlHUU5BSS92bmtTZ0RCNTI4Nk1BZ01pSk5ISUJBRjVwTE5POUdRQ09QZzlxdnh5T3pZOHN2M0xIQXo5WTJmd081WGtpa1ZwOTl2cGYzUHAxdU9KUzVCWkFvSU1EQWdJQ0FrNExyaHcvMXBERk9JeHRxK1dHN1VRN0FKS1dzM1RnVVFvNEdQTVd1bjA3Z0ZCU2hZVVhkaFJIUzF2L29XL0RYd3Bwb1pZd2k4WjgvcHdnc0V5S09GWWpiVnBWbEs2WWlmUG5qdzEwUFAwM1hnaVVDRE9hWlF5U0JtV0lLRlh6QkI1eUUwQWpqOVN5KzZSWGliV2RSYnAyN0xxSlNOYzZWN3lEcjFyZk0va3p3Wk02TzlGK3hUV3RCN2ZuNy8wVmIwK0FmNXlkVFFUY0FDNk9uZXdhRUJBUUVCQXdLd1FJVUcwNk8zZmcvdHJFM3VUOGN3Rk9vRVlSQUVBa1c4Q3dnQlFDODNWSnhEWXU2WCttWWQvdFRqU0JMN1RxbVQwSnE3NWtMOVNnZFJXQlNWME5KNjVZTlBCazY3YmJsUkZCTmt1TWxraWJWdExMRFZYenZZQW1FQUhnNlBhZldQRTJSSU9rZSt3TEVFazZBTEw3b3MrVTI2UEQrWWVZaW9KaHJyL3lhdmNmUHU0NUxqWmxRS3NqUzVJS1V4bWRqbEZESEZzeW9HbnFjdzBra0VBQ0NTU1FZNFVBQ1JDQWdmQmR2L1BTM29OUFUzRW8zbjRPa0FPQUo5Q0ppb1VpekFxVHFsdUEyZ2N2SEQxMzRmNmZXSVVCUDVSNFlmVU9POUZUaGkrckRXZm5UUTB5RDRBU3ZVaGk4NUo5ZDZjUGZGZEdPMlp0NGMrRnpUMGMzdmxUQUdCbXFqSzJJOS83Y091Nk53UE5adXdEQUhMdGxRQ2crN0xQRFllR3EwNGZURlNhTDl1OHNTVTkvb0YzWW9Sak9BSktJd0NTWnMwSjNiL2ZmLy8xbFQrNHB2YkVvNkl6ZzRIK0RTU1FRQUlKNUZnaEJISWpHVCtjUVFBa0VIN1ppeVZ6OFNYSlZEc0FBbkpteEdBMlZ5NEFBV2ZJRHFjU0k1R256RlRHdHh0Ni8xdWFCZ0s5Z0V0bHN6K096SENMVHJKcnFQMEN0N3hGc0lnaVR6SEltR3ZUbGJLRTJmM2dVcnVOaWJYVi9ZOFA3TDV0Y3VEUnZYZjlSZHY2ZHh1UkppM0xzeDQvcFlQOXZHVmwyczc5dzk3YW93Q2NSa2ZYdlBkRDNZTzdSajc3Q2Q0UVJzTUNUU0JNc3N6S1AvL2wyWDcrOG5VcjJJZC9wM0QvcjBSSEJxUis2Yi9yUUFJSkpKQkFYa2JDdFoxcDJIMTdkTzlQbkVSYUcySFVqSHl3RERQV3NRRUFTc1BiaS8yUE15TXlteVVwcU9ab3Q0cEhtbStnMGxVZVd0dzR2dE1vWjVVUkJ3SUFSc3lzUDNzNmNzTGlZZ0lRanA5ZDlQYlJDQ2Zua0lFUlNUVkV5elRtd1FtU3dSVDRqSm50c1hQTGo5MDVjdi9YRjF6MmlhYVYxMmxaQXNBVG5RVUFBQmpwV2t2WE5icWphNks4RlgyRFNxV0xQLzdwMWwvY01ucnpQNHZXR0NBSEsrVDNaNDJKNGRqcXMxcXVmL3RWNy94RDlkay9xZlVQWXlvZXhJTURBZ0lDQXFZaDMwNkk4UzByaC81NzNjalBHaDc0Szk4SU9ZbVVPYnE5V1daRiswWUFLSS9zTEF3OGRXd3BNRUJkSDh2aUdMa09jRDdqVVVsR01sbXJoQ2UzU05NRVFHa21wQkZSSW9MNnRKS0ZUeEFEUmdDR2hsZndJN0dCN3Q4djFaNURBQVpDZzVUa3duRjF3SFVRbUU4MXhxelcwTHIyMkhuSitSY0FLQ0JpSWpURG9wL3RBNU11QUxTZDlaWXhPZ1NnWmFrTXlEZC84alB4Zi92aXhJOXVFZTFKWkl5Y2ltV2F4VnlXZG14TlhIVEZXUXM2Q3QvOFo0eWI5Uk1IRWtnZ2dRUVNDQ0JvZ1ZiZkE0bGwxemEvNFQvT1lwTnR2M3hmTFFKbWRtc20yUUk4QWdCTVdOUHRHbkdHSHRMTWlBR0ExNzhIMkRGVFNsRUQyUkNMNTNZUmcxb3lsUno0V2ZmOWZ5QzhuQjlLQU9qbnZkUVR4b0FSQUJnTGxZdWwrVmNOdHEzMWkwOEtGaU1nUURwSkpoZ0NhdklsVTFKVmxDd0RjR2JFQVFGNWhKa0p4cTNacldka3BLcXB4ZzNZc1RCYjNta1ljUzg3YnFRYXJybnBrL3h6SDg3OTZqNGp3VmtrQnZGMGNYeWtXcTFBdVRMLzdJM2gvbjJ5ck5DMFh1cXYrM1RraFF3bkJCSklJSUVFZ2dCa2hKelNLQUFrci9sS2R5clpmTThYNDVWRGthNkxwK3hPWVdxdmVyUVZxSm1aOE1tdERtK1R3NGQ0K0ZqZnFpYWZpVXk4ME85YkVCbCtlT24yN3l6SXVXMTcvbE56QnN4NDN1czhRUXg0K2xtbWZPN3JrWlYvTW02V3lSM2lhQlBvVXc0d1IyRm90K3J0M1FvQUl6dS92L09PRHgxNjlFdUY4WWVCV2N4TU1XNGNILzBtNVFKQVp1bmxFN29QTktBd3ZKSGg4SUxGcjN2L0IrVkgzMTdZdmwyMHB6am41SHVseVN4NGJyU3BPYVo5cjY4ZlErSDZKTmxYbUJBUk1tM0VpRnNBaHd1clgrcFZCUkpJSUlHOHdrWDRxanJ2b3JIUkhwQmxBRWh2L3VKUzkyQzZzTmZvdklpb0JnRENUcERXQURBMVRaeUlpWWhVMWFGSC82MzY2TjJBRE1TeDNta0NoU0psYTlHdzg1WWxXLzRqSFRvZjRpdU4yaWhxQlhoeU5Yb3k0Vys3NlpNbjFhV01lelVuMGVqeFNLTC96ckRkWFlLc2hTRURiRHErbGRkaEdBTkVHQmt0eXQxOTkzL2ZmN2hVN2VuSkhYaW9YTjNLbzdZZFhZemNCbkxoeUVoR0FFUmtQQlR2R085L01GeEZ5MGdRSTEzSWg1ZXRiSXRIZDM3N0d6NnpPdnQzRzdiTnc1RlVVeXRZVnYrelR4V1hydzB0N0tLeWM4cDdncGNWcUpVMnd0S09RbkZJQTVleGxCWWhwaVNTZW1WdEpDQWdJT0JsQmpMbCs0bDIwWHRmU3lUTWtsMEE2RG9GNEdheTYwTHl5OGhEZm1YY21UeVVYSEFCa0E5RWlJQWlQTFRqTnJYMWlaamRvVTJjcmNvSGtOa2VsR0lqRDdhSXM3alptS3MrY21ENTI5elVZdUZXbnZkMVc1ejZoWXpaNVhKKzRiV0RZNCtHUng0M2t1MUlCbWdOSjNraEVSTTJtVGl4OTM3V214UzJCUkxvZ0M0TzdDcHUyWkxjdExGMTdkc2o4UlVJU250Rm1CcDhoQ1NyekVpRU90YmtudDBTQ1hVQXVNQ0YzOWZYZVBHVm03bjE2TTJmRDIvYVVLMVU3WEFFaU1DMEVxWXhOTmlMNHBVMnVwQklHN1lTNXJ5dFgyMG85RlM1TlFtUlV2c2xidGVsRE1Fc0Y0QTBIRE50bm1BNld3OHBHSVliRUJBUWNCSklnWUJpZkdtNS84bmsvTXNCb0RDNHBYbjFEUUJRVnhWS09scTUwMnFEMEloNi9tUmw5Nk5Oa1NWUzZGbTFiLzF0QlFodEx6UjVpMXQrZXJocFNhbnpjcXRhbmhyVjhMeVl3NGdsQks1ZFE5TEk2ajhkRjJYdERuQzA2WVJybkVJb294WXRPMWt0cW9adk9JNHErc0poTWlVT3R1Vi8rc3plSDN4eWFQYzNDUlF6VTRnNHJXRUlBQkp0NjJwR0RhWTdmaEVDRlBLSnpxNm1KWXRKYTBDSUpxWTZSY2ZpTWNwbXA5elByeVRJajBUU0IyOWY5TXh0aTdyZnV2clNENTNUMXJIbTRDM3R2M3kvZWZBZUo1bVE0UlJxTlNNL25oRElDNmZjZUlvNG43VU5XVUJBUUVEQUZJaENrdHU2Y1hKeUFBQXFZOXUxZEJLZEcwbFA5ZCtRVG43SzhDTUMwZ0E4dS84K28rZ1k0ZlNKYW53QVFJRzBNZTZqNSt0aVZXWEhGN3lPSVREbG5vNENtdE9NUTBKdVZITmVyTEZ2OVI4b2Q0ekxVNGVCd2NDS205VURubUl5M2RMV3NuQlpMTk9JdHE1UlVlZGo5RXg0OExidjc3bm5JK1hDVmhReHhtMGdCY0FBWkx5aG01Skp4NXZnSUFDQUM2RTBQZlByK3dWSHFWUTRHbzhtMHNwekFWQXBEY2J4ZWVRdmQ0aUhtRk5yR0huQ2pLNTN0WUJJUi9pc2QzZSs4ZXZyVm01ZXZmZTdUWGQvRUlxSGFwa01vSUYxWFVzb0k2bmsvdjl1ZU95ZnBCVlR3ajVCL1hoQVFFQkFBQUNnY0N1eWNmVWtDYWdNNVh1ZkREVXNCdUFrbmJxeTlLdVRkcUlOQUVnck5NSUVxbkxneVZpb1U1SjdFbnVPUUpzUUVoZ3UxcDZaekN5c05wMWpWS3ZFVG10MHZaaWovVWlNbVJXMzBIYUYxL3VBVVNsS00zM2lWWktwYlRkZUx2V09zNXh3c1JwTlpwcFduVTI1Q2JkYUtVNW1KMGNIQzhPamRDQmR5aDNhZCtpVExaZStyWFhwTzVscGFTOUgwaEVpanZIR2FtN2N0aHNsK2R3d3lwT1Q1TlppaVVTeGtHOXM3MEk3cEl0NVR1VFVxcGhJNHBIT1lLOEVpS1FaTW5QYll0V0tObHVsbTdNQXRKZG53cktXWDkrNS9QcjBFemYzUGZEaC9nWFhsOWUveTZocFVjdjU0UlNmMkxWczZPNFllTTgrOVU4VDUzM0VLc3BaTzVFRkJBUUVCQUFBYUo4c1ZvcDNsM2JjNFpRTHJhdmZDQUNIbzVXeWxnczNMQU1BSUkxb2pmZmRxOGVHUStrTFBLcWNYSlZvMGxGTTVmUnpZNTF2Qjg1UU9kTWgxT2VKbUx2aVFtVGNLWEJrak5sMHdsRkZ4SW1qeFNmVklQYnBVRFJrQ21Odzc4NUVwdEd5dzVZZGJscVlicHEvTUQ4K010cmJrK3Naa28vSWdleTNuQ3NQenQvd1VXYW1TSllBd0lnM2VqUUJoQUFBQkl4aE1oNnQxV3FtYlRkMmRwSHJJQ0pvWFhZOWxreThjblR2Rk1UQXJJNVlVaEhqNExzQUFJeHA1WU4wbVJHS2JyeXhlOG1WcVhzLzIzUFhFK09YL1FQRk0wUmdEandXYTFzZDIvQ0JoYmUvdmJML1FiZnJZck9TRDlLMUFnSUNBbVlIa1V1UTh5L3IrOThibzR1dUREZXVKRlVCd0hyYXMvSmRLOVlNQU14S1MxVWVmZkxXSm51UkFoOEFBUkdJUUNzZ0FNNm4vanVOQWorc1JOSHVLcWU3aFE5NDRrNVdjMFRNWFgwUk40UlRFTFVDWWZKRWh5QXhnNFd5MFg1L1Y2RjJzTmJ2OUZ1MkhRbVo1ZkVSYStsS1B6c0Juc3NaU3phMUpwdmJjcDBEdzd2M0ZYZU45NC9jbGUvZDAzWEpoMU9ONXdBQU15eWxYUUFFQWhEQ2RXdXVVM01kWi9IYURWWXM2Ulh6UWdpb2xHdkNNcG82d1lWWGtBRU1DTWpBZEFzR1dvQ2dYR2ZxVVNCQXBxVURVR09weGExditsNzRnYi9kLzk5dkhyemlLMDduZ25TNWo2Y1dBa0JEOTJzai9RKzdDeStlVytnZ0lDQWc0TGNUTk54cXJXRnBJZEkrdjNreEFKRDJENGRjdmRLb2Nzc0FVSm5jZitpeHJ5UnEwWENpemRNVlVrclhTcUFsbWlGRTFKVXFXbUVXaXNHUmRsY0VhRWM4YlpVTzFpSnRwNjkzeEtrUG1UNnY1aUJreVpRdUdRYUFQczRMU295WWdlSEo1R0R4NE1ERWd4TTFpN2V2MjFTY0dEKzA4N21Sb2J1dTcxaGdOalY1WTJNYVVaVkxqTEZVYzN1cXFUVTNOSmc3T0ZwOWJuaWcrdmU1VlpkRW1sZVdocmQyMk8wRWFtcDdTcFVMaGRZRmkxb1dMMWVWRWlJd0llVFlrR3RIak82MTVHa2dldVdZZ3dnQVhKWVpDQUpHbmdzQU0yNnlFQUMxbDJkR0tISEpYNjdJM01idnY2bnY3QStrbUd2UHZ4QUFXTGpSZ1AyZ0FZQUZYdWlBZ0lDQTJTSFNocUdMWTRsb0pycndVcGllWDBCYUk0ZjBva3Y3SHYzYXhQNWZlclZzYkFMaW9xV1c3eU1sbVdXYmJZdXRyaFU4MWdDTTZjSmtaZXYvNmtxQlJSS0hkYkJtYUNzZW1keGRhYnZnOUpjNTF4Z3dndFlDelBLUUpSVlpCb0J6MUdhQk9ISEI3V3lpZjJMdndkQXVzK0NXUTdITXVnM3JJQlRMWDNEUlF6KzU0NysrOWkvWHYrL0dTRk96TnphS25CT1JWeTV5emxKdDdhbjJEcWlBOWl2RDI1L0w3WGlpMlZvU0Q4MzNkUlVCZ2JGS0lXL1pvY1ZuYlFMcEt5a1JFYmlvR1hidTJjZU11NzhmK2QyMytXVUJvRjh4VmpBQjg2dEVCSnlUZEFnOFJIWlVVVFV5TFIxa1htalZtN3VUWGZLLzN0Rnc1YWRZWWdFQWtKWlU3eDc2U3Rsc1FFQkF3SXNQa1I4Mm9sdHVhNHVuSWRSRWZ1SHdOWlA4VXVPSzY3Z1ZjZko5WFNzK3l2T2w4cUVuYlNaNFBHMDB6VGN5bllmZkFqSWRvcmtqL3ovZklyZUtwbDAza3pRcHptT1I4aEFxQURTQURvOG1vaG1tNEZ5dnozT05BUk96bWFmVHc0OVp2RUdqbW1sOUVaQWdnd3R6SXQ2YjNYNkliV04rVEM5ZXZuRGYvb08zZi9VcjNjdVhycnJrNnRmLytTY2YrZmEzYnZueVA3ejJEOTdUT20rZVh5Z0FZNGlvTmVsS0dSQ1JBVFA0UExFSmlBREoxMU45d3JUbldlSElpbk12RnBidGxZcklHQkdCWlE0TWo2UTc1aHMzLzAwMmtXNjQ2algrUUdIdXh2eExDdGFIVkFJd1pKdzhoNVNMM0RndXBJNmtOVkhCYnQrMCtIZStOdmowOXhwWFhpL3NwRnNhY00wR1JKaTlVRHdnSUNEZ3hZQ211eWk5VEMwQk1zS2lXR291N0V4ZStxZjFZcU1qQ3BnMHlGSjYwUlVBQUNBaGxJcTFIbEc2V3BWQlRjL1BaY2dqYWFPcDB6MzBIRGZ0K2hFYUpCZXBTR1ZZVkVmSmFtUitDUUJRSzJWR3BHMFNBbmZCY1BMRTVoUW1uR01NbUtRZHNyTGJHck45M0Q3YkkvL0lFMENDQkRPTXNVaFA3cGtCdHB1eEdOZU1tS2FWM1V2Mkh1anY3UjlnRC81aXlYbVhuZisyZHlTVHFWLy85Q2ZYdk8zdGtYQll1dTdVVzJEZE13QUtsSUxxTWV1UlRxMmhyUU1acTJ2ZnFVZTFsclhLaWt1dWFHL0szUGJuZjFqNHpqMkoxYXY5Z1R3WUwrdlFLSkxXM1BiaVFNSkdMY0VVNURya09Dd1NJdkNPUHh5SXRDd2xGMStWSDN6MjBLOCt2L2lhTDdyRmNTKzJ2UDZCdlhLODdnRUJBYThTa0RReFE5b1JKWUQ3WU5RSzlESlV3MFRLTmtYUFF3MlJKS2FYazZvY1ZYQ0xTRVRrRjJZb1pVVEdpVFJvRFloSGhnVFdNNXg5RjloTTg0NkFSOEpPMmFqMnVkRm1KZ0dBdEJuaXNoYmRmN2RSSFhNYno2dG1sakRmaFRrd1Y0MUZBa0tsSGxzYkdvOWFDaWZPREdzczNKTjdwby90WWl6QjZ6cGRTdWw2M3FMNWJacWJBNE5ESTN0M3dtUnV4WVlOVjkxd0EvcStrbktPNTBYR3BPLzVybk5ZK3lLaW44K3ZXTE91cTZQRG5MLzQ2cmU4dGZESGI2eU1EdkgySk1uVG1neDFoaUZpQW9DRkI3Y3lkMVR6RURLdXZhcXVWZ0RFN0FGZFpFQWF5T3U2NU05citZSHE2RGEwVTlLS0JkWnZRRURBaXcwUkFmUGlTYytPaUw2SDQ4OSt5eXoyZUpIRVZMbkt5d3lOd0oyc0hXc0VBTklTQUlBSWtlR1JzbDJjcmtwQ0FFSnVNMjRlZFNOQnhGaW9QUEpzYmJ4SDJFZk5aaURHTE1XczhpRHhxU1BkcUIwLzlPTlZqLzNMeW0wL1R2VCsyTGVzazR6Nm5ja2NYZEFJQktLVzUyakRVUzJnVVRCN010cWYzekxBOWdpVzVJZHpneEJSU3MwWWIwb25xNDZiSFIweWUvYVlkamlSU0NLaTczbDRHZ1pjL1F3RTVQZjNObDF4elNYalkvZjkvblh6N254RVpKSnFNby84dEFxenpoam9ocVBOMjcvWHRmMldYTExGalN5SmFFYWVxMnRGZ0tPNllrOURBSXdaQ1ZKbDVHYmJobmNOUHZLdm9jd2lsbXF1ZDR3bUZFaHp2WThKQ0FnSWVONmdWbjQ0SlMyd2Q5K1Y3dmw1YXppVUFDdDM3MC8zWFBScHArVWNzNXlmbzc1NWNhRXBkVXVhR1dGQXEvNG9NbGY3dFprTFprWnNmTWRQN1hSWHJIV045c3N6cnNXc25EOVFxd3lITTgwK0hVbDdJaUlEdzZGU2Y0RUFDWlVSNW80ZkczMDhuTHBTcXF3VGJrWU5KNWtaT0pNNUoyRnBZRnJTVVQyWXlOQ2hjbkl5ZStEUWxPMTdkR1l1SW5pZUY3TE5SREtaYXBsbm1tWXlrOUdlSjVVNkhlMExBSWlvNnpscGpNbSsza1Z2ZVZkNTVBdFB2Tyt0WGYvNUl4YU9VclVLL0dYNGEwQkFZTFgraExGUWlpWUpMa0NjaUZScGN1clpvMkZHdE5qL1pLSC8yWTd6M3cvZ1o1WnNydlkrUExMN2Y5aXFtMENTRm1IZk1yZ0NvMWFpd0IwZEVCRHdBbkRjaUZ3QUpDTGtianJPc29PTjkvNXRweTQzcmZsZGE5bDFNRm1FSDM2cy9ibC9QNUJacFkwSWs3V1hsU09hRVdnelVSdmZrZ0pnWmdwQTUwY2Z6Qjk2VEJYTEhlZmVhRVFhU00zTUkyYUZnYWUxOUdLdFp4MUpwR0wxcHBVbHpzMWpKZzlwa0lKRkk5VXMraHJCbEZFanNmdkhEZmxKU0o1YksrMVRWbm9xU2ppSEQ0VE5kVzRTQTJJYzhZaU9aU1IwU09YS2ZYcWJZbUV4cXhzVkVaV21jaUdYYW1wT3RYWElhbFZyZlpyYTk1Z1RhQ0k5TkxqMlQyNWFOclJuNEs4L0taSUdDSEdrTzliTFIwQnpEZm41cjV0a2s2Z2NyWDFBUU1aa2RoUUFnQjluL3lvbjByemFMUTd1LzU5UEF4Z0EwSDdKeHhPUkZQWGVVMjFBdTl5MzRPZnZDaCs4eDB2RzZxbzlrRUFDQ2VSNUNoQ1NscUc0bTRnVHQ1QlUvWEVrclF6YnpVU3M3VDlkOElzYjE3YXY2SGpUZDZ4bDF3R0FXeHVnNkpKTXBSWWErclcwalpmWkpSZTU1L3NkRjA3bVIyRGtjY2M3c1B2dUQrLy9mMzg3OXAxN1IzOTFWeW4zSERKelpyTjlBTEJUOHlzVCsrczZhMXEzY0FDUWhUSEI3R1BtTXhCb05CSjJOVzlVQjkyNExVcjU1ajAvQ29kV2F2QTFnakxDMDI5eGFwbWpwVWpBUUZweHJldWR0d2lBRExRTG9kSHE3angzRERqR00zMlVpa1FpVlMyVlFNb3pZYWdob3ZROEtPUXYvdGoveWZ6OGV5TS8rSTdSRkFIOXdwL29kRUVVdFhKMTN1ckJCUmQ3eGNlUm1RREE3SWljR0ZCdUFibDl6UDBMS1o4Yll2RnIvb2EwUEhUL0Z3RUFqZWpDYXo3ZjhmUS93bGd2eis5YmxrZ3NQZmdEMGZ1RUg0c0YzYUVEQWdLZU53amdKUkwyNEJPTkQzd2VVQ3N6QkVDb2xRekYvYWlaK09WbnUzZDljOW0xZnhmZDlFSFFydlp5VUo5cHo3UUZpVmgyQnlHOHZGelFDRXhXTVJJZFhYZmo3cWUvdWVQZlAxcTRVYm5mQ1FBQUlBQkpSRUZVZXgvMnBIbTV3ZVJOZXJyRVpnYVVYbkNoV3h3azdhQ1l5blpHWkFDS1BJOGRwYTJuamljV0N0Y3EzQmx5dzVEWi92WEdHbWYyUEVVdUFzTDA3Y3RjWUhPOHBlQUtuTlR5S3VVTkxRMEkyenBXVFJWemcvMnNsMkVVVHpJYUdLQ2VzbjRHTlNJeTVwVktZSmliLy9SaitQZC9VZGoybk5FYUE2bGUrdnV3WTRTVVdaWGphLzR3MzdCWXVPTUFEQTFMbGliOHdmMEl4MDJWUUtiOUdwQzM1Tm92T1BuKzhSMC9CUUNlWHJMMHlrOTEzdnRaT0hpZmNkR24yODk3WDhPTzc0QW1aT0tsMzEwZ2dRVHlTaFRTTWh6bDR3Y1c3ZnpHbXZLV3hNN3Z5ckRGRktsb1VuRm8vTW43Vm5vajg5LytJOUc4V3ZzRnJad3BYY3VFWm9vWm1WaHBsRHNPY1B1bDM4aE1RVFFMZVgvWnB1Zlk2NGUvODJ3VUcwWEdnakNCME1LSUhuT3BKVmtPTnk0WG9lVGt2bDhCV29jSEl0V2plN09hcWNTWXFRalJEQS8xdEIxNnhFNXNsTHFFeUlrOEVnWUM0Tnc4QW14TzJ5RVUxWXJYdEdKb3lkVkZ2dFdKVjRvTjJiR0pmZXBwanhuaTFBVzR5STZaYjN0YUVORng4VzNrM0JzZnN4Y3R1L3lOTitRLzhrNnZWdU9wQkNqOWt2OE1qaExrd2lrcnd4eGI4eWRLVmxGN2dBeFJlSVA3QVdER0RHQUNaTWdFSUdxL0FnQ0xyLzdiOGQxMzFiTDdBY0RvdW16NU9XKzI5OTVScWVTZzVaeW9hYkxpSlBINlhkdEx2Y0ZBQWdua0ZTY29OR1BwWjc3V3Z2TDEwZCs1TFRiMkpDdVV2VVJDS2FmNXgyOWRubWxxZk1QTmdGeDd1ZW1YSEw0U2F5WmlJYWNrS29OS0dDK3pTeEFqWmdnQTc0SDdGcTFmdjNUelZjdlhuN2ZxZ3Nzam5VMWdITnRLbWJRQ2dJYWxWMDMyM0E4QXlJeXA2ekF3UUp6ZHUwc2E3ZGJZd0lPdFcvNDlFVnFya0JNZ3lXTFJNdHowV3ViVEhOYzVCNytCVkppTThlYUlDTVBZdWU5K2VyY1lmL2llN0o3OTdpTmxKZ1dFVHVoOFB2d3RJZU5NY0poYlZ0akoza2xyenJtUlNwdVpET09jOUZFblJzNzl3WUdXcTYvYjBObzQvSWtQc0JDQ2FaN21HVjl3aUhQdWdUYVMwb2lBOWdHSWg2UCt5Q0ZWeXlHUFRPZDNjKzNYU1BuTVNBQXk3ZVZFS05HKzhkMTlqOTVNV3BGMm9rdGVzK2gxWHo1MDcxL0w2bmdrTlorcTQ2YzVFaXNnSU9DM0ZpMXNWcGhNQ0RBV1hBZ0FLY1BBaWUxZUdKcC8rcTd1empXcEt6OEgydFZlOGVpeFB4cUZpVnhvRUtibkNtZUUrTXV1Tnk3R0l0V2h5ZkNoYmNzdXVjSUloVXdyaFhZTm05UHh6Q29nYithZEJDQWpWVWt0dkV4SlovTEFyMUJFZ1NRZ0I1QmFPampidkNOTkN1eW0rTWhqTFdXUGhib2tWUVRhc25vd24xbmtKVnE1VjV0anZQVlVqVGdraWJhRU16eWErK1pYUlc0VWtSVzM3UERSNzFpY2lUWEVmSkNlNjU4OHFZcUl1QkJDR0ZNMXpzOFhVc3FNeFlEejNVODlKVDFuMWRuckFWSDVSNTJkQVBUSTBKcjNmbkR3MHg4Yi9jSDNXMzd2YmY1dzZUY1orUFNpZ01CVWpVZ0NJaENBWWFuY3FEZXdMN1JrWTcxZEN5SWl0eWNQUEdRbjVrVmIxNEt1YVM4WDc5aVU2MzFrNktsdnp0djR4NlJLRFN1dWM4dmorMy8yc1hDeXcyUyt6NEVCbk9LckRBZ0lDRGdleHNDdmNETUdqQUZBdzRyWHAvZi8wajF3MTVLT2xZbExQZ1c2cHFVN2k2bUdVRy9ySnhRem5JTEQ1dDVVNGtWQmF4YUc2aThmYUNlZk5iWEl5YXhnNmQ3SlJ5SXJyK004ckwxajY2WkkrY2loN2V4M0hyanY3eElkRzdtWkJnQzNNdWptK3RQV0txSmpPMHhvVkV3TDAyd3hxVlhyR2dKRDBsWElsZHJmaVFnQWNvNUI4WlBIZ0ltbndzNkIvZDZIM3J6dXdOT1hORVN2YUloZWM4UFZxYlBXN0J2dTI3WjlXN2xZaWtiQ3JONGVjamFRTWMrcEtla2JwcTFQSTFHSXREWmpNUi93ZjI2N2RjZWpEMng5OU9FbkhucVF4MkxINkg1RWxLNERTbC84cmovU1gvdWI2c2c0ejBSUjYyTTJWWGU3SU5HTDZ4TWhSRTRpekk2TGh5TTMvTUc5QUFDTUF3QnB5UTByMFhGTy90Q2pRODk4RjFpSW1Ta0EyYjd4dmFYQnJVNmhEM21JWkduZXh2Y2tsNzRtdC9WV1U3dmFCbmJzTmdNSkpKQkFUaTFNSzdBVHZsK0JhaDRBN01XdmFTanU3M1Q2VXBmOVg5RE83Tm9YRUtqZStoZ0VNN2hmVmhZQWloZjlvbm9TWVF6QWYvYVIxclpXNEV5d2VLNjh0ZGFXbk5mOUp0THVMS1lnTXZLTDhmWU42VVdYYmIvMVhkSXBBc0RBdGx1Wkk0V0kwbXpXUFNlT0lGeW9JRENPbG5KNnM2bFdwL1ZjcytZaDRoelhlZEk2WUNLMGVmN0hQMXlZN1YvMXVlOUJQWk5aK3UwcjF4UTJiTmk1WmN2QlhUc0hCNGFYcjFobUNPNjRSL1hXUU1hVTd6dkZ2R0dGT3BhdEVvWWgvZU83TGM0VklRU1kxbjIzZkw4NDNIZkphMTRUbjdmZ0Y3ZmY1bVFuYk12MmZYL21rY2k0UHpFZVdYUDIyUXNmZVB3Zi8rLzhMMzFkb3dHZ3ByYXBGSmdXUzF0WU41ZkhLaTlPVDBja3JibXBMSXQ1amd4elhnUTgvTEVUOFhETUcrbVZwVkVSYTlTcUNNZ0EwWWhrMnM5OVgvODlYOWg5NjN1Ykw3OHgxYlNlbTlIMG9rdkhIdjl1NSthL0pOS2dxaTNyM21yNnBkb1QvMVJ1K3k4VmlqRzNmSnJUb1FNQ0FuN2JRT1ZSTkY1QXV6YjhYQ2l4c0R5NnpVTys3UFgvQkVCYTFrNXdTVUZTUGlrSm5BRUo3dVpacFV3aUNuNEY1MWIvZW1ZaHdtallLWHJtenFkYnI3NEtxaTRwZDBEdjdqejMwd3dON2VkbTNSUVJnYXAyWHZBaEFOcjNQNThVaVdZMTB0dWMyS0RvUkUwbFVZRHBnd01BREVYRjZjMnQrRDB5R2FzNmM0OEpudFJNUnFZZG5icitMWU1pK3N4bmJocC81ckhjM2wxK2RnSWNKNUZJbkhmdHRXOTR6M3VqcmUyUFBmYVVVM01pNFhEZERrWmtwSFcxa0plKzE3cTRlODJsbTVzWEx2VTk5MFJXOHFraFlxblVqa2NmeVkwTUxGL1JiWVJpb1dqTXNteW5VZ0UrV3dJWTV6UTZzdUtHdDZTM1BweC9kaXZQaEVCUG45bzBlY0lxZnV2bW9RKzhvL3pvSTBaVEJCZzcvZUQwcVhmQWhMU3M5SzcvV25EMzI4eHNqNXZzUUQzanBJYXBheVd2ZHpjQUE0WkE0STMxYTc4TTZIVmMvUmNOaVRXRDMvbjR3VWYrdVZUWUI2bU11MitySHUxalJrSkxCMVExZmM0ZkwyMWRuUHpGUi8wd0kyNjk3T0l3QVFFQkwzTklJNE5xWW1sMVlpOEFERHoyYnczTHJoWjJRbnY1azkzUWF3MmdBY2tQTjBWSG4xbnhzeHN6ZTc4dnc1RVgyd2FvRytKSFgvWklnWWl3N0EvK1k1NWZDeTlkRGpVWUxXMHhGNjVKTnF3bGVXSXJCWkdVUjZyYWVjR2ZkcHo5YnZQQVVJdTVoakdoNEVRTkI3VUJ0a1NQb2FHZGtjbDR0TnErV2RRMC9TWVZXZnozLy94VGlIQWlvWnB2ZGpUVHVaY08vdnpIcGNmdWQ1V2NtSnpRdmh0cmFKYTV2R2thaXpadUlvS25IMzRrRmcybDBtblhkWjF5U1VuWjBENS8wZHB6R2hjc1lhUmx0WEk2VmlibkhCbDcrdGNQcFdLaFNEVFdzV3lWVjZzZTNMdDM0ZEp1MHpLMW1xWC9zL1k4M3RJS2ZRY09EQXdtTDkrc3F4SVpJQkJ2Q09kL2ZHdjY1cjlhdWFSci9CdGZLcWFhNHh2V3E0cEVkc0pQNEFVUkx4Wk9QL2V0SlZ0dmI3Qlc4NkZmZXQ1UTB0VmhpR21jZHNzVDZFb2h0T3djWkRaeXEzRHY5MFN5aVVVYkFMeklrZ3RpS2xsKzlNN0t5SFk5T1JiRFJwa2R0SmR1UU1aSU9jaDRhT0dWNXM3dkY3S2o3ckp6UmZXTTd5V1FRQUo1VlFrQUNSUGNVbU9sMzRnMTVRNCsxSFhwSjBnN3lEZ1RJZExlOFJZdGNsdmx4NXlEejNFajRuSlhhTlZhRVNVWUxpeThSa2lOb0YrRVpZUFdhRmtpRTJJUms4Z0ExMFdPaUFDa2VTcnFsc3J1NS83czB1dmVZTWFTVVBNRzFMYm04OTRSaXJTUnJBS2VTQmtSY2dOQUl6UE1VSm9ORENybEVDTThzVUZQaUE2VVl0anNscDRaV0h4SmJmNUdvMUpCaG5QZnhTbDBOWEpRbytYSTB1V1pIejZVZmNPN3Mva1M5NXllclUvM2I5OGk0Z20vVmxQRHcyZGRjZVZWYjM3cmpsMzcrM3Y3SXFGUW9yRmwrWG1YTEQ3bi9IQXM1aGR5MG5GT3ZPRTV3U3lyT0Q2dTNGcll0cXhvbktYU2t4TVRUSWhJSXE2UDlqL1BlQTJEUW1IK3h2T3M3VTg0WlkvRndrQlVqN0E2ajkzZnNHVHA0dmQ4YVBNSFA2cS84SW5DczgrSXhqQ29NOXJJZ3JnRVA5bmwyaEdNTEc2alpmUDNQVXdJeEtacmY0bFlPT3BQRGxWM1BBaUFNai9zai9USS9EaWlJSzlHNUlRdWVrUGIxUjlOdXVuSXFDZnNxRGZlVzkzekdESWJBTFZmQllDVzEzMmw4K0NkNHNCV0dRK2pEcHB5QkFRRXpBMGlRT0NTZEdKcGpZY0dIL3BLYXNFbEFJaEFpRloxWWk4Z1AxWUJFd0FBU1FlMEJpQUVFQ0pWUTdmWXZCNFp3SXZUb0Y1cEhvdnloREgyYi8vZitKYy96OERuTVJ1MEJnQmszTEJ3N011ZldkbVlqSzVkRDRWYTBUbEVqYzJweHZWRXp1eTVVVVNJakJrSjVCSGtNUUNtVGFaTVJzby9pWk5ZZ3pMQlpzZ2RmN0FZTmlyenJ4VU8xR2ZOenAxVEdzc0lIT1ZJU1lEWi9JbS96bDN3MnNMK3ZZMnRiYjI3dG8zdDMyVWtrbG9yT1Rnd2Y4M2E2OTc5Ujd2MzlPUnJmdmZyYjRpbkcyUWg3MWVyMC9jcXB3RVJHT1prdnFCOXp4QkdOSjRFSU1zMHBlOUozOGNUelZ4RWxKVnlhTm5LK1V5UC9iK3ZHaUVFallCTUEwUXR3NmxWdldlZURLMWVmK0hsVnhULzllOElBUXpydEJaNUNsQlVxOFVsbHg5YWVubDU4aGVtMVdhRmw1RjBqbkY5ODFpbXV2MlI0Z08zbEI2OEhiaEJYZzBBZ0hIeUhkSlZhODBGc1RmY0dOcTBHWVNwblVybHFWOW9wNGhHcEY2bkJGYXk0NEwzcDUvOHNrTFE0bVZYZkJVUUVQRHlnNEJBUnFQS2lxTHJRRVBqV0xaWDVnODJyMzBUQUFFTDk5ejd1ZExRTmlhaXh3YTJFQUJBMTRwQUdwQWhDYS9XT3htU3BhNXJtVWN2UWtRUGlOQzJNSXpESDMzUGdqdS90ZkN1Lzh4KzZSTVFNWUFiSUpWb0NFODg4WGo4Vno5ZCs1WjM2WWt4WUZiT0c0aDByQVpBOHAzWjNrMHhNNFlpV3M1dE9mRHJ6L1U4OEJuZm0xQTkrL3pKWWJUREp3L3FjZUlDSStYS1U3bTJqVExWeEozcWI5b1JiRzZOT0FUWHBTb0JtRWpaZkZFcWlxZlRCNTU3cGpJMmJFUmptc2diSEdqczdIekxuMzFreDdZZDIrNzZPUmlDVGwvMUFrQjk5NHlWSnJPY2M4WlpLQnFIYWpVOWY3NVdxbWZQYm96SDZRUUdud2FnY3Vtc0c5NGticms1djJlZjBSd2hYeU1BUldLMWNxbFNLY1BFV1BzRmw2UkxrNlZkUFN4aEFzR1pUTXJUWmxubjE3eDdKQldWeGVjMEZ4eU5vNzVhSWhRR015eTNiNWQycTh5T2dKcStrVVJHeXRkK3dVaTNodGRjbnJydUE3SHozOGdqU2UwVXAxcHpJeWRWc1phOHJpTVN0cC81THo5cGdUcWpld2tra0VCZStVSk1SU0ptNzJQR3hHNFZzWWhBbDBmYnovOGdNZ01BZXgvNk1pbS9lYzN2a1N3ZmUyMUZCZ0QreERBZ0F5REJiTzBNakM1K3JaOXNFRTU5eXRBWlhybEdrVEJIdm5senkxTVBiUHJpdjY1KzI3dnB3Vi9VZW5veFlXTWtMQWtLbi8vejh6WmZqY20wcWpxZ1BkZVU4ZGExVUw4b0hxdGVpSmtwVFY3LzFxL3V2ZlZURTdjOU9ISEhBL3Z1KzZ2cXZnZE5NM0ZLRlVhQWxxU1NaUllYdkpaNWRiWHptKzJGemRWYnpRVUJpUHhFT3AyYXpPVk55MGJHRHUxOGprZ3pJWkJ6YjJRa21XbTQvcDIvSHduWjZyVGR6b2RoakFIcHd1U2taUnFBaUp5RDFzQjUxOUpsZTdkdkE4WlAxR1FMRVdXeGFIY3R2dmlxcThadXZNRXJsOHptRUFCQUpBNWFGN0xqNEhrUVR5WU41dTNmeWpnZ25NbUlCV1BDcXpJbWhqZDlZcHg2WlBXUVlMSGp2a3dOalBGNEdnMGJsTUp3cFA0TjEzY0RBTm9yQVFBd0k3THVxdlQxSHhHSmpQYUs5YWRJK1FEUWZORk5MWHR1WXhNVE9ocEJlakhDTUlFRUVzZ3JVa2pMUk5qc2YyelpReDl2My8wZEw4THN4NzYrSU5NV1huSU5BT1FPUEZBYWZtN3hhLzRXeUo4YXBqdnowaXBNclNvcVA0YUdUUUNpTmxGdFBydlEvYnRXUlFHak03NXlBQllOdWZrS3UvdTJjOS8yTGlpV1NrNHR6clRxMmNFRW1ERXgvTlcvWHlZcnJadGY3NDhNYzI1VjNGRklwZUxwYmlEdmFJOHZJZVBNU05TcUIzYi80cytHYi84SmJrdGEyRzY3Q3lxUEQyUnh2d2duUUovQ21pZFFJYmNtbTgrcE5YUVlqbzlzenZwMFd1WnNMelBVQUxxY1Q2ZFRTdFBvZURhZVRCYXpFL25oUVJFS0F4Rnk3azJNSjFLcGhXdldLcWYyd2praUNEUWhJdWRjSzYxOER4alRoY0tLY3piV0twV0JiVnRGTEhIQ2MzSHVEdzEyWFB2Rzg1Y3ZPZlRtcTZSYjB3Q1JnWjVFYzNPNWtOZWVDNHdud21FMW5nVTQvdWJvQllZWU0wdFYyYmk0NTRLYnFsaXdGZEtzaGRGRVFCcUZFUEdtK3YvckR5TXlac1ltOXR5MTkrNmJCclorclpSL0dyQmVINndCQUpCcHY4QlNpN3RXWFp0NDhMTXlCTVNOa3p0UEFnSUNmbXZSWm9pVmk4M2J2elh2dGY5b3B4ZFpEMzY3YmV6UmxrcytDUUJhVmtlZisrR0NTejhPQU5xdkhPZFRKUVJMVFk2cFlwWlpOZ0F3NmFwUUl3bGt5Z2M4dzVkUkFBQmlFVlo2NnVGV2daRmxLeUNYOVgyZkllbUtZd0RrZHV5d2Z2Q05UYi8vSGlqa0NZaWhVWkVUTE5uRTBDWTFvNXFJTkRJRGVUUS85dUNlT3o1U3ZhZmZ5blpoV0hpODR0dFZZeVJhSEp5b1JpY05DdEZKR3owcVVJd243V3FaMWFva25rLzY5NXdWTUNKSUFOK1RSSmxVSEloOHBSakQ3TWpnMUxNQXlMbGZyZnFsRXI2d25SR0pERk1Jd1RWcEpYMEFrSjdQNC9GRksxYzkrZXVId0JCNFlyYzdBYWlod1pYdit1Tno1elgxL2ZGYnkzZjhJRlVjbzJSR0dBYmpBclFLSjVJMGZJZ0FYb1JwSHNUSUxQclZqbzJ5OFd6REtaeHdZaE5wWUl5WllZQWp0d1VvYkFCLzlObmJSMzk0LzlDM2Y3THYyNTgrOFBCblBIZVlHVW5FcVVvcVVyWG9oaHZuVTlGNjRqWS9iWjJpUldoQVFNQnZKMFRhNHJ6dmtYUWtoVzBiRVhUcWlTOHN1T3d2d0U0QndNaVdXMk50YXlOTks3VmZBQUFtVEdhRWpzeGJJd0FBbVI4bDN3WEdBWUZRaUZxZWU2QmZ4SWE0cXBBTmh5d0FCSzFyMVdyWXNqQTNKZ0VtL3ZyRDUxMTRrZWpvOG9wRlJBWUVyaTdibWZrQWNDUllTWm9KRzNsNDdOQWRQWGQ4amg0M2hOdms4SUxuMVNLSlRMeXhHVXhRMjcySmFxOE9LNkhOV2J0d1RLUEJUTVlLdzJaK2w3VFk4NWhLTjJkL1BUSlFBRkpKcFlVUW1YUUNtVENzME9USWtGY3FDTk9hTWtQcmR2VUxCeEVBb21YYmlFQkVTdm9BaUF4MU5ydHk3YnFGeTdyOWZQNGt2VEFSVVVtcGhvZlcvTkdmWExSZ0h2N0xYNFhUR2NlWDBVUVNEQU44K2Yrejk5NXhkbDNWdmZoYXU1eDIrNTB1alViVmFwYmwzZ2syeGdaaU1BWU0rQ1hFa09TUkJNSkxJQ0VCSGlFOFdqb2tqelFTSUhtaEplRFF3V0F3WUxDTkxSZlpzbVdyV2IxTm43bjlsRjNXNzQ5N3AybG1wQmxMTXVRWGZULzdNM1B2T2Z1ZXNzOCthKzNWTSswZGN2Q1FzUUJjUGc5MkYySk0xRFdQUTBBNXI4eU5qTFRTOWJFWkc2MEY0RzZoSzVOZVNjTVpzejB6OXEwdHU3N3hlNldoQjFDa21mQ0FxTG5FVzNMVEI1ZnMvQXdiT0dyU0tiQUx6UWwrcnAxcjU5cC9wd1pFc2N4MkEwRHR5TVBMWC9RZXQyTURnSW5HRDlRSGQvZGMvQWF3TVpCaFR0NW9WVG44R0tCc0VmWm1tZnJoNDAySmhjaWk4SVZScUVKQVlZVVBLTTZ5UDAzek1yaVFMZ0FCVVJ5R3VWV3IydzlzMi8vaFAxcnZpYjViWHFQN2p5UG5BQUJrRlUrOGRCZEE2M2RBaGdrZm1OZi83T2NPZi9NZjJQYjJKR1lKcjdZdFdiYnU4bXMzWHZmU3p0NFZNVFY0S01NbnhrZThnOEx4QkluNWVUQVJjdDl3YjNRM0NjQ0Y4OU9KSmhiSUxwRXpvNERpQklXdzFocHRpSFN1dmJNME5EQndhSC9mNWtzaG5zdkI3QXdoNVFjMVJMQ2tsUVlBUU5SSjRycnVoVmRjbFRUcWRqNWY2T2FWTTJhMTVwVnlwbTlsMitwREJJUUEyVUk3V0FzTWdRaDRxNVlmTEd3b1RnTUlqRE5WRlVZalQ4KzdYR0ljak5FalIySEZ4WlBYWkUzTVdGYTBMVmw2cFJGeDM4RWREOFhIMDZ5UjdCdjkwSkliZjZYbnZEY3l4N1ZKeWFvU3k2OWNmc2t2Vlg3eWdmSGJQczJGZzFhZi9mczZoM000aC85S1FBVGtycFB1UHJibEV6TFQxWFhwbThqVWthY0ducnd6dC94S0pnTWJqekszVFVYamcwOThLYi95QlV3NFZvY0FnTndoaXN6NEFEb2VBQkFSTWwrb0VrdEtwdGpEUTIwOGgybUhKWFU0S1ZrK3JZc0hZQXdUbFlBeElKMGduUjJxbExQVnNjS1Q5MS94KysrR09MWmFJK2NJQ0tTdDVNSXJ0SDVKaG9rQW1IdHN4ei8zZi9kTHVMc3pOR0crdDdOMzdRWFp6aTZ3RmxReWZPU2dGTkxMKzNZd0NaOFpIcnBBdEZmN1pNdzFpK2ZpRUdoSkNXZEpidUR4eXNaZkp1bWhYcHovMDhKVjBLMDdtS2pZZzVhb05qNjZaTlhhUXRjU0U1NGt1dm0wUVRaSXBaQXhBdEE2YVZvOWtUR3RsSTZqZVNPUnBsODc1MkRwNERQYnBYU2lLQW95dVV5eDNVUVJjQjZGRFpQS01RYW5LdXAwUmtDRVFLUVlXR1JpWHVzQ0dlQ1NaOXBudWtsYkFFajFYRmloa1VMZnFrM1h2YVM0dGllc0dIaXljT3lybjl2LzhBZVVIbWRPSHBHUnFhVXV2R081Zys1ai82N3o4dm1JQ2ppSGN6aUgvMnJ3TWt1T1AvYVoydERPTlMvNU1KQkM1b1NsL2FvKzJySHhGUUNHdVczVjRSMEh2dnZCN0xMTDA5MmJDQTBnQTdLSW5oNGIwcFZSNXZyTkdHSkE0WVpWRS9pUWxIdnZ2cU45Njk4amhpUm5GN0Uva3lDald3a1BqTzVZMmtkYU16L28yYmh1Lys1ZEFNaGFUQUdOaWNGeGhaY0ZBQ0RMdUFmTTdkL3piOGZ2K2crN3ZaQlEwbmZScG8zWDNKRHQ2RlRWQ2tXUnFwVkpSN1ZhWThmVFQrODhzbTk4UzZXNjlWaS9zMXRudFVNcEpEWmJGTGFnMEYvU1BqcVUzbjJuVGpOY3BMaXpZQVpzQ1FTQUVKT09ZVUlJcFpMK2czdmRJTTFkajZabnBEcURSSjhJQ0tRZklDQUJHS1ZiTlpKYk94ZDRJZ1NsQ3JtTTQ3cHhvOUd4WkJsNm5qWWFFT05xQlRxWElRRE1sVkhyREtPWnF0TW16T2o1eFcya0tCU0Zkbi9kVlFScWFpUVJnVlN4NTRvNG02cjNQeVY1YXUxVjF5Mi9iSE5pRS9WTWV1U3I5Kys1NngyMTBqWVVXUUFPUU4zWHY3dGozemR3Yk55NjNqbG5ySE00aDNPWWdpWHJncWtjTitINHFoditHSkVaVlFHVVkwL2ZuZTdhaU13QjRNZDNmZVhRbDk3WnMrRzEyZDVMeVZSdEZJRTFUU2xManh5MWNRTmFGbDhpSnJuSXVVZCswUDNBbi9iR1BXdDIzRnQ4NUtNcWtHYzNKNldRbGdnWTAxR1k2dWhxNjFsU3ExUnloZnl6VzdjYzI3dFhaTE10dHhnaTVJSUxCd0NRTzhEOTRVTmZPZnJ0enliYk1pTHJubi85ZGIwYkx6WlJtRlFyWkF6bXNrbWo5dWlERHcyTlZqYmQrUEtyWHZ2YXdhaFVlcXdTUHpoMmJQeXBjbUZRU0VmUzdIUy9hR3ljOGMvdjJmMGRWaG8ybnI4b2Vudnlha2pUbE82V1VBSTZjcElCRTVIaitVYXJwKzc3Zmx5dk8wdVd5RUpCNW5JeW41ZkZvblFjc3ZiTWNHSnJwQ09GbEVEV1dqTS82NXIvSmhuVGNXUlVISVgxVExHOWE5VjV0bEZ2MXF1b2wwdlEzaUVCbXE1TVo4L2VBc0JFVzRwbEFGVUlPcUdXbVdRMkNGM2ZsRWVqQTlzUW5HbGQwT282WjE2dzR1S1JaQitFUnRjcXZlczNuMy85aTRwcmxzQncrOWczRHovOXVYZjBQL3Q1NUQ0QVltRk5iOS9GL280dlcyK2hqL2hjTzlmT3RmLy9OeUx5QTZ6RndmYi90K29WZnlYVEhUWWVZeklEV2lkN240SlVwbGJkdC9mSEh4bi8yc2RYWC8zT3pQb1hXS3FUaGRwRDN5YWRNSmtCQU5WL0FJV2NSckxRT3RudXArN3NLenV5ZUdYaVphSzI5WXdBNld6Vlp3TUwzbmtYanhPRDBqampISXhldW1ZOUlDcWxpN2xNVkJtZldCd0FZOXlvMEtvRUFKQ24rdmYvNTY0di9sWDh1TmUrZXNVRk43MGsyOW1qU21OV2F3Q1NmZ0NJMy8zNjF6T2R2YS8rblhlczNiU3hkdVNnSlpQcUNYQ01xNStFZzAvdDZuZDJxMHppVUFvSnA3TmhBbVhkWWo3QzRPaVBqUXNUQmZjVzFFNWFEZWtFTm9hQVhFeFgxWksxYnBDSzY5WER6endPUjlxR0RoelFTZ0ZRb2JOcjNlWUwzWjRsVUttb2V1MjBQTE1RU2V2QTl4M1hEV3V4TlFhTUFjUkZzWFprekNvVE51cEFzT3FDUzVGejFWQ01NUUFLMC9uU1AvNnBuOCszM1h5cnJwR053ak52dXRERWl3RVRVSHZnUHRGM25paTJBNTEwTkJoSHg2dmUvMldlYVpQdGZUYVpxTjFCQ0VDZHExOThjTWQ5eGxRUXVDcVhzc1dPN0pXZDFiWERwUU9EcFFOSEQvejdKMGF1Zm5UNTVXL05GdGJuMTd6SWYvQ3pvUUZnQW1iVnN6eUhjemlILzViZ09vM3B1LzUwemRMei9lVXZKRjBGWkloT3VPdSt0TW1GZTdjUGJYOUFIajYyN0xyM3VKZmVTS2JHdUtmRGtmakFkcmR2UFYvZG9jZU9KTWVmNVVGMkdnVW1SdGJ6bGdWOGJWUjU3SGhIVzNYRDYwU2pTWENlSzlrL0NSQ3BUcW0xcTBlRDlOaUJ2Y1hObHlibGt0L1dzWHpEcHIzYkh2TlRhUnZYS1d3d3pxMjFUS1NvV3ErVTk2Y3lLdzgrL2NuUis3N2FXYjZvL2RwVmJXdVdRNktTY3FscHdXVElzSzN0ZTUvK1p5bWRWLzd2UDBxZTNiWGxXMTg1Y0h4NDdmcnpVbjRxNGdrM2twNngxWUdCOEtKS2U4ZUtYTFZMbTlpZ25sQTRveUVsUlh0NlpFOWRBNkFEODladk9CRmlvVU5FRmhnajE3ZEdUMmVtUkpUT0ZYYnYzS1VzVzNiZWVRWGZUN1ErZHZqUTdxZTJkZlF1dStpcWEvTExsOFBZZUJJMldtNXBpNGZSMmduU1FUWlhLNDBacForRHF6Y3kxTm8weXFYVkYxNmU2dXhVcFhGa2pERUdVZFN3Y1AzMTF4MzYySHNPUFBIZ2lqLzZDK0NCclRlQW56a2ViSUMxKzdaU0h2M0hQN09mK3JoNC9XOFYvdUpqd1BCa1BKZ3N1Z0VtY2ZtZXp4UnUvVjBlRkZvOEdKRk1QVWd0NTB0WGplM2QwMUc0ek5xS3F0ZVFzVXkybUxtOHE3ZTZyalowV1duZnpzTmpmNUk2NzZvTVZHSGp5Nmw1RWRQUFJqQzFnamtMTDhnNW5NTTUvSnpDa3M0N1l1ZFBsNVozRkc3K1lqUFBCc3FVVmZYRzNrZDVwcGdlQ3luay9yVnZjcSsrbVNnaW81Q25LVW5RY2VwUC9GQ1A5aWNEQjRGTEVCSW1vbm9zR0VsK2lCVnJHbzE0LzlqNmR3RUhOUEhaYzhJaUZVdnVxVldiQnZZK1ViemlXaWlEcmxWNzFtNks2L1VqZTNZZ3NxaGU5OU1aRTRXRXB0ZS82TkMyYjR3OWM1YzNVTnBjdUUzMjVjRXh1bGF6MWphNUx3S0lmUDZCLy96aTBNREFIZS81SXpwKy9NRFdMZU9OcEcvRmltSWhWNnMxRUJFRVlJR0ppbU4rRWcxZXNDdFoxMml2THdlRkJsV1RCeE1wN3VUOXNJcGh3OHFBNllVejRJWGVOREVBNDZkVXJGTFRRbWFsNENPam8yR2lYL2RiYjRPdWJxalZ3S2lMckIwK2RQQ3BMVnUrOHgrZjcrN3RlOUd0cjNKUzdjbkl5SFBqd1dRdGNKSEs1cU42VFRnT09BN1VGMWRhbUN6cEpGNis0WUlsYTlicGFybTVrVW1uT2paV0dSNjg0WlpiMTkvNHNoKzgvMTBIcXRVVmYvNlBwQnpTWnlxaW5GamVVMGNPVkg3M0RXMzE4YTVYdjJMSG5xY2EyeDhXN1VVWUpKaXJKQ1VDWjhTdDBTeGJNT05ENWUvOVMrR1czMkZPMWlZVlFFNUdJNGZpcXV2RzluNnF3MW9BQkFRaVVtR0RRdUNDWjVZVk11cEZTM1JwNk9sdEQ5M3pZL2pnOTdJZW1KcWRYRktRc2J3WUlBTUVNREhZYWdQUDRHcmpITTdoSEg2T1FjSWhEZm1uUHQxNzlWc0FlWk9xSURyUndTZlV3Q0htQm03dlduLzkxYzZ5RFVRUnFiQ1ZIUUdCZVNteU50eTVoZmxwNW1mQVRtblVMQmlKUGtPdk1ucnY0UExMNGhWWE9oVjE5cmh2OHo0SXdMdnErc0Z0OTIyTVFzNllNY2FFalJXWFhFbEUrN1p2clpmSC9Yd0JBUlNFS2FkclpRMWlYYzFuTGlObWxDcERUSUE0NlVqRXVJaExKUlhIdDk3eEp2RDl5dTRkdzBPRHhHVXVtd3JEcU5XdEtlMW5rQ2ZTYmpWajlVUDJJdE5KcTBHYmZURFVBQUFnQUVsRVFWUmJpd1lBQ1N3d1h5WWpMQmtGTndDOTBLTElDellRa21VQWtNcVRuYUhNTk1aa00ya3U1RU4zZlgzMHdYc3IrL2VZMFRHSWtvNGxTMS84eTIrNDlkZmVIQ1hKWi8vNm95UDkvYzdTWG5odVZtRkVRQ2lQRGdYNS9QTHpMN1JKc3RqU3dsb2xmanJUdDJHemlTTnJiSXU1Y2w2cjFWSzV2STFDME9iR1AvdWI3dnZ2T3Y3UEgzZXlBaGMrTEtjWU5FQ09Kaks4WHUyNS9ISzN2VHRMdXZxRmYwTEhnMWxyRVFKaXhKR3pKQnN5UndqRmVLRlRsd2JMOTM0T2dLTU1tcW5QaWVMMnBTOHdYZTJWeG42Qi9xUlRPaUphWTFYVVNNdzRvdWhaZnN2YTR1V0Q3L2xWQk9BcEh5MGhBRm9TZVY4Zk9UTDR4Ny9YLy9FL0F6Uk9ld0Q2YkZtK3o3Vno3Vno3T1dyVzJnd1hPKy91OFFLNThzV2s2NEFjRUtCcDF1VWljKzFyY2pmOXVyTnNnelZWVWxHekRoSkJ6TE41bEFFQzhYd25PaDdZRSsxWkFvU01hOGZiMG1PWC80NklBWTA2Mi9kQ0VlU3Z1MjRrbGF2djI4T0RBQUdNaW0zWVdIbnAxWDNyTmxWR2g0R2F6cm9zc1hYUEtlYURWUW9hMmtZdC9kODBHS1BSMmhlOTZqVU9aL1g5KzhkSEJwV2l0a0plQ21GUFNFVnBBU1N3QW1lN1JPbXBvNk9adzVMNVNKTkxEVVJya1V3elgrWUNHMy9UdS85NFFUMkptQytTbmJ2ODNZLzVIZDFtd21mWVduQmRKNTN5OSs3ZFAzajBpSzJYUzBNRFViMmVLN1NaV3QxMW5QTis0VHBtOUQxZi9FS2hXR3pmdUJHcVZTSmFsSHlKeUV5U2hMWHFtb3N1OTlKcEZUWVdFbm8wNnlCb2pTYXlVeDdVV3J1dTE3ZHFOZWRjMTJ0Y09zczNYZmpNdjMyQ3ZlVDFibHVPUW5VR3Nvb2pVQXh1YjN0dHoyNjJlNXZYMGVVRzZmcXhQYmxsdWF6YlkreU1Xb3FjT0VnY3N2dEdqeDZPZ3BvVHBOM1lnMVNRSE44TEpuR1hiZ1RRWUMxWXhYZ1FtWEwxd01ORmY0T0ZDQUJuM0NnZ2dhR28wbm50TmRHOTM5Mi8vMURIRFM4MkNRQVJlQzV3S0wzbnplZnRlNkl3Y0dqdlY3K1F2dmwxSWgxUTJGeXgvdXhKeExsMnJwMXJaNmNCTUdra3l6MzBzVldiWHlXS3F5Y3I0eElrSXQrWnZlTFZzck92U2RSSlR5dmJSNWJKckJvK3BFZVBNZGVmazdveUVLeHhwSC85eStPK3pVNGxPdXZFeElMTWltVHJvNGYrNzRlNjFtMXNXN1hhTmhxSXpCb0RSbmYwTHZkUzZVa05PUUphc0xabGxNVzV1UU5qb0pTMXhpaEZqT1dMUmRPb0dLSzVVend4UUJmaEdFVk9oUzl6VW5FYmtXSG9DQk9WK1hocDlTME1YV3c1QzUrNnNZVS9QZ0NBZkNGT05FNFRRQkVoanBQQWN6ZHYyc0RkNE9EeDRiQlJPN0o3KzU2dFc3anZtMFNwdzRjMjMzalR6Yi82Ni9kODZZdFBmUDl1dnJTWGN6NWZDYU01UVVUVzZPVWJOdnRCT3FuVm5nUDNiUjZFYUlaYWdLeVZVdmhCWUxSR3p0WFlxRmk1NW9MVkt3Yis5c09NQTNBQmNQcFRCY0ZvQkJCWFhGY3RWY2hhenRpU3Z1VmdMYlhxWmt5Qm8xUHp4eXI3QnV4OVNlMkJvZjdhamloYmQ0d24ybnJxVC80NDNMMEZlWHJDbmMxMHJib3h6c2s0SHVRNFovRkJ0TWJTMk9qVmIzMTc2aHVmNmYvaDk1eThCQXM4eFdxNzkvaWpRejNYMzNUSnUvL1BoUktPdlBzdEtBQWNlU1p1OWx3NzE4NjFuOWRtUWVjRTMvbWpIdFR1NnBlUW1TaWNSeFlKUldHWmtvM0JaNzl3OE1FL3F3L3RRcG1hOHZLMUZnQmsxektnZVVzTkVsakIwbjd0R0NnZ3pzL3VqUkN4ckJkSGNlT2o3N3Y4cXF1ZjNiZVA0cGh4RGdDSWFMWFdjZUw2cWNWcFNZbXN0VUxJSUozcVhyL0pUMlhDTUp3M3dTSUJjR0JwQVUvUzhMNTk0NFZqekJQazI1cTNyN3ppS2lwbXVRY2czSWtnNlZPMEJldGFFUkdBWlFLTC9JU2F3NGdZeFFrUXJWdmRWOGhueDZxTlFtZlgwSkdEQjdjOXl0TnBZQ3c1ZkxoMy9ZYlh2K1AzdC83b2h3OTgrVTdXMmNXRVdNd0FFZVBjcUVRdExPM0dRb0ZvclZWeGpCTWFhVHM4dFBIVi95UDcwRDFqMjU2UWVRbTI1U2gxV2hPR29UVVFYSFY5bU85TVN1T1dTRGhTU21mMjdST25LS3l5WVNiYXBXeTQ2cjV3b0xZcnlUUmN5SWg4ZS9XblgxTUQrNW5NQWhEcHV1TzB1Y3MzalRaMk0vRG1ESGhIeGxTdGh1bk1qYi8yRzlYM3Y2MDJPQ0RhUFFCZ0ppU2dnY01Id21lZnZmRHQ3KzdlOWRqd1BYZkxyRmlVNi95NWRxNmRhLysxR2toSkJySTdQOTk1MGUwQVFDWUJtQ3FGTzNUZ0t6cy8veHVIUHYzL2pueiszd2UyMzRrb3AvTDVJd0JNMmlybmhnV0xMSEJydzB3RE1IRjJiNFJ4NmNDeGozNW9HVVJYdmZWMzE1eDNucXJWcHVkTElMSkdxNVBrSjU0UFJHUzFnVGdDQkp5bnlONUVWd0FKekJlMDFZNXMyMzg4MmpWMDVLYzdkalhHTHJtRGxBbEh4bGdHUmRFRGMrcWNuSXZqWnp5Yk4wS1NPakc3SVNJYWErdU5zTHVyWFhKZUtsV0tuWjFIOSs0ZTN2K3N6T1lBTVRsK3ZORGUvaXQvK0o1OTI1Lzg0UmMreTFNcHRraUhyTVhhZlo4RGRCaXlZdnRsVjEwMTl0ZnZCd0IwSlRvdXo3akErSE1QYUVhZ212RTZpMmJEeGRXamg2WHJHS1V0SUV4VVVHajFJbVlkbytvaGhBZ1NJWU5DeStUK1duKzhLOG1HbnVqa1hycjBvOC9aeGppVGVXc1VBT1NYWFZrVFZiREpmQzhHY3E0R0JuS1hYWDN0WlpjZWVkc2JBSUFCY01lM2pLazRycGZIUWJwckw3b2t2UGM3QVBBODFLTDQ3d2c2aTQzbWFmUHUrSy9RbW9xcVdYZDBHdTBjQU5DU3lYSzU3YXRMWE5kZGRTT1pHaUFETXN3cEFQRERUM3pzMEpmL1RqMWs3S0djUjh1WTAvVE1uVEp0QW9BcGo4TDhwa01DeTBUR2lVSVdWb0F2bXZNdEFvYWN2Qng3OGtuLzdqc3Z2UDBPS0pmWFhud3BFcGt6eUIyTWNYMmY4MU9KaUFRZ0FYMU91d2tlcjBmYjdiNXY3UnA2MngzSjc3OUp2ZnVPL3Q5NFRiVHJHVm53OEZTcTNnVjdRVGVqVjRwZHhrdVJWaURtempTV0pLcVl6dzZPaktkVFFTcVRPYlRqeVd4YmgvUjhFMGZKOExCWExQN1NiLzMyTTQ4K0VwZkxqdU9ZeFNpaW53Y2c1Mlp3b084VnIxN3lvVDg2OWg5ZldQbExiNmdyVUtObHJ6TkhWU0NsNGVUTG92bGdFZ2ErYzlrTHF3OThwMU53aUFobXVjZ0prcEZzSkpVR0tnWXVnQVhNTWxGeG92dXF4Ni9aMFZGWWxYSzc5ZkJROWZ0ZnlMM2lMZHh0QTlERjdrdkhPbnNhby8xZTBHVkl6WDFxenZYUkkrZjk4cThOZmVSOSt6N3dydlVmK010NnJnalNSYkFxaWFGUnl5OWQ1dTdacnl5Z2RFREZjeC9rNXdjTGU4dm02VVdULzNFaUZHc2FjT29EUTZCbVB3YUlBQVFFd0xBVmJ3Q0FUVU5BcTgrMFdsd0V5QURZMUttUVErdGswNzlPZHNicE8xc1hNWHVHSVp6WWJiNmVDOFRaSkpBTHhhTG81WFJPaXJNWXE1MituVnFmSnVQZVd4OEl5QUlna0lYV2cyc3VWWWdtZmphcFg2WG1Bd2VFeWFFNmNjUitIa1p3NFNDeWpnT05PTC83enE0YjNnM1FLaC9PbkFLQlBiRGxnNlAzUElDSHVoT01sbDl4Q1crdnhha2lBRXpMSEVBQWdOSUZvK2RQd0VEQVhTZXVZekpvZ3l5UEp5YjNHYjRSUUZjU3dQQmZ2dmZGdi9BQzBia2tPWFlFT1lmbklPM09CMFRTMnZOVGp1c3JsUWdwVDlLWExFbEhlTm5nNE41RHh3YUhOMXkxZVZWSFd6NmJkYnU2K3grNDk4SDMvQ2IrMjNlZGROYlc0NU1NaFZpRVA1UUJudXN5cWF5Skl5WmRPOWVUTU1aNnJ1TzVjbkJvZEZsdjkramc0T0NoZlgyYkx6VnhoSnduWTJPT0gxeDg0MHZVK0poUnowL3h5TVhCR01PVnV1bzF0OS96L1R2NzB4Nzg2TnZtbWEzeEszOGwvNy9lWmFvSXhqeVhXY1c0MXBDKzdzYVJmMm1ySHQ3djlmVWFGVnRISTdMSmROQWtzYUtHOWZGRU9vNHhLZ2tieUxnTVBCRks5ZU42LzhabjByMmRxV1Z0T0hLRVBmRDV6UFcvQ2lBUVFER2xiY0tBblNUTGhqV0dSa2V1ZmZ1N2h0Nzd6cU0zdlRMVnZVUld4bGpQZVFBQVNaSXB0SGw2VHp4U0M0cHBxMDc3blprMUkrYVlJak9uRFFKTXVEcE1aR3RwT1JFeUFKamF3eWJZR3dBd1FEN3h0YlcvOVhjYUZ6MXhDOHpjZFpJdE5PdnpKTkhIRTdlakJURFRUbWNzMkduR2ZkMkl3ZG9KWW9RbXFwRnB1UUVpWnlhS2RMMDZHWnVIbkt0NlZUZHF5Q2VXeFloZ3JhcFV5SnJwTlRlUk0xMXQyQ1ErMFNLRERLeU5HOVhXU2VjQUltTkpXTmRSeUo3SDRuSFRZYTF4MDFudU9EUXIrU3RaS3p4ZmVzRlVxQVVCa0JYWkRBalJORWFTdFRLZFpwNUgxcEl4M0hXZFRMNzEyUTlFa0NhdGdUSHVwNW9TRy9jOUFHQU1PQU1Md0Z1UzNZeXBNZmxsOXFOdlBuYzdLVkViSUFQV0FGa0FhOEZhSUVzVGhlRG1ZZGMvYXhEcU5ITis4aSs5SFN0Rno4VldWd0NRT1hrQ3RlK243eS9kOHlnYzd0UnV2T2J5cXpwV1huSzAvNXNpc3dRQWlDYm5NWklOZzAzWHFmNURldXc0Q3pKejhXQUNKbVdzV0gxSWQ1OG5QTThDbUhHRlNHZHdOTWlDbSthSHYvajVaU05IK3Q3NkZqUFkvNXh6UzV3RXhtanBCMTQ2SFEwUENzZVoxK3hONUxtdU1XcnJ3MXZCVDkvd3V0dDcxNjF0TGR5TWRqcTdjT2NlU2dqU2NQSzFpRmpvK0NDQUFsRUlRcy9YOVdHWkxjQmM4aXNpSkVybGM5bVJzVks1WEhQOVlIeG9jR205eXFWcytUb2xNU1NMcXhmeGZBSVowMk5qMlN1dmFkdSsvZGlIM3JGKzdZcFZMM3ZwNDkvL2N1bXE2d3FYWFdsS3p5bWZGQUpWRTdlUUMvN1grdy84N3pkdjZPb0NJc3NNbTdDbEM1S3hYNnNkR1dDRFRIbXhIMlI2TjJ5dURBK1Vod1pEVzJkS2lLMnljckMvMGpZbzI0TFM0Ujg3UDlnSCtjNUc2WEMyd2pLcFBrMm5pSXBHQUdqdmZQWDdQdkQxVDM5MFNIb2JWNndnQUxJV2xCWnQ3VzdVQ0kvc1NuZGVka3FoaEdDU1JFM0tkQXlSQWNPbWQxaFRZa1RlRWdSUE5ONmNvTldhK1hueTdKT0VEeWYrTnBrY0FCZ0xBRUNhZEMxRUxreGNKNldSczZSU0Jtc0lRSlhIQ0JHTVZaVXlNQWJHNmtxMXliM2plcFhJTWk2U1drVW5DWGVrYm9TcVdrVWhrRWhWeHEzVlREZzJicWphT0RLT1hPaDZXVGZxeURreVptb05FOFhJR1hKbUdyRnV4TWdZTUFaRzIyU2lUQXBEU0JScDAvS1ZJNkl3SXR2MHhVQkVzR0dEakpuUW95QWpnemFocVhjQkJSS2JvVTBqUk1idENkb3dBa1MwbkN5YzRJMUJSSndMS1p6NW5SeUpFRnduelFCUFd1WDByQUVCQ0JOVnQ5Yk9Ka3VJcUhXaXJjWHB6SkVJbUpsUVN3QUFHTlRBQ0FnUndJQTFUQUFRa3JVb2lVa2tDOGlZSHdBQklURGZSd0lRREtRRWE1bnJBU0x6SE9aS0pqaFBlY3h4aFovbWJvcDVLZTZuZUpBV2dTLzl3UEZUd3ZWNUVJaE1TbVp5TXB0elVqbWVTbkhmZFIzZ0FBZ01KcDRsVGN4U284RWtRRW9CMlRNcG1UMW5FRm5mWmVOajdjZnViMy9GWHdCWXNKbzVSVzBxKys5L2YvWGVuZVpRRVZMSnhtdXV5L2IwMGNqUk9rWkxPamJNUElJRlpJaVM3RWt5MkFNQmNtMGxhS09oL0szL2RDNitJcjFpdWRKZ0t6R2VDYVUwV1JKWnQxR3RKdi82c1N0Zjh6cElFbVBNbVhRSm1qd1JFWEFSWlBOakE4ZG5hNTRtKzNpZUc0WFJrMDg5dmVLQ2k2NTcyUytDRUZDcjZ5Z2NHVHhXM3J0ejJ6ZS9IdnpwcDRQT25Db2xKNThFaTFCQmd3YnVBV1F5cG5STXpuOVFJa0tFdGtLV0NhbmpxRHc4VUI0ZEtTN3RNNm82d1hkLzl0TnlYbGdyMnR2MzNYL2Z5TUR4VFMrNEp0dlpVN2orWmQ3VE84c2pRMnlDRFR3SElBTlQwVzB2dmZub2xqc09mL3VMYXk1N2pXRktnR2ZCQWdCaklxU3lQcDV3SmxYU1dOSzV0bVA5QlIyOWZXRzVVaDRaTEEwUDFNdmphaWlDNDZoNHc3aFcyd081cnNLeXRaY1VVMnVNamFldFZlZTRIU2VmSHpwMDZQNS8vZlRhU3k4L3I3ZG45OE1QcGw1d2JXVm9NRWxpc0FaUzZUVFk2ckdEZU9sbEo3c0JBZ0tVR1NrNDhHbmM5QVJEbXdFd0FEYXhPa3lzaWt4VU4yR29HdzBkMWt3anRGRnN3c2lvV0NleGprT2R4TG9SbWppMlVkM0dzWW5yTm01WWxlaDZCU3dsMVRwanFHdVJWUWJJMmlRR2hoUW5DRWhhVXhRRDV6WnFrTmFBeUd6YzVIY09FU0VpRVZxQlRTMnhhYjJpam5TYWJuZXU5Smh3cmRXY0NUSGhEY2NFRjR4Wll4M0pzNEZyTFZscmZUL3czY0RhMkZyaitSa3BPeXdaVWtha2ZkN21rN0ZrRFhkY1A1MXJDbk5ralpkcEU2NXZqUVlpWk14SjU1RXhtbkFmbGFrMGN0WThvN1hXZFIzSDlleEVaamRqYkNwSXVXNWdKK1EvSWtMR2ZEK05pTk41TUJGSjMyT2NuNUFWam9nWTQ5SU5KZ3luY3p4SUltQmVDcGg4RGhubHpnQ2FldDI0Ym8zQ1dXNEh5SmhPWXFVU05yRkdhZkpmRllaa1c0b1NaQ3dNYTBZcHhoaERIcXV3WHE5eHpoaGpTUnpIVWN5NUlHTlVvNGJBaUd4U0hVZkdkUkpGMVZFbW5LaGUxbHFSMVNhT2JLS1RTbFdic0I0ZXRkcEdZV0tCdERhaE1WcEhTc1hHYWdzR3VUWE1hR1NHdWN4TjhWUUFqc044enltbW5ZNTJyNjNQNjFxU2F1OEt1bnRTcTFhbGx5NVBCVktBTkFDTkVFeDRadGpQYVFDdEI4NkRuKzFaY2dGbSs2d2FaMDVSNmVHOVAzeGY1VWY3ek5HMDI4SFhYZm5DZEVjWGpkZXEwVEhvYk0va3p5TTdMYmlSTVVTM3R2VXVOWGhBRkh2bWxMdWE0Q0RkdG56cGtTZWozL3ZsNUlLTEdqZS9ybmo3bTVtZm8xaWZ2c1NGakVzQkJ6LytweHZiOHBtTHIxQkhEdUpaVXVFUWdUVzV0bzVES21sVUs0NGZDQ0VBcHB5UWlNaDFIS1hVMXExUFh2cmlteTU2NmN1Zy96Z0lwenpjZjJEblU4bmc4ZVBibnZUZTgxZHR0LzJ5cWhxY2JXNmNpY1hZZ0szbUlHeStJM2wyVzRxZFZPMXB5V3JsZWtIZitndDJicm52MkxPN2lrdjdXcFRvNXh0Y1NodkgyeDk1dUt1ekRZWG9YclVXaGdlcmlYWldiSGp1NUlvQWlEQXZMRURuZXo1eTdJRUhCcmM4MHZhYTI2SE9BQUVKamF2RGFobkhBVnpnbXFleUJTaVhWRmozZ3NCZnM3NTd4ZXBHcFZ3dGpUYktwU1NPSlhkeXVZNjI3bVhnQ0sxcmM5aVRwMEY0WGxTci9lU3ViNjArZjFPalZuM21rWWN2M0h3Qk01b0FWUndCRVJBZ3d3bmRMczB3WUU3QUd2S0tyZzlRQzZPaEhVODNqaDJMeGtjYTQ2UHgyS2l1akNUbElWMnBxRXBvR3JIVkNTaE5jV0xqeENZaDZKaUJFVVFjQ0t4Z3hLeEJ6cmdRbkhPWGM4a1paMElpWTREZ09WSTZYQWlaOHRNRTRBVmRhSWtYQTJTY0MrRUhPV3VVbDIzblhDTGpUaVpIV25NLzRLNWpqZlVDbjNFT1JPbFVIaEVBd1E4eXpZRnhmSzg1UUk3ckF6SXltbmxwRUJLTUJ1R0E0N1g0a09NMnE2MjFSUGptYUNDZklod3RpeUMyYk1nejA3Rk8rMnhuNktxbm5ET25mVzNwcnhHc21ha3JSakFLckczSi9zM25RaGJNckxSMk9LRU5tRzJjSkFJN3kxRFN0SGl6MXJXRE5VRFBwYWpKNG9BQWRzNzMzVUtRWmpneDAyakdBSW9nSnhocjJkMmJQMGZ3R0o5bUJxYzBFOEJZeTBHTGNlQml3azdQV3R0aG1uUTl1ZWh2bVRHd05VcFRweVlnQzJRQkNiUUdwVUFyVUpGTlFxMWpIU2Nxak1PdzJnaXJqVEJTMWJxdWxldWx3VVpsSkttWEs4OGNHeS92YXNSbU5Dd25wcXFFMFg2YjdHakxyRisvNHBiYjE3N3F0c1J6by9HWS9leDRNQWtIS2xHaHZDZC8zZThDQUpPRk9ENnk2MXQvVUxyblNLRDdPaTVjMXJmdWZPSDVTWG5jWWRtS0duQzdMd0ZnWkNhVU9tU1lMQ1FEZXh0UDNjZHpIU2Zodm9DSUJOeEV0YTFQTEx2MG92Ynoxai83dHg4Y09YNjA4OE4vcXpYTXp0MnhPQmdTUlRHK1o2LzNnMjljOUx1L1I2TWpOTnROZWNJUWNGb25BZ0JFSFRYU3VjS0dLMTg0MG4ra05qN1dxSllaNDlMMXVCQkVKSVJnakcxOWVOdm1hMTV3MFkwMzZVT0hoQitFMWZLT1IrNFBrRlUxMGdmK3NmT1Z0K2tHZ1Q2MTI5QWlpakUwM3djc2RwTTFwMVJmTVNIR2h3ZDdOMnkrNUJkZmZmaXB4NU5hbFhQK2M4NkFpWWhsc2dlZmZ0cEVqVXgzSVNoMCtIMnJ4aDY4dDViT3RhOVpZOExuOW5RSkVIbmVpWThOc0hRaG5YTnpmLzdKeWovOEVzUU53Q3dBY1hCaXB4RWRxMkhJSVEyZ2dZQ2F1bHFkUkJSSGpMRWdrdzBLUlNBTGxvQXhRRFJSdzZnR1RscEI1N2tmOUx5aDNidE5FbDV5NlNXdzdueUJ1Ry83dHMwWGJtS2NHOVZNNjJFaVN6eVRhNHFCSXNzSndKUlVpMVFSRVdDKzZFVGw4Uis4OTUySHZ2YWxJRzY0R0VnWkJINEdwZlJjMlpGT3BWSjV4KytRaFpUcnA5eFUzazNsaFo5aXJpczlYN3JTOTN6WERSelg0MEp5VndvaHVaQW9QQkFPU0FlNEFNNUJpQmFKWkF3WW4vSlFtblJBbXRKVFQ1RFhwdnRNVXd1b1RZdnNUdVkyTVJvUWdHR3J5aVExTldtQWlHQU1rQUYwZ0N4UU5ORS9ubEo3VHpIUTZaeDE4dXMwdlJUTjdETXg3RE4vQlZOWGV3TG0wSEJOWm5jSFNDeVkrVXk1QUlpZ2JZdGJ6M0hjV1J2TVNZOTJOdEJVL0xJWjN2NFRtRENhRUFGaklLWXQrNXFhWENJUUhNU1UydmxFdDZ2SlBBY0dRTS8wem0wdGxTWi9ocTBUSWM0NENFNjRiMDArR3ByWWdRaXV3enpmQVhRUUFWbU9DK0FDR0c4WkY1QUJNcURtVWtaQkhFRjFMQ3lORGc4UERoODdPcnIzOFdjZmYrVEJmMzN0N2hkZGNjdVBIcWFNbTlSbVdldWZIeEJZRDlqdWh3cEJrUlhYQThCby93UFBmdWREN0NteHZPZTZ6dk9YQllWT2lzS2tXa2JHZ0V3b0dzWE9qUk5qZ1VDV09SbFNVZldCcnpBM2hVS2lKU1JHYUdmUFpySldGbnYwb3oraWh4L3plNWJKWENHL1llTmdXdzhBekhDTGVHNlFuQUVNLy8ySHI5cTBrUy9wVlVjT3o3VCtFaERJVkFxa3BIcGRKY2xwanJhMVJEb3A5aTR2OXZaRmxYSjVkTGc4UEZBZEg0MHJkUzVsb2IxdDY2TlA5SjIzL3ZLWHY5d01IQWVHd1BEQTlzZWxkT3o0YUxtOXIvT1Z0MmtGbEN3b0g2ZFl6Q3RKQ01EYU9oT2w4WlRsNjVFQjRzRCszYXV2ZnRIcUN5OU5HblY3ZWo3UFJGWUl5UnpIeExFeDVteVlWeGdBQ0g3MDRQNU15a05rbmIzTGdiUGh3d2ZOK290Y0FhcW1GeG0wQlFCQUJwMkNEQS9zSDczanBYejVxdHJyMzV5NzlYWHVlLzlTUGZBVm5yOFlBQkJaQkRVOUduUGdDRWdFcG1sVGJDcmNtcW1lb3hDZ2FVZkVsajRUY2JZR2J3NGdHaURKK2ZHRCs1WmtDcGZlOU5LQlkwZVBIVDNlMFY2Z3B1d1YxaE1tUkVjM0FvZ01IL25ZaDkwTEw4L2YrTEtrckFHSkFOdHk4dGdqRDN6bHhiL1FnNm5YdmUxRDZ6WmRXaWprblh3Qk1rVklwVUF3WU5EU1NrKzZLazBubXJicG1HVEFtTllDd2xvZzJ4TCt5QUJwc0FUUmhEeW43WlNubXpaZ0pvTFoxVlFTVTJveEhtenlGZElUbjRsSVRkUmdRUUJMTFhOczg4aUdTTnNXZFVZQWJVaWJ5VlMzWUlpU2FZb3lCcFJNMU4yYUdFbElOQm1hV3RJaWdES2s3SXhGTGdJbEd1eE0zeE5FVW1iaTdETzJnNXA1bHVtN3RLVTVkMDExTUdRVzZPU0NZSnBIVzBqbk13UUNGQno0bkF4NFdoK09JR2FGK1JFaDV5Q20vWllBQkFjeG9YVW5Rc0ZSOG9sMUdLSWpta0l6U2dhU04vUGNvTk1rMDRpdUFDSkFobzRBc3VBSVpJZ01nVEZnZ0p3RFErUU1PRVBPa0NGd0Jwd0JReEFNT0FNTjBEU0E0c1I2c0hsZGxzQVFFSUliK0QzWnZ1VWIrNjV4UWNxWHVEQzZlL3VIWHJiNW5qZSs5aFdmL2ZLb0ZQZ3ppdmhBQUhRem5NZGFIejM4ekhlcVQ5elZWN3U0NDRyMXNqc05jYXpLNHdDQWpIR1FZVHhrY3BsYzV5WUEzYVNGeUFXQXFHMzVxcW1NaW82bFhIRndVTHVKREIxakZPRU10a3BrWkw0cmVlUjcyZHB3c0daalZLdVY2NUYzMGVWTmhjTnByZndzeVF3ZmVlelJ3ak5iMTc3cnZYWm84TVE4dmdReWt4bnJQejQyWGxxemRxMlRTcXZ4c2ROSlJ0MjBYaVcxQ2tOMC9hQnI5ZHF1RmFzYjVWSmxhSUNzZXZ6aGg5RkwzZkQ2MThQNHVFNlVteXVNSE5wYkdoNG9kSFNOMXhwbTc2N2t5RkZuV2E5ZG1CLzRZbXpBQUFEQXMya3pWeG1CRTBFa0hiZFdHdGZqSTF5STAxMEFXdXZrODZCTmFXZ28zOUVPV3B2NHpDOHFoZWZYK2dmR0JnZTZDeGtubGMwVTJpQnNDTStuc1NFQUFNRVdyVWdoNGltcG8zam9YYit4b3F2Z0IrendYNzNyeU4xMzkvNlBhMFJIRHlRV0FLMWp3MW9aUnduZDFsSmQ2MWt4UlpQcE14ZXJackhXbFE2VHNqSSsxbDJyc1BhT05SczNQZjNRL2UzRm5IUmRjRDA5UEpBNG50UFJ4d0hLano4cVB2M25qVXdCbDMwL3QyNWpXRW9LZWVmNEV3OS81c3BmK01VYmIzbmpwNzRKZVlBeVFiVUs0MVU0MGc5UlFzWllZOGhZMG9hMEJVdVVhR0JJaVc3eVNFcDBpMTdGRTNaTnBadHlEeVdHakFXR1lBa1MzYUp1azB3RmtaU2VUQmRHeWdCUmkzMHFBNWFBQVNDU25pN1lFZWtKTXRmaXVETVlNSmhwTFBBRWdnOHdFY0l5YmRzSkFoUE4xdmZQeHgzbjNEaG5DTWM4YnlrUnNsTVY4V3lsUlZ1QVZxbWwwSDdlRmFGRUorTytBQzF0OEp4OWlNak9KTnpUSFFDeEtRN1F6RjBuZHAxNkVoTURoWWlUV29rbWkwVkVFQXdCUVNBd2hwd0JSeEM4NlhBSGdxTmdJRGh6T0RvQ1hZRlNvQ2ZSbGVoSjVuSjBKZk1kU0VrUUJpaUJ1b0ZhRElscHUrQ0NkMzd5NisvL3pWZGQrUHVQZDE1MFNhMWtUcEhiNGZReGRXTlRkODlxbXEyNWJQL3dqaU4vOWRyT0ZaZHZDbDdKT3dvRU5WVXFUUXdMQUJCRHR4SWRrYXRXQ3A0aFhRRUFBSXM4R3g5OE10enpLRy9ya2NwUnFXZzRPUkFOMUhKdDNVVmFhaWlaNFJuSVVOWERUSHZSVytHb0tMRmhUZWM3VTJzM0U4RzhyOGtDSVFVQWpIL3FZeSs4NUJMSVpIWDEyQXpyTDVITTVvN3RmZmIrNzk0bEdEM3o2Q05YM3ZTUzd0V3IxZURnYVJhRWFFNFZuVVFRUjhpWW4wb0hWMTV6OUltdEEwT2pyLy90L3dYR0pQVzZjQnhLNG9HRCt4M1BqK01FdktETkhHbHNmOXhiMW12QkxpVE54cUlZTUFJQXl4YU5jRnE1T0U3NmNna3B3MXExUERiYzFyc0NrdVM1di8vV3lxNnV3YjM3SHYzeEQ2dWpJMzNucmJ2bXBTOURZODV3R0RFUitQN3hYVHRKeFo3WDVxVUNsQTZFWWZ2NkMrdy8vVjM5OWw4UHpyOUFqZXZGdVZRd3dSd2MvSXMvYVI4KzFIYmpTNVZTNjViMjlULzhwUG5LYm5YYkswV0pDU3NUSndvSEsxam5rRVlBSUNLdDFCbVRWSWk0bEk3cmhiVnlyVHllTGJabEN3WGtJa25pcmtJUlhLODZOaEpMbVc3UEVFRHQyM2V1dVBpU3d0TGxXLzd3TjV4Ly8xNG1uNDdMbFM5ZGN0WE5yM2pWSGQvNkdqdyttbngvaHpwZTFzTTFXNDBnU2toYk1oWU1UVnFHcHJHeGFXbzluRWtZWm9xR1Uyd1ZabkVkTmlsV1QwL0VRMDJiOFpRbDlZUURUa0l3SnZtTVhTZU82c3daZkFLdFgrQWpXTVNUT2h2MDkrZmFwck13TEdwWXBqK1llZTU5YnVlenlhYzkwMERROG9nakFnRGRpaWtpSXJETkpDQkExazVac3Fjc0lBalFyS0xMMFJYb08rZzdMTzJKOW94WVZwREwyNkhEaFlNSCsyNjY5Ykx6MW03NVArKzg3UnYzZ2hDbmF3YzlDWWdBT2M5eEJOQjFJSlZNTW5zbVVRRHMrTkpEMXliTGwxLzFjanMra01RalNHd21OVVlncXVKNGR1a3JBS0RwUXMrY3JJM0sxUzNmd25ST2txOVR5ZkY0Wi9SUUNRZHc3SnBEL3Nwc1VNMHFuSjQ1Z01Dd0lKMnVlUTBFRm8yTjZJNGVaMG1uaVU1djRsc1NXVGJ5MkdOdGgzZXZlTWU3N1BEd0NiNVhpQWljUC9YSWxzMHZ2SDVaTWZ2UVBkKzk1ODcvdVA3VzI1YXRXNnVHaDJmWHZGazhXaFhueUdnOU5Qam92ZmZlY01zck01MWR5ZkhqeUJsM3ZOTGc4VnA1TEZjb0RnNlB1cTZYVGFjcXorNGdlQ1VBWDhqcktSWWIrOG5hT3JVYmtFcFF1cWVJWkVCRWhOTFFZRnZ2eXVmT2ZZMlJIUjNIOSt6NTRaZnY3Q2xtcnJudHRnZnV2Vy9mTTArdnVmZ1NNejUrQmhmMXpZVmFYSzE2dm11SmhIUUJpT0lvMTl1WHlXVUgvK1FQVnY3NzkxZ2dLZEtMMEg0akVvQTVmc1dXYmFJQUFDQUFTVVJCVkRqVDBXNk5qY05JTWV3NC8zeXpWS3VvN2xPS29RalpzQjRLT2NvSll5ZHFwYzRNWFNVQ3h5bVBqcVo4MTJnYmhXSFdtR3c2TGFSampNMFYyd0NoT2pKaWw2NzBHTlNHU3ZLcGg2bVk3cjd5QlJlVnlvOSs0QSt1L3VnLzNmbnJ0L2N0Nzdyakg3K20vdTZoMm9QYnpWaElSQ2dGT2h3RmIzRzQyU3h3VHU0MTk1aWRjaVRubEkwV09nQUx3TWxGMktrenpYdk8rWGJRekM4TEZGWG5CMDcrbVhGY21uUDduQWQ0M3VYZnVUR0xhTXlXWG1ubWxEcFJQWDN5bzdkd29yWi82dS9NUDRnQUoyajBaZ1JCblhocE15NktESkcydHRTQW9Tb1pHeG1Ma291bEJXZmRFdS84YnBhSEY3LzlmWC83amplT0Q0OTVIY1c0ZkZZTVoyUUpwWlFwSE52NnFCNGNhTHY1Rm1vSW14aGtTSWFjTEQ5NjE3ZVdiUC9KK3ZkOXhKU1BXekRZREJDY0JnNGlUa1owTHNoM1hkUzByaU1YQUt6NjBMZHNXSE9MZlNCaEVQZEdXOHF5NUVFRzlLR2t2bXdzNExucGRrZ2l5OEVGTGd3WmoyTlVMdVBGTndnQWxaalRTUzlBbkNGQStZdWZ2R3I5T3Noa2RhVnlZdXd2QWxnamhFejVmbWI1bXQ1Vks0UFI4ZnZ2K3Vhck8vK25sMDZyUnVOTWpUa1I2VnJ0SmE5NmRhcXRxQVlHVUhBQUFJYjFjZ2tCbGRMRzJNRDNyTy9qb1QwV0FCMEI2dFJWZ2NWaUY2QTgyNlpUR2FzVlNQZVVseXc5dnp3Nm5OVEswdlYwSEMrYUNCQ0pkTG94TnZhVGIzNTllVzluNy9JVnhmTXZiSHQ2UjdWY091T3BFeGtpR0tPTTlsM1hHQ09rQTRoYWErbUk1Uys0NFlGUGZMejBuNS92ZU4ydlJERTdJZmp5WkxDYWdmUnZ2bjNrejkrUnQ3YTVLazNpeElhV09BaHlsQi9YS2lNNGhPZzErUllpZ0VyT1RFWXE3amltSGc0ZlBwakpwSzIxanVkQm9sS1pEQk1DcGV2bkNtQlVlWHkwbmtnWFlQQ0gzMGhYUnB3MWZRUDdudDM0cTc4NThFOS8vL0JmZnVUd1QrOSt6MXMrQmYvMy90S1dCMWg3anJlbEozVldKeU9EYyt0VTUrdzY1ZjF5Q2c0My84UkJ3Rmw4YU5KU043UGZ4SVptQ3ZUbWdkbTBpVFQ5Y3l1dWVlSzYyTFNrVmdqSUpqMmxBV0RxYSt1S1d3SFJNelRZYzJ1bDU5b3d2OUYzVHB4MDhLWjFvd2xsdzg4VVRXWDRYTTcyRTVpTFhKK29vNllUMXplenR0T0VPN3FscGs4WFdESUFhTWsyQlY0Q1N3QkV0cFVBRTRnbTRyS21BazVtY0poSnJ0Mzhod0NBQXB1VUE0S0ppelpXOTVmVS9xSG93U0QxNU9DRzYyL3M3RWp2LzhvWExubkw3OFJ3VnBRZ1RISW5oVWYvK2ErZEwzMHFpUFhZd1YzdHYvMkhaQUdNNFdtWktGMzd4RWV1Zi9rckFablJlazZ6SFVPbkVoMFZ2YjJPTEpLdUFoTHlWSFJnYTdSL205TzJUSUFjVGgyc1B6SWl4aHdvSUJoZ1ZSYVd5cWFnV1lOYm5CRHJFY0JhQkNJT2pQR3dWcE9yTnlBQWtqMmxKL0M4SUJCcFhqMTBOUDNzMDZ2dWVDT05qYzYrZnJJRVhLU3oyZjc5KzVaZit3dVpqcVVtVVdtdi9PVERXNjU2eFMxWXI1K3BsYWN4UnJxdWNCeFZyVTNkRVZGWXJ4S0F0ZFJlTEFpR05wdmpZOE5xck9ZVzBsYWQrb2t2UmdXTlFCcDROcU5kVDlWTElwV2RuY3ZtQkhBaEc1WHkrUEJnMStwMUVDK2FyeEFScHRQYmYvS1R3QkhGUWlGVjdBUms5VXE1ME5GeDVxTVlFVUVidE5aMXBDV1FqZ05FRmdpTXliYTFMYnZpU3ZQNWZ5aS80S1pVVDVjdXF3VlBLVFFLY2plOHRQOHpLNnNIOXFSWHJZc2FEWlNNeWlaU0ZaRnp4MlYvdUt2RUlnN1pLV0t1a3hpc09TSDBjOUd3bHVWeSs3ZHRDeXRqMmU0dVM1REs1Q2dLTWZCZFA4aDJMQUhIQWEyeGM2bjV4bGVPZlBrRmZPZVR4V1c5aHJCUkxvR3hOOXorSzMvNDYyOWNXVnl4YW45WHVmU01XTlVGOWhRbXZSYnhtOGIzcHFTTVNjNkhnTUFBc01ucVdDdmRGY1BXWDBSZ3pRQ1ZKa3ViY3ZPZUhxc3plYXlwRFRpREQwMW5OalRKd08wa24xWTJJVElNR0FBa0pyWkVETEg1bWF4RlJBVFVwSTFWQ0sxc2xIRVNXYktJREJHc3RXRVNZdE1WRHRBQ3hTcWtpZUpsQ0tpTVVsYXh5Y3hJeUtPa3JrMHl5YWNaWTBtU1JIRjl1ajZOSVZNbWlaSUdtN200UkVCbFZhTERPUUpuRVlsc3BCdXpwTVlaVHdhUnhTclVWck16dld4ZExDeFpWN2lTdTNhTzk1ZUF3QlVCWTN3NkMyVElQUkZNZFNMck9TbkJoU1VpYXppWGdaOG1zcGFNNUs3ckJFUUdBRnp1TnQ4ZzEvRVJFQkFESjdCa0hlbHl4aEdaUUlISUJFckJPQmVTbzJEWUxJQ0dFMHJtNXRKdU1sZWx0VlpyMHRwcVE5cFlQYkVQY0xvMW1pSFBCWkFQS0ZTMXU3ZTZSMjFQcXVmSS9kKzg1QzIvZzJkQkMwMFczQXpyLy9aWHhhYytldk1mZjNoa3ovWUh2L1BsK3ExMytFdTdiWVVjQ1hzKzl1ZnJYTjUyN2ZYNnlPRjVuV1lJNmxRS3VxOEdBREtLdVFVVGxXdGI3bkpTN1M1TGorZVBqZTgreFBjeHpESWdCRWFvZUR4WUMzdkttVVpIRERWc1dUcWJMZzRrUFRjOE9sajFNbTJYWFdNc0xJaFVObVVQajVNR21GbG9nQ0dVdnYrMTFia1U2MTZxQnZybk51c2EzZDNYdCtQeHgyRnNaTW1xdGFXQm94MGRoYUZqUi9YWXVIQmRyZVpKMDd0SU5LZVRtc2JGT0JlVXhQWFNtSFFjMS9kVkZDcXR2WFJHSE5takR1ejBpNWN2aEVVdDBnbkxBUGNBUGMvV2tnV0s5bHlJOGNIK3JoV3JHV056WnE4OENhUVFWSzJPRFE4V2kzbmdzcU4zaFJrYTFGcTN0N2VmbGxGNUxpQUFrVVVraGd5SXVKQUF3QUJ0dGRaV0tOend4djk1N042N0gveklIMno0aDgrQjVLMG96QVVjbEJwYTVrVHExOTUrNkEvdXVHRDVLdWs0Q2hMUkVJMWRwVU1YYlVzTzFIRS9Zc0FtUkVIaW5LczQwbkhDR0RlekEwQVhETzY2NGZqNGdSM2JDOFY4MkdpMDlmVEtWRm8zYW9JOEJQQXlHU0RTbGZMNlN5N3JXN3YyMi8vMEY2bENJYjFwUTZWVTBvQVFoNG1saWd1M0xua1pPSzVPYzJaTzl1QXNXY0ZrSUZLU3V4Tit4Uk1rYkRLaGZpdnpFbW1yaUxReTJvSlZPaVlnWlJVQUtaVllzc3FxSklrUk1WWWhBR2hybEZFTWVaVFVMU2tBVmc5ckNHakpoRWtkZ1JIWVNOV2JsRExXRFV1V014N3JTQnZGbUxCV2h5Wmt6YnJjSmxIV05KbWlKdFhrV0FSa1FFOHNGRWlUSWlKQVFHQ2FsQ1dOaUVCSVFDZ05NWnlJTVNYdTh3bWZLZ1FnZEdaSXFJUkkwekkzRVpIMEhDYW04UlZMM0pGT3UwdlRJbVdKaUFuQlBVa3p3bWNKQUJqanlPY3dLVmxMVERBLzdVNFQyK1o0UElDWUxhUUR3VTRzTU43Qzh5Y1hNODdDYW1POFhtRjgxbUlDRUJtTVZNdEcwelF5aTBSa3RaNXlGbUJvb3NRcTAzUmpOc29rdFJBWklxS05qQnBOc0xuS014TUIyUWswQlYwVFdrQkF6YTBHempoSHdRQVpDbXlGRDNPQlVqTG1jTWZobnVTdUszeVhlNjRNVW40bThET2VEQUluU1B2WndFMEZJcDN4QzRBQ0FLS2tYRk1WampQY2dvQUFQWUc5UlJpdnIzRFc3Tm4xY01NUUQ5RFV6dlI0cGtSWXJkVSs5ZGV2ZXZOYldhNDRPbGJ5R0tuOXU0S2wzVExMUi9mdTQxLy8zR1Z2L3owYUg3UHowR3NFSkpNb0QvS0ZWUUNBMGdQQThQNXZpUmpZa3VLb2QyaDAzMEhZUml3dExaaTRXdWRTT2ltZkR0Rm83eEUzblJGMTE3QXBEa2RJVHVBZWZPSUovcHZ2REpiMkpOVUZMRGdzZ1NPbEQxRmloYzlRQ0Z2WExhTUE1d2JBUHYxWXo1cTFvTlRjamhtSUVNV2RuZDI3RUtQQlFXOXBiNjV6aVZHeEhSby92SC8vcWdzMzA5allXY3BJeG9Tb2pvOEN3N2FlM3RMUUlDQWhNdUJDcURBZTZnZUFoZmlTTERnVlpSTVdHQUQ0S1d0UExJZzBONGdjMTZ1T2pkVEhSbE9GTnR0WWpFS0FDSU5nK05neDFhZ0ZYVzJwUWh2TDVXdUhEakxFWEw0QVoyaGRNL09NeUJsTGdCam5YTW9tZmRVcVNhZlQ2UGxyWDNYNzdnKzl0LytldTN0dmVsbFlzampidWorbi9RbEIxMjNiVGI5NDdBMXYyL1hGVDZ5NzVWWnlIQlMydExONjVPbWpLNHBMbU9RZ3BuN0xoWWpETUE0YnFWemU2T2VhTHB1SStmN3duajBVTjRMT1ltbGt0TkRaM2VTS3BKVFdTbkFPMWxwdEJPUFpWZWZkY052cmRqLzIwMFFwclZTbTBBWTlTMy93eWIvbE5YN3BzaGVHOGZCSlREaEVGZ0hiZ2lVQTZ2RG8zdkhxV0VNMTZtRzVFZFVqMVZBNlRHeVVxQ2l4U3RsWVdhMk10ZGp5M1dveFBBQkR5bHFMRGhGWTVqRG1NaUFDaVloZ0VTMURKSktlQ3h5QndNMzVUZTR1ZktmbEVDTkVjL0Q5dE1NNDA5cW1zMEUyeUdodEdHTWQ2YVVBUU5ZSTZYTGhFRmxyYkpESmNDbkpHQ0lLQ2xudVNES0dMTG5wRkplU3JDV3lYRGhDZWtDMm1hckJUN3VNYzdKa3lYTEdNdGxXZHFvbUl3OENINUUzTlpaa1NVZ3BoRE9sMHJSV2VpNmZWb0tUck9WU1FzcWRrYXJDRWtnQnJqdER6ZERrODR3RHl2blY4WlAxejArQytmWTJwYmVUTExCb0xqb3llK1BKRHpMN3R5ZHNtYndTZTZMcW5pd1lOV05MSElNMnJVUWwydGhhQkUxbXJMV0tXakdnS29tSkNCazJHaUdRTlphcWxUcGpHSWVKU2l5QTBpYXhTcXN3VWxFUzErcEpITWRSUkZZbGNSelZ3MFl0SEsxVmRLSkJxYVFXUmVOMTBob1QwaFhOdGVjeDMyTkJtMWRjMGIzNTJnM1h0ZnZkSTQwQnprNk1qU0d5NU5IcVZWZXFCNzViMnJhMTg5TExHcWNYanpOcklFa0tHUDd4UGNzY1RGMTZaZVBaM2NaYWJwUk9vdVppcmY4ajczemhGWmVKM3VYSmlZR3owNEhHUnNiQm9MZ1NBSkFGOFk2Zk5rYWZVc3ZUMWVwVDRUUGp1SStCZ0VaVUZseDJybHFybzdBOE9paGpKM3FtWExsbW9KMHRONkJhVjRQb09QN3dqc2ZLUFN0NjMvUldyUUR0cWZUUFJDQzQ0MFAvNXo4VmYrNlQzdVZYdHYveDN6QmZOSU1tMEVXVmdCZldDdDFySVFybmtlQUpoS2czYWdRa2ZCL2lPTi9STmQ1L0pCVjRoL1krdTJyelpvWUxOeGt1RGtZcjZYcXJObDF5Wk04T3JXTEg4NG1JQUYzQnc5SFJVNzZRVFN5bUdBTUFOSzAzZmxvbmlpRXVSSi9DT0RkS2pRNGNTM1YyTGVwRUFBRFNHUm9ZUUNJaFJMYlFCaW9KQ2dXdDllam95SktWcTgrd0VJd0kxZ2dHQU1TNDVFSTI0MXNRVVd0TmxiTFQyWG5OYmJkLzQ4L2VWYnptaFc0K1VHVTlWWGlMQUFCWmxqRUFDMkFyWm9vZUlvQzJKbUZMMy9YQkkwbTg4eHVmM2ZDeW05RjFTQktWRURzNTBJeXNKc2lZanNJb3JLZUtiYWQxTzlvRXJzemxzdFZ5T1owdkZMcVhtcWpCaFVqcWRiS1V6V1JCYStUY0dNUEd4bnpmeldTelNaSUEwTksrbFJDcmh4Lzc4WVU5bC9wdXgxajE0SHpyUjB0R01qZWI3WDNxNEwxZit1bW5hdTZRM3g2UWRMeHM0TFQ3eUFXWDNBMWtLdVBuVXpuSGRaaVFYRGllN3dzcHZWeUtjZUVFUG1PTVN4OEl2SlRMR0xxT0U2UThheWtJZkFEa25Bc3ByYldPNnpMT2lJQ2wvWmJPMlhOYkZGczRMVkc3cGE5dU1vWkpjak45STV2R05taGlMMDNiYXljMndzVEd5WHUzTTlpR25WUk9ZSE8wVzZrZXNEVTBKNmJJTUFhSXBxb2ZOVFhpY2JQUHRJVmJhS0RhbUtGdko5TzZ3cW1JV0FzbkpCOGxBTENuU0c0MXI0Qk1BT3hrSGhVNFVmdGkrcUZhVlorbUhRU3hLUkZPTyt6c2k1blFOVXhaRFNiM1RMUGFUMU1sdEg0MXcwSGRBbmNCRVl4dFhqdkxwcHBYSlJCRWdUV05VMTZUV0JObEJHc3BrNlZvcGpVK2NZRTg0eS9OYUZhRFZsQUxWVFZVS3FuVmEyTWo1VnFsV2hrZUhEOTI3T2lCNDNkdC9jOXZmUDN6NzcvNWI3cFRLMGNhUi9tTUVRQUVERlc5TTdzczI0RGhaeDViMHN6MmVnWkpGZ0VBNklGajdSM3RZRzJpRlZsci9qLzIzanZPa3VzcUYvM1czcnZDaVozVDlIUlAwaVJwTktPUnJHUlpraVVuNFFDWVlLNk53V0FNRjhQRHZFZTZYSzREMlJpNGhJZUJpd00yR0REQnhyYXdzY0hHc3F3Y1I5Sm9OSG1tZTJZNnA1TlBwYjNYKzZQTzZUN2RmYnFudTJka0M5NTh2L3IxNzNTZHFsMjdxdmJaYTYvMHJUQmlTQWM0OWZkL3UrbkNpUjN2K3FBZVg3MW9BVXNyNVlidW1TZi9vcjMzSUpmSEMwY2U4TU1nT0RTS1VXTnlPbFMrWmJuZC9UdTZCN2FtKzdmNGsyT0hIeHczQ1phVHNqZzVsZTNza1dXbEtRS0RGSmxJano1L1BQdUJUenEyMGdDM1dEb2ZRYXl5aGhkT1Nvejh6Y2ZVSDMvZ3RlLysyV2MvOFJmalczZjN2K3RuUWw4QVJpcmtEei92NU9ZU216YWJGVHlZeklEalRJMlBLOHRTMlN5WEs3YWJJQ2xiV2pMVCtVS1ltN01zSzd6czJob3pBQjJHYm1mWDdPRkR1YW54ZEd2N1BBRzdWQmFQbjJNQXdyb29mL0Y2ODRBWklFNm1UYlRXWUdBR2JOZWRHeC9kdEgyM3RHd2RyVmkvZGdsaTBxTHA4YkZrMGdXZ25BU0NVR1F6cVV6MjNPbFRtNjdleDRYODViUXRFQmtkeFdWWXBKTEtVdHpncGlJaHdzbkpqbHZ2ZU5senp6ejVubmZzKy9nL2laUXlsUWlDV0VPbXBaU29UTTlXbm5zNmZmQkdwNjBsTE9xRm5rblMxUWlrQnQvN084TkNIdi9jSjY3OXJqZmJqa00yUVlDV3M0b3hCOVZLM0tVTjN3dUFxRm94T3RKR0QrN1pSOHJTMVlwTXBZcWxJc0RKZEpxaitzZ1FWTXpOaFdGa2tVaWswNmt0V3dzbmpvMFBUYjlwL3pzYStLR1dnc0ZLMk5uV3JaOTk1TU4vYytnenIzL1A2Kzc2dmpkdjZtK3hMVWVsRTBpN1VBNG9yajBqNmxKd2Z1NWJyc21KT3JtUmdkYkFQSU5WTE1sRS9DOEJpS0xhMmZtNlJPUnFUZmladWlobGd4cHhmRU5kdWxvSkd3RVljQVFJRU1QRWFjcFVLM01UeTJNVDFTUUt6MHMxQWtjdzlheGlqaFllQzRkMXUzVE13NlZydDhsUjdTcHhmN2dlajBFRUU0RjF6VVEvZjduNUo4T0xLZTlaMXdneWwreFpJa1Y0dyt5U0RCSVFhZ1VKelNDRmhtQzAya3VwU2VXR3cwQVFhdkV4cWtacUJvQU55S29MY2diaXVTbCtRWUJRQzErUnRjQUpLcXg2NHhLUWdBRUpDQXQxMHdmaVZNdGFiYXo1UWtjU0JKQUF4L1ZBYXRaTUFCQnk2WE1ERmw0RTVyOGswSHcvQWVWYTdRbExVRktKYnNldUQyTUpFSFQ0K3ovNG83Lzl1Wi8vNDNkOHhwV3B3SGhMUkUyby9aWkVaMGN5UFhua0VjSlAwakw2N2tzQ0NRTnd1V2c3Q1VUYVVwYXdyRVRDeVo4K1Zyemw5dkpIZitjTlAvZ09HT2d3WEVVQU0xaVRIclFQVHA1NVlmcnhqODZjR1JFNkt5c3VBZ09IM001TWQ4LzJydjdCUkZzbm9sRFBURHFwZEthanF6QXphYk1ibkMrWGUrZmFxRThqQXFDa1ZUMTFrdTk0VGNjYnZvT0IyUzk5d2QyNU83VnJUOUE0R1M2R1RJblM1SFQ1ci83ayszL201KzNyYitwNDlKc1RqOThmdmV0bllBc09JWUg4MXo2LzIxVm9iWThteHB2TzlnUkFpc21SQ3gwOVBSRFNHSzJVRWxMWmxpVkZwVkFvZHZSMFgwWnpLVE5ieWlMSGhoQklKRXZuemc0ZmV6NlJ6czVMWDgyc0hJZm1wZ3dBQlZ6TWk3aE9BUndURnJrSllPMEdKMWEyVXk3a1pzZEh1bmZzMG9WZ2piTUVDWUVvaXNMQXNTd0dDVUZnZ3lDNGFzL2VweDU1RU5XS1V1cnlwZ0lUQ1NHRTFrWXBXeWw3U1p3SUUrbXhzZjN2ZlBmMHIvL1A0Ny8rUDY1Ky80YzhSeGxQV3kxU004Yi8vSGZGZmY5S2s2T3pMUjJ0SC9xWXUrc2FYVjRnSGlKSnBoSkZLYlhsVjM1cnFGSSs4VzlmNkx2OUxpbXQ1cE1lVWVCWEwvMTJkS1RMK2Z5TzYyNW8yYndsek04UkVTd3JYeWhBa0pWTzYzSjUvc2pBOTBtSUtJeXluVDNvNkR4eTMxZWtSenZhOS9oaGFlWGdXOVBTc3UxTFQvejVwNTc3ekc5ODZmZXVmZjMzZ21maGF4aENGS0lZd2ZoZ1hpQzlRa3g5eFlBR2MwMkQ1UGh2VENUSk5SRVNpelFDVEFnU2Rja25ZTUw2YkI0dVNGa1NnSzU5NFBoRDdIaGVKb0M1TG9BWHlhcjQ5OUVvYTFGVE91TjJUQU05MWp6SjhLTFgxdWg0YUdxdG5mKzJmdnlTUjdwVUVWejg3ZEk5M0R5N2YvbUo2d0FqV3I4SmV2bllYU3BhQ09ERysxN2N6cExudHV6RTJvZjVIZk90MWJYVitacVVKT0pFMlBwQ29TNXJhK0VJY1dpVnJKMFNhK29rQUFrU0VCSTB2Nm42dndwQ0FRcENnUVJJMWZhUVZTUFJKQUhqUTFmUXYva1hQdm5uUC9iZ0hWOCs5TGV2UC9pdW1kSVpXcHpTWkdBZ25PN3NqbU5IRG11QUxMcFk2YkwxSUxidStoVmhXVEJHS2hWRnVudnYxZVZERHgxLytCdXZlKzNyRXZ0djRBdm43V3hMVU1pdklvTU5od1RaNjE3ZjI3TnZGcVA1dWFtSWZlWGFtZGJPMXE0ZWxjN0E5OE5pTGw2cVNoSzI0N0xXU0JCTlVDazNuVWwwQ2s4WU1ycGNrYmJULy9zZjhVdmx5Vi8vQmV1cm55dG5XK2hUWDA0TmJnOEt1c213WlFpQnFYLysyejI5WGZiZWEvWHhZeUtaZEhOZVVBcWRsQ1ZjVWNxWDhOWFA3M25MRDZCVVdtbHdLOXYycDZabXAyZjIzWGdUUEM4dUNDYVZGYUdpaEtqNlBxU3FMZEF2RGF5MTVUalUxbVp5dWNsend4WFBjOU9aMHNpUTdUaENOSmlJbUtWbG9WSmkxT2hLVjhjNmZjQnNDRks0cVhYOTJobFFsajA5ZXE1N3l6WWg1Um81S1lsSUI0RVVwSVExendDbFM2V0J2WHVmZXZqQkU0ZWUyblhqelpjeEZaaU5sb21FNVNaRHZ5cWtrbzRUZVl1a0lCSHBNQkRGNHQyLytMNTczLzlMSjFLcFhULy9mdTNJWUc1MjVEMXY3eHcra2RtMlpkKzcvdnZZTis5NzhyTi90KzEvL2RiU201VEU1Y2hrMU5iZi9LTnpQNXYzdi82MTFIVTMwcEprbGZneW9DaW82MVZyWGVZc2c2RDg3R1NtczJ2THZvT21YR0ptQWlCa09aOTNIQmVxOWtoSkNHZ2RWS3RFWk5pa3M2MFE0dWl4Wi90Uy9XMXVUODZmYm1vOE1xemJFNXVHSnA3NDJCUC84SUhQL3ZLMXIvOEJUSjVDNk1FYlJ6QUxYWVhSTlJVd2xuYXgxWlFOWUdCaW02b0dZcExZMk8wWFcvenFTNWE2cTdUKzcveERXQ0lKR2lmb1JjK3c0YkM2UFhuQnlrb0xPVUtMZ3F2cnY2SjU1WXdJd20xMjNXWmdOSWlIaHAyTGU3cWlHL2RiZ0ZWRzB5cjkyV0JYR3k2MnZpSGM2QTlldkcvSlA3V0NDdkZTSUxZOHg0dXRFSWhYVnZHUk5jYm5tcUcreWJYUThIN25SNVNvNmVXeEFCWVdTRUhZa0M1a0FpcUIxQmJZclJnZXdyYnIzdlNldC83SGUvLzVudjAvWUFzbk10SGlDekRZOUhYc2VHYmlZVjlEV1lqOHkvZjI0Nmo3L0p4S0pvR1lQb1RaZGpQQlRGOCtaN0xYZi83M1BnZ3BYL2tkYjJqcDdnbEx4WlhzaFFReU1Eb3FDQ1hhcnhwc3g1WTYxU3NaM3d2eU9ZcXZWVHZia0JBQVFaSElTMjgwWDcyNm1QYmFERHpXSnIzN21qUC8vcm5wRC8vbEptOXM2L2Q5NzhUaFo0ZmUvZGJOSC8yczFiMVpWNWN4b1FySkFBOGQ3OWwrRllJd0NFTUc0SHVtVWhMcE5nczQ4YUZmMmRmUmx0eTdMengvdm5uOE16TTV6dlR3Y0NxVDd1cmZiTXBsQUtTVWtJb05Ld0dqTDE0TzRlSmdCclBkMVFXdEgvL2l2U05EUTA0eVpUbDJ0Vmd5b1gvVmpxME16SWMzTXJOMFhmSThVMlhsRUM3MnV0ZFRqQUdJRjZLb2xWVlk4dytMMlhZVGhabnAzTVJvNjZaQlhjaXZrVVdTUWJabFNXM213NmNqcmFYdERGeTFjM1I0ZU5jdEw3K3NJUTBFc0Y4cEI1N1gxdE9MWnJXYlNJaXdXTERiMjkvdzN0KzQ5MWQvK1pUdDd2cVpYeHI2MVYvb0d6dlRkdHZMazZuVzVQNGIvVWNmb1k2dWVvT0xJU2txYXF0RkR2emhKMDYvL2ZWMDlwVG91VlZIeTR3VUFsRVl3akNKamR1cmpPOW4yam9IOTF3THc5Rjg1WGFpbVlueGREb0RLVXc5YlFZVTUxdkYwNWxHdFRwOFlmaXF0bjJRdHVIbVNmUktLTEtkdi96cTc5NzU5djBIditjOW1EcUozREhrajhDZkFldWFtNjNtMUNQVW5YNjFFc0dMWnJxNk5TL3VpYVFtTW14ZUppL2g3bGtpaUJjRVc0T3NFNkx4djFyNzgyOTF1V3NxZHVvM1NrMjFiQkc3cEpIYXpxWGtCbUJBVUJ3NDFnU3JEOXUxak9vTmpQeHZpOVJIM1hLd3BzTVcvVjgzU0RSN2dvdjBaMGJVb0dyck9tTm9UTlFzNm9Ua05aTUdBL1U2UzNGc3Z6RjF1emd2L2h0VHZFVkFDRlRxSzhoNHBSaEFwYkQ1dTVEb2dqZjJxamUvNmQvLzROTkhSdzVkM1hmRDNQS2dSYU03MndhRFU1K3ZuQnZLYnR1NnR1RFZ0U0Z1S1F4a3dxbFowSW1xcGRLbXJZTlZnL3Z1L2Z4cmZ1aUhoeDUvOVA1Lys4cDN2ZlBINU1XU1VJaUlEWWVsRXBaeXppL3ZjRzFXSWtmb0MwRnAyM1RLYWtNSXNseHcyZnpsaDY1SzluYmMvS3BTc2RpNS8vcnF2MzF4K3BQL3AvOVhmbE12Y1dRQUVHQkFHaTFzQjR6QTl5S3BXcng4K2RuSHUxN3p1clAvOXFYVWZmY2UvTUJ2bTZrcFhuSHRRS1phYldsdnYrV1ZkN0h2YTJPSUNJSXMyNHFNVmtwSnJGU1NhNjFnWTVSbGk1NmVDODhmdnY4TG4wdTF0dDc0bXRmMjl2U3FiQXZjeEgxLy9WZW5UNS9kczJlWFYzZFJzekdXNjhxaUg1VUtWcUxsb3FuMzZ5VGlXT1VuY1pIemlJUVlIejdiMmpjZzFsZ1dpVmtvWVZrS2VzSDlUa1I2ZG5iZmRRZkxoWUtPNlV3dkU1VGo1aWRHaTdOVDE3ejhsYjNiZGtXVmN0UERTTXBnZHNidTZIclRlMy96dmsvLzdmTkhuKytkRytsNDJVMFJ5eDIzM0lIUjg2ZUd6cmYrWC9jWU5NaWR4dE1WaFFWalowWGZuL3hONmFlK1R4ZHljTnhGejVNaFNMQ09XRWRFZ2pkYWd6ankvWUZkVjRNNUtKZGk2VXNBZEtRc3E3Mm5CMkZZRTJ0YVE2bldydTdjMUlSbDI5VnFKUmdkTGMzbXR2YnRYaWxua1dHeWJ0L3p3L2NQODlUUGYrQWpNRE00OTBXVVQwSWtZS1VYR1VpWklRaDJuT1VSWi9sUy9VUGRnS1lXTDhYbUplaUNham92c0JmVEx5eE02N1ZzekxvTnVPN01JNElmb2JGOGdxOFhqRkVFK0hyaDJ6aW94NjlQajRUWThSeDV1cDdkVzd1YTcwWGF4RWxHQzIvWDk2S0ZCVTJza1JGRmtmR0RSdktqZXUrSndrcG85TUx4RGJkUHpCeFd3bm5wUTdINGlBMFk4OGNZRHF0Tm5FdDZoZDhWRWRpd1h3bVhMbHhlWkxBeFVrazd1U1N4Q29nWEo0c1piYXlFSWhFWDRJSWdpdWxHMmJEbEttbkxlZ3ZFaHFVdExOZUtxNGt3c3hUa3VQTStiSEljSlFTTU1aWWxiVnRwYmFRa2NoVTB3eEsxOFdZckFFZ0tDSUl0YXlGZzhldVlINDl4U0lGbStCcWxBSjZ1RHlRR0JJSTVqSHdKVzkrQ2dzcnMzTDdwK3ExUG4zam9tc0hic1N4VVNCdS9KZE90OHFZOGRMSjkyMWJ2OG5CeUUwRFFMRURjTzFDNWNCUWlya3ZCU3FseXFUSTdQZnY2dC94QTk4RWJvcEhoMFhQbnFsTlRpWFI2cFRpbXhRMFRnSG1MNHdwSDFBTGM0RUxrWlhsMDJ0L1I2K1RTekNZS3dvRWJENHBSV1M3a3dUQkJJRE5aMGQ0Ui8wQ1gzd1FEcEJTTUFZd1FJbURxNnUzbWIzemhmRWRIL2cvZTk2YTMvd2dsVStIRStDcjI4eWlLa3FtVXNLellqQmYzVzlrT0cxWktDaGlZamR1ZldXczdsVUk2ZmY4Ly90Mlo1NTY3OGRXdjNYZjc3WEdSR0M3azg2ZVBWaXVGWkNyTlMvUWtLVTAxYjhwNTZtcHBLZ1Vhc1U0VGRGMENyL01rZ05sTnB2S1Q0NFdKc1d6dnB1QmlTakN6RVlsMGFYclNLK1RTbWJTcHE0a0U2Q2kwSGNmcDZRa3FsY3RZajBGSG9XRysrdFk3TTczOVViRmd6RXFKY3lDcGdxbEplL1BBSGQvLzFzLyszbTkxdnZ3V1A0ejIzSGd6MnRwT2ZPb2pwVDM3Ky9ic0NUeGU2YVdUZ0daWUhlMnllMU5VbVJPSkpCYnhtVEFSYVIwWm95L2w3a2lJMFBmaUQ3VjJnYWhRdlBtT1Z4S0pzRkNZSDVUR0Q3bzJieDBmUGhONEhvSFBEWjhPS2xGZnk0RFJLL3hjbVVpNVgzMzZudzU4ejQwdFZ4M0FFNytINmhpY3JscnNUTTFOQzJpRHZqUlNEbkllUEkyeVJtUTQxR0Znd2tocnpVRm9tTm4zSWdpS3ZFaUhoZ1NGbFZBYlk0Q29HbW5ETENpb2hqbzBMQ21LakY4SklZZ0pnYTlEUDJJaWxoejZPdkEwQkRHUmpyUlhEWW1FWmdPaTBJOFFNUXRvTUFHaHIySFlBQkViRWhSNTJtZ0Rvb2laaUl6aDBJdUlpTUVoR3hMQ2FCUDVPalpYeDdLTkNLR3Y0OXdLRGRiTXNWb1YrWnJyOWU1Q1pnSklrSWxNV0JmQXFpN1JQUUFBSUFCSlJFRlVERVFOdFBTR2E4dUhXTDVHOC9LVkFGNjBaSzhMNElZOUs5Y3ZpRG1mbW93N0FpOTMwWDZySUpacFByRjFZTW5namxQSDQvdHEvSFordnlBbzFFcndDQ0lHS3hMRWdDRGJrUUJMSmlJb1d3cEowa0JhUWxwQ0dKSlNLRWRLelpZdGxTVWxrWEtrUmFRY3FZUlFsclJ0NlRyS2RXUXlZU1VUS3VIYXFhU1Z6Tmh1eGtsbW5jNFdWMjF2UWNaZ3ZBd3I3cGVCMHc1dkVwTVBvUGNlSUxuMzV1dWVmK1F4YUU5QU52Sm5FU2pVUVNiUmxnaFJtaGxmUzdyWTZvZ3RqeXBEQkVSbEVvQWEyRHIzN0FNZ1NFRU0ySloxOXV4dy8xVzd1dmZzeGFsVFFiVnFTVkdxVkJNdHJXRHZzZ2gvb2F3Rks1SXRvdUV3djJXaTE4cXlaaUZrR0ViQ04yUUpBQ2J3ODRGTzNubzNFQmRYYTlJYUFVUUNRWkJxN1VpbTByNFVIZFhaODcvNHJsZDk1M2UydmV6bThOd3FDVlJBckpKcHZhZytIcEd5N0xpSGwwS2x3TVpZaVNReW1TOSs3Q09WWXVHLy9kOC9sMmhwUTc1b29tanl3dG5pNU9pUjU0OGFhVzNmdlNNSUdqS2hBWktLQWcrbHdscmU5VHFEc0VnQTREaEdkNzI2TXhFRWpadzVrZTNwdTZnU0xJUUUwWVZUeDhGR0NLa2Jnc2xJaUNnTUVZYVh0eHFTRG9LVzlrNGhWWmliVzhIdzB0QTlwUkFFaHg1N3RHdjNibUxUTWJnOTJkT0hxZkd6NTBjelAvZlRCRkRJSzFiQ2lPZFVBMjAwRzdQY25Fa2tqRGJHR0htNXl6MFpOcFp0RzZOTk5HOS9KdTE3Vm10N3o4QzJNODgvSTNSMC9zenhwR2hwUzNUNGVtbElaNHlrU3VXTHc2ZUxwOTc1ZlI5Qy9sNFVSNUR1cXh2b0ZxNkVuZTJWdzlPZi92T256bzdPYVdNOEwvS0RLQWhOR09vdzBtSEVZYWdqTmxGZ0ltWUROZ3hkSThhSGp1MThzVStQd1hVN1FGdzVxUjViWER0QW9DYjVvbG9WSmFBdXNlTDZyUXVuMTFXZE9LQ245bTNjWVFZRVlxNExudDlCRFk3anVsMlRaSk9SSVN4cWRGdldyTzhXaWRUQzZtZkp3NlM2amJXSmZaYVdIdG40LzhJMWx1RWlPWVhmTmhOMDgzMUwrU1FiL284V3VZS1g4cDR1TlZVem0xb2RhQUxZUkFFaWdJZ0ROcWJHbmhMN05FMTlrTWJCQmthREdEQWdoaUFRZ3dEQkVGUlRsUjFDeWxHWnBMT3J2K01YUDNoM1psY3J6aGRyT2pSck9PM0luMEJxQjNydXZPcjZndytaZjUwdGp5YXRiRlZYR3JzWGNaUlVtYVMwU3RPanE1YnZYaE1JWkdkbzlxdGY4azhjNmZucFh3TGdidDh6RnhvVTgxWXFZN3VKMEN2N2Z0Qy9aU3UwQ2YxcTRGVnFTNWpMNTYzamVkc1lBd21TTTdJNE5KbmEzZEdaM3pKSEl3Z1lBbXpZVFNieng0LzRXL2IwSERpd0Vpa2pBU1lJa0U3QmFPSFlYWnNIVHo3elpIdDcrNWIrN3RDeVVTeHVwS0lSczJYWnNkV0hJNzBPNXVCRmJiQzBMT3JvK1BKSC9qejB2TGY4MHY5RVBzKzVYQkFHeHg3OVpsQXRUc3lXeUU3czJUNFFhYjFJVzJPR1ZNcG9MaFhYOHNUWEs0QUJnQ3ZGQnAvOE9tN0pUYVp6azJPekkrZmFCN1lGK2JtVkpDZ2JZN1cwelowZm1oMGZTV1ZhTG9tUmNjMGdJWFFVNlNpNitFaGxWc2xrZm14MDVNeUpIVnMyQStqZHZCVytqMkllYmQzdTRNNTZ4c3dxTFlBa1dGbW0wa3pQSmpKR0c2MlZaVzM4ZnBxQjRrb1A4V0tvOFhMVmNzL1dIWlBuaDRLcWQrYnNzYXpkbXJYYnFsRmxlUXNNZHUzczB5Y2Z0bmQySGRnWjRld3pTUFV1MWExQ2c1MXQwNCtNL2ZUYlB2dFFwZXE2VUFwQ0lnN2RvRm9KT0NJYkJCTEpCZmxDOVo3Rjl0NWFwa3VqWFhEKzIvbStOK3pIa3YxMWdiakNEMzhGc2RCZy8yWTBtbzNyaHl4V1QrZlBXN0puOWYzLy84S0xkdk1MZnYrR1BZMW0vWG1WbXFqQlpiR2trZm94elBGaUQ0YlpBTnB3R1Z3MGZEWXNmK1hKY3VKOVgvK2YvL2dXSkJTQytReHZDV2xqOWlrRUI3YnYya1h0Wm1UdXdyV2JYbGJSNWNiSlVYT1VzdHRkbFNpZVAxM3J5Z1lzaURFTVZJWXEwOVBGMy9oWk9USmN1UFdWYmRmZmxMcm0rcmxFcW5ydVRHTHZkYTJkM2FPbmpwS1VsdXNBS0pmTG9lODd0bFVwbCtIWVhGelJsN3ErWHBoRmFVV1VrT2FGYUtaMUdOdE05Y3djelJJNUpKU1NiRVpQbkV4LzZMMFMwSjVwb3BBWVNNQzBkRmJ6bzVCU2wvSmRtN2VPRDUwdWw4c3RQZDJubm42OHA2Zlh0WjBvWEUvZ09ETVlsdU1DQUpIdE9CdDcyQVRJdnI0SC8rSFRjMU5UYi91bFg4YnNiT1Q1S3BrNitlZzNRNzhTd2pZUXU2OGExSkdPbG1Ya0NpbUZEblcxdVJOekNjVEMrbWd0bTRRQlJERm4yVTM4T2hlL0t5SmwyUmRPSGtVWUtNZHBLbG1aamVVbWpPOE5IM3ZPc2gxYUdLL2ZDakc4RmpDQVJHSmtlQ2pwV0lJbzBkSm1welBzK3hBU09oU3BGQ0VtWFZoNVF4eGNxYmhaUUhoc2dsNkpPZjN5Z3lnS2ZKbE05ZS9jNDN2VjJkeHMxbTYxVk1Md0N1NW5vWTZQSDIvdFlabWNRT0F1L2RZd3VoS1k4TjczN25zZjhLcmJkcmlEdlltK1RyZW56ZTFxY2J1eWJsZktiVTg2N1FtN3piRmJIU3VqVkxhK1paVEtTSm1XTWlWbFNzaWtFQWtoRWlRU0pPeDRBMW0xcEpEYVZzc2dZWWpGR3pISWdMaWV6N2wwNDJZN0FkUlZNOGFTS01ONVNzMUdOSjYzWk0vcSs2OXNsMlZiL215eDVDdGUvS0ZaSzJScVkwWUNDbVNCSEJKSkVta3BNMUsxV05hbWxMdHRRSDN4MFhOalh4dENiN3BoRUJpb0RMeHhqQjNLYk51ZDdPOFluVG9IdVhUUnpNd2tWTnJPZUpQbkRRQnJQZlB0a3MwU0FoajczZmR0M3pLNDQrN1g1RDcyUnhHUVNFaS9hOVBrdVdGSTBkSGJKNVZpdzVaU2NSSmdwS1BPOXBhUms4Y1JoRkt0dS9wN1U3Q1pqN01BR0hBZ29laVo0T1JYbmhyOStvaGp1eVFwa1V5ZS92cFg5VDF2NlhyMTYwSWZ0Y2lQSlJzekFXcm4zcW1SRVFpcG81QXNhM0QzUHI5YUFZbldUTkl2RlVtdGxLRytNa3hrSnhMTWJJeTIzZmtzaHZWQWEydlRwbVAzMzNmMDZhZSs5NmQrR3I3dmwwb3FteDA3ZFRRL001bE10MVk5YjdDL1Yyc1ROdVBEWUlDTk1aRVA0S0x2dEZabmRZMmJrR0NBQzdQU2R0Wkw3QXlBbVoxRXNwU2J2WEQ4aUVpbG15ekdtSVdRbEVnTkhUNVVMUlZ0MTQyMUswRkNTSGxaMHJrdUhZSUlZVlNZblcxdHlmcStsMjN2aEJCYVI4aTJVamsvOGFlL3BRQXJROUFyUDhuWVdHb3BXcG9YQVFBa1NJZWgxbUV0c09MRkI1R0lTcVd1TFR1eW5WMXpjek10YmdmcTNNMUxJQ0ZaZStlTDU3WnNUc0lXNE9VRXhZeWU5TmMrZnVqZnh3cGJ0enAyQkY0czdaYk1oR2crS3phZmF2OXJZOG1kTG5rQ2hpKys2V1ZiWkpwdUhDN2I0cDJCNW5EbExkRHNmenUyMVhxMTdDNGE3elF1Vngxdjg0K284WW10Tk1BYW43eG1aSlNhQWg1NDRDd3N1VFN0UlNVeCtUUnNPOXZmZDJIbTFISk9zVmhXSlozMllMcEE5ZEQ3RFd3d2NGMk0zLy8xdHVjZjMvUDY3eGFkbmU0TFQ4NDk4TTBFWU4vMm1wblJNUVNlMjlhUmJ1K01vdEMySGZqVmRFdWI1YWJjUkxJNk4zbm02QXV5bytPaTVYTldCeEhWc2lvYUxWRUdTRUJDUnNlNFV2RElwV1FtZStIUkIrZTI3QnY0amYvWE1CRHlpamNGcEsrL2RWb0RjN09XWlllbFltdi80T0NlZmNYOG5BN0QwdXdVcEZ6Zm5FOFVCVUV5MjlhemVWdHhkcnBjeUVFcThEcGFZSzJ0cnE3Wk0yZnV2L2NMMy8yajczTFNtV0J1ems0bXcySmg5TXpKZENaYktwY3RKUjNIQ3NPVjJLZ0liQkFHYTNtdDYxa1RNWVNDWC9Jb04rZGtzbXRNNTEzYUJuTXluVDEvNmxocmQyKzZweS9JTlJpaW1ZbEl0YlpOSGpzeWZ1NTBJcDBWU3JYMzlFMmNPK3VtTW9sa3hrUXZBdi96K2lFdHE1ckxHYithVENUQ0tNeTB0aVBTREVDcTdKYnRFMy8vMFRPNTJZSGYvNGlUSWIvRXpUbitHQUlneTJHekxEY09JQkxNSnF4VmIvd1dMVGhNRkVLa2VuZnNEa09kU1daUnEvRzM5T3FXdEl2K2JNNmJ1dnZxZmJYa3k4WWh5SXlzZzdQRnozMzVxTXdpWVlUNTlrbFBidmpVZElaZCtNeFljbXhzZFptUEdtbWNveS9CZ0ZnN2ZVa0hWbnJCUzM3YVlybVpmZG1aY3NrZUJva21NMFJUOXhFM3U4UmFUdnpXWUNWejJ4STFnSUhHZ0hGVDIxZHZvVjZYdWM2SUJtMllBR1lzb1JaYmNqVmhxR0xqMGVmSDNqTHR3Wkh3OWNLQk1vWHFKUFNwL3AwN1QzM2xJUlA2VWl5aU9tQVlFQ1dkdHFBOHE3RW1jb2FtRUM1RndOeGYvTjRiN25vVlM4dnp3NTVOdmNOLzkyZTQvWTVnNk1TcDQwZXZEd0tRNkI3WW5qaDIwbFlTWHFCUzZiYXU3ckV6Snp0N3VrODkrMVJuWDM4bW5ZcXExUTJyTVVRRUUra29XbHFZeTRCdFdDMnFXb1NUU000Y1BUTGlZOXVIUHlVRmduZ09qTzk1bWFNb0ROQythK2U1YmJ1blhuaTI2NlpYY0c0dXFwUUc5bDBmQmVIWkk0ZEtoVG5vYUwxMTRkaVlLQXkySG5pWnNLejg5RlIzdVNpVk5HdGNlVENyVkxJd08vdlBILy9vN1c5NFU5ZXUzZUg1YzZRa09lN2s2Uk4rcFpMcTdwb3JUaWNjeHhpejRsTWtLRW1SdHliTCtUb0ZNT0NkUENvblI2MzkxL2pSQnFNcWhWSktxUk5QUDNidG5hKzFNeTFoTVE4aUJrdXBaR3ZiN05sVFo1NS8yazJsMmJCdHU1YmpHamFoNzRWUjZDU1NVVmorRmhsbVZ3SXpPVTVoWWdLUno1YVRTR1dUbWF3T2ZRQVFGQWJCalQveUUzcjQ1Q052dkhYUEp6K2Y3T3F0bG5oNWYrT1puUzFIYTlOMFRtTURMNjVrK2EyYThFZ0lCTDZWU05tSmRFSWttMG9aQnJzeWNhNDg1b3RpOTBBSFFnMWVObSsxSjg1OThjeWhNN1BwUHFYTklqdnVnajJ3dnEvMkhCcCtubXY4bmNXVEpoWm41TWFmNTd2VEVCVFp5TUd4NEZTZVA2QXhoMWZVN1dxTjBxaFI1eEVOTkI2TjhWanpEVEpETklpOXhuZElEVTF4TGRaM0lVUkVFQnBLS0MwRWw4VkhrMWhVUkplYUNlQmx5Y2hOUmhDdlhDQ09GdmVuNlFIZkZnSE1XTkVTdE53T1p4YXpiOVd6azJybGY0bGdtQXc0RnNBeHAyY3MzUnVTaEdOUGNLMDFCalFicDhjdWpaU0tRN25NcmpaNGxVVVBRampJSCszdDdYelV5K2ZLdVdUS3FRVFZSUStLT2Vta1RmVkNDRFFwNHJJV0dOZ0s1NzUwYjgvY1dQdmRQei82NFAxaEVMVHYzTjF5ZXVqWkQvNWE5dkNEMjE3NytyQmNVVksyOXZaYmJxSlF5S2M3T2hCRm5ac0d4b1pPSzl1Mm9ZODg4ZWl0OTd5ZVBHL2pLMGdpcmJYUm1vUlk4a3JZc0pEQ2R0MWdidWIwQzhkN1AzNnYyOXJxbDVna21VUXRodFppaURMemdzSUZ4MFl3T3ozeTBEZkdiN3F4eTNGQVpLTEllSlZ0Tjl5c2RUUjI5dFNXM2ZsRU9yTytFdWxFSmdvak5vUDdyNi9PVEd2ZkU4NHlUOW5LRUk0NzlOaGplL1lmdVByMk82TFJFVWhKUXJBZjVLWW5uWVJiTGxlQ0lPeHNiNHVpMVNTNkV0SjQzbG91dDQ1aURERzFxdmZVZ3hudFFkbUkxblNCSnUwWTR5WlRsV0xoaFllL3NmZldPK3kyRGdRK3BBSjQ3SVhENTE1NHhuSVNTbG5NN0ZWSzFlR0NtMGhWU3NXaEk4L3NmdmtyWmVBYnJUZThncnNNSUFJb3JKU0ZvQ0FJMm5vMkN5Y1Jsb3NBdUZyZHRuTlhJcHZ0dU9mMS9KRS9lZXpOZCs3NG15KzFiTDJxV202aXloSmdMRnMzTldJUUVhRlN6TC9vOXVkR2t6NHpwS3dVQzM2MW1tbHRXWW45UUVobkxEY3VNbUZmVnhiVlpRRnJnaURsczgrTlRXdDBTVW54S1hXeE1DOGU2Z0tBWW5rekw1YW9Mb0VJTkM4azVyVzZlYUVtNm5KM25qWmpYcElSRnFJbTV3VllvOWdRaUdsKzBSZ1ZTZzJzSVF1TGRXcFl1QytqL1doNEpFMTIxdjVmNTl0Ym9pUXNzK3d2VFRGYXJ0aXZUbGtSWTFsTzBLTFRvMVdHSEMydFZQUXR3eXEvOXFabWdNWkZ6UHpKdFBBUHhZTmc0YjB2VzcwdHVid0dXV2xibmpIblJnclg3TzlhN0F0anlCVEtFNjNaa2k5cHBqalZtdDFTUVdYSk1IR2RsUEY4SGJGVVZGczVyZ2ZrSWdMSy8vU1h0OXg2RzBCYVIyeTBabXJ2NnJ6dzJZL2Q5bFB2NmJqMlFEQThGQmx0WmRMS1VuTXpNNXQyN1FsTHM4bk83czYrZ1luelo3T3RyZEtTOFAxTEtUUk9SRVpyWTVydzh4ZzJ0bTE1UVhUeW0vZW4zL09CamdQWFZ3TkVhZEtBazRzeVh6OFBpeXB2Mm1yU3BNcGdBVGF3VS9EbVppNjg4ODM3ZXp1bS9CRFZpcEpTR3hNRnZtUmM5YkpiYmNmeHZJcWJ6bXlnbjJ4TW1NKzV5YVRXbXRjdU1vakNYRzdQZ1FOMnBpV2FuRFN4bDFwWjFYTEJyMVlzMnk2VUt1bDA2bUtGaUlpSXVGcUtQNjcrcnRlY0I4eFFTWGhlRUg3MTgyMWJ0MTFpbFdOalRDS1Q5VXJGSXcvOFI5K09YWWxNYStoVnB5NE01eWJIbkdSS0xSUnVpd01UT1psT3o0NWVHRHYyZk4vVkJ6ZzMreTJhQmJnZWZSdXIrdk5QeXBoS01TZUVZR1BTN2Uyb1U4YUU1ZkxtN1RzNGlxTGp4L2Y5NkU4bXM1Kys3NjJ2Mi9rUFg4ME1ibCt5WW80Ykk5dGxibWJIWUZhT1U1eWJDY3NsNVRoUnpSWjllVytOQVZndExYQWNsTXRCc1VoQ1FLbXFWNDM4TU9ta2E5UDdra1VEQVNTR0o4K2wyOXhNYXdMK012dTVKSlNEc2RPRkc5b2R0ME1wUTh4b3FFdS9NUCtoSm5kclVyUHgvcFpJcmczZk9UZCs0TlYyb3Y2cUYrdnJITTJMeEcrakpmMmxnMi9mSTFqbHl1c1FKZHprVStPdVZVWWFnM3pTMHBqS1dHV1I4U1FHRVFpaU9xRVJ6Rlh6dE13VkFNT3VuZEtsS2xlcklwTmM5NUJtV0FvVGp6M1NNVHZXKzROdnhlUkVhMWZQMk5BcHYxb0YrT1kzdktHamY5QmN1RUF4ZVI5UlMxdjczTlFrQkRHWWcyQmd6elZ6azZOaEdOcE81Slh5VGpKai9FdE1DRzYrMExNZGQvcVJSNnhiWDdmdGgzKzhESVEya29mbXNoOTZPdm41b1ZRRTBtSGh6b0hSTDk5alhDazhLQmZNT1A2dTc3dDFjOC9lbjNqUFAvL21yNTQvY1h4Zzl4NWRLQkFKSFFaczlPQTExMFhWU3VoN0d3emVyaWQ5ck5lTHJLU01Ta1dPazR1WW9aUlhyUVRWTXR0dVMwc0wyQVJodUhxWG1NRFZzc0RTT2liTHNXWnpyb0FGekh6eXo3S3pvNG5lL21nNWdlSTZ3Y2E0NlF3Yk0zVGttUk9QUDNENm1jZExjOVBKVExaQitnS2d1c0daM0hSbTZNaXpzOE5uVkNiYk5IajRjb0lCRGRscFZMK1d2VVlOYUpFMWNmS3VWQ3J5cW42bEJNQk9KRE90N1J6VnlrdVFFS0huUlZIRWhPak02ZTNmKzlhN2JyL3QxSTkvZjFDdEtuZlIzRThDRGlBN2UwMFFOSDA5VWxsZXVUUXpPVTZKNUdYUHdtSm1JWVRWM243dStQR3YvdlZmVDQyTTJDMnRiQXlFcUhvZU5CenBNRGR4VGdzaFRlaVB6WTVtMnBMSTJGaHVoSEVVVDFVcWs5WDJObVZMMkpJY1JVb2czdVlESWV1UEFaRmhiVGd5SE5RRGJZSjYwTTM4ZGltUk8vUE5MZy9TYVF6UDBjM0NjeFlpZEpwR28xM0JmeTFjeFBrTk1MRVduSnVxTkpIVnpJQndVaTVSbFBOeTRPWDJMcllzbDMxUFY4c2JrU1FFQWdwZi9zeldMWU5JSnNOeUtkTzdxYU52czFjcFM4dU9xdVhxM0F6WlZzMzdIZW4yN3A1OFBvY29ra0tHWHNYT1pIZmVjS3VKb2tKdXBscXAwR1dJaFc1MkUwUW1QMmQxRDNSOTZFL0tnRHhkNlgzRGx3ZXYvL1NtQjhhNi9zZE5yWWZlbHYyNzcreTQvM1RiZTUrT0pLQ2dKRTcvOXEvc0RvdDdmL2duVU1oMTkyOGFQVGNNMjY0M1JteE1XQ25IYkppWDNPSDFRV3ZOQzVSNUJDRXErYmxxdWRTL2MwOGluUTY4aXk4SUJBbXVsR3JoSktzZnVhWWVHVmd1Y3NQRDBUOTliTlArNi93MTlHQXRpTXVTSjFJWnkwMjRxYlNkU0FKWUlUZUpwVksybXpqNTlLUFYzSnlkU3IyNHljRUdzdDhFeCszSkg3Y20zc0g1djFBbUw2MnJ0T2d3cElrakErWW9ERkxaVmllZGpjSmxCUmFKbUNnNmUyYjdXMzlrWDlvOS9hSDMyNkplb05aQVdKQVdacDU2M0JzKzQ3UzFyOVFGMjAyTW56bWhLeFVya2J5OEN3NENaRWZuNGNjZSs4WVhQaFA2NVNjZWVzQ3ZscFh0UUFnLzhEbUNKUjJ6akRhSndiYXlTbDU1dGpTYmJra2k1dlpiZkFRY2xaL3pDbm5QVjRoMFBSS1ZsMGFpcmhTRGVrWE9YY0ZMR1N4TWJzNWI1R1NPUVVCb0VpblhUc2xDdVJocUxScmQ3QXd3bEVxWU1OTFZ5Z2JVWDNKUkRZMHpmR3J3bXYwb2xnd0FvN3NIdGdvaENLaFd5dVZpanVMMEp5SjQxVTJiK2sya1M1TVQwcllKSWl6a1d6WU5YSFh3cG1xeFZDbmtJY1NHMVY5bUppR0VWTTNjSHlTcVZiNnAxOWpKOXQ4NE1uRFZ4emRkbUd2N2x6ZG1uM3Q3NGxldWxaMEpOZURZcjlydGZPV2NBS1NEMlZNbnJXOTg4YlozL1RSbXB2VFUxSTJ2dUhQdmdldDBMcmVzYnkrQldjR1k0dXowOW4wSGUzZnNLdWR6RncxQ1lyQzBGUG5WR2lIeHFsaWJBTFlCWVBiRHY5MmJjV1JMVzVQNkFaY0dtZzlmV1JuTWJMdXUwWHI0NkxNUVFyeDRvVmdNMldYQ1kycnlKNU9NM2RhMU54US8yelB5L1RUMXM2VEhpUFpSYUZXcXVYTG9lZTA5dlJDeWVZQW1rUUY0ZFBUR0gvMEo2K3YzVGg1NTNuWUFBMWlRRmlZKy9NSGNUNzQ1ZU9SclhyWlR5U1pWSDhCc3VhNVhLUTBkZm9yY2hLZ1hMN29NTjhkc3RiU01uVGorOUgxZk8zRHROYS8va1hkS3l4NGZHaFlKRjBTaGlZakprczB2cDZRcVZpdmxzSnpPdWsxOG5NeXdSYUVZbE1xK3NJaldFL3AvQlZmdzBnY1RLcVdnT2Jld05yWVN0aXNyZmlVSVFpbVdoMW94TlEyY1d3TVVvWGo0MlhUa0p3ZTJtR3BWQ0tFcjFVeGJSNmFqTXd4OGtLZ1VDdk9PbkNnTUVwMmRTcW14MFZFa0V2R3ZOQ3JrdW5iczNuSGdaZFZTQVplMm1vOUpkSmJNMWFTbFZ0Vm9IM2NjYjkrMDZSLzdQL2g0eDZkZm5YMzJiYzZ0ZzdoZ01BUitQb2RUYzJKTFJockV5c2owbHo2enZiOFAzYjFCcWFTMWRtd24yOUtxTDEvaDNzdUlzRkxldk91YUxRZHZLazVQK2RXS1dKVWFFNEF4TEpVU1hnVnJlT0ZyRUdNTTI4TE1rNDliVDN5alkvOUJyMXorMXRzRVloaGpFdWxzZm5LOE1ER3UzTVNMRmFORUVDbk9mVnhZUGRuZVQrN3IvT3pMTmo5K1Q4Y2YzQm1XZDR6K29Dejl1alU1ZHRidm5CemN1Nis5ZDFEWElxeWFOVU1VVnNyVTJYMzl5NjRmLzVQZkJBQUxsbzM4b2FlcWYvWGhhMTkxOTY1OWUwWkh4a3JscW1VMU1RcXhNWWxNZHVMYzJaSG5ENmxzaTFnV2RyakJteU9DWlIxNzVwbTJUS0pueTFZWWdvNXN4NEhXRU1MemZSaXlsYk9jaFNPMkg1ZThTbVJDeDFiTm80eVVxSlpEM3cvV1hlUGpDcTdnSlErV0ZIb1JBcjBzanB6QWJOdkt0a1UxOU1Jd1hLUWVFTURHdFZ3S2dyQlVXSDl3SGdDRUYwNm53RWdrWTlPVU1ScVcxZExlcGJVV1FsUktCZFI1ZTR4aFdGWnJSOGU1VTZjZ2F6eExiRXhVeUcyOVp2L21uWHZEY21ualQ0QlpDQ25pTUs2YTFrVFFJdXljTmVrZzgvY3Z2L3F2WDlsM2ExZDY2Z2ZkLzdZWFQycWNDY0FhQWp4VmhCU2NENHd0QVBnQURqMjJaZjlCRklza0JBa1Joa0VZQk4vbURKY1Z3TXlwbGxabzQ1VUt6R3RpRXlNUzdIdU1pd3ZZTmR5d2dnSEtuL2xFUjN2V2lNdkRwYkpoQ0VITVBEYzFYaHRiTHdKSVFaZElUMUxxOW5hY21zTkRWVXFxekkvdjJQVEFxem8vOStyOE45dThkMi9hN2I5eDIvZmZRSzJoYmxhVVpxRXBLYzNFK0k0M3ZMbnQ1T0d4aHg5d2JBQ29QUGRrVzBlYmRsUFpkS29sbXhvWm4zVHM1aG9uZ1JLWmx1Rmp6MDJlT0twYTJwWXZQRGNBcFpUSkYveHF1U1diU2JTMHcvT2lNTXkydENDS0VMdGV3THdDYlRxWXEzNlZZUnlubVlBbEFJaXFHODFPdTRJcmVJbER3a1JBeEUwU3VRd2NXMHBIZUlFWGFDMFhGek5sZ0VqQWdFMjB3VGtyemlXWVYxNWpHaWxCd0ZMS05nTGcrWnUzYm1jQW5qOVArYzdHUkw1dnJ5Y2hwem1vZ1NIZENGWlIwRDlwWCtocS8xOTNkd3pma2YzS0hlblAzaVZ6TnI0WlFCcFlCRWVoRUdDNmpLU2x4eXBScXkyQjJVT1B0K1luMi9kZHAwdkZsd0szMHVvZ29pZ0lZTFJmYmNMTzIvd1VwVGp3RFM1ZEFET1VqZUxRa0RyeVZOdk9QVUcxZXBIalgyUXdReXFyVXNqejVTN0dzQUFDSWxDYzcxbUplS29BSHpnVzRLaE92M1p3MC9Ccis5Ly9SdjI3MnllK3UyUksydDVqQUt4U016QUtBdGlKZzdmZU52dlJQNGlQMHFQbm5YVEtHTzM1d2FhZXJtS3BVaWlVVTBsM3VReG1aaWxsSXBVNTllemowMmRQcXRiTElJUEp0bk56YzJHMWttbHBzWndFTWhtdDlkVFVKSkxKMVZzbUVJT3J2azhnMjVVcnBkbkVGcXFYZ04vbUNxN2dNa01JaW9JUVFkUjAxalNHaVdHWUk5MGtSRFplMUM3bHIxZ3paRHJyYTRadVNQeGpycFpLZ3Nqb0tOUFdBV1hWSWtXSXdtS2hmM0R3OXRlOE5pcVZGbVlWSW1aZUU5ZjlLb2lUM0tWZ1p0SkNaNHBSZHpIenJ3YzYvdlRWYmQ5MWE5djVsN3V2NjhOaGplRUFMZlVjTDV0NHNnZy9naFRSdVZLd3J3dEE0ZDUvSE9qclFUSzFWbjZNYno4SWpHcTVYRS9nV0ExeFNXQVJoTG9TMGNVc0hoY2ZFQUlvM2YrVlZGZ1J5ZFE2T3Z4aWdZVlNZZUNGbmljdlpvdmY0QVUweUdXNGJDb0dydUxKSXFvR3JvUTBlTWFuNHlMemEzczducmtqOUFiUHZ3R2xMMHByanhHdGhzTVZETkZTNnVuSi9sZmYwemx5ZXZTK3J6a0FpRGl1Z2hkcDEzRTI5WGE5Y1BKc29WUkpwNUxOL0tvc2xlVWtVaWVlZkhoNjZGUk5CbS84M2hpV05aZlA2ZEIzRWtrd3czRTJiOWw2OUptbllkbXIvektKWUppREtJekg0a3NoTnVJS3J1QmJDV1lJUlpDcmNGa1J3RUhkbU5SNHFpQkJwcUdPMEhvdkhVV0NNSzk2a2lCb0hmaGVYTitzcmFjWFVkUzRnRGJHT0k3em92eEdpUWdDQm1IUHRJaWM5bCs3by8yK085disrdGFXeng0VXRvM0hBcFExMGd0VU5RaVp4d3VVdE14MEpjcHBmTy8rRWtMMXpPUGJiNzROeGNLTHJ2N1cwaGd1OVVsSUtVem9CMTVGckNHR25KbWw0NUJYMWFYOFJXL3ZZZ0xZUVFTWVE0OW11N3FpOERMSFhtME1nb1FPb3lnTWFJT2tNaGVEQVZtUTNUb2M5K0FvRkQyZUtjR1JNRUJLSUIvZzBkQSswTEg1K0QwdHYzTFQ1UHVjeVI4amNvUzlJNFJ1THBhMDFoRHk0Q3Z1eUgvOGp6UmdIN2k1WENpSm1xM0k3K3ZwR056Y2UvVEUyWE1YeGx6WHNkVFNRbzNNYk5tT2swaWRlT0xoMlhOblZVdnJKWTBuSXRaYUNtbTBObHFqVUx6MmxsdHpNelBubnoyRWJOYVlHa2xGcy9ORXBLUElSRUtTMWl1bVRmSUdLTUt2NEFyK000QTFLMHZCRWl2RlhjWTZYeGhGUzM0ZFJDS0lmTGFWU3FaWFR6aGVDY2F2T0VxaEhnaENKRXdZR0IyRnZwL3Q2RTYyZFlSQkE4RmtuTU1UQkpkZnZCRVF3Z2cvM0R6anZqRFk4UnV2YWR0eVcvdXhXeE0vTklnYzhIQUFJaVRxRFBjTU9Jcm5xcGlyVUdmQ25DbVhBcTkwdlpWNzhGOEdFNWE3YldkVXFieDRBcGkxdGh6SDZ1eXdPanF0Vk9yU1FzOVlTT1ZYcTBHMUtxVmFrL0loRlZjS0pqOXphUUtZSVNVcUYwYmx5RkN5cCs4bElvQ0o2blVEeFdYd2lUWUJBd0wyZGc1SEs2aHFFb0luaWtBOTZzZ2gyTUFEUGliUTlsc0graCs4eHovVGUvNVZ4bnZTc3E3V1pQRnljelFKRVUxUDk5NzE2dTdwQytjZmZyRGpWYSt0SkZyOC9KeFVFa0MxNnZWMWQxNjlhOXZNWE9Id3NkTkJFRnJMRmxuTXhySWRONUU4L3NSRGhmRVJLNVBkZUhWMXc4cXlMY3ZTVVJnWmpUQ3dXbHAzWFh2Z3d0a3pVRXFJMk1qZHpDRk5GR210dFpFa2ZTOXFVdm1kQVVEWWdsYndJRi9CRmZ6bmhtR1NCTFU4SEpJaHlQZERFMEFJcVpjNGVoa0FSUnl4bE1MYW9GWWFWVXEya2hBaVBsMElHVVZSRkFSRTFOay9BTkFseGphdnVSK1NzNld3dlpqOTUrdmJQM0ZYNjN0dWFudm1GblZWRmhjTW5nOWdFNXpGNGtrQkV3VkVCaWxwVGx2RjFPVG9iNzFwOW9NZjNQR3ExOEd5WGp6N016T3JkTHBTS1QvMCtjODkvcFV2NTJabXJaNWVRYlR4ZkU2bHZFbzU5TDJMaGtESFZ5ZmJWcUd2WjZjdmV2QkZOR0MzK2xPNEFBQWdBRWxFUVZRSmVFZWVka3B6TXBsNmlaZ2RpV0NNMWxHMGtWck5hd1A3Y0s1aFhTaEhJMVhxY0RGVlFpbUVKV3VtVndsa0JFNEdPS21kMjdvR0p0NlkvTjc5SSsvRzNCOUt0UjJ5MC9DeVdIcGpOQXdPdk9MMnVmL3pJZHUyNmFZNzhzTm5yRnJXT1pVcjFZVHI3ci82cXFUclRNL21xUmxYTDdPeEhGY3A2K1NUandTbGduUTJHZ1N1dGVQWVRzTFJXcHNnaEpUaDlOVEJtMjYrOW9ZYk1UUHIyZzRFKzlvVHpaeFZCc3dNU1Nxc1VYQXM2eWV6bmJTVWFGcms2UXF1NEQ4NU5KeWtCVXMwaWZtUUZJWmFSeEFrOVhJN000R05KaUZJcW8zTm9XWXU1OW8yNnRFVkpFUVVoZFZTSWR2ZTFkYmRwNnVWNVZXWUxqTVlpS0N1Q29OSzVMNzN1dTVEZDdkLy91V1pQNzRhQU01RUdJcVFKRmhMcEs5QVJXT2lSRWtiVlYwNmxITnYxRnZjNHZaVTZ1R0hIcXBPVHRndExTOFNwWktTaW9rZSt2cC96RTZNVHAwOTltLy8rT25uSDM1SWRuU0lSU3hQYXdlQnlDc1YxMzR1Q1NXaVFCZHlsNllCRXhnSVRoeEpPUFpMU0tzaFlyQU82dFVXTDMvN01IbHA3VGFVcmxRUGw5SGlvQnp3VkJIdVBJazRRRUNhTUtseE9BU282Kzl2NmYzVTNibVBwOGEraDJHRXRWTXZNVWVURU5ITWRPOGRyK3FlUEQvKzdLRzI3LytSL05Tc1dEQW9rUjhFZmhCdTI5TGYzZGtXQk0yVDRZd3hUaW9kZU42NVk4OExaVzNFR1V3RXJWMDM0YmdKbzdXT1FnRE1Cb3gwSmdNZEthbVlvSTJtWlFPRGlOaXdZYVBJcXBiREpxc3hBa0tUVEtwazBrYTByZ3BnVjNBRi93a2dtTkpacDhtY3c0QVVWVC9TVlNocG1TWExUd0pBUVZDRmJjdFVldjFYQlFNOE0rR2tZNEpZamlPaEloMTVsVXIzd0ZiWXR0RXZzbTFTQTRLdGE3VDNPSTI5WG1XNlg5WjUvQTdudS9vQTRIaUVVWU0wWVVsaFVnWVNrcWRMWFBDbzAvVlBGb0x4NmUwL2RGWDd3TUhlcllOVXpuM2ozbnZoSmw2a09CNWhXWlhKU2I5Y2VkTTdmL0ttbDk4MnVLbnp5YS85MjZGdmZFTzFkOURHOUJibWNqSGZoTk4vQlJCZ0FhYVF2M2hYVi92U1JnVFEyV051SnROa1dmZHRCTFBuYmJ5bzFzV2I5eUU3MmI0NnFqeGRBQUZLWUx5SXFPRnB4Uzh4VFNneG5nNmhrWHI3dG9GamI0ajB3TGxYRy85eFpWMmpTUzB5Unh0allIRHd6bGZPL3RudnBQWmVYUjNjblQ5OXdrbldtQ1pqaG5UZkQycDU3b3RCUWtSaDZKV0wxVkloREx4S0lRK2pOMmdBMERyaHVNcXlveWlLZEFRaUlxRjFGSVlobUYzYklZa2c4a1F6L3pyRGdGa0oyNnVFMEx4Y1JpUFFMVmtublhZNXZFTGdlQVgvMVVDR1d0dGN5R2FlTDBuVmNxQkRXTUpxd3FJT0JLRW5iRWU0N3JwL0ZRSUd3UFM0azg3QTFFaHZRY0lyRkJQcFRPZm1RWE1KNVFYWEFvNGdNbXp0NGNJbjFjaC81OVRicnUxNTRTNjVQWTBJZUQ3RXRFRW1UZ2hlZkZyc3NJdWRkeGtyZUt4YVVXZDRSM25MOXBkclFkdTNiY2xQanA1ODRuSFoxWFdKSllxYndrUmhzcldWV2MrTmo3WHZPWkRPWkEvczMzdjRrWWVtejU2MVdsdlhxd1JMS1kzditlV1NYRE9MSnd0U2xvckd6bDgwRlhqbEx4bFN3czlYYUhiYWFXdlQraVZsVmFScXVmVGl6dkFoRXEvZzRFekJURlNwTGNHelplU3FjTlRTVlY2S0VEQ2VDbEJpdFRzN2NQbzcwbTgvTVBKdXp2K1pWTHRZdEJyVXRkbFlDZTUreFYzZEYwN05QUGRNOS92L1lQandFZEpoN0FsZWFITFo0Q0FoQXE4cWxlcmR2cnQvMjY0dGV3OXN2ZnFBMGRIR3JEZGFSM1l5WVR0T0ZJWkxXOURhZFJ4SStEcWc1bVZMMlRBY0t4R1dBNVFEcU1XRGh3QmZKOXZjVk5ZeHZubnBXRXl1NEFvdUVRd0lROHBRdGljSkxPUHNJNERJSzFTSWxZUmxXQzlmUVh0ZVNTWlR5clhYd2crODZGU0ZDSkJlTlpWdFFSVFdRcjJJS3NWYzErWXRNcG1Pd29aU2ZaZWROejRrMWF0bEw2WitoaVovMys3KzhKMWRmM3NMQVBpTXd5RUt2QkR3dk9nMHdGWW9CRHhWb295RFNpUmZpRTYyUFhQazZLT1U3dGgrN1EyK0gyd1o3RC84NUJPNlVGS0pSRzNTYTJTbUpVQTBiRlJ2MXF6SkVhcTFsaTJ0eVZUbTFKSERzcmV2ZTh0VkJPN3BiSHYyOGNkZ08rdFVYRmhZZHJWY3JsWktTdGxyOU1NYVpzdXhlZXdjbzA1Q3ZBTEV3bTAzdFNtZVBpYnpNMVlxL2FMWFAxZ1BsR1ZWOHJuSXE2eDlTYkplNkRuaDNtUmdGNnBQRmFuZFFSRHhSQUZXa3dSOEpBa01IQTR4YXdCMGZ1cm1uby9mTmZPbmlZbDNRTGFRR3RUekxtSERCc2JzdiswVjAvLzdBNjE3OXNxMy9kVDVaNTl4SFdmMW5rUytiOW5PM2x2dTJITGdaWnYzWHJ0bC8vWFpqcTVvWFFVeUcvdXJ0YkNzVGR1dUNvTWdDb0pGYXJReHJ1TXFXM2xoMDFMRUxFZ0tLUnlWckJaRExnWlF5NFIwcU5IbXBydVRYSGtKdVN5dTRBb3VFUnBHYUVyYlZ1dEFCdUh5MmxnRW90SmNtYlJ0a2RQRU1rVlVDWXJTY1JUV0dSM0JJSUV3WDdIRE1OM2Fobm9ZckFsOE81SHNHZGhxcW5WZVFtWUNyRXpHY3QzTEk0WVppR0R0aURpVUY3N0RsTzl2RzNqZ25zeFA3d0tBQ3VOd0JHOEY2UnZESVo0c29oSlNWeUo0Y3JwY0xvWWZmUFBZOHlQSXphUjdON2YxRGFTVENSSDV6enp5b01pMnhMWDlSSkpsajFhYmplbzNxc2VvVGlNN2pldzBxdE9vSHFNMkc3Vlp5ejR0MGh3WEtMdElrYXd3M0xabno4VElCWjRZNzdscXQ1M01kbmUxNXlaRzU0YUhWU2E3UGlWWXlrb3hwOE9nYVhST1V4aHQ3RXlXNXFaRHh1cmtWU0pNSWt3aVNzSWt3YkVzbUUvZEJzS0o4MWJnUVZucjZPNkxEMlhaMVdLaE1Ec3RFa20rYUR3d045dFdCNEVycFBxTWN6QW9QWkNEQUJ3TEV5VjRacW5hQjhBQUxrRVJqa1lZMXdEUzc5d3g4T1IzZUNlNno5M04wYmkwOStoNHVKQVEwY3hzOTIxM2RZMmRIWG5pc2NHZmUvKzVzWm5aNmVsRXdsbGxRQVNCMzlrLzZMUzJoL25ac0ZJT1M4WFE5emFjMFIvZm5pQW8yMjdyMmNSQlVOOUhzWFhhY3AyU1gxaStTbWNHQ1JKQVFpVXFoVEJmOUdFdFc5cHBoaU0yRGJaUXNQU2JLN2lDLzd4Z0FhNll6cTVNLytZTVN1R3ljb1FBTURWWnNPQW9jc1RpZFdtY25GVDJjbFlxWXdITE9GNHZBZ0g0STBQS3ExaXRiZk8rWGgzNEhYMmJuVlJhQndGcUJhNUpKWk1UNTg2VkNrV3JvNk5Pa2JWUkdJQmhYYTNENTlYNVZ4dHEzelo0NFkzT0s3b0FvTUI0TG9SbXBGYU90WlNFa0RGUmhDV1JWT0c5UTZVN2U4eGRPekZXQmtlSWd1N05XeUp0Tm0zcXZYRHlURmlkc1haS05haE5sYnh2aXZ5Zjh2UXZtTWtmTitOdnc4UmJNZkZXakwrTko5L0YwNzlnOG4vSzFhK1R5WkhxTTlaV0xkcE1yYXZMUVFUUDYrM3JrMHI1TTlOdzNhNkJyVUtJcEcyOThPd2hPTTY2YkJBQVNybFowRHE0RjQweFRrdXJuSnNKemwxWW5ZdERwVDQzekxZMEEybTlNeHNsaEVrQWdBS0VEd0RSK0ZqS0VpODVkWWFJaEpnOFA5eStlWXNRU3hObjU0MFlwQUNieVdLeUZvd1lISUVEUWtBY05aZzdsb01CSDZuWDhNeXZ6dXB6WmRtZU1CTWxUSmRvVXhhbFpmWlZCbXhBRUU1cGhNQ0F0RzVvM3pMeXhySFhQSGorZTA3MC9vRk0zcU9qRTRJRE1xUkJPSERIbmQvNGg3OU1PVzU3Wi92NXNlbEVLdTNZdGg4RVRlT3FDSkJTWW5uTnBZMkJ5SVNCaWNKclgvN0tURmQzVUNvdVhGUnI0YnEyNnhTOWZETUJ6SklFaEhHdHBEZkgwM1BsMXAwZDlZQzBPZ3lEc1dsM204c2lOTUtBeFV0dDVGekJGV3dBaEdoV2IzcEZ1N08xQldPbHBZTmFFTFNaR2k4bFJFYVFFSExSakVzQURDcitqTjF4RldFMTFyd1Zyb3h3OUZ4U0IwaWxUYWxPNDB5a2xESjFXaXRpdGxyYmpqN3gySlAzL1llVFRCNjg0NjZkTjl3UVRVOXZVQUpya00xcWx5bi9zeHAvcjhtK1pYL1hQOXhTKzJyRzRIZ0VSWEJYMXVYajlOL3BNczlXcU4wMUkyWHYySnozOFFPbGIvNWVxbHlHNDVwaU1abHBzWjJzU3VWWlRKMGJPclBsc2V1bS9tb3FHck1nV3VSQVJ2YW5yTnN6b3FOdUdtUTJzMkY0cWxCNXVteStVT1lvcjlvOTl5NUt2bG80K3d6N0hJMUxSTXNzdlZKVVNtVUNsSnRBcGRMUzNqbW1yTTZ1OXJHeFVYOXF5bkdkTUZpVGxpQ1YxSDYxVk1pdHo5cktMTnlFS3N5RVo0NktMWnRYNWsyQTJ2TEQzMlJMaHFFT0ZRY0R5ZURXUHYrZWZ1KzFnMEZLR0VCZk9HRko1eVhIcmNEc0pKSnpFNk96RjRiYUIzY0V1VmtTTlZzNjJTeGFtQklBMkJUSnpGQTBSMmJPY0FRQUpFbTBrV2dsMldWa2xzRmtTakI1QVIwN2Nob3VRWWhtWk9KV0ZtMmwwdjI1bG5kc3hoaGpvb2orN0lvQ1d3RXB3cEJHeE5pbWtGSjlENzl5OXYvSmp2N2NvYzZUc3ZVOVJnK3hLWWhvZXFiMzlydDcvdUh2VHZ6Nkw5eDZZUDlNTG4vczVOQyt2VHVrRktacGdqOUlMNmE1YWZwQWVDbjV6b3FJdkdybnBrRmhXWXVrTDhCYVV6THBKbE9GaVRrc28rTmdzQkpLQ05naVlUeVZHOC9EV3FhRkUxQU10dTNyN083SWpKUkxPZzFwcnRCU1hzRi9ZaEFRZ1MwU1hOUlh2M3dUSEluSUxPV0N0aVZtcXZueGN0b2RZSWF0TEN3S3hCS0FMdnI1Ukc4L1lTTUovT0hjVE5hMklSZHBHbzFKdEZJcDQxVlB2ZkRDWFcvNnJ0em8wRGMrLzFrbTdMcnVZRGc5dmQ1UVRZNGdNMFp1eGR6L2xqTWZGNTIvZmt2cis2NnBmVGVwY1ZMREp0aXJXOUlaQ3Bnb0l0VFVsZkQvNm5oNWEwL3VwckR5NXI5TkQrNEVrUTYxMVpKS1hhTW1EbGQyUC9sYS91Tk5VMmxYdmZLR3pQdDdFcS9xbHBzVHF6U3RwenovbXpQVnI4MVV2akpTL05TVXZiT2EvUW1Wdk11d2I2SVJXZk1jQTJDR2JlZnljd3hTNlpRcGwyMDNZVGtKNkVpd0hwK2MzTEpySjN6LzRob3RzN0Njd3ZTRVZ5emE2eXovd3lSY2djS3BZN2pyTmF1b0lhcnRkMjVHMFRkVnJTMDdlbm9xK3BkendVZWVyN2pTZTlQTzhyc1BhRXp5ZGw5TG4zeko0aVhrQm9ZZ3kzR0dqanliN2VpeEVxbXdVcGFka0Myc0M4Si9UbmhQNmVCSlJGUEVnVVhhUWRLdG00S1lxejdJRTI0b083VnppMGpjSXUxOUJwTDFwT0F5UWRaL053UjRFSnQxOHU2by9COXpMVC9RU3hrSGt5VVVRemdTZnBONjlUR0RCektFRVkwSTJLa0F0UC9oOWM0TmJlTS85SEJ3cE56OXgwUUpIWTRLeFh6MS91dUcvdm9Udkd0d2MzL3ZYTDQ0TWpZNTBOL3IrMDBXWlVRSUEzK1ZkOC9HMk9rTWtrbmtjNEhuMGNVaSswa0liYlQyb2lVQzJ6QkxJYlBaVE9IOEhNQXgrZlBDVlppVmxFTDlmK3k5ZDV4ZFYzVXYvbDE3NzFOdXY5Tm5wQmwxV2JKVkxOc3lOdUJHTVFaTURhRUdFc0lMSmUzbDkxNENDWkFFZUNFUVNFaEM4a3Q0RGp4U1NLVS9TaWd4Mk5nR0czZHNTNVlscTAzdk03ZWZzdmRlNzQ5ejd6VE5TQ05oRS83STB2MW83ajFubjdiM1B2dTcraUtGbExUcGlhRVprRmpKMXhGaFBzanU3dGkyditmVWQrWm9ueHZGdHBXWGc4Q0xYZHNNempqN2pmNFgvUmY5WkltYi96T1F4Tkd4QmRobE9vMnRXOXIzMzd3TmsvVXp0RitNckR0OWJHWnV0TFlyM1FsbVJ6bWNiQ2NDb0lRSzQybzlxblp0M0E0QTlyem52WjRjejJUU0lMRm1LUjVtV0t1RXlIWDN0aGR6VXlQRGozei9yaTNidGp1K3I5Y0RNd3VuMFZBZFZuUmo4bGVwZWx0cXcrZXZTNzlxb0xsdjFPQ0VRWXB3emt4UWprTGQ4R1NGc2k0aUczMzFkUFRobDh5YytHNzh5T0cyYTI5Q0RNcFliS3BtYnQxUi9Pak9uazFYdW4vUzUvNWluMm8vRys0dWtPenkwNi9hbUg3VlJtQi80MXRqNVkrZW1Iem5vTGU1MHZZZTVWK3Q5V25CQVVHQ0FRaFptcDdPNWZOUWpyRldLTWYxMDBHbDVIdE9VQ2tuS1UzVzFTOVNsV2RtakRFNHozcDAxcHAwVzNIdThJTWFnQWVzSVc4clFSWTlHWEg5VnRWSG5nVXEwSS9QWi8vamRQU1BSNExQbmN5SUs4eU5mZEUxUTdxN3B1WUtGRHY0S1lGaFp0ZFAxVXZsSngrNGQvZk5WN2xwRVQ2RTBsK2ErbTNXVmdweWE5SGQzNUg3aFhhMVBhWDZVbklnaGNUM0xXSXpVamVqUVh5OEhuNS90dmFkNmZMZno2cWVTdlkxTXZzU0VyMUdEd3VPcUtuTklOZzVrWDBSS3Y4Mkd6NVU4aTRyMmlmbk1WbWhIZTBJMTFBa05VT0VCU1lzdE1adUJVTG1qVnNIZGhkR24zbmJ5SXVuKy81RnV0dU1QalhYcy91Uy92MlhqWTBNYjl1MmJkdm0vakNNNGxYRGY0bVkyVm9McFJaZTZXVmtyZHZlUGpNMGRQendvY3VmZlkxYktFU2wwamt4ZU5XWlpKa2xVWHV4L1hoNEVxeUpCQzh4V0NVeXRxdWtnTXJJd3VDcFdSZ0xjY2JicUMyMHZmNHRlKzc2MnRINjRjRHBjRWdKa2tnK1RPREViNE9ZQ1l3MWpCc0xUbzlyM3YrYUI2MzgyalNSclVsblhIOTFLOEIvMFUrR1Zoc3JQdXRlTFBjcjV0VmJyalhOVnFhMElwRW8wZ0RTWUEySzJjNXBNMk5mOW4rdWNuc3plR0oycFJjSUEybG42TlIwWTFabStnckNXa2M2bHUwQ1VrcFN0YmhTdDNHdWQ5TjVhNE9TM0Q4akovMWlFV3VIMWh0cm5YemVUNmZHVGh6ZmZjWGx2ZjM5TTRlUERoNDd0dVB5S3pnTTF6bDdPWWJxdHFKQVl6K0w0R2loLzk3bnUxZTJOL2NORzV3eVNKOFI3THZLV1lDVTRGUHpLQWUwclJqZlAxa1B4ZndiT3V3L2ZLVjM2dzZ3Z3k0ckdaTy9wb05iTjI3OHJmMlpEKzRnYnpYVnJnVXFqQWFqWmhFQmxtR3BLZUE2UUZhZ1M2UnU2a3ZkMUJjOWZQSGNiencyK3ZZVGJXOUUyMjlhUGNwY0k2RUVyQmtkR3RwKzhTWE40R2tnbGNuTWptdmZjNDJPMTZrdEZGSWlEa3N6azlKeHpqZm9SbXVkN3QwZ2p4MXJEQTVuTi9Yck5RQmZXUWh4NVdZWXd1RUlSSENsdXFpb3JpNm0zbm1wZit0dzRmWks3YXRUbFc4ZGFyemtSUDNhRTdCVk5Wc0V6cldxL1dRb0pxL1RuWFlPai94SGQvYWJGODEvUDFZN0JyTC8zK2Iwei9TNis0cHJIU1EzZWdCU0FINXpPNER3cnVucTN3N05mK3JVL0MzVHhWK1QrZGV4clJnOUpoT3pzWmtUenNYRzI5ZW9mR3ZXZTFZSGxNQjRHVnZhSVduMWZMQm9UZEFjWWRiaXNSaVhPSkJ3RDdadkdyNTU5SnJiQjI4WTNQaDVxUzZLTU1NWDd6dHcrOWUvM04vZkw0UklwVHh0ektwSm1LVnk2cFV5UjZGMEhLT1hSZHd6czFzc1RKdzhkZWUvZjVXVUdoNDYvZEkzdmRsSlorS2djUUZwT3BLQ0xWMmR2VC9TUDZwRkZVVXFXdTR4UWtTKzZ6RnpSNlo3OHRURFBGbWpsSVA2Y3I1QkNneVZOMTI1NFcwZmY5NWRuenZDRFJ2VTR5Q0l3NnFPd2xnYk5tQm1XRmpEblBRV0ozT0pGcjhuS3czSlpxSVZrcFNFMDVGc3NqaWttdVhlU0RZVkc2Q1dYeG9EWXJGZ0hHR0ZjWWg0WWVveXNOeVBoQUFXcXpqcHJWejUxc3M4Ly9oRVB4VXYybnB2NGF6ZUptYzUrVkxXNlF4RVhPb1R1dlFDQ3kySmtaaVFHRXNzcklsUnlZS1Q5OVFrLzROdDAxTUJsbUVCcHFhR2hnR0dBRWtTa2tpQ1hDWFRHVGVUOVp3dTU1clg3dDc3NG0wNFBnKzVtdGxGaVdPUERIa203eVBMVHV3NW5tbnBoeG5zU25leU9sdDNrTy9hYU05ejdqUmprQ3B6MmMwYnNYWW1ZR2FHbEY0cVhaNmJRYUV0Mjk3bHFXTVRvNk03cmpoNEh1amJhMFJPakx3Y2VxWnIwL0hueTIydG5DRkRCcWNNTXV0QVh5VHFkbUNzREVISXFQQUxKeHF2djJ4SVAxaDQ0TEVyZnVuWE9GMkhVeDk3R1VXbjJudS84MnovdWIwckR3OFpKVWFaVWJVSXVha3RvS1VKR0JnV21MSTR6dWoxTUFEM1FIdlA5NjZyZjNucnhDdnZOcE9Wem8vWitCZ1RCQWRCSnAvdjZ1bEZFQ1JCVG00NnpaWlRxWFI1YW9JYkRjZnpvekE0MnpySkxEMi9Nak5WSzgrN25uZmVjNXNoMDdsMGZhN3kzYThXM3Z6TGF3MmVFcy9ZREZlaUVrRVNBR2lEQ1lOeGhxdTg2L3J4TTNEK1lLdjNOeHNhSHp4Vi9mYmgraHVmcU84N3JXYXpzcDVtK1orYW1zT0l1RzFld09uNTNIT2pIMjFxWExHaCsyczdVemR2WEd4UUFTTGJWQXRMZ2dmNHEvUzFkMDJuZDAxbis1L3VtZitqb3pOLzlIajFzM1BkSDVmdVJTWitVamJGTzh2WmwyUDJEMmZ0VUowNjB6eFRvNWs2T3RLb3gyZDdreGpJRWlyY3hHQUhvc2Z2UC9iQ2lSZmVOZlN6aHpkOHd2R3ZuZTZuaTl2dXYzZDRlSGpMbGkzMXhocFRnZG4xVTVYWnFaRmpSL3IzSHRDbCthWE5wQkFnOGNCZHR4ZlR6dlAveCsvYytzbGJidi9pNTI5ODgzOFQ0eGNhQm1SdFcxZGZ3MVFyVWFuTjc0eHNzSFM1SU1EM1BHTjFSN2JueE9uRzBNblpUVmR1UkRWYXBUenFZUG1LVit5NjRpVVgyYWxhVU5PTmV0d0lkQmdhSFpxNEhwdklta0RyeU9qSXhKR05JNk8xalVKampRMERBeUJveEFEcFNGdk5FTkNCQWNEV3hvRW1JZGh5RkdnUWlCQ0Z4bG9ybExEYWhnMmRwREV4eGtTUkVhMVM1R0hVVkxZVFlKanRvbm1iTFpQbDFocFBBTWljWWFPemEzaW84MXJRZU5hT1QrVCs5WXdOQS9SVGtOT3pDVTduZ28ya2lWaDdqYUxWTXJQUUdheU5vR1VCY0FTSUpvY0ZBZ1FKQWhoTVJCSUVTa3AyQ3RkVjFsb2ljbDNGZ0NCeVBjbVdsU2VWRXN4d2ZRV0c0d21TUWptU0pFbEhTa2U0bm5JYzRhV1U2d2d2NWZncDVhU1VrMUZPMXZVelRpYmo1QXVlMTVkRlN1RjBHWGExU3NDK2c1bkdrUjhOOStSM1d5TThYNlZjMXl6aFhLWDBac3RqdGszbWRsNnlza3JEdVlna2dscmtSbkd1dlFQeG1zVVZwQkNJNC9tWjZZdjI3WWUxWGlwYktCUktzOVB4L0p4eVhSMnZubGx2c2ROak9Cc3NIRG44WW12cVBRT25ieEpkcmJMQnB3MkdETEswaXE1cmxSTUJ2c0o4d05NMTZremI0VnI0eEh6ajcvYVcvdjNkbHhRNkN3ZDJRZ3lQM2h6RUU3MmJUajlmREN5cHJhZUJXWXM1aXlvalloQ2dnQVZYNVdWc1Y2c1VXMDVHOTAvU0k4bzUyQTZQMDY4WTZIOGdPM2pGTi95L2IyUmVyK1Bqd25Md3JPdWZveHhYTnhwRWdMV2VueEZTdXA1Zm5aNDgvdkQ5TzY2K1R1aVlqVG1iaWw2cHVja3hHOGVVT2tlMTFsVXBpcUwycmR2bXZ2bUY0STF2VjJsaDZzdDVUUXVUZ1VMS1dibUdDZ0FFWXpCcWNBcXk2R2QvWjBmcXJSdTgvOTdyZjdyZjNYT28rdnJIb3N5TU05ME80djhVRHAyc2lOdEtxcEZ0KytoMTJmNUwwbC9aNHI5MEF3QUV3TEJHZ3hFQ2VzbU5FYUFJRHBBV3lCSHloTlJ5TFdYQmJmdnczdHgvMnp6NTJ2dUhYbjY4N3krbGY3MkpqMGdJbUNtUnZ0N08vVlc1OHAzWndpLzA4M2lWSjBxVXhPT2ZuUklNcmlVWXJKTDUxUFBOYTJiZTdnLy84a045SDZMTUw5cjlsMTk1eHplK3NtblRnRmc3b0k3WmVuNTYvUFNKcm9FdHJ1ZnJNRmlZTWRKMWExUFRaRzJ1a0F1T0hYMythOS93bVQvKzhNeVR4em9HQnFLWm1YTXJvbGYwS29BbzZtN3ZObzZlYTB6M1pEYldkR1dobXhqTXpGa3ZaVVJZa0oybW1qN3l5T0NtRzdhMjFzWWxsTXlsNFFvY0lYeVZ6cnBwSmFBRUZLRlZIaHpFTGF0ODhuYTFsdWVGa0h3aVJBYkdKdms5QU1BeWg0YUVZR3VqeUJBQW9qRFUxckFVcEEySGdTWWlJVWpITm95MGFJSXhoMkVMZ0FYcElEYWhTU3BKazRRSmpRNU1FdDZYdk5xNnJxM2hoWUEvSWtRTm8yTzl0UGkwRUJTRk9ncU5XTDRjRThGYURocWExN0R6Q1VGUmFLSlFpM1VFRkpLZ09EVGgraG8vVGNTV2hSUisybGtjb0RYSU1pc2wvSlN6aWlNaEE0UlVSZ2xhbGdmUVd2WlN5bkhGUXBJOXR1eWxsV3dWQkdQTDBwUEtrMnc1VVhLb3RCSkViQmxFVGtZUmtiVXNKWG0rc29aSndQTVNBSWJ2SzJ0Wk9jSjFKVE03bmdKQWprQlNUVUVRWEFuWlFwVUU5Sk4rVG5LNE1XQVlzVUZrVUFvd2FVQzBDdm9haTk3TThlK2NHSHVzZkczL3RyQWVGTDJjcTV4YXNBVHpTRXhPbi9TNmV6TWJOMmljRHdJekJCQU5ubFNObXRmZWJ2VWFRaFN6ekdRblQ1ME1nMkRMenAyb1ZpRW9sVTVWNTJyVmNxV3RxeE5uQldDTzRmUmJRSXk4eUxMYk4zRGlSdEc1QkgwSDE0MitDVG5FNDJXRW1qb0s0YjhlQzdmM2oyK2R5bno4enUwdmZ3TXlJek8vcXNOVDdadEhYeUQ2V2hiZkJtUENZdFlpWUFqQUlhU1RVVmpXRDRzVU1UcGRHRURDU2ozLzBYdDYvdUZGTkNrd3g4N2xiZTN2T1REN29idFNMNUlpYlRtQW4wN3JPRTc4NGRob3ovY2N6emNtenJXMWpaMThNdGZXMGJON2o1NmJYVFZ6R1ppbDYrcDZkWFpzeFBYOWxYdlhSMGJINlkwRGhlTzNUL3p2ajIzOXRYYzJGcVliZzEyRUNrN0FDckZaWldJbFJJQVBWQ0xjQ1hsWk92OVBlNzAzZDNwdjdYSi90NmY4OWdlRFhVUE9SRHNaOVpPMkNqTVp2eUhJYmZ2dzlZVm5YNTYvWXg5QllSWUlnRkdOd01JREpDMlRkNU0zS21UVURhWUFoNUFpRkFYeTFNeWpCZ0JRTzNJYkhuak96Qy9uaDMvOTRZMGZWYW1iZEh4RWNwM0VScDE1Z2FqZU9sTjRkUS9sWEV4VVVUTndCUFM1SHR3Q0dVS044YWpHdmlZR2Q5eHlVQlNjc2ZmY3R4SGxnYmRjVkxpdloyaHdlUE9XVFkxZ3pkd2F5dk5xODdOVFE2ZjY5eDVBMkdoT0YyWTRUcmxTaWFOSXl1emN4RmpmN2oyNzl1NjcvV3RmZWRWdnY5dHROS0o2L2Z3d09BbWVhKy8wOC81NFplVGk3aXRYN05aV3A3eVU2MGhwL0o3MHBvZnVldklGYjNrV1BMVjZQMURUSHR6RTE5Wi9yYW0raEwzRkdkdVQ3NElXdnlEUmdDc0FCT0Zsbk9TRXJ2UWhxQ21heUphWGhDRElGcWRNV0Z4bkU4aGZ4bEJqcGVLVXNQeHRYTUlvcktBek9ZK2svYmtGaFhVdVprOVBzYS96b3VRUnoxbFZmSUhPSWt3a2JQMnkwL0JDQ2IvVzRWZ2N0V2FUNWRkZHRpNjNzTk15RERlUFhVallsK2ljTGNOeW92cG8vdFFXc1FWelV4RzlZRExtcGVmbkpYTjFDVGFmU1ZMQWM3N3p0UWN6dHJjbytpWjROSi9xSTBGTEhvaEFjbVQ2U1BxWm0zeWdjcDQ1bXdtSWhrOWtUSVJNM2xZcWE3WkwrWTgrOEVCYlY3ZHE3MEM1UWtJUTRMaktKdG1UVnZVZFNaNHpoclBaY0VNT3Y4aUk3b0dCd3pjaTIwcjVNSFErc205Q1NpQ3dtQ2hUU29FUmZYTTRmT2VMVHQvOWZ5N2xsSHJ1UVAxVFkvUGZjUHB2dTZHSnZoWVlOSmcwMElBTFpGcTRlNVpyTWRDaHdqdEhaSDlXRGVUOWwyMlEvNUF1L2RtRHhUKy9DdmVFU0t2aTcrMnUvTVhSK3RlbnNxK3hlbGkyQW8wSWdESEc5Vk91bjZxVzVselBUK2NMSng5OTBQSDk5czNibWhpOHZJdVlXYVF6VTA4Y2FsUXJtVUxidWJOTnJFWkVGRGFDL2lzT0h2N25UMHhjZGxYM3M2OExHaUNMT0FNTkZMNTBvdU10ZDV3cnRva0JoeUNCaHlKc1Z0Nk52ZTZKTHZYbWduTkxzZkxDQnlzdlBDUm5Najk1ZGJScHF4YytlV1cyOCtMOEhRY0loSWRqZER1VnYzcE05cVhUcjlxR1NRMUppSmRFNnpZTkNZU2svcEFCYWhZbEN3bGtCZG9KbldJaHkxWEhKNjRRZVdmMFhmY085Q3BubDQ1UFNEc3ZNamZaeW1mbncwY3IzdjZDUFRHUHFRcHRLYUs4am9TTHEyRncyMGN2RlRrMS9KN3ZiODI0QjM3aHNqdis3SnNEQXdObk9RZXpkVlBwNlpIQjNxMDdwT3VaaFpoZ1prZEtrZ0tNUnEySzZha3JiN3hwNUpPM2ZQWFAvL1NsYjN1N204N0VNOU1RdEg2dW02UEk2ZWpJdGJlTnpKN0FqbVhtTGdLME5tay9sZmI4UnIyK3JldVMyKzk3NU5TOVExdWV1dzJISnVIS1JjM3VDbHFBdEhVb01aZEI5YXF5MUxtT1gveEZxKzladG4yVlcxcGZYNTJsMVRsUFFHdXJPeTdvWHA1Mk9nODJZTzJtYTJwNFZ0MUVhN1pZMkxsMDh6ckg4ZHhEMC9wenpwYk1pQzMyOXd6ZWV2THVyNSs2YnVQTDJRREViZGs4THhHcEpDbWpheE9sazUyWHYwUUFPSWN5ZUJXSzU2ZnpuZ3NwMSt4Wkl0UnEzVDA5dmYyYnVGUWhRY1FFa09lZXExNUxESGViTWROcTZNWGEyYlYxNDZQUFcweXRNMlp4Nmp6Umw0R1U1S0VTenpmRXhydytNbU5sMS9EZWNmWDV6KzkveTV2NHlkOFo1Mm9BQUNBQVNVUkJWTkxFZTIzN2IxemgzZEFGQUEzRzR4cDFScnBWd1hBOVYyR2dJT0xUNWRyWFQ3VGZjaTNta1gvOUpYTWYraUZHR1YwdXhneHRrUDUxUFkwN3g3T3ZXem1DYkMyVTY2VXpsZG5weEpuY1RhV08zbmYzTGlIYU5tM1Rjek84aEUxaFpzZjNiYU0yZHVxNDYvcy9UbHA3bzdWS3BYWWUySFBvM1cvMS92YnIrZTA3U29CYnRYMnYvUGYyVzQ5bTNuSGxPcUxFdUJWZE14amp1Q1loOC8rd3YrMXZyeXArODRiaVgxMWpDNUV1bE1rOExVVXRWcnNac3FtR085YVJPckl0KzVtTENJUzdJNlJWZkhpbStzVWozc0V1bEJoWjFXUnZWMzJXNUhGY1FvYmdFbW9XSnd3ZTBUaGxFRGVQYWZ2SS92eXI5bzMvdkdFalpZYzEwOExkYlp6ZGplcHQ4MGhKQ0lIeE11dzVhem0yS01IZ21QR29SdFM4Uk9IMzluUi82SnFoMzVqZjhNTkxPNjV0SHhrYjl0MjFGUjBNeC9VYXRjck0yTER3VXkzMm5EZ0lPbnE2bFplcU54cGh2YUpMODhUMHlyZS9ReWozTXgvNThOanBVMDdmQmlLeC9yeHJ4aGo0cVkwYk5veVVUNE9OV1A2RTJwcVU2K1ZTMlpvcHRjdUJUbWZUUC83bHJiQUMrM3ZRbVViT2hhK2d4R0lheTZTM2VjSG5KUkU3ZUZITHQ4NFhiNEhvTEI5YTloSEx2eS85ck5wbThYUDJxN1ErWnlFKzEyZXhFODcxc1Q4ZG4zWGU3WXBoWGZFNWp6R2xkWTNzcW1ONjluRmNEL0dTZWJ0aXhpWjNLd2twaFk0VXJ1aHJqTlQrNHZjKzMrOXY3WE11cXBqWmxKY3VaUEt4amx0bjRwUktUOVZISm1QZHQvZFpGdWNaQkV3QW9NZEdNOWtzeE5wdk1TT3ExUFpkZldYWG5pNXVLMk9BcUMrS01pWHBnbmp0RlVyRHVjam9RVFg0WXUxZHVYUGprUnNYMFhmRzRyaEc1bnpRRnkzdHhWZ0pJT1JkZmRkTTdVRC8wZnMvOW93Tlc5UXp0bzY5cHV4czJ0cjI1L3NCb01GNEpFYkV5Si9uSlFRd3p0blg3dEtqbGZnSHM0amhQWE1EUEJIY09ZSjJnbXRRaGRPUjAyT1M2MktWRE15RWRENXZqSFpjMTArbmhaU083ei94dzdzbWp4MVd4WGJsKzl5YXhrSUl5dWFIbnpqY3FKU2RDeTc4bWx5VEtLdzMzTDVOTy9zM2pQM216MDFodEhCZmZhRGpsdDVISmd0M3ZqSDlpV3ZsKzkveGUrczdFK0FScGkwaW9FTTRCNHJleTlyeC8wdDFleWE0ZnNpazZyS2V4bGw4TUo0eUlsT28rYmNOdExWZG5mM29iaHhtUkJZWHE3bi8rUU4zZjJmNkxkdGhxZkgxazhGOTQ5N3plbEU1bDRSS2dDSzRCQXZNV1V4elV5WUdNcS9wTC8zSlNQaEFKZmNXMkhFUzdjeFZVZjEza1g5dU96bUs1eHZVbVVYR1hTWm5uNFVZOEFnQlk0YlJMUk5jODYvdEVtMnArcnRtVlVZOTJYTlBqOWZMZW0ydlZ5SzJWc2RSMTRZQmNOTXh5Rm9yMjlwbXg4WkxVeE5wMy9YenhWUXV6MkZ3MFRYWFFaczd2dnpGb0ZZZHVHZ1hqRm5uSEdKbW1jL05qNDg5ZE45OTEyeDl2aFJ5cVRzSkF5blhxelJxSTdNVEtaWHFLUXc4Zk96dXdVTlBPcGswS3BFTGtwNUUza09iajV5UGdvYzJId1VmZVE4RkYza1BlUTlaQjJrSHZvT1VnaXZoU3JnQ1NrQUt5SVdWRk0yeVh5dld6WlZQd012K3JsanJWM25jTlVRaVhuUG5mOUZQRjYxSC83RmlNaXlqNVZhUEJXaFBJRHh4VTNBbFBBbGZJZTBnNnpibmNONUR3VWViajV5SHZBZFBvYUZuSjZxUGZQLzBwOTc5MmNhUWYxMy9hN1NPeTJHcHU5QytlMkJiRUMrR2ZHYTl6c2VIZjNCL2NQL1Y3LzhMbWN1MlVsZXRqd1NFd3R3WC8ybHp6aTl1M21aWHEvL0dHaUxGemdCRG9uRy9iZHlLOEpzMi9CR2l1bzQ3cWowSCtud1ViQkF2VTZFellPRHNOdEVqY3VnTkp2UENTM3EvZDhOaTU5UVpoelU4UUsxYlQ1T2NNNlZRRHZtSlNVbzU1SUcvYXU4dC9iUFRkLzgxNzNwcitUZG55bmRtK3cvZEpQSU9MUENZaHNiWk1sbWVoYlRGRmhWOGE4UkcycnUrQnlrRXQ0NHdzLy9jUHN3WXRFdHp0TmE0NDNUNkppWVAwTXU2U3hDNW5qYzNNYWJqZU9QT1hZMUttZGtLcWFhR1RzYU5lcTZqeTgzbHBWTFM4MFFtTjNuczhPQ1J4MUtaN0krL01oQlJYSTh6Mjd1TmY4cjlTR1huZThyWlYvZmw3L2xadVNtRGsyYmQ2YldTd2NnTFRCZ0EyS21jeTl2YmoxNGxyM0hwUGQ3Yys3NFhkODZvNlE0ODNicG9Zb0RVNlRibllCNFZvR0hRNGZKamtUNWVMdjc2UVV3QzRPb1hqdVhlY1BGNlJ6ZDVMZ2xrQ1RGd1ZLUEIyS0lBOVAzZ3VzRkx2NUw1VkpSOWs5RkRJbjBkbHo1WmFUeFVUbC9YeVROMUhpOVRad3FOZGQvNWdpNzZVSXg5VG9MQmhkL1lWY3Q3WFcraC9uMVRvNjk5ckU5c01YV3hlc0lUWnNkTFZXWm15OU1UK1ExOXRsNEJDOFJBSTlxNmZmdllpYU1BeGs0Y2E5OHdZR0pENDZPWFB2ZDVXM2Z1dk9jL3ZqMHpOdExWMHhNM2d2WGNJd0VJdyszYmRqZW9QbG9aM041MlNXaUNwZG9jYlhSSHZ1aElwOEhsakdtL1lkUHJIcnp6TzBkdS9ZYmZLVEpGNmVkOU42MzhySnZOZWVtTWs4NTRxYlRucFZ3MzVUZ3AxL0VkMTVHZXExeFh1WTV3WE9VcW9SeEJTa0JKS0FsRmtCS09hS253V2xlbWxnWjdxYjF3d1YxcjZlSkxXTVVpU0FSam14cUxaRzl5dGtURWFTbnpGelhlUkRDSjE4L0MySjJoVUZsZGNicThMOC9DOUt5UEhmcHA0Z3ZXY1ROcjdUL1RoTHhDQ1UvTGR5MkVreEV0MXY0VHRBZy9pWUdmc0JnVWxFUndpSmFmbEtSbFdFVXR5RjJZUWsySnRqV3N4aUkyaUMwaWE0STRpblFZbUNDTUcwSGNhTVJCTlFncVFiM1NLSmNhYzNPTnlteWpOaGVVSitxVnNiaTd1UGw1bTI3aVdFUlVNWVo3Mjd1VWJQcGp0MjVNUFg3aTl1S2VpOXY2ZW1yMi9Nb0dKakZJcWxySzlXNkdQaVBtd2dDSzNXM0cxbFhwTTZMeXo5ck9GZVNPTnJuVkYrUGMrL0QyY25aUXc4SHI2NExZekJFNXJWNWxPSHRNY0ljYStSV1RmOTJsWGY5eTllSTVJOFloM1ZRUW5tL1ZDSmQ0dElSQVUyK0dUNGRqVDV3c1hmckRGNzMxWmViYm1QaDd2ZkVmcjVFYjB3QndVcVBCeUYyb2Z6OHhORlIvM2s0R3lXV2RqWG1laXBvQlN4YWlReUVXM0xBaXFiRzB5TDd6d3F5emxxZEhoZ0ZpaG5JY2tTdE1uSHF5TkRYUjFiODUyOTRKb3ZueGtZblR4OTFVU3NnejhoeGZ3QzBiYVhQVmlqdS8vYlpmeUQzWW0vckVudlE3TGdHQUp6U203SGxXRTJJZ0p6QnVJSUR0U3ZabTJvNWNUVmNyOFFFMSs1N2I0NjVaWjZyOTZjVmdZU2x3VkMwcmV6S3dnTEFvb3ZFZlExUncxZDRpQ09HdG83RFdmK0VBSnMrekloNEREaUFGQmcwa1lVQTYrNHRkZjNqMTVIdHY4NTZwVkxkR083eDlZZTE3cGZUenV1QXJqSmV4dlhOZHJsZ0xsSlJPcWpLT2F1eHU5bnptRjdjNGJmN0ZyNVJqbEcvODBtTnFJa2VodDRwZm14V2tyQzdNanpVZXkyZDdwQlpJV1VvemRLbDcreWIzemtLMUZ2ZzZIbm5pME1hOWw4WHpzMlprT0Y4b3ZPQjFid2htWjllSnZnQkFoRXBsMDZhdG1lN1VFeE9QN3V5NkFrc0NrUWdJNHFnalgyekw1dWVxWmVIUHAzWFh0ZDJ2cjl1NWVseHJURmNiWTdWRzNKZzNnZUZJbzZKNXpwSUdHU1lETWlBclhKSU9TNWZJWWFXRVZFSzVRaWdoSFNFY0laV1FTZ2dsSEZjcUpSMUhLbGRJU1o3dkVMT2Y5c0RzZW83alNtYTRhUmZNUWtrMzVWcHRwS2NjejdIR09vNzBYR1dzbFZMNG5zT1dHZXg3anBRaTJlaDVDbUMyTEtWTVRnVm1rZ1JQTHRxZTAwNXpsUWZBREUrdHJBSjc1bEs2Y2dzM0JheFZCUGNsR0xQS0VKeW5XdjRuVEt2ZVh2TG9kbFZsQXEvaXJiYlN0V29KNjZNdEl0T0VZY01JTmFRQUVXTERzU0ZCMW5JYzZTUkJUUmpvNU9nZ2lFbEF4emFNTlJFRlFReEFSOGJFMmhxT3c1Z042ekRXeGtTaGppTVR4M0VVMmNRalBReE5ITVltdGlhMk9qUTZORkZnVEd4TnlEcUFEZ0dyaUNWWlI1SHJ3ZmRrVjhiTDk2U0srYzF0V2VxTTRpQkdXY2NtNDZjMmRmVTFvckRKMFlGOTZRZng3SkdodzF0KzlkMEtzTUY1QXJCRVVHNDRjWlFydGlPT2wvWWh4MUE5UnJTTDZwZlYzRWVzUldmdTdUdXliOW5rN2l6Q0FtVkVQNWpLL3YzQTlCK2QwUGRVZWo0YVExZzcyOVRLT250TS9ldHE3SjIyK0xiTE8yNDV1SGc5QXh6VzBHZXRzckFXT1FvMWc3RUtQSVcwRE85dHpKa25yMzdmMVZteDY5U2J4dHQvOGVyMHoyMENnQ21MY1h1QnNtL3p5UUVMMGVhYXNYb1RkRE9PTGRlV3RWbkQzRUNlUC9uRW9iQmVUeGVLMWZrNUtXV0NyMFNVeWJmRlVUaHk3SENyc2dCN3FZdzRpOXAvM1VSRzZueVowOXorNGVzenBiMzVIeDUwbnRFR0FFZDBVa3I1L012NUpSZzhha0RBTmtWS0ZlKy9DdGRML2hETi91NTNkZWVzTTkzKzlQbGtzVFF5Y0VYc2lvMWVVOHZrSUQ1VlVYMVpwQUVnT0R3bDI5UElvc2tsbk4vWkUydTN3R21EUEtFZzh1KzVxUDZOc2ZHZk85Si9oeVEvVGorSDV6OCt6K01OS3ZvOFdjTmtoVFlWejYzb1huR0pMR0hhNHBUQmxxYVp3bjFGYi9HMnErZzVjdTZXelB4YmY2aG1yR3lrbHNyQlpLUXVsTmt6aGNmMjB1YzZ4OElBTEZsYnRRbnBtem43YW0vN1Rkc2UrOEk5ZTNmdEdUeDZxTmpkbStub2lzcWx1RllqSVpTanptc2E2VEJVQXdPNzl1dzdkUGU5TDluejh5djhPSXcxdnBQWjJOa3pOanVWOWRNaHFvS0ZSOW0wV3lRM2ljeWtwbnpCc0dRTWE4dkdRbHNZeThhd05rWnJhMnhERzliR0dtMWpZNDIxeG5BY1dXdVRuMlNaYlhJZ2t6VmNBV0JZQXdReVRiRkZHRENZR0dRQUFsbkFNcE53SUYyd0FRbElyN24rS3crUWdHRVNwRHdKZ0MxTEpSeFBzbVVHaENEbGkxYjZRVmErRkxJVk0yTlorVXBJMFJTNW0vRTJha0ZnWnN0S0NUL3RXTFBZejJ5dGNxV2Zjbmk1SzFtQ1JhbTBLNFJZc1d1QkxITXE3Y3FuZ3Z0K3FpaUpybTdVSTdFcWhoQUFOT3Foc2J5MEFRblNrUW1DZUtGNGx4Qmt0RzAwNHNYUUw4dEJRMXZMUkVRRW80ME9EUWxLWXJyaUlJbm5ob210aWF3UVpKbmpvTG04NkRDWkRHUUNnSmdOVEV4RTBDSFlnb2pBQkFoaXdReGlRUkJnSVVnUWhDUWxXQXFTRXE2a3ZKUktDc2NWVGxvNlNucEtLRWM0S3VPb3ZDUGhTQ2hGcm9BU1JJa1dqcGtOb2pyUE0xZ0tOVk12WGI3OWttSTJQMWVaVHg2V21kTmV4NCtHYjUxSzR3VS84NWJ6TGcvR0VFQTRmTW9KR2s3YmtoZ2tDeERjWFVZUHFzbGZOdlVqbWNLdlhOejIwVDBpNDZJRUhHZlVEQXJLdmJyTHpXcm5XZTdvYng4YmUxdTU3OU1CaDh3TmN2YWEycitwMGZkejU3dWUwZmFSUzVkZE1mR0t1Z0IwWkVaSzhJazVyalNvTFkxQWwrK2FGdGZYQjY0ZG1ObytwL3EzZG56NmNnQVlNemhsNEs4UlU3QmVJakNnUUg0ek5SVUpRY3ZLdEsraU9XZG1ONTJPU25PVFF5ZmRkSnF0Vlk3VHZQTm1BNnNjUnpsT003MFBVWExVQmQ5bDgxYU1qQXNsOGtUSCsyL0llbnVMajEraHR1VUE0SWttK29KeFFmVjBDY2dKakJnb3dpWkpvTGJ2SGNSMWpBL2EyUTk4SjI2YmQrYUtUeE1HTXpGcFNjWkJwcVdvWlBCY0pMc3lDWE9FR3N1Tk9aaW1zdnI4TDVDNGFBRlBhbHptUXFEblc4OGF6RXhQdjNPbTZ6TWk5V3c3OTlmbDJuM2w3SXQ3ZUxxR2tSSUdpdWZuUjVCY0lrTVlOdkNBdmlZR096ZDBGaDY0Mmw1QjlIR245Tjkvd1BPc3FwbG1IMW9SZDgyb1VpSC9xYXV5b3p2VXBXM2locnpZbGJLbE9Qald4T3dmakpZK1ByUGpuYzhhdWZ6RWVQVlUzdWw2OHFINzk5OXdvL0o4RTRVWE1JY3NBR08yOTI2N3QzenZiSDA0NnhTcWNYbXBGcm9XQmhkdDNISjArTlI4clpMUFpKbFpJOVFJRjdDM3BTOEdtQWhFSkJSY0FvRUVnVWdteGpmUlVpT0NhUGxRMFlKcWNPSDFZQUFXR2tTV0RjTUNzR3pRaEZkREVCYkdzaWFTeG1yRFdrQVl0c2JHQklJZ0hjVE1UQ1FZUmxjaWdJaUVzVHEyRVNISjE4SGFOTFBtQ2xCa1kyczFLQW1kSVcwalkwMHJtd2RaTmdaNlNaOFF3eGhla2JTRUxFV0d5N1FhRzJoWW45VzFNdUV6emo5cjhOTklUSkRnTmVjNmdTVFVTa0VYVmtCSlVzeTZ0WVVscEdqcVE4RmdBaW5LTkRYQ3pFb29LUndHZzYwUVVnazNDVUIzaFpKU01Wc2k0VWd2bVdkS3VNbWtVOEpoUUNnaFhRV3d5am9nRW9zT1dpS1poNFFtK2dxV0MrdERpMmxzWlFwWlNOQzI2SUpsR1ZZakFzTFd6a1ZOQUlGbVNuUGRoWTc5VzNmWGd2cVNESlFDam4vSHZmL2NlOE8rbmgwN3l1ZGwvVzEyS2VMUjA1bG1IYVFLRW90dmh0VldXLzJTblBwZDYrN1pNdkRvUVdkdk95ckFmVEZpaGs5SVlyYVAxL2lSV2ZmaTRzRGY3QjE4MnlQVDc3T2RId2tocVh5TG5QeFQ2djdRTXd2dnZtVFp4WTVvekRjaDRieEpDc1RBOER5a29MeWpqOWFwVmgvY2Q0ZCs0ZVg5a3pmMnpWMFB0Q0FudGI1MFdtZnJGQWFBRUxMWFRkWnFEbUpaY0JZbW5xMW9LSWF6VE8waWlDQ2R3U2NPeFZHWXpoZlBVdHYrQWhJSXJua3FJM1crVEM2MXYvODV1ZmE5eFlldWxGMHBBRGltTWJYWTFSY0V3TW16WlFWT0d5aGdnd1NvZU1kQjNtL3MrL1hzaDcrajgyVlZ6ajlOR0x5UXdtSEpGb1pzVlVPU0JGZjhXQW1FR1BDbzZTaC9zYUswMDNmM0RZUFAvR3JxejNYMkE1RzNUOWErWDhyZTNJT1V5OU0xbXE2ai9WeFpzYzRrQWFRSnh3MGNRbWR6Z1hZdUw3WWR2bHBjTHNVZk9uUHZ2a3VMc2lybm1UanVuUFhHdXR2LzhxYnMxbzNwajdRNXI5K0ZEa0lJNUZENHJSMW10RGIzZ2NkbjN6dTVyWERUME0xMzRLcDY5VWpwOUtPUGJEbDRwWTJqQzVqcWdnaEJtUE55TmNMRGsvYzhkOXZQMldoT3RqUWxCQXJqcUpESlB1dml5KzU0N0w1S3ZicXdQZmtuUkpJTUk1Rm5XbitXRHhpdCtMdEVBUW1zeVlCVGs3ZHRLcGlXM0pMYm5CRkVBSk1rUUFEY3N2Z0JZSUpZOG4yNWRYQWhuSFRsN1MxOFhiYmd0dmlEeGZkN2tXRTRnOVppZ0JobVRRQ21CSDROTjdNcC9wUVFFNlFreVdzOEs0Rld6ZE8vVm9WTlh0SzNMUWhNZHF4MHV1T0Z2aitqTTF1anNPQ2p2TUswdStDVzNXek1NTHJKQ2l4L0NnWm94Vmp4aWovTWJKbVoyYkkxMWxxMmFQN2t6a0xiRGZ1dkVvTENJQkpDQURBY2Q2WTNEMDdkYy8vYytLdCs0OU1NbVBCODZ4SUJnQzdQWnB0MWtGcTVtdHN4L1c1UitvclQ4ZDdMaWgvY0R3Q0hOT1lzVW9STUN6NEYwSWdBMk5OVnVUMi80ZmQzamZ5dlIzS3ZzdkVUWnZKUFZjOG5yczI5WS91eXl4eGZGTWpPbXhoSUtSNHU4MHdOYVJjcEdkMFR6VzY5ZjNOOVIrYjdWeFR1T0NpTEtkd2ZJMlprZmt6WkZ3QkFoQWdjR09laURnUkFCbmFxb2ZhMU5jZFp3WXlINUJ1WlpZNFhsaGRXMlZ4cGRHaHErRlE2bXo4TCtqNkZSRWJxWEFWcGJuL2ZjM1A1dlcyUFh5VnlIZ0NjMEJnM3lDMldqTDRnQUVaTFVzd1FUaGk0aEU1QkVHMzNIdVN0TVg4b25IM2ZiU2F1aXlEMWxPZm9JQ1pXbHFYbVlNbElwcHhtd29lRUxhai8ySmRoSUVVb1d6d2FZN3R5cis3by9zaXpKMzc3dHRSTFZlRXRldkt0SlR0YXA3ekxveUdQeks4cks5YVo1NWRBaW5CVXcxRW90REQ0NGtMeDhhdHh1YVQzcWJuZnZVUG5LMkE0cFVMYngyL0tYYk1wLzk0K3pHa01oWmozVVlrUUF4a2h0MmM2YnprWXZhZmt2YTNYKzhldTBxbUh6U3NlR3hwL29PMVViMkZUZjFTYW93dDQ3K080V016djNkNzV6V05mZnU3bVYrU2NRalV1VVRQdE1nUlJ1VmJ0YWV1OCtjb2JacXJ6UVJRRVVSVEdVYVIxckdOdHRMRldHMk9zc2RZYWE0eTF0cGtlYVZGK3dGSU9sWllpR1JJdEg3VkF1eWwzdGhieUZYOFgxdTVsQy8zQ2FvNlYyN0RJdlBFeWJkVloxd1ZDQzdqNXgxNUJXcWRjY3pWcW9zb2FocXovTkNLR2lWbXZjVStKK0xpYXE4RTZ1NnVKbUd1eU1tc2R4bGlqSDdsMXZvVnB4MDF6ZE1JV2NldHJJbUVuSGpzTFF2RGlWR2w2ZDVFVVVrbnBTS1dVNHlqbEtUZmxlV25QejZXeWZlMWRVb2hLdlNhRVlMQmxrMVZGK0tsUC85TWY5RDl2ejBVM3ZxaWtMd1I5QVpqWjJYVEtBeEZIY0RZWnNCeDlwUTFPRmpkKysxci94bDRFd0NNUk5Kcll1ZEFMQk13MUFFQUplN0xpUGJPOS9kVUQ0Kzg0emdGditNeHowbS9jdk93YXB3eEdEWElYZEg5QVUvODNOQWNpY2lVcXBqNDBKdHVWL3plWGRmL0taZTYxbmJoWFF6TFM5TlM4TzBTWU5jNnVvcnVyQXhXQW9NdEJhbk03NnMxa0tYcWtMdktXY3JDVEM2c0xnWGxpOEFRSkNTbnhFd0JnSzB5Nnp2bTQvWU0zWkwwOXhVTlhOdEYzMEdERUlDZVdUdGtMQldBc1J4RlhJUy9JZDRvUEh6UWJRM05MYmY3WGZrQWpEbG41Rk9lcVpHSkhNelNYZEZPYndhQU8xenhaQVFFaDFJYXNQbEdGeFkrN2ZqR1FKZ1RBb1JnREt2K3VuY0c5MDZNdmVHVGdoMEp1bnF0OXY1eDdkUy9QT2hndFkyc0gwaTRDZlg0WFpFQUJGamlzc2Q5cEpvSUIxSlpzMnhOWGk0T0szdXZNL3VGM1RiYmM4YnN2ek83dHovLytSb3hHZHFKR2ZTRVZmYmdFRHpDTUgwWElDZmZTZ3Z1dHk5MHY5am8vMytiOXFIdjZIWGNjbWZxUGd4MnZjL3kwRGxlSlhqajdmWUdJd1RkY2VlMm52L3FsZnpsMHkrc1B2dDlyVEd0ZGkyeG9iR3pZZ0ZBTDZwN2pidXJxV3pxWkxGdHRyTFZHVzJ1TXNkYm9KZ3duSDJOc2dzekdzalhHR3JiV0dzTnNqR0htUkxCSTBEcjVBc0JZUXlCdGt5SU9NTVlRQ2NzbThUWFYxaVJ1Rk1aYVprdkxraDAyRjE0aU5CMGlFNzM0a2hZdGJUa3YvbHErYjhtdmxlczgwVXFNcE5VRVBsNWorOEpwYVIxNXBuZ0pDL0lUbzhTU2Y4Nkw4dHAyampQM2NMTTVMVzNEeThWZTRqUEZZQUNyQ01MTkxsbVc2V2taTnllRkFDQ0loQkFBU1NHSlFDUUlKS1VnRW9LRUZDUkprQkJLU0psNDVnZ2hwWFNFbEZJcXFaUlVqcEpLU2lXVWtrcEo2U3BIU1ltV0FpV0l3a1prcEpCU1NGZjRudGNHUC9PMzMvb2ZUNGFOWC8zazErSVY0dStabmJWcUZ5Y2F2YmxwTDVORlJNNTJiYWFja1ZjYTBiRmg4K25ueUUwWlRGZ2MwL0FJMmVYVmVSMkp1c1pzRGE0RUFBdlVUZUdsRzJjKzkxREg3MSszRW4yVGRGZkxJZUU4aUFGZlliYkJzM1g0RHVYZDZGZ3BtSjcyajJ6SkhPeEovVkkvbmdRY2V4NlpaODU5UlVaZ1V6ZHNRbXpoUUI4cGMyUzkvWjBvTTZTQWhobXBxRDZRYXZVSnMvTDlSbW11TWovbithbWZCUG95c1lwTVY2M3RMNjdKenU5cE8zMmw3RWdCd0pqRmFZUHN5cTVlRFlBNThYRmZpN2RjM3RJQkRQQzR4Z0VISHNtZWROdURWL0tsb2ZseXRmTHloNTNocnFmeTJRQXkwcVJENjRWbUlnU2FHZ21uTHhjOU9Ba05WT0J1NjlDbnF5alpzeFVzV2ljeDRBT0djRUtqNFhaLy91ckI0c3pVTzBjeUx6YU5PK1p6citvbFQzR3BnY0Y1dXJSblZlNy8zT2YzQ014NExNWitaeUU5dGV4S0ZSKy9DZ2VWL1hCTlh4WDQzSjkvVnpkbWpLM0drSVJTZ1A1QzgvQWtRVXBvOGYwSVd4My9aemFvWnhia0szTE9IN2VQdlBaclQvWjlaMWZmelJTRzU1M0poV0NaMndyNTE3emdSWi84bDY5UHpZeGR0ZTNHdm14WDNpdG1uTHdqVXhBRUNEQ0RMWmdCdHRaWUdMQjFpVm15cDVyYXZ3UTJtazROelhNdnJEaThMSktJa2h6N01OWXd3Sll0V3dhc3NTQ1k1cHZEU2Mwb3c1YlpKc0RjQkdCam1Ka0VhVzBzVzBIQ3N0VkdBeUFpYll4bG01aGp0ZEhjVWtUSFJqZlJEVWhZaEpZZW5MVFJDL2hCUkFucnNBaUNoT1NLU3hmOFJEbTVvaThGeUxDMXE2VmdvS2J0Mlp3YldvbXN0WmJ0T2xJMFBUWEVZRW1TenVYZndJQVNrc1JLQlM0U3E3Q1FLMVM5UXJUMDJDMVNZckdxTklNZHFZZ29RV1VscEJUU2dzR2NRR09TRVZCSmh3QnViaFJKSFdzcHlITHpjQUNPVkVrREFvaUVFSlRjRHdneU1aTlE4LzhFbmtVcmV3d3RNd3czcDJVaU1TZHljdE9jb1lVVVNwSUNDZGNUaVR0WlpPcnp3ZlR3eEVPMy9mRHZIaXhOdk9rYlgyemZ1bVdtQVNHYVM2VjFtbklndDB3cEJKQUZoYXZyYkV4NW5zakRSVnIvVUEyLzNuaFg3Tmp3d3h1YWtScW5XeFdLbHM0c1p2aUNUNVM0RWlMdndZSThnWlNjK3MwZjVGKyt1L2lCNVY1WEk2YVo3dXJIMFF3N3hKTVZ4QWF1UWthRngrYkRrVXBtejRhMi83NGRaWXNVem92N1h4ZEpRbUFRTXpiSzRITWpNdXZTRmdkUFJpaTZHSTcwazZYMHl3VFlMUGFuVlBWS1dVZWhuOG1lNDh4UENSSHJEZlA1ejE2UmZYSmY4ZENWc2o4RG5DMjN5UmtBbk1pMUNxZ3huSFdVWDdhQVQ4M3c3VXNkQ0RqN2kvblBYR2JlMU5DYlM0MUxUcnZqWFUrbE1aaUpwVEg1dWgydkpmcEtWT0JlM0ZYOXdoTThGRkhHVlJzejZlZHRSbG12VWpqc1FpN1hBcm5wQ0czdXhyODdPUHpLV1hmR0lwZzFnelhaN25MbzhGaUp0bmZBbFlqUC96RVhldTh4amYxcW9RQ0lTTHZGUnc3R1crYWliODhXUHRRbmlwNDlYWVVqSUFYbUdvaTVtUUFaTFJSM2dCTXhTa0pkbkduNzRUUFVyMmJvcjUySjBuZm5mK2R3a1hiRzg0MVY4c0tjN2E0NGxjNE9ENTNZdlczN3IvemlxMjcvMGIzL2VQUWozSUNQYkZwbDB5cVQ5NG81dDVEekMxbS9rUEZ5S1NlWGRuelBTWGt5NVFqWGthNGpYRWU0VWppVUZMTkJLejlSU3htNHFITUVnVTNMeEFacmpTS0gyWUphNVliRVVwaTJpY3lSMkpZWDZwTXorQ3pldVlsUXZ6aVBsMWlrRnlIMmpHbzlpYXkxZ0xpSk5MalVVR3lzNVNXeHdva3AwdGlWY3lBcEdMQTZBSU1ZYk01ZWo2VjVFaGhqRWxmaHM3ZDhxaWhCTHlGb1RmRzIyUTVTaWxWN1R4TFJHVFhNQllsRVQ3dXdSWktnSlFDODJPRko1eE5oTldoSFVsU0tsd3hxUzlleHRPSEMrQzRvbkxHQXI0c1pzMEJNQkVHSmd6U0pab283WHNnSkE3QUZNUWphUktFTkloMkVKcWpIbFdwWUxRZHpjOVhwMmRya2RHT2lGTXhVb2tvZ0d1MVhIUGlsRDMxMjQxWFh6ZFloSEdpbjZWQW5ZemhqZFRIVlFEbEdTbkdYcndjeXhpV2JBZ0VTRUkwV0VqdlFBRTFNdHIrZ214L0Y0T3RON3NWN3VyOStEWERXR2dsU1FBTkQ4ODJpeFpacFcySHVndytHMmd4OCtjWmxMY2NOVHByelRuZTFnaVFoWWt6WDRBaktLSjRKU3Q4Y2RJdlpydC9hQzhQY01QUlVyTUdyVUxMMHVZZ2Vudkl1NjJxeUlDbVlPOGJ0Zk1QWlJieVFjNXNJd05JQ05rOHZHUkZ2bk1yY2VWSHVyc3NLWDdyTXVhUUlBSFhHRXhvK1ZuVkFPd09BTmNNaDdIVXdibkZTSXdiUzUzSk10MENLVUdVYzA5aWxBS1RldU5IY3Y4OTh2SzUvdHhRWDU1MVNZZlhrRWhkQ0JNQjAxYzFRRGZPQUwxSFRjbmVhaEFnZUhrL2R2QW5qckxZV1VJbC9uUHhoS3lrQnVRbkk3WVdlMzdwazRtT1B3NnVHSjBycExSdFFqbENMZUtKQ1c5c1FtUXVSVDVMZzRDWUdPMmpsUWhmS2FiL2ptdEh0LzhxVElWelpaSnRkeVhOMXpEZW9JNDFhdkFndzFLcEEvSENNQTA3dXIvYklpOVBScjhmMTNIVHhndzBSc20zUTJUQjRxUXFXR2N5cFRJYVl4c2ZHRGh5NDdEbS8rTGJ5c2FQRGsyT3oweE56TStNejg3UHpwZm5UdGFtNFVZOUtZUlJHT296SmdEWElLaVdVRXE1aW1jNFVVbjVPYUZCa1hKVnlwT3NwMzNWU3JuUTlsWEtWNXdnbm5jcTVscFIwcEplV0xBUUozL0dKMlJFS1VJN3lBSExJUWRQZkZWSW9RUklMK3VTbENSWVNsRzBXdEZsUVN5WW1pdFp6SlF0MGExNHdtK1JnQzdac0VrNGhzZUVCaWV5M0NKd0VNTmp3VWhBV0FDKzhHZ3d3ckZnUzE1Zkl4TXdzU0VpeHRQY1h4VVVpT05MQk1scDkzcEpEWitMY1UwZG5LTmhCdG1VelBhUGxDdUlsZm16TGRNdGdDRnFXeEpoQWJMR2dZaFlrYkV1dExJZ0lNdmtwU0Fna09NMkp0eDJEQlVuUjFFK0w1YmZSK3Q2Y3hxMDVnRmFsMzRTTlR1Ulp0b1oxNGlwdnJOWldHemJheHJGcFJGR2dqWW1KT2RRZFFnQUFJQUJKUkVGVUl3N3FRVG1JRzQyNDNnaHJqYmp1Wk4xcVkzNXFabHhtSEhLNVZDdkZ0VENtaHZXMTQzdCsxazkzWlRvNnVyYTBEYmk3ZDJSKzlvOTd0Z3d3TUcyZzB3RGdQMVpLZmVHNDk3VWhiNnFxcG1JUnNKREVsZzFEZDN0Nld5NjhyRE80Y1VQNHdrMWhpaVNnQWpnUzA0OGR6ZVZPRi9HQ3daZFg4cTgvMFBYUFZ3SEFvTUdnUVc0MXNkVXk4ZzZmbk9mcEd2SWVZaXMyNTRKdkRKYnZIdHQ0K25YTFdrNWFIRGRJLzNnK3lReDRpbWRyWEc3QVVkVHVsVDkvSXB5b2J2cVRhMldiWjQvTzBlYXVack9uQS9zeWlvOUdlcVpSdUhFckpoa3BCdzJPN3AvbWJPeHNCdGVXcVlxZXBuZG1CWkdSY2Nlc085S1QvOXpCL0FmMithL29BNEFZT0tRaDE4eHRjZ1lBTzRRNjQ0VEJOb204ZzJNYWxYVTRzREdRSlV4WlpBejZKWURzbisrT3Z6ZXYvNlEwKzZIYlRDTVNzZlBVR0lNWnNERDlnZmwybVEvUDBJRU9WQTB5U20wcmhQZU9wMTYzQ1NPTTZubjZKSytUSkRBVStNL3E3cWpxOGYvOWNQM0I2ZlFORzBnS0ZvVHBLamEzWGZoRkZ6RTR4ajVuWVV5Y2JmbXUvL3ZDOFpkL2ZXQWdwN1prN1dpdG1mZGpwSVF6UGI4WXlCR3FqQWRpSEhEU3Y3WjF3d1p2N0ZWM1RFZVZ6Zzh4bjJLdWltV2p6VTM1bmxJc3NwYWMxc3BsR1ZtZGRoU05ocnB1SjZkRzJtWjI1anU2TCtrZmdKUk5LWllaT2thOWJzS3dFUWIxUnIwV05CcGgwQWpxVWIwV2hvMTZVQjgrZHJoYW5TYmZkM0tGUnIxU2ltSWRSem9PamJZMk1EcU9yVFpCbzZHS25SeEdhTlRaRXFMWXl4WmtKZVNHRnVDMnJac2FScG1JcENBbFhBQktPTW5TN0V2ZnN2VlVLZ2t2Y2NpVER0clNxZXJvVk13Mm0rK1F3dEcxc3E5U1NycmF4T2xNMGZNeXRsNVN5bmZjVktMSjlCMmZTRnFycFhSY0o4VnMyYkpVeW5IOHhMOVZrSFNsMStvdEs0V2p5RTBnbDlsSzRTcmhOSDhDQkxoeVdaQWpneVc1cmREK3hYNVB2TVhYbmczbk00MldZOTRGMHZteHFxczJUbFRDeStyTkU1RmwzWXdFYXpXTFRXVFp0TXpuSE9wR1lya25DTTJSc1RGQkVKRTJrYll4Q2NtV283ak9nQ0FSeFEyall5RWsrMDVvTEZ0RXRwRjRKZ2M2SUtMUWhOWWF5emJRQVVDQkNZeTFrQ1l0NC9MWXFUQ2JueXZOV2F1dE1NcjNMR3lqWG83andKQWhkblJZa3lsWFp0SU5PNnNEWkhLZTQzbktrVExsZFczcFBYWDRNZW02ejN6MUM4dGpvMlBIQjYrOFlYZGhiM2VmMmxtUWJVNVdwTEtaZERZakhBZFE1ZW85eHp2clpVQURWaUwzNzRQWjM3OC85OEIwcWpmbHZXUkFYbmtSUklyU0x1VmREalZYQXp3eWErOGRpNzg0R0g3cThWcWJXM3Y1bHVxdjdHbnNiNVBBL04xL2ZmRjhjZjdWN2Y3UGRqWFJkNlFsKzU2NUdpZm0yTkR5c2Fra3BRd1ZYWjROSnovMlVPZFhYNkI2VW9zdFp5eU9hZmcvZGtRUUdBNHdVVVZzS1NNUTZNcHRvKzJ2dXNnNTBHRWZuMXVadU9hcEpjdm9vZm9uVDZuT3RMdzBqY2RqRkIyTWw0SkhLN0pQcXczR3pDd3ZKUE1URUgrdDBKbWFFRzdoWTgvSXZQU1N6Ty92YUc0L29oRXpzbXNLc1djQU1BRXVZY1FnWXV4V3VOVEJNWTBKdXk1bFJZYWFSb1dpQUZENDlxVzZ1eHovMjB6cERmZTdRMTFQRlNoUzVKaWVTbWpMK3NFcDU5SU9PQkp6U0YwN1VQbmJSMUVDbER6UGxPZnJvMFFONmdnTTFySXYzZHh4dWpyN2plUDVGdzY0RnhVNDBwaXRveHJCVndndlNBakdraVJaaDJMc2RSYWsxZlRMTnJWOThKbmp2M04zLzcvZVNGbUg2eHBwQnlQejJOYUJ0SVBHY3M4dkMyUUpkY2FETVE0NDNzOXMySEQ3YzRkdStEYUNzUE5QalQ1cG16bktHYkNnTE1zT0M0SWVGWTM3bFQ3Slp0RGFNak5ZT2dHbnM0WGE3bHI3T0YrdXNhR08rVGllWUxaRXNxbitGVVNrbEhUZGJDcVY3ZXlDbEpDeTVXcEN5T1dyRDk1ejlMNjd0eDA0V0R6NExOUXFBQkJyeEJHTVlhMTFIQ0dmZi9TclgzeGt3NTVlcWIxN3ZsSFljM2x1WVBNOVgvdUtmT1ZiTWgwZG9RN3YvZjMvdVNOYjZ1aHJhd1FtTW9hWlkyT05NY3lvR1JhRWlyWmd0Z3hqT2E3cHVRblRzWFczaUd2aHhHMVFqbXJ2MTVGbUU1THJoWk1qRVlTVDI0Q1pXUnVIRUFJTWlzSWtQeVVaVUFRSU1FRm9VRXdnVHBnVDFWSnpNcUFnVkZNc1N3dzFRcldZeXNTTTNHS2RGZ0hZa2I0UWlwZThmTXlRSU0veFZuVmRZbGhQcG9Wd0dlYzJaekN6Sk9rNXVhWUQ3d1VRRXhGaVhZdHRST2RTRnhJSXpLR3BXellyZ3BzRmtXRWI2R2k1Szdvd0p0WTJYQUJnZ29pZ2VjR1NUUlJ6WXNJSGdXSml3eVpCWmtNd2lRbENrSFdaQWJKZ0Y2eUlBRXA1Mmhvd2hHaWxjeFlBUTRwbTVMWVVTWlN3VUpKTW9HZGlON2RuVjM1K2JPc3pkZ3VRQ1lLNTBTRS9sZG00NC9KOFo3ZlNtUFZPOUYvM0c1bDg3OGpoditSSFJ6WmtMOXV3ZTZjclNKTEF0bTJuNy96ZW8zN25UVzk5aHhOVXYvZVZyMjY3c245cmYzL2thdTlpVlhEeTdtd21pS3FsMlRtMlZsTGFUc2ZrZkxGKzNic3p4eHNkYi9qMzRyMGpxV3UzdXYveFl2ZjUvUUF3RHlRcE9XSkFBRVhnT1Z0dzkybGZ5ZlJZUFh2dmVQVFpVOVZiRHRYZmVOWGdiNUZ6LzBNZG4zNE52N2kzKzNQUEFJQXBpNU1HNlRYV1lRTFNnaDhjUnlsQVc0b01VM2Q2OHUzZlM3MzVvc3hMTmk4Mm03TTRvdUd0dzdaNFRuSVZhb2JIU3ZBazVkenc4RHhIcG5EVEFJL1VtdWEvSkUvKzA0SjlCRUw0eUZUcU9RT29BU21KU295aHVYQW9kQy9WbEZvWndTZUZlcm94bUtXeG5mVzJQN3NtVzloVitNSys1dGFUQmlXTC9ObFV5S3ZaZ0FIa0NUTVdoelQyS094VVNCbWNOdWNJbzA3MFBCNXdUT09BQ3dlaUs1WC92L3ZqbDVlaWZkUGhqbUZucXVNcE1BWVRpOGd6N1pVNFd6SVBWNTJaQUJrZjA4YTd2cmZ5RDQ5RmQ0Mjd6KzQ5N3lTVTZ5ZEJIRnVhYkxUOXlwN0c0ZG41TDUvcy9yMHI0RWl1aEppdTBmYTJadW40QzZPRlpOR0hOZll1NWpRb3Z2ZEFlUC9rOUh2djdmeUxhL2pZUEpUZ2VvUW5wK2pLamF0a29sNFFwaCtKc2Q5eHIrOGV1UE9tb1d1L2hYY0duWDlxOVJOczZ5UTdyZXkwWmtSVnZxanF0NG40aElNd0pYMlhPbElpNTBCQWg1WU1lcjI5d1QzajRaZEdwNzRkNUg3VzhhOHl0bWJObUdRQ0M3Yk1TTXB0bmhrK3llek16VG5aWWtQcmVxMVJuSnEwdFNvQUVvS0VBQkVKNGFUU2NQMTlOenoveEJlLzNOM2ZtOTYrYTlzbCs5MkRWOWZ2ZjJCeTU2NmR6N3ErQWp6OHZ6NTRTVGNmdUd6YmJDbGE2a1RLeTYvRmpIeldlZUxvMkZmdnIvLzJsMytReWhaeDZxSEtnOS9LWHZkcWRHNnpjVVU0MmNiWWtTZHUvWVBLaS84TWxPTFNISlFDMjdoYVltT0VjbXdVUnRWeTRoSnJvekN1VkVsS0lyTFdSRUUxc1FRVHlUaXF4MUVqQVNvaFpCelVkYU9CcE9JeWdSaGhaWTYxWGtBeWtqS3VsWFc5U25MeExSTkNHQjJYeXJObk9sRURnSlR6MVlvSmduVVdjaWFpdUZ6bjJKQzhrQm5QaHNtUlRyNjRyb1F0MXBLVVRqN1BvQldXWVd1MTlOTk90c2htY2Y1Ylk1eE1McDNPTmpjeU02RXQzMDVKaGk5cklZU1h6UkVKWnN0c1hUK3JsTXRzMlZySHowakhzMXFUa200Mnh3QmI0MlR6WGlZVE51cmZlY01ycjk4UWJMOW9ReU0wU2FJTkpRU2ptV1dEaUpMMVh3cFJ6RHJISGgvK3ltRHh1Wi82YnZyUDNubjF6VGNqazRmUjB6Kzg0K1NoUjY2NC9nVml4eTZVNHFxNXI3eGxnaXNuTHNsdmJMLzZSbVI5eENHMFJpNTMrcmJ2ZnVmTFgzcmR1OTd0TkNwZitwdFBpSFQya290M1RrN1A4QWxySHBrY1AzQ3FZOVAyOXFDUERGbUNpU0wxLzloN3p6ZzVyanBkK0RtbmNuV2VuS1hSS0l5Q0pXZkxBVWV0alRGaHlYRFpKYjdyQmN6Q3NzQTFzSGVCdXl5TGdYM2hBcGNGczF6YnV3dExNSmdNTnNIWXhsR1dnM0ljYWFUSjA5M1R1YnE2cXM3NXZ4K3FlMFpwUnJJMGVpOGYvUHpxdzB6VjZhcFRWYWZPLy96ajA5bXU5eFVTMzl6UitkZFB4bFpIek1mZnJGL2VDZ0NIQ2FNQmRLcVRISVFxN0l4SzFScGxYQUJLUWxkZXQ5eDg3WEpqODFUc0d3ZVVldzhIdFZkRXI3c28vc3RMQWFBa3NUK1lkd2FXaElTTzBRb2R5Q0J1d0pPc1AxYjU3Z0czNHZWKzYrcTVabm1KM1VFOVpPUXNwYThrMkp4MloxR3FJVzdDVnAzbk0zcFBsQytKMG5DeDNxWXlMOEg1V1lHQXVCWnNLVENOV1RmMVlUeEFYTVZFWGh3cStXa25laEhJUDY0MUtibzIzOGtXQjBMeHU2ZWp2eDJNSEZvZDMzbyswMVFBeUVpTWlsTld2VmFoTUFRbmxBa1BUY3I1aGd6dVVhQUJRK0lVUzZmUVYxb21IQWl3V2dWZ3ZMSWo5clkxL3JkeS9qOW5STVRoVmZQc0RkRk1jSkZ3L2VhY2Z5UXdSM05ZMWdFaXhLR2YxMXA5ZUVSL2VRY21DV2MwSDUwV0ZNaXl6NU5HeTd0V1QzMXBtemhTVm1LYWRIeE1GckUwQlg1MmhoY0NJZ3dsaWQwQjFzek4ybTNmdTJHazR6dk9EL2JicjE0bUR4WVJNK2h3anZVazBSNUJ3VHVlTFR5VXdTSHJ3M3BOdjZxMTU1R2JScTkrZ0VmY3BuOFdjQ2dZVWpQZlZKMEhWQ1lUMXBwVTlIVXhzMGRUcitqR3VoUVl3SUVBcUFJUkV1bEs3Y0ZzL2x0RGsrOFpOd2VkNUlkVTg3SkFqSEpaWW5NcnQyTkhEZ1BBV09DNVJpTFYwdDBYMm1lRmxHRWNFUm9UTkFtaE02YkZtMUlxUkRIcjJERUJob2tKNmRkS0IvZVZycmdtUDUyWDVXSk5xdGxDclZnSjVnMnhZaUFDVjFpaDVFRlJWRlVCZ0tVWHhKWmVFRjVIMFdJQTdNNDFxeTc4c3ozYnZ5R3UvWlRhbEFoL1BsZnpIM05LeFFKTDlsT0hLcDlzNTBsZFlBczdjMTRRenRMRjlrSi92a0RqNHc3TmQrYlpHenlwR2ZWRXlFWmpDZWhBQlNBdmlKdThPYUhuQ25WblV5UEdLaXhiUlVGWVFVNEdpc0tLamk4cWxXaDdjcksxWi96QkI3cXV1a0ZVeWkwcno1dVltTmkrK2ZFTlZqU291aFk2U3c5dU5WaTBLYnBPS3A3SVpjS3VxS3FhblppNDloV3ZzbE5OVzcvL0h6NVhWL2IxK0RVZkhMeEo0UTZYandmcDhqNnNFVTJsWG5KZGRGVmxQQko1ZTdUcDRZY1RkMXhwM1g0K0FEakFUZzgrRUdVQU8rYTVhQXk1QUo2QXFjbHlnS0xQVkdaYzFHYmMyOEgvcGN2Wm1vdmRmeEVENEFON0FxaUFocFBNNXFIeDJaVnk2eGgwRHM2NHJWQzJscjFuVDhzRE44MnR6RXFFM1FFMExJTDBKY0RTVUE3b1lBYVdCZ0NCOUlkTDltWHR3ZDQ4Vnhuam5BQzR3VmtWUkZyZzZuRzRteWVNaXpzUTV5Z1JTZ0h5WmZlUUI2MXNyQ05aNEhOUG1BQUMxelRXaU41Yy9QNUlMcElGWTdvbDl2TU44VHZXYWV1VEFGQWpIQWhnbld5VXo0SUJBaXJjQUtaVzU0MDU3ajVER2J3bndLQ0tkZ1VLdzk0QTVvSXlPRlRqc2dLVEhCMGNRUFN1d2RyUDB2NDkwN25ibnRKSDU2ZThQWDBRQThGZmt2RjJlSFNvd0JJeHRFVXhUcEZYTEN0ODlUa2FDWml1UWl4MkVhN3d4YmtCQ0ZBNVRUbjZoaWExeFhTZXk4UnU2VVBKcDNRWldZZTEyQ2o1TDdnRzlkRUlaWEN1OGRqRGl4dEs2MzJiMHRmL3NtZGpKMDhhc3V4RDVYTGJCTDkyNE9SMjcxbUQ5cDRBYTFUakphM2R2N3hoN0piNzFWN0dJaXo3ejVxYWFrNjlyaTE2WllxMW1hZ0pGSDAwUjFFQ1NnSUFPTUFaOGt4cGlkcTNSZTNibHJnUFQrVnYzelArVjRjU3I1Yk50NE1uaEQraXNBV1dsUVJacTNZUERFb3BwSGQ4aGhZSm9TZVQwUFRmZlBlL2RGVlJUY3VPeGF4a0NyVnF3WFgxMW00R0JKVWlDMnFxYmkrd25nbHR3ZUcwR3doaHhKS2FHVXR2Lys3MDd0OG0xMTNldlBSRzAxNUN3aUZSWTZwbHIzMW42ci9lUExiOTU5NTVyMUFxOVN5cUY0cWp2K3VUZk1vbmlxRDVSc0o4KzJsQjcvQjhmVHBMQ2Z4Q25nUE55c1BUT1ErZDhLUVdmcHVudURaa0JNVURoeFMvU2xxc1hBbHF2bHhnUmcwSGhoQkNNWFVES0x1MVEzdjJkdDF3czVpcE1jN1hYWGIxOU5oaHozR1lBa2gwUmk4RGhFOUZCRUFqVEY2VVNoZGVmVTFtZkh6L1E3OExGS1dycTB0VEZTOElHRmdZZWNvMURjOEhhWDVJV1dra3V4TmVVUzM5bWEwWGVwb2YyNmhkMFF3QUV3S0hCRlNHeUlsM1NGQ0FkQmxDMWhlQUNpTXdPcFRuNTdmWFVqejJ3NHQ0cUxydFhaQy9qek9ZbkRhUG9sSkR5b2JyWXlDWitjaVR4aHY2N1J0NzZtMGN3azRmQ21DY0JSSENMQmlEeVdqekZLb2U0aGFQcVA3K2dxeUo2S2J1MHMrUEtLMkdmWEVibFZ4WTJsbk5oUE5CWVpqMjFSYmJ1TFFkWXdKUmhYWmxtT3RYdHpuYWNrL3RFc0hvc2RZaklzNzVMTy9Db25lSFZKK2lJdmJaRGRGTFZ0bTNMNnZ2M1JlQUZpU1ZZb0FQQUJ5T0QyMmU1MFFONW9DREFRQzBjS3hRVVQyMlNHMTRvdVBLMWxvTXd3RmNBc0M0RXYvWnVzaSsxZmF6UzRPV0hCTXZLQ0ZtbnM3WDlLQS83K2JUL2tnTnVUSUlLQXRsZlV4ZEVuY2ZHa1ByMlpXaVhBRGxHbEQvVkVBd0JwUHVyaHhVSGlyY05KUUJ4eUlvMzdPUGZkOXNORDJzNjdyTXQ2L00vTk16YUxPWUpFUjBGS3EwZlJJV1AvbXlManpKVFAzZG1TL3I3UHlQNjlKZkZQa3ZwcHJmdWFibm0rZkZYdDNKT0pNakZUbnB5a0tOS2o0OFFFcVFyTE96SWNDb2g4YzlaR0JlMDk3eDVEVWQ5MTFmL20zcnlJMFVqQ3I2YWdGNXN2VjRDTVlDMTdWajhXZ2lHZFJxUi9lUWhOQVRpYXJuLy9SYjM2cGtKOXM3Mmp6WDYxaTZISm91cHlZcnFtbXZ2d1NBWDZsdytLYWxDMEdubzNzS0lYUTdCYUEwOWt6MjUxc1Bmdld1dlQvOHUrbmgrNWhpY3owcC9US0EzaHMvRWQveWRTcW1wUTNJUmhyS0M5blEySTcrZTI0N29WZDFDWFRpSnViWkpDaDRnWnNQOHM1aTgxL1k1ZW92L1dROVA4bHQ0b1RIY3RMbjFuaWtwM3o0SFBETEpVVjZscVZMZVZvREk2alc3TUVMWnA1L1Z2bnRqL09xNFdVeXVta0dOWmRJdGk4WkFBZ1NCT21qNUtONjNJc2tRTGh1VTNOejMrQ2F3UXN1aVVkTXovT1BPYXlDeDFXK1ZabVN6K2FuYzg3MUxXclQ4dmF4RytyUzkzQ0FBd0lHZzNFeVpkOVE0UVEwVVlSeGxCL1FDL2hBd25sd3lpK1Z6Y3M3QU9Dd1FINStCaUZKaUtrMFhLRERNNGliOEFUdmlyaVBUMWVIYzYzZnZLcmVwa3JZN29NRDVtSklYd2trR2xlTUdSQ0VoRjdaUEsyMjJ1aU5Rb1UzVklMR0FZYUVkVTdpajRsUWsrYmxYU3drVkhBa215NlNLOTNkQmVzS1l1eWtrOUs1aWdoamd2dHR1Y2pQVmtlYzFiR2ZyNnZ2SFJNbzBESFpROGN0VHhuZ0UzekNDcFVqWmFFYVlENkU4L2lZd0tnQWdEYU9mZ1dWb3h4eEFtam1kVEhNR2o4Si9SeERkVFZVdjZvbCtvN1YwWDlmeTZVaHJPcHBWTmRaK0taSmNjMmdQVit6SjRNaG9PVFFWQmtSRlROa1hkY2JqSlpRaytmS0JFMEFnZWxjbEFQbmtZbm9WWjBpNzlGVWxla2N0bzZKQW8wVUVWUFB0Z0JJZUtFWXc1VEVnYmxYMDNyblM5eHl6Zm5wTU91SndwZEltSFFvUTBkS2lNOXp4ZnE3azVpU0FPeS9YSnE2YlgzOGRWMng5NjZneWFvOFVwRlZBY2JxUG9paWUzdzhBQUVtZzhtd3g4UGVBSUQ5NnI2KzBWdTBEYXRHM2tqTy9ZcTJWa0NoK1Q1cHhya0lmQkVFeDlUQ0pOS2kwVks1OG91N3Y2VkpkLzJHOWNWY3JxbXpPOUhSQXlrelI0YWRhRHpTMlVxQUtKZDQ0R202SnVWQ3d5VzBLaVdqYXJub0VsY0FHRjM5U3kvYTJLWmZVdnh0Y2ZqN1h6bjgzT2NrYW9yUkl2MkMycko2eWJwWGFiLzlKREhRSXF3RFg4VC8zMkNBY0NvczhGVk5sUXRHZXN3T0RCZGFMWmViL3RvZDEvLzVxeSsvNmViQWNhU1VqSEVoaE85V2oxS0pUdXJrWUZKS0tZU2g2WXFxQ25sQ1hwWmtVTGhZbGxOLzJ1UzlyTk8rZVhYbjdodDRzd2tBQjRONnhQSko3WVVFV0p5R2N5alhvTStSK1RBTzBzemk3dzhuLzhjNkFNaExqSWg1cFc5b0NxNEV0SE1DbGdiT0dDTWs3ZlJYdDZVK2V4RlA2QUJRSTJ3UGdNV1N2b1M0aHB4SHo0L0Iwc0E0VXhpY29IYWdhRi9TaW9LbkpIVHArSEI4UkhTV3N1Q2RHMDBvZFBMWEFrUVZHc21CQ1hkL1ZYcEZheU9KbyszUERZUmx2QmZmL2l4NWtDanEwMjNSUDZ5TmZXMk5FbWFtT0lRam9sNTZFdzNmaVRncUNaZ0JBVkFEVnFsSU1JNVRMaVFaRU9FWURqQWpBYUJiUVNkSHBmRXJuMkF3ckZJaENONVJNdGhteUFsTTExOUE5QnNySTlhcXlMMnJnK2JpMlFwZ0FJSkx3L09XVFh1N3FxZ0pqT2FoQUhtaERUU1pHN3RvK3R5a0lURWdaa0FTaSt2dW5ydy9XdEUzdG5GTGNaN0xzS1FPQUxwS095ZmdDbGphb3NuZ1NZRkRkUm5NZE41ODU1V1p1L2RTQUtZek1BWkRwVzFqcUFTd3RKTXZObG5JK2hDZ1FnQlNYNzdVU3p2aXVRTGpoTm42Qnd4UU9LYUtrRGplblV5QTBsREh0L3FvZ1NXMGprZXVTZDErNmZqdHZQQjFSVnROekR5ZGlOM1ovakNtNmFPN3RpY3RiZVhneWtLK3dEanZYYldHZkErR09UTjZXUFFzMDhKNXRseVJqcWNvSi9tY1ppRWtXVHJ2YkRZZTJacDc4Tmx5VThJQ29EZXY1TjE4MWN0djZsdDdrYjh0UHZyZG4rLy83WWVxbFNHdUpRQS9jY2xmZDhnS3R2NkV6UG5WOXhmeHB3b095RXBWVklOR1lmS1RRMGl5RE43WmJEejA3TXlqaDVuMzdPOVdKKzNXSzY1dGFtM1ZMU3NJNXRjM1RnWUNwRmZUZFVNM0xTR09ZalVpQm9MWGtURVBkalY5N2JybXQxK2UrdFdsOVVNSGczclYzNU5HTEVzZ29xTGcwOEVNYkwxQkJ3SlVBN2E2SmYvdmU0MC9helV1N1VBQUhBaGd6Tyt3WUF3R2t6c21VZlZoNlhBOHRyWWw5Mjk3V0pzYWUvZGFBUENBN1FFa3dWb2s2V3RyOEtWOGFyaXV3UXZKVXJyN1hJWWsyUmUxWU1ibHVnSXdPQjVydGhIUkVKd3pibmhCMEJXNGtvWm5rREFxZnl4b0sxeHRtWlRGWXdjR0F6ajNhNjRRWXZIdHoxekl1Qi85NXBySStTdXQ5L2JWZDRiV1lxVnhkUUZVQ1gwS2todytBUUFCRG1GQVJSUEgvTy8yS0lTenNNbXdyMjVWeG9DS0dFT1Z3QUdENFZDQUt1RUM3UmdaRE1Ca09CeUVzelBUMWVpM0J5UFBEcHFIdTRKa0FmSnNuUU9zcGdhcjArNW9Ka2dMVnFsaTJrRkVoUk5vSzV1WXhoZEIvcDBJUVN4cFFWY0E4c2NxUEtaQlplWmcwbmsrQTAwQkVTd05qaStmSFlQSm9DcUxZSDVoUUpSalZPQndmUnhIWHRPdlg5V2MvZGRkYkVVS3JnOWJSOVdYT3laZ3NPTmxad2dDVkVBQjlnYVFZQXJYcmt3VWZud0lxMXBSUGFxT2g2VlJ1a0xwQ2lJbktOUGhmN0ZHWkhXVkFLVHUyTkI1ejNXWnIrclp2K2ZxQVBHWXhPbk5hWXFxK29XOGNBcnRYUjBWeDYyV2kxMzl5ODJtRmxsejRibEhqaHlKWGJrcG5DaEV0VXErWVB6a1QxRktnS0c5eVZBVWRzLzk0NC90eUMvclZGVXJBcUNwODRvQ2Q3Mzg4SkxMcmh5ODdrb3J2M1R5Qjg5dis4NjcwMGQrRG1nQXVxLytZR3p2VDZoYUlmMjArdndpL3FUZ094VVdDSVh4K1FZR1k2eWp5ZUNjM2ZQcnNTZDI1YnNTb3FXdmYvMk5OeU9iOFVxbE0zTUVDaUc0YVJxUmlBZ2FkQlFFRVB6dWpMV2pwK25PNnhMdnZ5Qis5Mnp5U1hCaXpmMWpvREJvVE82Y2dDL3FGWnNCZUpJdmlicFBaZHpKWFBKVEZ3SEF3UUMxc0ZydFNXK1ZFRmZwU0JFanVicnh1ZFh5Sjd6ODkzZTEzblVOQUFUQVRoOCtuYnFTMHVtQUFGMkJ5dVJUUjFDcUlhclhKNHFJVm41eTJseVZSRVFEUVhnQ1JOQVUxaGFyLytvY2dRaTJRcU1GNXZteUpLcGJjL1ltQWovQklFY0E1OVZTYWRGelU1bFEvTmFjL2NlQjZNeGc3QWVEOWIyVEV2a0c4MFNvK3pxRVFSVVd3NlNFeHNDQk1xR25IaUNGc2RNVWhLRS9tVERubFZ5cEFvQkhkUjFyVHdET3NFRkRRSFZiTkFFYWd3Y2NxUXNQOHpXZGtTdFcyTjhhaEMxeGx2bElqRlRIOG51elZYM2MzK3JCNXZKUUZnckFnSXAvNnArZkdUeUJoTWtTRmlvKytaSkhOYVRkeU9YdHdVd3RPRmhpb2VpS0d4ak4wNDQwRXNvaVdEeW9JWU5IR2k0QW9QV3VheXVQalhxN2lyelRoaGNnYnVKSW5vWUw4NXErUTB0eWxjS2xXZUtqRzd4cXhkMDh3M3VqOEJ1RE1nelBQSkFPUTh4T2NwSXd0azRTdHZsd0NFRGtiZjA5djN0cC9qNTcrdDFNNlFWUFNEb05HVXhFcXFZcml1NzdnVlBNUjVQSjdwVnJSS21rdExhTlBmeTdxVlJIKzlYWEJqNFk0SkhRRkdnS2wwZmRWRWpOeWhsclRtak5NVzNMN3NLWGYzU2tXUEgvNWpWTCtqdVlwK2dBRkI2eGxwNC9YZGlPZkxWNXlaTDFMNzloNVlvYjdYMmRCNzd6dVQxLy9FVE56YWp0NTdlbittamZiK2k0Y05Cek4xbThpRVVDQXp5M3FxbFFWWVhtR1JoTmNYWHo3c0tYZjNpNDZBVHZmKzJTemhTUHR2VWlFUmRPNVV5WXdXWXZBQjVMTmxmTEpjK3RBbURFL2U2TXVhMDNkZmZWc2R2UGozMTViYjNscU1Eb2d0SlhBbkdWaG5JWUxTQnExTDlaU1R5cWtsU3pkMjVQL3ZPRlRPSElTRXd2YUh3MlZMaVNkay9DVU1BWkV3TExXOUlmZnpMeWlqN2pzallRc050SGxlWTl3eGtnb3RDT0tVd1drREFoQ1FSbWEySzQ1RTg1c1dzNktldENWMlRlNHhwRHM0V1dLTnd6TFlwd090QlVWQ1VkeUxBTzIzMjZJRkd3cnlhUlBkNHV3aFVGUVZES1pmbng5ZWJPRHNTRVZWVnEwY2lQQmlNZlhLbXVpQU5BQUl3RUNPT01RK2xiSnF4UTBjeXgyd2NucUlCRGlESDBxd0JRa0RnVW5QYUlES2ZnSXRVRnFzblFyOVlWWWdYUWdLMCtMSVoxR21xRW9DR0RiWVlwRWFwTkFLTGZYaFV0cjdJZlcrWTM1M0NXMFZpQktpekhXemxlMitKQVU1QXVJVjJGUFk4bGRsRWdDQnBEVzdTZVlBN0FDWlFsTWEzTkxEODZ3WnBNQ0FLQXVFbTdKdWxnQVFsMWNSYWVJZTNqSVlFSkFVRHBpY1Evc0hyNk0xdlFrMlNTd0JoTWxYWk9MR1NJRGlPckp3V3l4TGlTL01mejh6L1lBOHRpczI0SkFpSTZwa3AwT0RldklBOExqZ0xZWHRlRGpSdmFlcCs5dWZ4SWZPcnRVUHFZa2p5MURDWXBtYTZycGxITXBpT3h4T3FOMTRJckFNRnpuLzNqSTAxLzlYY0tRRFVBcUU1TmFBbzBRNU4xeGpod2pxaWx0Q1oxeStEYmhrcDMvMnJzc2UzNWF6YWszdk9xWGt2bkV4ay9rb2lIVjJrZHVMNWtPaVNxZnJITW1kSjU0ZXJ6cnJwcFhjc2J6ZDBUQis3LytNajJ1MFhLMW52WDBtemtvQVF6b2RwZytvdDI2VDlkaE8rcTVwUU5GYnFwQ25uTXdHaHJESXk3ZmpuMnhJN2M5UmMwdmVkVmZZYk9KN0kxeTlEaEIyRVIwYkRHdFdiWm5QTVhSQTByYTlYbXp1NWw2ODdYclloYnJEaHRZOWJPSmFtN3IwbDg5TUxZSFEwRktDc3hIQ0N5Z1BRbHhEVGtQTm8rQVZ1YnJackpHRU52ZlBwVFQxcHZXV0pkMVlVQU9CVEFYSkI2dythMGR4cEZGNWFPcXM4R204by9IcTRkbW1qNTkyc0JZRytBNHVKSjM3RGJZeFhhTjQyNE5idVR0UnFsQjhlMURsc1ppRkhGQjBlUXFTa3BIYTB4V0h4dWZiL29JSUxOYVNTSFVoVzJWdjdkakhXSnIvVUpLaC9yc1NLcFdIWXBteTVtTTVxeEdBazRjMmRtUVhQSnZtOUZOTDRxOG9WRzBhc3hBUS9RR3NTTFpjSXlCZTBjMjMxSVFHZjFHaXloN2hvQSt3UG9MeWhPUEV4dUdSVW9FUUMwY3pRcGRlRnFNcmlFSVlFWW00dVVSc1B6UEZMWDN0VCtXT1I5eSswZnJWQ0VUYVo3bHNLU3U0YS9mckk2TXVVZmRIbE1sUWN6ZFNYNDNNRWoxaHBEVkdNTXNocEE1WENDNk1ZT2QyOGVUc0JVRGdJVURsdWpaMGFRY1JGZkpHZHdLSU9INmo3MTFCMlh5YkpUK0k4RGJGMExIQzgwUk5PdXFWa3VoNU9BQVFiRFFSOEJ6TXM3OVJ0YnMxL2R6bGExSEVNZ1lXbTBhd29sSDVGNXVqMHJnM2NFcUJFQS9ZSlUzNjZiblMySnlUZERhV2RLOGhTMjZKQzlnRWkyZGk4NTc1by8weTNMS3hhVTFyYjk5LzhpZi80Vm5WZGRXL09nUkJFRU12c2ZYOWVUaHFLcGhzb1FrTmFLQUFBZ0FFbEVRVlJUTWJVNXJ1bXFNakx0L21aejVvY1BUVzRiS3Ezc2kvelZLM3MycmszT2xJSkNKYWpWWU1iakFFRFZXSEkxNitxYnFlelZlRFR3YTE2aElGZ3QxdFcwdE8ybHk0SjE0dEhmUFAydDM3amFVb1BYWTNvVkN5U1EzZklNRktpUmMxSkk3VVVzRm56SFpZRENtSzd4WkV4dFRtaTZxaHlaZGg5NE9uUHZRMVBiaGtxRFN5SzN2cUwzc2pYSm1aSmZMQWUxbW0rYVppanFTRXJWTUppaXpFeFBLWkdJSG8zU2FlWXJNaGI0SG1lc2IvM0Y2eTY1ZHRVYkxtak5iTEMvZFdIaVErZEhQN3VxM3NhbFU1UjRsQVJUaFNUNTlCR0FZS2gxNzYrVWJFVWk5L210SXE0MGZlWlNBRGdZd0c4WUhVOEVBUkVOYVpjT1pSRTFJQ1NQYVNTVjlPZWVTSDNxTXA0eWNGZ2dMUkZkSkJMQVVOdjJTZTRZaDY1QXJidUZtTUV4NDdtN2M3SHJ1bER3WVNneTY0cGMxVnJmZ25nRXRYTldEUW1BcnFJcTZWQ1d0OWxpdUZMZE54TjlHZEVKZkhTTWNUQTJOWElJSUxZbzNEd2hpQVd4a2o3ZUZubDJSZVNiSytzMWMyckFwSURWTUQ2WENiMEt1cFc1aUdnQ3FvUmVwVDZGSGhLb0FlWUx6VHBVQUFXellVRllxb0FhbVFrUmhnbUJna1FiUjY5U2o5SUsyWDZ5TWd3Q0FoRDUvSUN0cjdSL01SQTBGVUZuOFZBWUtZN3Q5YWFyOFJIdmNSZHRObzBYa0RtWFNqQURhZ0VTQmxxamFvVExtUnBVSm1kcTVpV3RqTFBxVTFPczJVQVlKMm1vNEV3K2N3USt3VlFYb1QvVW9GN2VIeUF2QWJUODI5VXpkejR0aTVLM21QQUVZZ1lkbWNGNEJiRjVaQ2NCQm9NUERBVUFVcCsreEozS1ZYNTVoQzlQMUNNVnc4L01DK1R6NDFEbjkyR0hNamdnN0twbjJhdXI0ejI3YjNhMnhpZi9Fa29QNDRsVHlHQy83UFFNckY1MzViV0FySlVMUmp3ZXBOT2JIMyt5NiszdkF3QWZKS0J3aHFZMkxRZ1NscEl2QjF2MkZuL3k2UFM5ZjVoOFltZmVGL0tTMWNrM2IrcThZbDJ5NXN0MHpndHJHZGFxc0ZzN0FFaXZDaUMxL0pxc0dBR0JBWXd4S2FSZmN6dzVZeW1wcGF2ZjJWMjBEMzdvTDFXQTZXQUdwQlRaVDczUC8rQmZISDdYbjNzeldmMUZHZnluQ2diNDViTEdFYmZWUXRuZnNxZjQ0MGVtZi9qUTVKTzc4bjVBbDY1T3ZIbFQ1K1ZyazFWZlRqY0doZ2hnR2taSWNhM3F1Z1I3NUlGZjNmLzk3enh3N3crY1drMVBwVTVUQm9lQjAxNDJ6NWQ3eVprQjYvTVhKdDl6VWZSZkJ1ZGE3R21rZnM0bk5WVU9rOU16b3loVTU0elB2dVRMRXM3UGhrdFBqYldIaEVWWmlXbXhrT09XTVNpUSs2Y2hDWnJDUElrVlRkblBQYWRFOU9RbkwwS0pjRGhBYkJFcGVBR0wwNzVwRktxd0c2NWZJVmxIcFBUN01SNVhqUXRiWk5ibHphYnovQXp6aFhwNUZ3emxESmxwVGdkaEVhN2hHZVNxNklxV2ZwdmxIV1Z6b3d3eXl0RlhKSktxSFMybnA3TGpvNFlkV1ZRbVlLSjRMZktkNWRIMXE4dzNkdFgzalFrRXFHdUFEaUhKc1ZSQmxURGNpSWl1RVdJTTNRb0E1T2Y4Q3k5UUJJWU94U0poUWdLQXpkQ2h3R2xFUk92QWtBQUJTeFRFR2FvRTFpZ3lORjRmNWN6U0lsOFlzQjVicmhWUzBuYk9LaUphY0tuNnRRMWo3dE5GS3ZsYzUrZGNDUTVYTjgxUnZUY1c1RHk0QXBLZ2MvdUM1dElUVXpBYlJuVkppQm9vdUxSekV1WWlyYnpDY0NvRDJCM0FoZjJHWmNicTV1bFBiTWFLSmhZSUtBcFVMbmRQUWhDMGVXejc0U0lwTFpBbHB2Q1dmNzhtKzMrMkIwTVYzbWtoa1BWdXh3eE1GR2xYR3ZINUhRU3oxUzRiQVFIYVlMeHY5ODNWN2ZHcHQ1SFN3OWhKWTdJSUVHQWFLVzIrUFdpanBVYXhpdEd0WUtuNjJMYWZGdVc0cHZwMWM3Z0h6bG5peW11S1dmR3JKOUsvZnlhN2I2UmlHL3pTMVlsWFg5MSt5K1d0UzlyTllpWElGbndoYU5hcHgzV3czQVFBcGhva2E2Mjkxd1N0eVVyMWlNck0yZkIvQnVaTFZ4UkdMMzd2WDNmdTM3ci8zNzVxYWxCVUZMWnNEdjd3eTVlKzU5YnptRC8wL3JlUkpHNmMyVXQ2RWVjU0hBU29YdG1wNGxkUHBuLzM3TXorVWNjMitTV3JFNjk5U2ZzdEcxdVd0SnVsb3djR2dSakFtYUViWVNvS2owWVA3ZGxWcVZSdmV1M3JLcE9IZi9WZjM2NDZqaHFKbkdhU0tQbE1HNUQrRUE2K3JxRC94VURxWDgrZk8zWklvSHdxazI5Y3BkMFpPcEtyKzFBQkJKSjNSL3lkK2ZSWHQ3Yjk1bWFsemFvdmtSY3dQb2VKdjJNbGpCY1JOZUJMMWgzeHR1VUtEKzFzQytYM0RyL09uYk1vSU1CV2tmUG9VQllSWTNaeHozUUZaYi84NUZUOGhoNDRRY2pyV0gwK1kxM1FpdllFeERsajdTTEFWRkVLNkdDV3RkaVljVXUvelVSZkxubE1ITWZJenJrQ3hzWU83S24vdlZpUVBFZ1d6VDA5a2ZHVmtUc2J4dWNha0JaMTFkWW5LS2pYVU5vWDFGVldBbnlnVDZuZndyQ1l6Zmw4NGVLQkFCTVlFL1hrazE0Rk91b1Ryc0hnVU4zZ0hGcTZ3elltdzR5Y2ZVRDIrL3NpM1N2Tis1YUpaT1VzVTVLVWl1MXRHSGZ5WTk2V0N1dUowVWdCVXhWRXRITkZ4TUdBYW9DSWFWemVSVVczZHFESUV6cE5WYVBYZDR1ODV6Mlg0VTFtdzZ4RWlKbDBLSXVKQ3FLTDFKOXdmYzJCSFQ2QTFoOXRLbTg3V0gxd2tpMVB3UFVSTVRCVG9ZTlpSSldGN040TlE3U3h2aVg1NllzbVAvd1lPT2RINjgweG5YWlAwbWdKQ1czZTJZUWE1RmRqRGVmQ1lMeG45ODJWTFlucFc2SDJnMFdPelUwS3dBelNCZ0llb2Vyald2WnpjdnFqZlBwRHhzekg3YkhiWnF3SGxseVd1cTV3WUZjTkNDS0FCZ0xjZkY0M3NhemJ1dW5TbGpmZDBIbmpKUzBEM1hZZ0tKUDN5MVVCeklXNE1VQklZckVvUnJaamVodFRJaVJkenZSSS84VVpkei9Ec2JIT2pBbmZSN1Y2M2ZzKzZIM2pqc2xudDFnQUZXWlUyNXFlbWx6OWdkdDdac1pHN3Z1ZWR2YWw2bC9FdVVHdFdOUk1ESFJIWG5wcHk1dHU2TGp4a3BhQkxzc1RsQ240NWFxZzR3WUdRWUpidGxFZnlVS29xcUxwZXZQS05aZGNjYVVvNVo5NTZBODhGaitkZDAwK3RONUE1cFhSMTRqSVM5ZTIvT2VsYzhleUVtTmlBY2FiT2xIZ1dJVjJUaURlV053SjRna2RQazErNUxIVVY2NHdMMnNEZ1AwQmdvWWY4YVJRT1FUb1FBWkt5S3BGYUxhbi8zNXo5TWFWNXFadTdCZGdDLzc4REtBek9wZzVKbUJiRU91T0ZuNCtyTVExOC9JT09WM2w3WGIxcVduS1ZlMVhMd2ZucUFYblNnc0sxZkdoTEpWcnJDZGF1RytjdEZ6OGxWSk1LMGVMTXBKU2pjWm14ZzdQVEk2YmtTZ3Rva1ZMRVRESSt2WXkrNlVydEkxTjlaMlREZlUzMUhRSFZLakFoRVNKNmxMWkphUTRVcnpldUV3dzZ3L29qUFF6amNHbCt1U3JBbTBLWEtySEhWZ01Fd0llWURKME5qekVDaUNBcWRrcG1VZiszd0Y3eDRBMjFTS2o1VE9Yd1l4NDFReGFjKzZ5dzdXSHFyQTQ0MHdPWmNMY3J6TTg1eWtSRm1ZYWJOVmFEZWZaREpJNlZRVnJNdTBOellYN1J4SFg1ejVDaFVOaGN1OVUzVEc4S0FndHdCNWh2OUJXcDVKdlhULzk5MC9BTkxqSklRRmJwNkVNU3NHOGR1OWpEZEh4djFscnZHWEoxSWNmUjJlRXFiek9sYXNxTUZYYU1vS1NONjlCTzBSSWZsV3FOOUFHNDczYmJ5NC9Ic244TFZPWGd4bjFPQUFLb0hZTHBZVUsvNm1QL2FXUi9WVEsyOXpMM2VWRzZ4b1NmZXJZd0dEbVRiMzMvOFdhTjFXUzczM1UyRjd3VkhoQVpXS3FyUW1ybDBSTmc1Y3FRYmJvbDV4QVNxb1hSVG9Lbk1QelJjMlh5ZTRCUFAySDJxSHRYRTBBYU82NzBvMXlFWlQ0c1V6SWpITXZONk4zOXR6d3hqZVAvdTFiSzc1dkRhNGpWUzlsMGlnV1YxNjJzZmJFZ3hMQTRpMmFYOFNpSUhTWFZXWnlyYzBZWEJJeGRWNnFCRE5GditTSWt3NE1SV0crS3p4UDZMWVZWajZqYXJWblNiOVhxWlRHeDF1V0xPL3Q3VTZQajFhbkp6WExXbmlKVEQ3VURnbW1qTDVNR0J1V3QvLzZxcmxqWWRWZmMzN0RteVRZT2lvQlBUTUNRNms3ZHdoTTQyaXpKei95cVBtdUZmRy9XUXNBUndSeUVwSDV4U2NSSWlxTkZwQ3B3TmJoUzdZMFh2cmVrRmNvdHY1c0UyYUF5V0J4a283cWx3TWlHakpWR3NuTnFiOUVQS2JKeVVyNWtjbmthNWVoN0lNemFDajlZVHg2WlFlV05pSEFDeWdNOElMN295SmJvK0dzMGhhaG5Kdi80WVI5blZCV0JTSi9UUGlWcXV2a2U2UDdkNnU2dnBqcHY1SUhpYUs1dFRkU1dSbjVjcVBxcEFTeXNtNjBjQWxKQmMwY0FoZ1Q5UXBvb1plMml3T0FBTWJsMFpYUnprZ3dFR0FCVTZLdStIWW8wQm9QWFFXQ2hzRzVSNEhCNm0xMGhxeWNIUm5tR3p1anExWmFQK29QRWllNHpsOG9ha3J0aXBIS2ppbC9TNTR2amRONGtjWktpQzVHT2FxVGdnR3VnR1ZFYituM0R1VEZXSVhITkpwdzRyY3NDZEtPOSt3MGJ6Vm5SeW9pT2pJVkdza2p1aGdSMFNIcTd2WUFGVFRmZlRYQnkvM3JMcXhJd1F0Z3FIQjhHc29zWlBjT0RjaHBnYlFFMEhyWHRVRk15WDNtT1RiUTBBTWt3ZFFnU0c0ZXFUdUc1L1ZwQVJxd0w1ajkzclIxOFo3Tkx5MDhZT1UreGRSQmdnTHlvYThRd2JneTlrWTk5OVdtMkpXcnU3NXdYdWZuVjdkOGRGbnFyUjNOZjkzZC9wTnJZNysrTlBHTG03cmU4Wkt1ZS9iM3JQOTJ4N1gzRzRkRjBNUVpVSzRLUDZCUXJabnZPK0tNK1o0TWFsSzIrYlVPcGZ6a2p5ZzlCaUFhWHk3ajBhcVhaaWRRZmpGVjljZEdPMjY0K1lyelZ1Ly85RWY5Zko0YkZtTWNwVktpcGQxd2lqN0FYc3dTL2xNREF3R3lVbUZncHpNd0dHZGVJSHhmNnBhSlVDRU9mQzJaVW5SdGNtekU2dXBwN2VxV3JuTnczMzVFVG1EWFBob0JsQ2JKazJ6c1ZaSzM5blk5ZTkweFIvZWV5dldySzFBZ3Q0ekFDMkExZktpUzJMSkU3bzduZzVqYUdoSVdUUW1NSEZWQjZhUlFPQUxRb1Jsb0hJeHhnMU5KenR5OXMrMTcxM0ZEeHk0UHNVV3R3c3NZVk1qOUdVaWFVeUVJNkxDemQrMHhWeWYxRGMxeXl1RjlzZkt2UitGNDlwdFdnU21vblYweC9JWDZBMmlNRGt5akZxQXpVbmwwQ29wVGV6cm1iZGEwdm1ETzdVV1MyOUdwUXdmS3VSbkRqcHdXMDlkcFFnbWdjZXQ3L1pFM0RLZ3JZL1dkR1FtWG9EYXFzZllvQURBbFVTUG9EQUE4SUY2bjZNV2tnTnZZRCtBTUJUQUFsY0VESmdVQUdFQVRSNjJoQkJzTU9Ra0pLRUF6aDBjQW9BRlZRbVp1ZEVTKzBHOGZHRERHMmtUMExBelJqTlJpdkxaaXJEeXdxM3h2RGdabnVvS2hOQVRtZFlXZVBRSUpndktTUHIzRktQNW1EQjAyVlh6V1pFUXViYy9kZHdoUjdaZzFsNkhTVUFZMUNYMFJ3L0NBS01jMm4zSGUrb05OTS9kdEV5TlYzbXdnSUVSME9wSkQzbHNvK0lzQkZzTlFFTm9uT241L1MzSExwUE9qZzd3L1hzOGNDSjNCTXhWNmJndzJQM21KRHpRaTdFSU5vQUg5a3FidVgyL0tmazhyL0M5Rkc1VDZ5c0I5VWgxNWc2SGF2WDEzYjBpK3MxZE5hVFJUazJPT1BGS2luaGJZT3ZNVi9lS2s5YVgxeVozdlNIM241cTZxczNUVjcva3ZEZ2JMbyt3MFpoUEdtQVM0WnBiMmo0MGQzamN0UjRhZi9PTFlydi9hdCtWTHVpTXNvKzFFanpRUk1WWEZUSGJ3ZFc5WlZabysvTkZiVTcyOWtuUHl2VWhMcSs3VjNPa01ueStUNUVYODN3SURBRkYyUWNwcGFqV1N3QlRGTU9yUmtZcWlpV0plU3RtVVNJSnhLeHEzTFdONmJCUkN6cXNuQ2JBSUtkMXM4aTBrY3EwOXV6WWRZMTA3SkZCY3NOSUZZNGdxdEhNSzZWSllSdzhBQXNtWHhLb1BIQzQrTnRyeHUxc0FZRkxnZ0lERkZwcVBDYkJWbWloaXBnSkxBeEdhcmN5L1BHdTlkV24walN2eFZMQ1lybDgwQ24yTUZER2VSOVNvV3doOHlaZkVuTitNMUE2V210NjVpc1lxTEduSVRMWDArN0hrYS92UkZxK1hYVHdYQ0ZPaHhpdDBKTS9hSWlqVWN0OGZhdjI3UVd1d2ErcURDdE1aaXhJa1FLUWFWbEF1amgvY2I5ajJZa3BmeVlOazBYcXUxL1pYMko5ZE9yYy9MZXZXTWgrSWNpUVlBTXdJaEluSERBZ2tXaFFBa01DMFBNNG5kc2FaNllEQmtHNG90YzBOOXpJQUZhaFNHS3lMNUZFcGNTcENyU3VFL29yMnlPb1Y1azk2UmN3OU8wOHdrUmJ3cEZMWlB1WHZ5Zk8rbUp3cTArSGNLVnloWndNRzFBUXNNLzZtbGJYdG1XQ293SnROT1ZxT3Y3cGZsb0xLQXlPc0oxSVBheUxBMUpDcjBuQU9rVVh0andvb2hPMUI1UFVEOWsxTDBwOStCdDF4SmdRMEJiV0FEbVVYU2traVFHTmd3TzRBQWtxcjJmNzdsNlcvdmkzWW5lZGRkcDBYU3hJU0poM0swdjRaeE9kWDMwTjFmRnJXbDJJQUFQT2xIWjEzWDV2K09uTit4Y1MwTnZaZUk3RnBhY2ZYMW5LVnl3TWxXZlNKZ0lySFZyU3lwWEhrZkRnK1JuM3M4RkFqOCtabDBhZGVZMzkzUGN2bFdmVjBKeFJKcEVZMHUyVFhIc3JOUEo0WmYzaFg5aWYzeHZhTUxlVWJtS0tkV0NwVDRWeU5STGI4NGZjLytiYzdad3FGN2tRa21VdzRUcVhtVkZoTHF4bDQ3dkRRT1UxbmV4Rm5BTVloQUZGenROTmJXM01pSVVuVGRVUFhJQVFCekxaSGhvZUZDSnE3ZStDNlRGRnQyNWFCTHgxSE9Ta0Jzd1RUU0YxQjZRL0IyUm52MmZkbjlhS3pJVEtuZFAwQ2NaVU9GMm5mTk9LTlBGUkpQR1hJZERYOUw4KzIvUEFHdGRQR3RLeEwzd1hZMWxHUFpxV1JIQlFHemxIMXlJZjFwdFd0ZjNjVjloSlVlZkt5bDJjR1NiQTB1SkoyVEVKdmNKTUx5ZHNzTWVWay84K2VsbHRYTTBPaGFzRGFyY3kzOXRncll2b05TNkRxY00rWitxc3BFQ1QzVElJeDFoTXQvSFJZVmdMN0pkMU50L1dJZENKN2g2YjJoMU11TWRPY09MamZkY3FhYmk1bU1KQWltS3FZUCtxMTM3Qk1XUmF0N3l3UmlySnUvd2dJY1FZQURxRkNkVSs4QUF5T1pnNEFHUW1IampPV25NWFRDcFhhYkNob0dleUd0WmtCRE1nVEFFUWJsRXlobGFZb1oxMkdBT3pQTHJVUExOT25XbVRrREpWZ0poU3ZQUnQ1ZUcxeTlGSjFnNXIvOFRCTWxka2E3VStqSXVZMW41NDlmQW1Dc3JIYkdremtmakNFWmhPZUJFUHlqUU81SHh5a2tzZG1NNENKWUdzMGxFRjUva0laWjRCUSt5eExES1A5M2h0cjFWTGxwOE9zM2E0N25NYnl5QzJvQk10RzZ2YXVBQkxteHJiRTV6Wk8zdjQ0T0dlelNjQ01JYXJUOW5Ha3E2ZElhSTR3SEJRb3p6V0l2SDFKMnhldW12NndtSGlMa1hwbGYvT0hsOU93RXladWdRR2VZQkdORGJTZ0l1dUI1U0dMbEJ0Z3lNTTI0TlVkOUpJbWZjb1RubDh2ZUJTbUU3SGpSVElCbktIbStUSVFBMWRjMXIvcHVwVnJMbG03WXRONUsxN1RHYnNFaElCcXgzdm5pSlJJWk9ySWtYMWJuN3YrbGErTXRYWVVhelVHa2tFUUJENGtFZU5NMHdIb05oVHJ4WlNrUHhXRUFwZ0MxOUNWb0hycWdjRTRxL2srdUdvYVJsaWpFb1orYVArK1pGTUxJamFFNElwcUdMckM0RmFyN0VRQlRBQ0R1a1lXdnNBTDl4czlUOTJvOUVmbmpycW40ZnFOYUNnSDlQd1lUQlZLSTMyV016UmIwLy93bFAyZU5aRlhMa1dac0Q4NHRmUU5sL0laQitrS0xBMUNRQkE2RTlGYmx6T21vdWlIL0d5TEF5Sm9Da3dtbngyRjQ5Vm5MVUU4cHNOV0p6KzVKYmFwMTd5aVF4NHU4eFdKMHZjUHluUTE4UmNyb0p2ZzU2eU9EUUZSaFE1a2tTN3puaGlOVjJhK1A5VDBGeXZDcEkvMmp3N2tmMmhVSDlUVS9rQlJiSytRbng0Wk51M1RqcjBpRnBiMVB1YmY0eUI1a0NnWk83cnMyZ3I3TTMxeit5Y2IvSzBoSWd3QWNoSUM0R0hsTmtLTTFiWGhyRHd4c3VUc2xpc2NkUUhNZ0RpdlY2WU1GYXlTQkFDTlFXZDFEU1Jjb00yRllzRjRWWHRrK1VyckZ6MGljUUpGMHV4VFlFUmNraUxCcUQ1Q1p3OUo3aWZ6ZXJvbCtwT0xvNjl2YWZ2SWVlVW5KcjNuTTd3M2hyeEwrek93ejFrb0ZnQlBRalVTYnhzVTAwN2wvaEhlSDVjalplc2xIZWFhWlBvck8xaG5aTzdMTkZRNEh1Mlpoam0vdytvTVVIY0dlNXpyclYrOXR2eE1taVNEa05BVmNnTWFtVmxJQ1VhalBGWkpZb2NQaWVSL1g2L2QzSjMrMkpPc0p6cFhJMW9QRTVwSDRNdXdoc0RKejZNQ0tyQTNPRnJWakg5NFplS0RsN3JabWVUTmJRQ2prbGVucUdLQTU2TWpEa3M1Q1pPeHlxQUQyK0VkS2NTV3hMakN2WUxyempodTFuRm5LbTdPOFVxMW9PcUxXaUI5SVFOSmdoaWg2dmhTc2tna1lyYTB0dzRNSlBzNmhlWjdRVkZDbkZ5SlZ0VmlxYVJ4eEV6ajhqZi90MWh6MitIaEk1cktpWUJLMmVlcXNYUTVBOGErOGxsbnp3N2pkTE5VWHNRNVIwQUkzR3FrS2NMVlV3Mk1nQmpCcmZpQVloa0dwQUJBVHFWM3lkSlY2ODZqVWhtTUtackdGYTV5QklGL2tnOVRRRnN0S3YrbHBML0Z1NzU5blg1cDA5d2hBbllId0lLdVgwMkJBdm5zS0h3QlU1czFQck5sOGVLZE8zMmR0ZnpyVlpEQUxoOGFvSjJHOHFxQ0pnb1FBcXFDaXNjNkU2dzdoZ01CM0FEYTRzMHFSRkE0WWdvOU40bXhQT0lHSkVFUWoycG90U2IvL2ltOUw1cDgxeXE1djhDWHhtcGJzL21mRDdlOFl3V2FvbWl5NFp3YkZod2lSRFRrUE5xYlpsRURyVmI2YXp2MTdranMxVXNwWGFYUmluVjlXL0thbnFuM2N5cHozcU5OSFRwVXExVlZmY0VnamxDSU1KSzZKMkxsSUZrSVVzVWdXUXlTeFNCVkNCSkZhZFRxelVKd0NaMk1uM1RicitoWGx6ZTh2elVnSitlS2RUUFVvMDJLVktmQUNzT3ZFaHdBSEVKUm5saloreXhFVktqVWxocjVSWEYyakxXNVN2WGlHK3lvOW1FK1VtM3VITmJIZTYyZFM5V1pwSnlsS1pTY3VCVHhjdENVRHhKRkVhMlFVU1BORTlHS1NKYURWREZveW90b21iZ2t6WWNsNG5kZEZsdmJhMnlLOFphSWZYNXI1dTY5c0JTV05PbGdHaGwzM3FKT1p3a0dlQUVNanU1azArdjc4ejgrSkNZcnZNV2trVXJMYld2OTBVcngyd2Y0OHNUUitiVjBLRXVIaTR0VG4zSVdZVVRWTHQrK29LL2xmMTlQaG82cUR3Q1dSbU5GbEFQb0MzSkNoREs0VE5nVkFHaTdkNU16VmFsOFp4L3ZqOC8xUEdLZ1ZLUG54MkR5ZVdPNVo1M0IrNC94dHFhK2VHSHliUnRHM3ZON09WSGxYVWVaNVJsRGNoNnVVQUlVRUFXVnFabm1TNWYydmUrcWxXKytZTm5MMS9TOFpGbnIrVjJKNVMyUmpwZ1JOeFZkQlNCOUVWUTk3dm8xeDJPcWJtZ0tpZ1cvWFBLZENzbjV2WG9BaExEdENPTjhiUDllQk1HYUN5L081NHVNcTVZZDhXYXlOVldMcEdLRnA1NEk3dmg0K29OL1djMWxkZnRGUGZqL05nZ2NrRFhoVE15MGJEeU5nZUY2dk9aN1ZaOHBtbWthQ0NRRGdvcXpmTTNhdHZaMnYxSUdvR282QTFNVVJRYmllQUhzUTFzdXZLZlV5ZjhwV3o5MXVmMlczbU9PSGdqZ25JcmtJS2JRbmpRbWkzT3VYMG04eFFwMjVISS9POVQreTVzQVlHK0E0UFNJQWpXT2lzQjBHV1pJTWNSWWYzUG84bHhrdjYrbUlLN1MxdWs1czNrZ2VjcEFxem4xMFNmQTBQclJDMmkwekZPR0xQbFRuM211NmI4dFYxY2trSXpXelp5TGpqQ0ZSSUhjTVE0M1lDdVR6cStQVkxaTXRuL3NBbFFGZVpJQUduT2FQOWl2NkMwei95TWk3RncyUFdJWTgzdC9KU2NtUmJ6c3QrUkV6T0dPcmcrM1dWdVdSSDYzd3Y3VmF2dUIxZGFqeTQzZDNVckZDbExGSUpVbkxpRVVFUzBiUTIxMllibjF5YVBVM3lrQi82aDBDUUpVQmdBbFdmK0RBQTExdS9STVF5MCtGc2NIaUw0d0tFQVZ5RWwwY2tSWjNkck1HNldvQ3hJUkJSN05YVFZzUHlYcUtjbUE4ZlpPKzJNckszL1lYMzcxVHFVU2tib1hOT1Y0b092RDdlcUJwSktPYzhmaXBNTU5TTlJrMUJNSlI3U1V4UkluNkNsNm5WT3BIMXdYeTYrSmZiWVorUUF5YUg3WDRKRy9lZGg1WU5TK3FaZTJwZVhPQ1g1VlA5UnpRNDdFR0dvU3RxVmYwUjNkVlpqKzRyYk9mN2tjcFFwOGF2L1lCZU8zUDZuM1JjekwyK1hCSWxRT3ptQnE5TndvaXc4Z2JxRG96UnZaOUVJUktxQUZYMG5wV05raUp3cHdmWmdhOGk1TmxOanlGTHdGZ3lKQ0daeVhPQml3WldyN2IyK2V1dVRINW9WdFNxc3BaMnJnTEdTWW9NTTVORWZaaWhUeTh5eHlRM1U4SXpFcTZuR0FBSUNXZTY3eHRzMk0zdnBnM3c5djVpbEQ1ajF3QnM1aHpKOWt6T0Y3MWFCV05hSW1hNDRrVnJYV0JUOFJCTUgxeVJQQ0U4SVhJaERTbDFaUGZPUkgyK1R6K3cxTnI1Y0dQaVU0QjJPYXJsZEtCV1F6VFUxTlhGV1pvcW90clZON2Q4cW1WaFhJL2ZqYnExNStNd25hL3JIM0RYN2p1MXdIK2ZQYkcxL0V1UWNEaEZPUlRrV0xXZnkwQmtic3lMMWJ4YmFEaHFhQ1pDaGlBODhqQXVNY1JJcXVjVVdWWGhDSUFKeGpsakxXaDlJdFJGb2RlNmRJdlBYQ3hDZFhIOU9QU1lsSmlkakNXYjg2SmgzYU00WFlYRWtYeGhsaVd2cnp6OFkvZVlHK09vVkppWXhBL0RUaWxnblFGUm90VUxtR3VJbWl5N29UYUxOUlhsU05VeEpzRlRxblp5Ym9RQm9KRTR3aGtMdzNSbVYvOGdPUEtTMUcrOGN1b296TEZJNm9Odkh1UjZKWGQwYXVhU2Vwc1RZTGhYT2ovZ0tJcTdRblN5TjVaV1d6R0hPbXZyaTE1ZDNucWN2aWNxZ1l5amtxK3l5dWQzeDJlZnFEQjBjL2Q2aTJQbTFOZFJFZFArOHh5YVVhQkUxNUJ0WFkyNlk5MDZ3TnBUVGVwTW1rRW8zeHBNNDF4alJGVG9xZzROU3FNMTVxdW5iWmtlcUZCNW1ya0NYMFgzWkhMaC9RTGtvMkhoZVFsY2VZUUJRZ0wxRmtvSWFnRFFDTDExT0JaOVhpWTNGMkFqaThha0dpazhOZ01Ca3FCTDJoN0dZbEtvMHlpaUdva1kvVVU4K2Jab3hidC9XWW4raHhienppTjgwd25TS2JWNWtQRGRpMUhyMHJwZlZZdkVsajBrZkNsTG9weGlwaXVpclRudjkwMnZHTytOMVphM2dnOFU4OXlubE44cWswQ09xS1JQT2JWcWIvOTQ2K2pXMjhKeVlQRjJsb2hxMXNRdTdjaEFaNEFSSTZWQ1B4K243Mzg5c3lYOXJXY3ZzRmNsZE83WSsxL2ZjTlUzYzgzL0dKaTR3TnpYS29CSVhCVkZIeDVPUEQvTm9CeFBYRmxNR2g0U0hqSWFtelpjMjBiUnltQm8xam9vQWxLU2pzRk9zUEFxSU1vd0p4eGJ5NE5mYjNGMDUvK3VuT2UyNWdCYSsraUd3NGcxbVRoWVNKMHZ3OXR4bUdCYUtObUhzQVFOZVRyenJjK2UySjl6N1NlZGQxckNiSUNhQXc4UGxkVmdwcWJsbDRybTdwS0xtWWNjQWJTWDZjUWVITVVGVkxVM25Jd01qUW55QlRaVkEwVFR1ZGduT01BRldkSGowU2o5cFNTdFJxMFdoVTBUVFZzQkNOelV5TTBkb3JYRTlvT3phTFpVdldicm9sOTgydkhiejdHeXZlOGU3cUM2T1JmUkdMakZBQWsrOXBsb1ppN1RRR1JwSk1qUk0vZW1EVUZTUEdJS1dtNlVJS3k3WWowYWowZzBhWU5YaVRaSll5ZW1OZ2JsalI4dThYSDlPSnNzUlFJOTU0UGhPT3FTSWcrZHdvRkE1Tm1UTSs5eWZLLzdsWE51bXBUMXdJSHpnVXdENjlHU0FNa3NoVXdCaUVCR2RzV1V0ZDQxd3NtU2VCbUE0aDZiSERORjVBM0FTQjJ5cmFUZWVQazdtNzl0b2IyMUszcnFHSkNnVFFGNTM4dThmVWRyUHAxa0VhcmVDS2Jyam54a0FrQ1FrZDZTcHRIMWU2WXJEVmlkc2VqVi9YRlh0TlB4Mm9TMThBVUxtY2NMUTFpY1E3T3FmdjdyYytNaFEwNWRTWkpQRkdyNGlCbUovS1E0Zjk1REx6RjMxMnNNeTh0TXY0VkFkZllYQ3VLaTAyN3pReFZjYU9DYWlxS0FYQldKLzNsRnU5TDFONVpDaC82ME53WVI4Wk1ML2FNOWUzakt5VFRjME9BNE5oUXRSbFg3aFRFQXdPQURXQ0krYzZmQlRPVGdDSDdsNkhFRFFLSlpZYWcwSUJmTUFSeDNzaWRhQkN5RWkwMWVkbzh3UGRrYzhNbG5mdkNDNHJOWDNwNXVqb0t2dVdGdjFxVStzMVlTcHdBMGpDdGYxSUFWV2dBdWdVekpUOTN4VnI5MDFXanV6SmZHMXpNamRvWGRPRkdWY09seEp2WFZsNUtqMzkyZWZhdjNnRnk5Vm8xeVJyaXlLcW83eDRBbThXaktFaTBKTkV0dFQydnJXakgzbXErTjBEOFRjTnlGMDU4K0wydHI5ZFAvbnBMVzBmM0dCZDAwVkRSUW9rSWpwS05mbndFTDlxR1pMNklxOFpPWU1qV1YrS2htZFE5V0dxbEhkWXprSEtucVArbmZkR0FKdGh2NCtFM2tCdlhSY0FBQ0FBU1VSQlZQUlBGNC85WkxoNDU2NzRlOWZTL255OTlycXVvaWJrYzJQOG1nSG95aHdmMU5HZ3hoallGK0I4ZlM3YVh1YzkyMTkvdVB1ZTdEOXRhZjdVcGRpWEo4ZUhtTDlXTzRmcmxxU3NHWlpSdDFmUHRwUVVPdk9PaXBnQWNycVRMbW1Hemd3TjNxbklLSW5VYUtRd05wNGVHVzZPUnpYVGdxNURVUXc3b2tSaTRFeEU0cG43Znl3TzdPOXViWmFhVmtoUFgvNk9XMy93bFMvbVgvcm5rYzZPb0hLMlVSTXY0b3pCQUw5WVpOSXpiTE91MFM0OE1QSlZaN3FrR2daMEhaNTMzTm1FNzF1eE9PY0tRRlk4RVRqbDBHN0hURko2TVBrNlNlam9mUExxWTM3akEzc0VOTlNUUGsvZVN3YUwwek1US05hUXNocVJtR0FSalRMVndxK0dtMzl6TTlEZ2RWVlBMM0pLNWFnR0tEalFWVlE4MXBWQXM3Vm82bTg0WVNjMTVEMzUxR0dVWE1RdHBuT1dNUHl4Y3VsN1E3VWp4ZFQvTTJoZjJVR0hTbEFaNjQ5TmYzeHprUGQ2dm5FMUhTcGdlU3VMcThpZGc5bFZFbXdObnBSUEhXRzJodDdZNUFjZVV4SmE4MGZPcHlObG1qVlhoT0NNaGl1Uk43YWx0bnJzVGlmN1AzNHRUSmZYRERDQzVLUUdmbXZlUE5nWnVYdE50RFpvdjZ2ZnVLMURXNThBZ0RUZ0FSN2dBKzFSMnE4alUxRmFiS1hMTkY0U3QxNGYxYithWUY5Ui9lNXA4N0llNDVWdGMxZE1pK01qcWtKcGlHTUhZYWorbGdnZWNMSnM4N09lVGhTZ1JpZ1NBRmo4bUd0em5Ed09TQUhTYy9ZQkh0Zk45M1RaRDZ4cy90ekxrblIrNnV0OWtkdGF0VjZUQ3I2Y3FNcmhFclVrNFFLN2ZCd0prQk1ZaDlvU3M5N1huWHp3b3JZdEwxTXZiWi80M0pPVEgzaFUxb2gzMnBpcGRmelBpNnE3Y3NWNzlySTFLWGhDUGo4S2psTjRRODhZdm9ER3FDM0pGSFQ4dzBVejkreHhIeDduSzVOeVg5NjZxcVA5WXhkbXZyWXpmODlldGpUR0UzckltZ0Eza0E4Zm9Ha0hLVzNlZGZRWmRpYUF5ZG5TSnRSOEtCeStwRXdGcDhPREdWb21BT3dOQUxUK2NGUCtnY05pYi82WXlwcFJBek1PN1p4RVZKbjN5NWVBd1NDQXZjY0lRcVhMNm5uNkRiay83aS9ldFlldFNFQkl1RUhkVlRIWCtVYkVnQXJIS1lMN2xtMGdtRWRPczZNMnpxdGxUOVVNNlBvcDAvNFlZMUMxN1ZzMmg1VU1ZazB0VUJSSW9XcTZibGlZeWE2NC9DWFhYWHdobm4wNDJ0RVYrSDR4UGEwTnJsdS9mTm5JbC81UnhTSVlqRjdFbVNHY1R2eHlpWk52V05xOEM3aWpCd1pqamxOVE5SMjZmcUpwUklvQXdKckxyekZNcXpnOW9XaEdQZXg1RmMxOGtqbTdvajA3TjhFODluM3ZEZURSUWk1YlNZaXBHQ25Ud1F3U0pvaFE4UkZJZ0ZoWEpIL25MdjJXUG5Oakc3S0UzS2xxYmh4OTU1cEN4UnBWUENnTWpMR2x6WXZtY0NVQ1owaHFORnFVRHg5QTFVUFNZanFYYmxCK2NMVDB3S2phYW5iK3c4WDJCUzF5ZndFYVovMnh6RDgrVTl0WDZQN3lsWmgyeU5EWThoYVV4VG1SdnFZS2pjbkhEN01nWUt1YjB2K3cyWjl3T3UvWWlHeU5xc0h4VjJRZ1h5THJ4ei9jRmcxV3hyNS9TZEJTSkVaTWNHbFZSWHNoOXNCNVRWL2IxSHpWdFUxN3JvamV1VXBibjBBYWVOVERzSWRwSDNrZkpROGUyR0FIRVdTaEppZXJjcmlpTnB2SkwzZW5OcTdWZDNTeVZVZGRya0FvMG9rUlZTZEJtSDFXcFBxWVBBR0x0SjZ2U0dBZWNYc2N3Z1RpSXFGd1ZOK1hDNWFMeGRzSFUvL2FxemFiOGtCWlptdEVoS3FIdGloYmtrSXBBQStkUFJJSXNNL0RjejRBN2J4VTZ3OXY2SDdzZFlFdUQ3L3IxOVhOMDBnYVBHbDAvZU1sMlcvdmN4OGE1eHRhYWJ4SU82WVFVK2FOUUpZSSthVWJHNzJBOGMwWktqNWJFcGVrYWwxbSswY3ZtUHpNTTk2dUdiNGlMdmNXelBVdG5YZHNkSi9QVG4zaWFUOWI0MHZpVEdHSTZwQ2dSdy9TZ1Jra05HaUw1NkptREk1a3ZTbkVMYmcrTkk1c0JUNmQxa3NPNDdseUFsT2tEeWFqNzErVC9WOWIwV1FlOVJ3SWNZUDJwekUyUCtjU0dzN2dBczFSWmdFQTlJdWJPKzU2K2ZSM05yc1BqdlArS1BMVlk2THpHSkRncUJFOGdnYTNXZ1pKeTlMclNja0wzVEpBNUZRODFkQ2hhYWRrZU9XY2kycFZJUkd4REhDMXFiMExnUytxVlJMQ3RpeTRyczdaeXVzMlhYRERwbHE1U0lSRWF4dW1KdGE5NHJYMnRpZXpCdzZveHFJdW1GN0VDd0VEZ21LSlMybEY5RHIzOXNLdEpUbGxUemNONkpvOGNXQXc1bGVyZGl5eDVyS3JORTBYdmc4QmJWQlUvb1BQM0t0Mi9lcDZwVDl5VFB2REFubTVFTjBDQVlZS1Y4cnQ0ekJVQUNpNnJEK0pKcHNiU3JCanBucXcwUFNWeXdIZ29EOWJDdmkwYnBzQkpSZVNVUFZaWnh4dHAySFRPaDFJZ3E0aXB2NS83SDEzbkIxWGVmYnpuaW4zenUxM2QrLzJvdFdxV3RXeUxWbnVGV3dJRG1DRG5ZRHBZQ0NVSkpCQUlBbHBtQ1E0alpJUE8xUVRjTEFOSmdZK3dCUWJXN1lsOTZMZWQ3VzkzMzZublBOK2Y4eHNVOW1pUXZUOTR1Y24vYkV6YzZlY09YUGUvcnk4WTRpZjdJUW1KbnMwcWJMVVlrYjZUZTJKTjdaejNsWGRSWW9hMUI0Yitwdm5TazhQTjMzNVVwS3NCa3RpWFNNSU0xcWFuaFlvaHFYREZMenRpSkFPcmE0Wi9lZVgzR0c3NWI1clVSTkdTSWk2Q0psYWtJTTJDWTNVcUMyaVp1TFRtY1N6NjZKUExaZnBuSXlVT2VXa3ZueHgxVU9YcDcrNUtmbno5ZnFTQkFBYzhyRGJRWlJnMG9RZVR5aTVxQXBSU3dwbDF3K1RxY0V5OXpySmp5d0tMNG03K3dwVDF4cVkzeU1UQXZ1bnpDZXFFenNkQWxnZ3FBSFY1N2ZXKzVoRzNlQStueldxUWxWL3RoaEZWbjJscVJpaHg5UmVEUTFCQXUwa1lvUUs0NW1KenZBWDFUWnZmM1BpSSt0N2JuODRlKzgrR0pxNXNiYjJRNnY3L3ZZWmQ4KzR0aWFqZHZUeHdTeFNNek9RL1M2S0VRTXRCaGFiV0d5Z3c4QmlBKzBtV2cya0RHZ2lPR1oyS0VCQ3JHNVFYVVhya3ZycTk2N3ErZmlUN3FHODZFaW9Bems5WWRUZnZqRzhJajMyN1QyNSt3K29paFNHQnN0QVdPZG51dm01UGxnYUlxY3ZWZHYxWUFsYVZJV0toNURPQlJ2NUNzejUxVU16RUNFY2NpRlI5WThiSGVMeWp6dEZReVRvc1NnWm1vQ3BxeGQ3WUtzNWlveGpoRzdsZHkrZVJPeWRTNnIrNU5LZTIzOGp1OHNVRlNpclFJMWx3QUhxTmF3eW9BQVg1VktSQU1zeUlPY0tjeEdndUZ4eXdtRVRSSE1XRENtd0prUnRwcWFVejlXMUxUWVRTVWl2VWl3eXExZzhEcVdrNi9IUUVMdU9sRjQwbVVyWE5zanNHTlUxTEdsdUdMci83bGY0b2Y4SFFZQ2R6V3NDa1dnSTNqd21Cbk81NUZwV0dDZlFta2dJcDF4U1NwbFdSTmxTYjVmTzgxci9aMVh0MzEwY3ZyNSt4cUZEQ2tlOE9UcnNFaEFSdkdzQVJkdlBncVNsdFhSSkkya0NDU04zejM3ckhVdTFUQmhIcHJWdG4vK1RGK3hnSVdxckN1Z2RUaEdLRVROZ0NuNnFtMS91Ujh4RUtLZ3paRnZxNlpDMXJob3VxOTRpMjU1SW1kUWNHZnJ6cHlzdmpqVGZkWm13TkxsdmxGYldvajRTY0VHZlJuaU11SW1rd0tFaHF0aVM5SkhiWHhqN3lSNXJTVHgzMTg2eHYzNDYvOE5ENWVlSFFSQ3RNWkVLQmJhVEQxMm9JMFh6L0hUODVvYjRQWnRJYXJJdW4vN2NGY21lODlQUGI0eTh2UzA0YkorSEhvazRIVTFkd29BSE5DYURsUitBVHB4M1VYQlROeTRSays2UUVtTlV6VXVGSWdSeTErRVRPYzlPaDA5TkkvZ1Jsdm12VDJIQ21FS1IvY3BsV2ZhU1Y3ZFQzRlFIY2pBbVpMampVVHBDdFhHVWpuRngrR1pXbWZHU2k5V0dmNUxxZjdzb2ZGNm05KzAvbG1OMjFZZldSdC9RWGpYcWRQL2hsdVl2WFdhY1V5MjNkUXByQ2RWSE1PWkNNWVJBczQ0RWNGRGFqd3c0ZTdLcXI4UUZsK0tHU0lmMHRuaG9SVVlzaXlDbUlRY01TcmdTNGdURVRBUVVYVlNIYUdsR3ZkZ2Z2M21KekRrOUg5N1NmT2ZsK3BLNE9waW5zSlo4MDJMVlgxL2NPbEI4YWpDeXBrcXJEak4wSkRYZU80UzhUUnRia0RDUk94MlpZa1FvU1dwSjgrRlJPQkt1NUt4TktXdStQemNtcUNXWDYrbS92eUQ3b2EzV05VMmtFUk9oNU1LVGlKa1lLZkgyZnJxZ2NiYjhhZ0lpd0g0UDBlRHQrS2o2eDQzdXk2UGRmL1JvMjNldXd5SUZwVUY1d1dld3k4VTZBeGVZR0lNc3VFSkQ2RVNWeDBkZGlibGM4YXlRaFhsWXAwUUNyTElqZzRsTVhkUHlWYkpVMU1MaDhWeU9BU3NlVTY2bjZicFRLWmRMUldhT3Ayc29GSksyclJVS0xhdlg3dDI1dzFhZ0VQam9lT0lyK0cyQUFPVkpJV0NHdExrdDRLbUpNUXRaaHQ4cldzS0RYc2RzYTcyM3lzUk42eE9mWGpiam9KTFB1WEhpeEN0TVpENzNGZm5RQ09JaGpKZG9lWVl1cU1PZ0pNZjFEdWRjVDJiKzhseEl6RTM0Zk94amUwREZROFhCb21xcWphSjR5Z3NGQTBrVEpVOXQ3Y1JvRVNuTDExZUN2WUxZVmV3b1g3c1YxUmJpUnYvSHQzcUQ1ZWE3TGlOZHlMMmpWQmVqYytwUk9LMjJyOGNJNlZncWtJZDc5ODdpancrV2R1YThva05WWnZ5MVM1d1JWM1dYb1VIdXlmUFFRWXFiNGJWVnlkOXRONWFsdUwvRVpXK0Nab0M0dXh5OXBkcmUybEI2ZUExMXFWaDVWV3JYUnIxdG9uaDNuNGNCaWJnSXhtRTZDS2g0bExLUXNqaGJDUUlRR3NGbExydE1FMGYzcTZEWVp6NHZVUUFWaHMwbkV0aW5SUUFEam9LSEJhaENQbWRLdjBLSEJvQ0l1T0tpSXFGUHpDd0NISW0yS0VLRTNQSGlQWDVmb0FyalpSZXJEY1FJUVBSdFM1c1ROM1cvNFg2aGk5U0gxaVRmdVl4ZDFmMmh4NXEvZEtteExDMGZQU1F1V1VRMVVZU0JldGkvSHN6ZXVkTitzb2NIU2lJUkZsVWgwZ1U3aXNPS3gxMlVsYWdKVzFlMlJkL1FZVjZTZ2E2aG0xRncvUzVneDBGUjBvb005MlhWUzBPcDk1MERoZTdiSG0zNndzWEdrcVE2bU9PdUFvVzErUFd0UE82b3NzZU9EUHl1NlFnUEZ2amhBMkpURzlJaDVOelRrTm5vS2lRTmFxM2lIYjNRQlBLVllEem5nOGxXRGMxYTlFMkxDMS9ZV2J6dllQUjFyUXhOYkd6aXg3bzRieU5sOGVFUnFrK2dLWWJzQ1pJdi9Id0V5ZGpsNFZ4anVtWlc5OVBydXVxLzAvZmhoeHNldVJsSkhjTU1RZEFCSmp6cllwMkJHb3JYcDBwanlKVWRxOHJDY0dtcUQ5cXhJSUJRS2JrSkt3d2g1aU9BSzZVU0NXM1poazBBUE1mUjR2SHg4VEZOMDhpS2VQYTRZV2l1VTNFZFd3Z1Jqa2FoR0FUWWxWaXF5dEowdSt4WVVaTlBZL2JwSzVnUEdOQmhBOGFtMWtJUitieGQzWkhCV0drMnZuY0NBTHZrcG1JaEVNMldIS0JBVVJhMTZIMlYxT3RiTXZkdG1yRlhBcnM4aUFsR3Z4UEJKMHJjMFFkZElHOVRXeFd0YTBBRlBGUWtFOFdIKzBPM3RJdUlqbjFla05JOGZ3R3NDYmdlYkpjRmliYXFvTUx6cEFVd0E0S1ExSG1neEU5MXdmR1Fqc3d3SWlkQmdLdEVjNVRMc3UrRGo0cGtxUG5PeTJCTHVXK1VMRU5zYkFNQTV6UkZmejJHb1dHWkJvSFN2UWV6bjN6U0djenE1OVJhNzFzU3Zxd2h2TFpPa0FrSFFjdWZDcnN2OWxmK2UxL3U4Y0h1UDlxU2VrTjcraDBycUtpcEVSczZRWUJMSHRXRW9uOVFWZmpUZHNPSXBmZHYwbHNuS013bXBlOHNpcFFoa0xJd1dwcmFxQW5sU0l4TmFCdERjaXJQZVU0UTRNejJ1aytIQzVvQWlhQVp3endSMUNrRlRZVjVUSEpsWmd0SmY2S2tJN001VzN6K0J3Rzg3S0lVUEtMMStwYW0rMjRjZnVERndqMEh3RWk5WjBYNjVxWGRIM3JNT1Z6UWxpZjVrUU5RTHBNMytLWmY5bDcvQS9sVVgrclZMZlhmdjZIcGlkOXYvUFdiR3g2NXFmRlhiMjc2K1MyTlQ3NnArcDRyckp0YlM0OGU3SHZkQTcwWGZLOXcxeTdFQ2F0TVdEcmNZK2Fycnk1b0pOWTN3WkZxejFqcWZTdFR2OWZSODVFdDlvNVJzU1FCZ0IybGhpcXNtRUxUMHNHWWtReWo0cWxIRHZDUkhGSUd0TG45cUhPQWdMS2kxaFRGd25BbFNpN1VBZ1dHU1Q2bFJ2THZ6eTlzSFlEamtlMGhZOUZsN1Q0SkxjS0cydEVIaDJjaisvVGZqc04rWXRkME5EMy94dkpvZnV6amo2SUpNSUx1YkRDQUVPRkZGd3JwaXh0RXlQaldaeDZGSU5SRWpnNUFUSWNBSEdXWDNIQWtQQzhYdEpJQXJ6ai9vbWdpNVJieUpBUTBQVHMwYUZrUmFCb3pzL0tNY0ZqVGRTVlZwVmdFZ1lqQUVKcE9ubExsMHV6bmZ3V25HUXdJdUJFNEpzSTduT1ovT0N4SmZQTWZ0MEFqVk04K01RaU9ja3B1TkdwQnpDcUFDZnBTSHZrVTJiMnB4aGV1UEhydkhpOHdYMmFSdmd6RU5ENHdndkV5cEVKdG5NNXZSbGxDQWRreWR4VmNqV01mV2dFSkRLa0ZyTjNCN1JHVTRweE5kUW1xajZIb25meWFyUmk2UUZMbkEyTzg1U0NVUWlJY3FKaCtnWk16UVVqQ2dHS3hKR0VmeW5mL3dXUG1PZW42T3paajNKSDd4a1RhRXBkMUlHS2Nucm9TQlVoQ3U0bmxXdmxIaDd2WGZIZndYVDhWNTFmVmJYbEQwNDZicW03ZkdObllJbkltaGhTS0NtTUtPUVdEak0wTjhadVhObjErVSsyZm5qditrOE05ZjdDRmlVU2ROVFVmVE0zZGw1Y28xV3k3WWtyNkhwTG9sNGlkV1ByNllFd1JkL3QvQzFMU2d3NUlZQkNROC9iMXFtQWtaeFhBbWpnTlZIdCtFNHdGNWZScWdCZTBaeURvU2twZ21weVFDcFpCZnJCbmxyZnNyL0lhOExLTFNuRHR5RTJ0dFo5L2RmOVh0enJQRGFNc1UyOWZWdjJ1RlQwZjIxTGFPaVN1YkxhL3Y2dnpuUCswSCs1dStKdUxHdjcxb3ZpdDU1aFgxcEdsb2FJd3J1QXFGRmc0WVd0elcvcHptNXYyL1g3OXM2ODNMOHlNL09talIxWjlQWGZIeTZnbW5HTkNFL0JtUHFvZzVGM1VSV2gxQTBaS2FsODI5ZTZWMWJldDZ2M0UxdEtqZldKWmlud25qK0tqM2FxS0VUTmhDTjdXeWR1SEVOTW5nekVuRDl0RFJFTkxHbzZFNDhHUkMydVFIQ0lVR0NNcWZIRzlkbDUxOGVlOUZBSjNsbEJqaW92YkF4czliL1B1Z1RuSVB2MUl3YWhDMXd3MVNtdXdtbjc5cHBHSFhpaDk4UURXYUFHRk9BTW1ZQUNIWUpuVml5NW9mSGxyejUxdi9TSGFVMGlHVDdqVUNvTHRlYllYaWN6TEJjMVM2b1laamtaZHV3d2hpRWptYzB0V3JscTE0VHlaenhQZ3VVNG9rYTZxYTNJZHU1alBzdU9RRUVwNldpcXRsM05POTZGWHFwQitheUFGR1lFZFFuamJjUDBWUDI1Wi9XRHo5OFpiTmplLytQQ1J1MjU5RU8wcEpFT3pUd3pYa2Ric0U4T0RzVndXN2haakQrcU52NzVLMU0wTTFuUktqTTdhb0JjVGhiODVsdytOUURKaUlYRmhLMXlHQXNvZVZlelNFNFBhcGhvOUZzSkJHWmkvQ3hzRnNNZHdKYlg2NXUvSlZ0ejYvUlVpR2ovWHo4OGVnYVVqWWdiTFVjVkRyZ3pKbExiOGJBOEtDYkU0VWZoUjU5RGZQNSsrZFZuTng5Yng3aEUxVUJRcmF1bXlEa1ROMmNnQTVnK1hrVFJ3cnU0OFA5Szc2YjcrdHo1b3JxbHEybk5yM1UrdUQxL2NnSU9NSnh6c2MxQjJvYVFmVUlNck1lYWlCSzVBZGVhaVZ6UzFmZU5hZGxUM0J4NWx4YUk2REZ1SkJzdmJQVDc0SDA5bHZueWxjZTRFZ1dpUHhCR0p1SmpERk9HSkZ6cVZNMFVnY01GRDBzUW8wT010SUlJZ0VMUS9PTEhBRmo1NzhLbm1kdEtFcDN2KzUvRnJwUG84NUNGcVFySXNaL3pXWXdvWkNHbVFjNFVaMUVUaDg0NnBscENKajY5SzNyeXU3NU5iNEVnTWxSTTNkOVQrNGZxeGIrMFp2M05IMzE4OEUxMVgwM0xQcThOcnE5WGhQSHVFWVdEY2hTM2hTdGdTbm9leWkvME9IbmV3ajBNYmFtdStmVlhMOER1ajcxa3grbGVQSFZuNWplSTkrN0ZjUTVzSjk1Z3ZPeTlwUlEydHFNTm9TZTBjamQrNHVQNHZ6eHYrNTVleWQrK2xqZ1FkRzd2eVo0TmloSFRFVE43ZXo5dU9RQmVJbWFja2c0bFFVZFNhUWlMTVJSdmVBajFGRElTQVF4SkE5R09yS2dkektIc1lMNkVFcEVOMDRTTFlIa3lORDQ5Z3FJeW9NWnNDeDBDVTBPVk43MFFKSUhSbGZlYnZYdDM3Unc5NGorZXh3b0R0RnpzQklZS0RjRSs4a2hVZitOem0zZ1BqLy9McTc2SWpoVXdFenZHV0hrM0E5anhIUldOUktKNjcreGdSTTN1T002bnJ5WEs1dHFtNXVyNU9sc3NnQW9NZHAzNVJoeFdObFhMamRybWs2N3BVQ3RGWWxLVjk1T0FydnVmZkJoZ2tVSW1DaXFyMjVsKzBYUGlkeG9wdDNiZTUrdkczdVZuOS9mOXdVZmUra1grOTdydFlVb1dhU05CRDh5aG9oSXJyT1RJU2o1em9VMklYZW90MGQrdURuNVdaejF3WXVqSXpZN2VmZURXNzlQVVJJajQwZ3BFaUlxYll2QWlhUU1sQlJPT0JQSVlMS2g2eGJtZ0RGdWk2bkFRUnlpNnFJdFNZUU1rN1NUSjVCdUltaU5XV3c3eXpEeUVkamtMZVJ0R0JweEFMMGFJYWNVMEhXbExJVlVUQ1JFZ2IrY0xMaFMwRGRYOXhYdXp5ZXZYc0FDY3R1cXlkTmpSQTRUVFl2cjdCdHRKRUhDUHYvazMzdFhmRHBLWm4zMUw3NEhYR3NnVDJTenpoWU1oRmhJTFErN0dQVXhzRG9QWm5oVTdOWDdzQ2h1ajcySk9JR3BRMkVkSUcvbXhiNUtxbHNROU9WQTZOS1J5U2lNMGF4ZmRCOEJzOHdOQ25kQjJDS25wYUxCVGN5ZndmUFV6b1VZSGI0d1FRNkJ0SDVKUUZjSmpRcDlBMXY5eXdhUmYzczE2MXFqQ1h2ZWtQREtWZ2F0RG4xOExQajF6YWpOMVQzczdNZjExRnNmRHczeitIK29qYU9SNjlaVW4xTzVmM2YrdXA1QnNXWi81NkU0Ykxxak1QeTZCTTdEaEdOZ0VoUW93dzZ1SnhCN3VsU0psVmQxelVPdnlleU8rMkQ3NzNKNzBYM092dHllSThBeUV0S0dEMWZ5VWxTaDZkMjBEbk5jT1I2cmtCNjRLNnhuKzl1UERMN3FIUFBrYzFZVkVkRHRZTFFYQWtDazdnQWdKRDA1QUs4NUZ4OVpzRHNGMGt6Wk4vS1FUWUVqRWRMV2tVSFpZTEo0dzFDUlhHTUZ1YmFtbDV3bmx1aEVvVlNFYmVwZm9JYldpRzY4RlZhczhRQk9Zd3J3VVFKdXp6SnNNRVBwS2ZYaC8vblZVOWwzd1hOcVBKRER3S0RBam9ScWcwYW9UQytPdm5idXM5UFBhM0YzNGRsb0dsYWJnenRUUUdCTEdqbEt0TTZ5UXJoRWpUM0VyWkxWZUNmamhFWHFVVVNsVTFMRjZhR3gyeUt5WG9Cak5EaUZReWFSODUvSW9BUHRNZ0JRNmpIRUxzcDkzTjFYYzFQbllrL1l2WHg3ZmVxTCsyeWJDTXdpRENGdjMxYzdjZE9UajYyYzFmUjlURWt1Tk5EQ0o0ekI0YjVna2FIVWhvYVFWZDY3dkZpMTZ6S3ZsWE0va21peE9KVjdNYnJMNjFOTzd3L21HWXV0allpcGlCdkFORGd3THZIVkxRWXAvWUdONVlneU16MitiTUgxS1JJTEVrQTBGelYrVWRGd1NFTk83UHE1L3NRdGNZYW1LVUNGTnRuRHBxYUgyVDJOZ21OcmJSNWdhWUJ1L29wM1RZSGJkSHZyNUhUNFRxUDduV0NKTWFjbWhUbTdpNG5hcWpHSGRQUTl6WFpWZ2FOaGlWUi9xN2xueTFjUC91dXZ0ZTEvajBUZWFHYWd3d25uSXhLQVBSaStPOU9nSWNSWWt3UlVNZ3FNRVNTbTd6Rnk2MmV3cWovNzZkTHE3UGZXdXZYYW5VZmYrYWljc0IrenlFTUVlL3FTa3dOSEZVbkY0VlhLMDZBaDJnQlJxWllvNlF2eWg5KzJYdXpxUDYxQ3BoQkNCNXZpV25NKzZQUUtEcWtISWxlSnF5d3hPak1FLzRwUy9qQ3AxVEZuUDlRNi9KUHRkWmVhUlhyS3ZHd2R6dzEzYlhYTDRxL2Y2VmZEaW5paDRVVXpLTWFBaU9kM3dseXc5VVJ3bGpFbHNkZEVxUk5xdS9ka1h6eTIrSGpxNUx2ejcrNTAralhhRE5oRE1wZ3dtZVF0R2o1ZFYwZVFjYUUrckZRVDJxTlgzcFlnRDluM3JLSGE2SXRqZ1VVSGFwbzVyYTAzQmtvSXBXWENoRzBrSzJyQjQ1d0VNK1U4Y3BkQm16V2JTa1lBWHM3UXY3TFFOaDRMQUh3THltc2ZUU0dBb1ZqSlZoR2NpNnREaEZLK3FoR0gxWjdzNGhwczloQkpzRUViUWZubzY2SDEwdjRuci9WUStpR2JBbVNmdUFCRUxKNUtGbit4RFJQdi9VZXhLTmlUKys4R3Y3bnUvSCtZMHd4UXl2STRNRVNFRE82U21aUDRoVXVkVFVzU0ljaWVWR2hnTDFRbkd5dGhiN2R5cGdYdHdtcitDa1FBb3lDa2VnNWxOYm0xL3puYXEzTGsvMnZpdDBSUnUyZWRnSEVFTHBkT2V6ZlJUVC8ybmJleUsxMFk5dC91cUJGL3B4WGlNTWNaUTcyZzl1SFYvM1pKREJXaXNHUDZoWXI2djcyVVV6OXJyVEVxL21ZZjZxQThNWUxkR0ZiYWlMSU91Q0NCR2RlM0lZTFlyejJpZ2xZSjlVOU5lSHB4QXpVUk9GZmJMbUx4RmNpZkVLcmFpbGE1ZUw4MXZwZ2pZNnY0VlcxVkZyS3VCOGRxQzJkcUhvd05SUmNPTVhacEsvMDhRMmMxdEdYTEdFV3BNb2V5ZzRKMktUV0FBY1JxT0pwV0xzWTF0N1huZTNkVzF6Mi9CdDBadVdRQUhiWGV4M0lTYWErczB5VnA2RVpTQVdndVBCRUdxd1RIR2o0ZFBuWlgvZVhmemlqdXo5QjJyKzVaS3B6czBIUExpWUYybkdjVUVBc3l5NG9pRUNZTUZTY3E0UkUvcW1GdlY4TjdMT2JMbW1jOElYOWZOVk1XYitVRUtyQzhGbE9KS202MVppcm1qNVVmQWpqa2NreG9QdjBOeWNTZHl5ZHZnZlhvQXVociswWFpXOG1qOWFpNzRTVnlRMGdwUklXbk8zNFFRUUlaaUVib2tYWE9UWldKMXFmTzdObWE5Zk4vYTVKM3ZXZkZjT2xMSGVoSnBJMHlDQ1lveTdGQStMelcxMGNic3FTdTdKWmY1d2RleXFwdEc3ZGhZZjdxR1lEcW5nU3Jxb1VWelVUcXZxcVNHSldBaFNvV2hERjhoWCtLSGR2SDBJRVQwZ2cxd29DTEE5Sk1QVW1EckpzbjJEVUdIazJYcGRhK2ltNVR4Y1VWMWpNQUJtNUR4YWxhSDJHcFFjSEJpR3k5Qm5uVHlUN1pLT1NjaHFmUG1XNHN2N3h6LzBMRlpwUVRzc0NZUVJqc2FLSlJ0OU9Rd1ZQL3FEbTE3ejBVMWZ2T1dCNzMzc0lUVEUwSkgyVzZRQkFKSG5LdVd4bVR5TlVwRTh1eUtpMGVabDUyU0hCc0VnSWxRcU5jMHRabmEwWFBiRUt3TDR6SUFVM0NnOG9PSDFQMnY0M0pia0EyK0tmZlZLZEFGUE9BaXpYOXNXaXNielJSdTlPWXlVL3VpSE43LzZEemIrMjgwL3VQZFBmb0dtK0l5Sm9aRmplMTVGaHFQSDY3c2xvUzlUdVMrSndqT1J4bWV2UExyTjF4NFBMc09hUjVPaWtJNlJDdllPMGtYdHRDaUpyQnZ3dXhGNDF3Q3RxRVVtakx5SEVRVnZ0a0RnM0RnNTI5ZUhZaWpRa2hwYW5xRlVCQkVEQUNvdWlpNEtMaW9lb29KM2o2QTNpMFJZRFJYMWlBaXRxZUhhS3RxOG1EclNjQ1d5dnFQdWxMMC9EbU81eVRyNnp2LysyTDg4V1gvdmpabnZYNGNRTUt6d2pJczhJMGJ6NnN3SVFBRHhVR0FtNllLUEZNT1gxQ2RmMDlyM2IxdU1EWm5FSDY0S0RodFhHSjZWUHVWWStQbG9hcHJtSnBrclNtK0t3TU5wcjM4UTVzMUx4ZW9HREpWUFA1M1lmRUJBQlVaOUVwcW14bTNTYUdxSE9qRmQ4SWtnQUFNNFBPV1Bxcm5yWXNTTi9yZi9xdkQwVVAwbnp3Vlk1Wndnd0U3a2M0N1BJM1hIZjk4RW0vR1M2NmNVeGQrNXNxM3p2UlRYT3RmZVZicXZFeHQwaEtabFpoRlFjbEQwcUNVaHJseUNwUTJxdHhLN3NLYjZuY3ZzM2VQT2thTElSSGpQRU8vS29qbE1IVFYwZm5QZ0M5clFUTXRxYVVVOVd0TzhiNGgzREFUTjZrOE9qcVQyS29xYUo4bFdZd0pkVWtzYTFxM3QzRmFEZlVQSWV3Z1o4QlRLaWpZMG9xMUtIUjdoM2h5c3VhSVlQSkdRMVRreklhc3QybkR2alVOZmZzaitYaC9XR0hEWVQvS0tKcE9GWEFGQ0lPL2l4WUZyM24vK3AzOXl5OTVuKy83cyt1OCsvZk1EV0psQnMxL1l4NjRqM1JJYnBRaEM2bFJiUFRMN3Bqd0pJZlA1eHNYTHJIaWlQRDRpZEYzWmxYQlRxMVhLRjNjOHArRVZQcXpURDEvNk10QjQwUTlyL250UDR2bDNoMSsvR0hzbHVod2tDUnlVMzBRVDhZbUo0ZURGZ1ZkOThJSlAvZWlXWGMvMC90bjEzM25tb1lOVEUwTXhLNGFmUWpNVDdFSmZKSjFuOWFFdmM5MFhMakpXSldmc1B1RE53WGcxSFJwNHRFUXI2bWhWQmxrdldFeWlCbmVPQTB6cm0xRHdncjV3SnlCQ21oZm1zMGJORGw4ZHo3c291M0FrcEFwT3lJeWtnZjRTdjl3RFpoUWRrWWxoVFJQV3R3U2lOK2Y0N1I5TzdmSVRaRHZyVEhtNDFOVjJsOXN6M3JyclBkRTNkUUJBcDRkZEU0YnZncDQwWWt5K1cxYU1naHUvckVGSE9QR3BkVlBIOUVqb0N4R2FHSjF5c3dBQUlBQkpSRUZVUEJFY2RKWHYraUpOOExqTnVtYTJwRkU2L2ZXSEF2MHVOYVpRRzRQOVA5SHRoWUFTakpZRUlybzNXSjZ5d2dud0pCUXY3SWw5cDNHQjBSOThQUlEzRW4rNVBuK29PM2xkaTdtMmludExRYW14My9uU21nZW4zU1I4TTg0aWRFbmZteXBhcmNibmIwNS8vSUtldDk0ejlpZmJzRXBEMnBnV0VpWXdJK3ZBVmJTOFNsemVvVklKdlRwUzlZWlczU0pWa29pYS9HSXZCaHdBeUxzQWtBaFRZNUtXMXREcWVuRlJ1N2g2R2RWRVVaRW4vL201RWlFZFlXTUJqemtKMzNWY1lvd3BEQ3V4cGg3eEVPOGVRSVFBZ3UxQlFteGVST2tJNytpRG1vZVd3RUNNMENXUFlzaUt2R2xSMVFjdTY3M2xmdTV4MFdyQ2tSQ0l4cXZ5K1FyQTBBbEVlTEcvcmluMkZ6OTd5elZ2WGZ2QUhVOTgvczMzYnQvU2hkWUVsbFZidFJGWXF2akRFTVkwaWk0a1FuUFUzU2xseE9OR1haMWhSVmhLS1QxTmFJM3RIZEx6d0pCS3dZcW1EVkhhdStPVk1QQnBCeWw0VVNpZzhZSUhxcDdzU2h4NnI3RStqVjBlaGlUaWs2SkxRU0FXcnlya3kwR2dqb0FYKyt0YjRwLzU2VnV1ZnN1YUgzeis4VHZlZk4vMkxVZlFsc1N5YWlzVFljWFNtNmw2K3FGZmFIMXZjK00zckk1OWVQR012WDBTdlFxeGVSdE1KWmZxNHJTNkFUbHZxcDVITVI4WnAxVU5BS0FVSEVibDFNemYwNFdqM0tHS0VUZDUzRmEvMmdNR3RWWFJ4bGJhdkloYWszQW1STytwVzcyWVlKZzZ6M0FmSCt0Y2Y2ZTV2cnExLzkzNmlqZ0FIUERRSlJFVE1JN2hIUFFUcGh5R2Uwd1lJWWdQR3FBSjc2QWdGRDBRckVVWmE4MUU1bk9SVVp3ZlkvTlIxeTFQZFlzaFMzTzdDb2hveHBJa0NxZTErN0ovNHdCUWNVL2JXSjhFS3BJYWRVb1libDhSNFltcVVJMWdlN0JQS3VCdkFzTlRYMTM4WGN2RDZkcFFXeHllbXNxU2xZckNCb1gwMmRyeUhBc0dOQ0JPR0ZONE1TaDhTbi8rb3VZZjNESjZ4Mk9EMS84Y2JZUzZhU0ZoSUVpZHlEcGdGaXRyc0tHRkY5VlMwa0syREtuZ1NmWGNFVDlMQXA2RTdhSG9vdWlpNUtMc2dnanBDUFM1K2duT0FqOG1yVTVoM2pCam5LRVVGR2hURy9ka01lNGlwRUVRU2c0MEV0Y3NROFhsUTZPdzVrSHFRa0NFc045RFljYlhWdjN2RjV1THF2c3UvUUV5OE12a2srbTZTc0ZGUlFaNUFLYUd2aUwyakZ6OWpuVzNQM0RMOG5NYmZ2QlBXejk3OC9mLyt6T1BkTzBlanJXU2ZVamlsMkc5UVo0a1N4K3pXVk16Y0tUN2w5KytlNmkzMjBnbUNYRHNTc2lLaFNNeDVmbGFGVmMzMUh1N1gySXNoUFR0RmN3SkJXbkJBeHBlKzdQME0xMkp3Ky9SRjBXdzE4T0ltc0grcUNRSWlWUnRLZS9BbWVoRjQwK012U1BYdkdQOTdUKzRlZG1HK2gvYzhjUm5iLzcrZzMvOW0wUGJoMEtXb1ljTUJMRU5BSURHV2h1R1Bxb1FhcWg5WUNibnhyakNBUm0wR3B3bmlFQ0VpZ3ZtUUdCWU9uZU5VeXBDVGZHQXB2R3NkWmFFZE02VzFiWXV0RmJSMWN2by9HYXFqNlBzSVgrYUhNNlQ4SUR6RE9kbncxMVhmeTEyMDhxR3JUY0c3MjZmaDE2SnhORVpUd0haaU45a0w2T2hXdUJZMjFBeVRBMm1tRjZYUlNEU3dPTjI4SGVKc2REc0Z3cHFMSU0vR1lqb1RsZE9WRWRSVDJmQ1JqMEx5aHFsUkJoNlM5cnBMa3d4WVdrYWwxMjJ2UVZIUUJrd0NHVU82S2tCaXVpaHVxankxRlMyczU5cmJ1b3dqOWNJd1QvR2J3eHdyQVhPRTVhY3pYalo4OG1vclRjc2FuMyszY1dmN2VuZjhBQXlRTk5NR1l3SlFaaDFBRkJIV2x6VVR1ZTFVTktDSUhTTzhUUGRpUGtGMmRNdXgvRGp4TWU1aDk4bWRFSmV3ZmFKNENOb1NxbzlBNGlJb0k5SzNrSFlvTXVXSUtUUHhrdzVDVWJRelcybmg1bUVqZzNQM0ZUcDZSdC8zemFzSUFqRTB4bTNESlNjcWVpeWIySHZHVUhldnVFVGwvemxQVys4OExxT0hZOGMvdGFmUCtJb1BYUGxNdnNCUStVRldSeTRLd0V5bUVKTW9Rbjc0MFFPTHFXTXFxcWV2ZnNldXUrZTR0andNMDg4NFRtT1poaEVKS1hIckVCRUFHeTdwclhkNk91eUdXUWU3enl2NENUQVlBT09RTzJIbjZqNnY5c1R1OTZwdDBWd3lNT0FtbWI3VGh3S3hOTzFYaGtvdVZPQjI4bUpVWEJ1K01RbGYvbmRHemRkMjc3OVY0ZnUvc3lqanExaVZmR3BERUVQeGpKVitKcklidzAzYnJ0OFJ2WitoYkY3UWJteWt6YzF6ZW1pRWNvdVBFbnRWU2pKcWRYbTdQU1pNS1BnaVRVTjR0STJpb2RRY0ZId05ZblRlcnN1c001d2Z6bmE5VHRmVDc1clErMTkxd1hiT3lYNkowaXBKZ2ZRdjdJdk9CczFyTktSb3VNd1NmbWNDa0xNMEcrWVlSSUJiRStJNUxsNmt4NEhSUEFZK1VyQWVNaUFJWnlEZVgxRmVtSDhaZlBHV1NDQUdWRFFWNmU5M3RMVXA2TDVWVHIyY1pzWXo0RkpaaTRmNHc0N2treHRoa09iRlF3Qi9YZ2tKQzRRSlN6VmtSWndHYVhqaVdFLzRVc3lYdmI4Q3hucjA2MkgzMVBaM2QrNzlsNVVBWTNtbEM5NjZzWUlua0xPZ1NlcExVV2JGOUhHVmxwWngzc0gxYlllV1ByWjhEYU9oZ0E4d0FNMElDZkY2Z2E0Q2tObG1Eb0FDRUxCb1VTWU1qSFk4N005ZlUrK0JIYTUweWUwcURZYkhyeHArT3NQMi8vVml4U3NhRXBXd0JYbmFCdENGN0FsZGcyaDZGNzlybk0vOVl0YjMzdjc1WlZ1R2ZwRWh6MXVsUjRrclZhUnlYcUwxSnNrV2V5emdHa3BwVGNydlVWcTFTclFyNmVmTWhSeWk4VW5mL0h6UmMzMXYvdTJkMmk2a1J2b0Y4Yk1WQ3NpVlNrbldoZUZTL25DcmwzYWdqaG5Yc0dKUVFUYlJQck9mZFZmZWlUKzBGdjBGUW4wU25STHhHZCtjb0ZhakVpcTJuT0Frbk4wNXBRL01YWU9vZXhlODU0Tm4vckZyZSsvNDJxbjdEaGxOL2l4QjYxQmVnZjFvYytybXIvZFpLeExUZjNXQTNaNHdDbmt5azQ5akVlWkdIUUI3L1NsNVo4aHVKSnFva0Z4VWRrRHpvQ2k0REJXR3Q3eithNVhmeVA1MWcwMVg3c3EyRDZnQXMvejlDc1M0QUpGUnJYQUJnTnRHdm9rZG52SXFlUFVIU2dtVFJ5ZHFFdkVITVQrQWFDeXdDd2lCa3dOQlp2ek5nd2RERElJWTdZNzZsZ1hOQ0Mvb0NlZkw4NkNKWjhJT1ZqcjY1VUQxVmVpa0YrT0NZQ1JMWis4L2ppcC9wUTlkaFVkSmNqNXhGbldmbk9uSEtOSnd4b0R0UUlPbzN4TVEwZS8rRmd5dGdjRUlGcGJwTFhuM1U3WGFOKzYrMUVMWk15ajJiSW1uMWN5OGc0cUh0WEZhV01MdldvNXloNTNaMkdjbGYxbUp4djN1aEtHRUcxVlBKQVA3SFVFbEVOQnM0cDV3bGRmQ3V3VFhrN0NlbDF6MVcwWDkvM2VEMkFqdHFiT3lhRlVkSTZqZ1JHZ0N6Z1NoOGJSVjBoVldUVHFvRjJQdm50SjdrNUY5U3dTeU4xckRIN1U2UCtBTmZCUmErQ2Rvdjl0TlBoK0h2OFNuTjFDYjFSNnN3UW1Xc293VXlUUzE5bnBsWEpMMXF3dEZzdnNPZkZrQ3Q3UjdpYnBTU1JTYVZLbEhjOEt2Q0tBVHdPSVlWdUk3TXJWdnYrSDhjKysxcnkyQWVPTVF4SlJNWU16Z1FBUEtBQUpSRG9TVGhibHNuT2N0S2JwRTZPL2tFcUhoUzQ4VC9xMWZHU3hTSW4rZDNqaGM1Y20vM3o1akIvdTl1RE1MKzE1ZG5nS1lRT21EbHZPWmtlcWlXb1dJZ2dSL0tPSlJMUGYycndpQ3NKZVo4aEdkeG1MVEI1eHV5KzhPM2J0c3N5M0p3cHpDNHdESGlJem14SDVUUXNVWTRXT1pUcHN4ak1PQmhRc09yNVc1R2ZZOE16Z21tSm9nc3dKb2VZdS9Ma000dkV5S3E1UENVeEpzL3pDSU1mTjBLWU1SdFdaa0pabmd3QUd4cVd4TG9GVXFQTGlNQ1hNd0NyVk5JeVg0UzQ4Qjg4L2ZJS1pNakNoNWordE5ZQ0FYb250THZJS0hUcFdHNGdMRkk2SktQZ3l1TUxZR3l6V0ltTzJIbmxuWmQvQTRHVS93U0lncnA4dys4bWZRQVVYZVplcW8ySlRHL2tWeVdjekJLSG9vaVpLOFRER3kxUHhncE9BTDRNSFZFQlFNSUdxcjF5cTE4UXJyMzB1dnJKZUdsVE0yOUJQN1BvUkJNVjIyV1BGWEZEYUo2dVlrN2wvQ3ZXL1U4LytuMnBCUytQbnIwaGVzVEx4OWt1dEt5K2lsbldsbHhjUGZzRHF1MG1WSHRXTkpVcWtGYnZrSnozbnhzWU1RN09pQ1RPUkxKZEtwVW9acG5tVWQ0UUJNR3JxNisyZEw3d1NCajROVVBBaUVFRGR1ZmZHcmpySCt0UTZ1TUJ1RitaTVB6QUJqbTlMNmJBUUVYSHBvbEN3Wit2RUlBaEFkclFNUmVHd0NhbFlRbCtpeGo0SGR5eFY5NHVaVmIvN0o5S2VUMTN5MFFUZDdIRlhMRC95SlFRYURYU1lhRFBRb0tOR1ExcER0WVlHSGUwRzJnMmtEUEFwcXdKbkFuNkc4RHhYWThtb01wQkF6NmJ2NlUzeHVvZGVGMnhYd0Y0UEdtYVVHd21neERBSWF3eFVDd3dwUE85QzBXd0Z3UVNXYWdZeEp4RzdETWxUQXRqRHd0enB2czQzWEFnYTN6RVFNMHBQRHBqbjFxRUdaeWhKK2V3d3VUeUp1R2FjVzF2ZTFoMjVvVDJRbDZiRytRcGxiYVNzQlZleTBqUVhkRmlqNDNKdG51aUUvcEZSZ2dmc2tSaGxyTkN4U2tlWFJMZUVPYk5Telk4SGp5aDBTYlJxQUVSdHFPWEEyenM3N3RUZmtxajZ6cVY0VWN5V0ErVnY5L3VMemF2NzN1bkcvSWRsY3E4amtZN0FsYWVoYVVTTTBDa1JJdFJPeWZMNloyL010LzFNZkZiVDI1TzVmTGwyTnE4QVE2TlMwWUdHa0swaGdmQTFkUU5mM0ZmMXFuUHEvNlpGVkprWUxxRWxqWXVxVVFFSUNNTitZVGg3KzhIQlQreUwzRnZLM0VGR20rZDE2V0RPalkrRlRGTXBhZFRWSmFyU0wyemJlc1diZmcrRlFxQ2dNcUJBVExEdFRHdTdzWDJYQTRnUXVISktBL0MvSFFZOG9PNzNIazdZVHV3WHJ3VW1vaEtoYWVMSE40d1lXR2NnVE9oR1RFdkJwRUsra3RIOU5mSzQ4NVVoeUxZOWdFS21DVWNacmRKNXloaTloK3UvYzVHb0RrMGQ2S2M5Sjg2OHdDT0N6WWpyTEZUNXB3ZmQ3Vm5WWGZMeUpVZ21Fcjd0cnFVdHZTTVczdGhzYkU3REJZNTR3QUtwamM0US9JQnJYRWRab2VRZ05DdnhEdnhrVllFT0d2bmRoOTJCMFVVajc1L2FkZEJEbVdma21RdWd6REFKYXd3WXdLRENYZytXM3lIdHhPY1hBcTZDcXdJOWpBRUJkaVFFS0tJRGdNVENhcThaQ0duSU94Z3QrVDFteU5KVlQ5SHBLZGY4MVZLTUxGQ1d6eHRudytzRlFCaEQ3RFdMN2Y2SzZpMlNYMVNxRVJ6Sm84VUZFdyt4ejh3MThXZFlZdzNzK2s2aGFYcTFYMmM4eXp2V2dRUmhST0VGRng3UXFtR0ZEby9oekJTb2s5VTFFd1FnK3VKWXl4TnZHLzN1NC9tLzI0VjErbkZTK0k1NWV2RENPVlpPR3Y2MWlHQVpxREZRUC9Fdll5QnVRSjlJUkQvaHp4a0FqUG14aE01K0d3S3dDUHM5NUtiV1A3MDFsdnpHWmM1M2Q4dGVyNlRteXNJamtwNENRVE4xQUVySm1xc1hWWDlxaFFEVXZwektTcTVLNEFEamtJczlIbmFxME1hYTJoOXViTnp5S3FlLzZjaTFrRDI2c2RpRHk1cW1hWnJtdWk3eWhmTTNYejQ0ZXFTTXcwYUhxV1dVWHFQME9xVzNLTDFSQWFWa1M3dFZLQlQyN25zbERId3FJSVp0SXY3enZxci9laXIybXh0SkFFY2tzb3dvUVU0RTZjV0VIK3RjQXhIQzB3N0tpTmZXZ0VQNWZEbVlxQ2NDUXdnQ29EeUZtSUlwQm01ejQ5ZXZpdjUreTlReEJaNmlDRDVUendrd1lJTkxVaVdVVEZTeTMzd3hmKzh1MlY4V3JWSHI2cGJvNjVkRWIxNGVmZVBTOE5WTldwUGw3c21OZmY3Sm9iYy9WUHEvQjdGYVIwSS9UaXJKYnhrTVJFekVkRDQ0cXA3dURDb0RaNGNMck5GTFh6Z3crdURXcGtkdm9hcUpsTVVSUnIrYzRXeWdpVFo2cTNRWXdMakN2cm1rcnc4TnNGMUluckxJTmFHS0xndWlkQWdBN0lVek00WUVEeGU0NUVJWGtFeDFrZnhQRG91T3BIRkpDb09uMElScVZwd2RGckFBaHFSNVNaVm9qaGQvZVNSKzZ3cnV6RU1RZElHaEFoYlhRRnRnS1k0Z2VCdzB6clEwTWdWUEZyUk1YdEZWOE5oM1l4Ny9KUDdtT0tISWVNbkZXZ05WQXVjWTJPR0NHTWEwYVNTQUVMRGZ3M3JUSDFGemM2YnUzMjRZK09pUHdwdnJqWTFwN0hKZ25nV3BrSDZFS1dPZ0NzaERkcGJsaTNtWnF3QU1nb2lHOVBxWTFteWh4VUFPNkhmaGZ6akhEcytwdDgvQ3hKbjkrcjlkSHRZYkNBVkRKTjVSVy9YakMrVDNDN1pyQTdNYTVReGhDSGhRdGdTZ1Yxdkp5MnY0VUlGTEhseVBsbVFvYmlEcmdnQ1Q0VWxzY2JITURGMmNhZWwremNCVmozWGR0THZsZnQxWUxTTmJJbU9DM0xLRFNqNnhLWDFoNlpyaGJ6bXh3MXc1QWpCcFVhWFZjK2dDTGJ4UjZlZW5VcjhvOTcvd1ZQV3lwYWRuRVA0WGd1RlowSUhxNng2TTNickp1S3dPSlVhWFJJemdUVlR6dXd5SElZRnpEWmlFWjEwb1FFYzBXbU9ZMGZKNGNTNWZLSk1nRUpSa2RQRFliU3p0VE9iN0YwenRuL1NGNnNkVW9KNFcrS0szekFCUXJ5RkZCR0MzRjd0aVNlckQ1eUUyMFpCQUFoNGdBQjNRQVEwODZCUit1ai8zSHk4VmYzZ3c4Myt1UWNSRTkvL1E2dUh6QWNkMUhxM3dpNzA0UEVhWHRpTmxvVFJyZXJISGFESFZmcnYvb3orcStkalY1cVcxRTl1Qmd5NUNNenNpS01BQlZ1c0lFVnhncndjRHg2a0pQZ3IrWUJTY2FRc1J3eEF5NzFKSVEwMElBQnpBVzRoODgyMjIvcnl2OFZOWVE4NHVQdDZYdnVNcU9JQlNKOCtHTkN2T0RnRU13SlBRdGRnYmwrWC8rZW40TGN0SUY4d01VK2V4RW8yWGtiWlFXb2dYV2dBdVlETXNnazRVTjFYUnQwTW5nZ3FhZ08zQjhhQWZyeEpwT2lZemhuYTZXR3NnUVZpaEIxU3hreEtkSjFyNEhmU3dMQmpTK0VmT3FUemUwM3ZOdlczRHQ2SFd3SWg3aGw3aGZPRXlhazNVd2ZuVmNQR0hCN3pCSE1vQUFHS0FvQ1Jjc0FJMGlLUVd1WEdwZFhremRVc1lBZ1ptY3hXY0l2d09TRVhHSGc5cnAzd2R0ZCs4SXZLcnhzS2hNWWhaVTBRSTdEUHRsUVVBMkt3S2psWmxCdms0dGJFcDk0UHYwb2dJN0hVaE5UUm9kYisrZE9CYTlOeTBhOUd6V25SUmlIWnJNbHBHSzQ5L3NSSytmNjJYTit5bE1YTjlpb1NtNExuRCtkSlh4dmlPNGVyZm9VeTYrVUIrcTRPM2tBWStDMk4xWno4ME9JUzY5enllZ0xMdXZnSUE5bm9CWTFHRjBhR2p4QmhRY0lIVkJzS0U3UjVzUnBUZ0ltVEZqV2lpUEY2YUkzVklvMHJGWlZlTGR1aDRSb3cvSU9xL3Q0bW1sNm9mbGtmN1FrOFhwb3ZlaklZbUFRSHFWK2hYRkFxTHhScUdKQVlVd0VGOXN2OFVIUHduMDRpLy9aejQyODhaZWQvRGZWZi9zUDZYTjFDcmllN2paU09lVVNoR1NJT2w4ZDVSM3Q2SHNSSmR0b1NXcFRFNjF6cHNhS2pENEt0L2F0WlZwKy9ZT0xYOXNJU0xHUU5PUUpIUnFDRXBBT0NBQncvemZTTU01Q3N6bERDTjFMaExTU01ZS0dlaHJma01qSlhaOXo5N2loWW5zMTk4Z2RwUzFwdWFzTmM3YzB2M1dTT0FCYUZMeGQ2eUpQdmw1MG8vNzR5OFpoRWZLVUFYY0JVUDVLbldtdnNNTTg0RzJBd2JzQUJBU3hncTU4eHc0bXVDS3k1c2o4SVczTG15MWYxT0R6bkdBUThkT3RJQ3JSbzY1VXlXQUNCQ0dKU29FcWdKSkhQbWU5ZDIvZmRYaDI5NnFPYmhWMkhzek5TUnpRY01lTUJLVSs0cmpINW9xeG92bTJ0cll6Y3RNOXN6V2tNWTRRa2ZiMG1xWWNmdHp0bDcrcjJkV1hsZWxWZ1dwZ0ZGSlExU0JYM0J6c1FUK0NwT2puRllZbEVRdEtHWUhscmNrTy9LempIMU5TcVZiSmhHUkNYZ0FXV1BwU1NOMkZPSW1CUXg0VXg3dVF4b1FJUndRRUluWkVUZEx5NDkwcFRQLzM3ZS9IeFVWdVZscURKNld6ajNXS3pxcmMySmE2cngyc1dJQW1YQUFEU29yRjM4YVUvaHkxM1djNWVzL1hsZjhZcTgzUkUzQUswSVBrc2lPZjlmUU1HMUVOdWJUMzF0YS9UK213aEF2MEtCRVNma0dTdDBFREFnNFFGdEdsS0VJeEpqQ2ttQ0Fqd2dRbm80WGh3clFvalpKTEFnMTVWa0lwUTI4dTkySWhjdmo3eTVlV3J2R0tOMzV2ZDd1dUQ3VkQyZ1dxQlpDNEthZlJJdVlCR0VRbEVGaDJHbTY1c3dVUzdsWVRjamFsVGZjK1hJRGI4YWZQV0RkYis4QVRVbThuSmh0UWFuQXNXSUdOQ0luK3JtempGNGtqYTAwTEkweG8vWHQyWTZYTVk2cmZUbFE4V1g5N2Z0Zk8vVTluR0Zmbm0wY0hVWllVS2JCZ0REakdHSnVKaVg5RFUxRkIyTVY2YjFMeUFBY3JpaVQwcUs0Z0pmclFIdXlmclVnYUk2SkR1ejR6L3VyTHYvQnRpQVBGUG1MODZhR0xDdkRVbGtLUDdPMVdQMzdBTkFwZ1ptaERRTTVGQ1NDODY1Vlppc0F0S3FRbkxjQ2E3aVEwelVHYzh6U3UvTDRENkpFUVVBelJxU0lxaE5tdjRJSWNJaGIzclF0MkhiamRsSFhpemYxWVcxK3RIc0hMOGQrTkozblZIK2VYZi9HMzVrckVqVjN2T2E5RDl2c3E1cDArb2lLQU1qRXFNU294SXVpWXdWMmx5WCtNaTZ4QWZXNlRsTGxEUnFON0JhUTdXR01nZEsvWm1ZaXI0TTdwSElUbjEvaGg3TjV5cEhWeG9jKzN3TWFFUWVZQU9Xcmp3RklraEpJUjJtZm5RRGMxOEcrKzBSQ3d5Zzhma3I4M3ZDMm4ycCttc3k2aStXMmR1U3pYZXRTYnl4RGxWUlpJRTlIbzY0Mk85aXB4VDVVUHhkaSt1ZXZhTG1WemQxWkM1dlhmS05xcjk1eWdPY0tPaC9PazczL3hOQ1lDQjE0MFB4MVl2TUc5c2dnU01TRmlIUGdYYTczd3MrdHhZTmVRNDBYZjgxU2lBS0k1TElqWldCdVdJVFJGcWp6SCtGdmNQSkdjNW5DUnp3RURyZE05bW5IOGd6TElIVkJoWnBHRk1CZGJ4R0FjSFdQT2VKUWFpNE9JRHF6MXlvK25MWjl6K0MwUUxyQXRGVDYxazNUeWhHMUFTWUh6dkVSOGFoRXhxVHRMWWVCVG5IMVJsSUd4ampvWS84SXZYdUMvV1Z5YW50aHlTTzRxNGh3QVlhUk5DVXRzdWJqRUROQVFaTXdTTkZMdHBUdGVBRUVMekJrdFlZQ2JhVWVMNVNNeWovOWJnL2g1QkdPaUZqRFgzbTZjajFIZUUzMXVIUUdUUi9jUllKWUFBYWNFQWwvbUNWc3N6Y3QzZFRXd3llZ21sd3RzeURoYm5wL28vRmhCSWtHaUp5YkNieGtqK2tvd3VwTS9ibDY4RUorZHF1VFRJdUJlQ2duL3owZmdQR3VuVDZ3NWNNM1BZamREcG9OYUZPbnF6NFpPRHoycXczS2ovdUdYN2ZMNnUvY25ucTgrZFRWdUJsQjMwdWlpNDhDYVdDZjY1RTBjV3dpd011eGx4WVFMZkVUb2t4aGNVYTFobElDeFE1U0pvNDdmQWJhZXlmNHBLTXBtTDViTkZuMGpqeEEwTFRDS3lrY2hFQ1JVMHVlVUZjM3hEUTZUamhhZ1pNUUFmMmVKRFFhcTM0bDFmemYwVmJ2bk9qTmJ5azdpc2RlcDJsOW1ZNUdvYWE0RGtpd0ZBb3VIamN4c3NxZEZVbStzelYxVis5dXVrejI1bzcvdFBZblM5SFRxb1YyUDgra0lLakkvN1RudVQycnNqM3J3V0FYZ1dYNFRKcUJSb0Vkbm5CTUM3UkFXQy9CM1BhS3FVQUE1RjRMRDllaEp5RHMwbVk0S0xJMytjbGI5K2cxVTF6b1IyV3NIbGVyUWJuKzFRQWdDS0RHY3Qxck5CUVZIakpRNWVFSUVSbkZyek9FeHJCQVViTDZYZWRVOWcyeUwvcHhMT2Q3Q2xFenJBTTlxV3ZVdW8zQjNta2lMQU9UUlBybXlFWjlseWs5QjZ3aE1iLzRobUdyTDdyNHFudDNUTGdaSjRPRndnVDZqVUE2SmNvemZ1TitIck1RQ0VncTVyYzZDaVZkYlNsaWVEa0ZiVUE5NjRsdUMrTG9nMWRvL1pFOXM3dGxiNXl6WmN1eFJFKzAwR21zMGtBRTFEd0VFWDEzMXc4ZXY5dTJaVVh0UkZJQlUyZ054c2t6YzRmZm0wWkFFQnZqM0hSSnhhZWVHTysxak5hUk1tYnIyM05nRWx3RUpTdVJnbDEydEZHc0cvSjlVdGtwNlpTMVJjMmk2ZzFldU5Qb1NTUzVpbTErRjBRR0lpYVNPdnlWd1BEdi9mVHpLYzNoVi9kaUtjY09CNzBFM2NhcDRrTzBveGc3VGdrOFlLTExHT3hoalU2b2dMNWhaT3N6dWR1dzRRSzQxQWdnV00xVllWY2FlS2VUZ0JCbmljQlRkY002QkN4a0N4NjBDZEcrRVRqN0xOeGxUbG9iUFhCRG0xRFMrRkJxdjVVbTZpMzFLRThZaVlsd2pNU1VQM3BGeE93UFR6bTRBQ0gzNzBxT2ZTK1RGVzRkZVYvSkw1MzBEYkJJZEJSWCt2cytlVC8rNkRDSUNEeHRrZWlyMTJ0TFV0QUFvTVNHcUFCeTNRTVNJd3JFRkFsRUNYMHEyUEk5QmxBTEpFcUZFcXpYWVlCUVdYbE9nZWMrSkpXOFdkMVU3dXk2dWhFM0ZPRVg2WmNZdFFLckRWZ0FOczlISlRRY0pLaU56Z3RRU28ra2crZlc2T2x3NFVkV2ZJODNuSVlBRUlMTjBYbUNkL3pERlpiRGlKYlJpeEVZSEg5RXF3emtDRXNNZEZpd0RJZ1p6NFVBOHpRTlN3MmVLODcvaC9icXYvcDBxbVZ0c0xva1lqTUhIQUNIRVptd3Z3ZFVKaFdHalliR0FqcnlObzhVa1RZbUR5bk1JUWFxVUFpdERJRkFEbUdQVzk1b1FzNHpOMVprQkF0TVh2YjRQRDlMOVY5NDFwcU10Qi94aE4zemlZQkRNQWc3SldSOTdSYUZ5L3UvOU1ua0RUSTBoRFNlYmlBa2ZMMEVaOGJPZ1hCR01CWWxvQlNhcVFpakduUGEyaWNyL0R3UkFlSStZQUJpekFnNFJlQU5takJCSm9PQW5UZ3NEZjluSm43WGozK3dpSDM2enVRTFNPdS81WmtjTkxBY0FuYmUwZi81SEZyZlczNDBpYnNRcENGT0U4RVVvY0E0S0NIbHp5VUdFczFyTlJCRTJ6YnAzRitCdXdjZ2ZvU3o5U1ZjdlpzY1M4R05Db1ZiY0NJaEpOUUVIVmhWWENoVTBCbDZwNjR4Y2hrekw0TUFQRlByclFXUmNQblZIRjNDV0NLbUFnYjhPVFUwMDFLZElPUUlBeTRlTnJWYWtMeHAyOUtmdXFpNWx1K1YvM24yMndOTWpJbGc1bWhSV0JHUU9GWGNyVUFnQmlPaHZoM0RpV0hSNnh2WFFZQVF3bzJRd0p0T2dCMHlhQnJmYXNHQU4wUzRhUFdlZ21CZUxLdW1LL0FtNVdaaUVqYUVxeml0NitkOW5QZ29BeVNDay9QSXdGRmhnNnNOZENxNGFERWRnOFNpSjJDNlBYdjA5QlFkcmhnSTZTSGx5WEwyMGRSWldHMHdEdjZFVDR6RkRETUNPblFTVDErR0tNbDBaWVNOU0ZxcjY3c0hzdmZ2alAvK2UzNUwrNnEvTElIVUZodElHWEE1VUQwaGpRa1RkZ2Vob3ZqSDNoWUpPTHhQMTQ5ZGRwT0NYVU1hNDBFZEtCV0E0QlJGZFFCejJlNEdEQ0orM093cDNtR0diQjB1N3ZJQXZxcU5BQ01TOHlhSVRBRkJWZ2E5K2N4VkJSTk1aVjErLzc4MGFwYkw3RGUwWXFkM204aCtmeXNTY0thaEpUbzB6TGZ2S3B6NlRkSC8rWEZxbytmeS90ektMbmNNMDRaYXdGZmpnWlVHQVZHaW95bFNRWTVBK1Z3VFJpVjZTVHBoTUU4V3BNTE82MENlaVE2TkZoQXRjQ3dtcUhmK1paY250RXIwUlRNTyt2NnB2QUZIU05mMlZXL0pNNDFLVnFTeHZqeFV2bjlDUzBJWW9LS1Q2bkFCN3VnbWFDQXBNRkhjclNqeHh0ejNaeXNmZnR5ZE9hd0loWXdjQzBJZnR3MFJwREFBWWxlaFRZTnF3MzBLZlJLYUtmTW9Ic1VUT0NBaHcxR29xbldMUUlsRnpyTjB1TklDQUpZUWNHRzNwSjBudTZEcTZBSnJuamtlQWpwVUNmNHNRYVVnWEVGU3hoTk1XdGxGU3FTRlNBVndqcE1nZkxFRHduUWdCSkRJRmdwb2dRYmVOekJlalA2MlF1MXRiWGlsdnUwb2NyQW5aZWJFWWdTV0NBVVFlSHdvZHdUajJWdWZwc2VoVmNFbldYcTdobkVVZk9CQUVDRklZREVCN2RFYmxrVHNHRU1Td2pBQkdvRmhoVmNRR2NrQkN4Q3Y0TE5pTTlNMjJFR2tLaXFkWXFNc2dOTlFKN2c1UktvS1BWVTFMeTJkbXBqbDBTUmorbnhjRkx3STc2KzRidE14N2pDVGdrNWNmSlRQNzlCbkszQTlpRFpYQnd2YngvbGNRZFZFVDR5VHExVmlKbW5tWmpKTHd5eGhIcmlpQ2lWc2E3T2VXazBkLysreXNFY0UwZ0RLUUZYcW9wRTJvamUwSkgrNC9QcEhCTUhKS0lhQ2k3dkhxVHhnaXA0dVYvdnIvcjNxNlpPTzY0d3JJTDR0dzJBQXdYTFlhUUZ3Z0NBRWJVQVpjVVFxQ2owNWFhbFh3RmdoRFMzTXkrcXcyZ01BOEQ0ekRMUldhQVJHTnc1U3BZR1Erdi8weTNSY3h2U1g3d1krL2pNbFI1Tng5a25nRFZDanl2V213M2Z2Szc3SGZkWmF6TFdWUTFxajR1K0hEcHFFTkttSk9pY1VFQk9JYVdoTlNZU3B0dFRDSjlYTTdXWGdiRE9Rd1hLMnJETWdCTjFUdmp5ZFZTaVJZTUoxR2tZVmtlL2FVWVFRTTFvazZrSE5YZGUxTFBoWG1kWDFteHpXUWhxVDJMY25XRmdTVWJTUkdhQ2xOeTNQZzBORWhobVJMWUpBQUFnQUVsRVFWUUdjbTdnSEo3UEhjWU1qSlI1V3hjdGloY2VPYXpYaHZXT0JQZVZhZkdzQW1uTzAvcldzQXZzOHBBV2FOTlFJM0JJSXF1T1puWTlGWmlFQWtNaFdsZnR1VURKbVkxMEVCQ0NtSlZpaVR4Q1M2c3FnbmkwUXFiT0pZZUxEc1ZNT0NlWU1MNWlZVE1BTlZCaWQxcWx1TjlxWXZKeFBLQkdvSWt3b0RDcUVDYm9RQWdRaE9jZHJEWEROeThXdGUvQVZkK0FwZzMrK3lXR2diQ0p3c0Y5STdlOU1kUTMwTDN0VjYzLzlpMHRCT1djbVJTMnN3UU1hRkNoQ1k3dGlXaWRyNzFvUlRnQzhmczdFN2xzK0l0dkJvQWNCdzFXWXdJQWhpVTBRQ0tnUlJ1UU1JK2RVUXhHTkZYajJVRFpQYm9md3d5UThpUnBHamtUSTE0OG5pLzA1T0JMM3pKamlZNTZnVU1TM1JLUkU3QVduOXo1ZVlJVDBaRjYwaVNkVk5iUkVxYksyVHhTb0ZRMTdMbFBzekRFZE40eEpKU2prdEdSdjNxcXNLMG5kRUZkNG5QblJxNXEwOHNSV0FJOVdlL3h6dEt1OGV6ZDIzUC91YVB1emxkWnQ3VGdsMk5xZHorWFhPMmNxc0tQOTFNOEhyOXRHczkycDRRR0NLREl5QWhFTlBSNE1Ba0txQmJBUlBjRlk5N1pVcGJHUjdLY0xTTVdtamJVQkkzY0F6bHpaUm9BeGhnVm5sZUt1d0lTT3ZjWE1GaWdSWW5DejdxTUtqUHo3ZGVnQUdUZDMwN2QxOWtuZ0FFWXdFNHZmR3RyNW9sTCt1NTR2TFhqT3IwbHJ2YU9vbnVNenFsRjJac3ZLNWhCR0ZkbzFhREQ2RWc2Qi9OSC8xQVh5RmE0UDBjck1ndVkwTDdsTkt6UUtKQWd4QVZLak5BMEx5VUJCc0ZtZEVvc0RZU0hlVzYxZFhuYjZEZjMxWDloTXovYmhVZ0haU0xJT2hBRWx4SFhzVWlnVXhidVBsaDVmTURiUDZyS2pyQk1vemtadnJvaGVtMEgxaGpvQTRhY0dha0h4NFZQQUxSckFCcGc2UGIrYkhoRkNpQXVPNWhkSU0wSERPaEFuRkJRZU1rM2hYWDBTaHlXMEdscUVFNEZESVNCTVZpVWNCWCtIM2Z2SGFmSFZaMlBQK2RPZi92N2JsL3RhdFZscTFpVzVXN2hodWsyT01RR2JFd05FQ0FrRUVnb0lZRnZTRWdNSVNHQkJFZ2dZRUljc0ttbUJOTnRZOXd0V1paa1dYMTczMzE3bVhiUDc0K1pkM3VUTEl6ek94Ly9zUjdOZStmT3pKMTcybk9lWTFkY28wRUhMMlFlRVFCeWE2Nmk2cnB1b1FTeDFrRE1zSS9semZOYnVGQkRyb0wyMkRLWGN4bkFkQWNWTEJSWEY4Q29oQ1JzVUZHUU9PYkJBNnc2S2VsQkIrZHArbFV0aVorL0VkZmM1clZFSnorNlV3TkcvK2JQVjhmTjloZS9kdjhkZHd6ZTl1OWRiL3pEVXlWVS9iOGl4R0FEcmdJRzlKSTBIaGxWVCtSbzFJWUhUbW5ldHJSOWRWc3RDZ0NKUC9sTjVQcXpSRUNWTU9JRGRlZ2lCN0ZjZ3VRUTYxZGhXQXZ0b1l4SUp1bFc0VlFjUFJVSlA3ZTVFd0lJZHFtbTZJWVppWWNIVDNnUVp3SXJSNEFIMUJqYlZDUUY5cnZJTStKbnJraVBBVXRGM3ViUklrd1ZQcE1xU0NINEhHQzdVWGJPY0FKTE1tSTZSaXRrVjJ0UDU0Yi8vakZsWTZMMUJ5K3hydTBDZ0dPQVlPaEEwbEpiSW9sdGpZbnIxMDk4NmNEQUxYYzEzMzllNHBvT1VvaWFvbkM1OEwyVDhmZHRtMDRZalVnVUdRa0tJVzhiVkl4S3VJQUFURUphQUVDUlE3YUdsWWdBR0R5UW0rWnFCZ0NRU2lnNDNuZzE5dW9OQURBNEQzRzl4SUFBdWlkQkpBdXUyV0hHWG40SmtnWkd2V2V0NnZvNXFZQUo4Q1dPYy9MV2k3emprOE4vK1VqYlAxNHFNaVo2YytocWdLSENYWmtQcHdGbFJnbUlRVHM3V2Y3MkJOeDU0UTVEeFZBQmF4dWhDdmdyenRTcFFNNUh1d0NBRENFdnB6RitYcjE5a0VVWTg5RWlrQWovS2ZNUEZ3NWUrQzMzYUZGcmpzZ0h1dW41R3hIVE1lbGd2UTROK1k4L2tmdmNQcXI0UmtkYzI1eWhXSnBydmx2SlZ6NTZZdktEdjQ2K2FsUDZ6eTZrY3d3Y2xhZ3V1VDVNbGNmS21DaFR3a1RCNGFxbnJZckFZMGpHWkhsNWhiUVNDY0lBRWpqcEl5dHh0b2Ewd0ZNZUtvem9tV0EySUlJUHk0KzVEc3JsbXRFU1gveE1PQlZIVVEzZGlBYkVOK3JaamZaOVBlWlZxeUFJRXhVNFFUZU9SWGFzWURNRjVnTHg1a2RRTldCSUl1dGloNGFkR3ZaN3FIRG85SGlNcHozczBQVG50OGErZkVQem0rK2s2N1lkYlhnZ2R1eXArSlhQS3hXcmw3LzFYZi83bmE4V1gvRWFNNVgwcS85L2M0S0o0VVRBUU96dXZ1Z25uclQyajVzMlZDYUthSW9BUzNZS1RxVk5HNy8xVXU1SXhJWUt4cWV1QTRBYU1DbGhFRHpBWVF6NDRiS0pDQ2pBZUwwTjl0ellFa0hDU3NYZEdzcGxSMjljYWpFSGhtbzR3SkFNMWVRelYxMFNzRGxFSXo3bXd1V1FTdm9NS2tXRCtLa3NhajZTS2hUeUhWKzZURnE5WC9pWjRxRUxoQUZkQlRFbThybXZQVDMrL2FmUzc3cWc0Yk9YQVVBTjJPTkFCUXhDWG9CSmVvUmplVW9iRFgrK3kxaWZHdnJYaCtBaThmdnJVSFJyajR4NTdDZmV2U1VjVmdMOWZtaVJPOEM1S2lSdzNJTkZzQmtOU3BnVnJzd0xIeTRtRW9ockdLdGdwSVRJRERBUWcySmE3VkFXRGh0WHRzRUZDbkpGY1k0Z1VqaGE0WkVpNGpyeXR0SWV4NllXNUNXV0tiMDRrL0tjVk1BQUZFTGVnNkUxL1BQVnVmZiswdDQ3SHJtNFJmYmswWitqc3hxUVc3RVRER0RFUjB5eHptc3EzWDdVR3lpcmFVTlc2K2tUQmd5VnMxV01GS2t6Z2VMSytrY0dTSndLbzhZd0NRMEtCbjM0Z005SUNHeFN3dTVtQmtFQXZSNjJoUVJQK2dXTitzNjIzSDhmYmZyRVJSaXR5SWQ3eGFWcmNaN3VINjRNM2ZBRDk4aDQ1clZiNDFkMGlLU095MWFqRWFnQVNjaWFWL3JLb2Z3bjloUyt1ai96dDdzVGYzNE94cGRrcHhOQXJncWZTVlA4b3NQTVNsU0RKNkVyR0MyaTFuUnFwc1lTRDRHQUJLSEVlTXpCVmcyN05PeDNVZVF6QURFbHdFYzhrUUtvV0twbHdvWklDOSt2VUloWlN1bERBS01jZWNIcTdFOU95UDR5SlF6T1ZTbS9KSTJhb0VBQmk3aktRUllnV0ZkdW5TMWg1bzNFQ0ZYR293NHUwSEd1aWowZWFneURFQ1hrR1QwK3VoVHpUUnZrRTFmenJwOGQrN052SlhhMTFzcE9MQk9KWHZ5ODFiLzRTYy90Lzc3cFhlOS96amVKQlZDL2E3WHVJZ1NNaWZNZklBTUthZ2FNRStYR1YvMDQrZmlRZGNscTdkTVhxWnZhQkVXb1RjT0JFZTRyK0ZXTzNkdHJ2ZWFlQ216amJkdVY5WEVBR1BIaEkwd0FGeGs1aGs2b01pd0JBSVZGY25nRWVJakZreUNVU3JYMGtnc2pmSDNCeDlmcndUcERPdEpoYkZDZ0V4NXpBRG96RnVlVUJNN291TTA5azRocGtJQ2grdU0xQUNKdDFPbjh6cWd3MENCd0lqZitvZnZ6KzBmYXYvbUt5QTFyQWFESU9PQkNxNE1lSk1OUXlWUzU0bkRONThPVHNldlh0dmtZL3Z6alJrZlVlTVdhNGw4OVp1NXVVenFpNGJBRFBtcU1PS0hDYUJLSUVucnJhQ3dKSkdma0JjVEtpUFlFSU1BOWsyQ0dNdU9aTXhCVmF3ZXphb3VGdGdUNnNUeVBkQ0FFQ1BESkNRRHdHYjVQMjlkQUU2ZzR6eExiQ1lEbkhBcDZwcWpBcEllSWtYclBUbk8xSmZNMkxKVjdKMUdScDlBMzF5U00rd0NVaTVxSXFIWTBqNWc2RnhDdkVQZG53eHpuQ2tVQURrSVlzQUhFQkJ5R1NpZ3dJb1NOS3V3QVgwZklNY2FucjVmODgrMlZmU095djBTdE1ZeVdVQ3A1VHhWNno3MmRDdTdxMjE2V2ZOM1pncGp6THNaOUhKVTQ2ZUpoVDFUVXhCOXQ3K3g5US9vZkx4My95MThON3JwVFZsMXMxVU1VNG54aHdIWWhDQWg2R0JNSEpyT3VjcTdHSTBWRWxUTm1SQWYzcUJDZWNESHNZN3VHSklWZ3BXY29MbUxKUm9aZUxGYWhMZG1QWVVvSUtMcktGa05zeXBSKzJrOGRNVlJkSGlzdTFjeERDZGxhS0tFQllKOEpnRUtvdVFzZ3FJT2JKV0N2QzRXd1hZV0hzQ1FqU3VqM2cvVVErWmVMelUzNjFrKzFteHRhYTA0eDJkaUNVdW5zeXk2WDkvKzg2akdacC85SW5nVWhCbHR3STNBaWNIVzRLbHdWcmdFbkFtbk41aHVwYTkvNFhiMnIxMyt4dWVvbEg3a3A5c0Fyakp2T1VocVNsTllnZ2FZa2JFOU5hOVk3ejhuODIyVXFXR3hMQTRBRXhtVzRzM085QkR3WVBFcHdnUm92NmhxNGlDY3lETDFZckdEQkxtY3pKU2h3R2c1Z3QyZGlWMlZBSjlqQVFRK0NZSjVSSHVrQS9Dd2dEd3hCTWxRRnpOQ0VjNktvTnBxSXFLSGRyQ3BuekQxekdhMGFTdjdvTFQvTzd4L3JmUFNtVVB0V0dBZmRXZmhLeVZBSWhscnZZVVB5YUQ1Mnc3cjBOUnRHL21FZkg4bzVQWVhZNit2czZBNHc2RTgvbkFDTG1wZlFDVDZnSWV3ekdKdzV2Ni96Z2s4bW9tR3N5a041UlBWWnoxd0FIanRIODhaRkxYQUllWDlGMEdVSlJEV01sSG00QUV0RG9VcmIyOUVhUWNGOU5yVXZudE1LR0lDVXNCbWRqYVNycUxxd2RPU3IzSmRGUkt4VWhRUVUyNk5BaDZtdFRkWU9aYUhOQ3paYUdrWkxHS3Nnb3AzQzUwUXoyTTVTSWpUdVhNWXhEM0ZDdTRJS2d3QWQ2SnN1U1lxK1poMWxJdVdmOVZOTUY1dlMvcE1qZlR2dmlKN2J0T3EvWHFpWVFoN055NElEUzRPaHdQY2hBSXR4eU1ZSkQwRHl2ZWQySGZrRHRwM2VEZi9oUGpTSjgvUkZBMThTSUxESFN0d2dRSmJxdGM2NndpY200R0JwV05PcENkZS9xS01lZW54czFSQ25NMERXNFNFV2ExQzFTRFZYT1lWUFFnQkRuSGpUbHVyUkF2ZVZxTkhpb1FLcWN0RlNid3B6d0VwSGhEWEJKUThDVUZVdTI2aTYwT2J0NzRFT3RobkgvWkJGTDJBSEN6YjY0NkdERXJ2MzBnd3VONy9mS1RxcnlXUXpUNDRudHU5c3Rrdmp2N3hibjErMzl0d1FBbndMMVFna0VQbjVZUHBEanphOStDZXRGMyt2OWFLN21tNzhaZklyUjZnaWF4R3dYcSt6RXFnWlNQM24wWTdyYjAvKzZRV0pnNi9STDJqRU1ZbUhIQlJkbEYxa1hXUk10Q1RrYUZrZXpxbHI0K25YbjhzRkJ3QkdmZFI0QWNPSUFhTk81YmpZTzNjUmpUV3FxbFhKVjVkWkdBem93Q2hqQW1jR2U0VjZsZnlRSDM3YVp6WVhTNFNFd2dkSE1WWkFUSWRrVWdVY3YzWXNiMjNKUUhLNGNxeFRiUSszaVBpTXRJWWt4bDc5dldMMzJPcER0K2puTndDQXpkanZocG5hT1d2VnJJTVRDWkRNdmNXR1A5cWl0a1VILy9SK3NTb2ErZjJ1OExRQkh4NmdFVndnSmtLanlnbnNYY0FVaUJBQVZCbk95am9HRXFDQVQ0NUQ4aXprSFVQRU5QZG9YdWJ0eU81MlNBQXJpMmtyQUVFZUh3Y0JKWnZXTnRMbUJoUitCKzNZbjlzS1dCQ3FMaUlxN2V5RTY4UDFZV3JjUFlucWlwMWdCaXpDa0ljOHJOM05YbThSUlpmbTJNS0N3TXc5azdQNkt5dy90Mm1pRHlRSUd1QURKaUVyNFFGckZHaDF0cGN5WTJpNm9DVjZ3NXJpai90Z3FkQ1Z3VDkveUZpYmJQNzdTekJVbG1PMWtFSEMxS2FoSWdURUJRWjhkUHNBbEkyeFZVZHVpZDY0b2ZlYUw5ZStPWUJkR25qZXprSmhScE45UmxRVkVkVWRySVJtaDZsaXNzd254aEU3bzdYOGdSTVRGK2oxMGUxanRRSjZabXFHQUE5V0pLVkhFcFZjZVM1cjdsSS9KSXg1Nm5sUjQ4VnJKLzU5UDYxT0lGZmxzY1ZwMU1KaUVvZ0dDNGJ3c3pWU0JSUkMxZVZzZVdGd1psQ3NQT1NqekZpbHdLSVFzbTdWYTg4QXRUVVN1WFdUL3JPMUtYV2QxcXo0TlJ0Q1diTnVYZW5uMzVPb2g4ajR1Y0xSUVJMU1F0V0NHSE1hUC9Sd2UvTlhPNis3ZS9YZEoxZnJ5cXJHZEhzbXZtcGZidlhiZjkzUjliWDB2KzEzRmZoUkNLQm1JdkhkdnJhM2ZEUCtxWmRHLytreUFEam9ZY1FMNFVnSWdQMUFTeUxzNGo1aHEzRkZCTDFhUjNrcG1FeHR5ZWZpSXhKSjY1RkVKVnRhcGp4UEJhcEFuMXdwSkdlRkVqakJaNWJaUFZnTWFaV1A1L2p3Q0dJbUFFaFF4cWp0SGZlTGJ2VGlaczdaSUFZaHpJQSt3NnN6b0Fwc29PeGI3c3Z2UGJINnlkZHJaOVU1cEE1NDB5Q1BPVExUSkJYRVpSZUNHdDY0cVRJNnJwMlRFUmtEQUtyQVNCMXQ3blBJc0ZGamVBd0JTSVplZjJzMXJLaGpvR1RFTkl4VWVLQ0FxRDZMQ0l3WlNiMzgySmlTMXNXV1JqaUxEekpud0tqR1F5V01sZUJLTk1kbzF5cVVaZWpjUDd2eTNGYkFBQVNoNEdKVmxMYTJvMUNEcWFGUUM1M2dGVkt5Q2NCblRNSzZwSjBkdi9aVWx1TDZyT1hMUUZUbm9UekdxclBTKzB0THdCVVhJa2NJcG9BWE9NSEFwSVFBbWhUWUhHSjZCK1ZVSld2c0R6YTVCUnM1TzN2YlliL290WC9pRW94WFpYRkd0eE56RnNRZzFNRjlmc2pBQlRUZCthTDBuMTdTZjlQWHFyZjE0RHgxTGpFTkVEU1VEdXJZOUs2WWZUUS8vWjZqT2g4ZXhVUU44VFBLYVJlTWxDQ00rdWhaV1JSb2FmRUJTNmhtdkpLdFFEbVZPbWdWT0NKVEg5N2gyQ2plZmxpc1MzSlBGbGhrcFFlalRqSUFrZEM4OFRxOXV5Q01saGJOU2hDZ0ltRFJRcnVBWFc4c2JRRjlmckFMV0Ivb3N0SWIwei9lTGxwY0tjSEZ3dXJ6THphUEhNcFBqRWtEVGhEampjQzNmcGNjbHNTQWlsb1U3S0h4L1E5MHRuMjU4eXVIV3QrN05mUEVEY243WGhYNStqV1JyMTBSL2ZiVjhVZGVtZnJTTlUxWGRYUzg2NWV0di84ekg2aGFpUFNVVzE5NVovelBycmJldHdNQW52S1FrN05xUHdod21lSUdMQTIraENhOGtpTkhYUGhBYlVuaWhTVW8wd253UVJGVk1lUDEwTWppQzRNQW44SDhYR2NKWllBSWFZMTdDcnluSHhFTmlrQ0FSb2hxdVIvMFJMWm5xTlhpbWcvSk1EV0tHTXYzajFsV2ZHQ0hXcnIxNmZGdi9LYmpKN2RvMjFQaFRBNjVzQm1SUlJMYjJ1em90eUo0c0dLY2swbDB0cXM3MHVIQmZtK2FlV1BLRVBmcTNIa0JnQ2FRS3EvSVRGY0ZBSGxrRkFTSVdSOGtLUUkxdjNZb0c3bTRGUkZqaXZ4L0dWRUVHRGc1anBLRGxDa3U3b0xIY0U0RlYzVG01RG12Z0FNcCtIUldBNjFwUUxZS1MrWHVTVlQ5c0ZoeldlRTZ0K0s2dE5ac1ZmYU9JNmJPaldBckFwTDU1SGdRbWxpUktJQWp3d2drQURPb0U1Z1JtczdVaWRhQ2txU0JVSDBhRnpicDV6YU1mWEp2OFpjRHJSL2VDVXVSa3pOWXhRVmd6QTdLQkRvNFJ1ajJBd2NMUU9hZkxtdjhxK2NQdk9sLzdEdUhjWjQycStrZUE1WWEza1hGaTU3ZjdBeVdaWCtab2lwa1lNT3lmS3dQSHA5NWJuZXVzM1UrY3hUaExOcjlVNWtrQVdVUFBwcStjSFgrZjd1ZFF6a2hQUjZyTEV5anhvQkt5UG9BUkl2cERWZERuajlUNC9FS2NyWFFsSm4vSzRPUWs2Z3hXaFFZSXJTQkZJSS94UVJPcWM5c3NYOFJkVTlvU2xxNjVacmF1YVpsblJ6OTFUY1NCN3pVcC9lbi8vYUorSmNQcXlmS3RnNDNBanBUUlN3ckZwTHdJcWhwU0h6N2VFZm1QenErY0tEeGk4OUxEci9SK3VENXFwbkFVUjlQdStoMWNjVERCS2doWXQ2OEtmR1pselo5NSttbVcrNzFnWWJkUDR4djc0cjh3OFVBY016RHBGd0FZK3o3MEJVS09jV0lGWkN2SWd0b2k4QVhOTUtZUkY0dVZSanFCUXNqWHN5dUFGQk9PTU91NmhrWHlkQVVwRlUrbXVXSGUyR28wRlF3dzJkcWo5UWVHSGE2aTZsWHJlZXhHZ1RCOVNtaXc5TGdQYk0waHNQWXBqbDNqdzkvNkhzdG43cldmR0ZiZVB5SUY0SW81dzhmNHZMRUhDM0ZFbUFZNnhPVVVBR2d6Q0V4a2F6cjJpb2pKekUyNDUxT1JkQkxLM04vNHlwMzV6QlNSRXlmdFc4elUxSzNuNXhBeVlsYzNRbEo4RmFBY1dSR1RPWEJvand4Z1hSRVhMb1dpa0RsMlU3OVRzbi9CUVZNZ08rakttblhLalJHWWZzbzJ0eDlLazR3QUk5aGFwRkxXdTJqZVJSY21wTUpsb3lvemdNRmpKUlhxcGFDNktWZFAzTXF5VVIxRXo0Q0dQV0ZhQktHL0trSVNmVGxYZG05UjZPWHRacTdXN212UEoyaFpBQVVPbUZ6ZkhRQlJBa25mSXlISDBmcVl4ZGszbjE1LzZ1LzV0NmZ4MVp0Mm0vd21Td2owQnhjY0xTdGFUVnRGSDR4UUUwV0pFTXlZZ2FLdG55d0c0SmcvUmE0M2M5SWZ0a0hkRVNUeVh5MkJIbUs2MVFqbkhTMTg1TU5mNzI3K01OdVdYVXhuRjhVMUtNQkpRbEEyWnJpQ1R2OHdoV0M0L0p3WVNtb09RTWpFZ1NrQ1RhSEpCSTZZZHhIa1FGRWIrbEVwcm40SlY5cFlGS0Jwb2wxc2QvYmRFdTE5YklmZFA3TkU1MmZQZFQxa1VjN04zK2o5YW9mR0h0elZSTnN6cU9TL3EwSk1ld29XS0x0Mmg5MzNQRGR4dGR1VGhiZVpyNXBLNDR3N25jdzVrQ1JvZVBJREFtT0dQSndUbDBmaS8vakM1SjNuT2g2d1kraW83WG9mUzhIZ0JHSm9YbWQ1Z0tSZ0NLZ2l1QU5jc1dqbExhVTB0U0FIS09DcFhCelBtQWdra2psSm9xUVp3THU5N3NTRG5xczZUQUY3eG5tUGYyd05PZ3FtQ0daSWdvWTQ1OS9LblhkR3RFVzVaSWJPdlJSSGRxcGs5bk5GSmZScGZPSU8vQ1NyNmZlY0ZIaWZkdkQ0NzArUnVVeS9CV0JscHA1Z2dCYzZaZGNVdXZzb1poaEZ3Vkw2TENISWsrbnpFWDk5aXR5R1dSY0FOQXBlZnoweUFLWmJ3YmlXdkdCRWIwelNoc3pBRUlYYUdsUkZmamdKL3JKMU1UejFzSlNVWHhXWWM5elJDeFZKZm5jRVNMWUhueUlTOVlnYXNEM3VUZUxzZzl6SVFkbFFmRjgrQlM1b29OclhuWGZPS1dNdVQ4VUFnUjVaR3dxaDdxOHlCbHA0Q0RWRWJoQkFjdmtUTGlOQ25qMTFRbG81emVhVmpyMWt0WEkyc3l6TlMwUjFJVVNsZ3dvZ0VVNDRxRVFqcHY1NThzU3I5clJmOFZYNWJDRHRUcGNCZ0dlajRoT3BnWlhCcVUxeVpldUx0NHp5Qk0xRWRQQ2lvSzRpYkVTLzZZYkNnVndqeFhkNzdNc0RFMVhmYzg3SFE5R0JRNzcxZzNyVW04OFcwN1VNRlJBemw1cXRaUmhiRTM3anVTeUcyNFFob3JCQXFyK1hOUmVmVzVRS1h3UkRRSStRd0FiRmFnSSsrc0JBQkx2VzEvK0FXUkIwYmJMeVUrNi90OXMybkw1RmNuM3JrNS84OXJVb3plbEhycTU4YTVyMmlkcm5lZmQxdmpSaHgwQkwvcmIxOEVNQXFvUjZJZUxuWmt2dGR6VGw3ei9kZEhQWDBIRHdQME9jaTdpTk4zTkFqTWl5WEZESHMycjI5T0p0MjFSZi81ay9OTVhpWlFPQitqMkVGa2tTUjhVclU1aGRoeW1wcURIMUNMN0hZZXRsNWQ5NDZabE9NNlo1cU40TmlYbzFwWFJ1RmpqZTAvd2tURWtER2pUMkZKYUhSLy9seWVWdUphNGFRUDNsMEtvTUFIUkZYWXRXRVI4UmxKREJvT1hmRXZ2eWpUZWRsVjRmRXlpMXd0WjN4Y1R4aUtLaXJubVUwd0ZFUExFemNtZzZUVDlUaG5oOWxqZ3BiRHVnUWlDU1h4d0dCVm43c2ZMSUV1VmcyVzNweGk3cGdPcXVxSm90bVFrRkQ0NGpIeFZ2T2dzeEhRVWZwZmFGNENBS3FDc0dGVDhPeFJCcURqUWhMaDBEYUltUm9yY1BUbmRUSDVaQ1l5anRTbWpLMVorZUJTUmVWRm9ac1IwakJTNE80ZVl1aUtkcE5RcmtZQnBBSmNLVkJoVlJvSGgxakYrUEVYOXp3Q2tEbk5UZzlJUzRkenMxeThCbGFBS3lJVlF4TUgycEFLSHZDblB1K21PRitxYm1nZlAvd2FpUUtNT2orRXpESUdJSHVDb2ViUnFYZFd1Tmx1VFh6bU1WWkh3dnBpUnRIaXNLTzg5RHR0RFNnL0hmMDVKK0FST2ExcEIxQ1FQWmZkYUVUZDRzc3A5dVVVYmpocUVQbGJiMHh3VmJtOUpXQ29rb0t1Y3IvSlFBWkZGcXJaVXdBWThJQ2tRRmNneGlOQ2xRQUE1R2VTVkUrOWF5Mmh3OXZ2Ri8xYXlYMDZtMzcvYS9FQ1gxcEdBb1FHZ0NkSmYxQlhmZDJQNmYxN2EvckVIMnEvNHZnVGMzNm9PWm9CUXN4QzliM1QxV1YvTWJHbElGTittWDlhQ0F4Nk9PWWhSK0loa25RdzFlR0NlRDBPamlBYVdHSzRhYStMV0plZEUzcllKQVBwOWVKaWxzR2NLRVZ3Sng0TWlZUHVzQ3IwbGljb3pUazh3Zk05WGxPY3FoOEhTRXBDOXAzU29nZytPOFgwbk9GZEZ5cHh1ME9KSnNURlorczdKMG4xRHpYKzVFeVdIWndhY253a0Npd0Voc0lrbWJ2bTFQVFRXdnZkVjRmRXk0NmdIODdTUVpVVHdtRldocGlNaG1lQjhlNVZtL0RFVklKeVUwd3RzUVFsNElrL211RGVMaERGM1EyYW1Sck4wNzVCaUtmb2w3VkJVT010eENUTmdhVHhjNFpNVDlLS3prUGpkYTE4QWdnK1BJcTVDckZpVC9RNUZFSW9Pb3BxNGJBMmlPaDhjUXRGRFpNVk9zQVIwTFg1bHUzMnlLQWZMWkMzMFEwdmp3eU9vK2xqd1grZUlTcWh4aUs2YVduWlU3elhiN2MvYThZTVE1WUFFUUlwZ1czSmxJVEpic1dSTUl1aWp4OEJCYndyVjFiNzNSaTliR24zWlQ3QVdNSlJRZWNlTjRFTmx5U2k0VGUvWVdycDMwSDVvVkhSR1E1WUpaaVF0RktyeVY4ZDRzSVNVQmwxNURybkNCRERzcW0yYXhtbnUxNEpRY2hGVjZaeDJFTGhuRWdWMzRaeXVBQ28rTkVWcGo5cEhjb2hwWUFZQm1vTGVIRndzekRrc0FJOVJraUFnUXBDTWZoOXBnYVFBQS8wZUFFcG8wVnRhSi82R3NwOHcyOTZ6TWZLaVZ2bDBRWlk4VmdRcWdPL2hOemFHMkx4cFUrS3B0elRlMTlkK3pqZjV0NnFEQSszNzgrR09LNzZTZU1PNThRZCtUeER3cUl1Q1JJSkN5RXlBWUdnVVVPc2hIR2JvSWxnZTdFazR2ckUyVGtHVXFDUVhoVk14b0FxdXVWeDF5VkJrcmlaVm9hMkpvL3pNU3RRSVlGVEtsVWpVZXFiNVhYNFdzZWpCVlRRRkNSMkd3dDE1dnU4NEh4aUdwb1NmYWlDZUZPc1M5c09qWTU5N3N2V3ZkaWt0RVRsZUM1V0VaS2dDeHNwY3ZRWEZCYzVScTU4N09Ybm5iMWJkODJwS2F3RGdBWWM4S0ZpK0h4RUJjbTdoSXlra0oycElxRm9tZ3o0c3pCNDY4eUVZaENyanFJZmNiRjk1amtoR1hFUFc0WDJEc0xUNThDaFNCR3kvc204aWRrRWpVaEZvWXZuNHN5RDRFcjA1MnJWNm1nWjRoVEtWWGd3Zy9UVDcrRE1Rd1lkSCtWZ1dxZjhqNW1TZ2cxTUdYYlVCdGllZkhJQzVzaG9WQWh3UFF0VXZiVmROVWJwL2lCck1lVTR3WUdvb08zeGdHT1pjdU1FQ29pRDBkREg3VFNoMThxQ1orM2JRL3k1Z0JVbVpKQVZzYjY2MXlDRjF4bElYRFVwUnE0ekRJZktLSXNxcXAxNWJ1R2RmOFlQN3NGMkJETnIxMVBXV0lEbGVWVGNsMDYvZE1QeDNlMUdUb3NFSUYyc1FpMmJtQjA3eTQwTWdJS1UvaDFJU0ROdTJkY05ZaGlpSFFZb2dUVmxnWXhKQTBhTzFTZHJXemlORjJUMjU2QVpCRElheHRjbnRLMEVpZEVjc2pjZkwzSjliQUxWWHYzU1kxNDhRRkFyekVZMENDbEJrakVrQTBSczZLcU5PL01XZGtXdmI1T0VDcElTcGtxSENseEJBUXVDWWkzNWZQVHVlR0gxcjVzQjQyNjd2U01DTG5QbHlZUUpzQzlFSEoxYTk0S3VKUDc0c2R0dlZBUENZQzcvT1hHOHphb3hPQlp2VXNHUnpwaWhLT0lvZ3YrQ3k3UVB6RnZrY1VRa2xHN1pQTWMzcEtWSFNwSGIxRExUeG9SbjBNcWNoRW1FNWFWSkRzNGFNdGtEQjl4a1JyaU9jTlFVeERURU52dVRqay95YmsveDRIMWRjcEN4b000QXNuaFRyRXU3aDNPQmZQZFQwem5QTVMxdGxUM0U2SGVaSk1sU3lkSGluQllGMkdXczEvK25hMEI5OXIva3Zyakd1cVBkSVB1ckJZVmpMOFhrRlYvUm4vQjM4YVNsdWQ1Rml1cm9oZ3ZJS2xteVFtSnVRNGQ4TFN0Q1dXRXI1U0UvWUpKSG5ua0NOUnZYQkVYYjl5RFVkVVBWWnJidVh1SVdxUzJzeTFCcEhic1hhbHhtS1FGUkRWSU9wUVZXZ0tqQTFSTFR3b0tGT3A4WlBmUlVKeEF4K1lvRDdpa2lmU3JmZDM2RVFJZTlRZzBrdlBndmRrOXlkUjJ4bE0vY1p1a0JETkxxcnNmTFlPRHhKOHowYnlZZ2IzRFBKdlFVa2xqTTJnemVZcmJ1aVV4QThyak16ekpsVlFNTldncHFKUWxka3lhWFRhM2ZGUUl3d0tldUFXMmhuSjl2KzgvZEdQdkZqNTRkajJLcWh4akFWcVBYTWdpcTRwNWk0ZWFPMUpUWDR3WWZRWUZLa0htT1hERk5Eek9EajQvTGU0OXlkaDZVaVVWZkR2OXYxUUZBVXhmT1cyYStad0k2SHVBSnJJUlNHbENqNXRMMVpiRzdCa3dQSXU0dUdUSW93TDE3Rm5uUlBGaWlvR3laQVYvajRPQnhlZ0xva2VIVkJEaUpvQnVVeXVGN0NvU0hBdlNzN012SE43Y2tYdFdHd0dueWlwQ3BobGlFWUpFcm85akVxbFNZOU1mRG16SjdlNXB0LzZSTDRqSFMybUpvc3c3Rmc5RlhhTC8yditPc3VpSDVtTndBYzlNS2FFd2FxREpXd1EwTlR2YjBQWnVCbEdOUDdMdGZEUEZ4blBsLzRrZ0NBeVNxWUVkV2NrejBlSG5nQUFDQUFTVVJCVkVXbEt3VU56OVM4SThBSGU1NnFuU0lobEFSOGhxWmlsWVpOT2xLSzExdHk3aC8yaitXUUZFaHJ3Qmt5UGJtK2EwYzB4RFdZS215UCszSzhaMURlZjRMM0RYQ2hocmdCUzUzK3hCandXV3hJMnZzbkJ0NzdtNFkzYjRsZHYwWWVMMHhYM1FUK1E5SkNSRjBSMW5mdXZUTVNLbElZdnVyYjFqbWR5WStmSHg3djl6RWhUNEZOMC9WbkoySVpsdXIwRnBYT0pCS0F2d0xUS2xnODF1SzlLeVREMHFDU2ZMQUh4UnBpODRMUEFFQXdsT0t2aDZOYmt1aE1JYW92SDM4T1J0WVZXTnBLTWMvQnNvL3BVQVVQRkhqL01EL2V4NC8yOEtPOS9GZ3ZQem5JUjhaNHFJQ1NEVlVncWlHbXdWUkQ5Mm5GeWxpRnBrQktmcmdYeWhwcWl5THJCamY0Yk1pVVgzK3FRb1NjUTgwUlBHODlIeDJsVEdTbC9NWVNFRnIwcWxYRkI4ZHFqNDJaNXpid1ZJUm5TZ1RCVkhuZkFLVWppR29vTDI0ck1hQVRjb3k4UkhZNVFBSHF6bXV2VkpJbU1wbzNXbFhhWTZqTzdrM0VLOXVoQWgzYzV5RkNhQklBb20vZW1McnY0c0hyN3VqcWV3ZTFLWFJDWlYyQnh3SE9rSDJtNFdyelIzWU52UDNYb3g5K3RQa1RGNktueEZVZkN0V1RVaFlxTGovV2k5NFkxbVNvTlFGZGhjMXcvR2xWOFZ1U3FXWEFkYnczZ2thQmNLdVZhTUpjS2lUQVVGS0dNNUhQLy8xanpmOTVPWElLSEgvVyt5S0M1Nk5HZEZrWDV5cHlUNTk0L2pyVUZocXFKckUycXE2SzEvWk54RzlZeDVVeW1HQnB5RmI1eEFSdGFVUjJudWVoVU1nYW9ZUmtQZWlUOEJnYWhSVEhOaEJYckF1YmhhbktrZ09GNEVnRUNqaEk3SEVkVzNmTWc2a3FiVVppN3h2a3p2OXd6bW1hK09CMnl6dERPbGpDaTRDQTF1MTN4SGQweHY3cmFnRG85NUdWaUJNQVZCa1dZWWVHS21PUEN3VWhvZmZVcXlGQStrQjRrSFJCZ3VBRUttMlJ0Nk1LVkQxTWxzblNNRm4xcWpKeCtTcU1MeGZnV1ZZWUVQRFlpVmg2T0ovbGQxNUFFbHBWTkFFOXN2TGpidnVYdzk1Z0RqYVQ0L3M1VzE4VFQzL29RblNsVWZBV2hsK3NmRzRFV0JvMG9PYnpXQW01S25KVkx0UlFkY0lDaDRRRjhLd05XaklKb3MycHlpLzZSMi9kMi9EMmJmRlhycFhIQ3lFa2Mrb1dBS3hLMWIzcVU1eVlKR3dXMlRjOVpJK05yem55enZCZ1hxTEhYNEM1ZllueG5kbUlTQ2FBdlhGYnYyb2RiSnpDdEphSVBFYzBhTVMvNmNGb0NVbHpBZTNMTE5LbXMzZkN6OW54TjI2QVZvK1FyZVRpakpYR0R3SVRLcWJ5UUFsUEQzTytGc1ltcDUzZEVGM0lob3FJVGdrVEtZc1NKbUlHTkFxdFBiZStlUzZ1NlZRd3c5VEFMai9Rall1NnFDT0cvRE5iaFl2ZVVuMEdpcWhIMG9PMEV3ZGMySkI4Q2g4bkViSU9kU1pBaE5FeTJ1Skw5R3l2L3dTb2VZZ2F0RDV0YmtvVWZqVm9YdGFLOFhtYmNSQ0lMdGJrbzczaWluVXcxS1ZxdElNODJXRWZZbVY5NlFWUTg5RWlSRXZVSGFrWXhtejNnUUsvYzJYUGdRQ1RjTlJEVkF1bzNScHZ1N0oyZCsvd05YZTFQZjFLRkhReU5LN1dpWlFGeVpJamROSCs2VXY2MzM3LzJFY2ZiL3AvdTlCWDVvb1hOcDJXREV1RnFmSmtCZU5semtTcExVRk5NU1NNa003VDhlRXZoNXM0VldHR1VKQlJFSy9ma1F0TUFtVVhFdkFoZlU5UjYwVlppMTNYaDlhV0xuejU4VlJiaC82MzY3Q0h3MGorOUlNaTFEd0lUYnh3cy96NUVUNldvNjRVaXJQYk13VG9jUmFSM2UyRk80K2c2cEVnRG1ZWTFmbklHTFVsRU5WUm1tR05jUUM0QytoNUtiVEdoaVdvVGxLb0EwTkFCT3o1YlBzUTlZeWxNaHROeWdocDFKNzJjSzZtbnB1Ty8vdnZOZjNoZCt3cjJ5b1hONXFWUlNIRHB5QWFYRUxiemI5SzVpdnhoOThBQUNWR3J4K2lsMnNNbFhDT0JwdXh4NFZCMDh6TVV3L1FsYkE5S0NCQlhQWElVRUFDenVJN0tRTm0yTHBWYk1xVTd6cUJ0cGk2STRKRDdqT3FVbk1aN1lDQW5LejZLK0hjRCtnYk93RlBkZTRiTGY3WDA4N3hjWkUyakYwdHNlMWR1dStMVlRHLzRrMzg2NEdKRDl6YjhLL1hJQlZEeVQyZGlRWHJNNkpCQVk5WE1aVG5pVEtLTm53SklhQXJZVXBvdm5udE1jVlVXaFhOZitWdzdzNWp6WCs1Sy9LOE5ubHN0dllWaEZ3VjdVbHFpNkc4c3JibE04VmhiTk9kNzR4TTNIYlBxdSsvVnFUcXFkK2pQdlRaZGRKVUo0eGNNTGxPUU5CUXMrNjhraTdrUUZscXdycXdEZVBQckNRc3VGeFNoK1B6ZmIwOFZrTFNXdGdWa1VCS0wveTgzMXdicGMyTlNGaW9uZm96V1dZeURFMUJST0dEbzN4b0JLcEFiQjRTWldwcXZrUyt5cE1WTU5oUUVEY29ZU0lab1lTQmlBYXJUdDRwQVY5T3h6d0NkYTRFSVk3QTY5Y0VQOWpOaHllUVZHR3VEQWE4L0owRUZ5UG9TaGd4ajJpQkl1UmNsY2ZMUEY3bVhBV3VCMHREN0JRVGtJSlFjS2twaXNZb25KV0ZaU1JESjJoNjR1cDJkN0RpSGM1UlFsOWdxVWxHM01CRW1SL3JSMFNFck9pTDNTRFZ3Y2tybVRnRFlHalFOcWJkdmhMbWhLQXA2TXV4TWdYTWRVcThwNzJwQ0ZMYjNoc3JoN3Z6Zjd3SDY0a3lDYmd6dXRnb1FrN1VTSWlPeisrdUhjcU9mdWdSYXJORVVwOHU2Zy9tSHpVUU0xQ284WUVoK1dBM1A5TERoOGQ1dkFRZ0RMTUVDYk5udmpva1ExZlJxUERCOGNLSEg4Mjk5OEg4MysycmZPZTR6RmV4UWNNNklBTGlBUGV4dUJEOFNWdGJsMmo2NG92SFAvN3o4bWVQNFR4MUFZcHNRYWk0VUlTNFpDMG1LaWk1YzU5OGNQdGxhTS9yQUhGMTN3U2w2bFgvdWdMUGwvc0dJQUI5OWtvUWdBdU15NUQzTzFDNlU5cExKeFJaS2Ftc0NuWjhFak11TkRlbkZSQzVBRTk3QUl5M2JVcTg5cUxXUys1UUs3NGJlYWFBTEpLd2RTUitPcGorK2lPeGUyNmd3T1k3N29WWkVoOXdnYk5WRVBDa0MzVWV4VEVEcW9LcXkyVUhpZ0tGWk1HbGlBTE00RUpmNEtvQXdNTUYwaFM0WHVWZ0xucjlSdVF4dTUvREtZckRhTlBSaU5LTkQ5bmQvZGJhK05LTGtIMFdocXB0VFhtL0doKzU3cTd4ZC8rU3BVei94VVV0WDMxWjZ1L090MTUrbG9qcktMdHFVbS81MklWdTNyZS9leVJJT3B6eTJnNWltMG1OY3hWK3BKY2ZQTW5IeGxCMmd1UU9vbHFZeDUwL3JNK2kxYUtZTnZyUng0cjNETFQvODJXUmkxdmswVHlBV2RxMzRzQlF4ZmEyc0tub0tZblBhTlpReHREdmZ5Lzl1b3VzNnpyRDQ4ZnFIZHVteGd1NGRWT0VOY29DWkdSQjhLWThnektJbVpKNmJmOEVkU1RFQmgyVjAwM3RCNStEb1NDdDhWaEYvdW9FajVjWDFiN01JbVY0VDJXZG5tTGltZzVZRm5RNkE3M2Rab3BrR0NwTWhSOGQ0QVBEaU9tSUdxRUduZnB2NXRRVUVTcXZtQTRoa0t2eXlRbCtvbDgrM0NNZjd1RzlBM3gwbkFjTG5LdWc1b1k2R0lEUGNEek9WdFFaVjlVZ2lQY05JbHZGdGxaSzZ5ajc0UTUrU3ZZRjE5VzdLcUNKRUN4YWRybFVROUZHMGVhcUE4Y1AzWE1HRkxDbVVzeEFTNEpXcHdCZ3FoWnpXU0hBOFU4dHFHVkx4Q3hsVzRQUkVTbjhwQy96bnUyY2R4YllqaVdRTUxsN0VvWktPMXRSWkhqejJ1UE1uTVlwQ0tFSTQ5em0waSs3VWZGbVc2QUUzNGZ2cnpTb0VnQzdpb3pqSGphcUFKUTJxKzMyNjRkZSswM3I1V3YxRnpiZ3hCaHNMMlIzQXFBS09WSVJ6VmJIRnk0ZmV2OURRMy95bTdhL3UwaTBSZVZnZWJyYU5WZ2ZsZ3BMZytmeldCbkRSYWlDb3dZbFRXUWkxQlJEUW9NSFZOM1RkNGdaTUZSRWhmT05wOFkvdVVmZmtOUlh4V1IvdnZ5d1Y3enppSWhwMFN0V1c2OWM1eHUrRlptSGxadnpOSm45bmxMOExXY2JKYjMvVCs3c2FIeURlVk03SG5Qbmtwb0pRc2xCVEtjTmpiQzloUm50SFlrR3k5clJWSDF5M0xxNEJXeUhFWnE0Z1pFaTd4K2g4MXFRNDFueElZdlE0NGZSaVBraWZRRmRpWnIrUkUxYm0rRGFiSnFDV1dmV1grVUpEK3ZVNkg5ZjVmMndwK21xSHc0OS9BckZBRG5MUFdldXN6N042UnZJOEMwb1FPWmxQNDdlY0lFV1FHOEdmQlI1T3ZqY3FpQktPT25EUnRqYWRvN294RU5WMUR4RWRPakNLempVcEFOQVVTNzhuVEpncXNqVk1GaWtzOVBGTHg0VUd4dU1GelZnLzBKMnp3ckZZYXpSRWNIRXhYZDdUMHpxMjlwMGUwbHNIb01pR2xzMGR1UGQrbE5TZjFWcjhuTTd4VVlkbzhDb2p5R0dxU0JxY0s3Q2t4QWRtckU1VmQwelpyekdobW1zMUpvUEw4Ukk2SEFsN3gzaWs1TUJwUThpZWhobnhsTGhWdEZnMnNjS2sxODZwSFpHT3o1ekdTVGt5ZUlzYm9wQSs3cVNucmNPVVEyRkZXK01VNklJcktHeDUvK01ETkh3WDFlRkI0Y2x4bjNFeGZTN0Z2VTB4RVlWeDd4d09VM05uQUZOUmI3S1JXZmFRR0ZBRS9iSm92bjdaOFBGNlVUR2cxOUVOYWhBMGVXOW8zeGlBb0lXamp3SElvRUdJL2NmaC9RMlN6bXZCYWtJS21lVVFwSVpwZ3BkeUlkNjBaZEYyaUpWSVQxUVpQVjRyY2ZzU3JpU0pZTm4zN1ZDVUxYdzFxUkV3ZVpzRlFpMUllc0tWQ0lTSUxCaytCS09yODY2dHFZaW9YQmZGaE1WYkdpa3poU1NlcGdJbk9rN3ozbUlVd2NGUVJWUVJiZ1JWQndlcnlGWFE3N0NKUWUyR3dhWkZSSCtwOVpIY0gwZUtXSXdqOTVKMnJFS0dRT0ZVOW5jVis0MEJ3bzdvU0ZySnE5c0hmdWZFd0ZISTg5SnhFNmRuRFQ1eUNnSXRLTVZGUisydjFMczNCSWlnS3cwZHpXWGtvWjdKS2V0VFU3M0p3NFcvV0lSRmFyanZHYkN1eVFRSTR6NGlBdTBDZ0NSbTljbGYzRCswQXZ2NktxOVhlenVrRDg1aHNibzlDQ3FrS00xa1RIYVAzUFoySzE3Kzk5NVg4dEh6dGZXSjJWM1lSWUFPL0RVRllGSVBVWlNkYmxRUTIrV0l6cTF4TkNacGtZTHRrVHR0RDRBQWt5Qi9jT1QvN0l2L29yMThaczJJR3VqWkdOcm02ZWgvTDJqOWsvNzdOdDcvUDY4MHBKYXhpTlJpYXZTblNpYjcxbmZNSFJsLzgxZjY5UmViOXpRaHNjOUNKNnJnNnNlTkFXcWdEOHZ5VUtBNjhIVkl5OWRWLzNZUSs2eHZOWnN5YW1JWDl6a1k2T0lxR0U3NmlrZFRQV2s5WUxxUUVva0lkcWk3bUJPT3p1RGFvQWM1a1V4MVZIQ29FUmNva25FOXQzb3J2bDg3Wk1ISnQrL3pYSVhlUVlNSW5qV05EbzF5S0dyRG9LR1FrUndCQm8rOWtUQ3ExbTNYd2tBTlVhL0g2TEJnN083RkxpTUlYOWhNRTR3NkdncC9Gc2hQK3ZRemhRQVZPUWlDcFZoa0h3Nkp6SzY4K1I0OFlsc3l3OTNZNUJCcDJXdlNjQUh0dXBja29NN3ZrRW5hcTE3WDYyODc5L2NzY21sQnhPNmNMc0wyQ0V5djNvQnVoU2NCSjV3SUNnczJkY0pTUk1UNVlEaVVZbnI3bVFOSlJzckwzc0xubDVTNTdFcUh1L25RaFV4TTBRMUwvaCthZXAyR0Q2THVGcDdjaUwzclJPSmwzWkZYOUxKUXhXdWVtRVhaSzR2cWtJTmlxRGRhNmtwY2pyYTEyR2NxOVcrMkZ2NDVkN094LzRnUEZoamRIdXdadUlrQUlmQndMa2FSaVNHSkJMenNta3FPRmVGNDhFSTZ4dEZWUFdPNUh3bTYrb09qUERwYkl4QkY1ekJQTEpWSGlpZ1lpTm1CS3pBQzUvUEVHbkRPNVN0SHBoc2UvY1dwT0xRQ1BiaWZ0R3BTbUJuNkVJKzJFdGpCZHJjQUlVNDczZ2pGYS9neXFvUE1PbUtFbEdWaktGa1RESVZTRWJSbFpVQU9GVlBENGQzSjhMbTFzRVJ5ZkFrWEs2ajl5bFFoV3JZcW4yS253RkEwa0xONDMwRDNETkpIV2xxamlKdWhGUXN3ZXFadWdqVmk2S0NKK0JLVkYwdTI4alhVS2h4b1lhcUd5TCtOUVdXSGx4MzFpeURJMEtCcmdMTTJRcmZkNHd1V0UyZDhkOVdLaHFBeTRoRnRGM042azhHOGovdVM3L2xMRDVaWERnbUtRZ0prdytQb3ViVHJsVXdGQlRQQkVqTjhiQldWOWFscTRleTJvNUdsR2ZVSXpGUWRxY2Y2VXlSZ0VGd0dDN21adWtzd2trUGlYb3krT3ZQcjN6bitOaExmOWIwaXhmUThXWStPWVpNWlBwOGxXVFdKdHRyK3VqNStXOGNHLzdJbzZtYk5zYXY2K0toeW5SS2VPWkRRRDJKRUpCVU81SlBUS0FuaDg0VU5qVlJVa2Z4MU4rVW9jTDNLOTgvcnJUSDQ5ZXY0Y001ZGlVQXdhcWEwcFB2MllFL2cvZnpMTC9CQzVYV0VpSUFBaDkwc0RtYS9zUWxiTHQ5TjM2dDg1dXZOMjVveFI0UFBEczFSUWdEVmd2UGxtQXp6bXJVMThRckQ0OG1YNzhKUlRkYytRb2hvdk8rUVREVDJZMm9NS3B1K01uTlg5SlR3Z1FIeXJxVWYyeWlicVFLT0Q1Y0dUWnNSdDJ1OGhFMjdiR0E0eDRTbXRJVmpYMzJaVTEvL0tQcURXdnNkVEZqWGpLWUpQd29YTUNZY0tQZlBxWTlNaUhLcnJjdGJiOWtkZVc4aktKRExjT1BRcmRsOHFNUFdYOTltZEFGQUhUN0Fac2pBTlE0clBjOVVTOExtWE1YZ1M5YnNIbThGTGFpODVtcm5yNCtCZ0JWWHRqdjExV1VQTXBWbUdqOFUwOGtiMzJlc3Q3RWZtY3BodWNGaFFHUGtkQ3dtZHdIYzRQUHYxTnBzMWFOdmhsTnNJK01HQmZHbHZvdHdjL1pXanJhK0xubmd4VHNjYURSTE9lU2dhZytaVFl4ZzFRQmQ4VytMek1VQlhHRlQyUjU3d0NFUURvU1VyM09td21JWVBzbyszQWxkSUtsSUtKSUJVcUQwZnlCYzBUS2xBY200VW40Z0VLaXhZUXE1R1FOdGt1Tk1UcXZBMGtkZWZlVTl4eWYwYWJ6aUQvMHR1OW4zdlU4ZlZkRGVQeW9CNTdCblVLQUJHemdQQTAyNDZpM0FCdGxVRHMwVnBxT1AwdEdrMVg2K2hIdHJFYnFWUERVUWtIRVpVVVFoT0NESThoV2tMTENzUE1TM2hRek1rYjJNd2VNTmtPOXNndHg4d3k3djRKZ0Nod1lFWEM1SVZyNmFWOTEvNlNmY3dKN2lDVlRRSlRrTS9zZ0RXcURaV3hKUlhjMmlkVXhsRHc1VVFzSG1aN3duSnRkWUtxcWlPdHlxSXlrTVoxL2xReERnYUdnNnZMQlFUNnVVOHBFMGtMTWdLbENWYVlIa2hLdUQ5dEgxVVhaUnNYbGlvT2FDMllJQVUxQlJKKzdQYzFKTDAzL3pRQ1FNRkZ6K2NGdVZGZlJwZ3dLM2dLZXlqTVVBbW9lTWliSzBmaWx6WlBmNzAxTnJpVkxZWHNoZEZ5Z2c1TVc5MDZpVk1PNXE2alJSRVhDWGp5V3VNSkpsR0ZlM0Y3NXp5Y2daM2dHZ1R0VnNzTm1Cbk9Xb3NQSUNEUXJlTUlGMFhUV09maWNYTVlSRCtlR2tkVzJoMi9vM2ZuRjZCYzJSdDYrQnYvcDhsZ2VTUk9pWHBpa0VGZDluQ2drWDczQjNKcVovTW9oKzNnKy9ZcTFJcUx5VlB4dC9vY1FITkVFZEF1KzVKTVRHQ3BnU3d1dFM2TXFZWHVuWUFVcmhMTGo5QmExOWdoc254bndmR3FLSWE1ajBzVW9rTlRVQzlKb1ZIV2gxTk5FaXcrdUFDWmhIQmlUbVgrK1hBNTd2VGQrcGVPMm02MDNkT0ZKSDY2LzB0MkJBTnREUkl0Y3R6Nzc2VDF5c0NJc1ZRWVBKRWlGUm5WK2NnZ0ZtN2ExSUtPanZOeGRDMkJTR3VjMGwrN3Q0WWthS1lKVndUVVh0a3R4TXdSa09rQ2FJSUFSaVFoTnY4cnRtdm11czJPM0gybTY2THNEWTYvekRRaDcraGtRWUVlaE1KcmU4K3Y0NXcvRm1pMmxPVXBGeUo4TTFQN3lrY0oxWFdOZmU3NlRWQmxJZitMSk9JVDVrWE9CZ0tLclRwMFJxTnRXQlF4azVjSVFRZ1lNNHVNRlZGMGtUWUM0NkVqSjJ0bHBsTER3S3BXQUpmaG9GcTQzOGNWRDBWZHRpcjVwRGZhNXA2WjlnMHhiU2tNblVFYitZM3NuUG5xUGVkYXE1Qi91aE8zdy85WWtPMm8wU05JdnVqQklJUmJzZFJmVlRBcmF2RHdhMS9sVkdGQ0VuNjBwQ1czaE1NWjhDU0N5Y1lVUGpQSEJJVVIxR0F1QlpvSXJsanlVUERUcWRGWU02NktJNm9pcUZGWGhrekFGQUM0NHRDdURxb2VhaTRHS2ZmK1lZbXJxemtZV0dtMXVBbkFLUmFzelJSSG94UGpsUDFOamtmUm5Md2tQRHZqSTg5eTJHU1dKelJvc3dtTU9qSGwyR0FPV2lteVZ4MHRoU1M1RFJEWFpWN0o3eW8wZjNvM1J4U2dxbHhOUElxSFJoa2JlUHhnMGlWbnFaSWJJR083K2ljcWUwZmEvMm9uV0pDUWd6Nmo3RzFHUkt5Tlh5UDEwb0hUL3NKTFdyVTNwNk81V3ZUa2lZaXFwSXNEbytGWFB6enJPWU5rNVZpajh0QzkzeDNGemN5cjV5blg2dGpUR2E3SjRhbmtXMVYvZm9PeG94UDBEc2lLbjIwMEVqOEpVWWFyd21NZkxZUXhLRmRDVTZUY2tHYTZFclBkQVZpaFV1cGp4WmM3VnVBd2lFZ1Jka0NhZ2lOQkJDV0xyanMrbUJoTDhlRDk4U1djMy9sYjg0TUN5amtldDNXM0szZjJGSC9RazM3QnBZU2Q0YXY0cGl3czEzSGNDNnh0b1RRWkpEUjVRT2Qwa3FBQkdwWFY1VytuMmcrNVRXYlVyemtHb2t3Rk5RYUdLaWdOZG5XdVBHNFJCSDQyRWJTcjJlWWpPb0k1aklFSW9NTHA5ckZFQWFPZG1HajV3OWZBNzdscjdzbmZTalYzNDBRRDNqQ09pdzlEQ3VpT0FYWmI3Sm95TTJmYnVIZG5ianpxUGpKbm5OWWFSTGsxQUY5REZ3dTdkVk9WU3plWEgrakJScHAycm9Hb29uMHBUa2FyTG5sVE1HUlhKY1dPNkJvbUJjY2t1U0t3QVd4NmNZQUhqSHA1V0cyKy9taXgxNEkzZmFKbTROdjdlclRpcFlNeFpZQXRlYktncUs1ZDFxRjg5V1BoWlgrcU5aNkdudmpDWW9TcUltOXlkNWZFeXJjbFFRM1Q1YmhhMko5YnFhSXJhUjdMbVJhMmNjK0I0S05qSVdHRTFWQUIrMmFTaUJoUWtJZ1NMa0dmMCsraFFvajk5bVp2NFhPV0RqNC9mdXNzVWRWTkVRYzFBNU9IeDVoZC9OK25EL1B4bHhrMWJTQklxd0gwRDFyNVI2NU43ekxYLzNYZjQxWGFURmZ2NEUrYWZuQlBlZXE4UEQyZ2tOQWs4N2NFaXhBbDVEcWtZNW9zdVVKVVlMQVE3cjRnb3pyRThKVFZsYlFLSGVXR2RyUXZVSklieS9rQXBldmtxNjMzbjQ0ZzhoUVJoY0c2cmhtWndINWMrZXlqMzhZZmRYRDd6Z2N0VHQrNmEvSU1IOEszKzZCOXZJazlpNVF0anNTc0hBUWdGcVBuZWFNMjZ1Q2traVZ0MlRFVWdydkwrVVQ0NGpLUzVRTlNVQUVISXV5aDdXQjJoYTVxcEt3RkRBd041b016SVQzZmlJOFdBU2tnQWJjQmFjSU9aL1grUHgxb1QxdHZhOFlRSGtxZWozaHpHRHEzMnBiN0NyL2V2M2xNUFBsZnEwUGZwTUNsUVlMUXJhQlk0N01IQndrMDFOT0tCUEZ3ZmxnWU9mT3RJN3RiSDlaMHR5b1V4SFBCT0g5bHVTMnFLd2RMWjh4Zm1tNXNTWnFUMDdEK2VzTmJIdFZkc2doQW91MmRTKytvcUl2RHY3aHYrNUY0MmxQUnJOa1RQYVlDcFFBSTFuejFaLy9SSVRlaHFvMlZzeitCbEFtVzM4dVJrL25zbkJ6NXdmL3lhMVkxdjNTSWlxaHl1ckxTYkFLQ092ZmMrNDlLVzVLczNpSXJMQnlaWVVjSThCT3JMVjZIcExybk1rRHhOa1VPQW9ZRFU4Ry9NMktubjJzVU1RU0tnZ3lHZzVzbEp4ODFWL0hKSXFTTjBSWWxwU3BNcEdrMm9BbmxkN2gwQUVXMXVRUDYwQ2dPV2tNQUpUaHBvVHlaMnQwemMxWmU0cm12UlRQRFUvR01HWEo4UGozSmZubFlsa0lsUTBqcDkzaWpid3pwZFA3dWg4dUJ3Y21jVEYrdTd2S3B3MlVhdVJoMEpPTFBuUTRBR0hQQndrWTROQ283NlNNejQ1NkJSL0lDUEZDRWxBS1J1dmFEMHRjT2pML2xSeTRIcjZaSlZhSTd5Z1dFcTJkUVo1NEdLckhtVTBNUXFRNXFDVWxyNmk1ZWc0TXFhUnd6a1hSUTl6cm5JT3ZBWmNYVVdhY0RNWjJKbzBGVStPY2xGVzF6Y2hiaSswdFlpRFBpU1ROV2ZHVVNhMlRHUTRQbU9WNjNwS1F1cjR1akpoWnZhRXVJREVRVVE2RWJEVnk3WE91TEQ3L3VlL2NoSTQ3OWRqWFlkeHlTcUhwVGwxREFCVlE4SkxYYnpsdkdQUGVpL2FMV3dWTGJyTHlJb2NFcWFjSHo1Y0k4NHI0TzJ0c3l0YUpvL1loWEdqdGJhblFmTTNRSU1FR0c4aEs1VStDc05xREJPK3Rpa1lwOExtNkVUSW9SZUgya2g0bXIwdjY5dHVPVTcxVGR2cW02S0cyV3dpcHFCeEIwbjJsL3o3ZGkxMjZJL2VBa0JPTVNvU3NRRWJGL2ZsdEcrK3pKNjB5L3NxKzR1ZnZSOGkyRjhjQWNBREV2a0dTYWhTOEdZUkkzUnBnQkFRUzZzeVpoaEtYd3l4L2tLRWlZa0VOV2M0d1d4T2dJQVJRL3pxVUlZaUNoOFBNdURSWkhRclJzM293ck16MnNzSmk2alVVY0h2SWNMK2ZjL1VmcldZWGFjNkhVYjJ6NTBnN29yamg2ay8rTGk0bHNlcUR3MTVDcHVwREdPOXBVdGpFVmVDMXdQa2lsbDJBY251ZWFaMjlMTEYva0VJYkc0eWdmSCtLbEErODdiQVJSQ1RXS2lobmFUcm0ybDlTbTRoSDVHd1lNam9XQ0JSY2hCTlNZZ3lGemZySHpwaW9tYmZ5VmFUZU9DVm95Y1Z2QzVXVU9PUjk3Nm8vUWZYcUx0eklUSGozdWdHUWdTQXFxTUdHRzlpbEdKVWJrQUJJOEJRMFhlNVlGY3FIMGxpeWJUM1Q5UmV5cmI4dkhMTVFZb3ZITDdhcFlRNFBpSTZVaGJHQzRndWxCQlNuMGFJbVU0VDJidC9lUHRuOTZOeGtoQUtYakdSQkk2eWYxKzcrQzc3NDllMGQ3NGpxMHdOUzc3bkhXUnE0VDBIWFViaXdGVWZlUVpETktVeUFWTmtjdmJLcjhlR3YybnZaWEh4bFo5NmxLbExTcUh5aXZVd1dyanB5N0wvZk9lNFQrK04zSk5WK3FxMVZTcThuQ1ppUmFPWlJNdCtpMHQ5dXg4SmsxUWt3V1Z2TDVTOWI3QjJxR2NOMTdobWlSRmdCQ3dRWEhBYVNkWnhEVmpYU0o2U1l1MnRSRTk0NnlyMUpWRS90UUJDRXNMQXk0akdZdThlSFgyUjMzNTc1eEl2ZlZzUHJHSUV4eElTRjlud2ZQNTRCQXlNYnB5UFh5NWZQM3hnaUlJNDRpK2ZNUGtuL2J3YUpWTUpVaUNnZ0FtakJYUm1WamdLOVVKWmNaVExyWm9LRE9HWmpkaEZZQU9IUE93VXc5czByYjdyKzllOTRYbzN4Nk9mWGd6VlZMVWxjQmdvZmd2ZTVYek05WXIxbENUQ1ZXbktWaktLb2lwL0w0QWVTNlBWdEZmNXFlTEdLb2lyb1lreWZNVEI1a0lzaFY1ejNIeHZQVXIxY0VNU0ZZYnplcnhVdmovYzdaUkFkZXV4bEwwOEYzSHpFenp1YTg4QzhjblVYWVhYZFlNbUVDVitja0JrdXorb0NCTGZ2c1hieHA3NjA4cVB6elI4Tm1yb3Rldmg2bGpFTWk1MDhpcHhTUXIxV3RYNjE4N1ZManJaUG9kVzdoN2RzRVlNd1JFU3dLZGFkakwrVXdDR1BXTXE1b3IzMVdjdldQNjlrWTVKbm1zUkFVSEVRMDFMNlJubVpCSSs5aWlZcThMRlZBQkFSenpzRU16WHJzdTl0bU5tYXQrT0RCd2t6UmdxMGg5NVZqN20rK01mdVNhNkY5ZkNBQVBPRkFCZzBDQ2RaVlBUSWl1Uk94TFY5dnZ1bDkvMVhlMTErNFFiUmFBc0psMG00QkdHUEtoVTJqQWxYbGhEMFlSOElEZWJKMEZqTUhzalZYTWkxZGhiSkc2TzFYQWx1aWVnT1BUdVIySWFzaXRMQ0xIZ0FlY3BTUEw0emYvcXZTdFErcm1aT3JkNThWZWVaWnlYaFFUd0g0WEROcXFHVnNicXdkNzAydmo5My85S2MxSTdYamw1bVVXeGhKU3NNRkFRaS9lUDZ5dlQxTGFZS2JsZmFxRXlzZXlmR0FJQ1RQRUIweEpzSWJIYkNpZ0Z6WFRCVTJvQ1J6eVVmU2hBeHBOK3pZTFNGMHJuM1MwVFpIVU84K3QvTzlKNHdXdEtHdXcvYUNoOG9wdlRHQU5UVng3RDJsSzVndTd3Mk56Z3M4RWVBd0piRlhoTUk1NmlDNFMvN09JajB5ZzZpSmxRVElwaExnKzhXLzc0emRzVW5iRmNNQ0Y0QlZGSXhhVUlCV1NzakNVWDJhRWhGYjRmbmQwZDV2eWV4dVJZM2huQWc4YmlNTllyOGxqNWFIWDNaMTQ0ZXIwUnk4RWE0aVlGTkhJbHp4UzVFTWpLTlFDMXQ3d0o0VGdmYkV2ZWFoQ0NrVXViZTA2NXdWRGYvRlEzenZ1Vy8wZlY0b0dVMmJ0bGN4UXFHdlRqZDk4ZnNQZlhtSWZIQm44NndlS0Q0OVNaMEkwbVBqL3FIdnZLTW11Nm1wOG4vdFM1YW9PMVdFNmg4bEptdEZJUWlOcEpDUkF5SkxBQkprZ0UyU3lNZkNKYkxBSnhpQUR4dmo3TUJnTUNJd3htQ1NFa0lRQUl5U1VScU1KbWh4N3BydW5jMWRPcjE2NDUvZkhxNDVUSFdZMERyKzlacTFaNjNYVmU2OWV1UGVlYy9iWjIzM2VTb1FNdUN3YWZOVG9MKzBlSC92clhjTWZmU2I3cTBGU0tIaFZjODBkcStMdld0OTQxNmJHRDIxdS9ORG1ocnMyeHQreExuWjdyMjk5YmZsTWJ1enVmYU9mMkcwbExVcGxrYlVRdUVoOXlkUHdxbjArRmFzYll5OXV5VHcweUdNbWhaY2hhY21lSkxwR3ZYWFFCWndMUFNzQ0VvNTZaVVRwak9idVAwM05nWXFNSWdNK0ZlTjU1T3dxTFlsZW1KdGdETHZvVVJFaGxHYVJqQmd3Q0dXZ2tyeGRmQUFBSUFCSlJFRlVyNUtqVUxwQzhVL2VNUDVYdjVMSExVUVlVWkg4MFVtcncyZThkUVBGb2tob09DTnh3c0ZoR3dkczdMZHh3TVpCRzRkdEhIY3dvbEFrUWxjMml6dTY2ZVVyRUZZd1hJSlpqZmdxR1ZFL1RGcytkZ3FtZy9BeS9BMEZVSEw5cTZJeVk3a2pVOFlZYzIzR2hWQ0p4YWJyMm4vL2piMWZlK045NktwQjA4SU4zd3BCZ1h4dWlFOU13QzZudm5aSTFBYURiK2x1UC9SbVkvdUtzVHZ2UDd2aDM3TC9jSkJOR3hzMTFHdXdGMzY4dldmRFF2U3VyYzdwdEhzbVQzNjF5Z2RxL1JUV1lTK2NOWm1HSzZIRC81S2UvS1BETUJUU0ZKZzJENmRuVXJnTWhBaW5YQUJZcWFMQTNzQ0hISHVTa01HSFhob2RIcSs5KzBCV1JlU2hvYVk3Znh5KysrYmdweTZIQyt5MG9HSkcxOTVRb1FrNWFaSXJvKy9aNElKOE43VUN3SkJFa2FFQmNRR1RZUUVHSVNnQXdFYjFleHBTK1d5YUovTmVab0lNeFJuTVMwY2FXNXVScmJhQ2tZeWd3bWN6OGt5UzFqVFNtanJrbHQwYjZnS2JOWHRYcW4vbE40cVA5c1YvZmxQci9qdWluOWlxckFqaW9JTVJ1OUsxYklFWVRHQkhicjZ4ODVHdjcvNzZtMytCbmtVZmpIUGhSWFVGbThmem9pRm83VS9ZbzhYb2JSMDhZVllzV0JaNk1DUVExWGc0ei92T1Z2aTZzejhwQ0M3amJKRmFmWFJuTjIxcHhESEdQZ3UyUklncUpmREZYd3Z2MEQ3Q0dkZDNkWXNTMXQzL09JT3hMQlJDZU5sK1pUWmpsV3JkTjVGK1lGZmpyLzZvc3RGa0RMcnd6OTFEa2RHclFpTWNjcUJVVzFGVnlxSVc5NmNRMEQwZUwzV0VzOTg5U29MQ0g5MktJWUJkNUMyb3owTmRSUUpoMytKdVFNS24yTWN6QW03TngxNEFCeWllRDkxa2NiaU1PZzArRE45Mm43OHpXdlBsSFdpb1JXTVlta0RKaHN2VUdSVTd1aEVMSUh1T1pxSUhoUmlRWjNMRXZPS3IxL2pXMVl4K1pqY0xtbTg1Znk0a2t5b0VKbXpzc1kzTmpZMC91U242Rit2enU0ZEdQL0cwZVRnaGVxTWlvRjc0QkNPWkNLSXJaQStYUmo3NDlNam5ubVZGMUw5blE4dmRWOWEvZjFQa2xnNy94bG8xN3FPQUo1NUpTa0JWNjMzK1MrcWlyKzV1L05pbGpYOTVpUkxSaHY5cWQvcGZqMkl5RFlNcVd2QVhFUVNVWElSOHdkZXNWZ3hLMzl0SDhTVmFUaXV3SklVTWFvaWdLbTlyK1dDSkhDSnYzbGpZT1NiSFNoU2NtdjQxd1VXTFI3TFZ6UmE5dnFNK0YwWEdSZzBFbEdmVnlMMFplc3hGb3ZMTnlDY3VOZHJxeDEvNUVGcXA4Ry9IWlNKWDk2VVhLQ01DZ3hhS0xpQ2hNZ3pBTit1ZkRqQWo1K0tVaFgwMkJnV3RxaE52NnFWYm04QVNveDdaYjk1Wk1TSStsRzM1ZUI5c1dYbGRGd0dCTGFsMFJ5bWdGSjRhcHpvL1hJbVNQVlBWRnJDdFFtb3MzYm14NmIwUHZxNS85L0RIci9pVzZURFd4K0cxME0yRG9XSVNHTXVKenBpNU8wRTl0WkgzcnNWZVYwUjhqYis0dWZWWHJ6Y3ViVXgrN1BHQlMrNlpmTk9qTW1WaXN3NTE0ZldUSUl6WXl0WDF3VmVzS3U4ZDk5elJaOTA0Z0lHb2I3RWZPT2ZITWs3YnZqOXBSWDB3ZjE4ZnRRU2dxZHlmUXQ2WmNUa2xRQWVPT0lnTE5JaUtzb2VmTU9qQ1pGR2poLzcreHRCSG42ci96V2o5emZkRjNydkQvK0ZMd01BK3V6SmtUMThQTDFwVmhSd3BhQjJoNkF0WGk1NGdBQXc3OEUzbENjdWVNeGhnQUJaUWx2TWpZSzhrWmtrK01RRkQ5WWl5RkRQTS9RbWxJVWpkZ2VyVWRGMkZ4YnpuTExYVjBHVXRLRW00eTN0QmJHQ1RaajA4M24vRE4vMHZhV3NmZjB2d1pUM1k3K0tJaFlRWFlIazNSVUVCTW1FNjlUUTVNTm16cGVXOUQ3NnU3NW1oajEveExkUEJnZzlHVlFTSSs1TnMydXhUQ28rUFJtOXFFN1VHbTI2bFU2TXFKQ09vSVdmenJnSG95bnhKRm9WUWNEQnUwZzF4ZWtNUGxmMTQxa2JSUlpqbU5BMHVCd3dJaGdMQjVPNGY1ZWZPeWlmNmVDaUg2REw4eWhnSXF4QVllKzJEa1ZzMkdTOWNVZG5lNTRJeFF3SW5vTUJvVUJBWEdIUlJtQkl3bndjQ2RPTGo0N0FjNkFwY0ZrMkI4bk9KM0svNjY3OThIZndDUldrK2ZWWm1UZWdYbXA4a3dHSHlhZERWUlNSM21CbnBVdXdkbDlEYUtDWXVhalpVQ0hUUzVKOCtLb2VTOFh0dlFaMGZSUmRacXhJTXVCSXBDNW9xcnUxQ2pXL0JPUmlBU2pKaFlyelU5TWx0L2pVeDYyQ3l1dHZlTkJ3V2NUOVVJU0FBRFJpMmNjZ0ozdFRkL0xOYi9YZXNTbnovNU9USG41YXVGSjNoU24zaXZNQk1pcUQyY1A2aG9jSDNQU0p6ZHN2ZDI1cytzeTJ3TmM0bFJ3NFY1RmhSSmsxWmNOaDAyWkpzUzJtNnN1VElvWnc4bnBKakphM0JINzlyUTlQSE5tZitjM2ppQTQ4amI2Sk9XZHB3Nm56aHVyQ0JqVTExcjF1Wi8rMFFqNVdXdUdxWUtoM1YrQkU4aHlSMXZoQ0VVVmU3TWE1dmlLZStjNVJhQWpNLzBGQXhtSUlwcXovWkFqQ0FRellJV0tkVnh0UFpaMmdRK3V6cFVuM2o3MjRySE9vcmZ2VVVGSzU1eDJYb0EyeTdZdis1MFBoSWdBb0VDSDZnNEdDUGhlTk02K04wWnc5dGpHREVST0VjYXJFM0IrZkw4cWt6VUFCakFRY2hEd3pvQ3NwdStQcVd3dDVKRkczeWEwZ1ZZWE9GaTZIQXNrMG1Oek5XSkkzdTN2V1docTdZKzE3d3JTZnZQWXIxY1hURW9DdlRaMXE1bUo2RnJVK3hKMHRxZ3g4TVFHTE14bUZIM3hLUC8vaEY3YnZmWFBPVjdhV2RBLzJYZkRQN2Z3OWluWUtvdXJDUENtTklCdDY0eWRoVUwwZm1wYUFCZ1lvK3pwS1BKQkg4bXIxM2hFL1pzVTlkWVI1STJFZFRvaUdBdk1XbkptZW9UMTU5b2NRNDQxYk1pR3lHUjJrLzVRTHczYlUrOXViMThSZC9NL0txTllFdlh3VUFCKzJLbGNMMDNlZlpzU3loNU9ydFFRcHJLQUVXb0JGMHdra0haNTBabzh3Q282cktSMGp3OFVsa1RhL3lSd1E0MGpxZDlWMjV3cXZmVjdtaFlTSDNEVUdRdUw0WERxTzh2QllSbTlHck9mdnpnN2Q5TC9xbXJRMi91QmtBOXRodzNUbThPWmZSS0t6ZENUbGExTGMwaURKUG5rbVRvZnpkcnJmVXQwYmYrNEp2UHYyTFkxamZVSGt3UEhaVjFjTkpSbFREU0pGUFRsQklsNU5tNk9xbXdKYTRIQ3JBcjVLaHdsbkFpdHRRUVpEUERNQ1I4TTlkWHlxRXBBWGJwVGQyME5YTk9PQmlvSXpRTWd6K3FvSUJ2NEtrNDU3TmlKWUlBajdrTFg3NkRPOGVoaVlRWEpUMDV3QnJSUGFqZTUxU3R2NkhOMVEyVGtnazUzS3ZQSi95bFNwS1hKR0RQbmZ1WTBaWXczQ0JCMUtlSXdJRlZEZHJaNzU5dU80ajI1UWREUmlTYkhCNTN4aUt6MDllVk1wSzA4MUN3N3NnVHBUVWpxalkzb1pKZVlHY20rcUhadlNvaGEvMVplN2QyZnlEbDJOMUVHZHR1SE5aYjU2QUQwaThvQXMrRGNXRjYyc3F5WnpOQ2JQbWpwVmFjMERtRnlqZVN5WkE5RWJNRTVteHY5MDlOYjRyZ0dDY3N0QXZvKzllMy95YlYvRGEycEVQUDVYNytVblJFUll4WTE1NmNBa3dxRDJVL2RucDRhODhIYnUxdCtWZnJqVldSN2svSjBlTDdPbEowWlFRdEFjQ21KRXBVOFJIMjlyb3lpNWUzY3pCa0c5SFc5cy9YRlU2bUp4ODkrOFFCY0pMTVU3UEYwUW8yWERoZjhkbUxhNW43dStudUc4WmFTSkdiZURpbklEaklvdWFqMTF1UGp0dTdab1FYaUthQVovS21SSVBwaEdvdHViMVVzMDJjTXhCbU5DcElEOXIxSmorNjVuSytrRHREZGQvNHZyUlA3K1h4MHhsY3hncFo3azFHNTdxY1FvUlNpNTJXelN1MGEzdDlQbzJTSW1KY3BVNU9PckRSSjUzRDhFdkZrd3JlUnY5bWt5WS9xdWE5QldCM0FQOXRDSWtrMFdleUNPb2dDVWtWRVVsRXF3QTQzbU01dC96azFlOTd0UFgzZnU1eDcvd3loODk4OEFKV3hWb2phSWxGcXp6dTdhRUJGUkFFYkNsRXRLNFlNUDJLQXNBTVFac0hIRkUySWk4ZVgzYnFUK3QrZnhWRXg5OGNPTFZ2MFczUUsxV1BRNFc1T21VS2RkMHcyV1lzeWlYa3FFcTBKVmxsZjhKMElUVGwzS09aOFdHUU9UL2JDditZVWlhTHNWOGZEcUJTUk5CYmFiMUlFUTQ2MVp5ZzZXcFJIVFNSUVlBN0ZSUnFWMFIrL0VMQWVDa2d3eFg0YXhPKytjSXdKSFNkSVZVTVQ0bFZPNEpIbG16aXI1WmQzN1R1V2ZGT2w3aUV4TUk2WjVjSFVXMDhwRTBtSTBkYmNoWHU2RitqUWZ6bUN6UVMxYURhRUhER1o3MXp6dFdqUXFCa1d0K0ZMeTJOMzdQQ3dGZ1hGWTZqT2RrSFFoeFpIOTQyTmNSUWtDdzYyaCtEYU5aakJYZWQrL3RyL3ZranA5KzV2RXZ2dkpIenp4NHdsWUYybWM5R0xNaEdXRWRPVWMrTXdCVmdSQ2trTllVa0FVYnJpU2ZCcjhHdDlwTkpVSkE4UDVoSkF1SStPYlB2dU1tQW9MZTBVUE5VZXkwWWJvSWlXVXR6cXBlSHlKRXlYNWl3QjB0S2swQjJDNENPaUlHbjV6a1AvVEJrUXVXZUZ4R3F5WVBsQlAvNzlINFYyK2tvTmUzRGZRN2M0ekpDVENCYmhVQ09PNUFxMVpOWUVCVDRFQWVIb0dxUUJFZ2dpYUt2eDBJMzlybGU5czZERXFBMlFXYjdnWDl6dG5IWWdnaVJWU2ZXUVdoWUVGWDZMSjJXSjZsN01WcmlkRVV6anJGSHg5cmV1LzEyc3RhY2N3QlZWdCtlWE93VHhHWHRjT1JpMUhsRldKTHlzekNqQVNYS2FCU1J6ajd2ZVBKTCs0TnYzMjltTFArVlFuU3hYNUx1RXI4WDYrcC9kY2Jzd2NteCs3Nmc1c3NpKzdvY2tOaENkRWNLRDArTXZHdGZjMXZ2NnoyUFpzd2FjcXp4Zm5Fcm1rUXdaWElsYW0zanE3cHByWW82UW9GZGVxdXdZbzZjVlZINnpldXp6MTJJdjJYdTdHS2dNVktCUmNDQXJJT21nSzE3OTlTUHB5UVl5VXlGazF3VFBXaVZCRWNQaThvaEtJTk1ISVFXNkxSTzlkUC91TnpVSW1tWlNNTmxVOG5ZTXJxSHZKZXFubmN4WVJFcTRKYWdlS3NZckNuYXpqbUlsMTVWcUtmdkVTcmI4ai82QVI4d09JL3NDcW1wK0dFamQwT3RjZm9iYjFvTWpCVU9tZjRCbUorUGpQSnh4S0lMT3dQNVFLR0JrM3daQ24yeDExUUZaa3VrNjd3OFhGSVFGY2hVQ3hrQURzUU1FQ0VuSVVENDllK1pzTVhIbmpkNnMyTmozeC8vNWZlOXVCWDMvN0xuN3p4NXc5LzY3bWFwcUJnaGdFWUNtZHRZMDJ0TzFLVWd4YUNVNWZPVzE4V2JEeFZ4aGhpSDl6Uzl2aWJzL2Z1bjdqbE4raW02cXNjN3g2bGJVUjF1cklEcGpQanljR0FJaXIwMStXTUJpcGt3WFpORThQUVg5d1MrcE8xY2lEdE5UN0t3Nk1RbU5PQW9RUEhIZFFLMUNvdzJadS9FVVgyTTgvbGZuNnc2ZG5YQU1DSWl4Rlp2V05raGlkQzByU2xMbFRIaHlMUHFNNXBCSVVxMGdwblhhVG5kaE41bmh3dXl6MW5JVkNwN1VsR1NDdnRuVERXMWFIUkIvT2NzcmNnMkM0bThtSmJHd1cwT1pZVk15ZUdpa09mcHdudjE2QXBnRUN2U043NUI5YzBtMzczc3NvbmsrZWt4RzFHcjJiZVArSHNHaEd2WHAwZG1HVE44ZnQxRUNGWHhvR3hIYS9iOUlWZnZuYlZwc2JmZlcvL2w5Nys0TmZlOXNDUDMzRHZ3OTk2cnFZNVNHTFdzaW1vdzVieXliNnBqaG9HSUV0T0phWVA2TlhqTUFsRVZENlQ0Vk9UVldiZjBSSWFEZkdPWHJKOTJHWEJBUFJsdS91ZGU0a0lpS2hJVzRYN1RvcjZBSVZVZGxGeFo2a05jTElnZjM4U1JRZVJhbk93b3FBWkUyLzZqZDdSR0hybjJzckdBUmZsV2JFNEFTWWpTb2dMakVya3psbm9UQ09vOExGeHBFdVZjcEtBSENzRU50ZjUzNzRWQ1k5QW8zRENSczRtMzMrTm16S21KTndsaSsxZFN4alRYUmlZY2RhdCsvUTF3YnUyNFlTN1dGZXhJR1J0TlBscFRTUHk1bUp2UFUzMUNwMExSNG82SDRYMWliOTV0dmpFY09PL3Z6VDQ3clVDRVVKK0xvOWNJMlJ0UEd2N3IyaHErZTBmNjdkMmovejF6dHhQVDRqdWlBaHFTNGJDcEF1WnNkTC9jYXJoTFplRVg5WERKek95Nk16Um9KbDN1bElpYjlINlp0cmFERnNpWThGMllibklXckJjNkxyNDQ1Nm1qKzZZK01ydlNqOFl4cnBGY29ZWENsZGlRdXAvdkNwNlc1ZHpPa1Bxb25POHkvQnA1TlBnTElOOXN3aUlvQW4zVkZJbVM1aEU2S1BiMUxnditVOEhxUzFVa2NqMmFjaWEzSmRBWU9IekNSQk9PckFacTFVUTVsOFpEZWh6cDhlQ3hsL2VYRHc1V1A3K1dmU0tDN3lHWHJsUlpleXlLSzJMTzN2cHNoaUdTbkRuQ3RFUkllempnOE1ZTFNKU0xXbEJsUjRrOHV1Y3RVUkFEZTFvNHBJRHY0WmtrWjhiUmxDQkNzZXhBYWtvQ2lSRElSRGhhQUlsNTdhUFhQM2hiNy84dGUrN2ZOMEwyZ0tkMFZDdDMzVWtXeTZDb0lER2hiTFNFMUhZelQ5d0N1MllIOTFHQkU1WktMSytQZDYrLzg4eXY5cWJmdmV6V0tkQUx2VGlBUm1iV3NOMGVUdEtka1YyUTB4NVppd3prYUFDcHVPZXpTTUFqRGpLTlcxS2J6MVA1QkgyWVRUSGZVbUVwNXludmV4Rm5qRXAwYVhBQVN6R0pzMTZZSEw4cng1cSt1NnRTbGNBZVVhZmkyQzFmaXFhU1E0TGxkenhrb2o2UmExZWhhRGtmZmVzQ3hjenMxMUZobDd3cmtIa1RBUU43MUVVQWRVWnlMc1R4Y0ROM1NqUDU4cFZVTGFwc3c0UlA3TG5qSkxlSlFwckVNU1RCUjdPOGtpV1UwVVViYXhSN1Y4blV6L2IyZlNybDFWT3d3THljazd5VmdKQkJZVFVwNStPM3RnS3Z5SmNRU3hjcjhEc1BSakhKbEYyYnZ2bzlvL2M4N0xYdk9meU5WZTJCcnRpb1ZxL2EwOTFXSGthdndMeXlkUElXd2lmNHpMTFhNWHhCck5Ldi91SDROZm5KeWVIUytnS2lMZjBZRnpGWWV0Q0tyNnpyeElCRVExcFV6NXdvbkFvRmJtbEhVR05OS3FzQ1R5cVk4bVdqNTFDd1o0ZkI5dU1sWXI1dmVIOG5tTU45OTlVMlpobmpNeE5QalBnQU4wcUdPaDM0S3QydHBJUjBqQnBWbElnM3ZSZnNnbXN2SEFsbEVwS0ZpSFlRMm1rVFlvWUY3amdtQVpWS3hnSUx6MHBhWHNYYW4zSW5vL0d3RExoTXZrVjBScEN4cDJmZWE2S25FdXI0cWdMb1dDZGR3dXlMVVZMMEMzYUl4OTZTaWpjOUl1WEtkdnFjZGdSV0tPaVRhREVzR2RkQlFHb3dDa0xBN0xtQzF2ajk3NDArOFRJK0FlZllGMFJMYUVsNW1DR1RKVHIzcnc2ZkZPclBKRmhYcXBMTDJ2U3lqaHRxRWZHbVdQbVNnVEp5Rm1ZaFAvamw5VGRzSDcwZFQrWGd4WWFMM1lpV2hES0RrejRYcnRCcTlGbDFsck1ZOXlSNUZOaHFNKzdJRTBJYStVbkJxM1RhZSt5eDc5NlEzbmZSUEczWjBWckNBNERqSURPcHlhUm5oWEp6Y1kwcStLNEN4WG9VU3ZNbldrWWhDSmpzREw0NmxmVWgxOTd5ZGhiSGtBZXFOY3U4UHk5TkdhRU1HRGhpS1JiMnVpbVJveVc1cWhrZTJaZW1pTDNETUtVMWFVcVhCZGV4bytaVFpkTmx6eVArckRCcHliNTBBU2lJQ0dZd2JPalRFM0FkSEE4aVdTeGZVdlRkVy9hZFBPblhuajFLMVpuSjB2c1N1aEFMQUNIa2JOREwya3QzbmVTSnlRaWN5K2RSL0lha3dDMGpkRVYvM0g3NUZkL2EvMThIR3UweFJZbGFaczZvblJGQjhvT2loWlVBZHRCMlZrdUdjU0MxdWgzVHFVZ0FZZVJsM1I1T3hyQ3lKUVExUG5JR0xJMkFsUG55WUFmR0hUaEo5UVFvaHBLR0xubHA3RS8yUlo0UXk4YzRLZ3o0NzVsbnpPQTJsT0tBVUhOSGk2S2xoQWl0T0M5OXMzU2N2R3NXQU9DbnhuaW9jeE1xQ2NadFVieG1YRnRSWWcyTnFCVWJWZmVIVmM4MjBjNjUwOENFWTM3MC9LSlBuNm1uL2NNOHU1QmZtYUE5d3hpWDNMaTlRK0hibGpuZTBsTDVmT1RFbVhNaVlCZFlKMlMrdWh1RGE3LzFpNk1tTFpyZ1Z4RG4vVU9ldDdEeDVOSWxqcTJObDMvNWxrUGh0YzRwd240QkQ4elVDV0g3SUVJRWFQS1c2WUpLSkI3aDJETEdjWWNBSVV3Vk1McXNMaWpCMzJFTTFhbHArc0NaMStHSWhEVDBKL0JtWW5rajA4ckVUMzM4R0RtMjBjb1pvZzZYMlhJOVdnV2xpTWY3MFBacVJRSU1NVzlrcGg0eTYranQxK3FiYXlwN05hekNabjlsSnFNT29FZ1lkQ0ZnK3J5WkpvQ1FPNGZCZ0dLQWlMWURreUh0cldqM29lMFhSRS9pTUE2bklBQWd0cnptb0NKcWxqQWViR3ZJMmw3RnpVR2tGbDRUSDQrOEtMVnJMMHN0aUFCdGdzQnNhNEprcGR3YVpzSFI0cU9rRFdRSC8zb3p0QzJ1cnA3WG9vYVB3WnNFQXNBYUZleFdvWERLTThWenRVSWxvdGRsckdwdnVYeDI1WE95UENmUDJJZVNZbVZVY0tDNldoMnBJaG9lbWRZanBjcTU3MFFCQ0ZieG9vb2JXNUMxcTErRlFRaGF5R0IydSsrMUZmcm0zanI3MUJIUzJpbVhBQUVJV2NqWm1EakNoVEtpK2xmU2xrWmE1NG5GMEFRSkhQT1lsZENBMFlkMmhDci8vejJ3c1A5ZGwrV1Fpb2tvQ3V3WEhsa0RCcFZYM0F4RUNDa1hJeEx4QVhxRkpUbUZvTURoQ0YzMmphdS9qczdKTnowMjM2UFRvS3hGS055RVRBUUptUWM3SFhvcWtaNlpRc1NGa3F6NW1ESkNPZ29XSExmV1JqVjdoY0RDbWJJMHRNbklnaGhIeDhZeFJrdXFpV3dFd2dZYytZUEwraVJqRVFSQXhtY1RlWW1Db29tUEtZdTZvTlFTS2JLK3JZbTNhRFU1L1ppdFlBejk3Z0dUVXRQQkc3dmpONitiZlNWOThNQm9ndXd4Z2hnSUdOVGU0U3U2UVlJdVRJQVpNdkw0cDR3WUVGZlh5ZjcwODZSQW1vMWxCeElGdHM3VVJkQ3lZYnQ4dUd4T1lRamxWQmtwQ1hhVkhUUXhPMi9oaTRxbkJyUFJjNmpQZHVNcUpnUjlmV09WU2hYOWlPbGEwbHRiVDN5UzRra01LQUsxT2dzSlQ4K3dQMUp4R1lJM21Rb01sRzJUNlZEdDNhREFHc0JxUXF2UGpYdlQ4d3dGUGdVM2p2Q3V3WlFzaWlnVThoQVVJY2dxak5LM3pscVRpYnJ2M2Y5ekZjbVhlaXo5bUl6ZXJYeWd4UEZueDJyL1l0TlBGNkVxcGpsSXNnMURHMVpENGIzcElWVTNqdktnK25xUG5lT2hFK2prRzkrYU1GQVNPWGpDWXhtNXdUTjN1eTdOaXhlMDRsVEVpTjJGZjNrNWNOemd3MHAvTndZa3Buc1Qvck0wL21tVDIwek50U1ZUbVNHUC9LMG03TkVZM0JtRGc0YktObnlpVE9WZW9HbmpMUktaRC81bkdQbDY3NnpvN0xiQ1luVTNQQVhnQVRhRlVoZ2JNcVFZeDRZQ0NsOGZCS1RlUVIxQUxBZEZHM2ExazV0a1JrOUJpRmd3OTQzcm5lRW4yOG9JZ1FzbDgxWmFpMkNrQytEbWE3dW9vWUEwaGRQOGFvcWxybHZMNUowZ040QXJXMUMwVnJ1L2gwcE9zUGxJK254VHo5Yis2ck84TjljQTBWRnd2RU9MU3B1c25VQ0d6VUFjL3BLdlpQVENDY3RaRkgzc3h0ajc5dVMrTXl1elBkUFVtZVkvQXRFZ1FTNExMUDJISnBWMVkrVmJQZzFzYVVWRnNOZXVOTmNKWXpiSUdyNnlTdDhhMnZsNGRLRnM5NFhSOGFobGJXMHBoR1owcHljL0R5SWkzUjBWY2ljNWFaTE1BQ1dHSEsxbTd0aWIxeHJIMGxBZURNS0kyemdiSm9Ic29nczBBbk5VMDRNTHRDcmdER0hHZVI1YTAreHNVZ1g4ZS9kbEx4M2wvdHZBMmhXbnBmcnN5Y2ZZVXM4WTlQbWVucDlHMUxsT1pwSDNtcjliSnBQSk9lSG9WaTRrOGVyRkFaVjdDMWdzRVQraGNrc0ZTT1FXVXNURTFRYnBLZ2Zsc3ZqcGRpZGE4MzdqcGNmVHFCbmJuU3JBa1ZHdXJJbC91ODNTRm5PZkdnWFZnbzRDeGRLQUtSdGlnZkVkYjBVOFNGWHhrUU9McFplQzNvUldKMWYxVVh4MTMxWUFVanlSRXpGOWs2S0IrRzRmRGJOdzNtRVpxVUtGSGdxSzZWN3ptUi90N2Y1cVZjQVV5NXkzcEJhWU1RRm1nbm1kQlNvb093aVY0YXFrQzdjd1R3SERXTlRIVktMMWtxOEMwN0VwOVA4YUIrUFpoSHhWYllEY0prYS9JVkhoMFZFRjllMm8zUStFUjREbWdKVndmNWhTdWRFWjVSaWZsWUpxaEJCVGJTRlVHTWt2M3M4OHFaTmlxY1RBaURKeVBPTTBRZ0RRUlZBNG1OUHhtNWZLZXA5bkxVZ29Tb2FCQnhuZ1p6aHZBZURDQkh3MFFTZkdLL2VPVWFBNDFhV0JiUDdHcnprYzZMTVI4Y1FObWEyVjJMZmtIaE5KNDVMakRuenBaV1hEeSs3VzZPejdjckh6bENwYU81TEp2L2pWTU1ITm9IaDY0MDBmZTVLLzViNDZGL3Zrbm1Mb3NaTVRpTGlRN3JFdXdhZ0N5Z0NEU3IzT1lrdi9hSCs3M2VRM3l2YkE0UHVmTzZWeFlnS0JBaGpFaGFxTEIrWkVWQ1JMUE94Y1lRTUVNR2FtbjI3b3NqWU0vZWxUclgzWk4zK2pIOUxIUG1sNU1NV3V3S0FTbHkwVUhZcXI1SWdaRTJvcXJpMmgrb0R5RmpQcTlKM3NTQVpQaFVoalZORlBwQ0M0MEpmcWwvR2d5MUZlN2g4S0RYeCtiMzFkNjcyditjeWtJYU1QVTBmRVVoSTdMTlJZZ1FKbXpRSW1qOEhBOUFJS1F2SDNPQUhOalorNThYRlgvZFBmSFl2MVJpaVptRjI5SkpYalFITG9ZMHI0RmNXNUV4T1F3RkdiV3FQUlQ5MnVSQkt4UXZoNHFKU2pYWnBVeVAxMUNOZFd2RDZYcXdIUWdBcXljRlNaWnEwWFNSWWU5bGEvOVlHT1o2dlhCQUNESlVQamFEb3pzbUF6WVpHY0lEVExuUkN5emxCc0orUWRqRlJ1VTNCTzdwOW0xZE92UHNSSEp3RUFWSDl3a041TDVvVXdFNkh1bUwwcGc3a25UbnRTUVFFZFQ0MGlsUzVTdnVFeXhReXFvaXdNME1YSUVVZXk0QmNzV1EvdTNjbW5ueS9UNkF4RE52aGdpM2kvdGl0SGNuMy93RUNDTSs2ZE43WlRVdlpLYWoveGczSmYzbWFqeXhWM1NBZ1l5R2cwWTV1MnRERS9VaytuVVI0R1lrRUJTaTR3UjNOOXM1aDk2aUpPZzNrQ1lremJlK2l6anJrVEQ0NkNwZG5uTnU5b00yVVkrLzhaZTE3cjlPMzFLRTg1U0pYTVU0WGFGWncwZ0Z4Slkyc0MwNFhPV2RDSWFveHpNTXAwUjVGREhBV2ZWbDhLa3hMUG5hU254MkU1VlNtcUtrZlJENkZVK1hpTTZPaFY2K0JRVERQU3hhUkVGWXdrWEdlRzgwK05wNytqNzdVai90U1ArNUwvYlF2K2U4bmN6OC9uZjNtRWRmbW1yc3ZtL25HaURQSHhka0JWb3YwMyt4VkRTWDRzazdabi9XZWxuS0lvQ3IrU2hsbzBSTmlJR3FnMytYOXd3Z2IxV3YyRERnU1VkLzg4cTBxUUpBSGhpc0pkdTlQQ21IVVJKZGZ2TFlUcHlUR25lbzlQRXVpVWliUUVWTDVkSnAvZTBMNFlRMlpvNS9aM2ZEK1RmcTZHamxTbEtreW44N1d2SHRENFBLR3hOY1BVMVNma2VtU2pKaVBoOUo4Y0F3aEZSMlVlUGRqYWl3VXZtdGo1UU5ETGtvOHZ3L0tBUm9GQUV6SzZzbG5JYUNRUERRQ0tXR29NQjJVcG1iZjlDemRlNWZSak1KOXg5V2dTczBCbm1mRGQ3NVFnSFFKY21vNWxTcFMxQzllMklPb2djejVsMXIvSytDUjV5Mkhkdzd3MDJkNDk1RG5FNy8wdStCSTBSYXlUbWJHUDdlbi9zN1Z2anMzUTlGUmNERHJzUlVJRXl6R2ZydkNpTnVvVnArREZVTFp4VWxYZldGTDg0OXVSdDRjK2REVFVySm9EaXhMd1h3ZUJDRm5VbnNOdFllUlhSNnpYQUI1QjBubnZFM05sZzhpT0M1S0xsM1dRaDAxU0oxRDhRV0FaWE5mbDRURFNzUndodEtRQUVTRmRBRFF0ZzVTUktYaGpBRy9ob0xGaDhmZ0Y5VWZ4MmxHZEluUnBrQ24rZVZNbmREdlRrZkdEVCs4dnBqTmw3NS9ITWRIZUt5QUduMHhEODdGd1lBR3FJeWRGclZHNlk1MnBDMFVwM0xSRE9ncW1PVnp3eFUyN3pRSWNGd0VEUXJwOHlXdksxL1VTcTRKSUJEUTRjckZ4bG12Rms0RUNWaVNWa1RKcjRGWkR1WURMKzlSL1NMMWw4L09TVVI3NjRha3JIZ2hBS0czcmxicm9za1BQWWxXelBmOG13ZXZJY0dTdEhVRlhkUExRMmxPbXRNZHlRdUN3S29pbWtORzNKZjl4a0cwQVM1VjJweHNTZHRhNllvT0RHWDRUQXJUYmVpYVFCc21idjYxRWd2WGZQa0tBRGp1Z0FHZEttTFJhMVNjY1dIT0lyZ3F3R2dXa3NtbjhtVEpTbHIrRzlzd3ZwUlJxeU1SMUVrUjBOWDVHUkhKMUJqSTNuZGFhd3BxdDNVZ3RZQmtkUFhkTXBwVVRCYlRuM3d5OWN0QnpwYU4za2hvZTJQaytoV2hhNXFEMitMS2lrRHFoOGNDcis5UkdxZkMzd3dqTTR1U0xSbU5tcnVuVVBqRnFkby9XNGVoSEZRRlpZbXdhamN4eXREMXBmMXpFTkF3WHNMdUNmaFZxQXVUZFQxbmtkbTVGZ2JDS3ArWXhGaCtwdFRxemI3TmhuaGpOMDR6UnAwcXZybEx3anVLVDBWTTQweEpQdG5QVC9lTHJuQjVzRGo4d2FmcTNya2hjR09yUEpPRFNoREVFbnc4WFhQbkdtbkwwaE9qVkR1M1NoM3g4ZUZSUURyUGxESVA3NHYvOEVXVjdSWXc3TTRuV0RtQVFhZ1RNQmtGT2QvUEZGUGFaLzJJTkhnSEFBQWdBRWxFUVZScGpHUVI4U0Z2d1hMb0JSM1VPWGYyWlNDc2NiOXJQaklZZWxFYlo2c0o5aTBmaW9ERm1DekFVR0c1U0plb3E0NTI5RUJYcXJENS9rZmdrZWZ6bG56MEZKOU5RMWNSTWVhYlgvRlVvbXMyWENuaWZqZGhqdi9ON3JyWGRQdnUzQXhkUjM2K3Q1Q290S3dRY05CR2Vtb09wbXB6c0NDNExvWWRkTmZFdjM2anZ5YzAvSUVuN1FsVHRJWE9idzRtb096QTBHaE5JOHhGRFNEbndhTjNQNytLdzFMblJyQmNsQ1J0YTZQT1dxVE95VVY3cGZnbGw5NUxId2d3WGIwcjdBN2s1RmtiQVFXWUtuaEhkYkc5Q3k1WEVnTWVOZWxNQW1mekNDK1FOUFlXQ2g3bm9rWEJMTis2bVZGN1lLb3RlRTAwK3RaTEovN2xNTW9POWczSy9lUHdLUWpyQ3laN0Z3ZWpJb1c0eTZLMkNMMitEV2tMNXRRY0xCa2hIV001UGpHSjBOd0kzbVVZQXVGekNtK1YzYkpRTldiSUpiV05ITUFQZEFpVUFkTkZWRWRqR0NVYmduaWtVUHZlellVSFRwVWZua1RYckg1ZkJYQ0IwWm5Rc081cjErUWVPQ1QzbHhGZml1SW5DTFpFMnFhdUdHMXVRWGtaeWdBdUVQWExTVE4wVzZlN1o4VDh4U2hXYWJDNHd2NHJPclFtVGpldVJrQ0g1L3BnTWRhcTVqY0hjbzhjYUhyMFZnQVljWkZtQkFndVlBSHJWQ1FrSm1RbC9HTEFyeUpqOFVnT21rcE5nZHlEL2VxNnVMTE9qK3hTNlVISGhVOUJXd3lPTysvdWs2RzRRL255NFVUay8yejFQR0dXKzhpN2pIb2RMaWJmK3JDVHR1byt0Q1g2dnMzKzlURzlSdGVhQTNxajM3aTh3ZGNaSWFpUkQyeVkrZGFRTzBjWmhnbE5TSDFodDc4M29uYUVaTWF1ckZCYmRSSFd1ZXk2U3k0WlBhN2N2aEVBOEMwc0MrTzQ1TmNvNG9jOXhVR1JqSUNLbE1YSHhoR2Ewc1pTQ1dNbTZuWHhaOTBZRWhoMnFyZUJMUTR2dXhQVFlObThkNFFmNjhOb1ZseldWTnFiR1BuSTAvVi92ajc4OGs1NU1qdXp6aWF3SlVFVXVLUyt1R2R5VHVtTksvNlk2RTlNM3ZGUTRJcmVHU0tiUjdDYTEzaGlNeUlFQWlZbFpMWGVYMTJGS2ZuRUJBSTY4bVdBNlpvZWFvMVVNczgwYXorOWxQMzJJVVdCdmlYT1JaYzhOdHdGREllU0VWQjRzc0RwSWl3SGxrdGJXK215RnRnUytmOEN6dk9GUVZNZ3BkelpUNDRyMnFPaUtTQWEvU0x1RjNXR3FETkVuVS9VKzBTRFR6VDRSVVFuajRYQWdHVHlxekNVc1U4OUc5N2VFSGpmWlpYWjk1emdUUUJUVHU4cWNOaEdmbW9PWnNBOFp3NzJlblpURHVyQ3NjOWVIYjF4eGVoZjdyVDY4NklqZkI1S0hReVVIZHJVakdZTmdpNENvZW5pZ2dobEIyV1hybWlsbm5xa1NqTU1QWSt1WWpxd2xtMHh1eENZWVV1MUowYlpzdm5VRUJxbVhtYXY0YXplVDFkMVRha3pFZ1JCVitTQllWZ0x0QVV6NENPa1BJc2JBWVBtTTQvOGhGRVh4Y28zYS8vZmxheUl4TmNPMGNvWW5acVV2ei9GeVNKaVdtV2N1b0JGdlFyb2hKMFdyWXpSN1MyWUtNT2FWYUlMRzN4MEhNbTVpV2p2LzVpLytoR0pITXRVRktqcW9vcGFBQlFndy9BekdvQWlRNEphYTBBRVpzNDdTbzBlL2FQTzVLZDN3b2VaVU5VTGdpZGNUUGxzQlY3ZHBjWWo2Yjk3RmkxWXNDVnA1dHdBQUZtTERKWEMrdEpQdnVWUTFJZUFocklUdWFVeis0Vm5aZEpCa3c2SFFRU0hrYlVwSHFMYUFDd1hrbEd2SVlPeHR6NVUrL2FydEUyMUtEUDZYUVFBQXZLTVhyWGkwekE3K1drUTl5VlF0TVNLb0xWNzNKb29oOTZ4RGdPZTFmUlNQOFlCb3Y2WkxPdlVKYUt3WHZ6OVVPRG1idldGRFJoZU51WGJlMGZhTVBuMjN5Z2hvLzYrVzhXMk5qVFY4YnBtU1NUSEM5SjBRVWo4MzRQcVpmWDY1aW1qbml3akxXZDZVaG1vMTV6ZGhmS1R3NUVYdDJHc0FFM0FjaEJRMFk3eVpGN1ZZZmlXWXZJTGd1bXlkQmZqR3hKZ3VZajZFZFJtQ3NDS2dFcnk0Q2djV1FudlZNSjRHVkZWdkswYmt3cjZ5dWZOdXFwWXVlaGc4TUZ4K1ZnZkg1dWdvQzYyTnVWK2Vucjg3L1kyZm5STDZKWU9lVEl6bnpvakNGbExidzlKeStXOFRiT0hIVnVLenFqNVFIL3h4R0Q4ZTlkVk5oWVk0K2R3cjd4TEdoVUFrSlZWZXFVWThBc2VTQ0Z0b21RamFJanJWbEs5SDJtcmNwV21mMFc5SmsvYWhSOGVqZDNlaTBTcFlsbGJWYjFrU2FnQ0FueHlBdWtTMVFacFJ3LzExaUkzdHhmbWZ4WXU0RmN3a1JOQlFTdkMxb2xNN3Y3VDZhOGRUSDVwWCtKTHp5WCtZWC9pSDU1TC90T0J6RDFIY3ZmMmxmZFBNa0cwaGtTZGp3VFJpdURrUHg1US9TTDYyYXZoTTg2TmZUMU12VlU4TlFjZnNsRm0rQW5yVlRpWTA1dmtnUWlPUk1GRk5CaCsvN2JhVjNTTWZYS1gxWjhUYlV1MUowM0RLMzRraXJ4em5FZXpNTlRGaktqK1J5QUlsb3VpUzVldG9BMU55Smt6ejRRaXVHU3hhUytXMFZvT0dDQ0NMdlMyUVBGM2czTjAwZ25JMk5RVW9PMmRjQ1NLTm9nUTBKRXI4K0Z4QkJZWUNMMUM0TEFFQVhFeFJ5QWFVNFNML2lrMmxpSHE3OW1SL1AyUnpEM0hhVzB0T1E0LzJzZDdobUU1aU9uUXp6OGpQVE1IMjdTMmxsN1pnckVTN0NuVFZrMkJaSGxnQkFKek5HSWNwcWl2dXBrNVlKazVvVUZmc3VQTFUyMDh5MmdBVkNCdm95RkFqV0VVYmVpQ3oyVER0M1ZSd2M3Lzh3bjBLRE5Cc0FwWXdNak13Qkg5eE5iY0R3L3hHWW1hNWRFcnZCZGhYdnRFVmJnTW42REdpQnpLNjVmRUE2dWp5WGM5aWpvZ05CVTZlQ1ZoMjRVZ01LR2JFbTkvRElxbytlZnRBSERTcmFReGlvd2FnVWFCSTA3RkxnbFRYS0VKay91VFZCdVFlVHYzeTlPUjkxOUdtbW85MGc5dEFmV2JtVi9oZGRicDhLbHozbCtGNUVqZXQ2a3U5TFpMTWNUZzgxbGVkNnZwdTNZN0p4STE5OTBNUnlEbm9PUlNmVUJjMjQyZ1FjUnl1Rmc4TkI3NzhLYVpidzNQRmVTU2pIcmtmblJDTllUYUU1RUZ4K3RMb2RZYVJNQWxpd1FVUVV0a2JCZ1FoSVVrbHFZaEdiV0JPZTFZWVpYUHBER1NSc1NBWktpRWlUTDhpbmhIRC9JcWpwWVJQaDg1SUk5cEZkV2hDVDZlbEkvMThlRlJ1Q3c2b3RRWlR2ejljK2tmbld5Kyswci9sWTN5UkxZS2NaVUFSeXBCbFlpNE1NZllrWFFCZ2NtdkhBcS9ack82TWxMWjZyVWR6aHNrUEZhQmx6QTN6d21PQVdnQ0paZVBqY0YycUxOVzdPaEJRS3RTZ3BXRWJrcDllcWV2MmE5dGJaQVRKUXJxOEYxUVR5WURRWlVQakdNb1RTL29wS3U3S0d3Z1pWKzBBdC96aDhWWW9hRVY5cTdoNUw4Y0dYNy9ZNVBmUGxvWXlNcm1tSEpWaDM1enIzN3JTdjIybGVwMVhkelRZTGxLZHUvazVEZU9KdTdlVS9qZEFIV0V6Q2ZIU2srTnhMOThIUm9EaTdqYXo5SXFrb0RQYzd0emNJbUdzTUJLRmNjY2hNNzVubGNyTFFMaFlQQnRtOEVZKy9pdTVzOWZvVFlGNWVneWZCQUpJTUdEcVlvN1pzeVBEU3VvM28vcytUdGYvdGVCQ0xhTEhHaGpBd0lhN3gyQzR5S29nNENpaTNRSmRmNmxkN0lJUEZlbG5CUFkwVnI4NWhIM1FFbUorNUdhdWdJRXBHMXFDR0o3Rno5NUdnVUxJUjFoZzA5UDBvb0k2Z05WTFArOEpWUktnaFUwS1JoMUllY21vajFSdzVSQWpRQVEvTk9leUZkV0ozNnczMG1VNjk2NW5tSzJlMnlDaG5QVVZVdGR0WWpwS0xpVktXRzV2d2lWd3RJdWg3YlZ3Wko4L3pDYS9aWG1rTENPMFN5ZlN0S3FXcVRzU3JMUmRoRTJLR3h3dWdTZk5tOS9pcUpEUWk3Wm91Zjl0SEhHV3FCZHdTa0hFYUNqeGl1SU1oRVZyY2gxTGVsL1BSeTZZeVY4YW9XVTVPVU14aVZXS041TEVIN24ydVJmUEpuNzVxSElKemZpd0p3MzR5S2dMS21qaHM4azVNbFU2UFplNjR0NzB1OTVPdmExSzNGTXFWeGs3emM2akI3ZCtXMHE4L05kelEvK0NURFZUQklXY0FBR1Zpa1ljcEhuR2V0V1ZVQkFIaGtGZ0tCV2V1aE00TlZyOUZzYjNVZnl6a0JhdjdvVmNxbUpTakkwUVpyS3Bsa1p1YjBra09Wb0wxMEZuMERDT285OFQwUjFEdVR0cDRmaTMvNGpPTUM0VlJudTB4WWlPbDNlUVFQajJYOCtMQnBEZ1ZkMVZyNlNZeVRsbks0WVRhQUU4OGtoLzlvWUFFakFjZURUcUxNV0ZxWVNKcytqODJjYUxrTlhLT2FITTlWdjVsTlJjUG5vR1B3YWdNcnM2MVBFdTNwUTFyRGZRbGhncVN0YWdmZVpvQTRCSHN6aXhEZ25TL0NwQ1B2RWlpQ1huTEVQUHNXV2JQbktOU0tneXRQWkJVZE9RV3hKZ0tHSm1aeUh5OVFhTFB5aTM3Yk1GVjk5UVdWamhwR1FDSjV6WlNTZ0UzeUVIRmZhMk00OVZjdEJQRXdiVjFCWERDVlpoUmhyTTlicTVaK05sbjk3cHZtTDIzbWtBUEtNakpaeEtjNkZKcEFvSVYrbUY2MmhSajl5RGhhaXRmLzNRd0pNMktqSmZpdnhwdjhzL3JwUDI5WVNldCtXNEk1T3BTc0FBNVc2ei9SRjlrYXpES3hqNmRMT3M0V2RJK1Z2SHk4OGVMTDJmVnZweGpnT0x6ajdZdjVLeWFQekZCa25IUUNJQzdRb0tKeVRpTWJVL0dTNnFJa0UzM0ZKOU1hbWtZL3ZZdHNWTlViMTFkQjBtWnFuV2dZTkRXRURBWjFUSmo5MmlrZnppQ3pERGZDL0UxNitQV05UZHcxZDB3Tk5RYm9FRUJTQmlYejFPc3J5SVJtNklpMVg3WTJxWVRYM3I0ZlFObGUyeVl1REd3TGltaDRRSVZ1R3JrQ1FQRElHaWVydnFnS1VHV2tKQXdpZkkzZEZnRWJUbFdBQXNTOXUwK0IzUmdwamYvMk1hN3JLeHJobmRTd2Y2K01UU1dnQ1ViM1NkTDlNTUdBQVVtS3ZRNWZINmFZbURKY3FEeDhEUVoyUGppRXpTM1JDTWpTQm1CL092Rm1XQUxMTWdxSkIwOVZsVmRvMDRDeFFKK0FYeURqVUZFWThoS0lGUmZDa0diaXlBUk9GNHMvNjBUSXJ1RmVCTXM4RXdZTEM3MXlUKytwektBSytpMnE5UllEcElxVFIyaWFVSEI0dDFyNTdzNzF6cVBDWi9WaXRnR2FGYUlhQ0VNYmU4SER3NnBYK2w3YkNCZnBkR0FRQ2lvdzJCUXowdXpQVlJ3bUVWZTVMWWpTSGlDRUhNNzRkYmY3WHI4RVluR3dScGd2ZmN0WVJYQ2x6Vk02V0txMmZWM1FnWWlDNVBFUGZhWlJkWVZIOHF5OVcyc000WTg4RVc0S1F0YWxCeDZwNDl0ZW5RMjlmTS9PVjRibDZFUXo0VkI1bk9WblNlNkt3SlFSUXRLbTlCbEVkSmtycGdtcEFYMjRUM2FLZnNWd0srengxaThvV3YrRGo0eWhZOEdrUWhERVRma1c4cXdlc1lhK0ZFQzEzOXBVTW40S1l4cWtpUDNtR24rbm5nb1dJUVg1TjlFYk5ROG16Zi9HRTFoSnEvdEpWZ2lDSDhvc1pYZXVLa3lxRElVSXFlNVFJQnZrVVdETDVMNGVpNzcxRTFFeDFTWjExNTlESXArR2kwbDFkWEtEQTVFZ29RbXhybzdZWXN0V1N3QzZqWGtOZVR0NzFhTTFyVmxMVTRMd05JUkR6WDZBb3J5dEJSSmUyVU15UHBMV3NUTkovRDd6YzVCYTErTk9CL3JYZk1BOU5OUHpvMWhXL2Uzbmt6OWNwOFFDR1haeXljZHJDbWFsLy9SWk9XK2l6a1pINjZsajBMelkwM1A4aWhBM0pkdUNPTlJqRE9ZUGJISnh6MXoyM3V6R0pVUWtBWFFxQ05LZXpaUnJlSEd5NXFBMUhQclF0MkJNYy9mU3ppQm1rVCtWbm1NRWdRY0t2aWxwRE5BUkVnMDgwK21mK05maEZ6S0I2UDNUQlQvVWpYY2FTWmtUL3pmQmV0clJOZFg1eGZTODFSNUFxUWlGT0ZwQTJGK3dMV2c2OG1wQlBRN0lVZVZsMzhZRlQ4cFNOV20zT2JPZjF2ZFQ2eEhXOThHbElGUkUyTUpIbmdkUjhRdFAwNXdXUWxBQlFRNVZGL1RSNFN1WndyREtoR2RjMDZpOXVWZjFLNk1iVzRmL3paUGxnVXF5dm8xZ0FwczM3aHZnUGZUeVFnVit0OEZDVytVdTkvbUJUNG9CRDJ4dnB4VTBZTml0enNLSENjdmpJS1BTcGdJOEJDZFFFWi9wRFdJS2xBTU5RQUVFSzFIUDdsT2FDbVFuQ3FJMGdEeFFKclFyeUxnU29veFl1ZzVrZFJrZ3p1c0w1WDU2Q05xdU4yMXN1ak10cGZuajBZMXZzYk02OGZ3aHQ0aUpiYndrZzcxQlBEVHBpbkN6Q2RPbyt0S1h3YjBmTWI1M0VPclZTZGJZWmE1VENsMDZVUjBicmYvWVNBQmgwVWVaS1JWOG5yRkFxUEx2WlhLR016VWZHRU5LUk5xaytxTnpRalpTRUQ4NWdXaFpzR0ZqRytzbVRJcEtnS1ZXNG9rMlh0MU5iQk5uenQzNHJTeEgzSWVMRHBJVjVTUTNKcUVIeGlWRVhpTDV2ZldWamtaR1M4eFdKZFhDaVFLYWoxdnRodW5BbERKVmFhMkFDZmhqMVFaWkw2OUl6TTVFd2pEQVVYY0FianVUODk4dHhVUk9vMUZ3OENjYXhJcDlPVkdRcFIwcW8wY1dmOTBCcWVOWkNjSlp3MktJSGhpREVkRGlTZHcvejQ2ZDVJbytJRDVvcUlqcTFoOUxmT2pyeGhlZHEzckN5N3YyYmVLUW9VK1hGc29iTUNDcmwvcHhTWTJCYUtGNHlOUWR5UCs1elFUV2YyMXI1WkVvaTdWYlJkaVl2M3dZQUtDd3dHWGdiaTNaRm9IN2VaeVJEVjlCRmszLzJpTkhzOTkvY0pjL21JWmxDT3NYOEZlYmcrWUlCUTRWZExkVCtud1VEbTlYYzNmdEgvdlRIc2ZkZjFuYmtEZjZYdHFQUHhXRUxhUnNzUWFoMG1ZdFpIZWNFdUM0bWJaeVY2T2Z5enFHbWUxNUdIVDZNTExGK1hlREcrd2w5VGtWQnFWdkZRbzRYVTV4aE5FWnJQM2MxSjBxcGZ6NU1IV0U0a2xRaDZ2eGlSWUQ4cWpPVUwvMWhPSGZ2cWN6M2pxVytmakQxMVFQcGJ4ek9mTzlZL3NIVDVVTkoyRkowMTRnR0g4NU1ldDdBei9zU1htd1FrTFdnQ0xxcWd5NXRnUVFTUlI1SXplbHp2d0FJVUZCM2syVjlXNk1XMGRPZjM0TWVtcThGUVlTTWhhQW1ydStoK2hDU1JSZ0tuMG1pNU9MY0JsbVBMWkpuQUtnUlVEQS9kbVJBQjg3T0NFVFgvZE1Mc3MrYzlhMk0xdjMxbHZIUDdzbisrMG5xQ29zNlAwSUdGOHE4YTRDZlBNTVRCVVMwaXViT2N1RGxVWElTaHh5NnRwRnViS2pNd1FEQ0JnK21lVEJYTWJZaXdKWVU4eU9nc1dVSm9ZaElzMmhZalliVlVGRXFaOEJndVVRS21raEkxekZMR1RRQ0d0QW9zTTRBUUswUnFnMmlZSHBITWRiVjJpZVNHQU9NV2RHdFJqQjVtZzZ0ckFqNHJtMU4vLzF1K0MrZTNNck1aV0U0RUQzMTBGV1pOSVZQcWIzcjB2VGR6MW9QakdDTkJvdFJwMkdTSnoveW43VWZ2RXFKR3pBWkkxTnlSU2FqVllFTlRNeEsxU29DR3NtREkzQWtTamFpUHJHOUN6WjdacjNPMGFUZTZNTnk1SG9VQWN2aHNnMU5SZEdDNWRBVkhkUTVTM2podk9DeHhNOWxzVEpnS1BBaDg5bGR3WmQzendSdG8rZVFjcjFWYjZvUXVqS3VSRFV1V2FJTXNYNGxMdFhSQlBpUmsyT0N2Q1RRWXZWQ0lwTFNLdHNsaEdLb1h5a2FWb202YmhHc0ZVTHgxbm1RRENGUUY2ekVjS29BSUkrT1F4QTBCVU1sZEFURXUzcFIxckRiUW1CNU9zOFNDT29JcW53cUpSODl5YWNTOEdzSStlQ3lhQTFLRjZNZmVLcXdhN3o1N2l0Q043VEtFeG0yNWVJRE5La0NSZGZxeXdZMjFsWnNtQmtVVUpHM2t6ODhGdnZVVnZKUEpUbk91bEFYMEQ3aXFaSksrZnp6ZHN3Z2dZMUs5c1A3eWp1SDZqKzBsWWR5RUFUVFJqeUVnSEorUm5teklmbC9VY1hYQXdQdFd2WXpCeElmZTNMRkwvNms1b3RYWW9oeHhJS1VDMTdiZWQvdkVMbHZIeVpCeHMzTk9PM09YNE9lZzJvWkt1OXVlYXF6bDJpSUVPcEVwVWh6TGp5MWxJS0tkWFdOZjdmOTdKMi84VjhXOTcyb2xZK2tDbzhPbHZjbEhkT0JUMGRJb1lDaDFJU29XWU1yWmNGMnN5WG5SQWFQVGNpOHFZYTB3RFZOb1V2aWRCVVFVOUZ2elpHais5OEFyd1hDRXJTcUR2RVE5Zy96Z1dFMGhLZ2xqTXdGOWF0NWIzSkFKd0lTcGRvNzE0NSsrbG5uemV2VTNqQUdyVGtzQ1VISVdRaG9kSFVYRG96eXFVa01wM2tnVFN2cmtEL24wZmV5MENXR24rQVhzSGorSGRZSmVjYXdpMVlGZ05vYkNmL3BocEYzL2FGMTc2dTBnRGJ4MlQybEk2bUd1emFKc0M2SEMvQnBQRm5BUkFIdFVheHFvQm9kK2VVVmhyMDhTa2Jpc0VzN21rREV2eGxGb3g4K0FVM2hvNlBVR0lLdXdKRXdIWVIxMGRtQnBBN0ZIQjk2N3ZqZ1U2Y0hIeDhlUHpaNjhuUkhiemQ1Wk5lRkRzZ2NDTlhhanZtRmQxNFNhbXBwakhldTJMNmxzWGxEWjJScjRKSTR2YVNMZmx1QWxVVEowbHNDTUtVN1dsSmEvREJuTlRWNlFYQ3o0ZzFNTlovWk5uTHRUOTJuYzBwdkdLTVh0Uk9SQU5OQjJFY3hQNmRMY3R4VVc0SzE3MWlmZU0rajhSKytWRjBiUlFUcE81OEdST3p6bHdQQWFSZEFaUldsQW5HQlliZXlINitnRTlINGRBYkRHUUNvRFlqdFhWQUVjbVhFRGZ0QVh2YWw5QmR2WEhvQ1prQWpMcFJoT25BbERJMnU2YVNHd1B6bWt3djRzZWNlcUUyeGZ6aFU3aCtyZi9ER3lrWWJTTHB6N0pqZ21kdExqR1VqdDdURGFJQXZDaTAvWGp4eS9MdFBuSG42c2FFemgwWU9udXhlMlUyR3RwZ2hOM1BBRjdOZDY0dmZlbEV3MXRwVTI3S2lmbTFEdzZVZERhdUM5VDFDOThPMmtCamhJQ2pxUjlrRk0wSWE5NlV4a1VQWWg4RUNiWTdSSzl1UkFBNWJDQzBqOXZYMG5LTXFKMDBjSE9YUkxQd2Fhdnh3SkFHME1scDZjblRpSC9ZSEwyOXNlczk2Rk4zRmlyN1Q4QXE5RHcwQ1pHeUo4MWdSQkxoTVRmN00xNC9DcDBjL3Rybnl5UVFqeTFXcXY1ZzZiV1VxeTNKZUJRVm1NR0dkV3Y1V1gvcUx6Njc0eDJ2Z3VGeHl2YlorYW9sV3QvTDgveThFSWVzaUoxdCtkYnUyb3hhN2JDZ0xLR1pYLzdxQVJQRlhmWUdidTZBQzl0TE5NZ3VVaUhpS2tIWE13VG9WYlVxbERiL3EzcnkwMWFTcXZLcXI3cGxOcWU4Y0RVMlVpdjg1VEQxK2ZYdHIrTElHbzdkZU5Pc3dwbktrMCtYck11U3daUjRlS1Q0MG1Mci9UUEtlL2VHblIycytkeTF0MEhITUFWZXJQZjhQd2pPSFNGa1VOSEJORjljRitmZzRRanJwNmdXdUFWMGdaRUJUWkxLc3JLb0pYZFU0K2NISG1oNzlJNHdwODJXeFBXbHlYYUZMbXhBUDhiNnpuRFdwNmpFSmNJQTh3MDh3Z0NMUFp6d3k0QU5HWERRcTN1cXM3aXRYOW4vdlNQN3Y5NGZldFc3Rmw2NmEvTXFob2ZjOFh2KytUYjR0Y1Q2VDVZQU9NSjlKWVNTSGxYSHFxWWRmUVg0Wm83TTNCNmRjSEdhNnRoRSt3ZmVQb041QTJFQ2l5Q2NuYUUwRE1ncGFnVGpTcDRaM1BmVHQ1ODcrZW5Ud0dTdUxFRVZhOUkzMVZyZlVzeFhyb1VXdW9yQTF4ZGN4MnBQclN4NjNmcm43ZXovZ2tBaXNDTlgzcnUvZCtzS1Y2Z3ZXeExlZ3ZrMTM4NGJ2RkU5azBER1hQYWNSOG93SjZZa0VHZGMwYVcwMTZTL3ZyZnZ4dFJpNTJLdEFqMUpyS0hBWVBwSkRlWDFqZmV6Mm52RlhQOWk4NTFVMHJpWC9iV2ZqOTI4QmdMUkUwa1ZRZ0FFYmlBZ0lJQ1ZuNWlxdmEvUFlHRW9XZGRmVDVlMWdRdDZDRkdoQzhTc245SmlPbWtEbG9JdUFBQlVZeWlCVm9wNDYydHFLZ0lhMHRZU083SG4vY0NDc0llT20zditvc2ExTld4ZXJiSitRS0FPaHVRb1lxb3BFVVdoTmlJWFRadzg4YytBbno1MTRhR3hnanpYaWhrV2d4YmpFY2J0dE5iTmtqY0FsVzFmODdlblYyZkhFTWZlUlorWFBXWFVETmVGNDQ4YWUxaTByTzErOEpuNEpYYmtLUGNCeFFDT1VKRTVNUUZNeGF0SzE5WFRqQ2d3d0J1eGx6YjZlbFlWR2ZEekJoOFlnSldKK2dHQkxFVlRSSEV6ZmN6VDdpLzY2ZDY0THZxU05CL0pzdWt2UHZwSXBxSExSeVR3d1VQUDZYamlTSllPSWdpcW5yZlI5SjJKM1h6blRsVFRzUUoxYW5NMkR0NUVBQ1Zqbk13RXp3SVFlemYzOStQaGJmaGYvOEJhMUt5TDdzakFVcEVyVVZZdi9iY3paNXc5bUpHVGsvWnRoQWMrZGZ4d1lVdVVoVTZhdHdJMWRtRmpLaFFqQVlseFBCb0tFbE1TQWkzWUZZWUVpTHhoUUMwTEpRVWtQM0xsaDhwOTMwVTUvN1hldjF6dGlDQU1aSUFkTXVKQ01XUVJHZ0NCSVJQVEFTenNDdDNmd3dKWFpIeHhKZithcDdBK09OSDczWnY4ZEhUaml3bnplN2JZWEhZSThhby9ZME1BTllSUWR6enprdkVHQTdYZ0t0Rnl3ZUNBWGZjdjY0dHNmeWYzdG9mQW4xMk9YbkgrcHZjeGVSbEpUaUc1WUJkT3IxbFRiTFFFNVJod0lFSkxWRHUybHFZZGNkQ29BS0tKRlA3d2wrWGY3UXJlMHc1YjFINzAwLzhDWjhjL3VpZHphR1h2aktob3Z5YXlObUI5bGh3OE1ZemlEOVUzVUZFUkJMbTJPTFlFd0lTMXh5S0hMNDRpby9LT3pjQmdSSFVkR3NLNEJXekg0bjgvODVnZGZPUGpvejhzSlo0Vy81N0x3SzVxYU9uUUVWWVNldEI4MjVlZ3lTbTdTbG82dGQ3WUZMMXVqQ3Axa1NhWlNwWkdoeDA3Ky9yZC8rMkFJdnRxNnl6YmNkczIyTjdlLzl5WVlJUlRQMllNR2pMc1ZsVDRnK2xkYkUyOTd0UGJVZG9wcEYzbDg4UWJCYVVxa0ttUi96bjlUdXoyVVQ3MzljVm0yZld0V0JGL1hBd0FEVStsRTl2Z3ZDa3l1Mk5SNzhBbCtkb2lIMG1KTEcyMXVoczBvV1dDZ1ZiT2Z5amk3UnlPdjdrTFIvZi9ZKys1NE9hNzYzdTg1Wi9yMjI2K3V5bFd6WkxuM2Jyb0JFMklNQk5NU0lNUWhDYzBRUXVnUWNQSmVraGNJb2VjUlluaDBDREhCQlVJeFlHekwzWlp0V2JLNnJuVDcxdG1kUHVmMy9wamR2WHViN3BVc0JjZng5M08xbXQyZG5UbHo1amZuZTM2Lzh5dExsSXNnSUszUy9pcnRMN0h6VnJFdC9ZanBHQzA2UjBCQTZOZXdBdEduZGpxVDVmNS92WHptcTFJOGF3UWlJR1lZQkVMcjRMNWYvdlNSenp5NjdkK0RDZzNwRzg1Si9lN0ErbUdkcFJXa2JoKy9OZVlUVURtOEkwOThaU0NqaUsxWm5UNTdpOElWSmwycWxJT3h3enQyMzdidDg3Znd6eHJwd3JuYlhuUDVxOSswNnB4em9YSGNPaUVyRG9zWWUwRS91NlFmajhjb3hjdnl1cUlrVldGTTl4MmlRMVdrTldnYUpDR0tlYmNCUzVuNHlEM2h3ZnFLZjdoSVdaMld1NnBnYk9saGpRRE8yS3IwMUVmdTA0YlQ1cVVEY3E4TndaTHMzTlYvM2dGVHo3Mm5sWGp5Q09wdkFwWEJJWXpHd05ITXF3aFlwV0tuUGY2S1c3T3ZQY2w4N3BEY1ZZRW00SVV3RkxhcER6NDlLVFBKVXhNcXczallEUHc3S2tnZ0IrOW5oM2xXVVU3T283eU1Da3VBK05pZmZQaEkzMnNNVlVLTm12UE5JeHlSTTlRbEJrMTFJQnM4TnAxNzc1bVlCRVlEMUNXaUR0K0h6a1ZlSXZnU0ZZa0p5VXpWK0ozKzNKdk9qQ2JxVTUvNENhc0s4dzlXbzV5NGtEM0Y3akJMbHVWaVptcE1WNDY5aFFTa0ZGUThsQndJd1RTaG4xSW9YbitQZGRsYXNTV0Z5WG1UaitSZEVJT3hadkxJQlR6amdCZ1FETDBjQVZCYUpPbXJ3bUJMOURRamNJekxCeXIvYXh1UG9WL2NMM2RYOVF2NnJYTjZLOS9hNWR3eGtYNzJDcGJUcU94REV6QTEyQUVPbE9ISHJEOERVNEcvakJpaHhQT3JTT3pVRkRabDhFQ1JTNDJ0M1ZJWjJmR1Z6MS83M1krK3AzTGZqdE15VjF6ZS8vTDF4dG1CMVBZR0U5dmNmWGZZZXcvWGQyM2FxSjk5NWNud28wVUtVUkJ5aGpOYTMzcnIzdnQ4Wjd0N2VMOC9lc2d2T1RFMzFmNXViZjFWcDczK0plZS9NcXhVdHo3NC9kdTIvbXNKZTVRR0s2eGRJOUlhd283ZUV3d09JY3NUZXRQTzdxbGQveEJYRmYzbEF4aVh4OU1Nb3dqRUV2dEtJR3F1TVhORzA1NXg1WEQ0OE5UMGY5eS80cFpYaUNFTFV4S2pIY0VrTWJCU3dDVVVXM2VUQWNRd1VXTWJldG5wL1hCaitCRVlnOEl4d0NzZnZ0ZGFuMVpYWjZnN3piTEdrYkxVY1laSTBxRXEyOXpQTm5XaEVUY0xIaDlIQklRTm1uVEN5bDlzTFgzeFlXMXpmK0dUNXplL1NtYUI3V0V1SXVnYXR2REs3cjFmK2ZEcnYvdUREOVVPN2pyTmV0SGwzVmV2TjgveVNkOFhUR3h6OXQxaDd4MnQ3OXAwa25IMml6Y3ZJUmhqOWEyMzdMM2ZkN2E3aC9mNW80ZURpaE14VS9SMVlmM1ZKNy8reXZOZkVkUnJXMi83MWkrKzlYK25EejZpa2RVMWxoRUJzYzA5N093QjdJMWh4MGd0Z3lZWmtOT283TkZ2OXFIa0lHZENKSFlMeVFjdEtXbnN6Ky9pdWxqeGR4ZHhROGhEZFFpKzlMaE1CSUJ2S2xUL1pZZnp3TlRBUjg2aFNwQVllNW1wc0pnbS8rYmUvUFhuR3BjTk5QZmZFeUUrb3FWVUFYeWdTdEFXM1dVdVltQlFSZGtmZittTitobTloYmVkSnZmV21qRVJic1RPV2NWNkxOU1huWjdsdngyT3hhMk0wQ1BjbTBmSWlmWjA1WmNBQUNBQVNVUkJWS3pYckVOeFdUVXFsaEdsb0FHMmhMb01PMHhNckNyVDd6eTU5dmxIN1k5dnkzenNkR3huUzl5aE5oL1hRanhJckUvci9lWnpVMWR2bUhqVmpWU0t1cjU0R1o1NGtyV2VUeGdTSi9CazQ5aVFtT0o3MGpoUUJvZWNkTFRUZXZJdld6ZjVlN2NNUGZKcURHcVlDQllJbVUrQ283Q0lpQkFnR0FJQ01LdkMzUndJd0FVT3gxZ25BRENORi83bTNQSmYzcGw1NVZxV1VlWHVxdHB2RFgzbXNzbS9mMmprcmJjUGZQZ2NkVU5PN3JmQmdiU0dTTkt1S1V6VmNkWksxbXVpZHFRb042RGxrK1ZLM0J1eVV5MzJybE54TzM3eHZYLzYxMisvc3lmR3MxYTlmRURkRk1mUm8vYklIbjl5SXFqVnBBOUNURVkyREUwcmk1VGFMSXpSWHZ0TU9nRUVROFhLckZNUHVBeHptdUhGYkRwcWpJVzF4ekd1Y3lVSWdtL2ZmOGVydkJkZmMrYWZ2K3FDVDl5NSs2c2YvdDVuZC9UZC9KRVhIbGI3T1p5TzVjT2s4Vk1TT1pHOFRiOTlTKzN6MjdMdk93T1dPRVluendYNmdXQnlHcWxSMVVXNm83b09BN3pJZjdTU3VlUlU3Ynh1QURnVXp3eVVpV01kQTZxeStiQWtZdU5GN0l5VlVGaHpzWll6aE1CcGl2MTNPMFNsWVY0ekxBODErS2xMNW1rbkJKSnY2b1d1b0J5Mk92YjRJU0tzMGJ6N3hzcnZ2Tk44d1RBVUxmM0dEVFBmbGlYaTFwcFVTT2pUMEkrZmZlWWZiL2pZdTNvRm5yWHFGUU4wVWt6UkkvV0RlLzJwOGFCV2x6NElFUm5aS0RZTUM2YUswaUtDWWFwWW1XdlVBaTdEckdhNk1ac09HMk5oRFRTcUN5VUlndS9kZitmditTKys1b3gzWDNQQjlYYys4YThmdXVGenUzLzAwdzkvK0NIbG9nMVlvMk1rZ3BRTFYrdWIzWGxnUUU2bGtScmRlN0FWazBOTjloMUt4ZVZnN0wxM21SZjBkVjkzT3NZY2FZZExtNTBCU0dLQ3NRMDUrOXU3SzkvZk8vUlBsNkNkZ2lNbTFtZldidGhKaHByOTg1YjZXNUpMcUw5QTA4MU5XM1lzUXd6MHFvamsxRFUzc1I2eit5L09wQU0ySkVIaHFIcHNYUTliazBYbDZjdSt4d1lHRUtnWUtIM3A1WHN2THE4THRlVkZ2M0dHZW9RSTZkZWNWUC9oTGppTGhLc3VDQWFvRE5NaEhvaXNsNjFlOWNDYjNQODg2Tnl3QjBOUHNlRGc0d2dHZURIclN5T3J3d3VoY3RwWHk3enhaRzNBbkhyWkxlZ0Jja3NsMjFzUUFnZ0kwVUxseHRvZ3dHclZid0FBNU41N0dzdVkxYS90WXYwV09KTlRMcFc4dm8rZGs3dHFlT3g5ZHp1L0h1TWJjd0FRU3dpR2drV05nSDY5aDU0b0lxc3NuVGtyeWZIQ0NEdmp5dmpvVjM3NGhodSsvTTZYbi9ueWoxLzF6VjZzMytmdS8zcnhsOSthdnZmKytraERCbmxoZGlsV2xwdVpsRm9acnlBZ2JPNUJUb2VsSXFkalJRWnJjbGlUeGRvQ0N1YkRYN3p2bHMvK21tWDdBcWxwZ3FXNW5oZVd4cFJxNE1TTW5iMXkwM0RXQUpIZjJIZlRJLzkrMFpZTjczbi9mV1pEaHpzdlFFdGpxTWgyWnNyOGg4Nk8zWWIzL1FQSExSNkprblJnb0wzVHMzUWdTYnpmOHJkTzFoOGI3ZjdDUlFBd0x0SG9yRWtBS0VscU5rQjBETEk4Y1g1TVdCTUlDRnRVLytZSjcvczdjNi9iUklmcTZFNGhxeDNKVGFuWktnNEpOTUpacHFuakFnTHlhclM3V3Z1cit3dGZ1REIxNVZxeWc5UzFtMloyc0NXVTFud2lwMVJLQi8vbHphLzUybnZlOVlwVHIvNzRTNzdaRzYzYjUrMy9ldkdYMzU2Kzc3NzZpQ09EbkRBTGlwWGxSaWJGYXhOVlNNTG1ibVMxMllLUnc5b0M4dWFEbjcvbmxzLzhpbVg3UXFucGdxV0ZuaGVXSnBSSzRFakd6bDU1MHBxMERqQzN2dnRIRC8zZ2t2VWIzdjNodTR6TDFtRzFEanNDazdPcUxDK0doSDBQVkduckFhZ0tVcTJhRFpIa0s2eW82STIrKzg3TWkxWjEvL2taZE1DV2pYQ0J5ZlI4eE1RTXdUYm1LemZzbVA2L2p3MytyL09Wb1pTY2NKSmJ6MHdCSjZ4OGYzZnVQYWV6OXRIR0ZvbjlQV1pJUWtHRmlkTHYzeHJWNHY2UFg0QUpsL3dZZ2lHSVlPbnNwRDY0eTBpQi9qOE9EQUNSWkZsOStaeDFmUFA5SkFWRGtIN3BSdnVHN2VFOVpmVzBBcWFXWlFwdi9Sd0E0WUZBV1pkWjhmTnJvbjAycHA5RXNjbW5QaUtKbE1wV0Zlamh3N0EwaWlVYnJmZisxZm1IMy9DenlwdCtuYi9oY3V4VG0rbWdsNDlrb2RGZnlvVXRLVWh3V0dKRGs2Z0xmMzF1NlIyL3pyMXVBMHVyNUVUa1J0aGR5MTZ6UVZ1Ym1manJCL09UYnU1MUcyaFBqV0lDQjlJNmdwZ2VQSXlxeDg0ZUF1ZEx0RFBSNU5hSUo3NzBreTkvOW1zZmUrNHJyemovMDhVOXQ0ejVCM1ZGdXl5MzhaeVVQeEhhNDZGZERoMEpFaFJiMXNEbzNwMWZmc3YzTG56ekJSdFc1MVdGKzE0NE9kbW9qdHZ1dEQwNTJUaTBZMnJmQXhPdVBsamp3d29pU1ZGTkJwS29UOHVzcGV6cnozcithYWVjanpCVnJUNSszWS8rcURBdytMY2Z1bGVWbGp5OG42L2UyS3h5MGRrYlNVQnFId2ZBdTNYenhjUGxmN2h2OEExcm9Nd1A1enBLRU1BWWNvSWVtc1IwQXptai9Yd3l6bUFxcGM4OVpyMXd2WHBhQVFCR1kraXpmeXNBUmdqbnphamF6UThKNjdYb2NidnkvdDkwdldFejA0VjBRbloyb1hYcXBkcDJ4R0NlSjRWUU1vZjFmT3I1L0h4anRQZmIxcXVHZWJybDJoRE16b25ZeDNmODgzOSsrWnZmL3NSemZ1LzVGLzVqY2RmTm8vNUJYZFV1eTI0NE94MU1CUFo0YUZjaVJ4SXBGRnZXaXNON2RuemxMZCs3OE0wWHJWK1pWUVQzdldoeW9sNmRzTjNwK3VSay9lQ095ZjBQVExyNkNwdXY0WWdrUlZVWkVGR2ZsbG1uWm4vL3JDdE8yWEl1d2xTbHV2MjZiMS9idlduNEUvLzdMbVZ6RDBpaUZqZHYxcEtRUUY2bGtScmRmUkNXQ3EwVnBCZEwzbVBJUmpUK2dYdHlMMStiZmYxRzJsVWxXcW9tVllLSWVJK0JuRFoxL2YyTlg0OE9mZklTYlVOT0hyQ2Jhb3drMW12V2Y3QlBNcDU3Znl1TFoxSkNhbjdtNTJOR1RNaW82RUhsRGI5d0h5MFBmZWxacUFXeTNncG05U0syb1JjcDhWUXBGUGlVQWhFRW9EQnFoRTBpVzhaemRid0ptQUhWbUcreXhNcVVlL3RCOVpJQ0pvOCt4WW5PY0NCZ09VM2RWRUIxSVRQczB3WU1hTVJzdUlzT2xGQVBrTlprSStTVzB2OFBseDIrOXVmYWNNYjZ5Rm5ZcHh6MXlsemk2U09Xc2twWkROTXhobmdTWUpaNSs1Ynl4eDZzZm4xWC9yclRhRThOZ2hGQVQxU01NM3RXZk9yaThmZmRMZXRoNFk5T3B2MDFTSUpFa3NTSzloYmhodXpDTmJEVXBXUHFSK0x6L3ZpTjd4NTU2R3VmLzZkTjNlZXNHWHoyY04vak8wYjJyK2tlVUhSK0NnYnR5SitLN0VOQjliQmZIcTJIWlgzTjFEMGpPKys3ZVdBNG94aEs0RWFsU2QrMlpTaEZIQ3ZRVWtpZlZnMnNJS3dUQzB5dXI5TjcxcHM5dmJENlU3bFRob2JoYWRQVmg5OSs0NSt0MjdqeCtnOCt3RWlWa3p1Z20zQkRXQXFDMlZab0RsUUlmYzBQOHRlZk4zck90Nk5mVjVRejh6ajhKRmFDSlVFVnlBcDZvanlydWc0QUNkWnYrbHZIdmVucXFrOWRDUURqRWk3TlN2U2ZzUDhoaVhpUkdWVkVHTktvNUpmKzhPZlpGNjlXVCttS3QwM3k5ZDFzTUEzN3QrcWh5Z0FuRm9NcHJCZmg5NmVDNlZMZngxNDg4NjB0bXpubmt6MFB4aGU4K2MzdjJ2dlFWNy8wdVUyOTU2NGF2SFJOMy9ZblJrYldkUFVyako5cUR0aHhNQm5aaC8zcW9TQVJqT0dwdTBaMjNIdFQvK3EwWW9qUWpZb1R2bDJuVUlvNEZ0RFNTSjllRGN3d3JFc1dtRnpmWVBTc00zcDZZUTVtdXJjTXJZR3JUZGNlZXR1MzNycmhncE92Lys2RFlEcnNxSmsrZlRrOWx0VDRLdmwwendoTUphbTVtWHpPTEJVS0gvL0F2WmtyVm1aZnQxRStVUUhZMGdPZ0pBQjhiVVpPZVdOLythdTRFYXo2MHJORXJ6SER2a25tNTRpcVg5K1YrZE9UbWRVYXQ4ZmltWVdKSjQrWVlLbFl3K3kzM21uZnZIL29LOCtGcEprOElSTGdITjBXSWp6dFBLK09CeGpEaEV5OVpEMTVFaFBMZFF4YXlnbnJHRUFTdlNMY1dvcEg2dGJWdzZnY2pRYmNCbWNJSklJbG90U2ZEb2dsVElWWkJoMG9RZUZRT05taFdKRXlUKytaL1BoV3F5OHRudDJMV2pOejIzS1B5Ums4b0ViTk5iYkZJQUFma0F4ZHpaMTRUcTk4K3NIY2k0YVp5cHZWMlRpam9xOE1XcGtYckN6LzgzWlpDY3puRGxHNUk3elUxRERkb0tMRDF1VEIrUkl1YVpGa1V0bnk2aGNmZlBDZXI5ejR4U3RPdVh6VDZndW15Z2NPRmllNUtqd1pLWXozcXVsMVJ0ZGFzMmVGWVlXUk5vbmNOTmRIcHRuSUJCK3ZXalgwTk5UZWh0SlRVN3FxU05raFdVbzhwS2RQdFliT3o2dzVJN1dpVjgxTU81VU53MnY3VjE4ME9yWDE3ZDk1eHltbm5mWHhEOS9QWXNpcHZWQjErQkg2TXl5dHo1U2ZhNEloSnZTSjVFTXhhRG5mMmgvdXFGalhyanNXVnl4cTNZaU1DbzNUWTVQMHlEaE10Yk9HQjJOZ1BjYjBSKzlYTHhuTXZ1c1VFTEE3QXNNc21VODJiVnA0UVNFaTlHb1FzdmphbjVpbmRhVitaMWp1TExHc3djOWJqUmdJbjRSNzRKR3h6S01tSzlPRHZQajIzL0M4bHZ2Z1dUTmZqY2VvZDNnSVJwS1Jjc28xVng1NDhLNnYzUGlsRjU3NjdNMnJ6NTh1N1Q5UW11S3E4R2llWUlUYUpMTFRMQkVNTVZhMXF1aHgxTjY2MG1NM0JVT21sSGlGbmpuVlduRkJaczBacWFGZU5UM1ZxR3djSHU1YmRlR2h5YnZlL3AxM25uNzV1Uis3NlVGd0ZSUGgwYVZDVkFRVUpyY2VRQkFpcFhjYVkvbFFhdnFUMjBTLzFmVm5wOHJkMVdWNUhjZkVMSVd2elRpL0dqMzhnYnYwNGV6UTMxL0NOUzRQTjJhUzdVandmdE85ZmJ4MjUyai9UVmZ3bEFvQURjS0JlSUhFenNjR1NkQVZiT0wxRHoxUSt1d0RnNTk1bHRLbHkzRm5aaGxSU3FpQ0RYY3pJU0NmcXE0NXYwVXd3SkZpT0NPR1VzdFA0TXJvd2VVa3l6a2FTTUphemY3c1k4N1BEdlIvLzBxTVJzK3NGaXdCQXZJcVBUcEoyeWVRTjBCQUpQbUdYT1BISThWUFB6ajB6UmVKRjYvR2dSZ3lYdTRZd1FHL2xXVmlTVWVTZ0hDR0JxUDU5bURoLzJVdkdzeS80MVM1dHpZalE1SGsvU2JGT0h6ZEhkbmZXWjE5NVhxNXArTmJ6bEJ5Mk1vOHUyZzFHdkhjSU9ZNVNEaWpnQTg4OTZTcGgzWjk2UzAzY1pnLzJmcnYreWZIZTdKNW9tWnRRbzBwS2E2QjBYVG9IblRyazRGVEp6K0k0NWhGbkVuQmtCSktWaGk5YXJwWFNSZFVTMlhDazZGSFVkVnRkS1hTTDN2T213NU8zWG5kdDk5ei9sWFBlZDlmL1FMM1Y2VXpBa1VIQUNkZ1o2MWtRN25td21jblBNSVdGZG5tcDQydjc1NysvWit2ZnV3UG1hbWlzanh0c3MyN21vREdFSU9tNi9URU5DWnJTT3V6S3ZOSTRyMkd0N002K3VFN1ZqNTBqWFpHRnlaaTdJcWE2aTlEQjh1eDVpdGp6YlJFQ1dJZ3k5Q04ybXQvb1ZuQ2VQTVdITERoaERoL0dNTTZ5cTBjOFhQVW95TXJlZFF5Qmh3WmNubkdiUWwwQStPWU92dXJQZi94UXZiU2dabHZIMFhUVGFFZGx4Z0FmVUFXSDdsaTArU2pUM3orRFRkenB2OWs2NDJMQ2NaVTZJeTQ5Y25RYmNTK0wyY0pSazR4ZXBSMGo1THU2aFFNcDk2ZHlWNzE3RGZ0bjd6OVhkOTU3OFV2ZlBaZmZQYzIxSUZEQVRRY2hVcEhRRmFsSjZicDRWRjBtVE9yRXhIeE5lbjZUUWNiOTB6MGYrSThHbmNwWE1ZREcwaytZRUhoVTU5NXBQNkxROTNYbnB4OXhRWk1PTEkyYTgyWUFXeGxhdnpOditZWDlmVGQyRXBqc2p2QzVFS2xGNDRCaVZ2K3FZcnpONCtPZitTMm9VODhXeityUis2dHpVcTNGOGJRVlg3K2FpajgyTE5mUGUweEUyZTdMSndJQWdaV3FzNFA5OWxmMzk3L2paZWdIR1BKbXVyL3cwR0F3bUVLZWZzK2xGMmtWQkFnaVcvTVYyL1lXZnZPRXl0LzlGSjJRUjhPUHJua1JBdUNBUTNDZ0VqY29RSFVQcjI5Y3QxdlZuMzlDb1N5bWZJbVFTVDVnQlZWZy9FUDNOUDl4eWViNS9iS2tZNE04Z3dvdWV5MFFiYWxGOVdsdUNva3JOYWkwSDdyUlN2emRmenQ2MytJMlB2SjNUY2RuSnJzenVabGEzSk5JQVptY05YZ0NoRkZrS0dNSWtoSkVPQ0dVQlhHaUJCUTdNdFFBZ3JqS3JnTW90Kzk1SGZIYU5jSC91TTlGMTc1MnJkODlSdTRPNWEzUDRKOHFubDJKMkNuRHJMaHJybUIxRWxYckJFWW1sRTJEeHBmeWIvdG5PemZuSUZ0WWROamFCYmFzWGtzaVd1SEpxQUNNVkR6TWVWZ3NvR1NDekNrRERBR1ltQWM0R0FjbktNdmhUKzZIV2ZsY2V1NUFIQUFDREFyVUtUdDg4eG1MME0zYzNFQU9uRGRUcFJzdk9Oa0hHN0FsekFZTHU2SGFCWVNwWWhrSExFV0RUREcvZGdMWmNnWDRWak91QjhIamJBdTJLSWtISk8wbEpTaDZITFJHb1ZFREtZd0dYRnM0UFo3NzNkdTNOMC85bXBHMUd4SkdkZ0RtR2dHdTFOcnFWc0NKd0hiY2Yxemg1a1JmUENsMzREMGZuTDNMUWVuSnJvek9kbWF1M1FJaGlEQ0FvSUJScGdyR0JSR0w3MzRxc055NXdkKzlCZlB1ZXkxYi96Mk45QUFEclY4ZzJWSHh5WU5hcDV1OWlzQmlnQ0R2R01QdkJDRzJ2NkdwNVNvSGs1LzhmSGVQOXNpc3Bvc0wxVkNpZ0NBcjBrSE95cVRuM3lRR1VyL2RXY3E2N04wMEtaNDlwb3hFUy9vNFlINm9mZjladWplVjJqbjlnQ0FCMndMb0N3VlpySWNFQUVjcHluZUYzY2RmdnZOZzlkZGFyMW9wZHhWbTd2MkYwa29uSiszQm9heWhIUGZNMWcyVGdBQkV6Q2d1ajgrVlAvYW83MDN2QWkxWndoNEdaQ0VyRWFURGJwclB5eXRuYnlHcjg4V1A3bk51K1B3MEUrdXhvWWNEa1hIMzJWR0FoSGhUSzA1OUVzNm1QMS8rU3RXWmY5b3M5eG56eHBFSXNsWHB2MGQ1ZWt2YmgvNDRObkNWR1N0bGJTQkFaR0VGL0pMMXlOdndsbUtnd05nazFvOWVPQXRGdzZmMjdQK1BWZC9YYm9UTjIrOWRiSlNMcVJ6blNNN0FRQWx5MmljY2RZeTZrbElEcTR3cmpEQkdTTWlWNFpGdng2cG9FelAxdjNmS2loVG43dzl3RHFWdmpWQzR6VllMV1p6QXJhNW4yM29nVE03MXpFaitJUTB4eWt6T1ZEc2Q5L2IrTUlUQTJPdlF4M3cwTHhTZE9pUnJHTTdBR3lnREV6N0tEbndmQWdKRFdDUmpNTVFVVWl4STMwL0R0MG84RTA0azdYcVB6NGsvdjRVZVg3R24zS2lRN0VMWDBycCtnNWpyQkhVSldRWWgwN29DQzVzdng3Sm1ETm1CM1VpeVJtdk15Y3FOdkNJclp6ZjYzc3VRZ0tZVkNuV20rVWxHR09SREtTTTJrb3paenlJL0VqT1VQSjhjTUVsUlVkU3FoZzRGTG1FRVpKMFlUREdJUkNOTkhpdnp2TWErVklWV2xQWmxTQk9LbGNaNXlDU1JKd0xUYWdrcFpVZkRBL3VIL25TOTErLzZhdzN2ZmdMc2pGMjA5WmJwMnJWUWpyYmVkSkVJVDZpWUhEQnVDUnlaVmp5NjZIS0tOMjk5ZkEzKzJuNkx6KzdKL2VjZGRnVE1GMWhpVk82QURobTVsano3M0tiaU5QQWJtRHJOTEo2TTZjMEpDaEdyeDUrOFZGbGZZYTlaQlgyMWFBQ0pJSE9Vc3JVUWVNQVk3Q1V4cS9IcWpmdHo3eGdLUGVxRFdoRWNzcURtTGRtTEltdnpSUS9lci92aFN1MlhkMzg4RUNNUS9Fc2Q0RmpRekw3MmF5R1B4b1plZlVQZXQ1d2J2YjFHK1VUbFFXY09RZ0lJbmJlR3RadExmMkFQNE5PWldseHhlbkVFUENRMnZqdW5zWjNkdlo5NzBwTUxoSXMvd3ptZ0RFWUNtM2RUMlduV1J5WGlDbWNEV2VtUG5aZnRMOHkrSit2UUxlQjBhTXZVTFBFZVlFNllhWEFtcWJtVi9uNGcvWkg3MS8xblN2SURpbVliVStPSkYrZnRiKzMxOXRSNlgzZldYUzRRZTF2T1VQVlpTdnk3SUpWcUMrVXBXc09BdUIwOWZBdjczN25LeTk4NVpibnZmclNqOE9adnVXT0g5dWVZK3I2N0tJMWpETW1HT1BOeWlNZ0lBYTVNblJpMzQ3OWN1U1VJN2NhdTNic09YRlljeG9GbzM5bGZNL3pYdnVhcXo3M05YeHZuQTRYV1Vwdmp0aU5DQ2NQNHBRc0hJQjMvS0ZsQ0QycG81RWVHdW52VzllZHpsNDE1SmVjaHVyYmNPM1FyY3VHRzdsdTZMdXUxM0FjTjZnNzlhcGJyVFZxZGNkcmVDeDAxTmhqRWJFb3BpaENKRmtVVWhSU3lBV0RBRmNaT0pHVTZOVmpOeFNsU0FndURHSG9Lb0VVUlFHQmMwRkVtcXBZdWg3R2NUNmQwalVsbHBRMkRNNjVKS2x4bFd1cTdOVlZoOUtLSG9OaUtTMU56L0ttYmlwSkdwcXBLdHFNVVlHa3BoZ0sxeFpUWGlWSlU5Y01kZEVkQUhER3ZUQncvWUF2b2lVemdFQkI3RW1TTEFZdjZPQ2NwdnhJaGw3Z2NqQUl4bFFlUm5IRnRwSFFIK01OMS9PamdJTkpRY2E2dFgyUFRmL3F1dXVmdis2RnYzZjVSMUNmdnVuT1d4dWV1MHpCY09MQWtVRTk5c3FSTzBjdzhuci9oZWxkalhONkhycmsvSGgwak1XcUtqUVFVeFNGZ1NtS29qREZWRXhOcUViejFkQVZYUmU2b1JxYTBEWFZNRE82TmhGcEU3R2FzZ3dvQnRkTXJxV3lsbklvd0VQVjdtczJLVFhpRU9BcXVBcW9ZQUpJRnBpVDhETU9FQ1FoSlREYXdNOFA0WGZXWUVNR0l6V0VJVGcxR1IxdGFwY3dCQmdPdnZIbjNmOThXZXJha3dBZ0lqd1VBZ3U1Q3h3VmtnanlRU1crZi9Md2xUZG1Ycld4Y08ycGNuY0Z0TWlLZU4xbnB3NnlqZDFQdHd5VVR4NmQ4emJPSURpVTJSbFhRdG4wK3B6ZGJ5ZUFnQUVZSWpwa3g1T3VmazVmczRMSE0xZ09NaXB0bjZhZEV6TytzcEtZb2JBVnFmRjMvWVpMMmZmVFYwQndqSVhIMlhzOXFYWjFwcG9jbHB6b1FPWnJQWCt3S2YzeXRmSmdmYTRsamNCWHBhYy8rYkI1Y2lIMS9DRTU2c3pzSUFsK3hDOWVpNXdCTDVwN2x2bUlnSFBWdXovM2hVKy84OC9lK3J6M2IxbDEzdlRrbnJzZWV5aWxHMjNETG9FaWtoRmtLR09mWWxjR2JoemFzZGVRZ1JPSGRlbDdNa3hza2lvVE9sY0VtT0M4RnZDcXU2OC9HUDNyRys5YzNYTVI3aWtqclVJU0lHSGIySlNMTjFwdXVWNEw3S3BYcXdWMlBhZzdubXU3VHFObTEwMjdyanQydFZaejdJWVcrUGRQQmlXYmhsUS9jQU1lQzEwSW5Vc2V4NUNLSWt4ZDB6VEJ1UUxHVGRQSTVLMXMydEkxVlJXS0pqUkQwek9tWldtR0tqUlZhSUtwcHFycW1wb3hkVTFSREYwVGlpSmlybkN1S29vUXdsQlZnTEdtWlZhWnJYKzEyYTY5cnN0bXEyWWRkMmpPRFRzNkpBUnc1SVZpdm95RjR2bGc4OTdPMFJGWWExc0M2MzUrdzRmKzlVMS8vZFlYZm1qejBObFRrM3UyUHZaUXlsaEtNS1RYaUlOR0hEUmtzS0JnVkgzdStJZFhCZnVmOHkvdks1eDNhVzNxVVNKbU82NGZoWjd2aDFFWVV4ekoyUGNEUDR4c3h3dWp5UFY4Z2dRb2l1Sll4cjRYUlp4Q1FZaWxRaHlTeVloa0RHckUzRkExUlZOOHpwbFFvQXFtY0ZKMHJsdGNOYmllNG9ZcE5JUHBwakJTM0RTRWJnZ3pQVkRRUWxXemtkS01sR3FraFdGd3pXQ3F4alJ3RlV3RjB6Q1V4WmUyNDllSFVYcGhzN2RjWUU4cmg3WnNMY20zTjZpMU1XTkxsMjNGZTZiUGs4akFySUtKV3ZuZHY2SXVzK3NkcDh1OVZjU0xCRTB4d0FsWnQ4VXVISWIzUDE2dGFqTXVBemlId2lGYTJUSWlDVGNpTDRBWElaTGdnS2F3ckltc0NsL0NteFhTY21JSU9DSmtOR1NBMGFkMUVOSHhCUUVwbFVacjlNQWhtT3JNMEJRVHo2cklhWWZlZEpzK25PNjk5V1h3Z01uajJyR0pFcnhHSkNXU0FCVC85RTd2WDNZTmZmZjVOT1hTbkV3VWtuaE9qNmJjeXIvdjYzclRKaGJLbVIwWVVQUFpsbjUyVW04elI4U1JFVEZzVXJaKzdtKy8vTEgzVGVobnAxVmt6WlNVc3Yxc016QUpHWkdNUUpHTUFrb0ttQ1ZpejFUR1ZTWUU0MjN0SjZUWWxhRVhoem5GZVBhNjUxWkd2Kyt2aURaZSs4bWRqOS9YQ0oxcTdOVEpDYVFmS1hISUF6LzBHQ2VoTW9rb2h0UTF4VEkwUlZOWXlOT3FXY2lsTXBhcEtucG1jMDlldDFLK3BtdW1ydWg1eTh5blRFUFROVVZURmNYU2RGVm9nSXFaYkFoc05wZlFiQXFVSFgrSll4RVJTQklSVVN5Ym1pdVFHQ3liLzFoU3VnM0VNT1BGUlFTQUdHUDA5SEJ5N0ZDNUNISGVQUG4yejEzL3RiZDlhang3VGthbHJKV080M2paZ2lGVXhoY1dETlc0Zk8yelMzdSsyMzFlNFU5dWVSZ1lCZHlXdXhvNlZ0M2IwNXBrUXdJeEVFbkVYaGlFVVJ4R2tTUVp4bEVRaFEzUHJ6dStSMUVRUjFIZ0I5TDNROTkyWGNmMzNNQ0xFZnRoNkxpZTdmaU9IL2hoQU1nNGxvRWZlR0VZaHhIRk1ZT2dDQlNBSXVMRWRhWXBVQldvQW9yQ1ZDdVYxdTZyWlZma2M2L2NhSGhLMmtpbktpbExXRmJhTUZUZFVsTnBMWlhWTTJrdFpYSkxWdzBvYkpZODh0bnp0RTZHTm9ESEhEeDhDQ3JIU2hObEQxS0NOWGw3NW01MGNyWVRzQXZYc3Y0VWFzYzdaL2hUSE8xdVNGSjVLNklabUNBQlA0SVhrUk9nRWFEaHd3bklqZUJIczN6RkRaWDFaOWhKdlRBVjJLMzhPY2MvRGppQnd1Q0djUEFNK3g0ZENGRG5wWW9WVE5ZQ3J2RVZuN3ZzNEd0K3luN3Y1cDRmdlFTeGh1THg0K0RFWDNwS1lrV3pLbC8rUTJlT2ZQRXg3ODRKNDRJK21uQm1QV21jeVlxbnJNdHFhekxPSGVQcEY2Mm1DYmVsRGhFRVlIc3pFL0NtdXNKblRIQzhOU0lJd0FJQ1BQQ3pieHowNGJOQUY3enMya0tJV1daR2xxenpNWlVyK216bllHcXBRU0ZGQWNXU3lPTGFTajAvcUdSWGlOUWJ0anlienI3Z2o3L3d5bTNyM3QzOSt0Zmt5bzNWNmJRbXVyS3BWTGVlc2JpcGFVYldzcnF5cVpScDZxcHVhSnFsNlF4NlMvVmtMWWZnVGhjZEFpSWdUZ2hSa295bGRFT1B5Q1VRaUlpUStBb1JzQnpuZnlKU0ZFVlZGTmZ6K0RJcUVNOWFzMjUxUm10Qjl5ajlMeGNHbTMyUzN3cElNMHlKNHFQL2Nlc0lGQy8wZFlXWG5Ob3hDd1lSTEtHdTB2T0RTblpBU2IzeGxPZjVaNTU3elpkZXMvRmYvdUo1Yi81WXlkMHRvTFVLMDdiZDFjREFtaFdoMk13N3hwZ3FWRjNWRWxGbU0wSWlack00WmsvQ01KdjZZaUFPWmVBRlFSakZrWXo4TUdqNHZ1MzRkYzhQSWora3dBdmRtdHVvdTY0YmVvSG4rODlMMVJydStJTjMrRkZBaUVNZWVWRVkrTEdVa2tOUWpEZ0NoOUFWVGVXR0lsUkZxSnFpcGRWMFdrdG50RlJhejJhMFROck1wTTJVYWVncE5aWFZNN2xjUGpNYW05dHRJNXRHTm8yNkNwR0J5Z0RPRXBGS1ZHY0NFSU1pVUF6RUVCNTJWZENmZ3FZaGFpbmRORnYybmg2amZpZmpLaHhLeTNNeEpuZ1IxWDAwQWlTdmJraHVpQ0FHU1REV1ZJaDFBZFpCcjJGTXU2Y3dWc05aUTJ3b2pWcVVSSmFlR0EzNEdSd0RFZzE0b2s3M0hZU2h6aFhpU1BLaFZEVGxIWHpMVC9KWGJlNzYxdk53aUZCYmJyVFowa2lVNEExS3V5alF4SXYva3g2cERIenBVanJZSURaM09zdzFJUnRSL1ZkajJSZXRoZ1JJZ0hFd0FaZlFtOFBsYVVRZFprWFpHb1ZDSUVRY2h2WEFManVWWXNxdDdOaitxdysrZXJEclpidHJ0SFA2Y2E2cUNoZVkvUWhUKzZWak1FdUlVWURyWEVseHJhQmEvV3BtUU10MktaYkdsYkpyaHhTKytnVi8vS083Lys2MjRzOCt1WDgvWUFKVHJjQ1g5bUhpaEZBbHBDUVp4VktTSkpKRW9DYWZIcEZIaitETHRCU1N2bEdGS05mcnBXcHQ0NnFWZnJpZ3pXQkIvNDMyL0lDeGp1ME8wL1JpNTBRSEs4emZiZm5VdStBcDJzZWZjNXdGVDdUWTJSbkpPSnRhZFdEN1haOTc3bFhyKzEvNWhCM3RtTjRoTkZWaHh5Z1lBMnFtWDh0Mks1YkdsYUpianltNDVvby8rZUhXdi9tMy9iZjg4OEZIbEpSZWIweHlMbzdZZGZNYTJ2cDNaSFQ0bnljRVBzUGxnblBCRTZwTGlGeTBpUHpJZGhTWkxDZTZRZUFIUVJSSFh1RGJqbGV1TzY3bmhkSnpmYmZTcU5jYWRTL3cvTkN2MU4xS3JlR0ZYa3h4R0lRTk53aWppQk1EQ1JrQ2JxVHJsaVlNVmFvSzB5eGhaa1VxSjZ3c3Q3SktPcXRsMGxyR1VqSnBiaFkwSzYrazAxdzNoY2xzNE5TVk9GT1o1WmJZYm1PY1RGQTdyT0tRczgzZ1QxV2VidC8vOWlKdU1oWkdCQzhpTjBBOVlWeWYzQkJ1Mkl6RllzMjQ4R1o1bGM1SjF4d2tWV1dEbUowNndFN3VRVUJ3b2hPakFUK0RZMEJ5NS95b05SbWZEWVhMd3cxbE9MUHk3NTU3OEwzL0tkNXE1cjU0TVhZcmMxWVVGb1lrYUJvQWhBc2xrR3ZMaWdKTXpGVGw2L25RamoxRUl3QUFJQUJKUkVGVXVlT1gvanUyTzJ4MW5sVWlDQlZNQVVUVDMwVXl2bHJQcmpKeFVNR1dMS3BWS1gxSDJwV2dWcHpjWFh1RTIyNjlWcTNYbkZvdHFGUzlhdG1yVkx5cUYzcXhEUHpJQzJLZksxSU81Tk5iNzc0NFRQL3BoWDhJd2lQajIzLzg2SjFUbmczQlk1SXh5WFpiRlNZNGcyQkNBVmNaVjduUW1LSnpSV2VLSVpRTU55eXVNY0NudUJFSGR1d0pUYWxWYS9kcysvbExMN3Z1NWsvZjlMVjN2L2tQUHZtOW1qOU9VaXhHcUF1U2FhZFNkTHhBUklvaU5FVnBlSjZxNm5iRE9UQStmc3JhdFg0WXptTldQbzlXWjZZTzFGVEVteHZ0UDJvT2ZqRTE1ejVKTnBaa28za1FtdG51dk5ZWUMzdytINHVsSGs0RzEvbERpcGozbHJWMjVpM0dCR3Q5TGhrQmhXMi91Tm1meEZ1dWZpTWtiUnZmZnVzamR4YjkrcE1RaktnZUJ6TDJoQ3FLTmZlK2gzOTIxV1h2dXVtQlc3NzkwZmU5OGYvY3lKVTZrNTJGeWhOMm5mVzJVNUZ0bXg0VzdJRUZPNGVvdlZEUS9DOWNycG1reGR3SmhTZi9NNjZycXFucERKdzFhVnQwZUJMT1oyNEpoREVGRGM4TG9qQ01nbHJES2RVYTlUQUl5Ry80ZHFsdTIyN0RqM3piY1Vjcm83czhWMUxzKzBIRDhhSW80aExrTXhsQUk4VmdwaHFyeWc2UnZyMnJZQmJ5ZWpabjVMTkdQcC9LcGl3cm8yZTZqSHpCTEdUMXJLNllTQlpubW9XL3hFeHpPbmw2WmpXbVJkci9aU1M5bUk0YkVkeVFLbTNHRGNnTjRFYUlZNENCTXlnY3FvQ3VORnRJczQrNUdKcEZvems5TW9heWcxTUdXRTU3MGdTY1hBTm5UUnFneERoSE0xODlnMlVpbWIzYlhyTzQwUHdicVhDNXY2NmRtbC81NGVjYy9zUnQ2bERLZXY4WjJDc1F4QXR6Y1B1QkY2TGlGVG54cko2REJGaUhLYmh0UEV1R2VuZm0xK0tTcnNKWjZ4cmYycXQvOUJRN0xCWWR1eFE2dGJoaCs5VmFVSzJGdFFxY21yU0xvOVZHS1FpbEY4SjN5V01hdU02aWZZRlFXRHBscUlvcWhOcWRUZmV1ekt6U0Noa3oxWlBMVzNyRzBxMnVmSHA0K0pRdnYrb2FpNGVJT0ZoOVE3cC9zOXB6cWpISU9hZloxODltTm1iVkJXbFpHdU5xN0xZSFB3WW1wY3luY3R0R0hqdDN3M2wvOXVKMy90V25QdjM4dC94aXhhYXpLbzI5bkovUVNlZVJGVllBWEZXVVd0MGhDcnZ6ZWM3VUtCS2xTb1BCNG95SW1weWE4Q3RCQWhFUUVTSnFLdXVSUkpSbzdUUXpoaVY3em84VXhsR2FsSStzUU0rNXpDZURPVnI0TE41aU9pT1VIL25aRDA4YU9BdVJBT3lONmY0RFdxOWlyamdPZ2tHeWtNNDlmT2pSY3phYy83WVh2dVBqLy9CUFYvekpEMVpzMkZ4cWpBcXV0dXpKelZjMjgyQWsyNnpEem94NUhkVnUyTXpxZnV0em10ZGoxRnBEV0o3T1RXZ1JlUElhQitGUy9NMFlBeGhqbkRkcG16T1JNbzBNTEFZK1dFaUNyc1JNM3pTN2I0YXdJL2dOMXd2Q3dBMkRZcTFlcmp0KzVEYkNlckZScTlYcmJyVmVzc2VmcU83MnEzNWNET3RPRVBnQkE2T0l5NWdad3RBVlV4V2FyaG81STk5dEZ2SkdJVzhXQ3VsOEpwWEs2dGtlcTd2TExHVFVyS3Bwc0FEQndNVGNhVU0wbTZTYm51R3pMZDVIUlRGTE02NmZrQzY1SWJ5d1dZaUZNNmd0ay9KOEJmZW9Ib1drb2xUT29ORWFTaTdXRnA3RVlKUVFocWxDQUlGRUtKdWY2S0pwRjVWQUxCRzFmR29XblIwK0F3Q0F3aEVRaWcxb2k1Y3hFa3p1clJtWDlnNis1OUtwNjdjTzlPcjZxemFqeE9CSkNBNndtVUdEZHhpMDh0aDU3ODZNbnQ2eXJvQXF3SUFRQ0JCNFhqMnFsOTNLbEROZDgyemJxVmNyMWRwdGxZcHBsMHVsY2xCekw2eDZJK1g0cDBwQUFUY1lWQmx6TWkzZFNodWNLMm5ENk92UGJ6QjdUR2g5K2E2c2tkVVZxNUN5ZW5OcFN6VjAzY2dZSm9jT3FJczg0V255cGtjZWZQeGxhMTRIUW96NGdRT1BUN2kxcm5TVzR2azBNRnQ5NkJ4cFcyUFluQjhvZ2dOczZ4TjNYbnp4cXpmZjlwV3YvZVg3MzNmajdZcXV5dkFZeUdNeFdzV3lGVmJaMGxNRE1BakZ1ZVBoUnk4N2UzTjN5Z2prNFVPVCt5TjZQR1ExU1ZHTFVLT09uOGg1SjBXTElWaHIvaXRtZjN2TU9DckNQdTRnSWxnaVBWVXNIbnB3NHZMMVYwTlN6T0w3OXo4KzZkVUtxZU1rR0p3VHNhMjc3N2pvZ2xkdit1WFh2L2JlNjk3M2c4OUovV0FjVWdmdnRtOHJwMWtmOGxadk4xOFQ3Wk0xMzdZbnM2TDFiWHMzMXRHUXRqRzV6ZE96OG9CMDdIYWtHN29jL2lhaU9HNGZPZmJDeFRtN1RkaHRMWnVMdEdseE04VWdWbmNycmRHa2N6WXBXenpwMTMzUEMzd3Y4SXBWdTFpdGU2RmplL1prdWR6d0dyYlRtQ2p2M0dVN2NUVjBYTjkxZlFaR2thQ1lHWXBwS0thcTZCa2oyMk4wRmF4Q3Q5bGRTSGRsMDVtOGtldE45ZlNZWFdrdHl6VUJIZUI4SmcyY2JLblJVYWNhM1k3Z21uM2JrenNwT05TT2RWd25vb3FMdXAvOHpXTmNBVjFwUG1GWVFMeU9IY2tSY2dhQ2lIWk9IU3NCUzRLcFFtTTBWc2RZRFhXZklnbUFjUVpkd05TUTFtR3B6RlJoYWpCYWprVVJJWktRY21aRytBd2ZKNUNFaktDUkdsVWNwTFgyUThKbVJJQ0JDWEFCSWJDUFd5ODRiWTAyaUIwdTdnTk80OGh4SkV2NU1lQWo4Z003c0l0dXFlU1ZxMTYxR3RTMkgzN0VqWnpzZzRYUjZrVEZLN3VSRzhXaEg5WWhJQlFFNU1WRTZaUnVHQnFQbGJ5Ujd1dktER3FwM0dYRHZiMWRabDJ6REtzM215bGtVcWFxVzRaaENCUFFPblFGZEN6ekpocGJMQ0dES0pJeVNOeVNwS1MyY3hJQUlwbFBwZSsrOWNmKy9tRExPZWNTZVEzZkhTOVBtNXJSVERtNGxLUXZhYUtTUkNuRE9sQThkRkc1Zk8yVmYvbWVIM3hvKzYrK3UrVlp2MXZ4ZDdXVTRNVUd1RGwyNFBZMXpobEEwYkwzeGtBc20vcG9vcnhHMUZSU3d4YWJ4bTJqc1JkRWZWbVQrT2lqZTZhZmRmcXdsWjZ1T1pXS3QxdlZSQlJReDBrWmcrZ0lScHJUd2hORWs3OUY5a1Z5WFJZeUQvenlEb3ppcEl0T0ovTHF2ak5SS1I1SHdTQWlTN2YyVDQxY1dLMWQrNUozdi9jSEgzcjROM2VmY2VrRmsvNG81KzJhNTgyWklyVnMwVFR6NGN5UkZqb3ptMGU5Q1VPckRBcWdBQ3FIa3JqTnQrNnZZRkRueVZqN2RMSkYwb3RwMGtlNjJBVTY1NGljVFpURU5MUUlHNHNSZHRNbkxWR3ZPUmVHcHFWMGc2R3dzbnRWVWtGek5rOGpHWnZjMEcxNG5oZDRrK1ZheWE2N1FiMWtsNmVybFlidkZDdWoyeXFQaDNYZk94ZzBYSjhSbzRpem1KdHFXbE1NUXpPNnpLNWVzNmZiNnU1Szl4U3l1YnlWNjdONis2emV0SmJsQm9lR1pvSzVUZ1VhclNXT0NIQkQxRnlxKzZoNTVQaHdRN2dSWXRtMEtwODR4bDBRa3FBSUtPS1lDSmlBckFZL29udkc2SEFWQktoTnJaY2tvVWFnT2dqZ2pIUUZwc3BNRldrZEtRMHBqUmtxRExVMURRR2lHREdoOVd3OW5mbVlabSt4eENUV1VsdDFBR0FIQXFiM1FFdUJPQmlhMDcxbVVFcUUySlhTcmN0YU9hZ1g3MytrdmpxdUZNcVZXLzZ0ZWo5VkNySlVLWmE4a2hzNllSeDRnUk5LWDJpTWVCeFRsRXVsQWNhNTJ0T2RIZGlRWHFrVnN0YXEzbncrYS9WTmxZc000UXZQdjR4eG1UWU5qVnRvamdXc3RYQ1lQRHl5NWF3VVIxSzZvVXZVU0x5VnFEa216SlBUZVd1cWJhOWRBSXdKUU4xeHorMURabGRmYW9pWVAxRXAxaHAyeGtyVDhSTjVWU2cxcDc1NzdKR05tNTkzYnU0TFAvdy8vN0RsV1ZjTDNVU0llVDZySGJlbXVaS2FVS2FrNWh3N29pYVZSaDNiY2NzanVsTmhuVDlLdHZYVVJNZGdnRmF2ays5SUlMV3FtM3YrOXIySC9MTTNEZ2JrTHRNa2VUeTY1NmtJeGhqQWQ5ejk4SkMxcWkrMVVqSjNzbHlxTnV6czhSTU1BalJGcVRtTlBXUGJObXg2M2puWnI5ejhkOTg0NDlLTHVhNGsyY1RtTm1tQmQwZG95Y3p3VDRob1JoN21pZ1JyVXE5b21ZSm5TSnBCWVRNa3pUR3o1M3loYlU4VXFPTlJuZC9DWXh4ZWowellNK3AxTFAwd1hKaXFtMjVtakRQR0dGZUUwcDNKTVJSV2RxOXV4ZUR3RHA0bUlQQmpwK0c2anUrT2w2cmxtdDBJN01sS3NWU3IyRTdqd1BRamoxV2NjTkt2MVIwbXVZdzRrOEpVVTdwaVdwclZsKzdyczNxN3JiNmVYRmNobmV0TDkvVnJoYnhyQ01lQXkrRkU4R0lXTWNCZ1RJY0lZY1pnTVNnQ1pDdlplRHVjN1ZpNjZ4aHdsQVJNZ0dESUtqVGgwcjBINFFUSTZFaW1qZTNPYjgvT0NaQVNOWS9LVGxQWjBBUU1EYWFLbElhTURrdGpwZ3BEbVRGWmh4S3gvTy9IeDUzazJxU1pWdUROSElOd3B4V24wemRZUWJCOXNuSm9iOUVNUzFQMVdtaFgvWEl0cUpaanV4elhTNkZkbFkwSW5rK2VDMC9vak9zVTFpTEQxRlByTFI0Z0UrcjlxL045UmpwajlmZmxDeWtqbTlKVHZZVk1WeWFqcTNwWGV2aXJ0M3k5TjcveXlvdGZCa3kwUElFbDBIWGY0NytxMU12ZG1lRVlFM0VzbmJCT1JFUTBSMkh0d0Z4ZVpSMy9sZyttY2lDWTJIRmdJTGVhY1YyU04xYWFKT0Q0UnJVbXRyVFJ5dlRHS0hyQmVkZDg0YzVQamgrNHIyL05lanNZQTJzYXNEcG9kVVp6N2FUVkZyTzJaYnJ6MGp1MTVPVXJyQVRBTWpSVkNFSm9LZHJwSi9VZEhyWFAzemkwcE5YeGFRK21NWWxvYXVmWVFHNGx1Q3FwZnJnMGtZeml4MWN3QUJvdFQyMkk0dWVmZTlXWDd2clVvVU43ZWxiMjIwRjFLY2YySmR2UWFXcnVWTWZuTXlLMWZPaThEb2J1M0szVHdVcTBDTHZKMEIwOG5haWJTc3N3ZmdSbCtrVHhOSTVNMVFSSkpFR0FES05vd2Z2SUVvYm00SXdMb2VUVG1hNTB2a1hTN2NXZDVER01ZM0pzcCtINDNrU3BPbFd0T241MXREUmR0cXRsZTNyYjlCTys3VGYydXI0ZkNTaFJQYlpDeldDV0pkTDlaaysvMmRXcmRmZW0rcnZVcmtFOTE2L21MSkdCMGdXbU1NWVREUklVUXdaSlVIYkN6WExtMXJRdjhMZzlwTXNtNEtRTmxnb1Y5RVNKdG8xQ2NPVE5HWmVyT1hzbWpVeWN1ZHNmU2lJbmdPMDI3NzdDcWEwZnAzV2tOR1pxTUJTb3JDa25rVVFrZjhzdVhRdVRLd2RhYnB1ZFRvanRwNjg5NncyQUFJNVhMN25sb2xzcWUrV2FZMWZxdGFwVHJyamxvbHN1ZTJVbmRNTFlkKzFhckVrbEpTSWxZZ3JMcGkxRjBUUk42eTlrMTJSU2h0clRrODBWcklLcFdOMlpkRzh1WTJxNnBadVdhcldzd1hNbWtnU0VpWVVCZ0JjRXJtOERFMVZuTWhrT2lDaWZpbmNmM205b0ZtRGJEV2RPSEdxbnducmMrMVJWdEFEVDFiSHhMVjJYUUlpYWJVOVdTb2FtTDhNcDlPaWdDR0U3OWJnK3NXbmdkS3NtdHQvNTNZRTFMd3N3MHBFM0NMTkZGbk5vdFdWTFhKQldzWXdSZWU0K2pMR2k1MXgrM21xQVNwNExzSmUvWUhQRERZcWU4eVRDbXA0V0lLaENyYU5hR3krZjBYVWhoS2hWRzFPVm9xbnB4ejNaaUtvb05hY2g2eE1uRFo1bTNzNTMzL0hZeW12VzJhZ2UzN08wc01CRWRzWWExSDVabUtRSkNBa0JMV0JjU1g3Rlcxb3k3N0JwaTdiRm16VzVXV2tyMDBzWnZVOGdUMk1CMDFnVGtnZ3hZc1JoRkM4MCsyZU1RekRHR0JOY1pGUHBmQ3Ezb210bEIwT2pwVmY0VGxCdmVHNnhXaDB0ViszQUhyZW5pN1hLZEszMlVIRzdGM2gydlI3WEpMa1FnWkppYVlPbGVwVGNDclY3UU92dHRmcDZ0TzRobzJ0QXkra2lDNlVBSmpqanphVGZGRUI2WUJxa0EvSmxjMTcxcERSbXBWbmpySTA1WTFGekx3NWRRSURLTG5aTzBVZ1ZLUTJhV0ZZMnNqbFRPazJBdFVxaUVzR1BxQkZncWc0aUtJSU1oVmthVWpyU0dsSTZNelZZU3JPd1BKMEFQajRHY20xcnJoSUlJSU80RWRoRnR6enRGQ3QrcFZxM0svVmExU3VYM0ZMSkxWZThpaDk1WWV5N1lRTmNLaW9DR2VxNlNLY3N4a1V1WmZYMzV3ZU1URFkxMUpmTFc2bDgxa3IzNVROWksyV3Flc1kwT2N6WlNTR293K3NoSXNoSXhqUFdZTGx3MENvUjVWTytKQ2xiTXQxMHZtUU1pQjNQWFQzUUQ0UlBidWcvd3MxZ0hXTk5rOVdJb0tGN2VuU1BQVEUxc0hZMUZERmRMZHR1STJPbWp1OG9TeUJWcUEzUExUZUtQWVhWL2RhS0E0OXZCMTdDT0VCSDBGWnhETFI2VklpbDFEVUJnaC9HQUNrS1MxdWFGMFQ4ZnpZQkUwaURQamt5VmgrdkRXeFlCU0dLZHJudXVSa3p0ZlNQai9KRXFsQWR6eTA3eGU3Y3lqNXp4WUhIbjhEaTNIRGlzYUFzelNGcExLUkpvOFVCU2FLdVRwS2VNNVMzM2NSRVM3RldGdVRwcDRRK3ZlRHNueEFUQVJURjBndkN1YWRqakROd3pqZ1RxcXIyYUVadnRtL3pLclVqYldyU09XN05xOWRkWjdSVW5yS3JKYWM0VnBrcTI3V2RrM3NlOExiVkc0MndGSkxEMUZDMWtFbng5S0RhUGFUMTlCdDkvZGJBQ3IxN3JUVTRIdTVibzY5bTJscWVoSktSaFBRaGZWQUlpaElsZXZtc3JFQlhadVVxbTNWSnpjdUdGOUdFamZFYUhhb2hrc2daWURqMlhLQXpnc0dnQ21nZGZCekU1RFF3V1FjQXdjbFVtS2sxN2RXZGZJelordkdDTi9xWU5WY0FNUkJBK3JFZDFvcU4wclJYckxyVlN0MnVOcW9WdDF4MlM5TnVxZXBYdzhqM0l0ZVBYYUVRaEl3b1NsbTZZZWlLVUx1em1ZR1YyV0c5dHp1WDY4N2tUUzNUbFVuM0ZiS1dZYVYwdzlKU2k2aXRFZ2lCT0VZY1JMR1VWUUpKbVFRUkx0TWF2UEQ5Ym1kb2FrTUk1a2Qrdy9FSHV2TXhoYTBmSHZtWm1WRVE1Nm1KbVBmRDl1bmlscWVTSkVoQ0xCRnhHQk03SDVaRjZqMXpCV1JZckZWQk5HY3FlRndnT0hkOHIrNDVQYXJabmVtZmZyeElZRXhSYUZGZjZPUGRnb1hBR1F0RG1Xd0E2TnorSHc0TlpuSG5KSlhRblJ1QURJdTFDbWl1am5CY0lEaDNmYy8ybk81ZXF5dlZONzF6Z2lDWndpajZyeENBWThXVDRta0NzYVBnNlNYMDZkOHVUeS9JMEVTSVk0b1JMV0RvYnRHellDSmxHRmtqdmFJdzFPRXMxbFNkRzBHOTZ0UVBUNWVtN09wVWZYS3NNajFlS20wdGpyaWVZOWZzdkpKbG85ckI4cUhWNnZDd3ZucWxWaGcwQndlc2dkVkc3NURXWmFoNUNBdE1jQUFrSVVPUUJ4bUF3dG1zUEt2WkN0MTdFSllLUTIwNlVnbmUzRTlLaERIOEdBMGZkWi9zQUZMQzBtQ3FNNXgzWEhBRVBnNWpjaHFZbXVGam1DcEw2Y2pvU0d2TVZHR3FFQnhvTTFmSGdpdWY3WXMzVjNPVjlhQTI1UlNMYmdlNWVzV1NVNTV5aTdaWEMrTEFqeHcvOG9SS3hPS1l4Wm1VcWV1cUtyVGVydHlxYk9Za2ZiQzNVQ2lrOHFhYTZzbG5lL01aUXpNenBxbUp0aDhUN3pocm9yYUdCQm5SYkxWMUFXTkxjNUZxMW1MUzBxUHpncmFMSm5SVkUyd1dUU3BjcmRwdUVMSmNxanVNa1RnUnp2NzVmRGFsMXNKVjIvVlh0bFByTGVRSjNQNUtvaU5maEVSTW1EdzhjbnNxc25wVC9SVFVLNDJhNENKSmRielVaUjRkR0dORXN1NjdZS3lRNmhrdmpmand1ZUR4TXdWTm40SWdjUER4UXlOV25PNUo5Y3JBcnRSdElmZ0pFb3hZeW9ibmdMR3VWTy9PcWRFUVBsZDRIRDBOQkdOdVgwa2lYUlVBL0REbXphRmtNVXZQMGVyVFI4dlRjNmJzTXdQTGJJZTFCUnQyRkNROWY4QnMwN01mUmJNbmRJd3hDTUU0RTdxcXJjajNyY2l2N05ETUpCQUhzaDdINnQwN0hycmh4emQ5OEJWdkc2bnVQakExZnMvMHdZWnpaNlBxWUF5S3I1cklkUEg4YXIxL3RURXdrQnBhWmZhdk5Yb3phZ0ZxVndjcis1QmVzc0NjK05ZcU5GMXZFbXJiVE5oOFE4MzVDZ01VQVV0dFRrUlBkT2IzZHJ3NUF4UU9SVEFHUnF5NXB1bEpsRHdnZ2hyQk5KRmlTR3ZJQWhaZ05uTUxrMCtOd0M2NnBTbTNXUEhLMWJwZHNXc1ZyMWgwU2tXM1dQV3JZUlI0a2V0SExsY0pQSTRSWjFLbXBxdXFvdlVWY211R002YStvcjlReUtVS0tTM2RXOGgwWnpPR2JtWk1VK1ZXUzZUNGJFcFBNaVRFVVJ3N1lUM0paU2hscDlvNk04dWJNM2RMM0Q1YjMzYWFhckdJd00xZEdwbTNnWG5jS1laNlY1bWFDWEFHZ3pWYkxtSVpEUFhsZFkxSHNTTm5RazQ3YzBFa2w5Wk90elN6VHl2end4d2ZwVG5ObTlHWU81ZFVPUmNNMXRqTzhaeldsYko2eS9hWTdUUlVWVDJ1MDdwWjErOEZIb2pTZWpieS9RQWVaeUpaR244R1R5a2tWWDFIZHg3STZkMHBxNmRVRzdWZFIxVk9sR0NBd1ExOEVLV01kQlFHUHZ5bnBXQVFRUk1panFuaEJXbFRqK1dDYW1nYko4anUzZVpwM2hHUk5XTURaODF4dGUxdXRtRGdIeDJYb0t3RkxZV0xxTTZNYzhZNWRGWFQxTjZmL3ViZVAzN2hWUmVmL2hLZ21KdzlKcnZjcUIyZUxoOHVUNC9YeGtiTFV3Y21EajlTMlY1djJHRXBGbzR3a2VuaTNXdU12bUZqYUVWcTVUcHJjTmpvMWRSdWNKTXpnS1FDUzUxMUZmUDFxSGIvSHdmcW5YdUVqamhYRGliQWttd2pTUjJ1Vm9nT29abE5sRHpFamllOVlsaWNhbFRMcFZxMVVhcTRwVXBZTGFKUjFCb1YzZlZqenc5ZEwzSzVJaUZrVEZFNlplaTZwZ2kxdDVCZE9adzlLU0ZYSzIvcDZiNUNkamE1ZHFiQ21VdXVZUnc3b1Uwa0U3VjFkbUthRm5IT2lDNURNNmM1YjE3ZHJEN0ZiTVpxRzJuUkNuMmgxdG5uOUo1b3ArNXJRYlltVEhIcmJUTVpZWk1qbVN5NzhzSXpVMFJ4eWIySFdKTkVnMUJxcHJ6aTBwU1BCMGpHcldaMG5uUkJwcDlqZk1iaVBrcnRYODI3NlFvanlNbkh4N3JUQTlCU1ZhZnUrcDVwR0lzYzRjbUNnZm1CRDVLR25vcThPQXhEVGRXT2NqNzlEUDRyd0RRbUlhY2VIK3ROOTBOTDFkeTY2N3VtZnNJRWc3RWdERURTMU5PUkc0VlJvQ3JxMDA4d0NKVFh6UnR2MzluZmE1MjdPVjExL2FNK3dBSjRNanc5WjQ1T0hhUXJPaGFxMVJabko1SFR5dXh2MnlFbEhVMW9IbG0yeHJINTA0TDJib3ZlNHptcU14R0ZZWnpTVnQ1d3kxZUwxZkxGcHorcjdqMGFSSEZYdWdBb1FSUjBwL005NmY0emhwVU80dkRyZm5Xc1hONC9PVFZlR3g4cGp1MGJIOTFXZnF4UnIwZFRVdlgwRk1zUEtqMG5HU3ZYWnRZcWl5cFVuYTFkTHRwWDJ6d0tiK3M5Q2JsQ2dDVjFxcE9Vd3AxeHJpR2lSaGk3MWJneDVkZUtVYjBhMmhXM1ZJN0tsY2llRG12RjJIYXBFY0p6eVpXcUZDYUxlR3hZZXFySEZFSXRaRkw5bWN5d1NQZGtjOTJaTGt2UDlPUXl2Zm1NcVZzWnkrd0liMzJTNU1yYURNMVo1OUx4ZkFtWXNidTJ0cU9XV2ptVGxvSG02cFRVMFRiUXZNazRtMWt6YmtPMnpCZXk0MWJOdW1kRXBDa3FDRkVVdGNTTEFXQ2NLMElOb3FnMUlSUkgxTHl4eUROMlpDeXd2NktvZGRTcVk4V1R1ODRDWnpXbkhwTmtKMmJZU3pJVUJsRUVJdGFjMEQyRHB5U2FMdENWeWxqcDFLN3p3RmpOc1dPS1Q1QmpWQ0p2UVJRQUpMZ2dTU1Rsa3IvNmJ3Y2lwQXgxejBUNXdGajFlZWNQMjBGd3d1cFhIbmVlN2p4bU12aTJsV21sNWIrajhCbGxXdTM4bkMyaFRNc2pXcnhuS0l4QWxtRjZRZkhmZm43Yko5NXlMZUQ0VWRTZEhucGlaTTlQNzducnpiOTdkY056WTlsb3RwSXh6cG5nM05DTWpRTnJOZzZjMUVyMlNZQmJjeXNIcDR2N3B5WU9Wdzd0SFIvZE92SGdUNnEzTFQ4T3VITndUN3Fqdlphd21QTEttOWs3aVJDN0pKMTZiQmZEMm5SZ1YySzc0bFhLZnJrU1ZhZWpXakdzMWFnUndYUElDVm1vcG5nb0lrVVRtWndsRkMxdG1vUGQrUUd6SjIrdDY4dDFXMnE2a0VvUEZMSXAzYlIwMDFJN0haclEwYUhoSExQd2JHK21aWkxySEoyVjJqbDQyNmtZV3NHajdmd000YnhBMGphNVl2YWRiaCs4S1NJZGFtWFNJSFdodXpCbit0WXVBOTIrbFhNSExNWVFSUURBbWRyYWdaS0RoUkVXeXA2L0dJN0RjMHRFR3ZUcDBRbDd2THBpN1JySTJIYnI3Smk0ZlZsZ0FCREZNUURHR01rRjNkbWV3VzhmblM3UWd4dldRTVkxcDVFOEZDZkVCTjBXaktlMU9CQlJpbHQzUGZ4RVgxY3FvNXVWb0tGb3ZPR0c0cmRXeW5jNVBNMFcyck05c0VlRXNHMnJrLysvdlRNTmJ1dTY3dmc1OSszdlllZE9pWkpsVVE0bHk3SXN4WnRzT2Q2WGR1bzBhWm80U1pONnVzNjBNMGt6YWRNUDdUU2R5WFNhOWtNN21lbWtxZHRwK3lGdGtoazNpUk1uVGVwTnNtWEp0bXpKa3JWTGxDbFpJc1VkQlBEd3RudnY2UWNRSkVCU3F3bUJDMzRmTkNBRXZQZUFkM0QvOTl4ejdqblRyNXlLMzZtVlhqS0NBcUFoYU5VN3B5Zmx1ZlMvRnhucUpRR1I1THJTK3EvUC8yZHJKclA1cGp0eVhsOG0xanhSY1AvaTIvLzhXMDg4WVdoNnlLdDJEMHBKVW9xUUM2QnlZWDFFaGFIQ21HTTVHN3ZTRzd0dUxnLzQzSTNHMUlwVFRqMlkwdGZTdDZFQXFKUDZ5clRKblV0ek9hOVpVUmdPOHFNOFB4SG1zdjVZTnNxT2l0eHdPREV1OGo3NUlSWTk4dEJBTkVrd2lzVk1JMkhxbXQ2ZVRxMUpKQnlqb3oyVmpodXB1T0cwWnhKSjI3RU5NMjZVUXJ1enM0VUZRRVFndUJSZVZKUlVLTmVPbUd2ZU5PM3pJUUJqV0htMHFaSC9ZdUlhRVVUbElsQ2xCN3lzckZQK2ErVVhPR2ZVc3pRUm05UGk1elMxUzNBSjMvVEtxZk9RbzRNNWRueUlScUgxdGs2SVBEZndKeHUrMUVZYUVabVFBb2hJU3RRWVV4U0N1ZnBOTmFnM09waWpKNFpnRE5wU0hSQVZpNzdIU28xRGFoUUNSdVJDQW9FUVhERVZwUlJzWGxxR29Xak1FMTcvVVA3WEg3cEpRRlQwb2tPblJ1NjZwVE1xNTM4dVNDNGowakN0MDFmclRGZUpkTm1sVmdGVUJscDFvZERKSkRKTjB3SDR6bjN2ZmY3eEp3RlVoa21FeEovOHc1OC9mdmU5SDcvdlUxbnZXTG02TkZTNlJqUEN6R1ZWOW9DS2t5OWdxREttcTdyS1VDdExyQXFzMUhLdTdOelNkT1RWNDRYUnFEQVk1TElpUHhGa3g0UFJjVDR4R3VXSCtVUk9GamdGUlNoR0dHbzI0NnBRRENXUmNwaWlKUjJudlNuWlpYWTB4MVBOc1l5dHhab1RzWlprd3RhdHVHMXBXQmwyaFJsYmNUZ0puMGRTK2tRa3FyS0ZxZm96VG1uZVZNeDFSdWx6cUpnNkNZS2dyTEpUNGhyTjhHS3J4WFZHWUgrcUN6ZVdQZFFaUDltcjB0UUYreHVvSVFxb0p3OGNUa1NKVlMyM1JNR1lIM2dLVTJ1VjNFZFFzbU93MnYyZ0VQSkFWd3dPYzNiZWJWQm5HR2luRGh4S1JvbVZMUnREYjlRTEExVzVhUHZJRDB2Sk1FaUMxUllFaFVENk90TWp1TnI0NklLR2lKSzY4YzZ4QzRhdTN0VFJCTUIyN3pzWGl4dU9ybzk1M3VLZmFYeElaM3BxcDBiSms2NTAyMHBWN1JRaXBWbFB2bjc0bktIalkzZG5jdEdiQ2ZPR2IvM2dPNEQwdTA4KzVRYTlEQ3lzRXVES2VyUlRUODZseWdSY1NDNThGZEFtNmViRnhFaVVIdzd6NHp3MzRZMk9oOWt4UGpIQzh5Tjhva2pGQ1B3aUZVR1RhSUZRcEdVWmRwT3RxbHA3SnJrbUdYZU10dlpVVThsNTdjZ2trbmJNTnN5WVlRT1lGYVVYcDdKN0tsYUc1ZXl3YThVVlR6WVltN3o0VXErT3N2N05YdGFmb2ErbDRHNVVQbDFVSWE2OEhJaWRjUmZ4eXNUMXNzUEJjdFRVS3dlQkNOQk9OTDN2NTk0ZGVHVnorNk5TQUxKYXpjWWxDQlhVRm1QbGtiNW52My9vMlh1KzhGRWJZbU44cURablc3SklJa05UQVNFSU9Ldk42aVVpQUpDbE9LZUMzTUgrSFpzNkhoV2NBR3RsR0FSQ0liM05XbjJrNzludkhmN2hmYjk5aHdXT0Y3bTFPVnQ5SUFJTnRONFBzaXZiNGdEMndiNitiRDc0NUFNOVkvNFNVTjhyNUFwRmVrNkZsZ1NjSUQ4MGR1R3h1MWN6NkZlWjN6dDQ3Tm1YZG43M2I1NFM4TElyZkFVTkJBTkJSekFRVEFRVlFNZEpaM3JxVUpkU1pmVTM5LytSRDI0UlBHWWk2RktxbElnN2V0cTBkS096T2JYZWFVNWE4ZlpVazYzRk03RjRSenBwRzJiTXRBeWxGSG1kdzNrbDRJS2tGd1ZFM3F5dHJoWFRnV25udGZRbnE5Ylh5bXlnMG50THFobkt5U1NtU0FJSGlBQ2lzcjVPeDEvTCtscTFGbDF4Y0laZ05NUzFEaENScW82QTl5c1ByZlUrdStHdnZ2Zk56MjQ5MW1sc0lqN0d3YTBJZ2MvSHFZQUF3S0pVd2xGM25mLzVyajJ2UHZFSDkzN3huNzZVajdJeWtzdTk2T05Wb210S051K1RwSFRTaW1xMlUzWThHbnJpeTA4VityMnYvLzNmZnVhakp6dk05V1BGOGRvWlJqeW12ZnJCVDE3Zi9kcGpYM24wNlcvK1RqNGFYMktHd1JRTVpPU3RrR2N5QUFBUURVbEVRVlQ1Zk92TmJRRGgvaU1YTm05b0J5QXBxVkgxcFlMWm8vcWt2VEZVeGp4Ky81M2RwcTRPRmNOV3UrWGJQM2p6OXB0dlhOM1NOdVQxTXdRSmJzWGIyWlFBSXhnSUJvREp3RURReTZvODFXZDJxcFNDVkIvNTlLYldSRk5NUzdTazRpMkp1S1ZiQ2R0V3dDNDdyNVg2S2dEQ1VqK2NxYlFtT2VmTzRPbzZFbVd0WldYbmtzM2x3cGFtQ2FVQWUrbEJTSlBydzlPQldKcitWMVpJNXBTK1RxbjROZWhyUTF4ckRCRW9UT3BKWS84K2VlalliM3p0b1pidWxtZSs5ZU1POXM2MkZZOG5vYzBWRXh6OStSaHRpUUFNc2swMVBoejF2WG5tSlZDRy91dzdYN2pyRDU5MjRiem51Z3I3RUcyd2x4OUVZR3ZxOGFGUktXbEZjeUliY1VRa0FsVmxSQ1FFemROZ2psRVl1bHIrcWIvN1NtZWIrY3lmUHR1WlhyMnQ0N0VFdEJWRmxtTXdyNFlSRytabjN1eDdBWkpqWC92TGo5M3hqZC9QZ2VHNVF3cWJuZmE0aU5GMTVmeG8zamFVZFoxTnZZT0RpcXBzNm00WjlmMkcrbDQ1UkFDQWZzZ3RVeDB1alBXZG4vakdIOS9Id1FYU1NpMFpxLzFhQXZBbEZDdGl6NlhGVkwzQ1N6WVJUQUNOZ1E1Z0l0SHBHWXZERWVkQ0NpSVNSRlRhRGxOTnhlMnJ2SkZUT1VjTUwrWENsc1NWejNKaEt6dW5SbFFWZjRWcTVaNDZFVlNmdmY0S1NoOTZoRml5RUFGRFlXYk1JNGVzWGZ0NE1xNGFtcjQ2TlhoOCtEK2VlZUhFVytNM0pXNWYzN1RGb0lRdkN4RjRNRFdMdTZxVEFDR2dUcmFoMkRrYWZtOXdkNzg4ZHZ2MmxaOS9lbnZzRTU4Y0FWZTZCY2FVeXgrb1FRVkVsTGF0UGUrZGt3THUzZHcxVml3Q29LNHh4akJmREExZHBXdXVTanNMS1FURzBpM2dEajd6M0wvLzF4c24zaDVmbjdxanAybUxMbUkrdVJ3OHVrYkRrQWhNSjhkUTdEd05IaGpjM1MrTzMvbndtczg5L2JGWWt4NmNHYzAvc0UyMGRpcmUrSkw1QlpmdTJ1NUQ1NEtBUDdKMS9jNzNUa1pjUG56YjZpRzNXS01nd3RKRzA1U3hYSEYwMU4rMHJtWENDeTVwaExOVldWUlhLMUp3MGllMk1PdnVudm51aTVZRm5oR0Z4ZW9YMEZTUWxhWlhpYU95Q3h2Q2RLSlRTV2huWkZSTlNXemx3ZWY4U0FzUklsQVVOSFNsNlBPR2RjK0pzTkxHcVpQMkszdGtNa0dhQ3BKSVNMc2pEcnIyeGk4Ty9mVEhidy8zeWh1ZFc5Wm1ibzVoazVReUpFOWdDTlA5T1MvMnZaWmVnQXBwT2pxTVlWWmNPRDd5N3ZubzZOcmJrazkrK3A0Tk4yVm94WXFCbmg3ZEt5eVo0ZlY2UWtRWjIzcnR3Rm5COFlHdHEwYUxSVlF3WVJqLzg4S3hMUnZiVjdUSGZaOWYvaWhYZmpwZEpUOXFmZmNBY0xsN3g0bm5mN1IzOUJTc2lXL3N6bXgwc0VsS2NRMkdZYUNOakdYRndQR1JBK2VqbzJ1M0pELytxVzNyNzFvRDJhSTc1aXVlaDBLNGo5NGJkYTVVL0N4SVdnTGJ4WWtvWVpuN2pnN0VZbnIzeXN4WXdkTVVwaXBNTHR6azV3V05KTkpVbHRMTkVjK0RhekdRR2FvOEdSakdpZUtlNmhkZE9oQTdLYUkwNmFkRzVWWGlrS1lUblhpNWJDRlZxL2lNSXk4eWliMDBqS0h2OHpBU21aUVZoSHdwUlpMbUF5bXNqSDcyalBQQ0x1bllaT3BUblR5a2tMcXVhaXNTa0F0ZWUrbm9LNis4TjNnaWlJdVZxNUxkclhhWGhYRUVKa2dJaWlSeU9WbVpaSHFuSENORkFVMWxHZ0FHbEI4b251M0xIblgxL3RXYmtnODlzbm5yOW5VQU1qbzVsSHY4SHRuV2drVjNDUXlzMTUrU0FPODYrSUhnY1ArV1ZjT3UyK2JFZHg0NDgvYmhnYTkrN3M0UjN3V2E1MjlWV25Genh4dk91ZlBLaGhVMDZyLzZ5cEdkT3c0TkhnOFRjbVZYc3J2VlhtRmhFZ0VrU1g0cHc5QlZwZ0ZBQVBrTHhRL2VIei9pNnVkdjJKUjY4TkhOVzdldkE0VGdmRTVJUWdWQlllaDZ6QS9kaDdlRnExWXZHUTB1b1NnWUNXbW8wN1dnNjMxRml4aWFiN3ZBWFBIZDBwRUJjR3FISzFRRllxT0tRS3lvM3E0RFY3eEtqTlV2WG1xb0tndDk4WXZYZTMvMXZuVk1CM0hSWmp2TER5SmhwN1RCQWVmbk84azB5REpoVnNraEthUnA2MHBiRFBMUmdmMTkrL2FlN0QwOG5COWdoc2hrdFBhTTNSTFRrNlppNjJDVkRJa1FrRUFnRDJXeHlBdGp4Y0ZocjcrQWcwNEg3N20xNDg1dFBUMmJWNEVLMFdDQmorUmtWNXY3eUwwc0tGNTcvNjdselF3Qkh2VzlqR0gvNDMrLytlZzlhOWJmMEp3dGV2TTgzU1NTZGx3LzliNzE2dHM4SHJNY2piWEZJQmNlMkhmbW5iMG5lNDhNdVJjVWd6ZWw5ZGEwMVJyWGs2Ymk2R0JOdm5XR1lYaURROTU1RjRaS2huSFh0dlVmMmR3RkdrUUQrU2dVcFFyNWt6Q0dubyt1NXoxd1Y3QzJXL0d6SU9WaTEyQWlVQldVVlh0TUdpd3NWQTduWUZKaWVjbUxyWWpVaW1ySnJJenZ6aTR1Y1drWGRvbGJRQlNKMW5oY1N0aDM5TUxEVzljTUI2NmhxNXlMSmY2eEx3dEphYWZVOFJIbmw2K0JyczJwdmdEQUZCYjZYTDQvYnBqcXJYZXR1ZldlYnY5Qy90akpnZDRUL1dmNytzNFBIUzJPZ2ZRTUZVeVVxb0lxZ1JUQUplTUNpMGFTeDlhbzYyOUk5OXk4WmVQNmxkYUtKQVJST0p6bmtVQ0ZLVVRCalNzQkdJaEZQNTR1QkFnb1kxcTdEcDdOSk0xTk4zUU1lUk1NMmVYZmRwVWdSYnd0VFk2bGtBdzhMaytQRzZaNjY5MXJidDNlN2ZYbmo1OGE2RDF4L2t6Zm1mNmhZMlhEc0ZBcVU0WkJ5Q05XTkpJOGNZTzZZWFdtWitNTXc1Q29ZSlg2QW9DVVpCbkEwSDU1RDBRODZGbXZCT09MM1dZUVFUUW1uUXNibGNPSjh1TVp1Y1RLckZLSXkxcGlMd3VCN0d5TEhla2RmbVRyT21BeUNMbGphYTRmMW1LRVdoeElLWjBreTA4NFA5c0p5S1JqejZtK2t5QXdCYU5JaFAxNWhtalkydVp0YXpkdnZ3bjh5QjB1REl6a3gwWnlFMlA1Z2hzS0xoQVZ3N1RpY1RQWmxHeHZTYlIxSkRGcGdaUXc0WHRueDRrQUdhS3FvT2VMVElLdjZrVHVMZXFSZENGUTJxelBBTDJRbjd1UTI3NjF5NmNBaWMxL1ZCMFJ3MURHRTZJNXJaNGZwTGpERUtZTXczUzB6WGV2M2J4OUhYaVJPK0xPYVJpSnVKVm9TblMwSkZvN2twaXdnS29OUTduSUZVc2lRNWNKdEY3Yml4SDNiOW1vaEJQQVJjTnlHdFFPRmN1ck53RFFrTmhyQmhGejNQL29obzdYOW41d0xqdldsa3ArLzVjSE42eHQyYlMySmV2NXl6RWtMS1YwRXN3cnhuNjJBNFdRcVRpSUt5cDJqd3dKd0M5RzVJYUlxS2pveEl6dWxoaW9LOG9GMmdnQWdDRVFBQkg0WEJURDhOd0VFWlZLV3Bacmp5SXIrdjZHdFVLekZUY0xqY3pQYXdjSmlERkVGUWxnSXZEdnUzMVZPbUhtdktCV0FVVWhBUlRlMXFTZTZaKytpSkpodUJFVlFrUlVMMjBZa2lEZ29oaUcvUk1rcXczakVrZ2lRNE5rM055ekh6bjNidHZNSUllY056UzRRWTJZc1NHeUliSFhUaENLVmp2bHhQVFg5NTM3eklNZFhSM0o5MDRNYmUzdVdJNkp0MUpLSjRaaGFQOXNCL3ErVENXdlVIMm53Y2xzZkNHbzZFYmdocVZuSzBkQ0tna3dUdTdIbXpHK1loUkp5d3B2WElFVUxNZGJNSDhnUWlCRmM5cVNrandacWFvU2QxUS80RFZPNStHaXZZa01EWVFBVnJHR1ZMN1JYRkIwQ2NNQW1ub1dyMnJ1SllsMEZkSUpjKzlCNE55L2ZTdWdpMkZRZFEwTkZnWTFxeDkvL1doWTFieUJBQVQ4dHA2MjNnL0dBZnd0UFcyY3kvNWNYdGVXMmNaVEthWGpvQ0RuZjNlb3VZSk1KUysxOG53RlRIb3ZzendZUkVCMkViK0dJUlk4M3RVdUV4a1crQTBQNWtOUzlLUE90dGpLanJqclJ3amdCL081NzJnT0VGa1lpS2FreUtUUUR5ODJmN3FVWWN4KzlzcVJSS29pbWxMbXZzUFdHMjlKelNaajd0eUZCblZCRWlrS05sc1dMSDZYc1NIQTh3WWlUdkRpdGswclZFVTVQVFNTMEdPT294OCtPWlJRamNVK1Ric0twQ1RiQm1ET0wzZXFJMW1SK2JEcWU2MlhRWUFRclYwSlFGRExURGoyWVFiNnhRTWlDa0ZDWE1jU2hsd1FHckkxZzJGVWg5M2JSTUNZYU1rWUI0NDV1L2FRYXBKcFRqWi9hMUJYaUVCVFdGcDN2dnQvaHdlR0NqRkRtLzN6WGtURGJVT0E1NU1vbElxR24zaGtIVEJ3SSsvdVcxZDB0U2ZjNktKVCtLVUdFUmttb2VhODhKcmFQeXlhNnFTK2lLem9pZFlNNzJ6RnNGalQ2QzhCS0F5cEpoMXJGeFp6MXB5dE1aSzNONFBDNnJQT1NBU0lvaVdqSCs2MWQrd2l4U0RUYXZqQmRZZFFwbzNNZDM3MHp1SGVrWFVkTFY0MHMvQ1JKRXBZdXE0cGl5SUR2Q0hBOHdraUZyeW9xeTJSU1ZqNTBHL0pXRjBkQ1RkY0hyV3hpRWpYcFdyYXI3eXU5ZldMcG5UZDl0MGlZQkJGYTdvazZoalZxbk1BQVRpbWRuWmdvbjh3SDdNMFUxZVdnU2Q4SFVGRUh2Q1d0RWpHTVFqckUwUW9hWEJyV2o5NTFubGhKekdON0V0bThqZW9NVnpLVml1NTg4Q0psL2YyL2ZYdjNjK1ZpRmNrbDBnaVZXV3RkdkxZKzZPRG93WGJVQmUrQWpjRWVKNWhpSGt2NGtLcWpIa0I5d0t1TElmOFd5TFNOS2s2OXV0djZDZk9pT1pVdWNENGRRY1IvVkFtWXRHYVRpYjltcTQ5U0NKTlkrZUhDd2d3T09JYXVyTHdmL0NMQ0l3NDZaWm95V0FRMXUwaWlBQkFOS2UxTXdQT3oxOEJZdEtKTlRTNFhsaTZHa241YnovYzk2WFAzVzVvYXNFTHAySWlRcEpqNmluTi9wY2Y3bjF4enhsTE1SZEZiS2pPQXJ3a0I2eEZjTnZuRnlKU1ZhbkY3RGZmTWc2ZEVpMXBBS3piclVWZ3JoK3Q3cEJtSElPZ2RwNFRBb1JDdGlTY2djRUNDVHg5TG52ODlGaVRaWWxsRlBDdk1TWHg2MmllM0c5V3Q4c0FJQkxOS2ExL3lIbitaZVJTT3ZHR0JsOS9KRkZTaS8vZ3hZTXIyNUwzYnV3ZThyTktPVFdkaUV4ZE5abjI5V2QyVEJTaUx6OTFaenFqbHhJR0Z6aDFFMkJKcEd0S3pOSVd4VXA5ZzR0Q0JLcENldHg2WjcreC81aG96dFI1Y3dBWHBLdlIycFVBVWEwbkFVUmthR3JPRFlmejdqMjNyRHJhT3pvOFViUzBScS9EZVFNcEZHMXBpbGxZc3liRVY0b2swWnhXUjBhZG43NkVRU1NkUkVPRHJ6T0tpaHlpZDQ1Y2VQTEJkUVEraUFwNVJVaHFzVzk5LzYxRTNQemFGKzkzcGVmNjRhSlllcXliQUd1S2tzc0hneU5GWFYxbXUzU1dFa1NnTUtFbmpZTUh6YmNQaWVZMHNMcXFMeUlyZUx5em1UYzFYNS9kUjVxS0llZmpCZC9SblV6U2V2UHcrWVJtTmtydnpnK0lHSVRDU2ZEbU5Ib0xZQytabEtJcHJXUnpzWisreUlxZWRKS052T2pyU1VJM0RyNC9rSXFaZC9aMGpvWFRUUlVsVVpQbDdEcDBlanpuZi9XejkwNUVvMkc0YUhwTzFFZUFpU2h0bUVkT2pUeTM4MFRhc0M3L2hnWUxFQ0pRVUJocDgvQWg4NDBEb2lsWnQ0VFZpbXRDSWFNYnV3QVk4Sm9QamdpQWlKN1BVU0tCLzVFYk04T2p4U0lQMmNXS0hUYTRXaVFCTU5IZWZOV0ZYR3FFa0RLVFpQbGk3Q2N2c2tKQjJLbUdCbDhmaUVnRHRmZDBka1ZIbklGVzJlMEdFUm5nM2tNRHYvYXhib0RJaitTaWlQNldxSmNIakFLazQrakZRa2dnRjgvWDFhQU1FVEFVUnRvNGZ0VGF2WjlTQ1ZDVU9xc3ZJdk1DMFp5S3VqcVJlOWVoOXFTVXdFbmUydE1XaittdUROc3pEbU9zZjdSZ05GYWg1dzFFaUhoYmhrd2RSTDFYb1VzSUtkTUpETUxZY3krcXVYRmhwK3M5NlZ3K1lOYnptK01PVkV1R3FTdDlvK09PcVcvc2Joa04zY1cxRzZFK0Fvd0lFY2gwMHNnWHc0a2dWTlJHTXZaaUEwR1lTYU8zMTM1MXIwekVTRmNYeEREa0JlR2FGVkkxTVlpdXc5bUlLT0Rpd2J0V3ArSkdNUkNXcWhtbU1wYnpOTlpJaDU0bkVEQUlaRG9wTWluMGFwaFNkM1ZJS1ZOeEZOSjU3bVYxYkZqYXlRVmgvRXNhUlBSRWNITjN5MGR1VEJmRmRIVjlJckFVOWV4QVRqZVpyZWl5eGlYYTVwMjZLVjhvUkh0VHpJL0V1ZUdjcFRZOGhrVUdtYlp4K3JTMTR3MlpjTWpRRmtLclhRdzV4WjFvelhVdC9seXF5eWdFTVFDWFI1dDdXbHRTVmhBdHRtRmdJU09JVUJlZHpiaEFQT0FTUXNxa0F3RE84enZVQ3dOa21QVytvS1ZQTGdodTYybGIyWkhJVjArdlBjN2JtcHd0RzlwZHZ2aXF2djgvamdRMU15c3VSdG9BQUFBQVNVVk9SSzVDWUlJPQ"}];
if(window.createjs != null) createjs.Sound.alternateExtensions = ["ogg","mp3","wav"];
ApplicationMain.images = new haxe.ds.StringMap();
ApplicationMain.urlLoaders = new haxe.ds.StringMap();
ApplicationMain.assetsLoaded = 0;
ApplicationMain.total = 0;
openfl.display.DisplayObject.__instanceCount = 0;
openfl.display.DisplayObject.__worldRenderDirty = 0;
openfl.display.DisplayObject.__worldTransformDirty = 0;
com.indigo.Main.stageWidth = 640;
com.indigo.Main.stageHeight = 384;
openfl.display.BitmapData.__base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
com.indigo.BackgroundBD.resourceType = "image/png";
com.indigo.BackgroundBD.resourceName = "__ASSET__:bitmap_com_indigo_BackgroundBD";
com.indigo.LoadingTopBD.resourceType = "image/png";
com.indigo.LoadingTopBD.resourceName = "__ASSET__:bitmap_com_indigo_LoadingTopBD";
com.indigo.controllers.GameAssetsManager.currentProgress = 0;
com.indigo.controllers.GameAssetsManager.currentLoaded = 0;
com.indigo.controllers.GameAssetsManager.spritesheetsToLoad = 0;
com.indigo.controllers.GameAssetsManager.totalToLoad = 0;
com.indigo.controllers.GameManager.GATE_WIDTH = 53;
com.indigo.controllers.GameManager.GATE_HEIGHT = 271;
com.indigo.controllers.GameManager.isGateOpen = true;
com.indigo.controllers.GameManager.runners = [];
com.indigo.controllers.LocalizationManager.defaultFont = "font/antrf_-webfont.ttf";
com.indigo.controllers.WaveManager.maxLife = 30;
com.indigo.controllers.WaveManager.maxPower = 20;
com.indigo.graphics.EnemyGraphics.SHADOW_HALF_WIDTH = 46.5;
com.indigo.graphics.EnemyGraphics.SHADOW_HALF_HEIGHT = 5;
com.indigo.graphics.EnemyGraphics.instanceList = [];
com.indigo.graphics.VfxGraphics.instanceList = [];
com.indigo.logics.EnterCastleLogic.instanceList = [];
com.indigo.logics.FollowStraightLineIfOpenLogic.instanceList = [];
com.indigo.logics.FollowStraightLineLogic.instanceList = [];
com.indigo.logics.RemoveIfOutOfScreenLogic.instanceList = [];
com.indigo.logics.UpdateOnEnemyDisposeLogic.instanceList = [];
com.indigo.logics.handlers.EnemyEnterCastleHandler.instanceList = [];
com.indigo.logics.handlers.PopOutOfCastleHandler.instanceList = [];
com.indigo.logics.handlers.RunAwayHandler.instanceList = [];
com.indigo.ui.HowToPlayPopup.selectionY = 370;
com.indigo.ui.HowToPlayPopup.yAdjustment = -30;
com.indigo.ui.PausePopup.numberOfButtons = 4;
com.indigogaming.wnpdispatcher.WNPEvent.PAUSE = "pause";
com.indigogaming.wnpdispatcher.WNPEvent.UNPAUSE = "unpause";
com.indigogaming.wnpdispatcher.WNPEvent.MUTE = "mute";
com.indigogaming.wnpdispatcher.WNPEvent.UNMUTE = "unmute";
com.indigogaming.wnpdispatcher.WNPEvent.RELOAD = "reload";
com.philipmabanta.tools.display.UITools.blankColorTransform = new openfl.geom.ColorTransform();
com.philipmabanta.tools.display.UITools.GRAY = new openfl.geom.ColorTransform(.3,.3,.3);
com.tkb.controllers.DisplayManager.DISPLAY_TYPE_SCENE = 0;
com.tkb.controllers.DisplayManager.DISPLAY_TYPE_BACKGROUND = 1;
com.tkb.controllers.DisplayManager.DISPLAY_TYPE_FOREGROUND = 2;
com.tkb.controllers.DisplayManager.DISPLAY_TYPE_HIGH_TIER_FOREGROUND = 3;
com.tkb.controllers.DisplayManager.DISPLAY_TYPE_UI = 4;
com.tkb.controllers.DisplayManager.DISPLAY_TYPE_SUPER_IMPOSED = 5;
com.tkb.controllers.DisplayManager.DISPLAY_TYPE_SUPER_IMPOSED_BACKGROUND = 6;
com.tkb.controllers.DisplayManager.DISPLAY_TYPE_SUPER_IMPOSED_FOREGROUND = 7;
com.tkb.controllers.DisplayManager.DISPLAY_TYPE_POPUPS = 8;
com.tkb.controllers.DisplayManager.displayIndexList = [];
com.tkb.models.Entity.DISPOSED = "disposed";
com.tkb.models.Entity.BUILT = "built";
com.tkb.models.Entity.ADDED_GRAPHIC = "agraph";
com.tkb.models.Entity.ADDED_LOGIC = "alogic";
com.tkb.models.Entity.REMOVED_GRAPHIC = "alogic";
com.tkb.models.Entity.instanceList = [];
com.tkb.utils.TrigUtil.oneEightyOverPi = 57.295645530939652;
com.tkb.utils.TrigUtil.PiOverOneEighty = 0.017453333333333335;
com.utils.ResizeUtility.QUALITY_NORMAL = "";
com.utils.ResizeUtility.QUALITY_HD = "-hd";
com.utils.ResizeUtility.QUALITY_HI_HD = "-ipad";
com.utils.ResizeUtility.QUALITY_IPAD = "-ipadhd";
com.utils.TrigLUT.TWO_PI = 6.2832;
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Unserializer.CODES = null;
haxe.crypto.Base64.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
haxe.crypto.Base64.BYTES = haxe.io.Bytes.ofString(haxe.crypto.Base64.CHARS);
haxe.ds.ObjectMap.count = 0;
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
openfl.external.ExternalInterface.available = true;
openfl.external.ExternalInterface.marshallExceptions = false;
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
spritesheet.data.BehaviorData.uniqueID = 0;
ApplicationMain.main();
})(typeof window != "undefined" ? window : exports);

//# sourceMappingURL=GateCrashers.js.map