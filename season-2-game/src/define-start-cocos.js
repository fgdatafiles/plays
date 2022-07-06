/* global window require Application GoogleAnalytics ScaleManager document HTMLCanvasElement */
/* eslint-disable 
    
    no-var,
    @typescript-eslint/prefer-for-of,
    @typescript-eslint/explicit-function-return-type,
    @typescript-eslint/restrict-plus-operands
*/

var setGameCanvasScrollable = (function () {

    // State 

    var handlers = {}

    var enabled = true

    // Cache

    var canvseAddEventListener = HTMLCanvasElement
        .prototype
        .addEventListener

    // Capture Event listeners when they're first added

    var canvas = document.getElementById('scribbles-and-ink')
    canvas.addEventListener = function (eventName, method, bubble) {

        if (eventName === 'DOMMouseScroll' || eventName === 'mousewheel') {
            handlers[eventName] = handlers[eventName] || []
            handlers[eventName].push(method)
        }

        canvseAddEventListener.call(canvas, eventName, method, bubble)
    }

    // Return method capable of removing them.
    return function setGameCanvasScrollable(value) {

        if (enabled === value)
            return

        // Ensure add listener is reset to original function
        if (canvas.addEventListener !== canvseAddEventListener)
            canvas.addEventListener = canvseAddEventListener

        enabled = value

        for (var eventType in handlers) {
            for (var handler of handlers[eventType]) {
                if (enabled)
                    canvas.removeEventListener(eventType, handler)
                else
                    canvas.addEventListener(eventType, handler)
            }
        }
    }
})()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function startCocos() { // it's being added to the window, so it will be used.

    var loadingScreen = document.getElementById('splash')
    var setLoadingScreenVisible = function (enabled) {
        // Loading splash scene
        loadingScreen.style.display = enabled ? 'block' : 'none'
    }

    var isLoadingScreenVisible = function () {
        return loadingScreen.style.display === 'block'
    }

    var settings = window._CCSettings
    window._CCSettings = undefined

    var RESOURCES = cc.AssetManager.BuiltinBundleName.RESOURCES
    var INTERNAL = cc.AssetManager.BuiltinBundleName.INTERNAL
    var MAIN = cc.AssetManager.BuiltinBundleName.MAIN

    function onStart() {

        cc.view.enableRetina(true)
        cc.view.resizeWithBrowserSize(true)

        cc.game.setCanvasScrollable = setGameCanvasScrollable

        if (cc.sys.isBrowser) {
            cc.game.isLoadingScreenVisible = isLoadingScreenVisible
            cc.game.setLoadingScreenVisible = setLoadingScreenVisible
            cc.game.setLoadingScreenVisible(true)
        }

        if (cc.sys.isMobile && settings.orientation === 'landscape')
            cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE)

        else if (cc.sys.isMobile && settings.orientation === 'portrait')
            cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT)

        else if (cc.sys.isMobile) {
            cc.view.enableAutoFullScreen(![
                cc.sys.BROWSER_TYPE_BAIDU,
                cc.sys.BROWSER_TYPE_BAIDU_APP,
                cc.sys.BROWSER_TYPE_WECHAT,
                cc.sys.BROWSER_TYPE_MOBILE_QQ,
                cc.sys.BROWSER_TYPE_MIUI,
            ].indexOf(cc.sys.browserType) < 0)
        }

        // Limit downloading max concurrent task to 2,
        // more tasks simultaneously may cause performance draw back on some android system / 
        // browsers. You can adjust the number based on your own test result, you have to set 
        // it before any loading process to take effect.
        if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
            cc.assetManager.downloader.maxConcurrency = 2;
            cc.assetManager.downloader.maxRequestsPerFrame = 2;
        }


        var initialScene = settings.launchScene
        var bundle = cc.assetManager.bundles.find(function (b) {
            return b.getSceneInfo(initialScene);
        });

        var onProgress = null
        bundle.loadScene(initialScene, null, onProgress,
            function (err, scene) {
                if (!err) {
                    cc.director.runSceneImmediate(scene);
                    if (cc.sys.isBrowser) {
                        // show canvas
                        var canvas = document.getElementById('scribbles-and-ink');
                        canvas.style.visibility = '';
                    }
                }
            }
        );

    }

    var option = {
        id: 'scribbles-and-ink',
        debugMode: settings.debug
            ? cc.debug.DebugMode.INFO
            : cc.debug.DebugMode.ERROR,
        showFPS: settings.debug,
        frameRate: 60,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix,
    };

    // init assets
    cc.assetManager.init({
        bundleVers: settings.bundleVers,
        remoteBundles: settings.remoteBundles,
        server: settings.server
    })

    var bundleRoot = [INTERNAL];
    settings.hasResourcesBundle && bundleRoot.push(RESOURCES);

    var count = 0;
    function cb(err) {
        if (err) return console.error(err.message, err.stack);
        count++;
        if (count === bundleRoot.length + 1) {
            cc.assetManager.loadBundle(MAIN, function (err) {
                if (!err) cc.game.run(option, onStart);
            });
        }
    }

    cc.assetManager.loadScript(settings.jsList.map(function (x) { return 'src/' + x; }), cb);

    for (var i = 0; i < bundleRoot.length; i++) {
        cc.assetManager.loadBundle(bundleRoot[i], cb);
    }
}