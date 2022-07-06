(function() {
    var shoalapi = window.shoalapi || {};

    shoalapi.loadComplete = function() {
        console.log("shoalapi.loadComplete");
    }

    shoalapi.startSession = function() {
        console.log("shoalapi.startSession");
    }

    shoalapi.endSession = function(result) {
        console.log("shoalapi.endSession", result);
    }

    shoalapi.showAds = function(adsType, onComplete) {
        console.log("shoalapi.showAds: " + adsType);
        onComplete && onComplete();
    }

    window.shoalapi = shoalapi;
})();