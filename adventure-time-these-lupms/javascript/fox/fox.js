function fox(){PIXI.Container.call(this);this.init();}
fox.prototype=Object.create(PIXI.Container.prototype);fox.prototype.constructor=fox;fox.prototype.init=function(){this.globalvar=[];this.globalvar.en=[];this.globalvar.key={at:false,ba:false,ki:false,ka:false,f1:false,f2:false}
this.globalvar.keypressed=''
this.globalvar.key1=38,this.globalvar.key2=40,this.globalvar.key3=37,this.globalvar.key4=39,this.globalvar.key5=32,this.globalvar.key6=67
this.globalvar.letterkeys=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
this.globalvar.numberkeys=['0','1','2','3','4','5','6','7','8','9']
this.globalvar.numpadkeys=['0','1','2','3','4','5','6','7','8','9','*','+','Enter','-','.','/']
this.globalvar.functionkeys=['F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12']
this.globalvar.otherkeys=['Space','Page Up','Page Down','End','Home','Left','Up','Right','Down']}
fox.prototype.point2line=function(x,y,x1,y1,x2,y2){var A=x-x1;var B=y-y1;var C=x2-x1;var D=y2-y1;var dot=A*C+B*D;var len_sq=C*C+D*D;var param=dot/len_sq;var xx,yy;if(param<0||(x1==x2&&y1==y2)){xx=x1;yy=y1;}else if(param>1){xx=x2;yy=y2;}else{xx=x1+param*C;yy=y1+param*D;}
var dx=x-xx;var dy=y-yy;return Math.sqrt(dx*dx+dy*dy);}
fox.prototype.line2line=function(p1,p2,p3,p4){var denom=((p4.y-p3.y)*(p2.x-p1.x))-((p4.x-p3.x)*(p2.y-p1.y));var nume_a=((p4.x-p3.x)*(p1.y-p3.y))-((p4.y-p3.y)*(p1.x-p3.x));var nume_b=((p2.x-p1.x)*(p1.y-p3.y))-((p2.y-p1.y)*(p1.x-p3.x));if(denom==0.0){if(nume_a==0.0&&nume_b==0.0){return undefined;}
return undefined;}
var ua=nume_a/denom;var ub=nume_b/denom;if(ua>=0.0&&ua<=1.0&&ub>=0.0&&ub<=1.0){return{x:p1.x+ua*(p2.x-p1.x),y:p1.y+ua*(p2.y-p1.y)};}
return undefined;}
fox.prototype.make=function(nama,xx,yy,place){var it=addObj(nama,xx,yy);if(it==undefined){console.log("make:",nama);}
if(place==undefined){console.log("place:",place);}
place.addChild(it);return it;}
fox.prototype.make2=function(nama,xx,yy,place){var it=addObj(nama,xx,yy);it.y-=it.h/2;it.img.play();it.img.animationSpeed=0.5;place.addChild(it);return it;}
fox.prototype.pophint=function(xx,yy,no,timer,delay,place){if(timer){}else{timer=80};if(delay){}else{delay=0};var pl=place||this.globalvar.stat
var it=new hint(xx,yy,no,timer,delay)
pl.addChild(it)}
fox.prototype.popdisplayobject=function(name,place,xx,yy,time,jiggletime,fadeinspeed,fadeoutspeed){if(xx){}else{xx=0};if(yy){}else{yy=0};if(time){}else{time=10};if(jiggletime){}else{jiggletime=0};if(fadeinspeed){}else{fadeinspeed=0};if(fadeoutspeed){}else{fadeoutspeed=0};var it=new foxpopdisplayobject(name,xx,yy,time,jiggletime,fadeinspeed,fadeoutspeed);it.added();place.addChild(it);return it;}
fox.prototype.popmovingbackground=function(name,place,xx,yy,xs,ys,wid,hei){if(xx){}else{xx=0};if(yy){}else{yy=0};if(xs){}else{xs=0};if(ys){}else{ys=0};if(wid){}else{wid=10};if(hei){}else{hei=0};var it=new foxmovieclip();it.x=xx;it.y=yy;place.addChild(it);it.bgname=name;it.xs=xs;it.ys=ys;it.bwid=wid;it.bhei=hei;arClips.push(it);var mc1=fox.make(name,0,0,it);var mc2=fox.make(name,530,0,it);mc1.setReg0();mc2.setReg0();return it;}
fox.prototype.sortCompareDep=function(a,b){return a.dep>b.dep;}
fox.prototype.sortCompareY=function(a,b){return a.y>b.y;}
fox.prototype.sortdepth=function(arr,str){if(str=="dep"){arr.sort(this.sortCompareDep)}else{arr.sort(this.sortCompareY)}
for(var i=0;i<arr.length;i++){arr[i].parent.addChild(arr[i])}}
fox.prototype.inityfloat=function(t,range,speed){t.frange=range||1.5
t.fspeed=speed||0.15
t.fstarty=t.y
t.fys=t.frange
var ran=1+this.random(30)
for(var i=0;i<ran;i++){this.yfloating(t)}}
fox.prototype.yfloating=function(t){t.y+=t.fys
t.y>t.fstarty?(t.fys=Math.max(t.fys-t.fspeed,-t.frange)):(t.fys=Math.min(t.fys+t.fspeed,t.frange))}
fox.prototype.initxfloat=function(t,range,speed){t.frange=range||1.5
t.fspeed=speed||0.15
t.fstartx=t.x
t.fxs=t.frange
var ran=1+this.random(30)
for(var i=0;i<ran;i++){this.xfloating(t)}}
fox.prototype.xfloating=function(t){t.x+=t.fxs
t.x>t.fstartx?(t.fxs=Math.max(t.fxs-t.fspeed,-t.frange)):(t.fxs=Math.min(t.fxs+t.fspeed,t.frange))}
fox.prototype.shakescreen=function(xrange,delay){if(xrange){}else{xrange=8};if(delay){}else{delay=10};}
fox.prototype.cekclass=function(className){return(new this[className])}
fox.prototype.removechildren=function(mc){for(var i=mc.children.length-1;i>=0;i--){mc.removeChild(mc.children[i]);}}
fox.prototype.formatnumber=function(amount){if(!amount){return("0")}
amount=Math.round(amount*100)/100;var amount_str=amount;var amount_array=amount_str.split(".");var dollar_array=[];var st;var end=amount_array[0].length;while(end>0){st=Math.max(end-3,0);dollar_array.unshift(amount_array[0].slice(st,end));end=st;}
amount_array[0]=dollar_array.join(",");return(amount_array.join("."));}
fox.prototype.popskor=function(xx,yy,skor){var it=new popscore(xx,yy,skor)
this.globalvar.stat.addChild(it)}
fox.prototype.sortdep=function(arr){arr.sort(sortCompareDep)
var pr=arr[0].parent
var i=arr.length;while(i--){pr.getChildIndex(arr[i])!=i?(pr.setChildIndex(arr[i],i)):(undefined)}}
fox.prototype.getclass=function(className){return this[className];}
fox.prototype.localpos=function(fr,to){var point={x:0,y:0}
return to.toLocal(fr.toGlobal(point));}
fox.prototype.snapshot=function(sourc,dest,x1,y1,wid,hei,ska,xblur,yblur,transp,bgcolor){if(x1){}else{x1=0};if(y1){}else{y1=0};if(wid){}else{wid=100};if(hei){}else{hei=100};if(ska){}else{ska=1};if(xblur){}else{xblur=0};if(yblur){}else{yblur=0};if(transp){}else{transp=true};if(bgcolor){}else{bgcolor=0xffffff};}
fox.prototype.fadescreen=function(speed){if(speed){}else{speed=0.08};}
fox.prototype.framescreen=function(transparent){if(transparent){}else{transparent=0};}
fox.prototype.waitpop=function(t,time){if(time){}else{time=0.5};t.x-=3000;}
fox.prototype.jiggletween=function(t,startvalue,finishvalue,time){if(startvalue){}else{startvalue=2};if(finishvalue){}else{finishvalue=1};if(time){}else{time=1};var r=this.globalvar;var param1=r.easeparam1||1;var param2=r.easeparam2||0.25;t.scale.x=t.scale.y=startvalue;}
fox.prototype.initjiggle=function(t,startvalue,finishvalue,div,step){if(startvalue){}else{startvalue=2};if(finishvalue){}else{finishvalue=1};if(div){}else{div=0.7};if(step){}else{step=0.5};t.scale.x=startvalue
t.scale.y=t.scale.x
t.jska=finishvalue
t.jdx=0
t.jdv=div
t.jdvstep=step}
fox.prototype.jiggle=function(t){t.jdx=t.jdx*t.jdvstep+(t.jska-t.scale.x)*t.jdv
t.scale.x=Math.max(0.1,t.scale.x+t.jdx)
t.scale.y=t.scale.x}
fox.prototype.tint=function(mc,colr,streng){}
fox.prototype.resetcolor=function(mc){}
fox.prototype.blink=function(mc,delay){if(delay){}else{delay=20};}
fox.prototype.tintflash=function(mc,delay,colr,thickness,strength){if(delay){}else{delay=10};if(colr){}else{colr=0xFF0000};if(thickness){}else{thickness=7};if(strength){}else{strength=1};}
fox.prototype.removeallchildren=function(target){for(var i=target.children.length-1;i>=0;i--){target.removeChild(target.children[i]);}}
fox.prototype.massStop=function(target,_frame){if(_frame){}else{_frame=1};}
fox.prototype.massPlay=function(target){}
fox.prototype.duplicateDisplayObject=function(targe,autoAddt){if(autoAdd){}else{autoAdd=false};}
fox.prototype.getrandom=function(arr){var r=this.globalvar
!r.randomlisting?(r.randomlisting=[]):(undefined);!this.contain(r.randomlisting,arr)?(r.randomlisting.push(arr)):(undefined);!r[arr+"getrandom"]?(r[arr+"getrandom"]=[]):(undefined);if(!r[arr+"getrandom"].length){r[arr+"getrandom"]=[]
r[arr+"getrandom"]=this.clone(r[arr])
this.randomize(r[arr+"getrandom"]);r[arr+"getrandom"].length>1&&r[arr+"lastpop"]==r[arr+"getrandom"][r[arr+"getrandom"].length-1]?(r[arr+"getrandom"].pop()):(undefined);}
r[arr+"lastpop"]=r[arr+"getrandom"].pop()
return r[arr+"lastpop"]}
fox.prototype.resetrandom=function(){var r=this.globalvar;if(r.randomlisting){for(i=0;i<r.randomlisting.length;i++){r[r.randomlisting[i]+"getrandom"]=undefined;r[r.randomlisting[i]+"lastpop"]=undefined;}}}
fox.prototype.contain=function(arr,value){return arr.indexOf(value)>=0}
fox.prototype.analyze=function(_obj,lastItem){if(lastItem){}else{lastItem=''};var item;}
fox.prototype.currency=function(num,decimalPlace,currency){if(decimalPlace){}else{decimalPlace=2};if(currency){}else{currency="$"};var neg=(num<0);num=this.abs(num)
var roundedAmount=num.toFixed(decimalPlace);var amountArray=roundedAmount.split(".");var dollars=amountArray[0]
var cents=amountArray[1]
var dollarFinal=""
var i=0
for(i;i<dollars.length;i++){i>0&&(i%3==0)?(dollarFinal=","+dollarFinal):(undefined);dollarFinal=dollars.substr(-i-1,1)+dollarFinal;}
var centsFinal=cents;var missingZeros=decimalPlace-centsFinal.length;if(centsFinal.length<decimalPlace){for(var j=0;j<missingZeros;j++){centsFinal+="0";}}
var finalString=""
neg?(finalString="-"+currency+dollarFinal):(finalString=currency+dollarFinal);decimalPlace>0?(finalString+="."+centsFinal):(undefined);return finalString;}
fox.prototype.random=function(maxNum){return(Math.floor(Math.random()*(maxNum+1)));}
fox.prototype.randomize=function(arr){arr.sort(this.randomSort);}
fox.prototype.randomSort=function(objA,objB){return Math.round(Math.random()*2)-1}
fox.prototype.limit=function(value,floor,ceil){return Math.min(ceil,Math.max(floor,value));}
fox.prototype.abs=function(x){return(x^(x>>31))-(x>>31)}
fox.prototype.isEven=function(i){return((i&1)==0)}
fox.prototype.isMultipleOf=function(value,BaseNum){return!(value%BaseNum);}
fox.prototype.between=function(value,lo,hi){return(value>lo&&value<hi);}
fox.prototype.clone=function(source){var copier=[];if(source){copier=JSON.parse(JSON.stringify(source))}
return copier;}
fox.prototype.cekhit=function(target1,target2,commonParent){var result=false
return result;}
fox.prototype.removevalue=function(value,arr){for(var i=0;i<arr.length;i++){arr[i]==value?(arr=arr.splice(i,1)):(undefined);}}
fox.prototype.rad=function(qdeg){return qdeg*(Math.PI/180);}
fox.prototype.deg=function(qrad){return qrad*(180/Math.PI);}
fox.prototype.limit360=function(ang){return(((ang%360)+360)%360);}
fox.prototype.savecookie=function(vari,value,cookiename){saveData();}
fox.prototype.loadcookie=function(vari,cookiename){loadData();}