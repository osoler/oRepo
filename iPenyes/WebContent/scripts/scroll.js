var  fakereloaded = 0; 
var  maxfakereloaded = 3; 
$(window).scroll(function()
		{
		if (($.mobile.activePage.is("#listPenyes"))||($.mobile.activePage.is("#detailPenyes"))){
			if ($(window).scrollTop() <= 1){
				$(".innerInfiniteShadowTop").hide();
			}else{
	        	$(".innerInfiniteShadowTop").show();
			}
		
			if (($.mobile.activePage.is("#listPenyes"))&&
				(($(document).height() - 20)  <= $(window).scrollTop() + $(window).height())
				){
				$('#listFooter .innerInfiniteShadowBottom').hide();
			}else{
	        	$('#listFooter .innerInfiniteShadowBottom').show();
			}
	
			if (($.mobile.activePage.is("#detailPenyes"))&&
					(($(document).height() - 40)  <= $(window).scrollTop() + $(window).height())
					){
				$('#detailFooter .innerInfiniteShadowBottom').hide();
			}else{
	        	$('#detailFooter .innerInfiniteShadowBottom').show();
			}
			
			
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
			            	$('#listviewpenyes').listview('refresh');
			            }
			        }
			        });
				    fakereloaded++;  
				    if (fakereloaded >= maxfakereloaded){
				    	$('#loadmoreajaxloader').hide();
				    	$('#listviewpenyes').listview('refresh');
				    }
			    }
			}
		});