/**
 * Created By Justin Dambra
 * Simple Helper Class For Device Motion
 */

var rotationRateAlpha = 0;
var rotationRateBeta = 0;
var rotationRateGamma = 0;

window.ondevicemotion = function(event){
	rotationRateAlpha = event.rotationRate.alpha;
	rotationRateBeta = event.rotationRate.beta;
	rotationRateGamma = event.rotationRate.gamma;
	
	// [Handles Reverse Orientation]
	if(window.orientation == -90){ rotationRateBeta *= -1; }
	
	// console.log("[onDeviceMotion]: " + rotationRateBeta);
}