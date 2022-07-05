function candy(){PIXI.Container.call(this);this.init();}
candy.prototype=new foxmovieclip();candy.prototype.init=function(){this.a=new PIXI.Container();this.addChild(this.a);this.nama="";this.dep=this.y;}
candy.prototype.added=function(){var a=addObj(this.nama);a.img.play();a.img.animationSpeed=0.5;a.setRegY(1);this.a.addChild(a);g.en.push(this);g.allmc.push(this);this.nohit=0;this.state=1;this.bumpspeed=20*scG;this.energy=this.energymax=100;if(this.size==1)
this.radius=this.normalradius=12+fox.random(8);if(this.size==2)
this.radius=this.normalradius=30+fox.random(15);if(this.size==3)
this.radius=this.normalradius=50+fox.random(20);if(this.size==4)
this.radius=this.normalradius=70+fox.random(20);if(g.disco){this.radius=g.discoradius;}
this.radius*=scG;this.addshadow("spot2");this.adjustsh();this.xs=g.cspeed[this.nama];this.ys=0;if(this.x>g.xmid){this.xs=-this.xs;this.a.scale.x=-this.a.scale.x;}
this.y=Math.max(this.height,this.y);this.xmin=g.gxmin-this.radius;this.xmax=g.gxmax+this.radius;this.ymin=-this.height;this.ymax=g.screenhei+this.height;this.x=(this.x<0)?this.xmin:this.xmax;this.setall()}
candy.prototype.loop=function(){this.cekstate()}
candy.prototype.cekstate=function(){if(this.state==1){this.move();this.cekhitp();this.cekdisco();}else if(this.state==2){this.move();}
this.nohit=Math.max(0,this.nohit-1);this.cekvisible();}
candy.prototype.cekvisible=function(){if(this.state==2&&(this.x>-g.m.x+g.screenwid||this.x<-g.m.x)){this.visible=this.sh.visible=false;}else{this.visible=this.sh.visible=true;}}
candy.prototype.cekdisco=function(){if(g.disco){if(this.radius>g.discoradius){this.radius=Math.max(g.discoradius,this.radius*0.9);this.adjustsh();}}else{if(this.radius<this.normalradius){this.radius=Math.min(this.normalradius,this.radius*1.01);this.adjustsh();}}}
candy.prototype.adjustsh=function(){var ska=2*this.radius/100/scG;this.sh.scale.x=ska;this.sh.scale.y=ska;this.soffset=-0.3*this.radius;this.sh.height=Math.round(this.sh.height/2)*2;}
candy.prototype.cekhitp=function(){if(!this.nohit&&!g.floating){this.sumrad=g.pradius+this.radius;if(g.px>this.sh.x-this.sumrad){if(g.px<this.sh.x+this.sumrad){this.ry=1.25*this.sh.y;if(g.py>this.ry-this.sumrad){if(g.py<this.ry+this.sumrad){this.dx=g.px-this.sh.x;this.dy=g.py-this.ry;this.dis2=this.dx*this.dx+this.dy*this.dy;if(this.dis2<this.sumrad*this.sumrad){if(!g.hit||(g.hit&&(this.dis2<g.hitdis2))){g.hit=this;g.hitdis2=this.dis2;this.nohit=20;if(g.pradius>=this.radius){this.energy=0;this.gotscore();var ang=Math.atan2(this.sh.y-g.p.y,this.sh.x-g.p.x);this.xs=Math.cos(ang)*this.bumpspeed;this.ys=Math.sin(ang)*this.bumpspeed;soundPlay("zbump");if(!g.disco){g.bd--;}else{if(fox.random(100)>70){g.bd--;}}
if(g.bd<=0){g.bd=g.bonusdelay+fox.random(5);var b=new bonus();b.x=this.x;b.y=this.y;b.added();g.m2.addChild(b);}
this.state=2;}}}}}}}}}
candy.prototype.gotscore=function(){var sk=Math.round(this.radius/10)*g.pts;if(g.slow)
sk*=100;g.score+=sk;if(g.slow){commonclass.popbigscore(Math.max(30*scG,Math.min(g.bgwid-40*scG,g.p.x)),Math.max(20*scG,Math.min(g.bghei-20*scG,g.p.y-60*scG)),sk);}else{commonclass.popscore(Math.max(30*scG,Math.min(g.bgwid-30*scG,g.p.x)),Math.max(20*scG,Math.min(g.bghei-20*scG,g.p.y-60*scG)),sk);}
g.totalcombo++;g.combotime=10;}
candy.prototype.move=function(){if(g.slow&&this.state!=2){this.x+=0.3*this.xs;this.y+=0.3*this.ys;}else{this.x+=this.xs;this.y+=this.ys;}
this.sh.x=this.x;this.sh.y=this.y+this.soffset;this.cekout();}
candy.prototype.cekout=function(){if((this.xs<0&&this.x<this.xmin)||(this.xs>0&&this.x>this.xmax)||(this.y<this.ymin)||(this.y>this.ymax)){this.die();}}
candy.prototype.die=function(){fox.removevalue(this,g.en);fox.removevalue(this,g.allmc);fox.removevalue(this,arClips);if(this.parent){this.parent.removeChild(this)}}
candy.prototype.setall=function(){arClips.push(this);}