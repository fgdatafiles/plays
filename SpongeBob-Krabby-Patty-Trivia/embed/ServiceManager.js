/*
 * ads.nick.com
 * Omniture			pageNameAppend("name")
 */
var serviceManager = function()
{
	function addScript(pId, pSrc) 
	{
		var element = document.createElement('script'); 
		element.setAttribute('id', pId); 
		element.setAttribute('type', 'text/javascript');
		element.setAttribute('src', pSrc);
		document.getElementsByTagName('head')[0].appendChild(element);	
	}
	
	addScript("coda", "/js/reporting/coda.js");
	addScript("c_config", "/js/reporting/c_config.js");
	
	return {
		sendTrackingCall : function(pName, pData)
		{
			pageNameAppend(pName);
		}
	};
}();