function foxpopdisplayobject(name,xx,yy,time,jiggletime,fadeinspeed,fadeoutspeed){PIXI.Container.call(this);this.init(name,xx,yy,time,jiggletime,fadeinspeed,fadeoutspeed);}
foxpopdisplayobject.prototype=new foxmovieclip();foxpopdisplayobject.prototype.init=function(name,xx,yy,time,jiggletime,fadeinspeed,fadeoutspeed){this.d=time;this.displayobjectname=name;this.jiggle=jiggletime;this.fadein=fadeinspeed;this.fadeout=fadeoutspeed;this.x=xx;this.y=yy;arClips.push(this);}
foxpopdisplayobject.prototype.added=function(){if(this.jiggle>0)
fox.initjiggle(this);if(this.fadein>0)
this.alpha=0;var it=addObj(this.displayobjectname);if(this.displayobjectname=="lsphit"){it.img.play();it.img.animationSpeed=0.5;}
this.addChild(it);}
foxpopdisplayobject.prototype.loop=function(){if(this.jiggle>0)
fox.jiggle(this);if(this.fadein>0){this.alpha+=this.fadein;if(this.alpha>=1){this.alpha=1;this.fadein=0;}}else{this.d--;if(this.d<=0){if(this.fadeout==0){this.die();}else{this.alpha-=this.fadeout;if(this.alpha<=0)
this.die();}}}}