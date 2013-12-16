$(window).bind( 'orientationchange', function(e){
	if ($.mobile.activePage.is("#mapPenyes")){ 
		$.mobile.changePage( "Map2.jsp#mapPenyes" ,{ transition: "none", changeHash: false });
	}	
	if ($.mobile.activePage.is("#mapPenyes2")){ 
		$.mobile.changePage( "Map.jsp#mapPenyes" ,{ transition: "none", changeHash: false });
	}	
	if ($.mobile.activePage.is("#detailPenyes")){ 
		checkOrientation();
	}	
});
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
}