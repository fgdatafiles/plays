function clip(text, isAndroidApp, isIOSApp) {
	var copyElement = document.createElement('input');
	copyElement.setAttribute('type', 'text');
	copyElement.setAttribute('value', text);
	copyElement = document.body.appendChild(copyElement);
	
	if(isIOSApp) {
		var el = copyElement
		var editable = el.contentEditable;
		var readOnly = el.readOnly;
		el.contentEditable = true;
		el.readOnly = false;
		var range = document.createRange();
		range.selectNodeContents(el);
		var sel = window.getSelection();
		sel.removeAllRanges();
		sel.addRange(range);
		el.setSelectionRange(0, 999999);
		el.contentEditable = editable;
		el.readOnly = readOnly;
		document.execCommand('copy');
	} else {
		try {	
			if(typeof copyElement.select !== "function") throw 'Not allowed.';		
			copyElement.select();
			if(!document.execCommand('copy')) throw 'Not allowed.';
			copyElement.remove();
		} catch(e) {
			console.log("document.execCommand('copy'); is not supported");
			copyElement.setAttribute('style', 'display:none;');
			if(isAndroidApp) {
				Cocoon.Dialog.prompt({title:"Copy the text below.", text:text},{
				   success : function(text){},
				   cancel : function(){}
				});
			} else {
				prompt('Copy the text below. (ctrl c, enter)', text);			
			}
		}
	}
}