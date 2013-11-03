$(window).bind( 'orientationchange', function(e){
	if ($.mobile.activePage.is("#mapPenyes")){ 
		$.mobile.changePage( "Map2.jsp#mapPenyes" ,{ transition: "none", changeHash: false });
	}	
	if ($.mobile.activePage.is("#mapPenyes2")){ 
		$.mobile.changePage( "Map.jsp#mapPenyes" ,{ transition: "none", changeHash: false });
	}	
});

$(document).on('pageshow', '#mapPenyes',function(e,data){ 
	createMap();
});

$(document).on('pageshow', '#mapPenyes2',function(e,data){ 
	createMap();
});


function createMap(){	
	$('#map_canvas').empty();
	
	$('#contentMap').height(getRealContentHeight());
    $('#map_canvasWrapper').height($('#contentMap').height());
    $('#map_canvas').height($('#map_canvasWrapper').height());	
	
	
    var myLatlng = new google.maps.LatLng(60,17);
    var myLatlng2 = new google.maps.LatLng(60,18);
    var myLatlng3 = new google.maps.LatLng(61,17);
    var myLatlng4 = new google.maps.LatLng(60,17.1);
    
    var mapOptions = {
    	    zoom: 6,
    	    center: myLatlng,
    	    mapTypeId: google.maps.MapTypeId.ROADMAP,
    	    disableDefaultUI: true};
    
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);    
    
    new google.maps.Marker({position: myLatlng,map: map,title:"Hello Penyes1!",animation: google.maps.Animation.DROP});
    new google.maps.Marker({position: myLatlng2,map: map,title:"Hello Penyes 2!",animation: google.maps.Animation.DROP});
    new google.maps.Marker({position: myLatlng3,map: map,title:"Hello Penyes 3!",animation: google.maps.Animation.DROP});
    new google.maps.Marker({position: myLatlng4,map: map,title:"Hello Penyes 3!",animation: google.maps.Animation.DROP});

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










