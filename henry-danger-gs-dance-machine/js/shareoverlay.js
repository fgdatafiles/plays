window.ShareOverlay = window.ShareOverlay || (function() {

	var CONFIG_WIDTH = 960;
	var CONFIG_HEIGHT = 560;
	
	var scale = 1;
	var intervalId = 0;
	
	var el;
	
	var container;
	
	var width;
	var height;
	var pos;
	var fontsize;
	var visible = false;
	
	var publicMembers = {};
	

	
	publicMembers.show =  function () {
		visible = true;
		el.style.display = "block";
		intervalId = setInterval(onWindowSizePoll, 500);
		onWindowSizePoll();
        onElementClick();
	} 
	
	
	publicMembers.hide = function() {
        var selection = window.getSelection ? window.getSelection() : document.selection ? document.selection : null;
        if(!!selection) selection.empty ? selection.empty() : selection.removeAllRanges();
		el.style.display = "none";
		clearInterval(intervalId);
		visible = false;
	}
	
	publicMembers.setText = function(string) {
		el.innerHTML = string;
        
	}
	
	
	publicMembers.setPosition = function(i_pos) {
		pos = i_pos;

		if( visible ) onWindowSizePoll();
	}
	
	
	publicMembers.setWidth = function(value) {
		width = value;

		if( visible ) onWindowSizePoll();
	}
	
	
	publicMembers.setHeight = function(value) {
		height = value;
		if( visible ) onWindowSizePoll();

	}
	
	
	publicMembers.setFontSize = function(value) {
		fontsize = value;
		if( visible ) onWindowSizePoll();

	}
	
    
    var preventTouchDefault = function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
	
	
	publicMembers.init = function (containerID) {
		container = document.querySelector(containerID);
		el = document.createElement("textarea");
		el.readOnly = true;
		el.setAttribute("id", "sharelink-box");
		
		container.appendChild(el);
		
		var s = el.style;		
		
		s.position = "absolute";
		s.left = "0";
		s.right = "0";
		s.width = "200px";
		s.height = "75px";
		s.color = "#000000";
		s.fontSize = "36px"; 
		s.background = "#fff"; 
		s.textAlign = "center"; 
		s.lineHeight = "50px"; 
		s.fontFamily = "arial,sans-serif";
		s.top = "250px";
		s.resize = "none";
		
		s.padding = "0 5px";
		s.margin = "0 auto";
		
		s.overflow = "auto"; 
		s.whiteSpace = "nowrap"; 
		s.display = "none"; 
		
		// s.userSelect = "all";
		// s.webkitUserSelect = "all";
		// s.MozUserSelect = "all";
		
		width = parseInt( el.style.width, 10 );
		height = parseInt( el.style.height, 10 );
		pos = parseInt( el.style.top, 10 );
		fontsize = parseInt( el.style.fontsize, 10 );
		
		el.setAttribute("unselectable", "off"); // For IE and Opera
		
		window.addEventListener('resize', onWindowResize );
		/*el.addEventListener('click', onElementClick );
		el.addEventListener('touchstart', onElementClick );
		el.addEventListener('touchend', preventTouchDefault );
		el.addEventListener('mouseup', preventTouchDefault );*/
	}
    
	var onWindowResize = function (e) {
		
		var container = document.querySelector("#embedtarget");
		var containerW = parseInt(container.style.width, 10);
		var containerH = parseInt(container.style.height, 10);
		
		scale = containerW / CONFIG_WIDTH;
		// var transform = "scale(" + scale + ", " + scale +")";
		// el.style.webkitTransform = transform;
		// el.style.mozTransform = transform;
		// el.style.msTransform = transform;
		// el.style.oTransform = transform;
	
		el.style.height = (scale*height) + "px";
		el.style.lineHeight = (scale*height) + "px";
		el.style.width = (scale*width) + "px";
		el.style.top = (scale*pos) + "px";
					
		el.style.fontSize = (scale*fontsize) +"px";
		// console.log(transform);
	}
	
	
	var onElementClick = function (e) {
		// if (document.body.createTextRange) { // ms
			// var range = document.body.createTextRange();
			// range.moveToElementText(el);
			// range.select();
		// } 
		// else if (window.getSelection) {
			// var selection = window.getSelection();            
			// var range = document.createRange();
			// range.selectNode(el);
			// selection.removeAllRanges();
			// selection.addRange(range);
		// }
		
        if(!window.NickShareOverlay.isCocoon())
            el.focus();
		if (el.setSelectionRange) {
	 		el.setSelectionRange(0, el.value.length);
		} else if(!window.NickShareOverlay.isCocoon()){
			el.select();
		}
		  
		return false;
	}
	
	publicMembers.deselect = function() {
		if ('selectionStart' in el) {
		  el.selectionEnd = el.selectionStart;
		}
		
        if(!window.NickShareOverlay.isCocoon()) { 
		  window.focus();
          el.blur();
        }
		
		
		if (window.getSelection) {
			if (window.getSelection().removeAllRanges) {  // Firefox
				window.getSelection().removeAllRanges();
				
			}
			else if (window.getSelection().empty) {  // Chrome
				window.getSelection().empty();
				
			} 
			
		} 
		else if (document.selection) {  // IE?	
			document.selection.empty();
		}
		
	
	}
	
	publicMembers.setScrollEnabled = function(setting) {
		if( setting )
			el.style.overflow = "auto";
		else el.style.overflow = "hidden";
	}
	
		
	var onWindowSizePoll = function () {
		onWindowResize(null);
	}
	

	
	return publicMembers;
})();

ShareOverlay.init("#embedtarget");

function getDevicePixelRatio() {
   if( window.devicePixelRatio === undefined ) return 2;
   return window.devicePixelRatio;
}