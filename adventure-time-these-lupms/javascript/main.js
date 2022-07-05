var scG=2;var _W=600*scG;var _H=400*scG;var login_obj={};var arClips=[];var fox=new fox();var commonclass=new commonclass();var g=fox.globalvar;var allsfx;var language;var startTime;var renderer,stage,preloader;var soundManager;var LoadBack=null;var barLoading=null;var barMask=null;var LoadPercent=null;var LoadRabbit=null;var LogoGame=null;var barLoad=null;var sprites_loaded=false;var dataAnima=[];var dataMovie=[];var dataSound=[];var cache={};var fontMain="ITC Lubalin Graph W03 D1489630";var fontLubalinAr="Lubalin Graph ITCTurnerAraW03Bd";var fontArchivo="Archivo Black";var fontFranklin="Franklin Gothic Heavy";var stats;var options_debug=false;var options_music=true;var options_sound=true;var options_mobile=true;var options_pause=false;var options_orientation=null;var options_horizont=true;var options_quality="high";var options_txt_offset=0;var options_browser="none";var KEYCODE_LEFT=37,KEYCODE_RIGHT=39,KEYCODE_UP=38,KEYCODE_DOWN=40;KEYCODE_A=65;KEYCODE_D=68;KEYCODE_S=83;KEYCODE_SPACE=32;var ScreenMenu,ScreenMainMenu,ScreenGame,ScreenIntro1,ScreenIntro2,ScreenShop,ScreenEnd,ScreenWin,ScreenCN,ScreenPause;var ScreenLock;var currentScreen,scrContainer;var raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return window.setTimeout(callback,1000/60);};var fpsLabel=addText("FONT LOAD",40,"#FF0000","#000000","center",150,6);fpsLabel.x=_W/2;fpsLabel.y=-200;function init(lang){if(lang){}else{lang="en"}
if(window.orientation==undefined){options_mobile=false;}else{options_mobile=true;options_orientation=window.orientation;}
var ua=navigator.userAgent;if(ua.search(/Safari/)>-1){options_browser="safari";}
if(typeof console==="undefined"){console={};}
renderer=PIXI.autoDetectRenderer(_W,_H);stage=new PIXI.Container();document.body.appendChild(renderer.view);preloader=new PIXI.loaders.Loader();window.addEventListener("resize",onResize,false);startTime=getTimer();onResize();update();language=new eliteLang();language.add_lang_xml('en');language.add_lang_xml('ar');language.add_lang_xml('de');language.add_lang_xml('es');language.add_lang_xml('fr');language.add_lang_xml('it');language.add_lang_xml('pl');language.add_lang_xml('ru');language.add_lang_xml('tr');language.loadSettings();language.setLanguage(lang);if(lang){if(lang=="ar"){fontMain=fontLubalinAr;}else if(lang=="pl"||lang=="tr"){fontMain=fontArchivo;}else if(lang=="ru"){fontMain=fontFranklin;}}
soundManager=new SoundManager();soundManager.currentMusic="none";LoadBack=new PIXI.Container();stage.addChild(LoadBack);scrContainer=new PIXI.Container();stage.addChild(scrContainer);createScreenLoader();loadManifest();}
function createScreenLoader(){var bgContainer=new PIXI.Container();LoadBack.addChild(bgContainer);var barContainer=new PIXI.Container();LoadBack.addChild(barContainer);var frameContainer=new PIXI.Container();LoadBack.addChild(frameContainer);var preload_image=document.createElement("img");preload_image.src="images/bg/bgLoad.jpg";preload_image.onload=function(){var LoadBack1=new PIXI.Sprite.fromImage(preload_image.src);LoadBack1.texture.baseTexture.on('loaded',function(){LoadBack1.scale.x=0.5;LoadBack1.scale.y=LoadBack1.scale.x;LoadBack1.x=_W/2-LoadBack1.width/2;LoadBack1.y=_H/2-LoadBack1.height/2-50;});bgContainer.addChild(LoadBack1);};var preload_frame=document.createElement("img");preload_frame.src="images/items/frameLoading.png";preload_frame.onload=function(){var frameLoading=new PIXI.Sprite.fromImage(preload_frame.src);frameLoading.texture.baseTexture.on('loaded',function(){frameLoading.x=_W/2-frameLoading.width/2;frameLoading.y=_H/2+80-frameLoading.height/2;});frameContainer.addChild(frameLoading);};var preload_bar=document.createElement("img");preload_bar.src="images/items/barLoading.png";preload_bar.onload=function(){barLoading=new PIXI.Sprite.fromImage(preload_bar.src);barLoading.texture.baseTexture.on('loaded',function(){barLoading.x=_W/2-barLoading.width/2;barLoading.y=_H/2+80-barLoading.height/2;barMask=new PIXI.Graphics();barMask.beginFill(0x000000).drawRect(0,0,313,32).endFill();barMask.x=barLoading.x;barMask.y=barLoading.y;LoadBack.addChild(barMask);barLoading.mask=barMask;});barContainer.addChild(barLoading);};}
function loadManifest(){soundManager.initSoundModule();preloader=new PIXI.loaders.Loader();preloader.add("bgLoad","images/bg/bgLoad.jpg");preloader.add("bgMenu","images/bg/bgMenu.jpg");preloader.add("bgMainMenu","images/bg/bgMainMenu.jpg");preloader.add("bgIntro","images/bg/bgIntro.jpg");preloader.add("bgIntro2","images/bg/bgIntro2.jpg");preloader.add("bgPause","images/bg/bgPause.jpg");preloader.add("bg1","images/bg/bg1.jpg");preloader.add("bg2","images/bg/bg2.jpg");preloader.add("bg3","images/bg/bg3.jpg");preloader.add("bg4","images/bg/bg4.jpg");preloader.add("bg5","images/bg/bg5.jpg");preloader.add("bg6","images/bg/bg6.jpg");preloader.add("rotate_device","images/items/rotate_device.png");preloader.add("images/texture/Anima1Texture.json");preloader.add("images/texture/Anima2Texture.json");preloader.add("images/texture/Anima3Texture.json");preloader.add("images/texture/Anima4Texture.json");preloader.add("images/texture/Anima5Texture.json");preloader.add("images/texture/Anima6Texture.json");preloader.add("images/texture/Items1Texture.json");preloader.add("images/texture/Items2Texture.json");preloader.on("progress",handleProgress);preloader.load(handleComplete);}
function checkProgress(){var progress=(preloader.progress/100+soundManager.loadedAudioFiles/soundManager.totalAudioFiles)/2;progress<0?progress=0:0;percent=Math.floor(progress*100);if(progress<1){setTimeout(checkProgress,100);}else{handleComplete();}}
function spritesLoad(){if(sprites_loaded){return true;}
sprites_loaded=true;var img,data;}
function textureLoad(){iniSet("images/texture/Anima1Texture.json");iniSet("images/texture/Anima2Texture.json");iniSet("images/texture/Anima3Texture.json");iniSet("images/texture/Anima4Texture.json");iniSet("images/texture/Anima5Texture.json");iniSet("images/texture/Anima6Texture.json");iniSetArt("images/texture/Items1Texture.json");iniSetArt("images/texture/Items2Texture.json");}
function iniSet(set_name){var json=preloader.resources[set_name]
if(json){}else{console.log("ERROR: "+set_name+" is undefined");return;}
json=json.data;var jFrames=json.frames;var data=preloader.resources[set_name].textures;var dataTexture=[];var animOld="";if(data&&jFrames){for(var namePng in jFrames){var index=namePng.indexOf(".png");var nameFrame=namePng;if(index>1){nameFrame=namePng.slice(0,index);}
var index2=nameFrame.indexOf("/");if(index2>1){var type=nameFrame.slice(0,index2);var anim=type;if(anim!=animOld){animOld=anim;dataTexture[anim]=[];}
dataTexture[anim].push(PIXI.Texture.fromFrame(namePng));}}
for(var name in dataTexture){var arrayFrames=dataTexture[name];dataMovie[name]=arrayFrames;}}}
function iniSetArt(set_name){var json=preloader.resources[set_name]
if(json){}else{console.log("ERROR: "+set_name+" is undefined");return;}
json=json.data;var frames=json.frames;var data=preloader.resources[set_name].textures;if(data&&frames){for(var namePng in frames){var index=namePng.indexOf(".png");var nameFrame=namePng;if(index>1){nameFrame=namePng.slice(0,index);}
dataAnima[nameFrame]=data[namePng];}}}
function handleProgress(){percent=((preloader.progress/100+soundManager.loadedAudioFiles/soundManager.totalAudioFiles)/2)*100;percent=Math.floor(percent);percent<0?percent=0:0;if(LoadPercent){LoadPercent.setText(percent+"%");}
if(barMask){barMask.x=barLoading.x-barLoading.width+barLoading.width*(percent/100)}}
function handleComplete(){loadData();spritesLoad();textureLoad();onResize();ScreenPause=new ScrPause();ScreenPause.visible=false;stage.addChild(ScreenPause);ScreenLock=new ScrLock();ScreenLock.visible=false;stage.addChild(ScreenLock);start();}
function getTimer(){var d=new Date();var n=d.getTime();return n;}
function refreshTime(){startTime=getTimer();}
function sendstat(id,value){}
function saveData(){if(isLocalStorageAvailable()){var login_str=JSON.stringify(login_obj);localStorage.setItem('j2d_theselumps',login_str);localStorage.setItem('options_music',options_music);localStorage.setItem('options_sound',options_sound);login_obj["score"]=g.highscore||0;login_obj["level"]=g.level||0;}}
function loadData(){initData();if(isLocalStorageAvailable()){if(localStorage.getItem('j2d_theselumps')){var login_str=localStorage.getItem('j2d_theselumps')
login_obj=JSON.parse(login_str);options_music=localStorage.getItem('options_music')=='true';options_sound=localStorage.getItem('options_sound')=='true';g.highscore=login_obj["score"]||0;g.score=g.highscore;g.level=login_obj["level"]||0;console.log("Loading: ok!");}else{console.log("Loading: fail!");}}}
function initData(){g.skipmenu=0;g.skipCNintro=0;g.mute=g.udamusik=g.level=0;g.allbg=["bg1","bg2","bg3","bg4","bg5","bg6"];allsfx=["zloop","zloop1","zloop2","zloop3","ztink","zbump","zhit","ztic","zhorn","zbonus","zcount","zpop"];g.winVO=["zVOp_i_do_have_the_power","zVOp_this_is_my_destiny"];g.loseVO=["zVOp_this_is_the_end_for_me","zVOp_i_risk_it_all","zVOp_this_is_not_right"];g.hitVO=["zVOp_oh_my_glob","zVOp_great_glob"];g.happyVO=["zVOp_delightful","zVOp_like_me_in_every_way","zVOp_dance_with_me","zVOp_i_see_a_new_way_to_move"];allsfx.concat(g.winVO);allsfx.concat(g.loseVO);allsfx.concat(g.hitVO);allsfx.concat(g.happyVO);g.screenwid=600*scG;g.screenhei=400*scG;g.hscreenwid=g.screenwid/2;g.hscreenhei=g.screenhei/2;g.playingzloop=0;g.bgpic=["clouds1","clouds2"];g.highscore=login_obj["score"]||0;g.score=g.highscore;g.level=login_obj["level"]||0;}
function resetData(){login_obj={};g.highscore=0;g.level=0;saveData();}
function isLocalStorageAvailable(){try{return 'localStorage'in window&&window['localStorage']!==null;}catch(e){console.log("localStorage_failed:",e);return false;}}
function start(){if(LoadBack){stage.removeChild(LoadBack);}
addScreen("menu");}
function update(){raf(update);renderer.render(stage);if(options_pause){return;}
var diffTime=getTimer()-startTime;if(diffTime>29){if(ScreenMainMenu){ScreenMainMenu.update(diffTime);}
if(ScreenIntro2){ScreenIntro2.update(diffTime);}
if(ScreenGame){ScreenGame.update(diffTime);}
if(ScreenEnd){ScreenEnd.update(diffTime);}
if(ScreenWin){ScreenWin.update(diffTime);}
for(var i=0;i<arClips.length;i++){var clip=arClips[i];if(clip){clip.enter_frame();}}
startTime=getTimer();}}
function clearClips(){for(var i=0;i<arClips.length;i++){var clip=arClips[i];if(clip){clip.removed_from_stage();clip.die();}}
arClips=[];}
function musicStop(){soundManager.stopMusic();}
function musicPlay(val){if(options_music&&soundManager.currentMusic!=val){soundManager.playMusic(val);}}
function soundPlay(val){if(options_sound){soundManager.playSound(val);}}
function getText(txt){return language.get_txt(txt);}
function removeAllScreens(){ScreenPause.visible=false;if(ScreenMenu){scrContainer.removeChild(ScreenMenu);ScreenMenu=null;}
if(ScreenMainMenu){scrContainer.removeChild(ScreenMainMenu);ScreenMainMenu=null;}
if(ScreenIntro1){scrContainer.removeChild(ScreenIntro1);ScreenIntro1=null;}
if(ScreenGame){scrContainer.removeChild(ScreenGame);ScreenGame=null;}
if(ScreenShop){scrContainer.removeChild(ScreenShop);ScreenShop=null;}
if(ScreenEnd){scrContainer.removeChild(ScreenEnd);ScreenEnd=null;}
if(ScreenWin){scrContainer.removeChild(ScreenWin);ScreenWin=null;}
if(ScreenCN){scrContainer.removeChild(ScreenCN);ScreenCN=null;}
if(currentScreen){scrContainer.removeChild(currentScreen);currentScreen=null;}}
function addScreen(name,value){removeAllScreens();if(name=="menu"){ScreenMenu=new ScrMenu();ScreenMenu.name="menu";currentScreen=ScreenMenu;}else if(name=="mainmenu"){ScreenMainMenu=new ScrMainMenu();ScreenMainMenu.name="mainmenu";currentScreen=ScreenMainMenu;}else if(name=="intro1"){ScreenIntro1=new ScrIntro1();ScreenIntro1.name="intro1";currentScreen=ScreenIntro1;}else if(name=="intro2"){ScreenIntro2=new ScrIntro2(value);ScreenIntro2.name="intro2";currentScreen=ScreenIntro2;}else if(name=="shop"){ScreenShop=new ScrShop();ScreenShop.name="shop";currentScreen=ScreenShop;}else if(name=="game"){ScreenGame=new ScrGame();ScreenGame.name="game";currentScreen=ScreenGame;}else if(name=="end"){ScreenEnd=new ScrEnd();ScreenEnd.name="end";currentScreen=ScreenEnd;}else if(name=="win"){ScreenWin=new ScrWin();ScreenWin.name="win";currentScreen=ScreenWin;}else if(name=="cn"){ScreenCN=new ScrCN();ScreenCN.name="cn";currentScreen=ScreenCN;}
scrContainer.addChild(currentScreen);}
function show_fade_gfx(callback){var fade_in=new PIXI.Graphics();fade_in.beginFill(0xffffff).drawRect(0,0,_W,_H).endFill();fade_in.alpha=0;stage.addChild(fade_in);createjs.Tween.get(fade_in).to({alpha:1},300).call(function(){callback();createjs.Tween.get(fade_in).to({alpha:0},300).call(function(){stage.removeChild(fade_in);});});}
function showMenu(){show_fade_gfx(function(){addScreen("menu");});}
function showMainMenu(){show_fade_gfx(function(){addScreen("mainmenu");});}
function showInto1(){show_fade_gfx(function(){addScreen("intro1");});}
function showInto2(value){show_fade_gfx(function(){addScreen("intro2",value);});}
function showShop(){show_fade_gfx(function(){addScreen("shop");});}
function showGame(){show_fade_gfx(function(){addScreen("game");});}
function showEnd(){show_fade_gfx(function(){addScreen("end");});}
function showWin(){show_fade_gfx(function(){addScreen("win");});}
function addButton(name,_x,_y,_scGr){if(_x){}else{_x=0};if(_y){}else{_y=0};if(_scGr){}else{_scGr=1};var obj=new PIXI.Container();_x*=scG;_y*=scG;_scGr*=scG;var objImg=null;obj.setImg=function(name){objImg=addObj(name,0,0,_scGr);obj.objImg=objImg;obj.addChild(objImg);obj.over=addObj(name+"Over",0,0,_scGr);if(obj.over){obj.over.visible=false;obj.addChild(obj.over);}else{obj.over=null;}
obj.lock=addObj(name+"Lock",0,0,_scGr);if(obj.lock){obj.lock.visible=false;obj.addChild(obj.lock);}else{obj.lock=null;}
obj.vX=1;obj.vY=1;obj.x=_x;obj.y=_y;obj.w=objImg.w;obj.h=objImg.h;obj.r=obj.w/2;obj.rr=obj.r*obj.r;obj.name=name;obj._selected=false;if(obj.w<50){obj.w=50;}
if(obj.h<50){obj.h=50;}}
obj.setImg(name);return obj;}
function addButton2(name,_x,_y,_scGr,_scaleX,_scaleY){if(_x){}else{_x=0};if(_y){}else{_y=0};if(_scGr){}else{_scGr=1};if(_scaleX){}else{_scaleX=1};if(_scaleY){}else{_scaleY=1};var obj=new PIXI.Container();_x*=scG;_y*=scG;_scGr*=scG;var data=preloader.resources[name];var objImg=null;if(data){objImg=new PIXI.Sprite(data.texture);obj.objImg=objImg;objImg.anchor.x=0.5;objImg.anchor.y=0.5;obj.addChild(objImg);}else{return null;}
data=preloader.resources[name+"Over"];if(data){obj.over=new PIXI.Sprite(data.texture);obj.over.anchor.x=0.5;obj.over.anchor.y=0.5;obj.over.visible=false;obj.addChild(obj.over);}else{obj.over=null;}
data=preloader.resources[name+"Lock"];if(data){obj.lock=new PIXI.Sprite(data.texture);obj.lock.anchor.x=0.5;obj.lock.anchor.y=0.5;obj.lock.visible=false;obj.addChild(obj.lock);}else{obj.lock=null;}
obj.scale.x=_scGr*_scaleX;obj.scale.y=_scGr*_scaleY;obj.vX=_scaleX;obj.vY=_scaleY;obj.x=_x;obj.y=_y;obj.w=objImg.width*_scGr;obj.h=objImg.height*_scGr;obj.r=obj.w/2;obj.rr=obj.r*obj.r;obj.name=name;obj._selected=false;if(obj.w<50){obj.w=50;}
if(obj.h<50){obj.h=50;}
return obj;}
function addObj(name,_x,_y,_scGr,_scaleX,_scaleY,_anchor){if(_x){}else{_x=0};if(_y){}else{_y=0};if(_scGr){}else{_scGr=1};if(_scaleX){}else{_scaleX=1};if(_scaleY){}else{_scaleY=1};if(_anchor==undefined){_anchor=0.5};var obj=new PIXI.Container();obj.scale.x=_scGr*_scaleX;obj.scale.y=_scGr*_scaleY;var objImg=null;if(dataAnima[name]){objImg=new PIXI.Sprite(dataAnima[name]);}else if(dataMovie[name]){objImg=new PIXI.extras.MovieClip(dataMovie[name]);objImg.stop();}else{var data=preloader.resources[name];if(data){objImg=new PIXI.Sprite(data.texture);}else{return null;}}
objImg.anchor.x=_anchor;objImg.anchor.y=_anchor;obj.w=objImg.width*obj.scale.x;obj.h=objImg.height*obj.scale.y;obj.addChild(objImg);obj.x=_x;obj.y=_y;obj.name=name;obj.img=objImg;obj.r=obj.w/2;obj.rr=obj.r*obj.r;obj.setReg0=function(){objImg.anchor.x=0;objImg.anchor.y=0;}
obj.setRegX=function(procx){objImg.anchor.x=procx;}
obj.setRegY=function(procy){objImg.anchor.y=procy;}
return obj;}
function addText(text,size,color,glow,_align,width,px,font,shadow,colorShadow){if(size){}else{size=24};if(color){}else{color="#FFFFFF"};if(glow){}else{glow=undefined};if(_align){}else{_align="center"};if(width){}else{width=600};if(px){}else{px=2};if(font){}else{font=fontMain};if(shadow){}else{shadow=false};if(colorShadow){}else{colorShadow="#000000"};size*=scG;width*=scG;px*=scG;var style={font:size+"px "+font,fill:color,align:_align,stroke:glow,strokeThickness:px,wordWrap:true,wordWrapWidth:width,dropShadow:shadow,dropShadowBlur:0,dropShadowColor:colorShadow,dropShadowAngle:Math.PI/4,dropShadowDistance:2*scG};var obj=new PIXI.Container();var tfMain=new PIXI.Text(text,style);tfMain.y=options_txt_offset;obj.addChild(tfMain);if(_align=="left"){tfMain.x=0;}else if(_align=="right"){tfMain.x=-tfMain.width;}else{tfMain.x=-tfMain.width/2;}
obj.width=Math.ceil(tfMain.width);obj.height=Math.ceil(tfMain.height);obj.setText=function(value){tfMain.text=String(value);if(_align=="left"){tfMain.x=0;}else if(_align=="right"){tfMain.x=-tfMain.width;}else{tfMain.x=-tfMain.width/2;}}
obj.getText=function(){return tfMain.text;}
return obj;}
function getrandom(array){var index=Math.floor(Math.random()*array.length)
return array[index]}
function get_dd(p1,p2){var dx=p2.x-p1.x;var dy=p2.y-p1.y;return dx*dx+dy*dy;}
function getDD(x1,y1,x2,y2){var dx=x2-x1;var dy=y2-y1;return dx*dx+dy*dy;}
function hit_test(mc,rr,tx,ty){var dx=mc.x-tx;var dy=mc.y-ty;var dd=dx*dx+dy*dy;if(dd<rr){return true}
return false}
function hit_test_rec(mc,w,h,tx,ty){if(tx>mc.x-w/2&&tx<mc.x+w/2){if(ty>mc.y-h/2&&ty<mc.y+h/2){return true;}}
return false;}
function hitTestObject(mc1,mc2){if(mc1.x<mc2.x+mc2.width&&mc1.x+mc1.width>mc2.x&&mc1.y<mc2.y+mc2.height&&mc1.height+mc1.y>mc2.y){return true;}
return false;}
function hitTestZone(mc1,mc2){if(mc1.x<mc2.x+mc2.zone.width&&mc1.x+mc1.zone.width>mc2.x&&mc1.y<mc2.y+mc2.zone.height&&mc1.zone.height+mc1.y>mc2.y){return true;}
return false;}
function getXMLDocument(url){var xml;if(window.XMLHttpRequest){xml=new XMLHttpRequest();xml.open("GET",url,false);xml.send(null);return xml.responseXML;}else{if(window.ActiveXObject){xml=new ActiveXObject("Microsoft.XMLDOM");xml.async=false;xml.load(url);return xml;}else{console.log("Загрузка XML не поддерживается браузером");return null;}}}
function handleOrientation(){var orientation_screen="";if(options_orientation==90||options_orientation==-90){if(orientation==90||orientation==-90){options_pause=false;orientation_screen="good";refreshTime();update();if(ScreenLock){ScreenLock.visible=false;}}else{options_pause=true;orientation_screen="bad";refreshTime();if(ScreenLock){ScreenLock.visible=true;}}}
onResize();stage.addChild(fpsLabel);stage.update();}
function visGame(){if(ScreenPause&&currentScreen){if(currentScreen.name=="game"){ScreenPause.visible=true;ScreenPause.refreshButtons();}}
if(ScreenPause){if(ScreenPause.visible==false){options_pause=false;refreshTime();update();}}
soundManager.currentMusic="none";if(currentScreen){if(currentScreen.name=="game"){musicPlay("zloop1");}else{musicPlay("zloop2");}}else{musicPlay("zloop2");}}
function hideGame(){options_pause=true;musicStop();refreshTime();}
visibly.onVisible(visGame)
visibly.onHidden(hideGame)