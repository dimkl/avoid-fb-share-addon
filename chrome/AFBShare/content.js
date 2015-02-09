chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "open-video":
		var yvideo=document.querySelector('[data-videoid]');
		var yurlFormat='https://www.youtube.com/watch?v=';
		yvideo? window.open(yurlFormat+yvideo.getAttribute('data-videoid')):'';
		break;
	}
});