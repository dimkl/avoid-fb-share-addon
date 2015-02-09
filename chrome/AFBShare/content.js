var yUrlFormat='https://www.youtube.com/watch?v=';
var cases={
	'html5':function(){
		var yvideo=document.querySelector('[data-videoid]');
		return yvideo? yvideo.getAttribute('data-videoid'):null;
	}
	,'embedded':function(){
		var format='https://www.youtube.com/embed';
		var regex=/https\:\/\/www\.youtube\.com\/embed\/(.*)\?.*/gi;

		var yvideo=document.querySelector('iframe[src^="'+format+'"]');

		return yvideo?yvideo.src.replace(regex,'$1'):null;
	}
	,'full':function(){
		var format='https://www.youtube.com/watch?v=';
		var regex=/https\:\/\/www\.youtube\.com\/watch?.*v\=(.*)\&.*/gi;

		var yvideo=document.querySelector('iframe[src^="'+format+'"]');

		return yvideo?yvideo.src.replace(regex,'$1'):null;
	}
	, 'shared':function(){
		var format='http://youtu.be/';
		var regex=/https\:\/\/youtu\.be\/(.*)/gi;

		var yvideo=document.querySelector('iframe[src^="'+format+'"]');

		return yvideo?yvideo.src.replace(regex,'$1'):null;
	}
	,'emebed-object':function(){
		var format='http://www.youtube.com/v/';
		var regex=/https\:\/\/www\.youtube\.com\/v\/(.*)/gi;

		var yvideo=document.querySelector('[src^="'+format+'"]');

		return yvideo?yvideo.src.replace(regex,'$1'):null;
	}
};

chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	switch(message.type) {
		case "open-video":
		var yvideoid;
		for(var i in cases){
			yvideoid=cases[i]();

			if(yvideoid)
				break;
		}
		yvideoid? window.open(yUrlFormat+yvideoid):'';
		break;
	}
});