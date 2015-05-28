/**
 * 
 */


document.addEventListener('DOMContentLoaded', function() {
		
	var qrybtn = document.getElementById("qrybtn");
	
	qrybtn.addEventListener('click', function() {
		
		
		var totalTabs = 0;
		var go = true;
		var tab = null;
		for (c = 0; c < 5; c++){
			tab = chrome.tabs[c];
//			var ts = tab.tabStatus;
			alert(tab);
//			if((ts != "loading") && (ts != "complete")){
//				go = false;
//			}
		}
		
		var query = document.getElementById("query").value;
		var results = document.getElementById("results");
		results.innerHTML = "<br/>" + query;
		results.style.visibility = "visible";
		
	});
	
	
});

