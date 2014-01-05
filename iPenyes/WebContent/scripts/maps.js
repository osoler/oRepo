$(document).on('pageshow', '#mapPenyes',function(e,data){ 
	createMap();
});

function addMarker(map, title, x, y){
	 var myLatlng = new google.maps.LatLng(x,y);
	 new google.maps.Marker({position: myLatlng,map: map,title:title,animation: google.maps.Animation.DROP});
	 return false; 
}
function createMap(){	
	$('#map_canvas').empty();
	
	$('#contentMap').height(getRealContentHeight());
    $('#map_canvasWrapper').height($('#contentMap').height());
    $('#map_canvas').height($('#map_canvasWrapper').height());	
	
	
    var myLatlng = new google.maps.LatLng(60,17);
    
    var mapOptions = {
    	    zoom: 9,
    	    center: myLatlng,
    	    mapTypeId: google.maps.MapTypeId.ROADMAP,
    	    disableDefaultUI: true};
    
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);    
    
    addMarker(map, title,60,17);
    for (var n = 1; n <= 30; n++) {
    	var title = "Hello Penyes " + n ;
        var randX = Math.random();
        var randY = Math.random();
        randX *= (randX * 1000000) % 2 == 0 ? 1 : -1;
        randY *= (randY * 1000000) % 2 == 0 ? 1 : -1;	
    	addMarker(map, title,60 + (randX * 0.5),17 + (randY * 0.5));
    }
    return false; 
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

$(window).bind( 'orientationchange', function(e){
	 jQuery.mobile.changePage("#mapPenyes", {allowSamePageTransition: true,transition: 'none',reloadPage: false});	
});








