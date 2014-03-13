$(document).on('pageshow', '#mapPenyes',function(e,data){ 
	createMap();
});
var currentinfowindow;
function addMarker(map, counter){
	if (counter >=30) {
		return false;
	}
	
	var title = "penya";
    var randX = Math.random();
    var randY = Math.random();
    randX *= (randX * 1000000) % 2 == 0 ? 1 : -1;
    randY *= (randY * 1000000) % 2 == 0 ? 1 : -1;	
    var x = 60 + (randX * 0.5);
    var y = 17 + (randY * 0.5);
	var newcounter = counter + 1; 
    $.ajax({
        url: "infowindowpenya.jsp",
        success: function(html)
        {
            if(html)
            {
            	   var contentString = html;	
            	   var infowindow = new InfoBubble({
            	        mainfowindowp: map,
            	        content: contentString,
            	        position: new google.maps.LatLng(-35, 151),
            	        shadowStyle: 1,
            	        padding: 0,
            	        backgroundColor: '#0D56A4',
            	        borderRadius: 22,
            	        arrowSize: 10,
            	        minWidth:220,
            	        maxWidth:250,
            	        minHeight:116,
            	        maxHeight:118,
            	        borderWidth: 0,
            	        borderColor: '#2c2c2c',
            	        disableAutoPan: true,
            	        hideCloseButton: true,
            	        arrowPosition: 20,
            	        backgroundClassName: 'infowindowPenyes',
            	        arrowStyle: 2
            	      });
            	    var myLatlng = new google.maps.LatLng(x,y);
            		var marker = new google.maps.Marker({position: myLatlng,map: map,title:title,animation: google.maps.Animation.DROP, icon: '/images/fcb_marker.png'});
            		google.maps.event.addListener(marker, 'click', function() {
            				if (currentinfowindow) currentinfowindow.close();
            				infowindow.open(map,marker);
            				currentinfowindow = infowindow;
            			});  	
            		google.maps.event.addDomListener(infowindow.bubble_, 'click', function(){
            			$.mobile.changePage( "#detailPenyes" ,{ transition: "slide", changeHash: false });
            		});
            		addMarker(map, newcounter);
            }
        }
        });
	
 
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
    
    addMarker(map, 0);
    
	google.maps.event.addListener(map, 'click', function() {
		if (currentinfowindow) currentinfowindow.close();
	});

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
	if (($.mobile.activePage.is("#mapPenyes"))){	
		jQuery.mobile.changePage("#mapPenyes", {allowSamePageTransition: true,transition: 'none',reloadPage: false});
	}
});








