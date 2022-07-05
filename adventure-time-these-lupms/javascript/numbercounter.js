function numbercounter(_from,until,time){PIXI.Container.call(this);this.init(_from,until,time);}
numbercounter.prototype=new foxmovieclip();numbercounter.prototype.init=function(_from,until,time){if(_from){}else{_from=0;}
if(until){}else{until=100;}
if(time){}else{time=30;}
this.a=addText("",20,"#000000",undefined,"left");this.addChild(this.a);this.n1=this.nnow=_from;this.n2=until;if(!time){this.countstep=0;}else{this.countstep=Math.max(1,Math.round((this.n2-this.n1)/time));}
this.added();}
numbercounter.prototype.added=function(){if(!this.countstep){this.a.setText(this.n2);this.popme();}else{this.a.setText(this.n1);}
arClips.push(this);}
numbercounter.prototype.loop=function(){this.counting();}
numbercounter.prototype.counting=function(){if(this.nnow!=this.n2){if(this.n1<this.n2){this.nnow=Math.min(this.n2,this.nnow+this.countstep);}else{this.nnow=Math.max(this.n2,this.nnow+this.countstep);}
this.a.setText(this.nnow);soundPlay("zcount");if(this.nnow==this.n2)
this.popme();}}
numbercounter.prototype.popme=function(){soundPlay("zpop");}