
//Static Object
var NickShareOverlay = (function() {

	var CONFIG_WIDTH = 960;
	var CONFIG_HEIGHT = 560;
	
	var scale = 1;
	
	var elContainer;
	
	var elBox;
	var elFirstName;
	var elLastInitial;
	var elState;
	var elAge;
	
	
	var firstNameVal;
	var lastInitialVal;	
	var ageVal;
	
	
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
        var selection = window.getSelection ? window.getSelection() : document.selection ? document.selection : null;
        if(!!selection) selection.empty ? selection.empty() : selection.removeAllRanges();
		elBox.style.display = "none";
		clearInterval(intervalId);
		visible = false;
	}
	
	
	// Width
	overlay.setFirstNameWidth = function(value){
		elFirstName.dataprops.width = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setInitialWidth = function(value){
		elLastInitial.dataprops.width = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setStateWidth = function(value){
		elState.dataprops.width = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setAgeWidth = function(value){
		elAge.dataprops.width = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
		
	
	// Height
	overlay.setFirstNameHeight = function(value){
		elFirstName.dataprops.height = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setInitialHeight = function(value){
		elLastInitial.dataprops.height = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setStateHeight = function(value){
		elState.dataprops.height = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setAgeHeight = function(value){
		elAge.dataprops.height = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	
	
	overlay.setFirstNameX = function(value){
		elFirstName.dataprops.left = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setInitialX  = function(value){
		elLastInitial.dataprops.left = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setStateX  = function(value){
		elState.dataprops.left = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setAgeX  = function(value){
		elAge.dataprops.left = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	
	overlay.setFirstNameY = function(value){
		elFirstName.dataprops.top = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setInitialY  = function(value){
		elLastInitial.dataprops.top = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setStateY  = function(value){
		elState.dataprops.top = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setAgeY  = function(value){
		elAge.dataprops.top = value;
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
		//Needs to scale properly
		for( var i = 0; i<elements.length; i++) {
			var el = elements[i];
			
			el.style.width = (scale*el.dataprops.width) + "px";
			el.style.height = (scale*el.dataprops.height) + "px";
			el.style.top = (scale*el.dataprops.top) + "px";
			el.style.left = (scale*el.dataprops.left) + "px";
			el.style.fontSize = (scale*el.dataprops.fontSize) + "px";
			
			
			el.style.paddingLeft = (scale*5) + "px";
		}
	}

	var onWindowSizePoll = function () {
		onWindowResize(null);
	}

	overlay.init = function(selector){
		globalSelector = selector;
		elContainer = document.querySelector(selector);
		
		elContainer.setAttribute("unselectable", "off"); // For IE and Opera
				
		firstNameVal = "";
		lastInitialVal = "";
		ageVal = "";
				
		elBox = document.createElement("div");
		
		elContainer.appendChild(elBox);
		
		elFirstName = document.createElement("input");
		elFirstName.setAttribute("type", "text");
		elFirstName.setAttribute("maxlength", "20");
		elFirstName.setAttribute("placeholder", "First Name");
		
		elLastInitial = document.createElement("input");
		elLastInitial.setAttribute("type", "text");
		elLastInitial.setAttribute("placeholder", "Last Initial");
		elLastInitial.setAttribute("maxlength", "1");

		var statesList ={
			"AL": "Alabama",
			"AK": "Alaska",
			"AZ": "Arizona",
			"AR": "Arkansas",
			"CA": "California",
			"CO": "Colorado",
			"CT": "Connecticut",
			"DE": "Delaware",
			"DC": "District Of Columbia",
			"FL": "Florida",
			"GA": "Georgia",
			"HI": "Hawaii",
			"ID": "Idaho",
			"IL": "Illinois",
			"IN": "Indiana",
			"IA": "Iowa",
			"KS": "Kansas",
			"KY": "Kentucky",
			"LA": "Louisiana",
			"ME": "Maine",
			"MD": "Maryland",
			"MA": "Massachusetts",
			"MI": "Michigan",
			"MN": "Minnesota",
			"MS": "Mississippi",
			"MO": "Missouri",
			"MT": "Montana",
			"NE": "Nebraska",
			"NV": "Nevada",
			"NH": "New Hampshire",
			"NJ": "New Jersey",
			"NM": "New Mexico",
			"NY": "New York",
			"NC": "North Carolina",
			"ND": "North Dakota",
			"OH": "Ohio",
			"OK": "Oklahoma",
			"OR": "Oregon",
			"PA": "Pennsylvania",
			"RI": "Rhode Island",
			"SC": "South Carolina",
			"SD": "South Dakota",
			"TN": "Tennessee",
			"TX": "Texas",
			"UT": "Utah",
			"VT": "Vermont",
			"VA": "Virginia",
			"WA": "Washington",
			"WV": "West Virginia",
			"WI": "Wisconsin",
			"WY": "Wyoming"
		}
		
		elState = document.createElement("select");
		for( var stateCode in statesList ) {
			var stateOption = document.createElement("option");
			stateOption.setAttribute("value", stateCode );
			stateOption.text = statesList[stateCode];
			elState.appendChild(stateOption);
		}
		elState.WebkitAppearance = "menulist-button";
		
		elAge = document.createElement("input");
		elAge.setAttribute("type", "text");
		elAge.setAttribute("maxlength", "2");
		
		elFirstName.addEventListener("input", function(e) { 
			var charMatch = /^[a-zA-Z]{0,15}$/;
			
			if( !charMatch.test( elFirstName.value ) ) {
				elFirstName.value = firstNameVal;
				return;
			}
			
			firstNameVal = elFirstName.value;
		} );

		
		elLastInitial.addEventListener("input", function(e) { 
			var charMatch = /^[a-zA-Z]?$/;
			
			if( !charMatch.test( elLastInitial.value ) ) {
				elLastInitial.value = lastInitialVal;
				return;
			}
			
			lastInitialVal = elLastInitial.value;
			
		} ); 
		
		
		elAge.addEventListener("input", function(e) {  
			if( elAge.value == "" ) return;
		
			var ageMatch = /^\d{0,2}$/;
			if( !ageMatch.test( elAge.value ) ) {				
				elAge.value = ageVal;
				return;
			} 
			
			if ( elAge.value < 1) elAge.value = 1;
			if ( elAge.value > 99) elAge.value = 99;

			ageVal = elAge.value;
		} ); 
		
		
		
		
		
		
		
		var keyboardElements = [elFirstName, elLastInitial, elAge];
		
		elements = [elFirstName, elLastInitial, elState, elAge];
		
		
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
		
		window.addEventListener('resize', onWindowResize );
	}
	
	
	
	overlay.isCocoon = function() {
		if( typeof( navigator.isCocoonJS ) == "undefined" ) return false;
		else return navigator.isCocoonJS;
	}
	
	overlay.cocoonKeyboardDismiss = function() {
		Cocoon.Dialog.dismissKeyboard();
	}
	
	
	overlay.cocoonKeyboardShow = function () {
		Cocoon.Dialog.showKeyboard({
			 type: Cocoon.Dialog.keyboardType.TEXT,
		}, 
		{
			insertText: function(inserted) {
				cocoonKeyboardInsert(inserted);
			},
			deleteBackward: function() {
				cocoonKeyboardDelete();
			},
			done: function() {
				cocoonKeyboardDone();
			},
			cancel: function() {
				 cocoonKeyboardCancel();
			}
		});
	}
	
	function doSubmit(data) {
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState == 4 && xhttp.status == 201) {
				nickShareComplete();
			}
		};
		xhttp.open("POST", "http://funnel.mtvnservices.com/api/v2/nick.com/collections/game-shakers-henry-danger-dance-machine/entries.json", true);
		xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhttp.send("name="+data["name"]+"&age="+data["age"]+"&state="+data["state"]+"&GameUrl="+ data["GameUrl"] );
	}
	
	overlay.cocoonSubmit = function(params) {
		doSubmit({
			name: params.firstName + " " + params.lastInitial,
			age: params.age,			
			state: params.state,
			GameUrl: params.url
		});
	}
	
	overlay.submit = function(url){
		var blankFields = [];
	
		if( elFirstName.value == "" ) blankFields.push("firstName");
		if( elLastInitial.value == "" ) blankFields.push("lastInitial");
		if( elState.value == "" ) blankFields.push("state");
		if( elAge.value == "" ) blankFields.push("age");
		
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

		doSubmit(data);
		
	}

	

	
	var resizeHandlers = [];
	
	overlay.setAutoResize = function (value) {
	   if( value ) jsembed.enableAutoScaling();
	   else jsembed.disableAutoScaling()
	}
	
	return overlay;
})();

NickShareOverlay.init("#embedtarget");