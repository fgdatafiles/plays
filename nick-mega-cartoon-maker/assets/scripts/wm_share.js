//Static Object
var NickShare = (function() {

	var CONFIG_WIDTH = 960;
	var CONFIG_HEIGHT = 560;

	var scale = 1;

	var elContainer;

	var elBox;
	var elFirstName;
	var elCopyButton;

	var elSubmissions;

	var shareUrl = "";

	var elements;

	var globalSelector;

	var width;
	var height;
	var pos;
	var fontsize;
	var visible = false;

	var overlay = {};

	overlay.show = function() {
		visible = true;
		elBox.style.display = "block";
		intervalId = setInterval(onWindowSizePoll, 500);
		onWindowSizePoll();
	}

	overlay.hide = function() {
		elBox.style.display = "none";
		clearInterval(intervalId);
		visible = false;
	}

	//TEXTBOX
	overlay.setFirstNameWidth = function(value){
		elFirstName.dataprops.width = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setFirstNameText = function(value){
		elFirstName.value = value;
		return value;
	}
	overlay.setFirstNameHeight = function(value){
		elFirstName.dataprops.height = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setFirstNameX = function(value){
		elFirstName.dataprops.left = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setFirstNameY = function(value){
		elFirstName.dataprops.top = value;
		if( visible ) onWindowSizePoll();
		return value;
	}

	//BTN
	overlay.setBtnWidth = function(value){
		elCopyButton.dataprops.width = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setBtnHeight = function(value){
		elCopyButton.dataprops.height = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setBtnX = function(value){
		elCopyButton.dataprops.left = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setBtnY = function(value){
		elCopyButton.dataprops.top = value;
		if( visible ) onWindowSizePoll();
		return value;
	}

	overlay.setFirstNameFontSize = function(value){
		elFirstName.dataprops.fontSize = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setInitialFontSize  = function(value){
		elLastInitial.dataprops.fontSize = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setStateFontSize  = function(value){
		elState.dataprops.fontSize = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setAgeFontSize  = function(value){
		elAge.dataprops.fontSize = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setSubmitFontSize = function(value){
		elSubmit.dataprops.fontSize = value;
		if( visible ) onWindowSizePoll();
		return value;
	}

	var onWindowResize = function (e) {
		var container = document.querySelector(globalSelector);
		var containerW = parseInt(container.style.width, 10);
		var containerH = parseInt(container.style.height, 10);

		scale = containerW / CONFIG_WIDTH;

		var scaleX = containerW / CONFIG_WIDTH;
		var scaleY = containerH / CONFIG_HEIGHT;

		scale *= .777;
		var ratioAdjustedWidth = (containerH/3) * 4;

		var maxOffset = containerW-ratioAdjustedWidth;
		var offsetRatio = (containerW-ratioAdjustedWidth)/maxOffset;
		if(offsetRatio > 1)
			offsetRatio = 1;
		var offset = offsetRatio * maxOffset * .5;

		for( var i = 0; i<elements.length; i++) {
			var el = elements[i];

			el.style.width = (scaleX*el.dataprops.width) + "px";
			el.style.height = (scaleY*el.dataprops.height) + "px";
			el.style.top = (scaleY*el.dataprops.top) + "px";
			el.style.left = (scaleX*el.dataprops.left) +  "px";
			el.style.fontSize = (scale*el.dataprops.fontSize) + "px";
		}
	}

	var onWindowSizePoll = function () {
		onWindowResize(null);
	}

	overlay.resizeWindow = function()
	{
		onWindowResize(null);
	}

	overlay.init = function(selector){
		globalSelector = selector;
		elContainer = document.querySelector(selector);

		elContainer.setAttribute("unselectable", "off"); // For IE and Opera

		elBox = document.createElement("div");

		elContainer.appendChild(elBox);

		elFirstName = document.createElement("input");
		elFirstName.setAttribute("type", "text");
		elFirstName.setAttribute("maxlength", "999");
		elFirstName.setAttribute("placeholder", "Share URL");
		elFirstName.setAttribute("readonly", "true");

		elCopyButton = document.createElement("button");
		elCopyButton.setAttribute("id", "shareBtn");
		elCopyButton.setAttribute("type", "text");
		elCopyButton.setAttribute("placeholder", "Last Initial");
		elCopyButton.innerHTML = 'Copy';

		elements = [elFirstName, elCopyButton];

		for( var i = 0; i<elements.length; i++ ) {
			var el = elements[i];
			elBox.appendChild( elements[i] );

			el.dataprops = {} ;
			el.dataprops.width = 200 ;
			el.dataprops.height = 28 ;
			el.dataprops.top = (i * 35) ;
			el.dataprops.left = 100 ;
			el.dataprops.fontSize = 20 ;

			el.style.width = el.dataprops.width + "px";
			el.style.height = el.dataprops.height + "px";
			el.style.top = el.dataprops.top + "px";
			el.style.left = el.dataprops.left + "px";
			el.style.fontSize = el.dataprops.fontSize + "px";
			el.style.paddingLeft = 5 + "px";
			el.style.position = "absolute";
		}

		elBox.style.display = "none";

	    elCopyButton.onclick = function(){
	    	console.log("here");
	    	clip(elFirstName.value);
	    };

		//window.addEventListener('resize', onWindowResize );
	}

	overlay.hideCopyButton = function() {
		elCopyButton.setAttribute("hidden", true);
	}

	overlay.showBoxOnLinks = function () {
		elSubmissions.style.background = "#00ff00";
		//elTerms.style.background = "#00ff00";
		elSubmissions.style.opacity = ".7";
		//elTerms.style.opacity = ".7";
	}

	overlay.hideBoxOnLinks = function () {
		elSubmissions.style.opacity = "0";
		//elTerms.style.opacity = "0";
	}

	overlay.isCocoon = function() {
		if( typeof(cocoonjsCheckArgs) == "undefined" ) return false;
		return true;
	}

	overlay.getBlankFields = function() {
		var blankFields = [];

		if( elFirstName.value == "" ) blankFields.push("firstName");
		if( elLastInitial.value == "" ) blankFields.push("lastInitial");
		if( elState.value == "" ) blankFields.push("state");
		if( elAge.value == "" ) blankFields.push("age");
		if( !agree ) blankFields.push("terms");

		return blankFields;
	}

	overlay.submit = function(url, callbackSuccess){
		var blankFields = getBlankFields();

		if( blankFields.length > 0 ) return blankFields;

		var first_name = elFirstName.value;
		var last_initial = elLastInitial.value;
		var state = elState.value;
		var age = elAge.value;

		var data = [];
		data["name"] = first_name + " " + last_initial;
		data["age"] = age;
		data["state"] = state;
		data["GameUrl"] = url;

		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 201) {

				callbackSuccess();
			}
		};
		xhttp.open("POST", "http://funnel.mtvnservices.com/api/v2/nick.com/collections/henry-danger-cartoon-creator-submissions/entries.json", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send("name="+data["name"]+"&age="+data["age"]+"&state="+data["state"]+"&GameUrl="+ data["GameUrl"] );

		return blankFields;
	}

	var resizeHandlers = [];

	overlay.setAutoResize = function (value) {
	    // super hacky and only works on chrome. doing only as advised.
	    if( typeof(getEventListeners) == 'undefined' ) return;

		if( value ) {
			for( var i = 0; i<resizeHandlers.length; i++ ) {
				window.addEventListener( 'resize', resizeHandlers[i] )
			}
			resizeHandlers.length = 0;
		}
		else {
			resizeHandlers = [];
			var currentResizeHandlers = getEventListeners(window)['resize'];
			for( var i = 0; i<resizeHandlers.length; i++ ) {
			    window.removeEventListener( 'resize', currentResizeHandlers[i].listener )
				resizeHandlers.push( currentResizeHandlers[i].listener );
			}

		}
	}

	return overlay;
})();
var tString = "embedtarget";
var tElement = document.getElementById("embedtarget");
if (tElement == null) tString = "embedTarget";
NickShare.init("#"+tString);
