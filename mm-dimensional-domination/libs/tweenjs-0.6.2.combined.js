/*!
* TweenJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2010 gskinner.com, inc.
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/this.createjs=this.createjs||{};createjs.extend=function(subclass,superclass){"use strict";function o(){this.constructor=subclass;}
o.prototype=superclass.prototype;return(subclass.prototype=new o());};this.createjs=this.createjs||{};createjs.promote=function(subclass,prefix){"use strict";var subP=subclass.prototype,supP=(Object.getPrototypeOf&&Object.getPrototypeOf(subP))||subP.__proto__;if(supP){subP[(prefix+="_")+"constructor"]=supP.constructor;for(var n in supP){if(subP.hasOwnProperty(n)&&(typeof supP[n]=="function")){subP[prefix+n]=supP[n];}}}
return subclass;};this.createjs=this.createjs||{};(function(){"use strict";function Event(type,bubbles,cancelable){this.type=type;this.target=null;this.currentTarget=null;this.eventPhase=0;this.bubbles=!!bubbles;this.cancelable=!!cancelable;this.timeStamp=(new Date()).getTime();this.defaultPrevented=false;this.propagationStopped=false;this.immediatePropagationStopped=false;this.removed=false;}
var p=Event.prototype;p.preventDefault=function(){this.defaultPrevented=this.cancelable&&true;};p.stopPropagation=function(){this.propagationStopped=true;};p.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=true;};p.remove=function(){this.removed=true;};p.clone=function(){return new Event(this.type,this.bubbles,this.cancelable);};p.set=function(props){for(var n in props){this[n]=props[n];}
return this;};p.toString=function(){return "[Event (type="+this.type+")]";};createjs.Event=Event;}());this.createjs=this.createjs||{};(function(){"use strict";function EventDispatcher(){this._listeners=null;this._captureListeners=null;}
var p=EventDispatcher.prototype;EventDispatcher.initialize=function(target){target.addEventListener=p.addEventListener;target.on=p.on;target.removeEventListener=target.off=p.removeEventListener;target.removeAllEventListeners=p.removeAllEventListeners;target.hasEventListener=p.hasEventListener;target.dispatchEvent=p.dispatchEvent;target._dispatchEvent=p._dispatchEvent;target.willTrigger=p.willTrigger;};p.addEventListener=function(type,listener,useCapture){var listeners;if(useCapture){listeners=this._captureListeners=this._captureListeners||{};}else{listeners=this._listeners=this._listeners||{};}
var arr=listeners[type];if(arr){this.removeEventListener(type,listener,useCapture);}
arr=listeners[type];if(!arr){listeners[type]=[listener];}else{arr.push(listener);}
return listener;};p.on=function(type,listener,scope,once,data,useCapture){if(listener.handleEvent){scope=scope||listener;listener=listener.handleEvent;}
scope=scope||this;return this.addEventListener(type,function(evt){listener.call(scope,evt,data);once&&evt.remove();},useCapture);};p.removeEventListener=function(type,listener,useCapture){var listeners=useCapture?this._captureListeners:this._listeners;if(!listeners){return;}
var arr=listeners[type];if(!arr){return;}
for(var i=0,l=arr.length;i<l;i++){if(arr[i]==listener){if(l==1){delete(listeners[type]);}
else{arr.splice(i,1);}
break;}}};p.off=p.removeEventListener;p.removeAllEventListeners=function(type){if(!type){this._listeners=this._captureListeners=null;}else{if(this._listeners){delete(this._listeners[type]);}
if(this._captureListeners){delete(this._captureListeners[type]);}}};p.dispatchEvent=function(eventObj,bubbles,cancelable){if(typeof eventObj=="string"){var listeners=this._listeners;if(!bubbles&&(!listeners||!listeners[eventObj])){return true;}
eventObj=new createjs.Event(eventObj,bubbles,cancelable);}else if(eventObj.target&&eventObj.clone){eventObj=eventObj.clone();}
try{eventObj.target=this;}catch(e){}
if(!eventObj.bubbles||!this.parent){this._dispatchEvent(eventObj,2);}else{var top=this,list=[top];while(top.parent){list.push(top=top.parent);}
var i,l=list.length;for(i=l-1;i>=0&&!eventObj.propagationStopped;i--){list[i]._dispatchEvent(eventObj,1+(i==0));}
for(i=1;i<l&&!eventObj.propagationStopped;i++){list[i]._dispatchEvent(eventObj,3);}}
return!eventObj.defaultPrevented;};p.hasEventListener=function(type){var listeners=this._listeners,captureListeners=this._captureListeners;return!!((listeners&&listeners[type])||(captureListeners&&captureListeners[type]));};p.willTrigger=function(type){var o=this;while(o){if(o.hasEventListener(type)){return true;}
o=o.parent;}
return false;};p.toString=function(){return "[EventDispatcher]";};p._dispatchEvent=function(eventObj,eventPhase){var l,listeners=(eventPhase==1)?this._captureListeners:this._listeners;if(eventObj&&listeners){var arr=listeners[eventObj.type];if(!arr||!(l=arr.length)){return;}
try{eventObj.currentTarget=this;}catch(e){}
try{eventObj.eventPhase=eventPhase;}catch(e){}
eventObj.removed=false;arr=arr.slice();for(var i=0;i<l&&!eventObj.immediatePropagationStopped;i++){var o=arr[i];if(o.handleEvent){o.handleEvent(eventObj);}else{o(eventObj);}
if(eventObj.removed){this.off(eventObj.type,o,eventPhase==1);eventObj.removed=false;}}}};createjs.EventDispatcher=EventDispatcher;}());this.createjs=this.createjs||{};(function(){"use strict";function Ticker(){throw "Ticker cannot be instantiated.";}
Ticker.RAF_SYNCHED="synched";Ticker.RAF="raf";Ticker.TIMEOUT="timeout";Ticker.useRAF=false;Ticker.timingMode=null;Ticker.maxDelta=0;Ticker.paused=false;Ticker.removeEventListener=null;Ticker.removeAllEventListeners=null;Ticker.dispatchEvent=null;Ticker.hasEventListener=null;Ticker._listeners=null;createjs.EventDispatcher.initialize(Ticker);Ticker._addEventListener=Ticker.addEventListener;Ticker.addEventListener=function(){!Ticker._inited&&Ticker.init();return Ticker._addEventListener.apply(Ticker,arguments);};Ticker._inited=false;Ticker._startTime=0;Ticker._pausedTime=0;Ticker._ticks=0;Ticker._pausedTicks=0;Ticker._interval=50;Ticker._lastTime=0;Ticker._times=null;Ticker._tickTimes=null;Ticker._timerId=null;Ticker._raf=true;Ticker.setInterval=function(interval){Ticker._interval=interval;if(!Ticker._inited){return;}
Ticker._setupTick();};Ticker.getInterval=function(){return Ticker._interval;};Ticker.setFPS=function(value){Ticker.setInterval(1000/value);};Ticker.getFPS=function(){return 1000/Ticker._interval;};try{Object.defineProperties(Ticker,{interval:{get:Ticker.getInterval,set:Ticker.setInterval},framerate:{get:Ticker.getFPS,set:Ticker.setFPS}});}catch(e){console.log(e);}
Ticker.init=function(){if(Ticker._inited){return;}
Ticker._inited=true;Ticker._times=[];Ticker._tickTimes=[];Ticker._startTime=Ticker._getTime();Ticker._times.push(Ticker._lastTime=0);Ticker.interval=Ticker._interval;};Ticker.reset=function(){if(Ticker._raf){var f=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame;f&&f(Ticker._timerId);}else{clearTimeout(Ticker._timerId);}
Ticker.removeAllEventListeners("tick");Ticker._timerId=Ticker._times=Ticker._tickTimes=null;Ticker._startTime=Ticker._lastTime=Ticker._ticks=0;Ticker._inited=false;};Ticker.getMeasuredTickTime=function(ticks){var ttl=0,times=Ticker._tickTimes;if(!times||times.length<1){return-1;}
ticks=Math.min(times.length,ticks||(Ticker.getFPS()|0));for(var i=0;i<ticks;i++){ttl+=times[i];}
return ttl/ticks;};Ticker.getMeasuredFPS=function(ticks){var times=Ticker._times;if(!times||times.length<2){return-1;}
ticks=Math.min(times.length-1,ticks||(Ticker.getFPS()|0));return 1000/((times[0]-times[ticks])/ticks);};Ticker.setPaused=function(value){Ticker.paused=value;};Ticker.getPaused=function(){return Ticker.paused;};Ticker.getTime=function(runTime){return Ticker._startTime?Ticker._getTime()-(runTime?Ticker._pausedTime:0):-1;};Ticker.getEventTime=function(runTime){return Ticker._startTime?(Ticker._lastTime||Ticker._startTime)-(runTime?Ticker._pausedTime:0):-1;};Ticker.getTicks=function(pauseable){return Ticker._ticks-(pauseable?Ticker._pausedTicks:0);};Ticker._handleSynch=function(){Ticker._timerId=null;Ticker._setupTick();if(Ticker._getTime()-Ticker._lastTime>=(Ticker._interval-1)*0.97){Ticker._tick();}};Ticker._handleRAF=function(){Ticker._timerId=null;Ticker._setupTick();Ticker._tick();};Ticker._handleTimeout=function(){Ticker._timerId=null;Ticker._setupTick();Ticker._tick();};Ticker._setupTick=function(){if(Ticker._timerId!=null){return;}
var mode=Ticker.timingMode||(Ticker.useRAF&&Ticker.RAF_SYNCHED);if(mode==Ticker.RAF_SYNCHED||mode==Ticker.RAF){var f=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(f){Ticker._timerId=f(mode==Ticker.RAF?Ticker._handleRAF:Ticker._handleSynch);Ticker._raf=true;return;}}
Ticker._raf=false;Ticker._timerId=setTimeout(Ticker._handleTimeout,Ticker._interval);};Ticker._tick=function(){var paused=Ticker.paused;var time=Ticker._getTime();var elapsedTime=time-Ticker._lastTime;Ticker._lastTime=time;Ticker._ticks++;if(paused){Ticker._pausedTicks++;Ticker._pausedTime+=elapsedTime;}
if(Ticker.hasEventListener("tick")){var event=new createjs.Event("tick");var maxDelta=Ticker.maxDelta;event.delta=(maxDelta&&elapsedTime>maxDelta)?maxDelta:elapsedTime;event.paused=paused;event.time=time;event.runTime=time-Ticker._pausedTime;Ticker.dispatchEvent(event);}
Ticker._tickTimes.unshift(Ticker._getTime()-time);while(Ticker._tickTimes.length>100){Ticker._tickTimes.pop();}
Ticker._times.unshift(time);while(Ticker._times.length>100){Ticker._times.pop();}};var now=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);Ticker._getTime=function(){return((now&&now.call(performance))||(new Date().getTime()))-Ticker._startTime;};createjs.Ticker=Ticker;}());this.createjs=this.createjs||{};(function(){"use strict";function Tween(target,props,pluginData){this.ignoreGlobalPause=false;this.loop=false;this.duration=0;this.pluginData=pluginData||{};this.target=target;this.position=null;this.passive=false;this._paused=false;this._curQueueProps={};this._initQueueProps={};this._steps=[];this._actions=[];this._prevPosition=0;this._stepPosition=0;this._prevPos=-1;this._target=target;this._useTicks=false;this._inited=false;this._registered=false;if(props){this._useTicks=props.useTicks;this.ignoreGlobalPause=props.ignoreGlobalPause;this.loop=props.loop;props.onChange&&this.addEventListener("change",props.onChange);if(props.override){Tween.removeTweens(target);}}
if(props&&props.paused){this._paused=true;}else{createjs.Tween._register(this,true);}
if(props&&props.position!=null){this.setPosition(props.position,Tween.NONE);}};var p=createjs.extend(Tween,createjs.EventDispatcher);Tween.NONE=0;Tween.LOOP=1;Tween.REVERSE=2;Tween.IGNORE={};Tween._tweens=[];Tween._plugins={};Tween.get=function(target,props,pluginData,override){if(override){Tween.removeTweens(target);}
return new Tween(target,props,pluginData);};Tween.tick=function(delta,paused){var tweens=Tween._tweens.slice();for(var i=tweens.length-1;i>=0;i--){var tween=tweens[i];if((paused&&!tween.ignoreGlobalPause)||tween._paused){continue;}
tween.tick(tween._useTicks?1:delta);}};Tween.handleEvent=function(event){if(event.type=="tick"){this.tick(event.delta,event.paused);}};Tween.removeTweens=function(target){if(!target.tweenjs_count){return;}
var tweens=Tween._tweens;for(var i=tweens.length-1;i>=0;i--){var tween=tweens[i];if(tween._target==target){tween._paused=true;tweens.splice(i,1);}}
target.tweenjs_count=0;};Tween.removeAllTweens=function(){var tweens=Tween._tweens;for(var i=0,l=tweens.length;i<l;i++){var tween=tweens[i];tween._paused=true;tween.target&&(tween.target.tweenjs_count=0);}
tweens.length=0;};Tween.hasActiveTweens=function(target){if(target){return target.tweenjs_count!=null&&!!target.tweenjs_count;}
return Tween._tweens&&!!Tween._tweens.length;};Tween.installPlugin=function(plugin,properties){var priority=plugin.priority;if(priority==null){plugin.priority=priority=0;}
for(var i=0,l=properties.length,p=Tween._plugins;i<l;i++){var n=properties[i];if(!p[n]){p[n]=[plugin];}else{var arr=p[n];for(var j=0,jl=arr.length;j<jl;j++){if(priority<arr[j].priority){break;}}
p[n].splice(j,0,plugin);}}};Tween._register=function(tween,value){var target=tween._target;var tweens=Tween._tweens;if(value&&!tween._registered){if(target){target.tweenjs_count=target.tweenjs_count?target.tweenjs_count+1:1;}
tweens.push(tween);if(!Tween._inited&&createjs.Ticker){createjs.Ticker.addEventListener("tick",Tween);Tween._inited=true;}}else if(!value&&tween._registered){if(target){target.tweenjs_count--;}
var i=tweens.length;while(i--){if(tweens[i]==tween){tweens.splice(i,1);break;}}}
tween._registered=value;};p.wait=function(duration,passive){if(duration==null||duration<=0){return this;}
var o=this._cloneProps(this._curQueueProps);return this._addStep({d:duration,p0:o,e:this._linearEase,p1:o,v:passive});};p.to=function(props,duration,ease){if(isNaN(duration)||duration<0){duration=0;}
return this._addStep({d:duration||0,p0:this._cloneProps(this._curQueueProps),e:ease,p1:this._cloneProps(this._appendQueueProps(props))});};p.call=function(callback,params,scope){return this._addAction({f:callback,p:params?params:[this],o:scope?scope:this._target});};p.set=function(props,target){return this._addAction({f:this._set,o:this,p:[props,target?target:this._target]});};p.play=function(tween){if(!tween){tween=this;}
return this.call(tween.setPaused,[false],tween);};p.pause=function(tween){if(!tween){tween=this;}
return this.call(tween.setPaused,[true],tween);};p.setPosition=function(value,actionsMode){if(value<0){value=0;}
if(actionsMode==null){actionsMode=1;}
var t=value;var end=false;if(t>=this.duration){if(this.loop){t=t%this.duration;}else{t=this.duration;end=true;}}
if(t==this._prevPos){return end;}
var prevPos=this._prevPos;this.position=this._prevPos=t;this._prevPosition=value;if(this._target){if(end){this._updateTargetProps(null,1);}else if(this._steps.length>0){for(var i=0,l=this._steps.length;i<l;i++){if(this._steps[i].t>t){break;}}
var step=this._steps[i-1];this._updateTargetProps(step,(this._stepPosition=t-step.t)/step.d);}}
if(actionsMode!=0&&this._actions.length>0){if(this._useTicks){this._runActions(t,t);}else if(actionsMode==1&&t<prevPos){if(prevPos!=this.duration){this._runActions(prevPos,this.duration);}
this._runActions(0,t,true);}else{this._runActions(prevPos,t);}}
if(end){this.setPaused(true);}
this.dispatchEvent("change");return end;};p.tick=function(delta){if(this._paused){return;}
this.setPosition(this._prevPosition+delta);};p.setPaused=function(value){if(this._paused===!!value){return this;}
this._paused=!!value;Tween._register(this,!value);return this;};p.w=p.wait;p.t=p.to;p.c=p.call;p.s=p.set;p.toString=function(){return "[Tween]";};p.clone=function(){throw("Tween can not be cloned.")};p._updateTargetProps=function(step,ratio){var p0,p1,v,v0,v1,arr;if(!step&&ratio==1){this.passive=false;p0=p1=this._curQueueProps;}else{this.passive=!!step.v;if(this.passive){return;}
if(step.e){ratio=step.e(ratio,0,1,1);}
p0=step.p0;p1=step.p1;}
for(var n in this._initQueueProps){if((v0=p0[n])==null){p0[n]=v0=this._initQueueProps[n];}
if((v1=p1[n])==null){p1[n]=v1=v0;}
if(v0==v1||ratio==0||ratio==1||(typeof(v0)!="number")){v=ratio==1?v1:v0;}else{v=v0+(v1-v0)*ratio;}
var ignore=false;if(arr=Tween._plugins[n]){for(var i=0,l=arr.length;i<l;i++){var v2=arr[i].tween(this,n,v,p0,p1,ratio,!!step&&p0==p1,!step);if(v2==Tween.IGNORE){ignore=true;}else{v=v2;}}}
if(!ignore){this._target[n]=v;}}};p._runActions=function(startPos,endPos,includeStart){var sPos=startPos;var ePos=endPos;var i=-1;var j=this._actions.length;var k=1;if(startPos>endPos){sPos=endPos;ePos=startPos;i=j;j=k=-1;}
while((i+=k)!=j){var action=this._actions[i];var pos=action.t;if(pos==ePos||(pos>sPos&&pos<ePos)||(includeStart&&pos==startPos)){action.f.apply(action.o,action.p);}}};p._appendQueueProps=function(o){var arr,oldValue,i,l,injectProps;for(var n in o){if(this._initQueueProps[n]===undefined){oldValue=this._target[n];if(arr=Tween._plugins[n]){for(i=0,l=arr.length;i<l;i++){oldValue=arr[i].init(this,n,oldValue);}}
this._initQueueProps[n]=this._curQueueProps[n]=(oldValue===undefined)?null:oldValue;}else{oldValue=this._curQueueProps[n];}}
for(var n in o){oldValue=this._curQueueProps[n];if(arr=Tween._plugins[n]){injectProps=injectProps||{};for(i=0,l=arr.length;i<l;i++){if(arr[i].step){arr[i].step(this,n,oldValue,o[n],injectProps);}}}
this._curQueueProps[n]=o[n];}
if(injectProps){this._appendQueueProps(injectProps);}
return this._curQueueProps;};p._cloneProps=function(props){var o={};for(var n in props){o[n]=props[n];}
return o;};p._addStep=function(o){if(o.d>0){this._steps.push(o);o.t=this.duration;this.duration+=o.d;}
return this;};p._addAction=function(o){o.t=this.duration;this._actions.push(o);return this;};p._set=function(props,o){for(var n in props){o[n]=props[n];}};createjs.Tween=createjs.promote(Tween,"EventDispatcher");}());this.createjs=this.createjs||{};(function(){"use strict";function Timeline(tweens,labels,props){this.EventDispatcher_constructor();this.ignoreGlobalPause=false;this.duration=0;this.loop=false;this.position=null;this._paused=false;this._tweens=[];this._labels=null;this._labelList=null;this._prevPosition=0;this._prevPos=-1;this._useTicks=false;this._registered=false;if(props){this._useTicks=props.useTicks;this.loop=props.loop;this.ignoreGlobalPause=props.ignoreGlobalPause;props.onChange&&this.addEventListener("change",props.onChange);}
if(tweens){this.addTween.apply(this,tweens);}
this.setLabels(labels);if(props&&props.paused){this._paused=true;}else{createjs.Tween._register(this,true);}
if(props&&props.position!=null){this.setPosition(props.position,createjs.Tween.NONE);}};var p=createjs.extend(Timeline,createjs.EventDispatcher);p.addTween=function(tween){var l=arguments.length;if(l>1){for(var i=0;i<l;i++){this.addTween(arguments[i]);}
return arguments[0];}else if(l==0){return null;}
this.removeTween(tween);this._tweens.push(tween);tween.setPaused(true);tween._paused=false;tween._useTicks=this._useTicks;if(tween.duration>this.duration){this.duration=tween.duration;}
if(this._prevPos>=0){tween.setPosition(this._prevPos,createjs.Tween.NONE);}
return tween;};p.removeTween=function(tween){var l=arguments.length;if(l>1){var good=true;for(var i=0;i<l;i++){good=good&&this.removeTween(arguments[i]);}
return good;}else if(l==0){return false;}
var tweens=this._tweens;var i=tweens.length;while(i--){if(tweens[i]==tween){tweens.splice(i,1);if(tween.duration>=this.duration){this.updateDuration();}
return true;}}
return false;};p.addLabel=function(label,position){this._labels[label]=position;var list=this._labelList;if(list){for(var i=0,l=list.length;i<l;i++){if(position<list[i].position){break;}}
list.splice(i,0,{label:label,position:position});}};p.setLabels=function(o){this._labels=o?o:{};};p.getLabels=function(){var list=this._labelList;if(!list){list=this._labelList=[];var labels=this._labels;for(var n in labels){list.push({label:n,position:labels[n]});}
list.sort(function(a,b){return a.position-b.position;});}
return list;};p.getCurrentLabel=function(){var labels=this.getLabels();var pos=this.position;var l=labels.length;if(l){for(var i=0;i<l;i++){if(pos<labels[i].position){break;}}
return(i==0)?null:labels[i-1].label;}
return null;};p.gotoAndPlay=function(positionOrLabel){this.setPaused(false);this._goto(positionOrLabel);};p.gotoAndStop=function(positionOrLabel){this.setPaused(true);this._goto(positionOrLabel);};p.setPosition=function(value,actionsMode){var t=this._calcPosition(value);var end=!this.loop&&value>=this.duration;if(t==this._prevPos){return end;}
this._prevPosition=value;this.position=this._prevPos=t;for(var i=0,l=this._tweens.length;i<l;i++){this._tweens[i].setPosition(t,actionsMode);if(t!=this._prevPos){return false;}}
if(end){this.setPaused(true);}
this.dispatchEvent("change");return end;};p.setPaused=function(value){this._paused=!!value;createjs.Tween._register(this,!value);};p.updateDuration=function(){this.duration=0;for(var i=0,l=this._tweens.length;i<l;i++){var tween=this._tweens[i];if(tween.duration>this.duration){this.duration=tween.duration;}}};p.tick=function(delta){this.setPosition(this._prevPosition+delta);};p.resolve=function(positionOrLabel){var pos=Number(positionOrLabel);if(isNaN(pos)){pos=this._labels[positionOrLabel];}
return pos;};p.toString=function(){return "[Timeline]";};p.clone=function(){throw("Timeline can not be cloned.")};p._goto=function(positionOrLabel){var pos=this.resolve(positionOrLabel);if(pos!=null){this.setPosition(pos);}};p._calcPosition=function(value){if(value<0){return 0;}
if(value<this.duration){return value;}
return this.loop?value%this.duration:this.duration;};createjs.Timeline=createjs.promote(Timeline,"EventDispatcher");}());this.createjs=this.createjs||{};(function(){"use strict";function Ease(){throw "Ease cannot be instantiated.";}
Ease.linear=function(t){return t;};Ease.none=Ease.linear;Ease.get=function(amount){if(amount<-1){amount=-1;}
if(amount>1){amount=1;}
return function(t){if(amount==0){return t;}
if(amount<0){return t*(t*-amount+1+amount);}
return t*((2-t)*amount+(1-amount));};};Ease.getPowIn=function(pow){return function(t){return Math.pow(t,pow);};};Ease.getPowOut=function(pow){return function(t){return 1-Math.pow(1-t,pow);};};Ease.getPowInOut=function(pow){return function(t){if((t*=2)<1)return 0.5*Math.pow(t,pow);return 1-0.5*Math.abs(Math.pow(2-t,pow));};};Ease.quadIn=Ease.getPowIn(2);Ease.quadOut=Ease.getPowOut(2);Ease.quadInOut=Ease.getPowInOut(2);Ease.cubicIn=Ease.getPowIn(3);Ease.cubicOut=Ease.getPowOut(3);Ease.cubicInOut=Ease.getPowInOut(3);Ease.quartIn=Ease.getPowIn(4);Ease.quartOut=Ease.getPowOut(4);Ease.quartInOut=Ease.getPowInOut(4);Ease.quintIn=Ease.getPowIn(5);Ease.quintOut=Ease.getPowOut(5);Ease.quintInOut=Ease.getPowInOut(5);Ease.sineIn=function(t){return 1-Math.cos(t*Math.PI/2);};Ease.sineOut=function(t){return Math.sin(t*Math.PI/2);};Ease.sineInOut=function(t){return-0.5*(Math.cos(Math.PI*t)-1);};Ease.getBackIn=function(amount){return function(t){return t*t*((amount+1)*t-amount);};};Ease.backIn=Ease.getBackIn(1.7);Ease.getBackOut=function(amount){return function(t){return(--t*t*((amount+1)*t+amount)+1);};};Ease.backOut=Ease.getBackOut(1.7);Ease.getBackInOut=function(amount){amount*=1.525;return function(t){if((t*=2)<1)return 0.5*(t*t*((amount+1)*t-amount));return 0.5*((t-=2)*t*((amount+1)*t+amount)+2);};};Ease.backInOut=Ease.getBackInOut(1.7);Ease.circIn=function(t){return-(Math.sqrt(1-t*t)-1);};Ease.circOut=function(t){return Math.sqrt(1-(--t)*t);};Ease.circInOut=function(t){if((t*=2)<1)return-0.5*(Math.sqrt(1-t*t)-1);return 0.5*(Math.sqrt(1-(t-=2)*t)+1);};Ease.bounceIn=function(t){return 1-Ease.bounceOut(1-t);};Ease.bounceOut=function(t){if(t<1/2.75){return(7.5625*t*t);}else if(t<2/2.75){return(7.5625*(t-=1.5/2.75)*t+0.75);}else if(t<2.5/2.75){return(7.5625*(t-=2.25/2.75)*t+0.9375);}else{return(7.5625*(t-=2.625/2.75)*t+0.984375);}};Ease.bounceInOut=function(t){if(t<0.5)return Ease.bounceIn(t*2)*.5;return Ease.bounceOut(t*2-1)*0.5+0.5;};Ease.getElasticIn=function(amplitude,period){var pi2=Math.PI*2;return function(t){if(t==0||t==1)return t;var s=period/pi2*Math.asin(1/amplitude);return-(amplitude*Math.pow(2,10*(t-=1))*Math.sin((t-s)*pi2/period));};};Ease.elasticIn=Ease.getElasticIn(1,0.3);Ease.getElasticOut=function(amplitude,period){var pi2=Math.PI*2;return function(t){if(t==0||t==1)return t;var s=period/pi2*Math.asin(1/amplitude);return(amplitude*Math.pow(2,-10*t)*Math.sin((t-s)*pi2/period)+1);};};Ease.elasticOut=Ease.getElasticOut(1,0.3);Ease.getElasticInOut=function(amplitude,period){var pi2=Math.PI*2;return function(t){var s=period/pi2*Math.asin(1/amplitude);if((t*=2)<1)return-0.5*(amplitude*Math.pow(2,10*(t-=1))*Math.sin((t-s)*pi2/period));return amplitude*Math.pow(2,-10*(t-=1))*Math.sin((t-s)*pi2/period)*0.5+1;};};Ease.elasticInOut=Ease.getElasticInOut(1,0.3*1.5);createjs.Ease=Ease;}());this.createjs=this.createjs||{};(function(){"use strict";function MotionGuidePlugin(){throw("MotionGuidePlugin cannot be instantiated.")};MotionGuidePlugin.priority=0;MotionGuidePlugin._rotOffS;MotionGuidePlugin._rotOffE;MotionGuidePlugin._rotNormS;MotionGuidePlugin._rotNormE;MotionGuidePlugin.install=function(){createjs.Tween.installPlugin(MotionGuidePlugin,["guide","x","y","rotation"]);return createjs.Tween.IGNORE;};MotionGuidePlugin.init=function(tween,prop,value){var target=tween.target;if(!target.hasOwnProperty("x")){target.x=0;}
if(!target.hasOwnProperty("y")){target.y=0;}
if(!target.hasOwnProperty("rotation")){target.rotation=0;}
if(prop=="rotation"){tween.__needsRot=true;}
return prop=="guide"?null:value;};MotionGuidePlugin.step=function(tween,prop,startValue,endValue,injectProps){if(prop=="rotation"){tween.__rotGlobalS=startValue;tween.__rotGlobalE=endValue;MotionGuidePlugin.testRotData(tween,injectProps);}
if(prop!="guide"){return endValue;}
var temp,data=endValue;if(!data.hasOwnProperty("path")){data.path=[];}
var path=data.path;if(!data.hasOwnProperty("end")){data.end=1;}
if(!data.hasOwnProperty("start")){data.start=(startValue&&startValue.hasOwnProperty("end")&&startValue.path===path)?startValue.end:0;}
if(data.hasOwnProperty("_segments")&&data._length){return endValue;}
var l=path.length;var accuracy=10;if(l>=6&&(l-2)%4==0){data._segments=[];data._length=0;for(var i=2;i<l;i+=4){var sx=path[i-2],sy=path[i-1];var cx=path[i+0],cy=path[i+1];var ex=path[i+2],ey=path[i+3];var oldX=sx,oldY=sy;var tempX,tempY,total=0;var sublines=[];for(var j=1;j<=accuracy;j++){var t=j/accuracy;var inv=1-t;tempX=inv*inv*sx+2*inv*t*cx+t*t*ex;tempY=inv*inv*sy+2*inv*t*cy+t*t*ey;total+=sublines[sublines.push(Math.sqrt((temp=tempX-oldX)*temp+(temp=tempY-oldY)*temp))-1];oldX=tempX;oldY=tempY;}
data._segments.push(total);data._segments.push(sublines);data._length+=total;}}else{throw("invalid 'path' data, please see documentation for valid paths");}
temp=data.orient;data.orient=true;var o={};MotionGuidePlugin.calc(data,data.start,o);tween.__rotPathS=Number(o.rotation.toFixed(5));MotionGuidePlugin.calc(data,data.end,o);tween.__rotPathE=Number(o.rotation.toFixed(5));data.orient=false;MotionGuidePlugin.calc(data,data.end,injectProps);data.orient=temp;if(!data.orient){return endValue;}
tween.__guideData=data;MotionGuidePlugin.testRotData(tween,injectProps);return endValue;};MotionGuidePlugin.testRotData=function(tween,injectProps){if(tween.__rotGlobalS===undefined||tween.__rotGlobalE===undefined){if(tween.__needsRot){return;}
if(tween._curQueueProps.rotation!==undefined){tween.__rotGlobalS=tween.__rotGlobalE=tween._curQueueProps.rotation;}else{tween.__rotGlobalS=tween.__rotGlobalE=injectProps.rotation=tween.target.rotation||0;}}
if(tween.__guideData===undefined){return;}
var data=tween.__guideData;var rotGlobalD=tween.__rotGlobalE-tween.__rotGlobalS;var rotPathD=tween.__rotPathE-tween.__rotPathS;var rot=rotGlobalD-rotPathD;if(data.orient=="auto"){if(rot>180){rot-=360;}else if(rot<-180){rot+=360;}}else if(data.orient=="cw"){while(rot<0){rot+=360;}
if(rot==0&&rotGlobalD>0&&rotGlobalD!=180){rot+=360;}}else if(data.orient=="ccw"){rot=rotGlobalD-((rotPathD>180)?(360-rotPathD):(rotPathD));while(rot>0){rot-=360;}
if(rot==0&&rotGlobalD<0&&rotGlobalD!=-180){rot-=360;}}
data.rotDelta=rot;data.rotOffS=tween.__rotGlobalS-tween.__rotPathS;tween.__rotGlobalS=tween.__rotGlobalE=tween.__guideData=tween.__needsRot=undefined;};MotionGuidePlugin.tween=function(tween,prop,value,startValues,endValues,ratio,wait,end){var data=endValues.guide;if(data==undefined||data===startValues.guide){return value;}
if(data.lastRatio!=ratio){var t=((data.end-data.start)*(wait?data.end:ratio)+data.start);MotionGuidePlugin.calc(data,t,tween.target);switch(data.orient){case "cw":case "ccw":case "auto":tween.target.rotation+=data.rotOffS+data.rotDelta*ratio;break;case "fixed":default:tween.target.rotation+=data.rotOffS;break;}
data.lastRatio=ratio;}
if(prop=="rotation"&&((!data.orient)||data.orient=="false")){return value;}
return tween.target[prop];};MotionGuidePlugin.calc=function(data,ratio,target){if(data._segments==undefined){throw("Missing critical pre-calculated information, please file a bug");}
if(target==undefined){target={x:0,y:0,rotation:0};}
var seg=data._segments;var path=data.path;var pos=data._length*ratio;var cap=seg.length-2;var n=0;while(pos>seg[n]&&n<cap){pos-=seg[n];n+=2;}
var sublines=seg[n+1];var i=0;cap=sublines.length-1;while(pos>sublines[i]&&i<cap){pos-=sublines[i];i++;}
var t=(i/++cap)+(pos/(cap*sublines[i]));n=(n*2)+2;var inv=1-t;target.x=inv*inv*path[n-2]+2*inv*t*path[n+0]+t*t*path[n+2];target.y=inv*inv*path[n-1]+2*inv*t*path[n+1]+t*t*path[n+3];if(data.orient){target.rotation=57.2957795*Math.atan2((path[n+1]-path[n-1])*inv+(path[n+3]-path[n+1])*t,(path[n+0]-path[n-2])*inv+(path[n+2]-path[n+0])*t);}
return target;};createjs.MotionGuidePlugin=MotionGuidePlugin;}());this.createjs=this.createjs||{};(function(){"use strict";var s=createjs.TweenJS=createjs.TweenJS||{};s.version="0.6.2";s.buildDate="Thu, 26 Nov 2015 20:44:31 GMT";})();