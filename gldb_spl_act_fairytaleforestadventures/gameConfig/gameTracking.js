var playdom_app="gamesportal";var playdom_network="bd";var playdom_view_network="bd";var playdom_app_locale="en_US";var version="2.0";window.trackGameEventFinal=function(Event)
{console.log(Event);var data={assetTypeCode:ctoAssetTypeCode,gameEvent:"omni:"+Event,gameBuCode:ctoGameBuCode,gameSeriesCode:ctoGameSeriesCode,gameOwnerName:ctoGameOwnerName,gameTypeCode:ctoGameTypeCode,gameGenreCode:ctoGameGenreCode,gameName:ctoGameName,assetId:ctoAssetId,gameTime:new Date().getTime(),gameSessionId:ctoGameSessionId,assetName:ctoAssetTypeCode+'|'+
ctoGameBuCode+'|'+
ctoGameSeriesCode+'|'+
ctoGameOwnerName+'|'+
ctoGameTypeCode+'|'+
ctoGameGenreCode+'|'+
ctoAssetId+'|'+
ctoGameName,}
console.log(data);cto.trackGame(data);}
window.trackGameEvent=function(vars){var mess="";if(vars.message!=undefined)mess=": "+vars.message;if(vars.action_detail!=undefined)mess=": "+vars.action_detail;window.trackGameEventFinal(vars.action+mess);}
window.DIBIGameTracking=function(vars){var vars={"tag":"game_action","context":gamenametitle,"action":vars.action,"message":vars.message};var mess="";if(vars.message!=undefined)mess=": "+vars.message;window.trackGameEventFinal(vars.action+mess);window.DIBITracking(vars);}
window.playdomTracking=function(vars){window.DIBIGameTracking(vars);}
window.DIBITracking=function(vars){console.log("DIBITracking short version");console.log(vars);var eventInfo=vars;var data={app:playdom_app,tag:eventInfo.tag,app_locale:playdom_app_locale,network:playdom_network,view_network:playdom_view_network,user_id:1};var user_info=navigator.userAgent;var browser_id=getCookie("browser_id");if(browser_id==""){browser_id='xxxxxxxx-xxxx-7xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);return v.toString(16);});setCookie("browser_id",browser_id,365)}
var transaction_id=getCookie("transaction_id");if(transaction_id==""){transaction_id='xxxxxxxx-xxxx-8xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);return v.toString(16);});setCookie("transaction_id",transaction_id)}
var allEventVars;var trackingVars;allEventVars="app="+data.app+
"&network="+data.network+
"&view_network="+data.view_network+
"&user_id="+browser_id+
"&transaction_id="+transaction_id+
"&app_locale="+data.app_locale+
"&browser_id="+browser_id;switch(data.tag){case "clicked_link":var newUser=(document.cookie.indexOf(gamenametitle)>0)?0:1;trackingVars="&tracking_code=unknown"+
"&is_new_user="+newUser+
"&referrer_url="+encodeURI(data.referrer)+
"&tag="+data.tag+
"&context="+data.event_description+
"&app_locale="+data.app_locale+
"&online=y&timeLogged="+Date.now();break;case "user_info":trackingVars="&device_type="+user_info+
"&model="+user_info+
"&os_version="+user_info;break;case "pageview":trackingVars="&pageview="+String(window.location).substring(String(window.location).indexOf("//")+2,String(window.location).lastIndexOf("/"));break;case "game_action":trackingVars="&tag=game_action"+
"&context="+gamenametitle+
"&action="+eventInfo.action;if(eventInfo.message!=undefined)trackingVars+="&message="+eventInfo.message;break;case "geo":}
document.cookie=gamenametitle+"=true";var trackingHash="http://log.data.disney.com/cp?";trackingHash+=trackingVars+"&"+allEventVars;var i=new Image();i.src=trackingHash;}
function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toGMTString();if(exdays==undefined){exdays="";}
document.cookie=cname+"="+cvalue+"; "+exdays}
function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name)!=-1)return c.substring(name.length,c.length);}
return "";}
if(typeof console==="undefined"){console={log:function(){},debug:function(){}};}
console.log("gameTracking loaded  v"+version);