function OpenVideo (event){
	var yvideo=document.querySelector('[data-videoid]');
	console.log(yvideo)
	var yurlFormat='https://www.youtube.com/watch?v=';
	yvideo? window.open(yurlFormat+yvideo.getAttribute('data-videoid')):'';
}