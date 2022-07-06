
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
	var elAgree;

	//var elTerms;
	//var elSubmissions;

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
		elBox.style.display = "none";
		clearInterval(intervalId);
		visible = false;
	}

	overlay.setWidth = function(value) {
		CONFIG_WIDTH = value;
		if( visible ) onWindowSizePoll();
		return value;
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
	overlay.setAgreeWidth = function(value){
		elAgree.dataprops.width = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	/*
	overlay.setTermsWidth = function(value){
		elTerms.dataprops.width = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setSubmissionsWidth = function(value){
		elSubmissions.dataprops.width = value;
		if( visible ) onWindowSizePoll();
		return value;
	}

	*/

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
	overlay.setAgreeHeight = function(value){
		elAgree.dataprops.height = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	/*
	overlay.setTermsHeight = function(value){
		elTerms.dataprops.height = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setSubmissionsHeight = function(value){
		elSubmissions.dataprops.height = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	*/

	overlay.getFirstNameX = function(){
		return elFirstName.dataprops.left;
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
	overlay.setAgreeX = function(value){
		elAgree.dataprops.left = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	/*
	overlay.setTermsX = function(value){
		elTerms.dataprops.left = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setSubmissionsX = function(value){
		elSubmissions.dataprops.left = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	*/

	overlay.getFirstNameY = function(){
		return elFirstName.dataprops.top;
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
	overlay.setAgreeY = function(value){
		elAgree.dataprops.top = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	/*
	overlay.setTermsY = function(value){
		elTerms.dataprops.top = value;
		if( visible ) onWindowSizePoll();
		return value;
	}
	overlay.setSubmissionsY = function(value){
		elSubmissions.dataprops.top = value;
		if( visible ) onWindowSizePoll();
		return value;
	}*/

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

			if( el == elAgree ) continue;

			el.style.paddingLeft = (scaleX*5) + "px";
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

		firstNameVal = "";
		lastInitialVal = "";
		ageVal = "";

		elBox = document.createElement("div");

		elContainer.appendChild(elBox);

		elFirstName = document.createElement("input");
		elFirstName.setAttribute("type", "text");
		elFirstName.setAttribute("maxlength", "10");
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

		elAge = document.createElement("input");
		elAge.setAttribute("type", "text");
		elAge.setAttribute("maxlength", "2");

		elFirstName.addEventListener("input", function(e) {
			var charMatch = /^[a-zA-Z]{0,10}$/;

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


		elAgree = document.createElement("input");
		elAgree.setAttribute("type", "checkbox");
		elAgree.style.MozAppearance = "none";

		/*
		elTerms = document.createElement("div");
		elTerms.addEventListener("click", function() {
			window.open("http://www.nick.com/legal/nick-terms-of-use/")
		} );
		*/
		/*
		elSubmissions = document.createElement("div");
		elSubmissions.innerHTML = "I have read and agreed to the <a target='_blank' href='http://www.nick.com/legal/nick-terms-of-use/'>Nickelodeon Terms of Use</a> and <a target='_blank' href='http://www.nick.com/info/user-content-submission-agreement.html'>User Content Submissions Agreement.</a>";
		*/
		/*
		elSubmissions.addEventListener("click", function() {
			window.open("http://www.nick.com/info/user-content-submission-agreement.html")
		} );
		*/

		elements = [elFirstName, elLastInitial, elState, elAge, elAgree, /*elTerms, elSubmissions*/];


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

		elAgree.dataprops.width = 30;
		elAgree.dataprops.width = 30;
		elAgree.style.width = 30 + "px";
		elAgree.style.height = 30 + "px";
		elAgree.style.top = (i * 16) + "px";
		elAgree.style.left = 100 + "px";
		elAgree.style.fontSize = 10 + "px";
		elAgree.style.position = "absolute";


		elBox.style.display = "none";

		//window.addEventListener('resize', onWindowResize );
	}

	overlay.showBoxOnLinks = function () {
		//elSubmissions.style.background = "#00ff00";
		//elTerms.style.background = "#00ff00";
		//elSubmissions.style.opacity = ".7";
		//elTerms.style.opacity = ".7";
	}

	overlay.hideBoxOnLinks = function () {
		//elSubmissions.style.opacity = "0";
		//elTerms.style.opacity = "0";
	}

	overlay.isCocoon = function() {
		if( typeof(cocoonjsCheckArgs) == "undefined" ) return false;
		return true;
	}

	overlay.submit = function(url, callbackSuccess){
		var blankFields = [];

		var agree = elAgree.checked;

		if( elFirstName.value == "" ) blankFields.push("firstName");
		if( elLastInitial.value == "" ) blankFields.push("lastInitial");
		if( elState.value == "" ) blankFields.push("state");
		if( elAge.value == "" ) blankFields.push("age");
		if( !agree ) blankFields.push("terms");


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
		xhttp.open("POST", "http://funnel.mtvnservices.com/api/v2/nick.com/collections/spongebob-squarepants-cartoon-creator-submissions/entries.json", true);
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

NickShareOverlay.init("#"+tString);
