$(document).on('pageshow', '#splashPage',function(e,data){ 
	 centerSplash();
});

$(document).on('pageshow', '#detailPenyes',function(e,data){ 
	checkOrientation();
	refreshSlider() ;
});

function refreshSlider() {
	$('.iosSlider').iosSlider({
		desktopClickDrag: false, scrollbarWidth: '100px', desktopClickDrag: true, scrollbarStageWidth: '100px'
	});
}

function hideSplash() {
	  $.mobile.changePage("#listPenyes", "fade");
}

function centerSplash() {

	   var welcomeWrapper = $("#WelcomeWrapper").height()/2;
	   var valkomenLogo    = $("#ValkomenLogo").height();
	   
	   var centeredSize = welcomeWrapper - valkomenLogo;
	   $("#ValkomenLogo").css("margin-top",centeredSize+ "px");
	   setTimeout(hideSplash, 2000);
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



