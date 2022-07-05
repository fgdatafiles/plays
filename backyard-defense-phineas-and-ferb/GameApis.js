/* jshint undef: true, unused: true */
/* global abcdm */

if (typeof abcdm === "undefined") abcdm = {};
if (typeof abcdm.abc === "undefined") abcdm.abc = {};
if (typeof abcdm.abc.com === "undefined") abcdm.abc.com = {};

abcdm.abc.com.GameApis = {
	
	webviewLoaded: false,
	frameWorkInitialized: false,
	omnitureInitialized: false,
	//apis
	
	loadWebview: function() {

	},
	
	setWebviewLoaded: function() {
		this.webviewLoaded = true;
	},

	playAd: function(adtype) {
		if(this.webviewLoaded) {
			CocoonJS.App.forwardAsync('abcdm.abc.com.GameAds.startAd("' + adtype + '")');
		} else {
			this.log("Game Apis' have not been loaded");
		}
	},

	playPreRoll: function() {
		if(this.webviewLoaded) {
			CocoonJS.App.forwardAsync('abcdm.abc.com.GameAds.startAd("preRoll")');
		} else {
			this.log("Game Apis' have not been loaded");
		}
	},
	
	playMidRoll: function() {
		if(this.webviewLoaded) {
			CocoonJS.App.forwardAsync('abcdm.abc.com.GameAds.startAd("midRoll")');
		} else {
			this.log("Game Apis' have not been loaded");
		}
	},
	
	initOmniture: function(omnitureAccount) {
		if(omnitureAccount && this.webviewLoaded) {
			CocoonJS.App.forwardAsync('abcdm.abc.com.Analytics.init("' + omnitureAccount + '")');
		} else {
			this.log("Game Apis' have not been loaded");
		}
	},
	
	trackPage: function(page, opt, events) {
		if(this.omnitureInitialized) {
			CocoonJS.App.forwardAsync('abcdm.abc.com.Analytics.trackLink("' + page + '",' + JSON.stringify(opt) + ',"' + events + '")');
		} else {
			this.omnitureError("omniture not initialized");
		}
	},
	
	trackLink: function(link, opt, events) {
		if(this.omnitureInitialized) {
			CocoonJS.App.forwardAsync('abcdm.abc.com.Analytics.trackLink("' + link + '",' + JSON.stringify(opt) + ',"' + events + '")');
		} else {
			this.omnitureError("omniture not initialized");
		}
	},
	
	gameCloseComplete: function() {
		CocoonJS.App.forwardAsync('abcdm.abc.com.Framework.onCloseComplete();');
	},
	
	//Callbacks and events
	/**
	 * Webview has been loaded.
	 */ 
	apiWebviewLoadComplete: function()
	{
		this.log("onLoadInTheWebViewSucceed");
		this.setWebviewLoaded();
	
		abcdm.abc.com.GameApis.apiLoadComplete();
	},	
	
	/**
	 * Webview has been loaded.
	 */ 
	apiWebviewLoadFailed: function()
	{
		this.log("onLoadInTheWebViewFailed");
		this.apiLoadFailed();
	},	
	
	
	/**
	 * Framework has been initialized.
	 */ 
	frameworkInitComplete: function() {
		this.log("api framework initialization complete");
		
		this.frameWorkInitialized = true;
	},
	
	/**
	 * Omniture has been initialized.
	 */ 
	apiOmnitureInitComplete: function() {
		this.log("api omniture initialization complete");
		
		this.omnitureInitialized = true;
		
		abcdm.abc.com.GameApis.omnitureInitComplete();
	},
	
	//Game is allowed to override these
	
	/**
	 * Omniture has been initialized.
	 */ 
	omnitureInitComplete: function() {
		this.log("omniture init complete");		
	},
	
	/**
	 * Api has been initialized.
	 */ 
	apiLoadComplete: function() {
		this.log("api load complete");
	},
	
	/**
	 * Api has failed to initialize.
	 */ 
	apiLoadFailed: function() {
		this.log("api load failed");		
	},
	
	/**
	 * The Analytics framework could not be initialized
	 * 
	 * @param string message Error message that was returned by Analytics.
	 */
	omnitureError: function(message) {
		this.log("omniture error: " + message);
	},

	/**
	 * Ad playback has been completed, and the game may resume.
	 */
	adPlaybackComplete: function() {
		this.log("ads playback complete");		
	},

	/**
	 * An error occurred during ad playback.
	 */
	adPlaybackError: function(message) {
		this.log("ads error: " + message);		
	},
	
	/**
	 * The game is being closed by the App. Save any required state data now.
	 */
	onClose: function() {
		this.log("on close");
	},

	onActivated: function() {
		this.log("on activated");
	},
	
	onSuspended: function() {
		this.log("on suspended");
	},
	/**
	 * Helper function that null-checks the console.
	 * 
	 * @param string message Text to be logged to console.
	 */
	log: function(message) {
		if (window.console){
			window.console.log('[Game Apis] '+message);
		}
	},
	sendNotification: function (message){
		if ((window.CocoonJS && window.CocoonJS.nativeCall)) {
			CocoonJS.nativeCall(message);
		}
	}
};


CocoonJS.App.onLoadInTheWebViewSucceed.addEventListener(function()
{
	abcdm.abc.com.GameApis.apiWebviewLoadComplete();
	
});

CocoonJS.App.onLoadInTheWebViewFailed.addEventListener(function()
{
	abcdm.abc.com.GameApis.apiWebviewLoadFailed();
});

CocoonJS.App.onActivated.addEventListener(function() {
	abcdm.abc.com.GameApis.log("App activated");
	
	abcdm.abc.com.GameApis.onActivated();	
});

CocoonJS.App.onSuspended.addEventListener(function() {
	abcdm.abc.com.GameApis.log("App suspended");
	
	abcdm.abc.com.GameApis.onSuspended();
});



(function() {	
	window.setTimeout(abcdm.abc.com.GameApis.loadWebview, 500);
})();