(function(def){if(typeof define=='function'){define(def);}
else if(typeof module!='undefined'){module.exports=def;}
else{this.qwest=def;}}(function(){var win=window,limit=null,requests=0,request_stack=[],getXHR=function(){return win.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject('Microsoft.XMLHTTP');},version2=(getXHR().responseType===''),qwest=function(method,url,data,options,before){data=data||null;options=options||{};var typeSupported=false,xhr=getXHR(),async=options.async===undefined?true:!!options.async,cache=options.cache,type=options.type?options.type.toLowerCase():'json',user=options.user||'',password=options.password||'',headers={'X-Requested-With':'XMLHttpRequest'},accepts={xml:'application/xml, text/xml',html:'text/html',json:'application/json, text/javascript',js:'application/javascript, text/javascript'},toUpper=function(match,p1,p2){return p1+p2.toUpperCase();},vars='',i,j,parseError='parseError',serialized,success_stack=[],error_stack=[],complete_stack=[],response,success,error,func,promises={success:function(func){if(async){success_stack.push(func);}
else if(success){func.apply(xhr,[response]);}
return promises;},error:function(func){if(async){error_stack.push(func);}
else if(error){func.apply(xhr,[response]);}
return promises;},complete:function(func){if(async){complete_stack.push(func);}
else{func.apply(xhr);}
return promises;}},promises_limit={success:function(func){request_stack[request_stack.length-1].success.push(func);return promises_limit;},error:function(func){request_stack[request_stack.length-1].error.push(func);return promises_limit;},complete:function(func){request_stack[request_stack.length-1].complete.push(func);return promises_limit;}},handleResponse=function(){var i,req,p;--requests;if(request_stack.length){req=request_stack.shift();p=qwest(req.method,req.url,req.data,req.options,req.before);for(i=0;func=req.success[i];++i){p.success(func);}
for(i=0;func=req.error[i];++i){p.error(func);}
for(i=0;func=req.complete[i];++i){p.complete(func);}}
try{if(!/^2/.test(xhr.status)){throw xhr.status+' ('+xhr.statusText+')';}
var responseText='responseText',responseXML='responseXML';if(typeSupported&&xhr.response!==undefined){response=xhr.response;}
else{switch(type){case'json':try{if(win.JSON){response=win.JSON.parse(xhr[responseText]);}
else{response=eval('('+xhr[responseText]+')');}}
catch(e){throw"Error while parsing JSON body";}
break;case'js':response=eval(xhr[responseText]);break;case'xml':if(!xhr[responseXML]||(xhr[responseXML][parseError]&&xhr[responseXML][parseError].errorCode&&xhr[responseXML][parseError].reason)){throw"Error while parsing XML body";}
else{response=xhr[responseXML];}
break;default:response=xhr[responseText];}}
success=true;if(async){for(i=0;func=success_stack[i];++i){func.apply(xhr,[response]);}}}
catch(e){error=true;response="Request to '"+url+"' aborted: "+e;if(async){for(i=0;func=error_stack[i];++i){func.apply(xhr,[response]);}}}
if(async){for(i=0;func=complete_stack[i];++i){func.apply(xhr);}}};if(limit&&requests==limit){request_stack.push({method:method,url:url,data:data,options:options,before:before,success:[],error:[],complete:[]});return promises_limit;}
++requests;if(win.ArrayBuffer&&(data instanceof ArrayBuffer||data instanceof Blob||data instanceof Document||data instanceof FormData)){if(method=='GET'){data=null;}}
else{var values=[],enc=encodeURIComponent;for(i in data){if(data[i]!==undefined){values.push(enc(i)+(data[i].pop?'[]':'')+'='+enc(data[i]));}}
data=values.join('&');serialized=true;}
if(method=='GET'){vars+=data;}
if(cache==null){cache=(method=='POST');}
if(!cache){if(vars){vars+='&';}
vars+='__t='+Date.now();}
if(vars){url+=(/\?/.test(url)?'&':'?')+vars;}
xhr.open(method,url,async,user,password);if(type&&version2){try{xhr.responseType=type;typeSupported=(xhr.responseType==type);}
catch(e){}}
if(version2){xhr.onload=handleResponse;}
else{xhr.onreadystatechange=function(){if(xhr.readyState==4){handleResponse();}};}
for(i in headers){j=i.replace(/(^|-)([^-])/g,toUpper);headers[j]=headers[i];delete headers[i];xhr.setRequestHeader(j,headers[j]);}
if(!headers['Content-Type']&&serialized&&method=='POST'){xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');}
if(!headers.Accept){xhr.setRequestHeader('Accept',accepts[type]);}
if(before){before.apply(xhr);}
xhr.send(method=='POST'?data:null);return promises;};return{get:function(url,data,options,before){return qwest('GET',url,data,options,before);},post:function(url,data,options,before){return qwest('POST',url,data,options,before);},xhr2:version2,limit:function(by){limit=by;}};}()));