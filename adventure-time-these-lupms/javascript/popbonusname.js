function popbonusname(x1,y1,st){PIXI.Container.call(this);this.init(x1,y1,st);}
popbonusname.prototype=new foxmovieclip();popbonusname.prototype.init=function(x1,y1,st){if(x1){}else{x1=100*scG}
if(y1){}else{y1=100*scG}
if(st){}else{st=""}
this.a=new PIXI.Container();this.addChild(this.a);this.a.b=addText(String(st),25,"#FF6600","#FFFFFF","center",300,4,fontMain,true);this.a.b.x=0;this.a.b.y=-this.a.b.height/2;this.a.addChild(this.a.b);this.x=Math.max(60*scG,Math.min(g.bgwid-60*scG,x1));this.y=Math.max(60*scG,Math.min(g.bghei-60*scG,y1));this.d=60;}
popbonusname.prototype.added=function(){this.scale.x=this.scale.y=3;fox.initjiggle(this,2,1,0.8,0.75);arClips.push(this);}
popbonusname.prototype.loop=function(){fox.jiggle(this)
this.d--;if(!this.d){this.die()}}