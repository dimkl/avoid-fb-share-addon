// omnibox
chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
	suggest([
		{content: "open-video", description: "Open youtube video to new page"}
		]);
});
chrome.omnibox.onInputEntered.addListener(function(text) {
	if(text == "open-video") {
		chrome.tabs.getSelected(null, function(tab){
			chrome.tabs.sendMessage(tab.id, {type: "open-video"});
		});
	}
});
// main funcitonality
chrome.browserAction.onClicked.addListener(function callback(){
	chrome.tabs.getSelected(null, function(tab){
		chrome.tabs.sendMessage(tab.id, {type: "open-video"});
	});
});