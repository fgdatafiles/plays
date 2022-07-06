
/* eslint-disable no-var */
(function () {
    var splash = document.getElementById('splash')
    splash.style.display = 'block'

    var cocos2d = document.createElement('script')
    cocos2d.async = true
    cocos2d.src = window._CCSettings.debug
        ? 'cocos2d-js.js'
        : 'cocos2d-js-min.31fbb.js'

    var engineLoaded = function () {
        document.body.removeChild(cocos2d)
        cocos2d.removeEventListener('load', engineLoaded, false)
        window.startCocos()
    }
    cocos2d.addEventListener('load', engineLoaded, false)
    document.body.appendChild(cocos2d)
})()