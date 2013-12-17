$(document).on('pageshow', '#detailPenyes',function(e,data){ 
	checkOrientation();
	refreshSlider() ;
});
function fullScreen(div) {
	$.mobile.changePage($("#fullScreen"),{ transition: "pop", changeHash: false });
	return false; 
}
function backFullScreen() {
	$.mobile.changePage($("#detailPenyes"),{ transition: "pop", reverse: true });
	return false; 
}
function refreshSlider() {
	$('.iosSlider').iosSlider({desktopClickDrag: true});
	return false; 
}
function goToDetail() {
	event.preventDefault();
	$.mobile.changePage( "#detailPenyes" ,{ transition: "slide", changeHash: false });
	return false; 
}