var filterPenyes = function () {
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
		setTimeout(newSearch, 1000);
	}	
	
	function showPageLoading() {
		$.mobile.showPageLoadingMsg();
		$(".ui-loader").css("display", "block");
	}
	
	function hidePageLoading() {
		$.mobile.hidePageLoadingMsg();
    	$(".ui-loader").css("display", "none");
	}
	
	function newSearch() {
		
		listPenyes.cleanList();
		mapPenyes.destroyMap();
		
		listPenyes.hideShadows();

		filterPenyes.showPageLoading();
		
		var filter;
		var area = getArea();
		filter  =  "&area=" + area;
		filter  +=  "&yearFrom=" + $("#yearFrom")[0].value;
		filter  +=  "&yearTo=" + $("#yearTo")[0].value;
		filter  +=  "&numFansFrom=" + $("#numFansFrom")[0].value;
		filter  +=  "&numFansTo=" + $("#numFansTo")[0].value;
		
		var nocache = new Date().getTime();
		var url = configuration.getUrlServer() + "/getPenyes?cache=" + nocache + filter;
        $.ajax({
	        url: url,
	        success: function(result){
	            if(result)
	            {        
	            	fullLoaded = true;
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
	        	filterPenyes.hidePageLoading();
	        	alert("Not posible to connect");
	            console.log(xhr.status);
	            console.log(thrownError);
	        }
        });			
		
	}
	
	return { 
	    "showPageLoading" : function () {
	    	showPageLoading();
	    },
	    "hidePageLoading" : function () {
	    	hidePageLoading();
	    },		
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