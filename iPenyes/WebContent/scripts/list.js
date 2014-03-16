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
	
	return { 
	    "openFilter" : function () {
	    	openFilter();
	    },
	    "closeFilter" : function () {
	    	closeFilter(); 
	    },
	    "resetFilter" : function () {
	    	resetFilter(); 	    	
	    }
	  }; // end of the return
	  
}();
	
	
//Events
	

$('#listPenyes').bind('pageinit', function() {
	  $('#listviewpenyes').listview('refresh');
});

$(document).on('pageshow', '#listPenyes',function(e,data){ 
	$(".innerInfiniteShadowTop").fadeIn( "slow" );
	$(".innerInfiniteShadowBottom").fadeIn( "slow" );
});

$(document).on('pagehide', '#listPenyes',function(e,data){ 
	$(".innerInfiniteShadowTop").hide();
	$(".innerInfiniteShadowBottom").hide();
});
	
	