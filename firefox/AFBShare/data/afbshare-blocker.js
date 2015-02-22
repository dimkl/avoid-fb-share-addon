var MAX_INTERVAL_COUNTER = 50;
var popupIdsDictionary = {
    "www.latesthackingnews.com": "#wp_social_popup_and_get_traffic",
    "www.enhmerwsh.gr": "#wp_social_popup_and_get_traffic",
    "tonwtiko.com": "#fblikepop,#fblikebg"
};

function blockShare() {
    var popup;
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
        for (var i = 0; i < popup.length; i++) popup[i] && popup[i].remove();
    } else if (popup) {
        popup.remove();
    } else {
        return false;
    }
    return true;
}
var interval_counter = 0;
var interval = window.setInterval(function() {
    (blockShare() || interval_counter >= MAX_INTERVAL_COUNTER) && window.clearInterval(interval);
}, 200);