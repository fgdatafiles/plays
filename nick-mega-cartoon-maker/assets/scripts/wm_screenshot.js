function takeScreenshot(){
    //var canvas = document.getElementById("embedtarget-canvas");
    //var dataURL = canvas.toDataURL("image/jpeg", 1.0);
    //var url = dataURL.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
   // canvas.toBlob(function(blob) {
	//    saveAs(blob, "testSaveScreenshot.jpg");
	//}, "image/jpeg");
	var tString = "embedtarget";
	var tElement = document.getElementById("embedtarget");
	if (tElement == null) tString = "embedTarget";
	var dataUrl = document.getElementById(tString+'-canvas').toDataURL(); //attempt to save base64 string to server using this var
    var windowContent = '<!DOCTYPE html>';
    windowContent += '<html>'
    windowContent += '<head><title>Nickelodeon - MEGA Cartoon Creator Print Out</title>';
    windowContent += '<style type="text/css" media="print">@page { size: landscape; }</style></head>';
    windowContent += '<body>'
    windowContent += '<img src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';
    var printWin = window.open('','','width=340,height=260');
    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();
	setTimeout(function() {
		printWin.focus();
	    printWin.print();
	    printWin.close();
	}, 1000);


	//console.log("first thing done");
    var content = document.getElementById("divcontents");
    var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    pri.document.open();
    pri.document.write(content.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
	//console.log("second thing done");
}

function downloadScreenshot(){
	var tString = "embedtarget";
	var tElement = document.getElementById("embedtarget");
	if (tElement == null) tString = "embedTarget";
 	var canvas = document.getElementById(tString+"-canvas");
    var dataURL = canvas.toDataURL("image/jpeg", 1.0);
   // var url = dataURL.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
     canvas.toBlob(function(blob) {
	    saveAs(blob, "henry_danger_screenshot.jpg");
	}, "image/jpeg");
}

function getUrl(pSt){
	alert(pSt);
}
