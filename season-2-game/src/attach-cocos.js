/* global window document CC_PHYSICS_BUILTIN CC_PHYSICS_CANNON */
/* eslint-disable 
    no-var,
    @typescript-eslint/explicit-function-return-type,
*/

(function () {

    var debug = window._CCSettings.debug
    var splash = document.getElementById('splash')
    splash.style.display = 'block'

    function loadScript(moduleName, onScriptLoaded) {

        var scriptTag = document.createElement('script')
        scriptTag.async = true
        scriptTag.src = moduleName

        var scriptLoadHandler = function () {
            scriptTag.removeEventListener('load', scriptLoadHandler, false)
            document.body.removeChild(scriptTag)
            if (onScriptLoaded)
                onScriptLoaded()
        }

        scriptTag.addEventListener('load', scriptLoadHandler, false)
        document.body.appendChild(scriptTag)
    }

    loadScript(
        debug ? 'cocos2d-js.js' : 'cocos2d-js-min.js',
        function () {
            if (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON)
                loadScript(debug ? 'physics.js' : 'physics-min.js', window.startCocos)
            else
                window.startCocos()
        })
})()