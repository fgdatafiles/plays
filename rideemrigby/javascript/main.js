var scG = 2;
var _W = 600*scG;
var _H = 400*scG;

var login_obj = {};
var fox = new fox();
var commonclass = new commonclass();
var g = fox.globalvar;
var language;
var startTime;
var renderer, stage, preloader; // pixi;
var soundManager;
var LoadBack = null;
var barLoading = null;
var barMask = null;
var LoadPercent = null;
var LoadRabbit = null;
var LogoGame = null;
var barLoad = null;
var sprites_loaded = false;
var dataAnima = [];
var dataMovie = [];
var dataSound = [];
var cache = {};
var fontMain = "GlassJaw";
var fontLubalin = "ITC Lubalin Graph W03 D1489630";
var fontLubalinAr = "Lubalin Graph ITCTurnerAraW03Bd";
var fontFranklin = "Franklin Gothic Heavy";
var fontNathan = "Nathan's Notations";
var fontArchivo = "Archivo Black";
// var fontArchivo = "ArchivoBlack-Regular";
fontMain = fontLubalin;
// fontLubalin = fontMain;
var stats; //для вывода статистики справа

var options_debug = false;
var options_music = true;
var options_sound = true;
var options_mobile = true;
var options_pause = false;
var options_orientation = null;
var options_horizont = true;
var options_quality = "high"; // high, medium, low
var options_txt_offset = 0;
var options_browser = "none";

var KEYCODE_LEFT = 37, 
	KEYCODE_RIGHT = 39,
	KEYCODE_UP = 38, 
	KEYCODE_DOWN = 40;
	KEYCODE_A = 65;
	KEYCODE_D = 68;
	KEYCODE_S = 83;
	KEYCODE_SPACE = 32;

var ScreenMenu, ScreenGame, ScreenInstruction, ScreenEnd, ScreenCN, ScreenPause;
var ScreenLock;
var currentScreen, scrContainer;
var raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) { return window.setTimeout(callback, 1000 / 60); };
	
var fpsLabel = addGlowText("FONT LOAD", 40, "#FF0000", "#000000", "center", 150, 6);
fpsLabel.x = _W/2;
fpsLabel.y = - 200;

function init(lang) {
	if(lang){}else{lang="en"}
	
	if(window.orientation == undefined){
		options_mobile = false;
	} else {
		options_mobile = true;
		options_orientation = window.orientation;
	}
	
    var ua = navigator.userAgent;
    if (ua.search(/Safari/) > -1) {
        options_browser = "safari";
    }
	
	if(typeof console === "undefined"){ console = {}; }
	
    //initialize the stage
    renderer = PIXI.autoDetectRenderer(_W, _H);
    stage = new PIXI.Container();
    document.body.appendChild(renderer.view);
    preloader = new PIXI.loaders.Loader();

    window.addEventListener("resize", onResize, false);

	startTime = getTimer();
    onResize();
    update();
	
	language = new eliteLang();
	language.add_lang_xml('en');
	language.add_lang_xml('fr');
	language.add_lang_xml('es');
	language.add_lang_xml('de');
	language.add_lang_xml('it');
	language.add_lang_xml('pl');
	language.add_lang_xml('ru');
	language.add_lang_xml('ar');
	language.add_lang_xml('tr');
	language.loadSettings();
	language.setLanguage(lang);
	
	if(lang){
		if(lang == "ar"){
			fontMain = fontLubalinAr;
			fontLubalin = fontLubalinAr;
		} else if(lang == "ru"){
			fontMain = fontFranklin
			fontLubalin = fontFranklin
		} else if(lang == "pl" || lang == "tr"){
			fontMain = fontArchivo
			fontLubalin = fontArchivo
		}
	}
	
	soundManager = new SoundManager();
	soundManager.currentMusic = "none";
	
	LoadBack = new PIXI.Container();
	stage.addChild(LoadBack);
	scrContainer = new PIXI.Container();
	stage.addChild(scrContainer);
	
	createScreenLoader();
	loadManifest();
}

function createScreenLoader(){
	var bgContainer = new PIXI.Container();
	LoadBack.addChild(bgContainer);
	var barContainer = new PIXI.Container();
	LoadBack.addChild(barContainer);
	var frameContainer = new PIXI.Container();
	LoadBack.addChild(frameContainer);
	
	var preload_image = document.createElement("img");
	preload_image.src = "images/bg/bgLoad.jpg";
	preload_image.onload = function() {
		var LoadBack1 = new PIXI.Sprite.fromImage(preload_image.src);
		LoadBack1.texture.baseTexture.on('loaded', 
				function(){
					LoadBack1.scale.x = 0.5;
					LoadBack1.scale.y = LoadBack1.scale.x;
					LoadBack1.x = _W/2 - LoadBack1.width/2;
					LoadBack1.y = _H/2 - LoadBack1.height/2 - 50;
				});
		bgContainer.addChild(LoadBack1);
	};
	var preload_frame = document.createElement("img");
	preload_frame.src = "images/items/frameLoading.png";
	preload_frame.onload = function() {
		var frameLoading = new PIXI.Sprite.fromImage(preload_frame.src);
		frameLoading.texture.baseTexture.on('loaded', 
				function(){
					frameLoading.x = _W/2 - frameLoading.width/2;
					frameLoading.y = 486 - frameLoading.height/2;
				});
		frameContainer.addChild(frameLoading);
	};
	var preload_bar = document.createElement("img");
	preload_bar.src = "images/items/barLoading.png";
	preload_bar.onload = function() {
		barLoading = new PIXI.Sprite.fromImage(preload_bar.src);
		barLoading.texture.baseTexture.on('loaded', 
				function(){
					barLoading.x = _W/2 - barLoading.width/2;
					barLoading.y = 486 - barLoading.height/2;
					barMask = new PIXI.Graphics();
					barMask.beginFill(0x000000).drawRect(0, 0, 313, 32).endFill();
					barMask.x = barLoading.x;
					barMask.y = barLoading.y;
					LoadBack.addChild(barMask);
					barLoading.mask = barMask;
				});
		barContainer.addChild(barLoading);
	};
}

function loadManifest(){
	soundManager.initSoundModule();
	preloader = new PIXI.loaders.Loader();
	
	preloader.add("bgLoad", "images/bg/bgLoad.jpg");
	preloader.add("bgMenu", "images/bg/bgMenu.png");
	preloader.add("bgInstruction", "images/bg/bgInstruction.jpg");
	preloader.add("bgEnd", "images/bg/bgEnd.jpg");
	preloader.add("sky1", "images/bg/sky1.jpg");
	
	preloader.add("btnDefault", "images/buttons/btnDefault.png");
	preloader.add("btnDefaultOver", "images/buttons/btnDefaultOver.png");
	preloader.add("btnDefault2", "images/buttons/btnDefault2.png");
	preloader.add("btnDefault2Over", "images/buttons/btnDefault2Over.png");
	preloader.add("btnPause", "images/buttons/btnPause.png");
	preloader.add("btnPauseOver", "images/buttons/btnPauseOver.png");
	
	preloader.add("images/texture/TitleAnimaTexture.json");
	preloader.add("images/texture/Anima1Texture.json");
	preloader.add("images/texture/Anima2Texture.json");
	preloader.add("images/texture/Anima3Texture.json");
	preloader.add("images/texture/Items1Texture.json");
	preloader.add("images/texture/LogoTexture.json");
	
	//сохраняем счетчик кол-ва файлов для загрузки
	preloader.on("progress", handleProgress);
	preloader.load(handleComplete);
}

function checkProgress() {
	var progress = (preloader.progress/100 + soundManager.loadedAudioFiles/soundManager.totalAudioFiles)/2;
    progress < 0 ? progress = 0 : 0;
	percent = Math.floor(progress*100);
	
    if (progress<1){
        setTimeout(checkProgress, 100);
    }else{
        handleComplete();
    }
}

function spritesLoad() {
	if(sprites_loaded){
		return true;
	}
	sprites_loaded = true;
	
	var img, data;
}

function textureLoad() {
	iniSet("images/texture/TitleAnimaTexture.json");
	iniSet("images/texture/Anima1Texture.json");
	iniSet("images/texture/Anima2Texture.json");
	iniSet("images/texture/Anima3Texture.json");
	iniSetArt("images/texture/Items1Texture.json");
	iniSetArt("images/texture/LogoTexture.json");
}

function iniSet(set_name) {
	var json = preloader.resources[set_name]
	if(json){}else{
		console.log("ERROR: " + set_name + " is undefined");
		return;
	}
	json = json.data;
	
	var jFrames = json.frames;
	var data = preloader.resources[set_name].textures; 
	var dataTexture = [];
	var animOld = "";
	// console.log("set_name:", set_name);
	
	if(data && jFrames){
		for (var namePng in jFrames) {
			var index = namePng.indexOf(".png");
			var nameFrame = namePng;
			if (index > 1) {
				nameFrame = namePng.slice(0, index);
			}
			// console.log("nameFrame:", nameFrame, index2);
			
			var index2 = nameFrame.indexOf("/");
			if (index2 > 1) {
				var type = nameFrame.slice(0, index2); // тип анимации
				var anim = type; // имя сета
				if(anim != animOld){
					animOld = anim;
					dataTexture[anim] = [];
				}
				dataTexture[anim].push(PIXI.Texture.fromFrame(namePng));
				// console.log(nameFrame + ": ", anim, namePng);
			}
		}
		
		for (var name in dataTexture) {
			var arrayFrames = dataTexture[name]; // какие кадры используются в сети
			dataMovie[name] = arrayFrames;
			// console.log(name + ": ", arrayFrames);
			// console.log(name);
		}
	}
}

function iniSetArt(set_name) {	
	var json = preloader.resources[set_name]
	if(json){}else{
		console.log("ERROR: " + set_name + " is undefined");
		return;
	}
	json = json.data;
	
	var frames = json.frames;
	var data = preloader.resources[set_name].textures; 
	// console.log("set_name:", set_name);
	
	if(data && frames){
		for (var namePng in frames) {
			var index = namePng.indexOf(".png");
			var nameFrame = namePng;
			if (index > 1) {
				nameFrame = namePng.slice(0, index);
			}
			dataAnima[nameFrame] = data[namePng];
			// console.log("nameFrame:", nameFrame);
		}
	}
}

function handleProgress(){
	percent = ((preloader.progress/100 + soundManager.loadedAudioFiles/soundManager.totalAudioFiles)/2)*100;
	percent = Math.floor(percent);
    percent < 0 ? percent = 0 : 0;
	
	if(LoadPercent){
		LoadPercent.setText(percent + "%");
	}
	if(barMask){
		barMask.x = barLoading.x - barLoading.width + barLoading.width*(percent/100)
	}
}

function handleComplete(){
	loadData();
	spritesLoad();
	textureLoad();
    onResize();
	
	ScreenPause = new ScrPause();
	ScreenPause.visible = false;
	stage.addChild(ScreenPause);
	
	ScreenLock = new ScrLock();
	ScreenLock.visible = false;
	stage.addChild(ScreenLock);
	
	start();
}

function getTimer(){
	var d = new Date();
	var n = d.getTime();
	return n;
}

function refreshTime(){
	startTime = getTimer();
	if(currentScreen){
		if(ScreenMenu){
			ScreenMenu.resetTimer();
		}
		if(ScreenGame){
			ScreenGame.resetTimer();
		}
	}
}

function sendstat(id, value){
	// _achievementSystem.sendStat(id, value)
}

function saveData() {
	if(isLocalStorageAvailable()){
		var login_str = JSON.stringify(login_obj);
		localStorage.setItem('j2d_rideemrigby', login_str);
		localStorage.setItem('options_music', options_music);
		localStorage.setItem('options_sound', options_sound);
		// console.log("Saving: ok!");
	}
}

function loadData() {
	if(isLocalStorageAvailable()){
		if (localStorage.getItem('j2d_rideemrigby')){
			var login_str = localStorage.getItem('j2d_rideemrigby')
			login_obj = JSON.parse(login_str);
			options_music = localStorage.getItem('options_music')=='true';
			options_sound = localStorage.getItem('options_sound')=='true';
			checkData();
			// console.log("Loading: ok!");
		} else {
			checkData();
			// console.log("Loading: fail!");
		}
	}
}

function checkData() {
	// if(login_obj["idMap"] == undefined){
		// login_obj["idMap"] = 1;
	// }
}

function resetData() {
	login_obj = {};
	saveData();
}

function isLocalStorageAvailable() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
		console.log("localStorage_failed:",e);
        return false;
    }
}

function start() {
    if (LoadBack) {
        stage.removeChild(LoadBack);
    }
    addScreen("menu");
}

function update() {
	raf(update);
	renderer.render(stage);
	if(options_pause){
		return;
	}
	var diffTime = getTimer() - startTime;
	if(diffTime > 29){
		if (ScreenMenu) {
			ScreenMenu.update(diffTime);
		}
		if (ScreenGame) {
			ScreenGame.update(diffTime);
		}
		if (ScreenEnd) {
			ScreenEnd.update(diffTime);
		}
		if (ScreenCN) {
			ScreenCN.update(diffTime);
		}
		startTime = getTimer();
	}
}

function musicStop() {
	soundManager.stopMusic();
}
function musicPlay(val) {
	if(options_music){
		// soundManager.stopMusic();
		soundManager.playMusic(val);
	}
}
function soundPlay(val) {
	if(options_sound){
		soundManager.playSound(val);
	}
}

function getText(txt) {
	return language.get_txt(txt);
}

function removeAllScreens() {
	ScreenPause.visible = false;
	if(ScreenMenu){
		scrContainer.removeChild(ScreenMenu);
		ScreenMenu = null;
	}
	if(ScreenGame){
		scrContainer.removeChild(ScreenGame);
		ScreenGame = null;
	}
	if(ScreenInstruction){
		scrContainer.removeChild(ScreenInstruction);
		ScreenInstruction = null;
	}
	if(ScreenEnd){
		scrContainer.removeChild(ScreenEnd);
		ScreenEnd = null;
	}
	if(ScreenCN){
		scrContainer.removeChild(ScreenCN);
		ScreenCN = null;
	}
	if(currentScreen){
		scrContainer.removeChild(currentScreen);
		currentScreen = null;
	}
}

function addScreen(name) {
	removeAllScreens();
	
	if(name == "menu"){
		ScreenMenu = new ScrMenu();
		ScreenMenu.name = "menu";
		currentScreen = ScreenMenu;
	}else if(name == "instruction"){
		ScreenInstruction = new ScrInstr();
		ScreenInstruction.name = "instruction";
		currentScreen = ScreenInstruction;
	} else if(name == "game"){
		ScreenGame = new ScrGame();
		ScreenGame.name = "game";
		currentScreen = ScreenGame;
	} else if(name == "end"){
		ScreenEnd = new ScrEnd();
		ScreenEnd.name = "end";
		currentScreen = ScreenEnd;
	} else if(name == "cn"){
		ScreenCN = new ScrCN();
		ScreenCN.name = "cn";
		currentScreen = ScreenCN;
	}
	scrContainer.addChild(currentScreen);
}

function show_fade_gfx(callback) {
    var fade_in = new PIXI.Graphics();
    fade_in.beginFill(0xffffff).drawRect(0, 0, _W, _H).endFill();
    fade_in.alpha = 0;
    stage.addChild(fade_in);

    createjs.Tween.get(fade_in).to({alpha: 1}, 300).call(
        function () {
            callback();
            createjs.Tween.get(fade_in).to({alpha: 0}, 300).call(
                function () {
                    stage.removeChild(fade_in);
                });
        }
    );
}

function showMenu() {
	show_fade_gfx(function(){
		addScreen("menu");
	});
}

function showInsrt() {
	show_fade_gfx(function(){
		addScreen("instruction");
	});
}

function showGame() {
	show_fade_gfx(function(){
		addScreen("game");
	});
}

function showEnd() {
	show_fade_gfx(function(){
		addScreen("end");
	});
}

function addButton(name, _x, _y, _scGr) {
	if(_x){}else{_x = 0};
	if(_y){}else{_y = 0};
	if(_scGr){}else{_scGr = 1};
	var obj = new PIXI.Container();
	
	var objImg = null;
	obj.setImg = function(name){
		objImg = addObj(name, 0, 0, _scGr*scG);
		obj.addChild(objImg);
		obj.over = addObj(name + "Over", 0, 0, _scGr*scG);
		if(obj.over){
			obj.over.visible = false;
			obj.addChild(obj.over);
		} else {
			obj.over = null;
		}
		obj.lock = addObj(name + "Lock", 0, 0, _scGr*scG);
		if(obj.lock){
			obj.lock.visible = false;
			obj.addChild(obj.lock);
		} else {
			obj.lock = null;
		}
		
		obj.vX = 1;
		obj.vY = 1;
		obj.x = _x*scG;
		obj.y = _y*scG;
		obj.w = objImg.w;
		obj.h = objImg.h;
		obj.r = obj.w/2;
		obj.rr = obj.r*obj.r;
		obj.name = name;
		obj._selected = false;
		if(obj.w < 50){
			obj.w = 50;
		}
		if(obj.h < 50){
			obj.h = 50;
		}
	}
	
	obj.setImg(name);
	
	return obj;
}

function addButton2(name, _x, _y, _scGr, _scaleX, _scaleY) {
	if(_x){}else{_x = 0};
	if(_y){}else{_y = 0};
	if(_scGr){}else{_scGr = 1};
	if(_scaleX){}else{_scaleX = 1};
	if(_scaleY){}else{_scaleY = 1};
	var obj = new PIXI.Container();
	
	var data = preloader.resources[name];
	var objImg = null;
	if(data){
		objImg = new PIXI.Sprite(data.texture);
		objImg.anchor.x = 0.5;
		objImg.anchor.y = 0.5;
		obj.addChild(objImg);
	} else {
		return null;
	}
	
	data = preloader.resources[name + "Over"];
	if(data){
		obj.over = new PIXI.Sprite(data.texture);
		obj.over.anchor.x = 0.5;
		obj.over.anchor.y = 0.5;
		obj.over.visible = false;
		obj.addChild(obj.over);
	} else {
		obj.over = null;
	}
	
	data = preloader.resources[name + "Lock"];
	if(data){
		obj.lock = new PIXI.Sprite(data.texture);
		obj.lock.anchor.x = 0.5;
		obj.lock.anchor.y = 0.5;
		obj.lock.visible = false;
		obj.addChild(obj.lock);
	} else {
		obj.lock = null;
	}
	obj.scale.x = _scGr*_scaleX*scG;
	obj.scale.y = _scGr*_scaleY*scG;
	obj.vX = _scaleX;
	obj.vY = _scaleY;
	obj.x = _x*_scGr*scG;
	obj.y = _y*_scGr*scG;
	obj.w = objImg.width*_scGr*scG;
	obj.h = objImg.height*_scGr*scG;
	obj.r = obj.w/2;
	obj.rr = obj.r*obj.r;
	obj.name = name;
	obj._selected = false;
	if(obj.w < 50){
		obj.w = 50;
	}
	if(obj.h < 50){
		obj.h = 50;
	}
	
	return obj;
}

function addObj(name, _x, _y, _scGr, _scaleX, _scaleY, _anchor) {
	if(_x){}else{_x = 0};
	if(_y){}else{_y = 0};
	if(_scGr){}else{_scGr = 1};
	if(_scaleX){}else{_scaleX = 1};
	if(_scaleY){}else{_scaleY = 1};
	if(_anchor){}else{_anchor = 0.5};
	var obj = new PIXI.Container();
	obj.scale.x = _scGr*_scaleX;
	obj.scale.y = _scGr*_scaleY;
	
	var objImg = null;
	if(dataAnima[name]){
		objImg = new PIXI.Sprite(dataAnima[name]);
	} else if(dataMovie[name]){
		objImg = new PIXI.extras.MovieClip(dataMovie[name]);
		objImg.stop();
	}else{
		var data = preloader.resources[name];
		if(data){
			objImg = new PIXI.Sprite(data.texture);
		} else {
			return null;
		}
	}
	objImg.anchor.x = _anchor;
	objImg.anchor.y = _anchor;
	obj.w = objImg.width*obj.scale.x;
	obj.h = objImg.height*obj.scale.y;
	obj.addChild(objImg);
	obj.x = _x;
	obj.y = _y;
	obj.name = name;
	obj.img = objImg;
	obj.r = obj.w/2;
	obj.rr = obj.r*obj.r;
    //установим точку регистрации в 0 0
    obj.setReg0 = function () {
        objImg.anchor.x = 0;
        objImg.anchor.y = 0;
    }
    obj.setRegX = function (procx) {
        objImg.anchor.x = procx;
    }
    obj.setRegY = function (procy) {
        objImg.anchor.y = procy;
    }
	
	return obj;
}

function addGlowText(text, size, color, glow, _align, width, px, bSc, font, shadow){
	if(size){}else{size = 24};
	if(color){}else{color = "#FFFFFF"};
	if(glow){}else{glow = "#000000"};
	if(_align){}else{_align = "center"};
	if(width){}else{width = 600};
	if(px){}else{px = 2};
	if(bSc){}else{bSc = false};
	// if(font){}else{font = fontMain};
	if(font){}else{font = fontLubalin};
	if(shadow){}else{shadow = false};
	size *= scG
	width *= scG
	px *= scG
	
	var style = {
		font : size + "px " + font,
		fill : color,
		align : _align,
		stroke : glow,
		strokeThickness : px,
		wordWrap : true,
		wordWrapWidth : width,
		dropShadow : shadow,
		dropShadowBlur: 0,
		dropShadowColor : '#000000',
		dropShadowAngle : Math.PI / 4,
		dropShadowDistance : 2
	};
	
	var obj = new PIXI.Container();
	
	var tfMain = new PIXI.Text(text, style);
	tfMain.y = options_txt_offset;
	obj.addChild(tfMain);
	if(_align == "left"){
		tfMain.x = 0;
	} else if(_align == "right"){
		tfMain.x = -tfMain.width;
	} else {
		tfMain.x = - tfMain.width/2;
	}
	
	obj.width = Math.ceil(tfMain.width);
	obj.height = Math.ceil(tfMain.height);
	
	obj.setText = function(value){
		tfMain.text = value;
		if(_align == "left"){
			tfMain.x = 0;
		} else if(_align == "right"){
			tfMain.x = -tfMain.width;
		} else {
			tfMain.x = - tfMain.width/2;
		}
	}
	
	obj.getText = function(){
		return tfMain.text;
	}
	
	return obj;
}

function getrandom(array){
	var index = Math.floor(Math.random()*array.length)
	return array[index]
}
function get_dd(p1, p2) {
	var dx=p2.x-p1.x;
	var dy=p2.y-p1.y;
	return dx*dx+dy*dy;
}
function getDD(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	return dx*dx+dy*dy;
}
function hit_test(mc,rr,tx,ty) {
	var dx = mc.x - tx;
	var dy = mc.y - ty;
	var dd = dx*dx+dy*dy;
	if(dd<rr){
		return true
	}
	return false
}
function hit_test_rec(mc, w, h, tx, ty) {
	if(tx>mc.x-w/2 && tx<mc.x+w/2){
		if(ty>mc.y-h/2 && ty<mc.y+h/2){
			return true;
		}
	}
	return false;
}
function hitTestObject(mc1, mc2) {
	if (mc1.x < mc2.x + mc2.width &&
	   mc1.x + mc1.width > mc2.x &&
	   mc1.y < mc2.y + mc2.height &&
	   mc1.height + mc1.y > mc2.y) {
		return true;
	}
	return false;
}

function hitTestZone(mc1, mc2) {
	if (mc1.x < mc2.x + mc2.zone.width &&
	   mc1.x + mc1.zone.width > mc2.x &&
	   mc1.y < mc2.y + mc2.zone.height &&
	   mc1.zone.height + mc1.y > mc2.y) {
		return true;
	}
	return false;
}

function getXMLDocument(url){  
    var xml;  
    if(window.XMLHttpRequest){   
        xml=new XMLHttpRequest();  
        xml.open("GET", url, false);  
        xml.send(null);  
        return xml.responseXML;  
    } else {
        if(window.ActiveXObject){
            xml=new ActiveXObject("Microsoft.XMLDOM");  
            xml.async=false;  
            xml.load(url);  
            return xml;  
        } else {  
            console.log("Загрузка XML не поддерживается браузером");  
            return null;  
        } 
	}
}

window.addEventListener('orientationchange', handleOrientation, false);

function handleOrientation() {
	onResize();
	stage.addChild(fpsLabel);
	stage.update();
}


function visGame() {
	//play
	if(ScreenPause && currentScreen){
		if(currentScreen.name == "game"){
			ScreenPause.visible = true;
		}
	}
	if(ScreenPause){
		if(ScreenPause.visible == false){
			options_pause = false;
			refreshTime();
			update();
		}
	}
	soundManager.currentMusic = "none";
	/*if(currentScreen){
		if(currentScreen.name == "game"){
			musicPlay("zloop2");
		} else {
			musicPlay("zloop");
		}
	} else {
		musicPlay("zloop");
	}*/
	musicPlay("zloop2");
}

function hideGame() {
	//pause
	options_pause = true;
	musicStop();
	refreshTime();
}

visibly.onVisible(visGame)
visibly.onHidden(hideGame)