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
	
	function getArea() {
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
		return area;
	};	
	
	function search() {
		closeFilter();
		
		listPenyes.cleanList();
		
		listPenyes.hideShadows();

		$.mobile.showPageLoadingMsg();
		$(".ui-loader").css("display", "block");
		
		var filter;
		var area = getArea();
		
		filter  =  "&area=" + area;
		filter  +=  "&yearFrom=" + $("#yearFrom")[0].value;
		filter  +=  "&yearTo=" + $("#yearTo")[0].value;
		filter  +=  "&numFansFrom=" + $("#numFansFrom")[0].value;
		filter  +=  "&numFansTo=" + $("#numFansTo")[0].value;
		
		var nocache = new Date().getTime();
        $.ajax({
	        url: "/iPenyesServer/getPenyes?cache=" + nocache + filter,
	        success: function(result){
	            if(result)
	            {        
	            	listPenyes.setListOfFanClubs(result);
	            	
	            	if ($.mobile.activePage.is("#listPenyes")){
	            		listPenyes.loadPenyesJSON();
	            	}
	            	
	            	if ($.mobile.activePage.is("#mapPenyes")){
	            		mapPenyes.destroyMap();
	            		mapPenyes.createMap();
	            	}
	            	
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
	    },
	    "getArea" : function () {
	    	return getArea(); 	    	
	    }
	  }; // end of the return
}();