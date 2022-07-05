function popbigscores(x1,y1,n){PIXI.Container.call(this);this.init(x1,y1,n);}
popbigscores.prototype=new foxmovieclip();popbigscores.prototype.init=function(x1,y1,n){if(x1){}else{x1=100*scG}
if(y1){}else{y1=100*scG}
if(n){}else{n=0}
this.a=new PIXI.Container();this.addChild(this.a);this.a.b=addText(String(n),35,"#FFFFFF","#FF66CC","center",300,15,fontMain,true);this.a.b.x=0;this.a.b.y=-this.a.b.height/2;this.a.addChild(this.a.b);this.x=x1;this.y=y1;this.d=30;fox.initjiggle(this.a,2,1,0.8,0.75);arClips.push(this);}
popbigscores.prototype.loop=function(){fox.jiggle(this.a);this.d--;if(!this.d){this.die()}}