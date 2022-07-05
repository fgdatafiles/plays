function heart(){PIXI.Container.call(this);this.init();}
heart.prototype=new foxmovieclip();heart.prototype.init=function(){this.b=new addObj("tileH",0,0,scG);this.b.setReg0();this.addChild(this.b);this.a=new addObj("heart",0,0,scG);this.a.setReg0();this.addChild(this.a);this.b.x=-5*scG;this.b.y=-5*scG;this.a.x=-5*scG;this.a.y=-5*scG;this.d=1+fox.random(30);this.a.alpha=this.b.alpha=0;this.flip=true;if(fox.random(100)>50)
this.flip=!this.flip;arClips.push(this);}
heart.prototype.loop=function(){this.b.alpha=Math.min(1,this.b.alpha+0.05);if(this.flip){this.a.alpha=Math.min(1,this.a.alpha+0.05);}else{this.a.alpha=Math.max(0,this.a.alpha-0.05);if(!this.a.alpha&&g.slow<60){this.die();}}
this.d--;if(!this.d){this.d=30+fox.random(30);this.flip=!this.flip;}}