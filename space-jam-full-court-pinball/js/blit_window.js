var RESIZER;

var BlitWindow = function(options){

	var options = options || {};
	var me = this;

	//------------------------------------
	// resize listener
	//------------------------------------

	this.doInitResizer = function(callback){

	  RESIZER = {};
	  RESIZER.id = "resizer";
	  RESIZER.w = null;
	  RESIZER.h = null;
	  RESIZER.scroll = null;
	  RESIZER.keep = true;
	  RESIZER.was_fullscreen = false;
	  RESIZER.is_fullscreen = false;
	  RESIZER.repeat_frame = 0;

	  RESIZER.doUpdate = function(){

	    if(this.repeat_frame > 0 || this.w != window.innerWidth || this.h != window.innerHeight || this.scroll != document.documentElement.scrollTop){
			
			this.repeat_frame = Math.max(0, this.repeat_frame-1);
			this.w = window.innerWidth;
			this.h = window.innerHeight;
			this.is_fullscreen = me.doCheckFullScreen();
			this.scroll = document.documentElement.scrollTop;

			document.body.style.height = window.innerHeight + "px";

			window.scrollTo(0, 0);

			if(this.was_fullscreen != this.is_fullscreen){
				if(CONTROLS){
					CONTROLS.doUpdateFullScreen();
					this.was_fullscreen = this.is_fullscreen;
					oSTAGE.is_fullscreen = this.is_fullscreen;
				}
			}


			callback();
	    }
	  }

	  actives.push(RESIZER);

	window.addEventListener("fullscreenchange", function() {
  			RESIZER.w = 0;
	    	RESIZER.h = 0;
	    	RESIZER.repeat_frame = 60;
	  });

	  window.addEventListener("orientationchange", function() {
  			RESIZER.w = 0;
	    	RESIZER.h = 0;
	    	RESIZER.repeat_frame = 60;
	  });


	  setInterval(function(){

	  		var refresh = true;
	  	
	  		try{
	  			if(GAME.is_playing){
	  				refresh=false;
	  			}
	  		}catch(e){};

	  		try{
	  			if(SCREENS.stage.activeTweens.length>0){
	  				refresh=false;
	  			}
	  		}catch(e){};


	  		if(refresh){
				RESIZER.w = 0;
    			RESIZER.h = 0;
	    	}
	  },1000);
	}


	//-----------------------
	// focus stuff
	//-----------------------

	//handle hidden window muting

	this.doInitFocusManager = function(callback_lose_focus, callback_get_focus){

		var document_blurred = false;

		var doBlur = function(){

			if(document_blurred){
				return;
			}

		  	if(callback_lose_focus){
				callback_lose_focus();
			}
			document_blurred = true;
			__snds.stopSound("music");
		}

		var doFocus = function(){

			if(!document_blurred){
				return;
			}

			if(callback_get_focus){
				callback_get_focus();
			}
			document_blurred = false;

			RESIZER.w = 0;
	    	RESIZER.h = 0;
	    	RESIZER.repeat_frame = 60;

			doPlayMusic();

		}


		//handle hidden window muting
		var visProp = me.doGetHiddenProp();
		if (visProp) {
			var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
			document.addEventListener(evtname,  function(evt) {
				if(document[visProp]){
					doBlur();
				}else{
					doFocus();
				}
			});
		}

		window.addEventListener("blur",  doBlur);
		window.addEventListener("focus",  doFocus);


	}



	this.doGetHiddenProp = function(){
	    var prefixes = ['webkit','moz','ms','o'];
	    
	    // if 'hidden' is natively supported just return it
	    if ('hidden' in document){
	    	return 'hidden'
	    };
	    
	    // otherwise loop over all the known prefixes until we find one
	    for (var i = 0; i < prefixes.length; i++){
	        if ((prefixes[i] + 'Hidden') in document) {
	            return prefixes[i] + 'Hidden';
	        }
	    }

	    // otherwise it's not supported
	    return null;
	}

	
//------------------------------------
// resize update
//------------------------------------


this.doWindowResize = function(){

	var wrapper = document.getElementById("wrapper");
	var footer = document.getElementById("footer");
	var native_height = lib.properties.height;
	var native_width = lib.properties.width;

	var screen_width = document.body.offsetWidth; //document.documentElement.clientWidth; //window.innerWidth;
	var screen_height = document.body.offsetHeight; //document.documentElement.clientHeight; //window.innerHeight;

	oSTAGE.is_landscape = (screen_width >= screen_height) ? true : false;
	oSTAGE.pixel_ratio =__utils.getPixelRatio();
	
	//oriantation warning
	var orientation_overlay = document.getElementById("orientation_overlay");
	if(orientation_overlay){
		if(platform.isMobile && oCONFIG.game_orientation == "portrait" && oSTAGE.is_landscape){
			orientation_overlay.style.backgroundImage = "url('media/images/portrait_only.gif')";
			orientation_overlay.style.display = "block";
			__snds.forceMute();
			if(GAME){
				GAME.doPause();
			}
		}else{
			orientation_overlay.style.display = "none";
			__snds.unforceMute();
		}
	}

	
	//footer
	var footer_scale = Math.min(1, (screen_width / footer.clientWidth), (screen_height / 800));
	footer.my_scale = footer_scale;
	var footer_space = footer.getBoundingClientRect().height;


	//measure window
	oSTAGE.window_width = oSTAGE.screen_width = screen_width;
	oSTAGE.window_height = oSTAGE.screen_height = (screen_height - footer_space);

	var screen_ratio = oSTAGE.screen_width / oSTAGE.screen_height;
	var game_ratio = native_width / native_height;
	var adj_ratio = Math.min(Math.max(screen_ratio, oCONFIG.game_ratio.min), oCONFIG.game_ratio.max);

	if(adj_ratio > screen_ratio){
		oSTAGE.wrapper_width = Math.ceil(oSTAGE.window_width) + 1;
		oSTAGE.wrapper_height = Math.ceil(oSTAGE.window_width / adj_ratio);
	}else{
		oSTAGE.wrapper_height = Math.ceil(oSTAGE.window_height);
		oSTAGE.wrapper_width = Math.ceil(oSTAGE.window_height * adj_ratio) + 1;
	}

	oSTAGE.scale = Math.min(oSTAGE.wrapper_height/native_height, oSTAGE.wrapper_width/native_width);
	oSTAGE.scale_inv = 1/oSTAGE.scale;
	oSTAGE.cache_scale = (oSTAGE.scale * oSTAGE.pixel_ratio);

	//game info
	oSTAGE.game_width = Math.ceil(oSTAGE.wrapper_width * oSTAGE.scale_inv);
	oSTAGE.game_height = Math.ceil(oSTAGE.wrapper_height * oSTAGE.scale_inv);

	oSTAGE.game_native_width = native_width;
	oSTAGE.game_native_height = native_height;
	oSTAGE.game_width_margins = ((oSTAGE.game_width - native_width) * 0.5) | 0;
	oSTAGE.game_height_margins = ((oSTAGE.game_height - native_height) * 0.5) | 0;

	oSTAGE.game_top = -oSTAGE.game_height_margins;
	oSTAGE.game_bottom = oSTAGE.game_height - oSTAGE.game_height_margins;

	oSTAGE.game_left = -oSTAGE.game_width_margins;
	oSTAGE.game_right = oSTAGE.game_width - oSTAGE.game_width_margins;

	oSTAGE.game_size = {
		left:-oSTAGE.game_width_margins,
		top:-oSTAGE.game_height_margins,
		width:oSTAGE.game_width,
		height:oSTAGE.game_height,
		right:oSTAGE.game_width - oSTAGE.game_width_margins,
		bottom:oSTAGE.game_height-oSTAGE.game_height_margins,
		center_x:native_width*0.5,
		center_y:native_height*0.5,
		native_height: lib.properties.height,
		native_width: lib.properties.width
	};
  


	//center wrapper

	wrapper.style.width = oSTAGE.wrapper_width + "px";
	wrapper.style.height = oSTAGE.wrapper_height + "px";
	wrapper.style.top = "0px";
	wrapper.style.left = Math.floor((screen_width - wrapper.clientWidth) * 0.5) + "px";

	if(options.force_mobile_top && platform.isMobile){
		wrapper.style.top = "0px";
	}else{
		wrapper.style.top = Math.floor((screen_height - footer_space - wrapper.clientHeight) * 0.5) + "px";
	}
	//var fs = Math.min(1, (screen_width / footer.clientWidth), (window.innerHeight / 800));
	footer.style.width = (oSTAGE.wrapper_width) + "px";
	footer.style.top = wrapper.offsetTop + oSTAGE.wrapper_height + "px";
	footer.style.left = wrapper.style.left;

	//footer.style.marginLeft = -(Math.floor(oSTAGE.wrapper_width * 0.5) + 1) + "px";

	  //update resizer queue
	  for(var i=update_queue.length-1; i>=0; i--){
	    if(update_queue[i].forget){
	      update_queue.splice(i,1);
	    }else if(update_queue[i].doResizeUpdate){
	      update_queue[i].doResizeUpdate();
	    }else{
	      update_queue.splice(i,1);
	    }
	  }


/*
	if(RESIZER.repeat_frame==0 && !me.doCheckFullScreen() && oSTAGE.is_fullscreen){
		me.doFullScreenOff();
		CONTROLS.doUpdateFullScreen();


		var is_full = me.doCheckFullScreen();
		trace("is_full " + is_full);	
	}
	*/

}






//--------------------------------------
// full screen
//--------------------------------------

this.doCheckFullScreen = function(){
	var isFullScreen = (document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
	return isFullScreen;
}


this.doFullScreenOn = function(){

	if(oSTAGE.is_fullscreen){return;}

	//enter full screen
	var elem = document.documentElement;

	
		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
		  elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
		  elem.webkitRequestFullscreen();
		}
	

	RESIZER.w = 0;
}
this.doFullScreenOff = function(){

	trace("doFullScreenOff()");

	if(!oSTAGE.is_fullscreen){return;}

	var elem = document;

	trace(elem);

	//exit full screen
	
		if (elem.exitFullscreen) {
		  elem.exitFullscreen();
		} else if (elem.cancelFullScreen) {
		  elem.cancelFullScreen();
		} else if (elem.mozCancelFullScreen) {
		  elem.mozCancelFullScreen();
		} else if (elem.msExitFullscreen) {
		  elem.msExitFullscreen();
		} else if (elem.webkitExitFullscreen) {
		  elem.webkitExitFullscreen();
		}
	

	//oSTAGE.is_fullscreen = false;

	RESIZER.w = 0;
}



}