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
	$('.iosSlider').iosSlider({
		desktopClickDrag: false, scrollbarWidth: '100px', desktopClickDrag: true, scrollbarStageWidth: '100px'
	});
}

var  fakereloaded = 0; 
var  maxfakereloaded = 20; 
$(window).scroll(function()
		{
		if (($.mobile.activePage.is("#listPenyes"))&&(fakereloaded < maxfakereloaded)&&
				(($(document).height() - 100)  <= $(window).scrollTop() + $(window).height())
			){
		        $.ajax({
		        url: "penyainfinite.jsp",
		        success: function(html)
		        {
		            if(html)
		            {
		            	$(html).insertBefore( "#loadmoreajaxloader" );
		            	$('ul').listview('refresh');
		            }
		        }
		        });
			    fakereloaded++;  
			    if (fakereloaded >= maxfakereloaded){
			    	$('#loadmoreajaxloader').hide();
			    	$('ul').listview('refresh');
			    }
		    }
		});



