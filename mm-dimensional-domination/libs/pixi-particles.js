/*!pixi-particles 1.6.8*/if(!Array.prototype.shuffle){Object.defineProperty(Array.prototype,'shuffle',{enumerable:false,writable:false,value:function(){for(var j,x,i=this.length;i;j=Math.floor(Math.random()*i),x=this[--i],this[i]=this[j],this[j]=x);return this;}});}
if(!Array.prototype.random){Object.defineProperty(Array.prototype,'random',{enumerable:false,writable:false,value:function(){return this[Math.floor(Math.random()*this.length)];}});}
(function(){"use strict";var global=typeof window!=='undefined'?window:GLOBAL;var particles={};if(typeof module!=='undefined'&&module.exports){if(typeof PIXI==='undefined'){require('pixi.js');}
module.exports=particles;}
else if(typeof PIXI==='undefined'){if(true){throw "pixi-particles requires pixi.js to be loaded first";}else{throw "Requires pixi.js";}}
global.PIXI.particles=global.PIXI.particles||particles;}());(function(PIXI,undefined){"use strict";var BLEND_MODES=PIXI.BLEND_MODES||PIXI.blendModes;var Texture=PIXI.Texture;var ParticleUtils={};var DEG_TO_RADS=ParticleUtils.DEG_TO_RADS=Math.PI/180;ParticleUtils.useAPI3=false;var version=PIXI["VER"+"SION"];if(version&&parseInt(version.substring(0,version.indexOf(".")))>=3){ParticleUtils.useAPI3=true;}
var empty=ParticleUtils.EMPTY_TEXTURE=null;if(ParticleUtils.useAPI3){empty=ParticleUtils.EMPTY_TEXTURE=Texture.EMPTY;empty.on=empty.destroy=empty.once=empty.emit=function(){};}else{var canvas=document.createElement("canvas");canvas.width=canvas.height=1;empty=ParticleUtils.EMPTY_TEXTURE=PIXI.Texture.fromCanvas(canvas);empty.baseTexture.hasLoaded=false;empty.on=empty.destroy=empty.once=empty.emit=function(){};}
ParticleUtils.rotatePoint=function(angle,p){if(!angle)return;angle*=DEG_TO_RADS;var s=Math.sin(angle);var c=Math.cos(angle);var xnew=p.x*c-p.y*s;var ynew=p.x*s+p.y*c;p.x=xnew;p.y=ynew;};ParticleUtils.combineRGBComponents=function(r,g,b){return r<<16|g<<8|b;};ParticleUtils.normalize=function(point){var oneOverLen=1/ParticleUtils.length(point);point.x*=oneOverLen;point.y*=oneOverLen;};ParticleUtils.scaleBy=function(point,value){point.x*=value;point.y*=value;};ParticleUtils.length=function(point){return Math.sqrt(point.x*point.x+point.y*point.y);};ParticleUtils.hexToRGB=function(color,output){if(output)
output.length=0;else
output=[];if(color.charAt(0)=="#")
color=color.substr(1);else if(color.indexOf("0x")===0)
color=color.substr(2);var alpha;if(color.length==8){alpha=color.substr(0,2);color=color.substr(2);}
output.push(parseInt(color.substr(0,2),16));output.push(parseInt(color.substr(2,2),16));output.push(parseInt(color.substr(4,2),16));if(alpha)
output.push(parseInt(alpha,16));return output;};ParticleUtils.generateEase=function(segments){var qty=segments.length;var oneOverQty=1/qty;var simpleEase=function(time){var t,s;var i=(qty*time)|0;t=(time-(i*oneOverQty))*qty;s=segments[i]||segments[qty-1];return(s.s+t*(2*(1-t)*(s.cp-s.s)+t*(s.e-s.s)));};return simpleEase;};ParticleUtils.getBlendMode=function(name){if(!name)return BLEND_MODES.NORMAL;name=name.toUpperCase();while(name.indexOf(" ")>=0)
name=name.replace(" ","_");return BLEND_MODES[name]||BLEND_MODES.NORMAL;};PIXI.particles.ParticleUtils=ParticleUtils;}(PIXI));(function(PIXI,undefined){"use strict";var ParticleUtils=PIXI.particles.ParticleUtils;var Sprite=PIXI.Sprite;var useAPI3=ParticleUtils.useAPI3;var Particle=function(emitter){if(useAPI3){Sprite.call(this);}else{Sprite.call(this,ParticleUtils.EMPTY_TEXTURE);}
this.emitter=emitter;this.anchor.x=this.anchor.y=0.5;this.velocity=new PIXI.Point();this.maxLife=0;this.age=0;this.ease=null;this.extraData=null;this.startAlpha=0;this.endAlpha=0;this.startSpeed=0;this.endSpeed=0;this.acceleration=new PIXI.Point();this.startScale=0;this.endScale=0;this.startColor=null;this._sR=0;this._sG=0;this._sB=0;this.endColor=null;this._eR=0;this._eG=0;this._eB=0;this._doAlpha=false;this._doScale=false;this._doSpeed=false;this._doAcceleration=false;this._doColor=false;this._doNormalMovement=false;this._oneOverLife=0;this.next=null;this.prev=null;this.init=this.init;this.Particle_init=this.Particle_init;this.update=this.update;this.Particle_update=this.Particle_update;this.applyArt=this.applyArt;this.kill=this.kill;};var p=Particle.prototype=Object.create(Sprite.prototype);p.init=p.Particle_init=function(){this.age=0;this.velocity.x=this.startSpeed;this.velocity.y=0;ParticleUtils.rotatePoint(this.rotation,this.velocity);if(this.noRotation){this.rotation=0;}else{this.rotation*=ParticleUtils.DEG_TO_RADS;}
this.rotationSpeed*=ParticleUtils.DEG_TO_RADS;this.alpha=this.startAlpha;this.scale.x=this.scale.y=this.startScale;if(this.startColor){this._sR=this.startColor[0];this._sG=this.startColor[1];this._sB=this.startColor[2];if(this.endColor){this._eR=this.endColor[0];this._eG=this.endColor[1];this._eB=this.endColor[2];}}
this._doAlpha=this.startAlpha!=this.endAlpha;this._doSpeed=this.startSpeed!=this.endSpeed;this._doScale=this.startScale!=this.endScale;this._doColor=!!this.endColor;this._doAcceleration=this.acceleration.x!==0||this.acceleration.y!==0;this._doNormalMovement=this._doSpeed||this.startSpeed!==0||this._doAcceleration;this._oneOverLife=1/this.maxLife;this.tint=ParticleUtils.combineRGBComponents(this._sR,this._sG,this._sB);this.visible=true;};p.applyArt=function(art){if(useAPI3){this.texture=art||ParticleUtils.EMPTY_TEXTURE;}else{this.setTexture(art||ParticleUtils.EMPTY_TEXTURE);}};p.update=p.Particle_update=function(delta){this.age+=delta;if(this.age>=this.maxLife){this.kill();return-1;}
var lerp=this.age*this._oneOverLife;if(this.ease){if(this.ease.length==4){lerp=this.ease(lerp,0,1,1);}else{lerp=this.ease(lerp);}}
if(this._doAlpha)
this.alpha=(this.endAlpha-this.startAlpha)*lerp+this.startAlpha;if(this._doScale){var scale=(this.endScale-this.startScale)*lerp+this.startScale;this.scale.x=this.scale.y=scale;}
if(this._doNormalMovement){if(this._doSpeed){var speed=(this.endSpeed-this.startSpeed)*lerp+this.startSpeed;ParticleUtils.normalize(this.velocity);ParticleUtils.scaleBy(this.velocity,speed);}else if(this._doAcceleration){this.velocity.x+=this.acceleration.x*delta;this.velocity.y+=this.acceleration.y*delta;}
this.position.x+=this.velocity.x*delta;this.position.y+=this.velocity.y*delta;}
if(this._doColor){var r=(this._eR-this._sR)*lerp+this._sR;var g=(this._eG-this._sG)*lerp+this._sG;var b=(this._eB-this._sB)*lerp+this._sB;this.tint=ParticleUtils.combineRGBComponents(r,g,b);}
if(this.rotationSpeed!==0){this.rotation+=this.rotationSpeed*delta;}else if(this.acceleration&&!this.noRotation){this.rotation=Math.atan2(this.velocity.y,this.velocity.x);}
return lerp;};p.kill=function(){this.emitter.recycle(this);};p.Sprite_Destroy=Sprite.prototype.destroy;p.destroy=function(){if(this.parent)
this.parent.removeChild(this);if(this.Sprite_Destroy)
this.Sprite_Destroy();this.emitter=this.velocity=this.startColor=this.endColor=this.ease=this.next=this.prev=null;};Particle.parseArt=function(art){var i;for(i=art.length;i>=0;--i){if(typeof art[i]=="string")
art[i]=PIXI.Texture.fromImage(art[i]);}
if(true){for(i=art.length-1;i>0;--i){if(art[i].baseTexture!=art[i-1].baseTexture){if(window.console)
console.warn("PixiParticles: using particle textures from different images may hinder performance in WebGL");break;}}}
return art;};Particle.parseData=function(extraData){return extraData;};PIXI.particles.Particle=Particle;}(PIXI));(function(PIXI,undefined){"use strict";var ParticleUtils=PIXI.particles.ParticleUtils,Particle=PIXI.particles.Particle,ParticleContainer=PIXI.particles.ParticleContainer||PIXI.ParticleContainer;var Emitter=function(particleParent,particleImages,config){this._particleConstructor=Particle;this.particleImages=null;this.startAlpha=1;this.endAlpha=1;this.startSpeed=0;this.endSpeed=0;this.acceleration=null;this.startScale=1;this.endScale=1;this.minimumScaleMultiplier=1;this.startColor=null;this.endColor=null;this.minLifetime=0;this.maxLifetime=0;this.minStartRotation=0;this.maxStartRotation=0;this.noRotation=false;this.minRotationSpeed=0;this.maxRotationSpeed=0;this.particleBlendMode=0;this.customEase=null;this.extraData=null;this._frequency=1;this.maxParticles=1000;this.emitterLifetime=-1;this.spawnPos=null;this.spawnType=null;this._spawnFunc=null;this.spawnRect=null;this.spawnCircle=null;this.particlesPerWave=1;this.particleSpacing=0;this.angleStart=0;this.rotation=0;this.ownerPos=null;this._prevEmitterPos=null;this._prevPosIsValid=false;this._posChanged=false;this._parentIsPC=false;this._parent=null;this.addAtBack=false;this.particleCount=0;this._emit=false;this._spawnTimer=0;this._emitterLife=-1;this._activeParticlesFirst=null;this._activeParticlesLast=null;this._poolFirst=null;this._origConfig=null;this._origArt=null;this.parent=particleParent;if(particleImages&&config)
this.init(particleImages,config);this.recycle=this.recycle;this.update=this.update;this.rotate=this.rotate;this.updateSpawnPos=this.updateSpawnPos;this.updateOwnerPos=this.updateOwnerPos;};var p=Emitter.prototype={};var helperPoint=new PIXI.Point();Object.defineProperty(p,"frequency",{get:function(){return this._frequency;},set:function(value){if(typeof value=="number"&&value>0)
this._frequency=value;else
this._frequency=1;}});Object.defineProperty(p,"particleConstructor",{get:function(){return this._particleConstructor;},set:function(value){if(value!=this._particleConstructor){this._particleConstructor=value;this.cleanup();for(var particle=this._poolFirst;particle;particle=particle.next){particle.destroy();}
this._poolFirst=null;if(this._origConfig&&this._origArt)
this.init(this._origArt,this._origConfig);}}});Object.defineProperty(p,"parent",{get:function(){return this._parent;},set:function(value){if(this._parentIsPC){for(var particle=this._poolFirst;particle;particle=particle.next){if(particle.parent)
particle.parent.removeChild(particle);}}
this.cleanup();this._parent=value;this._parentIsPC=ParticleContainer&&value&&value instanceof ParticleContainer;}});p.init=function(art,config){if(!art||!config)
return;this.cleanup();this._origConfig=config;this._origArt=art;art=Array.isArray(art)?art.slice():[art];var partClass=this._particleConstructor;this.particleImages=partClass.parseArt?partClass.parseArt(art):art;if(config.alpha){this.startAlpha=config.alpha.start;this.endAlpha=config.alpha.end;}else
this.startAlpha=this.endAlpha=1;if(config.speed){this.startSpeed=config.speed.start;this.endSpeed=config.speed.end;}else
this.startSpeed=this.endSpeed=0;var acceleration=config.acceleration;if(acceleration&&(acceleration.x||acceleration.y)){this.endSpeed=this.startSpeed;this.acceleration=new PIXI.Point(acceleration.x,acceleration.y);}else
this.acceleration=new PIXI.Point();if(config.scale){this.startScale=config.scale.start;this.endScale=config.scale.end;this.minimumScaleMultiplier=config.scale.minimumScaleMultiplier||1;}else
this.startScale=this.endScale=this.minimumScaleMultiplier=1;if(config.color){this.startColor=ParticleUtils.hexToRGB(config.color.start);if(config.color.start!=config.color.end){this.endColor=ParticleUtils.hexToRGB(config.color.end);}else
this.endColor=null;}
if(config.startRotation){this.minStartRotation=config.startRotation.min;this.maxStartRotation=config.startRotation.max;}else
this.minStartRotation=this.maxStartRotation=0;if(config.noRotation&&(this.minStartRotation||this.maxStartRotation)){this.noRotation=!!config.noRotation;}else
this.noRotation=false;if(config.rotationSpeed){this.minRotationSpeed=config.rotationSpeed.min;this.maxRotationSpeed=config.rotationSpeed.max;}else
this.minRotationSpeed=this.maxRotationSpeed=0;this.minLifetime=config.lifetime.min;this.maxLifetime=config.lifetime.max;this.particleBlendMode=ParticleUtils.getBlendMode(config.blendMode);if(config.ease){this.customEase=typeof config.ease=="function"?config.ease:ParticleUtils.generateEase(config.ease);}else
this.customEase=null;if(partClass.parseData)
this.extraData=partClass.parseData(config.extraData);else
this.extraData=config.extraData||null;this.spawnRect=this.spawnCircle=null;this.particlesPerWave=1;this.particleSpacing=0;this.angleStart=0;var spawnCircle;switch(config.spawnType){case "rect":this.spawnType="rect";this._spawnFunc=this._spawnRect;var spawnRect=config.spawnRect;this.spawnRect=new PIXI.Rectangle(spawnRect.x,spawnRect.y,spawnRect.w,spawnRect.h);break;case "circle":this.spawnType="circle";this._spawnFunc=this._spawnCircle;spawnCircle=config.spawnCircle;this.spawnCircle=new PIXI.Circle(spawnCircle.x,spawnCircle.y,spawnCircle.r);break;case "ring":this.spawnType="ring";this._spawnFunc=this._spawnRing;spawnCircle=config.spawnCircle;this.spawnCircle=new PIXI.Circle(spawnCircle.x,spawnCircle.y,spawnCircle.r);this.spawnCircle.minRadius=spawnCircle.minR;break;case "burst":this.spawnType="burst";this._spawnFunc=this._spawnBurst;this.particlesPerWave=config.particlesPerWave;this.particleSpacing=config.particleSpacing;this.angleStart=config.angleStart?config.angleStart:0;break;case "point":this.spawnType="point";this._spawnFunc=this._spawnPoint;break;default:this.spawnType="point";this._spawnFunc=this._spawnPoint;break;}
this.frequency=config.frequency;this.emitterLifetime=config.emitterLifetime||-1;this.maxParticles=config.maxParticles>0?config.maxParticles:1000;this.addAtBack=!!config.addAtBack;this.rotation=0;this.ownerPos=new PIXI.Point();this.spawnPos=new PIXI.Point(config.pos.x,config.pos.y);this._prevEmitterPos=this.spawnPos.clone();this._prevPosIsValid=false;this._spawnTimer=0;this.emit=config.emit===undefined?true:!!config.emit;};p.recycle=function(particle){if(particle.next)
particle.next.prev=particle.prev;if(particle.prev)
particle.prev.next=particle.next;if(particle==this._activeParticlesLast)
this._activeParticlesLast=particle.prev;if(particle==this._activeParticlesFirst)
this._activeParticlesFirst=particle.next;particle.prev=null;particle.next=this._poolFirst;this._poolFirst=particle;if(this._parentIsPC){particle.alpha=0;particle.visible=false;}else{if(particle.parent)
particle.parent.removeChild(particle);}
--this.particleCount;};p.rotate=function(newRot){if(this.rotation==newRot)return;var diff=newRot-this.rotation;this.rotation=newRot;ParticleUtils.rotatePoint(diff,this.spawnPos);this._posChanged=true;};p.updateSpawnPos=function(x,y){this._posChanged=true;this.spawnPos.x=x;this.spawnPos.y=y;};p.updateOwnerPos=function(x,y){this._posChanged=true;this.ownerPos.x=x;this.ownerPos.y=y;};p.resetPositionTracking=function(){this._prevPosIsValid=false;};Object.defineProperty(p,"emit",{get:function(){return this._emit;},set:function(value){this._emit=!!value;this._emitterLife=this.emitterLifetime;}});p.update=function(delta){if(!this._parent)return;var i,particle,next;for(particle=this._activeParticlesFirst;particle;particle=next){next=particle.next;particle.update(delta);}
var prevX,prevY;if(this._prevPosIsValid){prevX=this._prevEmitterPos.x;prevY=this._prevEmitterPos.y;}
var curX=this.ownerPos.x+this.spawnPos.x;var curY=this.ownerPos.y+this.spawnPos.y;if(this.emit){this._spawnTimer-=delta;while(this._spawnTimer<=0){if(this._emitterLife>0){this._emitterLife-=this._frequency;if(this._emitterLife<=0){this._spawnTimer=0;this._emitterLife=0;this.emit=false;break;}}
if(this.particleCount>=this.maxParticles){this._spawnTimer+=this._frequency;continue;}
var lifetime;if(this.minLifetime==this.maxLifetime)
lifetime=this.minLifetime;else
lifetime=Math.random()*(this.maxLifetime-this.minLifetime)+this.minLifetime;if(-this._spawnTimer<lifetime){var emitPosX,emitPosY;if(this._prevPosIsValid&&this._posChanged){var lerp=1+this._spawnTimer/delta;emitPosX=(curX-prevX)*lerp+prevX;emitPosY=(curY-prevY)*lerp+prevY;}else
{emitPosX=curX;emitPosY=curY;}
i=0;for(var len=Math.min(this.particlesPerWave,this.maxParticles-this.particleCount);i<len;++i){var p;if(this._poolFirst){p=this._poolFirst;this._poolFirst=this._poolFirst.next;p.next=null;}else{p=new this.particleConstructor(this);}
if(this.particleImages.length>1){p.applyArt(this.particleImages.random());}else{p.applyArt(this.particleImages[0]);}
p.startAlpha=this.startAlpha;p.endAlpha=this.endAlpha;p.startSpeed=this.startSpeed;p.endSpeed=this.endSpeed;p.acceleration.x=this.acceleration.x;p.acceleration.y=this.acceleration.y;if(this.minimumScaleMultiplier!=1){var rand=Math.random()*(1-this.minimumScaleMultiplier)+this.minimumScaleMultiplier;p.startScale=this.startScale*rand;p.endScale=this.endScale*rand;}else{p.startScale=this.startScale;p.endScale=this.endScale;}
p.startColor=this.startColor;p.endColor=this.endColor;if(this.minRotationSpeed==this.maxRotationSpeed)
p.rotationSpeed=this.minRotationSpeed;else
p.rotationSpeed=Math.random()*(this.maxRotationSpeed-this.minRotationSpeed)+this.minRotationSpeed;p.noRotation=this.noRotation;p.maxLife=lifetime;p.blendMode=this.particleBlendMode;p.ease=this.customEase;p.extraData=this.extraData;this._spawnFunc(p,emitPosX,emitPosY,i);p.init();p.update(-this._spawnTimer);if(!this._parentIsPC||!p.parent){if(this.addAtBack)
this._parent.addChildAt(p,0);else
this._parent.addChild(p);}else{var children=this._parent.children;if(children[0]==p)
children.shift();else if(children[children.length-1]==p)
children.pop();else{var index=children.indexOf(p);children.splice(index,1);}
if(this.addAtBack)
children.unshift(p);else
children.push(p);}
if(this._activeParticlesLast){this._activeParticlesLast.next=p;p.prev=this._activeParticlesLast;this._activeParticlesLast=p;}else{this._activeParticlesLast=this._activeParticlesFirst=p;}
++this.particleCount;}}
this._spawnTimer+=this._frequency;}}
if(this._posChanged){this._prevEmitterPos.x=curX;this._prevEmitterPos.y=curY;this._prevPosIsValid=true;this._posChanged=false;}};p._spawnPoint=function(p,emitPosX,emitPosY,i){if(this.minStartRotation==this.maxStartRotation)
p.rotation=this.minStartRotation+this.rotation;else
p.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation;p.position.x=emitPosX;p.position.y=emitPosY;};p._spawnRect=function(p,emitPosX,emitPosY,i){if(this.minStartRotation==this.maxStartRotation)
p.rotation=this.minStartRotation+this.rotation;else
p.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation;helperPoint.x=Math.random()*this.spawnRect.width+this.spawnRect.x;helperPoint.y=Math.random()*this.spawnRect.height+this.spawnRect.y;if(this.rotation!==0)
ParticleUtils.rotatePoint(this.rotation,helperPoint);p.position.x=emitPosX+helperPoint.x;p.position.y=emitPosY+helperPoint.y;};p._spawnCircle=function(p,emitPosX,emitPosY,i){if(this.minStartRotation==this.maxStartRotation)
p.rotation=this.minStartRotation+this.rotation;else
p.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+
this.minStartRotation+this.rotation;helperPoint.x=Math.random()*this.spawnCircle.radius;helperPoint.y=0;ParticleUtils.rotatePoint(Math.random()*360,helperPoint);helperPoint.x+=this.spawnCircle.x;helperPoint.y+=this.spawnCircle.y;if(this.rotation!==0)
ParticleUtils.rotatePoint(this.rotation,helperPoint);p.position.x=emitPosX+helperPoint.x;p.position.y=emitPosY+helperPoint.y;};p._spawnRing=function(p,emitPosX,emitPosY,i){var spawnCircle=this.spawnCircle;if(this.minStartRotation==this.maxStartRotation)
p.rotation=this.minStartRotation+this.rotation;else
p.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+
this.minStartRotation+this.rotation;if(spawnCircle.minRadius==spawnCircle.radius){helperPoint.x=Math.random()*(spawnCircle.radius-spawnCircle.minRadius)+
spawnCircle.minRadius;}else
helperPoint.x=spawnCircle.radius;helperPoint.y=0;var angle=Math.random()*360;p.rotation+=angle;ParticleUtils.rotatePoint(angle,helperPoint);helperPoint.x+=this.spawnCircle.x;helperPoint.y+=this.spawnCircle.y;if(this.rotation!==0)
ParticleUtils.rotatePoint(this.rotation,helperPoint);p.position.x=emitPosX+helperPoint.x;p.position.y=emitPosY+helperPoint.y;};p._spawnBurst=function(p,emitPosX,emitPosY,i){if(this.particleSpacing===0)
p.rotation=Math.random()*360;else
p.rotation=this.angleStart+(this.particleSpacing*i)+this.rotation;p.position.x=emitPosX;p.position.y=emitPosY;};p.cleanup=function(){var particle,next;for(particle=this._activeParticlesFirst;particle;particle=next){next=particle.next;this.recycle(particle);if(particle.parent)
particle.parent.removeChild(particle);}
this._activeParticlesFirst=this._activeParticlesLast=null;this.particleCount=0;};p.destroy=function(){this.cleanup();var next;for(var particle=this._poolFirst;particle;particle=next){next=particle.next;particle.destroy();}
this._poolFirst=this._parent=this.particleImages=this.spawnPos=this.ownerPos=this.startColor=this.endColor=this.customEase=null;};PIXI.particles.Emitter=Emitter;}(PIXI));(function(undefined){var global=typeof window!=='undefined'?window:GLOBAL;if(typeof cloudkid==="undefined"){global.cloudkid={};}
Object.defineProperties(global.cloudkid,{AnimatedParticle:{get:function(){if(true){console.warn("cloudkid namespace is deprecated, please use PIXI.particles");}
return PIXI.particles.AnimatedParticle;}},Emitter:{get:function(){if(true){console.warn("cloudkid namespace is deprecated, please use PIXI.particles");}
return PIXI.particles.Emitter;}},Particle:{get:function(){if(true){console.warn("cloudkid namespace is deprecated, please use PIXI.particles");}
return PIXI.particles.Particle;}},ParticleUtils:{get:function(){if(true){console.warn("cloudkid namespace is deprecated, please use PIXI.particles");}
return PIXI.particles.ParticleUtils;}},PathParticle:{get:function(){if(true){console.warn("cloudkid namespace is deprecated, please use PIXI.particles");}
return PIXI.particles.PathParticle;}}});}());