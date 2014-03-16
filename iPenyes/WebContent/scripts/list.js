var listPenyes = function () {
	 
	var  fakereloaded = 0; 
	var  maxfakereloaded = 3; 
	
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
	
	function hideLoader(){
		$('#loadmoreajaxloader').hide();
	};
	
	function loadPenyes(){
		var nocache = new Date().getTime();
        $.ajax({
        	dataType: "json",
	        url: "getPenyesJSON.jsp?cache=" + nocache,
	        success: function(result){
	            if(result)
	            {
	            	loadPenyesJSON(result);
	            }
	        },
	        error: function (xhr, ajaxOptions, thrownError) {
	            console.log(xhr.status);
	            console.log(thrownError);
	        }
        });	
	};
	
	function loadLogo(img, src){		       
        var image = new Image();
        image.src = "/images/escudos/" + src;
        image.onload = function(){
        	$(img).attr("src", image.src);
        };   
	}
	
	function loadPenyesJSON(list){
	     
		$.each( list.penyes, function( i, item ) {
	    	 var penyaHtml = "<li data-icon='false'><a href='#' onclick='detailPenyes.goToDetail()'  class='penyaBean' >" +
	    	 		"<div id='detailPenyaBean'><div class='coat'><img id='penya-logo-" + item.id + "' class='ui-li-icon' src='/images/loading-icon-blue-purple50x50.gif'></div>" +
	    	 				"<div  class='description'> <div  class='namePenya'><span>" + item.namePenya + "</span></div></div>" +
	    	 						"<div class='rightarrow'><img class='icon-arrow' src='/images/icon-arrow-black.png'></div>" +
	    	 						"<div id='penyaMoreInfo' class='moreinfo'><div id='penyaLocation' class='location'><span>" + item.location + "</span></div>" +
	    	 						"<div id='penyaCountry' class='country'>" + item.country + "</div>" +
	    	 						"<div id='penyaNumSocios' class='numSocios'>" + item.numAffiliates + " socios</div>" +
	    	 						"<div id='penyaFundationYear' class='fundationYear'>Fundación: " + item.fundationYear + "</div>" +
	    	 				"</div></div></a></li>";
	    	 listPenyes.loadLogo("#penya-logo-" + item.id, item.logo);
	    	 $(penyaHtml).insertBefore( "#loadmoreajaxloader" );
	       });
	     
    	listPenyes.refresh();
    	
    	listPenyes.setFakeReloaded(listPenyes.getFakeReloaded() + 1);
	    
    	if (listPenyes.getFakeReloaded() >= listPenyes.getMaxFakeReloaded()){
	    	listPenyes.hideLoader();
	    	listPenyes.refresh();
	    }	
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
	    },
	    "loadPenyes" : function () {
	    	loadPenyes(); 	    	
	    },
	    "setFakeReloaded" : function (newValue) {
	    	fakereloaded = newValue;
	    },
	    "getFakeReloaded" : function () {
	     return fakereloaded; 
	    },
	    "getMaxFakeReloaded" : function () {
	     return maxfakereloaded; 
	    },
	    "hideLoader" : function () {
	    	hideLoader(); 
	    },
	    "loadLogo" : function (img, src) {
	    	loadLogo(img, src); 
		}
	  }; // end of the return
	  
}();
	
	
//Events
	
$(document).on('pageinit', '#listPenyes',function(e,data){ 
	listPenyes.loadPenyes();
});

$(document).on('pageshow', '#listPenyes',function(e,data){ 
	listPenyes.showShadows();
});

$(document).on('pagehide', '#listPenyes',function(e,data){ 
	listPenyes.hideShadows();
});

$(window).scroll(function(){
	if (($.mobile.activePage.is("#listPenyes"))||($.mobile.activePage.is("#detailPenyes"))){		
		if (($.mobile.activePage.is("#listPenyes"))&&(listPenyes.getFakeReloaded() < listPenyes.getMaxFakeReloaded())&&
				(($(document).height() - 200)  <= $(window).scrollTop() + $(window).height())
			){
		        listPenyes.loadPenyes();				        			        
		    }
	}
});
	
	