;(function(win,doc)
{function Shake()
{this.hasDeviceMotion='ondevicemotion'in win;this.threshold=5;this.lastTime=new Date();this.lastX=null;this.lastY=null;this.lastZ=null;if(typeof doc.CustomEvent==='function')
{this.event=new doc.CustomEvent('shake',{bubbles:true,cancelable:true});}
else if(typeof doc.createEvent==='function')
{this.event=doc.createEvent('Event');this.event.initEvent('shake',true,true);}
else
return false;}
Shake.prototype.reset=function()
{this.lastTime=new Date();this.lastX=null;this.lastY=null;this.lastZ=null;};Shake.prototype.start=function()
{this.reset();if(this.hasDeviceMotion)
win.addEventListener('devicemotion',this,false);};Shake.prototype.stop=function()
{if(this.hasDeviceMotion)
win.removeEventListener('devicemotion',this,false);this.reset();};Shake.prototype.devicemotion=function(e)
{var current=e.accelerationIncludingGravity,currentTime,timeDifference,deltaX=0,deltaY=0,deltaZ=0;if((this.lastX===null)&&(this.lastY===null)&&(this.lastZ===null))
{this.lastX=current.x;this.lastY=current.y;this.lastZ=current.z;return;}
deltaX=Math.abs(this.lastX-current.x);deltaY=Math.abs(this.lastY-current.y);deltaZ=Math.abs(this.lastZ-current.z);if(((deltaX>this.threshold)&&(deltaY>this.threshold))||((deltaX>this.threshold)&&(deltaZ>this.threshold))||((deltaY>this.threshold)&&(deltaZ>this.threshold)))
{currentTime=new Date();timeDifference=currentTime.getTime()-this.lastTime.getTime();if(timeDifference>1000)
{win.dispatchEvent(this.event);this.lastTime=new Date();}}
this.lastX=current.x;this.lastY=current.y;this.lastZ=current.z;};Shake.prototype.handleEvent=function(e)
{if(typeof(this[e.type])==='function')
return this[e.type](e);};var myShakeEvent=new Shake();myShakeEvent&&myShakeEvent.start();}(window,document));ig.module('plugins.shake').defines(function(){});