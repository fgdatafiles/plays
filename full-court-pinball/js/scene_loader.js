
function LoaderScreen(){

	trace("LoaderScreen()");

	var me = this;

	//create or reuse stage
	var div = document.getElementById("div_loading");
	__utils.doDestroyAllChildren(div);

	var loading_block = div.appendChild(document.createElement("div"));
	loading_block.className = "loading_block";
	loading_block.style.visibility = "hidden";

	//animated gif
	var loading_logo = loading_block.appendChild(document.createElement("img"));
	loading_logo.className = "loading_logo";
	loading_logo.src = oLANG_IMAGES.MovieLogo || "media/images/MovieLogo.png";
	loading_logo.style.width = "256px"; 
	loading_logo.onload = function(){
		me.doResizeUpdate();
	}

	var br = loading_block.appendChild(document.createElement("br"));
	br.clear = "all";
	
	var loading_gif = loading_block.appendChild(document.createElement("img"));
	loading_gif.className = "loading_logo";
	loading_gif.src = "media/images/Loader_White.gif";
	loading_gif.onload = function(){
		me.doResizeUpdate();
	}
	div.style.display= "block";
	loading_block.style.visibility = "visible";

	var br = loading_block.appendChild(document.createElement("br"));
	br.clear = "all";

	//message
	var loading_date = loading_block.appendChild(document.createElement("div"));
	loading_date.className = "loading_date";
	
	__utils.doHTMLText(loading_date, oLANG.loading_msg);

	var style = window.getComputedStyle(loading_date, null).getPropertyValue('font-size');
	loading_date.my_fontsize = parseFloat(style); 


	var br = loading_block.appendChild(document.createElement("br"));
	br.clear = "all";

		//loading bar
	var loading_bar = loading_block.appendChild(document.createElement("div"));
	loading_bar.className = "loading_bar";
	loading_bar.style.maxWidth = "300px"; 

	var loading_bar_fill = loading_bar.appendChild(document.createElement("div"));
	loading_bar_fill.className = "loading_bar_fill";

	var loading_bar_frame = loading_bar.appendChild(document.createElement("div"));
	loading_bar_frame.className = "loading_bar_frame";

	loading_bar_fill.style.width = "0%";
	

	var br = loading_block.appendChild(document.createElement("br"));
	br.clear = "all";


	var loading_cta = loading_block.appendChild(document.createElement("img"));
	loading_cta.className = "loading_logo";
	loading_cta.style.marginTop = "20px";
	loading_cta.style.width = "512px"; 
	loading_cta.style.maxWidth = "80%"; 
	loading_cta.src = oLANG_IMAGES.theaters || "media/images/Localized/en/theaters.png";
	
	loading_cta.onload = function(){
		me.doResizeUpdate();
	}


	//---------------------------
	// resize update
	//---------------------------

	this.doResizeUpdate = function(){

		var content_width = loading_block.clientWidth;
		var content_height = loading_block.clientHeight;

		div.style.width = (oSTAGE.game_width) + "px";
		div.style.height = (oSTAGE.game_height) + "px";
		div.style.transform = "scale(" + oSTAGE.scale + ")";

		loading_block.style.marginTop = -(content_height * 0.5) + "px";
		loading_block.style.marginLeft = -(content_width * 0.5) + "px";

	}

	//---------------------------
	// manage
	//---------------------------

	this.doUpdateBar = function(prog){
		loading_bar_fill.style.width = Math.max(9, Math.min(100, (prog*100))) + "%";
	}

	this.doDestroy = function(){
		window.removeEventListener("resize", me.doResizeUpdate);
		window.removeEventListener("orientationchange", me.doResizeUpdate);
		__utils.doDestroyAllChildren(div);
		div.style.display = "none";
	}

	//---------------------------
	// start
	//---------------------------
	var resize_updater = {doResizeUpdate : me.doResizeUpdate};
	update_queue.push(resize_updater);

	me.doResizeUpdate();

	window.addEventListener("resize", me.doResizeUpdate);
	window.addEventListener("orientationchange", me.doResizeUpdate);

	div.style.display= "block";

	new ResizeSensor(div, function() {
	    RESIZER.w = 0;
		RESIZER.h = 0;
	});
	

}