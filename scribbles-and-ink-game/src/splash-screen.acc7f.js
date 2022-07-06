
/* eslint-disable no-var */

(function () {

    var splashTag = document.getElementById('splash-art')

    if (window.APNG) {

        var APNG_SPLASH_URL = './img/apngsplash.png'
        splashTag.style.background = 'url(' + APNG_SPLASH_URL + ') center / auto 29vh no-repeat white'

    } else {

        var MIN_IMAGE_NUMBER = 1
        var MAX_IMAGE_NUMBER = 18
        var REFRESH_RATE = 100 // ms

        // animate loading sequence manually

        var sequence = {
            index: 0,
            images: []
        }

        for (var i = MIN_IMAGE_NUMBER; i <= MAX_IMAGE_NUMBER; i++) {
            var number = i.toString()
            if (number.length === 1)
                number = '0' + number

            var image = new Image()
            image.src = './img/frame_apngframe' + number + '.png'
            image.loaded = false
            image.onload = function () {
                this.loaded = true
            }

            sequence.images.push(image)
        }

        function progressAnimateLoading() {

            var image = sequence.images[sequence.index]
            if (image.loaded) {
                if (splashTag.childElementCount > 0)
                    splashTag.replaceChild(image, splashTag.children[0])
                else
                    splashTag.appendChild(image)
                sequence.index++
            }

            if (sequence.index >= sequence.images.length)
                sequence.index = 0

            if (splashTag.parentElement.style.display !== 'none')
                setTimeout(progressAnimateLoading, REFRESH_RATE)
        }

        progressAnimateLoading()
    }

})()