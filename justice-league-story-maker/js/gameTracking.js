function gameStart(parentElement) 
{			
	var elm = null;
					
	if(elm === null)
	{		
		elm = document.getElementById("game-container");
	}
	
	var baseUrl = elm.getAttribute("data-base-url");

	var js = document.createElement("script");
	js.src = baseUrl + "./js/soundmanager2-nodebug-jsmin.js";
	js.type = "text/javascript";
	js.async = false;
	document.body.appendChild(js);

	try
	{
		window.AudioContext = window.AudioContext  || window.webkitAudioContext;
		window.audioContextInstance = new AudioContext();
	}			
	catch(e)
	{
	
	}						
	
	var js = document.createElement("script");
	js.src = baseUrl + "./js/game.js";
	js.type = "text/javascript";
	js.async = false;
	document.body.appendChild(js);	
	
	js.onload = function() { window.runGame(parentElement); };
}	