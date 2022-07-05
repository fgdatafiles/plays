function statistics(){PIXI.Container.call(this);this.init();}
statistics.prototype=new foxmovieclip();statistics.prototype.init=function(){this.dtic=this.ticdelay=15
this.energynow=g.energy1;this.convert=0.5;this.accel=0.8;this.xs=0;this.scorenow=-999;this.energybar=new PIXI.Container();this.energybar.x=391*scG;this.energybar.y=20*scG;this.addChild(this.energybar);var bgBar=new PIXI.Graphics();bgBar.beginFill(0x000000).drawRect(0,-6.65*scG,170*scG,14*scG).endFill();bgBar.alpha=0.3;this.energybar.addChild(bgBar);var ebar=new PIXI.Graphics();ebar.beginFill(0xB858A5).drawRect(0,-6.65*scG,170*scG,14*scG).endFill();this.energybar.addChild(ebar);this.energybar.b=ebar;var frame1=addObj("frame1",0,0,0.5*scG)
frame1.x=frame1.width/2-4*scG;this.energybar.addChild(frame1);var frame2=addObj("frame1",0,0,0.5*scG)
frame2.x=frame2.width/2-4*scG;this.energybar.addChild(frame2);this.energybar.b.scale.x=g.energy1/100;this.energybar.frame=frame1;this.frame2=frame2;var tfScore=addText(String(g.score),20,"#FFFFFF","#B858A5","left",200,3,fontMain);tfScore.x=7*scG;tfScore.y=6*scG;this.addChild(tfScore);this.tfScore=tfScore;var tfTime=addText("00:00",20,"#FFFFFF","#B858A5","center",200,3,fontMain);tfTime.x=269*scG;tfTime.y=tfScore.y;this.addChild(tfTime);this.tfTime=tfTime;arClips.push(this);}
statistics.prototype.loop=function(){this.updatestattime();this.updatestatscorebox();this.updatestatenergybar();}
statistics.prototype.updatestattime=function(){if(fox.isMultipleOf(g.waktu,g.onesec)){this.tfTime.setText(this.timetotext(g.waktu,g.onesec))}
if(g.waktu<200&&g.waktu>0){this.dtic--
if(!this.dtic){this.dtic=this.ticdelay;soundPlay("ztic");fox.tintflash(this.tfTime,4,0xFF8800,1)}}}
statistics.prototype.timetotext=function(waktu,onesec){var tmin,tsec,tmsec
var sec=Math.floor(waktu/onesec);var min=Math.floor(sec/60);sec-=min*60;min<10?(tmin="0"+min):(tmin=min);sec<10?(tsec="0"+sec):(tsec=sec);return(tmin+":"+tsec);}
statistics.prototype.updatestatscorebox=function(){if(this.scorenow!=g.score){this.scorenow=g.score;this.tfScore.setText(g.score);}}
statistics.prototype.updatestatenergybar=function(){if(g.energy1<this.energynow-2)
fox.tintflash(this.energybar,20,0xFF6600,1);if(g.energy1>this.energynow)
fox.tintflash(this.energybar,20,0xFFFFFF,1);this.energynow=g.energy1
this.xs=(this.xs*this.accel)+(((g.energy1/100)-this.energybar.b.scale.x)*this.convert)
this.energybar.b.scale.x=Math.min(1,Math.max(0.001,this.energybar.b.scale.x+this.xs))
if(g.floating){this.frame2.visible=!this.frame2.visible;}else{this.frame2.visible=false;}}