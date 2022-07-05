function light(name){PIXI.Container.call(this);this.init(name);}
light.prototype=new foxmovieclip();light.prototype.init=function(name){this.a=new addObj(name);this.a.setRegY(0);this.addChild(this.a);}
light.prototype.added=function(){g.lights.push(this);if(fox.random(100)>50){this.state=1;this.d=4;this.a.rotation=fox.rad(-60+fox.random(30));}else{this.state=2;this.rmax=60;this.rmin=-60;this.a.rotation=fox.rad(this.rmin+fox.random(this.rmax-this.rmin));this.ro=fox.deg(this.a.rotation)>0?-5:5;this.d=10+fox.random(20);}
this.a.scale.x=0.3+0.1*fox.random(10);this.a.scale.y=0.6+0.1*fox.random(8);arClips.push(this);}
light.prototype.loop=function(){this.cekstate();}
light.prototype.cekstate=function(){if(this.state==2){this.move();}
this.d--;if(!this.d){fox.removevalue(this,g.lights);this.die();}}
light.prototype.move=function(){this.a.rotation+=fox.rad(this.ro);if(fox.deg(this.a.rotation)>this.rmax){this.a.rotation=fox.rad(this.rmax);this.ro=-this.ro;}else if(fox.deg(this.a.rotation)<this.rmin){this.a.rotation=fox.rad(this.rmin);this.ro=-this.ro;}}