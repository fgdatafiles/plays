function pophits(x1,y1,n,sk){PIXI.Container.call(this);this.init(x1,y1,n,sk);}
pophits.prototype=new foxmovieclip();pophits.prototype.init=function(x1,y1,n,sk){if(x1){}else{x1=100*scG}
if(y1){}else{y1=100*scG}
if(n){}else{n=0}
if(sk){}else{sk=0}
this.a=new PIXI.Container();this.addChild(this.a);this.a.b=addText(String(n),30,"#FFFFFF","#FF3366","right",80,4,fontMain);this.a.b.x=-0;this.a.b.y=-32*scG;this.a.addChild(this.a.b);var tfHits=addText(getText("hits"),20,"#FFFFFF","#FF3366","left",100,4,fontMain);tfHits.x=-0;tfHits.y=-26*scG;this.a.addChild(tfHits);this.a.c=addText(String(sk),30,"#EDFF44","#FF3366","center",130,4,fontMain);this.a.c.x=0;this.a.c.y=-6*scG;this.a.addChild(this.a.c);this.x=x1;this.y=y1;this.d=40;fox.initjiggle(this,2,1,0.8,0.75)
arClips.push(this);}
pophits.prototype.loop=function(){if(!options_pause){fox.jiggle(this)
if(this.d<10){this.y-=4*scG;}
this.d--;if(!this.d){this.die()}}}