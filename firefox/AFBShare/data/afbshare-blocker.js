var MAX_INTERVAL_COUNTER = 50;
var popupIdsDictionary = {
	"www.latesthackingnews.com": "#wp_social_popup_and_get_traffic",
	"www.enhmerwsh.gr": "#wp_social_popup_and_get_traffic",
	"tonwtiko.com": "#fblikepop,#fblikebg",
	"kafeneio-gr.blogspot.gr":"#fanback",
	"periergaa.blogspot.gr":"#fanback"
};

function blockShare() {
	var popup=null;
    var removed=false;

	if (popupIdsDictionary[location.host]) {
		popup = document.querySelectorAll(popupIdsDictionary[location.host]);
        //dont look in dictionary
        popupIdsDictionary = [];
    }
    for (var domain in popupIdsDictionary) {
    	popup = document.querySelectorAll(popupIdsDictionary[domain])
    	if (!popup) break;
    }

    if (popup && popup.length) {
    	for (var i = 0; i < popup.length; i++) removed = removed || (popup[i] && typeof popup[i].remove=="function" &&  popup[i].remove());
    } else if (popup) {
    	removed=removed || (typeof popup.remove=="function" && popup.remove());
    } 

    return removed;
}
var interval_counter = 0;
var interval = window.setInterval(function() {
	interval_counter++;
	(blockShare() || (interval_counter >= MAX_INTERVAL_COUNTER)) && window.clearInterval(interval);
}, 200);