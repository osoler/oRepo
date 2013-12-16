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