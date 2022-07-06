/**
 * ...
 * @author me
 */
(

function() {
	
	var limeloaded = function(){
		
		lime.embed ( "embedtarget", 960, 560, "000000", jsembed.baseUrl() );
	}
	
	var newStyle = document.createElement('style');
	
	var isCocoonJS = window.navigator.isCocoonJS;
	
	if ( !isCocoonJS ) {
		newStyle.innerHTML = "\
			html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
			#embedtarget { background: #000000; width: 100%; height: 100%; }\
			\
			@font-face {\
				font-family: 'Rockwell Condensed Bold';\
				src: url('"+jsembed.baseUrl()+"media/fonts/rockwellc_bold.eot');\
				src: url('"+jsembed.baseUrl()+"media/fonts/rockwellc_bold.eot?#iefix') format('embedded-opentype'),\
				url('"+jsembed.baseUrl()+"media/fonts/rockwellc_bold.svg#my-font-family') format('svg'),\
				url('"+jsembed.baseUrl()+"media/fonts/rockwellc_bold.woff') format('woff'),\
				url('"+jsembed.baseUrl()+"media/fonts/rockwellc_bold.ttf') format('truetype');\
				font-weight: normal;\
				font-style: normal;\
			}\
			@font-face {\
				font-family: 'Rockwell Condensed';\
				src: url('"+jsembed.baseUrl()+"media/fonts/rockwellc_reg.eot');\
				src: url('"+jsembed.baseUrl()+"media/fonts/rockwellc_reg.eot?#iefix') format('embedded-opentype'),\
				url('"+jsembed.baseUrl()+"media/fonts/rockwellc_reg.svg#my-font-family') format('svg'),\
				url('"+jsembed.baseUrl()+"media/fonts/rockwellc_reg.woff') format('woff'),\
				url('"+jsembed.baseUrl()+"media/fonts/rockwellc_reg.ttf') format('truetype');\
				font-weight: normal;\
				font-style: normal;\
			}\
			";
	}
	else {
		newStyle.innerHTML = "\
			html,body { margin: 0; padding: 0; height: 100%; overflow: hidden; }\
			#embedtarget { background: #000000; width: 100%; height: 100%; }\
			\
			@font-face {\
				font-family: 'Rockwell Condensed Bold';\
				src: url('"+jsembed.baseUrl()+"media/fonts/rockwellc_bold.ttf');\
				font-weight: normal;\
				font-style: normal;\
			}\
			@font-face {\
				font-family: 'Rockwell Condensed';\
				src: url('"+jsembed.baseUrl()+"media/fonts/rockwellc_reg.ttf');\
				font-weight: normal;\
				font-style: normal;\
			}\
			";
	}
	document.head.appendChild( newStyle );
	
	var spanFont = null;
	
	spanFont = document.createElement('span');
	spanFont.setAttribute('style', 'font-family:Rockwell Condensed Bold');
	document.body.insertBefore( spanFont, document.body.firstChild );
	
	spanFont = document.createElement('span');
	spanFont.setAttribute('style', 'font-family:Rockwell Condensed');
	document.body.insertBefore( spanFont, document.body.firstChild );
	
	
	var soundjsScript = document.createElement("SCRIPT"); 
	soundjsScript.type  = "text/javascript";
	soundjsScript.src  = jsembed.baseUrl() + "lib/soundjs.min.js";
	document.head.insertBefore( soundjsScript, document.head.firstChild );
	
	var embedScript = document.createElement("SCRIPT"); 
	embedScript.type  = "text/javascript";
	embedScript.src  = jsembed.baseUrl() + "lib/lib_custom.js";
	document.head.insertBefore( embedScript, document.head.firstChild );
	
	var gamejs = document.createElement("SCRIPT"); 
	gamejs.src = jsembed.baseUrl() +"game.js";
	document.head.appendChild(gamejs);
	gamejs.onload = limeloaded;
}


)();