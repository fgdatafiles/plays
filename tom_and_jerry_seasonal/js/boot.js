try
{
	window.AudioContext = window.AudioContext  || window.webkitAudioContext;
	window.audioContextInstance = new AudioContext();
}			
catch(e)
{

}	

requirejs.config({	
	shim:{
		"gl-matrix-min":["jquery-1.7.1.min"],		
		"pixi-particles.min": ["pixi.min"],
		"pixi-spine":["pixi.min"],		
		"game":["jquery-1.7.1.min", "gl-matrix-min", "bodymovin.f84"],		
	}
});
		
requirejs(["jquery-1.7.1.min", "bodymovin.f84", "gl-matrix-min", "game", "pixi.min", "pixi-particles.min", "pixi-spine"], 
  function($, bodymovinF84, glMatrix, soundManager2, game, pixi, pixiParticles, pixiSpine)
{		
	function gameStart() 		
	{		
		window.glMatrix = glMatrix;
		
		window["isStandalone"] = !!window.navigator.standalone;	
	
		var elm = document.body;
			
		var catcher = function(evt) {
		if(evt.touches.length < 2)
			evt.preventDefault();
		};
		
		elm.addEventListener('touchstart', catcher, true);
		document.ontouchmove = function ontouchmove(e)
		{
			e = e || window.event;
			e.preventDefault();
		}
		
		document.oncontextmenu = function oncontextmenu(e) {
			e = e || window.event;
			if (e.preventDefault)
				e.preventDefault();
			else
				return false;
		};					
	};		
	
	gameStart();
});	