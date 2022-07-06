window.ShareOverlay = window.ShareOverlay || (function() {
	var CONFIG_WIDTH = 960;
	var CONFIG_HEIGHT = 560;

	var scale = 1;
	var intervalId = 0;

	var el;

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
	}

	publicMembers.hide = function() {
		el.style.display = "none";
		clearInterval(intervalId);
		visible = false;
	}

	publicMembers.setText = function(string) {
		//el.innerHTML = string;
		el.value = string;
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

	publicMembers.init = function (containerID) {
		var container = document.querySelector(containerID);
		el = document.createElement("textarea");
		el.setAttribute("id", "sharelink-box");
		el.setAttribute("disabled", "true");

		container.appendChild(el);

		var s = el.style;

		s.position = "absolute";
		s.left = "0";
		s.right = "0";
		s.width = "200px";
		s.height = "75px";
		s.color = "#000000";
		s.fontSize="18px";
		s.background = "#fff";
		s.fontFamily = "arial,sans-serif";
		s.top = "250px";
		s.padding = "0 5px";
		s.margin = "0 auto";
		s.display = "none";
		s.userSelect = "none";
		s.webkitUserSelect = "none";
		s.MozUserSelect = "none";
		s.textAlign = "left";

		width = parseInt( el.style.width, 10 );
		height = parseInt( el.style.height, 10 );
		pos = parseInt( el.style.top, 10 );
		fontsize = parseInt( el.style.fontsize, 10 );

		el.setAttribute("unselectable", "on"); // For IE and Opera

		window.addEventListener('resize', onWindowResize );
		el.addEventListener('click', onElementClick );
		el.addEventListener('touchstart', onElementClick );
	}

	var onWindowResize = function (e) {
		var tString = "embedtarget";
		var tElement = document.getElementById("embedtarget");
		if (tElement == null) tString = "embedTarget";
		var container = document.querySelector("#"+tString);
		var containerW = parseInt(container.style.width, 10);
		var containerH = parseInt(container.style.height, 10);

		scale = containerW / CONFIG_WIDTH;

		// var transform = "scale(" + scale + ", " + scale +")";
		// el.style.webkitTransform = transform;
		// el.style.mozTransform = transform;
		// el.style.msTransform = transform;
		// el.style.oTransform = transform;

		el.style.height = (scale*height) + "px";
		//el.style.lineHeight = (scale*height) + "px";
		el.style.width = (scale*width) + "px";
		el.style.top = (scale*pos) + "px";

		el.style.fontSize = (scale*fontsize) +"px";
		// console.log(transform	);
	}

	var onElementClick = function (e) {
		if (document.body.createTextRange) { // ms
			var range = document.body.createTextRange();
			range.moveToElementText(el);
			range.select();
		}
		else if (window.getSelection) {
			var selection = window.getSelection();
			var range = document.createRange();
			range.selectNode(el);
			selection.removeAllRanges();
			selection.addRange(range);
		}
		return false;
	}

	publicMembers.deselect = function() {
		if (window.getSelection) {
			if (window.getSelection().empty) {  // Chrome
				window.getSelection().empty();
			}
			else if (window.getSelection().removeAllRanges) {  // Firefox
				window.getSelection().removeAllRanges();
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

var tString = "embedtarget";
var tElement = document.getElementById("embedtarget");
if (tElement == null) tString = "embedTarget";

ShareOverlay.init("#"+tString);

function getDevicePixelRatio() {
   if( window.devicePixelRatio === undefined ) return 2;
   return window.devicePixelRatio;
}
