// Make sure you have something like this in your CSS files
// canvas {
//     width: 100%;
//     height: 100%;
// }

// The only things you have to change:
// width
// height
// orientation angle when the game can't be played
(function (exports){
    var width = 960;
    var height = 640;
    exports.scaleX = window.innerWidth / width;
    exports.scaleY = window.innerHeight / height;
    var cacheInnerHeight = window.innerHeight;
    var canvases = [].slice.call(document.getElementsByTagName('canvas'));
    var iOS = ( navigator.userAgent.match(/(iPhone|iPod)/i) ? true : false );
    
    var rotationImg = document.getElementById('rotate');
    var lastHeight = window.innerHeight;
    var deviceOrientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';

    var resize = function (){
        exports.scaleX = window.innerWidth / width;
        exports.scaleY = window.innerHeight / height;
        if(iOS){
            setTimeout( function(){ window.scrollTo(0, 1);}, 50 );
            if(window.scrollY >= 1){
                canvases.forEach(function (canvas){
                    canvas.style.height = (window.innerHeight + 1) + 'px';
                });
                //rotationImg.style.height = window.innerHeight + 1 + 'px';
            }
            else {
                canvases.forEach(function (canvas){
                    canvas.style.height = window.innerHeight + 61 + 'px';
                });
            }
            setTimeout(function (){
                checkIfFullscreen(window.innerHeight);
            }, 100);
        }
    };

    var checkIfFullscreen = function (height){
        if(window.outerHeight - height <= 65){
            setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
            canvases.forEach(function (canvas){
                canvas.style.height = (window.innerHeight + 1) + 'px';
            });
        }
    };

    var orientationCall = function (firstCall){
        deviceOrientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
        if(deviceOrientation === 'portrait'){ // Change these to the orientations you want to disallow
			rotationImg.style.display = 'block';
            rotationImg.style.height = window.innerHeight + 'px';
            exports.paused = true;
        }
        else {
			rotationImg.style.display = 'none';
            exports.paused = false;
            if(!firstCall && exports.loaded === true){
                exports.draw();
                exports.logic();
            }
        }
    };
    orientationCall(true);
    window.addEventListener('orientationchange', function (){
        orientationCall();
    }, false);

    if(iOS){
        canvases.forEach(function (canvas){
            canvas.style.height = (window.innerHeight + 61) + 'px';
        });
        exports.scaleY = (window.innerHeight + 61) / height;
		rotationImg.style.height = (window.innerHeight + 61) + 'px';
    }
    setTimeout(function (){
        window.scrollTo(0, 1);
        if(iOS && cacheInnerHeight >= window.innerHeight){
            canvases.forEach(function (canvas){
                canvas.style.height = window.innerHeight + 'px';
            });
		rotationImg.style.height = (window.innerHeight + 1) + 'px';
        }
    }, 50);

    window.addEventListener('resize', function (){
        if(lastHeight !== window.innerHeight){
            resize();
            lastHeight = window.innerHeight;
        }
    }, false);

    document.body.addEventListener('touchmove', function (e){
        e.preventDefault();
    }, false);
    document.body.addEventListener('touchstart', function (){
        setTimeout( function(){ window.scrollTo(0, 1); }, 50 );
    }, false);
})(window.head);