var scrollPenyes = function () {
 
	var  fakereloaded = 0; 
	var  maxfakereloaded = 3; 

  return {  
    "setFakeReloaded" : function (newValue) {
    	fakereloaded = newValue;
    },
    "getFakeReloaded" : function () {
     return fakereloaded; 
    },
    "getMaxFakeReloaded" : function () {
     return maxfakereloaded; 
    }
  }; // end of the return
}();


//Events

$(window).scroll(function()
		{
		if (($.mobile.activePage.is("#listPenyes"))||($.mobile.activePage.is("#detailPenyes"))){		
			if (($.mobile.activePage.is("#listPenyes"))&&(scrollPenyes.getFakeReloaded() < scrollPenyes.getMaxFakeReloaded())&&
					(($(document).height() - 200)  <= $(window).scrollTop() + $(window).height())
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
			        scrollPenyes.setFakeReloaded(scrollPenyes.getFakeReloaded() + 1);
				    if (scrollPenyes.getFakeReloaded() >= scrollPenyes.getMaxFakeReloaded()){
				    	$('#loadmoreajaxloader').hide();
				    	$('#listviewpenyes').listview('refresh');
				    }
			    }
			}
		});