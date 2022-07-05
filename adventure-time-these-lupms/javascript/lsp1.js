function lsp1(){PIXI.Container.call(this);this.init();}
lsp1.prototype=new foxmovieclip();lsp1.prototype.init=function(){this.a=new PIXI.Container();this.addChild(this.a);g.allmc.push(this);this.state=1;this.style="dance1";this.bumpspeed=25*scG;this.ynormal=-20*scG;this.yfloat=-60*scG;this.ypos=this.ynormal;this.xmin=30*scG;this.xmax=g.bgwid-30*scG;this.ymin=20*scG;this.ymax=g.bghei-15*scG;this.hide=0;}
lsp1.prototype.mousepress=function(){if(!g.floating&&g.nopress==false&&g.energy1>5&&!(g.mouseX>570*scG&&g.mouseY<30*scG)){g.floating=1;}else{fox.tintflash(g.stats.energybar.frame,8,0xFFFFFF,1);}}
lsp1.prototype.mouserelease=function(){if(g.floating){g.floating=0;g.nopress=10;g.fromfloating=15;}}
lsp1.prototype.loop=function(){if(this.state==1){this.move();this.cekhit();this.cekhide();this.cekfloat();this.cektime();this.cekface();}else if(this.state==2){this.bumped();}else if(this.state==9){this.outoftime();}}
lsp1.prototype.outoftime=function(){this.d--;if(this.d>0){g.speed*=0.95;this.move();}
var pos=fox.localpos(this,g.stats);if(Math.abs(pos.x-g.hscreenwid)<100*scG){if(pos.y<g.hscreenhei){this.ny=Math.min(g.hscreenhei-60*scG,this.y);}else{this.ny=Math.max(g.hscreenhei+110*scG,this.y);}
this.y=this.y+(this.ny-this.y)/4;}
g.px=-999;g.py=-999;this.sh.alpha=Math.max(0,this.sh.alpha-0.05);this.a.visible=true;if(this.d==10){this.switchstyle("upset",ynormal);}}
lsp1.prototype.switchstyle=function(style,yy){this.a.removeChild(this.ani);this.ani=addObj("lsp"+style,0,yy);this.ani.img.play();this.ani.img.animationSpeed=0.5;this.a.addChild(this.ani);if(style=="dance1"||style=="dance2"){this.a.addChild(this.ani);this.lspface1=addObj("lspface1");this.lspface1.img.play();this.lspface1.img.animationSpeed=0.5;this.ani.addChild(this.lspface1);this.lspface2=addObj("lspface2");this.lspface2.img.play();this.lspface2.img.animationSpeed=0.5;this.ani.addChild(this.lspface2);this.lspface2.visible=false;}}
lsp1.prototype.cekface=function(){if(g.slow){this.lspface1.visible=false;this.lspface2.visible=true;}else{this.lspface1.visible=true;this.lspface2.visible=false;}}
lsp1.prototype.cektime=function(){if(!g.waktu){this.state=9;this.d=30;g.floating=999;commonclass.popfinishinfo(g.hscreenwid,g.hscreenhei);soundPlay("zhorn");}}
lsp1.prototype.cekfloat=function(){if(g.floating){this.ypos=this.yfloat;if(this.style!="dance2"){this.style="dance2";this.switchstyle(this.style,this.ynormal);}
this.sh.alpha=0.2;g.energy1=Math.max(5,g.energy1-8*g.energyless);if(g.energy1<=5)
g.floating=0;}else{this.ypos=this.ynormal;if(this.style!="dance1"){this.style="dance1";this.switchstyle(this.style,this.yfloat);}
this.sh.alpha=1;}
this.ani.y=this.ani.y+(this.ypos-this.ani.y)/2;}
lsp1.prototype.cekhide=function(){if(this.hide>0){this.a.visible=this.hide?false:true;this.hide=Math.max(0,this.hide-1);if(!this.hide)
this.a.visible=true;}}
lsp1.prototype.cekhit=function(){if(g.hit){if(g.hit.radius<=g.pradius){if(!g.disco){g.pradius=Math.min(1.2*g.goalradius,g.pradius+g.radiusadd);}else{g.pradius=Math.min(1.2*g.goalradius,g.pradius+0.1*g.radiusadd);}
if(g.pradius>=g.goalradius){g.totalenemy=Math.min(20,g.totalenemy);if(g.level>=g.levelstartbossout&&!g.udaboss&&!fox.isEven(g.level)){g.udaboss=1;var bs=new boss();bs.x=(this.x>g.xmid)?-100*scG:g.bgwid+200*scG;bs.y=g.hscreenhei-100*scG+fox.random(200*scG);bs.added();g.m2.addChild(bs);}}
g.happycount++;if(g.happycount>g.nexthappy){g.nexthappy=g.happycount+30+fox.random(10);commonclass.say(fox.getrandom("happyVO"),60);}
var it=new lsp2();it.x=this.x;it.y=this.y;it.targ=g.hit;it.added();g.m2.addChild(it);this.hide=7;}else{if(!g.inv){this.dis=Math.sqrt(g.hitdis2);g.energy1=Math.max(0,g.energy1-g.hitdamage);var ang=Math.atan2(this.y-g.hit.y,this.x-g.hit.x);this.xs=Math.cos(this.ang)*this.bumpspeed;this.ys=Math.sin(this.ang)*this.bumpspeed;g.inv=g.invhitdelay;soundPlay("zhit");this.a.visible=true;g.floating=0;fox.popdisplayobject("lsphit",this.a,0,this.ynormal,20,0,0,0);commonclass.say(fox.getrandom("hitVO"));this.hide=0;this.d=24
this.state=2;}}
g.pradius2=g.pradius*g.pradius;g.hit=undefined;g.hitdis2=0;}}
lsp1.prototype.bumped=function(){if(g.energy1>0){this.x=Math.min(this.xmax,Math.max(this.xmin,this.x+this.xs));this.y=Math.min(this.ymax,Math.max(this.ymin,this.y+this.ys));this.xs*=0.9;this.ys*=0.9;this.d--;if(!this.d){g.hit=undefined;this.state=1;}}else{this.x+=this.xs;this.y+=this.ys;this.cekout();}
g.px=-999;g.py=-999;this.updatespotlight();}
lsp1.prototype.cekout=function(){var limit=600*scG;if(this.x<-limit||this.x>g.bgwid+limit||this.y<-limit||this.y>g.bgwid+limit){commonclass.popfinishinfo(g.hscreenwid,g.hscreenhei);this.state=10;}}
lsp1.prototype.move=function(){if(g.mouseX&&g.mouseY){this.nx=Math.min(this.xmax,Math.max(this.xmin,g.mouseX-g.m.x));this.ny=Math.min(this.ymax,Math.max(this.ymin,g.mouseY));this.dx=this.nx-this.x;this.dy=this.ny-this.y;if(this.dx*this.dx+this.dy*this.dy>4*g.speed*g.speed){this.ang=Math.atan2(this.dy,this.dx);this.xs=Math.cos(this.ang)*g.speed;this.ys=Math.sin(this.ang)*g.speed;this.x=this.nx=this.x+this.xs;this.y=this.ny=this.y+this.ys;}else{this.x=this.x+(this.nx-this.x)/4;this.y=this.y+(this.ny-this.y)/4;}
g.px=this.x;g.py=1.25*this.y;this.updatespotlight();}}
lsp1.prototype.updatespotlight=function(){this.sh.x=this.x;this.sh.y=this.y;this.sh.scale.x=2*g.pradius/100/scG;this.sh.scale.y=2*g.pradius/100/scG;this.sh.height=Math.round(this.sh.height/2)*2;}
lsp1.prototype.setall=function(){this.ani=addObj("lsp"+this.style,0,this.ynormal);this.ani.img.play();this.ani.img.animationSpeed=0.5;this.a.addChild(this.ani);this.lspface1=addObj("lspface1");this.lspface1.img.play();this.lspface1.img.animationSpeed=0.5;this.ani.addChild(this.lspface1);this.lspface2=addObj("lspface2");this.lspface2.img.play();this.lspface2.img.animationSpeed=0.5;this.ani.addChild(this.lspface2);this.lspface2.visible=false;this.addshadow("spot1");arClips.push(this);}