	function gameStart() 
	{
		// *@* Insert Game Start code to run the game if sitelocking does not fail					
		try
		{
			window.AudioContext = window.AudioContext  || window.webkitAudioContext;
			window.audioContextInstance = new AudioContext();
		}			
		catch(e)
		{
		
		}
		
		var js = document.createElement("script");
		js.src = "./js/game.js";
		js.type = "text/javascript";
		document.body.appendChild(js);		
	}	