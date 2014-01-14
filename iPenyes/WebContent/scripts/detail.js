function checkOrientation() {
	if (window.orientation === 0 || window.orientation === 180){
		//portrait orientation
		$( 'div.photopenyaitem' ).each(function(){
			$(this).removeClass('horizontal');
		});
		$('div.iosSlider').removeClass('horizontal');
	}else{
		//Landscape orientation
		$( 'div.photopenyaitem' ).each(function(){
			$(this).addClass('horizontal');	
		});
		$('div.iosSlider').addClass('horizontal');	
	}
	return false; 
}

$(document).on('pageshow', '#detailPenyes',function(e,data){ 
	checkOrientation();
	refreshSlider() ;
});

function doSomething() {
  var currentScale = window.outerWidth;
  if (currentScale === 320)
  {
  	$("#closer").show();
  } else  {
  	$("#closer").hide();
  }
};

var resizeTimer;
$(document).on('gestureend','#fullScreen',function(e,data) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(doSomething, 600);
});

$(document).on('doubletap','#fullScreen',function(e,data) {
	   clearTimeout(resizeTimer);
	   resizeTimer = setTimeout(doSomething, 600);
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
	$(".innerInfiniteShadowTop").hide();
	$(".innerInfiniteShadowBottom").hide();
	$.mobile.changePage( "#detailPenyes" ,{ transition: "slide", changeHash: false });
	return false; 
}
function backToList() {
	$(".innerInfiniteShadowTop").hide();
	$(".innerInfiniteShadowBottom").hide();
	return false; 
}
