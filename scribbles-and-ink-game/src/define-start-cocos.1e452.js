/* global Application GoogleAnalytics ScaleManager */
/* eslint-disable no-var */

var setGameCanvasScrollable = (function () {

    // State 

    var handlers = {}

    var enabled = true

    // Cache

    const canvseAddEventListener = HTMLCanvasElement
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

        for (var eventType in handlers)
            for (var handler of handlers[eventType])
                if (enabled)
                    canvas.removeEventListener(eventType, handler)
                else
                    canvas.addEventListener(eventType, handler)
    }
})()

function startCocos() {

    var loadingScreen = document.getElementById('splash')
    var setLoadingScreenVisible = function (enabled) {
        // Loading splash scene
        loadingScreen.style.display = enabled ? 'block' : 'none'

        var camera = cc && cc.Camera && cc.Camera.main
        if (camera)
            camera.enabled = !enabled
    }

    var isLoadingScreenVisible = function () {
        return loadingScreen.style.display === 'block'
    }

    var settings = window._CCSettings
    window._CCSettings = undefined

    if (!settings.debug) {
        var uuids = settings.uuids

        var rawAssets = settings.rawAssets
        var assetTypes = settings.assetTypes
        var realRawAssets = settings.rawAssets = {}
        for (var mount in rawAssets) {
            var entries = rawAssets[mount]
            var realEntries = realRawAssets[mount] = {}
            for (var id in entries) {
                var entry = entries[id]
                var type = entry[1]
                // retrieve minified raw asset
                if (typeof type === 'number')
                    entry[1] = assetTypes[type]

                // retrieve uuid
                realEntries[uuids[id] || id] = entry
            }
        }

        var scenes = settings.scenes
        for (var i = 0; i < scenes.length; ++i) {
            var scene = scenes[i]
            if (typeof scene.uuid === 'number')
                scene.uuid = uuids[scene.uuid]
        }

        var packedAssets = settings.packedAssets
        for (var packId in packedAssets) {
            var packedIds = packedAssets[packId]
            for (var j = 0; j < packedIds.length; ++j)
                if (typeof packedIds[j] === 'number')
                    packedIds[j] = uuids[packedIds[j]]
        }
    }

    function onStart() {
        cc.loader.downloader._subpackages = settings.subpackages

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

        else if (cc.sys.isMobile)
            cc.view.enableAutoFullScreen(
                [
                    cc.sys.BROWSER_TYPE_BAIDU,
                    cc.sys.BROWSER_TYPE_WECHAT,
                    cc.sys.BROWSER_TYPE_MOBILE_QQ,
                    cc.sys.BROWSER_TYPE_MIUI
                ].indexOf(cc.sys.browserType) < 0
            )

        // Limit downloading max concurrent task to 2,
        // more tasks simultaneously may cause performance draw back on some android system / browsers.
        // You can adjust the number based on your own test result, you have to set it before any loading process to take effect.
        if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID)
            cc.macro.DOWNLOAD_MAX_CONCURRENT = 2

        var launchScene = settings.launchScene

        // load scene
        cc.director.loadScene(launchScene, null, function () {
            if (cc.sys.isBrowser) {
                // show canvas
                var canvas = document.getElementById('scribbles-and-ink')
                canvas.style.visibility = ''
            }

            cc.loader.onProgress = null
        })
    }

    // jsList
    var jsList = settings.jsList

    var bundledScript = settings.debug
        ? 'src/project.dev.js'
        : 'src/project.e4994.js'
    if (jsList) {
        jsList = jsList.map(function (x) {
            return 'src/' + x
        })
        jsList.push(bundledScript)
    } else
        jsList = [bundledScript]

    var option = {
        id: 'scribbles-and-ink',
        scenes: settings.scenes,
        debugMode: settings.debug
            ? cc.debug.DebugMode.INFO
            : cc.debug.DebugMode.ERROR,
        showFPS: settings.debug,
        frameRate: 60,
        jsList: jsList,
        groupList: settings.groupList,
        collisionMatrix: settings.collisionMatrix
    }

    // init assets
    cc.AssetLibrary.init({
        libraryPath: 'res/import',
        rawAssetsBase: 'res/raw-',
        rawAssets: settings.rawAssets,
        packedAssets: settings.packedAssets,
        md5AssetsMap: settings.md5AssetsMap,
        subpackages: settings.subpackages
    })

    window.Application.uses(new GoogleAnalytics())
    cc.springRoll = new Application({
        features: {
            captions: true,
            sound: true,
            vo: true,
            music: true,
            sfx: true
        }
    }).state

    cc.view.isAutoFullScreenEnabled(false)
    window.Application.uses(new ScaleManager(function (resizeData) {
        cc.view.setFrameSize(
            resizeData.width / 2,
            resizeData.height / 2
        )
    }))

    cc.game.run(option, onStart)
}

if (window.jsb) {
    var isRuntime = typeof loadRuntime === 'function'
    if (isRuntime) {
        require('src/settings.9f5f8.js')
        require('src/cocos2d-runtime.js')
        require('jsb-adapter/engine/index.js')
    } else {
        require('src/settings.9f5f8.js')
        require('src/cocos2d-jsb.js')
        require('jsb-adapter/jsb-engine.js')
    }
    startCocos()
}
