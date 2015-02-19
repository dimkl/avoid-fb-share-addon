var popup;
var popupIdsDictionary={
	"www.latesthackingnews.com":"wp_social_popup_and_get_traffic"
};

if(popupIdsDictionary[location.host]){
	popup=document.getElementById(popupIdsDictionary[location.host]);
	//dont look in dictionary
	popupIdsDictionary=[];
}

for(var domain in popupIdsDictionary){
	popup=document.getElementById(popupIdsDictionary[domain])
	if(!popup)break;
}

popup&&popup.remove();
