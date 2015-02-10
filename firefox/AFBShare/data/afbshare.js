(function () {
    if (!FB) {
        //no facebook script detected
        return;    
    }
    var interval = window.setInterval( function () {
        if ( FB && FB.Event && FB.Event.fire ) {
            window.clearInterval(interval);
            FB.Event.fire('edge.create');
        }
    }, 300);
})();
