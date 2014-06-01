var mapPenyes = function () {
	var currentinfowindow;
	
	//MAP_OPTS_XX = [{map_ops},x,y]
	var MAP_OPTS_catalonia  = [{},1,1.8];
    var MAP_OPTS_spain 		= [{},1,3];    
    var MAP_OPTS_europe		= [{},5,7];     
    var MAP_OPTS_world 		= [{},10,30];  
    
    try{
		MAP_OPTS_catalonia[0] = {zoom: 6, center: new google.maps.LatLng(40,1), mapTypeId: google.maps.MapTypeId.ROADMAP, disableDefaultUI: true};   
	    MAP_OPTS_spain[0] = {zoom: 5, center: new google.maps.LatLng(40,-4), mapTypeId: google.maps.MapTypeId.ROADMAP, disableDefaultUI: true};    
	    MAP_OPTS_europe[0] = {zoom: 4, center: new google.maps.LatLng(50,3),mapTypeId: google.maps.MapTypeId.ROADMAP,disableDefaultUI: true};    
	    MAP_OPTS_world[0] = {zoom: 2,center: new google.maps.LatLng(30,40),mapTypeId: google.maps.MapTypeId.ROADMAP,disableDefaultUI: true};   

    }catch(e){
    	console.log(e);
    }
    
	function addMarker(penya, map, counter, addSelectedPenya){
		if (counter >=filterPenyes.getListOfFanClubs().length && !addSelectedPenya) {
			return false;
		}
		var title = "penya";	   
		var newcounter = counter + 1; 

		var contentString = "<div class='coat'><img id='infowindow-penya-logo-" + penya.id + "' class='desc-icon' src='/images/spinner.gif'></div><div  class='description'> " +
				"<div  class='namePenya'><span>" + penya.name + "</span></div></div><div id='penyaMoreInfo' class='moreinfo'>" +
						"	<div id='penyaLocation' class='location'><span>" + penya.location + ", " + penya.country + "</span></div>" +
								"	<div id='penyaNumSocios' class='numSocios'>" + penya.numAffiliates + " socios</div>" +
										"	<div id='penyaFundationYear' class='fundationYear'>Fundación: " + penya.fundationYear + "</div></div>	";	
		
		var infowindow = new InfoBubble({mainfowindowp: map,content: contentString,position: new google.maps.LatLng(-35, 151),
		        shadowStyle: 1,padding: 0,backgroundColor: '#030C51',borderRadius: 22,arrowSize: 10,minWidth:220,maxWidth:250,
		        minHeight:116,maxHeight:118,borderWidth: 0,borderColor: '#030C51',disableAutoPan: true,hideCloseButton: true,
		        arrowPosition: 20,backgroundClassName: 'infowindowPenyes',arrowStyle: 2});	
		
		if (detailPenyes.getSelectedPenya() == undefined || detailPenyes.getSelectedPenya().id != penya.id || addSelectedPenya){
			var myLatlng = new google.maps.LatLng(penya.x, penya.y);            	 
			var marker = new google.maps.Marker({position: myLatlng,map: map,title:title,animation: google.maps.Animation.DROP, icon: '/images/fcb_marker.png'});
			google.maps.event.addListener(marker, 'click', function() {
				if (mapPenyes.getCurrentInfoWindow()) {
					currentinfowindow.close();
				}			
				infowindow.open(map,marker);
				var zoom = map.getZoom();
				var showArea = filterPenyes.getArea();
				if (zoom <= 2){
					showArea = "world";
				}else if (zoom > 2 && zoom <= 4){
					showArea = "europe";
				}else if (zoom === 5){
					showArea = "spain";
				}else if (zoom >= 6){
					showArea = "catalonia";
				}
				var x = eval('MAP_OPTS_' + showArea + '[1]');
				var y = eval('MAP_OPTS_' + showArea + '[2]');
				var newLatlng = new google.maps.LatLng(myLatlng.k + x,myLatlng.A + y);            				
			    map.setCenter(newLatlng);            			    
				currentinfowindow = infowindow; 
				navigation.setTimeout(setTimeout(function(){if (infowindow.isOpen()) {navigation.loadLogo("#infowindow-penya-logo-" + penya.id, penya.logo);}} , 1000));
			});  
			if (addSelectedPenya){
				if (mapPenyes.getCurrentInfoWindow()) {
					currentinfowindow.close();
				}			
				infowindow.open(map,marker);
				var zoom = map.getZoom();
				var showArea = filterPenyes.getArea();
				if (zoom <= 2){
					showArea = "world";
				}else if (zoom > 2 && zoom <= 4){
					showArea = "europe";
				}else if (zoom === 5){
					showArea = "spain";
				}else if (zoom >= 6){
					showArea = "catalonia";
				}
				var x = eval('MAP_OPTS_' + showArea + '[1]');
				var y = eval('MAP_OPTS_' + showArea + '[2]');
				var newLatlng = new google.maps.LatLng(myLatlng.k + x,myLatlng.A + y);            				
			    map.setCenter(newLatlng);            			    
				currentinfowindow = infowindow; 
				navigation.setTimeout(setTimeout(function(){if (infowindow.isOpen()) {navigation.loadLogo("#infowindow-penya-logo-" + penya.id, penya.logo);}} , 300));
			}
			google.maps.event.addDomListener(infowindow.bubble_, 'click', function(){
				    detailPenyes.loadDetailPenya(penya.id);
				});
		}
		navigation.setTimeout(setTimeout(function(){ addMarker(filterPenyes.getListOfFanClubs()[newcounter], map, newcounter, false); } , 600));		
	 
		return false; 
	}

	function createMap(){	

		$('#map_canvas').empty();
		
		$('#contentMap').height(getRealContentHeight());
	    $('#map_canvasWrapper').height($('#contentMap').height());
	    $('#map_canvas').height($('#map_canvasWrapper').height());	
	    
	    var map_opts = 'MAP_OPTS_' + filterPenyes.getArea() + "[0]";
	    
	    if (detailPenyes.getSelectedPenya() != undefined){
	    	map_opts = {
	    	    	    zoom: eval(map_opts).zoom,
	    	    	    center: new google.maps.LatLng(detailPenyes.getSelectedPenya().x, detailPenyes.getSelectedPenya().y),
	    	    	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    	    	    disableDefaultUI: true};
	    }
	    var map = new google.maps.Map($('#map_canvas')[0], eval(map_opts));  
	    if (detailPenyes.getSelectedPenya() != undefined){
	    	 addMarker(detailPenyes.getSelectedPenya(), map, -1, true);
	    }
	    if ((filterPenyes.getListOfFanClubs() != undefined) && (filterPenyes.getListOfFanClubs().length > 0)){
		    addMarker(filterPenyes.getListOfFanClubs()[0], map, 0, false);
		}
		google.maps.event.addListener(map, 'click', function() {
			if (mapPenyes.getCurrentInfoWindow()) currentinfowindow.close();
		});		
		google.maps.event.addListener(map, 'idle', function(){setTimeout(removeGoogleLinks(),2500);});
		
		navigation.hidePageLoading();
	    return false; 
	    
	}
	function removeGoogleLinks(){
		$('a[href^="http://maps.google.com/maps?"]').hide();
		$('a[href^="http://www.google.com/intl"]').hide();
		$('a:contains("Map Data")').hide();
		$('span:contains("Map data")').hide();		
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
	
	function isMapEmpty(){	
		return $('#map_canvas').is(':empty');
	}
	
	function displayPenyes() {
		destroyMap();
		createMap();
	}
return { 
    "displayPenyes" : function () {
    	displayPenyes();
    },	
    "isMapEmpty" : function () {
    	return isMapEmpty(); 
    },
    "destroyMap" : function () {
    	return destroyMap(); 
    },
    "getCurrentInfoWindow" : function () {
    	return currentinfowindow; 
    },
    "setCurrentInfoWindow" : function (infowindow) {
    	currentinfowindow = infowindow; 
    }
  }; // end of the return
}();


//Events

$(document).on('pageshow', '#mapPenyes',function(e,data){ 
	if ((data.prevPage.attr('id') == "detailPenyes") || mapPenyes.isMapEmpty())	{
		if (mapPenyes.isMapEmpty() || detailPenyes.getSelectedPenya() != undefined) {
			mapPenyes.displayPenyes();
		}
	}
});

