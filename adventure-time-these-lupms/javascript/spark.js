function spark(){PIXI.Container.call(this);this.init();}
spark.prototype=new foxmovieclip();spark.prototype.init=function(){var a=addObj("spark");this.addChild(a);}
spark.prototype.added=function(){this.ynormal=this.y;this.yfloat=this.y-40*scG;this.visible=false;this.d=fox.random(30);this.flip=true;arClips.push(this);}
spark.prototype.loop=function(){this.d--;if(!this.d){this.visible=true;this.scale.x=this.scale.y=0.1;this.x=-25*scG+fox.random(50*scG);}
if(this.d<0){if(this.flip){this.scale.x=this.scale.y=1.4*this.scale.x;if(this.scale.x>1){this.scale.x=this.scale.y=1;this.flip=false;}}else{this.scale.x=this.scale.y=0.7*this.scale.x;if(this.scale.x<0.1){this.scale.x=this.scale.y=0.1;this.flip=true;this.x=-25*scG+fox.random(50*scG);if(!g.slow)
this.die();}}
this.y=(g.floating)?this.yfloat:this.ynormal;}}