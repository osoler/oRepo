var configuration = function () {
	var domain 			= 'http://ipenyes.jelastic.elastx.net';
	var urlserver 		= '/iPenyesServer';	
	var urlResources 	= '/iPenyesResources';
	var urlphotos 		= '/images/photosPenyes/';
	var urlescudos 		= '/images/escudos/';
	
	var socialicons = 'images/socialicons/';
	var spinner 	= 'images/spinner.gif';	
	var imageNames = [ 'images/spinner.gif',
	                   'images/ico-close-button.png',
	                   'images/close-button.png',
	                   'images/close-button-blue.png',
	                   'images/ajax-loader-infinite.gif',
					   'images/logo_fcb_penyes_250x90.png',
					   'images/lupa.png',
					   'images/map-marker-l.png',
					   'images/icon_list.png',
					   'images/fcb_marker.png',
					   'images/map_icon.png',
					   'images/catalonia.png',
					   'images/spain.png',
					   'images/europe.png', 
					   'images/world.png' ];
	  return {
	    "getImages" : function () {
	    	return imageNames;
	    }, 
		"getPhotos" : function () {
	    	return domain + urlResources+ urlphotos;
	    }, 
		"getEscudos" : function () {
	    	return domain + urlResources+ urlescudos;
	    }, 
	    "getSpinner" : function () {
	    	return spinner;
	    },  
	    "getSocialIcons" : function () {
	    	return socialicons;
	    },
	    "getUrlServer" : function () {
	    	return domain + urlserver;
	    },
	    "getDomain" : function () {
	    	return domain ;
	    }
	  }; // end of the return
}();

