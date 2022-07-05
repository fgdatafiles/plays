 
var __snds, __utils, __window, __localscaver, __input;
var __game;

var oLANG, oLANG_IMAGES, oLANG_FONTS, oVARS, oCONFIG, oUSER, oASSETS;
var BACKGROUND, OVERLAY, SCREENS, SCENE, CONTROLS, LEGAL, COPYRIGHT, MESSAGES, FONTLOADER, RADIO;
var GAME, GUI;

var oSTAGE = {};
var oASSETS = {};

//createjs
var stage;
var canvas_screens;

var images;
var update_queue = [];
var actives = [];
var active_stages = [];

var window_in_background = false;

var stats;
var loader;

var clock  = new THREE.Clock(true);
var wrapper;
var document_blurred = false;
var audio_music;
var seen_help = false;
//var clock  = new THREE.Clock(true);
var LOADER;
var date_msg;

var has_flash = false;
var music_playing = null;


var PHYSICS_LAYERS = [null, 0x0001,0x0002,0x0003,0x0004];


//------------------------------------
// init
//------------------------------------


function doRefocus(jumpto){
  if(jumpto){
    NAV.doScrollTo("div_" + jumpto);
  }
}


function doPopupExit(url, window_params){
  if(window_params){
      window.open(url, "_blank", window_params);
    }else{
      window.open(url, "_blank");
    }
}


function doInit(){

  if(window.Stats && oCONFIG.debug_stats){
    stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild( stats.dom );
  }

  wrapper = document.getElementById("wrapper");
  document.addEventListener('gesturestart', function (e) {
      e.preventDefault();
  });



  //blit toolkit
  __utils = new BlitTools();
  __window = new BlitWindow({force_mobile_top:oCONFIG.force_mobile_top, use_min_scale:true});
  __snds = new myNameSpace.BlitSounds();
  __localsaver = new BlitSaver();
  __input = new BlitInputs("wrapper");
  __input.doSetPropagationPrevention(1);
  __input.allow_key_defaults = true;

  audio_music = document.getElementById("audio_music");

   LOADER = new LoaderScreen();

  //parse query string
  oVARS = __utils.getQueryString();

  //user
  oUSER = __localsaver.doGetData("user");


  if(oVARS.reset == 1){
    oUSER = null;
  }
  
  if(!oUSER){
    oUSER = {};
    oUSER.name = null;
    oUSER.is_mute = false;
    oUSER.seen_help = false;
    oUSER.tm2_unlocked = false;
    __localsaver.doSaveData("user", oUSER);
  }
  oUSER.is_mute = false;

  if(oUSER.tm2_unlocked == undefined){
    oUSER.tm2_unlocked = false;
  }

  if(oVARS.mute == 1){
    oUSER.is_mute = true;
  }


 if(oVARS.review == true || oVARS.review == "true"){
    oUSER.levels_unlocked = [true,true,true];
    trace("unlocked");
  }

  oUSER.name = null;

  //generalet release date
  var date_release = new Date(oCONFIG.date_playing);
  var date_tomorrow = new Date(oCONFIG.date_day_before);
  var date_friday = new Date(oCONFIG.date_week_before);
  var today_date = new Date();

  if(today_date >= date_release){
    //now playing
    date_msg = oLANG.date_msg_4;
  }else if(today_date >= date_tomorrow){
    //tomorrow
    date_msg = oLANG.date_msg_3;
  }else if(today_date >= date_friday){
    //this friday
    date_msg = oLANG.date_msg_2;
  }else{
    //date
    date_msg = oLANG.date_msg_1;
  }

 platform.isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
 platform.isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

  doProcessLib();

  var background_scale = -1;
  var resize_background = function(){
    if(background_scale != oSTAGE.scale){
      background_scale = Math.min(1, oSTAGE.scale);
     // document.body.style.backgroundSize = Math.floor(104 * background_scale) + "px auto, " + Math.floor(104 * background_scale) + "px auto, " + Math.floor(256 * background_scale) + "px, " + Math.floor(256 * background_scale) + "px, " + Math.floor(512 * background_scale) + "px";
    }
  }
  update_queue.push({doResizeUpdate : resize_background});

}


function doProcessLib(){
  var comp = AdobeAn.getComposition("6A454FA589CDD44C8194A5D1116158DD");

  var lib = comp.getLibrary();
  var manifest = lib.properties.manifest;
  for(var i=0; i<lib.properties.manifest.length; i++){
    var id = lib.properties.manifest[i].id;
    if(oLANG_IMAGES[id]){
      lib.properties.manifest[i].src = oLANG_IMAGES[id];
    }
  }

  handleComplete({},comp);
}

function handleComplete(evt,comp) {
  lib = comp.getLibrary();
  images = comp.getImages(); 
  
  //begin
  __window.doInitFocusManager(doLoseFocus, doGetFocus);
  __window.doInitResizer(__window.doWindowResize);
  
  //init createjs
  createjs.Ticker.timingMode = createjs.Ticker.RAF; 
  createjs.Ticker.addEventListener("tick", doFrameLoop);

  doProcessData();
  doPreloadAssets();
}


var doPlayMusic = function(which){

  trace("doPlayMusic() " + which);
  if(which == null){return;}
  
  music_playing = which;
  var start_music_loop = {};
  start_music_loop.track = which;
  start_music_loop.forget = false;
  start_music_loop.doUpdate = function(){
    if(createjs.Sound.activePlugin.context.state == "running"){
      __snds.playSound(this.track, "music", -1, .25);
      this.forget = true;
    }else{
      createjs.Sound.activePlugin.context.resume();
    }
  }
  actives.push(start_music_loop);
}



function doLoseFocus(){
     trace("doLoseFocus()");

    __snds.forceMute();
    window_in_background = true;
    if(GAME){
      GAME.doPause();
    }
  }

  function doReEnableSound()
  {

    trace("doReEnableSound()");

    createjs.Sound.activePlugin.context.resume();
    window.removeEventListener("touchstart", doReEnableSound);

   __snds.unforceMute();

   doPlayMusic(__snds.getNowPlaying("music"));

    if(!GAME){
      __snds.unforceMute();
    }else if(!GAME.is_paused){
      __snds.unforceMute();
    }
  }



function doGetFocus(){
     trace("doGetFocus()");
     
    window_in_background = false;
    doPlayMusic(music_playing);

   // window.addEventListener("touchstart", doReEnableSound);
   
    if(!GAME){
      __snds.unforceMute();
    }else if(!GAME.is_paused){
      __snds.unforceMute();
    }
  }



var TIMEOUTS = [];
var timeout_id = 0;
function doSetTimeout(callback, time){
  var time_in_frames = time * 0.001 * 60;
  timeout_id++;
  TIMEOUTS.push({id: timeout_id, frame: time_in_frames, callback: callback});
  return timeout_id;
}

function doClearTimeout(id){
  for(var i = TIMEOUTS.length-1; i>=0; i--){
    if(TIMEOUTS[i].id == id){
      TIMEOUTS.splice(i,1);
    }
  }
}


//------------------------------------
// frame loop
//------------------------------------

function doFrameLoop(event){

  if(stats){
      stats.begin();
    }

  //update all actives
  for(var i = 0; i < actives.length; i++){
    if(actives[i].purge || actives[i].forget){
      actives.splice(i,1);
    }else if(actives[i].doUpdate){
      actives[i].doUpdate();
    }else{
      actives.splice(i,1);
    }
  }

  //update active stages
  for(var i = 0; i < active_stages.length; i++){
    if(active_stages[i].forget){
      active_stages.splice(i,1);
      continue;
    } 
    __utils.doUpdateCreateJsStage(active_stages[i], event);
    
  }

  if(stats){
      stats.end();
    }

}



//------------------------------------
// loaders
//------------------------------------

function doPreloadAssets(){

  FONTLOADER = new FontLoader();

  for(var i=0; i<lib.properties.manifest.length; i++){
    var ok = true;
    var asset_id = lib.properties.manifest[i].id;
    for(var ii=0; ii<assets_additional.manifest.length; ii++){
      if(asset_id == assets_additional.manifest[ii].id){
        ok = false;
        break;
      }
    }
    if(ok){
      assets_preload.manifest.push(lib.properties.manifest[i]);
    }
  }

  //add fonts found in lang file
  var fonts_added = [];
  for(var s in oLANG){
     if(oLANG[s].fontFamily){
      var family = oLANG[s].fontFamily;
      if(fonts_added.indexOf(family) == -1){
        FONTLOADER.doAddFont(family);
        fonts_added.push(family);
      }
     }
  }

  //add images found in footer
  for(var i=0; i<legal_images.length; i++){
      var o = legal_images[i];
      var asset = {};
      asset.src = legal_images[i].src;
      asset.id = legal_images[i].src;
      assets_preload.manifest.push(asset);
   }


  __utils.doLoadAssets(assets_preload);

  var loader_obj = {};
  loader_obj.doUpdate = function(){
    var prog = assets_preload.progress;
     LOADER.doUpdateBar(prog);
      if(assets_preload.loaded){

        this.forget = true;
        doStart();
      }
  }
  actives.push(loader_obj);

}


//------------------------------------
// start
//------------------------------------

function doStart(){
  RESIZER.w = 0;
  RESIZER.h = 0;
  setTimeout(doStart2, 200);

}

function doStart2(){

  FONTLOADER.doDestroy();
  LOADER.doDestroy();

  __snds.init();

  document.body.style.backgroundImage ="url('media/images/pinball_bib.jpg')";
  
  GAME = new Game("canvas_game");
  CONTROLS = new MuteMenu("canvas_mute", {hide_fullscreen:true});
  SCREENS = new Screens("canvas_screens");
  FOOTER = new Footer("footer");

  if(oCONFIG.debug_quickstart){
    doContinueLoadingAssest();
    __snds.stopSound("music");
    music_playing = null;
    GAME.level = 1;
    doFinishLoading(function(){
      GAME.doNewGame();
    });
  }else{
    SCENE = new TitleScreen();
  }

}


var first_load = true;
function doContinueLoadingAssest(){
    __utils.doLoadAssets(assets_additional);
    __utils.doLoad3dAssets(assets_threejs, oASSETS);
  }


//--------------------------------
// Finish loading
//--------------------------------

function doFinishLoading(callback){

  trace("doFinishLoading()");


  if(assets_additional.loaded && assets_threejs.loaded){
    callback();
    return;
  }

  LOADER = new LoaderScreen("div_loading");

  var loader_obj = {};
  loader_obj.frames_loaded = 0;
  loader_obj.doUpdate = function(){
    var prog = (assets_additional.progress + assets_threejs.progress) * 0.5;
    
    LOADER.doUpdateBar(prog);
    if(assets_additional.loaded && assets_threejs.loaded){
      this.frames_loaded++;
      if(this.frames_loaded > 1){
        this.forget = true;
        callback();
        LOADER.doDestroy();
      }
    }
  }
  actives.push(loader_obj);
}



