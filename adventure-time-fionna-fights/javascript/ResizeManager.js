// /**
//  * Created by marchenko on 18.07.16.
//  */
var globalScale = 1;
var isCanvas = true;
var renderSize = 1;
var stageScale = 1;
var debug = 1;
var fpsLabel;
function onResize()
{
    if (!renderer) return;

    var realW = window.innerWidth;
    var realH = window.innerHeight;
	
	if (self.innerHeight) { // all except Explorer
		realW = self.innerWidth;
		realH = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
		realW = document.documentElement.clientWidth;
		realH = document.documentElement.clientHeight;
	} else if (document.body) { // other Explorers
		realW = document.body.clientWidth;
		realH = document.body.clientHeight;
	}
	
    globalScale = Math.min(realW / _W, realH / _H);

    if (renderer instanceof PIXI.CanvasRenderer){
        isCanvas = true;
    } else {
        isCanvas = false;
    }

    renderer.resize(_W/renderSize, _H/renderSize);

    renderer.view.style.width = _W * globalScale + 'px';
    renderer.view.style.height = _H * globalScale+ 'px';
	
    stage.scale.x = stageScale;
    stage.scale.y = stageScale;
	
	if(ScreenLock && options_mobile){
		if(realW <realH){
			options_pause = true;
			ScreenLock.visible = true;
		} else {
			options_pause = false;
			ScreenLock.visible = false;
		}
		refreshTime();
	}

	/*var handleOrientationChange = (function() {
		var struct = function(){
			struct.parse();
		};
		struct.showPortraitView = function(){
				options_pause = true;
				ScreenLock.visible = true;
		};
		struct.showLandscapeView = function(){
				options_pause = false;
				ScreenLock.visible = false;
		};
		struct.parse = function(){
			switch(window.orientation){
				case 0:
					//Portrait Orientation
					this.showPortraitView();
					break;
				default:
					//Landscape Orientation
					if(!parseInt(window.orientation) 
					|| window.orientation === this.lastOrientation)
						setTimeout(this, 10);
					else
					{
						this.lastOrientation = window.orientation;
						this.showLandscapeView();
					}
					break;
			}
		};
		struct.lastOrientation = window.orientation;
		return struct;
	})();
	window.addEventListener("orientationchange", handleOrientationChange, false);*/
}

