function foxmovieclip(){PIXI.Container.call(this);this.init();}
foxmovieclip.prototype=Object.create(PIXI.Container.prototype);foxmovieclip.prototype.constructor=foxmovieclip;foxmovieclip.prototype.init=function(){this.a,this.zone,this.it,this.sh;this.energy,this.energymax,this.wid,this.hei,this.hwid,this.hhei,this.d;this.act,this.actnow;this.z={};if(!this.a){this.a=new PIXI.Container()
this.addChild(this.a);}
this.energy=this.energymax=100
this.setsize(0,0)
this.z={}
this.zone?(this.zone.visible=false):(undefined);this.added();}
foxmovieclip.prototype.showact=function(){if(this.act!=this.actnow){this.actnow=this.act;}}
foxmovieclip.prototype.setsize=function(ww,hh){this.wid=ww;this.hei=hh;this.hwid=this.wid/2;this.hhei=this.hei/2;}
foxmovieclip.prototype.setzone=function(xx,yy,wid,hei,draw){this.z.x=this.x+xx
this.z.y=this.y+yy
this.zone.x=xx
this.zone.y=yy
this.z.width=this.zone.width=this.wid
this.z.height=this.zone.height=this.hei
draw?(this.zone.visible=true):(undefined)}
foxmovieclip.prototype.added=function(){this.setlisteners()}
foxmovieclip.prototype.loop=function(){}
foxmovieclip.prototype.removed=function(){}
foxmovieclip.prototype.cekdie=function(){!this.energy?(this.die()):(undefined)}
foxmovieclip.prototype.addshadow=function(nama){this.sh=addObj(nama,0,0,0.5*scG);g.m1.addChild(this.sh)
this.updateshadow();}
foxmovieclip.prototype.updateshadow=function(){this.sh.x=this.x
this.sh.y=this.y}
foxmovieclip.prototype.setlisteners=function(){}
foxmovieclip.prototype.enter_frame=function(){!g.paused?(this.loop()):(undefined)}
foxmovieclip.prototype.removed_from_stage=function(){this.removed()
this.clearlistener()
this.sh?(g.m1.removeChild(this.sh)):(undefined)}
foxmovieclip.prototype.clearlistener=function(){}
foxmovieclip.prototype.die=function(){fox.removevalue(this,arClips);if(this.parent){this.parent.removeChild(this)}}