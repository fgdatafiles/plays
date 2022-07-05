function lsp2(){PIXI.Container.call(this);this.init();}
lsp2.prototype=new foxmovieclip();lsp2.prototype.init=function(){this.a=new PIXI.Container();this.addChild(this.a);}
lsp2.prototype.added=function(){g.allmc.push(this);this.state=1;this.yoffset=-20*scG;this.div=1.5;this.d=3;this.tgX=this.targ.x;this.tgY=this.targ.y;this.setall();}
lsp2.prototype.loop=function(){this.cekstate();if(this.ani.img.currentFrame>=this.ani.img.totalFrames-1){this.ani.img.stop();}}
lsp2.prototype.cekstate=function(){if(this.state==1){this.move();}}
lsp2.prototype.move=function(){this.x=this.x+(this.tgX-this.x)/this.div;this.y=this.y+(this.tgY-this.y)/this.div;this.d--;if(!this.d){this.targ=g.p;this.div=2;this.tgX=this.targ.x;this.tgY=this.targ.y;}
if(this.d==-4){fox.removevalue(this,g.allmc);this.die();}}
lsp2.prototype.setall=function(){this.ani=addObj("lspattack",0,this.yoffset);this.ani.img.play();this.ani.img.animationSpeed=0.5;this.a.addChild(this.ani);if(this.tgX<this.x)this.a.scale.x=-this.a.scale.x;arClips.push(this);}