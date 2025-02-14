/*! CocoonJSExtensions - v2.5.0 - 2017-09-19 www.ludei.com */
(function() {
    if (typeof window.CocoonJS === 'undefined' || window.CocoonJS === null) throw ("The CocoonJS object must exist and be valid before adding more functionalities to an extension.");
    if (typeof window.CocoonJS.App === 'undefined' || window.CocoonJS.App === null) throw ("The CocoonJS.App object must exist and be valid before adding more functionalities to it.");

    if (navigator.isCocoonJS && (typeof window.ext !== 'undefined') && (typeof window.ext.IDTK_APP !== 'undefined'))
        window.ext.IDTK_APP.makeCall("setMaxMemory", 0);

    /**
     * This namespace represents all the basic functionalities available in the CocoonJS extension API.
     * @namespace
     */
    CocoonJS.App = CocoonJS.App ? CocoonJS.App : {};

    /**
     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.App.onLoadInTheWebViewSucceed} event calls.
     * @name OnLoadInTheWebViewSucceedListener
     * @function
     * @static
     * @memberOf CocoonJS.App
     * @param {string} pageURL The URL of the page that had been loaded in the webview.
     */
    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the WebView load has completed successfully.
     * The callback function's documentation is represented by {@link CocoonJS.App.OnLoadInTheWebViewSucceedListener}
     * @event
     * @static
     * @memberOf CocoonJS.App
     * @param {string} pageURL A string that represents the page URL loaded.
     */
    CocoonJS.App.onLoadInTheWebViewSucceed = new CocoonJS.EventHandler("IDTK_APP", "App", "forwardpageload");

    /**
     * FOR DOCUMENTATION PURPOSE ONLY! The documentation of the function callback for the {@link CocoonJS.App.onLoadInTheWebViewFailed} event calls.
     * @name OnLoadInTheWebViewFailedListener
     * @function
     * @static
     * @memberOf CocoonJS.App
     * @param {string} pageURL The URL of the page that had been loaded in the webview.
     */
    /**
     * This {@link CocoonJS.EventHandler} object allows listening to events called when the WebView load fails.
     * The callback function's documentation is represented by {@link CocoonJS.App.OnLoadInTheWebViewFailedListener}
     * @event
     * @static
     * @memberOf CocoonJS.App
     */
    CocoonJS.App.onLoadInTheWebViewFailed = new CocoonJS.EventHandler("IDTK_APP", "App", "forwardpagefail");

    function checkEmulatedWebViewReady() {
        var emulatedWB = CocoonJS.App.EmulatedWebView;
        if (emulatedWB) {
            return; //ready
        }

        emulatedWB = document.createElement('div');
        emulatedWB.setAttribute('id', 'CocoonJS_App_ForCocoonJS_WebViewDiv');
        emulatedWB.style.width = 0;
        emulatedWB.style.height = 0;
        emulatedWB.style.position = "absolute";
        emulatedWB.style.left = 0;
        emulatedWB.style.top = 0;
        emulatedWB.style.backgroundColor = 'transparent';
        emulatedWB.style.border = "0px solid #000";

        var frame = document.createElement("IFRAME");
        frame.setAttribute('id', 'CocoonJS_App_ForCocoonJS_WebViewIFrame');
        frame.setAttribute('name', 'CocoonJS_App_ForCocoonJS_WebViewIFrame');
        frame.style.width = 0;
        frame.style.height = 0;
        frame.frameBorder = 0;
        frame.allowtransparency = true;

        emulatedWB.appendChild(frame);
        CocoonJS.App.EmulatedWebView = emulatedWB;
        CocoonJS.App.EmulatedWebViewIFrame = frame;

        if (!document.body) {
            document.body = document.createElement("body");
        }
        document.body.appendChild(CocoonJS.App.EmulatedWebView);
    }

    /**
     * Pauses the CocoonJS JavaScript execution loop.
     * @function
     * @augments CocoonJS.App
     */
    CocoonJS.App.pause = function() {
        if (CocoonJS.App.isNativeExtensionObjectAvailable()) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "pause", arguments);
        }
    };

    /**
     * Resumes the CocoonJS JavaScript execution loop.
     * @static
     * @function
     */
    CocoonJS.App.resume = function() {
        if (CocoonJS.App.isNativeExtensionObjectAvailable()) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "resume", arguments);
        }
    };

    /**
     * Loads a resource in the WebView environment from the CocoonJS environment.
     * @function
     * @param {string} path The path to the resource. It can be a remote URL or a path to a local file.
     * @param {CocoonJS.App.StorageType} [storageType] An optional parameter to specify at which storage in the device the file path is stored. By default, APP_STORAGE is used.
     * @see CocoonJS.App.load
     * @see CocoonJS.App.onLoadInTheWebViewSucceed
     * @see CocoonJS.App.onLoadInTheWebViewFailed
     */
    CocoonJS.App.loadInTheWebView = function(path, storageType) {
        if (navigator.isCocoonJS && CocoonJS.App.isNativeExtensionObjectAvailable()) {
            CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "loadInTheWebView", arguments)
        } else {
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(event) {
                if (xhr.readyState === 4) {
                    if ((xhr.status >= 200 && xhr.status <= 299) || xhr.status === 0) {

                        checkEmulatedWebViewReady();
                        var callback = function(event) {
                            CocoonJS.App.onLoadInTheWebViewSucceed.notifyEventListeners(path);
                            CocoonJS.App.EmulatedWebViewIFrame.removeEventListener("load", callback);
                        };

                        CocoonJS.App.EmulatedWebViewIFrame.addEventListener(
                            "load",
                            callback
                        );
                        CocoonJS.App.EmulatedWebViewIFrame.contentWindow.location.href = path;
                    } else {
                        this.onreadystatechange = null;
                        CocoonJS.App.onLoadInTheWebViewFailed.notifyEventListeners(path);
                    }
                }
            };
            xhr.open("GET", path, true);
            xhr.send();
        }
    };

    /**
     * Reloads the last loaded path in the WebView context.
     * @function
     */
    CocoonJS.App.reloadWebView = function() {
        if (CocoonJS.App.isNativeExtensionObjectAvailable() && navigator.isCocoonJS) {
            CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "reloadWebView", arguments);
        } else {
            checkEmulatedWebViewReady();
            CocoonJS.App.EmulatedWebViewIFrame.contentWindow.location.reload();
        }
    };

    /**
     * Shows the webview.
     * @function
     * @param {int} x The top lef x coordinate of the rectangle where the webview will be shown.
     * @param {int} y The top lef y coordinate of the rectangle where the webview will be shown.
     * @param {width} y The width of the rectangle where the webview will be shown.
     * @param {height} y The height of the rectangle where the webview will be shown.
     */
    CocoonJS.App.showTheWebView = function(x, y, width, height) {
        if (CocoonJS.App.isNativeExtensionObjectAvailable() && navigator.isCocoonJS) {
            CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "showTheWebView", arguments)
        } else {
            checkEmulatedWebViewReady();
            CocoonJS.App.EmulatedWebViewIFrame.style.width = (width ? width / window.devicePixelRatio : window.innerWidth) + 'px';
            CocoonJS.App.EmulatedWebViewIFrame.style.height = (height ? height / window.devicePixelRatio : window.innerHeight) + 'px';
            CocoonJS.App.EmulatedWebView.style.left = (x ? x : 0) + 'px';
            CocoonJS.App.EmulatedWebView.style.top = (y ? y : 0) + 'px';
            CocoonJS.App.EmulatedWebView.style.width = (width ? width / window.devicePixelRatio : window.innerWidth) + 'px';
            CocoonJS.App.EmulatedWebView.style.height = (height ? height / window.devicePixelRatio : window.innerHeight) + 'px';
            CocoonJS.App.EmulatedWebView.style.display = "block";

            console.log(CocoonJS.App.EmulatedWebViewIFrame.style.cssText);
        }
    };

    /**
     * Hides the webview.
     * @function
     */
    CocoonJS.App.hideTheWebView = function() {
        if (CocoonJS.App.isNativeExtensionObjectAvailable()) {
            var javaScriptCodeToForward = "ext.IDTK_APP.makeCall('hide');";
            return CocoonJS.App.forwardAsync(javaScriptCodeToForward);
        } else if (!navigator.isCocoonJS) {
            checkEmulatedWebViewReady();
            CocoonJS.App.EmulatedWebView.style.display = "none";
        }
    };

    /**
     * Marks a audio file to be used as music by the system. CocoonJS, internally, differentiates among music files and sound files.
     * Music files are usually bigger in size and longer in duration that sound files. There can only be just one music file 
     * playing at a specific given time. The developer can mark as many files as he/she wants to be treated as music. When the corresponding
     * HTML5 audio object is used, the system will automatically know how to treat the audio resource as music or as sound.
     * Note that it is not mandatory to use this function. The system automatically tries to identify if a file is suitable to be treated as music
     * or as sound by checking file size and duration thresholds. It is recommended, though, that the developer specifies him/herself what he/she considers
     * to be music.
     * @function
     * @param {string} audioFilePath The same audio file path that will be used to create HTML5 audio objects.
     */
    CocoonJS.App.markAsMusic = function(audioFilePath) {
        if (CocoonJS.App.isNativeExtensionObjectAvailable()) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "addForceMusic", arguments);
        }
    };

    /**
     * Activates or deactivates the antialas functionality from the CocoonJS rendering.
     * @function
     * @param {boolean} enable A flag that indicates if the antialas should be activated (true) or deactivated (false).
     */
    CocoonJS.App.setAntialias = function(enable) {
        if (CocoonJS.App.isNativeExtensionObjectAvailable()) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setDefaultAntialias", arguments);
        }
    };

    /**
     * Sets a callback function that will be called whenever the system tries to finish the app.
     * The developer can specify how the system will react to the finish of the app by returning a
     * boolean value in the callback function: true means, close the app, false means that the developer
     * will handle the app close.
     * A common example of this is the back button in Android devices. When the back button is pressed, this
     * callback will be called and the system will react depending on the developers choice finishing, or not,
     * the application.
     * @function
     * @param {function} appShouldFinishCallback A function object that will be called when the system
     * determines that the app should be finished. This function must return a true or a false value
     * depending on what the developer wants: true === finish the app, false === do not close the app.
     */
    CocoonJS.App.setAppShouldFinishCallback = function(appShouldFinishCallback) {
        if (navigator.isCocoonJS) {
            window.onidtkappfinish = appShouldFinishCallback;
        }
    }

    /**
     * Sets the texture reduction options. The texture reduction is a process that allows big images to be reduced/scaled down when they are loaded.
     * Although the quality of the images may decrease, it can be very useful in low end devices or those with limited amount of memory.
     * The function sets the threshold on image size (width or height) that will be used in order to know if an image should be reduced or not.
     * It also allows to specify a list of strings to identify in which images file paths should be applied (when they meet the size threshold requirement) 
     * The developer will still think that the image is of the original size. CocoonJS handles all of the internals to be able to show the image correctly.
     * IMPORTANT NOTE: This function should be called when the application is initialized before any image is set to be loaded for obvious reasons ;).
     * and in which sould be forbid (even if they meet the threshold requirement).
     * @function
     * @param {number} sizeThreshold This parameter specifies the minimun size (either width or height) that an image should have in order to be reduced.
     * @param {string or array} [applyTo] This parameter can either be a string or an array of strings. It's purpose is to specify one (the string) or more (the array) substring(s) 
     * that will be compared against the file path of an image to be loaded in order to know if the reduction should be applied or not. If the image meets the
     * threshold size requirement and it's file path contains this string (or strings), it will be reduced. This parameter can also be null.
     * @param {string or array} [forbidFor] This parameter can either be a string or an array of strings. It's purpose is to specify one (the string) or more (the array) substring(s) 
     * that will be compared against the file path of an image to be loaded in order to know if the reduction should be applied or not. If the image meets the
     * threshold size requirement and it's file path contains this string (or strings), it won't be reduced. This parameter should be used in order to mantain the 
     * quality of some images even they meet the size threshold requirement.
     */
    CocoonJS.App.setTextureReduction = function(sizeThreshold, applyTo, forbidFor) {
        if (CocoonJS.App.isNativeExtensionObjectAvailable()) {
            CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setDefaultTextureReducerThreshold", arguments);
        }
    };


    /**
     * Prints to the console the memory usage of the currently alive textures
     * @function
     */
    CocoonJS.App.logMemoryInfo = function() {
        if (CocoonJS.App.isNativeExtensionObjectAvailable()) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "logMemoryInfo", arguments);
        }
    };

    /**
     * Enable CocoonJS Webview FPS overlay.
     * @function
     */
    CocoonJS.App.enableFPSInTheWebView = function(fpsLayout, textColor) {
        if (!CocoonJS.App.fpsInTheWebViewEnabled) {
            fpsLayout = fpsLayout ? fpsLayout : CocoonJS.App.FPSLayout.TOP_RIGHT;
            textColor = textColor ? textColor : "white";
            var jsCode = "" +
                "(function()" +
                "{" +
                "var COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES = ['js/CocoonJSExtensions/CocoonJS.js', 'js/CocoonJSExtensions/CocoonJS_App.js', 'js/CocoonJSExtensions/CocoonJS_App_ForWebView.js'];" +
                "var loadedScriptCounter = 0;" +
                "var loadedScriptFunction = function() " +
                "{ " +
                "loadedScriptCounter++;" +
                "if (loadedScriptCounter >= COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES.length)" +
                "{" +
                "CocoonJS.App.enableFPS(" + JSON.stringify(fpsLayout) + ", " + JSON.stringify(textColor) + ");" +
                "}" +
                "};" +
                "for (var i = 0; i < COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES.length; i++)" +
                "{" +
                "var s = document.createElement('script');" +
                "s.onload = loadedScriptFunction;" +
                "s.src = COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES[i];" +
                "document.body.appendChild(s);" +
                "}" +
                "})();";
            setTimeout(function() {
                CocoonJS.App.forward(jsCode);
            }, 3000);
            CocoonJS.App.fpsInTheWebViewEnabled = true;
        }
    };

    /**
     * Disable CocoonJS Webview FPS overlay.
     * @function
     */
    CocoonJS.App.disableFPSInTheWebView = function() {
        // TODO: Implement this function.
    };

    /**
     * Setups the internal text texture cache size.
     * The CocoonJS Canvas+ environment is very inefficient when it comes to drawing texts.
     * In order to improve the performance, a text texture cache is used internally. Once a text is drawn
     * a texture is stored that matches that text and that text configuration. If the same text is called to 
     * be drawn, this cached texture would be used. 
     * This function allows to set the size of the cache. A value of 0 would mean that no cache
     * will be used. 
     * @param size The size of the text cache.
     */
    CocoonJS.App.setTextCacheSize = function(size) {
        if (CocoonJS.App.isNativeExtensionObjectAvailable()) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setTextCacheSize", arguments);
        }
    }

    CocoonJS.App.forwardedEventFromTheWebView = function(eventName, eventDataString) {
        var eventData = JSON.parse(eventDataString);
        eventData.target = window;
        var event = new Event(eventName);
        for (var att in eventData) {
            event[att] = eventData[att];
        }
        event.target = window;
        window.dispatchEvent(event);
        var canvases = document.getElementsByTagName("canvas");
        for (var i = 0; i < canvases.length; i++) {
            event.target = canvases[i];
            canvases[i].dispatchEvent(event);
        }
    }

    /**
     * Activates or deactivates the webgl functionality in Canvas+.
     * @function setWebGLEnabled
     * @param {boolean} enabled A boolean value to enable (true) or disable (false) webgl in Canvas+.
     * @example
     * Cocoon.App.setWebGLEnabled(true);
     */
    CocoonJS.App.setWebGLEnabled = function(value) {
        if (CocoonJS.App.isNativeExtensionObjectAvailable()) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "setWebGLEnabled", arguments, false);
        }
    }

    /**
     * Checks if WebGL is enabled in Canvas+
     * @function isWebGLEnabled
     * @example
     * var enabled = Cocoon.App.isWebGLEnabled();
     */
    CocoonJS.App.isWebGLEnabled = function() {
        if (CocoonJS.App.isNativeExtensionObjectAvailable()) {
            return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP", "isWebGLEnabled", arguments, false);
        }
    }

})();