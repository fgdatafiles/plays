function levelinfo(x1,y1,n){PIXI.Container.call(this);this.init(x1,y1,n);}
levelinfo.prototype=new foxmovieclip();levelinfo.prototype.init=function(x1,y1,n){if(x1){}else{x1=300*scG}
if(y1){}else{y1=200*scG}
if(n){}else{n=0}
this.b1=new PIXI.Container();this.addChild(this.b1);this.b2=new PIXI.Container();this.addChild(this.b2);this.a=new PIXI.Container();this.addChild(this.a);this.arJiggle=[];var tf=addText(getText("party"),23,"#FF6600",undefined,"right");tf.x=28*scG;tf.y=-tf.height/2;this.a.addChild(tf);this.a.b=addText(n,35,"#FF3300",undefined,"left");this.a.b.x=30*scG;this.a.b.y=-this.a.b.height/2;this.a.addChild(this.a.b);this.a.visible=false;this.x=x1;this.y=y1;this.name="";this.d=1;this.idx=0;this.bname=["bubble1","bubble3","bubble2","bubble5","bubble4"];this.bxpos=[0,-52,50,-45,42];this.bypos=[0,-4,8,24,-20];arClips.push(this);}
levelinfo.prototype.loop=function(){this.d--;for(var i=0;i<this.arJiggle.length;i++){fox.jiggle(this.arJiggle[i]);}
if(!this.d){if(this.idx<this.bname.length){var mc1=addObj(this.bname[this.idx]+"outline",this.bxpos[this.idx]*scG,this.bypos[this.idx]*scG,0.5*scG);this.b1.addChild(mc1);var mc2=addObj(this.bname[this.idx],this.bxpos[this.idx]*scG,this.bypos[this.idx]*scG,0.5*scG);this.b2.addChild(mc2);fox.initjiggle(mc1,3,1);fox.initjiggle(mc2,3,1);this.arJiggle.push(mc1);this.arJiggle.push(mc2);this.idx++;this.d=(this.idx==this.name.length)?0:3;}}
if(this.d==-5){this.a.visible=true;this.a.x=(g.level>9)?-8*scG:0;fox.initjiggle(this.a,2,1);this.arJiggle.push(this.a);}
if(this.d==-40){fox.initjiggle(this,3,1);this.arJiggle.push(this);}
if(this.d==-45){g.gamestart=1;this.die();}}