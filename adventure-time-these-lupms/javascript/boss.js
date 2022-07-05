function boss(){PIXI.Container.call(this);this.init();}
boss.prototype=new candy();boss.prototype.init=function(){this.a=new PIXI.Container();this.addChild(this.a);this.nama="";}
boss.prototype.added=function(){this.tipe=((g.level-g.levelstartbossout)/2)%6;this.expanding=true;g.en.push(this);g.allmc.push(this);this.nohit=0;this.state=1;this.bumpspeed=20*scG;this.energy=this.energymax=100;if(this.size==1)
this.radius=this.normalradius=12+fox.random(8);if(this.size==2)
this.radius=this.normalradius=30+fox.random(15);if(this.size==3)
this.radius=this.normalradius=50+fox.random(20);if(this.size==4)
this.radius=this.normalradius=70+fox.random(20);if(g.disco)
this.radius=g.discoradius;this.radius*=scG;this.addshadow("spot2");this.adjustsh();this.xs=g.cspeed[this.nama];this.ys=0;if(this.x>g.xmid){this.xs=-this.xs;this.a.scale.x=-this.a.scale.x;}
this.y=Math.max(this.height,this.y);this.xmin=g.gxmin-this.radius;this.xmax=g.gxmax+this.radius;this.ymin=-this.height;this.ymax=g.screenhei+this.height;this.x=(this.x<0)?this.xmin:this.xmax;this.setall()
this.noexp=80;this.maxrad=1.6*g.goalradius;this.minrad=0.95*g.goalradius;this.div1=Math.min(1.05,1.01+0.005*(g.level-g.levelstartbossout));this.div2=Math.max(0.95,0.99-0.005*(g.level-g.levelstartbossout));this.flip=true;this.radius=this.maxrad;this.bymin=100*scG;this.bymax=g.screenhei-50*scG;this.xmin=g.gxmin-this.radius;this.xmax=g.gxmax+this.radius;this.x=(this.a.scale.x>0)?this.xmin:this.xmax;g.pos1x=g.pos1y=g.pos2x=g.pos2y=0;var bossspeed=[4,4,4,5,5,6];var expanddelay=[0,0,40,60,0,0];this.ed=this.edelay=expanddelay[this.tipe];this.xs=(this.a.scale.x>0)?bossspeed[this.tipe]*scG:-bossspeed[this.tipe]*scG;if(this.tipe==4){this.radius=this.normalrad=1.3*g.goalradius;this.expanding=false;this.a.scale.x=1;this.xs=0;this.bymax=g.screenhei-70*scG;if(this.partner){this.x=(g.bgwid/2)+90*scG;fox.initxfloat(this,4,0.2);}else{this.x=(g.bgwid/2)-90*scG;fox.initxfloat(this,7,0.5);}}
if(this.tipe==5){g.followradius=this.radius=this.normalrad=1.3*g.goalradius;this.expanding=false;this.nojointime=this.followtime=200;this.follow=0;this.nojoin=300;if(this.partner){this.x=(g.p.x>g.bgwid/2)?200*scG:600*scG;this.xs=0;this.cakespeed=6;}}
this.adjustsh();}
boss.prototype.cekdisco=function(){this.noexp--;if(this.noexp<0&&this.expanding){if(this.flip){if(this.radius==this.maxrad){this.ed--;this.flip=(this.ed<0)?false:true;}else{this.radius*=this.div1;if(this.radius>this.maxrad){this.radius=this.maxrad;this.ed=this.edelay;}}}else{this.radius*=this.div2;if(this.radius<this.minrad){this.radius=this.minrad;this.flip=true;}}
this.adjustsh();}}
boss.prototype.gotscore=function(){var sk=g.level*5000;g.score+=sk;commonclass.popbigscore(Math.max(30*scG,Math.min(g.bgwid-40*scG,g.p.x)),Math.max(20*scG,Math.min(g.bghei-20*scG,g.p.y-60*scG)),sk);g.totalcombo++;g.combotime=10;}
boss.prototype.move=function(){if(this.tipe==0)
this.move0();if(this.tipe==1)
this.move1();if(this.tipe==2)
this.move0();if(this.tipe==3)
this.move1();if(this.tipe==4)
this.move4();if(this.tipe==5)
this.move5();this.sh.x=this.x;this.sh.y=this.y+this.soffset;this.cekout();}
boss.prototype.move0=function(){this.x+=this.xs;if(!this.energy){this.y+=this.ys;}else{fox.yfloating(this);}}
boss.prototype.move1=function(){if(this.energy){this.d--;if(!this.d){this.xs=-this.xs;this.a.scale.x=-this.a.scale.x;this.turn=!this.turn;this.d=this.turn?20:40;}
this.ymove();}
this.x+=this.xs;this.y+=this.ys;}
boss.prototype.move4=function(){if(this.energy){if(!this.partner){this.ymove();g.pos1x=this.x;g.pos1y=this.y;}else{this.ymove();g.pos2x=this.x;g.pos2y=this.y;}
fox.xfloating(this);}
if(!this.energy){this.ys=-20*scG;this.xs=0;}
this.x+=this.xs;this.y+=this.ys;this.cekexpand4();}
boss.prototype.cekexpand4=function(){if(this.noexp<0){if(!g.ada2||!g.ada1){this.expanding=true;}else{this.dx=g.pos1x-g.pos2x;this.dy=g.pos1y-g.pos2y;var distance=Math.sqrt(this.dx*this.dx+this.dy*this.dy);if(distance<2*this.radius){this.radius=distance/2;}else{this.radius=Math.min(this.normalrad,distance/2);}
this.adjustsh();}}}
boss.prototype.move5=function(){if(this.energy){if(!this.partner){this.ymove();g.pos1x=this.x;g.pos1y=this.y;}else{if(this.nojoin){this.nojoin--;this.ymove();if(!this.nojoin){this.follow=this.followtime;}}else if(this.follow){this.follow--;this.followfionna();if(!this.follow){this.nojoin=this.nojointime;this.xs=0;this.ys=(this.y>g.hscreenhei)?-3*scG:3*scG;}}
g.pos2x=this.x;g.pos2y=this.y;}}
this.x+=this.xs;this.y+=this.ys;this.cekexpand5();}
boss.prototype.cekexpand5=function(){if(this.noexp<0){if(!g.ada2||!g.ada1){this.expanding=true;}else{if(!this.partner){this.dx=g.pos2x-this.x;this.dy=g.pos2y-this.y;if(this.dx*this.dx+this.dy*this.dy<10000){this.expanding=true;}else{this.expanding=false;this.radius=this.radius+(this.normalrad-this.radius)/4;this.adjustsh();}
g.followradius=radius;}else{this.radius=g.followradius
this.adjustsh();}}}}
boss.prototype.ymove=function(){if(this.ys<0&&this.y<this.bymin){this.y=this.bymin;this.ys=-this.ys;}
if(this.ys>0&&this.y>this.bymax){this.y=this.bymax;this.ys=-this.ys;}}
boss.prototype.followfionna=function(){if(g.ada1){var ang=Math.atan2(g.pos1y+30*scG-this.y,g.pos1x+40*scG-this.x);this.xs=Math.cos(ang)*this.cakespeed;this.ys=Math.sin(ang)*this.cakespeed;}else{this.ymove();}}
boss.prototype.cekout=function(){var cxmin=-this.radius;var cxmax=g.bgwid+this.radius;var cymin=-this.radius;var cymax=g.bghei+this.radius;if(!this.energy){if(this.tipe==4||this.tipe==5){if(this.partner){g.ada2=0;}else{g.ada1=0;}}
if((this.xs<0&&this.x<cxmin)||(this.xs>0&&this.x>cxmax)||(this.y<cymin)||(this.y>cymax)){if(this.tipe==0){sendstat(203,1);}
if(this.tipe==5){sendstat(205,1);}
this.die();}}else{if(this.tipe==4){}else{if((this.xs<0&&this.x<0)||(this.xs>0&&this.x>g.bgwid)||(this.y<cymin)||(this.y>cymax)){this.xs=-this.xs;this.a.scale.x=-this.a.scale.x;this.x=Math.max(0,Math.min(g.bgwid,this.x));this.y=Math.max(cymin,Math.min(cymax,this.y));}}}}
boss.prototype.setall=function(){if(this.tipe==0){var m=addObj("marshalllee");m.img.play();m.img.animationSpeed=0.5;m.setRegY(1);this.a.addChild(m);this.y=g.hscreenhei+30*scG;fox.inityfloat(this,10,1);}
if(this.tipe==1){var m=addObj("princegumball");m.img.play();m.img.animationSpeed=0.5;m.setRegY(1);this.a.addChild(m);this.y=100*scG;this.ys=1*scG;this.d=60;}
if(this.tipe==2){var m=addObj("icequeen");m.img.play();m.img.animationSpeed=0.5;m.setRegY(1);this.a.addChild(m);this.y=g.hscreenhei+30*scG;fox.inityfloat(this,7,0.5);}
if(this.tipe==3){var m=addObj("flameprince");m.img.play();m.img.animationSpeed=0.5;m.setRegY(1);this.a.addChild(m);this.y=100*scG;this.ys=1*scG;this.d=60;}
if(this.tipe==4){this.y=-100*scG;if(g.udaboss==1){g.udaboss=2;var m=addObj("lord1",0,0,scG);m.img.play();m.img.animationSpeed=0.5;m.setRegY(1);this.a.addChild(m);g.ada1=1;this.ys=4*scG;this.bs=new boss();this.bs.added();g.m2.addChild(this.bs);}else{this.partner=true;var m=addObj("lord2",0,0,scG);m.img.play();m.img.animationSpeed=0.5;m.setRegY(1);this.a.addChild(m);g.ada2=1;this.ys=3*scG;}}
if(this.tipe==5){if(g.udaboss==1){this.partner=false;g.ada1=1;var m=addObj("fionna");m.img.play();m.img.animationSpeed=0.5;m.setRegY(1);this.a.addChild(m);if(g.p.y>g.hscreenhei){this.y=120*scG;}else{this.y=g.screenhei-70*scG;}
this.ys=1;g.udaboss=2;this.bs=new boss();this.bs.added();g.m2.addChild(this.bs);}else{this.partner=true;g.ada2=1;var m=addObj("cake");m.img.play();m.img.animationSpeed=0.5;m.setRegY(1);this.a.addChild(m);this.y=-60*scG;this.ys=3*scG;}}
arClips.push(this);}