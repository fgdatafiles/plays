var commonclass=function(){};commonclass.prototype.startdisco=function(){var g=fox.globalvar;var tw=60*scG;var th=45*scG;var col=g.bgwid/tw;var row=g.bghei/th;for(var i=0;i<col;i++){for(var f=0;f<row;f++){var it=new tile();it.x=i*tw;it.y=f*th;g.bg2.addChild(it);}}
g.disco=g.discotime;g.nodisco=g.discotime+100;musicPlay("zloop2",0,0,999999);}
commonclass.prototype.stopdisco=function(){var g=fox.globalvar;musicPlay("zloop1",0,0,999999);}
commonclass.prototype.startslow=function(){var g=fox.globalvar;var tw=60*scG;var th=45*scG;var col=g.bgwid/tw;var row=g.bghei/th;for(var i=0;i<col;i++){for(var f=0;f<row;f++){var it=new heart();it.x=i*tw;it.y=f*th;g.bg2.addChild(it);}}
fox.popdisplayobject("handsomeface",g.bg2,g.bgwid/2,g.hscreenhei,g.slowtime-60,0,60,60);g.slow=g.slowtime;g.noslow=g.slowtime+100;musicPlay("zloop3",0,0,999999);this.addsparks();}
commonclass.prototype.stopslow=function(){var g=fox.globalvar;musicPlay("zloop1",0,0,999999);this.say("zVOp_handsome",100);}
commonclass.prototype.addsparks=function(){var g=fox.globalvar;var it=new spark();it.y=-44;it.added();g.p.addChild(it);var it=new spark();it.y=-36;it.added();g.p.addChild(it);var it=new spark();it.y=-28;it.added();g.p.addChild(it);var it=new spark();it.y=-20;it.added();g.p.addChild(it);}
commonclass.prototype.equip=function(num){var g=fox.globalvar;if(g.itemequip[num]==0){g.itemequip[num]=1;}else{g.itemequip[num]=0;}
if(num==0)
this.cekcompatibility(g.compatibility0);if(num==1)
this.cekcompatibility(g.compatibility1);if(num==2)
this.cekcompatibility(g.compatibility2);if(num==3)
this.cekcompatibility(g.compatibility3);if(num==4)
this.cekcompatibility(g.compatibility4);if(num==5)
this.cekcompatibility(g.compatibility5);if(num==6)
this.cekcompatibility(g.compatibility6);if(num==7)
this.cekcompatibility(g.compatibility7);if(num==8)
this.cekcompatibility(g.compatibility8);if(num==9)
this.cekcompatibility(g.compatibility9);g.startitemequip=fox.clone(g.itemequip);}
commonclass.prototype.cekcompatibility=function(arr){var g=fox.globalvar;for(var i=0;i<arr.length;i++){if(arr[i]==0){g.itemequip[i]=0;}}}
commonclass.prototype.showcoinmultiplier=function(){var g=fox.globalvar;var it=new coinsmultiplier();it.x=g.screenwid-60;it.y=g.screenhei-60;g.stats.addChild(it)
soundPlay("zmultiplier");}
commonclass.prototype.showscoremultiplier=function(){var g=fox.globalvar;var it=new scoremultiplier();it.x=60;it.y=g.screenhei-60;g.stats.addChild(it)
soundPlay("zmultiplier");}
commonclass.prototype.makemovingbg=function(pic,dv){var g=fox.globalvar;var it=new movingbg();it.x=it.y=0;it.pic=pic;it.dv=dv;it.cekaddbg(-1);g.bg.addChild(it);return it;}
commonclass.prototype.playmusicloop=function(num){var g=fox.globalvar;if(g.playingzloop!=num){if(g.playingzloop>0){if(g.playingzloop==99){musicStop();}else{musicStop();}}
if(num==99){musicPlay("zloop",1,0,999999);}else{musicPlay("zloop"+num,1,0,999999);}
g.playingzloop=num;}}
commonclass.prototype.popfinishinfo=function(xx,yy){var g=fox.globalvar;var it=new finishinfo(xx,yy);it.added();g.stats.addChild(it);}
commonclass.prototype.say=function(vo,time){if(time==undefined){time=10}
var g=fox.globalvar;if(!g.notalking){soundPlay(vo);g.notalking=time;}}
commonclass.prototype.resetgame=function(){var g=fox.globalvar;g.totalcoins=g.score=0;g.itempaid1=[0,0,0,0,0,0,0,0,0,0];g.itemequip=[0,0,0,0,0,0,0,0,0,0];g.startitemequip=[0,0,0,0,0,0,0,0,0,0];fox.savecookie("score",0,"CNGumballClimber");fox.savecookie("coins",0,"CNGumballClimber");fox.savecookie("item1",g.itempaid1,"CNGumballClimber");}
commonclass.prototype.itempaidstatus=function(category,idx){var g=fox.globalvar;var res=0;if(category==1)
res=g.itempaid1[idx-1];if(category==2)
res=g.itempaid2[idx-1];if(category==3)
res=g.itempaid3[idx-1];return res;}
commonclass.prototype.getitemcost=function(category,idx){var g=fox.globalvar;var res=0;if(category==1){if(idx==1)
res=g.itemcost11[g.itempaid1[0]];if(idx==2)
res=g.itemcost12[g.itempaid1[1]];if(idx==3)
res=g.itemcost13[g.itempaid1[2]];if(idx==4)
res=g.itemcost14[g.itempaid1[3]];}
if(category==2){if(idx==1)
res=g.itemcost21[g.itempaid2[0]];if(idx==2)
res=g.itemcost22[g.itempaid2[1]];if(idx==3)
res=g.itemcost23[g.itempaid2[2]];if(idx==4)
res=g.itemcost24[g.itempaid2[3]];}
if(category==3){if(idx==1)
res=g.itemcost31[g.itempaid3[0]];if(idx==2)
res=g.itemcost32[g.itempaid3[1]];if(idx==3)
res=g.itemcost33[g.itempaid3[2]];if(idx==4)
res=g.itemcost34[g.itempaid3[3]];}
return res;}
commonclass.prototype.popoutofenergy=function(){var g=fox.globalvar;if(!g.udapopoutenergy){g.udapopoutenergy=1;g.fly=0;fox.pophint(g.hscreenwid,g.hscreenhei-10,3,80,1,g.stats);}}
commonclass.prototype.fadearea=function(x1,y1,x2,y2,place){}
commonclass.prototype.popmsg=function(place,xx,yy,say){var g=fox.globalvar;var it=new popmessage(xx,yy,say);place.addChild(it);}
commonclass.prototype.pophit=function(x1,y1,n,sk){var g=fox.globalvar
var it=new pophits(x1,y1,n,sk)
g.m4.addChild(it)}
commonclass.prototype.popbonusname=function(xx,yy,st){var g=fox.globalvar;var it=new popbonusname(xx,yy,st)
it.added();g.m4.addChild(it)}
commonclass.prototype.popscore=function(xx,yy,sk){var g=fox.globalvar;var it=new popscore(xx,yy,sk)
g.m3.addChild(it)}
commonclass.prototype.popbigscore=function(xx,yy,sk){var g=fox.globalvar
var it=new popbigscores(xx,yy,sk)
g.m3.addChild(it)}