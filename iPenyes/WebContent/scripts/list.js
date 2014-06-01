var listPenyes = function () {
	// Store position location
	var storePosition = {
	    topCoordinate : null
	};
	
	function cleanList(){
		if ($('#listviewpenyes').length == 0){
			$("#contentlistPenyes").append("<ul id='listviewpenyes' data-role='listview' data-inset='true' data-filter='false'></ul>");	  
			$("#listviewpenyes").listview();
		}
		
		$("#listviewpenyes").empty();
		refresh();
	};
	
	function refresh(){
		$('#listviewpenyes').listview('refresh');
	};
	
	
	function loadPenyesJSON(listPenyes){
		 		
		$.each( listPenyes, function( i, item ) {
	    	 var penyaHtml = "<li data-icon='false'><a href='#' onclick='detailPenyes.loadDetailPenya("+ item.id +", this)'  class='penyaBean' >" +
	    	 		"<div id='detailPenyaBean'><div class='coat'><img id='penya-logo-" + item.id + "' class='ui-li-icon' src='/images/spinner.gif'></div>" +
	    	 				"<div  class='description'> <div  class='namePenya'><span>" + item.name + "</span></div></div>" +
	    	 						"<div class='rightarrow'><img class='icon-arrow' src='/images/icon-arrow-black.png'></div>" +
	    	 						"<div id='penyaMoreInfo' class='moreinfo'><div id='penyaLocation' class='location'><span>" + item.location + "</span></div>" +
	    	 						"<div id='penyaCountry' class='country'>" + item.country + "</div>" +
	    	 						"<div id='penyaNumSocios' class='numSocios'>" + item.numAffiliates + " socios</div>" +
	    	 						"<div id='penyaFundationYear' class='fundationYear'>Fundación: " + item.fundationYear + "</div>" +
	    	 				"</div></div></a></li>";
	    	 navigation.loadLogo("#penya-logo-" + item.id, item.logo);
	    	 $("#listviewpenyes").append(penyaHtml);
		});
	       	
    	refresh();
    	
	}
	
	function isListEmpty(){	
		return $('#listviewpenyes').find('li').length === 0 ;
	}
	
	function initMenu(callBack){
		$("#listFooter").slideToggle( "slow" , function() {
			$(".filterLogo").toggle("slide", function() {
				callBack();
			});
		});
	}
	
	function displayPenyes() {
		listPenyes.cleanList();
		loadPenyesJSON(filterPenyes.getListOfFanClubs());
	}
	
	return { 
	    "refresh" : function () {
	    	refresh(); 	    	
	    },    
	    "isListEmpty" : function () {
	    	return isListEmpty(); 
	    },		
	    "cleanList" : function () {
		     cleanList(); 
	    },
	    "displayPenyes" : function () {
	    	displayPenyes();
	    },	    
	    "getTopCoordinate" : function () {
	    	return storePosition.topCoordinate;
	    },	    
	    "setTopCoordinate" : function (coordinate) {
			var rowCoord = coordinate - 67;//67px header height
			var newCoordinate = rowCoord - (rowCoord - $(window).scrollTop());
	    	storePosition.topCoordinate = newCoordinate; 
	    },	    
	    "goToTopCoordinate" : function () {
	        if(listPenyes.getTopCoordinate() !== null) {    
	            //$.mobile.silentScroll(listPenyes.getTopCoordinate());
	        	var coord = listPenyes.getTopCoordinate()+'px';
	        	$('html, body').animate({scrollTop: coord}, 1500);
	        }
	    },	
	    "initMenu" : function (callBack) {
		     initMenu(callBack); 
		}
	  }; // end of the return
	  
}();
		
//Events
	
$(document).on('pageshow', '#listPenyes',function(e,data){
	var prevPage = data.prevPage.attr('id'); 
	var menuInitiated = $("#listFooter").is(":visible");
	
	var showPenyes = function(){
		if (prevPage != "detailPenyes")	{
			if ((filterPenyes.getListOfFanClubs() === undefined) || (filterPenyes.getListOfFanClubs().length === 0)){
				setTimeout(filterPenyes.search, 1000);				
			}
		}
	};
	
	if (!menuInitiated){
		setTimeout(function (){listPenyes.initMenu(showPenyes);},1000);
	}else{
		showPenyes();
	}
	
	if (listPenyes.isListEmpty()){
		listPenyes.displayPenyes();
	}
	
	if (prevPage === "detailPenyes")	{
		listPenyes.goToTopCoordinate();
	}
	navigation.showShadows();		
});

$(document).on('pagehide', '#listPenyes',function(e,data){ 
	navigation.hideShadows();
});


	
	