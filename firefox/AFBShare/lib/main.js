var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;

var button = buttons.ActionButton({
	id: "afbshare-btn",
	label: "AFBShare",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: handleClick
});

function handleClick(state) {
	var worker=tabs.activeTab.attach({
		contentScriptFile:  data.url("afbshare.js")
	});
}

//clear share popup
tabs.on('ready', function(tab) {
	tab.attach({
		contentScriptFile:  data.url("afbshare-blocker.js")
	});
});