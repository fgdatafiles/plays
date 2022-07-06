(function()
{if(typeof window.CocoonJS==='undefined'||window.CocoonJS===null)throw("The CocoonJS object must exist and be valid before adding more functionalities to an extension.");if(typeof window.CocoonJS.App==='undefined'||window.CocoonJS.App===null)throw("The CocoonJS.App object must exist and be valid before adding more functionalities to it.");CocoonJS.App=CocoonJS.App?CocoonJS.App:{};CocoonJS.App.onLoadInTheWebViewSucceed=new CocoonJS.EventHandler("IDTK_APP","App","forwardpageload");CocoonJS.App.onLoadInTheWebViewFailed=new CocoonJS.EventHandler("IDTK_APP","App","forwardpagefail");function checkEmulatedWebViewReady(){var emulatedWB=CocoonJS.App.EmulatedWebView;if(emulatedWB){return;}
emulatedWB=document.createElement('div');emulatedWB.setAttribute('id','CocoonJS_App_ForCocoonJS_WebViewDiv');emulatedWB.style.width=0;emulatedWB.style.height=0;emulatedWB.style.position="absolute";emulatedWB.style.left=0;emulatedWB.style.top=0;emulatedWB.style.backgroundColor='transparent';emulatedWB.style.border="0px solid #000";var frame=document.createElement("IFRAME");frame.setAttribute('id','CocoonJS_App_ForCocoonJS_WebViewIFrame');frame.setAttribute('name','CocoonJS_App_ForCocoonJS_WebViewIFrame');frame.style.width=0;frame.style.height=0;frame.frameBorder=0;frame.allowtransparency=true;emulatedWB.appendChild(frame);CocoonJS.App.EmulatedWebView=emulatedWB;CocoonJS.App.EmulatedWebViewIFrame=frame;if(!document.body){document.body=document.createElement("body");}
document.body.appendChild(CocoonJS.App.EmulatedWebView);}
CocoonJS.App.pause=function()
{if(CocoonJS.App.nativeExtensionObjectAvailable)
{return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP","pause",arguments);}};CocoonJS.App.resume=function()
{if(CocoonJS.App.nativeExtensionObjectAvailable)
{return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP","resume",arguments);}};CocoonJS.App.loadInTheWebView=function(path,storageType)
{if(navigator.isCocoonJS&&CocoonJS.App.nativeExtensionObjectAvailable)
{CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP","loadInTheWebView",arguments)}
else
{var xhr=new XMLHttpRequest();xhr.onreadystatechange=function(event){if(xhr.readyState===4)
{if(xhr.status===200)
{checkEmulatedWebViewReady();var callback=function(event){CocoonJS.App.onLoadInTheWebViewSucceed.notifyEventListeners(path);CocoonJS.App.EmulatedWebViewIFrame.removeEventListener("load",callback);};CocoonJS.App.EmulatedWebViewIFrame.addEventListener("load",callback);CocoonJS.App.EmulatedWebViewIFrame.contentWindow.location.href=path;}
else if(xhr.status===404)
{this.onreadystatechange=null;CocoonJS.App.onLoadInTheWebViewFailed.notifyEventListeners(path);}}};xhr.open("GET",path,true);xhr.send();}};CocoonJS.App.reloadWebView=function()
{if(CocoonJS.App.nativeExtensionObjectAvailable&&navigator.isCocoonJS)
{CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP","reloadWebView",arguments);}
else
{checkEmulatedWebViewReady();CocoonJS.App.EmulatedWebViewIFrame.contentWindow.location.reload();}};CocoonJS.App.showTheWebView=function(x,y,width,height)
{if(CocoonJS.App.nativeExtensionObjectAvailable&&navigator.isCocoonJS)
{CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP","showTheWebView",arguments)}
else
{checkEmulatedWebViewReady();CocoonJS.App.EmulatedWebViewIFrame.style.width=(width?width/window.devicePixelRatio:window.innerWidth)+'px';CocoonJS.App.EmulatedWebViewIFrame.style.height=(height?height/window.devicePixelRatio:window.innerHeight)+'px';CocoonJS.App.EmulatedWebView.style.left=(x?x:0)+'px';CocoonJS.App.EmulatedWebView.style.top=(y?y:0)+'px';CocoonJS.App.EmulatedWebView.style.width=(width?width/window.devicePixelRatio:window.innerWidth)+'px';CocoonJS.App.EmulatedWebView.style.height=(height?height/window.devicePixelRatio:window.innerHeight)+'px';CocoonJS.App.EmulatedWebView.style.display="block";console.log(CocoonJS.App.EmulatedWebViewIFrame.style.cssText);}};CocoonJS.App.hideTheWebView=function()
{if(CocoonJS.App.nativeExtensionObjectAvailable)
{var javaScriptCodeToForward="ext.IDTK_APP.makeCall('hide');";return CocoonJS.App.forwardAsync(javaScriptCodeToForward);}
else if(!navigator.isCocoonJS)
{checkEmulatedWebViewReady();CocoonJS.App.EmulatedWebView.style.display="none";}};CocoonJS.App.markAsMusic=function(audioFilePath)
{if(CocoonJS.App.nativeExtensionObjectAvailable)
{return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP","addForceMusic",arguments);}};CocoonJS.App.setAntialias=function(enable)
{if(CocoonJS.App.nativeExtensionObjectAvailable)
{return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP","setDefaultAntialias",arguments);}};CocoonJS.App.setAppShouldFinishCallback=function(appShouldFinishCallback)
{if(navigator.isCocoonJS)
{window.onidtkappfinish=appShouldFinishCallback;}}
CocoonJS.App.setTextureReduction=function(sizeThreshold,applyTo,forbidFor)
{if(CocoonJS.App.nativeExtensionObjectAvailable)
{CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP","setDefaultTextureReducerThreshold",arguments);}};CocoonJS.App.logMemoryInfo=function()
{if(CocoonJS.App.nativeExtensionObjectAvailable)
{return CocoonJS.makeNativeExtensionObjectFunctionCall("IDTK_APP","logMemoryInfo",arguments);}};CocoonJS.App.enableFPSInTheWebView=function(fpsLayout,textColor)
{if(!CocoonJS.App.fpsInTheWebViewEnabled)
{fpsLayout=fpsLayout?fpsLayout:CocoonJS.App.FPSLayout.TOP_RIGHT;textColor=textColor?textColor:"white";var jsCode=""+
"(function()"+
"{"+
"var COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES = ['js/CocoonJSExtensions/CocoonJS.js', 'js/CocoonJSExtensions/CocoonJS_App.js', 'js/CocoonJSExtensions/CocoonJS_App_ForWebView.js'];"+
"var loadedScriptCounter = 0;"+
"var loadedScriptFunction = function() "+
"{ "+
"loadedScriptCounter++;"+
"if (loadedScriptCounter >= COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES.length)"+
"{"+
"CocoonJS.App.enableFPS("+JSON.stringify(fpsLayout)+", "+JSON.stringify(textColor)+");"+
"}"+
"};"+
"for (var i = 0; i < COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES.length; i++)"+
"{"+
"var s = document.createElement('script');"+
"s.onload = loadedScriptFunction;"+
"s.src = COCOONJS_WEBVIEW_EXTENSION_SCRIPT_FILES[i];"+
"document.body.appendChild(s);"+
"}"+
"})();";setTimeout(function()
{CocoonJS.App.forward(jsCode);},3000);CocoonJS.App.fpsInTheWebViewEnabled=true;}};CocoonJS.App.disableFPSInTheWebView=function()
{};})();