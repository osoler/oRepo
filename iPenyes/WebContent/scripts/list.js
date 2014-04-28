var listPenyes = function () {
	 
	var listOfFanClubs = undefined;
	
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
	
	function showShadows(){
		if (listOfFanClubs != undefined && listOfFanClubs.length > 0){
			$(".innerInfiniteShadowTop").fadeIn( "slow" );
		}
		$(".innerInfiniteShadowBottom").fadeIn( "slow" );
	};
	
	function hideShadows(){
		$(".innerInfiniteShadowTop").hide();
		$(".innerInfiniteShadowBottom").hide();
	};
	
	function loadLogo(img, src){		       
        var image = new Image();
        image.src = src;
        image.onload = function(){
        	$(img).attr("src", image.src);
        };   
	}
	
	function loadPenyesJSON(){
		 		
		$.each( listOfFanClubs, function( i, item ) {
	    	 var penyaHtml = "<li data-icon='false'><a href='#' onclick='detailPenyes.loadDetailPenya("+ item.id +")'  class='penyaBean' >" +
	    	 		"<div id='detailPenyaBean'><div class='coat'><img id='penya-logo-" + item.id + "' class='ui-li-icon' src='/images/spinner.gif'></div>" +
	    	 				"<div  class='description'> <div  class='namePenya'><span>" + item.name + "</span></div></div>" +
	    	 						"<div class='rightarrow'><img class='icon-arrow' src='/images/icon-arrow-black.png'></div>" +
	    	 						"<div id='penyaMoreInfo' class='moreinfo'><div id='penyaLocation' class='location'><span>" + item.location + "</span></div>" +
	    	 						"<div id='penyaCountry' class='country'>" + item.country + "</div>" +
	    	 						"<div id='penyaNumSocios' class='numSocios'>" + item.numAffiliates + " socios</div>" +
	    	 						"<div id='penyaFundationYear' class='fundationYear'>Fundación: " + item.fundationYear + "</div>" +
	    	 				"</div></div></a></li>";
	    	 listPenyes.loadLogo("#penya-logo-" + item.id, item.logo);
	    	 $("#listviewpenyes").append(penyaHtml);
		});
	       	
    	refresh();
    	
    	showShadows();
    	
    	$.mobile.hidePageLoadingMsg();
    	$(".ui-loader").css("display", "none");
	}
	
	function isListEmpty(){	
		return $('#listviewpenyes').find('li').length === 0 ;
	}
	return { 
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
	    	filterPenyes.search(); 	    	
	    },
	    "loadPenyesJSON" : function (result) {
	    	loadPenyesJSON(result); 	    	
	    },	    
	    "loadLogo" : function (img, src) {
	    	loadLogo(img, src); 
		},
	    "getListOfFanClubs" : function () {
		     return listOfFanClubs; 
		},
	    "setListOfFanClubs" : function (list) {
		     listOfFanClubs = list; 
	    },
	    "isListEmpty" : function () {
	    	return isListEmpty(); 
	    },		
	    "cleanList" : function () {
		     cleanList(); 
		}
	  }; // end of the return
	  
}();
	
	
//Events
	
$(document).on('pageinit', '#listPenyes',function(e,data){ 

});

$(document).on('pageshow', '#listPenyes',function(e,data){

	var prevPage = data.prevPage.attr('id'); 
	
	if (prevPage === "initPenyes")	{		
		$("#listFooter").slideToggle( "slow" , function() {
			$(".filterLogo").toggle("slide", function() {
				if (prevPage != "detailPenyes")	{
					setTimeout(filterPenyes.search, 1000);
				}
			 });	
		 });
	}else{
		if (prevPage != "detailPenyes")	{
			if (listPenyes.isListEmpty() || (listPenyes.getListOfFanClubs() === undefined) || (listPenyes.getListOfFanClubs().length === 0)){
				setTimeout(filterPenyes.search, 1000);
			}
		}
	}
	if (!listPenyes.isListEmpty() && (listPenyes.getListOfFanClubs() != undefined) && (listPenyes.getListOfFanClubs().length > 0)){
		listPenyes.showShadows();
	}

	

		
});

$(document).on('pagehide', '#listPenyes',function(e,data){ 
	listPenyes.hideShadows();
});

	
	