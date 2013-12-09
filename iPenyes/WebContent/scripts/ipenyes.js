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
var  fakereloaded = 0; 
$(window).scroll(function()
		{
		if (fakereloaded < 4){
			    if (($(document).height() - 100)  <= $(window).scrollTop() + $(window).height()) 
			    {
	//		        $('#loadmoreajaxloader').show();
			        $.ajax({
			        url: "penyainfinite.jsp",
			        success: function(html)
			        {
			            if(html)
			            {
			            	$(html).insertBefore( "#loadmoreajaxloader" );
			            	$('ul').listview('refresh');
			            }
	//		            $('#loadmoreajaxloader').hide();
			        }
			        });
				    fakereloaded++;  
				    if (fakereloaded >= 4){
				    	$('#loadmoreajaxloader').hide();
				    	$('ul').listview('refresh');
				    }
			    }else{
	//		    	$('#loadmoreajaxloader').hide();
			    }

		}
		});



