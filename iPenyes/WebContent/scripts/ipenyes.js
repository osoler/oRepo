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
		    if($(window).scrollTop() == $(document).height() - $(window).height())
		    {
		        $('div#loadmoreajaxloader').show();
		        $.ajax({
		        url: "penya.jsp",
		        success: function(html)
		        {
		            if(html)
		            {
		                $("#postswrapper").append(html);
		                $('div#loadmoreajaxloader').hide();
		            }else
		            {
		                $('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
		            }
		        },
                error: function(XMLHttpRequest, textStatus, errorThrown) { 
                	 $("#postswrapper").append("<li data-icon='false' ><a href='Detail.jsp' data-transition='slide' class='penyaBean' >			<div id='detailPenyaBean'>	<div class='coat'><img class='ui-li-icon' src='/images/escudos/0002.LaGranada-icon.png' ></div>		<div  class='description'> 	<div  class='namePenya'><span>Penya Suecia</span></div>	</div>		<div class='rightarrow'><img class='icon-arrow' src='/images/icon-arrow-black.png'></div>		<div id='penyaMoreInfo' class='moreinfo'>		<div id='penyaLocation' class='location'><span>Barcelona</span></div>		<div id='penyaFundationYear' class='fundationYear'>Fundación: 1985</div>				</div>		</div>	</a></li>");
		             $('div#loadmoreajaxloader').hide();
                }
		        });
		    }
		});



