var globals=globals||{};globals.strings;globals.bSound=true;globals.isDebugging=true;globals.soundInstance;globals.isMobile=detectMobile();var main;var stage;if(createjs){var c=createjs;}
if(document.addEventListener){$(document).ready(function(){loadLocally();});function loadLocally()
{main=new Main();$.getJSON("strings/strings.json?rand="+Math.random(),function(data){trace('dograne');globals.strings=data.game;main.init();});}}
window.addEventListener("orientationchange",resizeCanvas,false);window.addEventListener('resize',resizeCanvas,false);function resizeCanvas(){main.resize();}