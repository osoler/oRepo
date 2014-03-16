var listPenyes = function () {
	 
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

	function refresh(){
		$('#listviewpenyes').listview('refresh');
	};
	
	function showShadows(){
		$(".innerInfiniteShadowTop").fadeIn( "slow" );
		$(".innerInfiniteShadowBottom").fadeIn( "slow" );
	};
	
	function hideShadows(){
		$(".innerInfiniteShadowTop").hide();
		$(".innerInfiniteShadowBottom").hide();
	};
	
	return { 
	    "openFilter" : function () {
	    	openFilter();
	    },
	    "closeFilter" : function () {
	    	closeFilter(); 
	    },
	    "resetFilter" : function () {
	    	resetFilter(); 	    	
	    },
	    "refresh" : function () {
	    	refresh(); 	    	
	    },
	    "showShadows" : function () {
	    	showShadows(); 	    	
	    },
	    "hideShadows" : function () {
	    	hideShadows(); 	    	
	    }
	  }; // end of the return
	  
}();
	
	
//Events
	
$(document).on('pageinit', '#listPenyes',function(e,data){ 
	listPenyes.refresh();
});

$(document).on('pageshow', '#listPenyes',function(e,data){ 
	listPenyes.showShadows();
});

$(document).on('pagehide', '#listPenyes',function(e,data){ 
	listPenyes.hideShadows();
});
	
	