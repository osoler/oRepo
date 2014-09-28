var filterPenyes = function () {
	var listOfFanClubs = undefined;	
	
	var  fullLoaded = false; 
	
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
		
	function search(more) {
		closeFilter();
		
		var lastPosition = 0;
		if (more){
			lastPosition = filterPenyes.getListOfFanClubs().length;
		}else{
			listOfFanClubs = undefined;
		}
				
		setTimeout(function(){
			navigation.hideShadows();
			filterPenyes.newSearch(lastPosition, function(){
				
				if ($.mobile.activePage.is("#listPenyes")){
					mapPenyes.destroyMap();
					listPenyes.displayPenyes();
					navigation.showShadows();
		    	}
		    	
		    	if ($.mobile.activePage.is("#mapPenyes")){
		    		listPenyes.cleanList();
		    		mapPenyes.displayPenyes();
		    	}
		    	
			});
		}, 1000);
	}	
	
	function newSearch(lastPosition, callBack) {
		fullLoaded = false;		
		var filter  =  "&lastPosition=" + lastPosition + "&area=" + getArea() + 
					   "&yearFrom=" + $("#yearFrom")[0].value + "&yearTo=" + $("#yearTo")[0].value +  
					   "&search=" + $("#search-basic").val();
		
		var url = configuration.getUrlServer() + "/getPenyes?cache=" + new Date().getTime() + filter;
		
		navigation.showPageLoading();
        $.ajax({
	        url: url,
	        success: function(result){
	            if(result)
	            {        

	            	if (result.length < 100){
		            	fullLoaded = true;
	            	}
	            	
	            	if (listOfFanClubs === undefined){
	            		listOfFanClubs = result;
	            	}else{
	            		listOfFanClubs = listOfFanClubs.concat(result);
	            	}
	            	
	            	navigation.hidePageLoading();
	            	
	            	if (result.length === 0){
	            		navigation.alert(texts.h().noResults);
	            	}
	            	
	            	if (callBack){
	            		callBack();
	            	}    	
	            }
	        },
	        error: function (xhr, ajaxOptions, thrownError) {
	        	navigation.hidePageLoading();
	        	navigation.alert(texts.h().connectionFailed);
	        }
        });			
		
	}
	
	return { 
	    "getListOfFanClubs" : function () {
		     return listOfFanClubs; 
		},
	    "openFilter" : function () {
	    	openFilter();
	    },
	    "search" : function (more) {
	    	search(more);
	    },	    
	    "newSearch" : function (lastPosition, callBack) {
	    	newSearch(lastPosition, callBack);
	    },	 
	    "closeFilter" : function () {
	    	closeFilter(); 
	    },
	    "resetFilter" : function () {
	    	resetFilter(); 	    	
	    },
	    "getArea" : function () {
	    	return getArea(); 	    	
	    },
	    "setFullLoaded" : function (loaded) {
	    	fullLoaded = loaded;
	    },
	    "isFullLoaded" : function () {
	     return fullLoaded; 
	    }
	  }; // end of the return
}();