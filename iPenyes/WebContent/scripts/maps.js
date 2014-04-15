var mapPenyes = function () {
	var currentinfowindow;
    
	var MAP_OPTS_catalonia = {
    	    zoom: 6,
    	    center: new google.maps.LatLng(40,1),
    	    mapTypeId: google.maps.MapTypeId.ROADMAP,
    	    disableDefaultUI: true};
    var MAP_OPTS_catalonia_x = 1;
    var MAP_OPTS_catalonia_y = 1.8;
    
    var MAP_OPTS_spain = {
    	    zoom: 5,
    	    center: new google.maps.LatLng(40,-4),
    	    mapTypeId: google.maps.MapTypeId.ROADMAP,
    	    disableDefaultUI: true};
    var MAP_OPTS_spain_x = 1;
    var MAP_OPTS_spain_y = 3;
    
    var MAP_OPTS_europe = {
    	    zoom: 4,
    	    center: new google.maps.LatLng(50,3),
    	    mapTypeId: google.maps.MapTypeId.ROADMAP,
    	    disableDefaultUI: true};
    var MAP_OPTS_europe_x = 5;
    var MAP_OPTS_europe_y = 7;    
    
    var MAP_OPTS_world = {
    	    zoom: 2,
    	    center: new google.maps.LatLng(30,40),
    	    mapTypeId: google.maps.MapTypeId.ROADMAP,
    	    disableDefaultUI: true};   
    var MAP_OPTS_world_x = 10;
    var MAP_OPTS_world_y = 30;

	function addMarker(penya, map, counter){
		if (counter >=listPenyes.getListOfFanClubs().length) {
			return false;
		}
		
		var title = "penya";	   
		var newcounter = counter + 1; 

		var contentString = "<div class='coat'><img id='infowindow-penya-logo-" + penya.id + "' class='desc-icon' src='/images/spinner.gif'></div><div  class='description'> " +
				"<div  class='namePenya'><span>" + penya.name + "</span></div></div><div id='penyaMoreInfo' class='moreinfo'>" +
						"	<div id='penyaLocation' class='location'><span>" + penya.location + ", " + penya.country + "</span></div>" +
								"	<div id='penyaNumSocios' class='numSocios'>" + penya.numAffiliates + " socios</div>" +
										"	<div id='penyaFundationYear' class='fundationYear'>Fundación: " + penya.fundationYear + "</div></div>	";	
		
		var infowindow = new InfoBubble({
		        mainfowindowp: map,
		        content: contentString,
		        position: new google.maps.LatLng(-35, 151),
		        shadowStyle: 1,
		        padding: 0,
		        backgroundColor: '#030C51',
		        borderRadius: 22,
		        arrowSize: 10,
		        minWidth:220,
		        maxWidth:250,
		        minHeight:116,
		        maxHeight:118,
		        borderWidth: 0,
		        borderColor: '#030C51',
		        disableAutoPan: true,
		        hideCloseButton: true,
		        arrowPosition: 20,
		        backgroundClassName: 'infowindowPenyes',
		        arrowStyle: 2
		      });		
		var myLatlng = new google.maps.LatLng(penya.x, penya.y);            	 
		var marker = new google.maps.Marker({position: myLatlng,map: map,title:title,animation: google.maps.Animation.DROP, icon: '/images/fcb_marker.png'});
		google.maps.event.addListener(marker, 'click', function() {
					if (currentinfowindow) {currentinfowindow.close();}			
					infowindow.open(map,marker);
					var x = eval('MAP_OPTS_' + filterPenyes.getArea() + '_x');
					var y = eval('MAP_OPTS_' + filterPenyes.getArea() + '_y');
					var newLatlng = new google.maps.LatLng(myLatlng.k + x,myLatlng.A + y);            				
				    map.setCenter(newLatlng);            			    
					currentinfowindow = infowindow; 
					navigation.setTimeout(setTimeout(function(){if (infowindow.isOpen()) {listPenyes.loadLogo("#infowindow-penya-logo-" + penya.id, penya.logo);}} , 300));
				});  	
		google.maps.event.addDomListener(infowindow.bubble_, 'click', function(){
			    detailPenyes.loadDetailPenya(penya.id);
				$.mobile.changePage( "#detailPenyes" ,{ transition: "slide", changeHash: false });
			});
		
		navigation.setTimeout(setTimeout(function(){ addMarker(listPenyes.getListOfFanClubs()[newcounter], map, newcounter); } , 600));		
	 
		return false; 
	}
	function createMap(){	

		$('#map_canvas').empty();
		
		$('#contentMap').height(getRealContentHeight());
	    $('#map_canvasWrapper').height($('#contentMap').height());
	    $('#map_canvas').height($('#map_canvasWrapper').height());	
	    
	    var map_opts = 'MAP_OPTS_' + filterPenyes.getArea();
			    
	    var map = new google.maps.Map(document.getElementById("map_canvas"), eval(map_opts));  
	    if ((listPenyes.getListOfFanClubs() != undefined) && (listPenyes.getListOfFanClubs().length > 0)){
		    addMarker(listPenyes.getListOfFanClubs()[0], map, 0);
		}
		google.maps.event.addListener(map, 'click', function() {
			if (currentinfowindow) currentinfowindow.close();
		});
		
    	$.mobile.hidePageLoadingMsg();
    	$(".ui-loader").css("display", "none");

	    return false; 
	    
	}
	function destroyMap(){	
		navigation.clearAllTimeouts();
		$('#map_canvas').empty();
	}


	function getRealContentHeight() {
		var header = $.mobile.activePage.find("div[data-role='header']:visible");
		var footer = $.mobile.activePage.find("div[data-role='footer']:visible");
		var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
		var viewport_height = $(window).height();

		var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
		if((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
			content_height -= (content.outerHeight() - content.height());
		} 
		return content_height;
	}	

return { 
    "createMap" : function () {
    	createMap();
    },
    "destroyMap" : function () {
    	destroyMap(); 
    }
  }; // end of the return
}();


//Events

$(document).on('pageshow', '#mapPenyes',function(e,data){ 
	mapPenyes.createMap();
});

$(document).on('pagehide', '#mapPenyes',function(e,data){ 
	mapPenyes.destroyMap();
});


