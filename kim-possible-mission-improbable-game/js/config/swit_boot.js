//==============================================================================
// swit_boot.js
// Copyright (c) 2019, Bamtang Games. All Rights Reserved.
//------------------------------------------------------------------------------

function SwitJS() { }

SwitJS.BOOT_FILE = "js/game.js";
SwitJS.isIE = false;
SwitJS.browserVersion = 0;
SwitJS.platformVersion = 0;
SwitJS.isLowDevice = false;
SwitJS.useAssetsSD = false;
SwitJS.isSupported = false;
SwitJS.debug = false;
SwitJS.isMobileDevice = false;
SwitJS.isPhone = false;
SwitJS.iDevice = false;
SwitJS.deviceModel = '';

SwitJS.include = function( url ) {
    document.write( '<script type="text/javascript" language="javascript" src="'
                    + url + '"></script>' );
};

SwitJS.test = function() {
    if ( ( typeof window["SwitEntryFiles"] === 'undefined' )
               || ( window['SWT_ADVANCED'] === true ) ) {
        SwitJS.include( SwitJS.BOOT_FILE );
    }
    else {
        var files = window["SwitEntryFiles"];
        for ( var k = 0; k < files.length; k++ ) {
            SwitJS.include( files[k] );
        }
        SwitJS.debug = true;
    }
};

SwitJS.start = function() {
    SwitJS.include( SwitJS.BOOT_FILE );
};

SwitJS.setEntry = function() {

    SwitJS.detectBrowser( navigator );
    var supported = SwitJS.isMobileDevice ? 'supported' : SwitJS.isBrowserSupported();

    if ( supported !== 'supported' ) {
        SwitJS.isSupported = false;
        // Browser unsupported
        window.location = 'unsupported.html' + window.location.search;
    }
    else {
        SwitJS.isSupported = true;
    }
};

SwitJS.detectBrowser = function( navigator ) {

    SwitJS.infoBrowser = {};
    SwitJS.infoBrowser.platformType = navigator.platform;
    SwitJS.infoBrowser.browserName = navigator.appName;
    SwitJS.browserVersion = parseFloat( navigator.appVersion );

    // Detect platform
    if ( navigator.platform.indexOf( 'iPhone' ) != -1 ) {
        SwitJS.iDevice = true;
        SwitJS.isPhone = true;
        SwitJS.isMobileDevice = true;
        SwitJS.infoBrowser.platformType = 'iPhone';
        if ( /OS (\d+\_\d+)/.test( navigator.userAgent ) ) {
            var ver = RegExp.$1;
            ver = ver.replace( '_', '.' );
            SwitJS.platformVersion = parseFloat( ver );
        }
    }
    else if ( navigator.platform.indexOf( 'iPod' ) != -1 ) {
        SwitJS.iDevice = true;
        SwitJS.isPhone = true;
        SwitJS.isMobileDevice = true;
        SwitJS.infoBrowser.platformType = 'iPod';
        SwitJS.isLowDevice = true;
        SwitJS.useAssetsSD = true;
        if ( /OS (\d+\_\d+)/.test( navigator.userAgent ) ) {
            var ver = RegExp.$1;
            ver = ver.replace( '_', '.' );
            SwitJS.platformVersion = parseFloat( ver );
        }
    }
    else if ( navigator.platform.indexOf( 'iPad' ) != -1 ) {
        SwitJS.iDevice = true;
        SwitJS.isMobileDevice = true;
        SwitJS.infoBrowser.platformType = 'iPad';
        if ( /OS (\d+\_\d+)/.test( navigator.userAgent ) ) {
            var ver = RegExp.$1;
            ver = ver.replace( '_', '.' );
            SwitJS.platformVersion = parseFloat( ver );
        }
    }
    else if ( navigator.userAgent.indexOf( 'Kindle' ) != -1 ) {
        var fire = navigator.userAgent.indexOf( 'Kindle Fire' ) != -1;
        SwitJS.isMobileDevice = fire;
        SwitJS.infoBrowser.platformType = fire ? 'Kindle Fire' : 'Kindle';
        if ( /Android (\d+\.\d+)/.test( navigator.userAgent ) ) {
            SwitJS.platformVersion = parseFloat( RegExp.$1 );
        }
    }
    else if ( navigator.userAgent.indexOf( 'Android' ) != -1 ) {
        SwitJS.isMobileDevice = true;
        SwitJS.infoBrowser.platformType = 'Android';
        if ( /Android (\d+\.\d+)/.test( navigator.userAgent ) ) {
            SwitJS.platformVersion = parseFloat( RegExp.$1 );
        }
    }
    else if ( navigator.userAgent.indexOf( 'IEMobile' ) != -1 ) {
        SwitJS.isMobileDevice = true;
        SwitJS.infoBrowser.platformType = 'IEMobile';
        if ( /IEMobile\/(\d+\.\d+)/.test( navigator.userAgent ) ) {
            SwitJS.platformVersion = parseFloat( RegExp.$1 );
        }
    }
    else if ( navigator.platform.indexOf( 'Win' ) != -1 ) {
        SwitJS.infoBrowser.platformType = 'Win';
    }
    else if ( navigator.platform.indexOf( 'Mac' ) != -1 ) {
        SwitJS.infoBrowser.platformType = 'Mac';
        if ( /OS X (\d+\_\d+)/.test( navigator.userAgent ) ) {
            var ver = RegExp.$1;
            ver = ver.replace( '_', '.' );
            SwitJS.platformVersion = parseFloat( ver );
        }
    }
    else if ( navigator.platform.indexOf( 'Linux' ) != -1 ) {
        SwitJS.infoBrowser.platformType = 'Linux';
    }

    // Detect browser
    if ( navigator.userAgent.indexOf( 'Silk' ) != -1 ) {
        SwitJS.infoBrowser.browserName = 'Silk';
        SwitJS.isMobileDevice = true;
        SwitJS.useAssetsSD = true;
        SwitJS.isLowDevice = true;
        if ( navigator.userAgent.indexOf( 'KFAUWI' ) != -1 ) {
            SwitJS.deviceModel = 'KINDLE_7';
        }
        if ( /Silk\/(\d+\.\d+)/.test( navigator.userAgent ) ) {
            SwitJS.browserVersion = parseFloat( RegExp.$1 );
        }
    }
    else if ( navigator.userAgent.indexOf( 'Firefox' ) != -1 ) {
        SwitJS.infoBrowser.browserName = 'Firefox';
        if ( /Firefox[\/\s](\d+\.\d+)/.test( navigator.userAgent ) )
            SwitJS.browserVersion = parseFloat( RegExp.$1 );
    }
    else if ( navigator.userAgent.indexOf( 'MSIE' ) != -1 ) {
        // Code to detect IE10 multi-touch devices
        SwitJS.infoBrowser.msTouchDevice = navigator.msMaxTouchPoints > 0;
        SwitJS.infoBrowser.browserName = 'MSIE';
        SwitJS.isIE = true;
        if ( /MSIE (\d+\.\d+);/.test( navigator.userAgent ) )
            SwitJS.browserVersion = parseFloat( RegExp.$1 );
    }
    else if ( navigator.userAgent.indexOf( 'Opera' ) != -1 ) {
        SwitJS.infoBrowser.browserName = 'Opera';
        if ( /Opera[\/\s](\d+\.\d+)/.test( navigator.userAgent ) )
            SwitJS.browserVersion = parseFloat( RegExp.$1 );
    }
    else if ( navigator.userAgent.indexOf( 'Chrome' ) != -1 ) {
        SwitJS.infoBrowser.browserName = 'Chrome';
        if ( /Chrome[\/\s](\d+\.\d+)/.test( navigator.userAgent ) )
            SwitJS.browserVersion = parseFloat( RegExp.$1 );
    }
    else if ( navigator.userAgent.indexOf( 'CriOS' ) != -1 ) {
        SwitJS.infoBrowser.browserName = 'Chrome';
        if ( /CriOS[\/\s](\d+\.\d+)/.test( navigator.userAgent ) )
            SwitJS.browserVersion = parseFloat( RegExp.$1 );
    }
    else if ( navigator.userAgent.indexOf( 'Safari' ) != -1 ) {
        SwitJS.infoBrowser.browserName = 'Safari';
        if ( /Version[\/\s](\d+\.\d+)/.test( navigator.userAgent ) )
            SwitJS.browserVersion = parseFloat( RegExp.$1 );
    }
    else {
        if ( SwitJS.iDevice ) {
            SwitJS.infoBrowser.browserName = 'Safari';
        }
        else if ( navigator.appName == 'Netscape' ) {
            // We need to check if its IE11
            var rv = 0;
            var re = new RegExp( "Trident/.*rv:([0-9]{1,}[\.0-9]{0,})" );
            if ( re.exec( navigator.userAgent ) != null ) {
                rv = parseFloat( RegExp.$1 );
            }
            if ( rv >= 11 ) {
                SwitJS.infoBrowser.msTouchDevice = navigator.msMaxTouchPoints > 0;
                SwitJS.infoBrowser.browserName = 'MSIE';
                SwitJS.isIE = true;
                SwitJS.browserVersion = rv;
            }
        }
    }

    if ( navigator.userAgent.indexOf( 'WebKit' ) != -1 ) {
        SwitJS.infoBrowser.browserType = 'WebKit';
    }
    else {
        SwitJS.infoBrowser.browserType = SwitJS.infoBrowser.browserName;
    }

    // Detect older iOS devices (iPhone 4S and lower)
    if ( SwitJS.iDevice && ( screen.width <= 480 && screen.height <= 480 ) ) {
        SwitJS.isLowDevice = true;
        SwitJS.useAssetsSD = true;
    }
    // Detect iPad 2 as lower device
    if ( ( SwitJS.infoBrowser.platformType === 'iPad' ) && ( window.devicePixelRatio < 2 ) ) {
        SwitJS.isLowDevice = true;
        SwitJS.useAssetsSD = true;
    }
    // Detect older android devices as lower devices
    if ( ( SwitJS.infoBrowser.platformType === 'Android' ) && ( SwitJS.platformVersion < 4.3 ) ) {
        SwitJS.isLowDevice = true;
        SwitJS.useAssetsSD = true;
    }
};

SwitJS.isBrowserSupported = function() {

    // Supported browsers come from settings.
    var config = window["config"];

    for ( var i = 0; i < config.browserSettings.length; i++ ) {
        var minBrowser = config.browserSettings[i];
        if ( ( !minBrowser.browserType || SwitJS.infoBrowser.browserName == minBrowser.browserType ) &&
            ( !minBrowser.platformType || SwitJS.infoBrowser.platformType == minBrowser.platformType ) ) {
            if ( minBrowser.minVersion < 0 ) {
                return 'unsupported';
            }
            if ( SwitJS.browserVersion < minBrowser.minVersion ) {
                return 'old';
            }
            return 'supported';
        }
    }
    return 'unsupported';
};

document.oncontextmenu = function( e ) {
    e = e || window.event;
    if ( e.preventDefault )
        e.preventDefault();
    else
        return false;
};

document.ontouchmove = function ontouchmove( e ) {
    e = e || window.event;
    e.preventDefault();
};

gameStart = function() {
    switOnLoad();
};

SwitJS.setEntry();
