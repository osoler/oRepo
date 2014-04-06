var filterPenyes = function () {
	var location;
	var yearFrom;
	var yearTo;
	var numFansFrom;
	var numFansTo;
	
	function openFilter() {
		
	    // Triggering bPopup when click event is fired
	    $('#filterPopup').bPopup({
		    easing: 'easeOutBack', //uses jQuery easing plugin
	        speed: 1050,
	        transition: 'slideDown',
	        position: [5, 73],
	        modal:true,
	        modalClose :false
	    });
	
	};
	
	function closeFilter() {
		 $('#filterPopup').bPopup().close();
	}
	
	function resetFilter() {
		$('#filterForm')[0].reset();
	};	
	
	function search() {
		var filter;
		var area="world";
		if ( $("#radio-area1")[0].checked) {
			area = $("#radio-area1")[0].value;
		}else if ( $("#radio-area2")[0].checked) {
			area = $("#radio-area2")[0].value;
		}else if ( $("#radio-area3")[0].checked) {
			area = $("#radio-area3")[0].value;
		}else if ( $("#radio-area4")[0].checked) {
			area = $("#radio-area4")[0].value;
		}
		
		filter  =  "&area=" + area;
		filter  +=  "&yearFrom=-1";
		filter  +=  "&yearTo=-1";
		filter  +=  "&numFansFrom=-1";
		filter  +=  "&numFansTo=-1";
		
		var nocache = new Date().getTime();
        $.ajax({
	        url: "/iPenyesServer/getPenyes?cache=" + nocache + filter,
	        success: function(result){
	            if(result)
	            {
	            	$("#listviewpenyes").empty();
	            	$("#listviewpenyes").append("<li id='loadmoreajaxloader'>&nbsp;</li>");	            	
	            	listPenyes.loadPenyesJSON(result);
	            	closeFilter();
	            }
	        },
	        error: function (xhr, ajaxOptions, thrownError) {
	            console.log(xhr.status);
	            console.log(thrownError);
	        }
        });			
		
	}
	
	return { 
	    "openFilter" : function () {
	    	openFilter();
	    },
	    "search" : function () {
	    	search();
	    },	    
	    "closeFilter" : function () {
	    	closeFilter(); 
	    },
	    "resetFilter" : function () {
	    	resetFilter(); 	    	
	    }
	  }; // end of the return
}();