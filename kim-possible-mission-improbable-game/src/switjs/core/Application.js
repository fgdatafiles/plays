//==============================================================================
//  Application.js
//  Copyright (c) 2019, Bamtang Games. All Rights Reserved.
//------------------------------------------------------------------------------

window['switOnLoad'] = function() {

	if ( !SwitJS.isSupported ) {
		return;
	}

	if ( !navigator.cookieEnabled ) {
		var div = document.createElement( 'div' );
		div.setAttribute( 'align', 'center' );
		document.body.appendChild( div );
		var img = new Image();
		img.onload = function() {
			img.setAttribute( 'width', '100%' );
			img.setAttribute( 'height', '100%' );
			div.appendChild( img );
		};
		img.src = 'media/images/ui_images/cookiesrequired.jpg';
		return;
	}

	// For IE9 iframe keyboard issue.
	document.onkeydown = function( e ) {
		if ( !window['USE_SANBOX'] ) {
			e.preventDefault();
			return false;
		}
	}

	// Visibility hack event ( Android home icon )
	var hiddenProperty = '';
	var visibilityChangeListener = '';
	if ( typeof document.hidden !== 'undefined' ) {
		hiddenProperty = 'hidden';
		visibilityChangeListener = 'visibilitychange';
	}
	else if ( typeof document.mozHidden !== 'undefined' ) {
		hiddenProperty = 'mozHidden';
		visibilityChangeListener = 'mozvisibilitychange';
	}
	else if ( typeof document.msHidden !== 'undefined' ) {
		hiddenProperty = 'msHidden';
		visibilityChangeListener = 'msvisibilitychange';
	}
	else if ( typeof document.webkitHidden !== 'undefined' ) {
		hiddenProperty = 'webkitHidden';
		visibilityChangeListener = 'webkitvisibilitychange';
	}

	document.addEventListener(
		visibilityChangeListener,
		function() {
			if ( Application.instance ) {
				if ( document[hiddenProperty] ) {
					Application.instance.isHidden = true;
					Application.instance.onLostFocus();
				}
				else {
					Application.instance.isHidden = false;
					Application.instance.onGotFocus();
				}
			}
		},
		false
	);

	// Load strings
	Application.strings = {};
	Application.strings = window['switStrings'];
	Application.strings['STR_EMPTY'] = { 'value': '' };
	Application.strings['STR_LOADER_FONT'] = { 'value': '.' };
	window['switStrings'] = null;
	window['globalAnimations'] = {};

	if ( SwitJS.isLowDevice ) {
		Application.warn( 'Detecting low definition device' )
	}
	if ( SwitJS.useAssetsSD ) {
		Application.warn( 'Using SD assets' )
	}

	var app = new Application();

	var t = !false && app || alert( 'This must be never called and must be optimized out by the compiler' );
};

window.onpagehide = function() {
	if ( Application.instance ) {
		Application.instance.onLostFocus();
	}
};

window.onpageshow = function() {
	if ( Application.instance ) {
		Application.instance.onGotFocus();
	}
};

window.onblur = function() {
	if ( Application.instance ) {
		Application.instance.onLostFocus();
	}
};

window.onfocus = function() {
	if ( Application.instance ) {
		Application.instance.onGotFocus();
	}
};

window.onresize = function( e ) {
	if ( Application.instance ) {
		Application.instance.onResize( e.target.innerWidth, e.target.innerHeight );
		Application.instance.hideAddressBar();
	}
};

window.onorientationchange = function( e ) {
	if ( Application.instance ) {
		Application.instance.onOrientationchange( e );
	}
};

window.onkeydown = function( e ) {
	if ( Application.instance ) {
		Application.instance.onKeyDown( e );
	}
};

window.onkeyup = function( e ) {
	if ( Application.instance ) {
		Application.instance.onKeyUp( e );
	}
};

/**
 * @param {string} errorMsg
 * @param {string} url
 * @param {number} lineNumber
 */
window.onerror = function( errorMsg, url, lineNumber ) {
	// Capture uncaught errors in console
	if ( SwitJS.isMobileDevice ) {
		Application.error( errorMsg + ' File: ' + url +
						   ' Line: ' + lineNumber +
						   '  Col: ' + arguments[3] );
	}
};

/**
 * @constructor
 * @struct
 */
function Application() {

	Application.instance = this;
	Application.config = window['config'];
	Application.configDebug = window['config_debug'];

	Application.MAX_DELTA_TIME = Application.config['settings']['MAX_DELTA_TIME'];
	Application.SAFE_AREA_WIDTH = Application.config['settings']['SAFE_AREA_WIDTH'];
	Application.APP_WIDTH = Application.config['settings']['APP_WIDTH'];
	Application.APP_HEIGHT = Application.config['settings']['APP_HEIGHT'];
	Application.SOUND_PERCENT = Application.config['settings']['SOUND_PERCENT'];
	Application.LOG = Application.config['settings']['LOG'];
	Application.ASSETS_PATH = Application.config['settings']['ASSETS_PATH'];
	Application.USE_TILT = Application.config['settings']['USE_TILT'];
	Application.USE_CHEATS = false;

	Application.RENDER_MODE = Application.config['settings']['RENDER_MODE'];
	Application.CONSOLE_MODE = Application.config['settings']['CONSOLE_MODE'];
	Application.WIDE_SCREEN = Application.config['settings']['WIDE_SCREEN'];
	Application.RIGHT_TO_LEFT = Application.config['settings']['RIGHT_TO_LEFT'];

	Application.USE_ONLY_SOUNDJS = Application.config['settings']['USE_ONLY_SOUNDJS'];


	if ( Application.configDebug ) {
		Application.USE_CHEATS = Application.configDebug['settings']['USE_CHEATS'];
		Application.CHECK_STRINGS = Application.configDebug['settings']['CHECK_STRINGS'];

		if ( Application.CHECK_STRINGS ) {
			var arrayDataSize = new Array();
			for ( var objData in Application.configDebug['settings'] ) {
				if ( objData.indexOf( 'SIZE_STRINGS_TYPE_' ) !== -1 ) {
					var arrayData = Application.configDebug['settings'][objData].split( ',' );
					var sizelength = parseInt( arrayData[0], 10 );
					var percentage = parseInt( arrayData[1], 10 ) / 100;
					arrayDataSize.push( [sizelength, percentage] );
				}
			}
			arrayDataSize.sort( Application.orderArray );

			for ( var params in Application.strings ) {
				var dataString = Application.strings[params]['value'];
				var lengthText = dataString.length;
				var maxChar = 0;
				var charSing = '';
				if ( lengthText <= 0 ) {
					continue;
				}

				for ( var p = 0; p < arrayDataSize.length; p++ ) {
					if ( lengthText <= arrayDataSize[p][0] ) {
						maxChar = Math.floor( lengthText * arrayDataSize[p][1] );
						break;
					}
				}

				if ( maxChar === 0 ) {
					maxChar = Math.floor( lengthText * arrayDataSize[arrayDataSize.length - 1][1] );
				}

				for ( var k = 1; k <= Math.ceil( maxChar / 2 ); k++ ) {
					charSing += '*';
				}

				Application.strings[params]['value'] = charSing + ' ' + dataString + ' ' + charSing;
			}
		}
	}

	Cheats.enabled = Application.USE_CHEATS;

	/** @type {boolean} */
	this.updateable = true;
	/** @type {number} */
	this.lastWidth = 0;
	/** @type {number} */
	this.lastHeight = 0;

	/** @type {boolean} */
	this.isHidden = false;

	/** @type {SndManager} */
	this.soundManager = null;

	/** @type {SEffectManager} */
	this.effectManager = new SEffectManager();

	/** @type {GuiManager} */
	this.guiManager = new GuiManager();

	this.tweenManager = new TweenManager();

	for ( var files in window['SWT_BUNDLES'] ) {
		if ( Array.isArray( window['SWT_BUNDLES'][files] ) ) {
			if ( files.indexOf( '_rtl' ) > 0 ) {
				if ( !Application.RIGHT_TO_LEFT ) {
					continue;
				}
				else {
					window['SWT_BUNDLES'][files.replace( '_rtl', '' )] = window['SWT_BUNDLES'][files];
				}
			}
			if ( files.indexOf( '_ltr' ) > 0 ) {
				if ( Application.RIGHT_TO_LEFT ) {
					continue;
				}
				else {
					window['SWT_BUNDLES'][files.replace( '_ltr', '' )] = window['SWT_BUNDLES'][files];
				}
			}
		}
		if ( typeof files === 'string'  ) {
			Application.filesQuality( files );
		}
	}

	/** @type {boolean} */
	this.isMobileDevice = SwitJS.isMobileDevice;

	this.fps = 0;
	this.m_fpsFrameCounter = 0;
	this.m_fpsOldTime = 0;

	if ( window['USE_SANBOX'] ) {
		Cheats.enabled = true;
	}


	var rendererOptions = {
		'transparent'           : false,
		'antialias'             : false,
		'preserveDrawingBuffer' : false,
		'resolution'            : 1,
		'backgroundColor'       : 0x000000,
		'forceCanvas'           : ( Application.RENDER_MODE === Application.RENDER_CANVAS )
	}
	if ( SwitJS.deviceModel === 'KINDLE_7' ) {
		rendererOptions['transparent'] = true;
	}

	/** @type {PIXI.Application} */
	this.pixiApp = new PIXI.Application( Application.APP_WIDTH, Application.APP_HEIGHT, rendererOptions );

	Application.RENDER_MODE = this.pixiApp.renderer.type;

	if ( Application.RENDER_MODE === Application.RENDER_WEBGL ) {
		Application.log( 'USING WEBGL RENDERER' );
	}
	else {
		Application.log( 'USING CANVAS RENDERER' );
	}

	if ( window['USE_SANBOX'] ) {
		document.getElementById( 'contentGame' ).appendChild( this.pixiApp.renderer.view );
	}
	else {
		document.body.appendChild( this.pixiApp.renderer.view );
	}

	if ( window['USE_SANBOX_NANO'] ) {
		Layout.align = Layout.ALIGN_TOP_LEFT;
		new window['SandboxNano']();
		Application.WIDE_SCREEN = false;
	}
	else if ( window['USE_SANBOX'] ) {
		new window['SandboxGui']();
		Application.sandbox = new window['SandboxGame']();
	}

	this.pixiApp.renderer.view.setAttribute( 'id', 'MainCanvasDraw' );
	this.pixiApp.renderer.view.style.position = 'absolute';

	if ( Application.RIGHT_TO_LEFT ) {
		this.pixiApp.renderer.view.setAttribute( 'dir', 'rtl' );
	}

	this.pixiApp.renderer.plugins['interaction']['autoPreventDefault'] = this.isMobileDevice;

	/** @type {SDisplayObjectContainer} */
	this.canvas = this.addDisplayContainer();
	this.pixiApp.stage.addChild( this.canvas );

	var fixFonts = document.getElementById( 'SWT_FONTS_DIV' );
	if ( fixFonts && fixFonts.parentElement ) {
		fixFonts.parentElement.removeChild( fixFonts );
	}

	/** @type {RotateScreen} */
	this.rotateScreen = null;

	this.canvasRotateScreen = this.addDisplayContainer();
	this.pixiApp.stage.addChild( this.canvasRotateScreen );
	this.rotateScreen = new RotateScreen( this.canvasRotateScreen );
	this.onOrientationchange( null );

	this.canvasEvents = null;




	// Check if device belongs to lower range
	if ( SwitJS.isLowDevice ) {
		Application.isLowDevice = true;
	}
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		Application.isLowDevice = true;
	}

	this.guiManager.gotoScreen( GuiManager.SC_PRELOAD );

	this.registerEmptySprite();
	this.registerErrorSprite();

	/** @type {Object} */
	this.debugStats = null;

/*
	if ( window['Stats'] ) {
		this.debugStats = window['Stats']();
		this.debugStats.dom.style.position = 'absolute';
		document.body.appendChild( this.debugStats.dom );
	}
*/

	this.pixiApp.ticker.add( Application.instance.update, null, PIXI.UPDATE_PRIORITY.UTILITY );
}

//-----------------------------------------------------------------------------
/** @type {number}  */Application.MAX_DELTA_TIME = 0;
/** @type {number}  */Application.SAFE_AREA_WIDTH = 0;
/** @type {number}  */Application.APP_WIDTH = 0;
/** @type {number}  */Application.APP_HEIGHT = 0;
/** @type {number}  */Application.SOUND_PERCENT = 0;
/** @type {boolean} */Application.LOG = false;
/** @type {string}  */Application.ASSETS_PATH = "";
/** @type {boolean} */Application.USE_TILT = false;
/** @type {boolean} */Application.USE_CHEATS = false;
/** @type {boolean} */Application.CHECK_STRINGS = false;
/** @type {boolean} */Application.RIGHT_TO_LEFT = false;
/** @type {number}  */Application.RENDER_WEBGL = 1;
/** @type {number}  */Application.RENDER_CANVAS = 2;
/** @type {number}  */Application.RENDER_MODE = Application.RENDER_CANVAS;
/** @type {number}  */Application.DPI = 1;
/** @type {string}  */Application.KEY_EMPTY_SPRITE = "__emptySprite";
/** @type {string}  */Application.KEY_ERROR_SPRITE = "__errorSprite";
/** @type {Object.<string, SJsonLoader>}  */Application.jsonFiles = {};
/** @type {Object}  */Application.soundGroups = {};

/** @type {Application} */
Application.instance = null;

/** @type {Object} */
Application.strings = null;
/** @type {Object} */
Application.config = null;
/** @type {Object} */
Application.sandbox = null;
/** @type {boolean} */
Application.isLowDevice = false;

/**
 * Inherit the prototype methods from one constructor into another.
 * extended classes have the property [parent] for calling parent methods.
 * @param {Function} childConstructor Child class constructor.
 * @param {Function} parentConstructor Parent class constructor.
 */
Application.subclass = function( childConstructor, parentConstructor ) {
	/**
	 * Using a polyfill because Object.create could be unsupported.
	 * @constructor
	 */
	function temporalConstructor() { };
	temporalConstructor.prototype = parentConstructor.prototype;
	childConstructor.prototype = new temporalConstructor();
	/** @override */
	childConstructor.prototype.constructor = childConstructor;
};

Application.orderArray = function( param1, param2 ) {
	if ( param1[0] > param2[0] ) {
		return 1;
	}
	if ( param1[0] < param2[0] ) {
		return -1;
	}
	return 0;
};

/** @return {boolean} */
Application.validateOrientation = function() {
	return ( window.innerWidth >= window.innerHeight );
};

Application.onOffline = function() {
};

Application.onWrapperSuspended = function() {
	Application.log( 'onWrapperSuspended' );
	if ( Application.instance ) {
		Application.instance.onLostFocus();
	}
};

Application.onWrapperSuspending = function() {
	Application.log( 'onWrapperSuspending' );
	if ( Application.instance ) {
		Application.instance.onLostFocus();
	}
};

Application.onWrapperActivated = function() {
	Application.log( 'onWrapperActivated' );
	if ( Application.instance ) {
		Application.instance.onGotFocus();
	}
};

Application.prototype.fullScreen = function() {
	if ( !this.isMobileDevice ) {
		return;
	}
	var element = document.documentElement || this.pixiApp.renderer.view;
	var funct = element.requestFullScreen ||
				element.webkitRequestFullScreen ||
				element.mozRequestFullScreen ||
				element.msRequestFullscreen;
	if ( funct ) {
		funct.call( element );
	}
};

//-----------------------------------------------------------------------------
// EVENTS
//-----------------------------------------------------------------------------
Application.prototype.onTilt = function( e ) {
	if ( Application.instance.guiManager ) {
		Application.instance.guiManager.onTilt( e );
	}
};

Application.prototype.onKeyDown = function( e ) {
	if ( this.guiManager ) {
		this.guiManager.onKeyDown( e.keyCode );
	}
};

Application.prototype.onKeyUp = function( e ) {
	if ( this.guiManager ) {
		this.guiManager.onKeyUp( e.keyCode );
	}
};

Application.prototype.onLoadingError = function( e ) {
	Application.error( 'onLoadingError: ' + e );
};

Application.prototype.onSoundsLoaded = function() {
	Application.info( 'onSoundsLoaded' );

	if ( SndManager.instance.callbackBug ) {
		Application.instance.guiManager.gotoScreen( GuiManager.SC_MAIN_MENU );
	}
};

Application.prototype.onErrorSndManagerIE = function() {
	Application.info( 'onErrorSndManagerIE' );

	var soundGroupToLoad = /** @type {SndManagerIE} */( Application.instance.soundManager ).soundsToLoad;

	Application.instance.soundManager = new SndManagerWeb( Application.instance.onSoundsLoaded );

	if ( soundGroupToLoad ) {
		Application.instance.soundManager.loadSounds( soundGroupToLoad );
	}
};

Application.prototype.onLoaderReady = function() {
	Application.info( 'onLoaderReady' );

	if ( window['USE_SANBOX_NANO'] ) {
		Application.instance.guiManager.gotoScreen( GuiManager.SC_SANBOX_NANO_VIEW );
		return;
	}

	Application.instance.onResize( window.innerWidth, window.innerHeight );

	var isIE = SwitJS.isIE;
	if ( isIE && !Application.USE_ONLY_SOUNDJS ) {
		Application.instance.soundManager = new SndManagerIE( Application.instance.onSoundsLoaded );
	}
	else {
		Application.instance.soundManager = new SndManagerWeb( Application.instance.onSoundsLoaded );
	}

	Application.instance.guiManager.gotoScreen( GuiManager.SC_MAIN_MENU );
};

Application.prototype.onResize = function( width, height ) {
	this.lastWidth = width;
	this.lastHeight = height;
	Layout.onResize( width, height );
	if ( this.rotateScreen ) {
		this.rotateScreen.onResize();
	}
	this.onOrientationchange( null );

	if ( this.guiManager ) {
		this.guiManager.onResize( null );
	}
};

Application.prototype.onOrientationchange = function( e ) {
    if ( SwitJS.isMobileDevice ) {

		var lock = ( window.innerHeight > window.innerWidth ) ? true : false;

		if ( lock ) {
			if ( this.rotateScreen ) {
				this.rotateScreen.show();
			}
			this.onLostFocus();
		}
		else {
			if ( this.rotateScreen ) {
				this.rotateScreen.hide();
			}
			this.onGotFocus();
		}
	}
};

Application.prototype.onLostFocus = function() {
	Application.info( '-- ON LOST FOCUS --' );

	this.updateable = false;
	try {
		if ( this.soundManager && !this.soundManager.isMuted() ) {
			this.soundManager.pauseAll();
		}
	}
	catch ( e ) {
		Application.error( 'onLostFocus: ' + e );
	}

	if ( this.guiManager ) {
		this.guiManager.onAppLostFocus();
	}
};

Application.prototype.onGotFocus = function() {
	if ( !Application.validateOrientation() ) {
		Application.info( 'ON GOT FOCUS - Invalid orientation.. Do not get focus.' );
		return;
	}
	if ( this.isHidden ) {
		Application.info( 'ON GOT FOCUS - The window is hidden.. Do not get focus.' );
		return;
	}

	Application.info( '-- ON GOT FOCUS --' );

	this.updateable = true;
	try {
		if ( this.soundManager && !this.soundManager.isMuted() ) {
			this.soundManager.resumeAll();
		}
	}
	catch ( e ) {
		Application.error( 'onGotFocus: ' + e );
	}

	if ( this.guiManager ) {
		this.guiManager.onAppGotFocus();
	}
};

//-----------------------------------------------------------------------------
// MAIN LOOP
//-----------------------------------------------------------------------------
Application.prototype.update = function() {
	/** @type {Application} */
	var me = Application.instance;

/*
	if ( me.debugStats ) {
		me.debugStats['begin']();
	}
*/

	if ( me.updateable ) {
		me.guiManager.update( me.pixiApp.ticker.elapsedMS );
		me.effectManager.update( me.pixiApp.ticker.elapsedMS );
		Tween2.tick( me.pixiApp.ticker.elapsedMS, false );
		me.tweenManager.update();
	}
	else if ( me.rotateScreen && me.rotateScreen.animate ) {
		me.tweenManager.update();
	}

	if ( Application.WIDE_SCREEN ) {
		if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
			me.getContext().setTransform( Layout.scale * Global.baseScale, 0, 0, Layout.scale * Global.baseScale,
				Global.offsetZoomX * Layout.scale, Global.offsetZoomY * Layout.scale );
		}
	}
	else {
		if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
			me.getContext().setTransform( Global.baseScale, 0, 0, Global.baseScale,
										  Global.offsetZoomX, Global.offsetZoomY );
		}
	}

	me.guiManager.onDebugDraw( me.getContext() );
/*
	if ( Application.m_traceCallback ) {
		Application.printTraces();
	}
*/

	if ( ( window.innerWidth !== me.lastWidth ) || ( window.innerHeight !== me.lastHeight ) ) {
		me.onResize( window.innerWidth, window.innerHeight );
		me.hideAddressBar();
	}

/*
	if ( me.debugStats ) {
		me.debugStats['end']();
	}
*/
};

//-----------------------------------------------------------------------------
// HELPER FUNCTIONS
//-----------------------------------------------------------------------------
Application.prototype.hideAddressBar = function() {
    if ( Application.instance.isMobileDevice ) {
		setTimeout( function() {
			window.scrollTo( 0, 1 );
		}, 20 );

		setTimeout( function() {
			window.scrollTo( 0, 0 );
		}, 50 );
	}
};

Application.prototype.getCanvas = function() {
	return this.pixiApp.renderer.view;
};

Application.prototype.getContext = function() {
	if ( Application.RENDER_MODE === Application.RENDER_CANVAS ) {
		return this.pixiApp.renderer.context;
	}
	return this.pixiApp.renderer['gl'];
};

Application.prototype.captureScreen = function() {
	var canvas = Application.instance.getCanvas();
	var dataUrl = canvas.toDataURL();
	return dataUrl;
};

/** @return {SDisplayObjectContainer} */
Application.prototype.addDisplayContainer = function() {
	return new SDisplayObjectContainer();
};

/**
 * @param {string} name
 * @return {SSprite}
 */
Application.prototype.getSprite = function( name ) {
	if ( window['PIXI']['utils']['TextureCache'][name] != null ) {
		return ( new SSprite( name ) );
	}
	Application.warn( 'getSprite: [' + name + '] no found' );
	return this.getErrorSprite();
};

/**
 * @param {string} name
 * @return {Animation}
 */
Application.prototype.getAnimation = function( name ) {
	if ( this.existsAnimation( name ) ) {
		return new Animation( name );
	}

	Application.error( 'getAnimation: [' + name + '] no found' );

	return Animation.createFromSprite( this.getErrorSprite(), 'ErrorClip' );
};

/** @return {Animation} */
Application.prototype.getEmtpyAnimation = function() {
	return Animation.createFromSprite( this.getEmptySprite(), 'EmtpyClip' );
}

/**
 * @param {string} id
 * @return {boolean}
 */
Application.prototype.existsAnimation = function( id ) {
	return ( ( window['globalAnimations'][id] != null )
			 && ( window['globalAnimations'][id]['atlas'] != null ) );
};

/**
 * @public
 * @param {string} url
 * @return {SSprite}
 */
Application.prototype.getSpriteFromUrl = function( url ) {
	return new SSprite( url,
						false,
						PIXI['settings']['SCALE_MODE'] );
};

/**
 * @param {string} name
 * @return {SSprite|Animation}
 */
Application.prototype.getClip = function( name ) {

	if ( window['PIXI']['utils']['TextureCache'][name] && window['globalAnimations'][name] ) {
		Application.warn( '::: NAME CONFLICT ::: [' +  name + '] is used in Animations and Sprites' );
	}

	if ( window['PIXI']['utils']['TextureCache'][name] ) {
		return new SSprite( name );
	}
	if ( window['globalAnimations'][name] ) {
		return new Animation( name );
	}

	Application.warn( 'getClip :: clip or sprite with name [' + name + '] no found' );
	return this.getErrorSprite();
};

/**
 * @param {string} filename Name of image without path
 * @return {SSprite}
 */
Application.prototype.getLocalizedImage = function( filename ) {
	if ( SwitJS.debug ) {
		var localizedImages = window['SWT_BUNDLES']['localized'];
		if ( localizedImages ) {
			var localizedPath = window['SWT_BUNDLES']['LOCALIZED_PATH'];
			for ( var k = 0; k < localizedImages.length; k++ ) {
				if ( localizedImages[k] === localizedPath + filename ) {
					return ( new SSprite( localizedImages[k],
										  false, PIXI['settings']['SCALE_MODE'] ) );
				}
			}
			return null;
		}
		Application.fatal( 'Unregistered localized image: ' + filename );
	}
	return ( new SSprite( window['SWT_BUNDLES']['LOCALIZED_PATH'] + filename,
		false, PIXI['settings']['SCALE_MODE'] ) );
};

/**
 * Change SD Assets and DPI
 */
Application.filesQuality = function( files ) {
	if ( SwitJS.useAssetsSD ) {
		for ( var i = 0; i < window['SWT_BUNDLES'][files].length; i++ ) {
			if ( window['Assets']['FILES_SD'][window['SWT_BUNDLES'][files][i]] ) {
				Application.DPI = 2;
				window['SWT_BUNDLES'][files][i] = window['Assets']['FILES_SD'][window['SWT_BUNDLES'][files][i]];
				Application.log( 'FILES SD :: ' + window['SWT_BUNDLES'][files][i] );
			}
		}
	}
};

//-----------------------------------------------------------------------------
// AUDIO
//-----------------------------------------------------------------------------
/**
 * @param {number} group
 * @return {Object}
 */
Application.prototype.getSoundGroup = function( group ) {
	var sounds = Application.config['sounds'].filter( function( element ) {
		return ( Common.sparseInt( element['group'], 0 ) === group );
	} );

	return ( sounds.length > 0 ) ? { 'group': group, 'sounds': sounds } : null;
};

/** @param {number} group */
Application.prototype.unloadSoundGroup = function( group ) {
	if ( !Application.soundGroups[group] ) {
		return;
	}

	var sounds = Application.config['sounds'].filter( function( element ) {
		return Common.sparseInt( element['group'], 0 ) === group;
	} );
	this.soundManager.removeSounds( sounds );

	delete Application.soundGroups[group];
};

/** @param {Array.<number>} groups */
Application.prototype.unloadSoundsFromList = function( groups ) {
	if ( ( groups != null ) && ( groups.length > 0 ) ) {
		for ( var k = groups.length - 1; k >= 0; --k ) {
			this.unloadSoundGroup( groups[k] );
		}
	}
};

/** @param {string} id */
Application.prototype.playSound = function( id ) {
	return this.soundManager.play( id );
};

/** @param {string} id */
Application.prototype.stopSound = function( id ) {
	this.soundManager.stop( id );
};

Application.prototype.stopAllSounds = function() {
	if ( this.isSoundOn() ) {
		this.soundManager.stopAllSounds();
	}
};

Application.prototype.stopAllMusics = function() {
	this.soundManager.stopAllMusics();
};

Application.prototype.toggleMute = function() {
	this.soundManager.toggleMute();
};

/**
 * @param {string} id
 * @return {boolean}
 */
Application.prototype.isPlayingSound = function( id ) {
	return this.soundManager.isPlayingSound( id );
};

/**
 * @param {string} id
 * @param {number} vol
 */
Application.prototype.setVolumeById = function( id, vol ) {
	this.soundManager.setVolumeById( id, vol );
};

/** @return {boolean} */
Application.prototype.isSoundOn = function() {
	return !this.soundManager.isMuted();
};

/** @param {string} id */
Application.prototype.resumeSound = function( id ) {
	this.soundManager.resumeSound( id );
};

Application.prototype.pauseAllSounds = function() {
	this.soundManager.pauseAll();
};

Application.prototype.resumeAllSounds = function() {
	this.soundManager.resumeAll();
};

//-----------------------------------------------------------------------------
// LOGGING
//-----------------------------------------------------------------------------
Application.console = window['console'];

Application.log = function( message ) {
	if ( Application.LOG ) {
		if ( Application.console && Application.console['log'] ) {//
			Application.console['log']( '[LOG] ' + message );
		}
/*
		if ( window['Debug'] ) {
			window['Debug'].writeln( '[LOG] ' + message );
		}
*/
	}
};

Application.info = function( message ) {
	if ( Application.console && Application.console['info'] ) {
		Application.console['info']( '[INFO] ' + message );
	}
/*
	if ( window['Debug'] ) {
		window['Debug'].writeln( '[INFO] ' + message );
	}
*/
};

Application.warn = function( message ) {
	if ( Application.console && Application.console['warn'] ) {
		Application.console['warn']( '[WARN] ' + message );
	}
/*
	if ( window['Debug'] ) {
		window['Debug'].writeln( '[WARN] ' + message );
	}
*/
};

Application.error = function( message ) {
	if ( Application.console && Application.console['error'] ) {
		Application.console['error']( '[ERROR] ' + message );
	}
/*
	if ( window['Debug'] ) {
		window['Debug'].writeln( '[ERROR] ' + message );
	}
*/
};

Application.errorIf = function( condition, message ) {
	if ( !condition ) {
		Application.error( message );
	}
};

Application.fatal = function( message ) {
	Application.error( '[FATAL] ' + message );
};

Application.assert = function( condition, message ) {
/*
	if ( !condition ) {
		Application.fatal( message );
	}
*/
};

Application.prototype.addEmptySprite = function() {
	return this.getClip( Application.KEY_EMPTY_SPRITE );
};

/** @return {SSprite} */
Application.prototype.getEmptySprite = function() {
	return this.getSpriteFromUrl( 'media/images/ui_images/common/empty_img.png' );
};

/** @return {SSprite} */
Application.prototype.getErrorSprite = function() {
	return this.getSpriteFromUrl( 'media/images/ui_images/common/error_img.png' );
};

Application.prototype.registerEmptySprite = function() {
	var img = new Image();
	img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgAQMAAABJtOi3AAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAABVJREFUeF7NwIEAAAAAgKD9qdeocAMAoAABm3DkcAAAAABJRU5ErkJggg==";
	window['PIXI']['utils']['TextureCache'][Application.KEY_EMPTY_SPRITE] = new window['PIXI']['Texture']( new window['PIXI']['BaseTexture']( img ) );
};

Application.prototype.registerErrorSprite = function() {
	var img = new Image();
	img.src = "data:image/png;base64,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";
	window['PIXI']['utils']['TextureCache'][Application.KEY_ERROR_SPRITE] = new window['PIXI']['Texture']( new window['PIXI']['BaseTexture']( img ) );
};

//-----------------------------------------------------------------------------
/**
 * @param {string} action String that describes what game action is taking place
 * @param {string=} message Only needs to be passed if there is a detail associated
 * with the action.
 */
Application.externalTrack = function( action, message ) {
	var args = { 'action': action };
	if ( typeof message !== 'undefined' ) {
		args['message'] = message;
		Application.warn( 'TRACK: [' + action + '] (' + message + ')' );
	}
	else {
		Application.warn( 'TRACK: [' + action + ']' );
	}
	if ( window['DIBIGameTracking'] ) {
		try {
			window['DIBIGameTracking']( args );
		} catch ( e ) {
			Application.error( 'DIBIGameTracking: ' + e );
		}
	}
};

//-----------------------------------------------------------------------------
/**
 * @param {string} key
 * @param {string} message
 * @param {string=} caption
 */
/*
Application.trace = function( key, message, caption ) {
	Application.m_traces[key] = {
		'message': message,
		'caption': ( typeof caption === 'undefined' ) ? key : caption
	};
};

Application.registerTrace = function( callback ) {
	Application.m_traceCallback = callback;
};

Application.printTraces = function() {
	var tracesPrint = '';
	for ( var key in Application.m_traces ) {
		if ( Application.m_traces.hasOwnProperty( key ) ) {
			tracesPrint += Application.m_traces[key]['caption'] + ': '
						   + Application.m_traces[key]['message'] + "\n";
		}
	}
	Application.m_traces = {};
	Application.m_traceCallback( tracesPrint );
};

Application.m_traces = {};
Application.m_traceCallback = null;
*/
window['abcdm']['abc']['com']['GameApis']['apiLoadComplete'] = function() {
    Application.info( "GameApis.apiLoadComplete" );
}

window['abcdm']['abc']['com']['GameApis']['apiLoadFailed'] = function () {
    Application.error( "GameApis.apiLoadFailed" );
}

window['abcdm']['abc']['com']['GameApis']['onClose'] = function () {
    Application.info( "GameApis.onClose" );

    window['abcdm']['abc']['com']['GameApis']['gameCloseComplete']();
}

window['abcdm']['abc']['com']['GameApis']['onSuspended'] = function () {
    Application.log( "GameApis.onWrapperSuspended" );
    Application.onWrapperSuspended();
};

window['abcdm']['abc']['com']['GameApis']['onActivated'] = function () {
    Application.log( 'GameApis.onWrapperActivated' );
    Application.onWrapperActivated();
};


