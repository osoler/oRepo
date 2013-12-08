$(document).on('pageshow', '#splashPage',function(e,data){ 
	 centerSplash();
});

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

$("#googlePinSpan").live("touchstart", function(e) {
	  $(this).trigger("hover");
	});
	 
$("#googlePinSpan").live("touchend", function(e) {
  $(this).trigger("blur");
});


$(window).scroll(function()
		{
		    if (($(document).height() - 2000)  <= $(window).scrollTop() + $(window).height()) 
		    {
		        $('#loadmoreajaxloader').show();
		        $.ajax({
		        url: "penyainfinite.jsp",
		        success: function(html)
		        {
		            if(html)
		            {
		            	$(html).insertBefore( "#loadmoreajaxloader" );
		            	$('ul').listview('refresh');
		            }
		            $('#loadmoreajaxloader').hide();
		        }
		        });
		    }else{
		    	$('#loadmoreajaxloader').hide();
		    }
		});



