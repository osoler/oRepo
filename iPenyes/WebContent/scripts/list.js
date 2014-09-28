var listPenyes = function () {
	
	function cleanList(){
		
		if ($('#listviewpenyes').length == 0){
			$("#contentlistPenyes").append("<ul id='listviewpenyes' data-role='listview' data-inset='true' data-filter='false'></ul>");	
			$("#contentlistPenyes").append("<div id='morelistviewpenyes'>" +
					"<div class='innerLoadMore search'><div onclick='filterPenyes.search(true)' class='buttonHover'>"+texts.h().more+"</div></div>" +
					"</div>");	
			$("#morelistviewpenyes").hide();
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
	    	 var penyaHtml = "<li data-icon='false'><a href='#' onclick='detailPenyes.loadDetailPenya("+ item.id +")'  class='penyaBean' >" +
	    	 		"<div id='detailPenyaBean'><div class='coat'><img id='penya-logo-" + item.id + "' class='ui-li-icon' src='images/spinner.gif'></div>" +
	    	 				"<div  class='description'> <div  class='namePenya'><span>" + item.shortname + "</span></div></div>" +
	    	 						"<div class='rightarrow'><img class='icon-arrow' src='images/icon-arrow-black.png'></div>" +
	    	 						"<div id='penyaMoreInfo' class='moreinfo'><div id='penyaLocation' class='location'><span>" + item.city + "</span></div>" +
	    	 						"<div id='penyaSubarea' class='subarea'>" + item.subarea + "</div>" +
 	    	 						"<div id='penyaCountry' class='country'>" + item.country + "</div>" +
	    	 						"<div id='penyaFundationYear' class='fundationYear'>"+texts.h().fundation+": " + item.fundationYear + "</div>" +
	    	 				"</div></div></a></li>";
	    	 navigation.loadLogo("#penya-logo-" + item.id, item.logo);
	    	 $("#listviewpenyes").append(penyaHtml);
		});
	       	
    	refresh();
		$("#morelistviewpenyes").show();
    	
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
		if (filterPenyes.isFullLoaded()){
			$("#morelistviewpenyes").hide();
		}else{
			$("#morelistviewpenyes").show();
		}
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
	
	detailPenyes.clearSelectedPenya();
	
	if (!menuInitiated){
		setTimeout(function (){listPenyes.initMenu(showPenyes);},1000);
	}else{
		showPenyes();
	}
	
	if (listPenyes.isListEmpty()){
		listPenyes.displayPenyes();
	}
	
	navigation.showShadows();		
});

$(document).on('pagehide', '#listPenyes',function(e,data){ 
	navigation.hideShadows();
});


	
	