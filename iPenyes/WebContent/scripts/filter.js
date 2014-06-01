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
		
	function search() {
		closeFilter();
				
		setTimeout(function(){
			navigation.hideShadows();
			filterPenyes.newSearch(function(){
				
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
	
	function newSearch(callBack) {
				
		var filter  =  "&area=" + getArea() + "&yearFrom=" + $("#yearFrom")[0].value + "&yearTo=" + $("#yearTo")[0].value + "&numFansFrom=" + $("#numFansFrom")[0].value + "&numFansTo=" + $("#numFansTo")[0].value;
		
		var url = configuration.getUrlServer() + "/getPenyes?cache=" + new Date().getTime() + filter;
		
		navigation.showPageLoading();
        $.ajax({
	        url: url,
	        success: function(result){
	            if(result)
	            {        
	            	fullLoaded = true;
	            	listOfFanClubs = result;
	            	
	            	navigation.hidePageLoading();
	            	
	            	if (callBack){
	            		callBack();
	            	}    	
	            }
	        },
	        error: function (xhr, ajaxOptions, thrownError) {
	        	navigation.hidePageLoading();
	        	navigation.alert("Connection failed");
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
	    "search" : function () {
	    	search();
	    },	    
	    "newSearch" : function (callBack) {
	    	newSearch(callBack);
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

$(window).scroll(function()
		{
		if ($.mobile.activePage.is("#listPenyes")){
			
			var totalHeight = $(document).height();	
			var scrollTop = $(window).scrollTop();
			var windowHeight = $(window).height();
			var timeToSearch = (totalHeight-200) <= (scrollTop + windowHeight);
			var alreadyLoaded = totalHeight > windowHeight;
			
			if (timeToSearch && alreadyLoaded){
				
				 	//TODO: add more --> filterPenyes.search();
			
			}			
			
		}
		});