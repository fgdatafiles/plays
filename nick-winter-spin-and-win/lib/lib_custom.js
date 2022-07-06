/**
 * ...
 * @author John Paul G. Mata
 */
( function () {
	
	function launchIntoFullscreen () {
		
		if ( document.documentElement.requestFullscreen ) document.documentElement.requestFullscreen();
		else if ( document.documentElement.mozRequestFullScreen ) document.documentElement.mozRequestFullScreen();
		else if ( document.documentElement.webkitRequestFullscreen ) document.documentElement.webkitRequestFullscreen();
		else if ( document.documentElement.msRequestFullscreen ) document.documentElement.msRequestFullscreen();
	}
	
	function isIOS_7 () {
		
		var device = false;
		var osVer = false;
		if (navigator.userAgent.indexOf('iPod') != -1
		|| navigator.userAgent.indexOf('iPhone') != -1
		|| navigator.userAgent.indexOf('iPad') != -1)
		device = true;
		
		var regex = /OS 7_\d+/;
		if ( regex.test(navigator.userAgent)) {
			osVer = true;
		}
		
		if (device && osVer) return true;
		
		return false;
	}
	
	// Launch to full screen on touch start
	window.addEventListener ( 'touchstart', function ( e ) { 
		
		// Call fullscreen method
		launchIntoFullscreen();
		
		// Focus window
		window.focus();
		
	}, false );
	
	// Normal script (OpenFL)
	window.addEventListener ( 'touchmove', function ( e ) { e.preventDefault (); }, false );
	
	if ( typeof window.devicePixelRatio != 'undefined' && window.devicePixelRatio > 2 ) {
		var meta = document.getElementById( 'viewport' );
		if ( meta != null ) meta.setAttribute( 'content', 'minimal-ui, width=device-width, initial-scale=' + ( 2 / window.devicePixelRatio) + ', user-scalable=no' );
	}
	
	// Disable arrow keys from moving browser window
	// And disable default of backspace and delete functions
	window.addEventListener( 'keydown', function( e ) {
		
		// arrow keys, backspace, delete
		if( [ 37, 38, 39, 40, 8, 46 ].indexOf( e.keyCode ) > -1 ) { e.preventDefault(); }
		
	}, false );
	
	// On resize
	window.onresize =  function () {
		
		// If not ios7
		if( !isIOS_7() ){
			
			var a = document.getElementById( 'embedtarget' );
			a.style.height = window.innerHeight + 'px';
			a.style.width = window.innerWidth + 'px';
			scrollTo( 0,0 );
		}
	};
	
	// On orientation change
	window.onorientationchange = function () { scrollTo( 0, 0 ); }
	
	// Prevent console.log crashes in IE
	if ( !window.console || !window.console.log ) console = { log: function() {}, error: function() {} };
	
})();