function Utils(){}
Utils.getRand=function(x,y){return Math.floor(Math.random()*y)+x;}
Utils.getRandomSign=function(){return Math.random()<0.5?-1:1;}
Utils.startsWith=function(str,startStr){return str.indexOf(startStr)==0;}
Utils.getDistinctArray=function(arr,propName){var dups={};return arr.filter(function(el){var hash=el[propName];var isDup=dups[hash];dups[hash]=true;return!isDup;});}
Utils.s4=function(){return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);};Utils.generateGUID=function(){return Utils.s4()+Utils.s4()+'-'+Utils.s4()+'-'+Utils.s4()+'-'+
Utils.s4()+'-'+Utils.s4()+Utils.s4()+Utils.s4();}
Utils.extend=function(Child,Parent){var F=function(){}
F.prototype=Parent.prototype;Child.prototype=new F();Child.prototype.constructor=Child;Child.superclass=Parent.prototype;}
Utils.fillFrames=function(to,from){from=from||0;if(from>=to)
return[];var frames=[];for(var i=from;i<to;i++){frames.push(i);}
return frames;}