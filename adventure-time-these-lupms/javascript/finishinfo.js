function finishinfo(x1,y1){PIXI.Container.call(this);this.init(x1,y1);}
finishinfo.prototype=new foxmovieclip();finishinfo.prototype.init=function(x1,y1){if(x1==undefined){x1=300*scG;}
if(y1==undefined){y1=200*scG;}
this.arJiggle=[];this.b1=new PIXI.Container();this.addChild(this.b1);this.b2=new PIXI.Container();this.addChild(this.b2);this.a=new PIXI.Container();this.addChild(this.a);var tf1=addText(getText("out_of"),25,"#FF6600",undefined,"center",300,4,fontMain);tf1.x=0;tf1.y=-11*scG-tf1.height/2;this.a.addChild(tf1);if(!g.energy1){var tf2=addText(getText("energy"),30,"#FF3300",undefined,"center",300,4,fontMain);tf2.x=0;tf2.y=15*scG-tf2.height/2;this.a.addChild(tf2);}else{var tf2=addText(getText("time"),30,"#FF3300",undefined,"center",300,4,fontMain);tf2.x=0;tf2.y=15*scG-tf2.height/2;this.a.addChild(tf2);}
this.a.visible=false;this.x=x1;this.y=y1;this.name="";this.delay=70;}
finishinfo.prototype.added=function(){this.d=1;this.idx=0;this.bname=["bubble6","bubble4","bubble5","bubble2","bubble1","bubble3"];this.bxpos=[-3,58,47,80,-53,47];this.bypos=[0,-10,-30,15,6,25];arClips.push(this);}
finishinfo.prototype.loop=function(){this.d--;for(var i=0;i<this.arJiggle.length;i++){fox.jiggle(this.arJiggle[i]);}
if(!this.d){if(this.idx<this.bname.length){var mc1=addObj(this.bname[this.idx]+"outline",this.bxpos[this.idx]*scG,this.bypos[this.idx]*scG);this.b1.addChild(mc1);var mc2=addObj(this.bname[this.idx],this.bxpos[this.idx]*scG,this.bypos[this.idx]*scG);this.b2.addChild(mc2);fox.initjiggle(mc1,3,1);fox.initjiggle(mc2,3,1);this.arJiggle.push(mc1);this.arJiggle.push(mc2);this.idx++;this.d=(this.idx==this.name.length)?0:3;}}
if(this.d==-5){this.a.visible=true;this.a.x=(g.level>9)?-8*scG:0;fox.initjiggle(this.a,2,1);this.arJiggle.push(this.a);}
if(this.d==-this.delay+5){fox.initjiggle(this,3,1);this.arJiggle.push(this);}
if(this.d==-this.delay){g.endgame=1;this.die();}}