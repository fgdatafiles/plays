function ScrGame(){PIXI.Container.call(this);this.init();}
ScrGame.prototype=Object.create(PIXI.Container.prototype);ScrGame.prototype.constructor=ScrGame;ScrGame.prototype.init=function(){this.game_mc=new PIXI.Container();this.face_mc=new PIXI.Container();this._gameOver=false;this._arButtons=[];this.touches=[];this.addChild(this.game_mc);this.addChild(this.face_mc);this.btnPause=addButton("btnPause",584,20,0.5);this.face_mc.addChild(this.btnPause);this._arButtons.push(this.btnPause);saveData();this.initData();this.interactive=true;this.on('mousedown',this.touchHandler);this.on('mousemove',this.touchHandler);this.on('mouseup',this.touchHandler);this.on('touchstart',this.touchHandler);this.on('touchmove',this.touchHandler);this.on('touchend',this.touchHandler);}
ScrGame.prototype.initData=function(){g.notalking=g.endgame=g.px=g.py=g.hitdis2=g.mx=g.my=g.inv=0;g.fromfloating=g.happycount=g.combotime=g.totalcombo=g.floating=0;g.gamestart=g.paused=g.disco=g.nodisco=g.slow=g.noslow=g.speeding=g.udaboss=0;g.nexthappy=2+fox.random(3);g.hit=g.got=undefined;g.pts=10;if(!g.level){g.level=1;g.score=0;}
g.levelstartbossout=3;g.energy1=g.energy1max=100;g.energyless=0.02;g.pradius=g.pradiusmin=20*scG;g.pradius2=g.pradius*g.pradius;g.onesec=30;g.leveltime=[80,100,140,160];if(g.level<g.leveltime.length){g.waktu=g.leveltime[g.level-1]*g.onesec;}else{g.waktu=180*g.onesec;}
g.allgoalradius=[60,65,70,75,80,85,90,95];if(g.level<g.allgoalradius.length){g.goalradius=g.allgoalradius[g.level-1];}else{g.goalradius=100;}
g.goalradius*=scG
g.radiusadd=1*scG;g.hitdamage=20;g.invhitdelay=70;g.nopress=12;g.bonusdelay=10;g.bd=5;g.addenergy=20;g.addtime=5*g.onesec;g.bonustime=150;g.slowtime=660;g.discotime=660;g.discoradius=14;g.timebonusleft=6;g.speed=g.speednormal=7*scG;g.speedfast=12*scG;g.speedtime=500;g.enddelay=g.enddelaynormal=30;g.ed=g.enemydelay=15;g.ld=g.lightdelay=5;g.en=[];g.lights=[];g.allmc=[];g.bgwid=800*scG;g.bghei=400*scG;g.gxmin=g.ymin=0;g.gxmax=g.bgwid;g.xmid=g.bgwid/2;g.ymax=g.bghei;g.ymid=g.bghei/2;g.lighttype=[1,1,1,2,2,2,3,3,3,4,4,4,5,6,7];g.lightpos=[100*scG,150*scG,200*scG,250*scG,300*scG,350*scG,400*scG,450*scG,500*scG,550*scG,600*scG,650*scG,700*scG];g.all=new PIXI.Container(),this.game_mc.addChild(g.all)
g.all2=new PIXI.Container(),this.game_mc.addChild(g.all2)
g.m=new PIXI.Container(),g.all.addChild(g.m)
g.bg=new PIXI.Container(),g.m.addChild(g.bg)
g.bg2=new PIXI.Container(),g.m.addChild(g.bg2)
g.stats=new statistics(),g.all.addChild(g.stats)
g.m0=new PIXI.Container(),g.m.addChild(g.m0)
g.m1=new PIXI.Container(),g.m.addChild(g.m1)
g.m2=new PIXI.Container(),g.m.addChild(g.m2)
g.m3=new PIXI.Container(),g.m.addChild(g.m3)
g.m4=new PIXI.Container(),g.m.addChild(g.m4)
g.over=new PIXI.Container(),g.all.addChild(g.over)
fox.resetrandom();this.setupbackground();this.setupbonus();this.setupenemies();g.p=new lsp1();g.p.x=g.xmid;g.p.y=g.ymid+80*scG;g.p.setall();g.m2.addChild(g.p);commonclass.playmusicloop(1);var it=new levelinfo(g.hscreenwid,g.hscreenhei,g.level);g.stats.addChild(it);}
ScrGame.prototype.setupbackground=function(){var bg=addObj(g.allbg[(g.level-1)%g.allbg.length],0,0,1,1,1,0);g.bg.addChild(bg);}
ScrGame.prototype.setupbonus=function(){if(g.level==1){g.bonustype=[1,2,3];g.bonuslist=[1,2,3];}else if(g.level>1&&g.level<4){g.bonustype=[1,2,3,4];if(g.level==2){g.bonuslist=[4,1];}else{g.bonuslist=[];}}else{g.bonustype=[1,2,3,4,5];g.bonuslist=[];}
fox.randomize(g.bonuslist);}
ScrGame.prototype.setupenemies=function(){g.totalenemy=99999;g.minenemyonscreen=10;g.maxenemyonscreen=20;if(g.level==1){g.size1=[16,17,18,31,32,33,34,35,36,37,38,39,40,41,42];g.size2=[11,15,22,29,30,43,44];}else if(g.level==2){g.size1=[16,17,18,31,32,33,34,35,36,37,38,39,40,41,42];g.size2=[11,15,22,29,30,43,44,61,62,63,64,65,66];}else if(g.level==3){g.size1=[16,17,18,31,32,33,34,35,36,37,38,39,40,41,42,46,47,48];g.size2=[49,50,51,52,53,54,55,56,61,62,63,64,65,66];g.size3=[13,21,23,24,25,26,27];}else if(g.level==4){g.size1=[16,17,18,31,32,33,34,35,36,37,38,39,40,41,42,46,47,48,67,68,69];g.size2=[70,71,71,71,71,71,71,71,72,73,74,75,76];g.size3=[13,21,23,24,25,26,27,28,45];}else if(g.level==5){g.size1=[16,17,18,31,32,33,34,35,36,37,38,39,40,41,42,46,47,48,67,68,69];g.size2=[11,15,22,29,30,43,44,49,50,51];g.size3=[13,14,20,21,23,24,25,26,27,28,45,59,60];g.size4=[12,19];}else{g.size1=[16,17,18,31,32,33,34,35,36,37,38,39,40,41,42,46,47,48,67,68,69];g.size2=[11,15,22,29,30,43,44,49,50,51,52,53,54,55,56,61,62,63,64,65,66,70,71,72,73,74,75,76];g.size3=[13,14,20,21,23,24,25,26,27,28,45,59,60,77];g.size4=[12,19,57,58];}
var allenemyspeed=[];allenemyspeed.push(2,3,3,3,2,3,2,1.5,2,2);allenemyspeed.push(3,2,3,3,3,3,3,3,2,2);allenemyspeed.push(3,2,1.5,3,2,1.5,3,2,1.5,3);allenemyspeed.push(2,1.5,2,2,3,1.5,1.5,1.5,2,2);allenemyspeed.push(2,1.5,1.5,2,2,2,3,3,3,3);allenemyspeed.push(2,2,2,2,2,2,1.5,1.5,1.5,3);allenemyspeed.push(2,2,2,2,2,2,3,2,2,3);g.cspeed={};for(var i=0;i<allenemyspeed.length;i++){var addspeed=0;if(g.level>3)
addspeed=0.35*(g.level-3)+0.1*fox.random(5);g.cspeed["candy"+(11+i)]=Math.min((2*g.pradius)-1,allenemyspeed[i]*scG+addspeed*scG);}
if(g.level==1){g.enemylist=[1,1,1,1,1,1,2,2,2];}else if(g.level==2){g.enemylist=[1,1,2];}else if(g.level==3){g.enemylist=[1,1,1,1,1,1,1,2,2,2,3];}else if(g.level==4||g.level==5){g.enemylist=[1,1,1,1,1,1,1,1,2,2,3,3];}else if(g.level==6||g.level==7){g.enemylist=[1,1,1,1,1,1,1,2,2,2,3,3,4];}else if(g.level==8||g.level==9){g.enemylist=[1,1,1,1,1,2,2,3,3,4];}else{g.enemylist=[1,1,2,3,4];}
g.estartpos=[];var ey=50*scG;var eymax=g.bghei-30*scG;var espacing=10*scG;while(ey<eymax){g.estartpos.push(ey);ey+=espacing;}}
ScrGame.prototype.movescreen=function(){g.mx=g.mx+(Math.min(0,Math.max(-g.bgwid+g.screenwid,g.hscreenwid-g.p.x))-g.mx)/4;g.m.x=Math.round(g.mx);}
ScrGame.prototype.cekmakeenemy=function(){g.ed--;if(g.en.length<g.minenemyonscreen){g.ed=0;}
if(!g.ed){g.ed=g.enemydelay;if(g.totalenemy>0&&g.pradius<g.goalradius&&g.en.length<g.maxenemyonscreen){this.popenemy(-100*scG+(fox.random(1)*(g.bgwid+200*scG)),fox.getrandom("estartpos"));g.totalenemy--;}}}
ScrGame.prototype.makelights=function(){g.ld--;if(!g.ld){g.ld=g.lightdelay;if(g.lights.length<10){var l=new light("light"+fox.getrandom("lighttype"));l.x=fox.getrandom("lightpos");l.y=-10*scG;l.added();g.m4.addChild(l);}}}
ScrGame.prototype.popenemy=function(xx,yy){var size=fox.getrandom("enemylist");var nama="candy"+fox.getrandom("size"+size);var enemy=new candy();enemy.x=xx;enemy.y=yy;enemy.nama=nama;enemy.size=size;enemy.added();g.m2.addChild(enemy);}
ScrGame.prototype.cekstatus=function(){if(g.gamestart){g.waktu=Math.max(0,g.waktu-1)}
g.nopress=Math.max(0,g.nopress-1);g.inv=Math.max(0,g.inv-1);if(g.inv>0){g.p.visible=!g.p.visible;}else{g.p.visible=true;}
if(g.speeding){g.speeding--;if(!g.speeding)
g.speed=g.speednormal;}
g.nodisco=Math.max(0,g.nodisco-1);if(g.disco){g.disco--;g.totalenemy=Math.max(1,g.totalenemy);if(g.disco==60){commonclass.stopdisco();}}
g.noslow=Math.max(0,g.noslow-1);if(g.slow){g.slow--;g.totalenemy=Math.max(1,g.totalenemy);if(g.slow==60){commonclass.stopslow();}}
if(!g.en.length){g.enddelay--;if(!g.enddelay)
g.endgame=2;}else{g.enddelay=g.enddelaynormal}
g.fromfloating=Math.max(0,g.fromfloating-1);}
ScrGame.prototype.cekcombo=function(){if(g.combotime>0){g.combotime--;if(!g.combotime){if(g.totalcombo>1){var sk=g.totalcombo*g.totalcombo*100;commonclass.pophit(Math.max(50*scG,Math.min(g.bgwid-50*scG,g.p.x)),Math.max(40*scG,Math.min(g.bghei-30*scG,g.p.y-80*scG)),g.totalcombo,sk);g.score+=sk;}
g.totalcombo=0;}}}
ScrGame.prototype.cekendgame=function(){if(g.endgame){this._gameOver=true;this.removeAllListener();musicStop();soundManager.currentMusic="none";if(g.disco||g.slow){g.disco=g.slow=0;musicPlay("zloop1",0,0,999999);}
if(!g.mute)
musicPlay("zloop1",0,0,999999);if(g.endgame==1){showEnd();}else if(g.endgame==2){showWin();}}}
ScrGame.prototype.ceksfx=function(){g.notalking=Math.max(0,g.notalking-1);}
ScrGame.prototype.update=function(diffTime){if(options_pause||this._gameOver){return;}
this.movescreen();this.cekmakeenemy();this.makelights();this.cekstatus();this.cekcombo();this.cekendgame();this.ceksfx();fox.sortdepth(g.allmc,"y");stage.focus=this;}
ScrGame.prototype.clickObj=function(item_mc){var name=item_mc.name
item_mc._selected=false;if(item_mc.over){item_mc.over.visible=false;}
if(name=="btnPause"){options_pause=true;if(ScreenPause){ScreenPause.visible=true;ScreenPause.refreshButtons();}}}
ScrGame.prototype.checkButtons=function(mouseX,mouseY){g.mouseX=mouseX;g.mouseY=mouseY;for(var i=0;i<this._arButtons.length;i++){var item_mc=this._arButtons[i];if(hit_test_rec(item_mc,item_mc.w,item_mc.h,mouseX,mouseY)){if(item_mc.visible&&item_mc.alpha==1){if(item_mc._selected==false){item_mc._selected=true;if(item_mc.over){item_mc.over.visible=true;}else if(item_mc.overSc){item_mc.scale.x=1.1*item_mc.vX;item_mc.scale.y=1.1;}}}}else{if(item_mc._selected){item_mc._selected=false;if(item_mc.over){item_mc.over.visible=false;}else if(item_mc.overSc){item_mc.scale.x=1*item_mc.vX;item_mc.scale.y=1;}}}}}
ScrGame.prototype.touchHandler=function(evt){var phase=evt.type;var mouseX=evt.data.global.x;var mouseY=evt.data.global.y;if(phase=='touchstart'||phase=="mousedown"){var touch={id:evt.data.identifier};this.touches.push(touch);this.checkButtons(mouseX,mouseY);if(this.btnPause._selected==false&&g.p){if(options_mobile){if(this.touches.length>1){g.p.mousepress();}}else{g.p.mousepress();}}}else if(phase=='mousemove'||phase=='touchmove'){this.checkButtons(mouseX,mouseY);}else{for(var i=0;i<this.touches.length;i++){if(this.touches[i].id===evt.data.identifier){this.touches.splice(i,1);}};if(g.p){if(options_mobile){if(this.touches.length<2){g.p.mouserelease();}}else{g.p.mouserelease();}}
for(var i=0;i<this._arButtons.length;i++){var item_mc=this._arButtons[i];if(item_mc._selected){this.clickObj(item_mc);item_mc._selected=false;if(item_mc.over){item_mc.over.visible=false;}else if(item_mc.overSc){item_mc.scale.x=1*item_mc.vX;item_mc.scale.y=1;}
return;}}}}
ScrGame.prototype.removeAllListener=function(){this._gameOver=true;clearClips();this.interactive=false;this.off('mousedown',this.touchHandler);this.off('mousemove',this.touchHandler);this.off('mouseup',this.touchHandler);this.off('touchstart',this.touchHandler);this.off('touchmove',this.touchHandler);this.off('touchend',this.touchHandler);}