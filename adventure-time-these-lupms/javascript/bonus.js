function bonus(){PIXI.Container.call(this);this.init();}
bonus.prototype=new foxmovieclip();bonus.prototype.init=function(){this.a=addObj("bonus",0,-45*scG,0.5*scG);this.addChild(this.a);this.a.b=new PIXI.Container();this.a.b.y=-45*scG;this.a.addChild(this.a.b);this.totalshine=7;this.shrspacing=360/(this.totalshine+1);this.shd=this.shndelay=3;this.shn=0;}
bonus.prototype.added=function(){g.allmc.push(this);if(g.bonuslist.length>0){this.tipe=g.bonuslist.pop();}else{this.tipe=fox.getrandom("bonustype");}
if(this.tipe==1&&g.energy1>g.energy1max-10){this.tipe=2;}
if(this.tipe==3&&!g.timebonusleft){this.tipe=2;}else{g.timebonusleft--;}
if(this.tipe==4){if(g.noslow||g.slow||g.nodisco||g.disco||g.totalenemy<50){this.tipe=2;}else{g.nodisco=g.bonustime+5;}}
if(this.tipe==5){if(g.noslow||g.slow||g.nodisco||g.disco||g.totalenemy<50){this.tipe=2;}else{g.noslow=g.bonustime+5;}}
this.state=1;this.radius=18*scG;this.radius2=this.radius*this.radius;this.addshadow("spot1");var ska=2*this.radius/100/scG;this.sh.scale.x*=ska;this.sh.scale.y*=ska;this.soffset=-0.3*this.radius;this.div=5;this.d=19;this.ypos=-35*scG;this.ays=-30*scG;this.grav=3*scG;if(this.x<g.xmid){this.tx=this.x+150*scG;}else{this.tx=this.x-150*scG;}
if(this.y<g.hscreenhei){this.ty=this.y+100*scG;}else{this.ty=this.y-100*scG;}
this.xs=(this.tx-this.x)/this.d;this.ys=(this.ty-this.y)/this.d;this.setall()}
bonus.prototype.loop=function(){this.cekstate()
this.shining();}
bonus.prototype.shining=function(){this.shd--;if(!this.shd){this.shd=this.shndelay;if(this.shn<=this.totalshine){var it=addObj("shine",0,45*scG,0.5*scG);it.img.play();it.img.animationSpeed=0.5;it.rotation=fox.rad(this.shn*this.shrspacing);this.a.b.addChild(it);}
this.shn++;}}
bonus.prototype.cekstate=function(){if(this.state==1){this.move();}else if(this.state==2){fox.yfloating(this.a);this.cekhitp();this.cekdelay();}else if(this.state==3){this.fly2lsp();}}
bonus.prototype.cekdelay=function(){this.d--;if(this.d<30){this.a.visible=!this.a.visible;}
if(!this.d)
this.die();}
bonus.prototype.move=function(){this.ays+=this.grav;this.a.y+=this.ays;this.x+=this.xs;this.y+=this.ys;this.sh.x=this.x;this.sh.y=this.y+this.soffset;this.d--;if(!this.d){this.a.y=this.ypos;fox.inityfloat(this.a,3,0.5);this.d=g.bonustime;this.state=2;}}
bonus.prototype.cekhitp=function(){this.sumrad=g.pradius+this.radius;if(g.px>this.sh.x-this.sumrad){if(g.px<this.sh.x+this.sumrad){this.ry=1.25*this.sh.y;if(g.py>this.ry-this.sumrad){if(g.py<this.ry+this.sumrad){this.dx=g.px-this.sh.x;this.dy=g.py-this.ry;this.dis2=this.dx*this.dx+this.dy*this.dy;if(this.dis2<this.sumrad*this.sumrad){this.state=3;}}}}}}
bonus.prototype.fly2lsp=function(){this.x=this.x+(Math.max(0,Math.min(g.bgwid,g.p.x))-this.x)/this.div;this.y=this.y+(Math.max(0,Math.min(g.bghei,g.p.y))-this.y)/this.div;this.div=Math.max(1.2*scG,this.div*0.9);this.sh.x=this.x;this.sh.y=this.y+this.soffset;if(Math.abs(g.p.x-this.x)<12*scG&&Math.abs(g.p.y-this.y)<12*scG)
this.gotit();}
bonus.prototype.gotit=function(){if(this.tipe==1){g.energy1+=g.addenergy;commonclass.popbonusname(this.x,this.y-70*scG,"ENERGY+");}
if(this.tipe==2){g.waktu+=g.addtime;commonclass.popbonusname(this.x,this.y-70*scG,"TIME+");}
if(this.tipe==3){g.speed=g.speedfast;g.speeding=g.speedtime;commonclass.popbonusname(this.x,this.y-70*scG,"SPEED+");}
if(this.tipe==4){if(!g.disco)commonclass.startdisco();}
if(this.tipe==5){if(!g.slow)commonclass.startslow();}
soundPlay("zbonus");this.die();}
bonus.prototype.die=function(){fox.removevalue(this,g.allmc);fox.removevalue(this,arClips);this.removed_from_stage();if(this.parent){this.parent.removeChild(this)}}
bonus.prototype.setall=function(){var it=addObj("bonuspic"+this.tipe,0,45*scG);this.a.b.addChild(it);arClips.push(this);}