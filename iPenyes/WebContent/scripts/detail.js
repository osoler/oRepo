$(document).on('pageshow', '#detailPenyes',function(e,data){ 
	checkOrientation();
	refreshSlider() ;
});
function fullScreen(div) {
	$.mobile.changePage($("#fullScreen"));
}
function backFullScreen() {
	$.mobile.changePage($("#detailPenyes"));
}
function refreshSlider() {
	$('.iosSlider').iosSlider({desktopClickDrag: true});
}